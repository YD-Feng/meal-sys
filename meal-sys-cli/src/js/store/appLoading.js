'use strict';

import Reflux from 'reflux';
import AppLoadingAction from '../action/appLoading';

let AppLoadingStore = Reflux.createStore({
    init() {
        this.timeout = null;
        this.data = {
            isLoading: false
        };

        this.listenTo(AppLoadingAction.show, this.show);
        this.listenTo(AppLoadingAction.hide, this.hide);
    },
    
    show() {
        this.data.isLoading = true;
        this.trigger(this.data.isLoading);
    },
    
    hide() {
        this.data.isLoading = false;
        this.trigger(this.data.isLoading);
    }
});

module.exports = AppLoadingStore;