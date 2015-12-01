var hippoBuild = require('hippo-build');
var customConfig = require('./build.conf.js');
var pkg = require('./package.json');

hippoBuild(pkg, customConfig).hippoBuildTasks();
