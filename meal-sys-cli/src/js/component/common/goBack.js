'use strict';

import React from 'react';

let GoBack = React.createClass({
    handleClick() {
        this.props.history.goBack();
    },
    
    render() {
        return (
            <a className="btn btn-l iconfont icon-back" onClick={this.handleClick.bind(this)}></a> 
        )
    }
});

module.exports = GoBack;