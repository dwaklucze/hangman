(function() {

    Controller.$inject = ['wordsService', 'userService', '$scope', '$interval', '$timeout', '$state'];

    function Controller(wordsService, userService, $scope, $interval, $timeout, $state) {

        /*
        define variables
        */

        var vm = this,
            endOfGame,
            isSuccess,
            localResult = [];

        vm.word = userService.currentWord;
        vm.endWithFailure = false;
        vm.endWithSuccess = false;

        /*
        set interval to keep focusing game window
        */
        $interval(function() {
            document.getElementById("game").focus();
        });

        /*
        run event cause user has pressed key
        */
        vm.keyPress = function(key) {

            if (userService.verifyKeyInput(key, vm.word)) {
                vm.success = key.key.toUpperCase();

                $timeout(function() {
                    vm.success = 0;
                }, 1500);
            }

            vm.score = userService.score;

        }


        endOfGame = $scope.$watch(function() {

            /* check if user has max count of failures */
            var isComplete = (_.filter(userService.score.result, function(item) {
                return item;
            }).length === vm.word.length);

            if (userService.score.fails.length === 12) {
                vm.endWithFailure = true;
                vm.endWithSuccess = false;

                endOfGame();
            }

            if (isComplete) {
                vm.endWithFailure = false;
                vm.endWithSuccess = true;
                endOfGame();
            }

        });

        vm.newGame = function() {
          $state.reload();
        }

    }

    app.controller('GameController', Controller);
})();
