'use strict';

angular.module('widgets', [])
    .directive("kwElementWidget", require('./directives/kwElementWidget'))
    .controller("elementController", require('./controllers/elementController'))
;

