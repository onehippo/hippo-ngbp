import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListService } from './user-list.service';
import { UserListComponent } from './user-list/user-list.component';

import { MaterialModule } from '../../material/material.module';
import { ListButtonComponent } from '../../ng1-upgraded-components';

@NgModule({
  providers: [
    UserListService,
  ],
  declarations: [
    UserListComponent,
    ListButtonComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    UserListComponent,
  ],
  entryComponents: [
    UserListComponent,
  ],
})
export class UsersModule { }
