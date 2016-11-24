import './alert.scss';
import template from './alert.directive.html';

function link(scope) {
  scope.message += ' Alert!';
}

function alertDirective() {
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

export default alertDirective;
