/***Generated Resource **/

var resource = require('resource');
var AchieveAction = resource.define('AchieveAction'); 

AchieveAction.schema.description = "The act of accomplishing something via     previous efforts. It is an instantaneous action rather than an ongoing     process."; 
AchieveAction.persist('fs'); 


AchieveAction.property('additionalType', {
  "name" : "additionalType", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


AchieveAction.property('description', {
  "name" : "description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


AchieveAction.property('image', {
  "name" : "image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


AchieveAction.property('name', {
  "name" : "name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


AchieveAction.property('sameAs', {
  "name" : "sameAs", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


AchieveAction.property('url', {
  "name" : "url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.AchieveAction = AchieveAction;


AchieveAction.property('agent', {
  "name" : "agent", 
  "description" : "The direct performer or driver of the action (animate or inanimate). e.g. *John* wrote a book.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Organization" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Person" }}}} 
}); 


AchieveAction.property('endTime', {
  "name" : "endTime", 
  "description" : "When the Action was performed: end time. This is for actions that span a period of time. e.g. John wrote a book from January to *December*.", 
"type":  "string" 
}); 


AchieveAction.property('instrument', {
  "name" : "instrument", 
  "description" : "The object that helped the agent perform the action. e.g. John wrote a book with *a pen*.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Thing" } }  
}); 


AchieveAction.property('location', {
  "name" : "location", 
  "description" : "The location of the event, organization or action.", 
"type":"object","properties" : {"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Place" }}},"PostalAddress" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "PostalAddress" }}}} 
}); 


AchieveAction.property('object', {
  "name" : "object", 
  "description" : "The object upon the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn&#x27;t). e.g. John read *a book*.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Thing" } }  
}); 


AchieveAction.property('participant', {
  "name" : "participant", 
  "description" : "Other co-agents that participated in the action indirectly. e.g. John wrote a book with *Steve*.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Organization" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Person" }}}} 
}); 


AchieveAction.property('result', {
  "name" : "result", 
  "description" : "The result produced in the action. e.g. John wrote *a book*.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Thing" } }  
}); 


AchieveAction.property('startTime', {
  "name" : "startTime", 
  "description" : "When the Action was performed: start time. This is for actions that span a period of time. e.g. John wrote a book from *January* to December.", 
"type":  "string" 
}); 


exports.AchieveAction = AchieveAction;
