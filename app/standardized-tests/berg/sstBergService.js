(function (app) {
    app
        .factory('BergSvc', function () {
            return {
                getTestQuestions: function () {
                    return [
                        {
                            id: 1,
                            name: '1. SITTING TO STANDING',
                            instructions: 'Please stand up. Try not to use your hand for support.',
                            options: [
                                {value: 4, text: '4 - able to stand without using hands and stabilize independently'},
                                {value: 3, text: '3 - able to stand independently using hands'},
                                {value: 2, text: '2 - able to stand using hands after several tries'},
                                {value: 1, text: '1 - needs minimal aid to stand or stabilize'},
                                {value: 0, text: '0 - needs moderate or maximal assist to stand'}
                            ]
                        },
                        {
                            id: 2,
                            name: '2. STANDING UNSUPPORTED',
                            instructions: 'Please stand for two minutes without holding on.',
                            options: [
                                {value: 4, text: '4 - able to stand safely for 2 - minutes'},
                                {value: 3, text: '3 - able to stand 2 - minutes with supervision'},
                                {value: 2, text: '2 - able to stand 30 seconds unsupported'},
                                {value: 1, text: '1 - needs several tries to stand 30 seconds unsupported'},
                                {value: 0, text: '0 - unable to stand 30 seconds unsupported'}
                            ],
                                additionalInfo: 'If a subject is able to stand 2 minutes unsupported, score full points for sitting unsupported. Proceed to item #4.'
                        },
                        {
                            id: 3,
                            name: '3. SITTING WITH BACK UNSUPPORTED BUT FEET SUPPORTED ON FLOOR OR ON A STOOL',
                            instructions: 'Please sit with arms folded for 2 - minutes.',
                            options: [
                                {value: 4, text: '4 - able to sit safely and securely for 2 - minutes.'},
                                {value: 3, text: '3 - able to sit  - minutes under supervision.'},
                                {value: 2, text: '2 - able to able to sit 30 seconds.'},
                                {value: 1, text: '1 - able to sit 10 seconds.'},
                                {value: 0, text: '0 - unable to sit without support 10 seconds.'}
                            ]
                        },
                        {
                            id: 4,
                            name: '4. STANDING TO SITTING',
                            instructions: 'Please sit down.',
                            options: [
                                {value: 4, text: '4 - sits safely with minimal use of hands'},
                                {value: 3, text: '3 - controls descent by using hands'},
                                {value: 2, text: '2 - uses back of legs against chair to control descent'},
                                {value: 1, text: '1 - sits independently but has uncontrolled descent'},
                                {value: 0, text: '0 - needs assist to sit'}
                            ]
                        },
                        {
                            id: 5,
                            name: '5. TRANSFERS',
                            instructions: 'Arrange chair(s) for pivot transfer. Ask subject to transfer one way toward a seat with armrests and one way toward a seat without armrests. You may use two chairs (one with and one without armrests) or a bed & a chair.',
                            options: [
                                {value: 4, text: '4 - able to transfer safely with minor use of hands'},
                                {value: 3, text: '3 - able to transfer safely definite need of hands'},
                                {value: 2, text: '2 - able to transfer with verbal cuing and/or supervision'},
                                {value: 1, text: '1 - needs one person to assist'},
                                {value: 0, text: '0 - needs two people to assist or supervise to be safe'}
                            ]
                        },
                        {
                            id: 6,
                            name: '6. STANDING UNSUPPORTED WITH EYES CLOSED',
                            instructions: 'Please close your eyes and stand still for 10 seconds.',
                            options: [
                                {value: 4, text: '4 - able to stand 10 seconds safely'},
                                {value: 3, text: '3 - able to stand 10 seconds with supervision'},
                                {value: 2, text: '2 - able to stand 3 - seconds'},
                                {value: 1, text: '1 - unable to keep eyes closed 3 - seconds but stays safely'},
                                {value: 0, text: '0 - needs help to keep from falling'}
                            ]
                        },
                        {
                            id: 7,
                            name: '7. STANDING UNSUPPORTED WITH FEET TOGETHER',
                            instructions: 'Place your feet together and stand without holding on.',
                            options: [
                                {value: 4, text: '4 - able to place feet together independently and stand 1 - minute safely' },
                                {value: 3, text: '3 - able to place feet together independently and stand 1 - minute with supervision'},
                                {value: 2, text: '2 - able to place feet together independently but unable to hold for 30 seconds'},
                                {value: 1, text: '1 - needs help to attain position but able to stand 15 seconds feet together'},
                                {value: 0, text: '0 - needs help to attain position and unable to hold for 15 seconds'}
                            ]
                        },
                        {
                            id: 8,
                            name: '8. PICK UP OBJECT FROM THE FLOOR FROM A STANDING POSITION',
                            instructions: 'Pick up the shoe/slipper, which is place in front of your feet.',
                            options: [
                                {value: 4, text: '4 - able to pick up slipper safely and easily'},
                                {value: 3, text: '3 - able to pick up slipper but needs supervision'},
                                {value: 2, text: '2 - unable to pick up but reaches 2-5 cm (1-2 in) from slipper & keeps balance independently'},
                                {value: 1, text: '1 - unable to pick up and needs supervision while trying'},
                                {value: 0, text: '0 - unable to try/needs assist to keep from losing balance or falling'}
                            ]
                        },
                        {
                            id: 9,
                            name: '9. REACHING FORWARD WITH OUTSTRETCHED ARM WHILE STANDING',
                            instructions: 'Lift arm to 90 degrees. Stretch out your fingers and reach forward as far as you can. (Examiner places a ruler at the end of fingertips when arm is at 90 degrees. Fingers should not touch the ruler while reaching forward. The recorded measure is the distance forward that the fingers reach while the subject is in the most forward lean position. When possible, ask subject to use both arms when reaching to avoid rotation of the trunk.)',
                            options: [
                                {value: 4, text: '4 - can reach forward confidently 25 cm (10 inches)'},
                                {value: 3, text: '3 - can reach forward 12 cm (5 inches)'},
                                {value: 2, text: '2 - can reach forward 5 cm (2 inches)'},
                                {value: 1, text: '1 - reaches forward but needs supervision'},
                                {value: 0, text: '0 - loses balance while trying/requires external support'}
                            ]
                        },
                        {
                            id: 10,
                            name: '10. TURNING TO LOOK BEHIND OVER LEFT AND RIGHT SHOULDERS WHILE STANDING',
                            instructions: 'Turn to look directly behind you over toward the left shoulder. Repeat to the right. Examiner may pick an object to look at directly behind the subject to encourage a better twist turn.',
                            options: [
                                {value: 4, text: '4 - looks behind from both sides and weight shifts well'},
                                {value: 3, text: '3 - looks behind one side only other side shows less weight shift'},
                                {value: 2, text: '2 - turns sideways only but maintains balance'},
                                {value: 1, text: '1 - needs supervision when turning'},
                                {value: 0, text: '0 - needs assist to keep from losing balance or falling'}
                            ]
                        },
                        {
                            id: 11,
                            name: '11. TURN 360 DEGREES',
                            instructions: 'Turn completely around in a full circle. Pause. Then turn a full circle in the other direction.',
                            options: [
                                {value: 4, text: '4 - able to turn 360 degrees safely in 4 - seconds or less'},
                                {value: 3, text: '3 - able to turn 360 degrees safely one side only 4 - seconds or less'},
                                {value: 2, text: '2 - able to turn 360 degrees safely but slowly'},
                                {value: 1, text: '1 - needs close supervision or verbal cuing'},
                                {value: 0, text: '0 - needs assistance while turning'}
                            ]
                        },
                        {
                            id: 12,
                            name: '12. PLACE ALTERNATE FOOT ON STEP OR STOOL WHILE STANDING UNSUPPORTED',
                            instructions: 'Place each foot alternately on the step/stool. Continue until each foot has touch the step/stool four times.',
                            options: [
                                {value: 4, text: '4 - able to stand independently and safely and complete 8 steps in 20 seconds'},
                                {value: 3, text: '3 - able to stand independently and complete 8 steps in > 20 seconds'},
                                {value: 2, text: '2 - able to complete 4 steps without aid with supervision'},
                                {value: 1, text: '1 - able to complete > 2 steps needs minimal assist'},
                                {value: 0, text: '0 - needs assistance to keep from falling/unable to try'}
                            ]
                        },
                        {
                            id: 13,
                            name: '13. STANDING UNSUPPORTED ONE FOOT IN FRONT',
                            instructions: '(DEMONSTRATE TO SUBJECT) Place one foot directly in front of the other. If you feel that you cannot place your foot directly in front, try to step far enough ahead that the heel of your forward foot is ahead of the toes of the other foot. (To score 3 points, the length of the step should exceed the length of the other foot and the width of the stance should approximate the subject’s normal stride width.)',
                            options: [
                                {value: 4, text: '4 - able to place foot tandem independently and hold 30 seconds'},
                                {value: 3, text: '3 - able to place foot ahead independently and hold 30 seconds'},
                                {value: 2, text: '2 - able to take small step independently and hold 30 seconds'},
                                {value: 1, text: '1 - needs help to step but can hold 15 seconds'},
                                {value: 0, text: '0 - loses balance while stepping or standing'}
                            ]
                        },
                        {
                            id: 14,
                            name: '14. STANDING ON ONE LEG',
                            instructions: 'Stand on one leg as long as you can without holding on.',
                            options: [
                                {value: 4, text: '4 - able to lift leg independently and hold > 10 seconds'},
                                {value: 3, text: '3 - able to lift leg independently and hold 5-10 seconds'},
                                {value: 2, text: '2 - able to lift leg independently and hold ≥ 3 seconds'},
                                {value: 1, text: '1 - tries to lift leg unable to hold 3 seconds but remains standing independently.'},
                                {value: 0, text: '0 - unable to try of needs assist to prevent fall'}
                            ]
                        }
                    ];
                }
            }
        })
})(sttApp);