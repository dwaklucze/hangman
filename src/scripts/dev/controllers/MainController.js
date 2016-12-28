(function(){

function Controller(wordsService, userService){
  var vm = this;
  vm.current = wordsService.currentWord;
}

Controller.$inject = ['wordsService', 'userService'];
app.controller('MainController', Controller);
})();
