(function (app) {
    app
        .controller('TugTestController', function ($scope, $interval) {

            $scope.data = {
                            Timer: {
                                        action: 'Start'
                            }
            };
            $scope.seconds = 0;
            var timerGo = function() {
                $scope.seconds = $scope.seconds + 1;
            };

            $scope.timerAction =
                function() {
                    if($scope.data.Timer.action == 'Start')
                    {
                        var intervalPromise = $interval(timerGo,1000);//setInterval(timerGo, 1000);
                        $scope.data.Timer = {
                            action: 'Stop',
                            cancelFn: function() {$interval.cancel(intervalPromise);}
                        };
                    }
                    else if ($scope.data.Timer.action == 'Stop')
                    {
                        $scope.data.Timer.cancelFn();
                        $scope.data.Timer.action = 'Reset';
                    }
                    else
                    {
                        $scope.seconds = 0;
                        $scope.data.Timer.action = 'Start';
                    }
                };

        });
})(sttApp);