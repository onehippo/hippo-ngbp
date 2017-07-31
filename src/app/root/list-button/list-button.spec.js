describe('ListButton component', () => {
  let $ctrl;
  let $componentController;

  beforeEach(() => {
    angular.mock.module('app');

    inject((_$componentController_) => {
      $componentController = _$componentController_;
    });

    $ctrl = $componentController('hippoListButton');
  });

  it('should initialize', () => {
    $ctrl.$onInit();
    expect($ctrl.message).toBe('Click me!');
  });
});

