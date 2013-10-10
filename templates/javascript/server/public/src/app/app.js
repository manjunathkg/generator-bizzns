(function () {

'use strict';

angular.module('ManjuApp', [
  'ManjuApp.projects',
  //insert here
  'admin',
  'dashboard',
  'projectsinfo', 
  'templates-app',  
  'templates-common',
  'ui.state',
  'ui.route',
  'services.commonServices' ,
  'security'
])  //module
.config( function ManjuConfig ( $stateProvider,$locationProvider, $urlRouterProvider ) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise( '/' );
}) 
.constant('firebaseURL',  'https://bizzns.firebaseIO.com/databases/Manju' )
.constant('MONGOLAB_CONFIG', {
  baseUrl: '/databases/',
  dbName: 'Manju'
})
.constant('I18N.MESSAGES', {
  'errors.route.changeError':'Route change error',
  'crud.user.save.success':"A user with id '{{id}}' was saved successfully.",
  'crud.user.remove.success':"A user with id '{{id}}' was removed successfully.",
  'crud.user.remove.error':"Something went wrong when removing user with id '{{id}}'.",
  'crud.user.save.error':"Something went wrong when saving a user...",
  'crud.project.save.success':"A project with id '{{id}}' was saved successfully.",
  'crud.project.remove.success':"A project with id '{{id}}' was removed successfully.",
  'crud.project.save.error':"Something went wrong when saving a project...",
  'login.reason.notAuthorized':"You do not have the necessary access permissions.  Do you want to login as someone else?",
  'login.reason.notAuthenticated':"You must be logged in to access this part of the application.",
  'login.error.invalidCredentials': "Login failed.  Please check your credentials and try again.",
  'login.error.serverError': "There was a problem with authenticating: {{exception}}."
})
.run( function run ( titleService ) {
  titleService.setSuffix( ' | ManjuApp' );
})
.run( function run(security){
  security.requestCurrentUser();
})
 
.controller( 'ManjuAppCtrl', 
	function AppCtrl ( $scope,$rootScope, $location, $state, $stateParams, security, breadcrumbs, notifications, httpRequestTracker, angularFire,firebaseURL,firebaseService ) {

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.isAuthenticated = security.isAuthenticated;
    $rootScope.isAdmin = security.isAdmin;
    


     //var promise = angularFire(firebaseURL, $scope, 'bizzns', []);
    var promise = firebaseService.getFire("Manju", $rootScope, "app"  );

    promise.then(function() {
     // $rootScope.data =  firebaseService.getFirebaseCollection("Buzz3", $scope, "mainnav"  ); 

    // Add a new item by simply modifying the model directly.
      // $scope.bizzns.push({name: "Buzz3", desc: " is awesome!"});
      // $scope.mainnav = firebaseService.getFirebaseCollection("Buzz3", $scope, "mainnav"  );       
          
      //     var mainnav1 = {name: "mainnav - Buzz3-3", desc: " is awesome!-3", test:{type: "object-3", name:"test-3"}};
      //     var mainnav2 = {name: "mainnav - Buzz3-3", desc: " is awesome!-3", test:{type: "object-3", name:"test-3"}};

      //     $scope.mainnav.push(mainnav1);
      //     $scope.mainnav.push(mainnav2);
       

      //     // Add a new item by simply modifying the model directly.
      //     $scope.bizzns.push({name: "Buzz3", desc: " is awesome!", test:{type: "object", name:"test"}});
      //     $scope.bizzns.push({name: "Buzz3-2", desc: " is awesome!-2", test:{type: "object-2", name:"test-2"}});
      //     $scope.bizzns.push({name: "Buzz3-3", desc: " is awesome!-3", test:{type: "object-3", name:"test-3"}});
    });  //end of promise resolve


  }) //End of AppCtrl
;
 
}()); 
