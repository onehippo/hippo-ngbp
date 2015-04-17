(function () {
  'use strict';

  angular
    .module('hippo.ngbp')
    .directive('alert', alertDirective);

  function alertDirective () {
    return {
      restrict: 'E',
      templateUrl: 'components/directives/alert.directive.tpl.html',
      scope: {
        message: '='
      },
      link: function (scope, element) {
        element[0].innerHTML = scope.message;
      }
    };
  }
})();