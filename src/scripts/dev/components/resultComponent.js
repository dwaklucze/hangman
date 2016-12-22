(function(){

  var Component = {
    templateUrl: 'templates/result.html',
    bindings: {
      word: '='
    },
    controller: Controller
  }

  function Controller(wordsService, userService){
      var vm = this;
      this.$onInit = function(){

        console.log(wordsService);
        vm.result = userService.score.result;
        vm.hint = wordsService.currentWord.hint;


      }

  }
  Controller.$inject = ['wordsService', 'userService'];


  app.component('result', Component);
})();
