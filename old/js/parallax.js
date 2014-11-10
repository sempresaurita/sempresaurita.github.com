/*
Demo: Despiration Tutorial Parallax Demo
Author: Elias Ghosn - Despiration.com
Author URL: http://www.despiration.com/
Tutorial URL: http://www.ianlunn.co.uk/blog/code-tutorials/recreate-nikebetterworld-parallax/

License: http://creativecommons.org/licenses/by-sa/3.0/ (Attribution Share Alike). Please attribute work to Despiration.com simply by leaving these comments in the source code or if you'd prefer, place a link on your website to http://www.despiration.com/.

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

$(function() { //when the document is ready...
  	$('nav a[title]').tooltipsy({
		hide: function (e, $el) {
	        $el.hide();
	    },
	    offset: [-20, 8]
	});
	//save selectors as variables to increase performance
	var $window = $(window);
	var $firstBG = $('#intro');
	var bg1 = $("#intro .bg");
	var $secondBG = $('#about');
	var $thirdBG = $('#portfolio');

	var $fourthBG = $('#contact');
	var bg4 = $("#contact .bg");
	
	var windowHeight = $window.height(); //get the height of the window

	var scrollHandler = function (event, visible) {
		if (visible) {
			$(this).addClass("inview");

			$('nav a').removeClass("current");
			$('nav a.' + this.id).addClass("current");
		} else {
			$(this).removeClass("inview");
		}
	}

	$('#intro, #about, #portfolio, #contact').bind('inview', scrollHandler);

	
	function newPos(x, windowHeight, pos, adjuster, inertia){
		return x + "% " + (-((windowHeight + pos) - adjuster) * inertia)  + "px";
	}
	
	//function to be called whenever the window is scrolled or resized
	function Move(){ 
		var pos = $window.scrollTop(); //position of the scrollbar
		console.log('inview', $('.inview'));
		if($firstBG.hasClass("inview")){
			console.log('1st pos:', pos);
			//call the newPos function and change the background position
			$firstBG.css({'backgroundPosition': newPos(0, windowHeight, pos, 1800, 0)});
			//$secondBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 1550, 0.3)});
			bg1.css({'backgroundPosition': newPos(70, windowHeight, pos, 2000, 0.25)});
			//call the newPos function and change the second background position

		}

		//if the second section is in view...
		if($secondBG.hasClass("inview")){
			//call the newPos function and change the background position
			$secondBG.css({'backgroundPosition': newPos(0, windowHeight, pos, 3750, 0)});
			//$secondBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 1550, 0.3)});
			// bg2.css({'backgroundPosition': newPos(70, windowHeight, pos, 6510, 0.25)});
			//call the newPos function and change the second background position

		}
		
		if ($thirdBG.hasClass("inview")){
			//call the newPos function and change the background position
			$thirdBG.css({'backgroundPosition': newPos(0, windowHeight, pos, 2550, 0)});
			//$secondBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 1550, 0.3)});
			// bg3.css({'backgroundPosition': newPos(70, windowHeight, pos, 5010, 0.25)});
			//call the newPos function and change the second background position

		}
		
		if ($fourthBG.hasClass("inview")){
			//call the newPos function and change the background position
			$secondBG.css({'backgroundPosition': newPos(0, windowHeight, pos, 3916, 0)});
			//$secondBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 1550, 0.3)});
			bg4.css({'backgroundPosition': newPos(70, windowHeight, pos, 6200, 0.25)});
			//call the newPos function and change the second background position

		}
	}
		
	// RepositionNav(); //Reposition the Navigation to center it in the window when the script loads
	
	$window.resize(function(){ //if the user resizes the window...
		Move(); //move the background images in relation to the movement of the scrollbar
		// RepositionNav(); //reposition the navigation list so it remains vertically central
	});		
	
	$window.bind('scroll', function(){ //when the user is scrolling...
		Move(); //move the background images in relation to the movement of the scrollbar
	});

	$('nav a').click(function(e) {
    	e.preventDefault();
    	$('nav a').removeClass('current');
    	$(this).addClass('current');

    	var link = this;
    	$.smoothScroll({
      		scrollTarget: link.hash,
      		easing: 'swing',
  			speed: 800
    	});

  	});
	$('.flexslider').flexslider({
	  	slideshow: false,
	    animation: "slide"
	  });

	$('#contact-page').submit(function(e) {
		e.preventDefault();

		var data = {
			name: $('[name=name]').val(), 
			email: $('[name=email]').val(),
			message: $('[name=message]').val()
		};

		$.post('/send-email', data, function(data) {
			$('[name=name], [name=email], [name=message]').val('');

		  	$('.thx').html('Thank you! I will contact you soon');
		});
	})
});