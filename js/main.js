;(function(){
	"use strict";

	$(function(){
		$('.ba-slider').slick(
		{
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			vertical: true,
			verticalSwiping: true,
			dots: true,
			slide: '.ba-slider__item',
			prevArrow: '.ba-slider__prev',
			nextArrow: '.ba-slider__next'
		});
	});
}());
