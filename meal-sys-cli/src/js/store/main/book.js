'use strict';

import Reflux from 'reflux';
import BookAction from '../../action/main/book';

let BookStore = Reflux.createStore({
    init() {
        this.data = {
            shops: []
        };
        
        this.cb = null;

        this.listenTo(BookAction.getData, this.getData);
        this.listenTo(BookAction.setData, this.setData);
        this.listenTo(BookAction.launch, this.launch);
        this.listenTo(BookAction.launchSuccess, this.launchSuccess);
    },
    
    getData(callback) {
        ws.send(JSON.stringify({
            method: 'getBookList'
        }));
        
        this.cb = callback;
    },
    
    setData(shops) {
        this.data.shops = shops;
        this.trigger(this.data.shops);
        this.cb && this.cb();
        this.cb = null;
    },
    
    launch(id, callback) {
        ws.send(JSON.stringify({
            method: 'launch',
            data: {
                id: id
            }
        }));
        
        this.cb = callback;
    },
    
    launchSuccess() {
        this.cb && this.cb();
        this.cb = null;
    }
});

module.exports = BookStore;