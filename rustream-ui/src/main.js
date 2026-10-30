import './style.css';
import { icon } from './icons.js';
import * as api from './api.js';
import {
  Player,
  EQ_BANDS,
  EQ_PRESETS,
  formatTime,
  formatDurationLong,
  formatBytes,
} from './player.js';

const player = new Player();
const root = document.getElementById('app');

const state = {
  currentTracks: [],
  favorites: new Set(),
  dislikes: new Set(),
  favoriteAlbums: new Set(),
  theme: 'violet',
  lyrics: null,
  lyricsTrackId: null,
  lyricsRefresh: false,
  lyricsActiveKey: null,
  npTab: 'lyrics',
  npOpen: false,
  allTracks: null,
  artists: null,
  albums: null,
  stats: null,
  playlists: null,
  me: null,
  meStats: null,
  authConfig: null,
  lastfmConfig: null,
  liveMode: false,
  liveMixes: [],
  renderSeq: 0,
};

const cache = {
  artists: null,
  albums: null,
  tracks: null,
  stats: null,
  playlists: null,
  favorites: null,
  ratings: null,
  recent: null,
  meStats: null,
  liveMixes: null,
};

// ---------------------------------------------------------------------------
// Shell
// ---------------------------------------------------------------------------

root.innerHTML = `
  <div class="ambient" aria-hidden="true">
    <span class="blob blob-a"></span>
    <span class="blob blob-b"></span>
    <span class="blob blob-c"></span>
    <span class="grain"></span>
  </div>

  <header class="topbar">
    <a class="brand" href="#/home" aria-label="Rustream — на главную">
      <span class="brand-mark">${icon('wave')}</span>
      <span class="brand-name">Rustream</span>
    </a>

    <label class="searchbox">
      ${icon('search')}
      <input id="search-input" type="search" placeholder="Артисты, альбомы, треки…" autocomplete="off" />
      <kbd>Ctrl K</kbd>
    </label>

    <div class="topbar-actions">
      <button class="icon-btn" id="rescan-btn" title="Пересканировать библиотеку">${icon('refresh')}</button>
      <button class="now-playing-pill" id="np-pill" title="Открыть плеер">
        ${icon('wave')}<span>Сейчас играет</span>
      </button>
      <a class="user-btn" id="user-btn" href="#/profile" title="Профиль" aria-label="Профиль">
        <span class="user-avatar" id="user-avatar">?</span>
        <span class="user-name" id="user-name">Профиль</span>
      </a>
    </div>
  </header>

  <div class="shell">
    <nav class="nav" aria-label="Разделы">
      <a href="#/home" data-nav="home" class="nav-item"><span class="nav-icon">${icon('home')}</span><span class="nav-label">Главная</span></a>
      <a href="#/live" data-nav="live" class="nav-item"><span class="nav-icon">${icon('radio')}</span><span class="nav-label">Live</span></a>
      <a href="#/ytm" data-nav="ytm" class="nav-item"><span class="nav-icon">${icon('ytm')}</span><span class="nav-label">YouTube</span></a>
      <a href="#/artists" data-nav="artists" class="nav-item"><span class="nav-icon">${icon('person')}</span><span class="nav-label">Артисты</span></a>
      <a href="#/albums" data-nav="albums" class="nav-item"><span class="nav-icon">${icon('album')}</span><span class="nav-label">Альбомы</span></a>
      <a href="#/tracks" data-nav="tracks" class="nav-item"><span class="nav-icon">${icon('music')}</span><span class="nav-label">Треки</span></a>
      <a href="#/stats" data-nav="stats" class="nav-item"><span class="nav-icon">${icon('chart')}</span><span class="nav-label">Статистика</span></a>
      <a href="#/playlists" data-nav="playlists" class="nav-item"><span class="nav-icon">${icon('playlist')}</span><span class="nav-label">Плейлисты</span></a>
      <a href="#/favorites" data-nav="favorites" class="nav-item"><span class="nav-icon">${icon('heart')}</span><span class="nav-label">Избранное</span></a>
      <a href="#/profile" data-nav="profile" class="nav-item"><span class="nav-icon">${icon('person')}</span><span class="nav-label">Профиль</span></a>
      <div class="nav-spacer"></div>
      <div class="nav-hint">
        <span class="dot"></span>
        <span>Локальная библиотека</span>
      </div>
    </nav>

    <main id="view" class="view" tabindex="-1"></main>
  </div>

  <footer class="playerbar" id="playerbar">
    <div class="pb-left">
      <button class="pb-cover" id="pb-cover" data-action="nowplaying" title="Открыть плеер">
        <span class="cover-fallback">${icon('music')}</span>
        <img id="pb-cover-img" alt="" />
        <span class="pb-cover-overlay">${icon('play')}</span>
      </button>
      <div class="pb-meta">
        <div class="pb-title" id="pb-title">Ничего не играет</div>
        <div class="pb-artist" id="pb-artist">Выберите трек</div>
      </div>
      <button class="icon-btn like-btn" id="pb-like" data-action="like-current" title="В избранное">${icon('heartOutline')}</button>
      <button class="icon-btn dislike-btn" id="pb-dislike" data-action="dislike-current" title="Не нравится">${icon('thumbDown')}</button>
    </div>

    <div class="pb-center">
      <div class="pb-controls">
        <button class="icon-btn" id="shuffle-btn" data-action="shuffle" title="Перемешать">${icon('shuffle')}</button>
        <button class="icon-btn" data-action="prev" title="Предыдущий">${icon('prev')}</button>
        <button class="play-btn" id="play-btn" data-action="toggle" title="Играть">${icon('play')}</button>
        <button class="icon-btn" data-action="next" title="Следующий">${icon('next')}</button>
        <button class="icon-btn" id="repeat-btn" data-action="repeat" title="Повтор">${icon('repeat')}</button>
      </div>
      <div class="pb-seek">
        <span class="time" id="cur-time">0:00</span>
        <div class="seek">
          <div class="seek-buffer" id="seek-buffer"></div>
          <div class="seek-fill" id="seek-fill"></div>
          <input type="range" id="seek" min="0" max="100" value="0" step="0.1" aria-label="Позиция" />
        </div>
        <span class="time" id="total-time">0:00</span>
      </div>
    </div>

    <div class="pb-right">
      <div class="pb-quality" id="pb-quality" title="Параметры текущего потока">
        <span class="quality-chip" id="quality-format">—</span>
        <span class="quality-text" id="quality-detail"></span>
      </div>
      <button class="icon-btn" id="lyrics-btn" data-action="open-lyrics" title="Текст песни">${icon('lyrics')}</button>
      <button class="icon-btn" id="eq-btn" data-action="open-eq" title="Эквалайзер">${icon('equalizer')}</button>
      <button class="icon-btn" id="queue-btn" data-action="open-queue" title="Очередь">${icon('queue')}</button>
      <div class="volume">
        <button class="icon-btn" id="volume-btn" data-action="mute" title="Звук">${icon('volumeUp')}</button>
        <input type="range" id="volume" min="0" max="100" value="${player.volumePercent}" aria-label="Громкость" />
      </div>
    </div>
  </footer>

  <div class="np" id="np" hidden>
    <div class="np-backdrop" data-action="close-np"></div>
    <div class="np-sheet" role="dialog" aria-modal="true" aria-label="Плеер">
      <div class="np-grabber"></div>
      <div class="np-head">
        <button class="icon-btn" data-action="close-np" title="Свернуть">${icon('close')}</button>
        <div class="np-tabs">
          <button class="np-tab" data-np-tab="lyrics">${icon('lyrics')}<span>Текст</span></button>
          <button class="np-tab" data-np-tab="eq">${icon('equalizer')}<span>Эквалайзер</span></button>
          <button class="np-tab" data-np-tab="queue">${icon('queue')}<span>Очередь</span></button>
        </div>
        <div class="np-head-spacer"></div>
      </div>
      <div class="np-body">
        <div class="np-side" id="np-side"></div>
        <div class="np-panel" id="np-panel"></div>
      </div>
    </div>
  </div>

  <div id="auth-screen" class="auth-screen" hidden>
    <div class="auth-card">
      <div class="auth-brand">
        <span class="brand-mark">${icon('wave')}</span>
        <span class="brand-name">Rustream</span>
      </div>
      <div id="auth-login-view">
        <h1>Вход в аккаунт</h1>
        <p class="muted">Музыка, избранное, плейлисты и статистика — у каждого свои.</p>
        <form id="login-form" autocomplete="on">
          <label class="field">
            <span>Имя пользователя</span>
            <input class="input" id="login-username" name="username" autocomplete="username" required />
          </label>
          <label class="field">
            <span>Пароль</span>
            <input class="input" id="login-password" name="password" type="password" autocomplete="current-password" required />
          </label>
          <button class="btn primary full" type="submit" id="login-submit">${icon('wave')} Войти</button>
          <p class="auth-error" id="login-error" role="alert"></p>
        </form>
        <button class="text-link auth-switch" type="button" id="auth-toggle-register">${icon('ticket')} У меня есть приглашение</button>
        <p class="auth-hint">Первый запуск: <code>admin</code> / <code>admin</code>. Смените пароль в профиле.</p>
      </div>

      <div id="auth-register-view" hidden>
        <h1>Создать аккаунт</h1>
        <p class="muted" id="register-invite-hint">Вставьте код приглашения от администратора.</p>
        <form id="register-form" autocomplete="on">
          <label class="field">
            <span>Код приглашения</span>
            <input class="input" id="register-invite" autocomplete="off" autocapitalize="none" spellcheck="false" required />
          </label>
          <label class="field">
            <span>Имя пользователя</span>
            <input class="input" id="register-username" autocomplete="username" autocapitalize="none" spellcheck="false" minlength="3" maxlength="32" required />
          </label>
          <label class="field">
            <span>Как вас зовут</span>
            <input class="input" id="register-display" placeholder="Необязательно" />
          </label>
          <label class="field">
            <span>Пароль</span>
            <input class="input" id="register-password" type="password" autocomplete="new-password" minlength="6" required />
          </label>
          <button class="btn primary full" type="submit" id="register-submit">${icon('sparkle')} Зарегистрироваться</button>
          <p class="auth-error" id="register-error" role="alert"></p>
        </form>
        <button class="text-link auth-switch" type="button" id="auth-toggle-login">${icon('back')} У меня уже есть аккаунт</button>
      </div>
    </div>
  </div>

  <div id="modal-root"></div>
  <div id="toast" class="toast" role="status" aria-live="polite"></div>
`;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function initials(name) {
  const parts = String(name || '?')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!parts.length) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

function displayName() {
  return state.me?.displayName || state.me?.username || 'Аккаунт';
}

function isAuthError(error) {
  return error?.status === 401;
}

function handleAuthError(error) {
  if (isAuthError(error)) {
    showLogin();
    return true;
  }
  return false;
}

function coverHtml(id, { size = 400, alt = '', className = '' } = {}) {
  return `<span class="cover ${className}">
    <span class="cover-fallback">${icon('music')}</span>
    ${id ? `<img src="${api.coverUrl(id, size)}" alt="${esc(alt)}" loading="lazy" decoding="async" />` : ''}
  </span>`;
}

function toast(message, kind = 'info') {
  const el = $('#toast');
  el.textContent = message;
  el.className = `toast show ${kind}`;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    el.className = 'toast';
  }, 3200);
}

function showLoading() {
  $('#view').innerHTML = `
    <div class="page">
      <div class="skeleton skeleton-title"></div>
      <div class="grid cards">
        ${Array.from({ length: 8 })
          .map(
            () => `<div class="card skeleton-card">
              <div class="skeleton skeleton-cover"></div>
              <div class="skeleton skeleton-line"></div>
              <div class="skeleton skeleton-line short"></div>
            </div>`,
          )
          .join('')}
      </div>
    </div>`;
}

function showError(message) {
  $('#view').innerHTML = `
    <div class="page">
      <div class="empty-state">
        <span class="empty-icon">${icon('wave')}</span>
        <h2>Что-то пошло не так</h2>
        <p>${esc(message)}</p>
        <button class="btn tonal" data-action="reload">Попробовать снова</button>
      </div>
    </div>`;
}

