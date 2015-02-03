# <%%=displayName%>

## Presentation

This boilerplate is use for create a new HTML5 application, with many interesting stuff inside

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
- Karma (for the unit tests)
- protractor (for the end to end tests)

### Translation

For the translation we use the babelfish module (https://github.com/dhoko/angular-ngBabelfish)


## Release Note :

-> Insert your release note here

### 1.0.0
 - Your release note here

## Get and init the project

Clone this project for init a new project (don't forget to remove the .git folder)

Use the following command
```shell
$ git clone --recursive git@github.com:procheo/boilerplateAngular.git YOUR_PROJECT_FOLDER && cd YOUR_PROJECT_FOLDER && rm -rf .git
```
(the recursive option is for clone the submodule with the gulp task specific specially designed for Kiwapp)

After that your repository with the instructions given by Github.com (git init . -> git add remote ...)

## Install the project dependencies

```shell
$ cd YOUR_PROJECT_FOLDER && bower install
```

## Install dev dependencies for the project

 See the following README
 
 <a href="https://github.com/procheo/Kiwapp_GulpFile/blob/master/README.md">See the Kiwapp GulpFile Readme</a>
