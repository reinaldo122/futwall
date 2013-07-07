(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['app'], function(app) {
    var Equipos, _ref;
    return Equipos = (function(_super) {
      __extends(Equipos, _super);

      function Equipos() {
        _ref = Equipos.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Equipos.prototype.template = '#equipos-template';

      Equipos.prototype.initialize = function(options) {};

      Equipos.prototype.afterRender = function() {};

      return Equipos;

    })(Backbone.View);
  });

}).call(this);
