var gulp = require('gulp');

module.exports = function () {

    // Run gulp prod on the app-setup
    gulp.src('../app-setup/build/**/*')
        .pipe(gulp.dest('./build/app-setup'));

};