 
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var angularUtils = require('./util.js');
var _    = require('lodash'); 
_.str = require('underscore.string'); 
_.mixin(_.str.exports());

module.exports = Generator;

function Generator() {
  yeoman.generators.NamedBase.apply(this, arguments);   
  this.appname = this.env.options.appname;
  console.log("app name in scripte base is " + this.appname);

  
  if (typeof this.env.options.appPath === 'undefined') {
    try {
      this.env.options.appPath = require(path.join(process.cwd(), 'bower.json')).appPath;
      console.log("*****  Inside script-base *** this.env.options.appPath = " + this.env.options.appPath);
    } catch (e) {}
    this.env.options.appPath = this.env.options.appPath || 'src/app';
  }else{
      console.log("Inside else - this.env.options.appPath = " + this.env.options.appPath );
  }

  this.appPath = this.env.options.appPath;
 // console.log("appPath from require === " + require(path.join(process.cwd(), 'bower.json')).appPath );
  
  if (typeof this.env.options.testPath === 'undefined') {
    try {
      this.env.options.testPath = require(path.join(process.cwd(), 'bower.json')).testPath;
    } catch (e) {}
    this.env.options.testPath = this.env.options.testPath || 'src/app';
  }

  if (typeof this.env.options.coffee === 'undefined') {
    this.option('coffee');

    // attempt to detect if user is using CS or not
    // if cml arg provided, use that; else look for the existence of cs
    if (!this.options.coffee &&
       this.expandFiles(path.join(__dirname,
      'src/app/**/*.coffee')).length > 0)
  {
      this.options.coffee = true;
    }

    this.env.options.coffee = this.options.coffee;
  }

  if (typeof this.env.options.minsafe === 'undefined') {
    this.option('minsafe');
    this.env.options.minsafe = this.options.minsafe;
  }

  var sourceRoot = '/templates/javascript';
  this.scriptSuffix = '.js';

  if (this.env.options.coffee) {
    sourceRoot = '/templates/coffeescript';
    this.scriptSuffix = '.coffee';
  }

  if (this.env.options.minsafe) {
    sourceRoot += '-min';
  }

  this.sourceRoot(path.join(__dirname, sourceRoot));
}

util.inherits(Generator, yeoman.generators.NamedBase);

Generator.prototype.appTemplate = function (src, dest) {
  yeoman.generators.Base.prototype.template.apply(this, [
    src + this.scriptSuffix,
    path.join(this.env.options.appPath, dest) + this.scriptSuffix
  ]);
};

Generator.prototype.testTemplate = function (src, dest) {
  yeoman.generators.Base.prototype.template.apply(this, [
    src + this.scriptSuffix,
    path.join(this.env.options.testPath, dest) + this.scriptSuffix
  ]);
};

Generator.prototype.htmlTemplate = function (src, dest) {
  yeoman.generators.Base.prototype.template.apply(this, [
    src,
    path.join(this.env.options.appPath, dest)
  ]);
};

Generator.prototype.addScriptToIndex = function (script) {
  try {
    var appPath = this.env.options.appPath;
    var fullPath = path.join(appPath, 'index.html');
    angularUtils.rewriteFile({
      file: fullPath,
      needle: '<!-- endbuild -->',
      splicable: [
        '<script src="scripts/' + script + '.js"></script>'
      ]
    });
  } catch (e) {
    console.log('\nUnable to find '.yellow + fullPath + '. Reference to '.yellow + script + '.js ' + 'not added.\n'.yellow);
  }
};

Generator.prototype.addSubModuleNavToIndex = function (url, linkName) {
  try {
    var appPath = this.env.options.appPath;
    var fullPath = path.join('src', 'index.html');
    console.log("Script-base -addSubModuleNavToIndex - :: url =  " + url + " and linkName == " + linkName);
    console.log("fullPath == " + fullPath);

    angularUtils.rewriteFile({
      file: fullPath,
      needle: '</ul><!--Insert SubModules above this -->',
      splicable: [
                '<li> <a href="#/' 
                    + url  
                    + '"><i class="icon-info-sign"></i>' 
                    + linkName 
                    + ' </a>  </li> '
      ]
    });
  } catch (e) {
    console.log('\nUnable to find '.yellow + fullPath + '. Reference to '.yellow + url + " OR  " + linkName + '.js ' + 'not added.\n'.yellow);
  }



};





Generator.prototype.addSubModuleToAppJS = function (appname,submodulename) {
  try {
    var appPath = this.env.options.appPath;
    var fullPath = path.join('src/app', 'app.js');
    angularUtils.rewriteFile({
      file: fullPath,
      needle: '//insert here',
      splicable: [
        '\'' +  _.classify(appname)+ 'App.' + _.classify(submodulename) + '\'' + ',' 
      ]
    });
  } catch (e) {
    console.log('\nUnable to find '.yellow + fullPath + '. Reference to '.yellow + appname + ' or  ' + submodulename  + 'not added.\n'.yellow);
  }
};



