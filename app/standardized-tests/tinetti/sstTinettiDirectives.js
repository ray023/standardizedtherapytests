'use strict';
(function (app) {
    app
        .directive('sstBalanceTestTemplate', function () {
            return {
                templateUrl: "app/standardized-tests/tinetti/partials/sstBalanceTestTemplate.html",
                restrict: "E"
            }
        });

    app
        .directive('sstGaitTestTemplate', function () {
            return {
                templateUrl: "app/standardized-tests/tinetti/partials/sstGaitTestTemplate.html",
                restrict: "E"
            }
        });

    app
        .directive('sstTinettiSummaryBlock', function () {
            return {
                templateUrl: "app/standardized-tests/tinetti/partials/sstTinettiSummaryBlock.html",
                restrict: "E"
            }
        });

})(sttApp);