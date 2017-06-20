'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { setPath, showLoading } from '../../actions';

class StapleDetail extends React.Component {
    componentWillMount() {
        let _this = this;

        _this.props.dispatch(setPath(_this.props.location.pathname));
        _this.props.dispatch(showLoading());

        ws.send(JSON.stringify({
            method: 'getStapleList',
            data: {
                shopId: _this.props.location.query.id
            }
        }));
    }

    handleClick() {
        ws.send(JSON.stringify({
            method: 'finish',
            data: {
                shopId: this.props.location.query.id
            }
        }));
    }

    render() {
        let _this = this,
            html = null,
            totalCount = 0,
            totalPrice = 0;

        if (_this.props.stapleList && _this.props.stapleList.length == 0) {
            html =
            <div className="cm-no-data">
                <i className="face"></i>
                <p className="text">暂时还没有任何人点餐呢</p>
            </div>;
        } else {
            html =
            <ul className="detail-list">
                {
                    _this.props.stapleList && _this.props.stapleList.map(function (item, foodId) {
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
                    <button className="btn-finish" onClick={(e) => _this.handleClick(e)}>结 束 订 餐</button>
                </div>
                <br/><br/><br/>
            </div>
        );
    }
};

StapleDetail = connect((state) => {
    return {
        stapleList: state.stapleList
    }
})(StapleDetail);

module.exports = StapleDetail;
