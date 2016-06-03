'use strict';

import React from 'react';
import Reflux from 'reflux';
import { Link } from 'react-router';
import DetailStore from '../../store/staple/detail';
import DetailAction from '../../action/staple/detail';
import AppLoadingAction from '../../action/appLoading';

import Loading from '../../component/common/loading';
import Tips from '../../component/common/tips';

let StapleDetail = React.createClass({
    mixins: [Reflux.connect(DetailStore, 'detail')],
    
    getInitialState() {
        return {
            detail: null
        };
    },
    
    componentWillMount() {
        let _this = this;
        
        AppLoadingAction.show();
            
        DetailAction.getData(_this.props.location.query.id, function () {
            AppLoadingAction.hide();
        });
    },
    
    handleClick() {
        ws.send(JSON.stringify({
            method: 'finish',
            data: {
                shopId: this.props.location.query.id
            }
        }));
    },
    
    render() {
        let html = null,
            totalCount = 0,
            totalPrice = 0;
        
        if (this.state.detail && this.state.detail.length == 0) {
            html = 
            <div className="cm-no-data">
                <i className="face"></i> 
                <p className="text">暂时还没有任何人点餐呢</p>
            </div>;
        } else {
            html = 
            <ul className="detail-list"> 
                {
                    this.state.detail && this.state.detail.map(function (item, foodId) {
                        let userCount = item.checkList.length,
                            userList = item.checkList.join('、');
                        
                        totalCount += userCount;
                        totalPrice += userCount * item.price;
                            
                        return <li className="item">
                            <div className="top-wrap">
                                <p className="title">
                                    {item.name}
                                    <em className="cm-text-yellow">（{item.price}元）</em>
                                </p>
                                <p className="count">
                                    已点&nbsp;
                                    <em className="cm-text-yellow">{userCount}</em>
                                    &nbsp;份
                                </p>
                            </div>
                            <div className="bottom-wrap">
                                <span className="cm-text-green">好这口的人：</span>
                                {userList}
                            </div>
                        </li>;
                    })
                }
            </ul>;
        }
        
        return (
            <div>
                {html}
                <div className="total-msg">
                    订餐份数：
                    <em className="cm-text-red fBold">{totalCount}</em>
                    ， 订餐总价：
                    <em className="cm-text-red fBold">{totalPrice}</em>
                    元
                </div>
                <div className="btn-finish-wrap">
                    <button className="btn-finish" onClick={this.handleClick.bind(this)}>结 束 订 餐</button>
                </div>
                <Loading></Loading>
                <Tips></Tips>
            </div>
        );
    }
});

module.exports = StapleDetail;