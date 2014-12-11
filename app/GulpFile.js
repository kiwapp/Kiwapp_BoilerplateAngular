var gulp = require('gulp'),
    connect = require('gulp-connect'),
    config = require('./GulpConfig');

// Build your vendors
gulp.task('vendor', require("./tasks/vendor"));

// Concatenate your partials and append them to template.html
gulp.task('templates', require('./tasks/templates'));

// Build my css (with sass compilation
gulp.task('styles', require('./tasks/styles'));

// Concat all file js in script (with bowerify // use require)
gulp.task('scripts', require('./tasks/scripts'));

// Move index
gulp.task('index', require("./tasks/index"));

// Move our assets
gulp.task('assets', require('./tasks/assets'));

// Build and increment the manifest version
gulp.task('manifest', require('./tasks/manifest'));

// Build and move the mbo for this application
gulp.task('mbo', require('./tasks/mbo'));

// Task all files in the /app folder and zip them
gulp.task('zip', require('./tasks/zip'));

// Build your i18n files
gulp.task('i18n', require('./tasks/i18n'));

// Init task is use when you start the project (ro when you run the npm install command)
gulp.task('init', require('./tasks/init'));

// Init task is use when you start the project (ro when you run the npm install command)
gulp.task('upload', require('./tasks/upload'));


/*******
 * Main TASKS
 */
// PRODUCTION Build, mbo + zip + build
gulp.task('prod', ['mbo', 'dev', 'manifest'], function () {
    gulp.start('zip');
});

// Creat a zip and upload the application on the manager
gulp.task('deploy', ['prod'], function () {
    gulp.start('upload');
});

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
