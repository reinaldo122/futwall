define [
  #aplicacion
  'app'

  #Vistas
	'views/page'
  'views/home'
],(app,PageLayout,Home) ->
  class AppRouter extends Backbone.Router
    
    routes: {
      "" : "home"
      "contacto" : "contacto"
    }

    initialize: (options)->
      @page = new PageLayout
      @page.render().view.$el.appendTo(".main")
      return

    home: () ->
      @page.setView(".page",new Home()).render()
      return

    contacto: () ->
      return