'use strict';

angular.module('<%= _.classyfy(appname) %>App.<%=_.classify(name)%>')
  .controller('<%= _.classify(name) %>Ctrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });