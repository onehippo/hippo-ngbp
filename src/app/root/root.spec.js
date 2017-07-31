describe('Hippo app component', () => {
  let $ctrl;
  let $componentController;

  beforeEach(() => {
    angular.mock.module('app');

    inject((_$componentController_) => {
      $componentController = _$componentController_;
    });

    $ctrl = $componentController('hippoApp');
  });

  it('should initialize', () => {
    $ctrl.$onInit();
    expect($ctrl.appName).toBe('app');
  });
});
