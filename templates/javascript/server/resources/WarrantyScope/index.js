/***Generated Resource **/

var resource = require('resource');
var WarrantyScope = resource.define('WarrantyScope'); 

WarrantyScope.schema.description = "A range of of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.<br /><br />Commonly used values:<br /><br />http:&#x2F;&#x2F;purl.org&#x2F;goodrelations&#x2F;v1#Labor-BringIn<br />http:&#x2F;&#x2F;purl.org&#x2F;goodrelations&#x2F;v1#PartsAndLabor-BringIn<br />http:&#x2F;&#x2F;purl.org&#x2F;goodrelations&#x2F;v1#PartsAndLabor-PickUp<br />	"; 
WarrantyScope.persist('fs'); 


WarrantyScope.property('additionalType', {
  "name" : "additionalType", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


WarrantyScope.property('description', {
  "name" : "description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


WarrantyScope.property('image', {
  "name" : "image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


WarrantyScope.property('name', {
  "name" : "name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


WarrantyScope.property('sameAs', {
  "name" : "sameAs", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


WarrantyScope.property('url', {
  "name" : "url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.WarrantyScope = WarrantyScope;
