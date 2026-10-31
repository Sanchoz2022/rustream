(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}})();const ga={home:"M4 20v-8H2L12 3l10 9h-2v8h-6v-6h-4v6H4z",person:"M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5z",album:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",music:"M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z",playlist:"M3 6h12v2H3V6zm0 4h12v2H3v-2zm0 4h8v2H3v-2zm12 .5a3.5 3.5 0 1 0 3.5 3.5V9h3V6h-4v8.5a3.5 3.5 0 0 0-2.5-.9z",search:"M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z",play:"M8 5v14l11-7L8 5z",pause:"M6 5h4v14H6V5zm8 0h4v14h-4V5z",prev:"M6 6h2v12H6V6zm3.5 6L18 18V6l-8.5 6z",next:"M16 6h2v12h-2V6zM6 18l8.5-6L6 6v12z",shuffle:"M10.59 9.17 5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z",repeat:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z",repeatOne:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z",volumeUp:"M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.5 4.5 0 0 0 16.5 12zM14 3.23v2.06a6.99 6.99 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54z",volumeDown:"M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4.03v8.05A4.5 4.5 0 0 0 16.5 12z",volumeOff:"M16.5 12a4.5 4.5 0 0 0-2.5-4.03v2.21l2.45 2.45A4.4 4.4 0 0 0 16.5 12zM19 12a7 7 0 0 1-.94 3.51l1.48 1.48A9 9 0 0 0 14 4.75v2.06A7 7 0 0 1 19 12zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25a7 7 0 0 1-2.25 1.2v2.06a9 9 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z",queue:"M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18a3 3 0 1 0 2 2.82V8h3V6h-5z",lyrics:"M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2z",equalizer:"M7 20h2V10H7v10zm4-8h2V4h-2v8zm4 4h2V7h-2v9zM3 20h2v-6H3v6z",close:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",back:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",add:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",delete:"M6 19c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z",heart:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",heartOutline:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z",more:"M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",clock:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z",library:"M4 6H2v14a2 2 0 0 0 2 2h14v-2H4V6zm16-4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-3 9H9V9h8v2zm-2 4H9v-2h6v2zm2-8H9V5h8v2z",refresh:"M17.65 6.35A8 8 0 1 0 19.73 14h-2.08A6 6 0 1 1 12 6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z",edit:"M3 17.25V21h3.75L17.8 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",check:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z",wave:"M3 12h2v4H3v-4zm4-4h2v12H7V8zm4-4h2v16h-2V4zm4 6h2v6h-2v-6zm4-2h2v10h-2V8z",radio:"M3.24 6.15C2.51 6.43 2 7.17 2 8v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8c0-.83-.51-1.57-1.24-1.85L12.7 2.3a1 1 0 0 0-.7 0L3.24 6.15zM8 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm10-10H9v2h9v-2zm0 4h-3v2h3v-2z",logout:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5-5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z",thumbDown:"M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z",thumbUp:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z",chart:"M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z",palette:"M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z",settings:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.03 7.03 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.47.41l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z",chevronDown:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z",chevronRight:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z",ytm:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-13a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-1.5 7.25v-4.5L14.5 12l-4 2.25z",copy:"M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z",link:"M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4a3.1 3.1 0 0 1 0 6.2h-4V17h4a5 5 0 0 0 0-10z",ticket:"M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 1 0 4v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 1 0-4zm-2-1.46a4 4 0 0 0 0 6.92V18H4v-2.54a4 4 0 0 0 0-6.92V6h16v2.54zM11 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z",key:"M12.65 10A6 6 0 1 0 12.65 14H17v4h4v-4h2v-4H12.65zM7 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",lock:"M18 8h-1V6A5 5 0 0 0 7 6v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zM9 6a3 3 0 0 1 6 0v2H9V6zm9 14H6V10h12v10zm-6-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",moreHoriz:"M6 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",queueAdd:"M14 10H3v2h11v-2zm0-4H3v2h11V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM3 16h7v-2H3v2z",sparkle:"M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z",external:"M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z",shield:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",darkMode:"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8A9.3 9.3 0 0 0 12 3z",lightMode:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2 13h2a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm18 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM11 2v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM5.99 4.58a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06z",expand:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z",sun:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2 13h2a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2zm18 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2zM11 2v2a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0zm0 18v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-2 0zM5.99 4.58a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 0 0-1.41-1.41l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06z",moon:"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8A9.3 9.3 0 0 0 12 3z",menu:"M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"};function c(e,t=""){const a=ga[e]||ga.music;return`<svg class="icon ${t}" viewBox="0 0 24 24" aria-hidden="true"><path d="${a}"/></svg>`}const Te="1.16.1",ke="rustream-web";class jt extends Error{constructor(t,a=0,i=""){super(t),this.name="ApiError",this.status=a,this.code=i}}function ta(e,t={}){const a=new URLSearchParams({v:Te,c:ke,f:"json",...t});return`/rest/${e}.view?${a.toString()}`}async function nt(e,t={}){var s;const a=await fetch(ta(e,t),{credentials:"same-origin"});if(a.status===401)throw new jt("Требуется вход в аккаунт",401);if(!a.ok)throw new jt(`HTTP ${a.status}`,a.status);const n=(await a.json())["subsonic-response"];if(!n)throw new jt("Некорректный ответ сервера");if(n.status!=="ok")throw new jt(((s=n.error)==null?void 0:s.message)||"Ошибка API");return n}async function _(e,t={}){const a=await fetch(e,{credentials:"same-origin",...t,headers:{"Content-Type":"application/json",...t.headers||{}}});let i=null;try{i=await a.json()}catch{i=null}if(!a.ok){const n=a.status===401?"Требуется вход в аккаунт":`HTTP ${a.status}`;throw new jt((i==null?void 0:i.error)||n,a.status,(i==null?void 0:i.code)||"")}return i}const Mt=(e,t=300)=>e?ta("getCoverArt",{id:e,size:t}):"",ba=e=>ta("stream",{id:e});async function Di(){var a;const e=await nt("getArtists"),t=[];for(const i of((a=e.artists)==null?void 0:a.index)||[])for(const n of i.artist||[])t.push(n);return t}const ja=e=>nt("getArtist",{id:e}),ea=e=>nt("getAlbum",{id:e});async function Fa(e="alphabeticalByName",t=100,a=0){var n;return((n=(await nt("getAlbumList2",{type:e,size:t,offset:a})).albumList2)==null?void 0:n.album)||[]}async function Ai(e=500){var a;return((a=(await nt("getRandomSongs",{size:e})).randomSongs)==null?void 0:a.song)||[]}async function Ci(e){return(await nt("search3",{query:e,artistCount:30,albumCount:50,songCount:100})).searchResult3||{artist:[],album:[],song:[]}}async function aa(){var t;return((t=(await nt("getPlaylists")).playlists)==null?void 0:t.playlist)||[]}async function zi(e){return(await nt("getPlaylist",{id:e})).playlist}const Ba=(e,t=[])=>{const a=new URLSearchParams({v:Te,c:ke,f:"json",name:e});return t.forEach(i=>a.append("songId",i)),fetch(`/rest/createPlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(i=>i.json()).then(i=>i["subsonic-response"])},Pi=(e,t)=>{const a=new URLSearchParams({v:Te,c:ke,f:"json",playlistId:e,songIdToAdd:t});return fetch(`/rest/updatePlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(i=>i.json())},qi=(e,t)=>{const a=new URLSearchParams({v:Te,c:ke,f:"json",playlistId:e,songIndexToRemove:String(t)});return fetch(`/rest/updatePlaylist.view?${a.toString()}`,{credentials:"same-origin"}).then(i=>i.json())},Hi=e=>nt("deletePlaylist",{id:e});async function Oi(){return(await nt("getStarred2")).starred2||{artist:[],album:[],song:[]}}async function Ii(){return _("/api/stats")}async function Ae(){return _("/api/me")}async function Ni(){return _("/api/session")}async function Ye(){return _("/api/auth/config")}function Ri(e,t){return _("/api/auth/login",{method:"POST",body:JSON.stringify({username:e,password:t})})}function Ya(){return _("/api/auth/logout",{method:"POST"})}function ya(e,t){return Ua({displayName:e,theme:t})}function Ua(e){return _("/api/me",{method:"PATCH",body:JSON.stringify(e)})}async function Vi(){return _("/api/me/ratings")}function ji(e,t){return _("/api/me/ratings",{method:"PUT",body:JSON.stringify({trackId:e,rating:t})})}function Ce(){return _("/api/admin/lastfm")}function wa(e,t,a=!1){return _("/api/admin/lastfm",{method:"PUT",body:JSON.stringify({apiKey:e,apiSecret:t,clear:a})})}function Fi(e,t){return _("/api/me/password",{method:"POST",body:JSON.stringify({currentPassword:e,newPassword:t})})}function Bi({lastfmUsername:e,lastfmSessionKey:t,listenbrainzToken:a}){return _("/api/me/scrobbling",{method:"PUT",body:JSON.stringify({lastfmUsername:e,lastfmSessionKey:t,listenbrainzToken:a})})}async function Xa(){return _("/api/me/stats")}async function Yi(e,t="web"){return _("/api/plays/start",{method:"POST",body:JSON.stringify({trackId:e,source:t})})}function $a(e,t,a=!1){return _("/api/plays/update",{method:"POST",body:JSON.stringify({playId:e,positionMs:t,completed:a})})}async function Ga(e=40){return(await _(`/api/live/queue?count=${e}`)).tracks||[]}async function Ui(){return(await _("/api/live/mixes")).mixes||[]}async function Xi(e,t=!1){return _(`/api/lyrics/${encodeURIComponent(e)}${t?"?refresh=1":""}`)}async function Wa(){return _("/api/rescan",{method:"POST"})}async function Gi(){return(await _("/api/users")).users||[]}function Wi({username:e,password:t,displayName:a,isAdmin:i}){return _("/api/users",{method:"POST",body:JSON.stringify({username:e,password:t,displayName:a,isAdmin:i})})}function Ji(){return _("/api/me/history",{method:"DELETE"})}function Ki(e){return _(`/api/users/${e}`,{method:"DELETE"})}function Qi(){return _("/api/lastfm/connect")}function Zi(e=""){return _("/api/lastfm/complete",{method:"POST",body:JSON.stringify({token:e})})}async function tn(){const e=await _("/api/admin/invites");return(e==null?void 0:e.invites)||[]}async function en({note:e,expiresInDays:t,maxUses:a,isAdmin:i}){const n=await _("/api/admin/invites",{method:"POST",body:JSON.stringify({note:e,expiresInDays:t,maxUses:a,isAdmin:i})});return n==null?void 0:n.invite}function an(e){return _(`/api/admin/invites/${encodeURIComponent(e)}`,{method:"DELETE"})}function nn(e){return _(`/api/auth/invite/${encodeURIComponent(e)}`)}function sn({invite:e,username:t,password:a,displayName:i}){return _("/api/auth/register",{method:"POST",body:JSON.stringify({invite:e,username:t,password:a,displayName:i||void 0})})}const Ja=e=>`${location.origin}/static/index.html#/register?invite=${encodeURIComponent(e)}`;function Ka(){return _("/api/me/ytm")}function rn(e){return _("/api/me/ytm",{method:"PUT",body:JSON.stringify({cookies:e})})}function on(){return _("/api/me/ytm",{method:"DELETE"})}async function ln(e,t=40){const a=new URLSearchParams({q:e,limit:String(t)}),i=await _(`/api/ytm/search?${a.toString()}`);return(i==null?void 0:i.tracks)||[]}async function cn(e=200){const t=await _(`/api/ytm/liked?limit=${e}`);return(t==null?void 0:t.tracks)||[]}/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function dn(e,t,a){return(t=fn(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function dt(){return dt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)({}).hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},dt.apply(null,arguments)}function Sa(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,i)}return a}function it(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Sa(Object(a),!0).forEach(function(i){dn(e,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Sa(Object(a)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))})}return e}function un(e,t){if(e==null)return{};var a,i,n=pn(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)===-1&&{}.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function pn(e,t){if(e==null)return{};var a={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(t.indexOf(i)!==-1)continue;a[i]=e[i]}return a}function hn(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var i=a.call(e,t);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function fn(e){var t=hn(e,"string");return typeof t=="symbol"?t:t+""}function Ue(e){"@babel/helpers - typeof";return Ue=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ue(e)}var mn="1.15.7";function ct(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var ut=ct(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),te=ct(/Edge/i),Ea=ct(/firefox/i),Xt=ct(/safari/i)&&!ct(/chrome/i)&&!ct(/android/i),ia=ct(/iP(ad|od|hone)/i),Qa=ct(/chrome/i)&&ct(/android/i),Za={capture:!1,passive:!1};function L(e,t,a){e.addEventListener(t,a,!ut&&Za)}function M(e,t,a){e.removeEventListener(t,a,!ut&&Za)}function pe(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function ti(e){return e.host&&e!==document&&e.host.nodeType&&e.host!==e?e.host:e.parentNode}function Q(e,t,a,i){if(e){a=a||document;do{if(t!=null&&(t[0]===">"?e.parentNode===a&&pe(e,t):pe(e,t))||i&&e===a)return e;if(e===a)break}while(e=ti(e))}return null}var Ta=/\s+/g;function U(e,t,a){if(e&&t)if(e.classList)e.classList[a?"add":"remove"](t);else{var i=(" "+e.className+" ").replace(Ta," ").replace(" "+t+" "," ");e.className=(i+(a?" "+t:"")).replace(Ta," ")}}function $(e,t,a){var i=e&&e.style;if(i){if(a===void 0)return document.defaultView&&document.defaultView.getComputedStyle?a=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(a=e.currentStyle),t===void 0?a:a[t];!(t in i)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),i[t]=a+(typeof a=="string"?"":"px")}}function Ct(e,t){var a="";if(typeof e=="string")a=e;else do{var i=$(e,"transform");i&&i!=="none"&&(a=i+" "+a)}while(!t&&(e=e.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(a)}function ei(e,t,a){if(e){var i=e.getElementsByTagName(t),n=0,s=i.length;if(a)for(;n<s;n++)a(i[n],n);return i}return[]}function at(){var e=document.scrollingElement;return e||document.documentElement}function P(e,t,a,i,n){if(!(!e.getBoundingClientRect&&e!==window)){var s,r,u,d,p,m,g;if(e!==window&&e.parentNode&&e!==at()?(s=e.getBoundingClientRect(),r=s.top,u=s.left,d=s.bottom,p=s.right,m=s.height,g=s.width):(r=0,u=0,d=window.innerHeight,p=window.innerWidth,m=window.innerHeight,g=window.innerWidth),(t||a)&&e!==window&&(n=n||e.parentNode,!ut))do if(n&&n.getBoundingClientRect&&($(n,"transform")!=="none"||a&&$(n,"position")!=="static")){var v=n.getBoundingClientRect();r-=v.top+parseInt($(n,"border-top-width")),u-=v.left+parseInt($(n,"border-left-width")),d=r+s.height,p=u+s.width;break}while(n=n.parentNode);if(i&&e!==window){var T=Ct(n||e),k=T&&T.a,x=T&&T.d;T&&(r/=x,u/=k,g/=k,m/=x,d=r+m,p=u+g)}return{top:r,left:u,bottom:d,right:p,width:g,height:m}}}function ka(e,t,a){for(var i=vt(e,!0),n=P(e)[t];i;){var s=P(i)[a],r=void 0;if(r=n>=s,!r)return i;if(i===at())break;i=vt(i,!1)}return!1}function zt(e,t,a,i){for(var n=0,s=0,r=e.children;s<r.length;){if(r[s].style.display!=="none"&&r[s]!==S.ghost&&(i||r[s]!==S.dragged)&&Q(r[s],a.draggable,e,!1)){if(n===t)return r[s];n++}s++}return null}function na(e,t){for(var a=e.lastElementChild;a&&(a===S.ghost||$(a,"display")==="none"||t&&!pe(a,t));)a=a.previousElementSibling;return a||null}function G(e,t){var a=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==S.clone&&(!t||pe(e,t))&&a++;return a}function Ma(e){var t=0,a=0,i=at();if(e)do{var n=Ct(e),s=n.a,r=n.d;t+=e.scrollLeft*s,a+=e.scrollTop*r}while(e!==i&&(e=e.parentNode));return[t,a]}function vn(e,t){for(var a in e)if(e.hasOwnProperty(a)){for(var i in t)if(t.hasOwnProperty(i)&&t[i]===e[a][i])return Number(a)}return-1}function vt(e,t){if(!e||!e.getBoundingClientRect)return at();var a=e,i=!1;do if(a.clientWidth<a.scrollWidth||a.clientHeight<a.scrollHeight){var n=$(a);if(a.clientWidth<a.scrollWidth&&(n.overflowX=="auto"||n.overflowX=="scroll")||a.clientHeight<a.scrollHeight&&(n.overflowY=="auto"||n.overflowY=="scroll")){if(!a.getBoundingClientRect||a===document.body)return at();if(i||t)return a;i=!0}}while(a=a.parentNode);return at()}function gn(e,t){if(e&&t)for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);return e}function ze(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var Gt;function ai(e,t){return function(){if(!Gt){var a=arguments,i=this;a.length===1?e.call(i,a[0]):e.apply(i,a),Gt=setTimeout(function(){Gt=void 0},t)}}}function bn(){clearTimeout(Gt),Gt=void 0}function ii(e,t,a){e.scrollLeft+=t,e.scrollTop+=a}function ni(e){var t=window.Polymer,a=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):a?a(e).clone(!0)[0]:e.cloneNode(!0)}function si(e,t,a){var i={};return Array.from(e.children).forEach(function(n){var s,r,u,d;if(!(!Q(n,t.draggable,e,!1)||n.animated||n===a)){var p=P(n);i.left=Math.min((s=i.left)!==null&&s!==void 0?s:1/0,p.left),i.top=Math.min((r=i.top)!==null&&r!==void 0?r:1/0,p.top),i.right=Math.max((u=i.right)!==null&&u!==void 0?u:-1/0,p.right),i.bottom=Math.max((d=i.bottom)!==null&&d!==void 0?d:-1/0,p.bottom)}}),i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}var F="Sortable"+new Date().getTime();function yn(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var i=[].slice.call(this.el.children);i.forEach(function(n){if(!($(n,"display")==="none"||n===S.ghost)){e.push({target:n,rect:P(n)});var s=it({},e[e.length-1].rect);if(n.thisAnimationDuration){var r=Ct(n,!0);r&&(s.top-=r.f,s.left-=r.e)}n.fromRect=s}})}},addAnimationState:function(i){e.push(i)},removeAnimationState:function(i){e.splice(vn(e,{target:i}),1)},animateAll:function(i){var n=this;if(!this.options.animation){clearTimeout(t),typeof i=="function"&&i();return}var s=!1,r=0;e.forEach(function(u){var d=0,p=u.target,m=p.fromRect,g=P(p),v=p.prevFromRect,T=p.prevToRect,k=u.rect,x=Ct(p,!0);x&&(g.top-=x.f,g.left-=x.e),p.toRect=g,p.thisAnimationDuration&&ze(v,g)&&!ze(m,g)&&(k.top-g.top)/(k.left-g.left)===(m.top-g.top)/(m.left-g.left)&&(d=$n(k,v,T,n.options)),ze(g,m)||(p.prevFromRect=m,p.prevToRect=g,d||(d=n.options.animation),n.animate(p,k,g,d)),d&&(s=!0,r=Math.max(r,d),clearTimeout(p.animationResetTimer),p.animationResetTimer=setTimeout(function(){p.animationTime=0,p.prevFromRect=null,p.fromRect=null,p.prevToRect=null,p.thisAnimationDuration=null},d),p.thisAnimationDuration=d)}),clearTimeout(t),s?t=setTimeout(function(){typeof i=="function"&&i()},r):typeof i=="function"&&i(),e=[]},animate:function(i,n,s,r){if(r){$(i,"transition",""),$(i,"transform","");var u=Ct(this.el),d=u&&u.a,p=u&&u.d,m=(n.left-s.left)/(d||1),g=(n.top-s.top)/(p||1);i.animatingX=!!m,i.animatingY=!!g,$(i,"transform","translate3d("+m+"px,"+g+"px,0)"),this.forRepaintDummy=wn(i),$(i,"transition","transform "+r+"ms"+(this.options.easing?" "+this.options.easing:"")),$(i,"transform","translate3d(0,0,0)"),typeof i.animated=="number"&&clearTimeout(i.animated),i.animated=setTimeout(function(){$(i,"transition",""),$(i,"transform",""),i.animated=!1,i.animatingX=!1,i.animatingY=!1},r)}}}}function wn(e){return e.offsetWidth}function $n(e,t,a,i){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-a.top,2)+Math.pow(t.left-a.left,2))*i.animation}var _t=[],Pe={initializeByDefault:!0},ee={mount:function(t){for(var a in Pe)Pe.hasOwnProperty(a)&&!(a in t)&&(t[a]=Pe[a]);_t.forEach(function(i){if(i.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),_t.push(t)},pluginEvent:function(t,a,i){var n=this;this.eventCanceled=!1,i.cancel=function(){n.eventCanceled=!0};var s=t+"Global";_t.forEach(function(r){a[r.pluginName]&&(a[r.pluginName][s]&&a[r.pluginName][s](it({sortable:a},i)),a.options[r.pluginName]&&a[r.pluginName][t]&&a[r.pluginName][t](it({sortable:a},i)))})},initializePlugins:function(t,a,i,n){_t.forEach(function(u){var d=u.pluginName;if(!(!t.options[d]&&!u.initializeByDefault)){var p=new u(t,a,t.options);p.sortable=t,p.options=t.options,t[d]=p,dt(i,p.defaults)}});for(var s in t.options)if(t.options.hasOwnProperty(s)){var r=this.modifyOption(t,s,t.options[s]);typeof r<"u"&&(t.options[s]=r)}},getEventProperties:function(t,a){var i={};return _t.forEach(function(n){typeof n.eventProperties=="function"&&dt(i,n.eventProperties.call(a[n.pluginName],t))}),i},modifyOption:function(t,a,i){var n;return _t.forEach(function(s){t[s.pluginName]&&s.optionListeners&&typeof s.optionListeners[a]=="function"&&(n=s.optionListeners[a].call(t[s.pluginName],i))}),n}};function Sn(e){var t=e.sortable,a=e.rootEl,i=e.name,n=e.targetEl,s=e.cloneEl,r=e.toEl,u=e.fromEl,d=e.oldIndex,p=e.newIndex,m=e.oldDraggableIndex,g=e.newDraggableIndex,v=e.originalEvent,T=e.putSortable,k=e.extraEventProperties;if(t=t||a&&a[F],!!t){var x,W=t.options,rt="on"+i.charAt(0).toUpperCase()+i.substr(1);window.CustomEvent&&!ut&&!te?x=new CustomEvent(i,{bubbles:!0,cancelable:!0}):(x=document.createEvent("Event"),x.initEvent(i,!0,!0)),x.to=r||a,x.from=u||a,x.item=n||a,x.clone=s,x.oldIndex=d,x.newIndex=p,x.oldDraggableIndex=m,x.newDraggableIndex=g,x.originalEvent=v,x.pullMode=T?T.lastPutMode:void 0;var N=it(it({},k),ee.getEventProperties(i,t));for(var J in N)x[J]=N[J];a&&a.dispatchEvent(x),W[rt]&&W[rt].call(t,x)}}var En=["evt"],j=function(t,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=i.evt,s=un(i,En);ee.pluginEvent.bind(S)(t,a,it({dragEl:f,parentEl:C,ghostEl:E,rootEl:D,nextEl:kt,lastDownEl:le,cloneEl:A,cloneHidden:mt,dragStarted:Ft,putSortable:O,activeSortable:S.active,originalEvent:n,oldIndex:Dt,oldDraggableIndex:Wt,newIndex:X,newDraggableIndex:ft,hideGhostForTarget:ci,unhideGhostForTarget:di,cloneNowHidden:function(){mt=!0},cloneNowShown:function(){mt=!1},dispatchSortableEvent:function(u){R({sortable:a,name:u,originalEvent:n})}},s))};function R(e){Sn(it({putSortable:O,cloneEl:A,targetEl:f,rootEl:D,oldIndex:Dt,oldDraggableIndex:Wt,newIndex:X,newDraggableIndex:ft},e))}var f,C,E,D,kt,le,A,mt,Dt,X,Wt,ft,ne,O,xt=!1,he=!1,fe=[],Et,K,qe,He,_a,La,Ft,Lt,Jt,Kt=!1,se=!1,ce,I,Oe=[],Xe=!1,me=[],Me=typeof document<"u",re=ia,xa=te||ut?"cssFloat":"float",Tn=Me&&!Qa&&!ia&&"draggable"in document.createElement("div"),ri=(function(){if(Me){if(ut)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}})(),oi=function(t,a){var i=$(t),n=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),s=zt(t,0,a),r=zt(t,1,a),u=s&&$(s),d=r&&$(r),p=u&&parseInt(u.marginLeft)+parseInt(u.marginRight)+P(s).width,m=d&&parseInt(d.marginLeft)+parseInt(d.marginRight)+P(r).width;if(i.display==="flex")return i.flexDirection==="column"||i.flexDirection==="column-reverse"?"vertical":"horizontal";if(i.display==="grid")return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(s&&u.float&&u.float!=="none"){var g=u.float==="left"?"left":"right";return r&&(d.clear==="both"||d.clear===g)?"vertical":"horizontal"}return s&&(u.display==="block"||u.display==="flex"||u.display==="table"||u.display==="grid"||p>=n&&i[xa]==="none"||r&&i[xa]==="none"&&p+m>n)?"vertical":"horizontal"},kn=function(t,a,i){var n=i?t.left:t.top,s=i?t.right:t.bottom,r=i?t.width:t.height,u=i?a.left:a.top,d=i?a.right:a.bottom,p=i?a.width:a.height;return n===u||s===d||n+r/2===u+p/2},Mn=function(t,a){var i;return fe.some(function(n){var s=n[F].options.emptyInsertThreshold;if(!(!s||na(n))){var r=P(n),u=t>=r.left-s&&t<=r.right+s,d=a>=r.top-s&&a<=r.bottom+s;if(u&&d)return i=n}}),i},li=function(t){function a(s,r){return function(u,d,p,m){var g=u.options.group.name&&d.options.group.name&&u.options.group.name===d.options.group.name;if(s==null&&(r||g))return!0;if(s==null||s===!1)return!1;if(r&&s==="clone")return s;if(typeof s=="function")return a(s(u,d,p,m),r)(u,d,p,m);var v=(r?u:d).options.group.name;return s===!0||typeof s=="string"&&s===v||s.join&&s.indexOf(v)>-1}}var i={},n=t.group;(!n||Ue(n)!="object")&&(n={name:n}),i.name=n.name,i.checkPull=a(n.pull,!0),i.checkPut=a(n.put),i.revertClone=n.revertClone,t.group=i},ci=function(){!ri&&E&&$(E,"display","none")},di=function(){!ri&&E&&$(E,"display","")};Me&&!Qa&&document.addEventListener("click",function(e){if(he)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),he=!1,!1},!0);var Tt=function(t){if(f){t=t.touches?t.touches[0]:t;var a=Mn(t.clientX,t.clientY);if(a){var i={};for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);i.target=i.rootEl=a,i.preventDefault=void 0,i.stopPropagation=void 0,a[F]._onDragOver(i)}}},_n=function(t){f&&f.parentNode[F]._isOutsideThisEl(t.target)};function S(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=dt({},t),e[F]=this;var a={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return oi(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(r,u){r.setData("Text",u.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:S.supportPointer!==!1&&"PointerEvent"in window&&(!Xt||ia),emptyInsertThreshold:5};ee.initializePlugins(this,e,a);for(var i in a)!(i in t)&&(t[i]=a[i]);li(t);for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));this.nativeDraggable=t.forceFallback?!1:Tn,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?L(e,"pointerdown",this._onTapStart):(L(e,"mousedown",this._onTapStart),L(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(L(e,"dragover",this),L(e,"dragenter",this)),fe.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),dt(this,yn())}S.prototype={constructor:S,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(Lt=null)},_getDirection:function(t,a){return typeof this.options.direction=="function"?this.options.direction.call(this,t,a,f):this.options.direction},_onTapStart:function(t){if(t.cancelable){var a=this,i=this.el,n=this.options,s=n.preventOnFilter,r=t.type,u=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,d=(u||t).target,p=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||d,m=n.filter;if(qn(i),!f&&!(/mousedown|pointerdown/.test(r)&&t.button!==0||n.disabled)&&!p.isContentEditable&&!(!this.nativeDraggable&&Xt&&d&&d.tagName.toUpperCase()==="SELECT")&&(d=Q(d,n.draggable,i,!1),!(d&&d.animated)&&le!==d)){if(Dt=G(d),Wt=G(d,n.draggable),typeof m=="function"){if(m.call(this,t,d,this)){R({sortable:a,rootEl:p,name:"filter",targetEl:d,toEl:i,fromEl:i}),j("filter",a,{evt:t}),s&&t.preventDefault();return}}else if(m&&(m=m.split(",").some(function(g){if(g=Q(p,g.trim(),i,!1),g)return R({sortable:a,rootEl:g,name:"filter",targetEl:d,fromEl:i,toEl:i}),j("filter",a,{evt:t}),!0}),m)){s&&t.preventDefault();return}n.handle&&!Q(p,n.handle,i,!1)||this._prepareDragStart(t,u,d)}}},_prepareDragStart:function(t,a,i){var n=this,s=n.el,r=n.options,u=s.ownerDocument,d;if(i&&!f&&i.parentNode===s){var p=P(i);if(D=s,f=i,C=f.parentNode,kt=f.nextSibling,le=i,ne=r.group,S.dragged=f,Et={target:f,clientX:(a||t).clientX,clientY:(a||t).clientY},_a=Et.clientX-p.left,La=Et.clientY-p.top,this._lastX=(a||t).clientX,this._lastY=(a||t).clientY,f.style["will-change"]="all",d=function(){if(j("delayEnded",n,{evt:t}),S.eventCanceled){n._onDrop();return}n._disableDelayedDragEvents(),!Ea&&n.nativeDraggable&&(f.draggable=!0),n._triggerDragStart(t,a),R({sortable:n,name:"choose",originalEvent:t}),U(f,r.chosenClass,!0)},r.ignore.split(",").forEach(function(m){ei(f,m.trim(),Ie)}),L(u,"dragover",Tt),L(u,"mousemove",Tt),L(u,"touchmove",Tt),r.supportPointer?(L(u,"pointerup",n._onDrop),!this.nativeDraggable&&L(u,"pointercancel",n._onDrop)):(L(u,"mouseup",n._onDrop),L(u,"touchend",n._onDrop),L(u,"touchcancel",n._onDrop)),Ea&&this.nativeDraggable&&(this.options.touchStartThreshold=4,f.draggable=!0),j("delayStart",this,{evt:t}),r.delay&&(!r.delayOnTouchOnly||a)&&(!this.nativeDraggable||!(te||ut))){if(S.eventCanceled){this._onDrop();return}r.supportPointer?(L(u,"pointerup",n._disableDelayedDrag),L(u,"pointercancel",n._disableDelayedDrag)):(L(u,"mouseup",n._disableDelayedDrag),L(u,"touchend",n._disableDelayedDrag),L(u,"touchcancel",n._disableDelayedDrag)),L(u,"mousemove",n._delayedDragTouchMoveHandler),L(u,"touchmove",n._delayedDragTouchMoveHandler),r.supportPointer&&L(u,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(d,r.delay)}else d()}},_delayedDragTouchMoveHandler:function(t){var a=t.touches?t.touches[0]:t;Math.max(Math.abs(a.clientX-this._lastX),Math.abs(a.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){f&&Ie(f),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;M(t,"mouseup",this._disableDelayedDrag),M(t,"touchend",this._disableDelayedDrag),M(t,"touchcancel",this._disableDelayedDrag),M(t,"pointerup",this._disableDelayedDrag),M(t,"pointercancel",this._disableDelayedDrag),M(t,"mousemove",this._delayedDragTouchMoveHandler),M(t,"touchmove",this._delayedDragTouchMoveHandler),M(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,a){a=a||t.pointerType=="touch"&&t,!this.nativeDraggable||a?this.options.supportPointer?L(document,"pointermove",this._onTouchMove):a?L(document,"touchmove",this._onTouchMove):L(document,"mousemove",this._onTouchMove):(L(f,"dragend",this),L(D,"dragstart",this._onDragStart));try{document.selection?de(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,a){if(xt=!1,D&&f){j("dragStarted",this,{evt:a}),this.nativeDraggable&&L(document,"dragover",_n);var i=this.options;!t&&U(f,i.dragClass,!1),U(f,i.ghostClass,!0),S.active=this,t&&this._appendGhost(),R({sortable:this,name:"start",originalEvent:a})}else this._nulling()},_emulateDragOver:function(){if(K){this._lastX=K.clientX,this._lastY=K.clientY,ci();for(var t=document.elementFromPoint(K.clientX,K.clientY),a=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(K.clientX,K.clientY),t!==a);)a=t;if(f.parentNode[F]._isOutsideThisEl(t),a)do{if(a[F]){var i=void 0;if(i=a[F]._onDragOver({clientX:K.clientX,clientY:K.clientY,target:t,rootEl:a}),i&&!this.options.dragoverBubble)break}t=a}while(a=ti(a));di()}},_onTouchMove:function(t){if(Et){var a=this.options,i=a.fallbackTolerance,n=a.fallbackOffset,s=t.touches?t.touches[0]:t,r=E&&Ct(E,!0),u=E&&r&&r.a,d=E&&r&&r.d,p=re&&I&&Ma(I),m=(s.clientX-Et.clientX+n.x)/(u||1)+(p?p[0]-Oe[0]:0)/(u||1),g=(s.clientY-Et.clientY+n.y)/(d||1)+(p?p[1]-Oe[1]:0)/(d||1);if(!S.active&&!xt){if(i&&Math.max(Math.abs(s.clientX-this._lastX),Math.abs(s.clientY-this._lastY))<i)return;this._onDragStart(t,!0)}if(E){r?(r.e+=m-(qe||0),r.f+=g-(He||0)):r={a:1,b:0,c:0,d:1,e:m,f:g};var v="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");$(E,"webkitTransform",v),$(E,"mozTransform",v),$(E,"msTransform",v),$(E,"transform",v),qe=m,He=g,K=s}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!E){var t=this.options.fallbackOnBody?document.body:D,a=P(f,!0,re,!0,t),i=this.options;if(re){for(I=t;$(I,"position")==="static"&&$(I,"transform")==="none"&&I!==document;)I=I.parentNode;I!==document.body&&I!==document.documentElement?(I===document&&(I=at()),a.top+=I.scrollTop,a.left+=I.scrollLeft):I=at(),Oe=Ma(I)}E=f.cloneNode(!0),U(E,i.ghostClass,!1),U(E,i.fallbackClass,!0),U(E,i.dragClass,!0),$(E,"transition",""),$(E,"transform",""),$(E,"box-sizing","border-box"),$(E,"margin",0),$(E,"top",a.top),$(E,"left",a.left),$(E,"width",a.width),$(E,"height",a.height),$(E,"opacity","0.8"),$(E,"position",re?"absolute":"fixed"),$(E,"zIndex","100000"),$(E,"pointerEvents","none"),S.ghost=E,t.appendChild(E),$(E,"transform-origin",_a/parseInt(E.style.width)*100+"% "+La/parseInt(E.style.height)*100+"%")}},_onDragStart:function(t,a){var i=this,n=t.dataTransfer,s=i.options;if(j("dragStart",this,{evt:t}),S.eventCanceled){this._onDrop();return}j("setupClone",this),S.eventCanceled||(A=ni(f),A.removeAttribute("id"),A.draggable=!1,A.style["will-change"]="",this._hideClone(),U(A,this.options.chosenClass,!1),S.clone=A),i.cloneId=de(function(){j("clone",i),!S.eventCanceled&&(i.options.removeCloneOnHide||D.insertBefore(A,f),i._hideClone(),R({sortable:i,name:"clone"}))}),!a&&U(f,s.dragClass,!0),a?(he=!0,i._loopId=setInterval(i._emulateDragOver,50)):(M(document,"mouseup",i._onDrop),M(document,"touchend",i._onDrop),M(document,"touchcancel",i._onDrop),n&&(n.effectAllowed="move",s.setData&&s.setData.call(i,n,f)),L(document,"drop",i),$(f,"transform","translateZ(0)")),xt=!0,i._dragStartId=de(i._dragStarted.bind(i,a,t)),L(document,"selectstart",i),Ft=!0,window.getSelection().removeAllRanges(),Xt&&$(document.body,"user-select","none")},_onDragOver:function(t){var a=this.el,i=t.target,n,s,r,u=this.options,d=u.group,p=S.active,m=ne===d,g=u.sort,v=O||p,T,k=this,x=!1;if(Xe)return;function W(Vt,Li){j(Vt,k,it({evt:t,isOwner:m,axis:T?"vertical":"horizontal",revert:r,dragRect:n,targetRect:s,canSort:g,fromSortable:v,target:i,completed:N,onMove:function(va,xi){return oe(D,a,f,n,va,P(va),t,xi)},changed:J},Li))}function rt(){W("dragOverAnimationCapture"),k.captureAnimationState(),k!==v&&v.captureAnimationState()}function N(Vt){return W("dragOverCompleted",{insertion:Vt}),Vt&&(m?p._hideClone():p._showClone(k),k!==v&&(U(f,O?O.options.ghostClass:p.options.ghostClass,!1),U(f,u.ghostClass,!0)),O!==k&&k!==S.active?O=k:k===S.active&&O&&(O=null),v===k&&(k._ignoreWhileAnimating=i),k.animateAll(function(){W("dragOverAnimationComplete"),k._ignoreWhileAnimating=null}),k!==v&&(v.animateAll(),v._ignoreWhileAnimating=null)),(i===f&&!f.animated||i===a&&!i.animated)&&(Lt=null),!u.dragoverBubble&&!t.rootEl&&i!==document&&(f.parentNode[F]._isOutsideThisEl(t.target),!Vt&&Tt(t)),!u.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),x=!0}function J(){X=G(f),ft=G(f,u.draggable),R({sortable:k,name:"change",toEl:a,newIndex:X,newDraggableIndex:ft,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),i=Q(i,u.draggable,a,!0),W("dragOver"),S.eventCanceled)return x;if(f.contains(t.target)||i.animated&&i.animatingX&&i.animatingY||k._ignoreWhileAnimating===i)return N(!1);if(he=!1,p&&!u.disabled&&(m?g||(r=C!==D):O===this||(this.lastPutMode=ne.checkPull(this,p,f,t))&&d.checkPut(this,p,f,t))){if(T=this._getDirection(t,i)==="vertical",n=P(f),W("dragOverValid"),S.eventCanceled)return x;if(r)return C=D,rt(),this._hideClone(),W("revert"),S.eventCanceled||(kt?D.insertBefore(f,kt):D.appendChild(f)),N(!0);var B=na(a,u.draggable);if(!B||An(t,T,this)&&!B.animated){if(B===f)return N(!1);if(B&&a===t.target&&(i=B),i&&(s=P(i)),oe(D,a,f,n,i,s,t,!!i)!==!1)return rt(),B&&B.nextSibling?a.insertBefore(f,B.nextSibling):a.appendChild(f),C=a,J(),N(!0)}else if(B&&Dn(t,T,this)){var wt=zt(a,0,u,!0);if(wt===f)return N(!1);if(i=wt,s=P(i),oe(D,a,f,n,i,s,t,!1)!==!1)return rt(),a.insertBefore(f,wt),C=a,J(),N(!0)}else if(i.parentNode===a){s=P(i);var tt=0,$t,Ot=f.parentNode!==a,Y=!kn(f.animated&&f.toRect||n,i.animated&&i.toRect||s,T),It=T?"top":"left",pt=ka(i,"top","top")||ka(f,"top","top"),Nt=pt?pt.scrollTop:void 0;Lt!==i&&($t=s[It],Kt=!1,se=!Y&&u.invertSwap||Ot),tt=Cn(t,i,s,T,Y?1:u.swapThreshold,u.invertedSwapThreshold==null?u.swapThreshold:u.invertedSwapThreshold,se,Lt===i);var ot;if(tt!==0){var St=G(f);do St-=tt,ot=C.children[St];while(ot&&($(ot,"display")==="none"||ot===E))}if(tt===0||ot===i)return N(!1);Lt=i,Jt=tt;var Rt=i.nextElementSibling,ht=!1;ht=tt===1;var ie=oe(D,a,f,n,i,s,t,ht);if(ie!==!1)return(ie===1||ie===-1)&&(ht=ie===1),Xe=!0,setTimeout(xn,30),rt(),ht&&!Rt?a.appendChild(f):i.parentNode.insertBefore(f,ht?Rt:i),pt&&ii(pt,0,Nt-pt.scrollTop),C=f.parentNode,$t!==void 0&&!se&&(ce=Math.abs($t-P(i)[It])),J(),N(!0)}if(a.contains(f))return N(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){M(document,"mousemove",this._onTouchMove),M(document,"touchmove",this._onTouchMove),M(document,"pointermove",this._onTouchMove),M(document,"dragover",Tt),M(document,"mousemove",Tt),M(document,"touchmove",Tt)},_offUpEvents:function(){var t=this.el.ownerDocument;M(t,"mouseup",this._onDrop),M(t,"touchend",this._onDrop),M(t,"pointerup",this._onDrop),M(t,"pointercancel",this._onDrop),M(t,"touchcancel",this._onDrop),M(document,"selectstart",this)},_onDrop:function(t){var a=this.el,i=this.options;if(X=G(f),ft=G(f,i.draggable),j("drop",this,{evt:t}),C=f&&f.parentNode,X=G(f),ft=G(f,i.draggable),S.eventCanceled){this._nulling();return}xt=!1,se=!1,Kt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Ge(this.cloneId),Ge(this._dragStartId),this.nativeDraggable&&(M(document,"drop",this),M(a,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Xt&&$(document.body,"user-select",""),$(f,"transform",""),t&&(Ft&&(t.cancelable&&t.preventDefault(),!i.dropBubble&&t.stopPropagation()),E&&E.parentNode&&E.parentNode.removeChild(E),(D===C||O&&O.lastPutMode!=="clone")&&A&&A.parentNode&&A.parentNode.removeChild(A),f&&(this.nativeDraggable&&M(f,"dragend",this),Ie(f),f.style["will-change"]="",Ft&&!xt&&U(f,O?O.options.ghostClass:this.options.ghostClass,!1),U(f,this.options.chosenClass,!1),R({sortable:this,name:"unchoose",toEl:C,newIndex:null,newDraggableIndex:null,originalEvent:t}),D!==C?(X>=0&&(R({rootEl:C,name:"add",toEl:C,fromEl:D,originalEvent:t}),R({sortable:this,name:"remove",toEl:C,originalEvent:t}),R({rootEl:C,name:"sort",toEl:C,fromEl:D,originalEvent:t}),R({sortable:this,name:"sort",toEl:C,originalEvent:t})),O&&O.save()):X!==Dt&&X>=0&&(R({sortable:this,name:"update",toEl:C,originalEvent:t}),R({sortable:this,name:"sort",toEl:C,originalEvent:t})),S.active&&((X==null||X===-1)&&(X=Dt,ft=Wt),R({sortable:this,name:"end",toEl:C,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){j("nulling",this),D=f=C=E=kt=A=le=mt=Et=K=Ft=X=ft=Dt=Wt=Lt=Jt=O=ne=S.dragged=S.ghost=S.clone=S.active=null;var t=this.el;me.forEach(function(a){t.contains(a)&&(a.checked=!0)}),me.length=qe=He=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":f&&(this._onDragOver(t),Ln(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],a,i=this.el.children,n=0,s=i.length,r=this.options;n<s;n++)a=i[n],Q(a,r.draggable,this.el,!1)&&t.push(a.getAttribute(r.dataIdAttr)||Pn(a));return t},sort:function(t,a){var i={},n=this.el;this.toArray().forEach(function(s,r){var u=n.children[r];Q(u,this.options.draggable,n,!1)&&(i[s]=u)},this),a&&this.captureAnimationState(),t.forEach(function(s){i[s]&&(n.removeChild(i[s]),n.appendChild(i[s]))}),a&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,a){return Q(t,a||this.options.draggable,this.el,!1)},option:function(t,a){var i=this.options;if(a===void 0)return i[t];var n=ee.modifyOption(this,t,a);typeof n<"u"?i[t]=n:i[t]=a,t==="group"&&li(i)},destroy:function(){j("destroy",this);var t=this.el;t[F]=null,M(t,"mousedown",this._onTapStart),M(t,"touchstart",this._onTapStart),M(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(M(t,"dragover",this),M(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(a){a.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),fe.splice(fe.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!mt){if(j("hideClone",this),S.eventCanceled)return;$(A,"display","none"),this.options.removeCloneOnHide&&A.parentNode&&A.parentNode.removeChild(A),mt=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(mt){if(j("showClone",this),S.eventCanceled)return;f.parentNode==D&&!this.options.group.revertClone?D.insertBefore(A,f):kt?D.insertBefore(A,kt):D.appendChild(A),this.options.group.revertClone&&this.animate(f,A),$(A,"display",""),mt=!1}}};function Ln(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function oe(e,t,a,i,n,s,r,u){var d,p=e[F],m=p.options.onMove,g;return window.CustomEvent&&!ut&&!te?d=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(d=document.createEvent("Event"),d.initEvent("move",!0,!0)),d.to=t,d.from=e,d.dragged=a,d.draggedRect=i,d.related=n||t,d.relatedRect=s||P(t),d.willInsertAfter=u,d.originalEvent=r,e.dispatchEvent(d),m&&(g=m.call(p,d,r)),g}function Ie(e){e.draggable=!1}function xn(){Xe=!1}function Dn(e,t,a){var i=P(zt(a.el,0,a.options,!0)),n=si(a.el,a.options,E),s=10;return t?e.clientX<n.left-s||e.clientY<i.top&&e.clientX<i.right:e.clientY<n.top-s||e.clientY<i.bottom&&e.clientX<i.left}function An(e,t,a){var i=P(na(a.el,a.options.draggable)),n=si(a.el,a.options,E),s=10;return t?e.clientX>n.right+s||e.clientY>i.bottom&&e.clientX>i.left:e.clientY>n.bottom+s||e.clientX>i.right&&e.clientY>i.top}function Cn(e,t,a,i,n,s,r,u){var d=i?e.clientY:e.clientX,p=i?a.height:a.width,m=i?a.top:a.left,g=i?a.bottom:a.right,v=!1;if(!r){if(u&&ce<p*n){if(!Kt&&(Jt===1?d>m+p*s/2:d<g-p*s/2)&&(Kt=!0),Kt)v=!0;else if(Jt===1?d<m+ce:d>g-ce)return-Jt}else if(d>m+p*(1-n)/2&&d<g-p*(1-n)/2)return zn(t)}return v=v||r,v&&(d<m+p*s/2||d>g-p*s/2)?d>m+p/2?1:-1:0}function zn(e){return G(f)<G(e)?1:-1}function Pn(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,a=t.length,i=0;a--;)i+=t.charCodeAt(a);return i.toString(36)}function qn(e){me.length=0;for(var t=e.getElementsByTagName("input"),a=t.length;a--;){var i=t[a];i.checked&&me.push(i)}}function de(e){return setTimeout(e,0)}function Ge(e){return clearTimeout(e)}Me&&L(document,"touchmove",function(e){(S.active||xt)&&e.cancelable&&e.preventDefault()});S.utils={on:L,off:M,css:$,find:ei,is:function(t,a){return!!Q(t,a,t,!1)},extend:gn,throttle:ai,closest:Q,toggleClass:U,clone:ni,index:G,nextTick:de,cancelNextTick:Ge,detectDirection:oi,getChild:zt,expando:F};S.get=function(e){return e[F]};S.mount=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];t[0].constructor===Array&&(t=t[0]),t.forEach(function(i){if(!i.prototype||!i.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));i.utils&&(S.utils=it(it({},S.utils),i.utils)),ee.mount(i)})};S.create=function(e,t){return new S(e,t)};S.version=mn;var z=[],Bt,We,Je=!1,Ne,Re,ve,Yt;function Hn(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(a){var i=a.originalEvent;this.sortable.nativeDraggable?L(document,"dragover",this._handleAutoScroll):this.options.supportPointer?L(document,"pointermove",this._handleFallbackAutoScroll):i.touches?L(document,"touchmove",this._handleFallbackAutoScroll):L(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(a){var i=a.originalEvent;!this.options.dragOverBubble&&!i.rootEl&&this._handleAutoScroll(i)},drop:function(){this.sortable.nativeDraggable?M(document,"dragover",this._handleAutoScroll):(M(document,"pointermove",this._handleFallbackAutoScroll),M(document,"touchmove",this._handleFallbackAutoScroll),M(document,"mousemove",this._handleFallbackAutoScroll)),Da(),ue(),bn()},nulling:function(){ve=We=Bt=Je=Yt=Ne=Re=null,z.length=0},_handleFallbackAutoScroll:function(a){this._handleAutoScroll(a,!0)},_handleAutoScroll:function(a,i){var n=this,s=(a.touches?a.touches[0]:a).clientX,r=(a.touches?a.touches[0]:a).clientY,u=document.elementFromPoint(s,r);if(ve=a,i||this.options.forceAutoScrollFallback||te||ut||Xt){Ve(a,this.options,u,i);var d=vt(u,!0);Je&&(!Yt||s!==Ne||r!==Re)&&(Yt&&Da(),Yt=setInterval(function(){var p=vt(document.elementFromPoint(s,r),!0);p!==d&&(d=p,ue()),Ve(a,n.options,p,i)},10),Ne=s,Re=r)}else{if(!this.options.bubbleScroll||vt(u,!0)===at()){ue();return}Ve(a,this.options,vt(u,!1),!1)}}},dt(e,{pluginName:"scroll",initializeByDefault:!0})}function ue(){z.forEach(function(e){clearInterval(e.pid)}),z=[]}function Da(){clearInterval(Yt)}var Ve=ai(function(e,t,a,i){if(t.scroll){var n=(e.touches?e.touches[0]:e).clientX,s=(e.touches?e.touches[0]:e).clientY,r=t.scrollSensitivity,u=t.scrollSpeed,d=at(),p=!1,m;We!==a&&(We=a,ue(),Bt=t.scroll,m=t.scrollFn,Bt===!0&&(Bt=vt(a,!0)));var g=0,v=Bt;do{var T=v,k=P(T),x=k.top,W=k.bottom,rt=k.left,N=k.right,J=k.width,B=k.height,wt=void 0,tt=void 0,$t=T.scrollWidth,Ot=T.scrollHeight,Y=$(T),It=T.scrollLeft,pt=T.scrollTop;T===d?(wt=J<$t&&(Y.overflowX==="auto"||Y.overflowX==="scroll"||Y.overflowX==="visible"),tt=B<Ot&&(Y.overflowY==="auto"||Y.overflowY==="scroll"||Y.overflowY==="visible")):(wt=J<$t&&(Y.overflowX==="auto"||Y.overflowX==="scroll"),tt=B<Ot&&(Y.overflowY==="auto"||Y.overflowY==="scroll"));var Nt=wt&&(Math.abs(N-n)<=r&&It+J<$t)-(Math.abs(rt-n)<=r&&!!It),ot=tt&&(Math.abs(W-s)<=r&&pt+B<Ot)-(Math.abs(x-s)<=r&&!!pt);if(!z[g])for(var St=0;St<=g;St++)z[St]||(z[St]={});(z[g].vx!=Nt||z[g].vy!=ot||z[g].el!==T)&&(z[g].el=T,z[g].vx=Nt,z[g].vy=ot,clearInterval(z[g].pid),(Nt!=0||ot!=0)&&(p=!0,z[g].pid=setInterval((function(){i&&this.layer===0&&S.active._onTouchMove(ve);var Rt=z[this.layer].vy?z[this.layer].vy*u:0,ht=z[this.layer].vx?z[this.layer].vx*u:0;typeof m=="function"&&m.call(S.dragged.parentNode[F],ht,Rt,e,ve,z[this.layer].el)!=="continue"||ii(z[this.layer].el,ht,Rt)}).bind({layer:g}),24))),g++}while(t.bubbleScroll&&v!==d&&(v=vt(v,!1)));Je=p}},30),ui=function(t){var a=t.originalEvent,i=t.putSortable,n=t.dragEl,s=t.activeSortable,r=t.dispatchSortableEvent,u=t.hideGhostForTarget,d=t.unhideGhostForTarget;if(a){var p=i||s;u();var m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,g=document.elementFromPoint(m.clientX,m.clientY);d(),p&&!p.el.contains(g)&&(r("spill"),this.onSpill({dragEl:n,putSortable:i}))}};function sa(){}sa.prototype={startIndex:null,dragStart:function(t){var a=t.oldDraggableIndex;this.startIndex=a},onSpill:function(t){var a=t.dragEl,i=t.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var n=zt(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(a,n):this.sortable.el.appendChild(a),this.sortable.animateAll(),i&&i.animateAll()},drop:ui};dt(sa,{pluginName:"revertOnSpill"});function ra(){}ra.prototype={onSpill:function(t){var a=t.dragEl,i=t.putSortable,n=i||this.sortable;n.captureAnimationState(),a.parentNode&&a.parentNode.removeChild(a),n.animateAll()},drop:ui};dt(ra,{pluginName:"removeOnSpill"});S.mount(new Hn);S.mount(ra,sa);const pi=[32,64,125,250,500,1e3,2e3,4e3,8e3,16e3],Ke={flat:{name:"Ровно",gains:[0,0,0,0,0,0,0,0,0,0]},rock:{name:"Рок",gains:[5,4,2,-1,-2,0,2,3,4,5]},pop:{name:"Поп",gains:[-1,0,2,4,4,2,0,-1,-2,-3]},jazz:{name:"Джаз",gains:[4,3,1,2,-1,-1,0,2,3,4]},bass:{name:"Бас",gains:[8,7,5,2,0,-1,-2,-3,-4,-5]},vocal:{name:"Вокал",gains:[-3,-2,0,3,5,5,3,1,0,-1]},electronic:{name:"Электроника",gains:[5,4,1,0,-2,2,1,2,5,6]}},Aa="rustream.volume",Ca="rustream.eq",za="rustream.mode",Pa="rustream.playback.queue",qa="rustream.playback.position";function Ha(e,t){try{return JSON.parse(localStorage.getItem(e))??t}catch{return t}}class On extends EventTarget{constructor(){super(),this.audio=new Audio,this.audio.preload="auto",this.audio.crossOrigin="anonymous",this.queue=[],this.index=-1,this.shuffle=!1,this.repeat="off",this.track=null,this.playId=null,this.scrobbled=!1,this.liveMode=!1,this.mode=Ha(za,{shuffle:!1,repeat:"off"}),this.shuffle=!!this.mode.shuffle,this.repeat=this.mode.repeat||"off",this.volume=Number(localStorage.getItem(Aa)??80),this.audio.volume=Math.min(1,Math.max(0,this.volume/100)),this.eqState=Ha(Ca,{enabled:!0,preset:"flat",gains:[...Ke.flat.gains]}),this.audioContext=null,this.filters=[],this.sourceNode=null,this._lastPositionWrite=0,this._restoredPause=!1,this._bindAudio(),window.addEventListener("pagehide",()=>this._storePosition(!0))}_bindAudio(){this.audio.addEventListener("timeupdate",()=>{this._maybeScrobble(),this._storePosition(),this._emit("time")}),this.audio.addEventListener("durationchange",()=>this._emit("time")),this.audio.addEventListener("progress",()=>this._emit("buffer")),this.audio.addEventListener("loadedmetadata",()=>this._emit("time")),this.audio.addEventListener("play",()=>{!this.playId&&this.track&&this._restoredPause&&(this._restoredPause=!1,this._beginPlay(this.track)),this._storePosition(!0),this._emit("state")}),this.audio.addEventListener("pause",()=>{this._storePosition(!0),this._emit("state")}),this.audio.addEventListener("volumechange",()=>this._emit("volume")),this.audio.addEventListener("ended",()=>this._onEnded()),this.audio.addEventListener("waiting",()=>this._emit("state")),this.audio.addEventListener("playing",()=>this._emit("state")),this.audio.addEventListener("error",()=>{this.track&&this.dispatchEvent(new CustomEvent("error",{detail:`Не удалось воспроизвести «${this.track.title}»`}))})}_emit(t){this.dispatchEvent(new CustomEvent(t))}_initAudioGraph(){if(this.audioContext)return;const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.audioContext=new t,this.sourceNode=this.audioContext.createMediaElementSource(this.audio),this.filters=pi.map(i=>{const n=this.audioContext.createBiquadFilter();return n.type="peaking",n.frequency.value=i,n.Q.value=1.1,n.gain.value=0,n});let a=this.sourceNode;for(const i of this.filters)a.connect(i),a=i;a.connect(this.audioContext.destination),this._applyEq()}_ensureRunning(){var t;this._initAudioGraph(),((t=this.audioContext)==null?void 0:t.state)==="suspended"&&this.audioContext.resume().catch(()=>{})}_applyEq(){this.filters.length&&this.filters.forEach((t,a)=>{t.gain.value=this.eqState.enabled&&this.eqState.gains[a]||0})}setEqEnabled(t){this.eqState.enabled=t,this._persistEq(),this._applyEq(),this._emit("eq")}setEqGain(t,a){this.eqState.gains[t]=Number(a),this.eqState.preset="custom",this._persistEq(),this._applyEq(),this._emit("eq")}applyEqPreset(t){const a=Ke[t];a&&(this.eqState.preset=t,this.eqState.gains=[...a.gains],this._persistEq(),this._applyEq(),this._emit("eq"))}resetEq(){this.applyEqPreset("flat")}_persistEq(){localStorage.setItem(Ca,JSON.stringify(this.eqState))}async playTracks(t,a=0,{shuffle:i=!1}={}){t!=null&&t.length&&(this._finalizePlay(!1),this.queue=[...t],i&&(this.shuffle=!0,this._persistMode()),this.index=Math.min(Math.max(0,a),this.queue.length-1),this._storeQueue(),await this._load(this.queue[this.index],!0))}async playAt(t){t<0||t>=this.queue.length||(this.index=t,this._storeQueue(),await this._load(this.queue[t],!0))}async _load(t,a){if(t&&(this._restoredPause=!1,this._finalizePlay(!1),this.track=t,this.audio.src=ba(t.id),this._beginPlay(t),this._updateMediaSession(t),this.dispatchEvent(new CustomEvent("track",{detail:t})),a)){this._ensureRunning();try{await this.audio.play()}catch{}}}async toggle(){this.track&&(this._ensureRunning(),this.audio.paused?await this.audio.play().catch(()=>{}):this.audio.pause())}pause(){this.audio.pause()}async next(t=!1){if(!this.queue.length)return;if(t&&this.repeat==="one"){this.audio.currentTime=0,await this.audio.play().catch(()=>{});return}let a;if(this.shuffle?a=this.queue.length>1?this._randomIndex():this.index:a=this.index+1,a>=this.queue.length)if(this.repeat==="all")a=0;else{this.audio.pause();return}await this.playAt(a)}async previous(){if(!this.queue.length)return;if(this.audio.currentTime>3){this.audio.currentTime=0;return}const t=this.index>0?this.index-1:this.queue.length-1;await this.playAt(t)}moveInQueue(t,a){if(t===a||t<0||a<0||t>=this.queue.length||a>=this.queue.length)return;const[i]=this.queue.splice(t,1);this.queue.splice(a,0,i),this.index===t?this.index=a:t<this.index&&a>=this.index?this.index--:t>this.index&&a<=this.index&&this.index++,this._storeQueue(),this._emit("queue")}_randomIndex(){if(this.queue.length<=1)return this.index;let t=this.index;for(;t===this.index;)t=Math.floor(Math.random()*this.queue.length);return t}async _onEnded(){if(this._finalizePlay(!0),this.repeat==="one"){this.audio.currentTime=0,this._beginPlay(this.track),await this.audio.play().catch(()=>{});return}if(this.index>=this.queue.length-1&&this.repeat==="off"&&!this.shuffle){this._emit("state"),this._emit("queueend");return}await this.next(!0)}async _beginPlay(t){this.playId=null,this.scrobbled=!1;try{const a=await Yi(t.id);this.playId=(a==null?void 0:a.playId)||null}catch{}}_maybeScrobble(){if(!this.playId||this.scrobbled)return;const t=this.audio.duration;!Number.isFinite(t)||t<30||(this.audio.currentTime>=t/2||this.audio.currentTime>=240)&&(this.scrobbled=!0,$a(this.playId,Math.round(this.audio.currentTime*1e3),!0).catch(()=>{}))}_finalizePlay(t){if(!this.playId)return;const a=this.playId;this.playId=null,$a(a,Math.round((this.audio.currentTime||0)*1e3),t).catch(()=>{})}appendTracks(t){t!=null&&t.length&&(this.queue.push(...t),this._storeQueue())}toggleShuffle(){this.shuffle=!this.shuffle,this._persistMode(),this._emit("mode")}cycleRepeat(){const t=["off","all","one"];this.repeat=t[(t.indexOf(this.repeat)+1)%t.length],this._persistMode(),this._emit("mode")}_persistMode(){localStorage.setItem(za,JSON.stringify({shuffle:this.shuffle,repeat:this.repeat}))}seekTo(t){const a=this.audio.duration;!Number.isFinite(a)||a<=0||(this.audio.currentTime=Math.min(100,Math.max(0,t))/100*a,this._emit("time"))}seekToSeconds(t){const a=this.audio.duration;!Number.isFinite(a)||a<=0||(this.audio.currentTime=Math.min(a,Math.max(0,t)),this._emit("time"))}removeAt(t){t<0||t>=this.queue.length||t===this.index||(this.queue.splice(t,1),t<this.index&&(this.index-=1),this._storeQueue())}seekBy(t){Number.isFinite(this.audio.duration)&&(this.audio.currentTime=Math.min(this.audio.duration,Math.max(0,this.audio.currentTime+t)),this._emit("time"))}setVolume(t){this.volume=Number(t),this.audio.volume=Math.min(1,Math.max(0,this.volume/100)),this.volume>0&&(this.audio.muted=!1),localStorage.setItem(Aa,String(this.volume))}toggleMute(){this.audio.muted=!this.audio.muted,this._emit("volume")}get currentTime(){return this.audio.currentTime||0}get duration(){return Number.isFinite(this.audio.duration)?this.audio.duration:0}get paused(){return this.audio.paused}get volumePercent(){return this.audio.muted?0:Math.round(this.audio.volume*100)}get buffered(){const t=this.duration;if(!t)return{end:0,percent:0,ahead:0};const a=this.audio.currentTime;let i=0;for(let n=0;n<this.audio.buffered.length;n+=1)this.audio.buffered.start(n)<=a+.5&&(i=Math.max(i,this.audio.buffered.end(n)));return{end:i,percent:Math.min(100,i/t*100),ahead:Math.max(0,i-a)}}estimatedBufferedBytes(){var a;const t=((a=this.track)==null?void 0:a.bitRate)||0;return t?t*1e3*this.buffered.ahead/8:0}_storeQueue(){try{const t={queue:this.queue,index:this.index,liveMode:!!this.liveMode,updatedAt:Date.now()};localStorage.setItem(Pa,JSON.stringify(t))}catch{}}setLiveMode(t){this.liveMode=!!t,this._storeQueue()}_storePosition(t=!1){if(!this.track)return;const a=Date.now();if(!(!t&&a-this._lastPositionWrite<2e3)){this._lastPositionWrite=a;try{localStorage.setItem(qa,JSON.stringify({trackId:this.track.id,position:this.currentTime||0,paused:this.audio.paused,updatedAt:a}))}catch{}}}restore(){var i;let t=null;try{t=JSON.parse(localStorage.getItem(Pa))}catch{t=null}if(!((i=t==null?void 0:t.queue)!=null&&i.length)||Date.now()-(t.updatedAt||0)>1e3*60*60*24*7)return null;let a=null;try{a=JSON.parse(localStorage.getItem(qa))}catch{a=null}if(this.queue=t.queue,this.index=Math.min(Math.max(0,Number(t.index)||0),this.queue.length-1),this.liveMode=!!t.liveMode,this.track=this.queue[this.index],!this.track)return null;if(this._restoredPause=!0,this.audio.src=ba(this.track.id),this._updateMediaSession(this.track),this.dispatchEvent(new CustomEvent("track",{detail:this.track})),(a==null?void 0:a.trackId)===this.track.id&&Number(a.position)>1){const n=()=>{const s=this.audio.duration;Number.isFinite(s)&&a.position<s-3&&(this.audio.currentTime=a.position,this._emit("time"))};this.audio.readyState>=1?n():this.audio.addEventListener("loadedmetadata",n,{once:!0})}return{track:this.track,liveMode:this.liveMode}}clearRestored(){this._restoredPause=!1}_updateMediaSession(t){"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:t.title||"",artist:t.artist||"",album:t.album||"",artwork:t.coverArt?[{src:Mt(t.coverArt,512),sizes:"512x512",type:"image/jpeg"}]:[]}),navigator.mediaSession.setActionHandler("play",()=>this.toggle()),navigator.mediaSession.setActionHandler("pause",()=>this.toggle()),navigator.mediaSession.setActionHandler("previoustrack",()=>this.previous()),navigator.mediaSession.setActionHandler("nexttrack",()=>this.next()))}}function gt(e){if(!Number.isFinite(e)||e<0)return"0:00";const t=Math.floor(e/60),a=Math.floor(e%60);return`${t}:${String(a).padStart(2,"0")}`}function hi(e){const t=Math.round(e/6e4),a=Math.floor(t/60);return a>0?`${a} ч ${t%60} мин`:`${t} мин`}function ge(e){if(!e)return"0 Б";const t=["Б","КБ","МБ","ГБ","ТБ"];let a=e,i=0;for(;a>=1024&&i<t.length-1;)a/=1024,i+=1;return`${a>=10||i===0?Math.round(a):a.toFixed(1)} ${t[i]}`}const h=new On,In=document.getElementById("app"),o={currentTracks:[],favorites:new Set,dislikes:new Set,favoriteAlbums:new Set,theme:"violet",lyrics:null,lyricsTrackId:null,lyricsRefresh:!1,lyricsActiveKey:null,npTab:"lyrics",npOpen:!1,allTracks:null,artists:null,albums:null,stats:null,playlists:null,me:null,meStats:null,authConfig:null,lastfmConfig:null,liveMode:!1,liveMixes:[],renderSeq:0},w={artists:null,albums:null,tracks:null,stats:null,playlists:null,favorites:null,ratings:null,recent:null,meStats:null,liveMixes:null};In.innerHTML=`
  <div class="ambient" aria-hidden="true">
    <span class="blob blob-a"></span>
    <span class="blob blob-b"></span>
    <span class="blob blob-c"></span>
    <span class="grain"></span>
  </div>

  <header class="topbar">
    <a class="brand" href="#/home" aria-label="Rustream — на главную">
      <span class="brand-mark">${c("wave")}</span>
      <span class="brand-name">Rustream</span>
    </a>

    <label class="searchbox">
      ${c("search")}
      <input id="search-input" type="search" placeholder="Артисты, альбомы, треки…" autocomplete="off" />
      <kbd>Ctrl K</kbd>
    </label>

    <div class="topbar-actions">
      <button class="icon-btn" id="rescan-btn" title="Пересканировать библиотеку">${c("refresh")}</button>
      <button class="now-playing-pill" id="np-pill" title="Открыть плеер">
        ${c("wave")}<span>Сейчас играет</span>
      </button>
      <a class="user-btn" id="user-btn" href="#/profile" title="Профиль" aria-label="Профиль">
        <span class="user-avatar" id="user-avatar">?</span>
        <span class="user-name" id="user-name">Профиль</span>
      </a>
    </div>
  </header>

  <div class="shell">
    <nav class="nav" aria-label="Разделы">
      <a href="#/home" data-nav="home" class="nav-item"><span class="nav-icon">${c("home")}</span><span class="nav-label">Главная</span></a>
      <a href="#/live" data-nav="live" class="nav-item"><span class="nav-icon">${c("radio")}</span><span class="nav-label">Live</span></a>
      <a href="#/ytm" data-nav="ytm" class="nav-item"><span class="nav-icon">${c("ytm")}</span><span class="nav-label">YouTube</span></a>
      <a href="#/artists" data-nav="artists" class="nav-item"><span class="nav-icon">${c("person")}</span><span class="nav-label">Артисты</span></a>
      <a href="#/albums" data-nav="albums" class="nav-item"><span class="nav-icon">${c("album")}</span><span class="nav-label">Альбомы</span></a>
      <a href="#/tracks" data-nav="tracks" class="nav-item"><span class="nav-icon">${c("music")}</span><span class="nav-label">Треки</span></a>
      <a href="#/stats" data-nav="stats" class="nav-item"><span class="nav-icon">${c("chart")}</span><span class="nav-label">Статистика</span></a>
      <a href="#/playlists" data-nav="playlists" class="nav-item"><span class="nav-icon">${c("playlist")}</span><span class="nav-label">Плейлисты</span></a>
      <a href="#/favorites" data-nav="favorites" class="nav-item"><span class="nav-icon">${c("heart")}</span><span class="nav-label">Избранное</span></a>
      <a href="#/profile" data-nav="profile" class="nav-item"><span class="nav-icon">${c("person")}</span><span class="nav-label">Профиль</span></a>
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
        <span class="cover-fallback">${c("music")}</span>
        <img id="pb-cover-img" alt="" />
        <span class="pb-cover-overlay">${c("play")}</span>
      </button>
      <div class="pb-meta" data-action="nowplaying" title="Открыть плеер">
        <div class="pb-title" id="pb-title">Ничего не играет</div>
        <div class="pb-artist" id="pb-artist">Выберите трек</div>
      </div>
      <button class="icon-btn like-btn" id="pb-like" data-action="like-current" title="В избранное">${c("heartOutline")}</button>
      <button class="icon-btn dislike-btn" id="pb-dislike" data-action="dislike-current" title="Не нравится">${c("thumbDown")}</button>
    </div>

    <div class="pb-center">
      <div class="pb-controls">
        <button class="icon-btn" id="shuffle-btn" data-action="shuffle" title="Перемешать">${c("shuffle")}</button>
        <button class="icon-btn" data-action="prev" title="Предыдущий">${c("prev")}</button>
        <button class="play-btn" id="play-btn" data-action="toggle" title="Играть">${c("play")}</button>
        <button class="icon-btn" data-action="next" title="Следующий">${c("next")}</button>
        <button class="icon-btn" id="repeat-btn" data-action="repeat" title="Повтор">${c("repeat")}</button>
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
      <button class="icon-btn" id="lyrics-btn" data-action="open-lyrics" title="Текст песни">${c("lyrics")}</button>
      <button class="icon-btn" id="eq-btn" data-action="open-eq" title="Эквалайзер">${c("equalizer")}</button>
      <button class="icon-btn" id="queue-btn" data-action="open-queue" title="Очередь">${c("queue")}</button>
      <div class="volume">
        <button class="icon-btn" id="volume-btn" data-action="mute" title="Звук">${c("volumeUp")}</button>
        <input type="range" id="volume" min="0" max="100" value="${h.volumePercent}" aria-label="Громкость" />
      </div>
    </div>
  </footer>

  <nav class="tabbar" aria-label="Основное меню">
    <a href="#/home" data-tab="home" class="tab-item"><span class="tab-icon">${c("home")}</span><span class="tab-label">Главная</span></a>
    <a href="#/live" data-tab="live" class="tab-item"><span class="tab-icon">${c("radio")}</span><span class="tab-label">Live</span></a>
    <a href="#/ytm" data-tab="ytm" class="tab-item"><span class="tab-icon">${c("ytm")}</span><span class="tab-label">YouTube</span></a>
    <a href="#/library" data-tab="library" class="tab-item"><span class="tab-icon">${c("album")}</span><span class="tab-label">Медиатека</span></a>
    <a href="#/profile" data-tab="profile" class="tab-item"><span class="tab-icon">${c("person")}</span><span class="tab-label">Профиль</span></a>
  </nav>

  <div class="np" id="np" hidden>
    <div class="np-backdrop" data-action="close-np"></div>
    <div class="np-sheet" role="dialog" aria-modal="true" aria-label="Плеер">
      <div class="np-grabber"></div>
      <div class="np-head">
        <button class="icon-btn" data-action="close-np" title="Свернуть">${c("close")}</button>
        <div class="np-tabs">
          <button class="np-tab" data-np-tab="lyrics">${c("lyrics")}<span>Текст</span></button>
          <button class="np-tab" data-np-tab="eq">${c("equalizer")}<span>Эквалайзер</span></button>
          <button class="np-tab" data-np-tab="queue">${c("queue")}<span>Очередь</span></button>
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
          <span class="icon" id="np-volume-icon">${c("volumeUp")}</span>
          <input id="np-volume" type="range" min="0" max="100" value="${h.volumePercent}" aria-label="Громкость" />
        </div>
      </div>
    </div>
  </div>

  <div id="auth-screen" class="auth-screen" hidden>
    <div class="auth-card">
      <div class="auth-brand">
        <span class="brand-mark">${c("wave")}</span>
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
          <button class="btn primary full" type="submit" id="login-submit">${c("wave")} Войти</button>
          <p class="auth-error" id="login-error" role="alert"></p>
        </form>
        <button class="text-link auth-switch" type="button" id="auth-toggle-register">${c("ticket")} У меня есть приглашение</button>
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
          <button class="btn primary full" type="submit" id="register-submit">${c("sparkle")} Зарегистрироваться</button>
          <p class="auth-error" id="register-error" role="alert"></p>
        </form>
        <button class="text-link auth-switch" type="button" id="auth-toggle-login">${c("back")} У меня уже есть аккаунт</button>
      </div>
    </div>
  </div>

  <div id="modal-root"></div>
  <div id="toast" class="toast" role="status" aria-live="polite"></div>
`;const l=(e,t=document)=>t.querySelector(e),Z=(e,t=document)=>[...t.querySelectorAll(e)];function b(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function oa(e){const t=String(e||"?").trim().split(/\s+/).filter(Boolean);return t.length?t.length===1?t[0].slice(0,2).toUpperCase():(t[0][0]+t[1][0]).toUpperCase():"?"}function be(){var e,t;return((e=o.me)==null?void 0:e.displayName)||((t=o.me)==null?void 0:t.username)||"Аккаунт"}function fi(e){return(e==null?void 0:e.status)===401}function qt(e){return fi(e)?(Pt(),!0):!1}function st(e,{size:t=400,alt:a="",className:i=""}={}){return`<span class="cover ${i}">
    <span class="cover-fallback">${c("music")}</span>
    ${e?`<img src="${Mt(e,t)}" alt="${b(a)}" loading="lazy" decoding="async" />`:""}
  </span>`}function y(e,t="info"){const a=l("#toast");a.textContent=e,a.className=`toast show ${t}`,clearTimeout(y._timer),y._timer=setTimeout(()=>{a.className="toast"},3200)}function V(){l("#view").innerHTML=`
    <div class="page">
      <div class="skeleton skeleton-title"></div>
      <div class="grid cards">
        ${Array.from({length:8}).map(()=>`<div class="card skeleton-card">
              <div class="skeleton skeleton-cover"></div>
              <div class="skeleton skeleton-line"></div>
              <div class="skeleton skeleton-line short"></div>
            </div>`).join("")}
      </div>
    </div>`}function Nn(e){l("#view").innerHTML=`
    <div class="page">
      <div class="empty-state">
        <span class="empty-icon">${c("wave")}</span>
        <h2>Что-то пошло не так</h2>
        <p>${b(e)}</p>
        <button class="btn tonal" data-action="reload">Попробовать снова</button>
      </div>
    </div>`}function bt(e,t,{actions:a="",eyebrow:i=""}={}){return`<header class="page-head">
    <div>
      ${i?`<div class="eyebrow">${b(i)}</div>`:""}
      <h1>${b(e)}</h1>
      ${t?`<p class="muted">${t}</p>`:""}
    </div>
    ${a?`<div class="page-actions">${a}</div>`:""}
  </header>`}function ae(e){return`<article class="card" data-action="open" data-href="#/album/${e.id}" tabindex="0">
    <div class="card-cover">${st(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${b(e.name)}</div>
      <div class="card-sub">${b(e.artist||"Неизвестный артист")}${e.year?` · ${e.year}`:""}</div>
    </div>
    <button class="card-play" data-action="play-album" data-id="${e.id}" title="Слушать альбом">${c("play")}</button>
  </article>`}function la(e){return`<article class="card artist-card" data-action="open" data-href="#/artist/${e.id}" tabindex="0">
    <div class="card-cover round">${st(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${b(e.name)}</div>
      <div class="card-sub">${e.albumCount??0} ${H(e.albumCount??0,"альбом","альбома","альбомов")}</div>
    </div>
  </article>`}function H(e,t,a,i){const n=e%10,s=e%100;return n===1&&s!==11?t:n>=2&&n<=4&&(s<12||s>14)?a:i}function Rn(e,t,{showAlbum:a=!0,showCover:i=!1,playlistId:n=null}={}){var d;const s=((d=h.track)==null?void 0:d.id)===e.id,r=o.favorites.has(e.id),u=e.track&&e.track>0?e.track:t+1;return`<div class="track-row ${s?"playing":""} ${i?"has-cover":""}" data-action="play-row" data-index="${t}" tabindex="0">
    <div class="track-index">
      <span class="track-num">${u}</span>
      <span class="track-eq"><i></i><i></i><i></i></span>
    </div>
    ${i?`<span class="track-cover">${st(e.coverArt||e.albumId,{size:80})}</span>`:""}
    <div class="track-main">
      <div class="track-title">${b(e.title)}</div>
      <div class="track-sub">${b(e.artist||"")}${a&&e.album?` · ${b(e.album)}`:""}</div>
    </div>
    <span class="track-badge">${b((e.suffix||"flac").toUpperCase())}</span>
    <span class="track-duration">${gt(e.duration)}</span>
    <button class="icon-btn row-btn like ${r?"active":""}" data-action="like" data-id="${e.id}" title="В избранное">${c(r?"heart":"heartOutline")}</button>
    <button class="icon-btn row-btn dislike ${o.dislikes.has(e.id)?"active":""}" data-action="dislike" data-id="${e.id}" title="Не нравится">${c("thumbDown")}</button>
    ${n?`<button class="icon-btn row-btn" data-action="remove-from-playlist" data-playlist="${n}" data-index="${t}" title="Убрать из плейлиста">${c("delete")}</button>`:`<button class="icon-btn row-btn" data-action="add-to-playlist" data-id="${e.id}" title="Добавить в плейлист">${c("add")}</button>`}
  </div>`}function yt(e,t={}){return e.length?`<div class="track-list">${e.map((a,i)=>Rn(a,i,t)).join("")}</div>`:'<div class="empty-inline">Треков пока нет</div>'}function Vn(){const e=location.hash.replace(/^#/,"")||"/home",[t,a=""]=e.split("?");return{parts:t.split("/").filter(Boolean),params:new URLSearchParams(a)}}const jn={artist:"artists",album:"albums",playlist:"playlists"},Fn=new Set(["artists","albums","tracks","playlists","favorites","stats"]);function Bn(e){const t=jn[e]||e;Z(".nav-item").forEach(a=>{a.classList.toggle("active",a.dataset.nav===t)}),Z(".tab-item").forEach(a=>{const i=a.dataset.tab,n=i===t||i==="library"&&(t==="library"||Fn.has(t))||i==="home"&&t==="search";a.classList.toggle("active",n)})}async function q(){const{parts:e,params:t}=Vn(),a=e[0]||"home";if(a==="register"){ha(t.get("invite")||"");return}if(!o.me){Pt();return}const i=++o.renderSeq;Bn(a),l("#view").scrollTop=0;try{a==="home"?await Oa(i):a==="live"?await Jn(i):a==="stats"?await Kn(i):a==="artists"?await Qn(i):a==="artist"?await Zn(i,e[1]):a==="albums"?await ts(i):a==="album"?await es(i,e[1]):a==="tracks"?await as(i):a==="playlists"?await is(i):a==="playlist"?await ss(i,e[1]):a==="favorites"?await rs(i):a==="search"?await os(i,t.get("q")||""):a==="library"?await ws(i):a==="profile"?await $s(i):a==="ytm"?await Ss(i):await Oa(i)}catch(n){if(console.error(n),qt(n))return;i===o.renderSeq&&Nn(n.message||"Ошибка загрузки")}}async function Yn(){return w.stats||(w.stats=await Ii()),w.stats}async function mi(){return w.artists||(w.artists=await Di()),w.artists}async function Un(){return w.albums||(w.albums=await Fa("alphabeticalByArtist",500)),w.albums}async function ca(){if(!w.tracks){const e=await Ai(500);e.sort((t,a)=>`${t.artist} ${t.album} ${String(t.track).padStart(3,"0")}`.localeCompare(`${a.artist} ${a.album} ${String(a.track).padStart(3,"0")}`,"ru")),w.tracks=e}return w.tracks}async function vi(){if(w.favorites||(w.favorites=await Oi()),o.favorites=new Set((w.favorites.song||[]).map(e=>e.id)),o.favoriteAlbums=new Set((w.favorites.album||[]).map(e=>e.id)),!w.ratings)try{w.ratings=await Vi()}catch{w.ratings={liked:[],disliked:[]}}return o.dislikes=new Set((w.ratings.disliked||[]).filter(e=>!o.favorites.has(e))),w.favorites}async function da(){return w.meStats||(w.meStats=await Xa()),o.meStats=w.meStats,w.meStats}async function Xn(){return w.liveMixes||(w.liveMixes=await Ui()),o.liveMixes=w.liveMixes,w.liveMixes}async function Gn(){w.artists=null,w.albums=null,w.tracks=null,w.stats=null,w.recent=null,w.meStats=null,w.liveMixes=null,y("Библиотека обновлена"),q()}async function Oa(e){var u;V();const[t,a,i,n]=await Promise.all([da(),w.recent?Promise.resolve(w.recent):Fa("newest",12),mi(),ca()]);if(e!==o.renderSeq)return;w.recent=a,o.currentTracks=n;const s=h.track,r=h.queue.length?h.queue:null;l("#view").innerHTML=`
    <div class="page home quick-home">
      <header class="page-head home-head">
        <div>
          <span class="eyebrow"><span class="live-dot"></span>${b(Wn())}, ${b(be())}</span>
          <h1>Что послушаем?</h1>
        </div>
        <div class="head-actions">
          <button class="btn primary" data-action="play-all">${c("play")} Слушать всё</button>
          <button class="btn glass" data-action="shuffle-all">${c("shuffle")} Перемешать</button>
          <button class="btn ghost" data-action="start-live">${c("radio")} Live</button>
        </div>
      </header>

      ${s&&r?`<section class="continue-card">
              <span class="continue-cover">${st(s.coverArt||s.albumId,{size:120,alt:s.title})}</span>
              <span class="continue-main">
                <span class="eyebrow">Продолжить слушать</span>
                <strong>${b(s.title)}</strong>
                <small>${b(s.artist||"")}${h.paused?" · на паузе":" · играет"}</small>
              </span>
              <button class="btn primary" data-action="resume">${c(h.paused?"play":"pause")} ${h.paused?"Продолжить":"Пауза"}</button>
              <a class="btn ghost" href="#/live">${c("queue")} Очередь</a>
            </section>`:""}

      <section class="section">
        <div class="section-head">
          <div>
            <h2>Недавно добавленные</h2>
            <p class="muted">Свежие поступления в библиотеке</p>
          </div>
          <a class="text-link" href="#/albums">Все альбомы ${c("next")}</a>
        </div>
        <div class="grid cards">${a.slice(0,8).map(ae).join("")}</div>
      </section>

      <section class="section">
        <div class="section-head">
          <div>
            <h2>Любимые артисты</h2>
            <p class="muted">${(u=t.topArtists)!=null&&u[0]?`Чаще всего вы слушаете ${b(t.topArtists[0].name)}`:"Начните слушать — и здесь появятся ваши артисты"}</p>
          </div>
          <a class="text-link" href="#/artists">Все артисты ${c("next")}</a>
        </div>
        <div class="grid cards artists-row">${i.slice(0,8).map(la).join("")}</div>
      </section>

      <section class="section home-cta">
        <div class="cta-panel">
          <div>
            <div class="eyebrow">${c("chart")} Ваша статистика</div>
            <h2>${t.plays||0} ${H(t.plays||0,"прослушивание","прослушивания","прослушиваний")}</h2>
            <p class="muted">Часы, любимые артисты, лайки и дизлайки — на отдельной странице.</p>
          </div>
          <a class="btn glass" href="#/stats">${c("chart")} Открыть статистику</a>
        </div>
      </section>
    </div>`}function Wn(){const e=new Date().getHours();return e<6?"Доброй ночи":e<12?"Доброе утро":e<18?"Добрый день":"Добрый вечер"}async function Jn(e){V();const[t,a]=await Promise.all([Xn(),da()]);e===o.renderSeq&&(l("#view").innerHTML=`
    <div class="page live-page">
      ${bt("Live","Персональный поток: избранное, любимые артисты и новые находки",{eyebrow:"Автоматический эфир",actions:`<button class="btn primary" data-action="start-live">${c("radio")} ${o.liveMode?"Перезапустить":"Включить Live"}</button>`})}

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
          ${Array.from({length:24}).map((i,n)=>`<i style="--i:${n}"></i>`).join("")}
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
          ${t.map((i,n)=>{var s,r,u;return`<article class="mix-card ${(s=i.tracks)!=null&&s.length?"":"empty"}" data-action="play-mix" data-index="${n}" tabindex="0">
                <div class="mix-icon">${c(n===0?"heart":n===1?"album":"radio")}</div>
                <div class="mix-body">
                  <h3>${b(i.title)}</h3>
                  <p>${b(i.subtitle)}</p>
                  <span class="muted">${((r=i.tracks)==null?void 0:r.length)||0} ${H(((u=i.tracks)==null?void 0:u.length)||0,"трек","трека","треков")}</span>
                </div>
                <span class="mix-play">${c("play")}</span>
              </article>`}).join("")}
        </div>
      </section>

    </div>`)}async function Kn(e){var p,m,g;V();const t=await Xa().catch(()=>o.meStats||{});if(e!==o.renderSeq)return;o.meStats=t,w.meStats=t;const a=((t.listenedMs||0)/36e5).toFixed(1),i=Math.round((t.listenedMs||0)/6e4),n=Math.max(1,...(t.byDay||[]).map(v=>v.ms)),s=t.recent||[];o.currentTracks=s;const r=[...t.byDay||[]].slice(-14),u=t.likes||0,d=t.dislikes||0;l("#view").innerHTML=`
    <div class="page stats-page">
      ${bt("Статистика","Только ваш аккаунт: время, артисты, жанры и оценки",{eyebrow:"Личные данные",actions:`<a class="btn glass" href="#/favorites">${c("heart")} Избранное</a>`})}

      <section class="stat-cards">
        <div class="stat-card"><span class="stat-icon">${c("clock")}</span><strong>${a} ч</strong><span>${i} минут музыки</span></div>
        <div class="stat-card"><span class="stat-icon">${c("play")}</span><strong>${t.plays||0}</strong><span>прослушиваний</span></div>
        <div class="stat-card"><span class="stat-icon like">${c("heart")}</span><strong>${u}</strong><span>лайков</span></div>
        <div class="stat-card"><span class="stat-icon dislike">${c("thumbDown")}</span><strong>${d}</strong><span>дизлайков</span></div>
      </section>

      <section class="section stats-grid">
        <div class="stats-panel">
          <div class="section-head"><h2>Последние 14 дней</h2><span class="muted">${a} ч всего</span></div>
          ${r.length?`<div class="day-chart">${r.map(v=>{const k=new Date(`${v.day}T00:00:00`).toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit"}),x=Math.max(4,Math.round(v.ms/n*100));return`<div class="day-col" title="${k}: ${Math.round(v.ms/6e4)} мин">
                      <span class="day-bar" style="height:${x}%"></span>
                      <span class="day-label">${k}</span>
                    </div>`}).join("")}</div>`:'<div class="empty-inline">Пока нет прослушиваний за две недели.</div>'}
        </div>
        <div class="stats-panel">
          <div class="section-head"><h2>Жанры</h2></div>
          ${(p=t.topGenres)!=null&&p.length?`<div class="genre-list">${t.topGenres.map(v=>{var T;return`<div class="genre-row">
                      <span class="genre-name">${b(v.name)}</span>
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
                      <span class="rank-main"><strong>${b(v.name)}</strong><small>${v.plays} ${H(v.plays,"прослушивание","прослушивания","прослушиваний")}</small></span>
                    </div>`).join("")}</div>`:'<div class="empty-inline">Пока нет данных.</div>'}
        </div>
        <div class="stats-panel">
          <div class="section-head"><h2>Топ треков</h2></div>
          ${(g=t.topTracks)!=null&&g.length?`<div class="rank-list">${t.topTracks.slice(0,10).map((v,T)=>`<div class="rank-row">
                      <span class="rank-num">${T+1}</span>
                      <span class="rank-main"><strong>${b(v.title)}</strong><small>${b(v.artist)}</small></span>
                      <span class="rank-plays">${v.plays} ×</span>
                    </div>`).join("")}</div>`:'<div class="empty-inline">Пока нет данных.</div>'}
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <div><h2>Недавние треки</h2><p class="muted">Можно продолжить с любого места</p></div>
        </div>
        ${s.length?yt(s,{showCover:!0}):'<div class="empty-inline">История пока пуста.</div>'}
      </section>
    </div>`}async function Qn(e){V();const t=await mi();e===o.renderSeq&&(o.currentTracks=[],l("#view").innerHTML=`
    <div class="page">
      ${bt("Артисты",`${t.length} ${H(t.length,"артист","артиста","артистов")} в библиотеке`,{actions:`<button class="btn glass" data-action="shuffle-library">${c("shuffle")} Перемешать всё</button>`,eyebrow:"Коллекция"})}
      <div class="grid cards">${t.map(la).join("")}</div>
    </div>`)}async function Zn(e,t){V();const a=await ja(t);if(e!==o.renderSeq)return;const i=a.artist,n=i.album||[];o.currentTracks=[],l("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/artists">${c("back")} Все артисты</a>
      <section class="collection-head">
        <div class="collection-art round">${st(i.coverArt||i.id,{size:600,alt:i.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">Артист</div>
          <h1>${b(i.name)}</h1>
          <p class="muted">${n.length} ${H(n.length,"альбом","альбома","альбомов")}</p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-artist" data-id="${i.id}">${c("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-artist" data-id="${i.id}">${c("shuffle")} Перемешать</button>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section-head"><h2>Альбомы</h2></div>
        <div class="grid cards">${n.map(ae).join("")}</div>
      </section>
    </div>`}async function ts(e){V();const t=await Un();e===o.renderSeq&&(o.currentTracks=[],l("#view").innerHTML=`
    <div class="page">
      ${bt("Альбомы",`${t.length} ${H(t.length,"альбом","альбома","альбомов")}`,{eyebrow:"Коллекция"})}
      <div class="grid cards">${t.map(ae).join("")}</div>
    </div>`)}async function es(e,t){V();const a=await ea(t);if(e!==o.renderSeq)return;const i=a.album,n=i.song||[];o.currentTracks=n,l("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/albums">${c("back")} Все альбомы</a>
      <section class="collection-head album-head">
        <div class="collection-art">${st(i.coverArt||i.id,{size:800,alt:i.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">${i.year?`Альбом · ${i.year}`:"Альбом"}</div>
          <h1>${b(i.name)}</h1>
          <p class="muted">
            <a class="inline-link" href="#/artist/${i.artistId}">${b(i.artist)}</a>
            · ${n.length} ${H(n.length,"трек","трека","треков")}
            · ${hi(i.duration*1e3||0)}
          </p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-all">${c("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-all">${c("shuffle")} Перемешать</button>
          </div>
        </div>
      </section>
      <section class="section">
        ${yt(n,{showAlbum:!1})}
      </section>
    </div>`}async function as(e){V();const t=await ca();e===o.renderSeq&&(o.currentTracks=t,l("#view").innerHTML=`
    <div class="page">
      ${bt("Все треки",`${t.length} ${H(t.length,"трек","трека","треков")}`,{eyebrow:"Библиотека",actions:`<button class="btn primary" data-action="play-all">${c("play")} Слушать</button>
                  <button class="btn glass" data-action="shuffle-all">${c("shuffle")} Перемешать</button>`})}
      ${yt(t,{showCover:!0})}
    </div>`)}async function is(e){V();const t=await aa();e===o.renderSeq&&(w.playlists=t,o.currentTracks=[],l("#view").innerHTML=`
    <div class="page">
      ${bt("Плейлисты",`${t.length} ${H(t.length,"плейлист","плейлиста","плейлистов")}`,{eyebrow:"Моя музыка",actions:`<button class="btn primary" data-action="new-playlist">${c("add")} Новый плейлист</button>`})}
      ${t.length?`<div class="grid cards">${t.map(ns).join("")}</div>`:`<div class="empty-state"><span class="empty-icon">${c("playlist")}</span><h2>Плейлистов пока нет</h2><p>Соберите подборку из любимых треков.</p><button class="btn primary" data-action="new-playlist">${c("add")} Создать</button></div>`}
    </div>`)}function ns(e){return`<article class="card" data-action="open" data-href="#/playlist/${e.id}" tabindex="0">
    <div class="card-cover">${st(e.coverArt||e.id,{alt:e.name})}</div>
    <div class="card-body">
      <div class="card-title">${b(e.name)}</div>
      <div class="card-sub">${e.songCount??0} ${H(e.songCount??0,"трек","трека","треков")}</div>
    </div>
    <button class="card-play" data-action="open" data-href="#/playlist/${e.id}">${c("play")}</button>
  </article>`}async function ss(e,t){V();const a=await zi(t);if(e!==o.renderSeq)return;const i=(a.entry||[]).map((n,s)=>({...n,track:s+1}));o.currentTracks=i,l("#view").innerHTML=`
    <div class="page">
      <a class="back-link" href="#/playlists">${c("back")} Все плейлисты</a>
      <section class="collection-head album-head">
        <div class="collection-art">${st(a.coverArt||a.id,{size:800,alt:a.name})}</div>
        <div class="collection-info">
          <div class="eyebrow">Плейлист</div>
          <h1>${b(a.name)}</h1>
          <p class="muted">${i.length} ${H(i.length,"трек","трека","треков")} · ${hi((a.duration||0)*1e3)}</p>
          <div class="hero-actions">
            <button class="btn primary" data-action="play-all">${c("play")} Слушать</button>
            <button class="btn glass" data-action="shuffle-all">${c("shuffle")} Перемешать</button>
            <button class="btn ghost danger" data-action="delete-playlist" data-id="${a.id}">${c("delete")} Удалить</button>
          </div>
        </div>
      </section>
      <section class="section">
        ${yt(i,{showCover:!0,playlistId:a.id})}
      </section>
    </div>`}async function rs(e){V();const t=await vi();if(e!==o.renderSeq)return;const a=t.song||[];o.currentTracks=a,l("#view").innerHTML=`
    <div class="page">
      ${bt("Избранное",`${a.length} ${H(a.length,"трек","трека","треков")}`,{eyebrow:"Моя музыка",actions:a.length?`<button class="btn primary" data-action="play-all">${c("play")} Слушать</button>`:""})}
      ${a.length?yt(a,{showCover:!0}):`<div class="empty-state"><span class="empty-icon">${c("heartOutline")}</span><h2>Здесь пока пусто</h2><p>Нажимайте на сердечко у трека, чтобы добавить его в избранное.</p></div>`}
      ${(t.album||[]).length?`<section class="section"><div class="section-head"><h2>Любимые альбомы</h2></div>
             <div class="grid cards">${t.album.map(ae).join("")}</div></section>`:""}
    </div>`}async function os(e,t){const a=l("#search-input");if(a.value!==t&&(a.value=t),!t.trim()){l("#view").innerHTML=`
      <div class="page">
        <div class="empty-state"><span class="empty-icon">${c("search")}</span>
        <h2>Найдите что послушать</h2><p>Введите название трека, альбома или артиста.</p></div>
      </div>`;return}V();const i=await Ci(t);if(e!==o.renderSeq)return;const n=i.song||[];o.currentTracks=n,l("#view").innerHTML=`
    <div class="page">
      ${bt(`Поиск: ${t}`,`Найдено ${n.length} ${H(n.length,"трек","трека","треков")}, ${(i.album||[]).length} ${H((i.album||[]).length,"альбом","альбома","альбомов")}`,{eyebrow:"Результаты"})}
      ${(i.artist||[]).length?`<section class="section"><div class="section-head"><h2>Артисты</h2></div><div class="grid cards">${i.artist.map(la).join("")}</div></section>`:""}
      ${(i.album||[]).length?`<section class="section"><div class="section-head"><h2>Альбомы</h2></div><div class="grid cards">${i.album.map(ae).join("")}</div></section>`:""}
      ${n.length?`<section class="section"><div class="section-head"><h2>Треки</h2></div>${yt(n,{showCover:!0})}</section>`:""}
      ${!n.length&&!(i.album||[]).length&&!(i.artist||[]).length?`<div class="empty-state"><span class="empty-icon">${c("search")}</span><h2>Ничего не найдено</h2><p>Попробуйте другой запрос.</p></div>`:""}
    </div>`}async function ls(e){const a=(await ea(e)).album.song||[];if(!a.length)return y("В альбоме нет треков","warn");o.currentTracks=a,await h.playTracks(a,0)}async function Ia(e,t=!1){y("Загружаю альбомы…");const i=(await ja(e)).artist.album||[],s=(await Promise.all(i.map(r=>ea(r.id)))).flatMap(r=>r.album.song||[]);if(!s.length)return y("У артиста нет треков","warn");o.currentTracks=s,await h.playTracks(s,0,{shuffle:t})}async function gi(e,t){try{await ji(e,t),t===1?(o.favorites.add(e),o.dislikes.delete(e)):t===-1?(o.favorites.delete(e),o.dislikes.add(e)):(o.favorites.delete(e),o.dislikes.delete(e)),w.favorites=null,w.ratings=null,Z(`[data-action="like"][data-id="${e}"]`).forEach(a=>{const i=o.favorites.has(e);a.classList.toggle("active",i),a.innerHTML=c(i?"heart":"heartOutline")}),Z(`[data-action="dislike"][data-id="${e}"]`).forEach(a=>{a.classList.toggle("active",o.dislikes.has(e))}),bi(),location.hash.startsWith("#/favorites")&&q(),location.hash.startsWith("#/stats")&&q()}catch(a){y(a.message,"error")}}async function ye(e){const t=o.favorites.has(e);await gi(e,t?0:1)}async function Na(e){const t=o.dislikes.has(e);await gi(e,t?0:-1)}function bi(){const e=h.track,t=l("#pb-like"),a=l("#pb-dislike");if(t){const i=e?o.favorites.has(e.id):!1;t.classList.toggle("active",i),t.innerHTML=c(i?"heart":"heartOutline")}a&&a.classList.toggle("active",e?o.dislikes.has(e.id):!1)}async function cs(e){let t=[];try{t=await aa()}catch(a){y(a.message,"error")}ua({title:"Добавить в плейлист",body:`
      ${t.length?`<div class="modal-list">${t.map(a=>`<button class="modal-row" data-modal-action="add" data-playlist="${a.id}">
                  <span class="modal-row-ico">${c("playlist")}</span>
                  <span><strong>${b(a.name)}</strong><small>${a.songCount??0} треков</small></span>
                  ${c("next")}
                </button>`).join("")}</div>`:'<p class="muted">Плейлистов пока нет — создайте первый.</p>'}
      <div class="modal-new">
        <input class="input" id="new-playlist-name" placeholder="Название нового плейлиста" />
        <button class="btn primary" data-modal-action="create" data-track="${e}">${c("add")} Создать</button>
      </div>`,onMount:a=>{a.addEventListener("click",async i=>{const n=i.target.closest("[data-modal-action]");if(n&&(n.dataset.modalAction==="add"&&(await Pi(n.dataset.playlist,e),et(),w.playlists=null,y("Трек добавлен в плейлист")),n.dataset.modalAction==="create")){const r=l("#new-playlist-name",a).value.trim()||"Мой плейлист";await Ba(r,[e]),et(),w.playlists=null,y("Плейлист создан"),location.hash.startsWith("#/playlists")&&q()}})}})}async function ds(){ua({title:"Новый плейлист",body:`<input class="input" id="new-playlist-name" placeholder="Например: Вечерний плейлист" autofocus />
           <div class="modal-actions">
             <button class="btn ghost" data-modal-action="cancel">Отмена</button>
             <button class="btn primary" data-modal-action="create">Создать</button>
           </div>`,onMount:e=>{const t=l("#new-playlist-name",e);t.focus(),e.addEventListener("click",async a=>{var n;const i=(n=a.target.closest("[data-modal-action]"))==null?void 0:n.dataset.modalAction;if(i==="cancel"&&et(),i==="create"){const s=t.value.trim();if(!s)return t.focus();await Ba(s,[]),et(),w.playlists=null,y("Плейлист создан"),q()}}),t.addEventListener("keydown",a=>{var i;a.key==="Enter"&&((i=l('[data-modal-action="create"]',e))==null||i.click())})}})}function ua({title:e,body:t,onMount:a}){const i=l("#modal-root");i.innerHTML=`
    <div class="modal-backdrop" data-modal-action="close">
      <div class="modal" role="dialog" aria-modal="true">
        <div class="modal-head"><h3>${b(e)}</h3><button class="icon-btn" data-modal-action="close">${c("close")}</button></div>
        <div class="modal-body">${t}</div>
      </div>
    </div>`,document.body.classList.add("modal-open");const n=l(".modal",i);i.querySelector(".modal-backdrop").addEventListener("click",s=>{s.target.dataset.modalAction==="close"&&et()}),a==null||a(n)}function et(){l("#modal-root").innerHTML="",document.body.classList.remove("modal-open")}function At(e="lyrics"){o.npOpen=!0,o.npTab=e;const t=l("#np");t.hidden=!1,requestAnimationFrame(()=>t.classList.add("open")),setTimeout(()=>t.classList.add("open"),80),Zt()}function we(){o.npOpen=!1;const e=l("#np");e.classList.remove("open"),setTimeout(()=>{o.npOpen||(e.hidden=!0)},260)}function us(e){o.npTab=e,Zt()}function Zt(){if(!o.npOpen)return;const e=h.track;Z(".np-tab").forEach(i=>i.classList.toggle("active",i.dataset.npTab===o.npTab));const t=l("#np-side");t.innerHTML=`
    <div class="np-cover">${st((e==null?void 0:e.coverArt)||(e==null?void 0:e.albumId),{size:900,alt:(e==null?void 0:e.title)||""})}</div>
    <div class="np-meta">
      <div class="eyebrow">${c("wave")} Сейчас играет</div>
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
      <div class="np-actions">
        <button class="icon-btn like ${e&&o.favorites.has(e.id)?"active":""}" data-action="like-current">${c(e&&o.favorites.has(e.id)?"heart":"heartOutline")}</button>
        <button class="icon-btn dislike ${e&&o.dislikes.has(e.id)?"active":""}" data-action="dislike-current" title="Не нравится">${c("thumbDown")}</button>
        <button class="btn glass" data-action="toggle">${c(h.paused?"play":"pause")} ${h.paused?"Играть":"Пауза"}</button>
        <button class="icon-btn" data-action="add-to-playlist" data-id="${(e==null?void 0:e.id)||""}" ${e?"":"disabled"} title="В плейлист">${c("add")}</button>
        <button class="icon-btn" data-action="jump-album" ${e!=null&&e.albumId?"":"disabled"}>${c("album")}</button>
      </div>
    </div>`;const a=l("#np-panel");o.npTab==="lyrics"?yi(a,e):o.npTab==="eq"?_e(a):Si(a)}async function yi(e,t){var n,s;if(!t){e.innerHTML=$i("lyrics","Текст появится здесь","Включите трек — и мы поищем файл .lrc рядом с аудио.");return}if(e.innerHTML='<div class="panel-loading"><span class="spinner"></span>Ищу текст…</div>',o.lyricsTrackId!==t.id||o.lyricsRefresh)try{o.lyrics=await Xi(t.id,o.lyricsRefresh),o.lyricsTrackId=t.id,o.lyricsRefresh=!1,o.lyricsActiveKey=null}catch{o.lyrics=null}if(o.npTab!=="lyrics")return;const a=o.lyrics;if(!a||!a.plain&&!((n=a.synced)!=null&&n.length)){e.innerHTML=`<div class="panel-empty">
      <span class="empty-icon">${c("lyrics")}</span>
      <h3>Текст не найден</h3>
      <p>Локального .lrc/.txt нет, интернет-поиск ничего не вернул. Можно попробовать ещё раз.</p>
      <button class="btn glass" data-action="refresh-lyrics">${c("refresh")} Искать в интернете</button>
    </div>`;return}const i=a.source==="lrclib"?"LRCLIB":a.source==="local"?"локальный файл":a.source==="lyrics.ovh"?"lyrics.ovh":"кэш";e.innerHTML=`
    <div class="panel-title">
      <h3>Текст песни</h3>
      <span class="lyrics-source">${c("wave")} ${b(i)}</span>
      <button class="icon-btn" data-action="refresh-lyrics" title="Найти заново">${c("refresh")}</button>
    </div>
    <div class="lyrics" id="lyrics-body">
      ${(s=a.synced)!=null&&s.length?a.synced.map((r,u)=>`<div class="lyric-line" data-index="${u}" data-time="${r.time_ms}">${b(r.text)}</div>`).join(""):`<div class="lyrics-plain">${b(a.plain).replace(/\n/g,"<br />")}</div>`}
    </div>`,wi()}function wi(){if(o.npTab!=="lyrics")return;const e=Z(".lyric-line");if(!e.length)return;const t=h.currentTime*1e3;let a=-1;e.forEach((n,s)=>{Number(n.dataset.time)<=t&&(a=s)}),a<0&&(a=0),e.forEach((n,s)=>n.classList.toggle("active",s===a));const i=`${o.lyricsTrackId||""}:${a}`;a>=0&&o.lyricsActiveKey!==i&&(o.lyricsActiveKey=i,e[a].scrollIntoView({block:"center",behavior:"smooth"}))}function $i(e,t,a){return`<div class="panel-empty"><span class="empty-icon">${c(e)}</span><h3>${b(t)}</h3><p>${b(a)}</p></div>`}function _e(e){const t=h.eqState;e.innerHTML=`
    <div class="panel-title">
      <h3>Эквалайзер</h3>
      <label class="switch">
        <input type="checkbox" id="eq-enabled" ${t.enabled?"checked":""} />
        <span></span>
      </label>
    </div>
    <div class="eq-presets">
      ${Object.entries(Ke).map(([a,i])=>`<button class="chip-btn ${t.preset===a?"active":""}" data-eq-preset="${a}">${b(i.name)}</button>`).join("")}
      <button class="chip-btn ${t.preset==="custom"?"active":""}" disabled>Своя</button>
    </div>
    <div class="eq ${t.enabled?"":"disabled"}">
      ${pi.map((a,i)=>`
        <div class="eq-band">
          <span class="eq-value" id="eq-val-${i}">${t.gains[i]>0?"+":""}${t.gains[i]}</span>
          <input type="range" orient="vertical" class="eq-slider" data-eq-band="${i}" min="-12" max="12" step="1" value="${t.gains[i]}" />
          <span class="eq-freq">${a>=1e3?`${a/1e3}k`:a}</span>
        </div>`).join("")}
    </div>
    <div class="eq-foot">
      <span class="muted">10 полос · ±12 дБ</span>
      <button class="btn ghost" data-action="reset-eq">${c("refresh")} Сбросить</button>
    </div>`}function Si(e){const t=h.queue;e.innerHTML=`
    <div class="panel-title"><h3>Очередь</h3><span class="muted">${t.length} ${H(t.length,"трек","трека","треков")}</span></div>
    ${t.length?`<div class="queue-list" id="queue-list">${t.map((i,n)=>`
              <button class="queue-row ${n===h.index?"active":""}" data-action="play-queue" data-index="${n}" data-track-id="${i.id}">
                <span class="queue-drag-handle">${c("menu")}</span>
                <span class="queue-cover">${st(i.coverArt||i.albumId,{size:80})}</span>
                <span class="queue-main"><strong>${b(i.title)}</strong><small>${b(i.artist||"")}</small></span>
                <span class="queue-time">${gt(i.duration)}</span>
              </button>`).join("")}</div>`:$i("queue","Очередь пуста","Нажмите на трек или альбом, чтобы начать воспроизведение.")}`;const a=l("#queue-list");a&&t.length>0&&new S(a,{animation:150,handle:".queue-drag-handle",ghostClass:"queue-row-ghost",dragClass:"queue-row-drag",onEnd:i=>{i.oldIndex!==i.newIndex&&(h.moveInQueue(i.oldIndex,i.newIndex),setTimeout(()=>Si(e),50))}})}function Ei(){const e=h.track,t=l("#pb-title"),a=l("#pb-artist"),i=l("#pb-cover-img"),n=l("#quality-format"),s=l("#quality-detail");if(!e){t.textContent="Ничего не играет",a.textContent="Выберите трек",l(".pb-cover").classList.remove("loaded"),n.textContent="—",s.textContent="",Ra(null);return}t.textContent=e.title||"",a.textContent=[e.artist,e.album].filter(Boolean).join(" · "),e.coverArt||e.albumId?(i.src=Mt(e.coverArt||e.albumId,160),i.onload=()=>l(".pb-cover").classList.add("loaded")):(i.removeAttribute("src"),l(".pb-cover").classList.remove("loaded")),n.textContent=(e.suffix||"flac").toUpperCase(),s.textContent=[e.bitRate?`${e.bitRate} kbps`:null,e.size?ge(e.size):null].filter(Boolean).join(" · "),bi(),Ra(e)}function Ra(e){if("mediaSession"in navigator){if(!e){navigator.mediaSession.metadata=null;return}navigator.mediaSession.metadata=new MediaMetadata({title:e.title||"Без названия",artist:e.artist||"Неизвестный артист",album:e.album||"",artwork:[{src:Mt(e.coverArt||e.albumId,96),sizes:"96x96",type:"image/jpeg"},{src:Mt(e.coverArt||e.albumId,128),sizes:"128x128",type:"image/jpeg"},{src:Mt(e.coverArt||e.albumId,256),sizes:"256x256",type:"image/jpeg"},{src:Mt(e.coverArt||e.albumId,512),sizes:"512x512",type:"image/jpeg"}]})}}"mediaSession"in navigator&&(navigator.mediaSession.setActionHandler("play",()=>h.play()),navigator.mediaSession.setActionHandler("pause",()=>h.pause()),navigator.mediaSession.setActionHandler("previoustrack",()=>h.prev()),navigator.mediaSession.setActionHandler("nexttrack",()=>h.next()),navigator.mediaSession.setActionHandler("seekto",e=>{e.seekTime!==void 0&&h.seekTo(e.seekTime)}),navigator.mediaSession.setActionHandler("seekbackward",e=>{h.seekBy(-(e.seekOffset||10))}),navigator.mediaSession.setActionHandler("seekforward",e=>{h.seekBy(e.seekOffset||10)}));function Ht(){const e=h.duration,t=h.currentTime,a=e?t/e*100:0;l("#cur-time").textContent=gt(t),l("#total-time").textContent=gt(e),l("#seek").value=String(a),l("#seek-fill").style.width=`${a}%`;const i=l("#np-seek");i&&(i.value=String(a),l("#np-seek-fill").style.width=`${a}%`,l("#np-cur-time").textContent=gt(t),l("#np-total-time").textContent=gt(e)),Ti(),wi()}function Ti(){const e=h.buffered;l("#seek-buffer").style.width=`${e.percent}%`;const t=l("#np-seek-buffer");t&&(t.style.width=`${e.percent}%`);const a=l("#np-buffer");a&&(a.textContent=`буфер ${gt(e.ahead)}`,a.title=`Загружено ${ge(h.estimatedBufferedBytes())}`);const i=l("#quality-detail");i&&h.track&&(i.textContent=[h.track.bitRate?`${h.track.bitRate} kbps`:null,h.track.size?ge(h.track.size):null,`буфер ${gt(e.ahead)}`].filter(Boolean).join(" · "))}function Le(){const e=!h.paused&&!!h.track;l("#play-btn").innerHTML=c(e?"pause":"play"),l("#pb-cover").classList.toggle("playing",e);const t=l('.np-actions [data-action="toggle"]');t&&(t.innerHTML=`${c(e?"pause":"play")} ${e?"Пауза":"Играть"}`),Z(".track-row").forEach(a=>{var n;const i=o.currentTracks[Number(a.dataset.index)];a.classList.toggle("playing",(i==null?void 0:i.id)===((n=h.track)==null?void 0:n.id))})}function pa(){l("#shuffle-btn").classList.toggle("active",h.shuffle),l("#repeat-btn").classList.toggle("active",h.repeat!=="off"),l("#repeat-btn").innerHTML=c(h.repeat==="one"?"repeatOne":"repeat")}function xe(){l("#volume").value=String(h.volumePercent);const e=h.volumePercent===0?"volumeOff":h.volumePercent<50?"volumeDown":"volumeUp";l("#volume-btn").innerHTML=c(e);const t=l("#np-volume");if(t){t.value=String(h.volumePercent);const a=l("#np-volume-icon");a&&(a.innerHTML=c(e))}}function ki(){const e=be(),t=l("#user-avatar"),a=l("#user-name");t&&(t.textContent=oa(e)),a&&(a.textContent=e)}function Mi(e){const t=l("#auth-screen");t&&(t.hidden=!1,document.body.classList.add("auth-locked"),l("#auth-login-view").hidden=e!=="login",l("#auth-register-view").hidden=e!=="register",setTimeout(()=>{var a;return(a=l(e==="login"?"#login-username":"#register-invite"))==null?void 0:a.focus()},60))}function Pt(){Mi("login")}async function ha(e=""){Mi("register");const t=l("#register-invite"),a=l("#register-invite-hint");if(t.value=e.trim(),!e.trim()){a.textContent="Вставьте код приглашения от администратора.";return}a.textContent="Проверяю приглашение…";try{const i=await nn(e.trim());a.innerHTML=`Приглашение от <strong>${b(i.invitedBy)}</strong>${i.isAdmin?" · администратор":""}`}catch(i){a.textContent=i.message||"Приглашение недействительно"}}function ps(){const e=l("#auth-screen");e&&(e.hidden=!0,document.body.classList.remove("auth-locked"))}async function fa(){var e;try{o.authConfig=await Ye();const t=await Ni();if(!t.user){Pt(),location.hash.startsWith("#/register")&&q();return}o.me=t.user,o.meSettings=t.settings,De(((e=t.settings)==null?void 0:e.theme)||localStorage.getItem("rustream.theme")||"violet"),ki(),ps(),await Promise.all([vi(),da()]),hs(),q()}catch(t){fi(t)||console.error(t),Pt()}}function lt(e){o.liveMode=!!e,h.setLiveMode(!!e)}function hs(){const e=h.restore();e&&(o.liveMode=!!e.liveMode,Ei(),Le(),pa(),Ht())}async function fs(){try{y("Собираю персональный поток…");const e=await Ga(40);if(!e.length)return y("В библиотеке пока нет треков","warn");lt(!0),o.currentTracks=e,await h.playTracks(e,0),y("Live включён"),location.hash.startsWith("#/live")&&q()}catch(e){if(qt(e))return;y(e.message,"error")}}async function ms(e){var a;const t=o.liveMixes[e];if(!((a=t==null?void 0:t.tracks)!=null&&a.length))return y("В этом миксе пока нет треков","warn");lt(!1),o.currentTracks=t.tracks,await h.playTracks(t.tracks,0),y(`Играет: ${t.title}`)}const ma=[{id:"violet",name:"Фиолетовая"},{id:"ocean",name:"Океан"},{id:"sunset",name:"Закат"},{id:"forest",name:"Лес"},{id:"mono",name:"Моно"}],Qe=/^#[0-9a-f]{6}$/i;function De(e){const t=ma.some(i=>i.id===e),a=t?e:Qe.test(e||"")?e.toLowerCase():"violet";o.theme=a,document.body.dataset.theme=t?a:"custom",document.body.style.setProperty("--primary",t?"":a),localStorage.setItem("rustream.theme",a)}function Ze(e){const t=e==="auto"?window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark":e;document.documentElement.classList.toggle("light-mode",t==="light")}(function(){const t=localStorage.getItem("colorMode")||"dark";Ze(t),window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{localStorage.getItem("colorMode")==="auto"&&Ze("auto")})})();async function _i(e){De(e);try{await Ua({theme:o.theme}),o.meSettings={...o.meSettings||{},theme:o.theme}}catch(t){y(t.message,"error")}}function vs(e){var n,s,r,u,d,p,m,g;const t=o.meSettings||{},a=(n=o.authConfig)==null?void 0:n.lastfm,i=o.lastfmConfig||{};return`
    <div class="settings-sections">
      <section class="settings-section">
        <h4>${c("person")} Профиль</h4>
        <form id="settings-profile-form" class="settings-form">
          <label class="field"><span>Отображаемое имя</span>
            <input class="input" id="settings-display-name" value="${b(((s=o.me)==null?void 0:s.displayName)||"")}" />
          </label>
          <button class="btn tonal" type="submit">Сохранить имя</button>
        </form>
        <div class="settings-meta">
          <span>Логин: <strong>${b(((r=o.me)==null?void 0:r.username)||"")}</strong></span>
          ${(u=o.me)!=null&&u.isAdmin?'<span class="chip">администратор</span>':""}
        </div>
      </section>

      <section class="settings-section">
        <h4>${c("palette")} Оформление</h4>
        <p class="muted small">Цветовая тема сохраняется в аккаунте и применяется на всех устройствах.</p>
        <div class="theme-picker">
          ${ma.map(v=>`<button class="theme-swatch ${o.theme===v.id?"active":""}" data-theme-choice="${v.id}" title="${v.name}">
              <span class="swatch-dot theme-${v.id}"></span><span>${v.name}</span>
            </button>`).join("")}
        </div>
      </section>

      <section class="settings-section">
        <h4>${c("radio")} Скробблинг</h4>
        <p class="muted small">Статистика хранится локально. Last.fm и ListenBrainz получают данные, если подключены.</p>
        <div class="settings-status">
          <span class="status-dot ${t.lastfmConnected?"on":""}"></span>
          Last.fm: ${t.lastfmConnected?`подключён${t.lastfmUsername?` как ${b(t.lastfmUsername)}`:""}`:"не подключён"}
        </div>
        <div class="settings-inline">
          <button class="btn glass" data-settings-action="lastfm-connect" ${a?"":"disabled"}>${c("wave")} Подключить Last.fm</button>
          <button class="btn ghost" data-settings-action="lastfm-complete" ${t.lastfmConnected?"disabled":""}>Завершить</button>
        </div>
        ${a?"":'<p class="muted small">Для авторизации Last.fm нужны ключи приложения ниже (или в config.toml).</p>'}
        ${(d=o.me)!=null&&d.isAdmin?`
          <div class="settings-sub">
            <h5>Ключи приложения Last.fm</h5>
            <p class="muted small">Создайте приложение на last.fm/api/account/create. Ключи пишутся в config.toml и применяются сразу.</p>
            <label class="field"><span>API key</span>
              <input class="input" id="settings-lastfm-api-key" value="${b(i.apiKey||"")}" placeholder="32 символа" />
            </label>
            <label class="field"><span>API secret</span>
              <input class="input" id="settings-lastfm-api-secret" type="password" placeholder="${i.apiSecretSet?"секрет уже сохранён — оставьте пустым":"секрет приложения"}" />
            </label>
            <div class="settings-inline">
              <button class="btn tonal" data-settings-action="save-lastfm-app">Сохранить ключи приложения</button>
              <button class="btn ghost danger" data-settings-action="clear-lastfm-app">Удалить ключи</button>
            </div>
          </div>`:""}
        <label class="field"><span>Last.fm session key (вручную)</span>
          <input class="input" id="settings-lastfm-key" placeholder="оставьте пустым, чтобы не менять" />
        </label>
        <label class="field"><span>ListenBrainz token</span>
          <input class="input" id="settings-listenbrainz" placeholder="токен из listenbrainz.org/settings" />
        </label>
        <button class="btn tonal" data-settings-action="save-scrobbling">Сохранить скробблинг</button>
      </section>

      <section class="settings-section">
        <h4>${c("settings")} Безопасность</h4>
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
        <h4>${c("library")} Библиотека</h4>
        <p class="muted small">Сканер перечитывает папки каждые ${((p=o.authConfig)==null?void 0:p.scanInterval)||300} секунд. Новые файлы появятся автоматически.</p>
        <div class="settings-inline">
          <button class="btn glass" data-settings-action="rescan">${c("refresh")} Пересканировать сейчас</button>
          <button class="btn ghost danger" data-settings-action="clear-history">${c("delete")} Очистить историю</button>
        </div>
      </section>

      ${(m=o.me)!=null&&m.isAdmin?`
      <section class="settings-section">
        <h4>${c("person")} Пользователи</h4>
        <div class="user-list" id="settings-user-list">
          ${(e||[]).map(v=>{var T;return`
            <div class="user-row">
              <span class="user-avatar small">${b(oa(v.displayName||v.username))}</span>
              <span class="user-row-main"><strong>${b(v.displayName||v.username)}</strong><small>@${b(v.username)}${v.isAdmin?" · админ":""}</small></span>
              ${v.id===((T=o.me)==null?void 0:T.id)?'<span class="chip">вы</span>':`<button class="icon-btn" data-settings-action="delete-user" data-id="${v.id}" title="Удалить">${c("delete")}</button>`}
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
        <h4>${c("logout")} Сеанс</h4>
        <p class="muted small">Вход действует 90 дней и продлевается автоматически, пока вы пользуетесь сайтом. Subsonic API: логин <code>${b(((g=o.me)==null?void 0:g.username)||"")}</code>, пароль — ваш пароль. Ключ API: <code>${b(t.subsonicApiKey||"—")}</code></p>
        <button class="btn ghost danger" data-settings-action="logout">${c("logout")} Выйти из аккаунта</button>
      </section>
    </div>`}async function Ut(){if(!o.me)return Pt();let e=[];if(o.me.isAdmin)try{[e,o.lastfmConfig]=await Promise.all([Gi(),Ce().catch(()=>({}))])}catch(t){qt(t)}ua({title:"Аккаунт и настройки",body:vs(e),onMount:t=>{var a,i;(a=l("#settings-profile-form",t))==null||a.addEventListener("submit",async n=>{n.preventDefault();try{await ya(l("#settings-display-name",t).value.trim()),o.me.displayName=l("#settings-display-name",t).value.trim(),ki(),y("Имя обновлено")}catch(s){y(s.message,"error")}}),(i=l("#settings-password-form",t))==null||i.addEventListener("submit",async n=>{n.preventDefault();try{await Fi(l("#settings-current-password",t).value,l("#settings-new-password",t).value),l("#settings-current-password",t).value="",l("#settings-new-password",t).value="",y("Пароль изменён")}catch(s){y(s.message,"error")}}),t.addEventListener("click",async n=>{const s=n.target.closest("[data-theme-choice]");if(s){const d=s.dataset.themeChoice;De(d),Z(".theme-swatch",t).forEach(p=>p.classList.toggle("active",p.dataset.themeChoice===d));try{await ya(o.me.displayName||o.me.username,d),o.meSettings={...o.meSettings||{},theme:d},y("Тема сохранена")}catch(p){y(p.message,"error")}return}const r=n.target.closest("[data-settings-action]");if(!r)return;const u=r.dataset.settingsAction;if(u==="logout"){await Ya().catch(()=>{}),location.reload();return}if(u==="rescan"){r.classList.add("spin"),await Wa().catch(d=>y(d.message,"error")),setTimeout(()=>{r.classList.remove("spin"),y("Сканирование запущено")},1200);return}if(u==="clear-history"){if(!confirm("Удалить всю историю прослушиваний этого аккаунта?"))return;try{await Ji(),w.meStats=null,o.meStats=null,y("История очищена");const d=await Ae();o.meSettings=d.settings}catch(d){y(d.message,"error")}return}if(u==="lastfm-connect"){try{const d=await Qi();window.open(d.url,"_blank","noopener"),y("Подтвердите доступ на Last.fm, затем нажмите «Завершить»")}catch(d){y(d.message,"error")}return}if(u==="lastfm-complete"){try{const d=await Zi();y(`Last.fm подключён${d.username?`: ${d.username}`:""}`);const p=await Ae();o.meSettings=p.settings,et(),Ut()}catch(d){y(d.message,"error")}return}if(u==="save-lastfm-app"){try{await wa(l("#settings-lastfm-api-key",t).value.trim(),l("#settings-lastfm-api-secret",t).value.trim());const d=await Ce();o.lastfmConfig=d,o.authConfig=await Ye(),y("Ключи Last.fm сохранены в config.toml"),l("#settings-lastfm-api-secret",t).value=""}catch(d){y(d.message,"error")}return}if(u==="clear-lastfm-app"){if(!confirm("Удалить ключи приложения Last.fm из config.toml?"))return;try{await wa("","",!0),o.lastfmConfig=await Ce(),o.authConfig=await Ye(),y("Ключи Last.fm удалены"),et(),Ut()}catch(d){y(d.message,"error")}return}if(u==="save-scrobbling"){try{await Bi({lastfmSessionKey:l("#settings-lastfm-key",t).value.trim(),listenbrainzToken:l("#settings-listenbrainz",t).value.trim()}),y("Настройки скробблинга сохранены");const d=await Ae();o.meSettings=d.settings}catch(d){y(d.message,"error")}return}if(u==="create-user"){try{await Wi({username:l("#new-user-name",t).value.trim(),password:l("#new-user-password",t).value,displayName:l("#new-user-display",t).value.trim(),isAdmin:l("#new-user-admin",t).checked}),y("Пользователь создан"),et(),Ut()}catch(d){y(d.message,"error")}return}if(u==="delete-user"){if(!confirm("Удалить пользователя и все его данные?"))return;try{await Ki(r.dataset.id),y("Пользователь удалён"),et(),Ut()}catch(d){y(d.message,"error")}}})}})}function gs(){const e=localStorage.getItem("colorMode")||"dark";return`
    <div class="theme-mode-picker">
      <button class="mode-btn ${e==="dark"?"active":""}" data-action="color-mode" data-mode="dark">
        ${c("moon")} Тёмная
      </button>
      <button class="mode-btn ${e==="light"?"active":""}" data-action="color-mode" data-mode="light">
        ${c("sun")} Светлая
      </button>
      <button class="mode-btn ${e==="auto"?"active":""}" data-action="color-mode" data-mode="auto">
        ${c("settings")} Системная
      </button>
    </div>
    <div class="theme-picker">
      ${ma.map(t=>`<button class="theme-swatch ${o.theme===t.id?"active":""}" data-action="theme" data-theme="${t.id}">
          <span class="swatch-dot theme-${t.id}"></span><span>${t.name}</span>
        </button>`).join("")}
      <label class="theme-swatch custom ${Qe.test(o.theme)?"active":""}" title="Свой цвет">
        <input type="color" id="theme-custom" value="${Qe.test(o.theme)?o.theme:"#c7a6ff"}" aria-label="Свой цвет" />
        <span>Свой цвет</span>
      </label>
    </div>`}function bs(e){const t=e==null?void 0:e.account;return e!=null&&e.connected?`
      <div class="ytm-account">
        ${t!=null&&t.photo?`<img class="ytm-avatar" src="${b(t.photo)}" alt="" referrerpolicy="no-referrer" />`:`<span class="ytm-avatar fallback">${c("person")}</span>`}
        <div class="ytm-account-main">
          <strong>${b((t==null?void 0:t.name)||"Аккаунт YouTube")}</strong>
          <small>${b((t==null?void 0:t.handle)||"")}${e.updatedAt?` · обновлено ${new Date(e.updatedAt*1e3).toLocaleDateString("ru-RU")}`:""}</small>
        </div>
        <div class="head-actions">
          <button class="btn glass" data-action="ytm-reconnect">${c("refresh")} Обновить cookies</button>
          <button class="btn ghost danger" data-action="ytm-disconnect">${c("logout")} Отключить</button>
        </div>
      </div>`:`
    <form id="ytm-connect-form" class="ytm-connect">
      <label class="field"><span>Cookies music.youtube.com</span>
        <textarea class="input" id="ytm-cookies" rows="5" spellcheck="false"
          placeholder="Вставьте JSON из Cookie-Editor или строку вида SAPISID=…; __Secure-3PAPISID=…"></textarea>
      </label>
      <p class="muted small">Откройте music.youtube.com под своим аккаунтом, экспортируйте cookies (Cookie-Editor → Export → JSON) и вставьте сюда. Сервер проверит их, зашифрует и будет использовать только для вашего профиля.</p>
      <button class="btn primary" type="submit" id="ytm-connect-submit">${c("check")} Подключить</button>
      <p class="form-error" id="ytm-connect-error" role="alert"></p>
    </form>`}function ys(e){return`
    <section class="section glass-card">
      <div class="section-head">
        <div>
          <h2>${c("ticket")} Приглашения</h2>
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
        <button class="btn primary" type="submit">${c("add")} Создать код</button>
      </form>
      <div class="invite-list">
        ${e.length?e.map(t=>`<div class="invite-row ${t.valid?"":"expired"}">
                  <span class="invite-code">${b(t.code)}</span>
                  <span class="invite-meta">
                    <small>${b(t.note||"без заметки")} · ${t.uses}/${t.maxUses||"∞"} · ${t.isAdmin?"админ":"слушатель"}</small>
                    <small>${t.expiresAt?`до ${new Date(t.expiresAt*1e3).toLocaleDateString("ru-RU")}`:"без срока"}${t.valid?"":" · недействительно"}</small>
                  </span>
                  <button class="icon-btn" data-action="invite-copy" data-code="${b(t.code)}" title="Скопировать ссылку">${c("link")}</button>
                  <button class="icon-btn" data-action="invite-revoke" data-code="${b(t.code)}" title="Отозвать">${c("delete")}</button>
                </div>`).join(""):'<div class="empty-inline">Пока ни одного приглашения</div>'}
      </div>
    </section>`}async function ws(e){V();const[t,a]=await Promise.all([Yn().catch(()=>({})),aa().catch(()=>[])]);if(e!==o.renderSeq)return;w.playlists=a;const i=[{href:"#/artists",icon:"person",title:"Артисты",sub:`${t.artists||0} в библиотеке`},{href:"#/albums",icon:"album",title:"Альбомы",sub:`${t.albums||0} в библиотеке`},{href:"#/tracks",icon:"music",title:"Треки",sub:`${t.tracks||0} в библиотеке`},{href:"#/playlists",icon:"playlist",title:"Плейлисты",sub:`${a.length} ${H(a.length,"подборка","подборки","подборок")}`},{href:"#/favorites",icon:"heart",title:"Избранное",sub:"Треки, которым вы поставили лайк"},{href:"#/stats",icon:"chart",title:"Статистика",sub:"Часы, артисты и история"}];l("#view").innerHTML=`
    <div class="page library-page">
      <header class="page-head">
        <div>
          <span class="eyebrow">Коллекция</span>
          <h1>Медиатека</h1>
          <p class="muted">${t.tracks||0} ${H(t.tracks||0,"трек","трека","треков")} · ${ge(t.sizeBytes||0)}</p>
        </div>
        <div class="head-actions">
          <button class="btn glass" data-action="shuffle-library">${c("shuffle")} Перемешать всё</button>
        </div>
      </header>
      <div class="library-grid">
        ${i.map(n=>`<a class="library-tile" href="${n.href}">
              <span class="tile-icon">${c(n.icon)}</span>
              <span class="tile-main"><strong>${n.title}</strong><small>${b(n.sub)}</small></span>
              <span class="tile-arrow">${c("next")}</span>
            </a>`).join("")}
      </div>
    </div>`}async function $s(e){var r,u,d,p;V();const t=!!((r=o.me)!=null&&r.isAdmin),[a,i]=await Promise.all([Ka().catch(()=>({connected:!1,account:null})),t?tn().catch(()=>[]):Promise.resolve([])]);if(e!==o.renderSeq)return;o.ytmStatus=a,l("#view").innerHTML=`
    <div class="page profile-page">
      <header class="page-head">
        <div class="profile-identity">
          <span class="user-avatar xl">${b(oa(be()))}</span>
          <div>
            <h1>${b(be())}</h1>
            <p class="muted">@${b(((u=o.me)==null?void 0:u.username)||"")}${t?" · администратор":""}</p>
          </div>
        </div>
        <div class="head-actions">
          <button class="btn glass" data-action="open-settings">${c("settings")} Настройки</button>
          <button class="btn ghost danger" data-action="logout">${c("logout")} Выйти</button>
        </div>
      </header>

      <section class="section glass-card">
        <div class="section-head">
          <div>
            <h2>${c("ytm")} YouTube Music</h2>
            <p class="muted">Cookies хранятся зашифрованными и используются только для вашего профиля: поиск, лайки и прослушивание.</p>
          </div>
          <span class="status-chip ${a.connected?"on":""}">${a.connected?"подключено":"не подключено"}</span>
        </div>
        ${bs(a)}
      </section>

      <section class="section glass-card">
        <h2>${c("palette")} Оформление</h2>
        <p class="muted small">Тема сохраняется в аккаунте и применяется на всех устройствах.</p>
        ${gs()}
      </section>

      ${t?ys(i):""}
    </div>`;const n=l("#ytm-connect-form");n==null||n.addEventListener("submit",async m=>{m.preventDefault();const g=l("#ytm-connect-submit"),v=l("#ytm-connect-error"),T=l("#ytm-cookies").value.trim();if(v.textContent="",!T){v.textContent="Вставьте cookies";return}g.disabled=!0;try{await rn(T),y("YouTube Music подключён"),q()}catch(k){v.textContent=k.message||"Не удалось подключить"}finally{g.disabled=!1}});const s=l("#invite-form");s==null||s.addEventListener("submit",async m=>{var g;m.preventDefault();try{const v=await en({note:l("#invite-note").value.trim(),expiresInDays:Number(l("#invite-days").value||0),maxUses:Number(l("#invite-uses").value||0),isAdmin:l("#invite-admin").checked});await((g=navigator.clipboard)==null?void 0:g.writeText(Ja(v.code)).catch(()=>{})),y("Код создан, ссылка скопирована"),q()}catch(v){y(v.message,"error")}}),(d=l("#theme-custom"))==null||d.addEventListener("input",m=>De(m.target.value)),(p=l("#theme-custom"))==null||p.addEventListener("change",async m=>{await _i(m.target.value),q()})}async function Ss(e){var u,d;V();const t=o.ytmStatus||await Ka().catch(()=>null);if(e!==o.renderSeq)return;if(o.ytmStatus=t,!(t!=null&&t.connected)){l("#view").innerHTML=`
      <div class="page ytm-page">
        <header class="page-head">
          <div><span class="eyebrow">Источник</span><h1>YouTube Music</h1></div>
        </header>
        <section class="section glass-card empty-state">
          <span class="empty-icon">${c("ytm")}</span>
          <h2>Подключите свой аккаунт</h2>
          <p class="muted">Поиск и лайки YouTube Music будут доступны только вам. Подключение занимает минуту.</p>
          <a class="btn primary" href="#/profile">${c("settings")} Перейти в профиль</a>
        </section>
      </div>`;return}l("#view").innerHTML=`
    <div class="page ytm-page">
      <header class="page-head">
        <div>
          <span class="eyebrow">Источник</span>
          <h1>YouTube Music</h1>
          <p class="muted">${b(((u=t.account)==null?void 0:u.name)||"Подключено")}${(d=t.account)!=null&&d.handle?` · ${b(t.account.handle)}`:""}</p>
        </div>
        <div class="head-actions">
          <button class="btn glass" data-action="ytm-liked">${c("heart")} Мои лайки</button>
        </div>
      </header>

      <form id="ytm-search-form" class="search-row">
        <label class="searchbox glass">
          ${c("search")}
          <input id="ytm-search-input" type="search" placeholder="Треки, артисты, альбомы…" enterkeyhint="search" autocomplete="off" />
        </label>
        <button class="btn primary" type="submit">${c("search")} Искать</button>
      </form>

      <section class="section" id="ytm-results">
        <div class="empty-inline">Введите запрос или откройте свои лайки</div>
      </section>
    </div>`;const a=l("#ytm-search-form"),i=l("#ytm-search-input"),n=(p,m)=>{o.currentTracks=p,l("#ytm-results").innerHTML=p.length?`<div class="section-head"><h2>${c("ytm")} Результаты</h2><span class="muted small">${p.length}</span></div>${yt(p,{showCover:!0})}`:`<div class="empty-inline">${m}</div>`},s=async()=>{const p=i.value.trim();if(p){l("#ytm-results").innerHTML='<div class="empty-inline">Ищу на YouTube Music…</div>';try{const m=await ln(p);if(e!==o.renderSeq)return;n(m,"Ничего не найдено")}catch(m){qt(m)||(l("#ytm-results").innerHTML=`<div class="empty-inline">${b(m.message)}</div>`)}}};a.addEventListener("submit",p=>{p.preventDefault(),s()});let r;i.addEventListener("input",()=>{clearTimeout(r),r=setTimeout(()=>{i.value.trim().length>=2&&s()},500)}),i.focus()}document.addEventListener("click",async e=>{var i,n;const t=e.target.closest("[data-action]");if(!t)return;const a=t.dataset.action;if(a==="open"){location.hash=t.dataset.href;return}if(a==="play-row"){const s=Number(t.dataset.index);if(e.target.closest('[data-action="like"], [data-action="dislike"], [data-action="add-to-playlist"]'))return;lt(!1),await h.playTracks(o.currentTracks,s);return}if(a==="play-all"){if(!o.currentTracks.length)return y("Список пуст","warn");lt(!1),await h.playTracks(o.currentTracks,0);return}if(a==="shuffle-all"){if(!o.currentTracks.length)return y("Список пуст","warn");lt(!1),await h.playTracks(o.currentTracks,0,{shuffle:!0});return}if(a==="shuffle-library"){const s=await ca();o.currentTracks=s,await h.playTracks(s,0,{shuffle:!0});return}if(a==="start-live"){await fs();return}if(a==="play-mix"){await ms(Number(t.dataset.index));return}if(a==="open-settings"){await Ut();return}if(a==="theme"){await _i(t.dataset.theme),Z('[data-action="theme"]').forEach(s=>s.classList.toggle("active",s.dataset.theme===o.theme));return}if(a==="color-mode"){const s=t.dataset.mode;localStorage.setItem("colorMode",s),Ze(s),Z('[data-action="color-mode"]').forEach(r=>r.classList.toggle("active",r.dataset.mode===s)),y(`Режим: ${s==="dark"?"тёмный":s==="light"?"светлый":"системный"}`);return}if(a==="logout"){await Ya().catch(()=>{}),location.reload();return}if(a==="ytm-disconnect"){if(!confirm("Отключить YouTube Music? Cookies и скачанный кэш этого профиля будут удалены."))return;try{await on(),o.ytmStatus={connected:!1,account:null},y("YouTube Music отключён"),q()}catch(s){y(s.message,"error")}return}if(a==="ytm-reconnect"){o.ytmStatus={connected:!1,account:null},l("#view").innerHTML="",q();return}if(a==="ytm-liked"){const s=l("#ytm-results");s&&(s.innerHTML='<div class="empty-inline">Загружаю лайки…</div>');try{const r=await cn(200);o.currentTracks=r,s&&(s.innerHTML=r.length?`<div class="section-head"><h2>${c("heart")} Мои лайки</h2><span class="muted small">${r.length}</span></div>${yt(r,{showCover:!0})}`:'<div class="empty-inline">В YouTube Music пока нет лайков</div>')}catch(r){s&&(s.innerHTML=`<div class="empty-inline">${b(r.message)}</div>`)}return}if(a==="invite-copy"){await((i=navigator.clipboard)==null?void 0:i.writeText(Ja(t.dataset.code)).catch(()=>{})),y("Ссылка скопирована");return}if(a==="invite-revoke"){if(!confirm("Отозвать приглашение?"))return;try{await an(t.dataset.code),y("Приглашение отозвано"),q()}catch(s){y(s.message,"error")}return}if(a==="play-album"){e.stopPropagation(),lt(!1),await ls(t.dataset.id);return}if(a==="play-artist"){lt(!1),await Ia(t.dataset.id,!1);return}if(a==="shuffle-artist"){lt(!1),await Ia(t.dataset.id,!0);return}if(a==="like"){e.stopPropagation(),await ye(t.dataset.id);return}if(a==="like-current"){h.track&&await ye(h.track.id),Zt();return}if(a==="dislike"){e.stopPropagation(),await Na(t.dataset.id);return}if(a==="dislike-current"){h.track&&await Na(h.track.id),Zt();return}if(a==="add-to-playlist"){e.stopPropagation(),await cs(t.dataset.id);return}if(a==="remove-from-playlist"){e.stopPropagation();try{await qi(t.dataset.playlist,Number(t.dataset.index)),y("Трек убран из плейлиста"),q()}catch(s){y(s.message,"error")}return}if(a==="resume"){h.track?(h.clearRestored(),await h.toggle()):o.currentTracks.length&&await h.playTracks(o.currentTracks,0),location.hash.startsWith("#/home")&&q();return}if(a==="toggle"){!h.track&&o.currentTracks.length?await h.playTracks(o.currentTracks,0):await h.toggle();return}if(a==="prev")return h.previous();if(a==="next")return h.next();if(a==="shuffle")return h.toggleShuffle();if(a==="repeat")return h.cycleRepeat();if(a==="mute")return h.toggleMute();if(a==="nowplaying")return At(o.npTab);if(a==="open-lyrics")return At("lyrics");if(a==="open-eq")return At("eq");if(a==="open-queue")return At("queue");if(a==="close-np")return we();if(a==="jump-album"){(n=h.track)!=null&&n.albumId&&(we(),location.hash=`#/album/${h.track.albumId}`);return}if(a==="play-queue"){lt(!1),await h.playAt(Number(t.dataset.index));return}if(a==="new-playlist")return e.preventDefault(),ds();if(a==="delete-playlist"){if(!confirm("Удалить этот плейлист?"))return;await Hi(t.dataset.id),y("Плейлист удалён"),w.playlists=null,location.hash="#/playlists";return}if(a==="reload")return q();if(a==="reset-eq"){h.resetEq(),_e(l("#np-panel"));return}if(a==="refresh-lyrics"){if(!h.track)return;o.lyricsRefresh=!0,o.lyricsTrackId=null,yi(l("#np-panel"),h.track);return}});l("#np").addEventListener("click",e=>{const t=e.target.closest("[data-np-tab]");t&&us(t.dataset.npTab);const a=e.target.closest("[data-eq-preset]");a&&(h.applyEqPreset(a.dataset.eqPreset),_e(l("#np-panel")))});l("#np").addEventListener("input",e=>{if(e.target.id==="np-seek"){h.seekTo(Number(e.target.value)),Ht();return}if(e.target.id==="np-volume"){h.setVolume(Number(e.target.value)),xe();return}const t=e.target.closest("[data-eq-band]");if(t){const a=Number(t.dataset.eqBand),i=Number(t.value),n=l(`#eq-val-${a}`);n&&(n.textContent=`${i>0?"+":""}${i}`),h.eqState.gains[a]=i,h.eqState.preset="custom",h.setEqGain(a,i),Z(".eq-presets .chip-btn").forEach(s=>s.classList.toggle("active",s.dataset.eqPreset==="custom"))}});l("#np").addEventListener("change",e=>{var t;e.target.id==="eq-enabled"&&(h.setEqEnabled(e.target.checked),(t=l(".eq"))==null||t.classList.toggle("disabled",!e.target.checked))});l("#seek").addEventListener("input",e=>{h.seekTo(Number(e.target.value)),Ht()});l("#volume").addEventListener("input",e=>{h.setVolume(Number(e.target.value)),xe()});document.addEventListener("keydown",e=>{var a;const t=["INPUT","TEXTAREA"].includes((a=document.activeElement)==null?void 0:a.tagName);e.code==="Space"&&!t&&h.track&&(e.preventDefault(),h.toggle()),e.key==="ArrowRight"&&!t&&e.shiftKey&&h.seekBy(5),e.key==="ArrowLeft"&&!t&&e.shiftKey&&h.seekBy(-5),t||(e.key.toLowerCase()==="l"&&h.track&&(e.preventDefault(),ye(h.track.id)),e.key.toLowerCase()==="n"&&(e.preventDefault(),h.next()),e.key.toLowerCase()==="p"&&!e.ctrlKey&&!e.metaKey&&(e.preventDefault(),h.prev()),e.key.toLowerCase()==="m"&&(e.preventDefault(),h.toggleMute()),e.key.toLowerCase()==="s"&&(e.preventDefault(),h.toggleShuffle()),e.key.toLowerCase()==="r"&&(e.preventDefault(),h.toggleRepeat())),(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"&&(e.preventDefault(),l("#search-input").focus()),e.key==="Escape"&&(l("#modal-root").innerHTML?et():we())});let $e=0,Se=0,Ee=0;l("#playerbar").addEventListener("touchstart",e=>{$e=e.touches[0].clientY,Se=e.touches[0].clientX,Ee=Date.now()});l("#playerbar").addEventListener("touchend",e=>{const t=e.changedTouches[0].clientY,a=e.changedTouches[0].clientX,i=$e-t,n=Math.abs(a-Se),s=Date.now()-Ee;i>80&&s<300&&n<50&&(e.preventDefault(),At(o.npTab||"lyrics"))});const je=l(".np-sheet");je&&(je.addEventListener("touchstart",e=>{e.target.closest('.np-seek-bar, .eq-band, input[type="range"]')||($e=e.touches[0].clientY,Se=e.touches[0].clientX,Ee=Date.now())}),je.addEventListener("touchend",e=>{const t=e.changedTouches[0].clientY,a=e.changedTouches[0].clientX,i=t-$e,n=Math.abs(a-Se),s=Date.now()-Ee;i>100&&s<300&&n<50&&(e.preventDefault(),we())}));let Fe=0,Be=null;l("#pb-cover").addEventListener("touchend",e=>{const t=Date.now(),a=e.target;if(t-Fe<300&&a===Be){if(e.preventDefault(),h.track){ye(h.track.id);const i=l("#pb-cover");i.style.transform="scale(0.92)",setTimeout(()=>{i.style.transform=""},150)}Fe=0,Be=null}else Fe=t,Be=a});const Qt=l("#search-input");let Va;Qt.addEventListener("input",()=>{clearTimeout(Va);const e=Qt.value.trim();e.length!==0&&(Va=setTimeout(()=>{e.length>=2&&(location.hash=`#/search?q=${encodeURIComponent(e)}`)},350))});Qt.addEventListener("keydown",e=>{if(e.key==="Enter"){const t=Qt.value.trim();if(!t)return;Qt.blur();const a=`#/search?q=${encodeURIComponent(t)}`;location.hash===a?q():location.hash=a}});l("#rescan-btn").addEventListener("click",async()=>{l("#rescan-btn").classList.add("spin");const e=Date.now();try{await Wa(),setTimeout(async()=>{l("#rescan-btn").classList.remove("spin"),await Gn()},Math.max(2500,Date.now()-e))}catch(t){l("#rescan-btn").classList.remove("spin"),qt(t)||y(t.message,"error")}});l("#np-pill").addEventListener("click",()=>At(o.npTab));h.addEventListener("track",()=>{Ei(),o.npOpen&&Zt(),Le(),Ht()});h.addEventListener("time",()=>{Ht()});h.addEventListener("buffer",Ti);h.addEventListener("state",Le);h.addEventListener("mode",pa);h.addEventListener("volume",xe);h.addEventListener("eq",()=>{o.npTab==="eq"&&o.npOpen&&_e(l("#np-panel"))});h.addEventListener("error",e=>y(e.detail,"error"));document.addEventListener("error",e=>{e.target instanceof HTMLImageElement&&(e.target.style.display="none")},!0);window.addEventListener("hashchange",q);h.addEventListener("queueend",async()=>{if(o.liveMode)try{const e=await Ga(25),t=new Set(h.queue.map(i=>i.id)),a=e.filter(i=>!t.has(i.id));if(!a.length){y("Live: новых треков не нашлось","warn");return}h.appendTracks(a),await h.next(!0)}catch(e){qt(e)||y(e.message,"error")}});l("#auth-toggle-register").addEventListener("click",()=>{var e;return ha(((e=l("#register-invite"))==null?void 0:e.value)||"")});l("#auth-toggle-login").addEventListener("click",()=>{location.hash.startsWith("#/register")&&(location.hash="#/home"),Pt()});l("#register-invite").addEventListener("change",()=>{const e=l("#register-invite").value.trim();e&&ha(e)});l("#register-form").addEventListener("submit",async e=>{e.preventDefault();const t=l("#register-submit"),a=l("#register-error");a.textContent="",t.disabled=!0;try{await sn({invite:l("#register-invite").value.trim(),username:l("#register-username").value.trim(),password:l("#register-password").value,displayName:l("#register-display").value.trim()}),location.hash="#/home",await fa()}catch(i){a.textContent=i.message||"Не удалось зарегистрироваться"}finally{t.disabled=!1}});l("#login-form").addEventListener("submit",async e=>{e.preventDefault();const t=l("#login-submit"),a=l("#login-error");a.textContent="",t.disabled=!0;try{await Ri(l("#login-username").value.trim(),l("#login-password").value),await fa()}catch(i){a.textContent=i.message||"Не удалось войти"}finally{t.disabled=!1}});document.addEventListener("keydown",e=>{var t,a;e.key==="Enter"&&!l("#auth-screen").hidden&&((t=document.activeElement)==null?void 0:t.id)==="login-username"&&((a=l("#login-password"))==null||a.focus())});window.addEventListener("pagehide",()=>{h.playId&&h._finalizePlay(!1)});xe();pa();Le();Ht();fa();
