'use strict';
/*@ngInject*/
module.exports = function ($scope, $modalInstance, blocs) {
    $scope.blocs = blocs;

    $scope.goAccueil = function () {
        $modalInstance.dismiss('cancel');
    };
};