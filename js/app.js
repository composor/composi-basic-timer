!function(){"use strict";function t(t,e){for(var n=arguments.length,o=Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];for(var r=void 0,s=[];o.length;)Array.isArray(r=o.shift())?r.map(function(t){return o.push(t)}):null!=r&&"boolean"!=typeof r&&("number"==typeof r&&(r+=""),s.push(r));return"string"==typeof t?{type:t,props:e||{},children:s}:t(e||{},s)}function e(t,e){var n={};for(var o in t)n[o]=t[o];for(var i in e)n[i]=e[i];return n}function n(t,n,a,u){return function t(n,a,u,c,l,f){if(null==u)a=n.insertBefore(i(c,l),a);else if(null!=c.type&&c.type===u.type){E=a,A=u.props,M=c.props,Object.keys(e(A,M)).forEach(function(t){var e=M[t],n="value"===t||"checked"===t?E[t]:A[t];e!==n&&o(E,t,e,n)}),l=l||"svg"===c.type;for(var h=c.children.length,m=u.children.length,p={},d=[],y={},v=0;v<m;){var b=d[v]=a.childNodes[v],g=u.children[v],w=r(g);null!=w&&(p[w]=[b,g]),v++}for(var k=0,S=0;S<h;){var C=d[k],T=u.children[k],N=c.children[S],U=r(T);if(y[U])k++;else{var x=r(N),O=p[x]||[];null==x?(null==U&&(t(a,C,T,N,l),S++),k++):(U===x?t(a,O[0],O[1],N,l)&&k++:O[0]?a.insertBefore(O[0],C)&&t(a,O[0],O[1],N,l):t(a,C,null,N,l),y[x]=N,S++)}}for(;k<m;){var W=u.children[k],j=r(W);null==j&&s(a,d[k]),k++}Object.keys(p).forEach(function(t){var e=p[t],n=e[1];y[n.props.key]||s(a,e[0])})}else a&&c!==a.nodeValue&&("string"==typeof c&&"string"==typeof u?a.nodeValue=c:(a=n.insertBefore(i(c,l),f=a),s(n,f,u.data)));var E,A,M;return a}(u||document.body,a,t,n)}function o(t,n,o,i){if("key"===n);else if("style"===n&&"string"!=typeof o)for(var r in e(i,o=o||{}))t.style[r]=o[r]+""||"";else 0===o&&(o+=""),"className"===n&&(n="class"),/^on.*$/.test(n)&&(n=n.toLowerCase()),"http://www.w3.org/2000/svg"!==t.namespaceURI&&(t[n]=o),"function"!=typeof o&&(o?"xlink-href"===n?(t.setAttributeNS("http://www.w3.org/1999/xlink","href",o),t.setAttribute("href",o)):t.setAttribute(n,o):t.removeAttribute(n))}function i(t,e){return"string"==typeof t?document.createTextNode(t):(n=t,s=(r=(r=e)||"svg"===n.type)?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type),Object.keys(n.props).forEach(function(t){return o(s,t,n.props[t])}),n.children.map(function(t){return s.appendChild(i(t,r))}),s);var n,r,s}function r(t){if(t&&t.props)return t.props.key}var s=function(t,e){return t.removeChild(e)};var a=function(t,e){Object.keys(e).forEach(function(n){e.hasOwnProperty(n)&&Object.defineProperty(t,n,{value:e[n],writable:!0,enumerable:!1,configurable:!0})})},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c=(function(){function t(t){this.value=t}function e(e){var n,o;function i(n,o){try{var s=e[n](o),a=s.value;a instanceof t?Promise.resolve(a.value).then(function(t){i("next",t)},function(t){i("throw",t)}):r(s.done?"return":"normal",s.value)}catch(t){r("throw",t)}}function r(t,e){switch(t){case"return":n.resolve({value:e,done:!0});break;case"throw":n.reject(e);break;default:n.resolve({value:e,done:!1})}(n=n.next)?i(n.key,n.arg):o=null}this._invoke=function(t,e){return new Promise(function(r,s){var a={key:t,arg:e,resolve:r,reject:s,next:null};o?o=o.next=a:(n=o=a,i(t,e))})},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)}}(),function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}),l=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),f=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,16)},m=(new Date).getTime(),p=function(){function t(e){c(this,t),e||(e={}),this.selector=e.container||e.root||"body",e.render&&(this.render=e.render),e.state&&(this.state=e.state),this.oldNode=null,this.selector&&(this.container=document.querySelector(this.selector)),this.componentShouldUpdate=!0,this.mounted=!1,this.element,e.beforeCreateComponent&&(this.beforeCreateComponent=e.beforeCreateComponent),(e.componentWillMount||this.componentWillMount)&&(this.beforeCreateComponent=e.componentWillMount||this.componentWillMount),e.componentWasCreated&&(this.componentWasCreated=e.componentWasCreated),(e.componentDidMount||this.componentDidMount)&&(this.componentWasCreated=e.componentDidMount||this.componentDidMount),e.componentWillUpdate&&(this.componentWillUpdate=e.componentWillUpdate),e.componentDidUpdate&&(this.componentDidUpdate=e.componentDidUpdate),e.componentWillUnmount&&(this.componentWillUnmount=e.componentWillUnmount)}return l(t,[{key:"setState",value:function(t,e){if("function"==typeof t){var n=t.call(this,this.state);"function"!=typeof n&&n&&this.setState(n)}if(Array.isArray(this.state)){var o=this.state;e||0===e?"object"===u(o[e])?(a(o[e],t),this.state=o):(o[e]=t,this.state=o):this.state=o}else if("object"===u(this.state)){var i=this.state;a(i,t),this.state=i}else this.state=t}},{key:"update",value:function(t){if(this.render&&(this.componentShouldUpdate||!this.mounted)){var e=this.state;!0!==t&&t&&(e=t),this.container&&"string"==typeof this.container&&(this.selector=this.container,this.container=document.querySelector(this.container));var o=this.render,i=this.render(e),r=void 0;if(i&&i.props&&i.props.id)try{r=this.container.querySelector("#"+i.props.id)}catch(t){}if(r&&!this.mounted&&r.parentNode.removeChild(r),this.element=n(this.oldNode,this.oldNode=this.render(e),this.element,this.container),!(this.mounted&&this.oldNode&&s(e)))return this.beforeCreateComponent&&this.beforeCreateComponent(this),this.componentWasCreated&&this.componentWasCreated(this),void(this.mounted=!0);this.componentWillUpdate&&this.componentWillUpdate(this),this.componentDidUpdate&&s(e)&&this.componentDidUpdate(this)}function s(t){try{return JSON.stringify(this.oldNode)!==JSON.stringify(o(t))}catch(t){return!0}}}},{key:"unmount",value:function(){var t=this;if(this.element){this.componentWillUnmount&&this.componentWillUnmount(this),["click","dblclick","mousedown","mouseup","mouseover","mouseout","mouseleave","select","input","change","keydown","keypress","keyup","submit"].map(function(e){t.element.removeEventListener(e,t)}),this.container.removeChild(this.element),this.container=void 0;for(var e in this)delete this[e];delete this.state,this.update=void 0,this.unmount=void 0}}},{key:"state",set:function(t){var e=this;this[m]=t,h(function(){return e.update()})},get:function(){return this[m]}}]),t}();window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(t){var e=(this.document||this.ownerDocument).querySelectorAll(t),n=void 0,o=this;do{for(n=e.length;--n>=0&&e.item(n)!==o;);}while(n<0&&(o=o.parentElement));return o});var d=new p({container:"header",render:function(e){return t("nav",null,t("i",{className:"fa fa-hourglass-half fa-3x text-white my-auto"}),t("h1",null,"Composi ",e))}}),y=function(){function t(){c(this,t)}return l(t,[{key:"getTime",value:function(t){var e=t,n=this.formatUnitOfTime(Math.floor(e/36e5));e%=36e5;var o=this.formatUnitOfTime(Math.floor(e/6e4));return e%=6e4,n+":"+o+":"+this.formatUnitOfTime(Math.floor(e/1e3))+":"+this.formatUnitOfTime(e%1e3)}},{key:"formatUnitOfTime",value:function(t){return t<10?("0"+t).substring(0,2):t.toString().substring(0,2)}}]),t}(),v=function(e,n){var o=new y,i={flex:1,color:e.time<=1e4?"#FE5C5C":""};return t("div",{className:"started"===e.status?"display running":"display"},"started"===e.status&&t("div",{className:e.time<=1e4?"time-display bold":"time-display",style:i},t("div",{class:"running-time"},o.getTime(e.time))),"started"!==e.status&&t("div",{className:"time-display d-flex flex-column"},t("div",{className:"text-info h6 align-self-center"},o.getTime(e.time)),t("input",{className:"display-time align-self-center",maxLength:"6",value:e.seconds,onInput:function(t){e.onSecondsChanged(t.target.value)}})),n)},b=function(e){return t("div",{className:"controls"},"started"!==e.status&&t("button",{className:"btn btn-lg btn-success",disabled:!e.canStart,onclick:function(){return e.startTimer()}},t("i",{className:"fa fa-play fa-2x mr-2 mb-3 text-right"})),"started"===e.status&&t("button",{className:"btn btn-lg btn-dark",onclick:e.stopTimer},t("i",{className:"fa fa-stop fa-2x mr-2 mb-3 text-right"})),t("button",{className:"btn btn-lg btn-primary",onclick:e.resetTimer},t("i",{className:"fa fa-refresh fa-2x ml-2 mb-3 text-left"})))},g=function(e){function n(t){c(this,n);var e=f(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.state={seconds:0,time:0,status:null},e.startTimer=e.startTimer.bind(e),e.stopTimer=e.stopTimer.bind(e),e.resetTimer=e.resetTimer.bind(e),e.onSecondsChanged=e.onSecondsChanged.bind(e),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,p),l(n,[{key:"componentDidMount",value:function(){this.element.querySelector(".display-time").focus()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"onSecondsChanged",value:function(t){(t=parseInt(t))&&"number"==typeof t?t<=359999&&this.setState(function(){return{seconds:t,time:1e3*t}}):this.setState(function(){return{seconds:0,time:0}})}},{key:"startTimer",value:function(){var t=this;"started"!==this.state.status&&(this.interval=setInterval(function(){0!==t.state.time?t.setState(function(t){return{time:t.time-10}}):(t.setState({seconds:0,status:null,time:0}),clearInterval(t.interval))},10),this.setState(function(){return{status:"started"}}))}},{key:"stopTimer",value:function(){this.state.status&&"started"===this.state.status&&(clearInterval(this.interval),this.setState(function(t){return{status:"stopped",seconds:Math.floor(t.time/1e3)}}))}},{key:"resetTimer",value:function(){clearInterval(this.interval),this.setState(function(){return{seconds:0,status:null,time:0}})}},{key:"render",value:function(){return t(v,{seconds:this.state.seconds,status:this.state.status,time:this.state.time,onSecondsChanged:this.onSecondsChanged},t(b,{startTimer:this.startTimer,stopTimer:this.stopTimer,resetTimer:this.resetTimer,status:this.state.status,canStart:this.state.seconds>0}))}}]),n}();d.setState("Timer - Basic"),new g}();
//# sourceMappingURL=app.js.map
