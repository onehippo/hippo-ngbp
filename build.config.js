/*
 * This file/module contains all configuration for the build process.
 */

var pkg = require('./package.json');

/*
 * This is a collection of patterns.
 * These paths are used in the configuration of
 * build tasks.
 */
var cfg = {};

cfg.bower_dir = 'bower_components/';
cfg.docs_dir = 'docs/';
cfg.tmp_dir = 'target/tmp/';
cfg.src_dir = 'src/webapp/';
cfg.dist_dir = 'target/classes/webapp/';
cfg.apisrc_dir = cfg.src_dir + 'angularjs/components/api/';
cfg.apitmp_dir = 'target/tmp/api';
cfg.apidist_dir = 'target/api/';
cfg.images = '**/*.{png,jpg,gif,ico}';
cfg.protractor = 'protractor.config.js';
cfg.karma = 'karma.config.js';
cfg.cssSourceMap = 'main.css.map';

cfg.src = {
  images: cfg.src_dir + '**/*.{png,jpg,gif,ico}',
  js: cfg.src_dir + '**/!(*.spec.js|*.e2e.js)*.js',
  unit: cfg.src_dir + '**/*.spec.js',
  e2e: cfg.src_dir + '**/*.e2e.js',
  tpl: cfg.src_dir + '**/*.html',
  styles: cfg.src_dir + '**/*.scss',
  indexHtml: cfg.src_dir + 'index.html',
  indexStyles: cfg.src_dir + 'styles/' + pkg.name + '.scss',
  indexJs: cfg.src_dir + 'angularjs/' + pkg.name + '.js',
  jstplModule: pkg.name + '.templates',
};

cfg.tmp = {
  js: cfg.tmp_dir + 'js/main.js',
  jsmin: cfg.tmp_dir + 'js/main.min.js',
  jsSourceMap: cfg.tmp_dir + 'js/' + cfg.jsSourceMap,
  css: cfg.tmp_dir + 'css/main.css',
  cssmin: cfg.tmp_dir + 'css/main.min.css',
  cssSourceMap: cfg.tmp_dir + 'css/' + cfg.cssSourceMap,
  jstplFile: cfg.tmp_dir + 'angularjs/' + pkg.name + '.tpls.js'
};

cfg.dist = {
  indexHtml: cfg.dist_dir + '/index.html',
  js: cfg.dist_dir + '/js/main.min.js',
  css: cfg.dist_dir + '/css/main.min.css'
};

cfg.apisrc = {
  js: cfg.apisrc_dir + '**/!(*.spec.js|*.e2e.js)*.js',
  tpl: cfg.apisrc_dir + '**/*.html',
  styles: cfg.apisrc_dir + '**/*.scss',
  indexStyles: cfg.apisrc_dir + 'api.scss',
  indexJs: cfg.apisrc_dir + 'api.js',
  jstplModule: pkg.name + '.api.templates',
};

cfg.apitmp = {
  jstplFile: cfg.apitmp_dir + 'api.tpls.js'
};

cfg.apidist = {
  js: cfg.apidist_dir + 'js/main.js',
  jsmin: cfg.apidist_dir + 'js/main.min.js',
  jsSourceMap: cfg.apidist_dir + 'js/' + cfg.jsSourceMap,
  css: cfg.apidist_dir + 'css/main.css',
  cssmin: cfg.apidist_dir + 'css/main.min.css',
  cssSourceMap: cfg.apidist_dir + 'css/' + cfg.cssSourceMap
};

module.exports = cfg;
