(function () {
  'use strict';

  var main = angular.module('main', [
    'oc.lazyLoad',
    'ui.router',
    'main.templates'
  ]);

  main.config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider.state('main', {
        url: '/',
        templateUrl: 'modules/main.tpl.html',
        resolve: {
          loadModule: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'sub',
              files: ['modules/sub/sub.js']
            });
          }]
        },
        controller: 'MainCtrl',
        controllerAs: 'main'
      });
    }
  ]);

  main.controller('MainCtrl', [
    function () {
      var main = this;

      main.message = 'Main';
    }
  ]);

  main.factory('MainService', [
    function () {
      var mainService = {
        message: 'Awesome Mainservice message'
      };

      return mainService;
    }
  ]);
})();
