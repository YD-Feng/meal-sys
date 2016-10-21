webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(3);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

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


/***/ },

/***/ 2:
/***/ function(module, exports) {

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


/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

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


/***/ },

/***/ 4:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 5:
/***/ function(module, exports) {

	module.exports = function () {
	    var host = '10.7.204.128',
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


/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * vuex v2.0.0
	 * (c) 2016 Evan You
	 * @license MIT
	 */
	!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Vuex=e()}(this,function(){"use strict";function t(t){b&&(t._devtoolHook=b,b.emit("vuex:init",t),b.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){b.emit("vuex:mutation",t,e)}))}function e(t){function e(){var t=this.$options;t.store?this.$store=t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}var n=Number(t.version.split(".")[0]);if(n>=2){var o=t.config._lifecycleHooks.indexOf("init")>-1;t.mixin(o?{init:e}:{beforeCreate:e})}else{var i=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[e].concat(t.init):e,i.call(this,t)}}}function n(t){var e={};return s(t).forEach(function(t){var n=t.key,o=t.val;e[n]=function(){return"function"==typeof o?o.call(this,this.$store.state,this.$store.getters):this.$store.state[o]}}),e}function o(t){var e={};return s(t).forEach(function(t){var n=t.key,o=t.val;e[n]=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return this.$store.commit.apply(this.$store,[o].concat(t))}}),e}function i(t){var e={};return s(t).forEach(function(t){var n=t.key,o=t.val;e[n]=function(){return o in this.$store.getters||console.error("[vuex] unknown getter: "+o),this.$store.getters[o]}}),e}function r(t){var e={};return s(t).forEach(function(t){var n=t.key,o=t.val;e[n]=function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return this.$store.dispatch.apply(this.$store,[o].concat(t))}}),e}function s(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function u(t){return null!==t&&"object"==typeof t}function a(t){return t&&"function"==typeof t.then}function c(t,e){if(!t)throw new Error("[vuex] "+e)}function f(t,e){if(e.actions&&(t.actions=e.actions),e.mutations&&(t.mutations=e.mutations),e.getters&&(t.getters=e.getters),e.modules)for(var n in e.modules){if(!t.modules||!t.modules[n])return void console.warn("[vuex] trying to add a new module '"+n+"' on hot reloading, manual reload is needed");f(t.modules[n],e.modules[n])}}function l(t){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null);var e=t.state;p(t,e,[],t._options,!0),Object.keys(t._runtimeModules).forEach(function(n){p(t,e,n.split("."),t._runtimeModules[n],!0)}),h(t,e)}function h(t,e){var n=t._vm;t.getters={};var o=t._wrappedGetters,i={};Object.keys(o).forEach(function(e){var n=o[e];i[e]=function(){return n(t)},Object.defineProperty(t.getters,e,{get:function(){return t._vm[e]}})});var r=w.config.silent;w.config.silent=!0,t._vm=new w({data:{state:e},computed:i}),w.config.silent=r,t.strict&&y(t),n&&(t._withCommit(function(){n.state=null}),w.nextTick(function(){return n.$destroy()}))}function p(t,e,n,o,i){var r=!n.length,s=o.state,u=o.actions,a=o.mutations,c=o.getters,f=o.modules;if(!r&&!i){var l=_(e,n.slice(0,-1)),h=n[n.length-1];t._withCommit(function(){w.set(l,h,s||{})})}a&&Object.keys(a).forEach(function(e){d(t,e,a[e],n)}),u&&Object.keys(u).forEach(function(e){m(t,e,u[e],n)}),c&&v(t,c,n),f&&Object.keys(f).forEach(function(o){p(t,e,n.concat(o),f[o],i)})}function d(t,e,n,o){void 0===o&&(o=[]);var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(e){n(_(t.state,o),e)})}function m(t,e,n,o){void 0===o&&(o=[]);var i=t._actions[e]||(t._actions[e]=[]),r=t.dispatch,s=t.commit;i.push(function(e,i){var u=n({dispatch:r,commit:s,getters:t.getters,state:_(t.state,o),rootState:t.state},e,i);return a(u)||(u=Promise.resolve(u)),t._devtoolHook?u.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):u})}function v(t,e,n){Object.keys(e).forEach(function(o){var i=e[o];return t._wrappedGetters[o]?void console.error("[vuex] duplicate getter key: "+o):void(t._wrappedGetters[o]=function(t){return i(_(t.state,n),t.getters,t.state)})})}function y(t){t._vm.$watch("state",function(){c(t._committing,"Do not mutate vuex store state outside mutation handlers.")},{deep:!0,sync:!0})}function _(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function g(t){return w?void console.error("[vuex] already installed. Vue.use(Vuex) should be called only once."):(w=t,void e(w))}var w,b="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,x=function(e){var n=this;void 0===e&&(e={}),c(w,"must call Vue.use(Vuex) before creating a store instance."),c("undefined"!=typeof Promise,"vuex requires a Promise polyfill in this browser.");var o=e.state;void 0===o&&(o={});var i=e.plugins;void 0===i&&(i=[]);var r=e.strict;void 0===r&&(r=!1),this._options=e,this._committing=!1,this._actions=Object.create(null),this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._runtimeModules=Object.create(null),this._subscribers=[],this._watcherVM=new w;var s=this,u=this,a=u.dispatch,f=u.commit;this.dispatch=function(t,e){return a.call(s,t,e)},this.commit=function(t,e,n){return f.call(s,t,e,n)},this.strict=r,p(this,o,[],e),h(this,o),i.concat(t).forEach(function(t){return t(n)})},O={state:{}};O.state.get=function(){return this._vm.state},O.state.set=function(t){c(!1,"Use store.replaceState() to explicit replace store state.")},x.prototype.commit=function(t,e,n){var o=this;u(t)&&t.type&&(n=e,e=t,t=t.type);var i={type:t,payload:e},r=this._mutations[t];return r?(this._withCommit(function(){r.forEach(function(t){t(e)})}),void(n&&n.silent||this._subscribers.forEach(function(t){return t(i,o.state)}))):void console.error("[vuex] unknown mutation type: "+t)},x.prototype.dispatch=function(t,e){u(t)&&t.type&&(e=t,t=t.type);var n=this._actions[t];return n?n.length>1?Promise.all(n.map(function(t){return t(e)})):n[0](e):void console.error("[vuex] unknown action type: "+t)},x.prototype.subscribe=function(t){var e=this._subscribers;return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}},x.prototype.watch=function(t,e,n){var o=this;return c("function"==typeof t,"store.watch only accepts a function."),this._watcherVM.$watch(function(){return t(o.state)},e,n)},x.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm.state=t})},x.prototype.registerModule=function(t,e){"string"==typeof t&&(t=[t]),c(Array.isArray(t),"module path must be a string or an Array."),this._runtimeModules[t.join(".")]=e,p(this,this.state,t,e),h(this,this.state)},x.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),c(Array.isArray(t),"module path must be a string or an Array."),delete this._runtimeModules[t.join(".")],this._withCommit(function(){var n=_(e.state,t.slice(0,-1));w.delete(n,t[t.length-1])}),l(this)},x.prototype.hotUpdate=function(t){f(this._options,t),l(this)},x.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(x.prototype,O),"undefined"!=typeof window&&window.Vue&&g(window.Vue);var k={Store:x,install:g,mapState:n,mapMutations:o,mapGetters:i,mapActions:r};return k});

/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

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
	  var hit = find(cache, function (c) { return c.original === obj; })
	  if (hit) {
	    return hit.copy
	  }

	  var copy = Array.isArray(obj) ? [] : {}
	  // put the copy into cache at first
	  // because we want to refer it in recursive deepCopy
	  cache.push({
	    original: obj,
	    copy: copy
	  })

	  Object.keys(obj).forEach(function (key) {
	    copy[key] = deepCopy(obj[key], cache)
	  })

	  return copy
	}

	// Credits: borrowed code from fcomb/redux-logger

	function createLogger (ref) {
	  if ( ref === void 0 ) ref = {};
	  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
	  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
	  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };

	  return function (store) {
	    var prevState = deepCopy(store.state)

	    store.subscribe(function (mutation, state) {
	      if (typeof console === 'undefined') {
	        return
	      }
	      var nextState = deepCopy(state)
	      var time = new Date()
	      var formattedTime = " @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3))
	      var formattedMutation = mutationTransformer(mutation)
	      var message = "mutation " + (mutation.type) + formattedTime
	      var startMessage = collapsed
	        ? console.groupCollapsed
	        : console.group

	      // render
	      try {
	        startMessage.call(console, message)
	      } catch (e) {
	        console.log(message)
	      }

	      console.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState))
	      console.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation)
	      console.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState))

	      try {
	        console.groupEnd()
	      } catch (e) {
	        console.log('—— log end ——')
	      }

	      prevState = nextState
	    })
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

/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	module.exports = [
	    {
	        path: '/',
	        name: 'login',
	        component: function (resolve, reject) {
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


/***/ },

/***/ 44:
/***/ function(module, exports) {

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


/***/ },

/***/ 45:
/***/ function(module, exports) {

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


/***/ }

});