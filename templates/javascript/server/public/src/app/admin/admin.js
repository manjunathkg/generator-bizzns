angular.module('admin', ['admin-projects', 'admin-users'])
.config( function ManjuConfig ( $stateProvider,$locationProvider, $urlRouterProvider ) {
  $locationProvider.html5Mode(true);
  $stateProvider.state( 'admin_home', {
    url: '/admin',     
    controller: 'admin_controller',
    templateUrl: 'admin/adminHome.tpl.html'
       
  });
});
