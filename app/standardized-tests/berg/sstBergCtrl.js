(function(app){
    app
        .controller('BergTestController', function ($scope, BergSvc) {
            $scope.data = {
                testName: 'Berg Balance Scale',
                Questions: BergSvc.getTestQuestions(),
                QUESTION_COUNT: BergSvc.getTestQuestions().length,
                MAX_SCORE: 56,
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