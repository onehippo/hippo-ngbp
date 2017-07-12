import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hippo-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  users: string[];

  ngOnInit() {
    this.users = [
      'Joeri',
      'Ariel',
      'Ran',
      'Arthur',
    ];
  }
}
