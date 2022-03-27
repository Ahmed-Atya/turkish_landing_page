/*global $, document , console,window*/
$(document).ready(function () {
    'use strict';
        // Smooth Scroll To Div
	$('.navbar-default .navbar-nav li a').click(function (e) {
		e.preventDefault();
		$('html , body').animate({
			
			scrollTop: $('#' + $(this).data('value')).offset().top
		}, 1000);
		
	});
	//triggre niceScroll Plugin
    $("body").niceScroll();
    $("body").niceScroll({
           cursorcolor:"red",
           cursorwidth:"16px"
      })
    // Go To Top Button 
    $(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.go-top').fadeIn();
		} else {
			$('.go-top').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.go-top').click(function () {
		$('html, body').animate({scrollTop : 0}, 800);
		return false;
	});
    $('').click(function () {
        $('.my-services').offsetTop();
    });
    $('.about-me .chevron-down').click(function () {
		$('html, body').animate({scrollTop : 0}, 800);
		return false;
	});
	//sync divs with links
    $(window).scroll(function () {
        $('.block').each(function () {
            if ($(window).scrollTop() > $(this).offset().top) {
                var blockID = $(this).attr('id');
                
                $('.navbar a').removeClass('active');
                
                $('.navbar li a[data-scroll="' + blockID + '"]').addClass('active');
            }
        });          
    });
});

