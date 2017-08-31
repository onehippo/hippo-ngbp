import { module } from 'angular';

import downgradesModule from './ng2-downgrades-module';
import rootModule from './root/root.ng1-module';
import ApiService from './shared/services/api.service';

import config from './app.ng1-config';

export default module('app',
  [
    'ngAria',
    'ngAnimate',
    'ngMaterial',
    downgradesModule,
    rootModule,
  ])
  .config(config)
  .service('ApiService', ApiService)
  .name;

