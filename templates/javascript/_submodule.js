(function () {

'use strict';


  /**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */

angular.module('<%= _.classify(appname) %>App.<%=_.classify(name)%>', [
  'ui.state',
  'titleService',
  'plusOne',
  '<%= _.classify(appname) %>App.<%=_.classify(name)%>-controllers',
  '<%= _.classify(appname) %>App.<%=_.classify(name)%>-services',
  '<%= _.classify(appname) %>App.<%=_.classify(name)%>-directives',
  '<%= _.classify(appname) %>App.<%=_.classify(name)%>-filters'
	])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( '<%= _.classify(name) %>_home', {
    url: '/<%=name %>',
    views: {
      "<%= _.classify(name) %>_main": {
        controller: '<%= _.classify(name) %>-controller',
        templateUrl: '<%=name%>/<%= _.classify(name) %>-tpl.html'
      }
    }
  });
})

 

 

;

}()); 