define [
	#aplicacion
	'app'
],(app) ->
	class Reglas extends Backbone.View
		template : '#reglas-template'
		
		initialize: (options) ->
			return

		afterRender: () ->
			$("a.fullscreen").click();
			return