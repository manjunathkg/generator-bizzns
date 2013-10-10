/***Generated Resource **/

var resource = require('resource');
var Waterfall = resource.define('Waterfall'); 

Waterfall.schema.description = "A waterfall, like Niagara"; 
Waterfall.persist('fs'); 


Waterfall.property('additionalType', {
  "name" : "additionalType", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


Waterfall.property('description', {
  "name" : "description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


Waterfall.property('image', {
  "name" : "image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


Waterfall.property('name', {
  "name" : "name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


Waterfall.property('sameAs', {
  "name" : "sameAs", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


Waterfall.property('url', {
  "name" : "url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.Waterfall = Waterfall;


Waterfall.property('address', {
  "name" : "address", 
  "description" : "Physical address of the item.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "PostalAddress" } }  
}); 


Waterfall.property('aggregateRating', {
  "name" : "aggregateRating", 
  "description" : "The overall rating, based on a collection of reviews or ratings, of the item.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "AggregateRating" } }  
}); 


Waterfall.property('containedIn', {
  "name" : "containedIn", 
  "description" : "The basic containment relation between places.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Place" } }  
}); 


Waterfall.property('event', {
  "name" : "event", 
  "description" : "Upcoming or past event associated with this place or organization.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Event" } }  
}); 


Waterfall.property('events', {
  "name" : "events", 
  "description" : "Upcoming or past events associated with this place or organization (legacy spelling; see singular form, event).", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Event" } }  
}); 


Waterfall.property('faxNumber', {
  "name" : "faxNumber", 
  "description" : "The fax number.", 
"type":  "string" 
}); 


Waterfall.property('geo', {
  "name" : "geo", 
  "description" : "The geo coordinates of the place.", 
"type":"object","properties" : {"GeoCoordinates" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "GeoCoordinates" }}},"GeoShape" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "GeoShape" }}}} 
}); 


Waterfall.property('globalLocationNumber', {
  "name" : "globalLocationNumber", 
  "description" : "The Global Location Number (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.", 
"type":  "string" 
}); 


Waterfall.property('interactionCount', {
  "name" : "interactionCount", 
  "description" : "A count of a specific user interactions with this item—for example, 20 UserLikes, 5 UserComments, or 300 UserDownloads. The user interaction type should be one of the sub types of UserInteraction.", 
"type":  "string" 
}); 


Waterfall.property('isicV4', {
  "name" : "isicV4", 
  "description" : "The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.", 
"type":  "string" 
}); 


Waterfall.property('logo', {
  "name" : "logo", 
  "description" : "URL of an image for the logo of the item.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "ImageObject" } }  
}); 


Waterfall.property('map', {
  "name" : "map", 
  "description" : "A URL to a map of the place.", 
"type":  "string" 
}); 


Waterfall.property('maps', {
  "name" : "maps", 
  "description" : "A URL to a map of the place (legacy spelling; see singular form, map).", 
"type":  "string" 
}); 


Waterfall.property('openingHoursSpecification', {
  "name" : "openingHoursSpecification", 
  "description" : "The opening hours of a certain place.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "OpeningHoursSpecification" } }  
}); 


Waterfall.property('photo', {
  "name" : "photo", 
  "description" : "A photograph of this place.", 
"type":"object","properties" : {"ImageObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "ImageObject" }}},"Photograph" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Photograph" }}}} 
}); 


Waterfall.property('photos', {
  "name" : "photos", 
  "description" : "Photographs of this place (legacy spelling; see singular form, photo).", 
"type":"object","properties" : {"ImageObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "ImageObject" }}},"Photograph" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Photograph" }}}} 
}); 


Waterfall.property('review', {
  "name" : "review", 
  "description" : "A review of the item.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Review" } }  
}); 


Waterfall.property('reviews', {
  "name" : "reviews", 
  "description" : "Review of the item (legacy spelling; see singular form, review).", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Review" } }  
}); 


Waterfall.property('telephone', {
  "name" : "telephone", 
  "description" : "The telephone number.", 
"type":  "string" 
}); 


exports.Waterfall = Waterfall;
