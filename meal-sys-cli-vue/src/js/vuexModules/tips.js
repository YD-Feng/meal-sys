var timeoutObj = null;

module.exports = {
    state: {
        msg: ''
    },
    mutations: {
        SET_TIPS_MSG: function (state, msg) {
            state.msg = msg;

            clearTimeout(timeoutObj);
            timeoutObj = setTimeout(function () {
                state.msg = '';
            }, 3000);
        }
    },
    actions: {
        showTips: function (store, msg) {
            store.commit('SET_TIPS_MSG', msg);
        }
    }
}
