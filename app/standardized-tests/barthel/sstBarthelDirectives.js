'use strict';
(function (app) {
    app
        .directive('sstBarthelTestTemplate', function () {
            return {
                templateUrl: "app/standardized-tests/barthel/partials/sstBarthelTestTemplate.html",
                restrict: "E"
            }
        });

    app
        .directive('sstBarthelSummaryBlock', function () {
            return {
                templateUrl: "app/standardized-tests/barthel/partials/sstBarthelSummaryBlock.html",
                restrict: "E"
            }
        });

})(sttApp);