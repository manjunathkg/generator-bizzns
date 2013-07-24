'use strict';

angular.module('<%= _.classify(appname) %>App.<%=_.classify(name)%>-services')
.factory('<%= _.camelize(name) %>', function() {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function() {
        return meaningOfLife;
      }
    };
})


  ;


