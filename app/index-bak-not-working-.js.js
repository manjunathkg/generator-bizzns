  
var util = require('util'),
    path = require('path'),
   // ScriptBase = require('../script-base.js');

var yeoman = require('yeoman-generator'); 
var spawn = require('child_process').spawn;
var Environment = require('../lib/env');


module.exports = {
    Generator: generator,
    generators: generators
}


var generators =   function createEnv(args, opts) {
  return new Environment(args, opts);
};


 

var generator =function Generator(args, options, config) {
   ScriptBase.apply(this, arguments);
 // this.argument('appname', { type: String, required: false });
 //  this.appname = this.appname || path.basename(process.cwd());

  // this.on('end', function () {
  //   this.installDependencies({ skipInstall: options['skip-install'] });
  // });

  // this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(generator, ScriptBase);

// Generator.prototype.createAppFile = function createAppFile() {
//   this.template('app', 'app/scripts/app');
// };



// Generator.prototype.projectfiles = function projectfiles() {
//   this.copy('editorconfig', '.editorconfig');
//   this.copy('jshintrc', '.jshintrc');
//   this.copy('_package.json', 'package.json');
//   this.template('_bower.json', 'bower.json');
//   this.copy('_.bowerrc', '.bowerrc');
//   this.copy('_build.config.js', 'build.config.js');
//   this.copy('_Gruntfile.js', 'Gruntfile.js');
//   this.copy('_module.prefix', 'module.prefix');
//   this.copy('_module.suffix', 'module.suffix');
//   this.copy('_README.md', 'README.md');
//   this.copy('_tools.md', 'tools.md');
//   this.template('_index.html', 'src/index.html');
//   this.htmlTemplate('_index.html', 'src/index.html');
// };

// hoist up top level class the generator extend
generators.Base = require('../lib/base');
generators.NamedBase = require('../lib/named-base');

// expose test helpers for generators.
generators.test = require('../lib/test/helpers');

// backward compat, make them available as generators.generators.Base &
// NamedBase (as most of generators use yeoman.generators.Stuff)
generators.generators = {};
generators.generators.Base = generators.Base;
generators.generators.NamedBase = generators.NamedBase;
 


