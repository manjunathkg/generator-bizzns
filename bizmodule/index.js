(function () {

'use strict';
var util = require('util');
var path = require('path');
var _    = require('lodash'); 
_.str = require('underscore.string'); 
_.mixin(_.str.exports());
var ScriptBase = require('../script-base.js');
var angularutils = require('../util.js');
var yeoman = require('yeoman-generator');
 

module.exports = Generator;

function Generator(args, options) { 
  ScriptBase.apply(this, arguments);
}
util.inherits(Generator, ScriptBase);



Generator.prototype.createSubmoduleFiles = function createSubmoduleFiles() {  
  console.log("***************  CREATING SUBMODULE FILES ******* for " + this.name);
    
   //convert any dots in path to /
   var moduleFileName = angularutils.convertDotPathToSlashPath(this.name);

   //Got cleaned up version of submodule path here.
     var appname = this.env.options.appname;
	 var lastWord = angularutils.getLastWordFromSlashPath(this.name);
	 console.log("** Last word returened was *** " + lastWord);
	 this.lastWord = lastWord;
	 this.env.options.lastWord = lastWord;
	
	 this.appTemplate('submodule/_submodule', lastWord ); //if lastword is pta, create pta.js under the path
	 this.htmlTemplate('_page.tpl.html', _.classify(this.name)+ 'Home.tpl.html'); //home page template for the module
	 console.log("appname = " + appname);
   console.log("moduleFileName = " + moduleFileName);
   this.addSubModuleToAppJS(appname, moduleFileName);					   //update app.js
	 this.addSubModuleNavToIndex(moduleFileName, _.capitalize(lastWord));  //update index.html
	 this.htmlTemplate('submodule/_index.html', '/index.html' );      
   this.appTemplate('submodule/_app', 'app');

};

//Make submodules a stand alone app - helps in testing and modularity
Generator.prototype.projectfiles = function projectfiles() {
   console.log("__dirname = " + __dirname);
  this.sourceRoot(path.join(__dirname, '../templates/common'));
  //convert any dots in path to /
  var nameWithSlashPath = angularutils.convertDotPathToSlashPath(this.name);
  this.template('_editorconfig', this.appPath +   '/.editorconfig');
  this.template('_jshintrc', this.appPath +  +'/.jshintrc');
  this.template('_package.json', this.appPath +'/package.json');
  this.template('_bower.json', this.appPath +'/bower.json');
  this.template('_.bowerrc', this.appPath +'/.bowerrc');
  this.template('_build.config.js', this.appPath +'/build.config.js');
  this.copy('_Gruntfile.js', this.appPath + '/Gruntfile.js');
  this.template('_module.prefix', this.appPath +'/module.prefix');
  this.template('_module.suffix', this.appPath +'/module.suffix');
  this.template('_README.md', this.appPath +'/README.md');
  this.copy('_tools.md', this.appPath + '/tools.md'); 
  this.template('_setup.sh', this.appPath +'/setup.sh');  
};





}()); 