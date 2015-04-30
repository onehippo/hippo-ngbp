(function () {
  'use strict';

  angular
    .module('hippo.ngbp')
    .controller('SubCtrl', SubCtrl);

  function SubCtrl () {
    var sub = this;
    sub.message = 'Awesome sub module';
  }
})();