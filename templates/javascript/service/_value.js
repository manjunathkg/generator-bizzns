'use strict';

angular.module('<%= _.classify(appname) %>App.<%=_.classify(name)%>-services')
  .value('<%= _.camelize(name) %>', 42);

 
