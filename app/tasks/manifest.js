var gulp    = require('gulp'),
    jeditor = require("gulp-json-editor"),
    gutil   = require('gulp-util');

/**
 * Update the manifest for an app
 * It will generate a new codename and also set our env for the prod zip
 */
module.exports = function() {

    gulp.src("./src/manifest.json")
        .pipe(jeditor(function (json) {

            // Remove space from name
            gutil.env.name = json.app_info.name.replace(/ /g,"-");

            // Get the vesion number
            // The version can be found in the command line (gulp prod --version 1.0.1) or we use the version in the manifest
            if(gutil.env.version) {
                json.app_info.codename = gutil.env.version;
            } else {
                gutil.env.version = json.app_info.codename;
            }

            return json; // must return JSON object.
        }))
        .pipe(gulp.dest("./src"))
        .pipe(gulp.dest("./build"));

    // Build your package .json
    gulp.src(['./package.json',  './bower.json'])
        .pipe(jeditor(function (json) {

            if(gutil.env.version) {
                json.version = gutil.env.version;
            }
            return json; // must return JSON object.
        }))
        .pipe(gulp.dest('./'));

};