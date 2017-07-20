webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(3);


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	/*globals window __webpack_hash__ */
	if(true) {
		var lastData;
		var upToDate = function upToDate() {
			return lastData.indexOf(__webpack_require__.h()) >= 0;
		};
		var check = function check() {
			module.hot.check(true, function(err, updatedModules) {
				if(err) {
					if(module.hot.status() in {
							abort: 1,
							fail: 1
						}) {
						console.warn("[HMR] Cannot apply update. Need to do a full reload!");
						console.warn("[HMR] " + err.stack || err.message);
						window.location.reload();
					} else {
						console.warn("[HMR] Update failed: " + err.stack || err.message);
					}
					return;
				}

				if(!updatedModules) {
					console.warn("[HMR] Cannot find update. Need to do a full reload!");
					console.warn("[HMR] (Probably because of restarting the webpack-dev-server)");
					window.location.reload();
					return;
				}

				if(!upToDate()) {
					check();
				}

				__webpack_require__(2)(updatedModules, updatedModules);

				if(upToDate()) {
					console.log("[HMR] App is up to date.");
				}

			});
		};
		var addEventListener = window.addEventListener ? function(eventName, listener) {
			window.addEventListener(eventName, listener, false);
		} : function(eventName, listener) {
			window.attachEvent("on" + eventName, listener);
		};
		addEventListener("message", function(event) {
			if(typeof event.data === "string" && event.data.indexOf("webpackHotUpdate") === 0) {
				lastData = event.data;
				if(!upToDate() && module.hot.status() === "idle") {
					console.log("[HMR] Checking for updates on the server...");
					check();
				}
			}
		});
		console.log("[HMR] Waiting for update signal from WDS...");
	} else {
		throw new Error("[HMR] Hot Module Replacement is disabled.");
	}


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(updatedModules, renewedModules) {
		var unacceptedModules = updatedModules.filter(function(moduleId) {
			return renewedModules && renewedModules.indexOf(moduleId) < 0;
		});

		if(unacceptedModules.length > 0) {
			console.warn("[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
			unacceptedModules.forEach(function(moduleId) {
				console.warn("[HMR]  - " + moduleId);
			});
		}

		if(!renewedModules || renewedModules.length === 0) {
			console.log("[HMR] Nothing hot updated.");
		} else {
			console.log("[HMR] Updated modules:");
			renewedModules.forEach(function(moduleId) {
				console.log("[HMR]  - " + moduleId);
			});
		}
	};


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//加载初始化样式
	__webpack_require__(4);
	__webpack_require__(5)();

	var Vue = __webpack_require__(6),
	    VueRouter = __webpack_require__(7),
	    Vuex = __webpack_require__(8),
	    VuexLogger = __webpack_require__(9);

	Vue.use(VueRouter);
	Vue.use(Vuex);

	//实例化 vue-router
	window.router = new VueRouter({
	    saveScrollPosition: true,
	    transitionOnLoad: true,
	    routes: __webpack_require__(10)
	});

	router.beforeEach(function (to, from, next) {
	    if (to.name != 'login' && !localStorage.getItem('userName')) {
	        router.push({
	            path: '/login'
	        });
	    } else {
	        next();
	    }
	});

	window.store = new Vuex.Store({
	    modules: {
	        tips: __webpack_require__(44),
	        loading: __webpack_require__(45)
	    },
	    strict: false,
	    middlewares: [VuexLogger()]
	});

	window.app = new Vue({
	    router: router,
	    store: store
	}).$mount('#app');


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

	module.exports = function () {
	    var host = '127.0.0.1',
	        port = 9527,
	        url = 'ws://' + host + ':' + port + '/';

	    window.ws = new WebSocket(url);
	    window.wsCount = 0;

	    ws.onmessage = function (e) {
	        var re = JSON.parse(e.data),
	            methods = {
	                loginSuccess: function () {
	                    localStorage.setItem('userName', vm.name);
	                    router.push({
	                        name: 'main'
	                    });
	                },

	                loginFail: function () {
	                    vm.$store.dispatch('showTips', JSON.parse(e.data).data);
	                },

	                logoutSuccess: function () {
	                    localStorage.removeItem('userName');
	                    router.push({
	                        name: 'login'
	                    });
	                },

	                getShopListSuccess: function () {
	                    vm.list = JSON.parse(e.data).data;
	                },

	                launchSuccess: function () {
	                    vm.goTo();
	                },

	                launchFail: function () {
	                    vm.$store.dispatch('showTips', JSON.parse(e.data).data);
	                },

	                getBookListSuccess: function () {
	                    vm.list = JSON.parse(e.data).data;
	                },

	                getMenuListSuccess: function () {
	                    vm.menuList = JSON.parse(e.data).data;
	                },

	                getCheckedListSuccess: function () {
	                    vm.checkedList = JSON.parse(e.data).data;
	                },

	                getStapleListSuccess: function () {
	                    vm.stapleList = JSON.parse(e.data).data;
	                },

	                bookFinish: function () {
	                    vm.$store.dispatch('showTips', JSON.parse(e.data).data);

	                    setTimeout(function () {
	                        router.push({
	                            path: '/main'
	                        });
	                    }, 3000);
	                },

	                finishSuccess: function () {
	                    vm.$store.dispatch('showTips', JSON.parse(e.data).data);

	                    setTimeout(function () {
	                        router.push({
	                            path: '/main'
	                        });
	                    }, 3000);
	                },

	                finishFail: function () {
	                    vm.$store.dispatch('showTips', JSON.parse(e.data).data);
	                }
	            };

	        methods[re.method] && methods[re.method](re.data);

	        window.wsCount > 0 && window.wsCount--;
	        if (window.wsCount == 0) {
	            vm.$store.dispatch('hideLoading');
	        }
	    };

	    window.sendWsMsg = function (str) {
	        vm.$store.dispatch('showLoading');
	        window.wsCount++;
	        ws.send(str);
	    }
	};


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * vuex v2.3.0
	 * (c) 2017 Evan You
	 * @license MIT
	 */
	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Vuex=e()}(this,function(){"use strict";function t(t){x&&(t._devtoolHook=x,x.emit("vuex:init",t),x.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){x.emit("vuex:mutation",t,e)}))}function e(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function n(t){return null!==t&&"object"==typeof t}function o(t){return t&&"function"==typeof t.then}function r(t,e){if(!t)throw new Error("[vuex] "+e)}function i(t,e){if(t.update(e),e.modules)for(var n in e.modules){if(!t.getChild(n))return void console.warn("[vuex] trying to add a new module '"+n+"' on hot reloading, manual reload is needed");i(t.getChild(n),e.modules[n])}}function s(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;u(t,n,[],t._modules.root,!0),a(t,n,e)}function a(t,n,o){var r=t._vm;t.getters={};var i=t._wrappedGetters,s={};e(i,function(e,n){s[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var a=E.config.silent;E.config.silent=!0,t._vm=new E({data:{$$state:n},computed:s}),E.config.silent=a,t.strict&&d(t),r&&(o&&t._withCommit(function(){r._data.$$state=null}),E.nextTick(function(){return r.$destroy()}))}function u(t,e,n,o,r){var i=!n.length,s=t._modules.getNamespace(n);if(o.namespaced&&(t._modulesNamespaceMap[s]=o),!i&&!r){var a=m(e,n.slice(0,-1)),f=n[n.length-1];t._withCommit(function(){E.set(a,f,o.state)})}var d=o.context=c(t,s,n);o.forEachMutation(function(e,n){var o=s+n;l(t,o,e,d)}),o.forEachAction(function(e,n){var o=s+n;p(t,o,e,d)}),o.forEachGetter(function(e,n){var o=s+n;h(t,o,e,d)}),o.forEachChild(function(o,i){u(t,e,n.concat(i),o,r)})}function c(t,e,n){var o=""===e,r={dispatch:o?t.dispatch:function(n,o,r){var i=v(n,o,r),s=i.payload,a=i.options,u=i.type;return a&&a.root||(u=e+u,t._actions[u])?t.dispatch(u,s):void console.error("[vuex] unknown local action type: "+i.type+", global type: "+u)},commit:o?t.commit:function(n,o,r){var i=v(n,o,r),s=i.payload,a=i.options,u=i.type;return a&&a.root||(u=e+u,t._mutations[u])?void t.commit(u,s,a):void console.error("[vuex] unknown local mutation type: "+i.type+", global type: "+u)}};return Object.defineProperties(r,{getters:{get:o?function(){return t.getters}:function(){return f(t,e)}},state:{get:function(){return m(t.state,n)}}}),r}function f(t,e){var n={},o=e.length;return Object.keys(t.getters).forEach(function(r){if(r.slice(0,o)===e){var i=r.slice(o);Object.defineProperty(n,i,{get:function(){return t.getters[r]},enumerable:!0})}}),n}function l(t,e,n,o){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(t){n(o.state,t)})}function p(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(e,i){var s=n({dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,i);return o(s)||(s=Promise.resolve(s)),t._devtoolHook?s.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):s})}function h(t,e,n,o){return t._wrappedGetters[e]?void console.error("[vuex] duplicate getter key: "+e):void(t._wrappedGetters[e]=function(t){return n(o.state,o.getters,t.state,t.getters)})}function d(t){t._vm.$watch(function(){return this._data.$$state},function(){r(t._committing,"Do not mutate vuex store state outside mutation handlers.")},{deep:!0,sync:!0})}function m(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function v(t,e,o){return n(t)&&t.type&&(o=e,e=t,t=t.type),r("string"==typeof t,"Expects string as the type, but found "+typeof t+"."),{type:t,payload:e,options:o}}function y(t){return E?void console.error("[vuex] already installed. Vue.use(Vuex) should be called only once."):(E=t,void b(E))}function _(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function g(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function w(t,e,n){var o=t._modulesNamespaceMap[n];return o||console.error("[vuex] module namespace not found in "+e+"(): "+n),o}var b=function(t){function e(){var t=this.$options;t.store?this.$store=t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}var n=Number(t.version.split(".")[0]);if(n>=2){var o=t.config._lifecycleHooks.indexOf("init")>-1;t.mixin(o?{init:e}:{beforeCreate:e})}else{var r=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[e].concat(t.init):e,r.call(this,t)}}},x="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,$=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},O={namespaced:{}};O.namespaced.get=function(){return!!this._rawModule.namespaced},$.prototype.addChild=function(t,e){this._children[t]=e},$.prototype.removeChild=function(t){delete this._children[t]},$.prototype.getChild=function(t){return this._children[t]},$.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},$.prototype.forEachChild=function(t){e(this._children,t)},$.prototype.forEachGetter=function(t){this._rawModule.getters&&e(this._rawModule.getters,t)},$.prototype.forEachAction=function(t){this._rawModule.actions&&e(this._rawModule.actions,t)},$.prototype.forEachMutation=function(t){this._rawModule.mutations&&e(this._rawModule.mutations,t)},Object.defineProperties($.prototype,O);var M=function(t){var n=this;this.root=new $(t,!1),t.modules&&e(t.modules,function(t,e){n.register([e],t,!1)})};M.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},M.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},M.prototype.update=function(t){i(this.root,t)},M.prototype.register=function(t,n,o){var r=this;void 0===o&&(o=!0);var i=this.get(t.slice(0,-1)),s=new $(n,o);i.addChild(t[t.length-1],s),n.modules&&e(n.modules,function(e,n){r.register(t.concat(n),e,o)})},M.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var E,k=function(e){var n=this;void 0===e&&(e={}),r(E,"must call Vue.use(Vuex) before creating a store instance."),r("undefined"!=typeof Promise,"vuex requires a Promise polyfill in this browser.");var o=e.state;void 0===o&&(o={});var i=e.plugins;void 0===i&&(i=[]);var s=e.strict;void 0===s&&(s=!1),this._committing=!1,this._actions=Object.create(null),this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new M(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new E;var c=this,f=this,l=f.dispatch,p=f.commit;this.dispatch=function(t,e){return l.call(c,t,e)},this.commit=function(t,e,n){return p.call(c,t,e,n)},this.strict=s,u(this,o,[],this._modules.root),a(this,o),i.concat(t).forEach(function(t){return t(n)})},j={state:{}};j.state.get=function(){return this._vm._data.$$state},j.state.set=function(t){r(!1,"Use store.replaceState() to explicit replace store state.")},k.prototype.commit=function(t,e,n){var o=this,r=v(t,e,n),i=r.type,s=r.payload,a=r.options,u={type:i,payload:s},c=this._mutations[i];return c?(this._withCommit(function(){c.forEach(function(t){t(s)})}),this._subscribers.forEach(function(t){return t(u,o.state)}),void(a&&a.silent&&console.warn("[vuex] mutation type: "+i+". Silent option has been removed. Use the filter functionality in the vue-devtools"))):void console.error("[vuex] unknown mutation type: "+i)},k.prototype.dispatch=function(t,e){var n=v(t,e),o=n.type,r=n.payload,i=this._actions[o];return i?i.length>1?Promise.all(i.map(function(t){return t(r)})):i[0](r):void console.error("[vuex] unknown action type: "+o)},k.prototype.subscribe=function(t){var e=this._subscribers;return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}},k.prototype.watch=function(t,e,n){var o=this;return r("function"==typeof t,"store.watch only accepts a function."),this._watcherVM.$watch(function(){return t(o.state,o.getters)},e,n)},k.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},k.prototype.registerModule=function(t,e){"string"==typeof t&&(t=[t]),r(Array.isArray(t),"module path must be a string or an Array."),this._modules.register(t,e),u(this,this.state,t,this._modules.get(t)),a(this,this.state)},k.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),r(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit(function(){var n=m(e.state,t.slice(0,-1));E.delete(n,t[t.length-1])}),s(this)},k.prototype.hotUpdate=function(t){this._modules.update(t),s(this,!0)},k.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(k.prototype,j),"undefined"!=typeof window&&window.Vue&&y(window.Vue);var C=g(function(t,e){var n={};return _(e).forEach(function(e){var o=e.key,r=e.val;n[o]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var o=w(this.$store,"mapState",t);if(!o)return;e=o.context.state,n=o.context.getters}return"function"==typeof r?r.call(this,e,n):e[r]},n[o].vuex=!0}),n}),A=g(function(t,e){var n={};return _(e).forEach(function(e){var o=e.key,r=e.val;r=t+r,n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];if(!t||w(this.$store,"mapMutations",t))return this.$store.commit.apply(this.$store,[r].concat(e))}}),n}),G=g(function(t,e){var n={};return _(e).forEach(function(e){var o=e.key,r=e.val;r=t+r,n[o]=function(){if(!t||w(this.$store,"mapGetters",t))return r in this.$store.getters?this.$store.getters[r]:void console.error("[vuex] unknown getter: "+r)},n[o].vuex=!0}),n}),V=g(function(t,e){var n={};return _(e).forEach(function(e){var o=e.key,r=e.val;r=t+r,n[o]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];if(!t||w(this.$store,"mapActions",t))return this.$store.dispatch.apply(this.$store,[r].concat(e))}}),n}),P={Store:k,install:y,version:"2.3.0",mapState:C,mapMutations:A,mapGetters:G,mapActions:V};return P});

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

	(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.createVuexLogger = factory());
	}(this, (function () { 'use strict';

	/**
	 * Get the first item that pass the test
	 * by second argument function
	 *
	 * @param {Array} list
	 * @param {Function} f
	 * @return {*}
	 */
	function find (list, f) {
	  return list.filter(f)[0]
	}

	/**
	 * Deep copy the given object considering circular structure.
	 * This function caches all nested objects and its copies.
	 * If it detects circular structure, use cached copy to avoid infinite loop.
	 *
	 * @param {*} obj
	 * @param {Array<Object>} cache
	 * @return {*}
	 */
	function deepCopy (obj, cache) {
	  if ( cache === void 0 ) cache = [];

	  // just return if obj is immutable value
	  if (obj === null || typeof obj !== 'object') {
	    return obj
	  }

	  // if obj is hit, it is in circular structure
	  var hit = find(cache, function (c) { return c.original === obj; });
	  if (hit) {
	    return hit.copy
	  }

	  var copy = Array.isArray(obj) ? [] : {};
	  // put the copy into cache at first
	  // because we want to refer it in recursive deepCopy
	  cache.push({
	    original: obj,
	    copy: copy
	  });

	  Object.keys(obj).forEach(function (key) {
	    copy[key] = deepCopy(obj[key], cache);
	  });

	  return copy
	}

	/**
	 * forEach for object
	 */

	// Credits: borrowed code from fcomb/redux-logger

	function createLogger (ref) {
	  if ( ref === void 0 ) ref = {};
	  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
	  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
	  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };

	  return function (store) {
	    var prevState = deepCopy(store.state);

	    store.subscribe(function (mutation, state) {
	      if (typeof console === 'undefined') {
	        return
	      }
	      var nextState = deepCopy(state);
	      var time = new Date();
	      var formattedTime = " @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3));
	      var formattedMutation = mutationTransformer(mutation);
	      var message = "mutation " + (mutation.type) + formattedTime;
	      var startMessage = collapsed
	        ? console.groupCollapsed
	        : console.group;

	      // render
	      try {
	        startMessage.call(console, message);
	      } catch (e) {
	        console.log(message);
	      }

	      console.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
	      console.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
	      console.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));

	      try {
	        console.groupEnd();
	      } catch (e) {
	        console.log('—— log end ——');
	      }

	      prevState = nextState;
	    });
	  }
	}

	function repeat (str, times) {
	  return (new Array(times + 1)).join(str)
	}

	function pad (num, maxLength) {
	  return repeat('0', maxLength - num.toString().length) + num
	}

	return createLogger;

	})));


