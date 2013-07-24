'use strict';
var path = require('path');
var fs = require('fs');


module.exports = {
  rewrite: rewrite,
  rewriteFile: rewriteFile,
  convertDotPathToSlashPath: convertDotPathToSlashPath,
  getLastWordFromSlashPath: getLastWordFromSlashPath,
  strencode:strencode,
  strdecode:strdecode
};

function rewriteFile (args) {
  args.path = args.path || process.cwd();
  var fullPath = path.join(args.path, args.file);

  args.haystack = fs.readFileSync(fullPath, 'utf8');
  var body = rewrite(args);

  fs.writeFileSync(fullPath, body);
}

function escapeRegExp (str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}

function rewrite (args) {

  // check if splicable is already in the body text
  var re = new RegExp(args.splicable.map(function (line) {
    return '\s*' + escapeRegExp(line);
  }).join('\n'));
  if (re.test(args.haystack)) {
    return args.haystack;
  }

  var lines = args.haystack.split('\n');

  var otherwiseLineIndex = 0;
  lines.forEach(function (line, i) {
    if (line.indexOf(args.needle) !== -1) {
      otherwiseLineIndex = i;
    }
  });

  var spaces = 0;
  while (lines[otherwiseLineIndex].charAt(spaces) === ' ') {
    spaces += 1;
  }

  var spaceStr = '';
  while ((spaces -= 1) >= 0) {
    spaceStr += ' ';
  }

  lines.splice(otherwiseLineIndex, 0, args.splicable.map(function (line) {
    return spaceStr + line;
  }).join('\n'));

  return lines.join('\n');
}

function convertDotPathToSlashPath(argString){
   //clean out junk chars
  var folderString = argString.replace(/[\|&;\$%@"<>\(\)\+,]/g, "");

  //define ends with function
  if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
  }
  
  //if name ends with "/" remove it
  if(folderString.endsWith("/")){
     replacement = '';
     folderString = folderString.replace(/_([^_]*)$/,replacement+'$1'); 
  }


  //Define contains function
  String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

  //convert all . with /
 

 console.log("folderString before replacement = " + folderString);
  if(folderString.contains(".")){ 
    console.log("In the loop");
    folderString.replace(/\./g, '/');
    folderString = folderString.split('.').join('/'); 
  }
  
  console.log("folderString after replacement = " + folderString);

   return folderString;
}


function getLastWordFromSlashPath(slashPath){
  var lastwordString = slashPath;
 //Define contains function
  String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

  if(lastwordString.contains("/")){
    var splitNameArray = lastwordString.split("/");
  }

  //get last word
  var lastWord=lastwordString;
  if(splitNameArray != null && splitNameArray.length > 0){
    lastWord = splitNameArray.slice(-1).pop();
  }
  
  if(lastWord == null){
       lastWord = lastwordString;
  } 

  console.log("lastword being sent is " + lastWord);
  return lastWord;
}



function strencode( data ) {
return unescape( encodeURIComponent( JSON.stringify( data ) ) );
}
 
function strdecode( data ) {
return JSON.parse( decodeURIComponent( escape ( data ) ) );
}