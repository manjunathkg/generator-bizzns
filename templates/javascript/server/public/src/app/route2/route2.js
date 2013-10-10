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

angular.module('ManjuApp.Route2', [
  'ui.state',
  'titleService',
  'plusOne',
  'ManjuApp.Route2-controllers',
  'ManjuApp.Route2-services',
  'ManjuApp.Route2-directives',
  'ManjuApp.Route2-filters'
	]) //module

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider,$urlRouterProvider  ) {
  $stateProvider.state( 'Route2_home', {
    url: '/route2',     
    controller: 'Route2_controller',
    templateUrl: 'route2/Route2Home.tpl.html'
       
  });
})
 
;

}()); 