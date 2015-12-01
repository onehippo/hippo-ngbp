export function alertDirective ($rootScope) {
  "ngInject";
  return {
    restrict: 'E',
    templateUrl: 'directives/alert/alert.directive.html',
    scope: {
      message: '='
    },
    link: function () {}
  };
}
