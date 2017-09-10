(function (app) {
    app
        .factory('TinettiSvc', function () {
            return {
                getTestQuestions: function () {
                    return [
                        {
                            id: 'sittingBalance',
                            name: 'Sitting Balance',
                            options: [
                                {value: 0, text: 'Leans or slides in chair'},
                                {value: 1, text: 'Steady safe'}
                            ]
                        },
                        {
                            id: 'arises',
                            name: 'Arises',
                            options: [
                                {value: 0, text: 'Unable without help'},
                                {value: 1, text: 'Able, uses arms to help'},
                                {value: 2, text: 'Able without using arms'}
                            ]
                        },
                        {
                            id: 'attemptsToRise',
                            name: 'Attempts to Rise',
                            options: [
                                {value: 0, text: 'Unable without help'},
                                {value: 1, text: 'Able, requires > 1 attempt'},
                                {value: 2, text: 'Able on first attempt'}
                            ]
                        },
                        {
                            id: 'immediateStanding',
                            name: 'Immediate Standing Balance (first 5 seconds)',
                            options: [
                                {value: 0, text: 'Unsteady(moves feet/sway/staggers)'},
                                {value: 1, text: 'Steady but uses support'},
                                {value: 2, text: 'Steady without support'}
                            ]
                        },
                        {
                            id: 'standingBalance',
                            name: 'Standing Balance',
                            options: [
                                {value: 0, text: 'Unsteady'},
                                {value: 1, text: 'Steady, stance > 4 inch BOS & requires support'},
                                {value: 2, text: 'Narrow stance, w/o support'}
                            ]
                        },
                        {
                            id: 'sternalNudge',
                            name: 'Sternal Nudge (feet close together)',
                            options: [
                                {value: 0, text: 'Begins to fall'},
                                {value: 1, text: 'Staggers, grabs, catches self'},
                                {value: 2, text: 'Steady'}
                            ]
                        },
                        {
                            id: 'eyesClosed',
                            name: 'Eyes Closed (feet close together)',
                            options: [
                                {value: 0, text: 'Unsteady'},
                                {value: 1, text: 'Steady'}
                            ]
                        },
                        {
                            id: 'turningTest1',
                            name: 'Turning 360 Degrees',
                            options: [
                                {value: 0, text: 'Discontinuous Steps'},
                                {value: 1, text: 'Continuous Steps'}
                            ]
                        },
                        {
                            id: 'turningTest2',
                            name: 'Turning 360 Degrees',
                            options: [
                                {value: 0, text: 'Unsteady (staggers, grabs)'},
                                {value: 1, text: 'Steady'}
                            ]
                        },
                        {
                            id: 'sittingDown',
                            name: 'Sitting Down',
                            options: [
                                {value: 0, text: 'Unsafe (misjudge distance, falls)'},
                                {value: 1, text: 'Uses arms, or not a smooth motion'},
                                {value: 2, text: 'Safe, smooth motion'},
                            ]
                        }

                    ];
                },
                getGaitTestQuestions: function () {
                    return [
                        {
                            id: 'gaitInitition',
                            name: 'GAIT Initiation (immediate after told "go")',
                            options: [
                                {value: 0, text: 'Any hesitancy, multiple attempts to start'},
                                {value: 1, text: 'No hesitancy'}
                            ]
                        },
                        {
                            id: 'stepLength',
                            name: 'Step Length',
                            type: 'checkboxGroup',
                            checkboxes: [
                                {id: 'stepLength_R', value: 1, text: 'R swing foot passes L stance leg'},
                                {id: 'stepLength_L', value: 1, text: 'L swing foot passes R'}
                            ]
                        },
                        {
                            id: 'footClearance',
                            name: 'Foot Clearance',
                            type: 'checkboxGroup',
                            checkboxes: [
                                {id: 'footClearance_R', value: 1, text: 'R foot completely clears floor'},
                                {id: 'footClearance_L', value: 1, text: 'L foot completely clears floor'}
                            ]
                        },
                        {
                            id: 'stepSymmetry',
                            name: 'Step Symmetry',
                            options: [
                                {value: 0, text: 'R and L step length unequal'},
                                {value: 1, text: 'R and L step length equal'}
                            ]
                        },
                        {
                            id: 'stepContinuity',
                            name: 'Step Continuity',
                            options: [
                                {value: 0, text: 'Stop/discontinuity between steps'},
                                {value: 1, text: 'Steps appear continuous'}
                            ]
                        },
                        {
                            id: 'pathExcursion',
                            name: 'Path (excursion)',
                            options: [
                                {value: 0, text: 'Marked deviation'},
                                {value: 1, text: 'Mild/moderate deviation or use of aid'},
                                {value: 2, text: 'Straight without device'}
                            ]
                        },
                        {
                            id: 'trunk',
                            name: 'Trunk',
                            options: [
                                {value: 0, text: 'Marked sway or uses device'},
                                {value: 1, text: 'No sway but knee or trunk flexion or spread arms while walking'},
                                {value: 2, text: 'None of the above deviations'}
                            ]
                        },
                        {
                            id: 'baseOfSupport',
                            name: 'Base of Support',
                            options: [
                                {value: 0, text: 'Heels apart'},
                                {value: 1, text: 'Heels close while walking'}
                            ]
                        }
                    ];
                }
            }
        })
})(sttApp);