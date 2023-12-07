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

.img-block__item {
  filter: grayscale(100%);
  transition: filter 0.4s ease;
}
.img-block__item:hover {
  filter: grayscale(0);
}
.img-block__item--big {
  margin-bottom: 30px;
  width: 470px;
  height: 290px;
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
.img-block__bottom {
  width: 575px;
}
.img-block__item--small {
  padding-left: 130px;
  margin-right: 30px;
}
@media (min-width: 75em) {
  .img-block__item--small {
    width: 8.75rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 4.375rem , 2.7840909091rem  +  7.9545454545vw , 8.75rem )) {
    .img-block__item--small {
      width: clamp( 4.375rem , 2.7840909091rem  +  7.9545454545vw , 8.75rem );
    }
  }
  @supports not (width: clamp( 4.375rem , 2.7840909091rem  +  7.9545454545vw , 8.75rem )) {
    .img-block__item--small {
      width: calc(4.375rem + 4.375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .img-block__item--small {
    width: 4.375rem;
  }
}
@media (min-width: 75em) {
  .img-block__item--small {
    height: 18.125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (height: clamp( 9.0625rem , 5.7670454545rem  +  16.4772727273vw , 18.125rem )) {
    .img-block__item--small {
      height: clamp( 9.0625rem , 5.7670454545rem  +  16.4772727273vw , 18.125rem );
    }
  }
  @supports not (height: clamp( 9.0625rem , 5.7670454545rem  +  16.4772727273vw , 18.125rem )) {
    .img-block__item--small {
      height: calc(9.0625rem + 9.0625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .img-block__item--small {
    height: 9.0625rem;
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
    margin-left: 5.625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-left: clamp( 2.8125rem , 1.7897727273rem  +  5.1136363636vw , 5.625rem )) {
    .create-info__text {
      margin-left: clamp( 2.8125rem , 1.7897727273rem  +  5.1136363636vw , 5.625rem );
    }
  }
  @supports not (margin-left: clamp( 2.8125rem , 1.7897727273rem  +  5.1136363636vw , 5.625rem )) {
    .create-info__text {
      margin-left: calc(2.8125rem + 2.8125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .create-info__text {
    margin-left: 2.8125rem;
  }
}
@media (min-width: 75em) {
  .create-info__text {
    margin-bottom: 5.625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-bottom: clamp( 2.8125rem , 1.7897727273rem  +  5.1136363636vw , 5.625rem )) {
    .create-info__text {
      margin-bottom: clamp( 2.8125rem , 1.7897727273rem  +  5.1136363636vw , 5.625rem );
    }
  }
  @supports not (margin-bottom: clamp( 2.8125rem , 1.7897727273rem  +  5.1136363636vw , 5.625rem )) {
    .create-info__text {
      margin-bottom: calc(2.8125rem + 2.8125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .create-info__text {
    margin-bottom: 2.8125rem;
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
@media (min-width: 75em) {
  .create-info__btn {
    margin-left: 5.625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-left: clamp( 2.8125rem , 1.7897727273rem  +  5.1136363636vw , 5.625rem )) {
    .create-info__btn {
      margin-left: clamp( 2.8125rem , 1.7897727273rem  +  5.1136363636vw , 5.625rem );
    }
  }
  @supports not (margin-left: clamp( 2.8125rem , 1.7897727273rem  +  5.1136363636vw , 5.625rem )) {
    .create-info__btn {
      margin-left: calc(2.8125rem + 2.8125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .create-info__btn {
    margin-left: 2.8125rem;
  }
}

:root {
  --dark-cl: #0E0E0E;
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base.scss","webpack://./src/scss/header.scss","webpack://./src/scss/base/mixins.scss","webpack://./src/scss/home.scss","webpack://./src/scss/utils/vars.scss"],"names":[],"mappings":"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AAA;EJ6aD;AACF;AI1aC;EAEC;IC3EF;MD4EG,yEAhBc;IJ4bb;EACF;EI1aA;IC/EF;MDgFG,sDAAA;IJ6aC;EACF;AACF;AI3aE;ECpFF;IDqFG,eAAA;EJ8aD;AACF;AIhcE;ECpEF;IDqEG,WAAA;EJmcD;AACF;AIhcC;EAEC;IC3EF;MD4EG,oEAhBc;IJkdb;EACF;EIhcA;IC/EF;MDgFG,oDAAA;IJmcC;EACF;AACF;AIjcE;ECpFF;IDqFG,eAAA;EJocD;AACF;AKjhBQ;EACI,WAAA;EACA,WAAA;EAEA,sBAAA;EACA,kBAAA;EACA,QAAA;ALkhBZ;AI7dE;EC3DM;ID4DL,cAAA;EJgeD;AACF;AI7dC;EAEC;IClEM;MDmEL,uEAhBc;IJ+eb;EACF;EI7dA;ICtEM;MDuEL,oDAAA;IJgeC;EACF;AACF;AI9dE;EC3EM;ID4EL,eAAA;EJieD;AACF;AInfE;EC3DM;ID4DL,cAAA;EJsfD;AACF;AInfC;EAEC;IClEM;MDmEL,0DAhBc;IJqgBb;EACF;EInfA;ICtEM;MDuEL,qDAAA;IJsfC;EACF;AACF;AIpfE;EC3EM;ID4EL,eAAA;EJufD;AACF;AIzgBE;ECjDE;IDkDD,mBAAA;EJ4gBD;AACF;AIzgBC;EAEC;ICxDE;MDyDD,2EAhBc;IJ2hBb;EACF;EIzgBA;IC5DE;MD6DD,uDAAA;IJ4gBC;EACF;AACF;AI1gBE;ECjEE;IDkED,kBAAA;EJ6gBD;AACF;;AK1kBA;EACQ,kBAAA;EAIA,sBAAA;AL0kBR;AIpiBE;EC3CF;ID4CG,eAAA;EJuiBD;AACF;AIpiBC;EAEC;IClDF;MDmDG,yEAhBc;IJsjBb;EACF;EIpiBA;ICtDF;MDuDG,mDAAA;IJuiBC;EACF;AACF;AIriBE;EC3DF;ID4DG,aAAA;EJwiBD;AACF;AI1jBE;EC3CF;ID4CG,aAAA;EJ6jBD;AACF;AI1jBC;EAEC;IClDF;MDmDG,wEAhBc;IJ4kBb;EACF;EI1jBA;ICtDF;MDuDG,oDAAA;IJ6jBC;EACF;AACF;AI3jBE;EC3DF;ID4DG,cAAA;EJ8jBD;AACF;AIhlBE;EC3CF;ID4CG,eAAA;EJmlBD;AACF;AIhlBC;EAEC;IClDF;MDmDG,0EAhBc;IJkmBb;EACF;EIhlBA;ICtDF;MDuDG,mDAAA;IJmlBC;EACF;AACF;AIjlBE;EC3DF;ID4DG,eAAA;EJolBD;AACF;AK3oBI;EAEI,gBAAA;EACA,gBAAA;EACA,WAAA;EACA,2CAAA;AL4oBR;AI5mBE;ECrCE;IDsCD,mBAAA;EJ+mBD;AACF;AI5mBC;EAEC;IC5CE;MD6CD,2EAhBc;IJ8nBb;EACF;EI5mBA;IChDE;MDiDD,uDAAA;IJ+mBC;EACF;AACF;AI7mBE;ECrDE;IDsDD,kBAAA;EJgnBD;AACF;AKjqBQ;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,sBAAA;ALmqBZ;AKhqBI;EACI,WAAA;EACA,WAAA;EACA,WAAA;ALkqBR;;AK9pBA;EACI,kBAAA;EAKA,sBAAA;EACA,qBAAA;EACA,kBAAA;EAEA,gBAAA;EACA,qDAAA;AL4pBJ;AIzpBE;ECdF;IDeG,cAAA;EJ4pBD;AACF;AIzpBC;EAEC;ICrBF;MDsBG,qEAhBc;IJ2qBb;EACF;EIzpBA;ICzBF;MD0BG,gDAAA;IJ4pBC;EACF;AACF;AI1pBE;EC9BF;ID+BG,UAAA;EJ6pBD;AACF;AI/qBE;ECdF;IDeG,gBAAA;EJkrBD;AACF;AI/qBC;EAEC;ICrBF;MDsBG,0EAhBc;IJisBb;EACF;EI/qBA;ICzBF;MD0BG,mDAAA;IJkrBC;EACF;AACF;AIhrBE;EC9BF;ID+BG,cAAA;EJmrBD;AACF;AIrsBE;ECdF;IDeG,eAAA;EJwsBD;AACF;AIrsBC;EAEC;ICrBF;MDsBG,yEAhBc;IJutBb;EACF;EIrsBA;ICzBF;MD0BG,sDAAA;IJwsBC;EACF;AACF;AItsBE;EC9BF;ID+BG,gBAAA;EJysBD;AACF;AI3tBE;ECdF;IDeG,gBAAA;EJ8tBD;AACF;AI3tBC;EAEC;ICrBF;MDsBG,0EAhBc;IJ6uBb;EACF;EI3tBA;ICzBF;MD0BG,uDAAA;IJ8tBC;EACF;AACF;AI5tBE;EC9BF;ID+BG,iBAAA;EJ+tBD;AACF;AIjvBE;ECdF;IDeG,oBAAA;EJovBD;AACF;AIjvBC;EAEC;ICrBF;MDsBG,4EAhBc;IJmwBb;EACF;EIjvBA;ICzBF;MD0BG,wDAAA;IJovBC;EACF;AACF;AIlvBE;EC9BF;ID+BG,kBAAA;EJqvBD;AACF;AKxwBI;EACI,qBAAA;EACA,iCAAA;AL0wBR;;AI3wBE;ECME;IDLD,gBAAA;EJ+wBD;AACF;AI5wBC;EAEC;ICDE;MDED,0EAhBc;IJ8xBb;EACF;EI5wBA;ICLE;MDMD,oDAAA;IJ+wBC;EACF;AACF;AI7wBE;ECVE;IDWD,gBAAA;EJgxBD;AACF;;AKvxBA;EACI,kBAAA;EACA,UAAA;AL0xBJ;AIvyBE;ECWF;IDVG,eAAA;EJ0yBD;AACF;AIvyBC;EAEC;ICIF;MDHG,wEAbe;IJszBd;EACF;EIvyBA;ICAF;MDCG,kDAAA;IJ0yBC;EACF;AACF;AIxyBE;ECLF;IDMG,WAAA;EJ2yBD;AACF;AK9yBI;EAJJ;IAKQ,aAAA;ELizBN;AACF;;AK/yBA;EACI,kBAAA;EACA,UAAA;ALkzBJ;AIv0BE;ECmBF;IDlBG,gBAAA;EJ00BD;AACF;AIv0BC;EAEC;ICYF;MDXG,yEAbe;IJs1Bd;EACF;EIv0BA;ICQF;MDPG,mDAAA;IJ00BC;EACF;AACF;AIx0BE;ECGF;IDFG,YAAA;EJ20BD;AACF;AKt0BI;EAJJ;IAKQ,aAAA;ELy0BN;AACF;;AIl2BE;EC+BF;ID9BG,kBAAA;EJs2BD;AACF;AIn2BC;EAEC;ICwBF;MDvBG,2EAhBc;IJq3Bb;EACF;EIn2BA;ICoBF;MDnBG,uDAAA;IJs2BC;EACF;AACF;AIp2BE;ECeF;IDdG,mBAAA;EJu2BD;AACF;AKv1BI;EACI,aAAA;EACA,cAAA;ALy1BR;;AKt1BA;EAGI,cAAA;EACA,kBAAA;ALu1BJ;AIl4BE;ECuCF;IDtCG,iBAAA;EJq4BD;AACF;AIl4BC;EAEC;ICgCF;MD/BG,6EAhBc;IJo5Bb;EACF;EIl4BA;IC4BF;MD3BG,uDAAA;IJq4BC;EACF;AACF;AIn4BE;ECuBF;IDtBG,gBAAA;EJs4BD;AACF;AIx5BE;ECuCF;IDtCG,wBAAA;EJ25BD;AACF;AIx5BC;EAEC;ICgCF;MD/BG,+EAhBc;IJ06Bb;EACF;EIx5BA;IC4BF;MD3BG,2DAAA;IJ25BC;EACF;AACF;AIz5BE;ECuBF;IDtBG,qBAAA;EJ45BD;AACF;AKl4BI;EAEI,gBAAA;ALm4BR;AIj7BE;EC4CE;ID3CD,wBAAA;EJo7BD;AACF;AIj7BC;EAEC;ICqCE;MDpCD,kFAhBc;IJm8Bb;EACF;EIj7BA;ICiCE;MDhCD,6DAAA;IJo7BC;EACF;AACF;AIl7BE;EC4BE;ID3BD,wBAAA;EJq7BD;AACF;AKt5BI;EAEI,gBAAA;EACA,gBAAA;ALu5BR;AI38BE;ECiDE;IDhDD,mBAAA;EJ88BD;AACF;AI38BC;EAEC;IC0CE;MDzCD,0EAhBc;IJ69Bb;EACF;EI38BA;ICsCE;MDrCD,sDAAA;IJ88BC;EACF;AACF;AI58BE;ECiCE;IDhCD,iBAAA;EJ+8BD;AACF;;AK16BA;EACI,aAAA;EACA,uBAAA;AL66BJ;AIt+BE;ECuDF;IDtDG,oBAAA;EJy+BD;AACF;AIt+BC;EAEC;ICgDF;MD/CG,6EAhBc;IJw/Bb;EACF;EIt+BA;IC4CF;MD3CG,0DAAA;IJy+BC;EACF;AACF;AIv+BE;ECuCF;IDtCG,sBAAA;EJ0+BD;AACF;AI5/BE;ECuDF;IDtDG,aAAA;EJ+/BD;AACF;AI5/BC;EAEC;ICgDF;MD/CG,oEAhBc;IJ8gCb;EACF;EI5/BA;IC4CF;MD3CG,gDAAA;IJ+/BC;EACF;AACF;AI7/BE;ECuCF;IDtCG,WAAA;EJggCD;AACF;AKt9BI;EALJ;IAMQ,sBAAA;ELy9BN;AACF;AIvhCE;ECuDF;IDtDG,oBAAA;EJ0hCD;AACF;AIvhCC;EAEC;ICgDF;MD/CG,4EAhBc;IJyiCb;EACF;EIvhCA;IC4CF;MD3CG,yDAAA;IJ0hCC;EACF;AACF;AIxhCE;ECuCF;IDtCG,qBAAA;EJ2hCD;AACF;AK5+BI;EAGI,kBAAA;AL4+BR;AIhjCE;ECiEE;IDhED,iBAAA;EJmjCD;AACF;AIhjCC;EAEC;IC0DE;MDzDD,0EAhBc;IJkkCb;EACF;EIhjCA;ICsDE;MDrDD,qDAAA;IJmjCC;EACF;AACF;AIjjCE;ECiDE;IDhDD,cAAA;EJojCD;AACF;AItkCE;ECiEE;IDhED,qBAAA;EJykCD;AACF;AItkCC;EAEC;IC0DE;MDzDD,6EAhBc;IJwlCb;EACF;EItkCA;ICsDE;MDrDD,yDAAA;IJykCC;EACF;AACF;AIvkCE;ECiDE;IDhDD,oBAAA;EJ0kCD;AACF;AKrhCI;EAEI,gBAAA;ALshCR;AI/lCE;ECuEE;IDtED,kBAAA;EJkmCD;AACF;AI/lCC;EAEC;ICgEE;MD/DD,2EAhBc;IJinCb;EACF;EI/lCA;IC4DE;MD3DD,wDAAA;IJkmCC;EACF;AACF;AIhmCE;ECuDE;IDtDD,mBAAA;EJmmCD;AACF;AK1iCQ;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EAEA,gCAAA;AL2iCZ;AI7nCE;EC2EM;ID1EL,YAAA;EJgoCD;AACF;AI7nCC;EAEC;ICoEM;MDnEL,uEAhBc;IJ+oCb;EACF;EI7nCA;ICgEM;MD/DL,sDAAA;IJgoCC;EACF;AACF;AI9nCE;EC2DM;ID1DL,gBAAA;EJioCD;AACF;AInpCE;ECsFE;IDrFD,iBAAA;EJspCD;AACF;AInpCC;EAEC;IC+EE;MD9ED,6EAhBc;IJqqCb;EACF;EInpCA;IC2EE;MD1ED,uDAAA;IJspCC;EACF;AACF;AIppCE;ECsEE;IDrED,gBAAA;EJupCD;AACF;AK/kCI;EAGI,gBAAA;AL+kCR;AI5qCE;EC0FE;IDzFD,oBAAA;EJ+qCD;AACF;AI5qCC;EAEC;ICmFE;MDlFD,8EAhBc;IJ8rCb;EACF;EI5qCA;IC+EE;MD9ED,yDAAA;IJ+qCC;EACF;AACF;AI7qCE;EC0EE;IDzED,oBAAA;EJgrCD;AACF;AIlsCE;EC0FE;IDzFD,uBAAA;EJqsCD;AACF;AIlsCC;EAEC;ICmFE;MDlFD,iFAhBc;IJotCb;EACF;EIlsCA;IC+EE;MD9ED,8DAAA;IJqsCC;EACF;AACF;AInsCE;EC0EE;IDzED,wBAAA;EJssCD;AACF;;AKtnCA;EACI,kBAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;ALynCJ;AI/tCE;ECkGF;IDjGG,uBAAA;EJkuCD;AACF;AI/tCC;EAEC;IC2FF;MD1FG,gFAhBc;IJivCb;EACF;EI/tCA;ICuFF;MDtFG,4DAAA;IJkuCC;EACF;AACF;AIhuCE;ECkFF;IDjFG,sBAAA;EJmuCD;AACF;AK7oCI;EANJ;IAOQ,eAAA;IACA,WAAA;IACA,kBAAA;ELgpCN;AACF;AK/oCI;EAXJ;IAYQ,eAAA;ELkpCN;AACF;;AK/oCA;EAII,gCAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,gBAAA;EACA,UAAA;EACA,iCAAA;EACA,kBAAA;AL+oCJ;AI5wCE;ECkHF;IDjHG,sBAAA;EJ+wCD;AACF;AI5wCC;EAEC;IC2GF;MD1GG,+EAhBc;IJ8xCb;EACF;EI5wCA;ICuGF;MDtGG,2DAAA;IJ+wCC;EACF;AACF;AI7wCE;ECkGF;IDjGG,qBAAA;EJgxCD;AACF;AIlyCE;ECkHF;IDjHG,yBAAA;EJqyCD;AACF;AIlyCC;EAEC;IC2GF;MD1GG,kFAhBc;IJozCb;EACF;EIlyCA;ICuGF;MDtGG,8DAAA;IJqyCC;EACF;AACF;AInyCE;ECkGF;IDjGG,wBAAA;EJsyCD;AACF;AIxzCE;ECkHF;IDjHG,gBAAA;EJ2zCD;AACF;AIxzCC;EAEC;IC2GF;MD1GG,sEAhBc;IJ00Cb;EACF;EIxzCA;ICuGF;MDtGG,gDAAA;IJ2zCC;EACF;AACF;AIzzCE;ECkGF;IDjGG,WAAA;EJ4zCD;AACF;AK7sCQ;EACI,qBAAA;AL+sCZ;AK7sCQ;EACI,wBAAA;AL+sCZ;AK7sCQ;EACI,gCAAA;AL+sCZ;AK3sCI;EACI,WAAA;EACA,kBAAA;EAGA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;AL2sCR;AI/1CE;EC4IE;ID3ID,cAAA;EJk2CD;AACF;AI/1CC;EAEC;ICqIE;MDpID,sEAhBc;IJi3Cb;EACF;EI/1CA;ICiIE;MDhID,kDAAA;IJk2CC;EACF;AACF;AIh2CE;EC4HE;ID3HD,YAAA;EJm2CD;AACF;AIr3CE;EC4IE;ID3ID,eAAA;EJw3CD;AACF;AIr3CC;EAEC;ICqIE;MDpID,yEAhBc;IJu4Cb;EACF;EIr3CA;ICiIE;MDhID,sDAAA;IJw3CC;EACF;AACF;AIt3CE;EC4HE;ID3HD,gBAAA;EJy3CD;AACF;AKtvCQ;EATJ;IAUQ,aAAA;ELyvCV;AACF;AKtvCI;EACI,WAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,sBAAA;EACA,4BAAA;EACA,+BAAA;ALwvCR;AKrvCI;EACI,sBAAA;EACA,uBAAA;ALuvCR;AKpvCY;EACI,sBAAA;ALsvChB;AKnvCY;EACI,WAAA;ALqvChB;AKlvCQ;EACI,qBAAA;EACA,gBAAA;ALovCZ;AKjvCQ;EACI,gCAAA;ALmvCZ;AKhvCQ;EACI,gCAAA;ALkvCZ;;AK3uCA;EACI,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;AL8uCJ;AIr7CE;ECkMF;IDjMG,uBAAA;EJw7CD;AACF;AIr7CC;EAEC;IC2LF;MD1LG,gFAhBc;IJu8Cb;EACF;EIr7CA;ICuLF;MDtLG,6DAAA;IJw7CC;EACF;AACF;AIt7CE;ECkLF;IDjLG,wBAAA;EJy7CD;AACF;;AKhwCA;EACI,aAAA;EACA,eAAA;EACA,uBAAA;EACA,SAAA;ALmwCJ;AKlwCI;EAEI,qFAAA;EACA,kBAAA;EAEA,gBAAA;ALkwCR;AIv9CE;ECgNE;ID/MD,YAAA;EJ09CD;AACF;AIv9CC;EAEC;ICyME;MDxMD,sEAhBc;IJy+Cb;EACF;EIv9CA;ICqME;MDpMD,iDAAA;IJ09CC;EACF;AACF;AIx9CE;ECgME;ID/LD,cAAA;EJ29CD;AACF;AI7+CE;ECgNE;ID/MD,aAAA;EJg/CD;AACF;AI7+CC;EAEC;ICyME;MDxMD,uEAhBc;IJ+/Cb;EACF;EI7+CA;ICqME;MDpMD,kDAAA;IJg/CC;EACF;AACF;AI9+CE;ECgME;ID/LD,eAAA;EJi/CD;AACF;AK7yCQ;EACI,2BAAA;AL+yCZ;AK9yCW;EACK,4BAAA;ALgzChB;AK9yCW;EACC,iBAAA;ALgzCZ;AK3yCI;EACI,WAAA;EACA,YAAA;EACA,eAAA;EACA,4BAAA;AL6yCR;AK1yCC;EACO,kBAAA;EACA,OAAA;EACA,SAAA;EAGA,2BAAA;EACA,+BAAA;AL0yCR;AIzhDE;ECwOD;IDvOE,wBAAA;EJ4hDD;AACF;AIzhDC;EAEC;ICiOD;MDhOE,kFAhBc;IJ2iDb;EACF;EIzhDA;IC6ND;MD5NE,4DAAA;IJ4hDC;EACF;AACF;AI1hDE;ECwND;IDvNE,wBAAA;EJ6hDD;AACF;AI/iDE;ECwOD;IDvOE,sBAAA;EJkjDD;AACF;AI/iDC;EAEC;ICiOD;MDhOE,gFAhBc;IJikDb;EACF;EI/iDA;IC6ND;MD5NE,6DAAA;IJkjDC;EACF;AACF;AIhjDE;ECwND;IDvNE,uBAAA;EJmjDD;AACF;AKn1CC;EACO,eAAA;EACA,WAAA;EACA,qBAAA;ALq1CR;AKp1CQ;EAJP;IAKW,eAAA;ELu1CV;AACF;AKp1CC;EACO,eAAA;EACA,WAAA;ALs1CR;AKr1CQ;EAHP;IAIW,eAAA;ELw1CV;AACF;;AIxlDE;ECsQF;IDrQG,yBAAA;EJ4lDD;AACF;AIzlDC;EAEC;IC+PF;MD9PG,mFAhBc;IJ2mDb;EACF;EIzlDA;IC2PF;MD1PG,8DAAA;IJ4lDC;EACF;AACF;AI1lDE;ECsPF;IDrPG,yBAAA;EJ6lDD;AACF;AKv2CI;EACI,aAAA;EACA,eAAA;EACA,uBAAA;ALy2CR;AIpnDE;ECwQE;IDvQD,YAAA;EJunDD;AACF;AIpnDC;EAEC;ICiQE;MDhQD,qEAhBc;IJsoDb;EACF;EIpnDA;IC6PE;MD5PD,kDAAA;IJunDC;EACF;AACF;AIrnDE;ECwPE;IDvPD,aAAA;EJwnDD;AACF;AK33CI;EACI,kBAAA;EACA,gBAAA;AL63CR;AKz3CY;EACI,UAAA;EACA,mBAAA;AL23ChB;AIlpDE;EC2RE;ID1RD,gBAAA;EJqpDD;AACF;AIlpDC;EAEC;ICoRE;MDnRD,4EAhBc;IJoqDb;EACF;EIlpDA;ICgRE;MD/QD,wDAAA;IJqpDC;EACF;AACF;AInpDE;EC2QE;ID1QD,iBAAA;EJspDD;AACF;AIxqDE;EC2RE;ID1RD,gBAAA;EJ2qDD;AACF;AIxqDC;EAEC;ICoRE;MDnRD,2EAhBc;IJ0rDb;EACF;EIxqDA;ICgRE;MD/QD,uDAAA;IJ2qDC;EACF;AACF;AIzqDE;EC2QE;ID1QD,iBAAA;EJ4qDD;AACF;AK95CI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;ALg6CR;AInsDE;ECgSE;ID/RD,oBAAA;EJssDD;AACF;AInsDC;EAEC;ICyRE;MDxRD,8EAhBc;IJqtDb;EACF;EInsDA;ICqRE;MDpRD,2DAAA;IJssDC;EACF;AACF;AIpsDE;ECgRE;ID/QD,qBAAA;EJusDD;AACF;AIztDE;ECgSE;ID/RD,qBAAA;EJ4tDD;AACF;AIztDC;EAEC;ICyRE;MDxRD,6EAhBc;IJ2uDb;EACF;EIztDA;ICqRE;MDpRD,0DAAA;IJ4tDC;EACF;AACF;AI1tDE;ECgRE;ID/QD,sBAAA;EJ6tDD;AACF;AKz8CQ;EANJ;IAOQ,eAAA;EL48CV;AACF;AKz8CI;EACI,eAAA;EACA,gBAAA;AL28CR;AIxvDE;ECgTE;ID/SD,cAAA;EJ2vDD;AACF;AIxvDC;EAEC;ICySE;MDxSD,wEAhBc;IJ0wDb;EACF;EIxvDA;ICqSE;MDpSD,gDAAA;IJ2vDC;EACF;AACF;AIzvDE;ECgSE;ID/RD,cAAA;EJ4vDD;AACF;AI9wDE;ECgTE;ID/SD,gBAAA;EJixDD;AACF;AI9wDC;EAEC;ICySE;MDxSD,2EAhBc;IJgyDb;EACF;EI9wDA;ICqSE;MDpSD,uDAAA;IJixDC;EACF;AACF;AI/wDE;ECgSE;ID/RD,iBAAA;EJkxDD;AACF;AK/+CI;EACI,mBAAA;EACA,kBAAA;ALi/CR;AK/+CQ;EAJJ;IAKQ,eAAA;IACA,cAAA;ELk/CV;AACF;AK/+CI;EACI,kBAAA;ALi/CR;AKh/CQ;EAFJ;IAGQ,aAAA;ELm/CV;AACF;AKh/CI;EACI,WAAA;EACA,UAAA;EACA,UAAA;EACA,kBAAA;EACA,8FAAA;ALk/CR;AKh/CQ;EAPJ;IAQQ,WAAA;IACA,UAAA;ELm/CV;AACF;AKl/CQ;EAXJ;IAYQ,UAAA;IACA,SAAA;ELq/CV;AACF;;AKl/CA;EACI,aAAA;EACA,eAAA;EACA,2BAAA;EACA,kBAAA;ALq/CJ;AIh1DE;ECuVF;IDtVG,mBAAA;EJm1DD;AACF;AIh1DC;EAEC;ICgVF;MD/UG,6EAhBc;IJk2Db;EACF;EIh1DA;IC4UF;MD3UG,8DAAA;IJm1DC;EACF;AACF;AIj1DE;ECuUF;IDtUG,wBAAA;EJo1DD;AACF;AIt2DE;ECuVF;IDtVG,qBAAA;EJy2DD;AACF;AIt2DC;EAEC;ICgVF;MD/UG,8EAhBc;IJw3Db;EACF;EIt2DA;IC4UF;MD3UG,sDAAA;IJy2DC;EACF;AACF;AIv2DE;ECuUF;IDtUG,qBAAA;EJ02DD;AACF;AI53DE;ECuVF;IDtVG,sBAAA;EJ+3DD;AACF;AI53DC;EAEC;ICgVF;MD/UG,+EAhBc;IJ84Db;EACF;EI53DA;IC4UF;MD3UG,4DAAA;IJ+3DC;EACF;AACF;AI73DE;ECuUF;IDtUG,uBAAA;EJg4DD;AACF;AKnjDI;EACI,mBAAA;EAEA,gBAAA;EACA,gBAAA;ALojDR;AIv5DE;EC+VE;ID9VD,kBAAA;EJ05DD;AACF;AIv5DC;EAEC;ICwVE;MDvVD,2EAhBc;IJy6Db;EACF;EIv5DA;ICoVE;MDnVD,wDAAA;IJ05DC;EACF;AACF;AIx5DE;EC+UE;ID9UD,mBAAA;EJ25DD;AACF;AI76DE;EC+VE;ID9VD,iBAAA;EJg7DD;AACF;AI76DC;EAEC;ICwVE;MDvVD,6EAhBc;IJ+7Db;EACF;EI76DA;ICoVE;MDnVD,uDAAA;IJg7DC;EACF;AACF;AI96DE;EC+UE;ID9UD,gBAAA;EJi7DD;AACF;AK9lDQ;EACI,WAAA;EACA,kBAAA;EAEA,WAAA;EACA,gCAAA;EACA,WAAA;EACA,SAAA;AL+lDZ;AI38DE;ECqWM;IDpWL,eAAA;EJ88DD;AACF;AI38DC;EAEC;IC8VM;MD7VL,yEAhBc;IJ69Db;EACF;EI38DA;IC0VM;MDzVL,sDAAA;IJ88DC;EACF;AACF;AI58DE;ECqVM;IDpVL,gBAAA;EJ+8DD;AACF;AIj+DE;EC+VE;ID9VD,mBAAA;EJo+DD;AACF;AIj+DC;EAEC;ICwVE;MDvVD,6EAhBc;IJm/Db;EACF;EIj+DA;ICoVE;MDnVD,8DAAA;IJo+DC;EACF;AACF;AIl+DE;EC+UE;ID9UD,wBAAA;EJq+DD;AACF;AKzoDQ;EAGI;IAEI,UAAA;ELwoDd;AACF;AI5/DE;ECiXU;IDhXT,aAAA;EJ+/DD;AACF;AI5/DC;EAEC;IC0WU;MDzWT,sEAhBc;IJ8gEb;EACF;EI5/DA;ICsWU;MDrWT,mDAAA;IJ+/DC;EACF;AACF;AI7/DE;ECiWU;IDhWT,cAAA;EJggED;AACF;;AKvpDA;EACQ,gCAAA;EACA,aAAA;AL0pDR;AKzpDQ;EAHR;IAIY,aAAA;EL4pDV;AACF;AK3pDE;EACU,iBAAA;EACA,UAAA;EACA,gBAAA;EACA,kBAAA;AL6pDZ;AIliEE;ECiYA;IDhYC,sBAAA;EJqiED;AACF;AIliEC;EAEC;IC0XA;MDzXC,gFAhBc;IJojEb;EACF;EIliEA;ICsXA;MDrXC,0DAAA;IJqiEC;EACF;AACF;AIniEE;ECiXA;IDhXC,sBAAA;EJsiED;AACF;AIxjEE;ECiYA;IDhYC,0BAAA;EJ2jED;AACF;AIxjEC;EAEC;IC0XA;MDzXC,oFAhBc;IJ0kEb;EACF;EIxjEA;ICsXA;MDrXC,8DAAA;IJ2jEC;EACF;AACF;AIzjEE;ECiXA;IDhXC,wBAAA;EJ4jED;AACF;AKtsDY;EACA,WAAA;EAGA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,kBAAA;EACA,yBAAA;ALssDZ;AItlEE;ECwYU;IDvYT,iBAAA;EJylED;AACF;AItlEC;EAEC;ICiYU;MDhYT,0EAhBc;IJwmEb;EACF;EItlEA;IC6XU;MD5XT,qDAAA;IJylEC;EACF;AACF;AIvlEE;ECwXU;IDvXT,cAAA;EJ0lED;AACF;AI5mEE;ECwYU;IDvYT,kBAAA;EJ+mED;AACF;AI5mEC;EAEC;ICiYU;MDhYT,2EAhBc;IJ8nEb;EACF;EI5mEA;IC6XU;MD5XT,sDAAA;IJ+mEC;EACF;AACF;AI7mEE;ECwXU;IDvXT,eAAA;EJgnED;AACF;AKjvDY;EATA;IAUI,aAAA;ELovDd;AACF;AKhvDE;EACU,WAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;ALkvDZ;AI7oEE;ECuZA;IDtZC,mBAAA;EJgpED;AACF;AI7oEC;EAEC;ICgZA;MD/YC,4EAhBc;IJ+pEb;EACF;EI7oEA;IC4YA;MD3YC,4DAAA;IJgpEC;EACF;AACF;AI9oEE;ECuYA;IDtYC,uBAAA;EJipED;AACF;AInqEE;ECuZA;IDtZC,qBAAA;EJsqED;AACF;AInqEC;EAEC;ICgZA;MD/YC,8EAhBc;IJqrEb;EACF;EInqEA;IC4YA;MD3YC,sDAAA;IJsqEC;EACF;AACF;AIpqEE;ECuYA;IDtYC,qBAAA;EJuqED;AACF;AKvxDY;EAXV;IAYc,YAAA;EL0xDd;AACF;AKvxDE;EACU,SAAA;EACA,aAAA;EACA,sBAAA;ALyxDZ;AInsEE;ECuaA;IDtaC,oBAAA;EJssED;AACF;AInsEC;EAEC;ICgaA;MD/ZC,4EAhBc;IJqtEb;EACF;EInsEA;IC4ZA;MD3ZC,uDAAA;IJssEC;EACF;AACF;AIpsEE;ECuZA;IDtZC,oBAAA;EJusED;AACF;AIztEE;ECuaA;IDtaC,qBAAA;EJ4tED;AACF;AIztEC;EAEC;ICgaA;MD/ZC,uFAhBc;IJ2uEb;EACF;EIztEA;IC4ZA;MD3ZC,yEAAA;IJ4tEC;EACF;AACF;AI1tEE;ECuZA;IDtZC,6BAAA;EJ6tED;AACF;AKl0DY;EANV;IAOc,mBAAA;ELq0Dd;AACF;AKl0DE;EACU,kBAAA;ALo0DZ;AKj0DgB;EACI,WAAA;EACA,2BAAA;ALm0DpB;AKl0DoB;EACI,UAAA;EACA,0BAAA;ALo0DxB;AKj0DgB;EACI,UAAA;ALm0DpB;AK9zDE;EACU,cAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,gDAAA;EAiBA,wBAAA;ALgzDZ;AKh0DY;EACI,WAAA;EACA,WAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,4BAAA;EACA,UAAA;EACA,kDAAA;ALk0DhB;AKj0DgB;EAXJ;IAYQ,aAAA;ELo0DlB;AACF;AK9zDE;EACU,UAAA;EACA,eAAA;EACA,gBAAA;EACA,6BAAA;ALg0DZ;;AK3zDA;EACI,aAAA;AL8zDJ;AK7zDI;EAFJ;IAGQ,sBAAA;IACA,uBAAA;ELg0DN;AACF;;AI3yEE;EC8eF;ID7eG,iBAAA;EJ+yED;AACF;AI5yEC;EAEC;ICueF;MDteG,6EAhBc;IJ8zEb;EACF;EI5yEA;ICmeF;MDleG,sDAAA;IJ+yEC;EACF;AACF;AI7yEE;EC8dF;ID7dG,gBAAA;EJgzED;AACF;AIl0EE;EC8eF;ID7eG,qBAAA;EJq0ED;AACF;AIl0EC;EAEC;ICueF;MDteG,8EAhBc;IJo1Eb;EACF;EIl0EA;ICmeF;MDleG,sDAAA;IJq0EC;EACF;AACF;AIn0EE;EC8dF;ID7dG,qBAAA;EJs0ED;AACF;AKp2DE;EACU,WAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;ALs2DZ;AI91EE;ECofA;IDnfC,wBAAA;EJi2ED;AACF;AI91EC;EAEC;IC6eA;MD5eC,kFAhBc;IJg3Eb;EACF;EI91EA;ICyeA;MDxeC,4DAAA;IJi2EC;EACF;AACF;AI/1EE;ECoeA;IDneC,wBAAA;EJk2ED;AACF;;AIp3EE;ECkgBF;IDjgBG,kBAAA;EJw3ED;AACF;AIr3EC;EAEC;IC2fF;MD1fG,uEAhBc;IJu4Eb;EACF;EIr3EA;ICufF;MDtfG,kDAAA;IJw3EC;EACF;AACF;AIt3EE;ECkfF;IDjfG,iBAAA;EJy3ED;AACF;AI34EE;ECkgBF;IDjgBG,uBAAA;EJ84ED;AACF;AI34EC;EAEC;IC2fF;MD1fG,gFAhBc;IJ65Eb;EACF;EI34EA;ICufF;MDtfG,6DAAA;IJ84EC;EACF;AACF;AI54EE;ECkfF;IDjfG,wBAAA;EJ+4ED;AACF;AKz5DI;EACI,aAAA;AL25DR;;AKt5DI;EACI,uBAAA;EACA,4BAAA;ALy5DR;AKx5DQ;EACI,oBAAA;AL05DZ;AKt5DI;EACI,mBAAA;EAGA,YAAA;EACR,aAAA;ALs5DA;AIj7EE;ECshBE;IDrhBD,gBAAA;EJo7ED;AACF;AIj7EC;EAEC;IC+gBE;MD9gBD,4EAhBc;IJm8Eb;EACF;EIj7EA;IC2gBE;MD1gBD,wDAAA;IJo7EC;EACF;AACF;AIl7EE;ECsgBE;IDrgBD,iBAAA;EJq7ED;AACF;AIv8EE;ECshBE;IDrhBD,iBAAA;EJ08ED;AACF;AIv8EC;EAEC;IC+gBE;MD9gBD,4EAhBc;IJy9Eb;EACF;EIv8EA;IC2gBE;MD1gBD,uDAAA;IJ08EC;EACF;AACF;AIx8EE;ECsgBE;IDrgBD,iBAAA;EJ28ED;AACF;AK/7DI;EACI,YAAA;ALi8DR;AK97DI;EACI,mBAAA;EACA,kBAAA;ALg8DR;AIp+EE;ECkiBE;IDjiBD,cAAA;EJu+ED;AACF;AIp+EC;EAEC;IC2hBE;MD1hBD,uEAhBc;IJs/Eb;EACF;EIp+EA;ICuhBE;MDthBD,oDAAA;IJu+EC;EACF;AACF;AIr+EE;ECkhBE;IDjhBD,eAAA;EJw+ED;AACF;AI1/EE;ECkiBE;IDjiBD,iBAAA;EJ6/ED;AACF;AI1/EC;EAEC;IC2hBE;MD1hBD,4EAhBc;IJ4gFb;EACF;EI1/EA;ICuhBE;MDthBD,uDAAA;IJ6/EC;EACF;AACF;AI3/EE;ECkhBE;IDjhBD,iBAAA;EJ8/ED;AACF;AIhhFE;EC4iBF;ID3iBG,sBAAA;EJmhFD;AACF;AIhhFC;EAEC;ICqiBF;MDpiBG,6EAhBc;IJkiFb;EACF;EIhhFA;ICiiBF;MDhiBG,yDAAA;IJmhFC;EACF;AACF;AIjhFE;EC4hBF;ID3hBG,mBAAA;EJohFD;AACF;AKx/DI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,YAAA;AL0/DR;AI5iFE;EC8iBE;ID7iBD,wBAAA;EJ+iFD;AACF;AI5iFC;EAEC;ICuiBE;MDtiBD,gFAhBc;IJ8jFb;EACF;EI5iFA;ICmiBE;MDliBD,4DAAA;IJ+iFC;EACF;AACF;AI7iFE;EC8hBE;ID7hBD,sBAAA;EJgjFD;AACF;AK5gEI;EAII,eAAA;EACA,gBAAA;EACA,gBAAA;AL2gER;AIvkFE;ECsjBE;IDrjBD,qBAAA;EJ0kFD;AACF;AIvkFC;EAEC;IC+iBE;MD9iBD,+EAhBc;IJylFb;EACF;EIvkFA;IC2iBE;MD1iBD,4DAAA;IJ0kFC;EACF;AACF;AIxkFE;ECsiBE;IDriBD,sBAAA;EJ2kFD;AACF;AI7lFE;ECsjBE;IDrjBD,uBAAA;EJgmFD;AACF;AI7lFC;EAEC;IC+iBE;MD9iBD,iFAhBc;IJ+mFb;EACF;EI7lFA;IC2iBE;MD1iBD,8DAAA;IJgmFC;EACF;AACF;AI9lFE;ECsiBE;IDriBD,wBAAA;EJimFD;AACF;AInnFE;ECsjBE;IDrjBD,gBAAA;EJsnFD;AACF;AInnFC;EAEC;IC+iBE;MD9iBD,0EAhBc;IJqoFb;EACF;EInnFA;IC2iBE;MD1iBD,mDAAA;IJsnFC;EACF;AACF;AIpnFE;ECsiBE;IDriBD,cAAA;EJunFD;AACF;AIzoFE;EC+jBE;ID9jBD,qBAAA;EJ4oFD;AACF;AIzoFC;EAEC;ICwjBE;MDvjBD,+EAhBc;IJ2pFb;EACF;EIzoFA;ICojBE;MDnjBD,4DAAA;IJ4oFC;EACF;AACF;AI1oFE;EC+iBE;ID9iBD,sBAAA;EJ6oFD;AACF;;AM/uFA;EACI,kBAAA;ANkvFJ","sourcesContent":["@use \"sass:math\";\r\n\r\n// Підключення міксинів ===========================================================================================================================================================================================================================================================================\r\n@import \"base/mixins\";\r\n\r\n// Підключення шрифтів ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - додати при підключенні через плагін\r\n\r\n// Підключити, якщо є локальні файли шрифтів\r\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');\r\n\r\n// Підключення іконкових шрифтів ==============================================================================================================================================================================================================================================================================\r\n// Підключити, якщо є файл іконкового шрифту\r\n//@import \"fonts/icons\";\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// Налаштування шаблону ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// За замовчуванням шрифт ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: \"Inter\";\r\n$fontSize: toRem(15); // де 14(px) - розмір шрифту за замовчуванням з макету\r\n\r\n// Основні кольори\r\n$mainColor: #0E0E0E; // Колір шрифту за замовчуванням\r\n\r\n// Палітра кольорів\r\n// @import \"base/colors-palette\";\r\n\r\n// Налаштування адаптивної сітки ===============================================================================================================================================================================================================================================================================================\r\n\r\n// Мінімальна ширина сторінки\r\n$minWidth: 320;\r\n// Ширина полотна (макету)\r\n$maxWidth: 1366;\r\n// Ширина обмежуючого контейнера (0 = немає обмеження)\r\n$maxWidthContainer: 1170;\r\n// Загальний відступ у контейнера\r\n// (30 = по 15px ліворуч і праворуч, 0 = немає відступу)\r\n$containerPadding: 30;\r\n\r\n// Ширина спрацьовування першого брейкпоінту\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поїнти\r\n$pc: em($containerWidth); // ПК, ноутбуки, деякі планшети у горизонтальному положенні\r\n$tablet: em(991.98); // Планшети, деякі телефони в горизонтальному положенні\r\n$mobile: em(767.98); // Телефони L\r\n$mobileSmall: em(479.98); // Телефони S\r\n\r\n// Тип адаптива:\r\n// 1 = чуйність (у контейнера немає брейкпоінтів),\r\n// 2 = по брейк-поїнт (контейнер змінює свою ширину по брейк-поїнт)\r\n$responsiveType: 1;\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// Обнулення ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import \"base/null\";\r\n\r\n// Стилі тега BODY ============================================================================================================================================================================================================================================================================================================================================================================================\r\nbody {\r\n\t// Скролл заблоковано\r\n\t.lock & {\r\n\t\toverflow: hidden;\r\n\t\ttouch-action: none;\r\n\t\toverscroll-behavior: none;\r\n\t}\r\n\t// Сайт завантажений\r\n\t.loaded & {\r\n\t}\r\n}\r\n// Оболонка wrapper ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n\tmin-height: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\toverflow: hidden;\r\n\t@supports (overflow: clip) {\r\n\t\toverflow: clip;\r\n\t}\r\n\t// Притискаємо footer\r\n\t> main {\r\n\t\tflex: 1 1 auto;\r\n\t}\r\n\t// Фікс для слайдерів\r\n\t> * {\r\n\t\tmin-width: 0;\r\n\t}\r\n}\r\n// Обмежуючий контейнер ======================================================================================================================================================================================================================\r\n/*\r\n(i) Стилі будуть застосовуватись до\r\nвсіх класів, що містять *__container\r\nНаприклад header__container, main__container і т.п.\r\nСніппет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n\t// Чуйна\r\n\t[class*=\"__container\"] {\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: toRem($containerWidth);\r\n\t\t\tmargin: 0 auto;\r\n\t\t}\r\n\t\t@if ($containerPadding>0) {\r\n\t\t\t@if ($maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\r\n\t\t\t} @else {\r\n\t\t\t\t@include adaptiveValue(\"padding-left\", math.div($containerPadding, 2), 15);\r\n\t\t\t\t@include adaptiveValue(\"padding-right\", math.div($containerPadding, 2), 15);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n} @else {\r\n\t// Брейк-поїнтами\r\n\t[class*=\"__container\"] {\r\n\t\tmargin: 0 auto;\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: toRem($containerWidth);\r\n\t\t} @else {\r\n\t\t\t@if ($containerPadding>0) {\r\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $pc) {\r\n\t\t\tmax-width: toRem(970);\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmax-width: toRem(750);\r\n\t\t}\r\n\t\t@media (max-width: $mobile) {\r\n\t\t\tmax-width: none;\r\n\t\t\t@if ($containerPadding>0 and $maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// Підключення базових стилів, шаблонів (заготівель) та допоміжних класів\r\n// Для підключення/вимкнення конкретних стилів дивись base.scss\r\n@import \"base\";\r\n\r\n// Підключення стилів загальних елементів проекту\r\n@import \"common\";\r\n\r\n// Підключення стилів окремих блоків\r\n@import \"header\";\r\n@import \"footer\";\r\n\r\n// Підключення стилів окремих сторінок\r\n@import \"home\";\r\n\r\n// Змінні\r\n\r\n@import \"utils/vars\";\r\n","* {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: 0px;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n\t// outline: none;\r\n}\r\na:focus,\r\na:active {\r\n\t// outline: none;\r\n}\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tmin-width: $minWidth + px;\r\n}\r\nbody {\r\n\tcolor: $mainColor;\r\n\tline-height: 1;\r\n\tfont-family: $fontFamily;\r\n\tfont-size: $fontSize;\r\n\t//text-rendering: optimizeLegibility;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n\tfont-family: $fontFamily;\r\n\tfont-size: inherit;\r\n\tline-height: inherit;\r\n}\r\nbutton {\r\n\tcursor: pointer;\r\n\tcolor: inherit;\r\n\tbackground-color: transparent;\r\n}\r\na {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\nul li {\r\n\tlist-style: none;\r\n}\r\nimg {\r\n\tvertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n","// Загальний файл елементів форм\r\n// Для підключення/відключення стилів конкретного елемента форми дивись base/forms/forms.scss\r\n@import \"base/forms/forms\";\r\n\r\n// Стилі попапів\r\n// @import \"base/popup\";\r\n\r\n// Стилі спойлерів\r\n// @import \"base/spollers\";\r\n\r\n// Стилі табів\r\n// @import \"base/tabs\";\r\n\r\n// Стилі мап\r\n// @import \"base/maps\";\r\n\r\n// Стилі блоку \"показати ще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стилі для липкого блоку\r\n// @import \"base/sticky\";\r\n\r\n// Стилі для повноекранного блоку\r\n// @import \"base/fullscreen\";\r\n\r\n// Стилі для поекраної прокрутки\r\n// Styles for fullpage scroll\r\n// @import \"base/fullpage\";\r\n\r\n// Стилі для ripple ефекту\r\n// Styles for ripple effect\r\n// @import \"base/ripple\";\r\n\r\n// Стилі для кастомного курсору\r\n// Styles for custom cursor\r\n// @import \"base/cursor\";\r\n\r\n// Стилі для чуйних картинок (IBG)\r\n// Сніппет (HTML): ibg (div з картинкою та класами)\r\n// Сніппет (HTML): ibga (a з картинкою та класами)\r\n[class*=\"-ibg\"] {\r\n\tposition: relative;\r\n\timg {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tobject-fit: cover;\r\n\t}\r\n}\r\n[class*=\"-ibg--contain\"] {\r\n\timg {\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n// Шаблони (заготівлі)\r\n// @extend %ім'я шаблону;\r\n// Сніппет (SCSS): ex\r\n\r\n// Лічильник для списку\r\n%listCounter {\r\n\tlist-style-type: none;\r\n\tcounter-reset: item;\r\n\tli {\r\n\t\tposition: relative;\r\n\t\t&:before {\r\n\t\t\tcounter-increment: item;\r\n\t\t\tcontent: counter(item);\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t}\r\n}\r\n// Адаптивне відео\r\n%responsiveVideo {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 0;\r\n\tpadding-bottom: 56.25%;\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n// Відео як фон\r\n%videoBackground {\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: fixed;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t\tz-index: -100;\r\n\t\ttransform: translateX(-50%) translateY(-50%);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}\r\n// Сірий фільтр\r\n%grayfilter {\r\n\ttransition: all 0.3s ease 0s;\r\n\tfilter: grayscale(1);\r\n\t@media (any-hover: hover) {\r\n\t\t&:hover {\r\n\t\t\tfilter: grayscale(0);\r\n\t\t}\r\n\t}\r\n}\r\n// Скасувати виділення\r\n%noselect {\r\n\tuser-select: none;\r\n}\r\n// Дзеркальне відображення\r\n%mirror {\r\n\ttransform: scale(-1, 1);\r\n}\r\n// Плавний скролл\r\n%smoothscroll {\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n// Сховати скролл\r\n%hidescroll {\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n","//====================================================================================================\r\n\r\n.header {\r\n\tbackground-color: var(--dark-cl);\r\n\tcolor: #fff;\r\n\t&__menu {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\t@media (max-width:580px){\r\n\t\t\tjustify-content: space-between;\r\n\t\t\theight: 52px;\r\n\t\t  }\r\n\t}\r\n\r\n\t&__logo {\r\n\t\tmargin-right: auto;\r\n\t\t@include adaptiveValue(\"font-size\", 20, 15);\r\n\t}\r\n}\r\n.menu {\r\n\r\n\t&__body {\r\n\t\t@include adaptiveValue(\"padding-top\", 35, 25);\r\n\t\t@include adaptiveValue(\"padding-bottom\", 35, 25);\r\n\t\tdisplay: flex;\r\n\t\tz-index: 10;\r\n\t\t@media (max-width:580px){\r\n\t\t\tflex-direction: column;\r\n\t\t\talign-items: center;\r\n\t\t  }\r\n\t}\r\n\r\n\t&__list {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\t@include adaptiveValue(\"margin-right\", 60, 50);\r\n\t\t@include adaptiveValue(\"gap\", 40, 30);\r\n\r\n\t\t@media (max-width:580px){\r\n\t\t\tflex-direction: column;\r\n\t\t\talign-items: center;\r\n\t\t\tmargin: 0;\r\n\t\t\tflex: 2;\r\n\t\t  }\r\n\t  }\r\n\r\n\t&__link {\r\n\t\t@include adaptiveValue(\"padding-top\", 35, 25);\r\n\t\t@include adaptiveValue(\"padding-bottom\", 35, 25);\r\n\t\tfont-size: 16px;\r\n\t\tposition: relative;\r\n\r\n\t\t@media (max-width:580px){\r\n\t\t\tfont-size: 28px;\r\n\t\t  }\r\n\t\t\r\n\t\t&::before {\r\n\t\t\tcontent: '';\r\n\t\t\tposition: absolute;\r\n\t\t\tdisplay: block;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 45px;\r\n\t\t\theight: 1px;\r\n\t\t\twidth: 100%;\r\n\t\t\tbackground-color: #fff;\r\n\t\t\ttransform: translateX(-100%);\r\n\t\t\topacity: 0;\r\n\t\t\tvisibility: hidden;\r\n\t\t\ttransition: visibility 0.5s ease, opacity 0.3s ease, transform 0.3s ease;\r\n\t\t}\r\n\r\n\t\t&:hover {\r\n\t\t\t&::before {\r\n\t\t\t\ttransform: translateX(0);\r\n\t\t\t\topacity: 1;\r\n\t\t\t\tvisibility: visible;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n.socials-list {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\t@include adaptiveValue(\"gap\", 15, 10);\r\n\r\n\t@media (max-width:580px){\r\n\t\tgap: 30px;\r\n\t\tflex: 1;\r\n  \t}\r\n\r\n\t&__icon {\r\n\t\t@media (max-width:580px){\r\n\t\t\twidth: 25px;\r\n\t\t\theight: 25px;\r\n  \t}\r\n\t}\r\n}\r\n\r\n//====================================================================================================\r\n\r\n//Burger\r\n@media (max-width: 580px) {\r\n\t.menu__body {\r\n\t\tposition: fixed;\r\n\t\ttop: 52px;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttransform: translateX(-100%);\r\n\t\tbackground-color: var(--dark-cl);\r\n\t\toverflow: auto;\r\n\t\ttransition: transform 0.3s ease;\r\n\t}\r\n}\r\n\r\n.icon-menu {\r\n\t@media (min-width:580px){\r\n\t\tdisplay: none;  \r\n\t}\r\n\t@media (max-width: 580px) {\r\n\t\tdisplay: block;\r\n\t\tposition: relative;\r\n\t\twidth: toRem(30);\r\n\t\theight: toRem(18);\r\n\t\tz-index: 5;\r\n\t\t@media (any-hover: none) {\r\n\t\t\tcursor: default;\r\n\t\t}\r\n\t\tspan,\r\n\t\t&::before,\r\n\t\t&::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\tright: 0;\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: toRem(2);\r\n\t\t\tbackground-color: #fff;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t\t&::after {\r\n\t\t\tbottom: 0;\r\n\t\t}\r\n\t\tspan {\r\n\t\t\ttop: calc(50% - toRem(1));\r\n\t\t}\r\n\t\t.menu-open & {\r\n\t\t\t+.menu__body {\r\n\t\t\t\ttransform: translateX(0);\r\n\t\t\t}\r\n\t\t\tspan {\r\n\t\t\t\twidth: 0;\r\n\t\t\t}\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t}\r\n\t\t\t&::before {\r\n\t\t\t\ttop: calc(50% - toRem(1));\r\n\t\t\t\ttransform: rotate(-45deg);\r\n\t\t\t}\r\n\t\t\t&::after {\r\n\t\t\t\tbottom: calc(50% - toRem(1));\r\n\t\t\t\ttransform: rotate(45deg);\r\n\t\t\t}\r\n\t}\r\n\t\t\t\r\n\t\t}\t\r\n\t}\r\n\t\r\n\t\r\n\r\n","//Підключення шрифту\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc:\r\n\t\t\turl(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"),\r\n\t\t\turl(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from: 100) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function toRem($px, $current: 16) {\r\n\t$result: math.div($px, $current) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивна властивість (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $keepSize: 0, $widthFrom: $containerWidth, $widthTo: $minWidth) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поїнти в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плаваючого значення\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{toRem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Отримання значення властивості\r\n\t$propertyValue: #{\"clamp(\" toRem($minSize) \",\" $flyValue \",\" toRem($startSize) \")\"};\r\n\t// Якщо негативні значення\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" toRem($startSize) \",\" $flyValue \",\" toRem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Встановлюємо значення за замовчуванням\r\n\t@if $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: toRem($startSize);\r\n\t\t}\r\n\t}\r\n\t// Адаптуємо розмір у проміжку між зазначеними ширинами в'юпорту\r\n\t@media (min-width: $widthToMedia) and (max-width: $widthFromMedia) {\r\n\t\t// Якщо підтримується clamp();\r\n\t\t@supports (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: $propertyValue;\r\n\t\t}\r\n\t\t// Якщо не підтримується clamp();\r\n\t\t@supports not (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: calc(#{toRem($minSize)} + #{$addSize} * (100vw - #{toRem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t\t}\r\n\t}\r\n\t@if $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: toRem($minSize);\r\n\t\t}\r\n\t}\r\n}\r\n","//====================================================================================================\r\n// Hero section\r\n//====================================================================================================\r\n.hero {\r\n    background-color: var(--dark-cl);\r\n    position: relative;\r\n    @include adaptiveValue(\"height\", 480, 270);\r\n    &__container {\r\n        position: relative;\r\n    }\r\n}\r\n\r\n.swiper-counter {\r\n    position: relative;\r\n    @include adaptiveValue(\"bottom\", 70, 30);\r\n    @include adaptiveValue(\"left\", 200, 15);\r\n    @include adaptiveValue(\"width\", 80, 50);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    color: #fff;\r\n    &__item {\r\n        &::after {\r\n            content: '';\r\n            height: 1px;\r\n            @include adaptiveValue(\"width\", 20, 10);\r\n            background-color: #fff;\r\n            position: absolute;\r\n            top: 7px;\r\n            @include adaptiveValue(\"left\", 30, 19);\r\n    }\r\n\r\n    &span {\r\n        @include adaptiveValue(\"font-size\", 14, 12);  \r\n    }\r\n    }\r\n}\r\n\r\n.block-title {\r\n        position: absolute;\r\n        @include adaptiveValue(\"top\", 175, 50);\r\n        @include adaptiveValue(\"left\", 200, 30);\r\n        @include adaptiveValue(\"width\", 516, 300);\r\n        padding: 40px 0 40px 0;\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 70, 36);\r\n        font-weight: 500;\r\n        line-height: 1.1;\r\n        color: #fff;\r\n        text-shadow: 4px 4px 2px rgba(0,0,0,0.6);\r\n        &::before {\r\n            content: '';\r\n            position: absolute;\r\n            top: 0;\r\n            left: 0;\r\n            height: 1px;\r\n            width: 70px;\r\n            background-color: #fff;\r\n        }\r\n    }\r\n    &::before {\r\n        content: '';\r\n        height: 1px;\r\n        width: 70px;\r\n    }\r\n}\r\n\r\n.btn-view {\r\n    position: absolute;\r\n    @include adaptiveValue(\"top\", 390, 160);\r\n    @include adaptiveValue(\"right\", 178, 20);\r\n    @include adaptiveValue(\"width\", 90, 55);\r\n    @include adaptiveValue(\"height\", 90, 55);\r\n    background-color: #fff;\r\n    color: var(--dark-cl);\r\n    border-radius: 50%;\r\n    @include adaptiveValue(\"font-size\", 15, 12);\r\n    font-weight: 500;\r\n    transition: transform 0.4s ease, box-shadow 0.4s ease;\r\n\r\n    &:hover {\r\n        transform: scale(1.1);\r\n        box-shadow: 2px 2px 15px 8px #fff;\r\n    }\r\n}\r\n\r\n.swiper-slide {\r\n    &__img {\r\n         @include adaptiveValue(\"height\", 580, 220);\r\n    }\r\n}\r\n\r\n.swiper-button-prev {\r\n    position: absolute;\r\n    top: 225px;\r\n    @include adaptiveValue(\"left\", -50, 400);\r\n    @media (max-width:958px){\r\n        display: none;\r\n      }\r\n}\r\n.swiper-button-next {\r\n    position: absolute;\r\n    top: 225px;\r\n    @include adaptiveValue(\"right\", -50, 400);\r\n    @media (max-width:958px){\r\n        display: none;\r\n      }\r\n}\r\n\r\n//====================================================================================================\r\n// About-us section\r\n//====================================================================================================\r\n.about-us {\r\n    @include adaptiveValue(\"padding-top\", 256, 40);\r\n\r\n    &__container--big {\r\n        width: 1306px;\r\n        margin: 0 auto;\r\n    }\r\n}\r\n.intro-block {\r\n    @include adaptiveValue(\"width\", 615, 290);\r\n    @include adaptiveValue(\"margin-bottom\", 93, 40);\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    &__label {\r\n        @include adaptiveValue(\"margin-bottom\", 25, 15);\r\n        font-weight: 500;\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 34, 24);\r\n        line-height: 1.3;\r\n        font-weight: 500;\r\n    }\r\n}\r\n.info-block {\r\n    display: flex;\r\n    justify-content: center;\r\n    @include adaptiveValue(\"margin-bottom\", 160, 60);\r\n    @include adaptiveValue(\"gap\", 110, 40);\r\n    @media (max-width:580px){\r\n        flex-direction: column;\r\n        @include adaptiveValue(\"padding-left\", 40, 20);\r\n      }\r\n\r\n    &__item--top-line {\r\n        @include adaptiveValue(\"width\", 391, 200);\r\n        @include adaptiveValue(\"padding-top\", 34, 20);\r\n        position: relative\r\n    }\r\n\r\n    &__text--big {\r\n        @include adaptiveValue(\"font-size\", 20, 18);\r\n        line-height: 1.5;\r\n\r\n        &::before {\r\n            content: '';\r\n            position: absolute;\r\n            top: 0;\r\n            left: 0;\r\n            height: 1px;\r\n            @include adaptiveValue(\"width\", 400, 210);\r\n            background-color: var(--dark-cl)\r\n        }\r\n    }\r\n\r\n    &__item--action {\r\n        @include adaptiveValue(\"width\", 463, 250);\r\n    }\r\n\r\n    &__text--small {\r\n        @include adaptiveValue(\"font-size\", 17, 15);\r\n        @include adaptiveValue(\"margin-bottom\", 50, 25);\r\n        line-height: 1.6;\r\n    }\r\n}\r\n\r\n\r\n.btn span {\r\n    position: relative;\r\n    z-index: 50;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    @include adaptiveValue(\"padding-left\", 39, 18);\r\n    @media (max-width: 959.98px) {\r\n        padding-left: 0;\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n    @media (max-width: 469.98px) {\r\n        font-size: 13px;\r\n    }\r\n}\r\n\r\n.btn {\r\n    @include adaptiveValue(\"padding-top\", 19, 10);\r\n    @include adaptiveValue(\"padding-bottom\", 19, 10);\r\n    @include adaptiveValue(\"width\", 170, 80);\r\n    background-color: var(--dark-cl);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    overflow: hidden;\r\n    z-index: 2;\r\n    outline: 1px solid var(--dark-cl);\r\n    position: relative;\r\n    \r\n\r\n    &:hover {\r\n        span {\r\n            color: var(--dark-cl);\r\n        }\r\n        &::before {\r\n            transform: translateX(0);\r\n        }\r\n        &::after {\r\n            background-color: var(--dark-cl);\r\n        }\r\n    }\r\n\r\n    &::after {\r\n        content: '';\r\n        position: absolute;\r\n        @include adaptiveValue(\"top\", 25, 12);\r\n        @include adaptiveValue(\"right\", 38, 19);\r\n        width: 6px;\r\n        height: 6px;\r\n        border-radius: 50%;\r\n        background-color: #fff;\r\n        @media (max-width: 959.98px) {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    &::before {\r\n        content: '';\r\n        position: absolute;\r\n        height: 100%;\r\n        width: 100%;\r\n        background-color: #fff;\r\n        transform: translateX(-125%);\r\n        transition: transform 0.4s ease;\r\n    }\r\n\r\n    &--reverse {\r\n        background-color: #fff;\r\n        outline: 1px solid #fff;\r\n\r\n        &:hover {\r\n            &::after {\r\n                background-color: #fff;\r\n            }\r\n\r\n            span {\r\n                color: #fff;\r\n            }\r\n        }\r\n        span {\r\n            color: var(--dark-cl);\r\n            font-weight: 500;\r\n        }\r\n\r\n        &::after {\r\n            background-color: var(--dark-cl);\r\n        }\r\n\r\n        &::before {\r\n            background-color: var(--dark-cl);\r\n        }\r\n    }\r\n}\r\n//====================================================================================================\r\n// Directions section\r\n//====================================================================================================\r\n.directions {\r\n    max-width: 1336px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    @include adaptiveValue(\"padding-bottom\", 140, 70);\r\n}\r\n\r\n.works-list {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 30px;\r\n    &__item {\r\n        @include adaptiveValue(\"width\", 304, 200);\r\n        background: linear-gradient(180deg, rgba(0, 0, 0, 0.13) 0%, rgba(0, 0, 0, 0.65) 100%);\r\n        position: relative;\r\n        @include adaptiveValue(\"height\", 400, 280);\r\n        overflow: hidden;\r\n        &:hover {\r\n            backdrop-filter: blur(10px);\r\n           .works-list__info {\r\n                transform: translateY(-16px);\r\n           }\r\n           .works-list__card {\r\n            filter: blur(7px);\r\n           }\r\n        }\r\n    }\r\n\r\n    &__card {\r\n        width: 100%;\r\n        height: 100%;\r\n        filter: blur(0);\r\n        transition: filter 0.5s ease;\r\n    }\r\n\r\n\t&__info {\r\n        position: absolute;\r\n        left: 0;\r\n        bottom: 0;\r\n        @include adaptiveValue(\"padding-right\", 93, 25);\r\n        @include adaptiveValue(\"padding-left\", 50, 25);\r\n        transform: translateY(16px);\r\n        transition: transform 0.5s ease;\r\n\t}\r\n\r\n\t&__text {\r\n        font-size: 20px;\r\n        color: #fff;\r\n        margin: 24px 0 24px 0;\r\n        @media (max-width: 499.98px) {\r\n            font-size: 18px; \r\n        }\r\n\t}\r\n\r\n\t&__more {\r\n        font-size: 16px;\r\n        color: #fff;\r\n        @media (max-width: 499.98px) {\r\n            font-size: 14px; \r\n        }\r\n\t}\r\n}\r\n//====================================================================================================\r\n// Directions section\r\n//====================================================================================================\r\n.featured {\r\n    @include adaptiveValue(\"padding-bottom\", 157, 75);\r\n    &__list {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        @include adaptiveValue(\"gap\", 100, 30);\r\n    }\r\n\r\n    &__item {\r\n        position: relative;\r\n        overflow: hidden;\r\n\r\n        &:hover,\r\n        &:focus {\r\n            .featured__btn {\r\n                opacity: 1;\r\n                visibility: visible;\r\n            }\r\n        }\r\n    }\r\n    &__image {\r\n        @include adaptiveValue(\"width\", 370, 185);\r\n        @include adaptiveValue(\"height\", 428, 214);\r\n    }\r\n\r\n    &__label {   \r\n        font-size: 24px;\r\n        font-weight: 500;\r\n        line-height: 1.4; \r\n        @include adaptiveValue(\"margin-top\", 34, 15);\r\n        @include adaptiveValue(\"margin-bottom\", 8, 4);\r\n        @media (max-width: 599.98px) {\r\n            font-size: 20px;\r\n        }\r\n    }\r\n\r\n    &__type {\r\n        font-size: 15px;\r\n        font-weight: 500;\r\n    }\r\n\r\n    &__image--big {\r\n        @include adaptiveValue(\"width\", 600, 280);\r\n        @include adaptiveValue(\"height\", 428, 194);\r\n    }\r\n\r\n    &__item--top {\r\n        padding-left: 100px;\r\n        padding-top: 160px;\r\n\r\n        @media (max-width: 1199.98px) {\r\n            padding-left: 0;\r\n            padding-top: 0;\r\n        }\r\n    }\r\n\r\n    &__item--bottom {\r\n        margin-top: -160px;\r\n        @media (max-width: 1199.98px) {\r\n            margin-top: 0;\r\n        }\r\n    }\r\n\r\n    &__btn {\r\n        left: 130px;\r\n        top: 200px;\r\n        opacity: 0;\r\n        visibility: hidden;\r\n        transition: opacity 0.5s ease, visibility 0.5s ease, transform 0.4s ease, box-shadow 0.4s ease;\r\n\r\n        @media (max-width: $mobile) {\r\n            left: 100px;\r\n            top: 100px;\r\n        }\r\n        @media (max-width: $mobileSmall) {\r\n            left: 66px;\r\n            top: 77px;\r\n        }\r\n    }\r\n}\r\n.introduction {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: first baseline;\r\n    position: relative;\r\n    @include adaptiveValue(\"margin-bottom\", 48, 25);\r\n    @include adaptiveValue(\"padding-left\", 100, 20);\r\n    @include adaptiveValue(\"padding-right\", 100, 50);\r\n    &__title {\r\n        margin-right: 375px;\r\n        @include adaptiveValue(\"font-size\", 100, 50);\r\n        font-weight: 500;\r\n        line-height: 1.1;\r\n        @include adaptiveValue(\"width\", 425, 250);\r\n        &::after {\r\n            content: '';\r\n            position: absolute;\r\n            @include adaptiveValue(\"width\", 70, 35);\r\n            height: 1px;\r\n            background-color: var(--dark-cl);\r\n            left: 680px;\r\n            top: 80px;\r\n        }\r\n        @media (max-width: 1199.98px) {\r\n            @include adaptiveValue(\"margin-bottom\", 48, 25);\r\n\r\n            &::after {\r\n                @include adaptiveValue(\"left\", 100, 50);\r\n                top: -40px;\r\n            }\r\n        }\r\n    }\r\n}\r\n//====================================================================================================\r\n// Process section\r\n//====================================================================================================\r\n.process {\r\n        background-color: var(--dark-cl);\r\n        height: 664px;\r\n        @media (max-width: 667.98px){\r\n            height: 764px;\r\n        }\r\n\t\t&__container {\r\n            max-width: 1300px;\r\n            z-index: 2;\r\n            overflow: hidden;\r\n            position: relative;\r\n            @include adaptiveValue(\"padding-top\", 149, 65);\r\n            @include adaptiveValue(\"padding-bottom\", 161, 70);\r\n            &::after {\r\n            content: '';\r\n            @include adaptiveValue(\"width\", 641, 200);\r\n            @include adaptiveValue(\"height\", 641, 200);\r\n            position: absolute;\r\n            right: -20%;\r\n            top: -35%;\r\n            border-radius: 50%;\r\n            background-color: #202020;\r\n            @media (max-width: 667.98px){\r\n                display: none;\r\n            }\r\n        }\r\n\t\t}\r\n\r\n\t\t&__title {\r\n            color: #FFF;\r\n            font-size: 48px;\r\n            font-weight: 500;\r\n            line-height: 1.2;\r\n            @include adaptiveValue(\"margin-bottom\", 80, 30); \r\n\r\n            @media (max-width: 667.98px){\r\n                @include adaptiveValue(\"padding-left\", 100, 20);\r\n            }\r\n\r\n            @media (max-width: 419.98px) {\r\n                width: 200px;\r\n            }\r\n\t\t}\r\n\r\n\t\t&__list {\r\n            gap: 24px;\r\n            display: flex;\r\n            flex-direction: column;\r\n            @include adaptiveValue(\"margin-left\", 60, 20);\r\n            @include adaptiveValue(\"margin-right\", 140, 0);\r\n            @media (max-width: 667.98px){\r\n                margin-bottom: 40px;\r\n            }\r\n\t\t}\r\n\r\n\t\t&__item {\r\n            position: relative;\r\n\r\n            &:hover {\r\n                .process__text {\r\n                    color: #fff;\r\n                    transform: translateX(20px);\r\n                    &::before {\r\n                        opacity: 1;\r\n                        transform: translateX(28%)\r\n                    }\r\n                }\r\n                .process__number {\r\n                    opacity: 1;\r\n                }\r\n            }\r\n\t\t}\r\n\r\n\t\t&__text {\r\n            color: #6F6F6F;\r\n            font-size: 24px;\r\n            font-weight: 500;\r\n            line-height: 1.4;\r\n            transition: color 0.4s ease, transform 0.4s ease;\r\n            &::before {\r\n                content: '';\r\n                width: 40px;\r\n                height: 1px;\r\n                background-color: #fff;\r\n                position: absolute;\r\n                left: -90px;\r\n                top: 17px;\r\n                transform: translateX(-100%);\r\n                opacity: 0;\r\n                transition: transform 0.4s ease, opacity 0.4s ease;\r\n                @media (max-width: 667.98px){\r\n                    display: none;\r\n                }\r\n            }\r\n\r\n            transform: translateX(0);\r\n\t\t}\r\n\r\n\t\t&__number {\r\n            opacity: 0;\r\n            font-size: 12px;\r\n            font-weight: 500;\r\n            transition: opacity 0.4s ease;\r\n\t\t}\r\n\r\n}\r\n\r\n.process-wrapper {\r\n    display: flex;\r\n    @media (max-width: 667.98px){\r\n        flex-direction: column;\r\n        justify-content: center;\r\n    }\r\n}\r\n\r\n.block-info {\r\n    @include adaptiveValue(\"width\", 395, 250);\r\n\r\n    @media (max-width: 667.98px){\r\n        @include adaptiveValue(\"padding-left\", 100, 20);\r\n    }\r\n\t\t&__text {\r\n            color: #FFF;\r\n            font-size: 17px;\r\n            font-weight: 400;\r\n            line-height: 1.5;\r\n            @include adaptiveValue(\"margin-bottom\", 53, 25); \r\n            \r\n\t\t}\r\n\r\n\t\t\r\n}\r\n//====================================================================================================\r\n//Create section\r\n//====================================================================================================\r\n.create {\r\n    @include adaptiveValue(\"padding-top\", 160, 80);\r\n    @include adaptiveValue(\"padding-bottom\", 140, 70);\r\n    &__container {\r\n    }\r\n\r\n    &__wrapper {\r\n        display: flex;\r\n    }\r\n}\r\n.img-block {\r\n\r\n    &__item {\r\n        filter: grayscale(100%);\r\n        transition: filter 0.4s ease;\r\n        &:hover {\r\n            filter: grayscale(0);\r\n        }\r\n    }\r\n\r\n    &__item--big {\r\n        margin-bottom: 30px;\r\n        @include adaptiveValue(\"width\", 470, 235);\r\n        @include adaptiveValue(\"height\", 290, 145);\r\n        width: 470px;\r\nheight: 290px;\r\n    }\r\n\r\n    &__bottom {\r\n        width: 575px;\r\n    }\r\n\r\n    &__item--small {\r\n        padding-left: 130px;\r\n        margin-right: 30px;\r\n        @include adaptiveValue(\"width\", 140, 70);\r\n        @include adaptiveValue(\"height\", 290, 145);\r\n    }\r\n\r\n    &__item--middle {\r\n    }\r\n}\r\n.create-info {\r\n    @include adaptiveValue(\"padding-top\", 93, 40);\r\n    &__title {\r\n        font-size: 28px;\r\n        font-weight: 500;\r\n        line-height: 1.3;\r\n        width: 357px;\r\n        @include adaptiveValue(\"margin-bottom\", 37, 20);\r\n    }\r\n\r\n    &__text {\r\n        @include adaptiveValue(\"margin-left\", 90, 45);\r\n        @include adaptiveValue(\"margin-bottom\", 90, 45);\r\n        @include adaptiveValue(\"width\", 438, 280);\r\n        font-size: 17px;\r\n        font-weight: 400;\r\n        line-height: 1.6; \r\n    }\r\n\r\n    &__btn {\r\n        @include adaptiveValue(\"margin-left\", 90, 45);\r\n    }\r\n}\r\n.btn {\r\n}\r\n\r\n\r\n\r\n\r\n\r\n",":root {\r\n    --dark-cl: #0E0E0E;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7e1221fddeb49986bf5b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mNzRhYjM4Njc0ZDJkNjVmY2RmZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw4R0FBOEcsa0JBQWtCO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHVUQUF1VCxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxZQUFZLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxTQUFTLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLE1BQU0sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsUUFBUSxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFFBQVEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLFFBQVEsVUFBVSxXQUFXLFFBQVEsUUFBUSxVQUFVLFdBQVcsUUFBUSxRQUFRLFVBQVUsUUFBUSxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFFBQVEsUUFBUSxLQUFLLFVBQVUsUUFBUSxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLFdBQVcsT0FBTyxNQUFNLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FB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QUFpQiw2Q0FBNkMsU0FBUyx1QkFBdUIsMkJBQTJCLGdDQUFnQyxpQ0FBaUMsOENBQThDLFNBQVMsU0FBUywwQkFBMEIsc0JBQXNCLHFDQUFxQyxtQ0FBbUMsb0NBQW9DLFNBQVMsS0FBSyxxQkFBcUIsb0RBQW9ELHlDQUF5Qyw4REFBOEQsU0FBUyxpQkFBaUIsNEJBQTRCLGdDQUFnQyxpQ0FBaUMsaUNBQWlDLG1FQUFtRSx5QkFBeUIsaUJBQWlCLHFQQUFxUCx5REFBeUQsNERBQTRELHNCQUFzQixTQUFTLHdCQUF3QiwwQkFBMEIsU0FBUyxLQUFLLGdCQUFnQixxQkFBcUIsb0NBQW9DLHlDQUF5QyxxQkFBcUIscUNBQXFDLGFBQWEsU0FBUywwQkFBMEIsZ0NBQWdDLHdEQUF3RCx5REFBeUQseUJBQXlCLGtCQUFrQixTQUFTLHVCQUF1Qix5QkFBeUIsU0FBUyw0QkFBNEIsZ0NBQWdDLCtCQUErQix1REFBdUQseURBQXlELFNBQVMsNkJBQTZCLFNBQVMsS0FBSyxrQkFBa0Isd0RBQXdELGtCQUFrQiw0QkFBNEIsNkJBQTZCLDZCQUE2Qix5QkFBeUIsOERBQThELFNBQVMscUJBQXFCLDREQUE0RCw4REFBOEQsd0RBQXdELDRCQUE0Qiw2QkFBNkIsOEJBQThCLFNBQVMsb0JBQW9CLDREQUE0RCxTQUFTLEtBQUssVUFBVSxLQUFLLGtDQUFrQywyQkFBMkIsS0FBSyxtQkFBbUI7QUFDdjIwRDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUMxdkZ2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbioge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDMyMHB4O1xufVxuXG5ib2R5IHtcbiAgY29sb3I6ICMwRTBFMEU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LWZhbWlseTogXCJJbnRlclwiO1xuICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxudWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5pbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4ubG9jayBib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xufVxuLndyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQHN1cHBvcnRzIChvdmVyZmxvdzogY2xpcCkge1xuICAud3JhcHBlciB7XG4gICAgb3ZlcmZsb3c6IGNsaXA7XG4gIH1cbn1cbi53cmFwcGVyID4gbWFpbiB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLndyYXBwZXIgPiAqIHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4vKlxuKGkpINCh0YLQuNC70ZYg0LHRg9C00YPRgtGMINC30LDRgdGC0L7RgdC+0LLRg9Cy0LDRgtC40YHRjCDQtNC+XG7QstGB0ZbRhSDQutC70LDRgdGW0LIsINGJ0L4g0LzRltGB0YLRj9GC0YwgKl9fY29udGFpbmVyXG7QndCw0L/RgNC40LrQu9Cw0LQgaGVhZGVyX19jb250YWluZXIsIG1haW5fX2NvbnRhaW5lciDRliDRgi7Qvy5cbtCh0L3RltC/0L/QtdGCIChIVE1MKTogY250XG4qL1xuW2NsYXNzKj1fX2NvbnRhaW5lcl0ge1xuICBtYXgtd2lkdGg6IDc1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAwLjkzNzVyZW07XG59XG5cbltjbGFzcyo9LWliZ10ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5bY2xhc3MqPS1pYmddIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuW2NsYXNzKj0taWJnLS1jb250YWluXSBpbWcge1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmhlYWRlcl9fbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLmhlYWRlcl9fbWVudSB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogNTJweDtcbiAgfVxufVxuLmhlYWRlcl9fbG9nbyB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5oZWFkZXJfX2xvZ28ge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC44MjM4NjM2MzY0cmVtICArICAwLjU2ODE4MTgxODJ2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28ge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC44MjM4NjM2MzY0cmVtICArICAwLjU2ODE4MTgxODJ2dyAsIDEuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC44MjM4NjM2MzY0cmVtICArICAwLjU2ODE4MTgxODJ2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5oZWFkZXJfX2xvZ28ge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuOTM3NXJlbSArIDAuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZWFkZXJfX2xvZ28ge1xuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICB9XG59XG5cbi5tZW51X19ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogMTA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubWVudV9fYm9keSB7XG4gICAgcGFkZGluZy10b3A6IDIuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fYm9keSB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fYm9keSB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygxLjU2MjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19ib2R5IHtcbiAgICBwYWRkaW5nLXRvcDogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubWVudV9fYm9keSB7XG4gICAgcGFkZGluZy1ib3R0b206IDIuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fYm9keSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fYm9keSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygxLjU2MjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19ib2R5IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLm1lbnVfX2JvZHkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuLm1lbnVfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm1lbnVfX2xpc3Qge1xuICAgIG1hcmdpbi1yaWdodDogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMy4xMjVyZW0gLCAyLjg5NzcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMy43NXJlbSApKSB7XG4gICAgLm1lbnVfX2xpc3Qge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjbGFtcCggMy4xMjVyZW0gLCAyLjg5NzcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMy43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAzLjEyNXJlbSAsIDIuODk3NzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAzLjc1cmVtICkpIHtcbiAgICAubWVudV9fbGlzdCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMy4xMjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19saXN0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubWVudV9fbGlzdCB7XG4gICAgZ2FwOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGdhcDogY2xhbXAoIDEuODc1cmVtICwgMS42NDc3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuNXJlbSApKSB7XG4gICAgLm1lbnVfX2xpc3Qge1xuICAgICAgZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAxLjY0NzcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGdhcDogY2xhbXAoIDEuODc1cmVtICwgMS42NDc3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuNXJlbSApKSB7XG4gICAgLm1lbnVfX2xpc3Qge1xuICAgICAgZ2FwOiBjYWxjKDEuODc1cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9fbGlzdCB7XG4gICAgZ2FwOiAxLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5tZW51X19saXN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZsZXg6IDI7XG4gIH1cbn1cbi5tZW51X19saW5rIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubWVudV9fbGluayB7XG4gICAgcGFkZGluZy10b3A6IDIuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fbGluayB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fbGluayB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygxLjU2MjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19saW5rIHtcbiAgICBwYWRkaW5nLXRvcDogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubWVudV9fbGluayB7XG4gICAgcGFkZGluZy1ib3R0b206IDIuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fbGluayB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fbGluayB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygxLjU2MjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19saW5rIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLm1lbnVfX2xpbmsge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxufVxuLm1lbnVfX2xpbms6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNDVweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbi5tZW51X19saW5rOmhvdmVyOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5zb2NpYWxzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnNvY2lhbHMtbGlzdCB7XG4gICAgZ2FwOiAwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGdhcDogY2xhbXAoIDAuNjI1cmVtICwgMC41MTEzNjM2MzY0cmVtICArICAwLjU2ODE4MTgxODJ2dyAsIDAuOTM3NXJlbSApKSB7XG4gICAgLnNvY2lhbHMtbGlzdCB7XG4gICAgICBnYXA6IGNsYW1wKCAwLjYyNXJlbSAsIDAuNTExMzYzNjM2NHJlbSAgKyAgMC41NjgxODE4MTgydncgLCAwLjkzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMC42MjVyZW0gLCAwLjUxMTM2MzYzNjRyZW0gICsgIDAuNTY4MTgxODE4MnZ3ICwgMC45Mzc1cmVtICkpIHtcbiAgICAuc29jaWFscy1saXN0IHtcbiAgICAgIGdhcDogY2FsYygwLjYyNXJlbSArIDAuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zb2NpYWxzLWxpc3Qge1xuICAgIGdhcDogMC42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAuc29jaWFscy1saXN0IHtcbiAgICBnYXA6IDMwcHg7XG4gICAgZmxleDogMTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5zb2NpYWxzLWxpc3RfX2ljb24ge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLm1lbnVfX2JvZHkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUycHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTgwcHgpIHtcbiAgLmljb24tbWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5pY29uLW1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMS44NzVyZW07XG4gICAgaGVpZ2h0OiAxLjEyNXJlbTtcbiAgICB6LWluZGV4OiA1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIGFuZCAoYW55LWhvdmVyOiBub25lKSB7XG4gIC5pY29uLW1lbnUge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5pY29uLW1lbnUgc3BhbiwgLmljb24tbWVudTo6YmVmb3JlLCAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDAuMTI1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbiAgLmljb24tbWVudTo6YmVmb3JlIHtcbiAgICB0b3A6IDA7XG4gIH1cbiAgLmljb24tbWVudTo6YWZ0ZXIge1xuICAgIGJvdHRvbTogMDtcbiAgfVxuICAuaWNvbi1tZW51IHNwYW4ge1xuICAgIHRvcDogY2FsYyg1MCUgLSAwLjA2MjVyZW0pO1xuICB9XG4gIC5tZW51LW9wZW4gLmljb24tbWVudSArIC5tZW51X19ib2R5IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51IHNwYW4ge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIC5tZW51LW9wZW4gLmljb24tbWVudTo6YmVmb3JlIHtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMC4wNjI1cmVtKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIC5tZW51LW9wZW4gLmljb24tbWVudTo6YWZ0ZXIge1xuICAgIGJvdHRvbTogY2FsYyg1MCUgLSAwLjA2MjVyZW0pO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxufVxuXG4uaGVybyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaGVybyB7XG4gICAgaGVpZ2h0OiAzMHJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggMTYuODc1cmVtICwgMTIuMTAyMjcyNzI3M3JlbSAgKyAgMjMuODYzNjM2MzYzNnZ3ICwgMzByZW0gKSkge1xuICAgIC5oZXJvIHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDE2Ljg3NXJlbSAsIDEyLjEwMjI3MjcyNzNyZW0gICsgIDIzLjg2MzYzNjM2MzZ2dyAsIDMwcmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDE2Ljg3NXJlbSAsIDEyLjEwMjI3MjcyNzNyZW0gICsgIDIzLjg2MzYzNjM2MzZ2dyAsIDMwcmVtICkpIHtcbiAgICAuaGVybyB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTYuODc1cmVtICsgMTMuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmhlcm8ge1xuICAgIGhlaWdodDogMTYuODc1cmVtO1xuICB9XG59XG4uaGVyb19fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3dpcGVyLWNvdW50ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLWNvdW50ZXIge1xuICAgIGJvdHRvbTogNC4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGJvdHRvbTogY2xhbXAoIDEuODc1cmVtICwgMC45NjU5MDkwOTA5cmVtICArICA0LjU0NTQ1NDU0NTV2dyAsIDQuMzc1cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXIge1xuICAgICAgYm90dG9tOiBjbGFtcCggMS44NzVyZW0gLCAwLjk2NTkwOTA5MDlyZW0gICsgIDQuNTQ1NDU0NTQ1NXZ3ICwgNC4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoYm90dG9tOiBjbGFtcCggMS44NzVyZW0gLCAwLjk2NTkwOTA5MDlyZW0gICsgIDQuNTQ1NDU0NTQ1NXZ3ICwgNC4zNzVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlciB7XG4gICAgICBib3R0b206IGNhbGMoMS44NzVyZW0gKyAyLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLWNvdW50ZXIge1xuICAgIGJvdHRvbTogMS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItY291bnRlciB7XG4gICAgbGVmdDogMTIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGVmdDogY2xhbXAoIDAuOTM3NXJlbSAsIC0zLjI2NzA0NTQ1NDVyZW0gICsgIDIxLjAyMjcyNzI3Mjd2dyAsIDEyLjVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlciB7XG4gICAgICBsZWZ0OiBjbGFtcCggMC45Mzc1cmVtICwgLTMuMjY3MDQ1NDU0NXJlbSAgKyAgMjEuMDIyNzI3MjcyN3Z3ICwgMTIuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChsZWZ0OiBjbGFtcCggMC45Mzc1cmVtICwgLTMuMjY3MDQ1NDU0NXJlbSAgKyAgMjEuMDIyNzI3MjcyN3Z3ICwgMTIuNXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyIHtcbiAgICAgIGxlZnQ6IGNhbGMoMC45Mzc1cmVtICsgMTEuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItY291bnRlciB7XG4gICAgbGVmdDogMC45Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLWNvdW50ZXIge1xuICAgIHdpZHRoOiA1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDMuMTI1cmVtICwgMi40NDMxODE4MTgycmVtICArICAzLjQwOTA5MDkwOTF2dyAsIDVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlciB7XG4gICAgICB3aWR0aDogY2xhbXAoIDMuMTI1cmVtICwgMi40NDMxODE4MTgycmVtICArICAzLjQwOTA5MDkwOTF2dyAsIDVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAzLjEyNXJlbSAsIDIuNDQzMTgxODE4MnJlbSAgKyAgMy40MDkwOTA5MDkxdncgLCA1cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXIge1xuICAgICAgd2lkdGg6IGNhbGMoMy4xMjVyZW0gKyAxLjg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItY291bnRlciB7XG4gICAgd2lkdGg6IDMuMTI1cmVtO1xuICB9XG59XG4uc3dpcGVyLWNvdW50ZXJfX2l0ZW06OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW06OmFmdGVyIHtcbiAgICB3aWR0aDogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAwLjYyNXJlbSAsIDAuMzk3NzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAxLjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW06OmFmdGVyIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMC42MjVyZW0gLCAwLjM5NzcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDAuNjI1cmVtICwgMC4zOTc3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlcl9faXRlbTo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IGNhbGMoMC42MjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItY291bnRlcl9faXRlbTo6YWZ0ZXIge1xuICAgIHdpZHRoOiAwLjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyX19pdGVtOjphZnRlciB7XG4gICAgbGVmdDogMS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGxlZnQ6IGNsYW1wKCAxLjE4NzVyZW0gLCAwLjkzNzVyZW0gICsgIDEuMjV2dyAsIDEuODc1cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW06OmFmdGVyIHtcbiAgICAgIGxlZnQ6IGNsYW1wKCAxLjE4NzVyZW0gLCAwLjkzNzVyZW0gICsgIDEuMjV2dyAsIDEuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGxlZnQ6IGNsYW1wKCAxLjE4NzVyZW0gLCAwLjkzNzVyZW0gICsgIDEuMjV2dyAsIDEuODc1cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW06OmFmdGVyIHtcbiAgICAgIGxlZnQ6IGNhbGMoMS4xODc1cmVtICsgMC42ODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyX19pdGVtOjphZnRlciB7XG4gICAgbGVmdDogMS4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW1zcGFuIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC43MDQ1NDU0NTQ1cmVtICArICAwLjIyNzI3MjcyNzN2dyAsIDAuODc1cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW1zcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjcwNDU0NTQ1NDVyZW0gICsgIDAuMjI3MjcyNzI3M3Z3ICwgMC44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNzA0NTQ1NDU0NXJlbSAgKyAgMC4yMjcyNzI3MjczdncgLCAwLjg3NXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyX19pdGVtc3BhbiB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC43NXJlbSArIDAuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyX19pdGVtc3BhbiB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB9XG59XG5cbi5ibG9jay10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogNDBweCAwIDQwcHggMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5ibG9jay10aXRsZSB7XG4gICAgdG9wOiAxMC45Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh0b3A6IGNsYW1wKCAzLjEyNXJlbSAsIDAuMjg0MDkwOTA5MXJlbSAgKyAgMTQuMjA0NTQ1NDU0NXZ3ICwgMTAuOTM3NXJlbSApKSB7XG4gICAgLmJsb2NrLXRpdGxlIHtcbiAgICAgIHRvcDogY2xhbXAoIDMuMTI1cmVtICwgMC4yODQwOTA5MDkxcmVtICArICAxNC4yMDQ1NDU0NTQ1dncgLCAxMC45Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHRvcDogY2xhbXAoIDMuMTI1cmVtICwgMC4yODQwOTA5MDkxcmVtICArICAxNC4yMDQ1NDU0NTQ1dncgLCAxMC45Mzc1cmVtICkpIHtcbiAgICAuYmxvY2stdGl0bGUge1xuICAgICAgdG9wOiBjYWxjKDMuMTI1cmVtICsgNy44MTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJsb2NrLXRpdGxlIHtcbiAgICB0b3A6IDMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYmxvY2stdGl0bGUge1xuICAgIGxlZnQ6IDEyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGxlZnQ6IGNsYW1wKCAxLjg3NXJlbSAsIC0xLjk4ODYzNjM2MzZyZW0gICsgIDE5LjMxODE4MTgxODJ2dyAsIDEyLjVyZW0gKSkge1xuICAgIC5ibG9jay10aXRsZSB7XG4gICAgICBsZWZ0OiBjbGFtcCggMS44NzVyZW0gLCAtMS45ODg2MzYzNjM2cmVtICArICAxOS4zMTgxODE4MTgydncgLCAxMi41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGxlZnQ6IGNsYW1wKCAxLjg3NXJlbSAsIC0xLjk4ODYzNjM2MzZyZW0gICsgIDE5LjMxODE4MTgxODJ2dyAsIDEyLjVyZW0gKSkge1xuICAgIC5ibG9jay10aXRsZSB7XG4gICAgICBsZWZ0OiBjYWxjKDEuODc1cmVtICsgMTAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJsb2NrLXRpdGxlIHtcbiAgICBsZWZ0OiAxLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJsb2NrLXRpdGxlIHtcbiAgICB3aWR0aDogMzIuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTguNzVyZW0gLCAxMy44NDA5MDkwOTA5cmVtICArICAyNC41NDU0NTQ1NDU1dncgLCAzMi4yNXJlbSApKSB7XG4gICAgLmJsb2NrLXRpdGxlIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTguNzVyZW0gLCAxMy44NDA5MDkwOTA5cmVtICArICAyNC41NDU0NTQ1NDU1dncgLCAzMi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE4Ljc1cmVtICwgMTMuODQwOTA5MDkwOXJlbSAgKyAgMjQuNTQ1NDU0NTQ1NXZ3ICwgMzIuMjVyZW0gKSkge1xuICAgIC5ibG9jay10aXRsZSB7XG4gICAgICB3aWR0aDogY2FsYygxOC43NXJlbSArIDEzLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYmxvY2stdGl0bGUge1xuICAgIHdpZHRoOiAxOC43NXJlbTtcbiAgfVxufVxuLmJsb2NrLXRpdGxlX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogNHB4IDRweCAycHggcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJsb2NrLXRpdGxlX190aXRsZSB7XG4gICAgZm9udC1zaXplOiA0LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMi4yNXJlbSAsIDEuNDc3MjcyNzI3M3JlbSAgKyAgMy44NjM2MzYzNjM2dncgLCA0LjM3NXJlbSApKSB7XG4gICAgLmJsb2NrLXRpdGxlX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAyLjI1cmVtICwgMS40NzcyNzI3MjczcmVtICArICAzLjg2MzYzNjM2MzZ2dyAsIDQuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDIuMjVyZW0gLCAxLjQ3NzI3MjcyNzNyZW0gICsgIDMuODYzNjM2MzYzNnZ3ICwgNC4zNzVyZW0gKSkge1xuICAgIC5ibG9jay10aXRsZV9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDIuMjVyZW0gKyAyLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5ibG9jay10aXRsZV9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgfVxufVxuLmJsb2NrLXRpdGxlX190aXRsZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogNzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5ibG9jay10aXRsZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiA3MHB4O1xufVxuXG4uYnRuLXZpZXcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLCBib3gtc2hhZG93IDAuNHMgZWFzZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG4tdmlldyB7XG4gICAgdG9wOiAyNC4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHRvcDogY2xhbXAoIDEwcmVtICwgNC43NzI3MjcyNzI3cmVtICArICAyNi4xMzYzNjM2MzY0dncgLCAyNC4zNzVyZW0gKSkge1xuICAgIC5idG4tdmlldyB7XG4gICAgICB0b3A6IGNsYW1wKCAxMHJlbSAsIDQuNzcyNzI3MjcyN3JlbSAgKyAgMjYuMTM2MzYzNjM2NHZ3ICwgMjQuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHRvcDogY2xhbXAoIDEwcmVtICwgNC43NzI3MjcyNzI3cmVtICArICAyNi4xMzYzNjM2MzY0dncgLCAyNC4zNzVyZW0gKSkge1xuICAgIC5idG4tdmlldyB7XG4gICAgICB0b3A6IGNhbGMoMTByZW0gKyAxNC4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIHRvcDogMTByZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG4tdmlldyB7XG4gICAgcmlnaHQ6IDExLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocmlnaHQ6IGNsYW1wKCAxLjI1cmVtICwgLTIuMzQwOTA5MDkwOXJlbSAgKyAgMTcuOTU0NTQ1NDU0NXZ3ICwgMTEuMTI1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgcmlnaHQ6IGNsYW1wKCAxLjI1cmVtICwgLTIuMzQwOTA5MDkwOXJlbSAgKyAgMTcuOTU0NTQ1NDU0NXZ3ICwgMTEuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHJpZ2h0OiBjbGFtcCggMS4yNXJlbSAsIC0yLjM0MDkwOTA5MDlyZW0gICsgIDE3Ljk1NDU0NTQ1NDV2dyAsIDExLjEyNXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIHJpZ2h0OiBjYWxjKDEuMjVyZW0gKyA5Ljg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG4tdmlldyB7XG4gICAgcmlnaHQ6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG4tdmlldyB7XG4gICAgd2lkdGg6IDUuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDMuNDM3NXJlbSAsIDIuNjQyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA1LjYyNXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMy40Mzc1cmVtICwgMi42NDIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDUuNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMy40Mzc1cmVtICwgMi42NDIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgd2lkdGg6IGNhbGMoMy40Mzc1cmVtICsgMi4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICB3aWR0aDogMy40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIGhlaWdodDogNS42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGhlaWdodDogY2xhbXAoIDMuNDM3NXJlbSAsIDIuNjQyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA1LjYyNXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDMuNDM3NXJlbSAsIDIuNjQyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA1LjYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCAzLjQzNzVyZW0gLCAyLjY0MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNS42MjVyZW0gKSkge1xuICAgIC5idG4tdmlldyB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMy40Mzc1cmVtICsgMi4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICBoZWlnaHQ6IDMuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjgxODE4MTgxOHJlbSAgKyAgMC4zNDA5MDkwOTA5dncgLCAwLjkzNzVyZW0gKSkge1xuICAgIC5idG4tdmlldyB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42ODE4MTgxODE4cmVtICArICAwLjM0MDkwOTA5MDl2dyAsIDAuOTM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42ODE4MTgxODE4cmVtICArICAwLjM0MDkwOTA5MDl2dyAsIDAuOTM3NXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjc1cmVtICsgMC4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cbn1cbi5idG4tdmlldzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxNXB4IDhweCAjZmZmO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLXNsaWRlX19pbWcge1xuICAgIGhlaWdodDogMzYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGhlaWdodDogY2xhbXAoIDEzLjc1cmVtICwgNS41NjgxODE4MTgycmVtICArICA0MC45MDkwOTA5MDkxdncgLCAzNi4yNXJlbSApKSB7XG4gICAgLnN3aXBlci1zbGlkZV9faW1nIHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDEzLjc1cmVtICwgNS41NjgxODE4MTgycmVtICArICA0MC45MDkwOTA5MDkxdncgLCAzNi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCAxMy43NXJlbSAsIDUuNTY4MTgxODE4MnJlbSAgKyAgNDAuOTA5MDkwOTA5MXZ3ICwgMzYuMjVyZW0gKSkge1xuICAgIC5zd2lwZXItc2xpZGVfX2ltZyB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTMuNzVyZW0gKyAyMi41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1zbGlkZV9faW1nIHtcbiAgICBoZWlnaHQ6IDEzLjc1cmVtO1xuICB9XG59XG5cbi5zd2lwZXItYnV0dG9uLXByZXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjI1cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcbiAgICBsZWZ0OiAtMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGxlZnQ6IGNsYW1wKCAtMy4xMjVyZW0gLCAzNS4yMjcyNzI3MjczcmVtICArICAtNTEuMTM2MzYzNjM2NHZ3ICwgMjVyZW0gKSkge1xuICAgIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICAgICAgbGVmdDogY2xhbXAoIC0zLjEyNXJlbSAsIDM1LjIyNzI3MjcyNzNyZW0gICsgIC01MS4xMzYzNjM2MzY0dncgLCAyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChsZWZ0OiBjbGFtcCggLTMuMTI1cmVtICwgMzUuMjI3MjcyNzI3M3JlbSAgKyAgLTUxLjEzNjM2MzYzNjR2dyAsIDI1cmVtICkpIHtcbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcbiAgICAgIGxlZnQ6IGNhbGMoMjVyZW0gKyAtMjguMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1idXR0b24tcHJldiB7XG4gICAgbGVmdDogMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NThweCkge1xuICAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5zd2lwZXItYnV0dG9uLW5leHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjI1cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgICByaWdodDogLTMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChyaWdodDogY2xhbXAoIC0zLjEyNXJlbSAsIDM1LjIyNzI3MjcyNzNyZW0gICsgIC01MS4xMzYzNjM2MzY0dncgLCAyNXJlbSApKSB7XG4gICAgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgICByaWdodDogY2xhbXAoIC0zLjEyNXJlbSAsIDM1LjIyNzI3MjcyNzNyZW0gICsgIC01MS4xMzYzNjM2MzY0dncgLCAyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChyaWdodDogY2xhbXAoIC0zLjEyNXJlbSAsIDM1LjIyNzI3MjcyNzNyZW0gICsgIC01MS4xMzYzNjM2MzY0dncgLCAyNXJlbSApKSB7XG4gICAgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgICByaWdodDogY2FsYygyNXJlbSArIC0yOC4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgICByaWdodDogMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NThweCkge1xuICAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5hYm91dC11cyB7XG4gICAgcGFkZGluZy10b3A6IDE2cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIC0yLjQwOTA5MDkwOTFyZW0gICsgIDI0LjU0NTQ1NDU0NTV2dyAsIDE2cmVtICkpIHtcbiAgICAuYWJvdXQtdXMge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAtMi40MDkwOTA5MDkxcmVtICArICAyNC41NDU0NTQ1NDU1dncgLCAxNnJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIC0yLjQwOTA5MDkwOTFyZW0gICsgIDI0LjU0NTQ1NDU0NTV2dyAsIDE2cmVtICkpIHtcbiAgICAuYWJvdXQtdXMge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMi41cmVtICsgMTMuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5hYm91dC11cyB7XG4gICAgcGFkZGluZy10b3A6IDIuNXJlbTtcbiAgfVxufVxuLmFib3V0LXVzX19jb250YWluZXItLWJpZyB7XG4gIHdpZHRoOiAxMzA2cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uaW50cm8tYmxvY2sge1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvLWJsb2NrIHtcbiAgICB3aWR0aDogMzguNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxOC4xMjVyZW0gLCAxMC43Mzg2MzYzNjM2cmVtICArICAzNi45MzE4MTgxODE4dncgLCAzOC40Mzc1cmVtICkpIHtcbiAgICAuaW50cm8tYmxvY2sge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxOC4xMjVyZW0gLCAxMC43Mzg2MzYzNjM2cmVtICArICAzNi45MzE4MTgxODE4dncgLCAzOC40Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTguMTI1cmVtICwgMTAuNzM4NjM2MzYzNnJlbSAgKyAgMzYuOTMxODE4MTgxOHZ3ICwgMzguNDM3NXJlbSApKSB7XG4gICAgLmludHJvLWJsb2NrIHtcbiAgICAgIHdpZHRoOiBjYWxjKDE4LjEyNXJlbSArIDIwLjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm8tYmxvY2sge1xuICAgIHdpZHRoOiAxOC4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyby1ibG9jayB7XG4gICAgbWFyZ2luLWJvdHRvbTogNS44MTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMi41cmVtICwgMS4yOTU0NTQ1NDU1cmVtICArICA2LjAyMjcyNzI3Mjd2dyAsIDUuODEyNXJlbSApKSB7XG4gICAgLmludHJvLWJsb2NrIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAxLjI5NTQ1NDU0NTVyZW0gICsgIDYuMDIyNzI3MjcyN3Z3ICwgNS44MTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAxLjI5NTQ1NDU0NTVyZW0gICsgIDYuMDIyNzI3MjcyN3Z3ICwgNS44MTI1cmVtICkpIHtcbiAgICAuaW50cm8tYmxvY2sge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygyLjVyZW0gKyAzLjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm8tYmxvY2sge1xuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgfVxufVxuLmludHJvLWJsb2NrX19sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm8tYmxvY2tfX2xhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjcxMDIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMS41NjI1cmVtICkpIHtcbiAgICAuaW50cm8tYmxvY2tfX2xhYmVsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjcxMDIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMS41NjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjcxMDIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMS41NjI1cmVtICkpIHtcbiAgICAuaW50cm8tYmxvY2tfX2xhYmVsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMC45Mzc1cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm8tYmxvY2tfX2xhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjkzNzVyZW07XG4gIH1cbn1cbi5pbnRyby1ibG9ja19fdGl0bGUge1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvLWJsb2NrX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAyLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMS4yNzI3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTI1cmVtICkpIHtcbiAgICAuaW50cm8tYmxvY2tfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDEuNXJlbSAsIDEuMjcyNzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAxLjVyZW0gLCAxLjI3MjcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xMjVyZW0gKSkge1xuICAgIC5pbnRyby1ibG9ja19fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDEuNXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvLWJsb2NrX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cblxuLmluZm8tYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbmZvLWJsb2NrIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDMuNzVyZW0gLCAxLjQ3NzI3MjcyNzNyZW0gICsgIDExLjM2MzYzNjM2MzZ2dyAsIDEwcmVtICkpIHtcbiAgICAuaW5mby1ibG9jayB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMy43NXJlbSAsIDEuNDc3MjcyNzI3M3JlbSAgKyAgMTEuMzYzNjM2MzYzNnZ3ICwgMTByZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDMuNzVyZW0gLCAxLjQ3NzI3MjcyNzNyZW0gICsgIDExLjM2MzYzNjM2MzZ2dyAsIDEwcmVtICkpIHtcbiAgICAuaW5mby1ibG9jayB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDMuNzVyZW0gKyA2LjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmluZm8tYmxvY2sge1xuICAgIG1hcmdpbi1ib3R0b206IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbmZvLWJsb2NrIHtcbiAgICBnYXA6IDYuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChnYXA6IGNsYW1wKCAyLjVyZW0gLCAwLjkwOTA5MDkwOTFyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgNi44NzVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrIHtcbiAgICAgIGdhcDogY2xhbXAoIDIuNXJlbSAsIDAuOTA5MDkwOTA5MXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA2Ljg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChnYXA6IGNsYW1wKCAyLjVyZW0gLCAwLjkwOTA5MDkwOTFyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgNi44NzVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrIHtcbiAgICAgIGdhcDogY2FsYygyLjVyZW0gKyA0LjM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrIHtcbiAgICBnYXA6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5pbmZvLWJsb2NrIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIGFuZCAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbmZvLWJsb2NrIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgMC43OTU0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDIuNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2sge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIDAuNzk1NDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAyLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIDAuNzk1NDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAyLjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygxLjI1cmVtICsgMS4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmluZm8tYmxvY2sge1xuICAgIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbiAgfVxufVxuLmluZm8tYmxvY2tfX2l0ZW0tLXRvcC1saW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2tfX2l0ZW0tLXRvcC1saW5lIHtcbiAgICB3aWR0aDogMjQuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxMi41cmVtICwgOC4xNTkwOTA5MDkxcmVtICArICAyMS43MDQ1NDU0NTQ1dncgLCAyNC40Mzc1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19faXRlbS0tdG9wLWxpbmUge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxMi41cmVtICwgOC4xNTkwOTA5MDkxcmVtICArICAyMS43MDQ1NDU0NTQ1dncgLCAyNC40Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDguMTU5MDkwOTA5MXJlbSAgKyAgMjEuNzA0NTQ1NDU0NXZ3ICwgMjQuNDM3NXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX2l0ZW0tLXRvcC1saW5lIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEyLjVyZW0gKyAxMS45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmluZm8tYmxvY2tfX2l0ZW0tLXRvcC1saW5lIHtcbiAgICB3aWR0aDogMTIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2tfX2l0ZW0tLXRvcC1saW5lIHtcbiAgICBwYWRkaW5nLXRvcDogMi4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMS4yNXJlbSAsIDAuOTMxODE4MTgxOHJlbSAgKyAgMS41OTA5MDkwOTA5dncgLCAyLjEyNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX2l0ZW0tLXRvcC1saW5lIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMS4yNXJlbSAsIDAuOTMxODE4MTgxOHJlbSAgKyAgMS41OTA5MDkwOTA5dncgLCAyLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDEuMjVyZW0gLCAwLjkzMTgxODE4MThyZW0gICsgIDEuNTkwOTA5MDkwOXZ3ICwgMi4xMjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygxLjI1cmVtICsgMC44NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW5mby1ibG9ja19faXRlbS0tdG9wLWxpbmUge1xuICAgIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICB9XG59XG4uaW5mby1ibG9ja19fdGV4dC0tYmlnIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbmZvLWJsb2NrX190ZXh0LS1iaWcge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMS4xMjVyZW0gLCAxLjA3OTU0NTQ1NDVyZW0gICsgIDAuMjI3MjcyNzI3M3Z3ICwgMS4yNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX3RleHQtLWJpZyB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAxLjEyNXJlbSAsIDEuMDc5NTQ1NDU0NXJlbSAgKyAgMC4yMjcyNzI3MjczdncgLCAxLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDEuMTI1cmVtICwgMS4wNzk1NDU0NTQ1cmVtICArICAwLjIyNzI3MjcyNzN2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX190ZXh0LS1iaWcge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDEuMTI1cmVtICsgMC4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW5mby1ibG9ja19fdGV4dC0tYmlnIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICB9XG59XG4uaW5mby1ibG9ja19fdGV4dC0tYmlnOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2tfX3RleHQtLWJpZzo6YmVmb3JlIHtcbiAgICB3aWR0aDogMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTMuMTI1cmVtICwgOC44MDY4MTgxODE4cmVtICArICAyMS41OTA5MDkwOTA5dncgLCAyNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX3RleHQtLWJpZzo6YmVmb3JlIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTMuMTI1cmVtICwgOC44MDY4MTgxODE4cmVtICArICAyMS41OTA5MDkwOTA5dncgLCAyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDEzLjEyNXJlbSAsIDguODA2ODE4MTgxOHJlbSAgKyAgMjEuNTkwOTA5MDkwOXZ3ICwgMjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX190ZXh0LS1iaWc6OmJlZm9yZSB7XG4gICAgICB3aWR0aDogY2FsYygxMy4xMjVyZW0gKyAxMS44NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW5mby1ibG9ja19fdGV4dC0tYmlnOjpiZWZvcmUge1xuICAgIHdpZHRoOiAxMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbmZvLWJsb2NrX19pdGVtLS1hY3Rpb24ge1xuICAgIHdpZHRoOiAyOC45Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDEwLjc4NDA5MDkwOTFyZW0gICsgIDI0LjIwNDU0NTQ1NDV2dyAsIDI4LjkzNzVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX19pdGVtLS1hY3Rpb24ge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMC43ODQwOTA5MDkxcmVtICArICAyNC4yMDQ1NDU0NTQ1dncgLCAyOC45Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTAuNzg0MDkwOTA5MXJlbSAgKyAgMjQuMjA0NTQ1NDU0NXZ3ICwgMjguOTM3NXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX2l0ZW0tLWFjdGlvbiB7XG4gICAgICB3aWR0aDogY2FsYygxNS42MjVyZW0gKyAxMy4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmluZm8tYmxvY2tfX2l0ZW0tLWFjdGlvbiB7XG4gICAgd2lkdGg6IDE1LjYyNXJlbTtcbiAgfVxufVxuLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbmZvLWJsb2NrX190ZXh0LS1zbWFsbCB7XG4gICAgZm9udC1zaXplOiAxLjA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuODkyMDQ1NDU0NXJlbSAgKyAgMC4yMjcyNzI3MjczdncgLCAxLjA2MjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX190ZXh0LS1zbWFsbCB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjg5MjA0NTQ1NDVyZW0gICsgIDAuMjI3MjcyNzI3M3Z3ICwgMS4wNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuODkyMDQ1NDU0NXJlbSAgKyAgMC4yMjcyNzI3MjczdncgLCAxLjA2MjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX190ZXh0LS1zbWFsbCB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC45Mzc1cmVtICsgMC4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW5mby1ibG9ja19fdGV4dC0tc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9ja19fdGV4dC0tc21hbGwge1xuICAgIG1hcmdpbi1ib3R0b206IDMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMC45OTQzMTgxODE4cmVtICArICAyLjg0MDkwOTA5MDl2dyAsIDMuMTI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19fdGV4dC0tc21hbGwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDAuOTk0MzE4MTgxOHJlbSAgKyAgMi44NDA5MDkwOTA5dncgLCAzLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMC45OTQzMTgxODE4cmVtICArICAyLjg0MDkwOTA5MDl2dyAsIDMuMTI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19fdGV4dC0tc21hbGwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjU2MjVyZW0gKyAxLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW5mby1ibG9ja19fdGV4dC0tc21hbGwge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNTYyNXJlbTtcbiAgfVxufVxuXG4uYnRuIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDUwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG4gc3BhbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMTI1cmVtICwgMC42NDc3MjcyNzI3cmVtICArICAyLjM4NjM2MzYzNjR2dyAsIDIuNDM3NXJlbSApKSB7XG4gICAgLmJ0biBzcGFuIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMTI1cmVtICwgMC42NDc3MjcyNzI3cmVtICArICAyLjM4NjM2MzYzNjR2dyAsIDIuNDM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjEyNXJlbSAsIDAuNjQ3NzI3MjcyN3JlbSAgKyAgMi4zODYzNjM2MzY0dncgLCAyLjQzNzVyZW0gKSkge1xuICAgIC5idG4gc3BhbiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMS4xMjVyZW0gKyAxLjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuIHNwYW4ge1xuICAgIHBhZGRpbmctbGVmdDogMS4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NTkuOThweCkge1xuICAuYnRuIHNwYW4ge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NjkuOThweCkge1xuICAuYnRuIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMjtcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWRhcmstY2wpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYnRuIHtcbiAgICBwYWRkaW5nLXRvcDogMS4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDAuNjI1cmVtICwgMC40MjA0NTQ1NDU1cmVtICArICAxLjAyMjcyNzI3Mjd2dyAsIDEuMTg3NXJlbSApKSB7XG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDAuNjI1cmVtICwgMC40MjA0NTQ1NDU1cmVtICArICAxLjAyMjcyNzI3Mjd2dyAsIDEuMTg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDAuNjI1cmVtICwgMC40MjA0NTQ1NDU1cmVtICArICAxLjAyMjcyNzI3Mjd2dyAsIDEuMTg3NXJlbSApKSB7XG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygwLjYyNXJlbSArIDAuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG4ge1xuICAgIHBhZGRpbmctdG9wOiAwLjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0biB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCAwLjYyNXJlbSAsIDAuNDIwNDU0NTQ1NXJlbSAgKyAgMS4wMjI3MjcyNzI3dncgLCAxLjE4NzVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAwLjYyNXJlbSAsIDAuNDIwNDU0NTQ1NXJlbSAgKyAgMS4wMjI3MjcyNzI3dncgLCAxLjE4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAwLjYyNXJlbSAsIDAuNDIwNDU0NTQ1NXJlbSAgKyAgMS4wMjI3MjcyNzI3dncgLCAxLjE4NzVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMC42MjVyZW0gKyAwLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG4ge1xuICAgIHdpZHRoOiAxMC42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggNXJlbSAsIDIuOTU0NTQ1NDU0NXJlbSAgKyAgMTAuMjI3MjcyNzI3M3Z3ICwgMTAuNjI1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggNXJlbSAsIDIuOTU0NTQ1NDU0NXJlbSAgKyAgMTAuMjI3MjcyNzI3M3Z3ICwgMTAuNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggNXJlbSAsIDIuOTU0NTQ1NDU0NXJlbSAgKyAgMTAuMjI3MjcyNzI3M3Z3ICwgMTAuNjI1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIHdpZHRoOiBjYWxjKDVyZW0gKyA1LjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG4ge1xuICAgIHdpZHRoOiA1cmVtO1xuICB9XG59XG4uYnRuOmhvdmVyIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tZGFyay1jbCk7XG59XG4uYnRuOmhvdmVyOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG4uYnRuOmhvdmVyOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xufVxuLmJ0bjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYnRuOjphZnRlciB7XG4gICAgdG9wOiAxLjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHRvcDogY2xhbXAoIDAuNzVyZW0gLCAwLjQ1NDU0NTQ1NDVyZW0gICsgIDEuNDc3MjcyNzI3M3Z3ICwgMS41NjI1cmVtICkpIHtcbiAgICAuYnRuOjphZnRlciB7XG4gICAgICB0b3A6IGNsYW1wKCAwLjc1cmVtICwgMC40NTQ1NDU0NTQ1cmVtICArICAxLjQ3NzI3MjcyNzN2dyAsIDEuNTYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh0b3A6IGNsYW1wKCAwLjc1cmVtICwgMC40NTQ1NDU0NTQ1cmVtICArICAxLjQ3NzI3MjcyNzN2dyAsIDEuNTYyNXJlbSApKSB7XG4gICAgLmJ0bjo6YWZ0ZXIge1xuICAgICAgdG9wOiBjYWxjKDAuNzVyZW0gKyAwLjgxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuOjphZnRlciB7XG4gICAgdG9wOiAwLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYnRuOjphZnRlciB7XG4gICAgcmlnaHQ6IDIuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChyaWdodDogY2xhbXAoIDEuMTg3NXJlbSAsIDAuNzU1NjgxODE4MnJlbSAgKyAgMi4xNTkwOTA5MDkxdncgLCAyLjM3NXJlbSApKSB7XG4gICAgLmJ0bjo6YWZ0ZXIge1xuICAgICAgcmlnaHQ6IGNsYW1wKCAxLjE4NzVyZW0gLCAwLjc1NTY4MTgxODJyZW0gICsgIDIuMTU5MDkwOTA5MXZ3ICwgMi4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocmlnaHQ6IGNsYW1wKCAxLjE4NzVyZW0gLCAwLjc1NTY4MTgxODJyZW0gICsgIDIuMTU5MDkwOTA5MXZ3ICwgMi4zNzVyZW0gKSkge1xuICAgIC5idG46OmFmdGVyIHtcbiAgICAgIHJpZ2h0OiBjYWxjKDEuMTg3NXJlbSArIDEuMTg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG46OmFmdGVyIHtcbiAgICByaWdodDogMS4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTU5Ljk4cHgpIHtcbiAgLmJ0bjo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5idG46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjUlKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcbn1cbi5idG4tLXJldmVyc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBvdXRsaW5lOiAxcHggc29saWQgI2ZmZjtcbn1cbi5idG4tLXJldmVyc2U6aG92ZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5idG4tLXJldmVyc2U6aG92ZXIgc3BhbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmJ0bi0tcmV2ZXJzZSBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWRhcmstY2wpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmJ0bi0tcmV2ZXJzZTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbn1cbi5idG4tLXJldmVyc2U6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xufVxuXG4uZGlyZWN0aW9ucyB7XG4gIG1heC13aWR0aDogMTMzNnB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZGlyZWN0aW9ucyB7XG4gICAgcGFkZGluZy1ib3R0b206IDguNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC4zNzVyZW0gLCAyLjc4NDA5MDkwOTFyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgOC43NXJlbSApKSB7XG4gICAgLmRpcmVjdGlvbnMge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCA0LjM3NXJlbSAsIDIuNzg0MDkwOTA5MXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA4Ljc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC4zNzVyZW0gLCAyLjc4NDA5MDkwOTFyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgOC43NXJlbSApKSB7XG4gICAgLmRpcmVjdGlvbnMge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoNC4zNzVyZW0gKyA0LjM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5kaXJlY3Rpb25zIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNC4zNzVyZW07XG4gIH1cbn1cblxuLndvcmtzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDMwcHg7XG59XG4ud29ya3MtbGlzdF9faXRlbSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwgMCwgMCwgMC4xMykgMCUsIHJnYmEoMCwgMCwgMCwgMC42NSkgMTAwJSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC53b3Jrcy1saXN0X19pdGVtIHtcbiAgICB3aWR0aDogMTlyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDEwLjEzNjM2MzYzNjRyZW0gICsgIDExLjgxODE4MTgxODJ2dyAsIDE5cmVtICkpIHtcbiAgICAud29ya3MtbGlzdF9faXRlbSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCAxMC4xMzYzNjM2MzY0cmVtICArICAxMS44MTgxODE4MTgydncgLCAxOXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCAxMC4xMzYzNjM2MzY0cmVtICArICAxMS44MTgxODE4MTgydncgLCAxOXJlbSApKSB7XG4gICAgLndvcmtzLWxpc3RfX2l0ZW0ge1xuICAgICAgd2lkdGg6IGNhbGMoMTIuNXJlbSArIDYuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC53b3Jrcy1saXN0X19pdGVtIHtcbiAgICB3aWR0aDogMTIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLndvcmtzLWxpc3RfX2l0ZW0ge1xuICAgIGhlaWdodDogMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGhlaWdodDogY2xhbXAoIDE3LjVyZW0gLCAxNC43NzI3MjcyNzI3cmVtICArICAxMy42MzYzNjM2MzY0dncgLCAyNXJlbSApKSB7XG4gICAgLndvcmtzLWxpc3RfX2l0ZW0ge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggMTcuNXJlbSAsIDE0Ljc3MjcyNzI3MjdyZW0gICsgIDEzLjYzNjM2MzYzNjR2dyAsIDI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDE3LjVyZW0gLCAxNC43NzI3MjcyNzI3cmVtICArICAxMy42MzYzNjM2MzY0dncgLCAyNXJlbSApKSB7XG4gICAgLndvcmtzLWxpc3RfX2l0ZW0ge1xuICAgICAgaGVpZ2h0OiBjYWxjKDE3LjVyZW0gKyA3LjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAud29ya3MtbGlzdF9faXRlbSB7XG4gICAgaGVpZ2h0OiAxNy41cmVtO1xuICB9XG59XG4ud29ya3MtbGlzdF9faXRlbTpob3ZlciB7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcbn1cbi53b3Jrcy1saXN0X19pdGVtOmhvdmVyIC53b3Jrcy1saXN0X19pbmZvIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNnB4KTtcbn1cbi53b3Jrcy1saXN0X19pdGVtOmhvdmVyIC53b3Jrcy1saXN0X19jYXJkIHtcbiAgZmlsdGVyOiBibHVyKDdweCk7XG59XG4ud29ya3MtbGlzdF9fY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZpbHRlcjogYmx1cigwKTtcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuNXMgZWFzZTtcbn1cbi53b3Jrcy1saXN0X19pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNnB4KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC53b3Jrcy1saXN0X19pbmZvIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1LjgxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjAxNzA0NTQ1NDVyZW0gICsgIDcuNzI3MjcyNzI3M3Z3ICwgNS44MTI1cmVtICkpIHtcbiAgICAud29ya3MtbGlzdF9faW5mbyB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMS41NjI1cmVtICwgMC4wMTcwNDU0NTQ1cmVtICArICA3LjcyNzI3MjcyNzN2dyAsIDUuODEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMS41NjI1cmVtICwgMC4wMTcwNDU0NTQ1cmVtICArICA3LjcyNzI3MjcyNzN2dyAsIDUuODEyNXJlbSApKSB7XG4gICAgLndvcmtzLWxpc3RfX2luZm8ge1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYygxLjU2MjVyZW0gKyA0LjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLndvcmtzLWxpc3RfX2luZm8ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLndvcmtzLWxpc3RfX2luZm8ge1xuICAgIHBhZGRpbmctbGVmdDogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuNTYyNXJlbSAsIDAuOTk0MzE4MTgxOHJlbSAgKyAgMi44NDA5MDkwOTA5dncgLCAzLjEyNXJlbSApKSB7XG4gICAgLndvcmtzLWxpc3RfX2luZm8ge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMS41NjI1cmVtICwgMC45OTQzMTgxODE4cmVtICArICAyLjg0MDkwOTA5MDl2dyAsIDMuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuNTYyNXJlbSAsIDAuOTk0MzE4MTgxOHJlbSAgKyAgMi44NDA5MDkwOTA5dncgLCAzLjEyNXJlbSApKSB7XG4gICAgLndvcmtzLWxpc3RfX2luZm8ge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuNTYyNXJlbSArIDEuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC53b3Jrcy1saXN0X19pbmZvIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNTYyNXJlbTtcbiAgfVxufVxuLndvcmtzLWxpc3RfX3RleHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDI0cHggMCAyNHB4IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDk5Ljk4cHgpIHtcbiAgLndvcmtzLWxpc3RfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuLndvcmtzLWxpc3RfX21vcmUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ5OS45OHB4KSB7XG4gIC53b3Jrcy1saXN0X19tb3JlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZlYXR1cmVkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogOS44MTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuNjg3NXJlbSAsIDIuODIzODYzNjM2NHJlbSAgKyAgOS4zMTgxODE4MTgydncgLCA5LjgxMjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuNjg3NXJlbSAsIDIuODIzODYzNjM2NHJlbSAgKyAgOS4zMTgxODE4MTgydncgLCA5LjgxMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCA0LjY4NzVyZW0gLCAyLjgyMzg2MzYzNjRyZW0gICsgIDkuMzE4MTgxODE4MnZ3ICwgOS44MTI1cmVtICkpIHtcbiAgICAuZmVhdHVyZWQge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoNC42ODc1cmVtICsgNS4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZmVhdHVyZWQge1xuICAgIHBhZGRpbmctYm90dG9tOiA0LjY4NzVyZW07XG4gIH1cbn1cbi5mZWF0dXJlZF9fbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZmVhdHVyZWRfX2xpc3Qge1xuICAgIGdhcDogNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAwLjI4NDA5MDkwOTFyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19saXN0IHtcbiAgICAgIGdhcDogY2xhbXAoIDEuODc1cmVtICwgMC4yODQwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAwLjI4NDA5MDkwOTFyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19saXN0IHtcbiAgICAgIGdhcDogY2FsYygxLjg3NXJlbSArIDQuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZlYXR1cmVkX19saXN0IHtcbiAgICBnYXA6IDEuODc1cmVtO1xuICB9XG59XG4uZmVhdHVyZWRfX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZmVhdHVyZWRfX2l0ZW06aG92ZXIgLmZlYXR1cmVkX19idG4sIC5mZWF0dXJlZF9faXRlbTpmb2N1cyAuZmVhdHVyZWRfX2J0biB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZmVhdHVyZWRfX2ltYWdlIHtcbiAgICB3aWR0aDogMjMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDExLjU2MjVyZW0gLCA3LjM1Nzk1NDU0NTVyZW0gICsgIDIxLjAyMjcyNzI3Mjd2dyAsIDIzLjEyNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19pbWFnZSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDExLjU2MjVyZW0gLCA3LjM1Nzk1NDU0NTVyZW0gICsgIDIxLjAyMjcyNzI3Mjd2dyAsIDIzLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDExLjU2MjVyZW0gLCA3LjM1Nzk1NDU0NTVyZW0gICsgIDIxLjAyMjcyNzI3Mjd2dyAsIDIzLjEyNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19pbWFnZSB7XG4gICAgICB3aWR0aDogY2FsYygxMS41NjI1cmVtICsgMTEuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mZWF0dXJlZF9faW1hZ2Uge1xuICAgIHdpZHRoOiAxMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZmVhdHVyZWRfX2ltYWdlIHtcbiAgICBoZWlnaHQ6IDI2Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAxMy4zNzVyZW0gLCA4LjUxMTM2MzYzNjRyZW0gICsgIDI0LjMxODE4MTgxODJ2dyAsIDI2Ljc1cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2ltYWdlIHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDEzLjM3NXJlbSAsIDguNTExMzYzNjM2NHJlbSAgKyAgMjQuMzE4MTgxODE4MnZ3ICwgMjYuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggMTMuMzc1cmVtICwgOC41MTEzNjM2MzY0cmVtICArICAyNC4zMTgxODE4MTgydncgLCAyNi43NXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19pbWFnZSB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTMuMzc1cmVtICsgMTMuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZlYXR1cmVkX19pbWFnZSB7XG4gICAgaGVpZ2h0OiAxMy4zNzVyZW07XG4gIH1cbn1cbi5mZWF0dXJlZF9fbGFiZWwge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZmVhdHVyZWRfX2xhYmVsIHtcbiAgICBtYXJnaW4tdG9wOiAyLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLXRvcDogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNTA1NjgxODE4MnJlbSAgKyAgMi4xNTkwOTA5MDkxdncgLCAyLjEyNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19sYWJlbCB7XG4gICAgICBtYXJnaW4tdG9wOiBjbGFtcCggMC45Mzc1cmVtICwgMC41MDU2ODE4MTgycmVtICArICAyLjE1OTA5MDkwOTF2dyAsIDIuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi10b3A6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjUwNTY4MTgxODJyZW0gICsgIDIuMTU5MDkwOTA5MXZ3ICwgMi4xMjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9fbGFiZWwge1xuICAgICAgbWFyZ2luLXRvcDogY2FsYygwLjkzNzVyZW0gKyAxLjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZmVhdHVyZWRfX2xhYmVsIHtcbiAgICBtYXJnaW4tdG9wOiAwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mZWF0dXJlZF9fbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuMjVyZW0gLCAwLjE1OTA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMC41cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2xhYmVsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjI1cmVtICwgMC4xNTkwOTA5MDkxcmVtICArICAwLjQ1NDU0NTQ1NDV2dyAsIDAuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC4yNXJlbSAsIDAuMTU5MDkwOTA5MXJlbSAgKyAgMC40NTQ1NDU0NTQ1dncgLCAwLjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9fbGFiZWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygwLjI1cmVtICsgMC4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mZWF0dXJlZF9fbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1OTkuOThweCkge1xuICAuZmVhdHVyZWRfX2xhYmVsIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbi5mZWF0dXJlZF9fdHlwZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mZWF0dXJlZF9faW1hZ2UtLWJpZyB7XG4gICAgd2lkdGg6IDM3LjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDEwLjIyNzI3MjcyNzNyZW0gICsgIDM2LjM2MzYzNjM2MzZ2dyAsIDM3LjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9faW1hZ2UtLWJpZyB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxMC4yMjcyNzI3MjczcmVtICArICAzNi4zNjM2MzYzNjM2dncgLCAzNy41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDEwLjIyNzI3MjcyNzNyZW0gICsgIDM2LjM2MzYzNjM2MzZ2dyAsIDM3LjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9faW1hZ2UtLWJpZyB7XG4gICAgICB3aWR0aDogY2FsYygxNy41cmVtICsgMjAgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZmVhdHVyZWRfX2ltYWdlLS1iaWcge1xuICAgIHdpZHRoOiAxNy41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZmVhdHVyZWRfX2ltYWdlLS1iaWcge1xuICAgIGhlaWdodDogMjYuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGhlaWdodDogY2xhbXAoIDEyLjEyNXJlbSAsIDYuODA2ODE4MTgxOHJlbSAgKyAgMjYuNTkwOTA5MDkwOXZ3ICwgMjYuNzVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9faW1hZ2UtLWJpZyB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCAxMi4xMjVyZW0gLCA2LjgwNjgxODE4MThyZW0gICsgIDI2LjU5MDkwOTA5MDl2dyAsIDI2Ljc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDEyLjEyNXJlbSAsIDYuODA2ODE4MTgxOHJlbSAgKyAgMjYuNTkwOTA5MDkwOXZ3ICwgMjYuNzVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9faW1hZ2UtLWJpZyB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTIuMTI1cmVtICsgMTQuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZlYXR1cmVkX19pbWFnZS0tYmlnIHtcbiAgICBoZWlnaHQ6IDEyLjEyNXJlbTtcbiAgfVxufVxuLmZlYXR1cmVkX19pdGVtLS10b3Age1xuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICBwYWRkaW5nLXRvcDogMTYwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5mZWF0dXJlZF9faXRlbS0tdG9wIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cbn1cbi5mZWF0dXJlZF9faXRlbS0tYm90dG9tIHtcbiAgbWFyZ2luLXRvcDogLTE2MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAuZmVhdHVyZWRfX2l0ZW0tLWJvdHRvbSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxufVxuLmZlYXR1cmVkX19idG4ge1xuICBsZWZ0OiAxMzBweDtcbiAgdG9wOiAyMDBweDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZSwgdmlzaWJpbGl0eSAwLjVzIGVhc2UsIHRyYW5zZm9ybSAwLjRzIGVhc2UsIGJveC1zaGFkb3cgMC40cyBlYXNlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmZlYXR1cmVkX19idG4ge1xuICAgIGxlZnQ6IDEwMHB4O1xuICAgIHRvcDogMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyOS45OTg3NWVtKSB7XG4gIC5mZWF0dXJlZF9fYnRuIHtcbiAgICBsZWZ0OiA2NnB4O1xuICAgIHRvcDogNzdweDtcbiAgfVxufVxuXG4uaW50cm9kdWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogZmlyc3QgYmFzZWxpbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyb2R1Y3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjAzOTc3MjcyNzNyZW0gICsgIDIuNjEzNjM2MzYzNnZ3ICwgM3JlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4wMzk3NzI3MjczcmVtICArICAyLjYxMzYzNjM2MzZ2dyAsIDNyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMDM5NzcyNzI3M3JlbSAgKyAgMi42MTM2MzYzNjM2dncgLCAzcmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS41NjI1cmVtICsgMS40Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvZHVjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm9kdWN0aW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC41NjgxODE4MTgycmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb24ge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjU2ODE4MTgxODJyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgNi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuNTY4MTgxODE4MnJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA2LjI1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygxLjI1cmVtICsgNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyb2R1Y3Rpb24ge1xuICAgIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvZHVjdGlvbiB7XG4gICAgcGFkZGluZy1yaWdodDogNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1yaWdodDogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb24ge1xuICAgICAgcGFkZGluZy1yaWdodDogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1yaWdodDogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb24ge1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYygzLjEyNXJlbSArIDMuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvZHVjdGlvbiB7XG4gICAgcGFkZGluZy1yaWdodDogMy4xMjVyZW07XG4gIH1cbn1cbi5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgbWFyZ2luLXJpZ2h0OiAzNzVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDMuMTI1cmVtICsgMy4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgIHdpZHRoOiAyNi41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDExLjY0NzcyNzI3MjdyZW0gICsgIDE5Ljg4NjM2MzYzNjR2dyAsIDI2LjU2MjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTEuNjQ3NzI3MjcyN3JlbSAgKyAgMTkuODg2MzYzNjM2NHZ3ICwgMjYuNTYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDExLjY0NzcyNzI3MjdyZW0gICsgIDE5Ljg4NjM2MzYzNjR2dyAsIDI2LjU2MjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICAgIHdpZHRoOiBjYWxjKDE1LjYyNXJlbSArIDEwLjkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgd2lkdGg6IDE1LjYyNXJlbTtcbiAgfVxufVxuLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG4gIGxlZnQ6IDY4MHB4O1xuICB0b3A6IDgwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZTo6YWZ0ZXIge1xuICAgIHdpZHRoOiA0LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAyLjE4NzVyZW0gLCAxLjM5MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNC4zNzVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlOjphZnRlciB7XG4gICAgICB3aWR0aDogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMzkyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMzkyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjM3NXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDIuMTg3NXJlbSArIDIuMTg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlOjphZnRlciB7XG4gICAgd2lkdGg6IDIuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkgYW5kIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjAzOTc3MjcyNzNyZW0gICsgIDIuNjEzNjM2MzYzNnZ3ICwgM3JlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMDM5NzcyNzI3M3JlbSAgKyAgMi42MTM2MzYzNjM2dncgLCAzcmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjAzOTc3MjcyNzNyZW0gICsgIDIuNjEzNjM2MzYzNnZ3ICwgM3JlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjU2MjVyZW0gKyAxLjQzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlOjphZnRlciB7XG4gICAgdG9wOiAtNDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkgYW5kIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgICBsZWZ0OiA2LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChsZWZ0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgICAgIGxlZnQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGxlZnQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uX190aXRsZTo6YWZ0ZXIge1xuICAgICAgbGVmdDogY2FsYygzLjEyNXJlbSArIDMuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgICBsZWZ0OiAzLjEyNXJlbTtcbiAgfVxufVxuXG4ucHJvY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xuICBoZWlnaHQ6IDY2NHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSB7XG4gIC5wcm9jZXNzIHtcbiAgICBoZWlnaHQ6IDc2NHB4O1xuICB9XG59XG4ucHJvY2Vzc19fY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMzAwcHg7XG4gIHotaW5kZXg6IDI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5wcm9jZXNzX19jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiA5LjMxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggNC4wNjI1cmVtICwgMi4xNTM0MDkwOTA5cmVtICArICA5LjU0NTQ1NDU0NTV2dyAsIDkuMzEyNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX2NvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDQuMDYyNXJlbSAsIDIuMTUzNDA5MDkwOXJlbSAgKyAgOS41NDU0NTQ1NDU1dncgLCA5LjMxMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCA0LjA2MjVyZW0gLCAyLjE1MzQwOTA5MDlyZW0gICsgIDkuNTQ1NDU0NTQ1NXZ3ICwgOS4zMTI1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDQuMDYyNXJlbSArIDUuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAucHJvY2Vzc19fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogNC4wNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAucHJvY2Vzc19fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAuMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCA0LjM3NXJlbSAsIDIuMzA2ODE4MTgxOHJlbSAgKyAgMTAuMzQwOTA5MDkwOXZ3ICwgMTAuMDYyNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX2NvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMi4zMDY4MTgxODE4cmVtICArICAxMC4zNDA5MDkwOTA5dncgLCAxMC4wNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC4zNzVyZW0gLCAyLjMwNjgxODE4MThyZW0gICsgIDEwLjM0MDkwOTA5MDl2dyAsIDEwLjA2MjVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19jb250YWluZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoNC4zNzVyZW0gKyA1LjY4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAucHJvY2Vzc19fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNC4zNzVyZW07XG4gIH1cbn1cbi5wcm9jZXNzX19jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTIwJTtcbiAgdG9wOiAtMzUlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAucHJvY2Vzc19fY29udGFpbmVyOjphZnRlciB7XG4gICAgd2lkdGg6IDQwLjA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IGNhbGMoMTIuNXJlbSArIDI3LjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAucHJvY2Vzc19fY29udGFpbmVyOjphZnRlciB7XG4gICAgd2lkdGg6IDEyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5wcm9jZXNzX19jb250YWluZXI6OmFmdGVyIHtcbiAgICBoZWlnaHQ6IDQwLjA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGhlaWdodDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgaGVpZ2h0OiBjYWxjKDEyLjVyZW0gKyAyNy41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnByb2Nlc3NfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIGhlaWdodDogMTIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSB7XG4gIC5wcm9jZXNzX19jb250YWluZXI6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ucHJvY2Vzc19fdGl0bGUge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnByb2Nlc3NfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS44NzVyZW0gLCAwLjczODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjg3NXJlbSAsIDAuNzM4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjg3NXJlbSAsIDAuNzM4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjg3NXJlbSArIDMuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnByb2Nlc3NfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSBhbmQgKG1pbi13aWR0aDogNzVlbSkge1xuICAucHJvY2Vzc19fdGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuNTY4MTgxODE4MnJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA2LjI1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fdGl0bGUge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjU2ODE4MTgxODJyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgNi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuNTY4MTgxODE4MnJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA2LjI1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fdGl0bGUge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuMjVyZW0gKyA1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAucHJvY2Vzc19fdGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQxOS45OHB4KSB7XG4gIC5wcm9jZXNzX190aXRsZSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG59XG4ucHJvY2Vzc19fbGlzdCB7XG4gIGdhcDogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5wcm9jZXNzX19saXN0IHtcbiAgICBtYXJnaW4tbGVmdDogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgMC4zNDA5MDkwOTA5cmVtICArICA0LjU0NTQ1NDU0NTV2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19saXN0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIDAuMzQwOTA5MDkwOXJlbSAgKyAgNC41NDU0NTQ1NDU1dncgLCAzLjc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIDAuMzQwOTA5MDkwOXJlbSAgKyAgNC41NDU0NTQ1NDU1dncgLCAzLjc1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fbGlzdCB7XG4gICAgICBtYXJnaW4tbGVmdDogY2FsYygxLjI1cmVtICsgMi41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnByb2Nlc3NfX2xpc3Qge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAucHJvY2Vzc19fbGlzdCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtMy4xODE4MTgwOTY2cmVtICArICAxNS45MDkwOTA3OTU1dncgLCA4Ljc1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fbGlzdCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtMy4xODE4MTgwOTY2cmVtICArICAxNS45MDkwOTA3OTU1dncgLCA4Ljc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1yaWdodDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIC0zLjE4MTgxODA5NjZyZW0gICsgIDE1LjkwOTA5MDc5NTV2dyAsIDguNzVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19saXN0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygwLjAwMDAwMDA2MjVyZW0gKyA4Ljc0OTk5OTkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAucHJvY2Vzc19fbGlzdCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjAwMDAwMDA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkge1xuICAucHJvY2Vzc19fbGlzdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxufVxuLnByb2Nlc3NfX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvY2Vzc19faXRlbTpob3ZlciAucHJvY2Vzc19fdGV4dCB7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG59XG4ucHJvY2Vzc19faXRlbTpob3ZlciAucHJvY2Vzc19fdGV4dDo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI4JSk7XG59XG4ucHJvY2Vzc19faXRlbTpob3ZlciAucHJvY2Vzc19fbnVtYmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5wcm9jZXNzX190ZXh0IHtcbiAgY29sb3I6ICM2RjZGNkY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC40cyBlYXNlLCB0cmFuc2Zvcm0gMC40cyBlYXNlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG4ucHJvY2Vzc19fdGV4dDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC05MHB4O1xuICB0b3A6IDE3cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UsIG9wYWNpdHkgMC40cyBlYXNlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSB7XG4gIC5wcm9jZXNzX190ZXh0OjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5wcm9jZXNzX19udW1iZXIge1xuICBvcGFjaXR5OiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlO1xufVxuXG4ucHJvY2Vzcy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkge1xuICAucHJvY2Vzcy13cmFwcGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5ibG9jay1pbmZvIHtcbiAgICB3aWR0aDogMjQuNjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMi4zMjk1NDU0NTQ1cmVtICArICAxNi40NzcyNzI3MjczdncgLCAyNC42ODc1cmVtICkpIHtcbiAgICAuYmxvY2staW5mbyB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDEyLjMyOTU0NTQ1NDVyZW0gICsgIDE2LjQ3NzI3MjcyNzN2dyAsIDI0LjY4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMi4zMjk1NDU0NTQ1cmVtICArICAxNi40NzcyNzI3MjczdncgLCAyNC42ODc1cmVtICkpIHtcbiAgICAuYmxvY2staW5mbyB7XG4gICAgICB3aWR0aDogY2FsYygxNS42MjVyZW0gKyA5LjA2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYmxvY2staW5mbyB7XG4gICAgd2lkdGg6IDE1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSBhbmQgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYmxvY2staW5mbyB7XG4gICAgcGFkZGluZy1sZWZ0OiA2LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC41NjgxODE4MTgycmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5ibG9jay1pbmZvIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC41NjgxODE4MTgycmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjU2ODE4MTgxODJyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmJsb2NrLWluZm8ge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuMjVyZW0gKyA1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAuYmxvY2staW5mbyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICB9XG59XG4uYmxvY2staW5mb19fdGV4dCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYmxvY2staW5mb19fdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMy4zMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMC45MjYxMzYzNjM2cmVtICArICAzLjE4MTgxODE4MTh2dyAsIDMuMzEyNXJlbSApKSB7XG4gICAgLmJsb2NrLWluZm9fX3RleHQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDAuOTI2MTM2MzYzNnJlbSAgKyAgMy4xODE4MTgxODE4dncgLCAzLjMxMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDAuOTI2MTM2MzYzNnJlbSAgKyAgMy4xODE4MTgxODE4dncgLCAzLjMxMjVyZW0gKSkge1xuICAgIC5ibG9jay1pbmZvX190ZXh0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS41NjI1cmVtICsgMS43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5ibG9jay1pbmZvX190ZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjU2MjVyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNyZWF0ZSB7XG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDVyZW0gLCAzLjE4MTgxODE4MThyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgMTByZW0gKSkge1xuICAgIC5jcmVhdGUge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCA1cmVtICwgMy4xODE4MTgxODE4cmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDEwcmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggNXJlbSAsIDMuMTgxODE4MTgxOHJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCAxMHJlbSApKSB7XG4gICAgLmNyZWF0ZSB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYyg1cmVtICsgNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jcmVhdGUge1xuICAgIHBhZGRpbmctdG9wOiA1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY3JlYXRlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogOC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCA0LjM3NXJlbSAsIDIuNzg0MDkwOTA5MXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA4Ljc1cmVtICkpIHtcbiAgICAuY3JlYXRlIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC4zNzVyZW0gLCAyLjc4NDA5MDkwOTFyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgOC43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMi43ODQwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDguNzVyZW0gKSkge1xuICAgIC5jcmVhdGUge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoNC4zNzVyZW0gKyA0LjM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jcmVhdGUge1xuICAgIHBhZGRpbmctYm90dG9tOiA0LjM3NXJlbTtcbiAgfVxufVxuLmNyZWF0ZV9fd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbWctYmxvY2tfX2l0ZW0ge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuNHMgZWFzZTtcbn1cbi5pbWctYmxvY2tfX2l0ZW06aG92ZXIge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcbn1cbi5pbWctYmxvY2tfX2l0ZW0tLWJpZyB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHdpZHRoOiA0NzBweDtcbiAgaGVpZ2h0OiAyOTBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLWJpZyB7XG4gICAgd2lkdGg6IDI5LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxNC42ODc1cmVtICwgOS4zNDY1OTA5MDkxcmVtICArICAyNi43MDQ1NDU0NTQ1dncgLCAyOS4zNzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLWJpZyB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE0LjY4NzVyZW0gLCA5LjM0NjU5MDkwOTFyZW0gICsgIDI2LjcwNDU0NTQ1NDV2dyAsIDI5LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE0LjY4NzVyZW0gLCA5LjM0NjU5MDkwOTFyZW0gICsgIDI2LjcwNDU0NTQ1NDV2dyAsIDI5LjM3NXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19faXRlbS0tYmlnIHtcbiAgICAgIHdpZHRoOiBjYWxjKDE0LjY4NzVyZW0gKyAxNC42ODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmltZy1ibG9ja19faXRlbS0tYmlnIHtcbiAgICB3aWR0aDogMTQuNjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmltZy1ibG9ja19faXRlbS0tYmlnIHtcbiAgICBoZWlnaHQ6IDE4LjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggOS4wNjI1cmVtICwgNS43NjcwNDU0NTQ1cmVtICArICAxNi40NzcyNzI3MjczdncgLCAxOC4xMjVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLWJpZyB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCA5LjA2MjVyZW0gLCA1Ljc2NzA0NTQ1NDVyZW0gICsgIDE2LjQ3NzI3MjcyNzN2dyAsIDE4LjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCA5LjA2MjVyZW0gLCA1Ljc2NzA0NTQ1NDVyZW0gICsgIDE2LjQ3NzI3MjcyNzN2dyAsIDE4LjEyNXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19faXRlbS0tYmlnIHtcbiAgICAgIGhlaWdodDogY2FsYyg5LjA2MjVyZW0gKyA5LjA2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1iaWcge1xuICAgIGhlaWdodDogOS4wNjI1cmVtO1xuICB9XG59XG4uaW1nLWJsb2NrX19ib3R0b20ge1xuICB3aWR0aDogNTc1cHg7XG59XG4uaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gIHBhZGRpbmctbGVmdDogMTMwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICB3aWR0aDogOC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCA0LjM3NXJlbSAsIDIuNzg0MDkwOTA5MXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA4Ljc1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgICB3aWR0aDogY2xhbXAoIDQuMzc1cmVtICwgMi43ODQwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDguNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCA0LjM3NXJlbSAsIDIuNzg0MDkwOTA5MXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA4Ljc1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgICB3aWR0aDogY2FsYyg0LjM3NXJlbSArIDQuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmltZy1ibG9ja19faXRlbS0tc21hbGwge1xuICAgIHdpZHRoOiA0LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmltZy1ibG9ja19faXRlbS0tc21hbGwge1xuICAgIGhlaWdodDogMTguMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCA5LjA2MjVyZW0gLCA1Ljc2NzA0NTQ1NDVyZW0gICsgIDE2LjQ3NzI3MjcyNzN2dyAsIDE4LjEyNXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19faXRlbS0tc21hbGwge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggOS4wNjI1cmVtICwgNS43NjcwNDU0NTQ1cmVtICArICAxNi40NzcyNzI3MjczdncgLCAxOC4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggOS4wNjI1cmVtICwgNS43NjcwNDU0NTQ1cmVtICArICAxNi40NzcyNzI3MjczdncgLCAxOC4xMjVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICAgIGhlaWdodDogY2FsYyg5LjA2MjVyZW0gKyA5LjA2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgaGVpZ2h0OiA5LjA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jcmVhdGUtaW5mbyB7XG4gICAgcGFkZGluZy10b3A6IDUuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAxLjI5NTQ1NDU0NTVyZW0gICsgIDYuMDIyNzI3MjcyN3Z3ICwgNS44MTI1cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm8ge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAxLjI5NTQ1NDU0NTVyZW0gICsgIDYuMDIyNzI3MjcyN3Z3ICwgNS44MTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgMS4yOTU0NTQ1NDU1cmVtICArICA2LjAyMjcyNzI3Mjd2dyAsIDUuODEyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDIuNXJlbSArIDMuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jcmVhdGUtaW5mbyB7XG4gICAgcGFkZGluZy10b3A6IDIuNXJlbTtcbiAgfVxufVxuLmNyZWF0ZS1pbmZvX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgd2lkdGg6IDM1N3B4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi4zMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIDAuODYzNjM2MzYzNnJlbSAgKyAgMS45MzE4MTgxODE4dncgLCAyLjMxMjVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAwLjg2MzYzNjM2MzZyZW0gICsgIDEuOTMxODE4MTgxOHZ3ICwgMi4zMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgMC44NjM2MzYzNjM2cmVtICArICAxLjkzMTgxODE4MTh2dyAsIDIuMzEyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuMjVyZW0gKyAxLjA2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlLWluZm9fX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICB9XG59XG4uY3JlYXRlLWluZm9fX3RleHQge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgIG1hcmdpbi1sZWZ0OiA1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWxlZnQ6IGNsYW1wKCAyLjgxMjVyZW0gLCAxLjc4OTc3MjcyNzNyZW0gICsgIDUuMTEzNjM2MzYzNnZ3ICwgNS42MjVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgICBtYXJnaW4tbGVmdDogY2xhbXAoIDIuODEyNXJlbSAsIDEuNzg5NzcyNzI3M3JlbSAgKyAgNS4xMTM2MzYzNjM2dncgLCA1LjYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tbGVmdDogY2xhbXAoIDIuODEyNXJlbSAsIDEuNzg5NzcyNzI3M3JlbSAgKyAgNS4xMTM2MzYzNjM2dncgLCA1LjYyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDIuODEyNXJlbSArIDIuODEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOiA1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuODEyNXJlbSAsIDEuNzg5NzcyNzI3M3JlbSAgKyAgNS4xMTM2MzYzNjM2dncgLCA1LjYyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAyLjgxMjVyZW0gLCAxLjc4OTc3MjcyNzNyZW0gICsgIDUuMTEzNjM2MzYzNnZ3ICwgNS42MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuODEyNXJlbSAsIDEuNzg5NzcyNzI3M3JlbSAgKyAgNS4xMTM2MzYzNjM2dncgLCA1LjYyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMi44MTI1cmVtICsgMi44MTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjgxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgd2lkdGg6IDI3LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTMuOTA5MDkwOTA5MXJlbSAgKyAgMTcuOTU0NTQ1NDU0NXZ3ICwgMjcuMzc1cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTMuOTA5MDkwOTA5MXJlbSAgKyAgMTcuOTU0NTQ1NDU0NXZ3ICwgMjcuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDEzLjkwOTA5MDkwOTFyZW0gICsgIDE3Ljk1NDU0NTQ1NDV2dyAsIDI3LjM3NXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICAgIHdpZHRoOiBjYWxjKDE3LjVyZW0gKyA5Ljg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgd2lkdGg6IDE3LjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jcmVhdGUtaW5mb19fYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogNS42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1sZWZ0OiBjbGFtcCggMi44MTI1cmVtICwgMS43ODk3NzI3MjczcmVtICArICA1LjExMzYzNjM2MzZ2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm9fX2J0biB7XG4gICAgICBtYXJnaW4tbGVmdDogY2xhbXAoIDIuODEyNXJlbSAsIDEuNzg5NzcyNzI3M3JlbSAgKyAgNS4xMTM2MzYzNjM2dncgLCA1LjYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tbGVmdDogY2xhbXAoIDIuODEyNXJlbSAsIDEuNzg5NzcyNzI3M3JlbSAgKyAgNS4xMTM2MzYzNjM2dncgLCA1LjYyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX19idG4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMi44MTI1cmVtICsgMi44MTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX19idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAyLjgxMjVyZW07XG4gIH1cbn1cblxuOnJvb3Qge1xuICAtLWRhcmstY2w6ICMwRTBFMEU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL251bGwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvaG9tZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy91dGlscy92YXJzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FER0Q7O0FDREE7OztFQUdDLHNCQUFBO0FESUQ7O0FDTUE7O0VBRUMsWUFBQTtFQUNBLGdCQUFBO0FESEQ7O0FDS0E7RUFDQyxjQUFBO0VBQ0EsY0FBQTtFQUNBLG9CRE5ZO0VDT1osb0JETlU7RUNRViwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FESEQ7O0FDS0E7OztFQUdDLG9CRGxCWTtFQ21CWixrQkFBQTtFQUNBLG9CQUFBO0FERkQ7O0FDSUE7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FEREQ7O0FDR0E7RUFDQyxjQUFBO0VBQ0EscUJBQUE7QURBRDs7QUNFQTtFQUNDLGdCQUFBO0FEQ0Q7O0FDQ0E7RUFDQyxtQkFBQTtBREVEOztBQ0FBOzs7Ozs7RUFNQyxvQkFBQTtFQUNBLGtCQUFBO0FER0Q7O0FBSEM7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFNRjtBQUNBO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNEO0FBQUM7RUFMRDtJQU1FLGNBQUE7RUFHQTtBQUNGO0FBREM7RUFDQyxjQUFBO0FBR0Y7QUFBQztFQUNDLFlBQUE7QUFFRjs7QUFFQTs7Ozs7Q0FBQTtBQVFDO0VBRUUsZ0JBQUE7RUFDQSxjQUFBO0VBSUMsb0JBQUE7QUFMSjs7QUU5REE7RUFDQyxrQkFBQTtBRmlFRDtBRWhFQztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FGa0VGOztBRTlEQztFQUNDLG1CQUFBO0FGaUVGOztBR3BIQTtFQUNDLGdDQUFBO0VBQ0EsV0FBQTtBSHVIRDtBR3RIQztFQUNDLGFBQUE7RUFDQSxtQkFBQTtBSHdIRjtBR3ZIRTtFQUhEO0lBSUUsOEJBQUE7SUFDQSxZQUFBO0VIMEhEO0FBQ0Y7QUd2SEM7RUFDQyxrQkFBQTtBSHlIRjtBSXhERTtFRGxFRDtJQ21FRSxrQkFBQTtFSjJERDtBQUNGO0FJeERDO0VBRUM7SUR6RUQ7TUMwRUUsNEVBaEJjO0lKMEViO0VBQ0Y7RUl4REE7SUQ3RUQ7TUM4RUUsMERBQUE7SUoyREM7RUFDRjtBQUNGO0FJekRFO0VEbEZEO0lDbUZFLG9CQUFBO0VKNEREO0FBQ0Y7O0FHeklDO0VBR0MsYUFBQTtFQUNBLFdBQUE7QUgwSUY7QUluRkU7RUQzREQ7SUM0REUsc0JBQUE7RUpzRkQ7QUFDRjtBSW5GQztFQUVDO0lEbEVEO01DbUVFLGdGQWhCYztJSnFHYjtFQUNGO0VJbkZBO0lEdEVEO01DdUVFLDJEQUFBO0lKc0ZDO0VBQ0Y7QUFDRjtBSXBGRTtFRDNFRDtJQzRFRSxzQkFBQTtFSnVGRDtBQUNGO0FJekdFO0VEM0REO0lDNERFLHlCQUFBO0VKNEdEO0FBQ0Y7QUl6R0M7RUFFQztJRGxFRDtNQ21FRSxtRkFoQmM7SUoySGI7RUFDRjtFSXpHQTtJRHRFRDtNQ3VFRSw4REFBQTtJSjRHQztFQUNGO0FBQ0Y7QUkxR0U7RUQzRUQ7SUM0RUUseUJBQUE7RUo2R0Q7QUFDRjtBR3JMRTtFQUxEO0lBTUUsc0JBQUE7SUFDQSxtQkFBQTtFSHdMRDtBQUNGO0FHckxDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FIdUxGO0FJeklFO0VEaEREO0lDaURFLHFCQUFBO0VKNElEO0FBQ0Y7QUl6SUM7RUFFQztJRHZERDtNQ3dERSw4RUFoQmM7SUoySmI7RUFDRjtFSXpJQTtJRDNERDtNQzRERSwyREFBQTtJSjRJQztFQUNGO0FBQ0Y7QUkxSUU7RURoRUQ7SUNpRUUsc0JBQUE7RUo2SUQ7QUFDRjtBSS9KRTtFRGhERDtJQ2lERSxXQUFBO0VKa0tEO0FBQ0Y7QUkvSkM7RUFFQztJRHZERDtNQ3dERSxvRUFoQmM7SUppTGI7RUFDRjtFSS9KQTtJRDNERDtNQzRERSxrREFBQTtJSmtLQztFQUNGO0FBQ0Y7QUloS0U7RURoRUQ7SUNpRUUsYUFBQTtFSm1LRDtBQUNGO0FHL05FO0VBTkQ7SUFPRSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsU0FB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SjZhRDtBQUNGO0FJMWFDO0VBRUM7SUMzRUY7TUQ0RUcseUVBaEJjO0lKNGJiO0VBQ0Y7RUkxYUE7SUMvRUY7TURnRkcsc0RBQUE7SUo2YUM7RUFDRjtBQUNGO0FJM2FFO0VDcEZGO0lEcUZHLGVBQUE7RUo4YUQ7QUFDRjtBSWhjRTtFQ3BFRjtJRHFFRyxXQUFBO0VKbWNEO0FBQ0Y7QUloY0M7RUFFQztJQzNFRjtNRDRFRyxvRUFoQmM7SUprZGI7RUFDRjtFSWhjQTtJQy9FRjtNRGdGRyxvREFBQTtJSm1jQztFQUNGO0FBQ0Y7QUlqY0U7RUNwRkY7SURxRkcsZUFBQTtFSm9jRDtBQUNGO0FLamhCUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBRUEsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUxraEJaO0FJN2RFO0VDM0RNO0lENERMLGNBQUE7RUpnZUQ7QUFDRjtBSTdkQztFQUVDO0lDbEVNO01EbUVMLHVFQWhCYztJSitlYjtFQUNGO0VJN2RBO0lDdEVNO01EdUVMLG9EQUFBO0lKZ2VDO0VBQ0Y7QUFDRjtBSTlkRTtFQzNFTTtJRDRFTCxlQUFBO0VKaWVEO0FBQ0Y7QUluZkU7RUMzRE07SUQ0REwsY0FBQTtFSnNmRDtBQUNGO0FJbmZDO0VBRUM7SUNsRU07TURtRUwsMERBaEJjO0lKcWdCYjtFQUNGO0VJbmZBO0lDdEVNO01EdUVMLHFEQUFBO0lKc2ZDO0VBQ0Y7QUFDRjtBSXBmRTtFQzNFTTtJRDRFTCxlQUFBO0VKdWZEO0FBQ0Y7QUl6Z0JFO0VDakRFO0lEa0RELG1CQUFBO0VKNGdCRDtBQUNGO0FJemdCQztFQUVDO0lDeERFO01EeURELDJFQWhCYztJSjJoQmI7RUFDRjtFSXpnQkE7SUM1REU7TUQ2REQsdURBQUE7SUo0Z0JDO0VBQ0Y7QUFDRjtBSTFnQkU7RUNqRUU7SURrRUQsa0JBQUE7RUo2Z0JEO0FBQ0Y7O0FLMWtCQTtFQUNRLGtCQUFBO0VBSUEsc0JBQUE7QUwwa0JSO0FJcGlCRTtFQzNDRjtJRDRDRyxlQUFBO0VKdWlCRDtBQUNGO0FJcGlCQztFQUVDO0lDbERGO01EbURHLHlFQWhCYztJSnNqQmI7RUFDRjtFSXBpQkE7SUN0REY7TUR1REcsbURBQUE7SUp1aUJDO0VBQ0Y7QUFDRjtBSXJpQkU7RUMzREY7SUQ0REcsYUFBQTtFSndpQkQ7QUFDRjtBSTFqQkU7RUMzQ0Y7SUQ0Q0csYUFBQTtFSjZqQkQ7QUFDRjtBSTFqQkM7RUFFQztJQ2xERjtNRG1ERyx3RUFoQmM7SUo0a0JiO0VBQ0Y7RUkxakJBO0lDdERGO01EdURHLG9EQUFBO0lKNmpCQztFQUNGO0FBQ0Y7QUkzakJFO0VDM0RGO0lENERHLGNBQUE7RUo4akJEO0FBQ0Y7QUlobEJFO0VDM0NGO0lENENHLGVBQUE7RUptbEJEO0FBQ0Y7QUlobEJDO0VBRUM7SUNsREY7TURtREcsMEVBaEJjO0lKa21CYjtFQUNGO0VJaGxCQTtJQ3RERjtNRHVERyxtREFBQTtJSm1sQkM7RUFDRjtBQUNGO0FJamxCRTtFQzNERjtJRDRERyxlQUFBO0VKb2xCRDtBQUNGO0FLM29CSTtFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7QUw0b0JSO0FJNW1CRTtFQ3JDRTtJRHNDRCxtQkFBQTtFSittQkQ7QUFDRjtBSTVtQkM7RUFFQztJQzVDRTtNRDZDRCwyRUFoQmM7SUo4bkJiO0VBQ0Y7RUk1bUJBO0lDaERFO01EaURELHVEQUFBO0lKK21CQztFQUNGO0FBQ0Y7QUk3bUJFO0VDckRFO0lEc0RELGtCQUFBO0VKZ25CRDtBQUNGO0FLanFCUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBTG1xQlo7QUtocUJJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FMa3FCUjs7QUs5cEJBO0VBQ0ksa0JBQUE7RUFLQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtFQUNBLHFEQUFBO0FMNHBCSjtBSXpwQkU7RUNkRjtJRGVHLGNBQUE7RUo0cEJEO0FBQ0Y7QUl6cEJDO0VBRUM7SUNyQkY7TURzQkcscUVBaEJjO0lKMnFCYjtFQUNGO0VJenBCQTtJQ3pCRjtNRDBCRyxnREFBQTtJSjRwQkM7RUFDRjtBQUNGO0FJMXBCRTtFQzlCRjtJRCtCRyxVQUFBO0VKNnBCRDtBQUNGO0FJL3FCRTtFQ2RGO0lEZUcsZ0JBQUE7RUprckJEO0FBQ0Y7QUkvcUJDO0VBRUM7SUNyQkY7TURzQkcsMEVBaEJjO0lKaXNCYjtFQUNGO0VJL3FCQTtJQ3pCRjtNRDBCRyxtREFBQTtJSmtyQkM7RUFDRjtBQUNGO0FJaHJCRTtFQzlCRjtJRCtCRyxjQUFBO0VKbXJCRDtBQUNGO0FJcnNCRTtFQ2RGO0lEZUcsZUFBQTtFSndzQkQ7QUFDRjtBSXJzQkM7RUFFQztJQ3JCRjtNRHNCRyx5RUFoQmM7SUp1dEJiO0VBQ0Y7RUlyc0JBO0lDekJGO01EMEJHLHNEQUFBO0lKd3NCQztFQUNGO0FBQ0Y7QUl0c0JFO0VDOUJGO0lEK0JHLGdCQUFBO0VKeXNCRDtBQUNGO0FJM3RCRTtFQ2RGO0lEZUcsZ0JBQUE7RUo4dEJEO0FBQ0Y7QUkzdEJDO0VBRUM7SUNyQkY7TURzQkcsMEVBaEJjO0lKNnVCYjtFQUNGO0VJM3RCQTtJQ3pCRjtNRDBCRyx1REFBQTtJSjh0QkM7RUFDRjtBQUNGO0FJNXRCRTtFQzlCRjtJRCtCRyxpQkFBQTtFSit0QkQ7QUFDRjtBSWp2QkU7RUNkRjtJRGVHLG9CQUFBO0VKb3ZCRDtBQUNGO0FJanZCQztFQUVDO0lDckJGO01Ec0JHLDRFQWhCYztJSm13QmI7RUFDRjtFSWp2QkE7SUN6QkY7TUQwQkcsd0RBQUE7SUpvdkJDO0VBQ0Y7QUFDRjtBSWx2QkU7RUM5QkY7SUQrQkcsa0JBQUE7RUpxdkJEO0FBQ0Y7QUt4d0JJO0VBQ0kscUJBQUE7RUFDQSxpQ0FBQTtBTDB3QlI7O0FJM3dCRTtFQ01FO0lETEQsZ0JBQUE7RUord0JEO0FBQ0Y7QUk1d0JDO0VBRUM7SUNERTtNREVELDBFQWhCYztJSjh4QmI7RUFDRjtFSTV3QkE7SUNMRTtNRE1ELG9EQUFBO0lKK3dCQztFQUNGO0FBQ0Y7QUk3d0JFO0VDVkU7SURXRCxnQkFBQTtFSmd4QkQ7QUFDRjs7QUt2eEJBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FMMHhCSjtBSXZ5QkU7RUNXRjtJRFZHLGVBQUE7RUoweUJEO0FBQ0Y7QUl2eUJDO0VBRUM7SUNJRjtNREhHLHdFQWJlO0lKc3pCZDtFQUNGO0VJdnlCQTtJQ0FGO01EQ0csa0RBQUE7SUoweUJDO0VBQ0Y7QUFDRjtBSXh5QkU7RUNMRjtJRE1HLFdBQUE7RUoyeUJEO0FBQ0Y7QUs5eUJJO0VBSko7SUFLUSxhQUFBO0VMaXpCTjtBQUNGOztBSy95QkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUxrekJKO0FJdjBCRTtFQ21CRjtJRGxCRyxnQkFBQTtFSjAwQkQ7QUFDRjtBSXYwQkM7RUFFQztJQ1lGO01EWEcseUVBYmU7SUpzMUJkO0VBQ0Y7RUl2MEJBO0lDUUY7TURQRyxtREFBQTtJSjAwQkM7RUFDRjtBQUNGO0FJeDBCRTtFQ0dGO0lERkcsWUFBQTtFSjIwQkQ7QUFDRjtBS3QwQkk7RUFKSjtJQUtRLGFBQUE7RUx5MEJOO0FBQ0Y7O0FJbDJCRTtFQytCRjtJRDlCRyxrQkFBQTtFSnMyQkQ7QUFDRjtBSW4yQkM7RUFFQztJQ3dCRjtNRHZCRywyRUFoQmM7SUpxM0JiO0VBQ0Y7RUluMkJBO0lDb0JGO01EbkJHLHVEQUFBO0lKczJCQztFQUNGO0FBQ0Y7QUlwMkJFO0VDZUY7SURkRyxtQkFBQTtFSnUyQkQ7QUFDRjtBS3YxQkk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBTHkxQlI7O0FLdDFCQTtFQUdJLGNBQUE7RUFDQSxrQkFBQTtBTHUxQko7QUlsNEJFO0VDdUNGO0lEdENHLGlCQUFBO0VKcTRCRDtBQUNGO0FJbDRCQztFQUVDO0lDZ0NGO01EL0JHLDZFQWhCYztJSm81QmI7RUFDRjtFSWw0QkE7SUM0QkY7TUQzQkcsdURBQUE7SUpxNEJDO0VBQ0Y7QUFDRjtBSW40QkU7RUN1QkY7SUR0QkcsZ0JBQUE7RUpzNEJEO0FBQ0Y7QUl4NUJFO0VDdUNGO0lEdENHLHdCQUFBO0VKMjVCRDtBQUNGO0FJeDVCQztFQUVDO0lDZ0NGO01EL0JHLCtFQWhCYztJSjA2QmI7RUFDRjtFSXg1QkE7SUM0QkY7TUQzQkcsMkRBQUE7SUoyNUJDO0VBQ0Y7QUFDRjtBSXo1QkU7RUN1QkY7SUR0QkcscUJBQUE7RUo0NUJEO0FBQ0Y7QUtsNEJJO0VBRUksZ0JBQUE7QUxtNEJSO0FJajdCRTtFQzRDRTtJRDNDRCx3QkFBQTtFSm83QkQ7QUFDRjtBSWo3QkM7RUFFQztJQ3FDRTtNRHBDRCxrRkFoQmM7SUptOEJiO0VBQ0Y7RUlqN0JBO0lDaUNFO01EaENELDZEQUFBO0lKbzdCQztFQUNGO0FBQ0Y7QUlsN0JFO0VDNEJFO0lEM0JELHdCQUFBO0VKcTdCRDtBQUNGO0FLdDVCSTtFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7QUx1NUJSO0FJMzhCRTtFQ2lERTtJRGhERCxtQkFBQTtFSjg4QkQ7QUFDRjtBSTM4QkM7RUFFQztJQzBDRTtNRHpDRCwwRUFoQmM7SUo2OUJiO0VBQ0Y7RUkzOEJBO0lDc0NFO01EckNELHNEQUFBO0lKODhCQztFQUNGO0FBQ0Y7QUk1OEJFO0VDaUNFO0lEaENELGlCQUFBO0VKKzhCRDtBQUNGOztBSzE2QkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUw2NkJKO0FJdCtCRTtFQ3VERjtJRHRERyxvQkFBQTtFSnkrQkQ7QUFDRjtBSXQrQkM7RUFFQztJQ2dERjtNRC9DRyw2RUFoQmM7SUp3L0JiO0VBQ0Y7RUl0K0JBO0lDNENGO01EM0NHLDBEQUFBO0lKeStCQztFQUNGO0FBQ0Y7QUl2K0JFO0VDdUNGO0lEdENHLHNCQUFBO0VKMCtCRDtBQUNGO0FJNS9CRTtFQ3VERjtJRHRERyxhQUFBO0VKKy9CRDtBQUNGO0FJNS9CQztFQUVDO0lDZ0RGO01EL0NHLG9FQWhCYztJSjhnQ2I7RUFDRjtFSTUvQkE7SUM0Q0Y7TUQzQ0csZ0RBQUE7SUorL0JDO0VBQ0Y7QUFDRjtBSTcvQkU7RUN1Q0Y7SUR0Q0csV0FBQTtFSmdnQ0Q7QUFDRjtBS3Q5Qkk7RUFMSjtJQU1RLHNCQUFBO0VMeTlCTjtBQUNGO0FJdmhDRTtFQ3VERjtJRHRERyxvQkFBQTtFSjBoQ0Q7QUFDRjtBSXZoQ0M7RUFFQztJQ2dERjtNRC9DRyw0RUFoQmM7SUp5aUNiO0VBQ0Y7RUl2aENBO0lDNENGO01EM0NHLHlEQUFBO0lKMGhDQztFQUNGO0FBQ0Y7QUl4aENFO0VDdUNGO0lEdENHLHFCQUFBO0VKMmhDRDtBQUNGO0FLNStCSTtFQUdJLGtCQUFBO0FMNCtCUjtBSWhqQ0U7RUNpRUU7SURoRUQsaUJBQUE7RUptakNEO0FBQ0Y7QUloakNDO0VBRUM7SUMwREU7TUR6REQsMEVBaEJjO0lKa2tDYjtFQUNGO0VJaGpDQTtJQ3NERTtNRHJERCxxREFBQTtJSm1qQ0M7RUFDRjtBQUNGO0FJampDRTtFQ2lERTtJRGhERCxjQUFBO0VKb2pDRDtBQUNGO0FJdGtDRTtFQ2lFRTtJRGhFRCxxQkFBQTtFSnlrQ0Q7QUFDRjtBSXRrQ0M7RUFFQztJQzBERTtNRHpERCw2RUFoQmM7SUp3bENiO0VBQ0Y7RUl0a0NBO0lDc0RFO01EckRELHlEQUFBO0lKeWtDQztFQUNGO0FBQ0Y7QUl2a0NFO0VDaURFO0lEaERELG9CQUFBO0VKMGtDRDtBQUNGO0FLcmhDSTtFQUVJLGdCQUFBO0FMc2hDUjtBSS9sQ0U7RUN1RUU7SUR0RUQsa0JBQUE7RUprbUNEO0FBQ0Y7QUkvbENDO0VBRUM7SUNnRUU7TUQvREQsMkVBaEJjO0lKaW5DYjtFQUNGO0VJL2xDQTtJQzRERTtNRDNERCx3REFBQTtJSmttQ0M7RUFDRjtBQUNGO0FJaG1DRTtFQ3VERTtJRHRERCxtQkFBQTtFSm1tQ0Q7QUFDRjtBSzFpQ1E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFFQSxnQ0FBQTtBTDJpQ1o7QUk3bkNFO0VDMkVNO0lEMUVMLFlBQUE7RUpnb0NEO0FBQ0Y7QUk3bkNDO0VBRUM7SUNvRU07TURuRUwsdUVBaEJjO0lKK29DYjtFQUNGO0VJN25DQTtJQ2dFTTtNRC9ETCxzREFBQTtJSmdvQ0M7RUFDRjtBQUNGO0FJOW5DRTtFQzJETTtJRDFETCxnQkFBQTtFSmlvQ0Q7QUFDRjtBSW5wQ0U7RUNzRkU7SURyRkQsaUJBQUE7RUpzcENEO0FBQ0Y7QUlucENDO0VBRUM7SUMrRUU7TUQ5RUQsNkVBaEJjO0lKcXFDYjtFQUNGO0VJbnBDQTtJQzJFRTtNRDFFRCx1REFBQTtJSnNwQ0M7RUFDRjtBQUNGO0FJcHBDRTtFQ3NFRTtJRHJFRCxnQkFBQTtFSnVwQ0Q7QUFDRjtBSy9rQ0k7RUFHSSxnQkFBQTtBTCtrQ1I7QUk1cUNFO0VDMEZFO0lEekZELG9CQUFBO0VKK3FDRDtBQUNGO0FJNXFDQztFQUVDO0lDbUZFO01EbEZELDhFQWhCYztJSjhyQ2I7RUFDRjtFSTVxQ0E7SUMrRUU7TUQ5RUQseURBQUE7SUorcUNDO0VBQ0Y7QUFDRjtBSTdxQ0U7RUMwRUU7SUR6RUQsb0JBQUE7RUpnckNEO0FBQ0Y7QUlsc0NFO0VDMEZFO0lEekZELHVCQUFBO0VKcXNDRDtBQUNGO0FJbHNDQztFQUVDO0lDbUZFO01EbEZELGlGQWhCYztJSm90Q2I7RUFDRjtFSWxzQ0E7SUMrRUU7TUQ5RUQsOERBQUE7SUpxc0NDO0VBQ0Y7QUFDRjtBSW5zQ0U7RUMwRUU7SUR6RUQsd0JBQUE7RUpzc0NEO0FBQ0Y7O0FLdG5DQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBTHluQ0o7QUkvdENFO0VDa0dGO0lEakdHLHVCQUFBO0VKa3VDRDtBQUNGO0FJL3RDQztFQUVDO0lDMkZGO01EMUZHLGdGQWhCYztJSml2Q2I7RUFDRjtFSS90Q0E7SUN1RkY7TUR0RkcsNERBQUE7SUprdUNDO0VBQ0Y7QUFDRjtBSWh1Q0U7RUNrRkY7SURqRkcsc0JBQUE7RUptdUNEO0FBQ0Y7QUs3b0NJO0VBTko7SUFPUSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VMZ3BDTjtBQUNGO0FLL29DSTtFQVhKO0lBWVEsZUFBQTtFTGtwQ047QUFDRjs7QUsvb0NBO0VBSUksZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7QUwrb0NKO0FJNXdDRTtFQ2tIRjtJRGpIRyxzQkFBQTtFSit3Q0Q7QUFDRjtBSTV3Q0M7RUFFQztJQzJHRjtNRDFHRywrRUFoQmM7SUo4eENiO0VBQ0Y7RUk1d0NBO0lDdUdGO01EdEdHLDJEQUFBO0lKK3dDQztFQUNGO0FBQ0Y7QUk3d0NFO0VDa0dGO0lEakdHLHFCQUFBO0VKZ3hDRDtBQUNGO0FJbHlDRTtFQ2tIRjtJRGpIRyx5QkFBQTtFSnF5Q0Q7QUFDRjtBSWx5Q0M7RUFFQztJQzJHRjtNRDFHRyxrRkFoQmM7SUpvekNiO0VBQ0Y7RUlseUNBO0lDdUdGO01EdEdHLDhEQUFBO0lKcXlDQztFQUNGO0FBQ0Y7QUlueUNFO0VDa0dGO0lEakdHLHdCQUFBO0VKc3lDRDtBQUNGO0FJeHpDRTtFQ2tIRjtJRGpIRyxnQkFBQTtFSjJ6Q0Q7QUFDRjtBSXh6Q0M7RUFFQztJQzJHRjtNRDFHRyxzRUFoQmM7SUowMENiO0VBQ0Y7RUl4ekNBO0lDdUdGO01EdEdHLGdEQUFBO0lKMnpDQztFQUNGO0FBQ0Y7QUl6ekNFO0VDa0dGO0lEakdHLFdBQUE7RUo0ekNEO0FBQ0Y7QUs3c0NRO0VBQ0kscUJBQUE7QUwrc0NaO0FLN3NDUTtFQUNJLHdCQUFBO0FMK3NDWjtBSzdzQ1E7RUFDSSxnQ0FBQTtBTCtzQ1o7QUszc0NJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBR0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FMMnNDUjtBSS8xQ0U7RUM0SUU7SUQzSUQsY0FBQTtFSmsyQ0Q7QUFDRjtBSS8xQ0M7RUFFQztJQ3FJRTtNRHBJRCxzRUFoQmM7SUppM0NiO0VBQ0Y7RUkvMUNBO0lDaUlFO01EaElELGtEQUFBO0lKazJDQztFQUNGO0FBQ0Y7QUloMkNFO0VDNEhFO0lEM0hELFlBQUE7RUptMkNEO0FBQ0Y7QUlyM0NFO0VDNElFO0lEM0lELGVBQUE7RUp3M0NEO0FBQ0Y7QUlyM0NDO0VBRUM7SUNxSUU7TURwSUQseUVBaEJjO0lKdTRDYjtFQUNGO0VJcjNDQTtJQ2lJRTtNRGhJRCxzREFBQTtJSnczQ0M7RUFDRjtBQUNGO0FJdDNDRTtFQzRIRTtJ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QUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FMeTJDUjtBSXBuREU7RUN3UUU7SUR2UUQsWUFBQTtFSnVuREQ7QUFDRjtBSXBuREM7RUFFQztJQ2lRRTtNRGhRRCxxRUFoQmM7SUpzb0RiO0VBQ0Y7RUlwbkRBO0lDNlBFO01ENVBELGtEQUFBO0lKdW5EQztFQUNGO0FBQ0Y7QUlybkRFO0VDd1BFO0lEdlBELGFBQUE7RUp3bkREO0FBQ0Y7QUszM0NJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBTDYzQ1I7QUt6M0NZO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FMMjNDaEI7QUlscERFO0VDMlJFO0lEMVJELGdCQUFBO0VKcXBERDtBQUNGO0FJbHBEQztFQUVDO0lDb1JFO01EblJELDRFQWhCYztJSm9xRGI7RUFDRjtFSWxwREE7SUNnUkU7TUQvUUQsd0RBQUE7SUpxcERDO0VBQ0Y7QUFDRjtBSW5wREU7RUMyUUU7SUQxUUQsaUJBQUE7RUpzcEREO0FBQ0Y7QUl4cURFO0VDMlJFO0lEMVJELGdCQUFBO0VKMnFERDtBQUNGO0FJeHFEQztFQUVDO0lDb1JFO01EblJELDJFQWhCYztJSjByRGI7RUFDRjtFSXhxREE7SUNnUkU7TUQvUUQsdURBQUE7SUoycURDO0VBQ0Y7QUFDRjtBSXpxREU7RUMyUUU7SUQxUUQsaUJBQUE7RUo0cUREO0FBQ0Y7QUs5NUNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUxnNkNSO0FJbnNERTtFQ2dTRTtJRC9SRCxvQkFBQTtFSnNzREQ7QUFDRjtBSW5zREM7RUFFQztJQ3lSRTtNRHhSRCw4RUFoQmM7SUpxdERiO0VBQ0Y7RUluc0RBO0lDcVJFO01EcFJELDJEQUFBO0lKc3NEQztFQUNGO0FBQ0Y7QUlwc0RFO0VDZ1JFO0lEL1FELHFCQUFBO0VKdXNERDtBQUNGO0FJenRERTtFQ2dTRTtJRC9SRCxxQkFBQTtFSjR0REQ7QUFDRjtBSXp0REM7RUFFQztJQ3lSRTtNRHhSRCw2RUFoQmM7SUoydURiO0VBQ0Y7RUl6dERBO0lDcVJFO01EcFJELDBEQUFBO0lKNHREQztFQUNGO0FBQ0Y7QUkxdERFO0VDZ1JFO0lEL1FELHNCQUFBO0VKNnRERDtBQUNGO0FLejhDUTtFQU5KO0lBT1EsZUFBQTtFTDQ4Q1Y7QUFDRjtBS3o4Q0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUwyOENSO0FJeHZERTtFQ2dURTtJRC9TRCxjQUFBO0VKMnZERDtBQUNGO0FJeHZEQztFQUVDO0lDeVNFO01EeFNELHdFQWhCYztJSjB3RGI7RUFDRjtFSXh2REE7SUNxU0U7TURwU0QsZ0RBQUE7SUoydkRDO0VBQ0Y7QUFDRjtBSXp2REU7RUNnU0U7SUQvUkQsY0FBQTtFSjR2REQ7QUFDRjtBSTl3REU7RUNnVEU7SUQvU0QsZ0JBQUE7RUppeEREO0FBQ0Y7QUk5d0RDO0VBRUM7SUN5U0U7TUR4U0QsMkVBaEJjO0lKZ3lEYjtFQUNGO0VJOXdEQTtJQ3FTRTtNRHBTRCx1REFBQTtJSml4REM7RUFDRjtBQUNGO0FJL3dERTtFQ2dTRTtJRC9SRCxpQkFBQTtFSmt4REQ7QUFDRjtBSy8rQ0k7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FMaS9DUjtBSy8rQ1E7RUFKSjtJQUtRLGVBQUE7SUFDQSxjQUFBO0VMay9DVjtBQUNGO0FLLytDSTtFQUNJLGtCQUFBO0FMaS9DUjtBS2gvQ1E7RUFGSjtJQUdRLGFBQUE7RUxtL0NWO0FBQ0Y7QUtoL0NJO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSw4RkFBQTtBTGsvQ1I7QUtoL0NRO0VBUEo7SUFRUSxXQUFBO0lBQ0EsVUFBQTtFTG0vQ1Y7QUFDRjtBS2wvQ1E7RUFYSjtJQVlRLFVBQUE7SUFDQSxTQUFBO0VMcS9DVjtBQUNGOztBS2wvQ0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUxxL0NKO0FJaDFERTtFQ3VWRjtJRHRWRyxtQkFBQTtFSm0xREQ7QUFDRjtBSWgxREM7RUFFQztJQ2dWRjtNRC9VRyw2RUFoQmM7SUprMkRiO0VBQ0Y7RUloMURBO0lDNFVGO01EM1VHLDhEQUFBO0lKbTFEQztFQUNGO0FBQ0Y7QUlqMURFO0VDdVVGO0lEdFVHLHdCQUFBO0VKbzFERDtBQUNGO0FJdDJERTtFQ3VWRjtJRHRWRyxxQkFBQTtFSnkyREQ7QUFDRjtBSXQyREM7RUFFQztJQ2dWRjtNRC9VRyw4RUFoQmM7SUp3M0RiO0VBQ0Y7RUl0MkRBO0lDNFVGO01EM1VHLHNEQUFBO0lKeTJEQztFQUNGO0FBQ0Y7QUl2MkRFO0VDdVVGO0lEdFVHLHFCQUFBO0VKMDJERDtBQUNGO0FJNTNERTtFQ3VWRjtJRHRWRyxzQkFBQTtFSiszREQ7QUFDRjtBSTUzREM7RUFFQztJQ2dWRjtNRC9VRywrRUFoQmM7SUo4NERiO0VBQ0Y7RUk1M0RBO0lDNFVGO01EM1VHLDREQUFBO0lKKzNEQztFQUNGO0FBQ0Y7QUk3M0RFO0VDdVVGO0lEdFVHLHVCQUFBO0VKZzRERDtBQUNGO0FLbmpESTtFQUNJLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtBTG9qRFI7QUl2NURFO0VDK1ZFO0lEOVZELGtCQUFBO0VKMDVERDtBQUNGO0FJdjVEQztFQUVDO0lDd1ZFO01EdlZELDJFQWhCYztJSnk2RGI7RUFDRjtFSXY1REE7SUNvVkU7TURuVkQsd0RBQUE7SUowNURDO0VBQ0Y7QUFDRjtBSXg1REU7RUMrVUU7SUQ5VUQsbUJBQUE7RUoyNUREO0FBQ0Y7QUk3NkRFO0VDK1ZFO0lEOVZELGlCQUFBO0VKZzdERDtBQUNGO0FJNzZEQztFQUVDO0lDd1ZFO01EdlZELDZFQWhCYztJSis3RGI7RUFDRjtFSTc2REE7SUNvVkU7TURuVkQsdURBQUE7SUpnN0RDO0VBQ0Y7QUFDRjtBSTk2REU7RUMrVUU7SUQ5VUQsZ0JBQUE7RUppN0REO0FBQ0Y7QUs5bERRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUwrbERaO0FJMzhERTtFQ3FXTTtJRHBXTCxlQUFBO0VKODhERDtBQUNGO0FJMzhEQztFQUVDO0lDOFZNO01EN1ZMLHlFQWhCYztJSjY5RGI7RUFDRjtFSTM4REE7SUMwVk07TUR6Vkwsc0RBQUE7SUo4OERDO0VBQ0Y7QUFDRjtBSTU4REU7RUNxVk07SURwVkwsZ0JBQUE7RUorOEREO0FBQ0Y7QUlqK0RFO0VDK1ZFO0lEOVZELG1CQUFBO0VKbytERDtBQUNGO0FJaitEQztFQUVDO0lDd1ZFO01EdlZELDZFQWhCYztJSm0vRGI7RUFDRjtFSWorREE7SUNvVkU7TURuVkQsOERBQUE7SUpvK0RDO0VBQ0Y7QUFDRjtBSWwrREU7RUMrVUU7SUQ5VUQsd0JBQUE7RUpxK0REO0FBQ0Y7QUt6b0RRO0VBR0k7SUFFSSxVQUFBO0VMd29EZDtBQUNGO0FJNS9ERTtFQ2lYVTtJRGhYVCxhQUFBO0VKKy9ERDtBQUNGO0FJNS9EQztFQUVDO0lDMFdVO01EeldULHNFQWhCYztJSjhnRWI7RUFDRjtFSTUvREE7SUNzV1U7TURyV1QsbURBQUE7SUorL0RDO0VBQ0Y7QUFDRjtBSTcvREU7RUNpV1U7SURoV1QsY0FBQTtFSmdnRUQ7QUFDRjs7QUt2cERBO0VBQ1EsZ0NBQUE7RUFDQSxhQUFBO0FMMHBEUjtBS3pwRFE7RUFIUjtJQUlZLGFBQUE7RUw0cERWO0FBQ0Y7QUszcERFO0VBQ1UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBTDZwRFo7QUlsaUVFO0VDaVlBO0lEaFlDLHNCQUFBO0VKcWlFRDtBQUNGO0FJbGlFQztFQUVDO0lDMFhBO01EelhDLGdGQWhCYztJSm9qRWI7RUFDRjtFSWxpRUE7SUNzWEE7TURyWEMsMERBQUE7SUpxaUVDO0VBQ0Y7QUFDRjtBSW5pRUU7RUNpWEE7SURoWEMsc0JBQUE7RUpzaUVEO0FBQ0Y7QUl4akVFO0VDaVlBO0lEaFlDLDBCQUFBO0VKMmpFRDtBQUNGO0FJeGpFQztFQUVDO0lDMFhBO01EelhDLG9GQWhCYztJSjBrRWI7RUFDRjtFSXhqRUE7SUNzWEE7TURyWEMsOERBQUE7SUoyakVDO0VBQ0Y7QUFDRjtBSXpqRUU7RUNpWEE7SURoWEMsd0JBQUE7RUo0akVEO0FBQ0Y7QUt0c0RZO0VBQ0EsV0FBQTtFQUdBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FMc3NEWjtBSXRsRUU7RUN3WVU7SUR2WVQsaUJBQUE7RUp5bEVEO0FBQ0Y7QUl0bEVDO0VBRUM7SUNpWVU7TURoWVQsMEVBaEJjO0lKd21FYjtFQUNGO0VJdGxFQTtJQzZYVTtNRDVYVCxxREFBQTtJSnlsRUM7RUFDRjtBQUNGO0FJdmxFRTtFQ3dYVTtJRHZYVCxjQUFBO0VKMGxFRDtBQUNGO0FJNW1FRTtFQ3dZVTtJRHZZVCxrQkFBQTtFSittRUQ7QUFDRjtBSTVtRUM7RUFFQztJQ2lZVTtNRGhZVCwyRUFoQmM7SUo4bkViO0VBQ0Y7RUk1bUVBO0lDNlhVO01ENVhULHNEQUFBO0lKK21FQztFQUNGO0FBQ0Y7QUk3bUVFO0VDd1hVO0lEdlhULGVBQUE7RUpnbkVEO0FBQ0Y7QUtqdkRZO0VBVEE7SUFVSSxhQUFBO0VMb3ZEZDtBQUNGO0FLaHZERTtFQUNVLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBTGt2RFo7QUk3b0VFO0VDdVpBO0lEdFpDLG1CQUFBO0VKZ3BFRDtBQUNGO0FJN29FQztFQUVDO0lDZ1pBO01EL1lDLDRFQWhCYztJSitwRWI7RUFDRjtFSTdvRUE7SUM0WUE7TUQzWUMsNERBQUE7SUpncEVDO0VBQ0Y7QUFDRjtBSTlvRUU7RUN1WUE7SUR0WUMsdUJBQUE7RUppcEVEO0FBQ0Y7QUlucUVFO0VDdVpBO0lEdFpDLHFCQUFBO0VKc3FFRDtBQUNGO0FJbnFFQztFQUVDO0lDZ1pBO01EL1lDLDhFQWhCYztJSnFyRWI7RUFDRjtFSW5xRUE7SUM0WUE7TUQzWUMsc0RBQUE7SUpzcUVDO0VBQ0Y7QUFDRjtBSXBxRUU7RUN1WUE7SUR0WUMscUJBQUE7RUp1cUVEO0FBQ0Y7QUt2eERZO0VBWFY7SUFZYyxZQUFBO0VMMHhEZDtBQUNGO0FLdnhERTtFQUNVLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUx5eERaO0FJbnNFRTtFQ3VhQTtJRHRhQyxvQkFBQTtFSnNzRUQ7QUFDRjtBSW5zRUM7RUFFQztJQ2dhQTtNRC9aQyw0RUFoQmM7SUpxdEViO0VBQ0Y7RUluc0VBO0lDNFpBO01EM1pDLHVEQUFBO0lKc3NFQztFQUNGO0FBQ0Y7QUlwc0VFO0VDdVpBO0lEdFpDLG9CQUFBO0VKdXNFRDtBQUNGO0FJenRFRTtFQ3VhQTtJRHRhQyxxQkFBQTtFSjR0RUQ7QUFDRjtBSXp0RUM7RUFFQztJQ2dhQTtNRC9aQyx1RkFoQmM7SUoydUViO0VBQ0Y7RUl6dEVBO0lDNFpBO01EM1pDLHlFQUFBO0lKNHRFQztFQUNGO0FBQ0Y7QUkxdEVFO0VDdVpBO0lEdFpDLDZCQUFBO0VKNnRFRDtBQUNGO0FLbDBEWTtFQU5WO0lBT2MsbUJBQUE7RUxxMERkO0FBQ0Y7QUtsMERFO0VBQ1Usa0JBQUE7QUxvMERaO0FLajBEZ0I7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7QUxtMERwQjtBS2wwRG9CO0VBQ0ksVUFBQTtFQUNBLDBCQUFBO0FMbzBEeEI7QUtqMERnQjtFQUNJLFVBQUE7QUxtMERwQjtBSzl6REU7RUFDVSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnREFBQTtFQWlCQSx3QkFBQTtBTGd6RFo7QUtoMERZO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0RBQUE7QUxrMERoQjtBS2owRGdCO0VBWEo7SUFZUSxhQUFBO0VMbzBEbEI7QUFDRjtBSzl6REU7RUFDVSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUxnMERaOztBSzN6REE7RUFDSSxhQUFBO0FMOHpESjtBSzd6REk7RUFGSjtJQUdRLHNCQUFBO0lBQ0EsdUJBQUE7RUxnMEROO0FBQ0Y7O0FJM3lFRTtFQzhlRjtJRDdlRyxpQkFBQTtFSit5RUQ7QUFDRjtBSTV5RUM7RUFFQztJQ3VlRjtNRHRlRyw2RUFoQmM7SUo4ekViO0VBQ0Y7RUk1eUVBO0lDbWVGO01EbGVHLHNEQUFBO0lKK3lFQztFQUNGO0FBQ0Y7QUk3eUVFO0VDOGRGO0lEN2RHLGdCQUFBO0VKZ3pFRDtBQUNGO0FJbDBFRTtFQzhlRjtJRDdlRyxxQkFBQTtFSnEwRUQ7QUFDRjtBSWwwRUM7RUFFQztJQ3VlRjtNRHRlRyw4RUFoQmM7SUpvMUViO0VBQ0Y7RUlsMEVBO0lDbWVGO01EbGVHLHNEQUFBO0lKcTBFQztFQUNGO0FBQ0Y7QUluMEVFO0VDOGRGO0lEN2RHLHFCQUFBO0VKczBFRDtBQUNGO0FLcDJERTtFQUNVLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBTHMyRFo7QUk5MUVFO0VDb2ZBO0lEbmZDLHdCQUFBO0VKaTJFRDtBQUNGO0FJOTFFQztFQUVDO0lDNmVBO01ENWVDLGtGQWhCYztJSmczRWI7RUFDRjtFSTkxRUE7SUN5ZUE7TUR4ZUMsNERBQUE7SUppMkVDO0VBQ0Y7QUFDRjtBSS8xRUU7RUNvZUE7SURuZUMsd0JBQUE7RUprMkVEO0FBQ0Y7O0FJcDNFRTtFQ2tnQkY7SURqZ0JHLGtCQUFBO0VKdzNFRDtBQUNGO0FJcjNFQztFQUVDO0lDMmZGO01EMWZHLHVFQWhCYztJSnU0RWI7RUFDRjtFSXIzRUE7SUN1ZkY7TUR0Zkcsa0RBQUE7SUp3M0VDO0VBQ0Y7QUFDRjtBSXQzRUU7RUNrZkY7SURqZkcsaUJBQUE7RUp5M0VEO0FBQ0Y7QUkzNEVFO0VDa2dCRjtJRGpnQkcsdUJBQUE7RUo4NEVEO0FBQ0Y7QUkzNEVDO0VBRUM7SUMyZkY7TUQxZkcsZ0ZBaEJjO0lKNjVFYjtFQUNGO0VJMzRFQTtJQ3VmRjtNRHRmRyw2REFBQTtJSjg0RUM7RUFDRjtBQUNGO0FJNTRFRTtFQ2tmRjtJRGpmRyx3QkFBQTtFSis0RUQ7QUFDRjtBS3o1REk7RUFDSSxhQUFBO0FMMjVEUjs7QUt0NURJO0VBQ0ksdUJBQUE7RUFDQSw0QkFBQTtBTHk1RFI7QUt4NURRO0VBQ0ksb0JBQUE7QUwwNURaO0FLdDVESTtFQUNJLG1CQUFBO0VBR0EsWUFBQTtFQUNSLGFBQUE7QUxzNURBO0FJajdFRTtFQ3NoQkU7SURyaEJELGdCQUFBO0VKbzdFRDtBQUNGO0FJajdFQztFQUVDO0lDK2dCRTtNRDlnQkQsNEVBaEJjO0lKbThFYjtFQUNGO0VJajdFQTtJQzJnQkU7TUQxZ0JELHdEQUFBO0lKbzdFQztFQUNGO0FBQ0Y7QUlsN0VFO0VDc2dCRTtJRHJnQkQsaUJBQUE7RUpxN0VEO0FBQ0Y7QUl2OEVFO0VDc2hCRTtJRHJoQkQsaUJBQUE7RUowOEVEO0FBQ0Y7QUl2OEVDO0VBRUM7SUMrZ0JFO01EOWdCRCw0RUFoQmM7SUp5OUViO0VBQ0Y7RUl2OEVBO0lDMmdCRTtNRDFnQkQsdURBQUE7SUowOEVDO0VBQ0Y7QUFDRjtBSXg4RUU7RUNzZ0JFO0lEcmdCRCxpQkFBQTtFSjI4RUQ7QUFDRjtBSy83REk7RUFDSSxZQUFBO0FMaThEUjtBSzk3REk7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FMZzhEUjtBSXArRUU7RUNraUJFO0lEamlCRCxjQUFBO0VKdStFRDtBQUNGO0FJcCtFQztFQUVDO0lDMmhCRTtNRDFoQkQsdUVBaEJjO0lKcy9FYjtFQUNGO0VJcCtFQTtJQ3VoQkU7TUR0aEJELG9EQUFBO0lKdStFQztFQUNGO0FBQ0Y7QUlyK0VFO0VDa2hCRTtJRGpoQkQsZUFBQTtFSncrRUQ7QUFDRjtBSTEvRUU7RUNraUJFO0lEamlCRCxpQkFBQTtFSjYvRUQ7QUFDRjtBSTEvRUM7RUFFQztJQzJoQkU7TUQxaEJELDRFQWhCYztJSjRnRmI7RUFDRjtFSTEvRUE7SUN1aEJFO01EdGhCRCx1REFBQTtJSjYvRUM7RUFDRjtBQUNGO0FJMy9FRTtFQ2toQkU7SURqaEJELGlCQUFBO0VKOC9FRDtBQUNGO0FJaGhGRTtFQzRpQkY7SUQzaUJHLHNCQUFBO0VKbWhGRDtBQUNGO0FJaGhGQztFQUVDO0lDcWlCRjtNRHBpQkcsNkVBaEJjO0lKa2lGYjtFQUNGO0VJaGhGQTtJQ2lpQkY7TURoaUJHLHlEQUFBO0lKbWhGQztFQUNGO0FBQ0Y7QUlqaEZFO0VDNGhCRjtJRDNoQkcsbUJBQUE7RUpvaEZEO0FBQ0Y7QUt4L0RJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FMMC9EUjtBSTVpRkU7RUM4aUJFO0lEN2lCRCx3QkFBQTtFSitpRkQ7QUFDRjtBSTVpRkM7RUFFQztJQ3VpQkU7TUR0aUJELGdGQWhCYztJSjhqRmI7RUFDRjtFSTVpRkE7SUNtaUJFO01EbGlCRCw0REFBQTtJSitpRkM7RUFDRjtBQUNGO0FJN2lGRTtFQzhoQkU7SUQ3aEJELHNCQUFBO0VKZ2pGRDtBQUNGO0FLNWdFSTtFQUlJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FMMmdFUjtBSXZrRkU7RUNzakJFO0lEcmpCRCxxQkFBQTtFSjBrRkQ7QUFDRjtBSXZrRkM7RUFFQztJQytpQkU7TUQ5aUJELCtFQWhCYztJSnlsRmI7RUFDRjtFSXZrRkE7SUMyaUJFO01EMWlCRCw0REFBQTtJSjBrRkM7RUFDRjtBQUNGO0FJeGtGRTtFQ3NpQkU7SURyaUJELHNCQUFBO0VKMmtGRDtBQUNGO0FJN2xGRTtFQ3NqQkU7SURyakJELHVCQUFBO0VKZ21GRDtBQUNGO0FJN2xGQztFQUVDO0lDK2lCRTtNRDlpQkQsaUZBaEJjO0lKK21GYjtFQUNGO0VJN2xGQTtJQzJpQkU7TUQxaUJELDhEQUFBO0lKZ21GQztFQUNGO0FBQ0Y7QUk5bEZFO0VDc2lCRTtJRHJpQkQsd0JBQUE7RUppbUZEO0FBQ0Y7QUlubkZFO0VDc2pCRTtJRHJqQkQsZ0JBQUE7RUpzbkZEO0FBQ0Y7QUlubkZDO0VBRUM7SUMraUJFO01EOWlCRCwwRUFoQmM7SUpxb0ZiO0VBQ0Y7RUlubkZBO0lDMmlCRTtNRDFpQkQsbURBQUE7SUpzbkZDO0VBQ0Y7QUFDRjtBSXBuRkU7RUNzaUJFO0lEcmlCRCxjQUFBO0VKdW5GRDtBQUNGO0FJem9GRTtFQytqQkU7SUQ5akJELHFCQUFBO0VKNG9GRDtBQUNGO0FJem9GQztFQUVDO0lDd2pCRTtNRHZqQkQsK0VBaEJjO0lKMnBGYjtFQUNGO0VJem9GQTtJQ29qQkU7TURuakJELDREQUFBO0lKNG9GQztFQUNGO0FBQ0Y7QUkxb0ZFO0VDK2lCRTtJRDlpQkQsc0JBQUE7RUo2b0ZEO0FBQ0Y7O0FNL3VGQTtFQUNJLGtCQUFBO0FOa3ZGSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCJzYXNzOm1hdGhcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0LzRltC60YHQuNC90ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5AaW1wb3J0IFxcXCJiYXNlL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRiNGA0LjRhNGC0ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyZkaXNwbGF5PXN3YXAgLSDQtNC+0LTQsNGC0Lgg0L/RgNC4INC/0ZbQtNC60LvRjtGH0LXQvdC90ZYg0YfQtdGA0LXQtyDQv9C70LDQs9GW0L1cXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C40YLQuCwg0Y/QutGJ0L4g0ZQg0LvQvtC60LDQu9GM0L3RliDRhNCw0LnQu9C4INGI0YDQuNGE0YLRltCyXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0ZbQutC+0L3QutC+0LLQuNGFINGI0YDQuNGE0YLRltCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LjRgtC4LCDRj9C60YnQviDRlCDRhNCw0LnQuyDRltC60L7QvdC60L7QstC+0LPQviDRiNGA0LjRhNGC0YNcXHJcXG4vL0BpbXBvcnQgXFxcImZvbnRzL2ljb25zXFxcIjtcXHJcXG5cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vINCd0LDQu9Cw0YjRgtGD0LLQsNC90L3RjyDRiNCw0LHQu9C+0L3RgyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy8g0JfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvCDRiNGA0LjRhNGCID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiRmb250RmFtaWx5OiBcXFwiSW50ZXJcXFwiO1xcclxcbiRmb250U2l6ZTogdG9SZW0oMTUpOyAvLyDQtNC1IDE0KHB4KSAtINGA0L7Qt9C80ZbRgCDRiNGA0LjRhNGC0YMg0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvCDQtyDQvNCw0LrQtdGC0YNcXHJcXG5cXHJcXG4vLyDQntGB0L3QvtCy0L3RliDQutC+0LvRjNC+0YDQuFxcclxcbiRtYWluQ29sb3I6ICMwRTBFMEU7IC8vINCa0L7Qu9GW0YAg0YjRgNC40YTRgtGDINC30LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0LxcXHJcXG5cXHJcXG4vLyDQn9Cw0LvRltGC0YDQsCDQutC+0LvRjNC+0YDRltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9jb2xvcnMtcGFsZXR0ZVxcXCI7XFxyXFxuXFxyXFxuLy8g0J3QsNC70LDRiNGC0YPQstCw0L3QvdGPINCw0LTQsNC/0YLQuNCy0L3QvtGXINGB0ZbRgtC60LggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyDQnNGW0L3RltC80LDQu9GM0L3QsCDRiNC40YDQuNC90LAg0YHRgtC+0YDRltC90LrQuFxcclxcbiRtaW5XaWR0aDogMzIwO1xcclxcbi8vINCo0LjRgNC40L3QsCDQv9C+0LvQvtGC0L3QsCAo0LzQsNC60LXRgtGDKVxcclxcbiRtYXhXaWR0aDogMTM2NjtcXHJcXG4vLyDQqNC40YDQuNC90LAg0L7QsdC80LXQttGD0Y7Rh9C+0LPQviDQutC+0L3RgtC10LnQvdC10YDQsCAoMCA9INC90LXQvNCw0ZQg0L7QsdC80LXQttC10L3QvdGPKVxcclxcbiRtYXhXaWR0aENvbnRhaW5lcjogMTE3MDtcXHJcXG4vLyDQl9Cw0LPQsNC70YzQvdC40Lkg0LLRltC00YHRgtGD0L8g0YMg0LrQvtC90YLQtdC50L3QtdGA0LBcXHJcXG4vLyAoMzAgPSDQv9C+IDE1cHgg0LvRltCy0L7RgNGD0Ycg0ZYg0L/RgNCw0LLQvtGA0YPRhywgMCA9INC90LXQvNCw0ZQg0LLRltC00YHRgtGD0L/RgylcXHJcXG4kY29udGFpbmVyUGFkZGluZzogMzA7XFxyXFxuXFxyXFxuLy8g0KjQuNGA0LjQvdCwINGB0L/RgNCw0YbRjNC+0LLRg9Cy0LDQvdC90Y8g0L/QtdGA0YjQvtCz0L4g0LHRgNC10LnQutC/0L7RltC90YLRg1xcclxcbiRjb250YWluZXJXaWR0aDogJG1heFdpZHRoQ29udGFpbmVyICsgJGNvbnRhaW5lclBhZGRpbmc7XFxyXFxuXFxyXFxuLy8g0JHRgNC10LnQui3Qv9C+0ZfQvdGC0LhcXHJcXG4kcGM6IGVtKCRjb250YWluZXJXaWR0aCk7IC8vINCf0JosINC90L7Rg9GC0LHRg9C60LgsINC00LXRj9C60ZYg0L/Qu9Cw0L3RiNC10YLQuCDRgyDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3QvtC80YMg0L/QvtC70L7QttC10L3QvdGWXFxyXFxuJHRhYmxldDogZW0oOTkxLjk4KTsgLy8g0J/Qu9Cw0L3RiNC10YLQuCwg0LTQtdGP0LrRliDRgtC10LvQtdGE0L7QvdC4INCyINCz0L7RgNC40LfQvtC90YLQsNC70YzQvdC+0LzRgyDQv9C+0LvQvtC20LXQvdC90ZZcXHJcXG4kbW9iaWxlOiBlbSg3NjcuOTgpOyAvLyDQotC10LvQtdGE0L7QvdC4IExcXHJcXG4kbW9iaWxlU21hbGw6IGVtKDQ3OS45OCk7IC8vINCi0LXQu9C10YTQvtC90LggU1xcclxcblxcclxcbi8vINCi0LjQvyDQsNC00LDQv9GC0LjQstCwOlxcclxcbi8vIDEgPSDRh9GD0LnQvdGW0YHRgtGMICjRgyDQutC+0L3RgtC10LnQvdC10YDQsCDQvdC10LzQsNGUINCx0YDQtdC50LrQv9C+0ZbQvdGC0ZbQsiksXFxyXFxuLy8gMiA9INC/0L4g0LHRgNC10LnQui3Qv9C+0ZfQvdGCICjQutC+0L3RgtC10LnQvdC10YAg0LfQvNGW0L3RjtGUINGB0LLQvtGOINGI0LjRgNC40L3RgyDQv9C+INCx0YDQtdC50Lot0L/QvtGX0L3RgilcXHJcXG4kcmVzcG9uc2l2ZVR5cGU6IDE7XFxyXFxuXFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vINCe0LHQvdGD0LvQtdC90L3RjyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuQGltcG9ydCBcXFwiYmFzZS9udWxsXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINGC0LXQs9CwIEJPRFkgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5ib2R5IHtcXHJcXG5cXHQvLyDQodC60YDQvtC70Lsg0LfQsNCx0LvQvtC60L7QstCw0L3QvlxcclxcblxcdC5sb2NrICYge1xcclxcblxcdFxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0XFx0dG91Y2gtYWN0aW9uOiBub25lO1xcclxcblxcdFxcdG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7XFxyXFxuXFx0fVxcclxcblxcdC8vINCh0LDQudGCINC30LDQstCw0L3RgtCw0LbQtdC90LjQuVxcclxcblxcdC5sb2FkZWQgJiB7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQntCx0L7Qu9C+0L3QutCwIHdyYXBwZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4ud3JhcHBlciB7XFxyXFxuXFx0bWluLWhlaWdodDogMTAwJTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRAc3VwcG9ydHMgKG92ZXJmbG93OiBjbGlwKSB7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGNsaXA7XFxyXFxuXFx0fVxcclxcblxcdC8vINCf0YDQuNGC0LjRgdC60LDRlNC80L4gZm9vdGVyXFxyXFxuXFx0PiBtYWluIHtcXHJcXG5cXHRcXHRmbGV4OiAxIDEgYXV0bztcXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0KTRltC60YEg0LTQu9GPINGB0LvQsNC50LTQtdGA0ZbQslxcclxcblxcdD4gKiB7XFxyXFxuXFx0XFx0bWluLXdpZHRoOiAwO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0J7QsdC80LXQttGD0Y7Rh9C40Lkg0LrQvtC90YLQtdC50L3QtdGAID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vKlxcclxcbihpKSDQodGC0LjQu9GWINCx0YPQtNGD0YLRjCDQt9Cw0YHRgtC+0YHQvtCy0YPQstCw0YLQuNGB0Ywg0LTQvlxcclxcbtCy0YHRltGFINC60LvQsNGB0ZbQsiwg0YnQviDQvNGW0YHRgtGP0YLRjCAqX19jb250YWluZXJcXHJcXG7QndCw0L/RgNC40LrQu9Cw0LQgaGVhZGVyX19jb250YWluZXIsIG1haW5fX2NvbnRhaW5lciDRliDRgi7Qvy5cXHJcXG7QodC90ZbQv9C/0LXRgiAoSFRNTCk6IGNudFxcclxcbiovXFxyXFxuQGlmICgkcmVzcG9uc2l2ZVR5cGU9PTEpIHtcXHJcXG5cXHQvLyDQp9GD0LnQvdCwXFxyXFxuXFx0W2NsYXNzKj1cXFwiX19jb250YWluZXJcXFwiXSB7XFxyXFxuXFx0XFx0QGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogdG9SZW0oJGNvbnRhaW5lcldpZHRoKTtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QGlmICgkY29udGFpbmVyUGFkZGluZz4wKSB7XFxyXFxuXFx0XFx0XFx0QGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDAgdG9SZW0obWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpKTtcXHJcXG5cXHRcXHRcXHR9IEBlbHNlIHtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCBtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMiksIDE1KTtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXJpZ2h0XFxcIiwgbWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpLCAxNSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufSBAZWxzZSB7XFxyXFxuXFx0Ly8g0JHRgNC10LnQui3Qv9C+0ZfQvdGC0LDQvNC4XFxyXFxuXFx0W2NsYXNzKj1cXFwiX19jb250YWluZXJcXFwiXSB7XFxyXFxuXFx0XFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0XFx0QGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogdG9SZW0oJGNvbnRhaW5lcldpZHRoKTtcXHJcXG5cXHRcXHR9IEBlbHNlIHtcXHJcXG5cXHRcXHRcXHRAaWYgKCRjb250YWluZXJQYWRkaW5nPjApIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwIHRvUmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJHBjKSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiB0b1JlbSg5NzApO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldCkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogdG9SZW0oNzUwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IG5vbmU7XFxyXFxuXFx0XFx0XFx0QGlmICgkY29udGFpbmVyUGFkZGluZz4wIGFuZCAkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDAgdG9SZW0obWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDQsdCw0LfQvtCy0LjRhSDRgdGC0LjQu9GW0LIsINGI0LDQsdC70L7QvdGW0LIgKNC30LDQs9C+0YLRltCy0LXQu9GMKSDRgtCwINC00L7Qv9C+0LzRltC20L3QuNGFINC60LvQsNGB0ZbQslxcclxcbi8vINCU0LvRjyDQv9GW0LTQutC70Y7Rh9C10L3QvdGPL9Cy0LjQvNC60L3QtdC90L3RjyDQutC+0L3QutGA0LXRgtC90LjRhSDRgdGC0LjQu9GW0LIg0LTQuNCy0LjRgdGMIGJhc2Uuc2Nzc1xcclxcbkBpbXBvcnQgXFxcImJhc2VcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC30LDQs9Cw0LvRjNC90LjRhSDQtdC70LXQvNC10L3RgtGW0LIg0L/RgNC+0LXQutGC0YNcXHJcXG5AaW1wb3J0IFxcXCJjb21tb25cXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC+0LrRgNC10LzQuNGFINCx0LvQvtC60ZbQslxcclxcbkBpbXBvcnQgXFxcImhlYWRlclxcXCI7XFxyXFxuQGltcG9ydCBcXFwiZm9vdGVyXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQvtC60YDQtdC80LjRhSDRgdGC0L7RgNGW0L3QvtC6XFxyXFxuQGltcG9ydCBcXFwiaG9tZVxcXCI7XFxyXFxuXFxyXFxuLy8g0JfQvNGW0L3QvdGWXFxyXFxuXFxyXFxuQGltcG9ydCBcXFwidXRpbHMvdmFyc1xcXCI7XFxyXFxuXCIsXCIqIHtcXHJcXG5cXHRwYWRkaW5nOiAwcHg7XFxyXFxuXFx0bWFyZ2luOiAwcHg7XFxyXFxuXFx0Ym9yZGVyOiAwcHg7XFxyXFxufVxcclxcbiosXFxyXFxuKjpiZWZvcmUsXFxyXFxuKjphZnRlciB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuOmZvY3VzLFxcclxcbjphY3RpdmUge1xcclxcblxcdC8vIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbmE6Zm9jdXMsXFxyXFxuYTphY3RpdmUge1xcclxcblxcdC8vIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdG1pbi13aWR0aDogJG1pbldpZHRoICsgcHg7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGNvbG9yOiAkbWFpbkNvbG9yO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcblxcdGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcXHJcXG5cXHRmb250LXNpemU6ICRmb250U2l6ZTtcXHJcXG5cXHQvL3RleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxyXFxuXFx0LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LW1vei10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG5cXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbn1cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEge1xcclxcblxcdGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxyXFxufVxcclxcbmJ1dHRvbiB7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGNvbG9yOiBpbmhlcml0O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5hIHtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbnVsIGxpIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5pbWcge1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxufVxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG5cXHRmb250LXdlaWdodDogaW5oZXJpdDtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxufVxcclxcblwiLFwiLy8g0JfQsNCz0LDQu9GM0L3QuNC5INGE0LDQudC7INC10LvQtdC80LXQvdGC0ZbQsiDRhNC+0YDQvFxcclxcbi8vINCU0LvRjyDQv9GW0LTQutC70Y7Rh9C10L3QvdGPL9Cy0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LXQu9C10LzQtdC90YLQsCDRhNC+0YDQvNC4INC00LjQstC40YHRjCBiYXNlL2Zvcm1zL2Zvcm1zLnNjc3NcXHJcXG5AaW1wb3J0IFxcXCJiYXNlL2Zvcm1zL2Zvcm1zXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC/0L7Qv9Cw0L/RltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9wb3B1cFxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDRgdC/0L7QudC70LXRgNGW0LJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3Nwb2xsZXJzXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINGC0LDQsdGW0LJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3RhYnNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LzQsNC/XFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9tYXBzXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINCx0LvQvtC60YMgXFxcItC/0L7QutCw0LfQsNGC0Lgg0YnQtVxcXCJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3Nob3dtb3JlXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQu9C40L/QutC+0LPQviDQsdC70L7QutGDXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zdGlja3lcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC/0L7QstC90L7QtdC60YDQsNC90L3QvtCz0L4g0LHQu9C+0LrRg1xcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvZnVsbHNjcmVlblxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0L/QvtC10LrRgNCw0L3QvtGXINC/0YDQvtC60YDRg9GC0LrQuFxcclxcbi8vIFN0eWxlcyBmb3IgZnVsbHBhZ2Ugc2Nyb2xsXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9mdWxscGFnZVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8gcmlwcGxlINC10YTQtdC60YLRg1xcclxcbi8vIFN0eWxlcyBmb3IgcmlwcGxlIGVmZmVjdFxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvcmlwcGxlXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQutCw0YHRgtC+0LzQvdC+0LPQviDQutGD0YDRgdC+0YDRg1xcclxcbi8vIFN0eWxlcyBmb3IgY3VzdG9tIGN1cnNvclxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvY3Vyc29yXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDRh9GD0LnQvdC40YUg0LrQsNGA0YLQuNC90L7QuiAoSUJHKVxcclxcbi8vINCh0L3RltC/0L/QtdGCIChIVE1MKTogaWJnIChkaXYg0Lcg0LrQsNGA0YLQuNC90LrQvtGOINGC0LAg0LrQu9Cw0YHQsNC80LgpXFxyXFxuLy8g0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBpYmdhIChhINC3INC60LDRgNGC0LjQvdC60L7RjiDRgtCwINC60LvQsNGB0LDQvNC4KVxcclxcbltjbGFzcyo9XFxcIi1pYmdcXFwiXSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGltZyB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG5cXHR9XFxyXFxufVxcclxcbltjbGFzcyo9XFxcIi1pYmctLWNvbnRhaW5cXFwiXSB7XFxyXFxuXFx0aW1nIHtcXHJcXG5cXHRcXHRvYmplY3QtZml0OiBjb250YWluO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0KjQsNCx0LvQvtC90LggKNC30LDQs9C+0YLRltCy0LvRlilcXHJcXG4vLyBAZXh0ZW5kICXRltC8J9GPINGI0LDQsdC70L7QvdGDO1xcclxcbi8vINCh0L3RltC/0L/QtdGCIChTQ1NTKTogZXhcXHJcXG5cXHJcXG4vLyDQm9GW0YfQuNC70YzQvdC40Log0LTQu9GPINGB0L/QuNGB0LrRg1xcclxcbiVsaXN0Q291bnRlciB7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcblxcdGNvdW50ZXItcmVzZXQ6IGl0ZW07XFxyXFxuXFx0bGkge1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHQmOmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0Y291bnRlci1pbmNyZW1lbnQ6IGl0ZW07XFxyXFxuXFx0XFx0XFx0Y29udGVudDogY291bnRlcihpdGVtKTtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0JDQtNCw0L/RgtC40LLQvdC1INCy0ZbQtNC10L5cXHJcXG4lcmVzcG9uc2l2ZVZpZGVvIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRoZWlnaHQ6IDA7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDU2LjI1JTtcXHJcXG5cXHR2aWRlbyxcXHJcXG5cXHRpZnJhbWUsXFxyXFxuXFx0b2JqZWN0LFxcclxcblxcdGVtYmVkIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0JLRltC00LXQviDRj9C6INGE0L7QvVxcclxcbiV2aWRlb0JhY2tncm91bmQge1xcclxcblxcdHZpZGVvLFxcclxcblxcdGlmcmFtZSxcXHJcXG5cXHRvYmplY3QsXFxyXFxuXFx0ZW1iZWQge1xcclxcblxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRcXHR0b3A6IDUwJTtcXHJcXG5cXHRcXHRsZWZ0OiA1MCU7XFxyXFxuXFx0XFx0bWluLXdpZHRoOiAxMDAlO1xcclxcblxcdFxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0d2lkdGg6IGF1dG87XFxyXFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdFxcdHotaW5kZXg6IC0xMDA7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCh0ZbRgNC40Lkg0YTRltC70YzRgtGAXFxyXFxuJWdyYXlmaWx0ZXIge1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuXFx0ZmlsdGVyOiBncmF5c2NhbGUoMSk7XFxyXFxuXFx0QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuXFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0ZmlsdGVyOiBncmF5c2NhbGUoMCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0KHQutCw0YHRg9Cy0LDRgtC4INCy0LjQtNGW0LvQtdC90L3Rj1xcclxcbiVub3NlbGVjdCB7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi8vINCU0LfQtdGA0LrQsNC70YzQvdC1INCy0ZbQtNC+0LHRgNCw0LbQtdC90L3Rj1xcclxcbiVtaXJyb3Ige1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcclxcbn1cXHJcXG4vLyDQn9C70LDQstC90LjQuSDRgdC60YDQvtC70LtcXHJcXG4lc21vb3Roc2Nyb2xsIHtcXHJcXG5cXHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxufVxcclxcbi8vINCh0YXQvtCy0LDRgtC4INGB0LrRgNC+0LvQu1xcclxcbiVoaWRlc2Nyb2xsIHtcXHJcXG5cXHQmOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuXFx0Y29sb3I6ICNmZmY7XFxyXFxuXFx0Jl9fbWVudSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOjU4MHB4KXtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiA1MnB4O1xcclxcblxcdFxcdCAgfVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19sb2dvIHtcXHJcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjAsIDE1KTtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi5tZW51IHtcXHJcXG5cXHJcXG5cXHQmX19ib2R5IHtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDM1LCAyNSk7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAzNSwgMjUpO1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0ei1pbmRleDogMTA7XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6NTgwcHgpe1xcclxcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHQgIH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fbGlzdCB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1yaWdodFxcXCIsIDYwLCA1MCk7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZ2FwXFxcIiwgNDAsIDMwKTtcXHJcXG5cXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDo1ODBweCl7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdG1hcmdpbjogMDtcXHJcXG5cXHRcXHRcXHRmbGV4OiAyO1xcclxcblxcdFxcdCAgfVxcclxcblxcdCAgfVxcclxcblxcclxcblxcdCZfX2xpbmsge1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgMzUsIDI1KTtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDM1LCAyNSk7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxNnB4O1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDo1ODBweCl7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAyOHB4O1xcclxcblxcdFxcdCAgfVxcclxcblxcdFxcdFxcclxcblxcdFxcdCY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0Y29udGVudDogJyc7XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0XFx0dG9wOiA0NXB4O1xcclxcblxcdFxcdFxcdGhlaWdodDogMXB4O1xcclxcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG5cXHRcXHRcXHRvcGFjaXR5OiAwO1xcclxcblxcdFxcdFxcdHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuNXMgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdCY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcblxcdFxcdFxcdFxcdG9wYWNpdHk6IDE7XFxyXFxuXFx0XFx0XFx0XFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLnNvY2lhbHMtbGlzdCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdhcFxcXCIsIDE1LCAxMCk7XFxyXFxuXFxyXFxuXFx0QG1lZGlhIChtYXgtd2lkdGg6NTgwcHgpe1xcclxcblxcdFxcdGdhcDogMzBweDtcXHJcXG5cXHRcXHRmbGV4OiAxO1xcclxcbiAgXFx0fVxcclxcblxcclxcblxcdCZfX2ljb24ge1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOjU4MHB4KXtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMjVweDtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDI1cHg7XFxyXFxuICBcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vL0J1cmdlclxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xcclxcblxcdC5tZW51X19ib2R5IHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0XFx0dG9wOiA1MnB4O1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGF1dG87XFxyXFxuXFx0XFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5pY29uLW1lbnUge1xcclxcblxcdEBtZWRpYSAobWluLXdpZHRoOjU4MHB4KXtcXHJcXG5cXHRcXHRkaXNwbGF5OiBub25lOyAgXFxyXFxuXFx0fVxcclxcblxcdEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xcclxcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHR3aWR0aDogdG9SZW0oMzApO1xcclxcblxcdFxcdGhlaWdodDogdG9SZW0oMTgpO1xcclxcblxcdFxcdHotaW5kZXg6IDU7XFxyXFxuXFx0XFx0QG1lZGlhIChhbnktaG92ZXI6IG5vbmUpIHtcXHJcXG5cXHRcXHRcXHRjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdHNwYW4sXFxyXFxuXFx0XFx0Jjo6YmVmb3JlLFxcclxcblxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcblxcdFxcdFxcdHJpZ2h0OiAwO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IHRvUmVtKDIpO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdCY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0Ym90dG9tOiAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRzcGFuIHtcXHJcXG5cXHRcXHRcXHR0b3A6IGNhbGMoNTAlIC0gdG9SZW0oMSkpO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQubWVudS1vcGVuICYge1xcclxcblxcdFxcdFxcdCsubWVudV9fYm9keSB7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRzcGFuIHtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0Jjo6YmVmb3JlLFxcclxcblxcdFxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0Jjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRcXHR0b3A6IGNhbGMoNTAlIC0gdG9SZW0oMSkpO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRcXHRib3R0b206IGNhbGMoNTAlIC0gdG9SZW0oMSkpO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcdFxcdFxcdFxcclxcblxcdFxcdH1cXHRcXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0XFxyXFxuXFxyXFxuXCIsXCIvL9Cf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YjRgNC40YTRgtGDXFxyXFxuQG1peGluIGZvbnQoJGZvbnRfbmFtZSwgJGZpbGVfbmFtZSwgJHdlaWdodCwgJHN0eWxlKSB7XFxyXFxuXFx0QGZvbnQtZmFjZSB7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6ICRmb250X25hbWU7XFxyXFxuXFx0XFx0Zm9udC1kaXNwbGF5OiBzd2FwO1xcclxcblxcdFxcdHNyYzpcXHJcXG5cXHRcXHRcXHR1cmwoXFxcIi4uL2ZvbnRzLyN7JGZpbGVfbmFtZX0ud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxyXFxuXFx0XFx0XFx0dXJsKFxcXCIuLi9mb250cy8jeyRmaWxlX25hbWV9LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogI3skd2VpZ2h0fTtcXHJcXG5cXHRcXHRmb250LXN0eWxlOiAjeyRzdHlsZX07XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vL1BlcmNlbnRcXHJcXG5AZnVuY3Rpb24gcGVyY2VudCgkcHgsICRmcm9tOiAxMDApIHtcXHJcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsICRmcm9tKSAqIDEwMCU7XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG4vL1JFTVxcclxcbkBmdW5jdGlvbiB0b1JlbSgkcHgsICRjdXJyZW50OiAxNikge1xcclxcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgJGN1cnJlbnQpICsgcmVtO1xcclxcblxcdEByZXR1cm4gJHJlc3VsdDtcXHJcXG59XFxyXFxuLy9FTVxcclxcbkBmdW5jdGlvbiBlbSgkcHgsICRjdXJyZW50OiAxNikge1xcclxcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgJGN1cnJlbnQpICsgZW07XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4vL0N1cnJlbmN5XFxyXFxuQG1peGluIGN1cnJlbmN5KCRzeW0pIHtcXHJcXG5cXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0Y29udGVudDogXFxcIiN7JHN5bX1cXFwiO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gR3JpZHNcXHJcXG5AbWl4aW4gZ3JpZENhcmRzKCR0eXBlOiBmaXQsICRtaW46IDI4MHB4LCAkbWF4OiAxZnIsICRnYXA6IDMwcHgpIHtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdhcDogJGdhcDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLSN7JHR5cGV9LCBtaW5tYXgoJG1pbiwgJG1heCkpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyDQkNC00LDQv9GC0LjQstC90LAg0LLQu9Cw0YHRgtC40LLRltGB0YLRjCAoY2xhbXApXFxyXFxuQG1peGluIGFkYXB0aXZlVmFsdWUoJHByb3BlcnR5LCAkc3RhcnRTaXplLCAkbWluU2l6ZSwgJGtlZXBTaXplOiAwLCAkd2lkdGhGcm9tOiAkY29udGFpbmVyV2lkdGgsICR3aWR0aFRvOiAkbWluV2lkdGgpIHtcXHJcXG5cXHRAaWYgKCRzdGFydFNpemU9PTApIHtcXHJcXG5cXHRcXHQkc3RhcnRTaXplOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFx0QGlmICgkbWluU2l6ZT09MCkge1xcclxcblxcdFxcdCRtaW5TaXplOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JTQu9GPIGNhbGMoKTtcXHJcXG5cXHQkYWRkU2l6ZTogbWF0aC5kaXYoJHN0YXJ0U2l6ZSAtICRtaW5TaXplLCAxNik7XFxyXFxuXFxyXFxuXFx0QGlmICgkd2lkdGhGcm9tID09ICRjb250YWluZXJXaWR0aCBhbmQgJG1heFdpZHRoQ29udGFpbmVyID09IDApIHtcXHJcXG5cXHRcXHQkd2lkdGhGcm9tOiAkbWF4V2lkdGg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCR0YDQtdC50Lot0L/QvtGX0L3RgtC4INCyIEVNXFxyXFxuXFx0JHdpZHRoRnJvbU1lZGlhOiBlbSgkd2lkdGhGcm9tKTtcXHJcXG5cXHQkd2lkdGhUb01lZGlhOiBlbSgkd2lkdGhUbyk7XFxyXFxuXFxyXFxuXFx0Ly8g0KTQvtGA0LzRg9C70LAg0L/Qu9Cw0LLQsNGO0YfQvtCz0L4g0LfQvdCw0YfQtdC90L3Rj1xcclxcblxcdC8vINCY0YHRgtC+0YfQvdC40Lo6IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vbGluZWFybHktc2NhbGUtZm9udC1zaXplLXdpdGgtY3NzLWNsYW1wLWJhc2VkLW9uLXRoZS12aWV3cG9ydC9cXHJcXG5cXHQkc2xvcGU6IG1hdGguZGl2KCgkc3RhcnRTaXplIC0gJG1pblNpemUpLCAoJHdpZHRoRnJvbSAtICR3aWR0aFRvKSk7XFxyXFxuXFx0JHlJbnRlcnNlY3Rpb246IC0kd2lkdGhUbyAqICRzbG9wZSArICRtaW5TaXplO1xcclxcblxcdEBpZiAoJHlJbnRlcnNlY3Rpb249PTApIHtcXHJcXG5cXHRcXHQkeUludGVyc2VjdGlvbjogMC4wMDAwMDE7XFxyXFxuXFx0fVxcclxcblxcdCRmbHlWYWx1ZTogI3t0b1JlbSgkeUludGVyc2VjdGlvbil9XFxcIiArIFxcXCIgI3skc2xvcGUgKiAxMDB9dnc7XFxyXFxuXFxyXFxuXFx0Ly8g0J7RgtGA0LjQvNCw0L3QvdGPINC30L3QsNGH0LXQvdC90Y8g0LLQu9Cw0YHRgtC40LLQvtGB0YLRllxcclxcblxcdCRwcm9wZXJ0eVZhbHVlOiAje1xcXCJjbGFtcChcXFwiIHRvUmVtKCRtaW5TaXplKSBcXFwiLFxcXCIgJGZseVZhbHVlIFxcXCIsXFxcIiB0b1JlbSgkc3RhcnRTaXplKSBcXFwiKVxcXCJ9O1xcclxcblxcdC8vINCv0LrRidC+INC90LXQs9Cw0YLQuNCy0L3RliDQt9C90LDRh9C10L3QvdGPXFxyXFxuXFx0QGlmICgkbWluU2l6ZSA+ICRzdGFydFNpemUpIHtcXHJcXG5cXHRcXHQkcHJvcGVydHlWYWx1ZTogI3tcXFwiY2xhbXAoXFxcIiB0b1JlbSgkc3RhcnRTaXplKSBcXFwiLFxcXCIgJGZseVZhbHVlIFxcXCIsXFxcIiB0b1JlbSgkbWluU2l6ZSkgXFxcIilcXFwifTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INC30L3QsNGH0LXQvdC90Y8g0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFxcclxcblxcdEBpZiAka2VlcFNpemUgIT0gMSBhbmQgJGtlZXBTaXplICE9IDMge1xcclxcblxcdFxcdEBtZWRpYSAobWluLXdpZHRoOiAkd2lkdGhGcm9tTWVkaWEpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IHRvUmVtKCRzdGFydFNpemUpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0JDQtNCw0L/RgtGD0ZTQvNC+INGA0L7Qt9C80ZbRgCDRgyDQv9GA0L7QvNGW0LbQutGDINC80ZbQtiDQt9Cw0LfQvdCw0YfQtdC90LjQvNC4INGI0LjRgNC40L3QsNC80Lgg0LIn0Y7Qv9C+0YDRgtGDXFxyXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6ICR3aWR0aFRvTWVkaWEpIGFuZCAobWF4LXdpZHRoOiAkd2lkdGhGcm9tTWVkaWEpIHtcXHJcXG5cXHRcXHQvLyDQr9C60YnQviDQv9GW0LTRgtGA0LjQvNGD0ZTRgtGM0YHRjyBjbGFtcCgpO1xcclxcblxcdFxcdEBzdXBwb3J0cyAoI3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWU7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdC8vINCv0LrRidC+INC90LUg0L/RltC00YLRgNC40LzRg9GU0YLRjNGB0Y8gY2xhbXAoKTtcXHJcXG5cXHRcXHRAc3VwcG9ydHMgbm90ICgjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiBjYWxjKCN7dG9SZW0oJG1pblNpemUpfSArICN7JGFkZFNpemV9ICogKDEwMHZ3IC0gI3t0b1JlbSgkd2lkdGhUbyl9KSAvICN7bWF0aC5kaXYoJHdpZHRoRnJvbSwgMTYpIC0gbWF0aC5kaXYoJHdpZHRoVG8sIDE2KX0pO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFx0QGlmICRrZWVwU2l6ZSAhPSAxIGFuZCAka2VlcFNpemUgIT0gMiB7XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICR3aWR0aFRvTWVkaWEpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IHRvUmVtKCRtaW5TaXplKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vIEhlcm8gc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5oZXJvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgNDgwLCAyNzApO1xcclxcbiAgICAmX19jb250YWluZXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItY291bnRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiYm90dG9tXFxcIiwgNzAsIDMwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibGVmdFxcXCIsIDIwMCwgMTUpO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDgwLCA1MCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICZfX2l0ZW0ge1xcclxcbiAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMjAsIDEwKTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICB0b3A6IDdweDtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsZWZ0XFxcIiwgMzAsIDE5KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmc3BhbiB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxNCwgMTIpOyAgXFxyXFxuICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYmxvY2stdGl0bGUge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwidG9wXFxcIiwgMTc1LCA1MCk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsZWZ0XFxcIiwgMjAwLCAzMCk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDUxNiwgMzAwKTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMCA0MHB4IDA7XFxyXFxuICAgICZfX3RpdGxlIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDcwLCAzNik7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgdGV4dC1zaGFkb3c6IDRweCA0cHggMnB4IHJnYmEoMCwwLDAsMC42KTtcXHJcXG4gICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXZpZXcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInRvcFxcXCIsIDM5MCwgMTYwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicmlnaHRcXFwiLCAxNzgsIDIwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA5MCwgNTUpO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJoZWlnaHRcXFwiLCA5MCwgNTUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTUsIDEyKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZSwgYm94LXNoYWRvdyAwLjRzIGVhc2U7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxNXB4IDhweCAjZmZmO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItc2xpZGUge1xcclxcbiAgICAmX19pbWcge1xcclxcbiAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDU4MCwgMjIwKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDIyNXB4O1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsZWZ0XFxcIiwgLTUwLCA0MDApO1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDo5NThweCl7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgIH1cXHJcXG59XFxyXFxuLnN3aXBlci1idXR0b24tbmV4dCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyMjVweDtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicmlnaHRcXFwiLCAtNTAsIDQwMCk7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjk1OHB4KXtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyBBYm91dC11cyBzZWN0aW9uXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmFib3V0LXVzIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAyNTYsIDQwKTtcXHJcXG5cXHJcXG4gICAgJl9fY29udGFpbmVyLS1iaWcge1xcclxcbiAgICAgICAgd2lkdGg6IDEzMDZweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5pbnRyby1ibG9jayB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNjE1LCAyOTApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgOTMsIDQwKTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgJl9fbGFiZWwge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDI1LCAxNSk7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RpdGxlIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDM0LCAyNCk7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uaW5mby1ibG9jayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMTYwLCA2MCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdhcFxcXCIsIDExMCwgNDApO1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDo1ODBweCl7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgNDAsIDIwKTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0tLXRvcC1saW5lIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMzkxLCAyMDApO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAzNCwgMjApO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGV4dC0tYmlnIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDIwLCAxOCk7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xcclxcblxcclxcbiAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA0MDAsIDIxMCk7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbClcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtLS1hY3Rpb24ge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA0NjMsIDI1MCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGV4dC0tc21hbGwge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTcsIDE1KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA1MCwgMjUpO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnRuIHNwYW4ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDUwO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgMzksIDE4KTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1OS45OHB4KSB7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDY5Ljk4cHgpIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAxOSwgMTApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE5LCAxMCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMTcwLCA4MCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInRvcFxcXCIsIDI1LCAxMik7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJyaWdodFxcXCIsIDM4LCAxOSk7XFxyXFxuICAgICAgICB3aWR0aDogNnB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA2cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1OS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyNSUpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS1yZXZlcnNlIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgI2ZmZjtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyBEaXJlY3Rpb25zIHNlY3Rpb25cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uZGlyZWN0aW9ucyB7XFxyXFxuICAgIG1heC13aWR0aDogMTMzNnB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMTQwLCA3MCk7XFxyXFxufVxcclxcblxcclxcbi53b3Jrcy1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICAmX19pdGVtIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMzA0LCAyMDApO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLCAwLCAwLCAwLjEzKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjY1KSAxMDAlKTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDQwMCwgMjgwKTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICAgICAgICAgICAud29ya3MtbGlzdF9faW5mbyB7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTZweCk7XFxyXFxuICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAud29ya3MtbGlzdF9fY2FyZCB7XFxyXFxuICAgICAgICAgICAgZmlsdGVyOiBibHVyKDdweCk7XFxyXFxuICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fY2FyZCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGZpbHRlcjogYmx1cigwKTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjVzIGVhc2U7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHQmX19pbmZvIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXJpZ2h0XFxcIiwgOTMsIDI1KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDUwLCAyNSk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTZweCk7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX190ZXh0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgbWFyZ2luOiAyNHB4IDAgMjRweCAwO1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ5OS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4OyBcXHJcXG4gICAgICAgIH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fbW9yZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OTkuOThweCkge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsgXFxyXFxuICAgICAgICB9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyBEaXJlY3Rpb25zIHNlY3Rpb25cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uZmVhdHVyZWQge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE1NywgNzUpO1xcclxcbiAgICAmX19saXN0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdhcFxcXCIsIDEwMCwgMzApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0ge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIsXFxyXFxuICAgICAgICAmOmZvY3VzIHtcXHJcXG4gICAgICAgICAgICAuZmVhdHVyZWRfX2J0biB7XFxyXFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICZfX2ltYWdlIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMzcwLCAxODUpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgNDI4LCAyMTQpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2xhYmVsIHsgICBcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS40OyBcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi10b3BcXFwiLCAzNCwgMTUpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDgsIDQpO1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5OS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3R5cGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pbWFnZS0tYmlnIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNjAwLCAyODApO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgNDI4LCAxOTQpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0tLXRvcCB7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDE2MHB4O1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtLS1ib3R0b20ge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogLTE2MHB4O1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fYnRuIHtcXHJcXG4gICAgICAgIGxlZnQ6IDEzMHB4O1xcclxcbiAgICAgICAgdG9wOiAyMDBweDtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZSwgdmlzaWJpbGl0eSAwLjVzIGVhc2UsIHRyYW5zZm9ybSAwLjRzIGVhc2UsIGJveC1zaGFkb3cgMC40cyBlYXNlO1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAxMDBweDtcXHJcXG4gICAgICAgICAgICB0b3A6IDEwMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGVTbWFsbCkge1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDY2cHg7XFxyXFxuICAgICAgICAgICAgdG9wOiA3N3B4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbi5pbnRyb2R1Y3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmaXJzdCBiYXNlbGluZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgNDgsIDI1KTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgMTAwLCAyMCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctcmlnaHRcXFwiLCAxMDAsIDUwKTtcXHJcXG4gICAgJl9fdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNzVweDtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDEwMCwgNTApO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDQyNSwgMjUwKTtcXHJcXG4gICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA3MCwgMzUpO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDY4MHB4O1xcclxcbiAgICAgICAgICAgIHRvcDogODBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgNDgsIDI1KTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImxlZnRcXFwiLCAxMDAsIDUwKTtcXHJcXG4gICAgICAgICAgICAgICAgdG9wOiAtNDBweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gUHJvY2VzcyBzZWN0aW9uXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLnByb2Nlc3Mge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgICAgICBoZWlnaHQ6IDY2NHB4O1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KXtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDc2NHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcdFxcdCZfX2NvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMzAwcHg7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMjtcXHJcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDE0OSwgNjUpO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMTYxLCA3MCk7XFxyXFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNjQxLCAyMDApO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDY0MSwgMjAwKTtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IC0yMCU7XFxyXFxuICAgICAgICAgICAgdG9wOiAtMzUlO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcclxcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCl7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX190aXRsZSB7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNGRkY7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgODAsIDMwKTsgXFxyXFxuXFxyXFxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KXtcXHJcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgMTAwLCAyMCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MTkuOThweCkge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX19saXN0IHtcXHJcXG4gICAgICAgICAgICBnYXA6IDI0cHg7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1sZWZ0XFxcIiwgNjAsIDIwKTtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tcmlnaHRcXFwiLCAxNDAsIDApO1xcclxcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCl7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX19pdGVtIHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgIC5wcm9jZXNzX190ZXh0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyOCUpXFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgLnByb2Nlc3NfX251bWJlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX190ZXh0IHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogIzZGNkY2RjtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNHMgZWFzZSwgdHJhbnNmb3JtIDAuNHMgZWFzZTtcXHJcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICAgIGxlZnQ6IC05MHB4O1xcclxcbiAgICAgICAgICAgICAgICB0b3A6IDE3cHg7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UsIG9wYWNpdHkgMC40cyBlYXNlO1xcclxcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpe1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCZfX251bWJlciB7XFxyXFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcm9jZXNzLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpe1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5ibG9jay1pbmZvIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAzOTUsIDI1MCk7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCl7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCAxMDAsIDIwKTtcXHJcXG4gICAgfVxcclxcblxcdFxcdCZfX3RleHQge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDUzLCAyNSk7IFxcclxcbiAgICAgICAgICAgIFxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy9DcmVhdGUgc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5jcmVhdGUge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDE2MCwgODApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE0MCwgNzApO1xcclxcbiAgICAmX19jb250YWluZXIge1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3dyYXBwZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uaW1nLWJsb2NrIHtcXHJcXG5cXHJcXG4gICAgJl9faXRlbSB7XFxyXFxuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjRzIGVhc2U7XFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtLS1iaWcge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNDcwLCAyMzUpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgMjkwLCAxNDUpO1xcclxcbiAgICAgICAgd2lkdGg6IDQ3MHB4O1xcclxcbmhlaWdodDogMjkwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fYm90dG9tIHtcXHJcXG4gICAgICAgIHdpZHRoOiA1NzVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtLS1zbWFsbCB7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEzMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAxNDAsIDcwKTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDI5MCwgMTQ1KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtLS1taWRkbGUge1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5jcmVhdGUtaW5mbyB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgOTMsIDQwKTtcXHJcXG4gICAgJl9fdGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxuICAgICAgICB3aWR0aDogMzU3cHg7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMzcsIDIwKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190ZXh0IHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1sZWZ0XFxcIiwgOTAsIDQ1KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA5MCwgNDUpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA0MzgsIDI4MCk7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjsgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fYnRuIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1sZWZ0XFxcIiwgOTAsIDQ1KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uYnRuIHtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCIsXCI6cm9vdCB7XFxyXFxuICAgIC0tZGFyay1jbDogIzBFMEUwRTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjdlMTIyMWZkZGViNDk5ODZiZjViXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9