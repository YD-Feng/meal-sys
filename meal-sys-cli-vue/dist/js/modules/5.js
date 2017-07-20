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
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

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
	__vue_options__.__file = "F:\\code\\@meal-sys\\meal-sys-cli-vue\\src\\components\\tips.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(16)
	  hotAPI.install(__webpack_require__(6), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5ad15fa7", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5ad15fa7", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tips.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),
/* 14 */
/***/ (function(module, exports) {

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

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "cm-tips-box",
	    class: {
	      'cm-tips-box-show': _vm.msg != ''
	    }
	  }, [_vm._v(_vm._s(_vm.msg))])
	},staticRenderFns: []}
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(16).rerender("data-v-5ad15fa7", module.exports)
	  }
	}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	var Vue // late bind
	var version
	var map = window.__VUE_HOT_MAP__ = Object.create(null)
	var installed = false
	var isBrowserify = false
	var initHookName = 'beforeCreate'

	exports.install = function (vue, browserify) {
	  if (installed) return
	  installed = true

	  Vue = vue.__esModule ? vue.default : vue
	  version = Vue.version.split('.').map(Number)
	  isBrowserify = browserify

	  // compat with < 2.0.0-alpha.7
	  if (Vue.config._lifecycleHooks.indexOf('init') > -1) {
	    initHookName = 'init'
	  }

	  exports.compatible = version[0] >= 2
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

	exports.rerender = tryWrap(function (id, options) {
	  var record = map[id]
	  if (!options) {
	    record.instances.slice().forEach(function (instance) {
	      instance.$forceUpdate()
	    })
	    return
	  }
	  if (typeof options === 'function') {
	    options = options.options
	  }
	  record.Ctor.options.render = options.render
	  record.Ctor.options.staticRenderFns = options.staticRenderFns
	  record.instances.slice().forEach(function (instance) {
	    instance.$options.render = options.render
	    instance.$options.staticRenderFns = options.staticRenderFns
	    instance._staticTrees = [] // reset static trees
	    instance.$forceUpdate()
	  })
	})

	exports.reload = tryWrap(function (id, options) {
	  var record = map[id]
	  if (options) {
	    if (typeof options === 'function') {
	      options = options.options
	    }
	    makeOptionsHot(id, options)
	    if (version[1] < 2) {
	      // preserve pre 2.2 behavior for global mixin handling
	      record.Ctor.extendOptions = options
	    }
	    var newCtor = record.Ctor.super.extend(options)
	    record.Ctor.options = newCtor.options
	    record.Ctor.cid = newCtor.cid
	    record.Ctor.prototype = newCtor.prototype
	    if (newCtor.release) {
	      // temporary global mixin strategy used in < 2.0.0-alpha.6
	      newCtor.release()
	    }
	  }
	  record.instances.slice().forEach(function (instance) {
	    if (instance.$vnode && instance.$vnode.context) {
	      instance.$vnode.context.$forceUpdate()
	    } else {
	      console.warn('Root or manually mounted instance modified. Full reload required.')
	    }
	  })
	})


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

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
	__vue_options__.__file = "F:\\code\\@meal-sys\\meal-sys-cli-vue\\src\\components\\loading.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(16)
	  hotAPI.install(__webpack_require__(6), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-01f57c9d", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-01f57c9d", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] loading.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),
/* 18 */
/***/ (function(module, exports) {

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

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isShow),
	      expression: "isShow"
	    }],
	    staticClass: "cm-loading"
	  }, [_vm._m(0)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "inner"
	  }, [_c('span', [_vm._v("L")]), _vm._v(" "), _c('span', [_vm._v("O")]), _vm._v(" "), _c('span', [_vm._v("A")]), _vm._v(" "), _c('span', [_vm._v("D")]), _vm._v(" "), _c('span', [_vm._v("I")]), _vm._v(" "), _c('span', [_vm._v("N")]), _vm._v(" "), _c('span', [_vm._v("G")]), _vm._v(" "), _c('span', [_vm._v("...")])])
	}]}
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(16).rerender("data-v-01f57c9d", module.exports)
	  }
	}

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

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
	__vue_options__.__file = "F:\\code\\@meal-sys\\meal-sys-cli-vue\\src\\components\\header.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(16)
	  hotAPI.install(__webpack_require__(6), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-554822bc", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-554822bc", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] header.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),
/* 24 */
/***/ (function(module, exports) {

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

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('header', {
	    staticClass: "header"
	  }, [_c('p', {
	    staticClass: "title"
	  }, [_vm._v(_vm._s(_vm.headerConfig.title ? _vm.headerConfig.title : '七饭乐'))]), _vm._v(" "), (!_vm.headerConfig.hideLeftBtn) ? _c('button', {
	    staticClass: "btn btn-l iconfont",
	    class: _vm.headerConfig.leftBtnCls,
	    on: {
	      "click": _vm.leftBtnCall
	    }
	  }) : _vm._e(), _vm._v(" "), (!_vm.headerConfig.hideRightBtn) ? _c('button', {
	    staticClass: "btn btn-r iconfont",
	    class: _vm.headerConfig.rightBtnCls,
	    on: {
	      "click": _vm.rightBtnCall
	    }
	  }) : _vm._e()])
	},staticRenderFns: []}
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(16).rerender("data-v-554822bc", module.exports)
	  }
	}

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

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
	__vue_options__.__file = "F:\\code\\@meal-sys\\meal-sys-cli-vue\\src\\views\\staple.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(16)
	  hotAPI.install(__webpack_require__(6), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-654d15de", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-654d15de", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] staple.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('cmHeader', {
	    attrs: {
	      "headerConfig": _vm.headerConfig
	    }
	  }), _vm._v(" "), _c('footer', {
	    staticClass: "footer"
	  }, [_c('div', {
	    staticClass: "inner"
	  }, [_c('router-link', {
	    staticClass: "btn",
	    attrs: {
	      "to": {
	        path: '/staple/menuList',
	        query: {
	          id: _vm.shopId
	        }
	      }
	    }
	  }, [_c('i', {
	    staticClass: "iconfont icon-wucan1"
	  }), _vm._v(" 菜单列表\n            ")]), _vm._v(" "), _c('router-link', {
	    staticClass: "btn",
	    attrs: {
	      "to": {
	        path: '/staple/stapleDetail',
	        query: {
	          id: _vm.shopId
	        }
	      }
	    }
	  }, [_c('i', {
	    staticClass: "iconfont icon-wucan"
	  }), _vm._v(" 点餐详情\n            ")])], 1)]), _vm._v(" "), _c('router-view'), _vm._v(" "), _c('cmTips'), _vm._v(" "), _c('cmLoading')], 1)
	},staticRenderFns: []}
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(16).rerender("data-v-654d15de", module.exports)
	  }
	}

/***/ })
]);