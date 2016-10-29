(function() {
    'use strict';
    var services = angular.module('AppServices');
	services.factory('<%=name%>', function($timeout){
            var states = [];
            var update = function(){

            };
            return {
                update: update
            };
    });
})();
