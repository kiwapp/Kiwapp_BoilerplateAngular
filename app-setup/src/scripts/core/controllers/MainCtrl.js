'use strict';
/*@ngInject*/
module.exports = function ($scope, appInstanceDataApi, AppInstanceData) {

    // Use JSON.stringify and parse, this will be prettify the JSON
    $scope.text = JSON.stringify(JSON.parse(AppInstanceData.data[0].data),null, 4);

    // Watch the text model
    $scope.$watch('text', function(newValue) {

        // Check if the text is JSON or empty or undefined
        if(newValue !== undefined && newValue != "" && !isJsonString(newValue)) {
            $scope.configForm.valid = false;
        } else {
            $scope.configForm.valid = true;
        }

    });

    /**
     * Save the data
     */
    $scope.save = function() {
        $scope.configForm.$setSubmitted(true);
        $scope.configForm.$setDirty(false);
        appInstanceDataApi.update(JSON.stringify(JSON.parse($scope.text)), 'app-params');
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
