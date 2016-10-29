(function(){
    'use strict';
    angular.module('AppFilters')
       .filter('<%=name%>',function(){
            return function(input,arg1,arg2){
                var output = '';
                return output;
            }
        });
})();
