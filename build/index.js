module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){e.exports=n(3)()},function(e,t){e.exports=require("react")},function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(7)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";var r=n(4);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){(e.exports=n(6)(!1)).push([e.i,".er-tooltip {\n    position: absolute;\n}\n\n.er-tooltip-content {\n    background-color: #0f0b11;\n    box-shadow: 0px 2px 3px rgba(0,0,0,.13) ,1px 2px 2px rgba(0,0,0,.1) , -1px -2px 2px rgba(0,0,0,.05) ;\n    padding: 0.25rem 0.5rem;\n    border-radius: 0.125rem;\n    font-size: 0.75rem;\n    color: #ecebed;\n}\n\n.er-tooltip-arrow {\n    width: 0;\n    height: 0;\n    position: absolute;\n    top: -5px;\n    left: 50%;\n    margin-left: -5px;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid #0f0b11;\n}\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(u," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,l,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<e.length;a++){var l=e[a];null!=l[0]&&r[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="(".concat(l[2],") and (").concat(n,")")),t.push(l))}},t}},function(e,t,n){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function l(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}function u(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(h(r.parts[a],t))}else{for(var l=[];a<r.parts.length;a++)l.push(h(r.parts[a],t));o[r.id]={id:r.id,refs:1,parts:l}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var s,p=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=p(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function b(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o&&e.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var d=null,y=0;function h(e,t){var n,r,o;if(t.singleton){var i=y++;n=d||(d=c(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=c(t),r=b.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=l(e,t);return u(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var a=n[i],c=o[a.id];c&&(c.refs--,r.push(c))}e&&u(l(e,t),t);for(var s=0;s<r.length;s++){var p=r[s];if(0===p.refs){for(var f=0;f<p.parts.length;f++)p.parts[f]();delete o[p.id]}}}}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(0),a=n.n(i);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,s(t).call(this,e))).tooltipRef=o.a.createRef(),n.state={width:null,visible:!1},n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.tooltipRef.current;this.setState({width:e.offsetWidth,visible:!0})}},{key:"render",value:function(){var e=this.props,t=e.position,n=e.label,r=this.state,i=r.width,a=r.visible,l=t.top+t.height+7,u=t.left+t.width/2-i/2,c={};return u<7&&(u=7,c.left="".concat(t.left+t.width/2-u,"px")),u+i>window.innerWidth-7&&(u=window.innerWidth-7-i,c.left="".concat(t.left+t.width/2-u,"px")),o.a.createElement("div",{className:"er-tooltip",style:{left:"".concat(u,"px"),top:"".concat(l,"px"),opacity:a?1:0},ref:this.tooltipRef},o.a.createElement("div",{className:"er-tooltip-content"},n),o.a.createElement("span",{className:"er-tooltip-arrow",style:c}))}}])&&u(n.prototype,r),i&&u(n,i),t}(r.Component);f.propTypes={position:a.a.object.isRequired,label:a.a.string.isRequired};n(2);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h=function(e){var t=e.label,n=e.tag,i=e.children,a=e.enableTooltip,l=e.disableTooltip,u=e.visible,c=e.selected,s=e.position,p=(e.enabled,y(e,["label","tag","children","enableTooltip","disableTooltip","visible","selected","position","enabled"])),h={tag:n},v=d(Object(r.useState)("xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))),1)[0];return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.tag,b({onMouseEnter:function(e){a(v,e.currentTarget.getBoundingClientRect())},onMouseLeave:function(){return l()}},p),i),u&&c===v&&o.a.createElement(f,{label:t,position:s}))};h.propTypes={tag:a.a.string,label:a.a.string,children:a.a.node,enableTooltip:a.a.func.isRequired,disableTooltip:a.a.func.isRequired,visible:a.a.bool.isRequired,enabled:a.a.bool.isRequired,selected:a.a.string,position:a.a.object.isRequired},h.defaultProps={tag:"div",label:"",children:null,selected:null};var v=h;function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _,P,E={enabled:!1,visible:!1,selected:null,position:{}},R=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=T(t).call(this,e),n=!o||"object"!==m(o)&&"function"!=typeof o?w(r):o,S(w(n),"enableTooltip",(function(e,t){clearTimeout(_),_=setTimeout((function(){E.visible=!0,n.setState({})}),n.state.delayBeforeTooltip),E.enabled=!0,E.selected=e,E.position=t,n.setState({})})),S(w(n),"disableTooltip",(function(){clearTimeout(P),P=setTimeout((function(){E.enabled||(E.visible=!1,n.setState({}))}),n.state.keepTooltipAlive),E.enabled=!1,E.selected=null,E.position={},n.setState({})})),n.state={delayBeforeTooltip:e.delayBeforeTooltip,keepTooltipAlive:e.keepTooltipAlive},console.log(n.state),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=(e.delayBeforeTooltip,e.keepTooltipAlive,x(e,["delayBeforeTooltip","keepTooltipAlive"]));return o.a.createElement(v,g({},t,{enableTooltip:this.enableTooltip,disableTooltip:this.disableTooltip},E))}}])&&O(n.prototype,r),i&&O(n,i),t}(r.Component);R.propTypes={tag:a.a.string,label:a.a.string,delayBeforeTooltip:a.a.number,keepTooltipAlive:a.a.number},R.defaultProps={tag:"div",label:"",delayBeforeTooltip:500,keepTooltipAlive:1e3};t.default=R}]);