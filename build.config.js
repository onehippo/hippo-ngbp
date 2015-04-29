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

cfg.tmp_dir = 'target/tmp/';
cfg.bower_dir = 'bower_components/';
cfg.docs_dir = 'docs/';
cfg.src_dir = 'src/';
cfg.dist_dir = 'target/classes/angular/' + pkg.name;
cfg.api_dir = cfg.src_dir + ''
cfg.images = '**/*.{png,jpg,gif}';
cfg.protractor = 'protractor.config.js';
cfg.karma = 'karma.config.js';
cfg.cssSourceMap = 'main.css.map';
cfg.jstplModule = pkg.name + '.templates';

cfg.src = {
  images: cfg.src_dir + '**/*.{png,jpg,gif}',
  js: cfg.src_dir + '**/!(*.spec.js|*.e2e.js)*.js',
  unit: cfg.src_dir + '**/*.spec.js',
  e2e: cfg.src_dir + '**/*.e2e.js',
  tpl: cfg.src_dir + '**/*.html',
  styles: cfg.src_dir + '**/*.less',
  entryModule: cfg.src_dir + 'app/' + pkg.name,
  indexHtml: cfg.src_dir + 'index.html',
  mainStyles: cfg.src_dir + 'styles/' + pkg.name + '.less',
  indexjs: cfg.src_dir + 'app/' + pkg.name + '.js',
  jstplFile: cfg.src_dir + 'app/' + pkg.name + '.tpls.js'
};

cfg.tmp = {
  js: cfg.tmp_dir + 'js/main.js',
  jsmin: cfg.tmp_dir + 'js/main.min.js',
  jsSourceMap: cfg.tmp_dir + 'js/' + cfg.jsSourceMap,
  css: cfg.tmp_dir + 'css/main.css',
  cssmin: cfg.tmp_dir + 'css/main.min.css',
  cssSourceMap: cfg.tmp_dir + 'css/' + cfg.cssSourceMap
};

cfg.dist = {
  indexHtml: cfg.dist_dir + '/index.html',
  js: cfg.dist_dir + '/js/main.min.js',
  css: cfg.dist_dir + '/css/main.min.css'
};

module.exports = cfg;