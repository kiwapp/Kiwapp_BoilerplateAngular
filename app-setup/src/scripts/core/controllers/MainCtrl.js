'use strict';
/*@ngInject*/
module.exports = function ($scope, appInstanceDataApi) {

    var keyAppInstanceData = 'app-params';

    // Use JSON.stringify and parse, this will be prettify the JSON
    var dataAppInstance = appInstanceDataApi.get(keyAppInstanceData);
    if(dataAppInstance !== undefined) {
        $scope.text = JSON.stringify(JSON.parse(appInstanceDataApi.get(keyAppInstanceData).data),null, 4);
    } else {
        $scope.text = '{}';
    }

    // Watch the text model
    $scope.$watch('text', function(newValue) {
        $scope.configForm.submited = false;
        // Check if the text is JSON or empty or undefined
        if(newValue !== undefined && newValue !== '' && !isJsonString(newValue)) {
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
