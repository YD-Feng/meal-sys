webpackJsonp([7],{

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

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(18);

	var _react2 = _interopRequireDefault(_react);

	var _reflux = __webpack_require__(19);

	var _reflux2 = _interopRequireDefault(_reflux);

	var _reactRouter = __webpack_require__(21);

	var _detail = __webpack_require__(57);

	var _detail2 = _interopRequireDefault(_detail);

	var _detail3 = __webpack_require__(27);

	var _detail4 = _interopRequireDefault(_detail3);

	var _appLoading = __webpack_require__(39);

	var _appLoading2 = _interopRequireDefault(_appLoading);

	var _loading = __webpack_require__(40);

	var _loading2 = _interopRequireDefault(_loading);

	var _tips = __webpack_require__(31);

	var _tips2 = _interopRequireDefault(_tips);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var StapleDetail = _react2.default.createClass({
	    displayName: 'StapleDetail',

	    mixins: [_reflux2.default.connect(_detail2.default, 'detail')],

	    getInitialState: function getInitialState() {
	        return {
	            detail: null
	        };
	    },
	    componentWillMount: function componentWillMount() {
	        var _this = this;

	        _appLoading2.default.show();

	        _detail4.default.getData(_this.props.location.query.id, function () {
	            _appLoading2.default.hide();
	        });
	    },
	    handleClick: function handleClick() {
	        ws.send(JSON.stringify({
	            method: 'finish',
	            data: {
	                shopId: this.props.location.query.id
	            }
	        }));
	    },
	    render: function render() {
	        var html = null,
	            totalCount = 0,
	            totalPrice = 0;

	        if (this.state.detail && this.state.detail.length == 0) {
	            html = _react2.default.createElement(
	                'div',
	                { className: 'cm-no-data' },
	                _react2.default.createElement('i', { className: 'face' }),
	                _react2.default.createElement(
	                    'p',
	                    { className: 'text' },
	                    '暂时还没有任何人点餐呢'
	                )
	            );
	        } else {
	            html = _react2.default.createElement(
	                'ul',
	                { className: 'detail-list' },
	                this.state.detail && this.state.detail.map(function (item, foodId) {
	                    var userCount = item.checkList.length,
	                        userList = item.checkList.join('、');

	                    totalCount += userCount;
	                    totalPrice += userCount * item.price;

	                    return _react2.default.createElement(
	                        'li',
	                        { className: 'item' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'top-wrap' },
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'title' },
	                                item.name,
	                                _react2.default.createElement(
	                                    'em',
	                                    { className: 'cm-text-yellow' },
	                                    '（',
	                                    item.price,
	                                    '元）'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                { className: 'count' },
	                                '已点 ',
	                                _react2.default.createElement(
	                                    'em',
	                                    { className: 'cm-text-yellow' },
	                                    userCount
	                                ),
	                                ' 份'
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'bottom-wrap' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'cm-text-green' },
	                                '好这口的人：'
	                            ),
	                            userList
	                        )
	                    );
	                })
	            );
	        }

	        return _react2.default.createElement(
	            'div',
	            null,
	            html,
	            _react2.default.createElement(
	                'div',
	                { className: 'total-msg' },
	                '订餐份数：',
	                _react2.default.createElement(
	                    'em',
	                    { className: 'cm-text-red fBold' },
	                    totalCount
	                ),
	                '， 订餐总价：',
	                _react2.default.createElement(
	                    'em',
	                    { className: 'cm-text-red fBold' },
	                    totalPrice
	                ),
	                '元'
	            ),
	            _react2.default.createElement(
	                'div',
	                { className: 'btn-finish-wrap' },
	                _react2.default.createElement(
	                    'button',
	                    { className: 'btn-finish', onClick: this.handleClick.bind(this) },
	                    '结 束 订 餐'
	                )
	            ),
	            _react2.default.createElement(_loading2.default, null),
	            _react2.default.createElement(_tips2.default, null)
	        );
	    }
	});

	module.exports = StapleDetail;

/***/ },

/***/ 57:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reflux = __webpack_require__(19);

	var _reflux2 = _interopRequireDefault(_reflux);

	var _underscore = __webpack_require__(20);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _detail = __webpack_require__(27);

	var _detail2 = _interopRequireDefault(_detail);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DetailStore = _reflux2.default.createStore({
	    init: function init() {
	        this.data = {
	            detail: {}
	        };

	        this.cb = null;

	        this.listenTo(_detail2.default.getData, this.getData);
	        this.listenTo(_detail2.default.setData, this.setData);
	    },
	    getData: function getData(shopId, callback) {
	        ws.send(JSON.stringify({
	            method: 'getStapleList',
	            data: {
	                shopId: shopId
	            }
	        }));

	        this.cb = callback;
	    },
	    setData: function setData(detail) {
	        var arr = [];
	        _underscore2.default.each(detail, function (item, key) {
	            arr.push(item);
	        });

	        this.data.detail = arr;
	        this.trigger(this.data.detail);
	        this.cb && this.cb();
	        this.cb = null;
	    }
	});

	module.exports = DetailStore;

/***/ }

});