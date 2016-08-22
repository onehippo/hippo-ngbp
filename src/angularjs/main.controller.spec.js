describe('MainCtrl', () => {
  let MainCtrl;
  let $rootScope;
  let $controller;

  beforeEach(() => {
    angular.mock.module('hippo-ngbp');

    inject((_$rootScope_, _$controller_) => {
      $rootScope = _$rootScope_;
      $controller = _$controller_;
    });

    MainCtrl = $controller('MainCtrl', {
      $scope: $rootScope.$new(),
    });
  });

  it('should pass this test', () => {
    expect(MainCtrl.message).toEqual('Awesome Mainservice message');
  });
});

