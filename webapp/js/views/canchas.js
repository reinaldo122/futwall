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

      Canchas.prototype.afterRender = function() {
        this.loadScript();
      };

      Canchas.prototype.cargarMapa = function() {
        var map, mapOptions;
        mapOptions = {
          zoom: 8,
          center: new google.maps.LatLng(-34.397, 150.644),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      };

      Canchas.prototype.loadScript = function() {
        var script;
        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB6fxM1WL2lFywyMpUuA1_oPl0C2fBb4fw&sensor=false&' + 'callback=cargarMapa';
        document.body.appendChild(script);
      };

      return Canchas;

    })(Backbone.View);
  });

}).call(this);
