(function () {

'use strict';
var path = require('path');
var util = require('util');
var ScriptBase = require('../script-base.js');
var angularutils = require('../util.js');


module.exports = Generator;

function Generator() {
  ScriptBase.apply(this, arguments);
}

util.inherits(Generator, ScriptBase);

Generator.prototype.createConstantFiles = function createConstantFiles() {
  var lastWord = angularutils.getLastWordFromSlashPath(this.name);
  this.appTemplate('service/constant', lastWord+ "-constants");
  //this.testTemplate('spec/service', 'services/' + this.name);
  //this.addScriptToIndex('services/' + this.name);
};

}()); 

 