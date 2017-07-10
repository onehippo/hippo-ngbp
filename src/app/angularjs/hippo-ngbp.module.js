import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import MainService from './main.service';
import MainCtrl from './main.controller';
import alertDirective from './alert/alert.directive';
import reverseFilter from './reverse.filter';
import subModule from './sub/sub.module';

import template from './hippo-ngbp.html';

function config($stateProvider, $urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('main', {
    url: '/',
    template,
    controller: 'MainCtrl',
    controllerAs: 'main',
  });
}

const hippoNgbpModule = angular
  .module('hippo-ngbp', [
    ngAnimate,
    ngAria,
    uiRouter,
    ngMaterial,
    subModule,
  ])
  .config(config)
  .controller('MainCtrl', MainCtrl)
  .service('MainService', MainService)
  .directive('alert', alertDirective)
  .filter('reverse', reverseFilter);

export default hippoNgbpModule.name;
