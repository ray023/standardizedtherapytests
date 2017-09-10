(function (app) {
    app
        .factory('DashSvc', function () {
            return {
                getTestQuestions: function () {
                    var questionOptions = {
                        firstSection : [
                            {value: 1, text: '1 - No Difficulty'},
                            {value: 2, text: '2 - Mild Difficulty'},
                            {value: 3, text: '3 - Moderate Difficulty'},
                            {value: 4, text: '4 - Severe Difficulty'},
                            {value: 5, text: '5 - Unable'}
                        ],
                        fourthSection: [
                            {value: 1, text: '1 - None'},
                            {value: 2, text: '2 - Mild'},
                            {value: 3, text: '3 - Moderate'},
                            {value: 4, text: '4 - Severe'},
                            {value: 5, text: '5 - Extreme'}
                        ]
                };

                    return [
                        {id: 1, name: '1. Open a tight or new jar', options: questionOptions.firstSection},
                        {id: 2, name: '2. Write', options: questionOptions.firstSection},
                        {id: 3, name: '3. Turn a key', options: questionOptions.firstSection},
                        {id: 4, name: '4. Prepare a meal', options: questionOptions.firstSection},
                        {id: 5, name: '5. Push open a heavy door', options: questionOptions.firstSection},
                        {id: 6, name: '6. Place an object on a shelf above your head', options: questionOptions.firstSection},
                        {id: 7, name: '7. Do heavy household chores (e.g. wash walls, wash floors)', options: questionOptions.firstSection},
                        {id: 8, name: '8. Garden or do yard work', options: questionOptions.firstSection},
                        {id: 9, name: '9. Makea bed', options: questionOptions.firstSection},
                        {id: 10, name: '10. Carry a shopping bag or briefcase', options: questionOptions.firstSection},
                        {id: 11, name: '11. Carry a heavy object (over 10 lbs)', options: questionOptions.firstSection},
                        {id: 12, name: '12. Change a lightbulb overhead', options: questionOptions.firstSection},
                        {id: 13, name: '13. Wash or blow dry your hair', options: questionOptions.firstSection},
                        {id: 14, name: '14. Wash your back', options: questionOptions.firstSection},
                        {id: 15, name: '15. Put on a pullover sweater', options: questionOptions.firstSection},
                        {id: 16, name: '16. Use a knife to cut food', options: questionOptions.firstSection},
                        {id: 17, name: '17. Recreational activities which require little effort (e.g. cardplaying, knitting, etc.)', options: questionOptions.firstSection},
                        {id: 18, name: '18. Recreational activities which you take some force or impact through your arm, shoulder or hand (e.g., golf, hammering, tennis, etc)', options: questionOptions.firstSection},
                        {id: 19, name: '19. Recreational activities in which you move your arm freely (e.g. playing frisbee, badminton, etc.)', options: questionOptions.firstSection},
                        {id: 20, name: '20. Manage transportation needs (getting from one place to another)', options: questionOptions.firstSection},
                        {id: 21, name: '21. Sexual activities', options: questionOptions.firstSection},
                        {
                            id: 22,
                            name: 'During the past week, to <b>what extent</b> has your arm, shoulder or hand problem interfered with your normal social activities with family, friends, neighbors or groups?',
                            options: [
                                {value: 1, text: 'Not at all'},
                                {value: 2, text: 'Slightly'},
                                {value: 3, text: 'Moderately'},
                                {value: 4, text: 'Quite a bit'},
                                {value: 5, text: 'Extremely'}
                            ]
                        },
                        {
                            id: 23,
                            name: 'During the past week, were you limited in your work or other regular daily activities as a result of your arm, shoulder or hand problem?',
                            options: [
                                {value: 1, text: 'Not limited at all'},
                                {value: 2, text: 'Slightly limited'},
                                {value: 3, text: 'Moderately limited'},
                                {value: 4, text: 'Very limited'},
                                {value: 5, text: 'Unable'}
                            ]
                        },
                        {id: 24, name: '24. Arm, shoulder or hand pain', options: questionOptions.fourthSection},
                        {id: 25, name: '25. Arm, shoulder or hand pain when you perform any specific activity', options: questionOptions.fourthSection},
                        {id: 26, name: '26. Tingling (pins and needles) in your arm, shoulder or hand', options: questionOptions.fourthSection},
                        {id: 27, name: '27. Weakness in your arm, shoulder or hand', options: questionOptions.fourthSection},
                        {id: 28, name: '28. Stiffness in your arm, shoulder or hand', options: questionOptions.fourthSection},
                        {
                            id: 29,
                            name: 'During the past week, how much difficulty have you had sleeping because of the pain in your arm, shoulder or hand?',
                            options: [
                                {value: 1, text: 'No Difficulty'},
                                {value: 2, text: 'Mild Difficulty'},
                                {value: 3, text: 'Moderate Difficulty'},
                                {value: 4, text: 'Severe Difficulty'},
                                {value: 5, text: 'So much difficulty that I can\'t sleep'}
                            ]
                        },
                        {
                            id: 30,
                            name: 'I feel less capable, less confident, or less useful because of my arm, shoulder or hand problem',
                            options: [
                                {value: 1, text: 'Strongly Disagree'},
                                {value: 2, text: 'Disagree'},
                                {value: 3, text: 'Neither Agree Nor Disagree'},
                                {value: 4, text: 'Agree'},
                                {value: 5, text: 'Strongly Agree'}
                            ]
                        }


                    ];
                }
            }
        })
})(sttApp);