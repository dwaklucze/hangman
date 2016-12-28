(function() {

    app.config(function($stateProvider, $urlRouterProvider, $compileProvider) {

        $compileProvider.debugInfoEnabled(false);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main', {
                url: "/",
                template: `<game word="$main.current.word" hint="$main.current.hint"></game>`,
                controller: 'MainController',
                controllerAs: '$main',
                resolve: {
                    gameWord: function(wordsService, userService, $state, $timeout) {
                        return wordsService.getWord().then(function(word) {



                            word = word.word;
                            var result = userService.score.result = new Array(word.length),
                                randomNumbers = getRandoms(word, 4);

                            /* application needs to be reloaded as there was a problem with receiving data from API */
                            if (!word.length) {
                                $timeout(function() {
                                    $state.reload();
                                })
                            }


                            /* this one is only for developers or `hackers`... ;-) just for dev purpose */
                            console.info(word.join(''));



                            /* check for whitespaces and for '-' char */
                            _.filter(word, function(item, index) {
                                if ((item === '-') || (item === ' ')) {
                                    result[key] = item;
                                }
                            })


                            /* push random word to result array to achieve N completed letters in current word */
                            return _.filter(randomNumbers, function(item, index) {
                                return result[item] = word[item];
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
