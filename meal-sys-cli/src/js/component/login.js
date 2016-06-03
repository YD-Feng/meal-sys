'use strict';

import React from 'react';
import Reflux from 'reflux';
import Tips from '../component/common/tips';

let Login = React.createClass({
    getInitialState() {
        return {
            name: ''
        };
    },
    
    nameChange(e) {
        this.setState({
            name: e.target.value
        });
    },
    
    login() {
        ws.send(JSON.stringify({
            method: 'login',
            data: {
                name: this.state.name
            }
        }));
    },
    
    render() {
        return (
            <div className="wrap-page">
                <div className="page page-login">
                    <div className="form-wrap">
                        <input type="text" className="input" placeholder="请输入你的名字" value={this.state.name} onChange={this.nameChange} />
                        <button type="button" className="btn" onClick={this.login.bind(this)}>开 始 点 餐</button>
                    </div>
                </div>
                <Tips></Tips>
            </div>
        )
    }
});

module.exports = Login;