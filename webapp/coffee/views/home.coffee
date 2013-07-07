define [
	#aplicacion
	'app'
],(app) ->
	class Home extends Backbone.View
		template : '#home-template'
		
		initialize: (options) ->
			$('carousel').carousel
				interval: 500
			return

		afterRender: () ->
			return
	