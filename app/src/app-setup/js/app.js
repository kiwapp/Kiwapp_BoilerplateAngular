(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

angular.module('kiwappSetup', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngBabelfish', 'ui.router', 'kiwapp.api'])
    .controller('MainCtrl', require('./controllers/MainCtrl'))
    .factory('AppInstanceFactory', require('./factory/appInstanceFactory'))

    .config(["$stateProvider", "$urlRouterProvider", "babelfishProvider", function ($stateProvider, $urlRouterProvider, babelfishProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'core/partials/main.html',
                controller: 'MainCtrl',
                resolve: {
                    AppInstanceData: ["AppInstanceFactory", function (AppInstanceFactory) {
                        console.log("Resolution in progress...");
                        return AppInstanceFactory.load();
                    }]
                }});

        $urlRouterProvider.otherwise('/');

        // Init the babelfish module for the translation
        babelfishProvider.init({
            state: "home",
            lang: "en-EN",
            url: "i18n/languages.json",
            namespace: "i18n",
            lazy: false
        });
    }])
;


},{"./controllers/MainCtrl":2,"./factory/appInstanceFactory":3}],2:[function(require,module,exports){
'use strict';
/*@ngInject*/
module.exports = function ($scope, appInstanceDataApi) {

    var keyAppInstanceData = "app-params";

    // Use JSON.stringify and parse, this will be prettify the JSON
    var dataAppInstance = appInstanceDataApi.get(keyAppInstanceData);
    if(dataAppInstance !== undefined) {
        $scope.text = JSON.stringify(JSON.parse(appInstanceDataApi.get(keyAppInstanceData).data),null, 4);
    } else {
        $scope.text = "{}";
    }

    // Watch the text model
    $scope.$watch('text', function(newValue) {
        $scope.configForm.submited = false;
        // Check if the text is JSON or empty or undefined
        if(newValue !== undefined && newValue !== "" && !isJsonString(newValue)) {
            $scope.configForm.valid = false;
        } else {
            $scope.configForm.valid = true;
        }

    });

    /**
     * Save the data
     */
    $scope.save = function() {
        $scope.configForm.submited = true;
        $scope.configForm.$setDirty(false);
        appInstanceDataApi.save(JSON.stringify(JSON.parse($scope.text)), keyAppInstanceData);
    };

    /**
     * Return true if the string is a valid JSON
     * @param str
     * @returns {boolean}
     */
    function isJsonString(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }
};
module.exports.$inject = ["$scope", "appInstanceDataApi"];

},{}],3:[function(require,module,exports){
'use strict';
/*@ngInject*/
module.exports = function (appInstanceDataApi) {

    function loadAppInstanceData() {
        console.log("[ENTER] loadAppInstanceData");
        return appInstanceDataApi.load();
    }
    return {
        load : loadAppInstanceData
    };
};
module.exports.$inject = ["appInstanceDataApi"];

},{}]},{},[1])


//# sourceMappingURL=app.js.map