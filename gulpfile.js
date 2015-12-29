var hippoBuild = require('hippo-build');
var customConfig = require('./build.conf.js');
var gulp = require('gulp');

hippoBuild.buildTasks(customConfig, gulp);
