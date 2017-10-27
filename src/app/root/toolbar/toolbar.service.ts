import { Injectable } from '@angular/core';

@Injectable()
export class ToolbarService {
  toolbarMessage: string;

  constructor() {
    this.toolbarMessage = 'Hello Angular4-only Application!';
  }
}
