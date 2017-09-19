/**Home4 Init JS**/
"use strict";
/***********************************/
	/*Youtube background*/
/**********************************/
	var options = {
		videoId: 'c-DCu73h_rE',
		repeat: true
	}; /* you tube video id goes here.*/
	$('#background-video').tubular(options);

/***************************************/
/*only play video on desktop devices  */
/**************************************/
var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

var trueMobile = isMobile.any()
if (trueMobile) {
	$('#background-video').css('display', 'none');
	$('#background').css('display', 'none');
	$('#tubular-container').css('display', 'none');
	$('#tubular-shield').css('display', 'none');
	$('#video').css('display', 'none');
	$('.fallback-img-html5').css('display', 'block');
	$('.fallback-img-youtube').css('display', 'block');
 
}



