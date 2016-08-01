const frontendBuild = require('frontend-build');
const customConfig = require('./build.conf.js');
const gulp = require('gulp');

frontendBuild.buildTasks(customConfig, gulp);
