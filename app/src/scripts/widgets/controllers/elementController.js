'use strict';
/*@ngInject*/
module.exports = function ($scope, $rootScope) {

    /**
     * Method open, this method is called when the user click on the widget
     */
    $scope.open = function open(config) {

        // Choose the event to broadcast at the main.js Controller
        if(config.internal_url) {

            // The widget want open a page in the launcher application
            // Broadcast an openPage event
            $rootScope.$broadcast('openPage', {
                url: config.internal_url
            });

        } else if(config.url) {

            // The widget want open an url in the browser of the device
            // Broadcast an openUrl event
            $rootScope.$broadcast('openUrl', {
                url: config.url
            });

        } else if(config.native_url) {

            // The widget want open a native application already installed on the device
            // Broadcast an openNativeApp event
            $rootScope.$broadcast('openNativeApp', {
                url: config.native_url
            });

        } else if(config.html5_url) {

            // The widget want open a html5 application already listed in the controller
            // Broadcast an openHTML5App event
            $rootScope.$broadcast('openHTML5App', {
                url: config.html5_url
            });

        }
    };
};