const hippoBuild = require('hippo-build');
const customConfig = require('./build.conf.js');
const gulp = require('gulp');

hippoBuild.buildTasks(customConfig, gulp);
