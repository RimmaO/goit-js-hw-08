!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return d.Date.now()};function g(e,t,n){var i,o,a,u,l,f,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function g(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function w(e){return c=e,l=setTimeout(S,t),s?g(e):u}function h(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=a}function S(){var e=y();if(h(e))return j(e);l=setTimeout(S,function(e){var n=t-(e-f);return d?p(n,a-(e-c)):n}(e))}function j(e){return l=void 0,m&&i?g(e):(i=o=void 0,u)}function O(){var e=y(),n=h(e);if(i=arguments,o=this,f=e,n){if(void 0===l)return w(f);if(d)return l=setTimeout(S,t),g(f)}return void 0===l&&(l=setTimeout(S,t)),u}return t=N(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(N(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=f=o=l=void 0},O.flush=function(){return void 0===l?u:j(y())},O}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function N(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=u.test(t);return r||l.test(t)?f(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};var w,h="form-data",S=document.querySelector("form"),j=document.querySelector("#email"),O=document.querySelector("#clear"),T={};(w=JSON.parse(localStorage.getItem(h)))&&(T.firstName=w.firstName,T.lastName=w.lastName,T.email=w.email,T.phone=w.phone,S.firstName.value=T.firstName,S.lastName.value=T.lastName,S.email.value=T.email,S.phone.value=T.phone),S.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,localStorage.setItem(h,JSON.stringify(T))}),1e3));var E=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;j.addEventListener("blur",(function(){E.test(j.value)?j.setCustomValidity(""):j.setCustomValidity("Please write valid email")})),console.log(S.firstName),S.addEventListener("submit",(function(e){if(e.preventDefaut(),!(S.firstName.value&&S.lastName.value&&S.email.value&&S.phone.value))return alert("Please fill all");e.target.reset(),localStorage.removeItem(h),console.log(T)})),O.addEventListener("click",(function(){localStorage.removeItem(h),S.reset()}))}();
//# sourceMappingURL=04-bonus.451815b7.js.map
