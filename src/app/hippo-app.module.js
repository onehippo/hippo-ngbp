import { downgradeComponent } from '@angular/upgrade/static';
import { UserListComponent } from './user-list/user-list.component.ts';

import hippoApp from './hippo-app.component';
import hippoToolbar from './toolbar/toolbar.component';
import hippoListButton from './list-button/list-button.component';
import ApiService from './api/api.service';
import UserService from './user/user.service';

angular
  .module('hippo-app', [
    'ngAria',
    'ngAnimate',
    'ngMaterial',
  ])
  .component('hippoApp', hippoApp)
  .component('hippoToolbar', hippoToolbar)
  .component('hippoListButton', hippoListButton)
  .directive('hippoUserList', downgradeComponent({ component: UserListComponent }))
  .service('UserService', UserService)
  .service('ApiService', ApiService);
