'use strict';
var path = require('path');
var util = require('util');
var spawn = require('child_process').spawn;
var yeoman = require('yeoman-generator');
//var Environment = require('../lib/env');
process.logging = process.logging || require('../lib/util/log');

var BizznsGenerator  = module.exports = function BizznsGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);


  this.argument('appname', { type: String, required: false });
  this.appname = this.appname || path.basename(process.cwd());

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};
util.inherits(BizznsGenerator, yeoman.generators.Base);
 

 





BizznsGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  // var prompts = [{     
  //   name: 'appName',
  //   message: 'Please Enter the name of the application to generate?',
  //   default: 'pta'
  // }];

    var prompts = [];

  this.prompt(prompts, function (props) {
    this.appName = props.appName;

    cb();
  }.bind(this));
};


BizznsGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('_.bowerrc', '.bowerrc');
  this.copy('_build.config.js', 'build.config.js');
  this.copy('_Gruntfile.js', 'Gruntfile.js');
  this.copy('_module.prefix', 'module.prefix');
  this.copy('_module.suffix', 'module.suffix');
  this.copy('_README.md', 'README.md');
  this.copy('_tools.md', 'tools.md');
};


BizznsGenerator.prototype.app = function app() {
  //console.log(this.appName);
  //this.mkdir( this.appName );
  this.directory('src' , 'src');  
  this.directory('vendor' , 'vendor');  
  this.directory('karma' , 'karma'); 
};

 


 



