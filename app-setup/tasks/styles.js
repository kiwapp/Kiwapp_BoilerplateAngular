var gulp = require('gulp'),
    sass = require("gulp-sass"),
    concat = require('gulp-concat'),
    config = require('../GulpConfig');

/**
 * Concat our CSS
 */
module.exports = function () {

    return gulp.src('./src/styles/*.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(concat('main.css'))
        .pipe(gulp.dest(config.dist + 'styles/'));
};