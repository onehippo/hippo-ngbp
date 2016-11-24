describe('MainCtrl', () => {
  let MainService;

  beforeEach(() => {
    angular.mock.module('hippo-ngbp');

    inject((_MainService_) => {
      MainService = _MainService_;
    });
  });

  it('should pass this test', () => {
    expect(MainService.message).toEqual('Awesome Mainservice message');
    expect(MainService.getMessage()).toEqual('Awesome Mainservice message');
  });
});

