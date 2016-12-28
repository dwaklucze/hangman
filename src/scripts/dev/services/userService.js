(function() {


    function Service(wordsService, $timeout) {
        /* initialize data to work with */

        var local = this,
            guessedLetter,
            successSound = new Audio('sound/true.mp3'),
            failureSound = new Audio('sound/false.mp3');


        local.verifyKeyInput = verifyKeyInput;
        local.score = {};
        local.score.fails = [];
        local.score.result = [];



        function verifyKeyInput(key, currentWord, isPressed) {

            var pressedCharacter = key.key,
                keyCode = key.keyCode;

            key = pressedCharacter.toUpperCase();
            guessedLetter = _.indexOf(currentWord, key);

            /* break script when user press wrong key */
            if (keyCode < 65 || keyCode > 95) {
                console.info('Game interrupted due to wrong key press.');
                return;
            }

            /* check if letter has been pressed already to prevent application from event */
            if(isPressed) {
              return;
            }

            /* check if letter is guessed/suggested already and does exists in fails array to stop action */
            if ((_.indexOf(local.score.fails, key) !== -1)) {
                return;
            }


            /* user has failed with guessing, so we will save letter user failed with */
            if (guessedLetter === -1 && _.indexOf(local.score.fails, key) === -1) {

                /* check if array of missed items is empty, otherwise we will count all missed inputs */
                local.score.fails.push(key);

                /* play sound */
                $timeout(function() {
                    failureSound.play();
                }, 120);

                return false;

            } else {

                /* check does we have an array in service */
                if (!local.score.result.length) {
                    local.score.result = new Array(currentWord.length);
                }

                /* create new array with the same length as word length */
                _.filter(currentWord, function(item, index) {
                    if (item === key) {
                        local.score.result[index] = item;
                    }

                });

                /* play sound */
                $timeout(function() {
                    successSound.play();
                },120);

                return key;
            }




        }



        return local;
    }


    Service.$inject = ['wordsService', '$timeout'];

    app.service('userService', Service);



})();
