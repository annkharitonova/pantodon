// Slider
$(document).ready(function () {
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		easing: 'ease-in-out',
		waitForAnimate: false,
		prevArrow: $('.prev'),
		nextArrow: $('.next')
	});
});