# Hippo Angular Boilerplate
Just change the name in the package.json, bower.json and src/* files to the name of your application.

## Development environment setup
### Prerequisites
* [NodeJS](http://nodejs.org/) (NodeJS)
* [Node Package Manager](https://npmjs.org/) (NPM, comes installed with NodeJS)
* [Git](http://git-scm.com/)

### Dependencies
* [Grunt](http://gruntjs.com/) (task automation)
* [Bower](http://bower.io/) (front-end package manager)

### Installation
#### Install Grunt CLI and Bower globally
    $ npm install -g grunt-cli bower

#### Install project dependencies
Run the commands below in the project root directory.

    $ npm install
    $ bower install

## Useful commands
### Run unit tests
    $ grunt karma:single

### Run end-to-end tests on a running application
    $ grunt protractor

### Build optimized application for production
    $ grunt build:dist

### Setup development server
    $ grunt server

