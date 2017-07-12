import './hippo-app.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpgradeModule  } from '@angular/upgrade/static';

import { MaterialModule } from './material/material.module';
import { UserListComponent } from './user-list/user-list.component';
import { ListButtonComponent } from './list-button/list-button.upgrade';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UpgradeModule,
    MaterialModule,
  ],
  declarations: [
    UserListComponent,
    ListButtonComponent,
  ],
  entryComponents: [UserListComponent],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['hippo-app'], { strictDi: true });
  }
}

