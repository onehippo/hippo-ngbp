import { MainService } from './main.service.js';
import { MainCtrl } from './main.controller.js';
import { alertDirective } from './alert/alert.directive.js';
import { reverseFilter } from './reverse.filter.js';
import { subModule } from './sub/sub.js';
import { apiModule } from './api/api.js';

function config ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('main', {
    url: '/',
    templateUrl: 'hippo.ngbp.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  });
}

export const hippoNgbpModule = angular
  .module('hippo.ngbp', [
    'ui.router',
    apiModule.name,
    subModule.name
  ])
  .config(config)
  .controller('MainCtrl', MainCtrl)
  .service('MainService', MainService)
  .directive('alert', alertDirective)
  .filter('reverse', reverseFilter);

angular.element(document).ready(function () {
  angular.bootstrap(document.body, [hippoNgbpModule.name], {
    strictDi: true
  });
});
