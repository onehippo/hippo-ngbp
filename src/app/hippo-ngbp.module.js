import angular from 'angular';

import hippoWorld from './world/world.component';
import hippoHelloWorld from './helloWorld/helloWorld.component';

angular
.module('hippo-ngbp', [])
.component('hippoWorld', hippoWorld)
.component('hippoHelloWorld', hippoHelloWorld);

