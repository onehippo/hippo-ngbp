import './hippo-app.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpgradeModule  } from '@angular/upgrade/static';

import { MaterialModule } from './material/material.module';
import { UpgradesModule } from './upgrades/upgrades.module';

import { UserListComponent } from './user-list/user-list.component';
import { UserListService } from './user-list/user-list.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UpgradeModule,
    UpgradesModule,
    MaterialModule,
  ],
  providers: [
    UserListService,
  ],
  declarations: [
    UserListComponent,
  ],
  entryComponents: [UserListComponent],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['hippo-app'], { strictDi: true });
  }
}

