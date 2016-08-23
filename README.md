# Hippo Angular Boilerplate
Just change the name in the package.json, bower.json and src/* files to the name of your application.

## Development environment setup
### Prerequisites
* [NodeJS](http://nodejs.org/) (NodeJS)
* [Node Package Manager](https://npmjs.org/) (NPM, comes installed with NodeJS)
* [Git](http://git-scm.com/)

### Dependencies
* [Webpack](http://webpack.github.io) (module bundler)
* [webpack-server](https://webpack.github.io/docs/webpack-dev-server.html) (webpack development server)
* [Karma](https://karma-runner.github.io) (test runner for javascript)
* [rimraf](https://github.com/isaacs/rimraf) (`rm -rf` util for nodejs)

### Installation
#### Install webpack, webpack-server, karma and rimraf globally
  $ npm install -g webpack  
  $ npm install -g webpack-server  
  $ npm install -g karma-cli  
  $ npm install -g rimraf  

#### Install project dependencies
Run the commands below in the project root directory.
  $ npm install

## Useful commands
### Run unit tests
  $ npm run test

### Run unit tests
  $ npm run test-watch

### Build application for development
  $ npm run dev

### Setup development server
  $ npm run server

### Build optimized application for production
  $ npm run release
