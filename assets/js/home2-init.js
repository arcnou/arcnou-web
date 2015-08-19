/****Home 2 JS****/
"use strict";
$( document ).ready(function() {

	/*Resizable JS*/
	$( "#resizable" ).resizable({handles: {'e': '#handle'}});
	
	/*Filter JS*/
	var api=jQuery('.megafolio-container').megafoliopro(
					{
						filterChangeAnimation:"scale",	// fade, rotate, scale, rotatescale, pagetop, pagebottom,pagemiddle
						filterChangeSpeed:800,					// Speed of Transition
						filterChangeRotate:99,					// If you ue scalerotate or rotate you can set the rotation (99 = random !!)
						filterChangeScale:1,					// Scale Animation Endparameter
						delay:40,
						defaultWidth:980,							// The Time between the Animation of single mega-entry points
						paddingHorizontal:20,					// Padding between the mega-entrypoints
						paddingVertical:20,
						layoutarray:[2,3,2],		// Defines the Layout Types which can be used in the Gallery. 2-9 or "random". You can define more than one, like {5,2,6,4} where the first items will be orderd in layout 5, the next comming items in layout 2, the next comming items in layout 6 etc... You can use also simple {9} then all item ordered in Layout 9 type.
						
					});
		
});