(function () {


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

Generator.prototype.createDirectiveFiles = function createDirectiveFiles() {

  var lastWord = angularutils.getLastWordFromSlashPath(this.name); 
  this.appTemplate('_directive', lastWord + "-directives");
  //this.testTemplate('spec/directive', 'directives/' + this.name);
 // this.addScriptToIndex('directives/' + this.name);
};


}()); 
 
  

 