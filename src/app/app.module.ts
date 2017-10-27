import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RootModule } from './root/root.module';
import { RootComponent } from './root/root.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RootModule,
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule {}
