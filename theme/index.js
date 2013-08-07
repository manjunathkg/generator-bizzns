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
  if (typeof this.env.options.appname === 'undefined') {
    try {
      this.env.options.appname = require(path.join(process.cwd(), 'bower.json')).appname;
    } catch (e) {}     
  }
  this.appname = this.env.options.appname;
}
util.inherits(Generator, ScriptBase);

//Make themes
Generator.prototype.copyThemeFiles = function copyThemeFiles() { 
  this.sourceRoot(path.join(__dirname, '../templates/javascript'));
  //convert any dots in path to /
  var nameWithSlashPath = angularutils.convertDotPathToSlashPath(this.name);
  this.directory('themes/' + this.name + '/directives', 'src/common/' +this.name );   
  this.addThemeToAppJS(this.appname, this.name);
  this.directory('themes/'+this.name+'/assets', 'src/assets/'+this.name); 

};






// Generator.prototype.createServerFiles = function createServerFiles() {  
//   console.log("***************  CREATING Server FILES ******* for " + this.name);
    
//    //convert any dots in path to /
//    var moduleFileName = angularutils.convertDotPathToSlashPath(this.name);

//    //Got cleaned up version of submodule path here.
//      var appname = this.env.options.appname;
// 	 var lastWord = angularutils.getLastWordFromSlashPath(this.name);
// 	 console.log("** Last word returened was *** " + lastWord);
// 	 this.lastWord = lastWord;
// 	 this.env.options.lastWord = lastWord;
	
// 	 this.appTemplate('submodule/_submodule', lastWord ); //if lastword is pta, create pta.js under the path
// 	 this.htmlTemplate('_page.tpl.html', _.classify(this.name)+ 'Home.tpl.html'); //home page template for the module
// 	 console.log("appname = " + appname);
//    console.log("moduleFileName = " + moduleFileName);
//    this.addSubModuleToAppJS(appname, moduleFileName);					   //update app.js
// 	 this.addSubModuleNavToIndex(moduleFileName, _.capitalize(lastWord));  //update index.html
// 	 this.htmlTemplate('submodule/_index.html', '/index.html' );      
//    this.appTemplate('submodule/_app', 'app');

// };







}()); 