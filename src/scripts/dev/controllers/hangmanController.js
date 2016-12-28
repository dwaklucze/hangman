(function(){

function Controller(wordsService, userService, $scope){
  var vm = this;
  vm.current = wordsService.currentWord;
  vm.body = ['head', 'neck', 'corpus', 'right-arm', 'left-arm', 'right-hand', 'left-hand', 'right-leg', 'left-leg', 'right-foot', 'left-foot'];

  $scope.$watch(function(){
    vm.currentFail = userService.score.fails.length;
  });

  }


Controller.$inject = ['wordsService', 'userService', '$scope'];
app.controller('hangmanController', Controller);
})();
