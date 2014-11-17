'use strict';
/*@ngInject*/
module.exports = function ($templateCache, $compile) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            "config": '='
        },
        link: function (scope, element) {

            // Get the template in the widget/partials views
            var html = $templateCache.get('widgets/partials/' + scope.config.type + '.html');

            // Add this html template into the element-wwidget directive
            element.html(html);

            // Compile the new included template (data binding)
            $compile(element.contents())(scope);

        }
    }
};

