'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Logout from './common/logout';
import Tips from '../component/common/tips';
import Loading from '../component/common/loading';


class Main extends React.Component {
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
                        <Link className={this.props.path != '/main/shopList' ? 'btn active': 'btn'} to="/main/bookList">
                            <i className="iconfont icon-diancan1"></i>&nbsp;我要点餐
                        </Link>
                        <Link className={this.props.path == '/main/shopList' ? 'btn active': 'btn'} to="/main/shopList">
                            <i className="iconfont icon-diancan"></i>&nbsp;发起点餐
                        </Link>
                    </div>
                </footer>

                <div className="wrap-page">
                    {this.props.children}
                </div>

                <Tips></Tips>
                <Loading></Loading>
            </div>
        );
    }
};

Main = connect((state) => {
    return {
        path: state.path
    }
})(Main);

module.exports = Main;
