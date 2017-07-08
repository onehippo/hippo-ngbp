import 'angular';
import 'angular-mocks';
import './angularjs/hippo-ngbp.module';

const testsContext = require.context('.', true, /.spec$/);
testsContext.keys().forEach(testsContext);

