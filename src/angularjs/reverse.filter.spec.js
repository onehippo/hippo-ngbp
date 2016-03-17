describe('reverseFilter', () => {
  let reverseFilter;

  beforeEach(() => {
    module('hippo-ngbp');

    inject((_reverseFilter_) => {
      reverseFilter = _reverseFilter_;
    });
  });

  it('should revert the given string', () => {
    expect(reverseFilter('test')).toEqual('tset');
  });

  it('should not error on empty input', () => {
    expect(reverseFilter()).toEqual('');
  });
});
