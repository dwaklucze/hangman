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

        var result = userService.score.result,
        hint = wordsService.currentWord.hint,
        fullWord = wordsService.currentWord.full;

        vm.result = result;

        /* show hint only if it does not contains result word */
        vm.hint = !hint.toUpperCase().includes(fullWord) ? hint : false;
      }

  }
  Controller.$inject = ['wordsService', 'userService'];


  app.component('result', Component);
})();
