(function () {
  'use strict';

  angular
    .module('hippo.ngbp')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl () {
    var main = this;
    main.message = 'My Angular App';
  }
})();
