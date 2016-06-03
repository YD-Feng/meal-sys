'use strict';

import React from 'react';
import Reflux from 'reflux';
import { Link } from 'react-router';
import ShopStore from '../../store/main/shop';
import ShopAction from '../../action/main/shop';
import BookAction from '../../action/main/book';
import AppLoadingAction from '../../action/appLoading';

import Loading from '../../component/common/loading';
import Tips from '../../component/common/tips';

let ShopList = React.createClass({
    mixins: [Reflux.connect(ShopStore, 'shops')],
    
    getInitialState() {
        return {
            shops: null
        };
    },
    
    componentWillMount() {
        let _this = this;
        
        AppLoadingAction.show();
            
        ShopAction.getData(function () {
            AppLoadingAction.hide();
        });
    },
    
    handleClick(id) {
        var _this = this;
        BookAction.launch(id, function () {
            _this.props.history.pushState(null, '/staple', {
                id: id
            });
        });
    },
    
    render() {
        let _this = this,
            html = null,
            handleClick = this.handleClick;
        
        if (this.state.shops && this.state.shops.length == 0) {
            html = 
            <div className="cm-no-data">
                <i className="face"></i> 
                <p className="text">还没有发起任何点餐</p>
            </div>;
        } else {
            html = 
            <ul className="shop-list"> 
                {
                    this.state.shops && this.state.shops.map(function (item, i) {
                        return <li className="item">
                            <div className="img-wrap">
                                <img src={item.bigImgUrl}/>
                            </div>
                            <div className="cont-wrap">
                                <p className="title">{item.name}</p>
                                <p className="des">{item.des}</p>
                                <button className="btn btn-orange" onClick={handleClick.bind(_this, item.id)}>发 起<br/>点 餐</button>
                            </div>
                        </li>;
                    })
                }
            </ul>;
        }
        
        return (
            <div>
                <h2 className="mod-title orange">发起点餐</h2>
                {html}
                <Loading></Loading>
                <Tips></Tips>
            </div>
        );
    }
});

module.exports = ShopList;