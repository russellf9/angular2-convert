var upgrade_1 = require('angular2/upgrade');
var angular = require('angular2/src/upgrade/angular_js');
require('interestAppNg1'); // "bare import" for side-effects
var PinControlsComponent_1 = require('./components/PinControlsComponent');
/*
 * Create our upgradeAdapter
 */
var upgradeAdapter = new upgrade_1.UpgradeAdapter();
/*
 * Expose our ng2 content to ng1
 */
angular.module('interestApp')
    .directive('pinControls', upgradeAdapter.downgradeNg2Component(PinControlsComponent_1.PinControlsComponent));
/**
 * Bootstrap the app
 */
upgradeAdapter.bootstrap(document.body, ['interestApp']);
//# sourceMappingURL=app.js.map