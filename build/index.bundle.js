webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _hippoNgbp = __webpack_require__(1);
	
	Object.defineProperty(exports, 'hippoNgbp', {
	  enumerable: true,
	  get: function get() {
	    return _hippoNgbp.hippoNgbp;
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hippoNgbp = undefined;
	
	var _main = __webpack_require__(2);
	
	var _main2 = __webpack_require__(3);
	
	var _alert = __webpack_require__(4);
	
	var _reverse = __webpack_require__(5);
	
	var _sub = __webpack_require__(6);
	
	var _api = __webpack_require__(8);
	
	var _angular = __webpack_require__(9);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularMaterial = __webpack_require__(11);
	
	var _angularMaterial2 = _interopRequireDefault(_angularMaterial);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(17);
	
	function config($stateProvider, $urlRouterProvider) {
	  $urlRouterProvider.otherwise('/');
	
	  $stateProvider.state('main', {
	    url: '/',
	    templateUrl: 'hippo-ngbp.html',
	    controller: 'MainCtrl',
	    controllerAs: 'main'
	  });
	}
	
	var hippoNgbp = exports.hippoNgbp = _angular2.default.module('hippo-ngbp', ['ngMaterial', 'ui.router', 'templates', _api.apiModule.name, _sub.subModule.name]).config(config).controller('MainCtrl', _main2.MainCtrl).service('MainService', _main.MainService).directive('alert', _alert.alertDirective).filter('reverse', _reverse.reverseFilter);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainService = exports.MainService = function MainService() {
	  _classCallCheck(this, MainService);
	
	  this.message = 'Awesome Mainservice message';
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainCtrl = exports.MainCtrl = function MainCtrl(MainService) {
	  'ngInject';
	
	  _classCallCheck(this, MainCtrl);
	
	  this.message = MainService.message;
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.alertDirective = alertDirective;
	function link(scope) {
	  scope.message += ' Alert!';
	}
	
	function alertDirective() {
	  'ngInject';
	
	  return {
	    restrict: 'E',
	    templateUrl: 'alert/alert.directive.html',
	    scope: {
	      message: '='
	    },
	    link: link
	  };
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reverseFilter = reverseFilter;
	function reverseFilter() {
	  return function filter(input) {
	    var result = '';
	    input = input || '';
	
	    for (var i = 0; i < input.length; i++) {
	      result = input.charAt(i) + result;
	    }
	
	    return result;
	  };
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.subModule = undefined;
	
	var _sub = __webpack_require__(7);
	
	function config($stateProvider) {
	  $stateProvider.state('main.sub', {
	    url: 'sub/',
	    templateUrl: 'sub/sub.html',
	    controller: 'SubCtrl',
	    controllerAs: 'sub'
	  });
	}
	
	var subModule = exports.subModule = angular.module('sub', []).config(config).controller('SubCtrl', _sub.SubCtrl);

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SubCtrl = exports.SubCtrl = function SubCtrl() {
	  'ngInject';
	
	  _classCallCheck(this, SubCtrl);
	
	  this.message = 'Awesome sub module';
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// this is an API module that is build separately and can be used by other projects
	var apiModule = exports.apiModule = angular.module('hippo.ngbp.api', []);

/***/ },
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var map = {};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 17;


/***/ }
]);
//# sourceMappingURL=index.bundle.js.map