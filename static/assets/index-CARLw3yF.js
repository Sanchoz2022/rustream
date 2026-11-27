(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const Ca={home:"M4 20v-8H2L12 3l10 9h-2v8h-6v-6h-4v6H4z",person:"M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z",album:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",music:"M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z",playlist:"M3 6h12v2H3V6zm0 4h12v2H3v-2zm0 4h8v2H3v-2zm12 .5a3.5 3.5 0 1 0 3.5 3.5V9h3V6h-4v8.5a3.5 3.5 0 0 0-2.5-.9z",search:"M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z",play:"M8 5v14l11-7L8 5z",pause:"M6 5h4v14H6V5zm8 0h4v14h-4V5z",prev:"M6 6h2v12H6V6zm3.5 6L18 18V6l-8.5 6z",next:"M16 6h2v12h-2V6zM6 18l8.5-6L6 6v12z",shuffle:"M10.59 9.17 5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z",repeat:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z",repeatOne:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z",volumeUp:"M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.5 4.5 0 0 0 16.5 12zM14 3.23v2.06a6.99 6.99 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54z",volumeDown:"M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.5 4.5 0 0 0 16.5 12z",volumeOff:"M16.5 12a4.5 4.5 0 0 0-2.5-4.03v2.21l2.45 2.45A4.4 4.4 0 0 0 16.5 12zM19 12a7 7 0 0 1-.94 3.51l1.48 1.48A9 9 0 0 0 14 4.75v2.06A7 7 0 0 1 19 12zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25a7 7 0 0 1-2.25 1.2v2.06a9 9 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z",queue:"M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18a3 3 0 1 0 2 2.82V8h3V6h-5z",lyrics:"M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2z",equalizer:"M7 20h2V10H7v10zm4-8h2V4h-2v8zm4 4h2V7h-2v9zM3 20h2v-6H3v6z",close:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",back:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",add:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",delete:"M6 19c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z",heart:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",heartOutline:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z",more:"M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",clock:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z",library:"M4 6H2v14a2 2 0 0 0 2 2h14v-2H4V6zm16-4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-3 9H9V9h8v2zm-2 4H9v-2h6v2zm2-8H9V5h8v2z",refresh:"M17.65 6.35A8 8 0 1 0 19.73 14h-2.08A6 6 0 1 1 12 6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z",edit:"M3 17.25V21h3.75L17.8 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",check:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",wave:"M3 12h2v4H3v-4zm4-4h2v12H7V8zm4-4h2v16h-2V4zm4 6h2v6h-2v-6zm4-2h2v10h-2V8z",radio:"M3.24 6.15C2.51 6.43 2 7.17 2 8v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-.83-.51-1.57-1.24-1.85L12.7 2.3a1 1 0 0 0-.7 0L3.24 6.15zM8 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm10-10H9v2h9v-2zm0 4h-3v2h3v-2z",logout:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5-5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z",thumbDown:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z",thumbUp:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z",chart:"M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z",palette:"M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z",settings:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.03 7.03 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.47.41l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z",chevronDown:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z",chevronRight:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z",ytm:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-13a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-1.5 7.25v-4.5L14.5 12l-4 2.25z",copy:"M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z",link:"M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4a3.1 3.1 0 0 1 0 6.2h-4V17h4a5 5 0 0 0 0-10z",ticket:"M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 1 0 4v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 1 0-4zm-2-1.46a4 4 0 0 0 0 6.92V18H4v-2.54a4 4 0 0 0 0-6.92V6h16v2.54zM11 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z",key:"M12.65 10A6 6 0 1 0 12.65 14H17v4h4v-4h2v-4H12.65zM7 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",lock:"M18 8h-1V6A5 5 0 0 0 7 6v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zM9 6a3 3 0 0 1 6 0v2H9V6zm9 14H6V10h12v10zm-6-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",moreHoriz:"M6 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",queueAdd:"M14 10H3v2h11v-2zm0-4H3v2h11V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM3 16h7v-2H3v2z",sparkle:"M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z",external:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z",shield:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",darkMode:"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8A9.3 9.3 0 0 0 12 3z",lightMode:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2 13h2a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm18 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM11 2v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM5.99 4.58a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06z",expand:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z",sun:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2 13h2a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm18 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM11 2v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM5.99 4.58a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06z",moon:"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8A9.3 9.3 0 0 0 12 3z",menu:"M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z",eye:"M12 5c-5 0-9 4.5-10 7 1 2.5 5 7 10 7s9-4.5 10-7c-1-2.5-5-7-10-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",eyeOff:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2.71 3.16l1.94 1.94C3.29 6.24 2.06 7.94 1 10c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l2.71 2.71 1.27-1.27L3.98 1.89 2.71 3.16zM12 15c-1.03 0-1.96-.42-2.64-1.1l3.54 3.54c-.28.09-.59.14-.9.14z"};function d(e,t=""){const a=Ca[e]||Ca.music;return`<svg class="icon ${t}" viewBox="0 0 24 24" aria-hidden="true"><path d="${a}"/></svg>`}const _e="1.16.1",xe="rustream-web";class Ft extends Error{constructor(t,a=0,n=""){super(t),this.name="ApiError",this.status=a,this.code=n}}function rn(e){return e===404?"Сервер API не найден. Это статическое превью — запустите rustream, чтобы войти.":e>=501&&e<=504?"Сервер API недоступен. Это статическое превью — запустите rustream, чтобы войти.":`HTTP ${e}`}function ua(e,t={}){const a=new URLSearchParams({v:_e,c:xe,f:"json",...t});return`/rest/${e}.view?${a.toString()}`}async function ct(e,t={}){var i;const a=await fetch(ua(e,t),{credentials:"same-origin"});if(a.status===401)throw new Ft("Требуется вход в аккаунт",401);if(!a.ok)throw new Ft(rn(a.status),a.status);const s=(await a.json())["subsonic-response"];if(!s)throw new Ft("Некорректный ответ сервера");if(s.status!=="ok")throw new Ft(((i=s.error)==null?void 0:i.message)||"Ошибка API");return s}async function M(e,t={}){const a=await fetch(e,{credentials:"same-origin",...t,headers:{"Content-Type":"application/json",...t.headers||{}}});let n=null;try{n=await a.json()}catch{n=null}if(!a.ok){const s=a.status===401?"Требуется вход в аккаунт":rn(a.status);throw new Ft((n==null?void 0:n.error)||s,a.status,(n==null?void 0:n.code)||"")}return n}const Lt=(e,t=300)=>e?ua("getCoverArt",{id:e,size:t}):"",Ie=e=>ua("stream",{id:e});async function os(){var a;const e=await ct("getArtists"),t=[];for(const n of((a=e.artists)==null?void 0:a.index)||[])for(const s of n.artist||[])t.push(s);return t}const on=e=>ct("getArtist",{id:e}),pa=e=>ct("getAlbum",{id:e});async function ln(e="alphabeticalByName",t=100,a=0){var s;return((s=(await ct("getAlbumList2",{type:e,size:t,offset:a})).albumList2)==null?void 0:s.album)||[]}async function ls(e=500){var a;return((a=(await ct("getRandomSongs",{size:e})).randomSongs)==null?void 0:a.song)||[]}async function cs(e){return(await ct("search3",{query:e,artistCount:30,albumCount:50,songCount:100})).searchResult3||{artist:[],album:[],song:[]}}async function ha(){var t;return((t=(await ct("getPlaylists")).playlists)==null?void 0:t.playlist)||[]}async function ds(e){return(await ct("getPlaylist",{id:e})).playlist}const cn=(e,t=[])=>{const a=new URLSearchParams({v:_e,c:xe,f:"json",name:e});return t.forEach(n=>a.append("songId",n)),fetch(`/rest/createPlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(n=>n.json()).then(n=>n["subsonic-response"])},us=(e,t)=>{const a=new URLSearchParams({v:_e,c:xe,f:"json",playlistId:e,songIdToAdd:t});return fetch(`/rest/updatePlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(n=>n.json())},ps=(e,t)=>{const a=new URLSearchParams({v:_e,c:xe,f:"json",playlistId:e,songIndexToRemove:String(t)});return fetch(`/rest/updatePlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(n=>n.json())},hs=e=>ct("deletePlaylist",{id:e});async function fs(){return(await ct("getStarred2")).starred2||{artist:[],album:[],song:[]}}async function ms(){return M("/api/stats")}async function He(){return M("/api/me")}async function vs(){return M("/api/session")}async function ta(){return M("/api/auth/config")}function gs(e,t){return M("/api/auth/login",{method:"POST",body:JSON.stringify({username:e,password:t})})}function dn(){return M("/api/auth/logout",{method:"POST"})}function Pa(e,t){return un({displayName:e,theme:t})}function un(e){return M("/api/me",{method:"PATCH",body:JSON.stringify(e)})}async function bs(){return M("/api/me/ratings")}function ys(e,t){return M("/api/me/ratings",{method:"PUT",body:JSON.stringify({trackId:e,rating:t})})}function Oe(){return M("/api/admin/lastfm")}function za(e,t,a=!1){return M("/api/admin/lastfm",{method:"PUT",body:JSON.stringify({apiKey:e,apiSecret:t,clear:a})})}function ws(e,t){return M("/api/me/password",{method:"POST",body:JSON.stringify({currentPassword:e,newPassword:t})})}function $s({lastfmUsername:e,lastfmSessionKey:t,listenbrainzToken:a}){return M("/api/me/scrobbling",{method:"PUT",body:JSON.stringify({lastfmUsername:e,lastfmSessionKey:t,listenbrainzToken:a})})}async function pn(){return M("/api/me/stats")}async function Ss(e,t="web"){return M("/api/plays/start",{method:"POST",body:JSON.stringify({trackId:e,source:t})})}function qa(e,t,a=!1){return M("/api/plays/update",{method:"POST",body:JSON.stringify({playId:e,positionMs:t,completed:a})})}async function hn(e=40){return(await M(`/api/live/queue?count=${e}`)).tracks||[]}async function ks(){return(await M("/api/live/mixes")).mixes||[]}async function Es(e,t=!1){return M(`/api/lyrics/${encodeURIComponent(e)}${t?"?refresh=1":""}`)}async function fn(){return M("/api/rescan",{method:"POST"})}async function Ts(){return(await M("/api/users")).users||[]}function Ms({username:e,password:t,displayName:a,isAdmin:n}){return M("/api/users",{method:"POST",body:JSON.stringify({username:e,password:t,displayName:a,isAdmin:n})})}function Ls(){return M("/api/me/history",{method:"DELETE"})}function _s(e){return M(`/api/users/${e}`,{method:"DELETE"})}function xs(){return M("/api/lastfm/connect")}function As(e=""){return M("/api/lastfm/complete",{method:"POST",body:JSON.stringify({token:e})})}async function Ds(){const e=await M("/api/admin/invites");return(e==null?void 0:e.invites)||[]}async function Cs({note:e,expiresInDays:t,maxUses:a,isAdmin:n}){const s=await M("/api/admin/invites",{method:"POST",body:JSON.stringify({note:e,expiresInDays:t,maxUses:a,isAdmin:n})});return s==null?void 0:s.invite}function Ps(e){return M(`/api/admin/invites/${encodeURIComponent(e)}`,{method:"DELETE"})}function zs(e){return M(`/api/auth/invite/${encodeURIComponent(e)}`)}function qs({invite:e,username:t,password:a,displayName:n}){return M("/api/auth/register",{method:"POST",body:JSON.stringify({invite:e,username:t,password:a,displayName:n||void 0})})}const mn=e=>`${location.origin}/static/index.html#/register?invite=${encodeURIComponent(e)}`;function Ae(){return M("/api/me/ytm")}function Is(e){return M("/api/me/ytm",{method:"PUT",body:JSON.stringify({cookies:e})})}function Hs(){return M("/api/me/ytm",{method:"DELETE"})}async function vn(e,t=40){const a=new URLSearchParams({q:e,limit:String(t)}),n=await M(`/api/ytm/search?${a.toString()}`);return(n==null?void 0:n.tracks)||[]}async function gn(e=200){const t=await M(`/api/ytm/liked?limit=${e}`);return(t==null?void 0:t.tracks)||[]}async function bn(e=40){const t=await M(`/api/ytm/history?limit=${e}`);return(t==null?void 0:t.tracks)||[]}function Os(){return M("/api/me/player")}function Ns(e){return M("/api/me/player",{method:"PUT",body:JSON.stringify({state:e})})}/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Rs(e,t,a){return(t=Fs(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ht(){return ht=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},ht.apply(null,arguments)}function Ia(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),a.push.apply(a,n)}return a}function lt(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Ia(Object(a),!0).forEach(function(n){Rs(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ia(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function Vs(e,t){if(e==null)return{};var a,n,s=js(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}function js(e,t){if(e==null)return{};var a={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;a[n]=e[n]}return a}function Ys(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Fs(e){var t=Ys(e,"string");return typeof t=="symbol"?t:t+""}function ea(e){"@babel/helpers - typeof";return ea=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ea(e)}var Bs="1.15.7";function pt(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var ft=pt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),ne=pt(/Edge/i),Ha=pt(/firefox/i),Gt=pt(/safari/i)&&!pt(/chrome/i)&&!pt(/android/i),fa=pt(/iP(ad|od|hone)/i),yn=pt(/chrome/i)&&pt(/android/i),wn={capture:!1,passive:!1};function x(e,t,a){e.addEventListener(t,a,!ft&&wn)}function L(e,t,a){e.removeEventListener(t,a,!ft&&wn)}function ve(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function $n(e){return e.host&&e!==document&&e.host.nodeType&&e.host!==e?e.host:e.parentNode}function st(e,t,a,n){if(e){a=a||document;do{if(t!=null&&(t[0]===">"?e.parentNode===a&&ve(e,t):ve(e,t))||n&&e===a)return e;if(e===a)break}while(e=$n(e))}return null}var Oa=/\s+/g;function G(e,t,a){if(e&&t)if(e.classList)e.classList[a?"add":"remove"](t);else{var n=(" "+e.className+" ").replace(Oa," ").replace(" "+t+" "," ");e.className=(n+(a?" "+t:"")).replace(Oa," ")}}function S(e,t,a){var n=e&&e.style;if(n){if(a===void 0)return document.defaultView&&document.defaultView.getComputedStyle?a=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(a=e.currentStyle),t===void 0?a:a[t];!(t in n)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),n[t]=a+(typeof a=="string"?"":"px")}}function It(e,t){var a="";if(typeof e=="string")a=e;else do{var n=S(e,"transform");n&&n!=="none"&&(a=n+" "+a)}while(!t&&(e=e.parentNode));var s=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return s&&new s(a)}function Sn(e,t,a){if(e){var n=e.getElementsByTagName(t),s=0,i=n.length;if(a)for(;s<i;s++)a(n[s],s);return n}return[]}function ot(){var e=document.scrollingElement;return e||document.documentElement}function O(e,t,a,n,s){if(!(!e.getBoundingClientRect&&e!==window)){var i,l,c,r,p,b,g;if(e!==window&&e.parentNode&&e!==ot()?(i=e.getBoundingClientRect(),l=i.top,c=i.left,r=i.bottom,p=i.right,b=i.height,g=i.width):(l=0,c=0,r=window.innerHeight,p=window.innerWidth,b=window.innerHeight,g=window.innerWidth),(t||a)&&e!==window&&(s=s||e.parentNode,!ft))do if(s&&s.getBoundingClientRect&&(S(s,"transform")!=="none"||a&&S(s,"position")!=="static")){var f=s.getBoundingClientRect();l-=f.top+parseInt(S(s,"border-top-width")),c-=f.left+parseInt(S(s,"border-left-width")),r=l+i.height,p=c+i.width;break}while(s=s.parentNode);if(n&&e!==window){var w=It(s||e),E=w&&w.a,_=w&&w.d;w&&(l/=_,c/=E,g/=E,b/=_,r=l+b,p=c+g)}return{top:l,left:c,bottom:r,right:p,width:g,height:b}}}function Na(e,t,a){for(var n=yt(e,!0),s=O(e)[t];n;){var i=O(n)[a],l=void 0;if(l=s>=i,!l)return n;if(n===ot())break;n=yt(n,!1)}return!1}function Ht(e,t,a,n){for(var s=0,i=0,l=e.children;i<l.length;){if(l[i].style.display!=="none"&&l[i]!==k.ghost&&(n||l[i]!==k.dragged)&&st(l[i],a.draggable,e,!1)){if(s===t)return l[i];s++}i++}return null}function ma(e,t){for(var a=e.lastElementChild;a&&(a===k.ghost||S(a,"display")==="none"||t&&!ve(a,t));)a=a.previousElementSibling;return a||null}function Q(e,t){var a=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==k.clone&&(!t||ve(e,t))&&a++;return a}function Ra(e){var t=0,a=0,n=ot();if(e)do{var s=It(e),i=s.a,l=s.d;t+=e.scrollLeft*i,a+=e.scrollTop*l}while(e!==n&&(e=e.parentNode));return[t,a]}function Us(e,t){for(var a in e)if(e.hasOwnProperty(a)){for(var n in t)if(t.hasOwnProperty(n)&&t[n]===e[a][n])return Number(a)}return-1}function yt(e,t){if(!e||!e.getBoundingClientRect)return ot();var a=e,n=!1;do if(a.clientWidth<a.scrollWidth||a.clientHeight<a.scrollHeight){var s=S(a);if(a.clientWidth<a.scrollWidth&&(s.overflowX=="auto"||s.overflowX=="scroll")||a.clientHeight<a.scrollHeight&&(s.overflowY=="auto"||s.overflowY=="scroll")){if(!a.getBoundingClientRect||a===document.body)return ot();if(n||t)return a;n=!0}}while(a=a.parentNode);return ot()}function Xs(e,t){if(e&&t)for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);return e}function Ne(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var Jt;function kn(e,t){return function(){if(!Jt){var a=arguments,n=this;a.length===1?e.call(n,a[0]):e.apply(n,a),Jt=setTimeout(function(){Jt=void 0},t)}}}function Ws(){clearTimeout(Jt),Jt=void 0}function En(e,t,a){e.scrollLeft+=t,e.scrollTop+=a}function Tn(e){var t=window.Polymer,a=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):a?a(e).clone(!0)[0]:e.cloneNode(!0)}function Mn(e,t,a){var n={};return Array.from(e.children).forEach(function(s){var i,l,c,r;if(!(!st(s,t.draggable,e,!1)||s.animated||s===a)){var p=O(s);n.left=Math.min((i=n.left)!==null&&i!==void 0?i:1/0,p.left),n.top=Math.min((l=n.top)!==null&&l!==void 0?l:1/0,p.top),n.right=Math.max((c=n.right)!==null&&c!==void 0?c:-1/0,p.right),n.bottom=Math.max((r=n.bottom)!==null&&r!==void 0?r:-1/0,p.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var X="Sortable"+new Date().getTime();function Gs(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var n=[].slice.call(this.el.children);n.forEach(function(s){if(!(S(s,"display")==="none"||s===k.ghost)){e.push({target:s,rect:O(s)});var i=lt({},e[e.length-1].rect);if(s.thisAnimationDuration){var l=It(s,!0);l&&(i.top-=l.f,i.left-=l.e)}s.fromRect=i}})}},addAnimationState:function(n){e.push(n)},removeAnimationState:function(n){e.splice(Us(e,{target:n}),1)},animateAll:function(n){var s=this;if(!this.options.animation){clearTimeout(t),typeof n=="function"&&n();return}var i=!1,l=0;e.forEach(function(c){var r=0,p=c.target,b=p.fromRect,g=O(p),f=p.prevFromRect,w=p.prevToRect,E=c.rect,_=It(p,!0);_&&(g.top-=_.f,g.left-=_.e),p.toRect=g,p.thisAnimationDuration&&Ne(f,g)&&!Ne(b,g)&&(E.top-g.top)/(E.left-g.left)===(b.top-g.top)/(b.left-g.left)&&(r=Ks(E,f,w,s.options)),Ne(g,b)||(p.prevFromRect=b,p.prevToRect=g,r||(r=s.options.animation),s.animate(p,E,g,r)),r&&(i=!0,l=Math.max(l,r),clearTimeout(p.animationResetTimer),p.animationResetTimer=setTimeout(function(){p.animationTime=0,p.prevFromRect=null,p.fromRect=null,p.prevToRect=null,p.thisAnimationDuration=null},r),p.thisAnimationDuration=r)}),clearTimeout(t),i?t=setTimeout(function(){typeof n=="function"&&n()},l):typeof n=="function"&&n(),e=[]},animate:function(n,s,i,l){if(l){S(n,"transition",""),S(n,"transform","");var c=It(this.el),r=c&&c.a,p=c&&c.d,b=(s.left-i.left)/(r||1),g=(s.top-i.top)/(p||1);n.animatingX=!!b,n.animatingY=!!g,S(n,"transform","translate3d("+b+"px,"+g+"px,0)"),this.forRepaintDummy=Js(n),S(n,"transition","transform "+l+"ms"+(this.options.easing?" "+this.options.easing:"")),S(n,"transform","translate3d(0,0,0)"),typeof n.animated=="number"&&clearTimeout(n.animated),n.animated=setTimeout(function(){S(n,"transition",""),S(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},l)}}}}function Js(e){return e.offsetWidth}function Ks(e,t,a,n){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-a.top,2)+Math.pow(t.left-a.left,2))*n.animation}var At=[],Re={initializeByDefault:!0},se={mount:function(t){for(var a in Re)Re.hasOwnProperty(a)&&!(a in t)&&(t[a]=Re[a]);At.forEach(function(n){if(n.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),At.push(t)},pluginEvent:function(t,a,n){var s=this;this.eventCanceled=!1,n.cancel=function(){s.eventCanceled=!0};var i=t+"Global";At.forEach(function(l){a[l.pluginName]&&(a[l.pluginName][i]&&a[l.pluginName][i](lt({sortable:a},n)),a.options[l.pluginName]&&a[l.pluginName][t]&&a[l.pluginName][t](lt({sortable:a},n)))})},initializePlugins:function(t,a,n,s){At.forEach(function(c){var r=c.pluginName;if(!(!t.options[r]&&!c.initializeByDefault)){var p=new c(t,a,t.options);p.sortable=t,p.options=t.options,t[r]=p,ht(n,p.defaults)}});for(var i in t.options)if(t.options.hasOwnProperty(i)){var l=this.modifyOption(t,i,t.options[i]);typeof l<"u"&&(t.options[i]=l)}},getEventProperties:function(t,a){var n={};return At.forEach(function(s){typeof s.eventProperties=="function"&&ht(n,s.eventProperties.call(a[s.pluginName],t))}),n},modifyOption:function(t,a,n){var s;return At.forEach(function(i){t[i.pluginName]&&i.optionListeners&&typeof i.optionListeners[a]=="function"&&(s=i.optionListeners[a].call(t[i.pluginName],n))}),s}};function Qs(e){var t=e.sortable,a=e.rootEl,n=e.name,s=e.targetEl,i=e.cloneEl,l=e.toEl,c=e.fromEl,r=e.oldIndex,p=e.newIndex,b=e.oldDraggableIndex,g=e.newDraggableIndex,f=e.originalEvent,w=e.putSortable,E=e.extraEventProperties;if(t=t||a&&a[X],!!t){var _,I=t.options,B="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!ft&&!ne?_=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(_=document.createEvent("Event"),_.initEvent(n,!0,!0)),_.to=l||a,_.from=c||a,_.item=s||a,_.clone=i,_.oldIndex=r,_.newIndex=p,_.oldDraggableIndex=b,_.newDraggableIndex=g,_.originalEvent=f,_.pullMode=w?w.lastPutMode:void 0;var A=lt(lt({},E),se.getEventProperties(n,t));for(var R in A)_[R]=A[R];a&&a.dispatchEvent(_),I[B]&&I[B].call(t,_)}}var Zs=["evt"],U=function(t,a){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=n.evt,i=Vs(n,Zs);se.pluginEvent.bind(k)(t,a,lt({dragEl:m,parentEl:P,ghostEl:T,rootEl:D,nextEl:Mt,lastDownEl:pe,cloneEl:C,cloneHidden:bt,dragStarted:Bt,putSortable:V,activeSortable:k.active,originalEvent:s,oldIndex:zt,oldDraggableIndex:Kt,newIndex:J,newDraggableIndex:gt,hideGhostForTarget:An,unhideGhostForTarget:Dn,cloneNowHidden:function(){bt=!0},cloneNowShown:function(){bt=!1},dispatchSortableEvent:function(c){Y({sortable:a,name:c,originalEvent:s})}},i))};function Y(e){Qs(lt({putSortable:V,cloneEl:C,targetEl:m,rootEl:D,oldIndex:zt,oldDraggableIndex:Kt,newIndex:J,newDraggableIndex:gt},e))}var m,P,T,D,Mt,pe,C,bt,zt,J,Kt,gt,le,V,Pt=!1,ge=!1,be=[],Et,at,Ve,je,Va,ja,Bt,Dt,Qt,Zt=!1,ce=!1,he,j,Ye=[],aa=!1,ye=[],De=typeof document<"u",de=fa,Ya=ne||ft?"cssFloat":"float",ti=De&&!yn&&!fa&&"draggable"in document.createElement("div"),Ln=(function(){if(De){if(ft)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}})(),_n=function(t,a){var n=S(t),s=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=Ht(t,0,a),l=Ht(t,1,a),c=i&&S(i),r=l&&S(l),p=c&&parseInt(c.marginLeft)+parseInt(c.marginRight)+O(i).width,b=r&&parseInt(r.marginLeft)+parseInt(r.marginRight)+O(l).width;if(n.display==="flex")return n.flexDirection==="column"||n.flexDirection==="column-reverse"?"vertical":"horizontal";if(n.display==="grid")return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&c.float&&c.float!=="none"){var g=c.float==="left"?"left":"right";return l&&(r.clear==="both"||r.clear===g)?"vertical":"horizontal"}return i&&(c.display==="block"||c.display==="flex"||c.display==="table"||c.display==="grid"||p>=s&&n[Ya]==="none"||l&&n[Ya]==="none"&&p+b>s)?"vertical":"horizontal"},ei=function(t,a,n){var s=n?t.left:t.top,i=n?t.right:t.bottom,l=n?t.width:t.height,c=n?a.left:a.top,r=n?a.right:a.bottom,p=n?a.width:a.height;return s===c||i===r||s+l/2===c+p/2},ai=function(t,a){var n;return be.some(function(s){var i=s[X].options.emptyInsertThreshold;if(!(!i||ma(s))){var l=O(s),c=t>=l.left-i&&t<=l.right+i,r=a>=l.top-i&&a<=l.bottom+i;if(c&&r)return n=s}}),n},xn=function(t){function a(i,l){return function(c,r,p,b){var g=c.options.group.name&&r.options.group.name&&c.options.group.name===r.options.group.name;if(i==null&&(l||g))return!0;if(i==null||i===!1)return!1;if(l&&i==="clone")return i;if(typeof i=="function")return a(i(c,r,p,b),l)(c,r,p,b);var f=(l?c:r).options.group.name;return i===!0||typeof i=="string"&&i===f||i.join&&i.indexOf(f)>-1}}var n={},s=t.group;(!s||ea(s)!="object")&&(s={name:s}),n.name=s.name,n.checkPull=a(s.pull,!0),n.checkPut=a(s.put),n.revertClone=s.revertClone,t.group=n},An=function(){!Ln&&T&&S(T,"display","none")},Dn=function(){!Ln&&T&&S(T,"display","")};De&&!yn&&document.addEventListener("click",function(e){if(ge)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),ge=!1,!1},!0);var Tt=function(t){if(m){t=t.touches?t.touches[0]:t;var a=ai(t.clientX,t.clientY);if(a){var n={};for(var s in t)t.hasOwnProperty(s)&&(n[s]=t[s]);n.target=n.rootEl=a,n.preventDefault=void 0,n.stopPropagation=void 0,a[X]._onDragOver(n)}}},ni=function(t){m&&m.parentNode[X]._isOutsideThisEl(t.target)};function k(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=ht({},t),e[X]=this;var a={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return _n(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(l,c){l.setData("Text",c.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:k.supportPointer!==!1&&"PointerEvent"in window&&(!Gt||fa),emptyInsertThreshold:5};se.initializePlugins(this,e,a);for(var n in a)!(n in t)&&(t[n]=a[n]);xn(t);for(var s in this)s.charAt(0)==="_"&&typeof this[s]=="function"&&(this[s]=this[s].bind(this));this.nativeDraggable=t.forceFallback?!1:ti,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?x(e,"pointerdown",this._onTapStart):(x(e,"mousedown",this._onTapStart),x(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(x(e,"dragover",this),x(e,"dragenter",this)),be.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),ht(this,Gs())}k.prototype={constructor:k,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(Dt=null)},_getDirection:function(t,a){return typeof this.options.direction=="function"?this.options.direction.call(this,t,a,m):this.options.direction},_onTapStart:function(t){if(t.cancelable){var a=this,n=this.el,s=this.options,i=s.preventOnFilter,l=t.type,c=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,r=(c||t).target,p=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||r,b=s.filter;if(ui(n),!m&&!(/mousedown|pointerdown/.test(l)&&t.button!==0||s.disabled)&&!p.isContentEditable&&!(!this.nativeDraggable&&Gt&&r&&r.tagName.toUpperCase()==="SELECT")&&(r=st(r,s.draggable,n,!1),!(r&&r.animated)&&pe!==r)){if(zt=Q(r),Kt=Q(r,s.draggable),typeof b=="function"){if(b.call(this,t,r,this)){Y({sortable:a,rootEl:p,name:"filter",targetEl:r,toEl:n,fromEl:n}),U("filter",a,{evt:t}),i&&t.preventDefault();return}}else if(b&&(b=b.split(",").some(function(g){if(g=st(p,g.trim(),n,!1),g)return Y({sortable:a,rootEl:g,name:"filter",targetEl:r,fromEl:n,toEl:n}),U("filter",a,{evt:t}),!0}),b)){i&&t.preventDefault();return}s.handle&&!st(p,s.handle,n,!1)||this._prepareDragStart(t,c,r)}}},_prepareDragStart:function(t,a,n){var s=this,i=s.el,l=s.options,c=i.ownerDocument,r;if(n&&!m&&n.parentNode===i){var p=O(n);if(D=i,m=n,P=m.parentNode,Mt=m.nextSibling,pe=n,le=l.group,k.dragged=m,Et={target:m,clientX:(a||t).clientX,clientY:(a||t).clientY},Va=Et.clientX-p.left,ja=Et.clientY-p.top,this._lastX=(a||t).clientX,this._lastY=(a||t).clientY,m.style["will-change"]="all",r=function(){if(U("delayEnded",s,{evt:t}),k.eventCanceled){s._onDrop();return}s._disableDelayedDragEvents(),!Ha&&s.nativeDraggable&&(m.draggable=!0),s._triggerDragStart(t,a),Y({sortable:s,name:"choose",originalEvent:t}),G(m,l.chosenClass,!0)},l.ignore.split(",").forEach(function(b){Sn(m,b.trim(),Fe)}),x(c,"dragover",Tt),x(c,"mousemove",Tt),x(c,"touchmove",Tt),l.supportPointer?(x(c,"pointerup",s._onDrop),!this.nativeDraggable&&x(c,"pointercancel",s._onDrop)):(x(c,"mouseup",s._onDrop),x(c,"touchend",s._onDrop),x(c,"touchcancel",s._onDrop)),Ha&&this.nativeDraggable&&(this.options.touchStartThreshold=4,m.draggable=!0),U("delayStart",this,{evt:t}),l.delay&&(!l.delayOnTouchOnly||a)&&(!this.nativeDraggable||!(ne||ft))){if(k.eventCanceled){this._onDrop();return}l.supportPointer?(x(c,"pointerup",s._disableDelayedDrag),x(c,"pointercancel",s._disableDelayedDrag)):(x(c,"mouseup",s._disableDelayedDrag),x(c,"touchend",s._disableDelayedDrag),x(c,"touchcancel",s._disableDelayedDrag)),x(c,"mousemove",s._delayedDragTouchMoveHandler),x(c,"touchmove",s._delayedDragTouchMoveHandler),l.supportPointer&&x(c,"pointermove",s._delayedDragTouchMoveHandler),s._dragStartTimer=setTimeout(r,l.delay)}else r()}},_delayedDragTouchMoveHandler:function(t){var a=t.touches?t.touches[0]:t;Math.max(Math.abs(a.clientX-this._lastX),Math.abs(a.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){m&&Fe(m),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;L(t,"mouseup",this._disableDelayedDrag),L(t,"touchend",this._disableDelayedDrag),L(t,"touchcancel",this._disableDelayedDrag),L(t,"pointerup",this._disableDelayedDrag),L(t,"pointercancel",this._disableDelayedDrag),L(t,"mousemove",this._delayedDragTouchMoveHandler),L(t,"touchmove",this._delayedDragTouchMoveHandler),L(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,a){a=a||t.pointerType=="touch"&&t,!this.nativeDraggable||a?this.options.supportPointer?x(document,"pointermove",this._onTouchMove):a?x(document,"touchmove",this._onTouchMove):x(document,"mousemove",this._onTouchMove):(x(m,"dragend",this),x(D,"dragstart",this._onDragStart));try{document.selection?fe(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,a){if(Pt=!1,D&&m){U("dragStarted",this,{evt:a}),this.nativeDraggable&&x(document,"dragover",ni);var n=this.options;!t&&G(m,n.dragClass,!1),G(m,n.ghostClass,!0),k.active=this,t&&this._appendGhost(),Y({sortable:this,name:"start",originalEvent:a})}else this._nulling()},_emulateDragOver:function(){if(at){this._lastX=at.clientX,this._lastY=at.clientY,An();for(var t=document.elementFromPoint(at.clientX,at.clientY),a=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(at.clientX,at.clientY),t!==a);)a=t;if(m.parentNode[X]._isOutsideThisEl(t),a)do{if(a[X]){var n=void 0;if(n=a[X]._onDragOver({clientX:at.clientX,clientY:at.clientY,target:t,rootEl:a}),n&&!this.options.dragoverBubble)break}t=a}while(a=$n(a));Dn()}},_onTouchMove:function(t){if(Et){var a=this.options,n=a.fallbackTolerance,s=a.fallbackOffset,i=t.touches?t.touches[0]:t,l=T&&It(T,!0),c=T&&l&&l.a,r=T&&l&&l.d,p=de&&j&&Ra(j),b=(i.clientX-Et.clientX+s.x)/(c||1)+(p?p[0]-Ye[0]:0)/(c||1),g=(i.clientY-Et.clientY+s.y)/(r||1)+(p?p[1]-Ye[1]:0)/(r||1);if(!k.active&&!Pt){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(T){l?(l.e+=b-(Ve||0),l.f+=g-(je||0)):l={a:1,b:0,c:0,d:1,e:b,f:g};var f="matrix(".concat(l.a,",").concat(l.b,",").concat(l.c,",").concat(l.d,",").concat(l.e,",").concat(l.f,")");S(T,"webkitTransform",f),S(T,"mozTransform",f),S(T,"msTransform",f),S(T,"transform",f),Ve=b,je=g,at=i}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!T){var t=this.options.fallbackOnBody?document.body:D,a=O(m,!0,de,!0,t),n=this.options;if(de){for(j=t;S(j,"position")==="static"&&S(j,"transform")==="none"&&j!==document;)j=j.parentNode;j!==document.body&&j!==document.documentElement?(j===document&&(j=ot()),a.top+=j.scrollTop,a.left+=j.scrollLeft):j=ot(),Ye=Ra(j)}T=m.cloneNode(!0),G(T,n.ghostClass,!1),G(T,n.fallbackClass,!0),G(T,n.dragClass,!0),S(T,"transition",""),S(T,"transform",""),S(T,"box-sizing","border-box"),S(T,"margin",0),S(T,"top",a.top),S(T,"left",a.left),S(T,"width",a.width),S(T,"height",a.height),S(T,"opacity","0.8"),S(T,"position",de?"absolute":"fixed"),S(T,"zIndex","100000"),S(T,"pointerEvents","none"),k.ghost=T,t.appendChild(T),S(T,"transform-origin",Va/parseInt(T.style.width)*100+"% "+ja/parseInt(T.style.height)*100+"%")}},_onDragStart:function(t,a){var n=this,s=t.dataTransfer,i=n.options;if(U("dragStart",this,{evt:t}),k.eventCanceled){this._onDrop();return}U("setupClone",this),k.eventCanceled||(C=Tn(m),C.removeAttribute("id"),C.draggable=!1,C.style["will-change"]="",this._hideClone(),G(C,this.options.chosenClass,!1),k.clone=C),n.cloneId=fe(function(){U("clone",n),!k.eventCanceled&&(n.options.removeCloneOnHide||D.insertBefore(C,m),n._hideClone(),Y({sortable:n,name:"clone"}))}),!a&&G(m,i.dragClass,!0),a?(ge=!0,n._loopId=setInterval(n._emulateDragOver,50)):(L(document,"mouseup",n._onDrop),L(document,"touchend",n._onDrop),L(document,"touchcancel",n._onDrop),s&&(s.effectAllowed="move",i.setData&&i.setData.call(n,s,m)),x(document,"drop",n),S(m,"transform","translateZ(0)")),Pt=!0,n._dragStartId=fe(n._dragStarted.bind(n,a,t)),x(document,"selectstart",n),Bt=!0,window.getSelection().removeAllRanges(),Gt&&S(document.body,"user-select","none")},_onDragOver:function(t){var a=this.el,n=t.target,s,i,l,c=this.options,r=c.group,p=k.active,b=le===r,g=c.sort,f=V||p,w,E=this,_=!1;if(aa)return;function I(Yt,is){U(Yt,E,lt({evt:t,isOwner:b,axis:w?"vertical":"horizontal",revert:l,dragRect:s,targetRect:i,canSort:g,fromSortable:f,target:n,completed:A,onMove:function(Da,rs){return ue(D,a,m,s,Da,O(Da),t,rs)},changed:R},is))}function B(){I("dragOverAnimationCapture"),E.captureAnimationState(),E!==f&&f.captureAnimationState()}function A(Yt){return I("dragOverCompleted",{insertion:Yt}),Yt&&(b?p._hideClone():p._showClone(E),E!==f&&(G(m,V?V.options.ghostClass:p.options.ghostClass,!1),G(m,c.ghostClass,!0)),V!==E&&E!==k.active?V=E:E===k.active&&V&&(V=null),f===E&&(E._ignoreWhileAnimating=n),E.animateAll(function(){I("dragOverAnimationComplete"),E._ignoreWhileAnimating=null}),E!==f&&(f.animateAll(),f._ignoreWhileAnimating=null)),(n===m&&!m.animated||n===a&&!n.animated)&&(Dt=null),!c.dragoverBubble&&!t.rootEl&&n!==document&&(m.parentNode[X]._isOutsideThisEl(t.target),!Yt&&Tt(t)),!c.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),_=!0}function R(){J=Q(m),gt=Q(m,c.draggable),Y({sortable:E,name:"change",toEl:a,newIndex:J,newDraggableIndex:gt,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),n=st(n,c.draggable,a,!0),I("dragOver"),k.eventCanceled)return _;if(m.contains(t.target)||n.animated&&n.animatingX&&n.animatingY||E._ignoreWhileAnimating===n)return A(!1);if(ge=!1,p&&!c.disabled&&(b?g||(l=P!==D):V===this||(this.lastPutMode=le.checkPull(this,p,m,t))&&r.checkPut(this,p,m,t))){if(w=this._getDirection(t,n)==="vertical",s=O(m),I("dragOverValid"),k.eventCanceled)return _;if(l)return P=D,B(),this._hideClone(),I("revert"),k.eventCanceled||(Mt?D.insertBefore(m,Mt):D.appendChild(m)),A(!0);var q=ma(a,c.draggable);if(!q||oi(t,w,this)&&!q.animated){if(q===m)return A(!1);if(q&&a===t.target&&(n=q),n&&(i=O(n)),ue(D,a,m,s,n,i,t,!!n)!==!1)return B(),q&&q.nextSibling?a.insertBefore(m,q.nextSibling):a.appendChild(m),P=a,R(),A(!0)}else if(q&&ri(t,w,this)){var it=Ht(a,0,c,!0);if(it===m)return A(!1);if(n=it,i=O(n),ue(D,a,m,s,n,i,t,!1)!==!1)return B(),a.insertBefore(m,it),P=a,R(),A(!0)}else if(n.parentNode===a){i=O(n);var K=0,St,Nt=m.parentNode!==a,W=!ei(m.animated&&m.toRect||s,n.animated&&n.toRect||i,w),Rt=w?"top":"left",mt=Na(n,"top","top")||Na(m,"top","top"),Vt=mt?mt.scrollTop:void 0;Dt!==n&&(St=i[Rt],Zt=!1,ce=!W&&c.invertSwap||Nt),K=li(t,n,i,w,W?1:c.swapThreshold,c.invertedSwapThreshold==null?c.swapThreshold:c.invertedSwapThreshold,ce,Dt===n);var ut;if(K!==0){var kt=Q(m);do kt-=K,ut=P.children[kt];while(ut&&(S(ut,"display")==="none"||ut===T))}if(K===0||ut===n)return A(!1);Dt=n,Qt=K;var jt=n.nextElementSibling,vt=!1;vt=K===1;var oe=ue(D,a,m,s,n,i,t,vt);if(oe!==!1)return(oe===1||oe===-1)&&(vt=oe===1),aa=!0,setTimeout(ii,30),B(),vt&&!jt?a.appendChild(m):n.parentNode.insertBefore(m,vt?jt:n),mt&&En(mt,0,Vt-mt.scrollTop),P=m.parentNode,St!==void 0&&!ce&&(he=Math.abs(St-O(n)[Rt])),R(),A(!0)}if(a.contains(m))return A(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){L(document,"mousemove",this._onTouchMove),L(document,"touchmove",this._onTouchMove),L(document,"pointermove",this._onTouchMove),L(document,"dragover",Tt),L(document,"mousemove",Tt),L(document,"touchmove",Tt)},_offUpEvents:function(){var t=this.el.ownerDocument;L(t,"mouseup",this._onDrop),L(t,"touchend",this._onDrop),L(t,"pointerup",this._onDrop),L(t,"pointercancel",this._onDrop),L(t,"touchcancel",this._onDrop),L(document,"selectstart",this)},_onDrop:function(t){var a=this.el,n=this.options;if(J=Q(m),gt=Q(m,n.draggable),U("drop",this,{evt:t}),P=m&&m.parentNode,J=Q(m),gt=Q(m,n.draggable),k.eventCanceled){this._nulling();return}Pt=!1,ce=!1,Zt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),na(this.cloneId),na(this._dragStartId),this.nativeDraggable&&(L(document,"drop",this),L(a,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Gt&&S(document.body,"user-select",""),S(m,"transform",""),t&&(Bt&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),T&&T.parentNode&&T.parentNode.removeChild(T),(D===P||V&&V.lastPutMode!=="clone")&&C&&C.parentNode&&C.parentNode.removeChild(C),m&&(this.nativeDraggable&&L(m,"dragend",this),Fe(m),m.style["will-change"]="",Bt&&!Pt&&G(m,V?V.options.ghostClass:this.options.ghostClass,!1),G(m,this.options.chosenClass,!1),Y({sortable:this,name:"unchoose",toEl:P,newIndex:null,newDraggableIndex:null,originalEvent:t}),D!==P?(J>=0&&(Y({rootEl:P,name:"add",toEl:P,fromEl:D,originalEvent:t}),Y({sortable:this,name:"remove",toEl:P,originalEvent:t}),Y({rootEl:P,name:"sort",toEl:P,fromEl:D,originalEvent:t}),Y({sortable:this,name:"sort",toEl:P,originalEvent:t})),V&&V.save()):J!==zt&&J>=0&&(Y({sortable:this,name:"update",toEl:P,originalEvent:t}),Y({sortable:this,name:"sort",toEl:P,originalEvent:t})),k.active&&((J==null||J===-1)&&(J=zt,gt=Kt),Y({sortable:this,name:"end",toEl:P,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){U("nulling",this),D=m=P=T=Mt=C=pe=bt=Et=at=Bt=J=gt=zt=Kt=Dt=Qt=V=le=k.dragged=k.ghost=k.clone=k.active=null;var t=this.el;ye.forEach(function(a){t.contains(a)&&(a.checked=!0)}),ye.length=Ve=je=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":m&&(this._onDragOver(t),si(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],a,n=this.el.children,s=0,i=n.length,l=this.options;s<i;s++)a=n[s],st(a,l.draggable,this.el,!1)&&t.push(a.getAttribute(l.dataIdAttr)||di(a));return t},sort:function(t,a){var n={},s=this.el;this.toArray().forEach(function(i,l){var c=s.children[l];st(c,this.options.draggable,s,!1)&&(n[i]=c)},this),a&&this.captureAnimationState(),t.forEach(function(i){n[i]&&(s.removeChild(n[i]),s.appendChild(n[i]))}),a&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,a){return st(t,a||this.options.draggable,this.el,!1)},option:function(t,a){var n=this.options;if(a===void 0)return n[t];var s=se.modifyOption(this,t,a);typeof s<"u"?n[t]=s:n[t]=a,t==="group"&&xn(n)},destroy:function(){U("destroy",this);var t=this.el;t[X]=null,L(t,"mousedown",this._onTapStart),L(t,"touchstart",this._onTapStart),L(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(L(t,"dragover",this),L(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(a){a.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),be.splice(be.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!bt){if(U("hideClone",this),k.eventCanceled)return;S(C,"display","none"),this.options.removeCloneOnHide&&C.parentNode&&C.parentNode.removeChild(C),bt=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(bt){if(U("showClone",this),k.eventCanceled)return;m.parentNode==D&&!this.options.group.revertClone?D.insertBefore(C,m):Mt?D.insertBefore(C,Mt):D.appendChild(C),this.options.group.revertClone&&this.animate(m,C),S(C,"display",""),bt=!1}}};function si(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function ue(e,t,a,n,s,i,l,c){var r,p=e[X],b=p.options.onMove,g;return window.CustomEvent&&!ft&&!ne?r=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(r=document.createEvent("Event"),r.initEvent("move",!0,!0)),r.to=t,r.from=e,r.dragged=a,r.draggedRect=n,r.related=s||t,r.relatedRect=i||O(t),r.willInsertAfter=c,r.originalEvent=l,e.dispatchEvent(r),b&&(g=b.call(p,r,l)),g}function Fe(e){e.draggable=!1}function ii(){aa=!1}function ri(e,t,a){var n=O(Ht(a.el,0,a.options,!0)),s=Mn(a.el,a.options,T),i=10;return t?e.clientX<s.left-i||e.clientY<n.top&&e.clientX<n.right:e.clientY<s.top-i||e.clientY<n.bottom&&e.clientX<n.left}function oi(e,t,a){var n=O(ma(a.el,a.options.draggable)),s=Mn(a.el,a.options,T),i=10;return t?e.clientX>s.right+i||e.clientY>n.bottom&&e.clientX>n.left:e.clientY>s.bottom+i||e.clientX>n.right&&e.clientY>n.top}function li(e,t,a,n,s,i,l,c){var r=n?e.clientY:e.clientX,p=n?a.height:a.width,b=n?a.top:a.left,g=n?a.bottom:a.right,f=!1;if(!l){if(c&&he<p*s){if(!Zt&&(Qt===1?r>b+p*i/2:r<g-p*i/2)&&(Zt=!0),Zt)f=!0;else if(Qt===1?r<b+he:r>g-he)return-Qt}else if(r>b+p*(1-s)/2&&r<g-p*(1-s)/2)return ci(t)}return f=f||l,f&&(r<b+p*i/2||r>g-p*i/2)?r>b+p/2?1:-1:0}function ci(e){return Q(m)<Q(e)?1:-1}function di(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,a=t.length,n=0;a--;)n+=t.charCodeAt(a);return n.toString(36)}function ui(e){ye.length=0;for(var t=e.getElementsByTagName("input"),a=t.length;a--;){var n=t[a];n.checked&&ye.push(n)}}function fe(e){return setTimeout(e,0)}function na(e){return clearTimeout(e)}De&&x(document,"touchmove",function(e){(k.active||Pt)&&e.cancelable&&e.preventDefault()});k.utils={on:x,off:L,css:S,find:Sn,is:function(t,a){return!!st(t,a,t,!1)},extend:Xs,throttle:kn,closest:st,toggleClass:G,clone:Tn,index:Q,nextTick:fe,cancelNextTick:na,detectDirection:_n,getChild:Ht,expando:X};k.get=function(e){return e[X]};k.mount=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];t[0].constructor===Array&&(t=t[0]),t.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(k.utils=lt(lt({},k.utils),n.utils)),se.mount(n)})};k.create=function(e,t){return new k(e,t)};k.version=Bs;var H=[],Ut,sa,ia=!1,Be,Ue,we,Xt;function pi(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(a){var n=a.originalEvent;this.sortable.nativeDraggable?x(document,"dragover",this._handleAutoScroll):this.options.supportPointer?x(document,"pointermove",this._handleFallbackAutoScroll):n.touches?x(document,"touchmove",this._handleFallbackAutoScroll):x(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(a){var n=a.originalEvent;!this.options.dragOverBubble&&!n.rootEl&&this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?L(document,"dragover",this._handleAutoScroll):(L(document,"pointermove",this._handleFallbackAutoScroll),L(document,"touchmove",this._handleFallbackAutoScroll),L(document,"mousemove",this._handleFallbackAutoScroll)),Fa(),me(),Ws()},nulling:function(){we=sa=Ut=ia=Xt=Be=Ue=null,H.length=0},_handleFallbackAutoScroll:function(a){this._handleAutoScroll(a,!0)},_handleAutoScroll:function(a,n){var s=this,i=(a.touches?a.touches[0]:a).clientX,l=(a.touches?a.touches[0]:a).clientY,c=document.elementFromPoint(i,l);if(we=a,n||this.options.forceAutoScrollFallback||ne||ft||Gt){Xe(a,this.options,c,n);var r=yt(c,!0);ia&&(!Xt||i!==Be||l!==Ue)&&(Xt&&Fa(),Xt=setInterval(function(){var p=yt(document.elementFromPoint(i,l),!0);p!==r&&(r=p,me()),Xe(a,s.options,p,n)},10),Be=i,Ue=l)}else{if(!this.options.bubbleScroll||yt(c,!0)===ot()){me();return}Xe(a,this.options,yt(c,!1),!1)}}},ht(e,{pluginName:"scroll",initializeByDefault:!0})}function me(){H.forEach(function(e){clearInterval(e.pid)}),H=[]}function Fa(){clearInterval(Xt)}var Xe=kn(function(e,t,a,n){if(t.scroll){var s=(e.touches?e.touches[0]:e).clientX,i=(e.touches?e.touches[0]:e).clientY,l=t.scrollSensitivity,c=t.scrollSpeed,r=ot(),p=!1,b;sa!==a&&(sa=a,me(),Ut=t.scroll,b=t.scrollFn,Ut===!0&&(Ut=yt(a,!0)));var g=0,f=Ut;do{var w=f,E=O(w),_=E.top,I=E.bottom,B=E.left,A=E.right,R=E.width,q=E.height,it=void 0,K=void 0,St=w.scrollWidth,Nt=w.scrollHeight,W=S(w),Rt=w.scrollLeft,mt=w.scrollTop;w===r?(it=R<St&&(W.overflowX==="auto"||W.overflowX==="scroll"||W.overflowX==="visible"),K=q<Nt&&(W.overflowY==="auto"||W.overflowY==="scroll"||W.overflowY==="visible")):(it=R<St&&(W.overflowX==="auto"||W.overflowX==="scroll"),K=q<Nt&&(W.overflowY==="auto"||W.overflowY==="scroll"));var Vt=it&&(Math.abs(A-s)<=l&&Rt+R<St)-(Math.abs(B-s)<=l&&!!Rt),ut=K&&(Math.abs(I-i)<=l&&mt+q<Nt)-(Math.abs(_-i)<=l&&!!mt);if(!H[g])for(var kt=0;kt<=g;kt++)H[kt]||(H[kt]={});(H[g].vx!=Vt||H[g].vy!=ut||H[g].el!==w)&&(H[g].el=w,H[g].vx=Vt,H[g].vy=ut,clearInterval(H[g].pid),(Vt!=0||ut!=0)&&(p=!0,H[g].pid=setInterval((function(){n&&this.layer===0&&k.active._onTouchMove(we);var jt=H[this.layer].vy?H[this.layer].vy*c:0,vt=H[this.layer].vx?H[this.layer].vx*c:0;typeof b=="function"&&b.call(k.dragged.parentNode[X],vt,jt,e,we,H[this.layer].el)!=="continue"||En(H[this.layer].el,vt,jt)}).bind({layer:g}),24))),g++}while(t.bubbleScroll&&f!==r&&(f=yt(f,!1)));ia=p}},30),Cn=function(t){var a=t.originalEvent,n=t.putSortable,s=t.dragEl,i=t.activeSortable,l=t.dispatchSortableEvent,c=t.hideGhostForTarget,r=t.unhideGhostForTarget;if(a){var p=n||i;c();var b=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,g=document.elementFromPoint(b.clientX,b.clientY);r(),p&&!p.el.contains(g)&&(l("spill"),this.onSpill({dragEl:s,putSortable:n}))}};function va(){}va.prototype={startIndex:null,dragStart:function(t){var a=t.oldDraggableIndex;this.startIndex=a},onSpill:function(t){var a=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var s=Ht(this.sortable.el,this.startIndex,this.options);s?this.sortable.el.insertBefore(a,s):this.sortable.el.appendChild(a),this.sortable.animateAll(),n&&n.animateAll()},drop:Cn};ht(va,{pluginName:"revertOnSpill"});function ga(){}ga.prototype={onSpill:function(t){var a=t.dragEl,n=t.putSortable,s=n||this.sortable;s.captureAnimationState(),a.parentNode&&a.parentNode.removeChild(a),s.animateAll()},drop:Cn};ht(ga,{pluginName:"removeOnSpill"});k.mount(new pi);k.mount(ga,va);const Pn=[32,64,125,250,500,1e3,2e3,4e3,8e3,16e3],ra={flat:{name:"Ровно",gains:[0,0,0,0,0,0,0,0,0,0]},rock:{name:"Рок",gains:[5,4,2,-1,-2,0,2,3,4,5]},pop:{name:"Поп",gains:[-1,0,2,4,4,2,0,-1,-2,-3]},jazz:{name:"Джаз",gains:[4,3,1,2,-1,-1,0,2,3,4]},bass:{name:"Бас",gains:[8,7,5,2,0,-1,-2,-3,-4,-5]},vocal:{name:"Вокал",gains:[-3,-2,0,3,5,5,3,1,0,-1]},electronic:{name:"Электроника",gains:[5,4,1,0,-2,2,1,2,5,6]}},Ba="rustream.volume",Ua="rustream.eq",Xa="rustream.mode",We="rustream.playback.queue",Wa="rustream.playback.position";function Ga(e,t){try{return JSON.parse(localStorage.getItem(e))??t}catch{return t}}class hi extends EventTarget{constructor(){super(),this.audio=new Audio,this.audio.preload="auto",this.audio.crossOrigin="anonymous",this.queue=[],this.index=-1,this.shuffle=!1,this.repeat="off",this.track=null,this.playId=null,this.scrobbled=!1,this.liveMode=!1,this.mode=Ga(Xa,{shuffle:!1,repeat:"off"}),this.shuffle=!!this.mode.shuffle,this.repeat=this.mode.repeat||"off",this.volume=Number(localStorage.getItem(Ba)??80),this.audio.volume=Math.min(1,Math.max(0,this.volume/100)),this.eqState=Ga(Ua,{enabled:!0,preset:"flat",gains:[...ra.flat.gains]}),this.audioContext=null,this.filters=[],this.sourceNode=null,this._lastPositionWrite=0,this._restoredPause=!1,this._bindAudio(),window.addEventListener("pagehide",()=>this._storePosition(!0))}_bindAudio(){this.audio.addEventListener("timeupdate",()=>{this._maybeScrobble(),this._storePosition(),this._emit("time")}),this.audio.addEventListener("durationchange",()=>this._emit("time")),this.audio.addEventListener("progress",()=>this._emit("buffer")),this.audio.addEventListener("loadedmetadata",()=>this._emit("time")),this.audio.addEventListener("play",()=>{!this.playId&&this.track&&this._restoredPause&&(this._restoredPause=!1,this._beginPlay(this.track)),this._storePosition(!0),this._emit("state")}),this.audio.addEventListener("pause",()=>{this._storePosition(!0),this._emit("state")}),this.audio.addEventListener("volumechange",()=>this._emit("volume")),this.audio.addEventListener("ended",()=>this._onEnded()),this.audio.addEventListener("waiting",()=>this._emit("state")),this.audio.addEventListener("playing",()=>this._emit("state")),this.audio.addEventListener("error",()=>{if(!this.track)return;const a=this.track.source==="ytm"||String(this.track.id).startsWith("ytm-")?`YouTube не отдал поток для «${this.track.title}». Проверьте, что трек доступен, и обновите cookies в профиле.`:`Не удалось воспроизвести «${this.track.title}». Файл повреждён или недоступен.`;this.dispatchEvent(new CustomEvent("error",{detail:a}))})}_emit(t){this.dispatchEvent(new CustomEvent(t))}_initAudioGraph(){if(this.audioContext)return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.audioContext=new t,this.sourceNode=this.audioContext.createMediaElementSource(this.audio),this.filters=Pn.map(n=>{const s=this.audioContext.createBiquadFilter();return s.type="peaking",s.frequency.value=n,s.Q.value=1.1,s.gain.value=0,s});let a=this.sourceNode;for(const n of this.filters)a.connect(n),a=n;a.connect(this.audioContext.destination),this._applyEq()}_ensureRunning(){var t;this._initAudioGraph(),((t=this.audioContext)==null?void 0:t.state)==="suspended"&&this.audioContext.resume().catch(()=>{})}_applyEq(){this.filters.length&&this.filters.forEach((t,a)=>{t.gain.value=this.eqState.enabled&&this.eqState.gains[a]||0})}setEqEnabled(t){this.eqState.enabled=t,this._persistEq(),this._applyEq(),this._emit("eq")}setEqGain(t,a){this.eqState.gains[t]=Number(a),this.eqState.preset="custom",this._persistEq(),this._applyEq(),this._emit("eq")}applyEqPreset(t){const a=ra[t];a&&(this.eqState.preset=t,this.eqState.gains=[...a.gains],this._persistEq(),this._applyEq(),this._emit("eq"))}resetEq(){this.applyEqPreset("flat")}_persistEq(){localStorage.setItem(Ua,JSON.stringify(this.eqState))}async playTracks(t,a=0,{shuffle:n=!1}={}){t!=null&&t.length&&(this._finalizePlay(!1),this.queue=[...t],n&&(this.shuffle=!0,this._persistMode()),this.index=Math.min(Math.max(0,a),this.queue.length-1),this._storeQueue(),await this._load(this.queue[this.index],!0))}async playAt(t){t<0||t>=this.queue.length||(this.index=t,this._storeQueue(),await this._load(this.queue[t],!0))}async _load(t,a){if(t&&(this._restoredPause=!1,this._finalizePlay(!1),this.track=t,this.audio.src=Ie(t.id),this._beginPlay(t),this._updateMediaSession(t),this.dispatchEvent(new CustomEvent("track",{detail:t})),a)){this._ensureRunning();try{await this.audio.play()}catch{}}}async toggle(){this.track&&(this._ensureRunning(),this.audio.paused?await this.audio.play().catch(()=>{}):this.audio.pause())}pause(){this.audio.pause()}async next(t=!1){if(!this.queue.length)return;if(t&&this.repeat==="one"){this.audio.currentTime=0,await this.audio.play().catch(()=>{});return}let a;if(this.shuffle?a=this.queue.length>1?this._randomIndex():this.index:a=this.index+1,a>=this.queue.length)if(this.repeat==="all")a=0;else{this.audio.pause();return}await this.playAt(a)}async previous(){if(!this.queue.length)return;if(this.audio.currentTime>3){this.audio.currentTime=0;return}const t=this.index>0?this.index-1:this.queue.length-1;await this.playAt(t)}moveInQueue(t,a){if(t===a||t<0||a<0||t>=this.queue.length||a>=this.queue.length)return;const[n]=this.queue.splice(t,1);this.queue.splice(a,0,n),this.index===t?this.index=a:t<this.index&&a>=this.index?this.index--:t>this.index&&a<=this.index&&this.index++,this._storeQueue(),this._emit("queue")}_randomIndex(){if(this.queue.length<=1)return this.index;let t=this.index;for(;t===this.index;)t=Math.floor(Math.random()*this.queue.length);return t}async _onEnded(){if(this._finalizePlay(!0),this.repeat==="one"){this.audio.currentTime=0,this._beginPlay(this.track),await this.audio.play().catch(()=>{});return}if(this.index>=this.queue.length-1&&this.repeat==="off"&&!this.shuffle){this._emit("state"),this._emit("queueend");return}await this.next(!0)}async _beginPlay(t){this.playId=null,this.scrobbled=!1;try{const a=await Ss(t.id);this.playId=(a==null?void 0:a.playId)||null}catch{}}_maybeScrobble(){if(!this.playId||this.scrobbled)return;const t=this.audio.duration;!Number.isFinite(t)||t<30||(this.audio.currentTime>=t/2||this.audio.currentTime>=240)&&(this.scrobbled=!0,qa(this.playId,Math.round(this.audio.currentTime*1e3),!0).catch(()=>{}))}_finalizePlay(t){if(!this.playId)return;const a=this.playId;this.playId=null,qa(a,Math.round((this.audio.currentTime||0)*1e3),t).catch(()=>{})}appendTracks(t){t!=null&&t.length&&(this.queue.push(...t),this._storeQueue())}toggleShuffle(){this.shuffle=!this.shuffle,this._persistMode(),this._emit("mode")}cycleRepeat(){const t=["off","all","one"];this.repeat=t[(t.indexOf(this.repeat)+1)%t.length],this._persistMode(),this._emit("mode")}_persistMode(){localStorage.setItem(Xa,JSON.stringify({shuffle:this.shuffle,repeat:this.repeat}))}seekTo(t){const a=this.audio.duration;!Number.isFinite(a)||a<=0||(this.audio.currentTime=Math.min(100,Math.max(0,t))/100*a,this._emit("time"))}seekToSeconds(t){const a=this.audio.duration;!Number.isFinite(a)||a<=0||(this.audio.currentTime=Math.min(a,Math.max(0,t)),this._emit("time"))}removeAt(t){t<0||t>=this.queue.length||t===this.index||(this.queue.splice(t,1),t<this.index&&(this.index-=1),this._storeQueue())}seekBy(t){Number.isFinite(this.audio.duration)&&(this.audio.currentTime=Math.min(this.audio.duration,Math.max(0,this.audio.currentTime+t)),this._emit("time"))}setVolume(t){this.volume=Number(t),this.audio.volume=Math.min(1,Math.max(0,this.volume/100)),this.volume>0&&(this.audio.muted=!1),localStorage.setItem(Ba,String(this.volume))}toggleMute(){this.audio.muted=!this.audio.muted,this._emit("volume")}get currentTime(){return this.audio.currentTime||0}get duration(){return Number.isFinite(this.audio.duration)?this.audio.duration:0}get paused(){return this.audio.paused}get volumePercent(){return this.audio.muted?0:Math.round(this.audio.volume*100)}get buffered(){const t=this.duration;if(!t)return{end:0,percent:0,ahead:0};const a=this.audio.currentTime;let n=0;for(let s=0;s<this.audio.buffered.length;s+=1)this.audio.buffered.start(s)<=a+.5&&(n=Math.max(n,this.audio.buffered.end(s)));return{end:n,percent:Math.min(100,n/t*100),ahead:Math.max(0,n-a)}}estimatedBufferedBytes(){var a;const t=((a=this.track)==null?void 0:a.bitRate)||0;return t?t*1e3*this.buffered.ahead/8:0}_storeQueue(){try{const t={queue:this.queue,index:this.index,liveMode:!!this.liveMode,updatedAt:Date.now()};localStorage.setItem(We,JSON.stringify(t))}catch{}}setLiveMode(t){this.liveMode=!!t,this._storeQueue()}_storePosition(t=!1){if(!this.track)return;const a=Date.now();if(!(!t&&a-this._lastPositionWrite<2e3)){this._lastPositionWrite=a;try{localStorage.setItem(Wa,JSON.stringify({trackId:this.track.id,position:this.currentTime||0,paused:this.audio.paused,updatedAt:a}))}catch{}}}snapshotState(){return{queue:this.queue,index:this.index,liveMode:this.liveMode,position:Math.max(0,Math.floor(Number(this.audio.currentTime)||0)),updatedAt:Date.now()}}localUpdatedAt(){try{const t=JSON.parse(localStorage.getItem(We));return Number(t==null?void 0:t.updatedAt)||0}catch{return 0}}applyRemote(t){var n;if(!((n=t==null?void 0:t.queue)!=null&&n.length)||(this.queue=t.queue,this.index=Math.min(Math.max(0,Number(t.index)||0),this.queue.length-1),this.liveMode=!!t.liveMode,this.track=this.queue[this.index],!this.track))return null;this._restoredPause=!0,this.audio.src=Ie(this.track.id),this._updateMediaSession(this.track),this.dispatchEvent(new CustomEvent("track",{detail:this.track}));const a=Number(t.position)||0;if(a>1){const s=()=>{const i=this.audio.duration;(!Number.isFinite(i)||a<i-3)&&(this.audio.currentTime=a,this._emit("time"))};this.audio.readyState>=1?s():this.audio.addEventListener("loadedmetadata",s,{once:!0})}return this._storeQueue(),{track:this.track,liveMode:this.liveMode}}restore(){var n;let t=null;try{t=JSON.parse(localStorage.getItem(We))}catch{t=null}if(!((n=t==null?void 0:t.queue)!=null&&n.length)||Date.now()-(t.updatedAt||0)>1e3*60*60*24*7)return null;let a=null;try{a=JSON.parse(localStorage.getItem(Wa))}catch{a=null}if(this.queue=t.queue,this.index=Math.min(Math.max(0,Number(t.index)||0),this.queue.length-1),this.liveMode=!!t.liveMode,this.track=this.queue[this.index],!this.track)return null;if(this._restoredPause=!0,this.audio.src=Ie(this.track.id),this._updateMediaSession(this.track),this.dispatchEvent(new CustomEvent("track",{detail:this.track})),(a==null?void 0:a.trackId)===this.track.id&&Number(a.position)>1){const s=()=>{const i=this.audio.duration;Number.isFinite(i)&&a.position<i-3&&(this.audio.currentTime=a.position,this._emit("time"))};this.audio.readyState>=1?s():this.audio.addEventListener("loadedmetadata",s,{once:!0})}return{track:this.track,liveMode:this.liveMode}}clearRestored(){this._restoredPause=!1}_updateMediaSession(t){"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:t.title||"",artist:t.artist||"",album:t.album||"",artwork:t.coverArt?[{src:Lt(t.coverArt,512),sizes:"512x512",type:"image/jpeg"}]:[]}),navigator.mediaSession.setActionHandler("play",()=>this.toggle()),navigator.mediaSession.setActionHandler("pause",()=>this.toggle()),navigator.mediaSession.setActionHandler("previoustrack",()=>this.previous()),navigator.mediaSession.setActionHandler("nexttrack",()=>this.next()))}}function wt(e){if(!Number.isFinite(e)||e<0)return"0:00";const t=Math.floor(e/60),a=Math.floor(e%60);return`${t}:${String(a).padStart(2,"0")}`}function zn(e){const t=Math.round(e/6e4),a=Math.floor(t/60);return a>0?`${a} ч ${t%60} мин`:`${t} мин`}function $e(e){if(!e)return"0 Б";const t=["Б","КБ","МБ","ГБ","ТБ"];let a=e,n=0;for(;a>=1024&&n<t.length-1;)a/=1024,n+=1;return`${a>=10||n===0?Math.round(a):a.toFixed(1)} ${t[n]}`}const h=new hi,fi=document.getElementById("app"),o={currentTracks:[],favorites:new Set,dislikes:new Set,favoriteAlbums:new Set,theme:"violet",lyrics:null,lyricsTrackId:null,lyricsRefresh:!1,lyricsActiveKey:null,npTab:"lyrics",npOpen:!1,allTracks:null,artists:null,albums:null,stats:null,playlists:null,me:null,meStats:null,authConfig:null,lastfmConfig:null,liveMode:!1,liveMixes:[],renderSeq:0},$={artists:null,albums:null,tracks:null,stats:null,playlists:null,favorites:null,ratings:null,recent:null,meStats:null,liveMixes:null};fi.innerHTML=`
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
        <div class="nav-group-label">Слушать</div>
        <a href="#/home" data-nav="home" class="nav-item"><span class="nav-icon">${d("home")}</span><span class="nav-label">Главная</span></a>
        <a href="#/search" data-nav="search" class="nav-item"><span class="nav-icon">${d("search")}</span><span class="nav-label">Поиск</span></a>
        <a href="#/live" data-nav="live" class="nav-item"><span class="nav-icon">${d("radio")}</span><span class="nav-label">Live</span></a>
        <a href="#/ytm" data-nav="ytm" class="nav-item"><span class="nav-icon">${d("ytm")}</span><span class="nav-label">YouTube Music</span></a>
      </div>
      <div class="nav-group">
        <div class="nav-group-label">Медиатека</div>
        <a href="#/library" data-nav="library" class="nav-item"><span class="nav-icon">${d("album")}</span><span class="nav-label">Обзор</span></a>
        <a href="#/artists" data-nav="artists" class="nav-item"><span class="nav-icon">${d("person")}</span><span class="nav-label">Артисты</span></a>
        <a href="#/albums" data-nav="albums" class="nav-item"><span class="nav-icon">${d("album")}</span><span class="nav-label">Альбомы</span></a>
        <a href="#/tracks" data-nav="tracks" class="nav-item"><span class="nav-icon">${d("music")}</span><span class="nav-label">Треки</span></a>
        <a href="#/playlists" data-nav="playlists" class="nav-item"><span class="nav-icon">${d("playlist")}</span><span class="nav-label">Плейлисты</span></a>
        <a href="#/favorites" data-nav="favorites" class="nav-item"><span class="nav-icon">${d("heart")}</span><span class="nav-label">Избранное</span></a>
      </div>
      <div class="nav-group">
        <div class="nav-group-label">Вы</div>
        <a href="#/stats" data-nav="stats" class="nav-item"><span class="nav-icon">${d("chart")}</span><span class="nav-label">Статистика</span></a>
        <a href="#/profile" data-nav="profile" class="nav-item"><span class="nav-icon">${d("person")}</span><span class="nav-label">Профиль</span></a>
      </div>
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
        <input type="range" id="volume" min="0" max="100" value="${h.volumePercent}" aria-label="Громкость" />
      </div>
    </div>
  </footer>

  <nav class="tabbar" aria-label="Основное меню">
    <a href="#/home" data-tab="home" class="tab-item"><span class="tab-icon">${d("home")}</span><span class="tab-label">Главная</span></a>
    <a href="#/search" data-tab="search" class="tab-item"><span class="tab-icon">${d("search")}</span><span class="tab-label">Поиск</span></a>
    <a href="#/library" data-tab="library" class="tab-item"><span class="tab-icon">${d("album")}</span><span class="tab-label">Медиатека</span></a>
    <a href="#/profile" data-tab="profile" class="tab-item"><span class="tab-icon">${d("person")}</span><span class="tab-label">Профиль</span></a>
  </nav>

  <div class="np" id="np" hidden>
    <div class="np-backdrop" data-action="close-np"></div>
    <div class="np-sheet" role="dialog" aria-modal="true" aria-label="Плеер">
      <div class="np-grabber"></div>
      <div class="np-head">
        <button class="icon-btn" data-action="close-np" title="Свернуть">${d("close")}</button>
        <div class="np-tabs">
          <button class="np-tab" data-np-tab="lyrics">${d("lyrics")}<span>Текст</span></button>
          <button class="np-tab" data-np-tab="eq">${d("equalizer")}<span>Эквалайзер</span></button>
          <button class="np-tab" data-np-tab="queue">${d("queue")}<span>Очередь</span></button>
        </div>
        <div class="np-head-spacer"></div>
      </div>
      <div class="np-body">
        <div class="np-side" id="np-side"></div>
        <div class="np-panel" id="np-panel"></div>
      </div>
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
          <input id="np-volume" type="range" min="0" max="100" value="${h.volumePercent}" aria-label="Громкость" />
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
`;const u=(e,t=document)=>t.querySelector(e),tt=(e,t=document)=>[...t.querySelectorAll(e)];function v(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ba(e){const t=String(e||"?").trim().split(/\s+/).filter(Boolean);return t.length?t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+t[1][0]).toUpperCase():"?"}function te(){var e,t;return((e=o.me)==null?void 0:e.displayName)||((t=o.me)==null?void 0:t.username)||"Аккаунт"}function qn(e){return(e==null?void 0:e.status)===401}function Ot(e){return qn(e)?(_t(),!0):!1}function dt(e,{size:t=400,alt:a="",className:n=""}={}){return`<span class="cover ${n}">
    <span class="cover-fallback">${d("music")}</span>
    ${e?`<img src="${Lt(e,t)}" alt="${v(a)}" loading="lazy" decoding="async" />`:""}
  </span>`}function y(e,t="info"){const a=u("#toast");a.textContent=e,a.className=`toast show ${t}`,clearTimeout(y._timer),y._timer=setTimeout(()=>{a.className="toast"},t==="error"?6e3:3200)}function F(){u("#view").innerHTML=`
    <div class="page">
      <div class="skeleton skeleton-title"></div>
      <div class="grid cards">
        ${Array.from({length:8}).map(()=>`<div class="card skeleton-card">
              <div class="skeleton skeleton-cover"></div>
              <div class="skeleton skeleton-line"></div>
              <div class="skeleton skeleton-line short"></div>
            </div>`).join("")}
      </div>
    </div>`}function mi(e){u("#view").innerHTML=`
    <div class="page">
      <div class="empty-state">
        <span class="empty-icon">${d("wave")}</span>
        <h2>Что-то пошло не так</h2>
        <p>${v(e)}</p>
        <button class="btn tonal" data-action="reload">Попробовать снова</button>
      </div>
    </div>`}function $t(e,t,{actions:a="",eyebrow:n=""}={}){return`<header class="page-head">
    <div>
      ${n?`<div class="eyebrow">${v(n)}</div>`:""}
      <h1>${v(e)}</h1>
      ${t?`<p class="muted">${t}</p>`:""}
    </div>
    ${a?`<div class="page-actions">${a}</div>`:""}
  </header>`}function ie(e){return`<article class="card" data-action="open" data-href="#/album/${e.id}" tabindex="0">
    <div class="card-cover">${dt(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${v(e.name)}</div>
      <div class="card-sub">${v(e.artist||"Неизвестный артист")}${e.year?` · ${e.year}`:""}</div>
    </div>
    <button class="card-play" data-action="play-album" data-id="${e.id}" title="Слушать альбом">${d("play")}</button>
  </article>`}function ya(e){return`<article class="card artist-card" data-action="open" data-href="#/artist/${e.id}" tabindex="0">
    <div class="card-cover round">${dt(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${v(e.name)}</div>
      <div class="card-sub">${e.albumCount??0} ${N(e.albumCount??0,"альбом","альбома","альбомов")}</div>
    </div>
  </article>`}function N(e,t,a,n){const s=e%10,i=e%100;return s===1&&i!==11?t:s>=2&&s<=4&&(i<12||i>14)?a:n}function vi(e){return(e==null?void 0:e.source)==="ytm"?'<span class="track-badge ytm" title="Источник: YouTube Music">YT</span>':`<span class="track-badge">${v(((e==null?void 0:e.suffix)||"flac").toUpperCase())}</span>`}function gi(e,t,{showAlbum:a=!0,showCover:n=!1,playlistId:s=null,rowAction:i="play-row",rowList:l=null}={}){var b;const c=((b=h.track)==null?void 0:b.id)===e.id,r=o.favorites.has(e.id),p=e.track&&e.track>0?e.track:t+1;return`<div class="track-row ${c?"playing":""} ${n?"has-cover":""}" data-action="${i}" data-index="${t}" data-track-id="${v(e.id)}" ${l?`data-list="${l}"`:""} tabindex="0">
    <div class="track-index">
      <span class="track-num">${p}</span>
      <span class="track-eq"><i></i><i></i><i></i></span>
    </div>
    ${n?`<span class="track-cover">${dt(e.coverArt||e.albumId,{size:80})}</span>`:""}
    <div class="track-main">
      <div class="track-title">${v(e.title)}</div>
      <div class="track-sub">${v(e.artist||"")}${a&&e.album?` · ${v(e.album)}`:""}</div>
    </div>
    ${vi(e)}
    <span class="track-duration">${wt(e.duration)}</span>
    <button class="icon-btn row-btn like ${r?"active":""}" data-action="like" data-id="${e.id}" title="В избранное">${d(r?"heart":"heartOutline")}</button>
    <button class="icon-btn row-btn dislike ${o.dislikes.has(e.id)?"active":""}" data-action="dislike" data-id="${e.id}" title="Не нравится">${d("thumbDown")}</button>
    ${s?`<button class="icon-btn row-btn" data-action="remove-from-playlist" data-playlist="${s}" data-index="${t}" title="Убрать из плейлиста">${d("delete")}</button>`:`<button class="icon-btn row-btn" data-action="add-to-playlist" data-id="${e.id}" title="Добавить в плейлист">${d("add")}</button>`}
  </div>`}function et(e,t={}){return e.length?`<div class="track-list">${e.map((a,n)=>gi(a,n,t)).join("")}</div>`:'<div class="empty-inline">Треков пока нет</div>'}const oa="#/home",bi="Rustream — твоя музыка";function yi(){const e=location.hash.replace(/^#/,"")||"/home",[t,a=""]=e.split("?");return{parts:t.split("/").filter(Boolean),params:new URLSearchParams(a)}}const wi={artist:"artists",album:"albums",playlist:"playlists"},$i=new Set(["library","artists","albums","tracks","playlists","favorites","stats"]),Ja={index:"home",yt:"ytm",favourite:"favorites",song:"tracks"},Si={home:"Главная",live:"Live",search:"Поиск",library:"Медиатека",artists:"Артисты",albums:"Альбомы",tracks:"Треки",playlists:"Плейлисты",favorites:"Избранное",stats:"Статистика",profile:"Профиль",ytm:"YouTube Music"},Ka={home:xi,live:Di,stats:Ci,artists:Pi,albums:qi,tracks:Hi,playlists:Oi,favorites:Vi,library:rr,profile:lr,ytm:cr},Ge={artist:zi,album:Ii,playlist:Ri},ki={artist:"Артист",album:"Альбом",playlist:"Плейлист"};function Je(e){location.hash!==e&&history.replaceState(null,"",e)}function In(e){const t=wi[e]||e;tt(".nav-item").forEach(a=>{a.classList.toggle("active",a.dataset.nav===t)}),tt(".tab-item").forEach(a=>{const n=a.dataset.tab,s=n===t||n==="library"&&$i.has(t)||n==="search"&&t==="search";a.classList.toggle("active",s)})}function Ei(e){const t=ki[e]||Si[e];document.title=t?`${t} — Rustream`:bi}function Qa(e=""){In(""),document.title="Страница не найдена — Rustream",u("#view").innerHTML=`
    <div class="page">
      <div class="empty-state notfound">
        <span class="empty-icon">${d("search")}</span>
        <div class="eyebrow">404</div>
        <h2>Такой страницы нет</h2>
        <p>${v(e||"Возможно, ссылка устарела или в адресе опечатка.")}</p>
        <div class="notfound-links">
          <a class="btn primary" href="${oa}">${d("home")} На главную</a>
          <a class="btn tonal" href="#/library">${d("album")} Медиатека</a>
          <a class="btn glass" href="#/search">${d("search")} Поиск</a>
        </div>
      </div>
    </div>`}async function z(){const{parts:e,params:t}=yi();let a=e[0]||"home";if(Ja[a]&&(a=Ja[a],Je(`#/${a}`)),a==="register")if(o.me)Je(oa),a="home";else{document.title="Регистрация — Rustream",Ma(t.get("invite")||"");return}if(a==="login")if(o.me)Je(oa),a="home";else{document.title="Вход — Rustream",_t();return}if(!o.me){_t();return}if(e.length>2||Ge[a]&&!e[1]){Qa(e.length>2?"Лишние части в адресе страницы.":"В ссылке не указан идентификатор.");return}const n=++o.renderSeq;In(a),Ei(a),u("#view").scrollTop=0;try{Ka[a]?await Ka[a](n,t):a==="search"?await ji(n,t.get("q")||""):Ge[a]?await Ge[a](n,e[1]):Qa(`Раздел «${a}» не существует.`)}catch(s){if(console.error(s),Ot(s))return;n===o.renderSeq&&mi(s.message||"Ошибка загрузки")}}async function Ti(){return $.stats||($.stats=await ms()),$.stats}async function Hn(){return $.artists||($.artists=await os()),$.artists}async function Mi(){return $.albums||($.albums=await ln("alphabeticalByArtist",500)),$.albums}async function wa(){if(!$.tracks){const e=await ls(500);e.sort((t,a)=>`${t.artist} ${t.album} ${String(t.track).padStart(3,"0")}`.localeCompare(`${a.artist} ${a.album} ${String(a.track).padStart(3,"0")}`,"ru")),$.tracks=e}return $.tracks}async function On(){if($.favorites||($.favorites=await fs()),o.favorites=new Set(($.favorites.song||[]).map(e=>e.id)),o.favoriteAlbums=new Set(($.favorites.album||[]).map(e=>e.id)),!$.ratings)try{$.ratings=await bs()}catch{$.ratings={liked:[],disliked:[]}}return o.dislikes=new Set(($.ratings.disliked||[]).filter(e=>!o.favorites.has(e))),$.favorites}async function $a(){return $.meStats||($.meStats=await pn()),o.meStats=$.meStats,$.meStats}async function Li(){return $.liveMixes||($.liveMixes=await ks()),o.liveMixes=$.liveMixes,$.liveMixes}async function _i(){$.artists=null,$.albums=null,$.tracks=null,$.stats=null,$.recent=null,$.meStats=null,$.liveMixes=null,y("Библиотека обновлена"),z()}async function xi(e){var g;F();const[t,a,n,s]=await Promise.all([$a(),$.recent?Promise.resolve($.recent):ln("newest",12),Hn(),wa()]);if(e!==o.renderSeq)return;$.recent=a;const i=o.ytmStatus||await Ae().catch(()=>null);o.ytmStatus=i;let l=[];if(i!=null&&i.connected&&(l=await bn(10).catch(()=>[])),e!==o.renderSeq)return;const c=[...s].sort(()=>Math.random()-.5).slice(0,6),r=(t.recent||[]).slice(0,6);o.lists={...o.lists||{},quick:c,recent:r},o.ytmLists={...o.ytmLists||{},history:l},o.currentTracks=s;const p=h.track,b=h.queue.length?h.queue:null;u("#view").innerHTML=`
    <div class="page home quick-home">
      <header class="page-head home-head">
        <div>
          <span class="eyebrow"><span class="live-dot"></span>${v(Ai())}, ${v(te())}</span>
          <h1>Что послушаем?</h1>
        </div>
        <div class="head-actions">
          <button class="btn primary" data-action="play-all">${d("play")} Слушать всё</button>
          <button class="btn glass" data-action="shuffle-all">${d("shuffle")} Перемешать</button>
        </div>
      </header>

      ${p?`<section class="continue-card">
              <span class="continue-cover">${dt(p.coverArt||p.albumId,{size:120,alt:p.title})}</span>
              <span class="continue-main">
                <span class="eyebrow">Продолжить слушать</span>
                <strong>${v(p.title)}</strong>
                <small>${v(p.artist||"")}${b?` · ${h.index+1} из ${h.queue.length}`:""}</small>
              </span>
              <button class="btn primary" data-action="toggle">${d(h.paused?"play":"pause")} ${h.paused?"Продолжить":"Пауза"}</button>
              <a class="btn ghost" href="#/live">${d("queue")} Очередь</a>
            </section>`:""}

      ${c.length?`<section class="section">
              <div class="section-head">
                <div>
                  <h2>Быстрый выбор</h2>
                  <p class="muted">Случайные треки из вашей библиотеки</p>
                </div>
                <button class="text-link" data-action="shuffle-library">Перемешать всё ${d("next")}</button>
              </div>
              ${et(c,{showCover:!0,rowAction:"play-list-row",rowList:"quick"})}
            </section>`:""}

      ${r.length?`<section class="section">
              <div class="section-head">
                <div>
                  <h2>Недавно слушали</h2>
                  <p class="muted">Продолжите с любого места</p>
                </div>
                <a class="text-link" href="#/stats">История ${d("next")}</a>
              </div>
              ${et(r,{showCover:!0,rowAction:"play-list-row",rowList:"recent"})}
            </section>`:""}

      <section class="section">
        <div class="section-head">
          <div>
            <h2>Недавно добавленные</h2>
            <p class="muted">Свежие поступления в библиотеке</p>
          </div>
          <a class="text-link" href="#/albums">Все альбомы ${d("next")}</a>
        </div>
        <div class="grid cards">${a.slice(0,8).map(ie).join("")}</div>
      </section>

      ${l.length?`<section class="section">
              <div class="section-head">
                <div>
                  <h2>Из YouTube Music</h2>
                  <p class="muted">Внешний источник — помечено меткой <span class="track-badge ytm inline">YT</span></p>
                </div>
                <a class="text-link" href="#/ytm">Открыть YouTube ${d("next")}</a>
              </div>
              ${et(l.slice(0,6),{showCover:!0,rowAction:"play-ytm-row",rowList:"history"})}
            </section>`:""}

      <section class="section">
        <div class="section-head">
          <div>
            <h2>Любимые артисты</h2>
            <p class="muted">${(g=t.topArtists)!=null&&g[0]?`Чаще всего вы слушаете ${v(t.topArtists[0].name)}`:"Начните слушать — и здесь появятся ваши артисты"}</p>
          </div>
          <a class="text-link" href="#/artists">Все артисты ${d("next")}</a>
        </div>
        <div class="grid cards artists-row">${n.slice(0,8).map(ya).join("")}</div>
      </section>

      <section class="section home-cta">
        <div class="cta-panel">
          <div>
            <div class="eyebrow">${d("chart")} Ваша статистика</div>
            <h2>${t.plays||0} ${N(t.plays||0,"прослушивание","прослушивания","прослушиваний")}</h2>
            <p class="muted">Часы, любимые артисты, лайки и дизлайки — на отдельной странице.</p>
          </div>
          <a class="btn glass" href="#/stats">${d("chart")} Открыть статистику</a>
        </div>
      </section>
    </div>`}function Ai(){const e=new Date().getHours();return e<6?"Доброй ночи":e<12?"Доброе утро":e<18?"Добрый день":"Добрый вечер"}async function Di(e){F();const[t,a]=await Promise.all([Li(),$a()]);e===o.renderSeq&&(u("#view").innerHTML=`
    <div class="page live-page">
      ${$t("Live","Персональный поток: избранное, любимые артисты и новые находки",{eyebrow:"Автоматический эфир",actions:`<button class="btn primary" data-action="start-live">${d("radio")} ${o.liveMode?"Перезапустить":"Включить Live"}</button>`})}

      <section class="live-hero">
        <div>
          <div class="eyebrow"><span class="live-dot"></span>${o.liveMode?"Эфир идёт":"Готов к запуску"}</div>
          <h2>${o.liveMode?"Поток подбирает следующий трек":"Очередь, которая слушает вас"}</h2>
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
          ${Array.from({length:24}).map((n,s)=>`<i style="--i:${s}"></i>`).join("")}
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
          ${t.map((n,s)=>{var i,l,c;return`<article class="mix-card ${(i=n.tracks)!=null&&i.length?"":"empty"}" data-action="play-mix" data-index="${s}" tabindex="0">
                <div class="mix-icon">${d(s===0?"heart":s===1?"album":"radio")}</div>
                <div class="mix-body">
                  <h3>${v(n.title)}</h3>
                  <p>${v(n.subtitle)}</p>
                  <span class="muted">${((l=n.tracks)==null?void 0:l.length)||0} ${N(((c=n.tracks)==null?void 0:c.length)||0,"трек","трека","треков")}</span>
                </div>
                <span class="mix-play">${d("play")}</span>
              </article>`}).join("")}
        </div>
      </section>

    </div>`)}async function Ci(e){var p,b,g;F();const t=await pn().catch(()=>o.meStats||{});if(e!==o.renderSeq)return;o.meStats=t,$.meStats=t;const a=((t.listenedMs||0)/36e5).toFixed(1),n=Math.round((t.listenedMs||0)/6e4),s=Math.max(1,...(t.byDay||[]).map(f=>f.ms)),i=t.recent||[];o.currentTracks=i;const l=[...t.byDay||[]].slice(-14),c=t.likes||0,r=t.dislikes||0;u("#view").innerHTML=`
    <div class="page stats-page">
      ${$t("Статистика","Только ваш аккаунт: время, артисты, жанры и оценки",{eyebrow:"Личные данные",actions:`<a class="btn glass" href="#/favorites">${d("heart")} Избранное</a>`})}

      <section class="stat-cards">
        <div class="stat-card"><span class="stat-icon">${d("clock")}</span><strong>${a} ч</strong><span>${n} минут музыки</span></div>
        <div class="stat-card"><span class="stat-icon">${d("play")}</span><strong>${t.plays||0}</strong><span>прослушиваний</span></div>
        <div class="stat-card"><span class="stat-icon like">${d("heart")}</span><strong>${c}</strong><span>лайков</span></div>
        <div class="stat-card"><span class="stat-icon dislike">${d("thumbDown")}</span><strong>${r}</strong><span>дизлайков</span></div>
      </section>

      <section class="section stats-grid">
        <div class="stats-panel">
          <div class="section-head"><h2>Последние 14 дней</h2><span class="muted">${a} ч всего</span></div>
          ${l.length?`<div class="day-chart">${l.map(f=>{const E=new Date(`${f.day}T00:00:00`).toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit"}),_=Math.max(4,Math.round(f.ms/s*100));return`<div class="day-col" title="${E}: ${Math.round(f.ms/6e4)} мин">
                      <span class="day-bar" style="height:${_}%"></span>
                      <span class="day-label">${E}</span>
                    </div>`}).join("")}</div>`:'<div class="empty-inline">Пока нет прослушиваний за две недели.</div>'}
        </div>
        <div class="stats-panel">
          <div class="section-head"><h2>Жанры</h2></div>
          ${(p=t.topGenres)!=null&&p.length?`<div class="genre-list">${t.topGenres.map(f=>{var w;return`<div class="genre-row">
                      <span class="genre-name">${v(f.name)}</span>
                      <span class="genre-bar"><i style="width:${Math.min(100,f.plays/(((w=t.topGenres[0])==null?void 0:w.plays)||1)*100)}%"></i></span>
                      <span class="genre-plays">${f.plays}</span>
                    </div>`}).join("")}</div>`:'<div class="empty-inline">Жанры появятся после прослушиваний.</div>'}
        </div>
      </section>

      <section class="section stats-grid">
        <div class="stats-panel">
          <div class="section-head"><h2>Любимые артисты</h2></div>
          ${(b=t.topArtists)!=null&&b.length?`<div class="rank-list">${t.topArtists.map((f,w)=>`<div class="rank-row">
                      <span class="rank-num">${w+1}</span>
                      <span class="rank-main"><strong>${v(f.name)}</strong><small>${f.plays} ${N(f.plays,"прослушивание","прослушивания","прослушиваний")}</small></span>
                    </div>`).join("")}</div>`:'<div class="empty-inline">Пока нет данных.</div>'}
        </div>
        <div class="stats-panel">
          <div class="section-head"><h2>Топ треков</h2></div>
          ${(g=t.topTracks)!=null&&g.length?`<div class="rank-list">${t.topTracks.slice(0,10).map((f,w)=>`<div class="rank-row">
                      <span class="rank-num">${w+1}</span>
                      <span class="rank-main"><strong>${v(f.title)}</strong><small>${v(f.artist)}</small></span>
                      <span class="rank-plays">${f.plays} ×</span>
                    </div>`).join("")}</div>`:'<div class="empty-inline">Пока нет данных.</div>'}
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <div><h2>Недавние треки</h2><p class="muted">Можно продолжить с любого места</p></div>
        </div>
        ${i.length?et(i,{showCover:!0}):'<div class="empty-inline">История пока пуста.</div>'}
      </section>
    </div>`}async function Pi(e){F();const t=await Hn();e===o.renderSeq&&(o.currentTracks=[],u("#view").innerHTML=`
    <div class="page">
      ${$t("Артисты",`${t.length} ${N(t.length,"артист","артиста","артистов")} в библиотеке`,{actions:`<button class="btn glass" data-action="shuffle-library">${d("shuffle")} Перемешать всё</button>`,eyebrow:"Коллекция"})}
      <div class="grid cards">${t.map(ya).join("")}</div>
    </div>`)}async function zi(e,t){F();const a=await on(t);if(e!==o.renderSeq)return;const n=a.artist,s=n.album||[];o.currentTracks=[],u("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/artists">${d("back")} Все артисты</a>
      <section class="collection-head">
        <div class="collection-art round">${dt(n.coverArt||n.id,{size:600,alt:n.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">Артист</div>
          <h1>${v(n.name)}</h1>
          <p class="muted">${s.length} ${N(s.length,"альбом","альбома","альбомов")}</p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-artist" data-id="${n.id}">${d("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-artist" data-id="${n.id}">${d("shuffle")} Перемешать</button>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section-head"><h2>Альбомы</h2></div>
        <div class="grid cards">${s.map(ie).join("")}</div>
      </section>
    </div>`}async function qi(e){F();const t=await Mi();e===o.renderSeq&&(o.currentTracks=[],u("#view").innerHTML=`
    <div class="page">
      ${$t("Альбомы",`${t.length} ${N(t.length,"альбом","альбома","альбомов")}`,{eyebrow:"Коллекция"})}
      <div class="grid cards">${t.map(ie).join("")}</div>
    </div>`)}async function Ii(e,t){F();const a=await pa(t);if(e!==o.renderSeq)return;const n=a.album,s=n.song||[];o.currentTracks=s,u("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/albums">${d("back")} Все альбомы</a>
      <section class="collection-head album-head">
        <div class="collection-art">${dt(n.coverArt||n.id,{size:800,alt:n.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">${n.year?`Альбом · ${n.year}`:"Альбом"}</div>
          <h1>${v(n.name)}</h1>
          <p class="muted">
            <a class="inline-link" href="#/artist/${n.artistId}">${v(n.artist)}</a>
            · ${s.length} ${N(s.length,"трек","трека","треков")}
            · ${zn(n.duration*1e3||0)}
          </p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-all">${d("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-all">${d("shuffle")} Перемешать</button>
          </div>
        </div>
      </section>
      <section class="section">
        ${et(s,{showAlbum:!1})}
      </section>
    </div>`}async function Hi(e){F();const t=await wa();e===o.renderSeq&&(o.currentTracks=t,u("#view").innerHTML=`
    <div class="page">
      ${$t("Все треки",`${t.length} ${N(t.length,"трек","трека","треков")}`,{eyebrow:"Библиотека",actions:`<button class="btn primary" data-action="play-all">${d("play")} Слушать</button>
                  <button class="btn glass" data-action="shuffle-all">${d("shuffle")} Перемешать</button>`})}
      ${et(t,{showCover:!0})}
    </div>`)}async function Oi(e){F();const t=await ha();e===o.renderSeq&&($.playlists=t,o.currentTracks=[],u("#view").innerHTML=`
    <div class="page">
      ${$t("Плейлисты",`${t.length} ${N(t.length,"плейлист","плейлиста","плейлистов")}`,{eyebrow:"Моя музыка",actions:`<button class="btn primary" data-action="new-playlist">${d("add")} Новый плейлист</button>`})}
      ${t.length?`<div class="grid cards">${t.map(Ni).join("")}</div>`:`<div class="empty-state"><span class="empty-icon">${d("playlist")}</span><h2>Плейлистов пока нет</h2><p>Соберите подборку из любимых треков.</p><button class="btn primary" data-action="new-playlist">${d("add")} Создать</button></div>`}
    </div>`)}function Ni(e){return`<article class="card" data-action="open" data-href="#/playlist/${e.id}" tabindex="0">
    <div class="card-cover">${dt(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${v(e.name)}</div>
      <div class="card-sub">${e.songCount??0} ${N(e.songCount??0,"трек","трека","треков")}</div>
    </div>
    <button class="card-play" data-action="open" data-href="#/playlist/${e.id}">${d("play")}</button>
  </article>`}async function Ri(e,t){F();const a=await ds(t);if(e!==o.renderSeq)return;const n=(a.entry||[]).map((s,i)=>({...s,track:i+1}));o.currentTracks=n,u("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/playlists">${d("back")} Все плейлисты</a>
      <section class="collection-head album-head">
        <div class="collection-art">${dt(a.coverArt||a.id,{size:800,alt:a.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">Плейлист</div>
          <h1>${v(a.name)}</h1>
          <p class="muted">${n.length} ${N(n.length,"трек","трека","треков")} · ${zn((a.duration||0)*1e3)}</p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-all">${d("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-all">${d("shuffle")} Перемешать</button>
            <button class="btn ghost danger" data-action="delete-playlist" data-id="${a.id}">${d("delete")} Удалить</button>
          </div>
        </div>
      </section>
      <section class="section">
        ${et(n,{showCover:!0,playlistId:a.id})}
      </section>
    </div>`}async function Vi(e){F();const t=await On();if(e!==o.renderSeq)return;const a=t.song||[];o.currentTracks=a,u("#view").innerHTML=`
    <div class="page">
      ${$t("Избранное",`${a.length} ${N(a.length,"трек","трека","треков")}`,{eyebrow:"Моя музыка",actions:a.length?`<button class="btn primary" data-action="play-all">${d("play")} Слушать</button>`:""})}
      ${a.length?et(a,{showCover:!0}):`<div class="empty-state"><span class="empty-icon">${d("heartOutline")}</span><h2>Здесь пока пусто</h2><p>Нажимайте на сердечко у трека, чтобы добавить его в избранное.</p></div>`}
      ${(t.album||[]).length?`<section class="section"><div class="section-head"><h2>Любимые альбомы</h2></div>
             <div class="grid cards">${t.album.map(ie).join("")}</div></section>`:""}
    </div>`}const Sa="rustream.searches";function Nn(){try{const e=JSON.parse(localStorage.getItem(Sa));return Array.isArray(e)?e.slice(0,8):[]}catch{return[]}}function Rn(e){const t=String(e||"").trim();if(t.length<2)return;const a=[t,...Nn().filter(n=>n!==t)].slice(0,8);localStorage.setItem(Sa,JSON.stringify(a))}function la(e){const t=String(e||"").trim();if(!t)return;Rn(t);const a=`#/search?q=${encodeURIComponent(t)}`;location.hash===a?z():location.hash=a}async function ji(e,t){const a=u("#search-input");if(a.value!==t&&(a.value=t),!t.trim()){const i=Nn();u("#view").innerHTML=`
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
                <div class="chip-row">${i.map(r=>`<button class="chip-btn" data-action="run-search" data-query="${v(r)}">${v(r)}</button>`).join("")}</div>
              </section>`:""}

        <section class="section">
          <div class="section-head"><h2>Популярное</h2></div>
          <div class="chip-row">
            ${["Chiki The Maid","Intro","Poezd","FLAC","Аниме","Рок","Джаз"].map(r=>`<button class="chip-btn" data-action="run-search" data-query="${v(r)}">${v(r)}</button>`).join("")}
          </div>
        </section>
      </div>`;const l=u("#page-search-form"),c=u("#page-search-input");l==null||l.addEventListener("submit",r=>{r.preventDefault(),la(c.value)}),c==null||c.addEventListener("keydown",r=>{r.key==="Enter"&&la(c.value)});return}F();const n=await cs(t);if(e!==o.renderSeq)return;const s=n.song||[];o.currentTracks=s,u("#view").innerHTML=`
    <div class="page">
      ${$t(`Поиск: ${t}`,`Найдено ${s.length} ${N(s.length,"трек","трека","треков")}, ${(n.album||[]).length} ${N((n.album||[]).length,"альбом","альбома","альбомов")}`,{eyebrow:"Результаты"})}
      ${(n.artist||[]).length?`<section class="section"><div class="section-head"><h2>Артисты</h2></div><div class="grid cards">${n.artist.map(ya).join("")}</div></section>`:""}
      ${(n.album||[]).length?`<section class="section"><div class="section-head"><h2>Альбомы</h2></div><div class="grid cards">${n.album.map(ie).join("")}</div></section>`:""}
      ${s.length?`<section class="section"><div class="section-head"><h2>Треки</h2></div>${et(s,{showCover:!0})}</section>`:""}
      ${!s.length&&!(n.album||[]).length&&!(n.artist||[]).length?`<div class="empty-state"><span class="empty-icon">${d("search")}</span><h2>Ничего не найдено</h2><p>Попробуйте другой запрос.</p></div>`:""}
    </div>`}async function Yi(e){const a=(await pa(e)).album.song||[];if(!a.length)return y("В альбоме нет треков","warn");o.currentTracks=a,await h.playTracks(a,0)}async function Za(e,t=!1){y("Загружаю альбомы…");const n=(await on(e)).artist.album||[],i=(await Promise.all(n.map(l=>pa(l.id)))).flatMap(l=>l.album.song||[]);if(!i.length)return y("У артиста нет треков","warn");o.currentTracks=i,await h.playTracks(i,0,{shuffle:t})}async function Vn(e,t){try{await ys(e,t),t===1?(o.favorites.add(e),o.dislikes.delete(e)):t===-1?(o.favorites.delete(e),o.dislikes.add(e)):(o.favorites.delete(e),o.dislikes.delete(e)),$.favorites=null,$.ratings=null,tt(`[data-action="like"][data-id="${e}"]`).forEach(a=>{const n=o.favorites.has(e);a.classList.toggle("active",n),a.innerHTML=d(n?"heart":"heartOutline")}),tt(`[data-action="dislike"][data-id="${e}"]`).forEach(a=>{a.classList.toggle("active",o.dislikes.has(e))}),jn(),location.hash.startsWith("#/favorites")&&z(),location.hash.startsWith("#/stats")&&z()}catch(a){y(a.message,"error")}}async function Se(e){const t=o.favorites.has(e);await Vn(e,t?0:1)}async function tn(e){const t=o.dislikes.has(e);await Vn(e,t?0:-1)}function jn(){const e=h.track,t=u("#pb-like"),a=u("#pb-dislike");if(t){const n=e?o.favorites.has(e.id):!1;t.classList.toggle("active",n),t.innerHTML=d(n?"heart":"heartOutline")}a&&a.classList.toggle("active",e?o.dislikes.has(e.id):!1)}async function Fi(e){let t=[];try{t=await ha()}catch(a){y(a.message,"error")}ka({title:"Добавить в плейлист",body:`
      ${t.length?`<div class="modal-list">${t.map(a=>`<button class="modal-row" data-modal-action="add" data-playlist="${a.id}">
                  <span class="modal-row-ico">${d("playlist")}</span>
                  <span><strong>${v(a.name)}</strong><small>${a.songCount??0} треков</small></span>
                  ${d("next")}
                </button>`).join("")}</div>`:'<p class="muted">Плейлистов пока нет — создайте первый.</p>'}
      <div class="modal-new">
        <input class="input" id="new-playlist-name" placeholder="Название нового плейлиста" />
        <button class="btn primary" data-modal-action="create" data-track="${e}">${d("add")} Создать</button>
      </div>`,onMount:a=>{a.addEventListener("click",async n=>{const s=n.target.closest("[data-modal-action]");if(s&&(s.dataset.modalAction==="add"&&(await us(s.dataset.playlist,e),rt(),$.playlists=null,y("Трек добавлен в плейлист")),s.dataset.modalAction==="create")){const l=u("#new-playlist-name",a).value.trim()||"Мой плейлист";await cn(l,[e]),rt(),$.playlists=null,y("Плейлист создан"),location.hash.startsWith("#/playlists")&&z()}})}})}async function Bi(){ka({title:"Новый плейлист",body:`<input class="input" id="new-playlist-name" placeholder="Например: Вечерний плейлист" autofocus />
           <div class="modal-actions">
             <button class="btn ghost" data-modal-action="cancel">Отмена</button>
             <button class="btn primary" data-modal-action="create">Создать</button>
           </div>`,onMount:e=>{const t=u("#new-playlist-name",e);t.focus(),e.addEventListener("click",async a=>{var s;const n=(s=a.target.closest("[data-modal-action]"))==null?void 0:s.dataset.modalAction;if(n==="cancel"&&rt(),n==="create"){const i=t.value.trim();if(!i)return t.focus();await cn(i,[]),rt(),$.playlists=null,y("Плейлист создан"),z()}}),t.addEventListener("keydown",a=>{var n;a.key==="Enter"&&((n=u('[data-modal-action="create"]',e))==null||n.click())})}})}function ka({title:e,body:t,onMount:a}){const n=u("#modal-root");n.innerHTML=`
    <div class="modal-backdrop" data-modal-action="close">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-head"><h3>${v(e)}</h3><button class="icon-btn" data-modal-action="close">${d("close")}</button></div>
        <div class="modal-body">${t}</div>
      </div>
    </div>`,document.body.classList.add("modal-open");const s=u(".modal",n);n.querySelector(".modal-backdrop").addEventListener("click",i=>{i.target.dataset.modalAction==="close"&&rt()}),a==null||a(s)}function rt(){u("#modal-root").innerHTML="",document.body.classList.remove("modal-open")}function qt(e="lyrics"){o.npOpen=!0,o.npTab=e;const t=u("#np");t.hidden=!1,requestAnimationFrame(()=>t.classList.add("open")),setTimeout(()=>t.classList.add("open"),80),ae()}function ke(){o.npOpen=!1;const e=u("#np");e.classList.remove("open"),setTimeout(()=>{o.npOpen||(e.hidden=!0)},260)}function Ui(e){o.npTab=e,ae()}function ae(){if(!o.npOpen)return;const e=h.track;tt(".np-tab").forEach(n=>n.classList.toggle("active",n.dataset.npTab===o.npTab)),u("#np").classList.toggle("compact",o.npTab!=="lyrics");const t=u("#np-side");t.innerHTML=`
    <div class="np-cover">${dt((e==null?void 0:e.coverArt)||(e==null?void 0:e.albumId),{size:900,alt:(e==null?void 0:e.title)||""})}</div>
    <div class="np-meta">
      <div class="eyebrow">${d("wave")} Сейчас играет</div>
      <h2>${v((e==null?void 0:e.title)||"Ничего не играет")}</h2>
      <p class="np-artist">${v((e==null?void 0:e.artist)||"Выберите трек")}</p>
      <p class="muted">${v((e==null?void 0:e.album)||"")}${e!=null&&e.year?` · ${e.year}`:""}</p>
      <div class="np-chips" id="np-chips">
        ${e?`
          <span class="chip">${(e.suffix||"flac").toUpperCase()}</span>
          <span class="chip">${e.bitRate?`${e.bitRate} kbps`:"lossless"}</span>
          <span class="chip" id="np-buffer">буфер 0:00</span>
        `:""}
      </div>
      <div class="np-controls">
        <button class="icon-btn ${h.shuffle?"active":""}" data-action="shuffle" title="Перемешать">${d("shuffle")}</button>
        <button class="icon-btn" data-action="prev" title="Предыдущий">${d("prev")}</button>
        <button class="play-btn" data-action="toggle" title="${h.paused?"Играть":"Пауза"}">${d(h.paused?"play":"pause")}</button>
        <button class="icon-btn" data-action="next" title="Следующий">${d("next")}</button>
        <button class="icon-btn ${h.repeat!=="off"?"active":""}" data-action="repeat" title="Повтор">${d(h.repeat==="one"?"repeatOne":"repeat")}</button>
      </div>
      <div class="np-actions">
        <button class="icon-btn like ${e&&o.favorites.has(e.id)?"active":""}" data-action="like-current" title="В избранное">${d(e&&o.favorites.has(e.id)?"heart":"heartOutline")}</button>
        <button class="icon-btn dislike ${e&&o.dislikes.has(e.id)?"active":""}" data-action="dislike-current" title="Не нравится">${d("thumbDown")}</button>
        <button class="icon-btn" data-action="add-to-playlist" data-id="${(e==null?void 0:e.id)||""}" ${e?"":"disabled"} title="В плейлист">${d("add")}</button>
        <button class="icon-btn" data-action="jump-album" ${e!=null&&e.albumId?"":"disabled"} title="К альбому">${d("album")}</button>
      </div>
    </div>`;const a=u("#np-panel");o.npTab==="lyrics"?Yn(a,e):o.npTab==="eq"?Ce(a):Un(a)}async function Yn(e,t){var s,i;if(!t){e.innerHTML=Bn("lyrics","Текст появится здесь","Включите трек — и мы поищем файл .lrc рядом с аудио.");return}if(e.innerHTML='<div class="panel-loading"><span class="spinner"></span>Ищу текст…</div>',o.lyricsTrackId!==t.id||o.lyricsRefresh)try{o.lyrics=await Es(t.id,o.lyricsRefresh),o.lyricsTrackId=t.id,o.lyricsRefresh=!1,o.lyricsActiveKey=null}catch{o.lyrics=null}if(o.npTab!=="lyrics")return;const a=o.lyrics;if(!a||!a.plain&&!((s=a.synced)!=null&&s.length)){e.innerHTML=`<div class="panel-empty">
      <span class="empty-icon">${d("lyrics")}</span>
      <h3>Текст не найден</h3>
      <p>Локального .lrc/.txt нет, интернет-поиск ничего не вернул. Можно попробовать ещё раз.</p>
      <button class="btn glass" data-action="refresh-lyrics">${d("refresh")} Искать в интернете</button>
    </div>`;return}const n=a.source==="lrclib"?"LRCLIB":a.source==="local"?"локальный файл":a.source==="lyrics.ovh"?"lyrics.ovh":"кэш";e.innerHTML=`
    <div class="panel-title">
      <h3>Текст песни</h3>
      <span class="lyrics-source">${d("wave")} ${v(n)}</span>
      <button class="icon-btn" data-action="refresh-lyrics" title="Найти заново">${d("refresh")}</button>
    </div>
    <div class="lyrics" id="lyrics-body">
      ${(i=a.synced)!=null&&i.length?a.synced.map((l,c)=>`<div class="lyric-line" data-index="${c}" data-time="${l.time_ms}">${v(l.text)}</div>`).join(""):`<div class="lyrics-plain">${v(a.plain).replace(/\n/g,"<br />")}</div>`}
    </div>`,Fn()}function Fn(){if(o.npTab!=="lyrics")return;const e=tt(".lyric-line");if(!e.length)return;const t=h.currentTime*1e3;let a=-1;e.forEach((s,i)=>{Number(s.dataset.time)<=t&&(a=i)}),a<0&&(a=0),e.forEach((s,i)=>s.classList.toggle("active",i===a));const n=`${o.lyricsTrackId||""}:${a}`;a>=0&&o.lyricsActiveKey!==n&&(o.lyricsActiveKey=n,e[a].scrollIntoView({block:"center",behavior:"smooth"}))}function Bn(e,t,a){return`<div class="panel-empty"><span class="empty-icon">${d(e)}</span><h3>${v(t)}</h3><p>${v(a)}</p></div>`}function Ce(e){const t=h.eqState;e.innerHTML=`
    <div class="panel-title">
      <h3>Эквалайзер</h3>
      <label class="switch">
        <input type="checkbox" id="eq-enabled" ${t.enabled?"checked":""} />
        <span></span>
      </label>
    </div>
    <div class="eq-presets">
      ${Object.entries(ra).map(([a,n])=>`<button class="chip-btn ${t.preset===a?"active":""}" data-eq-preset="${a}">${v(n.name)}</button>`).join("")}
      <button class="chip-btn ${t.preset==="custom"?"active":""}" disabled>Своя</button>
    </div>
    <div class="eq ${t.enabled?"":"disabled"}">
      ${Pn.map((a,n)=>{const s=Number(t.gains[n])||0,i=(12-s)/24*100;return`
        <div class="eq-band">
          <span class="eq-value" id="eq-val-${n}">${s>0?"+":""}${s}</span>
          <div class="eq-track" data-eq-band="${n}" role="slider" tabindex="0"
               aria-label="${a>=1e3?`${a/1e3} кГц`:`${a} Гц`}"
               aria-valuemin="-12" aria-valuemax="12" aria-valuenow="${s}">
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
    </div>`}function Un(e){const t=h.queue;e.innerHTML=`
    <div class="panel-title"><h3>Очередь</h3><span class="muted">${t.length} ${N(t.length,"трек","трека","треков")}</span></div>
    ${t.length?`<div class="queue-list" id="queue-list">${t.map((n,s)=>`
              <button class="queue-row ${s===h.index?"active":""}" data-action="play-queue" data-index="${s}" data-track-id="${n.id}">
                <span class="queue-drag-handle">${d("menu")}</span>
                <span class="queue-cover">${dt(n.coverArt||n.albumId,{size:80})}</span>
                <span class="queue-main"><strong>${v(n.title)}</strong><small>${v(n.artist||"")}</small></span>
                <span class="queue-time">${wt(n.duration)}</span>
              </button>`).join("")}</div>`:Bn("queue","Очередь пуста","Нажмите на трек или альбом, чтобы начать воспроизведение.")}`;const a=u("#queue-list");a&&t.length>0&&new k(a,{animation:150,handle:".queue-drag-handle",ghostClass:"queue-row-ghost",dragClass:"queue-row-drag",onEnd:n=>{n.oldIndex!==n.newIndex&&(h.moveInQueue(n.oldIndex,n.newIndex),setTimeout(()=>Un(e),50))}})}function Ea(){const e=h.track,t=u("#pb-title"),a=u("#pb-artist"),n=u("#pb-cover-img"),s=u("#quality-format"),i=u("#quality-detail");if(!e){t.textContent="Ничего не играет",a.textContent="Выберите трек",u(".pb-cover").classList.remove("loaded"),s.textContent="—",i.textContent="",en(null);return}t.textContent=e.title||"",a.textContent=[e.artist,e.album].filter(Boolean).join(" · "),e.coverArt||e.albumId?(n.src=Lt(e.coverArt||e.albumId,160),n.onload=()=>u(".pb-cover").classList.add("loaded")):(n.removeAttribute("src"),u(".pb-cover").classList.remove("loaded")),s.textContent=(e.suffix||"flac").toUpperCase(),i.textContent=[e.bitRate?`${e.bitRate} kbps`:null,e.size?$e(e.size):null].filter(Boolean).join(" · "),jn(),en(e)}function en(e){if("mediaSession"in navigator){if(!e){navigator.mediaSession.metadata=null;return}navigator.mediaSession.metadata=new MediaMetadata({title:e.title||"Без названия",artist:e.artist||"Неизвестный артист",album:e.album||"",artwork:[{src:Lt(e.coverArt||e.albumId,96),sizes:"96x96",type:"image/jpeg"},{src:Lt(e.coverArt||e.albumId,128),sizes:"128x128",type:"image/jpeg"},{src:Lt(e.coverArt||e.albumId,256),sizes:"256x256",type:"image/jpeg"},{src:Lt(e.coverArt||e.albumId,512),sizes:"512x512",type:"image/jpeg"}]})}}"mediaSession"in navigator&&(navigator.mediaSession.setActionHandler("play",()=>h.play()),navigator.mediaSession.setActionHandler("pause",()=>h.pause()),navigator.mediaSession.setActionHandler("previoustrack",()=>h.prev()),navigator.mediaSession.setActionHandler("nexttrack",()=>h.next()),navigator.mediaSession.setActionHandler("seekto",e=>{e.seekTime!==void 0&&h.seekTo(e.seekTime)}),navigator.mediaSession.setActionHandler("seekbackward",e=>{h.seekBy(-(e.seekOffset||10))}),navigator.mediaSession.setActionHandler("seekforward",e=>{h.seekBy(e.seekOffset||10)}));function xt(){const e=h.duration,t=h.currentTime,a=e?t/e*100:0;u("#cur-time").textContent=wt(t),u("#total-time").textContent=wt(e),u("#seek").value=String(a),u("#seek-fill").style.width=`${a}%`;const n=u("#np-seek");n&&(n.value=String(a),u("#np-seek-fill").style.width=`${a}%`,u("#np-cur-time").textContent=wt(t),u("#np-total-time").textContent=wt(e)),Xn(),Fn()}function Xn(){const e=h.buffered;u("#seek-buffer").style.width=`${e.percent}%`;const t=u("#np-seek-buffer");t&&(t.style.width=`${e.percent}%`);const a=u("#np-buffer");a&&(a.textContent=`буфер ${wt(e.ahead)}`,a.title=`Загружено ${$e(h.estimatedBufferedBytes())}`);const n=u("#quality-detail");n&&h.track&&(n.textContent=[h.track.bitRate?`${h.track.bitRate} kbps`:null,h.track.size?$e(h.track.size):null,`буфер ${wt(e.ahead)}`].filter(Boolean).join(" · "))}function re(){var n;const e=!h.paused&&!!h.track;u("#play-btn").innerHTML=d(e?"pause":"play"),u("#pb-cover").classList.toggle("playing",e);const t=u('.np-controls [data-action="toggle"]');t&&(t.innerHTML=d(e?"pause":"play"),t.title=e?"Пауза":"Играть");const a=((n=h.track)==null?void 0:n.id)||null;tt(".track-row").forEach(s=>{s.classList.toggle("playing",!!a&&s.dataset.trackId===a)})}function Ta(){u("#shuffle-btn").classList.toggle("active",h.shuffle),u("#repeat-btn").classList.toggle("active",h.repeat!=="off"),u("#repeat-btn").innerHTML=d(h.repeat==="one"?"repeatOne":"repeat");const e=u('.np-controls [data-action="shuffle"]');e&&e.classList.toggle("active",h.shuffle);const t=u('.np-controls [data-action="repeat"]');t&&(t.classList.toggle("active",h.repeat!=="off"),t.innerHTML=d(h.repeat==="one"?"repeatOne":"repeat"))}function Pe(){u("#volume").value=String(h.volumePercent);const e=h.volumePercent===0?"volumeOff":h.volumePercent<50?"volumeDown":"volumeUp";u("#volume-btn").innerHTML=d(e);const t=u("#np-volume");if(t){t.value=String(h.volumePercent);const a=u("#np-volume-icon");a&&(a.innerHTML=d(e))}}function Wn(){var t,a;const e=(a=(t=o.ytmStatus)==null?void 0:t.account)==null?void 0:a.photo;return typeof e=="string"&&e.startsWith("http")?e:""}function Xi(e,t="user-avatar"){const a=Wn();return a?`<span class="${t} has-photo"><img src="${v(a)}" alt="" referrerpolicy="no-referrer" /></span>`:`<span class="${t}">${v(ba(e))}</span>`}function Gn(){const e=te(),t=u("#user-avatar"),a=u("#user-name"),n=Wn();t&&(n?(t.classList.add("has-photo"),t.innerHTML=`<img src="${v(n)}" alt="" referrerpolicy="no-referrer" />`):(t.classList.remove("has-photo"),t.textContent=ba(e))),a&&(a.textContent=e)}function Jn(e){const t=u("#auth-screen");t&&(t.hidden=!1,document.body.classList.add("auth-locked"),u("#auth-login-view").hidden=e!=="login",u("#auth-register-view").hidden=e!=="register",setTimeout(()=>{var a;return(a=u(e==="login"?"#login-username":"#register-invite"))==null?void 0:a.focus()},60))}function _t(){Jn("login")}async function Ma(e=""){Jn("register");const t=u("#register-invite"),a=u("#register-invite-hint");if(t.value=e.trim(),!e.trim()){a.textContent="Вставьте код приглашения от администратора.";return}a.textContent="Проверяю приглашение…";try{const n=await zs(e.trim());a.innerHTML=`Приглашение от <strong>${v(n.invitedBy)}</strong>${n.isAdmin?" · администратор":""}`}catch(n){a.textContent=n.message||"Приглашение недействительно"}}function Wi(){const e=u("#auth-screen");e&&(e.hidden=!0,document.body.classList.remove("auth-locked"))}async function La(){var e;try{o.authConfig=await ta();const t=await vs();if(!t.user){_t(),location.hash.startsWith("#/register")&&z();return}o.me=t.user,o.meSettings=t.settings,ze(((e=t.settings)==null?void 0:e.theme)||localStorage.getItem("rustream.theme")||"violet"),o.ytmStatus=await Ae().catch(()=>null),Gn(),Wi(),await Promise.all([On(),$a()]),Ji(),await xa(),z()}catch(t){qn(t)||console.error(t),_t()}}function nt(e){o.liveMode=!!e,h.setLiveMode(!!e)}const Kn="rustream.playerSyncedAt";let an=null;function Gi(){return Number(localStorage.getItem(Kn))||0}function Qn(e){Number(e)>0&&localStorage.setItem(Kn,String(e))}function _a(){!o.me||!h.queue.length||o.skipPushUntil&&Date.now()<o.skipPushUntil||(clearTimeout(an),an=setTimeout(async()=>{try{const e=await Ns(h.snapshotState());Qn(e==null?void 0:e.updatedAt)}catch{}},3e3))}async function xa({force:e=!1}={}){var c,r;let t;try{t=await Os()}catch{return}const a=Number(t==null?void 0:t.updatedAt)||0,n=t==null?void 0:t.state;if(!((c=n==null?void 0:n.queue)!=null&&c.length)||!e&&a<=Gi())return;const s=n.queue[Math.min(Number(n.index)||0,n.queue.length-1)],i=(s==null?void 0:s.id)&&s.id===((r=h.track)==null?void 0:r.id);if(!e&&!h.paused&&!i)return;const l=h.applyRemote(n);l&&(Qn(a),o.skipPushUntil=Date.now()+5e3,o.liveMode=!!l.liveMode,Ea(),re(),xt(),location.hash.startsWith("#/live")&&z())}setInterval(()=>{document.hidden||xa()},3e4);document.addEventListener("visibilitychange",()=>{document.hidden||xa()});h.addEventListener("track",_a);h.addEventListener("queue",_a);h.addEventListener("state",_a);window.addEventListener("pagehide",()=>{if(!(!o.me||!h.queue.length))try{fetch("/api/me/player",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({state:h.snapshotState()}),keepalive:!0}).catch(()=>{})}catch{}});function Ji(){const e=h.restore();e&&(o.liveMode=!!e.liveMode,Ea(),re(),Ta(),xt())}async function Ki(){try{y("Собираю персональный поток…");const e=await hn(40);if(!e.length)return y("В библиотеке пока нет треков","warn");nt(!0),o.currentTracks=e,await h.playTracks(e,0),y("Live включён"),location.hash.startsWith("#/live")&&z()}catch(e){if(Ot(e))return;y(e.message,"error")}}async function Qi(e){var a;const t=o.liveMixes[e];if(!((a=t==null?void 0:t.tracks)!=null&&a.length))return y("В этом миксе пока нет треков","warn");nt(!1),o.currentTracks=t.tracks,await h.playTracks(t.tracks,0),y(`Играет: ${t.title}`)}const Aa=[{id:"violet",name:"Фиолетовая"},{id:"ocean",name:"Океан"},{id:"sunset",name:"Закат"},{id:"forest",name:"Лес"},{id:"mono",name:"Моно"}],Ee=/^#[0-9a-f]{6}$/i;function ca(e){const t=e.replace("#","");return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}}function Zi({r:e,g:t,b:a}){const n=s=>Math.max(0,Math.min(255,Math.round(s)));return`#${[n(e),n(t),n(a)].map(s=>s.toString(16).padStart(2,"0")).join("")}`}function Ct(e,t,a){const n=ca(e),s=ca(t);return Zi({r:n.r*a+s.r*(1-a),g:n.g*a+s.g*(1-a),b:n.b*a+s.b*(1-a)})}function tr(e){const{r:t,g:a,b:n}=ca(e),s=i=>{const l=i/255;return l<=.03928?l/12.92:((l+.055)/1.055)**2.4};return .2126*s(t)+.7152*s(a)+.0722*s(n)}function nn(e){return tr(e)>.42?"#1a1917":"#ffffff"}function Zn(e){const t=document.documentElement.classList.contains("light-mode"),a=t?"#faf8f4":"#101013",n=t?"#efece4":"#17171c",s=t?.06:.1,i=Ct(e,a,s),l=Ct(e,n,s*1.25),c=Ct(e,t?"#e9e5dc":"#1d1d23",s*1.4),r=Ct(e,t?"#ffffff":"#101013",t?.22:.3),p=document.body.style;p.setProperty("--primary",e),p.setProperty("--on-primary",nn(e)),p.setProperty("--primary-container",r),p.setProperty("--on-primary-container",nn(r)),p.setProperty("--surface",i),p.setProperty("--surface-container",l),p.setProperty("--surface-container-high",c),p.setProperty("--surface-container-highest",Ct(e,c,.5)),p.setProperty("--surface-container-low",Ct(e,i,.5))}function er(){const e=document.body.style;["--primary","--on-primary","--primary-container","--on-primary-container","--surface","--surface-container","--surface-container-high","--surface-container-highest","--surface-container-low"].forEach(t=>e.removeProperty(t))}function ze(e){const t=Aa.some(n=>n.id===e),a=t?e:Ee.test(e||"")?e.toLowerCase():"violet";o.theme=a,document.body.dataset.theme=t?a:"custom",localStorage.setItem("rustream.theme",a),t?er():Zn(a)}function da(e){const t=e==="auto"?window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark":e;document.documentElement.classList.toggle("light-mode",t==="light"),o.theme&&Ee.test(o.theme)&&Zn(o.theme)}(function(){const t=localStorage.getItem("colorMode")||"dark";da(t),window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{localStorage.getItem("colorMode")==="auto"&&da("auto")})})();const ts=[{id:"compact",name:"Компактно"},{id:"default",name:"Обычно"},{id:"large",name:"Крупно"}];function es(e){const t=ts.some(a=>a.id===e)?e:"default";o.density=t,document.documentElement.dataset.density=t,localStorage.setItem("rustream.density",t)}(function(){es(localStorage.getItem("rustream.density")||"default")})();async function as(e){ze(e);try{await un({theme:o.theme}),o.meSettings={...o.meSettings||{},theme:o.theme}}catch(t){y(t.message,"error")}}function ar(e){var s,i,l,c,r,p,b,g;const t=o.meSettings||{},a=(s=o.authConfig)==null?void 0:s.lastfm,n=o.lastfmConfig||{};return`
    <div class="settings-sections">
      <section class="settings-section">
        <h4>${d("person")} Профиль</h4>
        <form id="settings-profile-form" class="settings-form">
          <label class="field"><span>Отображаемое имя</span>
            <input class="input" id="settings-display-name" value="${v(((i=o.me)==null?void 0:i.displayName)||"")}" />
          </label>
          <button class="btn tonal" type="submit">Сохранить имя</button>
        </form>
        <div class="settings-meta">
          <span>Логин: <strong>${v(((l=o.me)==null?void 0:l.username)||"")}</strong></span>
          ${(c=o.me)!=null&&c.isAdmin?'<span class="chip">администратор</span>':""}
        </div>
      </section>

      <section class="settings-section">
        <h4>${d("palette")} Оформление</h4>
        <p class="muted small">Цветовая тема сохраняется в аккаунте и применяется на всех устройствах.</p>
        <div class="theme-picker">
          ${Aa.map(f=>`<button class="theme-swatch ${o.theme===f.id?"active":""}" data-theme-choice="${f.id}" title="${f.name}">
              <span class="swatch-dot theme-${f.id}"></span><span>${f.name}</span>
            </button>`).join("")}
        </div>
      </section>

      <section class="settings-section">
        <h4>${d("radio")} Скробблинг</h4>
        <p class="muted small">История и статистика пишутся локально всегда. Внешние сервисы получают прослушивания только после подключения.</p>
        <div class="settings-sub">
          <h5>ListenBrainz — проще всего</h5>
          <p class="muted small">Бесплатно, без модерации и ключей приложения: нужен только личный токен.</p>
          <ol class="steps">
            <li>Откройте <a class="inline-link" href="https://listenbrainz.org/settings/" target="_blank" rel="noreferrer">listenbrainz.org/settings</a> и войдите.</li>
            <li>Скопируйте «User token».</li>
            <li>Вставьте его в поле ниже и сохраните.</li>
          </ol>
          <label class="field"><span>ListenBrainz token</span>
            <input class="input" id="settings-listenbrainz" name="listenbrainz-token" autocomplete="off" spellcheck="false" data-lpignore="true" placeholder="токен из listenbrainz.org/settings" />
          </label>
          <button class="btn primary" data-settings-action="save-scrobbling" data-scope="listenbrainz">${d("check")} Сохранить токен</button>
        </div>

        <div class="settings-sub">
          <h5>Last.fm</h5>
          <p class="muted small">Тоже бесплатно, но серверу нужны ключи приложения — их создаёт администратор один раз.</p>
        <div class="settings-status">
          <span class="status-dot ${t.lastfmConnected?"on":""}"></span>
          Last.fm: ${t.lastfmConnected?`подключён${t.lastfmUsername?` как ${v(t.lastfmUsername)}`:""}`:"не подключён"}
        </div>
        <div class="settings-inline">
          <button class="btn glass" data-settings-action="lastfm-connect" ${a?"":"disabled"}>${d("wave")} Подключить Last.fm</button>
          <button class="btn ghost" data-settings-action="lastfm-complete" ${t.lastfmConnected?"disabled":""}>Завершить</button>
        </div>
        ${a?"":'<p class="muted small">Для авторизации Last.fm нужны ключи приложения ниже (или в config.toml).</p>'}
        ${(r=o.me)!=null&&r.isAdmin?`
          <div class="settings-sub">
            <h5>Ключи приложения Last.fm</h5>
            <p class="muted small">Создайте приложение на last.fm/api/account/create. Ключи пишутся в config.toml и применяются сразу.</p>
            <label class="field"><span>API key</span>
              <input class="input" id="settings-lastfm-api-key" name="lastfm-api-key" autocomplete="off" autocapitalize="none" spellcheck="false" data-lpignore="true" value="${v(n.apiKey||"")}" placeholder="32 символа" />
            </label>
            <label class="field"><span>API secret</span>
              <input class="input" id="settings-lastfm-api-secret" name="lastfm-api-secret" type="password" autocomplete="new-password" data-lpignore="true" placeholder="${n.apiSecretSet?"секрет уже сохранён — оставьте пустым":"секрет приложения"}" />
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
        </div>
      </section>

      <section class="settings-section">
        <h4>${d("settings")} Безопасность</h4>
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
      </section>

      <section class="settings-section">
        <h4>${d("library")} Библиотека</h4>
        <p class="muted small">Сканер перечитывает папки каждые ${((p=o.authConfig)==null?void 0:p.scanInterval)||300} секунд. Новые файлы появятся автоматически.</p>
        <div class="settings-inline">
          <button class="btn glass" data-settings-action="rescan">${d("refresh")} Пересканировать сейчас</button>
          <button class="btn ghost danger" data-settings-action="clear-history">${d("delete")} Очистить историю</button>
        </div>
      </section>

      ${(b=o.me)!=null&&b.isAdmin?`
      <section class="settings-section">
        <h4>${d("person")} Пользователи</h4>
        <p class="muted small">Новый человек может войти двумя способами: вы создаёте ему логин и пароль здесь, либо выдаёте код приглашения — блок «Приглашения» на странице профиля.</p>
        <div class="user-list" id="settings-user-list">
          ${(e||[]).map(f=>{var w;return`
            <div class="user-row">
              <span class="user-avatar small">${v(ba(f.displayName||f.username))}</span>
              <span class="user-row-main"><strong>${v(f.displayName||f.username)}</strong><small>@${v(f.username)}${f.isAdmin?" · админ":""}</small></span>
              ${f.id===((w=o.me)==null?void 0:w.id)?'<span class="chip">вы</span>':`<button class="icon-btn" data-settings-action="delete-user" data-id="${f.id}" title="Удалить">${d("delete")}</button>`}
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
        </div>
      </section>`:""}

      <section class="settings-section">
        <h4>${d("logout")} Сеанс</h4>
        <p class="muted small">Вход действует 90 дней и продлевается автоматически, пока вы пользуетесь сайтом. Subsonic API: логин <code>${v(((g=o.me)==null?void 0:g.username)||"")}</code>, пароль — ваш пароль. Ключ API: <code>${v(t.subsonicApiKey||"—")}</code></p>
        <button class="btn ghost danger" data-settings-action="logout">${d("logout")} Выйти из аккаунта</button>
      </section>
    </div>`}async function Wt(){if(!o.me)return _t();let e=[];if(o.me.isAdmin)try{[e,o.lastfmConfig]=await Promise.all([Ts(),Oe().catch(()=>({}))])}catch(t){Ot(t)}ka({title:"Аккаунт и настройки",body:ar(e),onMount:t=>{var a,n;(a=u("#settings-profile-form",t))==null||a.addEventListener("submit",async s=>{s.preventDefault();try{await Pa(u("#settings-display-name",t).value.trim()),o.me.displayName=u("#settings-display-name",t).value.trim(),Gn(),y("Имя обновлено")}catch(i){y(i.message,"error")}}),(n=u("#settings-password-form",t))==null||n.addEventListener("submit",async s=>{s.preventDefault();try{await ws(u("#settings-current-password",t).value,u("#settings-new-password",t).value),u("#settings-current-password",t).value="",u("#settings-new-password",t).value="",y("Пароль изменён")}catch(i){y(i.message,"error")}}),t.addEventListener("click",async s=>{const i=s.target.closest("[data-theme-choice]");if(i){const r=i.dataset.themeChoice;ze(r),tt(".theme-swatch",t).forEach(p=>p.classList.toggle("active",p.dataset.themeChoice===r));try{await Pa(o.me.displayName||o.me.username,r),o.meSettings={...o.meSettings||{},theme:r},y("Тема сохранена")}catch(p){y(p.message,"error")}return}const l=s.target.closest("[data-settings-action]");if(!l)return;const c=l.dataset.settingsAction;if(c==="logout"){await dn().catch(()=>{}),location.reload();return}if(c==="rescan"){l.classList.add("spin"),await fn().catch(r=>y(r.message,"error")),setTimeout(()=>{l.classList.remove("spin"),y("Сканирование запущено")},1200);return}if(c==="clear-history"){if(!confirm("Удалить всю историю прослушиваний этого аккаунта?"))return;try{await Ls(),$.meStats=null,o.meStats=null,y("История очищена");const r=await He();o.meSettings=r.settings}catch(r){y(r.message,"error")}return}if(c==="lastfm-connect"){try{const r=await xs();window.open(r.url,"_blank","noopener"),y("Подтвердите доступ на Last.fm, затем нажмите «Завершить»")}catch(r){y(r.message,"error")}return}if(c==="lastfm-complete"){try{const r=await As();y(`Last.fm подключён${r.username?`: ${r.username}`:""}`);const p=await He();o.meSettings=p.settings,rt(),Wt()}catch(r){y(r.message,"error")}return}if(c==="save-lastfm-app"){try{await za(u("#settings-lastfm-api-key",t).value.trim(),u("#settings-lastfm-api-secret",t).value.trim());const r=await Oe();o.lastfmConfig=r,o.authConfig=await ta(),y("Ключи Last.fm сохранены в config.toml"),u("#settings-lastfm-api-secret",t).value=""}catch(r){y(r.message,"error")}return}if(c==="clear-lastfm-app"){if(!confirm("Удалить ключи приложения Last.fm из config.toml?"))return;try{await za("","",!0),o.lastfmConfig=await Oe(),o.authConfig=await ta(),y("Ключи Last.fm удалены"),rt(),Wt()}catch(r){y(r.message,"error")}return}if(c==="save-scrobbling"){const r=actionEl.dataset.scope||"both",p={};r!=="lastfm"&&(p.listenbrainzToken=u("#settings-listenbrainz",t).value.trim()),r!=="listenbrainz"&&(p.lastfmSessionKey=u("#settings-lastfm-key",t).value.trim());try{await $s(p),y(r==="listenbrainz"?"Токен ListenBrainz сохранён":"Last.fm сохранён");const b=await He();o.meSettings=b.settings}catch(b){y(b.message,"error")}return}if(c==="create-user"){try{await Ms({username:u("#new-user-name",t).value.trim(),password:u("#new-user-password",t).value,displayName:u("#new-user-display",t).value.trim(),isAdmin:u("#new-user-admin",t).checked}),y("Пользователь создан"),rt(),Wt()}catch(r){y(r.message,"error")}return}if(c==="delete-user"){if(!confirm("Удалить пользователя и все его данные?"))return;try{await _s(l.dataset.id),y("Пользователь удалён"),rt(),Wt()}catch(r){y(r.message,"error")}}})}})}function nr(){const e=localStorage.getItem("colorMode")||"dark";return`
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
      ${Aa.map(t=>`<button class="theme-swatch ${o.theme===t.id?"active":""}" data-action="theme" data-theme="${t.id}">
          <span class="swatch-dot theme-${t.id}"></span><span>${t.name}</span>
        </button>`).join("")}
      <label class="theme-swatch custom ${Ee.test(o.theme)?"active":""}" title="Свой цвет">
        <input type="color" id="theme-custom" value="${Ee.test(o.theme)?o.theme:"#c7a6ff"}" aria-label="Свой цвет" />
        <span>Свой цвет</span>
      </label>
    </div>`}function sr(e){const t=e==null?void 0:e.account;return e!=null&&e.connected?`
      <div class="ytm-account">
        ${t!=null&&t.photo?`<img class="ytm-avatar" src="${v(t.photo)}" alt="" referrerpolicy="no-referrer" />`:`<span class="ytm-avatar fallback">${d("person")}</span>`}
        <div class="ytm-account-main">
          <strong>${v((t==null?void 0:t.name)||"Аккаунт YouTube")}</strong>
          <small>${v((t==null?void 0:t.handle)||"")}${e.updatedAt?` · обновлено ${new Date(e.updatedAt*1e3).toLocaleDateString("ru-RU")}`:""}</small>
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
    </form>`}function ir(e){return`
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
                  <span class="invite-code">${v(t.code)}</span>
                  <span class="invite-meta">
                    <small>${v(t.note||"без заметки")} · ${t.uses}/${t.maxUses||"∞"} · ${t.isAdmin?"админ":"слушатель"}</small>
                    <small>${t.expiresAt?`до ${new Date(t.expiresAt*1e3).toLocaleDateString("ru-RU")}`:"без срока"}${t.valid?"":" · недействительно"}</small>
                  </span>
                  <button class="icon-btn" data-action="invite-copy" data-code="${v(t.code)}" title="Скопировать ссылку">${d("link")}</button>
                  <button class="icon-btn" data-action="invite-revoke" data-code="${v(t.code)}" title="Отозвать">${d("delete")}</button>
                </div>`).join(""):'<div class="empty-inline">Пока ни одного приглашения</div>'}
      </div>
    </section>`}async function rr(e){F();const[t,a]=await Promise.all([Ti().catch(()=>({})),ha().catch(()=>[])]);if(e!==o.renderSeq)return;$.playlists=a;const n=[{href:"#/artists",icon:"person",title:"Артисты",sub:`${t.artists||0} в библиотеке`},{href:"#/albums",icon:"album",title:"Альбомы",sub:`${t.albums||0} в библиотеке`},{href:"#/tracks",icon:"music",title:"Треки",sub:`${t.tracks||0} в библиотеке`},{href:"#/playlists",icon:"playlist",title:"Плейлисты",sub:`${a.length} ${N(a.length,"подборка","подборки","подборок")}`},{href:"#/favorites",icon:"heart",title:"Избранное",sub:"Треки, которым вы поставили лайк"},{href:"#/ytm",icon:"ytm",title:"YouTube Music",sub:"Внешний источник: история, лайки, поиск"},{href:"#/live",icon:"radio",title:"Live",sub:"Персональный поток без повторов"},{href:"#/stats",icon:"chart",title:"Статистика",sub:"Часы, артисты и история"}];u("#view").innerHTML=`
    <div class="page library-page">
      <header class="page-head">
        <div>
          <span class="eyebrow">Коллекция</span>
          <h1>Медиатека</h1>
          <p class="muted">${t.tracks||0} ${N(t.tracks||0,"трек","трека","треков")} · ${$e(t.sizeBytes||0)}</p>
        </div>
        <div class="head-actions">
          <button class="btn glass" data-action="shuffle-library">${d("shuffle")} Перемешать всё</button>
        </div>
      </header>
      <div class="library-grid">
        ${n.map(s=>`<a class="library-tile" href="${s.href}">
              <span class="tile-icon">${d(s.icon)}</span>
              <span class="tile-main"><strong>${s.title}</strong><small>${v(s.sub)}</small></span>
              <span class="tile-arrow">${d("next")}</span>
            </a>`).join("")}
      </div>
    </div>`}const ns=[{id:"account",label:"Аккаунт",icon:"person"},{id:"design",label:"Оформление",icon:"palette"},{id:"ytm",label:"YouTube Music",icon:"ytm"},{id:"invites",label:"Приглашения",icon:"ticket",admin:!0}];function or(e,t){return`<nav class="subnav" aria-label="Разделы профиля">
    ${ns.filter(n=>!n.admin||t).map(n=>`<a class="subnav-item ${n.id===e?"active":""}"
          href="#/profile?tab=${n.id}">${d(n.icon)} ${n.label}</a>`).join("")}
  </nav>`}async function lr(e,t=new URLSearchParams){var w,E,_,I,B;F();const a=!!((w=o.me)!=null&&w.isAdmin),n=ns.filter(A=>!A.admin||a),s=t.get("tab")||"account",i=n.some(A=>A.id===s)?s:"account",[l,c]=await Promise.all([i==="ytm"?Ae().catch(()=>({connected:!1,account:null})):Promise.resolve(o.ytmStatus),i==="invites"&&a?Ds().catch(()=>[]):Promise.resolve([])]);if(e!==o.renderSeq)return;i==="ytm"&&(o.ytmStatus=l);const r=`
    <section class="section glass-card">
      <div class="section-head">
        <div>
          <h2>${d("person")} Учётная запись</h2>
          <p class="muted">Данные профиля, пароль и выход с текущего устройства.</p>
        </div>
      </div>
      <dl class="settings-list">
        <div class="settings-row"><dt>Имя</dt><dd>${v(te())}</dd></div>
        <div class="settings-row"><dt>Логин</dt><dd>@${v(((E=o.me)==null?void 0:E.username)||"")}</dd></div>
        <div class="settings-row"><dt>Роль</dt><dd>${a?"администратор":"слушатель"}</dd></div>
      </dl>
      <div class="card-actions">
        <button class="btn primary" data-action="open-settings">${d("settings")} Изменить данные</button>
        <button class="btn ghost danger" data-action="logout">${d("logout")} Выйти</button>
      </div>
    </section>`,p=`
    <section class="section glass-card">
      <h2>${d("palette")} Тема</h2>
      <p class="muted small">Тема сохраняется в аккаунте и применяется на всех устройствах.</p>
      ${nr()}
    </section>
    <section class="section glass-card">
      <h2>${d("expand")} Плотность</h2>
      <p class="muted small">Сколько строк и обложек помещается на экране.</p>
      <div class="theme-mode-picker">
        ${ts.map(A=>`<button class="mode-btn ${(o.density||"default")===A.id?"active":""}" data-action="density" data-value="${A.id}">${A.name}</button>`).join("")}
      </div>
    </section>`,b=`
    <section class="section glass-card">
      <div class="section-head">
        <div>
          <h2>${d("ytm")} YouTube Music</h2>
          <p class="muted">Cookies хранятся зашифрованными и используются только для вашего профиля: поиск, лайки и прослушивание.</p>
        </div>
        <span class="status-chip ${l!=null&&l.connected?"on":""}">${l!=null&&l.connected?"подключено":"не подключено"}</span>
      </div>
      ${sr(l||{connected:!1,account:null})}
    </section>`;u("#view").innerHTML=`
    <div class="page profile-page">
      <header class="page-head">
        <div class="profile-identity">
          ${Xi(te(),"user-avatar xl")}
          <div>
            <span class="eyebrow">Профиль</span>
            <h1>${v(te())}</h1>
            <p class="muted">@${v(((_=o.me)==null?void 0:_.username)||"")}${a?" · администратор":""}</p>
          </div>
        </div>
      </header>

      ${or(i,a)}

      ${i==="account"?r:""}
      ${i==="design"?p:""}
      ${i==="ytm"?b:""}
      ${i==="invites"&&a?ir(c):""}
    </div>`;const g=u("#ytm-connect-form");g==null||g.addEventListener("submit",async A=>{A.preventDefault();const R=u("#ytm-connect-submit"),q=u("#ytm-connect-error"),it=u("#ytm-cookies").value.trim();if(q.textContent="",!it){q.textContent="Вставьте cookies";return}R.disabled=!0;try{await Is(it),y("YouTube Music подключён"),z()}catch(K){q.textContent=K.message||"Не удалось подключить"}finally{R.disabled=!1}});const f=u("#invite-form");f==null||f.addEventListener("submit",async A=>{var R;A.preventDefault();try{const q=await Cs({note:u("#invite-note").value.trim(),expiresInDays:Number(u("#invite-days").value||0),maxUses:Number(u("#invite-uses").value||0),isAdmin:u("#invite-admin").checked});await((R=navigator.clipboard)==null?void 0:R.writeText(mn(q.code)).catch(()=>{})),y("Код создан, ссылка скопирована"),z()}catch(q){y(q.message,"error")}}),(I=u("#theme-custom"))==null||I.addEventListener("input",A=>ze(A.target.value)),(B=u("#theme-custom"))==null||B.addEventListener("change",async A=>{await as(A.target.value),z()})}async function cr(e){var b,g;F();const t=o.ytmStatus||await Ae().catch(()=>null);if(e!==o.renderSeq)return;if(o.ytmStatus=t,!(t!=null&&t.connected)){u("#view").innerHTML=`
      <div class="page ytm-page">
        <header class="page-head">
          <div><span class="eyebrow">Источник</span><h1>YouTube Music</h1></div>
        </header>
        <section class="section glass-card empty-state">
          <span class="empty-icon">${d("ytm")}</span>
          <h2>Подключите свой аккаунт</h2>
          <p class="muted">Поиск и лайки YouTube Music будут доступны только вам. Подключение занимает минуту.</p>
          <a class="btn primary" href="#/profile?tab=ytm">${d("settings")} Перейти в профиль</a>
        </section>
      </div>`;return}o.ytmLists=o.ytmLists||{history:[],liked:[],search:[]};const a=(f,w)=>et(f,{showCover:!0,rowAction:"play-ytm-row",rowList:w});u("#view").innerHTML=`
    <div class="page ytm-page">
      <header class="page-head">
        <div>
          <span class="eyebrow">Источник</span>
          <h1>YouTube Music</h1>
          <p class="muted">${v(((b=t.account)==null?void 0:b.name)||"Подключено")}${(g=t.account)!=null&&g.handle?` · ${v(t.account.handle)}`:""}</p>
        </div>
        <div class="head-actions">
          <button class="btn glass" data-action="ytm-liked">${d("heart")} Обновить лайки</button>
        </div>
      </header>

      <form id="ytm-search-form" class="search-row">
        <label class="searchbox glass">
          ${d("search")}
          <input id="ytm-search-input" type="search" placeholder="Треки, артисты, альбомы…" enterkeyhint="search" autocomplete="off" />
        </label>
        <button class="btn primary" type="submit">${d("search")} Искать</button>
      </form>

      <div class="chip-row">
        ${[["Новинки","новинки музыка 2026"],["Хиты","популярные песни"],["Русское","русская музыка"],["Электроника","electronic mix"],["Лоу-фай","lofi beats"],["Рок","rock classics"],["Джаз","jazz standards"]].map(([f,w])=>`<button class="chip-btn" data-action="ytm-preset" data-query="${v(w)}">${f}</button>`).join("")}
      </div>

      <section class="section" id="ytm-results" hidden></section>

      <section class="section" id="ytm-history-section" hidden>
        <div class="section-head">
          <div>
            <h2>${d("ytm")} Недавно из YouTube</h2>
            <p class="muted">Всё, что вы уже искали или слушали — можно вернуться без нового поиска</p>
          </div>
        </div>
        <div id="ytm-history"></div>
      </section>

      <section class="section" id="ytm-liked-section" hidden>
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
    </div>`;const n=u("#ytm-search-form"),s=u("#ytm-search-input"),i=u("#ytm-results"),l=(f,w,E,_)=>{const I=u(f);if(!I)return;const B=I.querySelector("div[id]")||I;if(!E.length){I.hidden=!0;return}I.hidden=!1,B.innerHTML=a(E,w)},c=(f,w)=>{var E;o.ytmLists.search=f,i.hidden=!1,i.innerHTML=f.length?`<div class="section-head"><h2>${d("search")} Результаты</h2><span class="muted small">${f.length}</span></div>${a(f,"search")}`:`<div class="empty-inline">${v(w)}</div>`,(E=u("#ytm-empty"))==null||E.setAttribute("hidden","")},r=async()=>{const f=s.value.trim();if(f){i.hidden=!1,i.innerHTML=`<div class="skel-rows">${'<div class="skeleton skeleton-line"></div>'.repeat(5)}</div>`;try{const w=await vn(f);if(e!==o.renderSeq)return;c(w,"Ничего не найдено")}catch(w){if(Ot(w))return;i.innerHTML=`<div class="empty-inline">${v(w.message)}</div>`}}};n.addEventListener("submit",f=>{f.preventDefault(),r()});let p;s.addEventListener("input",()=>{clearTimeout(p),p=setTimeout(()=>{s.value.trim().length>=2&&r()},500)}),(async()=>{const[f,w]=await Promise.allSettled([bn(40),gn(50)]);if(e!==o.renderSeq)return;f.status==="fulfilled"&&f.value.length&&(o.ytmLists.history=f.value,l("#ytm-history-section","history",f.value)),w.status==="fulfilled"&&w.value.length&&(o.ytmLists.liked=w.value,l("#ytm-liked-section","liked",w.value)),!o.ytmLists.history.length&&!o.ytmLists.liked.length&&(u("#ytm-empty").hidden=!1)})()}document.addEventListener("click",async e=>{var n,s,i,l;const t=e.target.closest("[data-action]");if(!t)return;const a=t.dataset.action;if(a==="open"){location.hash=t.dataset.href;return}if(a==="play-row"){const c=Number(t.dataset.index);if(e.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]'))return;nt(!1),await h.playTracks(o.currentTracks,c);return}if(a==="play-list-row"){const c=Number(t.dataset.index);if(e.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]'))return;const r=(n=o.lists)==null?void 0:n[t.dataset.list];if(!(r!=null&&r.length))return;nt(!1),await h.playTracks(r,c);return}if(a==="play-ytm-row"){const c=Number(t.dataset.index);if(e.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]'))return;const r=(s=o.ytmLists)==null?void 0:s[t.dataset.list];if(!(r!=null&&r.length))return;nt(!1),await h.playTracks(r,c);return}if(a==="play-all"){if(!o.currentTracks.length)return y("Список пуст","warn");nt(!1),await h.playTracks(o.currentTracks,0);return}if(a==="shuffle-all"){if(!o.currentTracks.length)return y("Список пуст","warn");nt(!1),await h.playTracks(o.currentTracks,0,{shuffle:!0});return}if(a==="shuffle-library"){const c=await wa();o.currentTracks=c,await h.playTracks(c,0,{shuffle:!0});return}if(a==="start-live"){await Ki();return}if(a==="play-mix"){await Qi(Number(t.dataset.index));return}if(a==="open-settings"){await Wt();return}if(a==="theme"){await as(t.dataset.theme),tt('[data-action="theme"]').forEach(c=>c.classList.toggle("active",c.dataset.theme===o.theme));return}if(a==="color-mode"){const c=t.dataset.mode;localStorage.setItem("colorMode",c),da(c),tt('[data-action="color-mode"]').forEach(r=>r.classList.toggle("active",r.dataset.mode===c)),y(`Режим: ${c==="dark"?"тёмный":c==="light"?"светлый":"системный"}`);return}if(a==="toggle-password"){const c=document.getElementById(t.dataset.target);if(!c)return;const r=c.type==="password";c.type=r?"text":"password",t.innerHTML=d(r?"eyeOff":"eye"),t.setAttribute("aria-label",r?"Скрыть пароль":"Показать пароль");return}if(a==="density"){const c=t.dataset.value;es(c),tt('[data-action="density"]').forEach(r=>r.classList.toggle("active",r.dataset.value===c));return}if(a==="logout"){await dn().catch(()=>{}),location.reload();return}if(a==="ytm-disconnect"){if(!confirm("Отключить YouTube Music? Cookies и скачанный кэш этого профиля будут удалены."))return;try{await Hs(),o.ytmStatus={connected:!1,account:null},y("YouTube Music отключён"),z()}catch(c){y(c.message,"error")}return}if(a==="ytm-reconnect"){o.ytmStatus={connected:!1,account:null},u("#view").innerHTML="",z();return}if(a==="run-search"){la(t.dataset.query||"");return}if(a==="clear-searches"){localStorage.removeItem(Sa),z();return}if(a==="ytm-preset"){const c=t.dataset.query||"";if(!c)return;const r=u("#ytm-results");r&&(r.hidden=!1,r.innerHTML=`<div class="empty-inline">Ищу «${v(c)}»…</div>`);try{const p=await vn(c);o.ytmLists=o.ytmLists||{},o.ytmLists.search=p,r&&(r.innerHTML=p.length?`<div class="section-head"><h2>${d("search")} ${v(c)}</h2><span class="muted small">${p.length}</span></div>${et(p,{showCover:!0,rowAction:"play-ytm-row",rowList:"search"})}`:'<div class="empty-inline">Ничего не найдено</div>')}catch(p){r&&(r.innerHTML=`<div class="empty-inline">${v(p.message)}</div>`)}return}if(a==="ytm-liked"){const c=u("#ytm-liked-section"),r=u("#ytm-liked");r&&(r.innerHTML='<div class="empty-inline">Загружаю лайки…</div>');try{const p=await gn(200);o.ytmLists=o.ytmLists||{},o.ytmLists.liked=p,c&&(c.hidden=!1),r&&(r.innerHTML=p.length?et(p,{showCover:!0,rowAction:"play-ytm-row",rowList:"liked"}):'<div class="empty-inline">В YouTube Music пока нет лайков</div>'),y(`Лайков: ${p.length}`)}catch(p){r&&(r.innerHTML=`<div class="empty-inline">${v(p.message)}</div>`)}return}if(a==="invite-copy"){await((i=navigator.clipboard)==null?void 0:i.writeText(mn(t.dataset.code)).catch(()=>{})),y("Ссылка скопирована");return}if(a==="invite-revoke"){if(!confirm("Отозвать приглашение?"))return;try{await Ps(t.dataset.code),y("Приглашение отозвано"),z()}catch(c){y(c.message,"error")}return}if(a==="play-album"){e.stopPropagation(),nt(!1),await Yi(t.dataset.id);return}if(a==="play-artist"){nt(!1),await Za(t.dataset.id,!1);return}if(a==="shuffle-artist"){nt(!1),await Za(t.dataset.id,!0);return}if(a==="like"){e.stopPropagation(),await Se(t.dataset.id);return}if(a==="like-current"){h.track&&await Se(h.track.id),ae();return}if(a==="dislike"){e.stopPropagation(),await tn(t.dataset.id);return}if(a==="dislike-current"){h.track&&await tn(h.track.id),ae();return}if(a==="add-to-playlist"){e.stopPropagation(),await Fi(t.dataset.id);return}if(a==="remove-from-playlist"){e.stopPropagation();try{await ps(t.dataset.playlist,Number(t.dataset.index)),y("Трек убран из плейлиста"),z()}catch(c){y(c.message,"error")}return}if(a==="resume"){h.track?(h.clearRestored(),await h.toggle()):o.currentTracks.length&&await h.playTracks(o.currentTracks,0),location.hash.startsWith("#/home")&&z();return}if(a==="toggle"){!h.track&&o.currentTracks.length?await h.playTracks(o.currentTracks,0):await h.toggle();return}if(a==="prev")return h.previous();if(a==="next")return h.next();if(a==="shuffle")return h.toggleShuffle();if(a==="repeat")return h.cycleRepeat();if(a==="mute")return h.toggleMute();if(a==="nowplaying")return qt(o.npTab);if(a==="open-lyrics")return qt("lyrics");if(a==="open-eq")return qt("eq");if(a==="open-queue")return qt("queue");if(a==="close-np")return ke();if(a==="jump-album"){(l=h.track)!=null&&l.albumId&&(ke(),location.hash=`#/album/${h.track.albumId}`);return}if(a==="play-queue"){nt(!1),await h.playAt(Number(t.dataset.index));return}if(a==="new-playlist")return e.preventDefault(),Bi();if(a==="delete-playlist"){if(!confirm("Удалить этот плейлист?"))return;await hs(t.dataset.id),y("Плейлист удалён"),$.playlists=null,location.hash="#/playlists";return}if(a==="reload")return z();if(a==="reset-eq"){h.resetEq(),Ce(u("#np-panel"));return}if(a==="refresh-lyrics"){if(!h.track)return;o.lyricsRefresh=!0,o.lyricsTrackId=null,Yn(u("#np-panel"),h.track);return}});u("#np").addEventListener("click",e=>{const t=e.target.closest("[data-np-tab]");t&&Ui(t.dataset.npTab);const a=e.target.closest("[data-eq-preset]");a&&(h.applyEqPreset(a.dataset.eqPreset),Ce(u("#np-panel")))});u("#np").addEventListener("input",e=>{if(e.target.id==="np-seek"){h.seekTo(Number(e.target.value)),xt();return}if(e.target.id==="np-volume"){h.setVolume(Number(e.target.value)),Pe();return}});u("#np").addEventListener("change",e=>{var t;e.target.id==="eq-enabled"&&(h.setEqEnabled(e.target.checked),(t=u(".eq"))==null||t.classList.toggle("disabled",!e.target.checked))});u("#seek").addEventListener("input",e=>{h.seekTo(Number(e.target.value)),xt()});u("#volume").addEventListener("input",e=>{h.setVolume(Number(e.target.value)),Pe()});document.addEventListener("keydown",e=>{var a;const t=["INPUT","TEXTAREA"].includes((a=document.activeElement)==null?void 0:a.tagName);e.code==="Space"&&!t&&h.track&&(e.preventDefault(),h.toggle()),e.key==="ArrowRight"&&!t&&e.shiftKey&&h.seekBy(5),e.key==="ArrowLeft"&&!t&&e.shiftKey&&h.seekBy(-5),t||(e.key.toLowerCase()==="l"&&h.track&&(e.preventDefault(),Se(h.track.id)),e.key.toLowerCase()==="n"&&(e.preventDefault(),h.next()),e.key.toLowerCase()==="p"&&!e.ctrlKey&&!e.metaKey&&(e.preventDefault(),h.prev()),e.key.toLowerCase()==="m"&&(e.preventDefault(),h.toggleMute()),e.key.toLowerCase()==="s"&&(e.preventDefault(),h.toggleShuffle()),e.key.toLowerCase()==="r"&&(e.preventDefault(),h.toggleRepeat())),(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"&&(e.preventDefault(),u("#search-input").focus()),e.key==="Escape"&&(u("#modal-root").innerHTML?rt():ke())});let Te=0,Me=0,Le=0;u("#playerbar").addEventListener("touchstart",e=>{Te=e.touches[0].clientY,Me=e.touches[0].clientX,Le=Date.now()});u("#playerbar").addEventListener("touchend",e=>{const t=e.changedTouches[0].clientY,a=e.changedTouches[0].clientX,n=Te-t,s=Math.abs(a-Me),i=Date.now()-Le;n>80&&i<300&&s<50&&(e.preventDefault(),qt(o.npTab||"lyrics"))});const Ke=u(".np-sheet");Ke&&(Ke.addEventListener("touchstart",e=>{e.target.closest('.np-seek-bar, .eq-band, input[type="range"]')||(Te=e.touches[0].clientY,Me=e.touches[0].clientX,Le=Date.now())}),Ke.addEventListener("touchend",e=>{const t=e.changedTouches[0].clientY,a=e.changedTouches[0].clientX,n=t-Te,s=Math.abs(a-Me),i=Date.now()-Le;n>100&&i<300&&s<50&&(e.preventDefault(),ke())}));let Qe=0,Ze=null;u("#pb-cover").addEventListener("touchend",e=>{const t=Date.now(),a=e.target;if(t-Qe<300&&a===Ze){if(e.preventDefault(),h.track){Se(h.track.id);const n=u("#pb-cover");n.style.transform="scale(0.92)",setTimeout(()=>{n.style.transform=""},150)}Qe=0,Ze=null}else Qe=t,Ze=a});let Z=null;function ss(e,t){const a=e.getBoundingClientRect(),n=Math.min(1,Math.max(0,(t-a.top)/a.height));return Math.round(12-n*24)}function dr(e,t){const a=Number(e.dataset.eqBand),n=(12-t)/24*100,s=e.querySelector(".eq-thumb"),i=e.querySelector(".eq-fill");s&&(s.style.top=`${n}%`),i&&(i.style.top=`${Math.min(n,50)}%`,i.style.height=`${Math.abs(50-n)}%`),e.setAttribute("aria-valuenow",String(t));const l=u(`#eq-val-${a}`);l&&(l.textContent=`${t>0?"+":""}${t}`)}function qe(e,t,a){const n=Number(e.dataset.eqBand);dr(e,t),h.eqState.gains[n]=t,h.setEqGain(n,t),a&&(h.eqState.preset="custom",tt(".eq-presets .chip-btn").forEach(s=>s.classList.toggle("active",s.dataset.eqPreset==="custom")))}document.addEventListener("pointerdown",e=>{var a;const t=e.target.closest(".eq-track");t&&(e.preventDefault(),Z={el:t,value:ss(t,e.clientY)},(a=t.setPointerCapture)==null||a.call(t,e.pointerId),qe(t,Z.value,!1))});document.addEventListener("pointermove",e=>{Z&&(e.preventDefault(),Z.value=ss(Z.el,e.clientY),qe(Z.el,Z.value,!1))});document.addEventListener("pointerup",()=>{Z&&(qe(Z.el,Z.value,!0),Z=null)});document.addEventListener("pointercancel",()=>{Z=null});document.addEventListener("keydown",e=>{var s,i;const t=(i=(s=e.target).closest)==null?void 0:i.call(s,".eq-track");if(!t)return;const a=e.key==="ArrowUp"?1:e.key==="ArrowDown"?-1:0;if(!a)return;e.preventDefault();const n=Number(t.getAttribute("aria-valuenow"))||0;qe(t,Math.max(-12,Math.min(12,n+a)),!0)});const ee=u("#search-input");let sn;ee.addEventListener("input",()=>{clearTimeout(sn);const e=ee.value.trim();e.length!==0&&(sn=setTimeout(()=>{e.length>=2&&(location.hash=`#/search?q=${encodeURIComponent(e)}`)},350))});ee.addEventListener("keydown",e=>{if(e.key==="Enter"){const t=ee.value.trim();if(!t)return;ee.blur(),Rn(t);const a=`#/search?q=${encodeURIComponent(t)}`;location.hash===a?z():location.hash=a}});u("#rescan-btn").addEventListener("click",async()=>{u("#rescan-btn").classList.add("spin");const e=Date.now();try{await fn(),setTimeout(async()=>{u("#rescan-btn").classList.remove("spin"),await _i()},Math.max(2500,Date.now()-e))}catch(t){u("#rescan-btn").classList.remove("spin"),Ot(t)||y(t.message,"error")}});u("#np-pill").addEventListener("click",()=>qt(o.npTab));h.addEventListener("track",()=>{Ea(),o.npOpen&&ae(),re(),xt()});h.addEventListener("time",()=>{xt()});h.addEventListener("buffer",Xn);h.addEventListener("state",re);h.addEventListener("mode",Ta);h.addEventListener("volume",Pe);h.addEventListener("eq",()=>{o.npTab==="eq"&&o.npOpen&&Ce(u("#np-panel"))});h.addEventListener("error",e=>y(e.detail,"error"));document.addEventListener("error",e=>{e.target instanceof HTMLImageElement&&(e.target.style.display="none")},!0);window.addEventListener("hashchange",z);h.addEventListener("queueend",async()=>{if(o.liveMode)try{const e=await hn(25),t=new Set(h.queue.map(n=>n.id)),a=e.filter(n=>!t.has(n.id));if(!a.length){y("Live: новых треков не нашлось","warn");return}h.appendTracks(a),await h.next(!0)}catch(e){Ot(e)||y(e.message,"error")}});u("#auth-toggle-register").addEventListener("click",()=>{var e;return Ma(((e=u("#register-invite"))==null?void 0:e.value)||"")});u("#auth-toggle-login").addEventListener("click",()=>{location.hash.startsWith("#/register")&&(location.hash="#/home"),_t()});u("#register-invite").addEventListener("change",()=>{const e=u("#register-invite").value.trim();e&&Ma(e)});u("#register-form").addEventListener("submit",async e=>{e.preventDefault();const t=u("#register-submit"),a=u("#register-error");a.textContent="",t.disabled=!0;try{await qs({invite:u("#register-invite").value.trim(),username:u("#register-username").value.trim(),password:u("#register-password").value,displayName:u("#register-display").value.trim()}),location.hash="#/home",await La()}catch(n){a.textContent=n.message||"Не удалось зарегистрироваться"}finally{t.disabled=!1}});u("#login-form").addEventListener("submit",async e=>{e.preventDefault();const t=u("#login-submit"),a=u("#login-error");if(a.textContent="",t.getAttribute("aria-busy")!=="true"){t.setAttribute("aria-busy","true");try{await gs(u("#login-username").value.trim(),u("#login-password").value),await La()}catch(n){a.textContent=n.message||"Не удалось войти"}finally{t.removeAttribute("aria-busy")}}});document.addEventListener("keydown",e=>{var t,a;e.key==="Enter"&&!u("#auth-screen").hidden&&((t=document.activeElement)==null?void 0:t.id)==="login-username"&&((a=u("#login-password"))==null||a.focus())});window.addEventListener("pagehide",()=>{h.playId&&h._finalizePlay(!1)});Pe();Ta();re();xt();La();
