'use strict';

/**
 * @ngdoc overview
 * @name myAppApp
 * @description
 * # myAppApp
 *
 * Main module of the application.
 */
angular
    .module('myApp', ['ui.router', 'ngAnimate', '$rootScope']).run(function ($rootScope) {
        $rootScope.authenticated = false;
        $rootScope.current_user = '';


        $rootScope.signout = function () {
            $http.get('auth/signout');
            $rootScope.authenticated = false;
            $rootScope.current_user = '';
        };
    })
