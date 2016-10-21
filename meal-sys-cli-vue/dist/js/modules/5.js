webpackJsonp([5],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(14)

	/* template */
	var __vue_template__ = __webpack_require__(15)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.name = __vue_options__.name || "tips"
	__vue_options__.__file = "e:\\czf-work\\myProject\\meal-sys\\meal-sys-cli-vue\\src\\components\\tips.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(16)
	  hotAPI.install(__webpack_require__(6), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-d54b0d82", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-d54b0d82", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tips.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 14 */
/***/ function(module, exports) {

	//
	//
	//
	//

	module.exports = {
	    replace: true,
	    computed: {
	        msg: function () {
	            return this.$store.state.tips.msg;
	        }
	    }
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "cm-tips-box",
	    class: {
	      'cm-tips-box-show': msg != ''
	    }
	  }, [_s(msg)])
	}},staticRenderFns: []}
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(16).rerender("data-v-d54b0d82", module.exports)
	  }
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	var Vue // late bind
	var map = window.__VUE_HOT_MAP__ = Object.create(null)
	var installed = false
	var isBrowserify = false
	var initHookName = 'beforeCreate'

	exports.install = function (vue, browserify) {
	  if (installed) return
	  installed = true

	  Vue = vue
	  isBrowserify = browserify

	  // compat with < 2.0.0-alpha.7
	  if (Vue.config._lifecycleHooks.indexOf('init') > -1) {
	    initHookName = 'init'
	  }

	  exports.compatible = Number(Vue.version.split('.')[0]) >= 2
	  if (!exports.compatible) {
	    console.warn(
	      '[HMR] You are using a version of vue-hot-reload-api that is ' +
	      'only compatible with Vue.js core ^2.0.0.'
	    )
	    return
	  }
	}

	/**
	 * Create a record for a hot module, which keeps track of its constructor
	 * and instances
	 *
	 * @param {String} id
	 * @param {Object} options
	 */

	exports.createRecord = function (id, options) {
	  var Ctor = null
	  if (typeof options === 'function') {
	    Ctor = options
	    options = Ctor.options
	  }
	  makeOptionsHot(id, options)
	  map[id] = {
	    Ctor: Vue.extend(options),
	    instances: []
	  }
	}

	/**
	 * Make a Component options object hot.
	 *
	 * @param {String} id
	 * @param {Object} options
	 */

	function makeOptionsHot (id, options) {
	  injectHook(options, initHookName, function () {
	    map[id].instances.push(this)
	  })
	  injectHook(options, 'beforeDestroy', function () {
	    var instances = map[id].instances
	    instances.splice(instances.indexOf(this), 1)
	  })
	}

	/**
	 * Inject a hook to a hot reloadable component so that
	 * we can keep track of it.
	 *
	 * @param {Object} options
	 * @param {String} name
	 * @param {Function} hook
	 */

	function injectHook (options, name, hook) {
	  var existing = options[name]
	  options[name] = existing
	    ? Array.isArray(existing)
	      ? existing.concat(hook)
	      : [existing, hook]
	    : [hook]
	}

	function tryWrap (fn) {
	  return function (id, arg) {
	    try { fn(id, arg) } catch (e) {
	      console.error(e)
	      console.warn('Something went wrong during Vue component hot-reload. Full reload required.')
	    }
	  }
	}

	exports.rerender = tryWrap(function (id, fns) {
	  var record = map[id]
	  record.Ctor.options.render = fns.render
	  record.Ctor.options.staticRenderFns = fns.staticRenderFns
	  record.instances.slice().forEach(function (instance) {
	    instance.$options.render = fns.render
	    instance.$options.staticRenderFns = fns.staticRenderFns
	    instance._staticTrees = [] // reset static trees
	    instance.$forceUpdate()
	  })
	})

	exports.reload = tryWrap(function (id, options) {
	  makeOptionsHot(id, options)
	  var record = map[id]
	  record.Ctor.extendOptions = options
	  var newCtor = Vue.extend(options)
	  record.Ctor.options = newCtor.options
	  record.Ctor.cid = newCtor.cid
	  if (newCtor.release) {
	    // temporary global mixin strategy used in < 2.0.0-alpha.6
	    newCtor.release()
	  }
	  record.instances.slice().forEach(function (instance) {
	    if (instance.$parent) {
	      instance.$parent.$forceUpdate()
	    } else {
	      console.warn('Root or manually mounted instance modified. Full reload required.')
	    }
	  })
	})


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(18)

	/* template */
	var __vue_template__ = __webpack_require__(19)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.name = __vue_options__.name || "loading"
	__vue_options__.__file = "e:\\czf-work\\myProject\\meal-sys\\meal-sys-cli-vue\\src\\components\\loading.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(16)
	  hotAPI.install(__webpack_require__(6), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4b2247f6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4b2247f6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] loading.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 18 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    replace: true,
	    computed: {
	        isShow: function () {
	            return this.$store.state.loading.isShow;
	        }
	    }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (isShow),
	      expression: "isShow"
	    }],
	    staticClass: "cm-loading"
	  }, [_m(0)])
	}},staticRenderFns: [function (){with(this) {
	  return _h('div', {
	    staticClass: "inner"
	  }, [_h('span', ["L"]), " ", _h('span', ["O"]), " ", _h('span', ["A"]), " ", _h('span', ["D"]), " ", _h('span', ["I"]), " ", _h('span', ["N"]), " ", _h('span', ["G"]), " ", _h('span', ["..."])])
	}}]}
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(16).rerender("data-v-4b2247f6", module.exports)
	  }
	}

