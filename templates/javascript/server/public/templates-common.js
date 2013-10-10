angular.module('templates-common', ['admin/footer/footer.tpl.html', 'admin/mainnav/mainnav.tpl.html', 'admin/topHeader/topheader.tpl.html', 'projects/footer/footer.tpl.html', 'projects/mainnav/mainnav.tpl.html', 'projects/topHeader/topheader.tpl.html', 'services/security/login/form.tpl.html', 'services/security/login/toolbar.tpl.html', 'services/settings/settings.tpl.html']);

angular.module("admin/footer/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/footer/footer.tpl.html",
    "<div>\n" +
    "<div class=\"navbar navbar-inverse navbar-fixed-bottom  footer\">\n" +
    "		\n" +
    "	<div>\n" +
    "		\n" +
    "		<div class=\"row\">\n" +
    "			\n" +
    "			<div id=\"footer-copyright\" class=\"span6\">\n" +
    "				© 2012-13 Jumpstart UI.\n" +
    "			</div> <!-- /span6 -->\n" +
    "			\n" +
    "			<div id=\"footer-terms\" class=\"pull-right\">\n" +
    "				Theme by <a href=\"http://jumpstartui.com/\" target=\"_blank\">Jumpstart UI</a>\n" +
    "			</div> <!-- /.span6 -->\n" +
    "			\n" +
    "		</div> <!-- /row -->\n" +
    "		\n" +
    "	</div> <!-- /container -->\n" +
    "	\n" +
    "</div> <!-- /footer -->\n" +
    "</div>");
}]);

angular.module("admin/mainnav/mainnav.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/mainnav/mainnav.tpl.html",
    "<div>\n" +
    "\n" +
    "<div class=\"subnavbar\" ng-controller=\"adminMainnav_controller\" >\n" +
    "\n" +
    "	<div class=\"subnavbar-inner\">\n" +
    "	\n" +
    "		<div>\n" +
    "			\n" +
    "			<a class=\"btn-subnavbar collapsed\" data-toggle=\"collapse\" data-target=\".subnav-collapse\">\n" +
    "				<i class=\"icon-reorder\"></i>\n" +
    "			</a>\n" +
    "\n" +
    "			<div class=\"subnav-collapse collapse\">\n" +
    "				<ul class=\"mainnav\">\n" +
    "				\n" +
    "					<li class=\"active\">\n" +
    "						<a href=\"#/\">\n" +
    "							<i class=\"icon-home\"></i>\n" +
    "							<span>Home</span>\n" +
    "						</a>	    				\n" +
    "					</li>\n" +
    "					\n" +
    "					<li class=\"dropdown\">					\n" +
    "						<a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "							<i class=\"icon-th\"></i>\n" +
    "							<span>Components</span>\n" +
    "							<b class=\"caret\"></b>\n" +
    "						</a>	    \n" +
    "					\n" +
    "						<ul class=\"dropdown-menu\">\n" +
    "							<li><a href=\"./elements.html\">Elements</a></li>\n" +
    "							<li><a href=\"./validation.html\">Validation</a></li>\n" +
    "							<li><a href=\"./jqueryui.html\">jQuery UI</a></li>\n" +
    "							<li><a href=\"./charts.html\">Charts</a></li>\n" +
    "							<li><a href=\"./popups.html\">Popups/Notifications</a></li>\n" +
    "						</ul> 				\n" +
    "					</li>\n" +
    "					\n" +
    "					<li class=\"dropdown\">					\n" +
    "						<a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "							<i class=\"icon-copy\"></i>\n" +
    "							<span>Sample Pages</span>\n" +
    "							<b class=\"caret\"></b>\n" +
    "						</a>	    \n" +
    "					\n" +
    "						<ul class=\"dropdown-menu\">\n" +
    "							<li><a href=\"./pricing.html\">Pricing Plans</a></li>\n" +
    "							<li><a href=\"./faq.html\">FAQ's</a></li>\n" +
    "							<li><a href=\"./gallery.html\">Gallery</a></li>\n" +
    "							<li><a href=\"./reports.html\">Reports</a></li>\n" +
    "							<li><a href=\"./account.html\">User Account</a></li>\n" +
    "						</ul> 				\n" +
    "					</li>\n" +
    "					\n" +
    "					<li class=\"dropdown\">					\n" +
    "						<a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "							<i class=\"icon-external-link\"></i>\n" +
    "							<span>Extra Pages</span>\n" +
    "							<b class=\"caret\"></b>\n" +
    "						</a>	\n" +
    "					\n" +
    "						<ul class=\"dropdown-menu\">\n" +
    "							<li><a href=\"./login.html\">Login</a></li>\n" +
    "							<li><a href=\"./signup.html\">Signup</a></li>\n" +
    "							<li><a href=\"./error.html\">Error</a></li>\n" +
    "							<li class=\"dropdown-submenu\">\n" +
    "			                  <a tabindex=\"-1\" href=\"./index.html#\">Dropdown menu</a>\n" +
    "			                  <ul class=\"dropdown-menu\">\n" +
    "			                    <li><a tabindex=\"-1\" href=\"./index.html#\">Second level link</a></li>\n" +
    "			                    <li><a tabindex=\"-1\" href=\"./index.html#\">Second level link</a></li>\n" +
    "			                    <li><a tabindex=\"-1\" href=\"./index.html#\">Second level link</a></li>\n" +
    "			                  </ul>\n" +
    "			                </li>\n" +
    "						</ul>    				\n" +
    "					</li>\n" +
    "				\n" +
    "				</ul>\n" +
    "			</div> <!-- /.subnav-collapse -->\n" +
    "\n" +
    "		</div> <!-- /container -->\n" +
    "	\n" +
    "	</div> <!-- /subnavbar-inner -->\n" +
    "\n" +
    "</div> <!-- /subnavbar -->\n" +
    "\n" +
    "</div>");
}]);

