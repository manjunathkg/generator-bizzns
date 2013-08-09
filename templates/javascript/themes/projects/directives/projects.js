(function () {

'use strict';

angular.module('<%= _.classify(appname) %>App.projects', [
  //insert here
  '<%= _.classify(appname) %>App.projects.mainnav',
  '<%= _.classify(appname) %>App.projects.topHeader',
  '<%= _.classify(appname) %>App.projects.footer',
  'services.commonServices'
]);  //module
  
}()); 