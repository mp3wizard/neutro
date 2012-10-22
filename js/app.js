jQuery(document).ready(function($){ 
	$('a[rel=tooltip], span[rel=tooltip]').tooltip();
	$('a[rel=tooltip]').click(function() { 
		return false;
	})
    $('.pagination a.active').click(function() { 
	    return false;
    })
});