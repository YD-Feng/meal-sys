'use strict';

import Reflux from 'reflux';
import AppLocationAction from '../action/appLocation';

let AppLocationStore = Reflux.createStore({
    init() {
        this.timeout = null;
        this.data = {
            currentPath: ''
        };

        this.listenTo(AppLocationAction.setPath, this.setPath);
    },
    
    setPath(path) {
        var _this = this;
        _this.data.currentPath = path;
        _this.trigger(_this.data.currentPath);
    }
});

module.exports = AppLocationStore;