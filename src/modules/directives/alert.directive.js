(function () {
  'use strict';

  angular
    .module('hippo.ngbp')
    .directive('alert', alertDirective);

  function alertDirective () {
    return {
      restrict: 'E',
      templateUrl: 'modules/directives/alert.directive.html',
      scope: {
        message: '='
      }
    };
  }
})();