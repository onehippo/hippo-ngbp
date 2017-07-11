import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'hippo-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  message: string;
  users: string[];

  constructor(messageService: MessageService) {
    this.message = messageService.message;
  }

  ngOnInit() {
    this.users = [
      'Joeri',
      'Ariel',
      'Ran',
      'Arthur',
    ];
  }
}
