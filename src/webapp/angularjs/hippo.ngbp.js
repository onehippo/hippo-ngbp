(function () {
  'use strict';

  function config ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
      url: '/',
      templateUrl: 'angularjs/hippo.ngbp.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    });
  }

  angular
    .module('hippo.ngbp', [
      'hippo.ngbp.templates',
      'hippo.ngbp.api',
      'ui.router',
      'sub'
    ])
    .config(config);

  angular.element(document).ready(function () {
    angular.bootstrap(document.documentElement, ['hippo.ngbp'], {
      strictDi: true
    });
  });
})();
