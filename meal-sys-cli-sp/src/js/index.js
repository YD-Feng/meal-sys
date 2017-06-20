'use strict';
import './../less/common.less'; //加载初始化样式

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import _ from 'underscore';

import { setTips, setBookList, setShopList, setMenuList, setCheckedList, setStapleList, hideLoading } from './actions';

let store = createStore(reducers);
let timeout = null;
window.showTips = function (tips) {
    store.dispatch(setTips(tips));

    clearTimeout(timeout);
    timeout = setTimeout(function () {
        store.dispatch(setTips(''));
    }, 3000);
};

store.subscribe(() =>
    console.log(store.getState())
);

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
            showTips(re.data);
            break;

        case 'logoutSuccess':
            location.hash = '/login';
            break;

        case 'unLogin':
            location.hash = '/login';
            break;

        case 'getShopListSuccess':
            store.dispatch(setShopList(re.data));
            store.dispatch(hideLoading());
            break;

        case 'launchSuccess':
            window.launchDef.resolve(re.data);
            break;

        case 'getBookListSuccess':
            store.dispatch(setBookList(re.data));
            store.dispatch(hideLoading());
            break;

        case 'launchFail':
            showTips(re.data);
            break;

        case 'getMenuListSuccess':
            store.dispatch(setMenuList(re.data));
            window.menuListDef.resolve();
            break;

        case 'getCheckedListSuccess':
            store.dispatch(setCheckedList(re.data));
            window.checkedListDef.resolve();
            break;

        case 'getStapleListSuccess':
            store.dispatch(hideLoading());

            var arr = [];
            _.each(re.data, function (item, key) {
                arr.push(item);
            });

            store.dispatch(setStapleList(arr));
            break;

        case 'bookFinish':
            store.dispatch(hideLoading());
            showTips(re.data);
            setTimeout(function () {
                location.hash = '/main/shopList';
            }, 3000);
            break;

        case 'finishSuccess':
            store.dispatch(hideLoading());
            showTips(re.data);
            setTimeout(function () {
                location.hash = '/main/shopList';
            }, 3000);
            break;

        case 'finishFail':
            store.dispatch(hideLoading());
            showTips(re.data);
            break;

        default:
            console.info(re.data);
    }
};

//url切换（路由变更）全局监听
window.addEventListener('hashchange', function(event) {
    //console.info(event.newURL);
}, false);

render(
    <Provider store={store}>
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
    </Provider>,
    document.getElementById('app')
);
