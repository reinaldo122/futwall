require [
	  'app'
	  'router'
	],(app,Router) ->
		
		#Define las routas y los comportamientos de la aplicacion
		app.router = new Router()
		
		#Habilita el soporte a rutas e inicializa la historia
		Backbone.history.start {
			pushState: false
			root: app.root
		}

		return
