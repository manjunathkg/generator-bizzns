/* jshint -W099 */
(function () {

angular.module('<%= _.classify(appname) %>App.projects.topHeader' , ['security.service'])
.controller('projectsTopHeader_controller',
	function ($scope,$rootScope, $location, $state, $stateParams, security, breadcrumbs, notifications, httpRequestTracker) {
    $scope.$state = $state;
    $scope.$stateParams = $stateParams;
    $scope.isAuthenticated = security.isAuthenticated;
    $scope.isprojects = security.isprojects;
    $scope.home = function () {
    if (security.isAuthenticated()) {
      $location.path('/dashboard');
    } else {
      $location.path('/projectsinfo');
    }
  };
  
    $scope.data = [ 
    	{name:'Home', href:'/home', tooptip:'Some home tooltip'},
    	{name:'Projects', href:'/projects', tooptip:'Some projects tooltip'},
    	{name:'Users', href:'/users', tooptip:'Some users tooltip'},
    	{name:'Reports', href:'/reports', tooptip:'Some reports tooltip'}
    ];
}


)
.directive('projectsTopHeader',function(){
	return{
		
		restrict 	: 'E',
		templateUrl : 'projects/topHeader/topheader.tpl.html', 
		replace 	: true,
		scope 		: {},
		link 		: function(scope,element, attrs){
			console.log("******* INside projects topheader Link func");
		}		
	};	
});

}()); 