function pageHeader(title, subtitle, { actions = '', eyebrow = '' } = {}) {
  return `<header class="page-head">
    <div>
      ${eyebrow ? `<div class="eyebrow">${esc(eyebrow)}</div>` : ''}
      <h1>${esc(title)}</h1>
      ${subtitle ? `<p class="muted">${subtitle}</p>` : ''}
    </div>
    ${actions ? `<div class="page-actions">${actions}</div>` : ''}
  </header>`;
}

function albumCard(album) {
  return `<article class="card" data-action="open" data-href="#/album/${album.id}" tabindex="0">
    <div class="card-cover">${coverHtml(album.coverArt || album.id, { alt: album.name })}</div>
    <div class="card-body">
      <div class="card-title">${esc(album.name)}</div>
      <div class="card-sub">${esc(album.artist || 'Неизвестный артист')}${album.year ? ` · ${album.year}` : ''}</div>
    </div>
    <button class="card-play" data-action="play-album" data-id="${album.id}" title="Слушать альбом">${icon('play')}</button>
  </article>`;
}

function artistCard(artist) {
  return `<article class="card artist-card" data-action="open" data-href="#/artist/${artist.id}" tabindex="0">
    <div class="card-cover round">${coverHtml(artist.coverArt || artist.id, { alt: artist.name })}</div>
    <div class="card-body">
      <div class="card-title">${esc(artist.name)}</div>
      <div class="card-sub">${artist.albumCount ?? 0} ${plural(artist.albumCount ?? 0, 'альбом', 'альбома', 'альбомов')}</div>
    </div>
  </article>`;
}

function plural(n, one, few, many) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few;
  return many;
}

function trackRow(track, index, { showAlbum = true, showCover = false } = {}) {
  const isPlaying = player.track?.id === track.id;
  const liked = state.favorites.has(track.id);
  const number = track.track && track.track > 0 ? track.track : index + 1;
  return `<div class="track-row ${isPlaying ? 'playing' : ''}" data-action="play-row" data-index="${index}" tabindex="0">
    <div class="track-index">
      <span class="track-num">${number}</span>
      <span class="track-eq"><i></i><i></i><i></i></span>
    </div>
    ${showCover ? `<span class="track-cover">${coverHtml(track.coverArt || track.albumId, { size: 80 })}</span>` : ''}
    <div class="track-main">
      <div class="track-title">${esc(track.title)}</div>
      <div class="track-sub">${esc(track.artist || '')}${showAlbum && track.album ? ` · ${esc(track.album)}` : ''}</div>
    </div>
    <span class="track-badge">${esc((track.suffix || 'flac').toUpperCase())}</span>
    <span class="track-duration">${formatTime(track.duration)}</span>
    <button class="icon-btn row-btn like ${liked ? 'active' : ''}" data-action="like" data-id="${track.id}" title="В избранное">${icon(liked ? 'heart' : 'heartOutline')}</button>
    <button class="icon-btn row-btn dislike ${state.dislikes.has(track.id) ? 'active' : ''}" data-action="dislike" data-id="${track.id}" title="Не нравится">${icon('thumbDown')}</button>
    <button class="icon-btn row-btn" data-action="add-to-playlist" data-id="${track.id}" title="Добавить в плейлист">${icon('add')}</button>
  </div>`;
}

function trackList(tracks, options = {}) {
  if (!tracks.length) {
    return `<div class="empty-inline">Треков пока нет</div>`;
  }
  return `<div class="track-list">${tracks.map((track, index) => trackRow(track, index, options)).join('')}</div>`;
}

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

