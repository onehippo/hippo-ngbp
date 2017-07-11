import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  message: string;

  constructor() {
    this.message = 'Hello World';
  }
}
