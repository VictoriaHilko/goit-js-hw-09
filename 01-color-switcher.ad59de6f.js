!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var o,r="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=d||l||Function("return this")(),b=Object.prototype.toString,v=Math.max,y=Math.min,p=function(){return s.Date.now()};function m(t,e,n){var o,i,u,a,f,c,d=0,l=!1,s=!1,b=!0;if("function"!=typeof t)throw new TypeError(r);function m(e){var n=o,r=i;return o=i=void 0,d=e,a=t.apply(r,n)}function h(t){return d=t,f=setTimeout(O,e),l?m(t):a}function _(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-d>=u}function O(){var t=p();if(_(t))return S(t);f=setTimeout(O,function(t){var n=e-(t-c);return s?y(n,u-(t-d)):n}(t))}function S(t){return f=void 0,b&&o?m(t):(o=i=void 0,a)}function T(){var t=p(),n=_(t);if(o=arguments,i=this,c=t,n){if(void 0===f)return h(c);if(s)return f=setTimeout(O,e),m(c)}return void 0===f&&(f=setTimeout(O,e)),a}return e=j(e)||0,g(n)&&(l=!!n.leading,u=(s="maxWait"in n)?v(j(n.maxWait)||0,e):u,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==f&&clearTimeout(f),d=0,o=c=i=f=void 0},T.flush=function(){return void 0===f?a:S(p())},T}function g(t){var o=void 0===t?"undefined":e(n)(t);return!!t&&("object"==o||"function"==o)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(n)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==b.call(t)}(t))return NaN;if(g(t)){var o="function"==typeof t.valueOf?t.valueOf():t;t=g(o)?o+"":o}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=a.test(t);return r||f.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}var h={start_button:document.querySelector("[data-start]"),stop_button:document.querySelector("[data-stop]"),body:document.querySelector("body")};h.start_button.addEventListener("click",(function(){o=setInterval((function(){h.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),h.start_button.disabled=!0})),h.stop_button.addEventListener("click",(function(){clearInterval(o),h.start_button.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.ad59de6f.js.map
