var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var security = require('../../lib/security');

var SecurityController = new Controller();

SecurityController.login = function() {
  this.title = 'Locomotive'
  this.render();
}

module.exports = SecurityController;