webpackJsonp([5],{4:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var i=a(1),l=n(i),r=l["default"].createActions(["setPath"]);t.exports=r},17:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var i=a(2),l=n(i),r=l["default"].createClass({displayName:"Logout",handleClick:function(){ws.send(JSON.stringify({method:"logout"}))},render:function(){return l["default"].createElement("a",{className:"btn btn-r iconfont icon-exit",onClick:this.handleClick.bind(this)})}});t.exports=r},18:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var i=a(1),l=n(i),r=a(4),s=n(r),c=l["default"].createStore({init:function(){this.timeout=null,this.data={currentPath:""},this.listenTo(s["default"].setPath,this.setPath)},setPath:function(t){var e=this;e.data.currentPath=t,e.trigger(e.data.currentPath)}});t.exports=c},24:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var i=a(2),l=n(i),r=a(1),s=n(r),c=a(5),u=a(17),o=n(u),d=a(18),f=n(d),m=l["default"].createClass({displayName:"Main",mixins:[s["default"].connect(f["default"],"currentPath")],getInitialState:function(){return{currentPath:null}},render:function(){return l["default"].createElement("div",null,l["default"].createElement("header",{className:"header"},l["default"].createElement("p",{className:"title"},"七饭乐"),l["default"].createElement(c.Link,{className:"btn btn-l iconfont icon-home",to:"/main"}),l["default"].createElement(o["default"],null)),l["default"].createElement("footer",{className:"footer"},l["default"].createElement("div",{className:"inner"},l["default"].createElement(c.Link,{className:"/main/shopList"!=this.state.currentPath?"btn active":"btn",to:"/main/bookList"},l["default"].createElement("i",{className:"iconfont icon-diancan1"})," 我要点餐"),l["default"].createElement(c.Link,{className:"/main/shopList"==this.state.currentPath?"btn active":"btn",to:"/main/shopList"},l["default"].createElement("i",{className:"iconfont icon-diancan"})," 发起点餐"))),l["default"].createElement("div",{className:"wrap-page"},this.props.children))}});t.exports=m}});