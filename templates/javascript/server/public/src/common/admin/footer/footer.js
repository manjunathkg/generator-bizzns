/* jshint -W099 */
(function () {

'use strict';

angular.module('ManjuApp.admin.footer' , [])
.directive('adminFooter',function(){
	
	return {		
		restrict 	: 	'E',
		templateUrl : 	'admin/footer/footer.tpl.html', 
		replace 	: 	true,
		scope 		: 	{},
		link 		: 	function(scope,element, attrs){
			console.log("******* INside footer Link func");
		}		
	};	
});

}()); 