(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['app'], function(app) {
    var Home, _ref;
    return Home = (function(_super) {
      __extends(Home, _super);

      function Home() {
        _ref = Home.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Home.prototype.template = '#home-template';

      Home.prototype.initialize = function(options) {
        $('carousel').carousel({
          interval: 500
        });
      };

      Home.prototype.afterRender = function() {};

      return Home;

    })(Backbone.View);
  });

}).call(this);
