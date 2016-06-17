webpackJsonp([0],{3:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var r=n(1),o=i(r),u=o["default"].createActions(["show","hide"]);t.exports=u},5:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var r=n(2),o=i(r),u=n(1),c=i(u),a=n(7),s=i(a),f=o["default"].createClass({displayName:"Loading",mixins:[c["default"].connect(s["default"],"isLoading")],getInitialState:function(){return{isLoading:!1}},render:function(){return o["default"].createElement("div",{className:"cm-loading"+(this.state.isLoading?"":" hide")},o["default"].createElement("div",{className:"inner"},o["default"].createElement("span",null,"L"),o["default"].createElement("span",null,"O"),o["default"].createElement("span",null,"A"),o["default"].createElement("span",null,"D"),o["default"].createElement("span",null,"I"),o["default"].createElement("span",null,"N"),o["default"].createElement("span",null,"G"),o["default"].createElement("span",null,"...")))}});t.exports=f},6:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var r=n(2),o=i(r),u=n(1),c=i(u),a=n(8),s=i(a),f=o["default"].createClass({displayName:"Tips",mixins:[c["default"].connect(s["default"],"tips")],getInitialState:function(){return{tips:""}},render:function(){return o["default"].createElement("div",{className:""==this.state.tips?"cm-tips-box":"cm-tips-box cm-tips-box-show"},this.state.tips)}});t.exports=f},7:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var r=n(1),o=i(r),u=n(3),c=i(u),a=o["default"].createStore({init:function(){this.timeout=null,this.data={isLoading:!1},this.listenTo(c["default"].show,this.show),this.listenTo(c["default"].hide,this.hide)},show:function(){this.data.isLoading=!0,this.trigger(this.data.isLoading)},hide:function(){this.data.isLoading=!1,this.trigger(this.data.isLoading)}});t.exports=a},8:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var r=n(1),o=i(r),u=n(10),c=i(u),a=o["default"].createStore({init:function(){this.timeout=null,this.data={tips:""},this.listenTo(c["default"].setTips,this.setTips)},setTips:function(t){var e=this;e.data.tips=t,e.trigger(e.data.tips),clearTimeout(e.timeout),e.timeout=setTimeout(function(){e.data.tips="",e.trigger(e.data.tips)},3e3)}});t.exports=a},20:function(t,e,n){(function(t,i){function r(t,e){this._id=t,this._clearFn=e}var o=n(31).nextTick,u=Function.prototype.apply,c=Array.prototype.slice,a={},s=0;e.setTimeout=function(){return new r(u.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new r(u.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},e.setImmediate="function"==typeof t?t:function(t){var n=s++,i=arguments.length<2?!1:c.call(arguments,1);return a[n]=!0,o(function(){a[n]&&(i?t.apply(null,i):t.call(null),e.clearImmediate(n))}),n},e.clearImmediate="function"==typeof i?i:function(t){delete a[t]}}).call(e,n(20).setImmediate,n(20).clearImmediate)},26:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var r=n(2),o=i(r),u=n(1),c=i(u),a=n(19),s=i(a),f=n(46),l=i(f),p=(n(4),n(38)),d=i(p),h=n(15),y=i(h),m=n(36),v=i(m),g=n(13),k=i(g),w=n(3),T=i(w),b=n(5),j=i(b),x=n(6),E=i(x),I=o["default"].createClass({displayName:"MenuList",mixins:[c["default"].connect(d["default"],"menus"),c["default"].connect(v["default"],"checkedList")],getInitialState:function(){return{menus:null,checkedList:[]}},componentWillMount:function(){var t=this,e=function(){var e=l["default"].defer();return y["default"].getData(t.props.location.query.id,function(){e.resolve()}),e.promise},n=function(){var e=l["default"].defer();return k["default"].getData(t.props.location.query.id,function(){e.resolve()}),e.promise};T["default"].show(),l["default"].allSettled([e(),n()]).done(function(t){T["default"].hide()})},check:function(t){var e=this;T["default"].show(),k["default"].check({shopId:e.props.location.query.id,foodId:t},function(){T["default"].hide()})},cancel:function(t){var e=this;T["default"].show(),k["default"].cancel({shopId:e.props.location.query.id,foodId:t},function(){T["default"].show()})},render:function(){var t=this,e=null,n=this.state.checkedList,i=this.check,r=this.cancel;return e=this.state.menus&&0==this.state.menus.length?o["default"].createElement("div",{className:"cm-no-data"},o["default"].createElement("i",{className:"face"}),o["default"].createElement("p",{className:"text"},"这家店不想混了，菜单空无一物")):o["default"].createElement("ul",{className:"menu-list"},this.state.menus&&this.state.menus.map(function(e,u){var c=!1;return-1!=s["default"].indexOf(n,e.id)&&(c=!0),o["default"].createElement("li",{className:"item"},o["default"].createElement("p",{className:"title"},e.name,o["default"].createElement("em",{className:"cm-text-red"},"（",e.price,"元）")),o["default"].createElement("button",{className:"btn",style:{display:c?"none":""},onClick:i.bind(t,e.id)},"点餐"),o["default"].createElement("button",{className:"btn btn-cancel",style:{display:c?"":"none"},onClick:r.bind(t,e.id)},"取消"))})),o["default"].createElement("div",null,e,o["default"].createElement(j["default"],null),o["default"].createElement(E["default"],null))}});t.exports=I},31:function(t,e){function n(){s&&u&&(s=!1,u.length?a=u.concat(a):f=-1,a.length&&i())}function i(){if(!s){var t=setTimeout(n);s=!0;for(var e=a.length;e;){for(u=a,a=[];++f<e;)u&&u[f].run();f=-1,e=a.length}u=null,s=!1,clearTimeout(t)}}function r(t,e){this.fun=t,this.array=e}function o(){}var u,c=t.exports={},a=[],s=!1,f=-1;c.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];a.push(new r(t,e)),1!==a.length||s||setTimeout(i,0)},r.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=o,c.addListener=o,c.once=o,c.off=o,c.removeListener=o,c.removeAllListeners=o,c.emit=o,c.binding=function(t){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(t){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},36:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var r=n(1),o=i(r),u=n(13),c=i(u),a=o["default"].createStore({init:function(){this.data={checkedList:[]},this.listenTo(c["default"].getData,this.getData),this.listenTo(c["default"].setData,this.setData),this.listenTo(c["default"].check,this.check),this.listenTo(c["default"].cancel,this.cancel)},getData:function(t,e){ws.send(JSON.stringify({method:"getCheckedList",data:{shopId:t}})),this.cb=e},setData:function(t){this.data.checkedList=t,this.trigger(this.data.checkedList),this.cb&&this.cb(),this.cb=null},check:function(t,e){ws.send(JSON.stringify({method:"check",data:{shopId:t.shopId,foodId:t.foodId}})),this.cb=e},cancel:function(t,e){ws.send(JSON.stringify({method:"cancel",data:{shopId:t.shopId,foodId:t.foodId}})),this.cb=e}});t.exports=a},38:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var r=n(1),o=i(r),u=n(15),c=i(u),a=o["default"].createStore({init:function(){this.data={menus:[]},this.cb=null,this.listenTo(c["default"].getData,this.getData),this.listenTo(c["default"].setData,this.setData)},getData:function(t,e){ws.send(JSON.stringify({method:"getMenuList",data:{shopId:t}})),this.cb=e},setData:function(t){this.data.menus=t,this.trigger(this.data.menus),this.cb&&this.cb(),this.cb=null}});t.exports=a},46:function(t,e,n){(function(e,n){/*!
	 *
	 * Copyright 2009-2012 Kris Kowal under the terms of the MIT
	 * license found at http://github.com/kriskowal/q/raw/master/LICENSE
	 *
	 * With parts by Tyler Close
	 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
	 * at http://www.opensource.org/licenses/mit-license.html
	 * Forked at ref_send.js version: 2009-05-11
	 *
	 * With parts by Mark Miller
	 * Copyright (C) 2011 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */
!function(e){"use strict";if("function"==typeof bootstrap)bootstrap("promise",e);else{t.exports=e()}}(function(){"use strict";function t(t){return function(){return K.apply(t,arguments)}}function i(t){return t===Object(t)}function r(t){return"[object StopIteration]"===rt(t)||t instanceof V}function o(t,e){if(Q&&e.stack&&"object"==typeof t&&null!==t&&t.stack&&-1===t.stack.indexOf(ot)){for(var n=[],i=e;i;i=i.source)i.stack&&n.unshift(i.stack);n.unshift(t.stack);var r=n.join("\n"+ot+"\n");t.stack=u(r)}}function u(t){for(var e=t.split("\n"),n=[],i=0;i<e.length;++i){var r=e[i];s(r)||c(r)||!r||n.push(r)}return n.join("\n")}function c(t){return-1!==t.indexOf("(module.js:")||-1!==t.indexOf("(node.js:")}function a(t){var e=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);if(e)return[e[1],Number(e[2])];var n=/at ([^ ]+):(\d+):(?:\d+)$/.exec(t);if(n)return[n[1],Number(n[2])];var i=/.*@(.+):(\d+)$/.exec(t);return i?[i[1],Number(i[2])]:void 0}function s(t){var e=a(t);if(!e)return!1;var n=e[0],i=e[1];return n===G&&i>=H&&ft>=i}function f(){if(Q)try{throw new Error}catch(t){var e=t.stack.split("\n"),n=e[0].indexOf("@")>0?e[1]:e[2],i=a(n);if(!i)return;return G=i[0],i[1]}}function l(t,e,n){return function(){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(e+" is deprecated, use "+n+" instead.",new Error("").stack),t.apply(t,arguments)}}function p(t){return t instanceof m?t:w(t)?S(t):_(t)}function d(){function t(t){e=t,o.source=t,Y(n,function(e,n){p.nextTick(function(){t.promiseDispatch.apply(t,n)})},void 0),n=void 0,i=void 0}var e,n=[],i=[],r=et(d.prototype),o=et(m.prototype);if(o.promiseDispatch=function(t,r,o){var u=X(arguments);n?(n.push(u),"when"===r&&o[1]&&i.push(o[1])):p.nextTick(function(){e.promiseDispatch.apply(e,u)})},o.valueOf=function(){if(n)return o;var t=g(e);return k(t)&&(e=t),t},o.inspect=function(){return e?e.inspect():{state:"pending"}},p.longStackSupport&&Q)try{throw new Error}catch(u){o.stack=u.stack.substring(u.stack.indexOf("\n")+1)}return r.promise=o,r.resolve=function(n){e||t(p(n))},r.fulfill=function(n){e||t(_(n))},r.reject=function(n){e||t(N(n))},r.notify=function(t){e||Y(i,function(e,n){p.nextTick(function(){n(t)})},void 0)},r}function h(t){if("function"!=typeof t)throw new TypeError("resolver must be a function.");var e=d();try{t(e.resolve,e.reject,e.notify)}catch(n){e.reject(n)}return e.promise}function y(t){return h(function(e,n){for(var i=0,r=t.length;r>i;i++)p(t[i]).then(e,n)})}function m(t,e,n){void 0===e&&(e=function(t){return N(new Error("Promise does not support operation: "+t))}),void 0===n&&(n=function(){return{state:"unknown"}});var i=et(m.prototype);if(i.promiseDispatch=function(n,r,o){var u;try{u=t[r]?t[r].apply(i,o):e.call(i,r,o)}catch(c){u=N(c)}n&&n(u)},i.inspect=n,n){var r=n();"rejected"===r.state&&(i.exception=r.reason),i.valueOf=function(){var t=n();return"pending"===t.state||"rejected"===t.state?i:t.value}}return i}function v(t,e,n,i){return p(t).then(e,n,i)}function g(t){if(k(t)){var e=t.inspect();if("fulfilled"===e.state)return e.value}return t}function k(t){return t instanceof m}function w(t){return i(t)&&"function"==typeof t.then}function T(t){return k(t)&&"pending"===t.inspect().state}function b(t){return!k(t)||"fulfilled"===t.inspect().state}function j(t){return k(t)&&"rejected"===t.inspect().state}function x(){ut.length=0,ct.length=0,st||(st=!0)}function E(t,n){st&&("object"==typeof e&&"function"==typeof e.emit&&p.nextTick.runAfter(function(){-1!==Z(ct,t)&&(e.emit("unhandledRejection",n,t),at.push(t))}),ct.push(t),n&&"undefined"!=typeof n.stack?ut.push(n.stack):ut.push("(no stack) "+n))}function I(t){if(st){var n=Z(ct,t);-1!==n&&("object"==typeof e&&"function"==typeof e.emit&&p.nextTick.runAfter(function(){var i=Z(at,t);-1!==i&&(e.emit("rejectionHandled",ut[n],t),at.splice(i,1))}),ct.splice(n,1),ut.splice(n,1))}}function N(t){var e=m({when:function(e){return e&&I(this),e?e(t):this}},function(){return this},function(){return{state:"rejected",reason:t}});return E(e,t),e}function _(t){return m({when:function(){return t},get:function(e){return t[e]},set:function(e,n){t[e]=n},"delete":function(e){delete t[e]},post:function(e,n){return null===e||void 0===e?t.apply(void 0,n):t[e].apply(t,n)},apply:function(e,n){return t.apply(e,n)},keys:function(){return it(t)}},void 0,function(){return{state:"fulfilled",value:t}})}function S(t){var e=d();return p.nextTick(function(){try{t.then(e.resolve,e.reject,e.notify)}catch(n){e.reject(n)}}),e.promise}function R(t){return m({isDef:function(){}},function(e,n){return C(t,e,n)},function(){return p(t).inspect()})}function D(t,e,n){return p(t).spread(e,n)}function L(t){return function(){function e(t,e){var u;if("undefined"==typeof StopIteration){try{u=n[t](e)}catch(c){return N(c)}return u.done?p(u.value):v(u.value,i,o)}try{u=n[t](e)}catch(c){return r(c)?p(c.value):N(c)}return v(u,i,o)}var n=t.apply(this,arguments),i=e.bind(e,"next"),o=e.bind(e,"throw");return i()}}function O(t){p.done(p.async(t)())}function M(t){throw new V(t)}function A(t){return function(){return D([this,P(arguments)],function(e,n){return t.apply(e,n)})}}function C(t,e,n){return p(t).dispatch(e,n)}function P(t){return v(t,function(t){var e=0,n=d();return Y(t,function(i,r,o){var u;k(r)&&"fulfilled"===(u=r.inspect()).state?t[o]=u.value:(++e,v(r,function(i){t[o]=i,0===--e&&n.resolve(t)},n.reject,function(t){n.notify({index:o,value:t})}))},void 0),0===e&&n.resolve(t),n.promise})}function F(t){if(0===t.length)return p.resolve();var e=p.defer(),n=0;return Y(t,function(i,r,o){function u(t){e.resolve(t)}function c(){n--,0===n&&e.reject(new Error("Can't get fulfillment value from any promise, all promises were rejected."))}function a(t){e.notify({index:o,value:t})}var s=t[o];n++,v(s,u,c,a)},void 0),e.promise}function J(t){return v(t,function(t){return t=tt(t,p),v(P(tt(t,function(t){return v(t,W,W)})),function(){return t})})}function U(t){return p(t).allSettled()}function q(t,e){return p(t).then(void 0,void 0,e)}function B(t,e){return p(t).nodeify(e)}var Q=!1;try{throw new Error}catch($){Q=!!$.stack}var G,V,H=f(),W=function(){},z=function(){function t(){for(var t,e;r.next;)r=r.next,t=r.task,r.task=void 0,e=r.domain,e&&(r.domain=void 0,e.enter()),i(t,e);for(;s.length;)t=s.pop(),i(t);u=!1}function i(e,n){try{e()}catch(i){if(a)throw n&&n.exit(),setTimeout(t,0),n&&n.enter(),i;setTimeout(function(){throw i},0)}n&&n.exit()}var r={task:void 0,next:null},o=r,u=!1,c=void 0,a=!1,s=[];if(z=function(t){o=o.next={task:t,domain:a&&e.domain,next:null},u||(u=!0,c())},"object"==typeof e&&"[object process]"===e.toString()&&e.nextTick)a=!0,c=function(){e.nextTick(t)};else if("function"==typeof n)c="undefined"!=typeof window?n.bind(window,t):function(){n(t)};else if("undefined"!=typeof MessageChannel){var f=new MessageChannel;f.port1.onmessage=function(){c=l,f.port1.onmessage=t,t()};var l=function(){f.port2.postMessage(0)};c=function(){setTimeout(t,0),l()}}else c=function(){setTimeout(t,0)};return z.runAfter=function(t){s.push(t),u||(u=!0,c())},z}(),K=Function.call,X=t(Array.prototype.slice),Y=t(Array.prototype.reduce||function(t,e){var n=0,i=this.length;if(1===arguments.length)for(;;){if(n in this){e=this[n++];break}if(++n>=i)throw new TypeError}for(;i>n;n++)n in this&&(e=t(e,this[n],n));return e}),Z=t(Array.prototype.indexOf||function(t){for(var e=0;e<this.length;e++)if(this[e]===t)return e;return-1}),tt=t(Array.prototype.map||function(t,e){var n=this,i=[];return Y(n,function(r,o,u){i.push(t.call(e,o,u,n))},void 0),i}),et=Object.create||function(t){function e(){}return e.prototype=t,new e},nt=t(Object.prototype.hasOwnProperty),it=Object.keys||function(t){var e=[];for(var n in t)nt(t,n)&&e.push(n);return e},rt=t(Object.prototype.toString);V="undefined"!=typeof ReturnValue?ReturnValue:function(t){this.value=t};var ot="From previous event:";p.resolve=p,p.nextTick=z,p.longStackSupport=!1,"object"==typeof e&&e&&e.env&&e.env.Q_DEBUG&&(p.longStackSupport=!0),p.defer=d,d.prototype.makeNodeResolver=function(){var t=this;return function(e,n){e?t.reject(e):arguments.length>2?t.resolve(X(arguments,1)):t.resolve(n)}},p.Promise=h,p.promise=h,h.race=y,h.all=P,h.reject=N,h.resolve=p,p.passByCopy=function(t){return t},m.prototype.passByCopy=function(){return this},p.join=function(t,e){return p(t).join(e)},m.prototype.join=function(t){return p([this,t]).spread(function(t,e){if(t===e)return t;throw new Error("Can't join: not the same: "+t+" "+e)})},p.race=y,m.prototype.race=function(){return this.then(p.race)},p.makePromise=m,m.prototype.toString=function(){return"[object Promise]"},m.prototype.then=function(t,e,n){function i(e){try{return"function"==typeof t?t(e):e}catch(n){return N(n)}}function r(t){if("function"==typeof e){o(t,c);try{return e(t)}catch(n){return N(n)}}return N(t)}function u(t){return"function"==typeof n?n(t):t}var c=this,a=d(),s=!1;return p.nextTick(function(){c.promiseDispatch(function(t){s||(s=!0,a.resolve(i(t)))},"when",[function(t){s||(s=!0,a.resolve(r(t)))}])}),c.promiseDispatch(void 0,"when",[void 0,function(t){var e,n=!1;try{e=u(t)}catch(i){if(n=!0,!p.onerror)throw i;p.onerror(i)}n||a.notify(e)}]),a.promise},p.tap=function(t,e){return p(t).tap(e)},m.prototype.tap=function(t){return t=p(t),this.then(function(e){return t.fcall(e).thenResolve(e)})},p.when=v,m.prototype.thenResolve=function(t){return this.then(function(){return t})},p.thenResolve=function(t,e){return p(t).thenResolve(e)},m.prototype.thenReject=function(t){return this.then(function(){throw t})},p.thenReject=function(t,e){return p(t).thenReject(e)},p.nearer=g,p.isPromise=k,p.isPromiseAlike=w,p.isPending=T,m.prototype.isPending=function(){return"pending"===this.inspect().state},p.isFulfilled=b,m.prototype.isFulfilled=function(){return"fulfilled"===this.inspect().state},p.isRejected=j,m.prototype.isRejected=function(){return"rejected"===this.inspect().state};var ut=[],ct=[],at=[],st=!0;p.resetUnhandledRejections=x,p.getUnhandledReasons=function(){return ut.slice()},p.stopUnhandledRejectionTracking=function(){x(),st=!1},x(),p.reject=N,p.fulfill=_,p.master=R,p.spread=D,m.prototype.spread=function(t,e){return this.all().then(function(e){return t.apply(void 0,e)},e)},p.async=L,p.spawn=O,p["return"]=M,p.promised=A,p.dispatch=C,m.prototype.dispatch=function(t,e){var n=this,i=d();return p.nextTick(function(){n.promiseDispatch(i.resolve,t,e)}),i.promise},p.get=function(t,e){return p(t).dispatch("get",[e])},m.prototype.get=function(t){return this.dispatch("get",[t])},p.set=function(t,e,n){return p(t).dispatch("set",[e,n])},m.prototype.set=function(t,e){return this.dispatch("set",[t,e])},p.del=p["delete"]=function(t,e){return p(t).dispatch("delete",[e])},m.prototype.del=m.prototype["delete"]=function(t){return this.dispatch("delete",[t])},p.mapply=p.post=function(t,e,n){return p(t).dispatch("post",[e,n])},m.prototype.mapply=m.prototype.post=function(t,e){return this.dispatch("post",[t,e])},p.send=p.mcall=p.invoke=function(t,e){return p(t).dispatch("post",[e,X(arguments,2)])},m.prototype.send=m.prototype.mcall=m.prototype.invoke=function(t){return this.dispatch("post",[t,X(arguments,1)])},p.fapply=function(t,e){return p(t).dispatch("apply",[void 0,e])},m.prototype.fapply=function(t){return this.dispatch("apply",[void 0,t])},p["try"]=p.fcall=function(t){return p(t).dispatch("apply",[void 0,X(arguments,1)])},m.prototype.fcall=function(){return this.dispatch("apply",[void 0,X(arguments)])},p.fbind=function(t){var e=p(t),n=X(arguments,1);return function(){return e.dispatch("apply",[this,n.concat(X(arguments))])}},m.prototype.fbind=function(){var t=this,e=X(arguments);return function(){return t.dispatch("apply",[this,e.concat(X(arguments))])}},p.keys=function(t){return p(t).dispatch("keys",[])},m.prototype.keys=function(){return this.dispatch("keys",[])},p.all=P,m.prototype.all=function(){return P(this)},p.any=F,m.prototype.any=function(){return F(this)},p.allResolved=l(J,"allResolved","allSettled"),m.prototype.allResolved=function(){return J(this)},p.allSettled=U,m.prototype.allSettled=function(){return this.then(function(t){return P(tt(t,function(t){function e(){return t.inspect()}return t=p(t),t.then(e,e)}))})},p.fail=p["catch"]=function(t,e){return p(t).then(void 0,e)},m.prototype.fail=m.prototype["catch"]=function(t){return this.then(void 0,t)},p.progress=q,m.prototype.progress=function(t){return this.then(void 0,void 0,t)},p.fin=p["finally"]=function(t,e){return p(t)["finally"](e)},m.prototype.fin=m.prototype["finally"]=function(t){return t=p(t),this.then(function(e){return t.fcall().then(function(){return e})},function(e){return t.fcall().then(function(){throw e})})},p.done=function(t,e,n,i){return p(t).done(e,n,i)},m.prototype.done=function(t,n,i){var r=function(t){p.nextTick(function(){if(o(t,u),!p.onerror)throw t;p.onerror(t)})},u=t||n||i?this.then(t,n,i):this;"object"==typeof e&&e&&e.domain&&(r=e.domain.bind(r)),u.then(void 0,r)},p.timeout=function(t,e,n){return p(t).timeout(e,n)},m.prototype.timeout=function(t,e){var n=d(),i=setTimeout(function(){e&&"string"!=typeof e||(e=new Error(e||"Timed out after "+t+" ms"),e.code="ETIMEDOUT"),n.reject(e)},t);return this.then(function(t){clearTimeout(i),n.resolve(t)},function(t){clearTimeout(i),n.reject(t)},n.notify),n.promise},p.delay=function(t,e){return void 0===e&&(e=t,t=void 0),p(t).delay(e)},m.prototype.delay=function(t){return this.then(function(e){var n=d();return setTimeout(function(){n.resolve(e)},t),n.promise})},p.nfapply=function(t,e){return p(t).nfapply(e)},m.prototype.nfapply=function(t){var e=d(),n=X(t);return n.push(e.makeNodeResolver()),this.fapply(n).fail(e.reject),e.promise},p.nfcall=function(t){var e=X(arguments,1);return p(t).nfapply(e)},m.prototype.nfcall=function(){var t=X(arguments),e=d();return t.push(e.makeNodeResolver()),this.fapply(t).fail(e.reject),e.promise},p.nfbind=p.denodeify=function(t){var e=X(arguments,1);return function(){var n=e.concat(X(arguments)),i=d();return n.push(i.makeNodeResolver()),p(t).fapply(n).fail(i.reject),i.promise}},m.prototype.nfbind=m.prototype.denodeify=function(){var t=X(arguments);return t.unshift(this),p.denodeify.apply(void 0,t)},p.nbind=function(t,e){var n=X(arguments,2);return function(){function i(){return t.apply(e,arguments)}var r=n.concat(X(arguments)),o=d();return r.push(o.makeNodeResolver()),p(i).fapply(r).fail(o.reject),o.promise}},m.prototype.nbind=function(){var t=X(arguments,0);return t.unshift(this),p.nbind.apply(void 0,t)},p.nmapply=p.npost=function(t,e,n){return p(t).npost(e,n)},m.prototype.nmapply=m.prototype.npost=function(t,e){var n=X(e||[]),i=d();return n.push(i.makeNodeResolver()),this.dispatch("post",[t,n]).fail(i.reject),i.promise},p.nsend=p.nmcall=p.ninvoke=function(t,e){var n=X(arguments,2),i=d();return n.push(i.makeNodeResolver()),p(t).dispatch("post",[e,n]).fail(i.reject),i.promise},m.prototype.nsend=m.prototype.nmcall=m.prototype.ninvoke=function(t){var e=X(arguments,1),n=d();return e.push(n.makeNodeResolver()),this.dispatch("post",[t,e]).fail(n.reject),n.promise},p.nodeify=B,m.prototype.nodeify=function(t){return t?void this.then(function(e){p.nextTick(function(){t(null,e)})},function(e){p.nextTick(function(){t(e)})}):this},p.noConflict=function(){throw new Error("Q.noConflict only works when Q is used as a global")};var ft=f();return p})}).call(e,n(31),n(20).setImmediate)}});