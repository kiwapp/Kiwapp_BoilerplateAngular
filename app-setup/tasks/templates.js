var gulp        = require('gulp'),
    htmlify = require('gulp-angular-htmlify'),
    templateCache = require('gulp-angular-templatecache');


module.exports = function() {
    return gulp.src('./src/scripts/**/*.html')
        .pipe(htmlify())
        .pipe(templateCache('templates.js', {
            module: 'boilerplateKiwappSetup'
        }))
        .pipe(gulp.dest('./build/js'));
}