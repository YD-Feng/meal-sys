'use strict';

import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import q from 'q';
import { setPath, showLoading, hideLoading } from '../../actions';

class MenuList extends React.Component {
    componentWillMount() {
        let _this = this;

        _this.props.dispatch(setPath(_this.props.location.pathname));
        _this.props.dispatch(showLoading());

        window.menuListDef = q.defer();
        ws.send(JSON.stringify({
            method: 'getMenuList',
            data: {
                shopId: _this.props.location.query.id
            }
        }));

        window.checkedListDef = q.defer();
        ws.send(JSON.stringify({
            method: 'getCheckedList',
            data: {
                shopId: _this.props.location.query.id
            }
        }));

        q.allSettled([window.menuListDef.promise, window.checkedListDef.promise]).done(function (result) {
            _this.props.dispatch(hideLoading());
        });
    }

    check(id) {
        var _this = this;

        _this.props.dispatch(showLoading());

        ws.send(JSON.stringify({
            method: 'check',
            data: {
                shopId: _this.props.location.query.id,
                foodId: id
            }
        }));
    }

    cancel(id) {
        var _this = this;

        _this.props.dispatch(showLoading());

        ws.send(JSON.stringify({
            method: 'cancel',
            data: {
                shopId: _this.props.location.query.id,
                foodId: id
            }
        }));
    }

    render() {
        let _this = this,
            html = null,
            checkedList = _this.props.checkedList;

        if (_this.props.menuList && _this.props.menuList.length == 0) {
            html =
            <div className="cm-no-data">
                <i className="face"></i>
                <p className="text">这家店不想混了，菜单空无一物</p>
            </div>;
        } else {
            html =
            <ul className="menu-list">
                {
                    _this.props.menuList && _this.props.menuList.map(function (item, i) {
                        let checked = false;
                        if (_.indexOf(checkedList, item.id) != -1) {
                            checked = true;
                        }
                        return <li className="item">
                            <p className="title">
                                {item.name}
                                <em className="cm-text-red">（{item.price}元）</em>
                            </p>
                            <button className="btn" style={{
                                display: checked ? 'none' : ''
                            }} onClick={(e) => _this.check(item.id)}>点餐</button>
                            <button className="btn btn-cancel" style={{
                                display: checked ? '' : 'none'
                            }} onClick={(e) => _this.cancel(item.id)}>取消</button>
                        </li>;
                    })
                }
            </ul>;
        }

        return (
            <div>
                {html}
            </div>
        );
    }
};

MenuList = connect((state) => {
    return {
        menuList: state.menuList,
        checkedList: state.checkedList
    }
})(MenuList);

module.exports = MenuList;
