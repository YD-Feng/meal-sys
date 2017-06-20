'use strict';

import React from 'react';
import { connect } from 'react-redux';

let Loading = React.createClass({
    render() {
        return (
            <div className={'cm-loading' + (this.props.loading ? '' : ' hide')}>
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

Loading = connect((state) => {
    return {
        loading: state.loading
    }
})(Loading);

module.exports = Loading;
