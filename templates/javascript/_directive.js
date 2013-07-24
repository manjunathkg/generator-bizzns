(function () {

'use strict';

angular.module('<%= _.classify(appname) %>App.<%=_.classify(name)%>-directives',[])
  .directive('<%= _.classify(name) %>_directive', function() {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the <%= _.classify(name) %> directive');
      }
    };
  });

}()); 
 