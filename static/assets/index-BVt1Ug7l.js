(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();const xa={home:"M4 20v-8H2L12 3l10 9h-2v8h-6v-6h-4v6H4z",person:"M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z",album:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",music:"M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z",playlist:"M3 6h12v2H3V6zm0 4h12v2H3v-2zm0 4h8v2H3v-2zm12 .5a3.5 3.5 0 1 0 3.5 3.5V9h3V6h-4v8.5a3.5 3.5 0 0 0-2.5-.9z",search:"M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z",play:"M8 5v14l11-7L8 5z",pause:"M6 5h4v14H6V5zm8 0h4v14h-4V5z",prev:"M6 6h2v12H6V6zm3.5 6L18 18V6l-8.5 6z",next:"M16 6h2v12h-2V6zM6 18l8.5-6L6 6v12z",shuffle:"M10.59 9.17 5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z",repeat:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z",repeatOne:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z",volumeUp:"M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.5 4.5 0 0 0 16.5 12zM14 3.23v2.06a6.99 6.99 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54z",volumeDown:"M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.5 4.5 0 0 0 16.5 12z",volumeOff:"M16.5 12a4.5 4.5 0 0 0-2.5-4.03v2.21l2.45 2.45A4.4 4.4 0 0 0 16.5 12zM19 12a7 7 0 0 1-.94 3.51l1.48 1.48A9 9 0 0 0 14 4.75v2.06A7 7 0 0 1 19 12zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25a7 7 0 0 1-2.25 1.2v2.06a9 9 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z",queue:"M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18a3 3 0 1 0 2 2.82V8h3V6h-5z",lyrics:"M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2z",equalizer:"M7 20h2V10H7v10zm4-8h2V4h-2v8zm4 4h2V7h-2v9zM3 20h2v-6H3v6z",close:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",back:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",add:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",delete:"M6 19c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z",heart:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",heartOutline:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z",more:"M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",clock:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z",library:"M4 6H2v14a2 2 0 0 0 2 2h14v-2H4V6zm16-4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-3 9H9V9h8v2zm-2 4H9v-2h6v2zm2-8H9V5h8v2z",refresh:"M17.65 6.35A8 8 0 1 0 19.73 14h-2.08A6 6 0 1 1 12 6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z",edit:"M3 17.25V21h3.75L17.8 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",check:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",wave:"M3 12h2v4H3v-4zm4-4h2v12H7V8zm4-4h2v16h-2V4zm4 6h2v6h-2v-6zm4-2h2v10h-2V8z",radio:"M3.24 6.15C2.51 6.43 2 7.17 2 8v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-.83-.51-1.57-1.24-1.85L12.7 2.3a1 1 0 0 0-.7 0L3.24 6.15zM8 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm10-10H9v2h9v-2zm0 4h-3v2h3v-2z",logout:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5-5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z",thumbDown:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z",thumbUp:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z",chart:"M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z",palette:"M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z",settings:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.03 7.03 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.47.41l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z",chevronDown:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z",chevronRight:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z",ytm:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-13a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-1.5 7.25v-4.5L14.5 12l-4 2.25z",copy:"M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z",link:"M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4a3.1 3.1 0 0 1 0 6.2h-4V17h4a5 5 0 0 0 0-10z",ticket:"M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 1 0 4v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 1 0-4zm-2-1.46a4 4 0 0 0 0 6.92V18H4v-2.54a4 4 0 0 0 0-6.92V6h16v2.54zM11 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z",key:"M12.65 10A6 6 0 1 0 12.65 14H17v4h4v-4h2v-4H12.65zM7 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",lock:"M18 8h-1V6A5 5 0 0 0 7 6v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zM9 6a3 3 0 0 1 6 0v2H9V6zm9 14H6V10h12v10zm-6-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",moreHoriz:"M6 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",queueAdd:"M14 10H3v2h11v-2zm0-4H3v2h11V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM3 16h7v-2H3v2z",sparkle:"M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z",external:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z",shield:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",darkMode:"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8A9.3 9.3 0 0 0 12 3z",lightMode:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2 13h2a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm18 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM11 2v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM5.99 4.58a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06z",expand:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z",sun:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2 13h2a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm18 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM11 2v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM5.99 4.58a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06z",moon:"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8A9.3 9.3 0 0 0 12 3z",menu:"M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z",eye:"M12 5c-5 0-9 4.5-10 7 1 2.5 5 7 10 7s9-4.5 10-7c-1-2.5-5-7-10-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",eyeOff:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2.71 3.16l1.94 1.94C3.29 6.24 2.06 7.94 1 10c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l2.71 2.71 1.27-1.27L3.98 1.89 2.71 3.16zM12 15c-1.03 0-1.96-.42-2.64-1.1l3.54 3.54c-.28.09-.59.14-.9.14z"};function d(e,t=""){const a=xa[e]||xa.music;return`<svg class="icon ${t}" viewBox="0 0 24 24" aria-hidden="true"><path d="${a}"/></svg>`}const _e="1.16.1",xe="rustream-web";class Bt extends Error{constructor(t,a=0,n=""){super(t),this.name="ApiError",this.status=a,this.code=n}}function la(e,t={}){const a=new URLSearchParams({v:_e,c:xe,f:"json",...t});return`/rest/${e}.view?${a.toString()}`}async function lt(e,t={}){var s;const a=await fetch(la(e,t),{credentials:"same-origin"});if(a.status===401)throw new Bt("Требуется вход в аккаунт",401);if(!a.ok)throw new Bt(`HTTP ${a.status}`,a.status);const i=(await a.json())["subsonic-response"];if(!i)throw new Bt("Некорректный ответ сервера");if(i.status!=="ok")throw new Bt(((s=i.error)==null?void 0:s.message)||"Ошибка API");return i}async function M(e,t={}){const a=await fetch(e,{credentials:"same-origin",...t,headers:{"Content-Type":"application/json",...t.headers||{}}});let n=null;try{n=await a.json()}catch{n=null}if(!a.ok){const i=a.status===401?"Требуется вход в аккаунт":`HTTP ${a.status}`;throw new Bt((n==null?void 0:n.error)||i,a.status,(n==null?void 0:n.code)||"")}return n}const Lt=(e,t=300)=>e?la("getCoverArt",{id:e,size:t}):"",Ie=e=>la("stream",{id:e});async function Zn(){var a;const e=await lt("getArtists"),t=[];for(const n of((a=e.artists)==null?void 0:a.index)||[])for(const i of n.artist||[])t.push(i);return t}const tn=e=>lt("getArtist",{id:e}),ca=e=>lt("getAlbum",{id:e});async function en(e="alphabeticalByName",t=100,a=0){var i;return((i=(await lt("getAlbumList2",{type:e,size:t,offset:a})).albumList2)==null?void 0:i.album)||[]}async function ti(e=500){var a;return((a=(await lt("getRandomSongs",{size:e})).randomSongs)==null?void 0:a.song)||[]}async function ei(e){return(await lt("search3",{query:e,artistCount:30,albumCount:50,songCount:100})).searchResult3||{artist:[],album:[],song:[]}}async function da(){var t;return((t=(await lt("getPlaylists")).playlists)==null?void 0:t.playlist)||[]}async function ai(e){return(await lt("getPlaylist",{id:e})).playlist}const an=(e,t=[])=>{const a=new URLSearchParams({v:_e,c:xe,f:"json",name:e});return t.forEach(n=>a.append("songId",n)),fetch(`/rest/createPlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(n=>n.json()).then(n=>n["subsonic-response"])},ni=(e,t)=>{const a=new URLSearchParams({v:_e,c:xe,f:"json",playlistId:e,songIdToAdd:t});return fetch(`/rest/updatePlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(n=>n.json())},ii=(e,t)=>{const a=new URLSearchParams({v:_e,c:xe,f:"json",playlistId:e,songIndexToRemove:String(t)});return fetch(`/rest/updatePlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(n=>n.json())},si=e=>lt("deletePlaylist",{id:e});async function ri(){return(await lt("getStarred2")).starred2||{artist:[],album:[],song:[]}}async function oi(){return M("/api/stats")}async function He(){return M("/api/me")}async function li(){return M("/api/session")}async function Qe(){return M("/api/auth/config")}function ci(e,t){return M("/api/auth/login",{method:"POST",body:JSON.stringify({username:e,password:t})})}function nn(){return M("/api/auth/logout",{method:"POST"})}function Aa(e,t){return sn({displayName:e,theme:t})}function sn(e){return M("/api/me",{method:"PATCH",body:JSON.stringify(e)})}async function di(){return M("/api/me/ratings")}function ui(e,t){return M("/api/me/ratings",{method:"PUT",body:JSON.stringify({trackId:e,rating:t})})}function Oe(){return M("/api/admin/lastfm")}function Da(e,t,a=!1){return M("/api/admin/lastfm",{method:"PUT",body:JSON.stringify({apiKey:e,apiSecret:t,clear:a})})}function pi(e,t){return M("/api/me/password",{method:"POST",body:JSON.stringify({currentPassword:e,newPassword:t})})}function hi({lastfmUsername:e,lastfmSessionKey:t,listenbrainzToken:a}){return M("/api/me/scrobbling",{method:"PUT",body:JSON.stringify({lastfmUsername:e,lastfmSessionKey:t,listenbrainzToken:a})})}async function rn(){return M("/api/me/stats")}async function fi(e,t="web"){return M("/api/plays/start",{method:"POST",body:JSON.stringify({trackId:e,source:t})})}function Ca(e,t,a=!1){return M("/api/plays/update",{method:"POST",body:JSON.stringify({playId:e,positionMs:t,completed:a})})}async function on(e=40){return(await M(`/api/live/queue?count=${e}`)).tracks||[]}async function mi(){return(await M("/api/live/mixes")).mixes||[]}async function vi(e,t=!1){return M(`/api/lyrics/${encodeURIComponent(e)}${t?"?refresh=1":""}`)}async function ln(){return M("/api/rescan",{method:"POST"})}async function gi(){return(await M("/api/users")).users||[]}function bi({username:e,password:t,displayName:a,isAdmin:n}){return M("/api/users",{method:"POST",body:JSON.stringify({username:e,password:t,displayName:a,isAdmin:n})})}function yi(){return M("/api/me/history",{method:"DELETE"})}function wi(e){return M(`/api/users/${e}`,{method:"DELETE"})}function $i(){return M("/api/lastfm/connect")}function Si(e=""){return M("/api/lastfm/complete",{method:"POST",body:JSON.stringify({token:e})})}async function ki(){const e=await M("/api/admin/invites");return(e==null?void 0:e.invites)||[]}async function Ei({note:e,expiresInDays:t,maxUses:a,isAdmin:n}){const i=await M("/api/admin/invites",{method:"POST",body:JSON.stringify({note:e,expiresInDays:t,maxUses:a,isAdmin:n})});return i==null?void 0:i.invite}function Ti(e){return M(`/api/admin/invites/${encodeURIComponent(e)}`,{method:"DELETE"})}function Mi(e){return M(`/api/auth/invite/${encodeURIComponent(e)}`)}function Li({invite:e,username:t,password:a,displayName:n}){return M("/api/auth/register",{method:"POST",body:JSON.stringify({invite:e,username:t,password:a,displayName:n||void 0})})}const cn=e=>`${location.origin}/static/index.html#/register?invite=${encodeURIComponent(e)}`;function Ae(){return M("/api/me/ytm")}function _i(e){return M("/api/me/ytm",{method:"PUT",body:JSON.stringify({cookies:e})})}function xi(){return M("/api/me/ytm",{method:"DELETE"})}async function dn(e,t=40){const a=new URLSearchParams({q:e,limit:String(t)}),n=await M(`/api/ytm/search?${a.toString()}`);return(n==null?void 0:n.tracks)||[]}async function un(e=200){const t=await M(`/api/ytm/liked?limit=${e}`);return(t==null?void 0:t.tracks)||[]}async function pn(e=40){const t=await M(`/api/ytm/history?limit=${e}`);return(t==null?void 0:t.tracks)||[]}function Ai(){return M("/api/me/player")}function Di(e){return M("/api/me/player",{method:"PUT",body:JSON.stringify({state:e})})}/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Ci(e,t,a){return(t=Ii(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function pt(){return pt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},pt.apply(null,arguments)}function Pa(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),a.push.apply(a,n)}return a}function ot(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Pa(Object(a),!0).forEach(function(n){Ci(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Pa(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function Pi(e,t){if(e==null)return{};var a,n,i=zi(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}function zi(e,t){if(e==null)return{};var a={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;a[n]=e[n]}return a}function qi(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ii(e){var t=qi(e,"string");return typeof t=="symbol"?t:t+""}function Ze(e){"@babel/helpers - typeof";return Ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ze(e)}var Hi="1.15.7";function ut(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var ht=ut(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),ae=ut(/Edge/i),za=ut(/firefox/i),Gt=ut(/safari/i)&&!ut(/chrome/i)&&!ut(/android/i),ua=ut(/iP(ad|od|hone)/i),hn=ut(/chrome/i)&&ut(/android/i),fn={capture:!1,passive:!1};function _(e,t,a){e.addEventListener(t,a,!ht&&fn)}function L(e,t,a){e.removeEventListener(t,a,!ht&&fn)}function me(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function mn(e){return e.host&&e!==document&&e.host.nodeType&&e.host!==e?e.host:e.parentNode}function nt(e,t,a,n){if(e){a=a||document;do{if(t!=null&&(t[0]===">"?e.parentNode===a&&me(e,t):me(e,t))||n&&e===a)return e;if(e===a)break}while(e=mn(e))}return null}var qa=/\s+/g;function X(e,t,a){if(e&&t)if(e.classList)e.classList[a?"add":"remove"](t);else{var n=(" "+e.className+" ").replace(qa," ").replace(" "+t+" "," ");e.className=(n+(a?" "+t:"")).replace(qa," ")}}function S(e,t,a){var n=e&&e.style;if(n){if(a===void 0)return document.defaultView&&document.defaultView.getComputedStyle?a=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(a=e.currentStyle),t===void 0?a:a[t];!(t in n)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),n[t]=a+(typeof a=="string"?"":"px")}}function qt(e,t){var a="";if(typeof e=="string")a=e;else do{var n=S(e,"transform");n&&n!=="none"&&(a=n+" "+a)}while(!t&&(e=e.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(a)}function vn(e,t,a){if(e){var n=e.getElementsByTagName(t),i=0,s=n.length;if(a)for(;i<s;i++)a(n[i],i);return n}return[]}function rt(){var e=document.scrollingElement;return e||document.documentElement}function q(e,t,a,n,i){if(!(!e.getBoundingClientRect&&e!==window)){var s,c,l,r,p,m,g;if(e!==window&&e.parentNode&&e!==rt()?(s=e.getBoundingClientRect(),c=s.top,l=s.left,r=s.bottom,p=s.right,m=s.height,g=s.width):(c=0,l=0,r=window.innerHeight,p=window.innerWidth,m=window.innerHeight,g=window.innerWidth),(t||a)&&e!==window&&(i=i||e.parentNode,!ht))do if(i&&i.getBoundingClientRect&&(S(i,"transform")!=="none"||a&&S(i,"position")!=="static")){var f=i.getBoundingClientRect();c-=f.top+parseInt(S(i,"border-top-width")),l-=f.left+parseInt(S(i,"border-left-width")),r=c+s.height,p=l+s.width;break}while(i=i.parentNode);if(n&&e!==window){var w=qt(i||e),E=w&&w.a,x=w&&w.d;w&&(c/=x,l/=E,g/=E,m/=x,r=c+m,p=l+g)}return{top:c,left:l,bottom:r,right:p,width:g,height:m}}}function Ia(e,t,a){for(var n=bt(e,!0),i=q(e)[t];n;){var s=q(n)[a],c=void 0;if(c=i>=s,!c)return n;if(n===rt())break;n=bt(n,!1)}return!1}function It(e,t,a,n){for(var i=0,s=0,c=e.children;s<c.length;){if(c[s].style.display!=="none"&&c[s]!==k.ghost&&(n||c[s]!==k.dragged)&&nt(c[s],a.draggable,e,!1)){if(i===t)return c[s];i++}s++}return null}function pa(e,t){for(var a=e.lastElementChild;a&&(a===k.ghost||S(a,"display")==="none"||t&&!me(a,t));)a=a.previousElementSibling;return a||null}function G(e,t){var a=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==k.clone&&(!t||me(e,t))&&a++;return a}function Ha(e){var t=0,a=0,n=rt();if(e)do{var i=qt(e),s=i.a,c=i.d;t+=e.scrollLeft*s,a+=e.scrollTop*c}while(e!==n&&(e=e.parentNode));return[t,a]}function Oi(e,t){for(var a in e)if(e.hasOwnProperty(a)){for(var n in t)if(t.hasOwnProperty(n)&&t[n]===e[a][n])return Number(a)}return-1}function bt(e,t){if(!e||!e.getBoundingClientRect)return rt();var a=e,n=!1;do if(a.clientWidth<a.scrollWidth||a.clientHeight<a.scrollHeight){var i=S(a);if(a.clientWidth<a.scrollWidth&&(i.overflowX=="auto"||i.overflowX=="scroll")||a.clientHeight<a.scrollHeight&&(i.overflowY=="auto"||i.overflowY=="scroll")){if(!a.getBoundingClientRect||a===document.body)return rt();if(n||t)return a;n=!0}}while(a=a.parentNode);return rt()}function Ni(e,t){if(e&&t)for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);return e}function Ne(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var Jt;function gn(e,t){return function(){if(!Jt){var a=arguments,n=this;a.length===1?e.call(n,a[0]):e.apply(n,a),Jt=setTimeout(function(){Jt=void 0},t)}}}function Ri(){clearTimeout(Jt),Jt=void 0}function bn(e,t,a){e.scrollLeft+=t,e.scrollTop+=a}function yn(e){var t=window.Polymer,a=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):a?a(e).clone(!0)[0]:e.cloneNode(!0)}function wn(e,t,a){var n={};return Array.from(e.children).forEach(function(i){var s,c,l,r;if(!(!nt(i,t.draggable,e,!1)||i.animated||i===a)){var p=q(i);n.left=Math.min((s=n.left)!==null&&s!==void 0?s:1/0,p.left),n.top=Math.min((c=n.top)!==null&&c!==void 0?c:1/0,p.top),n.right=Math.max((l=n.right)!==null&&l!==void 0?l:-1/0,p.right),n.bottom=Math.max((r=n.bottom)!==null&&r!==void 0?r:-1/0,p.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var B="Sortable"+new Date().getTime();function Vi(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var n=[].slice.call(this.el.children);n.forEach(function(i){if(!(S(i,"display")==="none"||i===k.ghost)){e.push({target:i,rect:q(i)});var s=ot({},e[e.length-1].rect);if(i.thisAnimationDuration){var c=qt(i,!0);c&&(s.top-=c.f,s.left-=c.e)}i.fromRect=s}})}},addAnimationState:function(n){e.push(n)},removeAnimationState:function(n){e.splice(Oi(e,{target:n}),1)},animateAll:function(n){var i=this;if(!this.options.animation){clearTimeout(t),typeof n=="function"&&n();return}var s=!1,c=0;e.forEach(function(l){var r=0,p=l.target,m=p.fromRect,g=q(p),f=p.prevFromRect,w=p.prevToRect,E=l.rect,x=qt(p,!0);x&&(g.top-=x.f,g.left-=x.e),p.toRect=g,p.thisAnimationDuration&&Ne(f,g)&&!Ne(m,g)&&(E.top-g.top)/(E.left-g.left)===(m.top-g.top)/(m.left-g.left)&&(r=Yi(E,f,w,i.options)),Ne(g,m)||(p.prevFromRect=m,p.prevToRect=g,r||(r=i.options.animation),i.animate(p,E,g,r)),r&&(s=!0,c=Math.max(c,r),clearTimeout(p.animationResetTimer),p.animationResetTimer=setTimeout(function(){p.animationTime=0,p.prevFromRect=null,p.fromRect=null,p.prevToRect=null,p.thisAnimationDuration=null},r),p.thisAnimationDuration=r)}),clearTimeout(t),s?t=setTimeout(function(){typeof n=="function"&&n()},c):typeof n=="function"&&n(),e=[]},animate:function(n,i,s,c){if(c){S(n,"transition",""),S(n,"transform","");var l=qt(this.el),r=l&&l.a,p=l&&l.d,m=(i.left-s.left)/(r||1),g=(i.top-s.top)/(p||1);n.animatingX=!!m,n.animatingY=!!g,S(n,"transform","translate3d("+m+"px,"+g+"px,0)"),this.forRepaintDummy=ji(n),S(n,"transition","transform "+c+"ms"+(this.options.easing?" "+this.options.easing:"")),S(n,"transform","translate3d(0,0,0)"),typeof n.animated=="number"&&clearTimeout(n.animated),n.animated=setTimeout(function(){S(n,"transition",""),S(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},c)}}}}function ji(e){return e.offsetWidth}function Yi(e,t,a,n){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-a.top,2)+Math.pow(t.left-a.left,2))*n.animation}var xt=[],Re={initializeByDefault:!0},ne={mount:function(t){for(var a in Re)Re.hasOwnProperty(a)&&!(a in t)&&(t[a]=Re[a]);xt.forEach(function(n){if(n.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),xt.push(t)},pluginEvent:function(t,a,n){var i=this;this.eventCanceled=!1,n.cancel=function(){i.eventCanceled=!0};var s=t+"Global";xt.forEach(function(c){a[c.pluginName]&&(a[c.pluginName][s]&&a[c.pluginName][s](ot({sortable:a},n)),a.options[c.pluginName]&&a[c.pluginName][t]&&a[c.pluginName][t](ot({sortable:a},n)))})},initializePlugins:function(t,a,n,i){xt.forEach(function(l){var r=l.pluginName;if(!(!t.options[r]&&!l.initializeByDefault)){var p=new l(t,a,t.options);p.sortable=t,p.options=t.options,t[r]=p,pt(n,p.defaults)}});for(var s in t.options)if(t.options.hasOwnProperty(s)){var c=this.modifyOption(t,s,t.options[s]);typeof c<"u"&&(t.options[s]=c)}},getEventProperties:function(t,a){var n={};return xt.forEach(function(i){typeof i.eventProperties=="function"&&pt(n,i.eventProperties.call(a[i.pluginName],t))}),n},modifyOption:function(t,a,n){var i;return xt.forEach(function(s){t[s.pluginName]&&s.optionListeners&&typeof s.optionListeners[a]=="function"&&(i=s.optionListeners[a].call(t[s.pluginName],n))}),i}};function Bi(e){var t=e.sortable,a=e.rootEl,n=e.name,i=e.targetEl,s=e.cloneEl,c=e.toEl,l=e.fromEl,r=e.oldIndex,p=e.newIndex,m=e.oldDraggableIndex,g=e.newDraggableIndex,f=e.originalEvent,w=e.putSortable,E=e.extraEventProperties;if(t=t||a&&a[B],!!t){var x,H=t.options,Z="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!ht&&!ae?x=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(x=document.createEvent("Event"),x.initEvent(n,!0,!0)),x.to=c||a,x.from=l||a,x.item=i||a,x.clone=s,x.oldIndex=r,x.newIndex=p,x.oldDraggableIndex=m,x.newDraggableIndex=g,x.originalEvent=f,x.pullMode=w?w.lastPutMode:void 0;var R=ot(ot({},E),ne.getEventProperties(n,t));for(var tt in R)x[tt]=R[tt];a&&a.dispatchEvent(x),H[Z]&&H[Z].call(t,x)}}var Fi=["evt"],Y=function(t,a){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.evt,s=Pi(n,Fi);ne.pluginEvent.bind(k)(t,a,ot({dragEl:v,parentEl:C,ghostEl:T,rootEl:A,nextEl:Mt,lastDownEl:ue,cloneEl:D,cloneHidden:gt,dragStarted:Ft,putSortable:O,activeSortable:k.active,originalEvent:i,oldIndex:Pt,oldDraggableIndex:Kt,newIndex:W,newDraggableIndex:vt,hideGhostForTarget:En,unhideGhostForTarget:Tn,cloneNowHidden:function(){gt=!0},cloneNowShown:function(){gt=!1},dispatchSortableEvent:function(l){V({sortable:a,name:l,originalEvent:i})}},s))};function V(e){Bi(ot({putSortable:O,cloneEl:D,targetEl:v,rootEl:A,oldIndex:Pt,oldDraggableIndex:Kt,newIndex:W,newDraggableIndex:vt},e))}var v,C,T,A,Mt,ue,D,gt,Pt,W,Kt,vt,oe,O,Ct=!1,ve=!1,ge=[],Et,et,Ve,je,Oa,Na,Ft,At,Qt,Zt=!1,le=!1,pe,N,Ye=[],ta=!1,be=[],De=typeof document<"u",ce=ua,Ra=ae||ht?"cssFloat":"float",Ui=De&&!hn&&!ua&&"draggable"in document.createElement("div"),$n=(function(){if(De){if(ht)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}})(),Sn=function(t,a){var n=S(t),i=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),s=It(t,0,a),c=It(t,1,a),l=s&&S(s),r=c&&S(c),p=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+q(s).width,m=r&&parseInt(r.marginLeft)+parseInt(r.marginRight)+q(c).width;if(n.display==="flex")return n.flexDirection==="column"||n.flexDirection==="column-reverse"?"vertical":"horizontal";if(n.display==="grid")return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(s&&l.float&&l.float!=="none"){var g=l.float==="left"?"left":"right";return c&&(r.clear==="both"||r.clear===g)?"vertical":"horizontal"}return s&&(l.display==="block"||l.display==="flex"||l.display==="table"||l.display==="grid"||p>=i&&n[Ra]==="none"||c&&n[Ra]==="none"&&p+m>i)?"vertical":"horizontal"},Xi=function(t,a,n){var i=n?t.left:t.top,s=n?t.right:t.bottom,c=n?t.width:t.height,l=n?a.left:a.top,r=n?a.right:a.bottom,p=n?a.width:a.height;return i===l||s===r||i+c/2===l+p/2},Wi=function(t,a){var n;return ge.some(function(i){var s=i[B].options.emptyInsertThreshold;if(!(!s||pa(i))){var c=q(i),l=t>=c.left-s&&t<=c.right+s,r=a>=c.top-s&&a<=c.bottom+s;if(l&&r)return n=i}}),n},kn=function(t){function a(s,c){return function(l,r,p,m){var g=l.options.group.name&&r.options.group.name&&l.options.group.name===r.options.group.name;if(s==null&&(c||g))return!0;if(s==null||s===!1)return!1;if(c&&s==="clone")return s;if(typeof s=="function")return a(s(l,r,p,m),c)(l,r,p,m);var f=(c?l:r).options.group.name;return s===!0||typeof s=="string"&&s===f||s.join&&s.indexOf(f)>-1}}var n={},i=t.group;(!i||Ze(i)!="object")&&(i={name:i}),n.name=i.name,n.checkPull=a(i.pull,!0),n.checkPut=a(i.put),n.revertClone=i.revertClone,t.group=n},En=function(){!$n&&T&&S(T,"display","none")},Tn=function(){!$n&&T&&S(T,"display","")};De&&!hn&&document.addEventListener("click",function(e){if(ve)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),ve=!1,!1},!0);var Tt=function(t){if(v){t=t.touches?t.touches[0]:t;var a=Wi(t.clientX,t.clientY);if(a){var n={};for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);n.target=n.rootEl=a,n.preventDefault=void 0,n.stopPropagation=void 0,a[B]._onDragOver(n)}}},Gi=function(t){v&&v.parentNode[B]._isOutsideThisEl(t.target)};function k(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=pt({},t),e[B]=this;var a={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Sn(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(c,l){c.setData("Text",l.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:k.supportPointer!==!1&&"PointerEvent"in window&&(!Gt||ua),emptyInsertThreshold:5};ne.initializePlugins(this,e,a);for(var n in a)!(n in t)&&(t[n]=a[n]);kn(t);for(var i in this)i.charAt(0)==="_"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this));this.nativeDraggable=t.forceFallback?!1:Ui,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?_(e,"pointerdown",this._onTapStart):(_(e,"mousedown",this._onTapStart),_(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(_(e,"dragover",this),_(e,"dragenter",this)),ge.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),pt(this,Vi())}k.prototype={constructor:k,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(At=null)},_getDirection:function(t,a){return typeof this.options.direction=="function"?this.options.direction.call(this,t,a,v):this.options.direction},_onTapStart:function(t){if(t.cancelable){var a=this,n=this.el,i=this.options,s=i.preventOnFilter,c=t.type,l=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,r=(l||t).target,p=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||r,m=i.filter;if(ns(n),!v&&!(/mousedown|pointerdown/.test(c)&&t.button!==0||i.disabled)&&!p.isContentEditable&&!(!this.nativeDraggable&&Gt&&r&&r.tagName.toUpperCase()==="SELECT")&&(r=nt(r,i.draggable,n,!1),!(r&&r.animated)&&ue!==r)){if(Pt=G(r),Kt=G(r,i.draggable),typeof m=="function"){if(m.call(this,t,r,this)){V({sortable:a,rootEl:p,name:"filter",targetEl:r,toEl:n,fromEl:n}),Y("filter",a,{evt:t}),s&&t.preventDefault();return}}else if(m&&(m=m.split(",").some(function(g){if(g=nt(p,g.trim(),n,!1),g)return V({sortable:a,rootEl:g,name:"filter",targetEl:r,fromEl:n,toEl:n}),Y("filter",a,{evt:t}),!0}),m)){s&&t.preventDefault();return}i.handle&&!nt(p,i.handle,n,!1)||this._prepareDragStart(t,l,r)}}},_prepareDragStart:function(t,a,n){var i=this,s=i.el,c=i.options,l=s.ownerDocument,r;if(n&&!v&&n.parentNode===s){var p=q(n);if(A=s,v=n,C=v.parentNode,Mt=v.nextSibling,ue=n,oe=c.group,k.dragged=v,Et={target:v,clientX:(a||t).clientX,clientY:(a||t).clientY},Oa=Et.clientX-p.left,Na=Et.clientY-p.top,this._lastX=(a||t).clientX,this._lastY=(a||t).clientY,v.style["will-change"]="all",r=function(){if(Y("delayEnded",i,{evt:t}),k.eventCanceled){i._onDrop();return}i._disableDelayedDragEvents(),!za&&i.nativeDraggable&&(v.draggable=!0),i._triggerDragStart(t,a),V({sortable:i,name:"choose",originalEvent:t}),X(v,c.chosenClass,!0)},c.ignore.split(",").forEach(function(m){vn(v,m.trim(),Be)}),_(l,"dragover",Tt),_(l,"mousemove",Tt),_(l,"touchmove",Tt),c.supportPointer?(_(l,"pointerup",i._onDrop),!this.nativeDraggable&&_(l,"pointercancel",i._onDrop)):(_(l,"mouseup",i._onDrop),_(l,"touchend",i._onDrop),_(l,"touchcancel",i._onDrop)),za&&this.nativeDraggable&&(this.options.touchStartThreshold=4,v.draggable=!0),Y("delayStart",this,{evt:t}),c.delay&&(!c.delayOnTouchOnly||a)&&(!this.nativeDraggable||!(ae||ht))){if(k.eventCanceled){this._onDrop();return}c.supportPointer?(_(l,"pointerup",i._disableDelayedDrag),_(l,"pointercancel",i._disableDelayedDrag)):(_(l,"mouseup",i._disableDelayedDrag),_(l,"touchend",i._disableDelayedDrag),_(l,"touchcancel",i._disableDelayedDrag)),_(l,"mousemove",i._delayedDragTouchMoveHandler),_(l,"touchmove",i._delayedDragTouchMoveHandler),c.supportPointer&&_(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(r,c.delay)}else r()}},_delayedDragTouchMoveHandler:function(t){var a=t.touches?t.touches[0]:t;Math.max(Math.abs(a.clientX-this._lastX),Math.abs(a.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){v&&Be(v),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;L(t,"mouseup",this._disableDelayedDrag),L(t,"touchend",this._disableDelayedDrag),L(t,"touchcancel",this._disableDelayedDrag),L(t,"pointerup",this._disableDelayedDrag),L(t,"pointercancel",this._disableDelayedDrag),L(t,"mousemove",this._delayedDragTouchMoveHandler),L(t,"touchmove",this._delayedDragTouchMoveHandler),L(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,a){a=a||t.pointerType=="touch"&&t,!this.nativeDraggable||a?this.options.supportPointer?_(document,"pointermove",this._onTouchMove):a?_(document,"touchmove",this._onTouchMove):_(document,"mousemove",this._onTouchMove):(_(v,"dragend",this),_(A,"dragstart",this._onDragStart));try{document.selection?he(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,a){if(Ct=!1,A&&v){Y("dragStarted",this,{evt:a}),this.nativeDraggable&&_(document,"dragover",Gi);var n=this.options;!t&&X(v,n.dragClass,!1),X(v,n.ghostClass,!0),k.active=this,t&&this._appendGhost(),V({sortable:this,name:"start",originalEvent:a})}else this._nulling()},_emulateDragOver:function(){if(et){this._lastX=et.clientX,this._lastY=et.clientY,En();for(var t=document.elementFromPoint(et.clientX,et.clientY),a=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(et.clientX,et.clientY),t!==a);)a=t;if(v.parentNode[B]._isOutsideThisEl(t),a)do{if(a[B]){var n=void 0;if(n=a[B]._onDragOver({clientX:et.clientX,clientY:et.clientY,target:t,rootEl:a}),n&&!this.options.dragoverBubble)break}t=a}while(a=mn(a));Tn()}},_onTouchMove:function(t){if(Et){var a=this.options,n=a.fallbackTolerance,i=a.fallbackOffset,s=t.touches?t.touches[0]:t,c=T&&qt(T,!0),l=T&&c&&c.a,r=T&&c&&c.d,p=ce&&N&&Ha(N),m=(s.clientX-Et.clientX+i.x)/(l||1)+(p?p[0]-Ye[0]:0)/(l||1),g=(s.clientY-Et.clientY+i.y)/(r||1)+(p?p[1]-Ye[1]:0)/(r||1);if(!k.active&&!Ct){if(n&&Math.max(Math.abs(s.clientX-this._lastX),Math.abs(s.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(T){c?(c.e+=m-(Ve||0),c.f+=g-(je||0)):c={a:1,b:0,c:0,d:1,e:m,f:g};var f="matrix(".concat(c.a,",").concat(c.b,",").concat(c.c,",").concat(c.d,",").concat(c.e,",").concat(c.f,")");S(T,"webkitTransform",f),S(T,"mozTransform",f),S(T,"msTransform",f),S(T,"transform",f),Ve=m,je=g,et=s}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!T){var t=this.options.fallbackOnBody?document.body:A,a=q(v,!0,ce,!0,t),n=this.options;if(ce){for(N=t;S(N,"position")==="static"&&S(N,"transform")==="none"&&N!==document;)N=N.parentNode;N!==document.body&&N!==document.documentElement?(N===document&&(N=rt()),a.top+=N.scrollTop,a.left+=N.scrollLeft):N=rt(),Ye=Ha(N)}T=v.cloneNode(!0),X(T,n.ghostClass,!1),X(T,n.fallbackClass,!0),X(T,n.dragClass,!0),S(T,"transition",""),S(T,"transform",""),S(T,"box-sizing","border-box"),S(T,"margin",0),S(T,"top",a.top),S(T,"left",a.left),S(T,"width",a.width),S(T,"height",a.height),S(T,"opacity","0.8"),S(T,"position",ce?"absolute":"fixed"),S(T,"zIndex","100000"),S(T,"pointerEvents","none"),k.ghost=T,t.appendChild(T),S(T,"transform-origin",Oa/parseInt(T.style.width)*100+"% "+Na/parseInt(T.style.height)*100+"%")}},_onDragStart:function(t,a){var n=this,i=t.dataTransfer,s=n.options;if(Y("dragStart",this,{evt:t}),k.eventCanceled){this._onDrop();return}Y("setupClone",this),k.eventCanceled||(D=yn(v),D.removeAttribute("id"),D.draggable=!1,D.style["will-change"]="",this._hideClone(),X(D,this.options.chosenClass,!1),k.clone=D),n.cloneId=he(function(){Y("clone",n),!k.eventCanceled&&(n.options.removeCloneOnHide||A.insertBefore(D,v),n._hideClone(),V({sortable:n,name:"clone"}))}),!a&&X(v,s.dragClass,!0),a?(ve=!0,n._loopId=setInterval(n._emulateDragOver,50)):(L(document,"mouseup",n._onDrop),L(document,"touchend",n._onDrop),L(document,"touchcancel",n._onDrop),i&&(i.effectAllowed="move",s.setData&&s.setData.call(n,i,v)),_(document,"drop",n),S(v,"transform","translateZ(0)")),Ct=!0,n._dragStartId=he(n._dragStarted.bind(n,a,t)),_(document,"selectstart",n),Ft=!0,window.getSelection().removeAllRanges(),Gt&&S(document.body,"user-select","none")},_onDragOver:function(t){var a=this.el,n=t.target,i,s,c,l=this.options,r=l.group,p=k.active,m=oe===r,g=l.sort,f=O||p,w,E=this,x=!1;if(ta)return;function H(Yt,Kn){Y(Yt,E,ot({evt:t,isOwner:m,axis:w?"vertical":"horizontal",revert:c,dragRect:i,targetRect:s,canSort:g,fromSortable:f,target:n,completed:R,onMove:function(_a,Qn){return de(A,a,v,i,_a,q(_a),t,Qn)},changed:tt},Kn))}function Z(){H("dragOverAnimationCapture"),E.captureAnimationState(),E!==f&&f.captureAnimationState()}function R(Yt){return H("dragOverCompleted",{insertion:Yt}),Yt&&(m?p._hideClone():p._showClone(E),E!==f&&(X(v,O?O.options.ghostClass:p.options.ghostClass,!1),X(v,l.ghostClass,!0)),O!==E&&E!==k.active?O=E:E===k.active&&O&&(O=null),f===E&&(E._ignoreWhileAnimating=n),E.animateAll(function(){H("dragOverAnimationComplete"),E._ignoreWhileAnimating=null}),E!==f&&(f.animateAll(),f._ignoreWhileAnimating=null)),(n===v&&!v.animated||n===a&&!n.animated)&&(At=null),!l.dragoverBubble&&!t.rootEl&&n!==document&&(v.parentNode[B]._isOutsideThisEl(t.target),!Yt&&Tt(t)),!l.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),x=!0}function tt(){W=G(v),vt=G(v,l.draggable),V({sortable:E,name:"change",toEl:a,newIndex:W,newDraggableIndex:vt,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),n=nt(n,l.draggable,a,!0),H("dragOver"),k.eventCanceled)return x;if(v.contains(t.target)||n.animated&&n.animatingX&&n.animatingY||E._ignoreWhileAnimating===n)return R(!1);if(ve=!1,p&&!l.disabled&&(m?g||(c=C!==A):O===this||(this.lastPutMode=oe.checkPull(this,p,v,t))&&r.checkPut(this,p,v,t))){if(w=this._getDirection(t,n)==="vertical",i=q(v),H("dragOverValid"),k.eventCanceled)return x;if(c)return C=A,Z(),this._hideClone(),H("revert"),k.eventCanceled||(Mt?A.insertBefore(v,Mt):A.appendChild(v)),R(!0);var F=pa(a,l.draggable);if(!F||Zi(t,w,this)&&!F.animated){if(F===v)return R(!1);if(F&&a===t.target&&(n=F),n&&(s=q(n)),de(A,a,v,i,n,s,t,!!n)!==!1)return Z(),F&&F.nextSibling?a.insertBefore(v,F.nextSibling):a.appendChild(v),C=a,tt(),R(!0)}else if(F&&Qi(t,w,this)){var $t=It(a,0,l,!0);if($t===v)return R(!1);if(n=$t,s=q(n),de(A,a,v,i,n,s,t,!1)!==!1)return Z(),a.insertBefore(v,$t),C=a,tt(),R(!0)}else if(n.parentNode===a){s=q(n);var it=0,St,Nt=v.parentNode!==a,U=!Xi(v.animated&&v.toRect||i,n.animated&&n.toRect||s,w),Rt=w?"top":"left",ft=Ia(n,"top","top")||Ia(v,"top","top"),Vt=ft?ft.scrollTop:void 0;At!==n&&(St=s[Rt],Zt=!1,le=!U&&l.invertSwap||Nt),it=ts(t,n,s,w,U?1:l.swapThreshold,l.invertedSwapThreshold==null?l.swapThreshold:l.invertedSwapThreshold,le,At===n);var dt;if(it!==0){var kt=G(v);do kt-=it,dt=C.children[kt];while(dt&&(S(dt,"display")==="none"||dt===T))}if(it===0||dt===n)return R(!1);At=n,Qt=it;var jt=n.nextElementSibling,mt=!1;mt=it===1;var re=de(A,a,v,i,n,s,t,mt);if(re!==!1)return(re===1||re===-1)&&(mt=re===1),ta=!0,setTimeout(Ki,30),Z(),mt&&!jt?a.appendChild(v):n.parentNode.insertBefore(v,mt?jt:n),ft&&bn(ft,0,Vt-ft.scrollTop),C=v.parentNode,St!==void 0&&!le&&(pe=Math.abs(St-q(n)[Rt])),tt(),R(!0)}if(a.contains(v))return R(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){L(document,"mousemove",this._onTouchMove),L(document,"touchmove",this._onTouchMove),L(document,"pointermove",this._onTouchMove),L(document,"dragover",Tt),L(document,"mousemove",Tt),L(document,"touchmove",Tt)},_offUpEvents:function(){var t=this.el.ownerDocument;L(t,"mouseup",this._onDrop),L(t,"touchend",this._onDrop),L(t,"pointerup",this._onDrop),L(t,"pointercancel",this._onDrop),L(t,"touchcancel",this._onDrop),L(document,"selectstart",this)},_onDrop:function(t){var a=this.el,n=this.options;if(W=G(v),vt=G(v,n.draggable),Y("drop",this,{evt:t}),C=v&&v.parentNode,W=G(v),vt=G(v,n.draggable),k.eventCanceled){this._nulling();return}Ct=!1,le=!1,Zt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),ea(this.cloneId),ea(this._dragStartId),this.nativeDraggable&&(L(document,"drop",this),L(a,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Gt&&S(document.body,"user-select",""),S(v,"transform",""),t&&(Ft&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),T&&T.parentNode&&T.parentNode.removeChild(T),(A===C||O&&O.lastPutMode!=="clone")&&D&&D.parentNode&&D.parentNode.removeChild(D),v&&(this.nativeDraggable&&L(v,"dragend",this),Be(v),v.style["will-change"]="",Ft&&!Ct&&X(v,O?O.options.ghostClass:this.options.ghostClass,!1),X(v,this.options.chosenClass,!1),V({sortable:this,name:"unchoose",toEl:C,newIndex:null,newDraggableIndex:null,originalEvent:t}),A!==C?(W>=0&&(V({rootEl:C,name:"add",toEl:C,fromEl:A,originalEvent:t}),V({sortable:this,name:"remove",toEl:C,originalEvent:t}),V({rootEl:C,name:"sort",toEl:C,fromEl:A,originalEvent:t}),V({sortable:this,name:"sort",toEl:C,originalEvent:t})),O&&O.save()):W!==Pt&&W>=0&&(V({sortable:this,name:"update",toEl:C,originalEvent:t}),V({sortable:this,name:"sort",toEl:C,originalEvent:t})),k.active&&((W==null||W===-1)&&(W=Pt,vt=Kt),V({sortable:this,name:"end",toEl:C,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){Y("nulling",this),A=v=C=T=Mt=D=ue=gt=Et=et=Ft=W=vt=Pt=Kt=At=Qt=O=oe=k.dragged=k.ghost=k.clone=k.active=null;var t=this.el;be.forEach(function(a){t.contains(a)&&(a.checked=!0)}),be.length=Ve=je=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":v&&(this._onDragOver(t),Ji(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],a,n=this.el.children,i=0,s=n.length,c=this.options;i<s;i++)a=n[i],nt(a,c.draggable,this.el,!1)&&t.push(a.getAttribute(c.dataIdAttr)||as(a));return t},sort:function(t,a){var n={},i=this.el;this.toArray().forEach(function(s,c){var l=i.children[c];nt(l,this.options.draggable,i,!1)&&(n[s]=l)},this),a&&this.captureAnimationState(),t.forEach(function(s){n[s]&&(i.removeChild(n[s]),i.appendChild(n[s]))}),a&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,a){return nt(t,a||this.options.draggable,this.el,!1)},option:function(t,a){var n=this.options;if(a===void 0)return n[t];var i=ne.modifyOption(this,t,a);typeof i<"u"?n[t]=i:n[t]=a,t==="group"&&kn(n)},destroy:function(){Y("destroy",this);var t=this.el;t[B]=null,L(t,"mousedown",this._onTapStart),L(t,"touchstart",this._onTapStart),L(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(L(t,"dragover",this),L(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(a){a.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),ge.splice(ge.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!gt){if(Y("hideClone",this),k.eventCanceled)return;S(D,"display","none"),this.options.removeCloneOnHide&&D.parentNode&&D.parentNode.removeChild(D),gt=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(gt){if(Y("showClone",this),k.eventCanceled)return;v.parentNode==A&&!this.options.group.revertClone?A.insertBefore(D,v):Mt?A.insertBefore(D,Mt):A.appendChild(D),this.options.group.revertClone&&this.animate(v,D),S(D,"display",""),gt=!1}}};function Ji(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function de(e,t,a,n,i,s,c,l){var r,p=e[B],m=p.options.onMove,g;return window.CustomEvent&&!ht&&!ae?r=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(r=document.createEvent("Event"),r.initEvent("move",!0,!0)),r.to=t,r.from=e,r.dragged=a,r.draggedRect=n,r.related=i||t,r.relatedRect=s||q(t),r.willInsertAfter=l,r.originalEvent=c,e.dispatchEvent(r),m&&(g=m.call(p,r,c)),g}function Be(e){e.draggable=!1}function Ki(){ta=!1}function Qi(e,t,a){var n=q(It(a.el,0,a.options,!0)),i=wn(a.el,a.options,T),s=10;return t?e.clientX<i.left-s||e.clientY<n.top&&e.clientX<n.right:e.clientY<i.top-s||e.clientY<n.bottom&&e.clientX<n.left}function Zi(e,t,a){var n=q(pa(a.el,a.options.draggable)),i=wn(a.el,a.options,T),s=10;return t?e.clientX>i.right+s||e.clientY>n.bottom&&e.clientX>n.left:e.clientY>i.bottom+s||e.clientX>n.right&&e.clientY>n.top}function ts(e,t,a,n,i,s,c,l){var r=n?e.clientY:e.clientX,p=n?a.height:a.width,m=n?a.top:a.left,g=n?a.bottom:a.right,f=!1;if(!c){if(l&&pe<p*i){if(!Zt&&(Qt===1?r>m+p*s/2:r<g-p*s/2)&&(Zt=!0),Zt)f=!0;else if(Qt===1?r<m+pe:r>g-pe)return-Qt}else if(r>m+p*(1-i)/2&&r<g-p*(1-i)/2)return es(t)}return f=f||c,f&&(r<m+p*s/2||r>g-p*s/2)?r>m+p/2?1:-1:0}function es(e){return G(v)<G(e)?1:-1}function as(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,a=t.length,n=0;a--;)n+=t.charCodeAt(a);return n.toString(36)}function ns(e){be.length=0;for(var t=e.getElementsByTagName("input"),a=t.length;a--;){var n=t[a];n.checked&&be.push(n)}}function he(e){return setTimeout(e,0)}function ea(e){return clearTimeout(e)}De&&_(document,"touchmove",function(e){(k.active||Ct)&&e.cancelable&&e.preventDefault()});k.utils={on:_,off:L,css:S,find:vn,is:function(t,a){return!!nt(t,a,t,!1)},extend:Ni,throttle:gn,closest:nt,toggleClass:X,clone:yn,index:G,nextTick:he,cancelNextTick:ea,detectDirection:Sn,getChild:It,expando:B};k.get=function(e){return e[B]};k.mount=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];t[0].constructor===Array&&(t=t[0]),t.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(k.utils=ot(ot({},k.utils),n.utils)),ne.mount(n)})};k.create=function(e,t){return new k(e,t)};k.version=Hi;var z=[],Ut,aa,na=!1,Fe,Ue,ye,Xt;function is(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(a){var n=a.originalEvent;this.sortable.nativeDraggable?_(document,"dragover",this._handleAutoScroll):this.options.supportPointer?_(document,"pointermove",this._handleFallbackAutoScroll):n.touches?_(document,"touchmove",this._handleFallbackAutoScroll):_(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(a){var n=a.originalEvent;!this.options.dragOverBubble&&!n.rootEl&&this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?L(document,"dragover",this._handleAutoScroll):(L(document,"pointermove",this._handleFallbackAutoScroll),L(document,"touchmove",this._handleFallbackAutoScroll),L(document,"mousemove",this._handleFallbackAutoScroll)),Va(),fe(),Ri()},nulling:function(){ye=aa=Ut=na=Xt=Fe=Ue=null,z.length=0},_handleFallbackAutoScroll:function(a){this._handleAutoScroll(a,!0)},_handleAutoScroll:function(a,n){var i=this,s=(a.touches?a.touches[0]:a).clientX,c=(a.touches?a.touches[0]:a).clientY,l=document.elementFromPoint(s,c);if(ye=a,n||this.options.forceAutoScrollFallback||ae||ht||Gt){Xe(a,this.options,l,n);var r=bt(l,!0);na&&(!Xt||s!==Fe||c!==Ue)&&(Xt&&Va(),Xt=setInterval(function(){var p=bt(document.elementFromPoint(s,c),!0);p!==r&&(r=p,fe()),Xe(a,i.options,p,n)},10),Fe=s,Ue=c)}else{if(!this.options.bubbleScroll||bt(l,!0)===rt()){fe();return}Xe(a,this.options,bt(l,!1),!1)}}},pt(e,{pluginName:"scroll",initializeByDefault:!0})}function fe(){z.forEach(function(e){clearInterval(e.pid)}),z=[]}function Va(){clearInterval(Xt)}var Xe=gn(function(e,t,a,n){if(t.scroll){var i=(e.touches?e.touches[0]:e).clientX,s=(e.touches?e.touches[0]:e).clientY,c=t.scrollSensitivity,l=t.scrollSpeed,r=rt(),p=!1,m;aa!==a&&(aa=a,fe(),Ut=t.scroll,m=t.scrollFn,Ut===!0&&(Ut=bt(a,!0)));var g=0,f=Ut;do{var w=f,E=q(w),x=E.top,H=E.bottom,Z=E.left,R=E.right,tt=E.width,F=E.height,$t=void 0,it=void 0,St=w.scrollWidth,Nt=w.scrollHeight,U=S(w),Rt=w.scrollLeft,ft=w.scrollTop;w===r?($t=tt<St&&(U.overflowX==="auto"||U.overflowX==="scroll"||U.overflowX==="visible"),it=F<Nt&&(U.overflowY==="auto"||U.overflowY==="scroll"||U.overflowY==="visible")):($t=tt<St&&(U.overflowX==="auto"||U.overflowX==="scroll"),it=F<Nt&&(U.overflowY==="auto"||U.overflowY==="scroll"));var Vt=$t&&(Math.abs(R-i)<=c&&Rt+tt<St)-(Math.abs(Z-i)<=c&&!!Rt),dt=it&&(Math.abs(H-s)<=c&&ft+F<Nt)-(Math.abs(x-s)<=c&&!!ft);if(!z[g])for(var kt=0;kt<=g;kt++)z[kt]||(z[kt]={});(z[g].vx!=Vt||z[g].vy!=dt||z[g].el!==w)&&(z[g].el=w,z[g].vx=Vt,z[g].vy=dt,clearInterval(z[g].pid),(Vt!=0||dt!=0)&&(p=!0,z[g].pid=setInterval((function(){n&&this.layer===0&&k.active._onTouchMove(ye);var jt=z[this.layer].vy?z[this.layer].vy*l:0,mt=z[this.layer].vx?z[this.layer].vx*l:0;typeof m=="function"&&m.call(k.dragged.parentNode[B],mt,jt,e,ye,z[this.layer].el)!=="continue"||bn(z[this.layer].el,mt,jt)}).bind({layer:g}),24))),g++}while(t.bubbleScroll&&f!==r&&(f=bt(f,!1)));na=p}},30),Mn=function(t){var a=t.originalEvent,n=t.putSortable,i=t.dragEl,s=t.activeSortable,c=t.dispatchSortableEvent,l=t.hideGhostForTarget,r=t.unhideGhostForTarget;if(a){var p=n||s;l();var m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,g=document.elementFromPoint(m.clientX,m.clientY);r(),p&&!p.el.contains(g)&&(c("spill"),this.onSpill({dragEl:i,putSortable:n}))}};function ha(){}ha.prototype={startIndex:null,dragStart:function(t){var a=t.oldDraggableIndex;this.startIndex=a},onSpill:function(t){var a=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var i=It(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(a,i):this.sortable.el.appendChild(a),this.sortable.animateAll(),n&&n.animateAll()},drop:Mn};pt(ha,{pluginName:"revertOnSpill"});function fa(){}fa.prototype={onSpill:function(t){var a=t.dragEl,n=t.putSortable,i=n||this.sortable;i.captureAnimationState(),a.parentNode&&a.parentNode.removeChild(a),i.animateAll()},drop:Mn};pt(fa,{pluginName:"removeOnSpill"});k.mount(new is);k.mount(fa,ha);const Ln=[32,64,125,250,500,1e3,2e3,4e3,8e3,16e3],ia={flat:{name:"Ровно",gains:[0,0,0,0,0,0,0,0,0,0]},rock:{name:"Рок",gains:[5,4,2,-1,-2,0,2,3,4,5]},pop:{name:"Поп",gains:[-1,0,2,4,4,2,0,-1,-2,-3]},jazz:{name:"Джаз",gains:[4,3,1,2,-1,-1,0,2,3,4]},bass:{name:"Бас",gains:[8,7,5,2,0,-1,-2,-3,-4,-5]},vocal:{name:"Вокал",gains:[-3,-2,0,3,5,5,3,1,0,-1]},electronic:{name:"Электроника",gains:[5,4,1,0,-2,2,1,2,5,6]}},ja="rustream.volume",Ya="rustream.eq",Ba="rustream.mode",We="rustream.playback.queue",Fa="rustream.playback.position";function Ua(e,t){try{return JSON.parse(localStorage.getItem(e))??t}catch{return t}}class ss extends EventTarget{constructor(){super(),this.audio=new Audio,this.audio.preload="auto",this.audio.crossOrigin="anonymous",this.queue=[],this.index=-1,this.shuffle=!1,this.repeat="off",this.track=null,this.playId=null,this.scrobbled=!1,this.liveMode=!1,this.mode=Ua(Ba,{shuffle:!1,repeat:"off"}),this.shuffle=!!this.mode.shuffle,this.repeat=this.mode.repeat||"off",this.volume=Number(localStorage.getItem(ja)??80),this.audio.volume=Math.min(1,Math.max(0,this.volume/100)),this.eqState=Ua(Ya,{enabled:!0,preset:"flat",gains:[...ia.flat.gains]}),this.audioContext=null,this.filters=[],this.sourceNode=null,this._lastPositionWrite=0,this._restoredPause=!1,this._bindAudio(),window.addEventListener("pagehide",()=>this._storePosition(!0))}_bindAudio(){this.audio.addEventListener("timeupdate",()=>{this._maybeScrobble(),this._storePosition(),this._emit("time")}),this.audio.addEventListener("durationchange",()=>this._emit("time")),this.audio.addEventListener("progress",()=>this._emit("buffer")),this.audio.addEventListener("loadedmetadata",()=>this._emit("time")),this.audio.addEventListener("play",()=>{!this.playId&&this.track&&this._restoredPause&&(this._restoredPause=!1,this._beginPlay(this.track)),this._storePosition(!0),this._emit("state")}),this.audio.addEventListener("pause",()=>{this._storePosition(!0),this._emit("state")}),this.audio.addEventListener("volumechange",()=>this._emit("volume")),this.audio.addEventListener("ended",()=>this._onEnded()),this.audio.addEventListener("waiting",()=>this._emit("state")),this.audio.addEventListener("playing",()=>this._emit("state")),this.audio.addEventListener("error",()=>{if(!this.track)return;const a=this.track.source==="ytm"||String(this.track.id).startsWith("ytm-")?`YouTube не отдал поток для «${this.track.title}». Проверьте, что трек доступен, и обновите cookies в профиле.`:`Не удалось воспроизвести «${this.track.title}». Файл повреждён или недоступен.`;this.dispatchEvent(new CustomEvent("error",{detail:a}))})}_emit(t){this.dispatchEvent(new CustomEvent(t))}_initAudioGraph(){if(this.audioContext)return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.audioContext=new t,this.sourceNode=this.audioContext.createMediaElementSource(this.audio),this.filters=Ln.map(n=>{const i=this.audioContext.createBiquadFilter();return i.type="peaking",i.frequency.value=n,i.Q.value=1.1,i.gain.value=0,i});let a=this.sourceNode;for(const n of this.filters)a.connect(n),a=n;a.connect(this.audioContext.destination),this._applyEq()}_ensureRunning(){var t;this._initAudioGraph(),((t=this.audioContext)==null?void 0:t.state)==="suspended"&&this.audioContext.resume().catch(()=>{})}_applyEq(){this.filters.length&&this.filters.forEach((t,a)=>{t.gain.value=this.eqState.enabled&&this.eqState.gains[a]||0})}setEqEnabled(t){this.eqState.enabled=t,this._persistEq(),this._applyEq(),this._emit("eq")}setEqGain(t,a){this.eqState.gains[t]=Number(a),this.eqState.preset="custom",this._persistEq(),this._applyEq(),this._emit("eq")}applyEqPreset(t){const a=ia[t];a&&(this.eqState.preset=t,this.eqState.gains=[...a.gains],this._persistEq(),this._applyEq(),this._emit("eq"))}resetEq(){this.applyEqPreset("flat")}_persistEq(){localStorage.setItem(Ya,JSON.stringify(this.eqState))}async playTracks(t,a=0,{shuffle:n=!1}={}){t!=null&&t.length&&(this._finalizePlay(!1),this.queue=[...t],n&&(this.shuffle=!0,this._persistMode()),this.index=Math.min(Math.max(0,a),this.queue.length-1),this._storeQueue(),await this._load(this.queue[this.index],!0))}async playAt(t){t<0||t>=this.queue.length||(this.index=t,this._storeQueue(),await this._load(this.queue[t],!0))}async _load(t,a){if(t&&(this._restoredPause=!1,this._finalizePlay(!1),this.track=t,this.audio.src=Ie(t.id),this._beginPlay(t),this._updateMediaSession(t),this.dispatchEvent(new CustomEvent("track",{detail:t})),a)){this._ensureRunning();try{await this.audio.play()}catch{}}}async toggle(){this.track&&(this._ensureRunning(),this.audio.paused?await this.audio.play().catch(()=>{}):this.audio.pause())}pause(){this.audio.pause()}async next(t=!1){if(!this.queue.length)return;if(t&&this.repeat==="one"){this.audio.currentTime=0,await this.audio.play().catch(()=>{});return}let a;if(this.shuffle?a=this.queue.length>1?this._randomIndex():this.index:a=this.index+1,a>=this.queue.length)if(this.repeat==="all")a=0;else{this.audio.pause();return}await this.playAt(a)}async previous(){if(!this.queue.length)return;if(this.audio.currentTime>3){this.audio.currentTime=0;return}const t=this.index>0?this.index-1:this.queue.length-1;await this.playAt(t)}moveInQueue(t,a){if(t===a||t<0||a<0||t>=this.queue.length||a>=this.queue.length)return;const[n]=this.queue.splice(t,1);this.queue.splice(a,0,n),this.index===t?this.index=a:t<this.index&&a>=this.index?this.index--:t>this.index&&a<=this.index&&this.index++,this._storeQueue(),this._emit("queue")}_randomIndex(){if(this.queue.length<=1)return this.index;let t=this.index;for(;t===this.index;)t=Math.floor(Math.random()*this.queue.length);return t}async _onEnded(){if(this._finalizePlay(!0),this.repeat==="one"){this.audio.currentTime=0,this._beginPlay(this.track),await this.audio.play().catch(()=>{});return}if(this.index>=this.queue.length-1&&this.repeat==="off"&&!this.shuffle){this._emit("state"),this._emit("queueend");return}await this.next(!0)}async _beginPlay(t){this.playId=null,this.scrobbled=!1;try{const a=await fi(t.id);this.playId=(a==null?void 0:a.playId)||null}catch{}}_maybeScrobble(){if(!this.playId||this.scrobbled)return;const t=this.audio.duration;!Number.isFinite(t)||t<30||(this.audio.currentTime>=t/2||this.audio.currentTime>=240)&&(this.scrobbled=!0,Ca(this.playId,Math.round(this.audio.currentTime*1e3),!0).catch(()=>{}))}_finalizePlay(t){if(!this.playId)return;const a=this.playId;this.playId=null,Ca(a,Math.round((this.audio.currentTime||0)*1e3),t).catch(()=>{})}appendTracks(t){t!=null&&t.length&&(this.queue.push(...t),this._storeQueue())}toggleShuffle(){this.shuffle=!this.shuffle,this._persistMode(),this._emit("mode")}cycleRepeat(){const t=["off","all","one"];this.repeat=t[(t.indexOf(this.repeat)+1)%t.length],this._persistMode(),this._emit("mode")}_persistMode(){localStorage.setItem(Ba,JSON.stringify({shuffle:this.shuffle,repeat:this.repeat}))}seekTo(t){const a=this.audio.duration;!Number.isFinite(a)||a<=0||(this.audio.currentTime=Math.min(100,Math.max(0,t))/100*a,this._emit("time"))}seekToSeconds(t){const a=this.audio.duration;!Number.isFinite(a)||a<=0||(this.audio.currentTime=Math.min(a,Math.max(0,t)),this._emit("time"))}removeAt(t){t<0||t>=this.queue.length||t===this.index||(this.queue.splice(t,1),t<this.index&&(this.index-=1),this._storeQueue())}seekBy(t){Number.isFinite(this.audio.duration)&&(this.audio.currentTime=Math.min(this.audio.duration,Math.max(0,this.audio.currentTime+t)),this._emit("time"))}setVolume(t){this.volume=Number(t),this.audio.volume=Math.min(1,Math.max(0,this.volume/100)),this.volume>0&&(this.audio.muted=!1),localStorage.setItem(ja,String(this.volume))}toggleMute(){this.audio.muted=!this.audio.muted,this._emit("volume")}get currentTime(){return this.audio.currentTime||0}get duration(){return Number.isFinite(this.audio.duration)?this.audio.duration:0}get paused(){return this.audio.paused}get volumePercent(){return this.audio.muted?0:Math.round(this.audio.volume*100)}get buffered(){const t=this.duration;if(!t)return{end:0,percent:0,ahead:0};const a=this.audio.currentTime;let n=0;for(let i=0;i<this.audio.buffered.length;i+=1)this.audio.buffered.start(i)<=a+.5&&(n=Math.max(n,this.audio.buffered.end(i)));return{end:n,percent:Math.min(100,n/t*100),ahead:Math.max(0,n-a)}}estimatedBufferedBytes(){var a;const t=((a=this.track)==null?void 0:a.bitRate)||0;return t?t*1e3*this.buffered.ahead/8:0}_storeQueue(){try{const t={queue:this.queue,index:this.index,liveMode:!!this.liveMode,updatedAt:Date.now()};localStorage.setItem(We,JSON.stringify(t))}catch{}}setLiveMode(t){this.liveMode=!!t,this._storeQueue()}_storePosition(t=!1){if(!this.track)return;const a=Date.now();if(!(!t&&a-this._lastPositionWrite<2e3)){this._lastPositionWrite=a;try{localStorage.setItem(Fa,JSON.stringify({trackId:this.track.id,position:this.currentTime||0,paused:this.audio.paused,updatedAt:a}))}catch{}}}snapshotState(){return{queue:this.queue,index:this.index,liveMode:this.liveMode,position:Math.max(0,Math.floor(Number(this.audio.currentTime)||0)),updatedAt:Date.now()}}localUpdatedAt(){try{const t=JSON.parse(localStorage.getItem(We));return Number(t==null?void 0:t.updatedAt)||0}catch{return 0}}applyRemote(t){var n;if(!((n=t==null?void 0:t.queue)!=null&&n.length)||(this.queue=t.queue,this.index=Math.min(Math.max(0,Number(t.index)||0),this.queue.length-1),this.liveMode=!!t.liveMode,this.track=this.queue[this.index],!this.track))return null;this._restoredPause=!0,this.audio.src=Ie(this.track.id),this._updateMediaSession(this.track),this.dispatchEvent(new CustomEvent("track",{detail:this.track}));const a=Number(t.position)||0;if(a>1){const i=()=>{const s=this.audio.duration;(!Number.isFinite(s)||a<s-3)&&(this.audio.currentTime=a,this._emit("time"))};this.audio.readyState>=1?i():this.audio.addEventListener("loadedmetadata",i,{once:!0})}return this._storeQueue(),{track:this.track,liveMode:this.liveMode}}restore(){var n;let t=null;try{t=JSON.parse(localStorage.getItem(We))}catch{t=null}if(!((n=t==null?void 0:t.queue)!=null&&n.length)||Date.now()-(t.updatedAt||0)>1e3*60*60*24*7)return null;let a=null;try{a=JSON.parse(localStorage.getItem(Fa))}catch{a=null}if(this.queue=t.queue,this.index=Math.min(Math.max(0,Number(t.index)||0),this.queue.length-1),this.liveMode=!!t.liveMode,this.track=this.queue[this.index],!this.track)return null;if(this._restoredPause=!0,this.audio.src=Ie(this.track.id),this._updateMediaSession(this.track),this.dispatchEvent(new CustomEvent("track",{detail:this.track})),(a==null?void 0:a.trackId)===this.track.id&&Number(a.position)>1){const i=()=>{const s=this.audio.duration;Number.isFinite(s)&&a.position<s-3&&(this.audio.currentTime=a.position,this._emit("time"))};this.audio.readyState>=1?i():this.audio.addEventListener("loadedmetadata",i,{once:!0})}return{track:this.track,liveMode:this.liveMode}}clearRestored(){this._restoredPause=!1}_updateMediaSession(t){"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:t.title||"",artist:t.artist||"",album:t.album||"",artwork:t.coverArt?[{src:Lt(t.coverArt,512),sizes:"512x512",type:"image/jpeg"}]:[]}),navigator.mediaSession.setActionHandler("play",()=>this.toggle()),navigator.mediaSession.setActionHandler("pause",()=>this.toggle()),navigator.mediaSession.setActionHandler("previoustrack",()=>this.previous()),navigator.mediaSession.setActionHandler("nexttrack",()=>this.next()))}}function yt(e){if(!Number.isFinite(e)||e<0)return"0:00";const t=Math.floor(e/60),a=Math.floor(e%60);return`${t}:${String(a).padStart(2,"0")}`}function _n(e){const t=Math.round(e/6e4),a=Math.floor(t/60);return a>0?`${a} ч ${t%60} мин`:`${t} мин`}function we(e){if(!e)return"0 Б";const t=["Б","КБ","МБ","ГБ","ТБ"];let a=e,n=0;for(;a>=1024&&n<t.length-1;)a/=1024,n+=1;return`${a>=10||n===0?Math.round(a):a.toFixed(1)} ${t[n]}`}const h=new ss,rs=document.getElementById("app"),o={currentTracks:[],favorites:new Set,dislikes:new Set,favoriteAlbums:new Set,theme:"violet",lyrics:null,lyricsTrackId:null,lyricsRefresh:!1,lyricsActiveKey:null,npTab:"lyrics",npOpen:!1,allTracks:null,artists:null,albums:null,stats:null,playlists:null,me:null,meStats:null,authConfig:null,lastfmConfig:null,liveMode:!1,liveMixes:[],renderSeq:0},$={artists:null,albums:null,tracks:null,stats:null,playlists:null,favorites:null,ratings:null,recent:null,meStats:null,liveMixes:null};rs.innerHTML=`
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
`;const u=(e,t=document)=>t.querySelector(e),K=(e,t=document)=>[...t.querySelectorAll(e)];function b(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ma(e){const t=String(e||"?").trim().split(/\s+/).filter(Boolean);return t.length?t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+t[1][0]).toUpperCase():"?"}function $e(){var e,t;return((e=o.me)==null?void 0:e.displayName)||((t=o.me)==null?void 0:t.username)||"Аккаунт"}function xn(e){return(e==null?void 0:e.status)===401}function Ot(e){return xn(e)?(Ht(),!0):!1}function ct(e,{size:t=400,alt:a="",className:n=""}={}){return`<span class="cover ${n}">
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
    </div>`}function os(e){u("#view").innerHTML=`
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
  </article>`}function I(e,t,a,n){const i=e%10,s=e%100;return i===1&&s!==11?t:i>=2&&i<=4&&(s<12||s>14)?a:n}function ls(e){return(e==null?void 0:e.source)==="ytm"?'<span class="track-badge ytm" title="Источник: YouTube Music">YT</span>':`<span class="track-badge">${b(((e==null?void 0:e.suffix)||"flac").toUpperCase())}</span>`}function cs(e,t,{showAlbum:a=!0,showCover:n=!1,playlistId:i=null,rowAction:s="play-row",rowList:c=null}={}){var m;const l=((m=h.track)==null?void 0:m.id)===e.id,r=o.favorites.has(e.id),p=e.track&&e.track>0?e.track:t+1;return`<div class="track-row ${l?"playing":""} ${n?"has-cover":""}" data-action="${s}" data-index="${t}" data-track-id="${b(e.id)}" ${c?`data-list="${c}"`:""} tabindex="0">
    <div class="track-index">
      <span class="track-num">${p}</span>
      <span class="track-eq"><i></i><i></i><i></i></span>
    </div>
    ${n?`<span class="track-cover">${ct(e.coverArt||e.albumId,{size:80})}</span>`:""}
    <div class="track-main">
      <div class="track-title">${b(e.title)}</div>
      <div class="track-sub">${b(e.artist||"")}${a&&e.album?` · ${b(e.album)}`:""}</div>
    </div>
    ${ls(e)}
    <span class="track-duration">${yt(e.duration)}</span>
    <button class="icon-btn row-btn like ${r?"active":""}" data-action="like" data-id="${e.id}" title="В избранное">${d(r?"heart":"heartOutline")}</button>
    <button class="icon-btn row-btn dislike ${o.dislikes.has(e.id)?"active":""}" data-action="dislike" data-id="${e.id}" title="Не нравится">${d("thumbDown")}</button>
    ${i?`<button class="icon-btn row-btn" data-action="remove-from-playlist" data-playlist="${i}" data-index="${t}" title="Убрать из плейлиста">${d("delete")}</button>`:`<button class="icon-btn row-btn" data-action="add-to-playlist" data-id="${e.id}" title="Добавить в плейлист">${d("add")}</button>`}
  </div>`}function Q(e,t={}){return e.length?`<div class="track-list">${e.map((a,n)=>cs(a,n,t)).join("")}</div>`:'<div class="empty-inline">Треков пока нет</div>'}function ds(){const e=location.hash.replace(/^#/,"")||"/home",[t,a=""]=e.split("?");return{parts:t.split("/").filter(Boolean),params:new URLSearchParams(a)}}const us={artist:"artists",album:"albums",playlist:"playlists"},ps=new Set(["artists","albums","tracks","playlists","favorites","stats"]);function hs(e){const t=us[e]||e;K(".nav-item").forEach(a=>{a.classList.toggle("active",a.dataset.nav===t)}),K(".tab-item").forEach(a=>{const n=a.dataset.tab,i=n===t||n==="library"&&(t==="library"||ps.has(t))||n==="search"&&t==="search";a.classList.toggle("active",i)})}async function P(){const{parts:e,params:t}=ds(),a=e[0]||"home";if(a==="register"){ka(t.get("invite")||"");return}if(!o.me){Ht();return}const n=++o.renderSeq;hs(a),u("#view").scrollTop=0;try{a==="home"?await Xa(n):a==="live"?await ys(n):a==="stats"?await ws(n):a==="artists"?await $s(n):a==="artist"?await Ss(n,e[1]):a==="albums"?await ks(n):a==="album"?await Es(n,e[1]):a==="tracks"?await Ts(n):a==="playlists"?await Ms(n):a==="playlist"?await _s(n,e[1]):a==="favorites"?await xs(n):a==="search"?await As(n,t.get("q")||""):a==="library"?await Ws(n):a==="profile"?await Gs(n):a==="ytm"?await Js(n):await Xa(n)}catch(i){if(console.error(i),Ot(i))return;n===o.renderSeq&&os(i.message||"Ошибка загрузки")}}async function fs(){return $.stats||($.stats=await oi()),$.stats}async function An(){return $.artists||($.artists=await Zn()),$.artists}async function ms(){return $.albums||($.albums=await en("alphabeticalByArtist",500)),$.albums}async function ga(){if(!$.tracks){const e=await ti(500);e.sort((t,a)=>`${t.artist} ${t.album} ${String(t.track).padStart(3,"0")}`.localeCompare(`${a.artist} ${a.album} ${String(a.track).padStart(3,"0")}`,"ru")),$.tracks=e}return $.tracks}async function Dn(){if($.favorites||($.favorites=await ri()),o.favorites=new Set(($.favorites.song||[]).map(e=>e.id)),o.favoriteAlbums=new Set(($.favorites.album||[]).map(e=>e.id)),!$.ratings)try{$.ratings=await di()}catch{$.ratings={liked:[],disliked:[]}}return o.dislikes=new Set(($.ratings.disliked||[]).filter(e=>!o.favorites.has(e))),$.favorites}async function ba(){return $.meStats||($.meStats=await rn()),o.meStats=$.meStats,$.meStats}async function vs(){return $.liveMixes||($.liveMixes=await mi()),o.liveMixes=$.liveMixes,$.liveMixes}async function gs(){$.artists=null,$.albums=null,$.tracks=null,$.stats=null,$.recent=null,$.meStats=null,$.liveMixes=null,y("Библиотека обновлена"),P()}async function Xa(e){var g;j();const[t,a,n,i]=await Promise.all([ba(),$.recent?Promise.resolve($.recent):en("newest",12),An(),ga()]);if(e!==o.renderSeq)return;$.recent=a;const s=o.ytmStatus||await Ae().catch(()=>null);o.ytmStatus=s;let c=[];if(s!=null&&s.connected&&(c=await pn(10).catch(()=>[])),e!==o.renderSeq)return;const l=[...i].sort(()=>Math.random()-.5).slice(0,6),r=(t.recent||[]).slice(0,6);o.lists={...o.lists||{},quick:l,recent:r},o.ytmLists={...o.ytmLists||{},history:c},o.currentTracks=i;const p=h.track,m=h.queue.length?h.queue:null;u("#view").innerHTML=`
    <div class="page home quick-home">
      <header class="page-head home-head">
        <div>
          <span class="eyebrow"><span class="live-dot"></span>${b(bs())}, ${b($e())}</span>
          <h1>Что послушаем?</h1>
        </div>
        <div class="head-actions">
          <button class="btn primary" data-action="play-all">${d("play")} Слушать всё</button>
          <button class="btn glass" data-action="shuffle-all">${d("shuffle")} Перемешать</button>
        </div>
      </header>

      ${p?`<section class="continue-card">
              <span class="continue-cover">${ct(p.coverArt||p.albumId,{size:120,alt:p.title})}</span>
              <span class="continue-main">
                <span class="eyebrow">Продолжить слушать</span>
                <strong>${b(p.title)}</strong>
                <small>${b(p.artist||"")}${m?` · ${h.index+1} из ${h.queue.length}`:""}</small>
              </span>
              <button class="btn primary" data-action="toggle">${d(h.paused?"play":"pause")} ${h.paused?"Продолжить":"Пауза"}</button>
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
              ${Q(l,{showCover:!0,rowAction:"play-list-row",rowList:"quick"})}
            </section>`:""}

      ${r.length?`<section class="section">
              <div class="section-head">
                <div>
                  <h2>Недавно слушали</h2>
                  <p class="muted">Продолжите с любого места</p>
                </div>
                <a class="text-link" href="#/stats">История ${d("next")}</a>
              </div>
              ${Q(r,{showCover:!0,rowAction:"play-list-row",rowList:"recent"})}
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

      ${c.length?`<section class="section">
              <div class="section-head">
                <div>
                  <h2>Из YouTube Music</h2>
                  <p class="muted">Внешний источник — помечено меткой <span class="track-badge ytm inline">YT</span></p>
                </div>
                <a class="text-link" href="#/ytm">Открыть YouTube ${d("next")}</a>
              </div>
              ${Q(c.slice(0,6),{showCover:!0,rowAction:"play-ytm-row",rowList:"history"})}
            </section>`:""}

      <section class="section">
        <div class="section-head">
          <div>
            <h2>Любимые артисты</h2>
            <p class="muted">${(g=t.topArtists)!=null&&g[0]?`Чаще всего вы слушаете ${b(t.topArtists[0].name)}`:"Начните слушать — и здесь появятся ваши артисты"}</p>
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
    </div>`}function bs(){const e=new Date().getHours();return e<6?"Доброй ночи":e<12?"Доброе утро":e<18?"Добрый день":"Добрый вечер"}async function ys(e){j();const[t,a]=await Promise.all([vs(),ba()]);e===o.renderSeq&&(u("#view").innerHTML=`
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
          ${t.map((n,i)=>{var s,c,l;return`<article class="mix-card ${(s=n.tracks)!=null&&s.length?"":"empty"}" data-action="play-mix" data-index="${i}" tabindex="0">
                <div class="mix-icon">${d(i===0?"heart":i===1?"album":"radio")}</div>
                <div class="mix-body">
                  <h3>${b(n.title)}</h3>
                  <p>${b(n.subtitle)}</p>
                  <span class="muted">${((c=n.tracks)==null?void 0:c.length)||0} ${I(((l=n.tracks)==null?void 0:l.length)||0,"трек","трека","треков")}</span>
                </div>
                <span class="mix-play">${d("play")}</span>
              </article>`}).join("")}
        </div>
      </section>

    </div>`)}async function ws(e){var p,m,g;j();const t=await rn().catch(()=>o.meStats||{});if(e!==o.renderSeq)return;o.meStats=t,$.meStats=t;const a=((t.listenedMs||0)/36e5).toFixed(1),n=Math.round((t.listenedMs||0)/6e4),i=Math.max(1,...(t.byDay||[]).map(f=>f.ms)),s=t.recent||[];o.currentTracks=s;const c=[...t.byDay||[]].slice(-14),l=t.likes||0,r=t.dislikes||0;u("#view").innerHTML=`
    <div class="page stats-page">
      ${wt("Статистика","Только ваш аккаунт: время, артисты, жанры и оценки",{eyebrow:"Личные данные",actions:`<a class="btn glass" href="#/favorites">${d("heart")} Избранное</a>`})}

      <section class="stat-cards">
        <div class="stat-card"><span class="stat-icon">${d("clock")}</span><strong>${a} ч</strong><span>${n} минут музыки</span></div>
        <div class="stat-card"><span class="stat-icon">${d("play")}</span><strong>${t.plays||0}</strong><span>прослушиваний</span></div>
        <div class="stat-card"><span class="stat-icon like">${d("heart")}</span><strong>${l}</strong><span>лайков</span></div>
        <div class="stat-card"><span class="stat-icon dislike">${d("thumbDown")}</span><strong>${r}</strong><span>дизлайков</span></div>
      </section>

      <section class="section stats-grid">
        <div class="stats-panel">
          <div class="section-head"><h2>Последние 14 дней</h2><span class="muted">${a} ч всего</span></div>
          ${c.length?`<div class="day-chart">${c.map(f=>{const E=new Date(`${f.day}T00:00:00`).toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit"}),x=Math.max(4,Math.round(f.ms/i*100));return`<div class="day-col" title="${E}: ${Math.round(f.ms/6e4)} мин">
                      <span class="day-bar" style="height:${x}%"></span>
                      <span class="day-label">${E}</span>
                    </div>`}).join("")}</div>`:'<div class="empty-inline">Пока нет прослушиваний за две недели.</div>'}
        </div>
        <div class="stats-panel">
          <div class="section-head"><h2>Жанры</h2></div>
          ${(p=t.topGenres)!=null&&p.length?`<div class="genre-list">${t.topGenres.map(f=>{var w;return`<div class="genre-row">
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
        ${s.length?Q(s,{showCover:!0}):'<div class="empty-inline">История пока пуста.</div>'}
      </section>
    </div>`}async function $s(e){j();const t=await An();e===o.renderSeq&&(o.currentTracks=[],u("#view").innerHTML=`
    <div class="page">
      ${wt("Артисты",`${t.length} ${I(t.length,"артист","артиста","артистов")} в библиотеке`,{actions:`<button class="btn glass" data-action="shuffle-library">${d("shuffle")} Перемешать всё</button>`,eyebrow:"Коллекция"})}
      <div class="grid cards">${t.map(va).join("")}</div>
    </div>`)}async function Ss(e,t){j();const a=await tn(t);if(e!==o.renderSeq)return;const n=a.artist,i=n.album||[];o.currentTracks=[],u("#view").innerHTML=`
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
    </div>`}async function ks(e){j();const t=await ms();e===o.renderSeq&&(o.currentTracks=[],u("#view").innerHTML=`
    <div class="page">
      ${wt("Альбомы",`${t.length} ${I(t.length,"альбом","альбома","альбомов")}`,{eyebrow:"Коллекция"})}
      <div class="grid cards">${t.map(ie).join("")}</div>
    </div>`)}async function Es(e,t){j();const a=await ca(t);if(e!==o.renderSeq)return;const n=a.album,i=n.song||[];o.currentTracks=i,u("#view").innerHTML=`
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
            · ${_n(n.duration*1e3||0)}
          </p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-all">${d("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-all">${d("shuffle")} Перемешать</button>
          </div>
        </div>
      </section>
      <section class="section">
        ${Q(i,{showAlbum:!1})}
      </section>
    </div>`}async function Ts(e){j();const t=await ga();e===o.renderSeq&&(o.currentTracks=t,u("#view").innerHTML=`
    <div class="page">
      ${wt("Все треки",`${t.length} ${I(t.length,"трек","трека","треков")}`,{eyebrow:"Библиотека",actions:`<button class="btn primary" data-action="play-all">${d("play")} Слушать</button>
                  <button class="btn glass" data-action="shuffle-all">${d("shuffle")} Перемешать</button>`})}
      ${Q(t,{showCover:!0})}
    </div>`)}async function Ms(e){j();const t=await da();e===o.renderSeq&&($.playlists=t,o.currentTracks=[],u("#view").innerHTML=`
    <div class="page">
      ${wt("Плейлисты",`${t.length} ${I(t.length,"плейлист","плейлиста","плейлистов")}`,{eyebrow:"Моя музыка",actions:`<button class="btn primary" data-action="new-playlist">${d("add")} Новый плейлист</button>`})}
      ${t.length?`<div class="grid cards">${t.map(Ls).join("")}</div>`:`<div class="empty-state"><span class="empty-icon">${d("playlist")}</span><h2>Плейлистов пока нет</h2><p>Соберите подборку из любимых треков.</p><button class="btn primary" data-action="new-playlist">${d("add")} Создать</button></div>`}
    </div>`)}function Ls(e){return`<article class="card" data-action="open" data-href="#/playlist/${e.id}" tabindex="0">
    <div class="card-cover">${ct(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${b(e.name)}</div>
      <div class="card-sub">${e.songCount??0} ${I(e.songCount??0,"трек","трека","треков")}</div>
    </div>
    <button class="card-play" data-action="open" data-href="#/playlist/${e.id}">${d("play")}</button>
  </article>`}async function _s(e,t){j();const a=await ai(t);if(e!==o.renderSeq)return;const n=(a.entry||[]).map((i,s)=>({...i,track:s+1}));o.currentTracks=n,u("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/playlists">${d("back")} Все плейлисты</a>
      <section class="collection-head album-head">
        <div class="collection-art">${ct(a.coverArt||a.id,{size:800,alt:a.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">Плейлист</div>
          <h1>${b(a.name)}</h1>
          <p class="muted">${n.length} ${I(n.length,"трек","трека","треков")} · ${_n((a.duration||0)*1e3)}</p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-all">${d("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-all">${d("shuffle")} Перемешать</button>
            <button class="btn ghost danger" data-action="delete-playlist" data-id="${a.id}">${d("delete")} Удалить</button>
          </div>
        </div>
      </section>
      <section class="section">
        ${Q(n,{showCover:!0,playlistId:a.id})}
      </section>
    </div>`}async function xs(e){j();const t=await Dn();if(e!==o.renderSeq)return;const a=t.song||[];o.currentTracks=a,u("#view").innerHTML=`
    <div class="page">
      ${wt("Избранное",`${a.length} ${I(a.length,"трек","трека","треков")}`,{eyebrow:"Моя музыка",actions:a.length?`<button class="btn primary" data-action="play-all">${d("play")} Слушать</button>`:""})}
      ${a.length?Q(a,{showCover:!0}):`<div class="empty-state"><span class="empty-icon">${d("heartOutline")}</span><h2>Здесь пока пусто</h2><p>Нажимайте на сердечко у трека, чтобы добавить его в избранное.</p></div>`}
      ${(t.album||[]).length?`<section class="section"><div class="section-head"><h2>Любимые альбомы</h2></div>
             <div class="grid cards">${t.album.map(ie).join("")}</div></section>`:""}
    </div>`}const ya="rustream.searches";function Cn(){try{const e=JSON.parse(localStorage.getItem(ya));return Array.isArray(e)?e.slice(0,8):[]}catch{return[]}}function Pn(e){const t=String(e||"").trim();if(t.length<2)return;const a=[t,...Cn().filter(n=>n!==t)].slice(0,8);localStorage.setItem(ya,JSON.stringify(a))}function sa(e){const t=String(e||"").trim();if(!t)return;Pn(t);const a=`#/search?q=${encodeURIComponent(t)}`;location.hash===a?P():location.hash=a}async function As(e,t){const a=u("#search-input");if(a.value!==t&&(a.value=t),!t.trim()){const s=Cn();u("#view").innerHTML=`
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
                <div class="chip-row">${s.map(r=>`<button class="chip-btn" data-action="run-search" data-query="${b(r)}">${b(r)}</button>`).join("")}</div>
              </section>`:""}

        <section class="section">
          <div class="section-head"><h2>Популярное</h2></div>
          <div class="chip-row">
            ${["Chiki The Maid","Intro","Poezd","FLAC","Аниме","Рок","Джаз"].map(r=>`<button class="chip-btn" data-action="run-search" data-query="${b(r)}">${b(r)}</button>`).join("")}
          </div>
        </section>
      </div>`;const c=u("#page-search-form"),l=u("#page-search-input");c==null||c.addEventListener("submit",r=>{r.preventDefault(),sa(l.value)}),l==null||l.addEventListener("keydown",r=>{r.key==="Enter"&&sa(l.value)});return}j();const n=await ei(t);if(e!==o.renderSeq)return;const i=n.song||[];o.currentTracks=i,u("#view").innerHTML=`
    <div class="page">
      ${wt(`Поиск: ${t}`,`Найдено ${i.length} ${I(i.length,"трек","трека","треков")}, ${(n.album||[]).length} ${I((n.album||[]).length,"альбом","альбома","альбомов")}`,{eyebrow:"Результаты"})}
      ${(n.artist||[]).length?`<section class="section"><div class="section-head"><h2>Артисты</h2></div><div class="grid cards">${n.artist.map(va).join("")}</div></section>`:""}
      ${(n.album||[]).length?`<section class="section"><div class="section-head"><h2>Альбомы</h2></div><div class="grid cards">${n.album.map(ie).join("")}</div></section>`:""}
      ${i.length?`<section class="section"><div class="section-head"><h2>Треки</h2></div>${Q(i,{showCover:!0})}</section>`:""}
      ${!i.length&&!(n.album||[]).length&&!(n.artist||[]).length?`<div class="empty-state"><span class="empty-icon">${d("search")}</span><h2>Ничего не найдено</h2><p>Попробуйте другой запрос.</p></div>`:""}
    </div>`}async function Ds(e){const a=(await ca(e)).album.song||[];if(!a.length)return y("В альбоме нет треков","warn");o.currentTracks=a,await h.playTracks(a,0)}async function Wa(e,t=!1){y("Загружаю альбомы…");const n=(await tn(e)).artist.album||[],s=(await Promise.all(n.map(c=>ca(c.id)))).flatMap(c=>c.album.song||[]);if(!s.length)return y("У артиста нет треков","warn");o.currentTracks=s,await h.playTracks(s,0,{shuffle:t})}async function zn(e,t){try{await ui(e,t),t===1?(o.favorites.add(e),o.dislikes.delete(e)):t===-1?(o.favorites.delete(e),o.dislikes.add(e)):(o.favorites.delete(e),o.dislikes.delete(e)),$.favorites=null,$.ratings=null,K(`[data-action="like"][data-id="${e}"]`).forEach(a=>{const n=o.favorites.has(e);a.classList.toggle("active",n),a.innerHTML=d(n?"heart":"heartOutline")}),K(`[data-action="dislike"][data-id="${e}"]`).forEach(a=>{a.classList.toggle("active",o.dislikes.has(e))}),qn(),location.hash.startsWith("#/favorites")&&P(),location.hash.startsWith("#/stats")&&P()}catch(a){y(a.message,"error")}}async function Se(e){const t=o.favorites.has(e);await zn(e,t?0:1)}async function Ga(e){const t=o.dislikes.has(e);await zn(e,t?0:-1)}function qn(){const e=h.track,t=u("#pb-like"),a=u("#pb-dislike");if(t){const n=e?o.favorites.has(e.id):!1;t.classList.toggle("active",n),t.innerHTML=d(n?"heart":"heartOutline")}a&&a.classList.toggle("active",e?o.dislikes.has(e.id):!1)}async function Cs(e){let t=[];try{t=await da()}catch(a){y(a.message,"error")}wa({title:"Добавить в плейлист",body:`
      ${t.length?`<div class="modal-list">${t.map(a=>`<button class="modal-row" data-modal-action="add" data-playlist="${a.id}">
                  <span class="modal-row-ico">${d("playlist")}</span>
                  <span><strong>${b(a.name)}</strong><small>${a.songCount??0} треков</small></span>
                  ${d("next")}
                </button>`).join("")}</div>`:'<p class="muted">Плейлистов пока нет — создайте первый.</p>'}
      <div class="modal-new">
        <input class="input" id="new-playlist-name" placeholder="Название нового плейлиста" />
        <button class="btn primary" data-modal-action="create" data-track="${e}">${d("add")} Создать</button>
      </div>`,onMount:a=>{a.addEventListener("click",async n=>{const i=n.target.closest("[data-modal-action]");if(i&&(i.dataset.modalAction==="add"&&(await ni(i.dataset.playlist,e),st(),$.playlists=null,y("Трек добавлен в плейлист")),i.dataset.modalAction==="create")){const c=u("#new-playlist-name",a).value.trim()||"Мой плейлист";await an(c,[e]),st(),$.playlists=null,y("Плейлист создан"),location.hash.startsWith("#/playlists")&&P()}})}})}async function Ps(){wa({title:"Новый плейлист",body:`<input class="input" id="new-playlist-name" placeholder="Например: Вечерний плейлист" autofocus />
           <div class="modal-actions">
             <button class="btn ghost" data-modal-action="cancel">Отмена</button>
             <button class="btn primary" data-modal-action="create">Создать</button>
           </div>`,onMount:e=>{const t=u("#new-playlist-name",e);t.focus(),e.addEventListener("click",async a=>{var i;const n=(i=a.target.closest("[data-modal-action]"))==null?void 0:i.dataset.modalAction;if(n==="cancel"&&st(),n==="create"){const s=t.value.trim();if(!s)return t.focus();await an(s,[]),st(),$.playlists=null,y("Плейлист создан"),P()}}),t.addEventListener("keydown",a=>{var n;a.key==="Enter"&&((n=u('[data-modal-action="create"]',e))==null||n.click())})}})}function wa({title:e,body:t,onMount:a}){const n=u("#modal-root");n.innerHTML=`
    <div class="modal-backdrop" data-modal-action="close">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-head"><h3>${b(e)}</h3><button class="icon-btn" data-modal-action="close">${d("close")}</button></div>
        <div class="modal-body">${t}</div>
      </div>
    </div>`,document.body.classList.add("modal-open");const i=u(".modal",n);n.querySelector(".modal-backdrop").addEventListener("click",s=>{s.target.dataset.modalAction==="close"&&st()}),a==null||a(i)}function st(){u("#modal-root").innerHTML="",document.body.classList.remove("modal-open")}function zt(e="lyrics"){o.npOpen=!0,o.npTab=e;const t=u("#np");t.hidden=!1,requestAnimationFrame(()=>t.classList.add("open")),setTimeout(()=>t.classList.add("open"),80),ee()}function ke(){o.npOpen=!1;const e=u("#np");e.classList.remove("open"),setTimeout(()=>{o.npOpen||(e.hidden=!0)},260)}function zs(e){o.npTab=e,ee()}function ee(){if(!o.npOpen)return;const e=h.track;K(".np-tab").forEach(n=>n.classList.toggle("active",n.dataset.npTab===o.npTab)),u("#np").classList.toggle("compact",o.npTab!=="lyrics");const t=u("#np-side");t.innerHTML=`
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
    </div>`;const a=u("#np-panel");o.npTab==="lyrics"?In(a,e):o.npTab==="eq"?Ce(a):Nn(a)}async function In(e,t){var i,s;if(!t){e.innerHTML=On("lyrics","Текст появится здесь","Включите трек — и мы поищем файл .lrc рядом с аудио.");return}if(e.innerHTML='<div class="panel-loading"><span class="spinner"></span>Ищу текст…</div>',o.lyricsTrackId!==t.id||o.lyricsRefresh)try{o.lyrics=await vi(t.id,o.lyricsRefresh),o.lyricsTrackId=t.id,o.lyricsRefresh=!1,o.lyricsActiveKey=null}catch{o.lyrics=null}if(o.npTab!=="lyrics")return;const a=o.lyrics;if(!a||!a.plain&&!((i=a.synced)!=null&&i.length)){e.innerHTML=`<div class="panel-empty">
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
      ${(s=a.synced)!=null&&s.length?a.synced.map((c,l)=>`<div class="lyric-line" data-index="${l}" data-time="${c.time_ms}">${b(c.text)}</div>`).join(""):`<div class="lyrics-plain">${b(a.plain).replace(/\n/g,"<br />")}</div>`}
    </div>`,Hn()}function Hn(){if(o.npTab!=="lyrics")return;const e=K(".lyric-line");if(!e.length)return;const t=h.currentTime*1e3;let a=-1;e.forEach((i,s)=>{Number(i.dataset.time)<=t&&(a=s)}),a<0&&(a=0),e.forEach((i,s)=>i.classList.toggle("active",s===a));const n=`${o.lyricsTrackId||""}:${a}`;a>=0&&o.lyricsActiveKey!==n&&(o.lyricsActiveKey=n,e[a].scrollIntoView({block:"center",behavior:"smooth"}))}function On(e,t,a){return`<div class="panel-empty"><span class="empty-icon">${d(e)}</span><h3>${b(t)}</h3><p>${b(a)}</p></div>`}function Ce(e){const t=h.eqState;e.innerHTML=`
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
      ${Ln.map((a,n)=>{const i=Number(t.gains[n])||0,s=(12-i)/24*100;return`
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
    </div>`}function Nn(e){const t=h.queue;e.innerHTML=`
    <div class="panel-title"><h3>Очередь</h3><span class="muted">${t.length} ${I(t.length,"трек","трека","треков")}</span></div>
    ${t.length?`<div class="queue-list" id="queue-list">${t.map((n,i)=>`
              <button class="queue-row ${i===h.index?"active":""}" data-action="play-queue" data-index="${i}" data-track-id="${n.id}">
                <span class="queue-drag-handle">${d("menu")}</span>
                <span class="queue-cover">${ct(n.coverArt||n.albumId,{size:80})}</span>
                <span class="queue-main"><strong>${b(n.title)}</strong><small>${b(n.artist||"")}</small></span>
                <span class="queue-time">${yt(n.duration)}</span>
              </button>`).join("")}</div>`:On("queue","Очередь пуста","Нажмите на трек или альбом, чтобы начать воспроизведение.")}`;const a=u("#queue-list");a&&t.length>0&&new k(a,{animation:150,handle:".queue-drag-handle",ghostClass:"queue-row-ghost",dragClass:"queue-row-drag",onEnd:n=>{n.oldIndex!==n.newIndex&&(h.moveInQueue(n.oldIndex,n.newIndex),setTimeout(()=>Nn(e),50))}})}function $a(){const e=h.track,t=u("#pb-title"),a=u("#pb-artist"),n=u("#pb-cover-img"),i=u("#quality-format"),s=u("#quality-detail");if(!e){t.textContent="Ничего не играет",a.textContent="Выберите трек",u(".pb-cover").classList.remove("loaded"),i.textContent="—",s.textContent="",Ja(null);return}t.textContent=e.title||"",a.textContent=[e.artist,e.album].filter(Boolean).join(" · "),e.coverArt||e.albumId?(n.src=Lt(e.coverArt||e.albumId,160),n.onload=()=>u(".pb-cover").classList.add("loaded")):(n.removeAttribute("src"),u(".pb-cover").classList.remove("loaded")),i.textContent=(e.suffix||"flac").toUpperCase(),s.textContent=[e.bitRate?`${e.bitRate} kbps`:null,e.size?we(e.size):null].filter(Boolean).join(" · "),qn(),Ja(e)}function Ja(e){if("mediaSession"in navigator){if(!e){navigator.mediaSession.metadata=null;return}navigator.mediaSession.metadata=new MediaMetadata({title:e.title||"Без названия",artist:e.artist||"Неизвестный артист",album:e.album||"",artwork:[{src:Lt(e.coverArt||e.albumId,96),sizes:"96x96",type:"image/jpeg"},{src:Lt(e.coverArt||e.albumId,128),sizes:"128x128",type:"image/jpeg"},{src:Lt(e.coverArt||e.albumId,256),sizes:"256x256",type:"image/jpeg"},{src:Lt(e.coverArt||e.albumId,512),sizes:"512x512",type:"image/jpeg"}]})}}"mediaSession"in navigator&&(navigator.mediaSession.setActionHandler("play",()=>h.play()),navigator.mediaSession.setActionHandler("pause",()=>h.pause()),navigator.mediaSession.setActionHandler("previoustrack",()=>h.prev()),navigator.mediaSession.setActionHandler("nexttrack",()=>h.next()),navigator.mediaSession.setActionHandler("seekto",e=>{e.seekTime!==void 0&&h.seekTo(e.seekTime)}),navigator.mediaSession.setActionHandler("seekbackward",e=>{h.seekBy(-(e.seekOffset||10))}),navigator.mediaSession.setActionHandler("seekforward",e=>{h.seekBy(e.seekOffset||10)}));function _t(){const e=h.duration,t=h.currentTime,a=e?t/e*100:0;u("#cur-time").textContent=yt(t),u("#total-time").textContent=yt(e),u("#seek").value=String(a),u("#seek-fill").style.width=`${a}%`;const n=u("#np-seek");n&&(n.value=String(a),u("#np-seek-fill").style.width=`${a}%`,u("#np-cur-time").textContent=yt(t),u("#np-total-time").textContent=yt(e)),Rn(),Hn()}function Rn(){const e=h.buffered;u("#seek-buffer").style.width=`${e.percent}%`;const t=u("#np-seek-buffer");t&&(t.style.width=`${e.percent}%`);const a=u("#np-buffer");a&&(a.textContent=`буфер ${yt(e.ahead)}`,a.title=`Загружено ${we(h.estimatedBufferedBytes())}`);const n=u("#quality-detail");n&&h.track&&(n.textContent=[h.track.bitRate?`${h.track.bitRate} kbps`:null,h.track.size?we(h.track.size):null,`буфер ${yt(e.ahead)}`].filter(Boolean).join(" · "))}function se(){var n;const e=!h.paused&&!!h.track;u("#play-btn").innerHTML=d(e?"pause":"play"),u("#pb-cover").classList.toggle("playing",e);const t=u('.np-controls [data-action="toggle"]');t&&(t.innerHTML=d(e?"pause":"play"),t.title=e?"Пауза":"Играть");const a=((n=h.track)==null?void 0:n.id)||null;K(".track-row").forEach(i=>{i.classList.toggle("playing",!!a&&i.dataset.trackId===a)})}function Sa(){u("#shuffle-btn").classList.toggle("active",h.shuffle),u("#repeat-btn").classList.toggle("active",h.repeat!=="off"),u("#repeat-btn").innerHTML=d(h.repeat==="one"?"repeatOne":"repeat");const e=u('.np-controls [data-action="shuffle"]');e&&e.classList.toggle("active",h.shuffle);const t=u('.np-controls [data-action="repeat"]');t&&(t.classList.toggle("active",h.repeat!=="off"),t.innerHTML=d(h.repeat==="one"?"repeatOne":"repeat"))}function Pe(){u("#volume").value=String(h.volumePercent);const e=h.volumePercent===0?"volumeOff":h.volumePercent<50?"volumeDown":"volumeUp";u("#volume-btn").innerHTML=d(e);const t=u("#np-volume");if(t){t.value=String(h.volumePercent);const a=u("#np-volume-icon");a&&(a.innerHTML=d(e))}}function Vn(){var t,a;const e=(a=(t=o.ytmStatus)==null?void 0:t.account)==null?void 0:a.photo;return typeof e=="string"&&e.startsWith("http")?e:""}function qs(e,t="user-avatar"){const a=Vn();return a?`<span class="${t} has-photo"><img src="${b(a)}" alt="" referrerpolicy="no-referrer" /></span>`:`<span class="${t}">${b(ma(e))}</span>`}function jn(){const e=$e(),t=u("#user-avatar"),a=u("#user-name"),n=Vn();t&&(n?(t.classList.add("has-photo"),t.innerHTML=`<img src="${b(n)}" alt="" referrerpolicy="no-referrer" />`):(t.classList.remove("has-photo"),t.textContent=ma(e))),a&&(a.textContent=e)}function Yn(e){const t=u("#auth-screen");t&&(t.hidden=!1,document.body.classList.add("auth-locked"),u("#auth-login-view").hidden=e!=="login",u("#auth-register-view").hidden=e!=="register",setTimeout(()=>{var a;return(a=u(e==="login"?"#login-username":"#register-invite"))==null?void 0:a.focus()},60))}function Ht(){Yn("login")}async function ka(e=""){Yn("register");const t=u("#register-invite"),a=u("#register-invite-hint");if(t.value=e.trim(),!e.trim()){a.textContent="Вставьте код приглашения от администратора.";return}a.textContent="Проверяю приглашение…";try{const n=await Mi(e.trim());a.innerHTML=`Приглашение от <strong>${b(n.invitedBy)}</strong>${n.isAdmin?" · администратор":""}`}catch(n){a.textContent=n.message||"Приглашение недействительно"}}function Is(){const e=u("#auth-screen");e&&(e.hidden=!0,document.body.classList.remove("auth-locked"))}async function Ea(){var e;try{o.authConfig=await Qe();const t=await li();if(!t.user){Ht(),location.hash.startsWith("#/register")&&P();return}o.me=t.user,o.meSettings=t.settings,ze(((e=t.settings)==null?void 0:e.theme)||localStorage.getItem("rustream.theme")||"violet"),o.ytmStatus=await Ae().catch(()=>null),jn(),Is(),await Promise.all([Dn(),ba()]),Os(),await Ma(),P()}catch(t){xn(t)||console.error(t),Ht()}}function at(e){o.liveMode=!!e,h.setLiveMode(!!e)}const Bn="rustream.playerSyncedAt";let Ka=null;function Hs(){return Number(localStorage.getItem(Bn))||0}function Fn(e){Number(e)>0&&localStorage.setItem(Bn,String(e))}function Ta(){!o.me||!h.queue.length||o.skipPushUntil&&Date.now()<o.skipPushUntil||(clearTimeout(Ka),Ka=setTimeout(async()=>{try{const e=await Di(h.snapshotState());Fn(e==null?void 0:e.updatedAt)}catch{}},3e3))}async function Ma({force:e=!1}={}){var l,r;let t;try{t=await Ai()}catch{return}const a=Number(t==null?void 0:t.updatedAt)||0,n=t==null?void 0:t.state;if(!((l=n==null?void 0:n.queue)!=null&&l.length)||!e&&a<=Hs())return;const i=n.queue[Math.min(Number(n.index)||0,n.queue.length-1)],s=(i==null?void 0:i.id)&&i.id===((r=h.track)==null?void 0:r.id);if(!e&&!h.paused&&!s)return;const c=h.applyRemote(n);c&&(Fn(a),o.skipPushUntil=Date.now()+5e3,o.liveMode=!!c.liveMode,$a(),se(),_t(),location.hash.startsWith("#/live")&&P())}setInterval(()=>{document.hidden||Ma()},3e4);document.addEventListener("visibilitychange",()=>{document.hidden||Ma()});h.addEventListener("track",Ta);h.addEventListener("queue",Ta);h.addEventListener("state",Ta);window.addEventListener("pagehide",()=>{if(!(!o.me||!h.queue.length))try{fetch("/api/me/player",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({state:h.snapshotState()}),keepalive:!0}).catch(()=>{})}catch{}});function Os(){const e=h.restore();e&&(o.liveMode=!!e.liveMode,$a(),se(),Sa(),_t())}async function Ns(){try{y("Собираю персональный поток…");const e=await on(40);if(!e.length)return y("В библиотеке пока нет треков","warn");at(!0),o.currentTracks=e,await h.playTracks(e,0),y("Live включён"),location.hash.startsWith("#/live")&&P()}catch(e){if(Ot(e))return;y(e.message,"error")}}async function Rs(e){var a;const t=o.liveMixes[e];if(!((a=t==null?void 0:t.tracks)!=null&&a.length))return y("В этом миксе пока нет треков","warn");at(!1),o.currentTracks=t.tracks,await h.playTracks(t.tracks,0),y(`Играет: ${t.title}`)}const La=[{id:"violet",name:"Фиолетовая"},{id:"ocean",name:"Океан"},{id:"sunset",name:"Закат"},{id:"forest",name:"Лес"},{id:"mono",name:"Моно"}],Ee=/^#[0-9a-f]{6}$/i;function ra(e){const t=e.replace("#","");return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}}function Vs({r:e,g:t,b:a}){const n=i=>Math.max(0,Math.min(255,Math.round(i)));return`#${[n(e),n(t),n(a)].map(i=>i.toString(16).padStart(2,"0")).join("")}`}function Dt(e,t,a){const n=ra(e),i=ra(t);return Vs({r:n.r*a+i.r*(1-a),g:n.g*a+i.g*(1-a),b:n.b*a+i.b*(1-a)})}function js(e){const{r:t,g:a,b:n}=ra(e),i=s=>{const c=s/255;return c<=.03928?c/12.92:((c+.055)/1.055)**2.4};return .2126*i(t)+.7152*i(a)+.0722*i(n)}function Qa(e){return js(e)>.42?"#1a1917":"#ffffff"}function Un(e){const t=document.documentElement.classList.contains("light-mode"),a=t?"#faf8f4":"#101013",n=t?"#efece4":"#17171c",i=t?.06:.1,s=Dt(e,a,i),c=Dt(e,n,i*1.25),l=Dt(e,t?"#e9e5dc":"#1d1d23",i*1.4),r=Dt(e,t?"#ffffff":"#101013",t?.22:.3),p=document.body.style;p.setProperty("--primary",e),p.setProperty("--on-primary",Qa(e)),p.setProperty("--primary-container",r),p.setProperty("--on-primary-container",Qa(r)),p.setProperty("--surface",s),p.setProperty("--surface-container",c),p.setProperty("--surface-container-high",l),p.setProperty("--surface-container-highest",Dt(e,l,.5)),p.setProperty("--surface-container-low",Dt(e,s,.5))}function Ys(){const e=document.body.style;["--primary","--on-primary","--primary-container","--on-primary-container","--surface","--surface-container","--surface-container-high","--surface-container-highest","--surface-container-low"].forEach(t=>e.removeProperty(t))}function ze(e){const t=La.some(n=>n.id===e),a=t?e:Ee.test(e||"")?e.toLowerCase():"violet";o.theme=a,document.body.dataset.theme=t?a:"custom",localStorage.setItem("rustream.theme",a),t?Ys():Un(a)}function oa(e){const t=e==="auto"?window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark":e;document.documentElement.classList.toggle("light-mode",t==="light"),o.theme&&Ee.test(o.theme)&&Un(o.theme)}(function(){const t=localStorage.getItem("colorMode")||"dark";oa(t),window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{localStorage.getItem("colorMode")==="auto"&&oa("auto")})})();const Xn=[{id:"compact",name:"Компактно"},{id:"default",name:"Обычно"},{id:"large",name:"Крупно"}];function Wn(e){const t=Xn.some(a=>a.id===e)?e:"default";o.density=t,document.documentElement.dataset.density=t,localStorage.setItem("rustream.density",t)}(function(){Wn(localStorage.getItem("rustream.density")||"default")})();async function Gn(e){ze(e);try{await sn({theme:o.theme}),o.meSettings={...o.meSettings||{},theme:o.theme}}catch(t){y(t.message,"error")}}function Bs(e){var i,s,c,l,r,p,m,g;const t=o.meSettings||{},a=(i=o.authConfig)==null?void 0:i.lastfm,n=o.lastfmConfig||{};return`
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
          <span>Логин: <strong>${b(((c=o.me)==null?void 0:c.username)||"")}</strong></span>
          ${(l=o.me)!=null&&l.isAdmin?'<span class="chip">администратор</span>':""}
        </div>
      </section>

      <section class="settings-section">
        <h4>${d("palette")} Оформление</h4>
        <p class="muted small">Цветовая тема сохраняется в аккаунте и применяется на всех устройствах.</p>
        <div class="theme-picker">
          ${La.map(f=>`<button class="theme-swatch ${o.theme===f.id?"active":""}" data-theme-choice="${f.id}" title="${f.name}">
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
        ${(r=o.me)!=null&&r.isAdmin?`
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
        <p class="muted small">Сканер перечитывает папки каждые ${((p=o.authConfig)==null?void 0:p.scanInterval)||300} секунд. Новые файлы появятся автоматически.</p>
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
    </div>`}async function Wt(){if(!o.me)return Ht();let e=[];if(o.me.isAdmin)try{[e,o.lastfmConfig]=await Promise.all([gi(),Oe().catch(()=>({}))])}catch(t){Ot(t)}wa({title:"Аккаунт и настройки",body:Bs(e),onMount:t=>{var a,n;(a=u("#settings-profile-form",t))==null||a.addEventListener("submit",async i=>{i.preventDefault();try{await Aa(u("#settings-display-name",t).value.trim()),o.me.displayName=u("#settings-display-name",t).value.trim(),jn(),y("Имя обновлено")}catch(s){y(s.message,"error")}}),(n=u("#settings-password-form",t))==null||n.addEventListener("submit",async i=>{i.preventDefault();try{await pi(u("#settings-current-password",t).value,u("#settings-new-password",t).value),u("#settings-current-password",t).value="",u("#settings-new-password",t).value="",y("Пароль изменён")}catch(s){y(s.message,"error")}}),t.addEventListener("click",async i=>{const s=i.target.closest("[data-theme-choice]");if(s){const r=s.dataset.themeChoice;ze(r),K(".theme-swatch",t).forEach(p=>p.classList.toggle("active",p.dataset.themeChoice===r));try{await Aa(o.me.displayName||o.me.username,r),o.meSettings={...o.meSettings||{},theme:r},y("Тема сохранена")}catch(p){y(p.message,"error")}return}const c=i.target.closest("[data-settings-action]");if(!c)return;const l=c.dataset.settingsAction;if(l==="logout"){await nn().catch(()=>{}),location.reload();return}if(l==="rescan"){c.classList.add("spin"),await ln().catch(r=>y(r.message,"error")),setTimeout(()=>{c.classList.remove("spin"),y("Сканирование запущено")},1200);return}if(l==="clear-history"){if(!confirm("Удалить всю историю прослушиваний этого аккаунта?"))return;try{await yi(),$.meStats=null,o.meStats=null,y("История очищена");const r=await He();o.meSettings=r.settings}catch(r){y(r.message,"error")}return}if(l==="lastfm-connect"){try{const r=await $i();window.open(r.url,"_blank","noopener"),y("Подтвердите доступ на Last.fm, затем нажмите «Завершить»")}catch(r){y(r.message,"error")}return}if(l==="lastfm-complete"){try{const r=await Si();y(`Last.fm подключён${r.username?`: ${r.username}`:""}`);const p=await He();o.meSettings=p.settings,st(),Wt()}catch(r){y(r.message,"error")}return}if(l==="save-lastfm-app"){try{await Da(u("#settings-lastfm-api-key",t).value.trim(),u("#settings-lastfm-api-secret",t).value.trim());const r=await Oe();o.lastfmConfig=r,o.authConfig=await Qe(),y("Ключи Last.fm сохранены в config.toml"),u("#settings-lastfm-api-secret",t).value=""}catch(r){y(r.message,"error")}return}if(l==="clear-lastfm-app"){if(!confirm("Удалить ключи приложения Last.fm из config.toml?"))return;try{await Da("","",!0),o.lastfmConfig=await Oe(),o.authConfig=await Qe(),y("Ключи Last.fm удалены"),st(),Wt()}catch(r){y(r.message,"error")}return}if(l==="save-scrobbling"){const r=actionEl.dataset.scope||"both",p={};r!=="lastfm"&&(p.listenbrainzToken=u("#settings-listenbrainz",t).value.trim()),r!=="listenbrainz"&&(p.lastfmSessionKey=u("#settings-lastfm-key",t).value.trim());try{await hi(p),y(r==="listenbrainz"?"Токен ListenBrainz сохранён":"Last.fm сохранён");const m=await He();o.meSettings=m.settings}catch(m){y(m.message,"error")}return}if(l==="create-user"){try{await bi({username:u("#new-user-name",t).value.trim(),password:u("#new-user-password",t).value,displayName:u("#new-user-display",t).value.trim(),isAdmin:u("#new-user-admin",t).checked}),y("Пользователь создан"),st(),Wt()}catch(r){y(r.message,"error")}return}if(l==="delete-user"){if(!confirm("Удалить пользователя и все его данные?"))return;try{await wi(c.dataset.id),y("Пользователь удалён"),st(),Wt()}catch(r){y(r.message,"error")}}})}})}function Fs(){const e=localStorage.getItem("colorMode")||"dark";return`
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
      ${La.map(t=>`<button class="theme-swatch ${o.theme===t.id?"active":""}" data-action="theme" data-theme="${t.id}">
          <span class="swatch-dot theme-${t.id}"></span><span>${t.name}</span>
        </button>`).join("")}
      <label class="theme-swatch custom ${Ee.test(o.theme)?"active":""}" title="Свой цвет">
        <input type="color" id="theme-custom" value="${Ee.test(o.theme)?o.theme:"#c7a6ff"}" aria-label="Свой цвет" />
        <span>Свой цвет</span>
      </label>
    </div>`}function Us(e){const t=e==null?void 0:e.account;return e!=null&&e.connected?`
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
    </form>`}function Xs(e){return`
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
    </section>`}async function Ws(e){j();const[t,a]=await Promise.all([fs().catch(()=>({})),da().catch(()=>[])]);if(e!==o.renderSeq)return;$.playlists=a;const n=[{href:"#/artists",icon:"person",title:"Артисты",sub:`${t.artists||0} в библиотеке`},{href:"#/albums",icon:"album",title:"Альбомы",sub:`${t.albums||0} в библиотеке`},{href:"#/tracks",icon:"music",title:"Треки",sub:`${t.tracks||0} в библиотеке`},{href:"#/playlists",icon:"playlist",title:"Плейлисты",sub:`${a.length} ${I(a.length,"подборка","подборки","подборок")}`},{href:"#/favorites",icon:"heart",title:"Избранное",sub:"Треки, которым вы поставили лайк"},{href:"#/ytm",icon:"ytm",title:"YouTube Music",sub:"Внешний источник: история, лайки, поиск"},{href:"#/live",icon:"radio",title:"Live",sub:"Персональный поток без повторов"},{href:"#/stats",icon:"chart",title:"Статистика",sub:"Часы, артисты и история"}];u("#view").innerHTML=`
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
    </div>`}async function Gs(e){var c,l,r,p;j();const t=!!((c=o.me)!=null&&c.isAdmin),[a,n]=await Promise.all([Ae().catch(()=>({connected:!1,account:null})),t?ki().catch(()=>[]):Promise.resolve([])]);if(e!==o.renderSeq)return;o.ytmStatus=a,u("#view").innerHTML=`
    <div class="page profile-page">
      <header class="page-head">
        <div class="profile-identity">
          ${qs($e(),"user-avatar xl")}
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
        ${Us(a)}
      </section>

      <section class="section glass-card">
        <h2>${d("palette")} Оформление</h2>
        <p class="muted small">Тема сохраняется в аккаунте и применяется на всех устройствах.</p>
        ${Fs()}
      </section>

      <section class="section glass-card">
        <h2>${d("expand")} Плотность</h2>
        <p class="muted small">Сколько строк и обложек помещается на экране.</p>
        <div class="theme-mode-picker">
          ${Xn.map(m=>`<button class="mode-btn ${(o.density||"default")===m.id?"active":""}" data-action="density" data-value="${m.id}">${m.name}</button>`).join("")}
        </div>
      </section>

      ${t?Xs(n):""}
    </div>`;const i=u("#ytm-connect-form");i==null||i.addEventListener("submit",async m=>{m.preventDefault();const g=u("#ytm-connect-submit"),f=u("#ytm-connect-error"),w=u("#ytm-cookies").value.trim();if(f.textContent="",!w){f.textContent="Вставьте cookies";return}g.disabled=!0;try{await _i(w),y("YouTube Music подключён"),P()}catch(E){f.textContent=E.message||"Не удалось подключить"}finally{g.disabled=!1}});const s=u("#invite-form");s==null||s.addEventListener("submit",async m=>{var g;m.preventDefault();try{const f=await Ei({note:u("#invite-note").value.trim(),expiresInDays:Number(u("#invite-days").value||0),maxUses:Number(u("#invite-uses").value||0),isAdmin:u("#invite-admin").checked});await((g=navigator.clipboard)==null?void 0:g.writeText(cn(f.code)).catch(()=>{})),y("Код создан, ссылка скопирована"),P()}catch(f){y(f.message,"error")}}),(r=u("#theme-custom"))==null||r.addEventListener("input",m=>ze(m.target.value)),(p=u("#theme-custom"))==null||p.addEventListener("change",async m=>{await Gn(m.target.value),P()})}async function Js(e){var m,g;j();const t=o.ytmStatus||await Ae().catch(()=>null);if(e!==o.renderSeq)return;if(o.ytmStatus=t,!(t!=null&&t.connected)){u("#view").innerHTML=`
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
      </div>`;return}o.ytmLists=o.ytmLists||{history:[],liked:[],search:[]};const a=(f,w)=>Q(f,{showCover:!0,rowAction:"play-ytm-row",rowList:w});u("#view").innerHTML=`
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
    </div>`;const n=u("#ytm-search-form"),i=u("#ytm-search-input"),s=u("#ytm-results"),c=(f,w,E,x)=>{const H=u(f);if(!H)return;const Z=H.querySelector("div[id]")||H;if(!E.length){H.hidden=!0;return}H.hidden=!1,Z.innerHTML=a(E,w)},l=(f,w)=>{var E;o.ytmLists.search=f,s.hidden=!1,s.innerHTML=f.length?`<div class="section-head"><h2>${d("search")} Результаты</h2><span class="muted small">${f.length}</span></div>${a(f,"search")}`:`<div class="empty-inline">${b(w)}</div>`,(E=u("#ytm-empty"))==null||E.setAttribute("hidden","")},r=async()=>{const f=i.value.trim();if(f){s.hidden=!1,s.innerHTML=`<div class="skel-rows">${'<div class="skeleton skeleton-line"></div>'.repeat(5)}</div>`;try{const w=await dn(f);if(e!==o.renderSeq)return;l(w,"Ничего не найдено")}catch(w){if(Ot(w))return;s.innerHTML=`<div class="empty-inline">${b(w.message)}</div>`}}};n.addEventListener("submit",f=>{f.preventDefault(),r()});let p;i.addEventListener("input",()=>{clearTimeout(p),p=setTimeout(()=>{i.value.trim().length>=2&&r()},500)}),(async()=>{const[f,w]=await Promise.allSettled([pn(40),un(50)]);if(e!==o.renderSeq)return;f.status==="fulfilled"&&f.value.length&&(o.ytmLists.history=f.value,c("#ytm-history-section","history",f.value)),w.status==="fulfilled"&&w.value.length&&(o.ytmLists.liked=w.value,c("#ytm-liked-section","liked",w.value)),!o.ytmLists.history.length&&!o.ytmLists.liked.length&&(u("#ytm-empty").hidden=!1)})()}document.addEventListener("click",async e=>{var n,i,s,c;const t=e.target.closest("[data-action]");if(!t)return;const a=t.dataset.action;if(a==="open"){location.hash=t.dataset.href;return}if(a==="play-row"){const l=Number(t.dataset.index);if(e.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]'))return;at(!1),await h.playTracks(o.currentTracks,l);return}if(a==="play-list-row"){const l=Number(t.dataset.index);if(e.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]'))return;const r=(n=o.lists)==null?void 0:n[t.dataset.list];if(!(r!=null&&r.length))return;at(!1),await h.playTracks(r,l);return}if(a==="play-ytm-row"){const l=Number(t.dataset.index);if(e.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]'))return;const r=(i=o.ytmLists)==null?void 0:i[t.dataset.list];if(!(r!=null&&r.length))return;at(!1),await h.playTracks(r,l);return}if(a==="play-all"){if(!o.currentTracks.length)return y("Список пуст","warn");at(!1),await h.playTracks(o.currentTracks,0);return}if(a==="shuffle-all"){if(!o.currentTracks.length)return y("Список пуст","warn");at(!1),await h.playTracks(o.currentTracks,0,{shuffle:!0});return}if(a==="shuffle-library"){const l=await ga();o.currentTracks=l,await h.playTracks(l,0,{shuffle:!0});return}if(a==="start-live"){await Ns();return}if(a==="play-mix"){await Rs(Number(t.dataset.index));return}if(a==="open-settings"){await Wt();return}if(a==="theme"){await Gn(t.dataset.theme),K('[data-action="theme"]').forEach(l=>l.classList.toggle("active",l.dataset.theme===o.theme));return}if(a==="color-mode"){const l=t.dataset.mode;localStorage.setItem("colorMode",l),oa(l),K('[data-action="color-mode"]').forEach(r=>r.classList.toggle("active",r.dataset.mode===l)),y(`Режим: ${l==="dark"?"тёмный":l==="light"?"светлый":"системный"}`);return}if(a==="toggle-password"){const l=document.getElementById(t.dataset.target);if(!l)return;const r=l.type==="password";l.type=r?"text":"password",t.innerHTML=d(r?"eyeOff":"eye"),t.setAttribute("aria-label",r?"Скрыть пароль":"Показать пароль");return}if(a==="density"){const l=t.dataset.value;Wn(l),K('[data-action="density"]').forEach(r=>r.classList.toggle("active",r.dataset.value===l));return}if(a==="logout"){await nn().catch(()=>{}),location.reload();return}if(a==="ytm-disconnect"){if(!confirm("Отключить YouTube Music? Cookies и скачанный кэш этого профиля будут удалены."))return;try{await xi(),o.ytmStatus={connected:!1,account:null},y("YouTube Music отключён"),P()}catch(l){y(l.message,"error")}return}if(a==="ytm-reconnect"){o.ytmStatus={connected:!1,account:null},u("#view").innerHTML="",P();return}if(a==="run-search"){sa(t.dataset.query||"");return}if(a==="clear-searches"){localStorage.removeItem(ya),P();return}if(a==="ytm-preset"){const l=t.dataset.query||"";if(!l)return;const r=u("#ytm-results");r&&(r.hidden=!1,r.innerHTML=`<div class="empty-inline">Ищу «${b(l)}»…</div>`);try{const p=await dn(l);o.ytmLists=o.ytmLists||{},o.ytmLists.search=p,r&&(r.innerHTML=p.length?`<div class="section-head"><h2>${d("search")} ${b(l)}</h2><span class="muted small">${p.length}</span></div>${Q(p,{showCover:!0,rowAction:"play-ytm-row",rowList:"search"})}`:'<div class="empty-inline">Ничего не найдено</div>')}catch(p){r&&(r.innerHTML=`<div class="empty-inline">${b(p.message)}</div>`)}return}if(a==="ytm-liked"){const l=u("#ytm-liked-section"),r=u("#ytm-liked");r&&(r.innerHTML='<div class="empty-inline">Загружаю лайки…</div>');try{const p=await un(200);o.ytmLists=o.ytmLists||{},o.ytmLists.liked=p,l&&(l.hidden=!1),r&&(r.innerHTML=p.length?Q(p,{showCover:!0,rowAction:"play-ytm-row",rowList:"liked"}):'<div class="empty-inline">В YouTube Music пока нет лайков</div>'),y(`Лайков: ${p.length}`)}catch(p){r&&(r.innerHTML=`<div class="empty-inline">${b(p.message)}</div>`)}return}if(a==="invite-copy"){await((s=navigator.clipboard)==null?void 0:s.writeText(cn(t.dataset.code)).catch(()=>{})),y("Ссылка скопирована");return}if(a==="invite-revoke"){if(!confirm("Отозвать приглашение?"))return;try{await Ti(t.dataset.code),y("Приглашение отозвано"),P()}catch(l){y(l.message,"error")}return}if(a==="play-album"){e.stopPropagation(),at(!1),await Ds(t.dataset.id);return}if(a==="play-artist"){at(!1),await Wa(t.dataset.id,!1);return}if(a==="shuffle-artist"){at(!1),await Wa(t.dataset.id,!0);return}if(a==="like"){e.stopPropagation(),await Se(t.dataset.id);return}if(a==="like-current"){h.track&&await Se(h.track.id),ee();return}if(a==="dislike"){e.stopPropagation(),await Ga(t.dataset.id);return}if(a==="dislike-current"){h.track&&await Ga(h.track.id),ee();return}if(a==="add-to-playlist"){e.stopPropagation(),await Cs(t.dataset.id);return}if(a==="remove-from-playlist"){e.stopPropagation();try{await ii(t.dataset.playlist,Number(t.dataset.index)),y("Трек убран из плейлиста"),P()}catch(l){y(l.message,"error")}return}if(a==="resume"){h.track?(h.clearRestored(),await h.toggle()):o.currentTracks.length&&await h.playTracks(o.currentTracks,0),location.hash.startsWith("#/home")&&P();return}if(a==="toggle"){!h.track&&o.currentTracks.length?await h.playTracks(o.currentTracks,0):await h.toggle();return}if(a==="prev")return h.previous();if(a==="next")return h.next();if(a==="shuffle")return h.toggleShuffle();if(a==="repeat")return h.cycleRepeat();if(a==="mute")return h.toggleMute();if(a==="nowplaying")return zt(o.npTab);if(a==="open-lyrics")return zt("lyrics");if(a==="open-eq")return zt("eq");if(a==="open-queue")return zt("queue");if(a==="close-np")return ke();if(a==="jump-album"){(c=h.track)!=null&&c.albumId&&(ke(),location.hash=`#/album/${h.track.albumId}`);return}if(a==="play-queue"){at(!1),await h.playAt(Number(t.dataset.index));return}if(a==="new-playlist")return e.preventDefault(),Ps();if(a==="delete-playlist"){if(!confirm("Удалить этот плейлист?"))return;await si(t.dataset.id),y("Плейлист удалён"),$.playlists=null,location.hash="#/playlists";return}if(a==="reload")return P();if(a==="reset-eq"){h.resetEq(),Ce(u("#np-panel"));return}if(a==="refresh-lyrics"){if(!h.track)return;o.lyricsRefresh=!0,o.lyricsTrackId=null,In(u("#np-panel"),h.track);return}});u("#np").addEventListener("click",e=>{const t=e.target.closest("[data-np-tab]");t&&zs(t.dataset.npTab);const a=e.target.closest("[data-eq-preset]");a&&(h.applyEqPreset(a.dataset.eqPreset),Ce(u("#np-panel")))});u("#np").addEventListener("input",e=>{if(e.target.id==="np-seek"){h.seekTo(Number(e.target.value)),_t();return}if(e.target.id==="np-volume"){h.setVolume(Number(e.target.value)),Pe();return}});u("#np").addEventListener("change",e=>{var t;e.target.id==="eq-enabled"&&(h.setEqEnabled(e.target.checked),(t=u(".eq"))==null||t.classList.toggle("disabled",!e.target.checked))});u("#seek").addEventListener("input",e=>{h.seekTo(Number(e.target.value)),_t()});u("#volume").addEventListener("input",e=>{h.setVolume(Number(e.target.value)),Pe()});document.addEventListener("keydown",e=>{var a;const t=["INPUT","TEXTAREA"].includes((a=document.activeElement)==null?void 0:a.tagName);e.code==="Space"&&!t&&h.track&&(e.preventDefault(),h.toggle()),e.key==="ArrowRight"&&!t&&e.shiftKey&&h.seekBy(5),e.key==="ArrowLeft"&&!t&&e.shiftKey&&h.seekBy(-5),t||(e.key.toLowerCase()==="l"&&h.track&&(e.preventDefault(),Se(h.track.id)),e.key.toLowerCase()==="n"&&(e.preventDefault(),h.next()),e.key.toLowerCase()==="p"&&!e.ctrlKey&&!e.metaKey&&(e.preventDefault(),h.prev()),e.key.toLowerCase()==="m"&&(e.preventDefault(),h.toggleMute()),e.key.toLowerCase()==="s"&&(e.preventDefault(),h.toggleShuffle()),e.key.toLowerCase()==="r"&&(e.preventDefault(),h.toggleRepeat())),(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"&&(e.preventDefault(),u("#search-input").focus()),e.key==="Escape"&&(u("#modal-root").innerHTML?st():ke())});let Te=0,Me=0,Le=0;u("#playerbar").addEventListener("touchstart",e=>{Te=e.touches[0].clientY,Me=e.touches[0].clientX,Le=Date.now()});u("#playerbar").addEventListener("touchend",e=>{const t=e.changedTouches[0].clientY,a=e.changedTouches[0].clientX,n=Te-t,i=Math.abs(a-Me),s=Date.now()-Le;n>80&&s<300&&i<50&&(e.preventDefault(),zt(o.npTab||"lyrics"))});const Ge=u(".np-sheet");Ge&&(Ge.addEventListener("touchstart",e=>{e.target.closest('.np-seek-bar, .eq-band, input[type="range"]')||(Te=e.touches[0].clientY,Me=e.touches[0].clientX,Le=Date.now())}),Ge.addEventListener("touchend",e=>{const t=e.changedTouches[0].clientY,a=e.changedTouches[0].clientX,n=t-Te,i=Math.abs(a-Me),s=Date.now()-Le;n>100&&s<300&&i<50&&(e.preventDefault(),ke())}));let Je=0,Ke=null;u("#pb-cover").addEventListener("touchend",e=>{const t=Date.now(),a=e.target;if(t-Je<300&&a===Ke){if(e.preventDefault(),h.track){Se(h.track.id);const n=u("#pb-cover");n.style.transform="scale(0.92)",setTimeout(()=>{n.style.transform=""},150)}Je=0,Ke=null}else Je=t,Ke=a});let J=null;function Jn(e,t){const a=e.getBoundingClientRect(),n=Math.min(1,Math.max(0,(t-a.top)/a.height));return Math.round(12-n*24)}function Ks(e,t){const a=Number(e.dataset.eqBand),n=(12-t)/24*100,i=e.querySelector(".eq-thumb"),s=e.querySelector(".eq-fill");i&&(i.style.top=`${n}%`),s&&(s.style.top=`${Math.min(n,50)}%`,s.style.height=`${Math.abs(50-n)}%`),e.setAttribute("aria-valuenow",String(t));const c=u(`#eq-val-${a}`);c&&(c.textContent=`${t>0?"+":""}${t}`)}function qe(e,t,a){const n=Number(e.dataset.eqBand);Ks(e,t),h.eqState.gains[n]=t,h.setEqGain(n,t),a&&(h.eqState.preset="custom",K(".eq-presets .chip-btn").forEach(i=>i.classList.toggle("active",i.dataset.eqPreset==="custom")))}document.addEventListener("pointerdown",e=>{var a;const t=e.target.closest(".eq-track");t&&(e.preventDefault(),J={el:t,value:Jn(t,e.clientY)},(a=t.setPointerCapture)==null||a.call(t,e.pointerId),qe(t,J.value,!1))});document.addEventListener("pointermove",e=>{J&&(e.preventDefault(),J.value=Jn(J.el,e.clientY),qe(J.el,J.value,!1))});document.addEventListener("pointerup",()=>{J&&(qe(J.el,J.value,!0),J=null)});document.addEventListener("pointercancel",()=>{J=null});document.addEventListener("keydown",e=>{var i,s;const t=(s=(i=e.target).closest)==null?void 0:s.call(i,".eq-track");if(!t)return;const a=e.key==="ArrowUp"?1:e.key==="ArrowDown"?-1:0;if(!a)return;e.preventDefault();const n=Number(t.getAttribute("aria-valuenow"))||0;qe(t,Math.max(-12,Math.min(12,n+a)),!0)});const te=u("#search-input");let Za;te.addEventListener("input",()=>{clearTimeout(Za);const e=te.value.trim();e.length!==0&&(Za=setTimeout(()=>{e.length>=2&&(location.hash=`#/search?q=${encodeURIComponent(e)}`)},350))});te.addEventListener("keydown",e=>{if(e.key==="Enter"){const t=te.value.trim();if(!t)return;te.blur(),Pn(t);const a=`#/search?q=${encodeURIComponent(t)}`;location.hash===a?P():location.hash=a}});u("#rescan-btn").addEventListener("click",async()=>{u("#rescan-btn").classList.add("spin");const e=Date.now();try{await ln(),setTimeout(async()=>{u("#rescan-btn").classList.remove("spin"),await gs()},Math.max(2500,Date.now()-e))}catch(t){u("#rescan-btn").classList.remove("spin"),Ot(t)||y(t.message,"error")}});u("#np-pill").addEventListener("click",()=>zt(o.npTab));h.addEventListener("track",()=>{$a(),o.npOpen&&ee(),se(),_t()});h.addEventListener("time",()=>{_t()});h.addEventListener("buffer",Rn);h.addEventListener("state",se);h.addEventListener("mode",Sa);h.addEventListener("volume",Pe);h.addEventListener("eq",()=>{o.npTab==="eq"&&o.npOpen&&Ce(u("#np-panel"))});h.addEventListener("error",e=>y(e.detail,"error"));document.addEventListener("error",e=>{e.target instanceof HTMLImageElement&&(e.target.style.display="none")},!0);window.addEventListener("hashchange",P);h.addEventListener("queueend",async()=>{if(o.liveMode)try{const e=await on(25),t=new Set(h.queue.map(n=>n.id)),a=e.filter(n=>!t.has(n.id));if(!a.length){y("Live: новых треков не нашлось","warn");return}h.appendTracks(a),await h.next(!0)}catch(e){Ot(e)||y(e.message,"error")}});u("#auth-toggle-register").addEventListener("click",()=>{var e;return ka(((e=u("#register-invite"))==null?void 0:e.value)||"")});u("#auth-toggle-login").addEventListener("click",()=>{location.hash.startsWith("#/register")&&(location.hash="#/home"),Ht()});u("#register-invite").addEventListener("change",()=>{const e=u("#register-invite").value.trim();e&&ka(e)});u("#register-form").addEventListener("submit",async e=>{e.preventDefault();const t=u("#register-submit"),a=u("#register-error");a.textContent="",t.disabled=!0;try{await Li({invite:u("#register-invite").value.trim(),username:u("#register-username").value.trim(),password:u("#register-password").value,displayName:u("#register-display").value.trim()}),location.hash="#/home",await Ea()}catch(n){a.textContent=n.message||"Не удалось зарегистрироваться"}finally{t.disabled=!1}});u("#login-form").addEventListener("submit",async e=>{e.preventDefault();const t=u("#login-submit"),a=u("#login-error");a.textContent="",t.disabled=!0;try{await ci(u("#login-username").value.trim(),u("#login-password").value),await Ea()}catch(n){a.textContent=n.message||"Не удалось войти"}finally{t.disabled=!1}});document.addEventListener("keydown",e=>{var t,a;e.key==="Enter"&&!u("#auth-screen").hidden&&((t=document.activeElement)==null?void 0:t.id)==="login-username"&&((a=u("#login-password"))==null||a.focus())});window.addEventListener("pagehide",()=>{h.playId&&h._finalizePlay(!1)});Pe();Sa();se();_t();Ea();
