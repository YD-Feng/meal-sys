'use strict';

import React from 'react';

let GoBack = React.createClass({
    handleClick() {
        this.props.history.goBack();
    },

    render() {
        return (
            <a className="btn btn-l iconfont icon-back" onClick={(e) => this.handleClick(e)}></a>
        )
    }
});

module.exports = GoBack;
