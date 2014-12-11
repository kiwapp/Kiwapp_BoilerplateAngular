var gulp        = require('gulp'),
    htmlify = require('gulp-angular-htmlify'),
    templateCache = require('gulp-angular-templatecache'),
    config = require('../GulpConfig');

/**
 * concat all your file html (partials in the angular application)
 */
module.exports = function() {
    return gulp.src('./src/scripts/**/*.html')
        .pipe(htmlify())
        .pipe(templateCache('templates.js',{
            module: 'test'
        }))
        .pipe(gulp.dest(config.dist + 'js'));
}