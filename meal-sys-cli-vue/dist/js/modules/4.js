webpackJsonp([4],{

/***/ 16:
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

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(31)

	/* template */
	var __vue_template__ = __webpack_require__(32)
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
	__vue_options__.name = __vue_options__.name || "shopList"
	__vue_options__.__file = "e:\\czf-work\\myProject\\meal-sys\\meal-sys-cli-vue\\src\\views\\main\\shopList.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (true) {(function () {
	  var hotAPI = __webpack_require__(16)
	  hotAPI.install(__webpack_require__(6), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a79f6cec", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-a79f6cec", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] shopList.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },

/***/ 31:
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
	        var _this = this;
	        window.vm = _this;
	        _this.getData();
	    },
	    data: function () {
	        return {
	            curId: '',
	            list: null
	        };
	    },
	    methods: {
	        getData: function () {
	            sendWsMsg(JSON.stringify({
	                method: 'getShopList'
	            }));
	        },

	        launch: function (id) {
	            this.curId = id;
	            sendWsMsg(JSON.stringify({
	                method: 'launch',
	                data: {
	                    id: id
	                }
	            }));
	        },

	        goTo: function (id) {
	            router.push({
	                path: '/staple',
	                query: {
	                    id: this.curId
	                }
	            });
	        }
	    }
	};

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "wrap-page"
	  }, [_m(0), " ", (list && list.length == 0) ? _h('div', {
	    staticClass: "cm-no-data"
	  }, [_m(1), " ", _m(2)]) : _e(), " ", (list) ? _h('ul', {
	    staticClass: "shop-list"
	  }, [_l((list), function(item) {
	    return _h('li', {
	      staticClass: "item"
	    }, [_h('div', {
	      staticClass: "img-wrap"
	    }, [_h('img', {
	      attrs: {
	        "src": item.bigImgUrl
	      }
	    })]), " ", _h('div', {
	      staticClass: "cont-wrap"
	    }, [_h('p', {
	      staticClass: "title"
	    }, [_s(item.name)]), " ", _h('p', {
	      staticClass: "des"
	    }, [_s(item.des)]), " ", _h('button', {
	      staticClass: "btn btn-orange",
	      on: {
	        "click": function($event) {
	          launch(item.id)
	        }
	      }
	    }, ["发 起", _m(3), "点 餐"])])])
	  })]) : _e()])
	}},staticRenderFns: [function (){with(this) {
	  return _h('h2', {
	    staticClass: "mod-title green"
	  }, ["发起点餐"])
	}},function (){with(this) {
	  return _h('i', {
	    staticClass: "face"
	  })
	}},function (){with(this) {
	  return _h('p', {
	    staticClass: "text"
	  }, ["还没有发起任何点餐"])
	}},function (){with(this) {
	  return _h('br')
	}}]}
	if (true) {
	  module.hot.accept()
	  if (module.hot.data) {
	     __webpack_require__(16).rerender("data-v-a79f6cec", module.exports)
	  }
	}

/***/ }

});