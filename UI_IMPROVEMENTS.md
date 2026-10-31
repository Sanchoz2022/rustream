# Rustream UI — План улучшений

## Текущие проблемы

### Мобильный (телефон)
1. **Плеер-бар слишком узкий** — 88px высоты, controls тесно (gap: 2px), кнопки 34px
2. **Seek-bar наверху** — позиция `absolute top: 0`, неудобно тапать
3. **Артист скрыт** (`.pb-artist { display: none }`) — видно только название трека
4. **Лайк-кнопки скрыты** в мини-плеере
5. **Качество/формат** скрыто (`.pb-quality { display: none }`)
6. **Нижняя таббар** — 5 табов, но Library — это обёртка для 5 секций (перегруз)
7. **Очередь** открывается в Now Playing панели (занимает весь экран)
8. **Эквалайзер** в той же панели — переключение вкладок неудобно
9. **Поиск** — `Ctrl K` hint скрыт, но хоткей остаётся (на телефоне бесполезен)

### Десктоп
1. **Сайдбар-навигация** — вертикальная, но на широких экранах (>1180px) можно компактнее
2. **Плеер-бар** — 3 колонки (left/center/right), но кнопки эквалайзера/очереди справа — клик далеко
3. **Главная** — "продолжить слушать" карточка занимает много места
4. **Альбом/трек** — cover 800px, но на 1080p это ~75% ширины контента

---

## Что нужно (полный функционал плеера)

### Desktop
- [x] Play/Pause/Next/Prev
- [x] Shuffle/Repeat
- [x] Seek bar с временем
- [x] Громкость (слайдер)
- [x] Обложка + название + артист (кликабельно → Now Playing)
- [x] Лайк/дизлайк
- [x] Качество/формат
- [x] Кнопки: Текст, Эквалайзер, Очередь
- [ ] **Минимизация** Now Playing (сейчас только close)
- [ ] **Клавиши**: Space, стрелки, медиа-клавиши (MediaSession API)

### Mobile
- [ ] **Крупный плеер-бар** (минимум 120px высоты)
- [ ] **Seek внутри бара** (не absolute top)
- [ ] **Артист виден** всегда
- [ ] **Лайк/дизлайк** доступны (свайп?)
- [ ] **Жесты**:
  - Свайп вверх на плеере → Now Playing (полный экран)
  - Свайп вниз → свернуть
  - Двойной тап на обложке → лайк
  - Долгий тап → меню (добавить в плейлист, перейти к альбому)
- [ ] **Качество/формат** в Now Playing (не в мини-баре)
- [ ] **Эквалайзер** — отдельная кнопка, а не вкладка
- [ ] **Очередь** — свайп справа или кнопка в Now Playing
- [ ] **Нижняя навигация** — 4 таба (Home, Live, Library, Profile), YouTube в Library

---

## Приоритетные фиксы (MVP)

### 1. Мобильный плеер-бар (критично)
**Проблема**: тесно, seek неудобен, артист скрыт  
**Решение**:
```css
@media (max-width: 940px) {
  .playerbar {
    height: 120px; /* было 88px */
    grid-template-rows: auto 1fr auto;
    grid-template-columns: auto 1fr auto;
    padding: 12px;
    gap: 10px;
  }
  
  /* Обложка + мета слева */
  .pb-left {
    grid-column: 1;
    grid-row: 1 / 3;
    flex-direction: column;
    gap: 8px;
  }
  
  .pb-cover {
    width: 64px;
    height: 64px;
  }
  
  .pb-meta {
    max-width: 140px;
  }
  
  .pb-artist {
    display: block; /* показать артиста */
    font-size: 12px;
    opacity: 0.7;
  }
  
  /* Controls справа от обложки */
  .pb-center {
    grid-column: 2;
    grid-row: 1 / 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .pb-controls {
    gap: 4px; /* было 2px */
  }
  
  /* Лайк/дизлайк справа */
  .pb-left .like-btn {
    display: flex; /* вернуть */
  }
  
  /* Seek внизу на всю ширину */
  .pb-seek {
    position: static; /* убрать absolute */
    grid-column: 1 / -1;
    grid-row: 3;
    gap: 8px;
  }
  
  .pb-seek .time {
    display: block; /* показать время */
    font-size: 11px;
  }
  
  .seek {
    height: 8px; /* было 6px */
  }
}
```

