export function alertDirective () {
  return {
    restrict: 'E',
    templateUrl: 'angularjs/directives/alert/alert.directive.html',
    scope: {
      message: '='
    },
    link: function () {}
  };
}
