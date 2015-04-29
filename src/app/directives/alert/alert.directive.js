'use strict';

export default function alertDirective () {
  return {
    restrict: 'E',
    templateUrl: 'app/directives/alert/alert.directive.html',
    scope: {
      message: '='
    }
  };
}
