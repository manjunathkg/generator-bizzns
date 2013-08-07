/* jshint -W099 */
(function () {

angular.module('<%= _.classify(appname) %>App.admin.mainnav' , [])
.directive('adminMainnav',function(){	
	return{
		
		restrict 	: 'E',
		templateUrl : 'admin/mainnav/mainnav.tpl.html', 
		replace 	: true,
		scope 		: {},
		link 		: function(scope,element, attrs){
			console.log("******* INside mainnav Link func");
		}		
	};	
});


}()); 