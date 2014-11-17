var gulp   = require('gulp');

/**
 * Simply move the index.html file into the build folder
 */
module.exports = function() {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./build/'));
};