(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerpolicy&&(c.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?c.credentials="include":t.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function e(t){if(t.ep)return;t.ep=!0;const c=s(t);fetch(t.href,c)}})();const r=(n,o,s=0)=>new Array(n).fill(0).map(e=>new Array(o).fill(s)),Y=(n,o,s)=>{const e=n.length,t=n[0].length;let c=0;return[[0,1],[1,0],[0,-1],[-1,0],[1,-1],[-1,1],[-1,-1],[1,1]].forEach(([d,y])=>{let a=o+d,u=s+y;a>=e&&(a=0),u>=t&&(u=0),a<0&&(a=e-1),u<0&&(u=t-1),c+=n[a][u]}),c},z=n=>{const o=n.length,s=n[0].length,e=r(o,s);for(let t=0;t<o;t++)for(let c=0;c<s;c++){const l=n[t][c],d=Y(n,t,c);l&&(d<2||d>3)?e[t][c]=0:!l&&d===3?e[t][c]=1:e[t][c]=l}return e},i={isPlaying:!1,isGridVisible:!0,cellSize:25,seedType:"random",customSeed:null,animationId:0},f=n=>{n(),S(i.seedType==="custom"?i.customSeed:null)},h={now:Date.now(),then:Date.now(),fps:30},p={x:20,y:20},C=()=>{const n=document.getElementById("canvas"),{height:o,width:s}=n,e=Math.round(o/i.cellSize);return{rows:Math.round(s/i.cellSize),cols:e}},L=(n,o="rgb(26, 26, 26)")=>{const s=n.getContext("2d"),{height:e,width:t}=n;s.fillStyle=o,s.fillRect(0,0,t,e)},X=n=>{n.height=window.innerHeight-p.x,n.width=window.innerWidth-p.y,L(n)},D=(n,o,s,e,t="#40a6ff")=>{n.beginPath(),n.fillStyle=t,n.rect(o*e,s*e,e,e),n.fill()},N=(n,o,s)=>{const e=o.length,t=o[0].length;for(let c=0;c<e;c++)for(let l=0;l<t;l++)o[c][l]&&D(n,c,l,s)},O=(n,o,s,e,t,c,l="rgba(256, 256, 256, 0.2)")=>{for(let d=0;d<o;d++)n.strokeStyle=l,n.beginPath(),n.moveTo(d*e,0),n.lineTo(d*e,t),n.stroke();for(let d=0;d<s;d++)n.strokeStyle=l,n.beginPath(),n.moveTo(0,d*e),n.lineTo(c,d*e),n.stroke()},k=(n,o)=>{const s=n.getContext("2d"),e=o.length,t=o[0].length;L(n),N(s,o,i.cellSize),i.isGridVisible&&O(s,e,t,i.cellSize,n.height,n.width)},P=(n,o)=>{let s=o;const e=Date.now(),t=e-h.then,c=1e3/h.fps;h.now=e,t>c&&(h.then=e-t%c,k(n,o),s=z(o)),i.isPlaying&&(i.animationId=window.requestAnimationFrame(()=>{P(n,s)}))},F=(n,o)=>{const s=r(n,o);for(let e=0;e<n;e++)for(let t=0;t<o;t++)s[e][t]=Math.round(Math.random());return s},G=(n,o)=>{const s=r(n,o),e=Math.round(o/2),t=Math.round(n/2);return[[t,e],[t,e-1],[t,e-2]].forEach(([l,d])=>{s[l][d]=1}),s},R=(n,o)=>{const s=r(n,o),e=Math.round(o/2);return[[1,e-2],[1,e+1],[2,e+2],[3,e+2],[4,e-1],[4,e+2],[5,e+2],[5,e+1],[5,e+0]].forEach(([c,l])=>{s[c][l]=1}),s},V=(n,o)=>{const s=r(n,o),e=Math.round(o/2),t=Math.round(n/2);return[[t-1,e-1],[t-2,e-1],[t-2,e-2],[t-1,e-2],[t,e],[t+1,e],[t+1,e+1],[t,e+1]].forEach(([l,d])=>{s[l][d]=1}),s},H=(n,o)=>{const s=r(n,o),e=Math.round(o/2),t=Math.round(n/2);return[[t-2,e-1],[t-3,e-1],[t-4,e-1],[t-2,e-6],[t-3,e-6],[t-4,e-6],[t-1,e-2],[t-1,e-3],[t-1,e-4],[t-6,e-2],[t-6,e-3],[t-6,e-4],[t+2,e+1],[t+3,e+1],[t+4,e+1],[t+2,e+6],[t+3,e+6],[t+4,e+6],[t+1,e+2],[t+1,e+3],[t+1,e+4],[t+6,e+2],[t+6,e+3],[t+6,e+4],[t-2,e+1],[t-3,e+1],[t-4,e+1],[t-2,e+6],[t-3,e+6],[t-4,e+6],[t-1,e+2],[t-1,e+3],[t-1,e+4],[t-6,e+2],[t-6,e+3],[t-6,e+4],[t+2,e-1],[t+3,e-1],[t+4,e-1],[t+2,e-6],[t+3,e-6],[t+4,e-6],[t+1,e-2],[t+1,e-3],[t+1,e-4],[t+6,e-2],[t+6,e-3],[t+6,e-4]].forEach(([l,d])=>{s[l][d]=1}),s},W=(n,o,s)=>n<15||o<15?r(n,o):s==="random"?F(n,o):s==="blinker"?G(n,o):s==="spaceship"?R(n,o):s==="beacon"?V(n,o):s==="pulsar"?H(n,o):r(n,o),v=()=>{const n=document.getElementById("game-speed-control-wrapper");n.style.display="flex"},q=()=>{const n=document.getElementById("game-speed-control-wrapper");n.style.display="none"},w=()=>{const n=document.getElementById("reset-btn");n.style.display="block"},x=()=>{const n=document.getElementById("custom-start-btn");n.style.display="block"},T=()=>{const n=document.getElementById("reset-btn");n.style.display="none"},b=()=>{const n=document.getElementById("custom-start-btn");n.style.display="none"},K=()=>{const n=document.getElementById("config-modal");n.style.display="block"},B=()=>{const n=document.getElementById("config-modal");n.style.display="none"},_=n=>{n?document.body.classList.remove("drawing"):document.body.classList.add("drawing")},S=n=>{const o=document.getElementById("canvas");if(cancelAnimationFrame(i.animationId),X(o),!n){const{height:s,width:e}=o,t=Math.round(s/i.cellSize),c=Math.round(e/i.cellSize);n=W(c,t,i.seedType)}i.seedType==="custom"&&_(i.isPlaying),k(o,n),P(o,n)},A=(n,o)=>{const s=Math.floor((n-p.x/2)/i.cellSize),e=Math.floor((o-p.y/2)/i.cellSize);return{x:s,y:e}},I=n=>{const o=n.pageX,s=n.pageY,{x:e,y:t}=A(o,s);if(!i.customSeed){const{rows:c,cols:l}=C();i.customSeed=r(c,l)}i.customSeed[e][t]=i.customSeed[e][t]?0:1,S(i.customSeed)},M=n=>{const o=n.touches[0].pageX,s=n.touches[0].pageY,{x:e,y:t}=A(o,s);if(!i.customSeed){const{rows:c,cols:l}=C();i.customSeed=r(c,l)}i.customSeed[e][t]=i.customSeed[e][t]?0:1,S(i.customSeed)},$=()=>{const n=document.getElementById("canvas");n.removeEventListener("click",I),n.removeEventListener("touchstart",M),n.addEventListener("click",I),n.addEventListener("touchstart",M),T(),x()},j=()=>{const n=document.getElementById("grid-size-slider"),o=document.getElementById("game-speed-slider"),s=document.getElementById("start-btn"),e=document.getElementById("seed-select"),t=document.getElementById("reset-btn"),c=document.getElementById("custom-start-btn"),l=document.getElementById("show-grid"),d=document.getElementById("bg-music-btn"),y=document.getElementById("bg-audio");n.value=i.cellSize.toString(),o.value=h.fps.toString(),e.value=i.seedType,l.checked=i.isGridVisible,n.addEventListener("input",m=>{const g=+m.target.value;f(()=>{i.cellSize=g})}),o.addEventListener("input",m=>{const g=+m.target.value;h.fps=g}),l.addEventListener("input",m=>{const g=m.target.checked;f(()=>{i.isGridVisible=g})}),e.addEventListener("input",m=>{const g=m.target.value;f(()=>{i.seedType=g})}),s.addEventListener("click",()=>{if(f(()=>{i.seedType!=="custom"&&(i.isPlaying=!0)}),w(),B(),v(),i.seedType==="custom"){$();return}a()}),c.addEventListener("click",()=>{f(()=>{i.isPlaying=!0}),a(),b(),B(),w(),v()}),t.addEventListener("click",()=>{f(()=>{i.isPlaying=!1,i.customSeed=null}),u(),K(),T(),b(),q()}),d.addEventListener("click",()=>{y.paused?a():u()});const a=()=>{y.play(),document.body.classList.add("bg-audio-playing")},u=()=>{y.pause(),document.body.classList.remove("bg-audio-playing")}};j();S(null);