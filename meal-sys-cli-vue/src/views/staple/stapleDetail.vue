<template>
    <div class="wrap-page">
        <div class="cm-no-data" v-if="list && list.length == 0">
            <i class="face"></i>
            <p class="text">暂时还没有任何人点餐呢</p>
        </div>

        <ul class="detail-list" v-if="list">
            <li class="item" v-for="item in list">
                <div class="top-wrap">
                    <p class="title">
                        {{item.name}}
                        <em class="cm-text-yellow">（{{item.price}}元）</em>
                    </p>
                    <p class="count">
                        已点&nbsp;
                        <em class="cm-text-yellow">{{item.userCount}}</em>
                        &nbsp;份
                    </p>
                </div>
                <div class="bottom-wrap">
                    <span class="cm-text-green">好这口的人：</span>
                    {{item.userList}}
                </div>
            </li>
        </ul>

        <div class="total-msg" v-if="list && list.length != 0">
            订餐份数：
            <em class="cm-text-red fBold">{{total.count}}</em>
            ， 订餐总价：
            <em class="cm-text-red fBold">{{total.price}}</em>
            元
        </div>

        <div class="btn-finish-wrap" :class="{'status-no-data': list && list.length == 0}">
            <button class="btn-finish" @click="finish">结 束 订 餐</button>
        </div>

        <br>
    </div>
</template>

<script>
    var _ = require('underscore');

    module.exports = {
        created: function () {
            var _this = this;

            window.vm = _this;

            _this.getStapleList(_this.$route.query.id);
        },
        data: function () {
            return {
                shopId: this.$route.query.id,
                stapleList: null
            }
        },
        methods: {
            getStapleList: function (shopId) {
                sendWsMsg(JSON.stringify({
                    method: 'getStapleList',
                    data: {
                        shopId: shopId
                    }
                }));
            },

            finish: function (id) {
                var _this = this;
                sendWsMsg(JSON.stringify({
                    method: 'finish',
                    data: {
                        shopId: _this.$route.query.id
                    }
                }));
            }
        },
        computed: {
            list: function () {
                var _this = this,
                    arr = [];

                console.info(_this.stapleList);
                if (!_this.stapleList) {
                    return null;
                } else {
                    _.each(_this.stapleList, function (item) {
                        item.userCount = item.checkList.length;
                        item.userList = item.checkList.join('、');
                        arr.push(item);
                    });

                    return arr;
                }
            },
            total: function () {
                var _this = this,
                    totalCount = 0,
                    totalPrice = 0;

                if (_this.stapleList) {
                    _.each(_this.stapleList, function (item) {
                        totalCount += item.checkList.length;
                        totalPrice += item.checkList.length * item.price;
                    });
                }

                return {
                    count: totalCount,
                    price: totalPrice
                };
            }
        }
    };
</script>
