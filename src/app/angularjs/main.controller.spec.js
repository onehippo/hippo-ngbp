describe('MainCtrl', () => {
  let MainCtrl;
  let $rootScope;
  let $controller;
  let MainService;

  beforeEach(() => {
    angular.mock.module('hippo-ngbp');

    inject((_$rootScope_, _$controller_, _MainService_) => {
      $rootScope = _$rootScope_;
      $controller = _$controller_;
      MainService = _MainService_;
    });

    spyOn(MainService, 'getMessage').and.returnValue('Awesome mocked message');

    MainCtrl = $controller('MainCtrl', {
      $scope: $rootScope.$new(),
    });
  });

  it('should pass this test', () => {
    expect(MainCtrl.message).toEqual('Awesome mocked message again!');
  });
});

