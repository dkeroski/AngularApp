(function() {
    'use strict';

    angular.module('myApp', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
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
                .state('jobs', {
                    url: '/jobs',
                    templateUrl: '/views/jobs.view.html',
                    controller: 'JobsController',
                    controllerAs: 'vm'
                })
                .state('logout', {
                    url: '/logout',
                    controller: 'LogoutController'
                })
                //$httpProvider.interceptors.push('authInterceptors');
        }])
        //cinstat api adress
        .constant('API_URL', 'http://localhost:3000');

})();