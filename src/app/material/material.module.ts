import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdIconModule,
  MdListModule,
  MdToolbarModule,
  NoConflictStyleCompatibilityMode
} from '@angular/material';
import './material.scss';

@NgModule({
  imports: [
    MdButtonModule,
    MdIconModule,
    MdListModule,
    MdToolbarModule,
    NoConflictStyleCompatibilityMode
  ],
  exports: [
    MdButtonModule,
    MdIconModule,
    MdListModule,
    MdToolbarModule,
    NoConflictStyleCompatibilityMode
  ]
})
export class MaterialModule { }
