define [
	  #Librerias Principales
	  'jquery'
  	'underscore'
  	'backbone'
	  #Plugins
	  'layoutmanager'
    'bootstrap'

],($, _, Backbone) ->

  $.ajaxPrefilter ( options, originalOptions, jqXHR ) ->
    options.url = options.url
    #options.xhrFields = {withCredentials: true}
    return

  Backbone.Layout.configure {
    manage: true
  }

  app = {
    root: "/"
  }


