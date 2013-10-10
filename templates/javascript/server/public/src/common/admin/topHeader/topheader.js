/* jshint -W099 */
(function () {

angular.module('ManjuApp.admin.topHeader' , []).directive('adminTopHeader',function(){
	
	return{
		
		restrict 	: 'E',
		templateUrl : 'admin/topHeader/topheader.tpl.html', 
		replace 	: true,
		scope 		: {},
		link 		: function(scope,element, attrs){
			console.log("******* INside mainnav Link func");
		}		
	};	
});

}()); 