'use strict';

import Reflux from 'reflux';
import MenuAction from '../../action/staple/menu';

let MenuStore = Reflux.createStore({
    init() {
        this.data = {
            menus: []
        };
        
        this.cb = null;

        this.listenTo(MenuAction.getData, this.getData);
        this.listenTo(MenuAction.setData, this.setData);
    },
    
    getData(shopId, callback) {
        ws.send(JSON.stringify({
            method: 'getMenuList',
            data: {
                shopId: shopId
            }
        }));
        
        this.cb = callback;
    },
    
    setData(menus) {
        this.data.menus = menus;
        this.trigger(this.data.menus);
        this.cb && this.cb();
        this.cb = null;
    }
});

module.exports = MenuStore;