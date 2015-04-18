/*
 * This file/module contains all configuration for the build process.
 */

var pkg = require('./package.json');

var cfg = {
  /*
   * This is a collection of patterns.
   * These paths are used in the configuration of
   * build tasks.
   */

  tmp: 'tmp/',
  bower: 'bower_components/',
  docs: 'docs/',
  images: '**/*.{png,jpg,gif}',
  protractor: 'protractor.config.js',
  karma: 'karma.config.js',
  cssSourceMap: 'main.css.map',
  jstplModule: pkg.name + '.templates'
};

cfg.src = {
  dir: 'src/',
  images: 'src/**/*.{png,jpg,gif}',
  js: 'src/**/*!(.spec|.e2e).js',
  unit: 'src/**/*.spec.js',
  e2e: 'src/**/*.e2e.js',
  tpl: 'src/**/*.html',
  styles: 'src/**/*.less',
  entryModule: 'src/components/' + pkg.name,
  indexHtml: 'src/index.html',
  mainStyles: 'src/components/' + pkg.name + '.less',
  indexjs: 'src/components/' + pkg.name + '.js',
  jstplFile: 'src/components/' + pkg.name + '.tpls.js'
};

cfg.compiled = {
  dir: 'compiled/',
  js: 'compiled/js/main.js',
  jsmin: 'compiled/js/main.min.js',
  jsSourceMap: 'compiled/js/' + cfg.jsSourceMap,
  css: 'compiled/css/main.css',
  cssmin: 'compiled/css/main.min.css',
  cssSourceMap: 'compiled/css/' + cfg.cssSourceMap
};

cfg.dist = {
  dir: 'dist/',
  indexHtml: 'dist/index.html',
  js: 'dist/js/main.js',
  css: 'dist/css/main.css'
};

module.exports = cfg;