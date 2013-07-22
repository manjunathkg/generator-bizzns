'use strict';

angular.module('<%= _.classify(appname) %>App', [
  'templates-app',
  'templates-common',
  '<%= _.classify(appname) %>.home',
  '<%= _.classify(appname) %>.about',
  'ui.state',
  'ui.route'])
.config( function <%= _.classify(appname) %>Config ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})
.run( function run ( titleService ) {
  titleService.setSuffix( ' | <%= _.classify(appname) %>App' );
})

.controller( '<%= _.classify(appname) %>AppCtrl', function AppCtrl ( $scope, $location ) {
})

;



