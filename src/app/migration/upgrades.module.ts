import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { userServiceProvider } from './upgraded-injectables';
import { ListButtonComponent } from './upgraded-components';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    userServiceProvider,
  ],
  declarations: [
    ListButtonComponent,
  ],
  exports: [
    ListButtonComponent,
  ]
})
export class UpgradesModule { }
