var hippoBuildTasks = require('hippo-build');
var pkg = require('./package.json');

var customConfig = {};

hippoBuildTasks(pkg, customConfig);
