import { Component, OnInit } from '@angular/core';
import { ToolbarService } from './toolbar.service';

@Component({
  selector: 'hippo-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnInit {

  message: string;

  constructor(private toolbarService: ToolbarService) {
  }

  ngOnInit() {
    this.message = this.toolbarService.toolbarMessage;
  }
}
