var gulp   = require('gulp'),
    config = require('../GulpConfig');

/**
 * Simply move the index.html file into the build folder
 */
module.exports = function() {
    return gulp.src('./src/**.*')
        .pipe(gulp.dest(config.dist));
};
