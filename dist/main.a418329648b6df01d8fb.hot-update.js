"use strict";
self["webpackHotUpdatefls_start"]("main",{

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _files_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files/functions.js */ "./src/js/files/functions.js");
/* harmony import */ var _libs_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/popup.js */ "./src/js/libs/popup.js");
/* harmony import */ var _files_forms_forms_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files/forms/forms.js */ "./src/js/files/forms/forms.js");
/* harmony import */ var _files_sliders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./files/sliders.js */ "./src/js/files/sliders.js");
/* harmony import */ var _files_scroll_scroll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./files/scroll/scroll.js */ "./src/js/files/scroll/scroll.js");
/* harmony import */ var _files_script_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./files/script.js */ "./src/js/files/script.js");
/*
(i) Код потрапляє у підсумковий файл,
тільки коли викликана функція,
наприклад flsFunctions.spollers();
Або коли імпортовано весь файл,
наприклад, import "files/script.js";
Невикористовуваний (не викликаний)
код у підсумковий файл не потрапляє.

Якщо ми хочемо додати модуль
слід його розкоментувати
*/

// Увімкнути/вимкнути FLS (Full Logging System) (в роботі)
window['FLS'] = true;

// Підключення основного файлу стилів


//============================================================================================================================================================================================================================================
// React ========================================================================================================================================================================================================================================================
//============================================================================================================================================================================================================================================
// import Index from './react/Index.jsx';
//============================================================================================================================================================================================================================================

// ========================================================================================================================================================================================================================================================
// Функціонал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================


/* Перевірка підтримки webp, додавання класу webp або no-webp для HTML */
/* (i) необхідно для коректного відображення webp із css */
_files_functions_js__WEBPACK_IMPORTED_MODULE_1__.isWebp();
/* Додавання класу touch для HTML якщо браузер мобільний */
// flsFunctions.addTouchClass();
/* Додавання loaded для HTML після повного завантаження сторінки */
// flsFunctions.addLoadedClass();
/* Модуль для роботи з меню (Бургер) */
_files_functions_js__WEBPACK_IMPORTED_MODULE_1__.menuInit();
/* Враховування плаваючої панелі на мобільних пристроях при 100vh */
// flsFunctions.fullVHfix();
/* Форматування чисел */
// import './libs/wNumb.min.js';

/*
Модуль "Спойлери"
Документація: https://template.fls.guru/template-docs/modul-spojlery.html
Сніппет (HTML): spollers
*/
// flsFunctions.spollers();

/*
Модуль "Таби"
Документація: https://template.fls.guru/template-docs/modul-taby.html
Сніппет (HTML): tabs
*/
//flsFunctions.tabs();

/*
Модуль "Показати ще"
Документація: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Сніппет (HTML): showmore
*/
// flsFunctions.showMore();

/*
Модуль "До/Після"
Документація: https://template.fls.guru/template-docs/modul-do-pislia.html
Сніппет (HTML): ba
*/
// import './libs/beforeafter.js';

/*
Модуль "Ефект хвиль"
Документация: https://template.fls.guru/template-docs/modul-ripple-effect.html
Сниппет (HTML):
*/
// flsFunctions.rippleEffect();

/*
Модуль "Кастомний курсор"
Документация:
Сниппет (HTML):
*/
// flsFunctions.customCursor(true);

/*
Модуль "Попапи"
Документація: https://template.fls.guru/template-docs/funkcional-popup.html
Сніппет (HTML): pl, pop
*/


/*
Модуль паралаксу мишею
Документація: https://template.fls.guru/template-docs/modul-animacii-parallaks-obektov-pri-dvizhenii-myshi.html
*/
// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Робота з формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================


/* Робота з полями форми */
/* Документація: https://template.fls.guru/template-docs/rabota-s-formami.html */
/*
flsForms.formFieldsInit({
	viewPass: false,
	autoHeight: false
});
*/
/* Надсилання форми */
/* Документація: https://template.fls.guru/template-docs/rabota-s-formami.html */
// flsForms.formSubmit();

/* Модуль форми "кількість" */
// flsForms.formQuantity();

/* Модуль зіркового рейтингу */
// flsForms.formRating();

/* Модуль роботи з select. */
// import './libs/select.js'

/* Модуль роботи з календарем */
// import './files/forms/datepicker.js'

/* (У роботі) Модуль роботи з масками.*/
/*
Підключення та налаштування виконується у файлі js/files/forms/inputmask.js
Документація по роботі у шаблоні:
Документація плагіна: https://github.com/RobinHerbots/inputmask
Сніппет(HTML):
*/
// import "./files/forms/inputmask.js";

/* Модуль роботи з повзунком */
/*
Підключення та налаштування виконується у файлі js/files/forms/range.js
Документація по роботі у шаблоні:
Документація плагіна: https://refreshless.com/nouislider/
Сніппет (HTML): range
*/
// import "./files/forms/range.js";

/* Модуль роботи з підказками (tippy) */
/*
Підключення плагіна Tippy.js та налаштування виконується у файлі js/files/tippy.js
Документація по роботі у шаблоні:
Документація плагіна: https://atomiks.github.io/tippyjs/
Сніппет (HTML): tip (додає атрибут з підказкою для html тега)
*/
// import "./files/tippy.js";

// ========================================================================================================================================================================================================================================================
// Робота зі слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Налаштування підключення плагіна слайдера Swiper та нових слайдерів виконується у файлі js/files/sliders.js
Документація по роботі у шаблоні: https://template.fls.guru/template-docs/rabota-so-slajderom-swiper.html
Документація плагіна: https://swiperjs.com/
Сніппет(HTML): swiper
*/


// ========================================================================================================================================================================================================================================================
// Модулі роботи з прокручуванням сторінки ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Зміна дизайну скроллбару
Документація по роботі у шаблоні: У HTML додаємо до блоку атрибут data-simplebar
Документація плагіна: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сніппет(HTML): 
*/
// import './files/scroll/simplebar.js';

// Ліниве (відкладене) завантаження картинок
// Документація по роботі у шаблоні: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документація плагіна: https://github.com/verlok/vanilla-lazyload
// Сніппет(HTML):
// import './files/scroll/lazyload.js';

// Спостерігач за об'єктами з атрибутом data-watch
// Документація: https://template.fls.guru/template-docs/modul-nabljudatel-za-poyavleniem-elementa-pri-skrolle.html
// Сніппет(HTML):
// import './libs/watcher.js'

// Модуль поекранної прокрутки
// Документація: https://template.fls.guru/template-docs/modul-poekrannoj-prokrutki-stranicy-fullpage.html
// Сніппет(HTML):
// import './libs/fullpage.js'

// Модуль паралаксу
// Документація: https://template.fls.guru/template-docs/paralaks-pri-skroli.html
// Сніппет(HTML):
// import './libs/parallax.js'

// Функції роботи скролом


// Плавна навігація по сторінці
// Документація: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
// flsScroll.pageNavigation();

// Функціонал додавання класів до хедеру під час прокручування
// Документація: https://template.fls.guru/template-docs/modul-dobavleniya-klassov-k-shapke-pri-prokrutke-stranicy.html
// flsScroll.headerScroll();

// Модуль анімація цифрового лічильника
// Документація: https://template.fls.guru/template-docs/modul-animacii-cifrovogo-lichilnika.html
// Сніппет(HTML):
// flsScroll.digitsCounter();

// ========================================================================================================================================================================================================================================================
// Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документація по роботі у шаблоні: 
Документація плагіна: https://www.lightgalleryjs.com/docs/
Сніппет(HTML):
*/
// import "./files/gallery.js";

// ========================================================================================================================================================================================================================================================
// Масонрі сітка ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документація по роботі у шаблоні:
Документація плагіна: 
Сніппет(HTML):
*/
// import "./files/isotope.js";

// ========================================================================================================================================================================================================================================================
// Інші плагіни ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Динамічний адаптив */
// Документація: https://template.fls.guru/template-docs/dinamicheskij-adaptiv.html
// import "./libs/dynamic_adapt.js";

// ========================================================================================================================================================================================================================================================
// Інше ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Підключаємо файли зі своїм кодом */

//============================================================================================================================================================================================================================================


/***/ }),

/***/ "./src/js/libs/popup.js":
/*!******************************!*\
  !*** ./src/js/libs/popup.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _files_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../files/functions.js */ "./src/js/files/functions.js");
/* harmony import */ var _files_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../files/modules.js */ "./src/js/files/modules.js");
// Модуль попапів
// (c) Фрілансер по життю, "Хмурый Кот"
// Документація по роботі у шаблоні: https://template.fls.guru/template-docs/funkcional-popup.html
// Сніппет (HTML): pl

// Підключення функціоналу "Чортоги Фрілансера"



