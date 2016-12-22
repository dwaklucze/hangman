(function() {


    function Service(wordsService) {
        /* initialize data to work with */

        var local = this,
            guessedLetter,
            missedLetter,
            successSound = new Audio('sound/true.mp3'),
            failureSound = new Audio('sound/false.mp3');


        local.verifyScore = verifyScore;
        local.score = {};
        local.score.fails = [];
        local.score.result = [];



        function verifyScore(key, currentWord) {

            var regExp = new RegExp("[a-zA-Z]");
            if(!regExp.test(key)) {
              return;
            }

            guessedLetter = _.indexOf(currentWord, key);

            /* user has failed with guessing, so we will save letter he failed with and then disable of picking her again */
            if (guessedLetter === -1 && _.indexOf(local.score.fails, key) === -1) {

                /* check if array of missed items is empty, otherwise we will count all missed inputs */
                failureSound.play();
                local.score.fails.push(key);
                return false;

            } else {
                successSound.play();

                if (!local.score.result.length) {
                    local.score.result = new Array(currentWord.length);
                }

                _.filter(currentWord, function(item, index){

                  if(item === key) {
                    local.score.result[index] = item;
                  }

                });

                return true;
            }




        }



        return local;
    }


    Service.$inject = ['wordsService'];

    app.service('userService', Service);



})();
