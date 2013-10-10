/***Generated Resource **/

var resource = require('resource');
var AddAction = resource.define('AddAction'); 

AddAction.schema.description = "The act of editing by adding an object to a collection."; 
AddAction.persist('fs'); 


AddAction.property('additionalType', {
  "name" : "additionalType", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


AddAction.property('description', {
  "name" : "description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


AddAction.property('image', {
  "name" : "image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


AddAction.property('name', {
  "name" : "name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


AddAction.property('sameAs', {
  "name" : "sameAs", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


AddAction.property('url', {
  "name" : "url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.AddAction = AddAction;


AddAction.property('agent', {
  "name" : "agent", 
  "description" : "The direct performer or driver of the action (animate or inanimate). e.g. *John* wrote a book.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Organization" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Person" }}}} 
}); 


AddAction.property('endTime', {
  "name" : "endTime", 
  "description" : "When the Action was performed: end time. This is for actions that span a period of time. e.g. John wrote a book from January to *December*.", 
"type":  "string" 
}); 


AddAction.property('instrument', {
  "name" : "instrument", 
  "description" : "The object that helped the agent perform the action. e.g. John wrote a book with *a pen*.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Thing" } }  
}); 


AddAction.property('location', {
  "name" : "location", 
  "description" : "The location of the event, organization or action.", 
"type":"object","properties" : {"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Place" }}},"PostalAddress" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "PostalAddress" }}}} 
}); 


AddAction.property('object', {
  "name" : "object", 
  "description" : "The object upon the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn&#x27;t). e.g. John read *a book*.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Thing" } }  
}); 


AddAction.property('participant', {
  "name" : "participant", 
  "description" : "Other co-agents that participated in the action indirectly. e.g. John wrote a book with *Steve*.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Organization" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Person" }}}} 
}); 


AddAction.property('result', {
  "name" : "result", 
  "description" : "The result produced in the action. e.g. John wrote *a book*.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Thing" } }  
}); 


AddAction.property('startTime', {
  "name" : "startTime", 
  "description" : "When the Action was performed: start time. This is for actions that span a period of time. e.g. John wrote a book from *January* to December.", 
"type":  "string" 
}); 


exports.AddAction = AddAction;


AddAction.property('collection', {
  "name" : "collection", 
  "description" : "A sub property of object. The collection target of the action.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Thing" } }  
}); 


exports.AddAction = AddAction;
