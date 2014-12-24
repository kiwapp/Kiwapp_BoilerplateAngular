var gulp = require('gulp'),
    jshint = require('gulp-jshint'),// linting
    stylish = require('jshint-stylish');// linting

/**
 * Create a single file app.js with all js dependencies (we use bowerify who read the require word in file for making the link between files)
 */
module.exports = function () {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
}
