import { Injectable } from '@angular/core';
import UserService from './user.service';

@Injectable()
export class UserListService {
  users: object[];

  constructor(private userService: UserService) {
    this.users = [];

    userService.generateUser().then((user) => {
      this.users.push(user);
    });
    userService.generateUser().then((user) => {
      this.users.push(user);
    });
    userService.generateUser().then((user) => {
      this.users.push(user);
    });
  }
}
