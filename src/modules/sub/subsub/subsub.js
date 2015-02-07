(function () {
  'use strict';

  var subsub = angular.module('subsub', [
    'ui.router'
  ]);

  subsub.config([
    '$stateProvider',
    function ($stateProvider) {
      $stateProvider.state('main.sub.subsub', {
        url: 'subsub/',
        templateUrl: 'modules/sub/subsub/subsub.tpl.html',
        controller: 'SubSubCtrl',
        controllerAs: 'subsub'
      });
    }
  ]);

  subsub.controller('SubSubCtrl', [
    function () {
      var subsub = this;

      subsub.message = 'Awesome subsub module';
    }
  ]);
})();