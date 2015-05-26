(function () {
  'use strict';

  function SubCtrl (apiService) {
    var sub = this;
    sub.message = apiService.message;
  }

  angular
    .module('hippo.ngbp')
    .controller('SubCtrl', SubCtrl);
})();