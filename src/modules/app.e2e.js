(function () {
  'use strict';

  describe('App: ', function () {
    it('should have a title', function () {
      browser.get('http://localhost:9000/#/');
      expect(browser.getTitle()).toEqual('App');
    });
  });
})();
