'use strict';

export default function alertDirective () {
  return {
    restrict: 'E',
    templateUrl: 'components/directives/alert/alert.directive.html',
    scope: {
      message: '='
    }
  };
}
