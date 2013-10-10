/* jshint -W099 */
(function () {

angular.module('ManjuApp.projects.mainnav' , [])
.controller('projectsMainnav_controller', 
	function ($scope,$rootScope, $location, $state, $stateParams, security, breadcrumbs, notifications, httpRequestTracker) {
    $scope.$state = $state;
    $scope.$stateParams = $stateParams;
    $scope.isAuthenticated = security.isAuthenticated;
    $scope.isprojects = security.isprojects;
    $scope.data = [ 
    	{name:'Home', href:'/home', tooptip:'Some home tooltip'},
    	{name:'Projects', href:'/projects', tooptip:'Some projects tooltip'},
    	{name:'Users', href:'/users', tooptip:'Some users tooltip'},
    	{name:'Reports', href:'/reports', tooptip:'Some reports tooltip'}
    ];
})
.directive('projectsMainnav',function(){	
	return{
		
		restrict 	: 'EA',
		templateUrl : 'projects/mainnav/mainnav.tpl.html', 
		replace 	: true,
		scope 		: {},
		link 		: function(scope,element, attrs){
			console.log("******* INside mainnav Link func");
		}		
	};	
});


}()); 