webpackJsonp([1],{

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(18);

	var _react2 = _interopRequireDefault(_react);

	var _reflux = __webpack_require__(19);

	var _reflux2 = _interopRequireDefault(_reflux);

	var _tips = __webpack_require__(31);

	var _tips2 = _interopRequireDefault(_tips);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Login = _react2.default.createClass({
	    displayName: 'Login',
	    getInitialState: function getInitialState() {
	        return {
	            name: ''
	        };
	    },
	    nameChange: function nameChange(e) {
	        this.setState({
	            name: e.target.value
	        });
	    },
	    login: function login() {
	        ws.send(JSON.stringify({
	            method: 'login',
	            data: {
	                name: this.state.name
	            }
	        }));
	    },
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'wrap-page' },
	            _react2.default.createElement(
	                'div',
	                { className: 'page page-login' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'form-wrap' },
	                    _react2.default.createElement('input', { type: 'text', className: 'input', placeholder: '请输入你的名字', value: this.state.name, onChange: this.nameChange }),
	                    _react2.default.createElement(
	                        'button',
	                        { type: 'button', className: 'btn', onClick: this.login.bind(this) },
	                        '开 始 点 餐'
	                    )
	                )
	            ),
	            _react2.default.createElement(_tips2.default, null)
	        );
	    }
	});

	module.exports = Login;

/***/ },

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

/***/ }

});