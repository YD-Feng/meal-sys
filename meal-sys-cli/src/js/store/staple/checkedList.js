'use strict';

import Reflux from 'reflux';
import CheckedListAction from '../../action/staple/checkedList';

let CheckedListStore = Reflux.createStore({
    init() {
        this.data = {
            checkedList: []
        };

        this.listenTo(CheckedListAction.getData, this.getData);
        this.listenTo(CheckedListAction.setData, this.setData);
        this.listenTo(CheckedListAction.check, this.check);
        this.listenTo(CheckedListAction.cancel, this.cancel);
    },
    
    getData(shopId, callback) {
        ws.send(JSON.stringify({
            method: 'getCheckedList',
            data: {
                shopId: shopId
            }
        }));
        
        this.cb = callback;
    },
    
    setData(checkedList) {
        this.data.checkedList = checkedList;
        this.trigger(this.data.checkedList);
        this.cb && this.cb();
        this.cb = null;
    },
    
    check(opts, callback) {
        ws.send(JSON.stringify({
            method: 'check',
            data: {
                shopId: opts.shopId,
                foodId: opts.foodId
            }
        }));
        
        this.cb = callback;
    },
    
    cancel(opts, callback) {
        ws.send(JSON.stringify({
            method: 'cancel',
            data: {
                shopId: opts.shopId,
                foodId: opts.foodId
            }
        }));
        
        this.cb = callback;
    }
});

module.exports = CheckedListStore;