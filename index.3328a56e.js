function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,void 0);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n=document.querySelector("tbody"),r=document.querySelector(".append-row"),o=document.querySelector(".remove-row"),l=document.querySelector(".append-column"),i=document.querySelector(".remove-column");r.addEventListener("click",function(e){n.append(n.lastElementChild.cloneNode(!0)),r.disabled=10===n.childElementCount,o.disabled=!1}),o.addEventListener("click",function(){n.lastElementChild.remove(),o.disabled=2===n.childElementCount,r.disabled=!1}),l.addEventListener("click",function(e){t(n.rows).forEach(function(e){e.append(e.lastElementChild.cloneNode(!0))}),l.disabled=10===n.children[0].childElementCount,i.disabled=!1}),i.addEventListener("click",function(){t(n.rows).forEach(function(e){e.lastElementChild.remove()});var e=n.children[0].childElementCount;i.disabled=2===e,l.disabled=!1});
//# sourceMappingURL=index.3328a56e.js.map
