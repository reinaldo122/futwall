(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['app'], function(app) {
    var Reglas, _ref;
    return Reglas = (function(_super) {
      __extends(Reglas, _super);

      function Reglas() {
        _ref = Reglas.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Reglas.prototype.template = '#reglas-template';

      Reglas.prototype.initialize = function(options) {};

      Reglas.prototype.afterRender = function() {
        $("a.fullscreen").click();
      };

      return Reglas;

    })(Backbone.View);
  });

}).call(this);
