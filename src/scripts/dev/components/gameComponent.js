(function(){

  var Component = {
    templateUrl: 'templates/game-wrap.html',
    controller: 'GameController',
    controllerAs: '$game',
    bindings: {
      word: '<',
      hint: '<'
    }
  }

  app.component('game', Component);
})();
