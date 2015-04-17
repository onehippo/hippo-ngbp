'use strict';

export default function alertDirective () {
  return {
    restrict: 'E',
    templateUrl: 'modules/directives/alert.directive.html',
    scope: {
      message: '='
    }
  };
}
