'use strict';

import React from 'react';
import Reflux from 'reflux';
import AppLoadingStore from '../../store/appLoading';

let Loading = React.createClass({
    mixins: [Reflux.connect(AppLoadingStore, 'isLoading')],
    
    getInitialState() {
        return {
            isLoading: false
        };
    },
    
    render() {
        return (
            <div className={'cm-loading' + (this.state.isLoading ? '' : ' hide')}>
                <div className="inner">
                    <span>L</span>
                    <span>O</span>
                    <span>A</span>
                    <span>D</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                    <span>...</span>
                </div>
            </div> 
        )
    }
});

module.exports = Loading;