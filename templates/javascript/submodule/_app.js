(function () {

'use strict';

angular.module('<%= _.classify(lastWord) %>App', [
  //insert here
  'templates-app',  
  'templates-common',
  'titleService',
  'plusOne', 
  'ui.state',
  'ui.route'
])  //module
.config( function <%= _.classify(lastWord) %>Config ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/'+ lastWord );
})
.run( function run ( titleService ) {
  titleService.setSuffix( ' | <%= _.classify(lastWord) %>App' );
})

.controller( '<%= _.classify(lastWord) %>AppCtrl', function AppCtrl ( $scope, $location ) {
})

;
 
}()); 
