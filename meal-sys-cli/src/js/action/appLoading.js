'use strict';

import Reflux from 'reflux';

// REFLUX actions
let AppLoadingAction = Reflux.createActions([
    'show',
    'hide',
]);

module.exports = AppLoadingAction;