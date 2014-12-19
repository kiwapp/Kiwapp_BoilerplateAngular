var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    sourcemaps = require('gulp-sourcemaps'),
    config = require('../GulpConfig'),
    gutil = require('gulp-util'),
    streamqueue = require('streamqueue'),
    jshint = require('gulp-jshint'),// linting
    stylish = require('jshint-stylish');// linting

/**
 * Create a single file app.js with all js dependencies (we use bowerify who read the require word in file for making the link between files)
 */
module.exports = function () {

    var stream = streamqueue({objectMode: true});
    stream.queue(
        gulp.src('./src/scripts/**/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter(stylish))
    );
    var bundler = browserify({
        entries: ['./src/scripts/core/core.js'],
        debug: gutil.env.type === 'production' ? false : true
    });

    return stream.done(
        bundler
            .bundle()
            .pipe(source('app.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(ngAnnotate())
            // Add transformation tasks to the pipeline here.
            .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(config.dist + 'js/'))
    );


};