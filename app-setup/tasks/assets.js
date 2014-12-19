var gulp = require('gulp'),
    config = require('../GulpConfig');

/**
 * Move assets to build
 */
module.exports = function () {
    return gulp.src(['./src/assets/**/*'])
        .pipe(gulp.dest(config.dist + 'assets/'));
};