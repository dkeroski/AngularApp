(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$http', '$rootScope'];
    function RegisterController($http, $rootScope) {
        var vm = this;
        vm.user = {
            username: '',
            password: ''
        }
        vm.register = function () {
            $http.post('auth/signup', vm.user).success(function (data) {
                if (data.state == 'success') {
                    $rootScope.authenticated = true;
                    $rootScope.current_user = data.user.username;
                    toastr.success('Success registered user' + data.user.username);
                    $location.path('/');
                }
            })
        }

    }
})();