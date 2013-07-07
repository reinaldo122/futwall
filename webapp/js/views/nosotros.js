(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['app'], function(app) {
    var Nosotros, _ref;
    return Nosotros = (function(_super) {
      __extends(Nosotros, _super);

      function Nosotros() {
        _ref = Nosotros.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Nosotros.prototype.template = '#nosotros-template';

      Nosotros.prototype.initialize = function(options) {};

      Nosotros.prototype.afterRender = function() {};

      return Nosotros;

    })(Backbone.View);
  });

}).call(this);
