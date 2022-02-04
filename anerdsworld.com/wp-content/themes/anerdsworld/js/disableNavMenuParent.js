	var isMobile = jQuery(document).width() < 481 ? true : false;
	if (isMobile) {
		jQuery("#menu-item-17515 > a").click(function(event){
		   event.preventDefault();
		   jQuery("#menu-item-17515 .menu-toggle").click();
		   /*Don't unbind the function. We want to keep it disabled for mobile. Always*/
		   /*jQuery('#menu-item-17515 > a').unbind('click');*/
		});
		
		jQuery("#menu-item-18070 > a").click(function(event){
		   event.preventDefault();
		   jQuery("#menu-item-18070 .menu-toggle").click();
		   /*Don't unbind the function. We want to keep it disabled for mobile. Always*/
		   /*jQuery('#menu-item-18070 > a').unbind('click');*/
		});
	}