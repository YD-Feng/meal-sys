<template>
    <div>
        <cmHeader :headerConfig="headerConfig"></cmHeader>

        <footer class="footer">
            <div class="inner">
                <router-link class="btn" to="/main/bookList">
                    <i class="iconfont icon-diancan1"></i>&nbsp;我要点餐
                </router-link>
                <router-link class="btn" to="/main/shopList">
                    <i class="iconfont icon-diancan"></i>&nbsp;发起点餐
                </router-link>
            </div>
        </footer>

        <router-view></router-view>

        <cmTips></cmTips>
        <cmLoading></cmLoading>
    </div>
</template>

<script>
    module.exports = {
        created: function () {
            window.vm = this;
        },
        data: function () {
            return {
                headerConfig: {
                    title: null,
                    leftBtnCls: 'icon-home',
                    hideLeftBtn: false,
                    rightBtnCls: 'icon-exit',
                    hideRightBtn: false
                }
            }
        },
        methods: {
            leftBtnCall: function () {
                router.push({
                    path: '/main'
                });
            }
        },
        components: {
            cmHeader: require('../components/header.vue'),
            cmTips: require('../components/tips.vue'),
            cmLoading: require('../components/loading.vue')
        }
    };
</script>
