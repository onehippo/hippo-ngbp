import { Injectable } from '@angular/core';
import { User } from '../../shared/types/user';
import { UserService } from './user.service';
import 'rxjs/add/observable/merge';

@Injectable()
export class UserListService {

  users: Array<User>;

  constructor(private userService: UserService) {
    this.users = [];

    userService.generateUser().subscribe(user => this.users.push(user));
    userService.generateUser().subscribe(user => this.users.push(user));
    userService.generateUser().subscribe(user => this.users.push(user));
  }
}
