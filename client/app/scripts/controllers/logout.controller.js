(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('LogoutController', LogoutController);

    LogoutController.$inject = ['authToken', '$state'];

    function LogoutController(authToken, $state) {

        authToken.removeToken();
        $state.go('home');
    }
})();