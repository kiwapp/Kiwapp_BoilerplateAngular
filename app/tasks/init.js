var gulp = require('gulp'),
    bower = require('bower'),
    prompt = require('gulp-prompt'),
    replace = require('gulp-replace');

/**
 * The command init, will initialize all project variable
 * 4 steps :
 * - run the bower install command
 * - ask the name of your application and his display name
 * - replace the <%%=displayName%>, <%%=applicationName%> and <%%=description%> by the value ask by prompt
 * - TODO run the tests karma
 *
 */
module.exports = function () {

    /**
     * This method will put the input value to camel case
     * */
    function camelCase(input) {
        return input.toLowerCase().replace(/-(.)/g, function(match, group1) {
            return group1.toUpperCase();
        });
    }

    // Install your bower packages
    bower.commands.install([], {save: true}, {})
        .on('end', function (installed) {
            console.log("All package are up to date");
        });


    gulp.src("./src/index.html")
        .pipe(
        prompt.prompt([
                {
                    type: 'input',
                    name: 'displayName',
                    message: 'Choose a name for your application : '
                },
                {
                    type: 'input',
                    name: 'desciption',
                    message: '(Optional) Insert a description for your application here : '
                }
            ], function (res) {
                console.log("Project initialization please wait a second...");
                // Callback method
                gulp.src(['./**/*', '!./tasks/init.js','!./node_modules/**/*', '!./src/vendor/**/*'])
                    .pipe(replace('<%%=displayName%>', res.displayName))
                    .pipe(replace('<%%=applicationName%>', camelCase(res.displayName)))
                    .pipe(replace('<%%=displayName%>', res.desciption))
                    .pipe(gulp.dest('./'));
            }
        ));
};