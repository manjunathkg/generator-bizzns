/* jshint -W099 */
(function () {

angular.module('ManjuApp.admin.mainnav' , [])
.controller('adminMainnav_controller', 
	function ($scope,$rootScope, $location, $state, $stateParams, security, breadcrumbs, notifications, httpRequestTracker) {
    $scope.$state = $state;
    $scope.$stateParams = $stateParams;
    $scope.isAuthenticated = security.isAuthenticated;
    $scope.isAdmin = security.isAdmin;
    $scope.data = [ 
    	{name:'Home', href:'/home', tooptip:'Some home tooltip'},
    	{name:'Projects', href:'/projects', tooptip:'Some projects tooltip'},
    	{name:'Users', href:'/users', tooptip:'Some users tooltip'},
    	{name:'Reports', href:'/reports', tooptip:'Some reports tooltip'}
    ];
})
.directive('adminMainnav',function(){	
	return{
		
		restrict 	: 'EA',
		templateUrl : 'admin/mainnav/mainnav.tpl.html', 
		replace 	: true,
		scope 		: {},
		link 		: function(scope,element, attrs){
			console.log("******* INside mainnav Link func");
		}		
	};	
});


}()); 