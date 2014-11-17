# Crédit Agricole - Launcher

## Release Note :

### 1.0.0 (in development)

## How does it work ?

### Requirements

- node.js
- npm
- bower

### Included

- Gulp compilation
- Sass 
- Bootstrap
- moment
- kiwapp.js
- angular (angular core, angular router, angular sanitize, angular bootstrap, angular touch)
- jquery

### Usage

For install all dev dependencies (npm) and the project dependencies (bower) :
 
```shell
$ npm install && bower install
```
 
Availables gulp commands :

 
 - Launch production build with the version specified in the manifest.json (this command line will build a .zip file with the resource under the build folder)
 
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
