'use strict';
(function (app) {
    app
        .directive('sstBergTestTemplate', function () {
            return {
                templateUrl: "app/standardized-tests/berg/partials/sstBergTestTemplate.html",
                restrict: "E"
            }
        });

    app
        .directive('sstBergSummaryBlock', function () {
            return {
                templateUrl: "app/standardized-tests/berg/partials/sstBergSummaryBlock.html",
                restrict: "E"
            }
        });

})(sttApp);