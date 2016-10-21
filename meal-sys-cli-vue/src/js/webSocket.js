module.exports = function () {
    var host = '10.7.204.128',
        port = 9527,
        url = 'ws://' + host + ':' + port + '/';

    window.ws = new WebSocket(url);
    window.wsCount = 0;

    ws.onmessage = function (e) {
        var re = JSON.parse(e.data),
            methods = {
                loginSuccess: function () {
                    localStorage.setItem('userName', vm.name);
                    router.push({
                        name: 'main'
                    });
                },

                loginFail: function () {
                    vm.$store.dispatch('showTips', JSON.parse(e.data).data);
                },

                logoutSuccess: function () {
                    localStorage.removeItem('userName');
                    router.push({
                        name: 'login'
                    });
                },

                getShopListSuccess: function () {
                    vm.list = JSON.parse(e.data).data;
                },

                launchSuccess: function () {
                    vm.goTo();
                },

                launchFail: function () {
                    vm.$store.dispatch('showTips', JSON.parse(e.data).data);
                },

                getBookListSuccess: function () {
                    vm.list = JSON.parse(e.data).data;
                },

                getMenuListSuccess: function () {
                    vm.menuList = JSON.parse(e.data).data;
                },

                getCheckedListSuccess: function () {
                    vm.checkedList = JSON.parse(e.data).data;
                },

                getStapleListSuccess: function () {
                    vm.stapleList = JSON.parse(e.data).data;
                },

                bookFinish: function () {
                    vm.$store.dispatch('showTips', JSON.parse(e.data).data);

                    setTimeout(function () {
                        router.push({
                            path: '/main'
                        });
                    }, 3000);
                },

                finishSuccess: function () {
                    vm.$store.dispatch('showTips', JSON.parse(e.data).data);

                    setTimeout(function () {
                        router.push({
                            path: '/main'
                        });
                    }, 3000);
                },

                finishFail: function () {
                    vm.$store.dispatch('showTips', JSON.parse(e.data).data);
                }
            };

        methods[re.method] && methods[re.method](re.data);

        window.wsCount > 0 && window.wsCount--;
        if (window.wsCount == 0) {
            vm.$store.dispatch('hideLoading');
        }
    };

    window.sendWsMsg = function (str) {
        vm.$store.dispatch('showLoading');
        window.wsCount++;
        ws.send(str);
    }
};
