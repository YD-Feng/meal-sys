<template>
    <header class="header">
        <p class="title">{{headerConfig.title ? headerConfig.title : '七饭乐'}}</p>
        <button class="btn btn-l iconfont" v-if="!headerConfig.hideLeftBtn" :class="headerConfig.leftBtnCls" @click="leftBtnCall"></button>
        <button class="btn btn-r iconfont" v-if="!headerConfig.hideRightBtn" :class="headerConfig.rightBtnCls" @click="rightBtnCall"></button>
    </header>
</template>

<script>
    module.exports = {
        replace: true,
        props: ['headerConfig'],
        methods: {
            leftBtnCall: function () {
                var parentCall = this.$parent.leftBtnCall;

                if (typeof parentCall == 'undefined') {
                    router.go(-1);
                } else {
                    parentCall();
                }
            },

            rightBtnCall: function () {
                var parentCall = this.$parent.rightBtnCall;

                if (typeof parentCall == 'undefined') {

                    sendWsMsg(JSON.stringify({
                        method: 'logout'
                    }));
                } else {
                    parentCall();
                }
            }
        }
    };
</script>
