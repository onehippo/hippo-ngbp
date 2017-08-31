import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersModule } from './users/users.module';
import { ToolbarService } from './toolbar/toolbar.service';

@NgModule({
  imports: [
    CommonModule,
    UsersModule,
  ],
  providers: [
    ToolbarService,
  ],
})
export class RootModule { }