function parseRoute() {
  const raw = location.hash.replace(/^#/, '') || '/home';
  const [path, queryString = ''] = raw.split('?');
  const parts = path.split('/').filter(Boolean);
  return { parts, params: new URLSearchParams(queryString) };
}

function setActiveNav(section) {
  $$('.nav-item').forEach((item) => {
    const target = item.dataset.nav;
    const active =
      target === section ||
      (section === 'artist' && target === 'artists') ||
      (section === 'album' && target === 'albums') ||
      (section === 'playlist' && target === 'playlists') ||
      (section === 'search' && target === 'home');
    item.classList.toggle('active', active);
  });
}

async function route() {
  const { parts, params } = parseRoute();
  const section = parts[0] || 'home';
  if (section === 'register') {
    showRegister(params.get('invite') || '');
    return;
  }
  if (!state.me) {
    showLogin();
    return;
  }
  const seq = ++state.renderSeq;
  setActiveNav(section);
  $('#view').scrollTop = 0;

  try {
    if (section === 'home') await renderHome(seq);
    else if (section === 'live') await renderLive(seq);
    else if (section === 'stats') await renderStats(seq);
    else if (section === 'artists') await renderArtists(seq);
    else if (section === 'artist') await renderArtist(seq, parts[1]);
    else if (section === 'albums') await renderAlbums(seq);
    else if (section === 'album') await renderAlbum(seq, parts[1]);
    else if (section === 'tracks') await renderTracks(seq);
    else if (section === 'playlists') await renderPlaylists(seq);
    else if (section === 'playlist') await renderPlaylist(seq, parts[1]);
    else if (section === 'favorites') await renderFavorites(seq);
    else if (section === 'search') await renderSearch(seq, params.get('q') || '');
    else if (section === 'profile') await renderProfile(seq);
    else if (section === 'ytm') await renderYtm(seq);
    else await renderHome(seq);
  } catch (error) {
    console.error(error);
    if (handleAuthError(error)) return;
    if (seq === state.renderSeq) showError(error.message || 'Ошибка загрузки');
  }
}

// ---------------------------------------------------------------------------
// Data loaders
// ---------------------------------------------------------------------------

async function loadStats() {
  if (!cache.stats) cache.stats = await api.getStats();
  return cache.stats;
}

async function loadArtists() {
  if (!cache.artists) cache.artists = await api.getArtists();
  return cache.artists;
}

async function loadAlbums() {
  if (!cache.albums) cache.albums = await api.getAlbums('alphabeticalByArtist', 500);
  return cache.albums;
}

async function loadAllTracks() {
  if (!cache.tracks) {
    const tracks = await api.getRandomSongs(500);
    tracks.sort((a, b) =>
      `${a.artist} ${a.album} ${String(a.track).padStart(3, '0')}`.localeCompare(
        `${b.artist} ${b.album} ${String(b.track).padStart(3, '0')}`,
        'ru',
      ),
    );
    cache.tracks = tracks;
  }
  return cache.tracks;
}

async function loadFavorites() {
  if (!cache.favorites) cache.favorites = await api.getStarred();
  state.favorites = new Set((cache.favorites.song || []).map((s) => s.id));
  state.favoriteAlbums = new Set((cache.favorites.album || []).map((a) => a.id));
  if (!cache.ratings) {
    try {
      cache.ratings = await api.getRatings();
    } catch {
      cache.ratings = { liked: [], disliked: [] };
    }
  }
  state.dislikes = new Set((cache.ratings.disliked || []).filter((id) => !state.favorites.has(id)));
  return cache.favorites;
}

async function loadMeStats() {
  if (!cache.meStats) cache.meStats = await api.getMeStats();
  state.meStats = cache.meStats;
  return cache.meStats;
}

async function loadLiveMixes() {
  if (!cache.liveMixes) cache.liveMixes = await api.getMixes();
  state.liveMixes = cache.liveMixes;
  return cache.liveMixes;
}

async function refreshLibrary() {
  cache.artists = null;
  cache.albums = null;
  cache.tracks = null;
  cache.stats = null;
  cache.recent = null;
  cache.meStats = null;
  cache.liveMixes = null;
  toast('Библиотека обновлена');
  route();
}

// ---------------------------------------------------------------------------
// Views
// ---------------------------------------------------------------------------

async function renderHome(seq) {
  showLoading();
  const [meStats, recent, artists, tracks] = await Promise.all([
    loadMeStats(),
    cache.recent ? Promise.resolve(cache.recent) : api.getAlbums('newest', 12),
    loadArtists(),
    loadAllTracks(),
  ]);
  if (seq !== state.renderSeq) return;
  cache.recent = recent;

  state.currentTracks = tracks;
  const current = player.track;
  const continueQueue = player.queue.length ? player.queue : null;

  $('#view').innerHTML = `
    <div class="page home quick-home">
      <header class="page-head home-head">
        <div>
          <span class="eyebrow"><span class="live-dot"></span>${esc(greetingForNow())}, ${esc(displayName())}</span>
          <h1>Что послушаем?</h1>
        </div>
        <div class="head-actions">
          <button class="btn primary" data-action="play-all">${icon('play')} Слушать всё</button>
          <button class="btn glass" data-action="shuffle-all">${icon('shuffle')} Перемешать</button>
          <button class="btn ghost" data-action="start-live">${icon('radio')} Live</button>
        </div>
      </header>

      ${
        current && continueQueue
          ? `<section class="continue-card">
              <span class="continue-cover">${coverHtml(current.coverArt || current.albumId, { size: 120, alt: current.title })}</span>
              <span class="continue-main">
                <span class="eyebrow">Продолжить слушать</span>
                <strong>${esc(current.title)}</strong>
                <small>${esc(current.artist || '')}${player.paused ? ' · на паузе' : ' · играет'}</small>
              </span>
              <button class="btn primary" data-action="resume">${icon(player.paused ? 'play' : 'pause')} ${player.paused ? 'Продолжить' : 'Пауза'}</button>
              <a class="btn ghost" href="#/live">${icon('queue')} Очередь</a>
            </section>`
          : ''
      }

      <section class="section">
        <div class="section-head">
          <div>
            <h2>Недавно добавленные</h2>
            <p class="muted">Свежие поступления в библиотеке</p>
          </div>
          <a class="text-link" href="#/albums">Все альбомы ${icon('next')}</a>
        </div>
        <div class="grid cards">${recent.slice(0, 8).map(albumCard).join('')}</div>
      </section>

      <section class="section">
        <div class="section-head">
          <div>
            <h2>Любимые артисты</h2>
            <p class="muted">${meStats.topArtists?.[0] ? `Чаще всего вы слушаете ${esc(meStats.topArtists[0].name)}` : 'Начните слушать — и здесь появятся ваши артисты'}</p>
          </div>
          <a class="text-link" href="#/artists">Все артисты ${icon('next')}</a>
        </div>
        <div class="grid cards artists-row">${artists.slice(0, 8).map(artistCard).join('')}</div>
      </section>

      <section class="section home-cta">
        <div class="cta-panel">
          <div>
            <div class="eyebrow">${icon('chart')} Ваша статистика</div>
            <h2>${meStats.plays || 0} ${plural(meStats.plays || 0, 'прослушивание', 'прослушивания', 'прослушиваний')}</h2>
            <p class="muted">Часы, любимые артисты, лайки и дизлайки — на отдельной странице.</p>
          </div>
          <a class="btn glass" href="#/stats">${icon('chart')} Открыть статистику</a>
        </div>
      </section>
    </div>`;
}

function greetingForNow() {
  const hour = new Date().getHours();
  if (hour < 6) return 'Доброй ночи';
  if (hour < 12) return 'Доброе утро';
  if (hour < 18) return 'Добрый день';
  return 'Добрый вечер';
}

async function renderLive(seq) {
  showLoading();
  const [mixes, meStats] = await Promise.all([loadLiveMixes(), loadMeStats()]);
  if (seq !== state.renderSeq) return;

  $('#view').innerHTML = `
    <div class="page live-page">
      ${pageHeader('Live', 'Персональный поток: избранное, любимые артисты и новые находки', {
        eyebrow: 'Автоматический эфир',
        actions: `<button class="btn primary" data-action="start-live">${icon('radio')} ${state.liveMode ? 'Перезапустить' : 'Включить Live'}</button>`,
      })}

      <section class="live-hero">
        <div>
          <div class="eyebrow"><span class="live-dot"></span>${state.liveMode ? 'Эфир идёт' : 'Готов к запуску'}</div>
          <h2>${state.liveMode ? 'Поток подбирает следующий трек' : 'Очередь, которая слушает вас'}</h2>
          <p class="muted">
            ${meStats.plays
              ? `Учтено ${meStats.plays} прослушиваний. Чем больше слушаете, тем точнее подбор.`
              : 'Пока нет истории — начните с избранного и любимых артистов.'}
          </p>
          <div class="live-tags">
            <span class="chip">Избранное</span>
            <span class="chip">Любимые артисты</span>
            <span class="chip">Редкие треки</span>
            <span class="chip">Без повторов</span>
          </div>
        </div>
        <div class="live-wave" aria-hidden="true">
          ${Array.from({ length: 24 })
            .map((_, index) => `<i style="--i:${index}"></i>`)
            .join('')}
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <div>
            <h2>Готовые миксы</h2>
            <p class="muted">Базовые подборки на основе вашей библиотеки</p>
          </div>
        </div>
        <div class="mix-grid">
          ${mixes
            .map(
              (mix, index) => `<article class="mix-card ${mix.tracks?.length ? '' : 'empty'}" data-action="play-mix" data-index="${index}" tabindex="0">
                <div class="mix-icon">${icon(index === 0 ? 'heart' : index === 1 ? 'album' : 'radio')}</div>
                <div class="mix-body">
                  <h3>${esc(mix.title)}</h3>
                  <p>${esc(mix.subtitle)}</p>
                  <span class="muted">${mix.tracks?.length || 0} ${plural(mix.tracks?.length || 0, 'трек', 'трека', 'треков')}</span>
                </div>
                <span class="mix-play">${icon('play')}</span>
              </article>`,
            )
            .join('')}
        </div>
      </section>

    </div>`;
}

async function renderStats(seq) {
  showLoading();
  const meStats = await api.getMeStats().catch(() => state.meStats || {});
  if (seq !== state.renderSeq) return;
  state.meStats = meStats;
  cache.meStats = meStats;

  const hours = ((meStats.listenedMs || 0) / 3600000).toFixed(1);
  const minutes = Math.round((meStats.listenedMs || 0) / 60000);
  const maxDay = Math.max(1, ...(meStats.byDay || []).map((day) => day.ms));
  const recent = meStats.recent || [];
  state.currentTracks = recent;
  const recentDays = [...(meStats.byDay || [])].slice(-14);
  const likes = meStats.likes || 0;
  const dislikes = meStats.dislikes || 0;

  $('#view').innerHTML = `
    <div class="page stats-page">
      ${pageHeader('Статистика', 'Только ваш аккаунт: время, артисты, жанры и оценки', {
        eyebrow: 'Личные данные',
        actions: `<a class="btn glass" href="#/favorites">${icon('heart')} Избранное</a>`,
      })}

      <section class="stat-cards">
        <div class="stat-card"><span class="stat-icon">${icon('clock')}</span><strong>${hours} ч</strong><span>${minutes} минут музыки</span></div>
        <div class="stat-card"><span class="stat-icon">${icon('play')}</span><strong>${meStats.plays || 0}</strong><span>прослушиваний</span></div>
        <div class="stat-card"><span class="stat-icon like">${icon('heart')}</span><strong>${likes}</strong><span>лайков</span></div>
        <div class="stat-card"><span class="stat-icon dislike">${icon('thumbDown')}</span><strong>${dislikes}</strong><span>дизлайков</span></div>
      </section>

      <section class="section stats-grid">
        <div class="stats-panel">
          <div class="section-head"><h2>Последние 14 дней</h2><span class="muted">${hours} ч всего</span></div>
          ${
            recentDays.length
              ? `<div class="day-chart">${recentDays
                  .map((day) => {
                    const date = new Date(`${day.day}T00:00:00`);
                    const label = date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' });
                    const height = Math.max(4, Math.round((day.ms / maxDay) * 100));
                    return `<div class="day-col" title="${label}: ${Math.round(day.ms / 60000)} мин">
                      <span class="day-bar" style="height:${height}%"></span>
                      <span class="day-label">${label}</span>
                    </div>`;
                  })
                  .join('')}</div>`
              : `<div class="empty-inline">Пока нет прослушиваний за две недели.</div>`
          }
        </div>
        <div class="stats-panel">
          <div class="section-head"><h2>Жанры</h2></div>
          ${
            meStats.topGenres?.length
              ? `<div class="genre-list">${meStats.topGenres
                  .map(
                    (genre) => `<div class="genre-row">
                      <span class="genre-name">${esc(genre.name)}</span>
                      <span class="genre-bar"><i style="width:${Math.min(100, (genre.plays / (meStats.topGenres[0]?.plays || 1)) * 100)}%"></i></span>
                      <span class="genre-plays">${genre.plays}</span>
                    </div>`,
                  )
                  .join('')}</div>`
              : `<div class="empty-inline">Жанры появятся после прослушиваний.</div>`
          }
        </div>
      </section>

      <section class="section stats-grid">
        <div class="stats-panel">
          <div class="section-head"><h2>Любимые артисты</h2></div>
          ${
            meStats.topArtists?.length
              ? `<div class="rank-list">${meStats.topArtists
                  .map(
                    (artist, index) => `<div class="rank-row">
                      <span class="rank-num">${index + 1}</span>
                      <span class="rank-main"><strong>${esc(artist.name)}</strong><small>${artist.plays} ${plural(artist.plays, 'прослушивание', 'прослушивания', 'прослушиваний')}</small></span>
                    </div>`,
                  )
                  .join('')}</div>`
              : `<div class="empty-inline">Пока нет данных.</div>`
          }
        </div>
        <div class="stats-panel">
          <div class="section-head"><h2>Топ треков</h2></div>
          ${
            meStats.topTracks?.length
              ? `<div class="rank-list">${meStats.topTracks
                  .slice(0, 10)
                  .map(
                    (track, index) => `<div class="rank-row">
                      <span class="rank-num">${index + 1}</span>
                      <span class="rank-main"><strong>${esc(track.title)}</strong><small>${esc(track.artist)}</small></span>
                      <span class="rank-plays">${track.plays} ×</span>
                    </div>`,
                  )
                  .join('')}</div>`
              : `<div class="empty-inline">Пока нет данных.</div>`
          }
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <div><h2>Недавние треки</h2><p class="muted">Можно продолжить с любого места</p></div>
        </div>
        ${recent.length ? trackList(recent, { showCover: true }) : '<div class="empty-inline">История пока пуста.</div>'}
      </section>
    </div>`;
}

async function renderArtists(seq) {
  showLoading();
  const artists = await loadArtists();
  if (seq !== state.renderSeq) return;
  state.currentTracks = [];
  $('#view').innerHTML = `
    <div class="page">
      ${pageHeader('Артисты', `${artists.length} ${plural(artists.length, 'артист', 'артиста', 'артистов')} в библиотеке`, {
        actions: `<button class="btn glass" data-action="shuffle-library">${icon('shuffle')} Перемешать всё</button>`,
        eyebrow: 'Коллекция',
      })}
      <div class="grid cards">${artists.map(artistCard).join('')}</div>
    </div>`;
}

async function renderArtist(seq, id) {
  showLoading();
  const data = await api.getArtist(id);
  if (seq !== state.renderSeq) return;
  const artist = data.artist;
  const albums = artist.album || [];
  state.currentTracks = [];

  $('#view').innerHTML = `
    <div class="page">
      <a class="back-link" href="#/artists">${icon('back')} Все артисты</a>
      <section class="collection-head">
        <div class="collection-art round">${coverHtml(artist.coverArt || artist.id, { size: 600, alt: artist.name })}</div>
        <div class="collection-info">
          <div class="eyebrow">Артист</div>
          <h1>${esc(artist.name)}</h1>
          <p class="muted">${albums.length} ${plural(albums.length, 'альбом', 'альбома', 'альбомов')}</p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-artist" data-id="${artist.id}">${icon('play')} Слушать</button>
            <button class="btn glass" data-action="shuffle-artist" data-id="${artist.id}">${icon('shuffle')} Перемешать</button>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section-head"><h2>Альбомы</h2></div>
        <div class="grid cards">${albums.map(albumCard).join('')}</div>
      </section>
    </div>`;
}

async function renderAlbums(seq) {
  showLoading();
  const albums = await loadAlbums();
  if (seq !== state.renderSeq) return;
  state.currentTracks = [];
  $('#view').innerHTML = `
    <div class="page">
      ${pageHeader('Альбомы', `${albums.length} ${plural(albums.length, 'альбом', 'альбома', 'альбомов')}`, {
        eyebrow: 'Коллекция',
      })}
      <div class="grid cards">${albums.map(albumCard).join('')}</div>
    </div>`;
}

async function renderAlbum(seq, id) {
  showLoading();
  const data = await api.getAlbum(id);
  if (seq !== state.renderSeq) return;
  const album = data.album;
  const songs = album.song || [];
  state.currentTracks = songs;

  $('#view').innerHTML = `
    <div class="page">
      <a class="back-link" href="#/albums">${icon('back')} Все альбомы</a>
      <section class="collection-head album-head">
        <div class="collection-art">${coverHtml(album.coverArt || album.id, { size: 800, alt: album.name })}</div>
        <div class="collection-info">
          <div class="eyebrow">${album.year ? `Альбом · ${album.year}` : 'Альбом'}</div>
          <h1>${esc(album.name)}</h1>
          <p class="muted">
            <a class="inline-link" href="#/artist/${album.artistId}">${esc(album.artist)}</a>
            · ${songs.length} ${plural(songs.length, 'трек', 'трека', 'треков')}
            · ${formatDurationLong(album.duration * 1000 || 0)}
          </p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-all">${icon('play')} Слушать</button>
            <button class="btn glass" data-action="shuffle-all">${icon('shuffle')} Перемешать</button>
          </div>
        </div>
      </section>
      <section class="section">
        ${trackList(songs, { showAlbum: false })}
      </section>
    </div>`;
}

async function renderTracks(seq) {
  showLoading();
  const tracks = await loadAllTracks();
  if (seq !== state.renderSeq) return;
  state.currentTracks = tracks;
  $('#view').innerHTML = `
    <div class="page">
      ${pageHeader('Все треки', `${tracks.length} ${plural(tracks.length, 'трек', 'трека', 'треков')}`, {
        eyebrow: 'Библиотека',
        actions: `<button class="btn primary" data-action="play-all">${icon('play')} Слушать</button>
                  <button class="btn glass" data-action="shuffle-all">${icon('shuffle')} Перемешать</button>`,
      })}
      ${trackList(tracks, { showCover: true })}
    </div>`;
}

async function renderPlaylists(seq) {
  showLoading();
  const playlists = await api.getPlaylists();
  if (seq !== state.renderSeq) return;
  cache.playlists = playlists;
  state.currentTracks = [];

  $('#view').innerHTML = `
    <div class="page">
      ${pageHeader('Плейлисты', `${playlists.length} ${plural(playlists.length, 'плейлист', 'плейлиста', 'плейлистов')}`, {
        eyebrow: 'Моя музыка',
        actions: `<button class="btn primary" data-action="new-playlist">${icon('add')} Новый плейлист</button>`,
      })}
      ${
        playlists.length
          ? `<div class="grid cards">${playlists.map(playlistCard).join('')}</div>`
          : `<div class="empty-state"><span class="empty-icon">${icon('playlist')}</span><h2>Плейлистов пока нет</h2><p>Соберите подборку из любимых треков.</p><button class="btn primary" data-action="new-playlist">${icon('add')} Создать</button></div>`
      }
    </div>`;
}

function playlistCard(playlist) {
  return `<article class="card" data-action="open" data-href="#/playlist/${playlist.id}" tabindex="0">
    <div class="card-cover">${coverHtml(playlist.coverArt || playlist.id, { alt: playlist.name })}</div>
    <div class="card-body">
      <div class="card-title">${esc(playlist.name)}</div>
      <div class="card-sub">${playlist.songCount ?? 0} ${plural(playlist.songCount ?? 0, 'трек', 'трека', 'треков')}</div>
    </div>
    <button class="card-play" data-action="open" data-href="#/playlist/${playlist.id}">${icon('play')}</button>
  </article>`;
}

async function renderPlaylist(seq, id) {
  showLoading();
  const playlist = await api.getPlaylist(id);
  if (seq !== state.renderSeq) return;
  const entries = (playlist.entry || []).map((song, index) => ({ ...song, track: index + 1 }));
  state.currentTracks = entries;

  $('#view').innerHTML = `
    <div class="page">
      <a class="back-link" href="#/playlists">${icon('back')} Все плейлисты</a>
      <section class="collection-head album-head">
        <div class="collection-art">${coverHtml(playlist.coverArt || playlist.id, { size: 800, alt: playlist.name })}</div>
        <div class="collection-info">
          <div class="eyebrow">Плейлист</div>
          <h1>${esc(playlist.name)}</h1>
          <p class="muted">${entries.length} ${plural(entries.length, 'трек', 'трека', 'треков')} · ${formatDurationLong((playlist.duration || 0) * 1000)}</p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-all">${icon('play')} Слушать</button>
            <button class="btn glass" data-action="shuffle-all">${icon('shuffle')} Перемешать</button>
            <button class="btn ghost danger" data-action="delete-playlist" data-id="${playlist.id}">${icon('delete')} Удалить</button>
          </div>
        </div>
      </section>
      <section class="section">
        ${trackList(entries, { showCover: true })}
      </section>
    </div>`;
}

async function renderFavorites(seq) {
  showLoading();
  const favorites = await loadFavorites();
  if (seq !== state.renderSeq) return;
  const songs = favorites.song || [];
  state.currentTracks = songs;

  $('#view').innerHTML = `
    <div class="page">
      ${pageHeader('Избранное', `${songs.length} ${plural(songs.length, 'трек', 'трека', 'треков')}`, {
        eyebrow: 'Моя музыка',
        actions: songs.length
          ? `<button class="btn primary" data-action="play-all">${icon('play')} Слушать</button>`
          : '',
      })}
      ${
        songs.length
          ? trackList(songs, { showCover: true })
          : `<div class="empty-state"><span class="empty-icon">${icon('heartOutline')}</span><h2>Здесь пока пусто</h2><p>Нажимайте на сердечко у трека, чтобы добавить его в избранное.</p></div>`
      }
      ${
        (favorites.album || []).length
          ? `<section class="section"><div class="section-head"><h2>Любимые альбомы</h2></div>
             <div class="grid cards">${favorites.album.map(albumCard).join('')}</div></section>`
          : ''
      }
    </div>`;
}

async function renderSearch(seq, query) {
  const input = $('#search-input');
  if (input.value !== query) input.value = query;

  if (!query.trim()) {
    $('#view').innerHTML = `
      <div class="page">
        <div class="empty-state"><span class="empty-icon">${icon('search')}</span>
        <h2>Найдите что послушать</h2><p>Введите название трека, альбома или артиста.</p></div>
      </div>`;
    return;
  }

  showLoading();
  const results = await api.search(query);
  if (seq !== state.renderSeq) return;

  const songs = results.song || [];
  state.currentTracks = songs;

  $('#view').innerHTML = `
    <div class="page">
      ${pageHeader(`Поиск: ${query}`, `Найдено ${songs.length} ${plural(songs.length, 'трек', 'трека', 'треков')}, ${(results.album || []).length} ${plural((results.album || []).length, 'альбом', 'альбома', 'альбомов')}`, {
        eyebrow: 'Результаты',
      })}
      ${(results.artist || []).length ? `<section class="section"><div class="section-head"><h2>Артисты</h2></div><div class="grid cards">${results.artist.map(artistCard).join('')}</div></section>` : ''}
      ${(results.album || []).length ? `<section class="section"><div class="section-head"><h2>Альбомы</h2></div><div class="grid cards">${results.album.map(albumCard).join('')}</div></section>` : ''}
      ${songs.length ? `<section class="section"><div class="section-head"><h2>Треки</h2></div>${trackList(songs, { showCover: true })}</section>` : ''}
      ${!songs.length && !(results.album || []).length && !(results.artist || []).length ? `<div class="empty-state"><span class="empty-icon">${icon('search')}</span><h2>Ничего не найдено</h2><p>Попробуйте другой запрос.</p></div>` : ''}
    </div>`;
}

// ---------------------------------------------------------------------------
// Actions
// ---------------------------------------------------------------------------

async function playAlbumById(id) {
  const data = await api.getAlbum(id);
  const songs = data.album.song || [];
  if (!songs.length) return toast('В альбоме нет треков', 'warn');
  state.currentTracks = songs;
  await player.playTracks(songs, 0);
}

async function playArtistById(id, shuffle = false) {
  toast('Загружаю альбомы…');
  const data = await api.getArtist(id);
  const albums = data.artist.album || [];
  const pages = await Promise.all(albums.map((album) => api.getAlbum(album.id)));
  const songs = pages.flatMap((page) => page.album.song || []);
  if (!songs.length) return toast('У артиста нет треков', 'warn');
  state.currentTracks = songs;
  await player.playTracks(songs, 0, { shuffle });
}

async function setTrackRating(trackId, rating) {
  try {
    await api.setRating(trackId, rating);
    if (rating === 1) {
      state.favorites.add(trackId);
      state.dislikes.delete(trackId);
    } else if (rating === -1) {
      state.favorites.delete(trackId);
      state.dislikes.add(trackId);
    } else {
      state.favorites.delete(trackId);
      state.dislikes.delete(trackId);
    }
    cache.favorites = null;
    cache.ratings = null;

    $$(`[data-action="like"][data-id="${trackId}"]`).forEach((btn) => {
      const liked = state.favorites.has(trackId);
      btn.classList.toggle('active', liked);
      btn.innerHTML = icon(liked ? 'heart' : 'heartOutline');
    });
    $$(`[data-action="dislike"][data-id="${trackId}"]`).forEach((btn) => {
      btn.classList.toggle('active', state.dislikes.has(trackId));
    });
    updatePlayerRating();
    if (location.hash.startsWith('#/favorites')) route();
    if (location.hash.startsWith('#/stats')) route();
  } catch (error) {
    toast(error.message, 'error');
  }
}

async function toggleLike(trackId) {
  const liked = state.favorites.has(trackId);
  await setTrackRating(trackId, liked ? 0 : 1);
}

async function toggleDislike(trackId) {
  const disliked = state.dislikes.has(trackId);
  await setTrackRating(trackId, disliked ? 0 : -1);
}

function updatePlayerRating() {
  const track = player.track;
  const like = $('#pb-like');
  const dislike = $('#pb-dislike');
  if (like) {
    const liked = track ? state.favorites.has(track.id) : false;
    like.classList.toggle('active', liked);
    like.innerHTML = icon(liked ? 'heart' : 'heartOutline');
  }
  if (dislike) {
    dislike.classList.toggle('active', track ? state.dislikes.has(track.id) : false);
  }
}

// ---------------------------------------------------------------------------
// Playlist modal
// ---------------------------------------------------------------------------

async function openAddToPlaylist(trackId) {
  let playlists = [];
  try {
    playlists = await api.getPlaylists();
  } catch (error) {
    toast(error.message, 'error');
  }

  showModal({
    title: 'Добавить в плейлист',
    body: `
      ${
        playlists.length
          ? `<div class="modal-list">${playlists
              .map(
                (playlist) => `<button class="modal-row" data-modal-action="add" data-playlist="${playlist.id}">
                  <span class="modal-row-ico">${icon('playlist')}</span>
                  <span><strong>${esc(playlist.name)}</strong><small>${playlist.songCount ?? 0} треков</small></span>
                  ${icon('next')}
                </button>`,
              )
              .join('')}</div>`
          : `<p class="muted">Плейлистов пока нет — создайте первый.</p>`
      }
      <div class="modal-new">
        <input class="input" id="new-playlist-name" placeholder="Название нового плейлиста" />
        <button class="btn primary" data-modal-action="create" data-track="${trackId}">${icon('add')} Создать</button>
      </div>`,
    onMount: (modal) => {
      modal.addEventListener('click', async (event) => {
        const row = event.target.closest('[data-modal-action]');
        if (!row) return;
        if (row.dataset.modalAction === 'add') {
          await api.addToPlaylist(row.dataset.playlist, trackId);
          closeModal();
          cache.playlists = null;
          toast('Трек добавлен в плейлист');
        }
        if (row.dataset.modalAction === 'create') {
          const input = $('#new-playlist-name', modal);
          const name = input.value.trim() || 'Мой плейлист';
          await api.createPlaylist(name, [trackId]);
          closeModal();
          cache.playlists = null;
          toast('Плейлист создан');
          if (location.hash.startsWith('#/playlists')) route();
        }
      });
    },
  });
}

async function createPlaylistFlow() {
  showModal({
    title: 'Новый плейлист',
    body: `<input class="input" id="new-playlist-name" placeholder="Например: Вечерний плейлист" autofocus />
           <div class="modal-actions">
             <button class="btn ghost" data-modal-action="cancel">Отмена</button>
             <button class="btn primary" data-modal-action="create">Создать</button>
           </div>`,
    onMount: (modal) => {
      const input = $('#new-playlist-name', modal);
      input.focus();
      modal.addEventListener('click', async (event) => {
        const action = event.target.closest('[data-modal-action]')?.dataset.modalAction;
        if (action === 'cancel') closeModal();
        if (action === 'create') {
          const name = input.value.trim();
          if (!name) return input.focus();
          await api.createPlaylist(name, []);
          closeModal();
          cache.playlists = null;
          toast('Плейлист создан');
          route();
        }
      });
      input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') $('[data-modal-action="create"]', modal)?.click();
      });
    },
  });
}

