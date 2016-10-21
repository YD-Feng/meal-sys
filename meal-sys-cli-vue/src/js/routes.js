module.exports = [
    {
        path: '/',
        name: 'login',
        component: function (resolve, reject) {
            require.ensure(['./../views/login.vue'], function (require) {
                resolve(require('./../views/login.vue'));
            });
        }
    },
    {
        path: '/login',
        name: 'login',
        component: function (resolve) {
            require.ensure(['./../views/login.vue'], function (require) {
                resolve(require('./../views/login.vue'));
            });
        }
    },
    {
        path: '/main',
        name: 'main',
        component: function (resolve) {
            require.ensure(['./../views/main.vue'], function (require) {
                resolve(require('./../views/main.vue'));
            });
        },
        children: [
            {
                path: '',
                redirect: 'bookList'
            },
            {
                path: 'bookList',
                name: 'bookList',
                component: function (resolve) {
                    require.ensure(['./../views/main/bookList.vue'], function (require) {
                        resolve(require('./../views/main/bookList.vue'));
                    });
                }
            },
            {
                path: 'shopList',
                name: 'shopList',
                component: function (resolve) {
                    require.ensure(['./../views/main/shopList.vue'], function (require) {
                        resolve(require('./../views/main/shopList.vue'));
                    });
                }
            }
        ]
    },
    {
        path: '/staple',
        name: 'staple',
        component: function (resolve) {
            require.ensure(['./../views/staple.vue'], function (require) {
                resolve(require('./../views/staple.vue'));
            });
        },
        children: [
            {
                path: '',
                redirect: 'menuList'
            },
            {
                path: 'menuList',
                name: 'menuList',
                component: function (resolve) {
                    require.ensure(['./../views/staple/menuList.vue'], function (require) {
                        resolve(require('./../views/staple/menuList.vue'));
                    });
                }
            },
            {
                path: 'stapleDetail',
                name: 'stapleDetail',
                component: function (resolve) {
                    require.ensure(['./../views/staple/stapleDetail.vue'], function (require) {
                        resolve(require('./../views/staple/stapleDetail.vue'));
                    });
                }
            }
        ]
    }
];
