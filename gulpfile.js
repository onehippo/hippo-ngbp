const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const hub = new HubRegistry(['node_modules/frontend-build/index.js']);
gulp.registry(hub);