function showModal({ title, body, onMount }) {
  const rootEl = $('#modal-root');
  rootEl.innerHTML = `
    <div class="modal-backdrop" data-modal-action="close">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-head"><h3>${esc(title)}</h3><button class="icon-btn" data-modal-action="close">${icon('close')}</button></div>
        <div class="modal-body">${body}</div>
      </div>
    </div>`;
  const modal = $('.modal', rootEl);
  rootEl.querySelector('.modal-backdrop').addEventListener('click', (event) => {
    if (event.target.dataset.modalAction === 'close') closeModal();
  });
  onMount?.(modal);
}

function closeModal() {
  $('#modal-root').innerHTML = '';
}

// ---------------------------------------------------------------------------
// Now playing panel
// ---------------------------------------------------------------------------

function openNowPlaying(tab = 'lyrics') {
  state.npOpen = true;
  state.npTab = tab;
  const np = $('#np');
  np.hidden = false;
  requestAnimationFrame(() => np.classList.add('open'));
  renderNowPlaying();
}

function closeNowPlaying() {
  state.npOpen = false;
  const np = $('#np');
  np.classList.remove('open');
  setTimeout(() => {
    if (!state.npOpen) np.hidden = true;
  }, 260);
}

function setNpTab(tab) {
  state.npTab = tab;
  renderNowPlaying();
}

function renderNowPlaying() {
  if (!state.npOpen) return;
  const track = player.track;
  $$('.np-tab').forEach((tab) => tab.classList.toggle('active', tab.dataset.npTab === state.npTab));

  const side = $('#np-side');
  side.innerHTML = `
    <div class="np-cover">${coverHtml(track?.coverArt || track?.albumId, { size: 900, alt: track?.title || '' })}</div>
    <div class="np-meta">
      <div class="eyebrow">${icon('wave')} Сейчас играет</div>
      <h2>${esc(track?.title || 'Ничего не играет')}</h2>
      <p class="np-artist">${esc(track?.artist || 'Выберите трек')}</p>
      <p class="muted">${esc(track?.album || '')}${track?.year ? ` · ${track.year}` : ''}</p>
      <div class="np-chips" id="np-chips">
        ${track ? `
          <span class="chip">${(track.suffix || 'flac').toUpperCase()}</span>
          <span class="chip">${track.bitRate ? `${track.bitRate} kbps` : 'lossless'}</span>
          <span class="chip" id="np-buffer">буфер 0:00</span>
        ` : ''}
      </div>
      <div class="np-actions">
        <button class="icon-btn like ${track && state.favorites.has(track.id) ? 'active' : ''}" data-action="like-current">${icon(track && state.favorites.has(track.id) ? 'heart' : 'heartOutline')}</button>
        <button class="icon-btn dislike ${track && state.dislikes.has(track.id) ? 'active' : ''}" data-action="dislike-current" title="Не нравится">${icon('thumbDown')}</button>
        <button class="btn glass" data-action="toggle">${icon(player.paused ? 'play' : 'pause')} ${player.paused ? 'Играть' : 'Пауза'}</button>
        <button class="icon-btn" data-action="jump-album" ${track?.albumId ? '' : 'disabled'}>${icon('album')}</button>
      </div>
    </div>`;

  const panel = $('#np-panel');
  if (state.npTab === 'lyrics') renderLyricsPanel(panel, track);
  else if (state.npTab === 'eq') renderEqPanel(panel);
  else renderQueuePanel(panel);
}

