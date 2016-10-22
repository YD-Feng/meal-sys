webpackJsonp([8],{0:function(t,n,e){e(44),t.exports=e(20)},20:function(t,n,e){"use strict";e(32),e(24)();var o=e(19),i=e(18),r=e(42),s=e(41);o.use(i),o.use(r),window.router=new i({saveScrollPosition:!0,transitionOnLoad:!0,routes:e(21)}),router.beforeEach(function(t,n,e){"login"==t.name||localStorage.getItem("userName")?e():router.push({path:"/login"})}),window.store=new r.Store({modules:{tips:e(23),loading:e(22)},strict:!1,middlewares:[s()]}),window.app=new o({router:router,store:store}).$mount("#app")},21:function(t,n,e){t.exports=[{path:"/",name:"login",component:function(t){e.e(0,function(n){t(e(7))})}},{path:"/login",name:"login",component:function(t){e.e(0,function(n){t(e(7))})}},{path:"/main",name:"main",component:function(t){e.e(2,function(n){t(e(12))})},children:[{path:"",redirect:"bookList"},{path:"bookList",name:"bookList",component:function(t){e.e(7,function(n){t(e(13))})}},{path:"shopList",name:"shopList",component:function(t){e.e(6,function(n){t(e(14))})}}]},{path:"/staple",name:"staple",component:function(t){e.e(1,function(n){t(e(15))})},children:[{path:"",redirect:"menuList"},{path:"menuList",name:"menuList",component:function(t){e.e(5,function(n){t(e(16))})}},{path:"stapleDetail",name:"stapleDetail",component:function(t){e.e(4,function(n){t(e(17))})}}]}]},22:function(t,n){t.exports={state:{isShow:!1},mutations:{SHOW_LOADING:function(t){t.isShow=!0},HIDE_LOADING:function(t){t.isShow=!1}},actions:{showLoading:function(t){t.commit("SHOW_LOADING")},hideLoading:function(t){t.commit("HIDE_LOADING")}}}},23:function(t,n){var e=null;t.exports={state:{msg:""},mutations:{SET_TIPS_MSG:function(t,n){t.msg=n,clearTimeout(e),e=setTimeout(function(){t.msg=""},3e3)}},actions:{showTips:function(t,n){t.commit("SET_TIPS_MSG",n)}}}},24:function(t,n){t.exports=function(){var t="10.7.204.128",n=9527,e="ws://"+t+":"+n+"/";window.ws=new WebSocket(e),window.wsCount=0,ws.onmessage=function(t){var n=JSON.parse(t.data),e={loginSuccess:function(){localStorage.setItem("userName",vm.name),router.push({name:"main"})},loginFail:function(){vm.$store.dispatch("showTips",JSON.parse(t.data).data)},logoutSuccess:function(){localStorage.removeItem("userName"),router.push({name:"login"})},getShopListSuccess:function(){vm.list=JSON.parse(t.data).data},launchSuccess:function(){vm.goTo()},launchFail:function(){vm.$store.dispatch("showTips",JSON.parse(t.data).data)},getBookListSuccess:function(){vm.list=JSON.parse(t.data).data},getMenuListSuccess:function(){vm.menuList=JSON.parse(t.data).data},getCheckedListSuccess:function(){vm.checkedList=JSON.parse(t.data).data},getStapleListSuccess:function(){vm.stapleList=JSON.parse(t.data).data},bookFinish:function(){vm.$store.dispatch("showTips",JSON.parse(t.data).data),setTimeout(function(){router.push({path:"/main"})},3e3)},finishSuccess:function(){vm.$store.dispatch("showTips",JSON.parse(t.data).data),setTimeout(function(){router.push({path:"/main"})},3e3)},finishFail:function(){vm.$store.dispatch("showTips",JSON.parse(t.data).data)}};e[n.method]&&e[n.method](n.data),window.wsCount>0&&window.wsCount--,0==window.wsCount&&vm.$store.dispatch("hideLoading")},window.sendWsMsg=function(t){vm.$store.dispatch("showLoading"),window.wsCount++,ws.send(t)}}},32:function(t,n){},41:function(t,n,e){!function(n,e){t.exports=e()}(this,function(){"use strict";function t(t,n){return t.filter(n)[0]}function n(e,o){if(void 0===o&&(o=[]),null===e||"object"!=typeof e)return e;var i=t(o,function(t){return t.original===e});if(i)return i.copy;var r=Array.isArray(e)?[]:{};return o.push({original:e,copy:r}),Object.keys(e).forEach(function(t){r[t]=n(e[t],o)}),r}function e(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var o=t.transformer;void 0===o&&(o=function(t){return t});var r=t.mutationTransformer;return void 0===r&&(r=function(t){return t}),function(t){var s=n(t.state);t.subscribe(function(t,a){if("undefined"!=typeof console){var c=n(a),u=new Date,f=" @ "+i(u.getHours(),2)+":"+i(u.getMinutes(),2)+":"+i(u.getSeconds(),2)+"."+i(u.getMilliseconds(),3),l=r(t),d="mutation "+t.type+f,p=e?console.groupCollapsed:console.group;try{p.call(console,d)}catch(h){console.log(d)}console.log("%c prev state","color: #9E9E9E; font-weight: bold",o(s)),console.log("%c mutation","color: #03A9F4; font-weight: bold",l),console.log("%c next state","color: #4CAF50; font-weight: bold",o(c));try{console.groupEnd()}catch(h){console.log("—— log end ——")}s=c}})}}function o(t,n){return new Array(n+1).join(t)}function i(t,n){return o("0",n-t.toString().length)+t}return e})},42:function(t,n,e){/**
	 * vuex v2.0.0
	 * (c) 2016 Evan You
	 * @license MIT
	 */
!function(n,e){t.exports=e()}(this,function(){"use strict";function t(t){b&&(t._devtoolHook=b,b.emit("vuex:init",t),b.on("vuex:travel-to-state",function(n){t.replaceState(n)}),t.subscribe(function(t,n){b.emit("vuex:mutation",t,n)}))}function n(t){function n(){var t=this.$options;t.store?this.$store=t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}var e=Number(t.version.split(".")[0]);if(e>=2){var o=t.config._lifecycleHooks.indexOf("init")>-1;t.mixin(o?{init:n}:{beforeCreate:n})}else{var i=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,i.call(this,t)}}}function e(t){var n={};return s(t).forEach(function(t){var e=t.key,o=t.val;n[e]=function(){return"function"==typeof o?o.call(this,this.$store.state,this.$store.getters):this.$store.state[o]}}),n}function o(t){var n={};return s(t).forEach(function(t){var e=t.key,o=t.val;n[e]=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return this.$store.commit.apply(this.$store,[o].concat(t))}}),n}function i(t){var n={};return s(t).forEach(function(t){var e=t.key,o=t.val;n[e]=function(){return o in this.$store.getters||console.error("[vuex] unknown getter: "+o),this.$store.getters[o]}}),n}function r(t){var n={};return s(t).forEach(function(t){var e=t.key,o=t.val;n[e]=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return this.$store.dispatch.apply(this.$store,[o].concat(t))}}),n}function s(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(n){return{key:n,val:t[n]}})}function a(t){return null!==t&&"object"==typeof t}function c(t){return t&&"function"==typeof t.then}function u(t,n){if(!t)throw new Error("[vuex] "+n)}function f(t,n){if(n.actions&&(t.actions=n.actions),n.mutations&&(t.mutations=n.mutations),n.getters&&(t.getters=n.getters),n.modules)for(var e in n.modules){if(!t.modules||!t.modules[e])return void console.warn("[vuex] trying to add a new module '"+e+"' on hot reloading, manual reload is needed");f(t.modules[e],n.modules[e])}}function l(t){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null);var n=t.state;p(t,n,[],t._options,!0),Object.keys(t._runtimeModules).forEach(function(e){p(t,n,e.split("."),t._runtimeModules[e],!0)}),d(t,n)}function d(t,n){var e=t._vm;t.getters={};var o=t._wrappedGetters,i={};Object.keys(o).forEach(function(n){var e=o[n];i[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]}})});var r=_.config.silent;_.config.silent=!0,t._vm=new _({data:{state:n},computed:i}),_.config.silent=r,t.strict&&w(t),e&&(t._withCommit(function(){e.state=null}),_.nextTick(function(){return e.$destroy()}))}function p(t,n,e,o,i){var r=!e.length,s=o.state,a=o.actions,c=o.mutations,u=o.getters,f=o.modules;if(!r&&!i){var l=g(n,e.slice(0,-1)),d=e[e.length-1];t._withCommit(function(){_.set(l,d,s||{})})}c&&Object.keys(c).forEach(function(n){h(t,n,c[n],e)}),a&&Object.keys(a).forEach(function(n){m(t,n,a[n],e)}),u&&v(t,u,e),f&&Object.keys(f).forEach(function(o){p(t,n,e.concat(o),f[o],i)})}function h(t,n,e,o){void 0===o&&(o=[]);var i=t._mutations[n]||(t._mutations[n]=[]);i.push(function(n){e(g(t.state,o),n)})}function m(t,n,e,o){void 0===o&&(o=[]);var i=t._actions[n]||(t._actions[n]=[]),r=t.dispatch,s=t.commit;i.push(function(n,i){var a=e({dispatch:r,commit:s,getters:t.getters,state:g(t.state,o),rootState:t.state},n,i);return c(a)||(a=Promise.resolve(a)),t._devtoolHook?a["catch"](function(n){throw t._devtoolHook.emit("vuex:error",n),n}):a})}function v(t,n,e){Object.keys(n).forEach(function(o){var i=n[o];return t._wrappedGetters[o]?void console.error("[vuex] duplicate getter key: "+o):void(t._wrappedGetters[o]=function(t){return i(g(t.state,e),t.getters,t.state)})})}function w(t){t._vm.$watch("state",function(){u(t._committing,"Do not mutate vuex store state outside mutation handlers.")},{deep:!0,sync:!0})}function g(t,n){return n.length?n.reduce(function(t,n){return t[n]},t):t}function y(t){return _?void console.error("[vuex] already installed. Vue.use(Vuex) should be called only once."):(_=t,void n(_))}var _,b="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,S=function(n){var e=this;void 0===n&&(n={}),u(_,"must call Vue.use(Vuex) before creating a store instance."),u("undefined"!=typeof Promise,"vuex requires a Promise polyfill in this browser.");var o=n.state;void 0===o&&(o={});var i=n.plugins;void 0===i&&(i=[]);var r=n.strict;void 0===r&&(r=!1),this._options=n,this._committing=!1,this._actions=Object.create(null),this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._runtimeModules=Object.create(null),this._subscribers=[],this._watcherVM=new _;var s=this,a=this,c=a.dispatch,f=a.commit;this.dispatch=function(t,n){return c.call(s,t,n)},this.commit=function(t,n,e){return f.call(s,t,n,e)},this.strict=r,p(this,o,[],n),d(this,o),i.concat(t).forEach(function(t){return t(e)})},O={state:{}};O.state.get=function(){return this._vm.state},O.state.set=function(t){u(!1,"Use store.replaceState() to explicit replace store state.")},S.prototype.commit=function(t,n,e){var o=this;a(t)&&t.type&&(e=n,n=t,t=t.type);var i={type:t,payload:n},r=this._mutations[t];return r?(this._withCommit(function(){r.forEach(function(t){t(n)})}),void(e&&e.silent||this._subscribers.forEach(function(t){return t(i,o.state)}))):void console.error("[vuex] unknown mutation type: "+t)},S.prototype.dispatch=function(t,n){a(t)&&t.type&&(n=t,t=t.type);var e=this._actions[t];return e?e.length>1?Promise.all(e.map(function(t){return t(n)})):e[0](n):void console.error("[vuex] unknown action type: "+t)},S.prototype.subscribe=function(t){var n=this._subscribers;return n.indexOf(t)<0&&n.push(t),function(){var e=n.indexOf(t);e>-1&&n.splice(e,1)}},S.prototype.watch=function(t,n,e){var o=this;return u("function"==typeof t,"store.watch only accepts a function."),this._watcherVM.$watch(function(){return t(o.state)},n,e)},S.prototype.replaceState=function(t){var n=this;this._withCommit(function(){n._vm.state=t})},S.prototype.registerModule=function(t,n){"string"==typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),this._runtimeModules[t.join(".")]=n,p(this,this.state,t,n),d(this,this.state)},S.prototype.unregisterModule=function(t){var n=this;"string"==typeof t&&(t=[t]),u(Array.isArray(t),"module path must be a string or an Array."),delete this._runtimeModules[t.join(".")],this._withCommit(function(){var e=g(n.state,t.slice(0,-1));_["delete"](e,t[t.length-1])}),l(this)},S.prototype.hotUpdate=function(t){f(this._options,t),l(this)},S.prototype._withCommit=function(t){var n=this._committing;this._committing=!0,t(),this._committing=n},Object.defineProperties(S.prototype,O),"undefined"!=typeof window&&window.Vue&&y(window.Vue);var k={Store:S,install:y,mapState:e,mapMutations:o,mapGetters:i,mapActions:r};return k})},44:function(t,n,e){var o,i=function(){return o.indexOf(e.h())>=0},r=function a(){t.hot.check(!0,function(n,o){return n?void(t.hot.status()in{abort:1,fail:1}?(console.warn("[HMR] Cannot apply update. Need to do a full reload!"),console.warn("[HMR] "+n.stack||n.message),window.location.reload()):console.warn("[HMR] Update failed: "+n.stack||n.message)):o?(i()||a(),e(45)(o,o),void(i()&&console.log("[HMR] App is up to date."))):(console.warn("[HMR] Cannot find update. Need to do a full reload!"),console.warn("[HMR] (Probably because of restarting the webpack-dev-server)"),void window.location.reload())})},s=window.addEventListener?function(t,n){window.addEventListener(t,n,!1)}:function(t,n){window.attachEvent("on"+t,n)};s("message",function(n){"string"==typeof n.data&&0===n.data.indexOf("webpackHotUpdate")&&(o=n.data,i()||"idle"!==t.hot.status()||(console.log("[HMR] Checking for updates on the server..."),r()))}),console.log("[HMR] Waiting for update signal from WDS...")},45:function(t,n){t.exports=function(t,n){var e=t.filter(function(t){return n&&n.indexOf(t)<0});e.length>0&&(console.warn("[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"),e.forEach(function(t){console.warn("[HMR]  - "+t)})),n&&0!==n.length?(console.log("[HMR] Updated modules:"),n.forEach(function(t){console.log("[HMR]  - "+t)})):console.log("[HMR] Nothing hot updated.")}}});