angular.module('services.settings', [])
.controller(
  'settings-controller', 
      ['$scope', 'security', 'localizedMessages', function($scope, security, localizedMessages) {
          $scope.accountSettings = function(){
            console.log("accountSettings clicked");
          };
          $scope.privacySettings = function(){
            console.log("privacySettings clicked");
          };
      }]
)

// The loginToolbar directive is a reusable widget that can show login or logout buttons
// and information the current authenticated user
.directive('settings', ['security', function(security) {  
  var directive = {
    templateUrl: 'services/settings/settings.tpl.html',
    restrict: 'E',
    replace: true,
    scope: true,
    link: function($scope, $element, $attrs, $controller) {
      $scope.isAuthenticated = security.isAuthenticated; 
      $scope.$watch(function() {
        return security.currentUser;
      }, function(currentUser) {
        $scope.currentUser = currentUser;
      });
    }
  };
  return directive;
}]);