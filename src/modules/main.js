(function () {
  'use strict';

  var main = angular.module('main', [
    'main.templates',
    'sub'
  ]);

  main.config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider.state('main', {
        url: '/',
        templateUrl: 'modules/main.tpl.html',
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
})();
