'use strict';
(function (app) {
    app
        .directive('sttTimerBlock', function () {
            return {
                templateUrl: "app/shared/timer/sttTimerBlock.html",
                restrict: "E"
            }
        });


})(sttApp);