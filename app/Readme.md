# <%%=displayName%>

Copy this project for init a new project (don't forget to remove the .git folder)
And run the commands
```shell
$ npm install && gulp init
```

The command gulp init will ask to you the application name and after that your project is ready to use

## Release Note :

-> Insert your release note here

### 1.0.0 (in development)
 - Start the project

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
- babelfish

### Usage

For install all dev dependencies (npm) and the project dependencies (bower) :
 
```shell
$ npm install && gulp init
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
    
### Translation

For the translation we use the babelfish module (https://github.com/dhoko/angular-ngBabelfish)



