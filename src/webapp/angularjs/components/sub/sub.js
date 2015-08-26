import { SubCtrl } from './controllers/sub.controller.js';

function config ($stateProvider) {
  $stateProvider.state('main.sub', {
    url: 'sub/',
    templateUrl: 'angularjs/components/sub/sub.html',
    controller: 'SubCtrl',
    controllerAs: 'sub'
  });
}

export let subModule = angular
  .module('sub', [])
  .config(config)
  .controller('SubCtrl', SubCtrl);
