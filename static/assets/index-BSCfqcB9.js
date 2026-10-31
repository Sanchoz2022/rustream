(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();const La={home:"M4 20v-8H2L12 3l10 9h-2v8h-6v-6h-4v6H4z",person:"M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z",album:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",music:"M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z",playlist:"M3 6h12v2H3V6zm0 4h12v2H3v-2zm0 4h8v2H3v-2zm12 .5a3.5 3.5 0 1 0 3.5 3.5V9h3V6h-4v8.5a3.5 3.5 0 0 0-2.5-.9z",search:"M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z",play:"M8 5v14l11-7L8 5z",pause:"M6 5h4v14H6V5zm8 0h4v14h-4V5z",prev:"M6 6h2v12H6V6zm3.5 6L18 18V6l-8.5 6z",next:"M16 6h2v12h-2V6zM6 18l8.5-6L6 6v12z",shuffle:"M10.59 9.17 5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z",repeat:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z",repeatOne:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z",volumeUp:"M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.5 4.5 0 0 0 16.5 12zM14 3.23v2.06a6.99 6.99 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54z",volumeDown:"M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.5 4.5 0 0 0 16.5 12z",volumeOff:"M16.5 12a4.5 4.5 0 0 0-2.5-4.03v2.21l2.45 2.45A4.4 4.4 0 0 0 16.5 12zM19 12a7 7 0 0 1-.94 3.51l1.48 1.48A9 9 0 0 0 14 4.75v2.06A7 7 0 0 1 19 12zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25a7 7 0 0 1-2.25 1.2v2.06a9 9 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z",queue:"M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18a3 3 0 1 0 2 2.82V8h3V6h-5z",lyrics:"M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2z",equalizer:"M7 20h2V10H7v10zm4-8h2V4h-2v8zm4 4h2V7h-2v9zM3 20h2v-6H3v6z",close:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",back:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",add:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",delete:"M6 19c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z",heart:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",heartOutline:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z",more:"M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",clock:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z",library:"M4 6H2v14a2 2 0 0 0 2 2h14v-2H4V6zm16-4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-3 9H9V9h8v2zm-2 4H9v-2h6v2zm2-8H9V5h8v2z",refresh:"M17.65 6.35A8 8 0 1 0 19.73 14h-2.08A6 6 0 1 1 12 6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z",edit:"M3 17.25V21h3.75L17.8 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",check:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",wave:"M3 12h2v4H3v-4zm4-4h2v12H7V8zm4-4h2v16h-2V4zm4 6h2v6h-2v-6zm4-2h2v10h-2V8z",radio:"M3.24 6.15C2.51 6.43 2 7.17 2 8v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-.83-.51-1.57-1.24-1.85L12.7 2.3a1 1 0 0 0-.7 0L3.24 6.15zM8 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm10-10H9v2h9v-2zm0 4h-3v2h3v-2z",logout:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5-5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z",thumbDown:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z",thumbUp:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z",chart:"M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z",palette:"M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z",settings:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.03 7.03 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.47.41l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z",chevronDown:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z",chevronRight:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z",ytm:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-13a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-1.5 7.25v-4.5L14.5 12l-4 2.25z",copy:"M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z",link:"M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4a3.1 3.1 0 0 1 0 6.2h-4V17h4a5 5 0 0 0 0-10z",ticket:"M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 1 0 4v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 1 0-4zm-2-1.46a4 4 0 0 0 0 6.92V18H4v-2.54a4 4 0 0 0 0-6.92V6h16v2.54zM11 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z",key:"M12.65 10A6 6 0 1 0 12.65 14H17v4h4v-4h2v-4H12.65zM7 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",lock:"M18 8h-1V6A5 5 0 0 0 7 6v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zM9 6a3 3 0 0 1 6 0v2H9V6zm9 14H6V10h12v10zm-6-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",moreHoriz:"M6 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",queueAdd:"M14 10H3v2h11v-2zm0-4H3v2h11V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM3 16h7v-2H3v2z",sparkle:"M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z",external:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z",shield:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",darkMode:"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8A9.3 9.3 0 0 0 12 3z",lightMode:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2 13h2a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm18 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM11 2v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM5.99 4.58a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06z",expand:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z",sun:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2 13h2a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm18 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM11 2v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM5.99 4.58a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06z",moon:"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8A9.3 9.3 0 0 0 12 3z",menu:"M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z",eye:"M12 5c-5 0-9 4.5-10 7 1 2.5 5 7 10 7s9-4.5 10-7c-1-2.5-5-7-10-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",eyeOff:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2.71 3.16l1.94 1.94C3.29 6.24 2.06 7.94 1 10c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l2.71 2.71 1.27-1.27L3.98 1.89 2.71 3.16zM12 15c-1.03 0-1.96-.42-2.64-1.1l3.54 3.54c-.28.09-.59.14-.9.14z"};function d(e,t=""){const a=La[e]||La.music;return`<svg class="icon ${t}" viewBox="0 0 24 24" aria-hidden="true"><path d="${a}"/></svg>`}const _e="1.16.1",xe="rustream-web";class Bt extends Error{constructor(t,a=0,n=""){super(t),this.name="ApiError",this.status=a,this.code=n}}function la(e,t={}){const a=new URLSearchParams({v:_e,c:xe,f:"json",...t});return`/rest/${e}.view?${a.toString()}`}async function lt(e,t={}){var s;const a=await fetch(la(e,t),{credentials:"same-origin"});if(a.status===401)throw new Bt("Требуется вход в аккаунт",401);if(!a.ok)throw new Bt(`HTTP ${a.status}`,a.status);const i=(await a.json())["subsonic-response"];if(!i)throw new Bt("Некорректный ответ сервера");if(i.status!=="ok")throw new Bt(((s=i.error)==null?void 0:s.message)||"Ошибка API");return i}async function M(e,t={}){const a=await fetch(e,{credentials:"same-origin",...t,headers:{"Content-Type":"application/json",...t.headers||{}}});let n=null;try{n=await a.json()}catch{n=null}if(!a.ok){const i=a.status===401?"Требуется вход в аккаунт":`HTTP ${a.status}`;throw new Bt((n==null?void 0:n.error)||i,a.status,(n==null?void 0:n.code)||"")}return n}const Lt=(e,t=300)=>e?la("getCoverArt",{id:e,size:t}):"",Ie=e=>la("stream",{id:e});async function Jn(){var a;const e=await lt("getArtists"),t=[];for(const n of((a=e.artists)==null?void 0:a.index)||[])for(const i of n.artist||[])t.push(i);return t}const Qa=e=>lt("getArtist",{id:e}),ca=e=>lt("getAlbum",{id:e});async function Za(e="alphabeticalByName",t=100,a=0){var i;return((i=(await lt("getAlbumList2",{type:e,size:t,offset:a})).albumList2)==null?void 0:i.album)||[]}async function Kn(e=500){var a;return((a=(await lt("getRandomSongs",{size:e})).randomSongs)==null?void 0:a.song)||[]}async function Qn(e){return(await lt("search3",{query:e,artistCount:30,albumCount:50,songCount:100})).searchResult3||{artist:[],album:[],song:[]}}async function da(){var t;return((t=(await lt("getPlaylists")).playlists)==null?void 0:t.playlist)||[]}async function Zn(e){return(await lt("getPlaylist",{id:e})).playlist}const tn=(e,t=[])=>{const a=new URLSearchParams({v:_e,c:xe,f:"json",name:e});return t.forEach(n=>a.append("songId",n)),fetch(`/rest/createPlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(n=>n.json()).then(n=>n["subsonic-response"])},ti=(e,t)=>{const a=new URLSearchParams({v:_e,c:xe,f:"json",playlistId:e,songIdToAdd:t});return fetch(`/rest/updatePlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(n=>n.json())},ei=(e,t)=>{const a=new URLSearchParams({v:_e,c:xe,f:"json",playlistId:e,songIndexToRemove:String(t)});return fetch(`/rest/updatePlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(n=>n.json())},ai=e=>lt("deletePlaylist",{id:e});async function ni(){return(await lt("getStarred2")).starred2||{artist:[],album:[],song:[]}}async function ii(){return M("/api/stats")}async function He(){return M("/api/me")}async function si(){return M("/api/session")}async function Qe(){return M("/api/auth/config")}function ri(e,t){return M("/api/auth/login",{method:"POST",body:JSON.stringify({username:e,password:t})})}function en(){return M("/api/auth/logout",{method:"POST"})}function _a(e,t){return an({displayName:e,theme:t})}function an(e){return M("/api/me",{method:"PATCH",body:JSON.stringify(e)})}async function oi(){return M("/api/me/ratings")}function li(e,t){return M("/api/me/ratings",{method:"PUT",body:JSON.stringify({trackId:e,rating:t})})}function Oe(){return M("/api/admin/lastfm")}function xa(e,t,a=!1){return M("/api/admin/lastfm",{method:"PUT",body:JSON.stringify({apiKey:e,apiSecret:t,clear:a})})}function ci(e,t){return M("/api/me/password",{method:"POST",body:JSON.stringify({currentPassword:e,newPassword:t})})}function di({lastfmUsername:e,lastfmSessionKey:t,listenbrainzToken:a}){return M("/api/me/scrobbling",{method:"PUT",body:JSON.stringify({lastfmUsername:e,lastfmSessionKey:t,listenbrainzToken:a})})}async function nn(){return M("/api/me/stats")}async function ui(e,t="web"){return M("/api/plays/start",{method:"POST",body:JSON.stringify({trackId:e,source:t})})}function Aa(e,t,a=!1){return M("/api/plays/update",{method:"POST",body:JSON.stringify({playId:e,positionMs:t,completed:a})})}async function sn(e=40){return(await M(`/api/live/queue?count=${e}`)).tracks||[]}async function pi(){return(await M("/api/live/mixes")).mixes||[]}async function hi(e,t=!1){return M(`/api/lyrics/${encodeURIComponent(e)}${t?"?refresh=1":""}`)}async function rn(){return M("/api/rescan",{method:"POST"})}async function fi(){return(await M("/api/users")).users||[]}function mi({username:e,password:t,displayName:a,isAdmin:n}){return M("/api/users",{method:"POST",body:JSON.stringify({username:e,password:t,displayName:a,isAdmin:n})})}function vi(){return M("/api/me/history",{method:"DELETE"})}function gi(e){return M(`/api/users/${e}`,{method:"DELETE"})}function bi(){return M("/api/lastfm/connect")}function yi(e=""){return M("/api/lastfm/complete",{method:"POST",body:JSON.stringify({token:e})})}async function wi(){const e=await M("/api/admin/invites");return(e==null?void 0:e.invites)||[]}async function $i({note:e,expiresInDays:t,maxUses:a,isAdmin:n}){const i=await M("/api/admin/invites",{method:"POST",body:JSON.stringify({note:e,expiresInDays:t,maxUses:a,isAdmin:n})});return i==null?void 0:i.invite}function Si(e){return M(`/api/admin/invites/${encodeURIComponent(e)}`,{method:"DELETE"})}function ki(e){return M(`/api/auth/invite/${encodeURIComponent(e)}`)}function Ei({invite:e,username:t,password:a,displayName:n}){return M("/api/auth/register",{method:"POST",body:JSON.stringify({invite:e,username:t,password:a,displayName:n||void 0})})}const on=e=>`${location.origin}/static/index.html#/register?invite=${encodeURIComponent(e)}`;function Ae(){return M("/api/me/ytm")}function Ti(e){return M("/api/me/ytm",{method:"PUT",body:JSON.stringify({cookies:e})})}function Mi(){return M("/api/me/ytm",{method:"DELETE"})}async function ln(e,t=40){const a=new URLSearchParams({q:e,limit:String(t)}),n=await M(`/api/ytm/search?${a.toString()}`);return(n==null?void 0:n.tracks)||[]}async function cn(e=200){const t=await M(`/api/ytm/liked?limit=${e}`);return(t==null?void 0:t.tracks)||[]}async function dn(e=40){const t=await M(`/api/ytm/history?limit=${e}`);return(t==null?void 0:t.tracks)||[]}function Li(){return M("/api/me/player")}function _i(e){return M("/api/me/player",{method:"PUT",body:JSON.stringify({state:e})})}/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function xi(e,t,a){return(t=Pi(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function pt(){return pt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},pt.apply(null,arguments)}function Da(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),a.push.apply(a,n)}return a}function rt(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Da(Object(a),!0).forEach(function(n){xi(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Da(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function Ai(e,t){if(e==null)return{};var a,n,i=Di(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}function Di(e,t){if(e==null)return{};var a={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;a[n]=e[n]}return a}function Ci(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Pi(e){var t=Ci(e,"string");return typeof t=="symbol"?t:t+""}function Ze(e){"@babel/helpers - typeof";return Ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ze(e)}var zi="1.15.7";function ut(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var ht=ut(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),ae=ut(/Edge/i),Ca=ut(/firefox/i),Gt=ut(/safari/i)&&!ut(/chrome/i)&&!ut(/android/i),ua=ut(/iP(ad|od|hone)/i),un=ut(/chrome/i)&&ut(/android/i),pn={capture:!1,passive:!1};function _(e,t,a){e.addEventListener(t,a,!ht&&pn)}function L(e,t,a){e.removeEventListener(t,a,!ht&&pn)}function me(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function hn(e){return e.host&&e!==document&&e.host.nodeType&&e.host!==e?e.host:e.parentNode}function et(e,t,a,n){if(e){a=a||document;do{if(t!=null&&(t[0]===">"?e.parentNode===a&&me(e,t):me(e,t))||n&&e===a)return e;if(e===a)break}while(e=hn(e))}return null}var Pa=/\s+/g;function X(e,t,a){if(e&&t)if(e.classList)e.classList[a?"add":"remove"](t);else{var n=(" "+e.className+" ").replace(Pa," ").replace(" "+t+" "," ");e.className=(n+(a?" "+t:"")).replace(Pa," ")}}function S(e,t,a){var n=e&&e.style;if(n){if(a===void 0)return document.defaultView&&document.defaultView.getComputedStyle?a=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(a=e.currentStyle),t===void 0?a:a[t];!(t in n)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),n[t]=a+(typeof a=="string"?"":"px")}}function qt(e,t){var a="";if(typeof e=="string")a=e;else do{var n=S(e,"transform");n&&n!=="none"&&(a=n+" "+a)}while(!t&&(e=e.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(a)}function fn(e,t,a){if(e){var n=e.getElementsByTagName(t),i=0,s=n.length;if(a)for(;i<s;i++)a(n[i],i);return n}return[]}function st(){var e=document.scrollingElement;return e||document.documentElement}function q(e,t,a,n,i){if(!(!e.getBoundingClientRect&&e!==window)){var s,r,l,c,h,m,g;if(e!==window&&e.parentNode&&e!==st()?(s=e.getBoundingClientRect(),r=s.top,l=s.left,c=s.bottom,h=s.right,m=s.height,g=s.width):(r=0,l=0,c=window.innerHeight,h=window.innerWidth,m=window.innerHeight,g=window.innerWidth),(t||a)&&e!==window&&(i=i||e.parentNode,!ht))do if(i&&i.getBoundingClientRect&&(S(i,"transform")!=="none"||a&&S(i,"position")!=="static")){var f=i.getBoundingClientRect();r-=f.top+parseInt(S(i,"border-top-width")),l-=f.left+parseInt(S(i,"border-left-width")),c=r+s.height,h=l+s.width;break}while(i=i.parentNode);if(n&&e!==window){var w=qt(i||e),E=w&&w.a,x=w&&w.d;w&&(r/=x,l/=E,g/=E,m/=x,c=r+m,h=l+g)}return{top:r,left:l,bottom:c,right:h,width:g,height:m}}}function za(e,t,a){for(var n=bt(e,!0),i=q(e)[t];n;){var s=q(n)[a],r=void 0;if(r=i>=s,!r)return n;if(n===st())break;n=bt(n,!1)}return!1}function It(e,t,a,n){for(var i=0,s=0,r=e.children;s<r.length;){if(r[s].style.display!=="none"&&r[s]!==k.ghost&&(n||r[s]!==k.dragged)&&et(r[s],a.draggable,e,!1)){if(i===t)return r[s];i++}s++}return null}function pa(e,t){for(var a=e.lastElementChild;a&&(a===k.ghost||S(a,"display")==="none"||t&&!me(a,t));)a=a.previousElementSibling;return a||null}function G(e,t){var a=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==k.clone&&(!t||me(e,t))&&a++;return a}function qa(e){var t=0,a=0,n=st();if(e)do{var i=qt(e),s=i.a,r=i.d;t+=e.scrollLeft*s,a+=e.scrollTop*r}while(e!==n&&(e=e.parentNode));return[t,a]}function qi(e,t){for(var a in e)if(e.hasOwnProperty(a)){for(var n in t)if(t.hasOwnProperty(n)&&t[n]===e[a][n])return Number(a)}return-1}function bt(e,t){if(!e||!e.getBoundingClientRect)return st();var a=e,n=!1;do if(a.clientWidth<a.scrollWidth||a.clientHeight<a.scrollHeight){var i=S(a);if(a.clientWidth<a.scrollWidth&&(i.overflowX=="auto"||i.overflowX=="scroll")||a.clientHeight<a.scrollHeight&&(i.overflowY=="auto"||i.overflowY=="scroll")){if(!a.getBoundingClientRect||a===document.body)return st();if(n||t)return a;n=!0}}while(a=a.parentNode);return st()}function Ii(e,t){if(e&&t)for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);return e}function Ne(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var Jt;function mn(e,t){return function(){if(!Jt){var a=arguments,n=this;a.length===1?e.call(n,a[0]):e.apply(n,a),Jt=setTimeout(function(){Jt=void 0},t)}}}function Hi(){clearTimeout(Jt),Jt=void 0}function vn(e,t,a){e.scrollLeft+=t,e.scrollTop+=a}function gn(e){var t=window.Polymer,a=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):a?a(e).clone(!0)[0]:e.cloneNode(!0)}function bn(e,t,a){var n={};return Array.from(e.children).forEach(function(i){var s,r,l,c;if(!(!et(i,t.draggable,e,!1)||i.animated||i===a)){var h=q(i);n.left=Math.min((s=n.left)!==null&&s!==void 0?s:1/0,h.left),n.top=Math.min((r=n.top)!==null&&r!==void 0?r:1/0,h.top),n.right=Math.max((l=n.right)!==null&&l!==void 0?l:-1/0,h.right),n.bottom=Math.max((c=n.bottom)!==null&&c!==void 0?c:-1/0,h.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var B="Sortable"+new Date().getTime();function Oi(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var n=[].slice.call(this.el.children);n.forEach(function(i){if(!(S(i,"display")==="none"||i===k.ghost)){e.push({target:i,rect:q(i)});var s=rt({},e[e.length-1].rect);if(i.thisAnimationDuration){var r=qt(i,!0);r&&(s.top-=r.f,s.left-=r.e)}i.fromRect=s}})}},addAnimationState:function(n){e.push(n)},removeAnimationState:function(n){e.splice(qi(e,{target:n}),1)},animateAll:function(n){var i=this;if(!this.options.animation){clearTimeout(t),typeof n=="function"&&n();return}var s=!1,r=0;e.forEach(function(l){var c=0,h=l.target,m=h.fromRect,g=q(h),f=h.prevFromRect,w=h.prevToRect,E=l.rect,x=qt(h,!0);x&&(g.top-=x.f,g.left-=x.e),h.toRect=g,h.thisAnimationDuration&&Ne(f,g)&&!Ne(m,g)&&(E.top-g.top)/(E.left-g.left)===(m.top-g.top)/(m.left-g.left)&&(c=Ri(E,f,w,i.options)),Ne(g,m)||(h.prevFromRect=m,h.prevToRect=g,c||(c=i.options.animation),i.animate(h,E,g,c)),c&&(s=!0,r=Math.max(r,c),clearTimeout(h.animationResetTimer),h.animationResetTimer=setTimeout(function(){h.animationTime=0,h.prevFromRect=null,h.fromRect=null,h.prevToRect=null,h.thisAnimationDuration=null},c),h.thisAnimationDuration=c)}),clearTimeout(t),s?t=setTimeout(function(){typeof n=="function"&&n()},r):typeof n=="function"&&n(),e=[]},animate:function(n,i,s,r){if(r){S(n,"transition",""),S(n,"transform","");var l=qt(this.el),c=l&&l.a,h=l&&l.d,m=(i.left-s.left)/(c||1),g=(i.top-s.top)/(h||1);n.animatingX=!!m,n.animatingY=!!g,S(n,"transform","translate3d("+m+"px,"+g+"px,0)"),this.forRepaintDummy=Ni(n),S(n,"transition","transform "+r+"ms"+(this.options.easing?" "+this.options.easing:"")),S(n,"transform","translate3d(0,0,0)"),typeof n.animated=="number"&&clearTimeout(n.animated),n.animated=setTimeout(function(){S(n,"transition",""),S(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},r)}}}}function Ni(e){return e.offsetWidth}function Ri(e,t,a,n){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-a.top,2)+Math.pow(t.left-a.left,2))*n.animation}var xt=[],Re={initializeByDefault:!0},ne={mount:function(t){for(var a in Re)Re.hasOwnProperty(a)&&!(a in t)&&(t[a]=Re[a]);xt.forEach(function(n){if(n.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),xt.push(t)},pluginEvent:function(t,a,n){var i=this;this.eventCanceled=!1,n.cancel=function(){i.eventCanceled=!0};var s=t+"Global";xt.forEach(function(r){a[r.pluginName]&&(a[r.pluginName][s]&&a[r.pluginName][s](rt({sortable:a},n)),a.options[r.pluginName]&&a[r.pluginName][t]&&a[r.pluginName][t](rt({sortable:a},n)))})},initializePlugins:function(t,a,n,i){xt.forEach(function(l){var c=l.pluginName;if(!(!t.options[c]&&!l.initializeByDefault)){var h=new l(t,a,t.options);h.sortable=t,h.options=t.options,t[c]=h,pt(n,h.defaults)}});for(var s in t.options)if(t.options.hasOwnProperty(s)){var r=this.modifyOption(t,s,t.options[s]);typeof r<"u"&&(t.options[s]=r)}},getEventProperties:function(t,a){var n={};return xt.forEach(function(i){typeof i.eventProperties=="function"&&pt(n,i.eventProperties.call(a[i.pluginName],t))}),n},modifyOption:function(t,a,n){var i;return xt.forEach(function(s){t[s.pluginName]&&s.optionListeners&&typeof s.optionListeners[a]=="function"&&(i=s.optionListeners[a].call(t[s.pluginName],n))}),i}};function Vi(e){var t=e.sortable,a=e.rootEl,n=e.name,i=e.targetEl,s=e.cloneEl,r=e.toEl,l=e.fromEl,c=e.oldIndex,h=e.newIndex,m=e.oldDraggableIndex,g=e.newDraggableIndex,f=e.originalEvent,w=e.putSortable,E=e.extraEventProperties;if(t=t||a&&a[B],!!t){var x,H=t.options,Q="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!ht&&!ae?x=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(x=document.createEvent("Event"),x.initEvent(n,!0,!0)),x.to=r||a,x.from=l||a,x.item=i||a,x.clone=s,x.oldIndex=c,x.newIndex=h,x.oldDraggableIndex=m,x.newDraggableIndex=g,x.originalEvent=f,x.pullMode=w?w.lastPutMode:void 0;var R=rt(rt({},E),ne.getEventProperties(n,t));for(var Z in R)x[Z]=R[Z];a&&a.dispatchEvent(x),H[Q]&&H[Q].call(t,x)}}var ji=["evt"],Y=function(t,a){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.evt,s=Ai(n,ji);ne.pluginEvent.bind(k)(t,a,rt({dragEl:v,parentEl:C,ghostEl:T,rootEl:A,nextEl:Mt,lastDownEl:ue,cloneEl:D,cloneHidden:gt,dragStarted:Ft,putSortable:O,activeSortable:k.active,originalEvent:i,oldIndex:Pt,oldDraggableIndex:Kt,newIndex:W,newDraggableIndex:vt,hideGhostForTarget:Sn,unhideGhostForTarget:kn,cloneNowHidden:function(){gt=!0},cloneNowShown:function(){gt=!1},dispatchSortableEvent:function(l){V({sortable:a,name:l,originalEvent:i})}},s))};function V(e){Vi(rt({putSortable:O,cloneEl:D,targetEl:v,rootEl:A,oldIndex:Pt,oldDraggableIndex:Kt,newIndex:W,newDraggableIndex:vt},e))}var v,C,T,A,Mt,ue,D,gt,Pt,W,Kt,vt,oe,O,Ct=!1,ve=!1,ge=[],Et,tt,Ve,je,Ia,Ha,Ft,At,Qt,Zt=!1,le=!1,pe,N,Ye=[],ta=!1,be=[],De=typeof document<"u",ce=ua,Oa=ae||ht?"cssFloat":"float",Yi=De&&!un&&!ua&&"draggable"in document.createElement("div"),yn=(function(){if(De){if(ht)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}})(),wn=function(t,a){var n=S(t),i=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),s=It(t,0,a),r=It(t,1,a),l=s&&S(s),c=r&&S(r),h=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+q(s).width,m=c&&parseInt(c.marginLeft)+parseInt(c.marginRight)+q(r).width;if(n.display==="flex")return n.flexDirection==="column"||n.flexDirection==="column-reverse"?"vertical":"horizontal";if(n.display==="grid")return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(s&&l.float&&l.float!=="none"){var g=l.float==="left"?"left":"right";return r&&(c.clear==="both"||c.clear===g)?"vertical":"horizontal"}return s&&(l.display==="block"||l.display==="flex"||l.display==="table"||l.display==="grid"||h>=i&&n[Oa]==="none"||r&&n[Oa]==="none"&&h+m>i)?"vertical":"horizontal"},Bi=function(t,a,n){var i=n?t.left:t.top,s=n?t.right:t.bottom,r=n?t.width:t.height,l=n?a.left:a.top,c=n?a.right:a.bottom,h=n?a.width:a.height;return i===l||s===c||i+r/2===l+h/2},Fi=function(t,a){var n;return ge.some(function(i){var s=i[B].options.emptyInsertThreshold;if(!(!s||pa(i))){var r=q(i),l=t>=r.left-s&&t<=r.right+s,c=a>=r.top-s&&a<=r.bottom+s;if(l&&c)return n=i}}),n},$n=function(t){function a(s,r){return function(l,c,h,m){var g=l.options.group.name&&c.options.group.name&&l.options.group.name===c.options.group.name;if(s==null&&(r||g))return!0;if(s==null||s===!1)return!1;if(r&&s==="clone")return s;if(typeof s=="function")return a(s(l,c,h,m),r)(l,c,h,m);var f=(r?l:c).options.group.name;return s===!0||typeof s=="string"&&s===f||s.join&&s.indexOf(f)>-1}}var n={},i=t.group;(!i||Ze(i)!="object")&&(i={name:i}),n.name=i.name,n.checkPull=a(i.pull,!0),n.checkPut=a(i.put),n.revertClone=i.revertClone,t.group=n},Sn=function(){!yn&&T&&S(T,"display","none")},kn=function(){!yn&&T&&S(T,"display","")};De&&!un&&document.addEventListener("click",function(e){if(ve)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),ve=!1,!1},!0);var Tt=function(t){if(v){t=t.touches?t.touches[0]:t;var a=Fi(t.clientX,t.clientY);if(a){var n={};for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);n.target=n.rootEl=a,n.preventDefault=void 0,n.stopPropagation=void 0,a[B]._onDragOver(n)}}},Ui=function(t){v&&v.parentNode[B]._isOutsideThisEl(t.target)};function k(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=pt({},t),e[B]=this;var a={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return wn(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(r,l){r.setData("Text",l.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:k.supportPointer!==!1&&"PointerEvent"in window&&(!Gt||ua),emptyInsertThreshold:5};ne.initializePlugins(this,e,a);for(var n in a)!(n in t)&&(t[n]=a[n]);$n(t);for(var i in this)i.charAt(0)==="_"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this));this.nativeDraggable=t.forceFallback?!1:Yi,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?_(e,"pointerdown",this._onTapStart):(_(e,"mousedown",this._onTapStart),_(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(_(e,"dragover",this),_(e,"dragenter",this)),ge.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),pt(this,Oi())}k.prototype={constructor:k,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(At=null)},_getDirection:function(t,a){return typeof this.options.direction=="function"?this.options.direction.call(this,t,a,v):this.options.direction},_onTapStart:function(t){if(t.cancelable){var a=this,n=this.el,i=this.options,s=i.preventOnFilter,r=t.type,l=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,c=(l||t).target,h=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||c,m=i.filter;if(ts(n),!v&&!(/mousedown|pointerdown/.test(r)&&t.button!==0||i.disabled)&&!h.isContentEditable&&!(!this.nativeDraggable&&Gt&&c&&c.tagName.toUpperCase()==="SELECT")&&(c=et(c,i.draggable,n,!1),!(c&&c.animated)&&ue!==c)){if(Pt=G(c),Kt=G(c,i.draggable),typeof m=="function"){if(m.call(this,t,c,this)){V({sortable:a,rootEl:h,name:"filter",targetEl:c,toEl:n,fromEl:n}),Y("filter",a,{evt:t}),s&&t.preventDefault();return}}else if(m&&(m=m.split(",").some(function(g){if(g=et(h,g.trim(),n,!1),g)return V({sortable:a,rootEl:g,name:"filter",targetEl:c,fromEl:n,toEl:n}),Y("filter",a,{evt:t}),!0}),m)){s&&t.preventDefault();return}i.handle&&!et(h,i.handle,n,!1)||this._prepareDragStart(t,l,c)}}},_prepareDragStart:function(t,a,n){var i=this,s=i.el,r=i.options,l=s.ownerDocument,c;if(n&&!v&&n.parentNode===s){var h=q(n);if(A=s,v=n,C=v.parentNode,Mt=v.nextSibling,ue=n,oe=r.group,k.dragged=v,Et={target:v,clientX:(a||t).clientX,clientY:(a||t).clientY},Ia=Et.clientX-h.left,Ha=Et.clientY-h.top,this._lastX=(a||t).clientX,this._lastY=(a||t).clientY,v.style["will-change"]="all",c=function(){if(Y("delayEnded",i,{evt:t}),k.eventCanceled){i._onDrop();return}i._disableDelayedDragEvents(),!Ca&&i.nativeDraggable&&(v.draggable=!0),i._triggerDragStart(t,a),V({sortable:i,name:"choose",originalEvent:t}),X(v,r.chosenClass,!0)},r.ignore.split(",").forEach(function(m){fn(v,m.trim(),Be)}),_(l,"dragover",Tt),_(l,"mousemove",Tt),_(l,"touchmove",Tt),r.supportPointer?(_(l,"pointerup",i._onDrop),!this.nativeDraggable&&_(l,"pointercancel",i._onDrop)):(_(l,"mouseup",i._onDrop),_(l,"touchend",i._onDrop),_(l,"touchcancel",i._onDrop)),Ca&&this.nativeDraggable&&(this.options.touchStartThreshold=4,v.draggable=!0),Y("delayStart",this,{evt:t}),r.delay&&(!r.delayOnTouchOnly||a)&&(!this.nativeDraggable||!(ae||ht))){if(k.eventCanceled){this._onDrop();return}r.supportPointer?(_(l,"pointerup",i._disableDelayedDrag),_(l,"pointercancel",i._disableDelayedDrag)):(_(l,"mouseup",i._disableDelayedDrag),_(l,"touchend",i._disableDelayedDrag),_(l,"touchcancel",i._disableDelayedDrag)),_(l,"mousemove",i._delayedDragTouchMoveHandler),_(l,"touchmove",i._delayedDragTouchMoveHandler),r.supportPointer&&_(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(c,r.delay)}else c()}},_delayedDragTouchMoveHandler:function(t){var a=t.touches?t.touches[0]:t;Math.max(Math.abs(a.clientX-this._lastX),Math.abs(a.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){v&&Be(v),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;L(t,"mouseup",this._disableDelayedDrag),L(t,"touchend",this._disableDelayedDrag),L(t,"touchcancel",this._disableDelayedDrag),L(t,"pointerup",this._disableDelayedDrag),L(t,"pointercancel",this._disableDelayedDrag),L(t,"mousemove",this._delayedDragTouchMoveHandler),L(t,"touchmove",this._delayedDragTouchMoveHandler),L(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,a){a=a||t.pointerType=="touch"&&t,!this.nativeDraggable||a?this.options.supportPointer?_(document,"pointermove",this._onTouchMove):a?_(document,"touchmove",this._onTouchMove):_(document,"mousemove",this._onTouchMove):(_(v,"dragend",this),_(A,"dragstart",this._onDragStart));try{document.selection?he(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,a){if(Ct=!1,A&&v){Y("dragStarted",this,{evt:a}),this.nativeDraggable&&_(document,"dragover",Ui);var n=this.options;!t&&X(v,n.dragClass,!1),X(v,n.ghostClass,!0),k.active=this,t&&this._appendGhost(),V({sortable:this,name:"start",originalEvent:a})}else this._nulling()},_emulateDragOver:function(){if(tt){this._lastX=tt.clientX,this._lastY=tt.clientY,Sn();for(var t=document.elementFromPoint(tt.clientX,tt.clientY),a=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(tt.clientX,tt.clientY),t!==a);)a=t;if(v.parentNode[B]._isOutsideThisEl(t),a)do{if(a[B]){var n=void 0;if(n=a[B]._onDragOver({clientX:tt.clientX,clientY:tt.clientY,target:t,rootEl:a}),n&&!this.options.dragoverBubble)break}t=a}while(a=hn(a));kn()}},_onTouchMove:function(t){if(Et){var a=this.options,n=a.fallbackTolerance,i=a.fallbackOffset,s=t.touches?t.touches[0]:t,r=T&&qt(T,!0),l=T&&r&&r.a,c=T&&r&&r.d,h=ce&&N&&qa(N),m=(s.clientX-Et.clientX+i.x)/(l||1)+(h?h[0]-Ye[0]:0)/(l||1),g=(s.clientY-Et.clientY+i.y)/(c||1)+(h?h[1]-Ye[1]:0)/(c||1);if(!k.active&&!Ct){if(n&&Math.max(Math.abs(s.clientX-this._lastX),Math.abs(s.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(T){r?(r.e+=m-(Ve||0),r.f+=g-(je||0)):r={a:1,b:0,c:0,d:1,e:m,f:g};var f="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");S(T,"webkitTransform",f),S(T,"mozTransform",f),S(T,"msTransform",f),S(T,"transform",f),Ve=m,je=g,tt=s}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!T){var t=this.options.fallbackOnBody?document.body:A,a=q(v,!0,ce,!0,t),n=this.options;if(ce){for(N=t;S(N,"position")==="static"&&S(N,"transform")==="none"&&N!==document;)N=N.parentNode;N!==document.body&&N!==document.documentElement?(N===document&&(N=st()),a.top+=N.scrollTop,a.left+=N.scrollLeft):N=st(),Ye=qa(N)}T=v.cloneNode(!0),X(T,n.ghostClass,!1),X(T,n.fallbackClass,!0),X(T,n.dragClass,!0),S(T,"transition",""),S(T,"transform",""),S(T,"box-sizing","border-box"),S(T,"margin",0),S(T,"top",a.top),S(T,"left",a.left),S(T,"width",a.width),S(T,"height",a.height),S(T,"opacity","0.8"),S(T,"position",ce?"absolute":"fixed"),S(T,"zIndex","100000"),S(T,"pointerEvents","none"),k.ghost=T,t.appendChild(T),S(T,"transform-origin",Ia/parseInt(T.style.width)*100+"% "+Ha/parseInt(T.style.height)*100+"%")}},_onDragStart:function(t,a){var n=this,i=t.dataTransfer,s=n.options;if(Y("dragStart",this,{evt:t}),k.eventCanceled){this._onDrop();return}Y("setupClone",this),k.eventCanceled||(D=gn(v),D.removeAttribute("id"),D.draggable=!1,D.style["will-change"]="",this._hideClone(),X(D,this.options.chosenClass,!1),k.clone=D),n.cloneId=he(function(){Y("clone",n),!k.eventCanceled&&(n.options.removeCloneOnHide||A.insertBefore(D,v),n._hideClone(),V({sortable:n,name:"clone"}))}),!a&&X(v,s.dragClass,!0),a?(ve=!0,n._loopId=setInterval(n._emulateDragOver,50)):(L(document,"mouseup",n._onDrop),L(document,"touchend",n._onDrop),L(document,"touchcancel",n._onDrop),i&&(i.effectAllowed="move",s.setData&&s.setData.call(n,i,v)),_(document,"drop",n),S(v,"transform","translateZ(0)")),Ct=!0,n._dragStartId=he(n._dragStarted.bind(n,a,t)),_(document,"selectstart",n),Ft=!0,window.getSelection().removeAllRanges(),Gt&&S(document.body,"user-select","none")},_onDragOver:function(t){var a=this.el,n=t.target,i,s,r,l=this.options,c=l.group,h=k.active,m=oe===c,g=l.sort,f=O||h,w,E=this,x=!1;if(ta)return;function H(Yt,Wn){Y(Yt,E,rt({evt:t,isOwner:m,axis:w?"vertical":"horizontal",revert:r,dragRect:i,targetRect:s,canSort:g,fromSortable:f,target:n,completed:R,onMove:function(Ma,Gn){return de(A,a,v,i,Ma,q(Ma),t,Gn)},changed:Z},Wn))}function Q(){H("dragOverAnimationCapture"),E.captureAnimationState(),E!==f&&f.captureAnimationState()}function R(Yt){return H("dragOverCompleted",{insertion:Yt}),Yt&&(m?h._hideClone():h._showClone(E),E!==f&&(X(v,O?O.options.ghostClass:h.options.ghostClass,!1),X(v,l.ghostClass,!0)),O!==E&&E!==k.active?O=E:E===k.active&&O&&(O=null),f===E&&(E._ignoreWhileAnimating=n),E.animateAll(function(){H("dragOverAnimationComplete"),E._ignoreWhileAnimating=null}),E!==f&&(f.animateAll(),f._ignoreWhileAnimating=null)),(n===v&&!v.animated||n===a&&!n.animated)&&(At=null),!l.dragoverBubble&&!t.rootEl&&n!==document&&(v.parentNode[B]._isOutsideThisEl(t.target),!Yt&&Tt(t)),!l.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),x=!0}function Z(){W=G(v),vt=G(v,l.draggable),V({sortable:E,name:"change",toEl:a,newIndex:W,newDraggableIndex:vt,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),n=et(n,l.draggable,a,!0),H("dragOver"),k.eventCanceled)return x;if(v.contains(t.target)||n.animated&&n.animatingX&&n.animatingY||E._ignoreWhileAnimating===n)return R(!1);if(ve=!1,h&&!l.disabled&&(m?g||(r=C!==A):O===this||(this.lastPutMode=oe.checkPull(this,h,v,t))&&c.checkPut(this,h,v,t))){if(w=this._getDirection(t,n)==="vertical",i=q(v),H("dragOverValid"),k.eventCanceled)return x;if(r)return C=A,Q(),this._hideClone(),H("revert"),k.eventCanceled||(Mt?A.insertBefore(v,Mt):A.appendChild(v)),R(!0);var F=pa(a,l.draggable);if(!F||Ji(t,w,this)&&!F.animated){if(F===v)return R(!1);if(F&&a===t.target&&(n=F),n&&(s=q(n)),de(A,a,v,i,n,s,t,!!n)!==!1)return Q(),F&&F.nextSibling?a.insertBefore(v,F.nextSibling):a.appendChild(v),C=a,Z(),R(!0)}else if(F&&Gi(t,w,this)){var $t=It(a,0,l,!0);if($t===v)return R(!1);if(n=$t,s=q(n),de(A,a,v,i,n,s,t,!1)!==!1)return Q(),a.insertBefore(v,$t),C=a,Z(),R(!0)}else if(n.parentNode===a){s=q(n);var at=0,St,Nt=v.parentNode!==a,U=!Bi(v.animated&&v.toRect||i,n.animated&&n.toRect||s,w),Rt=w?"top":"left",ft=za(n,"top","top")||za(v,"top","top"),Vt=ft?ft.scrollTop:void 0;At!==n&&(St=s[Rt],Zt=!1,le=!U&&l.invertSwap||Nt),at=Ki(t,n,s,w,U?1:l.swapThreshold,l.invertedSwapThreshold==null?l.swapThreshold:l.invertedSwapThreshold,le,At===n);var dt;if(at!==0){var kt=G(v);do kt-=at,dt=C.children[kt];while(dt&&(S(dt,"display")==="none"||dt===T))}if(at===0||dt===n)return R(!1);At=n,Qt=at;var jt=n.nextElementSibling,mt=!1;mt=at===1;var re=de(A,a,v,i,n,s,t,mt);if(re!==!1)return(re===1||re===-1)&&(mt=re===1),ta=!0,setTimeout(Wi,30),Q(),mt&&!jt?a.appendChild(v):n.parentNode.insertBefore(v,mt?jt:n),ft&&vn(ft,0,Vt-ft.scrollTop),C=v.parentNode,St!==void 0&&!le&&(pe=Math.abs(St-q(n)[Rt])),Z(),R(!0)}if(a.contains(v))return R(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){L(document,"mousemove",this._onTouchMove),L(document,"touchmove",this._onTouchMove),L(document,"pointermove",this._onTouchMove),L(document,"dragover",Tt),L(document,"mousemove",Tt),L(document,"touchmove",Tt)},_offUpEvents:function(){var t=this.el.ownerDocument;L(t,"mouseup",this._onDrop),L(t,"touchend",this._onDrop),L(t,"pointerup",this._onDrop),L(t,"pointercancel",this._onDrop),L(t,"touchcancel",this._onDrop),L(document,"selectstart",this)},_onDrop:function(t){var a=this.el,n=this.options;if(W=G(v),vt=G(v,n.draggable),Y("drop",this,{evt:t}),C=v&&v.parentNode,W=G(v),vt=G(v,n.draggable),k.eventCanceled){this._nulling();return}Ct=!1,le=!1,Zt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),ea(this.cloneId),ea(this._dragStartId),this.nativeDraggable&&(L(document,"drop",this),L(a,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Gt&&S(document.body,"user-select",""),S(v,"transform",""),t&&(Ft&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),T&&T.parentNode&&T.parentNode.removeChild(T),(A===C||O&&O.lastPutMode!=="clone")&&D&&D.parentNode&&D.parentNode.removeChild(D),v&&(this.nativeDraggable&&L(v,"dragend",this),Be(v),v.style["will-change"]="",Ft&&!Ct&&X(v,O?O.options.ghostClass:this.options.ghostClass,!1),X(v,this.options.chosenClass,!1),V({sortable:this,name:"unchoose",toEl:C,newIndex:null,newDraggableIndex:null,originalEvent:t}),A!==C?(W>=0&&(V({rootEl:C,name:"add",toEl:C,fromEl:A,originalEvent:t}),V({sortable:this,name:"remove",toEl:C,originalEvent:t}),V({rootEl:C,name:"sort",toEl:C,fromEl:A,originalEvent:t}),V({sortable:this,name:"sort",toEl:C,originalEvent:t})),O&&O.save()):W!==Pt&&W>=0&&(V({sortable:this,name:"update",toEl:C,originalEvent:t}),V({sortable:this,name:"sort",toEl:C,originalEvent:t})),k.active&&((W==null||W===-1)&&(W=Pt,vt=Kt),V({sortable:this,name:"end",toEl:C,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){Y("nulling",this),A=v=C=T=Mt=D=ue=gt=Et=tt=Ft=W=vt=Pt=Kt=At=Qt=O=oe=k.dragged=k.ghost=k.clone=k.active=null;var t=this.el;be.forEach(function(a){t.contains(a)&&(a.checked=!0)}),be.length=Ve=je=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":v&&(this._onDragOver(t),Xi(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],a,n=this.el.children,i=0,s=n.length,r=this.options;i<s;i++)a=n[i],et(a,r.draggable,this.el,!1)&&t.push(a.getAttribute(r.dataIdAttr)||Zi(a));return t},sort:function(t,a){var n={},i=this.el;this.toArray().forEach(function(s,r){var l=i.children[r];et(l,this.options.draggable,i,!1)&&(n[s]=l)},this),a&&this.captureAnimationState(),t.forEach(function(s){n[s]&&(i.removeChild(n[s]),i.appendChild(n[s]))}),a&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,a){return et(t,a||this.options.draggable,this.el,!1)},option:function(t,a){var n=this.options;if(a===void 0)return n[t];var i=ne.modifyOption(this,t,a);typeof i<"u"?n[t]=i:n[t]=a,t==="group"&&$n(n)},destroy:function(){Y("destroy",this);var t=this.el;t[B]=null,L(t,"mousedown",this._onTapStart),L(t,"touchstart",this._onTapStart),L(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(L(t,"dragover",this),L(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(a){a.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),ge.splice(ge.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!gt){if(Y("hideClone",this),k.eventCanceled)return;S(D,"display","none"),this.options.removeCloneOnHide&&D.parentNode&&D.parentNode.removeChild(D),gt=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(gt){if(Y("showClone",this),k.eventCanceled)return;v.parentNode==A&&!this.options.group.revertClone?A.insertBefore(D,v):Mt?A.insertBefore(D,Mt):A.appendChild(D),this.options.group.revertClone&&this.animate(v,D),S(D,"display",""),gt=!1}}};function Xi(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function de(e,t,a,n,i,s,r,l){var c,h=e[B],m=h.options.onMove,g;return window.CustomEvent&&!ht&&!ae?c=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(c=document.createEvent("Event"),c.initEvent("move",!0,!0)),c.to=t,c.from=e,c.dragged=a,c.draggedRect=n,c.related=i||t,c.relatedRect=s||q(t),c.willInsertAfter=l,c.originalEvent=r,e.dispatchEvent(c),m&&(g=m.call(h,c,r)),g}function Be(e){e.draggable=!1}function Wi(){ta=!1}function Gi(e,t,a){var n=q(It(a.el,0,a.options,!0)),i=bn(a.el,a.options,T),s=10;return t?e.clientX<i.left-s||e.clientY<n.top&&e.clientX<n.right:e.clientY<i.top-s||e.clientY<n.bottom&&e.clientX<n.left}function Ji(e,t,a){var n=q(pa(a.el,a.options.draggable)),i=bn(a.el,a.options,T),s=10;return t?e.clientX>i.right+s||e.clientY>n.bottom&&e.clientX>n.left:e.clientY>i.bottom+s||e.clientX>n.right&&e.clientY>n.top}function Ki(e,t,a,n,i,s,r,l){var c=n?e.clientY:e.clientX,h=n?a.height:a.width,m=n?a.top:a.left,g=n?a.bottom:a.right,f=!1;if(!r){if(l&&pe<h*i){if(!Zt&&(Qt===1?c>m+h*s/2:c<g-h*s/2)&&(Zt=!0),Zt)f=!0;else if(Qt===1?c<m+pe:c>g-pe)return-Qt}else if(c>m+h*(1-i)/2&&c<g-h*(1-i)/2)return Qi(t)}return f=f||r,f&&(c<m+h*s/2||c>g-h*s/2)?c>m+h/2?1:-1:0}function Qi(e){return G(v)<G(e)?1:-1}function Zi(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,a=t.length,n=0;a--;)n+=t.charCodeAt(a);return n.toString(36)}function ts(e){be.length=0;for(var t=e.getElementsByTagName("input"),a=t.length;a--;){var n=t[a];n.checked&&be.push(n)}}function he(e){return setTimeout(e,0)}function ea(e){return clearTimeout(e)}De&&_(document,"touchmove",function(e){(k.active||Ct)&&e.cancelable&&e.preventDefault()});k.utils={on:_,off:L,css:S,find:fn,is:function(t,a){return!!et(t,a,t,!1)},extend:Ii,throttle:mn,closest:et,toggleClass:X,clone:gn,index:G,nextTick:he,cancelNextTick:ea,detectDirection:wn,getChild:It,expando:B};k.get=function(e){return e[B]};k.mount=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];t[0].constructor===Array&&(t=t[0]),t.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(k.utils=rt(rt({},k.utils),n.utils)),ne.mount(n)})};k.create=function(e,t){return new k(e,t)};k.version=zi;var z=[],Ut,aa,na=!1,Fe,Ue,ye,Xt;function es(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(a){var n=a.originalEvent;this.sortable.nativeDraggable?_(document,"dragover",this._handleAutoScroll):this.options.supportPointer?_(document,"pointermove",this._handleFallbackAutoScroll):n.touches?_(document,"touchmove",this._handleFallbackAutoScroll):_(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(a){var n=a.originalEvent;!this.options.dragOverBubble&&!n.rootEl&&this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?L(document,"dragover",this._handleAutoScroll):(L(document,"pointermove",this._handleFallbackAutoScroll),L(document,"touchmove",this._handleFallbackAutoScroll),L(document,"mousemove",this._handleFallbackAutoScroll)),Na(),fe(),Hi()},nulling:function(){ye=aa=Ut=na=Xt=Fe=Ue=null,z.length=0},_handleFallbackAutoScroll:function(a){this._handleAutoScroll(a,!0)},_handleAutoScroll:function(a,n){var i=this,s=(a.touches?a.touches[0]:a).clientX,r=(a.touches?a.touches[0]:a).clientY,l=document.elementFromPoint(s,r);if(ye=a,n||this.options.forceAutoScrollFallback||ae||ht||Gt){Xe(a,this.options,l,n);var c=bt(l,!0);na&&(!Xt||s!==Fe||r!==Ue)&&(Xt&&Na(),Xt=setInterval(function(){var h=bt(document.elementFromPoint(s,r),!0);h!==c&&(c=h,fe()),Xe(a,i.options,h,n)},10),Fe=s,Ue=r)}else{if(!this.options.bubbleScroll||bt(l,!0)===st()){fe();return}Xe(a,this.options,bt(l,!1),!1)}}},pt(e,{pluginName:"scroll",initializeByDefault:!0})}function fe(){z.forEach(function(e){clearInterval(e.pid)}),z=[]}function Na(){clearInterval(Xt)}var Xe=mn(function(e,t,a,n){if(t.scroll){var i=(e.touches?e.touches[0]:e).clientX,s=(e.touches?e.touches[0]:e).clientY,r=t.scrollSensitivity,l=t.scrollSpeed,c=st(),h=!1,m;aa!==a&&(aa=a,fe(),Ut=t.scroll,m=t.scrollFn,Ut===!0&&(Ut=bt(a,!0)));var g=0,f=Ut;do{var w=f,E=q(w),x=E.top,H=E.bottom,Q=E.left,R=E.right,Z=E.width,F=E.height,$t=void 0,at=void 0,St=w.scrollWidth,Nt=w.scrollHeight,U=S(w),Rt=w.scrollLeft,ft=w.scrollTop;w===c?($t=Z<St&&(U.overflowX==="auto"||U.overflowX==="scroll"||U.overflowX==="visible"),at=F<Nt&&(U.overflowY==="auto"||U.overflowY==="scroll"||U.overflowY==="visible")):($t=Z<St&&(U.overflowX==="auto"||U.overflowX==="scroll"),at=F<Nt&&(U.overflowY==="auto"||U.overflowY==="scroll"));var Vt=$t&&(Math.abs(R-i)<=r&&Rt+Z<St)-(Math.abs(Q-i)<=r&&!!Rt),dt=at&&(Math.abs(H-s)<=r&&ft+F<Nt)-(Math.abs(x-s)<=r&&!!ft);if(!z[g])for(var kt=0;kt<=g;kt++)z[kt]||(z[kt]={});(z[g].vx!=Vt||z[g].vy!=dt||z[g].el!==w)&&(z[g].el=w,z[g].vx=Vt,z[g].vy=dt,clearInterval(z[g].pid),(Vt!=0||dt!=0)&&(h=!0,z[g].pid=setInterval((function(){n&&this.layer===0&&k.active._onTouchMove(ye);var jt=z[this.layer].vy?z[this.layer].vy*l:0,mt=z[this.layer].vx?z[this.layer].vx*l:0;typeof m=="function"&&m.call(k.dragged.parentNode[B],mt,jt,e,ye,z[this.layer].el)!=="continue"||vn(z[this.layer].el,mt,jt)}).bind({layer:g}),24))),g++}while(t.bubbleScroll&&f!==c&&(f=bt(f,!1)));na=h}},30),En=function(t){var a=t.originalEvent,n=t.putSortable,i=t.dragEl,s=t.activeSortable,r=t.dispatchSortableEvent,l=t.hideGhostForTarget,c=t.unhideGhostForTarget;if(a){var h=n||s;l();var m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,g=document.elementFromPoint(m.clientX,m.clientY);c(),h&&!h.el.contains(g)&&(r("spill"),this.onSpill({dragEl:i,putSortable:n}))}};function ha(){}ha.prototype={startIndex:null,dragStart:function(t){var a=t.oldDraggableIndex;this.startIndex=a},onSpill:function(t){var a=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var i=It(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(a,i):this.sortable.el.appendChild(a),this.sortable.animateAll(),n&&n.animateAll()},drop:En};pt(ha,{pluginName:"revertOnSpill"});function fa(){}fa.prototype={onSpill:function(t){var a=t.dragEl,n=t.putSortable,i=n||this.sortable;i.captureAnimationState(),a.parentNode&&a.parentNode.removeChild(a),i.animateAll()},drop:En};pt(fa,{pluginName:"removeOnSpill"});k.mount(new es);k.mount(fa,ha);const Tn=[32,64,125,250,500,1e3,2e3,4e3,8e3,16e3],ia={flat:{name:"Ровно",gains:[0,0,0,0,0,0,0,0,0,0]},rock:{name:"Рок",gains:[5,4,2,-1,-2,0,2,3,4,5]},pop:{name:"Поп",gains:[-1,0,2,4,4,2,0,-1,-2,-3]},jazz:{name:"Джаз",gains:[4,3,1,2,-1,-1,0,2,3,4]},bass:{name:"Бас",gains:[8,7,5,2,0,-1,-2,-3,-4,-5]},vocal:{name:"Вокал",gains:[-3,-2,0,3,5,5,3,1,0,-1]},electronic:{name:"Электроника",gains:[5,4,1,0,-2,2,1,2,5,6]}},Ra="rustream.volume",Va="rustream.eq",ja="rustream.mode",We="rustream.playback.queue",Ya="rustream.playback.position";function Ba(e,t){try{return JSON.parse(localStorage.getItem(e))??t}catch{return t}}class as extends EventTarget{constructor(){super(),this.audio=new Audio,this.audio.preload="auto",this.audio.crossOrigin="anonymous",this.queue=[],this.index=-1,this.shuffle=!1,this.repeat="off",this.track=null,this.playId=null,this.scrobbled=!1,this.liveMode=!1,this.mode=Ba(ja,{shuffle:!1,repeat:"off"}),this.shuffle=!!this.mode.shuffle,this.repeat=this.mode.repeat||"off",this.volume=Number(localStorage.getItem(Ra)??80),this.audio.volume=Math.min(1,Math.max(0,this.volume/100)),this.eqState=Ba(Va,{enabled:!0,preset:"flat",gains:[...ia.flat.gains]}),this.audioContext=null,this.filters=[],this.sourceNode=null,this._lastPositionWrite=0,this._restoredPause=!1,this._bindAudio(),window.addEventListener("pagehide",()=>this._storePosition(!0))}_bindAudio(){this.audio.addEventListener("timeupdate",()=>{this._maybeScrobble(),this._storePosition(),this._emit("time")}),this.audio.addEventListener("durationchange",()=>this._emit("time")),this.audio.addEventListener("progress",()=>this._emit("buffer")),this.audio.addEventListener("loadedmetadata",()=>this._emit("time")),this.audio.addEventListener("play",()=>{!this.playId&&this.track&&this._restoredPause&&(this._restoredPause=!1,this._beginPlay(this.track)),this._storePosition(!0),this._emit("state")}),this.audio.addEventListener("pause",()=>{this._storePosition(!0),this._emit("state")}),this.audio.addEventListener("volumechange",()=>this._emit("volume")),this.audio.addEventListener("ended",()=>this._onEnded()),this.audio.addEventListener("waiting",()=>this._emit("state")),this.audio.addEventListener("playing",()=>this._emit("state")),this.audio.addEventListener("error",()=>{if(!this.track)return;const a=this.track.source==="ytm"||String(this.track.id).startsWith("ytm-")?`YouTube не отдал поток для «${this.track.title}». Проверьте, что трек доступен, и обновите cookies в профиле.`:`Не удалось воспроизвести «${this.track.title}». Файл повреждён или недоступен.`;this.dispatchEvent(new CustomEvent("error",{detail:a}))})}_emit(t){this.dispatchEvent(new CustomEvent(t))}_initAudioGraph(){if(this.audioContext)return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.audioContext=new t,this.sourceNode=this.audioContext.createMediaElementSource(this.audio),this.filters=Tn.map(n=>{const i=this.audioContext.createBiquadFilter();return i.type="peaking",i.frequency.value=n,i.Q.value=1.1,i.gain.value=0,i});let a=this.sourceNode;for(const n of this.filters)a.connect(n),a=n;a.connect(this.audioContext.destination),this._applyEq()}_ensureRunning(){var t;this._initAudioGraph(),((t=this.audioContext)==null?void 0:t.state)==="suspended"&&this.audioContext.resume().catch(()=>{})}_applyEq(){this.filters.length&&this.filters.forEach((t,a)=>{t.gain.value=this.eqState.enabled&&this.eqState.gains[a]||0})}setEqEnabled(t){this.eqState.enabled=t,this._persistEq(),this._applyEq(),this._emit("eq")}setEqGain(t,a){this.eqState.gains[t]=Number(a),this.eqState.preset="custom",this._persistEq(),this._applyEq(),this._emit("eq")}applyEqPreset(t){const a=ia[t];a&&(this.eqState.preset=t,this.eqState.gains=[...a.gains],this._persistEq(),this._applyEq(),this._emit("eq"))}resetEq(){this.applyEqPreset("flat")}_persistEq(){localStorage.setItem(Va,JSON.stringify(this.eqState))}async playTracks(t,a=0,{shuffle:n=!1}={}){t!=null&&t.length&&(this._finalizePlay(!1),this.queue=[...t],n&&(this.shuffle=!0,this._persistMode()),this.index=Math.min(Math.max(0,a),this.queue.length-1),this._storeQueue(),await this._load(this.queue[this.index],!0))}async playAt(t){t<0||t>=this.queue.length||(this.index=t,this._storeQueue(),await this._load(this.queue[t],!0))}async _load(t,a){if(t&&(this._restoredPause=!1,this._finalizePlay(!1),this.track=t,this.audio.src=Ie(t.id),this._beginPlay(t),this._updateMediaSession(t),this.dispatchEvent(new CustomEvent("track",{detail:t})),a)){this._ensureRunning();try{await this.audio.play()}catch{}}}async toggle(){this.track&&(this._ensureRunning(),this.audio.paused?await this.audio.play().catch(()=>{}):this.audio.pause())}pause(){this.audio.pause()}async next(t=!1){if(!this.queue.length)return;if(t&&this.repeat==="one"){this.audio.currentTime=0,await this.audio.play().catch(()=>{});return}let a;if(this.shuffle?a=this.queue.length>1?this._randomIndex():this.index:a=this.index+1,a>=this.queue.length)if(this.repeat==="all")a=0;else{this.audio.pause();return}await this.playAt(a)}async previous(){if(!this.queue.length)return;if(this.audio.currentTime>3){this.audio.currentTime=0;return}const t=this.index>0?this.index-1:this.queue.length-1;await this.playAt(t)}moveInQueue(t,a){if(t===a||t<0||a<0||t>=this.queue.length||a>=this.queue.length)return;const[n]=this.queue.splice(t,1);this.queue.splice(a,0,n),this.index===t?this.index=a:t<this.index&&a>=this.index?this.index--:t>this.index&&a<=this.index&&this.index++,this._storeQueue(),this._emit("queue")}_randomIndex(){if(this.queue.length<=1)return this.index;let t=this.index;for(;t===this.index;)t=Math.floor(Math.random()*this.queue.length);return t}async _onEnded(){if(this._finalizePlay(!0),this.repeat==="one"){this.audio.currentTime=0,this._beginPlay(this.track),await this.audio.play().catch(()=>{});return}if(this.index>=this.queue.length-1&&this.repeat==="off"&&!this.shuffle){this._emit("state"),this._emit("queueend");return}await this.next(!0)}async _beginPlay(t){this.playId=null,this.scrobbled=!1;try{const a=await ui(t.id);this.playId=(a==null?void 0:a.playId)||null}catch{}}_maybeScrobble(){if(!this.playId||this.scrobbled)return;const t=this.audio.duration;!Number.isFinite(t)||t<30||(this.audio.currentTime>=t/2||this.audio.currentTime>=240)&&(this.scrobbled=!0,Aa(this.playId,Math.round(this.audio.currentTime*1e3),!0).catch(()=>{}))}_finalizePlay(t){if(!this.playId)return;const a=this.playId;this.playId=null,Aa(a,Math.round((this.audio.currentTime||0)*1e3),t).catch(()=>{})}appendTracks(t){t!=null&&t.length&&(this.queue.push(...t),this._storeQueue())}toggleShuffle(){this.shuffle=!this.shuffle,this._persistMode(),this._emit("mode")}cycleRepeat(){const t=["off","all","one"];this.repeat=t[(t.indexOf(this.repeat)+1)%t.length],this._persistMode(),this._emit("mode")}_persistMode(){localStorage.setItem(ja,JSON.stringify({shuffle:this.shuffle,repeat:this.repeat}))}seekTo(t){const a=this.audio.duration;!Number.isFinite(a)||a<=0||(this.audio.currentTime=Math.min(100,Math.max(0,t))/100*a,this._emit("time"))}seekToSeconds(t){const a=this.audio.duration;!Number.isFinite(a)||a<=0||(this.audio.currentTime=Math.min(a,Math.max(0,t)),this._emit("time"))}removeAt(t){t<0||t>=this.queue.length||t===this.index||(this.queue.splice(t,1),t<this.index&&(this.index-=1),this._storeQueue())}seekBy(t){Number.isFinite(this.audio.duration)&&(this.audio.currentTime=Math.min(this.audio.duration,Math.max(0,this.audio.currentTime+t)),this._emit("time"))}setVolume(t){this.volume=Number(t),this.audio.volume=Math.min(1,Math.max(0,this.volume/100)),this.volume>0&&(this.audio.muted=!1),localStorage.setItem(Ra,String(this.volume))}toggleMute(){this.audio.muted=!this.audio.muted,this._emit("volume")}get currentTime(){return this.audio.currentTime||0}get duration(){return Number.isFinite(this.audio.duration)?this.audio.duration:0}get paused(){return this.audio.paused}get volumePercent(){return this.audio.muted?0:Math.round(this.audio.volume*100)}get buffered(){const t=this.duration;if(!t)return{end:0,percent:0,ahead:0};const a=this.audio.currentTime;let n=0;for(let i=0;i<this.audio.buffered.length;i+=1)this.audio.buffered.start(i)<=a+.5&&(n=Math.max(n,this.audio.buffered.end(i)));return{end:n,percent:Math.min(100,n/t*100),ahead:Math.max(0,n-a)}}estimatedBufferedBytes(){var a;const t=((a=this.track)==null?void 0:a.bitRate)||0;return t?t*1e3*this.buffered.ahead/8:0}_storeQueue(){try{const t={queue:this.queue,index:this.index,liveMode:!!this.liveMode,updatedAt:Date.now()};localStorage.setItem(We,JSON.stringify(t))}catch{}}setLiveMode(t){this.liveMode=!!t,this._storeQueue()}_storePosition(t=!1){if(!this.track)return;const a=Date.now();if(!(!t&&a-this._lastPositionWrite<2e3)){this._lastPositionWrite=a;try{localStorage.setItem(Ya,JSON.stringify({trackId:this.track.id,position:this.currentTime||0,paused:this.audio.paused,updatedAt:a}))}catch{}}}snapshotState(){return{queue:this.queue,index:this.index,liveMode:this.liveMode,updatedAt:Date.now()}}localUpdatedAt(){try{const t=JSON.parse(localStorage.getItem(We));return Number(t==null?void 0:t.updatedAt)||0}catch{return 0}}applyRemote(t){var a;return!((a=t==null?void 0:t.queue)!=null&&a.length)||(this.queue=t.queue,this.index=Math.min(Math.max(0,Number(t.index)||0),this.queue.length-1),this.liveMode=!!t.liveMode,this.track=this.queue[this.index],!this.track)?null:(this._restoredPause=!0,this.audio.src=Ie(this.track.id),this._updateMediaSession(this.track),this.dispatchEvent(new CustomEvent("track",{detail:this.track})),this._storeQueue(),{track:this.track,liveMode:this.liveMode})}restore(){var n;let t=null;try{t=JSON.parse(localStorage.getItem(We))}catch{t=null}if(!((n=t==null?void 0:t.queue)!=null&&n.length)||Date.now()-(t.updatedAt||0)>1e3*60*60*24*7)return null;let a=null;try{a=JSON.parse(localStorage.getItem(Ya))}catch{a=null}if(this.queue=t.queue,this.index=Math.min(Math.max(0,Number(t.index)||0),this.queue.length-1),this.liveMode=!!t.liveMode,this.track=this.queue[this.index],!this.track)return null;if(this._restoredPause=!0,this.audio.src=Ie(this.track.id),this._updateMediaSession(this.track),this.dispatchEvent(new CustomEvent("track",{detail:this.track})),(a==null?void 0:a.trackId)===this.track.id&&Number(a.position)>1){const i=()=>{const s=this.audio.duration;Number.isFinite(s)&&a.position<s-3&&(this.audio.currentTime=a.position,this._emit("time"))};this.audio.readyState>=1?i():this.audio.addEventListener("loadedmetadata",i,{once:!0})}return{track:this.track,liveMode:this.liveMode}}clearRestored(){this._restoredPause=!1}_updateMediaSession(t){"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:t.title||"",artist:t.artist||"",album:t.album||"",artwork:t.coverArt?[{src:Lt(t.coverArt,512),sizes:"512x512",type:"image/jpeg"}]:[]}),navigator.mediaSession.setActionHandler("play",()=>this.toggle()),navigator.mediaSession.setActionHandler("pause",()=>this.toggle()),navigator.mediaSession.setActionHandler("previoustrack",()=>this.previous()),navigator.mediaSession.setActionHandler("nexttrack",()=>this.next()))}}function yt(e){if(!Number.isFinite(e)||e<0)return"0:00";const t=Math.floor(e/60),a=Math.floor(e%60);return`${t}:${String(a).padStart(2,"0")}`}function Mn(e){const t=Math.round(e/6e4),a=Math.floor(t/60);return a>0?`${a} ч ${t%60} мин`:`${t} мин`}function we(e){if(!e)return"0 Б";const t=["Б","КБ","МБ","ГБ","ТБ"];let a=e,n=0;for(;a>=1024&&n<t.length-1;)a/=1024,n+=1;return`${a>=10||n===0?Math.round(a):a.toFixed(1)} ${t[n]}`}const p=new as,ns=document.getElementById("app"),o={currentTracks:[],favorites:new Set,dislikes:new Set,favoriteAlbums:new Set,theme:"violet",lyrics:null,lyricsTrackId:null,lyricsRefresh:!1,lyricsActiveKey:null,npTab:"lyrics",npOpen:!1,allTracks:null,artists:null,albums:null,stats:null,playlists:null,me:null,meStats:null,authConfig:null,lastfmConfig:null,liveMode:!1,liveMixes:[],renderSeq:0},$={artists:null,albums:null,tracks:null,stats:null,playlists:null,favorites:null,ratings:null,recent:null,meStats:null,liveMixes:null};ns.innerHTML=`
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
      <a href="#/home" data-nav="home" class="nav-item"><span class="nav-icon">${d("home")}</span><span class="nav-label">Главная</span></a>
      <a href="#/live" data-nav="live" class="nav-item"><span class="nav-icon">${d("radio")}</span><span class="nav-label">Live</span></a>
      <a href="#/ytm" data-nav="ytm" class="nav-item"><span class="nav-icon">${d("ytm")}</span><span class="nav-label">YouTube</span></a>
      <a href="#/artists" data-nav="artists" class="nav-item"><span class="nav-icon">${d("person")}</span><span class="nav-label">Артисты</span></a>
      <a href="#/albums" data-nav="albums" class="nav-item"><span class="nav-icon">${d("album")}</span><span class="nav-label">Альбомы</span></a>
      <a href="#/tracks" data-nav="tracks" class="nav-item"><span class="nav-icon">${d("music")}</span><span class="nav-label">Треки</span></a>
      <a href="#/stats" data-nav="stats" class="nav-item"><span class="nav-icon">${d("chart")}</span><span class="nav-label">Статистика</span></a>
      <a href="#/playlists" data-nav="playlists" class="nav-item"><span class="nav-icon">${d("playlist")}</span><span class="nav-label">Плейлисты</span></a>
      <a href="#/favorites" data-nav="favorites" class="nav-item"><span class="nav-icon">${d("heart")}</span><span class="nav-label">Избранное</span></a>
      <a href="#/profile" data-nav="profile" class="nav-item"><span class="nav-icon">${d("person")}</span><span class="nav-label">Профиль</span></a>
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
        <input type="range" id="volume" min="0" max="100" value="${p.volumePercent}" aria-label="Громкость" />
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
          <input id="np-volume" type="range" min="0" max="100" value="${p.volumePercent}" aria-label="Громкость" />
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
`;const u=(e,t=document)=>t.querySelector(e),K=(e,t=document)=>[...t.querySelectorAll(e)];function b(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ma(e){const t=String(e||"?").trim().split(/\s+/).filter(Boolean);return t.length?t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+t[1][0]).toUpperCase():"?"}function $e(){var e,t;return((e=o.me)==null?void 0:e.displayName)||((t=o.me)==null?void 0:t.username)||"Аккаунт"}function Ln(e){return(e==null?void 0:e.status)===401}function Ot(e){return Ln(e)?(Ht(),!0):!1}function ct(e,{size:t=400,alt:a="",className:n=""}={}){return`<span class="cover ${n}">
    <span class="cover-fallback">${d("music")}</span>
    ${e?`<img src="${Lt(e,t)}" alt="${b(a)}" loading="lazy" decoding="async" />`:""}
  </span>`}function y(e,t="info"){const a=u("#toast");a.textContent=e,a.className=`toast show ${t}`,clearTimeout(y._timer),y._timer=setTimeout(()=>{a.className="toast"},t==="error"?6e3:3200)}function j(){u("#view").innerHTML=`
    <div class="page">
      <div class="skeleton skeleton-title"></div>
      <div class="grid cards">
        ${Array.from({length:8}).map(()=>`<div class="card skeleton-card">
              <div class="skeleton skeleton-cover"></div>
              <div class="skeleton skeleton-line"></div>
              <div class="skeleton skeleton-line short"></div>
            </div>`).join("")}
      </div>
    </div>`}function is(e){u("#view").innerHTML=`
    <div class="page">
      <div class="empty-state">
        <span class="empty-icon">${d("wave")}</span>
        <h2>Что-то пошло не так</h2>
        <p>${b(e)}</p>
        <button class="btn tonal" data-action="reload">Попробовать снова</button>
      </div>
    </div>`}function wt(e,t,{actions:a="",eyebrow:n=""}={}){return`<header class="page-head">
    <div>
      ${n?`<div class="eyebrow">${b(n)}</div>`:""}
      <h1>${b(e)}</h1>
      ${t?`<p class="muted">${t}</p>`:""}
    </div>
    ${a?`<div class="page-actions">${a}</div>`:""}
  </header>`}function ie(e){return`<article class="card" data-action="open" data-href="#/album/${e.id}" tabindex="0">
    <div class="card-cover">${ct(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${b(e.name)}</div>
      <div class="card-sub">${b(e.artist||"Неизвестный артист")}${e.year?` · ${e.year}`:""}</div>
    </div>
    <button class="card-play" data-action="play-album" data-id="${e.id}" title="Слушать альбом">${d("play")}</button>
  </article>`}function va(e){return`<article class="card artist-card" data-action="open" data-href="#/artist/${e.id}" tabindex="0">
    <div class="card-cover round">${ct(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${b(e.name)}</div>
      <div class="card-sub">${e.albumCount??0} ${I(e.albumCount??0,"альбом","альбома","альбомов")}</div>
    </div>
  </article>`}function I(e,t,a,n){const i=e%10,s=e%100;return i===1&&s!==11?t:i>=2&&i<=4&&(s<12||s>14)?a:n}function ss(e){return(e==null?void 0:e.source)==="ytm"?'<span class="track-badge ytm" title="Источник: YouTube Music">YT</span>':`<span class="track-badge">${b(((e==null?void 0:e.suffix)||"flac").toUpperCase())}</span>`}function rs(e,t,{showAlbum:a=!0,showCover:n=!1,playlistId:i=null,rowAction:s="play-row",rowList:r=null}={}){var m;const l=((m=p.track)==null?void 0:m.id)===e.id,c=o.favorites.has(e.id),h=e.track&&e.track>0?e.track:t+1;return`<div class="track-row ${l?"playing":""} ${n?"has-cover":""}" data-action="${s}" data-index="${t}" data-track-id="${b(e.id)}" ${r?`data-list="${r}"`:""} tabindex="0">
    <div class="track-index">
      <span class="track-num">${h}</span>
      <span class="track-eq"><i></i><i></i><i></i></span>
    </div>
    ${n?`<span class="track-cover">${ct(e.coverArt||e.albumId,{size:80})}</span>`:""}
    <div class="track-main">
      <div class="track-title">${b(e.title)}</div>
      <div class="track-sub">${b(e.artist||"")}${a&&e.album?` · ${b(e.album)}`:""}</div>
    </div>
    ${ss(e)}
    <span class="track-duration">${yt(e.duration)}</span>
    <button class="icon-btn row-btn like ${c?"active":""}" data-action="like" data-id="${e.id}" title="В избранное">${d(c?"heart":"heartOutline")}</button>
    <button class="icon-btn row-btn dislike ${o.dislikes.has(e.id)?"active":""}" data-action="dislike" data-id="${e.id}" title="Не нравится">${d("thumbDown")}</button>
    ${i?`<button class="icon-btn row-btn" data-action="remove-from-playlist" data-playlist="${i}" data-index="${t}" title="Убрать из плейлиста">${d("delete")}</button>`:`<button class="icon-btn row-btn" data-action="add-to-playlist" data-id="${e.id}" title="Добавить в плейлист">${d("add")}</button>`}
  </div>`}function ot(e,t={}){return e.length?`<div class="track-list">${e.map((a,n)=>rs(a,n,t)).join("")}</div>`:'<div class="empty-inline">Треков пока нет</div>'}function os(){const e=location.hash.replace(/^#/,"")||"/home",[t,a=""]=e.split("?");return{parts:t.split("/").filter(Boolean),params:new URLSearchParams(a)}}const ls={artist:"artists",album:"albums",playlist:"playlists"},cs=new Set(["artists","albums","tracks","playlists","favorites","stats"]);function ds(e){const t=ls[e]||e;K(".nav-item").forEach(a=>{a.classList.toggle("active",a.dataset.nav===t)}),K(".tab-item").forEach(a=>{const n=a.dataset.tab,i=n===t||n==="library"&&(t==="library"||cs.has(t))||n==="search"&&t==="search";a.classList.toggle("active",i)})}async function P(){const{parts:e,params:t}=os(),a=e[0]||"home";if(a==="register"){ka(t.get("invite")||"");return}if(!o.me){Ht();return}const n=++o.renderSeq;ds(a),u("#view").scrollTop=0;try{a==="home"?await Fa(n):a==="live"?await vs(n):a==="stats"?await gs(n):a==="artists"?await bs(n):a==="artist"?await ys(n,e[1]):a==="albums"?await ws(n):a==="album"?await $s(n,e[1]):a==="tracks"?await Ss(n):a==="playlists"?await ks(n):a==="playlist"?await Ts(n,e[1]):a==="favorites"?await Ms(n):a==="search"?await Ls(n,t.get("q")||""):a==="library"?await Fs(n):a==="profile"?await Us(n):a==="ytm"?await Xs(n):await Fa(n)}catch(i){if(console.error(i),Ot(i))return;n===o.renderSeq&&is(i.message||"Ошибка загрузки")}}async function us(){return $.stats||($.stats=await ii()),$.stats}async function _n(){return $.artists||($.artists=await Jn()),$.artists}async function ps(){return $.albums||($.albums=await Za("alphabeticalByArtist",500)),$.albums}async function ga(){if(!$.tracks){const e=await Kn(500);e.sort((t,a)=>`${t.artist} ${t.album} ${String(t.track).padStart(3,"0")}`.localeCompare(`${a.artist} ${a.album} ${String(a.track).padStart(3,"0")}`,"ru")),$.tracks=e}return $.tracks}async function xn(){if($.favorites||($.favorites=await ni()),o.favorites=new Set(($.favorites.song||[]).map(e=>e.id)),o.favoriteAlbums=new Set(($.favorites.album||[]).map(e=>e.id)),!$.ratings)try{$.ratings=await oi()}catch{$.ratings={liked:[],disliked:[]}}return o.dislikes=new Set(($.ratings.disliked||[]).filter(e=>!o.favorites.has(e))),$.favorites}async function ba(){return $.meStats||($.meStats=await nn()),o.meStats=$.meStats,$.meStats}async function hs(){return $.liveMixes||($.liveMixes=await pi()),o.liveMixes=$.liveMixes,$.liveMixes}async function fs(){$.artists=null,$.albums=null,$.tracks=null,$.stats=null,$.recent=null,$.meStats=null,$.liveMixes=null,y("Библиотека обновлена"),P()}async function Fa(e){var h;j();const[t,a,n,i]=await Promise.all([ba(),$.recent?Promise.resolve($.recent):Za("newest",12),_n(),ga()]);if(e!==o.renderSeq)return;$.recent=a;const s=o.ytmStatus||await Ae().catch(()=>null);o.ytmStatus=s;let r=[];if(s!=null&&s.connected&&(r=await dn(10).catch(()=>[])),e!==o.renderSeq)return;o.ytmLists={...o.ytmLists||{},history:r},o.currentTracks=i;const l=p.track,c=p.queue.length?p.queue:null;u("#view").innerHTML=`
    <div class="page home quick-home">
      <header class="page-head home-head">
        <div>
          <span class="eyebrow"><span class="live-dot"></span>${b(ms())}, ${b($e())}</span>
          <h1>Что послушаем?</h1>
        </div>
        <div class="head-actions">
          <button class="btn primary" data-action="play-all">${d("play")} Слушать всё</button>
          <button class="btn glass" data-action="shuffle-all">${d("shuffle")} Перемешать</button>
          <button class="btn ghost" data-action="start-live">${d("radio")} Live</button>
        </div>
      </header>

      ${l&&c?`<section class="continue-card">
              <span class="continue-cover">${ct(l.coverArt||l.albumId,{size:120,alt:l.title})}</span>
              <span class="continue-main">
                <span class="eyebrow">Продолжить слушать</span>
                <strong>${b(l.title)}</strong>
                <small>${b(l.artist||"")}${p.paused?" · на паузе":" · играет"}</small>
              </span>
              <button class="btn primary" data-action="resume">${d(p.paused?"play":"pause")} ${p.paused?"Продолжить":"Пауза"}</button>
              <a class="btn ghost" href="#/live">${d("queue")} Очередь</a>
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

      ${r.length?`<section class="section">
              <div class="section-head">
                <div>
                  <h2>Из YouTube Music</h2>
                  <p class="muted">Внешний источник — помечено меткой <span class="track-badge ytm inline">YT</span></p>
                </div>
                <a class="text-link" href="#/ytm">Открыть YouTube ${d("next")}</a>
              </div>
              ${ot(r.slice(0,6),{showCover:!0,rowAction:"play-ytm-row",rowList:"history"})}
            </section>`:""}

      <section class="section">
        <div class="section-head">
          <div>
            <h2>Любимые артисты</h2>
            <p class="muted">${(h=t.topArtists)!=null&&h[0]?`Чаще всего вы слушаете ${b(t.topArtists[0].name)}`:"Начните слушать — и здесь появятся ваши артисты"}</p>
          </div>
          <a class="text-link" href="#/artists">Все артисты ${d("next")}</a>
        </div>
        <div class="grid cards artists-row">${n.slice(0,8).map(va).join("")}</div>
      </section>

      <section class="section home-cta">
        <div class="cta-panel">
          <div>
            <div class="eyebrow">${d("chart")} Ваша статистика</div>
            <h2>${t.plays||0} ${I(t.plays||0,"прослушивание","прослушивания","прослушиваний")}</h2>
            <p class="muted">Часы, любимые артисты, лайки и дизлайки — на отдельной странице.</p>
          </div>
          <a class="btn glass" href="#/stats">${d("chart")} Открыть статистику</a>
        </div>
      </section>
    </div>`}function ms(){const e=new Date().getHours();return e<6?"Доброй ночи":e<12?"Доброе утро":e<18?"Добрый день":"Добрый вечер"}async function vs(e){j();const[t,a]=await Promise.all([hs(),ba()]);e===o.renderSeq&&(u("#view").innerHTML=`
    <div class="page live-page">
      ${wt("Live","Персональный поток: избранное, любимые артисты и новые находки",{eyebrow:"Автоматический эфир",actions:`<button class="btn primary" data-action="start-live">${d("radio")} ${o.liveMode?"Перезапустить":"Включить Live"}</button>`})}

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
          ${Array.from({length:24}).map((n,i)=>`<i style="--i:${i}"></i>`).join("")}
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
          ${t.map((n,i)=>{var s,r,l;return`<article class="mix-card ${(s=n.tracks)!=null&&s.length?"":"empty"}" data-action="play-mix" data-index="${i}" tabindex="0">
                <div class="mix-icon">${d(i===0?"heart":i===1?"album":"radio")}</div>
                <div class="mix-body">
                  <h3>${b(n.title)}</h3>
                  <p>${b(n.subtitle)}</p>
                  <span class="muted">${((r=n.tracks)==null?void 0:r.length)||0} ${I(((l=n.tracks)==null?void 0:l.length)||0,"трек","трека","треков")}</span>
                </div>
                <span class="mix-play">${d("play")}</span>
              </article>`}).join("")}
        </div>
      </section>

    </div>`)}async function gs(e){var h,m,g;j();const t=await nn().catch(()=>o.meStats||{});if(e!==o.renderSeq)return;o.meStats=t,$.meStats=t;const a=((t.listenedMs||0)/36e5).toFixed(1),n=Math.round((t.listenedMs||0)/6e4),i=Math.max(1,...(t.byDay||[]).map(f=>f.ms)),s=t.recent||[];o.currentTracks=s;const r=[...t.byDay||[]].slice(-14),l=t.likes||0,c=t.dislikes||0;u("#view").innerHTML=`
    <div class="page stats-page">
      ${wt("Статистика","Только ваш аккаунт: время, артисты, жанры и оценки",{eyebrow:"Личные данные",actions:`<a class="btn glass" href="#/favorites">${d("heart")} Избранное</a>`})}

      <section class="stat-cards">
        <div class="stat-card"><span class="stat-icon">${d("clock")}</span><strong>${a} ч</strong><span>${n} минут музыки</span></div>
        <div class="stat-card"><span class="stat-icon">${d("play")}</span><strong>${t.plays||0}</strong><span>прослушиваний</span></div>
        <div class="stat-card"><span class="stat-icon like">${d("heart")}</span><strong>${l}</strong><span>лайков</span></div>
        <div class="stat-card"><span class="stat-icon dislike">${d("thumbDown")}</span><strong>${c}</strong><span>дизлайков</span></div>
      </section>

      <section class="section stats-grid">
        <div class="stats-panel">
          <div class="section-head"><h2>Последние 14 дней</h2><span class="muted">${a} ч всего</span></div>
          ${r.length?`<div class="day-chart">${r.map(f=>{const E=new Date(`${f.day}T00:00:00`).toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit"}),x=Math.max(4,Math.round(f.ms/i*100));return`<div class="day-col" title="${E}: ${Math.round(f.ms/6e4)} мин">
                      <span class="day-bar" style="height:${x}%"></span>
                      <span class="day-label">${E}</span>
                    </div>`}).join("")}</div>`:'<div class="empty-inline">Пока нет прослушиваний за две недели.</div>'}
        </div>
        <div class="stats-panel">
          <div class="section-head"><h2>Жанры</h2></div>
          ${(h=t.topGenres)!=null&&h.length?`<div class="genre-list">${t.topGenres.map(f=>{var w;return`<div class="genre-row">
                      <span class="genre-name">${b(f.name)}</span>
                      <span class="genre-bar"><i style="width:${Math.min(100,f.plays/(((w=t.topGenres[0])==null?void 0:w.plays)||1)*100)}%"></i></span>
                      <span class="genre-plays">${f.plays}</span>
                    </div>`}).join("")}</div>`:'<div class="empty-inline">Жанры появятся после прослушиваний.</div>'}
        </div>
      </section>

      <section class="section stats-grid">
        <div class="stats-panel">
          <div class="section-head"><h2>Любимые артисты</h2></div>
          ${(m=t.topArtists)!=null&&m.length?`<div class="rank-list">${t.topArtists.map((f,w)=>`<div class="rank-row">
                      <span class="rank-num">${w+1}</span>
                      <span class="rank-main"><strong>${b(f.name)}</strong><small>${f.plays} ${I(f.plays,"прослушивание","прослушивания","прослушиваний")}</small></span>
                    </div>`).join("")}</div>`:'<div class="empty-inline">Пока нет данных.</div>'}
        </div>
        <div class="stats-panel">
          <div class="section-head"><h2>Топ треков</h2></div>
          ${(g=t.topTracks)!=null&&g.length?`<div class="rank-list">${t.topTracks.slice(0,10).map((f,w)=>`<div class="rank-row">
                      <span class="rank-num">${w+1}</span>
                      <span class="rank-main"><strong>${b(f.title)}</strong><small>${b(f.artist)}</small></span>
                      <span class="rank-plays">${f.plays} ×</span>
                    </div>`).join("")}</div>`:'<div class="empty-inline">Пока нет данных.</div>'}
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <div><h2>Недавние треки</h2><p class="muted">Можно продолжить с любого места</p></div>
        </div>
        ${s.length?ot(s,{showCover:!0}):'<div class="empty-inline">История пока пуста.</div>'}
      </section>
    </div>`}async function bs(e){j();const t=await _n();e===o.renderSeq&&(o.currentTracks=[],u("#view").innerHTML=`
    <div class="page">
      ${wt("Артисты",`${t.length} ${I(t.length,"артист","артиста","артистов")} в библиотеке`,{actions:`<button class="btn glass" data-action="shuffle-library">${d("shuffle")} Перемешать всё</button>`,eyebrow:"Коллекция"})}
      <div class="grid cards">${t.map(va).join("")}</div>
    </div>`)}async function ys(e,t){j();const a=await Qa(t);if(e!==o.renderSeq)return;const n=a.artist,i=n.album||[];o.currentTracks=[],u("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/artists">${d("back")} Все артисты</a>
      <section class="collection-head">
        <div class="collection-art round">${ct(n.coverArt||n.id,{size:600,alt:n.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">Артист</div>
          <h1>${b(n.name)}</h1>
          <p class="muted">${i.length} ${I(i.length,"альбом","альбома","альбомов")}</p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-artist" data-id="${n.id}">${d("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-artist" data-id="${n.id}">${d("shuffle")} Перемешать</button>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section-head"><h2>Альбомы</h2></div>
        <div class="grid cards">${i.map(ie).join("")}</div>
      </section>
    </div>`}async function ws(e){j();const t=await ps();e===o.renderSeq&&(o.currentTracks=[],u("#view").innerHTML=`
    <div class="page">
      ${wt("Альбомы",`${t.length} ${I(t.length,"альбом","альбома","альбомов")}`,{eyebrow:"Коллекция"})}
      <div class="grid cards">${t.map(ie).join("")}</div>
    </div>`)}async function $s(e,t){j();const a=await ca(t);if(e!==o.renderSeq)return;const n=a.album,i=n.song||[];o.currentTracks=i,u("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/albums">${d("back")} Все альбомы</a>
      <section class="collection-head album-head">
        <div class="collection-art">${ct(n.coverArt||n.id,{size:800,alt:n.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">${n.year?`Альбом · ${n.year}`:"Альбом"}</div>
          <h1>${b(n.name)}</h1>
          <p class="muted">
            <a class="inline-link" href="#/artist/${n.artistId}">${b(n.artist)}</a>
            · ${i.length} ${I(i.length,"трек","трека","треков")}
            · ${Mn(n.duration*1e3||0)}
          </p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-all">${d("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-all">${d("shuffle")} Перемешать</button>
          </div>
        </div>
      </section>
      <section class="section">
        ${ot(i,{showAlbum:!1})}
      </section>
    </div>`}async function Ss(e){j();const t=await ga();e===o.renderSeq&&(o.currentTracks=t,u("#view").innerHTML=`
    <div class="page">
      ${wt("Все треки",`${t.length} ${I(t.length,"трек","трека","треков")}`,{eyebrow:"Библиотека",actions:`<button class="btn primary" data-action="play-all">${d("play")} Слушать</button>
                  <button class="btn glass" data-action="shuffle-all">${d("shuffle")} Перемешать</button>`})}
      ${ot(t,{showCover:!0})}
    </div>`)}async function ks(e){j();const t=await da();e===o.renderSeq&&($.playlists=t,o.currentTracks=[],u("#view").innerHTML=`
    <div class="page">
      ${wt("Плейлисты",`${t.length} ${I(t.length,"плейлист","плейлиста","плейлистов")}`,{eyebrow:"Моя музыка",actions:`<button class="btn primary" data-action="new-playlist">${d("add")} Новый плейлист</button>`})}
      ${t.length?`<div class="grid cards">${t.map(Es).join("")}</div>`:`<div class="empty-state"><span class="empty-icon">${d("playlist")}</span><h2>Плейлистов пока нет</h2><p>Соберите подборку из любимых треков.</p><button class="btn primary" data-action="new-playlist">${d("add")} Создать</button></div>`}
    </div>`)}function Es(e){return`<article class="card" data-action="open" data-href="#/playlist/${e.id}" tabindex="0">
    <div class="card-cover">${ct(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${b(e.name)}</div>
      <div class="card-sub">${e.songCount??0} ${I(e.songCount??0,"трек","трека","треков")}</div>
    </div>
    <button class="card-play" data-action="open" data-href="#/playlist/${e.id}">${d("play")}</button>
  </article>`}async function Ts(e,t){j();const a=await Zn(t);if(e!==o.renderSeq)return;const n=(a.entry||[]).map((i,s)=>({...i,track:s+1}));o.currentTracks=n,u("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/playlists">${d("back")} Все плейлисты</a>
      <section class="collection-head album-head">
        <div class="collection-art">${ct(a.coverArt||a.id,{size:800,alt:a.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">Плейлист</div>
          <h1>${b(a.name)}</h1>
          <p class="muted">${n.length} ${I(n.length,"трек","трека","треков")} · ${Mn((a.duration||0)*1e3)}</p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-all">${d("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-all">${d("shuffle")} Перемешать</button>
            <button class="btn ghost danger" data-action="delete-playlist" data-id="${a.id}">${d("delete")} Удалить</button>
          </div>
        </div>
      </section>
      <section class="section">
        ${ot(n,{showCover:!0,playlistId:a.id})}
      </section>
    </div>`}async function Ms(e){j();const t=await xn();if(e!==o.renderSeq)return;const a=t.song||[];o.currentTracks=a,u("#view").innerHTML=`
    <div class="page">
      ${wt("Избранное",`${a.length} ${I(a.length,"трек","трека","треков")}`,{eyebrow:"Моя музыка",actions:a.length?`<button class="btn primary" data-action="play-all">${d("play")} Слушать</button>`:""})}
      ${a.length?ot(a,{showCover:!0}):`<div class="empty-state"><span class="empty-icon">${d("heartOutline")}</span><h2>Здесь пока пусто</h2><p>Нажимайте на сердечко у трека, чтобы добавить его в избранное.</p></div>`}
      ${(t.album||[]).length?`<section class="section"><div class="section-head"><h2>Любимые альбомы</h2></div>
             <div class="grid cards">${t.album.map(ie).join("")}</div></section>`:""}
    </div>`}const ya="rustream.searches";function An(){try{const e=JSON.parse(localStorage.getItem(ya));return Array.isArray(e)?e.slice(0,8):[]}catch{return[]}}function Dn(e){const t=String(e||"").trim();if(t.length<2)return;const a=[t,...An().filter(n=>n!==t)].slice(0,8);localStorage.setItem(ya,JSON.stringify(a))}function sa(e){const t=String(e||"").trim();if(!t)return;Dn(t);const a=`#/search?q=${encodeURIComponent(t)}`;location.hash===a?P():location.hash=a}async function Ls(e,t){const a=u("#search-input");if(a.value!==t&&(a.value=t),!t.trim()){const s=An();u("#view").innerHTML=`
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

        ${s.length?`<section class="section">
                <div class="section-head"><h2>Недавние запросы</h2><button class="text-link" data-action="clear-searches">Очистить</button></div>
                <div class="chip-row">${s.map(c=>`<button class="chip-btn" data-action="run-search" data-query="${b(c)}">${b(c)}</button>`).join("")}</div>
              </section>`:""}

        <section class="section">
          <div class="section-head"><h2>Популярное</h2></div>
          <div class="chip-row">
            ${["Chiki The Maid","Intro","Poezd","FLAC","Аниме","Рок","Джаз"].map(c=>`<button class="chip-btn" data-action="run-search" data-query="${b(c)}">${b(c)}</button>`).join("")}
          </div>
        </section>
      </div>`;const r=u("#page-search-form"),l=u("#page-search-input");r==null||r.addEventListener("submit",c=>{c.preventDefault(),sa(l.value)}),l==null||l.addEventListener("keydown",c=>{c.key==="Enter"&&sa(l.value)});return}j();const n=await Qn(t);if(e!==o.renderSeq)return;const i=n.song||[];o.currentTracks=i,u("#view").innerHTML=`
    <div class="page">
      ${wt(`Поиск: ${t}`,`Найдено ${i.length} ${I(i.length,"трек","трека","треков")}, ${(n.album||[]).length} ${I((n.album||[]).length,"альбом","альбома","альбомов")}`,{eyebrow:"Результаты"})}
      ${(n.artist||[]).length?`<section class="section"><div class="section-head"><h2>Артисты</h2></div><div class="grid cards">${n.artist.map(va).join("")}</div></section>`:""}
      ${(n.album||[]).length?`<section class="section"><div class="section-head"><h2>Альбомы</h2></div><div class="grid cards">${n.album.map(ie).join("")}</div></section>`:""}
      ${i.length?`<section class="section"><div class="section-head"><h2>Треки</h2></div>${ot(i,{showCover:!0})}</section>`:""}
      ${!i.length&&!(n.album||[]).length&&!(n.artist||[]).length?`<div class="empty-state"><span class="empty-icon">${d("search")}</span><h2>Ничего не найдено</h2><p>Попробуйте другой запрос.</p></div>`:""}
    </div>`}async function _s(e){const a=(await ca(e)).album.song||[];if(!a.length)return y("В альбоме нет треков","warn");o.currentTracks=a,await p.playTracks(a,0)}async function Ua(e,t=!1){y("Загружаю альбомы…");const n=(await Qa(e)).artist.album||[],s=(await Promise.all(n.map(r=>ca(r.id)))).flatMap(r=>r.album.song||[]);if(!s.length)return y("У артиста нет треков","warn");o.currentTracks=s,await p.playTracks(s,0,{shuffle:t})}async function Cn(e,t){try{await li(e,t),t===1?(o.favorites.add(e),o.dislikes.delete(e)):t===-1?(o.favorites.delete(e),o.dislikes.add(e)):(o.favorites.delete(e),o.dislikes.delete(e)),$.favorites=null,$.ratings=null,K(`[data-action="like"][data-id="${e}"]`).forEach(a=>{const n=o.favorites.has(e);a.classList.toggle("active",n),a.innerHTML=d(n?"heart":"heartOutline")}),K(`[data-action="dislike"][data-id="${e}"]`).forEach(a=>{a.classList.toggle("active",o.dislikes.has(e))}),Pn(),location.hash.startsWith("#/favorites")&&P(),location.hash.startsWith("#/stats")&&P()}catch(a){y(a.message,"error")}}async function Se(e){const t=o.favorites.has(e);await Cn(e,t?0:1)}async function Xa(e){const t=o.dislikes.has(e);await Cn(e,t?0:-1)}function Pn(){const e=p.track,t=u("#pb-like"),a=u("#pb-dislike");if(t){const n=e?o.favorites.has(e.id):!1;t.classList.toggle("active",n),t.innerHTML=d(n?"heart":"heartOutline")}a&&a.classList.toggle("active",e?o.dislikes.has(e.id):!1)}async function xs(e){let t=[];try{t=await da()}catch(a){y(a.message,"error")}wa({title:"Добавить в плейлист",body:`
      ${t.length?`<div class="modal-list">${t.map(a=>`<button class="modal-row" data-modal-action="add" data-playlist="${a.id}">
                  <span class="modal-row-ico">${d("playlist")}</span>
                  <span><strong>${b(a.name)}</strong><small>${a.songCount??0} треков</small></span>
                  ${d("next")}
                </button>`).join("")}</div>`:'<p class="muted">Плейлистов пока нет — создайте первый.</p>'}
      <div class="modal-new">
        <input class="input" id="new-playlist-name" placeholder="Название нового плейлиста" />
        <button class="btn primary" data-modal-action="create" data-track="${e}">${d("add")} Создать</button>
      </div>`,onMount:a=>{a.addEventListener("click",async n=>{const i=n.target.closest("[data-modal-action]");if(i&&(i.dataset.modalAction==="add"&&(await ti(i.dataset.playlist,e),it(),$.playlists=null,y("Трек добавлен в плейлист")),i.dataset.modalAction==="create")){const r=u("#new-playlist-name",a).value.trim()||"Мой плейлист";await tn(r,[e]),it(),$.playlists=null,y("Плейлист создан"),location.hash.startsWith("#/playlists")&&P()}})}})}async function As(){wa({title:"Новый плейлист",body:`<input class="input" id="new-playlist-name" placeholder="Например: Вечерний плейлист" autofocus />
           <div class="modal-actions">
             <button class="btn ghost" data-modal-action="cancel">Отмена</button>
             <button class="btn primary" data-modal-action="create">Создать</button>
           </div>`,onMount:e=>{const t=u("#new-playlist-name",e);t.focus(),e.addEventListener("click",async a=>{var i;const n=(i=a.target.closest("[data-modal-action]"))==null?void 0:i.dataset.modalAction;if(n==="cancel"&&it(),n==="create"){const s=t.value.trim();if(!s)return t.focus();await tn(s,[]),it(),$.playlists=null,y("Плейлист создан"),P()}}),t.addEventListener("keydown",a=>{var n;a.key==="Enter"&&((n=u('[data-modal-action="create"]',e))==null||n.click())})}})}function wa({title:e,body:t,onMount:a}){const n=u("#modal-root");n.innerHTML=`
    <div class="modal-backdrop" data-modal-action="close">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-head"><h3>${b(e)}</h3><button class="icon-btn" data-modal-action="close">${d("close")}</button></div>
        <div class="modal-body">${t}</div>
      </div>
    </div>`,document.body.classList.add("modal-open");const i=u(".modal",n);n.querySelector(".modal-backdrop").addEventListener("click",s=>{s.target.dataset.modalAction==="close"&&it()}),a==null||a(i)}function it(){u("#modal-root").innerHTML="",document.body.classList.remove("modal-open")}function zt(e="lyrics"){o.npOpen=!0,o.npTab=e;const t=u("#np");t.hidden=!1,requestAnimationFrame(()=>t.classList.add("open")),setTimeout(()=>t.classList.add("open"),80),ee()}function ke(){o.npOpen=!1;const e=u("#np");e.classList.remove("open"),setTimeout(()=>{o.npOpen||(e.hidden=!0)},260)}function Ds(e){o.npTab=e,ee()}function ee(){if(!o.npOpen)return;const e=p.track;K(".np-tab").forEach(n=>n.classList.toggle("active",n.dataset.npTab===o.npTab));const t=u("#np-side");t.innerHTML=`
    <div class="np-cover">${ct((e==null?void 0:e.coverArt)||(e==null?void 0:e.albumId),{size:900,alt:(e==null?void 0:e.title)||""})}</div>
    <div class="np-meta">
      <div class="eyebrow">${d("wave")} Сейчас играет</div>
      <h2>${b((e==null?void 0:e.title)||"Ничего не играет")}</h2>
      <p class="np-artist">${b((e==null?void 0:e.artist)||"Выберите трек")}</p>
      <p class="muted">${b((e==null?void 0:e.album)||"")}${e!=null&&e.year?` · ${e.year}`:""}</p>
      <div class="np-chips" id="np-chips">
        ${e?`
          <span class="chip">${(e.suffix||"flac").toUpperCase()}</span>
          <span class="chip">${e.bitRate?`${e.bitRate} kbps`:"lossless"}</span>
          <span class="chip" id="np-buffer">буфер 0:00</span>
        `:""}
      </div>
      <div class="np-controls">
        <button class="icon-btn ${p.shuffle?"active":""}" data-action="shuffle" title="Перемешать">${d("shuffle")}</button>
        <button class="icon-btn" data-action="prev" title="Предыдущий">${d("prev")}</button>
        <button class="play-btn" data-action="toggle" title="${p.paused?"Играть":"Пауза"}">${d(p.paused?"play":"pause")}</button>
        <button class="icon-btn" data-action="next" title="Следующий">${d("next")}</button>
        <button class="icon-btn ${p.repeat!=="off"?"active":""}" data-action="repeat" title="Повтор">${d(p.repeat==="one"?"repeatOne":"repeat")}</button>
      </div>
      <div class="np-actions">
        <button class="icon-btn like ${e&&o.favorites.has(e.id)?"active":""}" data-action="like-current" title="В избранное">${d(e&&o.favorites.has(e.id)?"heart":"heartOutline")}</button>
        <button class="icon-btn dislike ${e&&o.dislikes.has(e.id)?"active":""}" data-action="dislike-current" title="Не нравится">${d("thumbDown")}</button>
        <button class="icon-btn" data-action="add-to-playlist" data-id="${(e==null?void 0:e.id)||""}" ${e?"":"disabled"} title="В плейлист">${d("add")}</button>
        <button class="icon-btn" data-action="jump-album" ${e!=null&&e.albumId?"":"disabled"} title="К альбому">${d("album")}</button>
      </div>
    </div>`;const a=u("#np-panel");o.npTab==="lyrics"?zn(a,e):o.npTab==="eq"?Ce(a):Hn(a)}async function zn(e,t){var i,s;if(!t){e.innerHTML=In("lyrics","Текст появится здесь","Включите трек — и мы поищем файл .lrc рядом с аудио.");return}if(e.innerHTML='<div class="panel-loading"><span class="spinner"></span>Ищу текст…</div>',o.lyricsTrackId!==t.id||o.lyricsRefresh)try{o.lyrics=await hi(t.id,o.lyricsRefresh),o.lyricsTrackId=t.id,o.lyricsRefresh=!1,o.lyricsActiveKey=null}catch{o.lyrics=null}if(o.npTab!=="lyrics")return;const a=o.lyrics;if(!a||!a.plain&&!((i=a.synced)!=null&&i.length)){e.innerHTML=`<div class="panel-empty">
      <span class="empty-icon">${d("lyrics")}</span>
      <h3>Текст не найден</h3>
      <p>Локального .lrc/.txt нет, интернет-поиск ничего не вернул. Можно попробовать ещё раз.</p>
      <button class="btn glass" data-action="refresh-lyrics">${d("refresh")} Искать в интернете</button>
    </div>`;return}const n=a.source==="lrclib"?"LRCLIB":a.source==="local"?"локальный файл":a.source==="lyrics.ovh"?"lyrics.ovh":"кэш";e.innerHTML=`
    <div class="panel-title">
      <h3>Текст песни</h3>
      <span class="lyrics-source">${d("wave")} ${b(n)}</span>
      <button class="icon-btn" data-action="refresh-lyrics" title="Найти заново">${d("refresh")}</button>
    </div>
    <div class="lyrics" id="lyrics-body">
      ${(s=a.synced)!=null&&s.length?a.synced.map((r,l)=>`<div class="lyric-line" data-index="${l}" data-time="${r.time_ms}">${b(r.text)}</div>`).join(""):`<div class="lyrics-plain">${b(a.plain).replace(/\n/g,"<br />")}</div>`}
    </div>`,qn()}function qn(){if(o.npTab!=="lyrics")return;const e=K(".lyric-line");if(!e.length)return;const t=p.currentTime*1e3;let a=-1;e.forEach((i,s)=>{Number(i.dataset.time)<=t&&(a=s)}),a<0&&(a=0),e.forEach((i,s)=>i.classList.toggle("active",s===a));const n=`${o.lyricsTrackId||""}:${a}`;a>=0&&o.lyricsActiveKey!==n&&(o.lyricsActiveKey=n,e[a].scrollIntoView({block:"center",behavior:"smooth"}))}function In(e,t,a){return`<div class="panel-empty"><span class="empty-icon">${d(e)}</span><h3>${b(t)}</h3><p>${b(a)}</p></div>`}function Ce(e){const t=p.eqState;e.innerHTML=`
    <div class="panel-title">
      <h3>Эквалайзер</h3>
      <label class="switch">
        <input type="checkbox" id="eq-enabled" ${t.enabled?"checked":""} />
        <span></span>
      </label>
    </div>
    <div class="eq-presets">
      ${Object.entries(ia).map(([a,n])=>`<button class="chip-btn ${t.preset===a?"active":""}" data-eq-preset="${a}">${b(n.name)}</button>`).join("")}
      <button class="chip-btn ${t.preset==="custom"?"active":""}" disabled>Своя</button>
    </div>
    <div class="eq ${t.enabled?"":"disabled"}">
      ${Tn.map((a,n)=>{const i=Number(t.gains[n])||0,s=(12-i)/24*100;return`
        <div class="eq-band">
          <span class="eq-value" id="eq-val-${n}">${i>0?"+":""}${i}</span>
          <div class="eq-track" data-eq-band="${n}" role="slider" tabindex="0"
               aria-label="${a>=1e3?`${a/1e3} кГц`:`${a} Гц`}"
               aria-valuemin="-12" aria-valuemax="12" aria-valuenow="${i}">
            <span class="eq-center"></span>
            <span class="eq-fill" style="top:${Math.min(s,50)}%;height:${Math.abs(50-s)}%"></span>
            <span class="eq-thumb" style="top:${s}%"></span>
          </div>
          <span class="eq-freq">${a>=1e3?`${a/1e3}k`:a}</span>
        </div>`}).join("")}
    </div>
    <div class="eq-foot">
      <span class="muted">10 полос · ±12 дБ</span>
      <button class="btn ghost" data-action="reset-eq">${d("refresh")} Сбросить</button>
    </div>`}function Hn(e){const t=p.queue;e.innerHTML=`
    <div class="panel-title"><h3>Очередь</h3><span class="muted">${t.length} ${I(t.length,"трек","трека","треков")}</span></div>
    ${t.length?`<div class="queue-list" id="queue-list">${t.map((n,i)=>`
              <button class="queue-row ${i===p.index?"active":""}" data-action="play-queue" data-index="${i}" data-track-id="${n.id}">
                <span class="queue-drag-handle">${d("menu")}</span>
                <span class="queue-cover">${ct(n.coverArt||n.albumId,{size:80})}</span>
                <span class="queue-main"><strong>${b(n.title)}</strong><small>${b(n.artist||"")}</small></span>
                <span class="queue-time">${yt(n.duration)}</span>
              </button>`).join("")}</div>`:In("queue","Очередь пуста","Нажмите на трек или альбом, чтобы начать воспроизведение.")}`;const a=u("#queue-list");a&&t.length>0&&new k(a,{animation:150,handle:".queue-drag-handle",ghostClass:"queue-row-ghost",dragClass:"queue-row-drag",onEnd:n=>{n.oldIndex!==n.newIndex&&(p.moveInQueue(n.oldIndex,n.newIndex),setTimeout(()=>Hn(e),50))}})}function $a(){const e=p.track,t=u("#pb-title"),a=u("#pb-artist"),n=u("#pb-cover-img"),i=u("#quality-format"),s=u("#quality-detail");if(!e){t.textContent="Ничего не играет",a.textContent="Выберите трек",u(".pb-cover").classList.remove("loaded"),i.textContent="—",s.textContent="",Wa(null);return}t.textContent=e.title||"",a.textContent=[e.artist,e.album].filter(Boolean).join(" · "),e.coverArt||e.albumId?(n.src=Lt(e.coverArt||e.albumId,160),n.onload=()=>u(".pb-cover").classList.add("loaded")):(n.removeAttribute("src"),u(".pb-cover").classList.remove("loaded")),i.textContent=(e.suffix||"flac").toUpperCase(),s.textContent=[e.bitRate?`${e.bitRate} kbps`:null,e.size?we(e.size):null].filter(Boolean).join(" · "),Pn(),Wa(e)}function Wa(e){if("mediaSession"in navigator){if(!e){navigator.mediaSession.metadata=null;return}navigator.mediaSession.metadata=new MediaMetadata({title:e.title||"Без названия",artist:e.artist||"Неизвестный артист",album:e.album||"",artwork:[{src:Lt(e.coverArt||e.albumId,96),sizes:"96x96",type:"image/jpeg"},{src:Lt(e.coverArt||e.albumId,128),sizes:"128x128",type:"image/jpeg"},{src:Lt(e.coverArt||e.albumId,256),sizes:"256x256",type:"image/jpeg"},{src:Lt(e.coverArt||e.albumId,512),sizes:"512x512",type:"image/jpeg"}]})}}"mediaSession"in navigator&&(navigator.mediaSession.setActionHandler("play",()=>p.play()),navigator.mediaSession.setActionHandler("pause",()=>p.pause()),navigator.mediaSession.setActionHandler("previoustrack",()=>p.prev()),navigator.mediaSession.setActionHandler("nexttrack",()=>p.next()),navigator.mediaSession.setActionHandler("seekto",e=>{e.seekTime!==void 0&&p.seekTo(e.seekTime)}),navigator.mediaSession.setActionHandler("seekbackward",e=>{p.seekBy(-(e.seekOffset||10))}),navigator.mediaSession.setActionHandler("seekforward",e=>{p.seekBy(e.seekOffset||10)}));function _t(){const e=p.duration,t=p.currentTime,a=e?t/e*100:0;u("#cur-time").textContent=yt(t),u("#total-time").textContent=yt(e),u("#seek").value=String(a),u("#seek-fill").style.width=`${a}%`;const n=u("#np-seek");n&&(n.value=String(a),u("#np-seek-fill").style.width=`${a}%`,u("#np-cur-time").textContent=yt(t),u("#np-total-time").textContent=yt(e)),On(),qn()}function On(){const e=p.buffered;u("#seek-buffer").style.width=`${e.percent}%`;const t=u("#np-seek-buffer");t&&(t.style.width=`${e.percent}%`);const a=u("#np-buffer");a&&(a.textContent=`буфер ${yt(e.ahead)}`,a.title=`Загружено ${we(p.estimatedBufferedBytes())}`);const n=u("#quality-detail");n&&p.track&&(n.textContent=[p.track.bitRate?`${p.track.bitRate} kbps`:null,p.track.size?we(p.track.size):null,`буфер ${yt(e.ahead)}`].filter(Boolean).join(" · "))}function se(){var n;const e=!p.paused&&!!p.track;u("#play-btn").innerHTML=d(e?"pause":"play"),u("#pb-cover").classList.toggle("playing",e);const t=u('.np-controls [data-action="toggle"]');t&&(t.innerHTML=d(e?"pause":"play"),t.title=e?"Пауза":"Играть");const a=((n=p.track)==null?void 0:n.id)||null;K(".track-row").forEach(i=>{i.classList.toggle("playing",!!a&&i.dataset.trackId===a)})}function Sa(){u("#shuffle-btn").classList.toggle("active",p.shuffle),u("#repeat-btn").classList.toggle("active",p.repeat!=="off"),u("#repeat-btn").innerHTML=d(p.repeat==="one"?"repeatOne":"repeat");const e=u('.np-controls [data-action="shuffle"]');e&&e.classList.toggle("active",p.shuffle);const t=u('.np-controls [data-action="repeat"]');t&&(t.classList.toggle("active",p.repeat!=="off"),t.innerHTML=d(p.repeat==="one"?"repeatOne":"repeat"))}function Pe(){u("#volume").value=String(p.volumePercent);const e=p.volumePercent===0?"volumeOff":p.volumePercent<50?"volumeDown":"volumeUp";u("#volume-btn").innerHTML=d(e);const t=u("#np-volume");if(t){t.value=String(p.volumePercent);const a=u("#np-volume-icon");a&&(a.innerHTML=d(e))}}function Nn(){var t,a;const e=(a=(t=o.ytmStatus)==null?void 0:t.account)==null?void 0:a.photo;return typeof e=="string"&&e.startsWith("http")?e:""}function Cs(e,t="user-avatar"){const a=Nn();return a?`<span class="${t} has-photo"><img src="${b(a)}" alt="" referrerpolicy="no-referrer" /></span>`:`<span class="${t}">${b(ma(e))}</span>`}function Rn(){const e=$e(),t=u("#user-avatar"),a=u("#user-name"),n=Nn();t&&(n?(t.classList.add("has-photo"),t.innerHTML=`<img src="${b(n)}" alt="" referrerpolicy="no-referrer" />`):(t.classList.remove("has-photo"),t.textContent=ma(e))),a&&(a.textContent=e)}function Vn(e){const t=u("#auth-screen");t&&(t.hidden=!1,document.body.classList.add("auth-locked"),u("#auth-login-view").hidden=e!=="login",u("#auth-register-view").hidden=e!=="register",setTimeout(()=>{var a;return(a=u(e==="login"?"#login-username":"#register-invite"))==null?void 0:a.focus()},60))}function Ht(){Vn("login")}async function ka(e=""){Vn("register");const t=u("#register-invite"),a=u("#register-invite-hint");if(t.value=e.trim(),!e.trim()){a.textContent="Вставьте код приглашения от администратора.";return}a.textContent="Проверяю приглашение…";try{const n=await ki(e.trim());a.innerHTML=`Приглашение от <strong>${b(n.invitedBy)}</strong>${n.isAdmin?" · администратор":""}`}catch(n){a.textContent=n.message||"Приглашение недействительно"}}function Ps(){const e=u("#auth-screen");e&&(e.hidden=!0,document.body.classList.remove("auth-locked"))}async function Ea(){var e;try{o.authConfig=await Qe();const t=await si();if(!t.user){Ht(),location.hash.startsWith("#/register")&&P();return}o.me=t.user,o.meSettings=t.settings,ze(((e=t.settings)==null?void 0:e.theme)||localStorage.getItem("rustream.theme")||"violet"),o.ytmStatus=await Ae().catch(()=>null),Rn(),Ps(),await Promise.all([xn(),ba()]),qs(),await zs(),P()}catch(t){Ln(t)||console.error(t),Ht()}}function nt(e){o.liveMode=!!e,p.setLiveMode(!!e)}let Ga=null;function jn(){!o.me||!p.queue.length||(clearTimeout(Ga),Ga=setTimeout(()=>{_i(p.snapshotState()).catch(()=>{})},3e3))}async function zs(){var n,i;let e;try{e=await Li()}catch{return}const t=Number(e==null?void 0:e.updatedAt)||0;if(!((i=(n=e==null?void 0:e.state)==null?void 0:n.queue)!=null&&i.length)||t<=p.localUpdatedAt()||e.state.updatedAt&&e.state.updatedAt>t)return;const a=p.applyRemote(e.state);a&&(o.liveMode=!!a.liveMode,$a(),se(),_t(),location.hash.startsWith("#/live")&&P())}p.addEventListener("track",jn);p.addEventListener("queue",jn);window.addEventListener("pagehide",()=>{if(!(!o.me||!p.queue.length))try{fetch("/api/me/player",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({state:p.snapshotState()}),keepalive:!0}).catch(()=>{})}catch{}});function qs(){const e=p.restore();e&&(o.liveMode=!!e.liveMode,$a(),se(),Sa(),_t())}async function Is(){try{y("Собираю персональный поток…");const e=await sn(40);if(!e.length)return y("В библиотеке пока нет треков","warn");nt(!0),o.currentTracks=e,await p.playTracks(e,0),y("Live включён"),location.hash.startsWith("#/live")&&P()}catch(e){if(Ot(e))return;y(e.message,"error")}}async function Hs(e){var a;const t=o.liveMixes[e];if(!((a=t==null?void 0:t.tracks)!=null&&a.length))return y("В этом миксе пока нет треков","warn");nt(!1),o.currentTracks=t.tracks,await p.playTracks(t.tracks,0),y(`Играет: ${t.title}`)}const Ta=[{id:"violet",name:"Фиолетовая"},{id:"ocean",name:"Океан"},{id:"sunset",name:"Закат"},{id:"forest",name:"Лес"},{id:"mono",name:"Моно"}],Ee=/^#[0-9a-f]{6}$/i;function ra(e){const t=e.replace("#","");return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}}function Os({r:e,g:t,b:a}){const n=i=>Math.max(0,Math.min(255,Math.round(i)));return`#${[n(e),n(t),n(a)].map(i=>i.toString(16).padStart(2,"0")).join("")}`}function Dt(e,t,a){const n=ra(e),i=ra(t);return Os({r:n.r*a+i.r*(1-a),g:n.g*a+i.g*(1-a),b:n.b*a+i.b*(1-a)})}function Ns(e){const{r:t,g:a,b:n}=ra(e),i=s=>{const r=s/255;return r<=.03928?r/12.92:((r+.055)/1.055)**2.4};return .2126*i(t)+.7152*i(a)+.0722*i(n)}function Ja(e){return Ns(e)>.42?"#1a1917":"#ffffff"}function Yn(e){const t=document.documentElement.classList.contains("light-mode"),a=t?"#faf8f4":"#101013",n=t?"#efece4":"#17171c",i=t?.06:.1,s=Dt(e,a,i),r=Dt(e,n,i*1.25),l=Dt(e,t?"#e9e5dc":"#1d1d23",i*1.4),c=Dt(e,t?"#ffffff":"#101013",t?.22:.3),h=document.body.style;h.setProperty("--primary",e),h.setProperty("--on-primary",Ja(e)),h.setProperty("--primary-container",c),h.setProperty("--on-primary-container",Ja(c)),h.setProperty("--surface",s),h.setProperty("--surface-container",r),h.setProperty("--surface-container-high",l),h.setProperty("--surface-container-highest",Dt(e,l,.5)),h.setProperty("--surface-container-low",Dt(e,s,.5))}function Rs(){const e=document.body.style;["--primary","--on-primary","--primary-container","--on-primary-container","--surface","--surface-container","--surface-container-high","--surface-container-highest","--surface-container-low"].forEach(t=>e.removeProperty(t))}function ze(e){const t=Ta.some(n=>n.id===e),a=t?e:Ee.test(e||"")?e.toLowerCase():"violet";o.theme=a,document.body.dataset.theme=t?a:"custom",localStorage.setItem("rustream.theme",a),t?Rs():Yn(a)}function oa(e){const t=e==="auto"?window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark":e;document.documentElement.classList.toggle("light-mode",t==="light"),o.theme&&Ee.test(o.theme)&&Yn(o.theme)}(function(){const t=localStorage.getItem("colorMode")||"dark";oa(t),window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{localStorage.getItem("colorMode")==="auto"&&oa("auto")})})();const Bn=[{id:"compact",name:"Компактно"},{id:"default",name:"Обычно"},{id:"large",name:"Крупно"}];function Fn(e){const t=Bn.some(a=>a.id===e)?e:"default";o.density=t,document.documentElement.dataset.density=t,localStorage.setItem("rustream.density",t)}(function(){Fn(localStorage.getItem("rustream.density")||"default")})();async function Un(e){ze(e);try{await an({theme:o.theme}),o.meSettings={...o.meSettings||{},theme:o.theme}}catch(t){y(t.message,"error")}}function Vs(e){var i,s,r,l,c,h,m,g;const t=o.meSettings||{},a=(i=o.authConfig)==null?void 0:i.lastfm,n=o.lastfmConfig||{};return`
    <div class="settings-sections">
      <section class="settings-section">
        <h4>${d("person")} Профиль</h4>
        <form id="settings-profile-form" class="settings-form">
          <label class="field"><span>Отображаемое имя</span>
            <input class="input" id="settings-display-name" value="${b(((s=o.me)==null?void 0:s.displayName)||"")}" />
          </label>
          <button class="btn tonal" type="submit">Сохранить имя</button>
        </form>
        <div class="settings-meta">
          <span>Логин: <strong>${b(((r=o.me)==null?void 0:r.username)||"")}</strong></span>
          ${(l=o.me)!=null&&l.isAdmin?'<span class="chip">администратор</span>':""}
        </div>
      </section>

      <section class="settings-section">
        <h4>${d("palette")} Оформление</h4>
        <p class="muted small">Цветовая тема сохраняется в аккаунте и применяется на всех устройствах.</p>
        <div class="theme-picker">
          ${Ta.map(f=>`<button class="theme-swatch ${o.theme===f.id?"active":""}" data-theme-choice="${f.id}" title="${f.name}">
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
          Last.fm: ${t.lastfmConnected?`подключён${t.lastfmUsername?` как ${b(t.lastfmUsername)}`:""}`:"не подключён"}
        </div>
        <div class="settings-inline">
          <button class="btn glass" data-settings-action="lastfm-connect" ${a?"":"disabled"}>${d("wave")} Подключить Last.fm</button>
          <button class="btn ghost" data-settings-action="lastfm-complete" ${t.lastfmConnected?"disabled":""}>Завершить</button>
        </div>
        ${a?"":'<p class="muted small">Для авторизации Last.fm нужны ключи приложения ниже (или в config.toml).</p>'}
        ${(c=o.me)!=null&&c.isAdmin?`
          <div class="settings-sub">
            <h5>Ключи приложения Last.fm</h5>
            <p class="muted small">Создайте приложение на last.fm/api/account/create. Ключи пишутся в config.toml и применяются сразу.</p>
            <label class="field"><span>API key</span>
              <input class="input" id="settings-lastfm-api-key" name="lastfm-api-key" autocomplete="off" autocapitalize="none" spellcheck="false" data-lpignore="true" value="${b(n.apiKey||"")}" placeholder="32 символа" />
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
        <p class="muted small">Сканер перечитывает папки каждые ${((h=o.authConfig)==null?void 0:h.scanInterval)||300} секунд. Новые файлы появятся автоматически.</p>
        <div class="settings-inline">
          <button class="btn glass" data-settings-action="rescan">${d("refresh")} Пересканировать сейчас</button>
          <button class="btn ghost danger" data-settings-action="clear-history">${d("delete")} Очистить историю</button>
        </div>
      </section>

      ${(m=o.me)!=null&&m.isAdmin?`
      <section class="settings-section">
        <h4>${d("person")} Пользователи</h4>
        <p class="muted small">Новый человек может войти двумя способами: вы создаёте ему логин и пароль здесь, либо выдаёте код приглашения — блок «Приглашения» на странице профиля.</p>
        <div class="user-list" id="settings-user-list">
          ${(e||[]).map(f=>{var w;return`
            <div class="user-row">
              <span class="user-avatar small">${b(ma(f.displayName||f.username))}</span>
              <span class="user-row-main"><strong>${b(f.displayName||f.username)}</strong><small>@${b(f.username)}${f.isAdmin?" · админ":""}</small></span>
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
        <p class="muted small">Вход действует 90 дней и продлевается автоматически, пока вы пользуетесь сайтом. Subsonic API: логин <code>${b(((g=o.me)==null?void 0:g.username)||"")}</code>, пароль — ваш пароль. Ключ API: <code>${b(t.subsonicApiKey||"—")}</code></p>
        <button class="btn ghost danger" data-settings-action="logout">${d("logout")} Выйти из аккаунта</button>
      </section>
    </div>`}async function Wt(){if(!o.me)return Ht();let e=[];if(o.me.isAdmin)try{[e,o.lastfmConfig]=await Promise.all([fi(),Oe().catch(()=>({}))])}catch(t){Ot(t)}wa({title:"Аккаунт и настройки",body:Vs(e),onMount:t=>{var a,n;(a=u("#settings-profile-form",t))==null||a.addEventListener("submit",async i=>{i.preventDefault();try{await _a(u("#settings-display-name",t).value.trim()),o.me.displayName=u("#settings-display-name",t).value.trim(),Rn(),y("Имя обновлено")}catch(s){y(s.message,"error")}}),(n=u("#settings-password-form",t))==null||n.addEventListener("submit",async i=>{i.preventDefault();try{await ci(u("#settings-current-password",t).value,u("#settings-new-password",t).value),u("#settings-current-password",t).value="",u("#settings-new-password",t).value="",y("Пароль изменён")}catch(s){y(s.message,"error")}}),t.addEventListener("click",async i=>{const s=i.target.closest("[data-theme-choice]");if(s){const c=s.dataset.themeChoice;ze(c),K(".theme-swatch",t).forEach(h=>h.classList.toggle("active",h.dataset.themeChoice===c));try{await _a(o.me.displayName||o.me.username,c),o.meSettings={...o.meSettings||{},theme:c},y("Тема сохранена")}catch(h){y(h.message,"error")}return}const r=i.target.closest("[data-settings-action]");if(!r)return;const l=r.dataset.settingsAction;if(l==="logout"){await en().catch(()=>{}),location.reload();return}if(l==="rescan"){r.classList.add("spin"),await rn().catch(c=>y(c.message,"error")),setTimeout(()=>{r.classList.remove("spin"),y("Сканирование запущено")},1200);return}if(l==="clear-history"){if(!confirm("Удалить всю историю прослушиваний этого аккаунта?"))return;try{await vi(),$.meStats=null,o.meStats=null,y("История очищена");const c=await He();o.meSettings=c.settings}catch(c){y(c.message,"error")}return}if(l==="lastfm-connect"){try{const c=await bi();window.open(c.url,"_blank","noopener"),y("Подтвердите доступ на Last.fm, затем нажмите «Завершить»")}catch(c){y(c.message,"error")}return}if(l==="lastfm-complete"){try{const c=await yi();y(`Last.fm подключён${c.username?`: ${c.username}`:""}`);const h=await He();o.meSettings=h.settings,it(),Wt()}catch(c){y(c.message,"error")}return}if(l==="save-lastfm-app"){try{await xa(u("#settings-lastfm-api-key",t).value.trim(),u("#settings-lastfm-api-secret",t).value.trim());const c=await Oe();o.lastfmConfig=c,o.authConfig=await Qe(),y("Ключи Last.fm сохранены в config.toml"),u("#settings-lastfm-api-secret",t).value=""}catch(c){y(c.message,"error")}return}if(l==="clear-lastfm-app"){if(!confirm("Удалить ключи приложения Last.fm из config.toml?"))return;try{await xa("","",!0),o.lastfmConfig=await Oe(),o.authConfig=await Qe(),y("Ключи Last.fm удалены"),it(),Wt()}catch(c){y(c.message,"error")}return}if(l==="save-scrobbling"){const c=actionEl.dataset.scope||"both",h={};c!=="lastfm"&&(h.listenbrainzToken=u("#settings-listenbrainz",t).value.trim()),c!=="listenbrainz"&&(h.lastfmSessionKey=u("#settings-lastfm-key",t).value.trim());try{await di(h),y(c==="listenbrainz"?"Токен ListenBrainz сохранён":"Last.fm сохранён");const m=await He();o.meSettings=m.settings}catch(m){y(m.message,"error")}return}if(l==="create-user"){try{await mi({username:u("#new-user-name",t).value.trim(),password:u("#new-user-password",t).value,displayName:u("#new-user-display",t).value.trim(),isAdmin:u("#new-user-admin",t).checked}),y("Пользователь создан"),it(),Wt()}catch(c){y(c.message,"error")}return}if(l==="delete-user"){if(!confirm("Удалить пользователя и все его данные?"))return;try{await gi(r.dataset.id),y("Пользователь удалён"),it(),Wt()}catch(c){y(c.message,"error")}}})}})}function js(){const e=localStorage.getItem("colorMode")||"dark";return`
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
      ${Ta.map(t=>`<button class="theme-swatch ${o.theme===t.id?"active":""}" data-action="theme" data-theme="${t.id}">
          <span class="swatch-dot theme-${t.id}"></span><span>${t.name}</span>
        </button>`).join("")}
      <label class="theme-swatch custom ${Ee.test(o.theme)?"active":""}" title="Свой цвет">
        <input type="color" id="theme-custom" value="${Ee.test(o.theme)?o.theme:"#c7a6ff"}" aria-label="Свой цвет" />
        <span>Свой цвет</span>
      </label>
    </div>`}function Ys(e){const t=e==null?void 0:e.account;return e!=null&&e.connected?`
      <div class="ytm-account">
        ${t!=null&&t.photo?`<img class="ytm-avatar" src="${b(t.photo)}" alt="" referrerpolicy="no-referrer" />`:`<span class="ytm-avatar fallback">${d("person")}</span>`}
        <div class="ytm-account-main">
          <strong>${b((t==null?void 0:t.name)||"Аккаунт YouTube")}</strong>
          <small>${b((t==null?void 0:t.handle)||"")}${e.updatedAt?` · обновлено ${new Date(e.updatedAt*1e3).toLocaleDateString("ru-RU")}`:""}</small>
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
    </form>`}function Bs(e){return`
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
                  <span class="invite-code">${b(t.code)}</span>
                  <span class="invite-meta">
                    <small>${b(t.note||"без заметки")} · ${t.uses}/${t.maxUses||"∞"} · ${t.isAdmin?"админ":"слушатель"}</small>
                    <small>${t.expiresAt?`до ${new Date(t.expiresAt*1e3).toLocaleDateString("ru-RU")}`:"без срока"}${t.valid?"":" · недействительно"}</small>
                  </span>
                  <button class="icon-btn" data-action="invite-copy" data-code="${b(t.code)}" title="Скопировать ссылку">${d("link")}</button>
                  <button class="icon-btn" data-action="invite-revoke" data-code="${b(t.code)}" title="Отозвать">${d("delete")}</button>
                </div>`).join(""):'<div class="empty-inline">Пока ни одного приглашения</div>'}
      </div>
    </section>`}async function Fs(e){j();const[t,a]=await Promise.all([us().catch(()=>({})),da().catch(()=>[])]);if(e!==o.renderSeq)return;$.playlists=a;const n=[{href:"#/artists",icon:"person",title:"Артисты",sub:`${t.artists||0} в библиотеке`},{href:"#/albums",icon:"album",title:"Альбомы",sub:`${t.albums||0} в библиотеке`},{href:"#/tracks",icon:"music",title:"Треки",sub:`${t.tracks||0} в библиотеке`},{href:"#/playlists",icon:"playlist",title:"Плейлисты",sub:`${a.length} ${I(a.length,"подборка","подборки","подборок")}`},{href:"#/favorites",icon:"heart",title:"Избранное",sub:"Треки, которым вы поставили лайк"},{href:"#/ytm",icon:"ytm",title:"YouTube Music",sub:"Внешний источник: история, лайки, поиск"},{href:"#/live",icon:"radio",title:"Live",sub:"Персональный поток без повторов"},{href:"#/stats",icon:"chart",title:"Статистика",sub:"Часы, артисты и история"}];u("#view").innerHTML=`
    <div class="page library-page">
      <header class="page-head">
        <div>
          <span class="eyebrow">Коллекция</span>
          <h1>Медиатека</h1>
          <p class="muted">${t.tracks||0} ${I(t.tracks||0,"трек","трека","треков")} · ${we(t.sizeBytes||0)}</p>
        </div>
        <div class="head-actions">
          <button class="btn glass" data-action="shuffle-library">${d("shuffle")} Перемешать всё</button>
        </div>
      </header>
      <div class="library-grid">
        ${n.map(i=>`<a class="library-tile" href="${i.href}">
              <span class="tile-icon">${d(i.icon)}</span>
              <span class="tile-main"><strong>${i.title}</strong><small>${b(i.sub)}</small></span>
              <span class="tile-arrow">${d("next")}</span>
            </a>`).join("")}
      </div>
    </div>`}async function Us(e){var r,l,c,h;j();const t=!!((r=o.me)!=null&&r.isAdmin),[a,n]=await Promise.all([Ae().catch(()=>({connected:!1,account:null})),t?wi().catch(()=>[]):Promise.resolve([])]);if(e!==o.renderSeq)return;o.ytmStatus=a,u("#view").innerHTML=`
    <div class="page profile-page">
      <header class="page-head">
        <div class="profile-identity">
          ${Cs($e(),"user-avatar xl")}
          <div>
            <h1>${b($e())}</h1>
            <p class="muted">@${b(((l=o.me)==null?void 0:l.username)||"")}${t?" · администратор":""}</p>
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
        ${Ys(a)}
      </section>

      <section class="section glass-card">
        <h2>${d("palette")} Оформление</h2>
        <p class="muted small">Тема сохраняется в аккаунте и применяется на всех устройствах.</p>
        ${js()}
      </section>

      <section class="section glass-card">
        <h2>${d("expand")} Плотность</h2>
        <p class="muted small">Сколько строк и обложек помещается на экране.</p>
        <div class="theme-mode-picker">
          ${Bn.map(m=>`<button class="mode-btn ${(o.density||"default")===m.id?"active":""}" data-action="density" data-value="${m.id}">${m.name}</button>`).join("")}
        </div>
      </section>

      ${t?Bs(n):""}
    </div>`;const i=u("#ytm-connect-form");i==null||i.addEventListener("submit",async m=>{m.preventDefault();const g=u("#ytm-connect-submit"),f=u("#ytm-connect-error"),w=u("#ytm-cookies").value.trim();if(f.textContent="",!w){f.textContent="Вставьте cookies";return}g.disabled=!0;try{await Ti(w),y("YouTube Music подключён"),P()}catch(E){f.textContent=E.message||"Не удалось подключить"}finally{g.disabled=!1}});const s=u("#invite-form");s==null||s.addEventListener("submit",async m=>{var g;m.preventDefault();try{const f=await $i({note:u("#invite-note").value.trim(),expiresInDays:Number(u("#invite-days").value||0),maxUses:Number(u("#invite-uses").value||0),isAdmin:u("#invite-admin").checked});await((g=navigator.clipboard)==null?void 0:g.writeText(on(f.code)).catch(()=>{})),y("Код создан, ссылка скопирована"),P()}catch(f){y(f.message,"error")}}),(c=u("#theme-custom"))==null||c.addEventListener("input",m=>ze(m.target.value)),(h=u("#theme-custom"))==null||h.addEventListener("change",async m=>{await Un(m.target.value),P()})}async function Xs(e){var m,g;j();const t=o.ytmStatus||await Ae().catch(()=>null);if(e!==o.renderSeq)return;if(o.ytmStatus=t,!(t!=null&&t.connected)){u("#view").innerHTML=`
      <div class="page ytm-page">
        <header class="page-head">
          <div><span class="eyebrow">Источник</span><h1>YouTube Music</h1></div>
        </header>
        <section class="section glass-card empty-state">
          <span class="empty-icon">${d("ytm")}</span>
          <h2>Подключите свой аккаунт</h2>
          <p class="muted">Поиск и лайки YouTube Music будут доступны только вам. Подключение занимает минуту.</p>
          <a class="btn primary" href="#/profile">${d("settings")} Перейти в профиль</a>
        </section>
      </div>`;return}o.ytmLists=o.ytmLists||{history:[],liked:[],search:[]};const a=(f,w)=>ot(f,{showCover:!0,rowAction:"play-ytm-row",rowList:w});u("#view").innerHTML=`
    <div class="page ytm-page">
      <header class="page-head">
        <div>
          <span class="eyebrow">Источник</span>
          <h1>YouTube Music</h1>
          <p class="muted">${b(((m=t.account)==null?void 0:m.name)||"Подключено")}${(g=t.account)!=null&&g.handle?` · ${b(t.account.handle)}`:""}</p>
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
        ${[["Новинки","новинки музыка 2026"],["Хиты","популярные песни"],["Русское","русская музыка"],["Электроника","electronic mix"],["Лоу-фай","lofi beats"],["Рок","rock classics"],["Джаз","jazz standards"]].map(([f,w])=>`<button class="chip-btn" data-action="ytm-preset" data-query="${b(w)}">${f}</button>`).join("")}
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
    </div>`;const n=u("#ytm-search-form"),i=u("#ytm-search-input"),s=u("#ytm-results"),r=(f,w,E,x)=>{const H=u(f);if(!H)return;const Q=H.querySelector("div[id]")||H;if(!E.length){H.hidden=!0;return}H.hidden=!1,Q.innerHTML=a(E,w)},l=(f,w)=>{var E;o.ytmLists.search=f,s.hidden=!1,s.innerHTML=f.length?`<div class="section-head"><h2>${d("search")} Результаты</h2><span class="muted small">${f.length}</span></div>${a(f,"search")}`:`<div class="empty-inline">${b(w)}</div>`,(E=u("#ytm-empty"))==null||E.setAttribute("hidden","")},c=async()=>{const f=i.value.trim();if(f){s.hidden=!1,s.innerHTML=`<div class="skel-rows">${'<div class="skeleton skeleton-line"></div>'.repeat(5)}</div>`;try{const w=await ln(f);if(e!==o.renderSeq)return;l(w,"Ничего не найдено")}catch(w){if(Ot(w))return;s.innerHTML=`<div class="empty-inline">${b(w.message)}</div>`}}};n.addEventListener("submit",f=>{f.preventDefault(),c()});let h;i.addEventListener("input",()=>{clearTimeout(h),h=setTimeout(()=>{i.value.trim().length>=2&&c()},500)}),(async()=>{const[f,w]=await Promise.allSettled([dn(40),cn(50)]);if(e!==o.renderSeq)return;f.status==="fulfilled"&&f.value.length&&(o.ytmLists.history=f.value,r("#ytm-history-section","history",f.value)),w.status==="fulfilled"&&w.value.length&&(o.ytmLists.liked=w.value,r("#ytm-liked-section","liked",w.value)),!o.ytmLists.history.length&&!o.ytmLists.liked.length&&(u("#ytm-empty").hidden=!1)})()}document.addEventListener("click",async e=>{var n,i,s;const t=e.target.closest("[data-action]");if(!t)return;const a=t.dataset.action;if(a==="open"){location.hash=t.dataset.href;return}if(a==="play-row"){const r=Number(t.dataset.index);if(e.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]'))return;nt(!1),await p.playTracks(o.currentTracks,r);return}if(a==="play-ytm-row"){const r=Number(t.dataset.index);if(e.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]'))return;const l=(n=o.ytmLists)==null?void 0:n[t.dataset.list];if(!(l!=null&&l.length))return;nt(!1),await p.playTracks(l,r);return}if(a==="play-all"){if(!o.currentTracks.length)return y("Список пуст","warn");nt(!1),await p.playTracks(o.currentTracks,0);return}if(a==="shuffle-all"){if(!o.currentTracks.length)return y("Список пуст","warn");nt(!1),await p.playTracks(o.currentTracks,0,{shuffle:!0});return}if(a==="shuffle-library"){const r=await ga();o.currentTracks=r,await p.playTracks(r,0,{shuffle:!0});return}if(a==="start-live"){await Is();return}if(a==="play-mix"){await Hs(Number(t.dataset.index));return}if(a==="open-settings"){await Wt();return}if(a==="theme"){await Un(t.dataset.theme),K('[data-action="theme"]').forEach(r=>r.classList.toggle("active",r.dataset.theme===o.theme));return}if(a==="color-mode"){const r=t.dataset.mode;localStorage.setItem("colorMode",r),oa(r),K('[data-action="color-mode"]').forEach(l=>l.classList.toggle("active",l.dataset.mode===r)),y(`Режим: ${r==="dark"?"тёмный":r==="light"?"светлый":"системный"}`);return}if(a==="toggle-password"){const r=document.getElementById(t.dataset.target);if(!r)return;const l=r.type==="password";r.type=l?"text":"password",t.innerHTML=d(l?"eyeOff":"eye"),t.setAttribute("aria-label",l?"Скрыть пароль":"Показать пароль");return}if(a==="density"){const r=t.dataset.value;Fn(r),K('[data-action="density"]').forEach(l=>l.classList.toggle("active",l.dataset.value===r));return}if(a==="logout"){await en().catch(()=>{}),location.reload();return}if(a==="ytm-disconnect"){if(!confirm("Отключить YouTube Music? Cookies и скачанный кэш этого профиля будут удалены."))return;try{await Mi(),o.ytmStatus={connected:!1,account:null},y("YouTube Music отключён"),P()}catch(r){y(r.message,"error")}return}if(a==="ytm-reconnect"){o.ytmStatus={connected:!1,account:null},u("#view").innerHTML="",P();return}if(a==="run-search"){sa(t.dataset.query||"");return}if(a==="clear-searches"){localStorage.removeItem(ya),P();return}if(a==="ytm-preset"){const r=t.dataset.query||"";if(!r)return;const l=u("#ytm-results");l&&(l.hidden=!1,l.innerHTML=`<div class="empty-inline">Ищу «${b(r)}»…</div>`);try{const c=await ln(r);o.ytmLists=o.ytmLists||{},o.ytmLists.search=c,l&&(l.innerHTML=c.length?`<div class="section-head"><h2>${d("search")} ${b(r)}</h2><span class="muted small">${c.length}</span></div>${ot(c,{showCover:!0,rowAction:"play-ytm-row",rowList:"search"})}`:'<div class="empty-inline">Ничего не найдено</div>')}catch(c){l&&(l.innerHTML=`<div class="empty-inline">${b(c.message)}</div>`)}return}if(a==="ytm-liked"){const r=u("#ytm-liked-section"),l=u("#ytm-liked");l&&(l.innerHTML='<div class="empty-inline">Загружаю лайки…</div>');try{const c=await cn(200);o.ytmLists=o.ytmLists||{},o.ytmLists.liked=c,r&&(r.hidden=!1),l&&(l.innerHTML=c.length?ot(c,{showCover:!0,rowAction:"play-ytm-row",rowList:"liked"}):'<div class="empty-inline">В YouTube Music пока нет лайков</div>'),y(`Лайков: ${c.length}`)}catch(c){l&&(l.innerHTML=`<div class="empty-inline">${b(c.message)}</div>`)}return}if(a==="invite-copy"){await((i=navigator.clipboard)==null?void 0:i.writeText(on(t.dataset.code)).catch(()=>{})),y("Ссылка скопирована");return}if(a==="invite-revoke"){if(!confirm("Отозвать приглашение?"))return;try{await Si(t.dataset.code),y("Приглашение отозвано"),P()}catch(r){y(r.message,"error")}return}if(a==="play-album"){e.stopPropagation(),nt(!1),await _s(t.dataset.id);return}if(a==="play-artist"){nt(!1),await Ua(t.dataset.id,!1);return}if(a==="shuffle-artist"){nt(!1),await Ua(t.dataset.id,!0);return}if(a==="like"){e.stopPropagation(),await Se(t.dataset.id);return}if(a==="like-current"){p.track&&await Se(p.track.id),ee();return}if(a==="dislike"){e.stopPropagation(),await Xa(t.dataset.id);return}if(a==="dislike-current"){p.track&&await Xa(p.track.id),ee();return}if(a==="add-to-playlist"){e.stopPropagation(),await xs(t.dataset.id);return}if(a==="remove-from-playlist"){e.stopPropagation();try{await ei(t.dataset.playlist,Number(t.dataset.index)),y("Трек убран из плейлиста"),P()}catch(r){y(r.message,"error")}return}if(a==="resume"){p.track?(p.clearRestored(),await p.toggle()):o.currentTracks.length&&await p.playTracks(o.currentTracks,0),location.hash.startsWith("#/home")&&P();return}if(a==="toggle"){!p.track&&o.currentTracks.length?await p.playTracks(o.currentTracks,0):await p.toggle();return}if(a==="prev")return p.previous();if(a==="next")return p.next();if(a==="shuffle")return p.toggleShuffle();if(a==="repeat")return p.cycleRepeat();if(a==="mute")return p.toggleMute();if(a==="nowplaying")return zt(o.npTab);if(a==="open-lyrics")return zt("lyrics");if(a==="open-eq")return zt("eq");if(a==="open-queue")return zt("queue");if(a==="close-np")return ke();if(a==="jump-album"){(s=p.track)!=null&&s.albumId&&(ke(),location.hash=`#/album/${p.track.albumId}`);return}if(a==="play-queue"){nt(!1),await p.playAt(Number(t.dataset.index));return}if(a==="new-playlist")return e.preventDefault(),As();if(a==="delete-playlist"){if(!confirm("Удалить этот плейлист?"))return;await ai(t.dataset.id),y("Плейлист удалён"),$.playlists=null,location.hash="#/playlists";return}if(a==="reload")return P();if(a==="reset-eq"){p.resetEq(),Ce(u("#np-panel"));return}if(a==="refresh-lyrics"){if(!p.track)return;o.lyricsRefresh=!0,o.lyricsTrackId=null,zn(u("#np-panel"),p.track);return}});u("#np").addEventListener("click",e=>{const t=e.target.closest("[data-np-tab]");t&&Ds(t.dataset.npTab);const a=e.target.closest("[data-eq-preset]");a&&(p.applyEqPreset(a.dataset.eqPreset),Ce(u("#np-panel")))});u("#np").addEventListener("input",e=>{if(e.target.id==="np-seek"){p.seekTo(Number(e.target.value)),_t();return}if(e.target.id==="np-volume"){p.setVolume(Number(e.target.value)),Pe();return}});u("#np").addEventListener("change",e=>{var t;e.target.id==="eq-enabled"&&(p.setEqEnabled(e.target.checked),(t=u(".eq"))==null||t.classList.toggle("disabled",!e.target.checked))});u("#seek").addEventListener("input",e=>{p.seekTo(Number(e.target.value)),_t()});u("#volume").addEventListener("input",e=>{p.setVolume(Number(e.target.value)),Pe()});document.addEventListener("keydown",e=>{var a;const t=["INPUT","TEXTAREA"].includes((a=document.activeElement)==null?void 0:a.tagName);e.code==="Space"&&!t&&p.track&&(e.preventDefault(),p.toggle()),e.key==="ArrowRight"&&!t&&e.shiftKey&&p.seekBy(5),e.key==="ArrowLeft"&&!t&&e.shiftKey&&p.seekBy(-5),t||(e.key.toLowerCase()==="l"&&p.track&&(e.preventDefault(),Se(p.track.id)),e.key.toLowerCase()==="n"&&(e.preventDefault(),p.next()),e.key.toLowerCase()==="p"&&!e.ctrlKey&&!e.metaKey&&(e.preventDefault(),p.prev()),e.key.toLowerCase()==="m"&&(e.preventDefault(),p.toggleMute()),e.key.toLowerCase()==="s"&&(e.preventDefault(),p.toggleShuffle()),e.key.toLowerCase()==="r"&&(e.preventDefault(),p.toggleRepeat())),(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"&&(e.preventDefault(),u("#search-input").focus()),e.key==="Escape"&&(u("#modal-root").innerHTML?it():ke())});let Te=0,Me=0,Le=0;u("#playerbar").addEventListener("touchstart",e=>{Te=e.touches[0].clientY,Me=e.touches[0].clientX,Le=Date.now()});u("#playerbar").addEventListener("touchend",e=>{const t=e.changedTouches[0].clientY,a=e.changedTouches[0].clientX,n=Te-t,i=Math.abs(a-Me),s=Date.now()-Le;n>80&&s<300&&i<50&&(e.preventDefault(),zt(o.npTab||"lyrics"))});const Ge=u(".np-sheet");Ge&&(Ge.addEventListener("touchstart",e=>{e.target.closest('.np-seek-bar, .eq-band, input[type="range"]')||(Te=e.touches[0].clientY,Me=e.touches[0].clientX,Le=Date.now())}),Ge.addEventListener("touchend",e=>{const t=e.changedTouches[0].clientY,a=e.changedTouches[0].clientX,n=t-Te,i=Math.abs(a-Me),s=Date.now()-Le;n>100&&s<300&&i<50&&(e.preventDefault(),ke())}));let Je=0,Ke=null;u("#pb-cover").addEventListener("touchend",e=>{const t=Date.now(),a=e.target;if(t-Je<300&&a===Ke){if(e.preventDefault(),p.track){Se(p.track.id);const n=u("#pb-cover");n.style.transform="scale(0.92)",setTimeout(()=>{n.style.transform=""},150)}Je=0,Ke=null}else Je=t,Ke=a});let J=null;function Xn(e,t){const a=e.getBoundingClientRect(),n=Math.min(1,Math.max(0,(t-a.top)/a.height));return Math.round(12-n*24)}function Ws(e,t){const a=Number(e.dataset.eqBand),n=(12-t)/24*100,i=e.querySelector(".eq-thumb"),s=e.querySelector(".eq-fill");i&&(i.style.top=`${n}%`),s&&(s.style.top=`${Math.min(n,50)}%`,s.style.height=`${Math.abs(50-n)}%`),e.setAttribute("aria-valuenow",String(t));const r=u(`#eq-val-${a}`);r&&(r.textContent=`${t>0?"+":""}${t}`)}function qe(e,t,a){const n=Number(e.dataset.eqBand);Ws(e,t),p.eqState.gains[n]=t,p.setEqGain(n,t),a&&(p.eqState.preset="custom",K(".eq-presets .chip-btn").forEach(i=>i.classList.toggle("active",i.dataset.eqPreset==="custom")))}document.addEventListener("pointerdown",e=>{var a;const t=e.target.closest(".eq-track");t&&(e.preventDefault(),J={el:t,value:Xn(t,e.clientY)},(a=t.setPointerCapture)==null||a.call(t,e.pointerId),qe(t,J.value,!1))});document.addEventListener("pointermove",e=>{J&&(e.preventDefault(),J.value=Xn(J.el,e.clientY),qe(J.el,J.value,!1))});document.addEventListener("pointerup",()=>{J&&(qe(J.el,J.value,!0),J=null)});document.addEventListener("pointercancel",()=>{J=null});document.addEventListener("keydown",e=>{var i,s;const t=(s=(i=e.target).closest)==null?void 0:s.call(i,".eq-track");if(!t)return;const a=e.key==="ArrowUp"?1:e.key==="ArrowDown"?-1:0;if(!a)return;e.preventDefault();const n=Number(t.getAttribute("aria-valuenow"))||0;qe(t,Math.max(-12,Math.min(12,n+a)),!0)});const te=u("#search-input");let Ka;te.addEventListener("input",()=>{clearTimeout(Ka);const e=te.value.trim();e.length!==0&&(Ka=setTimeout(()=>{e.length>=2&&(location.hash=`#/search?q=${encodeURIComponent(e)}`)},350))});te.addEventListener("keydown",e=>{if(e.key==="Enter"){const t=te.value.trim();if(!t)return;te.blur(),Dn(t);const a=`#/search?q=${encodeURIComponent(t)}`;location.hash===a?P():location.hash=a}});u("#rescan-btn").addEventListener("click",async()=>{u("#rescan-btn").classList.add("spin");const e=Date.now();try{await rn(),setTimeout(async()=>{u("#rescan-btn").classList.remove("spin"),await fs()},Math.max(2500,Date.now()-e))}catch(t){u("#rescan-btn").classList.remove("spin"),Ot(t)||y(t.message,"error")}});u("#np-pill").addEventListener("click",()=>zt(o.npTab));p.addEventListener("track",()=>{$a(),o.npOpen&&ee(),se(),_t()});p.addEventListener("time",()=>{_t()});p.addEventListener("buffer",On);p.addEventListener("state",se);p.addEventListener("mode",Sa);p.addEventListener("volume",Pe);p.addEventListener("eq",()=>{o.npTab==="eq"&&o.npOpen&&Ce(u("#np-panel"))});p.addEventListener("error",e=>y(e.detail,"error"));document.addEventListener("error",e=>{e.target instanceof HTMLImageElement&&(e.target.style.display="none")},!0);window.addEventListener("hashchange",P);p.addEventListener("queueend",async()=>{if(o.liveMode)try{const e=await sn(25),t=new Set(p.queue.map(n=>n.id)),a=e.filter(n=>!t.has(n.id));if(!a.length){y("Live: новых треков не нашлось","warn");return}p.appendTracks(a),await p.next(!0)}catch(e){Ot(e)||y(e.message,"error")}});u("#auth-toggle-register").addEventListener("click",()=>{var e;return ka(((e=u("#register-invite"))==null?void 0:e.value)||"")});u("#auth-toggle-login").addEventListener("click",()=>{location.hash.startsWith("#/register")&&(location.hash="#/home"),Ht()});u("#register-invite").addEventListener("change",()=>{const e=u("#register-invite").value.trim();e&&ka(e)});u("#register-form").addEventListener("submit",async e=>{e.preventDefault();const t=u("#register-submit"),a=u("#register-error");a.textContent="",t.disabled=!0;try{await Ei({invite:u("#register-invite").value.trim(),username:u("#register-username").value.trim(),password:u("#register-password").value,displayName:u("#register-display").value.trim()}),location.hash="#/home",await Ea()}catch(n){a.textContent=n.message||"Не удалось зарегистрироваться"}finally{t.disabled=!1}});u("#login-form").addEventListener("submit",async e=>{e.preventDefault();const t=u("#login-submit"),a=u("#login-error");a.textContent="",t.disabled=!0;try{await ri(u("#login-username").value.trim(),u("#login-password").value),await Ea()}catch(n){a.textContent=n.message||"Не удалось войти"}finally{t.disabled=!1}});document.addEventListener("keydown",e=>{var t,a;e.key==="Enter"&&!u("#auth-screen").hidden&&((t=document.activeElement)==null?void 0:t.id)==="login-username"&&((a=u("#login-password"))==null||a.focus())});window.addEventListener("pagehide",()=>{p.playId&&p._finalizePlay(!1)});Pe();Sa();se();_t();Ea();
