(function () {
  'use strict';

  function config ($stateProvider) {
    $stateProvider.state('main.sub', {
      url: 'sub/',
      templateUrl: 'angularjs/components/sub/sub.html',
      controller: 'SubCtrl',
      controllerAs: 'sub'
    });
  }

  angular
    .module('sub', ['ui.router'])
    .config(config);
})();