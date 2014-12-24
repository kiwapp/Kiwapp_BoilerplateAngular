var gulp = require('gulp'),
    gutil   = require('gulp-util'),
    connect = require('gulp-connect');


// Build your vendors
gulp.task('vendor', require("./tasks/vendor"));

// Concatenate your partials and append them to template.html
gulp.task('templates', require('./tasks/templates'));

// Build my css (with sass compilation
gulp.task('styles', require('./tasks/styles'));

// Check if the code is correct
gulp.task('lint', require('./tasks/lint'));

// Concat all file js in script (with bowerify // use require)
gulp.task('scripts', ['lint'], require('./tasks/scripts'));

// Move index
gulp.task('index', require("./tasks/index"));

// Move our assets
gulp.task('assets', require('./tasks/assets'));

// Build your i18n files
gulp.task('i18n', require('./tasks/i18n'));

// Set the env config to production
gulp.task('envProd', function() {
    gutil.env.type = 'production';
});

/*******
 * Main TASKS
 */

// PRODUCTION Build, no zipping because this application is a mbo
gulp.task('prod', ['envProd', 'dev']);

// Dev build
gulp.task('dev', ['index', 'assets', 'vendor', 'templates', 'i18n', 'styles', 'scripts']);

// Dev build + add the watch and the livereload on the sources
gulp.task('serve', ['dev', 'watch'], function () {
    connect.server({
        root: '',
        livereload: true,
        port: 8080
    });
});

// Launch your watch on file
gulp.task('watch', function () {
    gulp.watch('src/styles/**/*.scss', ['styles']).on('change', function (file) {
        gulp.src(file.path).pipe(connect.reload());
    });
    gulp.watch('src/scripts/**/*.js', ['scripts']).on('change', function (file) {
        gulp.src(file.path).pipe(connect.reload());
    });
    gulp.watch('src/assets/**/*', ['assets']).on('change', function (file) {
        gulp.src(file.path).pipe(connect.reload());
    });
    gulp.watch('./src/scripts/**/*.html', ['templates']).on('change', function (file) {
        gulp.src(file.path).pipe(connect.reload());
    });
    gulp.watch('src/index.html', ['index']).on('change', function (file) {
        gulp.src(file.path).pipe(connect.reload());
    });
    gulp.watch('src/i18n/**', ['i18n']).on('change', function (file) {
        gulp.src(file.path).pipe(connect.reload());
    });
});

// The default task run the prod build
gulp.task('default', ['prod']);
