(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();const wa={home:"M4 20v-8H2L12 3l10 9h-2v8h-6v-6h-4v6H4z",person:"M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z",album:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",music:"M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z",playlist:"M3 6h12v2H3V6zm0 4h12v2H3v-2zm0 4h8v2H3v-2zm12 .5a3.5 3.5 0 1 0 3.5 3.5V9h3V6h-4v8.5a3.5 3.5 0 0 0-2.5-.9z",search:"M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z",play:"M8 5v14l11-7L8 5z",pause:"M6 5h4v14H6V5zm8 0h4v14h-4V5z",prev:"M6 6h2v12H6V6zm3.5 6L18 18V6l-8.5 6z",next:"M16 6h2v12h-2V6zM6 18l8.5-6L6 6v12z",shuffle:"M10.59 9.17 5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z",repeat:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z",repeatOne:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z",volumeUp:"M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.5 4.5 0 0 0 16.5 12zM14 3.23v2.06a6.99 6.99 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54z",volumeDown:"M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.5 4.5 0 0 0 16.5 12z",volumeOff:"M16.5 12a4.5 4.5 0 0 0-2.5-4.03v2.21l2.45 2.45A4.4 4.4 0 0 0 16.5 12zM19 12a7 7 0 0 1-.94 3.51l1.48 1.48A9 9 0 0 0 14 4.75v2.06A7 7 0 0 1 19 12zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25a7 7 0 0 1-2.25 1.2v2.06a9 9 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z",queue:"M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18a3 3 0 1 0 2 2.82V8h3V6h-5z",lyrics:"M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2z",equalizer:"M7 20h2V10H7v10zm4-8h2V4h-2v8zm4 4h2V7h-2v9zM3 20h2v-6H3v6z",close:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",back:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",add:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",delete:"M6 19c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z",heart:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",heartOutline:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z",more:"M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",clock:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z",library:"M4 6H2v14a2 2 0 0 0 2 2h14v-2H4V6zm16-4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-3 9H9V9h8v2zm-2 4H9v-2h6v2zm2-8H9V5h8v2z",refresh:"M17.65 6.35A8 8 0 1 0 19.73 14h-2.08A6 6 0 1 1 12 6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z",edit:"M3 17.25V21h3.75L17.8 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",check:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",wave:"M3 12h2v4H3v-4zm4-4h2v12H7V8zm4-4h2v16h-2V4zm4 6h2v6h-2v-6zm4-2h2v10h-2V8z",radio:"M3.24 6.15C2.51 6.43 2 7.17 2 8v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-.83-.51-1.57-1.24-1.85L12.7 2.3a1 1 0 0 0-.7 0L3.24 6.15zM8 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm10-10H9v2h9v-2zm0 4h-3v2h3v-2z",logout:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5-5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z",thumbDown:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z",thumbUp:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z",chart:"M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z",palette:"M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z",settings:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.03 7.03 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.47.41l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z",chevronDown:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z",chevronRight:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z",ytm:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-13a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-1.5 7.25v-4.5L14.5 12l-4 2.25z",copy:"M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z",link:"M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4a3.1 3.1 0 0 1 0 6.2h-4V17h4a5 5 0 0 0 0-10z",ticket:"M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 1 0 4v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 1 0-4zm-2-1.46a4 4 0 0 0 0 6.92V18H4v-2.54a4 4 0 0 0 0-6.92V6h16v2.54zM11 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z",key:"M12.65 10A6 6 0 1 0 12.65 14H17v4h4v-4h2v-4H12.65zM7 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",lock:"M18 8h-1V6A5 5 0 0 0 7 6v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zM9 6a3 3 0 0 1 6 0v2H9V6zm9 14H6V10h12v10zm-6-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",moreHoriz:"M6 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",queueAdd:"M14 10H3v2h11v-2zm0-4H3v2h11V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM3 16h7v-2H3v2z",sparkle:"M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z",external:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z",shield:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",darkMode:"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8A9.3 9.3 0 0 0 12 3z",lightMode:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2 13h2a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm18 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM11 2v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM5.99 4.58a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06z",expand:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z",sun:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2 13h2a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm18 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM11 2v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM5.99 4.58a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06z",moon:"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8A9.3 9.3 0 0 0 12 3z",menu:"M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"};function d(e,t=""){const a=wa[e]||wa.music;return`<svg class="icon ${t}" viewBox="0 0 24 24" aria-hidden="true"><path d="${a}"/></svg>`}const Me="1.16.1",Le="rustream-web";class Yt extends Error{constructor(t,a=0,n=""){super(t),this.name="ApiError",this.status=a,this.code=n}}function na(e,t={}){const a=new URLSearchParams({v:Me,c:Le,f:"json",...t});return`/rest/${e}.view?${a.toString()}`}async function ot(e,t={}){var s;const a=await fetch(na(e,t),{credentials:"same-origin"});if(a.status===401)throw new Yt("Требуется вход в аккаунт",401);if(!a.ok)throw new Yt(`HTTP ${a.status}`,a.status);const i=(await a.json())["subsonic-response"];if(!i)throw new Yt("Некорректный ответ сервера");if(i.status!=="ok")throw new Yt(((s=i.error)==null?void 0:s.message)||"Ошибка API");return i}async function M(e,t={}){const a=await fetch(e,{credentials:"same-origin",...t,headers:{"Content-Type":"application/json",...t.headers||{}}});let n=null;try{n=await a.json()}catch{n=null}if(!a.ok){const i=a.status===401?"Требуется вход в аккаунт":`HTTP ${a.status}`;throw new Yt((n==null?void 0:n.error)||i,a.status,(n==null?void 0:n.code)||"")}return n}const Mt=(e,t=300)=>e?na("getCoverArt",{id:e,size:t}):"",$a=e=>na("stream",{id:e});async function Vn(){var a;const e=await ot("getArtists"),t=[];for(const n of((a=e.artists)==null?void 0:a.index)||[])for(const i of n.artist||[])t.push(i);return t}const Ua=e=>ot("getArtist",{id:e}),ia=e=>ot("getAlbum",{id:e});async function Xa(e="alphabeticalByName",t=100,a=0){var i;return((i=(await ot("getAlbumList2",{type:e,size:t,offset:a})).albumList2)==null?void 0:i.album)||[]}async function jn(e=500){var a;return((a=(await ot("getRandomSongs",{size:e})).randomSongs)==null?void 0:a.song)||[]}async function Yn(e){return(await ot("search3",{query:e,artistCount:30,albumCount:50,songCount:100})).searchResult3||{artist:[],album:[],song:[]}}async function sa(){var t;return((t=(await ot("getPlaylists")).playlists)==null?void 0:t.playlist)||[]}async function Bn(e){return(await ot("getPlaylist",{id:e})).playlist}const Wa=(e,t=[])=>{const a=new URLSearchParams({v:Me,c:Le,f:"json",name:e});return t.forEach(n=>a.append("songId",n)),fetch(`/rest/createPlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(n=>n.json()).then(n=>n["subsonic-response"])},Fn=(e,t)=>{const a=new URLSearchParams({v:Me,c:Le,f:"json",playlistId:e,songIdToAdd:t});return fetch(`/rest/updatePlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(n=>n.json())},Un=(e,t)=>{const a=new URLSearchParams({v:Me,c:Le,f:"json",playlistId:e,songIndexToRemove:String(t)});return fetch(`/rest/updatePlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(n=>n.json())},Xn=e=>ot("deletePlaylist",{id:e});async function Wn(){return(await ot("getStarred2")).starred2||{artist:[],album:[],song:[]}}async function Gn(){return M("/api/stats")}async function ze(){return M("/api/me")}async function Jn(){return M("/api/session")}async function We(){return M("/api/auth/config")}function Kn(e,t){return M("/api/auth/login",{method:"POST",body:JSON.stringify({username:e,password:t})})}function Ga(){return M("/api/auth/logout",{method:"POST"})}function Sa(e,t){return Ja({displayName:e,theme:t})}function Ja(e){return M("/api/me",{method:"PATCH",body:JSON.stringify(e)})}async function Qn(){return M("/api/me/ratings")}function Zn(e,t){return M("/api/me/ratings",{method:"PUT",body:JSON.stringify({trackId:e,rating:t})})}function qe(){return M("/api/admin/lastfm")}function ka(e,t,a=!1){return M("/api/admin/lastfm",{method:"PUT",body:JSON.stringify({apiKey:e,apiSecret:t,clear:a})})}function ti(e,t){return M("/api/me/password",{method:"POST",body:JSON.stringify({currentPassword:e,newPassword:t})})}function ei({lastfmUsername:e,lastfmSessionKey:t,listenbrainzToken:a}){return M("/api/me/scrobbling",{method:"PUT",body:JSON.stringify({lastfmUsername:e,lastfmSessionKey:t,listenbrainzToken:a})})}async function Ka(){return M("/api/me/stats")}async function ai(e,t="web"){return M("/api/plays/start",{method:"POST",body:JSON.stringify({trackId:e,source:t})})}function Ea(e,t,a=!1){return M("/api/plays/update",{method:"POST",body:JSON.stringify({playId:e,positionMs:t,completed:a})})}async function Qa(e=40){return(await M(`/api/live/queue?count=${e}`)).tracks||[]}async function ni(){return(await M("/api/live/mixes")).mixes||[]}async function ii(e,t=!1){return M(`/api/lyrics/${encodeURIComponent(e)}${t?"?refresh=1":""}`)}async function Za(){return M("/api/rescan",{method:"POST"})}async function si(){return(await M("/api/users")).users||[]}function ri({username:e,password:t,displayName:a,isAdmin:n}){return M("/api/users",{method:"POST",body:JSON.stringify({username:e,password:t,displayName:a,isAdmin:n})})}function oi(){return M("/api/me/history",{method:"DELETE"})}function li(e){return M(`/api/users/${e}`,{method:"DELETE"})}function ci(){return M("/api/lastfm/connect")}function di(e=""){return M("/api/lastfm/complete",{method:"POST",body:JSON.stringify({token:e})})}async function ui(){const e=await M("/api/admin/invites");return(e==null?void 0:e.invites)||[]}async function pi({note:e,expiresInDays:t,maxUses:a,isAdmin:n}){const i=await M("/api/admin/invites",{method:"POST",body:JSON.stringify({note:e,expiresInDays:t,maxUses:a,isAdmin:n})});return i==null?void 0:i.invite}function hi(e){return M(`/api/admin/invites/${encodeURIComponent(e)}`,{method:"DELETE"})}function fi(e){return M(`/api/auth/invite/${encodeURIComponent(e)}`)}function mi({invite:e,username:t,password:a,displayName:n}){return M("/api/auth/register",{method:"POST",body:JSON.stringify({invite:e,username:t,password:a,displayName:n||void 0})})}const tn=e=>`${location.origin}/static/index.html#/register?invite=${encodeURIComponent(e)}`;function _e(){return M("/api/me/ytm")}function vi(e){return M("/api/me/ytm",{method:"PUT",body:JSON.stringify({cookies:e})})}function gi(){return M("/api/me/ytm",{method:"DELETE"})}async function en(e,t=40){const a=new URLSearchParams({q:e,limit:String(t)}),n=await M(`/api/ytm/search?${a.toString()}`);return(n==null?void 0:n.tracks)||[]}async function an(e=200){const t=await M(`/api/ytm/liked?limit=${e}`);return(t==null?void 0:t.tracks)||[]}async function nn(e=40){const t=await M(`/api/ytm/history?limit=${e}`);return(t==null?void 0:t.tracks)||[]}/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function bi(e,t,a){return(t=Si(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ut(){return ut=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},ut.apply(null,arguments)}function Ta(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),a.push.apply(a,n)}return a}function st(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Ta(Object(a),!0).forEach(function(n){bi(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ta(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function yi(e,t){if(e==null)return{};var a,n,i=wi(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}function wi(e,t){if(e==null)return{};var a={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;a[n]=e[n]}return a}function $i(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var n=a.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Si(e){var t=$i(e,"string");return typeof t=="symbol"?t:t+""}function Ge(e){"@babel/helpers - typeof";return Ge=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ge(e)}var ki="1.15.7";function dt(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var pt=dt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),ee=dt(/Edge/i),Ma=dt(/firefox/i),Wt=dt(/safari/i)&&!dt(/chrome/i)&&!dt(/android/i),ra=dt(/iP(ad|od|hone)/i),sn=dt(/chrome/i)&&dt(/android/i),rn={capture:!1,passive:!1};function _(e,t,a){e.addEventListener(t,a,!pt&&rn)}function L(e,t,a){e.removeEventListener(t,a,!pt&&rn)}function he(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function on(e){return e.host&&e!==document&&e.host.nodeType&&e.host!==e?e.host:e.parentNode}function tt(e,t,a,n){if(e){a=a||document;do{if(t!=null&&(t[0]===">"?e.parentNode===a&&he(e,t):he(e,t))||n&&e===a)return e;if(e===a)break}while(e=on(e))}return null}var La=/\s+/g;function X(e,t,a){if(e&&t)if(e.classList)e.classList[a?"add":"remove"](t);else{var n=(" "+e.className+" ").replace(La," ").replace(" "+t+" "," ");e.className=(n+(a?" "+t:"")).replace(La," ")}}function S(e,t,a){var n=e&&e.style;if(n){if(a===void 0)return document.defaultView&&document.defaultView.getComputedStyle?a=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(a=e.currentStyle),t===void 0?a:a[t];!(t in n)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),n[t]=a+(typeof a=="string"?"":"px")}}function Pt(e,t){var a="";if(typeof e=="string")a=e;else do{var n=S(e,"transform");n&&n!=="none"&&(a=n+" "+a)}while(!t&&(e=e.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(a)}function ln(e,t,a){if(e){var n=e.getElementsByTagName(t),i=0,s=n.length;if(a)for(;i<s;i++)a(n[i],i);return n}return[]}function it(){var e=document.scrollingElement;return e||document.documentElement}function z(e,t,a,n,i){if(!(!e.getBoundingClientRect&&e!==window)){var s,r,l,c,p,v,g;if(e!==window&&e.parentNode&&e!==it()?(s=e.getBoundingClientRect(),r=s.top,l=s.left,c=s.bottom,p=s.right,v=s.height,g=s.width):(r=0,l=0,c=window.innerHeight,p=window.innerWidth,v=window.innerHeight,g=window.innerWidth),(t||a)&&e!==window&&(i=i||e.parentNode,!pt))do if(i&&i.getBoundingClientRect&&(S(i,"transform")!=="none"||a&&S(i,"position")!=="static")){var f=i.getBoundingClientRect();r-=f.top+parseInt(S(i,"border-top-width")),l-=f.left+parseInt(S(i,"border-left-width")),c=r+s.height,p=l+s.width;break}while(i=i.parentNode);if(n&&e!==window){var w=Pt(i||e),E=w&&w.a,x=w&&w.d;w&&(r/=x,l/=E,g/=E,v/=x,c=r+v,p=l+g)}return{top:r,left:l,bottom:c,right:p,width:g,height:v}}}function _a(e,t,a){for(var n=gt(e,!0),i=z(e)[t];n;){var s=z(n)[a],r=void 0;if(r=i>=s,!r)return n;if(n===it())break;n=gt(n,!1)}return!1}function zt(e,t,a,n){for(var i=0,s=0,r=e.children;s<r.length;){if(r[s].style.display!=="none"&&r[s]!==k.ghost&&(n||r[s]!==k.dragged)&&tt(r[s],a.draggable,e,!1)){if(i===t)return r[s];i++}s++}return null}function oa(e,t){for(var a=e.lastElementChild;a&&(a===k.ghost||S(a,"display")==="none"||t&&!he(a,t));)a=a.previousElementSibling;return a||null}function G(e,t){var a=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==k.clone&&(!t||he(e,t))&&a++;return a}function xa(e){var t=0,a=0,n=it();if(e)do{var i=Pt(e),s=i.a,r=i.d;t+=e.scrollLeft*s,a+=e.scrollTop*r}while(e!==n&&(e=e.parentNode));return[t,a]}function Ei(e,t){for(var a in e)if(e.hasOwnProperty(a)){for(var n in t)if(t.hasOwnProperty(n)&&t[n]===e[a][n])return Number(a)}return-1}function gt(e,t){if(!e||!e.getBoundingClientRect)return it();var a=e,n=!1;do if(a.clientWidth<a.scrollWidth||a.clientHeight<a.scrollHeight){var i=S(a);if(a.clientWidth<a.scrollWidth&&(i.overflowX=="auto"||i.overflowX=="scroll")||a.clientHeight<a.scrollHeight&&(i.overflowY=="auto"||i.overflowY=="scroll")){if(!a.getBoundingClientRect||a===document.body)return it();if(n||t)return a;n=!0}}while(a=a.parentNode);return it()}function Ti(e,t){if(e&&t)for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);return e}function He(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var Gt;function cn(e,t){return function(){if(!Gt){var a=arguments,n=this;a.length===1?e.call(n,a[0]):e.apply(n,a),Gt=setTimeout(function(){Gt=void 0},t)}}}function Mi(){clearTimeout(Gt),Gt=void 0}function dn(e,t,a){e.scrollLeft+=t,e.scrollTop+=a}function un(e){var t=window.Polymer,a=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):a?a(e).clone(!0)[0]:e.cloneNode(!0)}function pn(e,t,a){var n={};return Array.from(e.children).forEach(function(i){var s,r,l,c;if(!(!tt(i,t.draggable,e,!1)||i.animated||i===a)){var p=z(i);n.left=Math.min((s=n.left)!==null&&s!==void 0?s:1/0,p.left),n.top=Math.min((r=n.top)!==null&&r!==void 0?r:1/0,p.top),n.right=Math.max((l=n.right)!==null&&l!==void 0?l:-1/0,p.right),n.bottom=Math.max((c=n.bottom)!==null&&c!==void 0?c:-1/0,p.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var B="Sortable"+new Date().getTime();function Li(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var n=[].slice.call(this.el.children);n.forEach(function(i){if(!(S(i,"display")==="none"||i===k.ghost)){e.push({target:i,rect:z(i)});var s=st({},e[e.length-1].rect);if(i.thisAnimationDuration){var r=Pt(i,!0);r&&(s.top-=r.f,s.left-=r.e)}i.fromRect=s}})}},addAnimationState:function(n){e.push(n)},removeAnimationState:function(n){e.splice(Ei(e,{target:n}),1)},animateAll:function(n){var i=this;if(!this.options.animation){clearTimeout(t),typeof n=="function"&&n();return}var s=!1,r=0;e.forEach(function(l){var c=0,p=l.target,v=p.fromRect,g=z(p),f=p.prevFromRect,w=p.prevToRect,E=l.rect,x=Pt(p,!0);x&&(g.top-=x.f,g.left-=x.e),p.toRect=g,p.thisAnimationDuration&&He(f,g)&&!He(v,g)&&(E.top-g.top)/(E.left-g.left)===(v.top-g.top)/(v.left-g.left)&&(c=xi(E,f,w,i.options)),He(g,v)||(p.prevFromRect=v,p.prevToRect=g,c||(c=i.options.animation),i.animate(p,E,g,c)),c&&(s=!0,r=Math.max(r,c),clearTimeout(p.animationResetTimer),p.animationResetTimer=setTimeout(function(){p.animationTime=0,p.prevFromRect=null,p.fromRect=null,p.prevToRect=null,p.thisAnimationDuration=null},c),p.thisAnimationDuration=c)}),clearTimeout(t),s?t=setTimeout(function(){typeof n=="function"&&n()},r):typeof n=="function"&&n(),e=[]},animate:function(n,i,s,r){if(r){S(n,"transition",""),S(n,"transform","");var l=Pt(this.el),c=l&&l.a,p=l&&l.d,v=(i.left-s.left)/(c||1),g=(i.top-s.top)/(p||1);n.animatingX=!!v,n.animatingY=!!g,S(n,"transform","translate3d("+v+"px,"+g+"px,0)"),this.forRepaintDummy=_i(n),S(n,"transition","transform "+r+"ms"+(this.options.easing?" "+this.options.easing:"")),S(n,"transform","translate3d(0,0,0)"),typeof n.animated=="number"&&clearTimeout(n.animated),n.animated=setTimeout(function(){S(n,"transition",""),S(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},r)}}}}function _i(e){return e.offsetWidth}function xi(e,t,a,n){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-a.top,2)+Math.pow(t.left-a.left,2))*n.animation}var Lt=[],Ie={initializeByDefault:!0},ae={mount:function(t){for(var a in Ie)Ie.hasOwnProperty(a)&&!(a in t)&&(t[a]=Ie[a]);Lt.forEach(function(n){if(n.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),Lt.push(t)},pluginEvent:function(t,a,n){var i=this;this.eventCanceled=!1,n.cancel=function(){i.eventCanceled=!0};var s=t+"Global";Lt.forEach(function(r){a[r.pluginName]&&(a[r.pluginName][s]&&a[r.pluginName][s](st({sortable:a},n)),a.options[r.pluginName]&&a[r.pluginName][t]&&a[r.pluginName][t](st({sortable:a},n)))})},initializePlugins:function(t,a,n,i){Lt.forEach(function(l){var c=l.pluginName;if(!(!t.options[c]&&!l.initializeByDefault)){var p=new l(t,a,t.options);p.sortable=t,p.options=t.options,t[c]=p,ut(n,p.defaults)}});for(var s in t.options)if(t.options.hasOwnProperty(s)){var r=this.modifyOption(t,s,t.options[s]);typeof r<"u"&&(t.options[s]=r)}},getEventProperties:function(t,a){var n={};return Lt.forEach(function(i){typeof i.eventProperties=="function"&&ut(n,i.eventProperties.call(a[i.pluginName],t))}),n},modifyOption:function(t,a,n){var i;return Lt.forEach(function(s){t[s.pluginName]&&s.optionListeners&&typeof s.optionListeners[a]=="function"&&(i=s.optionListeners[a].call(t[s.pluginName],n))}),i}};function Di(e){var t=e.sortable,a=e.rootEl,n=e.name,i=e.targetEl,s=e.cloneEl,r=e.toEl,l=e.fromEl,c=e.oldIndex,p=e.newIndex,v=e.oldDraggableIndex,g=e.newDraggableIndex,f=e.originalEvent,w=e.putSortable,E=e.extraEventProperties;if(t=t||a&&a[B],!!t){var x,I=t.options,K="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!pt&&!ee?x=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(x=document.createEvent("Event"),x.initEvent(n,!0,!0)),x.to=r||a,x.from=l||a,x.item=i||a,x.clone=s,x.oldIndex=c,x.newIndex=p,x.oldDraggableIndex=v,x.newDraggableIndex=g,x.originalEvent=f,x.pullMode=w?w.lastPutMode:void 0;var R=st(st({},E),ae.getEventProperties(n,t));for(var Q in R)x[Q]=R[Q];a&&a.dispatchEvent(x),I[K]&&I[K].call(t,x)}}var Ai=["evt"],Y=function(t,a){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.evt,s=yi(n,Ai);ae.pluginEvent.bind(k)(t,a,st({dragEl:m,parentEl:C,ghostEl:T,rootEl:D,nextEl:Tt,lastDownEl:ce,cloneEl:A,cloneHidden:vt,dragStarted:Bt,putSortable:O,activeSortable:k.active,originalEvent:i,oldIndex:At,oldDraggableIndex:Jt,newIndex:W,newDraggableIndex:mt,hideGhostForTarget:vn,unhideGhostForTarget:gn,cloneNowHidden:function(){vt=!0},cloneNowShown:function(){vt=!1},dispatchSortableEvent:function(l){V({sortable:a,name:l,originalEvent:i})}},s))};function V(e){Di(st({putSortable:O,cloneEl:A,targetEl:m,rootEl:D,oldIndex:At,oldDraggableIndex:Jt,newIndex:W,newDraggableIndex:mt},e))}var m,C,T,D,Tt,ce,A,vt,At,W,Jt,mt,se,O,Dt=!1,fe=!1,me=[],kt,Z,Oe,Ne,Da,Aa,Bt,_t,Kt,Qt=!1,re=!1,de,N,Re=[],Je=!1,ve=[],xe=typeof document<"u",oe=ra,Ca=ee||pt?"cssFloat":"float",Ci=xe&&!sn&&!ra&&"draggable"in document.createElement("div"),hn=(function(){if(xe){if(pt)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}})(),fn=function(t,a){var n=S(t),i=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),s=zt(t,0,a),r=zt(t,1,a),l=s&&S(s),c=r&&S(r),p=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+z(s).width,v=c&&parseInt(c.marginLeft)+parseInt(c.marginRight)+z(r).width;if(n.display==="flex")return n.flexDirection==="column"||n.flexDirection==="column-reverse"?"vertical":"horizontal";if(n.display==="grid")return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(s&&l.float&&l.float!=="none"){var g=l.float==="left"?"left":"right";return r&&(c.clear==="both"||c.clear===g)?"vertical":"horizontal"}return s&&(l.display==="block"||l.display==="flex"||l.display==="table"||l.display==="grid"||p>=i&&n[Ca]==="none"||r&&n[Ca]==="none"&&p+v>i)?"vertical":"horizontal"},Pi=function(t,a,n){var i=n?t.left:t.top,s=n?t.right:t.bottom,r=n?t.width:t.height,l=n?a.left:a.top,c=n?a.right:a.bottom,p=n?a.width:a.height;return i===l||s===c||i+r/2===l+p/2},zi=function(t,a){var n;return me.some(function(i){var s=i[B].options.emptyInsertThreshold;if(!(!s||oa(i))){var r=z(i),l=t>=r.left-s&&t<=r.right+s,c=a>=r.top-s&&a<=r.bottom+s;if(l&&c)return n=i}}),n},mn=function(t){function a(s,r){return function(l,c,p,v){var g=l.options.group.name&&c.options.group.name&&l.options.group.name===c.options.group.name;if(s==null&&(r||g))return!0;if(s==null||s===!1)return!1;if(r&&s==="clone")return s;if(typeof s=="function")return a(s(l,c,p,v),r)(l,c,p,v);var f=(r?l:c).options.group.name;return s===!0||typeof s=="string"&&s===f||s.join&&s.indexOf(f)>-1}}var n={},i=t.group;(!i||Ge(i)!="object")&&(i={name:i}),n.name=i.name,n.checkPull=a(i.pull,!0),n.checkPut=a(i.put),n.revertClone=i.revertClone,t.group=n},vn=function(){!hn&&T&&S(T,"display","none")},gn=function(){!hn&&T&&S(T,"display","")};xe&&!sn&&document.addEventListener("click",function(e){if(fe)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),fe=!1,!1},!0);var Et=function(t){if(m){t=t.touches?t.touches[0]:t;var a=zi(t.clientX,t.clientY);if(a){var n={};for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);n.target=n.rootEl=a,n.preventDefault=void 0,n.stopPropagation=void 0,a[B]._onDragOver(n)}}},qi=function(t){m&&m.parentNode[B]._isOutsideThisEl(t.target)};function k(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=ut({},t),e[B]=this;var a={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return fn(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(r,l){r.setData("Text",l.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:k.supportPointer!==!1&&"PointerEvent"in window&&(!Wt||ra),emptyInsertThreshold:5};ae.initializePlugins(this,e,a);for(var n in a)!(n in t)&&(t[n]=a[n]);mn(t);for(var i in this)i.charAt(0)==="_"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this));this.nativeDraggable=t.forceFallback?!1:Ci,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?_(e,"pointerdown",this._onTapStart):(_(e,"mousedown",this._onTapStart),_(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(_(e,"dragover",this),_(e,"dragenter",this)),me.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),ut(this,Li())}k.prototype={constructor:k,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(_t=null)},_getDirection:function(t,a){return typeof this.options.direction=="function"?this.options.direction.call(this,t,a,m):this.options.direction},_onTapStart:function(t){if(t.cancelable){var a=this,n=this.el,i=this.options,s=i.preventOnFilter,r=t.type,l=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,c=(l||t).target,p=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||c,v=i.filter;if(Yi(n),!m&&!(/mousedown|pointerdown/.test(r)&&t.button!==0||i.disabled)&&!p.isContentEditable&&!(!this.nativeDraggable&&Wt&&c&&c.tagName.toUpperCase()==="SELECT")&&(c=tt(c,i.draggable,n,!1),!(c&&c.animated)&&ce!==c)){if(At=G(c),Jt=G(c,i.draggable),typeof v=="function"){if(v.call(this,t,c,this)){V({sortable:a,rootEl:p,name:"filter",targetEl:c,toEl:n,fromEl:n}),Y("filter",a,{evt:t}),s&&t.preventDefault();return}}else if(v&&(v=v.split(",").some(function(g){if(g=tt(p,g.trim(),n,!1),g)return V({sortable:a,rootEl:g,name:"filter",targetEl:c,fromEl:n,toEl:n}),Y("filter",a,{evt:t}),!0}),v)){s&&t.preventDefault();return}i.handle&&!tt(p,i.handle,n,!1)||this._prepareDragStart(t,l,c)}}},_prepareDragStart:function(t,a,n){var i=this,s=i.el,r=i.options,l=s.ownerDocument,c;if(n&&!m&&n.parentNode===s){var p=z(n);if(D=s,m=n,C=m.parentNode,Tt=m.nextSibling,ce=n,se=r.group,k.dragged=m,kt={target:m,clientX:(a||t).clientX,clientY:(a||t).clientY},Da=kt.clientX-p.left,Aa=kt.clientY-p.top,this._lastX=(a||t).clientX,this._lastY=(a||t).clientY,m.style["will-change"]="all",c=function(){if(Y("delayEnded",i,{evt:t}),k.eventCanceled){i._onDrop();return}i._disableDelayedDragEvents(),!Ma&&i.nativeDraggable&&(m.draggable=!0),i._triggerDragStart(t,a),V({sortable:i,name:"choose",originalEvent:t}),X(m,r.chosenClass,!0)},r.ignore.split(",").forEach(function(v){ln(m,v.trim(),Ve)}),_(l,"dragover",Et),_(l,"mousemove",Et),_(l,"touchmove",Et),r.supportPointer?(_(l,"pointerup",i._onDrop),!this.nativeDraggable&&_(l,"pointercancel",i._onDrop)):(_(l,"mouseup",i._onDrop),_(l,"touchend",i._onDrop),_(l,"touchcancel",i._onDrop)),Ma&&this.nativeDraggable&&(this.options.touchStartThreshold=4,m.draggable=!0),Y("delayStart",this,{evt:t}),r.delay&&(!r.delayOnTouchOnly||a)&&(!this.nativeDraggable||!(ee||pt))){if(k.eventCanceled){this._onDrop();return}r.supportPointer?(_(l,"pointerup",i._disableDelayedDrag),_(l,"pointercancel",i._disableDelayedDrag)):(_(l,"mouseup",i._disableDelayedDrag),_(l,"touchend",i._disableDelayedDrag),_(l,"touchcancel",i._disableDelayedDrag)),_(l,"mousemove",i._delayedDragTouchMoveHandler),_(l,"touchmove",i._delayedDragTouchMoveHandler),r.supportPointer&&_(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(c,r.delay)}else c()}},_delayedDragTouchMoveHandler:function(t){var a=t.touches?t.touches[0]:t;Math.max(Math.abs(a.clientX-this._lastX),Math.abs(a.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){m&&Ve(m),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;L(t,"mouseup",this._disableDelayedDrag),L(t,"touchend",this._disableDelayedDrag),L(t,"touchcancel",this._disableDelayedDrag),L(t,"pointerup",this._disableDelayedDrag),L(t,"pointercancel",this._disableDelayedDrag),L(t,"mousemove",this._delayedDragTouchMoveHandler),L(t,"touchmove",this._delayedDragTouchMoveHandler),L(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,a){a=a||t.pointerType=="touch"&&t,!this.nativeDraggable||a?this.options.supportPointer?_(document,"pointermove",this._onTouchMove):a?_(document,"touchmove",this._onTouchMove):_(document,"mousemove",this._onTouchMove):(_(m,"dragend",this),_(D,"dragstart",this._onDragStart));try{document.selection?ue(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,a){if(Dt=!1,D&&m){Y("dragStarted",this,{evt:a}),this.nativeDraggable&&_(document,"dragover",qi);var n=this.options;!t&&X(m,n.dragClass,!1),X(m,n.ghostClass,!0),k.active=this,t&&this._appendGhost(),V({sortable:this,name:"start",originalEvent:a})}else this._nulling()},_emulateDragOver:function(){if(Z){this._lastX=Z.clientX,this._lastY=Z.clientY,vn();for(var t=document.elementFromPoint(Z.clientX,Z.clientY),a=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(Z.clientX,Z.clientY),t!==a);)a=t;if(m.parentNode[B]._isOutsideThisEl(t),a)do{if(a[B]){var n=void 0;if(n=a[B]._onDragOver({clientX:Z.clientX,clientY:Z.clientY,target:t,rootEl:a}),n&&!this.options.dragoverBubble)break}t=a}while(a=on(a));gn()}},_onTouchMove:function(t){if(kt){var a=this.options,n=a.fallbackTolerance,i=a.fallbackOffset,s=t.touches?t.touches[0]:t,r=T&&Pt(T,!0),l=T&&r&&r.a,c=T&&r&&r.d,p=oe&&N&&xa(N),v=(s.clientX-kt.clientX+i.x)/(l||1)+(p?p[0]-Re[0]:0)/(l||1),g=(s.clientY-kt.clientY+i.y)/(c||1)+(p?p[1]-Re[1]:0)/(c||1);if(!k.active&&!Dt){if(n&&Math.max(Math.abs(s.clientX-this._lastX),Math.abs(s.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(T){r?(r.e+=v-(Oe||0),r.f+=g-(Ne||0)):r={a:1,b:0,c:0,d:1,e:v,f:g};var f="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");S(T,"webkitTransform",f),S(T,"mozTransform",f),S(T,"msTransform",f),S(T,"transform",f),Oe=v,Ne=g,Z=s}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!T){var t=this.options.fallbackOnBody?document.body:D,a=z(m,!0,oe,!0,t),n=this.options;if(oe){for(N=t;S(N,"position")==="static"&&S(N,"transform")==="none"&&N!==document;)N=N.parentNode;N!==document.body&&N!==document.documentElement?(N===document&&(N=it()),a.top+=N.scrollTop,a.left+=N.scrollLeft):N=it(),Re=xa(N)}T=m.cloneNode(!0),X(T,n.ghostClass,!1),X(T,n.fallbackClass,!0),X(T,n.dragClass,!0),S(T,"transition",""),S(T,"transform",""),S(T,"box-sizing","border-box"),S(T,"margin",0),S(T,"top",a.top),S(T,"left",a.left),S(T,"width",a.width),S(T,"height",a.height),S(T,"opacity","0.8"),S(T,"position",oe?"absolute":"fixed"),S(T,"zIndex","100000"),S(T,"pointerEvents","none"),k.ghost=T,t.appendChild(T),S(T,"transform-origin",Da/parseInt(T.style.width)*100+"% "+Aa/parseInt(T.style.height)*100+"%")}},_onDragStart:function(t,a){var n=this,i=t.dataTransfer,s=n.options;if(Y("dragStart",this,{evt:t}),k.eventCanceled){this._onDrop();return}Y("setupClone",this),k.eventCanceled||(A=un(m),A.removeAttribute("id"),A.draggable=!1,A.style["will-change"]="",this._hideClone(),X(A,this.options.chosenClass,!1),k.clone=A),n.cloneId=ue(function(){Y("clone",n),!k.eventCanceled&&(n.options.removeCloneOnHide||D.insertBefore(A,m),n._hideClone(),V({sortable:n,name:"clone"}))}),!a&&X(m,s.dragClass,!0),a?(fe=!0,n._loopId=setInterval(n._emulateDragOver,50)):(L(document,"mouseup",n._onDrop),L(document,"touchend",n._onDrop),L(document,"touchcancel",n._onDrop),i&&(i.effectAllowed="move",s.setData&&s.setData.call(n,i,m)),_(document,"drop",n),S(m,"transform","translateZ(0)")),Dt=!0,n._dragStartId=ue(n._dragStarted.bind(n,a,t)),_(document,"selectstart",n),Bt=!0,window.getSelection().removeAllRanges(),Wt&&S(document.body,"user-select","none")},_onDragOver:function(t){var a=this.el,n=t.target,i,s,r,l=this.options,c=l.group,p=k.active,v=se===c,g=l.sort,f=O||p,w,E=this,x=!1;if(Je)return;function I(jt,Nn){Y(jt,E,st({evt:t,isOwner:v,axis:w?"vertical":"horizontal",revert:r,dragRect:i,targetRect:s,canSort:g,fromSortable:f,target:n,completed:R,onMove:function(ya,Rn){return le(D,a,m,i,ya,z(ya),t,Rn)},changed:Q},Nn))}function K(){I("dragOverAnimationCapture"),E.captureAnimationState(),E!==f&&f.captureAnimationState()}function R(jt){return I("dragOverCompleted",{insertion:jt}),jt&&(v?p._hideClone():p._showClone(E),E!==f&&(X(m,O?O.options.ghostClass:p.options.ghostClass,!1),X(m,l.ghostClass,!0)),O!==E&&E!==k.active?O=E:E===k.active&&O&&(O=null),f===E&&(E._ignoreWhileAnimating=n),E.animateAll(function(){I("dragOverAnimationComplete"),E._ignoreWhileAnimating=null}),E!==f&&(f.animateAll(),f._ignoreWhileAnimating=null)),(n===m&&!m.animated||n===a&&!n.animated)&&(_t=null),!l.dragoverBubble&&!t.rootEl&&n!==document&&(m.parentNode[B]._isOutsideThisEl(t.target),!jt&&Et(t)),!l.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),x=!0}function Q(){W=G(m),mt=G(m,l.draggable),V({sortable:E,name:"change",toEl:a,newIndex:W,newDraggableIndex:mt,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),n=tt(n,l.draggable,a,!0),I("dragOver"),k.eventCanceled)return x;if(m.contains(t.target)||n.animated&&n.animatingX&&n.animatingY||E._ignoreWhileAnimating===n)return R(!1);if(fe=!1,p&&!l.disabled&&(v?g||(r=C!==D):O===this||(this.lastPutMode=se.checkPull(this,p,m,t))&&c.checkPut(this,p,m,t))){if(w=this._getDirection(t,n)==="vertical",i=z(m),I("dragOverValid"),k.eventCanceled)return x;if(r)return C=D,K(),this._hideClone(),I("revert"),k.eventCanceled||(Tt?D.insertBefore(m,Tt):D.appendChild(m)),R(!0);var F=oa(a,l.draggable);if(!F||Ni(t,w,this)&&!F.animated){if(F===m)return R(!1);if(F&&a===t.target&&(n=F),n&&(s=z(n)),le(D,a,m,i,n,s,t,!!n)!==!1)return K(),F&&F.nextSibling?a.insertBefore(m,F.nextSibling):a.appendChild(m),C=a,Q(),R(!0)}else if(F&&Oi(t,w,this)){var wt=zt(a,0,l,!0);if(wt===m)return R(!1);if(n=wt,s=z(n),le(D,a,m,i,n,s,t,!1)!==!1)return K(),a.insertBefore(m,wt),C=a,Q(),R(!0)}else if(n.parentNode===a){s=z(n);var et=0,$t,Ot=m.parentNode!==a,U=!Pi(m.animated&&m.toRect||i,n.animated&&n.toRect||s,w),Nt=w?"top":"left",ht=_a(n,"top","top")||_a(m,"top","top"),Rt=ht?ht.scrollTop:void 0;_t!==n&&($t=s[Nt],Qt=!1,re=!U&&l.invertSwap||Ot),et=Ri(t,n,s,w,U?1:l.swapThreshold,l.invertedSwapThreshold==null?l.swapThreshold:l.invertedSwapThreshold,re,_t===n);var ct;if(et!==0){var St=G(m);do St-=et,ct=C.children[St];while(ct&&(S(ct,"display")==="none"||ct===T))}if(et===0||ct===n)return R(!1);_t=n,Kt=et;var Vt=n.nextElementSibling,ft=!1;ft=et===1;var ie=le(D,a,m,i,n,s,t,ft);if(ie!==!1)return(ie===1||ie===-1)&&(ft=ie===1),Je=!0,setTimeout(Ii,30),K(),ft&&!Vt?a.appendChild(m):n.parentNode.insertBefore(m,ft?Vt:n),ht&&dn(ht,0,Rt-ht.scrollTop),C=m.parentNode,$t!==void 0&&!re&&(de=Math.abs($t-z(n)[Nt])),Q(),R(!0)}if(a.contains(m))return R(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){L(document,"mousemove",this._onTouchMove),L(document,"touchmove",this._onTouchMove),L(document,"pointermove",this._onTouchMove),L(document,"dragover",Et),L(document,"mousemove",Et),L(document,"touchmove",Et)},_offUpEvents:function(){var t=this.el.ownerDocument;L(t,"mouseup",this._onDrop),L(t,"touchend",this._onDrop),L(t,"pointerup",this._onDrop),L(t,"pointercancel",this._onDrop),L(t,"touchcancel",this._onDrop),L(document,"selectstart",this)},_onDrop:function(t){var a=this.el,n=this.options;if(W=G(m),mt=G(m,n.draggable),Y("drop",this,{evt:t}),C=m&&m.parentNode,W=G(m),mt=G(m,n.draggable),k.eventCanceled){this._nulling();return}Dt=!1,re=!1,Qt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Ke(this.cloneId),Ke(this._dragStartId),this.nativeDraggable&&(L(document,"drop",this),L(a,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Wt&&S(document.body,"user-select",""),S(m,"transform",""),t&&(Bt&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),T&&T.parentNode&&T.parentNode.removeChild(T),(D===C||O&&O.lastPutMode!=="clone")&&A&&A.parentNode&&A.parentNode.removeChild(A),m&&(this.nativeDraggable&&L(m,"dragend",this),Ve(m),m.style["will-change"]="",Bt&&!Dt&&X(m,O?O.options.ghostClass:this.options.ghostClass,!1),X(m,this.options.chosenClass,!1),V({sortable:this,name:"unchoose",toEl:C,newIndex:null,newDraggableIndex:null,originalEvent:t}),D!==C?(W>=0&&(V({rootEl:C,name:"add",toEl:C,fromEl:D,originalEvent:t}),V({sortable:this,name:"remove",toEl:C,originalEvent:t}),V({rootEl:C,name:"sort",toEl:C,fromEl:D,originalEvent:t}),V({sortable:this,name:"sort",toEl:C,originalEvent:t})),O&&O.save()):W!==At&&W>=0&&(V({sortable:this,name:"update",toEl:C,originalEvent:t}),V({sortable:this,name:"sort",toEl:C,originalEvent:t})),k.active&&((W==null||W===-1)&&(W=At,mt=Jt),V({sortable:this,name:"end",toEl:C,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){Y("nulling",this),D=m=C=T=Tt=A=ce=vt=kt=Z=Bt=W=mt=At=Jt=_t=Kt=O=se=k.dragged=k.ghost=k.clone=k.active=null;var t=this.el;ve.forEach(function(a){t.contains(a)&&(a.checked=!0)}),ve.length=Oe=Ne=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":m&&(this._onDragOver(t),Hi(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],a,n=this.el.children,i=0,s=n.length,r=this.options;i<s;i++)a=n[i],tt(a,r.draggable,this.el,!1)&&t.push(a.getAttribute(r.dataIdAttr)||ji(a));return t},sort:function(t,a){var n={},i=this.el;this.toArray().forEach(function(s,r){var l=i.children[r];tt(l,this.options.draggable,i,!1)&&(n[s]=l)},this),a&&this.captureAnimationState(),t.forEach(function(s){n[s]&&(i.removeChild(n[s]),i.appendChild(n[s]))}),a&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,a){return tt(t,a||this.options.draggable,this.el,!1)},option:function(t,a){var n=this.options;if(a===void 0)return n[t];var i=ae.modifyOption(this,t,a);typeof i<"u"?n[t]=i:n[t]=a,t==="group"&&mn(n)},destroy:function(){Y("destroy",this);var t=this.el;t[B]=null,L(t,"mousedown",this._onTapStart),L(t,"touchstart",this._onTapStart),L(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(L(t,"dragover",this),L(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(a){a.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),me.splice(me.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!vt){if(Y("hideClone",this),k.eventCanceled)return;S(A,"display","none"),this.options.removeCloneOnHide&&A.parentNode&&A.parentNode.removeChild(A),vt=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(vt){if(Y("showClone",this),k.eventCanceled)return;m.parentNode==D&&!this.options.group.revertClone?D.insertBefore(A,m):Tt?D.insertBefore(A,Tt):D.appendChild(A),this.options.group.revertClone&&this.animate(m,A),S(A,"display",""),vt=!1}}};function Hi(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function le(e,t,a,n,i,s,r,l){var c,p=e[B],v=p.options.onMove,g;return window.CustomEvent&&!pt&&!ee?c=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(c=document.createEvent("Event"),c.initEvent("move",!0,!0)),c.to=t,c.from=e,c.dragged=a,c.draggedRect=n,c.related=i||t,c.relatedRect=s||z(t),c.willInsertAfter=l,c.originalEvent=r,e.dispatchEvent(c),v&&(g=v.call(p,c,r)),g}function Ve(e){e.draggable=!1}function Ii(){Je=!1}function Oi(e,t,a){var n=z(zt(a.el,0,a.options,!0)),i=pn(a.el,a.options,T),s=10;return t?e.clientX<i.left-s||e.clientY<n.top&&e.clientX<n.right:e.clientY<i.top-s||e.clientY<n.bottom&&e.clientX<n.left}function Ni(e,t,a){var n=z(oa(a.el,a.options.draggable)),i=pn(a.el,a.options,T),s=10;return t?e.clientX>i.right+s||e.clientY>n.bottom&&e.clientX>n.left:e.clientY>i.bottom+s||e.clientX>n.right&&e.clientY>n.top}function Ri(e,t,a,n,i,s,r,l){var c=n?e.clientY:e.clientX,p=n?a.height:a.width,v=n?a.top:a.left,g=n?a.bottom:a.right,f=!1;if(!r){if(l&&de<p*i){if(!Qt&&(Kt===1?c>v+p*s/2:c<g-p*s/2)&&(Qt=!0),Qt)f=!0;else if(Kt===1?c<v+de:c>g-de)return-Kt}else if(c>v+p*(1-i)/2&&c<g-p*(1-i)/2)return Vi(t)}return f=f||r,f&&(c<v+p*s/2||c>g-p*s/2)?c>v+p/2?1:-1:0}function Vi(e){return G(m)<G(e)?1:-1}function ji(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,a=t.length,n=0;a--;)n+=t.charCodeAt(a);return n.toString(36)}function Yi(e){ve.length=0;for(var t=e.getElementsByTagName("input"),a=t.length;a--;){var n=t[a];n.checked&&ve.push(n)}}function ue(e){return setTimeout(e,0)}function Ke(e){return clearTimeout(e)}xe&&_(document,"touchmove",function(e){(k.active||Dt)&&e.cancelable&&e.preventDefault()});k.utils={on:_,off:L,css:S,find:ln,is:function(t,a){return!!tt(t,a,t,!1)},extend:Ti,throttle:cn,closest:tt,toggleClass:X,clone:un,index:G,nextTick:ue,cancelNextTick:Ke,detectDirection:fn,getChild:zt,expando:B};k.get=function(e){return e[B]};k.mount=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];t[0].constructor===Array&&(t=t[0]),t.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(k.utils=st(st({},k.utils),n.utils)),ae.mount(n)})};k.create=function(e,t){return new k(e,t)};k.version=ki;var P=[],Ft,Qe,Ze=!1,je,Ye,ge,Ut;function Bi(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(a){var n=a.originalEvent;this.sortable.nativeDraggable?_(document,"dragover",this._handleAutoScroll):this.options.supportPointer?_(document,"pointermove",this._handleFallbackAutoScroll):n.touches?_(document,"touchmove",this._handleFallbackAutoScroll):_(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(a){var n=a.originalEvent;!this.options.dragOverBubble&&!n.rootEl&&this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?L(document,"dragover",this._handleAutoScroll):(L(document,"pointermove",this._handleFallbackAutoScroll),L(document,"touchmove",this._handleFallbackAutoScroll),L(document,"mousemove",this._handleFallbackAutoScroll)),Pa(),pe(),Mi()},nulling:function(){ge=Qe=Ft=Ze=Ut=je=Ye=null,P.length=0},_handleFallbackAutoScroll:function(a){this._handleAutoScroll(a,!0)},_handleAutoScroll:function(a,n){var i=this,s=(a.touches?a.touches[0]:a).clientX,r=(a.touches?a.touches[0]:a).clientY,l=document.elementFromPoint(s,r);if(ge=a,n||this.options.forceAutoScrollFallback||ee||pt||Wt){Be(a,this.options,l,n);var c=gt(l,!0);Ze&&(!Ut||s!==je||r!==Ye)&&(Ut&&Pa(),Ut=setInterval(function(){var p=gt(document.elementFromPoint(s,r),!0);p!==c&&(c=p,pe()),Be(a,i.options,p,n)},10),je=s,Ye=r)}else{if(!this.options.bubbleScroll||gt(l,!0)===it()){pe();return}Be(a,this.options,gt(l,!1),!1)}}},ut(e,{pluginName:"scroll",initializeByDefault:!0})}function pe(){P.forEach(function(e){clearInterval(e.pid)}),P=[]}function Pa(){clearInterval(Ut)}var Be=cn(function(e,t,a,n){if(t.scroll){var i=(e.touches?e.touches[0]:e).clientX,s=(e.touches?e.touches[0]:e).clientY,r=t.scrollSensitivity,l=t.scrollSpeed,c=it(),p=!1,v;Qe!==a&&(Qe=a,pe(),Ft=t.scroll,v=t.scrollFn,Ft===!0&&(Ft=gt(a,!0)));var g=0,f=Ft;do{var w=f,E=z(w),x=E.top,I=E.bottom,K=E.left,R=E.right,Q=E.width,F=E.height,wt=void 0,et=void 0,$t=w.scrollWidth,Ot=w.scrollHeight,U=S(w),Nt=w.scrollLeft,ht=w.scrollTop;w===c?(wt=Q<$t&&(U.overflowX==="auto"||U.overflowX==="scroll"||U.overflowX==="visible"),et=F<Ot&&(U.overflowY==="auto"||U.overflowY==="scroll"||U.overflowY==="visible")):(wt=Q<$t&&(U.overflowX==="auto"||U.overflowX==="scroll"),et=F<Ot&&(U.overflowY==="auto"||U.overflowY==="scroll"));var Rt=wt&&(Math.abs(R-i)<=r&&Nt+Q<$t)-(Math.abs(K-i)<=r&&!!Nt),ct=et&&(Math.abs(I-s)<=r&&ht+F<Ot)-(Math.abs(x-s)<=r&&!!ht);if(!P[g])for(var St=0;St<=g;St++)P[St]||(P[St]={});(P[g].vx!=Rt||P[g].vy!=ct||P[g].el!==w)&&(P[g].el=w,P[g].vx=Rt,P[g].vy=ct,clearInterval(P[g].pid),(Rt!=0||ct!=0)&&(p=!0,P[g].pid=setInterval((function(){n&&this.layer===0&&k.active._onTouchMove(ge);var Vt=P[this.layer].vy?P[this.layer].vy*l:0,ft=P[this.layer].vx?P[this.layer].vx*l:0;typeof v=="function"&&v.call(k.dragged.parentNode[B],ft,Vt,e,ge,P[this.layer].el)!=="continue"||dn(P[this.layer].el,ft,Vt)}).bind({layer:g}),24))),g++}while(t.bubbleScroll&&f!==c&&(f=gt(f,!1)));Ze=p}},30),bn=function(t){var a=t.originalEvent,n=t.putSortable,i=t.dragEl,s=t.activeSortable,r=t.dispatchSortableEvent,l=t.hideGhostForTarget,c=t.unhideGhostForTarget;if(a){var p=n||s;l();var v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,g=document.elementFromPoint(v.clientX,v.clientY);c(),p&&!p.el.contains(g)&&(r("spill"),this.onSpill({dragEl:i,putSortable:n}))}};function la(){}la.prototype={startIndex:null,dragStart:function(t){var a=t.oldDraggableIndex;this.startIndex=a},onSpill:function(t){var a=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var i=zt(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(a,i):this.sortable.el.appendChild(a),this.sortable.animateAll(),n&&n.animateAll()},drop:bn};ut(la,{pluginName:"revertOnSpill"});function ca(){}ca.prototype={onSpill:function(t){var a=t.dragEl,n=t.putSortable,i=n||this.sortable;i.captureAnimationState(),a.parentNode&&a.parentNode.removeChild(a),i.animateAll()},drop:bn};ut(ca,{pluginName:"removeOnSpill"});k.mount(new Bi);k.mount(ca,la);const yn=[32,64,125,250,500,1e3,2e3,4e3,8e3,16e3],ta={flat:{name:"Ровно",gains:[0,0,0,0,0,0,0,0,0,0]},rock:{name:"Рок",gains:[5,4,2,-1,-2,0,2,3,4,5]},pop:{name:"Поп",gains:[-1,0,2,4,4,2,0,-1,-2,-3]},jazz:{name:"Джаз",gains:[4,3,1,2,-1,-1,0,2,3,4]},bass:{name:"Бас",gains:[8,7,5,2,0,-1,-2,-3,-4,-5]},vocal:{name:"Вокал",gains:[-3,-2,0,3,5,5,3,1,0,-1]},electronic:{name:"Электроника",gains:[5,4,1,0,-2,2,1,2,5,6]}},za="rustream.volume",qa="rustream.eq",Ha="rustream.mode",Ia="rustream.playback.queue",Oa="rustream.playback.position";function Na(e,t){try{return JSON.parse(localStorage.getItem(e))??t}catch{return t}}class Fi extends EventTarget{constructor(){super(),this.audio=new Audio,this.audio.preload="auto",this.audio.crossOrigin="anonymous",this.queue=[],this.index=-1,this.shuffle=!1,this.repeat="off",this.track=null,this.playId=null,this.scrobbled=!1,this.liveMode=!1,this.mode=Na(Ha,{shuffle:!1,repeat:"off"}),this.shuffle=!!this.mode.shuffle,this.repeat=this.mode.repeat||"off",this.volume=Number(localStorage.getItem(za)??80),this.audio.volume=Math.min(1,Math.max(0,this.volume/100)),this.eqState=Na(qa,{enabled:!0,preset:"flat",gains:[...ta.flat.gains]}),this.audioContext=null,this.filters=[],this.sourceNode=null,this._lastPositionWrite=0,this._restoredPause=!1,this._bindAudio(),window.addEventListener("pagehide",()=>this._storePosition(!0))}_bindAudio(){this.audio.addEventListener("timeupdate",()=>{this._maybeScrobble(),this._storePosition(),this._emit("time")}),this.audio.addEventListener("durationchange",()=>this._emit("time")),this.audio.addEventListener("progress",()=>this._emit("buffer")),this.audio.addEventListener("loadedmetadata",()=>this._emit("time")),this.audio.addEventListener("play",()=>{!this.playId&&this.track&&this._restoredPause&&(this._restoredPause=!1,this._beginPlay(this.track)),this._storePosition(!0),this._emit("state")}),this.audio.addEventListener("pause",()=>{this._storePosition(!0),this._emit("state")}),this.audio.addEventListener("volumechange",()=>this._emit("volume")),this.audio.addEventListener("ended",()=>this._onEnded()),this.audio.addEventListener("waiting",()=>this._emit("state")),this.audio.addEventListener("playing",()=>this._emit("state")),this.audio.addEventListener("error",()=>{if(!this.track)return;const a=this.track.source==="ytm"||String(this.track.id).startsWith("ytm-")?`YouTube не отдал поток для «${this.track.title}». Проверьте, что трек доступен, и обновите cookies в профиле.`:`Не удалось воспроизвести «${this.track.title}». Файл повреждён или недоступен.`;this.dispatchEvent(new CustomEvent("error",{detail:a}))})}_emit(t){this.dispatchEvent(new CustomEvent(t))}_initAudioGraph(){if(this.audioContext)return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.audioContext=new t,this.sourceNode=this.audioContext.createMediaElementSource(this.audio),this.filters=yn.map(n=>{const i=this.audioContext.createBiquadFilter();return i.type="peaking",i.frequency.value=n,i.Q.value=1.1,i.gain.value=0,i});let a=this.sourceNode;for(const n of this.filters)a.connect(n),a=n;a.connect(this.audioContext.destination),this._applyEq()}_ensureRunning(){var t;this._initAudioGraph(),((t=this.audioContext)==null?void 0:t.state)==="suspended"&&this.audioContext.resume().catch(()=>{})}_applyEq(){this.filters.length&&this.filters.forEach((t,a)=>{t.gain.value=this.eqState.enabled&&this.eqState.gains[a]||0})}setEqEnabled(t){this.eqState.enabled=t,this._persistEq(),this._applyEq(),this._emit("eq")}setEqGain(t,a){this.eqState.gains[t]=Number(a),this.eqState.preset="custom",this._persistEq(),this._applyEq(),this._emit("eq")}applyEqPreset(t){const a=ta[t];a&&(this.eqState.preset=t,this.eqState.gains=[...a.gains],this._persistEq(),this._applyEq(),this._emit("eq"))}resetEq(){this.applyEqPreset("flat")}_persistEq(){localStorage.setItem(qa,JSON.stringify(this.eqState))}async playTracks(t,a=0,{shuffle:n=!1}={}){t!=null&&t.length&&(this._finalizePlay(!1),this.queue=[...t],n&&(this.shuffle=!0,this._persistMode()),this.index=Math.min(Math.max(0,a),this.queue.length-1),this._storeQueue(),await this._load(this.queue[this.index],!0))}async playAt(t){t<0||t>=this.queue.length||(this.index=t,this._storeQueue(),await this._load(this.queue[t],!0))}async _load(t,a){if(t&&(this._restoredPause=!1,this._finalizePlay(!1),this.track=t,this.audio.src=$a(t.id),this._beginPlay(t),this._updateMediaSession(t),this.dispatchEvent(new CustomEvent("track",{detail:t})),a)){this._ensureRunning();try{await this.audio.play()}catch{}}}async toggle(){this.track&&(this._ensureRunning(),this.audio.paused?await this.audio.play().catch(()=>{}):this.audio.pause())}pause(){this.audio.pause()}async next(t=!1){if(!this.queue.length)return;if(t&&this.repeat==="one"){this.audio.currentTime=0,await this.audio.play().catch(()=>{});return}let a;if(this.shuffle?a=this.queue.length>1?this._randomIndex():this.index:a=this.index+1,a>=this.queue.length)if(this.repeat==="all")a=0;else{this.audio.pause();return}await this.playAt(a)}async previous(){if(!this.queue.length)return;if(this.audio.currentTime>3){this.audio.currentTime=0;return}const t=this.index>0?this.index-1:this.queue.length-1;await this.playAt(t)}moveInQueue(t,a){if(t===a||t<0||a<0||t>=this.queue.length||a>=this.queue.length)return;const[n]=this.queue.splice(t,1);this.queue.splice(a,0,n),this.index===t?this.index=a:t<this.index&&a>=this.index?this.index--:t>this.index&&a<=this.index&&this.index++,this._storeQueue(),this._emit("queue")}_randomIndex(){if(this.queue.length<=1)return this.index;let t=this.index;for(;t===this.index;)t=Math.floor(Math.random()*this.queue.length);return t}async _onEnded(){if(this._finalizePlay(!0),this.repeat==="one"){this.audio.currentTime=0,this._beginPlay(this.track),await this.audio.play().catch(()=>{});return}if(this.index>=this.queue.length-1&&this.repeat==="off"&&!this.shuffle){this._emit("state"),this._emit("queueend");return}await this.next(!0)}async _beginPlay(t){this.playId=null,this.scrobbled=!1;try{const a=await ai(t.id);this.playId=(a==null?void 0:a.playId)||null}catch{}}_maybeScrobble(){if(!this.playId||this.scrobbled)return;const t=this.audio.duration;!Number.isFinite(t)||t<30||(this.audio.currentTime>=t/2||this.audio.currentTime>=240)&&(this.scrobbled=!0,Ea(this.playId,Math.round(this.audio.currentTime*1e3),!0).catch(()=>{}))}_finalizePlay(t){if(!this.playId)return;const a=this.playId;this.playId=null,Ea(a,Math.round((this.audio.currentTime||0)*1e3),t).catch(()=>{})}appendTracks(t){t!=null&&t.length&&(this.queue.push(...t),this._storeQueue())}toggleShuffle(){this.shuffle=!this.shuffle,this._persistMode(),this._emit("mode")}cycleRepeat(){const t=["off","all","one"];this.repeat=t[(t.indexOf(this.repeat)+1)%t.length],this._persistMode(),this._emit("mode")}_persistMode(){localStorage.setItem(Ha,JSON.stringify({shuffle:this.shuffle,repeat:this.repeat}))}seekTo(t){const a=this.audio.duration;!Number.isFinite(a)||a<=0||(this.audio.currentTime=Math.min(100,Math.max(0,t))/100*a,this._emit("time"))}seekToSeconds(t){const a=this.audio.duration;!Number.isFinite(a)||a<=0||(this.audio.currentTime=Math.min(a,Math.max(0,t)),this._emit("time"))}removeAt(t){t<0||t>=this.queue.length||t===this.index||(this.queue.splice(t,1),t<this.index&&(this.index-=1),this._storeQueue())}seekBy(t){Number.isFinite(this.audio.duration)&&(this.audio.currentTime=Math.min(this.audio.duration,Math.max(0,this.audio.currentTime+t)),this._emit("time"))}setVolume(t){this.volume=Number(t),this.audio.volume=Math.min(1,Math.max(0,this.volume/100)),this.volume>0&&(this.audio.muted=!1),localStorage.setItem(za,String(this.volume))}toggleMute(){this.audio.muted=!this.audio.muted,this._emit("volume")}get currentTime(){return this.audio.currentTime||0}get duration(){return Number.isFinite(this.audio.duration)?this.audio.duration:0}get paused(){return this.audio.paused}get volumePercent(){return this.audio.muted?0:Math.round(this.audio.volume*100)}get buffered(){const t=this.duration;if(!t)return{end:0,percent:0,ahead:0};const a=this.audio.currentTime;let n=0;for(let i=0;i<this.audio.buffered.length;i+=1)this.audio.buffered.start(i)<=a+.5&&(n=Math.max(n,this.audio.buffered.end(i)));return{end:n,percent:Math.min(100,n/t*100),ahead:Math.max(0,n-a)}}estimatedBufferedBytes(){var a;const t=((a=this.track)==null?void 0:a.bitRate)||0;return t?t*1e3*this.buffered.ahead/8:0}_storeQueue(){try{const t={queue:this.queue,index:this.index,liveMode:!!this.liveMode,updatedAt:Date.now()};localStorage.setItem(Ia,JSON.stringify(t))}catch{}}setLiveMode(t){this.liveMode=!!t,this._storeQueue()}_storePosition(t=!1){if(!this.track)return;const a=Date.now();if(!(!t&&a-this._lastPositionWrite<2e3)){this._lastPositionWrite=a;try{localStorage.setItem(Oa,JSON.stringify({trackId:this.track.id,position:this.currentTime||0,paused:this.audio.paused,updatedAt:a}))}catch{}}}restore(){var n;let t=null;try{t=JSON.parse(localStorage.getItem(Ia))}catch{t=null}if(!((n=t==null?void 0:t.queue)!=null&&n.length)||Date.now()-(t.updatedAt||0)>1e3*60*60*24*7)return null;let a=null;try{a=JSON.parse(localStorage.getItem(Oa))}catch{a=null}if(this.queue=t.queue,this.index=Math.min(Math.max(0,Number(t.index)||0),this.queue.length-1),this.liveMode=!!t.liveMode,this.track=this.queue[this.index],!this.track)return null;if(this._restoredPause=!0,this.audio.src=$a(this.track.id),this._updateMediaSession(this.track),this.dispatchEvent(new CustomEvent("track",{detail:this.track})),(a==null?void 0:a.trackId)===this.track.id&&Number(a.position)>1){const i=()=>{const s=this.audio.duration;Number.isFinite(s)&&a.position<s-3&&(this.audio.currentTime=a.position,this._emit("time"))};this.audio.readyState>=1?i():this.audio.addEventListener("loadedmetadata",i,{once:!0})}return{track:this.track,liveMode:this.liveMode}}clearRestored(){this._restoredPause=!1}_updateMediaSession(t){"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:t.title||"",artist:t.artist||"",album:t.album||"",artwork:t.coverArt?[{src:Mt(t.coverArt,512),sizes:"512x512",type:"image/jpeg"}]:[]}),navigator.mediaSession.setActionHandler("play",()=>this.toggle()),navigator.mediaSession.setActionHandler("pause",()=>this.toggle()),navigator.mediaSession.setActionHandler("previoustrack",()=>this.previous()),navigator.mediaSession.setActionHandler("nexttrack",()=>this.next()))}}function bt(e){if(!Number.isFinite(e)||e<0)return"0:00";const t=Math.floor(e/60),a=Math.floor(e%60);return`${t}:${String(a).padStart(2,"0")}`}function wn(e){const t=Math.round(e/6e4),a=Math.floor(t/60);return a>0?`${a} ч ${t%60} мин`:`${t} мин`}function be(e){if(!e)return"0 Б";const t=["Б","КБ","МБ","ГБ","ТБ"];let a=e,n=0;for(;a>=1024&&n<t.length-1;)a/=1024,n+=1;return`${a>=10||n===0?Math.round(a):a.toFixed(1)} ${t[n]}`}const h=new Fi,Ui=document.getElementById("app"),o={currentTracks:[],favorites:new Set,dislikes:new Set,favoriteAlbums:new Set,theme:"violet",lyrics:null,lyricsTrackId:null,lyricsRefresh:!1,lyricsActiveKey:null,npTab:"lyrics",npOpen:!1,allTracks:null,artists:null,albums:null,stats:null,playlists:null,me:null,meStats:null,authConfig:null,lastfmConfig:null,liveMode:!1,liveMixes:[],renderSeq:0},$={artists:null,albums:null,tracks:null,stats:null,playlists:null,favorites:null,ratings:null,recent:null,meStats:null,liveMixes:null};Ui.innerHTML=`
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
    <a href="#/live" data-tab="live" class="tab-item"><span class="tab-icon">${d("radio")}</span><span class="tab-label">Live</span></a>
    <a href="#/ytm" data-tab="ytm" class="tab-item"><span class="tab-icon">${d("ytm")}</span><span class="tab-label">YouTube</span></a>
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
            <input class="input" id="login-password" name="password" type="password" autocomplete="current-password" required />
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
            <input class="input" id="register-password" type="password" autocomplete="new-password" minlength="6" required />
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
`;const u=(e,t=document)=>t.querySelector(e),J=(e,t=document)=>[...t.querySelectorAll(e)];function b(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function da(e){const t=String(e||"?").trim().split(/\s+/).filter(Boolean);return t.length?t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+t[1][0]).toUpperCase():"?"}function ye(){var e,t;return((e=o.me)==null?void 0:e.displayName)||((t=o.me)==null?void 0:t.username)||"Аккаунт"}function $n(e){return(e==null?void 0:e.status)===401}function Ht(e){return $n(e)?(qt(),!0):!1}function lt(e,{size:t=400,alt:a="",className:n=""}={}){return`<span class="cover ${n}">
    <span class="cover-fallback">${d("music")}</span>
    ${e?`<img src="${Mt(e,t)}" alt="${b(a)}" loading="lazy" decoding="async" />`:""}
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
    </div>`}function Xi(e){u("#view").innerHTML=`
    <div class="page">
      <div class="empty-state">
        <span class="empty-icon">${d("wave")}</span>
        <h2>Что-то пошло не так</h2>
        <p>${b(e)}</p>
        <button class="btn tonal" data-action="reload">Попробовать снова</button>
      </div>
    </div>`}function yt(e,t,{actions:a="",eyebrow:n=""}={}){return`<header class="page-head">
    <div>
      ${n?`<div class="eyebrow">${b(n)}</div>`:""}
      <h1>${b(e)}</h1>
      ${t?`<p class="muted">${t}</p>`:""}
    </div>
    ${a?`<div class="page-actions">${a}</div>`:""}
  </header>`}function ne(e){return`<article class="card" data-action="open" data-href="#/album/${e.id}" tabindex="0">
    <div class="card-cover">${lt(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${b(e.name)}</div>
      <div class="card-sub">${b(e.artist||"Неизвестный артист")}${e.year?` · ${e.year}`:""}</div>
    </div>
    <button class="card-play" data-action="play-album" data-id="${e.id}" title="Слушать альбом">${d("play")}</button>
  </article>`}function ua(e){return`<article class="card artist-card" data-action="open" data-href="#/artist/${e.id}" tabindex="0">
    <div class="card-cover round">${lt(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${b(e.name)}</div>
      <div class="card-sub">${e.albumCount??0} ${H(e.albumCount??0,"альбом","альбома","альбомов")}</div>
    </div>
  </article>`}function H(e,t,a,n){const i=e%10,s=e%100;return i===1&&s!==11?t:i>=2&&i<=4&&(s<12||s>14)?a:n}function Wi(e){return(e==null?void 0:e.source)==="ytm"?'<span class="track-badge ytm" title="Источник: YouTube Music">YT</span>':`<span class="track-badge">${b(((e==null?void 0:e.suffix)||"flac").toUpperCase())}</span>`}function Gi(e,t,{showAlbum:a=!0,showCover:n=!1,playlistId:i=null,rowAction:s="play-row",rowList:r=null}={}){var v;const l=((v=h.track)==null?void 0:v.id)===e.id,c=o.favorites.has(e.id),p=e.track&&e.track>0?e.track:t+1;return`<div class="track-row ${l?"playing":""} ${n?"has-cover":""}" data-action="${s}" data-index="${t}" data-track-id="${b(e.id)}" ${r?`data-list="${r}"`:""} tabindex="0">
    <div class="track-index">
      <span class="track-num">${p}</span>
      <span class="track-eq"><i></i><i></i><i></i></span>
    </div>
    ${n?`<span class="track-cover">${lt(e.coverArt||e.albumId,{size:80})}</span>`:""}
    <div class="track-main">
      <div class="track-title">${b(e.title)}</div>
      <div class="track-sub">${b(e.artist||"")}${a&&e.album?` · ${b(e.album)}`:""}</div>
    </div>
    ${Wi(e)}
    <span class="track-duration">${bt(e.duration)}</span>
    <button class="icon-btn row-btn like ${c?"active":""}" data-action="like" data-id="${e.id}" title="В избранное">${d(c?"heart":"heartOutline")}</button>
    <button class="icon-btn row-btn dislike ${o.dislikes.has(e.id)?"active":""}" data-action="dislike" data-id="${e.id}" title="Не нравится">${d("thumbDown")}</button>
    ${i?`<button class="icon-btn row-btn" data-action="remove-from-playlist" data-playlist="${i}" data-index="${t}" title="Убрать из плейлиста">${d("delete")}</button>`:`<button class="icon-btn row-btn" data-action="add-to-playlist" data-id="${e.id}" title="Добавить в плейлист">${d("add")}</button>`}
  </div>`}function rt(e,t={}){return e.length?`<div class="track-list">${e.map((a,n)=>Gi(a,n,t)).join("")}</div>`:'<div class="empty-inline">Треков пока нет</div>'}function Ji(){const e=location.hash.replace(/^#/,"")||"/home",[t,a=""]=e.split("?");return{parts:t.split("/").filter(Boolean),params:new URLSearchParams(a)}}const Ki={artist:"artists",album:"albums",playlist:"playlists"},Qi=new Set(["artists","albums","tracks","playlists","favorites","stats"]);function Zi(e){const t=Ki[e]||e;J(".nav-item").forEach(a=>{a.classList.toggle("active",a.dataset.nav===t)}),J(".tab-item").forEach(a=>{const n=a.dataset.tab,i=n===t||n==="library"&&(t==="library"||Qi.has(t))||n==="home"&&t==="search";a.classList.toggle("active",i)})}async function q(){const{parts:e,params:t}=Ji(),a=e[0]||"home";if(a==="register"){va(t.get("invite")||"");return}if(!o.me){qt();return}const n=++o.renderSeq;Zi(a),u("#view").scrollTop=0;try{a==="home"?await Ra(n):a==="live"?await ss(n):a==="stats"?await rs(n):a==="artists"?await os(n):a==="artist"?await ls(n,e[1]):a==="albums"?await cs(n):a==="album"?await ds(n,e[1]):a==="tracks"?await us(n):a==="playlists"?await ps(n):a==="playlist"?await fs(n,e[1]):a==="favorites"?await ms(n):a==="search"?await vs(n,t.get("q")||""):a==="library"?await Ps(n):a==="profile"?await zs(n):a==="ytm"?await qs(n):await Ra(n)}catch(i){if(console.error(i),Ht(i))return;n===o.renderSeq&&Xi(i.message||"Ошибка загрузки")}}async function ts(){return $.stats||($.stats=await Gn()),$.stats}async function Sn(){return $.artists||($.artists=await Vn()),$.artists}async function es(){return $.albums||($.albums=await Xa("alphabeticalByArtist",500)),$.albums}async function pa(){if(!$.tracks){const e=await jn(500);e.sort((t,a)=>`${t.artist} ${t.album} ${String(t.track).padStart(3,"0")}`.localeCompare(`${a.artist} ${a.album} ${String(a.track).padStart(3,"0")}`,"ru")),$.tracks=e}return $.tracks}async function kn(){if($.favorites||($.favorites=await Wn()),o.favorites=new Set(($.favorites.song||[]).map(e=>e.id)),o.favoriteAlbums=new Set(($.favorites.album||[]).map(e=>e.id)),!$.ratings)try{$.ratings=await Qn()}catch{$.ratings={liked:[],disliked:[]}}return o.dislikes=new Set(($.ratings.disliked||[]).filter(e=>!o.favorites.has(e))),$.favorites}async function ha(){return $.meStats||($.meStats=await Ka()),o.meStats=$.meStats,$.meStats}async function as(){return $.liveMixes||($.liveMixes=await ni()),o.liveMixes=$.liveMixes,$.liveMixes}async function ns(){$.artists=null,$.albums=null,$.tracks=null,$.stats=null,$.recent=null,$.meStats=null,$.liveMixes=null,y("Библиотека обновлена"),q()}async function Ra(e){var p;j();const[t,a,n,i]=await Promise.all([ha(),$.recent?Promise.resolve($.recent):Xa("newest",12),Sn(),pa()]);if(e!==o.renderSeq)return;$.recent=a;const s=o.ytmStatus||await _e().catch(()=>null);o.ytmStatus=s;let r=[];if(s!=null&&s.connected&&(r=await nn(10).catch(()=>[])),e!==o.renderSeq)return;o.ytmLists={...o.ytmLists||{},history:r},o.currentTracks=i;const l=h.track,c=h.queue.length?h.queue:null;u("#view").innerHTML=`
    <div class="page home quick-home">
      <header class="page-head home-head">
        <div>
          <span class="eyebrow"><span class="live-dot"></span>${b(is())}, ${b(ye())}</span>
          <h1>Что послушаем?</h1>
        </div>
        <div class="head-actions">
          <button class="btn primary" data-action="play-all">${d("play")} Слушать всё</button>
          <button class="btn glass" data-action="shuffle-all">${d("shuffle")} Перемешать</button>
          <button class="btn ghost" data-action="start-live">${d("radio")} Live</button>
        </div>
      </header>

      ${l&&c?`<section class="continue-card">
              <span class="continue-cover">${lt(l.coverArt||l.albumId,{size:120,alt:l.title})}</span>
              <span class="continue-main">
                <span class="eyebrow">Продолжить слушать</span>
                <strong>${b(l.title)}</strong>
                <small>${b(l.artist||"")}${h.paused?" · на паузе":" · играет"}</small>
              </span>
              <button class="btn primary" data-action="resume">${d(h.paused?"play":"pause")} ${h.paused?"Продолжить":"Пауза"}</button>
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
        <div class="grid cards">${a.slice(0,8).map(ne).join("")}</div>
      </section>

      ${r.length?`<section class="section">
              <div class="section-head">
                <div>
                  <h2>Из YouTube Music</h2>
                  <p class="muted">Внешний источник — помечено меткой <span class="track-badge ytm inline">YT</span></p>
                </div>
                <a class="text-link" href="#/ytm">Открыть YouTube ${d("next")}</a>
              </div>
              ${rt(r.slice(0,6),{showCover:!0,rowAction:"play-ytm-row",rowList:"history"})}
            </section>`:""}

      <section class="section">
        <div class="section-head">
          <div>
            <h2>Любимые артисты</h2>
            <p class="muted">${(p=t.topArtists)!=null&&p[0]?`Чаще всего вы слушаете ${b(t.topArtists[0].name)}`:"Начните слушать — и здесь появятся ваши артисты"}</p>
          </div>
          <a class="text-link" href="#/artists">Все артисты ${d("next")}</a>
        </div>
        <div class="grid cards artists-row">${n.slice(0,8).map(ua).join("")}</div>
      </section>

      <section class="section home-cta">
        <div class="cta-panel">
          <div>
            <div class="eyebrow">${d("chart")} Ваша статистика</div>
            <h2>${t.plays||0} ${H(t.plays||0,"прослушивание","прослушивания","прослушиваний")}</h2>
            <p class="muted">Часы, любимые артисты, лайки и дизлайки — на отдельной странице.</p>
          </div>
          <a class="btn glass" href="#/stats">${d("chart")} Открыть статистику</a>
        </div>
      </section>
    </div>`}function is(){const e=new Date().getHours();return e<6?"Доброй ночи":e<12?"Доброе утро":e<18?"Добрый день":"Добрый вечер"}async function ss(e){j();const[t,a]=await Promise.all([as(),ha()]);e===o.renderSeq&&(u("#view").innerHTML=`
    <div class="page live-page">
      ${yt("Live","Персональный поток: избранное, любимые артисты и новые находки",{eyebrow:"Автоматический эфир",actions:`<button class="btn primary" data-action="start-live">${d("radio")} ${o.liveMode?"Перезапустить":"Включить Live"}</button>`})}

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
                  <span class="muted">${((r=n.tracks)==null?void 0:r.length)||0} ${H(((l=n.tracks)==null?void 0:l.length)||0,"трек","трека","треков")}</span>
                </div>
                <span class="mix-play">${d("play")}</span>
              </article>`}).join("")}
        </div>
      </section>

    </div>`)}async function rs(e){var p,v,g;j();const t=await Ka().catch(()=>o.meStats||{});if(e!==o.renderSeq)return;o.meStats=t,$.meStats=t;const a=((t.listenedMs||0)/36e5).toFixed(1),n=Math.round((t.listenedMs||0)/6e4),i=Math.max(1,...(t.byDay||[]).map(f=>f.ms)),s=t.recent||[];o.currentTracks=s;const r=[...t.byDay||[]].slice(-14),l=t.likes||0,c=t.dislikes||0;u("#view").innerHTML=`
    <div class="page stats-page">
      ${yt("Статистика","Только ваш аккаунт: время, артисты, жанры и оценки",{eyebrow:"Личные данные",actions:`<a class="btn glass" href="#/favorites">${d("heart")} Избранное</a>`})}

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
          ${(v=t.topArtists)!=null&&v.length?`<div class="rank-list">${t.topArtists.map((f,w)=>`<div class="rank-row">
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
        ${s.length?rt(s,{showCover:!0}):'<div class="empty-inline">История пока пуста.</div>'}
      </section>
    </div>`}async function os(e){j();const t=await Sn();e===o.renderSeq&&(o.currentTracks=[],u("#view").innerHTML=`
    <div class="page">
      ${yt("Артисты",`${t.length} ${H(t.length,"артист","артиста","артистов")} в библиотеке`,{actions:`<button class="btn glass" data-action="shuffle-library">${d("shuffle")} Перемешать всё</button>`,eyebrow:"Коллекция"})}
      <div class="grid cards">${t.map(ua).join("")}</div>
    </div>`)}async function ls(e,t){j();const a=await Ua(t);if(e!==o.renderSeq)return;const n=a.artist,i=n.album||[];o.currentTracks=[],u("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/artists">${d("back")} Все артисты</a>
      <section class="collection-head">
        <div class="collection-art round">${lt(n.coverArt||n.id,{size:600,alt:n.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">Артист</div>
          <h1>${b(n.name)}</h1>
          <p class="muted">${i.length} ${H(i.length,"альбом","альбома","альбомов")}</p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-artist" data-id="${n.id}">${d("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-artist" data-id="${n.id}">${d("shuffle")} Перемешать</button>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section-head"><h2>Альбомы</h2></div>
        <div class="grid cards">${i.map(ne).join("")}</div>
      </section>
    </div>`}async function cs(e){j();const t=await es();e===o.renderSeq&&(o.currentTracks=[],u("#view").innerHTML=`
    <div class="page">
      ${yt("Альбомы",`${t.length} ${H(t.length,"альбом","альбома","альбомов")}`,{eyebrow:"Коллекция"})}
      <div class="grid cards">${t.map(ne).join("")}</div>
    </div>`)}async function ds(e,t){j();const a=await ia(t);if(e!==o.renderSeq)return;const n=a.album,i=n.song||[];o.currentTracks=i,u("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/albums">${d("back")} Все альбомы</a>
      <section class="collection-head album-head">
        <div class="collection-art">${lt(n.coverArt||n.id,{size:800,alt:n.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">${n.year?`Альбом · ${n.year}`:"Альбом"}</div>
          <h1>${b(n.name)}</h1>
          <p class="muted">
            <a class="inline-link" href="#/artist/${n.artistId}">${b(n.artist)}</a>
            · ${i.length} ${H(i.length,"трек","трека","треков")}
            · ${wn(n.duration*1e3||0)}
          </p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-all">${d("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-all">${d("shuffle")} Перемешать</button>
          </div>
        </div>
      </section>
      <section class="section">
        ${rt(i,{showAlbum:!1})}
      </section>
    </div>`}async function us(e){j();const t=await pa();e===o.renderSeq&&(o.currentTracks=t,u("#view").innerHTML=`
    <div class="page">
      ${yt("Все треки",`${t.length} ${H(t.length,"трек","трека","треков")}`,{eyebrow:"Библиотека",actions:`<button class="btn primary" data-action="play-all">${d("play")} Слушать</button>
                  <button class="btn glass" data-action="shuffle-all">${d("shuffle")} Перемешать</button>`})}
      ${rt(t,{showCover:!0})}
    </div>`)}async function ps(e){j();const t=await sa();e===o.renderSeq&&($.playlists=t,o.currentTracks=[],u("#view").innerHTML=`
    <div class="page">
      ${yt("Плейлисты",`${t.length} ${H(t.length,"плейлист","плейлиста","плейлистов")}`,{eyebrow:"Моя музыка",actions:`<button class="btn primary" data-action="new-playlist">${d("add")} Новый плейлист</button>`})}
      ${t.length?`<div class="grid cards">${t.map(hs).join("")}</div>`:`<div class="empty-state"><span class="empty-icon">${d("playlist")}</span><h2>Плейлистов пока нет</h2><p>Соберите подборку из любимых треков.</p><button class="btn primary" data-action="new-playlist">${d("add")} Создать</button></div>`}
    </div>`)}function hs(e){return`<article class="card" data-action="open" data-href="#/playlist/${e.id}" tabindex="0">
    <div class="card-cover">${lt(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${b(e.name)}</div>
      <div class="card-sub">${e.songCount??0} ${H(e.songCount??0,"трек","трека","треков")}</div>
    </div>
    <button class="card-play" data-action="open" data-href="#/playlist/${e.id}">${d("play")}</button>
  </article>`}async function fs(e,t){j();const a=await Bn(t);if(e!==o.renderSeq)return;const n=(a.entry||[]).map((i,s)=>({...i,track:s+1}));o.currentTracks=n,u("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/playlists">${d("back")} Все плейлисты</a>
      <section class="collection-head album-head">
        <div class="collection-art">${lt(a.coverArt||a.id,{size:800,alt:a.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">Плейлист</div>
          <h1>${b(a.name)}</h1>
          <p class="muted">${n.length} ${H(n.length,"трек","трека","треков")} · ${wn((a.duration||0)*1e3)}</p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-all">${d("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-all">${d("shuffle")} Перемешать</button>
            <button class="btn ghost danger" data-action="delete-playlist" data-id="${a.id}">${d("delete")} Удалить</button>
          </div>
        </div>
      </section>
      <section class="section">
        ${rt(n,{showCover:!0,playlistId:a.id})}
      </section>
    </div>`}async function ms(e){j();const t=await kn();if(e!==o.renderSeq)return;const a=t.song||[];o.currentTracks=a,u("#view").innerHTML=`
    <div class="page">
      ${yt("Избранное",`${a.length} ${H(a.length,"трек","трека","треков")}`,{eyebrow:"Моя музыка",actions:a.length?`<button class="btn primary" data-action="play-all">${d("play")} Слушать</button>`:""})}
      ${a.length?rt(a,{showCover:!0}):`<div class="empty-state"><span class="empty-icon">${d("heartOutline")}</span><h2>Здесь пока пусто</h2><p>Нажимайте на сердечко у трека, чтобы добавить его в избранное.</p></div>`}
      ${(t.album||[]).length?`<section class="section"><div class="section-head"><h2>Любимые альбомы</h2></div>
             <div class="grid cards">${t.album.map(ne).join("")}</div></section>`:""}
    </div>`}async function vs(e,t){const a=u("#search-input");if(a.value!==t&&(a.value=t),!t.trim()){u("#view").innerHTML=`
      <div class="page">
        <div class="empty-state"><span class="empty-icon">${d("search")}</span>
        <h2>Найдите что послушать</h2><p>Введите название трека, альбома или артиста.</p></div>
      </div>`;return}j();const n=await Yn(t);if(e!==o.renderSeq)return;const i=n.song||[];o.currentTracks=i,u("#view").innerHTML=`
    <div class="page">
      ${yt(`Поиск: ${t}`,`Найдено ${i.length} ${H(i.length,"трек","трека","треков")}, ${(n.album||[]).length} ${H((n.album||[]).length,"альбом","альбома","альбомов")}`,{eyebrow:"Результаты"})}
      ${(n.artist||[]).length?`<section class="section"><div class="section-head"><h2>Артисты</h2></div><div class="grid cards">${n.artist.map(ua).join("")}</div></section>`:""}
      ${(n.album||[]).length?`<section class="section"><div class="section-head"><h2>Альбомы</h2></div><div class="grid cards">${n.album.map(ne).join("")}</div></section>`:""}
      ${i.length?`<section class="section"><div class="section-head"><h2>Треки</h2></div>${rt(i,{showCover:!0})}</section>`:""}
      ${!i.length&&!(n.album||[]).length&&!(n.artist||[]).length?`<div class="empty-state"><span class="empty-icon">${d("search")}</span><h2>Ничего не найдено</h2><p>Попробуйте другой запрос.</p></div>`:""}
    </div>`}async function gs(e){const a=(await ia(e)).album.song||[];if(!a.length)return y("В альбоме нет треков","warn");o.currentTracks=a,await h.playTracks(a,0)}async function Va(e,t=!1){y("Загружаю альбомы…");const n=(await Ua(e)).artist.album||[],s=(await Promise.all(n.map(r=>ia(r.id)))).flatMap(r=>r.album.song||[]);if(!s.length)return y("У артиста нет треков","warn");o.currentTracks=s,await h.playTracks(s,0,{shuffle:t})}async function En(e,t){try{await Zn(e,t),t===1?(o.favorites.add(e),o.dislikes.delete(e)):t===-1?(o.favorites.delete(e),o.dislikes.add(e)):(o.favorites.delete(e),o.dislikes.delete(e)),$.favorites=null,$.ratings=null,J(`[data-action="like"][data-id="${e}"]`).forEach(a=>{const n=o.favorites.has(e);a.classList.toggle("active",n),a.innerHTML=d(n?"heart":"heartOutline")}),J(`[data-action="dislike"][data-id="${e}"]`).forEach(a=>{a.classList.toggle("active",o.dislikes.has(e))}),Tn(),location.hash.startsWith("#/favorites")&&q(),location.hash.startsWith("#/stats")&&q()}catch(a){y(a.message,"error")}}async function we(e){const t=o.favorites.has(e);await En(e,t?0:1)}async function ja(e){const t=o.dislikes.has(e);await En(e,t?0:-1)}function Tn(){const e=h.track,t=u("#pb-like"),a=u("#pb-dislike");if(t){const n=e?o.favorites.has(e.id):!1;t.classList.toggle("active",n),t.innerHTML=d(n?"heart":"heartOutline")}a&&a.classList.toggle("active",e?o.dislikes.has(e.id):!1)}async function bs(e){let t=[];try{t=await sa()}catch(a){y(a.message,"error")}fa({title:"Добавить в плейлист",body:`
      ${t.length?`<div class="modal-list">${t.map(a=>`<button class="modal-row" data-modal-action="add" data-playlist="${a.id}">
                  <span class="modal-row-ico">${d("playlist")}</span>
                  <span><strong>${b(a.name)}</strong><small>${a.songCount??0} треков</small></span>
                  ${d("next")}
                </button>`).join("")}</div>`:'<p class="muted">Плейлистов пока нет — создайте первый.</p>'}
      <div class="modal-new">
        <input class="input" id="new-playlist-name" placeholder="Название нового плейлиста" />
        <button class="btn primary" data-modal-action="create" data-track="${e}">${d("add")} Создать</button>
      </div>`,onMount:a=>{a.addEventListener("click",async n=>{const i=n.target.closest("[data-modal-action]");if(i&&(i.dataset.modalAction==="add"&&(await Fn(i.dataset.playlist,e),nt(),$.playlists=null,y("Трек добавлен в плейлист")),i.dataset.modalAction==="create")){const r=u("#new-playlist-name",a).value.trim()||"Мой плейлист";await Wa(r,[e]),nt(),$.playlists=null,y("Плейлист создан"),location.hash.startsWith("#/playlists")&&q()}})}})}async function ys(){fa({title:"Новый плейлист",body:`<input class="input" id="new-playlist-name" placeholder="Например: Вечерний плейлист" autofocus />
           <div class="modal-actions">
             <button class="btn ghost" data-modal-action="cancel">Отмена</button>
             <button class="btn primary" data-modal-action="create">Создать</button>
           </div>`,onMount:e=>{const t=u("#new-playlist-name",e);t.focus(),e.addEventListener("click",async a=>{var i;const n=(i=a.target.closest("[data-modal-action]"))==null?void 0:i.dataset.modalAction;if(n==="cancel"&&nt(),n==="create"){const s=t.value.trim();if(!s)return t.focus();await Wa(s,[]),nt(),$.playlists=null,y("Плейлист создан"),q()}}),t.addEventListener("keydown",a=>{var n;a.key==="Enter"&&((n=u('[data-modal-action="create"]',e))==null||n.click())})}})}function fa({title:e,body:t,onMount:a}){const n=u("#modal-root");n.innerHTML=`
    <div class="modal-backdrop" data-modal-action="close">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-head"><h3>${b(e)}</h3><button class="icon-btn" data-modal-action="close">${d("close")}</button></div>
        <div class="modal-body">${t}</div>
      </div>
    </div>`,document.body.classList.add("modal-open");const i=u(".modal",n);n.querySelector(".modal-backdrop").addEventListener("click",s=>{s.target.dataset.modalAction==="close"&&nt()}),a==null||a(i)}function nt(){u("#modal-root").innerHTML="",document.body.classList.remove("modal-open")}function Ct(e="lyrics"){o.npOpen=!0,o.npTab=e;const t=u("#np");t.hidden=!1,requestAnimationFrame(()=>t.classList.add("open")),setTimeout(()=>t.classList.add("open"),80),te()}function $e(){o.npOpen=!1;const e=u("#np");e.classList.remove("open"),setTimeout(()=>{o.npOpen||(e.hidden=!0)},260)}function ws(e){o.npTab=e,te()}function te(){if(!o.npOpen)return;const e=h.track;J(".np-tab").forEach(n=>n.classList.toggle("active",n.dataset.npTab===o.npTab));const t=u("#np-side");t.innerHTML=`
    <div class="np-cover">${lt((e==null?void 0:e.coverArt)||(e==null?void 0:e.albumId),{size:900,alt:(e==null?void 0:e.title)||""})}</div>
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
    </div>`;const a=u("#np-panel");o.npTab==="lyrics"?Mn(a,e):o.npTab==="eq"?De(a):xn(a)}async function Mn(e,t){var i,s;if(!t){e.innerHTML=_n("lyrics","Текст появится здесь","Включите трек — и мы поищем файл .lrc рядом с аудио.");return}if(e.innerHTML='<div class="panel-loading"><span class="spinner"></span>Ищу текст…</div>',o.lyricsTrackId!==t.id||o.lyricsRefresh)try{o.lyrics=await ii(t.id,o.lyricsRefresh),o.lyricsTrackId=t.id,o.lyricsRefresh=!1,o.lyricsActiveKey=null}catch{o.lyrics=null}if(o.npTab!=="lyrics")return;const a=o.lyrics;if(!a||!a.plain&&!((i=a.synced)!=null&&i.length)){e.innerHTML=`<div class="panel-empty">
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
    </div>`,Ln()}function Ln(){if(o.npTab!=="lyrics")return;const e=J(".lyric-line");if(!e.length)return;const t=h.currentTime*1e3;let a=-1;e.forEach((i,s)=>{Number(i.dataset.time)<=t&&(a=s)}),a<0&&(a=0),e.forEach((i,s)=>i.classList.toggle("active",s===a));const n=`${o.lyricsTrackId||""}:${a}`;a>=0&&o.lyricsActiveKey!==n&&(o.lyricsActiveKey=n,e[a].scrollIntoView({block:"center",behavior:"smooth"}))}function _n(e,t,a){return`<div class="panel-empty"><span class="empty-icon">${d(e)}</span><h3>${b(t)}</h3><p>${b(a)}</p></div>`}function De(e){const t=h.eqState;e.innerHTML=`
    <div class="panel-title">
      <h3>Эквалайзер</h3>
      <label class="switch">
        <input type="checkbox" id="eq-enabled" ${t.enabled?"checked":""} />
        <span></span>
      </label>
    </div>
    <div class="eq-presets">
      ${Object.entries(ta).map(([a,n])=>`<button class="chip-btn ${t.preset===a?"active":""}" data-eq-preset="${a}">${b(n.name)}</button>`).join("")}
      <button class="chip-btn ${t.preset==="custom"?"active":""}" disabled>Своя</button>
    </div>
    <div class="eq ${t.enabled?"":"disabled"}">
      ${yn.map((a,n)=>`
        <div class="eq-band">
          <span class="eq-value" id="eq-val-${n}">${t.gains[n]>0?"+":""}${t.gains[n]}</span>
          <input type="range" orient="vertical" class="eq-slider" data-eq-band="${n}" min="-12" max="12" step="1" value="${t.gains[n]}" />
          <span class="eq-freq">${a>=1e3?`${a/1e3}k`:a}</span>
        </div>`).join("")}
    </div>
    <div class="eq-foot">
      <span class="muted">10 полос · ±12 дБ</span>
      <button class="btn ghost" data-action="reset-eq">${d("refresh")} Сбросить</button>
    </div>`}function xn(e){const t=h.queue;e.innerHTML=`
    <div class="panel-title"><h3>Очередь</h3><span class="muted">${t.length} ${H(t.length,"трек","трека","треков")}</span></div>
    ${t.length?`<div class="queue-list" id="queue-list">${t.map((n,i)=>`
              <button class="queue-row ${i===h.index?"active":""}" data-action="play-queue" data-index="${i}" data-track-id="${n.id}">
                <span class="queue-drag-handle">${d("menu")}</span>
                <span class="queue-cover">${lt(n.coverArt||n.albumId,{size:80})}</span>
                <span class="queue-main"><strong>${b(n.title)}</strong><small>${b(n.artist||"")}</small></span>
                <span class="queue-time">${bt(n.duration)}</span>
              </button>`).join("")}</div>`:_n("queue","Очередь пуста","Нажмите на трек или альбом, чтобы начать воспроизведение.")}`;const a=u("#queue-list");a&&t.length>0&&new k(a,{animation:150,handle:".queue-drag-handle",ghostClass:"queue-row-ghost",dragClass:"queue-row-drag",onEnd:n=>{n.oldIndex!==n.newIndex&&(h.moveInQueue(n.oldIndex,n.newIndex),setTimeout(()=>xn(e),50))}})}function Dn(){const e=h.track,t=u("#pb-title"),a=u("#pb-artist"),n=u("#pb-cover-img"),i=u("#quality-format"),s=u("#quality-detail");if(!e){t.textContent="Ничего не играет",a.textContent="Выберите трек",u(".pb-cover").classList.remove("loaded"),i.textContent="—",s.textContent="",Ya(null);return}t.textContent=e.title||"",a.textContent=[e.artist,e.album].filter(Boolean).join(" · "),e.coverArt||e.albumId?(n.src=Mt(e.coverArt||e.albumId,160),n.onload=()=>u(".pb-cover").classList.add("loaded")):(n.removeAttribute("src"),u(".pb-cover").classList.remove("loaded")),i.textContent=(e.suffix||"flac").toUpperCase(),s.textContent=[e.bitRate?`${e.bitRate} kbps`:null,e.size?be(e.size):null].filter(Boolean).join(" · "),Tn(),Ya(e)}function Ya(e){if("mediaSession"in navigator){if(!e){navigator.mediaSession.metadata=null;return}navigator.mediaSession.metadata=new MediaMetadata({title:e.title||"Без названия",artist:e.artist||"Неизвестный артист",album:e.album||"",artwork:[{src:Mt(e.coverArt||e.albumId,96),sizes:"96x96",type:"image/jpeg"},{src:Mt(e.coverArt||e.albumId,128),sizes:"128x128",type:"image/jpeg"},{src:Mt(e.coverArt||e.albumId,256),sizes:"256x256",type:"image/jpeg"},{src:Mt(e.coverArt||e.albumId,512),sizes:"512x512",type:"image/jpeg"}]})}}"mediaSession"in navigator&&(navigator.mediaSession.setActionHandler("play",()=>h.play()),navigator.mediaSession.setActionHandler("pause",()=>h.pause()),navigator.mediaSession.setActionHandler("previoustrack",()=>h.prev()),navigator.mediaSession.setActionHandler("nexttrack",()=>h.next()),navigator.mediaSession.setActionHandler("seekto",e=>{e.seekTime!==void 0&&h.seekTo(e.seekTime)}),navigator.mediaSession.setActionHandler("seekbackward",e=>{h.seekBy(-(e.seekOffset||10))}),navigator.mediaSession.setActionHandler("seekforward",e=>{h.seekBy(e.seekOffset||10)}));function It(){const e=h.duration,t=h.currentTime,a=e?t/e*100:0;u("#cur-time").textContent=bt(t),u("#total-time").textContent=bt(e),u("#seek").value=String(a),u("#seek-fill").style.width=`${a}%`;const n=u("#np-seek");n&&(n.value=String(a),u("#np-seek-fill").style.width=`${a}%`,u("#np-cur-time").textContent=bt(t),u("#np-total-time").textContent=bt(e)),An(),Ln()}function An(){const e=h.buffered;u("#seek-buffer").style.width=`${e.percent}%`;const t=u("#np-seek-buffer");t&&(t.style.width=`${e.percent}%`);const a=u("#np-buffer");a&&(a.textContent=`буфер ${bt(e.ahead)}`,a.title=`Загружено ${be(h.estimatedBufferedBytes())}`);const n=u("#quality-detail");n&&h.track&&(n.textContent=[h.track.bitRate?`${h.track.bitRate} kbps`:null,h.track.size?be(h.track.size):null,`буфер ${bt(e.ahead)}`].filter(Boolean).join(" · "))}function Ae(){var n;const e=!h.paused&&!!h.track;u("#play-btn").innerHTML=d(e?"pause":"play"),u("#pb-cover").classList.toggle("playing",e);const t=u('.np-controls [data-action="toggle"]');t&&(t.innerHTML=d(e?"pause":"play"),t.title=e?"Пауза":"Играть");const a=((n=h.track)==null?void 0:n.id)||null;J(".track-row").forEach(i=>{i.classList.toggle("playing",!!a&&i.dataset.trackId===a)})}function ma(){u("#shuffle-btn").classList.toggle("active",h.shuffle),u("#repeat-btn").classList.toggle("active",h.repeat!=="off"),u("#repeat-btn").innerHTML=d(h.repeat==="one"?"repeatOne":"repeat");const e=u('.np-controls [data-action="shuffle"]');e&&e.classList.toggle("active",h.shuffle);const t=u('.np-controls [data-action="repeat"]');t&&(t.classList.toggle("active",h.repeat!=="off"),t.innerHTML=d(h.repeat==="one"?"repeatOne":"repeat"))}function Ce(){u("#volume").value=String(h.volumePercent);const e=h.volumePercent===0?"volumeOff":h.volumePercent<50?"volumeDown":"volumeUp";u("#volume-btn").innerHTML=d(e);const t=u("#np-volume");if(t){t.value=String(h.volumePercent);const a=u("#np-volume-icon");a&&(a.innerHTML=d(e))}}function Cn(){var t,a;const e=(a=(t=o.ytmStatus)==null?void 0:t.account)==null?void 0:a.photo;return typeof e=="string"&&e.startsWith("http")?e:""}function $s(e,t="user-avatar"){const a=Cn();return a?`<span class="${t} has-photo"><img src="${b(a)}" alt="" referrerpolicy="no-referrer" /></span>`:`<span class="${t}">${b(da(e))}</span>`}function Pn(){const e=ye(),t=u("#user-avatar"),a=u("#user-name"),n=Cn();t&&(n?(t.classList.add("has-photo"),t.innerHTML=`<img src="${b(n)}" alt="" referrerpolicy="no-referrer" />`):(t.classList.remove("has-photo"),t.textContent=da(e))),a&&(a.textContent=e)}function zn(e){const t=u("#auth-screen");t&&(t.hidden=!1,document.body.classList.add("auth-locked"),u("#auth-login-view").hidden=e!=="login",u("#auth-register-view").hidden=e!=="register",setTimeout(()=>{var a;return(a=u(e==="login"?"#login-username":"#register-invite"))==null?void 0:a.focus()},60))}function qt(){zn("login")}async function va(e=""){zn("register");const t=u("#register-invite"),a=u("#register-invite-hint");if(t.value=e.trim(),!e.trim()){a.textContent="Вставьте код приглашения от администратора.";return}a.textContent="Проверяю приглашение…";try{const n=await fi(e.trim());a.innerHTML=`Приглашение от <strong>${b(n.invitedBy)}</strong>${n.isAdmin?" · администратор":""}`}catch(n){a.textContent=n.message||"Приглашение недействительно"}}function Ss(){const e=u("#auth-screen");e&&(e.hidden=!0,document.body.classList.remove("auth-locked"))}async function ga(){var e;try{o.authConfig=await We();const t=await Jn();if(!t.user){qt(),location.hash.startsWith("#/register")&&q();return}o.me=t.user,o.meSettings=t.settings,Pe(((e=t.settings)==null?void 0:e.theme)||localStorage.getItem("rustream.theme")||"violet"),o.ytmStatus=await _e().catch(()=>null),Pn(),Ss(),await Promise.all([kn(),ha()]),ks(),q()}catch(t){$n(t)||console.error(t),qt()}}function at(e){o.liveMode=!!e,h.setLiveMode(!!e)}function ks(){const e=h.restore();e&&(o.liveMode=!!e.liveMode,Dn(),Ae(),ma(),It())}async function Es(){try{y("Собираю персональный поток…");const e=await Qa(40);if(!e.length)return y("В библиотеке пока нет треков","warn");at(!0),o.currentTracks=e,await h.playTracks(e,0),y("Live включён"),location.hash.startsWith("#/live")&&q()}catch(e){if(Ht(e))return;y(e.message,"error")}}async function Ts(e){var a;const t=o.liveMixes[e];if(!((a=t==null?void 0:t.tracks)!=null&&a.length))return y("В этом миксе пока нет треков","warn");at(!1),o.currentTracks=t.tracks,await h.playTracks(t.tracks,0),y(`Играет: ${t.title}`)}const ba=[{id:"violet",name:"Фиолетовая"},{id:"ocean",name:"Океан"},{id:"sunset",name:"Закат"},{id:"forest",name:"Лес"},{id:"mono",name:"Моно"}],Se=/^#[0-9a-f]{6}$/i;function ea(e){const t=e.replace("#","");return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}}function Ms({r:e,g:t,b:a}){const n=i=>Math.max(0,Math.min(255,Math.round(i)));return`#${[n(e),n(t),n(a)].map(i=>i.toString(16).padStart(2,"0")).join("")}`}function xt(e,t,a){const n=ea(e),i=ea(t);return Ms({r:n.r*a+i.r*(1-a),g:n.g*a+i.g*(1-a),b:n.b*a+i.b*(1-a)})}function Ls(e){const{r:t,g:a,b:n}=ea(e),i=s=>{const r=s/255;return r<=.03928?r/12.92:((r+.055)/1.055)**2.4};return .2126*i(t)+.7152*i(a)+.0722*i(n)}function Ba(e){return Ls(e)>.42?"#1a1917":"#ffffff"}function qn(e){const t=document.documentElement.classList.contains("light-mode"),a=t?"#faf8f4":"#101013",n=t?"#efece4":"#17171c",i=t?.06:.1,s=xt(e,a,i),r=xt(e,n,i*1.25),l=xt(e,t?"#e9e5dc":"#1d1d23",i*1.4),c=xt(e,t?"#ffffff":"#101013",t?.22:.3),p=document.body.style;p.setProperty("--primary",e),p.setProperty("--on-primary",Ba(e)),p.setProperty("--primary-container",c),p.setProperty("--on-primary-container",Ba(c)),p.setProperty("--surface",s),p.setProperty("--surface-container",r),p.setProperty("--surface-container-high",l),p.setProperty("--surface-container-highest",xt(e,l,.5)),p.setProperty("--surface-container-low",xt(e,s,.5))}function _s(){const e=document.body.style;["--primary","--on-primary","--primary-container","--on-primary-container","--surface","--surface-container","--surface-container-high","--surface-container-highest","--surface-container-low"].forEach(t=>e.removeProperty(t))}function Pe(e){const t=ba.some(n=>n.id===e),a=t?e:Se.test(e||"")?e.toLowerCase():"violet";o.theme=a,document.body.dataset.theme=t?a:"custom",localStorage.setItem("rustream.theme",a),t?_s():qn(a)}function aa(e){const t=e==="auto"?window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark":e;document.documentElement.classList.toggle("light-mode",t==="light"),o.theme&&Se.test(o.theme)&&qn(o.theme)}(function(){const t=localStorage.getItem("colorMode")||"dark";aa(t),window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{localStorage.getItem("colorMode")==="auto"&&aa("auto")})})();const Hn=[{id:"compact",name:"Компактно"},{id:"default",name:"Обычно"},{id:"large",name:"Крупно"}];function In(e){const t=Hn.some(a=>a.id===e)?e:"default";o.density=t,document.documentElement.dataset.density=t,localStorage.setItem("rustream.density",t)}(function(){In(localStorage.getItem("rustream.density")||"default")})();async function On(e){Pe(e);try{await Ja({theme:o.theme}),o.meSettings={...o.meSettings||{},theme:o.theme}}catch(t){y(t.message,"error")}}function xs(e){var i,s,r,l,c,p,v,g;const t=o.meSettings||{},a=(i=o.authConfig)==null?void 0:i.lastfm,n=o.lastfmConfig||{};return`
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
          ${ba.map(f=>`<button class="theme-swatch ${o.theme===f.id?"active":""}" data-theme-choice="${f.id}" title="${f.name}">
              <span class="swatch-dot theme-${f.id}"></span><span>${f.name}</span>
            </button>`).join("")}
        </div>
      </section>

      <section class="settings-section">
        <h4>${d("radio")} Скробблинг</h4>
        <p class="muted small">Статистика хранится локально. Last.fm и ListenBrainz получают данные, если подключены.</p>
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
        <label class="field"><span>ListenBrainz token</span>
          <input class="input" id="settings-listenbrainz" name="listenbrainz-token" autocomplete="off" spellcheck="false" data-lpignore="true" placeholder="токен из listenbrainz.org/settings" />
        </label>
        <button class="btn tonal" data-settings-action="save-scrobbling">Сохранить скробблинг</button>
      </section>

      <section class="settings-section">
        <h4>${d("settings")} Безопасность</h4>
        <form id="settings-password-form" class="settings-form">
          <label class="field"><span>Текущий пароль</span>
            <input class="input" id="settings-current-password" type="password" autocomplete="current-password" />
          </label>
          <label class="field"><span>Новый пароль</span>
            <input class="input" id="settings-new-password" type="password" autocomplete="new-password" />
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

      ${(v=o.me)!=null&&v.isAdmin?`
      <section class="settings-section">
        <h4>${d("person")} Пользователи</h4>
        <p class="muted small">Новый человек может войти двумя способами: вы создаёте ему логин и пароль здесь, либо выдаёте код приглашения — блок «Приглашения» на странице профиля.</p>
        <div class="user-list" id="settings-user-list">
          ${(e||[]).map(f=>{var w;return`
            <div class="user-row">
              <span class="user-avatar small">${b(da(f.displayName||f.username))}</span>
              <span class="user-row-main"><strong>${b(f.displayName||f.username)}</strong><small>@${b(f.username)}${f.isAdmin?" · админ":""}</small></span>
              ${f.id===((w=o.me)==null?void 0:w.id)?'<span class="chip">вы</span>':`<button class="icon-btn" data-settings-action="delete-user" data-id="${f.id}" title="Удалить">${d("delete")}</button>`}
            </div>`}).join("")}
        </div>
        <div class="settings-form user-create">
          <label class="field"><span>Логин</span><input class="input" id="new-user-name" autocapitalize="none" /></label>
          <label class="field"><span>Пароль</span><input class="input" id="new-user-password" type="password" /></label>
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
    </div>`}async function Xt(){if(!o.me)return qt();let e=[];if(o.me.isAdmin)try{[e,o.lastfmConfig]=await Promise.all([si(),qe().catch(()=>({}))])}catch(t){Ht(t)}fa({title:"Аккаунт и настройки",body:xs(e),onMount:t=>{var a,n;(a=u("#settings-profile-form",t))==null||a.addEventListener("submit",async i=>{i.preventDefault();try{await Sa(u("#settings-display-name",t).value.trim()),o.me.displayName=u("#settings-display-name",t).value.trim(),Pn(),y("Имя обновлено")}catch(s){y(s.message,"error")}}),(n=u("#settings-password-form",t))==null||n.addEventListener("submit",async i=>{i.preventDefault();try{await ti(u("#settings-current-password",t).value,u("#settings-new-password",t).value),u("#settings-current-password",t).value="",u("#settings-new-password",t).value="",y("Пароль изменён")}catch(s){y(s.message,"error")}}),t.addEventListener("click",async i=>{const s=i.target.closest("[data-theme-choice]");if(s){const c=s.dataset.themeChoice;Pe(c),J(".theme-swatch",t).forEach(p=>p.classList.toggle("active",p.dataset.themeChoice===c));try{await Sa(o.me.displayName||o.me.username,c),o.meSettings={...o.meSettings||{},theme:c},y("Тема сохранена")}catch(p){y(p.message,"error")}return}const r=i.target.closest("[data-settings-action]");if(!r)return;const l=r.dataset.settingsAction;if(l==="logout"){await Ga().catch(()=>{}),location.reload();return}if(l==="rescan"){r.classList.add("spin"),await Za().catch(c=>y(c.message,"error")),setTimeout(()=>{r.classList.remove("spin"),y("Сканирование запущено")},1200);return}if(l==="clear-history"){if(!confirm("Удалить всю историю прослушиваний этого аккаунта?"))return;try{await oi(),$.meStats=null,o.meStats=null,y("История очищена");const c=await ze();o.meSettings=c.settings}catch(c){y(c.message,"error")}return}if(l==="lastfm-connect"){try{const c=await ci();window.open(c.url,"_blank","noopener"),y("Подтвердите доступ на Last.fm, затем нажмите «Завершить»")}catch(c){y(c.message,"error")}return}if(l==="lastfm-complete"){try{const c=await di();y(`Last.fm подключён${c.username?`: ${c.username}`:""}`);const p=await ze();o.meSettings=p.settings,nt(),Xt()}catch(c){y(c.message,"error")}return}if(l==="save-lastfm-app"){try{await ka(u("#settings-lastfm-api-key",t).value.trim(),u("#settings-lastfm-api-secret",t).value.trim());const c=await qe();o.lastfmConfig=c,o.authConfig=await We(),y("Ключи Last.fm сохранены в config.toml"),u("#settings-lastfm-api-secret",t).value=""}catch(c){y(c.message,"error")}return}if(l==="clear-lastfm-app"){if(!confirm("Удалить ключи приложения Last.fm из config.toml?"))return;try{await ka("","",!0),o.lastfmConfig=await qe(),o.authConfig=await We(),y("Ключи Last.fm удалены"),nt(),Xt()}catch(c){y(c.message,"error")}return}if(l==="save-scrobbling"){try{await ei({lastfmSessionKey:u("#settings-lastfm-key",t).value.trim(),listenbrainzToken:u("#settings-listenbrainz",t).value.trim()}),y("Настройки скробблинга сохранены");const c=await ze();o.meSettings=c.settings}catch(c){y(c.message,"error")}return}if(l==="create-user"){try{await ri({username:u("#new-user-name",t).value.trim(),password:u("#new-user-password",t).value,displayName:u("#new-user-display",t).value.trim(),isAdmin:u("#new-user-admin",t).checked}),y("Пользователь создан"),nt(),Xt()}catch(c){y(c.message,"error")}return}if(l==="delete-user"){if(!confirm("Удалить пользователя и все его данные?"))return;try{await li(r.dataset.id),y("Пользователь удалён"),nt(),Xt()}catch(c){y(c.message,"error")}}})}})}function Ds(){const e=localStorage.getItem("colorMode")||"dark";return`
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
      ${ba.map(t=>`<button class="theme-swatch ${o.theme===t.id?"active":""}" data-action="theme" data-theme="${t.id}">
          <span class="swatch-dot theme-${t.id}"></span><span>${t.name}</span>
        </button>`).join("")}
      <label class="theme-swatch custom ${Se.test(o.theme)?"active":""}" title="Свой цвет">
        <input type="color" id="theme-custom" value="${Se.test(o.theme)?o.theme:"#c7a6ff"}" aria-label="Свой цвет" />
        <span>Свой цвет</span>
      </label>
    </div>`}function As(e){const t=e==null?void 0:e.account;return e!=null&&e.connected?`
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
    </form>`}function Cs(e){return`
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
    </section>`}async function Ps(e){j();const[t,a]=await Promise.all([ts().catch(()=>({})),sa().catch(()=>[])]);if(e!==o.renderSeq)return;$.playlists=a;const n=[{href:"#/artists",icon:"person",title:"Артисты",sub:`${t.artists||0} в библиотеке`},{href:"#/albums",icon:"album",title:"Альбомы",sub:`${t.albums||0} в библиотеке`},{href:"#/tracks",icon:"music",title:"Треки",sub:`${t.tracks||0} в библиотеке`},{href:"#/playlists",icon:"playlist",title:"Плейлисты",sub:`${a.length} ${H(a.length,"подборка","подборки","подборок")}`},{href:"#/favorites",icon:"heart",title:"Избранное",sub:"Треки, которым вы поставили лайк"},{href:"#/stats",icon:"chart",title:"Статистика",sub:"Часы, артисты и история"}];u("#view").innerHTML=`
    <div class="page library-page">
      <header class="page-head">
        <div>
          <span class="eyebrow">Коллекция</span>
          <h1>Медиатека</h1>
          <p class="muted">${t.tracks||0} ${H(t.tracks||0,"трек","трека","треков")} · ${be(t.sizeBytes||0)}</p>
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
    </div>`}async function zs(e){var r,l,c,p;j();const t=!!((r=o.me)!=null&&r.isAdmin),[a,n]=await Promise.all([_e().catch(()=>({connected:!1,account:null})),t?ui().catch(()=>[]):Promise.resolve([])]);if(e!==o.renderSeq)return;o.ytmStatus=a,u("#view").innerHTML=`
    <div class="page profile-page">
      <header class="page-head">
        <div class="profile-identity">
          ${$s(ye(),"user-avatar xl")}
          <div>
            <h1>${b(ye())}</h1>
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
        ${As(a)}
      </section>

      <section class="section glass-card">
        <h2>${d("palette")} Оформление</h2>
        <p class="muted small">Тема сохраняется в аккаунте и применяется на всех устройствах.</p>
        ${Ds()}
      </section>

      <section class="section glass-card">
        <h2>${d("expand")} Плотность</h2>
        <p class="muted small">Сколько строк и обложек помещается на экране.</p>
        <div class="theme-mode-picker">
          ${Hn.map(v=>`<button class="mode-btn ${(o.density||"default")===v.id?"active":""}" data-action="density" data-value="${v.id}">${v.name}</button>`).join("")}
        </div>
      </section>

      ${t?Cs(n):""}
    </div>`;const i=u("#ytm-connect-form");i==null||i.addEventListener("submit",async v=>{v.preventDefault();const g=u("#ytm-connect-submit"),f=u("#ytm-connect-error"),w=u("#ytm-cookies").value.trim();if(f.textContent="",!w){f.textContent="Вставьте cookies";return}g.disabled=!0;try{await vi(w),y("YouTube Music подключён"),q()}catch(E){f.textContent=E.message||"Не удалось подключить"}finally{g.disabled=!1}});const s=u("#invite-form");s==null||s.addEventListener("submit",async v=>{var g;v.preventDefault();try{const f=await pi({note:u("#invite-note").value.trim(),expiresInDays:Number(u("#invite-days").value||0),maxUses:Number(u("#invite-uses").value||0),isAdmin:u("#invite-admin").checked});await((g=navigator.clipboard)==null?void 0:g.writeText(tn(f.code)).catch(()=>{})),y("Код создан, ссылка скопирована"),q()}catch(f){y(f.message,"error")}}),(c=u("#theme-custom"))==null||c.addEventListener("input",v=>Pe(v.target.value)),(p=u("#theme-custom"))==null||p.addEventListener("change",async v=>{await On(v.target.value),q()})}async function qs(e){var v,g;j();const t=o.ytmStatus||await _e().catch(()=>null);if(e!==o.renderSeq)return;if(o.ytmStatus=t,!(t!=null&&t.connected)){u("#view").innerHTML=`
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
      </div>`;return}o.ytmLists=o.ytmLists||{history:[],liked:[],search:[]};const a=(f,w)=>rt(f,{showCover:!0,rowAction:"play-ytm-row",rowList:w});u("#view").innerHTML=`
    <div class="page ytm-page">
      <header class="page-head">
        <div>
          <span class="eyebrow">Источник</span>
          <h1>YouTube Music</h1>
          <p class="muted">${b(((v=t.account)==null?void 0:v.name)||"Подключено")}${(g=t.account)!=null&&g.handle?` · ${b(t.account.handle)}`:""}</p>
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
    </div>`;const n=u("#ytm-search-form"),i=u("#ytm-search-input"),s=u("#ytm-results"),r=(f,w,E,x)=>{const I=u(f);if(!I)return;const K=I.querySelector("div[id]")||I;if(!E.length){I.hidden=!0;return}I.hidden=!1,K.innerHTML=a(E,w)},l=(f,w)=>{var E;o.ytmLists.search=f,s.hidden=!1,s.innerHTML=f.length?`<div class="section-head"><h2>${d("search")} Результаты</h2><span class="muted small">${f.length}</span></div>${a(f,"search")}`:`<div class="empty-inline">${b(w)}</div>`,(E=u("#ytm-empty"))==null||E.setAttribute("hidden","")},c=async()=>{const f=i.value.trim();if(f){s.hidden=!1,s.innerHTML=`<div class="skel-rows">${'<div class="skeleton skeleton-line"></div>'.repeat(5)}</div>`;try{const w=await en(f);if(e!==o.renderSeq)return;l(w,"Ничего не найдено")}catch(w){if(Ht(w))return;s.innerHTML=`<div class="empty-inline">${b(w.message)}</div>`}}};n.addEventListener("submit",f=>{f.preventDefault(),c()});let p;i.addEventListener("input",()=>{clearTimeout(p),p=setTimeout(()=>{i.value.trim().length>=2&&c()},500)}),(async()=>{const[f,w]=await Promise.allSettled([nn(40),an(50)]);if(e!==o.renderSeq)return;f.status==="fulfilled"&&f.value.length&&(o.ytmLists.history=f.value,r("#ytm-history-section","history",f.value)),w.status==="fulfilled"&&w.value.length&&(o.ytmLists.liked=w.value,r("#ytm-liked-section","liked",w.value)),!o.ytmLists.history.length&&!o.ytmLists.liked.length&&(u("#ytm-empty").hidden=!1)})()}document.addEventListener("click",async e=>{var n,i,s;const t=e.target.closest("[data-action]");if(!t)return;const a=t.dataset.action;if(a==="open"){location.hash=t.dataset.href;return}if(a==="play-row"){const r=Number(t.dataset.index);if(e.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]'))return;at(!1),await h.playTracks(o.currentTracks,r);return}if(a==="play-ytm-row"){const r=Number(t.dataset.index);if(e.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]'))return;const l=(n=o.ytmLists)==null?void 0:n[t.dataset.list];if(!(l!=null&&l.length))return;at(!1),await h.playTracks(l,r);return}if(a==="play-all"){if(!o.currentTracks.length)return y("Список пуст","warn");at(!1),await h.playTracks(o.currentTracks,0);return}if(a==="shuffle-all"){if(!o.currentTracks.length)return y("Список пуст","warn");at(!1),await h.playTracks(o.currentTracks,0,{shuffle:!0});return}if(a==="shuffle-library"){const r=await pa();o.currentTracks=r,await h.playTracks(r,0,{shuffle:!0});return}if(a==="start-live"){await Es();return}if(a==="play-mix"){await Ts(Number(t.dataset.index));return}if(a==="open-settings"){await Xt();return}if(a==="theme"){await On(t.dataset.theme),J('[data-action="theme"]').forEach(r=>r.classList.toggle("active",r.dataset.theme===o.theme));return}if(a==="color-mode"){const r=t.dataset.mode;localStorage.setItem("colorMode",r),aa(r),J('[data-action="color-mode"]').forEach(l=>l.classList.toggle("active",l.dataset.mode===r)),y(`Режим: ${r==="dark"?"тёмный":r==="light"?"светлый":"системный"}`);return}if(a==="density"){const r=t.dataset.value;In(r),J('[data-action="density"]').forEach(l=>l.classList.toggle("active",l.dataset.value===r));return}if(a==="logout"){await Ga().catch(()=>{}),location.reload();return}if(a==="ytm-disconnect"){if(!confirm("Отключить YouTube Music? Cookies и скачанный кэш этого профиля будут удалены."))return;try{await gi(),o.ytmStatus={connected:!1,account:null},y("YouTube Music отключён"),q()}catch(r){y(r.message,"error")}return}if(a==="ytm-reconnect"){o.ytmStatus={connected:!1,account:null},u("#view").innerHTML="",q();return}if(a==="ytm-preset"){const r=t.dataset.query||"";if(!r)return;const l=u("#ytm-results");l&&(l.hidden=!1,l.innerHTML=`<div class="empty-inline">Ищу «${b(r)}»…</div>`);try{const c=await en(r);o.ytmLists=o.ytmLists||{},o.ytmLists.search=c,l&&(l.innerHTML=c.length?`<div class="section-head"><h2>${d("search")} ${b(r)}</h2><span class="muted small">${c.length}</span></div>${rt(c,{showCover:!0,rowAction:"play-ytm-row",rowList:"search"})}`:'<div class="empty-inline">Ничего не найдено</div>')}catch(c){l&&(l.innerHTML=`<div class="empty-inline">${b(c.message)}</div>`)}return}if(a==="ytm-liked"){const r=u("#ytm-liked-section"),l=u("#ytm-liked");l&&(l.innerHTML='<div class="empty-inline">Загружаю лайки…</div>');try{const c=await an(200);o.ytmLists=o.ytmLists||{},o.ytmLists.liked=c,r&&(r.hidden=!1),l&&(l.innerHTML=c.length?rt(c,{showCover:!0,rowAction:"play-ytm-row",rowList:"liked"}):'<div class="empty-inline">В YouTube Music пока нет лайков</div>'),y(`Лайков: ${c.length}`)}catch(c){l&&(l.innerHTML=`<div class="empty-inline">${b(c.message)}</div>`)}return}if(a==="invite-copy"){await((i=navigator.clipboard)==null?void 0:i.writeText(tn(t.dataset.code)).catch(()=>{})),y("Ссылка скопирована");return}if(a==="invite-revoke"){if(!confirm("Отозвать приглашение?"))return;try{await hi(t.dataset.code),y("Приглашение отозвано"),q()}catch(r){y(r.message,"error")}return}if(a==="play-album"){e.stopPropagation(),at(!1),await gs(t.dataset.id);return}if(a==="play-artist"){at(!1),await Va(t.dataset.id,!1);return}if(a==="shuffle-artist"){at(!1),await Va(t.dataset.id,!0);return}if(a==="like"){e.stopPropagation(),await we(t.dataset.id);return}if(a==="like-current"){h.track&&await we(h.track.id),te();return}if(a==="dislike"){e.stopPropagation(),await ja(t.dataset.id);return}if(a==="dislike-current"){h.track&&await ja(h.track.id),te();return}if(a==="add-to-playlist"){e.stopPropagation(),await bs(t.dataset.id);return}if(a==="remove-from-playlist"){e.stopPropagation();try{await Un(t.dataset.playlist,Number(t.dataset.index)),y("Трек убран из плейлиста"),q()}catch(r){y(r.message,"error")}return}if(a==="resume"){h.track?(h.clearRestored(),await h.toggle()):o.currentTracks.length&&await h.playTracks(o.currentTracks,0),location.hash.startsWith("#/home")&&q();return}if(a==="toggle"){!h.track&&o.currentTracks.length?await h.playTracks(o.currentTracks,0):await h.toggle();return}if(a==="prev")return h.previous();if(a==="next")return h.next();if(a==="shuffle")return h.toggleShuffle();if(a==="repeat")return h.cycleRepeat();if(a==="mute")return h.toggleMute();if(a==="nowplaying")return Ct(o.npTab);if(a==="open-lyrics")return Ct("lyrics");if(a==="open-eq")return Ct("eq");if(a==="open-queue")return Ct("queue");if(a==="close-np")return $e();if(a==="jump-album"){(s=h.track)!=null&&s.albumId&&($e(),location.hash=`#/album/${h.track.albumId}`);return}if(a==="play-queue"){at(!1),await h.playAt(Number(t.dataset.index));return}if(a==="new-playlist")return e.preventDefault(),ys();if(a==="delete-playlist"){if(!confirm("Удалить этот плейлист?"))return;await Xn(t.dataset.id),y("Плейлист удалён"),$.playlists=null,location.hash="#/playlists";return}if(a==="reload")return q();if(a==="reset-eq"){h.resetEq(),De(u("#np-panel"));return}if(a==="refresh-lyrics"){if(!h.track)return;o.lyricsRefresh=!0,o.lyricsTrackId=null,Mn(u("#np-panel"),h.track);return}});u("#np").addEventListener("click",e=>{const t=e.target.closest("[data-np-tab]");t&&ws(t.dataset.npTab);const a=e.target.closest("[data-eq-preset]");a&&(h.applyEqPreset(a.dataset.eqPreset),De(u("#np-panel")))});u("#np").addEventListener("input",e=>{if(e.target.id==="np-seek"){h.seekTo(Number(e.target.value)),It();return}if(e.target.id==="np-volume"){h.setVolume(Number(e.target.value)),Ce();return}const t=e.target.closest("[data-eq-band]");if(t){const a=Number(t.dataset.eqBand),n=Number(t.value),i=u(`#eq-val-${a}`);i&&(i.textContent=`${n>0?"+":""}${n}`),h.eqState.gains[a]=n,h.eqState.preset="custom",h.setEqGain(a,n),J(".eq-presets .chip-btn").forEach(s=>s.classList.toggle("active",s.dataset.eqPreset==="custom"))}});u("#np").addEventListener("change",e=>{var t;e.target.id==="eq-enabled"&&(h.setEqEnabled(e.target.checked),(t=u(".eq"))==null||t.classList.toggle("disabled",!e.target.checked))});u("#seek").addEventListener("input",e=>{h.seekTo(Number(e.target.value)),It()});u("#volume").addEventListener("input",e=>{h.setVolume(Number(e.target.value)),Ce()});document.addEventListener("keydown",e=>{var a;const t=["INPUT","TEXTAREA"].includes((a=document.activeElement)==null?void 0:a.tagName);e.code==="Space"&&!t&&h.track&&(e.preventDefault(),h.toggle()),e.key==="ArrowRight"&&!t&&e.shiftKey&&h.seekBy(5),e.key==="ArrowLeft"&&!t&&e.shiftKey&&h.seekBy(-5),t||(e.key.toLowerCase()==="l"&&h.track&&(e.preventDefault(),we(h.track.id)),e.key.toLowerCase()==="n"&&(e.preventDefault(),h.next()),e.key.toLowerCase()==="p"&&!e.ctrlKey&&!e.metaKey&&(e.preventDefault(),h.prev()),e.key.toLowerCase()==="m"&&(e.preventDefault(),h.toggleMute()),e.key.toLowerCase()==="s"&&(e.preventDefault(),h.toggleShuffle()),e.key.toLowerCase()==="r"&&(e.preventDefault(),h.toggleRepeat())),(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"&&(e.preventDefault(),u("#search-input").focus()),e.key==="Escape"&&(u("#modal-root").innerHTML?nt():$e())});let ke=0,Ee=0,Te=0;u("#playerbar").addEventListener("touchstart",e=>{ke=e.touches[0].clientY,Ee=e.touches[0].clientX,Te=Date.now()});u("#playerbar").addEventListener("touchend",e=>{const t=e.changedTouches[0].clientY,a=e.changedTouches[0].clientX,n=ke-t,i=Math.abs(a-Ee),s=Date.now()-Te;n>80&&s<300&&i<50&&(e.preventDefault(),Ct(o.npTab||"lyrics"))});const Fe=u(".np-sheet");Fe&&(Fe.addEventListener("touchstart",e=>{e.target.closest('.np-seek-bar, .eq-band, input[type="range"]')||(ke=e.touches[0].clientY,Ee=e.touches[0].clientX,Te=Date.now())}),Fe.addEventListener("touchend",e=>{const t=e.changedTouches[0].clientY,a=e.changedTouches[0].clientX,n=t-ke,i=Math.abs(a-Ee),s=Date.now()-Te;n>100&&s<300&&i<50&&(e.preventDefault(),$e())}));let Ue=0,Xe=null;u("#pb-cover").addEventListener("touchend",e=>{const t=Date.now(),a=e.target;if(t-Ue<300&&a===Xe){if(e.preventDefault(),h.track){we(h.track.id);const n=u("#pb-cover");n.style.transform="scale(0.92)",setTimeout(()=>{n.style.transform=""},150)}Ue=0,Xe=null}else Ue=t,Xe=a});const Zt=u("#search-input");let Fa;Zt.addEventListener("input",()=>{clearTimeout(Fa);const e=Zt.value.trim();e.length!==0&&(Fa=setTimeout(()=>{e.length>=2&&(location.hash=`#/search?q=${encodeURIComponent(e)}`)},350))});Zt.addEventListener("keydown",e=>{if(e.key==="Enter"){const t=Zt.value.trim();if(!t)return;Zt.blur();const a=`#/search?q=${encodeURIComponent(t)}`;location.hash===a?q():location.hash=a}});u("#rescan-btn").addEventListener("click",async()=>{u("#rescan-btn").classList.add("spin");const e=Date.now();try{await Za(),setTimeout(async()=>{u("#rescan-btn").classList.remove("spin"),await ns()},Math.max(2500,Date.now()-e))}catch(t){u("#rescan-btn").classList.remove("spin"),Ht(t)||y(t.message,"error")}});u("#np-pill").addEventListener("click",()=>Ct(o.npTab));h.addEventListener("track",()=>{Dn(),o.npOpen&&te(),Ae(),It()});h.addEventListener("time",()=>{It()});h.addEventListener("buffer",An);h.addEventListener("state",Ae);h.addEventListener("mode",ma);h.addEventListener("volume",Ce);h.addEventListener("eq",()=>{o.npTab==="eq"&&o.npOpen&&De(u("#np-panel"))});h.addEventListener("error",e=>y(e.detail,"error"));document.addEventListener("error",e=>{e.target instanceof HTMLImageElement&&(e.target.style.display="none")},!0);window.addEventListener("hashchange",q);h.addEventListener("queueend",async()=>{if(o.liveMode)try{const e=await Qa(25),t=new Set(h.queue.map(n=>n.id)),a=e.filter(n=>!t.has(n.id));if(!a.length){y("Live: новых треков не нашлось","warn");return}h.appendTracks(a),await h.next(!0)}catch(e){Ht(e)||y(e.message,"error")}});u("#auth-toggle-register").addEventListener("click",()=>{var e;return va(((e=u("#register-invite"))==null?void 0:e.value)||"")});u("#auth-toggle-login").addEventListener("click",()=>{location.hash.startsWith("#/register")&&(location.hash="#/home"),qt()});u("#register-invite").addEventListener("change",()=>{const e=u("#register-invite").value.trim();e&&va(e)});u("#register-form").addEventListener("submit",async e=>{e.preventDefault();const t=u("#register-submit"),a=u("#register-error");a.textContent="",t.disabled=!0;try{await mi({invite:u("#register-invite").value.trim(),username:u("#register-username").value.trim(),password:u("#register-password").value,displayName:u("#register-display").value.trim()}),location.hash="#/home",await ga()}catch(n){a.textContent=n.message||"Не удалось зарегистрироваться"}finally{t.disabled=!1}});u("#login-form").addEventListener("submit",async e=>{e.preventDefault();const t=u("#login-submit"),a=u("#login-error");a.textContent="",t.disabled=!0;try{await Kn(u("#login-username").value.trim(),u("#login-password").value),await ga()}catch(n){a.textContent=n.message||"Не удалось войти"}finally{t.disabled=!1}});document.addEventListener("keydown",e=>{var t,a;e.key==="Enter"&&!u("#auth-screen").hidden&&((t=document.activeElement)==null?void 0:t.id)==="login-username"&&((a=u("#login-password"))==null||a.focus())});window.addEventListener("pagehide",()=>{h.playId&&h._finalizePlay(!1)});Ce();ma();Ae();It();ga();
