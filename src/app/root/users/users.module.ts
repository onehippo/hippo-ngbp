import { module } from 'angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpgradesModule } from '../../migration/upgrades.module';
import { MaterialModule } from '../../material/material.module';

import UserService from './user.service';
import { UserListService } from './user-list.service';
import { UserListComponent } from './user-list/user-list.component';

export const usersModule = module(
  'app.root.users',
  [],
)
.service('UserService', UserService)
.name;

@NgModule({
  imports: [
    CommonModule,
    UpgradesModule,
    MaterialModule,
  ],
  providers: [
    UserListService,
  ],
  declarations: [
    UserListComponent,
  ],
  entryComponents: [
    UserListComponent,
  ],
  exports: [
    UserListComponent,
  ]
})
export class UsersModule { }
