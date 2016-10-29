(function() {
  'use strict';
  var services = angular.module('AppServices');
  services.factory('<%=name%>', function($resource) {
    return $resource('./api/', {}, {
      get: {
        method: 'POST',
        cache: false,
        isArray: false
      },
      post : {
          method: 'POST',
          cache: false,
          isArray: false,
          url : './api/'
      }
    });
  });
})();
