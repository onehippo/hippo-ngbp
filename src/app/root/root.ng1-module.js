import { module } from 'angular';

import hippoRoot from './root.component';
import hippoToolbar from './toolbar/toolbar.component';
import hippoListButton from './list-button/list-button.component';
import usersModule from './users/users.ng1-module';

export default module('app.root',
  [
    usersModule,
  ])
  .component('hippoRoot', hippoRoot)
  .component('hippoToolbar', hippoToolbar)
  .component('hippoListButton', hippoListButton)
  .name;

