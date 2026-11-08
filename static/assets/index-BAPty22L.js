(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const Ga={home:"M4 20v-8H2L12 3l10 9h-2v8h-6v-6h-4v6H4z",person:"M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z",album:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",music:"M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z",playlist:"M3 6h12v2H3V6zm0 4h12v2H3v-2zm0 4h8v2H3v-2zm12 .5a3.5 3.5 0 1 0 3.5 3.5V9h3V6h-4v8.5a3.5 3.5 0 0 0-2.5-.9z",search:"M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z",play:"M8 5v14l11-7L8 5z",pause:"M6 5h4v14H6V5zm8 0h4v14h-4V5z",prev:"M6 6h2v12H6V6zm3.5 6L18 18V6l-8.5 6z",next:"M16 6h2v12h-2V6zM6 18l8.5-6L6 6v12z",shuffle:"M10.59 9.17 5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z",repeat:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z",repeatOne:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z",volumeUp:"M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.5 4.5 0 0 0 16.5 12zM14 3.23v2.06a6.99 6.99 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54z",volumeDown:"M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.5 4.5 0 0 0 16.5 12z",volumeOff:"M16.5 12a4.5 4.5 0 0 0-2.5-4.03v2.21l2.45 2.45A4.4 4.4 0 0 0 16.5 12zM19 12a7 7 0 0 1-.94 3.51l1.48 1.48A9 9 0 0 0 14 4.75v2.06A7 7 0 0 1 19 12zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25a7 7 0 0 1-2.25 1.2v2.06a9 9 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z",queue:"M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18a3 3 0 1 0 2 2.82V8h3V6h-5z",lyrics:"M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2z",equalizer:"M7 20h2V10H7v10zm4-8h2V4h-2v8zm4 4h2V7h-2v9zM3 20h2v-6H3v6z",close:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",back:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",add:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",delete:"M6 19c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z",heart:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",heartOutline:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z",more:"M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",clock:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z",library:"M4 6H2v14a2 2 0 0 0 2 2h14v-2H4V6zm16-4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-3 9H9V9h8v2zm-2 4H9v-2h6v2zm2-8H9V5h8v2z",refresh:"M17.65 6.35A8 8 0 1 0 19.73 14h-2.08A6 6 0 1 1 12 6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z",edit:"M3 17.25V21h3.75L17.8 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",check:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",wave:"M3 12h2v4H3v-4zm4-4h2v12H7V8zm4-4h2v16h-2V4zm4 6h2v6h-2v-6zm4-2h2v10h-2V8z",radio:"M3.24 6.15C2.51 6.43 2 7.17 2 8v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-.83-.51-1.57-1.24-1.85L12.7 2.3a1 1 0 0 0-.7 0L3.24 6.15zM8 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm10-10H9v2h9v-2zm0 4h-3v2h3v-2z",logout:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5-5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z",thumbDown:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z",thumbUp:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z",chart:"M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z",palette:"M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z",keyboard:"M20 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zM11 8h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-3-3h2v2H5V8zm0 3h2v2H5v-2zm2 4H5v-2h2v2zm9 0H8v-2h8v2zm0-4h-2v-2h2v2zm3 0h-2v-2h2v2zm0-3h-2V8h2v2z",settings:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.03 7.03 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.47.41l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z",chevronDown:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z",chevronRight:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z",ytm:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-13a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-1.5 7.25v-4.5L14.5 12l-4 2.25z",copy:"M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z",link:"M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4a3.1 3.1 0 0 1 0 6.2h-4V17h4a5 5 0 0 0 0-10z",ticket:"M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 1 0 4v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 1 0-4zm-2-1.46a4 4 0 0 0 0 6.92V18H4v-2.54a4 4 0 0 0 0-6.92V6h16v2.54zM11 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z",key:"M12.65 10A6 6 0 1 0 12.65 14H17v4h4v-4h2v-4H12.65zM7 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",lock:"M18 8h-1V6A5 5 0 0 0 7 6v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zM9 6a3 3 0 0 1 6 0v2H9V6zm9 14H6V10h12v10zm-6-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",moreHoriz:"M6 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",queueAdd:"M14 10H3v2h11v-2zm0-4H3v2h11V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM3 16h7v-2H3v2z",sparkle:"M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z",external:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z",shield:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",darkMode:"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8A9.3 9.3 0 0 0 12 3z",lightMode:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2 13h2a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm18 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM11 2v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM5.99 4.58a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06z",expand:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z",sun:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2 13h2a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm18 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM11 2v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM5.99 4.58a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06z",moon:"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8A9.3 9.3 0 0 0 12 3z",menu:"M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z",eye:"M12 5c-5 0-9 4.5-10 7 1 2.5 5 7 10 7s9-4.5 10-7c-1-2.5-5-7-10-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",eyeOff:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2.71 3.16l1.94 1.94C3.29 6.24 2.06 7.94 1 10c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l2.71 2.71 1.27-1.27L3.98 1.89 2.71 3.16zM12 15c-1.03 0-1.96-.42-2.64-1.1l3.54 3.54c-.28.09-.59.14-.9.14z"};function d(e,t=""){const a=Ga[e]||Ga.music;return`<svg class="icon ${t}" viewBox="0 0 24 24" aria-hidden="true"><path d="${a}"/></svg>`}const He="1.16.1",Ne="rustream-web";class Qt extends Error{constructor(t,a=0,s=""){super(t),this.name="ApiError",this.status=a,this.code=s}}function Ea(e,t={}){const a=new URLSearchParams({v:He,c:Ne,f:"json",...t});return`/rest/${e}.view?${a.toString()}`}async function dt(e,t={}){var i;const a=await fetch(Ea(e,t),{credentials:"same-origin"});if(a.status===401)throw new Qt("Требуется вход в аккаунт",401);if(!a.ok)throw new Qt(`HTTP ${a.status}`,a.status);const n=(await a.json())["subsonic-response"];if(!n)throw new Qt("Некорректный ответ сервера");if(n.status!=="ok")throw new Qt(((i=n.error)==null?void 0:i.message)||"Ошибка API");return n}async function x(e,t={}){const a=await fetch(e,{credentials:"same-origin",...t,headers:{"Content-Type":"application/json",...t.headers||{}}});let s=null;try{s=await a.json()}catch{s=null}if(!a.ok){const n=a.status===401?"Требуется вход в аккаунт":`HTTP ${a.status}`;throw new Qt((s==null?void 0:s.error)||n,a.status,(s==null?void 0:s.code)||"")}return s}const wt=(e,t=300)=>e?Ea("getCoverArt",{id:e,size:t}):"",Xe=e=>Ea("stream",{id:e});async function En(){var a;const e=await dt("getArtists"),t=[];for(const s of((a=e.artists)==null?void 0:a.index)||[])for(const n of s.artist||[])t.push(n);return t}const ks=e=>dt("getArtist",{id:e}),Ma=e=>dt("getAlbum",{id:e});async function La(e="alphabeticalByName",t=100,a=0){var n;return((n=(await dt("getAlbumList2",{type:e,size:t,offset:a})).albumList2)==null?void 0:n.album)||[]}async function Mn(e=500){var a;return((a=(await dt("getRandomSongs",{size:e})).randomSongs)==null?void 0:a.song)||[]}async function Ln(e){return(await dt("search3",{query:e,artistCount:30,albumCount:50,songCount:100})).searchResult3||{artist:[],album:[],song:[]}}async function xa(){var t;return((t=(await dt("getPlaylists")).playlists)==null?void 0:t.playlist)||[]}async function xn(e){return(await dt("getPlaylist",{id:e})).playlist}const Ts=(e,t=[])=>{const a=new URLSearchParams({v:He,c:Ne,f:"json",name:e});return t.forEach(s=>a.append("songId",s)),fetch(`/rest/createPlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(s=>s.json()).then(s=>s["subsonic-response"])},_n=(e,t)=>{const a=new URLSearchParams({v:He,c:Ne,f:"json",playlistId:e,songIdToAdd:t});return fetch(`/rest/updatePlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(s=>s.json())},An=(e,t)=>{const a=new URLSearchParams({v:He,c:Ne,f:"json",playlistId:e,songIndexToRemove:String(t)});return fetch(`/rest/updatePlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(s=>s.json())},Pn=e=>dt("deletePlaylist",{id:e});async function Dn(){return(await dt("getStarred2")).starred2||{artist:[],album:[],song:[]}}async function Cn(){return x("/api/stats")}async function be(){return x("/api/me")}async function zn(){return x("/api/session")}async function ua(){return x("/api/auth/config")}function qn(e,t){return x("/api/auth/login",{method:"POST",body:JSON.stringify({username:e,password:t})})}function Es(){return x("/api/auth/logout",{method:"POST"})}function Ja(e,t){return _a({displayName:e,theme:t})}function _a(e){return x("/api/me",{method:"PATCH",body:JSON.stringify(e)})}async function In(){return x("/api/me/ratings")}function On(e,t){return x("/api/me/ratings",{method:"PUT",body:JSON.stringify({trackId:e,rating:t})})}function We(){return x("/api/admin/lastfm")}function Ka(e,t,a=!1){return x("/api/admin/lastfm",{method:"PUT",body:JSON.stringify({apiKey:e,apiSecret:t,clear:a})})}function Hn(e,t){return x("/api/me/password",{method:"POST",body:JSON.stringify({currentPassword:e,newPassword:t})})}function Nn(e){return x(`/api/me/scrobbling?service=${encodeURIComponent(e)}`,{method:"DELETE"})}function Rn({lastfmUsername:e,lastfmSessionKey:t,listenbrainzToken:a}){return x("/api/me/scrobbling",{method:"PUT",body:JSON.stringify({lastfmUsername:e,lastfmSessionKey:t,listenbrainzToken:a})})}async function Ms(){return x("/api/me/stats")}async function Vn(e,t="web"){return x("/api/plays/start",{method:"POST",body:JSON.stringify({trackId:e,source:t})})}function Qa(e,t,a=!1){return x("/api/plays/update",{method:"POST",body:JSON.stringify({playId:e,positionMs:t,completed:a})})}async function Ls(e=40){return(await x(`/api/live/queue?count=${e}`)).tracks||[]}async function Yn(){return(await x("/api/live/mixes")).mixes||[]}async function jn(e,t=!1){const a=new AbortController,s=setTimeout(()=>a.abort(),2e4);try{return await x(`/api/lyrics/${encodeURIComponent(e)}${t?"?refresh=1":""}`,{signal:a.signal})}finally{clearTimeout(s)}}async function xs(){return x("/api/rescan",{method:"POST"})}async function Fn(){return(await x("/api/users")).users||[]}function Bn({username:e,password:t,displayName:a,isAdmin:s}){return x("/api/users",{method:"POST",body:JSON.stringify({username:e,password:t,displayName:a,isAdmin:s})})}function Un(){return x("/api/me/history",{method:"DELETE"})}function Xn(e){return x(`/api/users/${e}`,{method:"DELETE"})}function Wn(){return x("/api/lastfm/connect")}function Gn(e=""){return x("/api/lastfm/complete",{method:"POST",body:JSON.stringify({token:e})})}async function Jn(){const e=await x("/api/admin/invites");return(e==null?void 0:e.invites)||[]}async function Kn({note:e,expiresInDays:t,maxUses:a,isAdmin:s}){const n=await x("/api/admin/invites",{method:"POST",body:JSON.stringify({note:e,expiresInDays:t,maxUses:a,isAdmin:s})});return n==null?void 0:n.invite}function Qn(e){return x(`/api/admin/invites/${encodeURIComponent(e)}`,{method:"DELETE"})}function Zn(e){return x(`/api/auth/invite/${encodeURIComponent(e)}`)}function ti({invite:e,username:t,password:a,displayName:s}){return x("/api/auth/register",{method:"POST",body:JSON.stringify({invite:e,username:t,password:a,displayName:s||void 0})})}const _s=e=>`${location.origin}/static/index.html#/register?invite=${encodeURIComponent(e)}`;function Re(){return x("/api/me/ytm")}function ei(e){return x("/api/me/ytm",{method:"PUT",body:JSON.stringify({cookies:e})})}function ai(){return x("/api/me/ytm",{method:"DELETE"})}async function si(e){return!Array.isArray(e)||!e.length?null:x("/api/ytm/prefetch",{method:"POST",body:JSON.stringify({ids:e.slice(0,4)})}).catch(()=>null)}async function As(e,t=40){const a=new URLSearchParams({q:e,limit:String(t)}),s=await x(`/api/ytm/search?${a.toString()}`);return(s==null?void 0:s.tracks)||[]}async function Ps(e=200){const t=await x(`/api/ytm/liked?limit=${e}`);return(t==null?void 0:t.tracks)||[]}async function Ds(e=40){const t=await x(`/api/ytm/history?limit=${e}`);return(t==null?void 0:t.tracks)||[]}function ni(){return x("/api/me/player")}function ii(e){return x("/api/me/player",{method:"PUT",body:JSON.stringify({state:e})})}/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function ri(e,t,a){return(t=di(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ft(){return ft=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)({}).hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},ft.apply(null,arguments)}function Za(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,s)}return a}function ct(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Za(Object(a),!0).forEach(function(s){ri(e,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Za(Object(a)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))})}return e}function oi(e,t){if(e==null)return{};var a,s,n=li(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function li(e,t){if(e==null)return{};var a={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;a[s]=e[s]}return a}function ci(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var s=a.call(e,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function di(e){var t=ci(e,"string");return typeof t=="symbol"?t:t+""}function pa(e){"@babel/helpers - typeof";return pa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pa(e)}var ui="1.15.7";function ht(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var mt=ht(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),he=ht(/Edge/i),ts=ht(/firefox/i),se=ht(/safari/i)&&!ht(/chrome/i)&&!ht(/android/i),Aa=ht(/iP(ad|od|hone)/i),Cs=ht(/chrome/i)&&ht(/android/i),zs={capture:!1,passive:!1};function A(e,t,a){e.addEventListener(t,a,!mt&&zs)}function _(e,t,a){e.removeEventListener(t,a,!mt&&zs)}function xe(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function qs(e){return e.host&&e!==document&&e.host.nodeType&&e.host!==e?e.host:e.parentNode}function nt(e,t,a,s){if(e){a=a||document;do{if(t!=null&&(t[0]===">"?e.parentNode===a&&xe(e,t):xe(e,t))||s&&e===a)return e;if(e===a)break}while(e=qs(e))}return null}var es=/\s+/g;function J(e,t,a){if(e&&t)if(e.classList)e.classList[a?"add":"remove"](t);else{var s=(" "+e.className+" ").replace(es," ").replace(" "+t+" "," ");e.className=(s+(a?" "+t:"")).replace(es," ")}}function k(e,t,a){var s=e&&e.style;if(s){if(a===void 0)return document.defaultView&&document.defaultView.getComputedStyle?a=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(a=e.currentStyle),t===void 0?a:a[t];!(t in s)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),s[t]=a+(typeof a=="string"?"":"px")}}function Nt(e,t){var a="";if(typeof e=="string")a=e;else do{var s=k(e,"transform");s&&s!=="none"&&(a=s+" "+a)}while(!t&&(e=e.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(a)}function Is(e,t,a){if(e){var s=e.getElementsByTagName(t),n=0,i=s.length;if(a)for(;n<i;n++)a(s[n],n);return s}return[]}function lt(){var e=document.scrollingElement;return e||document.documentElement}function H(e,t,a,s,n){if(!(!e.getBoundingClientRect&&e!==window)){var i,o,l,c,u,m,h;if(e!==window&&e.parentNode&&e!==lt()?(i=e.getBoundingClientRect(),o=i.top,l=i.left,c=i.bottom,u=i.right,m=i.height,h=i.width):(o=0,l=0,c=window.innerHeight,u=window.innerWidth,m=window.innerHeight,h=window.innerWidth),(t||a)&&e!==window&&(n=n||e.parentNode,!mt))do if(n&&n.getBoundingClientRect&&(k(n,"transform")!=="none"||a&&k(n,"position")!=="static")){var v=n.getBoundingClientRect();o-=v.top+parseInt(k(n,"border-top-width")),l-=v.left+parseInt(k(n,"border-left-width")),c=o+i.height,u=l+i.width;break}while(n=n.parentNode);if(s&&e!==window){var y=Nt(n||e),$=y&&y.a,L=y&&y.d;y&&(o/=L,l/=$,h/=$,m/=L,c=o+m,u=l+h)}return{top:o,left:l,bottom:c,right:u,width:h,height:m}}}function as(e,t,a){for(var s=$t(e,!0),n=H(e)[t];s;){var i=H(s)[a],o=void 0;if(o=n>=i,!o)return s;if(s===lt())break;s=$t(s,!1)}return!1}function Vt(e,t,a,s){for(var n=0,i=0,o=e.children;i<o.length;){if(o[i].style.display!=="none"&&o[i]!==T.ghost&&(s||o[i]!==T.dragged)&&nt(o[i],a.draggable,e,!1)){if(n===t)return o[i];n++}i++}return null}function Pa(e,t){for(var a=e.lastElementChild;a&&(a===T.ghost||k(a,"display")==="none"||t&&!xe(a,t));)a=a.previousElementSibling;return a||null}function tt(e,t){var a=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==T.clone&&(!t||xe(e,t))&&a++;return a}function ss(e){var t=0,a=0,s=lt();if(e)do{var n=Nt(e),i=n.a,o=n.d;t+=e.scrollLeft*i,a+=e.scrollTop*o}while(e!==s&&(e=e.parentNode));return[t,a]}function pi(e,t){for(var a in e)if(e.hasOwnProperty(a)){for(var s in t)if(t.hasOwnProperty(s)&&t[s]===e[a][s])return Number(a)}return-1}function $t(e,t){if(!e||!e.getBoundingClientRect)return lt();var a=e,s=!1;do if(a.clientWidth<a.scrollWidth||a.clientHeight<a.scrollHeight){var n=k(a);if(a.clientWidth<a.scrollWidth&&(n.overflowX=="auto"||n.overflowX=="scroll")||a.clientHeight<a.scrollHeight&&(n.overflowY=="auto"||n.overflowY=="scroll")){if(!a.getBoundingClientRect||a===document.body)return lt();if(s||t)return a;s=!0}}while(a=a.parentNode);return lt()}function hi(e,t){if(e&&t)for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);return e}function Ge(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var ne;function Os(e,t){return function(){if(!ne){var a=arguments,s=this;a.length===1?e.call(s,a[0]):e.apply(s,a),ne=setTimeout(function(){ne=void 0},t)}}}function fi(){clearTimeout(ne),ne=void 0}function Hs(e,t,a){e.scrollLeft+=t,e.scrollTop+=a}function Ns(e){var t=window.Polymer,a=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):a?a(e).clone(!0)[0]:e.cloneNode(!0)}function Rs(e,t,a){var s={};return Array.from(e.children).forEach(function(n){var i,o,l,c;if(!(!nt(n,t.draggable,e,!1)||n.animated||n===a)){var u=H(n);s.left=Math.min((i=s.left)!==null&&i!==void 0?i:1/0,u.left),s.top=Math.min((o=s.top)!==null&&o!==void 0?o:1/0,u.top),s.right=Math.max((l=s.right)!==null&&l!==void 0?l:-1/0,u.right),s.bottom=Math.max((c=s.bottom)!==null&&c!==void 0?c:-1/0,u.bottom)}}),s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}var X="Sortable"+new Date().getTime();function mi(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var s=[].slice.call(this.el.children);s.forEach(function(n){if(!(k(n,"display")==="none"||n===T.ghost)){e.push({target:n,rect:H(n)});var i=ct({},e[e.length-1].rect);if(n.thisAnimationDuration){var o=Nt(n,!0);o&&(i.top-=o.f,i.left-=o.e)}n.fromRect=i}})}},addAnimationState:function(s){e.push(s)},removeAnimationState:function(s){e.splice(pi(e,{target:s}),1)},animateAll:function(s){var n=this;if(!this.options.animation){clearTimeout(t),typeof s=="function"&&s();return}var i=!1,o=0;e.forEach(function(l){var c=0,u=l.target,m=u.fromRect,h=H(u),v=u.prevFromRect,y=u.prevToRect,$=l.rect,L=Nt(u,!0);L&&(h.top-=L.f,h.left-=L.e),u.toRect=h,u.thisAnimationDuration&&Ge(v,h)&&!Ge(m,h)&&($.top-h.top)/($.left-h.left)===(m.top-h.top)/(m.left-h.left)&&(c=gi($,v,y,n.options)),Ge(h,m)||(u.prevFromRect=m,u.prevToRect=h,c||(c=n.options.animation),n.animate(u,$,h,c)),c&&(i=!0,o=Math.max(o,c),clearTimeout(u.animationResetTimer),u.animationResetTimer=setTimeout(function(){u.animationTime=0,u.prevFromRect=null,u.fromRect=null,u.prevToRect=null,u.thisAnimationDuration=null},c),u.thisAnimationDuration=c)}),clearTimeout(t),i?t=setTimeout(function(){typeof s=="function"&&s()},o):typeof s=="function"&&s(),e=[]},animate:function(s,n,i,o){if(o){k(s,"transition",""),k(s,"transform","");var l=Nt(this.el),c=l&&l.a,u=l&&l.d,m=(n.left-i.left)/(c||1),h=(n.top-i.top)/(u||1);s.animatingX=!!m,s.animatingY=!!h,k(s,"transform","translate3d("+m+"px,"+h+"px,0)"),this.forRepaintDummy=vi(s),k(s,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),k(s,"transform","translate3d(0,0,0)"),typeof s.animated=="number"&&clearTimeout(s.animated),s.animated=setTimeout(function(){k(s,"transition",""),k(s,"transform",""),s.animated=!1,s.animatingX=!1,s.animatingY=!1},o)}}}}function vi(e){return e.offsetWidth}function gi(e,t,a,s){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-a.top,2)+Math.pow(t.left-a.left,2))*s.animation}var Dt=[],Je={initializeByDefault:!0},fe={mount:function(t){for(var a in Je)Je.hasOwnProperty(a)&&!(a in t)&&(t[a]=Je[a]);Dt.forEach(function(s){if(s.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),Dt.push(t)},pluginEvent:function(t,a,s){var n=this;this.eventCanceled=!1,s.cancel=function(){n.eventCanceled=!0};var i=t+"Global";Dt.forEach(function(o){a[o.pluginName]&&(a[o.pluginName][i]&&a[o.pluginName][i](ct({sortable:a},s)),a.options[o.pluginName]&&a[o.pluginName][t]&&a[o.pluginName][t](ct({sortable:a},s)))})},initializePlugins:function(t,a,s,n){Dt.forEach(function(l){var c=l.pluginName;if(!(!t.options[c]&&!l.initializeByDefault)){var u=new l(t,a,t.options);u.sortable=t,u.options=t.options,t[c]=u,ft(s,u.defaults)}});for(var i in t.options)if(t.options.hasOwnProperty(i)){var o=this.modifyOption(t,i,t.options[i]);typeof o<"u"&&(t.options[i]=o)}},getEventProperties:function(t,a){var s={};return Dt.forEach(function(n){typeof n.eventProperties=="function"&&ft(s,n.eventProperties.call(a[n.pluginName],t))}),s},modifyOption:function(t,a,s){var n;return Dt.forEach(function(i){t[i.pluginName]&&i.optionListeners&&typeof i.optionListeners[a]=="function"&&(n=i.optionListeners[a].call(t[i.pluginName],s))}),n}};function bi(e){var t=e.sortable,a=e.rootEl,s=e.name,n=e.targetEl,i=e.cloneEl,o=e.toEl,l=e.fromEl,c=e.oldIndex,u=e.newIndex,m=e.oldDraggableIndex,h=e.newDraggableIndex,v=e.originalEvent,y=e.putSortable,$=e.extraEventProperties;if(t=t||a&&a[X],!!t){var L,q=t.options,I="on"+s.charAt(0).toUpperCase()+s.substr(1);window.CustomEvent&&!mt&&!he?L=new CustomEvent(s,{bubbles:!0,cancelable:!0}):(L=document.createEvent("Event"),L.initEvent(s,!0,!0)),L.to=o||a,L.from=l||a,L.item=n||a,L.clone=i,L.oldIndex=c,L.newIndex=u,L.oldDraggableIndex=m,L.newDraggableIndex=h,L.originalEvent=v,L.pullMode=y?y.lastPutMode:void 0;var E=ct(ct({},$),fe.getEventProperties(s,t));for(var N in E)L[N]=E[N];a&&a.dispatchEvent(L),q[I]&&q[I].call(t,L)}}var yi=["evt"],U=function(t,a){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=s.evt,i=oi(s,yi);fe.pluginEvent.bind(T)(t,a,ct({dragEl:b,parentEl:C,ghostEl:M,rootEl:P,nextEl:xt,lastDownEl:Te,cloneEl:D,cloneHidden:yt,dragStarted:Zt,putSortable:V,activeSortable:T.active,originalEvent:n,oldIndex:Ht,oldDraggableIndex:ie,newIndex:K,newDraggableIndex:bt,hideGhostForTarget:Fs,unhideGhostForTarget:Bs,cloneNowHidden:function(){yt=!0},cloneNowShown:function(){yt=!1},dispatchSortableEvent:function(l){F({sortable:a,name:l,originalEvent:n})}},i))};function F(e){bi(ct({putSortable:V,cloneEl:D,targetEl:b,rootEl:P,oldIndex:Ht,oldDraggableIndex:ie,newIndex:K,newDraggableIndex:bt},e))}var b,C,M,P,xt,Te,D,yt,Ht,K,ie,bt,ye,V,qt=!1,_e=!1,Ae=[],Mt,st,Ke,Qe,ns,is,Zt,Ct,re,oe=!1,we=!1,Ee,Y,Ze=[],ha=!1,Pe=[],Ve=typeof document<"u",$e=Aa,rs=he||mt?"cssFloat":"float",wi=Ve&&!Cs&&!Aa&&"draggable"in document.createElement("div"),Vs=(function(){if(Ve){if(mt)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}})(),Ys=function(t,a){var s=k(t),n=parseInt(s.width)-parseInt(s.paddingLeft)-parseInt(s.paddingRight)-parseInt(s.borderLeftWidth)-parseInt(s.borderRightWidth),i=Vt(t,0,a),o=Vt(t,1,a),l=i&&k(i),c=o&&k(o),u=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+H(i).width,m=c&&parseInt(c.marginLeft)+parseInt(c.marginRight)+H(o).width;if(s.display==="flex")return s.flexDirection==="column"||s.flexDirection==="column-reverse"?"vertical":"horizontal";if(s.display==="grid")return s.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&l.float&&l.float!=="none"){var h=l.float==="left"?"left":"right";return o&&(c.clear==="both"||c.clear===h)?"vertical":"horizontal"}return i&&(l.display==="block"||l.display==="flex"||l.display==="table"||l.display==="grid"||u>=n&&s[rs]==="none"||o&&s[rs]==="none"&&u+m>n)?"vertical":"horizontal"},$i=function(t,a,s){var n=s?t.left:t.top,i=s?t.right:t.bottom,o=s?t.width:t.height,l=s?a.left:a.top,c=s?a.right:a.bottom,u=s?a.width:a.height;return n===l||i===c||n+o/2===l+u/2},Si=function(t,a){var s;return Ae.some(function(n){var i=n[X].options.emptyInsertThreshold;if(!(!i||Pa(n))){var o=H(n),l=t>=o.left-i&&t<=o.right+i,c=a>=o.top-i&&a<=o.bottom+i;if(l&&c)return s=n}}),s},js=function(t){function a(i,o){return function(l,c,u,m){var h=l.options.group.name&&c.options.group.name&&l.options.group.name===c.options.group.name;if(i==null&&(o||h))return!0;if(i==null||i===!1)return!1;if(o&&i==="clone")return i;if(typeof i=="function")return a(i(l,c,u,m),o)(l,c,u,m);var v=(o?l:c).options.group.name;return i===!0||typeof i=="string"&&i===v||i.join&&i.indexOf(v)>-1}}var s={},n=t.group;(!n||pa(n)!="object")&&(n={name:n}),s.name=n.name,s.checkPull=a(n.pull,!0),s.checkPut=a(n.put),s.revertClone=n.revertClone,t.group=s},Fs=function(){!Vs&&M&&k(M,"display","none")},Bs=function(){!Vs&&M&&k(M,"display","")};Ve&&!Cs&&document.addEventListener("click",function(e){if(_e)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),_e=!1,!1},!0);var Lt=function(t){if(b){t=t.touches?t.touches[0]:t;var a=Si(t.clientX,t.clientY);if(a){var s={};for(var n in t)t.hasOwnProperty(n)&&(s[n]=t[n]);s.target=s.rootEl=a,s.preventDefault=void 0,s.stopPropagation=void 0,a[X]._onDragOver(s)}}},ki=function(t){b&&b.parentNode[X]._isOutsideThisEl(t.target)};function T(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=ft({},t),e[X]=this;var a={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Ys(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(o,l){o.setData("Text",l.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:T.supportPointer!==!1&&"PointerEvent"in window&&(!se||Aa),emptyInsertThreshold:5};fe.initializePlugins(this,e,a);for(var s in a)!(s in t)&&(t[s]=a[s]);js(t);for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));this.nativeDraggable=t.forceFallback?!1:wi,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?A(e,"pointerdown",this._onTapStart):(A(e,"mousedown",this._onTapStart),A(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(A(e,"dragover",this),A(e,"dragenter",this)),Ae.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),ft(this,mi())}T.prototype={constructor:T,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(Ct=null)},_getDirection:function(t,a){return typeof this.options.direction=="function"?this.options.direction.call(this,t,a,b):this.options.direction},_onTapStart:function(t){if(t.cancelable){var a=this,s=this.el,n=this.options,i=n.preventOnFilter,o=t.type,l=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,c=(l||t).target,u=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||c,m=n.filter;if(Pi(s),!b&&!(/mousedown|pointerdown/.test(o)&&t.button!==0||n.disabled)&&!u.isContentEditable&&!(!this.nativeDraggable&&se&&c&&c.tagName.toUpperCase()==="SELECT")&&(c=nt(c,n.draggable,s,!1),!(c&&c.animated)&&Te!==c)){if(Ht=tt(c),ie=tt(c,n.draggable),typeof m=="function"){if(m.call(this,t,c,this)){F({sortable:a,rootEl:u,name:"filter",targetEl:c,toEl:s,fromEl:s}),U("filter",a,{evt:t}),i&&t.preventDefault();return}}else if(m&&(m=m.split(",").some(function(h){if(h=nt(u,h.trim(),s,!1),h)return F({sortable:a,rootEl:h,name:"filter",targetEl:c,fromEl:s,toEl:s}),U("filter",a,{evt:t}),!0}),m)){i&&t.preventDefault();return}n.handle&&!nt(u,n.handle,s,!1)||this._prepareDragStart(t,l,c)}}},_prepareDragStart:function(t,a,s){var n=this,i=n.el,o=n.options,l=i.ownerDocument,c;if(s&&!b&&s.parentNode===i){var u=H(s);if(P=i,b=s,C=b.parentNode,xt=b.nextSibling,Te=s,ye=o.group,T.dragged=b,Mt={target:b,clientX:(a||t).clientX,clientY:(a||t).clientY},ns=Mt.clientX-u.left,is=Mt.clientY-u.top,this._lastX=(a||t).clientX,this._lastY=(a||t).clientY,b.style["will-change"]="all",c=function(){if(U("delayEnded",n,{evt:t}),T.eventCanceled){n._onDrop();return}n._disableDelayedDragEvents(),!ts&&n.nativeDraggable&&(b.draggable=!0),n._triggerDragStart(t,a),F({sortable:n,name:"choose",originalEvent:t}),J(b,o.chosenClass,!0)},o.ignore.split(",").forEach(function(m){Is(b,m.trim(),ta)}),A(l,"dragover",Lt),A(l,"mousemove",Lt),A(l,"touchmove",Lt),o.supportPointer?(A(l,"pointerup",n._onDrop),!this.nativeDraggable&&A(l,"pointercancel",n._onDrop)):(A(l,"mouseup",n._onDrop),A(l,"touchend",n._onDrop),A(l,"touchcancel",n._onDrop)),ts&&this.nativeDraggable&&(this.options.touchStartThreshold=4,b.draggable=!0),U("delayStart",this,{evt:t}),o.delay&&(!o.delayOnTouchOnly||a)&&(!this.nativeDraggable||!(he||mt))){if(T.eventCanceled){this._onDrop();return}o.supportPointer?(A(l,"pointerup",n._disableDelayedDrag),A(l,"pointercancel",n._disableDelayedDrag)):(A(l,"mouseup",n._disableDelayedDrag),A(l,"touchend",n._disableDelayedDrag),A(l,"touchcancel",n._disableDelayedDrag)),A(l,"mousemove",n._delayedDragTouchMoveHandler),A(l,"touchmove",n._delayedDragTouchMoveHandler),o.supportPointer&&A(l,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(c,o.delay)}else c()}},_delayedDragTouchMoveHandler:function(t){var a=t.touches?t.touches[0]:t;Math.max(Math.abs(a.clientX-this._lastX),Math.abs(a.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){b&&ta(b),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;_(t,"mouseup",this._disableDelayedDrag),_(t,"touchend",this._disableDelayedDrag),_(t,"touchcancel",this._disableDelayedDrag),_(t,"pointerup",this._disableDelayedDrag),_(t,"pointercancel",this._disableDelayedDrag),_(t,"mousemove",this._delayedDragTouchMoveHandler),_(t,"touchmove",this._delayedDragTouchMoveHandler),_(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,a){a=a||t.pointerType=="touch"&&t,!this.nativeDraggable||a?this.options.supportPointer?A(document,"pointermove",this._onTouchMove):a?A(document,"touchmove",this._onTouchMove):A(document,"mousemove",this._onTouchMove):(A(b,"dragend",this),A(P,"dragstart",this._onDragStart));try{document.selection?Me(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,a){if(qt=!1,P&&b){U("dragStarted",this,{evt:a}),this.nativeDraggable&&A(document,"dragover",ki);var s=this.options;!t&&J(b,s.dragClass,!1),J(b,s.ghostClass,!0),T.active=this,t&&this._appendGhost(),F({sortable:this,name:"start",originalEvent:a})}else this._nulling()},_emulateDragOver:function(){if(st){this._lastX=st.clientX,this._lastY=st.clientY,Fs();for(var t=document.elementFromPoint(st.clientX,st.clientY),a=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(st.clientX,st.clientY),t!==a);)a=t;if(b.parentNode[X]._isOutsideThisEl(t),a)do{if(a[X]){var s=void 0;if(s=a[X]._onDragOver({clientX:st.clientX,clientY:st.clientY,target:t,rootEl:a}),s&&!this.options.dragoverBubble)break}t=a}while(a=qs(a));Bs()}},_onTouchMove:function(t){if(Mt){var a=this.options,s=a.fallbackTolerance,n=a.fallbackOffset,i=t.touches?t.touches[0]:t,o=M&&Nt(M,!0),l=M&&o&&o.a,c=M&&o&&o.d,u=$e&&Y&&ss(Y),m=(i.clientX-Mt.clientX+n.x)/(l||1)+(u?u[0]-Ze[0]:0)/(l||1),h=(i.clientY-Mt.clientY+n.y)/(c||1)+(u?u[1]-Ze[1]:0)/(c||1);if(!T.active&&!qt){if(s&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<s)return;this._onDragStart(t,!0)}if(M){o?(o.e+=m-(Ke||0),o.f+=h-(Qe||0)):o={a:1,b:0,c:0,d:1,e:m,f:h};var v="matrix(".concat(o.a,",").concat(o.b,",").concat(o.c,",").concat(o.d,",").concat(o.e,",").concat(o.f,")");k(M,"webkitTransform",v),k(M,"mozTransform",v),k(M,"msTransform",v),k(M,"transform",v),Ke=m,Qe=h,st=i}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!M){var t=this.options.fallbackOnBody?document.body:P,a=H(b,!0,$e,!0,t),s=this.options;if($e){for(Y=t;k(Y,"position")==="static"&&k(Y,"transform")==="none"&&Y!==document;)Y=Y.parentNode;Y!==document.body&&Y!==document.documentElement?(Y===document&&(Y=lt()),a.top+=Y.scrollTop,a.left+=Y.scrollLeft):Y=lt(),Ze=ss(Y)}M=b.cloneNode(!0),J(M,s.ghostClass,!1),J(M,s.fallbackClass,!0),J(M,s.dragClass,!0),k(M,"transition",""),k(M,"transform",""),k(M,"box-sizing","border-box"),k(M,"margin",0),k(M,"top",a.top),k(M,"left",a.left),k(M,"width",a.width),k(M,"height",a.height),k(M,"opacity","0.8"),k(M,"position",$e?"absolute":"fixed"),k(M,"zIndex","100000"),k(M,"pointerEvents","none"),T.ghost=M,t.appendChild(M),k(M,"transform-origin",ns/parseInt(M.style.width)*100+"% "+is/parseInt(M.style.height)*100+"%")}},_onDragStart:function(t,a){var s=this,n=t.dataTransfer,i=s.options;if(U("dragStart",this,{evt:t}),T.eventCanceled){this._onDrop();return}U("setupClone",this),T.eventCanceled||(D=Ns(b),D.removeAttribute("id"),D.draggable=!1,D.style["will-change"]="",this._hideClone(),J(D,this.options.chosenClass,!1),T.clone=D),s.cloneId=Me(function(){U("clone",s),!T.eventCanceled&&(s.options.removeCloneOnHide||P.insertBefore(D,b),s._hideClone(),F({sortable:s,name:"clone"}))}),!a&&J(b,i.dragClass,!0),a?(_e=!0,s._loopId=setInterval(s._emulateDragOver,50)):(_(document,"mouseup",s._onDrop),_(document,"touchend",s._onDrop),_(document,"touchcancel",s._onDrop),n&&(n.effectAllowed="move",i.setData&&i.setData.call(s,n,b)),A(document,"drop",s),k(b,"transform","translateZ(0)")),qt=!0,s._dragStartId=Me(s._dragStarted.bind(s,a,t)),A(document,"selectstart",s),Zt=!0,window.getSelection().removeAllRanges(),se&&k(document.body,"user-select","none")},_onDragOver:function(t){var a=this.el,s=t.target,n,i,o,l=this.options,c=l.group,u=T.active,m=ye===c,h=l.sort,v=V||u,y,$=this,L=!1;if(ha)return;function q(Kt,kn){U(Kt,$,ct({evt:t,isOwner:m,axis:y?"vertical":"horizontal",revert:o,dragRect:n,targetRect:i,canSort:h,fromSortable:v,target:s,completed:E,onMove:function(Wa,Tn){return Se(P,a,b,n,Wa,H(Wa),t,Tn)},changed:N},kn))}function I(){q("dragOverAnimationCapture"),$.captureAnimationState(),$!==v&&v.captureAnimationState()}function E(Kt){return q("dragOverCompleted",{insertion:Kt}),Kt&&(m?u._hideClone():u._showClone($),$!==v&&(J(b,V?V.options.ghostClass:u.options.ghostClass,!1),J(b,l.ghostClass,!0)),V!==$&&$!==T.active?V=$:$===T.active&&V&&(V=null),v===$&&($._ignoreWhileAnimating=s),$.animateAll(function(){q("dragOverAnimationComplete"),$._ignoreWhileAnimating=null}),$!==v&&(v.animateAll(),v._ignoreWhileAnimating=null)),(s===b&&!b.animated||s===a&&!s.animated)&&(Ct=null),!l.dragoverBubble&&!t.rootEl&&s!==document&&(b.parentNode[X]._isOutsideThisEl(t.target),!Kt&&Lt(t)),!l.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),L=!0}function N(){K=tt(b),bt=tt(b,l.draggable),F({sortable:$,name:"change",toEl:a,newIndex:K,newDraggableIndex:bt,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),s=nt(s,l.draggable,a,!0),q("dragOver"),T.eventCanceled)return L;if(b.contains(t.target)||s.animated&&s.animatingX&&s.animatingY||$._ignoreWhileAnimating===s)return E(!1);if(_e=!1,u&&!l.disabled&&(m?h||(o=C!==P):V===this||(this.lastPutMode=ye.checkPull(this,u,b,t))&&c.checkPut(this,u,b,t))){if(y=this._getDirection(t,s)==="vertical",n=H(b),q("dragOverValid"),T.eventCanceled)return L;if(o)return C=P,I(),this._hideClone(),q("revert"),T.eventCanceled||(xt?P.insertBefore(b,xt):P.appendChild(b)),E(!0);var j=Pa(a,l.draggable);if(!j||Li(t,y,this)&&!j.animated){if(j===b)return E(!1);if(j&&a===t.target&&(s=j),s&&(i=H(s)),Se(P,a,b,n,s,i,t,!!s)!==!1)return I(),j&&j.nextSibling?a.insertBefore(b,j.nextSibling):a.appendChild(b),C=a,N(),E(!0)}else if(j&&Mi(t,y,this)){var kt=Vt(a,0,l,!0);if(kt===b)return E(!1);if(s=kt,i=H(s),Se(P,a,b,n,s,i,t,!1)!==!1)return I(),a.insertBefore(b,kt),C=a,N(),E(!0)}else if(s.parentNode===a){i=H(s);var rt=0,Tt,Xt=b.parentNode!==a,G=!$i(b.animated&&b.toRect||n,s.animated&&s.toRect||i,y),Wt=y?"top":"left",vt=as(s,"top","top")||as(b,"top","top"),Gt=vt?vt.scrollTop:void 0;Ct!==s&&(Tt=i[Wt],oe=!1,we=!G&&l.invertSwap||Xt),rt=xi(t,s,i,y,G?1:l.swapThreshold,l.invertedSwapThreshold==null?l.swapThreshold:l.invertedSwapThreshold,we,Ct===s);var ut;if(rt!==0){var Et=tt(b);do Et-=rt,ut=C.children[Et];while(ut&&(k(ut,"display")==="none"||ut===M))}if(rt===0||ut===s)return E(!1);Ct=s,re=rt;var Jt=s.nextElementSibling,gt=!1;gt=rt===1;var ge=Se(P,a,b,n,s,i,t,gt);if(ge!==!1)return(ge===1||ge===-1)&&(gt=ge===1),ha=!0,setTimeout(Ei,30),I(),gt&&!Jt?a.appendChild(b):s.parentNode.insertBefore(b,gt?Jt:s),vt&&Hs(vt,0,Gt-vt.scrollTop),C=b.parentNode,Tt!==void 0&&!we&&(Ee=Math.abs(Tt-H(s)[Wt])),N(),E(!0)}if(a.contains(b))return E(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){_(document,"mousemove",this._onTouchMove),_(document,"touchmove",this._onTouchMove),_(document,"pointermove",this._onTouchMove),_(document,"dragover",Lt),_(document,"mousemove",Lt),_(document,"touchmove",Lt)},_offUpEvents:function(){var t=this.el.ownerDocument;_(t,"mouseup",this._onDrop),_(t,"touchend",this._onDrop),_(t,"pointerup",this._onDrop),_(t,"pointercancel",this._onDrop),_(t,"touchcancel",this._onDrop),_(document,"selectstart",this)},_onDrop:function(t){var a=this.el,s=this.options;if(K=tt(b),bt=tt(b,s.draggable),U("drop",this,{evt:t}),C=b&&b.parentNode,K=tt(b),bt=tt(b,s.draggable),T.eventCanceled){this._nulling();return}qt=!1,we=!1,oe=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),fa(this.cloneId),fa(this._dragStartId),this.nativeDraggable&&(_(document,"drop",this),_(a,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),se&&k(document.body,"user-select",""),k(b,"transform",""),t&&(Zt&&(t.cancelable&&t.preventDefault(),!s.dropBubble&&t.stopPropagation()),M&&M.parentNode&&M.parentNode.removeChild(M),(P===C||V&&V.lastPutMode!=="clone")&&D&&D.parentNode&&D.parentNode.removeChild(D),b&&(this.nativeDraggable&&_(b,"dragend",this),ta(b),b.style["will-change"]="",Zt&&!qt&&J(b,V?V.options.ghostClass:this.options.ghostClass,!1),J(b,this.options.chosenClass,!1),F({sortable:this,name:"unchoose",toEl:C,newIndex:null,newDraggableIndex:null,originalEvent:t}),P!==C?(K>=0&&(F({rootEl:C,name:"add",toEl:C,fromEl:P,originalEvent:t}),F({sortable:this,name:"remove",toEl:C,originalEvent:t}),F({rootEl:C,name:"sort",toEl:C,fromEl:P,originalEvent:t}),F({sortable:this,name:"sort",toEl:C,originalEvent:t})),V&&V.save()):K!==Ht&&K>=0&&(F({sortable:this,name:"update",toEl:C,originalEvent:t}),F({sortable:this,name:"sort",toEl:C,originalEvent:t})),T.active&&((K==null||K===-1)&&(K=Ht,bt=ie),F({sortable:this,name:"end",toEl:C,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){U("nulling",this),P=b=C=M=xt=D=Te=yt=Mt=st=Zt=K=bt=Ht=ie=Ct=re=V=ye=T.dragged=T.ghost=T.clone=T.active=null;var t=this.el;Pe.forEach(function(a){t.contains(a)&&(a.checked=!0)}),Pe.length=Ke=Qe=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":b&&(this._onDragOver(t),Ti(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],a,s=this.el.children,n=0,i=s.length,o=this.options;n<i;n++)a=s[n],nt(a,o.draggable,this.el,!1)&&t.push(a.getAttribute(o.dataIdAttr)||Ai(a));return t},sort:function(t,a){var s={},n=this.el;this.toArray().forEach(function(i,o){var l=n.children[o];nt(l,this.options.draggable,n,!1)&&(s[i]=l)},this),a&&this.captureAnimationState(),t.forEach(function(i){s[i]&&(n.removeChild(s[i]),n.appendChild(s[i]))}),a&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,a){return nt(t,a||this.options.draggable,this.el,!1)},option:function(t,a){var s=this.options;if(a===void 0)return s[t];var n=fe.modifyOption(this,t,a);typeof n<"u"?s[t]=n:s[t]=a,t==="group"&&js(s)},destroy:function(){U("destroy",this);var t=this.el;t[X]=null,_(t,"mousedown",this._onTapStart),_(t,"touchstart",this._onTapStart),_(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(_(t,"dragover",this),_(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(a){a.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Ae.splice(Ae.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!yt){if(U("hideClone",this),T.eventCanceled)return;k(D,"display","none"),this.options.removeCloneOnHide&&D.parentNode&&D.parentNode.removeChild(D),yt=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(yt){if(U("showClone",this),T.eventCanceled)return;b.parentNode==P&&!this.options.group.revertClone?P.insertBefore(D,b):xt?P.insertBefore(D,xt):P.appendChild(D),this.options.group.revertClone&&this.animate(b,D),k(D,"display",""),yt=!1}}};function Ti(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function Se(e,t,a,s,n,i,o,l){var c,u=e[X],m=u.options.onMove,h;return window.CustomEvent&&!mt&&!he?c=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(c=document.createEvent("Event"),c.initEvent("move",!0,!0)),c.to=t,c.from=e,c.dragged=a,c.draggedRect=s,c.related=n||t,c.relatedRect=i||H(t),c.willInsertAfter=l,c.originalEvent=o,e.dispatchEvent(c),m&&(h=m.call(u,c,o)),h}function ta(e){e.draggable=!1}function Ei(){ha=!1}function Mi(e,t,a){var s=H(Vt(a.el,0,a.options,!0)),n=Rs(a.el,a.options,M),i=10;return t?e.clientX<n.left-i||e.clientY<s.top&&e.clientX<s.right:e.clientY<n.top-i||e.clientY<s.bottom&&e.clientX<s.left}function Li(e,t,a){var s=H(Pa(a.el,a.options.draggable)),n=Rs(a.el,a.options,M),i=10;return t?e.clientX>n.right+i||e.clientY>s.bottom&&e.clientX>s.left:e.clientY>n.bottom+i||e.clientX>s.right&&e.clientY>s.top}function xi(e,t,a,s,n,i,o,l){var c=s?e.clientY:e.clientX,u=s?a.height:a.width,m=s?a.top:a.left,h=s?a.bottom:a.right,v=!1;if(!o){if(l&&Ee<u*n){if(!oe&&(re===1?c>m+u*i/2:c<h-u*i/2)&&(oe=!0),oe)v=!0;else if(re===1?c<m+Ee:c>h-Ee)return-re}else if(c>m+u*(1-n)/2&&c<h-u*(1-n)/2)return _i(t)}return v=v||o,v&&(c<m+u*i/2||c>h-u*i/2)?c>m+u/2?1:-1:0}function _i(e){return tt(b)<tt(e)?1:-1}function Ai(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,a=t.length,s=0;a--;)s+=t.charCodeAt(a);return s.toString(36)}function Pi(e){Pe.length=0;for(var t=e.getElementsByTagName("input"),a=t.length;a--;){var s=t[a];s.checked&&Pe.push(s)}}function Me(e){return setTimeout(e,0)}function fa(e){return clearTimeout(e)}Ve&&A(document,"touchmove",function(e){(T.active||qt)&&e.cancelable&&e.preventDefault()});T.utils={on:A,off:_,css:k,find:Is,is:function(t,a){return!!nt(t,a,t,!1)},extend:hi,throttle:Os,closest:nt,toggleClass:J,clone:Ns,index:tt,nextTick:Me,cancelNextTick:fa,detectDirection:Ys,getChild:Vt,expando:X};T.get=function(e){return e[X]};T.mount=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];t[0].constructor===Array&&(t=t[0]),t.forEach(function(s){if(!s.prototype||!s.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));s.utils&&(T.utils=ct(ct({},T.utils),s.utils)),fe.mount(s)})};T.create=function(e,t){return new T(e,t)};T.version=ui;var O=[],te,ma,va=!1,ea,aa,De,ee;function Di(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(a){var s=a.originalEvent;this.sortable.nativeDraggable?A(document,"dragover",this._handleAutoScroll):this.options.supportPointer?A(document,"pointermove",this._handleFallbackAutoScroll):s.touches?A(document,"touchmove",this._handleFallbackAutoScroll):A(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(a){var s=a.originalEvent;!this.options.dragOverBubble&&!s.rootEl&&this._handleAutoScroll(s)},drop:function(){this.sortable.nativeDraggable?_(document,"dragover",this._handleAutoScroll):(_(document,"pointermove",this._handleFallbackAutoScroll),_(document,"touchmove",this._handleFallbackAutoScroll),_(document,"mousemove",this._handleFallbackAutoScroll)),os(),Le(),fi()},nulling:function(){De=ma=te=va=ee=ea=aa=null,O.length=0},_handleFallbackAutoScroll:function(a){this._handleAutoScroll(a,!0)},_handleAutoScroll:function(a,s){var n=this,i=(a.touches?a.touches[0]:a).clientX,o=(a.touches?a.touches[0]:a).clientY,l=document.elementFromPoint(i,o);if(De=a,s||this.options.forceAutoScrollFallback||he||mt||se){sa(a,this.options,l,s);var c=$t(l,!0);va&&(!ee||i!==ea||o!==aa)&&(ee&&os(),ee=setInterval(function(){var u=$t(document.elementFromPoint(i,o),!0);u!==c&&(c=u,Le()),sa(a,n.options,u,s)},10),ea=i,aa=o)}else{if(!this.options.bubbleScroll||$t(l,!0)===lt()){Le();return}sa(a,this.options,$t(l,!1),!1)}}},ft(e,{pluginName:"scroll",initializeByDefault:!0})}function Le(){O.forEach(function(e){clearInterval(e.pid)}),O=[]}function os(){clearInterval(ee)}var sa=Os(function(e,t,a,s){if(t.scroll){var n=(e.touches?e.touches[0]:e).clientX,i=(e.touches?e.touches[0]:e).clientY,o=t.scrollSensitivity,l=t.scrollSpeed,c=lt(),u=!1,m;ma!==a&&(ma=a,Le(),te=t.scroll,m=t.scrollFn,te===!0&&(te=$t(a,!0)));var h=0,v=te;do{var y=v,$=H(y),L=$.top,q=$.bottom,I=$.left,E=$.right,N=$.width,j=$.height,kt=void 0,rt=void 0,Tt=y.scrollWidth,Xt=y.scrollHeight,G=k(y),Wt=y.scrollLeft,vt=y.scrollTop;y===c?(kt=N<Tt&&(G.overflowX==="auto"||G.overflowX==="scroll"||G.overflowX==="visible"),rt=j<Xt&&(G.overflowY==="auto"||G.overflowY==="scroll"||G.overflowY==="visible")):(kt=N<Tt&&(G.overflowX==="auto"||G.overflowX==="scroll"),rt=j<Xt&&(G.overflowY==="auto"||G.overflowY==="scroll"));var Gt=kt&&(Math.abs(E-n)<=o&&Wt+N<Tt)-(Math.abs(I-n)<=o&&!!Wt),ut=rt&&(Math.abs(q-i)<=o&&vt+j<Xt)-(Math.abs(L-i)<=o&&!!vt);if(!O[h])for(var Et=0;Et<=h;Et++)O[Et]||(O[Et]={});(O[h].vx!=Gt||O[h].vy!=ut||O[h].el!==y)&&(O[h].el=y,O[h].vx=Gt,O[h].vy=ut,clearInterval(O[h].pid),(Gt!=0||ut!=0)&&(u=!0,O[h].pid=setInterval((function(){s&&this.layer===0&&T.active._onTouchMove(De);var Jt=O[this.layer].vy?O[this.layer].vy*l:0,gt=O[this.layer].vx?O[this.layer].vx*l:0;typeof m=="function"&&m.call(T.dragged.parentNode[X],gt,Jt,e,De,O[this.layer].el)!=="continue"||Hs(O[this.layer].el,gt,Jt)}).bind({layer:h}),24))),h++}while(t.bubbleScroll&&v!==c&&(v=$t(v,!1)));va=u}},30),Us=function(t){var a=t.originalEvent,s=t.putSortable,n=t.dragEl,i=t.activeSortable,o=t.dispatchSortableEvent,l=t.hideGhostForTarget,c=t.unhideGhostForTarget;if(a){var u=s||i;l();var m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,h=document.elementFromPoint(m.clientX,m.clientY);c(),u&&!u.el.contains(h)&&(o("spill"),this.onSpill({dragEl:n,putSortable:s}))}};function Da(){}Da.prototype={startIndex:null,dragStart:function(t){var a=t.oldDraggableIndex;this.startIndex=a},onSpill:function(t){var a=t.dragEl,s=t.putSortable;this.sortable.captureAnimationState(),s&&s.captureAnimationState();var n=Vt(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(a,n):this.sortable.el.appendChild(a),this.sortable.animateAll(),s&&s.animateAll()},drop:Us};ft(Da,{pluginName:"revertOnSpill"});function Ca(){}Ca.prototype={onSpill:function(t){var a=t.dragEl,s=t.putSortable,n=s||this.sortable;n.captureAnimationState(),a.parentNode&&a.parentNode.removeChild(a),n.animateAll()},drop:Us};ft(Ca,{pluginName:"removeOnSpill"});T.mount(new Di);T.mount(Ca,Da);const Xs=[32,64,125,250,500,1e3,2e3,4e3,8e3,16e3],ga={flat:{name:"Ровно",gains:[0,0,0,0,0,0,0,0,0,0]},rock:{name:"Рок",gains:[5,4,2,-1,-2,0,2,3,4,5]},pop:{name:"Поп",gains:[-1,0,2,4,4,2,0,-1,-2,-3]},jazz:{name:"Джаз",gains:[4,3,1,2,-1,-1,0,2,3,4]},bass:{name:"Бас",gains:[8,7,5,2,0,-1,-2,-3,-4,-5]},vocal:{name:"Вокал",gains:[-3,-2,0,3,5,5,3,1,0,-1]},electronic:{name:"Электроника",gains:[5,4,1,0,-2,2,1,2,5,6]}},ls="rustream.volume",cs="rustream.eq",ds="rustream.mode",na="rustream.playback.queue",us="rustream.playback.position";function ps(e,t){try{return JSON.parse(localStorage.getItem(e))??t}catch{return t}}class Ci extends EventTarget{constructor(){super(),this.audio=new Audio,this.audio.preload="auto",this.audio.crossOrigin="anonymous",this.queue=[],this.index=-1,this.shuffle=!1,this.repeat="off",this.track=null,this.playId=null,this.scrobbled=!1,this.liveMode=!1,this.mode=ps(ds,{shuffle:!1,repeat:"off"}),this.shuffle=!!this.mode.shuffle,this.repeat=this.mode.repeat||"off",this.volume=Number(localStorage.getItem(ls)??80),this.audio.volume=Math.min(1,Math.max(0,this.volume/100)),this.eqState=ps(cs,{enabled:!0,preset:"flat",gains:[...ga.flat.gains]}),this.audioContext=null,this.filters=[],this.sourceNode=null,this._lastPositionWrite=0,this._restoredPause=!1,this._bindAudio(),window.addEventListener("pagehide",()=>this._storePosition(!0))}_bindAudio(){this.audio.addEventListener("timeupdate",()=>{this._maybeScrobble(),this._storePosition(),this._emit("time")}),this.audio.addEventListener("durationchange",()=>this._emit("time")),this.audio.addEventListener("progress",()=>this._emit("buffer")),this.audio.addEventListener("loadedmetadata",()=>this._emit("time")),this.audio.addEventListener("play",()=>{!this.playId&&this.track&&this._restoredPause&&(this._restoredPause=!1,this._beginPlay(this.track)),this._storePosition(!0),this._emit("state")}),this.audio.addEventListener("pause",()=>{this._storePosition(!0),this._emit("state")}),this.audio.addEventListener("volumechange",()=>this._emit("volume")),this.audio.addEventListener("ended",()=>this._onEnded()),this.audio.addEventListener("waiting",()=>this._emit("state")),this.audio.addEventListener("playing",()=>this._emit("state")),this.audio.addEventListener("error",()=>{if(!this.track)return;const a=this.track.source==="ytm"||String(this.track.id).startsWith("ytm-")?`YouTube не отдал поток для «${this.track.title}». Проверьте, что трек доступен, и обновите cookies в профиле.`:`Не удалось воспроизвести «${this.track.title}». Файл повреждён или недоступен.`;this.dispatchEvent(new CustomEvent("error",{detail:a}))})}_emit(t){this.dispatchEvent(new CustomEvent(t))}_initAudioGraph(){if(this.audioContext)return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.audioContext=new t,this.sourceNode=this.audioContext.createMediaElementSource(this.audio),this.filters=Xs.map(s=>{const n=this.audioContext.createBiquadFilter();return n.type="peaking",n.frequency.value=s,n.Q.value=1.1,n.gain.value=0,n});let a=this.sourceNode;for(const s of this.filters)a.connect(s),a=s;a.connect(this.audioContext.destination),this._applyEq()}_ensureRunning(){var t;this._initAudioGraph(),((t=this.audioContext)==null?void 0:t.state)==="suspended"&&this.audioContext.resume().catch(()=>{})}_applyEq(){this.filters.length&&this.filters.forEach((t,a)=>{t.gain.value=this.eqState.enabled&&this.eqState.gains[a]||0})}setEqEnabled(t){this.eqState.enabled=t,this._persistEq(),this._applyEq(),this._emit("eq")}setEqGain(t,a){this.eqState.gains[t]=Number(a),this.eqState.preset="custom",this._persistEq(),this._applyEq(),this._emit("eq")}applyEqPreset(t){const a=ga[t];a&&(this.eqState.preset=t,this.eqState.gains=[...a.gains],this._persistEq(),this._applyEq(),this._emit("eq"))}resetEq(){this.applyEqPreset("flat")}_persistEq(){localStorage.setItem(cs,JSON.stringify(this.eqState))}async playTracks(t,a=0,{shuffle:s=!1}={}){t!=null&&t.length&&(this._finalizePlay(!1),this.queue=[...t],s&&(this.shuffle=!0,this._persistMode()),this.index=Math.min(Math.max(0,a),this.queue.length-1),this._storeQueue(),await this._load(this.queue[this.index],!0))}async playAt(t){t<0||t>=this.queue.length||(this.index=t,this._storeQueue(),await this._load(this.queue[t],!0))}async _load(t,a){if(t&&(this._restoredPause=!1,this._finalizePlay(!1),this.track=t,this.audio.src=Xe(t.id),this._beginPlay(t),this._updateMediaSession(t),this.dispatchEvent(new CustomEvent("track",{detail:t})),a)){this._ensureRunning();try{await this.audio.play()}catch{}}}async toggle(){this.track&&(this._ensureRunning(),this.audio.paused?await this.audio.play().catch(()=>{}):this.audio.pause())}pause(){this.audio.pause()}async next(t=!1){if(!this.queue.length)return;if(t&&this.repeat==="one"){this.audio.currentTime=0,await this.audio.play().catch(()=>{});return}let a;if(this.shuffle?a=this.queue.length>1?this._randomIndex():this.index:a=this.index+1,a>=this.queue.length)if(this.repeat==="all")a=0;else{this.audio.pause();return}await this.playAt(a)}async previous(){if(!this.queue.length)return;if(this.audio.currentTime>3){this.audio.currentTime=0;return}const t=this.index>0?this.index-1:this.queue.length-1;await this.playAt(t)}moveInQueue(t,a){if(t===a||t<0||a<0||t>=this.queue.length||a>=this.queue.length)return;const[s]=this.queue.splice(t,1);this.queue.splice(a,0,s),this.index===t?this.index=a:t<this.index&&a>=this.index?this.index--:t>this.index&&a<=this.index&&this.index++,this._storeQueue(),this._emit("queue")}_randomIndex(){if(this.queue.length<=1)return this.index;let t=this.index;for(;t===this.index;)t=Math.floor(Math.random()*this.queue.length);return t}async _onEnded(){if(this._finalizePlay(!0),this.repeat==="one"){this.audio.currentTime=0,this._beginPlay(this.track),await this.audio.play().catch(()=>{});return}if(this.index>=this.queue.length-1&&this.repeat==="off"&&!this.shuffle){this._emit("state"),this._emit("queueend");return}await this.next(!0)}async _beginPlay(t){this.playId=null,this.scrobbled=!1;try{const a=await Vn(t.id);this.playId=(a==null?void 0:a.playId)||null}catch{}}_maybeScrobble(){if(!this.playId||this.scrobbled)return;const t=this.audio.duration;!Number.isFinite(t)||t<30||(this.audio.currentTime>=t/2||this.audio.currentTime>=240)&&(this.scrobbled=!0,Qa(this.playId,Math.round(this.audio.currentTime*1e3),!0).catch(()=>{}))}_finalizePlay(t){if(!this.playId)return;const a=this.playId;this.playId=null,Qa(a,Math.round((this.audio.currentTime||0)*1e3),t).catch(()=>{})}appendTracks(t){t!=null&&t.length&&(this.queue.push(...t),this._storeQueue())}toggleShuffle(){this.shuffle=!this.shuffle,this._persistMode(),this._emit("mode")}cycleRepeat(){const t=["off","all","one"];this.repeat=t[(t.indexOf(this.repeat)+1)%t.length],this._persistMode(),this._emit("mode")}_persistMode(){localStorage.setItem(ds,JSON.stringify({shuffle:this.shuffle,repeat:this.repeat}))}seekTo(t){const a=this.audio.duration;!Number.isFinite(a)||a<=0||(this.audio.currentTime=Math.min(100,Math.max(0,t))/100*a,this._emit("time"))}seekToSeconds(t){const a=this.audio.duration;!Number.isFinite(a)||a<=0||(this.audio.currentTime=Math.min(a,Math.max(0,t)),this._emit("time"))}removeAt(t){t<0||t>=this.queue.length||t===this.index||(this.queue.splice(t,1),t<this.index&&(this.index-=1),this._storeQueue())}seekBy(t){Number.isFinite(this.audio.duration)&&(this.audio.currentTime=Math.min(this.audio.duration,Math.max(0,this.audio.currentTime+t)),this._emit("time"))}setVolume(t){this.volume=Number(t),this.audio.volume=Math.min(1,Math.max(0,this.volume/100)),this.volume>0&&(this.audio.muted=!1),localStorage.setItem(ls,String(this.volume))}toggleMute(){this.audio.muted=!this.audio.muted,this._emit("volume")}get currentTime(){return this.audio.currentTime||0}get duration(){return Number.isFinite(this.audio.duration)?this.audio.duration:0}get paused(){return this.audio.paused}get volumePercent(){return this.audio.muted?0:Math.round(this.audio.volume*100)}get buffered(){const t=this.duration;if(!t)return{end:0,percent:0,ahead:0};const a=this.audio.currentTime;let s=0;for(let n=0;n<this.audio.buffered.length;n+=1)this.audio.buffered.start(n)<=a+.5&&(s=Math.max(s,this.audio.buffered.end(n)));return{end:s,percent:Math.min(100,s/t*100),ahead:Math.max(0,s-a)}}estimatedBufferedBytes(){var a;const t=((a=this.track)==null?void 0:a.bitRate)||0;return t?t*1e3*this.buffered.ahead/8:0}_storeQueue(){try{const t={queue:this.queue,index:this.index,liveMode:!!this.liveMode,updatedAt:Date.now()};localStorage.setItem(na,JSON.stringify(t))}catch{}}setLiveMode(t){this.liveMode=!!t,this._storeQueue()}_storePosition(t=!1){if(!this.track)return;const a=Date.now();if(!(!t&&a-this._lastPositionWrite<2e3)){this._lastPositionWrite=a;try{localStorage.setItem(us,JSON.stringify({trackId:this.track.id,position:this.currentTime||0,paused:this.audio.paused,updatedAt:a}))}catch{}}}snapshotState(){return{queue:this.queue,index:this.index,liveMode:this.liveMode,position:Math.max(0,Math.floor(Number(this.audio.currentTime)||0)),updatedAt:Date.now()}}localUpdatedAt(){try{const t=JSON.parse(localStorage.getItem(na));return Number(t==null?void 0:t.updatedAt)||0}catch{return 0}}applyRemote(t){var s;if(!((s=t==null?void 0:t.queue)!=null&&s.length)||(this.queue=t.queue,this.index=Math.min(Math.max(0,Number(t.index)||0),this.queue.length-1),this.liveMode=!!t.liveMode,this.track=this.queue[this.index],!this.track))return null;this._restoredPause=!0,this.audio.src=Xe(this.track.id),this._updateMediaSession(this.track),this.dispatchEvent(new CustomEvent("track",{detail:this.track}));const a=Number(t.position)||0;if(a>1){const n=()=>{const i=this.audio.duration;(!Number.isFinite(i)||a<i-3)&&(this.audio.currentTime=a,this._emit("time"))};this.audio.readyState>=1?n():this.audio.addEventListener("loadedmetadata",n,{once:!0})}return this._storeQueue(),{track:this.track,liveMode:this.liveMode}}restore(){var s;let t=null;try{t=JSON.parse(localStorage.getItem(na))}catch{t=null}if(!((s=t==null?void 0:t.queue)!=null&&s.length)||Date.now()-(t.updatedAt||0)>1e3*60*60*24*7)return null;let a=null;try{a=JSON.parse(localStorage.getItem(us))}catch{a=null}if(this.queue=t.queue,this.index=Math.min(Math.max(0,Number(t.index)||0),this.queue.length-1),this.liveMode=!!t.liveMode,this.track=this.queue[this.index],!this.track)return null;if(this._restoredPause=!0,this.audio.src=Xe(this.track.id),this._updateMediaSession(this.track),this.dispatchEvent(new CustomEvent("track",{detail:this.track})),(a==null?void 0:a.trackId)===this.track.id&&Number(a.position)>1){const n=()=>{const i=this.audio.duration;Number.isFinite(i)&&a.position<i-3&&(this.audio.currentTime=a.position,this._emit("time"))};this.audio.readyState>=1?n():this.audio.addEventListener("loadedmetadata",n,{once:!0})}return{track:this.track,liveMode:this.liveMode}}clearRestored(){this._restoredPause=!1}_updateMediaSession(t){"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:t.title||"",artist:t.artist||"",album:t.album||"",artwork:t.coverArt?[{src:wt(t.coverArt,512),sizes:"512x512",type:"image/jpeg"}]:[]}),navigator.mediaSession.setActionHandler("play",()=>this.toggle()),navigator.mediaSession.setActionHandler("pause",()=>this.toggle()),navigator.mediaSession.setActionHandler("previoustrack",()=>this.previous()),navigator.mediaSession.setActionHandler("nexttrack",()=>this.next()))}}function pt(e){if(!Number.isFinite(e)||e<0)return"0:00";const t=Math.floor(e/60),a=Math.floor(e%60);return`${t}:${String(a).padStart(2,"0")}`}function Ws(e){const t=Math.round(e/6e4),a=Math.floor(t/60);return a>0?`${a} ч ${t%60} мин`:`${t} мин`}function ce(e){if(!e)return"0 Б";const t=["Б","КБ","МБ","ГБ","ТБ"];let a=e,s=0;for(;a>=1024&&s<t.length-1;)a/=1024,s+=1;return`${a>=10||s===0?Math.round(a):a.toFixed(1)} ${t[s]}`}const f=new Ci,zi=document.getElementById("app"),r={currentTracks:[],favorites:new Set,dislikes:new Set,favoriteAlbums:new Set,theme:"violet",lyrics:null,lyricsTrackId:null,lyricsRefresh:!1,lyricsActiveKey:null,npTab:"lyrics",npOpen:!1,allTracks:null,artists:null,albums:null,stats:null,playlists:null,me:null,meStats:null,authConfig:null,lastfmConfig:null,liveMode:!1,liveMixes:[],renderSeq:0},S={artists:null,albums:null,tracks:null,stats:null,playlists:null,favorites:null,ratings:null,recent:null,meStats:null,liveMixes:null},qi=new Set(["flac","wav","alac","ape","aiff","aif","dsf","dff"]);function ba(e){const t=(e.suffix||"").toLowerCase();return qi.has(t)?"lossless":e.bitRate?`${e.bitRate} kbps`:null}zi.innerHTML=`
  <div class="ambient" aria-hidden="true">
    <span class="blob blob-a"></span>
    <span class="blob blob-b"></span>
    <span class="blob blob-c"></span>
    <span class="grain"></span>
  </div>

  <header class="topbar">
    <a class="brand" href="#/home" aria-label="Rustream — на главную">
      <span class="brand-mark">${d("wave")}</span>
      <span class="brand-name">Rustream</span>
    </a>

    <label class="searchbox">
      ${d("search")}
      <input id="search-input" type="search" placeholder="Артисты, альбомы, треки…" autocomplete="off" />
      <kbd>Ctrl K</kbd>
    </label>

    <div class="topbar-actions">
      <a class="icon-btn ytm-entry" href="#/ytm" data-nav="ytm" title="YouTube Music" aria-label="YouTube Music">${d("ytm")}</a>
      <button class="icon-btn history-btn" data-action="history-back" title="Назад (Alt+←)" aria-label="Назад">${d("back")}</button>
      <button class="icon-btn history-btn" data-action="history-forward" title="Вперёд (Alt+→)" aria-label="Вперёд">${d("next")}</button>
      <button class="icon-btn" id="rescan-btn" title="Пересканировать библиотеку">${d("refresh")}</button>
      <button class="now-playing-pill" id="np-pill" title="Открыть плеер">
        ${d("wave")}<span>Сейчас играет</span>
      </button>
      <a class="user-btn" id="user-btn" href="#/profile" title="Профиль" aria-label="Профиль">
        <span class="user-avatar" id="user-avatar">?</span>
        <span class="user-name" id="user-name">Профиль</span>
      </a>
    </div>
  </header>

  <div class="shell">
    <nav class="nav" aria-label="Разделы">
      <div class="nav-group">
        <div class="nav-group-title">Моя библиотека</div>
        <a href="#/home" data-nav="home" class="nav-item"><span class="nav-icon">${d("home")}</span><span class="nav-label">Главная</span></a>
        <a href="#/favorites" data-nav="favorites" class="nav-item"><span class="nav-icon">${d("heartOutline")}</span><span class="nav-label">Избранное</span></a>
        <a href="#/albums" data-nav="albums" class="nav-item"><span class="nav-icon">${d("album")}</span><span class="nav-label">Альбомы</span></a>
        <a href="#/tracks" data-nav="tracks" class="nav-item"><span class="nav-icon">${d("music")}</span><span class="nav-label">Треки</span></a>
        <a href="#/artists" data-nav="artists" class="nav-item"><span class="nav-icon">${d("person")}</span><span class="nav-label">Артисты</span></a>
        <a href="#/library/playlists" data-nav="playlists" class="nav-item"><span class="nav-icon">${d("queue")}</span><span class="nav-label">Плейлисты</span></a>
      </div>

      <div class="nav-group">
        <div class="nav-group-title">Онлайн</div>
        <a href="#/ytm" data-nav="ytm" class="nav-item"><span class="nav-icon">${d("ytm")}</span><span class="nav-label">YouTube Music</span></a>
        <a href="#/live" data-nav="live" class="nav-item"><span class="nav-icon">${d("radio")}</span><span class="nav-label">Live</span></a>
      </div>

      <div class="nav-spacer"></div>
      <a href="#/stats" data-nav="stats" class="nav-item"><span class="nav-icon">${d("chart")}</span><span class="nav-label">Статистика</span></a>
      <a href="#/profile" data-nav="profile" class="nav-item"><span class="nav-icon">${d("person")}</span><span class="nav-label">Профиль</span></a>
      <button class="nav-item nav-settings" data-action="shortcuts" title="Горячие клавиши (?)"><span class="nav-icon">${d("keyboard")}</span><span class="nav-label">Клавиши</span></button>
    </nav>

    <main id="view" class="view" tabindex="-1"></main>
  </div>

  <footer class="playerbar" id="playerbar">
    <div class="pb-left">
      <button class="pb-cover" id="pb-cover" data-action="nowplaying" title="Открыть плеер">
        <span class="cover-fallback">${d("music")}</span>
        <img id="pb-cover-img" alt="" />
        <span class="pb-cover-overlay">${d("play")}</span>
      </button>
      <div class="pb-meta" data-action="nowplaying" title="Открыть плеер">
        <div class="pb-title" id="pb-title">Ничего не играет</div>
        <div class="pb-artist" id="pb-artist">Выберите трек</div>
      </div>
      <button class="icon-btn like-btn" id="pb-like" data-action="like-current" title="В избранное">${d("heartOutline")}</button>
      <button class="icon-btn dislike-btn" id="pb-dislike" data-action="dislike-current" title="Не нравится">${d("thumbDown")}</button>
    </div>

    <div class="pb-center">
      <div class="pb-controls">
        <button class="icon-btn" id="shuffle-btn" data-action="shuffle" title="Перемешать">${d("shuffle")}</button>
        <button class="icon-btn" data-action="prev" title="Предыдущий">${d("prev")}</button>
        <button class="play-btn" id="play-btn" data-action="toggle" title="Играть">${d("play")}</button>
        <button class="icon-btn" data-action="next" title="Следующий">${d("next")}</button>
        <button class="icon-btn" id="repeat-btn" data-action="repeat" title="Повтор">${d("repeat")}</button>
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
      <button class="icon-btn" id="lyrics-btn" data-action="open-lyrics" title="Текст песни">${d("lyrics")}</button>
      <button class="icon-btn" id="eq-btn" data-action="open-eq" title="Эквалайзер">${d("equalizer")}</button>
      <button class="icon-btn" id="queue-btn" data-action="open-queue" title="Очередь">${d("queue")}</button>
      <div class="volume">
        <button class="icon-btn" id="volume-btn" data-action="mute" title="Звук">${d("volumeUp")}</button>
        <input type="range" id="volume" min="0" max="100" value="${f.volumePercent}" style="--volume-fill: ${f.volumePercent}%" aria-label="Громкость" />
      </div>
    </div>
  </footer>

  <nav class="tabbar" aria-label="Основное меню">
    <a href="#/home" data-tab="home" class="tab-item"><span class="tab-icon">${d("home")}</span><span class="tab-label">Главная</span></a>
    <a href="#/search" data-tab="search" class="tab-item"><span class="tab-icon">${d("search")}</span><span class="tab-label">Поиск</span></a>
    <a href="#/library/albums" data-tab="albums" class="tab-item"><span class="tab-icon">${d("album")}</span><span class="tab-label">Медиатека</span></a>
    <a href="#/ytm" data-tab="ytm" class="tab-item"><span class="tab-icon">${d("ytm")}</span><span class="tab-label">YouTube</span></a>
    <a href="#/profile" data-tab="profile" class="tab-item"><span class="tab-icon">${d("person")}</span><span class="tab-label">Профиль</span></a>
  </nav>

  <div class="np" id="np" hidden>
    <div class="np-backdrop" data-action="close-np"></div>
    <div class="np-sheet" role="dialog" aria-modal="true" aria-label="Плеер">
      <div class="np-grabber"></div>
      <div class="np-head">
        <button class="icon-btn" data-action="close-np" title="Свернуть" aria-label="Свернуть плеер">${d("chevronDown")}</button>
        <span class="np-head-title" id="np-head-title">Сейчас играет</span>
        <div class="np-head-spacer"></div>
      </div>
      <div class="np-body">
        <div class="np-side" id="np-side"></div>
        <div class="np-pages-viewport">
          <div class="np-pages" id="np-pages">
            <section class="np-page" data-page="lyrics" id="np-page-lyrics"></section>
            <section class="np-page" data-page="queue" id="np-page-queue"></section>
            <section class="np-page" data-page="info" id="np-page-info"></section>
            <section class="np-page" data-page="eq" id="np-page-eq"></section>
          </div>
        </div>
      </div>
      <nav class="np-tabs" role="tablist" aria-label="Панели плеера">
        <button class="np-tab" data-np-tab="lyrics" role="tab">${d("lyrics")}<span>Текст</span></button>
        <button class="np-tab" data-np-tab="queue" role="tab">${d("queue")}<span>Очередь</span></button>
        <button class="np-tab" data-np-tab="info" role="tab">${d("album")}<span>Инфо</span></button>
        <button class="np-tab" data-np-tab="eq" role="tab">${d("equalizer")}<span>Звук</span></button>
      </nav>
      <div class="np-transport">
        <div class="np-seek-line">
          <span class="time" id="np-cur-time">0:00</span>
          <div class="np-seek-bar">
            <i class="np-seek-buffer" id="np-seek-buffer"></i>
            <i class="np-seek-fill" id="np-seek-fill"></i>
            <input id="np-seek" type="range" min="0" max="100" step="0.1" value="0" aria-label="Позиция" />
          </div>
          <span class="time" id="np-total-time">0:00</span>
        </div>
        <div class="np-volume">
          <span class="icon" id="np-volume-icon">${d("volumeUp")}</span>
          <input id="np-volume" type="range" min="0" max="100" value="${f.volumePercent}" style="--volume-fill: ${f.volumePercent}%" aria-label="Громкость" />
        </div>
      </div>
    </div>
  </div>

  <div id="auth-screen" class="auth-screen" hidden>
    <div class="auth-card">
      <div class="auth-brand">
        <span class="brand-mark">${d("wave")}</span>
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
            <span class="input-wrap">
              <input class="input" id="login-password" name="password" type="password" autocomplete="current-password" required />
              <button class="reveal-btn" type="button" data-action="toggle-password" data-target="login-password" aria-label="Показать пароль">${d("eye")}</button>
            </span>
          </label>
          <button class="btn primary full" type="submit" id="login-submit">${d("wave")} Войти</button>
          <p class="auth-error" id="login-error" role="alert"></p>
        </form>
        <button class="text-link auth-switch" type="button" id="auth-toggle-register">${d("ticket")} У меня есть приглашение</button>
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
            <span class="input-wrap">
              <input class="input" id="register-password" type="password" autocomplete="new-password" minlength="6" required />
              <button class="reveal-btn" type="button" data-action="toggle-password" data-target="register-password" aria-label="Показать пароль">${d("eye")}</button>
            </span>
          </label>
          <button class="btn primary full" type="submit" id="register-submit">${d("sparkle")} Зарегистрироваться</button>
          <p class="auth-error" id="register-error" role="alert"></p>
        </form>
        <button class="text-link auth-switch" type="button" id="auth-toggle-login">${d("back")} У меня уже есть аккаунт</button>
      </div>
    </div>
  </div>

  <div id="modal-root"></div>
  <div id="toast" class="toast" role="status" aria-live="polite"></div>
`;const p=(e,t=document)=>t.querySelector(e),R=(e,t=document)=>[...t.querySelectorAll(e)];function g(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function za(e){const t=String(e||"?").trim().split(/\s+/).filter(Boolean);return t.length?t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+t[1][0]).toUpperCase():"?"}function Ce(){var e,t;return((e=r.me)==null?void 0:e.displayName)||((t=r.me)==null?void 0:t.username)||"Аккаунт"}function Gs(e){return(e==null?void 0:e.status)===401}function Bt(e){return Gs(e)?(jt(),!0):!1}function it(e,{size:t=400,alt:a="",className:s=""}={}){return`<span class="cover ${s}">
    <span class="cover-fallback">${d("music")}</span>
    ${e?`<img src="${wt(e,t)}" alt="${g(a)}" loading="lazy" decoding="async" />`:""}
  </span>`}function w(e,t="info"){const a=p("#toast");a.textContent=e,a.className=`toast show ${t}`,clearTimeout(w._timer),w._timer=setTimeout(()=>{a.className="toast"},t==="error"?6e3:3200)}function B(){p("#view").innerHTML=`
    <div class="page">
      <div class="skeleton skeleton-title"></div>
      <div class="grid cards">
        ${Array.from({length:8}).map(()=>`<div class="card skeleton-card">
              <div class="skeleton skeleton-cover"></div>
              <div class="skeleton skeleton-line"></div>
              <div class="skeleton skeleton-line short"></div>
            </div>`).join("")}
      </div>
    </div>`}function Ii(e){p("#view").innerHTML=`
    <div class="page">
      <div class="empty-state">
        <span class="empty-icon">${d("wave")}</span>
        <h2>Что-то пошло не так</h2>
        <p>${g(e)}</p>
        <button class="btn tonal" data-action="reload">Попробовать снова</button>
      </div>
    </div>`}function St(e,t,{actions:a="",eyebrow:s="",play:n="",count:i=null}={}){return`<header class="page-head">
    ${n?`<button class="page-play" ${n} title="Слушать">${d("play")}</button>`:""}
    <div class="page-head-copy">
      ${s?`<div class="eyebrow">${g(s)}</div>`:""}
      <div class="page-head-title">
        <h1>${g(e)}</h1>
        ${i===null?"":`<span class="page-count">${i}</span>`}
      </div>
      ${t?`<p class="muted">${t}</p>`:""}
    </div>
    ${a?`<div class="page-actions">${a}</div>`:""}
  </header>`}function hs(e,t){return`<div class="shelf-row">${e.map(t).join("")}</div>`}function Ut(e){return`<article class="card" data-action="open" data-href="#/album/${e.id}" tabindex="0">
    <div class="card-cover">${it(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${g(e.name)}</div>
      <div class="card-sub">${g(e.artist||"Неизвестный артист")}${e.year?` · ${e.year}`:""}</div>
    </div>
    <button class="card-play" data-action="play-album" data-id="${e.id}" title="Слушать альбом">${d("play")}</button>
  </article>`}function Ye(e){return`<article class="card artist-card" data-action="open" data-href="#/artist/${e.id}" tabindex="0">
    <div class="card-cover round">${it(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${g(e.name)}</div>
      <div class="card-sub">${e.albumCount??0} ${at(e.albumCount??0,"альбом","альбома","альбомов")}</div>
    </div>
  </article>`}function at(e,t,a,s){const n=e%10,i=e%100;return n===1&&i!==11?t:n>=2&&n<=4&&(i<12||i>14)?a:s}function Oi(e){return(e==null?void 0:e.source)==="ytm"?'<span class="track-badge ytm" title="Источник: YouTube Music">YT</span>':`<span class="track-badge">${g(((e==null?void 0:e.suffix)||"flac").toUpperCase())}</span>`}function Hi(e,t,{showAlbum:a=!0,showCover:s=!1,playlistId:n=null,rowAction:i="play-row",rowList:o=null}={}){var m;const l=((m=f.track)==null?void 0:m.id)===e.id,c=r.favorites.has(e.id),u=e.track&&e.track>0?e.track:t+1;return`<div class="track-row ${l?"playing":""} ${s?"has-cover":""}" data-action="${i}" data-index="${t}" data-track-id="${g(e.id)}" ${o?`data-list="${o}"`:""} tabindex="0">
    <div class="track-index">
      <span class="track-num">${u}</span>
      <span class="track-eq"><i></i><i></i><i></i></span>
    </div>
    ${s?`<span class="track-cover">${it(e.coverArt||e.albumId,{size:80})}</span>`:""}
    <div class="track-main">
      <div class="track-title">${g(e.title)}</div>
      <div class="track-sub">${g(e.artist||"")}${a&&e.album?` · ${g(e.album)}`:""}</div>
    </div>
    ${Oi(e)}
    <span class="track-duration">${pt(e.duration)}</span>
    <button class="icon-btn row-btn like ${c?"active":""}" data-action="like" data-id="${e.id}" title="В избранное">${d(c?"heart":"heartOutline")}</button>
    <button class="icon-btn row-btn dislike ${r.dislikes.has(e.id)?"active":""}" data-action="dislike" data-id="${e.id}" title="Не нравится">${d("thumbDown")}</button>
    ${n?`<button class="icon-btn row-btn" data-action="remove-from-playlist" data-playlist="${n}" data-index="${t}" title="Убрать из плейлиста">${d("delete")}</button>`:`<button class="icon-btn row-btn" data-action="add-to-playlist" data-id="${e.id}" title="Добавить в плейлист">${d("add")}</button>`}
  </div>`}function W(e,t={}){return e.length?`<div class="track-list">${e.map((a,s)=>Hi(a,s,t)).join("")}</div>`:'<div class="empty-inline">Треков пока нет</div>'}function Js(){const e=location.hash.replace(/^#/,"")||"/home",[t,a=""]=e.split("?");return{parts:t.split("/").filter(Boolean),params:new URLSearchParams(a)}}const Ks={artist:"artists",album:"albums",playlist:"playlists",artists:"artists",albums:"albums",tracks:"tracks",playlists:"playlists",favorites:"favorites",library:"albums",ytm:"ytm",profile:"profile",live:"live",stats:"stats",search:"search",home:"home"};function Ni(e){const t=Ks[e]||e;R(".nav-item").forEach(a=>{const s=a.dataset.nav===t;a.classList.toggle("active",s),s?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current")}),R(".tab-item").forEach(a=>{const s=a.dataset.tab===t;a.classList.toggle("active",s),s?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current")})}const fs=new Map;let ya=!1,ia="";const Ri=["lyrics","queue","info","eq"];function ze(e,t){const a=location.hash.replace(/^#/,"")||"/home",[s,n=""]=a.split("?"),i=new URLSearchParams(n);e?i.set("player",e):i.delete("player");const o=i.toString(),l=`#${s}${o?`?${o}`:""}`;l!==location.hash&&(t?history.pushState(null,"",l):history.replaceState(null,"",l))}function Vi(e){const t=e.get("player");t&&Ri.includes(t)?(!r.npOpen||r.npTab!==t)&&ot(t,{push:!1}):r.npOpen&&Yt({push:!1})}async function z(){const{parts:e,params:t}=Js();if(e[0]==="library"&&!e[1]&&t.get("tab")){location.replace(`#/library/${t.get("tab")}`);return}const a=e[0]||"home";if(a==="register"){Ya(t.get("invite")||"");return}if(!r.me){jt();return}const s=location.hash||"#/home";ia&&fs.set(ia,p("#view").scrollTop);const n=++r.renderSeq;Ni(a);try{if(a==="home"?await ms(n):a==="live"?await Ui(n):a==="stats"?await Xi(n):a==="artists"?await Wi(n):a==="artist"?await Gi(n,e[1]):a==="albums"?await Ji(n):a==="album"?await Ki(n,e[1]):a==="tracks"?await Qi(n):a==="playlists"?await Zi(n):a==="playlist"?await tr(n,e[1]):a==="favorites"?await er(n):a==="search"?await ar(n,t.get("q")||""):a==="library"?await $r(n,e[1]||"playlists"):a==="profile"?await Sr(n):a==="ytm"?await kr(n,e[1]||"search"):await ms(n),n!==r.renderSeq)return;p("#view").scrollTop=ya?fs.get(s)??0:0,ya=!1,ia=s,Vi(t)}catch(i){if(console.error(i),Bt(i))return;n===r.renderSeq&&Ii(i.message||"Ошибка загрузки")}}async function Yi(){return S.stats||(S.stats=await Cn()),S.stats}async function qa(){return S.artists||(S.artists=await En()),S.artists}async function Qs(){return S.albums||(S.albums=await La("alphabeticalByArtist",500)),S.albums}async function de(){if(!S.tracks){const e=await Mn(500);e.sort((t,a)=>`${t.artist} ${t.album} ${String(t.track).padStart(3,"0")}`.localeCompare(`${a.artist} ${a.album} ${String(a.track).padStart(3,"0")}`,"ru")),S.tracks=e}return S.tracks}async function Ia(){if(S.favorites||(S.favorites=await Dn()),r.favorites=new Set((S.favorites.song||[]).map(e=>e.id)),r.favoriteAlbums=new Set((S.favorites.album||[]).map(e=>e.id)),!S.ratings)try{S.ratings=await In()}catch{S.ratings={liked:[],disliked:[]}}return r.dislikes=new Set((S.ratings.disliked||[]).filter(e=>!r.favorites.has(e))),S.favorites}async function Oa(){return S.meStats||(S.meStats=await Ms()),r.meStats=S.meStats,S.meStats}async function ji(){return S.liveMixes||(S.liveMixes=await Yn()),r.liveMixes=S.liveMixes,S.liveMixes}async function Fi(){S.artists=null,S.albums=null,S.tracks=null,S.stats=null,S.recent=null,S.meStats=null,S.liveMixes=null,w("Библиотека обновлена"),z()}async function ms(e){var v,y,$;B();const[t,a,s,n]=await Promise.all([Oa(),S.recent?Promise.resolve(S.recent):La("newest",12),qa(),de()]);if(e!==r.renderSeq)return;S.recent=a;const i=r.ytmStatus||await Re().catch(()=>null);r.ytmStatus=i;let o=[];if(i!=null&&i.connected&&(o=await Ds(10).catch(()=>[])),e!==r.renderSeq)return;const l=[...n].sort(()=>Math.random()-.5).slice(0,6),c=(t.recent||[]).slice(0,6);r.lists={...r.lists||{},quick:l,recent:c},r.ytmLists={...r.ytmLists||{},history:o},r.currentTracks=n;const u=f.track,m=f.queue.length?f.queue:null,h=(u==null?void 0:u.coverArt)||(u==null?void 0:u.albumId)||((v=a[0])==null?void 0:v.coverArt)||((y=a[0])==null?void 0:y.id);p("#view").innerHTML=`
    <div class="page home quick-home">
      <section class="home-hero">
        ${h?`<span class="home-hero-bg" style="background-image:url('${wt(h,600)}')"></span>`:""}
        <div class="home-hero-copy">
          <span class="eyebrow"><span class="live-dot"></span>${g(Bi())}, ${g(Ce())}</span>
          <h1>Что послушаем?</h1>
          <p class="muted">Быстрый выбор, новые поступления и ваши любимые артисты.</p>
          <div class="head-actions">
            <button class="btn primary" data-action="play-all">${d("play")} Слушать всё</button>
            <button class="btn glass" data-action="shuffle-all">${d("shuffle")} Перемешать</button>
            <a class="btn ghost" href="#/live">${d("radio")} Live</a>
          </div>
        </div>
        ${h?`<span class="home-hero-cover">${it(h,{size:400,alt:"Обложка"})}</span>`:""}
        <nav class="home-chips" aria-label="Быстрые разделы">
          <a class="chip active" href="#/home" aria-current="page">Все</a>
          <a class="chip" href="#/library/recent">Новинки</a>
          <a class="chip" href="#/library/favorites">Избранное</a>
          <a class="chip" href="#/library/artists">Артисты</a>
          <a class="chip" href="#/live">Live</a>
        </nav>
      </section>

      ${u?`<section class="continue-card">
              <span class="continue-cover">${it(u.coverArt||u.albumId,{size:120,alt:u.title})}</span>
              <span class="continue-main">
                <span class="eyebrow">Продолжить слушать</span>
                <strong>${g(u.title)}</strong>
                <small>${g(u.artist||"")}${m?` · ${f.index+1} из ${f.queue.length}`:""}</small>
              </span>
              <button class="btn primary" data-action="toggle">${d(f.paused?"play":"pause")} ${f.paused?"Продолжить":"Пауза"}</button>
              <a class="btn ghost" href="#/live">${d("queue")} Очередь</a>
            </section>`:""}

      ${l.length?`<section class="section">
              <div class="section-head">
                <div>
                  <h2>Быстрый выбор</h2>
                  <p class="muted">Случайные треки из вашей библиотеки</p>
                </div>
                <button class="text-link" data-action="shuffle-library">Перемешать всё ${d("next")}</button>
              </div>
              ${W(l,{showCover:!0,rowAction:"play-list-row",rowList:"quick"})}
            </section>`:""}

      ${c.length?`<section class="section">
              <div class="section-head">
                <div>
                  <h2>Недавно слушали</h2>
                  <p class="muted">Продолжите с любого места</p>
                </div>
                <a class="text-link" href="#/stats">История ${d("next")}</a>
              </div>
              ${W(c,{showCover:!0,rowAction:"play-list-row",rowList:"recent"})}
            </section>`:""}

      <section class="section">
        <div class="section-head">
          <div>
            <h2>Недавно добавленные</h2>
            <p class="muted">Свежие поступления в библиотеке</p>
          </div>
          <a class="text-link" href="#/albums">Все альбомы ${d("next")}</a>
        </div>
        ${hs(a.slice(0,12),Ut)}
      </section>

      ${o.length?`<section class="section">
              <div class="section-head">
                <div>
                  <h2>Из YouTube Music</h2>
                  <p class="muted">Внешний источник — помечено меткой <span class="track-badge ytm inline">YT</span></p>
                </div>
                <a class="text-link" href="#/ytm">Открыть YouTube ${d("next")}</a>
              </div>
              ${W(o.slice(0,6),{showCover:!0,rowAction:"play-ytm-row",rowList:"history"})}
            </section>`:""}

      <section class="section">
        <div class="section-head">
          <div>
            <h2>Любимые артисты</h2>
            <p class="muted">${($=t.topArtists)!=null&&$[0]?`Чаще всего вы слушаете ${g(t.topArtists[0].name)}`:"Начните слушать — и здесь появятся ваши артисты"}</p>
          </div>
          <a class="text-link" href="#/artists">Все артисты ${d("next")}</a>
        </div>
        ${hs(s.slice(0,12),Ye)}
      </section>

      <section class="section home-cta">
        <div class="cta-panel">
          <div>
            <div class="eyebrow">${d("chart")} Ваша статистика</div>
            <h2>${t.plays||0} ${at(t.plays||0,"прослушивание","прослушивания","прослушиваний")}</h2>
            <p class="muted">Часы, любимые артисты, лайки и дизлайки — на отдельной странице.</p>
          </div>
          <a class="btn glass" href="#/stats">${d("chart")} Открыть статистику</a>
        </div>
      </section>
    </div>`}function Bi(){const e=new Date().getHours();return e<6?"Доброй ночи":e<12?"Доброе утро":e<18?"Добрый день":"Добрый вечер"}async function Ui(e){B();const[t,a]=await Promise.all([ji(),Oa()]);e===r.renderSeq&&(p("#view").innerHTML=`
    <div class="page live-page">
      ${St("Live","Персональный поток: избранное, любимые артисты и новые находки",{eyebrow:"Автоматический эфир",actions:`<button class="btn primary" data-action="start-live">${d("radio")} ${r.liveMode?"Перезапустить":"Включить Live"}</button>`})}

      <section class="live-hero">
        <div>
          <div class="eyebrow"><span class="live-dot"></span>${r.liveMode?"Эфир идёт":"Готов к запуску"}</div>
          <h2>${r.liveMode?"Поток подбирает следующий трек":"Очередь, которая слушает вас"}</h2>
          <p class="muted">
            ${a.plays?`Учтено ${a.plays} прослушиваний. Чем больше слушаете, тем точнее подбор.`:"Пока нет истории — начните с избранного и любимых артистов."}
          </p>
          <div class="live-tags">
            <span class="chip">Избранное</span>
            <span class="chip">Любимые артисты</span>
            <span class="chip">Редкие треки</span>
            <span class="chip">Без повторов</span>
          </div>
        </div>
        <div class="live-wave" aria-hidden="true">
          ${Array.from({length:24}).map((s,n)=>`<i style="--i:${n}"></i>`).join("")}
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
          ${t.map((s,n)=>{var i,o,l;return`<article class="mix-card ${(i=s.tracks)!=null&&i.length?"":"empty"}" data-action="play-mix" data-index="${n}" tabindex="0">
                <div class="mix-icon">${d(n===0?"heart":n===1?"album":"radio")}</div>
                <div class="mix-body">
                  <h3>${g(s.title)}</h3>
                  <p>${g(s.subtitle)}</p>
                  <span class="muted">${((o=s.tracks)==null?void 0:o.length)||0} ${at(((l=s.tracks)==null?void 0:l.length)||0,"трек","трека","треков")}</span>
                </div>
                <span class="mix-play">${d("play")}</span>
              </article>`}).join("")}
        </div>
      </section>

    </div>`)}async function Xi(e){var u,m,h;B();const t=await Ms().catch(()=>r.meStats||{});if(e!==r.renderSeq)return;r.meStats=t,S.meStats=t;const a=((t.listenedMs||0)/36e5).toFixed(1),s=Math.round((t.listenedMs||0)/6e4),n=Math.max(1,...(t.byDay||[]).map(v=>v.ms)),i=t.recent||[];r.currentTracks=i;const o=[...t.byDay||[]].slice(-14),l=t.likes||0,c=t.dislikes||0;p("#view").innerHTML=`
    <div class="page stats-page">
      ${St("Статистика","Только ваш аккаунт: время, артисты, жанры и оценки",{eyebrow:"Личные данные",actions:`<a class="btn glass" href="#/favorites">${d("heart")} Избранное</a>`})}

      <section class="stat-cards">
        <div class="stat-card"><span class="stat-icon">${d("clock")}</span><strong>${a} ч</strong><span>${s} минут музыки</span></div>
        <div class="stat-card"><span class="stat-icon">${d("play")}</span><strong>${t.plays||0}</strong><span>прослушиваний</span></div>
        <div class="stat-card"><span class="stat-icon like">${d("heart")}</span><strong>${l}</strong><span>лайков</span></div>
        <div class="stat-card"><span class="stat-icon dislike">${d("thumbDown")}</span><strong>${c}</strong><span>дизлайков</span></div>
      </section>

      <section class="section stats-grid">
        <div class="stats-panel">
          <div class="section-head"><h2>Последние 14 дней</h2><span class="muted">${a} ч всего</span></div>
          ${o.length?`<div class="day-chart">${o.map(v=>{const $=new Date(`${v.day}T00:00:00`).toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit"}),L=Math.max(4,Math.round(v.ms/n*100));return`<div class="day-col" title="${$}: ${Math.round(v.ms/6e4)} мин">
                      <span class="day-bar" style="height:${L}%"></span>
                      <span class="day-label">${$}</span>
                    </div>`}).join("")}</div>`:'<div class="empty-inline">Пока нет прослушиваний за две недели.</div>'}
        </div>
        <div class="stats-panel">
          <div class="section-head"><h2>Жанры</h2></div>
          ${(u=t.topGenres)!=null&&u.length?`<div class="genre-list">${t.topGenres.map(v=>{var y;return`<div class="genre-row">
                      <span class="genre-name">${g(v.name)}</span>
                      <span class="genre-bar"><i style="width:${Math.min(100,v.plays/(((y=t.topGenres[0])==null?void 0:y.plays)||1)*100)}%"></i></span>
                      <span class="genre-plays">${v.plays}</span>
                    </div>`}).join("")}</div>`:'<div class="empty-inline">Жанры появятся после прослушиваний.</div>'}
        </div>
      </section>

      <section class="section stats-grid">
        <div class="stats-panel">
          <div class="section-head"><h2>Любимые артисты</h2></div>
          ${(m=t.topArtists)!=null&&m.length?`<div class="rank-list">${t.topArtists.map((v,y)=>`<div class="rank-row">
                      <span class="rank-num">${y+1}</span>
                      <span class="rank-main"><strong>${g(v.name)}</strong><small>${v.plays} ${at(v.plays,"прослушивание","прослушивания","прослушиваний")}</small></span>
                    </div>`).join("")}</div>`:'<div class="empty-inline">Пока нет данных.</div>'}
        </div>
        <div class="stats-panel">
          <div class="section-head"><h2>Топ треков</h2></div>
          ${(h=t.topTracks)!=null&&h.length?`<div class="rank-list">${t.topTracks.slice(0,10).map((v,y)=>`<div class="rank-row">
                      <span class="rank-num">${y+1}</span>
                      <span class="rank-main"><strong>${g(v.title)}</strong><small>${g(v.artist)}</small></span>
                      <span class="rank-plays">${v.plays} ×</span>
                    </div>`).join("")}</div>`:'<div class="empty-inline">Пока нет данных.</div>'}
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <div><h2>Недавние треки</h2><p class="muted">Можно продолжить с любого места</p></div>
        </div>
        ${i.length?W(i,{showCover:!0}):'<div class="empty-inline">История пока пуста.</div>'}
      </section>
    </div>`}async function Wi(e){B();const t=await qa();e===r.renderSeq&&(r.currentTracks=[],p("#view").innerHTML=`
    <div class="page">
      ${St("Артисты","Исполнители в вашей библиотеке",{actions:`<button class="btn glass" data-action="shuffle-library">${d("shuffle")} Перемешать всё</button>`,eyebrow:"Коллекция",count:t.length})}
      <div class="grid cards">${t.map(Ye).join("")}</div>
    </div>`)}async function Gi(e,t){B();const a=await ks(t);if(e!==r.renderSeq)return;const s=a.artist,n=s.album||[];r.currentTracks=[],p("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/artists">${d("back")} Все артисты</a>
      <section class="collection-head">
        <div class="collection-art round">${it(s.coverArt||s.id,{size:600,alt:s.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">Артист</div>
          <h1>${g(s.name)}</h1>
          <p class="muted">${n.length} ${at(n.length,"альбом","альбома","альбомов")}</p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-artist" data-id="${s.id}">${d("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-artist" data-id="${s.id}">${d("shuffle")} Перемешать</button>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section-head"><h2>Альбомы</h2></div>
        <div class="grid cards">${n.map(Ut).join("")}</div>
      </section>
    </div>`}async function Ji(e){B();const t=await Qs();e===r.renderSeq&&(r.currentTracks=[],p("#view").innerHTML=`
    <div class="page">
      ${St("Альбомы","Все альбомы вашей библиотеки",{eyebrow:"Коллекция",count:t.length,play:t.length?'data-action="play-library"':""})}
      <div class="grid cards">${t.map(Ut).join("")}</div>
    </div>`)}async function Ki(e,t){B();const a=await Ma(t);if(e!==r.renderSeq)return;const s=a.album,n=s.song||[];r.currentTracks=n,p("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/albums">${d("back")} Все альбомы</a>
      <section class="collection-head album-head">
        <div class="collection-art">${it(s.coverArt||s.id,{size:800,alt:s.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">${s.year?`Альбом · ${s.year}`:"Альбом"}</div>
          <h1>${g(s.name)}</h1>
          <p class="muted">
            <a class="inline-link" href="#/artist/${s.artistId}">${g(s.artist)}</a>
            · ${n.length} ${at(n.length,"трек","трека","треков")}
            · ${Ws(s.duration*1e3||0)}
          </p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-all">${d("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-all">${d("shuffle")} Перемешать</button>
          </div>
        </div>
      </section>
      <section class="section">
        ${W(n,{showAlbum:!1})}
      </section>
    </div>`}async function Qi(e){B();const t=await de();e===r.renderSeq&&(r.currentTracks=t,p("#view").innerHTML=`
    <div class="page">
      ${St("Треки","Полный список треков библиотеки",{eyebrow:"Библиотека",count:t.length,play:'data-action="play-all"',actions:`<button class="btn glass" data-action="shuffle-all">${d("shuffle")} Перемешать</button>`})}
      ${W(t,{showCover:!0})}
    </div>`)}async function Zi(e){B();const t=await xa();e===r.renderSeq&&(S.playlists=t,r.currentTracks=[],p("#view").innerHTML=`
    <div class="page">
      ${St("Плейлисты","Собранные вами подборки",{eyebrow:"Моя музыка",count:t.length,actions:`<button class="btn primary" data-action="new-playlist">${d("add")} Новый плейлист</button>`})}
      ${t.length?`<div class="grid cards">${t.map(Zs).join("")}</div>`:`<div class="empty-state"><span class="empty-icon">${d("playlist")}</span><h2>Плейлистов пока нет</h2><p>Соберите подборку из любимых треков.</p><button class="btn primary" data-action="new-playlist">${d("add")} Создать</button></div>`}
    </div>`)}function Zs(e){return`<article class="card" data-action="open" data-href="#/playlist/${e.id}" tabindex="0">
    <div class="card-cover">${it(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${g(e.name)}</div>
      <div class="card-sub">${e.songCount??0} ${at(e.songCount??0,"трек","трека","треков")}</div>
    </div>
    <button class="card-play" data-action="open" data-href="#/playlist/${e.id}">${d("play")}</button>
  </article>`}async function tr(e,t){B();const a=await xn(t);if(e!==r.renderSeq)return;const s=(a.entry||[]).map((n,i)=>({...n,track:i+1}));r.currentTracks=s,p("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/playlists">${d("back")} Все плейлисты</a>
      <section class="collection-head album-head">
        <div class="collection-art">${it(a.coverArt||a.id,{size:800,alt:a.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">Плейлист</div>
          <h1>${g(a.name)}</h1>
          <p class="muted">${s.length} ${at(s.length,"трек","трека","треков")} · ${Ws((a.duration||0)*1e3)}</p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-all">${d("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-all">${d("shuffle")} Перемешать</button>
            <button class="btn ghost danger" data-action="delete-playlist" data-id="${a.id}">${d("delete")} Удалить</button>
          </div>
        </div>
      </section>
      <section class="section">
        ${W(s,{showCover:!0,playlistId:a.id})}
      </section>
    </div>`}async function er(e){B();const t=await Ia();if(e!==r.renderSeq)return;const a=t.song||[];r.currentTracks=a,p("#view").innerHTML=`
    <div class="page">
      ${St("Избранное","Треки, которые вы отметили",{eyebrow:"Моя музыка",count:a.length,play:a.length?'data-action="play-all"':"",actions:""})}
      ${a.length?W(a,{showCover:!0}):`<div class="empty-state"><span class="empty-icon">${d("heartOutline")}</span><h2>Здесь пока пусто</h2><p>Нажимайте на сердечко у трека, чтобы добавить его в избранное.</p></div>`}
      ${(t.album||[]).length?`<section class="section"><div class="section-head"><h2>Любимые альбомы</h2></div>
             <div class="grid cards">${t.album.map(Ut).join("")}</div></section>`:""}
    </div>`}const Ha="rustream.searches";function tn(){try{const e=JSON.parse(localStorage.getItem(Ha));return Array.isArray(e)?e.slice(0,8):[]}catch{return[]}}function en(e){const t=String(e||"").trim();if(t.length<2)return;const a=[t,...tn().filter(s=>s!==t)].slice(0,8);localStorage.setItem(Ha,JSON.stringify(a))}function wa(e){const t=String(e||"").trim();if(!t)return;en(t);const a=`#/search?q=${encodeURIComponent(t)}`;location.hash===a?z():location.hash=a}async function ar(e,t){const a=p("#search-input");if(a.value!==t&&(a.value=t),!t.trim()){const i=tn();p("#view").innerHTML=`
      <div class="page search-page">
        <header class="page-head">
          <div>
            <span class="eyebrow">Поиск</span>
            <h1>Что найти?</h1>
          </div>
        </header>

        <form id="page-search-form" class="search-row">
          <label class="searchbox">
            ${d("search")}
            <input id="page-search-input" type="search" placeholder="Треки, альбомы, артисты…" enterkeyhint="search" autocomplete="off" />
          </label>
          <button class="btn primary" type="submit">${d("search")} Искать</button>
        </form>

        ${i.length?`<section class="section">
                <div class="section-head"><h2>Недавние запросы</h2><button class="text-link" data-action="clear-searches">Очистить</button></div>
                <div class="chip-row">${i.map(c=>`<button class="chip-btn" data-action="run-search" data-query="${g(c)}">${g(c)}</button>`).join("")}</div>
              </section>`:""}

        <section class="section">
          <div class="section-head"><h2>Популярное</h2></div>
          <div class="chip-row">
            ${["Chiki The Maid","Intro","Poezd","FLAC","Аниме","Рок","Джаз"].map(c=>`<button class="chip-btn" data-action="run-search" data-query="${g(c)}">${g(c)}</button>`).join("")}
          </div>
        </section>
      </div>`;const o=p("#page-search-form"),l=p("#page-search-input");o==null||o.addEventListener("submit",c=>{c.preventDefault(),wa(l.value)}),l==null||l.addEventListener("keydown",c=>{c.key==="Enter"&&wa(l.value)});return}B();const s=await Ln(t);if(e!==r.renderSeq)return;const n=s.song||[];r.currentTracks=n,p("#view").innerHTML=`
    <div class="page">
      ${St(`Поиск: ${t}`,`Найдено ${n.length} ${at(n.length,"трек","трека","треков")}, ${(s.album||[]).length} ${at((s.album||[]).length,"альбом","альбома","альбомов")}`,{eyebrow:"Результаты"})}
      ${(s.artist||[]).length?`<section class="section"><div class="section-head"><h2>Артисты</h2></div><div class="grid cards">${s.artist.map(Ye).join("")}</div></section>`:""}
      ${(s.album||[]).length?`<section class="section"><div class="section-head"><h2>Альбомы</h2></div><div class="grid cards">${s.album.map(Ut).join("")}</div></section>`:""}
      ${n.length?`<section class="section"><div class="section-head"><h2>Треки</h2></div>${W(n,{showCover:!0})}</section>`:""}
      ${!n.length&&!(s.album||[]).length&&!(s.artist||[]).length?`<div class="empty-state"><span class="empty-icon">${d("search")}</span><h2>Ничего не найдено</h2><p>Попробуйте другой запрос.</p></div>`:""}
    </div>`}async function sr(e){const a=(await Ma(e)).album.song||[];if(!a.length)return w("В альбоме нет треков","warn");r.currentTracks=a,await f.playTracks(a,0)}async function vs(e,t=!1){w("Загружаю альбомы…");const s=(await ks(e)).artist.album||[],i=(await Promise.all(s.map(o=>Ma(o.id)))).flatMap(o=>o.album.song||[]);if(!i.length)return w("У артиста нет треков","warn");r.currentTracks=i,await f.playTracks(i,0,{shuffle:t})}async function an(e,t){try{await On(e,t),t===1?(r.favorites.add(e),r.dislikes.delete(e)):t===-1?(r.favorites.delete(e),r.dislikes.add(e)):(r.favorites.delete(e),r.dislikes.delete(e)),S.favorites=null,S.ratings=null,R(`[data-action="like"][data-id="${e}"]`).forEach(a=>{const s=r.favorites.has(e);a.classList.toggle("active",s),a.innerHTML=d(s?"heart":"heartOutline")}),R(`[data-action="dislike"][data-id="${e}"]`).forEach(a=>{a.classList.toggle("active",r.dislikes.has(e))}),sn(),location.hash.startsWith("#/favorites")&&z(),location.hash.startsWith("#/stats")&&z()}catch(a){w(a.message,"error")}}async function ue(e){const t=r.favorites.has(e);await an(e,t?0:1)}async function $a(e){const t=r.dislikes.has(e);await an(e,t?0:-1)}function sn(){const e=f.track,t=p("#pb-like"),a=p("#pb-dislike");if(t){const s=e?r.favorites.has(e.id):!1;t.classList.toggle("active",s),t.innerHTML=d(s?"heart":"heartOutline")}a&&a.classList.toggle("active",e?r.dislikes.has(e.id):!1)}async function nr(e){let t=[];try{t=await xa()}catch(a){w(a.message,"error")}je({title:"Добавить в плейлист",body:`
      ${t.length?`<div class="modal-list">${t.map(a=>`<button class="modal-row" data-modal-action="add" data-playlist="${a.id}">
                  <span class="modal-row-ico">${d("playlist")}</span>
                  <span><strong>${g(a.name)}</strong><small>${a.songCount??0} треков</small></span>
                  ${d("next")}
                </button>`).join("")}</div>`:'<p class="muted">Плейлистов пока нет — создайте первый.</p>'}
      <div class="modal-new">
        <input class="input" id="new-playlist-name" placeholder="Название нового плейлиста" />
        <button class="btn primary" data-modal-action="create" data-track="${e}">${d("add")} Создать</button>
      </div>`,onMount:a=>{a.addEventListener("click",async s=>{const n=s.target.closest("[data-modal-action]");if(n&&(n.dataset.modalAction==="add"&&(await _n(n.dataset.playlist,e),Q(),S.playlists=null,w("Трек добавлен в плейлист")),n.dataset.modalAction==="create")){const o=p("#new-playlist-name",a).value.trim()||"Мой плейлист";await Ts(o,[e]),Q(),S.playlists=null,w("Плейлист создан"),location.hash.startsWith("#/playlists")&&z()}})}})}async function ir(){je({title:"Новый плейлист",body:`<input class="input" id="new-playlist-name" placeholder="Например: Вечерний плейлист" autofocus />
           <div class="modal-actions">
             <button class="btn ghost" data-modal-action="cancel">Отмена</button>
             <button class="btn primary" data-modal-action="create">Создать</button>
           </div>`,onMount:e=>{const t=p("#new-playlist-name",e);t.focus(),e.addEventListener("click",async a=>{var n;const s=(n=a.target.closest("[data-modal-action]"))==null?void 0:n.dataset.modalAction;if(s==="cancel"&&Q(),s==="create"){const i=t.value.trim();if(!i)return t.focus();await Ts(i,[]),Q(),S.playlists=null,w("Плейлист создан"),z()}}),t.addEventListener("keydown",a=>{var s;a.key==="Enter"&&((s=p('[data-modal-action="create"]',e))==null||s.click())})}})}function je({title:e,body:t,onMount:a,wide:s=!1}){const n=p("#modal-root");n.innerHTML=`
    <div class="modal-backdrop" data-modal-action="close">
      <div class="modal ${s?"modal-wide":""}" role="dialog" aria-modal="true">
        <div class="modal-card">
          <div class="modal-head"><h3>${g(e)}</h3><button class="icon-btn" data-modal-action="close">${d("close")}</button></div>
          <div class="modal-body">${t}</div>
        </div>
      </div>
    </div>`,document.body.classList.add("modal-open");const i=p(".modal",n);n.querySelector(".modal-backdrop").addEventListener("click",o=>{const l=o.target.closest('[data-modal-action="close"]');if(l&&l!==o.currentTarget)return Q();o.target.classList.contains("modal")&&Q()}),a==null||a(i)}function Q(){p("#modal-root").innerHTML="",document.body.classList.remove("modal-open")}function ot(e="lyrics",{push:t=!0}={}){const a=r.npOpen,s=r.npTab;r.npOpen=!0,r.npTab=e;const n=p("#np");n.hidden=!1,requestAnimationFrame(()=>n.classList.add("open")),setTimeout(()=>n.classList.add("open"),80),a?s!==e&&ze(e,!1):t&&ze(e,!0),pe()}function Yt({push:e=!0}={}){const t=r.npOpen;r.npOpen=!1,Sa=null,t&&e&&ze(null,!1);const a=p("#np");a.classList.remove("open"),setTimeout(()=>{r.npOpen||(a.hidden=!0)},260)}function nn(e){if(Rt.includes(e)){if(!r.npOpen){ot(e);return}r.npTab=e,ze(e,!1),rn(),on()}}const Rt=["lyrics","queue","info","eq"];let Sa=null;function rn(){R(".np-tab").forEach(e=>{const t=e.dataset.npTab===r.npTab;e.classList.toggle("active",t),e.setAttribute("aria-selected",t?"true":"false")})}function on(){const e=p("#np-pages");if(!e)return;const t=Math.max(0,Rt.indexOf(r.npTab));e.style.setProperty("--np-page",String(t))}function rr(e,t){const a=p(`#np-page-${e}`);a&&(e==="lyrics"?ln(a,t):e==="eq"?Fe(a):e==="info"?or(a,t):dn(a))}function pe(){if(!r.npOpen)return;const e=f.track;rn();const t=p("#np-side");t.innerHTML=`
    <div class="np-cover">${it((e==null?void 0:e.coverArt)||(e==null?void 0:e.albumId),{size:900,alt:(e==null?void 0:e.title)||""})}</div>
    <div class="np-meta">
      <div class="eyebrow">${d("wave")} Сейчас играет</div>
      <h2>${g((e==null?void 0:e.title)||"Ничего не играет")}</h2>
      <p class="np-artist">${g((e==null?void 0:e.artist)||"Выберите трек")}</p>
      <p class="muted">${g((e==null?void 0:e.album)||"")}${e!=null&&e.year?` · ${e.year}`:""}</p>
      <div class="np-chips" id="np-chips">
        ${e?`
          <span class="chip">${(e.suffix||"—").toUpperCase()}</span>
          ${ba(e)?`<span class="chip">${ba(e)}</span>`:""}
          <span class="chip" id="np-buffer">буфер 0:00</span>
        `:""}
      </div>
      <div class="np-controls">
        <button class="icon-btn ${f.shuffle?"active":""}" data-action="shuffle" title="Перемешать">${d("shuffle")}</button>
        <button class="icon-btn" data-action="prev" title="Предыдущий">${d("prev")}</button>
        <button class="play-btn" data-action="toggle" title="${f.paused?"Играть":"Пауза"}">${d(f.paused?"play":"pause")}</button>
        <button class="icon-btn" data-action="next" title="Следующий">${d("next")}</button>
        <button class="icon-btn ${f.repeat!=="off"?"active":""}" data-action="repeat" title="Повтор">${d(f.repeat==="one"?"repeatOne":"repeat")}</button>
      </div>
      <div class="np-actions">
        <button class="icon-btn like ${e&&r.favorites.has(e.id)?"active":""}" data-action="like-current" title="В избранное">${d(e&&r.favorites.has(e.id)?"heart":"heartOutline")}</button>
        <button class="icon-btn dislike ${e&&r.dislikes.has(e.id)?"active":""}" data-action="dislike-current" title="Не нравится">${d("thumbDown")}</button>
        <button class="icon-btn" data-action="add-to-playlist" data-id="${(e==null?void 0:e.id)||""}" ${e?"":"disabled"} title="В плейлист">${d("add")}</button>
        <button class="icon-btn" data-action="jump-album" ${e!=null&&e.albumId?"":"disabled"} title="К альбому">${d("album")}</button>
      </div>
    </div>`;const a=(e==null?void 0:e.id)||"";if(Sa!==a){Sa=a;for(const s of Rt)rr(s,e)}on()}async function ln(e,t){var i,o;if(!t){e.innerHTML=Na("lyrics","Текст появится здесь","Включите трек — и мы поищем файл .lrc рядом с аудио.");return}if(e.innerHTML='<div class="panel-loading"><span class="spinner"></span>Ищу текст…</div>',r.lyricsTrackId!==t.id||r.lyricsRefresh)try{r.lyrics=await jn(t.id,r.lyricsRefresh),r.lyricsTrackId=t.id,r.lyricsRefresh=!1,r.lyricsActiveKey=null,r.lyricsActiveLine=void 0,r.lyricsActiveWord=void 0}catch{r.lyrics=null}if(r.npTab!=="lyrics")return;const a=r.lyrics;if(!a||!a.plain&&!((i=a.synced)!=null&&i.length)){const l=(a==null?void 0:a.error)==="unavailable";e.innerHTML=`<div class="panel-empty">
      <span class="empty-icon">${d("lyrics")}</span>
      <h3>${l?"Сервис текстов недоступен":"Текст не найден"}</h3>
      <p>${l?"LRCLIB не ответил (лимит запросов или сбой). Текст может быть — попробуйте ещё раз.":"Локального .lrc/.txt нет, интернет-поиск ничего не вернул. Можно попробовать ещё раз."}</p>
      <button class="btn glass" data-action="refresh-lyrics">${d("refresh")} Искать в интернете</button>
    </div>`;return}const s=a.source==="lrclib"?"LRCLIB":a.source==="local"?"локальный файл":a.source==="saved"?"сохранённый текст":a.source==="lyrics.ovh"?"lyrics.ovh":"кэш",n=a.saved?'<span class="lyrics-saved">сохранено рядом с файлом</span>':"";e.innerHTML=`
    <div class="panel-title">
      <h3>Текст песни</h3>
      <span class="lyrics-source">${d("wave")} ${g(s)}</span>
      ${n}
      <button class="icon-btn" data-action="refresh-lyrics" title="Найти заново">${d("refresh")}</button>
    </div>
    <div class="lyrics" id="lyrics-body">
      ${(o=a.synced)!=null&&o.length?a.synced.map((l,c)=>{var m,h;const u=(m=l.words)!=null&&m.length?l.words.map(v=>`<span class="lyric-word" data-start="${v.start_ms}" data-end="${v.end_ms}">${g(v.text)}</span>`).join(" "):g(l.text);return`<div class="lyric-line${(h=l.words)!=null&&h.length?" has-words":""}" data-index="${c}" data-time="${l.time_ms}">${u}</div>`}).join(""):`<div class="lyrics-plain">${g(a.plain).replace(/\n/g,"<br />")}</div>`}
    </div>`,cn()}function cn(){if(r.npTab!=="lyrics")return;const e=R(".lyric-line");if(!e.length)return;const t=f.currentTime*1e3;let a=0,s=e.length-1,n=-1;for(;a<=s;){const u=a+s>>1;Number(e[u].dataset.time)<=t?(n=u,a=u+1):s=u-1}n<0&&(n=0),r.lyricsActiveLine!==n&&(e.forEach((u,m)=>u.classList.toggle("active",m===n)),R(".lyric-word.active, .lyric-word.past").forEach(u=>u.classList.remove("active","past")),r.lyricsActiveLine=n,r.lyricsActiveWord=void 0);const i=e[n],o=i!=null&&i.classList.contains("has-words")?R(".lyric-word",i):[];let l=-1;if(o.length){for(let u=0;u<o.length&&Number(o[u].dataset.start)<=t;u+=1)l=u;(r.lyricsActiveWord===void 0||r.lyricsActiveWord!==l)&&(r.lyricsActiveWord=l,o.forEach((u,m)=>{u.classList.toggle("active",m===l),u.classList.toggle("past",m<l)}))}else r.lyricsActiveWord!==void 0&&(r.lyricsActiveWord=void 0);const c=`${r.lyricsTrackId||""}:${n}`;n>=0&&r.lyricsActiveKey!==c&&(r.lyricsActiveKey=c,i.scrollIntoView({block:"center",behavior:"smooth"}))}function Na(e,t,a){return`<div class="panel-empty"><span class="empty-icon">${d(e)}</span><h3>${g(t)}</h3><p>${g(a)}</p></div>`}function or(e,t){if(!t){e.innerHTML=Na("album","Нет активного трека","Включите трек, чтобы увидеть его параметры.");return}const a=[["Исполнитель",t.artist||"—"],["Альбом",t.album||"—"],["Год",t.year||"—"],["Формат",(t.suffix||"—").toUpperCase()],["Битрейт",ba(t)||"—"],["Размер",t.size?ce(t.size):"—"],["Длительность",pt(t.duration)],["Источник",t.source==="ytm"?"YouTube Music":"Локальная библиотека"],["Трафик",(r.meSettings||{}).dataSaver?"экономия":"максимум"]];e.innerHTML=`
    <div class="panel-title"><h3>О треке</h3><span class="muted">${g(t.title||"")}</span></div>
    <div class="info-list">${a.map(([s,n])=>`<div class="info-row"><span>${g(s)}</span><strong>${g(n)}</strong></div>`).join("")}</div>
    <div class="np-info-actions">
      <button class="btn glass" data-action="jump-album" ${t.albumId?"":"disabled"}>${d("album")} Открыть альбом</button>
      <button class="btn ghost" data-action="shortcuts">${d("keyboard")} Горячие клавиши</button>
    </div>`}function Fe(e){const t=f.eqState;e.innerHTML=`
    <div class="panel-title">
      <h3>Эквалайзер</h3>
      <label class="switch">
        <input type="checkbox" id="eq-enabled" ${t.enabled?"checked":""} />
        <span></span>
      </label>
    </div>
    <div class="eq-presets">
      ${Object.entries(ga).map(([a,s])=>`<button class="chip-btn ${t.preset===a?"active":""}" data-eq-preset="${a}">${g(s.name)}</button>`).join("")}
      <button class="chip-btn ${t.preset==="custom"?"active":""}" disabled>Своя</button>
    </div>
    <div class="eq ${t.enabled?"":"disabled"}">
      ${Xs.map((a,s)=>{const n=Number(t.gains[s])||0,i=(12-n)/24*100;return`
        <div class="eq-band">
          <span class="eq-value" id="eq-val-${s}">${n>0?"+":""}${n}</span>
          <div class="eq-track" data-eq-band="${s}" role="slider" tabindex="0"
               aria-label="${a>=1e3?`${a/1e3} кГц`:`${a} Гц`}"
               aria-valuemin="-12" aria-valuemax="12" aria-valuenow="${n}">
            <span class="eq-center"></span>
            <span class="eq-fill" style="top:${Math.min(i,50)}%;height:${Math.abs(50-i)}%"></span>
            <span class="eq-thumb" style="top:${i}%"></span>
          </div>
          <span class="eq-freq">${a>=1e3?`${a/1e3}k`:a}</span>
        </div>`}).join("")}
    </div>
    <div class="eq-foot">
      <span class="muted">10 полос · ±12 дБ</span>
      <button class="btn ghost" data-action="reset-eq">${d("refresh")} Сбросить</button>
    </div>`}function dn(e){const t=f.queue;e.innerHTML=`
    <div class="panel-title"><h3>Очередь</h3><span class="muted">${t.length} ${at(t.length,"трек","трека","треков")}</span></div>
    ${t.length?`<div class="queue-list" id="queue-list">${t.map((s,n)=>`
              <button class="queue-row ${n===f.index?"active":""}" data-action="play-queue" data-index="${n}" data-track-id="${s.id}">
                <span class="queue-drag-handle">${d("menu")}</span>
                <span class="queue-cover">${it(s.coverArt||s.albumId,{size:80})}</span>
                <span class="queue-main"><strong>${g(s.title)}</strong><small>${g(s.artist||"")}</small></span>
                <span class="queue-time">${pt(s.duration)}</span>
              </button>`).join("")}</div>`:Na("queue","Очередь пуста","Нажмите на трек или альбом, чтобы начать воспроизведение.")}`;const a=p("#queue-list");a&&t.length>0&&new T(a,{animation:150,handle:".queue-drag-handle",ghostClass:"queue-row-ghost",dragClass:"queue-row-drag",onEnd:s=>{s.oldIndex!==s.newIndex&&(f.moveInQueue(s.oldIndex,s.newIndex),setTimeout(()=>dn(e),50))}})}function Ra(){const e=f.track,t=p("#pb-title"),a=p("#pb-artist"),s=p("#pb-cover-img"),n=p("#quality-format"),i=p("#quality-detail");if(!e){t.textContent="Ничего не играет",a.textContent="Выберите трек",p(".pb-cover").classList.remove("loaded"),n.textContent="—",i.textContent="",gs(null);return}t.textContent=e.title||"",a.textContent=[e.artist,e.album].filter(Boolean).join(" · "),e.coverArt||e.albumId?(s.src=wt(e.coverArt||e.albumId,160),s.onload=()=>p(".pb-cover").classList.add("loaded")):(s.removeAttribute("src"),p(".pb-cover").classList.remove("loaded")),n.textContent=(e.suffix||"—").toUpperCase(),i.textContent=[e.bitRate?`${e.bitRate} kbps`:null,e.size?ce(e.size):null].filter(Boolean).join(" · "),sn(),gs(e)}function gs(e){if("mediaSession"in navigator){if(!e){navigator.mediaSession.metadata=null;return}navigator.mediaSession.metadata=new MediaMetadata({title:e.title||"Без названия",artist:e.artist||"Неизвестный артист",album:e.album||"",artwork:[{src:wt(e.coverArt||e.albumId,96),sizes:"96x96",type:"image/jpeg"},{src:wt(e.coverArt||e.albumId,128),sizes:"128x128",type:"image/jpeg"},{src:wt(e.coverArt||e.albumId,256),sizes:"256x256",type:"image/jpeg"},{src:wt(e.coverArt||e.albumId,512),sizes:"512x512",type:"image/jpeg"}]})}}"mediaSession"in navigator&&(navigator.mediaSession.setActionHandler("play",()=>f.play()),navigator.mediaSession.setActionHandler("pause",()=>f.pause()),navigator.mediaSession.setActionHandler("previoustrack",()=>f.previous()),navigator.mediaSession.setActionHandler("nexttrack",()=>f.next()),navigator.mediaSession.setActionHandler("seekto",e=>{e.seekTime!==void 0&&f.seekTo(e.seekTime)}),navigator.mediaSession.setActionHandler("seekbackward",e=>{f.seekBy(-(e.seekOffset||10))}),navigator.mediaSession.setActionHandler("seekforward",e=>{f.seekBy(e.seekOffset||10)}));function Pt(){const e=f.duration,t=f.currentTime,a=e?t/e*100:0;p("#cur-time").textContent=pt(t),p("#total-time").textContent=pt(e),p("#seek").value=String(a),p("#seek-fill").style.width=`${a}%`;const s=p("#np-seek");s&&(s.value=String(a),p("#np-seek-fill").style.width=`${a}%`,p("#np-cur-time").textContent=pt(t),p("#np-total-time").textContent=pt(e)),un(),cn()}function un(){const e=f.buffered;p("#seek-buffer").style.width=`${e.percent}%`;const t=p("#np-seek-buffer");t&&(t.style.width=`${e.percent}%`);const a=p("#np-buffer");a&&(a.textContent=`буфер ${pt(e.ahead)}`,a.title=`Загружено ${ce(f.estimatedBufferedBytes())}`);const s=p("#quality-detail");s&&f.track&&(s.textContent=[f.track.bitRate?`${f.track.bitRate} kbps`:null,f.track.size?ce(f.track.size):null,`буфер ${pt(e.ahead)}`].filter(Boolean).join(" · "))}function me(){var s;const e=!f.paused&&!!f.track;p("#play-btn").innerHTML=d(e?"pause":"play"),p("#pb-cover").classList.toggle("playing",e);const t=p('.np-controls [data-action="toggle"]');t&&(t.innerHTML=d(e?"pause":"play"),t.title=e?"Пауза":"Играть");const a=((s=f.track)==null?void 0:s.id)||null;R(".track-row").forEach(n=>{n.classList.toggle("playing",!!a&&n.dataset.trackId===a)})}function Va(){p("#shuffle-btn").classList.toggle("active",f.shuffle),p("#repeat-btn").classList.toggle("active",f.repeat!=="off"),p("#repeat-btn").innerHTML=d(f.repeat==="one"?"repeatOne":"repeat");const e=p('.np-controls [data-action="shuffle"]');e&&e.classList.toggle("active",f.shuffle);const t=p('.np-controls [data-action="repeat"]');t&&(t.classList.toggle("active",f.repeat!=="off"),t.innerHTML=d(f.repeat==="one"?"repeatOne":"repeat"))}function ve(){const e=`${f.volumePercent}%`;for(const s of[p("#volume"),p("#np-volume")])s&&(s.value=String(f.volumePercent),s.style.setProperty("--volume-fill",e));const t=f.volumePercent===0?"volumeOff":f.volumePercent<50?"volumeDown":"volumeUp";p("#volume-btn").innerHTML=d(t);const a=p("#np-volume-icon");a&&(a.innerHTML=d(t))}function pn(){var t,a;const e=(a=(t=r.ytmStatus)==null?void 0:t.account)==null?void 0:a.photo;return typeof e=="string"&&e.startsWith("http")?e:""}function lr(e,t="user-avatar"){const a=pn();return a?`<span class="${t} has-photo"><img src="${g(a)}" alt="" referrerpolicy="no-referrer" /></span>`:`<span class="${t}">${g(za(e))}</span>`}function hn(){const e=Ce(),t=p("#user-avatar"),a=p("#user-name"),s=pn();t&&(s?(t.classList.add("has-photo"),t.innerHTML=`<img src="${g(s)}" alt="" referrerpolicy="no-referrer" />`):(t.classList.remove("has-photo"),t.textContent=za(e))),a&&(a.textContent=e)}function fn(e){const t=p("#auth-screen");t&&(t.hidden=!1,document.body.classList.add("auth-locked"),p("#auth-login-view").hidden=e!=="login",p("#auth-register-view").hidden=e!=="register",setTimeout(()=>{var a;return(a=p(e==="login"?"#login-username":"#register-invite"))==null?void 0:a.focus()},60))}function jt(){fn("login")}async function Ya(e=""){fn("register");const t=p("#register-invite"),a=p("#register-invite-hint");if(t.value=e.trim(),!e.trim()){a.textContent="Вставьте код приглашения от администратора.";return}a.textContent="Проверяю приглашение…";try{const s=await Zn(e.trim());a.innerHTML=`Приглашение от <strong>${g(s.invitedBy)}</strong>${s.isAdmin?" · администратор":""}`}catch(s){a.textContent=s.message||"Приглашение недействительно"}}function cr(){const e=p("#auth-screen");e&&(e.hidden=!0,document.body.classList.remove("auth-locked"))}async function ja(){var e;try{r.authConfig=await ua();const t=await zn();if(!t.user){jt(),location.hash.startsWith("#/register")&&z();return}r.me=t.user,r.meSettings=t.settings,Be(((e=t.settings)==null?void 0:e.theme)||localStorage.getItem("rustream.theme")||"violet"),r.ytmStatus=await Re().catch(()=>null),hn(),cr(),await Promise.all([Ia(),Oa()]),ur(),await Ba(),z()}catch(t){Gs(t)||console.error(t),jt()}}function Z(e){r.liveMode=!!e,f.setLiveMode(!!e)}const mn="rustream.playerSyncedAt";let bs=null;function dr(){return Number(localStorage.getItem(mn))||0}function vn(e){Number(e)>0&&localStorage.setItem(mn,String(e))}function Fa(){!r.me||!f.queue.length||r.skipPushUntil&&Date.now()<r.skipPushUntil||(clearTimeout(bs),bs=setTimeout(async()=>{try{const e=await ii(f.snapshotState());vn(e==null?void 0:e.updatedAt)}catch{}},3e3))}async function Ba({force:e=!1}={}){var l,c;let t;try{t=await ni()}catch{return}const a=Number(t==null?void 0:t.updatedAt)||0,s=t==null?void 0:t.state;if(!((l=s==null?void 0:s.queue)!=null&&l.length)||!e&&a<=dr())return;const n=s.queue[Math.min(Number(s.index)||0,s.queue.length-1)],i=(n==null?void 0:n.id)&&n.id===((c=f.track)==null?void 0:c.id);if(!e&&!f.paused&&!i)return;const o=f.applyRemote(s);o&&(vn(a),r.skipPushUntil=Date.now()+5e3,r.liveMode=!!o.liveMode,Ra(),me(),Pt(),location.hash.startsWith("#/live")&&z())}setInterval(()=>{document.hidden||Ba()},3e4);document.addEventListener("visibilitychange",()=>{document.hidden||Ba()});f.addEventListener("track",Fa);f.addEventListener("queue",Fa);f.addEventListener("state",Fa);window.addEventListener("pagehide",()=>{if(!(!r.me||!f.queue.length))try{fetch("/api/me/player",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({state:f.snapshotState()}),keepalive:!0}).catch(()=>{})}catch{}});function ur(){const e=f.restore();e&&(r.liveMode=!!e.liveMode,Ra(),me(),Va(),Pt())}async function pr(){try{w("Собираю персональный поток…");const e=await Ls(40);if(!e.length)return w("В библиотеке пока нет треков","warn");Z(!0),r.currentTracks=e,await f.playTracks(e,0),w("Live включён"),location.hash.startsWith("#/live")&&z()}catch(e){if(Bt(e))return;w(e.message,"error")}}async function hr(e){var a;const t=r.liveMixes[e];if(!((a=t==null?void 0:t.tracks)!=null&&a.length))return w("В этом миксе пока нет треков","warn");Z(!1),r.currentTracks=t.tracks,await f.playTracks(t.tracks,0),w(`Играет: ${t.title}`)}const Ua=[{id:"violet",name:"Фиолетовая"},{id:"ocean",name:"Океан"},{id:"sunset",name:"Закат"},{id:"forest",name:"Лес"},{id:"mono",name:"Моно"}],Ft=/^#[0-9a-f]{6}$/i;function ka(e){const t=e.replace("#","");return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}}function fr({r:e,g:t,b:a}){const s=n=>Math.max(0,Math.min(255,Math.round(n)));return`#${[s(e),s(t),s(a)].map(n=>n.toString(16).padStart(2,"0")).join("")}`}function zt(e,t,a){const s=ka(e),n=ka(t);return fr({r:s.r*a+n.r*(1-a),g:s.g*a+n.g*(1-a),b:s.b*a+n.b*(1-a)})}function mr(e){const{r:t,g:a,b:s}=ka(e),n=i=>{const o=i/255;return o<=.03928?o/12.92:((o+.055)/1.055)**2.4};return .2126*n(t)+.7152*n(a)+.0722*n(s)}function ys(e){return mr(e)>.42?"#1a1917":"#ffffff"}function gn(e){const t=document.documentElement.classList.contains("light-mode"),a=t?"#faf8f4":"#101013",s=t?"#efece4":"#17171c",n=t?.06:.1,i=zt(e,a,n),o=zt(e,s,n*1.25),l=zt(e,t?"#e9e5dc":"#1d1d23",n*1.4),c=zt(e,t?"#ffffff":"#101013",t?.22:.3),u=document.body.style;u.setProperty("--primary",e),u.setProperty("--on-primary",ys(e)),u.setProperty("--primary-container",c),u.setProperty("--on-primary-container",ys(c)),u.setProperty("--surface",i),u.setProperty("--surface-container",o),u.setProperty("--surface-container-high",l),u.setProperty("--surface-container-highest",zt(e,l,.5)),u.setProperty("--surface-container-low",zt(e,i,.5))}function vr(){const e=document.body.style;["--primary","--on-primary","--primary-container","--on-primary-container","--surface","--surface-container","--surface-container-high","--surface-container-highest","--surface-container-low"].forEach(t=>e.removeProperty(t))}function Be(e){const t=Ua.some(s=>s.id===e),a=t?e:Ft.test(e||"")?e.toLowerCase():"violet";r.theme=a,document.body.dataset.theme=t?a:"custom",localStorage.setItem("rustream.theme",a),t?vr():gn(a)}function Ta(e){const t=e==="auto"?window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark":e;document.documentElement.classList.toggle("light-mode",t==="light"),r.theme&&Ft.test(r.theme)&&gn(r.theme)}(function(){const t=localStorage.getItem("colorMode")||"dark";Ta(t),window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{localStorage.getItem("colorMode")==="auto"&&Ta("auto")})})();const Xa=[{id:"compact",name:"Компактно"},{id:"default",name:"Обычно"},{id:"large",name:"Крупно"}];function bn(e){const t=Xa.some(a=>a.id===e)?e:"default";r.density=t,document.documentElement.dataset.density=t,localStorage.setItem("rustream.density",t)}(function(){bn(localStorage.getItem("rustream.density")||"default")})();async function yn(e){Be(e);try{await _a({theme:r.theme}),r.meSettings={...r.meSettings||{},theme:r.theme}}catch(t){w(t.message,"error")}}function gr(e){var u,m,h,v,y,$,L,q,I;const t=r.meSettings||{},a=(u=r.authConfig)==null?void 0:u.lastfm,s=r.lastfmConfig||{},n=localStorage.getItem("colorMode")||"dark",i=r.density||"default",o=[["profile","person","Профиль"],["appearance","palette","Оформление"],["playback","wave","Воспроизведение"],["scrobbling","radio","Скробблинг"],["security","shield","Безопасность"],["library","library","Библиотека"],...(m=r.me)!=null&&m.isAdmin?[["users","person","Пользователи"]]:[],["about","sparkle","О сервисе"]],l=o.some(([E])=>E===r.settingsTab)?r.settingsTab:"profile",c=(E,N)=>`<section class="settings-panel" data-settings-panel="${E}" ${E===l?"":"hidden"}>${N}</section>`;return`
    <div class="settings-shell">
      <nav class="settings-nav" aria-label="Разделы настроек">
        ${o.map(([E,N,j])=>`<button type="button" class="settings-nav-item ${E===l?"active":""}" data-settings-tab="${E}">
              ${d(N)}<span>${j}</span>
            </button>`).join("")}
      </nav>

      <div class="settings-pane">
        ${c("profile",`<h4>${d("person")} Профиль</h4>
           <form id="settings-profile-form" class="settings-form">
             <label class="field"><span>Отображаемое имя</span>
               <input class="input" id="settings-display-name" value="${g(((h=r.me)==null?void 0:h.displayName)||"")}" />
             </label>
             <button class="btn tonal" type="submit">Сохранить имя</button>
           </form>
           <div class="settings-meta">
             <span>Логин: <strong>${g(((v=r.me)==null?void 0:v.username)||"")}</strong></span>
             ${(y=r.me)!=null&&y.isAdmin?'<span class="chip">администратор</span>':""}
           </div>
           <div class="settings-hint">Аватар берётся из подключённого аккаунта YouTube Music. Подключить или обновить его можно на странице «Профиль».</div>`)}

        ${c("appearance",`<h4>${d("palette")} Оформление</h4>
           <p class="muted small">Тема сохраняется в аккаунте и применяется на всех устройствах. Режим и плотность — на этом устройстве.</p>
           <div class="settings-group">
             <span class="settings-label">Режим</span>
             <div class="theme-mode-picker">
               <button class="mode-btn ${n==="dark"?"active":""}" data-action="color-mode" data-mode="dark">${d("moon")} Тёмная</button>
               <button class="mode-btn ${n==="light"?"active":""}" data-action="color-mode" data-mode="light">${d("sun")} Светлая</button>
               <button class="mode-btn ${n==="auto"?"active":""}" data-action="color-mode" data-mode="auto">${d("settings")} Системная</button>
             </div>
           </div>
           <div class="settings-group">
             <span class="settings-label">Акцент</span>
             <div class="theme-picker">
               ${Ua.map(E=>`<button class="theme-swatch ${r.theme===E.id?"active":""}" data-action="theme" data-theme="${E.id}" title="${E.name}">
                   <span class="swatch-dot theme-${E.id}"></span><span>${E.name}</span>
                 </button>`).join("")}
               <label class="theme-swatch custom ${Ft.test(r.theme)?"active":""}" title="Свой цвет">
                 <input type="color" id="theme-custom" value="${Ft.test(r.theme)?r.theme:"#c7a6ff"}" aria-label="Свой цвет" />
                 <span>Свой цвет</span>
               </label>
             </div>
           </div>
           <div class="settings-group">
             <span class="settings-label">Плотность</span>
             <div class="theme-mode-picker">
               ${Xa.map(E=>`<button class="mode-btn ${i===E.id?"active":""}" data-action="density" data-value="${E.id}">${E.name}</button>`).join("")}
             </div>
           </div>`)}

        ${c("playback",`<h4>${d("wave")} Воспроизведение</h4>
           <p class="muted small">Экономия трафика просит у YouTube Music самый низкий битрейт (~48–64 kbps). Локальные файлы всегда играют как есть — FLAC остаётся FLAC.</p>
           <label class="settings-toggle">
             <input type="checkbox" id="settings-data-saver" ${t.dataSaver?"checked":""} />
             <span>Экономить трафик</span>
           </label>
           <div class="settings-hint">Формат и битрейт текущего трека видны в нижней панели и в «Инфо» плеера. Перемотка и громкость работают колесом мыши.</div>`)}

        ${c("scrobbling",`<h4>${d("radio")} Скробблинг</h4>
           <p class="muted small">История и статистика пишутся локально всегда. Внешние сервисы получают прослушивания только после подключения.</p>

           <div class="settings-sub">
             <div class="settings-sub-head">
               <h5>ListenBrainz</h5>
               <span class="settings-status"><span class="status-dot ${t.listenbrainzConnected?"on":""}"></span>${t.listenbrainzConnected?"подключён":"не подключён"}</span>
             </div>
             <p class="muted small">Бесплатно, без модерации и ключей приложения: нужен только личный токен.</p>
             <ol class="steps">
               <li>Откройте <a class="inline-link" href="https://listenbrainz.org/settings/" target="_blank" rel="noreferrer">listenbrainz.org/settings</a> и войдите.</li>
               <li>Скопируйте «User token».</li>
               <li>Вставьте его в поле ниже и сохраните.</li>
             </ol>
             <label class="field"><span>ListenBrainz token</span>
               <input class="input" id="settings-listenbrainz" name="listenbrainz-token" autocomplete="off" spellcheck="false" data-lpignore="true" placeholder="${t.listenbrainzConnected?"токен сохранён — вставьте новый, чтобы заменить":"токен из listenbrainz.org/settings"}" />
             </label>
             <div class="settings-inline">
               <button class="btn primary" data-settings-action="save-scrobbling" data-scope="listenbrainz">${d("check")} Сохранить токен</button>
               ${t.listenbrainzConnected?`<button class="btn ghost danger" data-settings-action="disconnect-scrobbling" data-service="listenbrainz">${d("logout")} Отключить</button>`:""}
             </div>
           </div>

           <div class="settings-sub">
             <div class="settings-sub-head">
               <h5>Last.fm</h5>
               <span class="settings-status"><span class="status-dot ${t.lastfmConnected?"on":""}"></span>${t.lastfmConnected?`подключён${t.lastfmUsername?` как ${g(t.lastfmUsername)}`:""}`:"не подключён"}</span>
             </div>
             <p class="muted small">Тоже бесплатно, но серверу нужны ключи приложения — их создаёт администратор один раз.</p>
             <div class="settings-inline">
               <button class="btn glass" data-settings-action="lastfm-connect" ${a?"":"disabled"}>${d("wave")} Подключить Last.fm</button>
               <button class="btn ghost" data-settings-action="lastfm-complete" ${t.lastfmConnected?"disabled":""}>Завершить</button>
               ${t.lastfmConnected?`<button class="btn ghost danger" data-settings-action="disconnect-scrobbling" data-service="lastfm">${d("logout")} Отключить</button>`:""}
             </div>
             ${a?"":'<p class="muted small">Для авторизации Last.fm нужны ключи приложения ниже (или в config.toml).</p>'}
             ${($=r.me)!=null&&$.isAdmin?`
               <div class="settings-sub">
                 <h5>Ключи приложения Last.fm</h5>
                 <p class="muted small">Создайте приложение на last.fm/api/account/create. Ключи пишутся в config.toml и применяются сразу.</p>
                 <label class="field"><span>API key</span>
                   <input class="input" id="settings-lastfm-api-key" name="lastfm-api-key" autocomplete="off" autocapitalize="none" spellcheck="false" data-lpignore="true" value="${g(s.apiKey||"")}" placeholder="32 символа" />
                 </label>
                 <label class="field"><span>API secret</span>
                   <input class="input" id="settings-lastfm-api-secret" name="lastfm-api-secret" type="password" autocomplete="new-password" data-lpignore="true" placeholder="${s.apiSecretSet?"секрет уже сохранён — оставьте пустым":"секрет приложения"}" />
                 </label>
                 <div class="settings-inline">
                   <button class="btn tonal" data-settings-action="save-lastfm-app">Сохранить ключи приложения</button>
                   <button class="btn ghost danger" data-settings-action="clear-lastfm-app">Удалить ключи</button>
                 </div>
               </div>`:""}
             <label class="field"><span>Last.fm session key (вручную)</span>
               <input class="input" id="settings-lastfm-key" name="lastfm-session-key" autocomplete="off" spellcheck="false" data-lpignore="true" placeholder="оставьте пустым, чтобы не менять" />
             </label>
             <button class="btn tonal" data-settings-action="save-scrobbling" data-scope="lastfm">Сохранить Last.fm</button>
           </div>`)}

        ${c("security",`<h4>${d("shield")} Безопасность</h4>
           <form id="settings-password-form" class="settings-form">
             <label class="field"><span>Текущий пароль</span>
               <span class="input-wrap">
                 <input class="input" id="settings-current-password" type="password" autocomplete="current-password" />
                 <button class="reveal-btn" type="button" data-action="toggle-password" data-target="settings-current-password" aria-label="Показать пароль">${d("eye")}</button>
               </span>
             </label>
             <label class="field"><span>Новый пароль</span>
               <span class="input-wrap">
                 <input class="input" id="settings-new-password" type="password" autocomplete="new-password" />
                 <button class="reveal-btn" type="button" data-action="toggle-password" data-target="settings-new-password" aria-label="Показать пароль">${d("eye")}</button>
               </span>
             </label>
             <button class="btn tonal" type="submit">Сменить пароль</button>
           </form>
           <div class="settings-sub">
             <h5>Subsonic API</h5>
             <p class="muted small">Для сторонних клиентов (Feishin, Symfonium, DSub и др.): сервер <code>${g(location.origin)}</code>, логин <code>${g(((L=r.me)==null?void 0:L.username)||"")}</code>, пароль — ваш пароль.</p>
             <div class="settings-inline">
               <input class="input settings-key" id="settings-api-key" readonly value="${g(t.subsonicApiKey||"—")}" />
               <button class="btn glass" data-settings-action="copy-api-key">${d("copy")} Скопировать ключ</button>
             </div>
           </div>
           <div class="settings-sub">
             <h5>Сеанс</h5>
             <p class="muted small">Вход действует 90 дней и продлевается автоматически, пока вы пользуетесь сайтом.</p>
             <button class="btn ghost danger" data-settings-action="logout">${d("logout")} Выйти из аккаунта</button>
           </div>`)}

        ${c("library",`<h4>${d("library")} Библиотека</h4>
           <p class="muted small">Сканер перечитывает папки каждые ${((q=r.authConfig)==null?void 0:q.scanInterval)||300} секунд. Новые файлы появятся автоматически.</p>
           <div class="settings-inline">
             <button class="btn glass" data-settings-action="rescan">${d("refresh")} Пересканировать сейчас</button>
             <button class="btn ghost danger" data-settings-action="clear-history">${d("delete")} Очистить историю</button>
           </div>`)}

        ${(I=r.me)!=null&&I.isAdmin?c("users",`<h4>${d("person")} Пользователи</h4>
                 <p class="muted small">Новый человек может войти двумя способами: вы создаёте ему логин и пароль здесь, либо выдаёте код приглашения — блок «Приглашения» на странице профиля.</p>
                 <div class="user-list" id="settings-user-list">
                   ${(e||[]).map(E=>{var N;return`
                     <div class="user-row">
                       <span class="user-avatar small">${g(za(E.displayName||E.username))}</span>
                       <span class="user-row-main"><strong>${g(E.displayName||E.username)}</strong><small>@${g(E.username)}${E.isAdmin?" · админ":""}</small></span>
                       ${E.id===((N=r.me)==null?void 0:N.id)?'<span class="chip">вы</span>':`<button class="icon-btn" data-settings-action="delete-user" data-id="${E.id}" title="Удалить">${d("delete")}</button>`}
                     </div>`}).join("")}
                 </div>
                 <div class="settings-form user-create">
                   <label class="field"><span>Логин</span><input class="input" id="new-user-name" autocapitalize="none" /></label>
                   <label class="field"><span>Пароль</span>
                     <span class="input-wrap">
                       <input class="input" id="new-user-password" type="password" autocomplete="new-password" />
                       <button class="reveal-btn" type="button" data-action="toggle-password" data-target="new-user-password" aria-label="Показать пароль">${d("eye")}</button>
                     </span>
                   </label>
                   <label class="field"><span>Имя</span><input class="input" id="new-user-display" /></label>
                   <label class="checkline"><input type="checkbox" id="new-user-admin" /> Администратор</label>
                   <button class="btn tonal" data-settings-action="create-user">Добавить пользователя</button>
                 </div>`):""}

        ${c("about",`<h4>${d("sparkle")} О сервисе</h4>
           <div class="info-list">
             <div class="info-row"><span>Сервер</span><strong>Rustream ${g(r.version||"0.1.0")}</strong></div>
             <div class="info-row"><span>API</span><strong>Subsonic 1.16.1 · OpenSubsonic</strong></div>
             <div class="info-row"><span>Адрес</span><strong>${g(location.origin)}</strong></div>
             <div class="info-row"><span>Расширения</span><strong>songLyrics</strong></div>
           </div>
           <p class="muted small">Локальная библиотека сканируется автоматически, YouTube Music работает через ваш аккаунт, тексты песен приходят из LRCLIB с построчной и пословной синхронизацией.</p>`)}
      </div>
    </div>`}async function _t(){if(!r.me)return jt();let e=[];if(r.me.isAdmin)try{[e,r.lastfmConfig]=await Promise.all([Fn(),We().catch(()=>({}))])}catch(t){Bt(t)}je({title:"Аккаунт и настройки",wide:!0,body:gr(e),onMount:t=>{var a,s,n;(a=p("#settings-profile-form",t))==null||a.addEventListener("submit",async i=>{i.preventDefault();try{await Ja(p("#settings-display-name",t).value.trim()),r.me.displayName=p("#settings-display-name",t).value.trim(),hn(),w("Имя обновлено")}catch(o){w(o.message,"error")}}),(s=p("#settings-data-saver",t))==null||s.addEventListener("change",async i=>{const o=i.target.checked;try{await _a({dataSaver:o}),r.meSettings={...r.meSettings||{},dataSaver:o},w(o?"Экономия трафика включена":"Максимальное качество")}catch(l){i.target.checked=!o,w(l.message,"error")}}),(n=p("#settings-password-form",t))==null||n.addEventListener("submit",async i=>{i.preventDefault();try{await Hn(p("#settings-current-password",t).value,p("#settings-new-password",t).value),p("#settings-current-password",t).value="",p("#settings-new-password",t).value="",w("Пароль изменён")}catch(o){w(o.message,"error")}}),t.addEventListener("click",async i=>{var m;const o=i.target.closest("[data-theme-choice]");if(o){const h=o.dataset.themeChoice;Be(h),R(".theme-swatch",t).forEach(v=>v.classList.toggle("active",v.dataset.themeChoice===h));try{await Ja(r.me.displayName||r.me.username,h),r.meSettings={...r.meSettings||{},theme:h},w("Тема сохранена")}catch(v){w(v.message,"error")}return}const l=i.target.closest("[data-settings-tab]");if(l){r.settingsTab=l.dataset.settingsTab,R("[data-settings-tab]",t).forEach(h=>h.classList.toggle("active",h.dataset.settingsTab===r.settingsTab)),R("[data-settings-panel]",t).forEach(h=>{h.hidden=h.dataset.settingsPanel!==r.settingsTab});return}const c=i.target.closest("[data-settings-action]");if(!c)return;const u=c.dataset.settingsAction;if(u==="copy-api-key"){const h=((m=p("#settings-api-key",t))==null?void 0:m.value)||"";try{await navigator.clipboard.writeText(h),w("Ключ API скопирован")}catch{w("Браузер не дал скопировать ключ","error")}return}if(u==="disconnect-scrobbling"){const h=c.dataset.service,v=h==="listenbrainz"?"ListenBrainz":"Last.fm";if(!confirm(`Отключить ${v}? Уже отправленные прослушивания останутся там.`))return;try{await Nn(h);const y=await be();r.meSettings=y.settings,w(`${v} отключён`),Q(),_t()}catch(y){w(y.message,"error")}return}if(u==="logout"){await Es().catch(()=>{}),location.reload();return}if(u==="rescan"){c.classList.add("spin"),await xs().catch(h=>w(h.message,"error")),setTimeout(()=>{c.classList.remove("spin"),w("Сканирование запущено")},1200);return}if(u==="clear-history"){if(!confirm("Удалить всю историю прослушиваний этого аккаунта?"))return;try{await Un(),S.meStats=null,r.meStats=null,w("История очищена");const h=await be();r.meSettings=h.settings}catch(h){w(h.message,"error")}return}if(u==="lastfm-connect"){try{const h=await Wn();window.open(h.url,"_blank","noopener"),w("Подтвердите доступ на Last.fm, затем нажмите «Завершить»")}catch(h){w(h.message,"error")}return}if(u==="lastfm-complete"){try{const h=await Gn();w(`Last.fm подключён${h.username?`: ${h.username}`:""}`);const v=await be();r.meSettings=v.settings,Q(),_t()}catch(h){w(h.message,"error")}return}if(u==="save-lastfm-app"){try{await Ka(p("#settings-lastfm-api-key",t).value.trim(),p("#settings-lastfm-api-secret",t).value.trim());const h=await We();r.lastfmConfig=h,r.authConfig=await ua(),w("Ключи Last.fm сохранены в config.toml"),p("#settings-lastfm-api-secret",t).value=""}catch(h){w(h.message,"error")}return}if(u==="clear-lastfm-app"){if(!confirm("Удалить ключи приложения Last.fm из config.toml?"))return;try{await Ka("","",!0),r.lastfmConfig=await We(),r.authConfig=await ua(),w("Ключи Last.fm удалены"),Q(),_t()}catch(h){w(h.message,"error")}return}if(u==="save-scrobbling"){const h=c.dataset.scope||"both",v={};h!=="lastfm"&&(v.listenbrainzToken=p("#settings-listenbrainz",t).value.trim()),h!=="listenbrainz"&&(v.lastfmSessionKey=p("#settings-lastfm-key",t).value.trim());try{await Rn(v),w(h==="listenbrainz"?"Токен ListenBrainz сохранён":"Last.fm сохранён");const y=await be();r.meSettings=y.settings,Q(),_t()}catch(y){w(y.message,"error")}return}if(u==="create-user"){try{await Bn({username:p("#new-user-name",t).value.trim(),password:p("#new-user-password",t).value,displayName:p("#new-user-display",t).value.trim(),isAdmin:p("#new-user-admin",t).checked}),w("Пользователь создан"),Q(),_t()}catch(h){w(h.message,"error")}return}if(u==="delete-user"){if(!confirm("Удалить пользователя и все его данные?"))return;try{await Xn(c.dataset.id),w("Пользователь удалён"),Q(),_t()}catch(h){w(h.message,"error")}}})}})}function br(){const e=localStorage.getItem("colorMode")||"dark";return`
    <div class="theme-mode-picker">
      <button class="mode-btn ${e==="dark"?"active":""}" data-action="color-mode" data-mode="dark">
        ${d("moon")} Тёмная
      </button>
      <button class="mode-btn ${e==="light"?"active":""}" data-action="color-mode" data-mode="light">
        ${d("sun")} Светлая
      </button>
      <button class="mode-btn ${e==="auto"?"active":""}" data-action="color-mode" data-mode="auto">
        ${d("settings")} Системная
      </button>
    </div>
    <div class="theme-picker">
      ${Ua.map(t=>`<button class="theme-swatch ${r.theme===t.id?"active":""}" data-action="theme" data-theme="${t.id}">
          <span class="swatch-dot theme-${t.id}"></span><span>${t.name}</span>
        </button>`).join("")}
      <label class="theme-swatch custom ${Ft.test(r.theme)?"active":""}" title="Свой цвет">
        <input type="color" id="theme-custom" value="${Ft.test(r.theme)?r.theme:"#c7a6ff"}" aria-label="Свой цвет" />
        <span>Свой цвет</span>
      </label>
    </div>`}function yr(e){const t=e==null?void 0:e.account;return e!=null&&e.connected?`
      <div class="ytm-account">
        ${t!=null&&t.photo?`<img class="ytm-avatar" src="${g(t.photo)}" alt="" referrerpolicy="no-referrer" />`:`<span class="ytm-avatar fallback">${d("person")}</span>`}
        <div class="ytm-account-main">
          <strong>${g((t==null?void 0:t.name)||"Аккаунт YouTube")}</strong>
          <small>${g((t==null?void 0:t.handle)||"")}${e.updatedAt?` · обновлено ${new Date(e.updatedAt*1e3).toLocaleDateString("ru-RU")}`:""}</small>
        </div>
        <div class="head-actions">
          <button class="btn glass" data-action="ytm-reconnect">${d("refresh")} Обновить cookies</button>
          <button class="btn ghost danger" data-action="ytm-disconnect">${d("logout")} Отключить</button>
        </div>
      </div>`:`
    <form id="ytm-connect-form" class="ytm-connect">
      <ol class="steps">
        <li>Откройте <a class="inline-link" href="https://music.youtube.com" target="_blank" rel="noreferrer">music.youtube.com</a> и войдите в аккаунт.</li>
        <li>Установите расширение <strong>Cookie-Editor</strong> и нажмите <strong>Export → JSON</strong>.</li>
        <li>Вставьте экспорт целиком в поле ниже — сервер сам разберёт формат.</li>
      </ol>
      <label class="field"><span>Cookies music.youtube.com</span>
        <textarea class="input" id="ytm-cookies" rows="5" spellcheck="false" autocomplete="off"
          placeholder='[{"name":"SAPISID","value":"…","domain":".youtube.com"}]  или  SAPISID=…; __Secure-3PAPISID=…'></textarea>
      </label>
      <p class="muted small">Нужны как минимум <code>SAPISID</code> и <code>__Secure-3PAPISID</code>. Cookies шифруются и используются только для вашего профиля.</p>
      <button class="btn primary" type="submit" id="ytm-connect-submit">${d("check")} Подключить</button>
      <p class="form-error" id="ytm-connect-error" role="alert"></p>
    </form>`}function wr(e){return`
    <section class="section glass-card">
      <div class="section-head">
        <div>
          <h2>${d("ticket")} Приглашения</h2>
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
        <button class="btn primary" type="submit">${d("add")} Создать код</button>
      </form>
      <div class="invite-list">
        ${e.length?e.map(t=>`<div class="invite-row ${t.valid?"":"expired"}">
                  <span class="invite-code">${g(t.code)}</span>
                  <span class="invite-meta">
                    <small>${g(t.note||"без заметки")} · ${t.uses}/${t.maxUses||"∞"} · ${t.isAdmin?"админ":"слушатель"}</small>
                    <small>${t.expiresAt?`до ${new Date(t.expiresAt*1e3).toLocaleDateString("ru-RU")}`:"без срока"}${t.valid?"":" · недействительно"}</small>
                  </span>
                  <button class="icon-btn" data-action="invite-copy" data-code="${g(t.code)}" title="Скопировать ссылку">${d("link")}</button>
                  <button class="icon-btn" data-action="invite-revoke" data-code="${g(t.code)}" title="Отозвать">${d("delete")}</button>
                </div>`).join(""):'<div class="empty-inline">Пока ни одного приглашения</div>'}
      </div>
    </section>`}const ws=[{id:"playlists",label:"Плейлисты"},{id:"albums",label:"Альбомы"},{id:"artists",label:"Артисты"},{id:"tracks",label:"Треки"},{id:"favorites",label:"Избранное"},{id:"recent",label:"Недавние"}];async function $r(e,t="playlists"){B(),ws.some(h=>h.id===t)||(t="playlists");const[a,s,n,i,o,l,c]=await Promise.all([Yi().catch(()=>({})),t==="playlists"?xa().catch(()=>[]):Promise.resolve(null),t==="albums"?Qs():Promise.resolve(null),t==="artists"?qa():Promise.resolve(null),t==="tracks"?de():Promise.resolve(null),t==="favorites"?Ia():Promise.resolve(null),t==="recent"?La("newest",40).catch(()=>[]):Promise.resolve(null)]);if(e!==r.renderSeq)return;let u="",m="";if(t==="playlists")S.playlists=s,s.length,m=`<button class="btn primary" data-action="new-playlist">${d("add")} Новый плейлист</button>`,u=s.length?`<div class="grid cards">${s.map(Zs).join("")}</div>`:`<div class="empty-state"><span class="empty-icon">${d("playlist")}</span><h2>Плейлистов пока нет</h2><p>Соберите подборку из любимых треков.</p><button class="btn primary" data-action="new-playlist">${d("add")} Создать</button></div>`;else if(t==="albums"||t==="recent"){const h=t==="albums"?n:c;h.length,r.currentTracks=[],u=`<div class="grid cards">${h.map(Ut).join("")}</div>`}else if(t==="artists")i.length,r.currentTracks=[],u=`<div class="grid cards">${i.map(Ye).join("")}</div>`;else if(t==="tracks")o.length,r.currentTracks=o,u=W(o,{showCover:!0}),m=`<button class="btn primary" data-action="play-all">${d("play")} Слушать</button>
               <button class="btn glass" data-action="shuffle-all">${d("shuffle")} Перемешать</button>`;else if(t==="favorites"){const h=l.song||[];h.length,r.currentTracks=h,u=h.length?W(h,{showCover:!0}):`<div class="empty-state"><span class="empty-icon">${d("heartOutline")}</span><h2>Здесь пока пусто</h2><p>Нажимайте на сердечко у трека, чтобы добавить его в избранное.</p></div>`,m=h.length?`<button class="btn primary" data-action="play-all">${d("play")} Слушать</button>`:""}p("#view").innerHTML=`
    <div class="page library-page">
      <header class="page-head">
        <div>
          <span class="eyebrow">Коллекция</span>
          <h1>Медиатека</h1>
          <p class="muted">${a.tracks||0} ${at(a.tracks||0,"трек","трека","треков")} · ${ce(a.sizeBytes||0)}</p>
        </div>
        ${m?`<div class="head-actions">${m}</div>`:""}
      </header>

      <nav class="library-tabs" aria-label="Разделы медиатеки">
        ${ws.map(h=>`<a href="#/library/${h.id}" class="library-tab ${h.id===t?"active":""}" ${h.id===t?'aria-current="page"':""}>${h.label}</a>`).join("")}
      </nav>

      <div class="library-content" data-library-tab="${t}">
        ${u}
      </div>
    </div>`}async function Sr(e){var o,l,c,u;B();const t=!!((o=r.me)!=null&&o.isAdmin),[a,s]=await Promise.all([Re().catch(()=>({connected:!1,account:null})),t?Jn().catch(()=>[]):Promise.resolve([])]);if(e!==r.renderSeq)return;r.ytmStatus=a,p("#view").innerHTML=`
    <div class="page profile-page">
      <header class="page-head">
        <div class="profile-identity">
          ${lr(Ce(),"user-avatar xl")}
          <div>
            <h1>${g(Ce())}</h1>
            <p class="muted">@${g(((l=r.me)==null?void 0:l.username)||"")}${t?" · администратор":""}</p>
          </div>
        </div>
        <div class="head-actions">
          <button class="btn glass" data-action="open-settings">${d("settings")} Настройки</button>
          <button class="btn ghost danger" data-action="logout">${d("logout")} Выйти</button>
        </div>
      </header>

      <section class="section glass-card">
        <div class="section-head">
          <div>
            <h2>${d("ytm")} YouTube Music</h2>
            <p class="muted">Cookies хранятся зашифрованными и используются только для вашего профиля: поиск, лайки и прослушивание.</p>
          </div>
          <span class="status-chip ${a.connected?"on":""}">${a.connected?"подключено":"не подключено"}</span>
        </div>
        ${yr(a)}
      </section>

      <section class="section glass-card">
        <h2>${d("palette")} Оформление</h2>
        <p class="muted small">Тема сохраняется в аккаунте и применяется на всех устройствах.</p>
        ${br()}
      </section>

      <section class="section glass-card">
        <h2>${d("expand")} Плотность</h2>
        <p class="muted small">Сколько строк и обложек помещается на экране.</p>
        <div class="theme-mode-picker">
          ${Xa.map(m=>`<button class="mode-btn ${(r.density||"default")===m.id?"active":""}" data-action="density" data-value="${m.id}">${m.name}</button>`).join("")}
        </div>
      </section>

      ${t?wr(s):""}
    </div>`;const n=p("#ytm-connect-form");n==null||n.addEventListener("submit",async m=>{m.preventDefault();const h=p("#ytm-connect-submit"),v=p("#ytm-connect-error"),y=p("#ytm-cookies").value.trim();if(v.textContent="",!y){v.textContent="Вставьте cookies";return}h.disabled=!0;try{await ei(y),w("YouTube Music подключён"),z()}catch($){v.textContent=$.message||"Не удалось подключить"}finally{h.disabled=!1}});const i=p("#invite-form");i==null||i.addEventListener("submit",async m=>{var h;m.preventDefault();try{const v=await Kn({note:p("#invite-note").value.trim(),expiresInDays:Number(p("#invite-days").value||0),maxUses:Number(p("#invite-uses").value||0),isAdmin:p("#invite-admin").checked});await((h=navigator.clipboard)==null?void 0:h.writeText(_s(v.code)).catch(()=>{})),w("Код создан, ссылка скопирована"),z()}catch(v){w(v.message,"error")}}),(c=p("#theme-custom"))==null||c.addEventListener("input",m=>Be(m.target.value)),(u=p("#theme-custom"))==null||u.addEventListener("change",async m=>{await yn(m.target.value),z()})}const wn=[{id:"search",label:"Поиск"},{id:"liked",label:"Лайки"},{id:"history",label:"История"},{id:"connect",label:"Подключение"}];function $s(e){return`<nav class="library-tabs ytm-tabs" aria-label="Разделы YouTube Music">
    ${wn.map(t=>`<a href="#/ytm/${t.id}" class="library-tab ${t.id===e?"active":""}" ${t.id===e?'aria-current="page"':""}>${t.label}</a>`).join("")}
  </nav>`}async function kr(e,t="search"){var h,v;B(),wn.some(y=>y.id===t)||(t="search");const a=r.ytmStatus||await Re().catch(()=>null);if(e!==r.renderSeq)return;if(r.ytmStatus=a,!(a!=null&&a.connected)){p("#view").innerHTML=`
      <div class="page ytm-page">
        <header class="page-head">
          <div><span class="eyebrow">Источник</span><h1>YouTube Music</h1></div>
        </header>
        ${$s(t)}
        <section class="section glass-card empty-state">
          <span class="empty-icon">${d("ytm")}</span>
          <h2>Подключите свой аккаунт</h2>
          <p class="muted">Поиск и лайки YouTube Music будут доступны только вам. Нужны cookies с music.youtube.com — вставьте их в профиле, подключение занимает минуту.</p>
          <a class="btn primary" href="#/profile">${d("settings")} Перейти в профиль</a>
        </section>
      </div>`;return}r.ytmLists=r.ytmLists||{history:[],liked:[],search:[]};const s=(y,$)=>W(y,{showCover:!0,rowAction:"play-ytm-row",rowList:$});p("#view").innerHTML=`
    <div class="page ytm-page">
      <header class="page-head">
        <div>
          <span class="eyebrow">Источник</span>
          <h1>YouTube Music</h1>
          <p class="muted">${g(((h=a.account)==null?void 0:h.name)||"Подключено")}${(v=a.account)!=null&&v.handle?` · ${g(a.account.handle)}`:""}</p>
        </div>
        <div class="head-actions">
          <button class="btn glass" data-action="ytm-liked">${d("heart")} Обновить лайки</button>
        </div>
      </header>

      ${$s(t)}

      <div class="ytm-panel" data-ytm-panel="search">
      <form id="ytm-search-form" class="search-row">
        <label class="searchbox glass">
          ${d("search")}
          <input id="ytm-search-input" type="search" placeholder="Треки, артисты, альбомы…" enterkeyhint="search" autocomplete="off" />
        </label>
        <button class="btn primary" type="submit">${d("search")} Искать</button>
      </form>

      <div class="chip-row">
        ${[["Новинки","новинки музыка 2026"],["Хиты","популярные песни"],["Русское","русская музыка"],["Электроника","electronic mix"],["Лоу-фай","lofi beats"],["Рок","rock classics"],["Джаз","jazz standards"]].map(([y,$])=>`<button class="chip-btn" data-action="ytm-preset" data-query="${g($)}">${y}</button>`).join("")}
      </div>

      <section class="section" id="ytm-results" hidden></section>
      </div>

      <section class="section" data-ytm-panel="history" id="ytm-history-section" hidden>
        <div class="section-head">
          <div>
            <h2>${d("ytm")} Недавно из YouTube</h2>
            <p class="muted">Треки, которые вы уже слушали — можно вернуться без нового поиска</p>
          </div>
        </div>
        <div id="ytm-history"></div>
      </section>

      <section class="section" data-ytm-panel="liked" id="ytm-liked-section" hidden>
        <div class="section-head">
          <div>
            <h2>${d("heart")} Мои лайки</h2>
            <p class="muted">Треки, которым вы поставили лайк в YouTube Music</p>
          </div>
        </div>
        <div id="ytm-liked"></div>
      </section>

      <section class="section" id="ytm-empty" hidden>
        <div class="empty-state">
          <span class="empty-icon">${d("ytm")}</span>
          <h2>Пока пусто</h2>
          <p>Найдите трек через поиск выше — он появится здесь и на главной.</p>
        </div>
      </section>
    </div>`;const n=p("#ytm-search-form"),i=p("#ytm-search-input"),o=p("#ytm-results"),l=(y,$,L,q)=>{const I=p(y);if(!I)return;const E=I.querySelector("div[id]")||I;if(!L.length){I.hidden=!0;return}I.hidden=!1,E.innerHTML=s(L,$)},c=(y,$)=>{var L;r.ytmLists.search=y,o.hidden=!1,o.innerHTML=y.length?`<div class="section-head"><h2>${d("search")} Результаты</h2><span class="muted small">${y.length}</span></div>${s(y,"search")}`:`<div class="empty-inline">${g($)}</div>`,(L=p("#ytm-empty"))==null||L.setAttribute("hidden","")},u=async()=>{const y=i.value.trim();if(y){o.hidden=!1,o.innerHTML=`<div class="skel-rows">${'<div class="skeleton skeleton-line"></div>'.repeat(5)}</div>`;try{const $=await As(y);if(e!==r.renderSeq)return;c($,"Ничего не найдено")}catch($){if(Bt($))return;o.innerHTML=`<div class="empty-inline">${g($.message)}</div>`}}};n.addEventListener("submit",y=>{y.preventDefault(),u()});let m;i.addEventListener("input",()=>{clearTimeout(m),m=setTimeout(()=>{i.value.trim().length>=2&&u()},500)}),R("[data-ytm-panel]").forEach(y=>{y.dataset.ytmPanel==="search"?y.hidden=t!=="search":y.hidden=y.dataset.ytmPanel!==t}),(async()=>{const[y,$]=await Promise.allSettled([Ds(40),Ps(50)]);if(e!==r.renderSeq)return;if(y.status==="fulfilled"&&y.value.length&&(r.ytmLists.history=y.value,l("#ytm-history-section","history",y.value)),$.status==="fulfilled"&&$.value.length&&(r.ytmLists.liked=$.value,l("#ytm-liked-section","liked",$.value)),t==="history"&&!r.ytmLists.history.length||t==="liked"&&!r.ytmLists.liked.length){const q=p(t==="history"?"#ytm-history-section":"#ytm-liked-section");if(q){q.hidden=!1;const I=q.querySelector("div[id]")||q;I.innerHTML='<div class="empty-inline">Пока пусто — найдите трек на вкладке «Поиск».</div>'}}t==="search"&&(p("#ytm-empty").hidden=!0)})()}document.addEventListener("error",e=>{const t=e.target;t instanceof HTMLImageElement&&t.closest(".cover")&&t.remove()},!0);document.addEventListener("click",async e=>{var s,n,i,o;const t=e.target.closest("[data-action]");if(!t)return;const a=t.dataset.action;if(a==="open"){location.hash=t.dataset.href;return}if(a==="play-row"){const l=Number(t.dataset.index);if(e.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]'))return;Z(!1),await f.playTracks(r.currentTracks,l);return}if(a==="play-list-row"){const l=Number(t.dataset.index);if(e.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]'))return;const c=(s=r.lists)==null?void 0:s[t.dataset.list];if(!(c!=null&&c.length))return;Z(!1),await f.playTracks(c,l);return}if(a==="play-ytm-row"){const l=Number(t.dataset.index);if(e.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]'))return;const c=(n=r.ytmLists)==null?void 0:n[t.dataset.list];if(!(c!=null&&c.length))return;Z(!1),await f.playTracks(c,l),si(c.slice(l+1,l+3).map(u=>u.id));return}if(a==="play-all"){if(!r.currentTracks.length)return w("Список пуст","warn");Z(!1),await f.playTracks(r.currentTracks,0);return}if(a==="shuffle-all"){if(!r.currentTracks.length)return w("Список пуст","warn");Z(!1),await f.playTracks(r.currentTracks,0,{shuffle:!0});return}if(a==="shuffle-library"){const l=await de();r.currentTracks=l,await f.playTracks(l,0,{shuffle:!0});return}if(a==="play-library"){const l=await de();if(!l.length)return w("Библиотека пуста","warn");r.currentTracks=l,Z(!1),await f.playTracks(l,0);return}if(a==="start-live"){await pr();return}if(a==="play-mix"){await hr(Number(t.dataset.index));return}if(a==="open-settings"){await _t();return}if(a==="shortcuts"){$n();return}if(a==="history-back"){history.back();return}if(a==="history-forward"){history.forward();return}if(a==="theme"){await yn(t.dataset.theme),R('[data-action="theme"]').forEach(l=>l.classList.toggle("active",l.dataset.theme===r.theme));return}if(a==="color-mode"){const l=t.dataset.mode;localStorage.setItem("colorMode",l),Ta(l),R('[data-action="color-mode"]').forEach(c=>c.classList.toggle("active",c.dataset.mode===l)),w(`Режим: ${l==="dark"?"тёмный":l==="light"?"светлый":"системный"}`);return}if(a==="toggle-password"){const l=document.getElementById(t.dataset.target);if(!l)return;const c=l.type==="password";l.type=c?"text":"password",t.innerHTML=d(c?"eyeOff":"eye"),t.setAttribute("aria-label",c?"Скрыть пароль":"Показать пароль");return}if(a==="density"){const l=t.dataset.value;bn(l),R('[data-action="density"]').forEach(c=>c.classList.toggle("active",c.dataset.value===l));return}if(a==="logout"){await Es().catch(()=>{}),location.reload();return}if(a==="ytm-disconnect"){if(!confirm("Отключить YouTube Music? Cookies и скачанный кэш этого профиля будут удалены."))return;try{await ai(),r.ytmStatus={connected:!1,account:null},w("YouTube Music отключён"),z()}catch(l){w(l.message,"error")}return}if(a==="ytm-reconnect"){r.ytmStatus={connected:!1,account:null},p("#view").innerHTML="",z();return}if(a==="run-search"){wa(t.dataset.query||"");return}if(a==="clear-searches"){localStorage.removeItem(Ha),z();return}if(a==="ytm-preset"){const l=t.dataset.query||"";if(!l)return;const c=p("#ytm-results");c&&(c.hidden=!1,c.innerHTML=`<div class="empty-inline">Ищу «${g(l)}»…</div>`);try{const u=await As(l);r.ytmLists=r.ytmLists||{},r.ytmLists.search=u,c&&(c.innerHTML=u.length?`<div class="section-head"><h2>${d("search")} ${g(l)}</h2><span class="muted small">${u.length}</span></div>${W(u,{showCover:!0,rowAction:"play-ytm-row",rowList:"search"})}`:'<div class="empty-inline">Ничего не найдено</div>')}catch(u){c&&(c.innerHTML=`<div class="empty-inline">${g(u.message)}</div>`)}return}if(a==="ytm-liked"){const l=p("#ytm-liked-section"),c=p("#ytm-liked");c&&(c.innerHTML='<div class="empty-inline">Загружаю лайки…</div>');try{const u=await Ps(200);r.ytmLists=r.ytmLists||{},r.ytmLists.liked=u,l&&(l.hidden=!1),c&&(c.innerHTML=u.length?W(u,{showCover:!0,rowAction:"play-ytm-row",rowList:"liked"}):'<div class="empty-inline">В YouTube Music пока нет лайков</div>'),w(`Лайков: ${u.length}`)}catch(u){c&&(c.innerHTML=`<div class="empty-inline">${g(u.message)}</div>`)}return}if(a==="invite-copy"){await((i=navigator.clipboard)==null?void 0:i.writeText(_s(t.dataset.code)).catch(()=>{})),w("Ссылка скопирована");return}if(a==="invite-revoke"){if(!confirm("Отозвать приглашение?"))return;try{await Qn(t.dataset.code),w("Приглашение отозвано"),z()}catch(l){w(l.message,"error")}return}if(a==="play-album"){e.stopPropagation(),Z(!1),await sr(t.dataset.id);return}if(a==="play-artist"){Z(!1),await vs(t.dataset.id,!1);return}if(a==="shuffle-artist"){Z(!1),await vs(t.dataset.id,!0);return}if(a==="like"){e.stopPropagation(),await ue(t.dataset.id);return}if(a==="like-current"){f.track&&await ue(f.track.id),pe();return}if(a==="dislike"){e.stopPropagation(),await $a(t.dataset.id);return}if(a==="dislike-current"){f.track&&await $a(f.track.id),pe();return}if(a==="add-to-playlist"){e.stopPropagation(),await nr(t.dataset.id);return}if(a==="remove-from-playlist"){e.stopPropagation();try{await An(t.dataset.playlist,Number(t.dataset.index)),w("Трек убран из плейлиста"),z()}catch(l){w(l.message,"error")}return}if(a==="resume"){f.track?(f.clearRestored(),await f.toggle()):r.currentTracks.length&&await f.playTracks(r.currentTracks,0),location.hash.startsWith("#/home")&&z();return}if(a==="toggle"){!f.track&&r.currentTracks.length?await f.playTracks(r.currentTracks,0):await f.toggle();return}if(a==="prev")return f.previous();if(a==="next")return f.next();if(a==="shuffle")return f.toggleShuffle();if(a==="repeat")return f.cycleRepeat();if(a==="mute")return f.toggleMute();if(a==="nowplaying")return ot(r.npTab);if(a==="open-lyrics")return ot("lyrics");if(a==="open-eq")return ot("eq");if(a==="open-queue")return ot("queue");if(a==="close-np")return Yt();if(a==="jump-album"){(o=f.track)!=null&&o.albumId&&(Yt(),location.hash=`#/album/${f.track.albumId}`);return}if(a==="play-queue"){Z(!1),await f.playAt(Number(t.dataset.index));return}if(a==="new-playlist")return e.preventDefault(),ir();if(a==="delete-playlist"){if(!confirm("Удалить этот плейлист?"))return;await Pn(t.dataset.id),w("Плейлист удалён"),S.playlists=null,location.hash="#/playlists";return}if(a==="reload")return z();if(a==="reset-eq"){f.resetEq(),Fe(p("#np-page-eq"));return}if(a==="refresh-lyrics"){if(!f.track)return;r.lyricsRefresh=!0,r.lyricsTrackId=null,ln(p("#np-page-lyrics"),f.track);return}});p("#np").addEventListener("click",e=>{const t=e.target.closest("[data-np-tab]");t&&nn(t.dataset.npTab);const a=e.target.closest("[data-eq-preset]");a&&(f.applyEqPreset(a.dataset.eqPreset),Fe(p("#np-page-eq")))});p("#np").addEventListener("input",e=>{if(e.target.id==="np-seek"){f.seekTo(Number(e.target.value)),Pt();return}if(e.target.id==="np-volume"){f.setVolume(Number(e.target.value)),ve();return}});p("#np").addEventListener("change",e=>{var t;e.target.id==="eq-enabled"&&(f.setEqEnabled(e.target.checked),(t=p(".eq"))==null||t.classList.toggle("disabled",!e.target.checked))});p("#seek").addEventListener("input",e=>{f.seekTo(Number(e.target.value)),Pt()});p("#volume").addEventListener("input",e=>{f.setVolume(Number(e.target.value)),ve()});document.addEventListener("wheel",e=>{var s,n;if(!((n=(s=e.target).closest)==null?void 0:n.call(s,"#volume, #np-volume")))return;e.preventDefault();const a=e.deltaY<0?4:-4;f.setVolume(Math.min(100,Math.max(0,f.volumePercent+a))),ve()},{passive:!1});const ra=["home","live","library","stats","search"],ae={home:"#/home",live:"#/live",library:"#/library/playlists",stats:"#/stats",search:"#/search"};let ke=0;function Tr(e){var a;const t=e.target;return["INPUT","TEXTAREA","SELECT"].includes(t==null?void 0:t.tagName)||(t==null?void 0:t.isContentEditable)||((a=t==null?void 0:t.closest)==null?void 0:a.call(t,'[contenteditable="true"]'))}function Er(){return R('#view a[href], #view button:not([disabled]), #view [tabindex="0"], #playerbar button:not([disabled]), #playerbar input:not([disabled]), .tabbar a[href], .nav a[href], .nav button:not([disabled])').filter(e=>e.offsetParent!==null&&e.getAttribute("aria-hidden")!=="true")}function Mr(e){const t=Er();if(!t.length)return;const a=t.indexOf(document.activeElement);let s;a===-1?s=e>0?0:t.length-1:s=(a+e+t.length)%t.length,t[s].focus({preventScroll:!1})}function Lr(){const{parts:e}=Js();return Ks[e[0]||"home"]||"home"}function $n(){je({title:"Горячие клавиши",body:`<div class="shortcut-grid">${[["Tab / Shift+Tab","Следующий / предыдущий элемент"],["Стрелки","Перемещение по интерфейсу"],["Enter / Space","Нажать выбранный элемент"],["Alt+← / Alt+→","Назад / вперёд по истории"],["Ctrl+K или /","Поиск"],["Space","Пауза / продолжить"],["Shift+← / →","Перемотка на 5 секунд"],["L / D","Лайк / дизлайк трека"],["N / P","Следующий / предыдущий трек"],["Q","Очередь"],["F","Полноэкранный плеер"],["M","Звук"],["S / R","Перемешать / повтор"],["G, затем H/L/S/T","Главная / Live / Статистика / Медиатека"],["?","Эта справка"],["Esc","Закрыть панель или окно"]].map(([t,a])=>`<div class="shortcut-row"><span class="shortcut-keys">${t.split(" / ").map(s=>`<kbd>${g(s)}</kbd>`).join(" ")}</span><span>${g(a)}</span></div>`).join("")}</div>
      <p class="muted small">На телефоне: свайп влево/вправо между разделами, свайп вверх по мини-плееру — открыть, вниз — закрыть. Свайп по обложке переключает трек, двойной тап ставит лайк.</p>`})}document.addEventListener("keydown",e=>{var s,n,i;const t=Tr(e),a=document.activeElement;if(e.altKey&&e.key==="ArrowLeft"){e.preventDefault(),history.back();return}if(e.altKey&&e.key==="ArrowRight"){e.preventDefault(),history.forward();return}if(!t&&["ArrowDown","ArrowRight","ArrowUp","ArrowLeft"].includes(e.key)&&!e.shiftKey&&!((s=a==null?void 0:a.matches)!=null&&s.call(a,'input[type="range"]'))){e.preventDefault(),Mr(e.key==="ArrowDown"||e.key==="ArrowRight"?1:-1);return}if(e.code==="Space"&&!t&&f.track&&(e.preventDefault(),f.toggle()),e.key==="ArrowRight"&&!t&&e.shiftKey&&f.seekBy(5),e.key==="ArrowLeft"&&!t&&e.shiftKey&&f.seekBy(-5),!t){if(e.key==="?"){e.preventDefault(),$n();return}if(e.key==="/"){e.preventDefault(),(n=p("#page-search-input")||p("#search-input"))==null||n.focus();return}if(e.key.toLowerCase()==="g"){ke=Date.now();return}if(ke&&Date.now()-ke<900){const o={h:ae.home,l:ae.live,s:ae.stats,t:"#/library/tracks",m:ae.library,p:"#/profile"}[e.key.toLowerCase()];if(ke=0,o){e.preventDefault(),location.hash=o;return}}e.key.toLowerCase()==="l"&&f.track&&(e.preventDefault(),ue(f.track.id)),e.key.toLowerCase()==="d"&&f.track&&(e.preventDefault(),$a(f.track.id)),e.key.toLowerCase()==="n"&&(e.preventDefault(),f.next()),e.key.toLowerCase()==="p"&&!e.ctrlKey&&!e.metaKey&&(e.preventDefault(),f.previous()),e.key.toLowerCase()==="m"&&(e.preventDefault(),f.toggleMute()),e.key.toLowerCase()==="s"&&(e.preventDefault(),f.toggleShuffle()),e.key.toLowerCase()==="r"&&(e.preventDefault(),f.cycleRepeat()),e.key.toLowerCase()==="q"&&(e.preventDefault(),ot("queue")),e.key.toLowerCase()==="f"&&(e.preventDefault(),r.npOpen?Yt():ot("lyrics"))}(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"&&(e.preventDefault(),(i=p("#page-search-input")||p("#search-input"))==null||i.focus()),e.key==="Escape"&&(p("#modal-root").innerHTML?Q():r.npOpen&&Yt())});let qe=0,Ie=0,Oe=0;p("#playerbar").addEventListener("touchstart",e=>{qe=e.touches[0].clientY,Ie=e.touches[0].clientX,Oe=Date.now()});p("#playerbar").addEventListener("touchend",e=>{const t=e.changedTouches[0].clientY,a=e.changedTouches[0].clientX,s=qe-t,n=Math.abs(a-Ie),i=Date.now()-Oe;s>80&&i<300&&n<50&&(e.preventDefault(),ot(r.npTab||"lyrics"))});const oa=p(".np-sheet");oa&&(oa.addEventListener("touchstart",e=>{e.target.closest('.np-seek-bar, .eq-band, input[type="range"]')||(qe=e.touches[0].clientY,Ie=e.touches[0].clientX,Oe=Date.now())}),oa.addEventListener("touchend",e=>{const t=e.changedTouches[0].clientY,a=e.changedTouches[0].clientX,s=t-qe,n=Math.abs(a-Ie),i=Date.now()-Oe;s>100&&i<300&&n<50&&(e.preventDefault(),Yt())}));let At=null;p("#view").addEventListener("touchstart",e=>{e.touches.length===1&&(e.target.closest(".shelf-row, .library-tabs, .chip-row, input, textarea, select, .seek, .eq-track")||(At={x:e.touches[0].clientX,y:e.touches[0].clientY,time:Date.now()}))},{passive:!0});p("#view").addEventListener("touchend",e=>{if(!At)return;const t=e.changedTouches[0].clientX-At.x,a=e.changedTouches[0].clientY-At.y,s=Date.now()-At.time,n=At.x;if(At=null,s>600||Math.abs(t)<70||Math.abs(a)>55)return;if(n<=28&&t>0){history.back();return}const i=Lr(),o=ra.indexOf(i);if(o===-1)return;const l=t<0?o+1:o-1;l<0||l>=ra.length||(location.hash=ae[ra[l]])},{passive:!0});let It=null;p("#np-pages").addEventListener("touchstart",e=>{e.touches.length===1&&(It={x:e.touches[0].clientX,y:e.touches[0].clientY,time:Date.now()})},{passive:!0});p("#np-pages").addEventListener("touchend",e=>{if(!It)return;const t=e.changedTouches[0].clientX-It.x,a=e.changedTouches[0].clientY-It.y,s=Date.now()-It.time;if(It=null,s>700||Math.abs(t)<60||Math.abs(t)<Math.abs(a)*1.4)return;const n=Rt.indexOf(r.npTab),i=t<0?n+1:n-1;i<0||i>=Rt.length||(e.preventDefault(),nn(Rt[i]))},{passive:!1});let Ot=null,la=0;p("#np").addEventListener("touchstart",e=>{e.target.closest(".np-cover")&&(Ot={x:e.touches[0].clientX,y:e.touches[0].clientY,time:Date.now()})},{passive:!0});p("#np").addEventListener("touchend",e=>{if(!e.target.closest(".np-cover")||!Ot)return;const t=e.changedTouches[0].clientX-Ot.x,a=e.changedTouches[0].clientY-Ot.y,s=Date.now()-Ot.time;if(Ot=null,s>600)return;if(Math.abs(t)>60&&Math.abs(a)<60){e.preventDefault(),t<0?f.next():f.previous();return}const n=Date.now();Math.abs(t)<20&&Math.abs(a)<20&&n-la<300?(f.track&&ue(f.track.id),pe(),la=0):la=n},{passive:!1});let ca=0,da=null;p("#pb-cover").addEventListener("touchend",e=>{const t=Date.now(),a=e.target;if(t-ca<300&&a===da){if(e.preventDefault(),f.track){ue(f.track.id);const s=p("#pb-cover");s.style.transform="scale(0.92)",setTimeout(()=>{s.style.transform=""},150)}ca=0,da=null}else ca=t,da=a});let et=null;function Sn(e,t){const a=e.getBoundingClientRect(),s=Math.min(1,Math.max(0,(t-a.top)/a.height));return Math.round(12-s*24)}function xr(e,t){const a=Number(e.dataset.eqBand),s=(12-t)/24*100,n=e.querySelector(".eq-thumb"),i=e.querySelector(".eq-fill");n&&(n.style.top=`${s}%`),i&&(i.style.top=`${Math.min(s,50)}%`,i.style.height=`${Math.abs(50-s)}%`),e.setAttribute("aria-valuenow",String(t));const o=p(`#eq-val-${a}`);o&&(o.textContent=`${t>0?"+":""}${t}`)}function Ue(e,t,a){const s=Number(e.dataset.eqBand);xr(e,t),f.eqState.gains[s]=t,f.setEqGain(s,t),a&&(f.eqState.preset="custom",R(".eq-presets .chip-btn").forEach(n=>n.classList.toggle("active",n.dataset.eqPreset==="custom")))}document.addEventListener("pointerdown",e=>{var a;const t=e.target.closest(".eq-track");t&&(e.preventDefault(),et={el:t,value:Sn(t,e.clientY)},(a=t.setPointerCapture)==null||a.call(t,e.pointerId),Ue(t,et.value,!1))});document.addEventListener("pointermove",e=>{et&&(e.preventDefault(),et.value=Sn(et.el,e.clientY),Ue(et.el,et.value,!1))});document.addEventListener("pointerup",()=>{et&&(Ue(et.el,et.value,!0),et=null)});document.addEventListener("pointercancel",()=>{et=null});document.addEventListener("keydown",e=>{var n,i;const t=(i=(n=e.target).closest)==null?void 0:i.call(n,".eq-track");if(!t)return;const a=e.key==="ArrowUp"?1:e.key==="ArrowDown"?-1:0;if(!a)return;e.preventDefault();const s=Number(t.getAttribute("aria-valuenow"))||0;Ue(t,Math.max(-12,Math.min(12,s+a)),!0)});const le=p("#search-input");let Ss;le.addEventListener("input",()=>{clearTimeout(Ss);const e=le.value.trim();e.length!==0&&(Ss=setTimeout(()=>{e.length>=2&&(location.hash=`#/search?q=${encodeURIComponent(e)}`)},350))});le.addEventListener("keydown",e=>{if(e.key==="Enter"){const t=le.value.trim();if(!t)return;le.blur(),en(t);const a=`#/search?q=${encodeURIComponent(t)}`;location.hash===a?z():location.hash=a}});p("#rescan-btn").addEventListener("click",async()=>{p("#rescan-btn").classList.add("spin");const e=Date.now();try{await xs(),setTimeout(async()=>{p("#rescan-btn").classList.remove("spin"),await Fi()},Math.max(2500,Date.now()-e))}catch(t){p("#rescan-btn").classList.remove("spin"),Bt(t)||w(t.message,"error")}});p("#np-pill").addEventListener("click",()=>ot(r.npTab));f.addEventListener("track",()=>{Ra(),r.npOpen&&pe(),me(),Pt()});f.addEventListener("time",()=>{Pt()});f.addEventListener("buffer",un);f.addEventListener("state",me);f.addEventListener("mode",Va);f.addEventListener("volume",ve);f.addEventListener("eq",()=>{r.npTab==="eq"&&r.npOpen&&Fe(p("#np-page-eq"))});f.addEventListener("error",e=>w(e.detail,"error"));document.addEventListener("error",e=>{e.target instanceof HTMLImageElement&&(e.target.style.display="none")},!0);window.addEventListener("hashchange",z);window.addEventListener("popstate",()=>{ya=!0});f.addEventListener("queueend",async()=>{if(r.liveMode)try{const e=await Ls(25),t=new Set(f.queue.map(s=>s.id)),a=e.filter(s=>!t.has(s.id));if(!a.length){w("Live: новых треков не нашлось","warn");return}f.appendTracks(a),await f.next(!0)}catch(e){Bt(e)||w(e.message,"error")}});p("#auth-toggle-register").addEventListener("click",()=>{var e;return Ya(((e=p("#register-invite"))==null?void 0:e.value)||"")});p("#auth-toggle-login").addEventListener("click",()=>{location.hash.startsWith("#/register")&&(location.hash="#/home"),jt()});p("#register-invite").addEventListener("change",()=>{const e=p("#register-invite").value.trim();e&&Ya(e)});p("#register-form").addEventListener("submit",async e=>{e.preventDefault();const t=p("#register-submit"),a=p("#register-error");a.textContent="",t.disabled=!0;try{await ti({invite:p("#register-invite").value.trim(),username:p("#register-username").value.trim(),password:p("#register-password").value,displayName:p("#register-display").value.trim()}),location.hash="#/home",await ja()}catch(s){a.textContent=s.message||"Не удалось зарегистрироваться"}finally{t.disabled=!1}});p("#login-form").addEventListener("submit",async e=>{e.preventDefault();const t=p("#login-submit"),a=p("#login-error");a.textContent="",t.disabled=!0;try{await qn(p("#login-username").value.trim(),p("#login-password").value),await ja()}catch(s){a.textContent=s.message||"Не удалось войти"}finally{t.disabled=!1}});document.addEventListener("keydown",e=>{var t,a;e.key==="Enter"&&!p("#auth-screen").hidden&&((t=document.activeElement)==null?void 0:t.id)==="login-username"&&((a=p("#login-password"))==null||a.focus())});window.addEventListener("pagehide",()=>{f.playId&&f._finalizePlay(!1)});ve();Va();me();Pt();ja();
