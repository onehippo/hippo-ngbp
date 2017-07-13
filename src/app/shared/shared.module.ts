import { module } from 'angular';
import {
  sharedServicesModule,
  SharedServicesModule,
} from './services/services.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export const sharedModule = module(
  'app.shared',
  [sharedServicesModule]
)
.name;

@NgModule({
  imports: [
    CommonModule,
    SharedServicesModule,
  ],
  declarations: []
})
export class SharedModule { }
