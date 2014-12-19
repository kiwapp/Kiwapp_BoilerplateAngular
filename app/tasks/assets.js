var gulp = require('gulp');

/**
 * Move assets to build folder
 * Everything except the favicon are moved in the asset folder
 * The favicon is copied in build root
 */
module.exports = function() {
    return gulp.src(['./src/assets/**/*'])
        .pipe(gulp.dest('./build/assets/'));
};