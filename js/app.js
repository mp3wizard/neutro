jQuery(document).ready(function($){ 
	$('a[rel=tooltip]').tooltip();
	$(".royalSlider").royalSlider({
        autoHideArrows: true,
        arrowsNavHideOnTouch: true,
        keyboardNavEnabled: true,
        imageScalePadding: 0,
        autoPlay: {
    		// autoplay options go gere
    		enabled: false,
    		pauseOnHover: true,
    		delay: 3000
    	}
    });  
});