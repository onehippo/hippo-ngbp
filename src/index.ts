import './polyfills';
import { bootstrap } from 'angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import hippoNgbp from './app/angularjs/hippo-ngbp.module';
import { AngularModule } from './app/angular/angular.module';

bootstrap(document, [hippoNgbp], { strictDi: true });
platformBrowserDynamic().bootstrapModule(AngularModule);
