(function(app){
    app
        .controller('DashTestController', function ($scope, DashSvc) {
            $scope.data = {
                testName: 'The Dash',
                Questions: DashSvc.getTestQuestions(),
                QUESTION_COUNT: DashSvc.getTestQuestions().length,
                REQUIRED_COUNT: DashSvc.getTestQuestions().length - 3,
                REQUIRED_MESSAGE: 'A dash score may not be calculated if there are greater than 3 missing items',
                Answers: {},
                AnswerCount: 0,
                Sum: 0
            };

            $scope.calculateSum = function () {
                var sum = 0;
                var answerCount = 0;
                angular.forEach($scope.data.Answers, function (value, key) {
                    sum = sum + parseInt(value, 10);
                    answerCount++;
                });
                $scope.data.Sum = sum;
                $scope.data.AnswerCount = answerCount;
            };
        });
})(sttApp);