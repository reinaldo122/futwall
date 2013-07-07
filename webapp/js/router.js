(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['app', 'views/page', 'views/home'], function(app, PageLayout, Home) {
    var AppRouter, _ref;
    return AppRouter = (function(_super) {
      __extends(AppRouter, _super);

      function AppRouter() {
        _ref = AppRouter.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AppRouter.prototype.routes = {
        "": "home",
        "contacto": "contacto"
      };

      AppRouter.prototype.initialize = function(options) {
        this.page = new PageLayout;
        this.page.render().view.$el.appendTo(".main");
      };

      AppRouter.prototype.home = function() {
        this.page.setView(".page", new Home()).render();
      };

      AppRouter.prototype.contacto = function() {};

      return AppRouter;

    })(Backbone.Router);
  });

}).call(this);
