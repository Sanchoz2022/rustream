(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=a(i);fetch(i.href,n)}})();const Aa={home:"M4 20v-8H2L12 3l10 9h-2v8h-6v-6h-4v6H4z",person:"M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z",album:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",music:"M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z",playlist:"M3 6h12v2H3V6zm0 4h12v2H3v-2zm0 4h8v2H3v-2zm12 .5a3.5 3.5 0 1 0 3.5 3.5V9h3V6h-4v8.5a3.5 3.5 0 0 0-2.5-.9z",search:"M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z",play:"M8 5v14l11-7L8 5z",pause:"M6 5h4v14H6V5zm8 0h4v14h-4V5z",prev:"M6 6h2v12H6V6zm3.5 6L18 18V6l-8.5 6z",next:"M16 6h2v12h-2V6zM6 18l8.5-6L6 6v12z",shuffle:"M10.59 9.17 5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z",repeat:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z",repeatOne:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z",volumeUp:"M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.5 4.5 0 0 0 16.5 12zM14 3.23v2.06a6.99 6.99 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54z",volumeDown:"M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.5 4.5 0 0 0 16.5 12z",volumeOff:"M16.5 12a4.5 4.5 0 0 0-2.5-4.03v2.21l2.45 2.45A4.4 4.4 0 0 0 16.5 12zM19 12a7 7 0 0 1-.94 3.51l1.48 1.48A9 9 0 0 0 14 4.75v2.06A7 7 0 0 1 19 12zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25a7 7 0 0 1-2.25 1.2v2.06a9 9 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z",queue:"M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18a3 3 0 1 0 2 2.82V8h3V6h-5z",lyrics:"M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2z",equalizer:"M7 20h2V10H7v10zm4-8h2V4h-2v8zm4 4h2V7h-2v9zM3 20h2v-6H3v6z",close:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",back:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",add:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",delete:"M6 19c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z",heart:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",heartOutline:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z",more:"M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",clock:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z",library:"M4 6H2v14a2 2 0 0 0 2 2h14v-2H4V6zm16-4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-3 9H9V9h8v2zm-2 4H9v-2h6v2zm2-8H9V5h8v2z",refresh:"M17.65 6.35A8 8 0 1 0 19.73 14h-2.08A6 6 0 1 1 12 6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z",edit:"M3 17.25V21h3.75L17.8 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",check:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",wave:"M3 12h2v4H3v-4zm4-4h2v12H7V8zm4-4h2v16h-2V4zm4 6h2v6h-2v-6zm4-2h2v10h-2V8z",radio:"M3.24 6.15C2.51 6.43 2 7.17 2 8v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-.83-.51-1.57-1.24-1.85L12.7 2.3a1 1 0 0 0-.7 0L3.24 6.15zM8 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm10-10H9v2h9v-2zm0 4h-3v2h3v-2z",logout:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5-5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z",thumbDown:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z",thumbUp:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z",chart:"M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z",palette:"M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z",settings:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.03 7.03 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.47.41l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z",chevronDown:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z",chevronRight:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z",ytm:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-13a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-1.5 7.25v-4.5L14.5 12l-4 2.25z",copy:"M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z",link:"M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4a3.1 3.1 0 0 1 0 6.2h-4V17h4a5 5 0 0 0 0-10z",ticket:"M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 1 0 4v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 1 0-4zm-2-1.46a4 4 0 0 0 0 6.92V18H4v-2.54a4 4 0 0 0 0-6.92V6h16v2.54zM11 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z",key:"M12.65 10A6 6 0 1 0 12.65 14H17v4h4v-4h2v-4H12.65zM7 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",lock:"M18 8h-1V6A5 5 0 0 0 7 6v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zM9 6a3 3 0 0 1 6 0v2H9V6zm9 14H6V10h12v10zm-6-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",moreHoriz:"M6 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",queueAdd:"M14 10H3v2h11v-2zm0-4H3v2h11V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM3 16h7v-2H3v2z",sparkle:"M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z",external:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z",shield:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",darkMode:"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8A9.3 9.3 0 0 0 12 3z",lightMode:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2 13h2a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm18 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM11 2v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM5.99 4.58a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06z",expand:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z",sun:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2 13h2a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm18 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM11 2v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM5.99 4.58a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06z",moon:"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8A9.3 9.3 0 0 0 12 3z",menu:"M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z",eye:"M12 5c-5 0-9 4.5-10 7 1 2.5 5 7 10 7s9-4.5 10-7c-1-2.5-5-7-10-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",eyeOff:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2.71 3.16l1.94 1.94C3.29 6.24 2.06 7.94 1 10c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l2.71 2.71 1.27-1.27L3.98 1.89 2.71 3.16zM12 15c-1.03 0-1.96-.42-2.64-1.1l3.54 3.54c-.28.09-.59.14-.9.14z"};function d(e,t=""){const a=Aa[e]||Aa.music;return`<svg class="icon ${t}" viewBox="0 0 24 24" aria-hidden="true"><path d="${a}"/></svg>`}const Ae="1.16.1",De="rustream-web";class Ft extends Error{constructor(t,a=0,s=""){super(t),this.name="ApiError",this.status=a,this.code=s}}function ca(e,t={}){const a=new URLSearchParams({v:Ae,c:De,f:"json",...t});return`/rest/${e}.view?${a.toString()}`}async function lt(e,t={}){var n;const a=await fetch(ca(e,t),{credentials:"same-origin"});if(a.status===401)throw new Ft("Требуется вход в аккаунт",401);if(!a.ok)throw new Ft(`HTTP ${a.status}`,a.status);const i=(await a.json())["subsonic-response"];if(!i)throw new Ft("Некорректный ответ сервера");if(i.status!=="ok")throw new Ft(((n=i.error)==null?void 0:n.message)||"Ошибка API");return i}async function M(e,t={}){const a=await fetch(e,{credentials:"same-origin",...t,headers:{"Content-Type":"application/json",...t.headers||{}}});let s=null;try{s=await a.json()}catch{s=null}if(!a.ok){const i=a.status===401?"Требуется вход в аккаунт":`HTTP ${a.status}`;throw new Ft((s==null?void 0:s.error)||i,a.status,(s==null?void 0:s.code)||"")}return s}const Lt=(e,t=300)=>e?ca("getCoverArt",{id:e,size:t}):"",He=e=>ca("stream",{id:e});async function ei(){var a;const e=await lt("getArtists"),t=[];for(const s of((a=e.artists)==null?void 0:a.index)||[])for(const i of s.artist||[])t.push(i);return t}const as=e=>lt("getArtist",{id:e}),da=e=>lt("getAlbum",{id:e});async function ss(e="alphabeticalByName",t=100,a=0){var i;return((i=(await lt("getAlbumList2",{type:e,size:t,offset:a})).albumList2)==null?void 0:i.album)||[]}async function ai(e=500){var a;return((a=(await lt("getRandomSongs",{size:e})).randomSongs)==null?void 0:a.song)||[]}async function si(e){return(await lt("search3",{query:e,artistCount:30,albumCount:50,songCount:100})).searchResult3||{artist:[],album:[],song:[]}}async function ua(){var t;return((t=(await lt("getPlaylists")).playlists)==null?void 0:t.playlist)||[]}async function ii(e){return(await lt("getPlaylist",{id:e})).playlist}const is=(e,t=[])=>{const a=new URLSearchParams({v:Ae,c:De,f:"json",name:e});return t.forEach(s=>a.append("songId",s)),fetch(`/rest/createPlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(s=>s.json()).then(s=>s["subsonic-response"])},ni=(e,t)=>{const a=new URLSearchParams({v:Ae,c:De,f:"json",playlistId:e,songIdToAdd:t});return fetch(`/rest/updatePlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(s=>s.json())},ri=(e,t)=>{const a=new URLSearchParams({v:Ae,c:De,f:"json",playlistId:e,songIndexToRemove:String(t)});return fetch(`/rest/updatePlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(s=>s.json())},oi=e=>lt("deletePlaylist",{id:e});async function li(){return(await lt("getStarred2")).starred2||{artist:[],album:[],song:[]}}async function ci(){return M("/api/stats")}async function Oe(){return M("/api/me")}async function di(){return M("/api/session")}async function Ze(){return M("/api/auth/config")}function ui(e,t){return M("/api/auth/login",{method:"POST",body:JSON.stringify({username:e,password:t})})}function ns(){return M("/api/auth/logout",{method:"POST"})}function Da(e,t){return rs({displayName:e,theme:t})}function rs(e){return M("/api/me",{method:"PATCH",body:JSON.stringify(e)})}async function pi(){return M("/api/me/ratings")}function hi(e,t){return M("/api/me/ratings",{method:"PUT",body:JSON.stringify({trackId:e,rating:t})})}function Ne(){return M("/api/admin/lastfm")}function Pa(e,t,a=!1){return M("/api/admin/lastfm",{method:"PUT",body:JSON.stringify({apiKey:e,apiSecret:t,clear:a})})}function fi(e,t){return M("/api/me/password",{method:"POST",body:JSON.stringify({currentPassword:e,newPassword:t})})}function mi({lastfmUsername:e,lastfmSessionKey:t,listenbrainzToken:a}){return M("/api/me/scrobbling",{method:"PUT",body:JSON.stringify({lastfmUsername:e,lastfmSessionKey:t,listenbrainzToken:a})})}async function os(){return M("/api/me/stats")}async function vi(e,t="web"){return M("/api/plays/start",{method:"POST",body:JSON.stringify({trackId:e,source:t})})}function Ca(e,t,a=!1){return M("/api/plays/update",{method:"POST",body:JSON.stringify({playId:e,positionMs:t,completed:a})})}async function ls(e=40){return(await M(`/api/live/queue?count=${e}`)).tracks||[]}async function gi(){return(await M("/api/live/mixes")).mixes||[]}async function bi(e,t=!1){return M(`/api/lyrics/${encodeURIComponent(e)}${t?"?refresh=1":""}`)}async function cs(){return M("/api/rescan",{method:"POST"})}async function yi(){return(await M("/api/users")).users||[]}function wi({username:e,password:t,displayName:a,isAdmin:s}){return M("/api/users",{method:"POST",body:JSON.stringify({username:e,password:t,displayName:a,isAdmin:s})})}function $i(){return M("/api/me/history",{method:"DELETE"})}function Si(e){return M(`/api/users/${e}`,{method:"DELETE"})}function ki(){return M("/api/lastfm/connect")}function Ei(e=""){return M("/api/lastfm/complete",{method:"POST",body:JSON.stringify({token:e})})}async function Ti(){const e=await M("/api/admin/invites");return(e==null?void 0:e.invites)||[]}async function Mi({note:e,expiresInDays:t,maxUses:a,isAdmin:s}){const i=await M("/api/admin/invites",{method:"POST",body:JSON.stringify({note:e,expiresInDays:t,maxUses:a,isAdmin:s})});return i==null?void 0:i.invite}function Li(e){return M(`/api/admin/invites/${encodeURIComponent(e)}`,{method:"DELETE"})}function _i(e){return M(`/api/auth/invite/${encodeURIComponent(e)}`)}function xi({invite:e,username:t,password:a,displayName:s}){return M("/api/auth/register",{method:"POST",body:JSON.stringify({invite:e,username:t,password:a,displayName:s||void 0})})}const ds=e=>`${location.origin}/static/index.html#/register?invite=${encodeURIComponent(e)}`;function Pe(){return M("/api/me/ytm")}function Ai(e){return M("/api/me/ytm",{method:"PUT",body:JSON.stringify({cookies:e})})}function Di(){return M("/api/me/ytm",{method:"DELETE"})}async function us(e,t=40){const a=new URLSearchParams({q:e,limit:String(t)}),s=await M(`/api/ytm/search?${a.toString()}`);return(s==null?void 0:s.tracks)||[]}async function ps(e=200){const t=await M(`/api/ytm/liked?limit=${e}`);return(t==null?void 0:t.tracks)||[]}async function hs(e=40){const t=await M(`/api/ytm/history?limit=${e}`);return(t==null?void 0:t.tracks)||[]}function Pi(){return M("/api/me/player")}function Ci(e){return M("/api/me/player",{method:"PUT",body:JSON.stringify({state:e})})}/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function zi(e,t,a){return(t=Oi(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function pt(){return pt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)({}).hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},pt.apply(null,arguments)}function za(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),a.push.apply(a,s)}return a}function ot(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?za(Object(a),!0).forEach(function(s){zi(e,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):za(Object(a)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))})}return e}function qi(e,t){if(e==null)return{};var a,s,i=Ii(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}function Ii(e,t){if(e==null)return{};var a={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;a[s]=e[s]}return a}function Hi(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var s=a.call(e,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Oi(e){var t=Hi(e,"string");return typeof t=="symbol"?t:t+""}function ta(e){"@babel/helpers - typeof";return ta=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ta(e)}var Ni="1.15.7";function ut(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var ht=ut(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),ae=ut(/Edge/i),qa=ut(/firefox/i),Gt=ut(/safari/i)&&!ut(/chrome/i)&&!ut(/android/i),pa=ut(/iP(ad|od|hone)/i),fs=ut(/chrome/i)&&ut(/android/i),ms={capture:!1,passive:!1};function _(e,t,a){e.addEventListener(t,a,!ht&&ms)}function L(e,t,a){e.removeEventListener(t,a,!ht&&ms)}function ge(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function vs(e){return e.host&&e!==document&&e.host.nodeType&&e.host!==e?e.host:e.parentNode}function st(e,t,a,s){if(e){a=a||document;do{if(t!=null&&(t[0]===">"?e.parentNode===a&&ge(e,t):ge(e,t))||s&&e===a)return e;if(e===a)break}while(e=vs(e))}return null}var Ia=/\s+/g;function X(e,t,a){if(e&&t)if(e.classList)e.classList[a?"add":"remove"](t);else{var s=(" "+e.className+" ").replace(Ia," ").replace(" "+t+" "," ");e.className=(s+(a?" "+t:"")).replace(Ia," ")}}function S(e,t,a){var s=e&&e.style;if(s){if(a===void 0)return document.defaultView&&document.defaultView.getComputedStyle?a=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(a=e.currentStyle),t===void 0?a:a[t];!(t in s)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),s[t]=a+(typeof a=="string"?"":"px")}}function qt(e,t){var a="";if(typeof e=="string")a=e;else do{var s=S(e,"transform");s&&s!=="none"&&(a=s+" "+a)}while(!t&&(e=e.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(a)}function gs(e,t,a){if(e){var s=e.getElementsByTagName(t),i=0,n=s.length;if(a)for(;i<n;i++)a(s[i],i);return s}return[]}function rt(){var e=document.scrollingElement;return e||document.documentElement}function q(e,t,a,s,i){if(!(!e.getBoundingClientRect&&e!==window)){var n,c,l,r,p,m,g;if(e!==window&&e.parentNode&&e!==rt()?(n=e.getBoundingClientRect(),c=n.top,l=n.left,r=n.bottom,p=n.right,m=n.height,g=n.width):(c=0,l=0,r=window.innerHeight,p=window.innerWidth,m=window.innerHeight,g=window.innerWidth),(t||a)&&e!==window&&(i=i||e.parentNode,!ht))do if(i&&i.getBoundingClientRect&&(S(i,"transform")!=="none"||a&&S(i,"position")!=="static")){var f=i.getBoundingClientRect();c-=f.top+parseInt(S(i,"border-top-width")),l-=f.left+parseInt(S(i,"border-left-width")),r=c+n.height,p=l+n.width;break}while(i=i.parentNode);if(s&&e!==window){var w=qt(i||e),E=w&&w.a,x=w&&w.d;w&&(c/=x,l/=E,g/=E,m/=x,r=c+m,p=l+g)}return{top:c,left:l,bottom:r,right:p,width:g,height:m}}}function Ha(e,t,a){for(var s=bt(e,!0),i=q(e)[t];s;){var n=q(s)[a],c=void 0;if(c=i>=n,!c)return s;if(s===rt())break;s=bt(s,!1)}return!1}function It(e,t,a,s){for(var i=0,n=0,c=e.children;n<c.length;){if(c[n].style.display!=="none"&&c[n]!==k.ghost&&(s||c[n]!==k.dragged)&&st(c[n],a.draggable,e,!1)){if(i===t)return c[n];i++}n++}return null}function ha(e,t){for(var a=e.lastElementChild;a&&(a===k.ghost||S(a,"display")==="none"||t&&!ge(a,t));)a=a.previousElementSibling;return a||null}function J(e,t){var a=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==k.clone&&(!t||ge(e,t))&&a++;return a}function Oa(e){var t=0,a=0,s=rt();if(e)do{var i=qt(e),n=i.a,c=i.d;t+=e.scrollLeft*n,a+=e.scrollTop*c}while(e!==s&&(e=e.parentNode));return[t,a]}function Ri(e,t){for(var a in e)if(e.hasOwnProperty(a)){for(var s in t)if(t.hasOwnProperty(s)&&t[s]===e[a][s])return Number(a)}return-1}function bt(e,t){if(!e||!e.getBoundingClientRect)return rt();var a=e,s=!1;do if(a.clientWidth<a.scrollWidth||a.clientHeight<a.scrollHeight){var i=S(a);if(a.clientWidth<a.scrollWidth&&(i.overflowX=="auto"||i.overflowX=="scroll")||a.clientHeight<a.scrollHeight&&(i.overflowY=="auto"||i.overflowY=="scroll")){if(!a.getBoundingClientRect||a===document.body)return rt();if(s||t)return a;s=!0}}while(a=a.parentNode);return rt()}function Vi(e,t){if(e&&t)for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);return e}function Re(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var Jt;function bs(e,t){return function(){if(!Jt){var a=arguments,s=this;a.length===1?e.call(s,a[0]):e.apply(s,a),Jt=setTimeout(function(){Jt=void 0},t)}}}function ji(){clearTimeout(Jt),Jt=void 0}function ys(e,t,a){e.scrollLeft+=t,e.scrollTop+=a}function ws(e){var t=window.Polymer,a=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):a?a(e).clone(!0)[0]:e.cloneNode(!0)}function $s(e,t,a){var s={};return Array.from(e.children).forEach(function(i){var n,c,l,r;if(!(!st(i,t.draggable,e,!1)||i.animated||i===a)){var p=q(i);s.left=Math.min((n=s.left)!==null&&n!==void 0?n:1/0,p.left),s.top=Math.min((c=s.top)!==null&&c!==void 0?c:1/0,p.top),s.right=Math.max((l=s.right)!==null&&l!==void 0?l:-1/0,p.right),s.bottom=Math.max((r=s.bottom)!==null&&r!==void 0?r:-1/0,p.bottom)}}),s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}var F="Sortable"+new Date().getTime();function Yi(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var s=[].slice.call(this.el.children);s.forEach(function(i){if(!(S(i,"display")==="none"||i===k.ghost)){e.push({target:i,rect:q(i)});var n=ot({},e[e.length-1].rect);if(i.thisAnimationDuration){var c=qt(i,!0);c&&(n.top-=c.f,n.left-=c.e)}i.fromRect=n}})}},addAnimationState:function(s){e.push(s)},removeAnimationState:function(s){e.splice(Ri(e,{target:s}),1)},animateAll:function(s){var i=this;if(!this.options.animation){clearTimeout(t),typeof s=="function"&&s();return}var n=!1,c=0;e.forEach(function(l){var r=0,p=l.target,m=p.fromRect,g=q(p),f=p.prevFromRect,w=p.prevToRect,E=l.rect,x=qt(p,!0);x&&(g.top-=x.f,g.left-=x.e),p.toRect=g,p.thisAnimationDuration&&Re(f,g)&&!Re(m,g)&&(E.top-g.top)/(E.left-g.left)===(m.top-g.top)/(m.left-g.left)&&(r=Bi(E,f,w,i.options)),Re(g,m)||(p.prevFromRect=m,p.prevToRect=g,r||(r=i.options.animation),i.animate(p,E,g,r)),r&&(n=!0,c=Math.max(c,r),clearTimeout(p.animationResetTimer),p.animationResetTimer=setTimeout(function(){p.animationTime=0,p.prevFromRect=null,p.fromRect=null,p.prevToRect=null,p.thisAnimationDuration=null},r),p.thisAnimationDuration=r)}),clearTimeout(t),n?t=setTimeout(function(){typeof s=="function"&&s()},c):typeof s=="function"&&s(),e=[]},animate:function(s,i,n,c){if(c){S(s,"transition",""),S(s,"transform","");var l=qt(this.el),r=l&&l.a,p=l&&l.d,m=(i.left-n.left)/(r||1),g=(i.top-n.top)/(p||1);s.animatingX=!!m,s.animatingY=!!g,S(s,"transform","translate3d("+m+"px,"+g+"px,0)"),this.forRepaintDummy=Fi(s),S(s,"transition","transform "+c+"ms"+(this.options.easing?" "+this.options.easing:"")),S(s,"transform","translate3d(0,0,0)"),typeof s.animated=="number"&&clearTimeout(s.animated),s.animated=setTimeout(function(){S(s,"transition",""),S(s,"transform",""),s.animated=!1,s.animatingX=!1,s.animatingY=!1},c)}}}}function Fi(e){return e.offsetWidth}function Bi(e,t,a,s){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-a.top,2)+Math.pow(t.left-a.left,2))*s.animation}var xt=[],Ve={initializeByDefault:!0},se={mount:function(t){for(var a in Ve)Ve.hasOwnProperty(a)&&!(a in t)&&(t[a]=Ve[a]);xt.forEach(function(s){if(s.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),xt.push(t)},pluginEvent:function(t,a,s){var i=this;this.eventCanceled=!1,s.cancel=function(){i.eventCanceled=!0};var n=t+"Global";xt.forEach(function(c){a[c.pluginName]&&(a[c.pluginName][n]&&a[c.pluginName][n](ot({sortable:a},s)),a.options[c.pluginName]&&a[c.pluginName][t]&&a[c.pluginName][t](ot({sortable:a},s)))})},initializePlugins:function(t,a,s,i){xt.forEach(function(l){var r=l.pluginName;if(!(!t.options[r]&&!l.initializeByDefault)){var p=new l(t,a,t.options);p.sortable=t,p.options=t.options,t[r]=p,pt(s,p.defaults)}});for(var n in t.options)if(t.options.hasOwnProperty(n)){var c=this.modifyOption(t,n,t.options[n]);typeof c<"u"&&(t.options[n]=c)}},getEventProperties:function(t,a){var s={};return xt.forEach(function(i){typeof i.eventProperties=="function"&&pt(s,i.eventProperties.call(a[i.pluginName],t))}),s},modifyOption:function(t,a,s){var i;return xt.forEach(function(n){t[n.pluginName]&&n.optionListeners&&typeof n.optionListeners[a]=="function"&&(i=n.optionListeners[a].call(t[n.pluginName],s))}),i}};function Ui(e){var t=e.sortable,a=e.rootEl,s=e.name,i=e.targetEl,n=e.cloneEl,c=e.toEl,l=e.fromEl,r=e.oldIndex,p=e.newIndex,m=e.oldDraggableIndex,g=e.newDraggableIndex,f=e.originalEvent,w=e.putSortable,E=e.extraEventProperties;if(t=t||a&&a[F],!!t){var x,H=t.options,Z="on"+s.charAt(0).toUpperCase()+s.substr(1);window.CustomEvent&&!ht&&!ae?x=new CustomEvent(s,{bubbles:!0,cancelable:!0}):(x=document.createEvent("Event"),x.initEvent(s,!0,!0)),x.to=c||a,x.from=l||a,x.item=i||a,x.clone=n,x.oldIndex=r,x.newIndex=p,x.oldDraggableIndex=m,x.newDraggableIndex=g,x.originalEvent=f,x.pullMode=w?w.lastPutMode:void 0;var R=ot(ot({},E),se.getEventProperties(s,t));for(var tt in R)x[tt]=R[tt];a&&a.dispatchEvent(x),H[Z]&&H[Z].call(t,x)}}var Xi=["evt"],Y=function(t,a){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=s.evt,n=qi(s,Xi);se.pluginEvent.bind(k)(t,a,ot({dragEl:v,parentEl:P,ghostEl:T,rootEl:A,nextEl:Mt,lastDownEl:he,cloneEl:D,cloneHidden:gt,dragStarted:Bt,putSortable:O,activeSortable:k.active,originalEvent:i,oldIndex:Ct,oldDraggableIndex:Kt,newIndex:W,newDraggableIndex:vt,hideGhostForTarget:Ts,unhideGhostForTarget:Ms,cloneNowHidden:function(){gt=!0},cloneNowShown:function(){gt=!1},dispatchSortableEvent:function(l){V({sortable:a,name:l,originalEvent:i})}},n))};function V(e){Ui(ot({putSortable:O,cloneEl:D,targetEl:v,rootEl:A,oldIndex:Ct,oldDraggableIndex:Kt,newIndex:W,newDraggableIndex:vt},e))}var v,P,T,A,Mt,he,D,gt,Ct,W,Kt,vt,ce,O,Pt=!1,be=!1,ye=[],Et,et,je,Ye,Na,Ra,Bt,At,Qt,Zt=!1,de=!1,fe,N,Fe=[],ea=!1,we=[],Ce=typeof document<"u",ue=pa,Va=ae||ht?"cssFloat":"float",Wi=Ce&&!fs&&!pa&&"draggable"in document.createElement("div"),Ss=(function(){if(Ce){if(ht)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}})(),ks=function(t,a){var s=S(t),i=parseInt(s.width)-parseInt(s.paddingLeft)-parseInt(s.paddingRight)-parseInt(s.borderLeftWidth)-parseInt(s.borderRightWidth),n=It(t,0,a),c=It(t,1,a),l=n&&S(n),r=c&&S(c),p=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+q(n).width,m=r&&parseInt(r.marginLeft)+parseInt(r.marginRight)+q(c).width;if(s.display==="flex")return s.flexDirection==="column"||s.flexDirection==="column-reverse"?"vertical":"horizontal";if(s.display==="grid")return s.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(n&&l.float&&l.float!=="none"){var g=l.float==="left"?"left":"right";return c&&(r.clear==="both"||r.clear===g)?"vertical":"horizontal"}return n&&(l.display==="block"||l.display==="flex"||l.display==="table"||l.display==="grid"||p>=i&&s[Va]==="none"||c&&s[Va]==="none"&&p+m>i)?"vertical":"horizontal"},Gi=function(t,a,s){var i=s?t.left:t.top,n=s?t.right:t.bottom,c=s?t.width:t.height,l=s?a.left:a.top,r=s?a.right:a.bottom,p=s?a.width:a.height;return i===l||n===r||i+c/2===l+p/2},Ji=function(t,a){var s;return ye.some(function(i){var n=i[F].options.emptyInsertThreshold;if(!(!n||ha(i))){var c=q(i),l=t>=c.left-n&&t<=c.right+n,r=a>=c.top-n&&a<=c.bottom+n;if(l&&r)return s=i}}),s},Es=function(t){function a(n,c){return function(l,r,p,m){var g=l.options.group.name&&r.options.group.name&&l.options.group.name===r.options.group.name;if(n==null&&(c||g))return!0;if(n==null||n===!1)return!1;if(c&&n==="clone")return n;if(typeof n=="function")return a(n(l,r,p,m),c)(l,r,p,m);var f=(c?l:r).options.group.name;return n===!0||typeof n=="string"&&n===f||n.join&&n.indexOf(f)>-1}}var s={},i=t.group;(!i||ta(i)!="object")&&(i={name:i}),s.name=i.name,s.checkPull=a(i.pull,!0),s.checkPut=a(i.put),s.revertClone=i.revertClone,t.group=s},Ts=function(){!Ss&&T&&S(T,"display","none")},Ms=function(){!Ss&&T&&S(T,"display","")};Ce&&!fs&&document.addEventListener("click",function(e){if(be)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),be=!1,!1},!0);var Tt=function(t){if(v){t=t.touches?t.touches[0]:t;var a=Ji(t.clientX,t.clientY);if(a){var s={};for(var i in t)t.hasOwnProperty(i)&&(s[i]=t[i]);s.target=s.rootEl=a,s.preventDefault=void 0,s.stopPropagation=void 0,a[F]._onDragOver(s)}}},Ki=function(t){v&&v.parentNode[F]._isOutsideThisEl(t.target)};function k(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=pt({},t),e[F]=this;var a={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return ks(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(c,l){c.setData("Text",l.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:k.supportPointer!==!1&&"PointerEvent"in window&&(!Gt||pa),emptyInsertThreshold:5};se.initializePlugins(this,e,a);for(var s in a)!(s in t)&&(t[s]=a[s]);Es(t);for(var i in this)i.charAt(0)==="_"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this));this.nativeDraggable=t.forceFallback?!1:Wi,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?_(e,"pointerdown",this._onTapStart):(_(e,"mousedown",this._onTapStart),_(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(_(e,"dragover",this),_(e,"dragenter",this)),ye.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),pt(this,Yi())}k.prototype={constructor:k,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(At=null)},_getDirection:function(t,a){return typeof this.options.direction=="function"?this.options.direction.call(this,t,a,v):this.options.direction},_onTapStart:function(t){if(t.cancelable){var a=this,s=this.el,i=this.options,n=i.preventOnFilter,c=t.type,l=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,r=(l||t).target,p=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||r,m=i.filter;if(rn(s),!v&&!(/mousedown|pointerdown/.test(c)&&t.button!==0||i.disabled)&&!p.isContentEditable&&!(!this.nativeDraggable&&Gt&&r&&r.tagName.toUpperCase()==="SELECT")&&(r=st(r,i.draggable,s,!1),!(r&&r.animated)&&he!==r)){if(Ct=J(r),Kt=J(r,i.draggable),typeof m=="function"){if(m.call(this,t,r,this)){V({sortable:a,rootEl:p,name:"filter",targetEl:r,toEl:s,fromEl:s}),Y("filter",a,{evt:t}),n&&t.preventDefault();return}}else if(m&&(m=m.split(",").some(function(g){if(g=st(p,g.trim(),s,!1),g)return V({sortable:a,rootEl:g,name:"filter",targetEl:r,fromEl:s,toEl:s}),Y("filter",a,{evt:t}),!0}),m)){n&&t.preventDefault();return}i.handle&&!st(p,i.handle,s,!1)||this._prepareDragStart(t,l,r)}}},_prepareDragStart:function(t,a,s){var i=this,n=i.el,c=i.options,l=n.ownerDocument,r;if(s&&!v&&s.parentNode===n){var p=q(s);if(A=n,v=s,P=v.parentNode,Mt=v.nextSibling,he=s,ce=c.group,k.dragged=v,Et={target:v,clientX:(a||t).clientX,clientY:(a||t).clientY},Na=Et.clientX-p.left,Ra=Et.clientY-p.top,this._lastX=(a||t).clientX,this._lastY=(a||t).clientY,v.style["will-change"]="all",r=function(){if(Y("delayEnded",i,{evt:t}),k.eventCanceled){i._onDrop();return}i._disableDelayedDragEvents(),!qa&&i.nativeDraggable&&(v.draggable=!0),i._triggerDragStart(t,a),V({sortable:i,name:"choose",originalEvent:t}),X(v,c.chosenClass,!0)},c.ignore.split(",").forEach(function(m){gs(v,m.trim(),Be)}),_(l,"dragover",Tt),_(l,"mousemove",Tt),_(l,"touchmove",Tt),c.supportPointer?(_(l,"pointerup",i._onDrop),!this.nativeDraggable&&_(l,"pointercancel",i._onDrop)):(_(l,"mouseup",i._onDrop),_(l,"touchend",i._onDrop),_(l,"touchcancel",i._onDrop)),qa&&this.nativeDraggable&&(this.options.touchStartThreshold=4,v.draggable=!0),Y("delayStart",this,{evt:t}),c.delay&&(!c.delayOnTouchOnly||a)&&(!this.nativeDraggable||!(ae||ht))){if(k.eventCanceled){this._onDrop();return}c.supportPointer?(_(l,"pointerup",i._disableDelayedDrag),_(l,"pointercancel",i._disableDelayedDrag)):(_(l,"mouseup",i._disableDelayedDrag),_(l,"touchend",i._disableDelayedDrag),_(l,"touchcancel",i._disableDelayedDrag)),_(l,"mousemove",i._delayedDragTouchMoveHandler),_(l,"touchmove",i._delayedDragTouchMoveHandler),c.supportPointer&&_(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(r,c.delay)}else r()}},_delayedDragTouchMoveHandler:function(t){var a=t.touches?t.touches[0]:t;Math.max(Math.abs(a.clientX-this._lastX),Math.abs(a.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){v&&Be(v),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;L(t,"mouseup",this._disableDelayedDrag),L(t,"touchend",this._disableDelayedDrag),L(t,"touchcancel",this._disableDelayedDrag),L(t,"pointerup",this._disableDelayedDrag),L(t,"pointercancel",this._disableDelayedDrag),L(t,"mousemove",this._delayedDragTouchMoveHandler),L(t,"touchmove",this._delayedDragTouchMoveHandler),L(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,a){a=a||t.pointerType=="touch"&&t,!this.nativeDraggable||a?this.options.supportPointer?_(document,"pointermove",this._onTouchMove):a?_(document,"touchmove",this._onTouchMove):_(document,"mousemove",this._onTouchMove):(_(v,"dragend",this),_(A,"dragstart",this._onDragStart));try{document.selection?me(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,a){if(Pt=!1,A&&v){Y("dragStarted",this,{evt:a}),this.nativeDraggable&&_(document,"dragover",Ki);var s=this.options;!t&&X(v,s.dragClass,!1),X(v,s.ghostClass,!0),k.active=this,t&&this._appendGhost(),V({sortable:this,name:"start",originalEvent:a})}else this._nulling()},_emulateDragOver:function(){if(et){this._lastX=et.clientX,this._lastY=et.clientY,Ts();for(var t=document.elementFromPoint(et.clientX,et.clientY),a=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(et.clientX,et.clientY),t!==a);)a=t;if(v.parentNode[F]._isOutsideThisEl(t),a)do{if(a[F]){var s=void 0;if(s=a[F]._onDragOver({clientX:et.clientX,clientY:et.clientY,target:t,rootEl:a}),s&&!this.options.dragoverBubble)break}t=a}while(a=vs(a));Ms()}},_onTouchMove:function(t){if(Et){var a=this.options,s=a.fallbackTolerance,i=a.fallbackOffset,n=t.touches?t.touches[0]:t,c=T&&qt(T,!0),l=T&&c&&c.a,r=T&&c&&c.d,p=ue&&N&&Oa(N),m=(n.clientX-Et.clientX+i.x)/(l||1)+(p?p[0]-Fe[0]:0)/(l||1),g=(n.clientY-Et.clientY+i.y)/(r||1)+(p?p[1]-Fe[1]:0)/(r||1);if(!k.active&&!Pt){if(s&&Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))<s)return;this._onDragStart(t,!0)}if(T){c?(c.e+=m-(je||0),c.f+=g-(Ye||0)):c={a:1,b:0,c:0,d:1,e:m,f:g};var f="matrix(".concat(c.a,",").concat(c.b,",").concat(c.c,",").concat(c.d,",").concat(c.e,",").concat(c.f,")");S(T,"webkitTransform",f),S(T,"mozTransform",f),S(T,"msTransform",f),S(T,"transform",f),je=m,Ye=g,et=n}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!T){var t=this.options.fallbackOnBody?document.body:A,a=q(v,!0,ue,!0,t),s=this.options;if(ue){for(N=t;S(N,"position")==="static"&&S(N,"transform")==="none"&&N!==document;)N=N.parentNode;N!==document.body&&N!==document.documentElement?(N===document&&(N=rt()),a.top+=N.scrollTop,a.left+=N.scrollLeft):N=rt(),Fe=Oa(N)}T=v.cloneNode(!0),X(T,s.ghostClass,!1),X(T,s.fallbackClass,!0),X(T,s.dragClass,!0),S(T,"transition",""),S(T,"transform",""),S(T,"box-sizing","border-box"),S(T,"margin",0),S(T,"top",a.top),S(T,"left",a.left),S(T,"width",a.width),S(T,"height",a.height),S(T,"opacity","0.8"),S(T,"position",ue?"absolute":"fixed"),S(T,"zIndex","100000"),S(T,"pointerEvents","none"),k.ghost=T,t.appendChild(T),S(T,"transform-origin",Na/parseInt(T.style.width)*100+"% "+Ra/parseInt(T.style.height)*100+"%")}},_onDragStart:function(t,a){var s=this,i=t.dataTransfer,n=s.options;if(Y("dragStart",this,{evt:t}),k.eventCanceled){this._onDrop();return}Y("setupClone",this),k.eventCanceled||(D=ws(v),D.removeAttribute("id"),D.draggable=!1,D.style["will-change"]="",this._hideClone(),X(D,this.options.chosenClass,!1),k.clone=D),s.cloneId=me(function(){Y("clone",s),!k.eventCanceled&&(s.options.removeCloneOnHide||A.insertBefore(D,v),s._hideClone(),V({sortable:s,name:"clone"}))}),!a&&X(v,n.dragClass,!0),a?(be=!0,s._loopId=setInterval(s._emulateDragOver,50)):(L(document,"mouseup",s._onDrop),L(document,"touchend",s._onDrop),L(document,"touchcancel",s._onDrop),i&&(i.effectAllowed="move",n.setData&&n.setData.call(s,i,v)),_(document,"drop",s),S(v,"transform","translateZ(0)")),Pt=!0,s._dragStartId=me(s._dragStarted.bind(s,a,t)),_(document,"selectstart",s),Bt=!0,window.getSelection().removeAllRanges(),Gt&&S(document.body,"user-select","none")},_onDragOver:function(t){var a=this.el,s=t.target,i,n,c,l=this.options,r=l.group,p=k.active,m=ce===r,g=l.sort,f=O||p,w,E=this,x=!1;if(ea)return;function H(Yt,Zs){Y(Yt,E,ot({evt:t,isOwner:m,axis:w?"vertical":"horizontal",revert:c,dragRect:i,targetRect:n,canSort:g,fromSortable:f,target:s,completed:R,onMove:function(xa,ti){return pe(A,a,v,i,xa,q(xa),t,ti)},changed:tt},Zs))}function Z(){H("dragOverAnimationCapture"),E.captureAnimationState(),E!==f&&f.captureAnimationState()}function R(Yt){return H("dragOverCompleted",{insertion:Yt}),Yt&&(m?p._hideClone():p._showClone(E),E!==f&&(X(v,O?O.options.ghostClass:p.options.ghostClass,!1),X(v,l.ghostClass,!0)),O!==E&&E!==k.active?O=E:E===k.active&&O&&(O=null),f===E&&(E._ignoreWhileAnimating=s),E.animateAll(function(){H("dragOverAnimationComplete"),E._ignoreWhileAnimating=null}),E!==f&&(f.animateAll(),f._ignoreWhileAnimating=null)),(s===v&&!v.animated||s===a&&!s.animated)&&(At=null),!l.dragoverBubble&&!t.rootEl&&s!==document&&(v.parentNode[F]._isOutsideThisEl(t.target),!Yt&&Tt(t)),!l.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),x=!0}function tt(){W=J(v),vt=J(v,l.draggable),V({sortable:E,name:"change",toEl:a,newIndex:W,newDraggableIndex:vt,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),s=st(s,l.draggable,a,!0),H("dragOver"),k.eventCanceled)return x;if(v.contains(t.target)||s.animated&&s.animatingX&&s.animatingY||E._ignoreWhileAnimating===s)return R(!1);if(be=!1,p&&!l.disabled&&(m?g||(c=P!==A):O===this||(this.lastPutMode=ce.checkPull(this,p,v,t))&&r.checkPut(this,p,v,t))){if(w=this._getDirection(t,s)==="vertical",i=q(v),H("dragOverValid"),k.eventCanceled)return x;if(c)return P=A,Z(),this._hideClone(),H("revert"),k.eventCanceled||(Mt?A.insertBefore(v,Mt):A.appendChild(v)),R(!0);var B=ha(a,l.draggable);if(!B||en(t,w,this)&&!B.animated){if(B===v)return R(!1);if(B&&a===t.target&&(s=B),s&&(n=q(s)),pe(A,a,v,i,s,n,t,!!s)!==!1)return Z(),B&&B.nextSibling?a.insertBefore(v,B.nextSibling):a.appendChild(v),P=a,tt(),R(!0)}else if(B&&tn(t,w,this)){var $t=It(a,0,l,!0);if($t===v)return R(!1);if(s=$t,n=q(s),pe(A,a,v,i,s,n,t,!1)!==!1)return Z(),a.insertBefore(v,$t),P=a,tt(),R(!0)}else if(s.parentNode===a){n=q(s);var nt=0,St,Nt=v.parentNode!==a,U=!Gi(v.animated&&v.toRect||i,s.animated&&s.toRect||n,w),Rt=w?"top":"left",ft=Ha(s,"top","top")||Ha(v,"top","top"),Vt=ft?ft.scrollTop:void 0;At!==s&&(St=n[Rt],Zt=!1,de=!U&&l.invertSwap||Nt),nt=an(t,s,n,w,U?1:l.swapThreshold,l.invertedSwapThreshold==null?l.swapThreshold:l.invertedSwapThreshold,de,At===s);var dt;if(nt!==0){var kt=J(v);do kt-=nt,dt=P.children[kt];while(dt&&(S(dt,"display")==="none"||dt===T))}if(nt===0||dt===s)return R(!1);At=s,Qt=nt;var jt=s.nextElementSibling,mt=!1;mt=nt===1;var le=pe(A,a,v,i,s,n,t,mt);if(le!==!1)return(le===1||le===-1)&&(mt=le===1),ea=!0,setTimeout(Zi,30),Z(),mt&&!jt?a.appendChild(v):s.parentNode.insertBefore(v,mt?jt:s),ft&&ys(ft,0,Vt-ft.scrollTop),P=v.parentNode,St!==void 0&&!de&&(fe=Math.abs(St-q(s)[Rt])),tt(),R(!0)}if(a.contains(v))return R(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){L(document,"mousemove",this._onTouchMove),L(document,"touchmove",this._onTouchMove),L(document,"pointermove",this._onTouchMove),L(document,"dragover",Tt),L(document,"mousemove",Tt),L(document,"touchmove",Tt)},_offUpEvents:function(){var t=this.el.ownerDocument;L(t,"mouseup",this._onDrop),L(t,"touchend",this._onDrop),L(t,"pointerup",this._onDrop),L(t,"pointercancel",this._onDrop),L(t,"touchcancel",this._onDrop),L(document,"selectstart",this)},_onDrop:function(t){var a=this.el,s=this.options;if(W=J(v),vt=J(v,s.draggable),Y("drop",this,{evt:t}),P=v&&v.parentNode,W=J(v),vt=J(v,s.draggable),k.eventCanceled){this._nulling();return}Pt=!1,de=!1,Zt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),aa(this.cloneId),aa(this._dragStartId),this.nativeDraggable&&(L(document,"drop",this),L(a,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Gt&&S(document.body,"user-select",""),S(v,"transform",""),t&&(Bt&&(t.cancelable&&t.preventDefault(),!s.dropBubble&&t.stopPropagation()),T&&T.parentNode&&T.parentNode.removeChild(T),(A===P||O&&O.lastPutMode!=="clone")&&D&&D.parentNode&&D.parentNode.removeChild(D),v&&(this.nativeDraggable&&L(v,"dragend",this),Be(v),v.style["will-change"]="",Bt&&!Pt&&X(v,O?O.options.ghostClass:this.options.ghostClass,!1),X(v,this.options.chosenClass,!1),V({sortable:this,name:"unchoose",toEl:P,newIndex:null,newDraggableIndex:null,originalEvent:t}),A!==P?(W>=0&&(V({rootEl:P,name:"add",toEl:P,fromEl:A,originalEvent:t}),V({sortable:this,name:"remove",toEl:P,originalEvent:t}),V({rootEl:P,name:"sort",toEl:P,fromEl:A,originalEvent:t}),V({sortable:this,name:"sort",toEl:P,originalEvent:t})),O&&O.save()):W!==Ct&&W>=0&&(V({sortable:this,name:"update",toEl:P,originalEvent:t}),V({sortable:this,name:"sort",toEl:P,originalEvent:t})),k.active&&((W==null||W===-1)&&(W=Ct,vt=Kt),V({sortable:this,name:"end",toEl:P,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){Y("nulling",this),A=v=P=T=Mt=D=he=gt=Et=et=Bt=W=vt=Ct=Kt=At=Qt=O=ce=k.dragged=k.ghost=k.clone=k.active=null;var t=this.el;we.forEach(function(a){t.contains(a)&&(a.checked=!0)}),we.length=je=Ye=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":v&&(this._onDragOver(t),Qi(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],a,s=this.el.children,i=0,n=s.length,c=this.options;i<n;i++)a=s[i],st(a,c.draggable,this.el,!1)&&t.push(a.getAttribute(c.dataIdAttr)||nn(a));return t},sort:function(t,a){var s={},i=this.el;this.toArray().forEach(function(n,c){var l=i.children[c];st(l,this.options.draggable,i,!1)&&(s[n]=l)},this),a&&this.captureAnimationState(),t.forEach(function(n){s[n]&&(i.removeChild(s[n]),i.appendChild(s[n]))}),a&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,a){return st(t,a||this.options.draggable,this.el,!1)},option:function(t,a){var s=this.options;if(a===void 0)return s[t];var i=se.modifyOption(this,t,a);typeof i<"u"?s[t]=i:s[t]=a,t==="group"&&Es(s)},destroy:function(){Y("destroy",this);var t=this.el;t[F]=null,L(t,"mousedown",this._onTapStart),L(t,"touchstart",this._onTapStart),L(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(L(t,"dragover",this),L(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(a){a.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),ye.splice(ye.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!gt){if(Y("hideClone",this),k.eventCanceled)return;S(D,"display","none"),this.options.removeCloneOnHide&&D.parentNode&&D.parentNode.removeChild(D),gt=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(gt){if(Y("showClone",this),k.eventCanceled)return;v.parentNode==A&&!this.options.group.revertClone?A.insertBefore(D,v):Mt?A.insertBefore(D,Mt):A.appendChild(D),this.options.group.revertClone&&this.animate(v,D),S(D,"display",""),gt=!1}}};function Qi(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function pe(e,t,a,s,i,n,c,l){var r,p=e[F],m=p.options.onMove,g;return window.CustomEvent&&!ht&&!ae?r=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(r=document.createEvent("Event"),r.initEvent("move",!0,!0)),r.to=t,r.from=e,r.dragged=a,r.draggedRect=s,r.related=i||t,r.relatedRect=n||q(t),r.willInsertAfter=l,r.originalEvent=c,e.dispatchEvent(r),m&&(g=m.call(p,r,c)),g}function Be(e){e.draggable=!1}function Zi(){ea=!1}function tn(e,t,a){var s=q(It(a.el,0,a.options,!0)),i=$s(a.el,a.options,T),n=10;return t?e.clientX<i.left-n||e.clientY<s.top&&e.clientX<s.right:e.clientY<i.top-n||e.clientY<s.bottom&&e.clientX<s.left}function en(e,t,a){var s=q(ha(a.el,a.options.draggable)),i=$s(a.el,a.options,T),n=10;return t?e.clientX>i.right+n||e.clientY>s.bottom&&e.clientX>s.left:e.clientY>i.bottom+n||e.clientX>s.right&&e.clientY>s.top}function an(e,t,a,s,i,n,c,l){var r=s?e.clientY:e.clientX,p=s?a.height:a.width,m=s?a.top:a.left,g=s?a.bottom:a.right,f=!1;if(!c){if(l&&fe<p*i){if(!Zt&&(Qt===1?r>m+p*n/2:r<g-p*n/2)&&(Zt=!0),Zt)f=!0;else if(Qt===1?r<m+fe:r>g-fe)return-Qt}else if(r>m+p*(1-i)/2&&r<g-p*(1-i)/2)return sn(t)}return f=f||c,f&&(r<m+p*n/2||r>g-p*n/2)?r>m+p/2?1:-1:0}function sn(e){return J(v)<J(e)?1:-1}function nn(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,a=t.length,s=0;a--;)s+=t.charCodeAt(a);return s.toString(36)}function rn(e){we.length=0;for(var t=e.getElementsByTagName("input"),a=t.length;a--;){var s=t[a];s.checked&&we.push(s)}}function me(e){return setTimeout(e,0)}function aa(e){return clearTimeout(e)}Ce&&_(document,"touchmove",function(e){(k.active||Pt)&&e.cancelable&&e.preventDefault()});k.utils={on:_,off:L,css:S,find:gs,is:function(t,a){return!!st(t,a,t,!1)},extend:Vi,throttle:bs,closest:st,toggleClass:X,clone:ws,index:J,nextTick:me,cancelNextTick:aa,detectDirection:ks,getChild:It,expando:F};k.get=function(e){return e[F]};k.mount=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];t[0].constructor===Array&&(t=t[0]),t.forEach(function(s){if(!s.prototype||!s.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));s.utils&&(k.utils=ot(ot({},k.utils),s.utils)),se.mount(s)})};k.create=function(e,t){return new k(e,t)};k.version=Ni;var z=[],Ut,sa,ia=!1,Ue,Xe,$e,Xt;function on(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(a){var s=a.originalEvent;this.sortable.nativeDraggable?_(document,"dragover",this._handleAutoScroll):this.options.supportPointer?_(document,"pointermove",this._handleFallbackAutoScroll):s.touches?_(document,"touchmove",this._handleFallbackAutoScroll):_(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(a){var s=a.originalEvent;!this.options.dragOverBubble&&!s.rootEl&&this._handleAutoScroll(s)},drop:function(){this.sortable.nativeDraggable?L(document,"dragover",this._handleAutoScroll):(L(document,"pointermove",this._handleFallbackAutoScroll),L(document,"touchmove",this._handleFallbackAutoScroll),L(document,"mousemove",this._handleFallbackAutoScroll)),ja(),ve(),ji()},nulling:function(){$e=sa=Ut=ia=Xt=Ue=Xe=null,z.length=0},_handleFallbackAutoScroll:function(a){this._handleAutoScroll(a,!0)},_handleAutoScroll:function(a,s){var i=this,n=(a.touches?a.touches[0]:a).clientX,c=(a.touches?a.touches[0]:a).clientY,l=document.elementFromPoint(n,c);if($e=a,s||this.options.forceAutoScrollFallback||ae||ht||Gt){We(a,this.options,l,s);var r=bt(l,!0);ia&&(!Xt||n!==Ue||c!==Xe)&&(Xt&&ja(),Xt=setInterval(function(){var p=bt(document.elementFromPoint(n,c),!0);p!==r&&(r=p,ve()),We(a,i.options,p,s)},10),Ue=n,Xe=c)}else{if(!this.options.bubbleScroll||bt(l,!0)===rt()){ve();return}We(a,this.options,bt(l,!1),!1)}}},pt(e,{pluginName:"scroll",initializeByDefault:!0})}function ve(){z.forEach(function(e){clearInterval(e.pid)}),z=[]}function ja(){clearInterval(Xt)}var We=bs(function(e,t,a,s){if(t.scroll){var i=(e.touches?e.touches[0]:e).clientX,n=(e.touches?e.touches[0]:e).clientY,c=t.scrollSensitivity,l=t.scrollSpeed,r=rt(),p=!1,m;sa!==a&&(sa=a,ve(),Ut=t.scroll,m=t.scrollFn,Ut===!0&&(Ut=bt(a,!0)));var g=0,f=Ut;do{var w=f,E=q(w),x=E.top,H=E.bottom,Z=E.left,R=E.right,tt=E.width,B=E.height,$t=void 0,nt=void 0,St=w.scrollWidth,Nt=w.scrollHeight,U=S(w),Rt=w.scrollLeft,ft=w.scrollTop;w===r?($t=tt<St&&(U.overflowX==="auto"||U.overflowX==="scroll"||U.overflowX==="visible"),nt=B<Nt&&(U.overflowY==="auto"||U.overflowY==="scroll"||U.overflowY==="visible")):($t=tt<St&&(U.overflowX==="auto"||U.overflowX==="scroll"),nt=B<Nt&&(U.overflowY==="auto"||U.overflowY==="scroll"));var Vt=$t&&(Math.abs(R-i)<=c&&Rt+tt<St)-(Math.abs(Z-i)<=c&&!!Rt),dt=nt&&(Math.abs(H-n)<=c&&ft+B<Nt)-(Math.abs(x-n)<=c&&!!ft);if(!z[g])for(var kt=0;kt<=g;kt++)z[kt]||(z[kt]={});(z[g].vx!=Vt||z[g].vy!=dt||z[g].el!==w)&&(z[g].el=w,z[g].vx=Vt,z[g].vy=dt,clearInterval(z[g].pid),(Vt!=0||dt!=0)&&(p=!0,z[g].pid=setInterval((function(){s&&this.layer===0&&k.active._onTouchMove($e);var jt=z[this.layer].vy?z[this.layer].vy*l:0,mt=z[this.layer].vx?z[this.layer].vx*l:0;typeof m=="function"&&m.call(k.dragged.parentNode[F],mt,jt,e,$e,z[this.layer].el)!=="continue"||ys(z[this.layer].el,mt,jt)}).bind({layer:g}),24))),g++}while(t.bubbleScroll&&f!==r&&(f=bt(f,!1)));ia=p}},30),Ls=function(t){var a=t.originalEvent,s=t.putSortable,i=t.dragEl,n=t.activeSortable,c=t.dispatchSortableEvent,l=t.hideGhostForTarget,r=t.unhideGhostForTarget;if(a){var p=s||n;l();var m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,g=document.elementFromPoint(m.clientX,m.clientY);r(),p&&!p.el.contains(g)&&(c("spill"),this.onSpill({dragEl:i,putSortable:s}))}};function fa(){}fa.prototype={startIndex:null,dragStart:function(t){var a=t.oldDraggableIndex;this.startIndex=a},onSpill:function(t){var a=t.dragEl,s=t.putSortable;this.sortable.captureAnimationState(),s&&s.captureAnimationState();var i=It(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(a,i):this.sortable.el.appendChild(a),this.sortable.animateAll(),s&&s.animateAll()},drop:Ls};pt(fa,{pluginName:"revertOnSpill"});function ma(){}ma.prototype={onSpill:function(t){var a=t.dragEl,s=t.putSortable,i=s||this.sortable;i.captureAnimationState(),a.parentNode&&a.parentNode.removeChild(a),i.animateAll()},drop:Ls};pt(ma,{pluginName:"removeOnSpill"});k.mount(new on);k.mount(ma,fa);const _s=[32,64,125,250,500,1e3,2e3,4e3,8e3,16e3],na={flat:{name:"Ровно",gains:[0,0,0,0,0,0,0,0,0,0]},rock:{name:"Рок",gains:[5,4,2,-1,-2,0,2,3,4,5]},pop:{name:"Поп",gains:[-1,0,2,4,4,2,0,-1,-2,-3]},jazz:{name:"Джаз",gains:[4,3,1,2,-1,-1,0,2,3,4]},bass:{name:"Бас",gains:[8,7,5,2,0,-1,-2,-3,-4,-5]},vocal:{name:"Вокал",gains:[-3,-2,0,3,5,5,3,1,0,-1]},electronic:{name:"Электроника",gains:[5,4,1,0,-2,2,1,2,5,6]}},Ya="rustream.volume",Fa="rustream.eq",Ba="rustream.mode",Ge="rustream.playback.queue",Ua="rustream.playback.position",Xa=1e4;function Wa(e,t){try{return JSON.parse(localStorage.getItem(e))??t}catch{return t}}class ln extends EventTarget{constructor(){super(),this.audio=new Audio,this.audio.preload="auto",this.audio.crossOrigin="anonymous",this.queue=[],this.index=-1,this.shuffle=!1,this.repeat="off",this.track=null,this.playId=null,this.scrobbled=!1,this.liveMode=!1,this.mode=Wa(Ba,{shuffle:!1,repeat:"off"}),this.shuffle=!!this.mode.shuffle,this.repeat=this.mode.repeat||"off",this.volume=Number(localStorage.getItem(Ya)??80),this.audio.volume=Math.min(1,Math.max(0,this.volume/100)),this.eqState=Wa(Fa,{enabled:!0,preset:"flat",gains:[...na.flat.gains]}),this.audioContext=null,this.filters=[],this.sourceNode=null,this._lastPositionWrite=0,this._restoredPause=!1,this.sleepMode=null,this.sleepEndsAt=null,this.sleepStopAfterTrack=!1,this.sleepTimer=null,this.sleepTick=null,this._bindAudio(),window.addEventListener("pagehide",()=>this._storePosition(!0))}_bindAudio(){this.audio.addEventListener("timeupdate",()=>{this._maybeScrobble(),this._storePosition(),this._emit("time")}),this.audio.addEventListener("durationchange",()=>this._emit("time")),this.audio.addEventListener("progress",()=>this._emit("buffer")),this.audio.addEventListener("loadedmetadata",()=>this._emit("time")),this.audio.addEventListener("play",()=>{!this.playId&&this.track&&this._restoredPause&&(this._restoredPause=!1,this._beginPlay(this.track)),this._storePosition(!0),this._emit("state")}),this.audio.addEventListener("pause",()=>{this._storePosition(!0),this._emit("state")}),this.audio.addEventListener("volumechange",()=>this._emit("volume")),this.audio.addEventListener("ended",()=>this._onEnded()),this.audio.addEventListener("waiting",()=>this._emit("state")),this.audio.addEventListener("playing",()=>this._emit("state")),this.audio.addEventListener("error",()=>{if(!this.track)return;const a=this.track.source==="ytm"||String(this.track.id).startsWith("ytm-")?`YouTube не отдал поток для «${this.track.title}». Проверьте, что трек доступен, и обновите cookies в профиле.`:`Не удалось воспроизвести «${this.track.title}». Файл повреждён или недоступен.`;this.dispatchEvent(new CustomEvent("error",{detail:a}))})}_emit(t){this.dispatchEvent(new CustomEvent(t))}_initAudioGraph(){if(this.audioContext)return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.audioContext=new t,this.sourceNode=this.audioContext.createMediaElementSource(this.audio),this.filters=_s.map(s=>{const i=this.audioContext.createBiquadFilter();return i.type="peaking",i.frequency.value=s,i.Q.value=1.1,i.gain.value=0,i});let a=this.sourceNode;for(const s of this.filters)a.connect(s),a=s;a.connect(this.audioContext.destination),this._applyEq()}_ensureRunning(){var t;this._initAudioGraph(),((t=this.audioContext)==null?void 0:t.state)==="suspended"&&this.audioContext.resume().catch(()=>{})}_applyEq(){this.filters.length&&this.filters.forEach((t,a)=>{t.gain.value=this.eqState.enabled&&this.eqState.gains[a]||0})}setEqEnabled(t){this.eqState.enabled=t,this._persistEq(),this._applyEq(),this._emit("eq")}setEqGain(t,a){this.eqState.gains[t]=Number(a),this.eqState.preset="custom",this._persistEq(),this._applyEq(),this._emit("eq")}applyEqPreset(t){const a=na[t];a&&(this.eqState.preset=t,this.eqState.gains=[...a.gains],this._persistEq(),this._applyEq(),this._emit("eq"))}resetEq(){this.applyEqPreset("flat")}_persistEq(){localStorage.setItem(Fa,JSON.stringify(this.eqState))}async playTracks(t,a=0,{shuffle:s=!1}={}){t!=null&&t.length&&(this._finalizePlay(!1),this.queue=[...t],s&&(this.shuffle=!0,this._persistMode()),this.index=Math.min(Math.max(0,a),this.queue.length-1),this._storeQueue(),await this._load(this.queue[this.index],!0))}async playAt(t){t<0||t>=this.queue.length||(this.index=t,this._storeQueue(),await this._load(this.queue[t],!0))}async _load(t,a){if(t&&(this._restoredPause=!1,this._finalizePlay(!1),this.track=t,this.audio.src=He(t.id),this._beginPlay(t),this._updateMediaSession(t),this.dispatchEvent(new CustomEvent("track",{detail:t})),a)){this._ensureRunning();try{await this.audio.play()}catch{}}}async toggle(){this.track&&(this._ensureRunning(),this.audio.paused?await this.audio.play().catch(()=>{}):this.audio.pause())}pause(){this.audio.pause()}async next(t=!1){if(!this.queue.length)return;if(t&&this.repeat==="one"){this.audio.currentTime=0,await this.audio.play().catch(()=>{});return}let a;if(this.shuffle?a=this.queue.length>1?this._randomIndex():this.index:a=this.index+1,a>=this.queue.length)if(this.repeat==="all")a=0;else{this.audio.pause();return}await this.playAt(a)}async previous(){if(!this.queue.length)return;if(this.audio.currentTime>3){this.audio.currentTime=0;return}const t=this.index>0?this.index-1:this.queue.length-1;await this.playAt(t)}moveInQueue(t,a){if(t===a||t<0||a<0||t>=this.queue.length||a>=this.queue.length)return;const[s]=this.queue.splice(t,1);this.queue.splice(a,0,s),this.index===t?this.index=a:t<this.index&&a>=this.index?this.index--:t>this.index&&a<=this.index&&this.index++,this._storeQueue(),this._emit("queue")}_randomIndex(){if(this.queue.length<=1)return this.index;let t=this.index;for(;t===this.index;)t=Math.floor(Math.random()*this.queue.length);return t}async _onEnded(){if(this._finalizePlay(!0),this.sleepStopAfterTrack){this.cancelSleepTimer(),this._emit("state");return}if(this.repeat==="one"){this.audio.currentTime=0,this._beginPlay(this.track),await this.audio.play().catch(()=>{});return}if(this.index>=this.queue.length-1&&this.repeat==="off"&&!this.shuffle){this._emit("state"),this._emit("queueend");return}await this.next(!0)}async _beginPlay(t){this.playId=null,this.scrobbled=!1;try{const a=await vi(t.id);this.playId=(a==null?void 0:a.playId)||null}catch{}}_maybeScrobble(){if(!this.playId||this.scrobbled)return;const t=this.audio.duration;!Number.isFinite(t)||t<30||(this.audio.currentTime>=t/2||this.audio.currentTime>=240)&&(this.scrobbled=!0,Ca(this.playId,Math.round(this.audio.currentTime*1e3),!0).catch(()=>{}))}_finalizePlay(t){if(!this.playId)return;const a=this.playId;this.playId=null,Ca(a,Math.round((this.audio.currentTime||0)*1e3),t).catch(()=>{})}appendTracks(t){t!=null&&t.length&&(this.queue.push(...t),this._storeQueue())}toggleShuffle(){this.shuffle=!this.shuffle,this._persistMode(),this._emit("mode")}cycleRepeat(){const t=["off","all","one"];this.repeat=t[(t.indexOf(this.repeat)+1)%t.length],this._persistMode(),this._emit("mode")}_persistMode(){localStorage.setItem(Ba,JSON.stringify({shuffle:this.shuffle,repeat:this.repeat}))}seekTo(t){const a=this.audio.duration;!Number.isFinite(a)||a<=0||(this.audio.currentTime=Math.min(100,Math.max(0,t))/100*a,this._emit("time"))}seekToSeconds(t){const a=this.audio.duration;!Number.isFinite(a)||a<=0||(this.audio.currentTime=Math.min(a,Math.max(0,t)),this._emit("time"))}removeAt(t){t<0||t>=this.queue.length||t===this.index||(this.queue.splice(t,1),t<this.index&&(this.index-=1),this._storeQueue())}seekBy(t){Number.isFinite(this.audio.duration)&&(this.audio.currentTime=Math.min(this.audio.duration,Math.max(0,this.audio.currentTime+t)),this._emit("time"))}setVolume(t){this.volume=Number(t),this.audio.volume=Math.min(1,Math.max(0,this.volume/100)),this.volume>0&&(this.audio.muted=!1),localStorage.setItem(Ya,String(this.volume))}toggleMute(){this.audio.muted=!this.audio.muted,this._emit("volume")}startSleepTimer(t){this.cancelSleepTimer(!0),this.sleepMode="timer",this.sleepEndsAt=Date.now()+Math.max(1,Math.round(t))*6e4;const a=Math.max(0,this.sleepEndsAt-Date.now()-Xa);this.sleepTimer=setTimeout(()=>this._sleepFadeOut(),a),this.sleepTick=setInterval(()=>this._emit("sleep"),15e3),this._emit("sleep")}stopAfterTrack(){this.cancelSleepTimer(!0),this.sleepMode="track",this.sleepStopAfterTrack=!0,this._emit("sleep")}cancelSleepTimer(t=!1){clearTimeout(this.sleepTimer),clearInterval(this.sleepTick),this.sleepTimer=null,this.sleepTick=null,this.sleepEndsAt=null,this.sleepMode=null,this.sleepStopAfterTrack=!1,t||this._emit("sleep")}get sleepRemainingMs(){return this.sleepMode!=="timer"||!this.sleepEndsAt?0:Math.max(0,this.sleepEndsAt-Date.now())}_sleepFadeOut(){clearTimeout(this.sleepTimer),clearInterval(this.sleepTick),this.sleepTimer=null,this.sleepTick=null;const t=20,a=this.audio.volume;let s=0;const i=setInterval(()=>{if(s+=1,s<t){this.audio.volume=Math.max(0,a*(1-s/t));return}clearInterval(i),this.audio.pause(),this.audio.volume=a,this.sleepMode=null,this.sleepEndsAt=null,this._emit("sleep")},Xa/t)}get currentTime(){return this.audio.currentTime||0}get duration(){return Number.isFinite(this.audio.duration)?this.audio.duration:0}get paused(){return this.audio.paused}get volumePercent(){return this.audio.muted?0:Math.round(this.audio.volume*100)}get buffered(){const t=this.duration;if(!t)return{end:0,percent:0,ahead:0};const a=this.audio.currentTime;let s=0;for(let i=0;i<this.audio.buffered.length;i+=1)this.audio.buffered.start(i)<=a+.5&&(s=Math.max(s,this.audio.buffered.end(i)));return{end:s,percent:Math.min(100,s/t*100),ahead:Math.max(0,s-a)}}estimatedBufferedBytes(){var a;const t=((a=this.track)==null?void 0:a.bitRate)||0;return t?t*1e3*this.buffered.ahead/8:0}_storeQueue(){try{const t={queue:this.queue,index:this.index,liveMode:!!this.liveMode,updatedAt:Date.now()};localStorage.setItem(Ge,JSON.stringify(t))}catch{}}setLiveMode(t){this.liveMode=!!t,this._storeQueue()}_storePosition(t=!1){if(!this.track)return;const a=Date.now();if(!(!t&&a-this._lastPositionWrite<2e3)){this._lastPositionWrite=a;try{localStorage.setItem(Ua,JSON.stringify({trackId:this.track.id,position:this.currentTime||0,paused:this.audio.paused,updatedAt:a}))}catch{}}}snapshotState(){return{queue:this.queue,index:this.index,liveMode:this.liveMode,position:Math.max(0,Math.floor(Number(this.audio.currentTime)||0)),updatedAt:Date.now()}}localUpdatedAt(){try{const t=JSON.parse(localStorage.getItem(Ge));return Number(t==null?void 0:t.updatedAt)||0}catch{return 0}}applyRemote(t){var s;if(!((s=t==null?void 0:t.queue)!=null&&s.length)||(this.queue=t.queue,this.index=Math.min(Math.max(0,Number(t.index)||0),this.queue.length-1),this.liveMode=!!t.liveMode,this.track=this.queue[this.index],!this.track))return null;this._restoredPause=!0,this.audio.src=He(this.track.id),this._updateMediaSession(this.track),this.dispatchEvent(new CustomEvent("track",{detail:this.track}));const a=Number(t.position)||0;if(a>1){const i=()=>{const n=this.audio.duration;(!Number.isFinite(n)||a<n-3)&&(this.audio.currentTime=a,this._emit("time"))};this.audio.readyState>=1?i():this.audio.addEventListener("loadedmetadata",i,{once:!0})}return this._storeQueue(),{track:this.track,liveMode:this.liveMode}}restore(){var s;let t=null;try{t=JSON.parse(localStorage.getItem(Ge))}catch{t=null}if(!((s=t==null?void 0:t.queue)!=null&&s.length)||Date.now()-(t.updatedAt||0)>1e3*60*60*24*7)return null;let a=null;try{a=JSON.parse(localStorage.getItem(Ua))}catch{a=null}if(this.queue=t.queue,this.index=Math.min(Math.max(0,Number(t.index)||0),this.queue.length-1),this.liveMode=!!t.liveMode,this.track=this.queue[this.index],!this.track)return null;if(this._restoredPause=!0,this.audio.src=He(this.track.id),this._updateMediaSession(this.track),this.dispatchEvent(new CustomEvent("track",{detail:this.track})),(a==null?void 0:a.trackId)===this.track.id&&Number(a.position)>1){const i=()=>{const n=this.audio.duration;Number.isFinite(n)&&a.position<n-3&&(this.audio.currentTime=a.position,this._emit("time"))};this.audio.readyState>=1?i():this.audio.addEventListener("loadedmetadata",i,{once:!0})}return{track:this.track,liveMode:this.liveMode}}clearRestored(){this._restoredPause=!1}_updateMediaSession(t){"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:t.title||"",artist:t.artist||"",album:t.album||"",artwork:t.coverArt?[{src:Lt(t.coverArt,512),sizes:"512x512",type:"image/jpeg"}]:[]}),navigator.mediaSession.setActionHandler("play",()=>this.toggle()),navigator.mediaSession.setActionHandler("pause",()=>this.toggle()),navigator.mediaSession.setActionHandler("previoustrack",()=>this.previous()),navigator.mediaSession.setActionHandler("nexttrack",()=>this.next()))}}function yt(e){if(!Number.isFinite(e)||e<0)return"0:00";const t=Math.floor(e/60),a=Math.floor(e%60);return`${t}:${String(a).padStart(2,"0")}`}function xs(e){const t=Math.round(e/6e4),a=Math.floor(t/60);return a>0?`${a} ч ${t%60} мин`:`${t} мин`}function Se(e){if(!e)return"0 Б";const t=["Б","КБ","МБ","ГБ","ТБ"];let a=e,s=0;for(;a>=1024&&s<t.length-1;)a/=1024,s+=1;return`${a>=10||s===0?Math.round(a):a.toFixed(1)} ${t[s]}`}const h=new ln,cn=document.getElementById("app"),o={currentTracks:[],favorites:new Set,dislikes:new Set,favoriteAlbums:new Set,theme:"violet",lyrics:null,lyricsTrackId:null,lyricsRefresh:!1,lyricsActiveKey:null,npTab:"lyrics",npOpen:!1,allTracks:null,artists:null,albums:null,stats:null,playlists:null,me:null,meStats:null,authConfig:null,lastfmConfig:null,liveMode:!1,liveMixes:[],renderSeq:0},$={artists:null,albums:null,tracks:null,stats:null,playlists:null,favorites:null,ratings:null,recent:null,meStats:null,liveMixes:null};cn.innerHTML=`
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
`;const u=(e,t=document)=>t.querySelector(e),G=(e,t=document)=>[...t.querySelectorAll(e)];function b(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function va(e){const t=String(e||"?").trim().split(/\s+/).filter(Boolean);return t.length?t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+t[1][0]).toUpperCase():"?"}function ke(){var e,t;return((e=o.me)==null?void 0:e.displayName)||((t=o.me)==null?void 0:t.username)||"Аккаунт"}function As(e){return(e==null?void 0:e.status)===401}function Ot(e){return As(e)?(Ht(),!0):!1}function ct(e,{size:t=400,alt:a="",className:s=""}={}){return`<span class="cover ${s}">
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
    </div>`}function dn(e){u("#view").innerHTML=`
    <div class="page">
      <div class="empty-state">
        <span class="empty-icon">${d("wave")}</span>
        <h2>Что-то пошло не так</h2>
        <p>${b(e)}</p>
        <button class="btn tonal" data-action="reload">Попробовать снова</button>
      </div>
    </div>`}function wt(e,t,{actions:a="",eyebrow:s=""}={}){return`<header class="page-head">
    <div>
      ${s?`<div class="eyebrow">${b(s)}</div>`:""}
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
  </article>`}function ga(e){return`<article class="card artist-card" data-action="open" data-href="#/artist/${e.id}" tabindex="0">
    <div class="card-cover round">${ct(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${b(e.name)}</div>
      <div class="card-sub">${e.albumCount??0} ${I(e.albumCount??0,"альбом","альбома","альбомов")}</div>
    </div>
  </article>`}function I(e,t,a,s){const i=e%10,n=e%100;return i===1&&n!==11?t:i>=2&&i<=4&&(n<12||n>14)?a:s}function un(e){return(e==null?void 0:e.source)==="ytm"?'<span class="track-badge ytm" title="Источник: YouTube Music">YT</span>':`<span class="track-badge">${b(((e==null?void 0:e.suffix)||"flac").toUpperCase())}</span>`}function pn(e,t,{showAlbum:a=!0,showCover:s=!1,playlistId:i=null,rowAction:n="play-row",rowList:c=null}={}){var m;const l=((m=h.track)==null?void 0:m.id)===e.id,r=o.favorites.has(e.id),p=e.track&&e.track>0?e.track:t+1;return`<div class="track-row ${l?"playing":""} ${s?"has-cover":""}" data-action="${n}" data-index="${t}" data-track-id="${b(e.id)}" ${c?`data-list="${c}"`:""} tabindex="0">
    <div class="track-index">
      <span class="track-num">${p}</span>
      <span class="track-eq"><i></i><i></i><i></i></span>
    </div>
    ${s?`<span class="track-cover">${ct(e.coverArt||e.albumId,{size:80})}</span>`:""}
    <div class="track-main">
      <div class="track-title">${b(e.title)}</div>
      <div class="track-sub">${b(e.artist||"")}${a&&e.album?` · ${b(e.album)}`:""}</div>
    </div>
    ${un(e)}
    <span class="track-duration">${yt(e.duration)}</span>
    <button class="icon-btn row-btn like ${r?"active":""}" data-action="like" data-id="${e.id}" title="В избранное">${d(r?"heart":"heartOutline")}</button>
    <button class="icon-btn row-btn dislike ${o.dislikes.has(e.id)?"active":""}" data-action="dislike" data-id="${e.id}" title="Не нравится">${d("thumbDown")}</button>
    ${i?`<button class="icon-btn row-btn" data-action="remove-from-playlist" data-playlist="${i}" data-index="${t}" title="Убрать из плейлиста">${d("delete")}</button>`:`<button class="icon-btn row-btn" data-action="add-to-playlist" data-id="${e.id}" title="Добавить в плейлист">${d("add")}</button>`}
  </div>`}function Q(e,t={}){return e.length?`<div class="track-list">${e.map((a,s)=>pn(a,s,t)).join("")}</div>`:'<div class="empty-inline">Треков пока нет</div>'}function hn(){const e=location.hash.replace(/^#/,"")||"/home",[t,a=""]=e.split("?");return{parts:t.split("/").filter(Boolean),params:new URLSearchParams(a)}}const fn={artist:"artists",album:"albums",playlist:"playlists"},mn=new Set(["artists","albums","tracks","playlists","favorites","stats"]);function vn(e){const t=fn[e]||e;G(".nav-item").forEach(a=>{a.classList.toggle("active",a.dataset.nav===t)}),G(".tab-item").forEach(a=>{const s=a.dataset.tab,i=s===t||s==="library"&&(t==="library"||mn.has(t))||s==="search"&&t==="search";a.classList.toggle("active",i)})}async function C(){const{parts:e,params:t}=hn(),a=e[0]||"home";if(a==="register"){Ea(t.get("invite")||"");return}if(!o.me){Ht();return}const s=++o.renderSeq;vn(a),u("#view").scrollTop=0;try{a==="home"?await Ga(s):a==="live"?await Sn(s):a==="stats"?await kn(s):a==="artists"?await En(s):a==="artist"?await Tn(s,e[1]):a==="albums"?await Mn(s):a==="album"?await Ln(s,e[1]):a==="tracks"?await _n(s):a==="playlists"?await xn(s):a==="playlist"?await Dn(s,e[1]):a==="favorites"?await Pn(s):a==="search"?await Cn(s,t.get("q")||""):a==="library"?await Zn(s):a==="profile"?await tr(s):a==="ytm"?await er(s):await Ga(s)}catch(i){if(console.error(i),Ot(i))return;s===o.renderSeq&&dn(i.message||"Ошибка загрузки")}}async function gn(){return $.stats||($.stats=await ci()),$.stats}async function Ds(){return $.artists||($.artists=await ei()),$.artists}async function bn(){return $.albums||($.albums=await ss("alphabeticalByArtist",500)),$.albums}async function ba(){if(!$.tracks){const e=await ai(500);e.sort((t,a)=>`${t.artist} ${t.album} ${String(t.track).padStart(3,"0")}`.localeCompare(`${a.artist} ${a.album} ${String(a.track).padStart(3,"0")}`,"ru")),$.tracks=e}return $.tracks}async function Ps(){if($.favorites||($.favorites=await li()),o.favorites=new Set(($.favorites.song||[]).map(e=>e.id)),o.favoriteAlbums=new Set(($.favorites.album||[]).map(e=>e.id)),!$.ratings)try{$.ratings=await pi()}catch{$.ratings={liked:[],disliked:[]}}return o.dislikes=new Set(($.ratings.disliked||[]).filter(e=>!o.favorites.has(e))),$.favorites}async function ya(){return $.meStats||($.meStats=await os()),o.meStats=$.meStats,$.meStats}async function yn(){return $.liveMixes||($.liveMixes=await gi()),o.liveMixes=$.liveMixes,$.liveMixes}async function wn(){$.artists=null,$.albums=null,$.tracks=null,$.stats=null,$.recent=null,$.meStats=null,$.liveMixes=null,y("Библиотека обновлена"),C()}async function Ga(e){var g;j();const[t,a,s,i]=await Promise.all([ya(),$.recent?Promise.resolve($.recent):ss("newest",12),Ds(),ba()]);if(e!==o.renderSeq)return;$.recent=a;const n=o.ytmStatus||await Pe().catch(()=>null);o.ytmStatus=n;let c=[];if(n!=null&&n.connected&&(c=await hs(10).catch(()=>[])),e!==o.renderSeq)return;const l=[...i].sort(()=>Math.random()-.5).slice(0,6),r=(t.recent||[]).slice(0,6);o.lists={...o.lists||{},quick:l,recent:r},o.ytmLists={...o.ytmLists||{},history:c},o.currentTracks=i;const p=h.track,m=h.queue.length?h.queue:null;u("#view").innerHTML=`
    <div class="page home quick-home">
      <header class="page-head home-head">
        <div>
          <span class="eyebrow"><span class="live-dot"></span>${b($n())}, ${b(ke())}</span>
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
        <div class="grid cards artists-row">${s.slice(0,8).map(ga).join("")}</div>
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
    </div>`}function $n(){const e=new Date().getHours();return e<6?"Доброй ночи":e<12?"Доброе утро":e<18?"Добрый день":"Добрый вечер"}async function Sn(e){j();const[t,a]=await Promise.all([yn(),ya()]);e===o.renderSeq&&(u("#view").innerHTML=`
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
          ${Array.from({length:24}).map((s,i)=>`<i style="--i:${i}"></i>`).join("")}
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
          ${t.map((s,i)=>{var n,c,l;return`<article class="mix-card ${(n=s.tracks)!=null&&n.length?"":"empty"}" data-action="play-mix" data-index="${i}" tabindex="0">
                <div class="mix-icon">${d(i===0?"heart":i===1?"album":"radio")}</div>
                <div class="mix-body">
                  <h3>${b(s.title)}</h3>
                  <p>${b(s.subtitle)}</p>
                  <span class="muted">${((c=s.tracks)==null?void 0:c.length)||0} ${I(((l=s.tracks)==null?void 0:l.length)||0,"трек","трека","треков")}</span>
                </div>
                <span class="mix-play">${d("play")}</span>
              </article>`}).join("")}
        </div>
      </section>

    </div>`)}async function kn(e){var p,m,g;j();const t=await os().catch(()=>o.meStats||{});if(e!==o.renderSeq)return;o.meStats=t,$.meStats=t;const a=((t.listenedMs||0)/36e5).toFixed(1),s=Math.round((t.listenedMs||0)/6e4),i=Math.max(1,...(t.byDay||[]).map(f=>f.ms)),n=t.recent||[];o.currentTracks=n;const c=[...t.byDay||[]].slice(-14),l=t.likes||0,r=t.dislikes||0;u("#view").innerHTML=`
    <div class="page stats-page">
      ${wt("Статистика","Только ваш аккаунт: время, артисты, жанры и оценки",{eyebrow:"Личные данные",actions:`<a class="btn glass" href="#/favorites">${d("heart")} Избранное</a>`})}

      <section class="stat-cards">
        <div class="stat-card"><span class="stat-icon">${d("clock")}</span><strong>${a} ч</strong><span>${s} минут музыки</span></div>
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
        ${n.length?Q(n,{showCover:!0}):'<div class="empty-inline">История пока пуста.</div>'}
      </section>
    </div>`}async function En(e){j();const t=await Ds();e===o.renderSeq&&(o.currentTracks=[],u("#view").innerHTML=`
    <div class="page">
      ${wt("Артисты",`${t.length} ${I(t.length,"артист","артиста","артистов")} в библиотеке`,{actions:`<button class="btn glass" data-action="shuffle-library">${d("shuffle")} Перемешать всё</button>`,eyebrow:"Коллекция"})}
      <div class="grid cards">${t.map(ga).join("")}</div>
    </div>`)}async function Tn(e,t){j();const a=await as(t);if(e!==o.renderSeq)return;const s=a.artist,i=s.album||[];o.currentTracks=[],u("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/artists">${d("back")} Все артисты</a>
      <section class="collection-head">
        <div class="collection-art round">${ct(s.coverArt||s.id,{size:600,alt:s.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">Артист</div>
          <h1>${b(s.name)}</h1>
          <p class="muted">${i.length} ${I(i.length,"альбом","альбома","альбомов")}</p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-artist" data-id="${s.id}">${d("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-artist" data-id="${s.id}">${d("shuffle")} Перемешать</button>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section-head"><h2>Альбомы</h2></div>
        <div class="grid cards">${i.map(ie).join("")}</div>
      </section>
    </div>`}async function Mn(e){j();const t=await bn();e===o.renderSeq&&(o.currentTracks=[],u("#view").innerHTML=`
    <div class="page">
      ${wt("Альбомы",`${t.length} ${I(t.length,"альбом","альбома","альбомов")}`,{eyebrow:"Коллекция"})}
      <div class="grid cards">${t.map(ie).join("")}</div>
    </div>`)}async function Ln(e,t){j();const a=await da(t);if(e!==o.renderSeq)return;const s=a.album,i=s.song||[];o.currentTracks=i,u("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/albums">${d("back")} Все альбомы</a>
      <section class="collection-head album-head">
        <div class="collection-art">${ct(s.coverArt||s.id,{size:800,alt:s.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">${s.year?`Альбом · ${s.year}`:"Альбом"}</div>
          <h1>${b(s.name)}</h1>
          <p class="muted">
            <a class="inline-link" href="#/artist/${s.artistId}">${b(s.artist)}</a>
            · ${i.length} ${I(i.length,"трек","трека","треков")}
            · ${xs(s.duration*1e3||0)}
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
    </div>`}async function _n(e){j();const t=await ba();e===o.renderSeq&&(o.currentTracks=t,u("#view").innerHTML=`
    <div class="page">
      ${wt("Все треки",`${t.length} ${I(t.length,"трек","трека","треков")}`,{eyebrow:"Библиотека",actions:`<button class="btn primary" data-action="play-all">${d("play")} Слушать</button>
                  <button class="btn glass" data-action="shuffle-all">${d("shuffle")} Перемешать</button>`})}
      ${Q(t,{showCover:!0})}
    </div>`)}async function xn(e){j();const t=await ua();e===o.renderSeq&&($.playlists=t,o.currentTracks=[],u("#view").innerHTML=`
    <div class="page">
      ${wt("Плейлисты",`${t.length} ${I(t.length,"плейлист","плейлиста","плейлистов")}`,{eyebrow:"Моя музыка",actions:`<button class="btn primary" data-action="new-playlist">${d("add")} Новый плейлист</button>`})}
      ${t.length?`<div class="grid cards">${t.map(An).join("")}</div>`:`<div class="empty-state"><span class="empty-icon">${d("playlist")}</span><h2>Плейлистов пока нет</h2><p>Соберите подборку из любимых треков.</p><button class="btn primary" data-action="new-playlist">${d("add")} Создать</button></div>`}
    </div>`)}function An(e){return`<article class="card" data-action="open" data-href="#/playlist/${e.id}" tabindex="0">
    <div class="card-cover">${ct(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${b(e.name)}</div>
      <div class="card-sub">${e.songCount??0} ${I(e.songCount??0,"трек","трека","треков")}</div>
    </div>
    <button class="card-play" data-action="open" data-href="#/playlist/${e.id}">${d("play")}</button>
  </article>`}async function Dn(e,t){j();const a=await ii(t);if(e!==o.renderSeq)return;const s=(a.entry||[]).map((i,n)=>({...i,track:n+1}));o.currentTracks=s,u("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/playlists">${d("back")} Все плейлисты</a>
      <section class="collection-head album-head">
        <div class="collection-art">${ct(a.coverArt||a.id,{size:800,alt:a.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">Плейлист</div>
          <h1>${b(a.name)}</h1>
          <p class="muted">${s.length} ${I(s.length,"трек","трека","треков")} · ${xs((a.duration||0)*1e3)}</p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-all">${d("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-all">${d("shuffle")} Перемешать</button>
            <button class="btn ghost danger" data-action="delete-playlist" data-id="${a.id}">${d("delete")} Удалить</button>
          </div>
        </div>
      </section>
      <section class="section">
        ${Q(s,{showCover:!0,playlistId:a.id})}
      </section>
    </div>`}async function Pn(e){j();const t=await Ps();if(e!==o.renderSeq)return;const a=t.song||[];o.currentTracks=a,u("#view").innerHTML=`
    <div class="page">
      ${wt("Избранное",`${a.length} ${I(a.length,"трек","трека","треков")}`,{eyebrow:"Моя музыка",actions:a.length?`<button class="btn primary" data-action="play-all">${d("play")} Слушать</button>`:""})}
      ${a.length?Q(a,{showCover:!0}):`<div class="empty-state"><span class="empty-icon">${d("heartOutline")}</span><h2>Здесь пока пусто</h2><p>Нажимайте на сердечко у трека, чтобы добавить его в избранное.</p></div>`}
      ${(t.album||[]).length?`<section class="section"><div class="section-head"><h2>Любимые альбомы</h2></div>
             <div class="grid cards">${t.album.map(ie).join("")}</div></section>`:""}
    </div>`}const wa="rustream.searches";function Cs(){try{const e=JSON.parse(localStorage.getItem(wa));return Array.isArray(e)?e.slice(0,8):[]}catch{return[]}}function zs(e){const t=String(e||"").trim();if(t.length<2)return;const a=[t,...Cs().filter(s=>s!==t)].slice(0,8);localStorage.setItem(wa,JSON.stringify(a))}function ra(e){const t=String(e||"").trim();if(!t)return;zs(t);const a=`#/search?q=${encodeURIComponent(t)}`;location.hash===a?C():location.hash=a}async function Cn(e,t){const a=u("#search-input");if(a.value!==t&&(a.value=t),!t.trim()){const n=Cs();u("#view").innerHTML=`
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

        ${n.length?`<section class="section">
                <div class="section-head"><h2>Недавние запросы</h2><button class="text-link" data-action="clear-searches">Очистить</button></div>
                <div class="chip-row">${n.map(r=>`<button class="chip-btn" data-action="run-search" data-query="${b(r)}">${b(r)}</button>`).join("")}</div>
              </section>`:""}

        <section class="section">
          <div class="section-head"><h2>Популярное</h2></div>
          <div class="chip-row">
            ${["Chiki The Maid","Intro","Poezd","FLAC","Аниме","Рок","Джаз"].map(r=>`<button class="chip-btn" data-action="run-search" data-query="${b(r)}">${b(r)}</button>`).join("")}
          </div>
        </section>
      </div>`;const c=u("#page-search-form"),l=u("#page-search-input");c==null||c.addEventListener("submit",r=>{r.preventDefault(),ra(l.value)}),l==null||l.addEventListener("keydown",r=>{r.key==="Enter"&&ra(l.value)});return}j();const s=await si(t);if(e!==o.renderSeq)return;const i=s.song||[];o.currentTracks=i,u("#view").innerHTML=`
    <div class="page">
      ${wt(`Поиск: ${t}`,`Найдено ${i.length} ${I(i.length,"трек","трека","треков")}, ${(s.album||[]).length} ${I((s.album||[]).length,"альбом","альбома","альбомов")}`,{eyebrow:"Результаты"})}
      ${(s.artist||[]).length?`<section class="section"><div class="section-head"><h2>Артисты</h2></div><div class="grid cards">${s.artist.map(ga).join("")}</div></section>`:""}
      ${(s.album||[]).length?`<section class="section"><div class="section-head"><h2>Альбомы</h2></div><div class="grid cards">${s.album.map(ie).join("")}</div></section>`:""}
      ${i.length?`<section class="section"><div class="section-head"><h2>Треки</h2></div>${Q(i,{showCover:!0})}</section>`:""}
      ${!i.length&&!(s.album||[]).length&&!(s.artist||[]).length?`<div class="empty-state"><span class="empty-icon">${d("search")}</span><h2>Ничего не найдено</h2><p>Попробуйте другой запрос.</p></div>`:""}
    </div>`}async function zn(e){const a=(await da(e)).album.song||[];if(!a.length)return y("В альбоме нет треков","warn");o.currentTracks=a,await h.playTracks(a,0)}async function Ja(e,t=!1){y("Загружаю альбомы…");const s=(await as(e)).artist.album||[],n=(await Promise.all(s.map(c=>da(c.id)))).flatMap(c=>c.album.song||[]);if(!n.length)return y("У артиста нет треков","warn");o.currentTracks=n,await h.playTracks(n,0,{shuffle:t})}async function qs(e,t){try{await hi(e,t),t===1?(o.favorites.add(e),o.dislikes.delete(e)):t===-1?(o.favorites.delete(e),o.dislikes.add(e)):(o.favorites.delete(e),o.dislikes.delete(e)),$.favorites=null,$.ratings=null,G(`[data-action="like"][data-id="${e}"]`).forEach(a=>{const s=o.favorites.has(e);a.classList.toggle("active",s),a.innerHTML=d(s?"heart":"heartOutline")}),G(`[data-action="dislike"][data-id="${e}"]`).forEach(a=>{a.classList.toggle("active",o.dislikes.has(e))}),Is(),location.hash.startsWith("#/favorites")&&C(),location.hash.startsWith("#/stats")&&C()}catch(a){y(a.message,"error")}}async function Ee(e){const t=o.favorites.has(e);await qs(e,t?0:1)}async function Ka(e){const t=o.dislikes.has(e);await qs(e,t?0:-1)}function Is(){const e=h.track,t=u("#pb-like"),a=u("#pb-dislike");if(t){const s=e?o.favorites.has(e.id):!1;t.classList.toggle("active",s),t.innerHTML=d(s?"heart":"heartOutline")}a&&a.classList.toggle("active",e?o.dislikes.has(e.id):!1)}async function qn(e){let t=[];try{t=await ua()}catch(a){y(a.message,"error")}ne({title:"Добавить в плейлист",body:`
      ${t.length?`<div class="modal-list">${t.map(a=>`<button class="modal-row" data-modal-action="add" data-playlist="${a.id}">
                  <span class="modal-row-ico">${d("playlist")}</span>
                  <span><strong>${b(a.name)}</strong><small>${a.songCount??0} треков</small></span>
                  ${d("next")}
                </button>`).join("")}</div>`:'<p class="muted">Плейлистов пока нет — создайте первый.</p>'}
      <div class="modal-new">
        <input class="input" id="new-playlist-name" placeholder="Название нового плейлиста" />
        <button class="btn primary" data-modal-action="create" data-track="${e}">${d("add")} Создать</button>
      </div>`,onMount:a=>{a.addEventListener("click",async s=>{const i=s.target.closest("[data-modal-action]");if(i&&(i.dataset.modalAction==="add"&&(await ni(i.dataset.playlist,e),it(),$.playlists=null,y("Трек добавлен в плейлист")),i.dataset.modalAction==="create")){const c=u("#new-playlist-name",a).value.trim()||"Мой плейлист";await is(c,[e]),it(),$.playlists=null,y("Плейлист создан"),location.hash.startsWith("#/playlists")&&C()}})}})}async function In(){ne({title:"Новый плейлист",body:`<input class="input" id="new-playlist-name" placeholder="Например: Вечерний плейлист" autofocus />
           <div class="modal-actions">
             <button class="btn ghost" data-modal-action="cancel">Отмена</button>
             <button class="btn primary" data-modal-action="create">Создать</button>
           </div>`,onMount:e=>{const t=u("#new-playlist-name",e);t.focus(),e.addEventListener("click",async a=>{var i;const s=(i=a.target.closest("[data-modal-action]"))==null?void 0:i.dataset.modalAction;if(s==="cancel"&&it(),s==="create"){const n=t.value.trim();if(!n)return t.focus();await is(n,[]),it(),$.playlists=null,y("Плейлист создан"),C()}}),t.addEventListener("keydown",a=>{var s;a.key==="Enter"&&((s=u('[data-modal-action="create"]',e))==null||s.click())})}})}function ne({title:e,body:t,onMount:a}){const s=u("#modal-root");s.innerHTML=`
    <div class="modal-backdrop" data-modal-action="close">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-head"><h3>${b(e)}</h3><button class="icon-btn" data-modal-action="close">${d("close")}</button></div>
        <div class="modal-body">${t}</div>
      </div>
    </div>`,document.body.classList.add("modal-open");const i=u(".modal",s);s.querySelector(".modal-backdrop").addEventListener("click",n=>{n.target.dataset.modalAction==="close"&&it()}),a==null||a(i)}function it(){u("#modal-root").innerHTML="",document.body.classList.remove("modal-open")}function Hs(){if(h.sleepMode==="track")return"до конца трека";if(h.sleepMode==="timer"){const e=Math.ceil(h.sleepRemainingMs/1e3),t=Math.floor(e/60),a=e%60;return`через ${t}:${String(a).padStart(2,"0")}`}return""}function $a(){const e=!!h.sleepMode;G('[data-action="sleep"]').forEach(t=>{t.classList.toggle("active",e),t.title=e?`Таймер сна ${Hs()}`:"Таймер сна"})}function Hn(){const e=[15,30,45,60];ne({title:"Таймер сна",body:`
      <p class="muted">Музыка плавно затихнет и встанет на паузу${h.sleepMode?`. Сейчас: <strong>${Hs()}</strong>`:""}.</p>
      <div class="modal-actions sleep-actions">
        ${e.map(t=>`<button class="btn ghost" data-sleep="${t}">${t} минут</button>`).join("")}
        <button class="btn ghost" data-sleep="track">Дослушать текущий трек</button>
        ${h.sleepMode?'<button class="btn primary" data-sleep="off">Выключить таймер</button>':""}
      </div>`,onMount:t=>{t.addEventListener("click",a=>{var i;const s=(i=a.target.closest("[data-sleep]"))==null?void 0:i.dataset.sleep;s&&(s==="off"?(h.cancelSleepTimer(),y("Таймер сна выключен")):s==="track"?(h.stopAfterTrack(),y("Остановлюсь после текущего трека")):(h.startSleepTimer(Number(s)),y(`Таймер сна на ${s} минут`)),it(),$a())})}})}function On(){ne({title:"Горячие клавиши",body:`<div class="hotkeys">${[["Space","Играть / пауза"],["N","Следующий трек"],["P","Предыдущий трек"],["S","Перемешать"],["R","Повтор: выкл → все → один"],["M","Звук вкл / выкл"],["L","Лайк текущему треку"],["Shift + ← / →","Перемотка на 5 секунд"],["Ctrl + K","Поиск"],["Esc","Закрыть окно / плеер"]].map(([t,a])=>`<div class="hotkey-row"><kbd>${t}</kbd><span>${b(a)}</span></div>`).join("")}</div>`})}function zt(e="lyrics"){o.npOpen=!0,o.npTab=e;const t=u("#np");t.hidden=!1,requestAnimationFrame(()=>t.classList.add("open")),setTimeout(()=>t.classList.add("open"),80),ee()}function Te(){o.npOpen=!1;const e=u("#np");e.classList.remove("open"),setTimeout(()=>{o.npOpen||(e.hidden=!0)},260)}function Nn(e){o.npTab=e,ee()}function ee(){if(!o.npOpen)return;const e=h.track;G(".np-tab").forEach(s=>s.classList.toggle("active",s.dataset.npTab===o.npTab)),u("#np").classList.toggle("compact",o.npTab!=="lyrics");const t=u("#np-side");t.innerHTML=`
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
        <button class="icon-btn" data-action="sleep" title="Таймер сна">${d("clock")}</button>
      </div>
    </div>`;const a=u("#np-panel");o.npTab==="lyrics"?Os(a,e):o.npTab==="eq"?ze(a):Vs(a)}async function Os(e,t){var i,n;if(!t){e.innerHTML=Rs("lyrics","Текст появится здесь","Включите трек — и мы поищем файл .lrc рядом с аудио.");return}if(e.innerHTML='<div class="panel-loading"><span class="spinner"></span>Ищу текст…</div>',o.lyricsTrackId!==t.id||o.lyricsRefresh)try{o.lyrics=await bi(t.id,o.lyricsRefresh),o.lyricsTrackId=t.id,o.lyricsRefresh=!1,o.lyricsActiveKey=null}catch{o.lyrics=null}if(o.npTab!=="lyrics")return;const a=o.lyrics;if(!a||!a.plain&&!((i=a.synced)!=null&&i.length)){e.innerHTML=`<div class="panel-empty">
      <span class="empty-icon">${d("lyrics")}</span>
      <h3>Текст не найден</h3>
      <p>Локального .lrc/.txt нет, интернет-поиск ничего не вернул. Можно попробовать ещё раз.</p>
      <button class="btn glass" data-action="refresh-lyrics">${d("refresh")} Искать в интернете</button>
    </div>`;return}const s=a.source==="lrclib"?"LRCLIB":a.source==="local"?"локальный файл":a.source==="lyrics.ovh"?"lyrics.ovh":"кэш";e.innerHTML=`
    <div class="panel-title">
      <h3>Текст песни</h3>
      <span class="lyrics-source">${d("wave")} ${b(s)}</span>
      <button class="icon-btn" data-action="refresh-lyrics" title="Найти заново">${d("refresh")}</button>
    </div>
    <div class="lyrics" id="lyrics-body">
      ${(n=a.synced)!=null&&n.length?a.synced.map((c,l)=>`<div class="lyric-line" data-index="${l}" data-time="${c.time_ms}">${b(c.text)}</div>`).join(""):`<div class="lyrics-plain">${b(a.plain).replace(/\n/g,"<br />")}</div>`}
    </div>`,Ns()}function Ns(){if(o.npTab!=="lyrics")return;const e=G(".lyric-line");if(!e.length)return;const t=h.currentTime*1e3;let a=-1;e.forEach((i,n)=>{Number(i.dataset.time)<=t&&(a=n)}),a<0&&(a=0),e.forEach((i,n)=>i.classList.toggle("active",n===a));const s=`${o.lyricsTrackId||""}:${a}`;a>=0&&o.lyricsActiveKey!==s&&(o.lyricsActiveKey=s,e[a].scrollIntoView({block:"center",behavior:"smooth"}))}function Rs(e,t,a){return`<div class="panel-empty"><span class="empty-icon">${d(e)}</span><h3>${b(t)}</h3><p>${b(a)}</p></div>`}function ze(e){const t=h.eqState;e.innerHTML=`
    <div class="panel-title">
      <h3>Эквалайзер</h3>
      <label class="switch">
        <input type="checkbox" id="eq-enabled" ${t.enabled?"checked":""} />
        <span></span>
      </label>
    </div>
    <div class="eq-presets">
      ${Object.entries(na).map(([a,s])=>`<button class="chip-btn ${t.preset===a?"active":""}" data-eq-preset="${a}">${b(s.name)}</button>`).join("")}
      <button class="chip-btn ${t.preset==="custom"?"active":""}" disabled>Своя</button>
    </div>
    <div class="eq ${t.enabled?"":"disabled"}">
      ${_s.map((a,s)=>{const i=Number(t.gains[s])||0,n=(12-i)/24*100;return`
        <div class="eq-band">
          <span class="eq-value" id="eq-val-${s}">${i>0?"+":""}${i}</span>
          <div class="eq-track" data-eq-band="${s}" role="slider" tabindex="0"
               aria-label="${a>=1e3?`${a/1e3} кГц`:`${a} Гц`}"
               aria-valuemin="-12" aria-valuemax="12" aria-valuenow="${i}">
            <span class="eq-center"></span>
            <span class="eq-fill" style="top:${Math.min(n,50)}%;height:${Math.abs(50-n)}%"></span>
            <span class="eq-thumb" style="top:${n}%"></span>
          </div>
          <span class="eq-freq">${a>=1e3?`${a/1e3}k`:a}</span>
        </div>`}).join("")}
    </div>
    <div class="eq-foot">
      <span class="muted">10 полос · ±12 дБ</span>
      <button class="btn ghost" data-action="reset-eq">${d("refresh")} Сбросить</button>
    </div>`}function Vs(e){const t=h.queue;e.innerHTML=`
    <div class="panel-title"><h3>Очередь</h3><span class="muted">${t.length} ${I(t.length,"трек","трека","треков")}</span></div>
    ${t.length?`<div class="queue-list" id="queue-list">${t.map((s,i)=>`
              <button class="queue-row ${i===h.index?"active":""}" data-action="play-queue" data-index="${i}" data-track-id="${s.id}">
                <span class="queue-drag-handle">${d("menu")}</span>
                <span class="queue-cover">${ct(s.coverArt||s.albumId,{size:80})}</span>
                <span class="queue-main"><strong>${b(s.title)}</strong><small>${b(s.artist||"")}</small></span>
                <span class="queue-time">${yt(s.duration)}</span>
              </button>`).join("")}</div>`:Rs("queue","Очередь пуста","Нажмите на трек или альбом, чтобы начать воспроизведение.")}`;const a=u("#queue-list");a&&t.length>0&&new k(a,{animation:150,handle:".queue-drag-handle",ghostClass:"queue-row-ghost",dragClass:"queue-row-drag",onEnd:s=>{s.oldIndex!==s.newIndex&&(h.moveInQueue(s.oldIndex,s.newIndex),setTimeout(()=>Vs(e),50))}})}function Sa(){const e=h.track,t=u("#pb-title"),a=u("#pb-artist"),s=u("#pb-cover-img"),i=u("#quality-format"),n=u("#quality-detail");if(!e){t.textContent="Ничего не играет",a.textContent="Выберите трек",u(".pb-cover").classList.remove("loaded"),i.textContent="—",n.textContent="",Qa(null);return}t.textContent=e.title||"",a.textContent=[e.artist,e.album].filter(Boolean).join(" · "),e.coverArt||e.albumId?(s.src=Lt(e.coverArt||e.albumId,160),s.onload=()=>u(".pb-cover").classList.add("loaded")):(s.removeAttribute("src"),u(".pb-cover").classList.remove("loaded")),i.textContent=(e.suffix||"flac").toUpperCase(),n.textContent=[e.bitRate?`${e.bitRate} kbps`:null,e.size?Se(e.size):null].filter(Boolean).join(" · "),Is(),Qa(e)}function Qa(e){if("mediaSession"in navigator){if(!e){navigator.mediaSession.metadata=null;return}navigator.mediaSession.metadata=new MediaMetadata({title:e.title||"Без названия",artist:e.artist||"Неизвестный артист",album:e.album||"",artwork:[{src:Lt(e.coverArt||e.albumId,96),sizes:"96x96",type:"image/jpeg"},{src:Lt(e.coverArt||e.albumId,128),sizes:"128x128",type:"image/jpeg"},{src:Lt(e.coverArt||e.albumId,256),sizes:"256x256",type:"image/jpeg"},{src:Lt(e.coverArt||e.albumId,512),sizes:"512x512",type:"image/jpeg"}]})}}"mediaSession"in navigator&&(navigator.mediaSession.setActionHandler("play",()=>h.play()),navigator.mediaSession.setActionHandler("pause",()=>h.pause()),navigator.mediaSession.setActionHandler("previoustrack",()=>h.previous()),navigator.mediaSession.setActionHandler("nexttrack",()=>h.next()),navigator.mediaSession.setActionHandler("seekto",e=>{e.seekTime!==void 0&&h.seekTo(e.seekTime)}),navigator.mediaSession.setActionHandler("seekbackward",e=>{h.seekBy(-(e.seekOffset||10))}),navigator.mediaSession.setActionHandler("seekforward",e=>{h.seekBy(e.seekOffset||10)}));function _t(){const e=h.duration,t=h.currentTime,a=e?t/e*100:0;u("#cur-time").textContent=yt(t),u("#total-time").textContent=yt(e),u("#seek").value=String(a),u("#seek-fill").style.width=`${a}%`;const s=u("#np-seek");s&&(s.value=String(a),u("#np-seek-fill").style.width=`${a}%`,u("#np-cur-time").textContent=yt(t),u("#np-total-time").textContent=yt(e)),js(),Ns()}function js(){const e=h.buffered;u("#seek-buffer").style.width=`${e.percent}%`;const t=u("#np-seek-buffer");t&&(t.style.width=`${e.percent}%`);const a=u("#np-buffer");a&&(a.textContent=`буфер ${yt(e.ahead)}`,a.title=`Загружено ${Se(h.estimatedBufferedBytes())}`);const s=u("#quality-detail");s&&h.track&&(s.textContent=[h.track.bitRate?`${h.track.bitRate} kbps`:null,h.track.size?Se(h.track.size):null,`буфер ${yt(e.ahead)}`].filter(Boolean).join(" · "))}function re(){var i;const e=!h.paused&&!!h.track,t=u("#play-btn");t.innerHTML=d(e?"pause":"play"),t.title=e?"Пауза":"Играть",u("#pb-cover").classList.toggle("playing",e);const a=u('.np-controls [data-action="toggle"]');a&&(a.innerHTML=d(e?"pause":"play"),a.title=e?"Пауза":"Играть");const s=((i=h.track)==null?void 0:i.id)||null;G(".track-row").forEach(n=>{n.classList.toggle("playing",!!s&&n.dataset.trackId===s)})}function ka(){u("#shuffle-btn").classList.toggle("active",h.shuffle),u("#repeat-btn").classList.toggle("active",h.repeat!=="off"),u("#repeat-btn").innerHTML=d(h.repeat==="one"?"repeatOne":"repeat");const e=u('.np-controls [data-action="shuffle"]');e&&e.classList.toggle("active",h.shuffle);const t=u('.np-controls [data-action="repeat"]');t&&(t.classList.toggle("active",h.repeat!=="off"),t.innerHTML=d(h.repeat==="one"?"repeatOne":"repeat"))}function oe(){u("#volume").value=String(h.volumePercent);const e=h.volumePercent===0?"volumeOff":h.volumePercent<50?"volumeDown":"volumeUp";u("#volume-btn").innerHTML=d(e);const t=u("#np-volume");if(t){t.value=String(h.volumePercent);const a=u("#np-volume-icon");a&&(a.innerHTML=d(e))}}function Ys(){var t,a;const e=(a=(t=o.ytmStatus)==null?void 0:t.account)==null?void 0:a.photo;return typeof e=="string"&&e.startsWith("http")?e:""}function Rn(e,t="user-avatar"){const a=Ys();return a?`<span class="${t} has-photo"><img src="${b(a)}" alt="" referrerpolicy="no-referrer" /></span>`:`<span class="${t}">${b(va(e))}</span>`}function Fs(){const e=ke(),t=u("#user-avatar"),a=u("#user-name"),s=Ys();t&&(s?(t.classList.add("has-photo"),t.innerHTML=`<img src="${b(s)}" alt="" referrerpolicy="no-referrer" />`):(t.classList.remove("has-photo"),t.textContent=va(e))),a&&(a.textContent=e)}function Bs(e){const t=u("#auth-screen");t&&(t.hidden=!1,document.body.classList.add("auth-locked"),u("#auth-login-view").hidden=e!=="login",u("#auth-register-view").hidden=e!=="register",setTimeout(()=>{var a;return(a=u(e==="login"?"#login-username":"#register-invite"))==null?void 0:a.focus()},60))}function Ht(){Bs("login")}async function Ea(e=""){Bs("register");const t=u("#register-invite"),a=u("#register-invite-hint");if(t.value=e.trim(),!e.trim()){a.textContent="Вставьте код приглашения от администратора.";return}a.textContent="Проверяю приглашение…";try{const s=await _i(e.trim());a.innerHTML=`Приглашение от <strong>${b(s.invitedBy)}</strong>${s.isAdmin?" · администратор":""}`}catch(s){a.textContent=s.message||"Приглашение недействительно"}}function Vn(){const e=u("#auth-screen");e&&(e.hidden=!0,document.body.classList.remove("auth-locked"))}async function Ta(){var e;try{o.authConfig=await Ze();const t=await di();if(!t.user){Ht(),location.hash.startsWith("#/register")&&C();return}o.me=t.user,o.meSettings=t.settings,qe(((e=t.settings)==null?void 0:e.theme)||localStorage.getItem("rustream.theme")||"violet"),o.ytmStatus=await Pe().catch(()=>null),Fs(),Vn(),await Promise.all([Ps(),ya()]),Yn(),await La(),C()}catch(t){As(t)||console.error(t),Ht()}}function at(e){o.liveMode=!!e,h.setLiveMode(!!e)}const Us="rustream.playerSyncedAt";let Za=null;function jn(){return Number(localStorage.getItem(Us))||0}function Xs(e){Number(e)>0&&localStorage.setItem(Us,String(e))}function Ma(){!o.me||!h.queue.length||o.skipPushUntil&&Date.now()<o.skipPushUntil||(clearTimeout(Za),Za=setTimeout(async()=>{try{const e=await Ci(h.snapshotState());Xs(e==null?void 0:e.updatedAt)}catch{}},3e3))}async function La({force:e=!1}={}){var l,r;let t;try{t=await Pi()}catch{return}const a=Number(t==null?void 0:t.updatedAt)||0,s=t==null?void 0:t.state;if(!((l=s==null?void 0:s.queue)!=null&&l.length)||!e&&a<=jn())return;const i=s.queue[Math.min(Number(s.index)||0,s.queue.length-1)],n=(i==null?void 0:i.id)&&i.id===((r=h.track)==null?void 0:r.id);if(!e&&!h.paused&&!n)return;const c=h.applyRemote(s);c&&(Xs(a),o.skipPushUntil=Date.now()+5e3,o.liveMode=!!c.liveMode,Sa(),re(),_t(),location.hash.startsWith("#/live")&&C())}setInterval(()=>{document.hidden||La()},3e4);document.addEventListener("visibilitychange",()=>{document.hidden||La()});h.addEventListener("track",Ma);h.addEventListener("queue",Ma);h.addEventListener("state",Ma);window.addEventListener("pagehide",()=>{if(!(!o.me||!h.queue.length))try{fetch("/api/me/player",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({state:h.snapshotState()}),keepalive:!0}).catch(()=>{})}catch{}});function Yn(){const e=h.restore();e&&(o.liveMode=!!e.liveMode,Sa(),re(),ka(),_t())}async function Fn(){try{y("Собираю персональный поток…");const e=await ls(40);if(!e.length)return y("В библиотеке пока нет треков","warn");at(!0),o.currentTracks=e,await h.playTracks(e,0),y("Live включён"),location.hash.startsWith("#/live")&&C()}catch(e){if(Ot(e))return;y(e.message,"error")}}async function Bn(e){var a;const t=o.liveMixes[e];if(!((a=t==null?void 0:t.tracks)!=null&&a.length))return y("В этом миксе пока нет треков","warn");at(!1),o.currentTracks=t.tracks,await h.playTracks(t.tracks,0),y(`Играет: ${t.title}`)}const _a=[{id:"violet",name:"Фиолетовая"},{id:"ocean",name:"Океан"},{id:"sunset",name:"Закат"},{id:"forest",name:"Лес"},{id:"mono",name:"Моно"}],Me=/^#[0-9a-f]{6}$/i;function oa(e){const t=e.replace("#","");return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}}function Un({r:e,g:t,b:a}){const s=i=>Math.max(0,Math.min(255,Math.round(i)));return`#${[s(e),s(t),s(a)].map(i=>i.toString(16).padStart(2,"0")).join("")}`}function Dt(e,t,a){const s=oa(e),i=oa(t);return Un({r:s.r*a+i.r*(1-a),g:s.g*a+i.g*(1-a),b:s.b*a+i.b*(1-a)})}function Xn(e){const{r:t,g:a,b:s}=oa(e),i=n=>{const c=n/255;return c<=.03928?c/12.92:((c+.055)/1.055)**2.4};return .2126*i(t)+.7152*i(a)+.0722*i(s)}function ts(e){return Xn(e)>.42?"#1a1917":"#ffffff"}function Ws(e){const t=document.documentElement.classList.contains("light-mode"),a=t?"#faf8f4":"#101013",s=t?"#efece4":"#17171c",i=t?.06:.1,n=Dt(e,a,i),c=Dt(e,s,i*1.25),l=Dt(e,t?"#e9e5dc":"#1d1d23",i*1.4),r=Dt(e,t?"#ffffff":"#101013",t?.22:.3),p=document.body.style;p.setProperty("--primary",e),p.setProperty("--on-primary",ts(e)),p.setProperty("--primary-container",r),p.setProperty("--on-primary-container",ts(r)),p.setProperty("--surface",n),p.setProperty("--surface-container",c),p.setProperty("--surface-container-high",l),p.setProperty("--surface-container-highest",Dt(e,l,.5)),p.setProperty("--surface-container-low",Dt(e,n,.5))}function Wn(){const e=document.body.style;["--primary","--on-primary","--primary-container","--on-primary-container","--surface","--surface-container","--surface-container-high","--surface-container-highest","--surface-container-low"].forEach(t=>e.removeProperty(t))}function qe(e){const t=_a.some(s=>s.id===e),a=t?e:Me.test(e||"")?e.toLowerCase():"violet";o.theme=a,document.body.dataset.theme=t?a:"custom",localStorage.setItem("rustream.theme",a),t?Wn():Ws(a)}function la(e){const t=e==="auto"?window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark":e;document.documentElement.classList.toggle("light-mode",t==="light"),o.theme&&Me.test(o.theme)&&Ws(o.theme)}(function(){const t=localStorage.getItem("colorMode")||"dark";la(t),window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{localStorage.getItem("colorMode")==="auto"&&la("auto")})})();const Gs=[{id:"compact",name:"Компактно"},{id:"default",name:"Обычно"},{id:"large",name:"Крупно"}];function Js(e){const t=Gs.some(a=>a.id===e)?e:"default";o.density=t,document.documentElement.dataset.density=t,localStorage.setItem("rustream.density",t)}(function(){Js(localStorage.getItem("rustream.density")||"default")})();async function Ks(e){qe(e);try{await rs({theme:o.theme}),o.meSettings={...o.meSettings||{},theme:o.theme}}catch(t){y(t.message,"error")}}function Gn(e){var i,n,c,l,r,p,m,g;const t=o.meSettings||{},a=(i=o.authConfig)==null?void 0:i.lastfm,s=o.lastfmConfig||{};return`
    <div class="settings-sections">
      <section class="settings-section">
        <h4>${d("person")} Профиль</h4>
        <form id="settings-profile-form" class="settings-form">
          <label class="field"><span>Отображаемое имя</span>
            <input class="input" id="settings-display-name" value="${b(((n=o.me)==null?void 0:n.displayName)||"")}" />
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
          ${_a.map(f=>`<button class="theme-swatch ${o.theme===f.id?"active":""}" data-theme-choice="${f.id}" title="${f.name}">
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
              <input class="input" id="settings-lastfm-api-key" name="lastfm-api-key" autocomplete="off" autocapitalize="none" spellcheck="false" data-lpignore="true" value="${b(s.apiKey||"")}" placeholder="32 символа" />
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
              <span class="user-avatar small">${b(va(f.displayName||f.username))}</span>
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
    </div>`}async function Wt(){if(!o.me)return Ht();let e=[];if(o.me.isAdmin)try{[e,o.lastfmConfig]=await Promise.all([yi(),Ne().catch(()=>({}))])}catch(t){Ot(t)}ne({title:"Аккаунт и настройки",body:Gn(e),onMount:t=>{var a,s;(a=u("#settings-profile-form",t))==null||a.addEventListener("submit",async i=>{i.preventDefault();try{await Da(u("#settings-display-name",t).value.trim()),o.me.displayName=u("#settings-display-name",t).value.trim(),Fs(),y("Имя обновлено")}catch(n){y(n.message,"error")}}),(s=u("#settings-password-form",t))==null||s.addEventListener("submit",async i=>{i.preventDefault();try{await fi(u("#settings-current-password",t).value,u("#settings-new-password",t).value),u("#settings-current-password",t).value="",u("#settings-new-password",t).value="",y("Пароль изменён")}catch(n){y(n.message,"error")}}),t.addEventListener("click",async i=>{const n=i.target.closest("[data-theme-choice]");if(n){const r=n.dataset.themeChoice;qe(r),G(".theme-swatch",t).forEach(p=>p.classList.toggle("active",p.dataset.themeChoice===r));try{await Da(o.me.displayName||o.me.username,r),o.meSettings={...o.meSettings||{},theme:r},y("Тема сохранена")}catch(p){y(p.message,"error")}return}const c=i.target.closest("[data-settings-action]");if(!c)return;const l=c.dataset.settingsAction;if(l==="logout"){await ns().catch(()=>{}),location.reload();return}if(l==="rescan"){c.classList.add("spin"),await cs().catch(r=>y(r.message,"error")),setTimeout(()=>{c.classList.remove("spin"),y("Сканирование запущено")},1200);return}if(l==="clear-history"){if(!confirm("Удалить всю историю прослушиваний этого аккаунта?"))return;try{await $i(),$.meStats=null,o.meStats=null,y("История очищена");const r=await Oe();o.meSettings=r.settings}catch(r){y(r.message,"error")}return}if(l==="lastfm-connect"){try{const r=await ki();window.open(r.url,"_blank","noopener"),y("Подтвердите доступ на Last.fm, затем нажмите «Завершить»")}catch(r){y(r.message,"error")}return}if(l==="lastfm-complete"){try{const r=await Ei();y(`Last.fm подключён${r.username?`: ${r.username}`:""}`);const p=await Oe();o.meSettings=p.settings,it(),Wt()}catch(r){y(r.message,"error")}return}if(l==="save-lastfm-app"){try{await Pa(u("#settings-lastfm-api-key",t).value.trim(),u("#settings-lastfm-api-secret",t).value.trim());const r=await Ne();o.lastfmConfig=r,o.authConfig=await Ze(),y("Ключи Last.fm сохранены в config.toml"),u("#settings-lastfm-api-secret",t).value=""}catch(r){y(r.message,"error")}return}if(l==="clear-lastfm-app"){if(!confirm("Удалить ключи приложения Last.fm из config.toml?"))return;try{await Pa("","",!0),o.lastfmConfig=await Ne(),o.authConfig=await Ze(),y("Ключи Last.fm удалены"),it(),Wt()}catch(r){y(r.message,"error")}return}if(l==="save-scrobbling"){const r=actionEl.dataset.scope||"both",p={};r!=="lastfm"&&(p.listenbrainzToken=u("#settings-listenbrainz",t).value.trim()),r!=="listenbrainz"&&(p.lastfmSessionKey=u("#settings-lastfm-key",t).value.trim());try{await mi(p),y(r==="listenbrainz"?"Токен ListenBrainz сохранён":"Last.fm сохранён");const m=await Oe();o.meSettings=m.settings}catch(m){y(m.message,"error")}return}if(l==="create-user"){try{await wi({username:u("#new-user-name",t).value.trim(),password:u("#new-user-password",t).value,displayName:u("#new-user-display",t).value.trim(),isAdmin:u("#new-user-admin",t).checked}),y("Пользователь создан"),it(),Wt()}catch(r){y(r.message,"error")}return}if(l==="delete-user"){if(!confirm("Удалить пользователя и все его данные?"))return;try{await Si(c.dataset.id),y("Пользователь удалён"),it(),Wt()}catch(r){y(r.message,"error")}}})}})}function Jn(){const e=localStorage.getItem("colorMode")||"dark";return`
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
      ${_a.map(t=>`<button class="theme-swatch ${o.theme===t.id?"active":""}" data-action="theme" data-theme="${t.id}">
          <span class="swatch-dot theme-${t.id}"></span><span>${t.name}</span>
        </button>`).join("")}
      <label class="theme-swatch custom ${Me.test(o.theme)?"active":""}" title="Свой цвет">
        <input type="color" id="theme-custom" value="${Me.test(o.theme)?o.theme:"#c7a6ff"}" aria-label="Свой цвет" />
        <span>Свой цвет</span>
      </label>
    </div>`}function Kn(e){const t=e==null?void 0:e.account;return e!=null&&e.connected?`
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
    </form>`}function Qn(e){return`
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
    </section>`}async function Zn(e){j();const[t,a]=await Promise.all([gn().catch(()=>({})),ua().catch(()=>[])]);if(e!==o.renderSeq)return;$.playlists=a;const s=[{href:"#/artists",icon:"person",title:"Артисты",sub:`${t.artists||0} в библиотеке`},{href:"#/albums",icon:"album",title:"Альбомы",sub:`${t.albums||0} в библиотеке`},{href:"#/tracks",icon:"music",title:"Треки",sub:`${t.tracks||0} в библиотеке`},{href:"#/playlists",icon:"playlist",title:"Плейлисты",sub:`${a.length} ${I(a.length,"подборка","подборки","подборок")}`},{href:"#/favorites",icon:"heart",title:"Избранное",sub:"Треки, которым вы поставили лайк"},{href:"#/ytm",icon:"ytm",title:"YouTube Music",sub:"Внешний источник: история, лайки, поиск"},{href:"#/live",icon:"radio",title:"Live",sub:"Персональный поток без повторов"},{href:"#/stats",icon:"chart",title:"Статистика",sub:"Часы, артисты и история"}];u("#view").innerHTML=`
    <div class="page library-page">
      <header class="page-head">
        <div>
          <span class="eyebrow">Коллекция</span>
          <h1>Медиатека</h1>
          <p class="muted">${t.tracks||0} ${I(t.tracks||0,"трек","трека","треков")} · ${Se(t.sizeBytes||0)}</p>
        </div>
        <div class="head-actions">
          <button class="btn glass" data-action="shuffle-library">${d("shuffle")} Перемешать всё</button>
        </div>
      </header>
      <div class="library-grid">
        ${s.map(i=>`<a class="library-tile" href="${i.href}">
              <span class="tile-icon">${d(i.icon)}</span>
              <span class="tile-main"><strong>${i.title}</strong><small>${b(i.sub)}</small></span>
              <span class="tile-arrow">${d("next")}</span>
            </a>`).join("")}
      </div>
    </div>`}async function tr(e){var c,l,r,p;j();const t=!!((c=o.me)!=null&&c.isAdmin),[a,s]=await Promise.all([Pe().catch(()=>({connected:!1,account:null})),t?Ti().catch(()=>[]):Promise.resolve([])]);if(e!==o.renderSeq)return;o.ytmStatus=a,u("#view").innerHTML=`
    <div class="page profile-page">
      <header class="page-head">
        <div class="profile-identity">
          ${Rn(ke(),"user-avatar xl")}
          <div>
            <h1>${b(ke())}</h1>
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
        ${Kn(a)}
      </section>

      <section class="section glass-card">
        <h2>${d("palette")} Оформление</h2>
        <p class="muted small">Тема сохраняется в аккаунте и применяется на всех устройствах.</p>
        ${Jn()}
      </section>

      <section class="section glass-card">
        <h2>${d("expand")} Плотность</h2>
        <p class="muted small">Сколько строк и обложек помещается на экране.</p>
        <div class="theme-mode-picker">
          ${Gs.map(m=>`<button class="mode-btn ${(o.density||"default")===m.id?"active":""}" data-action="density" data-value="${m.id}">${m.name}</button>`).join("")}
        </div>
      </section>

      ${t?Qn(s):""}
    </div>`;const i=u("#ytm-connect-form");i==null||i.addEventListener("submit",async m=>{m.preventDefault();const g=u("#ytm-connect-submit"),f=u("#ytm-connect-error"),w=u("#ytm-cookies").value.trim();if(f.textContent="",!w){f.textContent="Вставьте cookies";return}g.disabled=!0;try{await Ai(w),y("YouTube Music подключён"),C()}catch(E){f.textContent=E.message||"Не удалось подключить"}finally{g.disabled=!1}});const n=u("#invite-form");n==null||n.addEventListener("submit",async m=>{var g;m.preventDefault();try{const f=await Mi({note:u("#invite-note").value.trim(),expiresInDays:Number(u("#invite-days").value||0),maxUses:Number(u("#invite-uses").value||0),isAdmin:u("#invite-admin").checked});await((g=navigator.clipboard)==null?void 0:g.writeText(ds(f.code)).catch(()=>{})),y("Код создан, ссылка скопирована"),C()}catch(f){y(f.message,"error")}}),(r=u("#theme-custom"))==null||r.addEventListener("input",m=>qe(m.target.value)),(p=u("#theme-custom"))==null||p.addEventListener("change",async m=>{await Ks(m.target.value),C()})}async function er(e){var m,g;j();const t=o.ytmStatus||await Pe().catch(()=>null);if(e!==o.renderSeq)return;if(o.ytmStatus=t,!(t!=null&&t.connected)){u("#view").innerHTML=`
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
    </div>`;const s=u("#ytm-search-form"),i=u("#ytm-search-input"),n=u("#ytm-results"),c=(f,w,E,x)=>{const H=u(f);if(!H)return;const Z=H.querySelector("div[id]")||H;if(!E.length){H.hidden=!0;return}H.hidden=!1,Z.innerHTML=a(E,w)},l=(f,w)=>{var E;o.ytmLists.search=f,n.hidden=!1,n.innerHTML=f.length?`<div class="section-head"><h2>${d("search")} Результаты</h2><span class="muted small">${f.length}</span></div>${a(f,"search")}`:`<div class="empty-inline">${b(w)}</div>`,(E=u("#ytm-empty"))==null||E.setAttribute("hidden","")},r=async()=>{const f=i.value.trim();if(f){n.hidden=!1,n.innerHTML=`<div class="skel-rows">${'<div class="skeleton skeleton-line"></div>'.repeat(5)}</div>`;try{const w=await us(f);if(e!==o.renderSeq)return;l(w,"Ничего не найдено")}catch(w){if(Ot(w))return;n.innerHTML=`<div class="empty-inline">${b(w.message)}</div>`}}};s.addEventListener("submit",f=>{f.preventDefault(),r()});let p;i.addEventListener("input",()=>{clearTimeout(p),p=setTimeout(()=>{i.value.trim().length>=2&&r()},500)}),(async()=>{const[f,w]=await Promise.allSettled([hs(40),ps(50)]);if(e!==o.renderSeq)return;f.status==="fulfilled"&&f.value.length&&(o.ytmLists.history=f.value,c("#ytm-history-section","history",f.value)),w.status==="fulfilled"&&w.value.length&&(o.ytmLists.liked=w.value,c("#ytm-liked-section","liked",w.value)),!o.ytmLists.history.length&&!o.ytmLists.liked.length&&(u("#ytm-empty").hidden=!1)})()}document.addEventListener("click",async e=>{var s,i,n,c;const t=e.target.closest("[data-action]");if(!t)return;const a=t.dataset.action;if(a==="open"){location.hash=t.dataset.href;return}if(a==="play-row"){const l=Number(t.dataset.index);if(e.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]'))return;at(!1),await h.playTracks(o.currentTracks,l);return}if(a==="play-list-row"){const l=Number(t.dataset.index);if(e.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]'))return;const r=(s=o.lists)==null?void 0:s[t.dataset.list];if(!(r!=null&&r.length))return;at(!1),await h.playTracks(r,l);return}if(a==="play-ytm-row"){const l=Number(t.dataset.index);if(e.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]'))return;const r=(i=o.ytmLists)==null?void 0:i[t.dataset.list];if(!(r!=null&&r.length))return;at(!1),await h.playTracks(r,l);return}if(a==="play-all"){if(!o.currentTracks.length)return y("Список пуст","warn");at(!1),await h.playTracks(o.currentTracks,0);return}if(a==="shuffle-all"){if(!o.currentTracks.length)return y("Список пуст","warn");at(!1),await h.playTracks(o.currentTracks,0,{shuffle:!0});return}if(a==="shuffle-library"){const l=await ba();o.currentTracks=l,await h.playTracks(l,0,{shuffle:!0});return}if(a==="start-live"){await Fn();return}if(a==="play-mix"){await Bn(Number(t.dataset.index));return}if(a==="open-settings"){await Wt();return}if(a==="theme"){await Ks(t.dataset.theme),G('[data-action="theme"]').forEach(l=>l.classList.toggle("active",l.dataset.theme===o.theme));return}if(a==="color-mode"){const l=t.dataset.mode;localStorage.setItem("colorMode",l),la(l),G('[data-action="color-mode"]').forEach(r=>r.classList.toggle("active",r.dataset.mode===l)),y(`Режим: ${l==="dark"?"тёмный":l==="light"?"светлый":"системный"}`);return}if(a==="toggle-password"){const l=document.getElementById(t.dataset.target);if(!l)return;const r=l.type==="password";l.type=r?"text":"password",t.innerHTML=d(r?"eyeOff":"eye"),t.setAttribute("aria-label",r?"Скрыть пароль":"Показать пароль");return}if(a==="density"){const l=t.dataset.value;Js(l),G('[data-action="density"]').forEach(r=>r.classList.toggle("active",r.dataset.value===l));return}if(a==="logout"){await ns().catch(()=>{}),location.reload();return}if(a==="ytm-disconnect"){if(!confirm("Отключить YouTube Music? Cookies и скачанный кэш этого профиля будут удалены."))return;try{await Di(),o.ytmStatus={connected:!1,account:null},y("YouTube Music отключён"),C()}catch(l){y(l.message,"error")}return}if(a==="ytm-reconnect"){o.ytmStatus={connected:!1,account:null},u("#view").innerHTML="",C();return}if(a==="run-search"){ra(t.dataset.query||"");return}if(a==="clear-searches"){localStorage.removeItem(wa),C();return}if(a==="ytm-preset"){const l=t.dataset.query||"";if(!l)return;const r=u("#ytm-results");r&&(r.hidden=!1,r.innerHTML=`<div class="empty-inline">Ищу «${b(l)}»…</div>`);try{const p=await us(l);o.ytmLists=o.ytmLists||{},o.ytmLists.search=p,r&&(r.innerHTML=p.length?`<div class="section-head"><h2>${d("search")} ${b(l)}</h2><span class="muted small">${p.length}</span></div>${Q(p,{showCover:!0,rowAction:"play-ytm-row",rowList:"search"})}`:'<div class="empty-inline">Ничего не найдено</div>')}catch(p){r&&(r.innerHTML=`<div class="empty-inline">${b(p.message)}</div>`)}return}if(a==="ytm-liked"){const l=u("#ytm-liked-section"),r=u("#ytm-liked");r&&(r.innerHTML='<div class="empty-inline">Загружаю лайки…</div>');try{const p=await ps(200);o.ytmLists=o.ytmLists||{},o.ytmLists.liked=p,l&&(l.hidden=!1),r&&(r.innerHTML=p.length?Q(p,{showCover:!0,rowAction:"play-ytm-row",rowList:"liked"}):'<div class="empty-inline">В YouTube Music пока нет лайков</div>'),y(`Лайков: ${p.length}`)}catch(p){r&&(r.innerHTML=`<div class="empty-inline">${b(p.message)}</div>`)}return}if(a==="invite-copy"){await((n=navigator.clipboard)==null?void 0:n.writeText(ds(t.dataset.code)).catch(()=>{})),y("Ссылка скопирована");return}if(a==="invite-revoke"){if(!confirm("Отозвать приглашение?"))return;try{await Li(t.dataset.code),y("Приглашение отозвано"),C()}catch(l){y(l.message,"error")}return}if(a==="play-album"){e.stopPropagation(),at(!1),await zn(t.dataset.id);return}if(a==="play-artist"){at(!1),await Ja(t.dataset.id,!1);return}if(a==="shuffle-artist"){at(!1),await Ja(t.dataset.id,!0);return}if(a==="like"){e.stopPropagation(),await Ee(t.dataset.id);return}if(a==="like-current"){h.track&&await Ee(h.track.id),ee();return}if(a==="dislike"){e.stopPropagation(),await Ka(t.dataset.id);return}if(a==="dislike-current"){h.track&&await Ka(h.track.id),ee();return}if(a==="add-to-playlist"){e.stopPropagation(),await qn(t.dataset.id);return}if(a==="remove-from-playlist"){e.stopPropagation();try{await ri(t.dataset.playlist,Number(t.dataset.index)),y("Трек убран из плейлиста"),C()}catch(l){y(l.message,"error")}return}if(a==="resume"){h.track?(h.clearRestored(),await h.toggle()):o.currentTracks.length&&await h.playTracks(o.currentTracks,0),location.hash.startsWith("#/home")&&C();return}if(a==="toggle"){!h.track&&o.currentTracks.length?await h.playTracks(o.currentTracks,0):await h.toggle();return}if(a==="prev")return h.previous();if(a==="next")return h.next();if(a==="shuffle")return h.toggleShuffle();if(a==="repeat")return h.cycleRepeat();if(a==="sleep"){Hn();return}if(a==="mute")return h.toggleMute();if(a==="nowplaying")return zt(o.npTab);if(a==="open-lyrics")return zt("lyrics");if(a==="open-eq")return zt("eq");if(a==="open-queue")return zt("queue");if(a==="close-np")return Te();if(a==="jump-album"){(c=h.track)!=null&&c.albumId&&(Te(),location.hash=`#/album/${h.track.albumId}`);return}if(a==="play-queue"){at(!1),await h.playAt(Number(t.dataset.index));return}if(a==="new-playlist")return e.preventDefault(),In();if(a==="delete-playlist"){if(!confirm("Удалить этот плейлист?"))return;await oi(t.dataset.id),y("Плейлист удалён"),$.playlists=null,location.hash="#/playlists";return}if(a==="reload")return C();if(a==="reset-eq"){h.resetEq(),ze(u("#np-panel"));return}if(a==="refresh-lyrics"){if(!h.track)return;o.lyricsRefresh=!0,o.lyricsTrackId=null,Os(u("#np-panel"),h.track);return}});u("#np").addEventListener("click",e=>{const t=e.target.closest("[data-np-tab]");t&&Nn(t.dataset.npTab);const a=e.target.closest("[data-eq-preset]");a&&(h.applyEqPreset(a.dataset.eqPreset),ze(u("#np-panel")))});u("#np").addEventListener("input",e=>{if(e.target.id==="np-seek"){h.seekTo(Number(e.target.value)),_t();return}if(e.target.id==="np-volume"){h.setVolume(Number(e.target.value)),oe();return}});u("#np").addEventListener("change",e=>{var t;e.target.id==="eq-enabled"&&(h.setEqEnabled(e.target.checked),(t=u(".eq"))==null||t.classList.toggle("disabled",!e.target.checked))});u("#seek").addEventListener("input",e=>{h.seekTo(Number(e.target.value)),_t()});u("#volume").addEventListener("input",e=>{h.setVolume(Number(e.target.value)),oe()});u("#playerbar").addEventListener("wheel",e=>{h.track&&(e.preventDefault(),h.setVolume(h.volumePercent+(e.deltaY<0?5:-5)),oe())},{passive:!1});document.addEventListener("keydown",e=>{var a;const t=["INPUT","TEXTAREA"].includes((a=document.activeElement)==null?void 0:a.tagName);if(e.code==="Space"&&!t&&h.track&&(e.preventDefault(),h.toggle()),e.key==="ArrowRight"&&!t&&e.shiftKey&&h.seekBy(5),e.key==="ArrowLeft"&&!t&&e.shiftKey&&h.seekBy(-5),!t&&!e.ctrlKey&&!e.metaKey&&!e.altKey){const s=e.key.toLowerCase();s==="l"&&h.track&&(e.preventDefault(),Ee(h.track.id)),s==="n"&&(e.preventDefault(),h.next()),s==="p"&&(e.preventDefault(),h.previous()),s==="m"&&(e.preventDefault(),h.toggleMute()),s==="s"&&(e.preventDefault(),h.toggleShuffle()),s==="r"&&(e.preventDefault(),h.cycleRepeat()),e.key==="?"&&(e.preventDefault(),On())}(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"&&(e.preventDefault(),u("#search-input").focus()),e.key==="Escape"&&(u("#modal-root").innerHTML?it():Te())});let Le=0,_e=0,xe=0;u("#playerbar").addEventListener("touchstart",e=>{Le=e.touches[0].clientY,_e=e.touches[0].clientX,xe=Date.now()});u("#playerbar").addEventListener("touchend",e=>{const t=e.changedTouches[0].clientY,a=e.changedTouches[0].clientX,s=Le-t,i=Math.abs(a-_e),n=Date.now()-xe;s>80&&n<300&&i<50&&(e.preventDefault(),zt(o.npTab||"lyrics"))});const Je=u(".np-sheet");Je&&(Je.addEventListener("touchstart",e=>{e.target.closest('.np-seek-bar, .eq-band, input[type="range"]')||(Le=e.touches[0].clientY,_e=e.touches[0].clientX,xe=Date.now())}),Je.addEventListener("touchend",e=>{const t=e.changedTouches[0].clientY,a=e.changedTouches[0].clientX,s=t-Le,i=Math.abs(a-_e),n=Date.now()-xe;s>100&&n<300&&i<50&&(e.preventDefault(),Te())}));let Ke=0,Qe=null;u("#pb-cover").addEventListener("touchend",e=>{const t=Date.now(),a=e.target;if(t-Ke<300&&a===Qe){if(e.preventDefault(),h.track){Ee(h.track.id);const s=u("#pb-cover");s.style.transform="scale(0.92)",setTimeout(()=>{s.style.transform=""},150)}Ke=0,Qe=null}else Ke=t,Qe=a});let K=null;function Qs(e,t){const a=e.getBoundingClientRect(),s=Math.min(1,Math.max(0,(t-a.top)/a.height));return Math.round(12-s*24)}function ar(e,t){const a=Number(e.dataset.eqBand),s=(12-t)/24*100,i=e.querySelector(".eq-thumb"),n=e.querySelector(".eq-fill");i&&(i.style.top=`${s}%`),n&&(n.style.top=`${Math.min(s,50)}%`,n.style.height=`${Math.abs(50-s)}%`),e.setAttribute("aria-valuenow",String(t));const c=u(`#eq-val-${a}`);c&&(c.textContent=`${t>0?"+":""}${t}`)}function Ie(e,t,a){const s=Number(e.dataset.eqBand);ar(e,t),h.eqState.gains[s]=t,h.setEqGain(s,t),a&&(h.eqState.preset="custom",G(".eq-presets .chip-btn").forEach(i=>i.classList.toggle("active",i.dataset.eqPreset==="custom")))}document.addEventListener("pointerdown",e=>{var a;const t=e.target.closest(".eq-track");t&&(e.preventDefault(),K={el:t,value:Qs(t,e.clientY)},(a=t.setPointerCapture)==null||a.call(t,e.pointerId),Ie(t,K.value,!1))});document.addEventListener("pointermove",e=>{K&&(e.preventDefault(),K.value=Qs(K.el,e.clientY),Ie(K.el,K.value,!1))});document.addEventListener("pointerup",()=>{K&&(Ie(K.el,K.value,!0),K=null)});document.addEventListener("pointercancel",()=>{K=null});document.addEventListener("keydown",e=>{var i,n;const t=(n=(i=e.target).closest)==null?void 0:n.call(i,".eq-track");if(!t)return;const a=e.key==="ArrowUp"?1:e.key==="ArrowDown"?-1:0;if(!a)return;e.preventDefault();const s=Number(t.getAttribute("aria-valuenow"))||0;Ie(t,Math.max(-12,Math.min(12,s+a)),!0)});const te=u("#search-input");let es;te.addEventListener("input",()=>{clearTimeout(es);const e=te.value.trim();e.length!==0&&(es=setTimeout(()=>{e.length>=2&&(location.hash=`#/search?q=${encodeURIComponent(e)}`)},350))});te.addEventListener("keydown",e=>{if(e.key==="Enter"){const t=te.value.trim();if(!t)return;te.blur(),zs(t);const a=`#/search?q=${encodeURIComponent(t)}`;location.hash===a?C():location.hash=a}});u("#rescan-btn").addEventListener("click",async()=>{u("#rescan-btn").classList.add("spin");const e=Date.now();try{await cs(),setTimeout(async()=>{u("#rescan-btn").classList.remove("spin"),await wn()},Math.max(2500,Date.now()-e))}catch(t){u("#rescan-btn").classList.remove("spin"),Ot(t)||y(t.message,"error")}});u("#np-pill").addEventListener("click",()=>zt(o.npTab));h.addEventListener("track",()=>{Sa(),o.npOpen&&ee(),re(),_t()});h.addEventListener("time",()=>{_t()});h.addEventListener("buffer",js);h.addEventListener("state",re);h.addEventListener("mode",ka);h.addEventListener("volume",oe);h.addEventListener("sleep",$a);h.addEventListener("eq",()=>{o.npTab==="eq"&&o.npOpen&&ze(u("#np-panel"))});h.addEventListener("error",e=>y(e.detail,"error"));document.addEventListener("error",e=>{e.target instanceof HTMLImageElement&&(e.target.style.display="none")},!0);window.addEventListener("hashchange",C);h.addEventListener("queueend",async()=>{if(o.liveMode)try{const e=await ls(25),t=new Set(h.queue.map(s=>s.id)),a=e.filter(s=>!t.has(s.id));if(!a.length){y("Live: новых треков не нашлось","warn");return}h.appendTracks(a),await h.next(!0)}catch(e){Ot(e)||y(e.message,"error")}});u("#auth-toggle-register").addEventListener("click",()=>{var e;return Ea(((e=u("#register-invite"))==null?void 0:e.value)||"")});u("#auth-toggle-login").addEventListener("click",()=>{location.hash.startsWith("#/register")&&(location.hash="#/home"),Ht()});u("#register-invite").addEventListener("change",()=>{const e=u("#register-invite").value.trim();e&&Ea(e)});u("#register-form").addEventListener("submit",async e=>{e.preventDefault();const t=u("#register-submit"),a=u("#register-error");a.textContent="",t.disabled=!0;try{await xi({invite:u("#register-invite").value.trim(),username:u("#register-username").value.trim(),password:u("#register-password").value,displayName:u("#register-display").value.trim()}),location.hash="#/home",await Ta()}catch(s){a.textContent=s.message||"Не удалось зарегистрироваться"}finally{t.disabled=!1}});u("#login-form").addEventListener("submit",async e=>{e.preventDefault();const t=u("#login-submit"),a=u("#login-error");a.textContent="",t.disabled=!0;try{await ui(u("#login-username").value.trim(),u("#login-password").value),await Ta()}catch(s){a.textContent=s.message||"Не удалось войти"}finally{t.disabled=!1}});document.addEventListener("keydown",e=>{var t,a;e.key==="Enter"&&!u("#auth-screen").hidden&&((t=document.activeElement)==null?void 0:t.id)==="login-username"&&((a=u("#login-password"))==null||a.focus())});window.addEventListener("pagehide",()=>{h.playId&&h._finalizePlay(!1)});oe();ka();re();_t();$a();Ta();
