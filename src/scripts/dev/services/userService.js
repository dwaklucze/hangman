(function() {


    function Service(wordsService) {
        /* initialize data to work with */

        var local = this,
            guessedLetter,
            successSound = new Audio('sound/true.mp3'),
            failureSound = new Audio('sound/false.mp3');


        local.verifyScore = verifyScore;
        local.score = {};
        local.score.fails = [];
        local.score.result = [];



        function verifyScore(key, currentWord) {

            /* allow characters only */
            var regExp = new RegExp("[a-zA-Z]");
            if(!regExp.test(key)) {
              return;
            }

            /* check if letter is guessed/suggested already and does exists in fails array to stop action */
            if(_.indexOf(local.score.fails, key) !== -1) {
              return;
            }


            /* user has failed with guessing, so we will save letter he failed with */
            guessedLetter = _.indexOf(currentWord, key);
            if (guessedLetter === -1 && _.indexOf(local.score.fails, key) === -1) {

                /* check if array of missed items is empty, otherwise we will count all missed inputs */
                local.score.fails.push(key);

                failureSound.play();
                return false;

            } else {

                if (!local.score.result.length) {
                    local.score.result = new Array(currentWord.length);
                }

                _.filter(currentWord, function(item, index){
                  if(item === key) {
                    local.score.result[index] = item;
                  }

                });

                successSound.play();
                return true;
            }




        }



        return local;
    }


    Service.$inject = ['wordsService'];

    app.service('userService', Service);



})();
