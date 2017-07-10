describe('alertDirective', () => {
  let scope;

  beforeEach(() => {
    angular.mock.module('hippo-ngbp');

    inject(($compile, $rootScope) => {
      const element = angular.element('<alert message="someMessage"></alert>');
      scope = $rootScope.$new();

      scope.someMessage = 'Hello World';

      $compile(element)(scope);
      scope.$digest();
    });
  });

  it('should add Alert! to the message', () => {
    expect(scope.someMessage).toEqual('Hello World Alert!');
  });
});
