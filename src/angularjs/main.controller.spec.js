describe('MainCtrl', function () {
  var MainCtrl;
  var $rootScope;
  var $controller;

  beforeEach(function () {
    module('hippo-ngbp');

    inject(function (_$rootScope_, _$controller_) {
      $rootScope = _$rootScope_;
      $controller = _$controller_;
    });

    MainCtrl = $controller('MainCtrl', {
      $scope: $rootScope.$new(),
    });
  });

  it('should pass this test', function () {
    expect(MainCtrl.message).toEqual('Awesome Mainservice message');
  });
});
