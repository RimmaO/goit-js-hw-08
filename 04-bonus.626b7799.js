function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,c=l||f||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var i,r,a,o,u,l,f=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,a=r;return i=r=void 0,f=t,o=e.apply(a,n)}function N(e){return f=e,u=setTimeout(h,t),c?b(e):o}function w(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-f>=a}function h(){var e=v();if(w(e))return S(e);u=setTimeout(h,function(e){var n=t-(e-l);return s?d(n,a-(e-f)):n}(e))}function S(e){return u=void 0,p&&i?b(e):(i=r=void 0,o)}function j(){var e=v(),n=w(e);if(i=arguments,r=this,l=e,n){if(void 0===u)return N(l);if(s)return u=setTimeout(h,t),b(l)}return void 0===u&&(u=setTimeout(h,t)),o}return t=y(t)||0,g(n)&&(c=!!n.leading,a=(s="maxWait"in n)?m(y(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),j.cancel=function(){void 0!==u&&clearTimeout(u),f=0,i=l=r=u=void 0},j.flush=function(){return void 0===u?o:S(v())},j}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||o.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector("form"),N=document.querySelector("#email"),w=document.querySelector("#clear"),h={};!function(){const e=JSON.parse(localStorage.getItem("form-data"));e&&(h.firstName=e.firstName,h.lastName=e.lastName,h.email=e.email,h.phone=e.phone,b.firstName.value=h.firstName,b.lastName.value=h.lastName,b.email.value=h.email,b.phone.value=h.phone)}(),b.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem("form-data",JSON.stringify(h))}),1e3));const S=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;N.addEventListener("blur",(function(){S.test(N.value)?N.setCustomValidity(""):N.setCustomValidity("Please write valid email")})),b.addEventListener("submit",(function(e){if(e.preventDefaut(),!(b.firstName.value&&b.lastName.value&&b.email.value&&b.phone.value))return alert("Please fill all");e.target.reset(),localStorage.removeItem("form-data"),console.log(h)})),w.addEventListener("click",(function(){localStorage.removeItem("form-data"),b.reset()}));
//# sourceMappingURL=04-bonus.626b7799.js.map