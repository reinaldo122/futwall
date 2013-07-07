(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['app'], function(app) {
    var Footer, _ref;
    return Footer = (function(_super) {
      __extends(Footer, _super);

      function Footer() {
        _ref = Footer.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Footer.prototype.template = '#footer-template';

      Footer.prototype.initialize = function(options) {};

      Footer.prototype.afterRender = function() {};

      return Footer;

    })(Backbone.View);
  });

}).call(this);
