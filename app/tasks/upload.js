var request = require('request'),
    config = require('../GulpConfig'),
    jeditor = require("gulp-json-editor"),
    gutil = require('gulp-util'),
    fs = require('fs');

/**
 * Move assets to build folder
 * Everythink except the favicon are moved in the asset folder
 * The favicon is copied in build root
 */
module.exports = function() {

    return setTimeout(function(){
        var r = request.post(config.urlApi + config.appToken, function(err, httpResponse, body) {
            if(err) {
                console.log(err);
            }
        });

        var form = r.form();
        form.append('zip', fs.createReadStream('./' + gutil.env.zipname));
    }, 500);

};
