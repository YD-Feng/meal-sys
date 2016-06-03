'use strict';

import Reflux from 'reflux';
import _ from 'underscore';
import DetailAction from '../../action/staple/detail';

let DetailStore = Reflux.createStore({
    init() {
        this.data = {
            detail: {}
        };
        
        this.cb = null;

        this.listenTo(DetailAction.getData, this.getData);
        this.listenTo(DetailAction.setData, this.setData);
    },
    
    getData(shopId, callback) {
        ws.send(JSON.stringify({
            method: 'getStapleList',
            data: {
                shopId: shopId
            }
        }));
        
        this.cb = callback;
    },
    
    setData(detail) {
        var arr = [];
        _.each(detail, function (item, key) {
            arr.push(item);
        });
        
        this.data.detail = arr;
        this.trigger(this.data.detail);
        this.cb && this.cb();
        this.cb = null;
    }
});

module.exports = DetailStore;