(function () {

'use strict';

angular.module('ManjuApp.Route3-directives',[])
  .directive('Route3_directive', function() {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the Route3 directive');
      }
    };
  });

}()); 
 