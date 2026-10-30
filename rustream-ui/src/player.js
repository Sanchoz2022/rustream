import { coverUrl, streamUrl, startPlay, updatePlay } from './api.js';

export const EQ_BANDS = [32, 64, 125, 250, 500, 1000, 2000, 4000, 8000, 16000];

export const EQ_PRESETS = {
  flat: { name: 'Ровно', gains: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
  rock: { name: 'Рок', gains: [5, 4, 2, -1, -2, 0, 2, 3, 4, 5] },
  pop: { name: 'Поп', gains: [-1, 0, 2, 4, 4, 2, 0, -1, -2, -3] },
  jazz: { name: 'Джаз', gains: [4, 3, 1, 2, -1, -1, 0, 2, 3, 4] },
  bass: { name: 'Бас', gains: [8, 7, 5, 2, 0, -1, -2, -3, -4, -5] },
  vocal: { name: 'Вокал', gains: [-3, -2, 0, 3, 5, 5, 3, 1, 0, -1] },
  electronic: { name: 'Электроника', gains: [5, 4, 1, 0, -2, 2, 1, 2, 5, 6] },
};

const STORAGE_VOLUME = 'rustream.volume';
const STORAGE_EQ = 'rustream.eq';
const STORAGE_MODE = 'rustream.mode';
const STORAGE_QUEUE = 'rustream.playback.queue';
const STORAGE_POSITION = 'rustream.playback.position';

function loadJson(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

export class Player extends EventTarget {
  constructor() {
    super();
    this.audio = new Audio();
    this.audio.preload = 'auto';
    this.audio.crossOrigin = 'anonymous';

    this.queue = [];
    this.index = -1;
    this.shuffle = false;
    this.repeat = 'off'; // off | all | one
    this.track = null;
    this.playId = null;
    this.scrobbled = false;
    this.liveMode = false;

    this.mode = loadJson(STORAGE_MODE, { shuffle: false, repeat: 'off' });
    this.shuffle = !!this.mode.shuffle;
    this.repeat = this.mode.repeat || 'off';

    this.volume = Number(localStorage.getItem(STORAGE_VOLUME) ?? 80);
    this.audio.volume = Math.min(1, Math.max(0, this.volume / 100));

    this.eqState = loadJson(STORAGE_EQ, {
      enabled: true,
      preset: 'flat',
      gains: [...EQ_PRESETS.flat.gains],
    });

    this.audioContext = null;
    this.filters = [];
    this.sourceNode = null;
    this._lastPositionWrite = 0;
    this._restoredPause = false;

    this._bindAudio();
    window.addEventListener('pagehide', () => this._storePosition(true));
  }

  _bindAudio() {
    this.audio.addEventListener('timeupdate', () => {
      this._maybeScrobble();
      this._storePosition();
      this._emit('time');
    });
    this.audio.addEventListener('durationchange', () => this._emit('time'));
    this.audio.addEventListener('progress', () => this._emit('buffer'));
    this.audio.addEventListener('loadedmetadata', () => this._emit('time'));
    this.audio.addEventListener('play', () => {
      if (!this.playId && this.track && this._restoredPause) {
        this._restoredPause = false;
        this._beginPlay(this.track);
      }
      this._storePosition(true);
      this._emit('state');
    });
    this.audio.addEventListener('pause', () => {
      this._storePosition(true);
      this._emit('state');
    });
    this.audio.addEventListener('volumechange', () => this._emit('volume'));
    this.audio.addEventListener('ended', () => this._onEnded());
    this.audio.addEventListener('waiting', () => this._emit('state'));
    this.audio.addEventListener('playing', () => this._emit('state'));
    this.audio.addEventListener('error', () => {
      if (this.track) {
        this.dispatchEvent(
          new CustomEvent('error', { detail: `Не удалось воспроизвести «${this.track.title}»` }),
        );
      }
    });
  }

  _emit(kind) {
    this.dispatchEvent(new CustomEvent(kind));
  }

  // --- Equalizer ---------------------------------------------------------

  _initAudioGraph() {
    if (this.audioContext) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    this.audioContext = new AudioContext();
    this.sourceNode = this.audioContext.createMediaElementSource(this.audio);
    this.filters = EQ_BANDS.map((frequency) => {
      const filter = this.audioContext.createBiquadFilter();
      filter.type = 'peaking';
      filter.frequency.value = frequency;
      filter.Q.value = 1.1;
      filter.gain.value = 0;
      return filter;
    });

    let node = this.sourceNode;
    for (const filter of this.filters) {
      node.connect(filter);
      node = filter;
    }
    node.connect(this.audioContext.destination);

    this._applyEq();
  }

  _ensureRunning() {
    this._initAudioGraph();
    if (this.audioContext?.state === 'suspended') {
      this.audioContext.resume().catch(() => {});
    }
  }

  _applyEq() {
    if (!this.filters.length) return;
    this.filters.forEach((filter, idx) => {
      filter.gain.value = this.eqState.enabled ? this.eqState.gains[idx] || 0 : 0;
    });
  }

  setEqEnabled(enabled) {
    this.eqState.enabled = enabled;
    this._persistEq();
    this._applyEq();
    this._emit('eq');
  }

  setEqGain(bandIndex, value) {
    this.eqState.gains[bandIndex] = Number(value);
    this.eqState.preset = 'custom';
    this._persistEq();
    this._applyEq();
    this._emit('eq');
  }

  applyEqPreset(key) {
    const preset = EQ_PRESETS[key];
    if (!preset) return;
    this.eqState.preset = key;
    this.eqState.gains = [...preset.gains];
    this._persistEq();
    this._applyEq();
    this._emit('eq');
  }

  resetEq() {
    this.applyEqPreset('flat');
  }

  _persistEq() {
    localStorage.setItem(STORAGE_EQ, JSON.stringify(this.eqState));
  }

  // --- Playback ----------------------------------------------------------

  async playTracks(tracks, startIndex = 0, { shuffle = false } = {}) {
    if (!tracks?.length) return;
    this._finalizePlay(false);
    this.queue = [...tracks];
    if (shuffle) {
      this.shuffle = true;
      this._persistMode();
    }
    this.index = Math.min(Math.max(0, startIndex), this.queue.length - 1);
    this._storeQueue();
    await this._load(this.queue[this.index], true);
  }

  async playAt(index) {
    if (index < 0 || index >= this.queue.length) return;
    this.index = index;
    this._storeQueue();
    await this._load(this.queue[index], true);
  }

  async _load(track, autoplay) {
    if (!track) return;
    this._restoredPause = false;
    this._finalizePlay(false);
    this.track = track;
    this.audio.src = streamUrl(track.id);
    this._beginPlay(track);
    this._updateMediaSession(track);
    this.dispatchEvent(new CustomEvent('track', { detail: track }));

    if (autoplay) {
      this._ensureRunning();
      try {
        await this.audio.play();
      } catch {
        // Autoplay can be blocked until the first user gesture; the UI still
        // shows the paused state and the user can press play.
      }
    }
  }

  async toggle() {
    if (!this.track) return;
    this._ensureRunning();
    if (this.audio.paused) {
      await this.audio.play().catch(() => {});
    } else {
      this.audio.pause();
    }
  }

  pause() {
    this.audio.pause();
  }

  async next(auto = false) {
    if (!this.queue.length) return;
    if (auto && this.repeat === 'one') {
      this.audio.currentTime = 0;
      await this.audio.play().catch(() => {});
      return;
    }

    let nextIndex;
    if (this.shuffle) {
      nextIndex = this.queue.length > 1 ? this._randomIndex() : this.index;
    } else {
      nextIndex = this.index + 1;
    }

    if (nextIndex >= this.queue.length) {
      if (this.repeat === 'all') nextIndex = 0;
      else {
        this.audio.pause();
        return;
      }
    }

    await this.playAt(nextIndex);
  }

  async previous() {
    if (!this.queue.length) return;
    if (this.audio.currentTime > 3) {
      this.audio.currentTime = 0;
      return;
    }
    const index = this.index > 0 ? this.index - 1 : this.queue.length - 1;
    await this.playAt(index);
  }

  _randomIndex() {
    if (this.queue.length <= 1) return this.index;
    let index = this.index;
    while (index === this.index) {
      index = Math.floor(Math.random() * this.queue.length);
    }
    return index;
  }

  async _onEnded() {
    this._finalizePlay(true);
    if (this.repeat === 'one') {
      this.audio.currentTime = 0;
      this._beginPlay(this.track);
      await this.audio.play().catch(() => {});
      return;
    }
    const last = this.index >= this.queue.length - 1;
    if (last && this.repeat === 'off' && !this.shuffle) {
      this._emit('state');
      this._emit('queueend');
      return;
    }
    await this.next(true);
  }

  async _beginPlay(track) {
    this.playId = null;
    this.scrobbled = false;
    try {
      const result = await startPlay(track.id);
      this.playId = result?.playId || null;
    } catch {
      // Statistics are optional; playback must not depend on them.
    }
  }

  _maybeScrobble() {
    if (!this.playId || this.scrobbled) return;
    const duration = this.audio.duration;
    if (!Number.isFinite(duration) || duration < 30) return;
    if (this.audio.currentTime >= duration / 2 || this.audio.currentTime >= 240) {
      this.scrobbled = true;
      updatePlay(this.playId, Math.round(this.audio.currentTime * 1000), true).catch(() => {});
    }
  }

  _finalizePlay(completed) {
    if (!this.playId) return;
    const playId = this.playId;
    this.playId = null;
    updatePlay(playId, Math.round((this.audio.currentTime || 0) * 1000), completed).catch(() => {});
  }

  appendTracks(tracks) {
    if (!tracks?.length) return;
    this.queue.push(...tracks);
    this._storeQueue();
  }

  toggleShuffle() {
    this.shuffle = !this.shuffle;
    this._persistMode();
    this._emit('mode');
  }

  cycleRepeat() {
    const order = ['off', 'all', 'one'];
    this.repeat = order[(order.indexOf(this.repeat) + 1) % order.length];
    this._persistMode();
    this._emit('mode');
  }

  _persistMode() {
    localStorage.setItem(
      STORAGE_MODE,
      JSON.stringify({ shuffle: this.shuffle, repeat: this.repeat }),
    );
  }

  seekTo(percent) {
    const duration = this.audio.duration;
    if (!Number.isFinite(duration) || duration <= 0) return;
    this.audio.currentTime = (Math.min(100, Math.max(0, percent)) / 100) * duration;
    this._emit('time');
  }

  seekToSeconds(seconds) {
    const duration = this.audio.duration;
    if (!Number.isFinite(duration) || duration <= 0) return;
    this.audio.currentTime = Math.min(duration, Math.max(0, seconds));
    this._emit('time');
  }

  removeAt(index) {
    if (index < 0 || index >= this.queue.length || index === this.index) return;
    this.queue.splice(index, 1);
    if (index < this.index) this.index -= 1;
    this._storeQueue();
  }

  seekBy(seconds) {
    if (!Number.isFinite(this.audio.duration)) return;
    this.audio.currentTime = Math.min(
      this.audio.duration,
      Math.max(0, this.audio.currentTime + seconds),
    );
    this._emit('time');
  }

  setVolume(value) {
    this.volume = Number(value);
    this.audio.volume = Math.min(1, Math.max(0, this.volume / 100));
    if (this.volume > 0) this.audio.muted = false;
    localStorage.setItem(STORAGE_VOLUME, String(this.volume));
  }

  toggleMute() {
    this.audio.muted = !this.audio.muted;
    this._emit('volume');
  }

  get currentTime() {
    return this.audio.currentTime || 0;
  }

  get duration() {
    return Number.isFinite(this.audio.duration) ? this.audio.duration : 0;
  }

  get paused() {
    return this.audio.paused;
  }

  get volumePercent() {
    return this.audio.muted ? 0 : Math.round(this.audio.volume * 100);
  }

  get buffered() {
    const duration = this.duration;
    if (!duration) return { end: 0, percent: 0, ahead: 0 };
    const time = this.audio.currentTime;
    let end = 0;
    for (let i = 0; i < this.audio.buffered.length; i += 1) {
      if (this.audio.buffered.start(i) <= time + 0.5) {
        end = Math.max(end, this.audio.buffered.end(i));
      }
    }
    return {
      end,
      percent: Math.min(100, (end / duration) * 100),
      ahead: Math.max(0, end - time),
    };
  }

  estimatedBufferedBytes() {
    const bitrate = this.track?.bitRate || 0;
    if (!bitrate) return 0;
    return (bitrate * 1000 * this.buffered.ahead) / 8;
  }

  // --- State persistence -------------------------------------------------

  _storeQueue() {
    try {
      const snapshot = {
        queue: this.queue,
        index: this.index,
        liveMode: !!this.liveMode,
        updatedAt: Date.now(),
      };
      localStorage.setItem(STORAGE_QUEUE, JSON.stringify(snapshot));
    } catch {
      // Quota or private mode: playback must keep working.
    }
  }

  setLiveMode(liveMode) {
    this.liveMode = !!liveMode;
    this._storeQueue();
  }

  _storePosition(force = false) {
    if (!this.track) return;
    const now = Date.now();
    if (!force && now - this._lastPositionWrite < 2000) return;
    this._lastPositionWrite = now;
    try {
      localStorage.setItem(
        STORAGE_POSITION,
        JSON.stringify({
          trackId: this.track.id,
          position: this.currentTime || 0,
          paused: this.audio.paused,
          updatedAt: now,
        }),
      );
    } catch {
      // Ignore quota errors.
    }
  }

  /**
   * Restore the last queue without starting audio (browsers block autoplay).
   * Returns the saved snapshot, or null when there is nothing to restore.
   */
  restore() {
    let snapshot = null;
    try {
      snapshot = JSON.parse(localStorage.getItem(STORAGE_QUEUE));
    } catch {
      snapshot = null;
    }
    if (!snapshot?.queue?.length) return null;
    if (Date.now() - (snapshot.updatedAt || 0) > 1000 * 60 * 60 * 24 * 7) return null;

    let position = null;
    try {
      position = JSON.parse(localStorage.getItem(STORAGE_POSITION));
    } catch {
      position = null;
    }

    this.queue = snapshot.queue;
    this.index = Math.min(Math.max(0, Number(snapshot.index) || 0), this.queue.length - 1);
    this.liveMode = !!snapshot.liveMode;
    this.track = this.queue[this.index];
    if (!this.track) return null;

    this._restoredPause = true;
    this.audio.src = streamUrl(this.track.id);
    this._updateMediaSession(this.track);
    this.dispatchEvent(new CustomEvent('track', { detail: this.track }));

    if (position?.trackId === this.track.id && Number(position.position) > 1) {
      const applyPosition = () => {
        const duration = this.audio.duration;
        if (Number.isFinite(duration) && position.position < duration - 3) {
          this.audio.currentTime = position.position;
          this._emit('time');
        }
      };
      if (this.audio.readyState >= 1) applyPosition();
      else this.audio.addEventListener('loadedmetadata', applyPosition, { once: true });
    }
    return { track: this.track, liveMode: this.liveMode };
  }

  clearRestored() {
    this._restoredPause = false;
  }

  _updateMediaSession(track) {
    if (!('mediaSession' in navigator)) return;
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title || '',
      artist: track.artist || '',
      album: track.album || '',
      artwork: track.coverArt
        ? [{ src: coverUrl(track.coverArt, 512), sizes: '512x512', type: 'image/jpeg' }]
        : [],
    });
    navigator.mediaSession.setActionHandler('play', () => this.toggle());
    navigator.mediaSession.setActionHandler('pause', () => this.toggle());
    navigator.mediaSession.setActionHandler('previoustrack', () => this.previous());
    navigator.mediaSession.setActionHandler('nexttrack', () => this.next());
  }
}

export function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${String(secs).padStart(2, '0')}`;
}

export function formatDurationLong(ms) {
  const minutes = Math.round(ms / 60000);
  const hours = Math.floor(minutes / 60);
  if (hours > 0) return `${hours} ч ${minutes % 60} мин`;
  return `${minutes} мин`;
}

export function formatBytes(bytes) {
  if (!bytes) return '0 Б';
  const units = ['Б', 'КБ', 'МБ', 'ГБ', 'ТБ'];
  let value = bytes;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit += 1;
  }
  return `${value >= 10 || unit === 0 ? Math.round(value) : value.toFixed(1)} ${units[unit]}`;
}
