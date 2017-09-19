/** *************Init JS*********************
	
    TABLE OF CONTENTS
	---------------------------
	1)Preloader Effect
	2)Ready function
	3)Auto height function
	4)SmoothScroll
	5)Carousel Slider
	6)Image Responsive Function
	7)Contact Form
	
 ** ***************************************/
/*************************************/
"use strict";

/***********************************/
/*Preloader Effect*/
/**********************************/
   jQuery(window).load(function() {
        // will first fade out the loading animation
	jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(100).fadeOut("slow");
	jQuery("body").css('overflow-y','visible');

});
	
/***********************************/
/*Ready function*/
/**********************************/
$(document).ready(function() {
    miagency();
});

/***********************************/
/*Auto height function*/
/**********************************/
var setElementHeight = function() {
    var height = $(window).height();
    var width = $(window).width();
    if (width > 1024) {
        $('.autoheight').css('min-height', (height));
    } 
	else {
        $('.autoheight').css('min-height', 'auto');
    }
};

$(window).on("resize", function() {
    setElementHeight();
}).resize();

/***********************************/
/*SmoothScroll*/
/**********************************/
var height = $(".greyAwning").height();
smoothScroll.init({
    speed: 1000,
    easing: 'easeInOutCubic',
    offset: height,
    updateURL: false,
    callbackBefore: function(toggle, anchor) {},
    callbackAfter: function(toggle, anchor) {},
});

function miagency() {
    
    /*Carousel Slider*/
    $('.carousel').carousel({
        interval: 450000 //changes the speed
    });
   
    /*Image Responsive Function*/
    function imgsize() {
        var W = $(window).width();
        var team_image = $(window).width();
        $('.project-img-sec img').width(W);

        if (W >= 1270) {
            $('.team-person-image img').width(team_image / 4.71);
        } else if (W <= 1270 && W >= 1202) {
            $('.team-person-image img').width(team_image / 4.84);
        } else if (W < 1202) {
            $('.team-person-image img').width(team_image / 3.84);
        }
        if (W >=975) {
				$('.half-size-img img').width(W / 2);
				$('.about-half-img').width(W / 2);
				$('.about-one-forth-img').width(W / 4);
			}	
			else {
				$('.half-size-img img').width(W);
				$('.about-half-img').width(W);
				$('.blog-half-img').width(W);
			}
    }
    function divresize() {
        var min = $('#img_id').height();
		var min1 = $('.blog-half-img').height();
        $('.about-image-block').height(min);
	}
    $(window).on("resize", function() {
        imgsize();
        divresize();
    }).resize();

    $(window).on("load", function() {
        imgsize();
        divresize();
    });

}

/***************************************/
/* Contact form  */
/**************************************/

	$("#cont_form").submit(function() { 
		
        var filter = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        var contact_form = $("#cont_form")
        var inputName    = 'input[name="info\[name\]"]';
        var inputEmail   = 'input[name="info\[email\]"]';
        var inputContent = 'textarea[name="info\[content\]"]';

		var user_name    = contact_form.find(inputName).val();
		var user_email   = contact_form.find(inputEmail).val();
		var user_message = contact_form.find(inputContent).val();

        var proceed = true;
      
		if(user_name==""){ 
            $(inputName).css('border-color','red');
			$(inputName).css('border-width','1px');
			$(inputName).css('border-style','solid');
            proceed = false;
        }
		else{
			$(inputName).css('border-color','#c7c7c7');
		}
		
        if(user_email== ""){ 
            $(inputEmail).css('border-color','red');
			$(inputEmail).css('border-width','1px');
			$(inputEmail).css('border-style','solid');
            proceed = false;
		}
		else{
			$(inputEmail).css('border-color','#c7c7c7');
		}
		
        if(user_message=="") {  
            $(inputContent).css('border','red');
			$(inputContent).css('border-width','1px');
			$(inputContent).css('border-style','solid');
            proceed = false;
        }
		else{
			$(inputContent).css('border-color','#c7c7c7');
		}
		
		
        if(proceed) //everything looks good! proceed...
        {
            //data to be sent to server
            var post_data = {'info\[name\]':user_name, 'info\[email\]':user_email,  'info\[content\]':user_message};
            var url = "/info/send_contact_email";
            //Ajax post data to server
            $.post(url, post_data, function(response){

                //load json data from server and output message     
				if(response.type == 'error')
				{
					var output = '<div class="error">'+response.text+'</div>';
				}else{
				    var output = '<div class="success">'+response.text+'</div>';
					
					//reset values in all input fields
					$('#cont_form input').val(''); 
					$('#cont_form textarea').val(''); 
					
				}
				
				$("#result").hide().html(output).fadeIn(500);
				
            }, 'json');
			
        }
		return true;
	
    });	
/***************************************/
		/*Placeholder JS call */
/**************************************/
		$('input[type=text], textarea').placeholder();