'use strict';

angular.module('boilerplateKiwappSetup', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'kiwapp.api'])
    .controller('MainCtrl', require('./controllers/main'))
    .factory('AppInstanceFactory', require('./factory/appInstanceFactory'))
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'core/partials/main.html',
                controller: 'MainCtrl',
                resolve: {
                    AppInstanceData: ["AppInstanceFactory", function (AppInstanceFactory) {
                        console.log("Resolution in progress...");
                        return AppInstanceFactory.load()
                    }]
                }});

        $urlRouterProvider.otherwise('/');
    })
;

