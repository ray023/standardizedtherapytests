'use strict';
(function (app) {
    app
        .controller('StandardizedTestController', function ($scope) {
            $scope.data = {
                categoryTests: [
                    {
                    category: 'General',
                    tests: [
                        {id: 'barthel', testName: 'Barthel Index of Activities of Daily Living'},
                        {id: 'fois', testName: 'Functional Oral Intake Scale (FOIS)'}
                    ]},
                    {
                        category: 'Balance',
                        tests: [
                            {id: 'tinetti', testName: 'Tinetti Balance Assessment Tool'},
                            {id: 'berg', testName: 'Berg Balance Scale', category:'Balance'},
                            /*{id: 'misc-bal', testName: 'Miscellaneous Balance Tests'}*/
                        ]
                    },/*
                    {
                        category: 'Cognitive',
                        tests: [
                            {id: 'moca', testName: 'MoCA Blind'},
                            {id: 'slums', testName: 'SLUMS'},
                            {id: 'rti', testName: 'RTI- Expanded'}
                        ]
                    },
                    {
                        category: 'Functional Endurance / Cardiopulmonary',
                        tests: [
                            {id: 'seated', testName: 'Seated Step'},
                            {id: 'march', testName: '2 Minute March Test'},
                            {id: 'modi-fois', testName: 'Modified Borg RPEFunctional Oral Intake Scale (FOIS)'},
                            {id: 'rpe', testName: 'RPE'}
                        ]
                    },
                    {
                        category: 'Functional Neurological Assessment',
                        tests: [
                            {id: 'tulia', testName: 'TULIA'},
                            {id: 'pass', testName: 'PASS- Postural Assessment Scale for Stroke patients'},
                            {id: 'mas', testName: 'Motor Assessment Scale'}
                        ]
                    },*/
                    {
                        category: 'Gait',
                        tests: [
                            {id: 'tug', testName: 'Timed Up & Go (TUG)'},
                            /*{id: 'gait', testName: 'Dynamic Gait Index'}*/
                        ]
                    },/*
                    {
                        category: 'Hand Coordination',
                        tests: [
                            {id: 'peg', testName: 'Nine Hole Peg Test'}*
                        ]
                    },
                    {
                        category: 'Lumbar Spine',
                        tests: [
                            {id: 'oswestry', testName: 'Oswestry Low Back Disability Questionnaire'}
                        ]
                    },*/
                    {
                        category: 'Upper Extremity',
                        tests: [
                            {id: 'dash', testName: 'The DASH'}
                        ]
                    }
                ]
            };
        });
})(sttApp);