### 2. Жесты и свайпы (UX)
**Добавить**:
- Hammer.js или встроенные Touch Events
- Свайп вверх на `.playerbar` → открыть `.np` (Now Playing)
- Свайп вниз на `.np-sheet` → закрыть
- Двойной тап на `.pb-cover` → лайк

**Код** (main.js):
```js
let touchStartY = 0;
$('#playerbar').addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
});

$('#playerbar').addEventListener('touchend', (e) => {
  const touchEndY = e.changedTouches[0].clientY;
  const deltaY = touchStartY - touchEndY;
  if (deltaY > 80) { // свайп вверх
    openNowPlaying();
  }
});

// Двойной тап на обложке → лайк
let lastTap = 0;
$('#pb-cover').addEventListener('touchend', (e) => {
  const now = Date.now();
  if (now - lastTap < 300) {
    e.preventDefault();
    toggleLike(player.track?.id);
  }
  lastTap = now;
});
```

### 3. Нижняя навигация (упростить)
**Было**: 5 табов (Home, Live, YouTube, Library, Profile)  
**Стало**: 4 таба
```
Home     Live     Library     Profile
[🏠]     [📻]      [📚]        [👤]
```
- **Library** → модальное меню:
  - Артисты
  - Альбомы
  - Треки
  - Плейлисты
  - Избранное
  - YouTube Music
  - Статистика

**HTML**:
```html
<nav class="tabbar">
  <a href="#/home" data-tab="home"><span>🏠</span><span>Главная</span></a>
  <a href="#/live" data-tab="live"><span>📻</span><span>Live</span></a>
  <button data-action="open-library-menu"><span>📚</span><span>Медиатека</span></button>
  <a href="#/profile" data-tab="profile"><span>👤</span><span>Профиль</span></a>
</nav>

<div id="library-menu" class="bottom-sheet" hidden>
  <div class="sheet-head"><h2>Медиатека</h2><button data-action="close-library">×</button></div>
  <nav class="sheet-nav">
    <a href="#/artists">Артисты</a>
    <a href="#/albums">Альбомы</a>
    <a href="#/tracks">Треки</a>
    <a href="#/playlists">Плейлисты</a>
    <a href="#/favorites">Избранное</a>
    <a href="#/ytm">YouTube Music</a>
    <a href="#/stats">Статистика</a>
  </nav>
</div>
```

### 4. Now Playing (полный экран на мобиле)
**Улучшения**:
- Обложка крупнее (200x200 → 280x280)
- Кнопки крупнее (42px → 56px)
- Seek-bar толще (8px)
- Вкладки (Текст/Эквалайзер/Очередь) → кнопки-иконки снизу

```css
@media (max-width: 940px) {
  .np-sheet {
    height: 100vh; /* было 94vh */
    border-radius: 0; /* на весь экран */
  }
  
  .np-cover {
    width: 280px; /* было 120px */
    height: 280px;
  }
  
  .np-controls .icon-btn {
    width: 48px;
    height: 48px;
  }
  
  .np-controls .play-btn {
    width: 64px;
    height: 64px;
  }
  
  /* Вкладки → кнопки-иконки */
  .np-tabs {
    display: none;
  }
  
  .np-actions {
    display: flex;
    gap: 12px;
    justify-content: center;
    padding: 16px;
  }
  
  .np-actions .icon-btn {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: var(--surface-2);
  }
}
```

### 5. Десктоп: компактный плеер
**Проблема**: правая часть плеера далеко от центра  
**Решение**: группировать кнопки ближе к controls

```css
.playerbar {
  grid-template-columns: minmax(240px, 1fr) minmax(360px, 1.6fr) minmax(200px, 0.8fr);
  gap: 20px;
}

.pb-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.pb-actions {
  /* Эквалайзер, Очередь, Текст */
  display: flex;
  gap: 6px;
}

.pb-right {
  /* Только громкость и качество */
}
```

