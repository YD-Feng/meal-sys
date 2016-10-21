module.exports = {
    state: {
        isShow: false
    },
    mutations: {
        SHOW_LOADING: function (state) {
            state.isShow = true;
        },
        HIDE_LOADING: function (state) {
            state.isShow = false;
        }
    },
    actions: {
        showLoading: function (store) {
            store.commit('SHOW_LOADING');
        },

        hideLoading: function (store) {
            store.commit('HIDE_LOADING');
        }
    }
}
