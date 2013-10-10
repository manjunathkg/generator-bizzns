/* jshint -W099 */
(function () {

'use strict';

angular.module('ManjuApp.projects.footer' , [])
.directive('projectsFooter',function(){
	
	return {		
		restrict 	: 	'E',
		templateUrl : 	'projects/footer/footer.tpl.html', 
		replace 	: 	true,
		scope 		: 	{},
		link 		: 	function(scope,element, attrs){
			console.log("******* INside footer Link func");
		}		
	};	
});

}()); 