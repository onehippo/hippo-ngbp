import { NgModule } from '@angular/core';
import {
  NoConflictStyleCompatibilityMode,
  MatListModule,
  MatButtonModule,
} from '@angular/material';
import './material.scss';

@NgModule({
  exports: [
    NoConflictStyleCompatibilityMode,
    MatListModule,
    MatButtonModule,
  ]
})
export class MaterialModule { }
