define [
  #aplicacion
  'app'

  #vistas
  'views/navbar'
  'views/home'
  'views/footer'
  'views/nosotros'
  'views/equipos'
  'views/noticias'
  'views/galeria'
  'views/contacto'
],(app,NavBar,Home,Footer,Nosotros, Equipos, Noticias, Galeria, Contacto) ->
  class MainPage extends Backbone.Layout
    template : '#main-layout-template'

    views: {
      ".header": new NavBar()
      ".page": new Home()
      ".footer": new Footer()
    }

    events: {
      "click .brand": "loadHome"
      "click #nosotros": "loadNosotros"
      "click #equipos": "loadEquipos"
      "click #noticias": "loadNoticias"
      "click #galeria": "loadGaleria"
      "click #contacto": "loadContacto"
      "mouseover #menu-navbar": "solidNavbar"
      "mouseout #menu-navbar": "transparentNavbar"
    }
    
    initialize: () ->
      $('header').scroll(()-> console.log "scroll");
      return

    solidNavbar: (ev) ->
      $('.header .navbar').css 'opacity', '1'

    transparentNavbar: (ev) ->
      $('.header .navbar').css 'opacity', '0.7'

    loadHome: (ev) ->
      @setView(".page", new Home()).render()
      return

    loadNosotros: (ev) ->
      console.log "nosotros"
      @setView(".page", new Nosotros()).render()
      return

    loadEquipos: (ev) ->
      @setView(".page", new Equipos()).render()

    loadNoticias: (ev) ->
      @setView(".page", new Noticias()).render()

    loadGaleria: (ev) ->
      @setView(".page", new Galeria()).render()

    loadContacto: (ev) ->
      @setView(".page", new Contacto()).render()