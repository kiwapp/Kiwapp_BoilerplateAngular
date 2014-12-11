var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    rename = require('gulp-rename'),
    ngAnnotate = require('gulp-ng-annotate'),
    config = require('../GulpConfig');

/**
 * Create a single file app.js with all js dependencies (we use bowerify who read the require word in file for making the link between files)
 */
module.exports = function () {

    return gulp.src(['./src/scripts/core/core.js'])
        .pipe(browserify({
            debug: true,
            insertGlobals: true
        }))
        .pipe(rename('app.js'))
        .pipe(ngAnnotate())
        .pipe(gulp.dest(config.dist + 'js'));
};