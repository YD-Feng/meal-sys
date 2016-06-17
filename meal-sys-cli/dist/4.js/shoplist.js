webpackJsonp([4],{

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(18);

	var _react2 = _interopRequireDefault(_react);

	var _reflux = __webpack_require__(19);

	var _reflux2 = _interopRequireDefault(_reflux);

	var _appTips = __webpack_require__(32);

	var _appTips2 = _interopRequireDefault(_appTips);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Tips = _react2.default.createClass({
	    displayName: 'Tips',

	    mixins: [_reflux2.default.connect(_appTips2.default, 'tips')],

	    getInitialState: function getInitialState() {
	        return {
	            tips: ''
	        };
	    },
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: this.state.tips == '' ? 'cm-tips-box' : 'cm-tips-box cm-tips-box-show' },
	            this.state.tips
	        );
	    }
	});

	module.exports = Tips;

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reflux = __webpack_require__(19);

	var _reflux2 = _interopRequireDefault(_reflux);

	var _appTips = __webpack_require__(22);

	var _appTips2 = _interopRequireDefault(_appTips);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AppTipsStore = _reflux2.default.createStore({
	    init: function init() {
	        this.timeout = null;
	        this.data = {
	            tips: ''
	        };

	        this.listenTo(_appTips2.default.setTips, this.setTips);
	    },
	    setTips: function setTips(tips) {
	        var _this = this;
	        _this.data.tips = tips;
	        _this.trigger(_this.data.tips);

	        clearTimeout(_this.timeout);
	        _this.timeout = setTimeout(function () {
	            _this.data.tips = '';
	            _this.trigger(_this.data.tips);
	        }, 3000);
	    }
	});

	module.exports = AppTipsStore;

/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reflux = __webpack_require__(19);

	var _reflux2 = _interopRequireDefault(_reflux);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// REFLUX actions
	var AppLoadingAction = _reflux2.default.createActions(['show', 'hide']);

	module.exports = AppLoadingAction;

/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(18);

	var _react2 = _interopRequireDefault(_react);

	var _reflux = __webpack_require__(19);

	var _reflux2 = _interopRequireDefault(_reflux);

	var _appLoading = __webpack_require__(41);

	var _appLoading2 = _interopRequireDefault(_appLoading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Loading = _react2.default.createClass({
	    displayName: 'Loading',

	    mixins: [_reflux2.default.connect(_appLoading2.default, 'isLoading')],

	    getInitialState: function getInitialState() {
	        return {
	            isLoading: false
	        };
	    },
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'cm-loading' + (this.state.isLoading ? '' : ' hide') },
	            _react2.default.createElement(
	                'div',
	                { className: 'inner' },
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    'L'
	                ),
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    'O'
	                ),
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    'A'
	                ),
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    'D'
	                ),
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    'I'
	                ),
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    'N'
	                ),
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    'G'
	                ),
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    '...'
	                )
	            )
	        );
	    }
	});

	module.exports = Loading;

/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reflux = __webpack_require__(19);

	var _reflux2 = _interopRequireDefault(_reflux);

	var _appLoading = __webpack_require__(39);

	var _appLoading2 = _interopRequireDefault(_appLoading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AppLoadingStore = _reflux2.default.createStore({
	    init: function init() {
	        this.timeout = null;
	        this.data = {
	            isLoading: false
	        };

	        this.listenTo(_appLoading2.default.show, this.show);
	        this.listenTo(_appLoading2.default.hide, this.hide);
	    },
	    show: function show() {
	        this.data.isLoading = true;
	        this.trigger(this.data.isLoading);
	    },
	    hide: function hide() {
	        this.data.isLoading = false;
	        this.trigger(this.data.isLoading);
	    }
	});

	module.exports = AppLoadingStore;

/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(18);

	var _react2 = _interopRequireDefault(_react);

	var _reflux = __webpack_require__(19);

	var _reflux2 = _interopRequireDefault(_reflux);

	var _reactRouter = __webpack_require__(21);

	var _shop = __webpack_require__(44);

	var _shop2 = _interopRequireDefault(_shop);

	var _shop3 = __webpack_require__(23);

	var _shop4 = _interopRequireDefault(_shop3);

	var _book = __webpack_require__(24);

	var _book2 = _interopRequireDefault(_book);

	var _appLoading = __webpack_require__(39);

	var _appLoading2 = _interopRequireDefault(_appLoading);

	var _loading = __webpack_require__(40);

	var _loading2 = _interopRequireDefault(_loading);

	var _tips = __webpack_require__(31);

	var _tips2 = _interopRequireDefault(_tips);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ShopList = _react2.default.createClass({
	    displayName: 'ShopList',

	    mixins: [_reflux2.default.connect(_shop2.default, 'shops')],

	    getInitialState: function getInitialState() {
	        return {
	            shops: null
	        };
	    },
	    componentWillMount: function componentWillMount() {
	        var _this = this;

	        _appLoading2.default.show();

	        _shop4.default.getData(function () {
	            _appLoading2.default.hide();
	        });
	    },
	    handleClick: function handleClick(id) {
	        var _this = this;
	        _book2.default.launch(id, function () {
	            _this.props.history.pushState(null, '/staple', {
	                id: id
	            });
	        });
	    },
	    render: function render() {
	        var _this = this,
	            html = null,
	            handleClick = this.handleClick;

	        if (this.state.shops && this.state.shops.length == 0) {
	            html = _react2.default.createElement(
	                'div',
	                { className: 'cm-no-data' },
	                _react2.default.createElement('i', { className: 'face' }),
	                _react2.default.createElement(
	                    'p',
	                    { className: 'text' },
	                    '还没有发起任何点餐'
	                )
	            );
	        } else {
	            html = _react2.default.createElement(
	                'ul',
	                { className: 'shop-list' },
	                this.state.shops && this.state.shops.map(function (item, i) {
	                    return _react2.default.createElement(
	                        'li',
	                        { className: 'item' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'img-wrap' },
	                            _react2.default.createElement('img', { src: item.bigImgUrl })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'cont-wrap' },
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'title' },
	                                item.name
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'des' },
	                                item.des
	                            ),
	                            _react2.default.createElement(
	                                'button',
	                                { className: 'btn btn-orange', onClick: handleClick.bind(_this, item.id) },
	                                '发 起',
	                                _react2.default.createElement('br', null),
	                                '点 餐'
	                            )
	                        )
	                    );
	                })
	            );
	        }

	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                'h2',
	                { className: 'mod-title orange' },
	                '发起点餐'
	            ),
	            html,
	            _react2.default.createElement(_loading2.default, null),
	            _react2.default.createElement(_tips2.default, null)
	        );
	    }
	});

	module.exports = ShopList;

/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reflux = __webpack_require__(19);

	var _reflux2 = _interopRequireDefault(_reflux);

	var _shop = __webpack_require__(23);

	var _shop2 = _interopRequireDefault(_shop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ShopStore = _reflux2.default.createStore({
	    init: function init() {
	        this.data = {
	            shops: []
	        };

	        this.cb = null;

	        this.listenTo(_shop2.default.getData, this.getData);
	        this.listenTo(_shop2.default.setData, this.setData);
	    },
	    getData: function getData(callback) {
	        ws.send(JSON.stringify({
	            method: 'getShopList'
	        }));

	        this.cb = callback;
	    },
	    setData: function setData(shops) {
	        this.data.shops = shops;
	        this.trigger(this.data.shops);
	        this.cb && this.cb();
	        this.cb = null;
	    }
	});

	module.exports = ShopStore;

/***/ }

});