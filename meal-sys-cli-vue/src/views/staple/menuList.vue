<template>
    <div class="wrap-page">
        <div class="cm-no-data" v-if="list && list.length == 0">
            <i class="face"></i>
            <p class="text">这家店不想混了，菜单空无一物</p>
        </div>

        <ul class="menu-list" v-if="list">
            <li class="item" v-for="item in list">
                <p class="title">
                    {{item.name}}
                    <em class="cm-text-red">（{{item.price}}元）</em>
                </p>
                <button class="btn" v-show="item.checked == '0'" @click="check(item.id)">点餐</button>
                <button class="btn btn-cancel" v-show="item.checked == '1'" @click="cancel(item.id)">取消</button>
            </li>
        </ul>
    </div>
</template>

<script>
    var _ = require('underscore');

    module.exports = {
        created: function () {
            var _this = this;

            window.vm = _this;

            _this.getMenuData(_this.$route.query.id);
            _this.getCheckedListData(_this.$route.query.id);
        },
        data: function () {
            return {
                shopId: this.$route.query.id,
                menuList: null,
                checkedList: null
            }
        },
        methods: {
            getMenuData: function (shopId) {
                sendWsMsg(JSON.stringify({
                    method: 'getMenuList',
                    data: {
                        shopId: shopId
                    }
                }));
            },

            getCheckedListData: function (shopId) {
                sendWsMsg(JSON.stringify({
                    method: 'getCheckedList',
                    data: {
                        shopId: shopId
                    }
                }));
            },

            check: function (id) {
                var _this = this;
                sendWsMsg(JSON.stringify({
                    method: 'check',
                    data: {
                        shopId: _this.$route.query.id,
                        foodId: id
                    }
                }));
            },

            cancel: function (id) {
                var _this = this;

                sendWsMsg(JSON.stringify({
                    method: 'cancel',
                    data: {
                        shopId: _this.$route.query.id,
                        foodId: id
                    }
                }));
            },

            goTo: function (id) {
                router.push({
                    path: '/main'
                });
            }
        },
        computed: {
            list: function () {
                var _this = this,
                    arr = [];

                if (!_this.menuList || !_this.checkedList) {
                    return null;
                } else {
                    _.each(_this.menuList, function (item) {
                        if (_.indexOf(_this.checkedList, item.id) != -1) {
                            item.checked = '1';
                        } else {
                            item.checked = '0';
                        }

                        arr.push(item);
                    });

                    return arr;
                }
            }
        }
    };
</script>
