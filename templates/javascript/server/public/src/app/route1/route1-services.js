(function () {

'use strict';

angular.module('ManjuApp.Route1-services',[])
.service('Route1_service', function Route1_service($scope) {
    // AngularJS will instantiate a singleton by calling "new" on this function
})

//factories
// .factory('route1-factory', function() {
//     // Service logic
//     // ...

//     var meaningOfLife = 42;

//     // Public API here
//     return {
//       someMethod: function() {
//         return meaningOfLife;
//       }
//     };
// })

// //constants
// .constant('route1-constant', 42)


// //values
// .value('route1-value', 42)

// //Providers
// .provider('route1-provider', function() {

//   // Private variables
//   var salutation = 'Hello';

//   // Private constructor
//   function Greeter() {
//     this.greet = function() {
//       return salutation;
//     };
//   }

//   // Public API for configuration
//   this.setSalutation = function(s) {
//     salutation = s;
//   };

//   // Method for instantiating
//   this.$get = function() {
//     return new Greeter();
//   };
// })


;

 
}()); 