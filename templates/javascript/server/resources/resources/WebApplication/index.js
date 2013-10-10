/***Generated Resource **/

var resource = require('resource');
var WebApplication = resource.define('WebApplication'); 

WebApplication.schema.description = "Web applications."; 
WebApplication.persist('fs'); 


WebApplication.property('additionalType', {
  "name" : "additionalType", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


WebApplication.property('description', {
  "name" : "description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


WebApplication.property('image', {
  "name" : "image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


WebApplication.property('name', {
  "name" : "name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


WebApplication.property('sameAs', {
  "name" : "sameAs", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


WebApplication.property('url', {
  "name" : "url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.WebApplication = WebApplication;


WebApplication.property('about', {
  "name" : "about", 
  "description" : "The subject matter of the content.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Thing" } }  
}); 


WebApplication.property('accountablePerson', {
  "name" : "accountablePerson", 
  "description" : "Specifies the Person that is legally accountable for the CreativeWork.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Person" } }  
}); 


WebApplication.property('aggregateRating', {
  "name" : "aggregateRating", 
  "description" : "The overall rating, based on a collection of reviews or ratings, of the item.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "AggregateRating" } }  
}); 


WebApplication.property('alternativeHeadline', {
  "name" : "alternativeHeadline", 
  "description" : "A secondary title of the CreativeWork.", 
"type":  "string" 
}); 


WebApplication.property('associatedMedia', {
  "name" : "associatedMedia", 
  "description" : "The media objects that encode this creative work. This property is a synonym for encodings.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "MediaObject" } }  
}); 


WebApplication.property('audience', {
  "name" : "audience", 
  "description" : "The intended audience of the item, i.e. the group for whom the item was created.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Audience" } }  
}); 


WebApplication.property('audio', {
  "name" : "audio", 
  "description" : "An embedded audio object.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "AudioObject" } }  
}); 


WebApplication.property('author', {
  "name" : "author", 
  "description" : "The author of this content. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Organization" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Person" }}}} 
}); 


WebApplication.property('award', {
  "name" : "award", 
  "description" : "An award won by this person or for this creative work.", 
"type":  "string" 
}); 


WebApplication.property('awards', {
  "name" : "awards", 
  "description" : "Awards won by this person or for this creative work. (legacy spelling; see singular form, award)", 
"type":  "string" 
}); 


WebApplication.property('citation', {
  "name" : "citation", 
  "description" : "A citation or reference to another creative work, such as another publication, web page, scholarly article, etc. NOTE: Candidate for promotion to ScholarlyArticle.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "CreativeWork" } }  
}); 


WebApplication.property('comment', {
  "name" : "comment", 
  "description" : "Comments, typically from users, on this CreativeWork.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "UserComments" } }  
}); 


WebApplication.property('contentLocation', {
  "name" : "contentLocation", 
  "description" : "The location of the content.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Place" } }  
}); 


WebApplication.property('contentRating', {
  "name" : "contentRating", 
  "description" : "Official rating of a piece of content—for example,&#x27;MPAA PG-13&#x27;.", 
"type":  "string" 
}); 


WebApplication.property('contributor', {
  "name" : "contributor", 
  "description" : "A secondary contributor to the CreativeWork.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Organization" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Person" }}}} 
}); 


WebApplication.property('copyrightHolder', {
  "name" : "copyrightHolder", 
  "description" : "The party holding the legal copyright to the CreativeWork.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Organization" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Person" }}}} 
}); 


WebApplication.property('copyrightYear', {
  "name" : "copyrightYear", 
  "description" : "The year during which the claimed copyright for the CreativeWork was first asserted.", 
"type":  "number" 
}); 


WebApplication.property('creator', {
  "name" : "creator", 
  "description" : "The creator&#x2F;author of this CreativeWork or UserComments. This is the same as the Author property for CreativeWork.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Organization" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Person" }}}} 
}); 


WebApplication.property('dateCreated', {
  "name" : "dateCreated", 
  "description" : "The date on which the CreativeWork was created.", 
"type":  "string" 
}); 


WebApplication.property('dateModified', {
  "name" : "dateModified", 
  "description" : "The date on which the CreativeWork was most recently modified.", 
"type":  "string" 
}); 


WebApplication.property('datePublished', {
  "name" : "datePublished", 
  "description" : "Date of first broadcast&#x2F;publication.", 
"type":  "string" 
}); 


WebApplication.property('discussionUrl', {
  "name" : "discussionUrl", 
  "description" : "A link to the page containing the comments of the CreativeWork.", 
"type":  "string" 
}); 


WebApplication.property('editor', {
  "name" : "editor", 
  "description" : "Specifies the Person who edited the CreativeWork.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Person" } }  
}); 


WebApplication.property('educationalAlignment', {
  "name" : "educationalAlignment", 
  "description" : "An alignment to an established educational framework.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "AlignmentObject" } }  
}); 


WebApplication.property('educationalUse', {
  "name" : "educationalUse", 
  "description" : "The purpose of a work in the context of education; for example, &#x27;assignment&#x27;, &#x27;group work&#x27;.", 
"type":  "string" 
}); 


WebApplication.property('encoding', {
  "name" : "encoding", 
  "description" : "A media object that encode this CreativeWork.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "MediaObject" } }  
}); 


WebApplication.property('encodings', {
  "name" : "encodings", 
  "description" : "The media objects that encode this creative work (legacy spelling; see singular form, encoding).", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "MediaObject" } }  
}); 


