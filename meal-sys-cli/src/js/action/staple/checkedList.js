'use strict';

import Reflux from 'reflux';

// REFLUX actions
let CheckedListAction = Reflux.createActions([
    'getData',
    'setData',
    'check',
    'cancel'
]);

module.exports = CheckedListAction;