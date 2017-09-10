(function (app) {
    app
        .controller('TinettiTestController', function ($scope, TinettiSvc) {

            $scope.data = {
                testName: 'Tinetti Test',
                balanceTests: {
                    Questions: TinettiSvc.getTestQuestions(),
                    QUESTION_COUNT: TinettiSvc.getTestQuestions().length,
                    MAX_SCORE: 16,
                    Answers: {},
                    AnswerCount: 0,
                    Sum: 0
                },

                gaitTests: {
                    Questions: TinettiSvc.getGaitTestQuestions(),
                    QUESTION_COUNT: TinettiSvc.getGaitTestQuestions().length,
                    MAX_SCORE: 12,
                    Answers: {},
                    CheckBoxSums: {},
                    Sum: 0,
                    AnswerCount: 0
                }
            };
            $scope.calculateBalanceSum = function () {
                var balanceSum = 0;
                var balanceAnswerCount = 0;
                angular.forEach($scope.data.balanceTests.Answers, function (value, key) {
                    balanceSum = balanceSum + parseInt(value, 10);
                    balanceAnswerCount++;
                });
                $scope.data.balanceTests.Sum = balanceSum;
                $scope.data.balanceTests.AnswerCount = balanceAnswerCount;
            };
            $scope.calculateGaitSum = function () {
                var gaitSum = 0,
                    gaitAnswerCount = 0,
                    CHECKBOX_DELIMETER = '_',
                    checkBoxes = {};
                angular.forEach($scope.data.gaitTests.Answers, function (value, key) {
                    if (typeof(value) == 'boolean' )
                    {
                        var numericValue = (value ? 1 : 0);
                        gaitSum = gaitSum + numericValue;
                        var v = key.substring(0, key.indexOf(CHECKBOX_DELIMETER));
                        if (typeof(checkBoxes[v]) === "undefined")
                            checkBoxes[v] = numericValue;
                        else
                            checkBoxes[v] = checkBoxes[v] + numericValue;
                    }
                    else
                        gaitSum = gaitSum + parseInt(value, 10);
                    gaitAnswerCount++;
                });
                $scope.data.gaitTests.Sum = gaitSum;
                $scope.data.gaitTests.AnswerCount = gaitAnswerCount;
                $scope.data.gaitTests.CheckBoxSums = checkBoxes;
                console.log($scope.data.gaitTests.CheckBoxSums);
            };
        });
})(sttApp);