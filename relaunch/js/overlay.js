(function() {
    function toggleOverlay(overlay) {
	if( classie.has( overlay, 'open' ) ) {
	    classie.remove( overlay, 'open' );
	    classie.remove( container, 'overlay-open' );
	    classie.add( overlay, 'close' );
	    var onEndTransitionFn = function( ev ) {
		if( support.transitions ) {
		    if( ev.propertyName !== 'visibility' ) return;
		    this.removeEventListener( transEndEventName, onEndTransitionFn );
		}
		classie.remove( overlay, 'close' );
	    };
	    if( support.transitions ) {
		overlay.addEventListener( transEndEventName, onEndTransitionFn );
	    }
	    else {
		onEndTransitionFn();
	    }
	}
	else if( !classie.has( overlay, 'close' ) ) {
	    classie.add( overlay, 'open' );
	    classie.add( container, 'overlay-open' );
	}
    }
    
    var container = document.querySelector('div.container');

    transEndEventNames = {
	'WebkitTransition': 'webkitTransitionEnd',
	'MozTransition': 'transitionend',
	'OTransition': 'oTransitionEnd',
	'msTransition': 'MSTransitionEnd',
	'transition': 'transitionend'
    },
    
    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
    support = { transitions : Modernizr.csstransitions };

    var overlayNames = ['foo', 'bar']; // , 'baz', 'qux', 'quux'
    overlayNames.forEach(function (name) {
        var triggerBttn = document.querySelector('#trigger-overlay-' + name),
            overlay = document.querySelector('div.overlay-' + name),
            closeBttn = document.querySelector('button.overlay-close-' + name);
     
        triggerBttn.addEventListener('click', function () {
            toggleOverlay(overlay);
        });
        closeBttn.addEventListener('click', function () {
            toggleOverlay(overlay);
        });
    });
})();
