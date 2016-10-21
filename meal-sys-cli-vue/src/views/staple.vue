<template>
    <div>
        <cmHeader :headerConfig="headerConfig"></cmHeader>

        <footer class="footer">
            <div class="inner">
                <router-link class="btn" :to="{path: '/staple/menuList',query: {id: shopId}}">
                    <i class="iconfont icon-wucan1"></i>&nbsp;菜单列表
                </router-link>
                <router-link class="btn" :to="{path: '/staple/stapleDetail',query: {id: shopId}}">
                    <i class="iconfont icon-wucan"></i>&nbsp;点餐详情
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
                shopId: this.$route.query.id,
                headerConfig: {
                    title: null,
                    leftBtnCls: 'icon-back',
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
