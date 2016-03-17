System.register(['angular2/upgrade', 'angular2/src/upgrade/angular_js', 'interestAppNg1'], function(exports_1) {
    var upgrade_1, angular;
    var upgradeAdapter;
    return {
        setters:[
            function (upgrade_1_1) {
                upgrade_1 = upgrade_1_1;
            },
            function (angular_1) {
                angular = angular_1;
            },
            function (_1) {}],
        execute: function() {
            /*
             * Create our upgradeAdapter
             */
            upgradeAdapter = new upgrade_1.UpgradeAdapter();
            /*
             * Expose our ng2 content to ng1
             */
            angular.module('interestApp');
            /**
             * Bootstrap the app
             */
            upgradeAdapter.bootstrap(document.body, ['interestApp']);
        }
    }
});
//# sourceMappingURL=app.js.map