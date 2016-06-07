# Kiwapp Boilerplate
##Presentation

This boilerplate can be used to create a new HTML5 application for Kiwapp.

It includes a sample app for the device (app/ folder) and a sample backoffice interface to be integrated in the Kiwapp Manager (app-setup/ folder).

Kiwapp Manager also supports an app-databrowser folder if you want to have an additionnal data-visualisation interface in the Manager, for an instance of this app. This project does not include a sample of this sub-app.

### app/
The src/ folder already include a buid app-setup folder, which will provide a basic form that will be displayed in the Kiwapp Manager, on the app instance setup screen.

You can then add your application code in the src/ folder. Gulp will then prepare the files and put them in the build/ folder.

### app-setup/
The src/ folder includes the code needed for the app-setup. You can build your modification with Gulp and then copy the content of app-setup/build/ folder into app/serc/app-setup/ folder.


## Get started

### Requirements
- node.js
- npm

### Init your project
1. Clone this project to init a new project and ```cd``` into its folder
2. Reinit the project (remove the existing .git folder and initialize git) : ```rm -rf .git && git init```

### Start your app development
1. Move in the app folder : ```cd app/```
2. Install the JS dependencies with Bower : ```bower install```
4. Install the required npm packets for Gulp : ```cd Kiwapp_Gulpfile/ && npm install ```
5. Initialize the project name : ```gulp init```
6. Run ```gulp serve``` and start your development. You will benefit from the live reload thanks to Gulp.


## List available gulp commands :


 - Launch qa build with the version specified in the manifest.json (this command line will build a .zip file with the resource under the build folder)

    ```shell
    $ gulp build
    ```

    or

    ```shell
    $ gulp
    ```

 - Launch a production build, commit, tag it and build

    ```shell
    $ gulp prod
    ```


- Launch a build with a version number (this command line will build a .zip file with the resource under the build folder)

    ```shell
    $ gulp prod --version 1.0.1
    ```


- Launch the dev build with the watcher and the livereload on the sources

    ```shell
    $ gulp serve
    ```

    Your application will be available at the http://localhost:8080/build

- Launch the dev build with the watcher and the livereload on the sources and with a clean source just before the build (to be sure there are no residual file

    ```shell
    $ gulp cserve
    ```

    Your application will be available at the http://localhost:8080/build

- Launch the unit test

    ```shell
    $ gulp test
    ```

    For install correctly karma and protractor see the next section

- Deploy a zip file on the Kiwapp manager

    ```shell
    $ gulp deploy
    ```

    Your application will be deployed on the Kiwapp manager
    The configuration for the deployment is in the GulpConfig file

## Templates
If your project use templates (custome content, scss variable, i18n, assets) you may want to use the --template option. The options take a path to the template folder. This folder use the same structure as the src folder.

    ```shell
    $ gulp serve --template ../templates/myTemplate/
    ```

    or
    ```shell
    $ gulp prod --template ../templates/myOtherTemplate/
    ```


## Custom Task

You want do something only for your project your can add special task.

Go into your GulpConfig.js and add the path to your task into the array 'customTasks'
Your gulp serve, cserve, prod and dev task will run those task

In your task you have to use the notation:

var gulp = require(__dirname + '/Kiwapp_GulpFile/node_modules/gulp'),

For require your module into the node_modules but you can also add a package.json file to your project root

## BrowserSync usage

We add to this tasks the browsersync plugins for front end developpement. You can access to the browsersync interface to http://localhost:3000 when your gulp serve is running


## Included

- Gulp compilation
- Sass
- moment
- kiwapp.js
- angular (angular core, angular router, angular sanitize, angular touch)
- angular translate
- Karma (for the unit tests)

## Translation

For the translation we use the angular translate module (https://angular-translate.github.io/)