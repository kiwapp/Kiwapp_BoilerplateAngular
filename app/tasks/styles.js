var gulp = require('gulp'),
    sass = require("gulp-sass"),
    concat = require('gulp-concat');

/**
 * Concat our CSS
 */
module.exports = function () {

    return gulp.src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./build/styles/'));

};