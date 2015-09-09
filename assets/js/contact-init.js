/***************************************/
/*Map Init Function */
/**************************************/
"use strict";
function initialize() {
				var latlng = new google.maps.LatLng(41.403607, 2.205746);
				var settings = {
					zoom: 15,
					center: latlng,
					scrollwheel: false,
					mapTypeControl: true,
					mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
					navigationControl: true,
					navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					styles:[{
					"featureType":"all",
					"elementType":"all",
					"stylers":[{"saturation":"-100"}
					]},]
					};
				var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
				var contentString = '<div id="content">'+
					'<div id="siteNotice">'+
					'</div>'+
					'<h1 id="firstHeading" class="firstHeading">Arc Nou</h1>'+
					'<div id="bodyContent">'+
					'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'+
					'</div>'+
					'</div>';
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				
				var companyImage = new google.maps.MarkerImage('assets/img/logo.png',
					new google.maps.Size(100,50),
					new google.maps.Point(0,0),
					new google.maps.Point(50,50)
				);

				var companyShadow = new google.maps.MarkerImage('assets/img/logo_shadow.png',
					new google.maps.Size(100,50),
					new google.maps.Point(0,0),
					new google.maps.Point(50, 50)
				);
			
				var companyPos = new google.maps.LatLng(41.403607, 2.205746);

				var companyMarker = new google.maps.Marker({
					position: companyPos,
					map: map,
					icon: companyImage,
					shadow: companyShadow,
					title:"multia",
					zIndex: 3});
				
				var trainPos = new google.maps.LatLng(41.403607, 2.205746);

				google.maps.event.addListener(companyMarker, 'click', function() {
					infowindow.open(map,companyMarker);
				});
			}
