import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hippo-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  users: object[];

  ngOnInit() {
    this.users = [
      {
        name: 'Joeri',
        description: 'Awesome web engineer',
      },
      {
        name: 'Stijn',
        description: 'Awesome python programmer',
      },
      {
        name: 'Ger',
        description: 'Awesome web developer',
      },
    ];
  }
}
