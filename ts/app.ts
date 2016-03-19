import { UpgradeAdapter } from 'angular2/upgrade';
import * as angular from 'angular2/src/upgrade/angular_js';
import 'interestAppNg1'; // "bare import" for side-effects
import { Pin, PinsService } from 'interestAppNg1';
import { PinControlsComponent } from './components/PinControlsComponent';


/*
 * Create our upgradeAdapter
 */
const upgradeAdapter: UpgradeAdapter = new UpgradeAdapter();



/*
 * Expose our ng2 content to ng1
 */
angular.module('interestApp')
    .directive('pinControls',
        upgradeAdapter.downgradeNg2Component(PinControlsComponent));

/**
 * Bootstrap the app
 */

upgradeAdapter.bootstrap(document.body, ['interestApp']);