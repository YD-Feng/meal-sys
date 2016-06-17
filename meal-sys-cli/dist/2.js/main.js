webpackJsonp([2],{

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(18);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(21);

	var _logout = __webpack_require__(35);

	var _logout2 = _interopRequireDefault(_logout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Main = _react2.default.createClass({
	    displayName: 'Main',
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                'header',
	                { className: 'header' },
	                _react2.default.createElement(
	                    'p',
	                    { className: 'title' },
	                    '七饭乐'
	                ),
	                _react2.default.createElement(_reactRouter.Link, { className: 'btn btn-l iconfont icon-home', to: '/main' }),
	                _react2.default.createElement(_logout2.default, null)
	            ),
	            _react2.default.createElement(
	                'footer',
	                { className: 'footer' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'inner' },
	                    _react2.default.createElement(
	                        _reactRouter.Link,
	                        { className: 'btn', to: '/main/bookList' },
	                        _react2.default.createElement('i', { className: 'iconfont icon-diancan1' }),
	                        ' 我要点餐'
	                    ),
	                    _react2.default.createElement(
	                        _reactRouter.Link,
	                        { className: 'btn', to: '/main/shopList' },
	                        _react2.default.createElement('i', { className: 'iconfont icon-diancan' }),
	                        ' 发起点餐'
	                    )
	                )
	            ),
	            _react2.default.createElement(
	                'div',
	                { className: 'wrap-page' },
	                this.props.children
	            )
	        );
	    }
	});

	module.exports = Main;

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(18);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Logout = _react2.default.createClass({
	    displayName: 'Logout',
	    handleClick: function handleClick() {
	        ws.send(JSON.stringify({
	            method: 'logout'
	        }));
	    },
	    render: function render() {
	        return _react2.default.createElement('a', { className: 'btn btn-r iconfont icon-exit', onClick: this.handleClick.bind(this) });
	    }
	});

	module.exports = Logout;

/***/ }

});