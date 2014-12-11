var gulp = require('gulp'),
    zip = require('gulp-zip'),
    gutil = require('gulp-util'),
    config = require('../GulpConfig');

/**
 * Build a zip file with all the content in the folder build
 */
module.exports = function () {

    // We take the name of the application (this name is saved in the env configuration run command.
    // You can find this variable in the task manifest
    var zipname = gutil.env.name + '-' + gutil.env.version + '.zip';
    gutil.env.zipname = zipname;

    return gulp.src(config.dist + '**/*')
        .pipe(zip(zipname))
        .pipe(gulp.dest('./'));
};