WebApplication.property('genre', {
  "name" : "genre", 
  "description" : "Genre of the creative work", 
"type":  "string" 
}); 


WebApplication.property('headline', {
  "name" : "headline", 
  "description" : "Headline of the article", 
"type":  "string" 
}); 


WebApplication.property('inLanguage', {
  "name" : "inLanguage", 
  "description" : "The language of the content. please use one of the language codes from the IETF BCP 47 standard.", 
"type":  "string" 
}); 


WebApplication.property('interactionCount', {
  "name" : "interactionCount", 
  "description" : "A count of a specific user interactions with this item—for example, 20 UserLikes, 5 UserComments, or 300 UserDownloads. The user interaction type should be one of the sub types of UserInteraction.", 
"type":  "string" 
}); 


WebApplication.property('interactivityType', {
  "name" : "interactivityType", 
  "description" : "The predominant mode of learning supported by the learning resource. Acceptable values are &#x27;active&#x27;, &#x27;expositive&#x27;, or &#x27;mixed&#x27;.", 
"type":  "string" 
}); 


WebApplication.property('isBasedOnUrl', {
  "name" : "isBasedOnUrl", 
  "description" : "A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http:&#x2F;&#x2F;example.com&#x2F;great-multiplication-intro.html", 
"type":  "string" 
}); 


WebApplication.property('isFamilyFriendly', {
  "name" : "isFamilyFriendly", 
  "description" : "Indicates whether this content is family friendly.", 
"type":  "boolean" 
}); 


WebApplication.property('keywords', {
  "name" : "keywords", 
  "description" : "The keywords&#x2F;tags used to describe this content.", 
"type":  "string" 
}); 


WebApplication.property('learningResourceType', {
  "name" : "learningResourceType", 
  "description" : "The predominant type or kind characterizing the learning resource. For example, &#x27;presentation&#x27;, &#x27;handout&#x27;.", 
"type":  "string" 
}); 


WebApplication.property('mentions', {
  "name" : "mentions", 
  "description" : "Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Thing" } }  
}); 


WebApplication.property('offers', {
  "name" : "offers", 
  "description" : "An offer to sell this item—for example, an offer to sell a product, the DVD of a movie, or tickets to an event.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Offer" } }  
}); 


WebApplication.property('provider', {
  "name" : "provider", 
  "description" : "Specifies the Person or Organization that distributed the CreativeWork.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Organization" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Person" }}}} 
}); 


WebApplication.property('publisher', {
  "name" : "publisher", 
  "description" : "The publisher of the creative work.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Organization" } }  
}); 


WebApplication.property('publishingPrinciples', {
  "name" : "publishingPrinciples", 
  "description" : "Link to page describing the editorial principles of the organization primarily responsible for the creation of the CreativeWork.", 
"type":  "string" 
}); 


WebApplication.property('review', {
  "name" : "review", 
  "description" : "A review of the item.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Review" } }  
}); 


WebApplication.property('reviews', {
  "name" : "reviews", 
  "description" : "Review of the item (legacy spelling; see singular form, review).", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Review" } }  
}); 


WebApplication.property('sourceOrganization', {
  "name" : "sourceOrganization", 
  "description" : "The Organization on whose behalf the creator was working.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Organization" } }  
}); 


WebApplication.property('text', {
  "name" : "text", 
  "description" : "The textual content of this CreativeWork.", 
"type":  "string" 
}); 


WebApplication.property('thumbnailUrl', {
  "name" : "thumbnailUrl", 
  "description" : "A thumbnail image relevant to the Thing.", 
"type":  "string" 
}); 


WebApplication.property('timeRequired', {
  "name" : "timeRequired", 
  "description" : "Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. &#x27;P30M&#x27;, &#x27;P1H25M&#x27;.", 
 "type":"object", "properties" : { "id":{"type" : "array"},"ResourceType" :{"type" : "string", "default" :"Duration" } }  
}); 


WebApplication.property('typicalAgeRange', {
  "name" : "typicalAgeRange", 
  "description" : "The typical range of ages the content&#x27;s intendedEndUser, for example &#x27;7-9&#x27;, &#x27;11-&#x27;.", 
"type":  "string" 
}); 


