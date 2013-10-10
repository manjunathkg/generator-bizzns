var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var PostsController = new Controller();

PostsController.index = function() {
  this.title = 'Locomotive'
  this.render();
}

module.exports = PostsController;