async function renderLyricsPanel(panel, track) {
  if (!track) {
    panel.innerHTML = emptyPanel('lyrics', 'Текст появится здесь', 'Включите трек — и мы поищем файл .lrc рядом с аудио.');
    return;
  }

  panel.innerHTML = `<div class="panel-loading"><span class="spinner"></span>Ищу текст…</div>`;

  if (state.lyricsTrackId !== track.id || state.lyricsRefresh) {
    try {
      state.lyrics = await api.getLyrics(track.id, state.lyricsRefresh);
      state.lyricsTrackId = track.id;
      state.lyricsRefresh = false;
      state.lyricsActiveKey = null;
    } catch {
      state.lyrics = null;
    }
  }

  if (state.npTab !== 'lyrics') return;

  const lyrics = state.lyrics;
  if (!lyrics || (!lyrics.plain && !lyrics.synced?.length)) {
    panel.innerHTML = `<div class="panel-empty">
      <span class="empty-icon">${icon('lyrics')}</span>
      <h3>Текст не найден</h3>
      <p>Локального .lrc/.txt нет, интернет-поиск ничего не вернул. Можно попробовать ещё раз.</p>
      <button class="btn glass" data-action="refresh-lyrics">${icon('refresh')} Искать в интернете</button>
    </div>`;
    return;
  }

  const source =
    lyrics.source === 'lrclib'
      ? 'LRCLIB'
      : lyrics.source === 'local'
        ? 'локальный файл'
        : lyrics.source === 'lyrics.ovh'
          ? 'lyrics.ovh'
          : 'кэш';

  panel.innerHTML = `
    <div class="panel-title">
      <h3>Текст песни</h3>
      <span class="lyrics-source">${icon('wave')} ${esc(source)}</span>
      <button class="icon-btn" data-action="refresh-lyrics" title="Найти заново">${icon('refresh')}</button>
    </div>
    <div class="lyrics" id="lyrics-body">
      ${
        lyrics.synced?.length
          ? lyrics.synced
              .map(
                (line, index) =>
                  `<div class="lyric-line" data-index="${index}" data-time="${line.time_ms}">${esc(line.text)}</div>`,
              )
              .join('')
          : `<div class="lyrics-plain">${esc(lyrics.plain).replace(/\n/g, '<br />')}</div>`
      }
    </div>`;
  highlightLyrics();
}

function highlightLyrics() {
  if (state.npTab !== 'lyrics') return;
  const lines = $$('.lyric-line');
  if (!lines.length) return;
  const ms = player.currentTime * 1000;
  let active = -1;
  lines.forEach((line, index) => {
    if (Number(line.dataset.time) <= ms) active = index;
  });
  // Before the first timestamp, highlight the first line so the panel does
  // not look washed out while the intro plays.
  if (active < 0) active = 0;
  lines.forEach((line, index) => line.classList.toggle('active', index === active));
  const key = `${state.lyricsTrackId || ''}:${active}`;
  if (active >= 0 && state.lyricsActiveKey !== key) {
    state.lyricsActiveKey = key;
    lines[active].scrollIntoView({ block: 'center', behavior: 'smooth' });
  }
}

function emptyPanel(iconName, title, text) {
  return `<div class="panel-empty"><span class="empty-icon">${icon(iconName)}</span><h3>${esc(title)}</h3><p>${esc(text)}</p></div>`;
}

function renderEqPanel(panel) {
  const eq = player.eqState;
  panel.innerHTML = `
    <div class="panel-title">
      <h3>Эквалайзер</h3>
      <label class="switch">
        <input type="checkbox" id="eq-enabled" ${eq.enabled ? 'checked' : ''} />
        <span></span>
      </label>
    </div>
    <div class="eq-presets">
      ${Object.entries(EQ_PRESETS)
        .map(
          ([key, preset]) =>
            `<button class="chip-btn ${eq.preset === key ? 'active' : ''}" data-eq-preset="${key}">${esc(preset.name)}</button>`,
        )
        .join('')}
      <button class="chip-btn ${eq.preset === 'custom' ? 'active' : ''}" disabled>Своя</button>
    </div>
    <div class="eq ${eq.enabled ? '' : 'disabled'}">
      ${EQ_BANDS.map(
        (frequency, index) => `
        <div class="eq-band">
          <span class="eq-value" id="eq-val-${index}">${eq.gains[index] > 0 ? '+' : ''}${eq.gains[index]}</span>
          <input type="range" orient="vertical" class="eq-slider" data-eq-band="${index}" min="-12" max="12" step="1" value="${eq.gains[index]}" />
          <span class="eq-freq">${frequency >= 1000 ? `${frequency / 1000}k` : frequency}</span>
        </div>`,
      ).join('')}
    </div>
    <div class="eq-foot">
      <span class="muted">10 полос · ±12 дБ</span>
      <button class="btn ghost" data-action="reset-eq">${icon('refresh')} Сбросить</button>
    </div>`;
}

function renderQueuePanel(panel) {
  const queue = player.queue;
  panel.innerHTML = `
    <div class="panel-title"><h3>Очередь</h3><span class="muted">${queue.length} ${plural(queue.length, 'трек', 'трека', 'треков')}</span></div>
    ${
      queue.length
        ? `<div class="queue-list">${queue
            .map(
              (track, index) => `
              <button class="queue-row ${index === player.index ? 'active' : ''}" data-action="play-queue" data-index="${index}">
                <span class="queue-cover">${coverHtml(track.coverArt || track.albumId, { size: 80 })}</span>
                <span class="queue-main"><strong>${esc(track.title)}</strong><small>${esc(track.artist || '')}</small></span>
                <span class="queue-time">${formatTime(track.duration)}</span>
              </button>`,
            )
            .join('')}</div>`
        : emptyPanel('queue', 'Очередь пуста', 'Нажмите на трек или альбом, чтобы начать воспроизведение.')
    }`;
}

// ---------------------------------------------------------------------------
// Player UI sync
// ---------------------------------------------------------------------------

function updateTrackUi() {
  const track = player.track;
  const title = $('#pb-title');
  const artist = $('#pb-artist');
  const cover = $('#pb-cover-img');
  const qualityFormat = $('#quality-format');
  const qualityDetail = $('#quality-detail');

  if (!track) {
    title.textContent = 'Ничего не играет';
    artist.textContent = 'Выберите трек';
    $('.pb-cover').classList.remove('loaded');
    qualityFormat.textContent = '—';
    qualityDetail.textContent = '';
    return;
  }

  title.textContent = track.title || '';
  artist.textContent = [track.artist, track.album].filter(Boolean).join(' · ');
  if (track.coverArt || track.albumId) {
    cover.src = api.coverUrl(track.coverArt || track.albumId, 160);
    cover.onload = () => $('.pb-cover').classList.add('loaded');
  } else {
    cover.removeAttribute('src');
    $('.pb-cover').classList.remove('loaded');
  }
  qualityFormat.textContent = (track.suffix || 'flac').toUpperCase();
  qualityDetail.textContent = [
    track.bitRate ? `${track.bitRate} kbps` : null,
    track.size ? formatBytes(track.size) : null,
  ]
    .filter(Boolean)
    .join(' · ');
  updatePlayerRating();
}

function updateTimeUi() {
  const duration = player.duration;
  const current = player.currentTime;
  const percent = duration ? (current / duration) * 100 : 0;

  $('#cur-time').textContent = formatTime(current);
  $('#total-time').textContent = formatTime(duration);
  $('#seek').value = String(percent);
  $('#seek-fill').style.width = `${percent}%`;
  updateBufferUi();
  highlightLyrics();
}

function updateBufferUi() {
  const buffer = player.buffered;
  $('#seek-buffer').style.width = `${buffer.percent}%`;

  const npBuffer = $('#np-buffer');
  if (npBuffer) {
    npBuffer.textContent = `буфер ${formatTime(buffer.ahead)}`;
    npBuffer.title = `Загружено ${formatBytes(player.estimatedBufferedBytes())}`;
  }

  const detail = $('#quality-detail');
  if (detail && player.track) {
    detail.textContent = [
      player.track.bitRate ? `${player.track.bitRate} kbps` : null,
      player.track.size ? formatBytes(player.track.size) : null,
      `буфер ${formatTime(buffer.ahead)}`,
    ]
      .filter(Boolean)
      .join(' · ');
  }
}

function updatePlayState() {
  const playing = !player.paused && !!player.track;
  $('#play-btn').innerHTML = icon(playing ? 'pause' : 'play');
  $('#pb-cover').classList.toggle('playing', playing);
  const npPlay = $('.np-actions [data-action="toggle"]');
  if (npPlay) npPlay.innerHTML = `${icon(playing ? 'pause' : 'play')} ${playing ? 'Пауза' : 'Играть'}`;
  // Highlight current track rows.
  $$('.track-row').forEach((row) => {
    const track = state.currentTracks[Number(row.dataset.index)];
    row.classList.toggle('playing', track?.id === player.track?.id);
  });
}

function updateModeUi() {
  $('#shuffle-btn').classList.toggle('active', player.shuffle);
  $('#repeat-btn').classList.toggle('active', player.repeat !== 'off');
  $('#repeat-btn').innerHTML = icon(player.repeat === 'one' ? 'repeatOne' : 'repeat');
}

function updateVolumeUi() {
  $('#volume').value = String(player.volumePercent);
  const name =
    player.volumePercent === 0 ? 'volumeOff' : player.volumePercent < 50 ? 'volumeDown' : 'volumeUp';
  $('#volume-btn').innerHTML = icon(name);
}

// ---------------------------------------------------------------------------
// Event wiring
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Auth / account
// ---------------------------------------------------------------------------

function updateUserUi() {
  const name = displayName();
  const avatar = $('#user-avatar');
  const label = $('#user-name');
  if (avatar) avatar.textContent = initials(name);
  if (label) label.textContent = name;
}

function authView(mode) {
  const screen = $('#auth-screen');
  if (!screen) return;
  screen.hidden = false;
  document.body.classList.add('auth-locked');
  $('#auth-login-view').hidden = mode !== 'login';
  $('#auth-register-view').hidden = mode !== 'register';
  setTimeout(() => $(mode === 'login' ? '#login-username' : '#register-invite')?.focus(), 60);
}

function showLogin() {
  authView('login');
}

/** Invite sign-up. The code is checked first, so the visitor sees who
 *  invited them before choosing a password. */
async function showRegister(invite = '') {
  authView('register');
  const input = $('#register-invite');
  const hint = $('#register-invite-hint');
  input.value = invite.trim();
  if (!invite.trim()) {
    hint.textContent = 'Вставьте код приглашения от администратора.';
    return;
  }
  hint.textContent = 'Проверяю приглашение…';
  try {
    const info = await api.checkInvite(invite.trim());
    hint.innerHTML = `Приглашение от <strong>${esc(info.invitedBy)}</strong>${info.isAdmin ? ' · администратор' : ''}`;
  } catch (error) {
    hint.textContent = error.message || 'Приглашение недействительно';
  }
}

function hideLogin() {
  const screen = $('#auth-screen');
  if (!screen) return;
  screen.hidden = true;
  document.body.classList.remove('auth-locked');
}

async function bootstrap() {
  try {
    state.authConfig = await api.getAuthConfig();
    const session = await api.getSession();
    if (!session.user) {
      showLogin();
      if (location.hash.startsWith('#/register')) route();
      return;
    }
    state.me = session.user;
    state.meSettings = session.settings;
    applyTheme(session.settings?.theme || localStorage.getItem('rustream.theme') || 'violet');
    updateUserUi();
    hideLogin();
    await Promise.all([loadFavorites(), loadMeStats()]);
    restorePlayback();
    route();
  } catch (error) {
    if (!isAuthError(error)) console.error(error);
    showLogin();
  }
}

function setLiveMode(value) {
  state.liveMode = !!value;
  player.setLiveMode(!!value);
}

function restorePlayback() {
  const saved = player.restore();
  if (!saved) return;
  state.liveMode = !!saved.liveMode;
  updateTrackUi();
  updatePlayState();
  updateModeUi();
  updateTimeUi();
}

async function startLive() {
  try {
    toast('Собираю персональный поток…');
    const tracks = await api.getLiveQueue(40);
    if (!tracks.length) return toast('В библиотеке пока нет треков', 'warn');
    setLiveMode(true);
    state.currentTracks = tracks;
    await player.playTracks(tracks, 0);
    toast('Live включён');
    if (location.hash.startsWith('#/live')) route();
  } catch (error) {
    if (handleAuthError(error)) return;
    toast(error.message, 'error');
  }
}

