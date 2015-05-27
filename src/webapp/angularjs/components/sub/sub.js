import angular from 'angular';
import 'angular-ui-router';
import SubCtrl from './controllers/sub.controller';

function config ($stateProvider) {
  $stateProvider.state('main.sub', {
    url: 'sub/',
    templateUrl: 'angularjs/components/sub/sub.html',
    controller: 'SubCtrl',
    controllerAs: 'sub'
  });
}

export default angular
  .module('sub', ['ui.router'])
  .config(config)
  .controller('SubCtrl', SubCtrl);
