(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const Pa={home:"M4 20v-8H2L12 3l10 9h-2v8h-6v-6h-4v6H4z",person:"M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z",album:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",music:"M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z",playlist:"M3 6h12v2H3V6zm0 4h12v2H3v-2zm0 4h8v2H3v-2zm12 .5a3.5 3.5 0 1 0 3.5 3.5V9h3V6h-4v8.5a3.5 3.5 0 0 0-2.5-.9z",search:"M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z",play:"M8 5v14l11-7L8 5z",pause:"M6 5h4v14H6V5zm8 0h4v14h-4V5z",prev:"M6 6h2v12H6V6zm3.5 6L18 18V6l-8.5 6z",next:"M16 6h2v12h-2V6zM6 18l8.5-6L6 6v12z",shuffle:"M10.59 9.17 5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z",repeat:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z",repeatOne:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z",volumeUp:"M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.5 4.5 0 0 0 16.5 12zM14 3.23v2.06a6.99 6.99 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54z",volumeDown:"M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.5 4.5 0 0 0 16.5 12z",volumeOff:"M16.5 12a4.5 4.5 0 0 0-2.5-4.03v2.21l2.45 2.45A4.4 4.4 0 0 0 16.5 12zM19 12a7 7 0 0 1-.94 3.51l1.48 1.48A9 9 0 0 0 14 4.75v2.06A7 7 0 0 1 19 12zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25a7 7 0 0 1-2.25 1.2v2.06a9 9 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z",queue:"M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18a3 3 0 1 0 2 2.82V8h3V6h-5z",lyrics:"M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2z",equalizer:"M7 20h2V10H7v10zm4-8h2V4h-2v8zm4 4h2V7h-2v9zM3 20h2v-6H3v6z",close:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",back:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",add:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",delete:"M6 19c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z",heart:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",heartOutline:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z",more:"M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",clock:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z",library:"M4 6H2v14a2 2 0 0 0 2 2h14v-2H4V6zm16-4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-3 9H9V9h8v2zm-2 4H9v-2h6v2zm2-8H9V5h8v2z",refresh:"M17.65 6.35A8 8 0 1 0 19.73 14h-2.08A6 6 0 1 1 12 6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z",edit:"M3 17.25V21h3.75L17.8 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",check:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",wave:"M3 12h2v4H3v-4zm4-4h2v12H7V8zm4-4h2v16h-2V4zm4 6h2v6h-2v-6zm4-2h2v10h-2V8z",radio:"M3.24 6.15C2.51 6.43 2 7.17 2 8v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-.83-.51-1.57-1.24-1.85L12.7 2.3a1 1 0 0 0-.7 0L3.24 6.15zM8 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm10-10H9v2h9v-2zm0 4h-3v2h3v-2z",logout:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5-5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z",thumbDown:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z",thumbUp:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z",chart:"M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z",palette:"M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z",settings:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.03 7.03 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.47.41l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z",chevronDown:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z",chevronRight:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z",ytm:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-13a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-1.5 7.25v-4.5L14.5 12l-4 2.25z",copy:"M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z",link:"M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4a3.1 3.1 0 0 1 0 6.2h-4V17h4a5 5 0 0 0 0-10z",ticket:"M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 1 0 4v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 1 0-4zm-2-1.46a4 4 0 0 0 0 6.92V18H4v-2.54a4 4 0 0 0 0-6.92V6h16v2.54zM11 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z",key:"M12.65 10A6 6 0 1 0 12.65 14H17v4h4v-4h2v-4H12.65zM7 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",lock:"M18 8h-1V6A5 5 0 0 0 7 6v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zM9 6a3 3 0 0 1 6 0v2H9V6zm9 14H6V10h12v10zm-6-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",moreHoriz:"M6 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",queueAdd:"M14 10H3v2h11v-2zm0-4H3v2h11V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM3 16h7v-2H3v2z",sparkle:"M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z",external:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z",shield:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",darkMode:"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8A9.3 9.3 0 0 0 12 3z",lightMode:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2 13h2a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm18 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM11 2v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM5.99 4.58a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06z",expand:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z",sun:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2 13h2a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm18 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM11 2v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM5.99 4.58a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06z",moon:"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8A9.3 9.3 0 0 0 12 3z",menu:"M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z",eye:"M12 5c-5 0-9 4.5-10 7 1 2.5 5 7 10 7s9-4.5 10-7c-1-2.5-5-7-10-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",eyeOff:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2.71 3.16l1.94 1.94C3.29 6.24 2.06 7.94 1 10c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l2.71 2.71 1.27-1.27L3.98 1.89 2.71 3.16zM12 15c-1.03 0-1.96-.42-2.64-1.1l3.54 3.54c-.28.09-.59.14-.9.14z"};function l(e,t=""){const a=Pa[e]||Pa.music;return`<svg class="icon ${t}" viewBox="0 0 24 24" aria-hidden="true"><path d="${a}"/></svg>`}const xe="1.16.1",Ae="rustream-web";class Bt extends Error{constructor(t,a=0,s=""){super(t),this.name="ApiError",this.status=a,this.code=s}}function os(e){return e===404?"Сервер API не найден. Это статическое превью — запустите rustream, чтобы войти.":e>=501&&e<=504?"Сервер API недоступен. Это статическое превью — запустите rustream, чтобы войти.":`HTTP ${e}`}function ua(e,t={}){const a=new URLSearchParams({v:xe,c:Ae,f:"json",...t});return`/rest/${e}.view?${a.toString()}`}async function ct(e,t={}){var i;const a=await fetch(ua(e,t),{credentials:"same-origin"});if(a.status===401)throw new Bt("Требуется вход в аккаунт",401);if(!a.ok)throw new Bt(os(a.status),a.status);const n=(await a.json())["subsonic-response"];if(!n)throw new Bt("Некорректный ответ сервера");if(n.status!=="ok")throw new Bt(((i=n.error)==null?void 0:i.message)||"Ошибка API");return n}async function L(e,t={}){const a=await fetch(e,{credentials:"same-origin",...t,headers:{"Content-Type":"application/json",...t.headers||{}}});let s=null;try{s=await a.json()}catch{s=null}if(!a.ok){const n=a.status===401?"Требуется вход в аккаунт":os(a.status);throw new Bt((s==null?void 0:s.error)||n,a.status,(s==null?void 0:s.code)||"")}return s}const wt=(e,t=300)=>e?ua("getCoverArt",{id:e,size:t}):"",Ie=e=>ua("stream",{id:e});async function dn(){var a;const e=await ct("getArtists"),t=[];for(const s of((a=e.artists)==null?void 0:a.index)||[])for(const n of s.artist||[])t.push(n);return t}const ls=e=>ct("getArtist",{id:e}),pa=e=>ct("getAlbum",{id:e});async function cs(e="alphabeticalByName",t=100,a=0){var n;return((n=(await ct("getAlbumList2",{type:e,size:t,offset:a})).albumList2)==null?void 0:n.album)||[]}async function un(e=500){var a;return((a=(await ct("getRandomSongs",{size:e})).randomSongs)==null?void 0:a.song)||[]}async function pn(e){return(await ct("search3",{query:e,artistCount:30,albumCount:50,songCount:100})).searchResult3||{artist:[],album:[],song:[]}}async function ha(){var t;return((t=(await ct("getPlaylists")).playlists)==null?void 0:t.playlist)||[]}async function hn(e){return(await ct("getPlaylist",{id:e})).playlist}const ds=(e,t=[])=>{const a=new URLSearchParams({v:xe,c:Ae,f:"json",name:e});return t.forEach(s=>a.append("songId",s)),fetch(`/rest/createPlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(s=>s.json()).then(s=>s["subsonic-response"])},mn=(e,t)=>{const a=new URLSearchParams({v:xe,c:Ae,f:"json",playlistId:e,songIdToAdd:t});return fetch(`/rest/updatePlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(s=>s.json())},fn=(e,t)=>{const a=new URLSearchParams({v:xe,c:Ae,f:"json",playlistId:e,songIndexToRemove:String(t)});return fetch(`/rest/updatePlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(s=>s.json())},vn=e=>ct("deletePlaylist",{id:e});async function gn(){return(await ct("getStarred2")).starred2||{artist:[],album:[],song:[]}}async function bn(){return L("/api/stats")}async function He(){return L("/api/me")}async function yn(){return L("/api/session")}async function ta(){return L("/api/auth/config")}function wn(e,t){return L("/api/auth/login",{method:"POST",body:JSON.stringify({username:e,password:t})})}function us(){return L("/api/auth/logout",{method:"POST"})}function za(e,t){return ps({displayName:e,theme:t})}function ps(e){return L("/api/me",{method:"PATCH",body:JSON.stringify(e)})}async function $n(){return L("/api/me/ratings")}function Sn(e,t){return L("/api/me/ratings",{method:"PUT",body:JSON.stringify({trackId:e,rating:t})})}function Oe(){return L("/api/admin/lastfm")}function qa(e,t,a=!1){return L("/api/admin/lastfm",{method:"PUT",body:JSON.stringify({apiKey:e,apiSecret:t,clear:a})})}function En(e,t){return L("/api/me/password",{method:"POST",body:JSON.stringify({currentPassword:e,newPassword:t})})}function Ia({lastfmUsername:e,lastfmSessionKey:t,listenbrainzToken:a,scrobbleEnabled:s,scrobbleYtm:n}){return L("/api/me/scrobbling",{method:"PUT",body:JSON.stringify({lastfmUsername:e,lastfmSessionKey:t,listenbrainzToken:a,scrobbleEnabled:s,scrobbleYtm:n})})}async function hs(){return L("/api/me/stats")}async function kn(e,t="web"){return L("/api/plays/start",{method:"POST",body:JSON.stringify({trackId:e,source:t})})}function Ha(e,t,a=!1){return L("/api/plays/update",{method:"POST",body:JSON.stringify({playId:e,positionMs:t,completed:a})})}async function ms(e=40){return(await L(`/api/live/queue?count=${e}`)).tracks||[]}async function Tn(){return(await L("/api/live/mixes")).mixes||[]}async function Mn(e,t=!1){return L(`/api/lyrics/${encodeURIComponent(e)}${t?"?refresh=1":""}`)}async function fs(){return L("/api/rescan",{method:"POST"})}async function Ln(){return(await L("/api/users")).users||[]}function _n({username:e,password:t,displayName:a,isAdmin:s}){return L("/api/users",{method:"POST",body:JSON.stringify({username:e,password:t,displayName:a,isAdmin:s})})}function xn(){return L("/api/me/history",{method:"DELETE"})}function An(e){return L(`/api/users/${e}`,{method:"DELETE"})}function Dn(){return L("/api/lastfm/connect")}function Cn(e=""){return L("/api/lastfm/complete",{method:"POST",body:JSON.stringify({token:e})})}async function Pn(){const e=await L("/api/admin/invites");return(e==null?void 0:e.invites)||[]}async function zn({note:e,expiresInDays:t,maxUses:a,isAdmin:s}){const n=await L("/api/admin/invites",{method:"POST",body:JSON.stringify({note:e,expiresInDays:t,maxUses:a,isAdmin:s})});return n==null?void 0:n.invite}function qn(e){return L(`/api/admin/invites/${encodeURIComponent(e)}`,{method:"DELETE"})}function In(e){return L(`/api/auth/invite/${encodeURIComponent(e)}`)}function Hn({invite:e,username:t,password:a,displayName:s}){return L("/api/auth/register",{method:"POST",body:JSON.stringify({invite:e,username:t,password:a,displayName:s||void 0})})}const vs=e=>`${location.origin}/static/index.html#/register?invite=${encodeURIComponent(e)}`;function De(){return L("/api/me/ytm")}function On(e){return L("/api/me/ytm",{method:"PUT",body:JSON.stringify({cookies:e})})}function Nn(){return L("/api/me/ytm",{method:"DELETE"})}async function gs(e,t=40){const a=new URLSearchParams({q:e,limit:String(t)}),s=await L(`/api/ytm/search?${a.toString()}`);return(s==null?void 0:s.tracks)||[]}async function bs(e=200){const t=await L(`/api/ytm/liked?limit=${e}`);return(t==null?void 0:t.tracks)||[]}async function ys(e=40){const t=await L(`/api/ytm/history?limit=${e}`);return(t==null?void 0:t.tracks)||[]}function Rn(){return L("/api/me/player")}function Vn(e){return L("/api/me/player",{method:"PUT",body:JSON.stringify({state:e})})}/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Yn(e,t,a){return(t=Un(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function mt(){return mt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)({}).hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},mt.apply(null,arguments)}function Oa(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,s)}return a}function lt(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Oa(Object(a),!0).forEach(function(s){Yn(e,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Oa(Object(a)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))})}return e}function jn(e,t){if(e==null)return{};var a,s,n=Bn(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function Bn(e,t){if(e==null)return{};var a={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;a[s]=e[s]}return a}function Fn(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var s=a.call(e,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Un(e){var t=Fn(e,"string");return typeof t=="symbol"?t:t+""}function ea(e){"@babel/helpers - typeof";return ea=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ea(e)}var Xn="1.15.7";function ht(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var ft=ht(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),se=ht(/Edge/i),Na=ht(/firefox/i),Gt=ht(/safari/i)&&!ht(/chrome/i)&&!ht(/android/i),ma=ht(/iP(ad|od|hone)/i),ws=ht(/chrome/i)&&ht(/android/i),$s={capture:!1,passive:!1};function A(e,t,a){e.addEventListener(t,a,!ft&&$s)}function x(e,t,a){e.removeEventListener(t,a,!ft&&$s)}function ge(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function Ss(e){return e.host&&e!==document&&e.host.nodeType&&e.host!==e?e.host:e.parentNode}function st(e,t,a,s){if(e){a=a||document;do{if(t!=null&&(t[0]===">"?e.parentNode===a&&ge(e,t):ge(e,t))||s&&e===a)return e;if(e===a)break}while(e=Ss(e))}return null}var Ra=/\s+/g;function G(e,t,a){if(e&&t)if(e.classList)e.classList[a?"add":"remove"](t);else{var s=(" "+e.className+" ").replace(Ra," ").replace(" "+t+" "," ");e.className=(s+(a?" "+t:"")).replace(Ra," ")}}function E(e,t,a){var s=e&&e.style;if(s){if(a===void 0)return document.defaultView&&document.defaultView.getComputedStyle?a=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(a=e.currentStyle),t===void 0?a:a[t];!(t in s)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),s[t]=a+(typeof a=="string"?"":"px")}}function It(e,t){var a="";if(typeof e=="string")a=e;else do{var s=E(e,"transform");s&&s!=="none"&&(a=s+" "+a)}while(!t&&(e=e.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(a)}function Es(e,t,a){if(e){var s=e.getElementsByTagName(t),n=0,i=s.length;if(a)for(;n<i;n++)a(s[n],n);return s}return[]}function ot(){var e=document.scrollingElement;return e||document.documentElement}function O(e,t,a,s,n){if(!(!e.getBoundingClientRect&&e!==window)){var i,r,u,p,d,m,f;if(e!==window&&e.parentNode&&e!==ot()?(i=e.getBoundingClientRect(),r=i.top,u=i.left,p=i.bottom,d=i.right,m=i.height,f=i.width):(r=0,u=0,p=window.innerHeight,d=window.innerWidth,m=window.innerHeight,f=window.innerWidth),(t||a)&&e!==window&&(n=n||e.parentNode,!ft))do if(n&&n.getBoundingClientRect&&(E(n,"transform")!=="none"||a&&E(n,"position")!=="static")){var v=n.getBoundingClientRect();r-=v.top+parseInt(E(n,"border-top-width")),u-=v.left+parseInt(E(n,"border-left-width")),p=r+i.height,d=u+i.width;break}while(n=n.parentNode);if(s&&e!==window){var T=It(n||e),y=T&&T.a,$=T&&T.d;T&&(r/=$,u/=y,f/=y,m/=$,p=r+m,d=u+f)}return{top:r,left:u,bottom:p,right:d,width:f,height:m}}}function Va(e,t,a){for(var s=$t(e,!0),n=O(e)[t];s;){var i=O(s)[a],r=void 0;if(r=n>=i,!r)return s;if(s===ot())break;s=$t(s,!1)}return!1}function Ht(e,t,a,s){for(var n=0,i=0,r=e.children;i<r.length;){if(r[i].style.display!=="none"&&r[i]!==k.ghost&&(s||r[i]!==k.dragged)&&st(r[i],a.draggable,e,!1)){if(n===t)return r[i];n++}i++}return null}function fa(e,t){for(var a=e.lastElementChild;a&&(a===k.ghost||E(a,"display")==="none"||t&&!ge(a,t));)a=a.previousElementSibling;return a||null}function Z(e,t){var a=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==k.clone&&(!t||ge(e,t))&&a++;return a}function Ya(e){var t=0,a=0,s=ot();if(e)do{var n=It(e),i=n.a,r=n.d;t+=e.scrollLeft*i,a+=e.scrollTop*r}while(e!==s&&(e=e.parentNode));return[t,a]}function Wn(e,t){for(var a in e)if(e.hasOwnProperty(a)){for(var s in t)if(t.hasOwnProperty(s)&&t[s]===e[a][s])return Number(a)}return-1}function $t(e,t){if(!e||!e.getBoundingClientRect)return ot();var a=e,s=!1;do if(a.clientWidth<a.scrollWidth||a.clientHeight<a.scrollHeight){var n=E(a);if(a.clientWidth<a.scrollWidth&&(n.overflowX=="auto"||n.overflowX=="scroll")||a.clientHeight<a.scrollHeight&&(n.overflowY=="auto"||n.overflowY=="scroll")){if(!a.getBoundingClientRect||a===document.body)return ot();if(s||t)return a;s=!0}}while(a=a.parentNode);return ot()}function Gn(e,t){if(e&&t)for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);return e}function Ne(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var Jt;function ks(e,t){return function(){if(!Jt){var a=arguments,s=this;a.length===1?e.call(s,a[0]):e.apply(s,a),Jt=setTimeout(function(){Jt=void 0},t)}}}function Jn(){clearTimeout(Jt),Jt=void 0}function Ts(e,t,a){e.scrollLeft+=t,e.scrollTop+=a}function Ms(e){var t=window.Polymer,a=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):a?a(e).clone(!0)[0]:e.cloneNode(!0)}function Ls(e,t,a){var s={};return Array.from(e.children).forEach(function(n){var i,r,u,p;if(!(!st(n,t.draggable,e,!1)||n.animated||n===a)){var d=O(n);s.left=Math.min((i=s.left)!==null&&i!==void 0?i:1/0,d.left),s.top=Math.min((r=s.top)!==null&&r!==void 0?r:1/0,d.top),s.right=Math.max((u=s.right)!==null&&u!==void 0?u:-1/0,d.right),s.bottom=Math.max((p=s.bottom)!==null&&p!==void 0?p:-1/0,d.bottom)}}),s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}var X="Sortable"+new Date().getTime();function Kn(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var s=[].slice.call(this.el.children);s.forEach(function(n){if(!(E(n,"display")==="none"||n===k.ghost)){e.push({target:n,rect:O(n)});var i=lt({},e[e.length-1].rect);if(n.thisAnimationDuration){var r=It(n,!0);r&&(i.top-=r.f,i.left-=r.e)}n.fromRect=i}})}},addAnimationState:function(s){e.push(s)},removeAnimationState:function(s){e.splice(Wn(e,{target:s}),1)},animateAll:function(s){var n=this;if(!this.options.animation){clearTimeout(t),typeof s=="function"&&s();return}var i=!1,r=0;e.forEach(function(u){var p=0,d=u.target,m=d.fromRect,f=O(d),v=d.prevFromRect,T=d.prevToRect,y=u.rect,$=It(d,!0);$&&(f.top-=$.f,f.left-=$.e),d.toRect=f,d.thisAnimationDuration&&Ne(v,f)&&!Ne(m,f)&&(y.top-f.top)/(y.left-f.left)===(m.top-f.top)/(m.left-f.left)&&(p=Zn(y,v,T,n.options)),Ne(f,m)||(d.prevFromRect=m,d.prevToRect=f,p||(p=n.options.animation),n.animate(d,y,f,p)),p&&(i=!0,r=Math.max(r,p),clearTimeout(d.animationResetTimer),d.animationResetTimer=setTimeout(function(){d.animationTime=0,d.prevFromRect=null,d.fromRect=null,d.prevToRect=null,d.thisAnimationDuration=null},p),d.thisAnimationDuration=p)}),clearTimeout(t),i?t=setTimeout(function(){typeof s=="function"&&s()},r):typeof s=="function"&&s(),e=[]},animate:function(s,n,i,r){if(r){E(s,"transition",""),E(s,"transform","");var u=It(this.el),p=u&&u.a,d=u&&u.d,m=(n.left-i.left)/(p||1),f=(n.top-i.top)/(d||1);s.animatingX=!!m,s.animatingY=!!f,E(s,"transform","translate3d("+m+"px,"+f+"px,0)"),this.forRepaintDummy=Qn(s),E(s,"transition","transform "+r+"ms"+(this.options.easing?" "+this.options.easing:"")),E(s,"transform","translate3d(0,0,0)"),typeof s.animated=="number"&&clearTimeout(s.animated),s.animated=setTimeout(function(){E(s,"transition",""),E(s,"transform",""),s.animated=!1,s.animatingX=!1,s.animatingY=!1},r)}}}}function Qn(e){return e.offsetWidth}function Zn(e,t,a,s){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-a.top,2)+Math.pow(t.left-a.left,2))*s.animation}var At=[],Re={initializeByDefault:!0},ne={mount:function(t){for(var a in Re)Re.hasOwnProperty(a)&&!(a in t)&&(t[a]=Re[a]);At.forEach(function(s){if(s.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),At.push(t)},pluginEvent:function(t,a,s){var n=this;this.eventCanceled=!1,s.cancel=function(){n.eventCanceled=!0};var i=t+"Global";At.forEach(function(r){a[r.pluginName]&&(a[r.pluginName][i]&&a[r.pluginName][i](lt({sortable:a},s)),a.options[r.pluginName]&&a[r.pluginName][t]&&a[r.pluginName][t](lt({sortable:a},s)))})},initializePlugins:function(t,a,s,n){At.forEach(function(u){var p=u.pluginName;if(!(!t.options[p]&&!u.initializeByDefault)){var d=new u(t,a,t.options);d.sortable=t,d.options=t.options,t[p]=d,mt(s,d.defaults)}});for(var i in t.options)if(t.options.hasOwnProperty(i)){var r=this.modifyOption(t,i,t.options[i]);typeof r<"u"&&(t.options[i]=r)}},getEventProperties:function(t,a){var s={};return At.forEach(function(n){typeof n.eventProperties=="function"&&mt(s,n.eventProperties.call(a[n.pluginName],t))}),s},modifyOption:function(t,a,s){var n;return At.forEach(function(i){t[i.pluginName]&&i.optionListeners&&typeof i.optionListeners[a]=="function"&&(n=i.optionListeners[a].call(t[i.pluginName],s))}),n}};function ti(e){var t=e.sortable,a=e.rootEl,s=e.name,n=e.targetEl,i=e.cloneEl,r=e.toEl,u=e.fromEl,p=e.oldIndex,d=e.newIndex,m=e.oldDraggableIndex,f=e.newDraggableIndex,v=e.originalEvent,T=e.putSortable,y=e.extraEventProperties;if(t=t||a&&a[X],!!t){var $,D=t.options,N="on"+s.charAt(0).toUpperCase()+s.substr(1);window.CustomEvent&&!ft&&!se?$=new CustomEvent(s,{bubbles:!0,cancelable:!0}):($=document.createEvent("Event"),$.initEvent(s,!0,!0)),$.to=r||a,$.from=u||a,$.item=n||a,$.clone=i,$.oldIndex=p,$.newIndex=d,$.oldDraggableIndex=m,$.newDraggableIndex=f,$.originalEvent=v,$.pullMode=T?T.lastPutMode:void 0;var _=lt(lt({},y),ne.getEventProperties(s,t));for(var R in _)$[R]=_[R];a&&a.dispatchEvent($),D[N]&&D[N].call(t,$)}}var ei=["evt"],U=function(t,a){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=s.evt,i=jn(s,ei);ne.pluginEvent.bind(k)(t,a,lt({dragEl:b,parentEl:z,ghostEl:M,rootEl:C,nextEl:Lt,lastDownEl:he,cloneEl:P,cloneHidden:yt,dragStarted:Ft,putSortable:Y,activeSortable:k.active,originalEvent:n,oldIndex:zt,oldDraggableIndex:Kt,newIndex:J,newDraggableIndex:bt,hideGhostForTarget:Ds,unhideGhostForTarget:Cs,cloneNowHidden:function(){yt=!0},cloneNowShown:function(){yt=!1},dispatchSortableEvent:function(u){B({sortable:a,name:u,originalEvent:n})}},i))};function B(e){ti(lt({putSortable:Y,cloneEl:P,targetEl:b,rootEl:C,oldIndex:zt,oldDraggableIndex:Kt,newIndex:J,newDraggableIndex:bt},e))}var b,z,M,C,Lt,he,P,yt,zt,J,Kt,bt,ce,Y,Pt=!1,be=!1,ye=[],Tt,at,Ve,Ye,ja,Ba,Ft,Dt,Qt,Zt=!1,de=!1,me,j,je=[],aa=!1,we=[],Ce=typeof document<"u",ue=ma,Fa=se||ft?"cssFloat":"float",ai=Ce&&!ws&&!ma&&"draggable"in document.createElement("div"),_s=(function(){if(Ce){if(ft)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}})(),xs=function(t,a){var s=E(t),n=parseInt(s.width)-parseInt(s.paddingLeft)-parseInt(s.paddingRight)-parseInt(s.borderLeftWidth)-parseInt(s.borderRightWidth),i=Ht(t,0,a),r=Ht(t,1,a),u=i&&E(i),p=r&&E(r),d=u&&parseInt(u.marginLeft)+parseInt(u.marginRight)+O(i).width,m=p&&parseInt(p.marginLeft)+parseInt(p.marginRight)+O(r).width;if(s.display==="flex")return s.flexDirection==="column"||s.flexDirection==="column-reverse"?"vertical":"horizontal";if(s.display==="grid")return s.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&u.float&&u.float!=="none"){var f=u.float==="left"?"left":"right";return r&&(p.clear==="both"||p.clear===f)?"vertical":"horizontal"}return i&&(u.display==="block"||u.display==="flex"||u.display==="table"||u.display==="grid"||d>=n&&s[Fa]==="none"||r&&s[Fa]==="none"&&d+m>n)?"vertical":"horizontal"},si=function(t,a,s){var n=s?t.left:t.top,i=s?t.right:t.bottom,r=s?t.width:t.height,u=s?a.left:a.top,p=s?a.right:a.bottom,d=s?a.width:a.height;return n===u||i===p||n+r/2===u+d/2},ni=function(t,a){var s;return ye.some(function(n){var i=n[X].options.emptyInsertThreshold;if(!(!i||fa(n))){var r=O(n),u=t>=r.left-i&&t<=r.right+i,p=a>=r.top-i&&a<=r.bottom+i;if(u&&p)return s=n}}),s},As=function(t){function a(i,r){return function(u,p,d,m){var f=u.options.group.name&&p.options.group.name&&u.options.group.name===p.options.group.name;if(i==null&&(r||f))return!0;if(i==null||i===!1)return!1;if(r&&i==="clone")return i;if(typeof i=="function")return a(i(u,p,d,m),r)(u,p,d,m);var v=(r?u:p).options.group.name;return i===!0||typeof i=="string"&&i===v||i.join&&i.indexOf(v)>-1}}var s={},n=t.group;(!n||ea(n)!="object")&&(n={name:n}),s.name=n.name,s.checkPull=a(n.pull,!0),s.checkPut=a(n.put),s.revertClone=n.revertClone,t.group=s},Ds=function(){!_s&&M&&E(M,"display","none")},Cs=function(){!_s&&M&&E(M,"display","")};Ce&&!ws&&document.addEventListener("click",function(e){if(be)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),be=!1,!1},!0);var Mt=function(t){if(b){t=t.touches?t.touches[0]:t;var a=ni(t.clientX,t.clientY);if(a){var s={};for(var n in t)t.hasOwnProperty(n)&&(s[n]=t[n]);s.target=s.rootEl=a,s.preventDefault=void 0,s.stopPropagation=void 0,a[X]._onDragOver(s)}}},ii=function(t){b&&b.parentNode[X]._isOutsideThisEl(t.target)};function k(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=mt({},t),e[X]=this;var a={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return xs(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(r,u){r.setData("Text",u.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:k.supportPointer!==!1&&"PointerEvent"in window&&(!Gt||ma),emptyInsertThreshold:5};ne.initializePlugins(this,e,a);for(var s in a)!(s in t)&&(t[s]=a[s]);As(t);for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));this.nativeDraggable=t.forceFallback?!1:ai,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?A(e,"pointerdown",this._onTapStart):(A(e,"mousedown",this._onTapStart),A(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(A(e,"dragover",this),A(e,"dragenter",this)),ye.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),mt(this,Kn())}k.prototype={constructor:k,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(Dt=null)},_getDirection:function(t,a){return typeof this.options.direction=="function"?this.options.direction.call(this,t,a,b):this.options.direction},_onTapStart:function(t){if(t.cancelable){var a=this,s=this.el,n=this.options,i=n.preventOnFilter,r=t.type,u=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,p=(u||t).target,d=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||p,m=n.filter;if(hi(s),!b&&!(/mousedown|pointerdown/.test(r)&&t.button!==0||n.disabled)&&!d.isContentEditable&&!(!this.nativeDraggable&&Gt&&p&&p.tagName.toUpperCase()==="SELECT")&&(p=st(p,n.draggable,s,!1),!(p&&p.animated)&&he!==p)){if(zt=Z(p),Kt=Z(p,n.draggable),typeof m=="function"){if(m.call(this,t,p,this)){B({sortable:a,rootEl:d,name:"filter",targetEl:p,toEl:s,fromEl:s}),U("filter",a,{evt:t}),i&&t.preventDefault();return}}else if(m&&(m=m.split(",").some(function(f){if(f=st(d,f.trim(),s,!1),f)return B({sortable:a,rootEl:f,name:"filter",targetEl:p,fromEl:s,toEl:s}),U("filter",a,{evt:t}),!0}),m)){i&&t.preventDefault();return}n.handle&&!st(d,n.handle,s,!1)||this._prepareDragStart(t,u,p)}}},_prepareDragStart:function(t,a,s){var n=this,i=n.el,r=n.options,u=i.ownerDocument,p;if(s&&!b&&s.parentNode===i){var d=O(s);if(C=i,b=s,z=b.parentNode,Lt=b.nextSibling,he=s,ce=r.group,k.dragged=b,Tt={target:b,clientX:(a||t).clientX,clientY:(a||t).clientY},ja=Tt.clientX-d.left,Ba=Tt.clientY-d.top,this._lastX=(a||t).clientX,this._lastY=(a||t).clientY,b.style["will-change"]="all",p=function(){if(U("delayEnded",n,{evt:t}),k.eventCanceled){n._onDrop();return}n._disableDelayedDragEvents(),!Na&&n.nativeDraggable&&(b.draggable=!0),n._triggerDragStart(t,a),B({sortable:n,name:"choose",originalEvent:t}),G(b,r.chosenClass,!0)},r.ignore.split(",").forEach(function(m){Es(b,m.trim(),Be)}),A(u,"dragover",Mt),A(u,"mousemove",Mt),A(u,"touchmove",Mt),r.supportPointer?(A(u,"pointerup",n._onDrop),!this.nativeDraggable&&A(u,"pointercancel",n._onDrop)):(A(u,"mouseup",n._onDrop),A(u,"touchend",n._onDrop),A(u,"touchcancel",n._onDrop)),Na&&this.nativeDraggable&&(this.options.touchStartThreshold=4,b.draggable=!0),U("delayStart",this,{evt:t}),r.delay&&(!r.delayOnTouchOnly||a)&&(!this.nativeDraggable||!(se||ft))){if(k.eventCanceled){this._onDrop();return}r.supportPointer?(A(u,"pointerup",n._disableDelayedDrag),A(u,"pointercancel",n._disableDelayedDrag)):(A(u,"mouseup",n._disableDelayedDrag),A(u,"touchend",n._disableDelayedDrag),A(u,"touchcancel",n._disableDelayedDrag)),A(u,"mousemove",n._delayedDragTouchMoveHandler),A(u,"touchmove",n._delayedDragTouchMoveHandler),r.supportPointer&&A(u,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(p,r.delay)}else p()}},_delayedDragTouchMoveHandler:function(t){var a=t.touches?t.touches[0]:t;Math.max(Math.abs(a.clientX-this._lastX),Math.abs(a.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){b&&Be(b),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;x(t,"mouseup",this._disableDelayedDrag),x(t,"touchend",this._disableDelayedDrag),x(t,"touchcancel",this._disableDelayedDrag),x(t,"pointerup",this._disableDelayedDrag),x(t,"pointercancel",this._disableDelayedDrag),x(t,"mousemove",this._delayedDragTouchMoveHandler),x(t,"touchmove",this._delayedDragTouchMoveHandler),x(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,a){a=a||t.pointerType=="touch"&&t,!this.nativeDraggable||a?this.options.supportPointer?A(document,"pointermove",this._onTouchMove):a?A(document,"touchmove",this._onTouchMove):A(document,"mousemove",this._onTouchMove):(A(b,"dragend",this),A(C,"dragstart",this._onDragStart));try{document.selection?fe(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,a){if(Pt=!1,C&&b){U("dragStarted",this,{evt:a}),this.nativeDraggable&&A(document,"dragover",ii);var s=this.options;!t&&G(b,s.dragClass,!1),G(b,s.ghostClass,!0),k.active=this,t&&this._appendGhost(),B({sortable:this,name:"start",originalEvent:a})}else this._nulling()},_emulateDragOver:function(){if(at){this._lastX=at.clientX,this._lastY=at.clientY,Ds();for(var t=document.elementFromPoint(at.clientX,at.clientY),a=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(at.clientX,at.clientY),t!==a);)a=t;if(b.parentNode[X]._isOutsideThisEl(t),a)do{if(a[X]){var s=void 0;if(s=a[X]._onDragOver({clientX:at.clientX,clientY:at.clientY,target:t,rootEl:a}),s&&!this.options.dragoverBubble)break}t=a}while(a=Ss(a));Cs()}},_onTouchMove:function(t){if(Tt){var a=this.options,s=a.fallbackTolerance,n=a.fallbackOffset,i=t.touches?t.touches[0]:t,r=M&&It(M,!0),u=M&&r&&r.a,p=M&&r&&r.d,d=ue&&j&&Ya(j),m=(i.clientX-Tt.clientX+n.x)/(u||1)+(d?d[0]-je[0]:0)/(u||1),f=(i.clientY-Tt.clientY+n.y)/(p||1)+(d?d[1]-je[1]:0)/(p||1);if(!k.active&&!Pt){if(s&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<s)return;this._onDragStart(t,!0)}if(M){r?(r.e+=m-(Ve||0),r.f+=f-(Ye||0)):r={a:1,b:0,c:0,d:1,e:m,f};var v="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");E(M,"webkitTransform",v),E(M,"mozTransform",v),E(M,"msTransform",v),E(M,"transform",v),Ve=m,Ye=f,at=i}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!M){var t=this.options.fallbackOnBody?document.body:C,a=O(b,!0,ue,!0,t),s=this.options;if(ue){for(j=t;E(j,"position")==="static"&&E(j,"transform")==="none"&&j!==document;)j=j.parentNode;j!==document.body&&j!==document.documentElement?(j===document&&(j=ot()),a.top+=j.scrollTop,a.left+=j.scrollLeft):j=ot(),je=Ya(j)}M=b.cloneNode(!0),G(M,s.ghostClass,!1),G(M,s.fallbackClass,!0),G(M,s.dragClass,!0),E(M,"transition",""),E(M,"transform",""),E(M,"box-sizing","border-box"),E(M,"margin",0),E(M,"top",a.top),E(M,"left",a.left),E(M,"width",a.width),E(M,"height",a.height),E(M,"opacity","0.8"),E(M,"position",ue?"absolute":"fixed"),E(M,"zIndex","100000"),E(M,"pointerEvents","none"),k.ghost=M,t.appendChild(M),E(M,"transform-origin",ja/parseInt(M.style.width)*100+"% "+Ba/parseInt(M.style.height)*100+"%")}},_onDragStart:function(t,a){var s=this,n=t.dataTransfer,i=s.options;if(U("dragStart",this,{evt:t}),k.eventCanceled){this._onDrop();return}U("setupClone",this),k.eventCanceled||(P=Ms(b),P.removeAttribute("id"),P.draggable=!1,P.style["will-change"]="",this._hideClone(),G(P,this.options.chosenClass,!1),k.clone=P),s.cloneId=fe(function(){U("clone",s),!k.eventCanceled&&(s.options.removeCloneOnHide||C.insertBefore(P,b),s._hideClone(),B({sortable:s,name:"clone"}))}),!a&&G(b,i.dragClass,!0),a?(be=!0,s._loopId=setInterval(s._emulateDragOver,50)):(x(document,"mouseup",s._onDrop),x(document,"touchend",s._onDrop),x(document,"touchcancel",s._onDrop),n&&(n.effectAllowed="move",i.setData&&i.setData.call(s,n,b)),A(document,"drop",s),E(b,"transform","translateZ(0)")),Pt=!0,s._dragStartId=fe(s._dragStarted.bind(s,a,t)),A(document,"selectstart",s),Ft=!0,window.getSelection().removeAllRanges(),Gt&&E(document.body,"user-select","none")},_onDragOver:function(t){var a=this.el,s=t.target,n,i,r,u=this.options,p=u.group,d=k.active,m=ce===p,f=u.sort,v=Y||d,T,y=this,$=!1;if(aa)return;function D(jt,ln){U(jt,y,lt({evt:t,isOwner:m,axis:T?"vertical":"horizontal",revert:r,dragRect:n,targetRect:i,canSort:f,fromSortable:v,target:s,completed:_,onMove:function(Ca,cn){return pe(C,a,b,n,Ca,O(Ca),t,cn)},changed:R},ln))}function N(){D("dragOverAnimationCapture"),y.captureAnimationState(),y!==v&&v.captureAnimationState()}function _(jt){return D("dragOverCompleted",{insertion:jt}),jt&&(m?d._hideClone():d._showClone(y),y!==v&&(G(b,Y?Y.options.ghostClass:d.options.ghostClass,!1),G(b,u.ghostClass,!0)),Y!==y&&y!==k.active?Y=y:y===k.active&&Y&&(Y=null),v===y&&(y._ignoreWhileAnimating=s),y.animateAll(function(){D("dragOverAnimationComplete"),y._ignoreWhileAnimating=null}),y!==v&&(v.animateAll(),v._ignoreWhileAnimating=null)),(s===b&&!b.animated||s===a&&!s.animated)&&(Dt=null),!u.dragoverBubble&&!t.rootEl&&s!==document&&(b.parentNode[X]._isOutsideThisEl(t.target),!jt&&Mt(t)),!u.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),$=!0}function R(){J=Z(b),bt=Z(b,u.draggable),B({sortable:y,name:"change",toEl:a,newIndex:J,newDraggableIndex:bt,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),s=st(s,u.draggable,a,!0),D("dragOver"),k.eventCanceled)return $;if(b.contains(t.target)||s.animated&&s.animatingX&&s.animatingY||y._ignoreWhileAnimating===s)return _(!1);if(be=!1,d&&!u.disabled&&(m?f||(r=z!==C):Y===this||(this.lastPutMode=ce.checkPull(this,d,b,t))&&p.checkPut(this,d,b,t))){if(T=this._getDirection(t,s)==="vertical",n=O(b),D("dragOverValid"),k.eventCanceled)return $;if(r)return z=C,N(),this._hideClone(),D("revert"),k.eventCanceled||(Lt?C.insertBefore(b,Lt):C.appendChild(b)),_(!0);var I=fa(a,u.draggable);if(!I||ci(t,T,this)&&!I.animated){if(I===b)return _(!1);if(I&&a===t.target&&(s=I),s&&(i=O(s)),pe(C,a,b,n,s,i,t,!!s)!==!1)return N(),I&&I.nextSibling?a.insertBefore(b,I.nextSibling):a.appendChild(b),z=a,R(),_(!0)}else if(I&&li(t,T,this)){var it=Ht(a,0,u,!0);if(it===b)return _(!1);if(s=it,i=O(s),pe(C,a,b,n,s,i,t,!1)!==!1)return N(),a.insertBefore(b,it),z=a,R(),_(!0)}else if(s.parentNode===a){i=O(s);var K=0,Et,Nt=b.parentNode!==a,W=!si(b.animated&&b.toRect||n,s.animated&&s.toRect||i,T),Rt=T?"top":"left",vt=Va(s,"top","top")||Va(b,"top","top"),Vt=vt?vt.scrollTop:void 0;Dt!==s&&(Et=i[Rt],Zt=!1,de=!W&&u.invertSwap||Nt),K=di(t,s,i,T,W?1:u.swapThreshold,u.invertedSwapThreshold==null?u.swapThreshold:u.invertedSwapThreshold,de,Dt===s);var ut;if(K!==0){var kt=Z(b);do kt-=K,ut=z.children[kt];while(ut&&(E(ut,"display")==="none"||ut===M))}if(K===0||ut===s)return _(!1);Dt=s,Qt=K;var Yt=s.nextElementSibling,gt=!1;gt=K===1;var le=pe(C,a,b,n,s,i,t,gt);if(le!==!1)return(le===1||le===-1)&&(gt=le===1),aa=!0,setTimeout(oi,30),N(),gt&&!Yt?a.appendChild(b):s.parentNode.insertBefore(b,gt?Yt:s),vt&&Ts(vt,0,Vt-vt.scrollTop),z=b.parentNode,Et!==void 0&&!de&&(me=Math.abs(Et-O(s)[Rt])),R(),_(!0)}if(a.contains(b))return _(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){x(document,"mousemove",this._onTouchMove),x(document,"touchmove",this._onTouchMove),x(document,"pointermove",this._onTouchMove),x(document,"dragover",Mt),x(document,"mousemove",Mt),x(document,"touchmove",Mt)},_offUpEvents:function(){var t=this.el.ownerDocument;x(t,"mouseup",this._onDrop),x(t,"touchend",this._onDrop),x(t,"pointerup",this._onDrop),x(t,"pointercancel",this._onDrop),x(t,"touchcancel",this._onDrop),x(document,"selectstart",this)},_onDrop:function(t){var a=this.el,s=this.options;if(J=Z(b),bt=Z(b,s.draggable),U("drop",this,{evt:t}),z=b&&b.parentNode,J=Z(b),bt=Z(b,s.draggable),k.eventCanceled){this._nulling();return}Pt=!1,de=!1,Zt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),sa(this.cloneId),sa(this._dragStartId),this.nativeDraggable&&(x(document,"drop",this),x(a,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Gt&&E(document.body,"user-select",""),E(b,"transform",""),t&&(Ft&&(t.cancelable&&t.preventDefault(),!s.dropBubble&&t.stopPropagation()),M&&M.parentNode&&M.parentNode.removeChild(M),(C===z||Y&&Y.lastPutMode!=="clone")&&P&&P.parentNode&&P.parentNode.removeChild(P),b&&(this.nativeDraggable&&x(b,"dragend",this),Be(b),b.style["will-change"]="",Ft&&!Pt&&G(b,Y?Y.options.ghostClass:this.options.ghostClass,!1),G(b,this.options.chosenClass,!1),B({sortable:this,name:"unchoose",toEl:z,newIndex:null,newDraggableIndex:null,originalEvent:t}),C!==z?(J>=0&&(B({rootEl:z,name:"add",toEl:z,fromEl:C,originalEvent:t}),B({sortable:this,name:"remove",toEl:z,originalEvent:t}),B({rootEl:z,name:"sort",toEl:z,fromEl:C,originalEvent:t}),B({sortable:this,name:"sort",toEl:z,originalEvent:t})),Y&&Y.save()):J!==zt&&J>=0&&(B({sortable:this,name:"update",toEl:z,originalEvent:t}),B({sortable:this,name:"sort",toEl:z,originalEvent:t})),k.active&&((J==null||J===-1)&&(J=zt,bt=Kt),B({sortable:this,name:"end",toEl:z,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){U("nulling",this),C=b=z=M=Lt=P=he=yt=Tt=at=Ft=J=bt=zt=Kt=Dt=Qt=Y=ce=k.dragged=k.ghost=k.clone=k.active=null;var t=this.el;we.forEach(function(a){t.contains(a)&&(a.checked=!0)}),we.length=Ve=Ye=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":b&&(this._onDragOver(t),ri(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],a,s=this.el.children,n=0,i=s.length,r=this.options;n<i;n++)a=s[n],st(a,r.draggable,this.el,!1)&&t.push(a.getAttribute(r.dataIdAttr)||pi(a));return t},sort:function(t,a){var s={},n=this.el;this.toArray().forEach(function(i,r){var u=n.children[r];st(u,this.options.draggable,n,!1)&&(s[i]=u)},this),a&&this.captureAnimationState(),t.forEach(function(i){s[i]&&(n.removeChild(s[i]),n.appendChild(s[i]))}),a&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,a){return st(t,a||this.options.draggable,this.el,!1)},option:function(t,a){var s=this.options;if(a===void 0)return s[t];var n=ne.modifyOption(this,t,a);typeof n<"u"?s[t]=n:s[t]=a,t==="group"&&As(s)},destroy:function(){U("destroy",this);var t=this.el;t[X]=null,x(t,"mousedown",this._onTapStart),x(t,"touchstart",this._onTapStart),x(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(x(t,"dragover",this),x(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(a){a.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),ye.splice(ye.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!yt){if(U("hideClone",this),k.eventCanceled)return;E(P,"display","none"),this.options.removeCloneOnHide&&P.parentNode&&P.parentNode.removeChild(P),yt=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(yt){if(U("showClone",this),k.eventCanceled)return;b.parentNode==C&&!this.options.group.revertClone?C.insertBefore(P,b):Lt?C.insertBefore(P,Lt):C.appendChild(P),this.options.group.revertClone&&this.animate(b,P),E(P,"display",""),yt=!1}}};function ri(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function pe(e,t,a,s,n,i,r,u){var p,d=e[X],m=d.options.onMove,f;return window.CustomEvent&&!ft&&!se?p=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(p=document.createEvent("Event"),p.initEvent("move",!0,!0)),p.to=t,p.from=e,p.dragged=a,p.draggedRect=s,p.related=n||t,p.relatedRect=i||O(t),p.willInsertAfter=u,p.originalEvent=r,e.dispatchEvent(p),m&&(f=m.call(d,p,r)),f}function Be(e){e.draggable=!1}function oi(){aa=!1}function li(e,t,a){var s=O(Ht(a.el,0,a.options,!0)),n=Ls(a.el,a.options,M),i=10;return t?e.clientX<n.left-i||e.clientY<s.top&&e.clientX<s.right:e.clientY<n.top-i||e.clientY<s.bottom&&e.clientX<s.left}function ci(e,t,a){var s=O(fa(a.el,a.options.draggable)),n=Ls(a.el,a.options,M),i=10;return t?e.clientX>n.right+i||e.clientY>s.bottom&&e.clientX>s.left:e.clientY>n.bottom+i||e.clientX>s.right&&e.clientY>s.top}function di(e,t,a,s,n,i,r,u){var p=s?e.clientY:e.clientX,d=s?a.height:a.width,m=s?a.top:a.left,f=s?a.bottom:a.right,v=!1;if(!r){if(u&&me<d*n){if(!Zt&&(Qt===1?p>m+d*i/2:p<f-d*i/2)&&(Zt=!0),Zt)v=!0;else if(Qt===1?p<m+me:p>f-me)return-Qt}else if(p>m+d*(1-n)/2&&p<f-d*(1-n)/2)return ui(t)}return v=v||r,v&&(p<m+d*i/2||p>f-d*i/2)?p>m+d/2?1:-1:0}function ui(e){return Z(b)<Z(e)?1:-1}function pi(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,a=t.length,s=0;a--;)s+=t.charCodeAt(a);return s.toString(36)}function hi(e){we.length=0;for(var t=e.getElementsByTagName("input"),a=t.length;a--;){var s=t[a];s.checked&&we.push(s)}}function fe(e){return setTimeout(e,0)}function sa(e){return clearTimeout(e)}Ce&&A(document,"touchmove",function(e){(k.active||Pt)&&e.cancelable&&e.preventDefault()});k.utils={on:A,off:x,css:E,find:Es,is:function(t,a){return!!st(t,a,t,!1)},extend:Gn,throttle:ks,closest:st,toggleClass:G,clone:Ms,index:Z,nextTick:fe,cancelNextTick:sa,detectDirection:xs,getChild:Ht,expando:X};k.get=function(e){return e[X]};k.mount=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];t[0].constructor===Array&&(t=t[0]),t.forEach(function(s){if(!s.prototype||!s.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));s.utils&&(k.utils=lt(lt({},k.utils),s.utils)),ne.mount(s)})};k.create=function(e,t){return new k(e,t)};k.version=Xn;var H=[],Ut,na,ia=!1,Fe,Ue,$e,Xt;function mi(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(a){var s=a.originalEvent;this.sortable.nativeDraggable?A(document,"dragover",this._handleAutoScroll):this.options.supportPointer?A(document,"pointermove",this._handleFallbackAutoScroll):s.touches?A(document,"touchmove",this._handleFallbackAutoScroll):A(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(a){var s=a.originalEvent;!this.options.dragOverBubble&&!s.rootEl&&this._handleAutoScroll(s)},drop:function(){this.sortable.nativeDraggable?x(document,"dragover",this._handleAutoScroll):(x(document,"pointermove",this._handleFallbackAutoScroll),x(document,"touchmove",this._handleFallbackAutoScroll),x(document,"mousemove",this._handleFallbackAutoScroll)),Ua(),ve(),Jn()},nulling:function(){$e=na=Ut=ia=Xt=Fe=Ue=null,H.length=0},_handleFallbackAutoScroll:function(a){this._handleAutoScroll(a,!0)},_handleAutoScroll:function(a,s){var n=this,i=(a.touches?a.touches[0]:a).clientX,r=(a.touches?a.touches[0]:a).clientY,u=document.elementFromPoint(i,r);if($e=a,s||this.options.forceAutoScrollFallback||se||ft||Gt){Xe(a,this.options,u,s);var p=$t(u,!0);ia&&(!Xt||i!==Fe||r!==Ue)&&(Xt&&Ua(),Xt=setInterval(function(){var d=$t(document.elementFromPoint(i,r),!0);d!==p&&(p=d,ve()),Xe(a,n.options,d,s)},10),Fe=i,Ue=r)}else{if(!this.options.bubbleScroll||$t(u,!0)===ot()){ve();return}Xe(a,this.options,$t(u,!1),!1)}}},mt(e,{pluginName:"scroll",initializeByDefault:!0})}function ve(){H.forEach(function(e){clearInterval(e.pid)}),H=[]}function Ua(){clearInterval(Xt)}var Xe=ks(function(e,t,a,s){if(t.scroll){var n=(e.touches?e.touches[0]:e).clientX,i=(e.touches?e.touches[0]:e).clientY,r=t.scrollSensitivity,u=t.scrollSpeed,p=ot(),d=!1,m;na!==a&&(na=a,ve(),Ut=t.scroll,m=t.scrollFn,Ut===!0&&(Ut=$t(a,!0)));var f=0,v=Ut;do{var T=v,y=O(T),$=y.top,D=y.bottom,N=y.left,_=y.right,R=y.width,I=y.height,it=void 0,K=void 0,Et=T.scrollWidth,Nt=T.scrollHeight,W=E(T),Rt=T.scrollLeft,vt=T.scrollTop;T===p?(it=R<Et&&(W.overflowX==="auto"||W.overflowX==="scroll"||W.overflowX==="visible"),K=I<Nt&&(W.overflowY==="auto"||W.overflowY==="scroll"||W.overflowY==="visible")):(it=R<Et&&(W.overflowX==="auto"||W.overflowX==="scroll"),K=I<Nt&&(W.overflowY==="auto"||W.overflowY==="scroll"));var Vt=it&&(Math.abs(_-n)<=r&&Rt+R<Et)-(Math.abs(N-n)<=r&&!!Rt),ut=K&&(Math.abs(D-i)<=r&&vt+I<Nt)-(Math.abs($-i)<=r&&!!vt);if(!H[f])for(var kt=0;kt<=f;kt++)H[kt]||(H[kt]={});(H[f].vx!=Vt||H[f].vy!=ut||H[f].el!==T)&&(H[f].el=T,H[f].vx=Vt,H[f].vy=ut,clearInterval(H[f].pid),(Vt!=0||ut!=0)&&(d=!0,H[f].pid=setInterval((function(){s&&this.layer===0&&k.active._onTouchMove($e);var Yt=H[this.layer].vy?H[this.layer].vy*u:0,gt=H[this.layer].vx?H[this.layer].vx*u:0;typeof m=="function"&&m.call(k.dragged.parentNode[X],gt,Yt,e,$e,H[this.layer].el)!=="continue"||Ts(H[this.layer].el,gt,Yt)}).bind({layer:f}),24))),f++}while(t.bubbleScroll&&v!==p&&(v=$t(v,!1)));ia=d}},30),Ps=function(t){var a=t.originalEvent,s=t.putSortable,n=t.dragEl,i=t.activeSortable,r=t.dispatchSortableEvent,u=t.hideGhostForTarget,p=t.unhideGhostForTarget;if(a){var d=s||i;u();var m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,f=document.elementFromPoint(m.clientX,m.clientY);p(),d&&!d.el.contains(f)&&(r("spill"),this.onSpill({dragEl:n,putSortable:s}))}};function va(){}va.prototype={startIndex:null,dragStart:function(t){var a=t.oldDraggableIndex;this.startIndex=a},onSpill:function(t){var a=t.dragEl,s=t.putSortable;this.sortable.captureAnimationState(),s&&s.captureAnimationState();var n=Ht(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(a,n):this.sortable.el.appendChild(a),this.sortable.animateAll(),s&&s.animateAll()},drop:Ps};mt(va,{pluginName:"revertOnSpill"});function ga(){}ga.prototype={onSpill:function(t){var a=t.dragEl,s=t.putSortable,n=s||this.sortable;n.captureAnimationState(),a.parentNode&&a.parentNode.removeChild(a),n.animateAll()},drop:Ps};mt(ga,{pluginName:"removeOnSpill"});k.mount(new mi);k.mount(ga,va);const zs=[32,64,125,250,500,1e3,2e3,4e3,8e3,16e3],ra={flat:{name:"Ровно",gains:[0,0,0,0,0,0,0,0,0,0]},rock:{name:"Рок",gains:[5,4,2,-1,-2,0,2,3,4,5]},pop:{name:"Поп",gains:[-1,0,2,4,4,2,0,-1,-2,-3]},jazz:{name:"Джаз",gains:[4,3,1,2,-1,-1,0,2,3,4]},bass:{name:"Бас",gains:[8,7,5,2,0,-1,-2,-3,-4,-5]},vocal:{name:"Вокал",gains:[-3,-2,0,3,5,5,3,1,0,-1]},electronic:{name:"Электроника",gains:[5,4,1,0,-2,2,1,2,5,6]}},Xa="rustream.volume",Wa="rustream.eq",Ga="rustream.mode",We="rustream.playback.queue",Ja="rustream.playback.position";function Ka(e,t){try{return JSON.parse(localStorage.getItem(e))??t}catch{return t}}class fi extends EventTarget{constructor(){super(),this.audio=new Audio,this.audio.preload="auto",this.audio.crossOrigin="anonymous",this.queue=[],this.index=-1,this.shuffle=!1,this.repeat="off",this.track=null,this.playId=null,this.scrobbled=!1,this.liveMode=!1,this.mode=Ka(Ga,{shuffle:!1,repeat:"off"}),this.shuffle=!!this.mode.shuffle,this.repeat=this.mode.repeat||"off",this.volume=Number(localStorage.getItem(Xa)??80),this.audio.volume=Math.min(1,Math.max(0,this.volume/100)),this.eqState=Ka(Wa,{enabled:!0,preset:"flat",gains:[...ra.flat.gains]}),this.audioContext=null,this.filters=[],this.sourceNode=null,this._lastPositionWrite=0,this._restoredPause=!1,this._bindAudio(),window.addEventListener("pagehide",()=>this._storePosition(!0))}_bindAudio(){this.audio.addEventListener("timeupdate",()=>{this._maybeScrobble(),this._storePosition(),this._emit("time")}),this.audio.addEventListener("durationchange",()=>this._emit("time")),this.audio.addEventListener("progress",()=>this._emit("buffer")),this.audio.addEventListener("loadedmetadata",()=>this._emit("time")),this.audio.addEventListener("play",()=>{!this.playId&&this.track&&this._restoredPause&&(this._restoredPause=!1,this._beginPlay(this.track)),this._storePosition(!0),this._emit("state")}),this.audio.addEventListener("pause",()=>{this._storePosition(!0),this._emit("state")}),this.audio.addEventListener("volumechange",()=>this._emit("volume")),this.audio.addEventListener("ended",()=>this._onEnded()),this.audio.addEventListener("waiting",()=>this._emit("state")),this.audio.addEventListener("playing",()=>this._emit("state")),this.audio.addEventListener("error",()=>{if(!this.track)return;const a=this.track.source==="ytm"||String(this.track.id).startsWith("ytm-")?`YouTube не отдал поток для «${this.track.title}». Проверьте, что трек доступен, и обновите cookies в профиле.`:`Не удалось воспроизвести «${this.track.title}». Файл повреждён или недоступен.`;this.dispatchEvent(new CustomEvent("error",{detail:a}))})}_emit(t){this.dispatchEvent(new CustomEvent(t))}_initAudioGraph(){if(this.audioContext)return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.audioContext=new t,this.sourceNode=this.audioContext.createMediaElementSource(this.audio),this.filters=zs.map(s=>{const n=this.audioContext.createBiquadFilter();return n.type="peaking",n.frequency.value=s,n.Q.value=1.1,n.gain.value=0,n});let a=this.sourceNode;for(const s of this.filters)a.connect(s),a=s;a.connect(this.audioContext.destination),this._applyEq()}_ensureRunning(){var t;this._initAudioGraph(),((t=this.audioContext)==null?void 0:t.state)==="suspended"&&this.audioContext.resume().catch(()=>{})}_applyEq(){this.filters.length&&this.filters.forEach((t,a)=>{t.gain.value=this.eqState.enabled&&this.eqState.gains[a]||0})}setEqEnabled(t){this.eqState.enabled=t,this._persistEq(),this._applyEq(),this._emit("eq")}setEqGain(t,a){this.eqState.gains[t]=Number(a),this.eqState.preset="custom",this._persistEq(),this._applyEq(),this._emit("eq")}applyEqPreset(t){const a=ra[t];a&&(this.eqState.preset=t,this.eqState.gains=[...a.gains],this._persistEq(),this._applyEq(),this._emit("eq"))}resetEq(){this.applyEqPreset("flat")}_persistEq(){localStorage.setItem(Wa,JSON.stringify(this.eqState))}async playTracks(t,a=0,{shuffle:s=!1}={}){t!=null&&t.length&&(this._finalizePlay(!1),this.queue=[...t],s&&(this.shuffle=!0,this._persistMode()),this.index=Math.min(Math.max(0,a),this.queue.length-1),this._storeQueue(),await this._load(this.queue[this.index],!0))}enqueue(t){return t!=null&&t.length?(this.queue.push(...t),this._storeQueue(),this._emit("queue"),t.length):0}async playAt(t){t<0||t>=this.queue.length||(this.index=t,this._storeQueue(),await this._load(this.queue[t],!0))}async _load(t,a){if(t&&(this._restoredPause=!1,this._finalizePlay(!1),this.track=t,this.audio.src=Ie(t.id),this._beginPlay(t),this._updateMediaSession(t),this.dispatchEvent(new CustomEvent("track",{detail:t})),a)){this._ensureRunning();try{await this.audio.play()}catch{}}}async toggle(){this.track&&(this._ensureRunning(),this.audio.paused?await this.audio.play().catch(()=>{}):this.audio.pause())}pause(){this.audio.pause()}async next(t=!1){if(!this.queue.length)return;if(t&&this.repeat==="one"){this.audio.currentTime=0,await this.audio.play().catch(()=>{});return}let a;if(this.shuffle?a=this.queue.length>1?this._randomIndex():this.index:a=this.index+1,a>=this.queue.length)if(this.repeat==="all")a=0;else{this.audio.pause();return}await this.playAt(a)}async previous(){if(!this.queue.length)return;if(this.audio.currentTime>3){this.audio.currentTime=0;return}const t=this.index>0?this.index-1:this.queue.length-1;await this.playAt(t)}moveInQueue(t,a){if(t===a||t<0||a<0||t>=this.queue.length||a>=this.queue.length)return;const[s]=this.queue.splice(t,1);this.queue.splice(a,0,s),this.index===t?this.index=a:t<this.index&&a>=this.index?this.index--:t>this.index&&a<=this.index&&this.index++,this._storeQueue(),this._emit("queue")}_randomIndex(){if(this.queue.length<=1)return this.index;let t=this.index;for(;t===this.index;)t=Math.floor(Math.random()*this.queue.length);return t}async _onEnded(){if(this._finalizePlay(!0),this.repeat==="one"){this.audio.currentTime=0,this._beginPlay(this.track),await this.audio.play().catch(()=>{});return}if(this.index>=this.queue.length-1&&this.repeat==="off"&&!this.shuffle){this._emit("state"),this._emit("queueend");return}await this.next(!0)}async _beginPlay(t){this.playId=null,this.scrobbled=!1;try{const a=await kn(t.id);this.playId=(a==null?void 0:a.playId)||null}catch{}}_maybeScrobble(){if(!this.playId||this.scrobbled)return;const t=this.audio.duration;!Number.isFinite(t)||t<30||(this.audio.currentTime>=t/2||this.audio.currentTime>=240)&&(this.scrobbled=!0,Ha(this.playId,Math.round(this.audio.currentTime*1e3),!0).catch(()=>{}))}_finalizePlay(t){if(!this.playId)return;const a=this.playId;this.playId=null,Ha(a,Math.round((this.audio.currentTime||0)*1e3),t).catch(()=>{})}appendTracks(t){t!=null&&t.length&&(this.queue.push(...t),this._storeQueue())}toggleShuffle(){this.shuffle=!this.shuffle,this._persistMode(),this._emit("mode")}cycleRepeat(){const t=["off","all","one"];this.repeat=t[(t.indexOf(this.repeat)+1)%t.length],this._persistMode(),this._emit("mode")}_persistMode(){localStorage.setItem(Ga,JSON.stringify({shuffle:this.shuffle,repeat:this.repeat}))}seekTo(t){const a=this.audio.duration;!Number.isFinite(a)||a<=0||(this.audio.currentTime=Math.min(100,Math.max(0,t))/100*a,this._emit("time"))}seekToSeconds(t){const a=this.audio.duration;!Number.isFinite(a)||a<=0||(this.audio.currentTime=Math.min(a,Math.max(0,t)),this._emit("time"))}removeAt(t){t<0||t>=this.queue.length||t===this.index||(this.queue.splice(t,1),t<this.index&&(this.index-=1),this._storeQueue())}seekBy(t){Number.isFinite(this.audio.duration)&&(this.audio.currentTime=Math.min(this.audio.duration,Math.max(0,this.audio.currentTime+t)),this._emit("time"))}setVolume(t){this.volume=Number(t),this.audio.volume=Math.min(1,Math.max(0,this.volume/100)),this.volume>0&&(this.audio.muted=!1),localStorage.setItem(Xa,String(this.volume))}toggleMute(){this.audio.muted=!this.audio.muted,this._emit("volume")}get currentTime(){return this.audio.currentTime||0}get duration(){return Number.isFinite(this.audio.duration)?this.audio.duration:0}get paused(){return this.audio.paused}get volumePercent(){return this.audio.muted?0:Math.round(this.audio.volume*100)}get buffered(){const t=this.duration;if(!t)return{end:0,percent:0,ahead:0};const a=this.audio.currentTime;let s=0;for(let n=0;n<this.audio.buffered.length;n+=1)this.audio.buffered.start(n)<=a+.5&&(s=Math.max(s,this.audio.buffered.end(n)));return{end:s,percent:Math.min(100,s/t*100),ahead:Math.max(0,s-a)}}estimatedBufferedBytes(){var a;const t=((a=this.track)==null?void 0:a.bitRate)||0;return t?t*1e3*this.buffered.ahead/8:0}_storeQueue(){try{const t={queue:this.queue,index:this.index,liveMode:!!this.liveMode,updatedAt:Date.now()};localStorage.setItem(We,JSON.stringify(t))}catch{}}setLiveMode(t){this.liveMode=!!t,this._storeQueue()}_storePosition(t=!1){if(!this.track)return;const a=Date.now();if(!(!t&&a-this._lastPositionWrite<2e3)){this._lastPositionWrite=a;try{localStorage.setItem(Ja,JSON.stringify({trackId:this.track.id,position:this.currentTime||0,paused:this.audio.paused,updatedAt:a}))}catch{}}}snapshotState(){return{queue:this.queue,index:this.index,liveMode:this.liveMode,position:Math.max(0,Math.floor(Number(this.audio.currentTime)||0)),updatedAt:Date.now()}}localUpdatedAt(){try{const t=JSON.parse(localStorage.getItem(We));return Number(t==null?void 0:t.updatedAt)||0}catch{return 0}}applyRemote(t){var s;if(!((s=t==null?void 0:t.queue)!=null&&s.length)||(this.queue=t.queue,this.index=Math.min(Math.max(0,Number(t.index)||0),this.queue.length-1),this.liveMode=!!t.liveMode,this.track=this.queue[this.index],!this.track))return null;this._restoredPause=!0,this.audio.src=Ie(this.track.id),this._updateMediaSession(this.track),this.dispatchEvent(new CustomEvent("track",{detail:this.track}));const a=Number(t.position)||0;if(a>1){const n=()=>{const i=this.audio.duration;(!Number.isFinite(i)||a<i-3)&&(this.audio.currentTime=a,this._emit("time"))};this.audio.readyState>=1?n():this.audio.addEventListener("loadedmetadata",n,{once:!0})}return this._storeQueue(),{track:this.track,liveMode:this.liveMode}}restore(){var s;let t=null;try{t=JSON.parse(localStorage.getItem(We))}catch{t=null}if(!((s=t==null?void 0:t.queue)!=null&&s.length)||Date.now()-(t.updatedAt||0)>1e3*60*60*24*7)return null;let a=null;try{a=JSON.parse(localStorage.getItem(Ja))}catch{a=null}if(this.queue=t.queue,this.index=Math.min(Math.max(0,Number(t.index)||0),this.queue.length-1),this.liveMode=!!t.liveMode,this.track=this.queue[this.index],!this.track)return null;if(this._restoredPause=!0,this.audio.src=Ie(this.track.id),this._updateMediaSession(this.track),this.dispatchEvent(new CustomEvent("track",{detail:this.track})),(a==null?void 0:a.trackId)===this.track.id&&Number(a.position)>1){const n=()=>{const i=this.audio.duration;Number.isFinite(i)&&a.position<i-3&&(this.audio.currentTime=a.position,this._emit("time"))};this.audio.readyState>=1?n():this.audio.addEventListener("loadedmetadata",n,{once:!0})}return{track:this.track,liveMode:this.liveMode}}clearRestored(){this._restoredPause=!1}_updateMediaSession(t){"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:t.title||"",artist:t.artist||"",album:t.album||"",artwork:t.coverArt?[{src:wt(t.coverArt,512),sizes:"512x512",type:"image/jpeg"}]:[]}),navigator.mediaSession.setActionHandler("play",()=>this.toggle()),navigator.mediaSession.setActionHandler("pause",()=>this.toggle()),navigator.mediaSession.setActionHandler("previoustrack",()=>this.previous()),navigator.mediaSession.setActionHandler("nexttrack",()=>this.next()))}}function pt(e){if(!Number.isFinite(e)||e<0)return"0:00";const t=Math.floor(e/60),a=Math.floor(e%60);return`${t}:${String(a).padStart(2,"0")}`}function qs(e){const t=Math.round(e/6e4),a=Math.floor(t/60);return a>0?`${a} ч ${t%60} мин`:`${t} мин`}function Se(e){if(!e)return"0 Б";const t=["Б","КБ","МБ","ГБ","ТБ"];let a=e,s=0;for(;a>=1024&&s<t.length-1;)a/=1024,s+=1;return`${a>=10||s===0?Math.round(a):a.toFixed(1)} ${t[s]}`}const h=new fi,vi=document.getElementById("app"),o={currentTracks:[],favorites:new Set,dislikes:new Set,favoriteAlbums:new Set,theme:"violet",lyrics:null,lyricsTrackId:null,lyricsRefresh:!1,lyricsActiveKey:null,npTab:"lyrics",npOpen:!1,allTracks:null,artists:null,albums:null,stats:null,playlists:null,me:null,meStats:null,authConfig:null,lastfmConfig:null,liveMode:!1,liveMixes:[],renderSeq:0},S={artists:null,albums:null,tracks:null,stats:null,playlists:null,favorites:null,ratings:null,recent:null,meStats:null,liveMixes:null};vi.innerHTML=`
  <div class="ambient" aria-hidden="true">
    <span class="blob blob-a"></span>
    <span class="blob blob-b"></span>
    <span class="blob blob-c"></span>
    <span class="grain"></span>
  </div>

  <header class="topbar">
    <a class="brand" href="#/home" aria-label="Rustream — на главную">
      <span class="brand-mark">${l("wave")}</span>
      <span class="brand-name">Rustream</span>
    </a>

    <label class="searchbox">
      ${l("search")}
      <input id="search-input" type="search" placeholder="Артисты, альбомы, треки…" autocomplete="off" />
      <kbd>Ctrl K</kbd>
    </label>

    <div class="topbar-actions">
      <button class="icon-btn" id="rescan-btn" title="Пересканировать библиотеку">${l("refresh")}</button>
      <button class="now-playing-pill" id="np-pill" title="Открыть плеер">
        ${l("wave")}<span>Сейчас играет</span>
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
        <a href="#/home" data-nav="home" class="nav-item"><span class="nav-icon">${l("home")}</span><span class="nav-label">Главная</span></a>
        <a href="#/search" data-nav="search" class="nav-item"><span class="nav-icon">${l("search")}</span><span class="nav-label">Поиск</span></a>
        <a href="#/live" data-nav="live" class="nav-item"><span class="nav-icon">${l("radio")}</span><span class="nav-label">Live</span></a>
        <a href="#/ytm" data-nav="ytm" class="nav-item"><span class="nav-icon">${l("ytm")}</span><span class="nav-label">YouTube Music</span></a>
      </div>
      <div class="nav-group">
        <div class="nav-group-label">Медиатека</div>
        <a href="#/library" data-nav="library" class="nav-item"><span class="nav-icon">${l("album")}</span><span class="nav-label">Обзор</span></a>
        <a href="#/artists" data-nav="artists" class="nav-item"><span class="nav-icon">${l("person")}</span><span class="nav-label">Артисты</span></a>
        <a href="#/albums" data-nav="albums" class="nav-item"><span class="nav-icon">${l("album")}</span><span class="nav-label">Альбомы</span></a>
        <a href="#/tracks" data-nav="tracks" class="nav-item"><span class="nav-icon">${l("music")}</span><span class="nav-label">Треки</span></a>
        <a href="#/playlists" data-nav="playlists" class="nav-item"><span class="nav-icon">${l("playlist")}</span><span class="nav-label">Плейлисты</span></a>
        <a href="#/favorites" data-nav="favorites" class="nav-item"><span class="nav-icon">${l("heart")}</span><span class="nav-label">Избранное</span></a>
      </div>
      <div class="nav-group">
        <div class="nav-group-label">Вы</div>
        <a href="#/stats" data-nav="stats" class="nav-item"><span class="nav-icon">${l("chart")}</span><span class="nav-label">Статистика</span></a>
        <a href="#/profile" data-nav="profile" class="nav-item"><span class="nav-icon">${l("person")}</span><span class="nav-label">Профиль</span></a>
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
        <span class="cover-fallback">${l("music")}</span>
        <img id="pb-cover-img" alt="" />
        <span class="pb-cover-overlay">${l("play")}</span>
      </button>
      <div class="pb-meta" data-action="nowplaying" title="Открыть плеер">
        <div class="pb-title" id="pb-title">Ничего не играет</div>
        <div class="pb-artist" id="pb-artist">Выберите трек</div>
      </div>
      <button class="icon-btn like-btn" id="pb-like" data-action="like-current" title="В избранное">${l("heartOutline")}</button>
      <button class="icon-btn dislike-btn" id="pb-dislike" data-action="dislike-current" title="Не нравится">${l("thumbDown")}</button>
    </div>

    <div class="pb-center">
      <div class="pb-controls">
        <button class="icon-btn" id="shuffle-btn" data-action="shuffle" title="Перемешать">${l("shuffle")}</button>
        <button class="icon-btn" data-action="prev" title="Предыдущий">${l("prev")}</button>
        <button class="play-btn" id="play-btn" data-action="toggle" title="Играть">${l("play")}</button>
        <button class="icon-btn" data-action="next" title="Следующий">${l("next")}</button>
        <button class="icon-btn" id="repeat-btn" data-action="repeat" title="Повтор">${l("repeat")}</button>
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
        <span class="quality-chip ytm-chip" id="pb-source" hidden title="Источник: YouTube Music">YouTube</span>
        <span class="quality-text" id="quality-detail"></span>
      </div>
      <button class="icon-btn" id="lyrics-btn" data-action="open-lyrics" title="Текст песни">${l("lyrics")}</button>
      <button class="icon-btn" id="eq-btn" data-action="open-eq" title="Эквалайзер">${l("equalizer")}</button>
      <button class="icon-btn" id="queue-btn" data-action="open-queue" title="Очередь">${l("queue")}</button>
      <div class="volume">
        <button class="icon-btn" id="volume-btn" data-action="mute" title="Звук">${l("volumeUp")}</button>
        <input type="range" id="volume" min="0" max="100" value="${h.volumePercent}" aria-label="Громкость" />
      </div>
    </div>
  </footer>

  <nav class="tabbar" aria-label="Основное меню">
    <a href="#/home" data-tab="home" class="tab-item"><span class="tab-icon">${l("home")}</span><span class="tab-label">Главная</span></a>
    <a href="#/search" data-tab="search" class="tab-item"><span class="tab-icon">${l("search")}</span><span class="tab-label">Поиск</span></a>
    <a href="#/library" data-tab="library" class="tab-item"><span class="tab-icon">${l("album")}</span><span class="tab-label">Медиатека</span></a>
    <a href="#/profile" data-tab="profile" class="tab-item"><span class="tab-icon">${l("person")}</span><span class="tab-label">Профиль</span></a>
  </nav>

  <div class="np" id="np" hidden>
    <div class="np-backdrop" data-action="close-np"></div>
    <div class="np-sheet" role="dialog" aria-modal="true" aria-label="Плеер">
      <div class="np-grabber"></div>
      <div class="np-head">
        <button class="icon-btn" data-action="close-np" title="Свернуть">${l("close")}</button>
        <div class="np-tabs">
          <button class="np-tab" data-np-tab="lyrics">${l("lyrics")}<span>Текст</span></button>
          <button class="np-tab" data-np-tab="eq">${l("equalizer")}<span>Эквалайзер</span></button>
          <button class="np-tab" data-np-tab="queue">${l("queue")}<span>Очередь</span></button>
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
          <span class="icon" id="np-volume-icon">${l("volumeUp")}</span>
          <input id="np-volume" type="range" min="0" max="100" value="${h.volumePercent}" aria-label="Громкость" />
        </div>
      </div>
    </div>
  </div>

  <div id="auth-screen" class="auth-screen" hidden>
    <div class="auth-card">
      <div class="auth-brand">
        <span class="brand-mark">${l("wave")}</span>
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
              <button class="reveal-btn" type="button" data-action="toggle-password" data-target="login-password" aria-label="Показать пароль">${l("eye")}</button>
            </span>
          </label>
          <button class="btn primary full" type="submit" id="login-submit">${l("wave")} Войти</button>
          <p class="auth-error" id="login-error" role="alert"></p>
        </form>
        <button class="text-link auth-switch" type="button" id="auth-toggle-register">${l("ticket")} У меня есть приглашение</button>
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
              <button class="reveal-btn" type="button" data-action="toggle-password" data-target="register-password" aria-label="Показать пароль">${l("eye")}</button>
            </span>
          </label>
          <button class="btn primary full" type="submit" id="register-submit">${l("sparkle")} Зарегистрироваться</button>
          <p class="auth-error" id="register-error" role="alert"></p>
        </form>
        <button class="text-link auth-switch" type="button" id="auth-toggle-login">${l("back")} У меня уже есть аккаунт</button>
      </div>
    </div>
  </div>

  <div id="modal-root"></div>
  <div id="toast" class="toast" role="status" aria-live="polite"></div>
`;const c=(e,t=document)=>t.querySelector(e),et=(e,t=document)=>[...t.querySelectorAll(e)];function g(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ba(e){const t=String(e||"?").trim().split(/\s+/).filter(Boolean);return t.length?t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+t[1][0]).toUpperCase():"?"}function te(){var e,t;return((e=o.me)==null?void 0:e.displayName)||((t=o.me)==null?void 0:t.username)||"Аккаунт"}function Is(e){return(e==null?void 0:e.status)===401}function Ot(e){return Is(e)?(_t(),!0):!1}function dt(e,{size:t=400,alt:a="",className:s=""}={}){return`<span class="cover ${s}">
    <span class="cover-fallback">${l("music")}</span>
    ${e?`<img src="${wt(e,t)}" alt="${g(a)}" loading="lazy" decoding="async" />`:""}
  </span>`}function w(e,t="info"){const a=c("#toast");a.textContent=e,a.className=`toast show ${t}`,clearTimeout(w._timer),w._timer=setTimeout(()=>{a.className="toast"},t==="error"?6e3:3200)}function F(){c("#view").innerHTML=`
    <div class="page">
      <div class="skeleton skeleton-title"></div>
      <div class="grid cards">
        ${Array.from({length:8}).map(()=>`<div class="card skeleton-card">
              <div class="skeleton skeleton-cover"></div>
              <div class="skeleton skeleton-line"></div>
              <div class="skeleton skeleton-line short"></div>
            </div>`).join("")}
      </div>
    </div>`}function gi(e){c("#view").innerHTML=`
    <div class="page">
      <div class="empty-state">
        <span class="empty-icon">${l("wave")}</span>
        <h2>Что-то пошло не так</h2>
        <p>${g(e)}</p>
        <button class="btn tonal" data-action="reload">Попробовать снова</button>
      </div>
    </div>`}function St(e,t,{actions:a="",eyebrow:s=""}={}){return`<header class="page-head">
    <div>
      ${s?`<div class="eyebrow">${g(s)}</div>`:""}
      <h1>${g(e)}</h1>
      ${t?`<p class="muted">${t}</p>`:""}
    </div>
    ${a?`<div class="page-actions">${a}</div>`:""}
  </header>`}function ie(e){return`<article class="card" data-action="open" data-href="#/album/${e.id}" tabindex="0">
    <div class="card-cover">${dt(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${g(e.name)}</div>
      <div class="card-sub">${g(e.artist||"Неизвестный артист")}${e.year?` · ${e.year}`:""}</div>
    </div>
    <button class="card-play" data-action="play-album" data-id="${e.id}" title="Слушать альбом">${l("play")}</button>
  </article>`}function ya(e){return`<article class="card artist-card" data-action="open" data-href="#/artist/${e.id}" tabindex="0">
    <div class="card-cover round">${dt(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${g(e.name)}</div>
      <div class="card-sub">${e.albumCount??0} ${V(e.albumCount??0,"альбом","альбома","альбомов")}</div>
    </div>
  </article>`}function V(e,t,a,s){const n=e%10,i=e%100;return n===1&&i!==11?t:n>=2&&n<=4&&(i<12||i>14)?a:s}function wa(e){return(e==null?void 0:e.source)==="ytm"||String((e==null?void 0:e.id)||"").startsWith("ytm-")}function Hs(e){return wa(e)?'<span class="track-badge ytm" title="Источник: YouTube Music">YT</span>':`<span class="track-badge">${g(((e==null?void 0:e.suffix)||"flac").toUpperCase())}</span>`}function bi(e,t,{showAlbum:a=!0,showCover:s=!1,playlistId:n=null,rowAction:i="play-row",rowList:r=null}={}){var m;const u=((m=h.track)==null?void 0:m.id)===e.id,p=o.favorites.has(e.id),d=e.track&&e.track>0?e.track:t+1;return`<div class="track-row ${u?"playing":""} ${s?"has-cover":""}" data-action="${i}" data-index="${t}" data-track-id="${g(e.id)}" ${r?`data-list="${r}"`:""} tabindex="0">
    <div class="track-index">
      <span class="track-num">${d}</span>
      <span class="track-eq"><i></i><i></i><i></i></span>
    </div>
    ${s?`<span class="track-cover">${dt(e.coverArt||e.albumId,{size:80})}</span>`:""}
    <div class="track-main">
      <div class="track-title">${g(e.title)}</div>
      <div class="track-sub">${g(e.artist||"")}${a&&e.album?` · ${g(e.album)}`:""}</div>
    </div>
    ${Hs(e)}
    <span class="track-duration">${pt(e.duration)}</span>
    <button class="icon-btn row-btn like ${p?"active":""}" data-action="like" data-id="${e.id}" title="В избранное">${l(p?"heart":"heartOutline")}</button>
    <button class="icon-btn row-btn dislike ${o.dislikes.has(e.id)?"active":""}" data-action="dislike" data-id="${e.id}" title="Не нравится">${l("thumbDown")}</button>
    ${n?`<button class="icon-btn row-btn" data-action="remove-from-playlist" data-playlist="${n}" data-index="${t}" title="Убрать из плейлиста">${l("delete")}</button>`:`<button class="icon-btn row-btn" data-action="add-to-playlist" data-id="${e.id}" title="Добавить в плейлист">${l("add")}</button>`}
  </div>`}function nt(e,t={}){return e.length?`<div class="track-list">${e.map((a,s)=>bi(a,s,t)).join("")}</div>`:'<div class="empty-inline">Треков пока нет</div>'}const oa="#/home",yi="Rustream — твоя музыка";function wi(){const e=location.hash.replace(/^#/,"")||"/home",[t,a=""]=e.split("?");return{parts:t.split("/").filter(Boolean),params:new URLSearchParams(a)}}const $i={artist:"artists",album:"albums",playlist:"playlists"},Si=new Set(["library","artists","albums","tracks","playlists","favorites","stats"]),Qa={index:"home",yt:"ytm",favourite:"favorites",song:"tracks"},Ei={home:"Главная",live:"Live",search:"Поиск",library:"Медиатека",artists:"Артисты",albums:"Альбомы",tracks:"Треки",playlists:"Плейлисты",favorites:"Избранное",stats:"Статистика",profile:"Профиль",ytm:"YouTube Music"},Za={home:Ai,live:Ci,stats:Pi,artists:zi,albums:Ii,tracks:Oi,playlists:Ni,favorites:Yi,library:or,profile:cr,ytm:dr},Ge={artist:qi,album:Hi,playlist:Vi},ki={artist:"Артист",album:"Альбом",playlist:"Плейлист"};function Je(e){location.hash!==e&&history.replaceState(null,"",e)}function Os(e){const t=$i[e]||e;et(".nav-item").forEach(a=>{a.classList.toggle("active",a.dataset.nav===t)}),et(".tab-item").forEach(a=>{const s=a.dataset.tab,n=s===t||s==="library"&&Si.has(t)||s==="search"&&t==="search";a.classList.toggle("active",n)})}function Ti(e){const t=ki[e]||Ei[e];document.title=t?`${t} — Rustream`:yi}function ts(e=""){Os(""),document.title="Страница не найдена — Rustream",c("#view").innerHTML=`
    <div class="page">
      <div class="empty-state notfound">
        <span class="empty-icon">${l("search")}</span>
        <div class="eyebrow">404</div>
        <h2>Такой страницы нет</h2>
        <p>${g(e||"Возможно, ссылка устарела или в адресе опечатка.")}</p>
        <div class="notfound-links">
          <a class="btn primary" href="${oa}">${l("home")} На главную</a>
          <a class="btn tonal" href="#/library">${l("album")} Медиатека</a>
          <a class="btn glass" href="#/search">${l("search")} Поиск</a>
        </div>
      </div>
    </div>`}async function q(){const{parts:e,params:t}=wi();let a=e[0]||"home";if(Qa[a]&&(a=Qa[a],Je(`#/${a}`)),a==="register")if(o.me)Je(oa),a="home";else{document.title="Регистрация — Rustream",La(t.get("invite")||"");return}if(a==="login")if(o.me)Je(oa),a="home";else{document.title="Вход — Rustream",_t();return}if(!o.me){_t();return}if(e.length>2||Ge[a]&&!e[1]){ts(e.length>2?"Лишние части в адресе страницы.":"В ссылке не указан идентификатор.");return}const s=++o.renderSeq;Os(a),Ti(a),c("#view").scrollTop=0;try{Za[a]?await Za[a](s,t):a==="search"?await ji(s,t.get("q")||""):Ge[a]?await Ge[a](s,e[1]):ts(`Раздел «${a}» не существует.`)}catch(n){if(console.error(n),Ot(n))return;s===o.renderSeq&&gi(n.message||"Ошибка загрузки")}}async function Mi(){return S.stats||(S.stats=await bn()),S.stats}async function Ns(){return S.artists||(S.artists=await dn()),S.artists}async function Li(){return S.albums||(S.albums=await cs("alphabeticalByArtist",500)),S.albums}async function $a(){if(!S.tracks){const e=await un(500);e.sort((t,a)=>`${t.artist} ${t.album} ${String(t.track).padStart(3,"0")}`.localeCompare(`${a.artist} ${a.album} ${String(a.track).padStart(3,"0")}`,"ru")),S.tracks=e}return S.tracks}async function Rs(){if(S.favorites||(S.favorites=await gn()),o.favorites=new Set((S.favorites.song||[]).map(e=>e.id)),o.favoriteAlbums=new Set((S.favorites.album||[]).map(e=>e.id)),!S.ratings)try{S.ratings=await $n()}catch{S.ratings={liked:[],disliked:[]}}return o.dislikes=new Set((S.ratings.disliked||[]).filter(e=>!o.favorites.has(e))),S.favorites}async function Sa(){return S.meStats||(S.meStats=await hs()),o.meStats=S.meStats,S.meStats}async function _i(){return S.liveMixes||(S.liveMixes=await Tn()),o.liveMixes=S.liveMixes,S.liveMixes}async function xi(){S.artists=null,S.albums=null,S.tracks=null,S.stats=null,S.recent=null,S.meStats=null,S.liveMixes=null,w("Библиотека обновлена"),q()}async function Ai(e){var f;F();const[t,a,s,n]=await Promise.all([Sa(),S.recent?Promise.resolve(S.recent):cs("newest",12),Ns(),$a()]);if(e!==o.renderSeq)return;S.recent=a;const i=o.ytmStatus||await De().catch(()=>null);o.ytmStatus=i;let r=[];if(i!=null&&i.connected&&(r=await ys(10).catch(()=>[])),e!==o.renderSeq)return;const u=[...n].sort(()=>Math.random()-.5).slice(0,6),p=(t.recent||[]).slice(0,6);o.lists={...o.lists||{},quick:u,recent:p},o.ytmLists={...o.ytmLists||{},history:r},o.currentTracks=n;const d=h.track,m=h.queue.length?h.queue:null;c("#view").innerHTML=`
    <div class="page home quick-home">
      <header class="page-head home-head">
        <div>
          <span class="eyebrow"><span class="live-dot"></span>${g(Di())}, ${g(te())}</span>
          <h1>Что послушаем?</h1>
        </div>
        <div class="head-actions">
          <button class="btn primary" data-action="play-all">${l("play")} Слушать всё</button>
          <button class="btn glass" data-action="shuffle-all">${l("shuffle")} Перемешать</button>
        </div>
      </header>

      ${d?`<section class="continue-card">
              <span class="continue-cover">${dt(d.coverArt||d.albumId,{size:120,alt:d.title})}</span>
              <span class="continue-main">
                <span class="eyebrow">Продолжить слушать</span>
                <strong>${g(d.title)}</strong>
                <small>${g(d.artist||"")}${m?` · ${h.index+1} из ${h.queue.length}`:""}</small>
              </span>
              <button class="btn primary" data-action="toggle">${l(h.paused?"play":"pause")} ${h.paused?"Продолжить":"Пауза"}</button>
              <a class="btn ghost" href="#/live">${l("queue")} Очередь</a>
            </section>`:""}

      ${u.length?`<section class="section">
              <div class="section-head">
                <div>
                  <h2>Быстрый выбор</h2>
                  <p class="muted">Случайные треки из вашей библиотеки</p>
                </div>
                <button class="text-link" data-action="shuffle-library">Перемешать всё ${l("next")}</button>
              </div>
              ${nt(u,{showCover:!0,rowAction:"play-list-row",rowList:"quick"})}
            </section>`:""}

      ${p.length?`<section class="section">
              <div class="section-head">
                <div>
                  <h2>Недавно слушали</h2>
                  <p class="muted">Продолжите с любого места</p>
                </div>
                <a class="text-link" href="#/stats">История ${l("next")}</a>
              </div>
              ${nt(p,{showCover:!0,rowAction:"play-list-row",rowList:"recent"})}
            </section>`:""}

      <section class="section">
        <div class="section-head">
          <div>
            <h2>Недавно добавленные</h2>
            <p class="muted">Свежие поступления в библиотеке</p>
          </div>
          <a class="text-link" href="#/albums">Все альбомы ${l("next")}</a>
        </div>
        <div class="grid cards">${a.slice(0,8).map(ie).join("")}</div>
      </section>

      ${r.length?`<section class="section">
              <div class="section-head">
                <div>
                  <h2>Из YouTube Music</h2>
                  <p class="muted">Внешний источник — помечено меткой <span class="track-badge ytm inline">YT</span></p>
                </div>
                <a class="text-link" href="#/ytm">Открыть YouTube ${l("next")}</a>
              </div>
              ${nt(r.slice(0,6),{showCover:!0,rowAction:"play-ytm-row",rowList:"history"})}
            </section>`:""}

      <section class="section">
        <div class="section-head">
          <div>
            <h2>Любимые артисты</h2>
            <p class="muted">${(f=t.topArtists)!=null&&f[0]?`Чаще всего вы слушаете ${g(t.topArtists[0].name)}`:"Начните слушать — и здесь появятся ваши артисты"}</p>
          </div>
          <a class="text-link" href="#/artists">Все артисты ${l("next")}</a>
        </div>
        <div class="grid cards artists-row">${s.slice(0,8).map(ya).join("")}</div>
      </section>

      <section class="section home-cta">
        <div class="cta-panel">
          <div>
            <div class="eyebrow">${l("chart")} Ваша статистика</div>
            <h2>${t.plays||0} ${V(t.plays||0,"прослушивание","прослушивания","прослушиваний")}</h2>
            <p class="muted">Часы, любимые артисты, лайки и дизлайки — на отдельной странице.</p>
          </div>
          <a class="btn glass" href="#/stats">${l("chart")} Открыть статистику</a>
        </div>
      </section>
    </div>`}function Di(){const e=new Date().getHours();return e<6?"Доброй ночи":e<12?"Доброе утро":e<18?"Добрый день":"Добрый вечер"}async function Ci(e){F();const[t,a]=await Promise.all([_i(),Sa()]);e===o.renderSeq&&(c("#view").innerHTML=`
    <div class="page live-page">
      ${St("Live","Персональный поток: избранное, любимые артисты и новые находки",{eyebrow:"Автоматический эфир",actions:`<button class="btn primary" data-action="start-live">${l("radio")} ${o.liveMode?"Перезапустить":"Включить Live"}</button>`})}

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
          ${t.map((s,n)=>{var i,r,u;return`<article class="mix-card ${(i=s.tracks)!=null&&i.length?"":"empty"}" data-action="play-mix" data-index="${n}" tabindex="0">
                <div class="mix-icon">${l(n===0?"heart":n===1?"album":"radio")}</div>
                <div class="mix-body">
                  <h3>${g(s.title)}</h3>
                  <p>${g(s.subtitle)}</p>
                  <span class="muted">${((r=s.tracks)==null?void 0:r.length)||0} ${V(((u=s.tracks)==null?void 0:u.length)||0,"трек","трека","треков")}</span>
                </div>
                <span class="mix-play">${l("play")}</span>
              </article>`}).join("")}
        </div>
      </section>

    </div>`)}async function Pi(e){var d,m,f;F();const t=await hs().catch(()=>o.meStats||{});if(e!==o.renderSeq)return;o.meStats=t,S.meStats=t;const a=((t.listenedMs||0)/36e5).toFixed(1),s=Math.round((t.listenedMs||0)/6e4),n=Math.max(1,...(t.byDay||[]).map(v=>v.ms)),i=t.recent||[];o.currentTracks=i;const r=[...t.byDay||[]].slice(-14),u=t.likes||0,p=t.dislikes||0;c("#view").innerHTML=`
    <div class="page stats-page">
      ${St("Статистика","Только ваш аккаунт: время, артисты, жанры и оценки",{eyebrow:"Личные данные",actions:`<a class="btn glass" href="#/favorites">${l("heart")} Избранное</a>`})}

      <section class="stat-cards">
        <div class="stat-card"><span class="stat-icon">${l("clock")}</span><strong>${a} ч</strong><span>${s} минут музыки</span></div>
        <div class="stat-card"><span class="stat-icon">${l("play")}</span><strong>${t.plays||0}</strong><span>прослушиваний</span></div>
        <div class="stat-card"><span class="stat-icon like">${l("heart")}</span><strong>${u}</strong><span>лайков</span></div>
        <div class="stat-card"><span class="stat-icon dislike">${l("thumbDown")}</span><strong>${p}</strong><span>дизлайков</span></div>
      </section>

      <section class="section stats-grid">
        <div class="stats-panel">
          <div class="section-head"><h2>Последние 14 дней</h2><span class="muted">${a} ч всего</span></div>
          ${r.length?`<div class="day-chart">${r.map(v=>{const y=new Date(`${v.day}T00:00:00`).toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit"}),$=Math.max(4,Math.round(v.ms/n*100));return`<div class="day-col" title="${y}: ${Math.round(v.ms/6e4)} мин">
                      <span class="day-bar" style="height:${$}%"></span>
                      <span class="day-label">${y}</span>
                    </div>`}).join("")}</div>`:'<div class="empty-inline">Пока нет прослушиваний за две недели.</div>'}
        </div>
        <div class="stats-panel">
          <div class="section-head"><h2>Жанры</h2></div>
          ${(d=t.topGenres)!=null&&d.length?`<div class="genre-list">${t.topGenres.map(v=>{var T;return`<div class="genre-row">
                      <span class="genre-name">${g(v.name)}</span>
                      <span class="genre-bar"><i style="width:${Math.min(100,v.plays/(((T=t.topGenres[0])==null?void 0:T.plays)||1)*100)}%"></i></span>
                      <span class="genre-plays">${v.plays}</span>
                    </div>`}).join("")}</div>`:'<div class="empty-inline">Жанры появятся после прослушиваний.</div>'}
        </div>
      </section>

      <section class="section stats-grid">
        <div class="stats-panel">
          <div class="section-head"><h2>Любимые артисты</h2></div>
          ${(m=t.topArtists)!=null&&m.length?`<div class="rank-list">${t.topArtists.map((v,T)=>`<div class="rank-row">
                      <span class="rank-num">${T+1}</span>
                      <span class="rank-main"><strong>${g(v.name)}</strong><small>${v.plays} ${V(v.plays,"прослушивание","прослушивания","прослушиваний")}</small></span>
                    </div>`).join("")}</div>`:'<div class="empty-inline">Пока нет данных.</div>'}
        </div>
        <div class="stats-panel">
          <div class="section-head"><h2>Топ треков</h2></div>
          ${(f=t.topTracks)!=null&&f.length?`<div class="rank-list">${t.topTracks.slice(0,10).map((v,T)=>`<div class="rank-row">
                      <span class="rank-num">${T+1}</span>
                      <span class="rank-main"><strong>${g(v.title)}</strong><small>${g(v.artist)}</small></span>
                      <span class="rank-plays">${v.plays} ×</span>
                    </div>`).join("")}</div>`:'<div class="empty-inline">Пока нет данных.</div>'}
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <div><h2>Недавние треки</h2><p class="muted">Можно продолжить с любого места</p></div>
        </div>
        ${i.length?nt(i,{showCover:!0}):'<div class="empty-inline">История пока пуста.</div>'}
      </section>
    </div>`}async function zi(e){F();const t=await Ns();e===o.renderSeq&&(o.currentTracks=[],c("#view").innerHTML=`
    <div class="page">
      ${St("Артисты",`${t.length} ${V(t.length,"артист","артиста","артистов")} в библиотеке`,{actions:`<button class="btn glass" data-action="shuffle-library">${l("shuffle")} Перемешать всё</button>`,eyebrow:"Коллекция"})}
      <div class="grid cards">${t.map(ya).join("")}</div>
    </div>`)}async function qi(e,t){F();const a=await ls(t);if(e!==o.renderSeq)return;const s=a.artist,n=s.album||[];o.currentTracks=[],c("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/artists">${l("back")} Все артисты</a>
      <section class="collection-head">
        <div class="collection-art round">${dt(s.coverArt||s.id,{size:600,alt:s.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">Артист</div>
          <h1>${g(s.name)}</h1>
          <p class="muted">${n.length} ${V(n.length,"альбом","альбома","альбомов")}</p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-artist" data-id="${s.id}">${l("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-artist" data-id="${s.id}">${l("shuffle")} Перемешать</button>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section-head"><h2>Альбомы</h2></div>
        <div class="grid cards">${n.map(ie).join("")}</div>
      </section>
    </div>`}async function Ii(e){F();const t=await Li();e===o.renderSeq&&(o.currentTracks=[],c("#view").innerHTML=`
    <div class="page">
      ${St("Альбомы",`${t.length} ${V(t.length,"альбом","альбома","альбомов")}`,{eyebrow:"Коллекция"})}
      <div class="grid cards">${t.map(ie).join("")}</div>
    </div>`)}async function Hi(e,t){F();const a=await pa(t);if(e!==o.renderSeq)return;const s=a.album,n=s.song||[];o.currentTracks=n,c("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/albums">${l("back")} Все альбомы</a>
      <section class="collection-head album-head">
        <div class="collection-art">${dt(s.coverArt||s.id,{size:800,alt:s.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">${s.year?`Альбом · ${s.year}`:"Альбом"}</div>
          <h1>${g(s.name)}</h1>
          <p class="muted">
            <a class="inline-link" href="#/artist/${s.artistId}">${g(s.artist)}</a>
            · ${n.length} ${V(n.length,"трек","трека","треков")}
            · ${qs(s.duration*1e3||0)}
          </p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-all">${l("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-all">${l("shuffle")} Перемешать</button>
          </div>
        </div>
      </section>
      <section class="section">
        ${nt(n,{showAlbum:!1})}
      </section>
    </div>`}async function Oi(e){F();const t=await $a();e===o.renderSeq&&(o.currentTracks=t,c("#view").innerHTML=`
    <div class="page">
      ${St("Все треки",`${t.length} ${V(t.length,"трек","трека","треков")}`,{eyebrow:"Библиотека",actions:`<button class="btn primary" data-action="play-all">${l("play")} Слушать</button>
                  <button class="btn glass" data-action="shuffle-all">${l("shuffle")} Перемешать</button>`})}
      ${nt(t,{showCover:!0})}
    </div>`)}async function Ni(e){F();const t=await ha();e===o.renderSeq&&(S.playlists=t,o.currentTracks=[],c("#view").innerHTML=`
    <div class="page">
      ${St("Плейлисты",`${t.length} ${V(t.length,"плейлист","плейлиста","плейлистов")}`,{eyebrow:"Моя музыка",actions:`<button class="btn primary" data-action="new-playlist">${l("add")} Новый плейлист</button>`})}
      ${t.length?`<div class="grid cards">${t.map(Ri).join("")}</div>`:`<div class="empty-state"><span class="empty-icon">${l("playlist")}</span><h2>Плейлистов пока нет</h2><p>Соберите подборку из любимых треков.</p><button class="btn primary" data-action="new-playlist">${l("add")} Создать</button></div>`}
    </div>`)}function Ri(e){return`<article class="card" data-action="open" data-href="#/playlist/${e.id}" tabindex="0">
    <div class="card-cover">${dt(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${g(e.name)}</div>
      <div class="card-sub">${e.songCount??0} ${V(e.songCount??0,"трек","трека","треков")}</div>
    </div>
    <button class="card-play" data-action="open" data-href="#/playlist/${e.id}">${l("play")}</button>
  </article>`}async function Vi(e,t){F();const a=await hn(t);if(e!==o.renderSeq)return;const s=(a.entry||[]).map((n,i)=>({...n,track:i+1}));o.currentTracks=s,c("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/playlists">${l("back")} Все плейлисты</a>
      <section class="collection-head album-head">
        <div class="collection-art">${dt(a.coverArt||a.id,{size:800,alt:a.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">Плейлист</div>
          <h1>${g(a.name)}</h1>
          <p class="muted">${s.length} ${V(s.length,"трек","трека","треков")} · ${qs((a.duration||0)*1e3)}</p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-all">${l("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-all">${l("shuffle")} Перемешать</button>
            <button class="btn ghost danger" data-action="delete-playlist" data-id="${a.id}">${l("delete")} Удалить</button>
          </div>
        </div>
      </section>
      <section class="section">
        ${nt(s,{showCover:!0,playlistId:a.id})}
      </section>
    </div>`}async function Yi(e){F();const t=await Rs();if(e!==o.renderSeq)return;const a=t.song||[];o.currentTracks=a,c("#view").innerHTML=`
    <div class="page">
      ${St("Избранное",`${a.length} ${V(a.length,"трек","трека","треков")}`,{eyebrow:"Моя музыка",actions:a.length?`<button class="btn primary" data-action="play-all">${l("play")} Слушать</button>`:""})}
      ${a.length?nt(a,{showCover:!0}):`<div class="empty-state"><span class="empty-icon">${l("heartOutline")}</span><h2>Здесь пока пусто</h2><p>Нажимайте на сердечко у трека, чтобы добавить его в избранное.</p></div>`}
      ${(t.album||[]).length?`<section class="section"><div class="section-head"><h2>Любимые альбомы</h2></div>
             <div class="grid cards">${t.album.map(ie).join("")}</div></section>`:""}
    </div>`}const Ea="rustream.searches";function Vs(){try{const e=JSON.parse(localStorage.getItem(Ea));return Array.isArray(e)?e.slice(0,8):[]}catch{return[]}}function Ys(e){const t=String(e||"").trim();if(t.length<2)return;const a=[t,...Vs().filter(s=>s!==t)].slice(0,8);localStorage.setItem(Ea,JSON.stringify(a))}function la(e){const t=String(e||"").trim();if(!t)return;Ys(t);const a=`#/search?q=${encodeURIComponent(t)}`;location.hash===a?q():location.hash=a}async function ji(e,t){const a=c("#search-input");if(a.value!==t&&(a.value=t),!t.trim()){const i=Vs();c("#view").innerHTML=`
      <div class="page search-page">
        <header class="page-head">
          <div>
            <span class="eyebrow">Поиск</span>
            <h1>Что найти?</h1>
          </div>
        </header>

        <form id="page-search-form" class="search-row">
          <label class="searchbox">
            ${l("search")}
            <input id="page-search-input" type="search" placeholder="Треки, альбомы, артисты…" enterkeyhint="search" autocomplete="off" />
          </label>
          <button class="btn primary" type="submit">${l("search")} Искать</button>
        </form>

        ${i.length?`<section class="section">
                <div class="section-head"><h2>Недавние запросы</h2><button class="text-link" data-action="clear-searches">Очистить</button></div>
                <div class="chip-row">${i.map(p=>`<button class="chip-btn" data-action="run-search" data-query="${g(p)}">${g(p)}</button>`).join("")}</div>
              </section>`:""}

        <section class="section">
          <div class="section-head"><h2>Популярное</h2></div>
          <div class="chip-row">
            ${["Chiki The Maid","Intro","Poezd","FLAC","Аниме","Рок","Джаз"].map(p=>`<button class="chip-btn" data-action="run-search" data-query="${g(p)}">${g(p)}</button>`).join("")}
          </div>
        </section>
      </div>`;const r=c("#page-search-form"),u=c("#page-search-input");r==null||r.addEventListener("submit",p=>{p.preventDefault(),la(u.value)}),u==null||u.addEventListener("keydown",p=>{p.key==="Enter"&&la(u.value)});return}F();const s=await pn(t);if(e!==o.renderSeq)return;const n=s.song||[];o.currentTracks=n,c("#view").innerHTML=`
    <div class="page">
      ${St(`Поиск: ${t}`,`Найдено ${n.length} ${V(n.length,"трек","трека","треков")}, ${(s.album||[]).length} ${V((s.album||[]).length,"альбом","альбома","альбомов")}`,{eyebrow:"Результаты"})}
      ${(s.artist||[]).length?`<section class="section"><div class="section-head"><h2>Артисты</h2></div><div class="grid cards">${s.artist.map(ya).join("")}</div></section>`:""}
      ${(s.album||[]).length?`<section class="section"><div class="section-head"><h2>Альбомы</h2></div><div class="grid cards">${s.album.map(ie).join("")}</div></section>`:""}
      ${n.length?`<section class="section"><div class="section-head"><h2>Треки</h2></div>${nt(n,{showCover:!0})}</section>`:""}
      ${!n.length&&!(s.album||[]).length&&!(s.artist||[]).length?`<div class="empty-state"><span class="empty-icon">${l("search")}</span><h2>Ничего не найдено</h2><p>Попробуйте другой запрос.</p></div>`:""}
    </div>`}async function Bi(e){const a=(await pa(e)).album.song||[];if(!a.length)return w("В альбоме нет треков","warn");o.currentTracks=a,await h.playTracks(a,0)}async function es(e,t=!1){w("Загружаю альбомы…");const s=(await ls(e)).artist.album||[],i=(await Promise.all(s.map(r=>pa(r.id)))).flatMap(r=>r.album.song||[]);if(!i.length)return w("У артиста нет треков","warn");o.currentTracks=i,await h.playTracks(i,0,{shuffle:t})}async function js(e,t){try{await Sn(e,t),t===1?(o.favorites.add(e),o.dislikes.delete(e)):t===-1?(o.favorites.delete(e),o.dislikes.add(e)):(o.favorites.delete(e),o.dislikes.delete(e)),S.favorites=null,S.ratings=null,et(`[data-action="like"][data-id="${e}"]`).forEach(a=>{const s=o.favorites.has(e);a.classList.toggle("active",s),a.innerHTML=l(s?"heart":"heartOutline")}),et(`[data-action="dislike"][data-id="${e}"]`).forEach(a=>{a.classList.toggle("active",o.dislikes.has(e))}),Bs(),location.hash.startsWith("#/favorites")&&q(),location.hash.startsWith("#/stats")&&q()}catch(a){w(a.message,"error")}}async function Ee(e){const t=o.favorites.has(e);await js(e,t?0:1)}async function as(e){const t=o.dislikes.has(e);await js(e,t?0:-1)}function Bs(){const e=h.track,t=c("#pb-like"),a=c("#pb-dislike");if(t){const s=e?o.favorites.has(e.id):!1;t.classList.toggle("active",s),t.innerHTML=l(s?"heart":"heartOutline")}a&&a.classList.toggle("active",e?o.dislikes.has(e.id):!1)}async function Fi(e){let t=[];try{t=await ha()}catch(a){w(a.message,"error")}ka({title:"Добавить в плейлист",body:`
      ${t.length?`<div class="modal-list">${t.map(a=>`<button class="modal-row" data-modal-action="add" data-playlist="${a.id}">
                  <span class="modal-row-ico">${l("playlist")}</span>
                  <span><strong>${g(a.name)}</strong><small>${a.songCount??0} треков</small></span>
                  ${l("next")}
                </button>`).join("")}</div>`:'<p class="muted">Плейлистов пока нет — создайте первый.</p>'}
      <div class="modal-new">
        <input class="input" id="new-playlist-name" placeholder="Название нового плейлиста" />
        <button class="btn primary" data-modal-action="create" data-track="${e}">${l("add")} Создать</button>
      </div>`,onMount:a=>{a.addEventListener("click",async s=>{const n=s.target.closest("[data-modal-action]");if(n&&(n.dataset.modalAction==="add"&&(await mn(n.dataset.playlist,e),rt(),S.playlists=null,w("Трек добавлен в плейлист")),n.dataset.modalAction==="create")){const r=c("#new-playlist-name",a).value.trim()||"Мой плейлист";await ds(r,[e]),rt(),S.playlists=null,w("Плейлист создан"),location.hash.startsWith("#/playlists")&&q()}})}})}async function Ui(){ka({title:"Новый плейлист",body:`<input class="input" id="new-playlist-name" placeholder="Например: Вечерний плейлист" autofocus />
           <div class="modal-actions">
             <button class="btn ghost" data-modal-action="cancel">Отмена</button>
             <button class="btn primary" data-modal-action="create">Создать</button>
           </div>`,onMount:e=>{const t=c("#new-playlist-name",e);t.focus(),e.addEventListener("click",async a=>{var n;const s=(n=a.target.closest("[data-modal-action]"))==null?void 0:n.dataset.modalAction;if(s==="cancel"&&rt(),s==="create"){const i=t.value.trim();if(!i)return t.focus();await ds(i,[]),rt(),S.playlists=null,w("Плейлист создан"),q()}}),t.addEventListener("keydown",a=>{var s;a.key==="Enter"&&((s=c('[data-modal-action="create"]',e))==null||s.click())})}})}function ka({title:e,body:t,onMount:a}){const s=c("#modal-root");s.innerHTML=`
    <div class="modal-backdrop" data-modal-action="close">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-head"><h3>${g(e)}</h3><button class="icon-btn" data-modal-action="close">${l("close")}</button></div>
        <div class="modal-body">${t}</div>
      </div>
    </div>`,document.body.classList.add("modal-open");const n=c(".modal",s);s.querySelector(".modal-backdrop").addEventListener("click",i=>{i.target.dataset.modalAction==="close"&&rt()}),a==null||a(n)}function rt(){c("#modal-root").innerHTML="",document.body.classList.remove("modal-open")}function qt(e="lyrics"){o.npOpen=!0,o.npTab=e;const t=c("#np");t.hidden=!1,requestAnimationFrame(()=>t.classList.add("open")),setTimeout(()=>t.classList.add("open"),80),ae()}function ke(){o.npOpen=!1;const e=c("#np");e.classList.remove("open"),setTimeout(()=>{o.npOpen||(e.hidden=!0)},260)}function Xi(e){o.npTab=e,ae()}function ae(){if(!o.npOpen)return;const e=h.track;et(".np-tab").forEach(s=>s.classList.toggle("active",s.dataset.npTab===o.npTab)),c("#np").classList.toggle("compact",o.npTab!=="lyrics");const t=c("#np-side");t.innerHTML=`
    <div class="np-cover">${dt((e==null?void 0:e.coverArt)||(e==null?void 0:e.albumId),{size:900,alt:(e==null?void 0:e.title)||""})}</div>
    <div class="np-meta">
      <div class="eyebrow">${l("wave")} Сейчас играет</div>
      <h2>${g((e==null?void 0:e.title)||"Ничего не играет")}</h2>
      <p class="np-artist">${g((e==null?void 0:e.artist)||"Выберите трек")}</p>
      <p class="muted">${g((e==null?void 0:e.album)||"")}${e!=null&&e.year?` · ${e.year}`:""}</p>
      <div class="np-chips" id="np-chips">
        ${e?`
          ${wa(e)?'<span class="chip ytm-chip" title="Источник: YouTube Music">YouTube</span>':""}
          <span class="chip">${(e.suffix||"flac").toUpperCase()}</span>
          <span class="chip">${e.bitRate?`${e.bitRate} kbps`:"lossless"}</span>
          <span class="chip" id="np-buffer">буфер 0:00</span>
        `:""}
      </div>
      <div class="np-controls">
        <button class="icon-btn ${h.shuffle?"active":""}" data-action="shuffle" title="Перемешать">${l("shuffle")}</button>
        <button class="icon-btn" data-action="prev" title="Предыдущий">${l("prev")}</button>
        <button class="play-btn" data-action="toggle" title="${h.paused?"Играть":"Пауза"}">${l(h.paused?"play":"pause")}</button>
        <button class="icon-btn" data-action="next" title="Следующий">${l("next")}</button>
        <button class="icon-btn ${h.repeat!=="off"?"active":""}" data-action="repeat" title="Повтор">${l(h.repeat==="one"?"repeatOne":"repeat")}</button>
      </div>
      <div class="np-actions">
        <button class="icon-btn like ${e&&o.favorites.has(e.id)?"active":""}" data-action="like-current" title="В избранное">${l(e&&o.favorites.has(e.id)?"heart":"heartOutline")}</button>
        <button class="icon-btn dislike ${e&&o.dislikes.has(e.id)?"active":""}" data-action="dislike-current" title="Не нравится">${l("thumbDown")}</button>
        <button class="icon-btn" data-action="add-to-playlist" data-id="${(e==null?void 0:e.id)||""}" ${e?"":"disabled"} title="В плейлист">${l("add")}</button>
        <button class="icon-btn" data-action="jump-album" ${e!=null&&e.albumId?"":"disabled"} title="К альбому">${l("album")}</button>
      </div>
    </div>`;const a=c("#np-panel");o.npTab==="lyrics"?Fs(a,e):o.npTab==="eq"?Pe(a):Ws(a)}async function Fs(e,t){var n,i;if(!t){e.innerHTML=Xs("lyrics","Текст появится здесь","Включите трек — и мы поищем файл .lrc рядом с аудио.");return}if(e.innerHTML='<div class="panel-loading"><span class="spinner"></span>Ищу текст…</div>',o.lyricsTrackId!==t.id||o.lyricsRefresh)try{o.lyrics=await Mn(t.id,o.lyricsRefresh),o.lyricsTrackId=t.id,o.lyricsRefresh=!1,o.lyricsActiveKey=null}catch{o.lyrics=null}if(o.npTab!=="lyrics")return;const a=o.lyrics;if(!a||!a.plain&&!((n=a.synced)!=null&&n.length)){e.innerHTML=`<div class="panel-empty">
      <span class="empty-icon">${l("lyrics")}</span>
      <h3>Текст не найден</h3>
      <p>Локального .lrc/.txt нет, интернет-поиск ничего не вернул. Можно попробовать ещё раз.</p>
      <button class="btn glass" data-action="refresh-lyrics">${l("refresh")} Искать в интернете</button>
    </div>`;return}const s=a.source==="lrclib"?"LRCLIB":a.source==="local"?"локальный файл":a.source==="lyrics.ovh"?"lyrics.ovh":"кэш";e.innerHTML=`
    <div class="panel-title">
      <h3>Текст песни</h3>
      <span class="lyrics-source">${l("wave")} ${g(s)}</span>
      <button class="icon-btn" data-action="refresh-lyrics" title="Найти заново">${l("refresh")}</button>
    </div>
    <div class="lyrics" id="lyrics-body">
      ${(i=a.synced)!=null&&i.length?a.synced.map((r,u)=>`<div class="lyric-line" data-index="${u}" data-time="${r.time_ms}">${g(r.text)}</div>`).join(""):`<div class="lyrics-plain">${g(a.plain).replace(/\n/g,"<br />")}</div>`}
    </div>`,Us()}function Us(){if(o.npTab!=="lyrics")return;const e=et(".lyric-line");if(!e.length)return;const t=h.currentTime*1e3;let a=-1;e.forEach((n,i)=>{Number(n.dataset.time)<=t&&(a=i)}),a<0&&(a=0),e.forEach((n,i)=>n.classList.toggle("active",i===a));const s=`${o.lyricsTrackId||""}:${a}`;a>=0&&o.lyricsActiveKey!==s&&(o.lyricsActiveKey=s,e[a].scrollIntoView({block:"center",behavior:"smooth"}))}function Xs(e,t,a){return`<div class="panel-empty"><span class="empty-icon">${l(e)}</span><h3>${g(t)}</h3><p>${g(a)}</p></div>`}function Pe(e){const t=h.eqState;e.innerHTML=`
    <div class="panel-title">
      <h3>Эквалайзер</h3>
      <label class="switch">
        <input type="checkbox" id="eq-enabled" ${t.enabled?"checked":""} />
        <span></span>
      </label>
    </div>
    <div class="eq-presets">
      ${Object.entries(ra).map(([a,s])=>`<button class="chip-btn ${t.preset===a?"active":""}" data-eq-preset="${a}">${g(s.name)}</button>`).join("")}
      <button class="chip-btn ${t.preset==="custom"?"active":""}" disabled>Своя</button>
    </div>
    <div class="eq ${t.enabled?"":"disabled"}">
      ${zs.map((a,s)=>{const n=Number(t.gains[s])||0,i=(12-n)/24*100;return`
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
      <button class="btn ghost" data-action="reset-eq">${l("refresh")} Сбросить</button>
    </div>`}function Ws(e){const t=h.queue;e.innerHTML=`
    <div class="panel-title"><h3>Очередь</h3><span class="muted">${t.length} ${V(t.length,"трек","трека","треков")}</span></div>
    ${t.length?`<div class="queue-list" id="queue-list">${t.map((s,n)=>`
              <button class="queue-row ${n===h.index?"active":""}" data-action="play-queue" data-index="${n}" data-track-id="${s.id}">
                <span class="queue-drag-handle">${l("menu")}</span>
                <span class="queue-cover">${dt(s.coverArt||s.albumId,{size:80})}</span>
                <span class="queue-main"><strong>${g(s.title)}</strong><small>${g(s.artist||"")}</small></span>
                ${Hs(s)}
                <span class="queue-time">${pt(s.duration)}</span>
              </button>`).join("")}</div>`:Xs("queue","Очередь пуста","Нажмите на трек или альбом, чтобы начать воспроизведение.")}`;const a=c("#queue-list");a&&t.length>0&&new k(a,{animation:150,handle:".queue-drag-handle",ghostClass:"queue-row-ghost",dragClass:"queue-row-drag",onEnd:s=>{s.oldIndex!==s.newIndex&&(h.moveInQueue(s.oldIndex,s.newIndex),setTimeout(()=>Ws(e),50))}})}function Ta(){const e=h.track,t=c("#pb-title"),a=c("#pb-artist"),s=c("#pb-cover-img"),n=c("#quality-format"),i=c("#quality-detail");if(!e){t.textContent="Ничего не играет",a.textContent="Выберите трек",c(".pb-cover").classList.remove("loaded"),n.textContent="—",i.textContent="",ss(null);return}t.textContent=e.title||"",a.textContent=[e.artist,e.album].filter(Boolean).join(" · "),e.coverArt||e.albumId?(s.src=wt(e.coverArt||e.albumId,160),s.onload=()=>c(".pb-cover").classList.add("loaded")):(s.removeAttribute("src"),c(".pb-cover").classList.remove("loaded")),n.textContent=(e.suffix||"flac").toUpperCase();const r=c("#pb-source");r&&(r.hidden=!wa(e)),i.textContent=[e.bitRate?`${e.bitRate} kbps`:null,e.size?Se(e.size):null].filter(Boolean).join(" · "),Bs(),ss(e)}function ss(e){if("mediaSession"in navigator){if(!e){navigator.mediaSession.metadata=null;return}navigator.mediaSession.metadata=new MediaMetadata({title:e.title||"Без названия",artist:e.artist||"Неизвестный артист",album:e.album||"",artwork:[{src:wt(e.coverArt||e.albumId,96),sizes:"96x96",type:"image/jpeg"},{src:wt(e.coverArt||e.albumId,128),sizes:"128x128",type:"image/jpeg"},{src:wt(e.coverArt||e.albumId,256),sizes:"256x256",type:"image/jpeg"},{src:wt(e.coverArt||e.albumId,512),sizes:"512x512",type:"image/jpeg"}]})}}"mediaSession"in navigator&&(navigator.mediaSession.setActionHandler("play",()=>h.play()),navigator.mediaSession.setActionHandler("pause",()=>h.pause()),navigator.mediaSession.setActionHandler("previoustrack",()=>h.prev()),navigator.mediaSession.setActionHandler("nexttrack",()=>h.next()),navigator.mediaSession.setActionHandler("seekto",e=>{e.seekTime!==void 0&&h.seekTo(e.seekTime)}),navigator.mediaSession.setActionHandler("seekbackward",e=>{h.seekBy(-(e.seekOffset||10))}),navigator.mediaSession.setActionHandler("seekforward",e=>{h.seekBy(e.seekOffset||10)}));function xt(){const e=h.duration,t=h.currentTime,a=e?t/e*100:0;c("#cur-time").textContent=pt(t),c("#total-time").textContent=pt(e),c("#seek").value=String(a),c("#seek-fill").style.width=`${a}%`;const s=c("#np-seek");s&&(s.value=String(a),c("#np-seek-fill").style.width=`${a}%`,c("#np-cur-time").textContent=pt(t),c("#np-total-time").textContent=pt(e)),Gs(),Us()}function Gs(){const e=h.buffered;c("#seek-buffer").style.width=`${e.percent}%`;const t=c("#np-seek-buffer");t&&(t.style.width=`${e.percent}%`);const a=c("#np-buffer");a&&(a.textContent=`буфер ${pt(e.ahead)}`,a.title=`Загружено ${Se(h.estimatedBufferedBytes())}`);const s=c("#quality-detail");s&&h.track&&(s.textContent=[h.track.bitRate?`${h.track.bitRate} kbps`:null,h.track.size?Se(h.track.size):null,`буфер ${pt(e.ahead)}`].filter(Boolean).join(" · "))}function re(){var s;const e=!h.paused&&!!h.track;c("#play-btn").innerHTML=l(e?"pause":"play"),c("#pb-cover").classList.toggle("playing",e);const t=c('.np-controls [data-action="toggle"]');t&&(t.innerHTML=l(e?"pause":"play"),t.title=e?"Пауза":"Играть");const a=((s=h.track)==null?void 0:s.id)||null;et(".track-row").forEach(n=>{n.classList.toggle("playing",!!a&&n.dataset.trackId===a)})}function Ma(){c("#shuffle-btn").classList.toggle("active",h.shuffle),c("#repeat-btn").classList.toggle("active",h.repeat!=="off"),c("#repeat-btn").innerHTML=l(h.repeat==="one"?"repeatOne":"repeat");const e=c('.np-controls [data-action="shuffle"]');e&&e.classList.toggle("active",h.shuffle);const t=c('.np-controls [data-action="repeat"]');t&&(t.classList.toggle("active",h.repeat!=="off"),t.innerHTML=l(h.repeat==="one"?"repeatOne":"repeat"))}function oe(){c("#volume").value=String(h.volumePercent);const e=h.volumePercent===0?"volumeOff":h.volumePercent<50?"volumeDown":"volumeUp";c("#volume-btn").innerHTML=l(e);const t=c("#np-volume");if(t){t.value=String(h.volumePercent);const a=c("#np-volume-icon");a&&(a.innerHTML=l(e))}}function Js(){var t,a;const e=(a=(t=o.ytmStatus)==null?void 0:t.account)==null?void 0:a.photo;return typeof e=="string"&&e.startsWith("http")?e:""}function Wi(e,t="user-avatar"){const a=Js();return a?`<span class="${t} has-photo"><img src="${g(a)}" alt="" referrerpolicy="no-referrer" /></span>`:`<span class="${t}">${g(ba(e))}</span>`}function Ks(){const e=te(),t=c("#user-avatar"),a=c("#user-name"),s=Js();t&&(s?(t.classList.add("has-photo"),t.innerHTML=`<img src="${g(s)}" alt="" referrerpolicy="no-referrer" />`):(t.classList.remove("has-photo"),t.textContent=ba(e))),a&&(a.textContent=e)}function Qs(e){const t=c("#auth-screen");t&&(t.hidden=!1,document.body.classList.add("auth-locked"),c("#auth-login-view").hidden=e!=="login",c("#auth-register-view").hidden=e!=="register",setTimeout(()=>{var a;return(a=c(e==="login"?"#login-username":"#register-invite"))==null?void 0:a.focus()},60))}function _t(){Qs("login")}async function La(e=""){Qs("register");const t=c("#register-invite"),a=c("#register-invite-hint");if(t.value=e.trim(),!e.trim()){a.textContent="Вставьте код приглашения от администратора.";return}a.textContent="Проверяю приглашение…";try{const s=await In(e.trim());a.innerHTML=`Приглашение от <strong>${g(s.invitedBy)}</strong>${s.isAdmin?" · администратор":""}`}catch(s){a.textContent=s.message||"Приглашение недействительно"}}function Gi(){const e=c("#auth-screen");e&&(e.hidden=!0,document.body.classList.remove("auth-locked"))}async function _a(){var e;try{o.authConfig=await ta();const t=await yn();if(!t.user){_t(),location.hash.startsWith("#/register")&&q();return}o.me=t.user,o.meSettings=t.settings,ze(((e=t.settings)==null?void 0:e.theme)||localStorage.getItem("rustream.theme")||"violet"),o.ytmStatus=await De().catch(()=>null),Ks(),Gi(),await Promise.all([Rs(),Sa()]),Ki(),await Aa(),q()}catch(t){Is(t)||console.error(t),_t()}}function Q(e){o.liveMode=!!e,h.setLiveMode(!!e)}const Zs="rustream.playerSyncedAt";let ns=null;function Ji(){return Number(localStorage.getItem(Zs))||0}function tn(e){Number(e)>0&&localStorage.setItem(Zs,String(e))}function xa(){!o.me||!h.queue.length||o.skipPushUntil&&Date.now()<o.skipPushUntil||(clearTimeout(ns),ns=setTimeout(async()=>{try{const e=await Vn(h.snapshotState());tn(e==null?void 0:e.updatedAt)}catch{}},3e3))}async function Aa({force:e=!1}={}){var u,p;let t;try{t=await Rn()}catch{return}const a=Number(t==null?void 0:t.updatedAt)||0,s=t==null?void 0:t.state;if(!((u=s==null?void 0:s.queue)!=null&&u.length)||!e&&a<=Ji())return;const n=s.queue[Math.min(Number(s.index)||0,s.queue.length-1)],i=(n==null?void 0:n.id)&&n.id===((p=h.track)==null?void 0:p.id);if(!e&&!h.paused&&!i)return;const r=h.applyRemote(s);r&&(tn(a),o.skipPushUntil=Date.now()+5e3,o.liveMode=!!r.liveMode,Ta(),re(),xt(),location.hash.startsWith("#/live")&&q())}setInterval(()=>{document.hidden||Aa()},3e4);document.addEventListener("visibilitychange",()=>{document.hidden||Aa()});h.addEventListener("track",xa);h.addEventListener("queue",xa);h.addEventListener("state",xa);window.addEventListener("pagehide",()=>{if(!(!o.me||!h.queue.length))try{fetch("/api/me/player",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({state:h.snapshotState()}),keepalive:!0}).catch(()=>{})}catch{}});function Ki(){const e=h.restore();e&&(o.liveMode=!!e.liveMode,Ta(),re(),Ma(),xt())}async function Qi(){try{w("Собираю персональный поток…");const e=await ms(40);if(!e.length)return w("В библиотеке пока нет треков","warn");Q(!0),o.currentTracks=e,await h.playTracks(e,0),w("Live включён"),location.hash.startsWith("#/live")&&q()}catch(e){if(Ot(e))return;w(e.message,"error")}}async function Zi(e){var a;const t=o.liveMixes[e];if(!((a=t==null?void 0:t.tracks)!=null&&a.length))return w("В этом миксе пока нет треков","warn");Q(!1),o.currentTracks=t.tracks,await h.playTracks(t.tracks,0),w(`Играет: ${t.title}`)}const Da=[{id:"violet",name:"Фиолетовая"},{id:"ocean",name:"Океан"},{id:"sunset",name:"Закат"},{id:"forest",name:"Лес"},{id:"mono",name:"Моно"}],Te=/^#[0-9a-f]{6}$/i;function ca(e){const t=e.replace("#","");return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}}function tr({r:e,g:t,b:a}){const s=n=>Math.max(0,Math.min(255,Math.round(n)));return`#${[s(e),s(t),s(a)].map(n=>n.toString(16).padStart(2,"0")).join("")}`}function Ct(e,t,a){const s=ca(e),n=ca(t);return tr({r:s.r*a+n.r*(1-a),g:s.g*a+n.g*(1-a),b:s.b*a+n.b*(1-a)})}function er(e){const{r:t,g:a,b:s}=ca(e),n=i=>{const r=i/255;return r<=.03928?r/12.92:((r+.055)/1.055)**2.4};return .2126*n(t)+.7152*n(a)+.0722*n(s)}function is(e){return er(e)>.42?"#1a1917":"#ffffff"}function en(e){const t=document.documentElement.classList.contains("light-mode"),a=t?"#faf8f4":"#101013",s=t?"#efece4":"#17171c",n=t?.06:.1,i=Ct(e,a,n),r=Ct(e,s,n*1.25),u=Ct(e,t?"#e9e5dc":"#1d1d23",n*1.4),p=Ct(e,t?"#ffffff":"#101013",t?.22:.3),d=document.body.style;d.setProperty("--primary",e),d.setProperty("--on-primary",is(e)),d.setProperty("--primary-container",p),d.setProperty("--on-primary-container",is(p)),d.setProperty("--surface",i),d.setProperty("--surface-container",r),d.setProperty("--surface-container-high",u),d.setProperty("--surface-container-highest",Ct(e,u,.5)),d.setProperty("--surface-container-low",Ct(e,i,.5))}function ar(){const e=document.body.style;["--primary","--on-primary","--primary-container","--on-primary-container","--surface","--surface-container","--surface-container-high","--surface-container-highest","--surface-container-low"].forEach(t=>e.removeProperty(t))}function ze(e){const t=Da.some(s=>s.id===e),a=t?e:Te.test(e||"")?e.toLowerCase():"violet";o.theme=a,document.body.dataset.theme=t?a:"custom",localStorage.setItem("rustream.theme",a),t?ar():en(a)}function da(e){const t=e==="auto"?window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark":e;document.documentElement.classList.toggle("light-mode",t==="light"),o.theme&&Te.test(o.theme)&&en(o.theme)}(function(){const t=localStorage.getItem("colorMode")||"dark";da(t),window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{localStorage.getItem("colorMode")==="auto"&&da("auto")})})();const an=[{id:"compact",name:"Компактно"},{id:"default",name:"Обычно"},{id:"large",name:"Крупно"}];function sn(e){const t=an.some(a=>a.id===e)?e:"default";o.density=t,document.documentElement.dataset.density=t,localStorage.setItem("rustream.density",t)}(function(){sn(localStorage.getItem("rustream.density")||"default")})();async function nn(e){ze(e);try{await ps({theme:o.theme}),o.meSettings={...o.meSettings||{},theme:o.theme}}catch(t){w(t.message,"error")}}function sr(e){var n,i,r,u,p,d,m,f;const t=o.meSettings||{},a=(n=o.authConfig)==null?void 0:n.lastfm,s=o.lastfmConfig||{};return`
    <div class="settings-sections">
      <section class="settings-section">
        <h4>${l("person")} Профиль</h4>
        <form id="settings-profile-form" class="settings-form">
          <label class="field"><span>Отображаемое имя</span>
            <input class="input" id="settings-display-name" value="${g(((i=o.me)==null?void 0:i.displayName)||"")}" />
          </label>
          <button class="btn tonal" type="submit">Сохранить имя</button>
        </form>
        <div class="settings-meta">
          <span>Логин: <strong>${g(((r=o.me)==null?void 0:r.username)||"")}</strong></span>
          ${(u=o.me)!=null&&u.isAdmin?'<span class="chip">администратор</span>':""}
        </div>
      </section>

      <section class="settings-section">
        <h4>${l("palette")} Оформление</h4>
        <p class="muted small">Цветовая тема сохраняется в аккаунте и применяется на всех устройствах.</p>
        <div class="theme-picker">
          ${Da.map(v=>`<button class="theme-swatch ${o.theme===v.id?"active":""}" data-theme-choice="${v.id}" title="${v.name}">
              <span class="swatch-dot theme-${v.id}"></span><span>${v.name}</span>
            </button>`).join("")}
        </div>
      </section>

      <section class="settings-section">
        <h4>${l("radio")} Скробблинг</h4>
        <p class="muted small">История и статистика пишутся локально всегда. Внешние сервисы получают прослушивания только после подключения.</p>
        <div class="settings-sub">
          <h5>Что отправлять</h5>
          <label class="switch">
            <input type="checkbox" id="settings-scrobble-enabled" ${t.scrobbleEnabled===!1?"":"checked"} />
            <span>Отправлять прослушивания в Last.fm и ListenBrainz</span>
          </label>
          <label class="switch">
            <input type="checkbox" id="settings-scrobble-ytm" ${t.scrobbleYtm===!1?"":"checked"} ${t.scrobbleEnabled===!1?"disabled":""} />
            <span>Включая треки, которые играют с YouTube</span>
          </label>
          <p class="muted small">Локальная история и статистика ведутся всегда; эти галочки влияют только на внешние сервисы.</p>
          <button class="btn tonal" data-settings-action="save-scrobble-prefs">${l("check")} Сохранить настройки скробблинга</button>
        </div>
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
          <button class="btn primary" data-settings-action="save-scrobbling" data-scope="listenbrainz">${l("check")} Сохранить токен</button>
        </div>

        <div class="settings-sub">
          <h5>Last.fm</h5>
          <p class="muted small">Тоже бесплатно, но серверу нужны ключи приложения — их создаёт администратор один раз.</p>
        <div class="settings-status">
          <span class="status-dot ${t.lastfmConnected?"on":""}"></span>
          Last.fm: ${t.lastfmConnected?`подключён${t.lastfmUsername?` как ${g(t.lastfmUsername)}`:""}`:"не подключён"}
        </div>
        <div class="settings-inline">
          <button class="btn glass" data-settings-action="lastfm-connect" ${a?"":"disabled"}>${l("wave")} Подключить Last.fm</button>
          <button class="btn ghost" data-settings-action="lastfm-complete" ${t.lastfmConnected?"disabled":""}>Завершить</button>
        </div>
        ${a?"":'<p class="muted small">Для авторизации Last.fm нужны ключи приложения ниже (или в config.toml).</p>'}
        ${(p=o.me)!=null&&p.isAdmin?`
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
        </div>
      </section>

      <section class="settings-section">
        <h4>${l("settings")} Безопасность</h4>
        <form id="settings-password-form" class="settings-form">
          <label class="field"><span>Текущий пароль</span>
            <span class="input-wrap">
              <input class="input" id="settings-current-password" type="password" autocomplete="current-password" />
              <button class="reveal-btn" type="button" data-action="toggle-password" data-target="settings-current-password" aria-label="Показать пароль">${l("eye")}</button>
            </span>
          </label>
          <label class="field"><span>Новый пароль</span>
            <span class="input-wrap">
              <input class="input" id="settings-new-password" type="password" autocomplete="new-password" />
              <button class="reveal-btn" type="button" data-action="toggle-password" data-target="settings-new-password" aria-label="Показать пароль">${l("eye")}</button>
            </span>
          </label>
          <button class="btn tonal" type="submit">Сменить пароль</button>
        </form>
      </section>

      <section class="settings-section">
        <h4>${l("library")} Библиотека</h4>
        <p class="muted small">Сканер перечитывает папки каждые ${((d=o.authConfig)==null?void 0:d.scanInterval)||300} секунд. Новые файлы появятся автоматически.</p>
        <div class="settings-inline">
          <button class="btn glass" data-settings-action="rescan">${l("refresh")} Пересканировать сейчас</button>
          <button class="btn ghost danger" data-settings-action="clear-history">${l("delete")} Очистить историю</button>
        </div>
      </section>

      ${(m=o.me)!=null&&m.isAdmin?`
      <section class="settings-section">
        <h4>${l("person")} Пользователи</h4>
        <p class="muted small">Новый человек может войти двумя способами: вы создаёте ему логин и пароль здесь, либо выдаёте код приглашения — блок «Приглашения» на странице профиля.</p>
        <div class="user-list" id="settings-user-list">
          ${(e||[]).map(v=>{var T;return`
            <div class="user-row">
              <span class="user-avatar small">${g(ba(v.displayName||v.username))}</span>
              <span class="user-row-main"><strong>${g(v.displayName||v.username)}</strong><small>@${g(v.username)}${v.isAdmin?" · админ":""}</small></span>
              ${v.id===((T=o.me)==null?void 0:T.id)?'<span class="chip">вы</span>':`<button class="icon-btn" data-settings-action="delete-user" data-id="${v.id}" title="Удалить">${l("delete")}</button>`}
            </div>`}).join("")}
        </div>
        <div class="settings-form user-create">
          <label class="field"><span>Логин</span><input class="input" id="new-user-name" autocapitalize="none" /></label>
          <label class="field"><span>Пароль</span>
            <span class="input-wrap">
              <input class="input" id="new-user-password" type="password" autocomplete="new-password" />
              <button class="reveal-btn" type="button" data-action="toggle-password" data-target="new-user-password" aria-label="Показать пароль">${l("eye")}</button>
            </span>
          </label>
          <label class="field"><span>Имя</span><input class="input" id="new-user-display" /></label>
          <label class="checkline"><input type="checkbox" id="new-user-admin" /> Администратор</label>
          <button class="btn tonal" data-settings-action="create-user">Добавить пользователя</button>
        </div>
      </section>`:""}

      <section class="settings-section">
        <h4>${l("logout")} Сеанс</h4>
        <p class="muted small">Вход действует 90 дней и продлевается автоматически, пока вы пользуетесь сайтом. Subsonic API: логин <code>${g(((f=o.me)==null?void 0:f.username)||"")}</code>, пароль — ваш пароль. Ключ API: <code>${g(t.subsonicApiKey||"—")}</code></p>
        <button class="btn ghost danger" data-settings-action="logout">${l("logout")} Выйти из аккаунта</button>
      </section>
    </div>`}async function Wt(){if(!o.me)return _t();let e=[];if(o.me.isAdmin)try{[e,o.lastfmConfig]=await Promise.all([Ln(),Oe().catch(()=>({}))])}catch(t){Ot(t)}ka({title:"Аккаунт и настройки",body:sr(e),onMount:t=>{var a,s,n;(a=c("#settings-profile-form",t))==null||a.addEventListener("submit",async i=>{i.preventDefault();try{await za(c("#settings-display-name",t).value.trim()),o.me.displayName=c("#settings-display-name",t).value.trim(),Ks(),w("Имя обновлено")}catch(r){w(r.message,"error")}}),(s=c("#settings-scrobble-enabled",t))==null||s.addEventListener("change",i=>{const r=c("#settings-scrobble-ytm",t);r&&(r.disabled=!i.target.checked)}),(n=c("#settings-password-form",t))==null||n.addEventListener("submit",async i=>{i.preventDefault();try{await En(c("#settings-current-password",t).value,c("#settings-new-password",t).value),c("#settings-current-password",t).value="",c("#settings-new-password",t).value="",w("Пароль изменён")}catch(r){w(r.message,"error")}}),t.addEventListener("click",async i=>{const r=i.target.closest("[data-theme-choice]");if(r){const d=r.dataset.themeChoice;ze(d),et(".theme-swatch",t).forEach(m=>m.classList.toggle("active",m.dataset.themeChoice===d));try{await za(o.me.displayName||o.me.username,d),o.meSettings={...o.meSettings||{},theme:d},w("Тема сохранена")}catch(m){w(m.message,"error")}return}const u=i.target.closest("[data-settings-action]");if(!u)return;const p=u.dataset.settingsAction;if(p==="save-scrobble-prefs"){const d=c("#settings-scrobble-enabled",t).checked,m=c("#settings-scrobble-ytm",t).checked;try{await Ia({scrobbleEnabled:d,scrobbleYtm:m}),o.meSettings={...o.meSettings||{},scrobbleEnabled:d,scrobbleYtm:m};const f=c("#settings-scrobble-ytm",t);f&&(f.disabled=!d),w("Настройки скробблинга сохранены")}catch(f){w(f.message,"error")}return}if(p==="logout"){await us().catch(()=>{}),location.reload();return}if(p==="rescan"){u.classList.add("spin"),await fs().catch(d=>w(d.message,"error")),setTimeout(()=>{u.classList.remove("spin"),w("Сканирование запущено")},1200);return}if(p==="clear-history"){if(!confirm("Удалить всю историю прослушиваний этого аккаунта?"))return;try{await xn(),S.meStats=null,o.meStats=null,w("История очищена");const d=await He();o.meSettings=d.settings}catch(d){w(d.message,"error")}return}if(p==="lastfm-connect"){try{const d=await Dn();window.open(d.url,"_blank","noopener"),w("Подтвердите доступ на Last.fm, затем нажмите «Завершить»")}catch(d){w(d.message,"error")}return}if(p==="lastfm-complete"){try{const d=await Cn();w(`Last.fm подключён${d.username?`: ${d.username}`:""}`);const m=await He();o.meSettings=m.settings,rt(),Wt()}catch(d){w(d.message,"error")}return}if(p==="save-lastfm-app"){try{await qa(c("#settings-lastfm-api-key",t).value.trim(),c("#settings-lastfm-api-secret",t).value.trim());const d=await Oe();o.lastfmConfig=d,o.authConfig=await ta(),w("Ключи Last.fm сохранены в config.toml"),c("#settings-lastfm-api-secret",t).value=""}catch(d){w(d.message,"error")}return}if(p==="clear-lastfm-app"){if(!confirm("Удалить ключи приложения Last.fm из config.toml?"))return;try{await qa("","",!0),o.lastfmConfig=await Oe(),o.authConfig=await ta(),w("Ключи Last.fm удалены"),rt(),Wt()}catch(d){w(d.message,"error")}return}if(p==="save-scrobbling"){const d=actionEl.dataset.scope||"both",m={};d!=="lastfm"&&(m.listenbrainzToken=c("#settings-listenbrainz",t).value.trim()),d!=="listenbrainz"&&(m.lastfmSessionKey=c("#settings-lastfm-key",t).value.trim());try{await Ia(m),w(d==="listenbrainz"?"Токен ListenBrainz сохранён":"Last.fm сохранён");const f=await He();o.meSettings=f.settings}catch(f){w(f.message,"error")}return}if(p==="create-user"){try{await _n({username:c("#new-user-name",t).value.trim(),password:c("#new-user-password",t).value,displayName:c("#new-user-display",t).value.trim(),isAdmin:c("#new-user-admin",t).checked}),w("Пользователь создан"),rt(),Wt()}catch(d){w(d.message,"error")}return}if(p==="delete-user"){if(!confirm("Удалить пользователя и все его данные?"))return;try{await An(u.dataset.id),w("Пользователь удалён"),rt(),Wt()}catch(d){w(d.message,"error")}}})}})}function nr(){const e=localStorage.getItem("colorMode")||"dark";return`
    <div class="theme-mode-picker">
      <button class="mode-btn ${e==="dark"?"active":""}" data-action="color-mode" data-mode="dark">
        ${l("moon")} Тёмная
      </button>
      <button class="mode-btn ${e==="light"?"active":""}" data-action="color-mode" data-mode="light">
        ${l("sun")} Светлая
      </button>
      <button class="mode-btn ${e==="auto"?"active":""}" data-action="color-mode" data-mode="auto">
        ${l("settings")} Системная
      </button>
    </div>
    <div class="theme-picker">
      ${Da.map(t=>`<button class="theme-swatch ${o.theme===t.id?"active":""}" data-action="theme" data-theme="${t.id}">
          <span class="swatch-dot theme-${t.id}"></span><span>${t.name}</span>
        </button>`).join("")}
      <label class="theme-swatch custom ${Te.test(o.theme)?"active":""}" title="Свой цвет">
        <input type="color" id="theme-custom" value="${Te.test(o.theme)?o.theme:"#c7a6ff"}" aria-label="Свой цвет" />
        <span>Свой цвет</span>
      </label>
    </div>`}function ir(e){const t=e==null?void 0:e.account;return e!=null&&e.connected?`
      <div class="ytm-account">
        ${t!=null&&t.photo?`<img class="ytm-avatar" src="${g(t.photo)}" alt="" referrerpolicy="no-referrer" />`:`<span class="ytm-avatar fallback">${l("person")}</span>`}
        <div class="ytm-account-main">
          <strong>${g((t==null?void 0:t.name)||"Аккаунт YouTube")}</strong>
          <small>${g((t==null?void 0:t.handle)||"")}${e.updatedAt?` · обновлено ${new Date(e.updatedAt*1e3).toLocaleDateString("ru-RU")}`:""}</small>
        </div>
        <div class="head-actions">
          <button class="btn glass" data-action="ytm-reconnect">${l("refresh")} Обновить cookies</button>
          <button class="btn ghost danger" data-action="ytm-disconnect">${l("logout")} Отключить</button>
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
      <button class="btn primary" type="submit" id="ytm-connect-submit">${l("check")} Подключить</button>
      <p class="form-error" id="ytm-connect-error" role="alert"></p>
    </form>`}function rr(e){return`
    <section class="section glass-card">
      <div class="section-head">
        <div>
          <h2>${l("ticket")} Приглашения</h2>
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
        <button class="btn primary" type="submit">${l("add")} Создать код</button>
      </form>
      <div class="invite-list">
        ${e.length?e.map(t=>`<div class="invite-row ${t.valid?"":"expired"}">
                  <span class="invite-code">${g(t.code)}</span>
                  <span class="invite-meta">
                    <small>${g(t.note||"без заметки")} · ${t.uses}/${t.maxUses||"∞"} · ${t.isAdmin?"админ":"слушатель"}</small>
                    <small>${t.expiresAt?`до ${new Date(t.expiresAt*1e3).toLocaleDateString("ru-RU")}`:"без срока"}${t.valid?"":" · недействительно"}</small>
                  </span>
                  <button class="icon-btn" data-action="invite-copy" data-code="${g(t.code)}" title="Скопировать ссылку">${l("link")}</button>
                  <button class="icon-btn" data-action="invite-revoke" data-code="${g(t.code)}" title="Отозвать">${l("delete")}</button>
                </div>`).join(""):'<div class="empty-inline">Пока ни одного приглашения</div>'}
      </div>
    </section>`}async function or(e){F();const[t,a]=await Promise.all([Mi().catch(()=>({})),ha().catch(()=>[])]);if(e!==o.renderSeq)return;S.playlists=a;const s=[{href:"#/artists",icon:"person",title:"Артисты",sub:`${t.artists||0} в библиотеке`},{href:"#/albums",icon:"album",title:"Альбомы",sub:`${t.albums||0} в библиотеке`},{href:"#/tracks",icon:"music",title:"Треки",sub:`${t.tracks||0} в библиотеке`},{href:"#/playlists",icon:"playlist",title:"Плейлисты",sub:`${a.length} ${V(a.length,"подборка","подборки","подборок")}`},{href:"#/favorites",icon:"heart",title:"Избранное",sub:"Треки, которым вы поставили лайк"},{href:"#/ytm",icon:"ytm",title:"YouTube Music",sub:"Внешний источник: история, лайки, поиск"},{href:"#/live",icon:"radio",title:"Live",sub:"Персональный поток без повторов"},{href:"#/stats",icon:"chart",title:"Статистика",sub:"Часы, артисты и история"}];c("#view").innerHTML=`
    <div class="page library-page">
      <header class="page-head">
        <div>
          <span class="eyebrow">Коллекция</span>
          <h1>Медиатека</h1>
          <p class="muted">${t.tracks||0} ${V(t.tracks||0,"трек","трека","треков")} · ${Se(t.sizeBytes||0)}</p>
        </div>
        <div class="head-actions">
          <button class="btn glass" data-action="shuffle-library">${l("shuffle")} Перемешать всё</button>
        </div>
      </header>
      <div class="library-grid">
        ${s.map(n=>`<a class="library-tile" href="${n.href}">
              <span class="tile-icon">${l(n.icon)}</span>
              <span class="tile-main"><strong>${n.title}</strong><small>${g(n.sub)}</small></span>
              <span class="tile-arrow">${l("next")}</span>
            </a>`).join("")}
      </div>
    </div>`}const rn=[{id:"account",label:"Аккаунт",icon:"person"},{id:"design",label:"Оформление",icon:"palette"},{id:"ytm",label:"YouTube Music",icon:"ytm"},{id:"invites",label:"Приглашения",icon:"ticket",admin:!0}];function lr(e,t){return`<nav class="subnav" aria-label="Разделы профиля">
    ${rn.filter(s=>!s.admin||t).map(s=>`<a class="subnav-item ${s.id===e?"active":""}"
          href="#/profile?tab=${s.id}">${l(s.icon)} ${s.label}</a>`).join("")}
  </nav>`}async function cr(e,t=new URLSearchParams){var T,y,$,D,N;F();const a=!!((T=o.me)!=null&&T.isAdmin),s=rn.filter(_=>!_.admin||a),n=t.get("tab")||"account",i=s.some(_=>_.id===n)?n:"account",[r,u]=await Promise.all([i==="ytm"?De().catch(()=>({connected:!1,account:null})):Promise.resolve(o.ytmStatus),i==="invites"&&a?Pn().catch(()=>[]):Promise.resolve([])]);if(e!==o.renderSeq)return;i==="ytm"&&(o.ytmStatus=r);const p=`
    <section class="section glass-card">
      <div class="section-head">
        <div>
          <h2>${l("person")} Учётная запись</h2>
          <p class="muted">Данные профиля, пароль и выход с текущего устройства.</p>
        </div>
      </div>
      <dl class="settings-list">
        <div class="settings-row"><dt>Имя</dt><dd>${g(te())}</dd></div>
        <div class="settings-row"><dt>Логин</dt><dd>@${g(((y=o.me)==null?void 0:y.username)||"")}</dd></div>
        <div class="settings-row"><dt>Роль</dt><dd>${a?"администратор":"слушатель"}</dd></div>
      </dl>
      <div class="card-actions">
        <button class="btn primary" data-action="open-settings">${l("settings")} Изменить данные</button>
        <button class="btn ghost danger" data-action="logout">${l("logout")} Выйти</button>
      </div>
    </section>`,d=`
    <section class="section glass-card">
      <h2>${l("palette")} Тема</h2>
      <p class="muted small">Тема сохраняется в аккаунте и применяется на всех устройствах.</p>
      ${nr()}
    </section>
    <section class="section glass-card">
      <h2>${l("expand")} Плотность</h2>
      <p class="muted small">Сколько строк и обложек помещается на экране.</p>
      <div class="theme-mode-picker">
        ${an.map(_=>`<button class="mode-btn ${(o.density||"default")===_.id?"active":""}" data-action="density" data-value="${_.id}">${_.name}</button>`).join("")}
      </div>
    </section>`,m=`
    <section class="section glass-card">
      <div class="section-head">
        <div>
          <h2>${l("ytm")} YouTube Music</h2>
          <p class="muted">Cookies хранятся зашифрованными и используются только для вашего профиля: поиск, лайки и прослушивание.</p>
        </div>
        <span class="status-chip ${r!=null&&r.connected?"on":""}">${r!=null&&r.connected?"подключено":"не подключено"}</span>
      </div>
      ${ir(r||{connected:!1,account:null})}
    </section>`;c("#view").innerHTML=`
    <div class="page profile-page">
      <header class="page-head">
        <div class="profile-identity">
          ${Wi(te(),"user-avatar xl")}
          <div>
            <span class="eyebrow">Профиль</span>
            <h1>${g(te())}</h1>
            <p class="muted">@${g((($=o.me)==null?void 0:$.username)||"")}${a?" · администратор":""}</p>
          </div>
        </div>
      </header>

      ${lr(i,a)}

      ${i==="account"?p:""}
      ${i==="design"?d:""}
      ${i==="ytm"?m:""}
      ${i==="invites"&&a?rr(u):""}
    </div>`;const f=c("#ytm-connect-form");f==null||f.addEventListener("submit",async _=>{_.preventDefault();const R=c("#ytm-connect-submit"),I=c("#ytm-connect-error"),it=c("#ytm-cookies").value.trim();if(I.textContent="",!it){I.textContent="Вставьте cookies";return}R.disabled=!0;try{await On(it),w("YouTube Music подключён"),q()}catch(K){I.textContent=K.message||"Не удалось подключить"}finally{R.disabled=!1}});const v=c("#invite-form");v==null||v.addEventListener("submit",async _=>{var R;_.preventDefault();try{const I=await zn({note:c("#invite-note").value.trim(),expiresInDays:Number(c("#invite-days").value||0),maxUses:Number(c("#invite-uses").value||0),isAdmin:c("#invite-admin").checked});await((R=navigator.clipboard)==null?void 0:R.writeText(vs(I.code)).catch(()=>{})),w("Код создан, ссылка скопирована"),q()}catch(I){w(I.message,"error")}}),(D=c("#theme-custom"))==null||D.addEventListener("input",_=>ze(_.target.value)),(N=c("#theme-custom"))==null||N.addEventListener("change",async _=>{await nn(_.target.value),q()})}async function dr(e){var v,T;F();const t=o.ytmStatus||await De().catch(()=>null);if(e!==o.renderSeq)return;if(o.ytmStatus=t,!(t!=null&&t.connected)){c("#view").innerHTML=`
      <div class="page ytm-page">
        <header class="page-head">
          <div><span class="eyebrow">Источник</span><h1>YouTube Music</h1></div>
        </header>
        <section class="section glass-card empty-state">
          <span class="empty-icon">${l("ytm")}</span>
          <h2>Подключите свой аккаунт</h2>
          <p class="muted">Поиск и лайки YouTube Music будут доступны только вам. Подключение занимает минуту.</p>
          <a class="btn primary" href="#/profile?tab=ytm">${l("settings")} Перейти в профиль</a>
        </section>
      </div>`;return}o.ytmLists=o.ytmLists||{history:[],liked:[],search:[]};const a=y=>`<img src="${wt(y.coverArt||y.id,320)}" alt="" loading="lazy" decoding="async" />`,s=(y,$)=>`
    <div class="ytm-shelf">
      ${y.map((D,N)=>`
        <article class="ytm-card" data-action="play-ytm-row" data-list="${$}" data-index="${N}" tabindex="0" role="button" aria-label="Играть: ${g(D.title)}">
          <div class="ytm-card-art">
            ${a(D)}
            <span class="ytm-source-badge">YT</span>
            <span class="ytm-card-play">${l("play")}</span>
          </div>
          <p class="ytm-card-title">${g(D.title)}</p>
          <p class="ytm-card-sub">${g(D.artist||"")}</p>
        </article>`).join("")}
    </div>`,n=(y,$)=>`
    <div class="ytm-rows">
      ${y.map((D,N)=>`
        <div class="ytm-row" data-action="play-ytm-row" data-list="${$}" data-index="${N}" tabindex="0" role="button">
          <span class="ytm-row-index">${N+1}</span>
          <span class="ytm-row-art">${a(D)}</span>
          <span class="ytm-row-text">
            <span class="ytm-row-title">${g(D.title)}</span>
            <span class="ytm-row-sub">${g([D.artist,D.album].filter(Boolean).join(" · "))}</span>
          </span>
          <span class="ytm-source-badge">YT</span>
          <span class="ytm-row-time">${pt(D.duration)}</span>
          <button class="icon-btn" data-action="ytm-queue-one" data-list="${$}" data-index="${N}" title="В очередь">${l("queue")}</button>
        </div>`).join("")}
    </div>`;c("#view").innerHTML=`
    <div class="page ytm-page">
      <header class="page-head ytm-head">
        <div>
          <span class="eyebrow">Источник</span>
          <h1>YouTube Music</h1>
          <p class="muted">${g(((v=t.account)==null?void 0:v.name)||"Подключено")}${(T=t.account)!=null&&T.handle?` · ${g(t.account.handle)}`:""}</p>
        </div>
        <div class="head-actions">
          <button class="btn tonal" data-action="ytm-liked">${l("heart")} Обновить лайки</button>
        </div>
      </header>

      <div class="ytm-toolbar">
        <form id="ytm-search-form" class="ytm-searchbar">
          <label class="ytm-search-field">
            ${l("search")}
            <input id="ytm-search-input" type="search" placeholder="Поиск треков, артистов, альбомов" enterkeyhint="search" autocomplete="off" />
          </label>
          <button class="icon-btn ytm-search-submit" type="submit" title="Искать">${l("search")}</button>
        </form>

        <div class="chip-row ytm-chips">
          ${[["Новинки","новинки музыка 2026"],["Хиты","популярные песни"],["Русское","русская музыка"],["Электроника","electronic mix"],["Лоу-фай","lofi beats"],["Рок","rock classics"],["Джаз","jazz standards"]].map(([y,$])=>`<button class="chip-btn" data-action="ytm-preset" data-query="${g($)}">${y}</button>`).join("")}
        </div>
      </div>

      <section class="section" id="ytm-results" hidden></section>

      <section class="section ytm-shelf-section" id="ytm-history-section" hidden>
        <div class="shelf-head">
          <div>
            <h2>Недавно слушали</h2>
            <p class="muted">Вернитесь к тому, что уже искали или слушали</p>
          </div>
          <div class="head-actions">
            <button class="icon-btn" data-action="ytm-queue-all" data-list="history" title="В очередь">${l("queue")}</button>
            <button class="btn tonal" data-action="ytm-play-all" data-list="history">${l("play")} Слушать все</button>
          </div>
        </div>
        <div id="ytm-history"></div>
      </section>

      <section class="section ytm-shelf-section" id="ytm-liked-section" hidden>
        <div class="shelf-head">
          <div>
            <h2>С YouTube Music</h2>
            <p class="muted">Треки, которым вы поставили лайк в YouTube Music</p>
          </div>
          <div class="head-actions">
            <button class="icon-btn" data-action="ytm-queue-all" data-list="liked" title="В очередь">${l("queue")}</button>
            <button class="btn tonal" data-action="ytm-play-all" data-list="liked">${l("play")} Слушать все</button>
          </div>
        </div>
        <div id="ytm-liked"></div>
      </section>

      <section class="section" id="ytm-empty" hidden>
        <div class="empty-state">
          <span class="empty-icon">${l("ytm")}</span>
          <h2>Пока пусто</h2>
          <p>Найдите трек через поиск выше — он появится здесь и на главной.</p>
        </div>
      </section>
    </div>`;const i=c("#ytm-search-form"),r=c("#ytm-search-input"),u=c("#ytm-results"),p=(y,$,D,N)=>{const _=c(y);if(!_)return;const R=_.querySelector("div[id]")||_;if(!D.length){_.hidden=!0;return}_.hidden=!1,R.innerHTML=s(D,$)},d=(y,$)=>{var D;o.ytmLists.search=y,u.hidden=!1,u.innerHTML=y.length?`<div class="shelf-head">
          <div>
            <h2>Результаты поиска</h2>
            <p class="muted">Поток с YouTube — файл в вашу библиотеку не скачивается</p>
          </div>
          <div class="head-actions">
            <span class="count-pill">${y.length} ${V(y.length,"трек","трека","треков")}</span>
            <button class="icon-btn" data-action="ytm-queue-all" data-list="search" title="В очередь">${l("queue")}</button>
            <button class="btn tonal" data-action="ytm-play-all" data-list="search">${l("play")} Слушать все</button>
          </div>
        </div>${n(y,"search")}`:`<div class="empty-inline">${g($)}</div>`,(D=c("#ytm-empty"))==null||D.setAttribute("hidden","")},m=async()=>{const y=r.value.trim();if(y){u.hidden=!1,u.innerHTML=`<div class="skel-rows">${'<div class="skeleton skeleton-line"></div>'.repeat(5)}</div>`;try{const $=await gs(y);if(e!==o.renderSeq)return;d($,"Ничего не найдено")}catch($){if(Ot($))return;u.innerHTML=`<div class="empty-inline">${g($.message)} <button class="btn ghost" data-action="ytm-retry">${l("refresh")} Повторить</button></div>`}}};i.addEventListener("submit",y=>{y.preventDefault(),m()});let f;r.addEventListener("input",()=>{clearTimeout(f),f=setTimeout(()=>{r.value.trim().length>=2&&m()},500)}),(async()=>{const[y,$]=await Promise.allSettled([ys(40),bs(50)]);if(e!==o.renderSeq)return;y.status==="fulfilled"&&y.value.length&&(o.ytmLists.history=y.value,p("#ytm-history-section","history",y.value)),$.status==="fulfilled"&&$.value.length&&(o.ytmLists.liked=$.value,p("#ytm-liked-section","liked",$.value)),!o.ytmLists.history.length&&!o.ytmLists.liked.length&&(c("#ytm-empty").hidden=!1)})()}document.addEventListener("click",async e=>{var s,n,i,r,u,p,d;const t=e.target.closest("[data-action]");if(!t)return;const a=t.dataset.action;if(a==="open"){location.hash=t.dataset.href;return}if(a==="play-row"){const m=Number(t.dataset.index);if(e.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]'))return;Q(!1),await h.playTracks(o.currentTracks,m);return}if(a==="play-list-row"){const m=Number(t.dataset.index);if(e.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]'))return;const f=(s=o.lists)==null?void 0:s[t.dataset.list];if(!(f!=null&&f.length))return;Q(!1),await h.playTracks(f,m);return}if(a==="play-ytm-row"){const m=Number(t.dataset.index);if(e.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]'))return;const f=(n=o.ytmLists)==null?void 0:n[t.dataset.list];if(!(f!=null&&f.length))return;Q(!1),await h.playTracks(f,m);return}if(a==="ytm-queue-one"){const m=(i=o.ytmLists)==null?void 0:i[t.dataset.list],f=m==null?void 0:m[Number(t.dataset.index)];if(!f)return;h.enqueue([f]),w(`«${f.title}» в очереди`);return}if(a==="ytm-play-all"||a==="ytm-queue-all"){const m=(r=o.ytmLists)==null?void 0:r[t.dataset.list];if(!(m!=null&&m.length))return w("Список пуст","warn");if(a==="ytm-play-all")Q(!1),await h.playTracks(m,0);else{const f=h.enqueue(m);w(`В очередь добавлено: ${f}`)}return}if(a==="ytm-retry"){(u=c("#ytm-search-form"))==null||u.requestSubmit();return}if(a==="play-all"){if(!o.currentTracks.length)return w("Список пуст","warn");Q(!1),await h.playTracks(o.currentTracks,0);return}if(a==="shuffle-all"){if(!o.currentTracks.length)return w("Список пуст","warn");Q(!1),await h.playTracks(o.currentTracks,0,{shuffle:!0});return}if(a==="shuffle-library"){const m=await $a();o.currentTracks=m,await h.playTracks(m,0,{shuffle:!0});return}if(a==="start-live"){await Qi();return}if(a==="play-mix"){await Zi(Number(t.dataset.index));return}if(a==="open-settings"){await Wt();return}if(a==="theme"){await nn(t.dataset.theme),et('[data-action="theme"]').forEach(m=>m.classList.toggle("active",m.dataset.theme===o.theme));return}if(a==="color-mode"){const m=t.dataset.mode;localStorage.setItem("colorMode",m),da(m),et('[data-action="color-mode"]').forEach(f=>f.classList.toggle("active",f.dataset.mode===m)),w(`Режим: ${m==="dark"?"тёмный":m==="light"?"светлый":"системный"}`);return}if(a==="toggle-password"){const m=document.getElementById(t.dataset.target);if(!m)return;const f=m.type==="password";m.type=f?"text":"password",t.innerHTML=l(f?"eyeOff":"eye"),t.setAttribute("aria-label",f?"Скрыть пароль":"Показать пароль");return}if(a==="density"){const m=t.dataset.value;sn(m),et('[data-action="density"]').forEach(f=>f.classList.toggle("active",f.dataset.value===m));return}if(a==="logout"){await us().catch(()=>{}),location.reload();return}if(a==="ytm-disconnect"){if(!confirm("Отключить YouTube Music? Cookies и скачанный кэш этого профиля будут удалены."))return;try{await Nn(),o.ytmStatus={connected:!1,account:null},w("YouTube Music отключён"),q()}catch(m){w(m.message,"error")}return}if(a==="ytm-reconnect"){o.ytmStatus={connected:!1,account:null},c("#view").innerHTML="",q();return}if(a==="run-search"){la(t.dataset.query||"");return}if(a==="clear-searches"){localStorage.removeItem(Ea),q();return}if(a==="ytm-preset"){const m=t.dataset.query||"";if(!m)return;const f=c("#ytm-results");f&&(f.hidden=!1,f.innerHTML=`<div class="empty-inline">Ищу «${g(m)}»…</div>`);try{const v=await gs(m);o.ytmLists=o.ytmLists||{},o.ytmLists.search=v,f&&(f.innerHTML=v.length?`<div class="section-head"><h2>${l("search")} ${g(m)}</h2><span class="muted small">${v.length}</span></div>${nt(v,{showCover:!0,rowAction:"play-ytm-row",rowList:"search"})}`:'<div class="empty-inline">Ничего не найдено</div>')}catch(v){f&&(f.innerHTML=`<div class="empty-inline">${g(v.message)}</div>`)}return}if(a==="ytm-liked"){const m=c("#ytm-liked-section"),f=c("#ytm-liked");f&&(f.innerHTML='<div class="empty-inline">Загружаю лайки…</div>');try{const v=await bs(200);o.ytmLists=o.ytmLists||{},o.ytmLists.liked=v,m&&(m.hidden=!1),f&&(f.innerHTML=v.length?nt(v,{showCover:!0,rowAction:"play-ytm-row",rowList:"liked"}):'<div class="empty-inline">В YouTube Music пока нет лайков</div>'),w(`Лайков: ${v.length}`)}catch(v){f&&(f.innerHTML=`<div class="empty-inline">${g(v.message)}</div>`)}return}if(a==="invite-copy"){await((p=navigator.clipboard)==null?void 0:p.writeText(vs(t.dataset.code)).catch(()=>{})),w("Ссылка скопирована");return}if(a==="invite-revoke"){if(!confirm("Отозвать приглашение?"))return;try{await qn(t.dataset.code),w("Приглашение отозвано"),q()}catch(m){w(m.message,"error")}return}if(a==="play-album"){e.stopPropagation(),Q(!1),await Bi(t.dataset.id);return}if(a==="play-artist"){Q(!1),await es(t.dataset.id,!1);return}if(a==="shuffle-artist"){Q(!1),await es(t.dataset.id,!0);return}if(a==="like"){e.stopPropagation(),await Ee(t.dataset.id);return}if(a==="like-current"){h.track&&await Ee(h.track.id),ae();return}if(a==="dislike"){e.stopPropagation(),await as(t.dataset.id);return}if(a==="dislike-current"){h.track&&await as(h.track.id),ae();return}if(a==="add-to-playlist"){e.stopPropagation(),await Fi(t.dataset.id);return}if(a==="remove-from-playlist"){e.stopPropagation();try{await fn(t.dataset.playlist,Number(t.dataset.index)),w("Трек убран из плейлиста"),q()}catch(m){w(m.message,"error")}return}if(a==="resume"){h.track?(h.clearRestored(),await h.toggle()):o.currentTracks.length&&await h.playTracks(o.currentTracks,0),location.hash.startsWith("#/home")&&q();return}if(a==="toggle"){!h.track&&o.currentTracks.length?await h.playTracks(o.currentTracks,0):await h.toggle();return}if(a==="prev")return h.previous();if(a==="next")return h.next();if(a==="shuffle")return h.toggleShuffle();if(a==="repeat")return h.cycleRepeat();if(a==="mute")return h.toggleMute();if(a==="nowplaying")return qt(o.npTab);if(a==="open-lyrics")return qt("lyrics");if(a==="open-eq")return qt("eq");if(a==="open-queue")return qt("queue");if(a==="close-np")return ke();if(a==="jump-album"){(d=h.track)!=null&&d.albumId&&(ke(),location.hash=`#/album/${h.track.albumId}`);return}if(a==="play-queue"){Q(!1),await h.playAt(Number(t.dataset.index));return}if(a==="new-playlist")return e.preventDefault(),Ui();if(a==="delete-playlist"){if(!confirm("Удалить этот плейлист?"))return;await vn(t.dataset.id),w("Плейлист удалён"),S.playlists=null,location.hash="#/playlists";return}if(a==="reload")return q();if(a==="reset-eq"){h.resetEq(),Pe(c("#np-panel"));return}if(a==="refresh-lyrics"){if(!h.track)return;o.lyricsRefresh=!0,o.lyricsTrackId=null,Fs(c("#np-panel"),h.track);return}});c("#np").addEventListener("click",e=>{const t=e.target.closest("[data-np-tab]");t&&Xi(t.dataset.npTab);const a=e.target.closest("[data-eq-preset]");a&&(h.applyEqPreset(a.dataset.eqPreset),Pe(c("#np-panel")))});c("#np").addEventListener("input",e=>{if(e.target.id==="np-seek"){h.seekTo(Number(e.target.value)),xt();return}if(e.target.id==="np-volume"){h.setVolume(Number(e.target.value)),oe();return}});c("#np").addEventListener("change",e=>{var t;e.target.id==="eq-enabled"&&(h.setEqEnabled(e.target.checked),(t=c(".eq"))==null||t.classList.toggle("disabled",!e.target.checked))});c("#seek").addEventListener("input",e=>{h.seekTo(Number(e.target.value)),xt()});c("#volume").addEventListener("input",e=>{h.setVolume(Number(e.target.value)),oe()});document.addEventListener("wheel",e=>{var i,r;const t=(r=(i=e.target).closest)==null?void 0:r.call(i,".volume, .np-volume");if(!t||e.ctrlKey||e.metaKey)return;e.preventDefault();const a=e.deltaY<0?5:-5,s=Math.min(100,Math.max(0,h.volumePercent+a));if(s===h.volumePercent)return;h.setVolume(s);const n=t.querySelector('input[type="range"]');n&&(n.value=String(s)),oe()},{passive:!1});document.addEventListener("keydown",e=>{var a,s;if(e.key!=="Enter")return;const t=(s=(a=e.target).closest)==null?void 0:s.call(a,".ytm-card, .ytm-row");t&&(e.preventDefault(),t.click())});document.addEventListener("keydown",e=>{var a;const t=["INPUT","TEXTAREA"].includes((a=document.activeElement)==null?void 0:a.tagName);e.code==="Space"&&!t&&h.track&&(e.preventDefault(),h.toggle()),e.key==="ArrowRight"&&!t&&e.shiftKey&&h.seekBy(5),e.key==="ArrowLeft"&&!t&&e.shiftKey&&h.seekBy(-5),t||(e.key.toLowerCase()==="l"&&h.track&&(e.preventDefault(),Ee(h.track.id)),e.key.toLowerCase()==="n"&&(e.preventDefault(),h.next()),e.key.toLowerCase()==="p"&&!e.ctrlKey&&!e.metaKey&&(e.preventDefault(),h.prev()),e.key.toLowerCase()==="m"&&(e.preventDefault(),h.toggleMute()),e.key.toLowerCase()==="s"&&(e.preventDefault(),h.toggleShuffle()),e.key.toLowerCase()==="r"&&(e.preventDefault(),h.toggleRepeat())),(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"&&(e.preventDefault(),c("#search-input").focus()),e.key==="Escape"&&(c("#modal-root").innerHTML?rt():ke())});let Me=0,Le=0,_e=0;c("#playerbar").addEventListener("touchstart",e=>{Me=e.touches[0].clientY,Le=e.touches[0].clientX,_e=Date.now()});c("#playerbar").addEventListener("touchend",e=>{const t=e.changedTouches[0].clientY,a=e.changedTouches[0].clientX,s=Me-t,n=Math.abs(a-Le),i=Date.now()-_e;s>80&&i<300&&n<50&&(e.preventDefault(),qt(o.npTab||"lyrics"))});const Ke=c(".np-sheet");Ke&&(Ke.addEventListener("touchstart",e=>{e.target.closest('.np-seek-bar, .eq-band, input[type="range"]')||(Me=e.touches[0].clientY,Le=e.touches[0].clientX,_e=Date.now())}),Ke.addEventListener("touchend",e=>{const t=e.changedTouches[0].clientY,a=e.changedTouches[0].clientX,s=t-Me,n=Math.abs(a-Le),i=Date.now()-_e;s>100&&i<300&&n<50&&(e.preventDefault(),ke())}));let Qe=0,Ze=null;c("#pb-cover").addEventListener("touchend",e=>{const t=Date.now(),a=e.target;if(t-Qe<300&&a===Ze){if(e.preventDefault(),h.track){Ee(h.track.id);const s=c("#pb-cover");s.style.transform="scale(0.92)",setTimeout(()=>{s.style.transform=""},150)}Qe=0,Ze=null}else Qe=t,Ze=a});let tt=null;function on(e,t){const a=e.getBoundingClientRect(),s=Math.min(1,Math.max(0,(t-a.top)/a.height));return Math.round(12-s*24)}function ur(e,t){const a=Number(e.dataset.eqBand),s=(12-t)/24*100,n=e.querySelector(".eq-thumb"),i=e.querySelector(".eq-fill");n&&(n.style.top=`${s}%`),i&&(i.style.top=`${Math.min(s,50)}%`,i.style.height=`${Math.abs(50-s)}%`),e.setAttribute("aria-valuenow",String(t));const r=c(`#eq-val-${a}`);r&&(r.textContent=`${t>0?"+":""}${t}`)}function qe(e,t,a){const s=Number(e.dataset.eqBand);ur(e,t),h.eqState.gains[s]=t,h.setEqGain(s,t),a&&(h.eqState.preset="custom",et(".eq-presets .chip-btn").forEach(n=>n.classList.toggle("active",n.dataset.eqPreset==="custom")))}document.addEventListener("pointerdown",e=>{var a;const t=e.target.closest(".eq-track");t&&(e.preventDefault(),tt={el:t,value:on(t,e.clientY)},(a=t.setPointerCapture)==null||a.call(t,e.pointerId),qe(t,tt.value,!1))});document.addEventListener("pointermove",e=>{tt&&(e.preventDefault(),tt.value=on(tt.el,e.clientY),qe(tt.el,tt.value,!1))});document.addEventListener("pointerup",()=>{tt&&(qe(tt.el,tt.value,!0),tt=null)});document.addEventListener("pointercancel",()=>{tt=null});document.addEventListener("keydown",e=>{var n,i;const t=(i=(n=e.target).closest)==null?void 0:i.call(n,".eq-track");if(!t)return;const a=e.key==="ArrowUp"?1:e.key==="ArrowDown"?-1:0;if(!a)return;e.preventDefault();const s=Number(t.getAttribute("aria-valuenow"))||0;qe(t,Math.max(-12,Math.min(12,s+a)),!0)});const ee=c("#search-input");let rs;ee.addEventListener("input",()=>{clearTimeout(rs);const e=ee.value.trim();e.length!==0&&(rs=setTimeout(()=>{e.length>=2&&(location.hash=`#/search?q=${encodeURIComponent(e)}`)},350))});ee.addEventListener("keydown",e=>{if(e.key==="Enter"){const t=ee.value.trim();if(!t)return;ee.blur(),Ys(t);const a=`#/search?q=${encodeURIComponent(t)}`;location.hash===a?q():location.hash=a}});c("#rescan-btn").addEventListener("click",async()=>{c("#rescan-btn").classList.add("spin");const e=Date.now();try{await fs(),setTimeout(async()=>{c("#rescan-btn").classList.remove("spin"),await xi()},Math.max(2500,Date.now()-e))}catch(t){c("#rescan-btn").classList.remove("spin"),Ot(t)||w(t.message,"error")}});c("#np-pill").addEventListener("click",()=>qt(o.npTab));h.addEventListener("track",()=>{Ta(),o.npOpen&&ae(),re(),xt()});h.addEventListener("time",()=>{xt()});h.addEventListener("buffer",Gs);h.addEventListener("state",re);h.addEventListener("mode",Ma);h.addEventListener("volume",oe);h.addEventListener("eq",()=>{o.npTab==="eq"&&o.npOpen&&Pe(c("#np-panel"))});h.addEventListener("error",e=>w(e.detail,"error"));document.addEventListener("error",e=>{e.target instanceof HTMLImageElement&&(e.target.style.display="none")},!0);window.addEventListener("hashchange",q);h.addEventListener("queueend",async()=>{if(o.liveMode)try{const e=await ms(25),t=new Set(h.queue.map(s=>s.id)),a=e.filter(s=>!t.has(s.id));if(!a.length){w("Live: новых треков не нашлось","warn");return}h.appendTracks(a),await h.next(!0)}catch(e){Ot(e)||w(e.message,"error")}});c("#auth-toggle-register").addEventListener("click",()=>{var e;return La(((e=c("#register-invite"))==null?void 0:e.value)||"")});c("#auth-toggle-login").addEventListener("click",()=>{location.hash.startsWith("#/register")&&(location.hash="#/home"),_t()});c("#register-invite").addEventListener("change",()=>{const e=c("#register-invite").value.trim();e&&La(e)});c("#register-form").addEventListener("submit",async e=>{e.preventDefault();const t=c("#register-submit"),a=c("#register-error");a.textContent="",t.disabled=!0;try{await Hn({invite:c("#register-invite").value.trim(),username:c("#register-username").value.trim(),password:c("#register-password").value,displayName:c("#register-display").value.trim()}),location.hash="#/home",await _a()}catch(s){a.textContent=s.message||"Не удалось зарегистрироваться"}finally{t.disabled=!1}});c("#login-form").addEventListener("submit",async e=>{e.preventDefault();const t=c("#login-submit"),a=c("#login-error");if(a.textContent="",t.getAttribute("aria-busy")!=="true"){t.setAttribute("aria-busy","true");try{await wn(c("#login-username").value.trim(),c("#login-password").value),await _a()}catch(s){a.textContent=s.message||"Не удалось войти"}finally{t.removeAttribute("aria-busy")}}});document.addEventListener("keydown",e=>{var t,a;e.key==="Enter"&&!c("#auth-screen").hidden&&((t=document.activeElement)==null?void 0:t.id)==="login-username"&&((a=c("#login-password"))==null||a.focus())});window.addEventListener("pagehide",()=>{h.playId&&h._finalizePlay(!1)});oe();Ma();re();xt();_a();
