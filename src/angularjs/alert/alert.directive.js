import template from './alert.directive.html';

function link(scope) {
  scope.message += ' Alert!';
}

export default function alertDirective() {
  'ngInject';

  return {
    restrict: 'E',
    template,
    scope: {
      message: '=',
    },
    link,
  };
}
