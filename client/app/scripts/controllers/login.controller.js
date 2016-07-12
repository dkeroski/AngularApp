(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$http', '$rootScope', '$location'];
    function LoginController($http, $rootScope, $location) {
        var vm = this;
        vm.user = {
            username: '',
            password: ''
        }
        vm.error_message = '';

        vm.login = function () {
            $http.post('/auth/login', vm.user).success(function (data) {
                if (data.state == "success") {
                    $rootScope.authenticated = true;
                    $rootScope.current_user = data.user.username;
                    toastr.success('Hello' + data.user.username);
                    $location.path('/');
                } else {
                    vm.error_message = data.message;
                }
            })
        }


    }
})();