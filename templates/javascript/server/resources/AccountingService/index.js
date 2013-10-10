/***Generated Resource **/

var resource = require('resource');
var AccountingService = resource.define('AccountingService'); 

AccountingService.schema.description = "Accountancy business."; 
AccountingService.persist('fs'); 


AccountingService.property('additionalType', {
  "name" : "additionalType", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


AccountingService.property('description', {
  "name" : "description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


AccountingService.property('image', {
  "name" : "image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


AccountingService.property('name', {
  "name" : "name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


AccountingService.property('sameAs', {
  "name" : "sameAs", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


AccountingService.property('url', {
  "name" : "url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.AccountingService = AccountingService;


AccountingService.property('address', {
  "name" : "address", 
  "description" : "Physical address of the item.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "PostalAddress" } }  
}); 


AccountingService.property('aggregateRating', {
  "name" : "aggregateRating", 
  "description" : "The overall rating, based on a collection of reviews or ratings, of the item.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "AggregateRating" } }  
}); 


AccountingService.property('containedIn', {
  "name" : "containedIn", 
  "description" : "The basic containment relation between places.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Place" } }  
}); 


AccountingService.property('event', {
  "name" : "event", 
  "description" : "Upcoming or past event associated with this place or organization.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Event" } }  
}); 


AccountingService.property('events', {
  "name" : "events", 
  "description" : "Upcoming or past events associated with this place or organization (legacy spelling; see singular form, event).", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Event" } }  
}); 


AccountingService.property('faxNumber', {
  "name" : "faxNumber", 
  "description" : "The fax number.", 
"type":  "string" 
}); 


AccountingService.property('geo', {
  "name" : "geo", 
  "description" : "The geo coordinates of the place.", 
"type":"object","properties" : {"GeoCoordinates" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "GeoCoordinates" }}},"GeoShape" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "GeoShape" }}}} 
}); 


AccountingService.property('globalLocationNumber', {
  "name" : "globalLocationNumber", 
  "description" : "The Global Location Number (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.", 
"type":  "string" 
}); 


AccountingService.property('interactionCount', {
  "name" : "interactionCount", 
  "description" : "A count of a specific user interactions with this item—for example, 20 UserLikes, 5 UserComments, or 300 UserDownloads. The user interaction type should be one of the sub types of UserInteraction.", 
"type":  "string" 
}); 


AccountingService.property('isicV4', {
  "name" : "isicV4", 
  "description" : "The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.", 
"type":  "string" 
}); 


AccountingService.property('logo', {
  "name" : "logo", 
  "description" : "URL of an image for the logo of the item.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "ImageObject" } }  
}); 


AccountingService.property('map', {
  "name" : "map", 
  "description" : "A URL to a map of the place.", 
"type":  "string" 
}); 


AccountingService.property('maps', {
  "name" : "maps", 
  "description" : "A URL to a map of the place (legacy spelling; see singular form, map).", 
"type":  "string" 
}); 


AccountingService.property('openingHoursSpecification', {
  "name" : "openingHoursSpecification", 
  "description" : "The opening hours of a certain place.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "OpeningHoursSpecification" } }  
}); 


AccountingService.property('photo', {
  "name" : "photo", 
  "description" : "A photograph of this place.", 
"type":"object","properties" : {"ImageObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "ImageObject" }}},"Photograph" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Photograph" }}}} 
}); 


AccountingService.property('photos', {
  "name" : "photos", 
  "description" : "Photographs of this place (legacy spelling; see singular form, photo).", 
"type":"object","properties" : {"ImageObject" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "ImageObject" }}},"Photograph" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Photograph" }}}} 
}); 


AccountingService.property('review', {
  "name" : "review", 
  "description" : "A review of the item.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Review" } }  
}); 


AccountingService.property('reviews', {
  "name" : "reviews", 
  "description" : "Review of the item (legacy spelling; see singular form, review).", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Review" } }  
}); 


AccountingService.property('telephone', {
  "name" : "telephone", 
  "description" : "The telephone number.", 
"type":  "string" 
}); 


exports.AccountingService = AccountingService;


AccountingService.property('brand', {
  "name" : "brand", 
  "description" : "The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.", 
"type":"object","properties" : {"Brand" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Brand" }}},"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Organization" }}}} 
}); 


AccountingService.property('contactPoint', {
  "name" : "contactPoint", 
  "description" : "A contact point for a person or organization.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "ContactPoint" } }  
}); 


AccountingService.property('contactPoints', {
  "name" : "contactPoints", 
  "description" : "A contact point for a person or organization (legacy spelling; see singular form, contactPoint).", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "ContactPoint" } }  
}); 


