'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import GoBack from './common/goBack';
import Logout from './common/logout';
import Tips from '../component/common/tips';
import Loading from '../component/common/loading';

class Staple extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <p className="title">七饭乐</p>
                    <GoBack history={this.props.history}></GoBack>
                    <Logout></Logout>
                </header>

                <footer className="footer">
                    <div className="inner">
                        <Link className={this.props.path != '/staple/stapleDetail' ? 'btn active': 'btn'} to={{
                            pathname: '/staple/menuList',
                            query : {
                                id : this.props.location.query.id
                            }
                        }}>
                            <i className="iconfont icon-wucan1"></i>&nbsp;菜单列表
                        </Link>
                        <Link className={this.props.path == '/staple/stapleDetail' ? 'btn active': 'btn'} to={{
                            pathname: '/staple/stapleDetail',
                            query : {
                                id : this.props.location.query.id
                            }
                        }}>
                            <i className="iconfont icon-wucan"></i>&nbsp;点餐详情
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

Staple = connect((state) => {
    return {
        path: state.path
    }
})(Staple);

module.exports = Staple;
