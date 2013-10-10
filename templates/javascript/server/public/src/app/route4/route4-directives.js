(function () {

'use strict';

angular.module('ManjuApp.Route4-directives',[])
  .directive('Route4_directive', function() {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the Route4 directive');
      }
    };
  });

}()); 
 