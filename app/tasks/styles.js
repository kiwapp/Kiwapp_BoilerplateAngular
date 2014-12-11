var gulp = require('gulp'),
    sass = require("gulp-sass"),
    concat = require('gulp-concat'),
    config = require('../GulpConfig');

/**
 * Concat our CSS and build the sass file
 */
module.exports = function () {

    return gulp.src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(gulp.dest(config.dist + 'styles/'));

};