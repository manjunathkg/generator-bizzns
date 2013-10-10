var express = require('express')
  , poweredBy = require('connect-powered-by')
  , util = require('util');


var config = require('../../config.js');
var passport = require('passport');
var security = require('../../lib/security');
var xsrf = require('../../lib/xsrf');
var protectJSON = require('../../lib/protectJSON');
var resource = require('resource');
var admin = resource.use('admin');


module.exports = function() {
  // this.namespace = require('express-namespace').namespace;
  // Warn of version mismatch between global "lcm" binary and local installation
  // of Locomotive.
  if (this.version !== require('locomotive').version) {
    console.warn(util.format('version mismatch between local (%s) and global (%s) Locomotive module', require('locomotive').version, this.version));
  }

  // Configure application settings.  Consult the Express API Reference for a
  // list of the available [settings](http://expressjs.com/api.html#app-settings).
  this.set('views', __dirname + '/../../app/views');
  this.set('view engine', 'ejs');

  // Register EJS as a template engine.
  this.engine('ejs', require('ejs').__express);

  // Override default template extension.  By default, Locomotive finds
  // templates using the `name.format.engine` convention, for example
  // `index.html.ejs`  For some template engines, such as Jade, that find
  // layouts using a `layout.engine` notation, this results in mixed conventions
  // that can cuase confusion.  If this occurs, you can map an explicit
  // extension to a format.
  /* this.format('html', { extension: '.jade' }) */

  // Register formats for content negotiation.  Using content negotiation,
  // different formats can be served as needed by different clients.  For
  // example, a browser is sent an HTML response, while an API client is sent a
  // JSON or XML response.
  /* this.format('xml', { engine: 'xmlb' }); */

  // Use middleware.  Standard [Connect](http://www.senchalabs.org/connect/)
  // middleware is built-in, with additional [third-party](https://github.com/senchalabs/connect/wiki)
  // middleware available as separate modules.
  this.use(poweredBy('Locomotive'));
  this.use(express.logger());
  this.use(express.favicon());
  this.use('/', express.static(__dirname + '/../../../client/dist/'));
  this.use(protectJSON);
  this.use(express.bodyParser());
  this.use(express.cookieParser(config.server.cookieSecret));  // Hash cookies with this secret
  this.use(express.cookieSession());
  this.use(passport.initialize());
  this.use(passport.session());
  this.use(express.methodOverride());


this.use(function(req, res, next) {
  if ( req.user ) {
    console.log('Current User:', req.user.firstName, req.user.lastName);
  } else {
    console.log('Unauthenticated');
  }
  next();
});

resource.use('account', { datasource: "fs"});
resource.use('creature', { datasource: "fs"});
//Start api server
resource.use('api');
resource.admin.start({port:config.server.listenPort,
                      root:'../../client/dist' ,
                      app:this.express
                     },function (err, server) {
        var address = server.address();
        resource.logger.info('admin server started on http://' + address.address + ":" + address.port + "/admin")
        resource.logger.help('username and password are admin');
        var open = require('open');
        open('http://localhost:' + config.server.listenPort + '/admin');
});


var argo = require('argo');

argo()
  .use(function(handle) {
    handle('response', function(env, next) {
      env.response.setHeader('Access-Control-Allow-Origin', '*');
      next(env);
    });
  })
  .route('^/greeting$', function(handle) {
    handle('request', function(env, next) {
      env.response.statusCode = 200;
      env.response.headers = { 'Content-Type': 'text/plain' };
      env.response.body = 'Hello World!';

      next(env);
    });
  })  
  .map('/', function(server) {
    server 
      .target('http://localhost:3000/');
  })   
  .map('/static', function(server) {
    server 
      .target('http://localhost:3000/static');
  })   
  .map('/admin', function(server) {
    server 
      .target('http://localhost:3000/admin');
  })  
  .map('/api', function(server) {
    server 
      .target('http://localhost:3000/api');
  })
  .target('http://localhost:3000/')
  .listen(config.argoServer.listenPort);

 
  



this.use(this.router);
this.use(xsrf); 



// this.namespace('/databases/:db/collections/:collection*', function() {
//   this.all('/', function(req, res, next) {
//     if ( req.method !== 'GET' ) {
//       // We require the user is authenticated to modify any collections
//       security.authenticationRequired(req, res, next);
//     } else {
//       next();
//     }
//   });
//   this.all('/', function(req, res, next) {
//     if ( req.method !== 'GET' && (req.params.collection === 'users' || req.params.collection === 'projects') ) {
//       // We require the current user to be admin to modify the users or projects collection
//       return security.adminRequired(req, res, next);
//     }
//     next();
//   });
//   // Proxy database calls to the MongoDB
//   this.all('/', mongoProxy(config.mongo.dbUrl, config.mongo.apiKey));
// });

// this.post('/login', security.login);
// this.post('/logout', security.logout);

// // Retrieve the current user
// this.get('/current-user', security.sendCurrentUser);


 



// // Retrieve the current user only if they are authenticated
// this.get('/authenticated-user', function(req, res) {
//   security.authenticationRequired(req, res, function() { security.sendCurrentUser(req, res); });
// });

// // Retrieve the current user only if they are admin
// thsi.get('/admin-user', function(req, res) {
//   security.adminRequired(req, res, function() { security.sendCurrentUser(req, res); });
// });

// // This route deals enables HTML5Mode by forwarding missing files to the index.html
// // this.all('/*', function(req, res) {
// //   // Just send the index.html for other files to support HTML5Mode
// //   res.sendfile('index.html', { root: config.server.distFolder });
// // });

// // A standard error handler - it picks up any left over errors and returns a nicely formatted server 500 error
// this.use(express.errorHandler({ dumpExceptions: true, showStack: true }));






}


  