angular.module("admin/topHeader/topheader.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/topHeader/topheader.tpl.html",
    "<span>\n" +
    "<div class=\"navbar navbar-inverse navbar-fixed-top\">\n" +
    "	\n" +
    "	<div class=\"navbar-inner\">\n" +
    "		\n" +
    "		<div>\n" +
    "			\n" +
    "			<a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n" +
    "				<i class=\"icon-cog\"></i>\n" +
    "			</a>\n" +
    "			\n" +
    "			<a class=\"brand\" href=\"index.htm\">\n" +
    "				Base Admin <sup>2.0</sup>\n" +
    "			</a>		\n" +
    "			\n" +
    "			<div class=\"nav-collapse collapse\">\n" +
    "				<ul class=\"nav pull-right\">\n" +
    "					<li class=\"dropdown\">\n" +
    "						\n" +
    "						<a href=\"./index.html#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "							<i class=\"icon-cog\"></i>\n" +
    "							Settings\n" +
    "							<b class=\"caret\"></b>\n" +
    "						</a>\n" +
    "						\n" +
    "						<ul class=\"dropdown-menu\">\n" +
    "							<li><a href=\"javascript:;\">Account Settings</a></li>\n" +
    "							<li><a href=\"javascript:;\">Privacy Settings</a></li>\n" +
    "							<li class=\"divider\"></li>\n" +
    "							<li><a href=\"javascript:;\">Help</a></li>\n" +
    "						</ul>\n" +
    "						\n" +
    "					</li>\n" +
    "			\n" +
    "					<li class=\"dropdown\">\n" +
    "						\n" +
    "						<a href=\"./index.html#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "							<i class=\"icon-user\"></i> \n" +
    "							Rod Howard\n" +
    "							<b class=\"caret\"></b>\n" +
    "						</a>\n" +
    "						\n" +
    "						<ul class=\"dropdown-menu\">\n" +
    "							<li><a href=\"javascript:;\">My Profile</a></li>\n" +
    "							<li><a href=\"javascript:;\">My Groups</a></li>\n" +
    "							<li class=\"divider\"></li>\n" +
    "							<li><a href=\"javascript:;\">Logout</a></li>\n" +
    "						</ul>\n" +
    "						\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "			\n" +
    "				<form class=\"navbar-search pull-right\">\n" +
    "					<input type=\"text\" class=\"search-query\" placeholder=\"Search\">\n" +
    "				</form>\n" +
    "				\n" +
    "			</div><!--/.nav-collapse -->	\n" +
    "	\n" +
    "		</div> <!-- /container -->\n" +
    "		\n" +
    "	</div> <!-- /navbar-inner -->\n" +
    "	\n" +
    "</div> <!-- /navbar -->\n" +
    "\n" +
    "</span>");
}]);

