'use strict';
(function (app) {
    app
        .directive('tugDirectionsBlock', function () {
            return {
                templateUrl: "app/standardized-tests/tug/partials/tugDirectionsBlock.html",
                restrict: "E"
            }
        });

    app
        .directive('tugInstructionsToPatientBlock', function () {
            return {
                templateUrl: "app/standardized-tests/tug/partials/tugInstructionsToPatientBlock.html",
                restrict: "E"
            }
        });

    app
        .directive('tugVariationsBlock', function () {
            return {
                templateUrl: "app/standardized-tests/tug/partials/tugVariationsBlock.html",
                restrict: "E"
            }
        });

})(sttApp);