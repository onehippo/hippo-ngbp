import { NgModule } from '@angular/core';
import {
  NoConflictStyleCompatibilityMode,
  MdListModule,
  MdButtonModule,
} from '@angular/material';

@NgModule({
  exports: [
    NoConflictStyleCompatibilityMode,
    MdListModule,
    MdButtonModule,
  ]
})
export class MaterialModule { }
