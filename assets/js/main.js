(function ($) {
"use strict";

// navbar sticky

$(window).on('scroll',function() {
	if ($(this).scrollTop() > 150){  
		$('#menu').addClass("sticky");
	  }
	  else{
		$('#menu').removeClass("sticky");
	  }
	}); 


// search form
$('.search-icon').on('click', function(){
    $('.search-form').show(300);
});
$('.search-off').on('click', function(){
    $('.search-form').hide(200);
});



//---------- for mobile menu
$('.mobile-menu').on('click', function(){
	$('.main-menu').toggleClass('mobile-active');
	$('.body-overlay').toggleClass('opened');
	$(this).toggleClass('forSpan')
})
$('.body-overlay').on('click',()=>{
	$('.main-menu').removeClass('mobile-active');
	$('.body-overlay').removeClass('opened');
	$('.mobile-menu').removeClass('forSpan');
})















})(jQuery);

