var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,o=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,a=u||f||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return a.Date.now()};function v(e,t,n){var i,r,o,u,f,a,c=0,v=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(h,t),v?g(e):u}function T(e){var n=e-a;return void 0===a||n>=t||n<0||b&&e-c>=o}function h(){var e=d();if(T(e))return O(e);f=setTimeout(h,function(e){var n=t-(e-a);return b?s(n,o-(e-c)):n}(e))}function O(e){return f=void 0,y&&i?g(e):(i=r=void 0,u)}function w(){var e=d(),n=T(e);if(i=arguments,r=this,a=e,n){if(void 0===f)return j(a);if(b)return f=setTimeout(h,t),g(a)}return void 0===f&&(f=setTimeout(h,t)),u}return t=m(t)||0,p(n)&&(v=!!n.leading,o=(b="maxWait"in n)?l(m(n.maxWait)||0,t):o,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=r=f=void 0},w.flush=function(){return void 0===f?u:O(d())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var u="function"==typeof e.valueOf?e.valueOf():e;e=p(u)?u+"":u}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var f=i.test(e);return f||r.test(e)?o(e.slice(2),f?2:8):n.test(e)?NaN:+e}const b=document.querySelector(".feedback-form");b.addEventListener("input",(function(e){const{elements:{email:t,message:n}}=e.currentTarget,i={email:t.value,message:n.value};localStorage.setItem("feedback-form-state",JSON.stringify(i))})),b.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.d1e383d8.js.map
