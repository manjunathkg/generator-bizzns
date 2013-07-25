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

   //Got cleaned up version of submodule path here.
     var appname = this.env.options.appname;
	 var lastWord = angularutils.getLastWordFromSlashPath(this.name);
	 console.log("** Last word returened was " + lastWord);
	 this.appTemplate('_submodule', lastWord ); 
	 this.htmlTemplate('_page.tpl.html', _.classify(this.name)+ 'Home.tpl.html'); 
	 this.addSubModuleToAppJS(appname, this.name);
	 this.addSubModuleNavToIndex(this.name, _.capitalize(lastWord));
};


}()); 