import './hippo-ngbp.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule  } from '@angular/upgrade/static';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
  ],
  declarations: [UserListComponent],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['hippo-ngbp'], { strictDi: true });
  }
}
