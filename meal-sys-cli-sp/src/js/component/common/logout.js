'use strict';

import React from 'react';

let Logout = React.createClass({
    handleClick() {
        ws.send(JSON.stringify({
            method: 'logout'
        }));
    },
    
    render() {
        return (
            <a className="btn btn-r iconfont icon-exit" onClick={this.handleClick.bind(this)}></a> 
        )
    }
});

module.exports = Logout;