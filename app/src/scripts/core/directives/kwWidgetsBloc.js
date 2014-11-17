'use strict';
/*@ngInject*/
module.exports = function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'core/partials/widgets-bloc.html',
        scope: {
            bloc : '='
        }
    }
};

