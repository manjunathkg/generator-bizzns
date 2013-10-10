(function () {

'use strict';

angular.module('ManjuApp.Route4-filters',[])
.filter('Route4_filter', function() {
    return function(input) {
      return 'Route4 filter: ' + input;
    };
});

}()); 
 
 