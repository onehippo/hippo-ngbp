import angular from 'angular';
import 'angular-ui-router';
import sub from './components/sub/sub';
import templates from './hippo.ngbp.tpls';
import MainCtrl from './controllers/main.controller';
import MainService from './services/main.service';
import alertDirective from './directives/alert/alert.directive';
import reverseFilter from './filters/reverse.filter';

function config ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('main', {
    url: '/',
    templateUrl: 'angularjs/hippo.ngbp.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  });
}

export default angular
  .module('hippo.ngbp', ['ui.router', sub.name, templates.name])
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