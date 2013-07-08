define [
	#aplicacion
	'app'
],(app) ->
	class Canchas extends Backbone.View
		template : '#canchas-template'
		
		initialize: (options) ->
			return

		afterRender: () ->
			@loadScript()
			return

		cargarMapa: () ->
			mapOptions =
			  zoom: 8,
			  center: new google.maps.LatLng(-34.397, 150.644),
			  mapTypeId: google.maps.MapTypeId.ROADMAP
			map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions)
			return
	
		loadScript: () ->
			script = document.createElement('script')
			script.type = 'text/javascript'
			script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB6fxM1WL2lFywyMpUuA1_oPl0C2fBb4fw&sensor=false&' +
			      'callback=cargarMapa'
			document.body.appendChild(script);
			return