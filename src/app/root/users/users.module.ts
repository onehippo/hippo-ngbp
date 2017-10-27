import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListService } from './user-list.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';

import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  providers: [
    UserListService,
    UserService,
  ],
  declarations: [
    UserListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    UserListComponent,
  ],
  entryComponents: [
    UserListComponent,
  ],
})
export class UsersModule { }
