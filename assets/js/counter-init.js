/***************************************/
/*About Page Timer  */
/**************************************/
"use strict";
		function isScrolledIntoView(elem) {
			var docViewTop = $(window).scrollTop();
			var docViewBottom = docViewTop + $(window).height();
			var elemTop = $(elem).offset().top;
			var elemBottom = elemTop + $(elem).height();
			return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
			
		}

		$(window).scroll(function(elem) {
			if (isScrolledIntoView($('.about-count'))) {
				$('.about-count').countTo();
				$(window).off('scroll');
			}
		});