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
.featured__item:hover .featured__btn {
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
  transition: opacity 0.5s ease, visibility 0.5s ease;
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
  @supports (padding-left: clamp( 3.125rem , 1.9886363636rem  +  5.6818181818vw , 6.25rem )) {
    .introduction {
      padding-left: clamp( 3.125rem , 1.9886363636rem  +  5.6818181818vw , 6.25rem );
    }
  }
  @supports not (padding-left: clamp( 3.125rem , 1.9886363636rem  +  5.6818181818vw , 6.25rem )) {
    .introduction {
      padding-left: calc(3.125rem + 3.125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .introduction {
    padding-left: 3.125rem;
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

:root {
  --dark-cl: #0E0E0E;
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base.scss","webpack://./src/scss/header.scss","webpack://./src/scss/base/mixins.scss","webpack://./src/scss/home.scss","webpack://./src/scss/utils/vars.scss"],"names":[],"mappings":"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AAA;EJ6aD;AACF;AI1aC;EAEC;IC3EF;MD4EG,yEAhBc;IJ4bb;EACF;EI1aA;IC/EF;MDgFG,sDAAA;IJ6aC;EACF;AACF;AI3aE;ECpFF;IDqFG,eAAA;EJ8aD;AACF;AIhcE;ECpEF;IDqEG,WAAA;EJmcD;AACF;AIhcC;EAEC;IC3EF;MD4EG,oEAhBc;IJkdb;EACF;EIhcA;IC/EF;MDgFG,oDAAA;IJmcC;EACF;AACF;AIjcE;ECpFF;IDqFG,eAAA;EJocD;AACF;AKjhBQ;EACI,WAAA;EACA,WAAA;EAEA,sBAAA;EACA,kBAAA;EACA,QAAA;ALkhBZ;AI7dE;EC3DM;ID4DL,cAAA;EJgeD;AACF;AI7dC;EAEC;IClEM;MDmEL,uEAhBc;IJ+eb;EACF;EI7dA;ICtEM;MDuEL,oDAAA;IJgeC;EACF;AACF;AI9dE;EC3EM;ID4EL,eAAA;EJieD;AACF;AInfE;EC3DM;ID4DL,cAAA;EJsfD;AACF;AInfC;EAEC;IClEM;MDmEL,0DAhBc;IJqgBb;EACF;EInfA;ICtEM;MDuEL,qDAAA;IJsfC;EACF;AACF;AIpfE;EC3EM;ID4EL,eAAA;EJufD;AACF;AIzgBE;ECjDE;IDkDD,mBAAA;EJ4gBD;AACF;AIzgBC;EAEC;ICxDE;MDyDD,2EAhBc;IJ2hBb;EACF;EIzgBA;IC5DE;MD6DD,uDAAA;IJ4gBC;EACF;AACF;AI1gBE;ECjEE;IDkED,kBAAA;EJ6gBD;AACF;;AK1kBA;EACQ,kBAAA;EAIA,sBAAA;AL0kBR;AIpiBE;EC3CF;ID4CG,eAAA;EJuiBD;AACF;AIpiBC;EAEC;IClDF;MDmDG,yEAhBc;IJsjBb;EACF;EIpiBA;ICtDF;MDuDG,mDAAA;IJuiBC;EACF;AACF;AIriBE;EC3DF;ID4DG,aAAA;EJwiBD;AACF;AI1jBE;EC3CF;ID4CG,aAAA;EJ6jBD;AACF;AI1jBC;EAEC;IClDF;MDmDG,wEAhBc;IJ4kBb;EACF;EI1jBA;ICtDF;MDuDG,oDAAA;IJ6jBC;EACF;AACF;AI3jBE;EC3DF;ID4DG,cAAA;EJ8jBD;AACF;AIhlBE;EC3CF;ID4CG,eAAA;EJmlBD;AACF;AIhlBC;EAEC;IClDF;MDmDG,0EAhBc;IJkmBb;EACF;EIhlBA;ICtDF;MDuDG,mDAAA;IJmlBC;EACF;AACF;AIjlBE;EC3DF;ID4DG,eAAA;EJolBD;AACF;AK3oBI;EAEI,gBAAA;EACA,gBAAA;EACA,WAAA;EACA,2CAAA;AL4oBR;AI5mBE;ECrCE;IDsCD,mBAAA;EJ+mBD;AACF;AI5mBC;EAEC;IC5CE;MD6CD,2EAhBc;IJ8nBb;EACF;EI5mBA;IChDE;MDiDD,uDAAA;IJ+mBC;EACF;AACF;AI7mBE;ECrDE;IDsDD,kBAAA;EJgnBD;AACF;AKjqBQ;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,sBAAA;ALmqBZ;AKhqBI;EACI,WAAA;EACA,WAAA;EACA,WAAA;ALkqBR;;AK9pBA;EACI,kBAAA;EAKA,sBAAA;EACA,qBAAA;EACA,kBAAA;EAEA,gBAAA;EACA,qDAAA;AL4pBJ;AIzpBE;ECdF;IDeG,cAAA;EJ4pBD;AACF;AIzpBC;EAEC;ICrBF;MDsBG,qEAhBc;IJ2qBb;EACF;EIzpBA;ICzBF;MD0BG,gDAAA;IJ4pBC;EACF;AACF;AI1pBE;EC9BF;ID+BG,UAAA;EJ6pBD;AACF;AI/qBE;ECdF;IDeG,gBAAA;EJkrBD;AACF;AI/qBC;EAEC;ICrBF;MDsBG,0EAhBc;IJisBb;EACF;EI/qBA;ICzBF;MD0BG,mDAAA;IJkrBC;EACF;AACF;AIhrBE;EC9BF;ID+BG,cAAA;EJmrBD;AACF;AIrsBE;ECdF;IDeG,eAAA;EJwsBD;AACF;AIrsBC;EAEC;ICrBF;MDsBG,yEAhBc;IJutBb;EACF;EIrsBA;ICzBF;MD0BG,sDAAA;IJwsBC;EACF;AACF;AItsBE;EC9BF;ID+BG,gBAAA;EJysBD;AACF;AI3tBE;ECdF;IDeG,gBAAA;EJ8tBD;AACF;AI3tBC;EAEC;ICrBF;MDsBG,0EAhBc;IJ6uBb;EACF;EI3tBA;ICzBF;MD0BG,uDAAA;IJ8tBC;EACF;AACF;AI5tBE;EC9BF;ID+BG,iBAAA;EJ+tBD;AACF;AIjvBE;ECdF;IDeG,oBAAA;EJovBD;AACF;AIjvBC;EAEC;ICrBF;MDsBG,4EAhBc;IJmwBb;EACF;EIjvBA;ICzBF;MD0BG,wDAAA;IJovBC;EACF;AACF;AIlvBE;EC9BF;ID+BG,kBAAA;EJqvBD;AACF;AKxwBI;EACI,qBAAA;EACA,iCAAA;AL0wBR;;AI3wBE;ECME;IDLD,gBAAA;EJ+wBD;AACF;AI5wBC;EAEC;ICDE;MDED,0EAhBc;IJ8xBb;EACF;EI5wBA;ICLE;MDMD,oDAAA;IJ+wBC;EACF;AACF;AI7wBE;ECVE;IDWD,gBAAA;EJgxBD;AACF;;AKvxBA;EACI,kBAAA;EACA,UAAA;AL0xBJ;AIvyBE;ECWF;IDVG,eAAA;EJ0yBD;AACF;AIvyBC;EAEC;ICIF;MDHG,wEAbe;IJszBd;EACF;EIvyBA;ICAF;MDCG,kDAAA;IJ0yBC;EACF;AACF;AIxyBE;ECLF;IDMG,WAAA;EJ2yBD;AACF;AK9yBI;EAJJ;IAKQ,aAAA;ELizBN;AACF;;AK/yBA;EACI,kBAAA;EACA,UAAA;ALkzBJ;AIv0BE;ECmBF;IDlBG,gBAAA;EJ00BD;AACF;AIv0BC;EAEC;ICYF;MDXG,yEAbe;IJs1Bd;EACF;EIv0BA;ICQF;MDPG,mDAAA;IJ00BC;EACF;AACF;AIx0BE;ECGF;IDFG,YAAA;EJ20BD;AACF;AKt0BI;EAJJ;IAKQ,aAAA;ELy0BN;AACF;;AIl2BE;EC+BF;ID9BG,kBAAA;EJs2BD;AACF;AIn2BC;EAEC;ICwBF;MDvBG,2EAhBc;IJq3Bb;EACF;EIn2BA;ICoBF;MDnBG,uDAAA;IJs2BC;EACF;AACF;AIp2BE;ECeF;IDdG,mBAAA;EJu2BD;AACF;AKv1BI;EACI,aAAA;EACA,cAAA;ALy1BR;;AKt1BA;EAGI,cAAA;EACA,kBAAA;ALu1BJ;AIl4BE;ECuCF;IDtCG,iBAAA;EJq4BD;AACF;AIl4BC;EAEC;ICgCF;MD/BG,6EAhBc;IJo5Bb;EACF;EIl4BA;IC4BF;MD3BG,uDAAA;IJq4BC;EACF;AACF;AIn4BE;ECuBF;IDtBG,gBAAA;EJs4BD;AACF;AIx5BE;ECuCF;IDtCG,wBAAA;EJ25BD;AACF;AIx5BC;EAEC;ICgCF;MD/BG,+EAhBc;IJ06Bb;EACF;EIx5BA;IC4BF;MD3BG,2DAAA;IJ25BC;EACF;AACF;AIz5BE;ECuBF;IDtBG,qBAAA;EJ45BD;AACF;AKl4BI;EAEI,gBAAA;ALm4BR;AIj7BE;EC4CE;ID3CD,wBAAA;EJo7BD;AACF;AIj7BC;EAEC;ICqCE;MDpCD,kFAhBc;IJm8Bb;EACF;EIj7BA;ICiCE;MDhCD,6DAAA;IJo7BC;EACF;AACF;AIl7BE;EC4BE;ID3BD,wBAAA;EJq7BD;AACF;AKt5BI;EAEI,gBAAA;EACA,gBAAA;ALu5BR;AI38BE;ECiDE;IDhDD,mBAAA;EJ88BD;AACF;AI38BC;EAEC;IC0CE;MDzCD,0EAhBc;IJ69Bb;EACF;EI38BA;ICsCE;MDrCD,sDAAA;IJ88BC;EACF;AACF;AI58BE;ECiCE;IDhCD,iBAAA;EJ+8BD;AACF;;AK16BA;EACI,aAAA;EACA,uBAAA;AL66BJ;AIt+BE;ECuDF;IDtDG,oBAAA;EJy+BD;AACF;AIt+BC;EAEC;ICgDF;MD/CG,6EAhBc;IJw/Bb;EACF;EIt+BA;IC4CF;MD3CG,0DAAA;IJy+BC;EACF;AACF;AIv+BE;ECuCF;IDtCG,sBAAA;EJ0+BD;AACF;AI5/BE;ECuDF;IDtDG,aAAA;EJ+/BD;AACF;AI5/BC;EAEC;ICgDF;MD/CG,oEAhBc;IJ8gCb;EACF;EI5/BA;IC4CF;MD3CG,gDAAA;IJ+/BC;EACF;AACF;AI7/BE;ECuCF;IDtCG,WAAA;EJggCD;AACF;AKt9BI;EALJ;IAMQ,sBAAA;ELy9BN;AACF;AIvhCE;ECuDF;IDtDG,oBAAA;EJ0hCD;AACF;AIvhCC;EAEC;ICgDF;MD/CG,4EAhBc;IJyiCb;EACF;EIvhCA;IC4CF;MD3CG,yDAAA;IJ0hCC;EACF;AACF;AIxhCE;ECuCF;IDtCG,qBAAA;EJ2hCD;AACF;AK5+BI;EAGI,kBAAA;AL4+BR;AIhjCE;ECiEE;IDhED,iBAAA;EJmjCD;AACF;AIhjCC;EAEC;IC0DE;MDzDD,0EAhBc;IJkkCb;EACF;EIhjCA;ICsDE;MDrDD,qDAAA;IJmjCC;EACF;AACF;AIjjCE;ECiDE;IDhDD,cAAA;EJojCD;AACF;AItkCE;ECiEE;IDhED,qBAAA;EJykCD;AACF;AItkCC;EAEC;IC0DE;MDzDD,6EAhBc;IJwlCb;EACF;EItkCA;ICsDE;MDrDD,yDAAA;IJykCC;EACF;AACF;AIvkCE;ECiDE;IDhDD,oBAAA;EJ0kCD;AACF;AKrhCI;EAEI,gBAAA;ALshCR;AI/lCE;ECuEE;IDtED,kBAAA;EJkmCD;AACF;AI/lCC;EAEC;ICgEE;MD/DD,2EAhBc;IJinCb;EACF;EI/lCA;IC4DE;MD3DD,wDAAA;IJkmCC;EACF;AACF;AIhmCE;ECuDE;IDtDD,mBAAA;EJmmCD;AACF;AK1iCQ;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EAEA,gCAAA;AL2iCZ;AI7nCE;EC2EM;ID1EL,YAAA;EJgoCD;AACF;AI7nCC;EAEC;ICoEM;MDnEL,uEAhBc;IJ+oCb;EACF;EI7nCA;ICgEM;MD/DL,sDAAA;IJgoCC;EACF;AACF;AI9nCE;EC2DM;ID1DL,gBAAA;EJioCD;AACF;AInpCE;ECsFE;IDrFD,iBAAA;EJspCD;AACF;AInpCC;EAEC;IC+EE;MD9ED,6EAhBc;IJqqCb;EACF;EInpCA;IC2EE;MD1ED,uDAAA;IJspCC;EACF;AACF;AIppCE;ECsEE;IDrED,gBAAA;EJupCD;AACF;AK/kCI;EAGI,gBAAA;AL+kCR;AI5qCE;EC0FE;IDzFD,oBAAA;EJ+qCD;AACF;AI5qCC;EAEC;ICmFE;MDlFD,8EAhBc;IJ8rCb;EACF;EI5qCA;IC+EE;MD9ED,yDAAA;IJ+qCC;EACF;AACF;AI7qCE;EC0EE;IDzED,oBAAA;EJgrCD;AACF;AIlsCE;EC0FE;IDzFD,uBAAA;EJqsCD;AACF;AIlsCC;EAEC;ICmFE;MDlFD,iFAhBc;IJotCb;EACF;EIlsCA;IC+EE;MD9ED,8DAAA;IJqsCC;EACF;AACF;AInsCE;EC0EE;IDzED,wBAAA;EJssCD;AACF;;AKxnCA;EACI,kBAAA;EACA,WAAA;EACA,WAAA;AL2nCJ;AI9tCE;ECgGF;ID/FG,uBAAA;EJiuCD;AACF;AI9tCC;EAEC;ICyFF;MDxFG,gFAhBc;IJgvCb;EACF;EI9tCA;ICqFF;MDpFG,4DAAA;IJiuCC;EACF;AACF;AI/tCE;ECgFF;ID/EG,sBAAA;EJkuCD;AACF;AK/oCI;EALJ;IAMQ,eAAA;IACA,WAAA;IACA,kBAAA;ELkpCN;AACF;AKjpCI;EAVJ;IAWQ,eAAA;ELopCN;AACF;;AKjpCA;EAII,gCAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,gBAAA;EACA,UAAA;EACA,iCAAA;EACA,kBAAA;ALipCJ;AI3wCE;EC+GF;ID9GG,sBAAA;EJ8wCD;AACF;AI3wCC;EAEC;ICwGF;MDvGG,+EAhBc;IJ6xCb;EACF;EI3wCA;ICoGF;MDnGG,2DAAA;IJ8wCC;EACF;AACF;AI5wCE;EC+FF;ID9FG,qBAAA;EJ+wCD;AACF;AIjyCE;EC+GF;ID9GG,yBAAA;EJoyCD;AACF;AIjyCC;EAEC;ICwGF;MDvGG,kFAhBc;IJmzCb;EACF;EIjyCA;ICoGF;MDnGG,8DAAA;IJoyCC;EACF;AACF;AIlyCE;EC+FF;ID9FG,wBAAA;EJqyCD;AACF;AIvzCE;EC+GF;ID9GG,gBAAA;EJ0zCD;AACF;AIvzCC;EAEC;ICwGF;MDvGG,sEAhBc;IJy0Cb;EACF;EIvzCA;ICoGF;MDnGG,gDAAA;IJ0zCC;EACF;AACF;AIxzCE;EC+FF;ID9FG,WAAA;EJ2zCD;AACF;AK/sCQ;EACI,qBAAA;ALitCZ;AK/sCQ;EACI,wBAAA;ALitCZ;AK/sCQ;EACI,gCAAA;ALitCZ;AK7sCI;EACI,WAAA;EACA,kBAAA;EAGA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;AL6sCR;AI91CE;ECyIE;IDxID,cAAA;EJi2CD;AACF;AI91CC;EAEC;ICkIE;MDjID,sEAhBc;IJg3Cb;EACF;EI91CA;IC8HE;MD7HD,kDAAA;IJi2CC;EACF;AACF;AI/1CE;ECyHE;IDxHD,YAAA;EJk2CD;AACF;AIp3CE;ECyIE;IDxID,eAAA;EJu3CD;AACF;AIp3CC;EAEC;ICkIE;MDjID,yEAhBc;IJs4Cb;EACF;EIp3CA;IC8HE;MD7HD,sDAAA;IJu3CC;EACF;AACF;AIr3CE;ECyHE;IDxHD,gBAAA;EJw3CD;AACF;AKxvCQ;EATJ;IAUQ,aAAA;EL2vCV;AACF;AKxvCI;EACI,WAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,sBAAA;EACA,4BAAA;EACA,+BAAA;AL0vCR;;AKpvCA;EACI,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;ALuvCJ;AIh6CE;ECoKF;IDnKG,uBAAA;EJm6CD;AACF;AIh6CC;EAEC;IC6JF;MD5JG,gFAhBc;IJk7Cb;EACF;EIh6CA;ICyJF;MDxJG,6DAAA;IJm6CC;EACF;AACF;AIj6CE;ECoJF;IDnJG,wBAAA;EJo6CD;AACF;;AKzwCA;EACI,aAAA;EACA,eAAA;EACA,uBAAA;EACA,SAAA;AL4wCJ;AK3wCI;EAEI,qFAAA;EACA,kBAAA;EAEA,gBAAA;AL2wCR;AIl8CE;ECkLE;IDjLD,YAAA;EJq8CD;AACF;AIl8CC;EAEC;IC2KE;MD1KD,sEAhBc;IJo9Cb;EACF;EIl8CA;ICuKE;MDtKD,iDAAA;IJq8CC;EACF;AACF;AIn8CE;ECkKE;IDjKD,cAAA;EJs8CD;AACF;AIx9CE;ECkLE;IDjLD,aAAA;EJ29CD;AACF;AIx9CC;EAEC;IC2KE;MD1KD,uEAhBc;IJ0+Cb;EACF;EIx9CA;ICuKE;MDtKD,kDAAA;IJ29CC;EACF;AACF;AIz9CE;ECkKE;IDjKD,eAAA;EJ49CD;AACF;AKtzCQ;EACI,2BAAA;ALwzCZ;AKvzCW;EACK,4BAAA;ALyzChB;AKvzCW;EACC,iBAAA;ALyzCZ;AKpzCI;EACI,WAAA;EACA,YAAA;EACA,eAAA;EACA,4BAAA;ALszCR;AKnzCC;EACO,kBAAA;EACA,OAAA;EACA,SAAA;EAGA,2BAAA;EACA,+BAAA;ALmzCR;AIpgDE;EC0MD;IDzME,wBAAA;EJugDD;AACF;AIpgDC;EAEC;ICmMD;MDlME,kFAhBc;IJshDb;EACF;EIpgDA;IC+LD;MD9LE,4DAAA;IJugDC;EACF;AACF;AIrgDE;EC0LD;IDzLE,wBAAA;EJwgDD;AACF;AI1hDE;EC0MD;IDzME,sBAAA;EJ6hDD;AACF;AI1hDC;EAEC;ICmMD;MDlME,gFAhBc;IJ4iDb;EACF;EI1hDA;IC+LD;MD9LE,6DAAA;IJ6hDC;EACF;AACF;AI3hDE;EC0LD;IDzLE,uBAAA;EJ8hDD;AACF;AK51CC;EACO,eAAA;EACA,WAAA;EACA,qBAAA;AL81CR;AK71CQ;EAJP;IAKW,eAAA;ELg2CV;AACF;AK71CC;EACO,eAAA;EACA,WAAA;AL+1CR;AK91CQ;EAHP;IAIW,eAAA;ELi2CV;AACF;;AInkDE;ECwOF;IDvOG,yBAAA;EJukDD;AACF;AIpkDC;EAEC;ICiOF;MDhOG,mFAhBc;IJslDb;EACF;EIpkDA;IC6NF;MD5NG,8DAAA;IJukDC;EACF;AACF;AIrkDE;ECwNF;IDvNG,yBAAA;EJwkDD;AACF;AKh3CI;EACI,aAAA;EACA,eAAA;EACA,uBAAA;ALk3CR;AI/lDE;EC0OE;IDzOD,YAAA;EJkmDD;AACF;AI/lDC;EAEC;ICmOE;MDlOD,qEAhBc;IJinDb;EACF;EI/lDA;IC+NE;MD9ND,kDAAA;IJkmDC;EACF;AACF;AIhmDE;EC0NE;IDzND,aAAA;EJmmDD;AACF;AKp4CI;EACI,kBAAA;EACA,gBAAA;ALs4CR;AKn4CY;EACI,UAAA;EACA,mBAAA;ALq4ChB;AI7nDE;EC4PE;ID3PD,gBAAA;EJgoDD;AACF;AI7nDC;EAEC;ICqPE;MDpPD,4EAhBc;IJ+oDb;EACF;EI7nDA;ICiPE;MDhPD,wDAAA;IJgoDC;EACF;AACF;AI9nDE;EC4OE;ID3OD,iBAAA;EJioDD;AACF;AInpDE;EC4PE;ID3PD,gBAAA;EJspDD;AACF;AInpDC;EAEC;ICqPE;MDpPD,2EAhBc;IJqqDb;EACF;EInpDA;ICiPE;MDhPD,uDAAA;IJspDC;EACF;AACF;AIppDE;EC4OE;ID3OD,iBAAA;EJupDD;AACF;AKx6CI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;AL06CR;AI9qDE;ECiQE;IDhQD,oBAAA;EJirDD;AACF;AI9qDC;EAEC;IC0PE;MDzPD,8EAhBc;IJgsDb;EACF;EI9qDA;ICsPE;MDrPD,2DAAA;IJirDC;EACF;AACF;AI/qDE;ECiPE;IDhPD,qBAAA;EJkrDD;AACF;AIpsDE;ECiQE;IDhQD,qBAAA;EJusDD;AACF;AIpsDC;EAEC;IC0PE;MDzPD,6EAhBc;IJstDb;EACF;EIpsDA;ICsPE;MDrPD,0DAAA;IJusDC;EACF;AACF;AIrsDE;ECiPE;IDhPD,sBAAA;EJwsDD;AACF;AKn9CQ;EANJ;IAOQ,eAAA;ELs9CV;AACF;AKn9CI;EACI,eAAA;EACA,gBAAA;ALq9CR;AInuDE;ECiRE;IDhRD,cAAA;EJsuDD;AACF;AInuDC;EAEC;IC0QE;MDzQD,wEAhBc;IJqvDb;EACF;EInuDA;ICsQE;MDrQD,gDAAA;IJsuDC;EACF;AACF;AIpuDE;ECiQE;IDhQD,cAAA;EJuuDD;AACF;AIzvDE;ECiRE;IDhRD,gBAAA;EJ4vDD;AACF;AIzvDC;EAEC;IC0QE;MDzQD,2EAhBc;IJ2wDb;EACF;EIzvDA;ICsQE;MDrQD,uDAAA;IJ4vDC;EACF;AACF;AI1vDE;ECiQE;IDhQD,iBAAA;EJ6vDD;AACF;AKz/CI;EACI,mBAAA;EACA,kBAAA;AL2/CR;AKz/CQ;EAJJ;IAKQ,eAAA;IACA,cAAA;EL4/CV;AACF;AKz/CI;EACI,kBAAA;AL2/CR;AK1/CQ;EAFJ;IAGQ,aAAA;EL6/CV;AACF;AK1/CI;EACI,WAAA;EACA,UAAA;EACA,UAAA;EACA,kBAAA;EACA,mDAAA;AL4/CR;;AKz/CA;EACI,aAAA;EACA,eAAA;EACA,2BAAA;EACA,kBAAA;AL4/CJ;AI/yDE;EC+SF;ID9SG,mBAAA;EJkzDD;AACF;AI/yDC;EAEC;ICwSF;MDvSG,6EAhBc;IJi0Db;EACF;EI/yDA;ICoSF;MDnSG,8DAAA;IJkzDC;EACF;AACF;AIhzDE;EC+RF;ID9RG,wBAAA;EJmzDD;AACF;AIr0DE;EC+SF;ID9SG,qBAAA;EJw0DD;AACF;AIr0DC;EAEC;ICwSF;MDvSG,8EAhBc;IJu1Db;EACF;EIr0DA;ICoSF;MDnSG,2DAAA;IJw0DC;EACF;AACF;AIt0DE;EC+RF;ID9RG,sBAAA;EJy0DD;AACF;AI31DE;EC+SF;ID9SG,sBAAA;EJ81DD;AACF;AI31DC;EAEC;ICwSF;MDvSG,+EAhBc;IJ62Db;EACF;EI31DA;ICoSF;MDnSG,4DAAA;IJ81DC;EACF;AACF;AI51DE;EC+RF;ID9RG,uBAAA;EJ+1DD;AACF;AK1jDI;EACI,mBAAA;EAEA,gBAAA;EACA,gBAAA;AL2jDR;AIt3DE;ECuTE;IDtTD,kBAAA;EJy3DD;AACF;AIt3DC;EAEC;ICgTE;MD/SD,2EAhBc;IJw4Db;EACF;EIt3DA;IC4SE;MD3SD,wDAAA;IJy3DC;EACF;AACF;AIv3DE;ECuSE;IDtSD,mBAAA;EJ03DD;AACF;AI54DE;ECuTE;IDtTD,iBAAA;EJ+4DD;AACF;AI54DC;EAEC;ICgTE;MD/SD,6EAhBc;IJ85Db;EACF;EI54DA;IC4SE;MD3SD,uDAAA;IJ+4DC;EACF;AACF;AI74DE;ECuSE;IDtSD,gBAAA;EJg5DD;AACF;AKrmDQ;EACI,WAAA;EACA,kBAAA;EAEA,WAAA;EACA,gCAAA;EACA,WAAA;EACA,SAAA;ALsmDZ;AI16DE;EC6TM;ID5TL,eAAA;EJ66DD;AACF;AI16DC;EAEC;ICsTM;MDrTL,yEAhBc;IJ47Db;EACF;EI16DA;ICkTM;MDjTL,sDAAA;IJ66DC;EACF;AACF;AI36DE;EC6SM;ID5SL,gBAAA;EJ86DD;AACF;AIh8DE;ECuTE;IDtTD,mBAAA;EJm8DD;AACF;AIh8DC;EAEC;ICgTE;MD/SD,6EAhBc;IJk9Db;EACF;EIh8DA;IC4SE;MD3SD,8DAAA;IJm8DC;EACF;AACF;AIj8DE;ECuSE;IDtSD,wBAAA;EJo8DD;AACF;AKhpDQ;EAGI;IAEI,UAAA;EL+oDd;AACF;AI39DE;ECyUU;IDxUT,aAAA;EJ89DD;AACF;AI39DC;EAEC;ICkUU;MDjUT,sEAhBc;IJ6+Db;EACF;EI39DA;IC8TU;MD7TT,mDAAA;IJ89DC;EACF;AACF;AI59DE;ECyTU;IDxTT,cAAA;EJ+9DD;AACF;;AMjkEA;EACI,kBAAA;ANokEJ","sourcesContent":["@use \"sass:math\";\r\n\r\n// Підключення міксинів ===========================================================================================================================================================================================================================================================================\r\n@import \"base/mixins\";\r\n\r\n// Підключення шрифтів ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - додати при підключенні через плагін\r\n\r\n// Підключити, якщо є локальні файли шрифтів\r\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');\r\n\r\n// Підключення іконкових шрифтів ==============================================================================================================================================================================================================================================================================\r\n// Підключити, якщо є файл іконкового шрифту\r\n//@import \"fonts/icons\";\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// Налаштування шаблону ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// За замовчуванням шрифт ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: \"Inter\";\r\n$fontSize: toRem(15); // де 14(px) - розмір шрифту за замовчуванням з макету\r\n\r\n// Основні кольори\r\n$mainColor: #0E0E0E; // Колір шрифту за замовчуванням\r\n\r\n// Палітра кольорів\r\n// @import \"base/colors-palette\";\r\n\r\n// Налаштування адаптивної сітки ===============================================================================================================================================================================================================================================================================================\r\n\r\n// Мінімальна ширина сторінки\r\n$minWidth: 320;\r\n// Ширина полотна (макету)\r\n$maxWidth: 1366;\r\n// Ширина обмежуючого контейнера (0 = немає обмеження)\r\n$maxWidthContainer: 1170;\r\n// Загальний відступ у контейнера\r\n// (30 = по 15px ліворуч і праворуч, 0 = немає відступу)\r\n$containerPadding: 30;\r\n\r\n// Ширина спрацьовування першого брейкпоінту\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поїнти\r\n$pc: em($containerWidth); // ПК, ноутбуки, деякі планшети у горизонтальному положенні\r\n$tablet: em(991.98); // Планшети, деякі телефони в горизонтальному положенні\r\n$mobile: em(767.98); // Телефони L\r\n$mobileSmall: em(479.98); // Телефони S\r\n\r\n// Тип адаптива:\r\n// 1 = чуйність (у контейнера немає брейкпоінтів),\r\n// 2 = по брейк-поїнт (контейнер змінює свою ширину по брейк-поїнт)\r\n$responsiveType: 1;\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// Обнулення ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import \"base/null\";\r\n\r\n// Стилі тега BODY ============================================================================================================================================================================================================================================================================================================================================================================================\r\nbody {\r\n\t// Скролл заблоковано\r\n\t.lock & {\r\n\t\toverflow: hidden;\r\n\t\ttouch-action: none;\r\n\t\toverscroll-behavior: none;\r\n\t}\r\n\t// Сайт завантажений\r\n\t.loaded & {\r\n\t}\r\n}\r\n// Оболонка wrapper ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n\tmin-height: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\toverflow: hidden;\r\n\t@supports (overflow: clip) {\r\n\t\toverflow: clip;\r\n\t}\r\n\t// Притискаємо footer\r\n\t> main {\r\n\t\tflex: 1 1 auto;\r\n\t}\r\n\t// Фікс для слайдерів\r\n\t> * {\r\n\t\tmin-width: 0;\r\n\t}\r\n}\r\n// Обмежуючий контейнер ======================================================================================================================================================================================================================\r\n/*\r\n(i) Стилі будуть застосовуватись до\r\nвсіх класів, що містять *__container\r\nНаприклад header__container, main__container і т.п.\r\nСніппет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n\t// Чуйна\r\n\t[class*=\"__container\"] {\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: toRem($containerWidth);\r\n\t\t\tmargin: 0 auto;\r\n\t\t}\r\n\t\t@if ($containerPadding>0) {\r\n\t\t\t@if ($maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\r\n\t\t\t} @else {\r\n\t\t\t\t@include adaptiveValue(\"padding-left\", math.div($containerPadding, 2), 15);\r\n\t\t\t\t@include adaptiveValue(\"padding-right\", math.div($containerPadding, 2), 15);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n} @else {\r\n\t// Брейк-поїнтами\r\n\t[class*=\"__container\"] {\r\n\t\tmargin: 0 auto;\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: toRem($containerWidth);\r\n\t\t} @else {\r\n\t\t\t@if ($containerPadding>0) {\r\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $pc) {\r\n\t\t\tmax-width: toRem(970);\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmax-width: toRem(750);\r\n\t\t}\r\n\t\t@media (max-width: $mobile) {\r\n\t\t\tmax-width: none;\r\n\t\t\t@if ($containerPadding>0 and $maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// Підключення базових стилів, шаблонів (заготівель) та допоміжних класів\r\n// Для підключення/вимкнення конкретних стилів дивись base.scss\r\n@import \"base\";\r\n\r\n// Підключення стилів загальних елементів проекту\r\n@import \"common\";\r\n\r\n// Підключення стилів окремих блоків\r\n@import \"header\";\r\n@import \"footer\";\r\n\r\n// Підключення стилів окремих сторінок\r\n@import \"home\";\r\n\r\n// Змінні\r\n\r\n@import \"utils/vars\";\r\n","* {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: 0px;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n\t// outline: none;\r\n}\r\na:focus,\r\na:active {\r\n\t// outline: none;\r\n}\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tmin-width: $minWidth + px;\r\n}\r\nbody {\r\n\tcolor: $mainColor;\r\n\tline-height: 1;\r\n\tfont-family: $fontFamily;\r\n\tfont-size: $fontSize;\r\n\t//text-rendering: optimizeLegibility;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n\tfont-family: $fontFamily;\r\n\tfont-size: inherit;\r\n\tline-height: inherit;\r\n}\r\nbutton {\r\n\tcursor: pointer;\r\n\tcolor: inherit;\r\n\tbackground-color: transparent;\r\n}\r\na {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\nul li {\r\n\tlist-style: none;\r\n}\r\nimg {\r\n\tvertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n","// Загальний файл елементів форм\r\n// Для підключення/відключення стилів конкретного елемента форми дивись base/forms/forms.scss\r\n@import \"base/forms/forms\";\r\n\r\n// Стилі попапів\r\n// @import \"base/popup\";\r\n\r\n// Стилі спойлерів\r\n// @import \"base/spollers\";\r\n\r\n// Стилі табів\r\n// @import \"base/tabs\";\r\n\r\n// Стилі мап\r\n// @import \"base/maps\";\r\n\r\n// Стилі блоку \"показати ще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стилі для липкого блоку\r\n// @import \"base/sticky\";\r\n\r\n// Стилі для повноекранного блоку\r\n// @import \"base/fullscreen\";\r\n\r\n// Стилі для поекраної прокрутки\r\n// Styles for fullpage scroll\r\n// @import \"base/fullpage\";\r\n\r\n// Стилі для ripple ефекту\r\n// Styles for ripple effect\r\n// @import \"base/ripple\";\r\n\r\n// Стилі для кастомного курсору\r\n// Styles for custom cursor\r\n// @import \"base/cursor\";\r\n\r\n// Стилі для чуйних картинок (IBG)\r\n// Сніппет (HTML): ibg (div з картинкою та класами)\r\n// Сніппет (HTML): ibga (a з картинкою та класами)\r\n[class*=\"-ibg\"] {\r\n\tposition: relative;\r\n\timg {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tobject-fit: cover;\r\n\t}\r\n}\r\n[class*=\"-ibg--contain\"] {\r\n\timg {\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n// Шаблони (заготівлі)\r\n// @extend %ім'я шаблону;\r\n// Сніппет (SCSS): ex\r\n\r\n// Лічильник для списку\r\n%listCounter {\r\n\tlist-style-type: none;\r\n\tcounter-reset: item;\r\n\tli {\r\n\t\tposition: relative;\r\n\t\t&:before {\r\n\t\t\tcounter-increment: item;\r\n\t\t\tcontent: counter(item);\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t}\r\n}\r\n// Адаптивне відео\r\n%responsiveVideo {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 0;\r\n\tpadding-bottom: 56.25%;\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n// Відео як фон\r\n%videoBackground {\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: fixed;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t\tz-index: -100;\r\n\t\ttransform: translateX(-50%) translateY(-50%);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}\r\n// Сірий фільтр\r\n%grayfilter {\r\n\ttransition: all 0.3s ease 0s;\r\n\tfilter: grayscale(1);\r\n\t@media (any-hover: hover) {\r\n\t\t&:hover {\r\n\t\t\tfilter: grayscale(0);\r\n\t\t}\r\n\t}\r\n}\r\n// Скасувати виділення\r\n%noselect {\r\n\tuser-select: none;\r\n}\r\n// Дзеркальне відображення\r\n%mirror {\r\n\ttransform: scale(-1, 1);\r\n}\r\n// Плавний скролл\r\n%smoothscroll {\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n// Сховати скролл\r\n%hidescroll {\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n","//====================================================================================================\r\n\r\n.header {\r\n\tbackground-color: var(--dark-cl);\r\n\tcolor: #fff;\r\n\t&__menu {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\t@media (max-width:580px){\r\n\t\t\tjustify-content: space-between;\r\n\t\t\theight: 52px;\r\n\t\t  }\r\n\t}\r\n\r\n\t&__logo {\r\n\t\tmargin-right: auto;\r\n\t\t@include adaptiveValue(\"font-size\", 20, 15);\r\n\t}\r\n}\r\n.menu {\r\n\r\n\t&__body {\r\n\t\t@include adaptiveValue(\"padding-top\", 35, 25);\r\n\t\t@include adaptiveValue(\"padding-bottom\", 35, 25);\r\n\t\tdisplay: flex;\r\n\t\tz-index: 10;\r\n\t\t@media (max-width:580px){\r\n\t\t\tflex-direction: column;\r\n\t\t\talign-items: center;\r\n\t\t  }\r\n\t}\r\n\r\n\t&__list {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\t@include adaptiveValue(\"margin-right\", 60, 50);\r\n\t\t@include adaptiveValue(\"gap\", 40, 30);\r\n\r\n\t\t@media (max-width:580px){\r\n\t\t\tflex-direction: column;\r\n\t\t\talign-items: center;\r\n\t\t\tmargin: 0;\r\n\t\t\tflex: 2;\r\n\t\t  }\r\n\t  }\r\n\r\n\t&__link {\r\n\t\t@include adaptiveValue(\"padding-top\", 35, 25);\r\n\t\t@include adaptiveValue(\"padding-bottom\", 35, 25);\r\n\t\tfont-size: 16px;\r\n\t\tposition: relative;\r\n\r\n\t\t@media (max-width:580px){\r\n\t\t\tfont-size: 28px;\r\n\t\t  }\r\n\t\t\r\n\t\t&::before {\r\n\t\t\tcontent: '';\r\n\t\t\tposition: absolute;\r\n\t\t\tdisplay: block;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 45px;\r\n\t\t\theight: 1px;\r\n\t\t\twidth: 100%;\r\n\t\t\tbackground-color: #fff;\r\n\t\t\ttransform: translateX(-100%);\r\n\t\t\topacity: 0;\r\n\t\t\tvisibility: hidden;\r\n\t\t\ttransition: visibility 0.5s ease, opacity 0.3s ease, transform 0.3s ease;\r\n\t\t}\r\n\r\n\t\t&:hover {\r\n\t\t\t&::before {\r\n\t\t\t\ttransform: translateX(0);\r\n\t\t\t\topacity: 1;\r\n\t\t\t\tvisibility: visible;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n.socials-list {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\t@include adaptiveValue(\"gap\", 15, 10);\r\n\r\n\t@media (max-width:580px){\r\n\t\tgap: 30px;\r\n\t\tflex: 1;\r\n  \t}\r\n\r\n\t&__icon {\r\n\t\t@media (max-width:580px){\r\n\t\t\twidth: 25px;\r\n\t\t\theight: 25px;\r\n  \t}\r\n\t}\r\n}\r\n\r\n//====================================================================================================\r\n\r\n//Burger\r\n@media (max-width: 580px) {\r\n\t.menu__body {\r\n\t\tposition: fixed;\r\n\t\ttop: 52px;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttransform: translateX(-100%);\r\n\t\tbackground-color: var(--dark-cl);\r\n\t\toverflow: auto;\r\n\t\ttransition: transform 0.3s ease;\r\n\t}\r\n}\r\n\r\n.icon-menu {\r\n\t@media (min-width:580px){\r\n\t\tdisplay: none;  \r\n\t}\r\n\t@media (max-width: 580px) {\r\n\t\tdisplay: block;\r\n\t\tposition: relative;\r\n\t\twidth: toRem(30);\r\n\t\theight: toRem(18);\r\n\t\tz-index: 5;\r\n\t\t@media (any-hover: none) {\r\n\t\t\tcursor: default;\r\n\t\t}\r\n\t\tspan,\r\n\t\t&::before,\r\n\t\t&::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\tright: 0;\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: toRem(2);\r\n\t\t\tbackground-color: #fff;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t\t&::after {\r\n\t\t\tbottom: 0;\r\n\t\t}\r\n\t\tspan {\r\n\t\t\ttop: calc(50% - toRem(1));\r\n\t\t}\r\n\t\t.menu-open & {\r\n\t\t\t+.menu__body {\r\n\t\t\t\ttransform: translateX(0);\r\n\t\t\t}\r\n\t\t\tspan {\r\n\t\t\t\twidth: 0;\r\n\t\t\t}\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t}\r\n\t\t\t&::before {\r\n\t\t\t\ttop: calc(50% - toRem(1));\r\n\t\t\t\ttransform: rotate(-45deg);\r\n\t\t\t}\r\n\t\t\t&::after {\r\n\t\t\t\tbottom: calc(50% - toRem(1));\r\n\t\t\t\ttransform: rotate(45deg);\r\n\t\t\t}\r\n\t}\r\n\t\t\t\r\n\t\t}\t\r\n\t}\r\n\t\r\n\t\r\n\r\n","//Підключення шрифту\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc:\r\n\t\t\turl(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"),\r\n\t\t\turl(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from: 100) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function toRem($px, $current: 16) {\r\n\t$result: math.div($px, $current) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивна властивість (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $keepSize: 0, $widthFrom: $containerWidth, $widthTo: $minWidth) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поїнти в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плаваючого значення\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{toRem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Отримання значення властивості\r\n\t$propertyValue: #{\"clamp(\" toRem($minSize) \",\" $flyValue \",\" toRem($startSize) \")\"};\r\n\t// Якщо негативні значення\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" toRem($startSize) \",\" $flyValue \",\" toRem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Встановлюємо значення за замовчуванням\r\n\t@if $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: toRem($startSize);\r\n\t\t}\r\n\t}\r\n\t// Адаптуємо розмір у проміжку між зазначеними ширинами в'юпорту\r\n\t@media (min-width: $widthToMedia) and (max-width: $widthFromMedia) {\r\n\t\t// Якщо підтримується clamp();\r\n\t\t@supports (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: $propertyValue;\r\n\t\t}\r\n\t\t// Якщо не підтримується clamp();\r\n\t\t@supports not (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: calc(#{toRem($minSize)} + #{$addSize} * (100vw - #{toRem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t\t}\r\n\t}\r\n\t@if $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: toRem($minSize);\r\n\t\t}\r\n\t}\r\n}\r\n","//====================================================================================================\r\n// Hero section\r\n//====================================================================================================\r\n.hero {\r\n    background-color: var(--dark-cl);\r\n    position: relative;\r\n    @include adaptiveValue(\"height\", 480, 270);\r\n    &__container {\r\n        position: relative;\r\n    }\r\n}\r\n\r\n.swiper-counter {\r\n    position: relative;\r\n    @include adaptiveValue(\"bottom\", 70, 30);\r\n    @include adaptiveValue(\"left\", 200, 15);\r\n    @include adaptiveValue(\"width\", 80, 50);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    color: #fff;\r\n    &__item {\r\n        &::after {\r\n            content: '';\r\n            height: 1px;\r\n            @include adaptiveValue(\"width\", 20, 10);\r\n            background-color: #fff;\r\n            position: absolute;\r\n            top: 7px;\r\n            @include adaptiveValue(\"left\", 30, 19);\r\n    }\r\n\r\n    &span {\r\n        @include adaptiveValue(\"font-size\", 14, 12);  \r\n    }\r\n    }\r\n}\r\n\r\n.block-title {\r\n        position: absolute;\r\n        @include adaptiveValue(\"top\", 175, 50);\r\n        @include adaptiveValue(\"left\", 200, 30);\r\n        @include adaptiveValue(\"width\", 516, 300);\r\n        padding: 40px 0 40px 0;\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 70, 36);\r\n        font-weight: 500;\r\n        line-height: 1.1;\r\n        color: #fff;\r\n        text-shadow: 4px 4px 2px rgba(0,0,0,0.6);\r\n        &::before {\r\n            content: '';\r\n            position: absolute;\r\n            top: 0;\r\n            left: 0;\r\n            height: 1px;\r\n            width: 70px;\r\n            background-color: #fff;\r\n        }\r\n    }\r\n    &::before {\r\n        content: '';\r\n        height: 1px;\r\n        width: 70px;\r\n    }\r\n}\r\n\r\n.btn-view {\r\n    position: absolute;\r\n    @include adaptiveValue(\"top\", 390, 160);\r\n    @include adaptiveValue(\"right\", 178, 20);\r\n    @include adaptiveValue(\"width\", 90, 55);\r\n    @include adaptiveValue(\"height\", 90, 55);\r\n    background-color: #fff;\r\n    color: var(--dark-cl);\r\n    border-radius: 50%;\r\n    @include adaptiveValue(\"font-size\", 15, 12);\r\n    font-weight: 500;\r\n    transition: transform 0.4s ease, box-shadow 0.4s ease;\r\n\r\n    &:hover {\r\n        transform: scale(1.1);\r\n        box-shadow: 2px 2px 15px 8px #fff;\r\n    }\r\n}\r\n\r\n.swiper-slide {\r\n    &__img {\r\n         @include adaptiveValue(\"height\", 580, 220);\r\n    }\r\n}\r\n\r\n.swiper-button-prev {\r\n    position: absolute;\r\n    top: 225px;\r\n    @include adaptiveValue(\"left\", -50, 400);\r\n    @media (max-width:958px){\r\n        display: none;\r\n      }\r\n}\r\n.swiper-button-next {\r\n    position: absolute;\r\n    top: 225px;\r\n    @include adaptiveValue(\"right\", -50, 400);\r\n    @media (max-width:958px){\r\n        display: none;\r\n      }\r\n}\r\n\r\n//====================================================================================================\r\n// About-us section\r\n//====================================================================================================\r\n.about-us {\r\n    @include adaptiveValue(\"padding-top\", 256, 40);\r\n\r\n    &__container--big {\r\n        width: 1306px;\r\n        margin: 0 auto;\r\n    }\r\n}\r\n.intro-block {\r\n    @include adaptiveValue(\"width\", 615, 290);\r\n    @include adaptiveValue(\"margin-bottom\", 93, 40);\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    &__label {\r\n        @include adaptiveValue(\"margin-bottom\", 25, 15);\r\n        font-weight: 500;\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 34, 24);\r\n        line-height: 1.3;\r\n        font-weight: 500;\r\n    }\r\n}\r\n.info-block {\r\n    display: flex;\r\n    justify-content: center;\r\n    @include adaptiveValue(\"margin-bottom\", 160, 60);\r\n    @include adaptiveValue(\"gap\", 110, 40);\r\n    @media (max-width:580px){\r\n        flex-direction: column;\r\n        @include adaptiveValue(\"padding-left\", 40, 20);\r\n      }\r\n\r\n    &__item--top-line {\r\n        @include adaptiveValue(\"width\", 391, 200);\r\n        @include adaptiveValue(\"padding-top\", 34, 20);\r\n        position: relative\r\n    }\r\n\r\n    &__text--big {\r\n        @include adaptiveValue(\"font-size\", 20, 18);\r\n        line-height: 1.5;\r\n\r\n        &::before {\r\n            content: '';\r\n            position: absolute;\r\n            top: 0;\r\n            left: 0;\r\n            height: 1px;\r\n            @include adaptiveValue(\"width\", 400, 210);\r\n            background-color: var(--dark-cl)\r\n        }\r\n    }\r\n\r\n    &__item--action {\r\n        @include adaptiveValue(\"width\", 463, 250);\r\n    }\r\n\r\n    &__text--small {\r\n        @include adaptiveValue(\"font-size\", 17, 15);\r\n        @include adaptiveValue(\"margin-bottom\", 50, 25);\r\n        line-height: 1.6;\r\n    }\r\n}\r\n.btn span {\r\n    position: relative;\r\n    z-index: 50;\r\n    color: #fff;\r\n    @include adaptiveValue(\"padding-left\", 39, 18);\r\n    @media (max-width: 959.98px) {\r\n        padding-left: 0;\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n    @media (max-width: 469.98px) {\r\n        font-size: 13px;\r\n    }\r\n}\r\n\r\n.btn {\r\n    @include adaptiveValue(\"padding-top\", 19, 10);\r\n    @include adaptiveValue(\"padding-bottom\", 19, 10);\r\n    @include adaptiveValue(\"width\", 170, 80);\r\n    background-color: var(--dark-cl);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    overflow: hidden;\r\n    z-index: 2;\r\n    outline: 1px solid var(--dark-cl);\r\n    position: relative;\r\n    \r\n\r\n    &:hover {\r\n        span {\r\n            color: var(--dark-cl);\r\n        }\r\n        &::before {\r\n            transform: translateX(0);\r\n        }\r\n        &::after {\r\n            background-color: var(--dark-cl);\r\n        }\r\n    }\r\n\r\n    &::after {\r\n        content: '';\r\n        position: absolute;\r\n        @include adaptiveValue(\"top\", 25, 12);\r\n        @include adaptiveValue(\"right\", 38, 19);\r\n        width: 6px;\r\n        height: 6px;\r\n        border-radius: 50%;\r\n        background-color: #fff;\r\n        @media (max-width: 959.98px) {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    &::before {\r\n        content: '';\r\n        position: absolute;\r\n        height: 100%;\r\n        width: 100%;\r\n        background-color: #fff;\r\n        transform: translateX(-125%);\r\n        transition: transform 0.4s ease;\r\n    }\r\n}\r\n//====================================================================================================\r\n// Directions section\r\n//====================================================================================================\r\n.directions {\r\n    max-width: 1336px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    @include adaptiveValue(\"padding-bottom\", 140, 70);\r\n}\r\n\r\n.works-list {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 30px;\r\n    &__item {\r\n        @include adaptiveValue(\"width\", 304, 200);\r\n        background: linear-gradient(180deg, rgba(0, 0, 0, 0.13) 0%, rgba(0, 0, 0, 0.65) 100%);\r\n        position: relative;\r\n        @include adaptiveValue(\"height\", 400, 280);\r\n        overflow: hidden;\r\n        &:hover {\r\n            backdrop-filter: blur(10px);\r\n           .works-list__info {\r\n                transform: translateY(-16px);\r\n           }\r\n           .works-list__card {\r\n            filter: blur(7px);\r\n           }\r\n        }\r\n    }\r\n\r\n    &__card {\r\n        width: 100%;\r\n        height: 100%;\r\n        filter: blur(0);\r\n        transition: filter 0.5s ease;\r\n    }\r\n\r\n\t&__info {\r\n        position: absolute;\r\n        left: 0;\r\n        bottom: 0;\r\n        @include adaptiveValue(\"padding-right\", 93, 25);\r\n        @include adaptiveValue(\"padding-left\", 50, 25);\r\n        transform: translateY(16px);\r\n        transition: transform 0.5s ease;\r\n\t}\r\n\r\n\t&__text {\r\n        font-size: 20px;\r\n        color: #fff;\r\n        margin: 24px 0 24px 0;\r\n        @media (max-width: 499.98px) {\r\n            font-size: 18px; \r\n        }\r\n\t}\r\n\r\n\t&__more {\r\n        font-size: 16px;\r\n        color: #fff;\r\n        @media (max-width: 499.98px) {\r\n            font-size: 14px; \r\n        }\r\n\t}\r\n}\r\n//====================================================================================================\r\n// Directions section\r\n//====================================================================================================\r\n.featured {\r\n    @include adaptiveValue(\"padding-bottom\", 157, 75);\r\n    &__list {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        @include adaptiveValue(\"gap\", 100, 30);\r\n    }\r\n\r\n    &__item {\r\n        position: relative;\r\n        overflow: hidden;\r\n\r\n        &:hover {\r\n            .featured__btn {\r\n                opacity: 1;\r\n                visibility: visible;\r\n            }\r\n        }\r\n    }\r\n    &__image {\r\n        @include adaptiveValue(\"width\", 370, 185);\r\n        @include adaptiveValue(\"height\", 428, 214);\r\n    }\r\n\r\n    &__label {   \r\n        font-size: 24px;\r\n        font-weight: 500;\r\n        line-height: 1.4; \r\n        @include adaptiveValue(\"margin-top\", 34, 15);\r\n        @include adaptiveValue(\"margin-bottom\", 8, 4);\r\n        @media (max-width: 599.98px) {\r\n            font-size: 20px;\r\n        }\r\n    }\r\n\r\n    &__type {\r\n        font-size: 15px;\r\n        font-weight: 500;\r\n    }\r\n\r\n    &__image--big {\r\n        @include adaptiveValue(\"width\", 600, 280);\r\n        @include adaptiveValue(\"height\", 428, 194);\r\n    }\r\n\r\n    &__item--top {\r\n        padding-left: 100px;\r\n        padding-top: 160px;\r\n\r\n        @media (max-width: 1199.98px) {\r\n            padding-left: 0;\r\n            padding-top: 0;\r\n        }\r\n    }\r\n\r\n    &__item--bottom {\r\n        margin-top: -160px;\r\n        @media (max-width: 1199.98px) {\r\n            margin-top: 0;\r\n        }\r\n    }\r\n\r\n    &__btn {\r\n        left: 130px;\r\n        top: 200px;\r\n        opacity: 0;\r\n        visibility: hidden;\r\n        transition: opacity 0.5s ease, visibility 0.5s ease;\r\n    }\r\n}\r\n.introduction {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: first baseline;\r\n    position: relative;\r\n    @include adaptiveValue(\"margin-bottom\", 48, 25);\r\n    @include adaptiveValue(\"padding-left\", 100, 50);\r\n    @include adaptiveValue(\"padding-right\", 100, 50);\r\n    &__title {\r\n        margin-right: 375px;\r\n        @include adaptiveValue(\"font-size\", 100, 50);\r\n        font-weight: 500;\r\n        line-height: 1.1;\r\n        @include adaptiveValue(\"width\", 425, 250);\r\n        &::after {\r\n            content: '';\r\n            position: absolute;\r\n            @include adaptiveValue(\"width\", 70, 35);\r\n            height: 1px;\r\n            background-color: var(--dark-cl);\r\n            left: 680px;\r\n            top: 80px;\r\n        }\r\n        @media (max-width: 1199.98px) {\r\n            @include adaptiveValue(\"margin-bottom\", 48, 25);\r\n\r\n            &::after {\r\n                @include adaptiveValue(\"left\", 100, 50);\r\n                top: -40px;\r\n            }\r\n        }\r\n    }\r\n}\r\n//====================================================================================================\r\n// Process section\r\n//====================================================================================================\r\n\r\n\r\n\r\n\r\n",":root {\r\n    --dark-cl: #0E0E0E;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("596813bb824949a65dc5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45ZDYyZGJmNDZlNWI4NjE2YWU1NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw4R0FBOEcsa0JBQWtCO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyx1VEFBdVQsTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sWUFBWSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sU0FBUyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxNQUFNLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFFBQVEsT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sT0FBTyxVQUFVLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxRQUFRLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFB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d0RBQXdELHlEQUF5RCxTQUFTLHlCQUF5Qiw0QkFBNEIsNkJBQTZCLDhCQUE4QiwyREFBMkQsNERBQTRELDBDQUEwQyxnQ0FBZ0MsYUFBYSxTQUFTLHFCQUFxQiw0QkFBNEIsNkJBQTZCLFNBQVMsMkJBQTJCLHdEQUF3RCx5REFBeUQsU0FBUywwQkFBMEIsZ0NBQWdDLCtCQUErQiwrQ0FBK0MsZ0NBQWdDLCtCQUErQixhQUFhLFNBQVMsNkJBQTZCLCtCQUErQiwyQ0FBMkMsOEJBQThCLGFBQWEsU0FBUyxvQkFBb0Isd0JBQXdCLHVCQUF1Qix1QkFBdUIsK0JBQStCLGdFQUFnRSxTQUFTLEtBQUssbUJBQW1CLHNCQUFzQix3QkFBd0Isb0NBQW9DLDJCQUEyQiwwREFBMEQsMERBQTBELDJEQUEyRCxrQkFBa0IsZ0NBQWdDLDJEQUEyRCw2QkFBNkIsNkJBQTZCLHdEQUF3RCxzQkFBc0IsNEJBQTRCLG1DQUFtQywwREFBMEQsNEJBQTRCLGlEQUFpRCw0QkFBNEIsMEJBQTBCLGFBQWEsMkNBQTJDLGtFQUFrRSw4QkFBOEIsOERBQThELCtCQUErQixpQkFBaUIsYUFBYSxTQUFTLEtBQUssd1FBQXdRLDJCQUEyQixLQUFLLG1CQUFtQjtBQUMxeDlDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7OztVQzVrRXZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuKiB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMzIwcHg7XG59XG5cbmJvZHkge1xuICBjb2xvcjogIzBFMEUwRTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XG4gIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLW1vei10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5pbnB1dCxcbmJ1dHRvbixcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG51bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbi5sb2NrIGJvZHkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gIG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7XG59XG4ud3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5Ac3VwcG9ydHMgKG92ZXJmbG93OiBjbGlwKSB7XG4gIC53cmFwcGVyIHtcbiAgICBvdmVyZmxvdzogY2xpcDtcbiAgfVxufVxuLndyYXBwZXIgPiBtYWluIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4ud3JhcHBlciA+ICoge1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi8qXG4oaSkg0KHRgtC40LvRliDQsdGD0LTRg9GC0Ywg0LfQsNGB0YLQvtGB0L7QstGD0LLQsNGC0LjRgdGMINC00L5cbtCy0YHRltGFINC60LvQsNGB0ZbQsiwg0YnQviDQvNGW0YHRgtGP0YLRjCAqX19jb250YWluZXJcbtCd0LDQv9GA0LjQutC70LDQtCBoZWFkZXJfX2NvbnRhaW5lciwgbWFpbl9fY29udGFpbmVyINGWINGCLtC/Llxu0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBjbnRcbiovXG5bY2xhc3MqPV9fY29udGFpbmVyXSB7XG4gIG1heC13aWR0aDogNzVyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDAuOTM3NXJlbTtcbn1cblxuW2NsYXNzKj0taWJnXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbltjbGFzcyo9LWliZ10gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5bY2xhc3MqPS1pYmctLWNvbnRhaW5dIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbiAgY29sb3I6ICNmZmY7XG59XG4uaGVhZGVyX19tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAuaGVhZGVyX19tZW51IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiA1MnB4O1xuICB9XG59XG4uaGVhZGVyX19sb2dvIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmhlYWRlcl9fbG9nbyB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjgyMzg2MzYzNjRyZW0gICsgIDAuNTY4MTgxODE4MnZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nbyB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjgyMzg2MzYzNjRyZW0gICsgIDAuNTY4MTgxODE4MnZ3ICwgMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjgyMzg2MzYzNjRyZW0gICsgIDAuNTY4MTgxODE4MnZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLmhlYWRlcl9fbG9nbyB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC45Mzc1cmVtICsgMC4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmhlYWRlcl9fbG9nbyB7XG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gIH1cbn1cblxuLm1lbnVfX2JvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiAxMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5tZW51X19ib2R5IHtcbiAgICBwYWRkaW5nLXRvcDogMi4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKSkge1xuICAgIC5tZW51X19ib2R5IHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKSkge1xuICAgIC5tZW51X19ib2R5IHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDEuNTYyNXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1lbnVfX2JvZHkge1xuICAgIHBhZGRpbmctdG9wOiAxLjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5tZW51X19ib2R5IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMi4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKSkge1xuICAgIC5tZW51X19ib2R5IHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKSkge1xuICAgIC5tZW51X19ib2R5IHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDEuNTYyNXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1lbnVfX2JvZHkge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAubWVudV9fYm9keSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG4ubWVudV9fbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubWVudV9fbGlzdCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAzLjEyNXJlbSAsIDIuODk3NzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAzLjc1cmVtICkpIHtcbiAgICAubWVudV9fbGlzdCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNsYW1wKCAzLjEyNXJlbSAsIDIuODk3NzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAzLjc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1yaWdodDogY2xhbXAoIDMuMTI1cmVtICwgMi44OTc3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5tZW51X19saXN0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygzLjEyNXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1lbnVfX2xpc3Qge1xuICAgIG1hcmdpbi1yaWdodDogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5tZW51X19saXN0IHtcbiAgICBnYXA6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAxLjY0NzcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi41cmVtICkpIHtcbiAgICAubWVudV9fbGlzdCB7XG4gICAgICBnYXA6IGNsYW1wKCAxLjg3NXJlbSAsIDEuNjQ3NzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAxLjY0NzcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi41cmVtICkpIHtcbiAgICAubWVudV9fbGlzdCB7XG4gICAgICBnYXA6IGNhbGMoMS44NzVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19saXN0IHtcbiAgICBnYXA6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLm1lbnVfX2xpc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgZmxleDogMjtcbiAgfVxufVxuLm1lbnVfX2xpbmsge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5tZW51X19saW5rIHtcbiAgICBwYWRkaW5nLXRvcDogMi4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKSkge1xuICAgIC5tZW51X19saW5rIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKSkge1xuICAgIC5tZW51X19saW5rIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDEuNTYyNXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1lbnVfX2xpbmsge1xuICAgIHBhZGRpbmctdG9wOiAxLjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5tZW51X19saW5rIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMi4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKSkge1xuICAgIC5tZW51X19saW5rIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKSkge1xuICAgIC5tZW51X19saW5rIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDEuNTYyNXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1lbnVfX2xpbmsge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAubWVudV9fbGluayB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG59XG4ubWVudV9fbGluazo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMDtcbiAgdG9wOiA0NXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuLm1lbnVfX2xpbms6aG92ZXI6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnNvY2lhbHMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc29jaWFscy1saXN0IHtcbiAgICBnYXA6IDAuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZ2FwOiBjbGFtcCggMC42MjVyZW0gLCAwLjUxMTM2MzYzNjRyZW0gICsgIDAuNTY4MTgxODE4MnZ3ICwgMC45Mzc1cmVtICkpIHtcbiAgICAuc29jaWFscy1saXN0IHtcbiAgICAgIGdhcDogY2xhbXAoIDAuNjI1cmVtICwgMC41MTEzNjM2MzY0cmVtICArICAwLjU2ODE4MTgxODJ2dyAsIDAuOTM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChnYXA6IGNsYW1wKCAwLjYyNXJlbSAsIDAuNTExMzYzNjM2NHJlbSAgKyAgMC41NjgxODE4MTgydncgLCAwLjkzNzVyZW0gKSkge1xuICAgIC5zb2NpYWxzLWxpc3Qge1xuICAgICAgZ2FwOiBjYWxjKDAuNjI1cmVtICsgMC4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnNvY2lhbHMtbGlzdCB7XG4gICAgZ2FwOiAwLjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5zb2NpYWxzLWxpc3Qge1xuICAgIGdhcDogMzBweDtcbiAgICBmbGV4OiAxO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLnNvY2lhbHMtbGlzdF9faWNvbiB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAubWVudV9fYm9keSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTJweDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1ODBweCkge1xuICAuaWNvbi1tZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLmljb24tbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxLjg3NXJlbTtcbiAgICBoZWlnaHQ6IDEuMTI1cmVtO1xuICAgIHotaW5kZXg6IDU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkgYW5kIChhbnktaG92ZXI6IG5vbmUpIHtcbiAgLmljb24tbWVudSB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLmljb24tbWVudSBzcGFuLCAuaWNvbi1tZW51OjpiZWZvcmUsIC5pY29uLW1lbnU6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gICAgcmlnaHQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMC4xMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICAuaWNvbi1tZW51OjpiZWZvcmUge1xuICAgIHRvcDogMDtcbiAgfVxuICAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgYm90dG9tOiAwO1xuICB9XG4gIC5pY29uLW1lbnUgc3BhbiB7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDAuMDYyNXJlbSk7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51ICsgLm1lbnVfX2JvZHkge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnUgc3BhbiB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51OjpiZWZvcmUge1xuICAgIHRvcDogY2FsYyg1MCUgLSAwLjA2MjVyZW0pO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgYm90dG9tOiBjYWxjKDUwJSAtIDAuMDYyNXJlbSk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB9XG59XG5cbi5oZXJvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5oZXJvIHtcbiAgICBoZWlnaHQ6IDMwcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAxNi44NzVyZW0gLCAxMi4xMDIyNzI3MjczcmVtICArICAyMy44NjM2MzYzNjM2dncgLCAzMHJlbSApKSB7XG4gICAgLmhlcm8ge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggMTYuODc1cmVtICwgMTIuMTAyMjcyNzI3M3JlbSAgKyAgMjMuODYzNjM2MzYzNnZ3ICwgMzByZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggMTYuODc1cmVtICwgMTIuMTAyMjcyNzI3M3JlbSAgKyAgMjMuODYzNjM2MzYzNnZ3ICwgMzByZW0gKSkge1xuICAgIC5oZXJvIHtcbiAgICAgIGhlaWdodDogY2FsYygxNi44NzVyZW0gKyAxMy4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaGVybyB7XG4gICAgaGVpZ2h0OiAxNi44NzVyZW07XG4gIH1cbn1cbi5oZXJvX19jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zd2lwZXItY291bnRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItY291bnRlciB7XG4gICAgYm90dG9tOiA0LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoYm90dG9tOiBjbGFtcCggMS44NzVyZW0gLCAwLjk2NTkwOTA5MDlyZW0gICsgIDQuNTQ1NDU0NTQ1NXZ3ICwgNC4zNzVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlciB7XG4gICAgICBib3R0b206IGNsYW1wKCAxLjg3NXJlbSAsIDAuOTY1OTA5MDkwOXJlbSAgKyAgNC41NDU0NTQ1NDU1dncgLCA0LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChib3R0b206IGNsYW1wKCAxLjg3NXJlbSAsIDAuOTY1OTA5MDkwOXJlbSAgKyAgNC41NDU0NTQ1NDU1dncgLCA0LjM3NXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyIHtcbiAgICAgIGJvdHRvbTogY2FsYygxLjg3NXJlbSArIDIuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItY291bnRlciB7XG4gICAgYm90dG9tOiAxLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyIHtcbiAgICBsZWZ0OiAxMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChsZWZ0OiBjbGFtcCggMC45Mzc1cmVtICwgLTMuMjY3MDQ1NDU0NXJlbSAgKyAgMjEuMDIyNzI3MjcyN3Z3ICwgMTIuNXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyIHtcbiAgICAgIGxlZnQ6IGNsYW1wKCAwLjkzNzVyZW0gLCAtMy4yNjcwNDU0NTQ1cmVtICArICAyMS4wMjI3MjcyNzI3dncgLCAxMi41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGxlZnQ6IGNsYW1wKCAwLjkzNzVyZW0gLCAtMy4yNjcwNDU0NTQ1cmVtICArICAyMS4wMjI3MjcyNzI3dncgLCAxMi41cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXIge1xuICAgICAgbGVmdDogY2FsYygwLjkzNzVyZW0gKyAxMS41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyIHtcbiAgICBsZWZ0OiAwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItY291bnRlciB7XG4gICAgd2lkdGg6IDVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMy4xMjVyZW0gLCAyLjQ0MzE4MTgxODJyZW0gICsgIDMuNDA5MDkwOTA5MXZ3ICwgNXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMy4xMjVyZW0gLCAyLjQ0MzE4MTgxODJyZW0gICsgIDMuNDA5MDkwOTA5MXZ3ICwgNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDMuMTI1cmVtICwgMi40NDMxODE4MTgycmVtICArICAzLjQwOTA5MDkwOTF2dyAsIDVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlciB7XG4gICAgICB3aWR0aDogY2FsYygzLjEyNXJlbSArIDEuODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyIHtcbiAgICB3aWR0aDogMy4xMjVyZW07XG4gIH1cbn1cbi5zd2lwZXItY291bnRlcl9faXRlbTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDdweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItY291bnRlcl9faXRlbTo6YWZ0ZXIge1xuICAgIHdpZHRoOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDAuNjI1cmVtICwgMC4zOTc3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlcl9faXRlbTo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IGNsYW1wKCAwLjYyNXJlbSAsIDAuMzk3NzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAxLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMC42MjVyZW0gLCAwLjM5NzcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyX19pdGVtOjphZnRlciB7XG4gICAgICB3aWR0aDogY2FsYygwLjYyNXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyX19pdGVtOjphZnRlciB7XG4gICAgd2lkdGg6IDAuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW06OmFmdGVyIHtcbiAgICBsZWZ0OiAxLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGVmdDogY2xhbXAoIDEuMTg3NXJlbSAsIDAuOTM3NXJlbSAgKyAgMS4yNXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlcl9faXRlbTo6YWZ0ZXIge1xuICAgICAgbGVmdDogY2xhbXAoIDEuMTg3NXJlbSAsIDAuOTM3NXJlbSAgKyAgMS4yNXZ3ICwgMS44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGVmdDogY2xhbXAoIDEuMTg3NXJlbSAsIDAuOTM3NXJlbSAgKyAgMS4yNXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlcl9faXRlbTo6YWZ0ZXIge1xuICAgICAgbGVmdDogY2FsYygxLjE4NzVyZW0gKyAwLjY4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW06OmFmdGVyIHtcbiAgICBsZWZ0OiAxLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItY291bnRlcl9faXRlbXNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjcwNDU0NTQ1NDVyZW0gICsgIDAuMjI3MjcyNzI3M3Z3ICwgMC44NzVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlcl9faXRlbXNwYW4ge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNzA0NTQ1NDU0NXJlbSAgKyAgMC4yMjcyNzI3MjczdncgLCAwLjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC43MDQ1NDU0NTQ1cmVtICArICAwLjIyNzI3MjcyNzN2dyAsIDAuODc1cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW1zcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjc1cmVtICsgMC4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW1zcGFuIHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cbn1cblxuLmJsb2NrLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiA0MHB4IDAgNDBweCAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJsb2NrLXRpdGxlIHtcbiAgICB0b3A6IDEwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHRvcDogY2xhbXAoIDMuMTI1cmVtICwgMC4yODQwOTA5MDkxcmVtICArICAxNC4yMDQ1NDU0NTQ1dncgLCAxMC45Mzc1cmVtICkpIHtcbiAgICAuYmxvY2stdGl0bGUge1xuICAgICAgdG9wOiBjbGFtcCggMy4xMjVyZW0gLCAwLjI4NDA5MDkwOTFyZW0gICsgIDE0LjIwNDU0NTQ1NDV2dyAsIDEwLjkzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAodG9wOiBjbGFtcCggMy4xMjVyZW0gLCAwLjI4NDA5MDkwOTFyZW0gICsgIDE0LjIwNDU0NTQ1NDV2dyAsIDEwLjkzNzVyZW0gKSkge1xuICAgIC5ibG9jay10aXRsZSB7XG4gICAgICB0b3A6IGNhbGMoMy4xMjVyZW0gKyA3LjgxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYmxvY2stdGl0bGUge1xuICAgIHRvcDogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5ibG9jay10aXRsZSB7XG4gICAgbGVmdDogMTIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGVmdDogY2xhbXAoIDEuODc1cmVtICwgLTEuOTg4NjM2MzYzNnJlbSAgKyAgMTkuMzE4MTgxODE4MnZ3ICwgMTIuNXJlbSApKSB7XG4gICAgLmJsb2NrLXRpdGxlIHtcbiAgICAgIGxlZnQ6IGNsYW1wKCAxLjg3NXJlbSAsIC0xLjk4ODYzNjM2MzZyZW0gICsgIDE5LjMxODE4MTgxODJ2dyAsIDEyLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGVmdDogY2xhbXAoIDEuODc1cmVtICwgLTEuOTg4NjM2MzYzNnJlbSAgKyAgMTkuMzE4MTgxODE4MnZ3ICwgMTIuNXJlbSApKSB7XG4gICAgLmJsb2NrLXRpdGxlIHtcbiAgICAgIGxlZnQ6IGNhbGMoMS44NzVyZW0gKyAxMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYmxvY2stdGl0bGUge1xuICAgIGxlZnQ6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYmxvY2stdGl0bGUge1xuICAgIHdpZHRoOiAzMi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxOC43NXJlbSAsIDEzLjg0MDkwOTA5MDlyZW0gICsgIDI0LjU0NTQ1NDU0NTV2dyAsIDMyLjI1cmVtICkpIHtcbiAgICAuYmxvY2stdGl0bGUge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxOC43NXJlbSAsIDEzLjg0MDkwOTA5MDlyZW0gICsgIDI0LjU0NTQ1NDU0NTV2dyAsIDMyLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTguNzVyZW0gLCAxMy44NDA5MDkwOTA5cmVtICArICAyNC41NDU0NTQ1NDU1dncgLCAzMi4yNXJlbSApKSB7XG4gICAgLmJsb2NrLXRpdGxlIHtcbiAgICAgIHdpZHRoOiBjYWxjKDE4Ljc1cmVtICsgMTMuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5ibG9jay10aXRsZSB7XG4gICAgd2lkdGg6IDE4Ljc1cmVtO1xuICB9XG59XG4uYmxvY2stdGl0bGVfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiA0cHggNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYmxvY2stdGl0bGVfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDQuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAyLjI1cmVtICwgMS40NzcyNzI3MjczcmVtICArICAzLjg2MzYzNjM2MzZ2dyAsIDQuMzc1cmVtICkpIHtcbiAgICAuYmxvY2stdGl0bGVfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDIuMjVyZW0gLCAxLjQ3NzI3MjcyNzNyZW0gICsgIDMuODYzNjM2MzYzNnZ3ICwgNC4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMi4yNXJlbSAsIDEuNDc3MjcyNzI3M3JlbSAgKyAgMy44NjM2MzYzNjM2dncgLCA0LjM3NXJlbSApKSB7XG4gICAgLmJsb2NrLXRpdGxlX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMi4yNXJlbSArIDIuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJsb2NrLXRpdGxlX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xuICB9XG59XG4uYmxvY2stdGl0bGVfX3RpdGxlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmJsb2NrLXRpdGxlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDcwcHg7XG59XG5cbi5idG4tdmlldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6IHZhcigtLWRhcmstY2wpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UsIGJveC1zaGFkb3cgMC40cyBlYXNlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICB0b3A6IDI0LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAodG9wOiBjbGFtcCggMTByZW0gLCA0Ljc3MjcyNzI3MjdyZW0gICsgIDI2LjEzNjM2MzYzNjR2dyAsIDI0LjM3NXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIHRvcDogY2xhbXAoIDEwcmVtICwgNC43NzI3MjcyNzI3cmVtICArICAyNi4xMzYzNjM2MzY0dncgLCAyNC4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAodG9wOiBjbGFtcCggMTByZW0gLCA0Ljc3MjcyNzI3MjdyZW0gICsgIDI2LjEzNjM2MzYzNjR2dyAsIDI0LjM3NXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIHRvcDogY2FsYygxMHJlbSArIDE0LjM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG4tdmlldyB7XG4gICAgdG9wOiAxMHJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICByaWdodDogMTEuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChyaWdodDogY2xhbXAoIDEuMjVyZW0gLCAtMi4zNDA5MDkwOTA5cmVtICArICAxNy45NTQ1NDU0NTQ1dncgLCAxMS4xMjVyZW0gKSkge1xuICAgIC5idG4tdmlldyB7XG4gICAgICByaWdodDogY2xhbXAoIDEuMjVyZW0gLCAtMi4zNDA5MDkwOTA5cmVtICArICAxNy45NTQ1NDU0NTQ1dncgLCAxMS4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocmlnaHQ6IGNsYW1wKCAxLjI1cmVtICwgLTIuMzQwOTA5MDkwOXJlbSAgKyAgMTcuOTU0NTQ1NDU0NXZ3ICwgMTEuMTI1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgcmlnaHQ6IGNhbGMoMS4yNXJlbSArIDkuODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICByaWdodDogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICB3aWR0aDogNS42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMy40Mzc1cmVtICwgMi42NDIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgd2lkdGg6IGNsYW1wKCAzLjQzNzVyZW0gLCAyLjY0MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNS42MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAzLjQzNzVyZW0gLCAyLjY0MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNS42MjVyZW0gKSkge1xuICAgIC5idG4tdmlldyB7XG4gICAgICB3aWR0aDogY2FsYygzLjQzNzVyZW0gKyAyLjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIHdpZHRoOiAzLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG4tdmlldyB7XG4gICAgaGVpZ2h0OiA1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggMy40Mzc1cmVtICwgMi42NDIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggMy40Mzc1cmVtICwgMi42NDIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDUuNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDMuNDM3NXJlbSAsIDIuNjQyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA1LjYyNXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIGhlaWdodDogY2FsYygzLjQzNzVyZW0gKyAyLjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIGhlaWdodDogMy40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42ODE4MTgxODE4cmVtICArICAwLjM0MDkwOTA5MDl2dyAsIDAuOTM3NXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjY4MTgxODE4MThyZW0gICsgIDAuMzQwOTA5MDkwOXZ3ICwgMC45Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjY4MTgxODE4MThyZW0gICsgIDAuMzQwOTA5MDkwOXZ3ICwgMC45Mzc1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuNzVyZW0gKyAwLjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgfVxufVxuLmJ0bi12aWV3OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBib3gtc2hhZG93OiAycHggMnB4IDE1cHggOHB4ICNmZmY7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItc2xpZGVfX2ltZyB7XG4gICAgaGVpZ2h0OiAzNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggMTMuNzVyZW0gLCA1LjU2ODE4MTgxODJyZW0gICsgIDQwLjkwOTA5MDkwOTF2dyAsIDM2LjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNsaWRlX19pbWcge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggMTMuNzVyZW0gLCA1LjU2ODE4MTgxODJyZW0gICsgIDQwLjkwOTA5MDkwOTF2dyAsIDM2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDEzLjc1cmVtICwgNS41NjgxODE4MTgycmVtICArICA0MC45MDkwOTA5MDkxdncgLCAzNi4yNXJlbSApKSB7XG4gICAgLnN3aXBlci1zbGlkZV9faW1nIHtcbiAgICAgIGhlaWdodDogY2FsYygxMy43NXJlbSArIDIyLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLXNsaWRlX19pbWcge1xuICAgIGhlaWdodDogMTMuNzVyZW07XG4gIH1cbn1cblxuLnN3aXBlci1idXR0b24tcHJldiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMjVweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICAgIGxlZnQ6IC0zLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGVmdDogY2xhbXAoIC0zLjEyNXJlbSAsIDM1LjIyNzI3MjcyNzNyZW0gICsgIC01MS4xMzYzNjM2MzY0dncgLCAyNXJlbSApKSB7XG4gICAgLnN3aXBlci1idXR0b24tcHJldiB7XG4gICAgICBsZWZ0OiBjbGFtcCggLTMuMTI1cmVtICwgMzUuMjI3MjcyNzI3M3JlbSAgKyAgLTUxLjEzNjM2MzYzNjR2dyAsIDI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGxlZnQ6IGNsYW1wKCAtMy4xMjVyZW0gLCAzNS4yMjcyNzI3MjczcmVtICArICAtNTEuMTM2MzYzNjM2NHZ3ICwgMjVyZW0gKSkge1xuICAgIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICAgICAgbGVmdDogY2FsYygyNXJlbSArIC0yOC4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcbiAgICBsZWZ0OiAyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk1OHB4KSB7XG4gIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnN3aXBlci1idXR0b24tbmV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMjVweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgIHJpZ2h0OiAtMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHJpZ2h0OiBjbGFtcCggLTMuMTI1cmVtICwgMzUuMjI3MjcyNzI3M3JlbSAgKyAgLTUxLjEzNjM2MzYzNjR2dyAsIDI1cmVtICkpIHtcbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgICAgIHJpZ2h0OiBjbGFtcCggLTMuMTI1cmVtICwgMzUuMjI3MjcyNzI3M3JlbSAgKyAgLTUxLjEzNjM2MzYzNjR2dyAsIDI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHJpZ2h0OiBjbGFtcCggLTMuMTI1cmVtICwgMzUuMjI3MjcyNzI3M3JlbSAgKyAgLTUxLjEzNjM2MzYzNjR2dyAsIDI1cmVtICkpIHtcbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgICAgIHJpZ2h0OiBjYWxjKDI1cmVtICsgLTI4LjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgIHJpZ2h0OiAyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk1OHB4KSB7XG4gIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmFib3V0LXVzIHtcbiAgICBwYWRkaW5nLXRvcDogMTZyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgLTIuNDA5MDkwOTA5MXJlbSAgKyAgMjQuNTQ1NDU0NTQ1NXZ3ICwgMTZyZW0gKSkge1xuICAgIC5hYm91dC11cyB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIC0yLjQwOTA5MDkwOTFyZW0gICsgIDI0LjU0NTQ1NDU0NTV2dyAsIDE2cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgLTIuNDA5MDkwOTA5MXJlbSAgKyAgMjQuNTQ1NDU0NTQ1NXZ3ICwgMTZyZW0gKSkge1xuICAgIC5hYm91dC11cyB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygyLjVyZW0gKyAxMy41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmFib3V0LXVzIHtcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xuICB9XG59XG4uYWJvdXQtdXNfX2NvbnRhaW5lci0tYmlnIHtcbiAgd2lkdGg6IDEzMDZweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5pbnRyby1ibG9jayB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm8tYmxvY2sge1xuICAgIHdpZHRoOiAzOC40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE4LjEyNXJlbSAsIDEwLjczODYzNjM2MzZyZW0gICsgIDM2LjkzMTgxODE4MTh2dyAsIDM4LjQzNzVyZW0gKSkge1xuICAgIC5pbnRyby1ibG9jayB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE4LjEyNXJlbSAsIDEwLjczODYzNjM2MzZyZW0gICsgIDM2LjkzMTgxODE4MTh2dyAsIDM4LjQzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxOC4xMjVyZW0gLCAxMC43Mzg2MzYzNjM2cmVtICArICAzNi45MzE4MTgxODE4dncgLCAzOC40Mzc1cmVtICkpIHtcbiAgICAuaW50cm8tYmxvY2sge1xuICAgICAgd2lkdGg6IGNhbGMoMTguMTI1cmVtICsgMjAuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyby1ibG9jayB7XG4gICAgd2lkdGg6IDE4LjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvLWJsb2NrIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1LjgxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAxLjI5NTQ1NDU0NTVyZW0gICsgIDYuMDIyNzI3MjcyN3Z3ICwgNS44MTI1cmVtICkpIHtcbiAgICAuaW50cm8tYmxvY2sge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIDEuMjk1NDU0NTQ1NXJlbSAgKyAgNi4wMjI3MjcyNzI3dncgLCA1LjgxMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIDEuMjk1NDU0NTQ1NXJlbSAgKyAgNi4wMjI3MjcyNzI3dncgLCA1LjgxMjVyZW0gKSkge1xuICAgIC5pbnRyby1ibG9jayB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDIuNXJlbSArIDMuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyby1ibG9jayB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICB9XG59XG4uaW50cm8tYmxvY2tfX2xhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyby1ibG9ja19fbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzEwMjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAxLjU2MjVyZW0gKSkge1xuICAgIC5pbnRyby1ibG9ja19fbGFiZWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzEwMjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAxLjU2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzEwMjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAxLjU2MjVyZW0gKSkge1xuICAgIC5pbnRyby1ibG9ja19fbGFiZWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygwLjkzNzVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyby1ibG9ja19fbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcbiAgfVxufVxuLmludHJvLWJsb2NrX190aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm8tYmxvY2tfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDIuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxLjVyZW0gLCAxLjI3MjcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xMjVyZW0gKSkge1xuICAgIC5pbnRyby1ibG9ja19fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMS4yNzI3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDEuNXJlbSAsIDEuMjcyNzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjEyNXJlbSApKSB7XG4gICAgLmludHJvLWJsb2NrX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMS41cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm8tYmxvY2tfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuXG4uaW5mby1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2sge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMy43NXJlbSAsIDEuNDc3MjcyNzI3M3JlbSAgKyAgMTEuMzYzNjM2MzYzNnZ3ICwgMTByZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAzLjc1cmVtICwgMS40NzcyNzI3MjczcmVtICArICAxMS4zNjM2MzYzNjM2dncgLCAxMHJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMy43NXJlbSAsIDEuNDc3MjcyNzI3M3JlbSAgKyAgMTEuMzYzNjM2MzYzNnZ3ICwgMTByZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMy43NXJlbSArIDYuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW5mby1ibG9jayB7XG4gICAgbWFyZ2luLWJvdHRvbTogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2sge1xuICAgIGdhcDogNi44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGdhcDogY2xhbXAoIDIuNXJlbSAsIDAuOTA5MDkwOTA5MXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA2Ljg3NXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2sge1xuICAgICAgZ2FwOiBjbGFtcCggMi41cmVtICwgMC45MDkwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDYuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGdhcDogY2xhbXAoIDIuNXJlbSAsIDAuOTA5MDkwOTA5MXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA2Ljg3NXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2sge1xuICAgICAgZ2FwOiBjYWxjKDIuNXJlbSArIDQuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmluZm8tYmxvY2sge1xuICAgIGdhcDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLmluZm8tYmxvY2sge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkgYW5kIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2sge1xuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjc5NTQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMi41cmVtICkpIHtcbiAgICAuaW5mby1ibG9jayB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgMC43OTU0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDIuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgMC43OTU0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDIuNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2sge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuMjVyZW0gKyAxLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW5mby1ibG9jayB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICB9XG59XG4uaW5mby1ibG9ja19faXRlbS0tdG9wLWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9ja19faXRlbS0tdG9wLWxpbmUge1xuICAgIHdpZHRoOiAyNC40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCA4LjE1OTA5MDkwOTFyZW0gICsgIDIxLjcwNDU0NTQ1NDV2dyAsIDI0LjQzNzVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCA4LjE1OTA5MDkwOTFyZW0gICsgIDIxLjcwNDU0NTQ1NDV2dyAsIDI0LjQzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxMi41cmVtICwgOC4xNTkwOTA5MDkxcmVtICArICAyMS43MDQ1NDU0NTQ1dncgLCAyNC40Mzc1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19faXRlbS0tdG9wLWxpbmUge1xuICAgICAgd2lkdGg6IGNhbGMoMTIuNXJlbSArIDExLjkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW5mby1ibG9ja19faXRlbS0tdG9wLWxpbmUge1xuICAgIHdpZHRoOiAxMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9ja19faXRlbS0tdG9wLWxpbmUge1xuICAgIHBhZGRpbmctdG9wOiAyLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAxLjI1cmVtICwgMC45MzE4MTgxODE4cmVtICArICAxLjU5MDkwOTA5MDl2dyAsIDIuMTI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19faXRlbS0tdG9wLWxpbmUge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAxLjI1cmVtICwgMC45MzE4MTgxODE4cmVtICArICAxLjU5MDkwOTA5MDl2dyAsIDIuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMS4yNXJlbSAsIDAuOTMxODE4MTgxOHJlbSAgKyAgMS41OTA5MDkwOTA5dncgLCAyLjEyNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX2l0ZW0tLXRvcC1saW5lIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDEuMjVyZW0gKyAwLjg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gICAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gIH1cbn1cbi5pbmZvLWJsb2NrX190ZXh0LS1iaWcge1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2tfX3RleHQtLWJpZyB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxLjEyNXJlbSAsIDEuMDc5NTQ1NDU0NXJlbSAgKyAgMC4yMjcyNzI3MjczdncgLCAxLjI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19fdGV4dC0tYmlnIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDEuMTI1cmVtICwgMS4wNzk1NDU0NTQ1cmVtICArICAwLjIyNzI3MjcyNzN2dyAsIDEuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMS4xMjVyZW0gLCAxLjA3OTU0NTQ1NDVyZW0gICsgIDAuMjI3MjcyNzI3M3Z3ICwgMS4yNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX3RleHQtLWJpZyB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMS4xMjVyZW0gKyAwLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrX190ZXh0LS1iaWcge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIH1cbn1cbi5pbmZvLWJsb2NrX190ZXh0LS1iaWc6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9ja19fdGV4dC0tYmlnOjpiZWZvcmUge1xuICAgIHdpZHRoOiAyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxMy4xMjVyZW0gLCA4LjgwNjgxODE4MThyZW0gICsgIDIxLjU5MDkwOTA5MDl2dyAsIDI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19fdGV4dC0tYmlnOjpiZWZvcmUge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxMy4xMjVyZW0gLCA4LjgwNjgxODE4MThyZW0gICsgIDIxLjU5MDkwOTA5MDl2dyAsIDI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTMuMTI1cmVtICwgOC44MDY4MTgxODE4cmVtICArICAyMS41OTA5MDkwOTA5dncgLCAyNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX3RleHQtLWJpZzo6YmVmb3JlIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEzLjEyNXJlbSArIDExLjg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrX190ZXh0LS1iaWc6OmJlZm9yZSB7XG4gICAgd2lkdGg6IDEzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2tfX2l0ZW0tLWFjdGlvbiB7XG4gICAgd2lkdGg6IDI4LjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTAuNzg0MDkwOTA5MXJlbSAgKyAgMjQuMjA0NTQ1NDU0NXZ3ICwgMjguOTM3NXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX2l0ZW0tLWFjdGlvbiB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDEwLjc4NDA5MDkwOTFyZW0gICsgIDI0LjIwNDU0NTQ1NDV2dyAsIDI4LjkzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMC43ODQwOTA5MDkxcmVtICArICAyNC4yMDQ1NDU0NTQ1dncgLCAyOC45Mzc1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19faXRlbS0tYWN0aW9uIHtcbiAgICAgIHdpZHRoOiBjYWxjKDE1LjYyNXJlbSArIDEzLjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW5mby1ibG9ja19faXRlbS0tYWN0aW9uIHtcbiAgICB3aWR0aDogMTUuNjI1cmVtO1xuICB9XG59XG4uaW5mby1ibG9ja19fdGV4dC0tc21hbGwge1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICBmb250LXNpemU6IDEuMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC44OTIwNDU0NTQ1cmVtICArICAwLjIyNzI3MjcyNzN2dyAsIDEuMDYyNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuODkyMDQ1NDU0NXJlbSAgKyAgMC4yMjcyNzI3MjczdncgLCAxLjA2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC44OTIwNDU0NTQ1cmVtICArICAwLjIyNzI3MjcyNzN2dyAsIDEuMDYyNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjkzNzVyZW0gKyAwLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrX190ZXh0LS1zbWFsbCB7XG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbmZvLWJsb2NrX190ZXh0LS1zbWFsbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjk5NDMxODE4MThyZW0gICsgIDIuODQwOTA5MDkwOXZ3ICwgMy4xMjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX190ZXh0LS1zbWFsbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMC45OTQzMTgxODE4cmVtICArICAyLjg0MDkwOTA5MDl2dyAsIDMuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjk5NDMxODE4MThyZW0gICsgIDIuODQwOTA5MDkwOXZ3ICwgMy4xMjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX190ZXh0LS1zbWFsbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuNTYyNXJlbSArIDEuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrX190ZXh0LS1zbWFsbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5cbi5idG4gc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNTA7XG4gIGNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0biBzcGFuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4xMjVyZW0gLCAwLjY0NzcyNzI3MjdyZW0gICsgIDIuMzg2MzYzNjM2NHZ3ICwgMi40Mzc1cmVtICkpIHtcbiAgICAuYnRuIHNwYW4ge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMS4xMjVyZW0gLCAwLjY0NzcyNzI3MjdyZW0gICsgIDIuMzg2MzYzNjM2NHZ3ICwgMi40Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMTI1cmVtICwgMC42NDc3MjcyNzI3cmVtICArICAyLjM4NjM2MzYzNjR2dyAsIDIuNDM3NXJlbSApKSB7XG4gICAgLmJ0biBzcGFuIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygxLjEyNXJlbSArIDEuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG4gc3BhbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk1OS45OHB4KSB7XG4gIC5idG4gc3BhbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ2OS45OHB4KSB7XG4gIC5idG4gc3BhbiB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAyO1xuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tZGFyay1jbCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG4ge1xuICAgIHBhZGRpbmctdG9wOiAxLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMC42MjVyZW0gLCAwLjQyMDQ1NDU0NTVyZW0gICsgIDEuMDIyNzI3MjcyN3Z3ICwgMS4xODc1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMC42MjVyZW0gLCAwLjQyMDQ1NDU0NTVyZW0gICsgIDEuMDIyNzI3MjcyN3Z3ICwgMS4xODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMC42MjVyZW0gLCAwLjQyMDQ1NDU0NTVyZW0gICsgIDEuMDIyNzI3MjcyN3Z3ICwgMS4xODc1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDAuNjI1cmVtICsgMC41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0biB7XG4gICAgcGFkZGluZy10b3A6IDAuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYnRuIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDAuNjI1cmVtICwgMC40MjA0NTQ1NDU1cmVtICArICAxLjAyMjcyNzI3Mjd2dyAsIDEuMTg3NXJlbSApKSB7XG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDAuNjI1cmVtICwgMC40MjA0NTQ1NDU1cmVtICArICAxLjAyMjcyNzI3Mjd2dyAsIDEuMTg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDAuNjI1cmVtICwgMC40MjA0NTQ1NDU1cmVtICArICAxLjAyMjcyNzI3Mjd2dyAsIDEuMTg3NXJlbSApKSB7XG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygwLjYyNXJlbSArIDAuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG4ge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0biB7XG4gICAgd2lkdGg6IDEwLjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCA1cmVtICwgMi45NTQ1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAxMC42MjVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgd2lkdGg6IGNsYW1wKCA1cmVtICwgMi45NTQ1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAxMC42MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCA1cmVtICwgMi45NTQ1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAxMC42MjVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgd2lkdGg6IGNhbGMoNXJlbSArIDUuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0biB7XG4gICAgd2lkdGg6IDVyZW07XG4gIH1cbn1cbi5idG46aG92ZXIgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbn1cbi5idG46aG92ZXI6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cbi5idG46aG92ZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG59XG4uYnRuOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG46OmFmdGVyIHtcbiAgICB0b3A6IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAodG9wOiBjbGFtcCggMC43NXJlbSAsIDAuNDU0NTQ1NDU0NXJlbSAgKyAgMS40NzcyNzI3MjczdncgLCAxLjU2MjVyZW0gKSkge1xuICAgIC5idG46OmFmdGVyIHtcbiAgICAgIHRvcDogY2xhbXAoIDAuNzVyZW0gLCAwLjQ1NDU0NTQ1NDVyZW0gICsgIDEuNDc3MjcyNzI3M3Z3ICwgMS41NjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHRvcDogY2xhbXAoIDAuNzVyZW0gLCAwLjQ1NDU0NTQ1NDVyZW0gICsgIDEuNDc3MjcyNzI3M3Z3ICwgMS41NjI1cmVtICkpIHtcbiAgICAuYnRuOjphZnRlciB7XG4gICAgICB0b3A6IGNhbGMoMC43NXJlbSArIDAuODEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG46OmFmdGVyIHtcbiAgICB0b3A6IDAuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG46OmFmdGVyIHtcbiAgICByaWdodDogMi4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHJpZ2h0OiBjbGFtcCggMS4xODc1cmVtICwgMC43NTU2ODE4MTgycmVtICArICAyLjE1OTA5MDkwOTF2dyAsIDIuMzc1cmVtICkpIHtcbiAgICAuYnRuOjphZnRlciB7XG4gICAgICByaWdodDogY2xhbXAoIDEuMTg3NXJlbSAsIDAuNzU1NjgxODE4MnJlbSAgKyAgMi4xNTkwOTA5MDkxdncgLCAyLjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChyaWdodDogY2xhbXAoIDEuMTg3NXJlbSAsIDAuNzU1NjgxODE4MnJlbSAgKyAgMi4xNTkwOTA5MDkxdncgLCAyLjM3NXJlbSApKSB7XG4gICAgLmJ0bjo6YWZ0ZXIge1xuICAgICAgcmlnaHQ6IGNhbGMoMS4xODc1cmVtICsgMS4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0bjo6YWZ0ZXIge1xuICAgIHJpZ2h0OiAxLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NTkuOThweCkge1xuICAuYnRuOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmJ0bjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyNSUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xufVxuXG4uZGlyZWN0aW9ucyB7XG4gIG1heC13aWR0aDogMTMzNnB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZGlyZWN0aW9ucyB7XG4gICAgcGFkZGluZy1ib3R0b206IDguNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC4zNzVyZW0gLCAyLjc4NDA5MDkwOTFyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgOC43NXJlbSApKSB7XG4gICAgLmRpcmVjdGlvbnMge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCA0LjM3NXJlbSAsIDIuNzg0MDkwOTA5MXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA4Ljc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC4zNzVyZW0gLCAyLjc4NDA5MDkwOTFyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgOC43NXJlbSApKSB7XG4gICAgLmRpcmVjdGlvbnMge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoNC4zNzVyZW0gKyA0LjM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5kaXJlY3Rpb25zIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNC4zNzVyZW07XG4gIH1cbn1cblxuLndvcmtzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDMwcHg7XG59XG4ud29ya3MtbGlzdF9faXRlbSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwgMCwgMCwgMC4xMykgMCUsIHJnYmEoMCwgMCwgMCwgMC42NSkgMTAwJSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC53b3Jrcy1saXN0X19pdGVtIHtcbiAgICB3aWR0aDogMTlyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDEwLjEzNjM2MzYzNjRyZW0gICsgIDExLjgxODE4MTgxODJ2dyAsIDE5cmVtICkpIHtcbiAgICAud29ya3MtbGlzdF9faXRlbSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCAxMC4xMzYzNjM2MzY0cmVtICArICAxMS44MTgxODE4MTgydncgLCAxOXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCAxMC4xMzYzNjM2MzY0cmVtICArICAxMS44MTgxODE4MTgydncgLCAxOXJlbSApKSB7XG4gICAgLndvcmtzLWxpc3RfX2l0ZW0ge1xuICAgICAgd2lkdGg6IGNhbGMoMTIuNXJlbSArIDYuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC53b3Jrcy1saXN0X19pdGVtIHtcbiAgICB3aWR0aDogMTIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLndvcmtzLWxpc3RfX2l0ZW0ge1xuICAgIGhlaWdodDogMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGhlaWdodDogY2xhbXAoIDE3LjVyZW0gLCAxNC43NzI3MjcyNzI3cmVtICArICAxMy42MzYzNjM2MzY0dncgLCAyNXJlbSApKSB7XG4gICAgLndvcmtzLWxpc3RfX2l0ZW0ge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggMTcuNXJlbSAsIDE0Ljc3MjcyNzI3MjdyZW0gICsgIDEzLjYzNjM2MzYzNjR2dyAsIDI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDE3LjVyZW0gLCAxNC43NzI3MjcyNzI3cmVtICArICAxMy42MzYzNjM2MzY0dncgLCAyNXJlbSApKSB7XG4gICAgLndvcmtzLWxpc3RfX2l0ZW0ge1xuICAgICAgaGVpZ2h0OiBjYWxjKDE3LjVyZW0gKyA3LjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAud29ya3MtbGlzdF9faXRlbSB7XG4gICAgaGVpZ2h0OiAxNy41cmVtO1xuICB9XG59XG4ud29ya3MtbGlzdF9faXRlbTpob3ZlciB7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbn1cbi53b3Jrcy1saXN0X19pdGVtOmhvdmVyIC53b3Jrcy1saXN0X19pbmZvIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNnB4KTtcbn1cbi53b3Jrcy1saXN0X19pdGVtOmhvdmVyIC53b3Jrcy1saXN0X19jYXJkIHtcbiAgZmlsdGVyOiBibHVyKDdweCk7XG59XG4ud29ya3MtbGlzdF9fY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZpbHRlcjogYmx1cigwKTtcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuNXMgZWFzZTtcbn1cbi53b3Jrcy1saXN0X19pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNnB4KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC53b3Jrcy1saXN0X19pbmZvIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1LjgxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjAxNzA0NTQ1NDVyZW0gICsgIDcuNzI3MjcyNzI3M3Z3ICwgNS44MTI1cmVtICkpIHtcbiAgICAud29ya3MtbGlzdF9faW5mbyB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMS41NjI1cmVtICwgMC4wMTcwNDU0NTQ1cmVtICArICA3LjcyNzI3MjcyNzN2dyAsIDUuODEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMS41NjI1cmVtICwgMC4wMTcwNDU0NTQ1cmVtICArICA3LjcyNzI3MjcyNzN2dyAsIDUuODEyNXJlbSApKSB7XG4gICAgLndvcmtzLWxpc3RfX2luZm8ge1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYygxLjU2MjVyZW0gKyA0LjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLndvcmtzLWxpc3RfX2luZm8ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLndvcmtzLWxpc3RfX2luZm8ge1xuICAgIHBhZGRpbmctbGVmdDogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuNTYyNXJlbSAsIDAuOTk0MzE4MTgxOHJlbSAgKyAgMi44NDA5MDkwOTA5dncgLCAzLjEyNXJlbSApKSB7XG4gICAgLndvcmtzLWxpc3RfX2luZm8ge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMS41NjI1cmVtICwgMC45OTQzMTgxODE4cmVtICArICAyLjg0MDkwOTA5MDl2dyAsIDMuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuNTYyNXJlbSAsIDAuOTk0MzE4MTgxOHJlbSAgKyAgMi44NDA5MDkwOTA5dncgLCAzLjEyNXJlbSApKSB7XG4gICAgLndvcmtzLWxpc3RfX2luZm8ge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuNTYyNXJlbSArIDEuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC53b3Jrcy1saXN0X19pbmZvIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNTYyNXJlbTtcbiAgfVxufVxuLndvcmtzLWxpc3RfX3RleHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDI0cHggMCAyNHB4IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDk5Ljk4cHgpIHtcbiAgLndvcmtzLWxpc3RfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuLndvcmtzLWxpc3RfX21vcmUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ5OS45OHB4KSB7XG4gIC53b3Jrcy1saXN0X19tb3JlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZlYXR1cmVkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogOS44MTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuNjg3NXJlbSAsIDIuODIzODYzNjM2NHJlbSAgKyAgOS4zMTgxODE4MTgydncgLCA5LjgxMjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuNjg3NXJlbSAsIDIuODIzODYzNjM2NHJlbSAgKyAgOS4zMTgxODE4MTgydncgLCA5LjgxMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCA0LjY4NzVyZW0gLCAyLjgyMzg2MzYzNjRyZW0gICsgIDkuMzE4MTgxODE4MnZ3ICwgOS44MTI1cmVtICkpIHtcbiAgICAuZmVhdHVyZWQge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoNC42ODc1cmVtICsgNS4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZmVhdHVyZWQge1xuICAgIHBhZGRpbmctYm90dG9tOiA0LjY4NzVyZW07XG4gIH1cbn1cbi5mZWF0dXJlZF9fbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZmVhdHVyZWRfX2xpc3Qge1xuICAgIGdhcDogNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAwLjI4NDA5MDkwOTFyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19saXN0IHtcbiAgICAgIGdhcDogY2xhbXAoIDEuODc1cmVtICwgMC4yODQwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAwLjI4NDA5MDkwOTFyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19saXN0IHtcbiAgICAgIGdhcDogY2FsYygxLjg3NXJlbSArIDQuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZlYXR1cmVkX19saXN0IHtcbiAgICBnYXA6IDEuODc1cmVtO1xuICB9XG59XG4uZmVhdHVyZWRfX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZmVhdHVyZWRfX2l0ZW06aG92ZXIgLmZlYXR1cmVkX19idG4ge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZlYXR1cmVkX19pbWFnZSB7XG4gICAgd2lkdGg6IDIzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxMS41NjI1cmVtICwgNy4zNTc5NTQ1NDU1cmVtICArICAyMS4wMjI3MjcyNzI3dncgLCAyMy4xMjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9faW1hZ2Uge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxMS41NjI1cmVtICwgNy4zNTc5NTQ1NDU1cmVtICArICAyMS4wMjI3MjcyNzI3dncgLCAyMy4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxMS41NjI1cmVtICwgNy4zNTc5NTQ1NDU1cmVtICArICAyMS4wMjI3MjcyNzI3dncgLCAyMy4xMjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9faW1hZ2Uge1xuICAgICAgd2lkdGg6IGNhbGMoMTEuNTYyNXJlbSArIDExLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZmVhdHVyZWRfX2ltYWdlIHtcbiAgICB3aWR0aDogMTEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZlYXR1cmVkX19pbWFnZSB7XG4gICAgaGVpZ2h0OiAyNi43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggMTMuMzc1cmVtICwgOC41MTEzNjM2MzY0cmVtICArICAyNC4zMTgxODE4MTgydncgLCAyNi43NXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19pbWFnZSB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCAxMy4zNzVyZW0gLCA4LjUxMTM2MzYzNjRyZW0gICsgIDI0LjMxODE4MTgxODJ2dyAsIDI2Ljc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDEzLjM3NXJlbSAsIDguNTExMzYzNjM2NHJlbSAgKyAgMjQuMzE4MTgxODE4MnZ3ICwgMjYuNzVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9faW1hZ2Uge1xuICAgICAgaGVpZ2h0OiBjYWxjKDEzLjM3NXJlbSArIDEzLjM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mZWF0dXJlZF9faW1hZ2Uge1xuICAgIGhlaWdodDogMTMuMzc1cmVtO1xuICB9XG59XG4uZmVhdHVyZWRfX2xhYmVsIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZlYXR1cmVkX19sYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogMi4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi10b3A6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjUwNTY4MTgxODJyZW0gICsgIDIuMTU5MDkwOTA5MXZ3ICwgMi4xMjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9fbGFiZWwge1xuICAgICAgbWFyZ2luLXRvcDogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNTA1NjgxODE4MnJlbSAgKyAgMi4xNTkwOTA5MDkxdncgLCAyLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tdG9wOiBjbGFtcCggMC45Mzc1cmVtICwgMC41MDU2ODE4MTgycmVtICArICAyLjE1OTA5MDkwOTF2dyAsIDIuMTI1cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2xhYmVsIHtcbiAgICAgIG1hcmdpbi10b3A6IGNhbGMoMC45Mzc1cmVtICsgMS4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZlYXR1cmVkX19sYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogMC45Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZmVhdHVyZWRfX2xhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjI1cmVtICwgMC4xNTkwOTA5MDkxcmVtICArICAwLjQ1NDU0NTQ1NDV2dyAsIDAuNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19sYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMC4yNXJlbSAsIDAuMTU5MDkwOTA5MXJlbSAgKyAgMC40NTQ1NDU0NTQ1dncgLCAwLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuMjVyZW0gLCAwLjE1OTA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMC41cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2xhYmVsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMC4yNXJlbSArIDAuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZmVhdHVyZWRfX2xhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTk5Ljk4cHgpIHtcbiAgLmZlYXR1cmVkX19sYWJlbCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG4uZmVhdHVyZWRfX3R5cGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZmVhdHVyZWRfX2ltYWdlLS1iaWcge1xuICAgIHdpZHRoOiAzNy41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxMC4yMjcyNzI3MjczcmVtICArICAzNi4zNjM2MzYzNjM2dncgLCAzNy41cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2ltYWdlLS1iaWcge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTAuMjI3MjcyNzI3M3JlbSAgKyAgMzYuMzYzNjM2MzYzNnZ3ICwgMzcuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxMC4yMjcyNzI3MjczcmVtICArICAzNi4zNjM2MzYzNjM2dncgLCAzNy41cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2ltYWdlLS1iaWcge1xuICAgICAgd2lkdGg6IGNhbGMoMTcuNXJlbSArIDIwICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZlYXR1cmVkX19pbWFnZS0tYmlnIHtcbiAgICB3aWR0aDogMTcuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZlYXR1cmVkX19pbWFnZS0tYmlnIHtcbiAgICBoZWlnaHQ6IDI2Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAxMi4xMjVyZW0gLCA2LjgwNjgxODE4MThyZW0gICsgIDI2LjU5MDkwOTA5MDl2dyAsIDI2Ljc1cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2ltYWdlLS1iaWcge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggMTIuMTI1cmVtICwgNi44MDY4MTgxODE4cmVtICArICAyNi41OTA5MDkwOTA5dncgLCAyNi43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCAxMi4xMjVyZW0gLCA2LjgwNjgxODE4MThyZW0gICsgIDI2LjU5MDkwOTA5MDl2dyAsIDI2Ljc1cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2ltYWdlLS1iaWcge1xuICAgICAgaGVpZ2h0OiBjYWxjKDEyLjEyNXJlbSArIDE0LjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mZWF0dXJlZF9faW1hZ2UtLWJpZyB7XG4gICAgaGVpZ2h0OiAxMi4xMjVyZW07XG4gIH1cbn1cbi5mZWF0dXJlZF9faXRlbS0tdG9wIHtcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgcGFkZGluZy10b3A6IDE2MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAuZmVhdHVyZWRfX2l0ZW0tLXRvcCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG59XG4uZmVhdHVyZWRfX2l0ZW0tLWJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IC0xNjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLmZlYXR1cmVkX19pdGVtLS1ib3R0b20ge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbn1cbi5mZWF0dXJlZF9fYnRuIHtcbiAgbGVmdDogMTMwcHg7XG4gIHRvcDogMjAwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UsIHZpc2liaWxpdHkgMC41cyBlYXNlO1xufVxuXG4uaW50cm9kdWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogZmlyc3QgYmFzZWxpbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyb2R1Y3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjAzOTc3MjcyNzNyZW0gICsgIDIuNjEzNjM2MzYzNnZ3ICwgM3JlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4wMzk3NzI3MjczcmVtICArICAyLjYxMzYzNjM2MzZ2dyAsIDNyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMDM5NzcyNzI3M3JlbSAgKyAgMi42MTM2MzYzNjM2dncgLCAzcmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS41NjI1cmVtICsgMS40Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvZHVjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm9kdWN0aW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb24ge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygzLjEyNXJlbSArIDMuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvZHVjdGlvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvZHVjdGlvbiB7XG4gICAgcGFkZGluZy1yaWdodDogNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1yaWdodDogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb24ge1xuICAgICAgcGFkZGluZy1yaWdodDogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1yaWdodDogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb24ge1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYygzLjEyNXJlbSArIDMuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvZHVjdGlvbiB7XG4gICAgcGFkZGluZy1yaWdodDogMy4xMjVyZW07XG4gIH1cbn1cbi5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgbWFyZ2luLXJpZ2h0OiAzNzVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDMuMTI1cmVtICsgMy4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgIHdpZHRoOiAyNi41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDExLjY0NzcyNzI3MjdyZW0gICsgIDE5Ljg4NjM2MzYzNjR2dyAsIDI2LjU2MjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTEuNjQ3NzI3MjcyN3JlbSAgKyAgMTkuODg2MzYzNjM2NHZ3ICwgMjYuNTYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDExLjY0NzcyNzI3MjdyZW0gICsgIDE5Ljg4NjM2MzYzNjR2dyAsIDI2LjU2MjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICAgIHdpZHRoOiBjYWxjKDE1LjYyNXJlbSArIDEwLjkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgd2lkdGg6IDE1LjYyNXJlbTtcbiAgfVxufVxuLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG4gIGxlZnQ6IDY4MHB4O1xuICB0b3A6IDgwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZTo6YWZ0ZXIge1xuICAgIHdpZHRoOiA0LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAyLjE4NzVyZW0gLCAxLjM5MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNC4zNzVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlOjphZnRlciB7XG4gICAgICB3aWR0aDogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMzkyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMzkyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjM3NXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDIuMTg3NXJlbSArIDIuMTg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlOjphZnRlciB7XG4gICAgd2lkdGg6IDIuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkgYW5kIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjAzOTc3MjcyNzNyZW0gICsgIDIuNjEzNjM2MzYzNnZ3ICwgM3JlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMDM5NzcyNzI3M3JlbSAgKyAgMi42MTM2MzYzNjM2dncgLCAzcmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjAzOTc3MjcyNzNyZW0gICsgIDIuNjEzNjM2MzYzNnZ3ICwgM3JlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjU2MjVyZW0gKyAxLjQzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlOjphZnRlciB7XG4gICAgdG9wOiAtNDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkgYW5kIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgICBsZWZ0OiA2LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChsZWZ0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgICAgIGxlZnQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGxlZnQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uX190aXRsZTo6YWZ0ZXIge1xuICAgICAgbGVmdDogY2FsYygzLjEyNXJlbSArIDMuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgICBsZWZ0OiAzLjEyNXJlbTtcbiAgfVxufVxuXG46cm9vdCB7XG4gIC0tZGFyay1jbDogIzBFMEUwRTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvbnVsbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9ob21lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3V0aWxzL3ZhcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QURHRDs7QUNEQTs7O0VBR0Msc0JBQUE7QURJRDs7QUNNQTs7RUFFQyxZQUFBO0VBQ0EsZ0JBQUE7QURIRDs7QUNLQTtFQUNDLGNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JETlk7RUNPWixvQkROVTtFQ1FWLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QURIRDs7QUNLQTs7O0VBR0Msb0JEbEJZO0VDbUJaLGtCQUFBO0VBQ0Esb0JBQUE7QURGRDs7QUNJQTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QURERDs7QUNHQTtFQUNDLGNBQUE7RUFDQSxxQkFBQTtBREFEOztBQ0VBO0VBQ0MsZ0JBQUE7QURDRDs7QUNDQTtFQUNDLG1CQUFBO0FERUQ7O0FDQUE7Ozs7OztFQU1DLG9CQUFBO0VBQ0Esa0JBQUE7QURHRDs7QUFIQztFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQU1GO0FBQ0E7RUFDQyxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0Q7QUFBQztFQUxEO0lBTUUsY0FBQTtFQUdBO0FBQ0Y7QUFEQztFQUNDLGNBQUE7QUFHRjtBQUFDO0VBQ0MsWUFBQTtBQUVGOztBQUVBOzs7OztDQUFBO0FBUUM7RUFFRSxnQkFBQTtFQUNBLGNBQUE7RUFJQyxvQkFBQTtBQUxKOztBRTlEQTtFQUNDLGtCQUFBO0FGaUVEO0FFaEVDO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7QUZrRUY7O0FFOURDO0VBQ0MsbUJBQUE7QUZpRUY7O0FHcEhBO0VBQ0MsZ0NBQUE7RUFDQSxXQUFBO0FIdUhEO0FHdEhDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FId0hGO0FHdkhFO0VBSEQ7SUFJRSw4QkFBQTtJQUNBLFlBQUE7RUgwSEQ7QUFDRjtBR3ZIQztFQUNDLGtCQUFBO0FIeUhGO0FJeERFO0VEbEVEO0lDbUVFLGtCQUFBO0VKMkREO0FBQ0Y7QUl4REM7RUFFQztJRHpFRDtNQzBFRSw0RUFoQmM7SUowRWI7RUFDRjtFSXhEQTtJRDdFRDtNQzhFRSwwREFBQTtJSjJEQztFQUNGO0FBQ0Y7QUl6REU7RURsRkQ7SUNtRkUsb0JBQUE7RUo0REQ7QUFDRjs7QUd6SUM7RUFHQyxhQUFBO0VBQ0EsV0FBQTtBSDBJRjtBSW5GRTtFRDNERDtJQzRERSxzQkFBQTtFSnNGRDtBQUNGO0FJbkZDO0VBRUM7SURsRUQ7TUNtRUUsZ0ZBaEJjO0lKcUdiO0VBQ0Y7RUluRkE7SUR0RUQ7TUN1RUUsMkRBQUE7SUpzRkM7RUFDRjtBQUNGO0FJcEZFO0VEM0VEO0lDNEVFLHNCQUFBO0VKdUZEO0FBQ0Y7QUl6R0U7RUQzREQ7SUM0REUseUJBQUE7RUo0R0Q7QUFDRjtBSXpHQztFQUVDO0lEbEVEO01DbUVFLG1GQWhCYztJSjJIYjtFQUNGO0VJekdBO0lEdEVEO01DdUVFLDhEQUFBO0lKNEdDO0VBQ0Y7QUFDRjtBSTFHRTtFRDNFRDtJQzRFRSx5QkFBQTtFSjZHRDtBQUNGO0FHckxFO0VBTEQ7SUFNRSxzQkFBQTtJQUNBLG1CQUFBO0VId0xEO0FBQ0Y7QUdyTEM7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7QUh1TEY7QUl6SUU7RURoREQ7SUNpREUscUJBQUE7RUo0SUQ7QUFDRjtBSXpJQztFQUVDO0lEdkREO01Dd0RFLDhFQWhCYztJSjJKYjtFQUNGO0VJeklBO0lEM0REO01DNERFLDJEQUFBO0lKNElDO0VBQ0Y7QUFDRjtBSTFJRTtFRGhFRDtJQ2lFRSxzQkFBQTtFSjZJRDtBQUNGO0FJL0pFO0VEaEREO0lDaURFLFdBQUE7RUprS0Q7QUFDRjtBSS9KQztFQUVDO0lEdkREO01Dd0RFLG9FQWhCYztJSmlMYjtFQUNGO0VJL0pBO0lEM0REO01DNERFLGtEQUFBO0lKa0tDO0VBQ0Y7QUFDRjtBSWhLRTtFRGhFRDtJQ2lFRSxhQUFBO0VKbUtEO0FBQ0Y7QUcvTkU7RUFORDtJQU9FLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxTQUFBO0lBQ0EsT0FBQTtFSGtPRDtBQUNGO0FHL05DO0VBR0MsZUFBQTtFQUNBLGtCQUFBO0FIK05GO0FJak1FO0VEbENEO0lDbUNFLHNCQUFBO0VKb01EO0FBQ0Y7QUlqTUM7RUFFQztJRHpDRDtNQzBDRSxnRkFoQmM7SUptTmI7RUFDRjtFSWpNQTtJRDdDRDtNQzhDRSwyREFBQTtJSm9NQztFQUNGO0FBQ0Y7QUlsTUU7RURsREQ7SUNtREUsc0JBQUE7RUpxTUQ7QUFDRjtBSXZORTtFRGxDRDtJQ21DRSx5QkFBQTtFSjBORDtBQUNGO0FJdk5DO0VBRUM7SUR6Q0Q7TUMwQ0UsbUZBaEJjO0lKeU9iO0VBQ0Y7RUl2TkE7SUQ3Q0Q7TUM4Q0UsOERBQUE7SUowTkM7RUFDRjtBQUNGO0FJeE5FO0VEbEREO0lDbURFLHlCQUFBO0VKMk5EO0FBQ0Y7QUd6UUU7RUFORDtJQU9FLGVBQUE7RUg0UUQ7QUFDRjtBRzFRRTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHdFQUFBO0FINFFIO0FHeFFHO0VBQ0Msd0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUgwUUo7O0FHclFBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FId1FEO0FJMVFFO0VEQUY7SUNDRyxjQUFBO0VKNlFEO0FBQ0Y7QUkxUUM7RUFFQztJRFBGO01DUUcsdUVBaEJjO0lKNFJiO0VBQ0Y7RUkxUUE7SURYRjtNQ1lHLG1EQUFBO0lKNlFDO0VBQ0Y7QUFDRjtBSTNRRTtFRGhCRjtJQ2lCRyxhQUFBO0VKOFFEO0FBQ0Y7QUczUkM7RUFMRDtJQU1FLFNBQUE7SUFDQSxPQUFBO0VIOFJBO0FBQ0Y7QUczUkU7RUFERDtJQUVFLFdBQUE7SUFDQSxZQUFBO0VIOFJEO0FBQ0Y7O0FHdlJBO0VBQ0M7SUFDQyxlQUFBO0lBQ0EsU0FBQTtJQUNBLE9BQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLDRCQUFBO0lBQ0EsZ0NBQUE7SUFDQSxjQUFBO0lBQ0EsK0JBQUE7RUgwUkE7QUFDRjtBR3RSQztFQUREO0lBRUUsYUFBQTtFSHlSQTtBQUNGO0FHeFJDO0VBSkQ7SUFLRSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0VIMlJBO0FBQ0Y7QUczUkU7RUFWRjtJQVdHLGVBQUE7RUg4UkQ7QUFDRjtBR3RTQztFQVNDO0lBR0MsV0FBQTtJQUNBLDRCQUFBO0lBQ0EsUUFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0Esc0JBQUE7RUg4UkQ7RUc1UkE7SUFDQyxNQUFBO0VIOFJEO0VHNVJBO0lBQ0MsU0FBQTtFSDhSRDtFRzVSQTtJQUNDLDBCQUFBO0VIOFJEO0VHM1JDO0lBQ0Msd0JBQUE7RUg2UkY7RUczUkM7SUFDQyxRQUFBO0VINlJGO0VHeFJDO0lBQ0MsMEJBQUE7SUFDQSx5QkFBQTtFSDBSRjtFR3hSQztJQUNDLDZCQUFBO0lBQ0Esd0JBQUE7RUgwUkY7QUFDRjs7QUs1YkE7RUFDSSxnQ0FBQTtFQUNBLGtCQUFBO0FMK2JKO0FJcFhFO0VDN0VGO0lEOEVHLGFBQUE7RUp1WEQ7QUFDRjtBSXBYQztFQUVDO0lDcEZGO01EcUZHLHlFQWhCYztJSnNZYjtFQUNGO0VJcFhBO0lDeEZGO01EeUZHLHVEQUFBO0lKdVhDO0VBQ0Y7QUFDRjtBSXJYRTtFQzdGRjtJRDhGRyxpQkFBQTtFSndYRDtBQUNGO0FLbmRJO0VBQ0ksa0JBQUE7QUxxZFI7O0FLamRBO0VBQ0ksa0JBQUE7RUFJQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FMaWRKO0FJcFpFO0VDcEVGO0lEcUVHLGdCQUFBO0VKdVpEO0FBQ0Y7QUlwWkM7RUFFQztJQzNFRjtNRDRFRyx5RUFoQmM7SUpzYWI7RUFDRjtFSXBaQTtJQy9FRjtNRGdGRyxtREFBQTtJSnVaQztFQUNGO0FBQ0Y7QUlyWkU7RUNwRkY7SURxRkcsZ0JBQUE7RUp3WkQ7QUFDRjtBSTFhRTtFQ3BFRjtJRHFFRyxhQUFBO0VKNmFEO0FBQ0Y7QUkxYUM7RUFFQztJQzNFRjtNRDRFRyx5RUFoQmM7SUo0YmI7RUFDRjtFSTFhQTtJQy9FRjtNRGdGRyxzREFBQTtJSjZhQztFQUNGO0FBQ0Y7QUkzYUU7RUNwRkY7SURxRkcsZUFBQTtFSjhhRDtBQUNGO0FJaGNFO0VDcEVGO0lEcUVHLFdBQUE7RUptY0Q7QUFDRjtBSWhjQztFQUVDO0lDM0VGO01ENEVHLG9FQWhCYztJSmtkYjtFQUNGO0VJaGNBO0lDL0VGO01EZ0ZHLG9EQUFBO0lKbWNDO0VBQ0Y7QUFDRjtBSWpjRTtFQ3BGRjtJRHFGRyxlQUFBO0VKb2NEO0FBQ0Y7QUtqaEJRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBTGtoQlo7QUk3ZEU7RUMzRE07SUQ0REwsY0FBQTtFSmdlRDtBQUNGO0FJN2RDO0VBRUM7SUNsRU07TURtRUwsdUVBaEJjO0lKK2ViO0VBQ0Y7RUk3ZEE7SUN0RU07TUR1RUwsb0RBQUE7SUpnZUM7RUFDRjtBQUNGO0FJOWRFO0VDM0VNO0lENEVMLGVBQUE7RUppZUQ7QUFDRjtBSW5mRTtFQzNETTtJRDRETCxjQUFBO0VKc2ZEO0FBQ0Y7QUluZkM7RUFFQztJQ2xFTTtNRG1FTCwwREFoQmM7SUpxZ0JiO0VBQ0Y7RUluZkE7SUN0RU07TUR1RUwscURBQUE7SUpzZkM7RUFDRjtBQUNGO0FJcGZFO0VDM0VNO0lENEVMLGVBQUE7RUp1ZkQ7QUFDRjtBSXpnQkU7RUNqREU7SURrREQsbUJBQUE7RUo0Z0JEO0FBQ0Y7QUl6Z0JDO0VBRUM7SUN4REU7TUR5REQsMkVBaEJjO0lKMmhCYjtFQUNGO0VJemdCQTtJQzVERTtNRDZERCx1REFBQTtJSjRnQkM7RUFDRjtBQUNGO0FJMWdCRTtFQ2pFRTtJRGtFRCxrQkFBQTtFSjZnQkQ7QUFDRjs7QUsxa0JBO0VBQ1Esa0JBQUE7RUFJQSxzQkFBQTtBTDBrQlI7QUlwaUJFO0VDM0NGO0lENENHLGVBQUE7RUp1aUJEO0FBQ0Y7QUlwaUJDO0VBRUM7SUNsREY7TURtREcseUVBaEJjO0lKc2pCYjtFQUNGO0VJcGlCQTtJQ3RERjtNRHVERyxtREFBQTtJSnVpQkM7RUFDRjtBQUNGO0FJcmlCRTtFQzNERjtJRDRERyxhQUFBO0VKd2lCRDtBQUNGO0FJMWpCRTtFQzNDRjtJRDRDRyxhQUFBO0VKNmpCRDtBQUNGO0FJMWpCQztFQUVDO0lDbERGO01EbURHLHdFQWhCYztJSjRrQmI7RUFDRjtFSTFqQkE7SUN0REY7TUR1REcsb0RBQUE7SUo2akJDO0VBQ0Y7QUFDRjtBSTNqQkU7RUMzREY7SUQ0REcsY0FBQTtFSjhqQkQ7QUFDRjtBSWhsQkU7RUMzQ0Y7SUQ0Q0csZUFBQTtFSm1sQkQ7QUFDRjtBSWhsQkM7RUFFQztJQ2xERjtNRG1ERywwRUFoQmM7SUprbUJiO0VBQ0Y7RUlobEJBO0lDdERGO01EdURHLG1EQUFBO0lKbWxCQztFQUNGO0FBQ0Y7QUlqbEJFO0VDM0RGO0lENERHLGVBQUE7RUpvbEJEO0FBQ0Y7QUszb0JJO0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtBTDRvQlI7QUk1bUJFO0VDckNFO0lEc0NELG1CQUFBO0VKK21CRDtBQUNGO0FJNW1CQztFQUVDO0lDNUNFO01ENkNELDJFQWhCYztJSjhuQmI7RUFDRjtFSTVtQkE7SUNoREU7TURpREQsdURBQUE7SUorbUJDO0VBQ0Y7QUFDRjtBSTdtQkU7RUNyREU7SURzREQsa0JBQUE7RUpnbkJEO0FBQ0Y7QUtqcUJRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FMbXFCWjtBS2hxQkk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUxrcUJSOztBSzlwQkE7RUFDSSxrQkFBQTtFQUtBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EscURBQUE7QUw0cEJKO0FJenBCRTtFQ2RGO0lEZUcsY0FBQTtFSjRwQkQ7QUFDRjtBSXpwQkM7RUFFQztJQ3JCRjtNRHNCRyxxRUFoQmM7SUoycUJiO0VBQ0Y7RUl6cEJBO0lDekJGO01EMEJHLGdEQUFBO0lKNHBCQztFQUNGO0FBQ0Y7QUkxcEJFO0VDOUJGO0lEK0JHLFVBQUE7RUo2cEJEO0FBQ0Y7QUkvcUJFO0VDZEY7SURlRyxnQkFBQTtFSmtyQkQ7QUFDRjtBSS9xQkM7RUFFQztJQ3JCRjtNRHNCRywwRUFoQmM7SUppc0JiO0VBQ0Y7RUkvcUJBO0lDekJGO01EMEJHLG1EQUFBO0lKa3JCQztFQUNGO0FBQ0Y7QUlockJFO0VDOUJGO0lEK0JHLGNBQUE7RUptckJEO0FBQ0Y7QUlyc0JFO0VDZEY7SURlRyxlQUFBO0VKd3NCRDtBQUNGO0FJcnNCQztFQUVDO0lDckJGO01Ec0JHLHlFQWhCYztJSnV0QmI7RUFDRjtFSXJzQkE7SUN6QkY7TUQwQkcsc0RBQUE7SUp3c0JDO0VBQ0Y7QUFDRjtBSXRzQkU7RUM5QkY7SUQrQkcsZ0JBQUE7RUp5c0JEO0FBQ0Y7QUkzdEJFO0VDZEY7SURlRyxnQkFBQTtFSjh0QkQ7QUFDRjtBSTN0QkM7RUFFQztJQ3JCRjtNRHNCRywwRUFoQmM7SUo2dUJiO0VBQ0Y7RUkzdEJBO0lDekJGO01EMEJHLHVEQUFBO0lKOHRCQztFQUNGO0FBQ0Y7QUk1dEJFO0VDOUJGO0lEK0JHLGlCQUFBO0VKK3RCRDtBQUNGO0FJanZCRTtFQ2RGO0lEZUcsb0JBQUE7RUpvdkJEO0FBQ0Y7QUlqdkJDO0VBRUM7SUNyQkY7TURzQkcsNEVBaEJjO0lKbXdCYjtFQUNGO0VJanZCQTtJQ3pCRjtNRDBCRyx3REFBQTtJSm92QkM7RUFDRjtBQUNGO0FJbHZCRTtFQzlCRjtJRCtCRyxrQkFBQTtFSnF2QkQ7QUFDRjtBS3h3Qkk7RUFDSSxxQkFBQTtFQUNBLGlDQUFBO0FMMHdCUjs7QUkzd0JFO0VDTUU7SURMRCxnQkFBQTtFSit3QkQ7QUFDRjtBSTV3QkM7RUFFQztJQ0RFO01ERUQsMEVBaEJjO0lKOHhCYjtFQUNGO0VJNXdCQTtJQ0xFO01ETUQsb0RBQUE7SUord0JDO0VBQ0Y7QUFDRjtBSTd3QkU7RUNWRTtJRFdELGdCQUFBO0VKZ3hCRDtBQUNGOztBS3Z4QkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUwweEJKO0FJdnlCRTtFQ1dGO0lEVkcsZUFBQTtFSjB5QkQ7QUFDRjtBSXZ5QkM7RUFFQztJQ0lGO01ESEcsd0VBYmU7SUpzekJkO0VBQ0Y7RUl2eUJBO0lDQUY7TURDRyxrREFBQTtJSjB5QkM7RUFDRjtBQUNGO0FJeHlCRTtFQ0xGO0lETUcsV0FBQTtFSjJ5QkQ7QUFDRjtBSzl5Qkk7RUFKSjtJQUtRLGFBQUE7RUxpekJOO0FBQ0Y7O0FLL3lCQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBTGt6Qko7QUl2MEJFO0VDbUJGO0lEbEJHLGdCQUFBO0VKMDBCRDtBQUNGO0FJdjBCQztFQUVDO0lDWUY7TURYRyx5RUFiZTtJSnMxQmQ7RUFDRjtFSXYwQkE7SUNRRjtNRFBHLG1EQUFBO0lKMDBCQztFQUNGO0FBQ0Y7QUl4MEJFO0VDR0Y7SURGRyxZQUFBO0VKMjBCRDtBQUNGO0FLdDBCSTtFQUpKO0lBS1EsYUFBQTtFTHkwQk47QUFDRjs7QUlsMkJFO0VDK0JGO0lEOUJHLGtCQUFBO0VKczJCRDtBQUNGO0FJbjJCQztFQUVDO0lDd0JGO01EdkJHLDJFQWhCYztJSnEzQmI7RUFDRjtFSW4yQkE7SUNvQkY7TURuQkcsdURBQUE7SUpzMkJDO0VBQ0Y7QUFDRjtBSXAyQkU7RUNlRjtJRGRHLG1CQUFBO0VKdTJCRDtBQUNGO0FLdjFCSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FMeTFCUjs7QUt0MUJBO0VBR0ksY0FBQTtFQUNBLGtCQUFBO0FMdTFCSjtBSWw0QkU7RUN1Q0Y7SUR0Q0csaUJBQUE7RUpxNEJEO0FBQ0Y7QUlsNEJDO0VBRUM7SUNnQ0Y7TUQvQkcsNkVBaEJjO0lKbzVCYjtFQUNGO0VJbDRCQTtJQzRCRjtNRDNCRyx1REFBQTtJSnE0QkM7RUFDRjtBQUNGO0FJbjRCRTtFQ3VCRjtJRHRCRyxnQkFBQTtFSnM0QkQ7QUFDRjtBSXg1QkU7RUN1Q0Y7SUR0Q0csd0JBQUE7RUoyNUJEO0FBQ0Y7QUl4NUJDO0VBRUM7SUNnQ0Y7TUQvQkcsK0VBaEJjO0lKMDZCYjtFQUNGO0VJeDVCQTtJQzRCRjtNRDNCRywyREFBQTtJSjI1QkM7RUFDRjtBQUNGO0FJejVCRTtFQ3VCRjtJRHRCRyxxQkFBQTtFSjQ1QkQ7QUFDRjtBS2w0Qkk7RUFFSSxnQkFBQTtBTG00QlI7QUlqN0JFO0VDNENFO0lEM0NELHdCQUFBO0VKbzdCRDtBQUNGO0FJajdCQztFQUVDO0lDcUNFO01EcENELGtGQWhCYztJSm04QmI7RUFDRjtFSWo3QkE7SUNpQ0U7TURoQ0QsNkRBQUE7SUpvN0JDO0VBQ0Y7QUFDRjtBSWw3QkU7RUM0QkU7SUQzQkQsd0JBQUE7RUpxN0JEO0FBQ0Y7QUt0NUJJO0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtBTHU1QlI7QUkzOEJFO0VDaURFO0lEaERELG1CQUFBO0VKODhCRDtBQUNGO0FJMzhCQztFQUVDO0lDMENFO01EekNELDBFQWhCYztJSjY5QmI7RUFDRjtFSTM4QkE7SUNzQ0U7TURyQ0Qsc0RBQUE7SUo4OEJDO0VBQ0Y7QUFDRjtBSTU4QkU7RUNpQ0U7SURoQ0QsaUJBQUE7RUorOEJEO0FBQ0Y7O0FLMTZCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBTDY2Qko7QUl0K0JFO0VDdURGO0lEdERHLG9CQUFBO0VKeStCRDtBQUNGO0FJdCtCQztFQUVDO0lDZ0RGO01EL0NHLDZFQWhCYztJSncvQmI7RUFDRjtFSXQrQkE7SUM0Q0Y7TUQzQ0csMERBQUE7SUp5K0JDO0VBQ0Y7QUFDRjtBSXYrQkU7RUN1Q0Y7SUR0Q0csc0JBQUE7RUowK0JEO0FBQ0Y7QUk1L0JFO0VDdURGO0lEdERHLGFBQUE7RUorL0JEO0FBQ0Y7QUk1L0JDO0VBRUM7SUNnREY7TUQvQ0csb0VBaEJjO0lKOGdDYjtFQUNGO0VJNS9CQTtJQzRDRjtNRDNDRyxnREFBQTtJSisvQkM7RUFDRjtBQUNGO0FJNy9CRTtFQ3VDRjtJRHRDRyxXQUFBO0VKZ2dDRDtBQUNGO0FLdDlCSTtFQUxKO0lBTVEsc0JBQUE7RUx5OUJOO0FBQ0Y7QUl2aENFO0VDdURGO0lEdERHLG9CQUFBO0VKMGhDRDtBQUNGO0FJdmhDQztFQUVDO0lDZ0RGO01EL0NHLDRFQWhCYztJSnlpQ2I7RUFDRjtFSXZoQ0E7SUM0Q0Y7TUQzQ0cseURBQUE7SUowaENDO0VBQ0Y7QUFDRjtBSXhoQ0U7RUN1Q0Y7SUR0Q0cscUJBQUE7RUoyaENEO0FBQ0Y7QUs1K0JJO0VBR0ksa0JBQUE7QUw0K0JSO0FJaGpDRTtFQ2lFRTtJRGhFRCxpQkFBQTtFSm1qQ0Q7QUFDRjtBSWhqQ0M7RUFFQztJQzBERTtNRHpERCwwRUFoQmM7SUpra0NiO0VBQ0Y7RUloakNBO0lDc0RFO01EckRELHFEQUFBO0lKbWpDQztFQUNGO0FBQ0Y7QUlqakNFO0VDaURFO0lEaERELGNBQUE7RUpvakNEO0FBQ0Y7QUl0a0NFO0VDaUVFO0lEaEVELHFCQUFBO0VKeWtDRDtBQUNGO0FJdGtDQztFQUVDO0lDMERFO01EekRELDZFQWhCYztJSndsQ2I7RUFDRjtFSXRrQ0E7SUNzREU7TURyREQseURBQUE7SUp5a0NDO0VBQ0Y7QUFDRjtBSXZrQ0U7RUNpREU7SURoREQsb0JBQUE7RUowa0NEO0FBQ0Y7QUtyaENJO0VBRUksZ0JBQUE7QUxzaENSO0FJL2xDRTtFQ3VFRTtJRHRFRCxrQkFBQTtFSmttQ0Q7QUFDRjtBSS9sQ0M7RUFFQztJQ2dFRTtNRC9ERCwyRUFoQmM7SUppbkNiO0VBQ0Y7RUkvbENBO0lDNERFO01EM0RELHdEQUFBO0lKa21DQztFQUNGO0FBQ0Y7QUlobUNFO0VDdURFO0lEdERELG1CQUFBO0VKbW1DRDtBQUNGO0FLMWlDUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUVBLGdDQUFBO0FMMmlDWjtBSTduQ0U7RUMyRU07SUQxRUwsWUFBQTtFSmdvQ0Q7QUFDRjtBSTduQ0M7RUFFQztJQ29FTTtNRG5FTCx1RUFoQmM7SUorb0NiO0VBQ0Y7RUk3bkNBO0lDZ0VNO01EL0RMLHNEQUFBO0lKZ29DQztFQUNGO0FBQ0Y7QUk5bkNFO0VDMkRNO0lEMURMLGdCQUFBO0VKaW9DRDtBQUNGO0FJbnBDRTtFQ3NGRTtJRHJGRCxpQkFBQTtFSnNwQ0Q7QUFDRjtBSW5wQ0M7RUFFQztJQytFRTtNRDlFRCw2RUFoQmM7SUpxcUNiO0VBQ0Y7RUlucENBO0lDMkVFO01EMUVELHVEQUFBO0lKc3BDQztFQUNGO0FBQ0Y7QUlwcENFO0VDc0VFO0lEckVELGdCQUFBO0VKdXBDRDtBQUNGO0FLL2tDSTtFQUdJLGdCQUFBO0FMK2tDUjtBSTVxQ0U7RUMwRkU7SUR6RkQsb0JBQUE7RUorcUNEO0FBQ0Y7QUk1cUNDO0VBRUM7SUNtRkU7TURsRkQsOEVBaEJjO0lKOHJDYjtFQUNGO0VJNXFDQTtJQytFRTtNRDlFRCx5REFBQTtJSitxQ0M7RUFDRjtBQUNGO0FJN3FDRTtFQzBFRTtJRHpFRCxvQkFBQTtFSmdyQ0Q7QUFDRjtBSWxzQ0U7RUMwRkU7SUR6RkQsdUJBQUE7RUpxc0NEO0FBQ0Y7QUlsc0NDO0VBRUM7SUNtRkU7TURsRkQsaUZBaEJjO0lKb3RDYjtFQUNGO0VJbHNDQTtJQytFRTtNRDlFRCw4REFBQTtJSnFzQ0M7RUFDRjtBQUNGO0FJbnNDRTtFQzBFRTtJRHpFRCx3QkFBQTtFSnNzQ0Q7QUFDRjs7QUt4bkNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBTDJuQ0o7QUk5dENFO0VDZ0dGO0lEL0ZHLHVCQUFBO0VKaXVDRDtBQUNGO0FJOXRDQztFQUVDO0lDeUZGO01EeEZHLGdGQWhCYztJSmd2Q2I7RUFDRjtFSTl0Q0E7SUNxRkY7TURwRkcsNERBQUE7SUppdUNDO0VBQ0Y7QUFDRjtBSS90Q0U7RUNnRkY7SUQvRUcsc0JBQUE7RUprdUNEO0FBQ0Y7QUsvb0NJO0VBTEo7SUFNUSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VMa3BDTjtBQUNGO0FLanBDSTtFQVZKO0lBV1EsZUFBQTtFTG9wQ047QUFDRjs7QUtqcENBO0VBSUksZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7QUxpcENKO0FJM3dDRTtFQytHRjtJRDlHRyxzQkFBQTtFSjh3Q0Q7QUFDRjtBSTN3Q0M7RUFFQztJQ3dHRjtNRHZHRywrRUFoQmM7SUo2eENiO0VBQ0Y7RUkzd0NBO0lDb0dGO01EbkdHLDJEQUFBO0lKOHdDQztFQUNGO0FBQ0Y7QUk1d0NFO0VDK0ZGO0lEOUZHLHFCQUFBO0VKK3dDRDtBQUNGO0FJanlDRTtFQytHRjtJRDlHRyx5QkFBQTtFSm95Q0Q7QUFDRjtBSWp5Q0M7RUFFQztJQ3dHRjtNRHZHRyxrRkFoQmM7SUptekNiO0VBQ0Y7RUlqeUNBO0lDb0dGO01EbkdHLDhEQUFBO0lKb3lDQztFQUNGO0FBQ0Y7QUlseUNFO0VDK0ZGO0lEOUZHLHdCQUFBO0VKcXlDRDtBQUNGO0FJdnpDRTtFQytHRjtJRDlHRyxnQkFBQTtFSjB6Q0Q7QUFDRjtBSXZ6Q0M7RUFFQztJQ3dHRjtNRHZHRyxzRUFoQmM7SUp5MENiO0VBQ0Y7RUl2ekNBO0lDb0dGO01EbkdHLGdEQUFBO0lKMHpDQztFQUNGO0FBQ0Y7QUl4ekNFO0VDK0ZGO0lEOUZHLFdBQUE7RUoyekNEO0FBQ0Y7QUsvc0NRO0VBQ0kscUJBQUE7QUxpdENaO0FLL3NDUTtFQUNJLHdCQUFBO0FMaXRDWjtBSy9zQ1E7RUFDSSxnQ0FBQTtBTGl0Q1o7QUs3c0NJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBR0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FMNnNDUjtBSTkxQ0U7RUN5SUU7SUR4SUQsY0FBQTtFSmkyQ0Q7QUFDRjtBSTkxQ0M7RUFFQztJQ2tJRTtNRGpJRCxzRUFoQmM7SUpnM0NiO0VBQ0Y7RUk5MUNBO0lDOEhFO01EN0hELGtEQUFBO0lKaTJDQztFQUNGO0FBQ0Y7QUkvMUNFO0VDeUhFO0lEeEhELFlBQUE7RUprMkNEO0FBQ0Y7QUlwM0NFO0VDeUlFO0lEeElELGVBQUE7RUp1M0NEO0FBQ0Y7QUlwM0NDO0VBRUM7SUNrSUU7TURqSUQseUVBaEJjO0lKczRDYjtFQUNGO0VJcDNDQTtJQzhIRTtNRDdIRCxzREFBQTtJSnUzQ0M7RUFDRjtBQUNGO0FJcjNDRTtFQ3lIRTtJRHhIRCxnQkFBQTtFSnczQ0Q7QUFDRjtBS3h2Q1E7RUFUSjtJQVVRLGFBQUE7RUwydkNWO0FBQ0Y7QUt4dkNJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUwwdkNSOztBS3B2Q0E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FMdXZDSjtBSWg2Q0U7RUNvS0Y7SURuS0csdUJBQUE7RUptNkNEO0FBQ0Y7QUloNkNDO0VBRUM7SUM2SkY7TUQ1SkcsZ0ZBaEJjO0lKazdDYjtFQUNGO0VJaDZDQTtJQ3lKRjtNRHhKRyw2REFBQTtJSm02Q0M7RUFDRjtBQUNGO0FJajZDRTtFQ29KRjtJRG5KRyx3QkFBQTtFSm82Q0Q7QUFDRjs7QUt6d0NBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUw0d0NKO0FLM3dDSTtFQUVJLHFGQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtBTDJ3Q1I7QUlsOENFO0VDa0xFO0lEakxELFlBQUE7RUpxOENEO0FBQ0Y7QUlsOENDO0VBRUM7SUMyS0U7TUQxS0Qsc0VBaEJjO0lKbzlDYjtFQUNGO0VJbDhDQTtJQ3VLRTtNRHRLRCxpREFBQTtJSnE4Q0M7RUFDRjtBQUNGO0FJbjhDRTtFQ2tLRTtJRGpLRCxjQUFBO0VKczhDRDtBQUNGO0FJeDlDRTtFQ2tMRTtJRGpMRCxhQUFBO0VKMjlDRDtBQUNGO0FJeDlDQztFQUVDO0lDMktFO01EMUtELHVFQWhCYztJSjArQ2I7RUFDRjtFSXg5Q0E7SUN1S0U7TUR0S0Qsa0RBQUE7SUoyOUNDO0VBQ0Y7QUFDRjtBSXo5Q0U7RUNrS0U7SURqS0QsZUFBQTtFSjQ5Q0Q7QUFDRjtBS3R6Q1E7RUFDSSwyQkFBQTtBTHd6Q1o7QUt2ekNXO0VBQ0ssNEJBQUE7QUx5ekNoQjtBS3Z6Q1c7RUFDQyxpQkFBQTtBTHl6Q1o7QUtwekNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUxzekNSO0FLbnpDQztFQUNPLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFHQSwyQkFBQTtFQUNBLCtCQUFBO0FMbXpDUjtBSXBnREU7RUMwTUQ7SUR6TUUsd0JBQUE7RUp1Z0REO0FBQ0Y7QUlwZ0RDO0VBRUM7SUNtTUQ7TURsTUUsa0ZBaEJjO0lKc2hEYjtFQUNGO0VJcGdEQTtJQytMRDtNRDlMRSw0REFBQTtJSnVnREM7RUFDRjtBQUNGO0FJcmdERTtFQzBMRDtJRHpMRSx3QkFBQTtFSndnREQ7QUFDRjtBSTFoREU7RUMwTUQ7SUR6TUUsc0JBQUE7RUo2aEREO0FBQ0Y7QUkxaERDO0VBRUM7SUNtTUQ7TURsTUUsZ0ZBaEJjO0lKNGlEYjtFQUNGO0VJMWhEQTtJQytMRDtNRDlMRSw2REFBQTtJSjZoREM7RUFDRjtBQUNGO0FJM2hERTtFQzBMRDtJRHpMRSx1QkFBQTtFSjhoREQ7QUFDRjtBSzUxQ0M7RUFDTyxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FMODFDUjtBSzcxQ1E7RUFKUDtJQUtXLGVBQUE7RUxnMkNWO0FBQ0Y7QUs3MUNDO0VBQ08sZUFBQTtFQUNBLFdBQUE7QUwrMUNSO0FLOTFDUTtFQUhQO0lBSVcsZUFBQTtFTGkyQ1Y7QUFDRjs7QUlua0RFO0VDd09GO0lEdk9HLHlCQUFBO0VKdWtERDtBQUNGO0FJcGtEQztFQUVDO0lDaU9GO01EaE9HLG1GQWhCYztJSnNsRGI7RUFDRjtFSXBrREE7SUM2TkY7TUQ1TkcsOERBQUE7SUp1a0RDO0VBQ0Y7QUFDRjtBSXJrREU7RUN3TkY7SUR2TkcseUJBQUE7RUp3a0REO0FBQ0Y7QUtoM0NJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBTGszQ1I7QUkvbERFO0VDME9FO0lEek9ELFlBQUE7RUprbUREO0FBQ0Y7QUkvbERDO0VBRUM7SUNtT0U7TURsT0QscUVBaEJjO0lKaW5EYjtFQUNGO0VJL2xEQTtJQytORTtNRDlORCxrREFBQTtJSmttREM7RUFDRjtBQUNGO0FJaG1ERTtFQzBORTtJRHpORCxhQUFBO0VKbW1ERDtBQUNGO0FLcDRDSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUxzNENSO0FLbjRDWTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtBTHE0Q2hCO0FJN25ERTtFQzRQRTtJRDNQRCxnQkFBQTtFSmdvREQ7QUFDRjtBSTduREM7RUFFQztJQ3FQRTtNRHBQRCw0RUFoQmM7SUorb0RiO0VBQ0Y7RUk3bkRBO0lDaVBFO01EaFBELHdEQUFBO0lKZ29EQztFQUNGO0FBQ0Y7QUk5bkRFO0VDNE9FO0lEM09ELGlCQUFBO0VKaW9ERDtBQUNGO0FJbnBERTtFQzRQRTtJRDNQRCxnQkFBQTtFSnNwREQ7QUFDRjtBSW5wREM7RUFFQztJQ3FQRTtNRHBQRCwyRUFoQmM7SUpxcURiO0VBQ0Y7RUlucERBO0lDaVBFO01EaFBELHVEQUFBO0lKc3BEQztFQUNGO0FBQ0Y7QUlwcERFO0VDNE9FO0lEM09ELGlCQUFBO0VKdXBERDtBQUNGO0FLeDZDSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FMMDZDUjtBSTlxREU7RUNpUUU7SURoUUQsb0JBQUE7RUppckREO0FBQ0Y7QUk5cURDO0VBRUM7SUMwUEU7TUR6UEQsOEVBaEJjO0lKZ3NEYjtFQUNGO0VJOXFEQTtJQ3NQRTtNRHJQRCwyREFBQTtJSmlyREM7RUFDRjtBQUNGO0FJL3FERTtFQ2lQRTtJRGhQRCxxQkFBQTtFSmtyREQ7QUFDRjtBSXBzREU7RUNpUUU7SURoUUQscUJBQUE7RUp1c0REO0FBQ0Y7QUlwc0RDO0VBRUM7SUMwUEU7TUR6UEQsNkVBaEJjO0lKc3REYjtFQUNGO0VJcHNEQTtJQ3NQRTtNRHJQRCwwREFBQTtJSnVzREM7RUFDRjtBQUNGO0FJcnNERTtFQ2lQRTtJRGhQRCxzQkFBQTtFSndzREQ7QUFDRjtBS245Q1E7RUFOSjtJQU9RLGVBQUE7RUxzOUNWO0FBQ0Y7QUtuOUNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FMcTlDUjtBSW51REU7RUNpUkU7SURoUkQsY0FBQTtFSnN1REQ7QUFDRjtBSW51REM7RUFFQztJQzBRRTtNRHpRRCx3RUFoQmM7SUpxdkRiO0VBQ0Y7RUludURBO0lDc1FFO01EclFELGdEQUFBO0lKc3VEQztFQUNGO0FBQ0Y7QUlwdURFO0VDaVFFO0lEaFFELGNBQUE7RUp1dUREO0FBQ0Y7QUl6dkRFO0VDaVJFO0lEaFJELGdCQUFBO0VKNHZERDtBQUNGO0FJenZEQztFQUVDO0lDMFFFO01EelFELDJFQWhCYztJSjJ3RGI7RUFDRjtFSXp2REE7SUNzUUU7TURyUUQsdURBQUE7SUo0dkRDO0VBQ0Y7QUFDRjtBSTF2REU7RUNpUUU7SURoUUQsaUJBQUE7RUo2dkREO0FBQ0Y7QUt6L0NJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBTDIvQ1I7QUt6L0NRO0VBSko7SUFLUSxlQUFBO0lBQ0EsY0FBQTtFTDQvQ1Y7QUFDRjtBS3ovQ0k7RUFDSSxrQkFBQTtBTDIvQ1I7QUsxL0NRO0VBRko7SUFHUSxhQUFBO0VMNi9DVjtBQUNGO0FLMS9DSTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbURBQUE7QUw0L0NSOztBS3ovQ0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUw0L0NKO0FJL3lERTtFQytTRjtJRDlTRyxtQkFBQTtFSmt6REQ7QUFDRjtBSS95REM7RUFFQztJQ3dTRjtNRHZTRyw2RUFoQmM7SUppMERiO0VBQ0Y7RUkveURBO0lDb1NGO01EblNHLDhEQUFBO0lKa3pEQztFQUNGO0FBQ0Y7QUloekRFO0VDK1JGO0lEOVJHLHdCQUFBO0VKbXpERDtBQUNGO0FJcjBERTtFQytTRjtJRDlTRyxxQkFBQTtFSncwREQ7QUFDRjtBSXIwREM7RUFFQztJQ3dTRjtNRHZTRyw4RUFoQmM7SUp1MURiO0VBQ0Y7RUlyMERBO0lDb1NGO01EblNHLDJEQUFBO0lKdzBEQztFQUNGO0FBQ0Y7QUl0MERFO0VDK1JGO0lEOVJHLHNCQUFBO0VKeTBERDtBQUNGO0FJMzFERTtFQytTRjtJRDlTRyxzQkFBQTtFSjgxREQ7QUFDRjtBSTMxREM7RUFFQztJQ3dTRjtNRHZTRywrRUFoQmM7SUo2MkRiO0VBQ0Y7RUkzMURBO0lDb1NGO01EblNHLDREQUFBO0lKODFEQztFQUNGO0FBQ0Y7QUk1MURFO0VDK1JGO0lEOVJHLHVCQUFBO0VKKzFERDtBQUNGO0FLMWpESTtFQUNJLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtBTDJqRFI7QUl0M0RFO0VDdVRFO0lEdFRELGtCQUFBO0VKeTNERDtBQUNGO0FJdDNEQztFQUVDO0lDZ1RFO01EL1NELDJFQWhCYztJSnc0RGI7RUFDRjtFSXQzREE7SUM0U0U7TUQzU0Qsd0RBQUE7SUp5M0RDO0VBQ0Y7QUFDRjtBSXYzREU7RUN1U0U7SUR0U0QsbUJBQUE7RUowM0REO0FBQ0Y7QUk1NERFO0VDdVRFO0lEdFRELGlCQUFBO0VKKzRERDtBQUNGO0FJNTREQztFQUVDO0lDZ1RFO01EL1NELDZFQWhCYztJSjg1RGI7RUFDRjtFSTU0REE7SUM0U0U7TUQzU0QsdURBQUE7SUorNERDO0VBQ0Y7QUFDRjtBSTc0REU7RUN1U0U7SUR0U0QsZ0JBQUE7RUpnNUREO0FBQ0Y7QUtybURRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUxzbURaO0FJMTZERTtFQzZUTTtJRDVUTCxlQUFBO0VKNjZERDtBQUNGO0FJMTZEQztFQUVDO0lDc1RNO01EclRMLHlFQWhCYztJSjQ3RGI7RUFDRjtFSTE2REE7SUNrVE07TURqVEwsc0RBQUE7SUo2NkRDO0VBQ0Y7QUFDRjtBSTM2REU7RUM2U007SUQ1U0wsZ0JBQUE7RUo4NkREO0FBQ0Y7QUloOERFO0VDdVRFO0lEdFRELG1CQUFBO0VKbThERDtBQUNGO0FJaDhEQztFQUVDO0lDZ1RFO01EL1NELDZFQWhCYztJSms5RGI7RUFDRjtFSWg4REE7SUM0U0U7TUQzU0QsOERBQUE7SUptOERDO0VBQ0Y7QUFDRjtBSWo4REU7RUN1U0U7SUR0U0Qsd0JBQUE7RUpvOEREO0FBQ0Y7QUtocERRO0VBR0k7SUFFSSxVQUFBO0VMK29EZDtBQUNGO0FJMzlERTtFQ3lVVTtJRHhVVCxhQUFBO0VKODlERDtBQUNGO0FJMzlEQztFQUVDO0lDa1VVO01EalVULHNFQWhCYztJSjYrRGI7RUFDRjtFSTM5REE7SUM4VFU7TUQ3VFQsbURBQUE7SUo4OURDO0VBQ0Y7QUFDRjtBSTU5REU7RUN5VFU7SUR4VFQsY0FBQTtFSis5REQ7QUFDRjs7QU1qa0VBO0VBQ0ksa0JBQUE7QU5va0VKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcInNhc3M6bWF0aFxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDQvNGW0LrRgdC40L3RltCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbkBpbXBvcnQgXFxcImJhc2UvbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGI0YDQuNGE0YLRltCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vJmRpc3BsYXk9c3dhcCAtINC00L7QtNCw0YLQuCDQv9GA0Lgg0L/RltC00LrQu9GO0YfQtdC90L3RliDRh9C10YDQtdC3INC/0LvQsNCz0ZbQvVxcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LjRgtC4LCDRj9C60YnQviDRlCDQu9C+0LrQsNC70YzQvdGWINGE0LDQudC70Lgg0YjRgNC40YTRgtGW0LJcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlcjp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRltC60L7QvdC60L7QstC40YUg0YjRgNC40YTRgtGW0LIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8g0J/RltC00LrQu9GO0YfQuNGC0LgsINGP0LrRidC+INGUINGE0LDQudC7INGW0LrQvtC90LrQvtCy0L7Qs9C+INGI0YDQuNGE0YLRg1xcclxcbi8vQGltcG9ydCBcXFwiZm9udHMvaWNvbnNcXFwiO1xcclxcblxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8g0J3QsNC70LDRiNGC0YPQstCw0L3QvdGPINGI0LDQsdC70L7QvdGDID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyDQl9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8INGI0YDQuNGE0YIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuJGZvbnRGYW1pbHk6IFxcXCJJbnRlclxcXCI7XFxyXFxuJGZvbnRTaXplOiB0b1JlbSgxNSk7IC8vINC00LUgMTQocHgpIC0g0YDQvtC30LzRltGAINGI0YDQuNGE0YLRgyDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8INC3INC80LDQutC10YLRg1xcclxcblxcclxcbi8vINCe0YHQvdC+0LLQvdGWINC60L7Qu9GM0L7RgNC4XFxyXFxuJG1haW5Db2xvcjogIzBFMEUwRTsgLy8g0JrQvtC70ZbRgCDRiNGA0LjRhNGC0YMg0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFxcclxcblxcclxcbi8vINCf0LDQu9GW0YLRgNCwINC60L7Qu9GM0L7RgNGW0LJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2NvbG9ycy1wYWxldHRlXFxcIjtcXHJcXG5cXHJcXG4vLyDQndCw0LvQsNGI0YLRg9Cy0LDQvdC90Y8g0LDQtNCw0L/RgtC40LLQvdC+0Zcg0YHRltGC0LrQuCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vINCc0ZbQvdGW0LzQsNC70YzQvdCwINGI0LjRgNC40L3QsCDRgdGC0L7RgNGW0L3QutC4XFxyXFxuJG1pbldpZHRoOiAzMjA7XFxyXFxuLy8g0KjQuNGA0LjQvdCwINC/0L7Qu9C+0YLQvdCwICjQvNCw0LrQtdGC0YMpXFxyXFxuJG1heFdpZHRoOiAxMzY2O1xcclxcbi8vINCo0LjRgNC40L3QsCDQvtCx0LzQtdC20YPRjtGH0L7Qs9C+INC60L7QvdGC0LXQudC90LXRgNCwICgwID0g0L3QtdC80LDRlCDQvtCx0LzQtdC20LXQvdC90Y8pXFxyXFxuJG1heFdpZHRoQ29udGFpbmVyOiAxMTcwO1xcclxcbi8vINCX0LDQs9Cw0LvRjNC90LjQuSDQstGW0LTRgdGC0YPQvyDRgyDQutC+0L3RgtC10LnQvdC10YDQsFxcclxcbi8vICgzMCA9INC/0L4gMTVweCDQu9GW0LLQvtGA0YPRhyDRliDQv9GA0LDQstC+0YDRg9GHLCAwID0g0L3QtdC80LDRlCDQstGW0LTRgdGC0YPQv9GDKVxcclxcbiRjb250YWluZXJQYWRkaW5nOiAzMDtcXHJcXG5cXHJcXG4vLyDQqNC40YDQuNC90LAg0YHQv9GA0LDRhtGM0L7QstGD0LLQsNC90L3RjyDQv9C10YDRiNC+0LPQviDQsdGA0LXQudC60L/QvtGW0L3RgtGDXFxyXFxuJGNvbnRhaW5lcldpZHRoOiAkbWF4V2lkdGhDb250YWluZXIgKyAkY29udGFpbmVyUGFkZGluZztcXHJcXG5cXHJcXG4vLyDQkdGA0LXQudC6LdC/0L7Rl9C90YLQuFxcclxcbiRwYzogZW0oJGNvbnRhaW5lcldpZHRoKTsgLy8g0J/Qmiwg0L3QvtGD0YLQsdGD0LrQuCwg0LTQtdGP0LrRliDQv9C70LDQvdGI0LXRgtC4INGDINCz0L7RgNC40LfQvtC90YLQsNC70YzQvdC+0LzRgyDQv9C+0LvQvtC20LXQvdC90ZZcXHJcXG4kdGFibGV0OiBlbSg5OTEuOTgpOyAvLyDQn9C70LDQvdGI0LXRgtC4LCDQtNC10Y/QutGWINGC0LXQu9C10YTQvtC90Lgg0LIg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7QvNGDINC/0L7Qu9C+0LbQtdC90L3RllxcclxcbiRtb2JpbGU6IGVtKDc2Ny45OCk7IC8vINCi0LXQu9C10YTQvtC90LggTFxcclxcbiRtb2JpbGVTbWFsbDogZW0oNDc5Ljk4KTsgLy8g0KLQtdC70LXRhNC+0L3QuCBTXFxyXFxuXFxyXFxuLy8g0KLQuNC/INCw0LTQsNC/0YLQuNCy0LA6XFxyXFxuLy8gMSA9INGH0YPQudC90ZbRgdGC0YwgKNGDINC60L7QvdGC0LXQudC90LXRgNCwINC90LXQvNCw0ZQg0LHRgNC10LnQutC/0L7RltC90YLRltCyKSxcXHJcXG4vLyAyID0g0L/QviDQsdGA0LXQudC6LdC/0L7Rl9C90YIgKNC60L7QvdGC0LXQudC90LXRgCDQt9C80ZbQvdGO0ZQg0YHQstC+0Y4g0YjQuNGA0LjQvdGDINC/0L4g0LHRgNC10LnQui3Qv9C+0ZfQvdGCKVxcclxcbiRyZXNwb25zaXZlVHlwZTogMTtcXHJcXG5cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy8g0J7QsdC90YPQu9C10L3QvdGPID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5AaW1wb3J0IFxcXCJiYXNlL251bGxcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0YLQtdCz0LAgQk9EWSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbmJvZHkge1xcclxcblxcdC8vINCh0LrRgNC+0LvQuyDQt9Cw0LHQu9C+0LrQvtCy0LDQvdC+XFxyXFxuXFx0LmxvY2sgJiB7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRcXHR0b3VjaC1hY3Rpb246IG5vbmU7XFxyXFxuXFx0XFx0b3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0KHQsNC50YIg0LfQsNCy0LDQvdGC0LDQttC10L3QuNC5XFxyXFxuXFx0LmxvYWRlZCAmIHtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCe0LHQvtC70L7QvdC60LAgd3JhcHBlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi53cmFwcGVyIHtcXHJcXG5cXHRtaW4taGVpZ2h0OiAxMDAlO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdEBzdXBwb3J0cyAob3ZlcmZsb3c6IGNsaXApIHtcXHJcXG5cXHRcXHRvdmVyZmxvdzogY2xpcDtcXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0J/RgNC40YLQuNGB0LrQsNGU0LzQviBmb290ZXJcXHJcXG5cXHQ+IG1haW4ge1xcclxcblxcdFxcdGZsZXg6IDEgMSBhdXRvO1xcclxcblxcdH1cXHJcXG5cXHQvLyDQpNGW0LrRgSDQtNC70Y8g0YHQu9Cw0LnQtNC10YDRltCyXFxyXFxuXFx0PiAqIHtcXHJcXG5cXHRcXHRtaW4td2lkdGg6IDA7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQntCx0LzQtdC20YPRjtGH0LjQuSDQutC+0L3RgtC10LnQvdC10YAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8qXFxyXFxuKGkpINCh0YLQuNC70ZYg0LHRg9C00YPRgtGMINC30LDRgdGC0L7RgdC+0LLRg9Cy0LDRgtC40YHRjCDQtNC+XFxyXFxu0LLRgdGW0YUg0LrQu9Cw0YHRltCyLCDRidC+INC80ZbRgdGC0Y/RgtGMICpfX2NvbnRhaW5lclxcclxcbtCd0LDQv9GA0LjQutC70LDQtCBoZWFkZXJfX2NvbnRhaW5lciwgbWFpbl9fY29udGFpbmVyINGWINGCLtC/LlxcclxcbtCh0L3RltC/0L/QtdGCIChIVE1MKTogY250XFxyXFxuKi9cXHJcXG5AaWYgKCRyZXNwb25zaXZlVHlwZT09MSkge1xcclxcblxcdC8vINCn0YPQudC90LBcXHJcXG5cXHRbY2xhc3MqPVxcXCJfX2NvbnRhaW5lclxcXCJdIHtcXHJcXG5cXHRcXHRAaWYgKCRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiB0b1JlbSgkY29udGFpbmVyV2lkdGgpO1xcclxcblxcdFxcdFxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRAaWYgKCRjb250YWluZXJQYWRkaW5nPjApIHtcXHJcXG5cXHRcXHRcXHRAaWYgKCRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMCB0b1JlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcblxcdFxcdFxcdH0gQGVsc2Uge1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSwgMTUpO1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctcmlnaHRcXFwiLCBtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMiksIDE1KTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59IEBlbHNlIHtcXHJcXG5cXHQvLyDQkdGA0LXQudC6LdC/0L7Rl9C90YLQsNC80LhcXHJcXG5cXHRbY2xhc3MqPVxcXCJfX2NvbnRhaW5lclxcXCJdIHtcXHJcXG5cXHRcXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRcXHRAaWYgKCRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiB0b1JlbSgkY29udGFpbmVyV2lkdGgpO1xcclxcblxcdFxcdH0gQGVsc2Uge1xcclxcblxcdFxcdFxcdEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCkge1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDAgdG9SZW0obWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkcGMpIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHRvUmVtKDk3MCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiB0b1JlbSg3NTApO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogbm9uZTtcXHJcXG5cXHRcXHRcXHRAaWYgKCRjb250YWluZXJQYWRkaW5nPjAgYW5kICRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMCB0b1JlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINCx0LDQt9C+0LLQuNGFINGB0YLQuNC70ZbQsiwg0YjQsNCx0LvQvtC90ZbQsiAo0LfQsNCz0L7RgtGW0LLQtdC70YwpINGC0LAg0LTQvtC/0L7QvNGW0LbQvdC40YUg0LrQu9Cw0YHRltCyXFxyXFxuLy8g0JTQu9GPINC/0ZbQtNC60LvRjtGH0LXQvdC90Y8v0LLQuNC80LrQvdC10L3QvdGPINC60L7QvdC60YDQtdGC0L3QuNGFINGB0YLQuNC70ZbQsiDQtNC40LLQuNGB0YwgYmFzZS5zY3NzXFxyXFxuQGltcG9ydCBcXFwiYmFzZVxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0LfQsNCz0LDQu9GM0L3QuNGFINC10LvQtdC80LXQvdGC0ZbQsiDQv9GA0L7QtdC60YLRg1xcclxcbkBpbXBvcnQgXFxcImNvbW1vblxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0L7QutGA0LXQvNC40YUg0LHQu9C+0LrRltCyXFxyXFxuQGltcG9ydCBcXFwiaGVhZGVyXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJmb290ZXJcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC+0LrRgNC10LzQuNGFINGB0YLQvtGA0ZbQvdC+0LpcXHJcXG5AaW1wb3J0IFxcXCJob21lXFxcIjtcXHJcXG5cXHJcXG4vLyDQl9C80ZbQvdC90ZZcXHJcXG5cXHJcXG5AaW1wb3J0IFxcXCJ1dGlscy92YXJzXFxcIjtcXHJcXG5cIixcIioge1xcclxcblxcdHBhZGRpbmc6IDBweDtcXHJcXG5cXHRtYXJnaW46IDBweDtcXHJcXG5cXHRib3JkZXI6IDBweDtcXHJcXG59XFxyXFxuKixcXHJcXG4qOmJlZm9yZSxcXHJcXG4qOmFmdGVyIHtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG46Zm9jdXMsXFxyXFxuOmFjdGl2ZSB7XFxyXFxuXFx0Ly8gb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuYTpmb2N1cyxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuXFx0Ly8gb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0bWluLXdpZHRoOiAkbWluV2lkdGggKyBweDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0Y29sb3I6ICRtYWluQ29sb3I7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xcclxcblxcdGZvbnQtc2l6ZTogJGZvbnRTaXplO1xcclxcblxcdC8vdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXHJcXG5cXHQtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcblxcdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxufVxcclxcbmlucHV0LFxcclxcbmJ1dHRvbixcXHJcXG50ZXh0YXJlYSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG5cXHRsaW5lLWhlaWdodDogaW5oZXJpdDtcXHJcXG59XFxyXFxuYnV0dG9uIHtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcbmEge1xcclxcblxcdGNvbG9yOiBpbmhlcml0O1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxudWwgbGkge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmltZyB7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG59XFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcblxcdGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcclxcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG59XFxyXFxuXCIsXCIvLyDQl9Cw0LPQsNC70YzQvdC40Lkg0YTQsNC50Lsg0LXQu9C10LzQtdC90YLRltCyINGE0L7RgNC8XFxyXFxuLy8g0JTQu9GPINC/0ZbQtNC60LvRjtGH0LXQvdC90Y8v0LLRltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0LrQvtC90LrRgNC10YLQvdC+0LPQviDQtdC70LXQvNC10L3RgtCwINGE0L7RgNC80Lgg0LTQuNCy0LjRgdGMIGJhc2UvZm9ybXMvZm9ybXMuc2Nzc1xcclxcbkBpbXBvcnQgXFxcImJhc2UvZm9ybXMvZm9ybXNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0L/QvtC/0LDQv9GW0LJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3BvcHVwXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINGB0L/QvtC50LvQtdGA0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc3BvbGxlcnNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0YLQsNCx0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvdGFic1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQvNCw0L9cXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL21hcHNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LHQu9C+0LrRgyBcXFwi0L/QvtC60LDQt9Cw0YLQuCDRidC1XFxcIlxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc2hvd21vcmVcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC70LjQv9C60L7Qs9C+INCx0LvQvtC60YNcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3N0aWNreVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0L/QvtCy0L3QvtC10LrRgNCw0L3QvdC+0LPQviDQsdC70L7QutGDXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9mdWxsc2NyZWVuXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQv9C+0LXQutGA0LDQvdC+0Zcg0L/RgNC+0LrRgNGD0YLQutC4XFxyXFxuLy8gU3R5bGVzIGZvciBmdWxscGFnZSBzY3JvbGxcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2Z1bGxwYWdlXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyByaXBwbGUg0LXRhNC10LrRgtGDXFxyXFxuLy8gU3R5bGVzIGZvciByaXBwbGUgZWZmZWN0XFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9yaXBwbGVcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC60LDRgdGC0L7QvNC90L7Qs9C+INC60YPRgNGB0L7RgNGDXFxyXFxuLy8gU3R5bGVzIGZvciBjdXN0b20gY3Vyc29yXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9jdXJzb3JcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINGH0YPQudC90LjRhSDQutCw0YDRgtC40L3QvtC6IChJQkcpXFxyXFxuLy8g0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBpYmcgKGRpdiDQtyDQutCw0YDRgtC40L3QutC+0Y4g0YLQsCDQutC70LDRgdCw0LzQuClcXHJcXG4vLyDQodC90ZbQv9C/0LXRgiAoSFRNTCk6IGliZ2EgKGEg0Lcg0LrQsNGA0YLQuNC90LrQvtGOINGC0LAg0LrQu9Cw0YHQsNC80LgpXFxyXFxuW2NsYXNzKj1cXFwiLWliZ1xcXCJdIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0aW1nIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdG9iamVjdC1maXQ6IGNvdmVyO1xcclxcblxcdH1cXHJcXG59XFxyXFxuW2NsYXNzKj1cXFwiLWliZy0tY29udGFpblxcXCJdIHtcXHJcXG5cXHRpbWcge1xcclxcblxcdFxcdG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyDQqNCw0LHQu9C+0L3QuCAo0LfQsNCz0L7RgtGW0LLQu9GWKVxcclxcbi8vIEBleHRlbmQgJdGW0Lwn0Y8g0YjQsNCx0LvQvtC90YM7XFxyXFxuLy8g0KHQvdGW0L/Qv9C10YIgKFNDU1MpOiBleFxcclxcblxcclxcbi8vINCb0ZbRh9C40LvRjNC90LjQuiDQtNC70Y8g0YHQv9C40YHQutGDXFxyXFxuJWxpc3RDb3VudGVyIHtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuXFx0Y291bnRlci1yZXNldDogaXRlbTtcXHJcXG5cXHRsaSB7XFxyXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdCY6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRjb3VudGVyLWluY3JlbWVudDogaXRlbTtcXHJcXG5cXHRcXHRcXHRjb250ZW50OiBjb3VudGVyKGl0ZW0pO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQkNC00LDQv9GC0LjQstC90LUg0LLRltC00LXQvlxcclxcbiVyZXNwb25zaXZlVmlkZW8ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdGhlaWdodDogMDtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xcclxcblxcdHZpZGVvLFxcclxcblxcdGlmcmFtZSxcXHJcXG5cXHRvYmplY3QsXFxyXFxuXFx0ZW1iZWQge1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQktGW0LTQtdC+INGP0Log0YTQvtC9XFxyXFxuJXZpZGVvQmFja2dyb3VuZCB7XFxyXFxuXFx0dmlkZW8sXFxyXFxuXFx0aWZyYW1lLFxcclxcblxcdG9iamVjdCxcXHJcXG5cXHRlbWJlZCB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdFxcdHRvcDogNTAlO1xcclxcblxcdFxcdGxlZnQ6IDUwJTtcXHJcXG5cXHRcXHRtaW4td2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0bWluLWhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHR3aWR0aDogYXV0bztcXHJcXG5cXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0XFx0ei1pbmRleDogLTEwMDtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0KHRltGA0LjQuSDRhNGW0LvRjNGC0YBcXHJcXG4lZ3JheWZpbHRlciB7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG5cXHRmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcXHJcXG5cXHRAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXHJcXG5cXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQodC60LDRgdGD0LLQsNGC0Lgg0LLQuNC00ZbQu9C10L3QvdGPXFxyXFxuJW5vc2VsZWN0IHtcXHJcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuLy8g0JTQt9C10YDQutCw0LvRjNC90LUg0LLRltC00L7QsdGA0LDQttC10L3QvdGPXFxyXFxuJW1pcnJvciB7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxyXFxufVxcclxcbi8vINCf0LvQsNCy0L3QuNC5INGB0LrRgNC+0LvQu1xcclxcbiVzbW9vdGhzY3JvbGwge1xcclxcblxcdC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG59XFxyXFxuLy8g0KHRhdC+0LLQsNGC0Lgg0YHQutGA0L7Qu9C7XFxyXFxuJWhpZGVzY3JvbGwge1xcclxcblxcdCY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCIvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG5cXHRjb2xvcjogI2ZmZjtcXHJcXG5cXHQmX19tZW51IHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6NTgwcHgpe1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDUycHg7XFxyXFxuXFx0XFx0ICB9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2xvZ28ge1xcclxcblxcdFxcdG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyMCwgMTUpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLm1lbnUge1xcclxcblxcclxcblxcdCZfX2JvZHkge1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgMzUsIDI1KTtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDM1LCAyNSk7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHR6LWluZGV4OiAxMDtcXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDo1ODBweCl7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdCAgfVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19saXN0IHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLXJpZ2h0XFxcIiwgNjAsIDUwKTtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJnYXBcXFwiLCA0MCwgMzApO1xcclxcblxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOjU4MHB4KXtcXHJcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwO1xcclxcblxcdFxcdFxcdGZsZXg6IDI7XFxyXFxuXFx0XFx0ICB9XFxyXFxuXFx0ICB9XFxyXFxuXFxyXFxuXFx0Jl9fbGluayB7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAzNSwgMjUpO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMzUsIDI1KTtcXHJcXG5cXHRcXHRmb250LXNpemU6IDE2cHg7XFxyXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOjU4MHB4KXtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDI4cHg7XFxyXFxuXFx0XFx0ICB9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Jjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRjb250ZW50OiAnJztcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHR0b3A6IDQ1cHg7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiAxcHg7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcblxcdFxcdFxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0XFx0XFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcdFxcdFxcdHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0Jjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuXFx0XFx0XFx0XFx0b3BhY2l0eTogMTtcXHJcXG5cXHRcXHRcXHRcXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4uc29jaWFscy1saXN0IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZ2FwXFxcIiwgMTUsIDEwKTtcXHJcXG5cXHJcXG5cXHRAbWVkaWEgKG1heC13aWR0aDo1ODBweCl7XFxyXFxuXFx0XFx0Z2FwOiAzMHB4O1xcclxcblxcdFxcdGZsZXg6IDE7XFxyXFxuICBcXHR9XFxyXFxuXFxyXFxuXFx0Jl9faWNvbiB7XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6NTgwcHgpe1xcclxcblxcdFxcdFxcdHdpZHRoOiAyNXB4O1xcclxcblxcdFxcdFxcdGhlaWdodDogMjVweDtcXHJcXG4gIFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vQnVyZ2VyXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XFxyXFxuXFx0Lm1lbnVfX2JvZHkge1xcclxcblxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRcXHR0b3A6IDUycHg7XFxyXFxuXFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG5cXHRcXHRvdmVyZmxvdzogYXV0bztcXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLmljb24tbWVudSB7XFxyXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6NTgwcHgpe1xcclxcblxcdFxcdGRpc3BsYXk6IG5vbmU7ICBcXHJcXG5cXHR9XFxyXFxuXFx0QG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdHdpZHRoOiB0b1JlbSgzMCk7XFxyXFxuXFx0XFx0aGVpZ2h0OiB0b1JlbSgxOCk7XFxyXFxuXFx0XFx0ei1pbmRleDogNTtcXHJcXG5cXHRcXHRAbWVkaWEgKGFueS1ob3Zlcjogbm9uZSkge1xcclxcblxcdFxcdFxcdGN1cnNvcjogZGVmYXVsdDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0c3BhbixcXHJcXG5cXHRcXHQmOjpiZWZvcmUsXFxyXFxuXFx0XFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdFxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcblxcdFxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuXFx0XFx0XFx0cmlnaHQ6IDA7XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdGhlaWdodDogdG9SZW0oMik7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Jjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRib3R0b206IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdHNwYW4ge1xcclxcblxcdFxcdFxcdHRvcDogY2FsYyg1MCUgLSB0b1JlbSgxKSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdC5tZW51LW9wZW4gJiB7XFxyXFxuXFx0XFx0XFx0Ky5tZW51X19ib2R5IHtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdHNwYW4ge1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAwO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHQmOjpiZWZvcmUsXFxyXFxuXFx0XFx0XFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHQmOjpiZWZvcmUge1xcclxcblxcdFxcdFxcdFxcdHRvcDogY2FsYyg1MCUgLSB0b1JlbSgxKSk7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdFxcdFxcdGJvdHRvbTogY2FsYyg1MCUgLSB0b1JlbSgxKSk7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0fVxcdFxcclxcblxcdH1cXHJcXG5cXHRcXHJcXG5cXHRcXHJcXG5cXHJcXG5cIixcIi8v0J/RltC00LrQu9GO0YfQtdC90L3RjyDRiNGA0LjRhNGC0YNcXHJcXG5AbWl4aW4gZm9udCgkZm9udF9uYW1lLCAkZmlsZV9uYW1lLCAkd2VpZ2h0LCAkc3R5bGUpIHtcXHJcXG5cXHRAZm9udC1mYWNlIHtcXHJcXG5cXHRcXHRmb250LWZhbWlseTogJGZvbnRfbmFtZTtcXHJcXG5cXHRcXHRmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuXFx0XFx0c3JjOlxcclxcblxcdFxcdFxcdHVybChcXFwiLi4vZm9udHMvI3skZmlsZV9uYW1lfS53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXHJcXG5cXHRcXHRcXHR1cmwoXFxcIi4uL2ZvbnRzLyN7JGZpbGVfbmFtZX0ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiAjeyR3ZWlnaHR9O1xcclxcblxcdFxcdGZvbnQtc3R5bGU6ICN7JHN0eWxlfTtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vUGVyY2VudFxcclxcbkBmdW5jdGlvbiBwZXJjZW50KCRweCwgJGZyb206IDEwMCkge1xcclxcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgJGZyb20pICogMTAwJTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcbi8vUkVNXFxyXFxuQGZ1bmN0aW9uIHRvUmVtKCRweCwgJGN1cnJlbnQ6IDE2KSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAkY3VycmVudCkgKyByZW07XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG4vL0VNXFxyXFxuQGZ1bmN0aW9uIGVtKCRweCwgJGN1cnJlbnQ6IDE2KSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAkY3VycmVudCkgKyBlbTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcblxcclxcbi8vQ3VycmVuY3lcXHJcXG5AbWl4aW4gY3VycmVuY3koJHN5bSkge1xcclxcblxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRjb250ZW50OiBcXFwiI3skc3ltfVxcXCI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyBHcmlkc1xcclxcbkBtaXhpbiBncmlkQ2FyZHMoJHR5cGU6IGZpdCwgJG1pbjogMjgwcHgsICRtYXg6IDFmciwgJGdhcDogMzBweCkge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z2FwOiAkZ2FwO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tI3skdHlwZX0sIG1pbm1heCgkbWluLCAkbWF4KSk7XFxyXFxufVxcclxcblxcclxcbi8vINCQ0LTQsNC/0YLQuNCy0L3QsCDQstC70LDRgdGC0LjQstGW0YHRgtGMIChjbGFtcClcXHJcXG5AbWl4aW4gYWRhcHRpdmVWYWx1ZSgkcHJvcGVydHksICRzdGFydFNpemUsICRtaW5TaXplLCAka2VlcFNpemU6IDAsICR3aWR0aEZyb206ICRjb250YWluZXJXaWR0aCwgJHdpZHRoVG86ICRtaW5XaWR0aCkge1xcclxcblxcdEBpZiAoJHN0YXJ0U2l6ZT09MCkge1xcclxcblxcdFxcdCRzdGFydFNpemU6IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHRAaWYgKCRtaW5TaXplPT0wKSB7XFxyXFxuXFx0XFx0JG1pblNpemU6IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQlNC70Y8gY2FsYygpO1xcclxcblxcdCRhZGRTaXplOiBtYXRoLmRpdigkc3RhcnRTaXplIC0gJG1pblNpemUsIDE2KTtcXHJcXG5cXHJcXG5cXHRAaWYgKCR3aWR0aEZyb20gPT0gJGNvbnRhaW5lcldpZHRoIGFuZCAkbWF4V2lkdGhDb250YWluZXIgPT0gMCkge1xcclxcblxcdFxcdCR3aWR0aEZyb206ICRtYXhXaWR0aDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JHRgNC10LnQui3Qv9C+0ZfQvdGC0Lgg0LIgRU1cXHJcXG5cXHQkd2lkdGhGcm9tTWVkaWE6IGVtKCR3aWR0aEZyb20pO1xcclxcblxcdCR3aWR0aFRvTWVkaWE6IGVtKCR3aWR0aFRvKTtcXHJcXG5cXHJcXG5cXHQvLyDQpNC+0YDQvNGD0LvQsCDQv9C70LDQstCw0Y7Rh9C+0LPQviDQt9C90LDRh9C10L3QvdGPXFxyXFxuXFx0Ly8g0JjRgdGC0L7Rh9C90LjQujogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9saW5lYXJseS1zY2FsZS1mb250LXNpemUtd2l0aC1jc3MtY2xhbXAtYmFzZWQtb24tdGhlLXZpZXdwb3J0L1xcclxcblxcdCRzbG9wZTogbWF0aC5kaXYoKCRzdGFydFNpemUgLSAkbWluU2l6ZSksICgkd2lkdGhGcm9tIC0gJHdpZHRoVG8pKTtcXHJcXG5cXHQkeUludGVyc2VjdGlvbjogLSR3aWR0aFRvICogJHNsb3BlICsgJG1pblNpemU7XFxyXFxuXFx0QGlmICgkeUludGVyc2VjdGlvbj09MCkge1xcclxcblxcdFxcdCR5SW50ZXJzZWN0aW9uOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFx0JGZseVZhbHVlOiAje3RvUmVtKCR5SW50ZXJzZWN0aW9uKX1cXFwiICsgXFxcIiAjeyRzbG9wZSAqIDEwMH12dztcXHJcXG5cXHJcXG5cXHQvLyDQntGC0YDQuNC80LDQvdC90Y8g0LfQvdCw0YfQtdC90L3RjyDQstC70LDRgdGC0LjQstC+0YHRgtGWXFxyXFxuXFx0JHByb3BlcnR5VmFsdWU6ICN7XFxcImNsYW1wKFxcXCIgdG9SZW0oJG1pblNpemUpIFxcXCIsXFxcIiAkZmx5VmFsdWUgXFxcIixcXFwiIHRvUmVtKCRzdGFydFNpemUpIFxcXCIpXFxcIn07XFxyXFxuXFx0Ly8g0K/QutGJ0L4g0L3QtdCz0LDRgtC40LLQvdGWINC30L3QsNGH0LXQvdC90Y9cXHJcXG5cXHRAaWYgKCRtaW5TaXplID4gJHN0YXJ0U2l6ZSkge1xcclxcblxcdFxcdCRwcm9wZXJ0eVZhbHVlOiAje1xcXCJjbGFtcChcXFwiIHRvUmVtKCRzdGFydFNpemUpIFxcXCIsXFxcIiAkZmx5VmFsdWUgXFxcIixcXFwiIHRvUmVtKCRtaW5TaXplKSBcXFwiKVxcXCJ9O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0LfQvdCw0YfQtdC90L3RjyDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XFxyXFxuXFx0QGlmICRrZWVwU2l6ZSAhPSAxIGFuZCAka2VlcFNpemUgIT0gMyB7XFxyXFxuXFx0XFx0QG1lZGlhIChtaW4td2lkdGg6ICR3aWR0aEZyb21NZWRpYSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogdG9SZW0oJHN0YXJ0U2l6ZSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHQvLyDQkNC00LDQv9GC0YPRlNC80L4g0YDQvtC30LzRltGAINGDINC/0YDQvtC80ZbQttC60YMg0LzRltC2INC30LDQt9C90LDRh9C10L3QuNC80Lgg0YjQuNGA0LjQvdCw0LzQuCDQsifRjtC/0L7RgNGC0YNcXHJcXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogJHdpZHRoVG9NZWRpYSkgYW5kIChtYXgtd2lkdGg6ICR3aWR0aEZyb21NZWRpYSkge1xcclxcblxcdFxcdC8vINCv0LrRidC+INC/0ZbQtNGC0YDQuNC80YPRlNGC0YzRgdGPIGNsYW1wKCk7XFxyXFxuXFx0XFx0QHN1cHBvcnRzICgjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Ly8g0K/QutGJ0L4g0L3QtSDQv9GW0LTRgtGA0LjQvNGD0ZTRgtGM0YHRjyBjbGFtcCgpO1xcclxcblxcdFxcdEBzdXBwb3J0cyBub3QgKCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWUpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IGNhbGMoI3t0b1JlbSgkbWluU2l6ZSl9ICsgI3skYWRkU2l6ZX0gKiAoMTAwdncgLSAje3RvUmVtKCR3aWR0aFRvKX0pIC8gI3ttYXRoLmRpdigkd2lkdGhGcm9tLCAxNikgLSBtYXRoLmRpdigkd2lkdGhUbywgMTYpfSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHRAaWYgJGtlZXBTaXplICE9IDEgYW5kICRrZWVwU2l6ZSAhPSAyIHtcXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJHdpZHRoVG9NZWRpYSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogdG9SZW0oJG1pblNpemUpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gSGVybyBzZWN0aW9uXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmhlcm8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJoZWlnaHRcXFwiLCA0ODAsIDI3MCk7XFxyXFxuICAgICZfX2NvbnRhaW5lciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlci1jb3VudGVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJib3R0b21cXFwiLCA3MCwgMzApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsZWZ0XFxcIiwgMjAwLCAxNSk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgODAsIDUwKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgJl9faXRlbSB7XFxyXFxuICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAyMCwgMTApO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHRvcDogN3B4O1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImxlZnRcXFwiLCAzMCwgMTkpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZzcGFuIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDE0LCAxMik7ICBcXHJcXG4gICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5ibG9jay10aXRsZSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ0b3BcXFwiLCAxNzUsIDUwKTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImxlZnRcXFwiLCAyMDAsIDMwKTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNTE2LCAzMDApO1xcclxcbiAgICAgICAgcGFkZGluZzogNDBweCAwIDQwcHggMDtcXHJcXG4gICAgJl9fdGl0bGUge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgNzAsIDM2KTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xcclxcbiAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICB0ZXh0LXNoYWRvdzogNHB4IDRweCAycHggcmdiYSgwLDAsMCwwLjYpO1xcclxcbiAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5idG4tdmlldyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwidG9wXFxcIiwgMzkwLCAxNjApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJyaWdodFxcXCIsIDE3OCwgMjApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDkwLCA1NSk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDkwLCA1NSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxNSwgMTIpO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLCBib3gtc2hhZG93IDAuNHMgZWFzZTtcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDE1cHggOHB4ICNmZmY7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlci1zbGlkZSB7XFxyXFxuICAgICZfX2ltZyB7XFxyXFxuICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgNTgwLCAyMjApO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItYnV0dG9uLXByZXYge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjI1cHg7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImxlZnRcXFwiLCAtNTAsIDQwMCk7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjk1OHB4KXtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgfVxcclxcbn1cXHJcXG4uc3dpcGVyLWJ1dHRvbi1uZXh0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDIyNXB4O1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJyaWdodFxcXCIsIC01MCwgNDAwKTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6OTU4cHgpe1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICB9XFxyXFxufVxcclxcblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vIEFib3V0LXVzIHNlY3Rpb25cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uYWJvdXQtdXMge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDI1NiwgNDApO1xcclxcblxcclxcbiAgICAmX19jb250YWluZXItLWJpZyB7XFxyXFxuICAgICAgICB3aWR0aDogMTMwNnB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmludHJvLWJsb2NrIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA2MTUsIDI5MCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA5MywgNDApO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAmX19sYWJlbCB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMjUsIDE1KTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGl0bGUge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMzQsIDI0KTtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5pbmZvLWJsb2NrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAxNjAsIDYwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZ2FwXFxcIiwgMTEwLCA0MCk7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjU4MHB4KXtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCA0MCwgMjApO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faXRlbS0tdG9wLWxpbmUge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAzOTEsIDIwMCk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDM0LCAyMCk7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190ZXh0LS1iaWcge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjAsIDE4KTtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuXFxyXFxuICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDQwMCwgMjEwKTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0tLWFjdGlvbiB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDQ2MywgMjUwKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190ZXh0LS1zbWFsbCB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxNywgMTUpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDUwLCAyNSk7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5idG4gc3BhbiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogNTA7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCAzOSwgMTgpO1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTU5Ljk4cHgpIHtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NjkuOThweCkge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDE5LCAxMCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMTksIDEwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAxNzAsIDgwKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWRhcmstY2wpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIFxcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwidG9wXFxcIiwgMjUsIDEyKTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInJpZ2h0XFxcIiwgMzgsIDE5KTtcXHJcXG4gICAgICAgIHdpZHRoOiA2cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDZweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTU5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTI1JSk7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vIERpcmVjdGlvbnMgc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5kaXJlY3Rpb25zIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMzM2cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAxNDAsIDcwKTtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmtzLWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxuICAgICZfX2l0ZW0ge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAzMDQsIDIwMCk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuMTMpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNjUpIDEwMCUpO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgNDAwLCAyODApO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gICAgICAgICAgIC53b3Jrcy1saXN0X19pbmZvIHtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNnB4KTtcXHJcXG4gICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgIC53b3Jrcy1saXN0X19jYXJkIHtcXHJcXG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIoN3B4KTtcXHJcXG4gICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19jYXJkIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgZmlsdGVyOiBibHVyKDApO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuNXMgZWFzZTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcdCZfX2luZm8ge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctcmlnaHRcXFwiLCA5MywgMjUpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgNTAsIDI1KTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNnB4KTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX3RleHQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICBtYXJnaW46IDI0cHggMCAyNHB4IDA7XFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDk5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7IFxcclxcbiAgICAgICAgfVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19tb3JlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ5OS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4OyBcXHJcXG4gICAgICAgIH1cXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vIERpcmVjdGlvbnMgc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5mZWF0dXJlZCB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMTU3LCA3NSk7XFxyXFxuICAgICZfX2xpc3Qge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZ2FwXFxcIiwgMTAwLCAzMCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faXRlbSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgLmZlYXR1cmVkX19idG4ge1xcclxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmX19pbWFnZSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDM3MCwgMTg1KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDQyOCwgMjE0KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19sYWJlbCB7ICAgXFxyXFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDsgXFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tdG9wXFxcIiwgMzQsIDE1KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA4LCA0KTtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OTkuOThweCkge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190eXBlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faW1hZ2UtLWJpZyB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDYwMCwgMjgwKTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDQyOCwgMTk0KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtLS10b3Age1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNjBweDtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faXRlbS0tYm90dG9tIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IC0xNjBweDtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2J0biB7XFxyXFxuICAgICAgICBsZWZ0OiAxMzBweDtcXHJcXG4gICAgICAgIHRvcDogMjAwcHg7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UsIHZpc2liaWxpdHkgMC41cyBlYXNlO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5pbnRyb2R1Y3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmaXJzdCBiYXNlbGluZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgNDgsIDI1KTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgMTAwLCA1MCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctcmlnaHRcXFwiLCAxMDAsIDUwKTtcXHJcXG4gICAgJl9fdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNzVweDtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDEwMCwgNTApO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDQyNSwgMjUwKTtcXHJcXG4gICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA3MCwgMzUpO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDY4MHB4O1xcclxcbiAgICAgICAgICAgIHRvcDogODBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgNDgsIDI1KTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImxlZnRcXFwiLCAxMDAsIDUwKTtcXHJcXG4gICAgICAgICAgICAgICAgdG9wOiAtNDBweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gUHJvY2VzcyBzZWN0aW9uXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCIsXCI6cm9vdCB7XFxyXFxuICAgIC0tZGFyay1jbDogIzBFMEUwRTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjU5NjgxM2JiODI0OTQ5YTY1ZGM1XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9