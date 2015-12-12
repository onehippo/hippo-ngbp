describe('SubCtrl', function() {
  var SubCtrl;
  var $rootScope;
  var $controller;

  beforeEach(function() {
    module('hippo-ngbp');

    inject(function(_$rootScope_, _$controller_) {
      $rootScope = _$rootScope_;
      $controller = _$controller_;
    });

    SubCtrl = $controller('SubCtrl', {
      $scope: $rootScope.$new()
    });
  });

  it('should pass this test', function() {
    expect(SubCtrl.message).toEqual('Awesome sub module');
  });
});
