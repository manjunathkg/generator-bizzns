(function () {
  
'use strict';
var path = require('path');
var util = require('util');
var spawn = require('child_process').spawn;
var yeoman = require('yeoman-generator'); 
var angularUtils = require('../util.js');
var fs = require('fs');
process.logging = process.logging || require('../lib/util/log');

var Generator = module.exports = function Generator(args, options) {
  yeoman.generators.Base.apply(this, arguments);
  this.argument('appname', { type: String, required: false });
  this.appname = this.appname || path.basename(process.cwd());
  this.env.options.appname = this.appname;
  console.log("app name is  "  +  this.appname);
  // this.indexFile = this.engine(this.read('../../templates/common/index.html'),
  //     this);
 

  args = ['main']; 

  if (typeof this.env.options.appPath === 'undefined') {
    try {
      this.env.options.appPath = require(path.join(process.cwd(), 'bower.json')).appPath;
    } catch (e) {}
    this.env.options.appPath = this.env.options.appPath || 'src/app';
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

  this.hookFor('bizzns:common', {
    args: args
  });

  this.hookFor('bizzns:main', {
    args: args
  });

 


  // this.hookFor('bizzns:controller', {
  //    args: args
  //  });

  this.hookFor('karma', {
    as: 'app',
    options: {
      options: {
        coffee: this.options.coffee,
        'skip-install': this.options['skip-install']
       }
    }
  });

  this.on('end', function () {
    this.installDependencies({ skipInstall: this.options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(Generator, yeoman.generators.Base); 
 

}()); 
 




