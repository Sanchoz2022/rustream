const API_VERSION = '1.16.1';
const CLIENT = 'rustream-web';

export class ApiError extends Error {
  constructor(message, status = 0, code = '') {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
  }
}

function buildUrl(method, params = {}) {
  const search = new URLSearchParams({ v: API_VERSION, c: CLIENT, f: 'json', ...params });
  return `/rest/${method}.view?${search.toString()}`;
}

export async function api(method, params = {}) {
  const response = await fetch(buildUrl(method, params), { credentials: 'same-origin' });
  if (response.status === 401) {
    throw new ApiError('Требуется вход в аккаунт', 401);
  }
  if (!response.ok) {
    throw new ApiError(`HTTP ${response.status}`, response.status);
  }
  const data = await response.json();
  const payload = data['subsonic-response'];
  if (!payload) {
    throw new ApiError('Некорректный ответ сервера');
  }
  if (payload.status !== 'ok') {
    throw new ApiError(payload.error?.message || 'Ошибка API');
  }
  return payload;
}

async function jsonFetch(path, options = {}) {
  const response = await fetch(path, {
    credentials: 'same-origin',
    ...options,
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
  });
  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }
  if (!response.ok) {
    const fallback = response.status === 401 ? 'Требуется вход в аккаунт' : `HTTP ${response.status}`;
    throw new ApiError(data?.error || fallback, response.status, data?.code || '');
  }
  return data;
}

export const coverUrl = (id, size = 300) =>
  id ? buildUrl('getCoverArt', { id, size }) : '';

export const streamUrl = (id) => buildUrl('stream', { id });

export async function getArtists() {
  const data = await api('getArtists');
  const artists = [];
  for (const index of data.artists?.index || []) {
    for (const artist of index.artist || []) artists.push(artist);
  }
  return artists;
}

export const getArtist = (id) => api('getArtist', { id });
export const getAlbum = (id) => api('getAlbum', { id });

export async function getAlbums(type = 'alphabeticalByName', size = 100, offset = 0) {
  const data = await api('getAlbumList2', { type, size, offset });
  return data.albumList2?.album || [];
}

export async function getRandomSongs(size = 500) {
  const data = await api('getRandomSongs', { size });
  return data.randomSongs?.song || [];
}

export async function search(query) {
  const data = await api('search3', {
    query,
    artistCount: 30,
    albumCount: 50,
    songCount: 100,
  });
  return data.searchResult3 || { artist: [], album: [], song: [] };
}

export async function getPlaylists() {
  const data = await api('getPlaylists');
  return data.playlists?.playlist || [];
}

export async function getPlaylist(id) {
  const data = await api('getPlaylist', { id });
  return data.playlist;
}

export const createPlaylist = (name, songIds = []) => {
  const params = new URLSearchParams({ v: API_VERSION, c: CLIENT, f: 'json', name });
  songIds.forEach((id) => params.append('songId', id));
  return fetch(`/rest/createPlaylist.view?${params.toString()}`, {
    credentials: 'same-origin',
  })
    .then((r) => r.json())
    .then((d) => d['subsonic-response']);
};

export const addToPlaylist = (playlistId, songId) => {
  const params = new URLSearchParams({
    v: API_VERSION,
    c: CLIENT,
    f: 'json',
    playlistId,
    songIdToAdd: songId,
  });
  return fetch(`/rest/updatePlaylist.view?${params.toString()}`, {
    credentials: 'same-origin',
  }).then((r) => r.json());
};

export const removeFromPlaylist = (playlistId, songIndex) => {
  const params = new URLSearchParams({
    v: API_VERSION,
    c: CLIENT,
    f: 'json',
    playlistId,
    songIndexToRemove: String(songIndex),
  });
  return fetch(`/rest/updatePlaylist.view?${params.toString()}`, {
    credentials: 'same-origin',
  }).then((r) => r.json());
};

export const deletePlaylist = (id) => api('deletePlaylist', { id });

export async function getStarred() {
  const data = await api('getStarred2');
  return data.starred2 || { artist: [], album: [], song: [] };
}

export const star = (id) => api('star', { id });
export const unstar = (id) => api('unstar', { id });

export async function getStats() {
  return jsonFetch('/api/stats');
}

export async function getMe() {
  return jsonFetch('/api/me');
}

export async function getSession() {
  return jsonFetch('/api/session');
}

export async function getAuthConfig() {
  return jsonFetch('/api/auth/config');
}

export function login(username, password) {
  return jsonFetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });
}

export function logout() {
  return jsonFetch('/api/auth/logout', { method: 'POST' });
}

/** Older call sites pass the name and the theme together. */
export function updateProfile(displayName, theme) {
  return updateMe({ displayName, theme });
}

