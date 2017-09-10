(function (app) {
    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "app/shared/tabs.html"
            })
            .state('tab.standardized-tests', {
                url: '/standardized-tests',
                views: {
                    'tab-standardized-tests': {
                        templateUrl: 'app/standardized-tests/tab-standardized-tests.html',
                        controller: 'StandardizedTestController'
                    }
                }
            })
            .state('tab.settings', {
                url: '/settings',
                views: {
                    'tab-settings': {
                        templateUrl: 'app/settings/tab-settings.html',
                        controller: 'SettingsCtrl'
                    }
                }
            });
        $urlRouterProvider.otherwise('/tab/standardized-tests');
    });
})(sttApp);