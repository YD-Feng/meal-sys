<template>
    <div class="wrap-page">
        <h2 class="mod-title green">发起点餐</h2>

        <div class="cm-no-data" v-if="list && list.length == 0">
            <i class="face"></i>
            <p class="text">还没有发起任何点餐</p>
        </div>

        <ul class="shop-list" v-if="list">
            <li class="item" v-for="item in list">
                <div class="img-wrap">
                    <img :src="item.bigImgUrl" />
                </div>
                <div class="cont-wrap">
                    <p class="title">{{item.name}}</p>
                    <p class="des">{{item.des}}</p>
                    <button class="btn btn-orange" @click="launch(item.id)">发 起<br/>点 餐</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    module.exports = {
        created: function () {
            var _this = this;
            window.vm = _this;
            _this.getData();
        },
        data: function () {
            return {
                curId: '',
                list: null
            }
        },
        methods: {
            getData: function () {
                sendWsMsg(JSON.stringify({
                    method: 'getShopList'
                }));
            },

            launch: function (id) {
                this.curId = id;
                sendWsMsg(JSON.stringify({
                    method: 'launch',
                    data: {
                        id: id
                    }
                }));
            },

            goTo: function (id) {
                router.push({
                    path: '/staple',
                    query: {
                        id: this.curId
                    }
                });
            }
        }
    };
</script>
