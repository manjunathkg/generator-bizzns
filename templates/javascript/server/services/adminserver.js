#!/usr/bin/env node

var resource = require('resource');
var config = require('../config');

//
// Use the web admin resource
//
resource.use('admin');

//
// Use the creature and account resources for demonstration purposes
//
resource.use('account', { datasource: "fs"});
resource.use('creature', { datasource: "fs"});

resource.admin.start({port:config.admin.port},function (err, server) {
  var address = server.address();
  resource.logger.info('admin server started on http://' + address.address + ":" + address.port + "/admin")
  resource.logger.help('username and password are admin');
});