// Клас Popup
class Popup {
	constructor(options) {
		let config = {
			logging: true,
			init: true,
			//Для кнопок
			attributeOpenButton: 'data-popup', // Атрибут для кнопки, яка викликає попап
			attributeCloseButton: 'data-close', // Атрибут для кнопки, що закриває попап
			// Для сторонніх об'єктів
			fixElementSelector: '[data-lp]', // Атрибут для елементів із лівим паддингом (які fixed)
			// Для об'єкту попапа
			youtubeAttribute: 'data-popup-youtube', // Атрибут для коду youtube
			youtubePlaceAttribute: 'data-popup-youtube-place', // Атрибут для вставки ролика youtube
			setAutoplayYoutube: true,
			// Зміна класів
			classes: {
				popup: 'popup',
				// popupWrapper: 'popup__wrapper',
				popupContent: 'popup__content',
				popupActive: 'popup_show', // Додається для попапа, коли він відкривається
				bodyActive: 'popup-show', // Додається для боді, коли попап відкритий
			},
			focusCatch: true, // Фокус усередині попапа зациклений
			closeEsc: true, // Закриття ESC
			bodyLock: true, // Блокування скролла
			hashSettings: {
				location: true, // Хеш в адресному рядку
				goHash: true, // Перехід по наявності в адресному рядку
			},
			on: { // Події
				beforeOpen: function () { },
				afterOpen: function () { },
				beforeClose: function () { },
				afterClose: function () { },
			},
		}
		this.youTubeCode;
		this.isOpen = false;
		// Поточне вікно
		this.targetOpen = {
			selector: false,
			element: false,
		}
		// Попереднє відкрите
		this.previousOpen = {
			selector: false,
			element: false,
		}
		// Останнє закрите
		this.lastClosed = {
			selector: false,
			element: false,
		}
		this._dataValue = false;
		this.hash = false;

		this._reopen = false;
		this._selectorOpen = false;

		this.lastFocusEl = false;
		this._focusEl = [
			'a[href]',
			'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
			'button:not([disabled]):not([aria-hidden])',
			'select:not([disabled]):not([aria-hidden])',
			'textarea:not([disabled]):not([aria-hidden])',
			'area[href]',
			'iframe',
			'object',
			'embed',
			'[contenteditable]',
			'[tabindex]:not([tabindex^="-"])'
		];
		//this.options = Object.assign(config, options);
		this.options = {
			...config,
			...options,
			classes: {
				...config.classes,
				...options?.classes,
			},
			hashSettings: {
				...config.hashSettings,
				...options?.hashSettings,
			},
			on: {
				...config.on,
				...options?.on,
			}
		}
		this.bodyLock = false;
		this.options.init ? this.initPopups() : null
	}
	initPopups() {
		this.popupLogging(`Прокинувся`);
		this.eventsPopup();
	}
	eventsPopup() {
		// Клік по всьому документі
		document.addEventListener("click", function (e) {
			// Клік по кнопці "відкрити"
			const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
			if (buttonOpen) {
				e.preventDefault();
				this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ?
					buttonOpen.getAttribute(this.options.attributeOpenButton) :
					'error';
				this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ?
					buttonOpen.getAttribute(this.options.youtubeAttribute) :
					null;
				if (this._dataValue !== 'error') {
					if (!this.isOpen) this.lastFocusEl = buttonOpen;
					this.targetOpen.selector = `${this._dataValue}`;
					this._selectorOpen = true;
					this.open();
					return;

				} else this.popupLogging(`Йой, не заповнено атрибут у ${buttonOpen.classList}`);

				return;
			}
			// Закриття на порожньому місці (popup__wrapper) та кнопки закриття (popup__close) для закриття
			const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
			if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
				e.preventDefault();
				this.close();
				return;
			}
		}.bind(this));
		// Закриття ESC
		document.addEventListener("keydown", function (e) {
			if (this.options.closeEsc && e.which == 27 && e.code === 'Escape' && this.isOpen) {
				e.preventDefault();
				this.close();
				return;
			}
			if (this.options.focusCatch && e.which == 9 && this.isOpen) {
				this._focusCatch(e);
				return;
			}
		}.bind(this))

