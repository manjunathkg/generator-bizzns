(function () {
'use strict';

angular.module('<%= _.classify(appname) %>App.<%=_.classify(name)%>-controllers',[])

.controller('<%= _.classify(name) %>_controller', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
})

;
}()); 
