describe('SubCtrl', () => {
  let SubCtrl;
  let $rootScope;
  let $controller;

  beforeEach(() => {
    angular.mock.module('hippo-ngbp');

    inject((_$rootScope_, _$controller_) => {
      $rootScope = _$rootScope_;
      $controller = _$controller_;
    });

    SubCtrl = $controller('SubCtrl', {
      $scope: $rootScope.$new(),
    });
  });

  it('should pass this test', () => {
    expect(SubCtrl.message).toEqual('Awesome sub module');
  });
});
