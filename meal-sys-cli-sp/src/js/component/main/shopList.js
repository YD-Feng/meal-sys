'use strict';

import React from 'react';
import { connect } from 'react-redux';
import q from 'q';
import { setPath, showLoading } from '../../actions';

class ShopList extends React.Component {
    componentWillMount() {
        this.props.dispatch(setPath(this.props.location.pathname));
        this.props.dispatch(showLoading());

        ws.send(JSON.stringify({
            method: 'getShopList'
        }));
    }

    handleClick(id) {
        var _this = this;
        window.launchDef = q.defer();

        ws.send(JSON.stringify({
            method: 'launch',
            data: {
                id: id
            }
        }));

        q.all([launchDef.promise]).then(function () {
            _this.props.history.pushState(null, '/staple', {
                id: id
            });
        });
    }

    render() {
        let _this = this,
            html = null;

        if (_this.props.shopList && _this.props.shopList.length == 0) {
            html =
            <div className="cm-no-data">
                <i className="face"></i>
                <p className="text">还没有发起任何点餐</p>
            </div>;
        } else {
            html =
            <ul className="shop-list">
                {
                    _this.props.shopList && _this.props.shopList.map(function (item, i) {
                        return <li className="item">
                            <div className="img-wrap">
                                <img src={item.bigImgUrl}/>
                            </div>
                            <div className="cont-wrap">
                                <p className="title">{item.name}</p>
                                <p className="des">{item.des}</p>
                                <button className="btn btn-orange" onClick={(e) => _this.handleClick(item.id)}>发 起<br/>点 餐</button>
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
            </div>
        );
    }
};

ShopList = connect((state) => {
    return {
        shopList: state.shopList
    }
})(ShopList);

module.exports = ShopList;
