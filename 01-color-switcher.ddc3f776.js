!function(){var e=document.querySelector("body"),t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]"),a=null,n=t.disabled=!1;d.disabled=!0;function r(){return e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.addEventListener("click",(function(){if(n)return;n=t.disabled=!0,d.disabled=!1,a=setInterval(r,1e3)})),d.addEventListener("click",(function(){n=t.disabled=!1,d.disabled=!0,clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.ddc3f776.js.map