angular.module("projects/footer/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/footer/footer.tpl.html",
    "<div>\n" +
    "<div class=\"navbar navbar-inverse navbar-fixed-bottom  footer\">\n" +
    "		\n" +
    "	<div>\n" +
    "		\n" +
    "		<div class=\"row\">\n" +
    "			\n" +
    "			<div id=\"footer-copyright\" class=\"span6\">\n" +
    "				© 2012-13 Bizzns Inc.\n" +
    "			</div> <!-- /span6 -->\n" +
    "			\n" +
    "			<div id=\"footer-terms\" class=\"pull-right\">\n" +
    "				Theme by <a href=\"http://bizzns.com/\" target=\"_blank\">Bizzns Inc</a>\n" +
    "			</div> <!-- /.span6 -->\n" +
    "			\n" +
    "		</div> <!-- /row -->\n" +
    "		\n" +
    "	</div> <!-- /container -->\n" +
    "	\n" +
    "</div> <!-- /footer -->\n" +
    "</div>");
}]);

angular.module("projects/mainnav/mainnav.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/mainnav/mainnav.tpl.html",
    "<div>\n" +
    "\n" +
    "<div class=\"subnavbar\" ng-controller=\"projectsMainnav_controller\" >\n" +
    "\n" +
    "	<div class=\"subnavbar-inner\">\n" +
    "	\n" +
    "		<div>\n" +
    "			\n" +
    "			<a class=\"btn-subnavbar collapsed\" data-toggle=\"collapse\" data-target=\".subnav-collapse\">\n" +
    "				<i class=\"icon-reorder\"></i>\n" +
    "			</a>\n" +
    "\n" +
    "			<div class=\"subnav-collapse collapse\">\n" +
    "				<ul class=\"mainnav\">\n" +
    "				\n" +
    "					<li class=\"active\">\n" +
    "						<a href=\"#/\">\n" +
    "							<i class=\"icon-home\"></i>\n" +
    "							<span>Home</span>\n" +
    "						</a>	    				\n" +
    "					</li>\n" +
    "					\n" +
    "					<li class=\"dropdown\">					\n" +
    "						<a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "							<i class=\"icon-th\"></i>\n" +
    "							<span>Components</span>\n" +
    "							<b class=\"caret\"></b>\n" +
    "						</a>	    \n" +
    "					\n" +
    "						<ul class=\"dropdown-menu\">\n" +
    "							<li><a href=\"./elements.html\">Elements</a></li>\n" +
    "							<li><a href=\"./validation.html\">Validation</a></li>\n" +
    "							<li><a href=\"./jqueryui.html\">jQuery UI</a></li>\n" +
    "							<li><a href=\"./charts.html\">Charts</a></li>\n" +
    "							<li><a href=\"./popups.html\">Popups/Notifications</a></li>\n" +
    "						</ul> 				\n" +
    "					</li>\n" +
    "					\n" +
    "					<li class=\"dropdown\">					\n" +
    "						<a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "							<i class=\"icon-copy\"></i>\n" +
    "							<span>Sample Pages</span>\n" +
    "							<b class=\"caret\"></b>\n" +
    "						</a>	    \n" +
    "					\n" +
    "						<ul class=\"dropdown-menu\">\n" +
    "							<li><a href=\"./pricing.html\">Pricing Plans</a></li>\n" +
    "							<li><a href=\"./faq.html\">FAQ's</a></li>\n" +
    "							<li><a href=\"./gallery.html\">Gallery</a></li>\n" +
    "							<li><a href=\"./reports.html\">Reports</a></li>\n" +
    "							<li><a href=\"./account.html\">User Account</a></li>\n" +
    "						</ul> 				\n" +
    "					</li>\n" +
    "					\n" +
    "					<li class=\"dropdown\">					\n" +
    "						<a href=\"javascript:;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "							<i class=\"icon-external-link\"></i>\n" +
    "							<span>Extra Pages</span>\n" +
    "							<b class=\"caret\"></b>\n" +
    "						</a>	\n" +
    "					\n" +
    "						<ul class=\"dropdown-menu\">\n" +
    "							<li><a href=\"./login.html\">Login</a></li>\n" +
    "							<li><a href=\"./signup.html\">Signup</a></li>\n" +
    "							<li><a href=\"./error.html\">Error</a></li>\n" +
    "							<li class=\"dropdown-submenu\">\n" +
    "			                  <a tabindex=\"-1\" href=\"./index.html#\">Dropdown menu</a>\n" +
    "			                  <ul class=\"dropdown-menu\">\n" +
    "			                    <li><a tabindex=\"-1\" href=\"./index.html#\">Second level link</a></li>\n" +
    "			                    <li><a tabindex=\"-1\" href=\"./index.html#\">Second level link</a></li>\n" +
    "			                    <li><a tabindex=\"-1\" href=\"./index.html#\">Second level link</a></li>\n" +
    "			                  </ul>\n" +
    "			                </li>\n" +
    "						</ul>    				\n" +
    "					</li>\n" +
    "				\n" +
    "				</ul>\n" +
    "			</div> <!-- /.subnav-collapse -->\n" +
    "\n" +
    "		</div> <!-- /container -->\n" +
    "	\n" +
    "	</div> <!-- /subnavbar-inner -->\n" +
    "\n" +
    "</div> <!-- /subnavbar -->\n" +
    "\n" +
    "</div>");
}]);

