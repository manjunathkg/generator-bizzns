'use strict';
var util = require('util');
var path = require('path');
var ScriptBase = require('../script-base.js');
var yeoman = require('yeoman-generator');
 

module.exports = Generator;

function Generator(args, options) { 
  ScriptBase.apply(this, arguments);
}
util.inherits(Generator, ScriptBase);

 

Generator.prototype.createControllerFiles = function createControllerFiles() {
  console.log("*** Inside controller/index.js - this.name is "  + this.name);
  this.appTemplate('_controller', this.name);
  this.appTemplate('_app.spec', this.name );
  //this.addScriptToIndex('controllers/' + this.name);
};
