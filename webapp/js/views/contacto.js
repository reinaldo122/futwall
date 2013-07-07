(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['app'], function(app) {
    var Contacto, _ref;
    return Contacto = (function(_super) {
      __extends(Contacto, _super);

      function Contacto() {
        _ref = Contacto.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Contacto.prototype.template = '#contacto-template';

      Contacto.prototype.initialize = function(options) {};

      Contacto.prototype.afterRender = function() {};

      return Contacto;

    })(Backbone.View);
  });

}).call(this);
