(function (app) {
    app
        .factory('BarthelSvc', function () {
            return {
                getTestQuestions: function () {
                    return [
                        {
                            id: 'bowels',
                            name: 'Bowels',
                            options: [
                                {value: 0, text: '0 = incontinent (or needs to be given enemata)'},
                                {value: 1, text: '1 = occasional accident (once/week)'},
                                {value: 2, text: '2 = continent'}
                            ]
                        },
                        {
                            id: 'bladder',
                            name: 'Bladder',
                            options: [
                                {value: 0, text: '0 = incontinent, or catheterized and unable to manage'},
                                {value: 1, text: '1 = occasional accident (max. once per 24 hours)'},
                                {value: 2, text: '2 = continent (for over 7 days)'}]
                        },
                        {
                            id: 'grooming',
                            name: 'Grooming',
                            options: [
                                {value: 0, text: '0 = needs help with personal care'},
                                {value: 1, text: '1 = independent face/hair/teeth/shaving (implements provided)'}]
                        },
                        {
                            id: 'toiletUse',
                            name: 'Toilet use',
                            options: [
                                {value: 0, text: '0 = dependent'},
                                {value: 1, text: '1 = needs some help, but can do something alone'},
                                {value: 2, text: '2 = independent (on and off, dressing, wiping)'}]
                        },
                        {
                            id: 'feeding',
                            name: 'Feeding',
                            options: [
                                {value: 0, text: '0 = unable'},
                                {value: 1, text: '1 = needs help cutting, spreading butter, etc.'},
                                {value: 2, text: '2 = independent (food provided within reach)'}]
                        },
                        {
                            id: 'transfer',
                            name: 'Transfer',
                            options: [
                                {value: 0, text: '0 = unable – no sitting balance'},
                                {value: 1, text: '1 = major help (one or two people, physical), can sit'},
                                {value: 2, text: '2 = minor help (verbal or physical)'},
                                {value: 3, text: '3 = independent'}]
                        },
                        {
                            id: 'mobility',
                            name: 'Mobility',
                            options: [
                                {value: 0, text: '0 = immobile'},
                                {value: 1, text: '1 = wheelchair independent, including corners, etc.'},
                                {value: 2, text: '2 = walks with help of one person (verbal or physical)'},
                                {value: 3, text: '3 = independent (but may use any aid, e.g., stick)'}]
                        },
                        {
                            id: 'dressing',
                            name: 'Dressing',
                            options: [
                                {value: 0, text: '0 = dependent'},
                                {value: 1, text: '1 = needs help, but can do about half unaided'},
                                {value: 2, text: '2 = independent (including buttons, zips, laces, etc.)'}]
                        },
                        {
                            id: 'stairs',
                            name: 'Stairs',
                            options: [
                                {value: 0, text: '0 = unable'},
                                {value: 1, text: '1 = needs help (verbal, physical, carrying aid)'},
                                {value: 2, text: '2 = independent up and down'}]
                        },
                        {
                            id: 'bathing',
                            name: 'Bathing',
                            options: [
                                {value: 0, text: '0 = dependent'},
                                {value: 1, text: '1 = independent (or in shower)'}
                            ]
                        }
                    ];
                }
            }
        })
})(sttApp);