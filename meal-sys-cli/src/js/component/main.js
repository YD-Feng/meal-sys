'use strict';

import React from 'react';
import Reflux from 'reflux';
import { Link } from 'react-router';
import Logout from './common/logout';

import AppLocationStore from './../store/appLocation';

let Main = React.createClass({
    mixins: [Reflux.connect(AppLocationStore, 'currentPath')],

    getInitialState() {
        return {
            currentPath: null
        };
    },

    render() {
        return ( 
            <div>
                <header className="header">
                    <p className="title">七饭乐</p>
                    <Link className="btn btn-l iconfont icon-home" to="/main"></Link>
                    <Logout></Logout>
                </header>
                
                <footer className="footer">
                    <div className="inner">
                        <Link className={this.state.currentPath != '/main/shopList' ? 'btn active': 'btn'} to="/main/bookList">
                            <i className="iconfont icon-diancan1"></i>&nbsp;我要点餐
                        </Link>
                        <Link className={this.state.currentPath == '/main/shopList' ? 'btn active': 'btn'} to="/main/shopList">
                            <i className="iconfont icon-diancan"></i>&nbsp;发起点餐
                        </Link>
                    </div>
                </footer>
                
                <div className="wrap-page">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = Main;