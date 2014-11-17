var gulp   = require('gulp');

module.exports = function() {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./build/'));
};