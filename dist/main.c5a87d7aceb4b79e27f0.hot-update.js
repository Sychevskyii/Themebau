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
/******/ 	__webpack_require__.h = () => ("84d0c6287e08cae25d74")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jNWE4N2Q3YWNlYjRiNzllMjdmMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RSxjQUFjO0FBQ2M7QUFDNEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBLE1BQU0sOENBQU0sY0FBYztBQUMxQjtBQUNBO0FBQ0EsYUFBYSxzREFBVSxFQUFFLHNEQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0NBQWtDO0FBQ3hEO0FBQ0E7QUFDQSw0QkFBNEIsOENBQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7VUM5SUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9zcmMvanMvZmlsZXMvc2xpZGVycy5qcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjyDQv9C+INGA0L7QsdC+0YLRliDRgyDRiNCw0LHQu9C+0L3RljogXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjyDRgdC70LDQudC00LXRgNCwOiBodHRwczovL3N3aXBlcmpzLmNvbS9cclxu0KHQvdGW0L/Qv9C10YIoSFRNTCk6IHN3aXBlclxyXG4qL1xyXG5cclxuLy8g0J/RltC00LrQu9GO0YfQsNGU0LzQviDRgdC70LDQudC00LXRgCBTd2lwZXIg0Lcgbm9kZV9tb2R1bGVzXHJcbi8vINCf0YDQuCDQvdC10L7QsdGF0ZbQtNC90L7RgdGC0ZYg0L/RltC00LrQu9GO0YfQsNGU0LzQviDQtNC+0LTQsNGC0LrQvtCy0ZYg0LzQvtC00YPQu9GWINGB0LvQsNC50LTQtdGA0LAsINCy0LrQsNC30YPRjtGH0Lgg0ZfRhSDRgyB7fSDRh9C10YDQtdC3INC60L7QvNGDXHJcbi8vINCf0YDQuNC60LvQsNC0OiB7IE5hdmlnYXRpb24sIEF1dG9wbGF5IH1cclxuaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXInO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyL21vZHVsZXMnO1xyXG4vKlxyXG7QntGB0L3QvtCy0L3RliDQvNC+0LTRg9C70ZYg0YHQu9Cw0LnQtNC10YDQsDpcclxuTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgQXV0b3BsYXksIFxyXG5FZmZlY3RGYWRlLCBMYXp5LCBNYW5pcHVsYXRpb25cclxu0JTQtdGC0LDQu9GM0L3RltGI0LUg0LTQuNCy0LjRgdGMIGh0dHBzOi8vc3dpcGVyanMuY29tL1xyXG4qL1xyXG5cclxuLy8g0KHRgtC40LvRliBTd2lwZXJcclxuLy8g0JHQsNC30L7QstGWINGB0YLQuNC70ZZcclxuaW1wb3J0IFwiLi4vLi4vc2Nzcy9iYXNlL3N3aXBlci5zY3NzXCI7XHJcbi8vINCf0L7QstC90LjQuSDQvdCw0LHRltGAINGB0YLQuNC70ZbQsiDQtyBzY3NzL2xpYnMvc3dpcGVyLnNjc3NcclxuLy8gaW1wb3J0IFwiLi4vLi4vc2Nzcy9saWJzL3N3aXBlci5zY3NzXCI7XHJcbi8vINCf0L7QstC90LjQuSDQvdCw0LHRltGAINGB0YLQuNC70ZbQsiDQtyBub2RlX21vZHVsZXNcclxuLy8gaW1wb3J0ICdzd2lwZXIvY3NzJztcclxuXHJcbi8vINCG0L3RltGG0ZbQsNC70ZbQt9Cw0YbRltGPINGB0LvQsNC50LTQtdGA0ZbQslxyXG5mdW5jdGlvbiBpbml0U2xpZGVycygpIHtcclxuXHQvLyDQodC/0LjRgdC+0Log0YHQu9Cw0LnQtNC10YDRltCyXHJcblx0Ly8g0J/QtdGA0LXQstGW0YDRj9GU0LzQviwg0YfQuCDRlCDRgdC70LDQudC00LXRgCDQvdCwINGB0YLQvtGA0ZbQvdGG0ZZcclxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXBlcicpKSB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcblx0XHQvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQu9Cw0LnQtNC10YBcclxuXHRcdG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7IC8vINCS0LrQsNC30YPRlNC80L4g0YHQutC70LDRgSDQv9C+0YLRgNGW0LHQvdC+0LPQviDRgdC70LDQudC00LXRgNCwXHJcblx0XHRcdC8vINCf0ZbQtNC60LvRjtGH0LDRlNC80L4g0LzQvtC00YPQu9GWINGB0LvQsNC50LTQtdGA0LBcclxuXHRcdFx0Ly8g0LTQu9GPINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LLQuNC/0LDQtNC60YNcclxuXHRcdFx0bW9kdWxlczogW05hdmlnYXRpb24sIFBhZ2luYXRpb25dLFxyXG5cdFx0XHRvYnNlcnZlcjogdHJ1ZSxcclxuXHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0b2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcblx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogNTAsXHJcblx0XHRcdC8vYXV0b0hlaWdodDogdHJ1ZSxcclxuXHRcdFx0c3BlZWQ6IDgwMCxcclxuXHJcblx0XHRcdC8vdG91Y2hSYXRpbzogMCxcclxuXHRcdFx0Ly9zaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuXHRcdFx0Ly9sb29wOiB0cnVlLFxyXG5cdFx0XHQvL3ByZWxvYWRJbWFnZXM6IGZhbHNlLFxyXG5cdFx0XHQvL2xhenk6IHRydWUsXHJcblxyXG5cdFx0XHQvKlxyXG5cdFx0XHQg0JXRhNC10LrRgtC4XHJcblx0XHRcdGVmZmVjdDogJ2ZhZGUnLFxyXG5cdFx0XHRhdXRvcGxheToge1xyXG5cdFx0XHRcdGRlbGF5OiAzMDAwLFxyXG5cdFx0XHRcdGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcclxuXHRcdFx0fSxcclxuXHJcblxyXG5cdFx0XHQvLyDQn9Cw0LPRltC90LDRhtGW0Y9cclxuXHRcdFx0LypcclxuXHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuXHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHRcdCovXHJcblxyXG5cdFx0XHQvLyDQodC60YDQvtC70LvQsdCw0YBcclxuXHRcdFx0XHJcblx0XHRcdC8vIHNjcm9sbGJhcjoge1xyXG5cdFx0XHQvLyBcdGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG5cdFx0XHQvLyBcdGRyYWdnYWJsZTogdHJ1ZSxcclxuXHRcdFx0Ly8gfSxcclxuXHRcdFx0XHJcblxyXG5cdFx0XHQvLyDQmtC90L7Qv9C60LggXCLQstC70ZbQstC+L9Cy0L/RgNCw0LLQvlwiXHJcblx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuXHRcdFx0XHRuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g0JHRgNC10LnQutC/0L7RltC90YLQuFxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDY0MDoge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMCxcclxuXHRcdFx0XHRcdGF1dG9IZWlnaHQ6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDIwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0OTkyOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDEyNjg6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDUwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvLyDQn9C+0LTRltGXXHJcblx0XHRcdG9uOiB7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuLy8g0KHQutGA0L7Qu9C7INC90LAg0LHQsNC30ZYg0YHQu9Cw0LnQtNC10YDQsCAo0LfQsCDQutC70LDRgdC+0Lwgc3dpcGVyIHNjcm9sbCDQtNC70Y8g0L7QsdC+0LvQvtC90LrQuCDRgdC70LDQudC00LXRgNCwKVxyXG5mdW5jdGlvbiBpbml0U2xpZGVyc1Njcm9sbCgpIHtcclxuXHRsZXQgc2xpZGVyU2Nyb2xsSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyX3Njcm9sbCcpO1xyXG5cdGlmIChzbGlkZXJTY3JvbGxJdGVtcy5sZW5ndGggPiAwKSB7XHJcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2xpZGVyU2Nyb2xsSXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcblx0XHRcdGNvbnN0IHNsaWRlclNjcm9sbEl0ZW0gPSBzbGlkZXJTY3JvbGxJdGVtc1tpbmRleF07XHJcblx0XHRcdGNvbnN0IHNsaWRlclNjcm9sbEJhciA9IHNsaWRlclNjcm9sbEl0ZW0ucXVlcnlTZWxlY3RvcignLnN3aXBlci1zY3JvbGxiYXInKTtcclxuXHRcdFx0Y29uc3Qgc2xpZGVyU2Nyb2xsID0gbmV3IFN3aXBlcihzbGlkZXJTY3JvbGxJdGVtLCB7XHJcblx0XHRcdFx0b2JzZXJ2ZXI6IHRydWUsXHJcblx0XHRcdFx0b2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcblx0XHRcdFx0ZGlyZWN0aW9uOiAndmVydGljYWwnLFxyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuXHRcdFx0XHRmcmVlTW9kZToge1xyXG5cdFx0XHRcdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNjcm9sbGJhcjoge1xyXG5cdFx0XHRcdFx0ZWw6IHNsaWRlclNjcm9sbEJhcixcclxuXHRcdFx0XHRcdGRyYWdnYWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRcdHNuYXBPblJlbGVhc2U6IGZhbHNlXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRtb3VzZXdoZWVsOiB7XHJcblx0XHRcdFx0XHRyZWxlYXNlT25FZGdlczogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0c2xpZGVyU2Nyb2xsLnNjcm9sbGJhci51cGRhdGVTaXplKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHQvLyDQl9Cw0L/Rg9GB0Log0ZbQvdGW0YbRltCw0LvRltC30LDRhtGW0Zcg0YHQu9Cw0LnQtNC10YDRltCyXHJcblx0aW5pdFNsaWRlcnMoKTtcclxuXHQvLyDQl9Cw0L/Rg9GB0Log0ZbQvdGW0YbRltCw0LvRltC30LDRhtGW0Zcg0YHQutGA0L7Qu9C70LAg0L3QsCDQsdCw0LfRliDRgdC70LDQudC00LXRgNCwICjQt9CwINC60LvQsNGB0L7QvCBzd2lwZXJfc2Nyb2xsKVxyXG5cdC8vaW5pdFNsaWRlcnNTY3JvbGwoKTtcclxufSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODRkMGM2Mjg3ZTA4Y2FlMjVkNzRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=