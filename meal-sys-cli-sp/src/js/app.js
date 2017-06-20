'use strict';

import './../less/common.less'; //加载初始化样式

import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import AppTipsAction from './action/appTips';
import ShopAction from './action/main/shop';
import BookAction from './action/main/book';
import MenuAction from './action/staple/menu';
import CheckedListAction from './action/staple/checkedList';
import DetailAction from './action/staple/detail';

let host = '10.7.204.187',
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
    //console.info(event.newURL);
}, false);

React.render((
    <Router history={hashHistory}>
        <IndexRoute component={require('react-router-proxy?name=Login!./component/login')}></IndexRoute>
        <Route path="/" component={require('react-router-proxy?name=Login!./component/login')}></Route>
        <Route path="login" component={require('react-router-proxy?name=Login!./component/login')}></Route>
        <Route path="main" component={require('react-router-proxy?name=Main!./component/main')}>
            <IndexRoute component={require('react-router-proxy?name=BookList!./component/main/bookList')}></IndexRoute>
            <Route path="bookList" component={require('react-router-proxy?name=BookList!./component/main/bookList')}></Route>
            <Route path="shopList" component={require('react-router-proxy?name=ShopList!./component/main/shopList')}></Route>
        </Route>
        <Route path="staple" component={require('react-router-proxy?name=Staple!./component/staple')}>
            <IndexRoute component={require('react-router-proxy?name=MenuList!./component/staple/menuList')}></IndexRoute>
            <Route path="menuList" component={require('react-router-proxy?name=MenuList!./component/staple/menuList')}></Route>
            <Route path="stapleDetail" component={require('react-router-proxy?name=StapleDetail!./component/staple/stapleDetail')}></Route>
        </Route>
    </Router>
), document.body);
