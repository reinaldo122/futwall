(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['app'], function(app) {
    var Noticias, _ref;
    return Noticias = (function(_super) {
      __extends(Noticias, _super);

      function Noticias() {
        _ref = Noticias.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Noticias.prototype.template = '#noticias-template';

      Noticias.prototype.initialize = function(options) {};

      Noticias.prototype.afterRender = function() {};

      return Noticias;

    })(Backbone.View);
  });

}).call(this);
