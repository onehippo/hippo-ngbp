import { NgModule } from '@angular/core';
import {
  NoConflictStyleCompatibilityMode,
} from '@angular/material';

@NgModule({
  exports: [
    NoConflictStyleCompatibilityMode,
  ]
})
export class MaterialModule { }
