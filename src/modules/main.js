(function () {
  'use strict';

  var main = angular.module('main', [
    'ui.router',
    'sub',
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

  angular.element(document).ready(function () {
    angular.bootstrap(document.body, ['main'], {
      strictDi: true
    });
  });
})();
