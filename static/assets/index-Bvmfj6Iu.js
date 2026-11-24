(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();const Da={home:"M4 20v-8H2L12 3l10 9h-2v8h-6v-6h-4v6H4z",person:"M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z",album:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",music:"M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z",playlist:"M3 6h12v2H3V6zm0 4h12v2H3v-2zm0 4h8v2H3v-2zm12 .5a3.5 3.5 0 1 0 3.5 3.5V9h3V6h-4v8.5a3.5 3.5 0 0 0-2.5-.9z",search:"M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z",play:"M8 5v14l11-7L8 5z",pause:"M6 5h4v14H6V5zm8 0h4v14h-4V5z",prev:"M6 6h2v12H6V6zm3.5 6L18 18V6l-8.5 6z",next:"M16 6h2v12h-2V6zM6 18l8.5-6L6 6v12z",shuffle:"M10.59 9.17 5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z",repeat:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z",repeatOne:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z",volumeUp:"M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.5 4.5 0 0 0 16.5 12zM14 3.23v2.06a6.99 6.99 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54z",volumeDown:"M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.5 4.5 0 0 0 16.5 12z",volumeOff:"M16.5 12a4.5 4.5 0 0 0-2.5-4.03v2.21l2.45 2.45A4.4 4.4 0 0 0 16.5 12zM19 12a7 7 0 0 1-.94 3.51l1.48 1.48A9 9 0 0 0 14 4.75v2.06A7 7 0 0 1 19 12zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25a7 7 0 0 1-2.25 1.2v2.06a9 9 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z",queue:"M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18a3 3 0 1 0 2 2.82V8h3V6h-5z",lyrics:"M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2z",equalizer:"M7 20h2V10H7v10zm4-8h2V4h-2v8zm4 4h2V7h-2v9zM3 20h2v-6H3v6z",close:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",back:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",add:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",delete:"M6 19c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z",heart:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",heartOutline:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z",more:"M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",clock:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z",library:"M4 6H2v14a2 2 0 0 0 2 2h14v-2H4V6zm16-4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-3 9H9V9h8v2zm-2 4H9v-2h6v2zm2-8H9V5h8v2z",refresh:"M17.65 6.35A8 8 0 1 0 19.73 14h-2.08A6 6 0 1 1 12 6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z",edit:"M3 17.25V21h3.75L17.8 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",check:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",wave:"M3 12h2v4H3v-4zm4-4h2v12H7V8zm4-4h2v16h-2V4zm4 6h2v6h-2v-6zm4-2h2v10h-2V8z",radio:"M3.24 6.15C2.51 6.43 2 7.17 2 8v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-.83-.51-1.57-1.24-1.85L12.7 2.3a1 1 0 0 0-.7 0L3.24 6.15zM8 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm10-10H9v2h9v-2zm0 4h-3v2h3v-2z",logout:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5-5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z",thumbDown:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z",thumbUp:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z",chart:"M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z",palette:"M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z",settings:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.03 7.03 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.47.41l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z",chevronDown:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z",chevronRight:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z",ytm:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-13a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-1.5 7.25v-4.5L14.5 12l-4 2.25z",copy:"M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z",link:"M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4a3.1 3.1 0 0 1 0 6.2h-4V17h4a5 5 0 0 0 0-10z",ticket:"M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 1 0 4v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 1 0-4zm-2-1.46a4 4 0 0 0 0 6.92V18H4v-2.54a4 4 0 0 0 0-6.92V6h16v2.54zM11 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z",key:"M12.65 10A6 6 0 1 0 12.65 14H17v4h4v-4h2v-4H12.65zM7 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",lock:"M18 8h-1V6A5 5 0 0 0 7 6v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zM9 6a3 3 0 0 1 6 0v2H9V6zm9 14H6V10h12v10zm-6-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",moreHoriz:"M6 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",queueAdd:"M14 10H3v2h11v-2zm0-4H3v2h11V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM3 16h7v-2H3v2z",sparkle:"M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z",external:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z",shield:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",darkMode:"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8A9.3 9.3 0 0 0 12 3z",lightMode:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2 13h2a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm18 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM11 2v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM5.99 4.58a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06z",expand:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z",sun:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2 13h2a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm18 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM11 2v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM5.99 4.58a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06z",moon:"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8A9.3 9.3 0 0 0 12 3z",menu:"M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z",eye:"M12 5c-5 0-9 4.5-10 7 1 2.5 5 7 10 7s9-4.5 10-7c-1-2.5-5-7-10-7zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",eyeOff:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.44-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2.71 3.16l1.94 1.94C3.29 6.24 2.06 7.94 1 10c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l2.71 2.71 1.27-1.27L3.98 1.89 2.71 3.16zM12 15c-1.03 0-1.96-.42-2.64-1.1l3.54 3.54c-.28.09-.59.14-.9.14z"};function u(e,t=""){const a=Da[e]||Da.music;return`<svg class="icon ${t}" viewBox="0 0 24 24" aria-hidden="true"><path d="${a}"/></svg>`}const xe="1.16.1",Ae="rustream-web";class jt extends Error{constructor(t,a=0,s=""){super(t),this.name="ApiError",this.status=a,this.code=s}}function la(e,t={}){const a=new URLSearchParams({v:xe,c:Ae,f:"json",...t});return`/rest/${e}.view?${a.toString()}`}async function lt(e,t={}){var i;const a=await fetch(la(e,t),{credentials:"same-origin"});if(a.status===401)throw new jt("Требуется вход в аккаунт",401);if(!a.ok)throw new jt(`HTTP ${a.status}`,a.status);const n=(await a.json())["subsonic-response"];if(!n)throw new jt("Некорректный ответ сервера");if(n.status!=="ok")throw new jt(((i=n.error)==null?void 0:i.message)||"Ошибка API");return n}async function M(e,t={}){const a=await fetch(e,{credentials:"same-origin",...t,headers:{"Content-Type":"application/json",...t.headers||{}}});let s=null;try{s=await a.json()}catch{s=null}if(!a.ok){const n=a.status===401?"Требуется вход в аккаунт":`HTTP ${a.status}`;throw new jt((s==null?void 0:s.error)||n,a.status,(s==null?void 0:s.code)||"")}return s}const ca=(e,t=300)=>e?la("getCoverArt",{id:e,size:t}):"",qe=e=>la("stream",{id:e});async function en(){var a;const e=await lt("getArtists"),t=[];for(const s of((a=e.artists)==null?void 0:a.index)||[])for(const n of s.artist||[])t.push(n);return t}const es=e=>lt("getArtist",{id:e}),da=e=>lt("getAlbum",{id:e});async function as(e="alphabeticalByName",t=100,a=0){var n;return((n=(await lt("getAlbumList2",{type:e,size:t,offset:a})).albumList2)==null?void 0:n.album)||[]}async function an(e=500){var a;return((a=(await lt("getRandomSongs",{size:e})).randomSongs)==null?void 0:a.song)||[]}async function sn(e){return(await lt("search3",{query:e,artistCount:30,albumCount:50,songCount:100})).searchResult3||{artist:[],album:[],song:[]}}async function ua(){var t;return((t=(await lt("getPlaylists")).playlists)==null?void 0:t.playlist)||[]}async function nn(e){return(await lt("getPlaylist",{id:e})).playlist}const ss=(e,t=[])=>{const a=new URLSearchParams({v:xe,c:Ae,f:"json",name:e});return t.forEach(s=>a.append("songId",s)),fetch(`/rest/createPlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(s=>s.json()).then(s=>s["subsonic-response"])},rn=(e,t)=>{const a=new URLSearchParams({v:xe,c:Ae,f:"json",playlistId:e,songIdToAdd:t});return fetch(`/rest/updatePlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(s=>s.json())},on=(e,t)=>{const a=new URLSearchParams({v:xe,c:Ae,f:"json",playlistId:e,songIndexToRemove:String(t)});return fetch(`/rest/updatePlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(s=>s.json())},ln=e=>lt("deletePlaylist",{id:e});async function cn(){return(await lt("getStarred2")).starred2||{artist:[],album:[],song:[]}}async function dn(){return M("/api/stats")}async function Ie(){return M("/api/me")}async function un(){return M("/api/session")}async function Qe(){return M("/api/auth/config")}function pn(e,t){return M("/api/auth/login",{method:"POST",body:JSON.stringify({username:e,password:t})})}function ns(){return M("/api/auth/logout",{method:"POST"})}function Pa(e,t){return is({displayName:e,theme:t})}function is(e){return M("/api/me",{method:"PATCH",body:JSON.stringify(e)})}async function hn(){return M("/api/me/ratings")}function fn(e,t){return M("/api/me/ratings",{method:"PUT",body:JSON.stringify({trackId:e,rating:t})})}function He(){return M("/api/admin/lastfm")}function Ca(e,t,a=!1){return M("/api/admin/lastfm",{method:"PUT",body:JSON.stringify({apiKey:e,apiSecret:t,clear:a})})}function mn(e,t){return M("/api/me/password",{method:"POST",body:JSON.stringify({currentPassword:e,newPassword:t})})}function vn({lastfmUsername:e,lastfmSessionKey:t,listenbrainzToken:a}){return M("/api/me/scrobbling",{method:"PUT",body:JSON.stringify({lastfmUsername:e,lastfmSessionKey:t,listenbrainzToken:a})})}async function rs(){return M("/api/me/stats")}async function gn(e,t="web"){return M("/api/plays/start",{method:"POST",body:JSON.stringify({trackId:e,source:t})})}function za(e,t,a=!1){return M("/api/plays/update",{method:"POST",body:JSON.stringify({playId:e,positionMs:t,completed:a})})}async function os(e=40){return(await M(`/api/live/queue?count=${e}`)).tracks||[]}async function bn(){return(await M("/api/live/mixes")).mixes||[]}async function yn(e,t=!1){return M(`/api/lyrics/${encodeURIComponent(e)}${t?"?refresh=1":""}`)}async function ls(){return M("/api/rescan",{method:"POST"})}async function wn(){return(await M("/api/users")).users||[]}function $n({username:e,password:t,displayName:a,isAdmin:s}){return M("/api/users",{method:"POST",body:JSON.stringify({username:e,password:t,displayName:a,isAdmin:s})})}function Sn(){return M("/api/me/history",{method:"DELETE"})}function kn(e){return M(`/api/users/${e}`,{method:"DELETE"})}function En(){return M("/api/lastfm/connect")}function Tn(e=""){return M("/api/lastfm/complete",{method:"POST",body:JSON.stringify({token:e})})}async function Mn(){const e=await M("/api/admin/invites");return(e==null?void 0:e.invites)||[]}async function Ln({note:e,expiresInDays:t,maxUses:a,isAdmin:s}){const n=await M("/api/admin/invites",{method:"POST",body:JSON.stringify({note:e,expiresInDays:t,maxUses:a,isAdmin:s})});return n==null?void 0:n.invite}function _n(e){return M(`/api/admin/invites/${encodeURIComponent(e)}`,{method:"DELETE"})}function xn(e){return M(`/api/auth/invite/${encodeURIComponent(e)}`)}function An({invite:e,username:t,password:a,displayName:s}){return M("/api/auth/register",{method:"POST",body:JSON.stringify({invite:e,username:t,password:a,displayName:s||void 0})})}const cs=e=>`${location.origin}/#/register?invite=${encodeURIComponent(e)}`;function Zt(){return M("/api/me/ytm")}function ds(e){return M("/api/me/ytm",{method:"PUT",body:JSON.stringify({cookies:e})})}function Dn(){return M("/api/me/ytm",{method:"DELETE"})}async function us(e,t=40){const a=new URLSearchParams({q:e,limit:String(t)}),s=await M(`/api/ytm/search?${a.toString()}`);return(s==null?void 0:s.tracks)||[]}async function ps(e=200){const t=await M(`/api/ytm/liked?limit=${e}`);return(t==null?void 0:t.tracks)||[]}async function hs(e=40){const t=await M(`/api/ytm/history?limit=${e}`);return(t==null?void 0:t.tracks)||[]}function Pn(){return M("/api/me/player")}function Cn(e){return M("/api/me/player",{method:"PUT",body:JSON.stringify({state:e})})}/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function zn(e,t,a){return(t=On(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function pt(){return pt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)({}).hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},pt.apply(null,arguments)}function qa(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,s)}return a}function ot(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?qa(Object(a),!0).forEach(function(s){zn(e,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):qa(Object(a)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))})}return e}function qn(e,t){if(e==null)return{};var a,s,n=In(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)a=i[s],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function In(e,t){if(e==null)return{};var a={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;a[s]=e[s]}return a}function Hn(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var s=a.call(e,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function On(e){var t=Hn(e,"string");return typeof t=="symbol"?t:t+""}function Ze(e){"@babel/helpers - typeof";return Ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ze(e)}var Nn="1.15.7";function ut(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var ht=ut(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),ee=ut(/Edge/i),Ia=ut(/firefox/i),Wt=ut(/safari/i)&&!ut(/chrome/i)&&!ut(/android/i),pa=ut(/iP(ad|od|hone)/i),fs=ut(/chrome/i)&&ut(/android/i),ms={capture:!1,passive:!1};function x(e,t,a){e.addEventListener(t,a,!ht&&ms)}function _(e,t,a){e.removeEventListener(t,a,!ht&&ms)}function ve(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function vs(e){return e.host&&e!==document&&e.host.nodeType&&e.host!==e?e.host:e.parentNode}function st(e,t,a,s){if(e){a=a||document;do{if(t!=null&&(t[0]===">"?e.parentNode===a&&ve(e,t):ve(e,t))||s&&e===a)return e;if(e===a)break}while(e=vs(e))}return null}var Ha=/\s+/g;function W(e,t,a){if(e&&t)if(e.classList)e.classList[a?"add":"remove"](t);else{var s=(" "+e.className+" ").replace(Ha," ").replace(" "+t+" "," ");e.className=(s+(a?" "+t:"")).replace(Ha," ")}}function k(e,t,a){var s=e&&e.style;if(s){if(a===void 0)return document.defaultView&&document.defaultView.getComputedStyle?a=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(a=e.currentStyle),t===void 0?a:a[t];!(t in s)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),s[t]=a+(typeof a=="string"?"":"px")}}function zt(e,t){var a="";if(typeof e=="string")a=e;else do{var s=k(e,"transform");s&&s!=="none"&&(a=s+" "+a)}while(!t&&(e=e.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(a)}function gs(e,t,a){if(e){var s=e.getElementsByTagName(t),n=0,i=s.length;if(a)for(;n<i;n++)a(s[n],n);return s}return[]}function rt(){var e=document.scrollingElement;return e||document.documentElement}function I(e,t,a,s,n){if(!(!e.getBoundingClientRect&&e!==window)){var i,c,o,r,p,m,g;if(e!==window&&e.parentNode&&e!==rt()?(i=e.getBoundingClientRect(),c=i.top,o=i.left,r=i.bottom,p=i.right,m=i.height,g=i.width):(c=0,o=0,r=window.innerHeight,p=window.innerWidth,m=window.innerHeight,g=window.innerWidth),(t||a)&&e!==window&&(n=n||e.parentNode,!ht))do if(n&&n.getBoundingClientRect&&(k(n,"transform")!=="none"||a&&k(n,"position")!=="static")){var f=n.getBoundingClientRect();c-=f.top+parseInt(k(n,"border-top-width")),o-=f.left+parseInt(k(n,"border-left-width")),r=c+i.height,p=o+i.width;break}while(n=n.parentNode);if(s&&e!==window){var w=zt(n||e),S=w&&w.a,L=w&&w.d;w&&(c/=L,o/=S,g/=S,m/=L,r=c+m,p=o+g)}return{top:c,left:o,bottom:r,right:p,width:g,height:m}}}function Oa(e,t,a){for(var s=bt(e,!0),n=I(e)[t];s;){var i=I(s)[a],c=void 0;if(c=n>=i,!c)return s;if(s===rt())break;s=bt(s,!1)}return!1}function qt(e,t,a,s){for(var n=0,i=0,c=e.children;i<c.length;){if(c[i].style.display!=="none"&&c[i]!==E.ghost&&(s||c[i]!==E.dragged)&&st(c[i],a.draggable,e,!1)){if(n===t)return c[i];n++}i++}return null}function ha(e,t){for(var a=e.lastElementChild;a&&(a===E.ghost||k(a,"display")==="none"||t&&!ve(a,t));)a=a.previousElementSibling;return a||null}function K(e,t){var a=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==E.clone&&(!t||ve(e,t))&&a++;return a}function Na(e){var t=0,a=0,s=rt();if(e)do{var n=zt(e),i=n.a,c=n.d;t+=e.scrollLeft*i,a+=e.scrollTop*c}while(e!==s&&(e=e.parentNode));return[t,a]}function Rn(e,t){for(var a in e)if(e.hasOwnProperty(a)){for(var s in t)if(t.hasOwnProperty(s)&&t[s]===e[a][s])return Number(a)}return-1}function bt(e,t){if(!e||!e.getBoundingClientRect)return rt();var a=e,s=!1;do if(a.clientWidth<a.scrollWidth||a.clientHeight<a.scrollHeight){var n=k(a);if(a.clientWidth<a.scrollWidth&&(n.overflowX=="auto"||n.overflowX=="scroll")||a.clientHeight<a.scrollHeight&&(n.overflowY=="auto"||n.overflowY=="scroll")){if(!a.getBoundingClientRect||a===document.body)return rt();if(s||t)return a;s=!0}}while(a=a.parentNode);return rt()}function Vn(e,t){if(e&&t)for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);return e}function Oe(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var Gt;function bs(e,t){return function(){if(!Gt){var a=arguments,s=this;a.length===1?e.call(s,a[0]):e.apply(s,a),Gt=setTimeout(function(){Gt=void 0},t)}}}function Yn(){clearTimeout(Gt),Gt=void 0}function ys(e,t,a){e.scrollLeft+=t,e.scrollTop+=a}function ws(e){var t=window.Polymer,a=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):a?a(e).clone(!0)[0]:e.cloneNode(!0)}function $s(e,t,a){var s={};return Array.from(e.children).forEach(function(n){var i,c,o,r;if(!(!st(n,t.draggable,e,!1)||n.animated||n===a)){var p=I(n);s.left=Math.min((i=s.left)!==null&&i!==void 0?i:1/0,p.left),s.top=Math.min((c=s.top)!==null&&c!==void 0?c:1/0,p.top),s.right=Math.max((o=s.right)!==null&&o!==void 0?o:-1/0,p.right),s.bottom=Math.max((r=s.bottom)!==null&&r!==void 0?r:-1/0,p.bottom)}}),s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}var B="Sortable"+new Date().getTime();function jn(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var s=[].slice.call(this.el.children);s.forEach(function(n){if(!(k(n,"display")==="none"||n===E.ghost)){e.push({target:n,rect:I(n)});var i=ot({},e[e.length-1].rect);if(n.thisAnimationDuration){var c=zt(n,!0);c&&(i.top-=c.f,i.left-=c.e)}n.fromRect=i}})}},addAnimationState:function(s){e.push(s)},removeAnimationState:function(s){e.splice(Rn(e,{target:s}),1)},animateAll:function(s){var n=this;if(!this.options.animation){clearTimeout(t),typeof s=="function"&&s();return}var i=!1,c=0;e.forEach(function(o){var r=0,p=o.target,m=p.fromRect,g=I(p),f=p.prevFromRect,w=p.prevToRect,S=o.rect,L=zt(p,!0);L&&(g.top-=L.f,g.left-=L.e),p.toRect=g,p.thisAnimationDuration&&Oe(f,g)&&!Oe(m,g)&&(S.top-g.top)/(S.left-g.left)===(m.top-g.top)/(m.left-g.left)&&(r=Fn(S,f,w,n.options)),Oe(g,m)||(p.prevFromRect=m,p.prevToRect=g,r||(r=n.options.animation),n.animate(p,S,g,r)),r&&(i=!0,c=Math.max(c,r),clearTimeout(p.animationResetTimer),p.animationResetTimer=setTimeout(function(){p.animationTime=0,p.prevFromRect=null,p.fromRect=null,p.prevToRect=null,p.thisAnimationDuration=null},r),p.thisAnimationDuration=r)}),clearTimeout(t),i?t=setTimeout(function(){typeof s=="function"&&s()},c):typeof s=="function"&&s(),e=[]},animate:function(s,n,i,c){if(c){k(s,"transition",""),k(s,"transform","");var o=zt(this.el),r=o&&o.a,p=o&&o.d,m=(n.left-i.left)/(r||1),g=(n.top-i.top)/(p||1);s.animatingX=!!m,s.animatingY=!!g,k(s,"transform","translate3d("+m+"px,"+g+"px,0)"),this.forRepaintDummy=Bn(s),k(s,"transition","transform "+c+"ms"+(this.options.easing?" "+this.options.easing:"")),k(s,"transform","translate3d(0,0,0)"),typeof s.animated=="number"&&clearTimeout(s.animated),s.animated=setTimeout(function(){k(s,"transition",""),k(s,"transform",""),s.animated=!1,s.animatingX=!1,s.animatingY=!1},c)}}}}function Bn(e){return e.offsetWidth}function Fn(e,t,a,s){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-a.top,2)+Math.pow(t.left-a.left,2))*s.animation}var _t=[],Ne={initializeByDefault:!0},ae={mount:function(t){for(var a in Ne)Ne.hasOwnProperty(a)&&!(a in t)&&(t[a]=Ne[a]);_t.forEach(function(s){if(s.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),_t.push(t)},pluginEvent:function(t,a,s){var n=this;this.eventCanceled=!1,s.cancel=function(){n.eventCanceled=!0};var i=t+"Global";_t.forEach(function(c){a[c.pluginName]&&(a[c.pluginName][i]&&a[c.pluginName][i](ot({sortable:a},s)),a.options[c.pluginName]&&a[c.pluginName][t]&&a[c.pluginName][t](ot({sortable:a},s)))})},initializePlugins:function(t,a,s,n){_t.forEach(function(o){var r=o.pluginName;if(!(!t.options[r]&&!o.initializeByDefault)){var p=new o(t,a,t.options);p.sortable=t,p.options=t.options,t[r]=p,pt(s,p.defaults)}});for(var i in t.options)if(t.options.hasOwnProperty(i)){var c=this.modifyOption(t,i,t.options[i]);typeof c<"u"&&(t.options[i]=c)}},getEventProperties:function(t,a){var s={};return _t.forEach(function(n){typeof n.eventProperties=="function"&&pt(s,n.eventProperties.call(a[n.pluginName],t))}),s},modifyOption:function(t,a,s){var n;return _t.forEach(function(i){t[i.pluginName]&&i.optionListeners&&typeof i.optionListeners[a]=="function"&&(n=i.optionListeners[a].call(t[i.pluginName],s))}),n}};function Un(e){var t=e.sortable,a=e.rootEl,s=e.name,n=e.targetEl,i=e.cloneEl,c=e.toEl,o=e.fromEl,r=e.oldIndex,p=e.newIndex,m=e.oldDraggableIndex,g=e.newDraggableIndex,f=e.originalEvent,w=e.putSortable,S=e.extraEventProperties;if(t=t||a&&a[B],!!t){var L,z=t.options,F="on"+s.charAt(0).toUpperCase()+s.substr(1);window.CustomEvent&&!ht&&!ee?L=new CustomEvent(s,{bubbles:!0,cancelable:!0}):(L=document.createEvent("Event"),L.initEvent(s,!0,!0)),L.to=c||a,L.from=o||a,L.item=n||a,L.clone=i,L.oldIndex=r,L.newIndex=p,L.oldDraggableIndex=m,L.newDraggableIndex=g,L.originalEvent=f,L.pullMode=w?w.lastPutMode:void 0;var R=ot(ot({},S),ae.getEventProperties(s,t));for(var tt in R)L[tt]=R[tt];a&&a.dispatchEvent(L),z[F]&&z[F].call(t,L)}}var Xn=["evt"],j=function(t,a){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=s.evt,i=qn(s,Xn);ae.pluginEvent.bind(E)(t,a,ot({dragEl:v,parentEl:P,ghostEl:T,rootEl:A,nextEl:Tt,lastDownEl:pe,cloneEl:D,cloneHidden:gt,dragStarted:Bt,putSortable:O,activeSortable:E.active,originalEvent:n,oldIndex:Pt,oldDraggableIndex:Jt,newIndex:G,newDraggableIndex:vt,hideGhostForTarget:Ts,unhideGhostForTarget:Ms,cloneNowHidden:function(){gt=!0},cloneNowShown:function(){gt=!1},dispatchSortableEvent:function(o){V({sortable:a,name:o,originalEvent:n})}},i))};function V(e){Un(ot({putSortable:O,cloneEl:D,targetEl:v,rootEl:A,oldIndex:Pt,oldDraggableIndex:Jt,newIndex:G,newDraggableIndex:vt},e))}var v,P,T,A,Tt,pe,D,gt,Pt,G,Jt,vt,le,O,Dt=!1,ge=!1,be=[],kt,et,Re,Ve,Ra,Va,Bt,xt,Kt,Qt=!1,ce=!1,he,N,Ye=[],ta=!1,ye=[],De=typeof document<"u",de=pa,Ya=ee||ht?"cssFloat":"float",Wn=De&&!fs&&!pa&&"draggable"in document.createElement("div"),Ss=(function(){if(De){if(ht)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}})(),ks=function(t,a){var s=k(t),n=parseInt(s.width)-parseInt(s.paddingLeft)-parseInt(s.paddingRight)-parseInt(s.borderLeftWidth)-parseInt(s.borderRightWidth),i=qt(t,0,a),c=qt(t,1,a),o=i&&k(i),r=c&&k(c),p=o&&parseInt(o.marginLeft)+parseInt(o.marginRight)+I(i).width,m=r&&parseInt(r.marginLeft)+parseInt(r.marginRight)+I(c).width;if(s.display==="flex")return s.flexDirection==="column"||s.flexDirection==="column-reverse"?"vertical":"horizontal";if(s.display==="grid")return s.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&o.float&&o.float!=="none"){var g=o.float==="left"?"left":"right";return c&&(r.clear==="both"||r.clear===g)?"vertical":"horizontal"}return i&&(o.display==="block"||o.display==="flex"||o.display==="table"||o.display==="grid"||p>=n&&s[Ya]==="none"||c&&s[Ya]==="none"&&p+m>n)?"vertical":"horizontal"},Gn=function(t,a,s){var n=s?t.left:t.top,i=s?t.right:t.bottom,c=s?t.width:t.height,o=s?a.left:a.top,r=s?a.right:a.bottom,p=s?a.width:a.height;return n===o||i===r||n+c/2===o+p/2},Jn=function(t,a){var s;return be.some(function(n){var i=n[B].options.emptyInsertThreshold;if(!(!i||ha(n))){var c=I(n),o=t>=c.left-i&&t<=c.right+i,r=a>=c.top-i&&a<=c.bottom+i;if(o&&r)return s=n}}),s},Es=function(t){function a(i,c){return function(o,r,p,m){var g=o.options.group.name&&r.options.group.name&&o.options.group.name===r.options.group.name;if(i==null&&(c||g))return!0;if(i==null||i===!1)return!1;if(c&&i==="clone")return i;if(typeof i=="function")return a(i(o,r,p,m),c)(o,r,p,m);var f=(c?o:r).options.group.name;return i===!0||typeof i=="string"&&i===f||i.join&&i.indexOf(f)>-1}}var s={},n=t.group;(!n||Ze(n)!="object")&&(n={name:n}),s.name=n.name,s.checkPull=a(n.pull,!0),s.checkPut=a(n.put),s.revertClone=n.revertClone,t.group=s},Ts=function(){!Ss&&T&&k(T,"display","none")},Ms=function(){!Ss&&T&&k(T,"display","")};De&&!fs&&document.addEventListener("click",function(e){if(ge)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),ge=!1,!1},!0);var Et=function(t){if(v){t=t.touches?t.touches[0]:t;var a=Jn(t.clientX,t.clientY);if(a){var s={};for(var n in t)t.hasOwnProperty(n)&&(s[n]=t[n]);s.target=s.rootEl=a,s.preventDefault=void 0,s.stopPropagation=void 0,a[B]._onDragOver(s)}}},Kn=function(t){v&&v.parentNode[B]._isOutsideThisEl(t.target)};function E(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=pt({},t),e[B]=this;var a={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return ks(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(c,o){c.setData("Text",o.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:E.supportPointer!==!1&&"PointerEvent"in window&&(!Wt||pa),emptyInsertThreshold:5};ae.initializePlugins(this,e,a);for(var s in a)!(s in t)&&(t[s]=a[s]);Es(t);for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));this.nativeDraggable=t.forceFallback?!1:Wn,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?x(e,"pointerdown",this._onTapStart):(x(e,"mousedown",this._onTapStart),x(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(x(e,"dragover",this),x(e,"dragenter",this)),be.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),pt(this,jn())}E.prototype={constructor:E,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(xt=null)},_getDirection:function(t,a){return typeof this.options.direction=="function"?this.options.direction.call(this,t,a,v):this.options.direction},_onTapStart:function(t){if(t.cancelable){var a=this,s=this.el,n=this.options,i=n.preventOnFilter,c=t.type,o=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,r=(o||t).target,p=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||r,m=n.filter;if(ii(s),!v&&!(/mousedown|pointerdown/.test(c)&&t.button!==0||n.disabled)&&!p.isContentEditable&&!(!this.nativeDraggable&&Wt&&r&&r.tagName.toUpperCase()==="SELECT")&&(r=st(r,n.draggable,s,!1),!(r&&r.animated)&&pe!==r)){if(Pt=K(r),Jt=K(r,n.draggable),typeof m=="function"){if(m.call(this,t,r,this)){V({sortable:a,rootEl:p,name:"filter",targetEl:r,toEl:s,fromEl:s}),j("filter",a,{evt:t}),i&&t.preventDefault();return}}else if(m&&(m=m.split(",").some(function(g){if(g=st(p,g.trim(),s,!1),g)return V({sortable:a,rootEl:g,name:"filter",targetEl:r,fromEl:s,toEl:s}),j("filter",a,{evt:t}),!0}),m)){i&&t.preventDefault();return}n.handle&&!st(p,n.handle,s,!1)||this._prepareDragStart(t,o,r)}}},_prepareDragStart:function(t,a,s){var n=this,i=n.el,c=n.options,o=i.ownerDocument,r;if(s&&!v&&s.parentNode===i){var p=I(s);if(A=i,v=s,P=v.parentNode,Tt=v.nextSibling,pe=s,le=c.group,E.dragged=v,kt={target:v,clientX:(a||t).clientX,clientY:(a||t).clientY},Ra=kt.clientX-p.left,Va=kt.clientY-p.top,this._lastX=(a||t).clientX,this._lastY=(a||t).clientY,v.style["will-change"]="all",r=function(){if(j("delayEnded",n,{evt:t}),E.eventCanceled){n._onDrop();return}n._disableDelayedDragEvents(),!Ia&&n.nativeDraggable&&(v.draggable=!0),n._triggerDragStart(t,a),V({sortable:n,name:"choose",originalEvent:t}),W(v,c.chosenClass,!0)},c.ignore.split(",").forEach(function(m){gs(v,m.trim(),je)}),x(o,"dragover",Et),x(o,"mousemove",Et),x(o,"touchmove",Et),c.supportPointer?(x(o,"pointerup",n._onDrop),!this.nativeDraggable&&x(o,"pointercancel",n._onDrop)):(x(o,"mouseup",n._onDrop),x(o,"touchend",n._onDrop),x(o,"touchcancel",n._onDrop)),Ia&&this.nativeDraggable&&(this.options.touchStartThreshold=4,v.draggable=!0),j("delayStart",this,{evt:t}),c.delay&&(!c.delayOnTouchOnly||a)&&(!this.nativeDraggable||!(ee||ht))){if(E.eventCanceled){this._onDrop();return}c.supportPointer?(x(o,"pointerup",n._disableDelayedDrag),x(o,"pointercancel",n._disableDelayedDrag)):(x(o,"mouseup",n._disableDelayedDrag),x(o,"touchend",n._disableDelayedDrag),x(o,"touchcancel",n._disableDelayedDrag)),x(o,"mousemove",n._delayedDragTouchMoveHandler),x(o,"touchmove",n._delayedDragTouchMoveHandler),c.supportPointer&&x(o,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(r,c.delay)}else r()}},_delayedDragTouchMoveHandler:function(t){var a=t.touches?t.touches[0]:t;Math.max(Math.abs(a.clientX-this._lastX),Math.abs(a.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){v&&je(v),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;_(t,"mouseup",this._disableDelayedDrag),_(t,"touchend",this._disableDelayedDrag),_(t,"touchcancel",this._disableDelayedDrag),_(t,"pointerup",this._disableDelayedDrag),_(t,"pointercancel",this._disableDelayedDrag),_(t,"mousemove",this._delayedDragTouchMoveHandler),_(t,"touchmove",this._delayedDragTouchMoveHandler),_(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,a){a=a||t.pointerType=="touch"&&t,!this.nativeDraggable||a?this.options.supportPointer?x(document,"pointermove",this._onTouchMove):a?x(document,"touchmove",this._onTouchMove):x(document,"mousemove",this._onTouchMove):(x(v,"dragend",this),x(A,"dragstart",this._onDragStart));try{document.selection?fe(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,a){if(Dt=!1,A&&v){j("dragStarted",this,{evt:a}),this.nativeDraggable&&x(document,"dragover",Kn);var s=this.options;!t&&W(v,s.dragClass,!1),W(v,s.ghostClass,!0),E.active=this,t&&this._appendGhost(),V({sortable:this,name:"start",originalEvent:a})}else this._nulling()},_emulateDragOver:function(){if(et){this._lastX=et.clientX,this._lastY=et.clientY,Ts();for(var t=document.elementFromPoint(et.clientX,et.clientY),a=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(et.clientX,et.clientY),t!==a);)a=t;if(v.parentNode[B]._isOutsideThisEl(t),a)do{if(a[B]){var s=void 0;if(s=a[B]._onDragOver({clientX:et.clientX,clientY:et.clientY,target:t,rootEl:a}),s&&!this.options.dragoverBubble)break}t=a}while(a=vs(a));Ms()}},_onTouchMove:function(t){if(kt){var a=this.options,s=a.fallbackTolerance,n=a.fallbackOffset,i=t.touches?t.touches[0]:t,c=T&&zt(T,!0),o=T&&c&&c.a,r=T&&c&&c.d,p=de&&N&&Na(N),m=(i.clientX-kt.clientX+n.x)/(o||1)+(p?p[0]-Ye[0]:0)/(o||1),g=(i.clientY-kt.clientY+n.y)/(r||1)+(p?p[1]-Ye[1]:0)/(r||1);if(!E.active&&!Dt){if(s&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<s)return;this._onDragStart(t,!0)}if(T){c?(c.e+=m-(Re||0),c.f+=g-(Ve||0)):c={a:1,b:0,c:0,d:1,e:m,f:g};var f="matrix(".concat(c.a,",").concat(c.b,",").concat(c.c,",").concat(c.d,",").concat(c.e,",").concat(c.f,")");k(T,"webkitTransform",f),k(T,"mozTransform",f),k(T,"msTransform",f),k(T,"transform",f),Re=m,Ve=g,et=i}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!T){var t=this.options.fallbackOnBody?document.body:A,a=I(v,!0,de,!0,t),s=this.options;if(de){for(N=t;k(N,"position")==="static"&&k(N,"transform")==="none"&&N!==document;)N=N.parentNode;N!==document.body&&N!==document.documentElement?(N===document&&(N=rt()),a.top+=N.scrollTop,a.left+=N.scrollLeft):N=rt(),Ye=Na(N)}T=v.cloneNode(!0),W(T,s.ghostClass,!1),W(T,s.fallbackClass,!0),W(T,s.dragClass,!0),k(T,"transition",""),k(T,"transform",""),k(T,"box-sizing","border-box"),k(T,"margin",0),k(T,"top",a.top),k(T,"left",a.left),k(T,"width",a.width),k(T,"height",a.height),k(T,"opacity","0.8"),k(T,"position",de?"absolute":"fixed"),k(T,"zIndex","100000"),k(T,"pointerEvents","none"),E.ghost=T,t.appendChild(T),k(T,"transform-origin",Ra/parseInt(T.style.width)*100+"% "+Va/parseInt(T.style.height)*100+"%")}},_onDragStart:function(t,a){var s=this,n=t.dataTransfer,i=s.options;if(j("dragStart",this,{evt:t}),E.eventCanceled){this._onDrop();return}j("setupClone",this),E.eventCanceled||(D=ws(v),D.removeAttribute("id"),D.draggable=!1,D.style["will-change"]="",this._hideClone(),W(D,this.options.chosenClass,!1),E.clone=D),s.cloneId=fe(function(){j("clone",s),!E.eventCanceled&&(s.options.removeCloneOnHide||A.insertBefore(D,v),s._hideClone(),V({sortable:s,name:"clone"}))}),!a&&W(v,i.dragClass,!0),a?(ge=!0,s._loopId=setInterval(s._emulateDragOver,50)):(_(document,"mouseup",s._onDrop),_(document,"touchend",s._onDrop),_(document,"touchcancel",s._onDrop),n&&(n.effectAllowed="move",i.setData&&i.setData.call(s,n,v)),x(document,"drop",s),k(v,"transform","translateZ(0)")),Dt=!0,s._dragStartId=fe(s._dragStarted.bind(s,a,t)),x(document,"selectstart",s),Bt=!0,window.getSelection().removeAllRanges(),Wt&&k(document.body,"user-select","none")},_onDragOver:function(t){var a=this.el,s=t.target,n,i,c,o=this.options,r=o.group,p=E.active,m=le===r,g=o.sort,f=O||p,w,S=this,L=!1;if(ta)return;function z(Yt,Zs){j(Yt,S,ot({evt:t,isOwner:m,axis:w?"vertical":"horizontal",revert:c,dragRect:n,targetRect:i,canSort:g,fromSortable:f,target:s,completed:R,onMove:function(Aa,tn){return ue(A,a,v,n,Aa,I(Aa),t,tn)},changed:tt},Zs))}function F(){z("dragOverAnimationCapture"),S.captureAnimationState(),S!==f&&f.captureAnimationState()}function R(Yt){return z("dragOverCompleted",{insertion:Yt}),Yt&&(m?p._hideClone():p._showClone(S),S!==f&&(W(v,O?O.options.ghostClass:p.options.ghostClass,!1),W(v,o.ghostClass,!0)),O!==S&&S!==E.active?O=S:S===E.active&&O&&(O=null),f===S&&(S._ignoreWhileAnimating=s),S.animateAll(function(){z("dragOverAnimationComplete"),S._ignoreWhileAnimating=null}),S!==f&&(f.animateAll(),f._ignoreWhileAnimating=null)),(s===v&&!v.animated||s===a&&!s.animated)&&(xt=null),!o.dragoverBubble&&!t.rootEl&&s!==document&&(v.parentNode[B]._isOutsideThisEl(t.target),!Yt&&Et(t)),!o.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),L=!0}function tt(){G=K(v),vt=K(v,o.draggable),V({sortable:S,name:"change",toEl:a,newIndex:G,newDraggableIndex:vt,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),s=st(s,o.draggable,a,!0),z("dragOver"),E.eventCanceled)return L;if(v.contains(t.target)||s.animated&&s.animatingX&&s.animatingY||S._ignoreWhileAnimating===s)return R(!1);if(ge=!1,p&&!o.disabled&&(m?g||(c=P!==A):O===this||(this.lastPutMode=le.checkPull(this,p,v,t))&&r.checkPut(this,p,v,t))){if(w=this._getDirection(t,s)==="vertical",n=I(v),z("dragOverValid"),E.eventCanceled)return L;if(c)return P=A,F(),this._hideClone(),z("revert"),E.eventCanceled||(Tt?A.insertBefore(v,Tt):A.appendChild(v)),R(!0);var U=ha(a,o.draggable);if(!U||ei(t,w,this)&&!U.animated){if(U===v)return R(!1);if(U&&a===t.target&&(s=U),s&&(i=I(s)),ue(A,a,v,n,s,i,t,!!s)!==!1)return F(),U&&U.nextSibling?a.insertBefore(v,U.nextSibling):a.appendChild(v),P=a,tt(),R(!0)}else if(U&&ti(t,w,this)){var wt=qt(a,0,o,!0);if(wt===v)return R(!1);if(s=wt,i=I(s),ue(A,a,v,n,s,i,t,!1)!==!1)return F(),a.insertBefore(v,wt),P=a,tt(),R(!0)}else if(s.parentNode===a){i=I(s);var it=0,$t,Ot=v.parentNode!==a,X=!Gn(v.animated&&v.toRect||n,s.animated&&s.toRect||i,w),Nt=w?"top":"left",ft=Oa(s,"top","top")||Oa(v,"top","top"),Rt=ft?ft.scrollTop:void 0;xt!==s&&($t=i[Nt],Qt=!1,ce=!X&&o.invertSwap||Ot),it=ai(t,s,i,w,X?1:o.swapThreshold,o.invertedSwapThreshold==null?o.swapThreshold:o.invertedSwapThreshold,ce,xt===s);var dt;if(it!==0){var St=K(v);do St-=it,dt=P.children[St];while(dt&&(k(dt,"display")==="none"||dt===T))}if(it===0||dt===s)return R(!1);xt=s,Kt=it;var Vt=s.nextElementSibling,mt=!1;mt=it===1;var oe=ue(A,a,v,n,s,i,t,mt);if(oe!==!1)return(oe===1||oe===-1)&&(mt=oe===1),ta=!0,setTimeout(Zn,30),F(),mt&&!Vt?a.appendChild(v):s.parentNode.insertBefore(v,mt?Vt:s),ft&&ys(ft,0,Rt-ft.scrollTop),P=v.parentNode,$t!==void 0&&!ce&&(he=Math.abs($t-I(s)[Nt])),tt(),R(!0)}if(a.contains(v))return R(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){_(document,"mousemove",this._onTouchMove),_(document,"touchmove",this._onTouchMove),_(document,"pointermove",this._onTouchMove),_(document,"dragover",Et),_(document,"mousemove",Et),_(document,"touchmove",Et)},_offUpEvents:function(){var t=this.el.ownerDocument;_(t,"mouseup",this._onDrop),_(t,"touchend",this._onDrop),_(t,"pointerup",this._onDrop),_(t,"pointercancel",this._onDrop),_(t,"touchcancel",this._onDrop),_(document,"selectstart",this)},_onDrop:function(t){var a=this.el,s=this.options;if(G=K(v),vt=K(v,s.draggable),j("drop",this,{evt:t}),P=v&&v.parentNode,G=K(v),vt=K(v,s.draggable),E.eventCanceled){this._nulling();return}Dt=!1,ce=!1,Qt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),ea(this.cloneId),ea(this._dragStartId),this.nativeDraggable&&(_(document,"drop",this),_(a,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Wt&&k(document.body,"user-select",""),k(v,"transform",""),t&&(Bt&&(t.cancelable&&t.preventDefault(),!s.dropBubble&&t.stopPropagation()),T&&T.parentNode&&T.parentNode.removeChild(T),(A===P||O&&O.lastPutMode!=="clone")&&D&&D.parentNode&&D.parentNode.removeChild(D),v&&(this.nativeDraggable&&_(v,"dragend",this),je(v),v.style["will-change"]="",Bt&&!Dt&&W(v,O?O.options.ghostClass:this.options.ghostClass,!1),W(v,this.options.chosenClass,!1),V({sortable:this,name:"unchoose",toEl:P,newIndex:null,newDraggableIndex:null,originalEvent:t}),A!==P?(G>=0&&(V({rootEl:P,name:"add",toEl:P,fromEl:A,originalEvent:t}),V({sortable:this,name:"remove",toEl:P,originalEvent:t}),V({rootEl:P,name:"sort",toEl:P,fromEl:A,originalEvent:t}),V({sortable:this,name:"sort",toEl:P,originalEvent:t})),O&&O.save()):G!==Pt&&G>=0&&(V({sortable:this,name:"update",toEl:P,originalEvent:t}),V({sortable:this,name:"sort",toEl:P,originalEvent:t})),E.active&&((G==null||G===-1)&&(G=Pt,vt=Jt),V({sortable:this,name:"end",toEl:P,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){j("nulling",this),A=v=P=T=Tt=D=pe=gt=kt=et=Bt=G=vt=Pt=Jt=xt=Kt=O=le=E.dragged=E.ghost=E.clone=E.active=null;var t=this.el;ye.forEach(function(a){t.contains(a)&&(a.checked=!0)}),ye.length=Re=Ve=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":v&&(this._onDragOver(t),Qn(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],a,s=this.el.children,n=0,i=s.length,c=this.options;n<i;n++)a=s[n],st(a,c.draggable,this.el,!1)&&t.push(a.getAttribute(c.dataIdAttr)||ni(a));return t},sort:function(t,a){var s={},n=this.el;this.toArray().forEach(function(i,c){var o=n.children[c];st(o,this.options.draggable,n,!1)&&(s[i]=o)},this),a&&this.captureAnimationState(),t.forEach(function(i){s[i]&&(n.removeChild(s[i]),n.appendChild(s[i]))}),a&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,a){return st(t,a||this.options.draggable,this.el,!1)},option:function(t,a){var s=this.options;if(a===void 0)return s[t];var n=ae.modifyOption(this,t,a);typeof n<"u"?s[t]=n:s[t]=a,t==="group"&&Es(s)},destroy:function(){j("destroy",this);var t=this.el;t[B]=null,_(t,"mousedown",this._onTapStart),_(t,"touchstart",this._onTapStart),_(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(_(t,"dragover",this),_(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(a){a.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),be.splice(be.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!gt){if(j("hideClone",this),E.eventCanceled)return;k(D,"display","none"),this.options.removeCloneOnHide&&D.parentNode&&D.parentNode.removeChild(D),gt=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(gt){if(j("showClone",this),E.eventCanceled)return;v.parentNode==A&&!this.options.group.revertClone?A.insertBefore(D,v):Tt?A.insertBefore(D,Tt):A.appendChild(D),this.options.group.revertClone&&this.animate(v,D),k(D,"display",""),gt=!1}}};function Qn(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function ue(e,t,a,s,n,i,c,o){var r,p=e[B],m=p.options.onMove,g;return window.CustomEvent&&!ht&&!ee?r=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(r=document.createEvent("Event"),r.initEvent("move",!0,!0)),r.to=t,r.from=e,r.dragged=a,r.draggedRect=s,r.related=n||t,r.relatedRect=i||I(t),r.willInsertAfter=o,r.originalEvent=c,e.dispatchEvent(r),m&&(g=m.call(p,r,c)),g}function je(e){e.draggable=!1}function Zn(){ta=!1}function ti(e,t,a){var s=I(qt(a.el,0,a.options,!0)),n=$s(a.el,a.options,T),i=10;return t?e.clientX<n.left-i||e.clientY<s.top&&e.clientX<s.right:e.clientY<n.top-i||e.clientY<s.bottom&&e.clientX<s.left}function ei(e,t,a){var s=I(ha(a.el,a.options.draggable)),n=$s(a.el,a.options,T),i=10;return t?e.clientX>n.right+i||e.clientY>s.bottom&&e.clientX>s.left:e.clientY>n.bottom+i||e.clientX>s.right&&e.clientY>s.top}function ai(e,t,a,s,n,i,c,o){var r=s?e.clientY:e.clientX,p=s?a.height:a.width,m=s?a.top:a.left,g=s?a.bottom:a.right,f=!1;if(!c){if(o&&he<p*n){if(!Qt&&(Kt===1?r>m+p*i/2:r<g-p*i/2)&&(Qt=!0),Qt)f=!0;else if(Kt===1?r<m+he:r>g-he)return-Kt}else if(r>m+p*(1-n)/2&&r<g-p*(1-n)/2)return si(t)}return f=f||c,f&&(r<m+p*i/2||r>g-p*i/2)?r>m+p/2?1:-1:0}function si(e){return K(v)<K(e)?1:-1}function ni(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,a=t.length,s=0;a--;)s+=t.charCodeAt(a);return s.toString(36)}function ii(e){ye.length=0;for(var t=e.getElementsByTagName("input"),a=t.length;a--;){var s=t[a];s.checked&&ye.push(s)}}function fe(e){return setTimeout(e,0)}function ea(e){return clearTimeout(e)}De&&x(document,"touchmove",function(e){(E.active||Dt)&&e.cancelable&&e.preventDefault()});E.utils={on:x,off:_,css:k,find:gs,is:function(t,a){return!!st(t,a,t,!1)},extend:Vn,throttle:bs,closest:st,toggleClass:W,clone:ws,index:K,nextTick:fe,cancelNextTick:ea,detectDirection:ks,getChild:qt,expando:B};E.get=function(e){return e[B]};E.mount=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];t[0].constructor===Array&&(t=t[0]),t.forEach(function(s){if(!s.prototype||!s.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));s.utils&&(E.utils=ot(ot({},E.utils),s.utils)),ae.mount(s)})};E.create=function(e,t){return new E(e,t)};E.version=Nn;var q=[],Ft,aa,sa=!1,Be,Fe,we,Ut;function ri(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(a){var s=a.originalEvent;this.sortable.nativeDraggable?x(document,"dragover",this._handleAutoScroll):this.options.supportPointer?x(document,"pointermove",this._handleFallbackAutoScroll):s.touches?x(document,"touchmove",this._handleFallbackAutoScroll):x(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(a){var s=a.originalEvent;!this.options.dragOverBubble&&!s.rootEl&&this._handleAutoScroll(s)},drop:function(){this.sortable.nativeDraggable?_(document,"dragover",this._handleAutoScroll):(_(document,"pointermove",this._handleFallbackAutoScroll),_(document,"touchmove",this._handleFallbackAutoScroll),_(document,"mousemove",this._handleFallbackAutoScroll)),ja(),me(),Yn()},nulling:function(){we=aa=Ft=sa=Ut=Be=Fe=null,q.length=0},_handleFallbackAutoScroll:function(a){this._handleAutoScroll(a,!0)},_handleAutoScroll:function(a,s){var n=this,i=(a.touches?a.touches[0]:a).clientX,c=(a.touches?a.touches[0]:a).clientY,o=document.elementFromPoint(i,c);if(we=a,s||this.options.forceAutoScrollFallback||ee||ht||Wt){Ue(a,this.options,o,s);var r=bt(o,!0);sa&&(!Ut||i!==Be||c!==Fe)&&(Ut&&ja(),Ut=setInterval(function(){var p=bt(document.elementFromPoint(i,c),!0);p!==r&&(r=p,me()),Ue(a,n.options,p,s)},10),Be=i,Fe=c)}else{if(!this.options.bubbleScroll||bt(o,!0)===rt()){me();return}Ue(a,this.options,bt(o,!1),!1)}}},pt(e,{pluginName:"scroll",initializeByDefault:!0})}function me(){q.forEach(function(e){clearInterval(e.pid)}),q=[]}function ja(){clearInterval(Ut)}var Ue=bs(function(e,t,a,s){if(t.scroll){var n=(e.touches?e.touches[0]:e).clientX,i=(e.touches?e.touches[0]:e).clientY,c=t.scrollSensitivity,o=t.scrollSpeed,r=rt(),p=!1,m;aa!==a&&(aa=a,me(),Ft=t.scroll,m=t.scrollFn,Ft===!0&&(Ft=bt(a,!0)));var g=0,f=Ft;do{var w=f,S=I(w),L=S.top,z=S.bottom,F=S.left,R=S.right,tt=S.width,U=S.height,wt=void 0,it=void 0,$t=w.scrollWidth,Ot=w.scrollHeight,X=k(w),Nt=w.scrollLeft,ft=w.scrollTop;w===r?(wt=tt<$t&&(X.overflowX==="auto"||X.overflowX==="scroll"||X.overflowX==="visible"),it=U<Ot&&(X.overflowY==="auto"||X.overflowY==="scroll"||X.overflowY==="visible")):(wt=tt<$t&&(X.overflowX==="auto"||X.overflowX==="scroll"),it=U<Ot&&(X.overflowY==="auto"||X.overflowY==="scroll"));var Rt=wt&&(Math.abs(R-n)<=c&&Nt+tt<$t)-(Math.abs(F-n)<=c&&!!Nt),dt=it&&(Math.abs(z-i)<=c&&ft+U<Ot)-(Math.abs(L-i)<=c&&!!ft);if(!q[g])for(var St=0;St<=g;St++)q[St]||(q[St]={});(q[g].vx!=Rt||q[g].vy!=dt||q[g].el!==w)&&(q[g].el=w,q[g].vx=Rt,q[g].vy=dt,clearInterval(q[g].pid),(Rt!=0||dt!=0)&&(p=!0,q[g].pid=setInterval((function(){s&&this.layer===0&&E.active._onTouchMove(we);var Vt=q[this.layer].vy?q[this.layer].vy*o:0,mt=q[this.layer].vx?q[this.layer].vx*o:0;typeof m=="function"&&m.call(E.dragged.parentNode[B],mt,Vt,e,we,q[this.layer].el)!=="continue"||ys(q[this.layer].el,mt,Vt)}).bind({layer:g}),24))),g++}while(t.bubbleScroll&&f!==r&&(f=bt(f,!1)));sa=p}},30),Ls=function(t){var a=t.originalEvent,s=t.putSortable,n=t.dragEl,i=t.activeSortable,c=t.dispatchSortableEvent,o=t.hideGhostForTarget,r=t.unhideGhostForTarget;if(a){var p=s||i;o();var m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,g=document.elementFromPoint(m.clientX,m.clientY);r(),p&&!p.el.contains(g)&&(c("spill"),this.onSpill({dragEl:n,putSortable:s}))}};function fa(){}fa.prototype={startIndex:null,dragStart:function(t){var a=t.oldDraggableIndex;this.startIndex=a},onSpill:function(t){var a=t.dragEl,s=t.putSortable;this.sortable.captureAnimationState(),s&&s.captureAnimationState();var n=qt(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(a,n):this.sortable.el.appendChild(a),this.sortable.animateAll(),s&&s.animateAll()},drop:Ls};pt(fa,{pluginName:"revertOnSpill"});function ma(){}ma.prototype={onSpill:function(t){var a=t.dragEl,s=t.putSortable,n=s||this.sortable;n.captureAnimationState(),a.parentNode&&a.parentNode.removeChild(a),n.animateAll()},drop:Ls};pt(ma,{pluginName:"removeOnSpill"});E.mount(new ri);E.mount(ma,fa);const _s=[32,64,125,250,500,1e3,2e3,4e3,8e3,16e3],na={flat:{name:"Ровно",gains:[0,0,0,0,0,0,0,0,0,0]},rock:{name:"Рок",gains:[5,4,2,-1,-2,0,2,3,4,5]},pop:{name:"Поп",gains:[-1,0,2,4,4,2,0,-1,-2,-3]},jazz:{name:"Джаз",gains:[4,3,1,2,-1,-1,0,2,3,4]},bass:{name:"Бас",gains:[8,7,5,2,0,-1,-2,-3,-4,-5]},vocal:{name:"Вокал",gains:[-3,-2,0,3,5,5,3,1,0,-1]},electronic:{name:"Электроника",gains:[5,4,1,0,-2,2,1,2,5,6]}},Ba="rustream.volume",Fa="rustream.eq",Ua="rustream.mode",Xe="rustream.playback.queue",Xa="rustream.playback.position",Wa=1e4;function Ga(e,t){try{return JSON.parse(localStorage.getItem(e))??t}catch{return t}}class oi extends EventTarget{constructor(){super(),this.audio=new Audio,this.audio.preload="auto",this.audio.crossOrigin="anonymous",this.queue=[],this.index=-1,this.shuffle=!1,this.repeat="off",this.track=null,this.playId=null,this.scrobbled=!1,this.liveMode=!1,this.mode=Ga(Ua,{shuffle:!1,repeat:"off"}),this.shuffle=!!this.mode.shuffle,this.repeat=this.mode.repeat||"off",this.volume=Number(localStorage.getItem(Ba)??80),this.audio.volume=Math.min(1,Math.max(0,this.volume/100)),this.eqState=Ga(Fa,{enabled:!0,preset:"flat",gains:[...na.flat.gains]}),this.audioContext=null,this.filters=[],this.sourceNode=null,this._lastPositionWrite=0,this._restoredPause=!1,this.sleepMode=null,this.sleepEndsAt=null,this.sleepStopAfterTrack=!1,this.sleepTimer=null,this.sleepTick=null,this._bindAudio(),window.addEventListener("pagehide",()=>this._storePosition(!0))}_bindAudio(){this.audio.addEventListener("timeupdate",()=>{this._maybeScrobble(),this._storePosition(),this._emit("time")}),this.audio.addEventListener("durationchange",()=>this._emit("time")),this.audio.addEventListener("progress",()=>this._emit("buffer")),this.audio.addEventListener("loadedmetadata",()=>this._emit("time")),this.audio.addEventListener("play",()=>{!this.playId&&this.track&&this._restoredPause&&(this._restoredPause=!1,this._beginPlay(this.track)),this._storePosition(!0),this._emit("state")}),this.audio.addEventListener("pause",()=>{this._storePosition(!0),this._emit("state")}),this.audio.addEventListener("volumechange",()=>this._emit("volume")),this.audio.addEventListener("ended",()=>this._onEnded()),this.audio.addEventListener("waiting",()=>this._emit("state")),this.audio.addEventListener("playing",()=>this._emit("state")),this.audio.addEventListener("error",()=>{if(!this.track)return;const a=this.track.source==="ytm"||String(this.track.id).startsWith("ytm-")?`YouTube не отдал поток для «${this.track.title}». Проверьте, что трек доступен, и обновите cookies в профиле.`:`Не удалось воспроизвести «${this.track.title}». Файл повреждён или недоступен.`;this.dispatchEvent(new CustomEvent("error",{detail:a}))})}_emit(t){this.dispatchEvent(new CustomEvent(t))}_initAudioGraph(){if(this.audioContext)return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.audioContext=new t,this.sourceNode=this.audioContext.createMediaElementSource(this.audio),this.filters=_s.map(s=>{const n=this.audioContext.createBiquadFilter();return n.type="peaking",n.frequency.value=s,n.Q.value=1.1,n.gain.value=0,n});let a=this.sourceNode;for(const s of this.filters)a.connect(s),a=s;a.connect(this.audioContext.destination),this._applyEq()}_ensureRunning(){var t;this._initAudioGraph(),((t=this.audioContext)==null?void 0:t.state)==="suspended"&&this.audioContext.resume().catch(()=>{})}_applyEq(){this.filters.length&&this.filters.forEach((t,a)=>{t.gain.value=this.eqState.enabled&&this.eqState.gains[a]||0})}setEqEnabled(t){this.eqState.enabled=t,this._persistEq(),this._applyEq(),this._emit("eq")}setEqGain(t,a){this.eqState.gains[t]=Number(a),this.eqState.preset="custom",this._persistEq(),this._applyEq(),this._emit("eq")}applyEqPreset(t){const a=na[t];a&&(this.eqState.preset=t,this.eqState.gains=[...a.gains],this._persistEq(),this._applyEq(),this._emit("eq"))}resetEq(){this.applyEqPreset("flat")}_persistEq(){localStorage.setItem(Fa,JSON.stringify(this.eqState))}async playTracks(t,a=0,{shuffle:s=!1}={}){t!=null&&t.length&&(this._finalizePlay(!1),this.queue=[...t],s&&(this.shuffle=!0,this._persistMode()),this.index=Math.min(Math.max(0,a),this.queue.length-1),this._storeQueue(),await this._load(this.queue[this.index],!0))}async playAt(t){t<0||t>=this.queue.length||(this.index=t,this._storeQueue(),await this._load(this.queue[t],!0))}async _load(t,a){if(t&&(this._restoredPause=!1,this._finalizePlay(!1),this.track=t,this.audio.src=qe(t.id),this._beginPlay(t),this._updateMediaSession(t),this.dispatchEvent(new CustomEvent("track",{detail:t})),a)){this._ensureRunning();try{await this.audio.play()}catch{}}}async toggle(){this.track&&(this._ensureRunning(),this.audio.paused?await this.audio.play().catch(()=>{}):this.audio.pause())}pause(){this.audio.pause()}async next(t=!1){if(!this.queue.length)return;if(t&&this.repeat==="one"){this.audio.currentTime=0,await this.audio.play().catch(()=>{});return}let a;if(this.shuffle?a=this.queue.length>1?this._randomIndex():this.index:a=this.index+1,a>=this.queue.length)if(this.repeat==="all")a=0;else{this.audio.pause();return}await this.playAt(a)}async previous(){if(!this.queue.length)return;if(this.audio.currentTime>3){this.audio.currentTime=0;return}const t=this.index>0?this.index-1:this.queue.length-1;await this.playAt(t)}moveInQueue(t,a){if(t===a||t<0||a<0||t>=this.queue.length||a>=this.queue.length)return;const[s]=this.queue.splice(t,1);this.queue.splice(a,0,s),this.index===t?this.index=a:t<this.index&&a>=this.index?this.index--:t>this.index&&a<=this.index&&this.index++,this._storeQueue(),this._emit("queue")}_randomIndex(){if(this.queue.length<=1)return this.index;let t=this.index;for(;t===this.index;)t=Math.floor(Math.random()*this.queue.length);return t}async _onEnded(){if(this._finalizePlay(!0),this.sleepStopAfterTrack){this.cancelSleepTimer(),this._emit("state");return}if(this.repeat==="one"){this.audio.currentTime=0,this._beginPlay(this.track),await this.audio.play().catch(()=>{});return}if(this.index>=this.queue.length-1&&this.repeat==="off"&&!this.shuffle){this._emit("state"),this._emit("queueend");return}await this.next(!0)}async _beginPlay(t){this.playId=null,this.scrobbled=!1;try{const a=await gn(t.id);this.playId=(a==null?void 0:a.playId)||null}catch{}}_maybeScrobble(){if(!this.playId||this.scrobbled)return;const t=this.audio.duration;!Number.isFinite(t)||t<30||(this.audio.currentTime>=t/2||this.audio.currentTime>=240)&&(this.scrobbled=!0,za(this.playId,Math.round(this.audio.currentTime*1e3),!0).catch(()=>{}))}_finalizePlay(t){if(!this.playId)return;const a=this.playId;this.playId=null,za(a,Math.round((this.audio.currentTime||0)*1e3),t).catch(()=>{})}appendTracks(t){t!=null&&t.length&&(this.queue.push(...t),this._storeQueue())}toggleShuffle(){this.shuffle=!this.shuffle,this._persistMode(),this._emit("mode")}cycleRepeat(){const t=["off","all","one"];this.repeat=t[(t.indexOf(this.repeat)+1)%t.length],this._persistMode(),this._emit("mode")}_persistMode(){localStorage.setItem(Ua,JSON.stringify({shuffle:this.shuffle,repeat:this.repeat}))}seekTo(t){const a=this.audio.duration;!Number.isFinite(a)||a<=0||(this.audio.currentTime=Math.min(100,Math.max(0,t))/100*a,this._emit("time"))}seekToSeconds(t){const a=this.audio.duration;!Number.isFinite(a)||a<=0||(this.audio.currentTime=Math.min(a,Math.max(0,t)),this._emit("time"))}removeAt(t){t<0||t>=this.queue.length||t===this.index||(this.queue.splice(t,1),t<this.index&&(this.index-=1),this._storeQueue(),this._emit("queue"))}clearQueue(){this._finalizePlay(!1),this.queue=[],this.index=-1,this.track=null,this._restoredPause=!1,this.audio.pause(),this.audio.removeAttribute("src"),this.audio.load(),"mediaSession"in navigator&&(navigator.mediaSession.metadata=null),this._storeQueue(),this._emit("track"),this._emit("state")}seekBy(t){Number.isFinite(this.audio.duration)&&(this.audio.currentTime=Math.min(this.audio.duration,Math.max(0,this.audio.currentTime+t)),this._emit("time"))}setVolume(t){this.volume=Number(t),this.audio.volume=Math.min(1,Math.max(0,this.volume/100)),this.volume>0&&(this.audio.muted=!1),localStorage.setItem(Ba,String(this.volume))}toggleMute(){this.audio.muted=!this.audio.muted,this._emit("volume")}startSleepTimer(t){this.cancelSleepTimer(!0),this.sleepMode="timer",this.sleepEndsAt=Date.now()+Math.max(1,Math.round(t))*6e4;const a=Math.max(0,this.sleepEndsAt-Date.now()-Wa);this.sleepTimer=setTimeout(()=>this._sleepFadeOut(),a),this.sleepTick=setInterval(()=>this._emit("sleep"),15e3),this._emit("sleep")}stopAfterTrack(){this.cancelSleepTimer(!0),this.sleepMode="track",this.sleepStopAfterTrack=!0,this._emit("sleep")}cancelSleepTimer(t=!1){clearTimeout(this.sleepTimer),clearInterval(this.sleepTick),this.sleepTimer=null,this.sleepTick=null,this.sleepEndsAt=null,this.sleepMode=null,this.sleepStopAfterTrack=!1,t||this._emit("sleep")}get sleepRemainingMs(){return this.sleepMode!=="timer"||!this.sleepEndsAt?0:Math.max(0,this.sleepEndsAt-Date.now())}_sleepFadeOut(){clearTimeout(this.sleepTimer),clearInterval(this.sleepTick),this.sleepTimer=null,this.sleepTick=null;const t=20,a=this.audio.volume;let s=0;const n=setInterval(()=>{if(s+=1,s<t){this.audio.volume=Math.max(0,a*(1-s/t));return}clearInterval(n),this.audio.pause(),this.audio.volume=a,this.sleepMode=null,this.sleepEndsAt=null,this._emit("sleep")},Wa/t)}get currentTime(){return this.audio.currentTime||0}get duration(){return Number.isFinite(this.audio.duration)?this.audio.duration:0}get paused(){return this.audio.paused}get volumePercent(){return this.audio.muted?0:Math.round(this.audio.volume*100)}get buffered(){const t=this.duration;if(!t)return{end:0,percent:0,ahead:0};const a=this.audio.currentTime;let s=0;for(let n=0;n<this.audio.buffered.length;n+=1)this.audio.buffered.start(n)<=a+.5&&(s=Math.max(s,this.audio.buffered.end(n)));return{end:s,percent:Math.min(100,s/t*100),ahead:Math.max(0,s-a)}}estimatedBufferedBytes(){var a;const t=((a=this.track)==null?void 0:a.bitRate)||0;return t?t*1e3*this.buffered.ahead/8:0}_storeQueue(){try{const t={queue:this.queue,index:this.index,liveMode:!!this.liveMode,updatedAt:Date.now()};localStorage.setItem(Xe,JSON.stringify(t))}catch{}}setLiveMode(t){this.liveMode=!!t,this._storeQueue()}_storePosition(t=!1){if(!this.track)return;const a=Date.now();if(!(!t&&a-this._lastPositionWrite<2e3)){this._lastPositionWrite=a;try{localStorage.setItem(Xa,JSON.stringify({trackId:this.track.id,position:this.currentTime||0,paused:this.audio.paused,updatedAt:a}))}catch{}}}snapshotState(){return{queue:this.queue,index:this.index,liveMode:this.liveMode,position:Math.max(0,Math.floor(Number(this.audio.currentTime)||0)),updatedAt:Date.now()}}localUpdatedAt(){try{const t=JSON.parse(localStorage.getItem(Xe));return Number(t==null?void 0:t.updatedAt)||0}catch{return 0}}applyRemote(t){var s;if(!((s=t==null?void 0:t.queue)!=null&&s.length)||(this.queue=t.queue,this.index=Math.min(Math.max(0,Number(t.index)||0),this.queue.length-1),this.liveMode=!!t.liveMode,this.track=this.queue[this.index],!this.track))return null;this._restoredPause=!0,this.audio.src=qe(this.track.id),this._updateMediaSession(this.track),this.dispatchEvent(new CustomEvent("track",{detail:this.track}));const a=Number(t.position)||0;if(a>1){const n=()=>{const i=this.audio.duration;(!Number.isFinite(i)||a<i-3)&&(this.audio.currentTime=a,this._emit("time"))};this.audio.readyState>=1?n():this.audio.addEventListener("loadedmetadata",n,{once:!0})}return this._storeQueue(),{track:this.track,liveMode:this.liveMode}}restore(){var s;let t=null;try{t=JSON.parse(localStorage.getItem(Xe))}catch{t=null}if(!((s=t==null?void 0:t.queue)!=null&&s.length)||Date.now()-(t.updatedAt||0)>1e3*60*60*24*7)return null;let a=null;try{a=JSON.parse(localStorage.getItem(Xa))}catch{a=null}if(this.queue=t.queue,this.index=Math.min(Math.max(0,Number(t.index)||0),this.queue.length-1),this.liveMode=!!t.liveMode,this.track=this.queue[this.index],!this.track)return null;if(this._restoredPause=!0,this.audio.src=qe(this.track.id),this._updateMediaSession(this.track),this.dispatchEvent(new CustomEvent("track",{detail:this.track})),(a==null?void 0:a.trackId)===this.track.id&&Number(a.position)>1){const n=()=>{const i=this.audio.duration;Number.isFinite(i)&&a.position<i-3&&(this.audio.currentTime=a.position,this._emit("time"))};this.audio.readyState>=1?n():this.audio.addEventListener("loadedmetadata",n,{once:!0})}return{track:this.track,liveMode:this.liveMode}}clearRestored(){this._restoredPause=!1}_updateMediaSession(t){"mediaSession"in navigator&&(navigator.mediaSession.setActionHandler("seekto",a=>{a.seekTime!==void 0&&this.seekToSeconds(a.seekTime)}),navigator.mediaSession.setActionHandler("seekbackward",a=>{this.seekBy(-(a.seekOffset||10))}),navigator.mediaSession.setActionHandler("seekforward",a=>{this.seekBy(a.seekOffset||10)}),navigator.mediaSession.metadata=new MediaMetadata({title:t.title||"",artist:t.artist||"",album:t.album||"",artwork:t.coverArt?[{src:ca(t.coverArt,512),sizes:"512x512",type:"image/jpeg"}]:[]}),navigator.mediaSession.setActionHandler("play",()=>this.toggle()),navigator.mediaSession.setActionHandler("pause",()=>this.toggle()),navigator.mediaSession.setActionHandler("previoustrack",()=>this.previous()),navigator.mediaSession.setActionHandler("nexttrack",()=>this.next()))}}function Mt(e){if(!Number.isFinite(e)||e<0)return"0:00";const t=Math.floor(e/60),a=Math.floor(e%60);return`${t}:${String(a).padStart(2,"0")}`}function xs(e){const t=Math.round(e/6e4),a=Math.floor(t/60);return a>0?`${a} ч ${t%60} мин`:`${t} мин`}function va(e){if(!e)return"0 Б";const t=["Б","КБ","МБ","ГБ","ТБ"];let a=e,s=0;for(;a>=1024&&s<t.length-1;)a/=1024,s+=1;return`${a>=10||s===0?Math.round(a):a.toFixed(1)} ${t[s]}`}const h=new oi,li=document.getElementById("app"),l={currentTracks:[],favorites:new Set,dislikes:new Set,favoriteAlbums:new Set,theme:"violet",lyrics:null,lyricsTrackId:null,lyricsRefresh:!1,lyricsActiveKey:null,npTab:"lyrics",npOpen:!1,allTracks:null,artists:null,albums:null,stats:null,playlists:null,me:null,meStats:null,authConfig:null,lastfmConfig:null,liveMode:!1,liveMixes:[],renderSeq:0},$={artists:null,albums:null,tracks:null,stats:null,playlists:null,favorites:null,ratings:null,recent:null,meStats:null,liveMixes:null};li.innerHTML=`
  <div class="ambient" aria-hidden="true">
    <span class="blob blob-a"></span>
    <span class="blob blob-b"></span>
    <span class="blob blob-c"></span>
    <span class="grain"></span>
  </div>

  <header class="topbar">
    <a class="brand" href="#/home" aria-label="Rustream — на главную">
      <span class="brand-mark">${u("wave")}</span>
      <span class="brand-name">Rustream</span>
    </a>

    <label class="searchbox">
      ${u("search")}
      <input id="search-input" type="search" placeholder="Артисты, альбомы, треки…" autocomplete="off" />
      <kbd>Ctrl K</kbd>
    </label>

    <div class="topbar-actions">
      <button class="icon-btn" id="rescan-btn" title="Пересканировать библиотеку">${u("refresh")}</button>
      <button class="now-playing-pill" id="np-pill" title="Открыть плеер">
        ${u("wave")}<span>Сейчас играет</span>
      </button>
      <a class="user-btn" id="user-btn" href="#/profile" title="Профиль" aria-label="Профиль">
        <span class="user-avatar" id="user-avatar">?</span>
        <span class="user-name" id="user-name">Профиль</span>
      </a>
    </div>
  </header>

  <div class="shell">
    <nav class="nav" aria-label="Разделы">
      <a href="#/home" data-nav="home" class="nav-item"><span class="nav-icon">${u("home")}</span><span class="nav-label">Главная</span></a>
      <a href="#/live" data-nav="live" class="nav-item"><span class="nav-icon">${u("radio")}</span><span class="nav-label">Live</span></a>
      <a href="#/ytm" data-nav="ytm" class="nav-item"><span class="nav-icon">${u("ytm")}</span><span class="nav-label">YouTube</span></a>
      <a href="#/artists" data-nav="artists" class="nav-item"><span class="nav-icon">${u("person")}</span><span class="nav-label">Артисты</span></a>
      <a href="#/albums" data-nav="albums" class="nav-item"><span class="nav-icon">${u("album")}</span><span class="nav-label">Альбомы</span></a>
      <a href="#/tracks" data-nav="tracks" class="nav-item"><span class="nav-icon">${u("music")}</span><span class="nav-label">Треки</span></a>
      <a href="#/stats" data-nav="stats" class="nav-item"><span class="nav-icon">${u("chart")}</span><span class="nav-label">Статистика</span></a>
      <a href="#/playlists" data-nav="playlists" class="nav-item"><span class="nav-icon">${u("playlist")}</span><span class="nav-label">Плейлисты</span></a>
      <a href="#/favorites" data-nav="favorites" class="nav-item"><span class="nav-icon">${u("heart")}</span><span class="nav-label">Избранное</span></a>
      <a href="#/profile" data-nav="profile" class="nav-item"><span class="nav-icon">${u("person")}</span><span class="nav-label">Профиль</span></a>
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
        <span class="cover-fallback">${u("music")}</span>
        <img id="pb-cover-img" alt="" />
        <span class="pb-cover-overlay">${u("play")}</span>
      </button>
      <div class="pb-meta" data-action="nowplaying" title="Открыть плеер">
        <div class="pb-title" id="pb-title">Ничего не играет</div>
        <div class="pb-artist" id="pb-artist">Выберите трек</div>
      </div>
      <button class="icon-btn like-btn" id="pb-like" data-action="like-current" title="В избранное">${u("heartOutline")}</button>
      <button class="icon-btn dislike-btn" id="pb-dislike" data-action="dislike-current" title="Не нравится">${u("thumbDown")}</button>
    </div>

    <div class="pb-center">
      <div class="pb-controls">
        <button class="icon-btn" id="shuffle-btn" data-action="shuffle" title="Перемешать">${u("shuffle")}</button>
        <button class="icon-btn" data-action="prev" title="Предыдущий">${u("prev")}</button>
        <button class="play-btn" id="play-btn" data-action="toggle" title="Играть">${u("play")}</button>
        <button class="icon-btn" data-action="next" title="Следующий">${u("next")}</button>
        <button class="icon-btn" id="repeat-btn" data-action="repeat" title="Повтор">${u("repeat")}</button>
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
      <button class="icon-btn" id="lyrics-btn" data-action="open-lyrics" title="Текст песни">${u("lyrics")}</button>
      <button class="icon-btn" id="eq-btn" data-action="open-eq" title="Эквалайзер">${u("equalizer")}</button>
      <button class="icon-btn" id="queue-btn" data-action="open-queue" title="Очередь">${u("queue")}</button>
      <div class="volume">
        <button class="icon-btn" id="volume-btn" data-action="mute" title="Звук">${u("volumeUp")}</button>
        <input type="range" id="volume" min="0" max="100" value="${h.volumePercent}" aria-label="Громкость" />
      </div>
    </div>
  </footer>

  <nav class="tabbar" aria-label="Основное меню">
    <a href="#/home" data-tab="home" class="tab-item"><span class="tab-icon">${u("home")}</span><span class="tab-label">Главная</span></a>
    <a href="#/search" data-tab="search" class="tab-item"><span class="tab-icon">${u("search")}</span><span class="tab-label">Поиск</span></a>
    <a href="#/library" data-tab="library" class="tab-item"><span class="tab-icon">${u("album")}</span><span class="tab-label">Медиатека</span></a>
    <a href="#/profile" data-tab="profile" class="tab-item"><span class="tab-icon">${u("person")}</span><span class="tab-label">Профиль</span></a>
  </nav>

  <div class="np" id="np" hidden>
    <div class="np-backdrop" data-action="close-np"></div>
    <div class="np-sheet" role="dialog" aria-modal="true" aria-label="Плеер">
      <div class="np-grabber"></div>
      <div class="np-head">
        <button class="icon-btn" data-action="close-np" title="Свернуть">${u("close")}</button>
        <div class="np-tabs">
          <button class="np-tab" data-np-tab="lyrics">${u("lyrics")}<span>Текст</span></button>
          <button class="np-tab" data-np-tab="eq">${u("equalizer")}<span>Эквалайзер</span></button>
          <button class="np-tab" data-np-tab="queue">${u("queue")}<span>Очередь</span></button>
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
          <span class="icon" id="np-volume-icon">${u("volumeUp")}</span>
          <input id="np-volume" type="range" min="0" max="100" value="${h.volumePercent}" aria-label="Громкость" />
        </div>
      </div>
    </div>
  </div>

  <div id="auth-screen" class="auth-screen" hidden>
    <div class="auth-card">
      <div class="auth-brand">
        <span class="brand-mark">${u("wave")}</span>
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
              <button class="reveal-btn" type="button" data-action="toggle-password" data-target="login-password" aria-label="Показать пароль">${u("eye")}</button>
            </span>
          </label>
          <button class="btn primary full" type="submit" id="login-submit">${u("wave")} Войти</button>
          <p class="auth-error" id="login-error" role="alert"></p>
        </form>
        <button class="text-link auth-switch" type="button" id="auth-toggle-register">${u("ticket")} У меня есть приглашение</button>
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
              <button class="reveal-btn" type="button" data-action="toggle-password" data-target="register-password" aria-label="Показать пароль">${u("eye")}</button>
            </span>
          </label>
          <button class="btn primary full" type="submit" id="register-submit">${u("sparkle")} Зарегистрироваться</button>
          <p class="auth-error" id="register-error" role="alert"></p>
        </form>
        <button class="text-link auth-switch" type="button" id="auth-toggle-login">${u("back")} У меня уже есть аккаунт</button>
      </div>
    </div>
  </div>

  <div id="modal-root"></div>
  <div id="toast" class="toast" role="status" aria-live="polite"></div>
`;const d=(e,t=document)=>t.querySelector(e),J=(e,t=document)=>[...t.querySelectorAll(e)];function b(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ga(e){const t=String(e||"?").trim().split(/\s+/).filter(Boolean);return t.length?t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+t[1][0]).toUpperCase():"?"}function $e(){var e,t;return((e=l.me)==null?void 0:e.displayName)||((t=l.me)==null?void 0:t.username)||"Аккаунт"}function As(e){return(e==null?void 0:e.status)===401}function Ht(e){return As(e)?(It(),!0):!1}function ct(e,{size:t=400,alt:a="",className:s=""}={}){return`<span class="cover ${s}">
    <span class="cover-fallback">${u("music")}</span>
    ${e?`<img src="${ca(e,t)}" alt="${b(a)}" loading="lazy" decoding="async" />`:""}
  </span>`}function y(e,t="info"){const a=d("#toast");a.textContent=e,a.className=`toast show ${t}`,clearTimeout(y._timer),y._timer=setTimeout(()=>{a.className="toast"},t==="error"?6e3:3200)}function Y(){d("#view").innerHTML=`
    <div class="page">
      <div class="skeleton skeleton-title"></div>
      <div class="grid cards">
        ${Array.from({length:8}).map(()=>`<div class="card skeleton-card">
              <div class="skeleton skeleton-cover"></div>
              <div class="skeleton skeleton-line"></div>
              <div class="skeleton skeleton-line short"></div>
            </div>`).join("")}
      </div>
    </div>`}function ci(e){d("#view").innerHTML=`
    <div class="page">
      <div class="empty-state">
        <span class="empty-icon">${u("wave")}</span>
        <h2>Что-то пошло не так</h2>
        <p>${b(e)}</p>
        <button class="btn tonal" data-action="reload">Попробовать снова</button>
      </div>
    </div>`}function yt(e,t,{actions:a="",eyebrow:s=""}={}){return`<header class="page-head">
    <div>
      ${s?`<div class="eyebrow">${b(s)}</div>`:""}
      <h1>${b(e)}</h1>
      ${t?`<p class="muted">${t}</p>`:""}
    </div>
    ${a?`<div class="page-actions">${a}</div>`:""}
  </header>`}function se(e){return`<article class="card" data-action="open" data-href="#/album/${e.id}" tabindex="0">
    <div class="card-cover">${ct(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${b(e.name)}</div>
      <div class="card-sub">${b(e.artist||"Неизвестный артист")}${e.year?` · ${e.year}`:""}</div>
    </div>
    <button class="card-play" data-action="play-album" data-id="${e.id}" title="Слушать альбом">${u("play")}</button>
  </article>`}function ba(e){return`<article class="card artist-card" data-action="open" data-href="#/artist/${e.id}" tabindex="0">
    <div class="card-cover round">${ct(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${b(e.name)}</div>
      <div class="card-sub">${e.albumCount??0} ${H(e.albumCount??0,"альбом","альбома","альбомов")}</div>
    </div>
  </article>`}function H(e,t,a,s){const n=e%10,i=e%100;return n===1&&i!==11?t:n>=2&&n<=4&&(i<12||i>14)?a:s}function di(e){if((e==null?void 0:e.source)==="ytm")return'<span class="track-badge ytm" title="Источник: YouTube Music">YT</span>';const t=((e==null?void 0:e.suffix)||"").toLowerCase();return t&&t!=="flac"&&t!=="mp3"?`<span class="track-badge" title="Формат файла">${b(t.toUpperCase())}</span>`:""}function ui(e,t,{showAlbum:a=!0,showCover:s=!1,playlistId:n=null,rowAction:i="play-row",rowList:c=null}={}){var p;const o=((p=h.track)==null?void 0:p.id)===e.id,r=l.favorites.has(e.id);return`<div class="track-row ${o?"playing":""} ${s?"has-cover":""}" data-action="${i}" data-index="${t}" data-track-id="${b(e.id)}" ${c?`data-list="${c}"`:""} tabindex="0">
    <div class="track-index">
      <span class="track-num">${t+1}</span>
      <span class="track-eq"><i></i><i></i><i></i></span>
    </div>
    ${s?`<span class="track-cover">${ct(e.coverArt||e.albumId,{size:80})}</span>`:""}
    <div class="track-main">
      <div class="track-title">${b(e.title)}</div>
      <div class="track-sub">${b(e.artist||"")}${a&&e.album?` · ${b(e.album)}`:""}</div>
    </div>
    ${di(e)}
    <span class="track-duration">${Mt(e.duration)}</span>
    <button class="icon-btn row-btn like ${r?"active":""}" data-action="like" data-id="${e.id}" title="В избранное">${u(r?"heart":"heartOutline")}</button>
    <button class="icon-btn row-btn dislike ${l.dislikes.has(e.id)?"active":""}" data-action="dislike" data-id="${e.id}" title="Не нравится">${u("thumbDown")}</button>
    ${n?`<button class="icon-btn row-btn" data-action="remove-from-playlist" data-playlist="${n}" data-index="${t}" title="Убрать из плейлиста">${u("delete")}</button>`:`<button class="icon-btn row-btn" data-action="add-to-playlist" data-id="${e.id}" title="Добавить в плейлист">${u("add")}</button>`}
  </div>`}function Z(e,t={}){return e.length?`<div class="track-list">${e.map((a,s)=>ui(a,s,t)).join("")}</div>`:'<div class="empty-inline">Треков пока нет</div>'}function pi(){const e=location.hash.replace(/^#/,"")||"/home",[t,a=""]=e.split("?");return{parts:t.split("/").filter(Boolean),params:new URLSearchParams(a)}}const hi={artist:"artists",album:"albums",playlist:"playlists"},fi=new Set(["artists","albums","tracks","playlists","favorites","stats"]);function mi(e){const t=hi[e]||e;J(".nav-item").forEach(a=>{a.classList.toggle("active",a.dataset.nav===t)}),J(".tab-item").forEach(a=>{const s=a.dataset.tab,n=s===t||s==="library"&&(t==="library"||fi.has(t))||s==="search"&&t==="search";a.classList.toggle("active",n)})}async function C({keepScroll:e=!1}={}){const{parts:t,params:a}=pi(),s=t[0]||"home";if(s==="register"){Ta(a.get("invite")||"");return}if(!l.me){It();return}const n=++l.renderSeq;mi(s);const i=d("#view"),c=i.scrollTop;i.scrollTop=0;try{s==="home"?await Ja(n):s==="live"?await $i(n):s==="stats"?await Si(n):s==="artists"?await ki(n):s==="artist"?await Ei(n,t[1]):s==="albums"?await Ti(n):s==="album"?await Mi(n,t[1]):s==="tracks"?await Li(n):s==="playlists"?await _i(n):s==="playlist"?await Ai(n,t[1]):s==="favorites"?await Di(n):s==="search"?await Pi(n,a.get("q")||""):s==="library"?await Ki(n):s==="profile"?await Qi(n):s==="ytm"?await Zi(n):await Ja(n)}catch(o){if(console.error(o),Ht(o))return;n===l.renderSeq&&ci(o.message||"Ошибка загрузки")}e&&n===l.renderSeq&&(i.scrollTop=c)}async function vi(){return $.stats||($.stats=await dn()),$.stats}async function Ds(){return $.artists||($.artists=await en()),$.artists}async function gi(){return $.albums||($.albums=await as("alphabeticalByArtist",500)),$.albums}async function ya(){if(!$.tracks){const e=await an(500);e.sort((t,a)=>`${t.artist} ${t.album} ${String(t.track).padStart(3,"0")}`.localeCompare(`${a.artist} ${a.album} ${String(a.track).padStart(3,"0")}`,"ru")),$.tracks=e}return $.tracks}async function Ps(){if($.favorites||($.favorites=await cn()),l.favorites=new Set(($.favorites.song||[]).map(e=>e.id)),l.favoriteAlbums=new Set(($.favorites.album||[]).map(e=>e.id)),!$.ratings)try{$.ratings=await hn()}catch{$.ratings={liked:[],disliked:[]}}return l.dislikes=new Set(($.ratings.disliked||[]).filter(e=>!l.favorites.has(e))),$.favorites}async function wa(){return $.meStats||($.meStats=await rs()),l.meStats=$.meStats,$.meStats}async function bi(){return $.liveMixes||($.liveMixes=await bn()),l.liveMixes=$.liveMixes,$.liveMixes}async function yi(){$.artists=null,$.albums=null,$.tracks=null,$.stats=null,$.recent=null,$.meStats=null,$.liveMixes=null,y("Библиотека обновлена"),C()}async function Ja(e){var g;Y();const[t,a,s,n]=await Promise.all([wa(),$.recent?Promise.resolve($.recent):as("newest",12),Ds(),ya()]);if(e!==l.renderSeq)return;$.recent=a;const i=l.ytmStatus||await Zt().catch(()=>null);l.ytmStatus=i;let c=[];if(i!=null&&i.connected&&(c=await hs(10).catch(()=>[])),e!==l.renderSeq)return;const o=[...n].sort(()=>Math.random()-.5).slice(0,6),r=(t.recent||[]).slice(0,6);l.lists={...l.lists||{},quick:o,recent:r},l.ytmLists={...l.ytmLists||{},history:c},l.currentTracks=n;const p=h.track,m=h.queue.length?h.queue:null;d("#view").innerHTML=`
    <div class="page home quick-home">
      <header class="page-head home-head">
        <div>
          <span class="eyebrow"><span class="live-dot"></span>${b(wi())}, ${b($e())}</span>
          <h1>Что послушаем?</h1>
        </div>
        <div class="head-actions">
          <button class="btn primary" data-action="play-all">${u("play")} Слушать всё</button>
          <button class="btn glass" data-action="shuffle-all">${u("shuffle")} Перемешать</button>
        </div>
      </header>

      ${p?`<section class="continue-card">
              <span class="continue-cover">${ct(p.coverArt||p.albumId,{size:120,alt:p.title})}</span>
              <span class="continue-main">
                <span class="eyebrow">Продолжить слушать</span>
                <strong>${b(p.title)}</strong>
                <small>${b(p.artist||"")}${m?` · ${h.index+1} из ${h.queue.length}`:""}</small>
              </span>
              <button class="btn primary" data-action="toggle">${u(h.paused?"play":"pause")} ${h.paused?"Продолжить":"Пауза"}</button>
              <button class="btn ghost" data-action="open-queue">${u("queue")} Очередь</button>
            </section>`:""}

      ${o.length?`<section class="section">
              <div class="section-head">
                <div>
                  <h2>Быстрый выбор</h2>
                  <p class="muted">Случайные треки из вашей библиотеки</p>
                </div>
                <button class="text-link" data-action="shuffle-library">Перемешать всё ${u("next")}</button>
              </div>
              ${Z(o,{showCover:!0,rowAction:"play-list-row",rowList:"quick"})}
            </section>`:""}

      ${r.length?`<section class="section">
              <div class="section-head">
                <div>
                  <h2>Недавно слушали</h2>
                  <p class="muted">Продолжите с любого места</p>
                </div>
                <a class="text-link" href="#/stats">История ${u("next")}</a>
              </div>
              ${Z(r,{showCover:!0,rowAction:"play-list-row",rowList:"recent"})}
            </section>`:""}

      <section class="section">
        <div class="section-head">
          <div>
            <h2>Недавно добавленные</h2>
            <p class="muted">Свежие поступления в библиотеке</p>
          </div>
          <a class="text-link" href="#/albums">Все альбомы ${u("next")}</a>
        </div>
        <div class="grid cards">${a.slice(0,8).map(se).join("")}</div>
      </section>

      ${c.length?`<section class="section">
              <div class="section-head">
                <div>
                  <h2>Из YouTube Music</h2>
                  <p class="muted">Внешний источник — помечено меткой <span class="track-badge ytm inline">YT</span></p>
                </div>
                <a class="text-link" href="#/ytm">Открыть YouTube ${u("next")}</a>
              </div>
              ${Z(c.slice(0,6),{showCover:!0,rowAction:"play-ytm-row",rowList:"history"})}
            </section>`:""}

      <section class="section">
        <div class="section-head">
          <div>
            <h2>Любимые артисты</h2>
            <p class="muted">${(g=t.topArtists)!=null&&g[0]?`Чаще всего вы слушаете ${b(t.topArtists[0].name)}`:"Начните слушать — и здесь появятся ваши артисты"}</p>
          </div>
          <a class="text-link" href="#/artists">Все артисты ${u("next")}</a>
        </div>
        <div class="grid cards artists-row">${s.slice(0,8).map(ba).join("")}</div>
      </section>

      <section class="section home-cta">
        <div class="cta-panel">
          <div>
            <div class="eyebrow">${u("chart")} Ваша статистика</div>
            <h2>${t.plays||0} ${H(t.plays||0,"прослушивание","прослушивания","прослушиваний")}</h2>
            <p class="muted">Часы, любимые артисты, лайки и дизлайки — на отдельной странице.</p>
          </div>
          <a class="btn glass" href="#/stats">${u("chart")} Открыть статистику</a>
        </div>
      </section>
    </div>`}function wi(){const e=new Date().getHours();return e<6?"Доброй ночи":e<12?"Доброе утро":e<18?"Добрый день":"Добрый вечер"}async function $i(e){Y();const[t,a]=await Promise.all([bi(),wa()]);e===l.renderSeq&&(d("#view").innerHTML=`
    <div class="page live-page">
      ${yt("Live","Персональный поток: избранное, любимые артисты и новые находки",{eyebrow:"Автоматический эфир",actions:`<button class="btn primary" data-action="start-live">${u("radio")} ${l.liveMode?"Перезапустить":"Включить Live"}</button>`})}

      <section class="live-hero">
        <div>
          <div class="eyebrow"><span class="live-dot"></span>${l.liveMode?"Эфир идёт":"Готов к запуску"}</div>
          <h2>${l.liveMode?"Поток подбирает следующий трек":"Бесконечный эфир из вашей музыки"}</h2>
          <p class="muted">
            ${a.plays?`Учтено ${a.plays} прослушиваний. Чем больше слушаете, тем точнее подбор.`:"Пока нет истории — начните с избранного и любимых артистов."}
          </p>
          <div class="live-tags">
            <span class="chip">Избранное</span>
            <span class="chip">Любимые артисты</span>
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
          ${t.map((s,n)=>{var i,c,o;return`<article class="mix-card ${(i=s.tracks)!=null&&i.length?"":"empty"}" data-action="play-mix" data-index="${n}" tabindex="0">
                <div class="mix-icon">${u(n===0?"heart":n===1?"album":"radio")}</div>
                <div class="mix-body">
                  <h3>${b(s.title)}</h3>
                  <p>${b(s.subtitle)}</p>
                  <span class="muted">${((c=s.tracks)==null?void 0:c.length)||0} ${H(((o=s.tracks)==null?void 0:o.length)||0,"трек","трека","треков")}</span>
                </div>
                <span class="mix-play">${u("play")}</span>
              </article>`}).join("")}
        </div>
      </section>

    </div>`)}async function Si(e){var p,m,g;Y();const t=await rs().catch(()=>l.meStats||{});if(e!==l.renderSeq)return;l.meStats=t,$.meStats=t;const a=((t.listenedMs||0)/36e5).toFixed(1),s=Math.round((t.listenedMs||0)/6e4),n=Math.max(1,...(t.byDay||[]).map(f=>f.ms)),i=t.recent||[];l.currentTracks=i;const c=[...t.byDay||[]].slice(-14),o=t.likes||0,r=t.dislikes||0;d("#view").innerHTML=`
    <div class="page stats-page">
      ${yt("Статистика","Только ваш аккаунт: время, артисты, жанры и оценки",{eyebrow:"Личные данные",actions:`<a class="btn glass" href="#/favorites">${u("heart")} Избранное</a>`})}

      <section class="stat-cards">
        <div class="stat-card"><span class="stat-icon">${u("clock")}</span><strong>${a} ч</strong><span>${s} минут музыки</span></div>
        <div class="stat-card"><span class="stat-icon">${u("play")}</span><strong>${t.plays||0}</strong><span>прослушиваний</span></div>
        <div class="stat-card"><span class="stat-icon like">${u("heart")}</span><strong>${o}</strong><span>лайков</span></div>
        <div class="stat-card"><span class="stat-icon dislike">${u("thumbDown")}</span><strong>${r}</strong><span>дизлайков</span></div>
      </section>

      <section class="section stats-grid">
        <div class="stats-panel">
          <div class="section-head"><h2>Последние 14 дней</h2><span class="muted">${a} ч всего</span></div>
          ${c.length?`<div class="day-chart">${c.map(f=>{const S=new Date(`${f.day}T00:00:00`).toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit"}),L=Math.max(4,Math.round(f.ms/n*100));return`<div class="day-col" title="${S}: ${Math.round(f.ms/6e4)} мин">
                      <span class="day-bar" style="height:${L}%"></span>
                      <span class="day-label">${S}</span>
                    </div>`}).join("")}</div>`:'<div class="empty-inline">Пока нет прослушиваний за две недели.</div>'}
        </div>
        <div class="stats-panel">
          <div class="section-head"><h2>Жанры</h2></div>
          ${(p=t.topGenres)!=null&&p.length?`<div class="genre-list">${t.topGenres.map(f=>{var w;return`<div class="genre-row">
                      <span class="genre-name">${b(f.name)}</span>
                      <span class="genre-bar"><i style="width:${Math.min(100,(f.plays||0)/(((w=t.topGenres[0])==null?void 0:w.plays)||1)*100)}%"></i></span>
                      <span class="genre-plays">${f.plays||0}</span>
                    </div>`}).join("")}</div>`:'<div class="empty-inline">Жанры появятся после прослушиваний.</div>'}
        </div>
      </section>

      <section class="section stats-grid">
        <div class="stats-panel">
          <div class="section-head"><h2>Любимые артисты</h2></div>
          ${(m=t.topArtists)!=null&&m.length?`<div class="rank-list">${t.topArtists.map((f,w)=>`<div class="rank-row">
                      <span class="rank-num">${w+1}</span>
                      <span class="rank-main"><strong>${b(f.name)}</strong><small>${f.plays} ${H(f.plays,"прослушивание","прослушивания","прослушиваний")}</small></span>
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
        ${i.length?Z(i,{showCover:!0}):'<div class="empty-inline">История пока пуста.</div>'}
      </section>
    </div>`}async function ki(e){Y();const t=await Ds();e===l.renderSeq&&(l.currentTracks=[],d("#view").innerHTML=`
    <div class="page">
      ${yt("Артисты",`${t.length} ${H(t.length,"артист","артиста","артистов")} в библиотеке`,{actions:`<button class="btn glass" data-action="shuffle-library">${u("shuffle")} Перемешать всё</button>`,eyebrow:"Коллекция"})}
      <div class="grid cards">${t.map(ba).join("")}</div>
    </div>`)}async function Ei(e,t){Y();const a=await es(t);if(e!==l.renderSeq)return;const s=a.artist,n=s.album||[];l.currentTracks=[],d("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/artists">${u("back")} Все артисты</a>
      <section class="collection-head">
        <div class="collection-art round">${ct(s.coverArt||s.id,{size:600,alt:s.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">Артист</div>
          <h1>${b(s.name)}</h1>
          <p class="muted">${n.length} ${H(n.length,"альбом","альбома","альбомов")}</p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-artist" data-id="${s.id}">${u("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-artist" data-id="${s.id}">${u("shuffle")} Перемешать</button>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section-head"><h2>Альбомы</h2></div>
        <div class="grid cards">${n.map(se).join("")}</div>
      </section>
    </div>`}async function Ti(e){Y();const t=await gi();e===l.renderSeq&&(l.currentTracks=[],d("#view").innerHTML=`
    <div class="page">
      ${yt("Альбомы",`${t.length} ${H(t.length,"альбом","альбома","альбомов")}`,{eyebrow:"Коллекция"})}
      <div class="grid cards">${t.map(se).join("")}</div>
    </div>`)}async function Mi(e,t){Y();const a=await da(t);if(e!==l.renderSeq)return;const s=a.album,n=s.song||[];l.currentTracks=n,d("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/albums">${u("back")} Все альбомы</a>
      <section class="collection-head album-head">
        <div class="collection-art">${ct(s.coverArt||s.id,{size:800,alt:s.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">${s.year?`Альбом · ${s.year}`:"Альбом"}</div>
          <h1>${b(s.name)}</h1>
          <p class="muted">
            <a class="inline-link" href="#/artist/${s.artistId}">${b(s.artist)}</a>
            · ${n.length} ${H(n.length,"трек","трека","треков")}
            · ${xs(s.duration*1e3||0)}
          </p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-all">${u("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-all">${u("shuffle")} Перемешать</button>
          </div>
        </div>
      </section>
      <section class="section">
        ${Z(n,{showAlbum:!1})}
      </section>
    </div>`}async function Li(e){Y();const t=await ya();e===l.renderSeq&&(l.currentTracks=t,d("#view").innerHTML=`
    <div class="page">
      ${yt("Все треки",`${t.length} ${H(t.length,"трек","трека","треков")}`,{eyebrow:"Библиотека",actions:`<button class="btn primary" data-action="play-all">${u("play")} Слушать</button>
                  <button class="btn glass" data-action="shuffle-all">${u("shuffle")} Перемешать</button>`})}
      ${Z(t,{showCover:!0})}
    </div>`)}async function _i(e){Y();const t=await ua();e===l.renderSeq&&($.playlists=t,l.currentTracks=[],d("#view").innerHTML=`
    <div class="page">
      ${yt("Плейлисты",`${t.length} ${H(t.length,"плейлист","плейлиста","плейлистов")}`,{eyebrow:"Моя музыка",actions:`<button class="btn primary" data-action="new-playlist">${u("add")} Новый плейлист</button>`})}
      ${t.length?`<div class="grid cards">${t.map(xi).join("")}</div>`:`<div class="empty-state"><span class="empty-icon">${u("playlist")}</span><h2>Плейлистов пока нет</h2><p>Соберите подборку из любимых треков.</p><button class="btn primary" data-action="new-playlist">${u("add")} Создать</button></div>`}
    </div>`)}function xi(e){return`<article class="card" data-action="open" data-href="#/playlist/${e.id}" tabindex="0">
    <div class="card-cover">${ct(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${b(e.name)}</div>
      <div class="card-sub">${e.songCount??0} ${H(e.songCount??0,"трек","трека","треков")}</div>
    </div>
    <button class="card-play" data-action="open" data-href="#/playlist/${e.id}">${u("play")}</button>
  </article>`}async function Ai(e,t){Y();const a=await nn(t);if(e!==l.renderSeq)return;const s=(a.entry||[]).map((n,i)=>({...n,track:i+1}));l.currentTracks=s,d("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/playlists">${u("back")} Все плейлисты</a>
      <section class="collection-head album-head">
        <div class="collection-art">${ct(a.coverArt||a.id,{size:800,alt:a.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">Плейлист</div>
          <h1>${b(a.name)}</h1>
          <p class="muted">${s.length} ${H(s.length,"трек","трека","треков")} · ${xs((a.duration||0)*1e3)}</p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-all">${u("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-all">${u("shuffle")} Перемешать</button>
            <button class="btn ghost danger" data-action="delete-playlist" data-id="${a.id}">${u("delete")} Удалить</button>
          </div>
        </div>
      </section>
      <section class="section">
        ${Z(s,{showCover:!0,playlistId:a.id})}
      </section>
    </div>`}async function Di(e){Y();const t=await Ps();if(e!==l.renderSeq)return;const a=t.song||[];l.currentTracks=a,d("#view").innerHTML=`
    <div class="page">
      ${yt("Избранное",`${a.length} ${H(a.length,"трек","трека","треков")}`,{eyebrow:"Моя музыка",actions:a.length?`<button class="btn primary" data-action="play-all">${u("play")} Слушать</button>`:""})}
      ${a.length?Z(a,{showCover:!0}):`<div class="empty-state"><span class="empty-icon">${u("heartOutline")}</span><h2>Здесь пока пусто</h2><p>Нажимайте на сердечко у трека, чтобы добавить его в избранное.</p></div>`}
      ${(t.album||[]).length?`<section class="section"><div class="section-head"><h2>Любимые альбомы</h2></div>
             <div class="grid cards">${t.album.map(se).join("")}</div></section>`:""}
    </div>`}const $a="rustream.searches";function Cs(){try{const e=JSON.parse(localStorage.getItem($a));return Array.isArray(e)?e.slice(0,8):[]}catch{return[]}}function zs(e){const t=String(e||"").trim();if(t.length<2)return;const a=[t,...Cs().filter(s=>s!==t)].slice(0,8);localStorage.setItem($a,JSON.stringify(a))}function ia(e){const t=String(e||"").trim();if(!t)return;zs(t);const a=`#/search?q=${encodeURIComponent(t)}`;location.hash===a?C():location.hash=a}async function Pi(e,t){const a=d("#search-input");if(a.value!==t&&(a.value=t),!t.trim()){const i=Cs();d("#view").innerHTML=`
      <div class="page search-page">
        <header class="page-head">
          <div>
            <span class="eyebrow">Поиск</span>
            <h1>Что найти?</h1>
          </div>
        </header>

        <form id="page-search-form" class="search-row">
          <label class="searchbox">
            ${u("search")}
            <input id="page-search-input" type="search" placeholder="Треки, альбомы, артисты…" enterkeyhint="search" autocomplete="off" />
          </label>
          <button class="btn primary" type="submit">${u("search")} Искать</button>
        </form>

        ${i.length?`<section class="section">
                <div class="section-head"><h2>Недавние запросы</h2><button class="text-link" data-action="clear-searches">Очистить</button></div>
                <div class="chip-row">${i.map(r=>`<button class="chip-btn" data-action="run-search" data-query="${b(r)}">${b(r)}</button>`).join("")}</div>
              </section>`:""}

        <section class="section">
          <div class="section-head"><h2>Популярные направления</h2></div>
          <div class="chip-row">
            ${["Рок","Поп","Джаз","Электроника","Хип-хоп","Метал","Классика","Саундтрек"].map(r=>`<button class="chip-btn" data-action="run-search" data-query="${b(r)}">${b(r)}</button>`).join("")}
          </div>
        </section>
      </div>`;const c=d("#page-search-form"),o=d("#page-search-input");c==null||c.addEventListener("submit",r=>{r.preventDefault(),ia(o.value)}),o==null||o.addEventListener("keydown",r=>{r.key==="Enter"&&ia(o.value)});return}Y();const s=await sn(t);if(e!==l.renderSeq)return;const n=s.song||[];l.currentTracks=n,d("#view").innerHTML=`
    <div class="page">
      ${yt(`Поиск: ${t}`,`Найдено ${n.length} ${H(n.length,"трек","трека","треков")}, ${(s.album||[]).length} ${H((s.album||[]).length,"альбом","альбома","альбомов")}`,{eyebrow:"Результаты"})}
      ${(s.artist||[]).length?`<section class="section"><div class="section-head"><h2>Артисты</h2></div><div class="grid cards">${s.artist.map(ba).join("")}</div></section>`:""}
      ${(s.album||[]).length?`<section class="section"><div class="section-head"><h2>Альбомы</h2></div><div class="grid cards">${s.album.map(se).join("")}</div></section>`:""}
      ${n.length?`<section class="section"><div class="section-head"><h2>Треки</h2></div>${Z(n,{showCover:!0})}</section>`:""}
      ${!n.length&&!(s.album||[]).length&&!(s.artist||[]).length?`<div class="empty-state"><span class="empty-icon">${u("search")}</span><h2>Ничего не найдено</h2><p>Попробуйте другой запрос.</p></div>`:""}
    </div>`}async function Ci(e){const a=(await da(e)).album.song||[];if(!a.length)return y("В альбоме нет треков","warn");l.currentTracks=a,await h.playTracks(a,0)}async function Ka(e,t=!1){y("Загружаю альбомы…");const s=(await es(e)).artist.album||[],i=(await Promise.all(s.map(c=>da(c.id)))).flatMap(c=>c.album.song||[]);if(!i.length)return y("У артиста нет треков","warn");l.currentTracks=i,await h.playTracks(i,0,{shuffle:t})}async function qs(e,t){try{await fn(e,t),t===1?(l.favorites.add(e),l.dislikes.delete(e)):t===-1?(l.favorites.delete(e),l.dislikes.add(e)):(l.favorites.delete(e),l.dislikes.delete(e)),$.favorites=null,$.ratings=null,J(`[data-action="like"][data-id="${e}"]`).forEach(a=>{const s=l.favorites.has(e);a.classList.toggle("active",s),a.innerHTML=u(s?"heart":"heartOutline")}),J(`[data-action="dislike"][data-id="${e}"]`).forEach(a=>{a.classList.toggle("active",l.dislikes.has(e))}),Is(),(location.hash.startsWith("#/favorites")||location.hash.startsWith("#/stats"))&&C({keepScroll:!0})}catch(a){y(a.message,"error")}}async function Se(e){const t=l.favorites.has(e);await qs(e,t?0:1)}async function Qa(e){const t=l.dislikes.has(e);await qs(e,t?0:-1)}function Is(){const e=h.track,t=d("#pb-like"),a=d("#pb-dislike");if(t){const s=e?l.favorites.has(e.id):!1;t.classList.toggle("active",s),t.innerHTML=u(s?"heart":"heartOutline")}a&&a.classList.toggle("active",e?l.dislikes.has(e.id):!1)}async function zi(e){let t=[];try{t=await ua()}catch(a){y(a.message,"error")}ne({title:"Добавить в плейлист",body:`
      ${t.length?`<div class="modal-list">${t.map(a=>`<button class="modal-row" data-modal-action="add" data-playlist="${a.id}">
                  <span class="modal-row-ico">${u("playlist")}</span>
                  <span><strong>${b(a.name)}</strong><small>${a.songCount??0} треков</small></span>
                  ${u("next")}
                </button>`).join("")}</div>`:'<p class="muted">Плейлистов пока нет — создайте первый.</p>'}
      <div class="modal-new">
        <input class="input" id="new-playlist-name" placeholder="Название нового плейлиста" />
        <button class="btn primary" data-modal-action="create" data-track="${e}">${u("add")} Создать</button>
      </div>`,onMount:a=>{a.addEventListener("click",async s=>{const n=s.target.closest("[data-modal-action]");if(n&&(n.dataset.modalAction==="add"&&(await rn(n.dataset.playlist,e),nt(),$.playlists=null,y("Трек добавлен в плейлист")),n.dataset.modalAction==="create")){const c=d("#new-playlist-name",a).value.trim()||"Мой плейлист";await ss(c,[e]),nt(),$.playlists=null,y("Плейлист создан"),location.hash.startsWith("#/playlists")&&C()}})}})}async function qi(){ne({title:"Новый плейлист",body:`<input class="input" id="new-playlist-name" placeholder="Например: Вечерний плейлист" autofocus />
           <div class="modal-actions">
             <button class="btn ghost" data-modal-action="cancel">Отмена</button>
             <button class="btn primary" data-modal-action="create">Создать</button>
           </div>`,onMount:e=>{const t=d("#new-playlist-name",e);t.focus(),e.addEventListener("click",async a=>{var n;const s=(n=a.target.closest("[data-modal-action]"))==null?void 0:n.dataset.modalAction;if(s==="cancel"&&nt(),s==="create"){const i=t.value.trim();if(!i)return t.focus();await ss(i,[]),nt(),$.playlists=null,y("Плейлист создан"),C()}}),t.addEventListener("keydown",a=>{var s;a.key==="Enter"&&((s=d('[data-modal-action="create"]',e))==null||s.click())})}})}function ne({title:e,body:t,onMount:a}){const s=d("#modal-root");s.innerHTML=`
    <div class="modal-backdrop" data-modal-action="close">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-card">
          <div class="modal-head"><h3>${b(e)}</h3><button class="icon-btn" data-modal-action="close">${u("close")}</button></div>
          <div class="modal-body">${t}</div>
        </div>
      </div>
    </div>`,document.body.classList.add("modal-open");const n=d(".modal",s);s.querySelector(".modal-backdrop").addEventListener("click",i=>{i.target.dataset.modalAction==="close"&&nt()}),a==null||a(n)}function nt(){d("#modal-root").innerHTML="",document.body.classList.remove("modal-open")}function Hs(){if(h.sleepMode==="track")return"до конца трека";if(h.sleepMode==="timer"){const e=Math.ceil(h.sleepRemainingMs/1e3),t=Math.floor(e/60),a=e%60;return`через ${t}:${String(a).padStart(2,"0")}`}return""}function Sa(){const e=!!h.sleepMode;J('[data-action="sleep"]').forEach(t=>{t.classList.toggle("active",e),t.title=e?`Таймер сна ${Hs()}`:"Таймер сна"})}function Ii(){const e=[15,30,45,60];ne({title:"Таймер сна",body:`
      <p class="muted">Музыка плавно затихнет и встанет на паузу${h.sleepMode?`. Сейчас: <strong>${Hs()}</strong>`:""}.</p>
      <div class="modal-actions sleep-actions">
        ${e.map(t=>`<button class="btn ghost" data-sleep="${t}">${t} минут</button>`).join("")}
        <button class="btn ghost" data-sleep="track">Дослушать текущий трек</button>
        ${h.sleepMode?'<button class="btn primary" data-sleep="off">Выключить таймер</button>':""}
      </div>`,onMount:t=>{t.addEventListener("click",a=>{var n;const s=(n=a.target.closest("[data-sleep]"))==null?void 0:n.dataset.sleep;s&&(s==="off"?(h.cancelSleepTimer(),y("Таймер сна выключен")):s==="track"?(h.stopAfterTrack(),y("Остановлюсь после текущего трека")):(h.startSleepTimer(Number(s)),y(`Таймер сна на ${s} минут`)),nt(),Sa())})}})}function Hi(){ne({title:"Горячие клавиши",body:`<div class="hotkeys">${[["Space","Играть / пауза"],["N","Следующий трек"],["P","Предыдущий трек"],["S","Перемешать"],["R","Повтор: выкл → все → один"],["M","Звук вкл / выкл"],["L","Лайк текущему треку"],["Shift + ← / →","Перемотка на 5 секунд"],["Ctrl + K","Поиск"],["Esc","Закрыть окно / плеер"]].map(([t,a])=>`<div class="hotkey-row"><kbd>${t}</kbd><span>${b(a)}</span></div>`).join("")}</div>`})}function Ct(e="lyrics"){l.npOpen=!0,l.npTab=e;const t=d("#np");t.hidden=!1,requestAnimationFrame(()=>t.classList.add("open")),setTimeout(()=>t.classList.add("open"),80),te()}function ke(){l.npOpen=!1;const e=d("#np");e.classList.remove("open"),setTimeout(()=>{l.npOpen||(e.hidden=!0)},260)}function Oi(e){l.npTab=e,te()}function te(){if(!l.npOpen)return;const e=h.track;J(".np-tab").forEach(s=>s.classList.toggle("active",s.dataset.npTab===l.npTab)),d("#np").classList.toggle("compact",l.npTab!=="lyrics");const t=d("#np-side");t.innerHTML=`
    <div class="np-cover">${ct((e==null?void 0:e.coverArt)||(e==null?void 0:e.albumId),{size:900,alt:(e==null?void 0:e.title)||""})}</div>
    <div class="np-meta">
      <div class="eyebrow">${u("wave")} Сейчас играет</div>
      <h2>${b((e==null?void 0:e.title)||"Ничего не играет")}</h2>
      <p class="np-artist">${b((e==null?void 0:e.artist)||"Выберите трек")}</p>
      <p class="muted">${b((e==null?void 0:e.album)||"")}${e!=null&&e.year?` · ${e.year}`:""}</p>
      <div class="np-chips" id="np-chips">
        ${e?`
          <span class="chip">${(e.suffix||"flac").toUpperCase()}</span>
          <span class="chip">${e.bitRate?`${e.bitRate} kbps`:"lossless"}</span>
          <span class="chip" id="np-buffer" hidden>в буфере 0:00</span>
        `:""}
      </div>
      <div class="np-controls">
        <button class="icon-btn ${h.shuffle?"active":""}" data-action="shuffle" title="Перемешать">${u("shuffle")}</button>
        <button class="icon-btn" data-action="prev" title="Предыдущий">${u("prev")}</button>
        <button class="play-btn" data-action="toggle" title="${h.paused?"Играть":"Пауза"}">${u(h.paused?"play":"pause")}</button>
        <button class="icon-btn" data-action="next" title="Следующий">${u("next")}</button>
        <button class="icon-btn ${h.repeat!=="off"?"active":""}" data-action="repeat" title="Повтор">${u(h.repeat==="one"?"repeatOne":"repeat")}</button>
      </div>
      <div class="np-actions">
        <button class="icon-btn like ${e&&l.favorites.has(e.id)?"active":""}" data-action="like-current" title="В избранное">${u(e&&l.favorites.has(e.id)?"heart":"heartOutline")}</button>
        <button class="icon-btn dislike ${e&&l.dislikes.has(e.id)?"active":""}" data-action="dislike-current" title="Не нравится">${u("thumbDown")}</button>
        <button class="icon-btn" data-action="add-to-playlist" data-id="${(e==null?void 0:e.id)||""}" ${e?"":"disabled"} title="В плейлист">${u("add")}</button>
        <button class="icon-btn" data-action="jump-album" ${e!=null&&e.albumId?"":"disabled"} title="К альбому">${u("album")}</button>
        <button class="icon-btn" data-action="sleep" title="Таймер сна">${u("clock")}</button>
      </div>
    </div>`;const a=d("#np-panel");l.npTab==="lyrics"?Os(a,e):l.npTab==="eq"?Pe(a):Ee(a)}async function Os(e,t){var n,i;if(!t){e.innerHTML=Rs("lyrics","Текст появится здесь","Включите трек — и мы поищем файл .lrc рядом с аудио.");return}if(e.innerHTML='<div class="panel-loading"><span class="spinner"></span>Ищу текст…</div>',l.lyricsTrackId!==t.id||l.lyricsRefresh)try{l.lyrics=await yn(t.id,l.lyricsRefresh),l.lyricsTrackId=t.id,l.lyricsRefresh=!1,l.lyricsActiveKey=null}catch{l.lyrics=null}if(l.npTab!=="lyrics")return;const a=l.lyrics;if(!a||!a.plain&&!((n=a.synced)!=null&&n.length)){e.innerHTML=`<div class="panel-empty">
      <span class="empty-icon">${u("lyrics")}</span>
      <h3>Текст не найден</h3>
      <p>Локального .lrc/.txt нет, интернет-поиск ничего не вернул. Можно попробовать ещё раз.</p>
      <button class="btn glass" data-action="refresh-lyrics">${u("refresh")} Искать в интернете</button>
    </div>`;return}const s=a.source==="lrclib"?"LRCLIB":a.source==="local"?"локальный файл":a.source==="lyrics.ovh"?"lyrics.ovh":"кэш";e.innerHTML=`
    <div class="panel-title">
      <h3>Текст песни</h3>
      <span class="lyrics-source">${u("wave")} ${b(s)}</span>
      <button class="icon-btn" data-action="refresh-lyrics" title="Найти заново">${u("refresh")}</button>
    </div>
    <div class="lyrics" id="lyrics-body">
      ${(i=a.synced)!=null&&i.length?a.synced.map((c,o)=>`<div class="lyric-line" data-index="${o}" data-time="${c.time_ms}">${b(c.text)}</div>`).join(""):`<div class="lyrics-plain">${b(a.plain).replace(/\n/g,"<br />")}</div>`}
    </div>`,Ns()}function Ns(){if(l.npTab!=="lyrics")return;const e=J(".lyric-line");if(!e.length)return;const t=h.currentTime*1e3;let a=-1;e.forEach((n,i)=>{Number(n.dataset.time)<=t&&(a=i)}),a<0&&(a=0),e.forEach((n,i)=>n.classList.toggle("active",i===a));const s=`${l.lyricsTrackId||""}:${a}`;a>=0&&l.lyricsActiveKey!==s&&(l.lyricsActiveKey=s,e[a].scrollIntoView({block:"center",behavior:"smooth"}))}function Rs(e,t,a){return`<div class="panel-empty"><span class="empty-icon">${u(e)}</span><h3>${b(t)}</h3><p>${b(a)}</p></div>`}function Pe(e){const t=h.eqState;e.innerHTML=`
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
      ${_s.map((a,s)=>{const n=Number(t.gains[s])||0,i=(12-n)/24*100;return`
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
      <button class="btn ghost" data-action="reset-eq">${u("refresh")} Сбросить</button>
    </div>`}function Ee(e){const t=h.queue;e.innerHTML=`
    <div class="panel-title">
      <h3>Очередь</h3>
      <span class="queue-head-meta">
        <span class="muted">${t.length} ${H(t.length,"трек","трека","треков")}</span>
        ${t.length?'<button class="text-link" data-action="clear-queue">Очистить</button>':""}
      </span>
    </div>
    ${t.length?`<div class="queue-list" id="queue-list">${t.map((s,n)=>`
              <div class="queue-row ${n===h.index?"active":""}" data-action="play-queue" data-index="${n}" data-track-id="${s.id}" role="button" tabindex="0">
                <span class="queue-drag-handle">${u("menu")}</span>
                <span class="queue-cover">${ct(s.coverArt||s.albumId,{size:80})}</span>
                <span class="queue-main"><strong>${b(s.title)}</strong><small>${b(s.artist||"")}</small></span>
                <span class="queue-time">${Mt(s.duration)}</span>
                <button class="icon-btn row-btn" data-action="remove-queue" data-index="${n}" title="Убрать из очереди">${u("close")}</button>
              </div>`).join("")}</div>`:Rs("queue","Очередь пуста","Нажмите на трек или альбом, чтобы начать воспроизведение.")}`;const a=d("#queue-list");a&&t.length>0&&new E(a,{animation:150,handle:".queue-drag-handle",ghostClass:"queue-row-ghost",dragClass:"queue-row-drag",onEnd:s=>{s.oldIndex!==s.newIndex&&(h.moveInQueue(s.oldIndex,s.newIndex),setTimeout(()=>Ee(e),50))}})}function ka(){const e=h.track,t=d("#pb-title"),a=d("#pb-artist"),s=d("#pb-cover-img"),n=d("#quality-format"),i=d("#quality-detail"),c=d("#np-pill");if(c&&(c.hidden=!e),!e){t.textContent="Ничего не играет",a.textContent="Выберите трек",d(".pb-cover").classList.remove("loaded"),n.textContent="—",i.textContent="";return}t.textContent=e.title||"",a.textContent=[e.artist,e.album].filter(Boolean).join(" · "),e.coverArt||e.albumId?(s.src=ca(e.coverArt||e.albumId,160),s.onload=()=>d(".pb-cover").classList.add("loaded")):(s.removeAttribute("src"),d(".pb-cover").classList.remove("loaded")),n.textContent=(e.suffix||"flac").toUpperCase(),i.textContent=[e.bitRate?`${e.bitRate} kbps`:null,e.size?va(e.size):null].filter(Boolean).join(" · "),Is()}function Lt(){const e=h.duration,t=h.currentTime,a=e?t/e*100:0;d("#cur-time").textContent=Mt(t),d("#total-time").textContent=Mt(e),d("#seek").value=String(a),d("#seek-fill").style.width=`${a}%`;const s=d("#np-seek");s&&(s.value=String(a),d("#np-seek-fill").style.width=`${a}%`,d("#np-cur-time").textContent=Mt(t),d("#np-total-time").textContent=Mt(e)),Vs(),Ns()}function Vs(){const e=h.buffered;d("#seek-buffer").style.width=`${e.percent}%`;const t=d("#np-seek-buffer");t&&(t.style.width=`${e.percent}%`);const a=d("#np-buffer");a&&(e.percent>=99.5||!h.track?a.hidden=!0:(a.hidden=!1,a.textContent=`в буфере ${Mt(e.ahead)}`,a.title=`Загружено ${va(h.estimatedBufferedBytes())}`))}function ie(){var n;const e=!h.paused&&!!h.track,t=d("#play-btn");t.innerHTML=u(e?"pause":"play"),t.title=e?"Пауза":"Играть",d("#pb-cover").classList.toggle("playing",e);const a=d('.np-controls [data-action="toggle"]');a&&(a.innerHTML=u(e?"pause":"play"),a.title=e?"Пауза":"Играть");const s=((n=h.track)==null?void 0:n.id)||null;J(".track-row").forEach(i=>{i.classList.toggle("playing",!!s&&i.dataset.trackId===s)})}function Ea(){d("#shuffle-btn").classList.toggle("active",h.shuffle),d("#repeat-btn").classList.toggle("active",h.repeat!=="off"),d("#repeat-btn").innerHTML=u(h.repeat==="one"?"repeatOne":"repeat");const e=d('.np-controls [data-action="shuffle"]');e&&e.classList.toggle("active",h.shuffle);const t=d('.np-controls [data-action="repeat"]');t&&(t.classList.toggle("active",h.repeat!=="off"),t.innerHTML=u(h.repeat==="one"?"repeatOne":"repeat"))}function re(){d("#volume").value=String(h.volumePercent);const e=h.volumePercent===0?"volumeOff":h.volumePercent<50?"volumeDown":"volumeUp";d("#volume-btn").innerHTML=u(e);const t=d("#np-volume");if(t){t.value=String(h.volumePercent);const a=d("#np-volume-icon");a&&(a.innerHTML=u(e))}}function Ys(){var t,a;const e=(a=(t=l.ytmStatus)==null?void 0:t.account)==null?void 0:a.photo;return typeof e=="string"&&e.startsWith("http")?e:""}function Ni(e,t="user-avatar"){const a=Ys();return a?`<span class="${t} has-photo"><img src="${b(a)}" alt="" referrerpolicy="no-referrer" /></span>`:`<span class="${t}">${b(ga(e))}</span>`}function js(){const e=$e(),t=d("#user-avatar"),a=d("#user-name"),s=Ys();t&&(s?(t.classList.add("has-photo"),t.innerHTML=`<img src="${b(s)}" alt="" referrerpolicy="no-referrer" />`):(t.classList.remove("has-photo"),t.textContent=ga(e))),a&&(a.textContent=e)}function Bs(e){const t=d("#auth-screen");t&&(t.hidden=!1,document.body.classList.add("auth-locked"),d("#auth-login-view").hidden=e!=="login",d("#auth-register-view").hidden=e!=="register",setTimeout(()=>{var a;return(a=d(e==="login"?"#login-username":"#register-invite"))==null?void 0:a.focus()},60))}function It(){Bs("login")}async function Ta(e=""){Bs("register");const t=d("#register-invite"),a=d("#register-invite-hint");if(t.value=e.trim(),!e.trim()){a.textContent="Вставьте код приглашения от администратора.";return}a.textContent="Проверяю приглашение…";try{const s=await xn(e.trim());a.innerHTML=`Приглашение от <strong>${b(s.invitedBy)}</strong>${s.isAdmin?" · администратор":""}`}catch(s){a.textContent=s.message||"Приглашение недействительно"}}function Ri(){const e=d("#auth-screen");e&&(e.hidden=!0,document.body.classList.remove("auth-locked"))}async function Ma(){var e;try{l.authConfig=await Qe();const t=await un();if(!t.user){It(),location.hash.startsWith("#/register")&&C();return}l.me=t.user,l.meSettings=t.settings,Ce(((e=t.settings)==null?void 0:e.theme)||localStorage.getItem("rustream.theme")||"violet"),l.ytmStatus=await Zt().catch(()=>null),js(),Ri(),await Promise.all([Ps(),wa()]),Yi(),await _a(),C()}catch(t){As(t)||console.error(t),It()}}function at(e){l.liveMode=!!e,h.setLiveMode(!!e)}const Fs="rustream.playerSyncedAt";let Za=null;function Vi(){return Number(localStorage.getItem(Fs))||0}function Us(e){Number(e)>0&&localStorage.setItem(Fs,String(e))}function La(){!l.me||!h.queue.length||l.skipPushUntil&&Date.now()<l.skipPushUntil||(clearTimeout(Za),Za=setTimeout(async()=>{try{const e=await Cn(h.snapshotState());Us(e==null?void 0:e.updatedAt)}catch{}},3e3))}async function _a({force:e=!1}={}){var o,r;let t;try{t=await Pn()}catch{return}const a=Number(t==null?void 0:t.updatedAt)||0,s=t==null?void 0:t.state;if(!((o=s==null?void 0:s.queue)!=null&&o.length)||!e&&a<=Vi())return;const n=s.queue[Math.min(Number(s.index)||0,s.queue.length-1)],i=(n==null?void 0:n.id)&&n.id===((r=h.track)==null?void 0:r.id);if(!e&&!h.paused&&!i)return;const c=h.applyRemote(s);c&&(Us(a),l.skipPushUntil=Date.now()+5e3,l.liveMode=!!c.liveMode,ka(),ie(),Lt(),location.hash.startsWith("#/live")&&C())}setInterval(()=>{document.hidden||_a()},3e4);document.addEventListener("visibilitychange",()=>{document.hidden||_a()});h.addEventListener("track",La);h.addEventListener("queue",La);h.addEventListener("state",La);window.addEventListener("pagehide",()=>{if(!(!l.me||!h.queue.length))try{fetch("/api/me/player",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({state:h.snapshotState()}),keepalive:!0}).catch(()=>{})}catch{}});function Yi(){const e=h.restore();e&&(l.liveMode=!!e.liveMode,ka(),ie(),Ea(),Lt())}async function ji(){try{y("Собираю персональный поток…");const e=await os(40);if(!e.length)return y("В библиотеке пока нет треков","warn");at(!0),l.currentTracks=e,await h.playTracks(e,0),y("Live включён"),location.hash.startsWith("#/live")&&C()}catch(e){if(Ht(e))return;y(e.message,"error")}}async function Bi(e){var a;const t=l.liveMixes[e];if(!((a=t==null?void 0:t.tracks)!=null&&a.length))return y("В этом миксе пока нет треков","warn");at(!1),l.currentTracks=t.tracks,await h.playTracks(t.tracks,0),y(`Играет: ${t.title}`)}const xa=[{id:"violet",name:"Фиолетовая"},{id:"ocean",name:"Океан"},{id:"sunset",name:"Закат"},{id:"forest",name:"Лес"},{id:"mono",name:"Моно"}],Te=/^#[0-9a-f]{6}$/i;function ra(e){const t=e.replace("#","");return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}}function Fi({r:e,g:t,b:a}){const s=n=>Math.max(0,Math.min(255,Math.round(n)));return`#${[s(e),s(t),s(a)].map(n=>n.toString(16).padStart(2,"0")).join("")}`}function At(e,t,a){const s=ra(e),n=ra(t);return Fi({r:s.r*a+n.r*(1-a),g:s.g*a+n.g*(1-a),b:s.b*a+n.b*(1-a)})}function Ui(e){const{r:t,g:a,b:s}=ra(e),n=i=>{const c=i/255;return c<=.03928?c/12.92:((c+.055)/1.055)**2.4};return .2126*n(t)+.7152*n(a)+.0722*n(s)}function ts(e){return Ui(e)>.42?"#1a1917":"#ffffff"}function Xs(e){const t=document.documentElement.classList.contains("light-mode"),a=t?"#faf8f4":"#101013",s=t?"#efece4":"#17171c",n=t?.06:.1,i=At(e,a,n),c=At(e,s,n*1.25),o=At(e,t?"#e9e5dc":"#1d1d23",n*1.4),r=At(e,t?"#ffffff":"#101013",t?.22:.3),p=document.body.style;p.setProperty("--primary",e),p.setProperty("--on-primary",ts(e)),p.setProperty("--primary-container",r),p.setProperty("--on-primary-container",ts(r)),p.setProperty("--surface",i),p.setProperty("--surface-container",c),p.setProperty("--surface-container-high",o),p.setProperty("--surface-container-highest",At(e,o,.5)),p.setProperty("--surface-container-low",At(e,i,.5))}function Xi(){const e=document.body.style;["--primary","--on-primary","--primary-container","--on-primary-container","--surface","--surface-container","--surface-container-high","--surface-container-highest","--surface-container-low"].forEach(t=>e.removeProperty(t))}function Ce(e){const t=xa.some(s=>s.id===e),a=t?e:Te.test(e||"")?e.toLowerCase():"violet";l.theme=a,document.body.dataset.theme=t?a:"custom",localStorage.setItem("rustream.theme",a),t?Xi():Xs(a)}function oa(e){const t=e==="auto"?window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark":e;document.documentElement.classList.toggle("light-mode",t==="light"),l.theme&&Te.test(l.theme)&&Xs(l.theme)}(function(){const t=localStorage.getItem("colorMode")||"dark";oa(t),window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{localStorage.getItem("colorMode")==="auto"&&oa("auto")})})();const Ws=[{id:"compact",name:"Компактно"},{id:"default",name:"Обычно"},{id:"large",name:"Крупно"}];function Gs(e){const t=Ws.some(a=>a.id===e)?e:"default";l.density=t,document.documentElement.dataset.density=t,localStorage.setItem("rustream.density",t)}(function(){Gs(localStorage.getItem("rustream.density")||"default")})();async function Js(e){Ce(e);try{await is({theme:l.theme}),l.meSettings={...l.meSettings||{},theme:l.theme}}catch(t){y(t.message,"error")}}function Wi(e){var n,i,c,o,r,p,m,g;const t=l.meSettings||{},a=(n=l.authConfig)==null?void 0:n.lastfm,s=l.lastfmConfig||{};return`
    <div class="settings-sections">
      <section class="settings-section">
        <h4>${u("person")} Профиль</h4>
        <form id="settings-profile-form" class="settings-form">
          <label class="field"><span>Отображаемое имя</span>
            <input class="input" id="settings-display-name" value="${b(((i=l.me)==null?void 0:i.displayName)||"")}" />
          </label>
          <button class="btn tonal" type="submit">Сохранить имя</button>
        </form>
        <div class="settings-meta">
          <span>Логин: <strong>${b(((c=l.me)==null?void 0:c.username)||"")}</strong></span>
          ${(o=l.me)!=null&&o.isAdmin?'<span class="chip">администратор</span>':""}
        </div>
      </section>

      <section class="settings-section">
        <h4>${u("palette")} Оформление</h4>
        <p class="muted small">Цветовая тема сохраняется в аккаунте и применяется на всех устройствах.</p>
        <div class="theme-picker">
          ${xa.map(f=>`<button class="theme-swatch ${l.theme===f.id?"active":""}" data-theme-choice="${f.id}" title="${f.name}">
              <span class="swatch-dot theme-${f.id}"></span><span>${f.name}</span>
            </button>`).join("")}
        </div>
      </section>

      <section class="settings-section">
        <h4>${u("radio")} Скробблинг</h4>
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
          <button class="btn primary" data-settings-action="save-scrobbling" data-scope="listenbrainz">${u("check")} Сохранить токен</button>
        </div>

        <div class="settings-sub">
          <h5>Last.fm</h5>
          <p class="muted small">Тоже бесплатно, но серверу нужны ключи приложения — их создаёт администратор один раз.</p>
        <div class="settings-status">
          <span class="status-dot ${t.lastfmConnected?"on":""}"></span>
          Last.fm: ${t.lastfmConnected?`подключён${t.lastfmUsername?` как ${b(t.lastfmUsername)}`:""}`:"не подключён"}
        </div>
        <div class="settings-inline">
          <button class="btn glass" data-settings-action="lastfm-connect" ${a?"":"disabled"}>${u("wave")} Подключить Last.fm</button>
          <button class="btn ghost" data-settings-action="lastfm-complete" ${t.lastfmConnected?"disabled":""}>Завершить</button>
        </div>
        ${a?"":'<p class="muted small">Для авторизации Last.fm нужны ключи приложения ниже (или в config.toml).</p>'}
        ${(r=l.me)!=null&&r.isAdmin?`
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
        <h4>${u("settings")} Безопасность</h4>
        <form id="settings-password-form" class="settings-form">
          <label class="field"><span>Текущий пароль</span>
            <span class="input-wrap">
              <input class="input" id="settings-current-password" type="password" autocomplete="current-password" />
              <button class="reveal-btn" type="button" data-action="toggle-password" data-target="settings-current-password" aria-label="Показать пароль">${u("eye")}</button>
            </span>
          </label>
          <label class="field"><span>Новый пароль</span>
            <span class="input-wrap">
              <input class="input" id="settings-new-password" type="password" autocomplete="new-password" />
              <button class="reveal-btn" type="button" data-action="toggle-password" data-target="settings-new-password" aria-label="Показать пароль">${u("eye")}</button>
            </span>
          </label>
          <button class="btn tonal" type="submit">Сменить пароль</button>
        </form>
      </section>

      <section class="settings-section">
        <h4>${u("library")} Библиотека</h4>
        <p class="muted small">Сканер перечитывает папки каждые ${((p=l.authConfig)==null?void 0:p.scanInterval)||300} секунд. Новые файлы появятся автоматически.</p>
        <div class="settings-inline">
          <button class="btn glass" data-settings-action="rescan">${u("refresh")} Пересканировать сейчас</button>
          <button class="btn ghost danger" data-settings-action="clear-history">${u("delete")} Очистить историю</button>
        </div>
      </section>

      ${(m=l.me)!=null&&m.isAdmin?`
      <section class="settings-section">
        <h4>${u("person")} Пользователи</h4>
        <p class="muted small">Новый человек может войти двумя способами: вы создаёте ему логин и пароль здесь, либо выдаёте код приглашения — блок «Приглашения» на странице профиля.</p>
        <div class="user-list" id="settings-user-list">
          ${(e||[]).map(f=>{var w;return`
            <div class="user-row">
              <span class="user-avatar small">${b(ga(f.displayName||f.username))}</span>
              <span class="user-row-main"><strong>${b(f.displayName||f.username)}</strong><small>@${b(f.username)}${f.isAdmin?" · админ":""}</small></span>
              ${f.id===((w=l.me)==null?void 0:w.id)?'<span class="chip">вы</span>':`<button class="icon-btn" data-settings-action="delete-user" data-id="${f.id}" title="Удалить">${u("delete")}</button>`}
            </div>`}).join("")}
        </div>
        <div class="settings-form user-create">
          <label class="field"><span>Логин</span><input class="input" id="new-user-name" autocapitalize="none" /></label>
          <label class="field"><span>Пароль</span>
            <span class="input-wrap">
              <input class="input" id="new-user-password" type="password" autocomplete="new-password" />
              <button class="reveal-btn" type="button" data-action="toggle-password" data-target="new-user-password" aria-label="Показать пароль">${u("eye")}</button>
            </span>
          </label>
          <label class="field"><span>Имя</span><input class="input" id="new-user-display" /></label>
          <label class="checkline"><input type="checkbox" id="new-user-admin" /> Администратор</label>
          <button class="btn tonal" data-settings-action="create-user">Добавить пользователя</button>
        </div>
      </section>`:""}

      <section class="settings-section">
        <h4>${u("logout")} Сеанс</h4>
        <p class="muted small">Вход действует 90 дней и продлевается автоматически, пока вы пользуетесь сайтом. Subsonic API: логин <code>${b(((g=l.me)==null?void 0:g.username)||"")}</code>, пароль — ваш пароль. Ключ API: <code>${b(t.subsonicApiKey||"—")}</code></p>
        <button class="btn ghost danger" data-settings-action="logout">${u("logout")} Выйти из аккаунта</button>
      </section>
    </div>`}async function Xt(){if(!l.me)return It();let e=[];if(l.me.isAdmin)try{[e,l.lastfmConfig]=await Promise.all([wn(),He().catch(()=>({}))])}catch(t){Ht(t)}ne({title:"Аккаунт и настройки",body:Wi(e),onMount:t=>{var a,s;(a=d("#settings-profile-form",t))==null||a.addEventListener("submit",async n=>{n.preventDefault();try{await Pa(d("#settings-display-name",t).value.trim()),l.me.displayName=d("#settings-display-name",t).value.trim(),js(),y("Имя обновлено")}catch(i){y(i.message,"error")}}),(s=d("#settings-password-form",t))==null||s.addEventListener("submit",async n=>{n.preventDefault();try{await mn(d("#settings-current-password",t).value,d("#settings-new-password",t).value),d("#settings-current-password",t).value="",d("#settings-new-password",t).value="",y("Пароль изменён")}catch(i){y(i.message,"error")}}),t.addEventListener("click",async n=>{const i=n.target.closest("[data-theme-choice]");if(i){const r=i.dataset.themeChoice;Ce(r),J(".theme-swatch",t).forEach(p=>p.classList.toggle("active",p.dataset.themeChoice===r));try{await Pa(l.me.displayName||l.me.username,r),l.meSettings={...l.meSettings||{},theme:r},y("Тема сохранена")}catch(p){y(p.message,"error")}return}const c=n.target.closest("[data-settings-action]");if(!c)return;const o=c.dataset.settingsAction;if(o==="logout"){await ns().catch(()=>{}),location.reload();return}if(o==="rescan"){c.classList.add("spin"),await ls().catch(r=>y(r.message,"error")),setTimeout(()=>{c.classList.remove("spin"),y("Сканирование запущено")},1200);return}if(o==="clear-history"){if(!confirm("Удалить всю историю прослушиваний этого аккаунта?"))return;try{await Sn(),$.meStats=null,l.meStats=null,y("История очищена");const r=await Ie();l.meSettings=r.settings}catch(r){y(r.message,"error")}return}if(o==="lastfm-connect"){try{const r=await En();window.open(r.url,"_blank","noopener"),y("Подтвердите доступ на Last.fm, затем нажмите «Завершить»")}catch(r){y(r.message,"error")}return}if(o==="lastfm-complete"){try{const r=await Tn();y(`Last.fm подключён${r.username?`: ${r.username}`:""}`);const p=await Ie();l.meSettings=p.settings,nt(),Xt()}catch(r){y(r.message,"error")}return}if(o==="save-lastfm-app"){try{await Ca(d("#settings-lastfm-api-key",t).value.trim(),d("#settings-lastfm-api-secret",t).value.trim());const r=await He();l.lastfmConfig=r,l.authConfig=await Qe(),y("Ключи Last.fm сохранены в config.toml"),d("#settings-lastfm-api-secret",t).value=""}catch(r){y(r.message,"error")}return}if(o==="clear-lastfm-app"){if(!confirm("Удалить ключи приложения Last.fm из config.toml?"))return;try{await Ca("","",!0),l.lastfmConfig=await He(),l.authConfig=await Qe(),y("Ключи Last.fm удалены"),nt(),Xt()}catch(r){y(r.message,"error")}return}if(o==="save-scrobbling"){const r=c.dataset.scope||"both",p={};r!=="lastfm"&&(p.listenbrainzToken=d("#settings-listenbrainz",t).value.trim()),r!=="listenbrainz"&&(p.lastfmSessionKey=d("#settings-lastfm-key",t).value.trim());try{await vn(p),y(r==="listenbrainz"?"Токен ListenBrainz сохранён":"Last.fm сохранён");const m=await Ie();l.meSettings=m.settings}catch(m){y(m.message,"error")}return}if(o==="create-user"){try{await $n({username:d("#new-user-name",t).value.trim(),password:d("#new-user-password",t).value,displayName:d("#new-user-display",t).value.trim(),isAdmin:d("#new-user-admin",t).checked}),y("Пользователь создан"),nt(),Xt()}catch(r){y(r.message,"error")}return}if(o==="delete-user"){if(!confirm("Удалить пользователя и все его данные?"))return;try{await kn(c.dataset.id),y("Пользователь удалён"),nt(),Xt()}catch(r){y(r.message,"error")}}})}})}function Gi(){const e=localStorage.getItem("colorMode")||"dark";return`
    <div class="theme-mode-picker">
      <button class="mode-btn ${e==="dark"?"active":""}" data-action="color-mode" data-mode="dark">
        ${u("moon")} Тёмная
      </button>
      <button class="mode-btn ${e==="light"?"active":""}" data-action="color-mode" data-mode="light">
        ${u("sun")} Светлая
      </button>
      <button class="mode-btn ${e==="auto"?"active":""}" data-action="color-mode" data-mode="auto">
        ${u("settings")} Системная
      </button>
    </div>
    <div class="theme-picker">
      ${xa.map(t=>`<button class="theme-swatch ${l.theme===t.id?"active":""}" data-action="theme" data-theme="${t.id}">
          <span class="swatch-dot theme-${t.id}"></span><span>${t.name}</span>
        </button>`).join("")}
      <label class="theme-swatch custom ${Te.test(l.theme)?"active":""}" title="Свой цвет">
        <input type="color" id="theme-custom" value="${Te.test(l.theme)?l.theme:"#c7a6ff"}" aria-label="Свой цвет" />
        <span>Свой цвет</span>
      </label>
    </div>`}function Ks(e){const t=e==null?void 0:e.account;return e!=null&&e.connected?`
      <div class="ytm-account">
        ${t!=null&&t.photo?`<img class="ytm-avatar" src="${b(t.photo)}" alt="" referrerpolicy="no-referrer" />`:`<span class="ytm-avatar fallback">${u("person")}</span>`}
        <div class="ytm-account-main">
          <strong>${b((t==null?void 0:t.name)||"Аккаунт YouTube")}</strong>
          <small>${b((t==null?void 0:t.handle)||"")}${e.updatedAt?` · обновлено ${new Date(e.updatedAt*1e3).toLocaleDateString("ru-RU")}`:""}</small>
        </div>
        <div class="head-actions">
          <button class="btn glass" data-action="ytm-reconnect">${u("refresh")} Обновить cookies</button>
          <button class="btn ghost danger" data-action="ytm-disconnect">${u("logout")} Отключить</button>
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
      <button class="btn primary" type="submit" id="ytm-connect-submit">${u("check")} Подключить</button>
      <p class="form-error" id="ytm-connect-error" role="alert"></p>
    </form>`}function Ji(e){return`
    <section class="section glass-card">
      <div class="section-head">
        <div>
          <h2>${u("ticket")} Приглашения</h2>
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
        <button class="btn primary" type="submit">${u("add")} Создать код</button>
      </form>
      <div class="invite-list">
        ${e.length?e.map(t=>`<div class="invite-row ${t.valid?"":"expired"}">
                  <span class="invite-code">${b(t.code)}</span>
                  <span class="invite-meta">
                    <small>${b(t.note||"без заметки")} · ${t.uses}/${t.maxUses||"∞"} · ${t.isAdmin?"админ":"слушатель"}</small>
                    <small>${t.expiresAt?`до ${new Date(t.expiresAt*1e3).toLocaleDateString("ru-RU")}`:"без срока"}${t.valid?"":" · недействительно"}</small>
                  </span>
                  <button class="icon-btn" data-action="invite-copy" data-code="${b(t.code)}" title="Скопировать ссылку">${u("link")}</button>
                  <button class="icon-btn" data-action="invite-revoke" data-code="${b(t.code)}" title="Отозвать">${u("delete")}</button>
                </div>`).join(""):'<div class="empty-inline">Пока ни одного приглашения</div>'}
      </div>
    </section>`}async function Ki(e){Y();const[t,a]=await Promise.all([vi().catch(()=>({})),ua().catch(()=>[])]);if(e!==l.renderSeq)return;$.playlists=a;const s=[{href:"#/artists",icon:"person",title:"Артисты",sub:`${t.artists||0} в библиотеке`},{href:"#/albums",icon:"album",title:"Альбомы",sub:`${t.albums||0} в библиотеке`},{href:"#/tracks",icon:"music",title:"Треки",sub:`${t.tracks||0} в библиотеке`},{href:"#/playlists",icon:"playlist",title:"Плейлисты",sub:`${a.length} ${H(a.length,"подборка","подборки","подборок")}`},{href:"#/favorites",icon:"heart",title:"Избранное",sub:"Треки, которым вы поставили лайк"},{href:"#/ytm",icon:"ytm",title:"YouTube Music",sub:"Внешний источник: история, лайки, поиск"},{href:"#/live",icon:"radio",title:"Live",sub:"Персональный поток без повторов"},{href:"#/stats",icon:"chart",title:"Статистика",sub:"Часы, артисты и история"}];d("#view").innerHTML=`
    <div class="page library-page">
      <header class="page-head">
        <div>
          <span class="eyebrow">Коллекция</span>
          <h1>Медиатека</h1>
          <p class="muted">${t.tracks||0} ${H(t.tracks||0,"трек","трека","треков")} · ${va(t.sizeBytes||0)}</p>
        </div>
        <div class="head-actions">
          <button class="btn glass" data-action="shuffle-library">${u("shuffle")} Перемешать всё</button>
        </div>
      </header>
      <div class="library-grid">
        ${s.map(n=>`<a class="library-tile" href="${n.href}">
              <span class="tile-icon">${u(n.icon)}</span>
              <span class="tile-main"><strong>${n.title}</strong><small>${b(n.sub)}</small></span>
              <span class="tile-arrow">${u("next")}</span>
            </a>`).join("")}
      </div>
    </div>`}async function Qi(e){var c,o,r,p;Y();const t=!!((c=l.me)!=null&&c.isAdmin),[a,s]=await Promise.all([Zt().catch(()=>({connected:!1,account:null})),t?Mn().catch(()=>[]):Promise.resolve([])]);if(e!==l.renderSeq)return;l.ytmStatus=a,d("#view").innerHTML=`
    <div class="page profile-page">
      <header class="page-head">
        <div class="profile-identity">
          ${Ni($e(),"user-avatar xl")}
          <div>
            <h1>${b($e())}</h1>
            <p class="muted">@${b(((o=l.me)==null?void 0:o.username)||"")}${t?" · администратор":""}</p>
          </div>
        </div>
        <div class="head-actions">
          <button class="btn glass" data-action="open-settings">${u("settings")} Настройки</button>
          <button class="btn ghost danger" data-action="logout">${u("logout")} Выйти</button>
        </div>
      </header>

      <section class="section glass-card">
        <div class="section-head">
          <div>
            <h2>${u("ytm")} YouTube Music</h2>
            <p class="muted">Cookies хранятся зашифрованными и используются только для вашего профиля: поиск, лайки и прослушивание.</p>
          </div>
          <span class="status-chip ${a.connected?"on":""}">${a.connected?"подключено":"не подключено"}</span>
        </div>
        ${Ks(a)}
      </section>

      <section class="section glass-card">
        <h2>${u("palette")} Оформление</h2>
        <p class="muted small">Тема сохраняется в аккаунте и применяется на всех устройствах.</p>
        ${Gi()}
      </section>

      <section class="section glass-card">
        <h2>${u("expand")} Плотность</h2>
        <p class="muted small">Сколько строк и обложек помещается на экране.</p>
        <div class="theme-mode-picker">
          ${Ws.map(m=>`<button class="mode-btn ${(l.density||"default")===m.id?"active":""}" data-action="density" data-value="${m.id}">${m.name}</button>`).join("")}
        </div>
      </section>

      ${t?Ji(s):""}
    </div>`;const n=d("#ytm-connect-form");n==null||n.addEventListener("submit",async m=>{m.preventDefault();const g=d("#ytm-connect-submit"),f=d("#ytm-connect-error"),w=d("#ytm-cookies").value.trim();if(f.textContent="",!w){f.textContent="Вставьте cookies";return}g.disabled=!0;try{await ds(w),y("YouTube Music подключён"),C()}catch(S){f.textContent=S.message||"Не удалось подключить"}finally{g.disabled=!1}});const i=d("#invite-form");i==null||i.addEventListener("submit",async m=>{var g;m.preventDefault();try{const f=await Ln({note:d("#invite-note").value.trim(),expiresInDays:Number(d("#invite-days").value||0),maxUses:Number(d("#invite-uses").value||0),isAdmin:d("#invite-admin").checked});await((g=navigator.clipboard)==null?void 0:g.writeText(cs(f.code)).catch(()=>{})),y("Код создан, ссылка скопирована"),C()}catch(f){y(f.message,"error")}}),(r=d("#theme-custom"))==null||r.addEventListener("input",m=>Ce(m.target.value)),(p=d("#theme-custom"))==null||p.addEventListener("change",async m=>{await Js(m.target.value),C()})}async function Zi(e){var m,g;Y();const t=l.ytmStatus||await Zt().catch(()=>null);if(e!==l.renderSeq)return;if(l.ytmStatus=t,!(t!=null&&t.connected)){d("#view").innerHTML=`
      <div class="page ytm-page">
        <header class="page-head">
          <div><span class="eyebrow">Источник</span><h1>YouTube Music</h1></div>
        </header>
        <section class="section glass-card">
          <div class="section-head">
            <div>
              <h2>Подключите свой аккаунт</h2>
              <p class="muted">Поиск и лайки YouTube Music будут доступны только вам. Подключение занимает минуту.</p>
            </div>
            <span class="status-chip">не подключено</span>
          </div>
          ${Ks(t||{})}
        </section>
      </div>`;const f=d("#ytm-connect-form");f==null||f.addEventListener("submit",async w=>{w.preventDefault();const S=d("#ytm-connect-submit"),L=d("#ytm-connect-error"),z=d("#ytm-cookies").value.trim();if(L.textContent="",!z){L.textContent="Вставьте cookies";return}S.disabled=!0;try{await ds(z),y("YouTube Music подключён"),l.ytmStatus=await Zt().catch(()=>null),C()}catch(F){L.textContent=F.message||"Не удалось подключить"}finally{S.disabled=!1}});return}l.ytmLists=l.ytmLists||{history:[],liked:[],search:[]};const a=(f,w)=>Z(f,{showCover:!0,rowAction:"play-ytm-row",rowList:w});d("#view").innerHTML=`
    <div class="page ytm-page">
      <header class="page-head">
        <div>
          <span class="eyebrow">Источник</span>
          <h1>YouTube Music</h1>
          <p class="muted">${b(((m=t.account)==null?void 0:m.name)||"Подключено")}${(g=t.account)!=null&&g.handle?` · ${b(t.account.handle)}`:""}</p>
        </div>
        <div class="head-actions">
          <button class="btn glass" data-action="ytm-liked">${u("heart")} Обновить лайки</button>
        </div>
      </header>

      <form id="ytm-search-form" class="search-row">
        <label class="searchbox glass">
          ${u("search")}
          <input id="ytm-search-input" type="search" placeholder="Треки, артисты, альбомы…" enterkeyhint="search" autocomplete="off" />
        </label>
        <button class="btn primary" type="submit">${u("search")} Искать</button>
      </form>

      <div class="chip-row">
        ${[["Новинки","новинки музыка 2026"],["Хиты","популярные песни"],["Русское","русская музыка"],["Электроника","electronic mix"],["Лоу-фай","lofi beats"],["Рок","rock classics"],["Джаз","jazz standards"]].map(([f,w])=>`<button class="chip-btn" data-action="ytm-preset" data-query="${b(w)}">${f}</button>`).join("")}
      </div>

      <section class="section" id="ytm-results" hidden></section>

      <section class="section" id="ytm-history-section" hidden>
        <div class="section-head">
          <div>
            <h2>${u("ytm")} Недавно из YouTube</h2>
            <p class="muted">Всё, что вы уже искали или слушали — можно вернуться без нового поиска</p>
          </div>
        </div>
        <div id="ytm-history"></div>
      </section>

      <section class="section" id="ytm-liked-section" hidden>
        <div class="section-head">
          <div>
            <h2>${u("heart")} Мои лайки</h2>
            <p class="muted">Треки, которым вы поставили лайк в YouTube Music</p>
          </div>
        </div>
        <div id="ytm-liked"></div>
      </section>

      <section class="section" id="ytm-empty" hidden>
        <div class="empty-state">
          <span class="empty-icon">${u("ytm")}</span>
          <h2>Пока пусто</h2>
          <p>Найдите трек через поиск выше — он появится здесь и на главной.</p>
        </div>
      </section>
    </div>`;const s=d("#ytm-search-form"),n=d("#ytm-search-input"),i=d("#ytm-results"),c=(f,w,S,L)=>{const z=d(f);if(!z)return;const F=z.querySelector("div[id]")||z;if(!S.length){z.hidden=!0;return}z.hidden=!1,F.innerHTML=a(S,w)},o=(f,w)=>{var S;l.ytmLists.search=f,i.hidden=!1,i.innerHTML=f.length?`<div class="section-head"><h2>${u("search")} Результаты</h2><span class="muted small">${f.length}</span></div>${a(f,"search")}`:`<div class="empty-inline">${b(w)}</div>`,(S=d("#ytm-empty"))==null||S.setAttribute("hidden","")},r=async()=>{const f=n.value.trim();if(f){i.hidden=!1,i.innerHTML=`<div class="skel-rows">${'<div class="skeleton skeleton-line"></div>'.repeat(5)}</div>`;try{const w=await us(f);if(e!==l.renderSeq)return;o(w,"Ничего не найдено")}catch(w){if(Ht(w))return;i.innerHTML=`<div class="empty-inline">${b(w.message)}</div>`}}};s.addEventListener("submit",f=>{f.preventDefault(),r()});let p;n.addEventListener("input",()=>{clearTimeout(p),p=setTimeout(()=>{n.value.trim().length>=2&&r()},500)}),(async()=>{const[f,w]=await Promise.allSettled([hs(40),ps(50)]);if(e!==l.renderSeq)return;f.status==="fulfilled"&&f.value.length&&(l.ytmLists.history=f.value,c("#ytm-history-section","history",f.value)),w.status==="fulfilled"&&w.value.length&&(l.ytmLists.liked=w.value,c("#ytm-liked-section","liked",w.value)),!l.ytmLists.history.length&&!l.ytmLists.liked.length&&(d("#ytm-empty").hidden=!1)})()}document.addEventListener("click",async e=>{var s,n,i,c;const t=e.target.closest("[data-action]");if(!t)return;const a=t.dataset.action;if(a==="open"){location.hash=t.dataset.href;return}if(a==="play-row"){const o=Number(t.dataset.index);if(e.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]'))return;at(!1),await h.playTracks(l.currentTracks,o);return}if(a==="play-list-row"){const o=Number(t.dataset.index);if(e.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]'))return;const r=(s=l.lists)==null?void 0:s[t.dataset.list];if(!(r!=null&&r.length))return;at(!1),await h.playTracks(r,o);return}if(a==="play-ytm-row"){const o=Number(t.dataset.index);if(e.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]'))return;const r=(n=l.ytmLists)==null?void 0:n[t.dataset.list];if(!(r!=null&&r.length))return;at(!1),await h.playTracks(r,o);return}if(a==="play-all"){if(!l.currentTracks.length)return y("Список пуст","warn");at(!1),await h.playTracks(l.currentTracks,0);return}if(a==="shuffle-all"){if(!l.currentTracks.length)return y("Список пуст","warn");at(!1),await h.playTracks(l.currentTracks,0,{shuffle:!0});return}if(a==="shuffle-library"){const o=await ya();l.currentTracks=o,await h.playTracks(o,0,{shuffle:!0});return}if(a==="start-live"){await ji();return}if(a==="play-mix"){await Bi(Number(t.dataset.index));return}if(a==="open-settings"){await Xt();return}if(a==="theme"){await Js(t.dataset.theme),J('[data-action="theme"]').forEach(o=>o.classList.toggle("active",o.dataset.theme===l.theme));return}if(a==="color-mode"){const o=t.dataset.mode;localStorage.setItem("colorMode",o),oa(o),J('[data-action="color-mode"]').forEach(r=>r.classList.toggle("active",r.dataset.mode===o)),y(`Режим: ${o==="dark"?"тёмный":o==="light"?"светлый":"системный"}`);return}if(a==="toggle-password"){const o=document.getElementById(t.dataset.target);if(!o)return;const r=o.type==="password";o.type=r?"text":"password",t.innerHTML=u(r?"eyeOff":"eye"),t.setAttribute("aria-label",r?"Скрыть пароль":"Показать пароль");return}if(a==="density"){const o=t.dataset.value;Gs(o),J('[data-action="density"]').forEach(r=>r.classList.toggle("active",r.dataset.value===o));return}if(a==="logout"){await ns().catch(()=>{}),location.reload();return}if(a==="ytm-disconnect"){if(!confirm("Отключить YouTube Music? Cookies и скачанный кэш этого профиля будут удалены."))return;try{await Dn(),l.ytmStatus={connected:!1,account:null},y("YouTube Music отключён"),C()}catch(o){y(o.message,"error")}return}if(a==="ytm-reconnect"){l.ytmStatus={connected:!1,account:null},d("#view").innerHTML="",C();return}if(a==="run-search"){ia(t.dataset.query||"");return}if(a==="clear-searches"){localStorage.removeItem($a),C();return}if(a==="ytm-preset"){const o=t.dataset.query||"";if(!o)return;const r=d("#ytm-results");r&&(r.hidden=!1,r.innerHTML=`<div class="empty-inline">Ищу «${b(o)}»…</div>`);try{const p=await us(o);l.ytmLists=l.ytmLists||{},l.ytmLists.search=p,r&&(r.innerHTML=p.length?`<div class="section-head"><h2>${u("search")} ${b(o)}</h2><span class="muted small">${p.length}</span></div>${Z(p,{showCover:!0,rowAction:"play-ytm-row",rowList:"search"})}`:'<div class="empty-inline">Ничего не найдено</div>')}catch(p){r&&(r.innerHTML=`<div class="empty-inline">${b(p.message)}</div>`)}return}if(a==="ytm-liked"){const o=d("#ytm-liked-section"),r=d("#ytm-liked");r&&(r.innerHTML='<div class="empty-inline">Загружаю лайки…</div>');try{const p=await ps(200);l.ytmLists=l.ytmLists||{},l.ytmLists.liked=p,o&&(o.hidden=!1),r&&(r.innerHTML=p.length?Z(p,{showCover:!0,rowAction:"play-ytm-row",rowList:"liked"}):'<div class="empty-inline">В YouTube Music пока нет лайков</div>'),y(`Лайков: ${p.length}`)}catch(p){r&&(r.innerHTML=`<div class="empty-inline">${b(p.message)}</div>`)}return}if(a==="invite-copy"){await((i=navigator.clipboard)==null?void 0:i.writeText(cs(t.dataset.code)).catch(()=>{})),y("Ссылка скопирована");return}if(a==="invite-revoke"){if(!confirm("Отозвать приглашение?"))return;try{await _n(t.dataset.code),y("Приглашение отозвано"),C()}catch(o){y(o.message,"error")}return}if(a==="play-album"){e.stopPropagation(),at(!1),await Ci(t.dataset.id);return}if(a==="play-artist"){at(!1),await Ka(t.dataset.id,!1);return}if(a==="shuffle-artist"){at(!1),await Ka(t.dataset.id,!0);return}if(a==="like"){e.stopPropagation(),await Se(t.dataset.id);return}if(a==="like-current"){h.track&&await Se(h.track.id),te();return}if(a==="dislike"){e.stopPropagation(),await Qa(t.dataset.id);return}if(a==="dislike-current"){h.track&&await Qa(h.track.id),te();return}if(a==="add-to-playlist"){e.stopPropagation(),await zi(t.dataset.id);return}if(a==="remove-from-playlist"){e.stopPropagation();try{await on(t.dataset.playlist,Number(t.dataset.index)),y("Трек убран из плейлиста"),C()}catch(o){y(o.message,"error")}return}if(a==="toggle"){!h.track&&l.currentTracks.length?await h.playTracks(l.currentTracks,0):await h.toggle();return}if(a==="prev")return h.previous();if(a==="next")return h.next();if(a==="shuffle")return h.toggleShuffle();if(a==="repeat")return h.cycleRepeat();if(a==="sleep"){Ii();return}if(a==="mute")return h.toggleMute();if(a==="nowplaying")return Ct(l.npTab);if(a==="open-lyrics")return Ct("lyrics");if(a==="open-eq")return Ct("eq");if(a==="open-queue")return Ct("queue");if(a==="close-np")return ke();if(a==="jump-album"){(c=h.track)!=null&&c.albumId&&(ke(),location.hash=`#/album/${h.track.albumId}`);return}if(a==="play-queue"){at(!1),await h.playAt(Number(t.dataset.index));return}if(a==="remove-queue"){e.stopPropagation(),h.removeAt(Number(t.dataset.index)),Ee(d("#np-panel"));return}if(a==="clear-queue"){h.clearQueue(),Ee(d("#np-panel")),y("Очередь очищена");return}if(a==="new-playlist")return e.preventDefault(),qi();if(a==="delete-playlist"){if(!confirm("Удалить этот плейлист?"))return;await ln(t.dataset.id),y("Плейлист удалён"),$.playlists=null,location.hash="#/playlists";return}if(a==="reload")return C();if(a==="reset-eq"){h.resetEq(),Pe(d("#np-panel"));return}if(a==="refresh-lyrics"){if(!h.track)return;l.lyricsRefresh=!0,l.lyricsTrackId=null,Os(d("#np-panel"),h.track);return}});d("#np").addEventListener("click",e=>{const t=e.target.closest("[data-np-tab]");t&&Oi(t.dataset.npTab);const a=e.target.closest("[data-eq-preset]");a&&(h.applyEqPreset(a.dataset.eqPreset),Pe(d("#np-panel")))});d("#np").addEventListener("input",e=>{if(e.target.id==="np-seek"){h.seekTo(Number(e.target.value)),Lt();return}if(e.target.id==="np-volume"){h.setVolume(Number(e.target.value)),re();return}});d("#np").addEventListener("change",e=>{var t;e.target.id==="eq-enabled"&&(h.setEqEnabled(e.target.checked),(t=d(".eq"))==null||t.classList.toggle("disabled",!e.target.checked))});d("#seek").addEventListener("input",e=>{h.seekTo(Number(e.target.value)),Lt()});d("#volume").addEventListener("input",e=>{h.setVolume(Number(e.target.value)),re()});d("#playerbar").addEventListener("wheel",e=>{h.track&&(e.preventDefault(),h.setVolume(h.volumePercent+(e.deltaY<0?5:-5)),re())},{passive:!1});document.addEventListener("keydown",e=>{var a;const t=["INPUT","TEXTAREA"].includes((a=document.activeElement)==null?void 0:a.tagName);if(e.code==="Space"&&!t&&h.track&&(e.preventDefault(),h.toggle()),e.key==="ArrowRight"&&!t&&e.shiftKey&&h.seekBy(5),e.key==="ArrowLeft"&&!t&&e.shiftKey&&h.seekBy(-5),!t&&!e.ctrlKey&&!e.metaKey&&!e.altKey){const s=e.key.toLowerCase();s==="l"&&h.track&&(e.preventDefault(),Se(h.track.id)),s==="n"&&h.track&&(e.preventDefault(),h.next()),s==="p"&&h.track&&(e.preventDefault(),h.previous()),s==="m"&&(e.preventDefault(),h.toggleMute()),s==="s"&&(e.preventDefault(),h.toggleShuffle()),s==="r"&&(e.preventDefault(),h.cycleRepeat()),e.key==="?"&&(e.preventDefault(),Hi())}(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"&&(e.preventDefault(),d("#search-input").focus()),e.key==="Escape"&&(d("#modal-root").innerHTML?nt():ke())});let Me=0,Le=0,_e=0;d("#playerbar").addEventListener("touchstart",e=>{Me=e.touches[0].clientY,Le=e.touches[0].clientX,_e=Date.now()});d("#playerbar").addEventListener("touchend",e=>{const t=e.changedTouches[0].clientY,a=e.changedTouches[0].clientX,s=Me-t,n=Math.abs(a-Le),i=Date.now()-_e;s>80&&i<300&&n<50&&(e.preventDefault(),Ct(l.npTab||"lyrics"))});const We=d(".np-sheet");We&&(We.addEventListener("touchstart",e=>{e.target.closest('.np-seek-bar, .eq-band, input[type="range"]')||(Me=e.touches[0].clientY,Le=e.touches[0].clientX,_e=Date.now())}),We.addEventListener("touchend",e=>{const t=e.changedTouches[0].clientY,a=e.changedTouches[0].clientX,s=t-Me,n=Math.abs(a-Le),i=Date.now()-_e;s>100&&i<300&&n<50&&(e.preventDefault(),ke())}));let Ge=0,Je=null;d("#pb-cover").addEventListener("touchend",e=>{const t=Date.now(),a=e.target;if(t-Ge<300&&a===Je){if(e.preventDefault(),h.track){Se(h.track.id);const s=d("#pb-cover");s.style.transform="scale(0.92)",setTimeout(()=>{s.style.transform=""},150)}Ge=0,Je=null}else Ge=t,Je=a});let Q=null;function Qs(e,t){const a=e.getBoundingClientRect(),s=Math.min(1,Math.max(0,(t-a.top)/a.height));return Math.round(12-s*24)}function tr(e,t){const a=Number(e.dataset.eqBand),s=(12-t)/24*100,n=e.querySelector(".eq-thumb"),i=e.querySelector(".eq-fill");n&&(n.style.top=`${s}%`),i&&(i.style.top=`${Math.min(s,50)}%`,i.style.height=`${Math.abs(50-s)}%`),e.setAttribute("aria-valuenow",String(t));const c=d(`#eq-val-${a}`);c&&(c.textContent=`${t>0?"+":""}${t}`)}function ze(e,t,a){const s=Number(e.dataset.eqBand);tr(e,t),h.eqState.gains[s]=t,h.setEqGain(s,t),a&&(h.eqState.preset="custom",J(".eq-presets .chip-btn").forEach(n=>n.classList.toggle("active",n.dataset.eqPreset==="custom")))}document.addEventListener("pointerdown",e=>{var a;const t=e.target.closest(".eq-track");t&&(e.preventDefault(),Q={el:t,value:Qs(t,e.clientY)},(a=t.setPointerCapture)==null||a.call(t,e.pointerId),ze(t,Q.value,!1))});document.addEventListener("pointermove",e=>{Q&&(e.preventDefault(),Q.value=Qs(Q.el,e.clientY),ze(Q.el,Q.value,!1))});document.addEventListener("pointerup",()=>{Q&&(ze(Q.el,Q.value,!0),Q=null)});document.addEventListener("pointercancel",()=>{Q=null});document.addEventListener("keydown",e=>{var n,i;const t=(i=(n=e.target).closest)==null?void 0:i.call(n,".eq-track");if(!t)return;const a=e.key==="ArrowUp"?1:e.key==="ArrowDown"?-1:0;if(!a)return;e.preventDefault();const s=Number(t.getAttribute("aria-valuenow"))||0;ze(t,Math.max(-12,Math.min(12,s+a)),!0)});const Ke=d("#search-input");Ke.addEventListener("keydown",e=>{if(e.key==="Enter"){const t=Ke.value.trim();if(!t)return;Ke.blur(),zs(t);const a=`#/search?q=${encodeURIComponent(t)}`;location.hash===a?C():location.hash=a}});d("#rescan-btn").addEventListener("click",async()=>{d("#rescan-btn").classList.add("spin");const e=Date.now();try{await ls(),setTimeout(async()=>{d("#rescan-btn").classList.remove("spin"),await yi()},Math.max(2500,Date.now()-e))}catch(t){d("#rescan-btn").classList.remove("spin"),Ht(t)||y(t.message,"error")}});d("#np-pill").addEventListener("click",()=>Ct(l.npTab));h.addEventListener("track",()=>{ka(),l.npOpen&&te(),ie(),Lt()});h.addEventListener("time",()=>{Lt()});h.addEventListener("buffer",Vs);h.addEventListener("state",ie);h.addEventListener("mode",Ea);h.addEventListener("volume",re);h.addEventListener("sleep",Sa);h.addEventListener("eq",()=>{l.npTab==="eq"&&l.npOpen&&Pe(d("#np-panel"))});h.addEventListener("error",e=>y(e.detail,"error"));document.addEventListener("error",e=>{e.target instanceof HTMLImageElement&&(e.target.style.display="none")},!0);window.addEventListener("hashchange",C);h.addEventListener("queueend",async()=>{if(l.liveMode)try{const e=await os(25),t=new Set(h.queue.map(s=>s.id)),a=e.filter(s=>!t.has(s.id));if(!a.length){y("Live: новых треков не нашлось","warn");return}h.appendTracks(a),await h.next(!0)}catch(e){Ht(e)||y(e.message,"error")}});d("#auth-toggle-register").addEventListener("click",()=>{var e;return Ta(((e=d("#register-invite"))==null?void 0:e.value)||"")});d("#auth-toggle-login").addEventListener("click",()=>{location.hash.startsWith("#/register")&&(location.hash="#/home"),It()});d("#register-invite").addEventListener("change",()=>{const e=d("#register-invite").value.trim();e&&Ta(e)});d("#register-form").addEventListener("submit",async e=>{e.preventDefault();const t=d("#register-submit"),a=d("#register-error");a.textContent="",t.disabled=!0;try{await An({invite:d("#register-invite").value.trim(),username:d("#register-username").value.trim(),password:d("#register-password").value,displayName:d("#register-display").value.trim()}),location.hash="#/home",await Ma()}catch(s){a.textContent=s.message||"Не удалось зарегистрироваться"}finally{t.disabled=!1}});d("#login-form").addEventListener("submit",async e=>{e.preventDefault();const t=d("#login-submit"),a=d("#login-error");a.textContent="",t.disabled=!0;try{await pn(d("#login-username").value.trim(),d("#login-password").value),await Ma()}catch(s){a.textContent=s.message||"Не удалось войти"}finally{t.disabled=!1}});document.addEventListener("keydown",e=>{var t,a;e.key==="Enter"&&!d("#auth-screen").hidden&&((t=document.activeElement)==null?void 0:t.id)==="login-username"&&((a=d("#login-password"))==null||a.focus())});window.addEventListener("pagehide",()=>{h.playId&&h._finalizePlay(!1)});re();Ea();ie();Lt();Sa();Ma();
