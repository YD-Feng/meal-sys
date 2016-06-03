'use strict';

import Reflux from 'reflux';
import ShopAction from '../../action/main/shop';

let ShopStore = Reflux.createStore({
    init() {
        this.data = {
            shops: []
        };
        
        this.cb = null;

        this.listenTo(ShopAction.getData, this.getData);
        this.listenTo(ShopAction.setData, this.setData);
    },
    
    getData(callback) {
        ws.send(JSON.stringify({
            method: 'getShopList'
        }));
        
        this.cb = callback;
    },
    
    setData(shops) {
        this.data.shops = shops;
        this.trigger(this.data.shops);
        this.cb && this.cb();
        this.cb = null;
    }
});

module.exports = ShopStore;