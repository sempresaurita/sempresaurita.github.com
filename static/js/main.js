// To make images retina, add a class "2x" to the img element
// and add a <image-name>@2x.png image. Assumes jquery is loaded.
 
function isRetina() {
	var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
					  (min--moz-device-pixel-ratio: 1.5),\
					  (-o-min-device-pixel-ratio: 3/2),\
					  (min-resolution: 1.5dppx)";
 
	if (window.devicePixelRatio > 1)
		return true;
 
	if (window.matchMedia && window.matchMedia(mediaQuery).matches)
		return true;
 
	return false;
};
 
 
function retina() {
	
	if (!isRetina())
		return;
	
	$("img.2x").map(function(i, image) {
		
		var path = $(image).attr("src");
		
		path = path.replace(".png", "@2x.png");
		path = path.replace(".jpg", "@2x.jpg");
		
		$(image).attr("src", path);
	});
};
 
$(document).ready(retina);

$(function() {
    $(".slider").slick({autoplay: true});
    $("img.social-icon").hover(function() {
        $(this).addClass("uk-animation-scale")
    }, function() {
        $(this).removeClass("uk-animation-scale")
    });
    $(".sendEmail").click(function(e) {
        var t = "antonellatezza";
        var n = "gmail.com";
        var r = t + "@" + n;
        var i = "Contact from your website";
        var s = "Hi Antonella";
        window.location = "mailto:" + r + "?subject=" + i + "&body=" + s
    });
    var e = function(e, t) {
        if (t) {
            $(this).addClass("inview");
            $("nav li").removeClass("uk-active");
            $("nav li." + this.id).addClass("uk-active")
        } else {
            $(this).removeClass("inview")
        }
    };
    $("#start, #what, #workon, #reference, #aboutme, #contact").bind("inview", e)
});