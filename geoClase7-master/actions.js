//Geolocalización
function inicio(){
	document.addEventListener("deviceready", function(){
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
		function onSuccess(position){
			//arr['latitude']=position.coords.latitude;
			//arr['longitude']=position.coords.longitude;
			//alert(coords['longitude']);
			var myLatlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
			var mapOptions = {
				zoom: 15,
				center: myLatlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
			var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
		
			var marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				title:"¡Aquí estoy!"
			});
		};
	
		// onError Callback receives a PositionError object
		function onError(error){
			alert('code: '    + error.code    + '\n' +
				  'message: ' + error.message + '\n');
		}
	}, false);
}

/*function coordenadas(){
	var arr = [];*/

	
	
	/*return arr;
}*/