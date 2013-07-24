(function () {

'use strict';

angular.module('<%= _.classify(appname) %>App.<%=_.classify(name)%>-filters',[])
.filter('<%= _.classify(name) %>_filter', function() {
    return function(input) {
      return '<%= _.classify(name) %> filter: ' + input;
    };
});

}()); 
 
 