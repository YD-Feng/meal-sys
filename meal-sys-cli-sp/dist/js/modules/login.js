webpackJsonp([4],{5:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),a=r(o),u=n(2),i=a.default.createClass({displayName:"Tips",render:function(){return a.default.createElement("div",{className:""==this.props.tips?"cm-tips-box":"cm-tips-box cm-tips-box-show"},this.props.tips)}});i=(0,u.connect)(function(e){return{tips:e.tips}})(i),e.exports=i},16:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),c=r(s),l=n(2),p=n(3),f=n(5),m=r(f),d=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){var e=this;return c.default.createElement("div",{className:"wrap-page"},c.default.createElement("div",{className:"page page-login"},c.default.createElement("div",{className:"form-wrap"},c.default.createElement("input",{type:"text",className:"input",placeholder:"请输入你的名字",value:this.props.userName,onChange:function(t){return e.nameChange(t)}}),c.default.createElement("button",{type:"button",className:"btn",onClick:function(t){return e.login(t)}},"开 始 点 餐"))),c.default.createElement(m.default,null))}},{key:"nameChange",value:function(e){this.props.dispatch((0,p.setUserName)(e.target.value))}},{key:"login",value:function(){ws.send(JSON.stringify({method:"login",data:{name:this.props.userName}}))}}]),t}(c.default.Component);d=(0,l.connect)(function(e){return{userName:e.userName}})(d),e.exports=d}});