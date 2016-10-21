<template>
    <div class="cm-tips-box" :class="{'cm-tips-box-show': msg != ''}">{{msg}}</div>
</template>

<script>
    module.exports = {
        replace: true,
        computed: {
            msg: function () {
                return this.$store.state.tips.msg;
            }
        }
    };
</script>
