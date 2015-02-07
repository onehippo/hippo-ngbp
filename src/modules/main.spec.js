(function () {
  'use strict';

  describe('Main: ', function () {
    it('should exist', function () {
      expect(angular.module('main')).toBeDefined();
    });
  });

  describe('Main.templates: ', function () {
    it('should exist', function () {
      expect(angular.module('main.templates')).toBeDefined();
    });

    it('should set some template in the template cache', function () {
      module('main');

      inject(function ($templateCache) {
        var tpl = $templateCache.get('main.tpl.html');
        expect(tpl).toBeDefined();
      });
    });
  });
})();
