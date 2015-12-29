import { MainService } from './main.service';
import { MainCtrl } from './main.controller';
import { alertDirective } from './alert/alert.directive';
import { reverseFilter } from './reverse.filter';
import { subModule } from './sub/sub';
import { apiModule } from './api/api';

function config ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('main', {
    url: '/',
    templateUrl: 'hippo-ngbp.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  });
}

angular
  .module('hippo-ngbp', [
    'ngMaterial',
    'ui.router',
    'hippo-ngbp-templates',
    apiModule.name,
    subModule.name
  ])
  .config(config)
  .controller('MainCtrl', MainCtrl)
  .service('MainService', MainService)
  .directive('alert', alertDirective)
  .filter('reverse', reverseFilter);
