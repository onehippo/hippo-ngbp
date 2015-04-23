'use strict';

export default function alertDirective () {
  return {
    restrict: 'E',
    templateUrl: 'components/directives/alert.directive.html',
    scope: {
      message: '='
    }
  };
}
