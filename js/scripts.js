$(function(){
	$('.slider').slick({
	  // setting-name: setting-value
	  autoplay: true
	});

	$('img.social-icon').hover(

         function(){ 
         	$(this).addClass('uk-animation-scale') 
         },
         function(){ 
         	$(this).removeClass('uk-animation-scale') 
         }
    );    

	  $('.sendEmail').click(function (event) {
	    	var name = "antonellatezza";
			var domain = "gmail.com";
			var email =  name + '@' + domain;

			var subject = "Contact from your website";
	    	var emailBody = "Hi Antonella";

	        window.location = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody;

	  });

	var scrollHandler = function (event, visible) {
	
		if (visible) {
			$(this).addClass("inview");

			$('nav li').removeClass("uk-active");
			$('nav li.' + this.id).addClass("uk-active");
		} else {
			$(this).removeClass("inview");
		}
	}

	$('#start, #what, #workon, #reference, #aboutme, #contact').bind('inview', scrollHandler);

});

