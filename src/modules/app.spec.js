(function () {
  'use strict';

  describe('app: ', function () {
    it('should exist', function () {
      expect(angular.module('app')).toBeDefined();
    });
  });

  describe('app.templates: ', function () {
    it('should exist', function () {
      expect(angular.module('app.templates')).toBeDefined();
    });

    it('should set some template in the template cache', function () {
      module('app');

      inject(function ($templateCache) {
        var tpl = $templateCache.get('app.tpl.html');
        expect(tpl).toBeDefined();
        expect(tpl).toBe('<h1>App</h1>');
      });
    });
  });
})();
