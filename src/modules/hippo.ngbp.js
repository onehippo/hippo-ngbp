(function () {
  'use strict';

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
      //strictDi: true
    });
  });

  function config ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
      url: '/',
      templateUrl: 'modules/hippo.ngbp.tpl.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    });
  }
})();