WebApplication.property('version', {
  "name" : "version", 
  "description" : "The version of the CreativeWork embodied by a specified resource.", 
"type":  "number" 
}); 


WebApplication.property('video', {
  "name" : "video", 
  "description" : "An embedded video object.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "VideoObject" } }  
}); 


exports.WebApplication = WebApplication;


WebApplication.property('applicationCategory', {
  "name" : "applicationCategory", 
  "description" : "Type of software application, e.g. &quot;Game, Multimedia&quot;.", 
 "type":"object", "properties" : { "id":{"type" : "array"},"ResourceType" :{"type" : "string", "default" :"TextorURL" } }  
}); 


WebApplication.property('applicationSubCategory', {
  "name" : "applicationSubCategory", 
  "description" : "Subcategory of the application, e.g. &quot;Arcade Game&quot;.", 
 "type":"object", "properties" : { "id":{"type" : "array"},"ResourceType" :{"type" : "string", "default" :"TextorURL" } }  
}); 


WebApplication.property('applicationSuite', {
  "name" : "applicationSuite", 
  "description" : "The name of the application suite to which the application belongs (e.g. Excel belongs to Office)", 
"type":  "string" 
}); 


WebApplication.property('countriesNotSupported', {
  "name" : "countriesNotSupported", 
  "description" : "Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.", 
"type":  "string" 
}); 


WebApplication.property('countriesSupported', {
  "name" : "countriesSupported", 
  "description" : "Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.", 
"type":  "string" 
}); 


WebApplication.property('device', {
  "name" : "device", 
  "description" : "Device required to run the application. Used in cases where a specific make&#x2F;model is required to run the application.", 
"type":  "string" 
}); 


WebApplication.property('downloadUrl', {
  "name" : "downloadUrl", 
  "description" : "If the file can be downloaded, URL to download the binary.", 
"type":  "string" 
}); 


WebApplication.property('featureList', {
  "name" : "featureList", 
  "description" : "Features or modules provided by this application (and possibly required by other applications).", 
 "type":"object", "properties" : { "id":{"type" : "array"},"ResourceType" :{"type" : "string", "default" :"TextorURL" } }  
}); 


WebApplication.property('fileFormat', {
  "name" : "fileFormat", 
  "description" : "MIME format of the binary (e.g. application&#x2F;zip).", 
"type":  "string" 
}); 


WebApplication.property('fileSize', {
  "name" : "fileSize", 
  "description" : "Size of the application &#x2F; package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed.", 
"type":  "number" 
}); 


WebApplication.property('installUrl', {
  "name" : "installUrl", 
  "description" : "URL at which the app may be installed, if different from the URL of the item.", 
"type":  "string" 
}); 


WebApplication.property('memoryRequirements', {
  "name" : "memoryRequirements", 
  "description" : "Minimum memory requirements.", 
 "type":"object", "properties" : { "id":{"type" : "array"},"ResourceType" :{"type" : "string", "default" :"TextorURL" } }  
}); 


WebApplication.property('operatingSystem', {
  "name" : "operatingSystem", 
  "description" : "Operating systems supported (Windows 7, OSX 10.6, Android 1.6).", 
"type":  "string" 
}); 


WebApplication.property('permissions', {
  "name" : "permissions", 
  "description" : "Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi).", 
"type":  "string" 
}); 


WebApplication.property('processorRequirements', {
  "name" : "processorRequirements", 
  "description" : "Processor architecture required to run the application (e.g. IA64).", 
"type":  "string" 
}); 


WebApplication.property('releaseNotes', {
  "name" : "releaseNotes", 
  "description" : "Description of what changed in this version.", 
 "type":"object", "properties" : { "id":{"type" : "array"},"ResourceType" :{"type" : "string", "default" :"TextorURL" } }  
}); 


WebApplication.property('requirements', {
  "name" : "requirements", 
  "description" : "Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime).", 
 "type":"object", "properties" : { "id":{"type" : "array"},"ResourceType" :{"type" : "string", "default" :"TextorURL" } }  
}); 


WebApplication.property('screenshot', {
  "name" : "screenshot", 
  "description" : "A link to a screenshot image of the app.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "ImageObject" } }  
}); 


WebApplication.property('softwareVersion', {
  "name" : "softwareVersion", 
  "description" : "Version of the software instance.", 
"type":  "string" 
}); 


WebApplication.property('storageRequirements', {
  "name" : "storageRequirements", 
  "description" : "Storage requirements (free space required).", 
 "type":"object", "properties" : { "id":{"type" : "array"},"ResourceType" :{"type" : "string", "default" :"TextorURL" } }  
}); 


exports.WebApplication = WebApplication;


WebApplication.property('browserRequirements', {
  "name" : "browserRequirements", 
  "description" : "Specifies browser requirements in human-readable text. For example,&quot;requires HTML5 support&quot;.", 
"type":  "string" 
}); 


exports.WebApplication = WebApplication;
