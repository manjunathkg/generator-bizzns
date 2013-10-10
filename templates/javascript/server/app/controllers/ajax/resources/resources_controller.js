var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var resource = require('resource');
var AboutPage = resource.use('AboutPage');
var Action = resource.use('Action');

var ResourcesController = new Controller();

ResourcesController.index = function() {
  this.title = 'Locomotive' ;
  this.render();
}


ResourcesController.new = function() {
  this.title = 'NEW Posts' ;
  this.render();
}


ResourcesController.create = function(){
	this.title = "CREATE method" ;
	this.render();
}

ResourcesController.show = function(){
	this.title = "SHOW controller";
	this.render();
}

ResourcesController.edit = function(){
	this.title = "EDIT controller";
	this.render();
}


ResourcesController.update = function(){
	this.title = "Update controller";
	this.render();
}

ResourcesController.destroy = function(){
	this.title = "Destroy controller";
	this.render();
}


ResourcesController.schema = function(){
	var self = this;
	this.title = "SCHEMA Controller";
	this.schema = Action.schema;
	//this.render({ format: 'json' });
 


	this.respond({
  		'json': function() { 
  			 
  			self.res.json({
  				"title" : "JSON TITLE" , 
  				"schema" : Action.schema
  			});
  			
  		},
  		default: function() { self.render(); }
	});


}


module.exports = ResourcesController;
