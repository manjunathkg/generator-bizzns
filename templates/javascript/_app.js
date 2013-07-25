(function () {

'use strict';

angular.module('<%= _.classify(appname) %>App', [
  //insert here
  'templates-app',  
  'templates-common',
  'titleService',
  'plusOne', 
  'ui.state',
  'ui.route'
])  //module
.config( function <%= _.classify(appname) %>Config ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/pta' );
})
.run( function run ( titleService ) {
  titleService.setSuffix( ' | <%= _.classify(appname) %>App' );
})

.controller( '<%= _.classify(appname) %>AppCtrl', function AppCtrl ( $scope, $location ) {
})

;
 
}()); 
