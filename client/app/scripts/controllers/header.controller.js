(function() {
    'use strict';
    angular
        .module('myApp')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['authToken'];

    function HeaderController(authToken) {
        var vm = this;

        authToken.isAuthenticated();

    }

})();