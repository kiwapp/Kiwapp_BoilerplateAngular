var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    rename = require('gulp-rename'),
    ngAnnotate = require('gulp-ng-annotate');

/**
 * Create a single file app.js
 */
module.exports = function () {

    return gulp.src(['./src/scripts/core/core.js'])
        .pipe(browserify({
            debug: true,
            insertGlobals: true
        }))
        .pipe(rename('app.js'))
        .pipe(ngAnnotate())
        .pipe(gulp.dest('./build/js'));
};