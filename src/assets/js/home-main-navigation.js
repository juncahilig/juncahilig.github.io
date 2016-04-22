(function ($) {
	$(document).ready(function(){

		// TODO: Optimize Selector
		// TODO: Optimize Selector
		// TODO: Beautify Tranisition

	    $(function () {
	    	$(window).scroll(function () {

				var scrollTop = $(this).scrollTop();

				// set distance user needs to scroll before we start fadeIn
				if ( scrollTop > 0) {
					$('.home-main-navigation').css("background-color","#103547");
				} else {
					$('.home-main-navigation').css("background-color","transparent");
				}
				console.log("Hello world");
			});
		});
	});
}(jQuery));