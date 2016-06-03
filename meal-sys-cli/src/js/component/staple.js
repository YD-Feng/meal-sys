'use strict';

import React from 'react';
import { Link } from 'react-router';
import GoBack from './common/goBack';
import Logout from './common/logout';

let Staple = React.createClass({
    contextTypes: {
        route: React.PropTypes.object,
        router: React.PropTypes.object.isRequired
    },
    
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
                        <Link className="btn" to={{
                            pathname: '/staple/menuList',
                            query : {
                                id : this.props.location.query.id
                            }
                        }}>
                            <i className="iconfont icon-wucan1"></i>&nbsp;菜单列表
                        </Link>
                        <Link className="btn" to={{
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
            </div>
        );
    }
});

module.exports = Staple; 