describe('reverseFilter', function() {
  var reverseFilter;
  var $rootScope;
  var $controller;

  beforeEach(function() {
    module('hippo-ngbp');

    inject(function(_reverseFilter_) {
      reverseFilter = _reverseFilter_;
    });
  });

  it('should revert the given string', function() {
    expect(reverseFilter('test')).toEqual('tset');
  });

  it('should not error on empty input', function () {
    expect(reverseFilter()).toEqual('');
  });
});
