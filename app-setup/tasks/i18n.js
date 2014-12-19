var path        = require("path"),
    fs          = require('fs'),
    gulp        = require('gulp'),
    concat      = require("gulp-concat"),
    convert     = require('gulp-convert'),
    tap         = require('gulp-tap'),
    streamqueue = require('streamqueue'),
    config = require('../GulpConfig');

/**
 * Build a languages.json from our Yaml files from
 * the directory i18n
 *
 * Each file must respect this convention
 * i18n/lang-LANG.yml
 *
 * Than just a file with key value
 */
module.exports = function() {

    /**
     * List each directory iniside i18n directory
     * From {@link https://github.com/gulpjs/gulp/blob/master/docs/recipes/running-task-steps-per-folder.md}
     * @param  {String} dir Directory
     * @return {Array}
     */
    function getFolders(dir) {
        return fs.readdirSync(dir)
          .filter(function(file) {
            return fs.statSync(path.join(dir, file)).isDirectory();
          });
    }

    var folders = getFolders('./src/i18n');
    var stream = streamqueue({objectMode: true});

    // Create a stream for each content of directory
    for (var i = folders.length - 1; i >= 0; i--) {
        stream.queue(
            gulp.src('./src/i18n/' + folders[i] + '/*.yml')
                .pipe(tap(function (file) {
                    // Each page translation
                    file.contents = new Buffer(path.basename(file.path,".yml") + ":\n" +String(file.contents).replace(/^/gm,"  "));

                }))
                .pipe(concat(folders[i] + '.yml'))
                .pipe(tap(function (file) {
                    // Create a yaml beggining with the language to have an object lang-Lang: {key;value}
                    file.contents = new Buffer(path.basename(file.path,".yml") + ":\n" +String(file.contents).replace(/^/gm,"  "));

                }))
        );
    };

    //gulp.src('./src/i18n/languages.json')
        //.pipe(gulp.dest('./app/i18n/'));

    return stream.done()
        .pipe(concat('languages.yml'))
        .pipe(convert({
            from: "yml",
            to: "json"
        }))
        .pipe(concat('languages.json'))
        .pipe(gulp.dest(config.dist + 'i18n/'))
};