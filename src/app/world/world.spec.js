describe('Angular 1 world component', () => {
  let $componentController;

  beforeEach(() => {
    angular.mock.module('hippo-ngbp');

    inject((_$componentController_) => {
      $componentController = _$componentController_;
    });

    $componentController('hippoWorld');
  });
});
