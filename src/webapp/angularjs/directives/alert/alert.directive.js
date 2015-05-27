'use strict';

export default function alertDirective () {
  return {
    restrict: 'E',
    templateUrl: 'angularjs/directives/alert/alert.directive.html',
    scope: {
      message: '='
    }
  };
}
