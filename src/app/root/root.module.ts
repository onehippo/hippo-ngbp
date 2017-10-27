import { MaterialModule } from '../material/material.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarService } from './toolbar/toolbar.service';
import { UsersModule } from './users/users.module';

import { RootComponent } from './root.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    UsersModule,
  ],
  declarations: [
    RootComponent,
    ToolbarComponent
  ],
  providers: [
    RootComponent,
    ToolbarService,
  ],
})
export class RootModule { }
