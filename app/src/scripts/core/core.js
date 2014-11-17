'use strict';
require('../widgets/widgets')

angular.module('caidfLauncher', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'widgets', 'ui.bootstrap'])
    .directive("kwWidgetsBloc", require('./directives/kwWidgetsBloc'))
    .controller('MainCtrl', require('./controllers/MainCtrl'))
    .controller('PageModalController', require('./controllers/PageModalController'))
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

