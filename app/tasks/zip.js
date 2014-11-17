var gulp = require('gulp'),
    zip = require('gulp-zip'),
    gutil = require('gulp-util');

/**
 * Move assets to build
 */
module.exports = function () {

    var zipname = gutil.env.name + '-' + gutil.env.version + '.zip'
    return gulp.src('build/**/*')
        .pipe(zip(zipname))
        .pipe(gulp.dest('./'));
};