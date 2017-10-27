import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hippo-root',
  templateUrl: './root.component.html',
})
export class RootComponent implements OnInit {

  appName;

  ngOnInit(): void {
    this.appName = 'app';
  }
}
