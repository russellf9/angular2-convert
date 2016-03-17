import { UpgradeAdapter } from 'angular2/upgrade';
import * as angular from 'angular2/src/upgrade/angular_js';
import 'interestAppNg1'; // "bare import" for side-effects


/*
 * Create our upgradeAdapter
 */
const upgradeAdapter: UpgradeAdapter = new UpgradeAdapter();

/*
 * Expose our ng2 content to ng1
 */
angular.module('interestApp');

/**
 * Bootstrap the app
 */

upgradeAdapter.bootstrap(document.body, ['interestApp']);