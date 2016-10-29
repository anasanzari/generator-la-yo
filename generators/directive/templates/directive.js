(function(){
    'use strict';
    angular.module('AppDirectives')
        .directive('<%=name%>', function(){
            return {
                restrict: 'AEC',
                scope:{
                    a : '=',
                    b : '@',

                },
                link: function(scope, element, attr) {

                },
                templateUrl: './'
            };
        });

})();
