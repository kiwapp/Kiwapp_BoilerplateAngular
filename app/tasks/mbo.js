var gulp = require('gulp');

/**
 * Move the microbackoffice setup into the build file
 * because of this you must have run the command gulp prod in the app-setup before making a prod build in the application
 * */
module.exports = function () {

    // Run gulp prod on the app-setup
    gulp.src('../app-setup/build/**/*')
        .pipe(gulp.dest('./build/app-setup'));

};