"use strict";
self["webpackHotUpdatefls_start"]("main",{

/***/ "./src/js/files/sliders.js":
/*!*********************************!*\
  !*** ./src/js/files/sliders.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var _scss_base_swiper_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../scss/base/swiper.scss */ "./src/scss/base/swiper.scss");
/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }


/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі

// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.swiper')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
			observer: true,
			loop: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 50,
			autoplay: {
    			delay: 5000,
  			},
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			 Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},


			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			
			// scrollbar: {
			// 	el: '.swiper-scrollbar',
			// 	draggable: true,
			// },
			

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 1,
					spaceBetween: 50,
				},
			},

			// Події
			on: {

			}
		});
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6c086b219150a41e26f2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41NTg1ZGI4YjhkMWQ4NTE2MjM4OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RSxjQUFjO0FBQ2M7QUFDNEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBLE1BQU0sOENBQU0sY0FBYztBQUMxQjtBQUNBO0FBQ0EsYUFBYSxzREFBVSxFQUFFLHNEQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrQ0FBa0M7QUFDeEQ7QUFDQTtBQUNBLDRCQUE0Qiw4Q0FBTTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztVQ2pKRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9qcy9maWxlcy9zbGlkZXJzLmpzIiwid2VicGFjazovL2Zscy1zdGFydC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxu0JTQvtC60YPQvNC10L3RgtCw0YbRltGPINC/0L4g0YDQvtCx0L7RgtGWINGDINGI0LDQsdC70L7QvdGWOiBcclxu0JTQvtC60YPQvNC10L3RgtCw0YbRltGPINGB0LvQsNC50LTQtdGA0LA6IGh0dHBzOi8vc3dpcGVyanMuY29tL1xyXG7QodC90ZbQv9C/0LXRgihIVE1MKTogc3dpcGVyXHJcbiovXHJcblxyXG4vLyDQn9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INGB0LvQsNC50LTQtdGAIFN3aXBlciDQtyBub2RlX21vZHVsZXNcclxuLy8g0J/RgNC4INC90LXQvtCx0YXRltC00L3QvtGB0YLRliDQv9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INC00L7QtNCw0YLQutC+0LLRliDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsCwg0LLQutCw0LfRg9GO0YfQuCDRl9GFINGDIHt9INGH0LXRgNC10Lcg0LrQvtC80YNcclxuLy8g0J/RgNC40LrQu9Cw0LQ6IHsgTmF2aWdhdGlvbiwgQXV0b3BsYXkgfVxyXG5pbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlcic7XHJcbmltcG9ydCB7IE5hdmlnYXRpb24sIFBhZ2luYXRpb24gfSBmcm9tICdzd2lwZXIvbW9kdWxlcyc7XHJcbi8qXHJcbtCe0YHQvdC+0LLQvdGWINC80L7QtNGD0LvRliDRgdC70LDQudC00LXRgNCwOlxyXG5OYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCBBdXRvcGxheSwgXHJcbkVmZmVjdEZhZGUsIExhenksIE1hbmlwdWxhdGlvblxyXG7QlNC10YLQsNC70YzQvdGW0YjQtSDQtNC40LLQuNGB0YwgaHR0cHM6Ly9zd2lwZXJqcy5jb20vXHJcbiovXHJcblxyXG4vLyDQodGC0LjQu9GWIFN3aXBlclxyXG4vLyDQkdCw0LfQvtCy0ZYg0YHRgtC40LvRllxyXG5pbXBvcnQgXCIuLi8uLi9zY3NzL2Jhc2Uvc3dpcGVyLnNjc3NcIjtcclxuLy8g0J/QvtCy0L3QuNC5INC90LDQsdGW0YAg0YHRgtC40LvRltCyINC3IHNjc3MvbGlicy9zd2lwZXIuc2Nzc1xyXG4vLyBpbXBvcnQgXCIuLi8uLi9zY3NzL2xpYnMvc3dpcGVyLnNjc3NcIjtcclxuLy8g0J/QvtCy0L3QuNC5INC90LDQsdGW0YAg0YHRgtC40LvRltCyINC3IG5vZGVfbW9kdWxlc1xyXG4vLyBpbXBvcnQgJ3N3aXBlci9jc3MnO1xyXG5cclxuLy8g0IbQvdGW0YbRltCw0LvRltC30LDRhtGW0Y8g0YHQu9Cw0LnQtNC10YDRltCyXHJcbmZ1bmN0aW9uIGluaXRTbGlkZXJzKCkge1xyXG5cdC8vINCh0L/QuNGB0L7QuiDRgdC70LDQudC00LXRgNGW0LJcclxuXHQvLyDQn9C10YDQtdCy0ZbRgNGP0ZTQvNC+LCDRh9C4INGUINGB0LvQsNC50LTQtdGAINC90LAg0YHRgtC+0YDRltC90YbRllxyXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyJykpIHsgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuXHRcdC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdC70LDQudC00LXRgFxyXG5cdFx0bmV3IFN3aXBlcignLnN3aXBlcicsIHsgLy8g0JLQutCw0LfRg9GU0LzQviDRgdC60LvQsNGBINC/0L7RgtGA0ZbQsdC90L7Qs9C+INGB0LvQsNC50LTQtdGA0LBcclxuXHRcdFx0Ly8g0J/RltC00LrQu9GO0YfQsNGU0LzQviDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsFxyXG5cdFx0XHQvLyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDQstC40L/QsNC00LrRg1xyXG5cdFx0XHRtb2R1bGVzOiBbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbl0sXHJcblx0XHRcdG9ic2VydmVyOiB0cnVlLFxyXG5cdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRvYnNlcnZlUGFyZW50czogdHJ1ZSxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiA1MCxcclxuXHRcdFx0YXV0b3BsYXk6IHtcclxuICAgIFx0XHRcdGRlbGF5OiA1MDAwLFxyXG4gIFx0XHRcdH0sXHJcblx0XHRcdC8vYXV0b0hlaWdodDogdHJ1ZSxcclxuXHRcdFx0c3BlZWQ6IDgwMCxcclxuXHJcblx0XHRcdC8vdG91Y2hSYXRpbzogMCxcclxuXHRcdFx0Ly9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuXHRcdFx0Ly9sb29wOiB0cnVlLFxyXG5cdFx0XHQvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG5cdFx0XHQvL2xhenk6IHRydWUsXHJcblxyXG5cdFx0XHQvKlxyXG5cdFx0XHQg0JXRhNC10LrRgtC4XHJcblx0XHRcdGVmZmVjdDogJ2ZhZGUnLFxyXG5cdFx0XHRhdXRvcGxheToge1xyXG5cdFx0XHRcdGRlbGF5OiAzMDAwLFxyXG5cdFx0XHRcdGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuXHRcdFx0fSxcclxuXHJcblxyXG5cdFx0XHQvLyDQn9Cw0LPRltC90LDRhtGW0Y9cclxuXHRcdFx0LypcclxuXHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuXHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHRcdCovXHJcblxyXG5cdFx0XHQvLyDQodC60YDQvtC70LvQsdCw0YBcclxuXHRcdFx0XHJcblx0XHRcdC8vIHNjcm9sbGJhcjoge1xyXG5cdFx0XHQvLyBcdGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG5cdFx0XHQvLyBcdGRyYWdnYWJsZTogdHJ1ZSxcclxuXHRcdFx0Ly8gfSxcclxuXHRcdFx0XHJcblxyXG5cdFx0XHQvLyDQmtC90L7Qv9C60LggXCLQstC70ZbQstC+L9Cy0L/RgNCw0LLQvlwiXHJcblx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuXHRcdFx0XHRuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g0JHRgNC10LnQutC/0L7RltC90YLQuFxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDY0MDoge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMCxcclxuXHRcdFx0XHRcdGF1dG9IZWlnaHQ6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDIwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0OTkyOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDEyNjg6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDUwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvLyDQn9C+0LTRltGXXHJcblx0XHRcdG9uOiB7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuLy8g0KHQutGA0L7Qu9C7INC90LAg0LHQsNC30ZYg0YHQu9Cw0LnQtNC10YDQsCAo0LfQsCDQutC70LDRgdC+0Lwgc3dpcGVyIHNjcm9sbCDQtNC70Y8g0L7QsdC+0LvQvtC90LrQuCDRgdC70LDQudC00LXRgNCwKVxyXG5mdW5jdGlvbiBpbml0U2xpZGVyc1Njcm9sbCgpIHtcclxuXHRsZXQgc2xpZGVyU2Nyb2xsSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyX3Njcm9sbCcpO1xyXG5cdGlmIChzbGlkZXJTY3JvbGxJdGVtcy5sZW5ndGggPiAwKSB7XHJcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2xpZGVyU2Nyb2xsSXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0XHRcdGNvbnN0IHNsaWRlclNjcm9sbEl0ZW0gPSBzbGlkZXJTY3JvbGxJdGVtc1tpbmRleF07XHJcblx0XHRcdGNvbnN0IHNsaWRlclNjcm9sbEJhciA9IHNsaWRlclNjcm9sbEl0ZW0ucXVlcnlTZWxlY3RvcignLnN3aXBlci1zY3JvbGxiYXInKTtcclxuXHRcdFx0Y29uc3Qgc2xpZGVyU2Nyb2xsID0gbmV3IFN3aXBlcihzbGlkZXJTY3JvbGxJdGVtLCB7XHJcblx0XHRcdFx0b2JzZXJ2ZXI6IHRydWUsXHJcblx0XHRcdFx0b2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcblx0XHRcdFx0ZGlyZWN0aW9uOiAndmVydGljYWwnLFxyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuXHRcdFx0XHRmcmVlTW9kZToge1xyXG5cdFx0XHRcdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNjcm9sbGJhcjoge1xyXG5cdFx0XHRcdFx0ZWw6IHNsaWRlclNjcm9sbEJhcixcclxuXHRcdFx0XHRcdGRyYWdnYWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRcdHNuYXBPblJlbGVhc2U6IGZhbHNlXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRtb3VzZXdoZWVsOiB7XHJcblx0XHRcdFx0XHRyZWxlYXNlT25FZGdlczogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0c2xpZGVyU2Nyb2xsLnNjcm9sbGJhci51cGRhdGVTaXplKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHQvLyDQl9Cw0L/Rg9GB0Log0ZbQvdGW0YbRltCw0LvRltC30LDRhtGW0Zcg0YHQu9Cw0LnQtNC10YDRltCyXHJcblx0aW5pdFNsaWRlcnMoKTtcclxuXHQvLyDQl9Cw0L/Rg9GB0Log0ZbQvdGW0YbRltCw0LvRltC30LDRhtGW0Zcg0YHQutGA0L7Qu9C70LAg0L3QsCDQsdCw0LfRliDRgdC70LDQudC00LXRgNCwICjQt9CwINC60LvQsNGB0L7QvCBzd2lwZXJfc2Nyb2xsKVxyXG5cdC8vaW5pdFNsaWRlcnNTY3JvbGwoKTtcclxufSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmMwODZiMjE5MTUwYTQxZTI2ZjJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=