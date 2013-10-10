// Draw routes.  Locomotive's router provides expressive syntax for drawing
// routes, including support for resourceful routes, namespaces, and nesting.
// MVC routes can be mapped mapped to controllers using convenient
// `controller#action` shorthand.  Standard middleware in the form of
// `function(req, res, next)` is also fully supported.  Consult the Locomotive
// Guide on [routing](http://locomotivejs.org/guide/routing.html) for additional
// information.
var security = require('../lib/security'); 

module.exports = function routes() { 
   //root was configured in config/envrironments/all.js

    this.post('/login', security.login);
	this.post('/logout', security.logout);
	// Retrieve the current user
	this.get('/current-user', security.sendCurrentUser);
	// Retrieve the current user only if they are authenticated
	this.get('/authenticated-user', function(req, res) {
	  security.authenticationRequired(req, res, function() { security.sendCurrentUser(req, res); });
	});
	// Retrieve the current user only if they are admin
	this.get('/admin-user', function(req, res) {
	  security.adminRequired(req, res, function() { security.sendCurrentUser(req, res); });
	});

    this.namespace('ajax', function() {
    	this.namespace('resources', function(){
    		this.match(':id/schema', 'resources#schema');
    		this.resources('resources');
    	});
    });






}
