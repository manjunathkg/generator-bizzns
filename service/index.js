'use strict';
var path = require('path');
var util = require('util');
var ScriptBase = require('../script-base.js');
var angularutils = require('../util.js');
var yeoman = require('yeoman-generator');


module.exports = Generator;

function Generator() {
  ScriptBase.apply(this, arguments);
}

util.inherits(Generator, ScriptBase);

Generator.prototype.createServiceFiles = function createServiceFiles() {

	var lastWord = angularutils.getLastWordFromSlashPath(this.name); 
  	this.appTemplate('service/_service', lastWord + "-services");
  //this.testTemplate('spec/service', 'services/' + this.name); 
};

 
  

 