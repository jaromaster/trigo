(()=>{"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){return 0===Object.keys(t).length}new Set;let i=!1;function r(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function p(){return f(" ")}function $(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t){return""===t?null:+t}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function g(t,e){t.value=null==e?"":e}function b(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}t.selectedIndex=-1}new Map;let y;function x(t){y=t}function k(){if(!y)throw new Error("Function called outside component initialization");return y}const _=[],T=[],w=[],C=[],S=Promise.resolve();let E=!1;function I(){E||(E=!0,S.then(B))}function M(t){w.push(t)}const q=new Set;let j=0;function B(){if(0!==j)return;const t=y;do{try{for(;j<_.length;){const t=_[j];j++,x(t),L(t.$$)}}catch(t){throw _.length=0,j=0,t}for(x(null),_.length=0,j=0;T.length;)T.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];q.has(e)||(q.add(e),e())}w.length=0}while(_.length);for(;C.length;)C.pop()();E=!1,q.clear(),x(t)}function L(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const A=new Set;let F;function H(t,e){t&&t.i&&(A.delete(t),t.i(e))}function N(t,e,n,o){if(t&&t.o){if(A.has(t))return;A.add(t),F.c.push((()=>{A.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let O;function P(t){t&&t.c()}function W(t,n,c,l){const{fragment:i,after_update:r}=t.$$;i&&i.m(n,c),l||M((()=>{const n=t.$$.on_mount.map(e).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),r.forEach(M)}function D(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function z(e,s,c,l,r,u,d,f=[-1]){const p=y;x(e);const $=e.$$={fragment:null,ctx:[],props:u,update:t,not_equal:r,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(p?p.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:s.target||p.$$.root};d&&d($.root);let h=!1;if($.ctx=c?c(e,s.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return $.ctx&&r($.ctx[t],$.ctx[t]=s)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](s),h&&function(t,e){-1===t.$$.dirty[0]&&(_.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],$.update(),h=!0,o($.before_update),$.fragment=!!l&&l($.ctx),s.target){if(s.hydrate){i=!0;const t=(m=s.target,Array.from(m.childNodes));$.fragment&&$.fragment.l(t),t.forEach(a)}else $.fragment&&$.fragment.c();s.intro&&H(e.$$.fragment),W(e,s.target,s.anchor,s.customElement),i=!1,B()}var m;x(p)}"function"==typeof HTMLElement&&(O=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(s);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){D(this,1),this.$destroy=t}$on(e,n){if(!s(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class R{$destroy(){D(this,1),this.$destroy=t}$on(e,n){if(!s(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const G=90,J=30,K=10,Q=10,U="°",V="funcCanvas";function X(t,e,n,o,s,c){const l=s,i=c,r=Math.floor((l/2-K)/G),u=G*r,a=-1*G*r;let d=document.getElementById(V).getContext("2d");d.beginPath(),d.strokeStyle="#CC6600",d.lineWidth=1;for(let s=a;s<=u;s++){const c=(t*Math.sin((e*s+n)*Math.PI/180)+o)*J;d.lineTo(l/2+s,i/2-c),d.stroke()}}const Y=function(t,e,n,o,s,c,l){!function(t,e){const n=t,o=e;let s=document.getElementById(V).getContext("2d");s.clearRect(0,0,n,o),s.beginPath(),s.strokeStyle="#000000",s.lineWidth=1,s.moveTo(n/2,K),s.lineTo(n/2,o-K),s.stroke(),s.moveTo(K,o/2),s.lineTo(n-K,o/2),s.stroke();const c=t=>s.measureText(t).width;s.moveTo(n/2,o/2);for(let t=0;t<n/2-K;t+=G){s.moveTo(n/2+t,o/2-Q),s.lineTo(n/2+t,o/2),s.stroke();const e=c(String(t)+U);s.fillText(String(t)+U,n/2+t-e/2,o/2+Q)}s.moveTo(n/2,o/2);for(let t=G;t<n/2-K;t+=G){s.moveTo(n/2-t,o/2-Q),s.lineTo(n/2-t,o/2),s.stroke();const e=c(String(-1*t)+U);s.fillText(String(-1*t)+U,n/2-t-e/2,o/2+Q)}s.moveTo(n/2,o/2);for(let t=J;t<o/2-K;t+=J){s.moveTo(n/2+Q,o/2+t),s.lineTo(n/2,o/2+t),s.stroke();const e=c(String(-1*t/J));s.fillText(String(-1*t/J),n/2-Q/2-e,o/2+t)}s.moveTo(n/2,o/2);for(let t=J;t<o/2-K;t+=J){s.moveTo(n/2+Q,o/2-t),s.lineTo(n/2,o/2-t),s.stroke();const e=c(String(t/J));s.fillText(String(t/J),n/2-Q/2-e,o/2-t)}}(s,c),X(t,e,"sin"===l?n:n+90,o,s,c)};function Z(e){let n;return{c(){n=d("div"),n.innerHTML='<canvas id="funcCanvas" class="svelte-jgq06u"></canvas>',h(n,"id","canvasDiv"),h(n,"class","svelte-jgq06u")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&a(n)}}}function tt(t,e,n){let{a:o,b:s,c,d:l}=e,{func:i}=e;var r;return r=()=>{const t=document.getElementById("funcCanvas"),e=document.getElementById("canvasDiv"),n=t.width=e.offsetWidth,r=t.height=e.offsetHeight;Y(o,s,c,l,n,r,i)},k().$$.after_update.push(r),t.$$set=t=>{"a"in t&&n(0,o=t.a),"b"in t&&n(1,s=t.b),"c"in t&&n(2,c=t.c),"d"in t&&n(3,l=t.d),"func"in t&&n(4,i=t.func)},[o,s,c,l,i]}const et=class extends R{constructor(t){super(),z(this,t,tt,Z,c,{a:0,b:1,c:2,d:3,func:4})}};function nt(t){let e,n,s,c,l,i,y,x,k,_,T,w,C,S,E,I,q,j,B,L,A,F,O,z,R,G,J,K,Q,U,V,X,Y,Z;return V=new et({props:{a:t[0],b:t[1],c:t[2],d:t[3],func:t[4]}}),{c(){e=d("div"),n=d("div"),s=d("label"),s.textContent="a =",c=p(),l=d("input"),i=p(),y=d("label"),y.textContent="b =",x=p(),k=d("input"),_=p(),T=d("label"),T.textContent="c =",w=p(),C=d("input"),S=p(),E=d("label"),E.textContent="d =",I=p(),q=d("input"),j=p(),B=d("select"),L=d("option"),L.textContent="sin",A=d("option"),A.textContent="cos",F=p(),O=d("p"),z=f("f(x) = a * "),R=f(t[4]),G=f("(b * x + c) + d"),J=p(),K=d("p"),Q=f(t[5]),U=p(),P(V.$$.fragment),h(s,"for","aInput"),h(s,"class","svelte-17ck8nl"),h(l,"type","number"),h(l,"id","aInput"),h(l,"max","10"),h(l,"min","-10"),h(l,"class","svelte-17ck8nl"),h(y,"for","bInput"),h(y,"class","svelte-17ck8nl"),h(k,"type","number"),h(k,"id","bInput"),h(k,"step","0.05"),h(k,"class","svelte-17ck8nl"),h(T,"for","cInput"),h(T,"class","svelte-17ck8nl"),h(C,"type","number"),h(C,"id","cInput"),h(C,"step","10"),h(C,"class","svelte-17ck8nl"),h(E,"for","dInput"),h(E,"class","svelte-17ck8nl"),h(q,"type","number"),h(q,"id","dInput"),h(q,"max","10"),h(q,"min","-10"),h(q,"class","svelte-17ck8nl"),L.__value="sin",L.value=L.__value,A.__value="cos",A.value=A.__value,h(B,"id","selectFunc"),h(B,"class","svelte-17ck8nl"),void 0===t[4]&&M((()=>t[10].call(B))),h(O,"id","displayFunc"),h(O,"class","svelte-17ck8nl"),h(K,"id","displayFunc"),h(K,"class","svelte-17ck8nl"),h(n,"id","userInput"),h(n,"class","svelte-17ck8nl"),h(e,"id","trigo"),h(e,"class","svelte-17ck8nl")},m(o,a){u(o,e,a),r(e,n),r(n,s),r(n,c),r(n,l),g(l,t[0]),r(n,i),r(n,y),r(n,x),r(n,k),g(k,t[1]),r(n,_),r(n,T),r(n,w),r(n,C),g(C,t[2]),r(n,S),r(n,E),r(n,I),r(n,q),g(q,t[3]),r(n,j),r(n,B),r(B,L),r(B,A),b(B,t[4]),r(n,F),r(n,O),r(O,z),r(O,R),r(O,G),r(n,J),r(n,K),r(K,Q),r(e,U),W(V,e,null),X=!0,Y||(Z=[$(l,"input",t[6]),$(k,"input",t[7]),$(C,"input",t[8]),$(q,"input",t[9]),$(B,"change",t[10])],Y=!0)},p(t,[e]){1&e&&m(l.value)!==t[0]&&g(l,t[0]),2&e&&m(k.value)!==t[1]&&g(k,t[1]),4&e&&m(C.value)!==t[2]&&g(C,t[2]),8&e&&m(q.value)!==t[3]&&g(q,t[3]),16&e&&b(B,t[4]),(!X||16&e)&&v(R,t[4]),(!X||32&e)&&v(Q,t[5]);const n={};1&e&&(n.a=t[0]),2&e&&(n.b=t[1]),4&e&&(n.c=t[2]),8&e&&(n.d=t[3]),16&e&&(n.func=t[4]),V.$set(n)},i(t){X||(H(V.$$.fragment,t),X=!0)},o(t){N(V.$$.fragment,t),X=!1},d(t){t&&a(e),D(V),Y=!1,o(Z)}}}function ot(t,e,n){let o=1,s=1,c=0,l=0,i="",r="sin";return t.$$.update=()=>{31&t.$$.dirty&&n(5,i=function(t,e,n,o,s){let c="f(x) = ";return 1!=t&&(c+=`${t} * `),c+=`${s}(`,c+=1!=e?`${e} * x`:"x",n<0?c+=" - "+-1*n:n>0&&(c+=` + ${n}`),c+=") ",o<0?c+="- "+-1*o:o>0&&(c+=`+ ${o}`),c}(o,s,c,l,r))},[o,s,c,l,r,i,function(){o=m(this.value),n(0,o)},function(){s=m(this.value),n(1,s)},function(){c=m(this.value),n(2,c)},function(){l=m(this.value),n(3,l)},function(){r=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(4,r)}]}const st=class extends R{constructor(t){super(),z(this,t,ot,nt,c,{})}};function ct(e){let n,o,s,c,l;return c=new st({}),{c(){n=d("main"),o=d("h1"),o.textContent="Trigo",s=p(),P(c.$$.fragment),h(o,"class","svelte-hm7m67"),h(n,"class","svelte-hm7m67")},m(t,e){u(t,n,e),r(n,o),r(n,s),W(c,n,null),l=!0},p:t,i(t){l||(H(c.$$.fragment,t),l=!0)},o(t){N(c.$$.fragment,t),l=!1},d(t){t&&a(n),D(c)}}}new class extends R{constructor(t){super(),z(this,t,null,ct,c,{})}}({target:document.body,props:{name:"world"}})})();