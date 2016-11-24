import angular from 'angular';
import SubCtrl from './sub.controller';
import template from './sub.html';

function config($stateProvider) {
  'ngInject';

  $stateProvider.state('main.sub', {
    url: 'sub/',
    template,
    controller: 'SubCtrl',
    controllerAs: 'sub',
  });
}

export default angular
  .module('sub', [])
  .config(config)
  .controller('SubCtrl', SubCtrl);
