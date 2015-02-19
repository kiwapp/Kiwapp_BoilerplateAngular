# The micro backoffice application app-setup 
 
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
- babelfish

### Usage

For install all dev dependencies (npm) and the project dependencies (bower) :
 
```shell
$ npm install && bower install
```
 
Availables gulp commands :

 
 - Launch production build
 
    ```shell
    $ gulp prod
    ```

    or

    ```shell
    $ gulp
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
    
    For testing this Kiwapp api webservice use this url : 
    
    http://localhost:8080/build/#/?clientId=WJtwi6gR82MezqpCqHVUxOUHM2qVWIdSsHpKNGCVIoaiPAVfhQ&clientSecret=9OF4wr7Xn3GBW8ilT51v1KUc3JMYZ3P9SuepVlmjp2UlbdH4iJ&appInstanceId=853&urlApi=http:%2F%2Fdev-gr.procheo.fr%2Fapi#%2F
    
    -> explanation : the client id and the secret id are in the oauth_client table (KiwappCore database) the app instance id is in the table app instance and must match the oauth_client app instance id column. The url is the url of your dev VM. 


