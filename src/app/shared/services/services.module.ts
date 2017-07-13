import { module } from 'angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import ApiService from './api.service';

export const sharedServicesModule = module(
  'app.shared.services',
  [],
)
.service('ApiService', ApiService)
.name;

@NgModule({
  imports: [
    CommonModule
  ],
})
export class SharedServicesModule { }
