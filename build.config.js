/*
 * This file/module contains all configuration for the build process.
 */

var pkg = require('./package.json');

module.exports = {
  /*
   * The `tmp_dir` folder is where we can store temporary files during compilation
   * by for example grunt-usemin. The `dist_dir` is where our src files are output
   * as concatenated, minified and otherwise optimized files.
   */
  src_dir: 'src',
  dist_dir: 'dist',
  compiled_dir: 'compiled',
  tmp_dir: 'tmp',
  image_dir: 'src/images',
  docs_dir: 'docs',
  components_dir: 'bower_components',

  /*
   * This is a collection of file patterns that refer to our source files.
   * These file paths are used in the configuration of
   * build tasks. `js` is all project javascript, less tests. `tpl` contains
   * our template HTML files, while `html` is just our main HTML file,
   * `less` are our styles with `mainless` being the main stylesheet to compile,
   * and `unit` contains our app's unit tests.
   */
  images: '**/*.{png,jpg,gif}',
  svg: '**/*.svg',
  js: '**/*.js',
  jssrc: [
    'src/**/*.js',
    '!src/**/*.spec.js',
    '!src/**/*.e2e.js'
  ],
  mainjs: 'main.js',
  unit: '**/*.spec.js',
  e2e: '**/*.e2e.js',
  tpl: '**/*.tpl.html',
  less: [
    'less/**/*.less',
    '**/*.less'
  ],
  mainless: 'less/main.less',
  jstplModule: 'main.templates',
  jstpl: 'modules/main-templates.js'
};
