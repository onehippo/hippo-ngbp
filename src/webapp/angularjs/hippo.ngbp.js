import { templatesModule } from 'hippo.ngbp.tpls';
import { MainService } from './services/main.service.js';
import { MainCtrl } from './controllers/main.controller.js';
import { alertDirective } from './directives/alert/alert.directive.js';
import { reverseFilter } from './filters/reverse.filter.js';
import { subModule } from './components/sub/sub.js';
import { apiModule } from './components/api/api.js';

function config ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('main', {
    url: '/',
    templateUrl: 'angularjs/hippo.ngbp.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  });
}

export let hippoNgbpModule = angular
  .module('hippo.ngbp', [
    'ui.router',
    apiModule.name,
    subModule.name,
    templatesModule.name
  ])
  .config(config)
  .controller('MainCtrl', MainCtrl)
  .service('MainService', MainService)
  .directive('alert', alertDirective)
  .filter('reverse', reverseFilter);

angular.element(document).ready(function () {
  angular.bootstrap(document.body, ['hippo.ngbp'], {
    strictDi: true
  });
});
