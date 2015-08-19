/**Masonery Block Init js**/

$(document).ready(function() {
	//blocksit define
	$(window).load( function() {
		resize();
	});
	
	//window resize
	var currentWidth = 1100;
	$(window).resize(function() {
		
		var winWidth = $(window).width();
		var conWidth;
		
		if(winWidth < 361) {
			conWidth = winWidth;
			col = 1
		} else if(winWidth < 641) {
			conWidth = winWidth;
			col = 2
		} else if(winWidth < 769) {
			conWidth = winWidth;
			col = 2
		} else if(winWidth > 768) {
			conWidth = winWidth;
			col = 5;
		} else {
			conWidth = winWidth;
			col = 5;
		}
		
		if(conWidth != currentWidth) {
			currentWidth = conWidth;
			$('#masonry-full-width').width(conWidth);
			$('#masonry-full-width').BlocksIt({
				numOfCol: col,
				offsetX: 0,
				offsetY: 0
			});
			
		}
	});
});

function resize(){
	"use strict";
	//window resize
	var currentWidth = 1100;
	//$(window).resize(function() {
		//alert("hi");
		var winWidth = $(window).width();
		var conWidth;
		var col;
		if(winWidth < 361) {
			conWidth = winWidth;
			col = 1
		} else if(winWidth < 641) {
			conWidth = winWidth;
			col = 2
		} else if(winWidth < 769) {
			conWidth = winWidth;
			col = 2
		} else if(winWidth > 768) {
			conWidth = winWidth;
			col = 5;
		} else {
			conWidth = winWidth;
			col = 5;
		}
		
		if(conWidth != currentWidth) {
			currentWidth = conWidth;
			$('#masonry-full-width').width(conWidth);
			$('#masonry-full-width').BlocksIt({
				numOfCol: col,
				offsetX: 0,
				offsetY: 0
			});
		}
	//});
}
 jQuery(function() {
	jQuery("img.lazy").lazyload({
	   effect : "fadeIn"
	   //threshold : 2000
	 });
  });