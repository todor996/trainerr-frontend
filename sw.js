if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let l={};const o=e=>n(e,t),a={module:{uri:t},exports:l,require:o};s[t]=Promise.all(i.map((e=>a[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Home.page-492db644.js",revision:null},{url:"assets/index-443f49c6.js",revision:null},{url:"assets/index-5f9cac01.css",revision:null},{url:"assets/Settings.page-7c0823f3.js",revision:null},{url:"assets/translation-3b6d525a.js",revision:null},{url:"assets/translation-a429a60b.js",revision:null},{url:"assets/translation-a90a5413.js",revision:null},{url:"assets/translation-fdf09c8f.js",revision:null},{url:"index.html",revision:"7a0a9483629c3e455d0050b7ac928bea"},{url:"registerSW.js",revision:"3adddc2e1e8130f3303e9fd58cc7cf60"},{url:"manifest.webmanifest",revision:"0c6168444a83244ff618e3bcc07ada87"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));