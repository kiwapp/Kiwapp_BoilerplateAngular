'use strict';

angular.module('boilerplateKiwapp', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap'])
    .controller('MainCtrl', require('./controllers/MainCtrl'))
    .config(function ($stateProvider, $urlRouterProvider) {

        /**
         * Angular application configuration
         */
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'core/partials/main.html',
                controller: 'MainCtrl'
            });

        $urlRouterProvider.otherwise('/');

        /**
         * Kiwapp configuration
         */

        // No rotation (this application is mode landscape only)
        Kiwapp.rotate(0);

    })
;

