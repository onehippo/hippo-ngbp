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
cfg.src_dir = 'src/angularjs/';
cfg.dist_dir = 'target/classes/angularjs/';
cfg.apisrc_dir = cfg.src_dir + 'components/components/api/';
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
  styles: cfg.src_dir + '**/*.less',
  entryModule: cfg.src_dir + 'components/' + pkg.name,
  indexHtml: cfg.src_dir + 'index.html',
  mainStyles: cfg.src_dir + 'styles/' + pkg.name + '.less',
  indexjs: cfg.src_dir + 'components/' + pkg.name + '.js',
  jstplModule: pkg.name + '.templates',
  jstplFile: cfg.src_dir + 'components/' + pkg.name + '.tpls.js'
};

cfg.tmp = {
  js: cfg.tmp_dir + 'js/main.js',
  jsmin: cfg.tmp_dir + 'js/main.min.js',
  jsSourceMap: cfg.tmp_dir + 'js/' + cfg.jsSourceMap,
  css: cfg.tmp_dir + 'css/main.css',
  cssmin: cfg.tmp_dir + 'css/main.min.css',
  cssSourceMap: cfg.tmp_dir + 'css/' + cfg.cssSourceMap,
};

cfg.dist = {
  indexHtml: cfg.dist_dir + '/index.html',
  js: cfg.dist_dir + '/js/main.min.js',
  css: cfg.dist_dir + '/css/main.min.css'
};

cfg.apisrc = {
  js: cfg.apisrc_dir + '**/!(*.spec.js|*.e2e.js)*.js',
  tpl: cfg.apisrc_dir + '**/*.html',
  styles: cfg.apisrc_dir + '**/*.less',
  entryModule: cfg.apisrc_dir + 'api',
  mainStyles: cfg.apisrc_dir + 'api.less',
  indexjs: cfg.apisrc_dir + 'api.js',
  jstplModule: pkg.name + '.api.templates',
  jstplFile: cfg.apisrc_dir + 'api.tpls.js'
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