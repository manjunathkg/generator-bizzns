(function () {

'use strict';

angular.module('<%= _.classify(appname) %>App.admin', [
  //insert here
  '<%= _.classify(appname) %>App.admin.mainnav',
  '<%= _.classify(appname) %>App.admin.topHeader',
  '<%= _.classify(appname) %>App.admin.footer'
]);  //module
  
}()); 