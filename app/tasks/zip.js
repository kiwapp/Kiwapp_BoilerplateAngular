var gulp = require('gulp'),
    zip = require('gulp-zip'),
    gutil = require('gulp-util');

/**
 * Build a zip file with all the content in the folder build
 */
module.exports = function () {

    // We take the name of the application (this name is saved in the env configuration run command.
    // You can find this variable in the task manifest
    var zipname = gutil.env.name + '-' + gutil.env.version + '.zip'
    return gulp.src('build/**/*')
        .pipe(zip(zipname))
        .pipe(gulp.dest('./'));
};