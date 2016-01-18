function link(scope) {
  scope.message += ' Alert!';
}

export function alertDirective() {
  'ngInject';
  return {
    restrict: 'E',
    templateUrl: 'alert/alert.directive.html',
    scope: {
      message: '=',
    },
    link,
  };
}
