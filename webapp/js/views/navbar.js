(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['app'], function(app) {
    var NavBar, _ref;
    return NavBar = (function(_super) {
      __extends(NavBar, _super);

      function NavBar() {
        _ref = NavBar.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      NavBar.prototype.template = '#navbar-template';

      NavBar.prototype.initialize = function(options) {};

      NavBar.prototype.afterRender = function() {};

      return NavBar;

    })(Backbone.View);
  });

}).call(this);
