(function () {

'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');


module.exports = Generator;

function Generator() {
  yeoman.generators.Base.apply(this, arguments);
}

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.setupEnv = function setupEnv() {
  // Copies the contents of the generator `templates`
  // directory into your users new application path
  console.log("__dirname ********  == " + __dirname);
  this.sourceRoot(path.join(__dirname, '../templates/common'));
  //this.directory('root', '.', true);
  //this.template('_gitignore', '.gitignore');
};


Generator.prototype.projectfiles = function projectfiles() {
  this.template('_editorconfig', '.editorconfig');
  this.template('_jshintrc', '.jshintrc');
  this.template('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.template('_.bowerrc', '.bowerrc');
  this.template('_build.config.js', 'build.config.js');
  this.copy('_Gruntfile.js', 'Gruntfile.js');
  this.template('_module.prefix', 'module.prefix');
  this.template('_module.suffix', 'module.suffix');
  this.template('_README.md', 'README.md');
  this.copy('_tools.md', 'tools.md');
  
  this.template('_index.html', 'src/index.html');  
  this.template('_setup.sh', 'setup.sh');

  
};


}()); 