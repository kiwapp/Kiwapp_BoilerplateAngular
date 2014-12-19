var gulp   = require('gulp'),
    config = require('../GulpConfig');

module.exports = function() {
    return gulp.src('./src/**.*')
        .pipe(gulp.dest(config.dist));
};