async function playMix(index) {
  const mix = state.liveMixes[index];
  if (!mix?.tracks?.length) return toast('В этом миксе пока нет треков', 'warn');
  setLiveMode(false);
  state.currentTracks = mix.tracks;
  await player.playTracks(mix.tracks, 0);
  toast(`Играет: ${mix.title}`);
}

const THEMES = [
  { id: 'violet', name: 'Фиолетовая' },
  { id: 'ocean', name: 'Океан' },
  { id: 'sunset', name: 'Закат' },
  { id: 'forest', name: 'Лес' },
  { id: 'mono', name: 'Моно' },
];

const HEX_THEME = /^#[0-9a-f]{6}$/i;

function applyTheme(theme) {
  const preset = THEMES.some((item) => item.id === theme);
  const value = preset ? theme : HEX_THEME.test(theme || '') ? theme.toLowerCase() : 'violet';
  state.theme = value;
  document.body.dataset.theme = preset ? value : 'custom';
  document.body.style.setProperty('--primary', preset ? '' : value);
  localStorage.setItem('rustream.theme', value);
}

/** Persist the choice in the profile so every device follows it. */
async function saveTheme(theme) {
  applyTheme(theme);
  try {
    await api.updateMe({ theme: state.theme });
    state.meSettings = { ...(state.meSettings || {}), theme: state.theme };
  } catch (error) {
    toast(error.message, 'error');
  }
}

function settingsBody(users) {
  const settings = state.meSettings || {};
  const lastfmReady = state.authConfig?.lastfm;
  const lastfmConfig = state.lastfmConfig || {};
  return `
    <div class="settings-sections">
      <section class="settings-section">
        <h4>${icon('person')} Профиль</h4>
        <form id="settings-profile-form" class="settings-form">
          <label class="field"><span>Отображаемое имя</span>
            <input class="input" id="settings-display-name" value="${esc(state.me?.displayName || '')}" />
          </label>
          <button class="btn tonal" type="submit">Сохранить имя</button>
        </form>
        <div class="settings-meta">
          <span>Логин: <strong>${esc(state.me?.username || '')}</strong></span>
          ${state.me?.isAdmin ? '<span class="chip">администратор</span>' : ''}
        </div>
      </section>

      <section class="settings-section">
        <h4>${icon('palette')} Оформление</h4>
        <p class="muted small">Цветовая тема сохраняется в аккаунте и применяется на всех устройствах.</p>
        <div class="theme-picker">
          ${THEMES.map(
            (theme) => `<button class="theme-swatch ${state.theme === theme.id ? 'active' : ''}" data-theme-choice="${theme.id}" title="${theme.name}">
              <span class="swatch-dot theme-${theme.id}"></span><span>${theme.name}</span>
            </button>`,
          ).join('')}
        </div>
      </section>

      <section class="settings-section">
        <h4>${icon('radio')} Скробблинг</h4>
        <p class="muted small">Статистика хранится локально. Last.fm и ListenBrainz получают данные, если подключены.</p>
        <div class="settings-status">
          <span class="status-dot ${settings.lastfmConnected ? 'on' : ''}"></span>
          Last.fm: ${settings.lastfmConnected ? `подключён${settings.lastfmUsername ? ` как ${esc(settings.lastfmUsername)}` : ''}` : 'не подключён'}
        </div>
        <div class="settings-inline">
          <button class="btn glass" data-settings-action="lastfm-connect" ${lastfmReady ? '' : 'disabled'}>${icon('wave')} Подключить Last.fm</button>
          <button class="btn ghost" data-settings-action="lastfm-complete" ${settings.lastfmConnected ? 'disabled' : ''}>Завершить</button>
        </div>
        ${lastfmReady ? '' : '<p class="muted small">Для авторизации Last.fm нужны ключи приложения ниже (или в config.toml).</p>'}
        ${state.me?.isAdmin ? `
          <div class="settings-sub">
            <h5>Ключи приложения Last.fm</h5>
            <p class="muted small">Создайте приложение на last.fm/api/account/create. Ключи пишутся в config.toml и применяются сразу.</p>
            <label class="field"><span>API key</span>
              <input class="input" id="settings-lastfm-api-key" value="${esc(lastfmConfig.apiKey || '')}" placeholder="32 символа" />
            </label>
            <label class="field"><span>API secret</span>
              <input class="input" id="settings-lastfm-api-secret" type="password" placeholder="${lastfmConfig.apiSecretSet ? 'секрет уже сохранён — оставьте пустым' : 'секрет приложения'}" />
            </label>
            <div class="settings-inline">
              <button class="btn tonal" data-settings-action="save-lastfm-app">Сохранить ключи приложения</button>
              <button class="btn ghost danger" data-settings-action="clear-lastfm-app">Удалить ключи</button>
            </div>
          </div>` : ''}
        <label class="field"><span>Last.fm session key (вручную)</span>
          <input class="input" id="settings-lastfm-key" placeholder="оставьте пустым, чтобы не менять" />
        </label>
        <label class="field"><span>ListenBrainz token</span>
          <input class="input" id="settings-listenbrainz" placeholder="токен из listenbrainz.org/settings" />
        </label>
        <button class="btn tonal" data-settings-action="save-scrobbling">Сохранить скробблинг</button>
      </section>

      <section class="settings-section">
        <h4>${icon('settings')} Безопасность</h4>
        <form id="settings-password-form" class="settings-form">
          <label class="field"><span>Текущий пароль</span>
            <input class="input" id="settings-current-password" type="password" autocomplete="current-password" />
          </label>
          <label class="field"><span>Новый пароль</span>
            <input class="input" id="settings-new-password" type="password" autocomplete="new-password" />
          </label>
          <button class="btn tonal" type="submit">Сменить пароль</button>
        </form>
      </section>

      <section class="settings-section">
        <h4>${icon('library')} Библиотека</h4>
        <p class="muted small">Сканер перечитывает папки каждые ${state.authConfig?.scanInterval || 300} секунд. Новые файлы появятся автоматически.</p>
        <div class="settings-inline">
          <button class="btn glass" data-settings-action="rescan">${icon('refresh')} Пересканировать сейчас</button>
          <button class="btn ghost danger" data-settings-action="clear-history">${icon('delete')} Очистить историю</button>
        </div>
      </section>

      ${state.me?.isAdmin ? `
      <section class="settings-section">
        <h4>${icon('person')} Пользователи</h4>
        <div class="user-list" id="settings-user-list">
          ${(users || []).map((user) => `
            <div class="user-row">
              <span class="user-avatar small">${esc(initials(user.displayName || user.username))}</span>
              <span class="user-row-main"><strong>${esc(user.displayName || user.username)}</strong><small>@${esc(user.username)}${user.isAdmin ? ' · админ' : ''}</small></span>
              ${user.id === state.me?.id ? '<span class="chip">вы</span>' : `<button class="icon-btn" data-settings-action="delete-user" data-id="${user.id}" title="Удалить">${icon('delete')}</button>`}
            </div>`).join('')}
        </div>
        <div class="settings-form user-create">
          <label class="field"><span>Логин</span><input class="input" id="new-user-name" autocapitalize="none" /></label>
          <label class="field"><span>Пароль</span><input class="input" id="new-user-password" type="password" /></label>
          <label class="field"><span>Имя</span><input class="input" id="new-user-display" /></label>
          <label class="checkline"><input type="checkbox" id="new-user-admin" /> Администратор</label>
          <button class="btn tonal" data-settings-action="create-user">Добавить пользователя</button>
        </div>
      </section>` : ''}

      <section class="settings-section">
        <h4>${icon('logout')} Сеанс</h4>
        <p class="muted small">Вход действует 90 дней и продлевается автоматически, пока вы пользуетесь сайтом. Subsonic API: логин <code>${esc(state.me?.username || '')}</code>, пароль — ваш пароль. Ключ API: <code>${esc(settings.subsonicApiKey || '—')}</code></p>
        <button class="btn ghost danger" data-settings-action="logout">${icon('logout')} Выйти из аккаунта</button>
      </section>
    </div>`;
}

async function openSettings() {
  if (!state.me) return showLogin();
  let users = [];
  if (state.me.isAdmin) {
    try {
      [users, state.lastfmConfig] = await Promise.all([
        api.listUsers(),
        api.getLastfmConfig().catch(() => ({})),
      ]);
    } catch (error) {
      handleAuthError(error);
    }
  }

  showModal({
    title: 'Аккаунт и настройки',
    body: settingsBody(users),
    onMount: (modal) => {
      $('#settings-profile-form', modal)?.addEventListener('submit', async (event) => {
        event.preventDefault();
        try {
          await api.updateProfile($('#settings-display-name', modal).value.trim());
          state.me.displayName = $('#settings-display-name', modal).value.trim();
          updateUserUi();
          toast('Имя обновлено');
        } catch (error) {
          toast(error.message, 'error');
        }
      });

      $('#settings-password-form', modal)?.addEventListener('submit', async (event) => {
        event.preventDefault();
        try {
          await api.changePassword(
            $('#settings-current-password', modal).value,
            $('#settings-new-password', modal).value,
          );
          $('#settings-current-password', modal).value = '';
          $('#settings-new-password', modal).value = '';
          toast('Пароль изменён');
        } catch (error) {
          toast(error.message, 'error');
        }
      });

      modal.addEventListener('click', async (event) => {
        const themeButton = event.target.closest('[data-theme-choice]');
        if (themeButton) {
          const theme = themeButton.dataset.themeChoice;
          applyTheme(theme);
          $$('.theme-swatch', modal).forEach((item) =>
            item.classList.toggle('active', item.dataset.themeChoice === theme),
          );
          try {
            await api.updateProfile(state.me.displayName || state.me.username, theme);
            state.meSettings = { ...(state.meSettings || {}), theme };
            toast('Тема сохранена');
          } catch (error) {
            toast(error.message, 'error');
          }
          return;
        }

        const button = event.target.closest('[data-settings-action]');
        if (!button) return;
        const action = button.dataset.settingsAction;

        if (action === 'logout') {
          await api.logout().catch(() => {});
          location.reload();
          return;
        }
        if (action === 'rescan') {
          button.classList.add('spin');
          await api.rescan().catch((error) => toast(error.message, 'error'));
          setTimeout(() => {
            button.classList.remove('spin');
            toast('Сканирование запущено');
          }, 1200);
          return;
        }
        if (action === 'clear-history') {
          if (!confirm('Удалить всю историю прослушиваний этого аккаунта?')) return;
          try {
            await api.clearHistory();
            cache.meStats = null;
            state.meStats = null;
            toast('История очищена');
            const me = await api.getMe();
            state.meSettings = me.settings;
          } catch (error) {
            toast(error.message, 'error');
          }
          return;
        }
        if (action === 'lastfm-connect') {
          try {
            const result = await api.lastfmConnect();
            window.open(result.url, '_blank', 'noopener');
            toast('Подтвердите доступ на Last.fm, затем нажмите «Завершить»');
          } catch (error) {
            toast(error.message, 'error');
          }
          return;
        }
        if (action === 'lastfm-complete') {
          try {
            const result = await api.lastfmComplete();
            toast(`Last.fm подключён${result.username ? `: ${result.username}` : ''}`);
            const me = await api.getMe();
            state.meSettings = me.settings;
            closeModal();
            openSettings();
          } catch (error) {
            toast(error.message, 'error');
          }
          return;
        }
        if (action === 'save-lastfm-app') {
          try {
            await api.saveLastfmConfig(
              $('#settings-lastfm-api-key', modal).value.trim(),
              $('#settings-lastfm-api-secret', modal).value.trim(),
            );
            const config = await api.getLastfmConfig();
            state.lastfmConfig = config;
            state.authConfig = await api.getAuthConfig();
            toast('Ключи Last.fm сохранены в config.toml');
            $('#settings-lastfm-api-secret', modal).value = '';
          } catch (error) {
            toast(error.message, 'error');
          }
          return;
        }
        if (action === 'clear-lastfm-app') {
          if (!confirm('Удалить ключи приложения Last.fm из config.toml?')) return;
          try {
            await api.saveLastfmConfig('', '', true);
            state.lastfmConfig = await api.getLastfmConfig();
            state.authConfig = await api.getAuthConfig();
            toast('Ключи Last.fm удалены');
            closeModal();
            openSettings();
          } catch (error) {
            toast(error.message, 'error');
          }
          return;
        }
        if (action === 'save-scrobbling') {
          try {
            await api.saveScrobbling({
              lastfmSessionKey: $('#settings-lastfm-key', modal).value.trim(),
              listenbrainzToken: $('#settings-listenbrainz', modal).value.trim(),
            });
            toast('Настройки скробблинга сохранены');
            const me = await api.getMe();
            state.meSettings = me.settings;
          } catch (error) {
            toast(error.message, 'error');
          }
          return;
        }
        if (action === 'create-user') {
          try {
            await api.createUser({
              username: $('#new-user-name', modal).value.trim(),
              password: $('#new-user-password', modal).value,
              displayName: $('#new-user-display', modal).value.trim(),
              isAdmin: $('#new-user-admin', modal).checked,
            });
            toast('Пользователь создан');
            closeModal();
            openSettings();
          } catch (error) {
            toast(error.message, 'error');
          }
          return;
        }
        if (action === 'delete-user') {
          if (!confirm('Удалить пользователя и все его данные?')) return;
          try {
            await api.deleteUser(button.dataset.id);
            toast('Пользователь удалён');
            closeModal();
            openSettings();
          } catch (error) {
            toast(error.message, 'error');
          }
        }
      });
    },
  });
}

