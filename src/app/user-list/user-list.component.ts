import { Component, OnInit } from '@angular/core';
import { UserListService } from './user-list.service';

@Component({
  selector: 'hippo-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  users: object[];

  constructor(private userList: UserListService) {}

  ngOnInit() {
    this.users = this.userList.users;
  }
}
