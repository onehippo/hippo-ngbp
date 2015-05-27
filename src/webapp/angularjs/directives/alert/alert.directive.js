(function () {
  'use strict';

  angular
    .module('hippo.ngbp')
    .directive('alert', alertDirective);

  function alertDirective () {
    return {
      restrict: 'E',
      templateUrl: 'angularjs/directives/alert/alert.directive.html',
      scope: {
        message: '='
      }
    };
  }
})();