/** PATCH /api/me with any subset of `{ displayName, theme }`. */
export function updateMe(patch) {
  return jsonFetch('/api/me', {
    method: 'PATCH',
    body: JSON.stringify(patch),
  });
}

export async function getRatings() {
  return jsonFetch('/api/me/ratings');
}

export function setRating(trackId, rating) {
  return jsonFetch('/api/me/ratings', {
    method: 'PUT',
    body: JSON.stringify({ trackId, rating }),
  });
}

export function getLastfmConfig() {
  return jsonFetch('/api/admin/lastfm');
}

export function saveLastfmConfig(apiKey, apiSecret, clear = false) {
  return jsonFetch('/api/admin/lastfm', {
    method: 'PUT',
    body: JSON.stringify({ apiKey, apiSecret, clear }),
  });
}

export function changePassword(currentPassword, newPassword) {
  return jsonFetch('/api/me/password', {
    method: 'POST',
    body: JSON.stringify({ currentPassword, newPassword }),
  });
}

export function saveScrobbling({ lastfmUsername, lastfmSessionKey, listenbrainzToken }) {
  return jsonFetch('/api/me/scrobbling', {
    method: 'PUT',
    body: JSON.stringify({ lastfmUsername, lastfmSessionKey, listenbrainzToken }),
  });
}

export async function getMeStats() {
  return jsonFetch('/api/me/stats');
}

export async function startPlay(trackId, source = 'web') {
  return jsonFetch('/api/plays/start', {
    method: 'POST',
    body: JSON.stringify({ trackId, source }),
  });
}

export function updatePlay(playId, positionMs, completed = false) {
  return jsonFetch('/api/plays/update', {
    method: 'POST',
    body: JSON.stringify({ playId, positionMs, completed }),
  });
}

export async function getLiveQueue(count = 40) {
  const data = await jsonFetch(`/api/live/queue?count=${count}`);
  return data.tracks || [];
}

export async function getMixes() {
  const data = await jsonFetch('/api/live/mixes');
  return data.mixes || [];
}

export async function getLyrics(trackId, refresh = false) {
  return jsonFetch(`/api/lyrics/${encodeURIComponent(trackId)}${refresh ? '?refresh=1' : ''}`);
}

export async function rescan() {
  return jsonFetch('/api/rescan', { method: 'POST' });
}

export async function listUsers() {
  const data = await jsonFetch('/api/users');
  return data.users || [];
}

export function createUser({ username, password, displayName, isAdmin }) {
  return jsonFetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ username, password, displayName, isAdmin }),
  });
}

export function clearHistory() {
  return jsonFetch('/api/me/history', { method: 'DELETE' });
}

export function deleteUser(userId) {
  return jsonFetch(`/api/users/${userId}`, { method: 'DELETE' });
}

export function lastfmConnect() {
  return jsonFetch('/api/lastfm/connect');
}

export function lastfmComplete(token = '') {
  return jsonFetch('/api/lastfm/complete', {
    method: 'POST',
    body: JSON.stringify({ token }),
  });
}

// --- Invites & registration -------------------------------------------------

export async function listInvites() {
  const data = await jsonFetch('/api/admin/invites');
  return data?.invites || [];
}

export async function createInvite({ note, expiresInDays, maxUses, isAdmin }) {
  const data = await jsonFetch('/api/admin/invites', {
    method: 'POST',
    body: JSON.stringify({ note, expiresInDays, maxUses, isAdmin }),
  });
  return data?.invite;
}

export function revokeInvite(code) {
  return jsonFetch(`/api/admin/invites/${encodeURIComponent(code)}`, { method: 'DELETE' });
}

export function checkInvite(code) {
  return jsonFetch(`/api/auth/invite/${encodeURIComponent(code)}`);
}

export function register({ invite, username, password, displayName }) {
  return jsonFetch('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({ invite, username, password, displayName: displayName || undefined }),
  });
}

export const inviteLink = (code) =>
  `${location.origin}/static/index.html#/register?invite=${encodeURIComponent(code)}`;

// --- YouTube Music -------------------------------------------------------------

export function getYtmStatus() {
  return jsonFetch('/api/me/ytm');
}

export function connectYtm(cookies) {
  return jsonFetch('/api/me/ytm', { method: 'PUT', body: JSON.stringify({ cookies }) });
}

export function disconnectYtm() {
  return jsonFetch('/api/me/ytm', { method: 'DELETE' });
}

export async function ytmSearch(query, limit = 40) {
  const params = new URLSearchParams({ q: query, limit: String(limit) });
  const data = await jsonFetch(`/api/ytm/search?${params.toString()}`);
  return data?.tracks || [];
}

export async function ytmLiked(limit = 200) {
  const data = await jsonFetch(`/api/ytm/liked?limit=${limit}`);
  return data?.tracks || [];
}
