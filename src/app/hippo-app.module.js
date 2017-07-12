import hippoApp from './hippo-app.component';
import hippoToolbar from './toolbar/toolbar.component';

angular
  .module('hippo-app', [
    'ngAria',
    'ngAnimate',
    'ngMaterial',
  ])
  .component('hippoApp', hippoApp)
  .component('hippoToolbar', hippoToolbar);

