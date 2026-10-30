# Rustream UI - Material Design 3

Современный веб-интерфейс для Rustream Music Server с Material Design 3 и glassmorphism эффектами.

## ✨ Возможности

### Дизайн
- 🎨 Material Design 3 dark theme
- 💎 Glassmorphism эффекты (жидкое стекло)
- 🌈 Градиентный фон с анимациями
- 📱 Responsive layout
- ⚡ Плавные переходы и анимации

### Функциональность
- ✅ Просмотр артистов с обложками альбомов
- ✅ Навигация по альбомам и трекам
- ✅ Встроенный аудиоплеер с управлением
- ✅ Прогресс-бар воспроизведения
- ✅ Регулировка громкости
- ✅ Поиск по библиотеке
- ✅ Material Icons
- ✅ Navigation Rail (боковая панель)

### В разработке
- [ ] 10-полосный эквалайзер
- [ ] Lyrics (тексты песен)
- [ ] YouTube Music интеграция
- [ ] Битрейт и статистика загрузки
- [ ] Shuffle / Repeat
- [ ] Плейли��ты
- [ ] Tauri desktop apps (Linux, Windows, macOS, Android)

## 🚀 Быстрый старт

### Разработка

```bash
cd rustream-ui
npm install
npm run dev
```

Откроется dev-сервер на `http://localhost:5173` с проксированием API на `http://192.168.10.104:4533`

### Сборка

```bash
npm run build
```

Собранные файлы попадут в `../static/` и готовы к деплою на сервер.

## 📦 Технологии

- **Vite** - быстрая сборка и dev-сервер
- **Vanilla JS** - без фреймворков, чистый JavaScript
- **Material Design 3** - дизайн-система Google
- **CSS Custom Properties** - для темизации
- **Google Fonts** - Roboto + Material Symbols

## 🎨 Цветовая схема

```css
--md-sys-color-primary: #BB86FC          /* Фиолетовый */
--md-sys-color-secondary: #03DAC6        /* Бирюзовый */
--md-sys-color-surface: #1C1B1F          /* Тёмный фон */
--md-sys-color-on-surface: #E6E1E5       /* Светлый текст */
```

## 🔧 API

UI использует OpenSubsonic API:

- `/rest/getArtists.view` - список артистов
- `/rest/getArtist.view?id=X` - альбомы артиста
- `/rest/getAlbum.view?id=X` - треки альбома
- `/rest/stream.view?id=X` - стриминг трека
- `/rest/getCoverArt.view?id=X` - обложка
- `/rest/search3.view?query=X` - поиск

Авторизация через query параметры: `u`, `p`, `v`, `c`, `f`

## 📱 Структура проекта

```
rustream-ui/
├── index.html          # Точка входа
├── vite.config.js      # Конфигурация Vite
├── package.json        # Зависимости
└── src/
    ├── main.js         # Основная логика
    └── style.css       # MD3 стили
```

## 🎯 Roadmap

### v1.0 (текущая)
- [x] Базовая навигация
- [x] Аудиоплеер
- [x] Material Design 3 UI
- [x] Обложки альбомов

### v1.1 (планируется)
- [ ] Эквалайзер
- [ ] Lyrics
- [ ] Статистика битрейта
- [ ] Shuffle/Repeat

### v2.0 (будущее)
- [ ] YouTube Music
- [ ] Tauri desktop apps
- [ ] Плейлисты
- [ ] Темы оформления

## 🐛 Известные проблемы

- Нет авторизации (любые u/p проходят)
- YouTube Music пока не работает
- Нет кэширования обложек

## 📄 Лицензия

MIT

## 👤 Автор

void-sanchoz
