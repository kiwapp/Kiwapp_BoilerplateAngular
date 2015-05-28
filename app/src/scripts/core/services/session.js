'use strict';
/**
 * TIMEOUT
 */
/*@ngInject*/
module.exports = function (TIMEOUT) {
    var service = {};

    service.init = function init(callback) {


        // Init the timeout on touch event
        document.body.addEventListener('touchstart', function () {
            // Stop the timeout
            Kiwapp.session().resetTimeout();
        });
        document.body.addEventListener('touchend', function () {
            // Launch the timeout
            Kiwapp.session().launchTimeout(function () {
                Kiwapp.session().end().start();
                callback();
            }, TIMEOUT);
        });
    };

    return service;
};
