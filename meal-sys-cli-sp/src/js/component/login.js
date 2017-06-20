'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { setUserName } from '../actions';
import Tips from '../component/common/tips';

class Login extends React.Component {
    render() {
        return (
            <div className="wrap-page">
                <div className="page page-login">
                    <div className="form-wrap">
                        <input type="text" className="input" placeholder="请输入你的名字" value={this.props.userName} onChange={(e) => this.nameChange(e)} />
                        <button type="button" className="btn" onClick={(e) => this.login(e)}>开 始 点 餐</button>
                    </div>
                </div>
                <Tips></Tips>
            </div>
        )
    }

    nameChange(e) {
        this.props.dispatch(setUserName(e.target.value));
    }

    login() {
        ws.send(JSON.stringify({
            method: 'login',
            data: {
                name: this.props.userName
            }
        }));
    }
};

Login = connect((state) => {
    return {
        userName: state.userName
    }
})(Login);

module.exports = Login;
