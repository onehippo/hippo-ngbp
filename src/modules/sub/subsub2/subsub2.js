(function () {
  'use strict';

  var subsub2 = angular.module('subsub2', [
    'ui.router'
  ]);

  subsub2.config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('main.sub.subsub2', {
        url: 'subsub2/',
        templateUrl: 'modules/sub/subsub2/subsub2.tpl.html',
        controller: 'SubSub2Ctrl',
        controllerAs: 'subsub2'
      });
    }
  ]);

  subsub2.controller('SubSub2Ctrl', [
    'MainService',
    function (MainService) {
      var subsub2 = this;

      subsub2.message = MainService.message;
    }
  ]);
})();