describe('Toolbar component', () => {
  let $ctrl;
  let $componentController;

  beforeEach(() => {
    angular.mock.module('hippo-app');

    inject((_$componentController_) => {
      $componentController = _$componentController_;
    });

    $ctrl = $componentController('hippoToolbar');
  });

  it('should initialize', () => {
    $ctrl.$onInit();
    expect($ctrl.message).toBe('Hello World');
  });
});

