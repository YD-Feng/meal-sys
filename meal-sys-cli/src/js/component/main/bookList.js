'use strict';

import React from 'react';
import Reflux from 'reflux';
import { Link } from 'react-router';
import BookStore from '../../store/main/book';
import BookAction from '../../action/main/book';
import AppLoadingAction from '../../action/appLoading';
import AppLocationAction from '../../action/appLocation';

import Loading from '../../component/common/loading';

let BookList = React.createClass({
    mixins: [Reflux.connect(BookStore, 'shops')],
    
    getInitialState() {
        return {
            shops: null
        };
    },
    
    componentWillMount() {
        AppLocationAction.setPath(this.props.location.pathname);
        AppLoadingAction.show();
            
        BookAction.getData(function () {
            AppLoadingAction.hide();
        });
    },
    
    handleClick(id) {
        this.props.history.pushState(null, '/staple', {
            id: id
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
                                <p className="des">点餐发起人：<em className="cm-text-red">{item.launcher}</em></p>
                                <button className="btn" onClick={handleClick.bind(_this, item.id)}>我 要<br/>点 餐</button>
                            </div>
                        </li>;
                    })
                }
            </ul>;
        }
        
        return (
            <div>
                <h2 className="mod-title green">我要点餐</h2>
                {html}
                <Loading></Loading>
            </div>
        );
    }
});

module.exports = BookList;