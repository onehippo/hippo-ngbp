import { module } from 'angular';

import UserService from './user.service';

export default module('app.root.users', [])
  .service('UserService', UserService)
  .name;

