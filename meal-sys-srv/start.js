#!/usr/bin/env node
//上面一行表明此文件是 node 可执行文件

//定义全局变量
global.ws = null;

var debug = require('debug')('test:server'),//引入 debug 模块，打印调试日志
    http = require('http'),//引入 http 模块，用以创建 http 服务
    queryString = require('querystring'),//引入 querystring 模块，用以将对象转成post请求数据字符串
    _ = require('underscore'),//引入 underscore 模块
    userCount = 0,
    bookList = [],
    shopList = [{
        id: 1,
        name: '真功夫',
        bigImgUrl: 'img/demo/shop01.jpg',
        des: '原盅蒸饭，营养还是蒸的好~'
    },{
        id: 2,
        name: '梁华瓦罉饭',
        bigImgUrl: 'img/demo/shop02.jpg',
        des: '实惠 | 便捷 | 健康 | 美味'
    }],
    menuList = {
        1: [{
            id: 1,
            name: '香汁排骨饭',
            price: 18
        },{
            id: 2,
            name: '鱼香茄子饭',
            price: 16
        }],
        2: [{
            id: 1,
            name: '梅菜肉饼饭',
            price: 12
        },{
            id: 2,
            name: '榨菜肉丝饭',
            price: 12
        }]
    },
    stapleList = {};

/*----------------- 长链接业务代码 node-webSocket -----------------*/
ws = require('nodejs-websocket').createServer(function (conn) {
    //用户信息登入
    conn.on('text', function (str) {
        var obj = JSON.parse(str);

        switch (obj.method) {
            case 'login':
                login(obj.data, conn);
                break;
            case 'logout':
                logout(conn);
                break;
            case 'getShopList':
                getShopList(conn);
                break;
            case 'launch':
                launch(obj.data, conn);
                break;
            case 'getBookList':
                getBookList(conn);
                break;
            case 'getMenuList':
                getMenuList(obj.data, conn);
                break;
            case 'getStapleList':
                getStapleList(obj.data, conn);
                break;
            case 'check':
                check(obj.data, conn);
                break;
            case 'cancel':
                cancel(obj.data, conn);
                break;
            case 'getCheckedList':
                getCheckedList(obj.data, conn);
                break;
            case 'finish':
                finish(obj.data, conn);
                break;
            default:
                break;
        }
    });

    //连接断开
    conn.on('close', function (code, reason) {
        if (userCount > 0) {
            userCount--
        }
        console.log('有用户断开了与server的连接，当前用户总连接数：' + userCount);
    });

    //出错处理
    conn.on('error', function (err) {
        console.info(err);
    });
}).listen(9527);

ws.on('connection', function (conn) {
    userCount++;
    console.log('有用户成功接入server，当前用户总连接数：' + userCount);
});

//用户信息登入
function login (data, conn) {
    setTimeout(function () {
        if (data.name && data.name != '') {
            conn.curUser = conn.curUser || {};
            //保存用户头像url
            conn.curUser.name = data.name;
            //回传登录成功信息
            conn.sendText(JSON.stringify({
                method: 'loginSuccess',
                data: null
            }));
        } else {
            //回传登录失败信息
            conn.sendText(JSON.stringify({
                method: 'loginFail',
                data: '名字不能为空'
            }));
        }
    }, 300);
}

function logout (conn) {
    setTimeout(function () {
        conn.curUser && delete conn.curUser.name;
        //回传退出登录成功信息
        conn.sendText(JSON.stringify({
            method: 'logoutSuccess',
            data: null
        }));
    }, 300);
}

function getShopList (conn) {
    //回传店铺列表
    conn.sendText(JSON.stringify({
        method: 'getShopListSuccess',
        data: shopList
    }));
}

function launch (data, conn) {
    if (conn.curUser && conn.curUser.name && conn.curUser.name != '') {
        var shop = _.find(shopList, function (item) {
            return item.id == data.id;
        });

        shop.launcher = conn.curUser.name;

        var inBookList = _.find(bookList, function (item) {
            return item.id == shop.id;
        });

        if (inBookList) {
            //回传发起订餐失败信息
            conn.sendText(JSON.stringify({
                method: 'launchFail',
                data: '该订餐已经有人发起了'
            }));
        } else {
            bookList.push(shop);

            //回传发起订餐成功信息
            conn.sendText(JSON.stringify({
                method: 'launchSuccess'
            }));

            //回传发起订餐的店铺列表(向全体在线用户)
            ws.connections.forEach(function (conn) {
                conn.sendText(JSON.stringify({
                    method: 'getBookListSuccess',
                    data: bookList
                }));
            });
        }
    } else {
        conn.sendText(JSON.stringify({
            method: 'logoutSuccess'
        }));
    }
}

function getBookList (conn) {
    //回传发起订餐的店铺列表
    conn.sendText(JSON.stringify({
        method: 'getBookListSuccess',
        data: bookList
    }));
}

function getMenuList (data, conn) {
    var result = [];
    if (data && data.shopId && menuList[data.shopId.toString()]) {
        result = menuList[data.shopId.toString()];
    }
    //回传对应店铺的菜谱列表
    conn.sendText(JSON.stringify({
        method: 'getMenuListSuccess',
        data: result
    }));
}

