import hippoApp from './hippo-app.component';

angular
  .module('hippo-app', [
    'ngAria',
    'ngAnimate',
    'ngMaterial',
  ])
  .component('hippoApp', hippoApp);

