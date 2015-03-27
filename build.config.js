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

  /*
  * This is a collection of file patterns that refer to our source files.
  * These file paths are used in the configuration of
  * build tasks. `js` is all project javascript, less tests. `tpl` contains
  * our template HTML files, while `html` is just our main HTML file,
  * `less` are our styles with `mainless` being the main stylesheet to compile,
  * and `unit` contains our app's unit tests.
  */
  assets: 'src/assets/**/*',
  js: ['src/modules/**/*.js', '!src/modules/**/*.spec.js'],
  unit: 'src/modules/**/*.spec.js',
  e2e: 'src/modules/**/*.e2e.js',
  tpl: 'src/modules/**/*.tpl.html',
  less: 'src/less/**/*.less',
  mainless: 'src/less/main.less',
  jstpl: 'src/modules/main-templates.js',
  jstplModule: 'main.templates',
  index: 'src/index.html'
};
