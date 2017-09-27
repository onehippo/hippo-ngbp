import { Injectable } from '@angular/core';

@Injectable()
export class ToolbarService {
  toolbarMessage: string;

  constructor() {
    this.toolbarMessage = 'Hello Hybrid Application!';
  }
}
