(function () {

'use strict';

angular.module('ManjuApp.Route3-filters',[])
.filter('Route3_filter', function() {
    return function(input) {
      return 'Route3 filter: ' + input;
    };
});

}()); 
 
 