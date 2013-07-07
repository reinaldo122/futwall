(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['app', 'views/navbar', 'views/home', 'views/footer', 'views/nosotros', 'views/equipos', 'views/noticias', 'views/galeria', 'views/contacto'], function(app, NavBar, Home, Footer, Nosotros, Equipos, Noticias, Galeria, Contacto) {
    var MainPage, _ref;
    return MainPage = (function(_super) {
      __extends(MainPage, _super);

      function MainPage() {
        _ref = MainPage.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MainPage.prototype.template = '#main-layout-template';

      MainPage.prototype.views = {
        ".header": new NavBar(),
        ".page": new Home(),
        ".footer": new Footer()
      };

      MainPage.prototype.events = {
        "click .brand": "loadHome",
        "click #nosotros": "loadNosotros",
        "click #equipos": "loadEquipos",
        "click #noticias": "loadNoticias",
        "click #galeria": "loadGaleria",
        "click #contacto": "loadContacto",
        "mouseover #menu-navbar": "solidNavbar",
        "mouseout #menu-navbar": "transparentNavbar"
      };

      MainPage.prototype.initialize = function() {
        $('header').scroll(function() {
          return console.log("scroll");
        });
      };

      MainPage.prototype.solidNavbar = function(ev) {
        return $('.header .navbar').css('opacity', '1');
      };

      MainPage.prototype.transparentNavbar = function(ev) {
        return $('.header .navbar').css('opacity', '0.7');
      };

      MainPage.prototype.loadHome = function(ev) {
        this.setView(".page", new Home()).render();
      };

      MainPage.prototype.loadNosotros = function(ev) {
        console.log("nosotros");
        this.setView(".page", new Nosotros()).render();
      };

      MainPage.prototype.loadEquipos = function(ev) {
        return this.setView(".page", new Equipos()).render();
      };

      MainPage.prototype.loadNoticias = function(ev) {
        return this.setView(".page", new Noticias()).render();
      };

      MainPage.prototype.loadGaleria = function(ev) {
        return this.setView(".page", new Galeria()).render();
      };

      MainPage.prototype.loadContacto = function(ev) {
        return this.setView(".page", new Contacto()).render();
      };

      return MainPage;

    })(Backbone.Layout);
  });

}).call(this);