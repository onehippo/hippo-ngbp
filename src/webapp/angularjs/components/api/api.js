(function () {
  // this is an API module that is build separately and can be used by other projects

  function config () {
    console.log('api included!');
  }

  angular
    .module('hippo.ngbp.api', [])
    .config(config);
})();