import angular from 'angular';
import 'angular-ui-router';
import sub from 'sub/sub';
import templates from 'main-templates';

var main = angular.module('main', [
  'ui.router',
  sub.name,
  templates.name
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

class MainCtrl {
  constructor() {
    this.message = 'Main';
  }
}

main.controller('MainCtrl', MainCtrl);

main.factory('MainService', [
  function () {
    var mainService = {
      message: 'Awesome Mainservice message'
    };

    return mainService;
  }
]);

export default main;