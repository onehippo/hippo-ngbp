import { module } from 'angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import hippoRoot from './root.component';
import hippoToolbar from './toolbar/toolbar.component';
import hippoListButton from './list-button/list-button.component';

import downgradesModule from '../migration/downgrades.module';

import { usersModule, UsersModule } from './users/users.module';

export const rootModule = module(
  'app.root',
  [
    downgradesModule,
    usersModule,
  ],
)
.component('hippoRoot', hippoRoot)
.component('hippoToolbar', hippoToolbar)
.component('hippoListButton', hippoListButton)
.name;

@NgModule({
  imports: [
    CommonModule,
    UsersModule,
  ],
})
export class RootModule { }
