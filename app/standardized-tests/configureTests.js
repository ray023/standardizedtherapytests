(function (app) {
    app.config(function ($stateProvider) {
        var testTabs = [
            {
                tabName: 'tab.test-tinetti',
                urlPart: 'tinetti',
                htmlPart: 'tinetti-test.html',
                controller: 'TinettiTestController'
            },
            {
                tabName: 'tab.test-barthel',
                urlPart: 'barthel',
                htmlPart: 'barthel-test.html',
                controller: 'BarthelTestController'
            },
            {
                tabName: 'tab.test-berg',
                urlPart: 'berg',
                htmlPart: 'berg-balance-scale.html',
                controller: 'BergTestController'
            },
            {
                tabName: 'tab.test-dash',
                urlPart: 'dash',
                htmlPart: 'the-dash.html',
                controller: 'DashTestController'
            },
            {
                tabName: 'tab.test-tug',
                urlPart: 'tug',
                htmlPart: 'tug-test.html',
                controller: 'TugTestController'
            },
            {
                tabName: 'tab.test-fois',
                urlPart: 'fois',
                htmlPart: 'fois.html',
                controller: 'FoisTestController'
            }
        ];

        angular.forEach(testTabs, function (value) {
            console.log('app/standardized-tests/' + value.tabName + '/' + value.htmlPart);
            $stateProvider
                .state(value.tabName, {
                    url: '/standardized-tests/' + value.urlPart,
                    views: {
                        'tab-standardized-tests': {
                            templateUrl: 'app/standardized-tests/' + value.urlPart + '/' + value.htmlPart,
                            controller: value.controller
                        }
                    }
                })
        });

    });
})(sttApp);