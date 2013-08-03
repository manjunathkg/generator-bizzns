(function () {

'use strict';
var util = require('util');
var path = require('path');
var ScriptBase = require('../script-base.js');
var yeoman = require('yeoman-generator');
var _    = require('lodash'); 
_.str = require('underscore.string'); 
_.mixin(_.str.exports());


module.exports = Generator;

function Generator() {
  ScriptBase.apply(this, arguments);
}

util.inherits(Generator, ScriptBase);

Generator.prototype.createAppFile = function createAppFile() {
  console.log("******* about to template main app "   );
  this.appTemplate('_app', 'app');
  console.log("******* About to template home page");
  this.htmlTemplate('_page.tpl.html', _.classify(this.name)+ 'Home.tpl.html');
   //app spec file

  console.log("******* about to template app.spec "   );
  this.appTemplate('_app.spec','app.spec');


  console.log("******* about to template app.readme "   );
  this.copy('src/app/README.md','src/app/README.md');
};


Generator.prototype.createSrcFolders = function createSrcFolders() {
  this.directory('src/assets', 'src/assets');  
  this.directory('src/common', 'src/common');  
  this.directory('src/less', 'src/less'); 
  this.directory('vendor', 'vendor'); 
  this.directory('karma', 'karma');
};



this.hookFor('bizzns:server', {
     args: args
});



}()); 