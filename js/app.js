jQuery(document).ready(function($){ 
	$('a[rel=tooltip]').tooltip();
    $('.pagination a.active').click(function() { 
	    return false;
    })
});