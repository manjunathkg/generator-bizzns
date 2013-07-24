(function () {

'use strict';

angular.module('<%= _.classify(appname) %>App.<%=_.classify(name)%>-services',[])
.service('<%= _.classify(name) %>_service', function <%= _.classify(name) %>_service($scope) {
    // AngularJS will instantiate a singleton by calling "new" on this function
})

//factories
// .factory('<%= _.camelize(name) %>-factory', function() {
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
// .constant('<%= _.camelize(name) %>-constant', 42)


// //values
// .value('<%= _.camelize(name) %>-value', 42)

// //Providers
// .provider('<%= _.camelize(name) %>-provider', function() {

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