// Профиль: YouTube Music, оформление, приглашения (админ) и аккаунт.
// ---------------------------------------------------------------------------

function themePickerHtml() {
  return `
    <div class="theme-picker">
      ${THEMES.map(
        (theme) => `<button class="theme-swatch ${state.theme === theme.id ? 'active' : ''}" data-action="theme" data-theme="${theme.id}">
          <span class="swatch-dot theme-${theme.id}"></span><span>${theme.name}</span>
        </button>`,
      ).join('')}
      <label class="theme-swatch custom ${HEX_THEME.test(state.theme) ? 'active' : ''}" title="Свой цвет">
        <input type="color" id="theme-custom" value="${HEX_THEME.test(state.theme) ? state.theme : '#c7a6ff'}" aria-label="Свой цвет" />
        <span>Свой цвет</span>
      </label>
    </div>`;
}

function ytmCardHtml(status) {
  const account = status?.account;
  if (status?.connected) {
    return `
      <div class="ytm-account">
        ${account?.photo
          ? `<img class="ytm-avatar" src="${esc(account.photo)}" alt="" referrerpolicy="no-referrer" />`
          : `<span class="ytm-avatar fallback">${icon('person')}</span>`}
        <div class="ytm-account-main">
          <strong>${esc(account?.name || 'Аккаунт YouTube')}</strong>
          <small>${esc(account?.handle || '')}${status.updatedAt ? ` · обновлено ${new Date(status.updatedAt * 1000).toLocaleDateString('ru-RU')}` : ''}</small>
        </div>
        <div class="head-actions">
          <button class="btn glass" data-action="ytm-reconnect">${icon('refresh')} Обновить cookies</button>
          <button class="btn ghost danger" data-action="ytm-disconnect">${icon('logout')} Отключить</button>
        </div>
      </div>`;
  }
  return `
    <form id="ytm-connect-form" class="ytm-connect">
      <label class="field"><span>Cookies music.youtube.com</span>
        <textarea class="input" id="ytm-cookies" rows="5" spellcheck="false"
          placeholder="Вставьте JSON из Cookie-Editor или строку вида SAPISID=…; __Secure-3PAPISID=…"></textarea>
      </label>
      <p class="muted small">Откройте music.youtube.com под своим аккаунтом, экспортируйте cookies (Cookie-Editor → Export → JSON) и вставьте сюда. Сервер проверит их, зашифрует и будет использовать только для вашего профиля.</p>
      <button class="btn primary" type="submit" id="ytm-connect-submit">${icon('check')} Подключить</button>
      <p class="form-error" id="ytm-connect-error" role="alert"></p>
    </form>`;
}

function invitesHtml(invites) {
  return `
    <section class="section glass-card">
      <div class="section-head">
        <div>
          <h2>${icon('ticket')} Приглашения</h2>
          <p class="muted">Код даёт человеку право один раз зарегистрироваться со своим логином и паролем.</p>
        </div>
      </div>
      <form id="invite-form" class="invite-form">
        <label class="field"><span>Заметка</span>
          <input class="input" id="invite-note" placeholder="для кого" maxlength="200" />
        </label>
        <label class="field"><span>Дней действия</span>
          <input class="input" id="invite-days" type="number" min="0" max="365" value="7" />
        </label>
        <label class="field"><span>Использований</span>
          <input class="input" id="invite-uses" type="number" min="0" max="1000" value="1" />
        </label>
        <label class="checkline"><input type="checkbox" id="invite-admin" /> Администратор</label>
        <button class="btn primary" type="submit">${icon('add')} Создать код</button>
      </form>
      <div class="invite-list">
        ${invites.length
          ? invites
              .map(
                (invite) => `<div class="invite-row ${invite.valid ? '' : 'expired'}">
                  <span class="invite-code">${esc(invite.code)}</span>
                  <span class="invite-meta">
                    <small>${esc(invite.note || 'без заметки')} · ${invite.uses}/${invite.maxUses || '∞'} · ${invite.isAdmin ? 'админ' : 'слушатель'}</small>
                    <small>${invite.expiresAt ? `до ${new Date(invite.expiresAt * 1000).toLocaleDateString('ru-RU')}` : 'без срока'}${invite.valid ? '' : ' · недействительно'}</small>
                  </span>
                  <button class="icon-btn" data-action="invite-copy" data-code="${esc(invite.code)}" title="Скопировать ссылку">${icon('link')}</button>
                  <button class="icon-btn" data-action="invite-revoke" data-code="${esc(invite.code)}" title="Отозвать">${icon('delete')}</button>
                </div>`,
              )
              .join('')
          : '<div class="empty-inline">Пока ни одного приглашения</div>'}
      </div>
    </section>`;
}

async function renderProfile(seq) {
  showLoading();
  const isAdmin = !!state.me?.isAdmin;
  const [ytmStatus, invites] = await Promise.all([
    api.getYtmStatus().catch(() => ({ connected: false, account: null })),
    isAdmin ? api.listInvites().catch(() => []) : Promise.resolve([]),
  ]);
  if (seq !== state.renderSeq) return;
  state.ytmStatus = ytmStatus;

  $('#view').innerHTML = `
    <div class="page profile-page">
      <header class="page-head">
        <div class="profile-identity">
          <span class="user-avatar xl">${esc(initials(displayName()))}</span>
          <div>
            <h1>${esc(displayName())}</h1>
            <p class="muted">@${esc(state.me?.username || '')}${isAdmin ? ' · администратор' : ''}</p>
          </div>
        </div>
        <div class="head-actions">
          <button class="btn glass" data-action="open-settings">${icon('settings')} Настройки</button>
          <button class="btn ghost danger" data-action="logout">${icon('logout')} Выйти</button>
        </div>
      </header>

      <section class="section glass-card">
        <div class="section-head">
          <div>
            <h2>${icon('ytm')} YouTube Music</h2>
            <p class="muted">Cookies хранятся зашифрованными и используются только для вашего профиля: поиск, лайки и прослушивание.</p>
          </div>
          <span class="status-chip ${ytmStatus.connected ? 'on' : ''}">${ytmStatus.connected ? 'подключено' : 'не подключено'}</span>
        </div>
        ${ytmCardHtml(ytmStatus)}
      </section>

      <section class="section glass-card">
        <h2>${icon('palette')} Оформление</h2>
        <p class="muted small">Тема сохраняется в аккаунте и применяется на всех устройствах.</p>
        ${themePickerHtml()}
      </section>

      ${isAdmin ? invitesHtml(invites) : ''}
    </div>`;

  const connectForm = $('#ytm-connect-form');
  connectForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const button = $('#ytm-connect-submit');
    const errorBox = $('#ytm-connect-error');
    const cookies = $('#ytm-cookies').value.trim();
    errorBox.textContent = '';
    if (!cookies) {
      errorBox.textContent = 'Вставьте cookies';
      return;
    }
    button.disabled = true;
    try {
      await api.connectYtm(cookies);
      toast('YouTube Music подключён');
      route();
    } catch (error) {
      errorBox.textContent = error.message || 'Не удалось подключить';
    } finally {
      button.disabled = false;
    }
  });

  const inviteForm = $('#invite-form');
  inviteForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
      const invite = await api.createInvite({
        note: $('#invite-note').value.trim(),
        expiresInDays: Number($('#invite-days').value || 0),
        maxUses: Number($('#invite-uses').value || 0),
        isAdmin: $('#invite-admin').checked,
      });
      await navigator.clipboard?.writeText(api.inviteLink(invite.code)).catch(() => {});
      toast('Код создан, ссылка скопирована');
      route();
    } catch (error) {
      toast(error.message, 'error');
    }
  });

  $('#theme-custom')?.addEventListener('input', (event) => saveTheme(event.target.value));
  $('#theme-custom')?.addEventListener('change', () => route());
}

// ---------------------------------------------------------------------------
// YouTube Music
// ---------------------------------------------------------------------------

async function renderYtm(seq) {
  showLoading();
  const status = state.ytmStatus || (await api.getYtmStatus().catch(() => null));
  if (seq !== state.renderSeq) return;
  state.ytmStatus = status;

  if (!status?.connected) {
    $('#view').innerHTML = `
      <div class="page ytm-page">
        <header class="page-head">
          <div><span class="eyebrow">Источник</span><h1>YouTube Music</h1></div>
        </header>
        <section class="section glass-card empty-state">
          <span class="empty-icon">${icon('ytm')}</span>
          <h2>Подключите свой аккаунт</h2>
          <p class="muted">Поиск и лайки YouTube Music будут доступны только вам. Подключение занимает минуту.</p>
          <a class="btn primary" href="#/profile">${icon('settings')} Перейти в профиль</a>
        </section>
      </div>`;
    return;
  }

  $('#view').innerHTML = `
    <div class="page ytm-page">
      <header class="page-head">
        <div>
          <span class="eyebrow">Источник</span>
          <h1>YouTube Music</h1>
          <p class="muted">${esc(status.account?.name || 'Подключено')}${status.account?.handle ? ` · ${esc(status.account.handle)}` : ''}</p>
        </div>
        <div class="head-actions">
          <button class="btn glass" data-action="ytm-liked">${icon('heart')} Мои лайки</button>
        </div>
      </header>

      <form id="ytm-search-form" class="search-row">
        <label class="searchbox glass">
          ${icon('search')}
          <input id="ytm-search-input" type="search" placeholder="Треки, артисты, альбомы…" enterkeyhint="search" autocomplete="off" />
        </label>
        <button class="btn primary" type="submit">${icon('search')} Искать</button>
      </form>

      <section class="section" id="ytm-results">
        <div class="empty-inline">Введите запрос или откройте свои лайки</div>
      </section>
    </div>`;

  const form = $('#ytm-search-form');
  const input = $('#ytm-search-input');

  const show = (tracks, empty) => {
    state.currentTracks = tracks;
    $('#ytm-results').innerHTML = tracks.length
      ? `<div class="section-head"><h2>${icon('ytm')} Результаты</h2><span class="muted small">${tracks.length}</span></div>${trackList(tracks, { showCover: true })}`
      : `<div class="empty-inline">${empty}</div>`;
  };

  const search = async () => {
    const query = input.value.trim();
    if (!query) return;
    $('#ytm-results').innerHTML = `<div class="empty-inline">Ищу на YouTube Music…</div>`;
    try {
      const tracks = await api.ytmSearch(query);
      if (seq !== state.renderSeq) return;
      show(tracks, 'Ничего не найдено');
    } catch (error) {
      if (!handleAuthError(error)) $('#ytm-results').innerHTML = `<div class="empty-inline">${esc(error.message)}</div>`;
    }
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    search();
  });

  let timer;
  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (input.value.trim().length >= 2) search();
    }, 500);
  });
  input.focus();
}

// ---------------------------------------------------------------------------
// Global actions
// ---------------------------------------------------------------------------

