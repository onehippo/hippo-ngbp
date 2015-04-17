(function () {
  'use strict';

  angular
    .module('hippo.ngbp')
    .service('MainService', MainService);

  function MainService () {
    var main = this;
    main.message = 'Awesome Mainservice message';
  }
})();