/***Generated Resource **/

var resource = require('resource');
var APIReference = resource.define('APIReference'); 

APIReference.schema.description = "Reference documentation for application programming interfaces (APIs)."; 
APIReference.persist('fs'); 


APIReference.property('additionalType', {
  "name" : "additionalType", 
  "description" : "An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the &#x27;typeof&#x27; attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.", 
"type":  "string" 
}); 


APIReference.property('description', {
  "name" : "description", 
  "description" : "A short description of the item.", 
"type":  "string" 
}); 


APIReference.property('image', {
  "name" : "image", 
  "description" : "URL of an image of the item.", 
"type":  "string" 
}); 


APIReference.property('name', {
  "name" : "name", 
  "description" : "The name of the item.", 
"type":  "string" 
}); 


APIReference.property('sameAs', {
  "name" : "sameAs", 
  "description" : "URL of a reference Web page that unambiguously indicates the item&#x27;s identity. E.g. the URL of the item&#x27;s Wikipedia page, Freebase page, or official website.", 
"type":  "string" 
}); 


APIReference.property('url', {
  "name" : "url", 
  "description" : "URL of the item.", 
"type":  "string" 
}); 


exports.APIReference = APIReference;


APIReference.property('about', {
  "name" : "about", 
  "description" : "The subject matter of the content.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Thing" } }  
}); 


APIReference.property('accountablePerson', {
  "name" : "accountablePerson", 
  "description" : "Specifies the Person that is legally accountable for the CreativeWork.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Person" } }  
}); 


APIReference.property('aggregateRating', {
  "name" : "aggregateRating", 
  "description" : "The overall rating, based on a collection of reviews or ratings, of the item.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "AggregateRating" } }  
}); 


APIReference.property('alternativeHeadline', {
  "name" : "alternativeHeadline", 
  "description" : "A secondary title of the CreativeWork.", 
"type":  "string" 
}); 


APIReference.property('associatedMedia', {
  "name" : "associatedMedia", 
  "description" : "The media objects that encode this creative work. This property is a synonym for encodings.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "MediaObject" } }  
}); 


APIReference.property('audience', {
  "name" : "audience", 
  "description" : "The intended audience of the item, i.e. the group for whom the item was created.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Audience" } }  
}); 


APIReference.property('audio', {
  "name" : "audio", 
  "description" : "An embedded audio object.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "AudioObject" } }  
}); 


APIReference.property('author', {
  "name" : "author", 
  "description" : "The author of this content. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Organization" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Person" }}}} 
}); 


APIReference.property('award', {
  "name" : "award", 
  "description" : "An award won by this person or for this creative work.", 
"type":  "string" 
}); 


APIReference.property('awards', {
  "name" : "awards", 
  "description" : "Awards won by this person or for this creative work. (legacy spelling; see singular form, award)", 
"type":  "string" 
}); 


APIReference.property('citation', {
  "name" : "citation", 
  "description" : "A citation or reference to another creative work, such as another publication, web page, scholarly article, etc. NOTE: Candidate for promotion to ScholarlyArticle.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "CreativeWork" } }  
}); 


APIReference.property('comment', {
  "name" : "comment", 
  "description" : "Comments, typically from users, on this CreativeWork.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "UserComments" } }  
}); 


APIReference.property('contentLocation', {
  "name" : "contentLocation", 
  "description" : "The location of the content.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Place" } }  
}); 


APIReference.property('contentRating', {
  "name" : "contentRating", 
  "description" : "Official rating of a piece of content—for example,&#x27;MPAA PG-13&#x27;.", 
"type":  "string" 
}); 


APIReference.property('contributor', {
  "name" : "contributor", 
  "description" : "A secondary contributor to the CreativeWork.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Organization" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Person" }}}} 
}); 


APIReference.property('copyrightHolder', {
  "name" : "copyrightHolder", 
  "description" : "The party holding the legal copyright to the CreativeWork.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Organization" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Person" }}}} 
}); 


APIReference.property('copyrightYear', {
  "name" : "copyrightYear", 
  "description" : "The year during which the claimed copyright for the CreativeWork was first asserted.", 
"type":  "number" 
}); 


