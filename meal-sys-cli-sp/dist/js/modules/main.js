webpackJsonp([3],{5:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var l=n(1),r=a(l),o=n(2),i=r.default.createClass({displayName:"Tips",render:function(){return r.default.createElement("div",{className:""==this.props.tips?"cm-tips-box":"cm-tips-box cm-tips-box-show"},this.props.tips)}});i=(0,o.connect)(function(e){return{tips:e.tips}})(i),e.exports=i},9:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var l=n(1),r=a(l),o=n(2),i=r.default.createClass({displayName:"Loading",render:function(){return r.default.createElement("div",{className:"cm-loading"+(this.props.loading?"":" hide")},r.default.createElement("div",{className:"inner"},r.default.createElement("span",null,"L"),r.default.createElement("span",null,"O"),r.default.createElement("span",null,"A"),r.default.createElement("span",null,"D"),r.default.createElement("span",null,"I"),r.default.createElement("span",null,"N"),r.default.createElement("span",null,"G"),r.default.createElement("span",null,"...")))}});i=(0,o.connect)(function(e){return{loading:e.loading}})(i),e.exports=i},10:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var l=n(1),r=a(l),o=r.default.createClass({displayName:"Logout",handleClick:function(){ws.send(JSON.stringify({method:"logout"}))},render:function(){return r.default.createElement("a",{className:"btn btn-r iconfont icon-exit",onClick:this.handleClick.bind(this)})}});e.exports=o},17:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(1),u=a(c),s=n(2),f=n(7),d=n(10),p=a(d),m=n(5),h=a(m),b=n(9),E=a(b),y=function(e){function t(){return l(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement("header",{className:"header"},u.default.createElement("p",{className:"title"},"七饭乐"),u.default.createElement(f.Link,{className:"btn btn-l iconfont icon-home",to:"/main"}),u.default.createElement(p.default,null)),u.default.createElement("footer",{className:"footer"},u.default.createElement("div",{className:"inner"},u.default.createElement(f.Link,{className:"/main/shopList"!=this.props.path?"btn active":"btn",to:"/main/bookList"},u.default.createElement("i",{className:"iconfont icon-diancan1"})," 我要点餐"),u.default.createElement(f.Link,{className:"/main/shopList"==this.props.path?"btn active":"btn",to:"/main/shopList"},u.default.createElement("i",{className:"iconfont icon-diancan"})," 发起点餐"))),u.default.createElement("div",{className:"wrap-page"},this.props.children),u.default.createElement(h.default,null),u.default.createElement(E.default,null))}}]),t}(u.default.Component);y=(0,s.connect)(function(e){return{path:e.path}})(y),e.exports=y}});