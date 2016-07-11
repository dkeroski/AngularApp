(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$http', 'authToken', '$state'];

    function RegisterController($http, authToken, $state) {
        var vm = this;
        vm.submit = function() {
            var url = 'http://localhost:3000/register';
            var user = {
                username: vm.username,
                email: vm.email,
                password: vm.password
            };

            $http.post(url, user)
                .success(function(res) {
                    // console.log(res);
                    toastr.success('User has been registered!');
                    authToken.setToken(res.token);
                    vm.username = '';
                    vm.email = '';
                    vm.password = '';
                    $state.go('home');
                })
                .error(function(err) {
                    toastr.error('User has not register!');
                })
        }

    }
})();