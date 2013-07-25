'use strict';
var path = require('path');
var util = require('util');
var spawn = require('child_process').spawn;
var yeoman = require('yeoman-generator'); 
var angularutils = require('../util.js');
process.logging = process.logging || require('../lib/util/log');

var Generator = module.exports = function Generator(args, options) {
  yeoman.generators.Base.apply(this, arguments);

  //Determine Main application name
  if (typeof this.env.options.appname === 'undefined') {
    try {
      this.env.options.appname = require(path.join(process.cwd(), 'bower.json')).appname;
    } catch (e) {}     
  }
  this.appname = this.env.options.appname;

  //Determine Sum Module Name  
  this.argument('subModuleName', { type: String, required: false });
  this.subModuleName = this.subModuleName || path.basename(process.cwd());
  this.subModuleName =this.env.options.subModuleName = angularutils.convertDotPathToSlashPath(this.subModuleName);
  console.log("subModuleName is  "  +  this.subModuleName);
  this.subModuleName = this.env.options.subModuleName;
  args = [this.env.options.subModuleName];
  

  //Determine full App Path - src/app + submodule path
  if (typeof this.env.options.appPath === 'undefined') {
    try {
      this.env.options.appPath = require(path.join(process.cwd(), 'bower.json')).appPath +"/"+ this.subModuleName;
    } catch (e) {}
    this.env.options.appPath = this.env.options.appPath || 'src/app' + "/" + this.subModuleName;
  }

  this.appPath = this.env.options.appPath  
  console.log("appPath is  "  +  this.appPath);

  //Handle coffee files if needed.. 
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
 

  this.hookFor('bizzns:bizmodule', {
     args: args
   });

  this.hookFor('bizzns:controller', {
     args: args
   });

  this.hookFor('bizzns:service', {
     args: args
   });

  this.hookFor('bizzns:directive', {
     args: args
   });

  this.hookFor('bizzns:filter', {
     args: args
  });

 
};

util.inherits(Generator, yeoman.generators.Base); 
 

 




