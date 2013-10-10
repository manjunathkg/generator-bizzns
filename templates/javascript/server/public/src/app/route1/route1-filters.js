(function () {

'use strict';

angular.module('ManjuApp.Route1-filters',[])
.filter('Route1_filter', function() {
    return function(input) {
      return 'Route1 filter: ' + input;
    };
});

}()); 
 
 