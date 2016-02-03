# AngularJS

## Get and init the project

Clone this project for init a new project (don't forget to remove the .git folder)

Use the following command
```shell
$ git clone --recursive https://github.com/kiwapp/Kiwapp_BoilerplateAngular YOUR_PROJECT_FOLDER && cd YOUR_PROJECT_FOLDER && rm -rf .git && rm -rf app/Kiwapp_GulpFile/.git && rm -rf app-setup/Kiwapp_GulpFile/.git
```
(the recursive option clones the submodule with the gulp tasks specially designed for Kiwapp)

You then need to init your git project :
```shell
git init .
git add remote ...
```
 your repository with the instructions given by Github.com (git init . -> git add remote ...)

## Install the project dependencies

```shell
$ cd YOUR_PROJECT_FOLDER/app && bower install
$ cd YOUR_PROJECT_FOLDER/app-setup && bower install
```

## Prepare Gulp Env

```shell
$ cd YOUR_PROJECT_FOLDER/app/Kiwapp_GulpFile && npm install
$ cd YOUR_PROJECT_FOLDER/app-setup/Kiwapp_GulpFile && npm install
```

## Customize your project name

Edit GulpConfig.js and change appName

## Build for release
```shell
$ cd YOUR_PROJECT_FOLDER/app/Kiwapp_GulpFile
$ gulp dependencies
$ gulp prod --version XXX
```

gulp dependencies : builds the microbackoffice before being integrated in the app release Zip

## The available commands

  <a href="https://github.com/kiwapp/Kiwapp_GulpFile/blob/master/README.md">See the Kiwapp GulpFile Readme</a>

## The application

 <a href="app/Readme.md">See the application Readme</a>

## The three in one application (microback office application)

In the Kiwapp environment, you can create a basic html5 application.
But you can also create a customizable application, and add an application for some data visualisation.

 - For the customization add a folder named : 'app-setup' in your zip

 <a href="app-setup/Readme.md">See the app-setup Readme</a>

 - For the data visualization add a folder named : 'app-databrowser' in your zip

 In this application you haven't any data visualisation

Important : When you want use a microback office application be careful to build your microback office application with :

```shell
 $ gulp dependencies
```

 before launch your gulp prod command


