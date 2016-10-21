<template>
    <div class="cm-loading" v-show="isShow">
        <div class="inner">
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
            <span>...</span>
        </div>
    </div>
</template>

<script>
    module.exports = {
        replace: true,
        computed: {
            isShow: function () {
                return this.$store.state.loading.isShow;
            }
        }
    };
</script>
