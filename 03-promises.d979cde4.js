function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");const u=document.querySelector(".form"),[l,s,f,d]=u;function a(t,n){const o=new Promise(((e,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?e(`✅ Fulfilled promise ${t} in ${n}ms`):o(`❌ Rejected promise ${t} in ${n}ms`)}),`${n}`)}));o.then((t=>{e(i).Notify.success(t)})),o.catch((t=>{e(i).Notify.failure(t)}))}u.addEventListener("submit",(function(e){e.preventDefault();const t=Number(l.value),n=Number(s.value),o=Number(f.value);let r=t;for(let e=0;e<o;e++)a(e+1,r),r+=n;u.reset()}));
//# sourceMappingURL=03-promises.d979cde4.js.map