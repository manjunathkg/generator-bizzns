(function () {

'use strict';

angular.module('<%= _.classify(appname) %>App', [
  //insert here
  'templates-app',  
  'templates-common',
  'ui.state',
  'ui.route',
  'services.commonServices' 
])  //module
.config( function <%= _.classify(appname) %>Config ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/' );
})
.constant('firebaseURL',  'https://bizzns.firebaseIO.com/<%= _.classify(appname) %>' )
.run( function run ( titleService ) {
  titleService.setSuffix( ' | <%= _.classify(appname) %>App' );
})

.controller( '<%= _.classify(appname) %>AppCtrl', 
	function AppCtrl ( $scope, $location,angularFire,firebaseURL,firebaseService ) {

     //var promise = angularFire(firebaseURL, $scope, 'bizzns', []);
    var promise = firebaseService.getFire("Buzz3", $scope, "bizzns"  );

    promise.then(function() {

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
