"use strict";
self["webpackHotUpdatefls_start"]("main",{

/***/ "./node_modules/string-replace-loader/index.js??ruleSet[1].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/scss/style.scss":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/string-replace-loader/index.js??ruleSet[1].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/scss/style.scss ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  min-width: 320px;
}

body {
  color: #0E0E0E;
  line-height: 1;
  font-family: "Inter";
  font-size: 0.9375rem;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

input,
button,
textarea {
  font-family: "Inter";
  font-size: inherit;
  line-height: inherit;
}

button {
  cursor: pointer;
  color: inherit;
  background-color: transparent;
}

a {
  color: inherit;
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}

.lock body {
  overflow: hidden;
  touch-action: none;
  overscroll-behavior: none;
}
.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
@supports (overflow: clip) {
  .wrapper {
    overflow: clip;
  }
}
.wrapper > main {
  flex: 1 1 auto;
}
.wrapper > * {
  min-width: 0;
}

/*
(i) Стилі будуть застосовуватись до
всіх класів, що містять *__container
Наприклад header__container, main__container і т.п.
Сніппет (HTML): cnt
*/
[class*=__container] {
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 0.9375rem;
}

[class*=-ibg] {
  position: relative;
}
[class*=-ibg] img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
}

[class*=-ibg--contain] img {
  object-fit: contain;
}

.header {
  background-color: var(--dark-cl);
  color: #fff;
}
.header__menu {
  display: flex;
  align-items: center;
}
@media (max-width: 580px) {
  .header__menu {
    justify-content: space-between;
    height: 52px;
  }
}
.header__logo {
  margin-right: auto;
}
@media (min-width: 75em) {
  .header__logo {
    font-size: 1.25rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (font-size: clamp( 0.9375rem , 0.8238636364rem  +  0.5681818182vw , 1.25rem )) {
    .header__logo {
      font-size: clamp( 0.9375rem , 0.8238636364rem  +  0.5681818182vw , 1.25rem );
    }
  }
  @supports not (font-size: clamp( 0.9375rem , 0.8238636364rem  +  0.5681818182vw , 1.25rem )) {
    .header__logo {
      font-size: calc(0.9375rem + 0.3125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .header__logo {
    font-size: 0.9375rem;
  }
}

.menu__body {
  display: flex;
  z-index: 10;
}
@media (min-width: 75em) {
  .menu__body {
    padding-top: 2.1875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-top: clamp( 1.5625rem , 1.3352272727rem  +  1.1363636364vw , 2.1875rem )) {
    .menu__body {
      padding-top: clamp( 1.5625rem , 1.3352272727rem  +  1.1363636364vw , 2.1875rem );
    }
  }
  @supports not (padding-top: clamp( 1.5625rem , 1.3352272727rem  +  1.1363636364vw , 2.1875rem )) {
    .menu__body {
      padding-top: calc(1.5625rem + 0.625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .menu__body {
    padding-top: 1.5625rem;
  }
}
@media (min-width: 75em) {
  .menu__body {
    padding-bottom: 2.1875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-bottom: clamp( 1.5625rem , 1.3352272727rem  +  1.1363636364vw , 2.1875rem )) {
    .menu__body {
      padding-bottom: clamp( 1.5625rem , 1.3352272727rem  +  1.1363636364vw , 2.1875rem );
    }
  }
  @supports not (padding-bottom: clamp( 1.5625rem , 1.3352272727rem  +  1.1363636364vw , 2.1875rem )) {
    .menu__body {
      padding-bottom: calc(1.5625rem + 0.625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .menu__body {
    padding-bottom: 1.5625rem;
  }
}
@media (max-width: 580px) {
  .menu__body {
    flex-direction: column;
    align-items: center;
  }
}
.menu__list {
  display: flex;
  align-items: center;
}
@media (min-width: 75em) {
  .menu__list {
    margin-right: 3.75rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-right: clamp( 3.125rem , 2.8977272727rem  +  1.1363636364vw , 3.75rem )) {
    .menu__list {
      margin-right: clamp( 3.125rem , 2.8977272727rem  +  1.1363636364vw , 3.75rem );
    }
  }
  @supports not (margin-right: clamp( 3.125rem , 2.8977272727rem  +  1.1363636364vw , 3.75rem )) {
    .menu__list {
      margin-right: calc(3.125rem + 0.625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .menu__list {
    margin-right: 3.125rem;
  }
}
@media (min-width: 75em) {
  .menu__list {
    gap: 2.5rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (gap: clamp( 1.875rem , 1.6477272727rem  +  1.1363636364vw , 2.5rem )) {
    .menu__list {
      gap: clamp( 1.875rem , 1.6477272727rem  +  1.1363636364vw , 2.5rem );
    }
  }
  @supports not (gap: clamp( 1.875rem , 1.6477272727rem  +  1.1363636364vw , 2.5rem )) {
    .menu__list {
      gap: calc(1.875rem + 0.625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .menu__list {
    gap: 1.875rem;
  }
}
@media (max-width: 580px) {
  .menu__list {
    flex-direction: column;
    align-items: center;
    margin: 0;
    flex: 2;
  }
}
.menu__link {
  font-size: 16px;
  position: relative;
}
@media (min-width: 75em) {
  .menu__link {
    padding-top: 2.1875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-top: clamp( 1.5625rem , 1.3352272727rem  +  1.1363636364vw , 2.1875rem )) {
    .menu__link {
      padding-top: clamp( 1.5625rem , 1.3352272727rem  +  1.1363636364vw , 2.1875rem );
    }
  }
  @supports not (padding-top: clamp( 1.5625rem , 1.3352272727rem  +  1.1363636364vw , 2.1875rem )) {
    .menu__link {
      padding-top: calc(1.5625rem + 0.625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .menu__link {
    padding-top: 1.5625rem;
  }
}
@media (min-width: 75em) {
  .menu__link {
    padding-bottom: 2.1875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-bottom: clamp( 1.5625rem , 1.3352272727rem  +  1.1363636364vw , 2.1875rem )) {
    .menu__link {
      padding-bottom: clamp( 1.5625rem , 1.3352272727rem  +  1.1363636364vw , 2.1875rem );
    }
  }
  @supports not (padding-bottom: clamp( 1.5625rem , 1.3352272727rem  +  1.1363636364vw , 2.1875rem )) {
    .menu__link {
      padding-bottom: calc(1.5625rem + 0.625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .menu__link {
    padding-bottom: 1.5625rem;
  }
}
@media (max-width: 580px) {
  .menu__link {
    font-size: 28px;
  }
}
.menu__link::before {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 45px;
  height: 1px;
  width: 100%;
  background-color: #fff;
  transform: translateX(-100%);
  opacity: 0;
  visibility: hidden;
  transition: visibility 0.5s ease, opacity 0.3s ease, transform 0.3s ease;
}
.menu__link:hover::before {
  transform: translateX(0);
  opacity: 1;
  visibility: visible;
}
.menu__link.current::before {
  transform: translateX(0);
  opacity: 1;
  visibility: visible;
}

.socials-list {
  display: flex;
  align-items: center;
}
@media (min-width: 75em) {
  .socials-list {
    gap: 0.9375rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (gap: clamp( 0.625rem , 0.5113636364rem  +  0.5681818182vw , 0.9375rem )) {
    .socials-list {
      gap: clamp( 0.625rem , 0.5113636364rem  +  0.5681818182vw , 0.9375rem );
    }
  }
  @supports not (gap: clamp( 0.625rem , 0.5113636364rem  +  0.5681818182vw , 0.9375rem )) {
    .socials-list {
      gap: calc(0.625rem + 0.3125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .socials-list {
    gap: 0.625rem;
  }
}
@media (max-width: 580px) {
  .socials-list {
    gap: 30px;
    flex: 1;
  }
}
@media (max-width: 580px) {
  .socials-list__icon {
    width: 25px;
    height: 25px;
  }
}

@media (max-width: 580px) {
  .menu__body {
    position: fixed;
    top: 52px;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background-color: var(--dark-cl);
    overflow: auto;
    transition: transform 0.3s ease;
  }
}
@media (min-width: 580px) {
  .icon-menu {
    display: none;
  }
}
@media (max-width: 580px) {
  .icon-menu {
    display: block;
    position: relative;
    width: 1.875rem;
    height: 1.125rem;
    z-index: 5;
  }
}
@media (max-width: 580px) and (any-hover: none) {
  .icon-menu {
    cursor: default;
  }
}
@media (max-width: 580px) {
  .icon-menu span, .icon-menu::before, .icon-menu::after {
    content: "";
    transition: all 0.3s ease 0s;
    right: 0;
    position: absolute;
    width: 100%;
    height: 0.125rem;
    background-color: #fff;
  }
  .icon-menu::before {
    top: 0;
  }
  .icon-menu::after {
    bottom: 0;
    width: 50%;
  }
  .icon-menu span {
    top: calc(50% - 0.0625rem);
  }
  .menu-open .icon-menu + .menu__body {
    transform: translateX(0);
  }
  .menu-open .icon-menu span {
    width: 0;
  }
  .menu-open .icon-menu::before {
    top: calc(50% - 0.0625rem);
    transform: rotate(-45deg);
  }
  .menu-open .icon-menu::after {
    bottom: calc(50% - 0.0625rem);
    transform: rotate(45deg);
    width: 100%;
  }
}

.hero {
  background-color: var(--dark-cl);
  position: relative;
}
@media (min-width: 75em) {
  .hero {
    height: 30rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (height: clamp( 16.875rem , 12.1022727273rem  +  23.8636363636vw , 30rem )) {
    .hero {
      height: clamp( 16.875rem , 12.1022727273rem  +  23.8636363636vw , 30rem );
    }
  }
  @supports not (height: clamp( 16.875rem , 12.1022727273rem  +  23.8636363636vw , 30rem )) {
    .hero {
      height: calc(16.875rem + 13.125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .hero {
    height: 16.875rem;
  }
}
.hero__container {
  position: relative;
}

.swiper-counter {
  position: relative;
  display: flex;
  justify-content: space-between;
  color: #fff;
}
@media (min-width: 75em) {
  .swiper-counter {
    bottom: 4.375rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (bottom: clamp( 1.875rem , 0.9659090909rem  +  4.5454545455vw , 4.375rem )) {
    .swiper-counter {
      bottom: clamp( 1.875rem , 0.9659090909rem  +  4.5454545455vw , 4.375rem );
    }
  }
  @supports not (bottom: clamp( 1.875rem , 0.9659090909rem  +  4.5454545455vw , 4.375rem )) {
    .swiper-counter {
      bottom: calc(1.875rem + 2.5 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .swiper-counter {
    bottom: 1.875rem;
  }
}
@media (min-width: 75em) {
  .swiper-counter {
    left: 12.5rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (left: clamp( 0.9375rem , -3.2670454545rem  +  21.0227272727vw , 12.5rem )) {
    .swiper-counter {
      left: clamp( 0.9375rem , -3.2670454545rem  +  21.0227272727vw , 12.5rem );
    }
  }
  @supports not (left: clamp( 0.9375rem , -3.2670454545rem  +  21.0227272727vw , 12.5rem )) {
    .swiper-counter {
      left: calc(0.9375rem + 11.5625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .swiper-counter {
    left: 0.9375rem;
  }
}
@media (min-width: 75em) {
  .swiper-counter {
    width: 5rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 3.125rem , 2.4431818182rem  +  3.4090909091vw , 5rem )) {
    .swiper-counter {
      width: clamp( 3.125rem , 2.4431818182rem  +  3.4090909091vw , 5rem );
    }
  }
  @supports not (width: clamp( 3.125rem , 2.4431818182rem  +  3.4090909091vw , 5rem )) {
    .swiper-counter {
      width: calc(3.125rem + 1.875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .swiper-counter {
    width: 3.125rem;
  }
}
.swiper-counter__item::after {
  content: "";
  height: 1px;
  background-color: #fff;
  position: absolute;
  top: 7px;
}
@media (min-width: 75em) {
  .swiper-counter__item::after {
    width: 1.25rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 0.625rem , 0.3977272727rem  +  1.1363636364vw , 1.25rem )) {
    .swiper-counter__item::after {
      width: clamp( 0.625rem , 0.3977272727rem  +  1.1363636364vw , 1.25rem );
    }
  }
  @supports not (width: clamp( 0.625rem , 0.3977272727rem  +  1.1363636364vw , 1.25rem )) {
    .swiper-counter__item::after {
      width: calc(0.625rem + 0.625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .swiper-counter__item::after {
    width: 0.625rem;
  }
}
@media (min-width: 75em) {
  .swiper-counter__item::after {
    left: 1.875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (left: clamp( 1.1875rem , 0.9375rem  +  1.25vw , 1.875rem )) {
    .swiper-counter__item::after {
      left: clamp( 1.1875rem , 0.9375rem  +  1.25vw , 1.875rem );
    }
  }
  @supports not (left: clamp( 1.1875rem , 0.9375rem  +  1.25vw , 1.875rem )) {
    .swiper-counter__item::after {
      left: calc(1.1875rem + 0.6875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .swiper-counter__item::after {
    left: 1.1875rem;
  }
}
@media (min-width: 75em) {
  .swiper-counter__itemspan {
    font-size: 0.875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (font-size: clamp( 0.75rem , 0.7045454545rem  +  0.2272727273vw , 0.875rem )) {
    .swiper-counter__itemspan {
      font-size: clamp( 0.75rem , 0.7045454545rem  +  0.2272727273vw , 0.875rem );
    }
  }
  @supports not (font-size: clamp( 0.75rem , 0.7045454545rem  +  0.2272727273vw , 0.875rem )) {
    .swiper-counter__itemspan {
      font-size: calc(0.75rem + 0.125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .swiper-counter__itemspan {
    font-size: 0.75rem;
  }
}

.block-title {
  position: absolute;
  padding: 40px 0 40px 0;
}
@media (min-width: 75em) {
  .block-title {
    top: 10.9375rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (top: clamp( 3.125rem , 0.2840909091rem  +  14.2045454545vw , 10.9375rem )) {
    .block-title {
      top: clamp( 3.125rem , 0.2840909091rem  +  14.2045454545vw , 10.9375rem );
    }
  }
  @supports not (top: clamp( 3.125rem , 0.2840909091rem  +  14.2045454545vw , 10.9375rem )) {
    .block-title {
      top: calc(3.125rem + 7.8125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .block-title {
    top: 3.125rem;
  }
}
@media (min-width: 75em) {
  .block-title {
    left: 12.5rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (left: clamp( 1.875rem , -1.9886363636rem  +  19.3181818182vw , 12.5rem )) {
    .block-title {
      left: clamp( 1.875rem , -1.9886363636rem  +  19.3181818182vw , 12.5rem );
    }
  }
  @supports not (left: clamp( 1.875rem , -1.9886363636rem  +  19.3181818182vw , 12.5rem )) {
    .block-title {
      left: calc(1.875rem + 10.625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .block-title {
    left: 1.875rem;
  }
}
@media (min-width: 75em) {
  .block-title {
    width: 32.25rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 18.75rem , 13.8409090909rem  +  24.5454545455vw , 32.25rem )) {
    .block-title {
      width: clamp( 18.75rem , 13.8409090909rem  +  24.5454545455vw , 32.25rem );
    }
  }
  @supports not (width: clamp( 18.75rem , 13.8409090909rem  +  24.5454545455vw , 32.25rem )) {
    .block-title {
      width: calc(18.75rem + 13.5 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .block-title {
    width: 18.75rem;
  }
}
.block-title__title {
  font-weight: 500;
  line-height: 1.1;
  color: #fff;
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.6);
}
@media (min-width: 75em) {
  .block-title__title {
    font-size: 4.375rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (font-size: clamp( 2.25rem , 1.4772727273rem  +  3.8636363636vw , 4.375rem )) {
    .block-title__title {
      font-size: clamp( 2.25rem , 1.4772727273rem  +  3.8636363636vw , 4.375rem );
    }
  }
  @supports not (font-size: clamp( 2.25rem , 1.4772727273rem  +  3.8636363636vw , 4.375rem )) {
    .block-title__title {
      font-size: calc(2.25rem + 2.125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .block-title__title {
    font-size: 2.25rem;
  }
}
.block-title__title::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 1px;
  width: 70px;
  background-color: #fff;
}
.block-title::before {
  content: "";
  height: 1px;
  width: 70px;
}

.btn-view {
  position: absolute;
  background-color: #fff;
  color: var(--dark-cl);
  border-radius: 50%;
  font-weight: 500;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
@media (min-width: 75em) {
  .btn-view {
    top: 24.375rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (top: clamp( 10rem , 4.7727272727rem  +  26.1363636364vw , 24.375rem )) {
    .btn-view {
      top: clamp( 10rem , 4.7727272727rem  +  26.1363636364vw , 24.375rem );
    }
  }
  @supports not (top: clamp( 10rem , 4.7727272727rem  +  26.1363636364vw , 24.375rem )) {
    .btn-view {
      top: calc(10rem + 14.375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .btn-view {
    top: 10rem;
  }
}
@media (min-width: 75em) {
  .btn-view {
    right: 11.125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (right: clamp( 1.25rem , -2.3409090909rem  +  17.9545454545vw , 11.125rem )) {
    .btn-view {
      right: clamp( 1.25rem , -2.3409090909rem  +  17.9545454545vw , 11.125rem );
    }
  }
  @supports not (right: clamp( 1.25rem , -2.3409090909rem  +  17.9545454545vw , 11.125rem )) {
    .btn-view {
      right: calc(1.25rem + 9.875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .btn-view {
    right: 1.25rem;
  }
}
@media (min-width: 75em) {
  .btn-view {
    width: 5.625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 3.4375rem , 2.6420454545rem  +  3.9772727273vw , 5.625rem )) {
    .btn-view {
      width: clamp( 3.4375rem , 2.6420454545rem  +  3.9772727273vw , 5.625rem );
    }
  }
  @supports not (width: clamp( 3.4375rem , 2.6420454545rem  +  3.9772727273vw , 5.625rem )) {
    .btn-view {
      width: calc(3.4375rem + 2.1875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .btn-view {
    width: 3.4375rem;
  }
}
@media (min-width: 75em) {
  .btn-view {
    height: 5.625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (height: clamp( 3.4375rem , 2.6420454545rem  +  3.9772727273vw , 5.625rem )) {
    .btn-view {
      height: clamp( 3.4375rem , 2.6420454545rem  +  3.9772727273vw , 5.625rem );
    }
  }
  @supports not (height: clamp( 3.4375rem , 2.6420454545rem  +  3.9772727273vw , 5.625rem )) {
    .btn-view {
      height: calc(3.4375rem + 2.1875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .btn-view {
    height: 3.4375rem;
  }
}
@media (min-width: 75em) {
  .btn-view {
    font-size: 0.9375rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (font-size: clamp( 0.75rem , 0.6818181818rem  +  0.3409090909vw , 0.9375rem )) {
    .btn-view {
      font-size: clamp( 0.75rem , 0.6818181818rem  +  0.3409090909vw , 0.9375rem );
    }
  }
  @supports not (font-size: clamp( 0.75rem , 0.6818181818rem  +  0.3409090909vw , 0.9375rem )) {
    .btn-view {
      font-size: calc(0.75rem + 0.1875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .btn-view {
    font-size: 0.75rem;
  }
}
.btn-view:hover {
  transform: scale(1.1);
  box-shadow: 2px 2px 15px 8px #fff;
}

@media (min-width: 75em) {
  .swiper-slide__img {
    height: 36.25rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (height: clamp( 13.75rem , 5.5681818182rem  +  40.9090909091vw , 36.25rem )) {
    .swiper-slide__img {
      height: clamp( 13.75rem , 5.5681818182rem  +  40.9090909091vw , 36.25rem );
    }
  }
  @supports not (height: clamp( 13.75rem , 5.5681818182rem  +  40.9090909091vw , 36.25rem )) {
    .swiper-slide__img {
      height: calc(13.75rem + 22.5 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .swiper-slide__img {
    height: 13.75rem;
  }
}

.swiper-button-prev {
  position: absolute;
  top: 225px;
}
@media (min-width: 75em) {
  .swiper-button-prev {
    left: -3.125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (left: clamp( -3.125rem , 35.2272727273rem  +  -51.1363636364vw , 25rem )) {
    .swiper-button-prev {
      left: clamp( -3.125rem , 35.2272727273rem  +  -51.1363636364vw , 25rem );
    }
  }
  @supports not (left: clamp( -3.125rem , 35.2272727273rem  +  -51.1363636364vw , 25rem )) {
    .swiper-button-prev {
      left: calc(25rem + -28.125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .swiper-button-prev {
    left: 25rem;
  }
}
@media (max-width: 958px) {
  .swiper-button-prev {
    display: none;
  }
}

.swiper-button-next {
  position: absolute;
  top: 225px;
}
@media (min-width: 75em) {
  .swiper-button-next {
    right: -3.125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (right: clamp( -3.125rem , 35.2272727273rem  +  -51.1363636364vw , 25rem )) {
    .swiper-button-next {
      right: clamp( -3.125rem , 35.2272727273rem  +  -51.1363636364vw , 25rem );
    }
  }
  @supports not (right: clamp( -3.125rem , 35.2272727273rem  +  -51.1363636364vw , 25rem )) {
    .swiper-button-next {
      right: calc(25rem + -28.125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .swiper-button-next {
    right: 25rem;
  }
}
@media (max-width: 958px) {
  .swiper-button-next {
    display: none;
  }
}

@media (min-width: 75em) {
  .about-us {
    padding-top: 16rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-top: clamp( 2.5rem , -2.4090909091rem  +  24.5454545455vw , 16rem )) {
    .about-us {
      padding-top: clamp( 2.5rem , -2.4090909091rem  +  24.5454545455vw , 16rem );
    }
  }
  @supports not (padding-top: clamp( 2.5rem , -2.4090909091rem  +  24.5454545455vw , 16rem )) {
    .about-us {
      padding-top: calc(2.5rem + 13.5 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .about-us {
    padding-top: 2.5rem;
  }
}
.about-us__container--big {
  width: 1306px;
  margin: 0 auto;
}

.intro-block {
  margin: 0 auto;
  text-align: center;
}
@media (min-width: 75em) {
  .intro-block {
    width: 38.4375rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 18.125rem , 10.7386363636rem  +  36.9318181818vw , 38.4375rem )) {
    .intro-block {
      width: clamp( 18.125rem , 10.7386363636rem  +  36.9318181818vw , 38.4375rem );
    }
  }
  @supports not (width: clamp( 18.125rem , 10.7386363636rem  +  36.9318181818vw , 38.4375rem )) {
    .intro-block {
      width: calc(18.125rem + 20.3125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .intro-block {
    width: 18.125rem;
  }
}
@media (min-width: 75em) {
  .intro-block {
    margin-bottom: 5.8125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-bottom: clamp( 2.5rem , 1.2954545455rem  +  6.0227272727vw , 5.8125rem )) {
    .intro-block {
      margin-bottom: clamp( 2.5rem , 1.2954545455rem  +  6.0227272727vw , 5.8125rem );
    }
  }
  @supports not (margin-bottom: clamp( 2.5rem , 1.2954545455rem  +  6.0227272727vw , 5.8125rem )) {
    .intro-block {
      margin-bottom: calc(2.5rem + 3.3125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .intro-block {
    margin-bottom: 2.5rem;
  }
}
.intro-block__label {
  font-weight: 500;
}
@media (min-width: 75em) {
  .intro-block__label {
    margin-bottom: 1.5625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-bottom: clamp( 0.9375rem , 0.7102272727rem  +  1.1363636364vw , 1.5625rem )) {
    .intro-block__label {
      margin-bottom: clamp( 0.9375rem , 0.7102272727rem  +  1.1363636364vw , 1.5625rem );
    }
  }
  @supports not (margin-bottom: clamp( 0.9375rem , 0.7102272727rem  +  1.1363636364vw , 1.5625rem )) {
    .intro-block__label {
      margin-bottom: calc(0.9375rem + 0.625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .intro-block__label {
    margin-bottom: 0.9375rem;
  }
}
.intro-block__title {
  line-height: 1.3;
  font-weight: 500;
}
@media (min-width: 75em) {
  .intro-block__title {
    font-size: 2.125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (font-size: clamp( 1.5rem , 1.2727272727rem  +  1.1363636364vw , 2.125rem )) {
    .intro-block__title {
      font-size: clamp( 1.5rem , 1.2727272727rem  +  1.1363636364vw , 2.125rem );
    }
  }
  @supports not (font-size: clamp( 1.5rem , 1.2727272727rem  +  1.1363636364vw , 2.125rem )) {
    .intro-block__title {
      font-size: calc(1.5rem + 0.625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .intro-block__title {
    font-size: 1.5rem;
  }
}

.info-block {
  display: flex;
  justify-content: center;
}
@media (min-width: 75em) {
  .info-block {
    margin-bottom: 10rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-bottom: clamp( 3.75rem , 1.4772727273rem  +  11.3636363636vw , 10rem )) {
    .info-block {
      margin-bottom: clamp( 3.75rem , 1.4772727273rem  +  11.3636363636vw , 10rem );
    }
  }
  @supports not (margin-bottom: clamp( 3.75rem , 1.4772727273rem  +  11.3636363636vw , 10rem )) {
    .info-block {
      margin-bottom: calc(3.75rem + 6.25 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .info-block {
    margin-bottom: 3.75rem;
  }
}
@media (min-width: 75em) {
  .info-block {
    gap: 6.875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (gap: clamp( 2.5rem , 0.9090909091rem  +  7.9545454545vw , 6.875rem )) {
    .info-block {
      gap: clamp( 2.5rem , 0.9090909091rem  +  7.9545454545vw , 6.875rem );
    }
  }
  @supports not (gap: clamp( 2.5rem , 0.9090909091rem  +  7.9545454545vw , 6.875rem )) {
    .info-block {
      gap: calc(2.5rem + 4.375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .info-block {
    gap: 2.5rem;
  }
}
@media (max-width: 580px) {
  .info-block {
    flex-direction: column;
  }
}
@media (max-width: 580px) and (min-width: 75em) {
  .info-block {
    padding-left: 2.5rem;
  }
}
@media (max-width: 580px) and (min-width: 20em) and (max-width: 75em) {
  @supports (padding-left: clamp( 1.25rem , 0.7954545455rem  +  2.2727272727vw , 2.5rem )) {
    .info-block {
      padding-left: clamp( 1.25rem , 0.7954545455rem  +  2.2727272727vw , 2.5rem );
    }
  }
  @supports not (padding-left: clamp( 1.25rem , 0.7954545455rem  +  2.2727272727vw , 2.5rem )) {
    .info-block {
      padding-left: calc(1.25rem + 1.25 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 580px) and (max-width: 20em) {
  .info-block {
    padding-left: 1.25rem;
  }
}
.info-block__item--top-line {
  position: relative;
}
@media (min-width: 75em) {
  .info-block__item--top-line {
    width: 24.4375rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 12.5rem , 8.1590909091rem  +  21.7045454545vw , 24.4375rem )) {
    .info-block__item--top-line {
      width: clamp( 12.5rem , 8.1590909091rem  +  21.7045454545vw , 24.4375rem );
    }
  }
  @supports not (width: clamp( 12.5rem , 8.1590909091rem  +  21.7045454545vw , 24.4375rem )) {
    .info-block__item--top-line {
      width: calc(12.5rem + 11.9375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .info-block__item--top-line {
    width: 12.5rem;
  }
}
@media (min-width: 75em) {
  .info-block__item--top-line {
    padding-top: 2.125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-top: clamp( 1.25rem , 0.9318181818rem  +  1.5909090909vw , 2.125rem )) {
    .info-block__item--top-line {
      padding-top: clamp( 1.25rem , 0.9318181818rem  +  1.5909090909vw , 2.125rem );
    }
  }
  @supports not (padding-top: clamp( 1.25rem , 0.9318181818rem  +  1.5909090909vw , 2.125rem )) {
    .info-block__item--top-line {
      padding-top: calc(1.25rem + 0.875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .info-block__item--top-line {
    padding-top: 1.25rem;
  }
}
.info-block__text--big {
  line-height: 1.5;
}
@media (min-width: 75em) {
  .info-block__text--big {
    font-size: 1.25rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (font-size: clamp( 1.125rem , 1.0795454545rem  +  0.2272727273vw , 1.25rem )) {
    .info-block__text--big {
      font-size: clamp( 1.125rem , 1.0795454545rem  +  0.2272727273vw , 1.25rem );
    }
  }
  @supports not (font-size: clamp( 1.125rem , 1.0795454545rem  +  0.2272727273vw , 1.25rem )) {
    .info-block__text--big {
      font-size: calc(1.125rem + 0.125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .info-block__text--big {
    font-size: 1.125rem;
  }
}
.info-block__text--big::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 1px;
  background-color: var(--dark-cl);
}
@media (min-width: 75em) {
  .info-block__text--big::before {
    width: 25rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 13.125rem , 8.8068181818rem  +  21.5909090909vw , 25rem )) {
    .info-block__text--big::before {
      width: clamp( 13.125rem , 8.8068181818rem  +  21.5909090909vw , 25rem );
    }
  }
  @supports not (width: clamp( 13.125rem , 8.8068181818rem  +  21.5909090909vw , 25rem )) {
    .info-block__text--big::before {
      width: calc(13.125rem + 11.875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .info-block__text--big::before {
    width: 13.125rem;
  }
}
@media (min-width: 75em) {
  .info-block__item--action {
    width: 28.9375rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 15.625rem , 10.7840909091rem  +  24.2045454545vw , 28.9375rem )) {
    .info-block__item--action {
      width: clamp( 15.625rem , 10.7840909091rem  +  24.2045454545vw , 28.9375rem );
    }
  }
  @supports not (width: clamp( 15.625rem , 10.7840909091rem  +  24.2045454545vw , 28.9375rem )) {
    .info-block__item--action {
      width: calc(15.625rem + 13.3125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .info-block__item--action {
    width: 15.625rem;
  }
}
.info-block__text--small {
  line-height: 1.6;
}
@media (min-width: 75em) {
  .info-block__text--small {
    font-size: 1.0625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (font-size: clamp( 0.9375rem , 0.8920454545rem  +  0.2272727273vw , 1.0625rem )) {
    .info-block__text--small {
      font-size: clamp( 0.9375rem , 0.8920454545rem  +  0.2272727273vw , 1.0625rem );
    }
  }
  @supports not (font-size: clamp( 0.9375rem , 0.8920454545rem  +  0.2272727273vw , 1.0625rem )) {
    .info-block__text--small {
      font-size: calc(0.9375rem + 0.125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .info-block__text--small {
    font-size: 0.9375rem;
  }
}
@media (min-width: 75em) {
  .info-block__text--small {
    margin-bottom: 3.125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-bottom: clamp( 1.5625rem , 0.9943181818rem  +  2.8409090909vw , 3.125rem )) {
    .info-block__text--small {
      margin-bottom: clamp( 1.5625rem , 0.9943181818rem  +  2.8409090909vw , 3.125rem );
    }
  }
  @supports not (margin-bottom: clamp( 1.5625rem , 0.9943181818rem  +  2.8409090909vw , 3.125rem )) {
    .info-block__text--small {
      margin-bottom: calc(1.5625rem + 1.5625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .info-block__text--small {
    margin-bottom: 1.5625rem;
  }
}

.btn span {
  position: relative;
  z-index: 50;
  color: #fff;
  font-weight: 500;
}
@media (min-width: 75em) {
  .btn span {
    padding-left: 2.4375rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-left: clamp( 1.125rem , 0.6477272727rem  +  2.3863636364vw , 2.4375rem )) {
    .btn span {
      padding-left: clamp( 1.125rem , 0.6477272727rem  +  2.3863636364vw , 2.4375rem );
    }
  }
  @supports not (padding-left: clamp( 1.125rem , 0.6477272727rem  +  2.3863636364vw , 2.4375rem )) {
    .btn span {
      padding-left: calc(1.125rem + 1.3125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .btn span {
    padding-left: 1.125rem;
  }
}
@media (max-width: 959.98px) {
  .btn span {
    padding-left: 0;
    width: 100%;
    text-align: center;
  }
}
@media (max-width: 469.98px) {
  .btn span {
    font-size: 13px;
  }
}

.btn {
  background-color: var(--dark-cl);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  z-index: 2;
  outline: 1px solid var(--dark-cl);
  position: relative;
}
@media (min-width: 75em) {
  .btn {
    padding-top: 1.1875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-top: clamp( 0.625rem , 0.4204545455rem  +  1.0227272727vw , 1.1875rem )) {
    .btn {
      padding-top: clamp( 0.625rem , 0.4204545455rem  +  1.0227272727vw , 1.1875rem );
    }
  }
  @supports not (padding-top: clamp( 0.625rem , 0.4204545455rem  +  1.0227272727vw , 1.1875rem )) {
    .btn {
      padding-top: calc(0.625rem + 0.5625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .btn {
    padding-top: 0.625rem;
  }
}
@media (min-width: 75em) {
  .btn {
    padding-bottom: 1.1875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-bottom: clamp( 0.625rem , 0.4204545455rem  +  1.0227272727vw , 1.1875rem )) {
    .btn {
      padding-bottom: clamp( 0.625rem , 0.4204545455rem  +  1.0227272727vw , 1.1875rem );
    }
  }
  @supports not (padding-bottom: clamp( 0.625rem , 0.4204545455rem  +  1.0227272727vw , 1.1875rem )) {
    .btn {
      padding-bottom: calc(0.625rem + 0.5625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .btn {
    padding-bottom: 0.625rem;
  }
}
@media (min-width: 75em) {
  .btn {
    width: 10.625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 5rem , 2.9545454545rem  +  10.2272727273vw , 10.625rem )) {
    .btn {
      width: clamp( 5rem , 2.9545454545rem  +  10.2272727273vw , 10.625rem );
    }
  }
  @supports not (width: clamp( 5rem , 2.9545454545rem  +  10.2272727273vw , 10.625rem )) {
    .btn {
      width: calc(5rem + 5.625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .btn {
    width: 5rem;
  }
}
.btn:hover span {
  color: var(--dark-cl);
}
.btn:hover::before {
  transform: translateX(0);
}
.btn:hover::after {
  background-color: var(--dark-cl);
}
.btn::after {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #fff;
}
@media (min-width: 75em) {
  .btn::after {
    top: 1.5625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (top: clamp( 0.75rem , 0.4545454545rem  +  1.4772727273vw , 1.5625rem )) {
    .btn::after {
      top: clamp( 0.75rem , 0.4545454545rem  +  1.4772727273vw , 1.5625rem );
    }
  }
  @supports not (top: clamp( 0.75rem , 0.4545454545rem  +  1.4772727273vw , 1.5625rem )) {
    .btn::after {
      top: calc(0.75rem + 0.8125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .btn::after {
    top: 0.75rem;
  }
}
@media (min-width: 75em) {
  .btn::after {
    right: 2.375rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (right: clamp( 1.1875rem , 0.7556818182rem  +  2.1590909091vw , 2.375rem )) {
    .btn::after {
      right: clamp( 1.1875rem , 0.7556818182rem  +  2.1590909091vw , 2.375rem );
    }
  }
  @supports not (right: clamp( 1.1875rem , 0.7556818182rem  +  2.1590909091vw , 2.375rem )) {
    .btn::after {
      right: calc(1.1875rem + 1.1875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .btn::after {
    right: 1.1875rem;
  }
}
@media (max-width: 959.98px) {
  .btn::after {
    display: none;
  }
}
.btn::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #fff;
  transform: translateX(-125%);
  transition: transform 0.4s ease;
}
.btn--reverse {
  background-color: #fff;
  outline: 1px solid #fff;
}
.btn--reverse:hover::after {
  background-color: #fff;
}
.btn--reverse:hover span {
  color: #fff;
}
.btn--reverse span {
  color: var(--dark-cl);
  font-weight: 500;
}
.btn--reverse::after {
  background-color: var(--dark-cl);
}
.btn--reverse::before {
  background-color: var(--dark-cl);
}

.directions {
  max-width: 1336px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}
@media (min-width: 75em) {
  .directions {
    padding-bottom: 8.75rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-bottom: clamp( 4.375rem , 2.7840909091rem  +  7.9545454545vw , 8.75rem )) {
    .directions {
      padding-bottom: clamp( 4.375rem , 2.7840909091rem  +  7.9545454545vw , 8.75rem );
    }
  }
  @supports not (padding-bottom: clamp( 4.375rem , 2.7840909091rem  +  7.9545454545vw , 8.75rem )) {
    .directions {
      padding-bottom: calc(4.375rem + 4.375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .directions {
    padding-bottom: 4.375rem;
  }
}

.works-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}
.works-list__item {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.13) 0%, rgba(0, 0, 0, 0.65) 100%);
  position: relative;
  overflow: hidden;
}
@media (min-width: 75em) {
  .works-list__item {
    width: 19rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 12.5rem , 10.1363636364rem  +  11.8181818182vw , 19rem )) {
    .works-list__item {
      width: clamp( 12.5rem , 10.1363636364rem  +  11.8181818182vw , 19rem );
    }
  }
  @supports not (width: clamp( 12.5rem , 10.1363636364rem  +  11.8181818182vw , 19rem )) {
    .works-list__item {
      width: calc(12.5rem + 6.5 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .works-list__item {
    width: 12.5rem;
  }
}
@media (min-width: 75em) {
  .works-list__item {
    height: 25rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (height: clamp( 17.5rem , 14.7727272727rem  +  13.6363636364vw , 25rem )) {
    .works-list__item {
      height: clamp( 17.5rem , 14.7727272727rem  +  13.6363636364vw , 25rem );
    }
  }
  @supports not (height: clamp( 17.5rem , 14.7727272727rem  +  13.6363636364vw , 25rem )) {
    .works-list__item {
      height: calc(17.5rem + 7.5 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .works-list__item {
    height: 17.5rem;
  }
}
.works-list__item:hover {
  backdrop-filter: blur(10px);
}
.works-list__item:hover .works-list__info {
  transform: translateY(-16px);
}
.works-list__item:hover .works-list__card {
  filter: blur(7px);
}
.works-list__card {
  width: 100%;
  height: 100%;
  filter: blur(0);
  transition: filter 0.5s ease;
}
.works-list__info {
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateY(16px);
  transition: transform 0.5s ease;
}
@media (min-width: 75em) {
  .works-list__info {
    padding-right: 5.8125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-right: clamp( 1.5625rem , 0.0170454545rem  +  7.7272727273vw , 5.8125rem )) {
    .works-list__info {
      padding-right: clamp( 1.5625rem , 0.0170454545rem  +  7.7272727273vw , 5.8125rem );
    }
  }
  @supports not (padding-right: clamp( 1.5625rem , 0.0170454545rem  +  7.7272727273vw , 5.8125rem )) {
    .works-list__info {
      padding-right: calc(1.5625rem + 4.25 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .works-list__info {
    padding-right: 1.5625rem;
  }
}
@media (min-width: 75em) {
  .works-list__info {
    padding-left: 3.125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-left: clamp( 1.5625rem , 0.9943181818rem  +  2.8409090909vw , 3.125rem )) {
    .works-list__info {
      padding-left: clamp( 1.5625rem , 0.9943181818rem  +  2.8409090909vw , 3.125rem );
    }
  }
  @supports not (padding-left: clamp( 1.5625rem , 0.9943181818rem  +  2.8409090909vw , 3.125rem )) {
    .works-list__info {
      padding-left: calc(1.5625rem + 1.5625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .works-list__info {
    padding-left: 1.5625rem;
  }
}
.works-list__text {
  font-size: 20px;
  color: #fff;
  margin: 24px 0 24px 0;
}
@media (max-width: 499.98px) {
  .works-list__text {
    font-size: 18px;
  }
}
.works-list__more {
  font-size: 16px;
  color: #fff;
}
@media (max-width: 499.98px) {
  .works-list__more {
    font-size: 14px;
  }
}

@media (min-width: 75em) {
  .featured {
    padding-bottom: 9.8125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-bottom: clamp( 4.6875rem , 2.8238636364rem  +  9.3181818182vw , 9.8125rem )) {
    .featured {
      padding-bottom: clamp( 4.6875rem , 2.8238636364rem  +  9.3181818182vw , 9.8125rem );
    }
  }
  @supports not (padding-bottom: clamp( 4.6875rem , 2.8238636364rem  +  9.3181818182vw , 9.8125rem )) {
    .featured {
      padding-bottom: calc(4.6875rem + 5.125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .featured {
    padding-bottom: 4.6875rem;
  }
}
.featured__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
@media (min-width: 75em) {
  .featured__list {
    gap: 6.25rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (gap: clamp( 1.875rem , 0.2840909091rem  +  7.9545454545vw , 6.25rem )) {
    .featured__list {
      gap: clamp( 1.875rem , 0.2840909091rem  +  7.9545454545vw , 6.25rem );
    }
  }
  @supports not (gap: clamp( 1.875rem , 0.2840909091rem  +  7.9545454545vw , 6.25rem )) {
    .featured__list {
      gap: calc(1.875rem + 4.375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .featured__list {
    gap: 1.875rem;
  }
}
.featured__item {
  position: relative;
  overflow: hidden;
}
.featured__item:hover .featured__btn, .featured__item:focus .featured__btn {
  opacity: 1;
  visibility: visible;
}
@media (min-width: 75em) {
  .featured__image {
    width: 23.125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 11.5625rem , 7.3579545455rem  +  21.0227272727vw , 23.125rem )) {
    .featured__image {
      width: clamp( 11.5625rem , 7.3579545455rem  +  21.0227272727vw , 23.125rem );
    }
  }
  @supports not (width: clamp( 11.5625rem , 7.3579545455rem  +  21.0227272727vw , 23.125rem )) {
    .featured__image {
      width: calc(11.5625rem + 11.5625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .featured__image {
    width: 11.5625rem;
  }
}
@media (min-width: 75em) {
  .featured__image {
    height: 26.75rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (height: clamp( 13.375rem , 8.5113636364rem  +  24.3181818182vw , 26.75rem )) {
    .featured__image {
      height: clamp( 13.375rem , 8.5113636364rem  +  24.3181818182vw , 26.75rem );
    }
  }
  @supports not (height: clamp( 13.375rem , 8.5113636364rem  +  24.3181818182vw , 26.75rem )) {
    .featured__image {
      height: calc(13.375rem + 13.375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .featured__image {
    height: 13.375rem;
  }
}
.featured__label {
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
}
@media (min-width: 75em) {
  .featured__label {
    margin-top: 2.125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-top: clamp( 0.9375rem , 0.5056818182rem  +  2.1590909091vw , 2.125rem )) {
    .featured__label {
      margin-top: clamp( 0.9375rem , 0.5056818182rem  +  2.1590909091vw , 2.125rem );
    }
  }
  @supports not (margin-top: clamp( 0.9375rem , 0.5056818182rem  +  2.1590909091vw , 2.125rem )) {
    .featured__label {
      margin-top: calc(0.9375rem + 1.1875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .featured__label {
    margin-top: 0.9375rem;
  }
}
@media (min-width: 75em) {
  .featured__label {
    margin-bottom: 0.5rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-bottom: clamp( 0.25rem , 0.1590909091rem  +  0.4545454545vw , 0.5rem )) {
    .featured__label {
      margin-bottom: clamp( 0.25rem , 0.1590909091rem  +  0.4545454545vw , 0.5rem );
    }
  }
  @supports not (margin-bottom: clamp( 0.25rem , 0.1590909091rem  +  0.4545454545vw , 0.5rem )) {
    .featured__label {
      margin-bottom: calc(0.25rem + 0.25 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .featured__label {
    margin-bottom: 0.25rem;
  }
}
@media (max-width: 599.98px) {
  .featured__label {
    font-size: 20px;
  }
}
.featured__type {
  font-size: 15px;
  font-weight: 500;
}
@media (min-width: 75em) {
  .featured__image--big {
    width: 37.5rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 17.5rem , 10.2272727273rem  +  36.3636363636vw , 37.5rem )) {
    .featured__image--big {
      width: clamp( 17.5rem , 10.2272727273rem  +  36.3636363636vw , 37.5rem );
    }
  }
  @supports not (width: clamp( 17.5rem , 10.2272727273rem  +  36.3636363636vw , 37.5rem )) {
    .featured__image--big {
      width: calc(17.5rem + 20 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .featured__image--big {
    width: 17.5rem;
  }
}
@media (min-width: 75em) {
  .featured__image--big {
    height: 26.75rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (height: clamp( 12.125rem , 6.8068181818rem  +  26.5909090909vw , 26.75rem )) {
    .featured__image--big {
      height: clamp( 12.125rem , 6.8068181818rem  +  26.5909090909vw , 26.75rem );
    }
  }
  @supports not (height: clamp( 12.125rem , 6.8068181818rem  +  26.5909090909vw , 26.75rem )) {
    .featured__image--big {
      height: calc(12.125rem + 14.625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .featured__image--big {
    height: 12.125rem;
  }
}
.featured__item--top {
  padding-left: 100px;
  padding-top: 160px;
}
@media (max-width: 1199.98px) {
  .featured__item--top {
    padding-left: 0;
    padding-top: 0;
  }
}
.featured__item--bottom {
  margin-top: -160px;
}
@media (max-width: 1199.98px) {
  .featured__item--bottom {
    margin-top: 0;
  }
}
.featured__btn {
  left: 130px;
  top: 200px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease, transform 0.4s ease, box-shadow 0.4s ease;
}
@media (max-width: 47.99875em) {
  .featured__btn {
    left: 100px;
    top: 100px;
  }
}
@media (max-width: 29.99875em) {
  .featured__btn {
    left: 66px;
    top: 77px;
  }
}

.introduction {
  display: flex;
  flex-wrap: wrap;
  align-items: first baseline;
  position: relative;
}
@media (min-width: 75em) {
  .introduction {
    margin-bottom: 3rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-bottom: clamp( 1.5625rem , 1.0397727273rem  +  2.6136363636vw , 3rem )) {
    .introduction {
      margin-bottom: clamp( 1.5625rem , 1.0397727273rem  +  2.6136363636vw , 3rem );
    }
  }
  @supports not (margin-bottom: clamp( 1.5625rem , 1.0397727273rem  +  2.6136363636vw , 3rem )) {
    .introduction {
      margin-bottom: calc(1.5625rem + 1.4375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .introduction {
    margin-bottom: 1.5625rem;
  }
}
@media (min-width: 75em) {
  .introduction {
    padding-left: 6.25rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-left: clamp( 1.25rem , -0.5681818182rem  +  9.0909090909vw , 6.25rem )) {
    .introduction {
      padding-left: clamp( 1.25rem , -0.5681818182rem  +  9.0909090909vw , 6.25rem );
    }
  }
  @supports not (padding-left: clamp( 1.25rem , -0.5681818182rem  +  9.0909090909vw , 6.25rem )) {
    .introduction {
      padding-left: calc(1.25rem + 5 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .introduction {
    padding-left: 1.25rem;
  }
}
@media (min-width: 75em) {
  .introduction {
    padding-right: 6.25rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-right: clamp( 3.125rem , 1.9886363636rem  +  5.6818181818vw , 6.25rem )) {
    .introduction {
      padding-right: clamp( 3.125rem , 1.9886363636rem  +  5.6818181818vw , 6.25rem );
    }
  }
  @supports not (padding-right: clamp( 3.125rem , 1.9886363636rem  +  5.6818181818vw , 6.25rem )) {
    .introduction {
      padding-right: calc(3.125rem + 3.125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .introduction {
    padding-right: 3.125rem;
  }
}
.introduction__title {
  margin-right: 375px;
  font-weight: 500;
  line-height: 1.1;
}
@media (min-width: 75em) {
  .introduction__title {
    font-size: 6.25rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (font-size: clamp( 3.125rem , 1.9886363636rem  +  5.6818181818vw , 6.25rem )) {
    .introduction__title {
      font-size: clamp( 3.125rem , 1.9886363636rem  +  5.6818181818vw , 6.25rem );
    }
  }
  @supports not (font-size: clamp( 3.125rem , 1.9886363636rem  +  5.6818181818vw , 6.25rem )) {
    .introduction__title {
      font-size: calc(3.125rem + 3.125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .introduction__title {
    font-size: 3.125rem;
  }
}
@media (min-width: 75em) {
  .introduction__title {
    width: 26.5625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 15.625rem , 11.6477272727rem  +  19.8863636364vw , 26.5625rem )) {
    .introduction__title {
      width: clamp( 15.625rem , 11.6477272727rem  +  19.8863636364vw , 26.5625rem );
    }
  }
  @supports not (width: clamp( 15.625rem , 11.6477272727rem  +  19.8863636364vw , 26.5625rem )) {
    .introduction__title {
      width: calc(15.625rem + 10.9375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .introduction__title {
    width: 15.625rem;
  }
}
.introduction__title::after {
  content: "";
  position: absolute;
  height: 1px;
  background-color: var(--dark-cl);
  left: 680px;
  top: 80px;
}
@media (min-width: 75em) {
  .introduction__title::after {
    width: 4.375rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 2.1875rem , 1.3920454545rem  +  3.9772727273vw , 4.375rem )) {
    .introduction__title::after {
      width: clamp( 2.1875rem , 1.3920454545rem  +  3.9772727273vw , 4.375rem );
    }
  }
  @supports not (width: clamp( 2.1875rem , 1.3920454545rem  +  3.9772727273vw , 4.375rem )) {
    .introduction__title::after {
      width: calc(2.1875rem + 2.1875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .introduction__title::after {
    width: 2.1875rem;
  }
}
@media (max-width: 1199.98px) and (min-width: 75em) {
  .introduction__title {
    margin-bottom: 3rem;
  }
}
@media (max-width: 1199.98px) and (min-width: 20em) and (max-width: 75em) {
  @supports (margin-bottom: clamp( 1.5625rem , 1.0397727273rem  +  2.6136363636vw , 3rem )) {
    .introduction__title {
      margin-bottom: clamp( 1.5625rem , 1.0397727273rem  +  2.6136363636vw , 3rem );
    }
  }
  @supports not (margin-bottom: clamp( 1.5625rem , 1.0397727273rem  +  2.6136363636vw , 3rem )) {
    .introduction__title {
      margin-bottom: calc(1.5625rem + 1.4375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 1199.98px) and (max-width: 20em) {
  .introduction__title {
    margin-bottom: 1.5625rem;
  }
}
@media (max-width: 1199.98px) {
  .introduction__title::after {
    top: -40px;
  }
}
@media (max-width: 1199.98px) and (min-width: 75em) {
  .introduction__title::after {
    left: 6.25rem;
  }
}
@media (max-width: 1199.98px) and (min-width: 20em) and (max-width: 75em) {
  @supports (left: clamp( 3.125rem , 1.9886363636rem  +  5.6818181818vw , 6.25rem )) {
    .introduction__title::after {
      left: clamp( 3.125rem , 1.9886363636rem  +  5.6818181818vw , 6.25rem );
    }
  }
  @supports not (left: clamp( 3.125rem , 1.9886363636rem  +  5.6818181818vw , 6.25rem )) {
    .introduction__title::after {
      left: calc(3.125rem + 3.125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 1199.98px) and (max-width: 20em) {
  .introduction__title::after {
    left: 3.125rem;
  }
}

.process {
  background-color: var(--dark-cl);
  height: 664px;
}
@media (max-width: 667.98px) {
  .process {
    height: 764px;
  }
}
.process__container {
  max-width: 1300px;
  z-index: 2;
  overflow: hidden;
  position: relative;
}
@media (min-width: 75em) {
  .process__container {
    padding-top: 9.3125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-top: clamp( 4.0625rem , 2.1534090909rem  +  9.5454545455vw , 9.3125rem )) {
    .process__container {
      padding-top: clamp( 4.0625rem , 2.1534090909rem  +  9.5454545455vw , 9.3125rem );
    }
  }
  @supports not (padding-top: clamp( 4.0625rem , 2.1534090909rem  +  9.5454545455vw , 9.3125rem )) {
    .process__container {
      padding-top: calc(4.0625rem + 5.25 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .process__container {
    padding-top: 4.0625rem;
  }
}
@media (min-width: 75em) {
  .process__container {
    padding-bottom: 10.0625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-bottom: clamp( 4.375rem , 2.3068181818rem  +  10.3409090909vw , 10.0625rem )) {
    .process__container {
      padding-bottom: clamp( 4.375rem , 2.3068181818rem  +  10.3409090909vw , 10.0625rem );
    }
  }
  @supports not (padding-bottom: clamp( 4.375rem , 2.3068181818rem  +  10.3409090909vw , 10.0625rem )) {
    .process__container {
      padding-bottom: calc(4.375rem + 5.6875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .process__container {
    padding-bottom: 4.375rem;
  }
}
.process__container::after {
  content: "";
  position: absolute;
  right: -20%;
  top: -35%;
  border-radius: 50%;
  background-color: #202020;
}
@media (min-width: 75em) {
  .process__container::after {
    width: 40.0625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 12.5rem , 2.4772727273rem  +  50.1136363636vw , 40.0625rem )) {
    .process__container::after {
      width: clamp( 12.5rem , 2.4772727273rem  +  50.1136363636vw , 40.0625rem );
    }
  }
  @supports not (width: clamp( 12.5rem , 2.4772727273rem  +  50.1136363636vw , 40.0625rem )) {
    .process__container::after {
      width: calc(12.5rem + 27.5625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .process__container::after {
    width: 12.5rem;
  }
}
@media (min-width: 75em) {
  .process__container::after {
    height: 40.0625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (height: clamp( 12.5rem , 2.4772727273rem  +  50.1136363636vw , 40.0625rem )) {
    .process__container::after {
      height: clamp( 12.5rem , 2.4772727273rem  +  50.1136363636vw , 40.0625rem );
    }
  }
  @supports not (height: clamp( 12.5rem , 2.4772727273rem  +  50.1136363636vw , 40.0625rem )) {
    .process__container::after {
      height: calc(12.5rem + 27.5625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .process__container::after {
    height: 12.5rem;
  }
}
@media (max-width: 667.98px) {
  .process__container::after {
    display: none;
  }
}
.process__title {
  color: #FFF;
  font-size: 48px;
  font-weight: 500;
  line-height: 1.2;
}
@media (min-width: 75em) {
  .process__title {
    margin-bottom: 5rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-bottom: clamp( 1.875rem , 0.7386363636rem  +  5.6818181818vw , 5rem )) {
    .process__title {
      margin-bottom: clamp( 1.875rem , 0.7386363636rem  +  5.6818181818vw , 5rem );
    }
  }
  @supports not (margin-bottom: clamp( 1.875rem , 0.7386363636rem  +  5.6818181818vw , 5rem )) {
    .process__title {
      margin-bottom: calc(1.875rem + 3.125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .process__title {
    margin-bottom: 1.875rem;
  }
}
@media (max-width: 667.98px) and (min-width: 75em) {
  .process__title {
    padding-left: 6.25rem;
  }
}
@media (max-width: 667.98px) and (min-width: 20em) and (max-width: 75em) {
  @supports (padding-left: clamp( 1.25rem , -0.5681818182rem  +  9.0909090909vw , 6.25rem )) {
    .process__title {
      padding-left: clamp( 1.25rem , -0.5681818182rem  +  9.0909090909vw , 6.25rem );
    }
  }
  @supports not (padding-left: clamp( 1.25rem , -0.5681818182rem  +  9.0909090909vw , 6.25rem )) {
    .process__title {
      padding-left: calc(1.25rem + 5 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 667.98px) and (max-width: 20em) {
  .process__title {
    padding-left: 1.25rem;
  }
}
@media (max-width: 419.98px) {
  .process__title {
    width: 200px;
  }
}
.process__list {
  gap: 24px;
  display: flex;
  flex-direction: column;
}
@media (min-width: 75em) {
  .process__list {
    margin-left: 3.75rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-left: clamp( 1.25rem , 0.3409090909rem  +  4.5454545455vw , 3.75rem )) {
    .process__list {
      margin-left: clamp( 1.25rem , 0.3409090909rem  +  4.5454545455vw , 3.75rem );
    }
  }
  @supports not (margin-left: clamp( 1.25rem , 0.3409090909rem  +  4.5454545455vw , 3.75rem )) {
    .process__list {
      margin-left: calc(1.25rem + 2.5 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .process__list {
    margin-left: 1.25rem;
  }
}
@media (min-width: 75em) {
  .process__list {
    margin-right: 8.75rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-right: clamp( 0.0000000625rem , -3.1818180966rem  +  15.9090907955vw , 8.75rem )) {
    .process__list {
      margin-right: clamp( 0.0000000625rem , -3.1818180966rem  +  15.9090907955vw , 8.75rem );
    }
  }
  @supports not (margin-right: clamp( 0.0000000625rem , -3.1818180966rem  +  15.9090907955vw , 8.75rem )) {
    .process__list {
      margin-right: calc(0.0000000625rem + 8.7499999375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .process__list {
    margin-right: 0.0000000625rem;
  }
}
@media (max-width: 667.98px) {
  .process__list {
    margin-bottom: 40px;
  }
}
.process__item {
  position: relative;
}
.process__item:hover .process__text {
  color: #fff;
  transform: translateX(20px);
}
.process__item:hover .process__text::before {
  opacity: 1;
  transform: translateX(28%);
}
.process__item:hover .process__number {
  opacity: 1;
}
.process__text {
  color: #6F6F6F;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
  transition: color 0.4s ease, transform 0.4s ease;
  transform: translateX(0);
}
.process__text::before {
  content: "";
  width: 40px;
  height: 1px;
  background-color: #fff;
  position: absolute;
  left: -90px;
  top: 17px;
  transform: translateX(-100%);
  opacity: 0;
  transition: transform 0.4s ease, opacity 0.4s ease;
}
@media (max-width: 667.98px) {
  .process__text::before {
    display: none;
  }
}
.process__number {
  opacity: 0;
  font-size: 12px;
  font-weight: 500;
  transition: opacity 0.4s ease;
}

.process-wrapper {
  display: flex;
}
@media (max-width: 667.98px) {
  .process-wrapper {
    flex-direction: column;
    justify-content: center;
  }
}

@media (min-width: 75em) {
  .block-info {
    width: 24.6875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 15.625rem , 12.3295454545rem  +  16.4772727273vw , 24.6875rem )) {
    .block-info {
      width: clamp( 15.625rem , 12.3295454545rem  +  16.4772727273vw , 24.6875rem );
    }
  }
  @supports not (width: clamp( 15.625rem , 12.3295454545rem  +  16.4772727273vw , 24.6875rem )) {
    .block-info {
      width: calc(15.625rem + 9.0625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .block-info {
    width: 15.625rem;
  }
}
@media (max-width: 667.98px) and (min-width: 75em) {
  .block-info {
    padding-left: 6.25rem;
  }
}
@media (max-width: 667.98px) and (min-width: 20em) and (max-width: 75em) {
  @supports (padding-left: clamp( 1.25rem , -0.5681818182rem  +  9.0909090909vw , 6.25rem )) {
    .block-info {
      padding-left: clamp( 1.25rem , -0.5681818182rem  +  9.0909090909vw , 6.25rem );
    }
  }
  @supports not (padding-left: clamp( 1.25rem , -0.5681818182rem  +  9.0909090909vw , 6.25rem )) {
    .block-info {
      padding-left: calc(1.25rem + 5 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 667.98px) and (max-width: 20em) {
  .block-info {
    padding-left: 1.25rem;
  }
}
.block-info__text {
  color: #FFF;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
}
@media (min-width: 75em) {
  .block-info__text {
    margin-bottom: 3.3125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-bottom: clamp( 1.5625rem , 0.9261363636rem  +  3.1818181818vw , 3.3125rem )) {
    .block-info__text {
      margin-bottom: clamp( 1.5625rem , 0.9261363636rem  +  3.1818181818vw , 3.3125rem );
    }
  }
  @supports not (margin-bottom: clamp( 1.5625rem , 0.9261363636rem  +  3.1818181818vw , 3.3125rem )) {
    .block-info__text {
      margin-bottom: calc(1.5625rem + 1.75 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .block-info__text {
    margin-bottom: 1.5625rem;
  }
}

@media (min-width: 75em) {
  .create {
    padding-top: 10rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-top: clamp( 5rem , 3.1818181818rem  +  9.0909090909vw , 10rem )) {
    .create {
      padding-top: clamp( 5rem , 3.1818181818rem  +  9.0909090909vw , 10rem );
    }
  }
  @supports not (padding-top: clamp( 5rem , 3.1818181818rem  +  9.0909090909vw , 10rem )) {
    .create {
      padding-top: calc(5rem + 5 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .create {
    padding-top: 5rem;
  }
}
@media (min-width: 75em) {
  .create {
    padding-bottom: 8.75rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-bottom: clamp( 4.375rem , 2.7840909091rem  +  7.9545454545vw , 8.75rem )) {
    .create {
      padding-bottom: clamp( 4.375rem , 2.7840909091rem  +  7.9545454545vw , 8.75rem );
    }
  }
  @supports not (padding-bottom: clamp( 4.375rem , 2.7840909091rem  +  7.9545454545vw , 8.75rem )) {
    .create {
      padding-bottom: calc(4.375rem + 4.375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .create {
    padding-bottom: 4.375rem;
  }
}
.create__wrapper {
  display: flex;
}
@media (max-width: 1037.98px) {
  .create__wrapper {
    flex-direction: column;
  }
}

@media (max-width: 1037.98px) {
  .img-block {
    margin: 0 auto;
  }
}
.img-block__item {
  filter: grayscale(100%);
  transition: filter 0.4s ease;
}
.img-block__item:hover {
  filter: grayscale(0);
}
.img-block__item--big {
  margin-bottom: 30px;
}
@media (min-width: 75em) {
  .img-block__item--big {
    width: 29.375rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 14.6875rem , 9.3465909091rem  +  26.7045454545vw , 29.375rem )) {
    .img-block__item--big {
      width: clamp( 14.6875rem , 9.3465909091rem  +  26.7045454545vw , 29.375rem );
    }
  }
  @supports not (width: clamp( 14.6875rem , 9.3465909091rem  +  26.7045454545vw , 29.375rem )) {
    .img-block__item--big {
      width: calc(14.6875rem + 14.6875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .img-block__item--big {
    width: 14.6875rem;
  }
}
@media (min-width: 75em) {
  .img-block__item--big {
    height: 18.125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (height: clamp( 9.0625rem , 5.7670454545rem  +  16.4772727273vw , 18.125rem )) {
    .img-block__item--big {
      height: clamp( 9.0625rem , 5.7670454545rem  +  16.4772727273vw , 18.125rem );
    }
  }
  @supports not (height: clamp( 9.0625rem , 5.7670454545rem  +  16.4772727273vw , 18.125rem )) {
    .img-block__item--big {
      height: calc(9.0625rem + 9.0625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .img-block__item--big {
    height: 9.0625rem;
  }
}
@media (min-width: 75em) {
  .img-block__bottom {
    width: 35.9375rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 18.75rem , 12.5rem  +  31.25vw , 35.9375rem )) {
    .img-block__bottom {
      width: clamp( 18.75rem , 12.5rem  +  31.25vw , 35.9375rem );
    }
  }
  @supports not (width: clamp( 18.75rem , 12.5rem  +  31.25vw , 35.9375rem )) {
    .img-block__bottom {
      width: calc(18.75rem + 17.1875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .img-block__bottom {
    width: 18.75rem;
  }
}
@media (min-width: 75em) {
  .img-block__item--small {
    padding-left: 8.125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-left: clamp( 1.875rem , -0.3977272727rem  +  11.3636363636vw , 8.125rem )) {
    .img-block__item--small {
      padding-left: clamp( 1.875rem , -0.3977272727rem  +  11.3636363636vw , 8.125rem );
    }
  }
  @supports not (padding-left: clamp( 1.875rem , -0.3977272727rem  +  11.3636363636vw , 8.125rem )) {
    .img-block__item--small {
      padding-left: calc(1.875rem + 6.25 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .img-block__item--small {
    padding-left: 1.875rem;
  }
}
@media (min-width: 75em) {
  .img-block__item--small {
    margin-right: 1.875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-right: clamp( 0.9375rem , 0.5965909091rem  +  1.7045454545vw , 1.875rem )) {
    .img-block__item--small {
      margin-right: clamp( 0.9375rem , 0.5965909091rem  +  1.7045454545vw , 1.875rem );
    }
  }
  @supports not (margin-right: clamp( 0.9375rem , 0.5965909091rem  +  1.7045454545vw , 1.875rem )) {
    .img-block__item--small {
      margin-right: calc(0.9375rem + 0.9375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .img-block__item--small {
    margin-right: 0.9375rem;
  }
}
@media (min-width: 75em) {
  .img-block__item--small {
    width: 16.875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 8.4375rem , 5.3693181818rem  +  15.3409090909vw , 16.875rem )) {
    .img-block__item--small {
      width: clamp( 8.4375rem , 5.3693181818rem  +  15.3409090909vw , 16.875rem );
    }
  }
  @supports not (width: clamp( 8.4375rem , 5.3693181818rem  +  15.3409090909vw , 16.875rem )) {
    .img-block__item--small {
      width: calc(8.4375rem + 8.4375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .img-block__item--small {
    width: 8.4375rem;
  }
}
@media (min-width: 75em) {
  .img-block__item--small {
    height: 8.75rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (height: clamp( 5rem , 3.6363636364rem  +  6.8181818182vw , 8.75rem )) {
    .img-block__item--small {
      height: clamp( 5rem , 3.6363636364rem  +  6.8181818182vw , 8.75rem );
    }
  }
  @supports not (height: clamp( 5rem , 3.6363636364rem  +  6.8181818182vw , 8.75rem )) {
    .img-block__item--small {
      height: calc(5rem + 3.75 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .img-block__item--small {
    height: 5rem;
  }
}
@media (min-width: 75em) {
  .img-block__item--middle {
    width: 16.875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 8.4375rem , 5.3693181818rem  +  15.3409090909vw , 16.875rem )) {
    .img-block__item--middle {
      width: clamp( 8.4375rem , 5.3693181818rem  +  15.3409090909vw , 16.875rem );
    }
  }
  @supports not (width: clamp( 8.4375rem , 5.3693181818rem  +  15.3409090909vw , 16.875rem )) {
    .img-block__item--middle {
      width: calc(8.4375rem + 8.4375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .img-block__item--middle {
    width: 8.4375rem;
  }
}
@media (min-width: 75em) {
  .img-block__item--middle {
    height: 15.625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (height: clamp( 7.8125rem , 4.9715909091rem  +  14.2045454545vw , 15.625rem )) {
    .img-block__item--middle {
      height: clamp( 7.8125rem , 4.9715909091rem  +  14.2045454545vw , 15.625rem );
    }
  }
  @supports not (height: clamp( 7.8125rem , 4.9715909091rem  +  14.2045454545vw , 15.625rem )) {
    .img-block__item--middle {
      height: calc(7.8125rem + 7.8125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .img-block__item--middle {
    height: 7.8125rem;
  }
}

@media (min-width: 75em) {
  .create-info {
    padding-top: 5.8125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-top: clamp( 2.5rem , 1.2954545455rem  +  6.0227272727vw , 5.8125rem )) {
    .create-info {
      padding-top: clamp( 2.5rem , 1.2954545455rem  +  6.0227272727vw , 5.8125rem );
    }
  }
  @supports not (padding-top: clamp( 2.5rem , 1.2954545455rem  +  6.0227272727vw , 5.8125rem )) {
    .create-info {
      padding-top: calc(2.5rem + 3.3125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .create-info {
    padding-top: 2.5rem;
  }
}
.create-info__title {
  font-size: 28px;
  font-weight: 500;
  line-height: 1.3;
  width: 357px;
}
@media (min-width: 75em) {
  .create-info__title {
    margin-bottom: 2.3125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-bottom: clamp( 1.25rem , 0.8636363636rem  +  1.9318181818vw , 2.3125rem )) {
    .create-info__title {
      margin-bottom: clamp( 1.25rem , 0.8636363636rem  +  1.9318181818vw , 2.3125rem );
    }
  }
  @supports not (margin-bottom: clamp( 1.25rem , 0.8636363636rem  +  1.9318181818vw , 2.3125rem )) {
    .create-info__title {
      margin-bottom: calc(1.25rem + 1.0625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .create-info__title {
    margin-bottom: 1.25rem;
  }
}
.create-info__text {
  font-size: 17px;
  font-weight: 400;
  line-height: 1.6;
}
@media (min-width: 75em) {
  .create-info__text {
    padding-left: 5.625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-left: clamp( 1.25rem , -0.3409090909rem  +  7.9545454545vw , 5.625rem )) {
    .create-info__text {
      padding-left: clamp( 1.25rem , -0.3409090909rem  +  7.9545454545vw , 5.625rem );
    }
  }
  @supports not (padding-left: clamp( 1.25rem , -0.3409090909rem  +  7.9545454545vw , 5.625rem )) {
    .create-info__text {
      padding-left: calc(1.25rem + 4.375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .create-info__text {
    padding-left: 1.25rem;
  }
}
@media (min-width: 75em) {
  .create-info__text {
    margin-bottom: 3.3125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-bottom: clamp( 1.6875rem , 1.0965909091rem  +  2.9545454545vw , 3.3125rem )) {
    .create-info__text {
      margin-bottom: clamp( 1.6875rem , 1.0965909091rem  +  2.9545454545vw , 3.3125rem );
    }
  }
  @supports not (margin-bottom: clamp( 1.6875rem , 1.0965909091rem  +  2.9545454545vw , 3.3125rem )) {
    .create-info__text {
      margin-bottom: calc(1.6875rem + 1.625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .create-info__text {
    margin-bottom: 1.6875rem;
  }
}
@media (min-width: 75em) {
  .create-info__text {
    width: 27.375rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 17.5rem , 13.9090909091rem  +  17.9545454545vw , 27.375rem )) {
    .create-info__text {
      width: clamp( 17.5rem , 13.9090909091rem  +  17.9545454545vw , 27.375rem );
    }
  }
  @supports not (width: clamp( 17.5rem , 13.9090909091rem  +  17.9545454545vw , 27.375rem )) {
    .create-info__text {
      width: calc(17.5rem + 9.875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .create-info__text {
    width: 17.5rem;
  }
}
@media (max-width: 1037.98px) {
  .create-info__text {
    margin-left: auto;
    margin-right: auto;
  }
}
@media (max-width: 483.98px) {
  .create-info__text {
    margin-left: 0;
    margin-right: 0;
  }
}
@media (max-width: 483.98px) and (min-width: 75em) {
  .create-info__text {
    padding-left: 2.5rem;
  }
}
@media (max-width: 483.98px) and (min-width: 20em) and (max-width: 75em) {
  @supports (padding-left: clamp( 1.25rem , 0.7954545455rem  +  2.2727272727vw , 2.5rem )) {
    .create-info__text {
      padding-left: clamp( 1.25rem , 0.7954545455rem  +  2.2727272727vw , 2.5rem );
    }
  }
  @supports not (padding-left: clamp( 1.25rem , 0.7954545455rem  +  2.2727272727vw , 2.5rem )) {
    .create-info__text {
      padding-left: calc(1.25rem + 1.25 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 483.98px) and (max-width: 20em) {
  .create-info__text {
    padding-left: 1.25rem;
  }
}
@media (min-width: 75em) {
  .create-info__btn {
    margin-left: 5.625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-left: clamp( 1.25rem , -0.3409090909rem  +  7.9545454545vw , 5.625rem )) {
    .create-info__btn {
      margin-left: clamp( 1.25rem , -0.3409090909rem  +  7.9545454545vw , 5.625rem );
    }
  }
  @supports not (margin-left: clamp( 1.25rem , -0.3409090909rem  +  7.9545454545vw , 5.625rem )) {
    .create-info__btn {
      margin-left: calc(1.25rem + 4.375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .create-info__btn {
    margin-left: 1.25rem;
  }
}
@media (max-width: 1037.98px) {
  .create-info__btn {
    margin-left: auto;
  }
}
@media (max-width: 483.98px) and (min-width: 75em) {
  .create-info__btn {
    margin-left: 2.5rem;
  }
}
@media (max-width: 483.98px) and (min-width: 20em) and (max-width: 75em) {
  @supports (margin-left: clamp( 1.25rem , 0.7954545455rem  +  2.2727272727vw , 2.5rem )) {
    .create-info__btn {
      margin-left: clamp( 1.25rem , 0.7954545455rem  +  2.2727272727vw , 2.5rem );
    }
  }
  @supports not (margin-left: clamp( 1.25rem , 0.7954545455rem  +  2.2727272727vw , 2.5rem )) {
    .create-info__btn {
      margin-left: calc(1.25rem + 1.25 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 483.98px) and (max-width: 20em) {
  .create-info__btn {
    margin-left: 1.25rem;
  }
}

@media (min-width: 75em) {
  .values {
    padding-bottom: 13.375rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-bottom: clamp( 6.6875rem , 4.2556818182rem  +  12.1590909091vw , 13.375rem )) {
    .values {
      padding-bottom: clamp( 6.6875rem , 4.2556818182rem  +  12.1590909091vw , 13.375rem );
    }
  }
  @supports not (padding-bottom: clamp( 6.6875rem , 4.2556818182rem  +  12.1590909091vw , 13.375rem )) {
    .values {
      padding-bottom: calc(6.6875rem + 6.6875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .values {
    padding-bottom: 6.6875rem;
  }
}
.values__title {
  text-align: center;
  font-weight: 500;
  line-height: 1.2;
}
@media (min-width: 75em) {
  .values__title {
    font-size: 6.25rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (font-size: clamp( 3.4375rem , 2.4147727273rem  +  5.1136363636vw , 6.25rem )) {
    .values__title {
      font-size: clamp( 3.4375rem , 2.4147727273rem  +  5.1136363636vw , 6.25rem );
    }
  }
  @supports not (font-size: clamp( 3.4375rem , 2.4147727273rem  +  5.1136363636vw , 6.25rem )) {
    .values__title {
      font-size: calc(3.4375rem + 2.8125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .values__title {
    font-size: 3.4375rem;
  }
}
@media (min-width: 75em) {
  .values__title {
    margin-bottom: 5.375rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-bottom: clamp( 2.5rem , 1.4545454545rem  +  5.2272727273vw , 5.375rem )) {
    .values__title {
      margin-bottom: clamp( 2.5rem , 1.4545454545rem  +  5.2272727273vw , 5.375rem );
    }
  }
  @supports not (margin-bottom: clamp( 2.5rem , 1.4545454545rem  +  5.2272727273vw , 5.375rem )) {
    .values__title {
      margin-bottom: calc(2.5rem + 2.875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .values__title {
    margin-bottom: 2.5rem;
  }
}
.values__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
@media (min-width: 75em) {
  .values__list {
    gap: 4.6875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (gap: clamp( 2.5rem , 1.7045454545rem  +  3.9772727273vw , 4.6875rem )) {
    .values__list {
      gap: clamp( 2.5rem , 1.7045454545rem  +  3.9772727273vw , 4.6875rem );
    }
  }
  @supports not (gap: clamp( 2.5rem , 1.7045454545rem  +  3.9772727273vw , 4.6875rem )) {
    .values__list {
      gap: calc(2.5rem + 2.1875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .values__list {
    gap: 2.5rem;
  }
}
@media (max-width: 651.98px) {
  .values__list {
    justify-content: flex-start;
  }
}
.values__item {
  position: relative;
}
@media (min-width: 75em) {
  .values__item {
    width: 21.25rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 15.625rem , 13.5795454545rem  +  10.2272727273vw , 21.25rem )) {
    .values__item {
      width: clamp( 15.625rem , 13.5795454545rem  +  10.2272727273vw , 21.25rem );
    }
  }
  @supports not (width: clamp( 15.625rem , 13.5795454545rem  +  10.2272727273vw , 21.25rem )) {
    .values__item {
      width: calc(15.625rem + 5.625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .values__item {
    width: 15.625rem;
  }
}
@media (min-width: 75em) {
  .values__item {
    padding-left: 6.25rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-left: clamp( 3.125rem , 1.9886363636rem  +  5.6818181818vw , 6.25rem )) {
    .values__item {
      padding-left: clamp( 3.125rem , 1.9886363636rem  +  5.6818181818vw , 6.25rem );
    }
  }
  @supports not (padding-left: clamp( 3.125rem , 1.9886363636rem  +  5.6818181818vw , 6.25rem )) {
    .values__item {
      padding-left: calc(3.125rem + 3.125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .values__item {
    padding-left: 3.125rem;
  }
}
@media (max-width: 651.98px) {
  .values__item {
    width: 100%;
  }
}
.values__img {
  position: absolute;
  top: 0;
  left: 0;
}
@media (min-width: 75em) {
  .values__img {
    width: 4.375rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 2.1875rem , 1.3920454545rem  +  3.9772727273vw , 4.375rem )) {
    .values__img {
      width: clamp( 2.1875rem , 1.3920454545rem  +  3.9772727273vw , 4.375rem );
    }
  }
  @supports not (width: clamp( 2.1875rem , 1.3920454545rem  +  3.9772727273vw , 4.375rem )) {
    .values__img {
      width: calc(2.1875rem + 2.1875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .values__img {
    width: 2.1875rem;
  }
}
.values__label {
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 17px;
}
@media (min-width: 75em) {
  .values__label {
    font-size: 1.5rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (font-size: clamp( 1.25rem , 1.1590909091rem  +  0.4545454545vw , 1.5rem )) {
    .values__label {
      font-size: clamp( 1.25rem , 1.1590909091rem  +  0.4545454545vw , 1.5rem );
    }
  }
  @supports not (font-size: clamp( 1.25rem , 1.1590909091rem  +  0.4545454545vw , 1.5rem )) {
    .values__label {
      font-size: calc(1.25rem + 0.25 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .values__label {
    font-size: 1.25rem;
  }
}
.values__text {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 19px;
}
.values__more {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  display: flex;
  align-items: center;
}
.values__more:hover .values__icon {
  transform: translateX(15px);
}
.values__icon {
  fill: var(--dark-cl);
  transition: transform 0.4s ease;
}

.swiper-section {
  background-color: var(--dark-cl);
  overflow: hidden;
}
@media (min-width: 75em) {
  .swiper-section {
    padding-top: 8rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-top: clamp( 4.375rem , 3.0568181818rem  +  6.5909090909vw , 8rem )) {
    .swiper-section {
      padding-top: clamp( 4.375rem , 3.0568181818rem  +  6.5909090909vw , 8rem );
    }
  }
  @supports not (padding-top: clamp( 4.375rem , 3.0568181818rem  +  6.5909090909vw , 8rem )) {
    .swiper-section {
      padding-top: calc(4.375rem + 3.625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .swiper-section {
    padding-top: 4.375rem;
  }
}
@media (min-width: 75em) {
  .swiper-section {
    padding-bottom: 12.25rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-bottom: clamp( 4.375rem , 1.5113636364rem  +  14.3181818182vw , 12.25rem )) {
    .swiper-section {
      padding-bottom: clamp( 4.375rem , 1.5113636364rem  +  14.3181818182vw , 12.25rem );
    }
  }
  @supports not (padding-bottom: clamp( 4.375rem , 1.5113636364rem  +  14.3181818182vw , 12.25rem )) {
    .swiper-section {
      padding-bottom: calc(4.375rem + 7.875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .swiper-section {
    padding-bottom: 4.375rem;
  }
}
.swiper-section__container {
  position: relative;
}
.swiper-section__container::after {
  content: "";
  position: absolute;
  left: 23%;
  top: 23%;
  border-radius: 50%;
  background-color: #202020;
}
@media (min-width: 75em) {
  .swiper-section__container::after {
    width: 40.0625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 12.5rem , 2.4772727273rem  +  50.1136363636vw , 40.0625rem )) {
    .swiper-section__container::after {
      width: clamp( 12.5rem , 2.4772727273rem  +  50.1136363636vw , 40.0625rem );
    }
  }
  @supports not (width: clamp( 12.5rem , 2.4772727273rem  +  50.1136363636vw , 40.0625rem )) {
    .swiper-section__container::after {
      width: calc(12.5rem + 27.5625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .swiper-section__container::after {
    width: 12.5rem;
  }
}
@media (min-width: 75em) {
  .swiper-section__container::after {
    height: 40.0625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (height: clamp( 12.5rem , 2.4772727273rem  +  50.1136363636vw , 40.0625rem )) {
    .swiper-section__container::after {
      height: clamp( 12.5rem , 2.4772727273rem  +  50.1136363636vw , 40.0625rem );
    }
  }
  @supports not (height: clamp( 12.5rem , 2.4772727273rem  +  50.1136363636vw , 40.0625rem )) {
    .swiper-section__container::after {
      height: calc(12.5rem + 27.5625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .swiper-section__container::after {
    height: 12.5rem;
  }
}
@media (max-width: 667.98px) {
  .swiper-section__container::after {
    display: none;
  }
}
.swiper-section__wrapper {
  z-index: 2;
}
.swiper-section__slide {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (min-width: 75em) {
  .swiper-section__img-quote {
    width: 2.375rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 1.1875rem , 0.7556818182rem  +  2.1590909091vw , 2.375rem )) {
    .swiper-section__img-quote {
      width: clamp( 1.1875rem , 0.7556818182rem  +  2.1590909091vw , 2.375rem );
    }
  }
  @supports not (width: clamp( 1.1875rem , 0.7556818182rem  +  2.1590909091vw , 2.375rem )) {
    .swiper-section__img-quote {
      width: calc(1.1875rem + 1.1875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .swiper-section__img-quote {
    width: 1.1875rem;
  }
}
@media (min-width: 75em) {
  .swiper-section__img-quote {
    margin-bottom: 5.75rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-bottom: clamp( 1.25rem , -0.3863636364rem  +  8.1818181818vw , 5.75rem )) {
    .swiper-section__img-quote {
      margin-bottom: clamp( 1.25rem , -0.3863636364rem  +  8.1818181818vw , 5.75rem );
    }
  }
  @supports not (margin-bottom: clamp( 1.25rem , -0.3863636364rem  +  8.1818181818vw , 5.75rem )) {
    .swiper-section__img-quote {
      margin-bottom: calc(1.25rem + 4.5 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .swiper-section__img-quote {
    margin-bottom: 1.25rem;
  }
}
.swiper-section__text {
  color: #FFF;
  font-weight: 500;
  line-height: 1.4;
  text-align: center;
}
@media (min-width: 75em) {
  .swiper-section__text {
    font-size: 1.5rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (font-size: clamp( 0.9375rem , 0.7329545455rem  +  1.0227272727vw , 1.5rem )) {
    .swiper-section__text {
      font-size: clamp( 0.9375rem , 0.7329545455rem  +  1.0227272727vw , 1.5rem );
    }
  }
  @supports not (font-size: clamp( 0.9375rem , 0.7329545455rem  +  1.0227272727vw , 1.5rem )) {
    .swiper-section__text {
      font-size: calc(0.9375rem + 0.5625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .swiper-section__text {
    font-size: 0.9375rem;
  }
}
@media (min-width: 75em) {
  .swiper-section__text {
    width: 42.0625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 18.75rem , 10.2727272727rem  +  42.3863636364vw , 42.0625rem )) {
    .swiper-section__text {
      width: clamp( 18.75rem , 10.2727272727rem  +  42.3863636364vw , 42.0625rem );
    }
  }
  @supports not (width: clamp( 18.75rem , 10.2727272727rem  +  42.3863636364vw , 42.0625rem )) {
    .swiper-section__text {
      width: calc(18.75rem + 23.3125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .swiper-section__text {
    width: 18.75rem;
  }
}
@media (min-width: 75em) {
  .swiper-section__text {
    margin-bottom: 2.0625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-bottom: clamp( 0.9375rem , 0.5284090909rem  +  2.0454545455vw , 2.0625rem )) {
    .swiper-section__text {
      margin-bottom: clamp( 0.9375rem , 0.5284090909rem  +  2.0454545455vw , 2.0625rem );
    }
  }
  @supports not (margin-bottom: clamp( 0.9375rem , 0.5284090909rem  +  2.0454545455vw , 2.0625rem )) {
    .swiper-section__text {
      margin-bottom: calc(0.9375rem + 1.125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .swiper-section__text {
    margin-bottom: 0.9375rem;
  }
}
.swiper-section__author {
  color: #969696;
  font-weight: 400;
  line-height: 1.3;
}

.swiper-slide-active {
  z-index: 2;
}

.second-counter {
  z-index: 2;
  left: 47%;
  position: relative;
}
@media (min-width: 75em) {
  .second-counter {
    bottom: -7.5rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (bottom: clamp( -7.5rem , 2.7272728125rem  +  -13.63636375vw , 0.0000000625rem )) {
    .second-counter {
      bottom: clamp( -7.5rem , 2.7272728125rem  +  -13.63636375vw , 0.0000000625rem );
    }
  }
  @supports not (bottom: clamp( -7.5rem , 2.7272728125rem  +  -13.63636375vw , 0.0000000625rem )) {
    .second-counter {
      bottom: calc(0.0000000625rem + -7.5000000625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .second-counter {
    bottom: 0.0000000625rem;
  }
}
@media (max-width: 47.99875em) {
  .second-counter {
    display: none;
  }
}
.second-counter::before {
  content: "";
  position: absolute;
  bottom: 405px;
  height: 1px;
  background-color: #fff;
}
@media (min-width: 75em) {
  .second-counter::before {
    left: -34.25rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (left: clamp( -34.25rem , 0.9488636364rem  +  -46.9318181818vw , -8.4375rem )) {
    .second-counter::before {
      left: clamp( -34.25rem , 0.9488636364rem  +  -46.9318181818vw , -8.4375rem );
    }
  }
  @supports not (left: clamp( -34.25rem , 0.9488636364rem  +  -46.9318181818vw , -8.4375rem )) {
    .second-counter::before {
      left: calc(-8.4375rem + -25.8125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .second-counter::before {
    left: -8.4375rem;
  }
}
@media (min-width: 75em) {
  .second-counter::before {
    width: 10.5rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 5rem , 3rem  +  10vw , 10.5rem )) {
    .second-counter::before {
      width: clamp( 5rem , 3rem  +  10vw , 10.5rem );
    }
  }
  @supports not (width: clamp( 5rem , 3rem  +  10vw , 10.5rem )) {
    .second-counter::before {
      width: calc(5rem + 5.5 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .second-counter::before {
    width: 5rem;
  }
}
@media (max-width: 47.99875em) {
  .second-counter::before {
    display: none;
  }
}
.second-counter::after {
  content: "";
  position: absolute;
  bottom: 100px;
  height: 1px;
  background-color: #fff;
  transform: rotate(90deg);
}
@media (min-width: 75em) {
  .second-counter::after {
    right: -36rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (right: clamp( -36rem , 2.8636363636rem  +  -51.8181818182vw , -7.5rem )) {
    .second-counter::after {
      right: clamp( -36rem , 2.8636363636rem  +  -51.8181818182vw , -7.5rem );
    }
  }
  @supports not (right: clamp( -36rem , 2.8636363636rem  +  -51.8181818182vw , -7.5rem )) {
    .second-counter::after {
      right: calc(-7.5rem + -28.5 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .second-counter::after {
    right: -7.5rem;
  }
}
@media (min-width: 75em) {
  .second-counter::after {
    width: 4.375rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 2.1875rem , 1.3920454545rem  +  3.9772727273vw , 4.375rem )) {
    .second-counter::after {
      width: clamp( 2.1875rem , 1.3920454545rem  +  3.9772727273vw , 4.375rem );
    }
  }
  @supports not (width: clamp( 2.1875rem , 1.3920454545rem  +  3.9772727273vw , 4.375rem )) {
    .second-counter::after {
      width: calc(2.1875rem + 2.1875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .second-counter::after {
    width: 2.1875rem;
  }
}
@media (max-width: 47.99875em) {
  .second-counter::after {
    display: none;
  }
}
@media (min-width: 75em) {
  .clients {
    padding-top: 9.6875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-top: clamp( 4.6875rem , 2.8693181818rem  +  9.0909090909vw , 9.6875rem )) {
    .clients {
      padding-top: clamp( 4.6875rem , 2.8693181818rem  +  9.0909090909vw , 9.6875rem );
    }
  }
  @supports not (padding-top: clamp( 4.6875rem , 2.8693181818rem  +  9.0909090909vw , 9.6875rem )) {
    .clients {
      padding-top: calc(4.6875rem + 5 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .clients {
    padding-top: 4.6875rem;
  }
}
@media (min-width: 75em) {
  .clients {
    padding-bottom: 9.6875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-bottom: clamp( 4.6875rem , 2.8693181818rem  +  9.0909090909vw , 9.6875rem )) {
    .clients {
      padding-bottom: clamp( 4.6875rem , 2.8693181818rem  +  9.0909090909vw , 9.6875rem );
    }
  }
  @supports not (padding-bottom: clamp( 4.6875rem , 2.8693181818rem  +  9.0909090909vw , 9.6875rem )) {
    .clients {
      padding-bottom: calc(4.6875rem + 5 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .clients {
    padding-bottom: 4.6875rem;
  }
}
.clients__container {
  display: flex;
  align-items: center;
}
@media (min-width: 75em) {
  .clients__title-block {
    margin-right: 12.375rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-right: clamp( 0.0000000625rem , -4.4999999148rem  +  22.4999998864vw , 12.375rem )) {
    .clients__title-block {
      margin-right: clamp( 0.0000000625rem , -4.4999999148rem  +  22.4999998864vw , 12.375rem );
    }
  }
  @supports not (margin-right: clamp( 0.0000000625rem , -4.4999999148rem  +  22.4999998864vw , 12.375rem )) {
    .clients__title-block {
      margin-right: calc(0.0000000625rem + 12.3749999375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .clients__title-block {
    margin-right: 0.0000000625rem;
  }
}
.clients__uppertitle {
  font-weight: 500;
}
@media (min-width: 75em) {
  .clients__uppertitle {
    margin-bottom: 1.6875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-bottom: clamp( 0.9375rem , 0.6647727273rem  +  1.3636363636vw , 1.6875rem )) {
    .clients__uppertitle {
      margin-bottom: clamp( 0.9375rem , 0.6647727273rem  +  1.3636363636vw , 1.6875rem );
    }
  }
  @supports not (margin-bottom: clamp( 0.9375rem , 0.6647727273rem  +  1.3636363636vw , 1.6875rem )) {
    .clients__uppertitle {
      margin-bottom: calc(0.9375rem + 0.75 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .clients__uppertitle {
    margin-bottom: 0.9375rem;
  }
}
.clients__title {
  font-weight: 500;
  line-height: 1.3;
}
@media (min-width: 75em) {
  .clients__title {
    font-size: 2.125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (font-size: clamp( 1.5rem , 1.2727272727rem  +  1.1363636364vw , 2.125rem )) {
    .clients__title {
      font-size: clamp( 1.5rem , 1.2727272727rem  +  1.1363636364vw , 2.125rem );
    }
  }
  @supports not (font-size: clamp( 1.5rem , 1.2727272727rem  +  1.1363636364vw , 2.125rem )) {
    .clients__title {
      font-size: calc(1.5rem + 0.625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .clients__title {
    font-size: 1.5rem;
  }
}
@media (min-width: 75em) {
  .clients__title {
    width: 16.75rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 7.8125rem , 4.5625rem  +  16.25vw , 16.75rem )) {
    .clients__title {
      width: clamp( 7.8125rem , 4.5625rem  +  16.25vw , 16.75rem );
    }
  }
  @supports not (width: clamp( 7.8125rem , 4.5625rem  +  16.25vw , 16.75rem )) {
    .clients__title {
      width: calc(7.8125rem + 8.9375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .clients__title {
    width: 7.8125rem;
  }
}
.clients__list {
  display: flex;
  flex-wrap: wrap;
}
@media (min-width: 75em) {
  .clients__list {
    width: 37.5rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 0.0000000625rem , -13.6363635511rem  +  68.1818180682vw , 37.5rem )) {
    .clients__list {
      width: clamp( 0.0000000625rem , -13.6363635511rem  +  68.1818180682vw , 37.5rem );
    }
  }
  @supports not (width: clamp( 0.0000000625rem , -13.6363635511rem  +  68.1818180682vw , 37.5rem )) {
    .clients__list {
      width: calc(0.0000000625rem + 37.4999999375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .clients__list {
    width: 0.0000000625rem;
  }
}
@media (min-width: 75em) {
  .clients__list {
    row-gap: 3.125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (row-gap: clamp( 1.875rem , 1.4204545455rem  +  2.2727272727vw , 3.125rem )) {
    .clients__list {
      row-gap: clamp( 1.875rem , 1.4204545455rem  +  2.2727272727vw , 3.125rem );
    }
  }
  @supports not (row-gap: clamp( 1.875rem , 1.4204545455rem  +  2.2727272727vw , 3.125rem )) {
    .clients__list {
      row-gap: calc(1.875rem + 1.25 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .clients__list {
    row-gap: 1.875rem;
  }
}
:root {
  --dark-cl: #0E0E0E;
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base.scss","webpack://./src/scss/header.scss","webpack://./src/scss/base/mixins.scss","webpack://./src/scss/home.scss","webpack://./src/scss/utils/vars.scss"],"names":[],"mappings":"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CF;AACF;AI5ZE;ECpFF;IDqFG,gBAAA;EJ+ZD;AACF;AIjbE;ECpEF;IDqEG,aAAA;EJobD;AACF;AIjbC;EAEC;IC3EF;MD4EG,yEAhBc;IJmcb;EACF;EIjbA;IC/EF;MDgFG,sDAAA;IJobC;EACF;AACF;AIlbE;ECpFF;IDqFG,eAAA;EJqbD;AACF;AIvcE;ECpEF;IDqEG,WAAA;EJ0cD;AACF;AIvcC;EAEC;IC3EF;MD4EG,oEAhBc;IJydb;EACF;EIvcA;IC/EF;MDgFG,oDAAA;IJ0cC;EACF;AACF;AIxcE;ECpFF;IDqFG,eAAA;EJ2cD;AACF;AKxhBQ;EACI,WAAA;EACA,WAAA;EAEA,sBAAA;EACA,kBAAA;EACA,QAAA;ALyhBZ;AIpeE;EC3DM;ID4DL,cAAA;EJueD;AACF;AIpeC;EAEC;IClEM;MDmEL,uEAhBc;IJsfb;EACF;EIpeA;ICtEM;MDuEL,oDAAA;IJueC;EACF;AACF;AIreE;EC3EM;ID4EL,eAAA;EJweD;AACF;AI1fE;EC3DM;ID4DL,cAAA;EJ6fD;AACF;AI1fC;EAEC;IClEM;MDmEL,0DAhBc;IJ4gBb;EACF;EI1fA;ICtEM;MDuEL,qDAAA;IJ6fC;EACF;AACF;AI3fE;EC3EM;ID4EL,eAAA;EJ8fD;AACF;AIhhBE;ECjDE;IDkDD,mBAAA;EJmhBD;AACF;AIhhBC;EAEC;ICxDE;MDyDD,2EAhBc;IJkiBb;EACF;EIhhBA;IC5DE;MD6DD,uDAAA;IJmhBC;EACF;AACF;AIjhBE;ECjEE;IDkED,kBAAA;EJohBD;AACF;;AKjlBA;EACQ,kBAAA;EAIA,sBAAA;ALilBR;AI3iBE;EC3CF;ID4CG,eAAA;EJ8iBD;AACF;AI3iBC;EAEC;IClDF;MDmDG,yEAhBc;IJ6jBb;EACF;EI3iBA;ICtDF;MDuDG,mDAAA;IJ8iBC;EACF;AACF;AI5iBE;EC3DF;ID4DG,aAAA;EJ+iBD;AACF;AIjkBE;EC3CF;ID4CG,aAAA;EJokBD;AACF;AIjkBC;EAEC;IClDF;MDmDG,wEAhBc;IJmlBb;EACF;EIjkBA;ICtDF;MDuDG,oDAAA;IJokBC;EACF;AACF;AIlkBE;EC3DF;ID4DG,cAAA;EJqkBD;AACF;AIvlBE;EC3CF;ID4CG,eAAA;EJ0lBD;AACF;AIvlBC;EAEC;IClDF;MDmDG,0EAhBc;IJymBb;EACF;EIvlBA;ICtDF;MDuDG,mDAAA;IJ0lBC;EACF;AACF;AIxlBE;EC3DF;ID4DG,eAAA;EJ2lBD;AACF;AKlpBI;EAEI,gBAAA;EACA,gBAAA;EACA,WAAA;EACA,2CAAA;ALmpBR;AInnBE;ECrCE;IDsCD,mBAAA;EJsnBD;AACF;AInnBC;EAEC;IC5CE;MD6CD,2EAhBc;IJqoBb;EACF;EInnBA;IChDE;MDiDD,uDAAA;IJsnBC;EACF;AACF;AIpnBE;ECrDE;IDsDD,kBAAA;EJunBD;AACF;AKxqBQ;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,sBAAA;AL0qBZ;AKvqBI;EACI,WAAA;EACA,WAAA;EACA,WAAA;ALyqBR;;AKrqBA;EACI,kBAAA;EAKA,sBAAA;EACA,qBAAA;EACA,kBAAA;EAEA,gBAAA;EACA,qDAAA;ALmqBJ;AIhqBE;ECdF;IDeG,cAAA;EJmqBD;AACF;AIhqBC;EAEC;ICrBF;MDsBG,qEAhBc;IJkrBb;EACF;EIhqBA;ICzBF;MD0BG,gDAAA;IJmqBC;EACF;AACF;AIjqBE;EC9BF;ID+BG,UAAA;EJoqBD;AACF;AItrBE;ECdF;IDeG,gBAAA;EJyrBD;AACF;AItrBC;EAEC;ICrBF;MDsBG,0EAhBc;IJwsBb;EACF;EItrBA;ICzBF;MD0BG,mDAAA;IJyrBC;EACF;AACF;AIvrBE;EC9BF;ID+BG,cAAA;EJ0rBD;AACF;AI5sBE;ECdF;IDeG,eAAA;EJ+sBD;AACF;AI5sBC;EAEC;ICrBF;MDsBG,yEAhBc;IJ8tBb;EACF;EI5sBA;ICzBF;MD0BG,sDAAA;IJ+sBC;EACF;AACF;AI7sBE;EC9BF;ID+BG,gBAAA;EJgtBD;AACF;AIluBE;ECdF;IDeG,gBAAA;EJquBD;AACF;AIluBC;EAEC;ICrBF;MDsBG,0EAhBc;IJovBb;EACF;EIluBA;ICzBF;MD0BG,uDAAA;IJquBC;EACF;AACF;AInuBE;EC9BF;ID+BG,iBAAA;EJsuBD;AACF;AIxvBE;ECdF;IDeG,oBAAA;EJ2vBD;AACF;AIxvBC;EAEC;ICrBF;MDsBG,4EAhBc;IJ0wBb;EACF;EIxvBA;ICzBF;MD0BG,wDAAA;IJ2vBC;EACF;AACF;AIzvBE;EC9BF;ID+BG,kBAAA;EJ4vBD;AACF;AK/wBI;EACI,qBAAA;EACA,iCAAA;ALixBR;;AIlxBE;ECME;IDLD,gBAAA;EJsxBD;AACF;AInxBC;EAEC;ICDE;MDED,0EAhBc;IJqyBb;EACF;EInxBA;ICLE;MDMD,oDAAA;IJsxBC;EACF;AACF;AIpxBE;ECVE;IDWD,gBAAA;EJuxBD;AACF;;AK9xBA;EACI,kBAAA;EACA,UAAA;ALiyBJ;AI9yBE;ECWF;IDVG,eAAA;EJizBD;AACF;AI9yBC;EAEC;ICIF;MDHG,wEAbe;IJ6zBd;EACF;EI9yBA;ICAF;MDCG,kDAAA;IJizBC;EACF;AACF;AI/yBE;ECLF;IDMG,WAAA;EJkzBD;AACF;AKrzBI;EAJJ;IAKQ,aAAA;ELwzBN;AACF;;AKtzBA;EACI,kBAAA;EACA,UAAA;ALyzBJ;AI90BE;ECmBF;IDlBG,gBAAA;EJi1BD;AACF;AI90BC;EAEC;ICYF;MDXG,yEAbe;IJ61Bd;EACF;EI90BA;ICQF;MDPG,mDAAA;IJi1BC;EACF;AACF;AI/0BE;ECGF;IDFG,YAAA;EJk1BD;AACF;AK70BI;EAJJ;IAKQ,aAAA;ELg1BN;AACF;;AIz2BE;EC+BF;ID9BG,kBAAA;EJ62BD;AACF;AI12BC;EAEC;ICwBF;MDvBG,2EAhBc;IJ43Bb;EACF;EI12BA;ICoBF;MDnBG,uDAAA;IJ62BC;EACF;AACF;AI32BE;ECeF;IDdG,mBAAA;EJ82BD;AACF;AK91BI;EACI,aAAA;EACA,cAAA;ALg2BR;;AK71BA;EAGI,cAAA;EACA,kBAAA;AL81BJ;AIz4BE;ECuCF;IDtCG,iBAAA;EJ44BD;AACF;AIz4BC;EAEC;ICgCF;MD/BG,6EAhBc;IJ25Bb;EACF;EIz4BA;IC4BF;MD3BG,uDAAA;IJ44BC;EACF;AACF;AI14BE;ECuBF;IDtBG,gBAAA;EJ64BD;AACF;AI/5BE;ECuCF;IDtCG,wBAAA;EJk6BD;AACF;AI/5BC;EAEC;ICgCF;MD/BG,+EAhBc;IJi7Bb;EACF;EI/5BA;IC4BF;MD3BG,2DAAA;IJk6BC;EACF;AACF;AIh6BE;ECuBF;IDtBG,qBAAA;EJm6BD;AACF;AKz4BI;EAEI,gBAAA;AL04BR;AIx7BE;EC4CE;ID3CD,wBAAA;EJ27BD;AACF;AIx7BC;EAEC;ICqCE;MDpCD,kFAhBc;IJ08Bb;EACF;EIx7BA;ICiCE;MDhCD,6DAAA;IJ27BC;EACF;AACF;AIz7BE;EC4BE;ID3BD,wBAAA;EJ47BD;AACF;AK75BI;EAEI,gBAAA;EACA,gBAAA;AL85BR;AIl9BE;ECiDE;IDhDD,mBAAA;EJq9BD;AACF;AIl9BC;EAEC;IC0CE;MDzCD,0EAhBc;IJo+Bb;EACF;EIl9BA;ICsCE;MDrCD,sDAAA;IJq9BC;EACF;AACF;AIn9BE;ECiCE;IDhCD,iBAAA;EJs9BD;AACF;;AKj7BA;EACI,aAAA;EACA,uBAAA;ALo7BJ;AI7+BE;ECuDF;IDtDG,oBAAA;EJg/BD;AACF;AI7+BC;EAEC;ICgDF;MD/CG,6EAhBc;IJ+/Bb;EACF;EI7+BA;IC4CF;MD3CG,0DAAA;IJg/BC;EACF;AACF;AI9+BE;ECuCF;IDtCG,sBAAA;EJi/BD;AACF;AIngCE;ECuDF;IDtDG,aAAA;EJsgCD;AACF;AIngCC;EAEC;ICgDF;MD/CG,oEAhBc;IJqhCb;EACF;EIngCA;IC4CF;MD3CG,gDAAA;IJsgCC;EACF;AACF;AIpgCE;ECuCF;IDtCG,WAAA;EJugCD;AACF;AK79BI;EALJ;IAMQ,sBAAA;ELg+BN;AACF;AI9hCE;ECuDF;IDtDG,oBAAA;EJiiCD;AACF;AI9hCC;EAEC;ICgDF;MD/CG,4EAhBc;IJgjCb;EACF;EI9hCA;IC4CF;MD3CG,yDAAA;IJiiCC;EACF;AACF;AI/hCE;ECuCF;IDtCG,qBAAA;EJkiCD;AACF;AKn/BI;EAGI,kBAAA;ALm/BR;AIvjCE;ECiEE;IDhED,iBAAA;EJ0jCD;AACF;AIvjCC;EAEC;IC0DE;MDzDD,0EAhBc;IJykCb;EACF;EIvjCA;ICsDE;MDrDD,qDAAA;IJ0jCC;EACF;AACF;AIxjCE;ECiDE;IDhDD,cAAA;EJ2jCD;AACF;AI7kCE;ECiEE;IDhED,qBAAA;EJglCD;AACF;AI7kCC;EAEC;IC0DE;MDzDD,6EAhBc;IJ+lCb;EACF;EI7kCA;ICsDE;MDrDD,yDAAA;IJglCC;EACF;AACF;AI9kCE;ECiDE;IDhDD,oBAAA;EJilCD;AACF;AK5hCI;EAEI,gBAAA;AL6hCR;AItmCE;ECuEE;IDtED,kBAAA;EJymCD;AACF;AItmCC;EAEC;ICgEE;MD/DD,2EAhBc;IJwnCb;EACF;EItmCA;IC4DE;MD3DD,wDAAA;IJymCC;EACF;AACF;AIvmCE;ECuDE;IDtDD,mBAAA;EJ0mCD;AACF;AKjjCQ;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EAEA,gCAAA;ALkjCZ;AIpoCE;EC2EM;ID1EL,YAAA;EJuoCD;AACF;AIpoCC;EAEC;ICoEM;MDnEL,uEAhBc;IJspCb;EACF;EIpoCA;ICgEM;MD/DL,sDAAA;IJuoCC;EACF;AACF;AIroCE;EC2DM;ID1DL,gBAAA;EJwoCD;AACF;AI1pCE;ECsFE;IDrFD,iBAAA;EJ6pCD;AACF;AI1pCC;EAEC;IC+EE;MD9ED,6EAhBc;IJ4qCb;EACF;EI1pCA;IC2EE;MD1ED,uDAAA;IJ6pCC;EACF;AACF;AI3pCE;ECsEE;IDrED,gBAAA;EJ8pCD;AACF;AKtlCI;EAGI,gBAAA;ALslCR;AInrCE;EC0FE;IDzFD,oBAAA;EJsrCD;AACF;AInrCC;EAEC;ICmFE;MDlFD,8EAhBc;IJqsCb;EACF;EInrCA;IC+EE;MD9ED,yDAAA;IJsrCC;EACF;AACF;AIprCE;EC0EE;IDzED,oBAAA;EJurCD;AACF;AIzsCE;EC0FE;IDzFD,uBAAA;EJ4sCD;AACF;AIzsCC;EAEC;ICmFE;MDlFD,iFAhBc;IJ2tCb;EACF;EIzsCA;IC+EE;MD9ED,8DAAA;IJ4sCC;EACF;AACF;AI1sCE;EC0EE;IDzED,wBAAA;EJ6sCD;AACF;;AK7nCA;EACI,kBAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;ALgoCJ;AItuCE;ECkGF;IDjGG,uBAAA;EJyuCD;AACF;AItuCC;EAEC;IC2FF;MD1FG,gFAhBc;IJwvCb;EACF;EItuCA;ICuFF;MDtFG,4DAAA;IJyuCC;EACF;AACF;AIvuCE;ECkFF;IDjFG,sBAAA;EJ0uCD;AACF;AKppCI;EANJ;IAOQ,eAAA;IACA,WAAA;IACA,kBAAA;ELupCN;AACF;AKtpCI;EAXJ;IAYQ,eAAA;ELypCN;AACF;;AKtpCA;EAII,gCAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,gBAAA;EACA,UAAA;EACA,iCAAA;EACA,kBAAA;ALspCJ;AInxCE;ECkHF;IDjHG,sBAAA;EJsxCD;AACF;AInxCC;EAEC;IC2GF;MD1GG,+EAhBc;IJqyCb;EACF;EInxCA;ICuGF;MDtGG,2DAAA;IJsxCC;EACF;AACF;AIpxCE;ECkGF;IDjGG,qBAAA;EJuxCD;AACF;AIzyCE;ECkHF;IDjHG,yBAAA;EJ4yCD;AACF;AIzyCC;EAEC;IC2GF;MD1GG,kFAhBc;IJ2zCb;EACF;EIzyCA;ICuGF;MDtGG,8DAAA;IJ4yCC;EACF;AACF;AI1yCE;ECkGF;IDjGG,wBAAA;EJ6yCD;AACF;AI/zCE;ECkHF;IDjHG,gBAAA;EJk0CD;AACF;AI/zCC;EAEC;IC2GF;MD1GG,sEAhBc;IJi1Cb;EACF;EI/zCA;ICuGF;MDtGG,gDAAA;IJk0CC;EACF;AACF;AIh0CE;ECkGF;IDjGG,WAAA;EJm0CD;AACF;AKptCQ;EACI,qBAAA;ALstCZ;AKptCQ;EACI,wBAAA;ALstCZ;AKptCQ;EACI,gCAAA;ALstCZ;AKltCI;EACI,WAAA;EACA,kBAAA;EAGA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;ALktCR;AIt2CE;EC4IE;ID3ID,cAAA;EJy2CD;AACF;AIt2CC;EAEC;ICqIE;MDpID,sEAhBc;IJw3Cb;EACF;EIt2CA;ICiIE;MDhID,kDAAA;IJy2CC;EACF;AACF;AIv2CE;EC4HE;ID3HD,YAAA;EJ02CD;AACF;AI53CE;EC4IE;ID3ID,eAAA;EJ+3CD;AACF;AI53CC;EAEC;ICqIE;MDpID,yEAhBc;IJ84Cb;EACF;EI53CA;ICiIE;MDhID,sDAAA;IJ+3CC;EACF;AACF;AI73CE;EC4HE;ID3HD,gBAAA;EJg4CD;AACF;AK7vCQ;EATJ;IAUQ,aAAA;ELgwCV;AACF;AK7vCI;EACI,WAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,sBAAA;EACA,4BAAA;EACA,+BAAA;AL+vCR;AK5vCI;EACI,sBAAA;EACA,uBAAA;AL8vCR;AK3vCY;EACI,sBAAA;AL6vChB;AK1vCY;EACI,WAAA;AL4vChB;AKzvCQ;EACI,qBAAA;EACA,gBAAA;AL2vCZ;AKxvCQ;EACI,gCAAA;AL0vCZ;AKvvCQ;EACI,gCAAA;ALyvCZ;;AKlvCA;EACI,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;ALqvCJ;AI57CE;ECkMF;IDjMG,uBAAA;EJ+7CD;AACF;AI57CC;EAEC;IC2LF;MD1LG,gFAhBc;IJ88Cb;EACF;EI57CA;ICuLF;MDtLG,6DAAA;IJ+7CC;EACF;AACF;AI77CE;ECkLF;IDjLG,wBAAA;EJg8CD;AACF;;AKvwCA;EACI,aAAA;EACA,eAAA;EACA,uBAAA;EACA,SAAA;AL0wCJ;AKzwCI;EAEI,qFAAA;EACA,kBAAA;EAEA,gBAAA;ALywCR;AI99CE;ECgNE;ID/MD,YAAA;EJi+CD;AACF;AI99CC;EAEC;ICyME;MDxMD,sEAhBc;IJg/Cb;EACF;EI99CA;ICqME;MDpMD,iDAAA;IJi+CC;EACF;AACF;AI/9CE;ECgME;ID/LD,cAAA;EJk+CD;AACF;AIp/CE;ECgNE;ID/MD,aAAA;EJu/CD;AACF;AIp/CC;EAEC;ICyME;MDxMD,uEAhBc;IJsgDb;EACF;EIp/CA;ICqME;MDpMD,kDAAA;IJu/CC;EACF;AACF;AIr/CE;ECgME;ID/LD,eAAA;EJw/CD;AACF;AKpzCQ;EACI,2BAAA;ALszCZ;AKrzCW;EACK,4BAAA;ALuzChB;AKrzCW;EACC,iBAAA;ALuzCZ;AKlzCI;EACI,WAAA;EACA,YAAA;EACA,eAAA;EACA,4BAAA;ALozCR;AKjzCC;EACO,kBAAA;EACA,OAAA;EACA,SAAA;EAGA,2BAAA;EACA,+BAAA;ALizCR;AIhiDE;ECwOD;IDvOE,wBAAA;EJmiDD;AACF;AIhiDC;EAEC;ICiOD;MDhOE,kFAhBc;IJkjDb;EACF;EIhiDA;IC6ND;MD5NE,4DAAA;IJmiDC;EACF;AACF;AIjiDE;ECwND;IDvNE,wBAAA;EJoiDD;AACF;AItjDE;ECwOD;IDvOE,sBAAA;EJyjDD;AACF;AItjDC;EAEC;ICiOD;MDhOE,gFAhBc;IJwkDb;EACF;EItjDA;IC6ND;MD5NE,6DAAA;IJyjDC;EACF;AACF;AIvjDE;ECwND;IDvNE,uBAAA;EJ0jDD;AACF;AK11CC;EACO,eAAA;EACA,WAAA;EACA,qBAAA;AL41CR;AK31CQ;EAJP;IAKW,eAAA;EL81CV;AACF;AK31CC;EACO,eAAA;EACA,WAAA;AL61CR;AK51CQ;EAHP;IAIW,eAAA;EL+1CV;AACF;;AI/lDE;ECsQF;IDrQG,yBAAA;EJmmDD;AACF;AIhmDC;EAEC;IC+PF;MD9PG,mFAhBc;IJknDb;EACF;EIhmDA;IC2PF;MD1PG,8DAAA;IJmmDC;EACF;AACF;AIjmDE;ECsPF;IDrPG,yBAAA;EJomDD;AACF;AK92CI;EACI,aAAA;EACA,eAAA;EACA,uBAAA;ALg3CR;AI3nDE;ECwQE;IDvQD,YAAA;EJ8nDD;AACF;AI3nDC;EAEC;ICiQE;MDhQD,qEAhBc;IJ6oDb;EACF;EI3nDA;IC6PE;MD5PD,kDAAA;IJ8nDC;EACF;AACF;AI5nDE;ECwPE;IDvPD,aAAA;EJ+nDD;AACF;AKl4CI;EACI,kBAAA;EACA,gBAAA;ALo4CR;AKh4CY;EACI,UAAA;EACA,mBAAA;ALk4ChB;AIzpDE;EC2RE;ID1RD,gBAAA;EJ4pDD;AACF;AIzpDC;EAEC;ICoRE;MDnRD,4EAhBc;IJ2qDb;EACF;EIzpDA;ICgRE;MD/QD,wDAAA;IJ4pDC;EACF;AACF;AI1pDE;EC2QE;ID1QD,iBAAA;EJ6pDD;AACF;AI/qDE;EC2RE;ID1RD,gBAAA;EJkrDD;AACF;AI/qDC;EAEC;ICoRE;MDnRD,2EAhBc;IJisDb;EACF;EI/qDA;ICgRE;MD/QD,uDAAA;IJkrDC;EACF;AACF;AIhrDE;EC2QE;ID1QD,iBAAA;EJmrDD;AACF;AKr6CI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;ALu6CR;AI1sDE;ECgSE;ID/RD,oBAAA;EJ6sDD;AACF;AI1sDC;EAEC;ICyRE;MDxRD,8EAhBc;IJ4tDb;EACF;EI1sDA;ICqRE;MDpRD,2DAAA;IJ6sDC;EACF;AACF;AI3sDE;ECgRE;ID/QD,qBAAA;EJ8sDD;AACF;AIhuDE;ECgSE;ID/RD,qBAAA;EJmuDD;AACF;AIhuDC;EAEC;ICyRE;MDxRD,6EAhBc;IJkvDb;EACF;EIhuDA;ICqRE;MDpRD,0DAAA;IJmuDC;EACF;AACF;AIjuDE;ECgRE;ID/QD,sBAAA;EJouDD;AACF;AKh9CQ;EANJ;IAOQ,eAAA;ELm9CV;AACF;AKh9CI;EACI,eAAA;EACA,gBAAA;ALk9CR;AI/vDE;ECgTE;ID/SD,cAAA;EJkwDD;AACF;AI/vDC;EAEC;ICySE;MDxSD,wEAhBc;IJixDb;EACF;EI/vDA;ICqSE;MDpSD,gDAAA;IJkwDC;EACF;AACF;AIhwDE;ECgSE;ID/RD,cAAA;EJmwDD;AACF;AIrxDE;ECgTE;ID/SD,gBAAA;EJwxDD;AACF;AIrxDC;EAEC;ICySE;MDxSD,2EAhBc;IJuyDb;EACF;EIrxDA;ICqSE;MDpSD,uDAAA;IJwxDC;EACF;AACF;AItxDE;ECgSE;ID/RD,iBAAA;EJyxDD;AACF;AKt/CI;EACI,mBAAA;EACA,kBAAA;ALw/CR;AKt/CQ;EAJJ;IAKQ,eAAA;IACA,cAAA;ELy/CV;AACF;AKt/CI;EACI,kBAAA;ALw/CR;AKv/CQ;EAFJ;IAGQ,aAAA;EL0/CV;AACF;AKv/CI;EACI,WAAA;EACA,UAAA;EACA,UAAA;EACA,kBAAA;EACA,8FAAA;ALy/CR;AKv/CQ;EAPJ;IAQQ,WAAA;IACA,UAAA;EL0/CV;AACF;AKz/CQ;EAXJ;IAYQ,UAAA;IACA,SAAA;EL4/CV;AACF;;AKz/CA;EACI,aAAA;EACA,eAAA;EACA,2BAAA;EACA,kBAAA;AL4/CJ;AIv1DE;ECuVF;IDtVG,mBAAA;EJ01DD;AACF;AIv1DC;EAEC;ICgVF;MD/UG,6EAhBc;IJy2Db;EACF;EIv1DA;IC4UF;MD3UG,8DAAA;IJ01DC;EACF;AACF;AIx1DE;ECuUF;IDtUG,wBAAA;EJ21DD;AACF;AI72DE;ECuVF;IDtVG,qBAAA;EJg3DD;AACF;AI72DC;EAEC;ICgVF;MD/UG,8EAhBc;IJ+3Db;EACF;EI72DA;IC4UF;MD3UG,sDAAA;IJg3DC;EACF;AACF;AI92DE;ECuUF;IDtUG,qBAAA;EJi3DD;AACF;AIn4DE;ECuVF;IDtVG,sBAAA;EJs4DD;AACF;AIn4DC;EAEC;ICgVF;MD/UG,+EAhBc;IJq5Db;EACF;EIn4DA;IC4UF;MD3UG,4DAAA;IJs4DC;EACF;AACF;AIp4DE;ECuUF;IDtUG,uBAAA;EJu4DD;AACF;AK1jDI;EACI,mBAAA;EAEA,gBAAA;EACA,gBAAA;AL2jDR;AI95DE;EC+VE;ID9VD,kBAAA;EJi6DD;AACF;AI95DC;EAEC;ICwVE;MDvVD,2EAhBc;IJg7Db;EACF;EI95DA;ICoVE;MDnVD,wDAAA;IJi6DC;EACF;AACF;AI/5DE;EC+UE;ID9UD,mBAAA;EJk6DD;AACF;AIp7DE;EC+VE;ID9VD,iBAAA;EJu7DD;AACF;AIp7DC;EAEC;ICwVE;MDvVD,6EAhBc;IJs8Db;EACF;EIp7DA;ICoVE;MDnVD,uDAAA;IJu7DC;EACF;AACF;AIr7DE;EC+UE;ID9UD,gBAAA;EJw7DD;AACF;AKrmDQ;EACI,WAAA;EACA,kBAAA;EAEA,WAAA;EACA,gCAAA;EACA,WAAA;EACA,SAAA;ALsmDZ;AIl9DE;ECqWM;IDpWL,eAAA;EJq9DD;AACF;AIl9DC;EAEC;IC8VM;MD7VL,yEAhBc;IJo+Db;EACF;EIl9DA;IC0VM;MDzVL,sDAAA;IJq9DC;EACF;AACF;AIn9DE;ECqVM;IDpVL,gBAAA;EJs9DD;AACF;AIx+DE;EC+VE;ID9VD,mBAAA;EJ2+DD;AACF;AIx+DC;EAEC;ICwVE;MDvVD,6EAhBc;IJ0/Db;EACF;EIx+DA;ICoVE;MDnVD,8DAAA;IJ2+DC;EACF;AACF;AIz+DE;EC+UE;ID9UD,wBAAA;EJ4+DD;AACF;AKhpDQ;EAGI;IAEI,UAAA;EL+oDd;AACF;AIngEE;ECiXU;IDhXT,aAAA;EJsgED;AACF;AIngEC;EAEC;IC0WU;MDzWT,sEAhBc;IJqhEb;EACF;EIngEA;ICsWU;MDrWT,mDAAA;IJsgEC;EACF;AACF;AIpgEE;ECiWU;IDhWT,cAAA;EJugED;AACF;;AK9pDA;EACQ,gCAAA;EACA,aAAA;ALiqDR;AKhqDQ;EAHR;IAIY,aAAA;ELmqDV;AACF;AKlqDE;EACU,iBAAA;EACA,UAAA;EACA,gBAAA;EACA,kBAAA;ALoqDZ;AIziEE;ECiYA;IDhYC,sBAAA;EJ4iED;AACF;AIziEC;EAEC;IC0XA;MDzXC,gFAhBc;IJ2jEb;EACF;EIziEA;ICsXA;MDrXC,0DAAA;IJ4iEC;EACF;AACF;AI1iEE;ECiXA;IDhXC,sBAAA;EJ6iED;AACF;AI/jEE;ECiYA;IDhYC,0BAAA;EJkkED;AACF;AI/jEC;EAEC;IC0XA;MDzXC,oFAhBc;IJilEb;EACF;EI/jEA;ICsXA;MDrXC,8DAAA;IJkkEC;EACF;AACF;AIhkEE;ECiXA;IDhXC,wBAAA;EJmkED;AACF;AK7sDY;EACA,WAAA;EAGA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,kBAAA;EACA,yBAAA;AL6sDZ;AI7lEE;ECwYU;IDvYT,iBAAA;EJgmED;AACF;AI7lEC;EAEC;ICiYU;MDhYT,0EAhBc;IJ+mEb;EACF;EI7lEA;IC6XU;MD5XT,qDAAA;IJgmEC;EACF;AACF;AI9lEE;ECwXU;IDvXT,cAAA;EJimED;AACF;AInnEE;ECwYU;IDvYT,kBAAA;EJsnED;AACF;AInnEC;EAEC;ICiYU;MDhYT,2EAhBc;IJqoEb;EACF;EInnEA;IC6XU;MD5XT,sDAAA;IJsnEC;EACF;AACF;AIpnEE;ECwXU;IDvXT,eAAA;EJunED;AACF;AKxvDY;EATA;IAUI,aAAA;EL2vDd;AACF;AKvvDE;EACU,WAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;ALyvDZ;AIppEE;ECuZA;IDtZC,mBAAA;EJupED;AACF;AIppEC;EAEC;ICgZA;MD/YC,4EAhBc;IJsqEb;EACF;EIppEA;IC4YA;MD3YC,4DAAA;IJupEC;EACF;AACF;AIrpEE;ECuYA;IDtYC,uBAAA;EJwpED;AACF;AI1qEE;ECuZA;IDtZC,qBAAA;EJ6qED;AACF;AI1qEC;EAEC;ICgZA;MD/YC,8EAhBc;IJ4rEb;EACF;EI1qEA;IC4YA;MD3YC,sDAAA;IJ6qEC;EACF;AACF;AI3qEE;ECuYA;IDtYC,qBAAA;EJ8qED;AACF;AK9xDY;EAXV;IAYc,YAAA;ELiyDd;AACF;AK9xDE;EACU,SAAA;EACA,aAAA;EACA,sBAAA;ALgyDZ;AI1sEE;ECuaA;IDtaC,oBAAA;EJ6sED;AACF;AI1sEC;EAEC;ICgaA;MD/ZC,4EAhBc;IJ4tEb;EACF;EI1sEA;IC4ZA;MD3ZC,uDAAA;IJ6sEC;EACF;AACF;AI3sEE;ECuZA;IDtZC,oBAAA;EJ8sED;AACF;AIhuEE;ECuaA;IDtaC,qBAAA;EJmuED;AACF;AIhuEC;EAEC;ICgaA;MD/ZC,uFAhBc;IJkvEb;EACF;EIhuEA;IC4ZA;MD3ZC,yEAAA;IJmuEC;EACF;AACF;AIjuEE;ECuZA;IDtZC,6BAAA;EJouED;AACF;AKz0DY;EANV;IAOc,mBAAA;EL40Dd;AACF;AKz0DE;EACU,kBAAA;AL20DZ;AKx0DgB;EACI,WAAA;EACA,2BAAA;AL00DpB;AKz0DoB;EACI,UAAA;EACA,0BAAA;AL20DxB;AKx0DgB;EACI,UAAA;AL00DpB;AKr0DE;EACU,cAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,gDAAA;EAiBA,wBAAA;ALuzDZ;AKv0DY;EACI,WAAA;EACA,WAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,4BAAA;EACA,UAAA;EACA,kDAAA;ALy0DhB;AKx0DgB;EAXJ;IAYQ,aAAA;EL20DlB;AACF;AKr0DE;EACU,UAAA;EACA,eAAA;EACA,gBAAA;EACA,6BAAA;ALu0DZ;;AKl0DA;EACI,aAAA;ALq0DJ;AKp0DI;EAFJ;IAGQ,sBAAA;IACA,uBAAA;ELu0DN;AACF;;AIlzEE;EC8eF;ID7eG,iBAAA;EJszED;AACF;AInzEC;EAEC;ICueF;MDteG,6EAhBc;IJq0Eb;EACF;EInzEA;ICmeF;MDleG,sDAAA;IJszEC;EACF;AACF;AIpzEE;EC8dF;ID7dG,gBAAA;EJuzED;AACF;AIz0EE;EC8eF;ID7eG,qBAAA;EJ40ED;AACF;AIz0EC;EAEC;ICueF;MDteG,8EAhBc;IJ21Eb;EACF;EIz0EA;ICmeF;MDleG,sDAAA;IJ40EC;EACF;AACF;AI10EE;EC8dF;ID7dG,qBAAA;EJ60ED;AACF;AK32DE;EACU,WAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;AL62DZ;AIr2EE;ECofA;IDnfC,wBAAA;EJw2ED;AACF;AIr2EC;EAEC;IC6eA;MD5eC,kFAhBc;IJu3Eb;EACF;EIr2EA;ICyeA;MDxeC,4DAAA;IJw2EC;EACF;AACF;AIt2EE;ECoeA;IDneC,wBAAA;EJy2ED;AACF;;AI33EE;ECkgBF;IDjgBG,kBAAA;EJ+3ED;AACF;AI53EC;EAEC;IC2fF;MD1fG,uEAhBc;IJ84Eb;EACF;EI53EA;ICufF;MDtfG,kDAAA;IJ+3EC;EACF;AACF;AI73EE;ECkfF;IDjfG,iBAAA;EJg4ED;AACF;AIl5EE;ECkgBF;IDjgBG,uBAAA;EJq5ED;AACF;AIl5EC;EAEC;IC2fF;MD1fG,gFAhBc;IJo6Eb;EACF;EIl5EA;ICufF;MDtfG,6DAAA;IJq5EC;EACF;AACF;AIn5EE;ECkfF;IDjfG,wBAAA;EJs5ED;AACF;AKh6DI;EACI,aAAA;ALk6DR;AKj6DQ;EAFJ;IAGQ,sBAAA;ELo6DV;AACF;;AKh6DI;EADJ;IAEQ,cAAA;ELo6DN;AACF;AKn6DI;EACI,uBAAA;EACA,4BAAA;ALq6DR;AKp6DQ;EACI,oBAAA;ALs6DZ;AKl6DI;EACI,mBAAA;ALo6DR;AIh8EE;EC2hBE;ID1hBD,gBAAA;EJm8ED;AACF;AIh8EC;EAEC;ICohBE;MDnhBD,4EAhBc;IJk9Eb;EACF;EIh8EA;ICghBE;MD/gBD,wDAAA;IJm8EC;EACF;AACF;AIj8EE;EC2gBE;ID1gBD,iBAAA;EJo8ED;AACF;AIt9EE;EC2hBE;ID1hBD,iBAAA;EJy9ED;AACF;AIt9EC;EAEC;ICohBE;MDnhBD,4EAhBc;IJw+Eb;EACF;EIt9EA;ICghBE;MD/gBD,uDAAA;IJy9EC;EACF;AACF;AIv9EE;EC2gBE;ID1gBD,iBAAA;EJ09ED;AACF;AI5+EE;ECiiBE;IDhiBD,iBAAA;EJ++ED;AACF;AI5+EC;EAEC;IC0hBE;MDzhBD,2DAhBc;IJ8/Eb;EACF;EI5+EA;ICshBE;MDrhBD,sDAAA;IJ++EC;EACF;AACF;AI7+EE;ECihBE;IDhhBD,eAAA;EJg/ED;AACF;AIlgFE;ECqiBE;IDpiBD,sBAAA;EJqgFD;AACF;AIlgFC;EAEC;IC8hBE;MD7hBD,iFAhBc;IJohFb;EACF;EIlgFA;IC0hBE;MDzhBD,0DAAA;IJqgFC;EACF;AACF;AIngFE;ECqhBE;IDphBD,sBAAA;EJsgFD;AACF;AIxhFE;ECqiBE;IDpiBD,sBAAA;EJ2hFD;AACF;AIxhFC;EAEC;IC8hBE;MD7hBD,gFAhBc;IJ0iFb;EACF;EIxhFA;IC0hBE;MDzhBD,6DAAA;IJ2hFC;EACF;AACF;AIzhFE;ECqhBE;IDphBD,uBAAA;EJ4hFD;AACF;AI9iFE;ECqiBE;IDpiBD,gBAAA;EJijFD;AACF;AI9iFC;EAEC;IC8hBE;MD7hBD,2EAhBc;IJgkFb;EACF;EI9iFA;IC0hBE;MDzhBD,sDAAA;IJijFC;EACF;AACF;AI/iFE;ECqhBE;IDphBD,gBAAA;EJkjFD;AACF;AIpkFE;ECqiBE;IDpiBD,eAAA;EJukFD;AACF;AIpkFC;EAEC;IC8hBE;MD7hBD,oEAhBc;IJslFb;EACF;EIpkFA;IC0hBE;MDzhBD,gDAAA;IJukFC;EACF;AACF;AIrkFE;ECqhBE;IDphBD,YAAA;EJwkFD;AACF;AI1lFE;EC4iBE;ID3iBD,gBAAA;EJ6lFD;AACF;AI1lFC;EAEC;ICqiBE;MDpiBD,2EAhBc;IJ4mFb;EACF;EI1lFA;ICiiBE;MDhiBD,sDAAA;IJ6lFC;EACF;AACF;AI3lFE;EC4hBE;ID3hBD,gBAAA;EJ8lFD;AACF;AIhnFE;EC4iBE;ID3iBD,iBAAA;EJmnFD;AACF;AIhnFC;EAEC;ICqiBE;MDpiBD,4EAhBc;IJkoFb;EACF;EIhnFA;ICiiBE;MDhiBD,uDAAA;IJmnFC;EACF;AACF;AIjnFE;EC4hBE;ID3hBD,iBAAA;EJonFD;AACF;;AItoFE;ECijBF;IDhjBG,sBAAA;EJ0oFD;AACF;AIvoFC;EAEC;IC0iBF;MDziBG,6EAhBc;IJypFb;EACF;EIvoFA;ICsiBF;MDriBG,yDAAA;IJ0oFC;EACF;AACF;AIxoFE;ECiiBF;IDhiBG,mBAAA;EJ2oFD;AACF;AK1mEI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,YAAA;AL4mER;AInqFE;ECmjBE;IDljBD,wBAAA;EJsqFD;AACF;AInqFC;EAEC;IC4iBE;MD3iBD,gFAhBc;IJqrFb;EACF;EInqFA;ICwiBE;MDviBD,4DAAA;IJsqFC;EACF;AACF;AIpqFE;ECmiBE;IDliBD,sBAAA;EJuqFD;AACF;AK9nEI;EAII,eAAA;EACA,gBAAA;EACA,gBAAA;AL6nER;AI9rFE;EC2jBE;ID1jBD,sBAAA;EJisFD;AACF;AI9rFC;EAEC;ICojBE;MDnjBD,+EAhBc;IJgtFb;EACF;EI9rFA;ICgjBE;MD/iBD,0DAAA;IJisFC;EACF;AACF;AI/rFE;EC2iBE;ID1iBD,qBAAA;EJksFD;AACF;AIptFE;EC2jBE;ID1jBD,wBAAA;EJutFD;AACF;AIptFC;EAEC;ICojBE;MDnjBD,kFAhBc;IJsuFb;EACF;EIptFA;ICgjBE;MD/iBD,6DAAA;IJutFC;EACF;AACF;AIrtFE;EC2iBE;ID1iBD,wBAAA;EJwtFD;AACF;AI1uFE;EC2jBE;ID1jBD,gBAAA;EJ6uFD;AACF;AI1uFC;EAEC;ICojBE;MDnjBD,0EAhBc;IJ4vFb;EACF;EI1uFA;ICgjBE;MD/iBD,mDAAA;IJ6uFC;EACF;AACF;AI3uFE;EC2iBE;ID1iBD,cAAA;EJ8uFD;AACF;AK7rEQ;EARJ;IASQ,iBAAA;IACA,kBAAA;ELgsEV;AACF;AK9rEQ;EAbJ;IAeQ,cAAA;IACA,eAAA;ELgsEV;AACF;AI5wFE;EC2jBE;ID1jBD,oBAAA;EJ+wFD;AACF;AI5wFC;EAEC;ICojBE;MDnjBD,4EAhBc;IJ8xFb;EACF;EI5wFA;ICgjBE;MD/iBD,yDAAA;IJ+wFC;EACF;AACF;AI7wFE;EC2iBE;ID1iBD,qBAAA;EJgxFD;AACF;AIlyFE;EC+kBE;ID9kBD,qBAAA;EJqyFD;AACF;AIlyFC;EAEC;ICwkBE;MDvkBD,8EAhBc;IJozFb;EACF;EIlyFA;ICokBE;MDnkBD,yDAAA;IJqyFC;EACF;AACF;AInyFE;EC+jBE;ID9jBD,oBAAA;EJsyFD;AACF;AKtuEQ;EAHJ;IAIQ,iBAAA;ELyuEV;AACF;AI7zFE;EC+kBE;ID9kBD,mBAAA;EJg0FD;AACF;AI7zFC;EAEC;ICwkBE;MDvkBD,2EAhBc;IJ+0Fb;EACF;EI7zFA;ICokBE;MDnkBD,wDAAA;IJg0FC;EACF;AACF;AI9zFE;EC+jBE;ID9jBD,oBAAA;EJi0FD;AACF;;AIn1FE;EC6lBF;ID5lBG,yBAAA;EJu1FD;AACF;AIp1FC;EAEC;ICslBF;MDrlBG,oFAhBc;IJs2Fb;EACF;EIp1FA;ICklBF;MDjlBG,+DAAA;IJu1FC;EACF;AACF;AIr1FE;EC6kBF;ID5kBG,yBAAA;EJw1FD;AACF;AKxwEI;EAEI,kBAAA;EACA,gBAAA;EACA,gBAAA;ALywER;AI/2FE;ECkmBE;IDjmBD,kBAAA;EJk3FD;AACF;AI/2FC;EAEC;IC2lBE;MD1lBD,4EAhBc;IJi4Fb;EACF;EI/2FA;ICulBE;MDtlBD,0DAAA;IJk3FC;EACF;AACF;AIh3FE;ECklBE;IDjlBD,oBAAA;EJm3FD;AACF;AIr4FE;ECkmBE;IDjmBD,uBAAA;EJw4FD;AACF;AIr4FC;EAEC;IC2lBE;MD1lBD,8EAhBc;IJu5Fb;EACF;EIr4FA;ICulBE;MDtlBD,0DAAA;IJw4FC;EACF;AACF;AIt4FE;ECklBE;IDjlBD,qBAAA;EJy4FD;AACF;AKjzEI;EACI,aAAA;EACA,eAAA;EACA,uBAAA;ALmzER;AIh6FE;EC0mBE;IDzmBD,cAAA;EJm6FD;AACF;AIh6FC;EAEC;ICmmBE;MDlmBD,qEAhBc;IJk7Fb;EACF;EIh6FA;IC+lBE;MD9lBD,iDAAA;IJm6FC;EACF;AACF;AIj6FE;EC0lBE;IDzlBD,WAAA;EJo6FD;AACF;AKt0EQ;EANJ;IAOQ,2BAAA;ELy0EV;AACF;AKt0EI;EAGI,kBAAA;ALs0ER;AI97FE;ECqnBE;IDpnBD,eAAA;EJi8FD;AACF;AI97FC;EAEC;IC8mBE;MD7mBD,2EAhBc;IJg9Fb;EACF;EI97FA;IC0mBE;MDzmBD,qDAAA;IJi8FC;EACF;AACF;AI/7FE;ECqmBE;IDpmBD,gBAAA;EJk8FD;AACF;AIp9FE;ECqnBE;IDpnBD,qBAAA;EJu9FD;AACF;AIp9FC;EAEC;IC8mBE;MD7mBD,8EAhBc;IJs+Fb;EACF;EIp9FA;IC0mBE;MDzmBD,2DAAA;IJu9FC;EACF;AACF;AIr9FE;ECqmBE;IDpmBD,sBAAA;EJw9FD;AACF;AKh3EQ;EALJ;IAMQ,WAAA;ELm3EV;AACF;AKh3EI;EAEI,kBAAA;EACA,MAAA;EACA,OAAA;ALi3ER;AIp/FE;EC+nBE;ID9nBD,eAAA;EJu/FD;AACF;AIp/FC;EAEC;ICwnBE;MDvnBD,yEAhBc;IJsgGb;EACF;EIp/FA;IConBE;MDnnBD,sDAAA;IJu/FC;EACF;AACF;AIr/FE;EC+mBE;ID9mBD,gBAAA;EJw/FD;AACF;AKp4EI;EAEI,gBAAA;EACA,gBAAA;EACA,mBAAA;ALq4ER;AI/gGE;ECsoBE;IDroBD,iBAAA;EJkhGD;AACF;AI/gGC;EAEC;IC+nBE;MD9nBD,yEAhBc;IJiiGb;EACF;EI/gGA;IC2nBE;MD1nBD,sDAAA;IJkhGC;EACF;AACF;AIhhGE;ECsnBE;IDrnBD,kBAAA;EJmhGD;AACF;AKx5EI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;AL05ER;AKv5EI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;ALy5ER;AKv5EY;EACI,2BAAA;ALy5EhB;AKp5EI;EACI,oBAAA;EACA,+BAAA;ALs5ER;;AKh5EA;EAGI,gCAAA;EACA,gBAAA;ALi5EJ;AI9jGE;ECyqBF;IDxqBG,iBAAA;EJikGD;AACF;AI9jGC;EAEC;ICkqBF;MDjqBG,0EAhBc;IJglGb;EACF;EI9jGA;IC8pBF;MD7pBG,0DAAA;IJikGC;EACF;AACF;AI/jGE;ECypBF;IDxpBG,qBAAA;EJkkGD;AACF;AIplGE;ECyqBF;IDxqBG,wBAAA;EJulGD;AACF;AIplGC;EAEC;ICkqBF;MDjqBG,kFAhBc;IJsmGb;EACF;EIplGA;IC8pBF;MD7pBG,6DAAA;IJulGC;EACF;AACF;AIrlGE;ECypBF;IDxpBG,wBAAA;EJwlGD;AACF;AK57EI;EACI,kBAAA;AL87ER;AK77EQ;EACI,WAAA;EAGA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,kBAAA;EACA,yBAAA;AL67EZ;AIrnGE;ECgrBM;ID/qBL,iBAAA;EJwnGD;AACF;AIrnGC;EAEC;ICyqBM;MDxqBL,0EAhBc;IJuoGb;EACF;EIrnGA;ICqqBM;MDpqBL,qDAAA;IJwnGC;EACF;AACF;AItnGE;ECgqBM;ID/pBL,cAAA;EJynGD;AACF;AI3oGE;ECgrBM;ID/qBL,kBAAA;EJ8oGD;AACF;AI3oGC;EAEC;ICyqBM;MDxqBL,2EAhBc;IJ6pGb;EACF;EI3oGA;ICqqBM;MDpqBL,sDAAA;IJ8oGC;EACF;AACF;AI5oGE;ECgqBM;ID/pBL,eAAA;EJ+oGD;AACF;AKx+EY;EATJ;IAUQ,aAAA;EL2+Ed;AACF;AKv+EI;EACI,UAAA;ALy+ER;AKt+EI;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;ALw+ER;AI9qGE;ECysBE;IDxsBD,eAAA;EJirGD;AACF;AI9qGC;EAEC;ICksBE;MDjsBD,yEAhBc;IJgsGb;EACF;EI9qGA;IC8rBE;MD7rBD,sDAAA;IJirGC;EACF;AACF;AI/qGE;ECyrBE;IDxrBD,gBAAA;EJkrGD;AACF;AIpsGE;ECysBE;IDxsBD,sBAAA;EJusGD;AACF;AIpsGC;EAEC;ICksBE;MDjsBD,+EAhBc;IJstGb;EACF;EIpsGA;IC8rBE;MD7rBD,yDAAA;IJusGC;EACF;AACF;AIrsGE;ECyrBE;IDxrBD,sBAAA;EJwsGD;AACF;AK5gFI;EACI,WAAA;EAEA,gBAAA;EACA,gBAAA;EACA,kBAAA;AL6gFR;AIhuGE;EC8sBE;ID7sBD,iBAAA;EJmuGD;AACF;AIhuGC;EAEC;ICusBE;MDtsBD,2EAhBc;IJkvGb;EACF;EIhuGA;ICmsBE;MDlsBD,0DAAA;IJmuGC;EACF;AACF;AIjuGE;EC8rBE;ID7rBD,oBAAA;EJouGD;AACF;AItvGE;EC8sBE;ID7sBD,iBAAA;EJyvGD;AACF;AItvGC;EAEC;ICusBE;MDtsBD,4EAhBc;IJwwGb;EACF;EItvGA;ICmsBE;MDlsBD,sDAAA;IJyvGC;EACF;AACF;AIvvGE;EC8rBE;ID7rBD,eAAA;EJ0vGD;AACF;AI5wGE;EC8sBE;ID7sBD,wBAAA;EJ+wGD;AACF;AI5wGC;EAEC;ICusBE;MDtsBD,kFAhBc;IJ8xGb;EACF;EI5wGA;ICmsBE;MDlsBD,6DAAA;IJ+wGC;EACF;AACF;AI7wGE;EC8rBE;ID7rBD,wBAAA;EJgxGD;AACF;AK1kFI;EACI,cAAA;EACA,gBAAA;EACA,gBAAA;AL4kFR;;AK7jFA;EACI,UAAA;ALgkFJ;;AK5jFA;EACI,UAAA;EACA,SAAA;EAEA,kBAAA;AL8jFJ;AIjzGE;EC+uBF;ID9uBG,eAAA;EJozGD;AACF;AIjzGC;EAEC;ICwuBF;MDvuBG,+EAbe;IJg0Gd;EACF;EIjzGA;ICouBF;MDnuBG,oEAAA;IJozGC;EACF;AACF;AIlzGE;EC+tBF;ID9tBG,uBAAA;EJqzGD;AACF;AKllFI;EANJ;IAOQ,aAAA;ELqlFN;AACF;AKplFI;EACI,WAAA;EACA,kBAAA;EAEA,aAAA;EACA,WAAA;EAEA,sBAAA;ALolFR;AIn1GE;ECwvBE;IDvvBD,eAAA;EJs1GD;AACF;AIn1GC;EAEC;ICivBE;MDhvBD,4EAbe;IJk2Gd;EACF;EIn1GA;IC6uBE;MD5uBD,wDAAA;IJs1GC;EACF;AACF;AIp1GE;ECwuBE;IDvuBD,gBAAA;EJu1GD;AACF;AIz2GE;ECwvBE;IDvvBD,cAAA;EJ42GD;AACF;AIz2GC;EAEC;ICivBE;MDhvBD,8CAhBc;IJ23Gb;EACF;EIz2GA;IC6uBE;MD5uBD,8CAAA;IJ42GC;EACF;AACF;AI12GE;ECwuBE;IDvuBD,WAAA;EJ62GD;AACF;AK9nFQ;EATJ;IAUQ,aAAA;ELioFV;AACF;AK/nFI;EACI,WAAA;EACA,kBAAA;EAEA,aAAA;EACA,WAAA;EAEA,sBAAA;EACA,wBAAA;AL+nFR;AI54GE;ECqwBE;IDpwBD,aAAA;EJ+4GD;AACF;AI54GC;EAEC;IC8vBE;MD7vBD,uEAbe;IJ25Gd;EACF;EI54GA;IC0vBE;MDzvBD,mDAAA;IJ+4GC;EACF;AACF;AI74GE;ECqvBE;IDpvBD,cAAA;EJg5GD;AACF;AIl6GE;ECqwBE;IDpwBD,eAAA;EJq6GD;AACF;AIl6GC;EAEC;IC8vBE;MD7vBD,yEAhBc;IJo7Gb;EACF;EIl6GA;IC0vBE;MDzvBD,sDAAA;IJq6GC;EACF;AACF;AIn6GE;ECqvBE;IDpvBD,gBAAA;EJs6GD;AACF;AKzqFQ;EAVJ;IAWQ,aAAA;EL4qFV;AACF;AI77GE;EC0xBF;IDzxBG,sBAAA;EJg8GD;AACF;AI77GC;EAEC;ICmxBF;MDlxBG,gFAhBc;IJ+8Gb;EACF;EI77GA;IC+wBF;MD9wBG,uDAAA;IJg8GC;EACF;AACF;AI97GE;EC0wBF;IDzwBG,sBAAA;EJi8GD;AACF;AIn9GE;EC0xBF;IDzxBG,yBAAA;EJs9GD;AACF;AIn9GC;EAEC;ICmxBF;MDlxBG,mFAhBc;IJq+Gb;EACF;EIn9GA;IC+wBF;MD9wBG,0DAAA;IJs9GC;EACF;AACF;AIp9GE;EC0wBF;IDzwBG,yBAAA;EJu9GD;AACF;AK5sFI;EACI,aAAA;EACA,mBAAA;AL8sFR;AI7+GE;ECkyBE;IDjyBD,uBAAA;EJg/GD;AACF;AI7+GC;EAEC;IC2xBE;MD1xBD,yFAhBc;IJ+/Gb;EACF;EI7+GA;ICuxBE;MDtxBD,0EAAA;IJg/GC;EACF;AACF;AI9+GE;ECkxBE;IDjxBD,6BAAA;EJi/GD;AACF;AK7tFI;EACI,gBAAA;AL+tFR;AItgHE;ECsyBE;IDryBD,wBAAA;EJygHD;AACF;AItgHC;EAEC;IC+xBE;MD9xBD,kFAhBc;IJwhHb;EACF;EItgHA;IC2xBE;MD1xBD,4DAAA;IJygHC;EACF;AACF;AIvgHE;ECsxBE;IDrxBD,wBAAA;EJ0gHD;AACF;AKjvFI;EAEI,gBAAA;EACA,gBAAA;ALkvFR;AIhiHE;EC2yBE;ID1yBD,mBAAA;EJmiHD;AACF;AIhiHC;EAEC;ICoyBE;MDnyBD,0EAhBc;IJkjHb;EACF;EIhiHA;ICgyBE;MD/xBD,sDAAA;IJmiHC;EACF;AACF;AIjiHE;EC2xBE;ID1xBD,iBAAA;EJoiHD;AACF;AItjHE;EC2yBE;ID1yBD,eAAA;EJyjHD;AACF;AItjHC;EAEC;ICoyBE;MDnyBD,4DAhBc;IJwkHb;EACF;EItjHA;ICgyBE;MD/xBD,sDAAA;IJyjHC;EACF;AACF;AIvjHE;EC2xBE;ID1xBD,gBAAA;EJ0jHD;AACF;AK1xFI;EAEI,aAAA;EACA,eAAA;AL2xFR;AIhlHE;ECkzBE;IDjzBD,cAAA;EJmlHD;AACF;AIhlHC;EAEC;IC2yBE;MD1yBD,iFAhBc;IJkmHb;EACF;EIhlHA;ICuyBE;MDtyBD,mEAAA;IJmlHC;EACF;AACF;AIjlHE;ECkyBE;IDjyBD,sBAAA;EJolHD;AACF;AItmHE;ECkzBE;IDjzBD,iBAAA;EJymHD;AACF;AItmHC;EAEC;IC2yBE;MD1yBD,0EAhBc;IJwnHb;EACF;EItmHA;ICuyBE;MDtyBD,qDAAA;IJymHC;EACF;AACF;AIvmHE;ECkyBE;IDjyBD,iBAAA;EJ0mHD;AACF;AM5sHA;EACI,kBAAA;AN8sHJ","sourcesContent":["@use \"sass:math\";\r\n\r\n// Підключення міксинів ===========================================================================================================================================================================================================================================================================\r\n@import \"base/mixins\";\r\n\r\n// Підключення шрифтів ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - додати при підключенні через плагін\r\n\r\n// Підключити, якщо є локальні файли шрифтів\r\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');\r\n\r\n// Підключення іконкових шрифтів ==============================================================================================================================================================================================================================================================================\r\n// Підключити, якщо є файл іконкового шрифту\r\n//@import \"fonts/icons\";\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// Налаштування шаблону ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// За замовчуванням шрифт ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: \"Inter\";\r\n$fontSize: toRem(15); // де 14(px) - розмір шрифту за замовчуванням з макету\r\n\r\n// Основні кольори\r\n$mainColor: #0E0E0E; // Колір шрифту за замовчуванням\r\n\r\n// Палітра кольорів\r\n// @import \"base/colors-palette\";\r\n\r\n// Налаштування адаптивної сітки ===============================================================================================================================================================================================================================================================================================\r\n\r\n// Мінімальна ширина сторінки\r\n$minWidth: 320;\r\n// Ширина полотна (макету)\r\n$maxWidth: 1366;\r\n// Ширина обмежуючого контейнера (0 = немає обмеження)\r\n$maxWidthContainer: 1170;\r\n// Загальний відступ у контейнера\r\n// (30 = по 15px ліворуч і праворуч, 0 = немає відступу)\r\n$containerPadding: 30;\r\n\r\n// Ширина спрацьовування першого брейкпоінту\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поїнти\r\n$pc: em($containerWidth); // ПК, ноутбуки, деякі планшети у горизонтальному положенні\r\n$tablet: em(991.98); // Планшети, деякі телефони в горизонтальному положенні\r\n$mobile: em(767.98); // Телефони L\r\n$mobileSmall: em(479.98); // Телефони S\r\n\r\n// Тип адаптива:\r\n// 1 = чуйність (у контейнера немає брейкпоінтів),\r\n// 2 = по брейк-поїнт (контейнер змінює свою ширину по брейк-поїнт)\r\n$responsiveType: 1;\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// Обнулення ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import \"base/null\";\r\n\r\n// Стилі тега BODY ============================================================================================================================================================================================================================================================================================================================================================================================\r\nbody {\r\n\t// Скролл заблоковано\r\n\t.lock & {\r\n\t\toverflow: hidden;\r\n\t\ttouch-action: none;\r\n\t\toverscroll-behavior: none;\r\n\t}\r\n\t// Сайт завантажений\r\n\t.loaded & {\r\n\t}\r\n}\r\n// Оболонка wrapper ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n\tmin-height: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\toverflow: hidden;\r\n\t@supports (overflow: clip) {\r\n\t\toverflow: clip;\r\n\t}\r\n\t// Притискаємо footer\r\n\t> main {\r\n\t\tflex: 1 1 auto;\r\n\t}\r\n\t// Фікс для слайдерів\r\n\t> * {\r\n\t\tmin-width: 0;\r\n\t}\r\n}\r\n// Обмежуючий контейнер ======================================================================================================================================================================================================================\r\n/*\r\n(i) Стилі будуть застосовуватись до\r\nвсіх класів, що містять *__container\r\nНаприклад header__container, main__container і т.п.\r\nСніппет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n\t// Чуйна\r\n\t[class*=\"__container\"] {\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: toRem($containerWidth);\r\n\t\t\tmargin: 0 auto;\r\n\t\t}\r\n\t\t@if ($containerPadding>0) {\r\n\t\t\t@if ($maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\r\n\t\t\t} @else {\r\n\t\t\t\t@include adaptiveValue(\"padding-left\", math.div($containerPadding, 2), 15);\r\n\t\t\t\t@include adaptiveValue(\"padding-right\", math.div($containerPadding, 2), 15);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n} @else {\r\n\t// Брейк-поїнтами\r\n\t[class*=\"__container\"] {\r\n\t\tmargin: 0 auto;\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: toRem($containerWidth);\r\n\t\t} @else {\r\n\t\t\t@if ($containerPadding>0) {\r\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $pc) {\r\n\t\t\tmax-width: toRem(970);\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmax-width: toRem(750);\r\n\t\t}\r\n\t\t@media (max-width: $mobile) {\r\n\t\t\tmax-width: none;\r\n\t\t\t@if ($containerPadding>0 and $maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// Підключення базових стилів, шаблонів (заготівель) та допоміжних класів\r\n// Для підключення/вимкнення конкретних стилів дивись base.scss\r\n@import \"base\";\r\n\r\n// Підключення стилів загальних елементів проекту\r\n@import \"common\";\r\n\r\n// Підключення стилів окремих блоків\r\n@import \"header\";\r\n@import \"footer\";\r\n\r\n// Підключення стилів окремих сторінок\r\n@import \"home\";\r\n\r\n// Змінні\r\n\r\n@import \"utils/vars\";\r\n","* {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: 0px;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n\t// outline: none;\r\n}\r\na:focus,\r\na:active {\r\n\t// outline: none;\r\n}\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tmin-width: $minWidth + px;\r\n}\r\nbody {\r\n\tcolor: $mainColor;\r\n\tline-height: 1;\r\n\tfont-family: $fontFamily;\r\n\tfont-size: $fontSize;\r\n\t//text-rendering: optimizeLegibility;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n\tfont-family: $fontFamily;\r\n\tfont-size: inherit;\r\n\tline-height: inherit;\r\n}\r\nbutton {\r\n\tcursor: pointer;\r\n\tcolor: inherit;\r\n\tbackground-color: transparent;\r\n}\r\na {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\nul li {\r\n\tlist-style: none;\r\n}\r\nimg {\r\n\tvertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n","// Загальний файл елементів форм\r\n// Для підключення/відключення стилів конкретного елемента форми дивись base/forms/forms.scss\r\n@import \"base/forms/forms\";\r\n\r\n// Стилі попапів\r\n// @import \"base/popup\";\r\n\r\n// Стилі спойлерів\r\n// @import \"base/spollers\";\r\n\r\n// Стилі табів\r\n// @import \"base/tabs\";\r\n\r\n// Стилі мап\r\n// @import \"base/maps\";\r\n\r\n// Стилі блоку \"показати ще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стилі для липкого блоку\r\n// @import \"base/sticky\";\r\n\r\n// Стилі для повноекранного блоку\r\n// @import \"base/fullscreen\";\r\n\r\n// Стилі для поекраної прокрутки\r\n// Styles for fullpage scroll\r\n// @import \"base/fullpage\";\r\n\r\n// Стилі для ripple ефекту\r\n// Styles for ripple effect\r\n// @import \"base/ripple\";\r\n\r\n// Стилі для кастомного курсору\r\n// Styles for custom cursor\r\n// @import \"base/cursor\";\r\n\r\n// Стилі для чуйних картинок (IBG)\r\n// Сніппет (HTML): ibg (div з картинкою та класами)\r\n// Сніппет (HTML): ibga (a з картинкою та класами)\r\n[class*=\"-ibg\"] {\r\n\tposition: relative;\r\n\timg {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tobject-fit: cover;\r\n\t}\r\n}\r\n[class*=\"-ibg--contain\"] {\r\n\timg {\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n// Шаблони (заготівлі)\r\n// @extend %ім'я шаблону;\r\n// Сніппет (SCSS): ex\r\n\r\n// Лічильник для списку\r\n%listCounter {\r\n\tlist-style-type: none;\r\n\tcounter-reset: item;\r\n\tli {\r\n\t\tposition: relative;\r\n\t\t&:before {\r\n\t\t\tcounter-increment: item;\r\n\t\t\tcontent: counter(item);\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t}\r\n}\r\n// Адаптивне відео\r\n%responsiveVideo {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 0;\r\n\tpadding-bottom: 56.25%;\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n// Відео як фон\r\n%videoBackground {\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: fixed;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t\tz-index: -100;\r\n\t\ttransform: translateX(-50%) translateY(-50%);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}\r\n// Сірий фільтр\r\n%grayfilter {\r\n\ttransition: all 0.3s ease 0s;\r\n\tfilter: grayscale(1);\r\n\t@media (any-hover: hover) {\r\n\t\t&:hover {\r\n\t\t\tfilter: grayscale(0);\r\n\t\t}\r\n\t}\r\n}\r\n// Скасувати виділення\r\n%noselect {\r\n\tuser-select: none;\r\n}\r\n// Дзеркальне відображення\r\n%mirror {\r\n\ttransform: scale(-1, 1);\r\n}\r\n// Плавний скролл\r\n%smoothscroll {\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n// Сховати скролл\r\n%hidescroll {\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n","//====================================================================================================\r\n\r\n.header {\r\n\tbackground-color: var(--dark-cl);\r\n\tcolor: #fff;\r\n\t&__menu {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\t@media (max-width:580px){\r\n\t\t\tjustify-content: space-between;\r\n\t\t\theight: 52px;\r\n\t\t  }\r\n\t}\r\n\r\n\t&__logo {\r\n\t\tmargin-right: auto;\r\n\t\t@include adaptiveValue(\"font-size\", 20, 15);\r\n\t}\r\n}\r\n.menu {\r\n\r\n\t&__body {\r\n\t\t@include adaptiveValue(\"padding-top\", 35, 25);\r\n\t\t@include adaptiveValue(\"padding-bottom\", 35, 25);\r\n\t\tdisplay: flex;\r\n\t\tz-index: 10;\r\n\t\t@media (max-width:580px){\r\n\t\t\tflex-direction: column;\r\n\t\t\talign-items: center;\r\n\t\t  }\r\n\t}\r\n\r\n\t&__list {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\t@include adaptiveValue(\"margin-right\", 60, 50);\r\n\t\t@include adaptiveValue(\"gap\", 40, 30);\r\n\r\n\t\t@media (max-width:580px){\r\n\t\t\tflex-direction: column;\r\n\t\t\talign-items: center;\r\n\t\t\tmargin: 0;\r\n\t\t\tflex: 2;\r\n\t\t  }\r\n\t  }\r\n\r\n\t&__link {\r\n\t\t@include adaptiveValue(\"padding-top\", 35, 25);\r\n\t\t@include adaptiveValue(\"padding-bottom\", 35, 25);\r\n\t\tfont-size: 16px;\r\n\t\tposition: relative;\r\n\r\n\t\t@media (max-width:580px){\r\n\t\t\tfont-size: 28px;\r\n\t\t  }\r\n\t\t\r\n\t\t&::before {\r\n\t\t\tcontent: '';\r\n\t\t\tposition: absolute;\r\n\t\t\tdisplay: block;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 45px;\r\n\t\t\theight: 1px;\r\n\t\t\twidth: 100%;\r\n\t\t\tbackground-color: #fff;\r\n\t\t\ttransform: translateX(-100%);\r\n\t\t\topacity: 0;\r\n\t\t\tvisibility: hidden;\r\n\t\t\ttransition: visibility 0.5s ease, opacity 0.3s ease, transform 0.3s ease;\r\n\t\t}\r\n\r\n\t\t&:hover {\r\n\t\t\t&::before {\r\n\t\t\t\ttransform: translateX(0);\r\n\t\t\t\topacity: 1;\r\n\t\t\t\tvisibility: visible;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t&__link.current {\r\n\t\t&::before {\r\n\t\t\ttransform: translateX(0);\r\n\t\t\topacity: 1;\r\n\t\t\tvisibility: visible;\r\n\t\t}\r\n\t}\r\n}\r\n.socials-list {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\t@include adaptiveValue(\"gap\", 15, 10);\r\n\r\n\t@media (max-width:580px){\r\n\t\tgap: 30px;\r\n\t\tflex: 1;\r\n  \t}\r\n\r\n\t&__icon {\r\n\t\t@media (max-width:580px){\r\n\t\t\twidth: 25px;\r\n\t\t\theight: 25px;\r\n  \t}\r\n\t}\r\n}\r\n\r\n//====================================================================================================\r\n\r\n//Burger\r\n@media (max-width: 580px) {\r\n\t.menu__body {\r\n\t\tposition: fixed;\r\n\t\ttop: 52px;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttransform: translateX(-100%);\r\n\t\tbackground-color: var(--dark-cl);\r\n\t\toverflow: auto;\r\n\t\ttransition: transform 0.3s ease;\r\n\t}\r\n}\r\n\r\n.icon-menu {\r\n\t@media (min-width:580px){\r\n\t\tdisplay: none;  \r\n\t}\r\n\t@media (max-width: 580px) {\r\n\t\tdisplay: block;\r\n\t\tposition: relative;\r\n\t\twidth: toRem(30);\r\n\t\theight: toRem(18);\r\n\t\tz-index: 5;\r\n\t\t@media (any-hover: none) {\r\n\t\t\tcursor: default;\r\n\t\t}\r\n\t\tspan,\r\n\t\t&::before,\r\n\t\t&::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\tright: 0;\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: toRem(2);\r\n\t\t\tbackground-color: #fff;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t\t&::after {\r\n\t\t\tbottom: 0;\r\n\t\t\twidth: 50%;\r\n\t\t}\r\n\t\tspan {\r\n\t\t\ttop: calc(50% - toRem(1));\r\n\t\t}\r\n\t\t.menu-open & {\r\n\t\t\t+.menu__body {\r\n\t\t\t\ttransform: translateX(0);\r\n\t\t\t}\r\n\t\t\tspan {\r\n\t\t\t\twidth: 0;\r\n\t\t\t}\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t}\r\n\t\t\t&::before {\r\n\t\t\t\ttop: calc(50% - toRem(1));\r\n\t\t\t\ttransform: rotate(-45deg);\r\n\t\t\t}\r\n\t\t\t&::after {\r\n\t\t\t\tbottom: calc(50% - toRem(1));\r\n\t\t\t\ttransform: rotate(45deg);\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t}\r\n\t\t\t\r\n\t\t}\t\r\n\t}\r\n\t\r\n\t\r\n\r\n","//Підключення шрифту\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc:\r\n\t\t\turl(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"),\r\n\t\t\turl(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from: 100) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function toRem($px, $current: 16) {\r\n\t$result: math.div($px, $current) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивна властивість (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $keepSize: 0, $widthFrom: $containerWidth, $widthTo: $minWidth) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поїнти в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плаваючого значення\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{toRem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Отримання значення властивості\r\n\t$propertyValue: #{\"clamp(\" toRem($minSize) \",\" $flyValue \",\" toRem($startSize) \")\"};\r\n\t// Якщо негативні значення\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" toRem($startSize) \",\" $flyValue \",\" toRem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Встановлюємо значення за замовчуванням\r\n\t@if $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: toRem($startSize);\r\n\t\t}\r\n\t}\r\n\t// Адаптуємо розмір у проміжку між зазначеними ширинами в'юпорту\r\n\t@media (min-width: $widthToMedia) and (max-width: $widthFromMedia) {\r\n\t\t// Якщо підтримується clamp();\r\n\t\t@supports (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: $propertyValue;\r\n\t\t}\r\n\t\t// Якщо не підтримується clamp();\r\n\t\t@supports not (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: calc(#{toRem($minSize)} + #{$addSize} * (100vw - #{toRem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t\t}\r\n\t}\r\n\t@if $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: toRem($minSize);\r\n\t\t}\r\n\t}\r\n}\r\n","//====================================================================================================\r\n// Hero section\r\n//====================================================================================================\r\n.hero {\r\n    background-color: var(--dark-cl);\r\n    position: relative;\r\n    @include adaptiveValue(\"height\", 480, 270);\r\n    &__container {\r\n        position: relative;\r\n    }\r\n}\r\n\r\n.swiper-counter {\r\n    position: relative;\r\n    @include adaptiveValue(\"bottom\", 70, 30);\r\n    @include adaptiveValue(\"left\", 200, 15);\r\n    @include adaptiveValue(\"width\", 80, 50);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    color: #fff;\r\n    &__item {\r\n        &::after {\r\n            content: '';\r\n            height: 1px;\r\n            @include adaptiveValue(\"width\", 20, 10);\r\n            background-color: #fff;\r\n            position: absolute;\r\n            top: 7px;\r\n            @include adaptiveValue(\"left\", 30, 19);\r\n    }\r\n\r\n    &span {\r\n        @include adaptiveValue(\"font-size\", 14, 12);  \r\n    }\r\n    }\r\n}\r\n\r\n.block-title {\r\n        position: absolute;\r\n        @include adaptiveValue(\"top\", 175, 50);\r\n        @include adaptiveValue(\"left\", 200, 30);\r\n        @include adaptiveValue(\"width\", 516, 300);\r\n        padding: 40px 0 40px 0;\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 70, 36);\r\n        font-weight: 500;\r\n        line-height: 1.1;\r\n        color: #fff;\r\n        text-shadow: 4px 4px 2px rgba(0,0,0,0.6);\r\n        &::before {\r\n            content: '';\r\n            position: absolute;\r\n            top: 0;\r\n            left: 0;\r\n            height: 1px;\r\n            width: 70px;\r\n            background-color: #fff;\r\n        }\r\n    }\r\n    &::before {\r\n        content: '';\r\n        height: 1px;\r\n        width: 70px;\r\n    }\r\n}\r\n\r\n.btn-view {\r\n    position: absolute;\r\n    @include adaptiveValue(\"top\", 390, 160);\r\n    @include adaptiveValue(\"right\", 178, 20);\r\n    @include adaptiveValue(\"width\", 90, 55);\r\n    @include adaptiveValue(\"height\", 90, 55);\r\n    background-color: #fff;\r\n    color: var(--dark-cl);\r\n    border-radius: 50%;\r\n    @include adaptiveValue(\"font-size\", 15, 12);\r\n    font-weight: 500;\r\n    transition: transform 0.4s ease, box-shadow 0.4s ease;\r\n\r\n    &:hover {\r\n        transform: scale(1.1);\r\n        box-shadow: 2px 2px 15px 8px #fff;\r\n    }\r\n}\r\n\r\n.swiper-slide {\r\n    &__img {\r\n         @include adaptiveValue(\"height\", 580, 220);\r\n    }\r\n}\r\n\r\n.swiper-button-prev {\r\n    position: absolute;\r\n    top: 225px;\r\n    @include adaptiveValue(\"left\", -50, 400);\r\n    @media (max-width:958px){\r\n        display: none;\r\n      }\r\n}\r\n.swiper-button-next {\r\n    position: absolute;\r\n    top: 225px;\r\n    @include adaptiveValue(\"right\", -50, 400);\r\n    @media (max-width:958px){\r\n        display: none;\r\n      }\r\n}\r\n\r\n//====================================================================================================\r\n// About-us section\r\n//====================================================================================================\r\n.about-us {\r\n    @include adaptiveValue(\"padding-top\", 256, 40);\r\n\r\n    &__container--big {\r\n        width: 1306px;\r\n        margin: 0 auto;\r\n    }\r\n}\r\n.intro-block {\r\n    @include adaptiveValue(\"width\", 615, 290);\r\n    @include adaptiveValue(\"margin-bottom\", 93, 40);\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    &__label {\r\n        @include adaptiveValue(\"margin-bottom\", 25, 15);\r\n        font-weight: 500;\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 34, 24);\r\n        line-height: 1.3;\r\n        font-weight: 500;\r\n    }\r\n}\r\n.info-block {\r\n    display: flex;\r\n    justify-content: center;\r\n    @include adaptiveValue(\"margin-bottom\", 160, 60);\r\n    @include adaptiveValue(\"gap\", 110, 40);\r\n    @media (max-width:580px){\r\n        flex-direction: column;\r\n        @include adaptiveValue(\"padding-left\", 40, 20);\r\n      }\r\n\r\n    &__item--top-line {\r\n        @include adaptiveValue(\"width\", 391, 200);\r\n        @include adaptiveValue(\"padding-top\", 34, 20);\r\n        position: relative\r\n    }\r\n\r\n    &__text--big {\r\n        @include adaptiveValue(\"font-size\", 20, 18);\r\n        line-height: 1.5;\r\n\r\n        &::before {\r\n            content: '';\r\n            position: absolute;\r\n            top: 0;\r\n            left: 0;\r\n            height: 1px;\r\n            @include adaptiveValue(\"width\", 400, 210);\r\n            background-color: var(--dark-cl)\r\n        }\r\n    }\r\n\r\n    &__item--action {\r\n        @include adaptiveValue(\"width\", 463, 250);\r\n    }\r\n\r\n    &__text--small {\r\n        @include adaptiveValue(\"font-size\", 17, 15);\r\n        @include adaptiveValue(\"margin-bottom\", 50, 25);\r\n        line-height: 1.6;\r\n    }\r\n}\r\n\r\n\r\n.btn span {\r\n    position: relative;\r\n    z-index: 50;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    @include adaptiveValue(\"padding-left\", 39, 18);\r\n    @media (max-width: 959.98px) {\r\n        padding-left: 0;\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n    @media (max-width: 469.98px) {\r\n        font-size: 13px;\r\n    }\r\n}\r\n\r\n.btn {\r\n    @include adaptiveValue(\"padding-top\", 19, 10);\r\n    @include adaptiveValue(\"padding-bottom\", 19, 10);\r\n    @include adaptiveValue(\"width\", 170, 80);\r\n    background-color: var(--dark-cl);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    overflow: hidden;\r\n    z-index: 2;\r\n    outline: 1px solid var(--dark-cl);\r\n    position: relative;\r\n    \r\n\r\n    &:hover {\r\n        span {\r\n            color: var(--dark-cl);\r\n        }\r\n        &::before {\r\n            transform: translateX(0);\r\n        }\r\n        &::after {\r\n            background-color: var(--dark-cl);\r\n        }\r\n    }\r\n\r\n    &::after {\r\n        content: '';\r\n        position: absolute;\r\n        @include adaptiveValue(\"top\", 25, 12);\r\n        @include adaptiveValue(\"right\", 38, 19);\r\n        width: 6px;\r\n        height: 6px;\r\n        border-radius: 50%;\r\n        background-color: #fff;\r\n        @media (max-width: 959.98px) {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    &::before {\r\n        content: '';\r\n        position: absolute;\r\n        height: 100%;\r\n        width: 100%;\r\n        background-color: #fff;\r\n        transform: translateX(-125%);\r\n        transition: transform 0.4s ease;\r\n    }\r\n\r\n    &--reverse {\r\n        background-color: #fff;\r\n        outline: 1px solid #fff;\r\n\r\n        &:hover {\r\n            &::after {\r\n                background-color: #fff;\r\n            }\r\n\r\n            span {\r\n                color: #fff;\r\n            }\r\n        }\r\n        span {\r\n            color: var(--dark-cl);\r\n            font-weight: 500;\r\n        }\r\n\r\n        &::after {\r\n            background-color: var(--dark-cl);\r\n        }\r\n\r\n        &::before {\r\n            background-color: var(--dark-cl);\r\n        }\r\n    }\r\n}\r\n//====================================================================================================\r\n// Directions section\r\n//====================================================================================================\r\n.directions {\r\n    max-width: 1336px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    @include adaptiveValue(\"padding-bottom\", 140, 70);\r\n}\r\n\r\n.works-list {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 30px;\r\n    &__item {\r\n        @include adaptiveValue(\"width\", 304, 200);\r\n        background: linear-gradient(180deg, rgba(0, 0, 0, 0.13) 0%, rgba(0, 0, 0, 0.65) 100%);\r\n        position: relative;\r\n        @include adaptiveValue(\"height\", 400, 280);\r\n        overflow: hidden;\r\n        &:hover {\r\n            backdrop-filter: blur(10px);\r\n           .works-list__info {\r\n                transform: translateY(-16px);\r\n           }\r\n           .works-list__card {\r\n            filter: blur(7px);\r\n           }\r\n        }\r\n    }\r\n\r\n    &__card {\r\n        width: 100%;\r\n        height: 100%;\r\n        filter: blur(0);\r\n        transition: filter 0.5s ease;\r\n    }\r\n\r\n\t&__info {\r\n        position: absolute;\r\n        left: 0;\r\n        bottom: 0;\r\n        @include adaptiveValue(\"padding-right\", 93, 25);\r\n        @include adaptiveValue(\"padding-left\", 50, 25);\r\n        transform: translateY(16px);\r\n        transition: transform 0.5s ease;\r\n\t}\r\n\r\n\t&__text {\r\n        font-size: 20px;\r\n        color: #fff;\r\n        margin: 24px 0 24px 0;\r\n        @media (max-width: 499.98px) {\r\n            font-size: 18px; \r\n        }\r\n\t}\r\n\r\n\t&__more {\r\n        font-size: 16px;\r\n        color: #fff;\r\n        @media (max-width: 499.98px) {\r\n            font-size: 14px; \r\n        }\r\n\t}\r\n}\r\n//====================================================================================================\r\n// Directions section\r\n//====================================================================================================\r\n.featured {\r\n    @include adaptiveValue(\"padding-bottom\", 157, 75);\r\n    &__list {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        @include adaptiveValue(\"gap\", 100, 30);\r\n    }\r\n\r\n    &__item {\r\n        position: relative;\r\n        overflow: hidden;\r\n\r\n        &:hover,\r\n        &:focus {\r\n            .featured__btn {\r\n                opacity: 1;\r\n                visibility: visible;\r\n            }\r\n        }\r\n    }\r\n    &__image {\r\n        @include adaptiveValue(\"width\", 370, 185);\r\n        @include adaptiveValue(\"height\", 428, 214);\r\n    }\r\n\r\n    &__label {   \r\n        font-size: 24px;\r\n        font-weight: 500;\r\n        line-height: 1.4; \r\n        @include adaptiveValue(\"margin-top\", 34, 15);\r\n        @include adaptiveValue(\"margin-bottom\", 8, 4);\r\n        @media (max-width: 599.98px) {\r\n            font-size: 20px;\r\n        }\r\n    }\r\n\r\n    &__type {\r\n        font-size: 15px;\r\n        font-weight: 500;\r\n    }\r\n\r\n    &__image--big {\r\n        @include adaptiveValue(\"width\", 600, 280);\r\n        @include adaptiveValue(\"height\", 428, 194);\r\n    }\r\n\r\n    &__item--top {\r\n        padding-left: 100px;\r\n        padding-top: 160px;\r\n\r\n        @media (max-width: 1199.98px) {\r\n            padding-left: 0;\r\n            padding-top: 0;\r\n        }\r\n    }\r\n\r\n    &__item--bottom {\r\n        margin-top: -160px;\r\n        @media (max-width: 1199.98px) {\r\n            margin-top: 0;\r\n        }\r\n    }\r\n\r\n    &__btn {\r\n        left: 130px;\r\n        top: 200px;\r\n        opacity: 0;\r\n        visibility: hidden;\r\n        transition: opacity 0.5s ease, visibility 0.5s ease, transform 0.4s ease, box-shadow 0.4s ease;\r\n\r\n        @media (max-width: $mobile) {\r\n            left: 100px;\r\n            top: 100px;\r\n        }\r\n        @media (max-width: $mobileSmall) {\r\n            left: 66px;\r\n            top: 77px;\r\n        }\r\n    }\r\n}\r\n.introduction {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: first baseline;\r\n    position: relative;\r\n    @include adaptiveValue(\"margin-bottom\", 48, 25);\r\n    @include adaptiveValue(\"padding-left\", 100, 20);\r\n    @include adaptiveValue(\"padding-right\", 100, 50);\r\n    &__title {\r\n        margin-right: 375px;\r\n        @include adaptiveValue(\"font-size\", 100, 50);\r\n        font-weight: 500;\r\n        line-height: 1.1;\r\n        @include adaptiveValue(\"width\", 425, 250);\r\n        &::after {\r\n            content: '';\r\n            position: absolute;\r\n            @include adaptiveValue(\"width\", 70, 35);\r\n            height: 1px;\r\n            background-color: var(--dark-cl);\r\n            left: 680px;\r\n            top: 80px;\r\n        }\r\n        @media (max-width: 1199.98px) {\r\n            @include adaptiveValue(\"margin-bottom\", 48, 25);\r\n\r\n            &::after {\r\n                @include adaptiveValue(\"left\", 100, 50);\r\n                top: -40px;\r\n            }\r\n        }\r\n    }\r\n}\r\n//====================================================================================================\r\n// Process section\r\n//====================================================================================================\r\n.process {\r\n        background-color: var(--dark-cl);\r\n        height: 664px;\r\n        @media (max-width: 667.98px){\r\n            height: 764px;\r\n        }\r\n\t\t&__container {\r\n            max-width: 1300px;\r\n            z-index: 2;\r\n            overflow: hidden;\r\n            position: relative;\r\n            @include adaptiveValue(\"padding-top\", 149, 65);\r\n            @include adaptiveValue(\"padding-bottom\", 161, 70);\r\n            &::after {\r\n            content: '';\r\n            @include adaptiveValue(\"width\", 641, 200);\r\n            @include adaptiveValue(\"height\", 641, 200);\r\n            position: absolute;\r\n            right: -20%;\r\n            top: -35%;\r\n            border-radius: 50%;\r\n            background-color: #202020;\r\n            @media (max-width: 667.98px){\r\n                display: none;\r\n            }\r\n        }\r\n\t\t}\r\n\r\n\t\t&__title {\r\n            color: #FFF;\r\n            font-size: 48px;\r\n            font-weight: 500;\r\n            line-height: 1.2;\r\n            @include adaptiveValue(\"margin-bottom\", 80, 30); \r\n\r\n            @media (max-width: 667.98px){\r\n                @include adaptiveValue(\"padding-left\", 100, 20);\r\n            }\r\n\r\n            @media (max-width: 419.98px) {\r\n                width: 200px;\r\n            }\r\n\t\t}\r\n\r\n\t\t&__list {\r\n            gap: 24px;\r\n            display: flex;\r\n            flex-direction: column;\r\n            @include adaptiveValue(\"margin-left\", 60, 20);\r\n            @include adaptiveValue(\"margin-right\", 140, 0);\r\n            @media (max-width: 667.98px){\r\n                margin-bottom: 40px;\r\n            }\r\n\t\t}\r\n\r\n\t\t&__item {\r\n            position: relative;\r\n\r\n            &:hover {\r\n                .process__text {\r\n                    color: #fff;\r\n                    transform: translateX(20px);\r\n                    &::before {\r\n                        opacity: 1;\r\n                        transform: translateX(28%)\r\n                    }\r\n                }\r\n                .process__number {\r\n                    opacity: 1;\r\n                }\r\n            }\r\n\t\t}\r\n\r\n\t\t&__text {\r\n            color: #6F6F6F;\r\n            font-size: 24px;\r\n            font-weight: 500;\r\n            line-height: 1.4;\r\n            transition: color 0.4s ease, transform 0.4s ease;\r\n            &::before {\r\n                content: '';\r\n                width: 40px;\r\n                height: 1px;\r\n                background-color: #fff;\r\n                position: absolute;\r\n                left: -90px;\r\n                top: 17px;\r\n                transform: translateX(-100%);\r\n                opacity: 0;\r\n                transition: transform 0.4s ease, opacity 0.4s ease;\r\n                @media (max-width: 667.98px){\r\n                    display: none;\r\n                }\r\n            }\r\n\r\n            transform: translateX(0);\r\n\t\t}\r\n\r\n\t\t&__number {\r\n            opacity: 0;\r\n            font-size: 12px;\r\n            font-weight: 500;\r\n            transition: opacity 0.4s ease;\r\n\t\t}\r\n\r\n}\r\n\r\n.process-wrapper {\r\n    display: flex;\r\n    @media (max-width: 667.98px){\r\n        flex-direction: column;\r\n        justify-content: center;\r\n    }\r\n}\r\n\r\n.block-info {\r\n    @include adaptiveValue(\"width\", 395, 250);\r\n\r\n    @media (max-width: 667.98px){\r\n        @include adaptiveValue(\"padding-left\", 100, 20);\r\n    }\r\n\t\t&__text {\r\n            color: #FFF;\r\n            font-size: 17px;\r\n            font-weight: 400;\r\n            line-height: 1.5;\r\n            @include adaptiveValue(\"margin-bottom\", 53, 25); \r\n            \r\n\t\t}\r\n\r\n\t\t\r\n}\r\n//====================================================================================================\r\n//Create section\r\n//====================================================================================================\r\n.create {\r\n    @include adaptiveValue(\"padding-top\", 160, 80);\r\n    @include adaptiveValue(\"padding-bottom\", 140, 70);\r\n    &__container {\r\n    }\r\n\r\n    &__wrapper {\r\n        display: flex;\r\n        @media (max-width: 1037.98px) {\r\n            flex-direction: column;\r\n        }\r\n    }\r\n}\r\n.img-block {\r\n    @media (max-width: 1037.98px) {\r\n        margin: 0 auto;\r\n    }\r\n    &__item {\r\n        filter: grayscale(100%);\r\n        transition: filter 0.4s ease;\r\n        &:hover {\r\n            filter: grayscale(0);\r\n        }\r\n    }\r\n\r\n    &__item--big {\r\n        margin-bottom: 30px;\r\n        @include adaptiveValue(\"width\", 470, 235);\r\n        @include adaptiveValue(\"height\", 290, 145);\r\n    }\r\n\r\n    &__bottom {\r\n        @include adaptiveValue(\"width\", 575, 300);\r\n    }\r\n\r\n    &__item--small {\r\n        @include adaptiveValue(\"padding-left\", 130, 30);\r\n        @include adaptiveValue(\"margin-right\", 30, 15);\r\n        @include adaptiveValue(\"width\", 270, 135);\r\n        @include adaptiveValue(\"height\", 140, 80);\r\n    }\r\n\r\n    &__item--middle {\r\n        @include adaptiveValue(\"width\", 270, 135);\r\n        @include adaptiveValue(\"height\", 250, 125);\r\n    }\r\n}\r\n.create-info {\r\n    @include adaptiveValue(\"padding-top\", 93, 40);\r\n    &__title {\r\n        font-size: 28px;\r\n        font-weight: 500;\r\n        line-height: 1.3;\r\n        width: 357px;\r\n        @include adaptiveValue(\"margin-bottom\", 37, 20);\r\n    }\r\n\r\n    &__text {\r\n        @include adaptiveValue(\"padding-left\", 90, 20);\r\n        @include adaptiveValue(\"margin-bottom\", 53, 27);\r\n        @include adaptiveValue(\"width\", 438, 280);\r\n        font-size: 17px;\r\n        font-weight: 400;\r\n        line-height: 1.6; \r\n\r\n        @media (max-width: 1037.98px) {\r\n            margin-left: auto;\r\n            margin-right: auto;\r\n        }\r\n\r\n        @media (max-width: 483.98px) {\r\n            @include adaptiveValue(\"padding-left\", 40, 20);\r\n            margin-left: 0;\r\n            margin-right: 0;\r\n        }\r\n    }\r\n\r\n    &__btn {\r\n        @include adaptiveValue(\"margin-left\", 90, 20);\r\n\r\n        @media (max-width: 1037.98px) {\r\n            margin-left: auto;\r\n        }\r\n        @media (max-width: 483.98px) {\r\n            @include adaptiveValue(\"margin-left\", 40, 20);\r\n        }\r\n    }\r\n}\r\n//====================================================================================================\r\n//Values section\r\n//====================================================================================================\r\n.values {\r\n    @include adaptiveValue(\"padding-bottom\", 214, 107);\r\n    &__container {\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 100, 55);\r\n        text-align: center;\r\n        font-weight: 500;\r\n        line-height: 1.2;\r\n        @include adaptiveValue(\"margin-bottom\", 86, 40);\r\n    }\r\n\r\n    &__list {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        @include adaptiveValue(\"gap\", 75, 40);\r\n\r\n        @media (max-width: 651.98px) {\r\n            justify-content: flex-start;\r\n        }\r\n    }\r\n\r\n    &__item {\r\n        @include adaptiveValue(\"width\", 340, 250);\r\n        @include adaptiveValue(\"padding-left\", 100, 50);\r\n        position: relative;\r\n\r\n        @media (max-width: 651.98px) {\r\n            width: 100%;\r\n        }\r\n    }\r\n\r\n    &__img {\r\n        @include adaptiveValue(\"width\", 70, 35);\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n\r\n    &__label {\r\n        @include adaptiveValue(\"font-size\", 24, 20);\r\n        font-weight: 500;\r\n        line-height: 1.4; \r\n        margin-bottom: 17px;\r\n    }\r\n\r\n    &__text {  \r\n        font-size: 16px;\r\n        font-weight: 400;\r\n        line-height: 1.6;\r\n        margin-bottom: 19px;\r\n    }\r\n\r\n    &__more {\r\n        font-size: 16px;\r\n        font-weight: 500;\r\n        line-height: 1.6;\r\n        display: flex;\r\n        align-items: center; \r\n        &:hover {\r\n            .values__icon {\r\n                transform: translateX(15px);\r\n            }\r\n        }\r\n    }\r\n\r\n    &__icon {\r\n        fill: var(--dark-cl);\r\n        transition: transform 0.4s ease;\r\n    }\r\n}\r\n//====================================================================================================\r\n//Swiper section\r\n//====================================================================================================\r\n.swiper-section {\r\n    @include adaptiveValue(\"padding-top\", 128, 70);\r\n    @include adaptiveValue(\"padding-bottom\", 196, 70);\r\n    background-color: var(--dark-cl);\r\n    overflow: hidden;\r\n    &__container {\r\n        position: relative;\r\n        &::after {\r\n            content: '';\r\n            @include adaptiveValue(\"width\", 641, 200);\r\n            @include adaptiveValue(\"height\", 641, 200);\r\n            position: absolute;\r\n            left: 23%;\r\n            top: 23%;\r\n            border-radius: 50%;\r\n            background-color: #202020;\r\n            @media (max-width: 667.98px){\r\n                display: none;\r\n            } \r\n        }\r\n    }\r\n\r\n    &__wrapper {\r\n        z-index: 2;\r\n    }\r\n\r\n    &__slide {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    &__img-quote {\r\n        @include adaptiveValue(\"width\", 38, 19);\r\n        @include adaptiveValue(\"margin-bottom\", 92, 20);\r\n    }\r\n\r\n    &__text {\r\n        color: #FFF;\r\n        @include adaptiveValue(\"font-size\", 24, 15);\r\n        font-weight: 500;\r\n        line-height: 1.4;\r\n        text-align: center; \r\n        @include adaptiveValue(\"width\", 673, 300);\r\n        @include adaptiveValue(\"margin-bottom\", 33, 15);\r\n    }\r\n\r\n    &__author {\r\n        color: #969696;\r\n        font-weight: 400;\r\n        line-height: 1.3;\r\n    }\r\n}\r\n.values {\r\n\r\n    &__slider {\r\n    }\r\n\r\n    &__img-quote {\r\n    }\r\n}\r\n.swiper {\r\n}\r\n.swiper-wrapper {\r\n}\r\n.swiper-slide-active {\r\n    z-index: 2;\r\n}\r\n.swiper-pagination {\r\n}\r\n.second-counter {\r\n    z-index: 2;\r\n    left: 47%;\r\n    @include adaptiveValue(\"bottom\", -120, 0);\r\n    position: relative;\r\n\r\n    @media (max-width: $mobile) {\r\n        display: none;\r\n    }\r\n    &::before {\r\n        content: '';\r\n        position: absolute;\r\n        @include adaptiveValue(\"left\", -548, -135);\r\n        bottom: 405px;\r\n        height: 1px;\r\n        @include adaptiveValue(\"width\", 168, 80);\r\n        background-color: #fff;\r\n\r\n        @media (max-width: $mobile) {\r\n            display: none;\r\n        }\r\n    }\r\n    &::after {\r\n        content: '';\r\n        position: absolute;\r\n        @include adaptiveValue(\"right\", -576, -120);\r\n        bottom: 100px;\r\n        height: 1px;\r\n        @include adaptiveValue(\"width\", 70, 35);\r\n        background-color: #fff;\r\n        transform: rotate(90deg);\r\n\r\n        @media (max-width: $mobile) {\r\n            display: none;\r\n        }\r\n    }\r\n    &__item {\r\n    }\r\n}\r\n\r\n//====================================================================================================\r\n//Clients section\r\n//====================================================================================================\r\n.clients {\r\n    @include adaptiveValue(\"padding-top\", 155, 75);\r\n    @include adaptiveValue(\"padding-bottom\", 155, 75);\r\n    &__container {\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n\r\n    &__title-block {\r\n        @include adaptiveValue(\"margin-right\", 198, 0);\r\n    }\r\n\r\n    &__uppertitle {\r\n        font-weight: 500;\r\n        @include adaptiveValue(\"margin-bottom\", 27, 15);\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 34, 24);\r\n        font-weight: 500;\r\n        line-height: 1.3;\r\n        @include adaptiveValue(\"width\", 268, 125); \r\n    }\r\n\r\n    &__list {\r\n        @include adaptiveValue(\"width\", 600, 0);\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        @include adaptiveValue(\"row-gap\", 50, 30);\r\n    }\r\n\r\n    &__item {\r\n    }\r\n\r\n    &__icon {\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n",":root {\r\n    --dark-cl: #0E0E0E;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("31a0285b6fe1589388eb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jNzkyZDY0YzU0MDkwYWUxZTQ1ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw4R0FBOEcsa0JBQWtCO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx1VEFBdVQsTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sWUFBWSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sU0FBUyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLE1BQU0sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsUUFBUSxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFFBQVEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLFFBQVEsVUFBVSxXQUFXLFFBQVEsUUFBUSxVQUFVLFdBQVcsUUFBUSxRQUFRLFVBQVUsUUFBUSxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFFBQVEsUUFBUSxLQUFLLFVBQVUsUUFBUSxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLFdBQVcsT0FBTyxNQUFNLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLEtBQUssV0FBVyxPQUFPLE1BQU0sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLE1BQU0sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLE1BQU0sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxPQUFP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Z0NBQWdDLFNBQVMsNEJBQTRCLDZEQUE2RCxTQUFTLDJCQUEyQiw2QkFBNkIsOERBQThELFNBQVMsc0JBQXNCLDBEQUEwRCw2QkFBNkIsNkJBQTZCLHlEQUF5RCxTQUFTLHFCQUFxQixzREFBc0QsMEJBQTBCLDRCQUE0Qix3REFBd0QsU0FBUyxxQkFBcUIsU0FBUyxxQkFBcUIsU0FBUyxLQUFLLDBDQUEwQywyQkFBMkIsS0FBSyxtQkFBbUI7QUFDeHZ4RTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUN0dEh2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbioge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDMyMHB4O1xufVxuXG5ib2R5IHtcbiAgY29sb3I6ICMwRTBFMEU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LWZhbWlseTogXCJJbnRlclwiO1xuICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxudWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5pbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4ubG9jayBib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xufVxuLndyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQHN1cHBvcnRzIChvdmVyZmxvdzogY2xpcCkge1xuICAud3JhcHBlciB7XG4gICAgb3ZlcmZsb3c6IGNsaXA7XG4gIH1cbn1cbi53cmFwcGVyID4gbWFpbiB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLndyYXBwZXIgPiAqIHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4vKlxuKGkpINCh0YLQuNC70ZYg0LHRg9C00YPRgtGMINC30LDRgdGC0L7RgdC+0LLRg9Cy0LDRgtC40YHRjCDQtNC+XG7QstGB0ZbRhSDQutC70LDRgdGW0LIsINGJ0L4g0LzRltGB0YLRj9GC0YwgKl9fY29udGFpbmVyXG7QndCw0L/RgNC40LrQu9Cw0LQgaGVhZGVyX19jb250YWluZXIsIG1haW5fX2NvbnRhaW5lciDRliDRgi7Qvy5cbtCh0L3RltC/0L/QtdGCIChIVE1MKTogY250XG4qL1xuW2NsYXNzKj1fX2NvbnRhaW5lcl0ge1xuICBtYXgtd2lkdGg6IDc1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAwLjkzNzVyZW07XG59XG5cbltjbGFzcyo9LWliZ10ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5bY2xhc3MqPS1pYmddIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuW2NsYXNzKj0taWJnLS1jb250YWluXSBpbWcge1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmhlYWRlcl9fbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLmhlYWRlcl9fbWVudSB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogNTJweDtcbiAgfVxufVxuLmhlYWRlcl9fbG9nbyB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5oZWFkZXJfX2xvZ28ge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC44MjM4NjM2MzY0cmVtICArICAwLjU2ODE4MTgxODJ2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28ge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC44MjM4NjM2MzY0cmVtICArICAwLjU2ODE4MTgxODJ2dyAsIDEuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC44MjM4NjM2MzY0cmVtICArICAwLjU2ODE4MTgxODJ2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28ge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuOTM3NXJlbSArIDAuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXJfX2xvZ28ge1xuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICB9XG59XG5cbi5tZW51X19ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogMTA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubWVudV9fYm9keSB7XG4gICAgcGFkZGluZy10b3A6IDIuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fYm9keSB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fYm9keSB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygxLjU2MjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19ib2R5IHtcbiAgICBwYWRkaW5nLXRvcDogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubWVudV9fYm9keSB7XG4gICAgcGFkZGluZy1ib3R0b206IDIuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fYm9keSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fYm9keSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygxLjU2MjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19ib2R5IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLm1lbnVfX2JvZHkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuLm1lbnVfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm1lbnVfX2xpc3Qge1xuICAgIG1hcmdpbi1yaWdodDogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMy4xMjVyZW0gLCAyLjg5NzcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMy43NXJlbSApKSB7XG4gICAgLm1lbnVfX2xpc3Qge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjbGFtcCggMy4xMjVyZW0gLCAyLjg5NzcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMy43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAzLjEyNXJlbSAsIDIuODk3NzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAzLjc1cmVtICkpIHtcbiAgICAubWVudV9fbGlzdCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMy4xMjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19saXN0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubWVudV9fbGlzdCB7XG4gICAgZ2FwOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGdhcDogY2xhbXAoIDEuODc1cmVtICwgMS42NDc3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuNXJlbSApKSB7XG4gICAgLm1lbnVfX2xpc3Qge1xuICAgICAgZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAxLjY0NzcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGdhcDogY2xhbXAoIDEuODc1cmVtICwgMS42NDc3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuNXJlbSApKSB7XG4gICAgLm1lbnVfX2xpc3Qge1xuICAgICAgZ2FwOiBjYWxjKDEuODc1cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9fbGlzdCB7XG4gICAgZ2FwOiAxLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5tZW51X19saXN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZsZXg6IDI7XG4gIH1cbn1cbi5tZW51X19saW5rIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubWVudV9fbGluayB7XG4gICAgcGFkZGluZy10b3A6IDIuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fbGluayB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fbGluayB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygxLjU2MjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19saW5rIHtcbiAgICBwYWRkaW5nLXRvcDogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubWVudV9fbGluayB7XG4gICAgcGFkZGluZy1ib3R0b206IDIuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fbGluayB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fbGluayB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygxLjU2MjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19saW5rIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLm1lbnVfX2xpbmsge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxufVxuLm1lbnVfX2xpbms6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNDVweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbi5tZW51X19saW5rOmhvdmVyOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4ubWVudV9fbGluay5jdXJyZW50OjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5zb2NpYWxzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnNvY2lhbHMtbGlzdCB7XG4gICAgZ2FwOiAwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGdhcDogY2xhbXAoIDAuNjI1cmVtICwgMC41MTEzNjM2MzY0cmVtICArICAwLjU2ODE4MTgxODJ2dyAsIDAuOTM3NXJlbSApKSB7XG4gICAgLnNvY2lhbHMtbGlzdCB7XG4gICAgICBnYXA6IGNsYW1wKCAwLjYyNXJlbSAsIDAuNTExMzYzNjM2NHJlbSAgKyAgMC41NjgxODE4MTgydncgLCAwLjkzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMC42MjVyZW0gLCAwLjUxMTM2MzYzNjRyZW0gICsgIDAuNTY4MTgxODE4MnZ3ICwgMC45Mzc1cmVtICkpIHtcbiAgICAuc29jaWFscy1saXN0IHtcbiAgICAgIGdhcDogY2FsYygwLjYyNXJlbSArIDAuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zb2NpYWxzLWxpc3Qge1xuICAgIGdhcDogMC42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAuc29jaWFscy1saXN0IHtcbiAgICBnYXA6IDMwcHg7XG4gICAgZmxleDogMTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5zb2NpYWxzLWxpc3RfX2ljb24ge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLm1lbnVfX2JvZHkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUycHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTgwcHgpIHtcbiAgLmljb24tbWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5pY29uLW1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMS44NzVyZW07XG4gICAgaGVpZ2h0OiAxLjEyNXJlbTtcbiAgICB6LWluZGV4OiA1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIGFuZCAoYW55LWhvdmVyOiBub25lKSB7XG4gIC5pY29uLW1lbnUge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5pY29uLW1lbnUgc3BhbiwgLmljb24tbWVudTo6YmVmb3JlLCAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDAuMTI1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbiAgLmljb24tbWVudTo6YmVmb3JlIHtcbiAgICB0b3A6IDA7XG4gIH1cbiAgLmljb24tbWVudTo6YWZ0ZXIge1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5pY29uLW1lbnUgc3BhbiB7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDAuMDYyNXJlbSk7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51ICsgLm1lbnVfX2JvZHkge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnUgc3BhbiB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51OjpiZWZvcmUge1xuICAgIHRvcDogY2FsYyg1MCUgLSAwLjA2MjVyZW0pO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgYm90dG9tOiBjYWxjKDUwJSAtIDAuMDYyNXJlbSk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5oZXJvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5oZXJvIHtcbiAgICBoZWlnaHQ6IDMwcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAxNi44NzVyZW0gLCAxMi4xMDIyNzI3MjczcmVtICArICAyMy44NjM2MzYzNjM2dncgLCAzMHJlbSApKSB7XG4gICAgLmhlcm8ge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggMTYuODc1cmVtICwgMTIuMTAyMjcyNzI3M3JlbSAgKyAgMjMuODYzNjM2MzYzNnZ3ICwgMzByZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggMTYuODc1cmVtICwgMTIuMTAyMjcyNzI3M3JlbSAgKyAgMjMuODYzNjM2MzYzNnZ3ICwgMzByZW0gKSkge1xuICAgIC5oZXJvIHtcbiAgICAgIGhlaWdodDogY2FsYygxNi44NzVyZW0gKyAxMy4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaGVybyB7XG4gICAgaGVpZ2h0OiAxNi44NzVyZW07XG4gIH1cbn1cbi5oZXJvX19jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zd2lwZXItY291bnRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItY291bnRlciB7XG4gICAgYm90dG9tOiA0LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoYm90dG9tOiBjbGFtcCggMS44NzVyZW0gLCAwLjk2NTkwOTA5MDlyZW0gICsgIDQuNTQ1NDU0NTQ1NXZ3ICwgNC4zNzVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlciB7XG4gICAgICBib3R0b206IGNsYW1wKCAxLjg3NXJlbSAsIDAuOTY1OTA5MDkwOXJlbSAgKyAgNC41NDU0NTQ1NDU1dncgLCA0LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChib3R0b206IGNsYW1wKCAxLjg3NXJlbSAsIDAuOTY1OTA5MDkwOXJlbSAgKyAgNC41NDU0NTQ1NDU1dncgLCA0LjM3NXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyIHtcbiAgICAgIGJvdHRvbTogY2FsYygxLjg3NXJlbSArIDIuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItY291bnRlciB7XG4gICAgYm90dG9tOiAxLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyIHtcbiAgICBsZWZ0OiAxMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChsZWZ0OiBjbGFtcCggMC45Mzc1cmVtICwgLTMuMjY3MDQ1NDU0NXJlbSAgKyAgMjEuMDIyNzI3MjcyN3Z3ICwgMTIuNXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyIHtcbiAgICAgIGxlZnQ6IGNsYW1wKCAwLjkzNzVyZW0gLCAtMy4yNjcwNDU0NTQ1cmVtICArICAyMS4wMjI3MjcyNzI3dncgLCAxMi41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGxlZnQ6IGNsYW1wKCAwLjkzNzVyZW0gLCAtMy4yNjcwNDU0NTQ1cmVtICArICAyMS4wMjI3MjcyNzI3dncgLCAxMi41cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXIge1xuICAgICAgbGVmdDogY2FsYygwLjkzNzVyZW0gKyAxMS41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyIHtcbiAgICBsZWZ0OiAwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItY291bnRlciB7XG4gICAgd2lkdGg6IDVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMy4xMjVyZW0gLCAyLjQ0MzE4MTgxODJyZW0gICsgIDMuNDA5MDkwOTA5MXZ3ICwgNXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMy4xMjVyZW0gLCAyLjQ0MzE4MTgxODJyZW0gICsgIDMuNDA5MDkwOTA5MXZ3ICwgNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDMuMTI1cmVtICwgMi40NDMxODE4MTgycmVtICArICAzLjQwOTA5MDkwOTF2dyAsIDVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlciB7XG4gICAgICB3aWR0aDogY2FsYygzLjEyNXJlbSArIDEuODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyIHtcbiAgICB3aWR0aDogMy4xMjVyZW07XG4gIH1cbn1cbi5zd2lwZXItY291bnRlcl9faXRlbTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDdweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItY291bnRlcl9faXRlbTo6YWZ0ZXIge1xuICAgIHdpZHRoOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDAuNjI1cmVtICwgMC4zOTc3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlcl9faXRlbTo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IGNsYW1wKCAwLjYyNXJlbSAsIDAuMzk3NzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAxLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMC42MjVyZW0gLCAwLjM5NzcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyX19pdGVtOjphZnRlciB7XG4gICAgICB3aWR0aDogY2FsYygwLjYyNXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyX19pdGVtOjphZnRlciB7XG4gICAgd2lkdGg6IDAuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW06OmFmdGVyIHtcbiAgICBsZWZ0OiAxLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGVmdDogY2xhbXAoIDEuMTg3NXJlbSAsIDAuOTM3NXJlbSAgKyAgMS4yNXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlcl9faXRlbTo6YWZ0ZXIge1xuICAgICAgbGVmdDogY2xhbXAoIDEuMTg3NXJlbSAsIDAuOTM3NXJlbSAgKyAgMS4yNXZ3ICwgMS44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGVmdDogY2xhbXAoIDEuMTg3NXJlbSAsIDAuOTM3NXJlbSAgKyAgMS4yNXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlcl9faXRlbTo6YWZ0ZXIge1xuICAgICAgbGVmdDogY2FsYygxLjE4NzVyZW0gKyAwLjY4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW06OmFmdGVyIHtcbiAgICBsZWZ0OiAxLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItY291bnRlcl9faXRlbXNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjcwNDU0NTQ1NDVyZW0gICsgIDAuMjI3MjcyNzI3M3Z3ICwgMC44NzVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlcl9faXRlbXNwYW4ge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNzA0NTQ1NDU0NXJlbSAgKyAgMC4yMjcyNzI3MjczdncgLCAwLjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC43MDQ1NDU0NTQ1cmVtICArICAwLjIyNzI3MjcyNzN2dyAsIDAuODc1cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW1zcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjc1cmVtICsgMC4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW1zcGFuIHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cbn1cblxuLmJsb2NrLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiA0MHB4IDAgNDBweCAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJsb2NrLXRpdGxlIHtcbiAgICB0b3A6IDEwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHRvcDogY2xhbXAoIDMuMTI1cmVtICwgMC4yODQwOTA5MDkxcmVtICArICAxNC4yMDQ1NDU0NTQ1dncgLCAxMC45Mzc1cmVtICkpIHtcbiAgICAuYmxvY2stdGl0bGUge1xuICAgICAgdG9wOiBjbGFtcCggMy4xMjVyZW0gLCAwLjI4NDA5MDkwOTFyZW0gICsgIDE0LjIwNDU0NTQ1NDV2dyAsIDEwLjkzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAodG9wOiBjbGFtcCggMy4xMjVyZW0gLCAwLjI4NDA5MDkwOTFyZW0gICsgIDE0LjIwNDU0NTQ1NDV2dyAsIDEwLjkzNzVyZW0gKSkge1xuICAgIC5ibG9jay10aXRsZSB7XG4gICAgICB0b3A6IGNhbGMoMy4xMjVyZW0gKyA3LjgxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYmxvY2stdGl0bGUge1xuICAgIHRvcDogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5ibG9jay10aXRsZSB7XG4gICAgbGVmdDogMTIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGVmdDogY2xhbXAoIDEuODc1cmVtICwgLTEuOTg4NjM2MzYzNnJlbSAgKyAgMTkuMzE4MTgxODE4MnZ3ICwgMTIuNXJlbSApKSB7XG4gICAgLmJsb2NrLXRpdGxlIHtcbiAgICAgIGxlZnQ6IGNsYW1wKCAxLjg3NXJlbSAsIC0xLjk4ODYzNjM2MzZyZW0gICsgIDE5LjMxODE4MTgxODJ2dyAsIDEyLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGVmdDogY2xhbXAoIDEuODc1cmVtICwgLTEuOTg4NjM2MzYzNnJlbSAgKyAgMTkuMzE4MTgxODE4MnZ3ICwgMTIuNXJlbSApKSB7XG4gICAgLmJsb2NrLXRpdGxlIHtcbiAgICAgIGxlZnQ6IGNhbGMoMS44NzVyZW0gKyAxMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYmxvY2stdGl0bGUge1xuICAgIGxlZnQ6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYmxvY2stdGl0bGUge1xuICAgIHdpZHRoOiAzMi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxOC43NXJlbSAsIDEzLjg0MDkwOTA5MDlyZW0gICsgIDI0LjU0NTQ1NDU0NTV2dyAsIDMyLjI1cmVtICkpIHtcbiAgICAuYmxvY2stdGl0bGUge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxOC43NXJlbSAsIDEzLjg0MDkwOTA5MDlyZW0gICsgIDI0LjU0NTQ1NDU0NTV2dyAsIDMyLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTguNzVyZW0gLCAxMy44NDA5MDkwOTA5cmVtICArICAyNC41NDU0NTQ1NDU1dncgLCAzMi4yNXJlbSApKSB7XG4gICAgLmJsb2NrLXRpdGxlIHtcbiAgICAgIHdpZHRoOiBjYWxjKDE4Ljc1cmVtICsgMTMuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5ibG9jay10aXRsZSB7XG4gICAgd2lkdGg6IDE4Ljc1cmVtO1xuICB9XG59XG4uYmxvY2stdGl0bGVfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiA0cHggNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYmxvY2stdGl0bGVfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDQuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAyLjI1cmVtICwgMS40NzcyNzI3MjczcmVtICArICAzLjg2MzYzNjM2MzZ2dyAsIDQuMzc1cmVtICkpIHtcbiAgICAuYmxvY2stdGl0bGVfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDIuMjVyZW0gLCAxLjQ3NzI3MjcyNzNyZW0gICsgIDMuODYzNjM2MzYzNnZ3ICwgNC4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMi4yNXJlbSAsIDEuNDc3MjcyNzI3M3JlbSAgKyAgMy44NjM2MzYzNjM2dncgLCA0LjM3NXJlbSApKSB7XG4gICAgLmJsb2NrLXRpdGxlX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMi4yNXJlbSArIDIuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJsb2NrLXRpdGxlX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xuICB9XG59XG4uYmxvY2stdGl0bGVfX3RpdGxlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmJsb2NrLXRpdGxlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDcwcHg7XG59XG5cbi5idG4tdmlldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6IHZhcigtLWRhcmstY2wpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UsIGJveC1zaGFkb3cgMC40cyBlYXNlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICB0b3A6IDI0LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAodG9wOiBjbGFtcCggMTByZW0gLCA0Ljc3MjcyNzI3MjdyZW0gICsgIDI2LjEzNjM2MzYzNjR2dyAsIDI0LjM3NXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIHRvcDogY2xhbXAoIDEwcmVtICwgNC43NzI3MjcyNzI3cmVtICArICAyNi4xMzYzNjM2MzY0dncgLCAyNC4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAodG9wOiBjbGFtcCggMTByZW0gLCA0Ljc3MjcyNzI3MjdyZW0gICsgIDI2LjEzNjM2MzYzNjR2dyAsIDI0LjM3NXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIHRvcDogY2FsYygxMHJlbSArIDE0LjM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG4tdmlldyB7XG4gICAgdG9wOiAxMHJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICByaWdodDogMTEuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChyaWdodDogY2xhbXAoIDEuMjVyZW0gLCAtMi4zNDA5MDkwOTA5cmVtICArICAxNy45NTQ1NDU0NTQ1dncgLCAxMS4xMjVyZW0gKSkge1xuICAgIC5idG4tdmlldyB7XG4gICAgICByaWdodDogY2xhbXAoIDEuMjVyZW0gLCAtMi4zNDA5MDkwOTA5cmVtICArICAxNy45NTQ1NDU0NTQ1dncgLCAxMS4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocmlnaHQ6IGNsYW1wKCAxLjI1cmVtICwgLTIuMzQwOTA5MDkwOXJlbSAgKyAgMTcuOTU0NTQ1NDU0NXZ3ICwgMTEuMTI1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgcmlnaHQ6IGNhbGMoMS4yNXJlbSArIDkuODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICByaWdodDogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICB3aWR0aDogNS42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMy40Mzc1cmVtICwgMi42NDIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgd2lkdGg6IGNsYW1wKCAzLjQzNzVyZW0gLCAyLjY0MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNS42MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAzLjQzNzVyZW0gLCAyLjY0MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNS42MjVyZW0gKSkge1xuICAgIC5idG4tdmlldyB7XG4gICAgICB3aWR0aDogY2FsYygzLjQzNzVyZW0gKyAyLjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIHdpZHRoOiAzLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG4tdmlldyB7XG4gICAgaGVpZ2h0OiA1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggMy40Mzc1cmVtICwgMi42NDIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggMy40Mzc1cmVtICwgMi42NDIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDUuNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDMuNDM3NXJlbSAsIDIuNjQyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA1LjYyNXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIGhlaWdodDogY2FsYygzLjQzNzVyZW0gKyAyLjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIGhlaWdodDogMy40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42ODE4MTgxODE4cmVtICArICAwLjM0MDkwOTA5MDl2dyAsIDAuOTM3NXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjY4MTgxODE4MThyZW0gICsgIDAuMzQwOTA5MDkwOXZ3ICwgMC45Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjY4MTgxODE4MThyZW0gICsgIDAuMzQwOTA5MDkwOXZ3ICwgMC45Mzc1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuNzVyZW0gKyAwLjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgfVxufVxuLmJ0bi12aWV3OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBib3gtc2hhZG93OiAycHggMnB4IDE1cHggOHB4ICNmZmY7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItc2xpZGVfX2ltZyB7XG4gICAgaGVpZ2h0OiAzNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggMTMuNzVyZW0gLCA1LjU2ODE4MTgxODJyZW0gICsgIDQwLjkwOTA5MDkwOTF2dyAsIDM2LjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNsaWRlX19pbWcge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggMTMuNzVyZW0gLCA1LjU2ODE4MTgxODJyZW0gICsgIDQwLjkwOTA5MDkwOTF2dyAsIDM2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDEzLjc1cmVtICwgNS41NjgxODE4MTgycmVtICArICA0MC45MDkwOTA5MDkxdncgLCAzNi4yNXJlbSApKSB7XG4gICAgLnN3aXBlci1zbGlkZV9faW1nIHtcbiAgICAgIGhlaWdodDogY2FsYygxMy43NXJlbSArIDIyLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLXNsaWRlX19pbWcge1xuICAgIGhlaWdodDogMTMuNzVyZW07XG4gIH1cbn1cblxuLnN3aXBlci1idXR0b24tcHJldiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMjVweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICAgIGxlZnQ6IC0zLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGVmdDogY2xhbXAoIC0zLjEyNXJlbSAsIDM1LjIyNzI3MjcyNzNyZW0gICsgIC01MS4xMzYzNjM2MzY0dncgLCAyNXJlbSApKSB7XG4gICAgLnN3aXBlci1idXR0b24tcHJldiB7XG4gICAgICBsZWZ0OiBjbGFtcCggLTMuMTI1cmVtICwgMzUuMjI3MjcyNzI3M3JlbSAgKyAgLTUxLjEzNjM2MzYzNjR2dyAsIDI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGxlZnQ6IGNsYW1wKCAtMy4xMjVyZW0gLCAzNS4yMjcyNzI3MjczcmVtICArICAtNTEuMTM2MzYzNjM2NHZ3ICwgMjVyZW0gKSkge1xuICAgIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICAgICAgbGVmdDogY2FsYygyNXJlbSArIC0yOC4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcbiAgICBsZWZ0OiAyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk1OHB4KSB7XG4gIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnN3aXBlci1idXR0b24tbmV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMjVweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgIHJpZ2h0OiAtMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHJpZ2h0OiBjbGFtcCggLTMuMTI1cmVtICwgMzUuMjI3MjcyNzI3M3JlbSAgKyAgLTUxLjEzNjM2MzYzNjR2dyAsIDI1cmVtICkpIHtcbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgICAgIHJpZ2h0OiBjbGFtcCggLTMuMTI1cmVtICwgMzUuMjI3MjcyNzI3M3JlbSAgKyAgLTUxLjEzNjM2MzYzNjR2dyAsIDI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHJpZ2h0OiBjbGFtcCggLTMuMTI1cmVtICwgMzUuMjI3MjcyNzI3M3JlbSAgKyAgLTUxLjEzNjM2MzYzNjR2dyAsIDI1cmVtICkpIHtcbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgICAgIHJpZ2h0OiBjYWxjKDI1cmVtICsgLTI4LjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgIHJpZ2h0OiAyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk1OHB4KSB7XG4gIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmFib3V0LXVzIHtcbiAgICBwYWRkaW5nLXRvcDogMTZyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgLTIuNDA5MDkwOTA5MXJlbSAgKyAgMjQuNTQ1NDU0NTQ1NXZ3ICwgMTZyZW0gKSkge1xuICAgIC5hYm91dC11cyB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIC0yLjQwOTA5MDkwOTFyZW0gICsgIDI0LjU0NTQ1NDU0NTV2dyAsIDE2cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgLTIuNDA5MDkwOTA5MXJlbSAgKyAgMjQuNTQ1NDU0NTQ1NXZ3ICwgMTZyZW0gKSkge1xuICAgIC5hYm91dC11cyB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygyLjVyZW0gKyAxMy41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmFib3V0LXVzIHtcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xuICB9XG59XG4uYWJvdXQtdXNfX2NvbnRhaW5lci0tYmlnIHtcbiAgd2lkdGg6IDEzMDZweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5pbnRyby1ibG9jayB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm8tYmxvY2sge1xuICAgIHdpZHRoOiAzOC40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE4LjEyNXJlbSAsIDEwLjczODYzNjM2MzZyZW0gICsgIDM2LjkzMTgxODE4MTh2dyAsIDM4LjQzNzVyZW0gKSkge1xuICAgIC5pbnRyby1ibG9jayB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE4LjEyNXJlbSAsIDEwLjczODYzNjM2MzZyZW0gICsgIDM2LjkzMTgxODE4MTh2dyAsIDM4LjQzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxOC4xMjVyZW0gLCAxMC43Mzg2MzYzNjM2cmVtICArICAzNi45MzE4MTgxODE4dncgLCAzOC40Mzc1cmVtICkpIHtcbiAgICAuaW50cm8tYmxvY2sge1xuICAgICAgd2lkdGg6IGNhbGMoMTguMTI1cmVtICsgMjAuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyby1ibG9jayB7XG4gICAgd2lkdGg6IDE4LjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvLWJsb2NrIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1LjgxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAxLjI5NTQ1NDU0NTVyZW0gICsgIDYuMDIyNzI3MjcyN3Z3ICwgNS44MTI1cmVtICkpIHtcbiAgICAuaW50cm8tYmxvY2sge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIDEuMjk1NDU0NTQ1NXJlbSAgKyAgNi4wMjI3MjcyNzI3dncgLCA1LjgxMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIDEuMjk1NDU0NTQ1NXJlbSAgKyAgNi4wMjI3MjcyNzI3dncgLCA1LjgxMjVyZW0gKSkge1xuICAgIC5pbnRyby1ibG9jayB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDIuNXJlbSArIDMuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyby1ibG9jayB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICB9XG59XG4uaW50cm8tYmxvY2tfX2xhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyby1ibG9ja19fbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzEwMjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAxLjU2MjVyZW0gKSkge1xuICAgIC5pbnRyby1ibG9ja19fbGFiZWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzEwMjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAxLjU2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzEwMjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAxLjU2MjVyZW0gKSkge1xuICAgIC5pbnRyby1ibG9ja19fbGFiZWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygwLjkzNzVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyby1ibG9ja19fbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcbiAgfVxufVxuLmludHJvLWJsb2NrX190aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm8tYmxvY2tfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDIuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxLjVyZW0gLCAxLjI3MjcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xMjVyZW0gKSkge1xuICAgIC5pbnRyby1ibG9ja19fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMS4yNzI3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDEuNXJlbSAsIDEuMjcyNzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjEyNXJlbSApKSB7XG4gICAgLmludHJvLWJsb2NrX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMS41cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm8tYmxvY2tfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuXG4uaW5mby1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2sge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMy43NXJlbSAsIDEuNDc3MjcyNzI3M3JlbSAgKyAgMTEuMzYzNjM2MzYzNnZ3ICwgMTByZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAzLjc1cmVtICwgMS40NzcyNzI3MjczcmVtICArICAxMS4zNjM2MzYzNjM2dncgLCAxMHJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMy43NXJlbSAsIDEuNDc3MjcyNzI3M3JlbSAgKyAgMTEuMzYzNjM2MzYzNnZ3ICwgMTByZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMy43NXJlbSArIDYuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW5mby1ibG9jayB7XG4gICAgbWFyZ2luLWJvdHRvbTogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2sge1xuICAgIGdhcDogNi44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGdhcDogY2xhbXAoIDIuNXJlbSAsIDAuOTA5MDkwOTA5MXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA2Ljg3NXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2sge1xuICAgICAgZ2FwOiBjbGFtcCggMi41cmVtICwgMC45MDkwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDYuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGdhcDogY2xhbXAoIDIuNXJlbSAsIDAuOTA5MDkwOTA5MXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA2Ljg3NXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2sge1xuICAgICAgZ2FwOiBjYWxjKDIuNXJlbSArIDQuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmluZm8tYmxvY2sge1xuICAgIGdhcDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLmluZm8tYmxvY2sge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkgYW5kIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2sge1xuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjc5NTQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMi41cmVtICkpIHtcbiAgICAuaW5mby1ibG9jayB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgMC43OTU0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDIuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgMC43OTU0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDIuNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2sge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuMjVyZW0gKyAxLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW5mby1ibG9jayB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICB9XG59XG4uaW5mby1ibG9ja19faXRlbS0tdG9wLWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9ja19faXRlbS0tdG9wLWxpbmUge1xuICAgIHdpZHRoOiAyNC40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCA4LjE1OTA5MDkwOTFyZW0gICsgIDIxLjcwNDU0NTQ1NDV2dyAsIDI0LjQzNzVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCA4LjE1OTA5MDkwOTFyZW0gICsgIDIxLjcwNDU0NTQ1NDV2dyAsIDI0LjQzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxMi41cmVtICwgOC4xNTkwOTA5MDkxcmVtICArICAyMS43MDQ1NDU0NTQ1dncgLCAyNC40Mzc1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19faXRlbS0tdG9wLWxpbmUge1xuICAgICAgd2lkdGg6IGNhbGMoMTIuNXJlbSArIDExLjkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW5mby1ibG9ja19faXRlbS0tdG9wLWxpbmUge1xuICAgIHdpZHRoOiAxMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9ja19faXRlbS0tdG9wLWxpbmUge1xuICAgIHBhZGRpbmctdG9wOiAyLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAxLjI1cmVtICwgMC45MzE4MTgxODE4cmVtICArICAxLjU5MDkwOTA5MDl2dyAsIDIuMTI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19faXRlbS0tdG9wLWxpbmUge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAxLjI1cmVtICwgMC45MzE4MTgxODE4cmVtICArICAxLjU5MDkwOTA5MDl2dyAsIDIuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMS4yNXJlbSAsIDAuOTMxODE4MTgxOHJlbSAgKyAgMS41OTA5MDkwOTA5dncgLCAyLjEyNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX2l0ZW0tLXRvcC1saW5lIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDEuMjVyZW0gKyAwLjg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gICAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gIH1cbn1cbi5pbmZvLWJsb2NrX190ZXh0LS1iaWcge1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2tfX3RleHQtLWJpZyB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxLjEyNXJlbSAsIDEuMDc5NTQ1NDU0NXJlbSAgKyAgMC4yMjcyNzI3MjczdncgLCAxLjI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19fdGV4dC0tYmlnIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDEuMTI1cmVtICwgMS4wNzk1NDU0NTQ1cmVtICArICAwLjIyNzI3MjcyNzN2dyAsIDEuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMS4xMjVyZW0gLCAxLjA3OTU0NTQ1NDVyZW0gICsgIDAuMjI3MjcyNzI3M3Z3ICwgMS4yNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX3RleHQtLWJpZyB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMS4xMjVyZW0gKyAwLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrX190ZXh0LS1iaWcge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIH1cbn1cbi5pbmZvLWJsb2NrX190ZXh0LS1iaWc6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9ja19fdGV4dC0tYmlnOjpiZWZvcmUge1xuICAgIHdpZHRoOiAyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxMy4xMjVyZW0gLCA4LjgwNjgxODE4MThyZW0gICsgIDIxLjU5MDkwOTA5MDl2dyAsIDI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19fdGV4dC0tYmlnOjpiZWZvcmUge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxMy4xMjVyZW0gLCA4LjgwNjgxODE4MThyZW0gICsgIDIxLjU5MDkwOTA5MDl2dyAsIDI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTMuMTI1cmVtICwgOC44MDY4MTgxODE4cmVtICArICAyMS41OTA5MDkwOTA5dncgLCAyNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX3RleHQtLWJpZzo6YmVmb3JlIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEzLjEyNXJlbSArIDExLjg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrX190ZXh0LS1iaWc6OmJlZm9yZSB7XG4gICAgd2lkdGg6IDEzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2tfX2l0ZW0tLWFjdGlvbiB7XG4gICAgd2lkdGg6IDI4LjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTAuNzg0MDkwOTA5MXJlbSAgKyAgMjQuMjA0NTQ1NDU0NXZ3ICwgMjguOTM3NXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX2l0ZW0tLWFjdGlvbiB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDEwLjc4NDA5MDkwOTFyZW0gICsgIDI0LjIwNDU0NTQ1NDV2dyAsIDI4LjkzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMC43ODQwOTA5MDkxcmVtICArICAyNC4yMDQ1NDU0NTQ1dncgLCAyOC45Mzc1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19faXRlbS0tYWN0aW9uIHtcbiAgICAgIHdpZHRoOiBjYWxjKDE1LjYyNXJlbSArIDEzLjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW5mby1ibG9ja19faXRlbS0tYWN0aW9uIHtcbiAgICB3aWR0aDogMTUuNjI1cmVtO1xuICB9XG59XG4uaW5mby1ibG9ja19fdGV4dC0tc21hbGwge1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICBmb250LXNpemU6IDEuMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC44OTIwNDU0NTQ1cmVtICArICAwLjIyNzI3MjcyNzN2dyAsIDEuMDYyNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuODkyMDQ1NDU0NXJlbSAgKyAgMC4yMjcyNzI3MjczdncgLCAxLjA2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC44OTIwNDU0NTQ1cmVtICArICAwLjIyNzI3MjcyNzN2dyAsIDEuMDYyNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjkzNzVyZW0gKyAwLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrX190ZXh0LS1zbWFsbCB7XG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbmZvLWJsb2NrX190ZXh0LS1zbWFsbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjk5NDMxODE4MThyZW0gICsgIDIuODQwOTA5MDkwOXZ3ICwgMy4xMjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX190ZXh0LS1zbWFsbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMC45OTQzMTgxODE4cmVtICArICAyLjg0MDkwOTA5MDl2dyAsIDMuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjk5NDMxODE4MThyZW0gICsgIDIuODQwOTA5MDkwOXZ3ICwgMy4xMjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX190ZXh0LS1zbWFsbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuNTYyNXJlbSArIDEuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrX190ZXh0LS1zbWFsbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5cbi5idG4gc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNTA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0biBzcGFuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4xMjVyZW0gLCAwLjY0NzcyNzI3MjdyZW0gICsgIDIuMzg2MzYzNjM2NHZ3ICwgMi40Mzc1cmVtICkpIHtcbiAgICAuYnRuIHNwYW4ge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMS4xMjVyZW0gLCAwLjY0NzcyNzI3MjdyZW0gICsgIDIuMzg2MzYzNjM2NHZ3ICwgMi40Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMTI1cmVtICwgMC42NDc3MjcyNzI3cmVtICArICAyLjM4NjM2MzYzNjR2dyAsIDIuNDM3NXJlbSApKSB7XG4gICAgLmJ0biBzcGFuIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygxLjEyNXJlbSArIDEuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG4gc3BhbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk1OS45OHB4KSB7XG4gIC5idG4gc3BhbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ2OS45OHB4KSB7XG4gIC5idG4gc3BhbiB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAyO1xuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tZGFyay1jbCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG4ge1xuICAgIHBhZGRpbmctdG9wOiAxLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMC42MjVyZW0gLCAwLjQyMDQ1NDU0NTVyZW0gICsgIDEuMDIyNzI3MjcyN3Z3ICwgMS4xODc1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMC42MjVyZW0gLCAwLjQyMDQ1NDU0NTVyZW0gICsgIDEuMDIyNzI3MjcyN3Z3ICwgMS4xODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMC42MjVyZW0gLCAwLjQyMDQ1NDU0NTVyZW0gICsgIDEuMDIyNzI3MjcyN3Z3ICwgMS4xODc1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDAuNjI1cmVtICsgMC41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0biB7XG4gICAgcGFkZGluZy10b3A6IDAuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYnRuIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDAuNjI1cmVtICwgMC40MjA0NTQ1NDU1cmVtICArICAxLjAyMjcyNzI3Mjd2dyAsIDEuMTg3NXJlbSApKSB7XG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDAuNjI1cmVtICwgMC40MjA0NTQ1NDU1cmVtICArICAxLjAyMjcyNzI3Mjd2dyAsIDEuMTg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDAuNjI1cmVtICwgMC40MjA0NTQ1NDU1cmVtICArICAxLjAyMjcyNzI3Mjd2dyAsIDEuMTg3NXJlbSApKSB7XG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygwLjYyNXJlbSArIDAuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG4ge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0biB7XG4gICAgd2lkdGg6IDEwLjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCA1cmVtICwgMi45NTQ1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAxMC42MjVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgd2lkdGg6IGNsYW1wKCA1cmVtICwgMi45NTQ1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAxMC42MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCA1cmVtICwgMi45NTQ1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAxMC42MjVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgd2lkdGg6IGNhbGMoNXJlbSArIDUuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0biB7XG4gICAgd2lkdGg6IDVyZW07XG4gIH1cbn1cbi5idG46aG92ZXIgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbn1cbi5idG46aG92ZXI6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cbi5idG46aG92ZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG59XG4uYnRuOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG46OmFmdGVyIHtcbiAgICB0b3A6IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAodG9wOiBjbGFtcCggMC43NXJlbSAsIDAuNDU0NTQ1NDU0NXJlbSAgKyAgMS40NzcyNzI3MjczdncgLCAxLjU2MjVyZW0gKSkge1xuICAgIC5idG46OmFmdGVyIHtcbiAgICAgIHRvcDogY2xhbXAoIDAuNzVyZW0gLCAwLjQ1NDU0NTQ1NDVyZW0gICsgIDEuNDc3MjcyNzI3M3Z3ICwgMS41NjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHRvcDogY2xhbXAoIDAuNzVyZW0gLCAwLjQ1NDU0NTQ1NDVyZW0gICsgIDEuNDc3MjcyNzI3M3Z3ICwgMS41NjI1cmVtICkpIHtcbiAgICAuYnRuOjphZnRlciB7XG4gICAgICB0b3A6IGNhbGMoMC43NXJlbSArIDAuODEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG46OmFmdGVyIHtcbiAgICB0b3A6IDAuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG46OmFmdGVyIHtcbiAgICByaWdodDogMi4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHJpZ2h0OiBjbGFtcCggMS4xODc1cmVtICwgMC43NTU2ODE4MTgycmVtICArICAyLjE1OTA5MDkwOTF2dyAsIDIuMzc1cmVtICkpIHtcbiAgICAuYnRuOjphZnRlciB7XG4gICAgICByaWdodDogY2xhbXAoIDEuMTg3NXJlbSAsIDAuNzU1NjgxODE4MnJlbSAgKyAgMi4xNTkwOTA5MDkxdncgLCAyLjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChyaWdodDogY2xhbXAoIDEuMTg3NXJlbSAsIDAuNzU1NjgxODE4MnJlbSAgKyAgMi4xNTkwOTA5MDkxdncgLCAyLjM3NXJlbSApKSB7XG4gICAgLmJ0bjo6YWZ0ZXIge1xuICAgICAgcmlnaHQ6IGNhbGMoMS4xODc1cmVtICsgMS4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0bjo6YWZ0ZXIge1xuICAgIHJpZ2h0OiAxLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NTkuOThweCkge1xuICAuYnRuOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmJ0bjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyNSUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xufVxuLmJ0bi0tcmV2ZXJzZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG91dGxpbmU6IDFweCBzb2xpZCAjZmZmO1xufVxuLmJ0bi0tcmV2ZXJzZTpob3Zlcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmJ0bi0tcmV2ZXJzZTpob3ZlciBzcGFuIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYnRuLS1yZXZlcnNlIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tZGFyay1jbCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYnRuLS1yZXZlcnNlOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xufVxuLmJ0bi0tcmV2ZXJzZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG59XG5cbi5kaXJlY3Rpb25zIHtcbiAgbWF4LXdpZHRoOiAxMzM2cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5kaXJlY3Rpb25zIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogOC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCA0LjM3NXJlbSAsIDIuNzg0MDkwOTA5MXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA4Ljc1cmVtICkpIHtcbiAgICAuZGlyZWN0aW9ucyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMi43ODQwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDguNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCA0LjM3NXJlbSAsIDIuNzg0MDkwOTA5MXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA4Ljc1cmVtICkpIHtcbiAgICAuZGlyZWN0aW9ucyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyg0LjM3NXJlbSArIDQuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmRpcmVjdGlvbnMge1xuICAgIHBhZGRpbmctYm90dG9tOiA0LjM3NXJlbTtcbiAgfVxufVxuXG4ud29ya3MtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMzBweDtcbn1cbi53b3Jrcy1saXN0X19pdGVtIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLCAwLCAwLCAwLjEzKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjY1KSAxMDAlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLndvcmtzLWxpc3RfX2l0ZW0ge1xuICAgIHdpZHRoOiAxOXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxMi41cmVtICwgMTAuMTM2MzYzNjM2NHJlbSAgKyAgMTEuODE4MTgxODE4MnZ3ICwgMTlyZW0gKSkge1xuICAgIC53b3Jrcy1saXN0X19pdGVtIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDEwLjEzNjM2MzYzNjRyZW0gICsgIDExLjgxODE4MTgxODJ2dyAsIDE5cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDEwLjEzNjM2MzYzNjRyZW0gICsgIDExLjgxODE4MTgxODJ2dyAsIDE5cmVtICkpIHtcbiAgICAud29ya3MtbGlzdF9faXRlbSB7XG4gICAgICB3aWR0aDogY2FsYygxMi41cmVtICsgNi41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLndvcmtzLWxpc3RfX2l0ZW0ge1xuICAgIHdpZHRoOiAxMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAud29ya3MtbGlzdF9faXRlbSB7XG4gICAgaGVpZ2h0OiAyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggMTcuNXJlbSAsIDE0Ljc3MjcyNzI3MjdyZW0gICsgIDEzLjYzNjM2MzYzNjR2dyAsIDI1cmVtICkpIHtcbiAgICAud29ya3MtbGlzdF9faXRlbSB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCAxNy41cmVtICwgMTQuNzcyNzI3MjcyN3JlbSAgKyAgMTMuNjM2MzYzNjM2NHZ3ICwgMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggMTcuNXJlbSAsIDE0Ljc3MjcyNzI3MjdyZW0gICsgIDEzLjYzNjM2MzYzNjR2dyAsIDI1cmVtICkpIHtcbiAgICAud29ya3MtbGlzdF9faXRlbSB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTcuNXJlbSArIDcuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC53b3Jrcy1saXN0X19pdGVtIHtcbiAgICBoZWlnaHQ6IDE3LjVyZW07XG4gIH1cbn1cbi53b3Jrcy1saXN0X19pdGVtOmhvdmVyIHtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xufVxuLndvcmtzLWxpc3RfX2l0ZW06aG92ZXIgLndvcmtzLWxpc3RfX2luZm8ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE2cHgpO1xufVxuLndvcmtzLWxpc3RfX2l0ZW06aG92ZXIgLndvcmtzLWxpc3RfX2NhcmQge1xuICBmaWx0ZXI6IGJsdXIoN3B4KTtcbn1cbi53b3Jrcy1saXN0X19jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmlsdGVyOiBibHVyKDApO1xuICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC41cyBlYXNlO1xufVxuLndvcmtzLWxpc3RfX2luZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE2cHgpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLndvcmtzLWxpc3RfX2luZm8ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDUuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1yaWdodDogY2xhbXAoIDEuNTYyNXJlbSAsIDAuMDE3MDQ1NDU0NXJlbSAgKyAgNy43MjcyNzI3MjczdncgLCA1LjgxMjVyZW0gKSkge1xuICAgIC53b3Jrcy1saXN0X19pbmZvIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjAxNzA0NTQ1NDVyZW0gICsgIDcuNzI3MjcyNzI3M3Z3ICwgNS44MTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjAxNzA0NTQ1NDVyZW0gICsgIDcuNzI3MjcyNzI3M3Z3ICwgNS44MTI1cmVtICkpIHtcbiAgICAud29ya3MtbGlzdF9faW5mbyB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDEuNTYyNXJlbSArIDQuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAud29ya3MtbGlzdF9faW5mbyB7XG4gICAgcGFkZGluZy1yaWdodDogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAud29ya3MtbGlzdF9faW5mbyB7XG4gICAgcGFkZGluZy1sZWZ0OiAzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS41NjI1cmVtICwgMC45OTQzMTgxODE4cmVtICArICAyLjg0MDkwOTA5MDl2dyAsIDMuMTI1cmVtICkpIHtcbiAgICAud29ya3MtbGlzdF9faW5mbyB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjk5NDMxODE4MThyZW0gICsgIDIuODQwOTA5MDkwOXZ3ICwgMy4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS41NjI1cmVtICwgMC45OTQzMTgxODE4cmVtICArICAyLjg0MDkwOTA5MDl2dyAsIDMuMTI1cmVtICkpIHtcbiAgICAud29ya3MtbGlzdF9faW5mbyB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMS41NjI1cmVtICsgMS41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLndvcmtzLWxpc3RfX2luZm8ge1xuICAgIHBhZGRpbmctbGVmdDogMS41NjI1cmVtO1xuICB9XG59XG4ud29ya3MtbGlzdF9fdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMjRweCAwIDI0cHggMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0OTkuOThweCkge1xuICAud29ya3MtbGlzdF9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG4ud29ya3MtbGlzdF9fbW9yZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDk5Ljk4cHgpIHtcbiAgLndvcmtzLWxpc3RfX21vcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZmVhdHVyZWQge1xuICAgIHBhZGRpbmctYm90dG9tOiA5LjgxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC42ODc1cmVtICwgMi44MjM4NjM2MzY0cmVtICArICA5LjMxODE4MTgxODJ2dyAsIDkuODEyNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC42ODc1cmVtICwgMi44MjM4NjM2MzY0cmVtICArICA5LjMxODE4MTgxODJ2dyAsIDkuODEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuNjg3NXJlbSAsIDIuODIzODYzNjM2NHJlbSAgKyAgOS4zMTgxODE4MTgydncgLCA5LjgxMjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyg0LjY4NzVyZW0gKyA1LjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mZWF0dXJlZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDQuNjg3NXJlbTtcbiAgfVxufVxuLmZlYXR1cmVkX19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mZWF0dXJlZF9fbGlzdCB7XG4gICAgZ2FwOiA2LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChnYXA6IGNsYW1wKCAxLjg3NXJlbSAsIDAuMjg0MDkwOTA5MXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA2LjI1cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2xpc3Qge1xuICAgICAgZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAwLjI4NDA5MDkwOTFyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgNi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChnYXA6IGNsYW1wKCAxLjg3NXJlbSAsIDAuMjg0MDkwOTA5MXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA2LjI1cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2xpc3Qge1xuICAgICAgZ2FwOiBjYWxjKDEuODc1cmVtICsgNC4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZmVhdHVyZWRfX2xpc3Qge1xuICAgIGdhcDogMS44NzVyZW07XG4gIH1cbn1cbi5mZWF0dXJlZF9faXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5mZWF0dXJlZF9faXRlbTpob3ZlciAuZmVhdHVyZWRfX2J0biwgLmZlYXR1cmVkX19pdGVtOmZvY3VzIC5mZWF0dXJlZF9fYnRuIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mZWF0dXJlZF9faW1hZ2Uge1xuICAgIHdpZHRoOiAyMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTEuNTYyNXJlbSAsIDcuMzU3OTU0NTQ1NXJlbSAgKyAgMjEuMDIyNzI3MjcyN3Z3ICwgMjMuMTI1cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2ltYWdlIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTEuNTYyNXJlbSAsIDcuMzU3OTU0NTQ1NXJlbSAgKyAgMjEuMDIyNzI3MjcyN3Z3ICwgMjMuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTEuNTYyNXJlbSAsIDcuMzU3OTU0NTQ1NXJlbSAgKyAgMjEuMDIyNzI3MjcyN3Z3ICwgMjMuMTI1cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2ltYWdlIHtcbiAgICAgIHdpZHRoOiBjYWxjKDExLjU2MjVyZW0gKyAxMS41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZlYXR1cmVkX19pbWFnZSB7XG4gICAgd2lkdGg6IDExLjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mZWF0dXJlZF9faW1hZ2Uge1xuICAgIGhlaWdodDogMjYuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGhlaWdodDogY2xhbXAoIDEzLjM3NXJlbSAsIDguNTExMzYzNjM2NHJlbSAgKyAgMjQuMzE4MTgxODE4MnZ3ICwgMjYuNzVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9faW1hZ2Uge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggMTMuMzc1cmVtICwgOC41MTEzNjM2MzY0cmVtICArICAyNC4zMTgxODE4MTgydncgLCAyNi43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCAxMy4zNzVyZW0gLCA4LjUxMTM2MzYzNjRyZW0gICsgIDI0LjMxODE4MTgxODJ2dyAsIDI2Ljc1cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2ltYWdlIHtcbiAgICAgIGhlaWdodDogY2FsYygxMy4zNzVyZW0gKyAxMy4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZmVhdHVyZWRfX2ltYWdlIHtcbiAgICBoZWlnaHQ6IDEzLjM3NXJlbTtcbiAgfVxufVxuLmZlYXR1cmVkX19sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mZWF0dXJlZF9fbGFiZWwge1xuICAgIG1hcmdpbi10b3A6IDIuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tdG9wOiBjbGFtcCggMC45Mzc1cmVtICwgMC41MDU2ODE4MTgycmVtICArICAyLjE1OTA5MDkwOTF2dyAsIDIuMTI1cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2xhYmVsIHtcbiAgICAgIG1hcmdpbi10b3A6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjUwNTY4MTgxODJyZW0gICsgIDIuMTU5MDkwOTA5MXZ3ICwgMi4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLXRvcDogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNTA1NjgxODE4MnJlbSAgKyAgMi4xNTkwOTA5MDkxdncgLCAyLjEyNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19sYWJlbCB7XG4gICAgICBtYXJnaW4tdG9wOiBjYWxjKDAuOTM3NXJlbSArIDEuMTg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mZWF0dXJlZF9fbGFiZWwge1xuICAgIG1hcmdpbi10b3A6IDAuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZlYXR1cmVkX19sYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC4yNXJlbSAsIDAuMTU5MDkwOTA5MXJlbSAgKyAgMC40NTQ1NDU0NTQ1dncgLCAwLjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9fbGFiZWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuMjVyZW0gLCAwLjE1OTA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMC41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjI1cmVtICwgMC4xNTkwOTA5MDkxcmVtICArICAwLjQ1NDU0NTQ1NDV2dyAsIDAuNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19sYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDAuMjVyZW0gKyAwLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZlYXR1cmVkX19sYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OS45OHB4KSB7XG4gIC5mZWF0dXJlZF9fbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuLmZlYXR1cmVkX190eXBlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZlYXR1cmVkX19pbWFnZS0tYmlnIHtcbiAgICB3aWR0aDogMzcuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTAuMjI3MjcyNzI3M3JlbSAgKyAgMzYuMzYzNjM2MzYzNnZ3ICwgMzcuNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19pbWFnZS0tYmlnIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDEwLjIyNzI3MjcyNzNyZW0gICsgIDM2LjM2MzYzNjM2MzZ2dyAsIDM3LjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTAuMjI3MjcyNzI3M3JlbSAgKyAgMzYuMzYzNjM2MzYzNnZ3ICwgMzcuNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19pbWFnZS0tYmlnIHtcbiAgICAgIHdpZHRoOiBjYWxjKDE3LjVyZW0gKyAyMCAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mZWF0dXJlZF9faW1hZ2UtLWJpZyB7XG4gICAgd2lkdGg6IDE3LjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mZWF0dXJlZF9faW1hZ2UtLWJpZyB7XG4gICAgaGVpZ2h0OiAyNi43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggMTIuMTI1cmVtICwgNi44MDY4MTgxODE4cmVtICArICAyNi41OTA5MDkwOTA5dncgLCAyNi43NXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19pbWFnZS0tYmlnIHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDEyLjEyNXJlbSAsIDYuODA2ODE4MTgxOHJlbSAgKyAgMjYuNTkwOTA5MDkwOXZ3ICwgMjYuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggMTIuMTI1cmVtICwgNi44MDY4MTgxODE4cmVtICArICAyNi41OTA5MDkwOTA5dncgLCAyNi43NXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19pbWFnZS0tYmlnIHtcbiAgICAgIGhlaWdodDogY2FsYygxMi4xMjVyZW0gKyAxNC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZmVhdHVyZWRfX2ltYWdlLS1iaWcge1xuICAgIGhlaWdodDogMTIuMTI1cmVtO1xuICB9XG59XG4uZmVhdHVyZWRfX2l0ZW0tLXRvcCB7XG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gIHBhZGRpbmctdG9wOiAxNjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLmZlYXR1cmVkX19pdGVtLS10b3Age1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxufVxuLmZlYXR1cmVkX19pdGVtLS1ib3R0b20ge1xuICBtYXJnaW4tdG9wOiAtMTYwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5mZWF0dXJlZF9faXRlbS0tYm90dG9tIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59XG4uZmVhdHVyZWRfX2J0biB7XG4gIGxlZnQ6IDEzMHB4O1xuICB0b3A6IDIwMHB4O1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLCB2aXNpYmlsaXR5IDAuNXMgZWFzZSwgdHJhbnNmb3JtIDAuNHMgZWFzZSwgYm94LXNoYWRvdyAwLjRzIGVhc2U7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuZmVhdHVyZWRfX2J0biB7XG4gICAgbGVmdDogMTAwcHg7XG4gICAgdG9wOiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDI5Ljk5ODc1ZW0pIHtcbiAgLmZlYXR1cmVkX19idG4ge1xuICAgIGxlZnQ6IDY2cHg7XG4gICAgdG9wOiA3N3B4O1xuICB9XG59XG5cbi5pbnRyb2R1Y3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBmaXJzdCBiYXNlbGluZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvZHVjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMDM5NzcyNzI3M3JlbSAgKyAgMi42MTM2MzYzNjM2dncgLCAzcmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjAzOTc3MjcyNzNyZW0gICsgIDIuNjEzNjM2MzYzNnZ3ICwgM3JlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4wMzk3NzI3MjczcmVtICArICAyLjYxMzYzNjM2MzZ2dyAsIDNyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb24ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjU2MjVyZW0gKyAxLjQzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm9kdWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyb2R1Y3Rpb24ge1xuICAgIHBhZGRpbmctbGVmdDogNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjU2ODE4MTgxODJyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuNTY4MTgxODE4MnJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC41NjgxODE4MTgycmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb24ge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuMjVyZW0gKyA1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvZHVjdGlvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm9kdWN0aW9uIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbiB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbiB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDMuMTI1cmVtICsgMy4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm9kdWN0aW9uIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzLjEyNXJlbTtcbiAgfVxufVxuLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICBtYXJnaW4tcmlnaHQ6IDM3NXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMy4xMjVyZW0gKyAzLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgd2lkdGg6IDI2LjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTEuNjQ3NzI3MjcyN3JlbSAgKyAgMTkuODg2MzYzNjM2NHZ3ICwgMjYuNTYyNXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMS42NDc3MjcyNzI3cmVtICArICAxOS44ODYzNjM2MzY0dncgLCAyNi41NjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTEuNjQ3NzI3MjcyN3JlbSAgKyAgMTkuODg2MzYzNjM2NHZ3ICwgMjYuNTYyNXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgICAgd2lkdGg6IGNhbGMoMTUuNjI1cmVtICsgMTAuOTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICB3aWR0aDogMTUuNjI1cmVtO1xuICB9XG59XG4uaW50cm9kdWN0aW9uX190aXRsZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbiAgbGVmdDogNjgwcHg7XG4gIHRvcDogODBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlOjphZnRlciB7XG4gICAgd2lkdGg6IDQuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMzkyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjM3NXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMi4xODc1cmVtICwgMS4zOTIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDQuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMi4xODc1cmVtICwgMS4zOTIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDQuMzc1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uX190aXRsZTo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IGNhbGMoMi4xODc1cmVtICsgMi4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgICB3aWR0aDogMi4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSBhbmQgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMDM5NzcyNzI3M3JlbSAgKyAgMi42MTM2MzYzNjM2dncgLCAzcmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4wMzk3NzI3MjczcmVtICArICAyLjYxMzYzNjM2MzZ2dyAsIDNyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMDM5NzcyNzI3M3JlbSAgKyAgMi42MTM2MzYzNjM2dncgLCAzcmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuNTYyNXJlbSArIDEuNDM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgICB0b3A6IC00MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSBhbmQgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZTo6YWZ0ZXIge1xuICAgIGxlZnQ6IDYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGxlZnQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uX190aXRsZTo6YWZ0ZXIge1xuICAgICAgbGVmdDogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGVmdDogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlOjphZnRlciB7XG4gICAgICBsZWZ0OiBjYWxjKDMuMTI1cmVtICsgMy4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZTo6YWZ0ZXIge1xuICAgIGxlZnQ6IDMuMTI1cmVtO1xuICB9XG59XG5cbi5wcm9jZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG4gIGhlaWdodDogNjY0cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpIHtcbiAgLnByb2Nlc3Mge1xuICAgIGhlaWdodDogNzY0cHg7XG4gIH1cbn1cbi5wcm9jZXNzX19jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEzMDBweDtcbiAgei1pbmRleDogMjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnByb2Nlc3NfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDkuMzEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCA0LjA2MjVyZW0gLCAyLjE1MzQwOTA5MDlyZW0gICsgIDkuNTQ1NDU0NTQ1NXZ3ICwgOS4zMTI1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggNC4wNjI1cmVtICwgMi4xNTM0MDkwOTA5cmVtICArICA5LjU0NTQ1NDU0NTV2dyAsIDkuMzEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDQuMDYyNXJlbSAsIDIuMTUzNDA5MDkwOXJlbSAgKyAgOS41NDU0NTQ1NDU1dncgLCA5LjMxMjVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19jb250YWluZXIge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoNC4wNjI1cmVtICsgNS4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5wcm9jZXNzX19jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiA0LjA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5wcm9jZXNzX19jb250YWluZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMC4wNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMi4zMDY4MTgxODE4cmVtICArICAxMC4zNDA5MDkwOTA5dncgLCAxMC4wNjI1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC4zNzVyZW0gLCAyLjMwNjgxODE4MThyZW0gICsgIDEwLjM0MDkwOTA5MDl2dyAsIDEwLjA2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCA0LjM3NXJlbSAsIDIuMzA2ODE4MTgxOHJlbSAgKyAgMTAuMzQwOTA5MDkwOXZ3ICwgMTAuMDYyNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX2NvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyg0LjM3NXJlbSArIDUuNjg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5wcm9jZXNzX19jb250YWluZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiA0LjM3NXJlbTtcbiAgfVxufVxuLnByb2Nlc3NfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMjAlO1xuICB0b3A6IC0zNSU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5wcm9jZXNzX19jb250YWluZXI6OmFmdGVyIHtcbiAgICB3aWR0aDogNDAuMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fY29udGFpbmVyOjphZnRlciB7XG4gICAgICB3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fY29udGFpbmVyOjphZnRlciB7XG4gICAgICB3aWR0aDogY2FsYygxMi41cmVtICsgMjcuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5wcm9jZXNzX19jb250YWluZXI6OmFmdGVyIHtcbiAgICB3aWR0aDogMTIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnByb2Nlc3NfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIGhlaWdodDogNDAuMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fY29udGFpbmVyOjphZnRlciB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTIuNXJlbSArIDI3LjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAucHJvY2Vzc19fY29udGFpbmVyOjphZnRlciB7XG4gICAgaGVpZ2h0OiAxMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpIHtcbiAgLnByb2Nlc3NfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5wcm9jZXNzX190aXRsZSB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAucHJvY2Vzc19fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjg3NXJlbSAsIDAuNzM4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuODc1cmVtICwgMC43Mzg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuODc1cmVtICwgMC43Mzg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDVyZW0gKSkge1xuICAgIC5wcm9jZXNzX190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuODc1cmVtICsgMy4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAucHJvY2Vzc19fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpIGFuZCAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5wcm9jZXNzX190aXRsZSB7XG4gICAgcGFkZGluZy1sZWZ0OiA2LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC41NjgxODE4MTgycmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5wcm9jZXNzX190aXRsZSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuNTY4MTgxODE4MnJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC41NjgxODE4MTgycmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5wcm9jZXNzX190aXRsZSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMS4yNXJlbSArIDUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5wcm9jZXNzX190aXRsZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDE5Ljk4cHgpIHtcbiAgLnByb2Nlc3NfX3RpdGxlIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbn1cbi5wcm9jZXNzX19saXN0IHtcbiAgZ2FwOiAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnByb2Nlc3NfX2xpc3Qge1xuICAgIG1hcmdpbi1sZWZ0OiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjM0MDkwOTA5MDlyZW0gICsgIDQuNTQ1NDU0NTQ1NXZ3ICwgMy43NXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX2xpc3Qge1xuICAgICAgbWFyZ2luLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgMC4zNDA5MDkwOTA5cmVtICArICA0LjU0NTQ1NDU0NTV2dyAsIDMuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgMC4zNDA5MDkwOTA5cmVtICArICA0LjU0NTQ1NDU0NTV2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19saXN0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEuMjVyZW0gKyAyLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAucHJvY2Vzc19fbGlzdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5wcm9jZXNzX19saXN0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDguNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1yaWdodDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIC0zLjE4MTgxODA5NjZyZW0gICsgIDE1LjkwOTA5MDc5NTV2dyAsIDguNzVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19saXN0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIC0zLjE4MTgxODA5NjZyZW0gICsgIDE1LjkwOTA5MDc5NTV2dyAsIDguNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTMuMTgxODE4MDk2NnJlbSAgKyAgMTUuOTA5MDkwNzk1NXZ3ICwgOC43NXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX2xpc3Qge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDAuMDAwMDAwMDYyNXJlbSArIDguNzQ5OTk5OTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5wcm9jZXNzX19saXN0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMDAwMDAwMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSB7XG4gIC5wcm9jZXNzX19saXN0IHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB9XG59XG4ucHJvY2Vzc19faXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9jZXNzX19pdGVtOmhvdmVyIC5wcm9jZXNzX190ZXh0IHtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbn1cbi5wcm9jZXNzX19pdGVtOmhvdmVyIC5wcm9jZXNzX190ZXh0OjpiZWZvcmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjglKTtcbn1cbi5wcm9jZXNzX19pdGVtOmhvdmVyIC5wcm9jZXNzX19udW1iZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLnByb2Nlc3NfX3RleHQge1xuICBjb2xvcjogIzZGNkY2RjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS40O1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjRzIGVhc2UsIHRyYW5zZm9ybSAwLjRzIGVhc2U7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cbi5wcm9jZXNzX190ZXh0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTkwcHg7XG4gIHRvcDogMTdweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZSwgb3BhY2l0eSAwLjRzIGVhc2U7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpIHtcbiAgLnByb2Nlc3NfX3RleHQ6OmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnByb2Nlc3NfX251bWJlciB7XG4gIG9wYWNpdHk6IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2U7XG59XG5cbi5wcm9jZXNzLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSB7XG4gIC5wcm9jZXNzLXdyYXBwZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJsb2NrLWluZm8ge1xuICAgIHdpZHRoOiAyNC42ODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDEyLjMyOTU0NTQ1NDVyZW0gICsgIDE2LjQ3NzI3MjcyNzN2dyAsIDI0LjY4NzVyZW0gKSkge1xuICAgIC5ibG9jay1pbmZvIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTIuMzI5NTQ1NDU0NXJlbSAgKyAgMTYuNDc3MjcyNzI3M3Z3ICwgMjQuNjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDEyLjMyOTU0NTQ1NDVyZW0gICsgIDE2LjQ3NzI3MjcyNzN2dyAsIDI0LjY4NzVyZW0gKSkge1xuICAgIC5ibG9jay1pbmZvIHtcbiAgICAgIHdpZHRoOiBjYWxjKDE1LjYyNXJlbSArIDkuMDYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5ibG9jay1pbmZvIHtcbiAgICB3aWR0aDogMTUuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpIGFuZCAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5ibG9jay1pbmZvIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjU2ODE4MTgxODJyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmJsb2NrLWluZm8ge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjU2ODE4MTgxODJyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgNi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuNTY4MTgxODE4MnJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA2LjI1cmVtICkpIHtcbiAgICAuYmxvY2staW5mbyB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMS4yNXJlbSArIDUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5ibG9jay1pbmZvIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gIH1cbn1cbi5ibG9jay1pbmZvX190ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5ibG9jay1pbmZvX190ZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjMxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjkyNjEzNjM2MzZyZW0gICsgIDMuMTgxODE4MTgxOHZ3ICwgMy4zMTI1cmVtICkpIHtcbiAgICAuYmxvY2staW5mb19fdGV4dCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMC45MjYxMzYzNjM2cmVtICArICAzLjE4MTgxODE4MTh2dyAsIDMuMzEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMC45MjYxMzYzNjM2cmVtICArICAzLjE4MTgxODE4MTh2dyAsIDMuMzEyNXJlbSApKSB7XG4gICAgLmJsb2NrLWluZm9fX3RleHQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjU2MjVyZW0gKyAxLjc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJsb2NrLWluZm9fX3RleHQge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNTYyNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY3JlYXRlIHtcbiAgICBwYWRkaW5nLXRvcDogMTByZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggNXJlbSAsIDMuMTgxODE4MTgxOHJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCAxMHJlbSApKSB7XG4gICAgLmNyZWF0ZSB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDVyZW0gLCAzLjE4MTgxODE4MThyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgMTByZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCA1cmVtICwgMy4xODE4MTgxODE4cmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDEwcmVtICkpIHtcbiAgICAuY3JlYXRlIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDVyZW0gKyA1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNyZWF0ZSB7XG4gICAgcGFkZGluZy10b3A6IDVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jcmVhdGUge1xuICAgIHBhZGRpbmctYm90dG9tOiA4Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMi43ODQwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDguNzVyZW0gKSkge1xuICAgIC5jcmVhdGUge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCA0LjM3NXJlbSAsIDIuNzg0MDkwOTA5MXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA4Ljc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC4zNzVyZW0gLCAyLjc4NDA5MDkwOTFyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgOC43NXJlbSApKSB7XG4gICAgLmNyZWF0ZSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyg0LjM3NXJlbSArIDQuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNyZWF0ZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDQuMzc1cmVtO1xuICB9XG59XG4uY3JlYXRlX193cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDM3Ljk4cHgpIHtcbiAgLmNyZWF0ZV9fd3JhcHBlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAzNy45OHB4KSB7XG4gIC5pbWctYmxvY2sge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG4uaW1nLWJsb2NrX19pdGVtIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gIHRyYW5zaXRpb246IGZpbHRlciAwLjRzIGVhc2U7XG59XG4uaW1nLWJsb2NrX19pdGVtOmhvdmVyIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XG59XG4uaW1nLWJsb2NrX19pdGVtLS1iaWcge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmltZy1ibG9ja19faXRlbS0tYmlnIHtcbiAgICB3aWR0aDogMjkuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE0LjY4NzVyZW0gLCA5LjM0NjU5MDkwOTFyZW0gICsgIDI2LjcwNDU0NTQ1NDV2dyAsIDI5LjM3NXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19faXRlbS0tYmlnIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTQuNjg3NXJlbSAsIDkuMzQ2NTkwOTA5MXJlbSAgKyAgMjYuNzA0NTQ1NDU0NXZ3ICwgMjkuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTQuNjg3NXJlbSAsIDkuMzQ2NTkwOTA5MXJlbSAgKyAgMjYuNzA0NTQ1NDU0NXZ3ICwgMjkuMzc1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1iaWcge1xuICAgICAgd2lkdGg6IGNhbGMoMTQuNjg3NXJlbSArIDE0LjY4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1iaWcge1xuICAgIHdpZHRoOiAxNC42ODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1iaWcge1xuICAgIGhlaWdodDogMTguMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCA5LjA2MjVyZW0gLCA1Ljc2NzA0NTQ1NDVyZW0gICsgIDE2LjQ3NzI3MjcyNzN2dyAsIDE4LjEyNXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19faXRlbS0tYmlnIHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDkuMDYyNXJlbSAsIDUuNzY3MDQ1NDU0NXJlbSAgKyAgMTYuNDc3MjcyNzI3M3Z3ICwgMTguMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDkuMDYyNXJlbSAsIDUuNzY3MDQ1NDU0NXJlbSAgKyAgMTYuNDc3MjcyNzI3M3Z3ICwgMTguMTI1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1iaWcge1xuICAgICAgaGVpZ2h0OiBjYWxjKDkuMDYyNXJlbSArIDkuMDYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLWJpZyB7XG4gICAgaGVpZ2h0OiA5LjA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbWctYmxvY2tfX2JvdHRvbSB7XG4gICAgd2lkdGg6IDM1LjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTguNzVyZW0gLCAxMi41cmVtICArICAzMS4yNXZ3ICwgMzUuOTM3NXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19fYm90dG9tIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTguNzVyZW0gLCAxMi41cmVtICArICAzMS4yNXZ3ICwgMzUuOTM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE4Ljc1cmVtICwgMTIuNXJlbSAgKyAgMzEuMjV2dyAsIDM1LjkzNzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2JvdHRvbSB7XG4gICAgICB3aWR0aDogY2FsYygxOC43NXJlbSArIDE3LjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW1nLWJsb2NrX19ib3R0b20ge1xuICAgIHdpZHRoOiAxOC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmltZy1ibG9ja19faXRlbS0tc21hbGwge1xuICAgIHBhZGRpbmctbGVmdDogOC4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuODc1cmVtICwgLTAuMzk3NzI3MjcyN3JlbSAgKyAgMTEuMzYzNjM2MzYzNnZ3ICwgOC4xMjVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuODc1cmVtICwgLTAuMzk3NzI3MjcyN3JlbSAgKyAgMTEuMzYzNjM2MzYzNnZ3ICwgOC4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS44NzVyZW0gLCAtMC4zOTc3MjcyNzI3cmVtICArICAxMS4zNjM2MzYzNjM2dncgLCA4LjEyNXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19faXRlbS0tc21hbGwge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuODc1cmVtICsgNi4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMC45Mzc1cmVtICwgMC41OTY1OTA5MDkxcmVtICArICAxLjcwNDU0NTQ1NDV2dyAsIDEuODc1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjU5NjU5MDkwOTFyZW0gICsgIDEuNzA0NTQ1NDU0NXZ3ICwgMS44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMC45Mzc1cmVtICwgMC41OTY1OTA5MDkxcmVtICArICAxLjcwNDU0NTQ1NDV2dyAsIDEuODc1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMC45Mzc1cmVtICsgMC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmltZy1ibG9ja19faXRlbS0tc21hbGwge1xuICAgIG1hcmdpbi1yaWdodDogMC45Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgd2lkdGg6IDE2Ljg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCA4LjQzNzVyZW0gLCA1LjM2OTMxODE4MThyZW0gICsgIDE1LjM0MDkwOTA5MDl2dyAsIDE2Ljg3NXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19faXRlbS0tc21hbGwge1xuICAgICAgd2lkdGg6IGNsYW1wKCA4LjQzNzVyZW0gLCA1LjM2OTMxODE4MThyZW0gICsgIDE1LjM0MDkwOTA5MDl2dyAsIDE2Ljg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDguNDM3NXJlbSAsIDUuMzY5MzE4MTgxOHJlbSAgKyAgMTUuMzQwOTA5MDkwOXZ3ICwgMTYuODc1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgICB3aWR0aDogY2FsYyg4LjQzNzVyZW0gKyA4LjQzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgd2lkdGg6IDguNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmltZy1ibG9ja19faXRlbS0tc21hbGwge1xuICAgIGhlaWdodDogOC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggNXJlbSAsIDMuNjM2MzYzNjM2NHJlbSAgKyAgNi44MTgxODE4MTgydncgLCA4Ljc1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCA1cmVtICwgMy42MzYzNjM2MzY0cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDguNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggNXJlbSAsIDMuNjM2MzYzNjM2NHJlbSAgKyAgNi44MTgxODE4MTgydncgLCA4Ljc1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgICBoZWlnaHQ6IGNhbGMoNXJlbSArIDMuNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgaGVpZ2h0OiA1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1taWRkbGUge1xuICAgIHdpZHRoOiAxNi44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggOC40Mzc1cmVtICwgNS4zNjkzMTgxODE4cmVtICArICAxNS4zNDA5MDkwOTA5dncgLCAxNi44NzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLW1pZGRsZSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDguNDM3NXJlbSAsIDUuMzY5MzE4MTgxOHJlbSAgKyAgMTUuMzQwOTA5MDkwOXZ3ICwgMTYuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggOC40Mzc1cmVtICwgNS4zNjkzMTgxODE4cmVtICArICAxNS4zNDA5MDkwOTA5dncgLCAxNi44NzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLW1pZGRsZSB7XG4gICAgICB3aWR0aDogY2FsYyg4LjQzNzVyZW0gKyA4LjQzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1taWRkbGUge1xuICAgIHdpZHRoOiA4LjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLW1pZGRsZSB7XG4gICAgaGVpZ2h0OiAxNS42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGhlaWdodDogY2xhbXAoIDcuODEyNXJlbSAsIDQuOTcxNTkwOTA5MXJlbSAgKyAgMTQuMjA0NTQ1NDU0NXZ3ICwgMTUuNjI1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1taWRkbGUge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggNy44MTI1cmVtICwgNC45NzE1OTA5MDkxcmVtICArICAxNC4yMDQ1NDU0NTQ1dncgLCAxNS42MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggNy44MTI1cmVtICwgNC45NzE1OTA5MDkxcmVtICArICAxNC4yMDQ1NDU0NTQ1dncgLCAxNS42MjVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLW1pZGRsZSB7XG4gICAgICBoZWlnaHQ6IGNhbGMoNy44MTI1cmVtICsgNy44MTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmltZy1ibG9ja19faXRlbS0tbWlkZGxlIHtcbiAgICBoZWlnaHQ6IDcuODEyNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY3JlYXRlLWluZm8ge1xuICAgIHBhZGRpbmctdG9wOiA1LjgxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgMS4yOTU0NTQ1NDU1cmVtICArICA2LjAyMjcyNzI3Mjd2dyAsIDUuODEyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgMS4yOTU0NTQ1NDU1cmVtICArICA2LjAyMjcyNzI3Mjd2dyAsIDUuODEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIDEuMjk1NDU0NTQ1NXJlbSAgKyAgNi4wMjI3MjcyNzI3dncgLCA1LjgxMjVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mbyB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygyLjVyZW0gKyAzLjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlLWluZm8ge1xuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XG4gIH1cbn1cbi5jcmVhdGUtaW5mb19fdGl0bGUge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIHdpZHRoOiAzNTdweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jcmVhdGUtaW5mb19fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDIuMzEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAwLjg2MzYzNjM2MzZyZW0gICsgIDEuOTMxODE4MTgxOHZ3ICwgMi4zMTI1cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm9fX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgMC44NjM2MzYzNjM2cmVtICArICAxLjkzMTgxODE4MTh2dyAsIDIuMzEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIDAuODYzNjM2MzYzNnJlbSAgKyAgMS45MzE4MTgxODE4dncgLCAyLjMxMjVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjI1cmVtICsgMS4wNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgfVxufVxuLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuMzQwOTA5MDkwOXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA1LjYyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC4zNDA5MDkwOTA5cmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDUuNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC4zNDA5MDkwOTA5cmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuMjVyZW0gKyA0LjM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgIG1hcmdpbi1ib3R0b206IDMuMzEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNjg3NXJlbSAsIDEuMDk2NTkwOTA5MXJlbSAgKyAgMi45NTQ1NDU0NTQ1dncgLCAzLjMxMjVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS42ODc1cmVtICwgMS4wOTY1OTA5MDkxcmVtICArICAyLjk1NDU0NTQ1NDV2dyAsIDMuMzEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS42ODc1cmVtICwgMS4wOTY1OTA5MDkxcmVtICArICAyLjk1NDU0NTQ1NDV2dyAsIDMuMzEyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS42ODc1cmVtICsgMS42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICB3aWR0aDogMjcuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxMy45MDkwOTA5MDkxcmVtICArICAxNy45NTQ1NDU0NTQ1dncgLCAyNy4zNzVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxMy45MDkwOTA5MDkxcmVtICArICAxNy45NTQ1NDU0NTQ1dncgLCAyNy4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTMuOTA5MDkwOTA5MXJlbSAgKyAgMTcuOTU0NTQ1NDU0NXZ3ICwgMjcuMzc1cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgICAgd2lkdGg6IGNhbGMoMTcuNXJlbSArIDkuODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICB3aWR0aDogMTcuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzcuOThweCkge1xuICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4My45OHB4KSB7XG4gIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgzLjk4cHgpIGFuZCAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODMuOThweCkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIDAuNzk1NDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAyLjVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgMC43OTU0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDIuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgMC43OTU0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDIuNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygxLjI1cmVtICsgMS4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODMuOThweCkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jcmVhdGUtaW5mb19fYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogNS42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjM0MDkwOTA5MDlyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgNS42MjVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fYnRuIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjM0MDkwOTA5MDlyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgNS42MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuMzQwOTA5MDkwOXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA1LjYyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX19idG4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMS4yNXJlbSArIDQuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX19idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAzNy45OHB4KSB7XG4gIC5jcmVhdGUtaW5mb19fYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4My45OHB4KSBhbmQgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY3JlYXRlLWluZm9fX2J0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4My45OHB4KSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjc5NTQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMi41cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm9fX2J0biB7XG4gICAgICBtYXJnaW4tbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjc5NTQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMi41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIDAuNzk1NDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAyLjVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fYnRuIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEuMjVyZW0gKyAxLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4My45OHB4KSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlLWluZm9fX2J0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnZhbHVlcyB7XG4gICAgcGFkZGluZy1ib3R0b206IDEzLjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCA2LjY4NzVyZW0gLCA0LjI1NTY4MTgxODJyZW0gICsgIDEyLjE1OTA5MDkwOTF2dyAsIDEzLjM3NXJlbSApKSB7XG4gICAgLnZhbHVlcyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDYuNjg3NXJlbSAsIDQuMjU1NjgxODE4MnJlbSAgKyAgMTIuMTU5MDkwOTA5MXZ3ICwgMTMuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNi42ODc1cmVtICwgNC4yNTU2ODE4MTgycmVtICArICAxMi4xNTkwOTA5MDkxdncgLCAxMy4zNzVyZW0gKSkge1xuICAgIC52YWx1ZXMge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoNi42ODc1cmVtICsgNi42ODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnZhbHVlcyB7XG4gICAgcGFkZGluZy1ib3R0b206IDYuNjg3NXJlbTtcbiAgfVxufVxuLnZhbHVlc19fdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAudmFsdWVzX190aXRsZSB7XG4gICAgZm9udC1zaXplOiA2LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAzLjQzNzVyZW0gLCAyLjQxNDc3MjcyNzNyZW0gICsgIDUuMTEzNjM2MzYzNnZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLnZhbHVlc19fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMy40Mzc1cmVtICwgMi40MTQ3NzI3MjczcmVtICArICA1LjExMzYzNjM2MzZ2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMy40Mzc1cmVtICwgMi40MTQ3NzI3MjczcmVtICArICA1LjExMzYzNjM2MzZ2dyAsIDYuMjVyZW0gKSkge1xuICAgIC52YWx1ZXNfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygzLjQzNzVyZW0gKyAyLjgxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAudmFsdWVzX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAzLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC52YWx1ZXNfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIDEuNDU0NTQ1NDU0NXJlbSAgKyAgNS4yMjcyNzI3MjczdncgLCA1LjM3NXJlbSApKSB7XG4gICAgLnZhbHVlc19fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIDEuNDU0NTQ1NDU0NXJlbSAgKyAgNS4yMjcyNzI3MjczdncgLCA1LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMi41cmVtICwgMS40NTQ1NDU0NTQ1cmVtICArICA1LjIyNzI3MjcyNzN2dyAsIDUuMzc1cmVtICkpIHtcbiAgICAudmFsdWVzX190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDIuNXJlbSArIDIuODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnZhbHVlc19fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgfVxufVxuLnZhbHVlc19fbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAudmFsdWVzX19saXN0IHtcbiAgICBnYXA6IDQuNjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZ2FwOiBjbGFtcCggMi41cmVtICwgMS43MDQ1NDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDQuNjg3NXJlbSApKSB7XG4gICAgLnZhbHVlc19fbGlzdCB7XG4gICAgICBnYXA6IGNsYW1wKCAyLjVyZW0gLCAxLjcwNDU0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNC42ODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGdhcDogY2xhbXAoIDIuNXJlbSAsIDEuNzA0NTQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjY4NzVyZW0gKSkge1xuICAgIC52YWx1ZXNfX2xpc3Qge1xuICAgICAgZ2FwOiBjYWxjKDIuNXJlbSArIDIuMTg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC52YWx1ZXNfX2xpc3Qge1xuICAgIGdhcDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjUxLjk4cHgpIHtcbiAgLnZhbHVlc19fbGlzdCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG59XG4udmFsdWVzX19pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnZhbHVlc19faXRlbSB7XG4gICAgd2lkdGg6IDIxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDEzLjU3OTU0NTQ1NDVyZW0gICsgIDEwLjIyNzI3MjcyNzN2dyAsIDIxLjI1cmVtICkpIHtcbiAgICAudmFsdWVzX19pdGVtIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTMuNTc5NTQ1NDU0NXJlbSAgKyAgMTAuMjI3MjcyNzI3M3Z3ICwgMjEuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMy41Nzk1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAyMS4yNXJlbSApKSB7XG4gICAgLnZhbHVlc19faXRlbSB7XG4gICAgICB3aWR0aDogY2FsYygxNS42MjVyZW0gKyA1LjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC52YWx1ZXNfX2l0ZW0ge1xuICAgIHdpZHRoOiAxNS42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC52YWx1ZXNfX2l0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLnZhbHVlc19faXRlbSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC52YWx1ZXNfX2l0ZW0ge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDMuMTI1cmVtICsgMy4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAudmFsdWVzX19pdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjUxLjk4cHgpIHtcbiAgLnZhbHVlc19faXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi52YWx1ZXNfX2ltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnZhbHVlc19faW1nIHtcbiAgICB3aWR0aDogNC4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMi4xODc1cmVtICwgMS4zOTIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDQuMzc1cmVtICkpIHtcbiAgICAudmFsdWVzX19pbWcge1xuICAgICAgd2lkdGg6IGNsYW1wKCAyLjE4NzVyZW0gLCAxLjM5MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNC4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAyLjE4NzVyZW0gLCAxLjM5MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNC4zNzVyZW0gKSkge1xuICAgIC52YWx1ZXNfX2ltZyB7XG4gICAgICB3aWR0aDogY2FsYygyLjE4NzVyZW0gKyAyLjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAudmFsdWVzX19pbWcge1xuICAgIHdpZHRoOiAyLjE4NzVyZW07XG4gIH1cbn1cbi52YWx1ZXNfX2xhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgbWFyZ2luLWJvdHRvbTogMTdweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC52YWx1ZXNfX2xhYmVsIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMS4yNXJlbSAsIDEuMTU5MDkwOTA5MXJlbSAgKyAgMC40NTQ1NDU0NTQ1dncgLCAxLjVyZW0gKSkge1xuICAgIC52YWx1ZXNfX2xhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDEuMjVyZW0gLCAxLjE1OTA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMS41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDEuMjVyZW0gLCAxLjE1OTA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMS41cmVtICkpIHtcbiAgICAudmFsdWVzX19sYWJlbCB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMS4yNXJlbSArIDAuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAudmFsdWVzX19sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG4udmFsdWVzX190ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtYXJnaW4tYm90dG9tOiAxOXB4O1xufVxuLnZhbHVlc19fbW9yZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi52YWx1ZXNfX21vcmU6aG92ZXIgLnZhbHVlc19faWNvbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcbn1cbi52YWx1ZXNfX2ljb24ge1xuICBmaWxsOiB2YXIoLS1kYXJrLWNsKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcbn1cblxuLnN3aXBlci1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLXNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiA4cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDQuMzc1cmVtICwgMy4wNTY4MTgxODE4cmVtICArICA2LjU5MDkwOTA5MDl2dyAsIDhyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbiB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDQuMzc1cmVtICwgMy4wNTY4MTgxODE4cmVtICArICA2LjU5MDkwOTA5MDl2dyAsIDhyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCA0LjM3NXJlbSAsIDMuMDU2ODE4MTgxOHJlbSAgKyAgNi41OTA5MDkwOTA5dncgLCA4cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb24ge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoNC4zNzVyZW0gKyAzLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDQuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLXNlY3Rpb24ge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCA0LjM3NXJlbSAsIDEuNTExMzYzNjM2NHJlbSAgKyAgMTQuMzE4MTgxODE4MnZ3ICwgMTIuMjVyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbiB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMS41MTEzNjM2MzY0cmVtICArICAxNC4zMTgxODE4MTgydncgLCAxMi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMS41MTEzNjM2MzY0cmVtICArICAxNC4zMTgxODE4MTgydncgLCAxMi4yNXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDQuMzc1cmVtICsgNy44NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLXNlY3Rpb24ge1xuICAgIHBhZGRpbmctYm90dG9tOiA0LjM3NXJlbTtcbiAgfVxufVxuLnN3aXBlci1zZWN0aW9uX19jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc3dpcGVyLXNlY3Rpb25fX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIzJTtcbiAgdG9wOiAyMyU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgd2lkdGg6IDQwLjA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uX19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgICB3aWR0aDogY2FsYygxMi41cmVtICsgMjcuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgd2lkdGg6IDEyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgaGVpZ2h0OiA0MC4wNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgaGVpZ2h0OiBjYWxjKDEyLjVyZW0gKyAyNy41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX19jb250YWluZXI6OmFmdGVyIHtcbiAgICBoZWlnaHQ6IDEyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkge1xuICAuc3dpcGVyLXNlY3Rpb25fX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5zd2lwZXItc2VjdGlvbl9fd3JhcHBlciB7XG4gIHotaW5kZXg6IDI7XG59XG4uc3dpcGVyLXNlY3Rpb25fX3NsaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9faW1nLXF1b3RlIHtcbiAgICB3aWR0aDogMi4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMS4xODc1cmVtICwgMC43NTU2ODE4MTgycmVtICArICAyLjE1OTA5MDkwOTF2dyAsIDIuMzc1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX2ltZy1xdW90ZSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDEuMTg3NXJlbSAsIDAuNzU1NjgxODE4MnJlbSAgKyAgMi4xNTkwOTA5MDkxdncgLCAyLjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDEuMTg3NXJlbSAsIDAuNzU1NjgxODE4MnJlbSAgKyAgMi4xNTkwOTA5MDkxdncgLCAyLjM3NXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uX19pbWctcXVvdGUge1xuICAgICAgd2lkdGg6IGNhbGMoMS4xODc1cmVtICsgMS4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX19pbWctcXVvdGUge1xuICAgIHdpZHRoOiAxLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9faW1nLXF1b3RlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIC0wLjM4NjM2MzYzNjRyZW0gICsgIDguMTgxODE4MTgxOHZ3ICwgNS43NXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uX19pbWctcXVvdGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAtMC4zODYzNjM2MzY0cmVtICArICA4LjE4MTgxODE4MTh2dyAsIDUuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAtMC4zODYzNjM2MzY0cmVtICArICA4LjE4MTgxODE4MTh2dyAsIDUuNzVyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbl9faW1nLXF1b3RlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS4yNXJlbSArIDQuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9faW1nLXF1b3RlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICB9XG59XG4uc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX190ZXh0IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC43MzI5NTQ1NDU1cmVtICArICAxLjAyMjcyNzI3Mjd2dyAsIDEuNXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uX190ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzMyOTU0NTQ1NXJlbSAgKyAgMS4wMjI3MjcyNzI3dncgLCAxLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC43MzI5NTQ1NDU1cmVtICArICAxLjAyMjcyNzI3Mjd2dyAsIDEuNXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uX190ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjkzNzVyZW0gKyAwLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICAgIHdpZHRoOiA0Mi4wNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE4Ljc1cmVtICwgMTAuMjcyNzI3MjcyN3JlbSAgKyAgNDIuMzg2MzYzNjM2NHZ3ICwgNDIuMDYyNXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uX190ZXh0IHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTguNzVyZW0gLCAxMC4yNzI3MjcyNzI3cmVtICArICA0Mi4zODYzNjM2MzY0dncgLCA0Mi4wNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTguNzVyZW0gLCAxMC4yNzI3MjcyNzI3cmVtICArICA0Mi4zODYzNjM2MzY0dncgLCA0Mi4wNjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICAgICAgd2lkdGg6IGNhbGMoMTguNzVyZW0gKyAyMy4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX190ZXh0IHtcbiAgICB3aWR0aDogMTguNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9fdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi4wNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC41Mjg0MDkwOTA5cmVtICArICAyLjA0NTQ1NDU0NTV2dyAsIDIuMDYyNXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uX190ZXh0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjUyODQwOTA5MDlyZW0gICsgIDIuMDQ1NDU0NTQ1NXZ3ICwgMi4wNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjUyODQwOTA5MDlyZW0gICsgIDIuMDQ1NDU0NTQ1NXZ3ICwgMi4wNjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygwLjkzNzVyZW0gKyAxLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9fdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xuICB9XG59XG4uc3dpcGVyLXNlY3Rpb25fX2F1dGhvciB7XG4gIGNvbG9yOiAjOTY5Njk2O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuXG4uc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5zZWNvbmQtY291bnRlciB7XG4gIHotaW5kZXg6IDI7XG4gIGxlZnQ6IDQ3JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnNlY29uZC1jb3VudGVyIHtcbiAgICBib3R0b206IC03LjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGJvdHRvbTogY2xhbXAoIC03LjVyZW0gLCAyLjcyNzI3MjgxMjVyZW0gICsgIC0xMy42MzYzNjM3NXZ3ICwgMC4wMDAwMDAwNjI1cmVtICkpIHtcbiAgICAuc2Vjb25kLWNvdW50ZXIge1xuICAgICAgYm90dG9tOiBjbGFtcCggLTcuNXJlbSAsIDIuNzI3MjcyODEyNXJlbSAgKyAgLTEzLjYzNjM2Mzc1dncgLCAwLjAwMDAwMDA2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoYm90dG9tOiBjbGFtcCggLTcuNXJlbSAsIDIuNzI3MjcyODEyNXJlbSAgKyAgLTEzLjYzNjM2Mzc1dncgLCAwLjAwMDAwMDA2MjVyZW0gKSkge1xuICAgIC5zZWNvbmQtY291bnRlciB7XG4gICAgICBib3R0b206IGNhbGMoMC4wMDAwMDAwNjI1cmVtICsgLTcuNTAwMDAwMDYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zZWNvbmQtY291bnRlciB7XG4gICAgYm90dG9tOiAwLjAwMDAwMDA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5zZWNvbmQtY291bnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnNlY29uZC1jb3VudGVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNDA1cHg7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnNlY29uZC1jb3VudGVyOjpiZWZvcmUge1xuICAgIGxlZnQ6IC0zNC4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGVmdDogY2xhbXAoIC0zNC4yNXJlbSAsIDAuOTQ4ODYzNjM2NHJlbSAgKyAgLTQ2LjkzMTgxODE4MTh2dyAsIC04LjQzNzVyZW0gKSkge1xuICAgIC5zZWNvbmQtY291bnRlcjo6YmVmb3JlIHtcbiAgICAgIGxlZnQ6IGNsYW1wKCAtMzQuMjVyZW0gLCAwLjk0ODg2MzYzNjRyZW0gICsgIC00Ni45MzE4MTgxODE4dncgLCAtOC40Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGxlZnQ6IGNsYW1wKCAtMzQuMjVyZW0gLCAwLjk0ODg2MzYzNjRyZW0gICsgIC00Ni45MzE4MTgxODE4dncgLCAtOC40Mzc1cmVtICkpIHtcbiAgICAuc2Vjb25kLWNvdW50ZXI6OmJlZm9yZSB7XG4gICAgICBsZWZ0OiBjYWxjKC04LjQzNzVyZW0gKyAtMjUuODEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zZWNvbmQtY291bnRlcjo6YmVmb3JlIHtcbiAgICBsZWZ0OiAtOC40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc2Vjb25kLWNvdW50ZXI6OmJlZm9yZSB7XG4gICAgd2lkdGg6IDEwLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggNXJlbSAsIDNyZW0gICsgIDEwdncgLCAxMC41cmVtICkpIHtcbiAgICAuc2Vjb25kLWNvdW50ZXI6OmJlZm9yZSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDVyZW0gLCAzcmVtICArICAxMHZ3ICwgMTAuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDVyZW0gLCAzcmVtICArICAxMHZ3ICwgMTAuNXJlbSApKSB7XG4gICAgLnNlY29uZC1jb3VudGVyOjpiZWZvcmUge1xuICAgICAgd2lkdGg6IGNhbGMoNXJlbSArIDUuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zZWNvbmQtY291bnRlcjo6YmVmb3JlIHtcbiAgICB3aWR0aDogNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLnNlY29uZC1jb3VudGVyOjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5zZWNvbmQtY291bnRlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTAwcHg7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc2Vjb25kLWNvdW50ZXI6OmFmdGVyIHtcbiAgICByaWdodDogLTM2cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChyaWdodDogY2xhbXAoIC0zNnJlbSAsIDIuODYzNjM2MzYzNnJlbSAgKyAgLTUxLjgxODE4MTgxODJ2dyAsIC03LjVyZW0gKSkge1xuICAgIC5zZWNvbmQtY291bnRlcjo6YWZ0ZXIge1xuICAgICAgcmlnaHQ6IGNsYW1wKCAtMzZyZW0gLCAyLjg2MzYzNjM2MzZyZW0gICsgIC01MS44MTgxODE4MTgydncgLCAtNy41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHJpZ2h0OiBjbGFtcCggLTM2cmVtICwgMi44NjM2MzYzNjM2cmVtICArICAtNTEuODE4MTgxODE4MnZ3ICwgLTcuNXJlbSApKSB7XG4gICAgLnNlY29uZC1jb3VudGVyOjphZnRlciB7XG4gICAgICByaWdodDogY2FsYygtNy41cmVtICsgLTI4LjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc2Vjb25kLWNvdW50ZXI6OmFmdGVyIHtcbiAgICByaWdodDogLTcuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnNlY29uZC1jb3VudGVyOjphZnRlciB7XG4gICAgd2lkdGg6IDQuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMzkyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjM3NXJlbSApKSB7XG4gICAgLnNlY29uZC1jb3VudGVyOjphZnRlciB7XG4gICAgICB3aWR0aDogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMzkyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMzkyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjM3NXJlbSApKSB7XG4gICAgLnNlY29uZC1jb3VudGVyOjphZnRlciB7XG4gICAgICB3aWR0aDogY2FsYygyLjE4NzVyZW0gKyAyLjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc2Vjb25kLWNvdW50ZXI6OmFmdGVyIHtcbiAgICB3aWR0aDogMi4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuc2Vjb25kLWNvdW50ZXI6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY2xpZW50cyB7XG4gICAgcGFkZGluZy10b3A6IDkuNjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCA0LjY4NzVyZW0gLCAyLjg2OTMxODE4MThyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgOS42ODc1cmVtICkpIHtcbiAgICAuY2xpZW50cyB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDQuNjg3NXJlbSAsIDIuODY5MzE4MTgxOHJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA5LjY4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCA0LjY4NzVyZW0gLCAyLjg2OTMxODE4MThyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgOS42ODc1cmVtICkpIHtcbiAgICAuY2xpZW50cyB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYyg0LjY4NzVyZW0gKyA1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNsaWVudHMge1xuICAgIHBhZGRpbmctdG9wOiA0LjY4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jbGllbnRzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogOS42ODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuNjg3NXJlbSAsIDIuODY5MzE4MTgxOHJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA5LjY4NzVyZW0gKSkge1xuICAgIC5jbGllbnRzIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC42ODc1cmVtICwgMi44NjkzMTgxODE4cmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDkuNjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuNjg3NXJlbSAsIDIuODY5MzE4MTgxOHJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA5LjY4NzVyZW0gKSkge1xuICAgIC5jbGllbnRzIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDQuNjg3NXJlbSArIDUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY2xpZW50cyB7XG4gICAgcGFkZGluZy1ib3R0b206IDQuNjg3NXJlbTtcbiAgfVxufVxuLmNsaWVudHNfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY2xpZW50c19fdGl0bGUtYmxvY2sge1xuICAgIG1hcmdpbi1yaWdodDogMTIuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtNC40OTk5OTk5MTQ4cmVtICArICAyMi40OTk5OTk4ODY0dncgLCAxMi4zNzVyZW0gKSkge1xuICAgIC5jbGllbnRzX190aXRsZS1ibG9jayB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtNC40OTk5OTk5MTQ4cmVtICArICAyMi40OTk5OTk4ODY0dncgLCAxMi4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTQuNDk5OTk5OTE0OHJlbSAgKyAgMjIuNDk5OTk5ODg2NHZ3ICwgMTIuMzc1cmVtICkpIHtcbiAgICAuY2xpZW50c19fdGl0bGUtYmxvY2sge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDAuMDAwMDAwMDYyNXJlbSArIDEyLjM3NDk5OTkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY2xpZW50c19fdGl0bGUtYmxvY2sge1xuICAgIG1hcmdpbi1yaWdodDogMC4wMDAwMDAwNjI1cmVtO1xuICB9XG59XG4uY2xpZW50c19fdXBwZXJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY2xpZW50c19fdXBwZXJ0aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS42ODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC42NjQ3NzI3MjczcmVtICArICAxLjM2MzYzNjM2MzZ2dyAsIDEuNjg3NXJlbSApKSB7XG4gICAgLmNsaWVudHNfX3VwcGVydGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNjY0NzcyNzI3M3JlbSAgKyAgMS4zNjM2MzYzNjM2dncgLCAxLjY4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNjY0NzcyNzI3M3JlbSAgKyAgMS4zNjM2MzYzNjM2dncgLCAxLjY4NzVyZW0gKSkge1xuICAgIC5jbGllbnRzX191cHBlcnRpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMC45Mzc1cmVtICsgMC43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jbGllbnRzX191cHBlcnRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjkzNzVyZW07XG4gIH1cbn1cbi5jbGllbnRzX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY2xpZW50c19fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDEuNXJlbSAsIDEuMjcyNzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjEyNXJlbSApKSB7XG4gICAgLmNsaWVudHNfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDEuNXJlbSAsIDEuMjcyNzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAxLjVyZW0gLCAxLjI3MjcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xMjVyZW0gKSkge1xuICAgIC5jbGllbnRzX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMS41cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY2xpZW50c19fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY2xpZW50c19fdGl0bGUge1xuICAgIHdpZHRoOiAxNi43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCA3LjgxMjVyZW0gLCA0LjU2MjVyZW0gICsgIDE2LjI1dncgLCAxNi43NXJlbSApKSB7XG4gICAgLmNsaWVudHNfX3RpdGxlIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggNy44MTI1cmVtICwgNC41NjI1cmVtICArICAxNi4yNXZ3ICwgMTYuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCA3LjgxMjVyZW0gLCA0LjU2MjVyZW0gICsgIDE2LjI1dncgLCAxNi43NXJlbSApKSB7XG4gICAgLmNsaWVudHNfX3RpdGxlIHtcbiAgICAgIHdpZHRoOiBjYWxjKDcuODEyNXJlbSArIDguOTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jbGllbnRzX190aXRsZSB7XG4gICAgd2lkdGg6IDcuODEyNXJlbTtcbiAgfVxufVxuLmNsaWVudHNfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY2xpZW50c19fbGlzdCB7XG4gICAgd2lkdGg6IDM3LjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTEzLjYzNjM2MzU1MTFyZW0gICsgIDY4LjE4MTgxODA2ODJ2dyAsIDM3LjVyZW0gKSkge1xuICAgIC5jbGllbnRzX19saXN0IHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTEzLjYzNjM2MzU1MTFyZW0gICsgIDY4LjE4MTgxODA2ODJ2dyAsIDM3LjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtMTMuNjM2MzYzNTUxMXJlbSAgKyAgNjguMTgxODE4MDY4MnZ3ICwgMzcuNXJlbSApKSB7XG4gICAgLmNsaWVudHNfX2xpc3Qge1xuICAgICAgd2lkdGg6IGNhbGMoMC4wMDAwMDAwNjI1cmVtICsgMzcuNDk5OTk5OTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jbGllbnRzX19saXN0IHtcbiAgICB3aWR0aDogMC4wMDAwMDAwNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY2xpZW50c19fbGlzdCB7XG4gICAgcm93LWdhcDogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHJvdy1nYXA6IGNsYW1wKCAxLjg3NXJlbSAsIDEuNDIwNDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAzLjEyNXJlbSApKSB7XG4gICAgLmNsaWVudHNfX2xpc3Qge1xuICAgICAgcm93LWdhcDogY2xhbXAoIDEuODc1cmVtICwgMS40MjA0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDMuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHJvdy1nYXA6IGNsYW1wKCAxLjg3NXJlbSAsIDEuNDIwNDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAzLjEyNXJlbSApKSB7XG4gICAgLmNsaWVudHNfX2xpc3Qge1xuICAgICAgcm93LWdhcDogY2FsYygxLjg3NXJlbSArIDEuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY2xpZW50c19fbGlzdCB7XG4gICAgcm93LWdhcDogMS44NzVyZW07XG4gIH1cbn1cbjpyb290IHtcbiAgLS1kYXJrLWNsOiAjMEUwRTBFO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9udWxsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2hvbWUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvdXRpbHMvdmFycy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBREdEOztBQ0RBOzs7RUFHQyxzQkFBQTtBRElEOztBQ01BOztFQUVDLFlBQUE7RUFDQSxnQkFBQTtBREhEOztBQ0tBO0VBQ0MsY0FBQTtFQUNBLGNBQUE7RUFDQSxvQkROWTtFQ09aLG9CRE5VO0VDUVYsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBREhEOztBQ0tBOzs7RUFHQyxvQkRsQlk7RUNtQlosa0JBQUE7RUFDQSxvQkFBQTtBREZEOztBQ0lBO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBREREOztBQ0dBO0VBQ0MsY0FBQTtFQUNBLHFCQUFBO0FEQUQ7O0FDRUE7RUFDQyxnQkFBQTtBRENEOztBQ0NBO0VBQ0MsbUJBQUE7QURFRDs7QUNBQTs7Ozs7O0VBTUMsb0JBQUE7RUFDQSxrQkFBQTtBREdEOztBQUhDO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBTUY7QUFDQTtF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QTtFSHVSRjtFR3JSQztJQUNDLDZCQUFBO0lBQ0Esd0JBQUE7SUFDQSxXQUFBO0VIdVJGO0FBQ0Y7O0FLbmNBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtBTHNjSjtBSTNYRTtFQzdFRjtJRDhFRyxhQUFBO0VKOFhEO0FBQ0Y7QUkzWEM7RUFFQztJQ3BGRjtNRHFGRyx5RUFoQmM7SUo2WWI7RUFDRjtFSTNYQTtJQ3hGRjtNRHlGRyx1REFBQTtJSjhYQztFQUNGO0FBQ0Y7QUk1WEU7RUM3RkY7SUQ4RkcsaUJBQUE7RUorWEQ7QUFDRjtBSzFkSTtFQUNJLGtCQUFBO0FMNGRSOztBS3hkQTtFQUNJLGtCQUFBO0VBSUEsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBTHdkSjtBSTNaRTtFQ3BFRjtJRHFFRyxnQkFBQTtFSjhaRDtBQUNGO0FJM1pDO0VBRUM7SUMzRUY7TUQ0RUcseUVBaEJjO0lKNmFiO0VBQ0Y7RUkzWkE7SUMvRUY7TURnRkcsbURBQUE7SUo4WkM7RUFDRjtBQUNGO0FJNVpFO0VDcEZGO0lEcUZHLGdCQUFBO0VKK1pEO0FBQ0Y7QUlqYkU7RUNwRUY7SURxRUcsYUFBQTtFSm9iRDtBQUNGO0FJamJDO0VBRUM7SUMzRUY7TUQ0RUcseUVBaEJjO0lKbWNiO0VBQ0Y7RUlqYkE7SUMvRUY7TURnRkcsc0RBQUE7SUpvYkM7RUFDRjtBQUNGO0FJbGJFO0VDcEZGO0lEcUZHLGVBQUE7RUpxYkQ7QUFDRjtBSXZjRTtFQ3BFRjtJRHFFRyxXQUFBO0VKMGNEO0FBQ0Y7QUl2Y0M7RUFFQztJQzNFRjtNRDRFRyxvRUFoQmM7SUp5ZGI7RUFDRjtFSXZjQTtJQy9FRjtNRGdGRyxvREFBQTtJSjBjQztFQUNGO0FBQ0Y7QUl4Y0U7RUNwRkY7SURxRkcsZUFBQTtFSjJjRDtBQUNGO0FLeGhCUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBRUEsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUx5aEJaO0FJcGVFO0VDM0RNO0lENERMLGNBQUE7RUp1ZUQ7QUFDRjtBSXBlQztFQUVDO0lDbEVNO01EbUVMLHVFQWhCYztJSnNmYjtFQUNGO0VJcGVBO0lDdEVNO01EdUVMLG9EQUFBO0lKdWVDO0VBQ0Y7QUFDRjtBSXJlRTtFQzNFTTtJRDRFTCxlQUFBO0VKd2VEO0FBQ0Y7QUkxZkU7RUMzRE07SUQ0REwsY0FBQTtFSjZmRDtBQUNGO0FJMWZDO0VBRUM7SUNsRU07TURtRUwsMERBaEJjO0lKNGdCYjtFQUNGO0VJMWZBO0lDdEVNO01EdUVMLHFEQUFBO0lKNmZDO0VBQ0Y7QUFDRjtBSTNmRTtFQzNFTTtJRDRFTCxlQUFBO0VKOGZEO0FBQ0Y7QUloaEJFO0VDakRFO0lEa0RELG1CQUFBO0VKbWhCRDtBQUNGO0FJaGhCQztFQUVDO0lDeERFO01EeURELDJFQWhCYztJSmtpQmI7RUFDRjtFSWhoQkE7SUM1REU7TUQ2REQsdURBQUE7SUptaEJDO0VBQ0Y7QUFDRjtBSWpoQkU7RUNqRUU7SURrRUQsa0JBQUE7RUpvaEJEO0FBQ0Y7O0FLamxCQTtFQUNRLGtCQUFBO0VBSUEsc0JBQUE7QUxpbEJSO0FJM2lCRTtFQzNDRjtJRDRDRyxlQUFBO0VKOGlCRDtBQUNGO0FJM2lCQztFQUVDO0lDbERGO01EbURHLHlFQWhCYztJSjZqQmI7RUFDRjtFSTNpQkE7SUN0REY7TUR1REcsbURBQUE7SUo4aUJDO0VBQ0Y7QUFDRjtBSTVpQkU7RUMzREY7SUQ0REcsYUFBQTtFSitpQkQ7QUFDRjtBSWprQkU7RUMzQ0Y7SUQ0Q0csYUFBQTtFSm9rQkQ7QUFDRjtBSWprQkM7RUFFQztJQ2xERjtNRG1ERyx3RUFoQmM7SUptbEJiO0VBQ0Y7RUlqa0JBO0lDdERGO01EdURHLG9EQUFBO0lKb2tCQztFQUNGO0FBQ0Y7QUlsa0JFO0VDM0RGO0lENERHLGNBQUE7RUpxa0JEO0FBQ0Y7QUl2bEJFO0VDM0NGO0lENENHLGVBQUE7RUowbEJEO0FBQ0Y7QUl2bEJDO0VBRUM7SUNsREY7TURtREcsMEVBaEJjO0lKeW1CYjtFQUNGO0VJdmxCQTtJQ3RERjtNRHVERyxtREFBQTtJSjBsQkM7RUFDRjtBQUNGO0FJeGxCRTtFQzNERjtJRDRERyxlQUFBO0VKMmxCRDtBQUNGO0FLbHBCSTtFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7QUxtcEJSO0FJbm5CRTtFQ3JDRTtJRHNDRCxtQkFBQTtFSnNuQkQ7QUFDRjtBSW5uQkM7RUFFQztJQzVDRTtNRDZDRCwyRUFoQmM7SUpxb0JiO0VBQ0Y7RUlubkJBO0lDaERFO01EaURELHVEQUFBO0lKc25CQztFQUNGO0FBQ0Y7QUlwbkJFO0VDckRFO0lEc0RELGtCQUFBO0VKdW5CRDtBQUNGO0FLeHFCUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBTDBxQlo7QUt2cUJJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FMeXFCUjs7QUtycUJBO0VBQ0ksa0JBQUE7RUFLQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtFQUNBLHFEQUFBO0FMbXFCSjtBSWhxQkU7RUNkRjtJRGVHLGNBQUE7RUptcUJEO0FBQ0Y7QUlocUJDO0VBRUM7SUNyQkY7TURzQkcscUVBaEJjO0lKa3JCYjtFQUNGO0VJaHFCQTtJQ3pCRjtNRDBCRyxnREFBQTtJSm1xQkM7RUFDRjtBQUNGO0FJanFCRTtFQzlCRjtJRCtCRyxVQUFBO0VKb3FCRDtBQUNGO0FJdHJCRTtFQ2RGO0lEZUcsZ0JBQUE7RUp5ckJEO0FBQ0Y7QUl0ckJDO0VBRUM7SUNyQkY7TURzQkcsMEVBaEJjO0lKd3NCYjtFQUNGO0VJdHJCQTtJQ3pCRjtNRDBCRyxtREFBQTtJSnlyQkM7RUFDRjtBQUNGO0FJdnJCRTtFQzlCRjtJRCtCRyxjQUFBO0VKMHJCRDtBQUNGO0FJNXNCRTtFQ2RGO0lEZUcsZUFBQTtFSitzQkQ7QUFDRjtBSTVzQkM7RUFFQztJQ3JCRjtNRHNCRyx5RUFoQmM7SUo4dEJiO0VBQ0Y7RUk1c0JBO0lDekJGO01EMEJHLHNEQUFBO0lKK3NCQztFQUNGO0FBQ0Y7QUk3c0JFO0VDOUJGO0lEK0JHLGdCQUFBO0VKZ3RCRDtBQUNGO0FJbHVCRTtFQ2RGO0lEZUcsZ0JBQUE7RUpxdUJEO0FBQ0Y7QUlsdUJDO0VBRUM7SUNyQkY7TURzQkcsMEVBaEJjO0lKb3ZCYjtFQUNGO0VJbHVCQTtJQ3pCRjtNRDBCRyx1REFBQTtJSnF1QkM7RUFDRjtBQUNGO0FJbnVCRTtFQzlCRjtJRCtCRyxpQkFBQTtFSnN1QkQ7QUFDRjtBSXh2QkU7RUNkRjtJRGVHLG9CQUFBO0VKMnZCRDtBQUNGO0FJeHZCQztFQUVDO0lDckJGO01Ec0JHLDRFQWhCYztJSjB3QmI7RUFDRjtFSXh2QkE7SUN6QkY7TUQwQkcsd0RBQUE7SUoydkJDO0VBQ0Y7QUFDRjtBSXp2QkU7RUM5QkY7SUQrQkcsa0JBQUE7RUo0dkJEO0FBQ0Y7QUsvd0JJO0VBQ0kscUJBQUE7RUFDQSxpQ0FBQTtBTGl4QlI7O0FJbHhCRTtFQ01FO0lETEQsZ0JBQUE7RUpzeEJEO0FBQ0Y7QUlueEJDO0VBRUM7SUNERTtNREVELDBFQWhCYztJSnF5QmI7RUFDRjtFSW54QkE7SUNMRTtNRE1ELG9EQUFBO0lKc3hCQztFQUNGO0FBQ0Y7QUlweEJFO0VDVkU7SURXRCxnQkFBQTtFSnV4QkQ7QUFDRjs7QUs5eEJBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FMaXlCSjtBSTl5QkU7RUNXRjtJRFZHLGVBQUE7RUppekJEO0FBQ0Y7QUk5eUJDO0VBRUM7SUNJRjtNREhHLHdFQWJlO0lKNnpCZDtFQUNGO0VJOXlCQTtJQ0FGO01EQ0csa0RBQUE7SUppekJDO0VBQ0Y7QUFDRjtBSS95QkU7RUNMRjtJRE1HLFdBQUE7RUprekJEO0FBQ0Y7QUtyekJJO0VBSko7SUFLUSxhQUFBO0VMd3pCTjtBQUNGOztBS3R6QkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUx5ekJKO0FJOTBCRTtFQ21CRjtJRGxCRyxnQkFBQTtFSmkxQkQ7QUFDRjtBSTkwQkM7RUFFQztJQ1lGO01EWEcseUVBYmU7SUo2MUJkO0VBQ0Y7RUk5MEJBO0lDUUY7TURQRyxtREFBQTtJSmkxQkM7RUFDRjtBQUNGO0FJLzBCRTtFQ0dGO0lERkcsWUFBQTtFSmsxQkQ7QUFDRjtBSzcwQkk7RUFKSjtJQUtRLGFBQUE7RUxnMUJOO0FBQ0Y7O0FJejJCRTtFQytCRjtJRDlCRyxrQkFBQTtFSjYyQkQ7QUFDRjtBSTEyQkM7RUFFQztJQ3dCRjtNRHZCRywyRUFoQmM7SUo0M0JiO0VBQ0Y7RUkxMkJBO0lDb0JGO01EbkJHLHVEQUFBO0lKNjJCQztFQUNGO0FBQ0Y7QUkzMkJFO0VDZUY7SURkRyxtQkFBQTtFSjgyQkQ7QUFDRjtBSzkxQkk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBTGcyQlI7O0FLNzFCQTtFQUdJLGNBQUE7RUFDQSxrQkFBQTtBTDgxQko7QUl6NEJFO0VDdUNGO0lEdENHLGlCQUFBO0VKNDRCRDtBQUNGO0FJejRCQztFQUVDO0lDZ0NGO01EL0JHLDZFQWhCYztJSjI1QmI7RUFDRjtFSXo0QkE7SUM0QkY7TUQzQkcsdURBQUE7SUo0NEJDO0VBQ0Y7QUFDRjtBSTE0QkU7RUN1QkY7SUR0QkcsZ0JBQUE7RUo2NEJEO0FBQ0Y7QUkvNUJFO0VDdUNGO0lEdENHLHdCQUFBO0VKazZCRDtBQUNGO0FJLzVCQztFQUVDO0lDZ0NGO01EL0JHLCtFQWhCYztJSmk3QmI7RUFDRjtFSS81QkE7SUM0QkY7TUQzQkcsMkRBQUE7SUprNkJDO0VBQ0Y7QUFDRjtBSWg2QkU7RUN1QkY7SUR0QkcscUJBQUE7RUptNkJEO0FBQ0Y7QUt6NEJJO0VBRUksZ0JBQUE7QUwwNEJSO0FJeDdCRTtFQzRDRTtJRDNDRCx3QkFBQTtFSjI3QkQ7QUFDRjtBSXg3QkM7RUFFQztJQ3FDRTtNRHBDRCxrRkFoQmM7SUowOEJiO0VBQ0Y7RUl4N0JBO0lDaUNFO01EaENELDZEQUFBO0lKMjdCQztFQUNGO0FBQ0Y7QUl6N0JFO0VDNEJFO0lEM0JELHdCQUFBO0VKNDdCRDtBQUNGO0FLNzVCSTtFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7QUw4NUJSO0FJbDlCRTtFQ2lERTtJRGhERCxtQkFBQTtFSnE5QkQ7QUFDRjtBSWw5QkM7RUFFQztJQzBDRTtNRHpDRCwwRUFoQmM7SUpvK0JiO0VBQ0Y7RUlsOUJBO0lDc0NFO01EckNELHNEQUFBO0lKcTlCQztFQUNGO0FBQ0Y7QUluOUJFO0VDaUNFO0lEaENELGlCQUFBO0VKczlCRDtBQUNGOztBS2o3QkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUxvN0JKO0FJNytCRTtFQ3VERjtJRHRERyxvQkFBQTtFSmcvQkQ7QUFDRjtBSTcrQkM7RUFFQztJQ2dERjtNRC9DRyw2RUFoQmM7SUorL0JiO0VBQ0Y7RUk3K0JBO0lDNENGO01EM0NHLDBEQUFBO0lKZy9CQztFQUNGO0FBQ0Y7QUk5K0JFO0VDdUNGO0lEdENHLHNCQUFBO0VKaS9CRDtBQUNGO0FJbmdDRTtFQ3VERjtJRHRERyxhQUFBO0VKc2dDRDtBQUNGO0FJbmdDQztFQUVDO0lDZ0RGO01EL0NHLG9FQWhCYztJSnFoQ2I7RUFDRjtFSW5nQ0E7SUM0Q0Y7TUQzQ0csZ0RBQUE7SUpzZ0NDO0VBQ0Y7QUFDRjtBSXBnQ0U7RUN1Q0Y7SUR0Q0csV0FBQTtFSnVnQ0Q7QUFDRjtBSzc5Qkk7RUFMSjtJQU1RLHNCQUFBO0VMZytCTjtBQUNGO0FJOWhDRTtFQ3VERjtJRHRERyxvQkFBQTtFSmlpQ0Q7QUFDRjtBSTloQ0M7RUFFQztJQ2dERjtNRC9DRyw0RUFoQmM7SUpnakNiO0VBQ0Y7RUk5aENBO0lDNENGO01EM0NHLHlEQUFBO0lKaWlDQztFQUNGO0FBQ0Y7QUkvaENFO0VDdUNGO0lEdENHLHFCQUFBO0VKa2lDRDtBQUNGO0FLbi9CSTtFQUdJLGtCQUFBO0FMbS9CUjtBSXZqQ0U7RUNpRUU7SURoRUQsaUJBQUE7RUowakNEO0FBQ0Y7QUl2akNDO0VBRUM7SUMwREU7TUR6REQsMEVBaEJjO0lKeWtDYjtFQUNGO0VJdmpDQTtJQ3NERTtNRHJERCxxREFBQTtJSjBqQ0M7RUFDRjtBQUNGO0FJeGpDRTtFQ2lERTtJRGhERCxjQUFBO0VKMmpDRDtBQUNGO0FJN2tDRTtFQ2lFRTtJRGhFRCxxQkFBQTtFSmdsQ0Q7QUFDRjtBSTdrQ0M7RUFFQztJQzBERTtNRHpERCw2RUFoQmM7SUorbENiO0VBQ0Y7RUk3a0NBO0lDc0RFO01EckRELHlEQUFBO0lKZ2xDQztFQUNGO0FBQ0Y7QUk5a0NFO0VDaURFO0lEaERELG9CQUFBO0VKaWxDRDtBQUNGO0FLNWhDSTtFQUVJLGdCQUFBO0FMNmhDUjtBSXRtQ0U7RUN1RUU7SUR0RUQsa0JBQUE7RUp5bUNEO0FBQ0Y7QUl0bUNDO0VBRUM7SUNnRUU7TUQvREQsMkVBaEJjO0lKd25DYjtFQUNGO0VJdG1DQTtJQzRERTtNRDNERCx3REFBQTtJSnltQ0M7RUFDRjtBQUNGO0FJdm1DRTtFQ3VERTtJRHRERCxtQkFBQTtFSjBtQ0Q7QUFDRjtBS2pqQ1E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFFQSxnQ0FBQTtBTGtqQ1o7QUlwb0NFO0VDMkVNO0lEMUVMLFlBQUE7RUp1b0NEO0FBQ0Y7QUlwb0NDO0VBRUM7SUNvRU07TURuRUwsdUVBaEJjO0lKc3BDYjtFQUNGO0VJcG9DQTtJQ2dFTTtNRC9ETCxzREFBQTtJSnVvQ0M7RUFDRjtBQUNGO0FJcm9DRTtFQzJETTtJRDFETCxnQkFBQTtFSndvQ0Q7QUFDRjtBSTFwQ0U7RUNzRkU7SURyRkQsaUJBQUE7RUo2cENEO0FBQ0Y7QUkxcENDO0VBRUM7SUMrRUU7TUQ5RUQsNkVBaEJjO0lKNHFDYjtFQUNGO0VJMXBDQTtJQzJFRTtNRDFFRCx1REFBQTtJSjZwQ0M7RUFDRjtBQUNGO0FJM3BDRTtFQ3NFRTtJRHJFRCxnQkFBQTtFSjhwQ0Q7QUFDRjtBS3RsQ0k7RUFHSSxnQkFBQTtBTHNsQ1I7QUluckNFO0VDMEZFO0lEekZELG9CQUFBO0VKc3JDRDtBQUNGO0FJbnJDQztFQUVDO0lDbUZFO01EbEZELDhFQWhCYztJSnFzQ2I7RUFDRjtFSW5yQ0E7SUMrRUU7TUQ5RUQseURBQUE7SUpzckNDO0VBQ0Y7QUFDRjtBSXByQ0U7RUMwRUU7SUR6RUQsb0JBQUE7RUp1ckNEO0FBQ0Y7QUl6c0NFO0VDMEZFO0lEekZELHVCQUFBO0VKNHNDRDtBQUNGO0FJenNDQztFQUVDO0lDbUZFO01EbEZELGlGQWhCYztJSjJ0Q2I7RUFDRjtFSXpzQ0E7SUMr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Ryx1QkFBQTtFSis3Q0Q7QUFDRjtBSTU3Q0M7RUFFQztJQzJMRjtNRDFMRyxnRkFoQmM7SUo4OENiO0VBQ0Y7RUk1N0NBO0lDdUxGO01EdExHLDZEQUFBO0lKKzdDQztFQUNGO0FBQ0Y7QUk3N0NFO0VDa0xGO0lEakxHLHdCQUFBO0VKZzhDRDtBQUNGOztBS3Z3Q0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBTDB3Q0o7QUt6d0NJO0VBRUkscUZBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0FMeXdDUjtBSTk5Q0U7RUNnTkU7SUQvTUQsWUFBQTtFSmkrQ0Q7QUFDRjtBSTk5Q0M7RUFFQztJQ3lNRTtNRHhNRCxzRUFoQmM7SUpnL0NiO0VBQ0Y7RUk5OUNBO0lDcU1FO01EcE1ELGlEQUFBO0lKaStDQztFQUNGO0FBQ0Y7QUkvOUNFO0VDZ01FO0lEL0xELGNBQUE7RUprK0NEO0FBQ0Y7QUlwL0NFO0VDZ05FO0lEL01ELGFBQUE7RUp1L0NEO0FBQ0Y7QUlwL0NDO0VBRUM7SUN5TUU7TUR4TUQsdUVBaEJjO0lKc2dEYjtFQUNGO0VJcC9DQTtJQ3FNRTtNRHBNRCxrREFBQTtJSnUvQ0M7RUFDRjtBQUNGO0FJci9DRTtFQ2dNRTtJRC9MRCxlQUFBO0VKdy9DRDtBQUNGO0FLcHpDUTtFQUNJLDJCQUFBO0FMc3pDWjtBS3J6Q1c7RUFDSyw0QkFBQTtBTHV6Q2hCO0FLcnpDVztFQUNDLGlCQUFBO0FMdXpDWjtBS2x6Q0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBTG96Q1I7QUtqekNDO0VBQ08sa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUdBLDJCQUFBO0VBQ0EsK0JBQUE7QUxpekNSO0FJaGlERTtFQ3dPRDtJRHZPRSx3QkFBQTtFSm1pREQ7QUFDRjtBSWhpREM7RUFFQztJQ2lPRDtNRGhPRSxrRkFoQmM7SUprakRiO0VBQ0Y7RUloaURBO0lDNk5EO01ENU5FLDREQUFBO0lKbWlEQztFQUNGO0FBQ0Y7QUlqaURFO0VDd05EO0lEdk5FLHdCQUFBO0VKb2lERDtBQUNGO0FJdGpERTtFQ3dPRDtJRHZPRSxzQkFBQTtFSnlqREQ7QUFDRjtBSXRqREM7RUFFQztJQ2lPRDtNRGhPRSxnRkFoQmM7SUp3a0RiO0VBQ0Y7RUl0akRBO0lDNk5EO01ENU5FLDZEQUFBO0lKeWpEQztFQUNGO0FBQ0Y7QUl2akRFO0VDd05EO0lEdk5FLHVCQUFBO0VKMGpERDtBQUNGO0FLMTFDQztFQUNPLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUw0MUNSO0FLMzFDUTtFQUpQO0lBS1csZUFBQTtFTDgxQ1Y7QUFDRjtBSzMxQ0M7RUFDTyxlQUFBO0VBQ0EsV0FBQTtBTDYxQ1I7QUs1MUNRO0VBSFA7SUFJVyxlQUFBO0VMKzFDVjtBQUNGOztBSS9sREU7RUNzUUY7SURyUUcseUJBQUE7RUptbUREO0FBQ0Y7QUlobURDO0VBRUM7SUMrUEY7TUQ5UEcsbUZBaEJjO0lKa25EYjtFQUNGO0VJaG1EQTtJQzJQRjtNRDFQRyw4REFBQTtJSm1tREM7RUFDRjtBQUNGO0FJam1ERTtFQ3NQRjtJRHJQRyx5QkFBQTtFSm9tREQ7QUFDRjtBSzkyQ0k7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FMZzNDUjtBSTNuREU7RUN3UUU7SUR2UUQsWUFBQTtFSjhuREQ7QUFDRjtBSTNuREM7RUFFQztJQ2lRRTtNRGhRRCxxRUFoQmM7SUo2b0RiO0VBQ0Y7RUkzbkRBO0lDNlBFO01ENVBELGtEQUFBO0lKOG5EQztFQUNGO0FBQ0Y7QUk1bkRFO0VDd1BFO0lEdlBELGFBQUE7RUorbkREO0FBQ0Y7QUtsNENJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBTG80Q1I7QUtoNENZO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FMazRDaEI7QUl6cERFO0VDMlJFO0lEMVJELGdCQUFBO0VKNHBERDtBQUNGO0FJenBEQztFQUVDO0lDb1JFO01EblJELDRFQWhCYztJSjJxRGI7RUFDRjtFSXpwREE7SUNnUkU7TUQvUUQsd0RBQUE7SUo0cERDO0VBQ0Y7QUFDRjtBSTFwREU7RUMyUUU7SUQxUUQsaUJBQUE7RUo2cEREO0FBQ0Y7QUkvcURFO0VDMlJFO0lEMVJELGdCQUFBO0VKa3JERDtBQUNGO0FJL3FEQztFQUVDO0lDb1JFO01EblJELDJFQWhCYztJSmlzRGI7RUFDRjtFSS9xREE7SUNnUkU7TUQvUUQsdURBQUE7SUprckRDO0VBQ0Y7QUFDRjtBSWhyREU7RUMyUUU7SUQxUUQsaUJBQUE7RUptckREO0FBQ0Y7QUtyNkNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUx1NkNSO0FJMXNERTtFQ2dTRTtJRC9SRCxvQkFBQTtFSjZzREQ7QUFDRjtBSTFzREM7RUFFQztJQ3lSRTtNRHhSRCw4RUFoQmM7SUo0dERiO0VBQ0Y7RUkxc0RBO0lDcVJFO01EcFJELDJEQUFBO0lKNnNEQztFQUNGO0FBQ0Y7QUkzc0RFO0VDZ1JFO0lEL1FELHFCQUFBO0VKOHNERDtBQUNGO0FJaHVERTtFQ2dTRTtJRC9SRCxxQkFBQTtFSm11REQ7QUFDRjtBSWh1REM7RUFFQztJQ3lSRTtNRHhSRCw2RUFoQmM7SUprdkRiO0VBQ0Y7RUlodURBO0lDcVJFO01EcFJELDBEQUFBO0lKbXVEQztFQUNGO0FBQ0Y7QUlqdURFO0VDZ1JFO0lEL1FELHNCQUFBO0VKb3VERDtBQUNGO0FLaDlDUTtFQU5KO0lBT1EsZUFBQTtFTG05Q1Y7QUFDRjtBS2g5Q0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUxrOUNSO0FJL3ZERTtFQ2dURTtJRC9TRCxjQUFBO0VKa3dERDtBQUNGO0FJL3ZEQztFQUVDO0lDeVNFO01EeFNELHdFQWhCYztJSml4RGI7RUFDRjtFSS92REE7SUNxU0U7TURwU0QsZ0RBQUE7SUprd0RDO0VBQ0Y7QUFDRjtBSWh3REU7RUNnU0U7SUQvUkQsY0FBQTtFSm13REQ7QUFDRjtBSXJ4REU7RUNnVEU7SUQvU0QsZ0JBQUE7RUp3eEREO0FBQ0Y7QUlyeERDO0VBRUM7SUN5U0U7TUR4U0QsMkVBaEJjO0lKdXlEYjtFQUNGO0VJcnhEQTtJQ3FTRTtNRHBTRCx1REFBQTtJSnd4REM7RUFDRjtBQUNGO0FJdHhERTtFQ2dTRTtJRC9SRCxpQkFBQTtFSnl4REQ7QUFDRjtBS3QvQ0k7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FMdy9DUjtBS3QvQ1E7RUFKSjtJQUtRLGVBQUE7SUFDQSxjQUFBO0VMeS9DVjtBQUNGO0FLdC9DSTtFQUNJLGtCQUFBO0FMdy9DUjtBS3YvQ1E7RUFGSjtJQUdRLGFBQUE7RUwwL0NWO0FBQ0Y7QUt2L0NJO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSw4RkFBQTtBTHkvQ1I7QUt2L0NRO0VBUEo7SUFRUSxXQUFBO0lBQ0EsVUFBQTtFTDAvQ1Y7QUFDRjtBS3ovQ1E7RUFYSjtJQVlRLFVBQUE7SUFDQSxTQUFBO0VMNC9DVjtBQUNGOztBS3ovQ0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUw0L0NKO0FJdjFERTtFQ3VWRjtJRHRWRyxtQkFBQTtFSjAxREQ7QUFDRjtBSXYxREM7RUFFQztJQ2dWRjtNRC9VRyw2RUFoQmM7SUp5MkRiO0VBQ0Y7RUl2MURBO0lDNFVGO01EM1VHLDhEQUFBO0lKMDFEQztFQUNGO0FBQ0Y7QUl4MURFO0VDdVVGO0lEdFVHLHdCQUFBO0VKMjFERDtBQUNGO0FJNzJERTtFQ3VWRjtJRHRWRyxxQkFBQTtFSmczREQ7QUFDRjtBSTcyREM7RUFFQztJQ2dWRjtNRC9VRyw4RUFoQmM7SUorM0RiO0VBQ0Y7RUk3MkRBO0lDNFVGO01EM1VHLHNEQUFBO0lKZzNEQztFQUNGO0FBQ0Y7QUk5MkRFO0VDdVVGO0lEdFVHLHFCQUFBO0VKaTNERDtBQUNGO0FJbjRERTtFQ3VWRjtJRHRWRyxzQkFBQTtFSnM0REQ7QUFDRjtBSW40REM7RUFFQztJQ2dWRjtNRC9VRywrRUFoQmM7SUpxNURiO0VBQ0Y7RUluNERBO0lDNFVGO01EM1VHLDREQUFBO0lKczREQztFQUNGO0FBQ0Y7QUlwNERFO0VDdVVGO0lEdFVHLHVCQUFBO0VKdTRERDtBQUNGO0FLMWpESTtFQUNJLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtBTDJqRFI7QUk5NURFO0VDK1ZFO0lEOVZELGtCQUFBO0VKaTZERDtBQUNGO0FJOTVEQztFQUVDO0lDd1ZFO01EdlZELDJFQWhCYztJSmc3RGI7RUFDRjtFSTk1REE7SUNvVkU7TURuVkQsd0RBQUE7SUppNkRDO0VBQ0Y7QUFDRjtBSS81REU7RUMrVUU7SUQ5VUQsbUJBQUE7RUprNkREO0FBQ0Y7QUlwN0RFO0VDK1ZFO0lEOVZELGlCQUFBO0VKdTdERDtBQUNGO0FJcDdEQztFQUVDO0lDd1ZFO01EdlZELDZFQWhCYztJSnM4RGI7RUFDRjtFSXA3REE7SUNvVkU7TURuVkQsdURBQUE7SUp1N0RDO0VBQ0Y7QUFDRjtBSXI3REU7RUMrVUU7SUQ5VUQsZ0JBQUE7RUp3N0REO0FBQ0Y7QUtybURRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUxzbURaO0FJbDlERTtFQ3FXTTtJRHBXTCxlQUFBO0VKcTlERDtBQUNGO0FJbDlEQztFQUVDO0lDOFZNO01EN1ZMLHlFQWhCYztJSm8rRGI7RUFDRjtFSWw5REE7SUMwVk07TUR6Vkwsc0RBQUE7SUpxOURDO0VBQ0Y7QUFDRjtBSW45REU7RUNxVk07SURwVkwsZ0JBQUE7RUpzOUREO0FBQ0Y7QUl4K0RFO0VDK1ZFO0lEOVZELG1CQUFBO0VKMitERDtBQUNGO0FJeCtEQztFQUVDO0lDd1ZFO01EdlZELDZFQWhCYztJSjAvRGI7RUFDRjtFSXgrREE7SUNvVkU7TURuVkQsOERBQUE7SUoyK0RDO0VBQ0Y7QUFDRjtBSXorREU7RUMrVUU7SUQ5VUQsd0JBQUE7RUo0K0REO0FBQ0Y7QUtocERRO0VBR0k7SUFFSSxVQUFBO0VMK29EZDtBQUNGO0FJbmdFRTtFQ2lYVTtJRGhYVCxhQUFBO0VKc2dFRDtBQUNGO0FJbmdFQztFQUVDO0lDMFdVO01EeldULHNFQWhCYztJSnFoRWI7RUFDRjtFSW5nRUE7SUNzV1U7TURyV1QsbURBQUE7SUpzZ0VDO0VBQ0Y7QUFDRjtBSXBnRUU7RUNpV1U7SURoV1QsY0FBQTtFSnVnRUQ7QUFDRjs7QUs5cERBO0VBQ1EsZ0NBQUE7RUFDQSxhQUFBO0FMaXFEUjtBS2hxRFE7RUFIUjtJQUlZLGFBQUE7RUxtcURWO0FBQ0Y7QUtscURFO0VBQ1UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBTG9xRFo7QUl6aUVFO0VDaVlBO0lEaFlDLHNCQUFBO0VKNGlFRDtBQUNGO0FJemlFQztFQUVDO0lDMFhBO01EelhDLGdGQWhCYztJSjJqRWI7RUFDRjtFSXppRUE7SUNzWEE7TURyWEMsMERBQUE7SUo0aUVDO0VBQ0Y7QUFDRjtBSTFpRUU7RUNpWEE7SURoWEMsc0JBQUE7RUo2aUVEO0FBQ0Y7QUkvakVFO0VDaVlBO0lEaFlDLDBCQUFBO0VKa2tFRDtBQUNGO0FJL2pFQztFQUVDO0lDMFhBO01EelhDLG9GQWhCYztJSmlsRWI7RUFDRjtFSS9qRUE7SUNzWEE7TURyWEMsOERBQUE7SUpra0VDO0VBQ0Y7QUFDRjtBSWhrRUU7RUNpWEE7SURoWEMsd0JBQUE7RUpta0VEO0FBQ0Y7QUs3c0RZO0VBQ0EsV0FBQTtFQUdBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FMNnNEWjtBSTdsRUU7RUN3WVU7SUR2WVQsaUJBQUE7RUpnbUVEO0FBQ0Y7QUk3bEVDO0VBRUM7SUNpWVU7TURoWVQsMEVBaEJjO0lKK21FYjtFQUNGO0VJN2xFQTtJQzZYVTtNRDVYVCxxREFBQTtJSmdtRUM7RUFDRjtBQUNGO0FJOWxFRTtFQ3dYVTtJRHZYVCxjQUFBO0VKaW1FRDtBQUNGO0FJbm5FRTtFQ3dZVTtJRHZZVCxrQkFBQTtFSnNuRUQ7QUFDRjtBSW5uRUM7RUFFQztJQ2lZVTtNRGhZVCwyRUFoQmM7SUpxb0ViO0VBQ0Y7RUlubkVBO0lDNlhVO01ENVhULHNEQUFBO0lKc25FQztFQUNGO0FBQ0Y7QUlwbkVFO0VDd1hVO0lEdlhULGVBQUE7RUp1bkVEO0FBQ0Y7QUt4dkRZO0VBVEE7SUFVSSxhQUFBO0VMMnZEZDtBQUNGO0FLdnZERTtFQUNVLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBTHl2RFo7QUlwcEVFO0VDdVpBO0lEdFpDLG1CQUFBO0VKdXBFRDtBQUNGO0FJcHBFQztFQUVDO0lDZ1pBO01EL1lDLDRFQWhCYztJSnNxRWI7RUFDRjtFSXBwRUE7SUM0WUE7TUQzWUMsNERBQUE7SUp1cEVDO0VBQ0Y7QUFDRjtBSXJwRUU7RUN1WUE7SUR0WUMsdUJBQUE7RUp3cEVEO0FBQ0Y7QUkxcUVFO0VDdVpBO0lEdFpDLHFCQUFBO0VKNnFFRDtBQUNGO0FJMXFFQztFQUVDO0lDZ1pBO01EL1lDLDhFQWhCYztJSjRyRWI7RUFDRjtFSTFxRUE7SUM0WUE7TUQzWUMsc0RBQUE7SUo2cUVDO0VBQ0Y7QUFDRjtBSTNxRUU7RUN1WUE7SUR0WUMscUJBQUE7RUo4cUVEO0FBQ0Y7QUs5eERZO0VBWFY7SUFZYyxZQUFBO0VMaXlEZDtBQUNGO0FLOXhERTtFQUNVLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUxneURaO0FJMXNFRTtFQ3VhQTtJRHRhQyxvQkFBQTtFSjZzRUQ7QUFDRjtBSTFzRUM7RUFFQztJQ2dhQTtNRC9aQyw0RUFoQmM7SUo0dEViO0VBQ0Y7RUkxc0VBO0lDNFpBO01EM1pDLHVEQUFBO0lKNnNFQztFQUNGO0FBQ0Y7QUkzc0VFO0VDdVpBO0lEdFpDLG9CQUFBO0VKOHNFRDtBQUNGO0FJaHVFRTtFQ3VhQTtJRHRhQyxxQkFBQTtFSm11RUQ7QUFDRjtBSWh1RUM7RUFFQztJQ2dhQTtNRC9aQyx1RkFoQmM7SUprdkViO0VBQ0Y7RUlodUVBO0lDNFpBO01EM1pDLHlFQUFBO0lKbXVFQztFQUNGO0FBQ0Y7QUlqdUVFO0VDdVpBO0lEdFpDLDZCQUFBO0VKb3VFRDtBQUNGO0FLejBEWTtFQU5WO0lBT2MsbUJBQUE7RUw0MERkO0FBQ0Y7QUt6MERFO0VBQ1Usa0JBQUE7QUwyMERaO0FLeDBEZ0I7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7QUwwMERwQjtBS3owRG9CO0VBQ0ksVUFBQTtFQUNBLDBCQUFBO0FMMjBEeEI7QUt4MERnQjtFQUNJLFVBQUE7QUwwMERwQjtBS3IwREU7RUFDVSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnREFBQTtFQWlCQSx3QkFBQTtBTHV6RFo7QUt2MERZO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0RBQUE7QUx5MERoQjtBS3gwRGdCO0VBWEo7SUFZUSxhQUFBO0VMMjBEbEI7QUFDRjtBS3IwREU7RUFDVSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUx1MERaOztBS2wwREE7RUFDSSxhQUFBO0FMcTBESjtBS3AwREk7RUFGSjtJQUdRLHNCQUFBO0lBQ0EsdUJBQUE7RUx1MEROO0FBQ0Y7O0FJbHpFRTtFQzhlRjtJRDdlRyxpQkFBQTtFSnN6RUQ7QUFDRjtBSW56RUM7RUFFQztJQ3VlRjtNRHRlRyw2RUFoQmM7SUpxMEViO0VBQ0Y7RUluekVBO0lDbWVGO01EbGVHLHNEQUFBO0lKc3pFQztFQUNGO0FBQ0Y7QUlwekVFO0VDOGRGO0lEN2RHLGdCQUFBO0VKdXpFRDtBQUNGO0FJejBFRTtFQzhlRjtJRDdlRyxxQkFBQTtFSjQwRUQ7QUFDRjtBSXowRUM7RUFFQztJQ3VlRjtNRHRlRyw4RUFoQmM7SUoyMUViO0VBQ0Y7RUl6MEVBO0lDbWVGO01EbGVHLHNEQUFBO0lKNDBFQztFQUNGO0FBQ0Y7QUkxMEVFO0VDOGRGO0lEN2RHLHFCQUFBO0VKNjBFRDtBQUNGO0FLMzJERTtFQUNVLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBTDYyRFo7QUlyMkVFO0VDb2ZBO0lEbmZDLHdCQUFBO0VKdzJFRDtBQUNGO0FJcjJFQztFQUVDO0lDNmVBO01ENWVDLGtGQWhCYztJSnUzRWI7RUFDRjtFSXIyRUE7SUN5ZUE7TUR4ZUMsNERBQUE7SUp3MkVDO0VBQ0Y7QUFDRjtBSXQyRUU7RUNvZUE7SURuZUMsd0JBQUE7RUp5MkVEO0FBQ0Y7O0FJMzNFRTtFQ2tnQkY7SURqZ0JHLGtCQUFBO0VKKzNFRDtBQUNGO0FJNTNFQztFQUVDO0lDMmZGO01EMWZHLHVFQWhCYztJSjg0RWI7RUFDRjtFSTUzRUE7SUN1ZkY7TUR0Zkcsa0RBQUE7SUorM0VDO0VBQ0Y7QUFDRjtBSTczRUU7RUNrZkY7SURqZkcsaUJBQUE7RUpnNEVEO0FBQ0Y7QUlsNUVFO0VDa2dCRjtJRGpnQkcsdUJBQUE7RUpxNUVEO0FBQ0Y7QUlsNUVDO0VBRUM7SUMyZkY7TUQxZkcsZ0ZBaEJjO0lKbzZFYjtFQUNGO0VJbDVFQTtJQ3VmRjtNRHRmRyw2REFBQTtJSnE1RUM7RUFDRjtBQUNGO0FJbjVFRTtFQ2tmRjtJRGpmRyx3QkFBQTtFSnM1RUQ7QUFDRjtBS2g2REk7RUFDSSxhQUFBO0FMazZEUjtBS2o2RFE7RUFGSjtJQUdRLHNCQUFBO0VMbzZEVjtBQUNGOztBS2g2REk7RUFESjtJQUVRLGNBQUE7RUxvNkROO0FBQ0Y7QUtuNkRJO0VBQ0ksdUJBQUE7RUFDQSw0QkFBQTtBTHE2RFI7QUtwNkRRO0VBQ0ksb0JBQUE7QUxzNkRaO0FLbDZESTtFQUNJLG1CQUFBO0FMbzZEUjtBSWg4RUU7RUMyaEJFO0lEMWhCRCxnQkFBQTtFSm04RUQ7QUFDRjtBSWg4RUM7RUFFQztJQ29oQkU7TURuaEJELDRFQWhCYztJSms5RWI7RUFDRjtFSWg4RUE7SUNnaEJFO01EL2dCRCx3REFBQTtJSm04RUM7RUFDRjtBQUNGO0FJajhFRTtFQzJnQkU7SUQxZ0JELGlCQUFBO0VKbzhFRDtBQUNGO0FJdDlFRTtFQzJoQkU7SUQxaEJELGlCQUFBO0VKeTlFRDtBQUNGO0FJdDlFQztFQUVDO0lDb2hCRTtNRG5oQkQsNEVBaEJjO0lKdytFYjtFQUNGO0VJdDlFQTtJQ2doQkU7TUQvZ0JELHVEQUFBO0lKeTlFQztFQUNGO0FBQ0Y7QUl2OUVFO0VDMmdCRTtJRDFnQkQsaUJBQUE7RUowOUVEO0FBQ0Y7QUk1K0VFO0VDaWlCRTtJRGhpQkQsaUJBQUE7RUorK0VEO0FBQ0Y7QUk1K0VDO0VBRUM7SUMwaEJFO01EemhCRCwyREFoQmM7SUo4L0ViO0VBQ0Y7RUk1K0VBO0lDc2hCRTtNRHJoQkQsc0RBQUE7SUorK0VDO0VBQ0Y7QUFDRjtBSTcrRUU7RUNpaEJFO0lEaGhCRCxlQUFBO0VKZy9FRDtBQUNGO0FJbGdGRTtFQ3FpQkU7SURwaUJELHNCQUFBO0VKcWdGRDtBQUNGO0FJbGdGQztFQUVDO0lDOGhCRTtNRDdoQkQsaUZBaEJjO0lKb2hGYjtFQUNGO0VJbGdGQTtJQzBoQkU7TUR6aEJELDBEQUFBO0lKcWdGQztFQUNGO0FBQ0Y7QUluZ0ZFO0VDcWhCRTtJRHBoQkQsc0JBQUE7RUpzZ0ZEO0FBQ0Y7QUl4aEZFO0VDcWlCRTtJRHBpQkQsc0JBQUE7RUoyaEZEO0FBQ0Y7QUl4aEZDO0VBRUM7SUM4aEJFO01EN2hCRCxnRkFoQmM7SUowaUZiO0VBQ0Y7RUl4aEZBO0lDMGhCRTtNRHpoQkQsNkRBQUE7SUoyaEZDO0VBQ0Y7QUFDRjtBSXpoRkU7RUNxaEJFO0lEcGhCRCx1QkFBQTtFSjRoRkQ7QUFDRjtBSTlpRkU7RUNxaUJFO0lEcGlCRCxnQkFBQTtFSmlqRkQ7QUFDRjtBSTlpRkM7RUFFQztJQzhoQkU7TUQ3aEJELDJFQWhCYztJSmdrRmI7RUFDRjtFSTlpRkE7SUMwaEJFO01EemhCRCxzREFBQTtJSmlqRkM7RUFDRjtBQUNGO0FJL2lGRTtFQ3FoQkU7SURwaEJELGdCQUFBO0VKa2pGRDtBQUNGO0FJcGtGRTtFQ3FpQkU7SURwaUJELGVBQUE7RUp1a0ZEO0FBQ0Y7QUlwa0ZDO0VBRUM7SUM4aEJFO01EN2hCRCxvRUFoQmM7SUpzbEZiO0VBQ0Y7RUlwa0ZBO0lDMGhCRTtNRHpoQkQsZ0RBQUE7SUp1a0ZDO0VBQ0Y7QUFDRjtBSXJrRkU7RUNxaEJFO0lEcGhCRCxZQUFBO0VKd2tGRDtBQUNGO0FJMWxGRTtFQzRpQkU7SUQzaUJELGdCQUFBO0VKNmxGRDtBQUNGO0FJMWxGQztFQUVDO0lDcWlCRTtNRHBpQkQsMkVBaEJjO0lKNG1GYjtFQUNGO0VJMWxGQTtJQ2lpQkU7TURoaUJELHNEQUFBO0lKNmxGQztFQUNGO0FBQ0Y7QUkzbEZFO0VDNGhCRTtJRDNoQkQsZ0JBQUE7RUo4bEZEO0FBQ0Y7QUlobkZFO0VDNGlCRTtJRDNpQkQsaUJBQUE7RUptbkZEO0FBQ0Y7QUlobkZDO0VBRUM7SUNxaUJFO01EcGlCRCw0RUFoQmM7SUprb0ZiO0VBQ0Y7RUlobkZBO0lDaWlCRTtNRGhpQkQsdURBQUE7SUptbkZDO0VBQ0Y7QUFDRjtBSWpuRkU7RUM0aEJFO0lEM2hCRCxpQkFBQTtFSm9uRkQ7QUFDRjs7QUl0b0ZFO0VDaWpCRjtJRGhqQkcsc0JBQUE7RUowb0ZEO0FBQ0Y7QUl2b0ZDO0VBRUM7SUMwaUJGO01EemlCRyw2RUFoQmM7SUp5cEZiO0VBQ0Y7RUl2b0ZBO0lDc2lCRjtNRHJpQkcseURBQUE7SUowb0ZDO0VBQ0Y7QUFDRjtBSXhvRkU7RUNpaUJGO0lEaGlCRyxtQkFBQTtFSjJvRkQ7QUFDRjtBSzFtRUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUw0bUVSO0FJbnFGRTtFQ21qQkU7SURsakJELHdCQUFBO0VKc3FGRDtBQUNGO0FJbnFGQztFQUVDO0lDNGlCRTtNRDNpQkQsZ0ZBaEJjO0lKcXJGYjtFQUNGO0VJbnFGQTtJQ3dpQkU7TUR2aUJELDREQUFBO0lKc3FGQztFQUNGO0FBQ0Y7QUlwcUZFO0VDbWlCRTtJRGxpQkQsc0JBQUE7RUp1cUZEO0FBQ0Y7QUs5bkVJO0VBSUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUw2bkVSO0FJOXJGRTtFQzJqQkU7SUQxakJELHNCQUFBO0VKaXNGRDtBQUNGO0FJOXJGQztFQUVDO0lDb2pCRTtNRG5qQkQsK0VBaEJjO0lKZ3RGYjtFQUNGO0VJOXJGQTtJQ2dqQkU7TUQvaUJELDBEQUFBO0lKaXNGQztFQUNGO0FBQ0Y7QUkvckZFO0VDMmlCRTtJRDFpQkQscUJBQUE7RUprc0ZEO0FBQ0Y7QUlwdEZFO0VDMmpCRTtJRDFqQkQsd0JBQUE7RUp1dEZEO0FBQ0Y7QUlwdEZDO0VBRUM7SUNvakJFO01EbmpCRCxrRkFoQmM7SUpzdUZiO0VBQ0Y7RUlwdEZBO0lDZ2pCRTtNRC9pQkQsNkRBQUE7SUp1dEZDO0VBQ0Y7QUFDRjtBSXJ0RkU7RUMyaUJFO0lEMWlCRCx3QkFBQTtFSnd0RkQ7QUFDRjtBSTF1RkU7RUMyakJFO0lEMWpCRCxnQkFBQTtFSjZ1RkQ7QUFDRjtBSTF1RkM7RUFFQztJQ29qQkU7TURuakJELDBFQWhCYztJSjR2RmI7RUFDRjtFSTF1RkE7SUNnakJFO01EL2lCRCxtREFBQTtJSjZ1RkM7RUFDRjtBQUNGO0FJM3VGRTtFQzJpQkU7SUQxaUJELGNBQUE7RUo4dUZEO0FBQ0Y7QUs3ckVRO0VBUko7SUFTUSxpQkFBQTtJQUNBLGtCQUFBO0VMZ3NFVjtBQUNGO0FLOXJFUTtFQWJKO0lBZVEsY0FBQTtJQUNBLGVBQUE7RUxnc0VWO0FBQ0Y7QUk1d0ZFO0VDMmpCRTtJRDFqQkQsb0JBQUE7RUord0ZEO0FBQ0Y7QUk1d0ZDO0VBRUM7SUNvakJFO01EbmpCRCw0RUFoQmM7SUo4eEZiO0VBQ0Y7RUk1d0ZBO0lDZ2pCRTtNRC9pQkQseURBQUE7SUord0ZDO0VBQ0Y7QUFDRjtBSTd3RkU7RUMyaUJFO0lEMWlCRCxxQkFBQTtFSmd4RkQ7QUFDRjtBSWx5RkU7RUMra0JFO0lEOWtCRCxxQkFBQTtFSnF5RkQ7QUFDRjtBSWx5RkM7RUFFQztJQ3drQkU7TUR2a0JELDhFQWhCYztJSm96RmI7RUFDRjtFSWx5RkE7SUNva0JFO01EbmtCRCx5REFBQTtJSnF5RkM7RUFDRjtBQUNGO0FJbnlGRTtFQytqQkU7SUQ5akJELG9CQUFBO0VKc3lGRDtBQUNGO0FLdHVFUTtFQUhKO0lBSVEsaUJBQUE7RUx5dUVWO0FBQ0Y7QUk3ekZFO0VDK2tCRTtJRDlrQkQsbUJBQUE7RUpnMEZEO0FBQ0Y7QUk3ekZDO0VBRUM7SUN3a0JFO01EdmtCRCwyRUFoQmM7SUorMEZiO0VBQ0Y7RUk3ekZBO0lDb2tCRTtNRG5rQkQsd0RBQUE7SUpnMEZDO0VBQ0Y7QUFDRjtBSTl6RkU7RUMrakJFO0lEOWpCRCxvQkFBQTtFSmkwRkQ7QUFDRjs7QUluMUZFO0VDNmxCRjtJRDVsQkcseUJBQUE7RUp1MUZEO0FBQ0Y7QUlwMUZDO0VBRUM7SUNzbEJGO01EcmxCRyxvRkFoQmM7SUpzMkZiO0VBQ0Y7RUlwMUZBO0lDa2xCRjtNRGpsQkcsK0RBQUE7SUp1MUZDO0VBQ0Y7QUFDRjtBSXIxRkU7RUM2a0JGO0lENWtCRyx5QkFBQTtFSncxRkQ7QUFDRjtBS3h3RUk7RUFFSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUx5d0VSO0FJLzJGRTtFQ2ttQkU7SURqbUJELGtCQUFBO0VKazNGRDtBQUNGO0FJLzJGQztFQUVDO0lDMmxCRTtNRDFsQkQsNEVBaEJjO0lKaTRGYjtFQUNGO0VJLzJGQTtJQ3VsQkU7TUR0bEJELDBEQUFBO0lKazNGQztFQUNGO0FBQ0Y7QUloM0ZFO0VDa2xCRTtJRGpsQkQsb0JBQUE7RUptM0ZEO0FBQ0Y7QUlyNEZFO0VDa21CRTtJRGptQkQsdUJBQUE7RUp3NEZEO0FBQ0Y7QUlyNEZDO0VBRUM7SUMybEJFO01EMWxCRCw4RUFoQmM7SUp1NUZiO0VBQ0Y7RUlyNEZBO0lDdWxCRTtNRHRsQkQsMERBQUE7SUp3NEZDO0VBQ0Y7QUFDRjtBSXQ0RkU7RUNrbEJFO0lEamxCRCxxQkFBQTtFSnk0RkQ7QUFDRjtBS2p6RUk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FMbXpFUjtBSWg2RkU7RUMwbUJFO0lEem1CRCxjQUFBO0VKbTZGRDtBQUNGO0FJaDZGQztFQUVDO0lDbW1CRTtNRGxtQkQscUVBaEJjO0lKazdGYjtFQUNGO0VJaDZGQTtJQytsQkU7TUQ5bEJELGlEQUFBO0lKbTZGQztFQUNGO0FBQ0Y7QUlqNkZFO0VDMGxCRTtJRHpsQkQsV0FBQTtFSm82RkQ7QUFDRjtBS3QwRVE7RUFOSjtJQU9RLDJCQUFBO0VMeTBFVjtBQUNGO0FLdDBFSTtFQUdJLGtCQUFBO0FMczBFUjtBSTk3RkU7RUNxbkJFO0lEcG5CRCxlQUFBO0VKaThGRDtBQUNGO0FJOTdGQztFQUVDO0lDOG1CRTtNRDdtQkQsMkVBaEJjO0lKZzlGYjtFQUNGO0VJOTdGQTtJQzBtQkU7TUR6bUJELHFEQUFBO0lKaThGQztFQUNGO0FBQ0Y7QUkvN0ZFO0VDcW1CRTtJRHBtQkQsZ0JBQUE7RUprOEZEO0FBQ0Y7QUlwOUZFO0VDcW5CRTtJRHBuQkQscUJBQUE7RUp1OUZEO0FBQ0Y7QUlwOUZDO0VBRUM7SUM4bUJFO01EN21CRCw4RUFoQmM7SUpzK0ZiO0VBQ0Y7RUlwOUZBO0lDMG1CRTtNRHptQkQsMkRBQUE7SUp1OUZDO0VBQ0Y7QUFDRjtBSXI5RkU7RUNxbUJFO0lEcG1CRCxzQkFBQTtFSnc5RkQ7QUFDRjtBS2gzRVE7RUFMSjtJQU1RLFdBQUE7RUxtM0VWO0FBQ0Y7QUtoM0VJO0VBRUksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBTGkzRVI7QUlwL0ZFO0VDK25CRTtJRDluQkQsZUFBQTtFSnUvRkQ7QUFDRjtBSXAvRkM7RUFFQztJQ3duQkU7TUR2bkJELHlFQWhCYztJSnNnR2I7RUFDRjtFSXAvRkE7SUNvbkJFO01Ebm5CRCxzREFBQTtJSnUvRkM7RUFDRjtBQUNGO0FJci9GRTtFQyttQkU7SUQ5bUJELGdCQUFBO0VKdy9GRDtBQUNGO0FLcDRFSTtFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBTHE0RVI7QUkvZ0dFO0VDc29CRTtJRHJvQkQsaUJBQUE7RUpraEdEO0FBQ0Y7QUkvZ0dDO0VBRUM7SUMrbkJFO01EOW5CRCx5RUFoQmM7SUppaUdiO0VBQ0Y7RUkvZ0dBO0lDMm5CRTtNRDFuQkQsc0RBQUE7SUpraEdDO0VBQ0Y7QUFDRjtBSWhoR0U7RUNzbkJFO0lEcm5CRCxrQkFBQTtFSm1oR0Q7QUFDRjtBS3g1RUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FMMDVFUjtBS3Y1RUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBTHk1RVI7QUt2NUVZO0VBQ0ksMkJBQUE7QUx5NUVoQjtBS3A1RUk7RUFDSSxvQkFBQTtFQUNBLCtCQUFBO0FMczVFUjs7QUtoNUVBO0VBR0ksZ0NBQUE7RUFDQSxnQkFBQTtBTGk1RUo7QUk5akdFO0VDeXFCRjtJRHhxQkcsaUJBQUE7RUppa0dEO0FBQ0Y7QUk5akdDO0VBRUM7SUNrcUJGO01EanFCRywwRUFoQmM7SUpnbEdiO0VBQ0Y7RUk5akdBO0lDOHBCRjtNRDdwQkcsMERBQUE7SUppa0dDO0VBQ0Y7QUFDRjtBSS9qR0U7RUN5cEJGO0lEeHBCRyxxQkFBQTtFSmtrR0Q7QUFDRjtBSXBsR0U7RUN5cUJGO0lEeHFCRyx3QkFBQTtFSnVsR0Q7QUFDRjtBSXBsR0M7RUFFQztJQ2txQkY7TURqcUJHLGtGQWhCYztJSnNtR2I7RUFDRjtFSXBsR0E7SUM4cEJGO01EN3BCRyw2REFBQTtJSnVsR0M7RUFDRjtBQUNGO0FJcmxHRTtFQ3lwQkY7SUR4cEJHLHdCQUFBO0VKd2xHRDtBQUNGO0FLNTdFSTtFQUNJLGtCQUFBO0FMODdFUjtBSzc3RVE7RUFDSSxXQUFBO0VBR0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUw2N0VaO0FJcm5HRTtFQ2dyQk07SUQvcUJMLGlCQUFBO0VKd25HRDtBQUNGO0FJcm5HQztFQUVDO0lDeXFCTTtNRHhxQkwsMEVBaEJjO0lKdW9HYjtFQUNGO0VJcm5HQTtJQ3FxQk07TURwcUJMLHFEQUFBO0lKd25HQztFQUNGO0FBQ0Y7QUl0bkdFO0VDZ3FCTTtJRC9wQkwsY0FBQTtFSnluR0Q7QUFDRjtBSTNvR0U7RUNnckJNO0lEL3FCTCxrQkFBQTtFSjhvR0Q7QUFDRjtBSTNvR0M7RUFFQztJQ3lxQk07TUR4cUJMLDJFQWhCYztJSjZwR2I7RUFDRjtFSTNvR0E7SUNxcUJNO01EcHFCTCxzREFBQTtJSjhvR0M7RUFDRjtBQUNGO0FJNW9HRTtFQ2dxQk07SUQvcEJMLGVBQUE7RUorb0dEO0FBQ0Y7QUt4K0VZO0VBVEo7SUFVUSxhQUFBO0VMMitFZDtBQUNGO0FLditFSTtFQUNJLFVBQUE7QUx5K0VSO0FLdCtFSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FMdytFUjtBSTlxR0U7RUN5c0JFO0lEeHNCRCxlQUFBO0VKaXJHRDtBQUNGO0FJOXFHQztFQUVDO0lDa3NCRTtNRGpzQkQseUVBaEJjO0lKZ3NHYjtFQUNGO0VJOXFHQTtJQzhyQkU7TUQ3ckJELHNEQUFBO0lKaXJHQztFQUNGO0FBQ0Y7QUkvcUdFO0VDeXJCRTtJRHhyQkQsZ0JBQUE7RUprckdEO0FBQ0Y7QUlwc0dFO0VDeXNCRTtJRHhzQkQsc0JBQUE7RUp1c0dEO0FBQ0Y7QUlwc0dDO0VBRUM7SUNrc0JFO01EanNCRCwrRUFoQmM7SUpzdEdiO0VBQ0Y7RUlwc0dBO0lDOHJCRTtNRDdyQkQseURBQUE7SUp1c0dDO0VBQ0Y7QUFDRjtBSXJzR0U7RUN5ckJFO0lEeHJCRCxzQkFBQTtFSndzR0Q7QUFDRjtBSzVnRkk7RUFDSSxXQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FMNmdGUjtBSWh1R0U7RUM4c0JFO0lEN3NCRCxpQkFBQTtFSm11R0Q7QUFDRjtBSWh1R0M7RUFFQztJQ3VzQkU7TUR0c0JELDJFQWhCYztJSmt2R2I7RUFDRjtFSWh1R0E7SUNtc0JFO01EbHNCRCwwREFBQTtJSm11R0M7RUFDRjtBQUNGO0FJanVHRTtFQzhyQkU7SUQ3ckJELG9CQUFBO0VKb3VHRDtBQUNGO0FJdHZHRTtFQzhzQkU7SUQ3c0JELGlCQUFBO0VKeXZHRDtBQUNGO0FJdHZHQztFQUVDO0lDdXNCRTtNRHRzQkQsNEVBaEJjO0lKd3dHYjtFQUNGO0VJdHZHQTtJQ21zQkU7TURsc0JELHNEQUFBO0lKeXZHQztFQUNGO0FBQ0Y7QUl2dkdFO0VDOHJCRTtJRDdyQkQsZUFBQTtFSjB2R0Q7QUFDRjtBSTV3R0U7RUM4c0JFO0lEN3NCRCx3QkFBQTtFSit3R0Q7QUFDRjtBSTV3R0M7RUFFQztJQ3VzQkU7TUR0c0JELGtGQWhCYztJSjh4R2I7RUFDRjtFSTV3R0E7SUNtc0JFO01EbHNCRCw2REFBQTtJSit3R0M7RUFDRjtBQUNGO0FJN3dHRTtFQzhyQkU7SUQ3ckJELHdCQUFBO0VKZ3hHRDtBQUNGO0FLMWtGSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FMNGtGUjs7QUs3akZBO0VBQ0ksVUFBQTtBTGdrRko7O0FLNWpGQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBRUEsa0JBQUE7QUw4akZKO0FJanpHRTtFQyt1QkY7SUQ5dUJHLGVBQUE7RUpvekdEO0FBQ0Y7QUlqekdDO0VBRUM7SUN3dUJGO01EdnVCRywrRUFiZTtJSmcwR2Q7RUFDRjtFSWp6R0E7SUNvdUJGO01EbnVCRyxvRUFBQTtJSm96R0M7RUFDRjtBQUNGO0FJbHpHRTtFQyt0QkY7SUQ5dEJHLHVCQUFBO0VKcXpHRDtBQUNGO0FLbGxGSTtFQU5KO0lBT1EsYUFBQTtFTHFsRk47QUFDRjtBS3BsRkk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsV0FBQTtFQUVBLHNCQUFBO0FMb2xGUjtBSW4xR0U7RUN3dkJFO0lEdnZCRCxlQUFBO0VKczFHRDtBQUNGO0FJbjFHQztFQUVDO0lDaXZCRTtNRGh2QkQsNEVBYmU7SUprMkdkO0VBQ0Y7RUluMUdBO0lDNnVCRTtNRDV1QkQsd0RBQUE7SUpzMUdDO0VBQ0Y7QUFDRjtBSXAxR0U7RUN3dUJFO0lEdnVCRCxnQkFBQTtFSnUxR0Q7QUFDRjtBSXoyR0U7RUN3dkJFO0lEdnZCRCxjQUFBO0VKNDJHRDtBQUNGO0FJejJHQztFQUVDO0lDaXZCRTtNRGh2QkQsOENBaEJjO0lKMjNHYjtFQUNGO0VJejJHQTtJQzZ1QkU7TUQ1dUJELDhDQUFBO0lKNDJHQztFQUNGO0FBQ0Y7QUkxMkdFO0VDd3VCRTtJRHZ1QkQsV0FBQTtFSjYyR0Q7QUFDRjtBSzluRlE7RUFUSjtJQVVRLGFBQUE7RUxpb0ZWO0FBQ0Y7QUsvbkZJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLFdBQUE7RUFFQSxzQkFBQTtFQUNBLHdCQUFBO0FMK25GUjtBSTU0R0U7RUNxd0JFO0lEcHdCRCxhQUFBO0VKKzRHRDtBQUNGO0FJNTRHQztFQUVDO0lDOHZCRTtNRDd2QkQsdUVBYmU7SUoyNUdkO0VBQ0Y7RUk1NEdBO0lDMHZCRTtNRHp2QkQsbURBQUE7SUorNEdDO0VBQ0Y7QUFDRjtBSTc0R0U7RUNxdkJFO0lEcHZCRCxjQUFBO0VKZzVHRDtBQUNGO0FJbDZHRTtFQ3F3QkU7SURwd0JELGVBQUE7RUpxNkdEO0FBQ0Y7QUlsNkdDO0VBRUM7SUM4dkJFO01EN3ZCRCx5RUFoQmM7SUpvN0diO0VBQ0Y7RUlsNkdBO0lDMHZCRTtNRHp2QkQsc0RBQUE7SUpxNkdDO0VBQ0Y7QUFDRjtBSW42R0U7RUNxdkJFO0lEcHZCRCxnQkFBQTtFSnM2R0Q7QUFDRjtBS3pxRlE7RUFWSjtJQVdRLGFBQUE7RUw0cUZWO0FBQ0Y7QUk3N0dFO0VDMHhCRjtJRHp4Qkcsc0JBQUE7RUpnOEdEO0FBQ0Y7QUk3N0dDO0VBRUM7SUNteEJGO01EbHhCRyxnRkFoQmM7SUorOEdiO0VBQ0Y7RUk3N0dBO0lDK3dCRjtNRDl3QkcsdURBQUE7SUpnOEdDO0VBQ0Y7QUFDRjtBSTk3R0U7RUMwd0JGO0lEendCRyxzQkFBQTtFSmk4R0Q7QUFDRjtBSW45R0U7RUMweEJGO0lEenhCRyx5QkFBQTtFSnM5R0Q7QUFDRjtBSW45R0M7RUFFQztJQ214QkY7TURseEJHLG1GQWhCYztJSnErR2I7RUFDRjtFSW45R0E7SUMrd0JGO01EOXdCRywwREFBQTtJSnM5R0M7RUFDRjtBQUNGO0FJcDlHRTtFQzB3QkY7SUR6d0JHLHlCQUFBO0VKdTlHRDtBQUNGO0FLNXNGSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBTDhzRlI7QUk3K0dFO0VDa3lCRTtJRGp5QkQsdUJBQUE7RUpnL0dEO0FBQ0Y7QUk3K0dDO0VBRUM7SUMyeEJFO01EMXhCRCx5RkFoQmM7SUorL0diO0VBQ0Y7RUk3K0dBO0lDdXhCRTtNRHR4QkQsMEVBQUE7SUpnL0dDO0VBQ0Y7QUFDRjtBSTkrR0U7RUNreEJFO0lEanhCRCw2QkFBQTtFSmkvR0Q7QUFDRjtBSzd0Rkk7RUFDSSxnQkFBQTtBTCt0RlI7QUl0Z0hFO0VDc3lCRTtJRHJ5QkQsd0JBQUE7RUp5Z0hEO0FBQ0Y7QUl0Z0hDO0VBRUM7SUMreEJFO01EOXhCRCxrRkFoQmM7SUp3aEhiO0VBQ0Y7RUl0Z0hBO0lDMnhCRTtNRDF4QkQsNERBQUE7SUp5Z0hDO0VBQ0Y7QUFDRjtBSXZnSEU7RUNzeEJFO0lEcnhCRCx3QkFBQTtFSjBnSEQ7QUFDRjtBS2p2Rkk7RUFFSSxnQkFBQTtFQUNBLGdCQUFBO0FMa3ZGUjtBSWhpSEU7RUMyeUJFO0lEMXlCRCxtQkFBQTtFSm1pSEQ7QUFDRjtBSWhpSEM7RUFFQztJQ295QkU7TURueUJELDBFQWhCYztJSmtqSGI7RUFDRjtFSWhpSEE7SUNneUJFO01EL3hCRCxzREFBQTtJSm1pSEM7RUFDRjtBQUNGO0FJamlIRTtFQzJ4QkU7SUQxeEJELGlCQUFBO0VKb2lIRDtBQUNGO0FJdGpIRTtFQzJ5QkU7SUQxeUJELGVBQUE7RUp5akhEO0FBQ0Y7QUl0akhDO0VBRUM7SUNveUJFO01EbnlCRCw0REFoQmM7SUp3a0hiO0VBQ0Y7RUl0akhBO0lDZ3lCRTtNRC94QkQsc0RBQUE7SUp5akhDO0VBQ0Y7QUFDRjtBSXZqSEU7RUMyeEJFO0lEMXhCRCxnQkFBQTtFSjBqSEQ7QUFDRjtBSzF4Rkk7RUFFSSxhQUFBO0VBQ0EsZUFBQTtBTDJ4RlI7QUlobEhFO0VDa3pCRTtJRGp6QkQsY0FBQTtFSm1sSEQ7QUFDRjtBSWhsSEM7RUFFQztJQzJ5QkU7TUQxeUJELGlGQWhCYztJSmttSGI7RUFDRjtFSWhsSEE7SUN1eUJFO01EdHlCRCxtRUFBQTtJSm1sSEM7RUFDRjtBQUNGO0FJamxIRTtFQ2t5QkU7SURqeUJELHNCQUFBO0VKb2xIRDtBQUNGO0FJdG1IRTtFQ2t6QkU7SURqekJELGlCQUFBO0VKeW1IRDtBQUNGO0FJdG1IQztFQUVDO0lDMnlCRTtNRDF5QkQsMEVBaEJjO0lKd25IYjtFQUNGO0VJdG1IQTtJQ3V5QkU7TUR0eUJELHFEQUFBO0lKeW1IQztFQUNGO0FBQ0Y7QUl2bUhFO0VDa3lCRTtJRGp5QkQsaUJBQUE7RUowbUhEO0FBQ0Y7QU01c0hBO0VBQ0ksa0JBQUE7QU44c0hKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcInNhc3M6bWF0aFxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDQvNGW0LrRgdC40L3RltCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbkBpbXBvcnQgXFxcImJhc2UvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGI0YDQuNGE0YLRltCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vJmRpc3BsYXk9c3dhcCAtINC00L7QtNCw0YLQuCDQv9GA0Lgg0L/RltC00LrQu9GO0YfQtdC90L3RliDRh9C10YDQtdC3INC/0LvQsNCz0ZbQvVxcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LjRgtC4LCDRj9C60YnQviDRlCDQu9C+0LrQsNC70YzQvdGWINGE0LDQudC70Lgg0YjRgNC40YTRgtGW0LJcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRltC60L7QvdC60L7QstC40YUg0YjRgNC40YTRgtGW0LIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8g0J/RltC00LrQu9GO0YfQuNGC0LgsINGP0LrRidC+INGUINGE0LDQudC7INGW0LrQvtC90LrQvtCy0L7Qs9C+INGI0YDQuNGE0YLRg1xcclxcbi8vQGltcG9ydCBcXFwiZm9udHMvaWNvbnNcXFwiO1xcclxcblxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8g0J3QsNC70LDRiNGC0YPQstCw0L3QvdGPINGI0LDQsdC70L7QvdGDID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyDQl9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8INGI0YDQuNGE0YIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuJGZvbnRGYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxyXFxuJGZvbnRTaXplOiB0b1JlbSgxNSk7IC8vINC00LUgMTQocHgpIC0g0YDQvtC30LzRltGAINGI0YDQuNGE0YLRgyDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8INC3INC80LDQutC10YLRg1xcclxcblxcclxcbi8vINCe0YHQvdC+0LLQvdGWINC60L7Qu9GM0L7RgNC4XFxyXFxuJG1haW5Db2xvcjogIzBFMEUwRTsgLy8g0JrQvtC70ZbRgCDRiNGA0LjRhNGC0YMg0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFxcclxcblxcclxcbi8vINCf0LDQu9GW0YLRgNCwINC60L7Qu9GM0L7RgNGW0LJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2NvbG9ycy1wYWxldHRlXFxcIjtcXHJcXG5cXHJcXG4vLyDQndCw0LvQsNGI0YLRg9Cy0LDQvdC90Y8g0LDQtNCw0L/RgtC40LLQvdC+0Zcg0YHRltGC0LrQuCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vINCc0ZbQvdGW0LzQsNC70YzQvdCwINGI0LjRgNC40L3QsCDRgdGC0L7RgNGW0L3QutC4XFxyXFxuJG1pbldpZHRoOiAzMjA7XFxyXFxuLy8g0KjQuNGA0LjQvdCwINC/0L7Qu9C+0YLQvdCwICjQvNCw0LrQtdGC0YMpXFxyXFxuJG1heFdpZHRoOiAxMzY2O1xcclxcbi8vINCo0LjRgNC40L3QsCDQvtCx0LzQtdC20YPRjtGH0L7Qs9C+INC60L7QvdGC0LXQudC90LXRgNCwICgwID0g0L3QtdC80LDRlCDQvtCx0LzQtdC20LXQvdC90Y8pXFxyXFxuJG1heFdpZHRoQ29udGFpbmVyOiAxMTcwO1xcclxcbi8vINCX0LDQs9Cw0LvRjNC90LjQuSDQstGW0LTRgdGC0YPQvyDRgyDQutC+0L3RgtC10LnQvdC10YDQsFxcclxcbi8vICgzMCA9INC/0L4gMTVweCDQu9GW0LLQvtGA0YPRhyDRliDQv9GA0LDQstC+0YDRg9GHLCAwID0g0L3QtdC80LDRlCDQstGW0LTRgdGC0YPQv9GDKVxcclxcbiRjb250YWluZXJQYWRkaW5nOiAzMDtcXHJcXG5cXHJcXG4vLyDQqNC40YDQuNC90LAg0YHQv9GA0LDRhtGM0L7QstGD0LLQsNC90L3RjyDQv9C10YDRiNC+0LPQviDQsdGA0LXQudC60L/QvtGW0L3RgtGDXFxyXFxuJGNvbnRhaW5lcldpZHRoOiAkbWF4V2lkdGhDb250YWluZXIgKyAkY29udGFpbmVyUGFkZGluZztcXHJcXG5cXHJcXG4vLyDQkdGA0LXQudC6LdC/0L7Rl9C90YLQuFxcclxcbiRwYzogZW0oJGNvbnRhaW5lcldpZHRoKTsgLy8g0J/Qmiwg0L3QvtGD0YLQsdGD0LrQuCwg0LTQtdGP0LrRliDQv9C70LDQvdGI0LXRgtC4INGDINCz0L7RgNC40LfQvtC90YLQsNC70YzQvdC+0LzRgyDQv9C+0LvQvtC20LXQvdC90ZZcXHJcXG4kdGFibGV0OiBlbSg5OTEuOTgpOyAvLyDQn9C70LDQvdGI0LXRgtC4LCDQtNC10Y/QutGWINGC0LXQu9C10YTQvtC90Lgg0LIg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7QvNGDINC/0L7Qu9C+0LbQtdC90L3RllxcclxcbiRtb2JpbGU6IGVtKDc2Ny45OCk7IC8vINCi0LXQu9C10YTQvtC90LggTFxcclxcbiRtb2JpbGVTbWFsbDogZW0oNDc5Ljk4KTsgLy8g0KLQtdC70LXRhNC+0L3QuCBTXFxyXFxuXFxyXFxuLy8g0KLQuNC/INCw0LTQsNC/0YLQuNCy0LA6XFxyXFxuLy8gMSA9INGH0YPQudC90ZbRgdGC0YwgKNGDINC60L7QvdGC0LXQudC90LXRgNCwINC90LXQvNCw0ZQg0LHRgNC10LnQutC/0L7RltC90YLRltCyKSxcXHJcXG4vLyAyID0g0L/QviDQsdGA0LXQudC6LdC/0L7Rl9C90YIgKNC60L7QvdGC0LXQudC90LXRgCDQt9C80ZbQvdGO0ZQg0YHQstC+0Y4g0YjQuNGA0LjQvdGDINC/0L4g0LHRgNC10LnQui3Qv9C+0ZfQvdGCKVxcclxcbiRyZXNwb25zaXZlVHlwZTogMTtcXHJcXG5cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy8g0J7QsdC90YPQu9C10L3QvdGPID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5AaW1wb3J0IFxcXCJiYXNlL251bGxcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0YLQtdCz0LAgQk9EWSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbmJvZHkge1xcclxcblxcdC8vINCh0LrRgNC+0LvQuyDQt9Cw0LHQu9C+0LrQvtCy0LDQvdC+XFxyXFxuXFx0LmxvY2sgJiB7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRcXHR0b3VjaC1hY3Rpb246IG5vbmU7XFxyXFxuXFx0XFx0b3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0KHQsNC50YIg0LfQsNCy0LDQvdGC0LDQttC10L3QuNC5XFxyXFxuXFx0LmxvYWRlZCAmIHtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCe0LHQvtC70L7QvdC60LAgd3JhcHBlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi53cmFwcGVyIHtcXHJcXG5cXHRtaW4taGVpZ2h0OiAxMDAlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdEBzdXBwb3J0cyAob3ZlcmZsb3c6IGNsaXApIHtcXHJcXG5cXHRcXHRvdmVyZmxvdzogY2xpcDtcXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0J/RgNC40YLQuNGB0LrQsNGU0LzQviBmb290ZXJcXHJcXG5cXHQ+IG1haW4ge1xcclxcblxcdFxcdGZsZXg6IDEgMSBhdXRvO1xcclxcblxcdH1cXHJcXG5cXHQvLyDQpNGW0LrRgSDQtNC70Y8g0YHQu9Cw0LnQtNC10YDRltCyXFxyXFxuXFx0PiAqIHtcXHJcXG5cXHRcXHRtaW4td2lkdGg6IDA7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQntCx0LzQtdC20YPRjtGH0LjQuSDQutC+0L3RgtC10LnQvdC10YAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8qXFxyXFxuKGkpINCh0YLQuNC70ZYg0LHRg9C00YPRgtGMINC30LDRgdGC0L7RgdC+0LLRg9Cy0LDRgtC40YHRjCDQtNC+XFxyXFxu0LLRgdGW0YUg0LrQu9Cw0YHRltCyLCDRidC+INC80ZbRgdGC0Y/RgtGMICpfX2NvbnRhaW5lclxcclxcbtCd0LDQv9GA0LjQutC70LDQtCBoZWFkZXJfX2NvbnRhaW5lciwgbWFpbl9fY29udGFpbmVyINGWINGCLtC/LlxcclxcbtCh0L3RltC/0L/QtdGCIChIVE1MKTogY250XFxyXFxuKi9cXHJcXG5AaWYgKCRyZXNwb25zaXZlVHlwZT09MSkge1xcclxcblxcdC8vINCn0YPQudC90LBcXHJcXG5cXHRbY2xhc3MqPVxcXCJfX2NvbnRhaW5lclxcXCJdIHtcXHJcXG5cXHRcXHRAaWYgKCRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiB0b1JlbSgkY29udGFpbmVyV2lkdGgpO1xcclxcblxcdFxcdFxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRAaWYgKCRjb250YWluZXJQYWRkaW5nPjApIHtcXHJcXG5cXHRcXHRcXHRAaWYgKCRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMCB0b1JlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcblxcdFxcdFxcdH0gQGVsc2Uge1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSwgMTUpO1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctcmlnaHRcXFwiLCBtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMiksIDE1KTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59IEBlbHNlIHtcXHJcXG5cXHQvLyDQkdGA0LXQudC6LdC/0L7Rl9C90YLQsNC80LhcXHJcXG5cXHRbY2xhc3MqPVxcXCJfX2NvbnRhaW5lclxcXCJdIHtcXHJcXG5cXHRcXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRcXHRAaWYgKCRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiB0b1JlbSgkY29udGFpbmVyV2lkdGgpO1xcclxcblxcdFxcdH0gQGVsc2Uge1xcclxcblxcdFxcdFxcdEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCkge1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDAgdG9SZW0obWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkcGMpIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHRvUmVtKDk3MCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiB0b1JlbSg3NTApO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogbm9uZTtcXHJcXG5cXHRcXHRcXHRAaWYgKCRjb250YWluZXJQYWRkaW5nPjAgYW5kICRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMCB0b1JlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINCx0LDQt9C+0LLQuNGFINGB0YLQuNC70ZbQsiwg0YjQsNCx0LvQvtC90ZbQsiAo0LfQsNCz0L7RgtGW0LLQtdC70YwpINGC0LAg0LTQvtC/0L7QvNGW0LbQvdC40YUg0LrQu9Cw0YHRltCyXFxyXFxuLy8g0JTQu9GPINC/0ZbQtNC60LvRjtGH0LXQvdC90Y8v0LLQuNC80LrQvdC10L3QvdGPINC60L7QvdC60YDQtdGC0L3QuNGFINGB0YLQuNC70ZbQsiDQtNC40LLQuNGB0YwgYmFzZS5zY3NzXFxyXFxuQGltcG9ydCBcXFwiYmFzZVxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0LfQsNCz0LDQu9GM0L3QuNGFINC10LvQtdC80LXQvdGC0ZbQsiDQv9GA0L7QtdC60YLRg1xcclxcbkBpbXBvcnQgXFxcImNvbW1vblxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0L7QutGA0LXQvNC40YUg0LHQu9C+0LrRltCyXFxyXFxuQGltcG9ydCBcXFwiaGVhZGVyXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJmb290ZXJcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC+0LrRgNC10LzQuNGFINGB0YLQvtGA0ZbQvdC+0LpcXHJcXG5AaW1wb3J0IFxcXCJob21lXFxcIjtcXHJcXG5cXHJcXG4vLyDQl9C80ZbQvdC90ZZcXHJcXG5cXHJcXG5AaW1wb3J0IFxcXCJ1dGlscy92YXJzXFxcIjtcXHJcXG5cIixcIioge1xcclxcblxcdHBhZGRpbmc6IDBweDtcXHJcXG5cXHRtYXJnaW46IDBweDtcXHJcXG5cXHRib3JkZXI6IDBweDtcXHJcXG59XFxyXFxuKixcXHJcXG4qOmJlZm9yZSxcXHJcXG4qOmFmdGVyIHtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG46Zm9jdXMsXFxyXFxuOmFjdGl2ZSB7XFxyXFxuXFx0Ly8gb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuYTpmb2N1cyxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuXFx0Ly8gb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0bWluLXdpZHRoOiAkbWluV2lkdGggKyBweDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0Y29sb3I6ICRtYWluQ29sb3I7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xcclxcblxcdGZvbnQtc2l6ZTogJGZvbnRTaXplO1xcclxcblxcdC8vdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXHJcXG5cXHQtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcblxcdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxufVxcclxcbmlucHV0LFxcclxcbmJ1dHRvbixcXHJcXG50ZXh0YXJlYSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG5cXHRsaW5lLWhlaWdodDogaW5oZXJpdDtcXHJcXG59XFxyXFxuYnV0dG9uIHtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbmEge1xcclxcblxcdGNvbG9yOiBpbmhlcml0O1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxudWwgbGkge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmltZyB7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG59XFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG59XFxyXFxuXCIsXCIvLyDQl9Cw0LPQsNC70YzQvdC40Lkg0YTQsNC50Lsg0LXQu9C10LzQtdC90YLRltCyINGE0L7RgNC8XFxyXFxuLy8g0JTQu9GPINC/0ZbQtNC60LvRjtGH0LXQvdC90Y8v0LLRltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0LrQvtC90LrRgNC10YLQvdC+0LPQviDQtdC70LXQvNC10L3RgtCwINGE0L7RgNC80Lgg0LTQuNCy0LjRgdGMIGJhc2UvZm9ybXMvZm9ybXMuc2Nzc1xcclxcbkBpbXBvcnQgXFxcImJhc2UvZm9ybXMvZm9ybXNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0L/QvtC/0LDQv9GW0LJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3BvcHVwXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINGB0L/QvtC50LvQtdGA0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc3BvbGxlcnNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0YLQsNCx0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvdGFic1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQvNCw0L9cXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL21hcHNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LHQu9C+0LrRgyBcXFwi0L/QvtC60LDQt9Cw0YLQuCDRidC1XFxcIlxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc2hvd21vcmVcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC70LjQv9C60L7Qs9C+INCx0LvQvtC60YNcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3N0aWNreVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0L/QvtCy0L3QvtC10LrRgNCw0L3QvdC+0LPQviDQsdC70L7QutGDXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9mdWxsc2NyZWVuXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQv9C+0LXQutGA0LDQvdC+0Zcg0L/RgNC+0LrRgNGD0YLQutC4XFxyXFxuLy8gU3R5bGVzIGZvciBmdWxscGFnZSBzY3JvbGxcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2Z1bGxwYWdlXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyByaXBwbGUg0LXRhNC10LrRgtGDXFxyXFxuLy8gU3R5bGVzIGZvciByaXBwbGUgZWZmZWN0XFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9yaXBwbGVcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC60LDRgdGC0L7QvNC90L7Qs9C+INC60YPRgNGB0L7RgNGDXFxyXFxuLy8gU3R5bGVzIGZvciBjdXN0b20gY3Vyc29yXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9jdXJzb3JcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINGH0YPQudC90LjRhSDQutCw0YDRgtC40L3QvtC6IChJQkcpXFxyXFxuLy8g0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBpYmcgKGRpdiDQtyDQutCw0YDRgtC40L3QutC+0Y4g0YLQsCDQutC70LDRgdCw0LzQuClcXHJcXG4vLyDQodC90ZbQv9C/0LXRgiAoSFRNTCk6IGliZ2EgKGEg0Lcg0LrQsNGA0YLQuNC90LrQvtGOINGC0LAg0LrQu9Cw0YHQsNC80LgpXFxyXFxuW2NsYXNzKj1cXFwiLWliZ1xcXCJdIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0aW1nIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdG9iamVjdC1maXQ6IGNvdmVyO1xcclxcblxcdH1cXHJcXG59XFxyXFxuW2NsYXNzKj1cXFwiLWliZy0tY29udGFpblxcXCJdIHtcXHJcXG5cXHRpbWcge1xcclxcblxcdFxcdG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyDQqNCw0LHQu9C+0L3QuCAo0LfQsNCz0L7RgtGW0LLQu9GWKVxcclxcbi8vIEBleHRlbmQgJdGW0Lwn0Y8g0YjQsNCx0LvQvtC90YM7XFxyXFxuLy8g0KHQvdGW0L/Qv9C10YIgKFNDU1MpOiBleFxcclxcblxcclxcbi8vINCb0ZbRh9C40LvRjNC90LjQuiDQtNC70Y8g0YHQv9C40YHQutGDXFxyXFxuJWxpc3RDb3VudGVyIHtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuXFx0Y291bnRlci1yZXNldDogaXRlbTtcXHJcXG5cXHRsaSB7XFxyXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdCY6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRjb3VudGVyLWluY3JlbWVudDogaXRlbTtcXHJcXG5cXHRcXHRcXHRjb250ZW50OiBjb3VudGVyKGl0ZW0pO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQkNC00LDQv9GC0LjQstC90LUg0LLRltC00LXQvlxcclxcbiVyZXNwb25zaXZlVmlkZW8ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdGhlaWdodDogMDtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xcclxcblxcdHZpZGVvLFxcclxcblxcdGlmcmFtZSxcXHJcXG5cXHRvYmplY3QsXFxyXFxuXFx0ZW1iZWQge1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQktGW0LTQtdC+INGP0Log0YTQvtC9XFxyXFxuJXZpZGVvQmFja2dyb3VuZCB7XFxyXFxuXFx0dmlkZW8sXFxyXFxuXFx0aWZyYW1lLFxcclxcblxcdG9iamVjdCxcXHJcXG5cXHRlbWJlZCB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdFxcdHRvcDogNTAlO1xcclxcblxcdFxcdGxlZnQ6IDUwJTtcXHJcXG5cXHRcXHRtaW4td2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0bWluLWhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHR3aWR0aDogYXV0bztcXHJcXG5cXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0XFx0ei1pbmRleDogLTEwMDtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0KHRltGA0LjQuSDRhNGW0LvRjNGC0YBcXHJcXG4lZ3JheWZpbHRlciB7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG5cXHRmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcXHJcXG5cXHRAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXHJcXG5cXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQodC60LDRgdGD0LLQsNGC0Lgg0LLQuNC00ZbQu9C10L3QvdGPXFxyXFxuJW5vc2VsZWN0IHtcXHJcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuLy8g0JTQt9C10YDQutCw0LvRjNC90LUg0LLRltC00L7QsdGA0LDQttC10L3QvdGPXFxyXFxuJW1pcnJvciB7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxyXFxufVxcclxcbi8vINCf0LvQsNCy0L3QuNC5INGB0LrRgNC+0LvQu1xcclxcbiVzbW9vdGhzY3JvbGwge1xcclxcblxcdC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG59XFxyXFxuLy8g0KHRhdC+0LLQsNGC0Lgg0YHQutGA0L7Qu9C7XFxyXFxuJWhpZGVzY3JvbGwge1xcclxcblxcdCY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCIvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG5cXHRjb2xvcjogI2ZmZjtcXHJcXG5cXHQmX19tZW51IHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6NTgwcHgpe1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDUycHg7XFxyXFxuXFx0XFx0ICB9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2xvZ28ge1xcclxcblxcdFxcdG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyMCwgMTUpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLm1lbnUge1xcclxcblxcclxcblxcdCZfX2JvZHkge1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgMzUsIDI1KTtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDM1LCAyNSk7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHR6LWluZGV4OiAxMDtcXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDo1ODBweCl7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdCAgfVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19saXN0IHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLXJpZ2h0XFxcIiwgNjAsIDUwKTtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJnYXBcXFwiLCA0MCwgMzApO1xcclxcblxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOjU4MHB4KXtcXHJcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwO1xcclxcblxcdFxcdFxcdGZsZXg6IDI7XFxyXFxuXFx0XFx0ICB9XFxyXFxuXFx0ICB9XFxyXFxuXFxyXFxuXFx0Jl9fbGluayB7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAzNSwgMjUpO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMzUsIDI1KTtcXHJcXG5cXHRcXHRmb250LXNpemU6IDE2cHg7XFxyXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOjU4MHB4KXtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDI4cHg7XFxyXFxuXFx0XFx0ICB9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Jjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRjb250ZW50OiAnJztcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHR0b3A6IDQ1cHg7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiAxcHg7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcblxcdFxcdFxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0XFx0XFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcdFxcdFxcdHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0Jjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuXFx0XFx0XFx0XFx0b3BhY2l0eTogMTtcXHJcXG5cXHRcXHRcXHRcXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2xpbmsuY3VycmVudCB7XFxyXFxuXFx0XFx0Jjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuXFx0XFx0XFx0b3BhY2l0eTogMTtcXHJcXG5cXHRcXHRcXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcbi5zb2NpYWxzLWxpc3Qge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJnYXBcXFwiLCAxNSwgMTApO1xcclxcblxcclxcblxcdEBtZWRpYSAobWF4LXdpZHRoOjU4MHB4KXtcXHJcXG5cXHRcXHRnYXA6IDMwcHg7XFxyXFxuXFx0XFx0ZmxleDogMTtcXHJcXG4gIFxcdH1cXHJcXG5cXHJcXG5cXHQmX19pY29uIHtcXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDo1ODBweCl7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDI1cHg7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiAyNXB4O1xcclxcbiAgXFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy9CdXJnZXJcXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcXHJcXG5cXHQubWVudV9fYm9keSB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdFxcdHRvcDogNTJweDtcXHJcXG5cXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcblxcdFxcdG92ZXJmbG93OiBhdXRvO1xcclxcblxcdFxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1tZW51IHtcXHJcXG5cXHRAbWVkaWEgKG1pbi13aWR0aDo1ODBweCl7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTsgIFxcclxcblxcdH1cXHJcXG5cXHRAbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0d2lkdGg6IHRvUmVtKDMwKTtcXHJcXG5cXHRcXHRoZWlnaHQ6IHRvUmVtKDE4KTtcXHJcXG5cXHRcXHR6LWluZGV4OiA1O1xcclxcblxcdFxcdEBtZWRpYSAoYW55LWhvdmVyOiBub25lKSB7XFxyXFxuXFx0XFx0XFx0Y3Vyc29yOiBkZWZhdWx0O1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRzcGFuLFxcclxcblxcdFxcdCY6OmJlZm9yZSxcXHJcXG5cXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG5cXHRcXHRcXHRyaWdodDogMDtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiB0b1JlbSgyKTtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQmOjpiZWZvcmUge1xcclxcblxcdFxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdFxcdGJvdHRvbTogMDtcXHJcXG5cXHRcXHRcXHR3aWR0aDogNTAlO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRzcGFuIHtcXHJcXG5cXHRcXHRcXHR0b3A6IGNhbGMoNTAlIC0gdG9SZW0oMSkpO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQubWVudS1vcGVuICYge1xcclxcblxcdFxcdFxcdCsubWVudV9fYm9keSB7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRzcGFuIHtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0Jjo6YmVmb3JlLFxcclxcblxcdFxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0Jjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRcXHR0b3A6IGNhbGMoNTAlIC0gdG9SZW0oMSkpO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRcXHRib3R0b206IGNhbGMoNTAlIC0gdG9SZW0oMSkpO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcdFxcdFxcdFxcclxcblxcdFxcdH1cXHRcXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0XFxyXFxuXFxyXFxuXCIsXCIvL9Cf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YjRgNC40YTRgtGDXFxyXFxuQG1peGluIGZvbnQoJGZvbnRfbmFtZSwgJGZpbGVfbmFtZSwgJHdlaWdodCwgJHN0eWxlKSB7XFxyXFxuXFx0QGZvbnQtZmFjZSB7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6ICRmb250X25hbWU7XFxyXFxuXFx0XFx0Zm9udC1kaXNwbGF5OiBzd2FwO1xcclxcblxcdFxcdHNyYzpcXHJcXG5cXHRcXHRcXHR1cmwoXFxcIi4uL2ZvbnRzLyN7JGZpbGVfbmFtZX0ud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxyXFxuXFx0XFx0XFx0dXJsKFxcXCIuLi9mb250cy8jeyRmaWxlX25hbWV9LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogI3skd2VpZ2h0fTtcXHJcXG5cXHRcXHRmb250LXN0eWxlOiAjeyRzdHlsZX07XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vL1BlcmNlbnRcXHJcXG5AZnVuY3Rpb24gcGVyY2VudCgkcHgsICRmcm9tOiAxMDApIHtcXHJcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsICRmcm9tKSAqIDEwMCU7XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG4vL1JFTVxcclxcbkBmdW5jdGlvbiB0b1JlbSgkcHgsICRjdXJyZW50OiAxNikge1xcclxcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgJGN1cnJlbnQpICsgcmVtO1xcclxcblxcdEByZXR1cm4gJHJlc3VsdDtcXHJcXG59XFxyXFxuLy9FTVxcclxcbkBmdW5jdGlvbiBlbSgkcHgsICRjdXJyZW50OiAxNikge1xcclxcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgJGN1cnJlbnQpICsgZW07XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4vL0N1cnJlbmN5XFxyXFxuQG1peGluIGN1cnJlbmN5KCRzeW0pIHtcXHJcXG5cXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0Y29udGVudDogXFxcIiN7JHN5bX1cXFwiO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gR3JpZHNcXHJcXG5AbWl4aW4gZ3JpZENhcmRzKCR0eXBlOiBmaXQsICRtaW46IDI4MHB4LCAkbWF4OiAxZnIsICRnYXA6IDMwcHgpIHtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdhcDogJGdhcDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLSN7JHR5cGV9LCBtaW5tYXgoJG1pbiwgJG1heCkpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyDQkNC00LDQv9GC0LjQstC90LAg0LLQu9Cw0YHRgtC40LLRltGB0YLRjCAoY2xhbXApXFxyXFxuQG1peGluIGFkYXB0aXZlVmFsdWUoJHByb3BlcnR5LCAkc3RhcnRTaXplLCAkbWluU2l6ZSwgJGtlZXBTaXplOiAwLCAkd2lkdGhGcm9tOiAkY29udGFpbmVyV2lkdGgsICR3aWR0aFRvOiAkbWluV2lkdGgpIHtcXHJcXG5cXHRAaWYgKCRzdGFydFNpemU9PTApIHtcXHJcXG5cXHRcXHQkc3RhcnRTaXplOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFx0QGlmICgkbWluU2l6ZT09MCkge1xcclxcblxcdFxcdCRtaW5TaXplOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JTQu9GPIGNhbGMoKTtcXHJcXG5cXHQkYWRkU2l6ZTogbWF0aC5kaXYoJHN0YXJ0U2l6ZSAtICRtaW5TaXplLCAxNik7XFxyXFxuXFxyXFxuXFx0QGlmICgkd2lkdGhGcm9tID09ICRjb250YWluZXJXaWR0aCBhbmQgJG1heFdpZHRoQ29udGFpbmVyID09IDApIHtcXHJcXG5cXHRcXHQkd2lkdGhGcm9tOiAkbWF4V2lkdGg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCR0YDQtdC50Lot0L/QvtGX0L3RgtC4INCyIEVNXFxyXFxuXFx0JHdpZHRoRnJvbU1lZGlhOiBlbSgkd2lkdGhGcm9tKTtcXHJcXG5cXHQkd2lkdGhUb01lZGlhOiBlbSgkd2lkdGhUbyk7XFxyXFxuXFxyXFxuXFx0Ly8g0KTQvtGA0LzRg9C70LAg0L/Qu9Cw0LLQsNGO0YfQvtCz0L4g0LfQvdCw0YfQtdC90L3Rj1xcclxcblxcdC8vINCY0YHRgtC+0YfQvdC40Lo6IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vbGluZWFybHktc2NhbGUtZm9udC1zaXplLXdpdGgtY3NzLWNsYW1wLWJhc2VkLW9uLXRoZS12aWV3cG9ydC9cXHJcXG5cXHQkc2xvcGU6IG1hdGguZGl2KCgkc3RhcnRTaXplIC0gJG1pblNpemUpLCAoJHdpZHRoRnJvbSAtICR3aWR0aFRvKSk7XFxyXFxuXFx0JHlJbnRlcnNlY3Rpb246IC0kd2lkdGhUbyAqICRzbG9wZSArICRtaW5TaXplO1xcclxcblxcdEBpZiAoJHlJbnRlcnNlY3Rpb249PTApIHtcXHJcXG5cXHRcXHQkeUludGVyc2VjdGlvbjogMC4wMDAwMDE7XFxyXFxuXFx0fVxcclxcblxcdCRmbHlWYWx1ZTogI3t0b1JlbSgkeUludGVyc2VjdGlvbil9XFxcIiArIFxcXCIgI3skc2xvcGUgKiAxMDB9dnc7XFxyXFxuXFxyXFxuXFx0Ly8g0J7RgtGA0LjQvNCw0L3QvdGPINC30L3QsNGH0LXQvdC90Y8g0LLQu9Cw0YHRgtC40LLQvtGB0YLRllxcclxcblxcdCRwcm9wZXJ0eVZhbHVlOiAje1xcXCJjbGFtcChcXFwiIHRvUmVtKCRtaW5TaXplKSBcXFwiLFxcXCIgJGZseVZhbHVlIFxcXCIsXFxcIiB0b1JlbSgkc3RhcnRTaXplKSBcXFwiKVxcXCJ9O1xcclxcblxcdC8vINCv0LrRidC+INC90LXQs9Cw0YLQuNCy0L3RliDQt9C90LDRh9C10L3QvdGPXFxyXFxuXFx0QGlmICgkbWluU2l6ZSA+ICRzdGFydFNpemUpIHtcXHJcXG5cXHRcXHQkcHJvcGVydHlWYWx1ZTogI3tcXFwiY2xhbXAoXFxcIiB0b1JlbSgkc3RhcnRTaXplKSBcXFwiLFxcXCIgJGZseVZhbHVlIFxcXCIsXFxcIiB0b1JlbSgkbWluU2l6ZSkgXFxcIilcXFwifTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INC30L3QsNGH0LXQvdC90Y8g0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFxcclxcblxcdEBpZiAka2VlcFNpemUgIT0gMSBhbmQgJGtlZXBTaXplICE9IDMge1xcclxcblxcdFxcdEBtZWRpYSAobWluLXdpZHRoOiAkd2lkdGhGcm9tTWVkaWEpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IHRvUmVtKCRzdGFydFNpemUpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0JDQtNCw0L/RgtGD0ZTQvNC+INGA0L7Qt9C80ZbRgCDRgyDQv9GA0L7QvNGW0LbQutGDINC80ZbQtiDQt9Cw0LfQvdCw0YfQtdC90LjQvNC4INGI0LjRgNC40L3QsNC80Lgg0LIn0Y7Qv9C+0YDRgtGDXFxyXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6ICR3aWR0aFRvTWVkaWEpIGFuZCAobWF4LXdpZHRoOiAkd2lkdGhGcm9tTWVkaWEpIHtcXHJcXG5cXHRcXHQvLyDQr9C60YnQviDQv9GW0LTRgtGA0LjQvNGD0ZTRgtGM0YHRjyBjbGFtcCgpO1xcclxcblxcdFxcdEBzdXBwb3J0cyAoI3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWU7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdC8vINCv0LrRidC+INC90LUg0L/RltC00YLRgNC40LzRg9GU0YLRjNGB0Y8gY2xhbXAoKTtcXHJcXG5cXHRcXHRAc3VwcG9ydHMgbm90ICgjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiBjYWxjKCN7dG9SZW0oJG1pblNpemUpfSArICN7JGFkZFNpemV9ICogKDEwMHZ3IC0gI3t0b1JlbSgkd2lkdGhUbyl9KSAvICN7bWF0aC5kaXYoJHdpZHRoRnJvbSwgMTYpIC0gbWF0aC5kaXYoJHdpZHRoVG8sIDE2KX0pO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFx0QGlmICRrZWVwU2l6ZSAhPSAxIGFuZCAka2VlcFNpemUgIT0gMiB7XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICR3aWR0aFRvTWVkaWEpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IHRvUmVtKCRtaW5TaXplKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vIEhlcm8gc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5oZXJvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgNDgwLCAyNzApO1xcclxcbiAgICAmX19jb250YWluZXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItY291bnRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiYm90dG9tXFxcIiwgNzAsIDMwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibGVmdFxcXCIsIDIwMCwgMTUpO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDgwLCA1MCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICZfX2l0ZW0ge1xcclxcbiAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMjAsIDEwKTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICB0b3A6IDdweDtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsZWZ0XFxcIiwgMzAsIDE5KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmc3BhbiB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxNCwgMTIpOyAgXFxyXFxuICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYmxvY2stdGl0bGUge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwidG9wXFxcIiwgMTc1LCA1MCk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsZWZ0XFxcIiwgMjAwLCAzMCk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDUxNiwgMzAwKTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMCA0MHB4IDA7XFxyXFxuICAgICZfX3RpdGxlIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDcwLCAzNik7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgdGV4dC1zaGFkb3c6IDRweCA0cHggMnB4IHJnYmEoMCwwLDAsMC42KTtcXHJcXG4gICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXZpZXcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInRvcFxcXCIsIDM5MCwgMTYwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicmlnaHRcXFwiLCAxNzgsIDIwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA5MCwgNTUpO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJoZWlnaHRcXFwiLCA5MCwgNTUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTUsIDEyKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZSwgYm94LXNoYWRvdyAwLjRzIGVhc2U7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxNXB4IDhweCAjZmZmO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItc2xpZGUge1xcclxcbiAgICAmX19pbWcge1xcclxcbiAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDU4MCwgMjIwKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDIyNXB4O1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsZWZ0XFxcIiwgLTUwLCA0MDApO1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDo5NThweCl7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgIH1cXHJcXG59XFxyXFxuLnN3aXBlci1idXR0b24tbmV4dCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyMjVweDtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicmlnaHRcXFwiLCAtNTAsIDQwMCk7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjk1OHB4KXtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyBBYm91dC11cyBzZWN0aW9uXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmFib3V0LXVzIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAyNTYsIDQwKTtcXHJcXG5cXHJcXG4gICAgJl9fY29udGFpbmVyLS1iaWcge1xcclxcbiAgICAgICAgd2lkdGg6IDEzMDZweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5pbnRyby1ibG9jayB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNjE1LCAyOTApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgOTMsIDQwKTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgJl9fbGFiZWwge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDI1LCAxNSk7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RpdGxlIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDM0LCAyNCk7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uaW5mby1ibG9jayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMTYwLCA2MCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdhcFxcXCIsIDExMCwgNDApO1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDo1ODBweCl7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgNDAsIDIwKTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0tLXRvcC1saW5lIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMzkxLCAyMDApO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAzNCwgMjApO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGV4dC0tYmlnIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDIwLCAxOCk7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xcclxcblxcclxcbiAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA0MDAsIDIxMCk7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbClcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtLS1hY3Rpb24ge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA0NjMsIDI1MCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGV4dC0tc21hbGwge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTcsIDE1KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA1MCwgMjUpO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnRuIHNwYW4ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDUwO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgMzksIDE4KTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1OS45OHB4KSB7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDY5Ljk4cHgpIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAxOSwgMTApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE5LCAxMCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMTcwLCA4MCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInRvcFxcXCIsIDI1LCAxMik7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJyaWdodFxcXCIsIDM4LCAxOSk7XFxyXFxuICAgICAgICB3aWR0aDogNnB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA2cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1OS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyNSUpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS1yZXZlcnNlIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgI2ZmZjtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyBEaXJlY3Rpb25zIHNlY3Rpb25cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uZGlyZWN0aW9ucyB7XFxyXFxuICAgIG1heC13aWR0aDogMTMzNnB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMTQwLCA3MCk7XFxyXFxufVxcclxcblxcclxcbi53b3Jrcy1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICAmX19pdGVtIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMzA0LCAyMDApO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLCAwLCAwLCAwLjEzKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjY1KSAxMDAlKTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDQwMCwgMjgwKTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICAgICAgICAgICAud29ya3MtbGlzdF9faW5mbyB7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTZweCk7XFxyXFxuICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAud29ya3MtbGlzdF9fY2FyZCB7XFxyXFxuICAgICAgICAgICAgZmlsdGVyOiBibHVyKDdweCk7XFxyXFxuICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fY2FyZCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGZpbHRlcjogYmx1cigwKTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjVzIGVhc2U7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHQmX19pbmZvIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXJpZ2h0XFxcIiwgOTMsIDI1KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDUwLCAyNSk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTZweCk7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX190ZXh0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgbWFyZ2luOiAyNHB4IDAgMjRweCAwO1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ5OS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4OyBcXHJcXG4gICAgICAgIH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fbW9yZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OTkuOThweCkge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsgXFxyXFxuICAgICAgICB9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyBEaXJlY3Rpb25zIHNlY3Rpb25cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uZmVhdHVyZWQge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE1NywgNzUpO1xcclxcbiAgICAmX19saXN0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdhcFxcXCIsIDEwMCwgMzApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0ge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIsXFxyXFxuICAgICAgICAmOmZvY3VzIHtcXHJcXG4gICAgICAgICAgICAuZmVhdHVyZWRfX2J0biB7XFxyXFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICZfX2ltYWdlIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMzcwLCAxODUpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgNDI4LCAyMTQpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2xhYmVsIHsgICBcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS40OyBcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi10b3BcXFwiLCAzNCwgMTUpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDgsIDQpO1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5OS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3R5cGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pbWFnZS0tYmlnIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNjAwLCAyODApO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgNDI4LCAxOTQpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0tLXRvcCB7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDE2MHB4O1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtLS1ib3R0b20ge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogLTE2MHB4O1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fYnRuIHtcXHJcXG4gICAgICAgIGxlZnQ6IDEzMHB4O1xcclxcbiAgICAgICAgdG9wOiAyMDBweDtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZSwgdmlzaWJpbGl0eSAwLjVzIGVhc2UsIHRyYW5zZm9ybSAwLjRzIGVhc2UsIGJveC1zaGFkb3cgMC40cyBlYXNlO1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAxMDBweDtcXHJcXG4gICAgICAgICAgICB0b3A6IDEwMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGVTbWFsbCkge1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDY2cHg7XFxyXFxuICAgICAgICAgICAgdG9wOiA3N3B4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbi5pbnRyb2R1Y3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmaXJzdCBiYXNlbGluZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgNDgsIDI1KTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgMTAwLCAyMCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctcmlnaHRcXFwiLCAxMDAsIDUwKTtcXHJcXG4gICAgJl9fdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNzVweDtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDEwMCwgNTApO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDQyNSwgMjUwKTtcXHJcXG4gICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA3MCwgMzUpO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDY4MHB4O1xcclxcbiAgICAgICAgICAgIHRvcDogODBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgNDgsIDI1KTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImxlZnRcXFwiLCAxMDAsIDUwKTtcXHJcXG4gICAgICAgICAgICAgICAgdG9wOiAtNDBweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gUHJvY2VzcyBzZWN0aW9uXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLnByb2Nlc3Mge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgICAgICBoZWlnaHQ6IDY2NHB4O1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KXtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDc2NHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcdFxcdCZfX2NvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMzAwcHg7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMjtcXHJcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDE0OSwgNjUpO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMTYxLCA3MCk7XFxyXFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNjQxLCAyMDApO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDY0MSwgMjAwKTtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IC0yMCU7XFxyXFxuICAgICAgICAgICAgdG9wOiAtMzUlO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcclxcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCl7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX190aXRsZSB7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNGRkY7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgODAsIDMwKTsgXFxyXFxuXFxyXFxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KXtcXHJcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgMTAwLCAyMCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MTkuOThweCkge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX19saXN0IHtcXHJcXG4gICAgICAgICAgICBnYXA6IDI0cHg7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1sZWZ0XFxcIiwgNjAsIDIwKTtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tcmlnaHRcXFwiLCAxNDAsIDApO1xcclxcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCl7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX19pdGVtIHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgIC5wcm9jZXNzX190ZXh0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyOCUpXFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgLnByb2Nlc3NfX251bWJlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX190ZXh0IHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogIzZGNkY2RjtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNHMgZWFzZSwgdHJhbnNmb3JtIDAuNHMgZWFzZTtcXHJcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICAgIGxlZnQ6IC05MHB4O1xcclxcbiAgICAgICAgICAgICAgICB0b3A6IDE3cHg7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UsIG9wYWNpdHkgMC40cyBlYXNlO1xcclxcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpe1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCZfX251bWJlciB7XFxyXFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcm9jZXNzLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpe1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5ibG9jay1pbmZvIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAzOTUsIDI1MCk7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCl7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCAxMDAsIDIwKTtcXHJcXG4gICAgfVxcclxcblxcdFxcdCZfX3RleHQge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDUzLCAyNSk7IFxcclxcbiAgICAgICAgICAgIFxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy9DcmVhdGUgc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5jcmVhdGUge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDE2MCwgODApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE0MCwgNzApO1xcclxcbiAgICAmX19jb250YWluZXIge1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3dyYXBwZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDM3Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbi5pbWctYmxvY2sge1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAzNy45OHB4KSB7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgfVxcclxcbiAgICAmX19pdGVtIHtcXHJcXG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuNHMgZWFzZTtcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDApO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0tLWJpZyB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA0NzAsIDIzNSk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJoZWlnaHRcXFwiLCAyOTAsIDE0NSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fYm90dG9tIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNTc1LCAzMDApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0tLXNtYWxsIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDEzMCwgMzApO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLXJpZ2h0XFxcIiwgMzAsIDE1KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMjcwLCAxMzUpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgMTQwLCA4MCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faXRlbS0tbWlkZGxlIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMjcwLCAxMzUpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgMjUwLCAxMjUpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5jcmVhdGUtaW5mbyB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgOTMsIDQwKTtcXHJcXG4gICAgJl9fdGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxuICAgICAgICB3aWR0aDogMzU3cHg7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMzcsIDIwKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190ZXh0IHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDkwLCAyMCk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgNTMsIDI3KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNDM4LCAyODApO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7IFxcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMzcuOThweCkge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODMuOThweCkge1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDQwLCAyMCk7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2J0biB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tbGVmdFxcXCIsIDkwLCAyMCk7XFxyXFxuXFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAzNy45OHB4KSB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgzLjk4cHgpIHtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tbGVmdFxcXCIsIDQwLCAyMCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy9WYWx1ZXMgc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi52YWx1ZXMge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDIxNCwgMTA3KTtcXHJcXG4gICAgJl9fY29udGFpbmVyIHtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190aXRsZSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxMDAsIDU1KTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDg2LCA0MCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fbGlzdCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJnYXBcXFwiLCA3NSwgNDApO1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MS45OHB4KSB7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0ge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAzNDAsIDI1MCk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCAxMDAsIDUwKTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NTEuOThweCkge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2ltZyB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDcwLCAzNSk7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2xhYmVsIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDI0LCAyMCk7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDsgXFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RleHQgeyAgXFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fbW9yZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIC52YWx1ZXNfX2ljb24ge1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2ljb24ge1xcclxcbiAgICAgICAgZmlsbDogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vU3dpcGVyIHNlY3Rpb25cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uc3dpcGVyLXNlY3Rpb24ge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDEyOCwgNzApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE5NiwgNzApO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgJl9fY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDY0MSwgMjAwKTtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJoZWlnaHRcXFwiLCA2NDEsIDIwMCk7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDIzJTtcXHJcXG4gICAgICAgICAgICB0b3A6IDIzJTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXHJcXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpe1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgIH0gXFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fd3JhcHBlciB7XFxyXFxuICAgICAgICB6LWluZGV4OiAyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3NsaWRlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pbWctcXVvdGUge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAzOCwgMTkpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDkyLCAyMCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGV4dCB7XFxyXFxuICAgICAgICBjb2xvcjogI0ZGRjtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDI0LCAxNSk7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDY3MywgMzAwKTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAzMywgMTUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2F1dGhvciB7XFxyXFxuICAgICAgICBjb2xvcjogIzk2OTY5NjtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi52YWx1ZXMge1xcclxcblxcclxcbiAgICAmX19zbGlkZXIge1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2ltZy1xdW90ZSB7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLnN3aXBlciB7XFxyXFxufVxcclxcbi5zd2lwZXItd3JhcHBlciB7XFxyXFxufVxcclxcbi5zd2lwZXItc2xpZGUtYWN0aXZlIHtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuLnN3aXBlci1wYWdpbmF0aW9uIHtcXHJcXG59XFxyXFxuLnNlY29uZC1jb3VudGVyIHtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgbGVmdDogNDclO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJib3R0b21cXFwiLCAtMTIwLCAwKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsZWZ0XFxcIiwgLTU0OCwgLTEzNSk7XFxyXFxuICAgICAgICBib3R0b206IDQwNXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDE2OCwgODApO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInJpZ2h0XFxcIiwgLTU3NiwgLTEyMCk7XFxyXFxuICAgICAgICBib3R0b206IDEwMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDcwLCAzNSk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICZfX2l0ZW0ge1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vQ2xpZW50cyBzZWN0aW9uXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmNsaWVudHMge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDE1NSwgNzUpO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE1NSwgNzUpO1xcclxcbiAgICAmX19jb250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGl0bGUtYmxvY2sge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLXJpZ2h0XFxcIiwgMTk4LCAwKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX191cHBlcnRpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMjcsIDE1KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190aXRsZSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAzNCwgMjQpO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDI2OCwgMTI1KTsgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fbGlzdCB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDYwMCwgMCk7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicm93LWdhcFxcXCIsIDUwLCAzMCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faXRlbSB7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faWNvbiB7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCIsXCI6cm9vdCB7XFxyXFxuICAgIC0tZGFyay1jbDogIzBFMEUwRTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjMxYTAyODViNmZlMTU4OTM4OGViXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9