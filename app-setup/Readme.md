# Crédit Agricole - Launcher (the micro backoffice application app-setup) 
 
## Why use a mbo app-setup?

You must use this microbackoffice when you want allow the possibility for an external person to update some information of your application.
This HTML5 application will communicate to the Kiwapp environment by using the public api

## How does it work ?

### Requirements

- node.js
- npm
- bower

### Included

- Gulp compilation
- Sass 
- moment
- angular (angular core, angular router, angular sanitize, angular touch)
- kiwapp-manager-api
- pace

### Usage

For install all dev dependencies (npm) and the project dependencies (bower) :
 
```shell
$ npm install && bower install
```
 
Availables gulp commands :

 
 - Launch production build with the version specified in the manifest.json
 
    ```shell
    $ gulp prod
    ```

    or

    ```shell
    $ gulp
    ```
    
- Launch production build with a version number (this command line will build a .zip file with the resource under the build folder)
 
    ```shell
    $ gulp prod --version 1.0.1
    ```


- Launch the dev build

    ```shell
    $ gulp dev
    ```
    
- Launch the dev build with the watcher and the livereload on the sources
 
    ```shell
    $ gulp serve
    ```
    
    Your application will be available at the http://localhost:8080/build


