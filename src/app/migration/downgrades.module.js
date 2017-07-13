import { downgradeComponent } from '@angular/upgrade/static';

import { UserListComponent } from '../root/users/user-list/user-list.component.ts';

export default angular
  .module('app.downgrades', [])
  .directive('hippoUserList', downgradeComponent({ component: UserListComponent }))
  .name;

