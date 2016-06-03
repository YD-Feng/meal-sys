'use strict';

import Reflux from 'reflux';
import AppTipsAction from '../action/appTips';

let AppTipsStore = Reflux.createStore({
    init() {
        this.timeout = null;
        this.data = {
            tips: ''
        };

        this.listenTo(AppTipsAction.setTips, this.setTips);
    },
    
    setTips(tips) {
        var _this = this;
        _this.data.tips = tips;
        _this.trigger(_this.data.tips);
        
        clearTimeout(_this.timeout);
        _this.timeout = setTimeout(function () {
            _this.data.tips = '';
            _this.trigger(_this.data.tips);
        }, 3000);
    }
});

module.exports = AppTipsStore;