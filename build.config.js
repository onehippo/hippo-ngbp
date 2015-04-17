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

  // Folder paths.
  src_dir: 'src',
  compiled_dir: 'compiled',
  dist_dir: 'dist',
  tmp_dir: 'tmp',
  image_dir: 'src/images',
  docs_dir: 'docs',
  components_dir: 'bower_components',

  // File patterns that refer to our source files.
  images: '**/*.{png,jpg,gif}',
  svg: '**/*.svg',
  js: '**/*.js',
  jssrc: [
    'src/**/*.js',
    '!src/**/*.spec.js',
    '!src/**/*.e2e.js'
  ],
  unit: '**/*.spec.js',
  e2e: '**/*.e2e.js',
  tpl: '**/*.tpl.html',
  styles: '**/*.less',

  // Single file names
  mainStyles: 'modules/' + pkg.name + '.less',
  indexjs: 'modules/' +pkg.name + '.js',
  jstplModule: pkg.name + '.templates',
  jstplFile: 'modules/' + pkg.name + '.tpls.js'
};

module.exports = cfg;