'use strict';
var util = require('util');
var path = require('path');
var ScriptBase = require('../script-base.js');
var yeoman = require('yeoman-generator');


module.exports = Generator;

function Generator() {
  ScriptBase.apply(this, arguments);
}

util.inherits(Generator, ScriptBase);

Generator.prototype.createAppFile = function createAppFile() {
  console.log("******* about to template app "   );
  this.appTemplate('_app', 'app');
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