/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = [
	    {
	        path: '/',
	        name: 'login',
	        component: function (resolve) {
	            __webpack_require__.e/* nsure */(1, function (require) {
	                resolve(__webpack_require__(11));
	            });
	        }
	    },
	    {
	        path: '/login',
	        name: 'login',
	        component: function (resolve) {
	            __webpack_require__.e/* nsure */(1/* duplicate */, function (require) {
	                resolve(__webpack_require__(11));
	            });
	        }
	    },
	    {
	        path: '/main',
	        name: 'main',
	        component: function (resolve) {
	            __webpack_require__.e/* nsure */(2, function (require) {
	                resolve(__webpack_require__(21));
	            });
	        },
	        children: [
	            {
	                path: '',
	                redirect: 'bookList'
	            },
	            {
	                path: 'bookList',
	                name: 'bookList',
	                component: function (resolve) {
	                    __webpack_require__.e/* nsure */(3, function (require) {
	                        resolve(__webpack_require__(27));
	                    });
	                }
	            },
	            {
	                path: 'shopList',
	                name: 'shopList',
	                component: function (resolve) {
	                    __webpack_require__.e/* nsure */(4, function (require) {
	                        resolve(__webpack_require__(30));
	                    });
	                }
	            }
	        ]
	    },
	    {
	        path: '/staple',
	        name: 'staple',
	        component: function (resolve) {
	            __webpack_require__.e/* nsure */(5, function (require) {
	                resolve(__webpack_require__(33));
	            });
	        },
	        children: [
	            {
	                path: '',
	                redirect: 'menuList'
	            },
	            {
	                path: 'menuList',
	                name: 'menuList',
	                component: function (resolve) {
	                    __webpack_require__.e/* nsure */(6, function (require) {
	                        resolve(__webpack_require__(36));
	                    });
	                }
	            },
	            {
	                path: 'stapleDetail',
	                name: 'stapleDetail',
	                component: function (resolve) {
	                    __webpack_require__.e/* nsure */(7, function (require) {
	                        resolve(__webpack_require__(41));
	                    });
	                }
	            }
	        ]
	    }
	];


/***/ }),

/***/ 44:
/***/ (function(module, exports) {

	var timeoutObj = null;

	module.exports = {
	    state: {
	        msg: ''
	    },
	    mutations: {
	        SET_TIPS_MSG: function (state, msg) {
	            state.msg = msg;

	            clearTimeout(timeoutObj);
	            timeoutObj = setTimeout(function () {
	                state.msg = '';
	            }, 3000);
	        }
	    },
	    actions: {
	        showTips: function (store, msg) {
	            store.commit('SET_TIPS_MSG', msg);
	        }
	    }
	}


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

	module.exports = {
	    state: {
	        isShow: false
	    },
	    mutations: {
	        SHOW_LOADING: function (state) {
	            state.isShow = true;
	        },
	        HIDE_LOADING: function (state) {
	            state.isShow = false;
	        }
	    },
	    actions: {
	        showLoading: function (store) {
	            store.commit('SHOW_LOADING');
	        },

	        hideLoading: function (store) {
	            store.commit('HIDE_LOADING');
	        }
	    }
	}


/***/ })

});