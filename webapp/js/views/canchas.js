(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['app'], function(app) {
    var Canchas, _ref;
    return Canchas = (function(_super) {
      __extends(Canchas, _super);

      function Canchas() {
        _ref = Canchas.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Canchas.prototype.template = '#canchas-template';

      Canchas.prototype.initialize = function(options) {};

      Canchas.prototype.afterRender = function() {};

      return Canchas;

    })(Backbone.View);
  });

}).call(this);