/***/ },
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(24)

	/* template */
	var __vue_template__ = __webpack_require__(25)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.name = __vue_options__.name || "header"
	__vue_options__.__file = "e:\\czf-work\\myProject\\meal-sys\\meal-sys-cli-vue\\src\\components\\header.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(16)
	  hotAPI.install(__webpack_require__(6), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-11f13654", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-11f13654", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] header.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 24 */
/***/ function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    replace: true,
	    props: ['headerConfig'],
	    methods: {
	        leftBtnCall: function () {
	            var parentCall = this.$parent.leftBtnCall;

	            if (typeof parentCall == 'undefined') {
	                router.go(-1);
	            } else {
	                parentCall();
	            }
	        },

	        rightBtnCall: function () {
	            var parentCall = this.$parent.rightBtnCall;

	            if (typeof parentCall == 'undefined') {

	                sendWsMsg(JSON.stringify({
	                    method: 'logout'
	                }));
	            } else {
	                parentCall();
	            }
	        }
	    }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('header', {
	    staticClass: "header"
	  }, [_h('p', {
	    staticClass: "title"
	  }, [_s(headerConfig.title ? headerConfig.title : '七饭乐')]), " ", (!headerConfig.hideLeftBtn) ? _h('button', {
	    staticClass: "btn btn-l iconfont",
	    class: headerConfig.leftBtnCls,
	    on: {
	      "click": leftBtnCall
	    }
	  }) : _e(), " ", (!headerConfig.hideRightBtn) ? _h('button', {
	    staticClass: "btn btn-r iconfont",
	    class: headerConfig.rightBtnCls,
	    on: {
	      "click": rightBtnCall
	    }
	  }) : _e()])
	}},staticRenderFns: []}
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(16).rerender("data-v-11f13654", module.exports)
	  }
	}

/***/ },
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(34)

	/* template */
	var __vue_template__ = __webpack_require__(35)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.name = __vue_options__.name || "staple"
	__vue_options__.__file = "e:\\czf-work\\myProject\\meal-sys\\meal-sys-cli-vue\\src\\views\\staple.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(16)
	  hotAPI.install(__webpack_require__(6), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2307b974", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2307b974", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] staple.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    created: function () {
	        window.vm = this;
	    },
	    data: function () {
	        return {
	            shopId: this.$route.query.id,
	            headerConfig: {
	                title: null,
	                leftBtnCls: 'icon-back',
	                hideLeftBtn: false,
	                rightBtnCls: 'icon-exit',
	                hideRightBtn: false
	            }
	        };
	    },
	    methods: {
	        leftBtnCall: function () {
	            router.push({
	                path: '/main'
	            });
	        }
	    },
	    components: {
	        cmHeader: __webpack_require__(23),
	        cmTips: __webpack_require__(13),
	        cmLoading: __webpack_require__(17)
	    }
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', [_h('cmHeader', {
	    attrs: {
	      "headerConfig": headerConfig
	    }
	  }), " ", _h('footer', {
	    staticClass: "footer"
	  }, [_h('div', {
	    staticClass: "inner"
	  }, [_h('router-link', {
	    staticClass: "btn",
	    attrs: {
	      "to": {
	        path: '/staple/menuList',
	        query: {
	          id: shopId
	        }
	      }
	    }
	  }, [_m(0), " 菜单列表\n            "]), " ", _h('router-link', {
	    staticClass: "btn",
	    attrs: {
	      "to": {
	        path: '/staple/stapleDetail',
	        query: {
	          id: shopId
	        }
	      }
	    }
	  }, [_m(1), " 点餐详情\n            "])])]), " ", _h('router-view'), " ", _h('cmTips'), " ", _h('cmLoading')])
	}},staticRenderFns: [function (){with(this) {
	  return _h('i', {
	    staticClass: "iconfont icon-wucan1"
	  })
	}},function (){with(this) {
	  return _h('i', {
	    staticClass: "iconfont icon-wucan"
	  })
	}}]}
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(16).rerender("data-v-2307b974", module.exports)
	  }
	}

/***/ }
]);