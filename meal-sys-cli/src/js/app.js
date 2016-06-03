'use strict';

import './../less/common.less'; //加载初始化样式

import React from 'react';
import Reflux from 'reflux';
import _ from 'underscore';
import { Router, Route, Link, IndexRoute, IndexLink, Lifecycle, hashHistory } from 'react-router';

import AppTipsAction from './action/appTips';
import ShopAction from './action/main/shop';
import BookAction from './action/main/book';
import MenuAction from './action/staple/menu';
import CheckedListAction from './action/staple/checkedList';
import DetailAction from './action/staple/detail';

let host = '127.0.0.1',
    port = 9527,
    url = 'ws://'+host+':'+port+'/';
window.ws = new WebSocket(url);

ws.onmessage = function (e) {
    var re = JSON.parse(e.data);
    
    switch (re.method) {
        case 'loginSuccess':
            location.hash = '/main';
            break;
        case 'loginFail':
            AppTipsAction.setTips(re.data);
            break;
        case 'logoutSuccess':
            location.hash = '/login';
            break;
        case 'unLogin':
            location.hash = '/login';
            break;
        case 'getShopListSuccess':
            ShopAction.setData(re.data);
            break;
        case 'launchSuccess':
            BookAction.launchSuccess();
            break;
        case 'getBookListSuccess':
            BookAction.setData(re.data);
            break;
        case 'launchFail':
            AppTipsAction.setTips(re.data);
            break;
        case 'getMenuListSuccess':
            MenuAction.setData(re.data);
            break;
        case 'getCheckedListSuccess':
            CheckedListAction.setData(re.data);
            break;
        case 'getStapleListSuccess':
            DetailAction.setData(re.data);
            break;
        case 'bookFinish':
            AppTipsAction.setTips(re.data);
            setTimeout(function () {
                location.hash = '/main/shopList';
            }, 3000);
            break;
        case 'finishSuccess':
            AppTipsAction.setTips(re.data);
            setTimeout(function () {
                location.hash = '/main/shopList';
            }, 3000);
            break;
        case 'finishFail':
            AppTipsAction.setTips(re.data);
            break;
        default:
            console.info(re.data);
    }
}; 

//url切换（路由变更）全局监听
window.addEventListener('hashchange', function(event) {
    console.info(event.newURL);
}, false);

import Login from './component/login';
import Main from './component/main';
import BookList from './component/main/bookList';
import ShopList from './component/main/shopList';
import Staple from './component/staple';
import MenuList from './component/staple/menuList';
import StapleDetail from './component/staple/stapleDetail'; 

React.render((
    <Router history={hashHistory}>
        <IndexRoute component={Login}></IndexRoute>
        <Route path="/" component={Login}></Route>
        <Route path="login" component={Login}></Route>
        <Route path="main" component={Main}>
            <IndexRoute component={BookList}></IndexRoute>
            <Route path="bookList" component={BookList}></Route>
            <Route path="shopList" component={ShopList}></Route>
        </Route>
        <Route path="staple" component={Staple}>
            <IndexRoute component={MenuList}></IndexRoute>
            <Route path="menuList" component={MenuList}></Route>
            <Route path="stapleDetail" component={StapleDetail}></Route>
        </Route>
    </Router>
), document.body);
