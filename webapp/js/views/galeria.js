(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['app'], function(app) {
    var Galeria, _ref;
    return Galeria = (function(_super) {
      __extends(Galeria, _super);

      function Galeria() {
        _ref = Galeria.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Galeria.prototype.template = '#galeria-template';

      Galeria.prototype.initialize = function(options) {};

      Galeria.prototype.afterRender = function() {};

      return Galeria;

    })(Backbone.View);
  });

}).call(this);
