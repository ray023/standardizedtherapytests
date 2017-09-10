(function(app){
    app
        .controller('BarthelTestController', function ($scope, BarthelSvc) {
            $scope.data = {
                    testName: 'Barthel Test',
                    Questions: BarthelSvc.getTestQuestions(),
                    QUESTION_COUNT: BarthelSvc.getTestQuestions().length,
                    MAX_SCORE: 20,
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