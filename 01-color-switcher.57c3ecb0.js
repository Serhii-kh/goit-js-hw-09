!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body"),r=function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))},o=null;t.addEventListener("click",(function(){t.setAttribute("disabled",!0),e.removeAttribute("disabled"),o=setInterval((function(){r()}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),e.setAttribute("disabled",!0),clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.57c3ecb0.js.map
