'use strict';

import React from 'react';
import { connect } from 'react-redux';

let Tips = React.createClass({
    render() {
        return (
            <div className={this.props.tips == '' ? 'cm-tips-box' : 'cm-tips-box cm-tips-box-show'}>{this.props.tips}</div>
        )
    }
});

Tips = connect((state) => {
    return {
        tips: state.tips
    }
})(Tips);

module.exports = Tips;
