(function() {

    Controller.$inject = ['wordsService', 'userService', '$scope', '$interval', '$timeout', '$state'];

    function Controller(wordsService, userService, $scope, $interval, $timeout, $state) {

        /*
        define variables
        */

        var vm = this,
            endOfGame,
            isSuccess,
            successKeys = [],
            pressedKeys = [],
            winSound = new Audio('sound/win.mp3');
        loseSound = new Audio('sound/lose.mp3');

        vm.word = userService.currentWord;
        vm.endWithFailure = false;
        vm.endWithSuccess = false;

        /* set interval to keep focusing game window */
        $interval(function() {
            document.getElementById("game").focus();
        });

        /* run event cause user has pressed key */
        vm.keyPress = function(key) {
            var keyIsPressedAlready = (_.indexOf(pressedKeys, key.key) !== -1),
                verifyUserInput = userService.verifyKeyInput(key, vm.word, keyIsPressedAlready);

            /* prevent action when key has been already pressed */

            if (!keyIsPressedAlready) {
                pressedKeys.push(key.key);
            }

            /* verify input (if true blink with pressed key) */
            if (verifyUserInput) {
                vm.success = key.key.toUpperCase();

                $timeout(function() {
                    vm.success = 0;
                }, 100);
            }

            vm.score = userService.score;

        };

        vm.newGame = function() {
            resetGame();
        }


        endOfGame = $scope.$watch(function() {

            /* check if user has max count of failures */
            var isComplete = (_.filter(userService.score.result, function(item) {
                return item;
            }).length === vm.word.length);

            if (userService.score.fails.length === 12) {
                vm.endWithFailure = true;
                vm.endWithSuccess = false;
                loseSound.play();
                endOfGame();
            }

            if (isComplete) {
                vm.endWithFailure = false;
                vm.endWithSuccess = true;
                winSound.play();
                endOfGame();
            }

        });

        function resetGame() {

            pressedKeys = [];

            userService.score.fails = [];
            userService.score.result = [];

            $timeout(function() {
                $state.reload();
            });

        }

    }

    app.controller('GameController', Controller);
})();
