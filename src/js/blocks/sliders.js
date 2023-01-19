// Swiper Slider
// ---------------------------------------------- 

// if (document.querySelector('.cards-swiper')) {
// 	new Swiper('.cards-swiper ', {
// 		// Optional parameters
// 		loop: false,
// 		slidesPerView: 1,
// 		spaceBetween: 10,
// 		watchOverflow: true,
// 		watchSlidesVisibility: true,
// 		watchSlidesProgress: true,
// 		navigation: {
// 			nextEl: '.cards-swiper-next',
// 			prevEl: '.cards-swiper-prev',
// 		},
// 		breakpoints: {
// 			100: {
// 				slidesPerView: 2,
// 				spaceBetween: 6,
// 			},
// 			575: {
// 				slidesPerView: 2,
// 				spaceBetween: 10,
// 			},

// 			768: {
// 				slidesPerView: 3,


// 			},
// 			1025: {
// 				slidesPerView: 4,

// 			},
// 			1300: {
// 				slidesPerView: 1,

// 			},
// 		}

// 	})
// };

if (document.querySelector('.promo-wrapper__swiper')) {
	new Swiper('.promo-wrapper__swiper ', {

		loop: true,
		slidesPerView: 1,
		spaceBetween: 10,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},

	})
};