AccountingService.property('duns', {
  "name" : "duns", 
  "description" : "The Dun &amp; Bradstreet DUNS number for identifying an organization or business person.", 
"type":  "string" 
}); 


AccountingService.property('email', {
  "name" : "email", 
  "description" : "Email address.", 
"type":  "string" 
}); 


AccountingService.property('employee', {
  "name" : "employee", 
  "description" : "Someone working for this organization.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Person" } }  
}); 


AccountingService.property('employees', {
  "name" : "employees", 
  "description" : "People working for this organization. (legacy spelling; see singular form, employee)", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Person" } }  
}); 


AccountingService.property('founder', {
  "name" : "founder", 
  "description" : "A person who founded this organization.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Person" } }  
}); 


AccountingService.property('founders', {
  "name" : "founders", 
  "description" : "A person who founded this organization (legacy spelling; see singular form, founder).", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Person" } }  
}); 


AccountingService.property('foundingDate', {
  "name" : "foundingDate", 
  "description" : "The date that this organization was founded.", 
"type":  "string" 
}); 


AccountingService.property('hasPOS', {
  "name" : "hasPOS", 
  "description" : "Points-of-Sales operated by the organization or person.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Place" } }  
}); 


AccountingService.property('legalName', {
  "name" : "legalName", 
  "description" : "The official name of the organization, e.g. the registered company name.", 
"type":  "string" 
}); 


AccountingService.property('location', {
  "name" : "location", 
  "description" : "The location of the event, organization or action.", 
"type":"object","properties" : {"Place" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Place" }}},"PostalAddress" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "PostalAddress" }}}} 
}); 


AccountingService.property('makesOffer', {
  "name" : "makesOffer", 
  "description" : "A pointer to products or services offered by the organization or person.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Offer" } }  
}); 


AccountingService.property('member', {
  "name" : "member", 
  "description" : "A member of this organization.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Organization" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Person" }}}} 
}); 


AccountingService.property('members', {
  "name" : "members", 
  "description" : "A member of this organization (legacy spelling; see singular form, member).", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Organization" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Person" }}}} 
}); 


AccountingService.property('naics', {
  "name" : "naics", 
  "description" : "The North American Industry Classification System (NAICS) code for a particular organization or business person.", 
"type":  "string" 
}); 


AccountingService.property('owns', {
  "name" : "owns", 
  "description" : "Products owned by the organization or person.", 
"type":"object","properties" : {"OwnershipInfo" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "OwnershipInfo" }}},"Product" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Product" }}}} 
}); 


AccountingService.property('seeks', {
  "name" : "seeks", 
  "description" : "A pointer to products or services sought by the organization or person (demand).", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Demand" } }  
}); 


AccountingService.property('taxID', {
  "name" : "taxID", 
  "description" : "The Tax &#x2F; Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF&#x2F;NIF in Spain.", 
"type":  "string" 
}); 


AccountingService.property('vatID', {
  "name" : "vatID", 
  "description" : "The Value-added Tax ID of the organisation or person.", 
"type":  "string" 
}); 


exports.AccountingService = AccountingService;


AccountingService.property('branchOf', {
  "name" : "branchOf", 
  "description" : "The larger organization that this local business is a branch of, if any.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Organization" } }  
}); 


AccountingService.property('currenciesAccepted', {
  "name" : "currenciesAccepted", 
  "description" : "The currency accepted (in ISO 4217 currency format).", 
"type":  "string" 
}); 


AccountingService.property('openingHours', {
  "name" : "openingHours", 
  "description" : "The opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas &#x27;,&#x27; separating each day. Day or time ranges are specified using a hyphen &#x27;-&#x27;.- Days are specified using the following two-letter combinations: Mo, Tu, We, Th, Fr, Sa, Su.- Times are specified using 24:00 time. For example, 3pm is specified as 15:00. - Here is an example: Tuesdays and Thursdays 4-8pm. - If a business is open 7 days a week, then it can be specified as Monday through Sunday, all day.", 
 "type":"object", "properties" : { "id":{"type" : "array"},"ResourceType" :{"type" : "string", "default" :"Duration" } }  
}); 


AccountingService.property('paymentAccepted', {
  "name" : "paymentAccepted", 
  "description" : "Cash, credit card, etc.", 
"type":  "string" 
}); 


AccountingService.property('priceRange', {
  "name" : "priceRange", 
  "description" : "The price range of the business, for example $$$.", 
"type":  "string" 
}); 


exports.AccountingService = AccountingService;
