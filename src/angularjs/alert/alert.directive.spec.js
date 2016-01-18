describe('alertDirective', function () {
  var scope;

  beforeEach(function () {
    module('hippo-ngbp');

    inject(function ($compile, $rootScope) {
      var element = angular.element('<alert message="someMessage"></alert>');
      scope = $rootScope.$new();

      scope.someMessage = 'Hello World';

      $compile(element)(scope);
      scope.$digest();
    });
  });

  it('should add Alert! to the message', function () {
    expect(scope.someMessage).toEqual('Hello World Alert!');
  });
});
