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

Generator.prototype.createFilterFiles = function createFilterFiles() {
var lastWord = angularutils.getLastWordFromSlashPath(this.name); 
  this.appTemplate('_filter', lastWord+ "-filters");
  //this.testTemplate('spec/filter', 'filters/' + this.name);
  //this.addScriptToIndex('filters/' + this.name);
};

 