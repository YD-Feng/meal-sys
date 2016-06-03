'use strict';

import React from 'react';
import Reflux from 'reflux';
import AppTipsStore from '../../store/appTips';

let Tips = React.createClass({
    mixins: [ Reflux.connect(AppTipsStore, 'tips')],
    
    getInitialState() {
        return {
            tips: ''
        };
    },
    
    render() {
        return (
            <div className={this.state.tips == '' ? 'cm-tips-box' : 'cm-tips-box cm-tips-box-show'}>{this.state.tips}</div>
        )
    }
});

module.exports = Tips;