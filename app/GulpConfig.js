/**
 * The url for the api Kiwapp you want use
 * @type {string}
 */
var urlApi = "https://api.kiwapp.com/nosecure/appInstance/";
/**
 * The application token for this application
 * You must have manualy uploaded on the Manager once
 * After that you find the application token in the interface
 * @type {string}
 */
var appToken = "123456";
/**
 * The destination folder you want yours builded ressources have been
 * @type {string}
 */
var dist = "./build/";

/**
 * The application name
 * @type {string}
 */
var appName = "<%%=applicationName%>";

/**
 * The default port where the livereload application is launched
 * @type {number}
 */
var defaultPort = 8080;

module.exports = {
    urlApi: urlApi,
    appToken: appToken,
    dist: dist,
    appName: appName,
    defaultPort: defaultPort
}