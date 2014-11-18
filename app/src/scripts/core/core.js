'use strict';

angular.module('<%%=applicationName%>', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'ngBabelfish'])
    .controller('MainCtrl', require('./controllers/MainCtrl'))
    .config(function ($stateProvider, $urlRouterProvider, babelfishProvider) {

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

        /**
         * The provider the the traductor module (we use here babelfish)
         */
        babelfishProvider.init({
            state: "home",
            lang: "fr-FR",
            url: "i18n/languages.json",
            namespace: "i18n",
            lazy: false
        });

    })
;

