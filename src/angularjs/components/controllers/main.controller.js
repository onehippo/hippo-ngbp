(function () {
  'use strict';

  angular
    .module('hippo.ngbp')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl (MainService) {
    var main = this;
    main.message = MainService.message;
  }
})();
