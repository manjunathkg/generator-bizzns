(function () {

'use strict';

angular.module('ManjuApp.Route1-directives',[])
  .directive('Route1_directive', function() {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the Route1 directive');
      }
    };
  });

}()); 
 