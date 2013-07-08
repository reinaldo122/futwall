define [
  #aplicacion
  'app'

  #vistas
  'views/navbar'
  'views/home'
  'views/footer'
  'views/nosotros'
  'views/equipos'
  'views/canchas'
  'views/noticias'
  'views/galeria'
  'views/contacto'
],(app,NavBar,Home,Footer,Nosotros, Equipos, Canchas, Noticias, Galeria, Contacto) ->
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
      "click #canchas": "loadCanchas"
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
      ev.preventDefault()
      console.log @getView(".page")
      @setView(".page", new Home()).render()

    loadNosotros: (ev) ->
      ev.preventDefault()
      @setView(".page", new Nosotros()).render()

    loadEquipos: (ev) ->
      ev.preventDefault()
      @setView(".page", new Equipos()).render()

    loadCanchas: (ev) ->
      ev.preventDefault()
      @setView(".page", new Canchas()).render()

    loadNoticias: (ev) ->
      ev.preventDefault()
      @setView(".page", new Noticias()).render()

    loadGaleria: (ev) ->
      ev.preventDefault()
      @setView(".page", new Galeria()).render()

    loadContacto: (ev) ->
      ev.preventDefault()
      @setView(".page", new Contacto()).render()