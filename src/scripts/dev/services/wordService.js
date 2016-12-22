(function() {


    function Service($http, randomWordURL) {
        var local = this,
            randomWord,
            wordObject;

        local.getWord = function() {
            return $http.get(randomWordURL).then(function(response) {
                randomWord = response.data.word;

                return $http.get('http://api.wordnik.com:80/v4/word.json/' + randomWord + '/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5').then(function(response) {
                    response = response.data[0];
                    wordObject = {
                        word: response.word.toUpperCase().split(''),
                        full: response.word.toUpperCase(),
                        hint: response.text
                    }

                    local.currentWord = wordObject;
                    return wordObject;
                })
            })
        }



        return local;
    }


    Service.$inject = ['$http', 'randomWordURL'];
    app.service('wordsService', Service);



})();
