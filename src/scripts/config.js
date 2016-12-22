(function() {

    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: "/",
                template: `<game word="$main.current.word" hint="$main.current.hint"></game>`,
                controller: 'MainController',
                controllerAs: '$main',
                resolve: {
                    gameWord: function(wordsService, userService) {
                        return wordsService.getWord().then(function(word) {

                            word = word.word;
                            var result = userService.score.result = new Array(word.length),
                                randomNumbers = getRandoms(word, 4);

                                return _.filter(randomNumbers, function(item, index) {
                                return  result[item] = word[item];
                                })
                        });




                        /* recursive function to get unique random number */
                        function getRandoms(pool, times) {
                            var randoms = [];
                            for (var i = 0; i < times; i++) {
                                var randomNumber = (Math.floor(Math.random() * (pool.length - 1) + 1));
                                if (randoms.indexOf(randomNumber) === -1) {
                                    randoms.push(randomNumber);
                                } else {
                                    getRandoms(pool, times);
                                }
                            }

                            return randoms;
                        }
                    }
                }
            })


    });

    app.constant('randomWordURL', 'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=6&maxDictionaryCount=-1&minLength=6&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5');

})();
