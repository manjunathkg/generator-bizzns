(function () {


'use strict';
var util = require('util');
var path = require('path');
var ScriptBase = require('../script-base.js');
var yeoman = require('yeoman-generator');
var angularutils = require('../util.js');

 

module.exports = Generator;

function Generator(args, options) { 
  ScriptBase.apply(this, arguments);
}
util.inherits(Generator, ScriptBase);

 

Generator.prototype.createControllerFiles = function createControllerFiles() { 
var lastWord = angularutils.getLastWordFromSlashPath(this.name); 
  this.appTemplate('_controller', lastWord+ "-controllers"); 
};


}());
 