angular.module("projects/topHeader/topheader.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("projects/topHeader/topheader.tpl.html",
    "<span>\n" +
    "<div class=\"navbar navbar-inverse navbar-fixed-top\" \n" +
    "	 ng-controller=\"projectsTopHeader_controller\"   >\n" +
    "	\n" +
    "	<div class=\"navbar-inner\">\n" +
    "		\n" +
    "		<div>\n" +
    "			\n" +
    "			<a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n" +
    "				<i class=\"icon-cog\"></i>\n" +
    "			</a>\n" +
    "			\n" +
    "			<a class=\"brand\" href=\"index.htm\" ng-click=\"home()\"    >\n" +
    "				Project Manager <sup>2.0</sup>\n" +
    "			</a>		\n" +
    "			\n" +
    "			<div class=\"nav-collapse collapse\">\n" +
    "				<ul class=\"nav pull-right\">\n" +
    "					<li class=\"dropdown\">						\n" +
    " 						<settings></settings>					\n" +
    "					</li>\n" +
    "\n" +
    "					<li class=\"dropdown\">\n" +
    "						<login-toolbar></login-toolbar>\n" +
    "					</li>\n" +
    "\n" +
    "				</ul>\n" +
    "				\n" +
    "			\n" +
    "				<form class=\"navbar-search pull-right\">\n" +
    "					<input type=\"text\" class=\"search-query\" placeholder=\"Search\">\n" +
    "				</form>\n" +
    "				\n" +
    "			</div><!--/.nav-collapse -->	\n" +
    "	\n" +
    "		</div> <!-- /container -->\n" +
    "		\n" +
    "	</div> <!-- /navbar-inner -->\n" +
    "	\n" +
    "</div> <!-- /navbar -->\n" +
    "\n" +
    "</span>");
}]);

angular.module("services/security/login/form.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("services/security/login/form.tpl.html",
    "<span>\n" +
    "<form name=\"form\" novalidate class=\"login-form\">\n" +
    "    <div class=\"modal-header\">\n" +
    "        <h4>Sign in</h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "        <div class=\"alert alert-warning\" ng-show=\"authReason\">\n" +
    "            {{authReason}}\n" +
    "        </div>\n" +
    "        <div class=\"alert alert-error\" ng-show=\"authError\">\n" +
    "            {{authError}}\n" +
    "        </div>\n" +
    "        <div class=\"alert alert-info\">Please enter your login details</div>\n" +
    "        <label>E-mail</label>\n" +
    "        <input name=\"login\" type=\"email\" ng-model=\"user.email\" required autofocus>\n" +
    "        <label>Password</label>\n" +
    "        <input name=\"pass\" type=\"password\" ng-model=\"user.password\" required>\n" +
    "    </div>\n" +
    "    <div class=\"modal-footer\">\n" +
    "        <button class=\"btn btn-primary login\" ng-click=\"login()\" ng-disabled='form.$invalid'>Sign in</button>\n" +
    "        <button class=\"btn clear\" ng-click=\"clearForm()\">Clear</button>\n" +
    "        <button class=\"btn btn-warning cancel\" ng-click=\"cancelLogin()\">Cancel</button>\n" +
    "    </div>\n" +
    "</form>\n" +
    "\n" +
    "</span>\n" +
    "");
}]);

