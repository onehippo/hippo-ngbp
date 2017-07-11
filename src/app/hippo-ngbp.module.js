import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';

import hippoWorld from './world/world.component';
import hippoHelloWorld from './helloWorld/helloWorld.component';
import { UserListComponent } from './user-list/user-list.component.ts';
import { MessageService } from './message.service.ts';

angular
.module('hippo-ngbp', [])
.component('hippoWorld', hippoWorld)
.component('hippoHelloWorld', hippoHelloWorld)
.directive('hippoUserList', downgradeComponent({ component: UserListComponent }))
.service('MessageService', downgradeInjectable(MessageService));

