const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const hub = new HubRegistry(['node_modules/@bloomreach/frontend-build/index.js']);
gulp.registry(hub);
