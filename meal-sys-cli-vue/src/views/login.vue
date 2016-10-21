<template>
    <div>
        <div class="wrap-page">
            <div class="page page-login">
                <div class="form-wrap">
                    <input type="text" class="input" placeholder="请输入你的名字" v-model="name" />
                    <button type="button" class="btn" @click="login">开 始 点 餐</button>
                </div>
            </div>
        </div>

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
                name: ''
            }
        },
        methods: {
            login: function () {
                sendWsMsg(JSON.stringify({
                    method: 'login',
                    data: {
                        name: this.name
                    }
                }));
            }
        },
        components: {
            cmTips: require('../components/tips.vue'),
            cmLoading: require('../components/loading.vue')
        }
    };
</script>
