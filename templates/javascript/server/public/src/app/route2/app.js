(function () {

'use strict';

angular.module('Route2App', [
  //insert here
  'templates-app',  
  'templates-common',
  'ui.state',
  'ui.route',
  'services.commonServices'
])  //module
.config( function Route2Config ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/'+ lastWord );
})
.run( function run ( titleService ) {
  titleService.setSuffix( ' | Route2App' );
})

.controller( 'Route2AppCtrl',  
  function AppCtrl ( $scope, $location,angularFire,firebaseURL,firebaseService ) {

     //var promise = angularFire(firebaseURL, $scope, 'bizzns', []);
    var promise = firebaseService.getFire("Buzz3", $scope, "bizzns"  );
    promise.then(function() {

    // Add a new item by simply modifying the model directly.
      $scope.bizzns.push({name: "Manju", desc: " is awesome!"});
      console.log("firebaseURL = " + firebaseURL);
       
      //Sample code.. just for ref.. remove if not needed.
          
        //   $scope.mainnav = firebaseService.getFirebaseCollection('system/apps/Buzz3','mainnav');
          
        //   var mainnav1 = {name: "mainnav - Buzz3-3", desc: " is awesome!-3", test:{type: "object-3", name:"test-3"}};
        //   var mainnav2 = {name: "mainnav - Buzz3-3", desc: " is awesome!-3", test:{type: "object-3", name:"test-3"}};

        //   $scope.mainnav.push(mainnav1);
        //   $scope.mainnav.push(mainnav2);
       

        //   // Add a new item by simply modifying the model directly.
        //   $scope.bizzns.push({name: "Buzz3", desc: " is awesome!", test:{type: "object", name:"test"}});
        //   $scope.bizzns.push({name: "Buzz3-2", desc: " is awesome!-2", test:{type: "object-2", name:"test-2"}});
        //   $scope.bizzns.push({name: "Buzz3-3", desc: " is awesome!-3", test:{type: "object-3", name:"test-3"}});
    
    });  //end of promise resolve
  }) //End of AppCtrl
;
 
}()); 
