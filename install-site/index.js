(function () {

'use strict';
var path = require('path');
var util = require('util');
var ScriptBase = require('../script-base.js');


module.exports = Generator;

function Generator() {
  ScriptBase.apply(this, arguments);

  // if the controller name is suffixed with ctrl, remove the suffix
  // if the controller name is just "ctrl," don't append/remove "ctrl"
  if (this.name && this.name.toLowerCase() !== 'ctrl' && this.name.substr(-4).toLowerCase() === 'ctrl') {
    this.name = this.name.slice(0, -4);
  }
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createInstallSiteFiles = function createInstallSiteFiles() {
   //install site flow comes here
};

}()); 