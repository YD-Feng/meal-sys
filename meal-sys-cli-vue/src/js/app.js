'use strict';

//加载初始化样式
require('./../less/common.less');
require('./webSocket')();

var Vue = require('vue'),
    VueRouter = require('vue-router'),
    Vuex = require('vuex'),
    VuexLogger = require('vuex-logger');

Vue.use(VueRouter);
Vue.use(Vuex);

//实例化 vue-router
window.router = new VueRouter({
    saveScrollPosition: true,
    transitionOnLoad: true,
    routes: require('./routes')
});

router.beforeEach(function (to, from, next) {
    if (to.name != 'login' && !localStorage.getItem('userName')) {
        router.push({
            path: '/login'
        });
    } else {
        next();
    }
});

window.store = new Vuex.Store({
    modules: {
        tips: require('./vuexModules/tips'),
        loading: require('./vuexModules/loading')
    },
    strict: false,
    middlewares: [VuexLogger()]
});

window.app = new Vue({
    router: router,
    store: store
}).$mount('#app');
