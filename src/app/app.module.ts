import { module } from 'angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpgradeModule  } from '@angular/upgrade/static';

import { rootModule, RootModule } from './root/root.module';
import { sharedModule, SharedModule } from './shared/shared.module';

module('app', [
  'ngAria',
  'ngAnimate',
  'ngMaterial',
  rootModule,
  sharedModule,
]);

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UpgradeModule,
    SharedModule,
    RootModule,
  ],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['app'], { strictDi: true });
  }
}

