(function () {
    'use strict';

    angular.module('myApp', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('register', {
                    url: '/register',
                    templateUrl: '/views/register.view.html',
                    controller: 'RegisterController',
                    controllerAs: 'vm'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: '/views/login.view.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                })
                .state('home', {
                    url: '/',
                    templateUrl: '/views/home.view.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                })
        }]);
    //cinstat api adress
    

})();