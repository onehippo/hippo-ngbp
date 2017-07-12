import hippoHelloWorld from './helloWorld/helloWorld.component';

angular
  .module('hippo-ngbp', [
    'ngMaterial',
  ])
  .component('hippoHelloWorld', hippoHelloWorld);

