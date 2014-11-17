'use strict';
/*@ngInject*/
module.exports = function ($scope, $rootScope, $modal) {

    // Read the widgets list for the home page
    $scope.blocs = getBlocsList('page-home');

    /**
     * Get the list of all blocs by page (retrived from the config.js)
     * @param string page
     * @returns array
     */
    function getBlocsList (page) {
        return Kiwapp.get('instanceParameters')['app-params'][page]
    }

    /**
     * EVENTS WIDGETS
     */
    // Listen Event form widget (this event is trigger by : simple-link-widget)
    $rootScope.$on('openPage', function(event, params){
        console.log("OpenPage");
        $scope.openPage = true;
        $modal.open({
            templateUrl: 'core/partials/modal-page.html',
            controller: 'PageModalController',
            windowClass: 'modal-page',
            backdrop: false,
            resolve: {
                blocs: function () {
                    console.log(params.url);
                    console.log(getBlocsList(params.url));
                    return getBlocsList(params.url);
                }
            }
        });
    });

    $rootScope.$on('openUrl', function(event, params){
        // TODO

    });

    $rootScope.$on('openNativeApp', function(event, params){
        // TODO
    });

    $rootScope.$on('openHTML5App', function(event, params){
        // TODO
    });
};
