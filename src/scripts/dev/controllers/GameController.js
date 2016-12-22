(function() {

    function Controller(wordsService, userService, $scope, $interval, $timeout) {

        /*
        define variables
        */

        var vm = this;
        vm.word = userService.currentWord;


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
            key = key.toUpperCase();

            if(userService.verifyScore(key, vm.word)){
              vm.success = key;

              $timeout(function(){
                vm.success = 0;
              }, 1500);
            }

            vm.score = userService.score;

        }



    }

    Controller.$inject = ['wordsService', 'userService', '$scope', '$interval', '$timeout'];
    app.controller('GameController', Controller);
})();
