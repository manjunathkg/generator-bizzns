(function () {

'use strict';
var path = require('path');
var util = require('util');
var ScriptBase = require('../script-base.js');
var angularUtils = require('../util.js');


module.exports = Generator;

function Generator() {
  ScriptBase.apply(this, arguments);
}

util.inherits(Generator, ScriptBase);

Generator.prototype.createFactoryFiles = function createFactoryFiles() {
  var lastWord = angularutils.getLastWordFromSlashPath(this.name);
  this.appTemplate('service/constant', lastWord+ "-factory"); 
};


}());