angular.module("services/security/login/toolbar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("services/security/login/toolbar.tpl.html",
    "<span>\n" +
    "<!--  ul class=\"nav pull-right\">\n" +
    "  <li class=\"divider-vertical\"></li>\n" +
    "  <li ng-show=\"isAuthenticated()\">\n" +
    "      <a href=\"#\">{{currentUser.firstName}} {{currentUser.lastName}}</a>\n" +
    "  </li>\n" +
    "  <li ng-show=\"isAuthenticated()\" class=\"logout\">\n" +
    "      <form class=\"navbar-form\">\n" +
    "          <button class=\"btn logout\" ng-click=\"logout()\">Log out</button>\n" +
    "      </form>\n" +
    "  </li>\n" +
    "  <li ng-hide=\"isAuthenticated()\" class=\"login\">\n" +
    "      <form class=\"navbar-form\">\n" +
    "          <button class=\"btn login\" ng-click=\"login()\">Log in</button>\n" +
    "      </form>\n" +
    "  </li>\n" +
    "</ul -->\n" +
    "\n" +
    "                \n" +
    "                <a  ng-show=\"isAuthenticated()\" href=\"/users/{{currentUser.id}}\" \n" +
    "                    class=\"dropdown-toggle\" \n" +
    "                    data-toggle=\"dropdown\">\n" +
    "                      <i class=\"icon-user\"></i> \n" +
    "                          {{currentUser.firstName}} {{currentUser.lastName}}\n" +
    "                      <b class=\"caret\"></b>\n" +
    "                </a>\n" +
    "\n" +
    "                <span ng-hide=\"isAuthenticated()\" class=\"login\">\n" +
    "                  <form class=\"navbar-form\">\n" +
    "                      <button class=\"btn login\" ng-click=\"login()\">Log in</button>\n" +
    "                  </form>\n" +
    "                </span>\n" +
    "            \n" +
    "                <ul ng-show=\"isAuthenticated()\" class=\"dropdown-menu\">\n" +
    "                  <li  ng-show=\"isAuthenticated()\" ><a href=\"javascript:;\">My Profile</a></li>\n" +
    "                  <li ng-show=\"isAuthenticated()\" ><a href=\"javascript:;\">My Groups</a></li>\n" +
    "                  <li ng-show=\"isAuthenticated()\" class=\"divider\"></li>\n" +
    "                  <li ng-show=\"isAuthenticated()\"><a href=\"#\" ng-click=\"logout()\">Logout</a></li>\n" +
    "                </ul>   \n" +
    "</span>\n" +
    "\n" +
    "");
}]);

angular.module("services/settings/settings.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("services/settings/settings.tpl.html",
    "<span>\n" +
    "	<span ng-controller=\"settings-controller\" >\n" +
    "		<a href=\"./index.html#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "			<i class=\"icon-cog\"></i>\n" +
    "			Settings\n" +
    "			<b class=\"caret\"></b>\n" +
    "		</a>\n" +
    "		\n" +
    "		<ul class=\"dropdown-menu\">\n" +
    "			<li><a href=\"javascript:;\">Account Settings</a></li>\n" +
    "			<li><a href=\"javascript:;\">Privacy Settings</a></li>\n" +
    "			<li class=\"divider\"></li>\n" +
    "			<li><a href=\"javascript:;\">Help</a></li>\n" +
    "		</ul>\n" +
    "	</span>\n" +
    "</span>");
}]);
