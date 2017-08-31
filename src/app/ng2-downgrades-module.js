import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';

import { ToolbarService } from './root/toolbar/toolbar.service.ts';
import { UserListComponent } from './root/users/user-list/user-list.component.ts';

export default angular
  .module('app.downgrades', [])
  .directive('hippoUserList', downgradeComponent({ component: UserListComponent }))
  .factory('ToolbarService', downgradeInjectable(ToolbarService))
  .name;

