'use strict';
(function (app) {
    app
        .directive('sstDashTestTemplate', function () {
            return {
                templateUrl: "app/standardized-tests/dash/partials/sstDashTestTemplate.html",
                restrict: "E"
            }
        });

    app
        .directive('sstDashSummaryBlock', function () {
            return {
                templateUrl: "app/standardized-tests/dash/partials/sstDashSummaryBlock.html",
                restrict: "E"
            }
        });

})(sttApp);