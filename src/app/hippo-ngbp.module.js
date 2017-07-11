import angular from 'angular';

import hippoHelloWorld from './helloWorld/helloWorld.component';

angular
.module('hippo-ngbp', [])
.component('hippoHelloWorld', hippoHelloWorld);

