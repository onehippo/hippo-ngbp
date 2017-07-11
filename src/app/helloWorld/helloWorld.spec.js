describe('Angular 1 Hello world component', () => {
  let $ctrl;
  let $componentController;
  let MessageService;

  beforeEach(() => {
    angular.mock.module('hippo-ngbp');

    inject((_$componentController_, _MessageService_) => {
      MessageService = _MessageService_;
      $componentController = _$componentController_;
    });

    $ctrl = $componentController('hippoHelloWorld', {
      MessageService,
    }, {

    });
  });

  it('should initialize', () => {
    $ctrl.$onInit();
    expect($ctrl.message).toBe('Hello World');
  });
});
