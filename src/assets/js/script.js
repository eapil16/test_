'use strict';
document.addEventListener('DOMContentLoaded', () => {

	const mainSlider = new Swiper('.main-slider', {
		speed: 800,
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		navigation: {
			nextEl: '.main-slider-next',
			prevEl: '.main-slider-prev',
		},
		pagination: {
			el: '.main-slider-pagination',
			clickable: true,
		},
	});

	if (document.querySelector('.slide-total')) {
		document.querySelector('.slide-total').innerHTML = `0${mainSlider.slides.length}`;
	}
	
	mainSlider.on('transitionEnd', function() {
		document.querySelector('.slide-current').innerHTML = `0${mainSlider.realIndex + 1}`
	})

	document.querySelector('body').addEventListener('click', e => {

		//mobile menu
		if (e.target.closest('.menu-toggle-cont')) {
			e.target.closest('.menu-toggle-cont').classList.toggle('menu-toggle-cont_active');
			document.querySelector('.fixed-menu').classList.toggle('show');
			document.querySelector('body').classList.toggle('hidden-body');
		}
		
	});

});
