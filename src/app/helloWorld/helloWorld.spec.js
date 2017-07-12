describe('Angular 1 Hello world component', () => {
  let $ctrl;
  let $componentController;

  beforeEach(() => {
    angular.mock.module('hippo-ngbp');

    inject((_$componentController_) => {
      $componentController = _$componentController_;
    });

    $ctrl = $componentController('hippoHelloWorld');
  });

  it('should initialize', () => {
    $ctrl.$onInit();
    expect($ctrl.message).toBe('Hello World');
  });
});
