webpackJsonp([7],{

/***/ 16:
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

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(42)

	/* template */
	var __vue_template__ = __webpack_require__(43)
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
	__vue_options__.__file = "F:\\code\\@meal-sys\\meal-sys-cli-vue\\src\\views\\staple\\stapleDetail.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(16)
	  hotAPI.install(__webpack_require__(6), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-10aa5430", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-10aa5430", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] stapleDetail.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ }),

/***/ 42:
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

	var _ = __webpack_require__(38);

	module.exports = {
	    created: function () {
	        var _this = this;

	        window.vm = _this;

	        _this.getStapleList(_this.$route.query.id);
	    },
	    data: function () {
	        return {
	            shopId: this.$route.query.id,
	            stapleList: null
	        };
	    },
	    methods: {
	        getStapleList: function (shopId) {
	            sendWsMsg(JSON.stringify({
	                method: 'getStapleList',
	                data: {
	                    shopId: shopId
	                }
	            }));
	        },

	        finish: function (id) {
	            var _this = this;
	            sendWsMsg(JSON.stringify({
	                method: 'finish',
	                data: {
	                    shopId: _this.$route.query.id
	                }
	            }));
	        }
	    },
	    computed: {
	        list: function () {
	            var _this = this,
	                arr = [];

	            console.info(_this.stapleList);
	            if (!_this.stapleList) {
	                return null;
	            } else {
	                _.each(_this.stapleList, function (item) {
	                    item.userCount = item.checkList.length;
	                    item.userList = item.checkList.join('、');
	                    arr.push(item);
	                });

	                return arr;
	            }
	        },
	        total: function () {
	            var _this = this,
	                totalCount = 0,
	                totalPrice = 0;

	            if (_this.stapleList) {
	                _.each(_this.stapleList, function (item) {
	                    totalCount += item.checkList.length;
	                    totalPrice += item.checkList.length * item.price;
	                });
	            }

	            return {
	                count: totalCount,
	                price: totalPrice
	            };
	        }
	    }
	};

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "wrap-page"
	  }, [(_vm.list && _vm.list.length == 0) ? _c('div', {
	    staticClass: "cm-no-data"
	  }, [_c('i', {
	    staticClass: "face"
	  }), _vm._v(" "), _c('p', {
	    staticClass: "text"
	  }, [_vm._v("暂时还没有任何人点餐呢")])]) : _vm._e(), _vm._v(" "), (_vm.list) ? _c('ul', {
	    staticClass: "detail-list"
	  }, _vm._l((_vm.list), function(item) {
	    return _c('li', {
	      staticClass: "item"
	    }, [_c('div', {
	      staticClass: "top-wrap"
	    }, [_c('p', {
	      staticClass: "title"
	    }, [_vm._v("\n                    " + _vm._s(item.name) + "\n                    "), _c('em', {
	      staticClass: "cm-text-yellow"
	    }, [_vm._v("（" + _vm._s(item.price) + "元）")])]), _vm._v(" "), _c('p', {
	      staticClass: "count"
	    }, [_vm._v("\n                    已点 \n                    "), _c('em', {
	      staticClass: "cm-text-yellow"
	    }, [_vm._v(_vm._s(item.userCount))]), _vm._v("\n                     份\n                ")])]), _vm._v(" "), _c('div', {
	      staticClass: "bottom-wrap"
	    }, [_c('span', {
	      staticClass: "cm-text-green"
	    }, [_vm._v("好这口的人：")]), _vm._v("\n                " + _vm._s(item.userList) + "\n            ")])])
	  })) : _vm._e(), _vm._v(" "), (_vm.list && _vm.list.length != 0) ? _c('div', {
	    staticClass: "total-msg"
	  }, [_vm._v("\n        订餐份数：\n        "), _c('em', {
	    staticClass: "cm-text-red fBold"
	  }, [_vm._v(_vm._s(_vm.total.count))]), _vm._v("\n        ， 订餐总价：\n        "), _c('em', {
	    staticClass: "cm-text-red fBold"
	  }, [_vm._v(_vm._s(_vm.total.price))]), _vm._v("\n        元\n    ")]) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "btn-finish-wrap",
	    class: {
	      'status-no-data': _vm.list && _vm.list.length == 0
	    }
	  }, [_c('button', {
	    staticClass: "btn-finish",
	    on: {
	      "click": _vm.finish
	    }
	  }, [_vm._v("结 束 订 餐")])]), _vm._v(" "), _c('br')])
	},staticRenderFns: []}
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(16).rerender("data-v-10aa5430", module.exports)
	  }
	}

/***/ })

});