(function () {
  'use strict';

  var sub = angular.module('sub', [
    'ui.router'
  ]);

  sub.config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('main.sub', {
        url: 'sub/',
        templateUrl: 'modules/sub/sub.tpl.html',
        controller: 'SubCtrl',
        controllerAs: 'sub'
      });
    }
  ]);

  sub.controller('SubCtrl', [
    function () {
      var sub = this;

      sub.message = 'Awesome sub module';
    }
  ]);
})();