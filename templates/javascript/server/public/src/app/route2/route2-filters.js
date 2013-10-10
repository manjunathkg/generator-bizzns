(function () {

'use strict';

angular.module('ManjuApp.Route2-filters',[])
.filter('Route2_filter', function() {
    return function(input) {
      return 'Route2 filter: ' + input;
    };
});

}()); 
 
 