import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpgradeModule  } from '@angular/upgrade/static';

import ng1AppModule from './app.ng1-module.js';

import { MaterialModule } from './material/material.module';
import { RootModule } from './root/root.module';

import { userServiceProvider } from './ng1-upgraded-providers';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UpgradeModule,
    MaterialModule,
    RootModule,
  ],
  providers: [
    userServiceProvider
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}


  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [ng1AppModule], { strictDi: true });
  }
}