APIReference.property('creator', {
  "name" : "creator", 
  "description" : "The creator&#x2F;author of this CreativeWork or UserComments. This is the same as the Author property for CreativeWork.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Organization" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Person" }}}} 
}); 


APIReference.property('dateCreated', {
  "name" : "dateCreated", 
  "description" : "The date on which the CreativeWork was created.", 
"type":  "string" 
}); 


APIReference.property('dateModified', {
  "name" : "dateModified", 
  "description" : "The date on which the CreativeWork was most recently modified.", 
"type":  "string" 
}); 


APIReference.property('datePublished', {
  "name" : "datePublished", 
  "description" : "Date of first broadcast&#x2F;publication.", 
"type":  "string" 
}); 


APIReference.property('discussionUrl', {
  "name" : "discussionUrl", 
  "description" : "A link to the page containing the comments of the CreativeWork.", 
"type":  "string" 
}); 


APIReference.property('editor', {
  "name" : "editor", 
  "description" : "Specifies the Person who edited the CreativeWork.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Person" } }  
}); 


APIReference.property('educationalAlignment', {
  "name" : "educationalAlignment", 
  "description" : "An alignment to an established educational framework.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "AlignmentObject" } }  
}); 


APIReference.property('educationalUse', {
  "name" : "educationalUse", 
  "description" : "The purpose of a work in the context of education; for example, &#x27;assignment&#x27;, &#x27;group work&#x27;.", 
"type":  "string" 
}); 


APIReference.property('encoding', {
  "name" : "encoding", 
  "description" : "A media object that encode this CreativeWork.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "MediaObject" } }  
}); 


APIReference.property('encodings', {
  "name" : "encodings", 
  "description" : "The media objects that encode this creative work (legacy spelling; see singular form, encoding).", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "MediaObject" } }  
}); 


APIReference.property('genre', {
  "name" : "genre", 
  "description" : "Genre of the creative work", 
"type":  "string" 
}); 


APIReference.property('headline', {
  "name" : "headline", 
  "description" : "Headline of the article", 
"type":  "string" 
}); 


APIReference.property('inLanguage', {
  "name" : "inLanguage", 
  "description" : "The language of the content. please use one of the language codes from the IETF BCP 47 standard.", 
"type":  "string" 
}); 


APIReference.property('interactionCount', {
  "name" : "interactionCount", 
  "description" : "A count of a specific user interactions with this item—for example, 20 UserLikes, 5 UserComments, or 300 UserDownloads. The user interaction type should be one of the sub types of UserInteraction.", 
"type":  "string" 
}); 


APIReference.property('interactivityType', {
  "name" : "interactivityType", 
  "description" : "The predominant mode of learning supported by the learning resource. Acceptable values are &#x27;active&#x27;, &#x27;expositive&#x27;, or &#x27;mixed&#x27;.", 
"type":  "string" 
}); 


APIReference.property('isBasedOnUrl', {
  "name" : "isBasedOnUrl", 
  "description" : "A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http:&#x2F;&#x2F;example.com&#x2F;great-multiplication-intro.html", 
"type":  "string" 
}); 


APIReference.property('isFamilyFriendly', {
  "name" : "isFamilyFriendly", 
  "description" : "Indicates whether this content is family friendly.", 
"type":  "boolean" 
}); 


APIReference.property('keywords', {
  "name" : "keywords", 
  "description" : "The keywords&#x2F;tags used to describe this content.", 
"type":  "string" 
}); 


APIReference.property('learningResourceType', {
  "name" : "learningResourceType", 
  "description" : "The predominant type or kind characterizing the learning resource. For example, &#x27;presentation&#x27;, &#x27;handout&#x27;.", 
"type":  "string" 
}); 


APIReference.property('mentions', {
  "name" : "mentions", 
  "description" : "Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Thing" } }  
}); 


APIReference.property('offers', {
  "name" : "offers", 
  "description" : "An offer to sell this item—for example, an offer to sell a product, the DVD of a movie, or tickets to an event.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Offer" } }  
}); 


