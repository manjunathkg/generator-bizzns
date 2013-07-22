'use strict';
var path = require('path');
var util = require('util');
var spawn = require('child_process').spawn;
var yeoman = require('yeoman-generator'); 
process.logging = process.logging || require('../lib/util/log');

var Generator = module.exports = function Generator(args, options) {
  yeoman.generators.Base.apply(this, arguments);
  this.argument('subModuleName', { type: String, required: false });
  this.subModuleName = this.subModuleName || path.basename(process.cwd());
  this.env.options.subModuleName = this.subModuleName;
  console.log("subModuleName is  "  +  this.subModuleName);
  // this.indexFile = this.engine(this.read('../../templates/common/index.html'),
  //     this);

  args = [this.env.options.subModuleName];

  

  if (typeof this.env.options.appPath === 'undefined') {
    try {
      this.env.options.appPath = require(path.join(process.cwd(), 'bower.json')).appPath +"/"+ this.subModuleName;
    } catch (e) {}
    this.env.options.appPath = this.env.options.appPath || 'src/app' + "/" + this.subModuleName;
  }

  this.appPath = this.env.options.appPath;  
  console.log("appPath is  "  +  this.appPath);
 if (typeof this.env.options.coffee === 'undefined') {
    this.option('coffee');

    // attempt to detect if user is using CS or not
    // if cml arg provided, use that; else look for the existence of cs
    if (!this.options.coffee &&
      this.expandFiles(path.join(this.appPath, '/scripts/**/*.coffee'), {}).length > 0) {
      this.options.coffee = true;
    }

    this.env.options.coffee = this.options.coffee;
  }

  if (typeof this.env.options.minsafe === 'undefined') {
    this.option('minsafe');
    this.env.options.minsafe = this.options.minsafe;
    args.push('--minsafe');
  }
 

  this.hookFor('bizzns:controller', {
     args: args
   });

 
};

util.inherits(Generator, yeoman.generators.Base);
util.inherits(Generator, yeoman.generators.Base);
 

 