document.addEventListener('click', async (event) => {
  const actionEl = event.target.closest('[data-action]');
  if (!actionEl) return;
  const action = actionEl.dataset.action;

  if (action === 'open') {
    location.hash = actionEl.dataset.href;
    return;
  }
  if (action === 'play-row') {
    const index = Number(actionEl.dataset.index);
    if (event.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]')) return;
    setLiveMode(false);
    await player.playTracks(state.currentTracks, index);
    return;
  }
  if (action === 'play-all') {
    if (!state.currentTracks.length) return toast('Список пуст', 'warn');
    setLiveMode(false);
    await player.playTracks(state.currentTracks, 0);
    return;
  }
  if (action === 'shuffle-all') {
    if (!state.currentTracks.length) return toast('Список пуст', 'warn');
    setLiveMode(false);
    await player.playTracks(state.currentTracks, 0, { shuffle: true });
    return;
  }
  if (action === 'shuffle-library') {
    const tracks = await loadAllTracks();
    state.currentTracks = tracks;
    await player.playTracks(tracks, 0, { shuffle: true });
    return;
  }
  if (action === 'start-live') {
    await startLive();
    return;
  }
  if (action === 'play-mix') {
    await playMix(Number(actionEl.dataset.index));
    return;
  }
  if (action === 'open-settings') {
    await openSettings();
    return;
  }
  if (action === 'theme') {
    await saveTheme(actionEl.dataset.theme);
    $$('[data-action="theme"]').forEach((item) =>
      item.classList.toggle('active', item.dataset.theme === state.theme),
    );
    return;
  }
  if (action === 'logout') {
    await api.logout().catch(() => {});
    location.reload();
    return;
  }
  if (action === 'ytm-disconnect') {
    if (!confirm('Отключить YouTube Music? Cookies и скачанный кэш этого профиля будут удалены.')) return;
    try {
      await api.disconnectYtm();
      state.ytmStatus = { connected: false, account: null };
      toast('YouTube Music отключён');
      route();
    } catch (error) {
      toast(error.message, 'error');
    }
    return;
  }
  if (action === 'ytm-reconnect') {
    state.ytmStatus = { connected: false, account: null };
    $('#view').innerHTML = '';
    route();
    return;
  }
  if (action === 'ytm-liked') {
    const results = $('#ytm-results');
    if (results) results.innerHTML = `<div class="empty-inline">Загружаю лайки…</div>`;
    try {
      const tracks = await api.ytmLiked(200);
      state.currentTracks = tracks;
      if (results) {
        results.innerHTML = tracks.length
          ? `<div class="section-head"><h2>${icon('heart')} Мои лайки</h2><span class="muted small">${tracks.length}</span></div>${trackList(tracks, { showCover: true })}`
          : '<div class="empty-inline">В YouTube Music пока нет лайков</div>';
      }
    } catch (error) {
      if (results) results.innerHTML = `<div class="empty-inline">${esc(error.message)}</div>`;
    }
    return;
  }
  if (action === 'invite-copy') {
    await navigator.clipboard?.writeText(api.inviteLink(actionEl.dataset.code)).catch(() => {});
    toast('Ссылка скопирована');
    return;
  }
  if (action === 'invite-revoke') {
    if (!confirm('Отозвать приглашение?')) return;
    try {
      await api.revokeInvite(actionEl.dataset.code);
      toast('Приглашение отозвано');
      route();
    } catch (error) {
      toast(error.message, 'error');
    }
    return;
  }
  if (action === 'play-album') {
    event.stopPropagation();
    setLiveMode(false);
    await playAlbumById(actionEl.dataset.id);
    return;
  }
  if (action === 'play-artist') {
    setLiveMode(false);
    await playArtistById(actionEl.dataset.id, false);
    return;
  }
  if (action === 'shuffle-artist') {
    setLiveMode(false);
    await playArtistById(actionEl.dataset.id, true);
    return;
  }
  if (action === 'like') {
    event.stopPropagation();
    await toggleLike(actionEl.dataset.id);
    return;
  }
  if (action === 'like-current') {
    if (player.track) await toggleLike(player.track.id);
    renderNowPlaying();
    return;
  }
  if (action === 'dislike') {
    event.stopPropagation();
    await toggleDislike(actionEl.dataset.id);
    return;
  }
  if (action === 'dislike-current') {
    if (player.track) await toggleDislike(player.track.id);
    renderNowPlaying();
    return;
  }
  if (action === 'add-to-playlist') {
    event.stopPropagation();
    await openAddToPlaylist(actionEl.dataset.id);
    return;
  }
  if (action === 'resume') {
    if (!player.track) {
      if (state.currentTracks.length) await player.playTracks(state.currentTracks, 0);
    } else {
      player.clearRestored();
      await player.toggle();
    }
    if (location.hash.startsWith('#/home')) route();
    return;
  }
  if (action === 'toggle') {
    if (!player.track && state.currentTracks.length) await player.playTracks(state.currentTracks, 0);
    else await player.toggle();
    return;
  }
  if (action === 'prev') return player.previous();
  if (action === 'next') return player.next();
  if (action === 'shuffle') return player.toggleShuffle();
  if (action === 'repeat') return player.cycleRepeat();
  if (action === 'mute') return player.toggleMute();
  if (action === 'nowplaying') return openNowPlaying(state.npTab);
  if (action === 'open-lyrics') return openNowPlaying('lyrics');
  if (action === 'open-eq') return openNowPlaying('eq');
  if (action === 'open-queue') return openNowPlaying('queue');
  if (action === 'close-np') return closeNowPlaying();
  if (action === 'jump-album') {
    if (player.track?.albumId) {
      closeNowPlaying();
      location.hash = `#/album/${player.track.albumId}`;
    }
    return;
  }
  if (action === 'play-queue') {
    setLiveMode(false);
    await player.playAt(Number(actionEl.dataset.index));
    return;
  }
  if (action === 'new-playlist') {
    event.preventDefault();
    return createPlaylistFlow();
  }
  if (action === 'delete-playlist') {
    if (!confirm('Удалить этот плейлист?')) return;
    await api.deletePlaylist(actionEl.dataset.id);
    toast('Плейлист удалён');
    cache.playlists = null;
    location.hash = '#/playlists';
    return;
  }
  if (action === 'reload') return route();
  if (action === 'reset-eq') {
    player.resetEq();
    renderEqPanel($('#np-panel'));
    return;
  }
  if (action === 'refresh-lyrics') {
    if (!player.track) return;
    state.lyricsRefresh = true;
    state.lyricsTrackId = null;
    renderLyricsPanel($('#np-panel'), player.track);
    return;
  }
});

// Now playing tabs / EQ inputs
$('#np').addEventListener('click', (event) => {
  const tab = event.target.closest('[data-np-tab]');
  if (tab) setNpTab(tab.dataset.npTab);

  const preset = event.target.closest('[data-eq-preset]');
  if (preset) {
    player.applyEqPreset(preset.dataset.eqPreset);
    renderEqPanel($('#np-panel'));
  }
});

$('#np').addEventListener('input', (event) => {
  const slider = event.target.closest('[data-eq-band]');
  if (slider) {
    const index = Number(slider.dataset.eqBand);
    const value = Number(slider.value);
    const label = $(`#eq-val-${index}`);
    if (label) label.textContent = `${value > 0 ? '+' : ''}${value}`;
    player.eqState.gains[index] = value;
    player.eqState.preset = 'custom';
    player.setEqGain(index, value);
    $$('.eq-presets .chip-btn').forEach((button) =>
      button.classList.toggle('active', button.dataset.eqPreset === 'custom'),
    );
  }
});

$('#np').addEventListener('change', (event) => {
  if (event.target.id === 'eq-enabled') {
    player.setEqEnabled(event.target.checked);
    $('.eq')?.classList.toggle('disabled', !event.target.checked);
  }
});

// Seek / volume
$('#seek').addEventListener('input', (event) => {
  player.seekTo(Number(event.target.value));
  updateTimeUi();
});
$('#volume').addEventListener('input', (event) => {
  player.setVolume(Number(event.target.value));
  updateVolumeUi();
});

// Keyboard
document.addEventListener('keydown', (event) => {
  const typing = ['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName);

  if (event.code === 'Space' && !typing && player.track) {
    event.preventDefault();
    player.toggle();
  }
  if (event.key === 'ArrowRight' && !typing && event.shiftKey) player.seekBy(5);
  if (event.key === 'ArrowLeft' && !typing && event.shiftKey) player.seekBy(-5);
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    $('#search-input').focus();
  }
  if (event.key === 'Escape') {
    if (!$('#modal-root').innerHTML) closeNowPlaying();
  }
});

// Search
const searchInput = $('#search-input');
let searchTimer;
searchInput.addEventListener('input', () => {
  clearTimeout(searchTimer);
  const query = searchInput.value.trim();
  if (query.length === 0) return;
  searchTimer = setTimeout(() => {
    if (query.length >= 2) location.hash = `#/search?q=${encodeURIComponent(query)}`;
  }, 350);
});
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const query = searchInput.value.trim();
    if (!query) return;
    const target = `#/search?q=${encodeURIComponent(query)}`;
    if (location.hash === target) route();
    else location.hash = target;
  }
});

$('#rescan-btn').addEventListener('click', async () => {
  $('#rescan-btn').classList.add('spin');
  const started = Date.now();
  try {
    await api.rescan();
    setTimeout(async () => {
      $('#rescan-btn').classList.remove('spin');
      await refreshLibrary();
    }, Math.max(2500, Date.now() - started));
  } catch (error) {
    $('#rescan-btn').classList.remove('spin');
    if (!handleAuthError(error)) toast(error.message, 'error');
  }
});

$('#np-pill').addEventListener('click', () => openNowPlaying(state.npTab));

// Player events
player.addEventListener('track', () => {
  updateTrackUi();
  if (state.npOpen) renderNowPlaying();
  updatePlayState();
  updateTimeUi();
});
player.addEventListener('time', () => {
  updateTimeUi();
});
player.addEventListener('buffer', updateBufferUi);
player.addEventListener('state', updatePlayState);
player.addEventListener('mode', updateModeUi);
player.addEventListener('volume', updateVolumeUi);
player.addEventListener('eq', () => {
  if (state.npTab === 'eq' && state.npOpen) renderEqPanel($('#np-panel'));
});
player.addEventListener('error', (event) => toast(event.detail, 'error'));

// Broken cover images hide themselves; the wrapper keeps the icon.
document.addEventListener(
  'error',
  (event) => {
    if (event.target instanceof HTMLImageElement) {
      event.target.style.display = 'none';
    }
  },
  true,
);

window.addEventListener('hashchange', route);

// Live auto-refill: when the queue ends, ask the server for the next batch.
player.addEventListener('queueend', async () => {
  if (!state.liveMode) return;
  try {
    const tracks = await api.getLiveQueue(25);
    const existing = new Set(player.queue.map((track) => track.id));
    const fresh = tracks.filter((track) => !existing.has(track.id));
    if (!fresh.length) {
      toast('Live: новых треков не нашлось', 'warn');
      return;
    }
    player.appendTracks(fresh);
    await player.next(true);
  } catch (error) {
    if (!handleAuthError(error)) toast(error.message, 'error');
  }
});

// Login / register switch
$('#auth-toggle-register').addEventListener('click', () => showRegister($('#register-invite')?.value || ''));
$('#auth-toggle-login').addEventListener('click', () => {
  if (location.hash.startsWith('#/register')) location.hash = '#/home';
  showLogin();
});
$('#register-invite').addEventListener('change', () => {
  const code = $('#register-invite').value.trim();
  if (code) showRegister(code);
});

$('#register-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const button = $('#register-submit');
  const errorBox = $('#register-error');
  errorBox.textContent = '';
  button.disabled = true;
  try {
    await api.register({
      invite: $('#register-invite').value.trim(),
      username: $('#register-username').value.trim(),
      password: $('#register-password').value,
      displayName: $('#register-display').value.trim(),
    });
    location.hash = '#/home';
    await bootstrap();
  } catch (error) {
    errorBox.textContent = error.message || 'Не удалось зарегистрироваться';
  } finally {
    button.disabled = false;
  }
});

// Login form
$('#login-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const button = $('#login-submit');
  const errorBox = $('#login-error');
  errorBox.textContent = '';
  button.disabled = true;
  try {
    await api.login($('#login-username').value.trim(), $('#login-password').value);
    await bootstrap();
  } catch (error) {
    errorBox.textContent = error.message || 'Не удалось войти';
  } finally {
    button.disabled = false;
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !$('#auth-screen').hidden && document.activeElement?.id === 'login-username') {
    $('#login-password')?.focus();
  }
});

window.addEventListener('pagehide', () => {
  if (player.playId) {
    player._finalizePlay(false);
  }
});

// Initial paint
updateVolumeUi();
updateModeUi();
updatePlayState();
updateTimeUi();
bootstrap();