		// Відкриття по хешу
		if (this.options.hashSettings.goHash) {
			// Перевірка зміни адресного рядка
			window.addEventListener('hashchange', function () {
				if (window.location.hash) {
					this._openToHash();
				} else {
					this.close(this.targetOpen.selector);
				}
			}.bind(this))

			window.addEventListener('load', function () {
				if (window.location.hash) {
					this._openToHash();
				}
			}.bind(this))
		}
	}
	open(selectorValue) {
		if (_files_functions_js__WEBPACK_IMPORTED_MODULE_0__.bodyLockStatus) {
			// Якщо перед відкриттям попапа був режим lock
			this.bodyLock = document.documentElement.classList.contains('lock') && !this.isOpen ? true : false;

			// Якщо ввести значення селектора (селектор настроюється в options)
			if (selectorValue && typeof (selectorValue) === "string" && selectorValue.trim() !== "") {
				this.targetOpen.selector = selectorValue;
				this._selectorOpen = true;
			}
			if (this.isOpen) {
				this._reopen = true;
				this.close();
			}
			if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
			if (!this._reopen) this.previousActiveElement = document.activeElement;

			this.targetOpen.element = document.querySelector(this.targetOpen.selector);

			if (this.targetOpen.element) {
				// YouTube
				if (this.youTubeCode) {
					const codeVideo = this.youTubeCode;
					const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`
					const iframe = document.createElement('iframe');
					iframe.setAttribute('allowfullscreen', '');

					const autoplay = this.options.setAutoplayYoutube ? 'autoplay;' : '';
					iframe.setAttribute('allow', `${autoplay}; encrypted-media`);

					iframe.setAttribute('src', urlVideo);

					if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
						const youtubePlace = this.targetOpen.element.querySelector('.popup__text').setAttribute(`${this.options.youtubePlaceAttribute}`, '');
					}
					this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
				}
				if (this.options.hashSettings.location) {
					// Отримання хешу та його виставлення
					this._getHash();
					this._setHash();
				}

				// До відкриття
				this.options.on.beforeOpen(this);
				// Створюємо свою подію після відкриття попапа
				document.dispatchEvent(new CustomEvent("beforePopupOpen", {
					detail: {
						popup: this
					}
				}));

				this.targetOpen.element.classList.add(this.options.classes.popupActive);
				document.documentElement.classList.add(this.options.classes.bodyActive);

				if (!this._reopen) {
					!this.bodyLock ? (0,_files_functions_js__WEBPACK_IMPORTED_MODULE_0__.bodyLock)() : null;
				}
				else this._reopen = false;

				this.targetOpen.element.setAttribute('aria-hidden', 'false');

				// Запам'ятаю це відчинене вікно. Воно буде останнім відкритим
				this.previousOpen.selector = this.targetOpen.selector;
				this.previousOpen.element = this.targetOpen.element;

				this._selectorOpen = false;

				this.isOpen = true;

				setTimeout(() => {
					this._focusTrap();
				}, 50);

				// Після відкриття
				this.options.on.afterOpen(this);
				// Створюємо свою подію після відкриття попапа
				document.dispatchEvent(new CustomEvent("afterPopupOpen", {
					detail: {
						popup: this
					}
				}));
				this.popupLogging(`Відкрив попап`);

			} else this.popupLogging(`Йой, такого попапу немає. Перевірте коректність введення. `);
		}
	}
	close(selectorValue) {
		if (selectorValue && typeof (selectorValue) === "string" && selectorValue.trim() !== "") {
			this.previousOpen.selector = selectorValue;
		}
		if (!this.isOpen || !_files_functions_js__WEBPACK_IMPORTED_MODULE_0__.bodyLockStatus) {
			return;
		}
		// До закриття
		this.options.on.beforeClose(this);
		// Створюємо свою подію перед закриттям попапа
		document.dispatchEvent(new CustomEvent("beforePopupClose", {
			detail: {
				popup: this
			}
		}));

		// YouTube
		if (this.youTubeCode) {
			if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`))
				this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = '';
		}
		this.previousOpen.element.classList.remove(this.options.classes.popupActive);
		// aria-hidden
		this.previousOpen.element.setAttribute('aria-hidden', 'true');
		if (!this._reopen) {
			document.documentElement.classList.remove(this.options.classes.bodyActive);
			!this.bodyLock ? (0,_files_functions_js__WEBPACK_IMPORTED_MODULE_0__.bodyUnlock)() : null;
			this.isOpen = false;
		}
		// Очищення адресного рядка
		this._removeHash();
		if (this._selectorOpen) {
			this.lastClosed.selector = this.previousOpen.selector;
			this.lastClosed.element = this.previousOpen.element;

		}
		// Після закриття
		this.options.on.afterClose(this);
		// Створюємо свою подію після закриття попапа
		document.dispatchEvent(new CustomEvent("afterPopupClose", {
			detail: {
				popup: this
			}
		}));

		setTimeout(() => {
			this._focusTrap();
		}, 50);

		this.popupLogging(`Закрив попап`);
	}
	// Отримання хешу 
	_getHash() {
		if (this.options.hashSettings.location) {
			this.hash = this.targetOpen.selector.includes('#') ?
				this.targetOpen.selector : this.targetOpen.selector.replace('.', '#')
		}
	}
	_openToHash() {
		let classInHash = document.querySelector(`.${window.location.hash.replace('#', '')}`) ? `.${window.location.hash.replace('#', '')}` :
			document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` :
				null;

		const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace('.', "#")}"]`);

		this.youTubeCode = buttons.getAttribute(this.options.youtubeAttribute) ?
			buttons.getAttribute(this.options.youtubeAttribute) :
			null;

		if (buttons && classInHash) this.open(classInHash);
	}
	// Встановлення хеша
	_setHash() {
		history.pushState('', '', this.hash);
	}
	_removeHash() {
		history.pushState('', '', window.location.href.split('#')[0])
	}
	_focusCatch(e) {
		const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
		const focusArray = Array.prototype.slice.call(focusable);
		const focusedIndex = focusArray.indexOf(document.activeElement);

		if (e.shiftKey && focusedIndex === 0) {
			focusArray[focusArray.length - 1].focus();
			e.preventDefault();
		}
		if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
			focusArray[0].focus();
			e.preventDefault();
		}
	}
	_focusTrap() {
		const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
		if (!this.isOpen && this.lastFocusEl) {
			this.lastFocusEl.focus();
		} else {
			focusable[0].focus();
		}
	}
	// Функція виведення в консоль
	popupLogging(message) {
		this.options.logging ? (0,_files_functions_js__WEBPACK_IMPORTED_MODULE_0__.FLS)(`[Попапос]: ${message}`) : null;
	}
}
// Запускаємо та додаємо в об'єкт модулів
_files_modules_js__WEBPACK_IMPORTED_MODULE_1__.flsModules.popup = new Popup({});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fe42e7e916d75367216a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdEQUFHLGVBQWUsUUFBUTtBQUNuRDtBQUNBO0FBQ0E7QUFDQSx5REFBVSxxQkFBcUI7Ozs7Ozs7O1VDM1cvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vc3JjL2pzL2xpYnMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4oaSkg0JrQvtC0INC/0L7RgtGA0LDQv9C70Y/RlCDRgyDQv9GW0LTRgdGD0LzQutC+0LLQuNC5INGE0LDQudC7LFxyXG7RgtGW0LvRjNC60Lgg0LrQvtC70Lgg0LLQuNC60LvQuNC60LDQvdCwINGE0YPQvdC60YbRltGPLFxyXG7QvdCw0L/RgNC40LrQu9Cw0LQgZmxzRnVuY3Rpb25zLnNwb2xsZXJzKCk7XHJcbtCQ0LHQviDQutC+0LvQuCDRltC80L/QvtGA0YLQvtCy0LDQvdC+INCy0LXRgdGMINGE0LDQudC7LFxyXG7QvdCw0L/RgNC40LrQu9Cw0LQsIGltcG9ydCBcImZpbGVzL3NjcmlwdC5qc1wiO1xyXG7QndC10LLQuNC60L7RgNC40YHRgtC+0LLRg9Cy0LDQvdC40LkgKNC90LUg0LLQuNC60LvQuNC60LDQvdC40LkpXHJcbtC60L7QtCDRgyDQv9GW0LTRgdGD0LzQutC+0LLQuNC5INGE0LDQudC7INC90LUg0L/QvtGC0YDQsNC/0LvRj9GULlxyXG5cclxu0K/QutGJ0L4g0LzQuCDRhdC+0YfQtdC80L4g0LTQvtC00LDRgtC4INC80L7QtNGD0LvRjFxyXG7RgdC70ZbQtCDQudC+0LPQviDRgNC+0LfQutC+0LzQtdC90YLRg9Cy0LDRgtC4XHJcbiovXHJcblxyXG4vLyDQo9Cy0ZbQvNC60L3Rg9GC0Lgv0LLQuNC80LrQvdGD0YLQuCBGTFMgKEZ1bGwgTG9nZ2luZyBTeXN0ZW0pICjQsiDRgNC+0LHQvtGC0ZYpXHJcbndpbmRvd1snRkxTJ10gPSB0cnVlO1xyXG5cclxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDQvtGB0L3QvtCy0L3QvtCz0L4g0YTQsNC50LvRgyDRgdGC0LjQu9GW0LJcclxuaW1wb3J0IFwiLi4vc2Nzcy9zdHlsZS5zY3NzXCI7XHJcblxyXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFJlYWN0ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gaW1wb3J0IEluZGV4IGZyb20gJy4vcmVhY3QvSW5kZXguanN4JztcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8g0KTRg9C90LrRhtGW0L7QvdCw0LsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuaW1wb3J0ICogYXMgZmxzRnVuY3Rpb25zIGZyb20gXCIuL2ZpbGVzL2Z1bmN0aW9ucy5qc1wiO1xyXG5cclxuLyog0J/QtdGA0LXQstGW0YDQutCwINC/0ZbQtNGC0YDQuNC80LrQuCB3ZWJwLCDQtNC+0LTQsNCy0LDQvdC90Y8g0LrQu9Cw0YHRgyB3ZWJwINCw0LHQviBuby13ZWJwINC00LvRjyBIVE1MICovXHJcbi8qIChpKSDQvdC10L7QsdGF0ZbQtNC90L4g0LTQu9GPINC60L7RgNC10LrRgtC90L7Qs9C+INCy0ZbQtNC+0LHRgNCw0LbQtdC90L3RjyB3ZWJwINGW0LcgY3NzICovXHJcbmZsc0Z1bmN0aW9ucy5pc1dlYnAoKTtcclxuLyog0JTQvtC00LDQstCw0L3QvdGPINC60LvQsNGB0YMgdG91Y2gg0LTQu9GPIEhUTUwg0Y/QutGJ0L4g0LHRgNCw0YPQt9C10YAg0LzQvtCx0ZbQu9GM0L3QuNC5ICovXHJcbi8vIGZsc0Z1bmN0aW9ucy5hZGRUb3VjaENsYXNzKCk7XHJcbi8qINCU0L7QtNCw0LLQsNC90L3RjyBsb2FkZWQg0LTQu9GPIEhUTUwg0L/RltGB0LvRjyDQv9C+0LLQvdC+0LPQviDQt9Cw0LLQsNC90YLQsNC20LXQvdC90Y8g0YHRgtC+0YDRltC90LrQuCAqL1xyXG4vLyBmbHNGdW5jdGlvbnMuYWRkTG9hZGVkQ2xhc3MoKTtcclxuLyog0JzQvtC00YPQu9GMINC00LvRjyDRgNC+0LHQvtGC0Lgg0Lcg0LzQtdC90Y4gKNCR0YPRgNCz0LXRgCkgKi9cclxuZmxzRnVuY3Rpb25zLm1lbnVJbml0KCk7XHJcbi8qINCS0YDQsNGF0L7QstGD0LLQsNC90L3RjyDQv9C70LDQstCw0Y7Rh9C+0Zcg0L/QsNC90LXQu9GWINC90LAg0LzQvtCx0ZbQu9GM0L3QuNGFINC/0YDQuNGB0YLRgNC+0Y/RhSDQv9GA0LggMTAwdmggKi9cclxuLy8gZmxzRnVuY3Rpb25zLmZ1bGxWSGZpeCgpO1xyXG4vKiDQpNC+0YDQvNCw0YLRg9Cy0LDQvdC90Y8g0YfQuNGB0LXQuyAqL1xyXG4vLyBpbXBvcnQgJy4vbGlicy93TnVtYi5taW4uanMnO1xyXG5cclxuLypcclxu0JzQvtC00YPQu9GMIFwi0KHQv9C+0LnQu9C10YDQuFwiXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjzogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL21vZHVsLXNwb2psZXJ5Lmh0bWxcclxu0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBzcG9sbGVyc1xyXG4qL1xyXG4vLyBmbHNGdW5jdGlvbnMuc3BvbGxlcnMoKTtcclxuXHJcbi8qXHJcbtCc0L7QtNGD0LvRjCBcItCi0LDQsdC4XCJcclxu0JTQvtC60YPQvNC10L3RgtCw0YbRltGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvbW9kdWwtdGFieS5odG1sXHJcbtCh0L3RltC/0L/QtdGCIChIVE1MKTogdGFic1xyXG4qL1xyXG4vL2Zsc0Z1bmN0aW9ucy50YWJzKCk7XHJcblxyXG4vKlxyXG7QnNC+0LTRg9C70YwgXCLQn9C+0LrQsNC30LDRgtC4INGJ0LVcIlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y86IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tb2R1bC1wb2themF0LWVzaGhqby5odG1sXHJcbtCh0L3RltC/0L/QtdGCIChIVE1MKTogc2hvd21vcmVcclxuKi9cclxuLy8gZmxzRnVuY3Rpb25zLnNob3dNb3JlKCk7XHJcblxyXG4vKlxyXG7QnNC+0LTRg9C70YwgXCLQlNC+L9Cf0ZbRgdC70Y9cIlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y86IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tb2R1bC1kby1waXNsaWEuaHRtbFxyXG7QodC90ZbQv9C/0LXRgiAoSFRNTCk6IGJhXHJcbiovXHJcbi8vIGltcG9ydCAnLi9saWJzL2JlZm9yZWFmdGVyLmpzJztcclxuXHJcbi8qXHJcbtCc0L7QtNGD0LvRjCBcItCV0YTQtdC60YIg0YXQstC40LvRjFwiXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0LjRjzogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL21vZHVsLXJpcHBsZS1lZmZlY3QuaHRtbFxyXG7QodC90LjQv9C/0LXRgiAoSFRNTCk6XHJcbiovXHJcbi8vIGZsc0Z1bmN0aW9ucy5yaXBwbGVFZmZlY3QoKTtcclxuXHJcbi8qXHJcbtCc0L7QtNGD0LvRjCBcItCa0LDRgdGC0L7QvNC90LjQuSDQutGD0YDRgdC+0YBcIlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtC40Y86XHJcbtCh0L3QuNC/0L/QtdGCIChIVE1MKTpcclxuKi9cclxuLy8gZmxzRnVuY3Rpb25zLmN1c3RvbUN1cnNvcih0cnVlKTtcclxuXHJcbi8qXHJcbtCc0L7QtNGD0LvRjCBcItCf0L7Qv9Cw0L/QuFwiXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjzogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL2Z1bmtjaW9uYWwtcG9wdXAuaHRtbFxyXG7QodC90ZbQv9C/0LXRgiAoSFRNTCk6IHBsLCBwb3BcclxuKi9cclxuaW1wb3J0ICcuL2xpYnMvcG9wdXAuanMnXHJcblxyXG4vKlxyXG7QnNC+0LTRg9C70Ywg0L/QsNGA0LDQu9Cw0LrRgdGDINC80LjRiNC10Y5cclxu0JTQvtC60YPQvNC10L3RgtCw0YbRltGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvbW9kdWwtYW5pbWFjaWktcGFyYWxsYWtzLW9iZWt0b3YtcHJpLWR2aXpoZW5paS1teXNoaS5odG1sXHJcbiovXHJcbi8vIGltcG9ydCAnLi9saWJzL3BhcmFsbGF4LW1vdXNlLmpzJ1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8g0KDQvtCx0L7RgtCwINC3INGE0L7RgNC80LDQvNC4ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmltcG9ydCAqIGFzIGZsc0Zvcm1zIGZyb20gXCIuL2ZpbGVzL2Zvcm1zL2Zvcm1zLmpzXCI7XHJcblxyXG4vKiDQoNC+0LHQvtGC0LAg0Lcg0L/QvtC70Y/QvNC4INGE0L7RgNC80LggKi9cclxuLyog0JTQvtC60YPQvNC10L3RgtCw0YbRltGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvcmFib3RhLXMtZm9ybWFtaS5odG1sICovXHJcbi8qXHJcbmZsc0Zvcm1zLmZvcm1GaWVsZHNJbml0KHtcclxuXHR2aWV3UGFzczogZmFsc2UsXHJcblx0YXV0b0hlaWdodDogZmFsc2VcclxufSk7XHJcbiovXHJcbi8qINCd0LDQtNGB0LjQu9Cw0L3QvdGPINGE0L7RgNC80LggKi9cclxuLyog0JTQvtC60YPQvNC10L3RgtCw0YbRltGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvcmFib3RhLXMtZm9ybWFtaS5odG1sICovXHJcbi8vIGZsc0Zvcm1zLmZvcm1TdWJtaXQoKTtcclxuXHJcbi8qINCc0L7QtNGD0LvRjCDRhNC+0YDQvNC4IFwi0LrRltC70YzQutGW0YHRgtGMXCIgKi9cclxuLy8gZmxzRm9ybXMuZm9ybVF1YW50aXR5KCk7XHJcblxyXG4vKiDQnNC+0LTRg9C70Ywg0LfRltGA0LrQvtCy0L7Qs9C+INGA0LXQudGC0LjQvdCz0YMgKi9cclxuLy8gZmxzRm9ybXMuZm9ybVJhdGluZygpO1xyXG5cclxuLyog0JzQvtC00YPQu9GMINGA0L7QsdC+0YLQuCDQtyBzZWxlY3QuICovXHJcbi8vIGltcG9ydCAnLi9saWJzL3NlbGVjdC5qcydcclxuXHJcbi8qINCc0L7QtNGD0LvRjCDRgNC+0LHQvtGC0Lgg0Lcg0LrQsNC70LXQvdC00LDRgNC10LwgKi9cclxuLy8gaW1wb3J0ICcuL2ZpbGVzL2Zvcm1zL2RhdGVwaWNrZXIuanMnXHJcblxyXG4vKiAo0KMg0YDQvtCx0L7RgtGWKSDQnNC+0LTRg9C70Ywg0YDQvtCx0L7RgtC4INC3INC80LDRgdC60LDQvNC4LiovXHJcbi8qXHJcbtCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YLQsCDQvdCw0LvQsNGI0YLRg9Cy0LDQvdC90Y8g0LLQuNC60L7QvdGD0ZTRgtGM0YHRjyDRgyDRhNCw0LnQu9GWIGpzL2ZpbGVzL2Zvcm1zL2lucHV0bWFzay5qc1xyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y8g0L/QviDRgNC+0LHQvtGC0ZYg0YMg0YjQsNCx0LvQvtC90ZY6XHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjyDQv9C70LDQs9GW0L3QsDogaHR0cHM6Ly9naXRodWIuY29tL1JvYmluSGVyYm90cy9pbnB1dG1hc2tcclxu0KHQvdGW0L/Qv9C10YIoSFRNTCk6XHJcbiovXHJcbi8vIGltcG9ydCBcIi4vZmlsZXMvZm9ybXMvaW5wdXRtYXNrLmpzXCI7XHJcblxyXG4vKiDQnNC+0LTRg9C70Ywg0YDQvtCx0L7RgtC4INC3INC/0L7QstC30YPQvdC60L7QvCAqL1xyXG4vKlxyXG7Qn9GW0LTQutC70Y7Rh9C10L3QvdGPINGC0LAg0L3QsNC70LDRiNGC0YPQstCw0L3QvdGPINCy0LjQutC+0L3Rg9GU0YLRjNGB0Y8g0YMg0YTQsNC50LvRliBqcy9maWxlcy9mb3Jtcy9yYW5nZS5qc1xyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y8g0L/QviDRgNC+0LHQvtGC0ZYg0YMg0YjQsNCx0LvQvtC90ZY6XHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjyDQv9C70LDQs9GW0L3QsDogaHR0cHM6Ly9yZWZyZXNobGVzcy5jb20vbm91aXNsaWRlci9cclxu0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiByYW5nZVxyXG4qL1xyXG4vLyBpbXBvcnQgXCIuL2ZpbGVzL2Zvcm1zL3JhbmdlLmpzXCI7XHJcblxyXG4vKiDQnNC+0LTRg9C70Ywg0YDQvtCx0L7RgtC4INC3INC/0ZbQtNC60LDQt9C60LDQvNC4ICh0aXBweSkgKi9cclxuLypcclxu0J/RltC00LrQu9GO0YfQtdC90L3RjyDQv9C70LDQs9GW0L3QsCBUaXBweS5qcyDRgtCwINC90LDQu9Cw0YjRgtGD0LLQsNC90L3RjyDQstC40LrQvtC90YPRlNGC0YzRgdGPINGDINGE0LDQudC70ZYganMvZmlsZXMvdGlwcHkuanNcclxu0JTQvtC60YPQvNC10L3RgtCw0YbRltGPINC/0L4g0YDQvtCx0L7RgtGWINGDINGI0LDQsdC70L7QvdGWOlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y8g0L/Qu9Cw0LPRltC90LA6IGh0dHBzOi8vYXRvbWlrcy5naXRodWIuaW8vdGlwcHlqcy9cclxu0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiB0aXAgKNC00L7QtNCw0ZQg0LDRgtGA0LjQsdGD0YIg0Lcg0L/RltC00LrQsNC30LrQvtGOINC00LvRjyBodG1sINGC0LXQs9CwKVxyXG4qL1xyXG4vLyBpbXBvcnQgXCIuL2ZpbGVzL3RpcHB5LmpzXCI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDQoNC+0LHQvtGC0LAg0LfRliDRgdC70LDQudC00LXRgNC+0LwgKFN3aXBlcikgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLypcclxu0J3QsNC70LDRiNGC0YPQstCw0L3QvdGPINC/0ZbQtNC60LvRjtGH0LXQvdC90Y8g0L/Qu9Cw0LPRltC90LAg0YHQu9Cw0LnQtNC10YDQsCBTd2lwZXIg0YLQsCDQvdC+0LLQuNGFINGB0LvQsNC50LTQtdGA0ZbQsiDQstC40LrQvtC90YPRlNGC0YzRgdGPINGDINGE0LDQudC70ZYganMvZmlsZXMvc2xpZGVycy5qc1xyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y8g0L/QviDRgNC+0LHQvtGC0ZYg0YMg0YjQsNCx0LvQvtC90ZY6IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9yYWJvdGEtc28tc2xhamRlcm9tLXN3aXBlci5odG1sXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjyDQv9C70LDQs9GW0L3QsDogaHR0cHM6Ly9zd2lwZXJqcy5jb20vXHJcbtCh0L3RltC/0L/QtdGCKEhUTUwpOiBzd2lwZXJcclxuKi9cclxuaW1wb3J0IFwiLi9maWxlcy9zbGlkZXJzLmpzXCI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDQnNC+0LTRg9C70ZYg0YDQvtCx0L7RgtC4INC3INC/0YDQvtC60YDRg9GH0YPQstCw0L3QvdGP0Lwg0YHRgtC+0YDRltC90LrQuCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLypcclxu0JfQvNGW0L3QsCDQtNC40LfQsNC50L3RgyDRgdC60YDQvtC70LvQsdCw0YDRg1xyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y8g0L/QviDRgNC+0LHQvtGC0ZYg0YMg0YjQsNCx0LvQvtC90ZY6INCjIEhUTUwg0LTQvtC00LDRlNC80L4g0LTQviDQsdC70L7QutGDINCw0YLRgNC40LHRg9GCIGRhdGEtc2ltcGxlYmFyXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjyDQv9C70LDQs9GW0L3QsDogaHR0cHM6Ly9naXRodWIuY29tL0dyc210by9zaW1wbGViYXIvdHJlZS9tYXN0ZXIvcGFja2FnZXMvc2ltcGxlYmFyXHJcbtCh0L3RltC/0L/QtdGCKEhUTUwpOiBcclxuKi9cclxuLy8gaW1wb3J0ICcuL2ZpbGVzL3Njcm9sbC9zaW1wbGViYXIuanMnO1xyXG5cclxuLy8g0JvRltC90LjQstC1ICjQstGW0LTQutC70LDQtNC10L3QtSkg0LfQsNCy0LDQvdGC0LDQttC10L3QvdGPINC60LDRgNGC0LjQvdC+0LpcclxuLy8g0JTQvtC60YPQvNC10L3RgtCw0YbRltGPINC/0L4g0YDQvtCx0L7RgtGWINGDINGI0LDQsdC70L7QvdGWOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvbW9kdWwtbGVuaXZheWEtcG9kZ3J1emthLWxhenktbG9hZGluZy5odG1sXHJcbi8vINCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjyDQv9C70LDQs9GW0L3QsDogaHR0cHM6Ly9naXRodWIuY29tL3Zlcmxvay92YW5pbGxhLWxhenlsb2FkXHJcbi8vINCh0L3RltC/0L/QtdGCKEhUTUwpOlxyXG4vLyBpbXBvcnQgJy4vZmlsZXMvc2Nyb2xsL2xhenlsb2FkLmpzJztcclxuXHJcbi8vINCh0L/QvtGB0YLQtdGA0ZbQs9Cw0Ycg0LfQsCDQvtCxJ9GU0LrRgtCw0LzQuCDQtyDQsNGC0YDQuNCx0YPRgtC+0LwgZGF0YS13YXRjaFxyXG4vLyDQlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y86IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tb2R1bC1uYWJsanVkYXRlbC16YS1wb3lhdmxlbmllbS1lbGVtZW50YS1wcmktc2tyb2xsZS5odG1sXHJcbi8vINCh0L3RltC/0L/QtdGCKEhUTUwpOlxyXG4vLyBpbXBvcnQgJy4vbGlicy93YXRjaGVyLmpzJ1xyXG5cclxuLy8g0JzQvtC00YPQu9GMINC/0L7QtdC60YDQsNC90L3QvtGXINC/0YDQvtC60YDRg9GC0LrQuFxyXG4vLyDQlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y86IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tb2R1bC1wb2VrcmFubm9qLXByb2tydXRraS1zdHJhbmljeS1mdWxscGFnZS5odG1sXHJcbi8vINCh0L3RltC/0L/QtdGCKEhUTUwpOlxyXG4vLyBpbXBvcnQgJy4vbGlicy9mdWxscGFnZS5qcydcclxuXHJcbi8vINCc0L7QtNGD0LvRjCDQv9Cw0YDQsNC70LDQutGB0YNcclxuLy8g0JTQvtC60YPQvNC10L3RgtCw0YbRltGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvcGFyYWxha3MtcHJpLXNrcm9saS5odG1sXHJcbi8vINCh0L3RltC/0L/QtdGCKEhUTUwpOlxyXG4vLyBpbXBvcnQgJy4vbGlicy9wYXJhbGxheC5qcydcclxuXHJcbi8vINCk0YPQvdC60YbRltGXINGA0L7QsdC+0YLQuCDRgdC60YDQvtC70L7QvFxyXG5pbXBvcnQgKiBhcyBmbHNTY3JvbGwgZnJvbSBcIi4vZmlsZXMvc2Nyb2xsL3Njcm9sbC5qc1wiO1xyXG5cclxuLy8g0J/Qu9Cw0LLQvdCwINC90LDQstGW0LPQsNGG0ZbRjyDQv9C+INGB0YLQvtGA0ZbQvdGG0ZZcclxuLy8g0JTQvtC60YPQvNC10L3RgtCw0YbRltGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvbW9kdWwtcGxhdm5vai1uYXZpZ2FjaWktcG8tc3RyYW5pY2UuaHRtbFxyXG4vLyBmbHNTY3JvbGwucGFnZU5hdmlnYXRpb24oKTtcclxuXHJcbi8vINCk0YPQvdC60YbRltC+0L3QsNC7INC00L7QtNCw0LLQsNC90L3RjyDQutC70LDRgdGW0LIg0LTQviDRhdC10LTQtdGA0YMg0L/RltC0INGH0LDRgSDQv9GA0L7QutGA0YPRh9GD0LLQsNC90L3Rj1xyXG4vLyDQlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y86IGh0dHBzOi8vdGVtcGxhdGUuZmxzLmd1cnUvdGVtcGxhdGUtZG9jcy9tb2R1bC1kb2Jhdmxlbml5YS1rbGFzc292LWstc2hhcGtlLXByaS1wcm9rcnV0a2Utc3RyYW5pY3kuaHRtbFxyXG4vLyBmbHNTY3JvbGwuaGVhZGVyU2Nyb2xsKCk7XHJcblxyXG4vLyDQnNC+0LTRg9C70Ywg0LDQvdGW0LzQsNGG0ZbRjyDRhtC40YTRgNC+0LLQvtCz0L4g0LvRltGH0LjQu9GM0L3QuNC60LBcclxuLy8g0JTQvtC60YPQvNC10L3RgtCw0YbRltGPOiBodHRwczovL3RlbXBsYXRlLmZscy5ndXJ1L3RlbXBsYXRlLWRvY3MvbW9kdWwtYW5pbWFjaWktY2lmcm92b2dvLWxpY2hpbG5pa2EuaHRtbFxyXG4vLyDQodC90ZbQv9C/0LXRgihIVE1MKTpcclxuLy8gZmxzU2Nyb2xsLmRpZ2l0c0NvdW50ZXIoKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vINCT0LDQu9C10YDQtdGPID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8qXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjyDQv9C+INGA0L7QsdC+0YLRliDRgyDRiNCw0LHQu9C+0L3RljogXHJcbtCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjyDQv9C70LDQs9GW0L3QsDogaHR0cHM6Ly93d3cubGlnaHRnYWxsZXJ5anMuY29tL2RvY3MvXHJcbtCh0L3RltC/0L/QtdGCKEhUTUwpOlxyXG4qL1xyXG4vLyBpbXBvcnQgXCIuL2ZpbGVzL2dhbGxlcnkuanNcIjtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vINCc0LDRgdC+0L3RgNGWINGB0ZbRgtC60LAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLypcclxu0JTQvtC60YPQvNC10L3RgtCw0YbRltGPINC/0L4g0YDQvtCx0L7RgtGWINGDINGI0LDQsdC70L7QvdGWOlxyXG7QlNC+0LrRg9C80LXQvdGC0LDRhtGW0Y8g0L/Qu9Cw0LPRltC90LA6IFxyXG7QodC90ZbQv9C/0LXRgihIVE1MKTpcclxuKi9cclxuLy8gaW1wb3J0IFwiLi9maWxlcy9pc290b3BlLmpzXCI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDQhtC90YjRliDQv9C70LDQs9GW0L3QuCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8qINCU0LjQvdCw0LzRltGH0L3QuNC5INCw0LTQsNC/0YLQuNCyICovXHJcbi8vINCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjzogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL2RpbmFtaWNoZXNraWotYWRhcHRpdi5odG1sXHJcbi8vIGltcG9ydCBcIi4vbGlicy9keW5hbWljX2FkYXB0LmpzXCI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDQhtC90YjQtSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vKiDQn9GW0LTQutC70Y7Rh9Cw0ZTQvNC+INGE0LDQudC70Lgg0LfRliDRgdCy0L7Rl9C8INC60L7QtNC+0LwgKi9cclxuaW1wb3J0IFwiLi9maWxlcy9zY3JpcHQuanNcIjtcclxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4iLCIvLyDQnNC+0LTRg9C70Ywg0L/QvtC/0LDQv9GW0LJcclxuLy8gKGMpINCk0YDRltC70LDQvdGB0LXRgCDQv9C+INC20LjRgtGC0Y4sIFwi0KXQvNGD0YDRi9C5INCa0L7RglwiXHJcbi8vINCU0L7QutGD0LzQtdC90YLQsNGG0ZbRjyDQv9C+INGA0L7QsdC+0YLRliDRgyDRiNCw0LHQu9C+0L3RljogaHR0cHM6Ly90ZW1wbGF0ZS5mbHMuZ3VydS90ZW1wbGF0ZS1kb2NzL2Z1bmtjaW9uYWwtcG9wdXAuaHRtbFxyXG4vLyDQodC90ZbQv9C/0LXRgiAoSFRNTCk6IHBsXHJcblxyXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGE0YPQvdC60YbRltC+0L3QsNC70YMgXCLQp9C+0YDRgtC+0LPQuCDQpNGA0ZbQu9Cw0L3RgdC10YDQsFwiXHJcbmltcG9ydCB7IGlzTW9iaWxlLCBib2R5TG9ja1N0YXR1cywgYm9keUxvY2ssIGJvZHlVbmxvY2ssIGJvZHlMb2NrVG9nZ2xlLCBGTFMgfSBmcm9tIFwiLi4vZmlsZXMvZnVuY3Rpb25zLmpzXCI7XHJcbmltcG9ydCB7IGZsc01vZHVsZXMgfSBmcm9tIFwiLi4vZmlsZXMvbW9kdWxlcy5qc1wiO1xyXG5cclxuLy8g0JrQu9Cw0YEgUG9wdXBcclxuY2xhc3MgUG9wdXAge1xyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuXHRcdGxldCBjb25maWcgPSB7XHJcblx0XHRcdGxvZ2dpbmc6IHRydWUsXHJcblx0XHRcdGluaXQ6IHRydWUsXHJcblx0XHRcdC8v0JTQu9GPINC60L3QvtC/0L7QulxyXG5cdFx0XHRhdHRyaWJ1dGVPcGVuQnV0dG9uOiAnZGF0YS1wb3B1cCcsIC8vINCQ0YLRgNC40LHRg9GCINC00LvRjyDQutC90L7Qv9C60LgsINGP0LrQsCDQstC40LrQu9C40LrQsNGUINC/0L7Qv9Cw0L9cclxuXHRcdFx0YXR0cmlidXRlQ2xvc2VCdXR0b246ICdkYXRhLWNsb3NlJywgLy8g0JDRgtGA0LjQsdGD0YIg0LTQu9GPINC60L3QvtC/0LrQuCwg0YnQviDQt9Cw0LrRgNC40LLQsNGUINC/0L7Qv9Cw0L9cclxuXHRcdFx0Ly8g0JTQu9GPINGB0YLQvtGA0L7QvdC90ZbRhSDQvtCxJ9GU0LrRgtGW0LJcclxuXHRcdFx0Zml4RWxlbWVudFNlbGVjdG9yOiAnW2RhdGEtbHBdJywgLy8g0JDRgtGA0LjQsdGD0YIg0LTQu9GPINC10LvQtdC80LXQvdGC0ZbQsiDRltC3INC70ZbQstC40Lwg0L/QsNC00LTQuNC90LPQvtC8ICjRj9C60ZYgZml4ZWQpXHJcblx0XHRcdC8vINCU0LvRjyDQvtCxJ9GU0LrRgtGDINC/0L7Qv9Cw0L/QsFxyXG5cdFx0XHR5b3V0dWJlQXR0cmlidXRlOiAnZGF0YS1wb3B1cC15b3V0dWJlJywgLy8g0JDRgtGA0LjQsdGD0YIg0LTQu9GPINC60L7QtNGDIHlvdXR1YmVcclxuXHRcdFx0eW91dHViZVBsYWNlQXR0cmlidXRlOiAnZGF0YS1wb3B1cC15b3V0dWJlLXBsYWNlJywgLy8g0JDRgtGA0LjQsdGD0YIg0LTQu9GPINCy0YHRgtCw0LLQutC4INGA0L7Qu9C40LrQsCB5b3V0dWJlXHJcblx0XHRcdHNldEF1dG9wbGF5WW91dHViZTogdHJ1ZSxcclxuXHRcdFx0Ly8g0JfQvNGW0L3QsCDQutC70LDRgdGW0LJcclxuXHRcdFx0Y2xhc3Nlczoge1xyXG5cdFx0XHRcdHBvcHVwOiAncG9wdXAnLFxyXG5cdFx0XHRcdC8vIHBvcHVwV3JhcHBlcjogJ3BvcHVwX193cmFwcGVyJyxcclxuXHRcdFx0XHRwb3B1cENvbnRlbnQ6ICdwb3B1cF9fY29udGVudCcsXHJcblx0XHRcdFx0cG9wdXBBY3RpdmU6ICdwb3B1cF9zaG93JywgLy8g0JTQvtC00LDRlNGC0YzRgdGPINC00LvRjyDQv9C+0L/QsNC/0LAsINC60L7Qu9C4INCy0ZbQvSDQstGW0LTQutGA0LjQstCw0ZTRgtGM0YHRj1xyXG5cdFx0XHRcdGJvZHlBY3RpdmU6ICdwb3B1cC1zaG93JywgLy8g0JTQvtC00LDRlNGC0YzRgdGPINC00LvRjyDQsdC+0LTRliwg0LrQvtC70Lgg0L/QvtC/0LDQvyDQstGW0LTQutGA0LjRgtC40LlcclxuXHRcdFx0fSxcclxuXHRcdFx0Zm9jdXNDYXRjaDogdHJ1ZSwgLy8g0KTQvtC60YPRgSDRg9GB0LXRgNC10LTQuNC90ZYg0L/QvtC/0LDQv9CwINC30LDRhtC40LrQu9C10L3QuNC5XHJcblx0XHRcdGNsb3NlRXNjOiB0cnVlLCAvLyDQl9Cw0LrRgNC40YLRgtGPIEVTQ1xyXG5cdFx0XHRib2R5TG9jazogdHJ1ZSwgLy8g0JHQu9C+0LrRg9Cy0LDQvdC90Y8g0YHQutGA0L7Qu9C70LBcclxuXHRcdFx0aGFzaFNldHRpbmdzOiB7XHJcblx0XHRcdFx0bG9jYXRpb246IHRydWUsIC8vINCl0LXRiCDQsiDQsNC00YDQtdGB0L3QvtC80YMg0YDRj9C00LrRg1xyXG5cdFx0XHRcdGdvSGFzaDogdHJ1ZSwgLy8g0J/QtdGA0LXRhdGW0LQg0L/QviDQvdCw0Y/QstC90L7RgdGC0ZYg0LIg0LDQtNGA0LXRgdC90L7QvNGDINGA0Y/QtNC60YNcclxuXHRcdFx0fSxcclxuXHRcdFx0b246IHsgLy8g0J/QvtC00ZbRl1xyXG5cdFx0XHRcdGJlZm9yZU9wZW46IGZ1bmN0aW9uICgpIHsgfSxcclxuXHRcdFx0XHRhZnRlck9wZW46IGZ1bmN0aW9uICgpIHsgfSxcclxuXHRcdFx0XHRiZWZvcmVDbG9zZTogZnVuY3Rpb24gKCkgeyB9LFxyXG5cdFx0XHRcdGFmdGVyQ2xvc2U6IGZ1bmN0aW9uICgpIHsgfSxcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHRcdHRoaXMueW91VHViZUNvZGU7XHJcblx0XHR0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG5cdFx0Ly8g0J/QvtGC0L7Rh9C90LUg0LLRltC60L3QvlxyXG5cdFx0dGhpcy50YXJnZXRPcGVuID0ge1xyXG5cdFx0XHRzZWxlY3RvcjogZmFsc2UsXHJcblx0XHRcdGVsZW1lbnQ6IGZhbHNlLFxyXG5cdFx0fVxyXG5cdFx0Ly8g0J/QvtC/0LXRgNC10LTQvdGUINCy0ZbQtNC60YDQuNGC0LVcclxuXHRcdHRoaXMucHJldmlvdXNPcGVuID0ge1xyXG5cdFx0XHRzZWxlY3RvcjogZmFsc2UsXHJcblx0XHRcdGVsZW1lbnQ6IGZhbHNlLFxyXG5cdFx0fVxyXG5cdFx0Ly8g0J7RgdGC0LDQvdC90ZQg0LfQsNC60YDQuNGC0LVcclxuXHRcdHRoaXMubGFzdENsb3NlZCA9IHtcclxuXHRcdFx0c2VsZWN0b3I6IGZhbHNlLFxyXG5cdFx0XHRlbGVtZW50OiBmYWxzZSxcclxuXHRcdH1cclxuXHRcdHRoaXMuX2RhdGFWYWx1ZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5oYXNoID0gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy5fcmVvcGVuID0gZmFsc2U7XHJcblx0XHR0aGlzLl9zZWxlY3Rvck9wZW4gPSBmYWxzZTtcclxuXHJcblx0XHR0aGlzLmxhc3RGb2N1c0VsID0gZmFsc2U7XHJcblx0XHR0aGlzLl9mb2N1c0VsID0gW1xyXG5cdFx0XHQnYVtocmVmXScsXHJcblx0XHRcdCdpbnB1dDpub3QoW2Rpc2FibGVkXSk6bm90KFt0eXBlPVwiaGlkZGVuXCJdKTpub3QoW2FyaWEtaGlkZGVuXSknLFxyXG5cdFx0XHQnYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLFxyXG5cdFx0XHQnc2VsZWN0Om5vdChbZGlzYWJsZWRdKTpub3QoW2FyaWEtaGlkZGVuXSknLFxyXG5cdFx0XHQndGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKScsXHJcblx0XHRcdCdhcmVhW2hyZWZdJyxcclxuXHRcdFx0J2lmcmFtZScsXHJcblx0XHRcdCdvYmplY3QnLFxyXG5cdFx0XHQnZW1iZWQnLFxyXG5cdFx0XHQnW2NvbnRlbnRlZGl0YWJsZV0nLFxyXG5cdFx0XHQnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pJ1xyXG5cdFx0XTtcclxuXHRcdC8vdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihjb25maWcsIG9wdGlvbnMpO1xyXG5cdFx0dGhpcy5vcHRpb25zID0ge1xyXG5cdFx0XHQuLi5jb25maWcsXHJcblx0XHRcdC4uLm9wdGlvbnMsXHJcblx0XHRcdGNsYXNzZXM6IHtcclxuXHRcdFx0XHQuLi5jb25maWcuY2xhc3NlcyxcclxuXHRcdFx0XHQuLi5vcHRpb25zPy5jbGFzc2VzLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRoYXNoU2V0dGluZ3M6IHtcclxuXHRcdFx0XHQuLi5jb25maWcuaGFzaFNldHRpbmdzLFxyXG5cdFx0XHRcdC4uLm9wdGlvbnM/Lmhhc2hTZXR0aW5ncyxcclxuXHRcdFx0fSxcclxuXHRcdFx0b246IHtcclxuXHRcdFx0XHQuLi5jb25maWcub24sXHJcblx0XHRcdFx0Li4ub3B0aW9ucz8ub24sXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMuYm9keUxvY2sgPSBmYWxzZTtcclxuXHRcdHRoaXMub3B0aW9ucy5pbml0ID8gdGhpcy5pbml0UG9wdXBzKCkgOiBudWxsXHJcblx0fVxyXG5cdGluaXRQb3B1cHMoKSB7XHJcblx0XHR0aGlzLnBvcHVwTG9nZ2luZyhg0J/RgNC+0LrQuNC90YPQstGB0Y9gKTtcclxuXHRcdHRoaXMuZXZlbnRzUG9wdXAoKTtcclxuXHR9XHJcblx0ZXZlbnRzUG9wdXAoKSB7XHJcblx0XHQvLyDQmtC70ZbQuiDQv9C+INCy0YHRjNC+0LzRgyDQtNC+0LrRg9C80LXQvdGC0ZZcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHQvLyDQmtC70ZbQuiDQv9C+INC60L3QvtC/0YbRliBcItCy0ZbQtNC60YDQuNGC0LhcIlxyXG5cdFx0XHRjb25zdCBidXR0b25PcGVuID0gZS50YXJnZXQuY2xvc2VzdChgWyR7dGhpcy5vcHRpb25zLmF0dHJpYnV0ZU9wZW5CdXR0b259XWApO1xyXG5cdFx0XHRpZiAoYnV0dG9uT3Blbikge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR0aGlzLl9kYXRhVmFsdWUgPSBidXR0b25PcGVuLmdldEF0dHJpYnV0ZSh0aGlzLm9wdGlvbnMuYXR0cmlidXRlT3BlbkJ1dHRvbikgP1xyXG5cdFx0XHRcdFx0YnV0dG9uT3Blbi5nZXRBdHRyaWJ1dGUodGhpcy5vcHRpb25zLmF0dHJpYnV0ZU9wZW5CdXR0b24pIDpcclxuXHRcdFx0XHRcdCdlcnJvcic7XHJcblx0XHRcdFx0dGhpcy55b3VUdWJlQ29kZSA9IGJ1dHRvbk9wZW4uZ2V0QXR0cmlidXRlKHRoaXMub3B0aW9ucy55b3V0dWJlQXR0cmlidXRlKSA/XHJcblx0XHRcdFx0XHRidXR0b25PcGVuLmdldEF0dHJpYnV0ZSh0aGlzLm9wdGlvbnMueW91dHViZUF0dHJpYnV0ZSkgOlxyXG5cdFx0XHRcdFx0bnVsbDtcclxuXHRcdFx0XHRpZiAodGhpcy5fZGF0YVZhbHVlICE9PSAnZXJyb3InKSB7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuaXNPcGVuKSB0aGlzLmxhc3RGb2N1c0VsID0gYnV0dG9uT3BlbjtcclxuXHRcdFx0XHRcdHRoaXMudGFyZ2V0T3Blbi5zZWxlY3RvciA9IGAke3RoaXMuX2RhdGFWYWx1ZX1gO1xyXG5cdFx0XHRcdFx0dGhpcy5fc2VsZWN0b3JPcGVuID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRoaXMub3BlbigpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFx0XHR9IGVsc2UgdGhpcy5wb3B1cExvZ2dpbmcoYNCZ0L7QuSwg0L3QtSDQt9Cw0L/QvtCy0L3QtdC90L4g0LDRgtGA0LjQsdGD0YIg0YMgJHtidXR0b25PcGVuLmNsYXNzTGlzdH1gKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vINCX0LDQutGA0LjRgtGC0Y8g0L3QsCDQv9C+0YDQvtC20L3RjNC+0LzRgyDQvNGW0YHRhtGWIChwb3B1cF9fd3JhcHBlcikg0YLQsCDQutC90L7Qv9C60Lgg0LfQsNC60YDQuNGC0YLRjyAocG9wdXBfX2Nsb3NlKSDQtNC70Y8g0LfQsNC60YDQuNGC0YLRj1xyXG5cdFx0XHRjb25zdCBidXR0b25DbG9zZSA9IGUudGFyZ2V0LmNsb3Nlc3QoYFske3RoaXMub3B0aW9ucy5hdHRyaWJ1dGVDbG9zZUJ1dHRvbn1dYCk7XHJcblx0XHRcdGlmIChidXR0b25DbG9zZSB8fCAhZS50YXJnZXQuY2xvc2VzdChgLiR7dGhpcy5vcHRpb25zLmNsYXNzZXMucG9wdXBDb250ZW50fWApICYmIHRoaXMuaXNPcGVuKSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdHRoaXMuY2xvc2UoKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdH0uYmluZCh0aGlzKSk7XHJcblx0XHQvLyDQl9Cw0LrRgNC40YLRgtGPIEVTQ1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0aWYgKHRoaXMub3B0aW9ucy5jbG9zZUVzYyAmJiBlLndoaWNoID09IDI3ICYmIGUuY29kZSA9PT0gJ0VzY2FwZScgJiYgdGhpcy5pc09wZW4pIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0dGhpcy5jbG9zZSgpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5vcHRpb25zLmZvY3VzQ2F0Y2ggJiYgZS53aGljaCA9PSA5ICYmIHRoaXMuaXNPcGVuKSB7XHJcblx0XHRcdFx0dGhpcy5fZm9jdXNDYXRjaChlKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdH0uYmluZCh0aGlzKSlcclxuXHJcblx0XHQvLyDQktGW0LTQutGA0LjRgtGC0Y8g0L/QviDRhdC10YjRg1xyXG5cdFx0aWYgKHRoaXMub3B0aW9ucy5oYXNoU2V0dGluZ3MuZ29IYXNoKSB7XHJcblx0XHRcdC8vINCf0LXRgNC10LLRltGA0LrQsCDQt9C80ZbQvdC4INCw0LTRgNC10YHQvdC+0LPQviDRgNGP0LTQutCwXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCkge1xyXG5cdFx0XHRcdFx0dGhpcy5fb3BlblRvSGFzaCgpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmNsb3NlKHRoaXMudGFyZ2V0T3Blbi5zZWxlY3Rvcik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LmJpbmQodGhpcykpXHJcblxyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcclxuXHRcdFx0XHRcdHRoaXMuX29wZW5Ub0hhc2goKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0uYmluZCh0aGlzKSlcclxuXHRcdH1cclxuXHR9XHJcblx0b3BlbihzZWxlY3RvclZhbHVlKSB7XHJcblx0XHRpZiAoYm9keUxvY2tTdGF0dXMpIHtcclxuXHRcdFx0Ly8g0K/QutGJ0L4g0L/QtdGA0LXQtCDQstGW0LTQutGA0LjRgtGC0Y/QvCDQv9C+0L/QsNC/0LAg0LHRg9CyINGA0LXQttC40LwgbG9ja1xyXG5cdFx0XHR0aGlzLmJvZHlMb2NrID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbG9jaycpICYmICF0aGlzLmlzT3BlbiA/IHRydWUgOiBmYWxzZTtcclxuXHJcblx0XHRcdC8vINCv0LrRidC+INCy0LLQtdGB0YLQuCDQt9C90LDRh9C10L3QvdGPINGB0LXQu9C10LrRgtC+0YDQsCAo0YHQtdC70LXQutGC0L7RgCDQvdCw0YHRgtGA0L7RjtGU0YLRjNGB0Y8g0LIgb3B0aW9ucylcclxuXHRcdFx0aWYgKHNlbGVjdG9yVmFsdWUgJiYgdHlwZW9mIChzZWxlY3RvclZhbHVlKSA9PT0gXCJzdHJpbmdcIiAmJiBzZWxlY3RvclZhbHVlLnRyaW0oKSAhPT0gXCJcIikge1xyXG5cdFx0XHRcdHRoaXMudGFyZ2V0T3Blbi5zZWxlY3RvciA9IHNlbGVjdG9yVmFsdWU7XHJcblx0XHRcdFx0dGhpcy5fc2VsZWN0b3JPcGVuID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5pc09wZW4pIHtcclxuXHRcdFx0XHR0aGlzLl9yZW9wZW4gPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuY2xvc2UoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIXRoaXMuX3NlbGVjdG9yT3BlbikgdGhpcy50YXJnZXRPcGVuLnNlbGVjdG9yID0gdGhpcy5sYXN0Q2xvc2VkLnNlbGVjdG9yO1xyXG5cdFx0XHRpZiAoIXRoaXMuX3Jlb3BlbikgdGhpcy5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG5cclxuXHRcdFx0dGhpcy50YXJnZXRPcGVuLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMudGFyZ2V0T3Blbi5zZWxlY3Rvcik7XHJcblxyXG5cdFx0XHRpZiAodGhpcy50YXJnZXRPcGVuLmVsZW1lbnQpIHtcclxuXHRcdFx0XHQvLyBZb3VUdWJlXHJcblx0XHRcdFx0aWYgKHRoaXMueW91VHViZUNvZGUpIHtcclxuXHRcdFx0XHRcdGNvbnN0IGNvZGVWaWRlbyA9IHRoaXMueW91VHViZUNvZGU7XHJcblx0XHRcdFx0XHRjb25zdCB1cmxWaWRlbyA9IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke2NvZGVWaWRlb30/cmVsPTAmc2hvd2luZm89MCZhdXRvcGxheT0xYFxyXG5cdFx0XHRcdFx0Y29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcblx0XHRcdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdhbGxvd2Z1bGxzY3JlZW4nLCAnJyk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgYXV0b3BsYXkgPSB0aGlzLm9wdGlvbnMuc2V0QXV0b3BsYXlZb3V0dWJlID8gJ2F1dG9wbGF5OycgOiAnJztcclxuXHRcdFx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FsbG93JywgYCR7YXV0b3BsYXl9OyBlbmNyeXB0ZWQtbWVkaWFgKTtcclxuXHJcblx0XHRcdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCB1cmxWaWRlbyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLnRhcmdldE9wZW4uZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbJHt0aGlzLm9wdGlvbnMueW91dHViZVBsYWNlQXR0cmlidXRlfV1gKSkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCB5b3V0dWJlUGxhY2UgPSB0aGlzLnRhcmdldE9wZW4uZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3RleHQnKS5zZXRBdHRyaWJ1dGUoYCR7dGhpcy5vcHRpb25zLnlvdXR1YmVQbGFjZUF0dHJpYnV0ZX1gLCAnJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLnRhcmdldE9wZW4uZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbJHt0aGlzLm9wdGlvbnMueW91dHViZVBsYWNlQXR0cmlidXRlfV1gKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodGhpcy5vcHRpb25zLmhhc2hTZXR0aW5ncy5sb2NhdGlvbikge1xyXG5cdFx0XHRcdFx0Ly8g0J7RgtGA0LjQvNCw0L3QvdGPINGF0LXRiNGDINGC0LAg0LnQvtCz0L4g0LLQuNGB0YLQsNCy0LvQtdC90L3Rj1xyXG5cdFx0XHRcdFx0dGhpcy5fZ2V0SGFzaCgpO1xyXG5cdFx0XHRcdFx0dGhpcy5fc2V0SGFzaCgpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8g0JTQviDQstGW0LTQutGA0LjRgtGC0Y9cclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMub24uYmVmb3JlT3Blbih0aGlzKTtcclxuXHRcdFx0XHQvLyDQodGC0LLQvtGA0Y7RlNC80L4g0YHQstC+0Y4g0L/QvtC00ZbRjiDQv9GW0YHQu9GPINCy0ZbQtNC60YDQuNGC0YLRjyDQv9C+0L/QsNC/0LBcclxuXHRcdFx0XHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImJlZm9yZVBvcHVwT3BlblwiLCB7XHJcblx0XHRcdFx0XHRkZXRhaWw6IHtcclxuXHRcdFx0XHRcdFx0cG9wdXA6IHRoaXNcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KSk7XHJcblxyXG5cdFx0XHRcdHRoaXMudGFyZ2V0T3Blbi5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5vcHRpb25zLmNsYXNzZXMucG9wdXBBY3RpdmUpO1xyXG5cdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5jbGFzc2VzLmJvZHlBY3RpdmUpO1xyXG5cclxuXHRcdFx0XHRpZiAoIXRoaXMuX3Jlb3Blbikge1xyXG5cdFx0XHRcdFx0IXRoaXMuYm9keUxvY2sgPyBib2R5TG9jaygpIDogbnVsbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB0aGlzLl9yZW9wZW4gPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0dGhpcy50YXJnZXRPcGVuLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxuXHRcdFx0XHQvLyDQl9Cw0L/QsNC8J9GP0YLQsNGOINGG0LUg0LLRltC00YfQuNC90LXQvdC1INCy0ZbQutC90L4uINCS0L7QvdC+INCx0YPQtNC1INC+0YHRgtCw0L3QvdGW0Lwg0LLRltC00LrRgNC40YLQuNC8XHJcblx0XHRcdFx0dGhpcy5wcmV2aW91c09wZW4uc2VsZWN0b3IgPSB0aGlzLnRhcmdldE9wZW4uc2VsZWN0b3I7XHJcblx0XHRcdFx0dGhpcy5wcmV2aW91c09wZW4uZWxlbWVudCA9IHRoaXMudGFyZ2V0T3Blbi5lbGVtZW50O1xyXG5cclxuXHRcdFx0XHR0aGlzLl9zZWxlY3Rvck9wZW4gPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0dGhpcy5pc09wZW4gPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuX2ZvY3VzVHJhcCgpO1xyXG5cdFx0XHRcdH0sIDUwKTtcclxuXHJcblx0XHRcdFx0Ly8g0J/RltGB0LvRjyDQstGW0LTQutGA0LjRgtGC0Y9cclxuXHRcdFx0XHR0aGlzLm9wdGlvbnMub24uYWZ0ZXJPcGVuKHRoaXMpO1xyXG5cdFx0XHRcdC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdCy0L7RjiDQv9C+0LTRltGOINC/0ZbRgdC70Y8g0LLRltC00LrRgNC40YLRgtGPINC/0L7Qv9Cw0L/QsFxyXG5cdFx0XHRcdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiYWZ0ZXJQb3B1cE9wZW5cIiwge1xyXG5cdFx0XHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0XHRcdHBvcHVwOiB0aGlzXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSkpO1xyXG5cdFx0XHRcdHRoaXMucG9wdXBMb2dnaW5nKGDQktGW0LTQutGA0LjQsiDQv9C+0L/QsNC/YCk7XHJcblxyXG5cdFx0XHR9IGVsc2UgdGhpcy5wb3B1cExvZ2dpbmcoYNCZ0L7QuSwg0YLQsNC60L7Qs9C+INC/0L7Qv9Cw0L/RgyDQvdC10LzQsNGULiDQn9C10YDQtdCy0ZbRgNGC0LUg0LrQvtGA0LXQutGC0L3RltGB0YLRjCDQstCy0LXQtNC10L3QvdGPLiBgKTtcclxuXHRcdH1cclxuXHR9XHJcblx0Y2xvc2Uoc2VsZWN0b3JWYWx1ZSkge1xyXG5cdFx0aWYgKHNlbGVjdG9yVmFsdWUgJiYgdHlwZW9mIChzZWxlY3RvclZhbHVlKSA9PT0gXCJzdHJpbmdcIiAmJiBzZWxlY3RvclZhbHVlLnRyaW0oKSAhPT0gXCJcIikge1xyXG5cdFx0XHR0aGlzLnByZXZpb3VzT3Blbi5zZWxlY3RvciA9IHNlbGVjdG9yVmFsdWU7XHJcblx0XHR9XHJcblx0XHRpZiAoIXRoaXMuaXNPcGVuIHx8ICFib2R5TG9ja1N0YXR1cykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHQvLyDQlNC+INC30LDQutGA0LjRgtGC0Y9cclxuXHRcdHRoaXMub3B0aW9ucy5vbi5iZWZvcmVDbG9zZSh0aGlzKTtcclxuXHRcdC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdCy0L7RjiDQv9C+0LTRltGOINC/0LXRgNC10LQg0LfQsNC60YDQuNGC0YLRj9C8INC/0L7Qv9Cw0L/QsFxyXG5cdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJiZWZvcmVQb3B1cENsb3NlXCIsIHtcclxuXHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0cG9wdXA6IHRoaXNcclxuXHRcdFx0fVxyXG5cdFx0fSkpO1xyXG5cclxuXHRcdC8vIFlvdVR1YmVcclxuXHRcdGlmICh0aGlzLnlvdVR1YmVDb2RlKSB7XHJcblx0XHRcdGlmICh0aGlzLnRhcmdldE9wZW4uZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbJHt0aGlzLm9wdGlvbnMueW91dHViZVBsYWNlQXR0cmlidXRlfV1gKSlcclxuXHRcdFx0XHR0aGlzLnRhcmdldE9wZW4uZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbJHt0aGlzLm9wdGlvbnMueW91dHViZVBsYWNlQXR0cmlidXRlfV1gKS5pbm5lckhUTUwgPSAnJztcclxuXHRcdH1cclxuXHRcdHRoaXMucHJldmlvdXNPcGVuLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm9wdGlvbnMuY2xhc3Nlcy5wb3B1cEFjdGl2ZSk7XHJcblx0XHQvLyBhcmlhLWhpZGRlblxyXG5cdFx0dGhpcy5wcmV2aW91c09wZW4uZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuXHRcdGlmICghdGhpcy5fcmVvcGVuKSB7XHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3B0aW9ucy5jbGFzc2VzLmJvZHlBY3RpdmUpO1xyXG5cdFx0XHQhdGhpcy5ib2R5TG9jayA/IGJvZHlVbmxvY2soKSA6IG51bGw7XHJcblx0XHRcdHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHQvLyDQntGH0LjRidC10L3QvdGPINCw0LTRgNC10YHQvdC+0LPQviDRgNGP0LTQutCwXHJcblx0XHR0aGlzLl9yZW1vdmVIYXNoKCk7XHJcblx0XHRpZiAodGhpcy5fc2VsZWN0b3JPcGVuKSB7XHJcblx0XHRcdHRoaXMubGFzdENsb3NlZC5zZWxlY3RvciA9IHRoaXMucHJldmlvdXNPcGVuLnNlbGVjdG9yO1xyXG5cdFx0XHR0aGlzLmxhc3RDbG9zZWQuZWxlbWVudCA9IHRoaXMucHJldmlvdXNPcGVuLmVsZW1lbnQ7XHJcblxyXG5cdFx0fVxyXG5cdFx0Ly8g0J/RltGB0LvRjyDQt9Cw0LrRgNC40YLRgtGPXHJcblx0XHR0aGlzLm9wdGlvbnMub24uYWZ0ZXJDbG9zZSh0aGlzKTtcclxuXHRcdC8vINCh0YLQstC+0YDRjtGU0LzQviDRgdCy0L7RjiDQv9C+0LTRltGOINC/0ZbRgdC70Y8g0LfQsNC60YDQuNGC0YLRjyDQv9C+0L/QsNC/0LBcclxuXHRcdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiYWZ0ZXJQb3B1cENsb3NlXCIsIHtcclxuXHRcdFx0ZGV0YWlsOiB7XHJcblx0XHRcdFx0cG9wdXA6IHRoaXNcclxuXHRcdFx0fVxyXG5cdFx0fSkpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR0aGlzLl9mb2N1c1RyYXAoKTtcclxuXHRcdH0sIDUwKTtcclxuXHJcblx0XHR0aGlzLnBvcHVwTG9nZ2luZyhg0JfQsNC60YDQuNCyINC/0L7Qv9Cw0L9gKTtcclxuXHR9XHJcblx0Ly8g0J7RgtGA0LjQvNCw0L3QvdGPINGF0LXRiNGDIFxyXG5cdF9nZXRIYXNoKCkge1xyXG5cdFx0aWYgKHRoaXMub3B0aW9ucy5oYXNoU2V0dGluZ3MubG9jYXRpb24pIHtcclxuXHRcdFx0dGhpcy5oYXNoID0gdGhpcy50YXJnZXRPcGVuLnNlbGVjdG9yLmluY2x1ZGVzKCcjJykgP1xyXG5cdFx0XHRcdHRoaXMudGFyZ2V0T3Blbi5zZWxlY3RvciA6IHRoaXMudGFyZ2V0T3Blbi5zZWxlY3Rvci5yZXBsYWNlKCcuJywgJyMnKVxyXG5cdFx0fVxyXG5cdH1cclxuXHRfb3BlblRvSGFzaCgpIHtcclxuXHRcdGxldCBjbGFzc0luSGFzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3dpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyl9YCkgPyBgLiR7d2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKX1gIDpcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHt3aW5kb3cubG9jYXRpb24uaGFzaH1gKSA/IGAke3dpbmRvdy5sb2NhdGlvbi5oYXNofWAgOlxyXG5cdFx0XHRcdG51bGw7XHJcblxyXG5cdFx0Y29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFske3RoaXMub3B0aW9ucy5hdHRyaWJ1dGVPcGVuQnV0dG9ufSA9IFwiJHtjbGFzc0luSGFzaH1cIl1gKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFske3RoaXMub3B0aW9ucy5hdHRyaWJ1dGVPcGVuQnV0dG9ufSA9IFwiJHtjbGFzc0luSGFzaH1cIl1gKSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFske3RoaXMub3B0aW9ucy5hdHRyaWJ1dGVPcGVuQnV0dG9ufSA9IFwiJHtjbGFzc0luSGFzaC5yZXBsYWNlKCcuJywgXCIjXCIpfVwiXWApO1xyXG5cclxuXHRcdHRoaXMueW91VHViZUNvZGUgPSBidXR0b25zLmdldEF0dHJpYnV0ZSh0aGlzLm9wdGlvbnMueW91dHViZUF0dHJpYnV0ZSkgP1xyXG5cdFx0XHRidXR0b25zLmdldEF0dHJpYnV0ZSh0aGlzLm9wdGlvbnMueW91dHViZUF0dHJpYnV0ZSkgOlxyXG5cdFx0XHRudWxsO1xyXG5cclxuXHRcdGlmIChidXR0b25zICYmIGNsYXNzSW5IYXNoKSB0aGlzLm9wZW4oY2xhc3NJbkhhc2gpO1xyXG5cdH1cclxuXHQvLyDQktGB0YLQsNC90L7QstC70LXQvdC90Y8g0YXQtdGI0LBcclxuXHRfc2V0SGFzaCgpIHtcclxuXHRcdGhpc3RvcnkucHVzaFN0YXRlKCcnLCAnJywgdGhpcy5oYXNoKTtcclxuXHR9XHJcblx0X3JlbW92ZUhhc2goKSB7XHJcblx0XHRoaXN0b3J5LnB1c2hTdGF0ZSgnJywgJycsIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF0pXHJcblx0fVxyXG5cdF9mb2N1c0NhdGNoKGUpIHtcclxuXHRcdGNvbnN0IGZvY3VzYWJsZSA9IHRoaXMudGFyZ2V0T3Blbi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5fZm9jdXNFbCk7XHJcblx0XHRjb25zdCBmb2N1c0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZm9jdXNhYmxlKTtcclxuXHRcdGNvbnN0IGZvY3VzZWRJbmRleCA9IGZvY3VzQXJyYXkuaW5kZXhPZihkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcclxuXHJcblx0XHRpZiAoZS5zaGlmdEtleSAmJiBmb2N1c2VkSW5kZXggPT09IDApIHtcclxuXHRcdFx0Zm9jdXNBcnJheVtmb2N1c0FycmF5Lmxlbmd0aCAtIDFdLmZvY3VzKCk7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH1cclxuXHRcdGlmICghZS5zaGlmdEtleSAmJiBmb2N1c2VkSW5kZXggPT09IGZvY3VzQXJyYXkubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRmb2N1c0FycmF5WzBdLmZvY3VzKCk7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH1cclxuXHR9XHJcblx0X2ZvY3VzVHJhcCgpIHtcclxuXHRcdGNvbnN0IGZvY3VzYWJsZSA9IHRoaXMucHJldmlvdXNPcGVuLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9mb2N1c0VsKTtcclxuXHRcdGlmICghdGhpcy5pc09wZW4gJiYgdGhpcy5sYXN0Rm9jdXNFbCkge1xyXG5cdFx0XHR0aGlzLmxhc3RGb2N1c0VsLmZvY3VzKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRmb2N1c2FibGVbMF0uZm9jdXMoKTtcclxuXHRcdH1cclxuXHR9XHJcblx0Ly8g0KTRg9C90LrRhtGW0Y8g0LLQuNCy0LXQtNC10L3QvdGPINCyINC60L7QvdGB0L7Qu9GMXHJcblx0cG9wdXBMb2dnaW5nKG1lc3NhZ2UpIHtcclxuXHRcdHRoaXMub3B0aW9ucy5sb2dnaW5nID8gRkxTKGBb0J/QvtC/0LDQv9C+0YFdOiAke21lc3NhZ2V9YCkgOiBudWxsO1xyXG5cdH1cclxufVxyXG4vLyDQl9Cw0L/Rg9GB0LrQsNGU0LzQviDRgtCwINC00L7QtNCw0ZTQvNC+INCyINC+0LEn0ZTQutGCINC80L7QtNGD0LvRltCyXHJcbmZsc01vZHVsZXMucG9wdXAgPSBuZXcgUG9wdXAoe30pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImZlNDJlN2U5MTZkNzUzNjcyMTZhXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9