function check (data, conn) {
    if (conn.curUser && conn.curUser.name && conn.curUser.name != '') {

        var shopId = data.shopId.toString(),
            name = conn.curUser.name,
            result = [],
            checkedList = null;

        //点餐结束检测
        if (!_.find(bookList, function (item) { return item.id == shopId })) {

            //回传店铺点餐结束信息
            conn.sendText(JSON.stringify({
                method: 'bookFinish',
                data: '点餐已结束，3秒后跳回【我要点餐】'
            }));

            return;

        }

        if (!stapleList[shopId]) {
            stapleList[shopId] = {};
        }

        if (!stapleList[shopId][name]) {
            stapleList[shopId][name] = [];
        }

        stapleList[shopId][name] = _.union(stapleList[shopId][name], [data.foodId]);
        result = stapleList[shopId][name];
        //回传对应店铺的菜谱列表
        conn.sendText(JSON.stringify({
            method: 'getCheckedListSuccess',
            data: result
        }));

        checkedList = processStapleList(shopId);

        //回传发起订餐的店铺列表(向全体在线用户)
        ws.connections.forEach(function (conn) {
            conn.sendText(JSON.stringify({
                method: 'getStapleListSuccess',
                data: checkedList
            }));
        });

    } else {
        conn.sendText(JSON.stringify({
            method: 'logoutSuccess'
        }));
    }
}

function cancel (data, conn) {
    if (conn.curUser && conn.curUser.name && conn.curUser.name != '') {

        var shopId = data.shopId.toString(),
            name = conn.curUser.name,
            result = [],
            checkedList = null;

        //点餐结束检测
        if (!_.find(bookList, function (item) { return item.id == shopId })) {

            //回传店铺点餐结束信息
            conn.sendText(JSON.stringify({
                method: 'bookFinish',
                data: '点餐已结束，3秒后跳回【我要点餐】'
            }));

            return;

        }

        if (stapleList[shopId] && stapleList[shopId][name]) {
            stapleList[shopId][name] = _.without(stapleList[shopId][name], data.foodId);
            result = stapleList[shopId][name];
        }
        //回传对应店铺的菜谱列表
        conn.sendText(JSON.stringify({
            method: 'getCheckedListSuccess',
            data: result
        }));

        checkedList = processStapleList(shopId);

        //回传发起订餐的店铺列表(向全体在线用户)
        ws.connections.forEach(function (conn) {
            conn.sendText(JSON.stringify({
                method: 'getStapleListSuccess',
                data: checkedList
            }));
        });

    } else {
        conn.sendText(JSON.stringify({
            method: 'logoutSuccess'
        }));
    }
}

function getCheckedList (data, conn) {
    if (conn.curUser && conn.curUser.name && conn.curUser.name != '') {

        var shopId = data.shopId.toString(),
            name = conn.curUser.name,
            result = [];

        //点餐结束检测
        if (!_.find(bookList, function (item) { return item.id == shopId })) {

            //回传店铺点餐结束信息
            conn.sendText(JSON.stringify({
                method: 'bookFinish',
                data: '点餐已结束，3秒后跳回【我要点餐】'
            }));

            return;

        }

        if (stapleList[shopId] && stapleList[shopId][name]) {
            result = stapleList[shopId][name];
        }
        //回传对应店铺的菜谱列表
        conn.sendText(JSON.stringify({
            method: 'getCheckedListSuccess',
            data: result
        }));

    } else {
        conn.sendText(JSON.stringify({
            method: 'logoutSuccess'
        }));
    }
}

function getStapleList (data, conn) {
    var shopId = data.shopId.toString(),
        result = null;

    //点餐结束检测
    if (!_.find(bookList, function (item) { return item.id == shopId })) {

        //回传店铺点餐结束信息
        conn.sendText(JSON.stringify({
            method: 'bookFinish',
            data: '点餐已结束，3秒后跳回【我要点餐】'
        }));

        return;

    }

    result = processStapleList(shopId);

    conn.sendText(JSON.stringify({
        method: 'getStapleListSuccess',
        data: result
    }));
}

function processStapleList (shopId) {
    var result = {};

    if (stapleList[shopId]) {

        var curStapleList = stapleList[shopId];

        _.each(curStapleList, function (checkedList, name) {

            _.each(checkedList, function (foodId, index) {


                if (!result[foodId.toString()]) {

                    var curMenuList = menuList[shopId],
                        curFood = _.find(curMenuList, function (food) {
                            return food.id == foodId;
                        });

                    if (curFood) {
                        result[foodId.toString()] = curFood;
                        result[foodId.toString()].checkList = [];
                        result[foodId.toString()].checkList.push(name);
                    }

                } else if (result[foodId.toString()]) {
                    result[foodId.toString()].checkList.push(name);
                }

            });

        });

    }

    return result;
}

function finish (data, conn) {
    if (conn.curUser && conn.curUser.name && conn.curUser.name != '') {

        var shopId = data.shopId.toString(),
            canFinish = _.find(bookList, function (item) {
                return item.id == shopId && item.launcher == conn.curUser.name;
            });

        if (canFinish) {

            bookList = _.reject(bookList, function (item) {
                return item.id == shopId && item.launcher == conn.curUser.name;
            });

            stapleList[shopId] && delete stapleList[shopId];

            //回传结束点餐成功信息
            conn.sendText(JSON.stringify({
                method: 'finishSuccess',
                data: '操作成功，3秒后跳回【我要点餐】'
            }));

        } else {

            //回传结束点餐失败信息
            conn.sendText(JSON.stringify({
                method: 'finishFail',
                data: '操作失败，你非点餐发起者'
            }));

        }

    } else {
        conn.sendText(JSON.stringify({
            method: 'logoutSuccess'
        }));
    }
}