APIReference.property('provider', {
  "name" : "provider", 
  "description" : "Specifies the Person or Organization that distributed the CreativeWork.", 
"type":"object","properties" : {"Organization" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Organization" }}},"Person" :    {"type" :"object",   "properties" : {                    "id" : { "type" : "array" } ,                     "ResourceType" : {"type" :"string" ,                                         "default" : "Person" }}}} 
}); 


APIReference.property('publisher', {
  "name" : "publisher", 
  "description" : "The publisher of the creative work.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Organization" } }  
}); 


APIReference.property('publishingPrinciples', {
  "name" : "publishingPrinciples", 
  "description" : "Link to page describing the editorial principles of the organization primarily responsible for the creation of the CreativeWork.", 
"type":  "string" 
}); 


APIReference.property('review', {
  "name" : "review", 
  "description" : "A review of the item.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Review" } }  
}); 


APIReference.property('reviews', {
  "name" : "reviews", 
  "description" : "Review of the item (legacy spelling; see singular form, review).", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Review" } }  
}); 


APIReference.property('sourceOrganization', {
  "name" : "sourceOrganization", 
  "description" : "The Organization on whose behalf the creator was working.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "Organization" } }  
}); 


APIReference.property('text', {
  "name" : "text", 
  "description" : "The textual content of this CreativeWork.", 
"type":  "string" 
}); 


APIReference.property('thumbnailUrl', {
  "name" : "thumbnailUrl", 
  "description" : "A thumbnail image relevant to the Thing.", 
"type":  "string" 
}); 


APIReference.property('timeRequired', {
  "name" : "timeRequired", 
  "description" : "Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. &#x27;P30M&#x27;, &#x27;P1H25M&#x27;.", 
 "type":"object", "properties" : { "id":{"type" : "array"},"ResourceType" :{"type" : "string", "default" :"Duration" } }  
}); 


APIReference.property('typicalAgeRange', {
  "name" : "typicalAgeRange", 
  "description" : "The typical range of ages the content&#x27;s intendedEndUser, for example &#x27;7-9&#x27;, &#x27;11-&#x27;.", 
"type":  "string" 
}); 


APIReference.property('version', {
  "name" : "version", 
  "description" : "The version of the CreativeWork embodied by a specified resource.", 
"type":  "number" 
}); 


APIReference.property('video', {
  "name" : "video", 
  "description" : "An embedded video object.", 
 "type":"object",  "properties" : {           "id":{"type" : "array"},           "ResourceType" :{"type" : "string", "default" : "VideoObject" } }  
}); 


exports.APIReference = APIReference;


APIReference.property('articleBody', {
  "name" : "articleBody", 
  "description" : "The actual body of the article.", 
"type":  "string" 
}); 


APIReference.property('articleSection', {
  "name" : "articleSection", 
  "description" : "Articles may belong to one or more &#x27;sections&#x27; in a magazine or newspaper, such as Sports, Lifestyle, etc.", 
"type":  "string" 
}); 


APIReference.property('wordCount', {
  "name" : "wordCount", 
  "description" : "The number of words in the text of the Article.", 
"type":  "number" 
}); 


exports.APIReference = APIReference;


APIReference.property('dependencies', {
  "name" : "dependencies", 
  "description" : "Prerequisites needed to fulfill steps in article.", 
"type":  "string" 
}); 


APIReference.property('proficiencyLevel', {
  "name" : "proficiencyLevel", 
  "description" : "Proficiency needed for this content; expected values: &#x27;Beginner&#x27;, &#x27;Expert&#x27;.", 
"type":  "string" 
}); 


exports.APIReference = APIReference;


APIReference.property('assembly', {
  "name" : "assembly", 
  "description" : "Library file name e.g., mscorlib.dll, system.web.dll", 
"type":  "string" 
}); 


APIReference.property('assemblyVersion', {
  "name" : "assemblyVersion", 
  "description" : "Associated product&#x2F;technology version. e.g., .NET Framework 4.5", 
"type":  "string" 
}); 


APIReference.property('programmingModel', {
  "name" : "programmingModel", 
  "description" : "Indicates whether API is managed or unmanaged.", 
"type":  "string" 
}); 


APIReference.property('targetPlatform', {
  "name" : "targetPlatform", 
  "description" : "Type of app development: phone, Metro style, desktop, XBox, etc.", 
"type":  "string" 
}); 


exports.APIReference = APIReference;
