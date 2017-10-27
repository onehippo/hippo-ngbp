import { Component } from '@angular/core';

@Component({
  selector: 'hippo-root',
  templateUrl: './root.component.html',
})
export class RootComponent {

  private appName;

  $onInit() {
    this.appName = 'app';
  }
}
