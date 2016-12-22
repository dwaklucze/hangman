(function(){

function Controller(wordsService, userService, $timeout){
  var vm = this;
  vm.current = wordsService.currentWord;

}

Controller.$inject = ['wordsService', 'userService', '$timeout'];
app.controller('MainController', Controller);
})();