---

## Дополнительные фичи (nice-to-have)

### 6. Клавиатурные хоткеи (desktop)
```js
document.addEventListener('keydown', (e) => {
  if (e.target.matches('input, textarea')) return;
  
  switch (e.code) {
    case 'Space':
      e.preventDefault();
      player.toggle();
      break;
    case 'ArrowLeft':
      player.seek(player.currentTime - 5);
      break;
    case 'ArrowRight':
      player.seek(player.currentTime + 5);
      break;
    case 'KeyN':
      player.next();
      break;
    case 'KeyP':
      player.prev();
      break;
    case 'KeyL':
      toggleLike(player.track?.id);
      break;
    case 'KeyM':
      player.toggleMute();
      break;
  }
});
```

### 7. MediaSession API (медиа-клавиши + уведомления)
```js
if ('mediaSession' in navigator) {
  navigator.mediaSession.setActionHandler('play', () => player.play());
  navigator.mediaSession.setActionHandler('pause', () => player.pause());
  navigator.mediaSession.setActionHandler('previoustrack', () => player.prev());
  navigator.mediaSession.setActionHandler('nexttrack', () => player.next());
  navigator.mediaSession.setActionHandler('seekto', (details) => player.seek(details.seekTime));
}

function updateMediaSession(track) {
  if (!track || !('mediaSession' in navigator)) return;
  navigator.mediaSession.metadata = new MediaMetadata({
    title: track.title,
    artist: track.artist,
    album: track.album,
    artwork: [
      { src: api.coverUrl(track.coverArt || track.albumId, 96), sizes: '96x96', type: 'image/jpeg' },
      { src: api.coverUrl(track.coverArt || track.albumId, 512), sizes: '512x512', type: 'image/jpeg' },
    ],
  });
}
```

### 8. Drag-and-drop в очереди
```js
// Sortable.js или встроенный Drag API
const queue = $('#np-queue');
new Sortable(queue, {
  animation: 150,
  onEnd: (evt) => {
    player.moveInQueue(evt.oldIndex, evt.newIndex);
  },
});
```

### 9. Темы (уже есть 5 палитр, добавить dark/light toggle)
```js
// system, light, dark, auto
const theme = localStorage.getItem('theme') || 'auto';
if (theme === 'light') {
  document.documentElement.classList.add('light-mode');
}
```

### 10. Оффлайн (Service Worker + кэш обложек)
```js
// sw.js
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/rest/getCoverArt')) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request).then((fetchResponse) => {
          return caches.open('covers').then((cache) => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      })
    );
  }
});
```

---

## Тестирование

1. **Desktop** (1920x1080):
   - Плеер-бар: все кнопки доступны, seek удобен
   - Очередь: скролл, drag-and-drop
   - Эквалайзер: пресеты, ползунки

2. **Tablet** (768x1024):
   - Навигация: горизонтальный скролл (если не влезает)
   - Плеер: средний размер (между desktop и mobile)

3. **Mobile** (375x667, iPhone SE):
   - Плеер-бар: 120px, артист виден, seek внизу
   - Свайп вверх → Now Playing
   - Двойной тап на обложке → лайк
   - Нижняя навигация: 4 таба, Library → меню

4. **Клавиатура** (desktop):
   - Space → play/pause
   - L → лайк
   - N → next, P → prev
   - Стрелки → seek ±5s

5. **Медиа-клавиши**:
   - Блокировка экрана → уведомление с обложкой
   - Play/Pause на клавиатуре/наушниках

---

## Приоритеты

**P0 (критично)**:
1. Мобильный плеер-бар (120px, артист, seek внизу)
2. Жесты (свайп вверх → Now Playing)
3. Нижняя навигация (4 таба)

**P1 (важно)**:
4. Now Playing (крупная обложка, кнопки)
5. Клавиатурные хоткеи (desktop)
6. MediaSession API

**P2 (nice-to-have)**:
7. Drag-and-drop очереди
8. Light/Dark toggle
9. Service Worker (оффлайн)
10. Анимации (skeleton, transitions)
