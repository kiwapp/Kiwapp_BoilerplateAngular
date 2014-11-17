var gulp = require('gulp');

/**
 * Move assets to build folder
 * Everythink except the favicon are moved in the asset folder
 * The favicon is copied in build root
 */
module.exports = function() {
    gulp.src(['./src/assets/**/*'])
        .pipe(gulp.dest('./build/assets/'));

    gulp.src('./src/favicon*')
        .pipe(gulp.dest('./build/'));
};