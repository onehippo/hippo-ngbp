import './hippo-ngbp.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule  } from '@angular/upgrade/static';
import { UserListComponent } from './user-list/user-list.component';
import { MessageService } from './message.service';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
  ],
  providers: [
    MessageService,
  ],
  declarations: [UserListComponent],
  entryComponents: [UserListComponent],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['hippo-ngbp'], { strictDi: true });
  }
}
