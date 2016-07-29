'use strict';

import React from 'react';
import Reflux from 'reflux';
import _ from 'underscore';
import q from 'q';
import { Link } from 'react-router';
import MenuStore from '../../store/staple/menu';
import MenuAction from '../../action/staple/menu';
import CheckedListStore from '../../store/staple/checkedList';
import CheckedListAction from '../../action/staple/checkedList';
import AppLoadingAction from '../../action/appLoading';
import AppLocationAction from '../../action/appLocation';

import Loading from '../../component/common/loading';
import Tips from '../../component/common/tips';

let MenuList = React.createClass({
    mixins: [Reflux.connect(MenuStore, 'menus'), Reflux.connect(CheckedListStore, 'checkedList')],
    
    getInitialState() {
        return {
            menus: null,
            checkedList: []
        };
    },
    
    componentWillMount() {
        let _this = this,
            getMenuData = function () {
                let deferred = q.defer();
                
                MenuAction.getData(_this.props.location.query.id, function () {
                    deferred.resolve()
                });
                
                return deferred.promise;
            },
            getCheckListData = function () {
                let deferred = q.defer();
                
                CheckedListAction.getData(_this.props.location.query.id, function () {
                    deferred.resolve()
                });
                
                return deferred.promise;
            };
            
        AppLocationAction.setPath(_this.props.location.pathname);
        AppLoadingAction.show();
        
        q.allSettled([getMenuData(), getCheckListData()]).done(function (result) {
            AppLoadingAction.hide();
        });
    },
    
    check(id) {
        var _this = this;
        
        AppLoadingAction.show();
        
        CheckedListAction.check({
            shopId: _this.props.location.query.id,
            foodId: id
        }, function () {
            AppLoadingAction.hide();
        });
    },
    
    cancel(id) {
        var _this = this;
        
        AppLoadingAction.show();
        
        CheckedListAction.cancel({
            shopId: _this.props.location.query.id,
            foodId: id
        }, function () {
            AppLoadingAction.hide();
        });
    },
    
    render() {
        let _this = this,
            html = null,
            checkedList = this.state.checkedList,
            check = this.check,
            cancel = this.cancel;
        
        if (this.state.menus && this.state.menus.length == 0) {
            html = 
            <div className="cm-no-data">
                <i className="face"></i> 
                <p className="text">这家店不想混了，菜单空无一物</p>
            </div>;
        } else {
            html = 
            <ul className="menu-list"> 
                {
                    this.state.menus && this.state.menus.map(function (item, i) {
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
                            }} onClick={check.bind(_this, item.id)}>点餐</button>
                            <button className="btn btn-cancel" style={{
                                display: checked ? '' : 'none'
                            }} onClick={cancel.bind(_this, item.id)}>取消</button>
                        </li>;
                    })
                }
            </ul>;
        }
        
        return (
            <div>
                {html}
                <Loading></Loading>
                <Tips></Tips>
            </div>
        );
    }
});

module.exports = MenuList;