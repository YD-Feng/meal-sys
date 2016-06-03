'use strict';

import Reflux from 'reflux';

// REFLUX actions
let BookAction = Reflux.createActions([
    'getData',
    'setData',
    'launch',
    'launchSuccess'
]);

module.exports = BookAction;