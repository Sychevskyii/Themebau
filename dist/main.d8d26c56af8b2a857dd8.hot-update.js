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

.logo {
  margin-right: auto;
}
@media (min-width: 75em) {
  .logo {
    font-size: 1.25rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (font-size: clamp( 0.9375rem , 0.8238636364rem  +  0.5681818182vw , 1.25rem )) {
    .logo {
      font-size: clamp( 0.9375rem , 0.8238636364rem  +  0.5681818182vw , 1.25rem );
    }
  }
  @supports not (font-size: clamp( 0.9375rem , 0.8238636364rem  +  0.5681818182vw , 1.25rem )) {
    .logo {
      font-size: calc(0.9375rem + 0.3125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .logo {
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
    width: 1.5625rem;
    height: 0.875rem;
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

.footer {
  background-color: var();
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
  max-width: 975px;
  display: flex;
  align-items: center;
}
@media (max-width: 779.98px) {
  .clients__container {
    flex-direction: column;
  }
}
@media (min-width: 75em) {
  .clients__title-block {
    margin-right: 16.25rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-right: clamp( 0.0000000625rem , -5.9090908239rem  +  29.5454544318vw , 16.25rem )) {
    .clients__title-block {
      margin-right: clamp( 0.0000000625rem , -5.9090908239rem  +  29.5454544318vw , 16.25rem );
    }
  }
  @supports not (margin-right: clamp( 0.0000000625rem , -5.9090908239rem  +  29.5454544318vw , 16.25rem )) {
    .clients__title-block {
      margin-right: calc(0.0000000625rem + 16.2499999375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .clients__title-block {
    margin-right: 0.0000000625rem;
  }
}
@media (max-width: 779.98px) {
  .clients__title-block {
    margin-right: 0;
    width: 100%;
    text-align: center;
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
@media (max-width: 779.98px) {
  .clients__title {
    width: 100%;
    margin-bottom: 20px;
  }
}
.clients__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
@media (max-width: 779.98px) {
  .clients__list {
    width: 70%;
    justify-content: center;
  }
}

@media (min-width: 75em) {
  .new {
    padding-bottom: 10rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-bottom: clamp( 4.375rem , 2.3295454545rem  +  10.2272727273vw , 10rem )) {
    .new {
      padding-bottom: clamp( 4.375rem , 2.3295454545rem  +  10.2272727273vw , 10rem );
    }
  }
  @supports not (padding-bottom: clamp( 4.375rem , 2.3295454545rem  +  10.2272727273vw , 10rem )) {
    .new {
      padding-bottom: calc(4.375rem + 5.625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .new {
    padding-bottom: 4.375rem;
  }
}
.new__container {
  position: relative;
}
.new__container::after {
  content: "";
  position: absolute;
  left: 0;
  height: 1px;
  width: 100%;
  background-color: var(--dark-cl);
}
@media (min-width: 75em) {
  .new__container::after {
    bottom: -10rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (bottom: clamp( -10rem , -2.3295454545rem  +  -10.2272727273vw , -4.375rem )) {
    .new__container::after {
      bottom: clamp( -10rem , -2.3295454545rem  +  -10.2272727273vw , -4.375rem );
    }
  }
  @supports not (bottom: clamp( -10rem , -2.3295454545rem  +  -10.2272727273vw , -4.375rem )) {
    .new__container::after {
      bottom: calc(-4.375rem + -5.625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .new__container::after {
    bottom: -4.375rem;
  }
}
.new__title {
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
}
@media (min-width: 75em) {
  .new__title {
    font-size: 3rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (font-size: clamp( 1.5rem , 0.9545454545rem  +  2.7272727273vw , 3rem )) {
    .new__title {
      font-size: clamp( 1.5rem , 0.9545454545rem  +  2.7272727273vw , 3rem );
    }
  }
  @supports not (font-size: clamp( 1.5rem , 0.9545454545rem  +  2.7272727273vw , 3rem )) {
    .new__title {
      font-size: calc(1.5rem + 1.5 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .new__title {
    font-size: 1.5rem;
  }
}
@media (min-width: 75em) {
  .new__title {
    margin-bottom: 5.625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-bottom: clamp( 1.875rem , 0.5113636364rem  +  6.8181818182vw , 5.625rem )) {
    .new__title {
      margin-bottom: clamp( 1.875rem , 0.5113636364rem  +  6.8181818182vw , 5.625rem );
    }
  }
  @supports not (margin-bottom: clamp( 1.875rem , 0.5113636364rem  +  6.8181818182vw , 5.625rem )) {
    .new__title {
      margin-bottom: calc(1.875rem + 3.75 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .new__title {
    margin-bottom: 1.875rem;
  }
}
.new__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
@media (min-width: 75em) {
  .new__list {
    gap: 1.875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (gap: clamp( 1.875rem , 2.7272727273rem  +  -1.1363636364vw , 2.5rem )) {
    .new__list {
      gap: clamp( 1.875rem , 2.7272727273rem  +  -1.1363636364vw , 2.5rem );
    }
  }
  @supports not (gap: clamp( 1.875rem , 2.7272727273rem  +  -1.1363636364vw , 2.5rem )) {
    .new__list {
      gap: calc(2.5rem + -0.625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .new__list {
    gap: 2.5rem;
  }
}
@media (min-width: 75em) {
  .new__list {
    margin-bottom: 5rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-bottom: clamp( 1.875rem , 0.7386363636rem  +  5.6818181818vw , 5rem )) {
    .new__list {
      margin-bottom: clamp( 1.875rem , 0.7386363636rem  +  5.6818181818vw , 5rem );
    }
  }
  @supports not (margin-bottom: clamp( 1.875rem , 0.7386363636rem  +  5.6818181818vw , 5rem )) {
    .new__list {
      margin-bottom: calc(1.875rem + 3.125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .new__list {
    margin-bottom: 1.875rem;
  }
}
.new__item {
  position: relative;
}
@media (min-width: 75em) {
  .new__item {
    width: 23.125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 17.5rem , 15.4545454545rem  +  10.2272727273vw , 23.125rem )) {
    .new__item {
      width: clamp( 17.5rem , 15.4545454545rem  +  10.2272727273vw , 23.125rem );
    }
  }
  @supports not (width: clamp( 17.5rem , 15.4545454545rem  +  10.2272727273vw , 23.125rem )) {
    .new__item {
      width: calc(17.5rem + 5.625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .new__item {
    width: 17.5rem;
  }
}
.new__date {
  position: absolute;
  top: 0;
  left: 0;
  width: 35%;
  padding: 10px 15px;
  background-color: #fff;
  font-weight: 400;
  line-height: 1.3;
}
@media (min-width: 75em) {
  .new__date {
    font-size: 0.875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (font-size: clamp( 0.625rem , 0.5340909091rem  +  0.4545454545vw , 0.875rem )) {
    .new__date {
      font-size: clamp( 0.625rem , 0.5340909091rem  +  0.4545454545vw , 0.875rem );
    }
  }
  @supports not (font-size: clamp( 0.625rem , 0.5340909091rem  +  0.4545454545vw , 0.875rem )) {
    .new__date {
      font-size: calc(0.625rem + 0.25 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .new__date {
    font-size: 0.625rem;
  }
}
.new__image {
  width: 100%;
}
@media (min-width: 75em) {
  .new__image {
    margin-bottom: 1.6875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-bottom: clamp( 0.9375rem , 0.6647727273rem  +  1.3636363636vw , 1.6875rem )) {
    .new__image {
      margin-bottom: clamp( 0.9375rem , 0.6647727273rem  +  1.3636363636vw , 1.6875rem );
    }
  }
  @supports not (margin-bottom: clamp( 0.9375rem , 0.6647727273rem  +  1.3636363636vw , 1.6875rem )) {
    .new__image {
      margin-bottom: calc(0.9375rem + 0.75 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .new__image {
    margin-bottom: 0.9375rem;
  }
}
.new__text {
  font-weight: 500;
  line-height: 1.5;
}
@media (min-width: 75em) {
  .new__text {
    font-size: 1.25rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (font-size: clamp( 1rem , 0.9090909091rem  +  0.4545454545vw , 1.25rem )) {
    .new__text {
      font-size: clamp( 1rem , 0.9090909091rem  +  0.4545454545vw , 1.25rem );
    }
  }
  @supports not (font-size: clamp( 1rem , 0.9090909091rem  +  0.4545454545vw , 1.25rem )) {
    .new__text {
      font-size: calc(1rem + 0.25 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .new__text {
    font-size: 1rem;
  }
}
@media (min-width: 75em) {
  .new__text {
    width: 18.375rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 16.25rem , 15.4772727273rem  +  3.8636363636vw , 18.375rem )) {
    .new__text {
      width: clamp( 16.25rem , 15.4772727273rem  +  3.8636363636vw , 18.375rem );
    }
  }
  @supports not (width: clamp( 16.25rem , 15.4772727273rem  +  3.8636363636vw , 18.375rem )) {
    .new__text {
      width: calc(16.25rem + 2.125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .new__text {
    width: 16.25rem;
  }
}
.new__btn {
  margin: 0 auto;
}

@media (min-width: 75em) {
  .work {
    padding-top: 9.875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-top: clamp( 2.5rem , -0.1818181818rem  +  13.4090909091vw , 9.875rem )) {
    .work {
      padding-top: clamp( 2.5rem , -0.1818181818rem  +  13.4090909091vw , 9.875rem );
    }
  }
  @supports not (padding-top: clamp( 2.5rem , -0.1818181818rem  +  13.4090909091vw , 9.875rem )) {
    .work {
      padding-top: calc(2.5rem + 7.375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .work {
    padding-top: 2.5rem;
  }
}
@media (min-width: 75em) {
  .work {
    padding-bottom: 9.875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-bottom: clamp( 2.5rem , -0.1818181818rem  +  13.4090909091vw , 9.875rem )) {
    .work {
      padding-bottom: clamp( 2.5rem , -0.1818181818rem  +  13.4090909091vw , 9.875rem );
    }
  }
  @supports not (padding-bottom: clamp( 2.5rem , -0.1818181818rem  +  13.4090909091vw , 9.875rem )) {
    .work {
      padding-bottom: calc(2.5rem + 7.375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .work {
    padding-bottom: 2.5rem;
  }
}
.work__container {
  max-width: 960px;
  position: relative;
}
.work__block {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media (max-width: 649.98px) {
  .work__block {
    flex-direction: column;
    justify-content: center;
  }
}
.work__title {
  font-weight: 500;
  line-height: 1.2;
}
@media (min-width: 75em) {
  .work__title {
    width: 30.1875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 15.625rem , 10.3295454545rem  +  26.4772727273vw , 30.1875rem )) {
    .work__title {
      width: clamp( 15.625rem , 10.3295454545rem  +  26.4772727273vw , 30.1875rem );
    }
  }
  @supports not (width: clamp( 15.625rem , 10.3295454545rem  +  26.4772727273vw , 30.1875rem )) {
    .work__title {
      width: calc(15.625rem + 14.5625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .work__title {
    width: 15.625rem;
  }
}
@media (min-width: 75em) {
  .work__title {
    font-size: 6.25rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (font-size: clamp( 3.125rem , 1.9886363636rem  +  5.6818181818vw , 6.25rem )) {
    .work__title {
      font-size: clamp( 3.125rem , 1.9886363636rem  +  5.6818181818vw , 6.25rem );
    }
  }
  @supports not (font-size: clamp( 3.125rem , 1.9886363636rem  +  5.6818181818vw , 6.25rem )) {
    .work__title {
      font-size: calc(3.125rem + 3.125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .work__title {
    font-size: 3.125rem;
  }
}
.work__title span {
  position: relative;
  z-index: 2;
}
.work__title span::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: var(--dark-cl);
}
.work__img {
  position: absolute;
  left: 47%;
  bottom: 38px;
}
@media (min-width: 75em) {
  .work__img {
    width: 14.375rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 7.1875rem , 4.5738636364rem  +  13.0681818182vw , 14.375rem )) {
    .work__img {
      width: clamp( 7.1875rem , 4.5738636364rem  +  13.0681818182vw , 14.375rem );
    }
  }
  @supports not (width: clamp( 7.1875rem , 4.5738636364rem  +  13.0681818182vw , 14.375rem )) {
    .work__img {
      width: calc(7.1875rem + 7.1875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .work__img {
    width: 7.1875rem;
  }
}
@media (max-width: 649.98px) {
  .work__img {
    display: none;
  }
}
.work__link {
  transition: transform 0.4s ease;
}
.work__link:hover {
  transform: translateX(50%);
}

:root {
  --dark-cl: #0E0E0E;
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base.scss","webpack://./src/scss/header.scss","webpack://./src/scss/base/mixins.scss","webpack://./src/scss/footer.scss","webpack://./src/scss/home.scss","webpack://./src/scss/utils/vars.scss"],"names":[],"mappings":"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E/EF;MFgFG,mDAAA;IJkaC;EACF;AACF;AIhaE;EEpFF;IFqFG,gBAAA;EJmaD;AACF;AIrbE;EEpEF;IFqEG,aAAA;EJwbD;AACF;AIrbC;EAEC;IE3EF;MF4EG,yEAhBc;IJucb;EACF;EIrbA;IE/EF;MFgFG,sDAAA;IJwbC;EACF;AACF;AItbE;EEpFF;IFqFG,eAAA;EJybD;AACF;AI3cE;EEpEF;IFqEG,WAAA;EJ8cD;AACF;AI3cC;EAEC;IE3EF;MF4EG,oEAhBc;IJ6db;EACF;EI3cA;IE/EF;MFgFG,oDAAA;IJ8cC;EACF;AACF;AI5cE;EEpFF;IFqFG,eAAA;EJ+cD;AACF;AM5hBQ;EACI,WAAA;EACA,WAAA;EAEA,sBAAA;EACA,kBAAA;EACA,QAAA;AN6hBZ;AIxeE;EE3DM;IF4DL,cAAA;EJ2eD;AACF;AIxeC;EAEC;IElEM;MFmEL,uEAhBc;IJ0fb;EACF;EIxeA;IEtEM;MFuEL,oDAAA;IJ2eC;EACF;AACF;AIzeE;EE3EM;IF4EL,eAAA;EJ4eD;AACF;AI9fE;EE3DM;IF4DL,cAAA;EJigBD;AACF;AI9fC;EAEC;IElEM;MFmEL,0DAhBc;IJghBb;EACF;EI9fA;IEtEM;MFuEL,qDAAA;IJigBC;EACF;AACF;AI/fE;EE3EM;IF4EL,eAAA;EJkgBD;AACF;AIphBE;EEjDE;IFkDD,mBAAA;EJuhBD;AACF;AIphBC;EAEC;IExDE;MFyDD,2EAhBc;IJsiBb;EACF;EIphBA;IE5DE;MF6DD,uDAAA;IJuhBC;EACF;AACF;AIrhBE;EEjEE;IFkED,kBAAA;EJwhBD;AACF;;AMrlBA;EACQ,kBAAA;EAIA,sBAAA;ANqlBR;AI/iBE;EE3CF;IF4CG,eAAA;EJkjBD;AACF;AI/iBC;EAEC;IElDF;MFmDG,yEAhBc;IJikBb;EACF;EI/iBA;IEtDF;MFuDG,mDAAA;IJkjBC;EACF;AACF;AIhjBE;EE3DF;IF4DG,aAAA;EJmjBD;AACF;AIrkBE;EE3CF;IF4CG,aAAA;EJwkBD;AACF;AIrkBC;EAEC;IElDF;MFmDG,wEAhBc;IJulBb;EACF;EIrkBA;IEtDF;MFuDG,oDAAA;IJwkBC;EACF;AACF;AItkBE;EE3DF;IF4DG,cAAA;EJykBD;AACF;AI3lBE;EE3CF;IF4CG,eAAA;EJ8lBD;AACF;AI3lBC;EAEC;IElDF;MFmDG,0EAhBc;IJ6mBb;EACF;EI3lBA;IEtDF;MFuDG,mDAAA;IJ8lBC;EACF;AACF;AI5lBE;EE3DF;IF4DG,eAAA;EJ+lBD;AACF;AMtpBI;EAEI,gBAAA;EACA,gBAAA;EACA,WAAA;EACA,2CAAA;ANupBR;AIvnBE;EErCE;IFsCD,mBAAA;EJ0nBD;AACF;AIvnBC;EAEC;IE5CE;MF6CD,2EAhBc;IJyoBb;EACF;EIvnBA;IEhDE;MFiDD,uDAAA;IJ0nBC;EACF;AACF;AIxnBE;EErDE;IFsDD,kBAAA;EJ2nBD;AACF;AM5qBQ;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,sBAAA;AN8qBZ;AM3qBI;EACI,WAAA;EACA,WAAA;EACA,WAAA;AN6qBR;;AMzqBA;EACI,kBAAA;EAKA,sBAAA;EACA,qBAAA;EACA,kBAAA;EAEA,gBAAA;EACA,qDAAA;ANuqBJ;AIpqBE;EEdF;IFeG,cAAA;EJuqBD;AACF;AIpqBC;EAEC;IErBF;MFsBG,qEAhBc;IJsrBb;EACF;EIpqBA;IEzBF;MF0BG,gDAAA;IJuqBC;EACF;AACF;AIrqBE;EE9BF;IF+BG,UAAA;EJwqBD;AACF;AI1rBE;EEdF;IFeG,gBAAA;EJ6rBD;AACF;AI1rBC;EAEC;IErBF;MFsBG,0EAhBc;IJ4sBb;EACF;EI1rBA;IEzBF;MF0BG,mDAAA;IJ6rBC;EACF;AACF;AI3rBE;EE9BF;IF+BG,cAAA;EJ8rBD;AACF;AIhtBE;EEdF;IFeG,eAAA;EJmtBD;AACF;AIhtBC;EAEC;IErBF;MFsBG,yEAhBc;IJkuBb;EACF;EIhtBA;IEzBF;MF0BG,sDAAA;IJmtBC;EACF;AACF;AIjtBE;EE9BF;IF+BG,gBAAA;EJotBD;AACF;AItuBE;EEdF;IFeG,gBAAA;EJyuBD;AACF;AItuBC;EAEC;IErBF;MFsBG,0EAhBc;IJwvBb;EACF;EItuBA;IEzBF;MF0BG,uDAAA;IJyuBC;EACF;AACF;AIvuBE;EE9BF;IF+BG,iBAAA;EJ0uBD;AACF;AI5vBE;EEdF;IFeG,oBAAA;EJ+vBD;AACF;AI5vBC;EAEC;IErBF;MFsBG,4EAhBc;IJ8wBb;EACF;EI5vBA;IEzBF;MF0BG,wDAAA;IJ+vBC;EACF;AACF;AI7vBE;EE9BF;IF+BG,kBAAA;EJgwBD;AACF;AMnxBI;EACI,qBAAA;EACA,iCAAA;ANqxBR;;AItxBE;EEME;IFLD,gBAAA;EJ0xBD;AACF;AIvxBC;EAEC;IEDE;MFED,0EAhBc;IJyyBb;EACF;EIvxBA;IELE;MFMD,oDAAA;IJ0xBC;EACF;AACF;AIxxBE;EEVE;IFWD,gBAAA;EJ2xBD;AACF;;AMlyBA;EACI,kBAAA;EACA,UAAA;ANqyBJ;AIlzBE;EEWF;IFVG,eAAA;EJqzBD;AACF;AIlzBC;EAEC;IEIF;MFHG,wEAbe;IJi0Bd;EACF;EIlzBA;IEAF;MFCG,kDAAA;IJqzBC;EACF;AACF;AInzBE;EELF;IFMG,WAAA;EJszBD;AACF;AMzzBI;EAJJ;IAKQ,aAAA;EN4zBN;AACF;;AM1zBA;EACI,kBAAA;EACA,UAAA;AN6zBJ;AIl1BE;EEmBF;IFlBG,gBAAA;EJq1BD;AACF;AIl1BC;EAEC;IEYF;MFXG,yEAbe;IJi2Bd;EACF;EIl1BA;IEQF;MFPG,mDAAA;IJq1BC;EACF;AACF;AIn1BE;EEGF;IFFG,YAAA;EJs1BD;AACF;AMj1BI;EAJJ;IAKQ,aAAA;ENo1BN;AACF;;AI72BE;EE+BF;IF9BG,kBAAA;EJi3BD;AACF;AI92BC;EAEC;IEwBF;MFvBG,2EAhBc;IJg4Bb;EACF;EI92BA;IEoBF;MFnBG,uDAAA;IJi3BC;EACF;AACF;AI/2BE;EEeF;IFdG,mBAAA;EJk3BD;AACF;AMl2BI;EACI,aAAA;EACA,cAAA;ANo2BR;;AMj2BA;EAGI,cAAA;EACA,kBAAA;ANk2BJ;AI74BE;EEuCF;IFtCG,iBAAA;EJg5BD;AACF;AI74BC;EAEC;IEgCF;MF/BG,6EAhBc;IJ+5Bb;EACF;EI74BA;IE4BF;MF3BG,uDAAA;IJg5BC;EACF;AACF;AI94BE;EEuBF;IFtBG,gBAAA;EJi5BD;AACF;AIn6BE;EEuCF;IFtCG,wBAAA;EJs6BD;AACF;AIn6BC;EAEC;IEgCF;MF/BG,+EAhBc;IJq7Bb;EACF;EIn6BA;IE4BF;MF3BG,2DAAA;IJs6BC;EACF;AACF;AIp6BE;EEuBF;IFtBG,qBAAA;EJu6BD;AACF;AM74BI;EAEI,gBAAA;AN84BR;AI57BE;EE4CE;IF3CD,wBAAA;EJ+7BD;AACF;AI57BC;EAEC;IEqCE;MFpCD,kFAhBc;IJ88Bb;EACF;EI57BA;IEiCE;MFhCD,6DAAA;IJ+7BC;EACF;AACF;AI77BE;EE4BE;IF3BD,wBAAA;EJg8BD;AACF;AMj6BI;EAEI,gBAAA;EACA,gBAAA;ANk6BR;AIt9BE;EEiDE;IFhDD,mBAAA;EJy9BD;AACF;AIt9BC;EAEC;IE0CE;MFzCD,0EAhBc;IJw+Bb;EACF;EIt9BA;IEsCE;MFrCD,sDAAA;IJy9BC;EACF;AACF;AIv9BE;EEiCE;IFhCD,iBAAA;EJ09BD;AACF;;AMr7BA;EACI,aAAA;EACA,uBAAA;ANw7BJ;AIj/BE;EEuDF;IFtDG,oBAAA;EJo/BD;AACF;AIj/BC;EAEC;IEgDF;MF/CG,6EAhBc;IJmgCb;EACF;EIj/BA;IE4CF;MF3CG,0DAAA;IJo/BC;EACF;AACF;AIl/BE;EEuCF;IFtCG,sBAAA;EJq/BD;AACF;AIvgCE;EEuDF;IFtDG,aAAA;EJ0gCD;AACF;AIvgCC;EAEC;IEgDF;MF/CG,oEAhBc;IJyhCb;EACF;EIvgCA;IE4CF;MF3CG,gDAAA;IJ0gCC;EACF;AACF;AIxgCE;EEuCF;IFtCG,WAAA;EJ2gCD;AACF;AMj+BI;EALJ;IAMQ,sBAAA;ENo+BN;AACF;AIliCE;EEuDF;IFtDG,oBAAA;EJqiCD;AACF;AIliCC;EAEC;IEgDF;MF/CG,4EAhBc;IJojCb;EACF;EIliCA;IE4CF;MF3CG,yDAAA;IJqiCC;EACF;AACF;AIniCE;EEuCF;IFtCG,qBAAA;EJsiCD;AACF;AMv/BI;EAGI,kBAAA;ANu/BR;AI3jCE;EEiEE;IFhED,iBAAA;EJ8jCD;AACF;AI3jCC;EAEC;IE0DE;MFzDD,0EAhBc;IJ6kCb;EACF;EI3jCA;IEsDE;MFrDD,qDAAA;IJ8jCC;EACF;AACF;AI5jCE;EEiDE;IFhDD,cAAA;EJ+jCD;AACF;AIjlCE;EEiEE;IFhED,qBAAA;EJolCD;AACF;AIjlCC;EAEC;IE0DE;MFzDD,6EAhBc;IJmmCb;EACF;EIjlCA;IEsDE;MFrDD,yDAAA;IJolCC;EACF;AACF;AIllCE;EEiDE;IFhDD,oBAAA;EJqlCD;AACF;AMhiCI;EAEI,gBAAA;ANiiCR;AI1mCE;EEuEE;IFtED,kBAAA;EJ6mCD;AACF;AI1mCC;EAEC;IEgEE;MF/DD,2EAhBc;IJ4nCb;EACF;EI1mCA;IE4DE;MF3DD,wDAAA;IJ6mCC;EACF;AACF;AI3mCE;EEuDE;IFtDD,mBAAA;EJ8mCD;AACF;AMrjCQ;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EAEA,gCAAA;ANsjCZ;AIxoCE;EE2EM;IF1EL,YAAA;EJ2oCD;AACF;AIxoCC;EAEC;IEoEM;MFnEL,uEAhBc;IJ0pCb;EACF;EIxoCA;IEgEM;MF/DL,sDAAA;IJ2oCC;EACF;AACF;AIzoCE;EE2DM;IF1DL,gBAAA;EJ4oCD;AACF;AI9pCE;EEsFE;IFrFD,iBAAA;EJiqCD;AACF;AI9pCC;EAEC;IE+EE;MF9ED,6EAhBc;IJgrCb;EACF;EI9pCA;IE2EE;MF1ED,uDAAA;IJiqCC;EACF;AACF;AI/pCE;EEsEE;IFrED,gBAAA;EJkqCD;AACF;AM1lCI;EAGI,gBAAA;AN0lCR;AIvrCE;EE0FE;IFzFD,oBAAA;EJ0rCD;AACF;AIvrCC;EAEC;IEmFE;MFlFD,8EAhBc;IJysCb;EACF;EIvrCA;IE+EE;MF9ED,yDAAA;IJ0rCC;EACF;AACF;AIxrCE;EE0EE;IFzED,oBAAA;EJ2rCD;AACF;AI7sCE;EE0FE;IFzFD,uBAAA;EJgtCD;AACF;AI7sCC;EAEC;IEmFE;MFlFD,iFAhBc;IJ+tCb;EACF;EI7sCA;IE+EE;MF9ED,8DAAA;IJgtCC;EACF;AACF;AI9sCE;EE0EE;IFzED,wBAAA;EJitCD;AACF;;AMjoCA;EACI,kBAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;ANooCJ;AI1uCE;EEkGF;IFjGG,uBAAA;EJ6uCD;AACF;AI1uCC;EAEC;IE2FF;MF1FG,gFAhBc;IJ4vCb;EACF;EI1uCA;IEuFF;MFtFG,4DAAA;IJ6uCC;EACF;AACF;AI3uCE;EEkFF;IFjFG,sBAAA;EJ8uCD;AACF;AMxpCI;EANJ;IAOQ,eAAA;IACA,WAAA;IACA,kBAAA;EN2pCN;AACF;AM1pCI;EAXJ;IAYQ,eAAA;EN6pCN;AACF;;AM1pCA;EAII,gCAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,gBAAA;EACA,UAAA;EACA,iCAAA;EACA,kBAAA;AN0pCJ;AIvxCE;EEkHF;IFjHG,sBAAA;EJ0xCD;AACF;AIvxCC;EAEC;IE2GF;MF1GG,+EAhBc;IJyyCb;EACF;EIvxCA;IEuGF;MFtGG,2DAAA;IJ0xCC;EACF;AACF;AIxxCE;EEkGF;IFjGG,qBAAA;EJ2xCD;AACF;AI7yCE;EEkHF;IFjHG,yBAAA;EJgzCD;AACF;AI7yCC;EAEC;IE2GF;MF1GG,kFAhBc;IJ+zCb;EACF;EI7yCA;IEuGF;MFtGG,8DAAA;IJgzCC;EACF;AACF;AI9yCE;EEkGF;IFjGG,wBAAA;EJizCD;AACF;AIn0CE;EEkHF;IFjHG,gBAAA;EJs0CD;AACF;AIn0CC;EAEC;IE2GF;MF1GG,sEAhBc;IJq1Cb;EACF;EIn0CA;IEuGF;MFtGG,gDAAA;IJs0CC;EACF;AACF;AIp0CE;EEkGF;IFjGG,WAAA;EJu0CD;AACF;AMxtCQ;EACI,qBAAA;AN0tCZ;AMxtCQ;EACI,wBAAA;AN0tCZ;AMxtCQ;EACI,gCAAA;AN0tCZ;AMttCI;EACI,WAAA;EACA,kBAAA;EAGA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;ANstCR;AI12CE;EE4IE;IF3ID,cAAA;EJ62CD;AACF;AI12CC;EAEC;IEqIE;MFpID,sEAhBc;IJ43Cb;EACF;EI12CA;IEiIE;MFhID,kDAAA;IJ62CC;EACF;AACF;AI32CE;EE4HE;IF3HD,YAAA;EJ82CD;AACF;AIh4CE;EE4IE;IF3ID,eAAA;EJm4CD;AACF;AIh4CC;EAEC;IEqIE;MFpID,yEAhBc;IJk5Cb;EACF;EIh4CA;IEiIE;MFhID,sDAAA;IJm4CC;EACF;AACF;AIj4CE;EE4HE;IF3HD,gBAAA;EJo4CD;AACF;AMjwCQ;EATJ;IAUQ,aAAA;ENowCV;AACF;AMjwCI;EACI,WAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,sBAAA;EACA,4BAAA;EACA,+BAAA;ANmwCR;AMhwCI;EACI,sBAAA;EACA,uBAAA;ANkwCR;AM/vCY;EACI,sBAAA;ANiwChB;AM9vCY;EACI,WAAA;ANgwChB;AM7vCQ;EACI,qBAAA;EACA,gBAAA;AN+vCZ;AM5vCQ;EACI,gCAAA;AN8vCZ;AM3vCQ;EACI,gCAAA;AN6vCZ;;AMtvCA;EACI,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;ANyvCJ;AIh8CE;EEkMF;IFjMG,uBAAA;EJm8CD;AACF;AIh8CC;EAEC;IE2LF;MF1LG,gFAhBc;IJk9Cb;EACF;EIh8CA;IEuLF;MFtLG,6DAAA;IJm8CC;EACF;AACF;AIj8CE;EEkLF;IFjLG,wBAAA;EJo8CD;AACF;;AM3wCA;EACI,aAAA;EACA,eAAA;EACA,uBAAA;EACA,SAAA;AN8wCJ;AM7wCI;EAEI,qFAAA;EACA,kBAAA;EAEA,gBAAA;AN6wCR;AIl+CE;EEgNE;IF/MD,YAAA;EJq+CD;AACF;AIl+CC;EAEC;IEyME;MFxMD,sEAhBc;IJo/Cb;EACF;EIl+CA;IEqME;MFpMD,iDAAA;IJq+CC;EACF;AACF;AIn+CE;EEgME;IF/LD,cAAA;EJs+CD;AACF;AIx/CE;EEgNE;IF/MD,aAAA;EJ2/CD;AACF;AIx/CC;EAEC;IEyME;MFxMD,uEAhBc;IJ0gDb;EACF;EIx/CA;IEqME;MFpMD,kDAAA;IJ2/CC;EACF;AACF;AIz/CE;EEgME;IF/LD,eAAA;EJ4/CD;AACF;AMxzCQ;EACI,2BAAA;AN0zCZ;AMzzCW;EACK,4BAAA;AN2zChB;AMzzCW;EACC,iBAAA;AN2zCZ;AMtzCI;EACI,WAAA;EACA,YAAA;EACA,eAAA;EACA,4BAAA;ANwzCR;AMrzCC;EACO,kBAAA;EACA,OAAA;EACA,SAAA;EAGA,2BAAA;EACA,+BAAA;ANqzCR;AIpiDE;EEwOD;IFvOE,wBAAA;EJuiDD;AACF;AIpiDC;EAEC;IEiOD;MFhOE,kFAhBc;IJsjDb;EACF;EIpiDA;IE6ND;MF5NE,4DAAA;IJuiDC;EACF;AACF;AIriDE;EEwND;IFvNE,wBAAA;EJwiDD;AACF;AI1jDE;EEwOD;IFvOE,sBAAA;EJ6jDD;AACF;AI1jDC;EAEC;IEiOD;MFhOE,gFAhBc;IJ4kDb;EACF;EI1jDA;IE6ND;MF5NE,6DAAA;IJ6jDC;EACF;AACF;AI3jDE;EEwND;IFvNE,uBAAA;EJ8jDD;AACF;AM91CC;EACO,eAAA;EACA,WAAA;EACA,qBAAA;ANg2CR;AM/1CQ;EAJP;IAKW,eAAA;ENk2CV;AACF;AM/1CC;EACO,eAAA;EACA,WAAA;ANi2CR;AMh2CQ;EAHP;IAIW,eAAA;ENm2CV;AACF;;AInmDE;EEsQF;IFrQG,yBAAA;EJumDD;AACF;AIpmDC;EAEC;IE+PF;MF9PG,mFAhBc;IJsnDb;EACF;EIpmDA;IE2PF;MF1PG,8DAAA;IJumDC;EACF;AACF;AIrmDE;EEsPF;IFrPG,yBAAA;EJwmDD;AACF;AMl3CI;EACI,aAAA;EACA,eAAA;EACA,uBAAA;ANo3CR;AI/nDE;EEwQE;IFvQD,YAAA;EJkoDD;AACF;AI/nDC;EAEC;IEiQE;MFhQD,qEAhBc;IJipDb;EACF;EI/nDA;IE6PE;MF5PD,kDAAA;IJkoDC;EACF;AACF;AIhoDE;EEwPE;IFvPD,aAAA;EJmoDD;AACF;AMt4CI;EACI,kBAAA;EACA,gBAAA;ANw4CR;AMp4CY;EACI,UAAA;EACA,mBAAA;ANs4ChB;AI7pDE;EE2RE;IF1RD,gBAAA;EJgqDD;AACF;AI7pDC;EAEC;IEoRE;MFnRD,4EAhBc;IJ+qDb;EACF;EI7pDA;IEgRE;MF/QD,wDAAA;IJgqDC;EACF;AACF;AI9pDE;EE2QE;IF1QD,iBAAA;EJiqDD;AACF;AInrDE;EE2RE;IF1RD,gBAAA;EJsrDD;AACF;AInrDC;EAEC;IEoRE;MFnRD,2EAhBc;IJqsDb;EACF;EInrDA;IEgRE;MF/QD,uDAAA;IJsrDC;EACF;AACF;AIprDE;EE2QE;IF1QD,iBAAA;EJurDD;AACF;AMz6CI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;AN26CR;AI9sDE;EEgSE;IF/RD,oBAAA;EJitDD;AACF;AI9sDC;EAEC;IEyRE;MFxRD,8EAhBc;IJguDb;EACF;EI9sDA;IEqRE;MFpRD,2DAAA;IJitDC;EACF;AACF;AI/sDE;EEgRE;IF/QD,qBAAA;EJktDD;AACF;AIpuDE;EEgSE;IF/RD,qBAAA;EJuuDD;AACF;AIpuDC;EAEC;IEyRE;MFxRD,6EAhBc;IJsvDb;EACF;EIpuDA;IEqRE;MFpRD,0DAAA;IJuuDC;EACF;AACF;AIruDE;EEgRE;IF/QD,sBAAA;EJwuDD;AACF;AMp9CQ;EANJ;IAOQ,eAAA;ENu9CV;AACF;AMp9CI;EACI,eAAA;EACA,gBAAA;ANs9CR;AInwDE;EEgTE;IF/SD,cAAA;EJswDD;AACF;AInwDC;EAEC;IEySE;MFxSD,wEAhBc;IJqxDb;EACF;EInwDA;IEqSE;MFpSD,gDAAA;IJswDC;EACF;AACF;AIpwDE;EEgSE;IF/RD,cAAA;EJuwDD;AACF;AIzxDE;EEgTE;IF/SD,gBAAA;EJ4xDD;AACF;AIzxDC;EAEC;IEySE;MFxSD,2EAhBc;IJ2yDb;EACF;EIzxDA;IEqSE;MFpSD,uDAAA;IJ4xDC;EACF;AACF;AI1xDE;EEgSE;IF/RD,iBAAA;EJ6xDD;AACF;AM1/CI;EACI,mBAAA;EACA,kBAAA;AN4/CR;AM1/CQ;EAJJ;IAKQ,eAAA;IACA,cAAA;EN6/CV;AACF;AM1/CI;EACI,kBAAA;AN4/CR;AM3/CQ;EAFJ;IAGQ,aAAA;EN8/CV;AACF;AM3/CI;EACI,WAAA;EACA,UAAA;EACA,UAAA;EACA,kBAAA;EACA,8FAAA;AN6/CR;AM3/CQ;EAPJ;IAQQ,WAAA;IACA,UAAA;EN8/CV;AACF;AM7/CQ;EAXJ;IAYQ,UAAA;IACA,SAAA;ENggDV;AACF;;AM7/CA;EACI,aAAA;EACA,eAAA;EACA,2BAAA;EACA,kBAAA;ANggDJ;AI31DE;EEuVF;IFtVG,mBAAA;EJ81DD;AACF;AI31DC;EAEC;IEgVF;MF/UG,6EAhBc;IJ62Db;EACF;EI31DA;IE4UF;MF3UG,8DAAA;IJ81DC;EACF;AACF;AI51DE;EEuUF;IFtUG,wBAAA;EJ+1DD;AACF;AIj3DE;EEuVF;IFtVG,qBAAA;EJo3DD;AACF;AIj3DC;EAEC;IEgVF;MF/UG,8EAhBc;IJm4Db;EACF;EIj3DA;IE4UF;MF3UG,sDAAA;IJo3DC;EACF;AACF;AIl3DE;EEuUF;IFtUG,qBAAA;EJq3DD;AACF;AIv4DE;EEuVF;IFtVG,sBAAA;EJ04DD;AACF;AIv4DC;EAEC;IEgVF;MF/UG,+EAhBc;IJy5Db;EACF;EIv4DA;IE4UF;MF3UG,4DAAA;IJ04DC;EACF;AACF;AIx4DE;EEuUF;IFtUG,uBAAA;EJ24DD;AACF;AM9jDI;EACI,mBAAA;EAEA,gBAAA;EACA,gBAAA;AN+jDR;AIl6DE;EE+VE;IF9VD,kBAAA;EJq6DD;AACF;AIl6DC;EAEC;IEwVE;MFvVD,2EAhBc;IJo7Db;EACF;EIl6DA;IEoVE;MFnVD,wDAAA;IJq6DC;EACF;AACF;AIn6DE;EE+UE;IF9UD,mBAAA;EJs6DD;AACF;AIx7DE;EE+VE;IF9VD,iBAAA;EJ27DD;AACF;AIx7DC;EAEC;IEwVE;MFvVD,6EAhBc;IJ08Db;EACF;EIx7DA;IEoVE;MFnVD,uDAAA;IJ27DC;EACF;AACF;AIz7DE;EE+UE;IF9UD,gBAAA;EJ47DD;AACF;AMzmDQ;EACI,WAAA;EACA,kBAAA;EAEA,WAAA;EACA,gCAAA;EACA,WAAA;EACA,SAAA;AN0mDZ;AIt9DE;EEqWM;IFpWL,eAAA;EJy9DD;AACF;AIt9DC;EAEC;IE8VM;MF7VL,yEAhBc;IJw+Db;EACF;EIt9DA;IE0VM;MFzVL,sDAAA;IJy9DC;EACF;AACF;AIv9DE;EEqVM;IFpVL,gBAAA;EJ09DD;AACF;AI5+DE;EE+VE;IF9VD,mBAAA;EJ++DD;AACF;AI5+DC;EAEC;IEwVE;MFvVD,6EAhBc;IJ8/Db;EACF;EI5+DA;IEoVE;MFnVD,8DAAA;IJ++DC;EACF;AACF;AI7+DE;EE+UE;IF9UD,wBAAA;EJg/DD;AACF;AMppDQ;EAGI;IAEI,UAAA;ENmpDd;AACF;AIvgEE;EEiXU;IFhXT,aAAA;EJ0gED;AACF;AIvgEC;EAEC;IE0WU;MFzWT,sEAhBc;IJyhEb;EACF;EIvgEA;IEsWU;MFrWT,mDAAA;IJ0gEC;EACF;AACF;AIxgEE;EEiWU;IFhWT,cAAA;EJ2gED;AACF;;AMlqDA;EACQ,gCAAA;EACA,aAAA;ANqqDR;AMpqDQ;EAHR;IAIY,aAAA;ENuqDV;AACF;AMtqDE;EACU,iBAAA;EACA,UAAA;EACA,gBAAA;EACA,kBAAA;ANwqDZ;AI7iEE;EEiYA;IFhYC,sBAAA;EJgjED;AACF;AI7iEC;EAEC;IE0XA;MFzXC,gFAhBc;IJ+jEb;EACF;EI7iEA;IEsXA;MFrXC,0DAAA;IJgjEC;EACF;AACF;AI9iEE;EEiXA;IFhXC,sBAAA;EJijED;AACF;AInkEE;EEiYA;IFhYC,0BAAA;EJskED;AACF;AInkEC;EAEC;IE0XA;MFzXC,oFAhBc;IJqlEb;EACF;EInkEA;IEsXA;MFrXC,8DAAA;IJskEC;EACF;AACF;AIpkEE;EEiXA;IFhXC,wBAAA;EJukED;AACF;AMjtDY;EACA,WAAA;EAGA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,kBAAA;EACA,yBAAA;ANitDZ;AIjmEE;EEwYU;IFvYT,iBAAA;EJomED;AACF;AIjmEC;EAEC;IEiYU;MFhYT,0EAhBc;IJmnEb;EACF;EIjmEA;IE6XU;MF5XT,qDAAA;IJomEC;EACF;AACF;AIlmEE;EEwXU;IFvXT,cAAA;EJqmED;AACF;AIvnEE;EEwYU;IFvYT,kBAAA;EJ0nED;AACF;AIvnEC;EAEC;IEiYU;MFhYT,2EAhBc;IJyoEb;EACF;EIvnEA;IE6XU;MF5XT,sDAAA;IJ0nEC;EACF;AACF;AIxnEE;EEwXU;IFvXT,eAAA;EJ2nED;AACF;AM5vDY;EATA;IAUI,aAAA;EN+vDd;AACF;AM3vDE;EACU,WAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;AN6vDZ;AIxpEE;EEuZA;IFtZC,mBAAA;EJ2pED;AACF;AIxpEC;EAEC;IEgZA;MF/YC,4EAhBc;IJ0qEb;EACF;EIxpEA;IE4YA;MF3YC,4DAAA;IJ2pEC;EACF;AACF;AIzpEE;EEuYA;IFtYC,uBAAA;EJ4pED;AACF;AI9qEE;EEuZA;IFtZC,qBAAA;EJirED;AACF;AI9qEC;EAEC;IEgZA;MF/YC,8EAhBc;IJgsEb;EACF;EI9qEA;IE4YA;MF3YC,sDAAA;IJirEC;EACF;AACF;AI/qEE;EEuYA;IFtYC,qBAAA;EJkrED;AACF;AMlyDY;EAXV;IAYc,YAAA;ENqyDd;AACF;AMlyDE;EACU,SAAA;EACA,aAAA;EACA,sBAAA;ANoyDZ;AI9sEE;EEuaA;IFtaC,oBAAA;EJitED;AACF;AI9sEC;EAEC;IEgaA;MF/ZC,4EAhBc;IJguEb;EACF;EI9sEA;IE4ZA;MF3ZC,uDAAA;IJitEC;EACF;AACF;AI/sEE;EEuZA;IFtZC,oBAAA;EJktED;AACF;AIpuEE;EEuaA;IFtaC,qBAAA;EJuuED;AACF;AIpuEC;EAEC;IEgaA;MF/ZC,uFAhBc;IJsvEb;EACF;EIpuEA;IE4ZA;MF3ZC,yEAAA;IJuuEC;EACF;AACF;AIruEE;EEuZA;IFtZC,6BAAA;EJwuED;AACF;AM70DY;EANV;IAOc,mBAAA;ENg1Dd;AACF;AM70DE;EACU,kBAAA;AN+0DZ;AM50DgB;EACI,WAAA;EACA,2BAAA;AN80DpB;AM70DoB;EACI,UAAA;EACA,0BAAA;AN+0DxB;AM50DgB;EACI,UAAA;AN80DpB;AMz0DE;EACU,cAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,gDAAA;EAiBA,wBAAA;AN2zDZ;AM30DY;EACI,WAAA;EACA,WAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,4BAAA;EACA,UAAA;EACA,kDAAA;AN60DhB;AM50DgB;EAXJ;IAYQ,aAAA;EN+0DlB;AACF;AMz0DE;EACU,UAAA;EACA,eAAA;EACA,gBAAA;EACA,6BAAA;AN20DZ;;AMt0DA;EACI,aAAA;ANy0DJ;AMx0DI;EAFJ;IAGQ,sBAAA;IACA,uBAAA;EN20DN;AACF;;AItzEE;EE8eF;IF7eG,iBAAA;EJ0zED;AACF;AIvzEC;EAEC;IEueF;MFteG,6EAhBc;IJy0Eb;EACF;EIvzEA;IEmeF;MFleG,sDAAA;IJ0zEC;EACF;AACF;AIxzEE;EE8dF;IF7dG,gBAAA;EJ2zED;AACF;AI70EE;EE8eF;IF7eG,qBAAA;EJg1ED;AACF;AI70EC;EAEC;IEueF;MFteG,8EAhBc;IJ+1Eb;EACF;EI70EA;IEmeF;MFleG,sDAAA;IJg1EC;EACF;AACF;AI90EE;EE8dF;IF7dG,qBAAA;EJi1ED;AACF;AM/2DE;EACU,WAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;ANi3DZ;AIz2EE;EEofA;IFnfC,wBAAA;EJ42ED;AACF;AIz2EC;EAEC;IE6eA;MF5eC,kFAhBc;IJ23Eb;EACF;EIz2EA;IEyeA;MFxeC,4DAAA;IJ42EC;EACF;AACF;AI12EE;EEoeA;IFneC,wBAAA;EJ62ED;AACF;;AI/3EE;EEkgBF;IFjgBG,kBAAA;EJm4ED;AACF;AIh4EC;EAEC;IE2fF;MF1fG,uEAhBc;IJk5Eb;EACF;EIh4EA;IEufF;MFtfG,kDAAA;IJm4EC;EACF;AACF;AIj4EE;EEkfF;IFjfG,iBAAA;EJo4ED;AACF;AIt5EE;EEkgBF;IFjgBG,uBAAA;EJy5ED;AACF;AIt5EC;EAEC;IE2fF;MF1fG,gFAhBc;IJw6Eb;EACF;EIt5EA;IEufF;MFtfG,6DAAA;IJy5EC;EACF;AACF;AIv5EE;EEkfF;IFjfG,wBAAA;EJ05ED;AACF;AMp6DI;EACI,aAAA;ANs6DR;AMr6DQ;EAFJ;IAGQ,sBAAA;ENw6DV;AACF;;AMp6DI;EADJ;IAEQ,cAAA;ENw6DN;AACF;AMv6DI;EACI,uBAAA;EACA,4BAAA;ANy6DR;AMx6DQ;EACI,oBAAA;AN06DZ;AMt6DI;EACI,mBAAA;ANw6DR;AIp8EE;EE2hBE;IF1hBD,gBAAA;EJu8ED;AACF;AIp8EC;EAEC;IEohBE;MFnhBD,4EAhBc;IJs9Eb;EACF;EIp8EA;IEghBE;MF/gBD,wDAAA;IJu8EC;EACF;AACF;AIr8EE;EE2gBE;IF1gBD,iBAAA;EJw8ED;AACF;AI19EE;EE2hBE;IF1hBD,iBAAA;EJ69ED;AACF;AI19EC;EAEC;IEohBE;MFnhBD,4EAhBc;IJ4+Eb;EACF;EI19EA;IEghBE;MF/gBD,uDAAA;IJ69EC;EACF;AACF;AI39EE;EE2gBE;IF1gBD,iBAAA;EJ89ED;AACF;AIh/EE;EEiiBE;IFhiBD,iBAAA;EJm/ED;AACF;AIh/EC;EAEC;IE0hBE;MFzhBD,2DAhBc;IJkgFb;EACF;EIh/EA;IEshBE;MFrhBD,sDAAA;IJm/EC;EACF;AACF;AIj/EE;EEihBE;IFhhBD,eAAA;EJo/ED;AACF;AItgFE;EEqiBE;IFpiBD,sBAAA;EJygFD;AACF;AItgFC;EAEC;IE8hBE;MF7hBD,iFAhBc;IJwhFb;EACF;EItgFA;IE0hBE;MFzhBD,0DAAA;IJygFC;EACF;AACF;AIvgFE;EEqhBE;IFphBD,sBAAA;EJ0gFD;AACF;AI5hFE;EEqiBE;IFpiBD,sBAAA;EJ+hFD;AACF;AI5hFC;EAEC;IE8hBE;MF7hBD,gFAhBc;IJ8iFb;EACF;EI5hFA;IE0hBE;MFzhBD,6DAAA;IJ+hFC;EACF;AACF;AI7hFE;EEqhBE;IFphBD,uBAAA;EJgiFD;AACF;AIljFE;EEqiBE;IFpiBD,gBAAA;EJqjFD;AACF;AIljFC;EAEC;IE8hBE;MF7hBD,2EAhBc;IJokFb;EACF;EIljFA;IE0hBE;MFzhBD,sDAAA;IJqjFC;EACF;AACF;AInjFE;EEqhBE;IFphBD,gBAAA;EJsjFD;AACF;AIxkFE;EEqiBE;IFpiBD,eAAA;EJ2kFD;AACF;AIxkFC;EAEC;IE8hBE;MF7hBD,oEAhBc;IJ0lFb;EACF;EIxkFA;IE0hBE;MFzhBD,gDAAA;IJ2kFC;EACF;AACF;AIzkFE;EEqhBE;IFphBD,YAAA;EJ4kFD;AACF;AI9lFE;EE4iBE;IF3iBD,gBAAA;EJimFD;AACF;AI9lFC;EAEC;IEqiBE;MFpiBD,2EAhBc;IJgnFb;EACF;EI9lFA;IEiiBE;MFhiBD,sDAAA;IJimFC;EACF;AACF;AI/lFE;EE4hBE;IF3hBD,gBAAA;EJkmFD;AACF;AIpnFE;EE4iBE;IF3iBD,iBAAA;EJunFD;AACF;AIpnFC;EAEC;IEqiBE;MFpiBD,4EAhBc;IJsoFb;EACF;EIpnFA;IEiiBE;MFhiBD,uDAAA;IJunFC;EACF;AACF;AIrnFE;EE4hBE;IF3hBD,iBAAA;EJwnFD;AACF;;AI1oFE;EEijBF;IFhjBG,sBAAA;EJ8oFD;AACF;AI3oFC;EAEC;IE0iBF;MFziBG,6EAhBc;IJ6pFb;EACF;EI3oFA;IEsiBF;MFriBG,yDAAA;IJ8oFC;EACF;AACF;AI5oFE;EEiiBF;IFhiBG,mBAAA;EJ+oFD;AACF;AM9mEI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,YAAA;ANgnER;AIvqFE;EEmjBE;IFljBD,wBAAA;EJ0qFD;AACF;AIvqFC;EAEC;IE4iBE;MF3iBD,gFAhBc;IJyrFb;EACF;EIvqFA;IEwiBE;MFviBD,4DAAA;IJ0qFC;EACF;AACF;AIxqFE;EEmiBE;IFliBD,sBAAA;EJ2qFD;AACF;AMloEI;EAII,eAAA;EACA,gBAAA;EACA,gBAAA;ANioER;AIlsFE;EE2jBE;IF1jBD,sBAAA;EJqsFD;AACF;AIlsFC;EAEC;IEojBE;MFnjBD,+EAhBc;IJotFb;EACF;EIlsFA;IEgjBE;MF/iBD,0DAAA;IJqsFC;EACF;AACF;AInsFE;EE2iBE;IF1iBD,qBAAA;EJssFD;AACF;AIxtFE;EE2jBE;IF1jBD,wBAAA;EJ2tFD;AACF;AIxtFC;EAEC;IEojBE;MFnjBD,kFAhBc;IJ0uFb;EACF;EIxtFA;IEgjBE;MF/iBD,6DAAA;IJ2tFC;EACF;AACF;AIztFE;EE2iBE;IF1iBD,wBAAA;EJ4tFD;AACF;AI9uFE;EE2jBE;IF1jBD,gBAAA;EJivFD;AACF;AI9uFC;EAEC;IEojBE;MFnjBD,0EAhBc;IJgwFb;EACF;EI9uFA;IEgjBE;MF/iBD,mDAAA;IJivFC;EACF;AACF;AI/uFE;EE2iBE;IF1iBD,cAAA;EJkvFD;AACF;AMjsEQ;EARJ;IASQ,iBAAA;IACA,kBAAA;ENosEV;AACF;AMlsEQ;EAbJ;IAeQ,cAAA;IACA,eAAA;ENosEV;AACF;AIhxFE;EE2jBE;IF1jBD,oBAAA;EJmxFD;AACF;AIhxFC;EAEC;IEojBE;MFnjBD,4EAhBc;IJkyFb;EACF;EIhxFA;IEgjBE;MF/iBD,yDAAA;IJmxFC;EACF;AACF;AIjxFE;EE2iBE;IF1iBD,qBAAA;EJoxFD;AACF;AItyFE;EE+kBE;IF9kBD,qBAAA;EJyyFD;AACF;AItyFC;EAEC;IEwkBE;MFvkBD,8EAhBc;IJwzFb;EACF;EItyFA;IEokBE;MFnkBD,yDAAA;IJyyFC;EACF;AACF;AIvyFE;EE+jBE;IF9jBD,oBAAA;EJ0yFD;AACF;AM1uEQ;EAHJ;IAIQ,iBAAA;EN6uEV;AACF;AIj0FE;EE+kBE;IF9kBD,mBAAA;EJo0FD;AACF;AIj0FC;EAEC;IEwkBE;MFvkBD,2EAhBc;IJm1Fb;EACF;EIj0FA;IEokBE;MFnkBD,wDAAA;IJo0FC;EACF;AACF;AIl0FE;EE+jBE;IF9jBD,oBAAA;EJq0FD;AACF;;AIv1FE;EE6lBF;IF5lBG,yBAAA;EJ21FD;AACF;AIx1FC;EAEC;IEslBF;MFrlBG,oFAhBc;IJ02Fb;EACF;EIx1FA;IEklBF;MFjlBG,+DAAA;IJ21FC;EACF;AACF;AIz1FE;EE6kBF;IF5kBG,yBAAA;EJ41FD;AACF;AM5wEI;EAEI,kBAAA;EACA,gBAAA;EACA,gBAAA;AN6wER;AIn3FE;EEkmBE;IFjmBD,kBAAA;EJs3FD;AACF;AIn3FC;EAEC;IE2lBE;MF1lBD,4EAhBc;IJq4Fb;EACF;EIn3FA;IEulBE;MFtlBD,0DAAA;IJs3FC;EACF;AACF;AIp3FE;EEklBE;IFjlBD,oBAAA;EJu3FD;AACF;AIz4FE;EEkmBE;IFjmBD,uBAAA;EJ44FD;AACF;AIz4FC;EAEC;IE2lBE;MF1lBD,8EAhBc;IJ25Fb;EACF;EIz4FA;IEulBE;MFtlBD,0DAAA;IJ44FC;EACF;AACF;AI14FE;EEklBE;IFjlBD,qBAAA;EJ64FD;AACF;AMrzEI;EACI,aAAA;EACA,eAAA;EACA,uBAAA;ANuzER;AIp6FE;EE0mBE;IFzmBD,cAAA;EJu6FD;AACF;AIp6FC;EAEC;IEmmBE;MFlmBD,qEAhBc;IJs7Fb;EACF;EIp6FA;IE+lBE;MF9lBD,iDAAA;IJu6FC;EACF;AACF;AIr6FE;EE0lBE;IFzlBD,WAAA;EJw6FD;AACF;AM10EQ;EANJ;IAOQ,2BAAA;EN60EV;AACF;AM10EI;EAGI,kBAAA;AN00ER;AIl8FE;EEqnBE;IFpnBD,eAAA;EJq8FD;AACF;AIl8FC;EAEC;IE8mBE;MF7mBD,2EAhBc;IJo9Fb;EACF;EIl8FA;IE0mBE;MFzmBD,qDAAA;IJq8FC;EACF;AACF;AIn8FE;EEqmBE;IFpmBD,gBAAA;EJs8FD;AACF;AIx9FE;EEqnBE;IFpnBD,qBAAA;EJ29FD;AACF;AIx9FC;EAEC;IE8mBE;MF7mBD,8EAhBc;IJ0+Fb;EACF;EIx9FA;IE0mBE;MFzmBD,2DAAA;IJ29FC;EACF;AACF;AIz9FE;EEqmBE;IFpmBD,sBAAA;EJ49FD;AACF;AMp3EQ;EALJ;IAMQ,WAAA;ENu3EV;AACF;AMp3EI;EAEI,kBAAA;EACA,MAAA;EACA,OAAA;ANq3ER;AIx/FE;EE+nBE;IF9nBD,eAAA;EJ2/FD;AACF;AIx/FC;EAEC;IEwnBE;MFvnBD,yEAhBc;IJ0gGb;EACF;EIx/FA;IEonBE;MFnnBD,sDAAA;IJ2/FC;EACF;AACF;AIz/FE;EE+mBE;IF9mBD,gBAAA;EJ4/FD;AACF;AMx4EI;EAEI,gBAAA;EACA,gBAAA;EACA,mBAAA;ANy4ER;AInhGE;EEsoBE;IFroBD,iBAAA;EJshGD;AACF;AInhGC;EAEC;IE+nBE;MF9nBD,yEAhBc;IJqiGb;EACF;EInhGA;IE2nBE;MF1nBD,sDAAA;IJshGC;EACF;AACF;AIphGE;EEsnBE;IFrnBD,kBAAA;EJuhGD;AACF;AM55EI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;AN85ER;AM35EI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;AN65ER;AM35EY;EACI,2BAAA;AN65EhB;AMx5EI;EACI,oBAAA;EACA,+BAAA;AN05ER;;AMp5EA;EAGI,gCAAA;EACA,gBAAA;ANq5EJ;AIlkGE;EEyqBF;IFxqBG,iBAAA;EJqkGD;AACF;AIlkGC;EAEC;IEkqBF;MFjqBG,0EAhBc;IJolGb;EACF;EIlkGA;IE8pBF;MF7pBG,0DAAA;IJqkGC;EACF;AACF;AInkGE;EEypBF;IFxpBG,qBAAA;EJskGD;AACF;AIxlGE;EEyqBF;IFxqBG,wBAAA;EJ2lGD;AACF;AIxlGC;EAEC;IEkqBF;MFjqBG,kFAhBc;IJ0mGb;EACF;EIxlGA;IE8pBF;MF7pBG,6DAAA;IJ2lGC;EACF;AACF;AIzlGE;EEypBF;IFxpBG,wBAAA;EJ4lGD;AACF;AMh8EI;EACI,kBAAA;ANk8ER;AMj8EQ;EACI,WAAA;EAGA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,kBAAA;EACA,yBAAA;ANi8EZ;AIznGE;EEgrBM;IF/qBL,iBAAA;EJ4nGD;AACF;AIznGC;EAEC;IEyqBM;MFxqBL,0EAhBc;IJ2oGb;EACF;EIznGA;IEqqBM;MFpqBL,qDAAA;IJ4nGC;EACF;AACF;AI1nGE;EEgqBM;IF/pBL,cAAA;EJ6nGD;AACF;AI/oGE;EEgrBM;IF/qBL,kBAAA;EJkpGD;AACF;AI/oGC;EAEC;IEyqBM;MFxqBL,2EAhBc;IJiqGb;EACF;EI/oGA;IEqqBM;MFpqBL,sDAAA;IJkpGC;EACF;AACF;AIhpGE;EEgqBM;IF/pBL,eAAA;EJmpGD;AACF;AM5+EY;EATJ;IAUQ,aAAA;EN++Ed;AACF;AM3+EI;EACI,UAAA;AN6+ER;AM1+EI;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;AN4+ER;AIlrGE;EEysBE;IFxsBD,eAAA;EJqrGD;AACF;AIlrGC;EAEC;IEksBE;MFjsBD,yEAhBc;IJosGb;EACF;EIlrGA;IE8rBE;MF7rBD,sDAAA;IJqrGC;EACF;AACF;AInrGE;EEyrBE;IFxrBD,gBAAA;EJsrGD;AACF;AIxsGE;EEysBE;IFxsBD,sBAAA;EJ2sGD;AACF;AIxsGC;EAEC;IEksBE;MFjsBD,+EAhBc;IJ0tGb;EACF;EIxsGA;IE8rBE;MF7rBD,yDAAA;IJ2sGC;EACF;AACF;AIzsGE;EEyrBE;IFxrBD,sBAAA;EJ4sGD;AACF;AMhhFI;EACI,WAAA;EAEA,gBAAA;EACA,gBAAA;EACA,kBAAA;ANihFR;AIpuGE;EE8sBE;IF7sBD,iBAAA;EJuuGD;AACF;AIpuGC;EAEC;IEusBE;MFtsBD,2EAhBc;IJsvGb;EACF;EIpuGA;IEmsBE;MFlsBD,0DAAA;IJuuGC;EACF;AACF;AIruGE;EE8rBE;IF7rBD,oBAAA;EJwuGD;AACF;AI1vGE;EE8sBE;IF7sBD,iBAAA;EJ6vGD;AACF;AI1vGC;EAEC;IEusBE;MFtsBD,4EAhBc;IJ4wGb;EACF;EI1vGA;IEmsBE;MFlsBD,sDAAA;IJ6vGC;EACF;AACF;AI3vGE;EE8rBE;IF7rBD,eAAA;EJ8vGD;AACF;AIhxGE;EE8sBE;IF7sBD,wBAAA;EJmxGD;AACF;AIhxGC;EAEC;IEusBE;MFtsBD,kFAhBc;IJkyGb;EACF;EIhxGA;IEmsBE;MFlsBD,6DAAA;IJmxGC;EACF;AACF;AIjxGE;EE8rBE;IF7rBD,wBAAA;EJoxGD;AACF;AM9kFI;EACI,cAAA;EACA,gBAAA;EACA,gBAAA;ANglFR;;AM5kFA;EACI,UAAA;EACA,SAAA;EAEA,kBAAA;AN8kFJ;AIjzGE;EE+tBF;IF9tBG,eAAA;EJozGD;AACF;AIjzGC;EAEC;IEwtBF;MFvtBG,+EAbe;IJg0Gd;EACF;EIjzGA;IEotBF;MFntBG,oEAAA;IJozGC;EACF;AACF;AIlzGE;EE+sBF;IF9sBG,uBAAA;EJqzGD;AACF;AMlmFI;EANJ;IAOQ,aAAA;ENqmFN;AACF;AMpmFI;EACI,WAAA;EACA,kBAAA;EAEA,aAAA;EACA,WAAA;EAEA,sBAAA;ANomFR;AIn1GE;EEwuBE;IFvuBD,eAAA;EJs1GD;AACF;AIn1GC;EAEC;IEiuBE;MFhuBD,4EAbe;IJk2Gd;EACF;EIn1GA;IE6tBE;MF5tBD,wDAAA;IJs1GC;EACF;AACF;AIp1GE;EEwtBE;IFvtBD,gBAAA;EJu1GD;AACF;AIz2GE;EEwuBE;IFvuBD,cAAA;EJ42GD;AACF;AIz2GC;EAEC;IEiuBE;MFhuBD,8CAhBc;IJ23Gb;EACF;EIz2GA;IE6tBE;MF5tBD,8CAAA;IJ42GC;EACF;AACF;AI12GE;EEwtBE;IFvtBD,WAAA;EJ62GD;AACF;AM9oFQ;EATJ;IAUQ,aAAA;ENipFV;AACF;AM/oFI;EACI,WAAA;EACA,kBAAA;EAEA,aAAA;EACA,WAAA;EAEA,sBAAA;EACA,wBAAA;AN+oFR;AI54GE;EEqvBE;IFpvBD,aAAA;EJ+4GD;AACF;AI54GC;EAEC;IE8uBE;MF7uBD,uEAbe;IJ25Gd;EACF;EI54GA;IE0uBE;MFzuBD,mDAAA;IJ+4GC;EACF;AACF;AI74GE;EEquBE;IFpuBD,cAAA;EJg5GD;AACF;AIl6GE;EEqvBE;IFpvBD,eAAA;EJq6GD;AACF;AIl6GC;EAEC;IE8uBE;MF7uBD,yEAhBc;IJo7Gb;EACF;EIl6GA;IE0uBE;MFzuBD,sDAAA;IJq6GC;EACF;AACF;AIn6GE;EEquBE;IFpuBD,gBAAA;EJs6GD;AACF;AMzrFQ;EAVJ;IAWQ,aAAA;EN4rFV;AACF;;AI77GE;EEwwBF;IFvwBG,sBAAA;EJi8GD;AACF;AI97GC;EAEC;IEiwBF;MFhwBG,gFAhBc;IJg9Gb;EACF;EI97GA;IE6vBF;MF5vBG,uDAAA;IJi8GC;EACF;AACF;AI/7GE;EEwvBF;IFvvBG,sBAAA;EJk8GD;AACF;AIp9GE;EEwwBF;IFvwBG,yBAAA;EJu9GD;AACF;AIp9GC;EAEC;IEiwBF;MFhwBG,mFAhBc;IJs+Gb;EACF;EIp9GA;IE6vBF;MF5vBG,0DAAA;IJu9GC;EACF;AACF;AIr9GE;EEwvBF;IFvvBG,yBAAA;EJw9GD;AACF;AM/tFI;EACI,gBAAA;EACA,aAAA;EACA,mBAAA;ANiuFR;AM/tFQ;EALJ;IAMQ,sBAAA;ENkuFV;AACF;AIp/GE;EEqxBE;IFpxBD,sBAAA;EJu/GD;AACF;AIp/GC;EAEC;IE8wBE;MF7wBD,wFAhBc;IJsgHb;EACF;EIp/GA;IE0wBE;MFzwBD,0EAAA;IJu/GC;EACF;AACF;AIr/GE;EEqwBE;IFpwBD,6BAAA;EJw/GD;AACF;AMlvFQ;EAHJ;IAIQ,eAAA;IACA,WAAA;IACA,kBAAA;ENqvFV;AACF;AMlvFI;EACI,gBAAA;ANovFR;AIphHE;EE+xBE;IF9xBD,wBAAA;EJuhHD;AACF;AIphHC;EAEC;IEwxBE;MFvxBD,kFAhBc;IJsiHb;EACF;EIphHA;IEoxBE;MFnxBD,4DAAA;IJuhHC;EACF;AACF;AIrhHE;EE+wBE;IF9wBD,wBAAA;EJwhHD;AACF;AMtwFI;EAEI,gBAAA;EACA,gBAAA;ANuwFR;AI9iHE;EEoyBE;IFnyBD,mBAAA;EJijHD;AACF;AI9iHC;EAEC;IE6xBE;MF5xBD,0EAhBc;IJgkHb;EACF;EI9iHA;IEyxBE;MFxxBD,sDAAA;IJijHC;EACF;AACF;AI/iHE;EEoxBE;IFnxBD,iBAAA;EJkjHD;AACF;AIpkHE;EEoyBE;IFnyBD,eAAA;EJukHD;AACF;AIpkHC;EAEC;IE6xBE;MF5xBD,4DAhBc;IJslHb;EACF;EIpkHA;IEyxBE;MFxxBD,sDAAA;IJukHC;EACF;AACF;AIrkHE;EEoxBE;IFnxBD,gBAAA;EJwkHD;AACF;AMhzFQ;EANJ;IAOQ,WAAA;IACA,mBAAA;ENmzFV;AACF;AMhzFI;EACI,aAAA;EACA,eAAA;EACA,8BAAA;ANkzFR;AIrmHE;EEgzBE;IF/yBD,iBAAA;EJwmHD;AACF;AIrmHC;EAEC;IEyyBE;MFxyBD,0EAhBc;IJunHb;EACF;EIrmHA;IEqyBE;MFpyBD,qDAAA;IJwmHC;EACF;AACF;AItmHE;EEgyBE;IF/xBD,iBAAA;EJymHD;AACF;AMr0FQ;EANJ;IAOQ,UAAA;IACA,uBAAA;ENw0FV;AACF;;AIjoHE;EEg0BF;IF/zBG,qBAAA;EJqoHD;AACF;AIloHC;EAEC;IEyzBF;MFxzBG,+EAhBc;IJopHb;EACF;EIloHA;IEqzBF;MFpzBG,6DAAA;IJqoHC;EACF;AACF;AInoHE;EEgzBF;IF/yBG,wBAAA;EJsoHD;AACF;AMt1FI;EACI,kBAAA;ANw1FR;AMt1FQ;EACI,WAAA;EACA,kBAAA;EACA,OAAA;EAEA,WAAA;EACA,WAAA;EACA,gCAAA;ANu1FZ;AInqHE;EEq0BM;IFp0BL,cAAA;EJsqHD;AACF;AInqHC;EAEC;IE8zBM;MF7zBL,2EAbe;IJkrHd;EACF;EInqHA;IE0zBM;MFzzBL,uDAAA;IJsqHC;EACF;AACF;AIpqHE;EEqzBM;IFpzBL,iBAAA;EJuqHD;AACF;AMz2FI;EAGI,gBAAA;EACA,gBAAA;EACA,kBAAA;ANy2FR;AI9rHE;EEg1BE;IF/0BD,eAAA;EJisHD;AACF;AI9rHC;EAEC;IEy0BE;MFx0BD,sEAhBc;IJgtHb;EACF;EI9rHA;IEq0BE;MFp0BD,oDAAA;IJisHC;EACF;AACF;AI/rHE;EEg0BE;IF/zBD,iBAAA;EJksHD;AACF;AIptHE;EEg1BE;IF/0BD,uBAAA;EJutHD;AACF;AIptHC;EAEC;IEy0BE;MFx0BD,gFAhBc;IJsuHb;EACF;EIptHA;IEq0BE;MFp0BD,2DAAA;IJutHC;EACF;AACF;AIrtHE;EEg0BE;IF/zBD,uBAAA;EJwtHD;AACF;AMl5FI;EACI,aAAA;EACA,eAAA;EACA,uBAAA;ANo5FR;AI/uHE;EEw1BE;IFv1BD,aAAA;EJkvHD;AACF;AI/uHC;EAEC;IEi1BE;MFh1BD,qEAbe;IJ8vHd;EACF;EI/uHA;IE60BE;MF50BD,iDAAA;IJkvHC;EACF;AACF;AIhvHE;EEw0BE;IFv0BD,WAAA;EJmvHD;AACF;AIrwHE;EEw1BE;IFv1BD,mBAAA;EJwwHD;AACF;AIrwHC;EAEC;IEi1BE;MFh1BD,4EAhBc;IJuxHb;EACF;EIrwHA;IE60BE;MF50BD,4DAAA;IJwwHC;EACF;AACF;AItwHE;EEw0BE;IFv0BD,uBAAA;EJywHD;AACF;AM37FI;EAEI,kBAAA;AN47FR;AI9xHE;EEg2BE;IF/1BD,gBAAA;EJiyHD;AACF;AI9xHC;EAEC;IEy1BE;MFx1BD,0EAhBc;IJgzHb;EACF;EI9xHA;IEq1BE;MFp1BD,mDAAA;IJiyHC;EACF;AACF;AI/xHE;EEg1BE;IF/0BD,cAAA;EJkyHD;AACF;AM/8FI;EACI,kBAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,kBAAA;EACA,sBAAA;EAEA,gBAAA;EACA,gBAAA;ANg9FR;AI9zHE;EEq2BE;IFp2BD,mBAAA;EJi0HD;AACF;AI9zHC;EAEC;IE81BE;MF71BD,4EAhBc;IJg1Hb;EACF;EI9zHA;IE01BE;MFz1BD,uDAAA;IJi0HC;EACF;AACF;AI/zHE;EEq1BE;IFp1BD,mBAAA;EJk0HD;AACF;AMn+FI;EAEI,WAAA;ANo+FR;AIv1HE;EEi3BE;IFh3BD,wBAAA;EJ01HD;AACF;AIv1HC;EAEC;IE02BE;MFz2BD,kFAhBc;IJy2Hb;EACF;EIv1HA;IEs2BE;MFr2BD,4DAAA;IJ01HC;EACF;AACF;AIx1HE;EEi2BE;IFh2BD,wBAAA;EJ21HD;AACF;AMv/FI;EAGI,gBAAA;EACA,gBAAA;ANu/FR;AIj3HE;EEs3BE;IFr3BD,kBAAA;EJo3HD;AACF;AIj3HC;EAEC;IE+2BE;MF92BD,uEAhBc;IJm4Hb;EACF;EIj3HA;IE22BE;MF12BD,mDAAA;IJo3HC;EACF;AACF;AIl3HE;EEs2BE;IFr2BD,eAAA;EJq3HD;AACF;AIv4HE;EEs3BE;IFr3BD,gBAAA;EJ04HD;AACF;AIv4HC;EAEC;IE+2BE;MF92BD,0EAhBc;IJy5Hb;EACF;EIv4HA;IE22BE;MF12BD,oDAAA;IJ04HC;EACF;AACF;AIx4HE;EEs2BE;IFr2BD,eAAA;EJ24HD;AACF;AMhiGI;EACI,cAAA;ANkiGR;;AIh6HE;EEo4BF;IFn4BG,qBAAA;EJo6HD;AACF;AIj6HC;EAEC;IE63BF;MF53BG,8EAhBc;IJm7Hb;EACF;EIj6HA;IEy3BF;MFx3BG,wDAAA;IJo6HC;EACF;AACF;AIl6HE;EEo3BF;IFn3BG,mBAAA;EJq6HD;AACF;AIv7HE;EEo4BF;IFn4BG,wBAAA;EJ07HD;AACF;AIv7HC;EAEC;IE63BF;MF53BG,iFAhBc;IJy8Hb;EACF;EIv7HA;IEy3BF;MFx3BG,2DAAA;IJ07HC;EACF;AACF;AIx7HE;EEo3BF;IFn3BG,sBAAA;EJ27HD;AACF;AMtkGI;EACI,gBAAA;EACA,kBAAA;ANwkGR;AMrkGI;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;ANukGR;AMrkGQ;EALJ;IAMQ,sBAAA;IACA,uBAAA;ENwkGV;AACF;AMrkGI;EAGI,gBAAA;EACA,gBAAA;ANqkGR;AIh+HE;EEu5BE;IFt5BD,iBAAA;EJm+HD;AACF;AIh+HC;EAEC;IEg5BE;MF/4BD,6EAhBc;IJk/Hb;EACF;EIh+HA;IE44BE;MF34BD,uDAAA;IJm+HC;EACF;AACF;AIj+HE;EEu4BE;IFt4BD,gBAAA;EJo+HD;AACF;AIt/HE;EEu5BE;IFt5BD,kBAAA;EJy/HD;AACF;AIt/HC;EAEC;IEg5BE;MF/4BD,2EAhBc;IJwgIb;EACF;EIt/HA;IE44BE;MF34BD,wDAAA;IJy/HC;EACF;AACF;AIv/HE;EEu4BE;IFt4BD,mBAAA;EJ0/HD;AACF;AMhnGQ;EACI,kBAAA;EACA,UAAA;ANknGZ;AMjnGY;EACI,WAAA;EACA,kBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;EACA,gCAAA;ANmnGhB;AM9mGI;EAEI,kBAAA;EACA,SAAA;EACA,YAAA;AN+mGR;AI9hIE;EE26BE;IF16BD,gBAAA;EJiiID;AACF;AI9hIC;EAEC;IEo6BE;MFn6BD,2EAhBc;IJgjIb;EACF;EI9hIA;IEg6BE;MF/5BD,sDAAA;IJiiIC;EACF;AACF;AI/hIE;EE25BE;IF15BD,gBAAA;EJkiID;AACF;AMnoGQ;EANJ;IAOQ,aAAA;ENsoGV;AACF;AMnoGI;EACI,+BAAA;ANqoGR;AMpoGQ;EACI,0BAAA;ANsoGZ;;AO/oIA;EACI,kBAAA;APkpIJ","sourcesContent":["@use \"sass:math\";\r\n\r\n// Підключення міксинів ===========================================================================================================================================================================================================================================================================\r\n@import \"base/mixins\";\r\n\r\n// Підключення шрифтів ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - додати при підключенні через плагін\r\n\r\n// Підключити, якщо є локальні файли шрифтів\r\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');\r\n\r\n// Підключення іконкових шрифтів ==============================================================================================================================================================================================================================================================================\r\n// Підключити, якщо є файл іконкового шрифту\r\n//@import \"fonts/icons\";\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// Налаштування шаблону ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// За замовчуванням шрифт ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: \"Inter\";\r\n$fontSize: toRem(15); // де 14(px) - розмір шрифту за замовчуванням з макету\r\n\r\n// Основні кольори\r\n$mainColor: #0E0E0E; // Колір шрифту за замовчуванням\r\n\r\n// Палітра кольорів\r\n// @import \"base/colors-palette\";\r\n\r\n// Налаштування адаптивної сітки ===============================================================================================================================================================================================================================================================================================\r\n\r\n// Мінімальна ширина сторінки\r\n$minWidth: 320;\r\n// Ширина полотна (макету)\r\n$maxWidth: 1366;\r\n// Ширина обмежуючого контейнера (0 = немає обмеження)\r\n$maxWidthContainer: 1170;\r\n// Загальний відступ у контейнера\r\n// (30 = по 15px ліворуч і праворуч, 0 = немає відступу)\r\n$containerPadding: 30;\r\n\r\n// Ширина спрацьовування першого брейкпоінту\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поїнти\r\n$pc: em($containerWidth); // ПК, ноутбуки, деякі планшети у горизонтальному положенні\r\n$tablet: em(991.98); // Планшети, деякі телефони в горизонтальному положенні\r\n$mobile: em(767.98); // Телефони L\r\n$mobileSmall: em(479.98); // Телефони S\r\n\r\n// Тип адаптива:\r\n// 1 = чуйність (у контейнера немає брейкпоінтів),\r\n// 2 = по брейк-поїнт (контейнер змінює свою ширину по брейк-поїнт)\r\n$responsiveType: 1;\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// Обнулення ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import \"base/null\";\r\n\r\n// Стилі тега BODY ============================================================================================================================================================================================================================================================================================================================================================================================\r\nbody {\r\n\t// Скролл заблоковано\r\n\t.lock & {\r\n\t\toverflow: hidden;\r\n\t\ttouch-action: none;\r\n\t\toverscroll-behavior: none;\r\n\t}\r\n\t// Сайт завантажений\r\n\t.loaded & {\r\n\t}\r\n}\r\n// Оболонка wrapper ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n\tmin-height: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\toverflow: hidden;\r\n\t@supports (overflow: clip) {\r\n\t\toverflow: clip;\r\n\t}\r\n\t// Притискаємо footer\r\n\t> main {\r\n\t\tflex: 1 1 auto;\r\n\t}\r\n\t// Фікс для слайдерів\r\n\t> * {\r\n\t\tmin-width: 0;\r\n\t}\r\n}\r\n// Обмежуючий контейнер ======================================================================================================================================================================================================================\r\n/*\r\n(i) Стилі будуть застосовуватись до\r\nвсіх класів, що містять *__container\r\nНаприклад header__container, main__container і т.п.\r\nСніппет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n\t// Чуйна\r\n\t[class*=\"__container\"] {\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: toRem($containerWidth);\r\n\t\t\tmargin: 0 auto;\r\n\t\t}\r\n\t\t@if ($containerPadding>0) {\r\n\t\t\t@if ($maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\r\n\t\t\t} @else {\r\n\t\t\t\t@include adaptiveValue(\"padding-left\", math.div($containerPadding, 2), 15);\r\n\t\t\t\t@include adaptiveValue(\"padding-right\", math.div($containerPadding, 2), 15);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n} @else {\r\n\t// Брейк-поїнтами\r\n\t[class*=\"__container\"] {\r\n\t\tmargin: 0 auto;\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: toRem($containerWidth);\r\n\t\t} @else {\r\n\t\t\t@if ($containerPadding>0) {\r\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $pc) {\r\n\t\t\tmax-width: toRem(970);\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmax-width: toRem(750);\r\n\t\t}\r\n\t\t@media (max-width: $mobile) {\r\n\t\t\tmax-width: none;\r\n\t\t\t@if ($containerPadding>0 and $maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// Підключення базових стилів, шаблонів (заготівель) та допоміжних класів\r\n// Для підключення/вимкнення конкретних стилів дивись base.scss\r\n@import \"base\";\r\n\r\n// Підключення стилів загальних елементів проекту\r\n@import \"common\";\r\n\r\n// Підключення стилів окремих блоків\r\n@import \"header\";\r\n@import \"footer\";\r\n\r\n// Підключення стилів окремих сторінок\r\n@import \"home\";\r\n\r\n// Змінні\r\n\r\n@import \"utils/vars\";\r\n","* {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: 0px;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n\t// outline: none;\r\n}\r\na:focus,\r\na:active {\r\n\t// outline: none;\r\n}\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tmin-width: $minWidth + px;\r\n}\r\nbody {\r\n\tcolor: $mainColor;\r\n\tline-height: 1;\r\n\tfont-family: $fontFamily;\r\n\tfont-size: $fontSize;\r\n\t//text-rendering: optimizeLegibility;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n\tfont-family: $fontFamily;\r\n\tfont-size: inherit;\r\n\tline-height: inherit;\r\n}\r\nbutton {\r\n\tcursor: pointer;\r\n\tcolor: inherit;\r\n\tbackground-color: transparent;\r\n}\r\na {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\nul li {\r\n\tlist-style: none;\r\n}\r\nimg {\r\n\tvertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n","// Загальний файл елементів форм\r\n// Для підключення/відключення стилів конкретного елемента форми дивись base/forms/forms.scss\r\n@import \"base/forms/forms\";\r\n\r\n// Стилі попапів\r\n// @import \"base/popup\";\r\n\r\n// Стилі спойлерів\r\n// @import \"base/spollers\";\r\n\r\n// Стилі табів\r\n// @import \"base/tabs\";\r\n\r\n// Стилі мап\r\n// @import \"base/maps\";\r\n\r\n// Стилі блоку \"показати ще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стилі для липкого блоку\r\n// @import \"base/sticky\";\r\n\r\n// Стилі для повноекранного блоку\r\n// @import \"base/fullscreen\";\r\n\r\n// Стилі для поекраної прокрутки\r\n// Styles for fullpage scroll\r\n// @import \"base/fullpage\";\r\n\r\n// Стилі для ripple ефекту\r\n// Styles for ripple effect\r\n// @import \"base/ripple\";\r\n\r\n// Стилі для кастомного курсору\r\n// Styles for custom cursor\r\n// @import \"base/cursor\";\r\n\r\n// Стилі для чуйних картинок (IBG)\r\n// Сніппет (HTML): ibg (div з картинкою та класами)\r\n// Сніппет (HTML): ibga (a з картинкою та класами)\r\n[class*=\"-ibg\"] {\r\n\tposition: relative;\r\n\timg {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tobject-fit: cover;\r\n\t}\r\n}\r\n[class*=\"-ibg--contain\"] {\r\n\timg {\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n// Шаблони (заготівлі)\r\n// @extend %ім'я шаблону;\r\n// Сніппет (SCSS): ex\r\n\r\n// Лічильник для списку\r\n%listCounter {\r\n\tlist-style-type: none;\r\n\tcounter-reset: item;\r\n\tli {\r\n\t\tposition: relative;\r\n\t\t&:before {\r\n\t\t\tcounter-increment: item;\r\n\t\t\tcontent: counter(item);\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t}\r\n}\r\n// Адаптивне відео\r\n%responsiveVideo {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 0;\r\n\tpadding-bottom: 56.25%;\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n// Відео як фон\r\n%videoBackground {\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: fixed;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t\tz-index: -100;\r\n\t\ttransform: translateX(-50%) translateY(-50%);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}\r\n// Сірий фільтр\r\n%grayfilter {\r\n\ttransition: all 0.3s ease 0s;\r\n\tfilter: grayscale(1);\r\n\t@media (any-hover: hover) {\r\n\t\t&:hover {\r\n\t\t\tfilter: grayscale(0);\r\n\t\t}\r\n\t}\r\n}\r\n// Скасувати виділення\r\n%noselect {\r\n\tuser-select: none;\r\n}\r\n// Дзеркальне відображення\r\n%mirror {\r\n\ttransform: scale(-1, 1);\r\n}\r\n// Плавний скролл\r\n%smoothscroll {\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n// Сховати скролл\r\n%hidescroll {\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n","//====================================================================================================\r\n\r\n.header {\r\n\tbackground-color: var(--dark-cl);\r\n\tcolor: #fff;\r\n\t&__menu {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\t@media (max-width:580px){\r\n\t\t\tjustify-content: space-between;\r\n\t\t\theight: 52px;\r\n\t\t  }\r\n\t}\r\n}\r\n\r\n.logo {\r\n\tmargin-right: auto;\r\n\t@include adaptiveValue(\"font-size\", 20, 15);\r\n}\r\n.menu {\r\n\r\n\t&__body {\r\n\t\t@include adaptiveValue(\"padding-top\", 35, 25);\r\n\t\t@include adaptiveValue(\"padding-bottom\", 35, 25);\r\n\t\tdisplay: flex;\r\n\t\tz-index: 10;\r\n\t\t@media (max-width:580px){\r\n\t\t\tflex-direction: column;\r\n\t\t\talign-items: center;\r\n\t\t  }\r\n\t}\r\n\r\n\t&__list {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\t@include adaptiveValue(\"margin-right\", 60, 50);\r\n\t\t@include adaptiveValue(\"gap\", 40, 30);\r\n\r\n\t\t@media (max-width:580px){\r\n\t\t\tflex-direction: column;\r\n\t\t\talign-items: center;\r\n\t\t\tmargin: 0;\r\n\t\t\tflex: 2;\r\n\t\t  }\r\n\t  }\r\n\r\n\t&__link {\r\n\t\t@include adaptiveValue(\"padding-top\", 35, 25);\r\n\t\t@include adaptiveValue(\"padding-bottom\", 35, 25);\r\n\t\tfont-size: 16px;\r\n\t\tposition: relative;\r\n\r\n\t\t@media (max-width:580px){\r\n\t\t\tfont-size: 28px;\r\n\t\t  }\r\n\t\t\r\n\t\t&::before {\r\n\t\t\tcontent: '';\r\n\t\t\tposition: absolute;\r\n\t\t\tdisplay: block;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 45px;\r\n\t\t\theight: 1px;\r\n\t\t\twidth: 100%;\r\n\t\t\tbackground-color: #fff;\r\n\t\t\ttransform: translateX(-100%);\r\n\t\t\topacity: 0;\r\n\t\t\tvisibility: hidden;\r\n\t\t\ttransition: visibility 0.5s ease, opacity 0.3s ease, transform 0.3s ease;\r\n\t\t}\r\n\r\n\t\t&:hover {\r\n\t\t\t&::before {\r\n\t\t\t\ttransform: translateX(0);\r\n\t\t\t\topacity: 1;\r\n\t\t\t\tvisibility: visible;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t&__link.current {\r\n\t\t&::before {\r\n\t\t\ttransform: translateX(0);\r\n\t\t\topacity: 1;\r\n\t\t\tvisibility: visible;\r\n\t\t}\r\n\t}\r\n}\r\n.socials-list {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\t@include adaptiveValue(\"gap\", 15, 10);\r\n\r\n\t@media (max-width:580px){\r\n\t\tgap: 30px;\r\n\t\tflex: 1;\r\n  \t}\r\n\r\n\t&__icon {\r\n\t\t@media (max-width:580px){\r\n\t\t\twidth: 25px;\r\n\t\t\theight: 25px;\r\n  \t}\r\n\t}\r\n}\r\n\r\n//====================================================================================================\r\n\r\n//Burger\r\n@media (max-width: 580px) {\r\n\t.menu__body {\r\n\t\tposition: fixed;\r\n\t\ttop: 52px;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttransform: translateX(-100%);\r\n\t\tbackground-color: var(--dark-cl);\r\n\t\toverflow: auto;\r\n\t\ttransition: transform 0.3s ease;\r\n\t}\r\n}\r\n\r\n.icon-menu {\r\n\t@media (min-width:580px){\r\n\t\tdisplay: none;  \r\n\t}\r\n\t@media (max-width: 580px) {\r\n\t\tdisplay: block;\r\n\t\tposition: relative;\r\n\t\twidth: toRem(25);\r\n\t\theight: toRem(14);\r\n\t\tz-index: 5;\r\n\t\t@media (any-hover: none) {\r\n\t\t\tcursor: default;\r\n\t\t}\r\n\t\tspan,\r\n\t\t&::before,\r\n\t\t&::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\tright: 0;\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: toRem(2);\r\n\t\t\tbackground-color: #fff;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t\t&::after {\r\n\t\t\tbottom: 0;\r\n\t\t\twidth: 50%;\r\n\t\t}\r\n\t\tspan {\r\n\t\t\ttop: calc(50% - toRem(1));\r\n\t\t}\r\n\t\t.menu-open & {\r\n\t\t\t+.menu__body {\r\n\t\t\t\ttransform: translateX(0);\r\n\t\t\t}\r\n\t\t\tspan {\r\n\t\t\t\twidth: 0;\r\n\t\t\t}\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t}\r\n\t\t\t&::before {\r\n\t\t\t\ttop: calc(50% - toRem(1));\r\n\t\t\t\ttransform: rotate(-45deg);\r\n\t\t\t}\r\n\t\t\t&::after {\r\n\t\t\t\tbottom: calc(50% - toRem(1));\r\n\t\t\t\ttransform: rotate(45deg);\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t}\r\n\t\t\t\r\n\t\t}\t\r\n\t}\r\n\t\r\n\t\r\n\r\n","//Підключення шрифту\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc:\r\n\t\t\turl(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"),\r\n\t\t\turl(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from: 100) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function toRem($px, $current: 16) {\r\n\t$result: math.div($px, $current) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивна властивість (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $keepSize: 0, $widthFrom: $containerWidth, $widthTo: $minWidth) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поїнти в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плаваючого значення\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{toRem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Отримання значення властивості\r\n\t$propertyValue: #{\"clamp(\" toRem($minSize) \",\" $flyValue \",\" toRem($startSize) \")\"};\r\n\t// Якщо негативні значення\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" toRem($startSize) \",\" $flyValue \",\" toRem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Встановлюємо значення за замовчуванням\r\n\t@if $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: toRem($startSize);\r\n\t\t}\r\n\t}\r\n\t// Адаптуємо розмір у проміжку між зазначеними ширинами в'юпорту\r\n\t@media (min-width: $widthToMedia) and (max-width: $widthFromMedia) {\r\n\t\t// Якщо підтримується clamp();\r\n\t\t@supports (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: $propertyValue;\r\n\t\t}\r\n\t\t// Якщо не підтримується clamp();\r\n\t\t@supports not (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: calc(#{toRem($minSize)} + #{$addSize} * (100vw - #{toRem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t\t}\r\n\t}\r\n\t@if $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: toRem($minSize);\r\n\t\t}\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.footer {\r\n    background-color: var();\r\n    &__container {\r\n    }\r\n}\r\n.block-wrapper {\r\n}\r\n.left-block {\r\n\r\n    &__text {\r\n    }\r\n\r\n    &__contacts {\r\n    }\r\n\r\n    &__socials {\r\n    }\r\n}\r\n.footer-logo {\r\n}\r\n.logo {\r\n}\r\n.contacts {\r\n\r\n    &__item {\r\n    }\r\n\r\n    &__link {\r\n    }\r\n}\r\n.socials {\r\n\r\n    &__item {\r\n    }\r\n\r\n    &__icon {\r\n    }\r\n}\r\n.right-block {\r\n}\r\n.subscribe {\r\n}\r\n.footer-form {\r\n\r\n    &__custom-placeholder {\r\n    }\r\n\r\n    &__input {\r\n    }\r\n\r\n    &__button {\r\n    }\r\n}\r\n.links-block {\r\n}\r\n.footer-nav {\r\n\r\n    &__item {\r\n    }\r\n\r\n    &__link {\r\n    }\r\n}\r\n.footer-credits {\r\n}\r\n\r\n//====================================================================================================\r\n","//====================================================================================================\r\n// Hero section\r\n//====================================================================================================\r\n.hero {\r\n    background-color: var(--dark-cl);\r\n    position: relative;\r\n    @include adaptiveValue(\"height\", 480, 270);\r\n    &__container {\r\n        position: relative;\r\n    }\r\n}\r\n\r\n.swiper-counter {\r\n    position: relative;\r\n    @include adaptiveValue(\"bottom\", 70, 30);\r\n    @include adaptiveValue(\"left\", 200, 15);\r\n    @include adaptiveValue(\"width\", 80, 50);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    color: #fff;\r\n    &__item {\r\n        &::after {\r\n            content: '';\r\n            height: 1px;\r\n            @include adaptiveValue(\"width\", 20, 10);\r\n            background-color: #fff;\r\n            position: absolute;\r\n            top: 7px;\r\n            @include adaptiveValue(\"left\", 30, 19);\r\n    }\r\n\r\n    &span {\r\n        @include adaptiveValue(\"font-size\", 14, 12);  \r\n    }\r\n    }\r\n}\r\n\r\n.block-title {\r\n        position: absolute;\r\n        @include adaptiveValue(\"top\", 175, 50);\r\n        @include adaptiveValue(\"left\", 200, 30);\r\n        @include adaptiveValue(\"width\", 516, 300);\r\n        padding: 40px 0 40px 0;\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 70, 36);\r\n        font-weight: 500;\r\n        line-height: 1.1;\r\n        color: #fff;\r\n        text-shadow: 4px 4px 2px rgba(0,0,0,0.6);\r\n        &::before {\r\n            content: '';\r\n            position: absolute;\r\n            top: 0;\r\n            left: 0;\r\n            height: 1px;\r\n            width: 70px;\r\n            background-color: #fff;\r\n        }\r\n    }\r\n    &::before {\r\n        content: '';\r\n        height: 1px;\r\n        width: 70px;\r\n    }\r\n}\r\n\r\n.btn-view {\r\n    position: absolute;\r\n    @include adaptiveValue(\"top\", 390, 160);\r\n    @include adaptiveValue(\"right\", 178, 20);\r\n    @include adaptiveValue(\"width\", 90, 55);\r\n    @include adaptiveValue(\"height\", 90, 55);\r\n    background-color: #fff;\r\n    color: var(--dark-cl);\r\n    border-radius: 50%;\r\n    @include adaptiveValue(\"font-size\", 15, 12);\r\n    font-weight: 500;\r\n    transition: transform 0.4s ease, box-shadow 0.4s ease;\r\n\r\n    &:hover {\r\n        transform: scale(1.1);\r\n        box-shadow: 2px 2px 15px 8px #fff;\r\n    }\r\n}\r\n\r\n.swiper-slide {\r\n    &__img {\r\n         @include adaptiveValue(\"height\", 580, 220);\r\n    }\r\n}\r\n\r\n.swiper-button-prev {\r\n    position: absolute;\r\n    top: 225px;\r\n    @include adaptiveValue(\"left\", -50, 400);\r\n    @media (max-width:958px){\r\n        display: none;\r\n      }\r\n}\r\n.swiper-button-next {\r\n    position: absolute;\r\n    top: 225px;\r\n    @include adaptiveValue(\"right\", -50, 400);\r\n    @media (max-width:958px){\r\n        display: none;\r\n      }\r\n}\r\n\r\n//====================================================================================================\r\n// About-us section\r\n//====================================================================================================\r\n.about-us {\r\n    @include adaptiveValue(\"padding-top\", 256, 40);\r\n\r\n    &__container--big {\r\n        width: 1306px;\r\n        margin: 0 auto;\r\n    }\r\n}\r\n.intro-block {\r\n    @include adaptiveValue(\"width\", 615, 290);\r\n    @include adaptiveValue(\"margin-bottom\", 93, 40);\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    &__label {\r\n        @include adaptiveValue(\"margin-bottom\", 25, 15);\r\n        font-weight: 500;\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 34, 24);\r\n        line-height: 1.3;\r\n        font-weight: 500;\r\n    }\r\n}\r\n.info-block {\r\n    display: flex;\r\n    justify-content: center;\r\n    @include adaptiveValue(\"margin-bottom\", 160, 60);\r\n    @include adaptiveValue(\"gap\", 110, 40);\r\n    @media (max-width:580px){\r\n        flex-direction: column;\r\n        @include adaptiveValue(\"padding-left\", 40, 20);\r\n      }\r\n\r\n    &__item--top-line {\r\n        @include adaptiveValue(\"width\", 391, 200);\r\n        @include adaptiveValue(\"padding-top\", 34, 20);\r\n        position: relative\r\n    }\r\n\r\n    &__text--big {\r\n        @include adaptiveValue(\"font-size\", 20, 18);\r\n        line-height: 1.5;\r\n\r\n        &::before {\r\n            content: '';\r\n            position: absolute;\r\n            top: 0;\r\n            left: 0;\r\n            height: 1px;\r\n            @include adaptiveValue(\"width\", 400, 210);\r\n            background-color: var(--dark-cl)\r\n        }\r\n    }\r\n\r\n    &__item--action {\r\n        @include adaptiveValue(\"width\", 463, 250);\r\n    }\r\n\r\n    &__text--small {\r\n        @include adaptiveValue(\"font-size\", 17, 15);\r\n        @include adaptiveValue(\"margin-bottom\", 50, 25);\r\n        line-height: 1.6;\r\n    }\r\n}\r\n\r\n\r\n.btn span {\r\n    position: relative;\r\n    z-index: 50;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    @include adaptiveValue(\"padding-left\", 39, 18);\r\n    @media (max-width: 959.98px) {\r\n        padding-left: 0;\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n    @media (max-width: 469.98px) {\r\n        font-size: 13px;\r\n    }\r\n}\r\n\r\n.btn {\r\n    @include adaptiveValue(\"padding-top\", 19, 10);\r\n    @include adaptiveValue(\"padding-bottom\", 19, 10);\r\n    @include adaptiveValue(\"width\", 170, 80);\r\n    background-color: var(--dark-cl);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    overflow: hidden;\r\n    z-index: 2;\r\n    outline: 1px solid var(--dark-cl);\r\n    position: relative;\r\n    \r\n\r\n    &:hover {\r\n        span {\r\n            color: var(--dark-cl);\r\n        }\r\n        &::before {\r\n            transform: translateX(0);\r\n        }\r\n        &::after {\r\n            background-color: var(--dark-cl);\r\n        }\r\n    }\r\n\r\n    &::after {\r\n        content: '';\r\n        position: absolute;\r\n        @include adaptiveValue(\"top\", 25, 12);\r\n        @include adaptiveValue(\"right\", 38, 19);\r\n        width: 6px;\r\n        height: 6px;\r\n        border-radius: 50%;\r\n        background-color: #fff;\r\n        @media (max-width: 959.98px) {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    &::before {\r\n        content: '';\r\n        position: absolute;\r\n        height: 100%;\r\n        width: 100%;\r\n        background-color: #fff;\r\n        transform: translateX(-125%);\r\n        transition: transform 0.4s ease;\r\n    }\r\n\r\n    &--reverse {\r\n        background-color: #fff;\r\n        outline: 1px solid #fff;\r\n\r\n        &:hover {\r\n            &::after {\r\n                background-color: #fff;\r\n            }\r\n\r\n            span {\r\n                color: #fff;\r\n            }\r\n        }\r\n        span {\r\n            color: var(--dark-cl);\r\n            font-weight: 500;\r\n        }\r\n\r\n        &::after {\r\n            background-color: var(--dark-cl);\r\n        }\r\n\r\n        &::before {\r\n            background-color: var(--dark-cl);\r\n        }\r\n    }\r\n}\r\n//====================================================================================================\r\n// Directions section\r\n//====================================================================================================\r\n.directions {\r\n    max-width: 1336px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    @include adaptiveValue(\"padding-bottom\", 140, 70);\r\n}\r\n\r\n.works-list {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 30px;\r\n    &__item {\r\n        @include adaptiveValue(\"width\", 304, 200);\r\n        background: linear-gradient(180deg, rgba(0, 0, 0, 0.13) 0%, rgba(0, 0, 0, 0.65) 100%);\r\n        position: relative;\r\n        @include adaptiveValue(\"height\", 400, 280);\r\n        overflow: hidden;\r\n        &:hover {\r\n            backdrop-filter: blur(10px);\r\n           .works-list__info {\r\n                transform: translateY(-16px);\r\n           }\r\n           .works-list__card {\r\n            filter: blur(7px);\r\n           }\r\n        }\r\n    }\r\n\r\n    &__card {\r\n        width: 100%;\r\n        height: 100%;\r\n        filter: blur(0);\r\n        transition: filter 0.5s ease;\r\n    }\r\n\r\n\t&__info {\r\n        position: absolute;\r\n        left: 0;\r\n        bottom: 0;\r\n        @include adaptiveValue(\"padding-right\", 93, 25);\r\n        @include adaptiveValue(\"padding-left\", 50, 25);\r\n        transform: translateY(16px);\r\n        transition: transform 0.5s ease;\r\n\t}\r\n\r\n\t&__text {\r\n        font-size: 20px;\r\n        color: #fff;\r\n        margin: 24px 0 24px 0;\r\n        @media (max-width: 499.98px) {\r\n            font-size: 18px; \r\n        }\r\n\t}\r\n\r\n\t&__more {\r\n        font-size: 16px;\r\n        color: #fff;\r\n        @media (max-width: 499.98px) {\r\n            font-size: 14px; \r\n        }\r\n\t}\r\n}\r\n//====================================================================================================\r\n// Directions section\r\n//====================================================================================================\r\n.featured {\r\n    @include adaptiveValue(\"padding-bottom\", 157, 75);\r\n    &__list {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        @include adaptiveValue(\"gap\", 100, 30);\r\n    }\r\n\r\n    &__item {\r\n        position: relative;\r\n        overflow: hidden;\r\n\r\n        &:hover,\r\n        &:focus {\r\n            .featured__btn {\r\n                opacity: 1;\r\n                visibility: visible;\r\n            }\r\n        }\r\n    }\r\n    &__image {\r\n        @include adaptiveValue(\"width\", 370, 185);\r\n        @include adaptiveValue(\"height\", 428, 214);\r\n    }\r\n\r\n    &__label {   \r\n        font-size: 24px;\r\n        font-weight: 500;\r\n        line-height: 1.4; \r\n        @include adaptiveValue(\"margin-top\", 34, 15);\r\n        @include adaptiveValue(\"margin-bottom\", 8, 4);\r\n        @media (max-width: 599.98px) {\r\n            font-size: 20px;\r\n        }\r\n    }\r\n\r\n    &__type {\r\n        font-size: 15px;\r\n        font-weight: 500;\r\n    }\r\n\r\n    &__image--big {\r\n        @include adaptiveValue(\"width\", 600, 280);\r\n        @include adaptiveValue(\"height\", 428, 194);\r\n    }\r\n\r\n    &__item--top {\r\n        padding-left: 100px;\r\n        padding-top: 160px;\r\n\r\n        @media (max-width: 1199.98px) {\r\n            padding-left: 0;\r\n            padding-top: 0;\r\n        }\r\n    }\r\n\r\n    &__item--bottom {\r\n        margin-top: -160px;\r\n        @media (max-width: 1199.98px) {\r\n            margin-top: 0;\r\n        }\r\n    }\r\n\r\n    &__btn {\r\n        left: 130px;\r\n        top: 200px;\r\n        opacity: 0;\r\n        visibility: hidden;\r\n        transition: opacity 0.5s ease, visibility 0.5s ease, transform 0.4s ease, box-shadow 0.4s ease;\r\n\r\n        @media (max-width: $mobile) {\r\n            left: 100px;\r\n            top: 100px;\r\n        }\r\n        @media (max-width: $mobileSmall) {\r\n            left: 66px;\r\n            top: 77px;\r\n        }\r\n    }\r\n}\r\n.introduction {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: first baseline;\r\n    position: relative;\r\n    @include adaptiveValue(\"margin-bottom\", 48, 25);\r\n    @include adaptiveValue(\"padding-left\", 100, 20);\r\n    @include adaptiveValue(\"padding-right\", 100, 50);\r\n    &__title {\r\n        margin-right: 375px;\r\n        @include adaptiveValue(\"font-size\", 100, 50);\r\n        font-weight: 500;\r\n        line-height: 1.1;\r\n        @include adaptiveValue(\"width\", 425, 250);\r\n        &::after {\r\n            content: '';\r\n            position: absolute;\r\n            @include adaptiveValue(\"width\", 70, 35);\r\n            height: 1px;\r\n            background-color: var(--dark-cl);\r\n            left: 680px;\r\n            top: 80px;\r\n        }\r\n        @media (max-width: 1199.98px) {\r\n            @include adaptiveValue(\"margin-bottom\", 48, 25);\r\n\r\n            &::after {\r\n                @include adaptiveValue(\"left\", 100, 50);\r\n                top: -40px;\r\n            }\r\n        }\r\n    }\r\n}\r\n//====================================================================================================\r\n// Process section\r\n//====================================================================================================\r\n.process {\r\n        background-color: var(--dark-cl);\r\n        height: 664px;\r\n        @media (max-width: 667.98px){\r\n            height: 764px;\r\n        }\r\n\t\t&__container {\r\n            max-width: 1300px;\r\n            z-index: 2;\r\n            overflow: hidden;\r\n            position: relative;\r\n            @include adaptiveValue(\"padding-top\", 149, 65);\r\n            @include adaptiveValue(\"padding-bottom\", 161, 70);\r\n            &::after {\r\n            content: '';\r\n            @include adaptiveValue(\"width\", 641, 200);\r\n            @include adaptiveValue(\"height\", 641, 200);\r\n            position: absolute;\r\n            right: -20%;\r\n            top: -35%;\r\n            border-radius: 50%;\r\n            background-color: #202020;\r\n            @media (max-width: 667.98px){\r\n                display: none;\r\n            }\r\n        }\r\n\t\t}\r\n\r\n\t\t&__title {\r\n            color: #FFF;\r\n            font-size: 48px;\r\n            font-weight: 500;\r\n            line-height: 1.2;\r\n            @include adaptiveValue(\"margin-bottom\", 80, 30); \r\n\r\n            @media (max-width: 667.98px){\r\n                @include adaptiveValue(\"padding-left\", 100, 20);\r\n            }\r\n\r\n            @media (max-width: 419.98px) {\r\n                width: 200px;\r\n            }\r\n\t\t}\r\n\r\n\t\t&__list {\r\n            gap: 24px;\r\n            display: flex;\r\n            flex-direction: column;\r\n            @include adaptiveValue(\"margin-left\", 60, 20);\r\n            @include adaptiveValue(\"margin-right\", 140, 0);\r\n            @media (max-width: 667.98px){\r\n                margin-bottom: 40px;\r\n            }\r\n\t\t}\r\n\r\n\t\t&__item {\r\n            position: relative;\r\n\r\n            &:hover {\r\n                .process__text {\r\n                    color: #fff;\r\n                    transform: translateX(20px);\r\n                    &::before {\r\n                        opacity: 1;\r\n                        transform: translateX(28%)\r\n                    }\r\n                }\r\n                .process__number {\r\n                    opacity: 1;\r\n                }\r\n            }\r\n\t\t}\r\n\r\n\t\t&__text {\r\n            color: #6F6F6F;\r\n            font-size: 24px;\r\n            font-weight: 500;\r\n            line-height: 1.4;\r\n            transition: color 0.4s ease, transform 0.4s ease;\r\n            &::before {\r\n                content: '';\r\n                width: 40px;\r\n                height: 1px;\r\n                background-color: #fff;\r\n                position: absolute;\r\n                left: -90px;\r\n                top: 17px;\r\n                transform: translateX(-100%);\r\n                opacity: 0;\r\n                transition: transform 0.4s ease, opacity 0.4s ease;\r\n                @media (max-width: 667.98px){\r\n                    display: none;\r\n                }\r\n            }\r\n\r\n            transform: translateX(0);\r\n\t\t}\r\n\r\n\t\t&__number {\r\n            opacity: 0;\r\n            font-size: 12px;\r\n            font-weight: 500;\r\n            transition: opacity 0.4s ease;\r\n\t\t}\r\n\r\n}\r\n\r\n.process-wrapper {\r\n    display: flex;\r\n    @media (max-width: 667.98px){\r\n        flex-direction: column;\r\n        justify-content: center;\r\n    }\r\n}\r\n\r\n.block-info {\r\n    @include adaptiveValue(\"width\", 395, 250);\r\n\r\n    @media (max-width: 667.98px){\r\n        @include adaptiveValue(\"padding-left\", 100, 20);\r\n    }\r\n\t\t&__text {\r\n            color: #FFF;\r\n            font-size: 17px;\r\n            font-weight: 400;\r\n            line-height: 1.5;\r\n            @include adaptiveValue(\"margin-bottom\", 53, 25); \r\n            \r\n\t\t}\r\n\r\n\t\t\r\n}\r\n//====================================================================================================\r\n//Create section\r\n//====================================================================================================\r\n.create {\r\n    @include adaptiveValue(\"padding-top\", 160, 80);\r\n    @include adaptiveValue(\"padding-bottom\", 140, 70);\r\n    &__container {\r\n    }\r\n\r\n    &__wrapper {\r\n        display: flex;\r\n        @media (max-width: 1037.98px) {\r\n            flex-direction: column;\r\n        }\r\n    }\r\n}\r\n.img-block {\r\n    @media (max-width: 1037.98px) {\r\n        margin: 0 auto;\r\n    }\r\n    &__item {\r\n        filter: grayscale(100%);\r\n        transition: filter 0.4s ease;\r\n        &:hover {\r\n            filter: grayscale(0);\r\n        }\r\n    }\r\n\r\n    &__item--big {\r\n        margin-bottom: 30px;\r\n        @include adaptiveValue(\"width\", 470, 235);\r\n        @include adaptiveValue(\"height\", 290, 145);\r\n    }\r\n\r\n    &__bottom {\r\n        @include adaptiveValue(\"width\", 575, 300);\r\n    }\r\n\r\n    &__item--small {\r\n        @include adaptiveValue(\"padding-left\", 130, 30);\r\n        @include adaptiveValue(\"margin-right\", 30, 15);\r\n        @include adaptiveValue(\"width\", 270, 135);\r\n        @include adaptiveValue(\"height\", 140, 80);\r\n    }\r\n\r\n    &__item--middle {\r\n        @include adaptiveValue(\"width\", 270, 135);\r\n        @include adaptiveValue(\"height\", 250, 125);\r\n    }\r\n}\r\n.create-info {\r\n    @include adaptiveValue(\"padding-top\", 93, 40);\r\n    &__title {\r\n        font-size: 28px;\r\n        font-weight: 500;\r\n        line-height: 1.3;\r\n        width: 357px;\r\n        @include adaptiveValue(\"margin-bottom\", 37, 20);\r\n    }\r\n\r\n    &__text {\r\n        @include adaptiveValue(\"padding-left\", 90, 20);\r\n        @include adaptiveValue(\"margin-bottom\", 53, 27);\r\n        @include adaptiveValue(\"width\", 438, 280);\r\n        font-size: 17px;\r\n        font-weight: 400;\r\n        line-height: 1.6; \r\n\r\n        @media (max-width: 1037.98px) {\r\n            margin-left: auto;\r\n            margin-right: auto;\r\n        }\r\n\r\n        @media (max-width: 483.98px) {\r\n            @include adaptiveValue(\"padding-left\", 40, 20);\r\n            margin-left: 0;\r\n            margin-right: 0;\r\n        }\r\n    }\r\n\r\n    &__btn {\r\n        @include adaptiveValue(\"margin-left\", 90, 20);\r\n\r\n        @media (max-width: 1037.98px) {\r\n            margin-left: auto;\r\n        }\r\n        @media (max-width: 483.98px) {\r\n            @include adaptiveValue(\"margin-left\", 40, 20);\r\n        }\r\n    }\r\n}\r\n//====================================================================================================\r\n//Values section\r\n//====================================================================================================\r\n.values {\r\n    @include adaptiveValue(\"padding-bottom\", 214, 107);\r\n    &__container {\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 100, 55);\r\n        text-align: center;\r\n        font-weight: 500;\r\n        line-height: 1.2;\r\n        @include adaptiveValue(\"margin-bottom\", 86, 40);\r\n    }\r\n\r\n    &__list {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        @include adaptiveValue(\"gap\", 75, 40);\r\n\r\n        @media (max-width: 651.98px) {\r\n            justify-content: flex-start;\r\n        }\r\n    }\r\n\r\n    &__item {\r\n        @include adaptiveValue(\"width\", 340, 250);\r\n        @include adaptiveValue(\"padding-left\", 100, 50);\r\n        position: relative;\r\n\r\n        @media (max-width: 651.98px) {\r\n            width: 100%;\r\n        }\r\n    }\r\n\r\n    &__img {\r\n        @include adaptiveValue(\"width\", 70, 35);\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n\r\n    &__label {\r\n        @include adaptiveValue(\"font-size\", 24, 20);\r\n        font-weight: 500;\r\n        line-height: 1.4; \r\n        margin-bottom: 17px;\r\n    }\r\n\r\n    &__text {  \r\n        font-size: 16px;\r\n        font-weight: 400;\r\n        line-height: 1.6;\r\n        margin-bottom: 19px;\r\n    }\r\n\r\n    &__more {\r\n        font-size: 16px;\r\n        font-weight: 500;\r\n        line-height: 1.6;\r\n        display: flex;\r\n        align-items: center; \r\n        &:hover {\r\n            .values__icon {\r\n                transform: translateX(15px);\r\n            }\r\n        }\r\n    }\r\n\r\n    &__icon {\r\n        fill: var(--dark-cl);\r\n        transition: transform 0.4s ease;\r\n    }\r\n}\r\n//====================================================================================================\r\n//Swiper section\r\n//====================================================================================================\r\n.swiper-section {\r\n    @include adaptiveValue(\"padding-top\", 128, 70);\r\n    @include adaptiveValue(\"padding-bottom\", 196, 70);\r\n    background-color: var(--dark-cl);\r\n    overflow: hidden;\r\n    &__container {\r\n        position: relative;\r\n        &::after {\r\n            content: '';\r\n            @include adaptiveValue(\"width\", 641, 200);\r\n            @include adaptiveValue(\"height\", 641, 200);\r\n            position: absolute;\r\n            left: 23%;\r\n            top: 23%;\r\n            border-radius: 50%;\r\n            background-color: #202020;\r\n            @media (max-width: 667.98px){\r\n                display: none;\r\n            } \r\n        }\r\n    }\r\n\r\n    &__wrapper {\r\n        z-index: 2;\r\n    }\r\n\r\n    &__slide {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    &__img-quote {\r\n        @include adaptiveValue(\"width\", 38, 19);\r\n        @include adaptiveValue(\"margin-bottom\", 92, 20);\r\n    }\r\n\r\n    &__text {\r\n        color: #FFF;\r\n        @include adaptiveValue(\"font-size\", 24, 15);\r\n        font-weight: 500;\r\n        line-height: 1.4;\r\n        text-align: center; \r\n        @include adaptiveValue(\"width\", 673, 300);\r\n        @include adaptiveValue(\"margin-bottom\", 33, 15);\r\n    }\r\n\r\n    &__author {\r\n        color: #969696;\r\n        font-weight: 400;\r\n        line-height: 1.3;\r\n    }\r\n}\r\n\r\n.second-counter {\r\n    z-index: 2;\r\n    left: 47%;\r\n    @include adaptiveValue(\"bottom\", -120, 0);\r\n    position: relative;\r\n\r\n    @media (max-width: $mobile) {\r\n        display: none;\r\n    }\r\n    &::before {\r\n        content: '';\r\n        position: absolute;\r\n        @include adaptiveValue(\"left\", -548, -135);\r\n        bottom: 405px;\r\n        height: 1px;\r\n        @include adaptiveValue(\"width\", 168, 80);\r\n        background-color: #fff;\r\n\r\n        @media (max-width: $mobile) {\r\n            display: none;\r\n        }\r\n    }\r\n    &::after {\r\n        content: '';\r\n        position: absolute;\r\n        @include adaptiveValue(\"right\", -576, -120);\r\n        bottom: 100px;\r\n        height: 1px;\r\n        @include adaptiveValue(\"width\", 70, 35);\r\n        background-color: #fff;\r\n        transform: rotate(90deg);\r\n\r\n        @media (max-width: $mobile) {\r\n            display: none;\r\n        }\r\n    }\r\n}\r\n\r\n//====================================================================================================\r\n//Clients section\r\n//====================================================================================================\r\n.clients {\r\n    @include adaptiveValue(\"padding-top\", 155, 75);\r\n    @include adaptiveValue(\"padding-bottom\", 155, 75);\r\n    &__container {\r\n        max-width: 975px;\r\n        display: flex;\r\n        align-items: center;\r\n\r\n        @media (max-width: 779.98px) {\r\n            flex-direction: column;\r\n        }\r\n    }\r\n\r\n    &__title-block {\r\n        @include adaptiveValue(\"margin-right\", 260, 0);\r\n\r\n        @media (max-width: 779.98px) {\r\n            margin-right: 0;\r\n            width: 100%;\r\n            text-align: center;\r\n        }\r\n    }\r\n\r\n    &__uppertitle {\r\n        font-weight: 500;\r\n        @include adaptiveValue(\"margin-bottom\", 27, 15);\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 34, 24);\r\n        font-weight: 500;\r\n        line-height: 1.3;\r\n        @include adaptiveValue(\"width\", 268, 125); \r\n\r\n        @media (max-width: 779.98px) {\r\n            width: 100%;\r\n            margin-bottom: 20px;\r\n        }\r\n    }\r\n\r\n    &__list {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: space-between;\r\n        @include adaptiveValue(\"row-gap\", 50, 30);\r\n\r\n        @media (max-width: 779.98px) {\r\n            width: 70%;\r\n            justify-content: center;\r\n        }\r\n    }\r\n\r\n}\r\n//====================================================================================================\r\n//New section\r\n//====================================================================================================\r\n.new {\r\n    @include adaptiveValue(\"padding-bottom\", 160, 70);\r\n    &__container {\r\n        position: relative;\r\n\r\n        &::after {\r\n            content: '';\r\n            position: absolute;\r\n            left: 0;\r\n            @include adaptiveValue(\"bottom\", -160, -70);\r\n            height: 1px;\r\n            width: 100%;\r\n            background-color: var(--dark-cl);\r\n        }\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 48, 24);\r\n        @include adaptiveValue(\"margin-bottom\", 90, 30);\r\n        font-weight: 500;\r\n        line-height: 1.2; \r\n        text-align: center;\r\n    }\r\n\r\n    &__list {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        @include adaptiveValue(\"gap\", 30, 40);\r\n        @include adaptiveValue(\"margin-bottom\", 80, 30);\r\n    }\r\n\r\n    &__item {\r\n        @include adaptiveValue(\"width\", 370, 280);\r\n        position: relative\r\n    }\r\n\r\n    &__date {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        width: 35%;\r\n        padding: 10px 15px;\r\n        background-color: #fff;\r\n        @include adaptiveValue(\"font-size\", 14, 10);\r\n        font-weight: 400;\r\n        line-height: 1.3;\r\n    }\r\n\r\n    &__image {\r\n        @include adaptiveValue(\"margin-bottom\", 27, 15);\r\n        width: 100%;\r\n    }\r\n\r\n    &__text {\r\n        @include adaptiveValue(\"font-size\", 20, 16);\r\n        @include adaptiveValue(\"width\", 294, 260);\r\n        font-weight: 500;\r\n        line-height: 1.5; \r\n    }\r\n\r\n    &__btn {\r\n        margin: 0 auto;\r\n    }\r\n}\r\n//====================================================================================================\r\n//Work section\r\n//====================================================================================================\r\n.work {\r\n    @include adaptiveValue(\"padding-top\", 158, 40);\r\n    @include adaptiveValue(\"padding-bottom\", 158, 40);\r\n    &__container {\r\n        max-width: 960px;\r\n        position: relative;\r\n    }\r\n\r\n    &__block {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n\r\n        @media (max-width: 649.98px) {\r\n            flex-direction: column;\r\n            justify-content: center;\r\n        }\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"width\", 483, 250);\r\n        @include adaptiveValue(\"font-size\", 100, 50);\r\n        font-weight: 500;\r\n        line-height: 1.2;\r\n        span {\r\n            position: relative;\r\n            z-index: 2;\r\n            &::after {\r\n                content: '';\r\n                position: absolute;\r\n                left: 0;\r\n                bottom: 0;\r\n                width: 100%;\r\n                height: 1px;\r\n                background-color: var(--dark-cl);\r\n            }\r\n        }\r\n    }\r\n\r\n    &__img {\r\n        @include adaptiveValue(\"width\", 230, 115);\r\n        position: absolute;\r\n        left: 47%;\r\n        bottom: 38px;\r\n\r\n        @media (max-width: 649.98px) {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    &__link {\r\n        transition: transform 0.4s ease;\r\n        &:hover {\r\n            transform: translateX(50%);\r\n        }\r\n    }\r\n\r\n    \r\n}\r\n\r\n\r\n\r\n",":root {\r\n    --dark-cl: #0E0E0E;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bb001eb2ac9e588cf575")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kOGQyNmM1NmFmOGIyYTg1N2RkOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw4R0FBOEcsa0JBQWtCO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTywwVkFBMFYsTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sWUFBWSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sU0FBUyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsT0FBTyxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE1BQU0sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLE1BQU0sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsUUFBUSxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFFBQVEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLFFBQVEsVUFBVSxXQUFXLFFBQVEsUUFBUSxVQUFVLFdBQVcsUUFBUSxRQUFRLFVBQVUsUUFBUSxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFFBQVEsUUFBUSxLQUFLLFVBQVUsUUFBUSxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLFdBQVcsT0FBTyxNQUFNLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLEtBQUssV0FBVyxPQUFPLE1BQU0sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLE1BQU0sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLE1BQU0sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLFdBQVcsT0FBTyxNQUFNLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxVQUFVLFFBQVEsT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8s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QUE4Qyx1Q0FBdUMsd0NBQXdDLGFBQWEsU0FBUyxzQkFBc0Isd0RBQXdELDJEQUEyRCw2QkFBNkIsNkJBQTZCLGtCQUFrQixtQ0FBbUMsMkJBQTJCLDBCQUEwQixnQ0FBZ0MsdUNBQXVDLDRCQUE0Qiw4QkFBOEIsZ0NBQWdDLGdDQUFnQyxxREFBcUQsaUJBQWlCLGFBQWEsU0FBUyxvQkFBb0Isd0RBQXdELCtCQUErQixzQkFBc0IseUJBQXlCLDhDQUE4Qyw4QkFBOEIsYUFBYSxTQUFTLHFCQUFxQiw0Q0FBNEMscUJBQXFCLDJDQUEyQyxhQUFhLFNBQVMsaUJBQWlCLDBCQUEwQiwyQkFBMkIsS0FBSyxtQkFBbUI7QUFDdjZoRjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUMxcEl2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbioge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDMyMHB4O1xufVxuXG5ib2R5IHtcbiAgY29sb3I6ICMwRTBFMEU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LWZhbWlseTogXCJJbnRlclwiO1xuICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxudWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5pbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4ubG9jayBib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xufVxuLndyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQHN1cHBvcnRzIChvdmVyZmxvdzogY2xpcCkge1xuICAud3JhcHBlciB7XG4gICAgb3ZlcmZsb3c6IGNsaXA7XG4gIH1cbn1cbi53cmFwcGVyID4gbWFpbiB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLndyYXBwZXIgPiAqIHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4vKlxuKGkpINCh0YLQuNC70ZYg0LHRg9C00YPRgtGMINC30LDRgdGC0L7RgdC+0LLRg9Cy0LDRgtC40YHRjCDQtNC+XG7QstGB0ZbRhSDQutC70LDRgdGW0LIsINGJ0L4g0LzRltGB0YLRj9GC0YwgKl9fY29udGFpbmVyXG7QndCw0L/RgNC40LrQu9Cw0LQgaGVhZGVyX19jb250YWluZXIsIG1haW5fX2NvbnRhaW5lciDRliDRgi7Qvy5cbtCh0L3RltC/0L/QtdGCIChIVE1MKTogY250XG4qL1xuW2NsYXNzKj1fX2NvbnRhaW5lcl0ge1xuICBtYXgtd2lkdGg6IDc1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAwLjkzNzVyZW07XG59XG5cbltjbGFzcyo9LWliZ10ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5bY2xhc3MqPS1pYmddIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuW2NsYXNzKj0taWJnLS1jb250YWluXSBpbWcge1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmhlYWRlcl9fbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLmhlYWRlcl9fbWVudSB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogNTJweDtcbiAgfVxufVxuXG4ubG9nbyB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5sb2dvIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuODIzODYzNjM2NHJlbSAgKyAgMC41NjgxODE4MTgydncgLCAxLjI1cmVtICkpIHtcbiAgICAubG9nbyB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjgyMzg2MzYzNjRyZW0gICsgIDAuNTY4MTgxODE4MnZ3ICwgMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjgyMzg2MzYzNjRyZW0gICsgIDAuNTY4MTgxODE4MnZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLmxvZ28ge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuOTM3NXJlbSArIDAuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5sb2dvIHtcbiAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgfVxufVxuXG4ubWVudV9fYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDEwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm1lbnVfX2JvZHkge1xuICAgIHBhZGRpbmctdG9wOiAyLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApKSB7XG4gICAgLm1lbnVfX2JvZHkge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApKSB7XG4gICAgLm1lbnVfX2JvZHkge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMS41NjI1cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9fYm9keSB7XG4gICAgcGFkZGluZy10b3A6IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm1lbnVfX2JvZHkge1xuICAgIHBhZGRpbmctYm90dG9tOiAyLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApKSB7XG4gICAgLm1lbnVfX2JvZHkge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApKSB7XG4gICAgLm1lbnVfX2JvZHkge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMS41NjI1cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9fYm9keSB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5tZW51X19ib2R5IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbi5tZW51X19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5tZW51X19saXN0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1yaWdodDogY2xhbXAoIDMuMTI1cmVtICwgMi44OTc3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5tZW51X19saXN0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogY2xhbXAoIDMuMTI1cmVtICwgMi44OTc3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDMuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMy4xMjVyZW0gLCAyLjg5NzcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMy43NXJlbSApKSB7XG4gICAgLm1lbnVfX2xpc3Qge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDMuMTI1cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9fbGlzdCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm1lbnVfX2xpc3Qge1xuICAgIGdhcDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChnYXA6IGNsYW1wKCAxLjg3NXJlbSAsIDEuNjQ3NzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjVyZW0gKSkge1xuICAgIC5tZW51X19saXN0IHtcbiAgICAgIGdhcDogY2xhbXAoIDEuODc1cmVtICwgMS42NDc3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChnYXA6IGNsYW1wKCAxLjg3NXJlbSAsIDEuNjQ3NzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjVyZW0gKSkge1xuICAgIC5tZW51X19saXN0IHtcbiAgICAgIGdhcDogY2FsYygxLjg3NXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1lbnVfX2xpc3Qge1xuICAgIGdhcDogMS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAubWVudV9fbGlzdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBmbGV4OiAyO1xuICB9XG59XG4ubWVudV9fbGluayB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm1lbnVfX2xpbmsge1xuICAgIHBhZGRpbmctdG9wOiAyLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApKSB7XG4gICAgLm1lbnVfX2xpbmsge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApKSB7XG4gICAgLm1lbnVfX2xpbmsge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMS41NjI1cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9fbGluayB7XG4gICAgcGFkZGluZy10b3A6IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm1lbnVfX2xpbmsge1xuICAgIHBhZGRpbmctYm90dG9tOiAyLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApKSB7XG4gICAgLm1lbnVfX2xpbmsge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApKSB7XG4gICAgLm1lbnVfX2xpbmsge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMS41NjI1cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9fbGluayB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5tZW51X19saW5rIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbn1cbi5tZW51X19saW5rOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAwO1xuICB0b3A6IDQ1cHg7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuNXMgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG4ubWVudV9fbGluazpob3Zlcjo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLm1lbnVfX2xpbmsuY3VycmVudDo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uc29jaWFscy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zb2NpYWxzLWxpc3Qge1xuICAgIGdhcDogMC45Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChnYXA6IGNsYW1wKCAwLjYyNXJlbSAsIDAuNTExMzYzNjM2NHJlbSAgKyAgMC41NjgxODE4MTgydncgLCAwLjkzNzVyZW0gKSkge1xuICAgIC5zb2NpYWxzLWxpc3Qge1xuICAgICAgZ2FwOiBjbGFtcCggMC42MjVyZW0gLCAwLjUxMTM2MzYzNjRyZW0gICsgIDAuNTY4MTgxODE4MnZ3ICwgMC45Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGdhcDogY2xhbXAoIDAuNjI1cmVtICwgMC41MTEzNjM2MzY0cmVtICArICAwLjU2ODE4MTgxODJ2dyAsIDAuOTM3NXJlbSApKSB7XG4gICAgLnNvY2lhbHMtbGlzdCB7XG4gICAgICBnYXA6IGNhbGMoMC42MjVyZW0gKyAwLjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc29jaWFscy1saXN0IHtcbiAgICBnYXA6IDAuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLnNvY2lhbHMtbGlzdCB7XG4gICAgZ2FwOiAzMHB4O1xuICAgIGZsZXg6IDE7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAuc29jaWFscy1saXN0X19pY29uIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5tZW51X19ib2R5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MnB4O1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU4MHB4KSB7XG4gIC5pY29uLW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAuaWNvbi1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEuNTYyNXJlbTtcbiAgICBoZWlnaHQ6IDAuODc1cmVtO1xuICAgIHotaW5kZXg6IDU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkgYW5kIChhbnktaG92ZXI6IG5vbmUpIHtcbiAgLmljb24tbWVudSB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLmljb24tbWVudSBzcGFuLCAuaWNvbi1tZW51OjpiZWZvcmUsIC5pY29uLW1lbnU6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gICAgcmlnaHQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMC4xMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICAuaWNvbi1tZW51OjpiZWZvcmUge1xuICAgIHRvcDogMDtcbiAgfVxuICAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmljb24tbWVudSBzcGFuIHtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMC4wNjI1cmVtKTtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnUgKyAubWVudV9fYm9keSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIC5tZW51LW9wZW4gLmljb24tbWVudSBzcGFuIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnU6OmJlZm9yZSB7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDAuMDYyNXJlbSk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnU6OmFmdGVyIHtcbiAgICBib3R0b206IGNhbGMoNTAlIC0gMC4wNjI1cmVtKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigpO1xufVxuLmhlcm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmhlcm8ge1xuICAgIGhlaWdodDogMzByZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGhlaWdodDogY2xhbXAoIDE2Ljg3NXJlbSAsIDEyLjEwMjI3MjcyNzNyZW0gICsgIDIzLjg2MzYzNjM2MzZ2dyAsIDMwcmVtICkpIHtcbiAgICAuaGVybyB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCAxNi44NzVyZW0gLCAxMi4xMDIyNzI3MjczcmVtICArICAyMy44NjM2MzYzNjM2dncgLCAzMHJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCAxNi44NzVyZW0gLCAxMi4xMDIyNzI3MjczcmVtICArICAyMy44NjM2MzYzNjM2dncgLCAzMHJlbSApKSB7XG4gICAgLmhlcm8ge1xuICAgICAgaGVpZ2h0OiBjYWxjKDE2Ljg3NXJlbSArIDEzLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZXJvIHtcbiAgICBoZWlnaHQ6IDE2Ljg3NXJlbTtcbiAgfVxufVxuLmhlcm9fX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnN3aXBlci1jb3VudGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyIHtcbiAgICBib3R0b206IDQuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChib3R0b206IGNsYW1wKCAxLjg3NXJlbSAsIDAuOTY1OTA5MDkwOXJlbSAgKyAgNC41NDU0NTQ1NDU1dncgLCA0LjM3NXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyIHtcbiAgICAgIGJvdHRvbTogY2xhbXAoIDEuODc1cmVtICwgMC45NjU5MDkwOTA5cmVtICArICA0LjU0NTQ1NDU0NTV2dyAsIDQuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGJvdHRvbTogY2xhbXAoIDEuODc1cmVtICwgMC45NjU5MDkwOTA5cmVtICArICA0LjU0NTQ1NDU0NTV2dyAsIDQuMzc1cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXIge1xuICAgICAgYm90dG9tOiBjYWxjKDEuODc1cmVtICsgMi41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyIHtcbiAgICBib3R0b206IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLWNvdW50ZXIge1xuICAgIGxlZnQ6IDEyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGxlZnQ6IGNsYW1wKCAwLjkzNzVyZW0gLCAtMy4yNjcwNDU0NTQ1cmVtICArICAyMS4wMjI3MjcyNzI3dncgLCAxMi41cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXIge1xuICAgICAgbGVmdDogY2xhbXAoIDAuOTM3NXJlbSAsIC0zLjI2NzA0NTQ1NDVyZW0gICsgIDIxLjAyMjcyNzI3Mjd2dyAsIDEyLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGVmdDogY2xhbXAoIDAuOTM3NXJlbSAsIC0zLjI2NzA0NTQ1NDVyZW0gICsgIDIxLjAyMjcyNzI3Mjd2dyAsIDEyLjVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlciB7XG4gICAgICBsZWZ0OiBjYWxjKDAuOTM3NXJlbSArIDExLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLWNvdW50ZXIge1xuICAgIGxlZnQ6IDAuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyIHtcbiAgICB3aWR0aDogNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAzLjEyNXJlbSAsIDIuNDQzMTgxODE4MnJlbSAgKyAgMy40MDkwOTA5MDkxdncgLCA1cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXIge1xuICAgICAgd2lkdGg6IGNsYW1wKCAzLjEyNXJlbSAsIDIuNDQzMTgxODE4MnJlbSAgKyAgMy40MDkwOTA5MDkxdncgLCA1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMy4xMjVyZW0gLCAyLjQ0MzE4MTgxODJyZW0gICsgIDMuNDA5MDkwOTA5MXZ3ICwgNXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDMuMTI1cmVtICsgMS44NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLWNvdW50ZXIge1xuICAgIHdpZHRoOiAzLjEyNXJlbTtcbiAgfVxufVxuLnN3aXBlci1jb3VudGVyX19pdGVtOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogN3B4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyX19pdGVtOjphZnRlciB7XG4gICAgd2lkdGg6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMC42MjVyZW0gLCAwLjM5NzcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyX19pdGVtOjphZnRlciB7XG4gICAgICB3aWR0aDogY2xhbXAoIDAuNjI1cmVtICwgMC4zOTc3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDEuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAwLjYyNXJlbSAsIDAuMzk3NzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAxLjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW06OmFmdGVyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDAuNjI1cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW06OmFmdGVyIHtcbiAgICB3aWR0aDogMC42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItY291bnRlcl9faXRlbTo6YWZ0ZXIge1xuICAgIGxlZnQ6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChsZWZ0OiBjbGFtcCggMS4xODc1cmVtICwgMC45Mzc1cmVtICArICAxLjI1dncgLCAxLjg3NXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyX19pdGVtOjphZnRlciB7XG4gICAgICBsZWZ0OiBjbGFtcCggMS4xODc1cmVtICwgMC45Mzc1cmVtICArICAxLjI1dncgLCAxLjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChsZWZ0OiBjbGFtcCggMS4xODc1cmVtICwgMC45Mzc1cmVtICArICAxLjI1dncgLCAxLjg3NXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyX19pdGVtOjphZnRlciB7XG4gICAgICBsZWZ0OiBjYWxjKDEuMTg3NXJlbSArIDAuNjg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItY291bnRlcl9faXRlbTo6YWZ0ZXIge1xuICAgIGxlZnQ6IDEuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyX19pdGVtc3BhbiB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNzA0NTQ1NDU0NXJlbSAgKyAgMC4yMjcyNzI3MjczdncgLCAwLjg3NXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyX19pdGVtc3BhbiB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC43MDQ1NDU0NTQ1cmVtICArICAwLjIyNzI3MjcyNzN2dyAsIDAuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjcwNDU0NTQ1NDVyZW0gICsgIDAuMjI3MjcyNzI3M3Z3ICwgMC44NzVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlcl9faXRlbXNwYW4ge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuNzVyZW0gKyAwLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItY291bnRlcl9faXRlbXNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgfVxufVxuXG4uYmxvY2stdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDQwcHggMCA0MHB4IDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYmxvY2stdGl0bGUge1xuICAgIHRvcDogMTAuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAodG9wOiBjbGFtcCggMy4xMjVyZW0gLCAwLjI4NDA5MDkwOTFyZW0gICsgIDE0LjIwNDU0NTQ1NDV2dyAsIDEwLjkzNzVyZW0gKSkge1xuICAgIC5ibG9jay10aXRsZSB7XG4gICAgICB0b3A6IGNsYW1wKCAzLjEyNXJlbSAsIDAuMjg0MDkwOTA5MXJlbSAgKyAgMTQuMjA0NTQ1NDU0NXZ3ICwgMTAuOTM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh0b3A6IGNsYW1wKCAzLjEyNXJlbSAsIDAuMjg0MDkwOTA5MXJlbSAgKyAgMTQuMjA0NTQ1NDU0NXZ3ICwgMTAuOTM3NXJlbSApKSB7XG4gICAgLmJsb2NrLXRpdGxlIHtcbiAgICAgIHRvcDogY2FsYygzLjEyNXJlbSArIDcuODEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5ibG9jay10aXRsZSB7XG4gICAgdG9wOiAzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJsb2NrLXRpdGxlIHtcbiAgICBsZWZ0OiAxMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChsZWZ0OiBjbGFtcCggMS44NzVyZW0gLCAtMS45ODg2MzYzNjM2cmVtICArICAxOS4zMTgxODE4MTgydncgLCAxMi41cmVtICkpIHtcbiAgICAuYmxvY2stdGl0bGUge1xuICAgICAgbGVmdDogY2xhbXAoIDEuODc1cmVtICwgLTEuOTg4NjM2MzYzNnJlbSAgKyAgMTkuMzE4MTgxODE4MnZ3ICwgMTIuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChsZWZ0OiBjbGFtcCggMS44NzVyZW0gLCAtMS45ODg2MzYzNjM2cmVtICArICAxOS4zMTgxODE4MTgydncgLCAxMi41cmVtICkpIHtcbiAgICAuYmxvY2stdGl0bGUge1xuICAgICAgbGVmdDogY2FsYygxLjg3NXJlbSArIDEwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5ibG9jay10aXRsZSB7XG4gICAgbGVmdDogMS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5ibG9jay10aXRsZSB7XG4gICAgd2lkdGg6IDMyLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE4Ljc1cmVtICwgMTMuODQwOTA5MDkwOXJlbSAgKyAgMjQuNTQ1NDU0NTQ1NXZ3ICwgMzIuMjVyZW0gKSkge1xuICAgIC5ibG9jay10aXRsZSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE4Ljc1cmVtICwgMTMuODQwOTA5MDkwOXJlbSAgKyAgMjQuNTQ1NDU0NTQ1NXZ3ICwgMzIuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxOC43NXJlbSAsIDEzLjg0MDkwOTA5MDlyZW0gICsgIDI0LjU0NTQ1NDU0NTV2dyAsIDMyLjI1cmVtICkpIHtcbiAgICAuYmxvY2stdGl0bGUge1xuICAgICAgd2lkdGg6IGNhbGMoMTguNzVyZW0gKyAxMy41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJsb2NrLXRpdGxlIHtcbiAgICB3aWR0aDogMTguNzVyZW07XG4gIH1cbn1cbi5ibG9jay10aXRsZV9fdGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDRweCA0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5ibG9jay10aXRsZV9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNC4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDIuMjVyZW0gLCAxLjQ3NzI3MjcyNzNyZW0gICsgIDMuODYzNjM2MzYzNnZ3ICwgNC4zNzVyZW0gKSkge1xuICAgIC5ibG9jay10aXRsZV9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMi4yNXJlbSAsIDEuNDc3MjcyNzI3M3JlbSAgKyAgMy44NjM2MzYzNjM2dncgLCA0LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAyLjI1cmVtICwgMS40NzcyNzI3MjczcmVtICArICAzLjg2MzYzNjM2MzZ2dyAsIDQuMzc1cmVtICkpIHtcbiAgICAuYmxvY2stdGl0bGVfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygyLjI1cmVtICsgMi4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYmxvY2stdGl0bGVfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDIuMjVyZW07XG4gIH1cbn1cbi5ibG9jay10aXRsZV9fdGl0bGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uYmxvY2stdGl0bGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogNzBweDtcbn1cblxuLmJ0bi12aWV3IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogdmFyKC0tZGFyay1jbCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZSwgYm94LXNoYWRvdyAwLjRzIGVhc2U7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIHRvcDogMjQuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh0b3A6IGNsYW1wKCAxMHJlbSAsIDQuNzcyNzI3MjcyN3JlbSAgKyAgMjYuMTM2MzYzNjM2NHZ3ICwgMjQuMzc1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgdG9wOiBjbGFtcCggMTByZW0gLCA0Ljc3MjcyNzI3MjdyZW0gICsgIDI2LjEzNjM2MzYzNjR2dyAsIDI0LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh0b3A6IGNsYW1wKCAxMHJlbSAsIDQuNzcyNzI3MjcyN3JlbSAgKyAgMjYuMTM2MzYzNjM2NHZ3ICwgMjQuMzc1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgdG9wOiBjYWxjKDEwcmVtICsgMTQuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICB0b3A6IDEwcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIHJpZ2h0OiAxMS4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHJpZ2h0OiBjbGFtcCggMS4yNXJlbSAsIC0yLjM0MDkwOTA5MDlyZW0gICsgIDE3Ljk1NDU0NTQ1NDV2dyAsIDExLjEyNXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIHJpZ2h0OiBjbGFtcCggMS4yNXJlbSAsIC0yLjM0MDkwOTA5MDlyZW0gICsgIDE3Ljk1NDU0NTQ1NDV2dyAsIDExLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChyaWdodDogY2xhbXAoIDEuMjVyZW0gLCAtMi4zNDA5MDkwOTA5cmVtICArICAxNy45NTQ1NDU0NTQ1dncgLCAxMS4xMjVyZW0gKSkge1xuICAgIC5idG4tdmlldyB7XG4gICAgICByaWdodDogY2FsYygxLjI1cmVtICsgOS44NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIHJpZ2h0OiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIHdpZHRoOiA1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAzLjQzNzVyZW0gLCAyLjY0MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNS42MjVyZW0gKSkge1xuICAgIC5idG4tdmlldyB7XG4gICAgICB3aWR0aDogY2xhbXAoIDMuNDM3NXJlbSAsIDIuNjQyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA1LjYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDMuNDM3NXJlbSAsIDIuNjQyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA1LjYyNXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIHdpZHRoOiBjYWxjKDMuNDM3NXJlbSArIDIuMTg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG4tdmlldyB7XG4gICAgd2lkdGg6IDMuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICBoZWlnaHQ6IDUuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAzLjQzNzVyZW0gLCAyLjY0MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNS42MjVyZW0gKSkge1xuICAgIC5idG4tdmlldyB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCAzLjQzNzVyZW0gLCAyLjY0MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNS42MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggMy40Mzc1cmVtICwgMi42NDIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgaGVpZ2h0OiBjYWxjKDMuNDM3NXJlbSArIDIuMTg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG4tdmlldyB7XG4gICAgaGVpZ2h0OiAzLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG4tdmlldyB7XG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjY4MTgxODE4MThyZW0gICsgIDAuMzQwOTA5MDkwOXZ3ICwgMC45Mzc1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjgxODE4MTgxOHJlbSAgKyAgMC4zNDA5MDkwOTA5dncgLCAwLjkzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjgxODE4MTgxOHJlbSAgKyAgMC4zNDA5MDkwOTA5dncgLCAwLjkzNzVyZW0gKSkge1xuICAgIC5idG4tdmlldyB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC43NXJlbSArIDAuMTg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG4tdmlldyB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB9XG59XG4uYnRuLXZpZXc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTVweCA4cHggI2ZmZjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1zbGlkZV9faW1nIHtcbiAgICBoZWlnaHQ6IDM2LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAxMy43NXJlbSAsIDUuNTY4MTgxODE4MnJlbSAgKyAgNDAuOTA5MDkwOTA5MXZ3ICwgMzYuMjVyZW0gKSkge1xuICAgIC5zd2lwZXItc2xpZGVfX2ltZyB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCAxMy43NXJlbSAsIDUuNTY4MTgxODE4MnJlbSAgKyAgNDAuOTA5MDkwOTA5MXZ3ICwgMzYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggMTMuNzVyZW0gLCA1LjU2ODE4MTgxODJyZW0gICsgIDQwLjkwOTA5MDkwOTF2dyAsIDM2LjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNsaWRlX19pbWcge1xuICAgICAgaGVpZ2h0OiBjYWxjKDEzLjc1cmVtICsgMjIuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItc2xpZGVfX2ltZyB7XG4gICAgaGVpZ2h0OiAxMy43NXJlbTtcbiAgfVxufVxuXG4uc3dpcGVyLWJ1dHRvbi1wcmV2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIyNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1idXR0b24tcHJldiB7XG4gICAgbGVmdDogLTMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChsZWZ0OiBjbGFtcCggLTMuMTI1cmVtICwgMzUuMjI3MjcyNzI3M3JlbSAgKyAgLTUxLjEzNjM2MzYzNjR2dyAsIDI1cmVtICkpIHtcbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcbiAgICAgIGxlZnQ6IGNsYW1wKCAtMy4xMjVyZW0gLCAzNS4yMjcyNzI3MjczcmVtICArICAtNTEuMTM2MzYzNjM2NHZ3ICwgMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGVmdDogY2xhbXAoIC0zLjEyNXJlbSAsIDM1LjIyNzI3MjcyNzNyZW0gICsgIC01MS4xMzYzNjM2MzY0dncgLCAyNXJlbSApKSB7XG4gICAgLnN3aXBlci1idXR0b24tcHJldiB7XG4gICAgICBsZWZ0OiBjYWxjKDI1cmVtICsgLTI4LjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICAgIGxlZnQ6IDI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTU4cHgpIHtcbiAgLnN3aXBlci1idXR0b24tcHJldiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIyNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgcmlnaHQ6IC0zLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocmlnaHQ6IGNsYW1wKCAtMy4xMjVyZW0gLCAzNS4yMjcyNzI3MjczcmVtICArICAtNTEuMTM2MzYzNjM2NHZ3ICwgMjVyZW0gKSkge1xuICAgIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgICAgcmlnaHQ6IGNsYW1wKCAtMy4xMjVyZW0gLCAzNS4yMjcyNzI3MjczcmVtICArICAtNTEuMTM2MzYzNjM2NHZ3ICwgMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocmlnaHQ6IGNsYW1wKCAtMy4xMjVyZW0gLCAzNS4yMjcyNzI3MjczcmVtICArICAtNTEuMTM2MzYzNjM2NHZ3ICwgMjVyZW0gKSkge1xuICAgIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgICAgcmlnaHQ6IGNhbGMoMjVyZW0gKyAtMjguMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgcmlnaHQ6IDI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTU4cHgpIHtcbiAgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYWJvdXQtdXMge1xuICAgIHBhZGRpbmctdG9wOiAxNnJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAtMi40MDkwOTA5MDkxcmVtICArICAyNC41NDU0NTQ1NDU1dncgLCAxNnJlbSApKSB7XG4gICAgLmFib3V0LXVzIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgLTIuNDA5MDkwOTA5MXJlbSAgKyAgMjQuNTQ1NDU0NTQ1NXZ3ICwgMTZyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAtMi40MDkwOTA5MDkxcmVtICArICAyNC41NDU0NTQ1NDU1dncgLCAxNnJlbSApKSB7XG4gICAgLmFib3V0LXVzIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDIuNXJlbSArIDEzLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYWJvdXQtdXMge1xuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XG4gIH1cbn1cbi5hYm91dC11c19fY29udGFpbmVyLS1iaWcge1xuICB3aWR0aDogMTMwNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmludHJvLWJsb2NrIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyby1ibG9jayB7XG4gICAgd2lkdGg6IDM4LjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTguMTI1cmVtICwgMTAuNzM4NjM2MzYzNnJlbSAgKyAgMzYuOTMxODE4MTgxOHZ3ICwgMzguNDM3NXJlbSApKSB7XG4gICAgLmludHJvLWJsb2NrIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTguMTI1cmVtICwgMTAuNzM4NjM2MzYzNnJlbSAgKyAgMzYuOTMxODE4MTgxOHZ3ICwgMzguNDM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE4LjEyNXJlbSAsIDEwLjczODYzNjM2MzZyZW0gICsgIDM2LjkzMTgxODE4MTh2dyAsIDM4LjQzNzVyZW0gKSkge1xuICAgIC5pbnRyby1ibG9jayB7XG4gICAgICB3aWR0aDogY2FsYygxOC4xMjVyZW0gKyAyMC4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvLWJsb2NrIHtcbiAgICB3aWR0aDogMTguMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm8tYmxvY2sge1xuICAgIG1hcmdpbi1ib3R0b206IDUuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIDEuMjk1NDU0NTQ1NXJlbSAgKyAgNi4wMjI3MjcyNzI3dncgLCA1LjgxMjVyZW0gKSkge1xuICAgIC5pbnRyby1ibG9jayB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMi41cmVtICwgMS4yOTU0NTQ1NDU1cmVtICArICA2LjAyMjcyNzI3Mjd2dyAsIDUuODEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMi41cmVtICwgMS4yOTU0NTQ1NDU1cmVtICArICA2LjAyMjcyNzI3Mjd2dyAsIDUuODEyNXJlbSApKSB7XG4gICAgLmludHJvLWJsb2NrIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMi41cmVtICsgMy4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvLWJsb2NrIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gIH1cbn1cbi5pbnRyby1ibG9ja19fbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvLWJsb2NrX19sYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC43MTAyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDEuNTYyNXJlbSApKSB7XG4gICAgLmludHJvLWJsb2NrX19sYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC43MTAyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDEuNTYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC43MTAyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDEuNTYyNXJlbSApKSB7XG4gICAgLmludHJvLWJsb2NrX19sYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDAuOTM3NXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvLWJsb2NrX19sYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xuICB9XG59XG4uaW50cm8tYmxvY2tfX3RpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyby1ibG9ja19fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDEuNXJlbSAsIDEuMjcyNzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjEyNXJlbSApKSB7XG4gICAgLmludHJvLWJsb2NrX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAxLjVyZW0gLCAxLjI3MjcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMS4yNzI3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTI1cmVtICkpIHtcbiAgICAuaW50cm8tYmxvY2tfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyby1ibG9ja19fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5cbi5pbmZvLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9jayB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTByZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAzLjc1cmVtICwgMS40NzcyNzI3MjczcmVtICArICAxMS4zNjM2MzYzNjM2dncgLCAxMHJlbSApKSB7XG4gICAgLmluZm8tYmxvY2sge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDMuNzVyZW0gLCAxLjQ3NzI3MjcyNzNyZW0gICsgIDExLjM2MzYzNjM2MzZ2dyAsIDEwcmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAzLjc1cmVtICwgMS40NzcyNzI3MjczcmVtICArICAxMS4zNjM2MzYzNjM2dncgLCAxMHJlbSApKSB7XG4gICAgLmluZm8tYmxvY2sge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygzLjc1cmVtICsgNi4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9jayB7XG4gICAgZ2FwOiA2Ljg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZ2FwOiBjbGFtcCggMi41cmVtICwgMC45MDkwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDYuODc1cmVtICkpIHtcbiAgICAuaW5mby1ibG9jayB7XG4gICAgICBnYXA6IGNsYW1wKCAyLjVyZW0gLCAwLjkwOTA5MDkwOTFyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgNi44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMi41cmVtICwgMC45MDkwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDYuODc1cmVtICkpIHtcbiAgICAuaW5mby1ibG9jayB7XG4gICAgICBnYXA6IGNhbGMoMi41cmVtICsgNC4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW5mby1ibG9jayB7XG4gICAgZ2FwOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAuaW5mby1ibG9jayB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSBhbmQgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9jayB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIDAuNzk1NDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAyLjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjc5NTQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMi41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjc5NTQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMi41cmVtICkpIHtcbiAgICAuaW5mby1ibG9jayB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMS4yNXJlbSArIDEuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gIH1cbn1cbi5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gICAgd2lkdGg6IDI0LjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDguMTU5MDkwOTA5MXJlbSAgKyAgMjEuNzA0NTQ1NDU0NXZ3ICwgMjQuNDM3NXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX2l0ZW0tLXRvcC1saW5lIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDguMTU5MDkwOTA5MXJlbSAgKyAgMjEuNzA0NTQ1NDU0NXZ3ICwgMjQuNDM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCA4LjE1OTA5MDkwOTFyZW0gICsgIDIxLjcwNDU0NTQ1NDV2dyAsIDI0LjQzNzVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gICAgICB3aWR0aDogY2FsYygxMi41cmVtICsgMTEuOTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gICAgd2lkdGg6IDEyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gICAgcGFkZGluZy10b3A6IDIuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDEuMjVyZW0gLCAwLjkzMTgxODE4MThyZW0gICsgIDEuNTkwOTA5MDkwOXZ3ICwgMi4xMjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDEuMjVyZW0gLCAwLjkzMTgxODE4MThyZW0gICsgIDEuNTkwOTA5MDkwOXZ3ICwgMi4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAxLjI1cmVtICwgMC45MzE4MTgxODE4cmVtICArICAxLjU5MDkwOTA5MDl2dyAsIDIuMTI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19faXRlbS0tdG9wLWxpbmUge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMS4yNXJlbSArIDAuODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmluZm8tYmxvY2tfX2l0ZW0tLXRvcC1saW5lIHtcbiAgICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgfVxufVxuLmluZm8tYmxvY2tfX3RleHQtLWJpZyB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9ja19fdGV4dC0tYmlnIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDEuMTI1cmVtICwgMS4wNzk1NDU0NTQ1cmVtICArICAwLjIyNzI3MjcyNzN2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX190ZXh0LS1iaWcge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMS4xMjVyZW0gLCAxLjA3OTU0NTQ1NDVyZW0gICsgIDAuMjI3MjcyNzI3M3Z3ICwgMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAxLjEyNXJlbSAsIDEuMDc5NTQ1NDU0NXJlbSAgKyAgMC4yMjcyNzI3MjczdncgLCAxLjI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19fdGV4dC0tYmlnIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjEyNXJlbSArIDAuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmluZm8tYmxvY2tfX3RleHQtLWJpZyB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgfVxufVxuLmluZm8tYmxvY2tfX3RleHQtLWJpZzo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbmZvLWJsb2NrX190ZXh0LS1iaWc6OmJlZm9yZSB7XG4gICAgd2lkdGg6IDI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDEzLjEyNXJlbSAsIDguODA2ODE4MTgxOHJlbSAgKyAgMjEuNTkwOTA5MDkwOXZ3ICwgMjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX190ZXh0LS1iaWc6OmJlZm9yZSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDEzLjEyNXJlbSAsIDguODA2ODE4MTgxOHJlbSAgKyAgMjEuNTkwOTA5MDkwOXZ3ICwgMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxMy4xMjVyZW0gLCA4LjgwNjgxODE4MThyZW0gICsgIDIxLjU5MDkwOTA5MDl2dyAsIDI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19fdGV4dC0tYmlnOjpiZWZvcmUge1xuICAgICAgd2lkdGg6IGNhbGMoMTMuMTI1cmVtICsgMTEuODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmluZm8tYmxvY2tfX3RleHQtLWJpZzo6YmVmb3JlIHtcbiAgICB3aWR0aDogMTMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9ja19faXRlbS0tYWN0aW9uIHtcbiAgICB3aWR0aDogMjguOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMC43ODQwOTA5MDkxcmVtICArICAyNC4yMDQ1NDU0NTQ1dncgLCAyOC45Mzc1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19faXRlbS0tYWN0aW9uIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTAuNzg0MDkwOTA5MXJlbSAgKyAgMjQuMjA0NTQ1NDU0NXZ3ICwgMjguOTM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDEwLjc4NDA5MDkwOTFyZW0gICsgIDI0LjIwNDU0NTQ1NDV2dyAsIDI4LjkzNzVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX19pdGVtLS1hY3Rpb24ge1xuICAgICAgd2lkdGg6IGNhbGMoMTUuNjI1cmVtICsgMTMuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrX19pdGVtLS1hY3Rpb24ge1xuICAgIHdpZHRoOiAxNS42MjVyZW07XG4gIH1cbn1cbi5pbmZvLWJsb2NrX190ZXh0LS1zbWFsbCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9ja19fdGV4dC0tc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMS4wNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjg5MjA0NTQ1NDVyZW0gICsgIDAuMjI3MjcyNzI3M3Z3ICwgMS4wNjI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19fdGV4dC0tc21hbGwge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC44OTIwNDU0NTQ1cmVtICArICAwLjIyNzI3MjcyNzN2dyAsIDEuMDYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjg5MjA0NTQ1NDVyZW0gICsgIDAuMjI3MjcyNzI3M3Z3ICwgMS4wNjI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19fdGV4dC0tc21hbGwge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuOTM3NXJlbSArIDAuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDAuOTk0MzE4MTgxOHJlbSAgKyAgMi44NDA5MDkwOTA5dncgLCAzLjEyNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjk5NDMxODE4MThyZW0gICsgIDIuODQwOTA5MDkwOXZ3ICwgMy4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDAuOTk0MzE4MTgxOHJlbSAgKyAgMi44NDA5MDkwOTA5dncgLCAzLjEyNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS41NjI1cmVtICsgMS41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjU2MjVyZW07XG4gIH1cbn1cblxuLmJ0biBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA1MDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYnRuIHNwYW4ge1xuICAgIHBhZGRpbmctbGVmdDogMi40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjEyNXJlbSAsIDAuNjQ3NzI3MjcyN3JlbSAgKyAgMi4zODYzNjM2MzY0dncgLCAyLjQzNzVyZW0gKSkge1xuICAgIC5idG4gc3BhbiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjEyNXJlbSAsIDAuNjQ3NzI3MjcyN3JlbSAgKyAgMi4zODYzNjM2MzY0dncgLCAyLjQzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4xMjVyZW0gLCAwLjY0NzcyNzI3MjdyZW0gICsgIDIuMzg2MzYzNjM2NHZ3ICwgMi40Mzc1cmVtICkpIHtcbiAgICAuYnRuIHNwYW4ge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuMTI1cmVtICsgMS4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0biBzcGFuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTU5Ljk4cHgpIHtcbiAgLmJ0biBzcGFuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDY5Ljk4cHgpIHtcbiAgLmJ0biBzcGFuIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDI7XG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWNsKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0biB7XG4gICAgcGFkZGluZy10b3A6IDEuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAwLjYyNXJlbSAsIDAuNDIwNDU0NTQ1NXJlbSAgKyAgMS4wMjI3MjcyNzI3dncgLCAxLjE4NzVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAwLjYyNXJlbSAsIDAuNDIwNDU0NTQ1NXJlbSAgKyAgMS4wMjI3MjcyNzI3dncgLCAxLjE4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAwLjYyNXJlbSAsIDAuNDIwNDU0NTQ1NXJlbSAgKyAgMS4wMjI3MjcyNzI3dncgLCAxLjE4NzVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMC42MjVyZW0gKyAwLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuIHtcbiAgICBwYWRkaW5nLXRvcDogMC42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG4ge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMC42MjVyZW0gLCAwLjQyMDQ1NDU0NTVyZW0gICsgIDEuMDIyNzI3MjcyN3Z3ICwgMS4xODc1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMC42MjVyZW0gLCAwLjQyMDQ1NDU0NTVyZW0gICsgIDEuMDIyNzI3MjcyN3Z3ICwgMS4xODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMC42MjVyZW0gLCAwLjQyMDQ1NDU0NTVyZW0gICsgIDEuMDIyNzI3MjcyN3Z3ICwgMS4xODc1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDAuNjI1cmVtICsgMC41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0biB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYnRuIHtcbiAgICB3aWR0aDogMTAuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDVyZW0gLCAyLjk1NDU0NTQ1NDVyZW0gICsgIDEwLjIyNzI3MjcyNzN2dyAsIDEwLjYyNXJlbSApKSB7XG4gICAgLmJ0biB7XG4gICAgICB3aWR0aDogY2xhbXAoIDVyZW0gLCAyLjk1NDU0NTQ1NDVyZW0gICsgIDEwLjIyNzI3MjcyNzN2dyAsIDEwLjYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDVyZW0gLCAyLjk1NDU0NTQ1NDVyZW0gICsgIDEwLjIyNzI3MjcyNzN2dyAsIDEwLjYyNXJlbSApKSB7XG4gICAgLmJ0biB7XG4gICAgICB3aWR0aDogY2FsYyg1cmVtICsgNS42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuIHtcbiAgICB3aWR0aDogNXJlbTtcbiAgfVxufVxuLmJ0bjpob3ZlciBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWRhcmstY2wpO1xufVxuLmJ0bjpob3Zlcjo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuLmJ0bjpob3Zlcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbn1cbi5idG46OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0bjo6YWZ0ZXIge1xuICAgIHRvcDogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh0b3A6IGNsYW1wKCAwLjc1cmVtICwgMC40NTQ1NDU0NTQ1cmVtICArICAxLjQ3NzI3MjcyNzN2dyAsIDEuNTYyNXJlbSApKSB7XG4gICAgLmJ0bjo6YWZ0ZXIge1xuICAgICAgdG9wOiBjbGFtcCggMC43NXJlbSAsIDAuNDU0NTQ1NDU0NXJlbSAgKyAgMS40NzcyNzI3MjczdncgLCAxLjU2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAodG9wOiBjbGFtcCggMC43NXJlbSAsIDAuNDU0NTQ1NDU0NXJlbSAgKyAgMS40NzcyNzI3MjczdncgLCAxLjU2MjVyZW0gKSkge1xuICAgIC5idG46OmFmdGVyIHtcbiAgICAgIHRvcDogY2FsYygwLjc1cmVtICsgMC44MTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0bjo6YWZ0ZXIge1xuICAgIHRvcDogMC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0bjo6YWZ0ZXIge1xuICAgIHJpZ2h0OiAyLjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocmlnaHQ6IGNsYW1wKCAxLjE4NzVyZW0gLCAwLjc1NTY4MTgxODJyZW0gICsgIDIuMTU5MDkwOTA5MXZ3ICwgMi4zNzVyZW0gKSkge1xuICAgIC5idG46OmFmdGVyIHtcbiAgICAgIHJpZ2h0OiBjbGFtcCggMS4xODc1cmVtICwgMC43NTU2ODE4MTgycmVtICArICAyLjE1OTA5MDkwOTF2dyAsIDIuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHJpZ2h0OiBjbGFtcCggMS4xODc1cmVtICwgMC43NTU2ODE4MTgycmVtICArICAyLjE1OTA5MDkwOTF2dyAsIDIuMzc1cmVtICkpIHtcbiAgICAuYnRuOjphZnRlciB7XG4gICAgICByaWdodDogY2FsYygxLjE4NzVyZW0gKyAxLjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuOjphZnRlciB7XG4gICAgcmlnaHQ6IDEuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk1OS45OHB4KSB7XG4gIC5idG46OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uYnRuOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTI1JSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2U7XG59XG4uYnRuLS1yZXZlcnNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3V0bGluZTogMXB4IHNvbGlkICNmZmY7XG59XG4uYnRuLS1yZXZlcnNlOmhvdmVyOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uYnRuLS1yZXZlcnNlOmhvdmVyIHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5idG4tLXJldmVyc2Ugc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5idG4tLXJldmVyc2U6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG59XG4uYnRuLS1yZXZlcnNlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbn1cblxuLmRpcmVjdGlvbnMge1xuICBtYXgtd2lkdGg6IDEzMzZweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmRpcmVjdGlvbnMge1xuICAgIHBhZGRpbmctYm90dG9tOiA4Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMi43ODQwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDguNzVyZW0gKSkge1xuICAgIC5kaXJlY3Rpb25zIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC4zNzVyZW0gLCAyLjc4NDA5MDkwOTFyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgOC43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMi43ODQwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDguNzVyZW0gKSkge1xuICAgIC5kaXJlY3Rpb25zIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDQuMzc1cmVtICsgNC4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZGlyZWN0aW9ucyB7XG4gICAgcGFkZGluZy1ib3R0b206IDQuMzc1cmVtO1xuICB9XG59XG5cbi53b3Jrcy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAzMHB4O1xufVxuLndvcmtzLWxpc3RfX2l0ZW0ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuMTMpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNjUpIDEwMCUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAud29ya3MtbGlzdF9faXRlbSB7XG4gICAgd2lkdGg6IDE5cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCAxMC4xMzYzNjM2MzY0cmVtICArICAxMS44MTgxODE4MTgydncgLCAxOXJlbSApKSB7XG4gICAgLndvcmtzLWxpc3RfX2l0ZW0ge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxMi41cmVtICwgMTAuMTM2MzYzNjM2NHJlbSAgKyAgMTEuODE4MTgxODE4MnZ3ICwgMTlyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxMi41cmVtICwgMTAuMTM2MzYzNjM2NHJlbSAgKyAgMTEuODE4MTgxODE4MnZ3ICwgMTlyZW0gKSkge1xuICAgIC53b3Jrcy1saXN0X19pdGVtIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEyLjVyZW0gKyA2LjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAud29ya3MtbGlzdF9faXRlbSB7XG4gICAgd2lkdGg6IDEyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC53b3Jrcy1saXN0X19pdGVtIHtcbiAgICBoZWlnaHQ6IDI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAxNy41cmVtICwgMTQuNzcyNzI3MjcyN3JlbSAgKyAgMTMuNjM2MzYzNjM2NHZ3ICwgMjVyZW0gKSkge1xuICAgIC53b3Jrcy1saXN0X19pdGVtIHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDE3LjVyZW0gLCAxNC43NzI3MjcyNzI3cmVtICArICAxMy42MzYzNjM2MzY0dncgLCAyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCAxNy41cmVtICwgMTQuNzcyNzI3MjcyN3JlbSAgKyAgMTMuNjM2MzYzNjM2NHZ3ICwgMjVyZW0gKSkge1xuICAgIC53b3Jrcy1saXN0X19pdGVtIHtcbiAgICAgIGhlaWdodDogY2FsYygxNy41cmVtICsgNy41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLndvcmtzLWxpc3RfX2l0ZW0ge1xuICAgIGhlaWdodDogMTcuNXJlbTtcbiAgfVxufVxuLndvcmtzLWxpc3RfX2l0ZW06aG92ZXIge1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG59XG4ud29ya3MtbGlzdF9faXRlbTpob3ZlciAud29ya3MtbGlzdF9faW5mbyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTZweCk7XG59XG4ud29ya3MtbGlzdF9faXRlbTpob3ZlciAud29ya3MtbGlzdF9fY2FyZCB7XG4gIGZpbHRlcjogYmx1cig3cHgpO1xufVxuLndvcmtzLWxpc3RfX2NhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmaWx0ZXI6IGJsdXIoMCk7XG4gIHRyYW5zaXRpb246IGZpbHRlciAwLjVzIGVhc2U7XG59XG4ud29ya3MtbGlzdF9faW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTZweCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAud29ya3MtbGlzdF9faW5mbyB7XG4gICAgcGFkZGluZy1yaWdodDogNS44MTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMS41NjI1cmVtICwgMC4wMTcwNDU0NTQ1cmVtICArICA3LjcyNzI3MjcyNzN2dyAsIDUuODEyNXJlbSApKSB7XG4gICAgLndvcmtzLWxpc3RfX2luZm8ge1xuICAgICAgcGFkZGluZy1yaWdodDogY2xhbXAoIDEuNTYyNXJlbSAsIDAuMDE3MDQ1NDU0NXJlbSAgKyAgNy43MjcyNzI3MjczdncgLCA1LjgxMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1yaWdodDogY2xhbXAoIDEuNTYyNXJlbSAsIDAuMDE3MDQ1NDU0NXJlbSAgKyAgNy43MjcyNzI3MjczdncgLCA1LjgxMjVyZW0gKSkge1xuICAgIC53b3Jrcy1saXN0X19pbmZvIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoMS41NjI1cmVtICsgNC4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC53b3Jrcy1saXN0X19pbmZvIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC53b3Jrcy1saXN0X19pbmZvIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjk5NDMxODE4MThyZW0gICsgIDIuODQwOTA5MDkwOXZ3ICwgMy4xMjVyZW0gKSkge1xuICAgIC53b3Jrcy1saXN0X19pbmZvIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuNTYyNXJlbSAsIDAuOTk0MzE4MTgxOHJlbSAgKyAgMi44NDA5MDkwOTA5dncgLCAzLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjk5NDMxODE4MThyZW0gICsgIDIuODQwOTA5MDkwOXZ3ICwgMy4xMjVyZW0gKSkge1xuICAgIC53b3Jrcy1saXN0X19pbmZvIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygxLjU2MjVyZW0gKyAxLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAud29ya3MtbGlzdF9faW5mbyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjU2MjVyZW07XG4gIH1cbn1cbi53b3Jrcy1saXN0X190ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAyNHB4IDAgMjRweCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ5OS45OHB4KSB7XG4gIC53b3Jrcy1saXN0X190ZXh0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbi53b3Jrcy1saXN0X19tb3JlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0OTkuOThweCkge1xuICAud29ya3MtbGlzdF9fbW9yZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mZWF0dXJlZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDkuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCA0LjY4NzVyZW0gLCAyLjgyMzg2MzYzNjRyZW0gICsgIDkuMzE4MTgxODE4MnZ3ICwgOS44MTI1cmVtICkpIHtcbiAgICAuZmVhdHVyZWQge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCA0LjY4NzVyZW0gLCAyLjgyMzg2MzYzNjRyZW0gICsgIDkuMzE4MTgxODE4MnZ3ICwgOS44MTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC42ODc1cmVtICwgMi44MjM4NjM2MzY0cmVtICArICA5LjMxODE4MTgxODJ2dyAsIDkuODEyNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDQuNjg3NXJlbSArIDUuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZlYXR1cmVkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNC42ODc1cmVtO1xuICB9XG59XG4uZmVhdHVyZWRfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZlYXR1cmVkX19saXN0IHtcbiAgICBnYXA6IDYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGdhcDogY2xhbXAoIDEuODc1cmVtICwgMC4yODQwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9fbGlzdCB7XG4gICAgICBnYXA6IGNsYW1wKCAxLjg3NXJlbSAsIDAuMjg0MDkwOTA5MXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGdhcDogY2xhbXAoIDEuODc1cmVtICwgMC4yODQwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9fbGlzdCB7XG4gICAgICBnYXA6IGNhbGMoMS44NzVyZW0gKyA0LjM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mZWF0dXJlZF9fbGlzdCB7XG4gICAgZ2FwOiAxLjg3NXJlbTtcbiAgfVxufVxuLmZlYXR1cmVkX19pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZlYXR1cmVkX19pdGVtOmhvdmVyIC5mZWF0dXJlZF9fYnRuLCAuZmVhdHVyZWRfX2l0ZW06Zm9jdXMgLmZlYXR1cmVkX19idG4ge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZlYXR1cmVkX19pbWFnZSB7XG4gICAgd2lkdGg6IDIzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxMS41NjI1cmVtICwgNy4zNTc5NTQ1NDU1cmVtICArICAyMS4wMjI3MjcyNzI3dncgLCAyMy4xMjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9faW1hZ2Uge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxMS41NjI1cmVtICwgNy4zNTc5NTQ1NDU1cmVtICArICAyMS4wMjI3MjcyNzI3dncgLCAyMy4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxMS41NjI1cmVtICwgNy4zNTc5NTQ1NDU1cmVtICArICAyMS4wMjI3MjcyNzI3dncgLCAyMy4xMjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9faW1hZ2Uge1xuICAgICAgd2lkdGg6IGNhbGMoMTEuNTYyNXJlbSArIDExLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZmVhdHVyZWRfX2ltYWdlIHtcbiAgICB3aWR0aDogMTEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZlYXR1cmVkX19pbWFnZSB7XG4gICAgaGVpZ2h0OiAyNi43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggMTMuMzc1cmVtICwgOC41MTEzNjM2MzY0cmVtICArICAyNC4zMTgxODE4MTgydncgLCAyNi43NXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19pbWFnZSB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCAxMy4zNzVyZW0gLCA4LjUxMTM2MzYzNjRyZW0gICsgIDI0LjMxODE4MTgxODJ2dyAsIDI2Ljc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDEzLjM3NXJlbSAsIDguNTExMzYzNjM2NHJlbSAgKyAgMjQuMzE4MTgxODE4MnZ3ICwgMjYuNzVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9faW1hZ2Uge1xuICAgICAgaGVpZ2h0OiBjYWxjKDEzLjM3NXJlbSArIDEzLjM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mZWF0dXJlZF9faW1hZ2Uge1xuICAgIGhlaWdodDogMTMuMzc1cmVtO1xuICB9XG59XG4uZmVhdHVyZWRfX2xhYmVsIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZlYXR1cmVkX19sYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogMi4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi10b3A6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjUwNTY4MTgxODJyZW0gICsgIDIuMTU5MDkwOTA5MXZ3ICwgMi4xMjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9fbGFiZWwge1xuICAgICAgbWFyZ2luLXRvcDogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNTA1NjgxODE4MnJlbSAgKyAgMi4xNTkwOTA5MDkxdncgLCAyLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tdG9wOiBjbGFtcCggMC45Mzc1cmVtICwgMC41MDU2ODE4MTgycmVtICArICAyLjE1OTA5MDkwOTF2dyAsIDIuMTI1cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2xhYmVsIHtcbiAgICAgIG1hcmdpbi10b3A6IGNhbGMoMC45Mzc1cmVtICsgMS4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZlYXR1cmVkX19sYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogMC45Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZmVhdHVyZWRfX2xhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjI1cmVtICwgMC4xNTkwOTA5MDkxcmVtICArICAwLjQ1NDU0NTQ1NDV2dyAsIDAuNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19sYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMC4yNXJlbSAsIDAuMTU5MDkwOTA5MXJlbSAgKyAgMC40NTQ1NDU0NTQ1dncgLCAwLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuMjVyZW0gLCAwLjE1OTA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMC41cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2xhYmVsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMC4yNXJlbSArIDAuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZmVhdHVyZWRfX2xhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTk5Ljk4cHgpIHtcbiAgLmZlYXR1cmVkX19sYWJlbCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG4uZmVhdHVyZWRfX3R5cGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZmVhdHVyZWRfX2ltYWdlLS1iaWcge1xuICAgIHdpZHRoOiAzNy41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxMC4yMjcyNzI3MjczcmVtICArICAzNi4zNjM2MzYzNjM2dncgLCAzNy41cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2ltYWdlLS1iaWcge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTAuMjI3MjcyNzI3M3JlbSAgKyAgMzYuMzYzNjM2MzYzNnZ3ICwgMzcuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxMC4yMjcyNzI3MjczcmVtICArICAzNi4zNjM2MzYzNjM2dncgLCAzNy41cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2ltYWdlLS1iaWcge1xuICAgICAgd2lkdGg6IGNhbGMoMTcuNXJlbSArIDIwICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZlYXR1cmVkX19pbWFnZS0tYmlnIHtcbiAgICB3aWR0aDogMTcuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZlYXR1cmVkX19pbWFnZS0tYmlnIHtcbiAgICBoZWlnaHQ6IDI2Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAxMi4xMjVyZW0gLCA2LjgwNjgxODE4MThyZW0gICsgIDI2LjU5MDkwOTA5MDl2dyAsIDI2Ljc1cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2ltYWdlLS1iaWcge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggMTIuMTI1cmVtICwgNi44MDY4MTgxODE4cmVtICArICAyNi41OTA5MDkwOTA5dncgLCAyNi43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCAxMi4xMjVyZW0gLCA2LjgwNjgxODE4MThyZW0gICsgIDI2LjU5MDkwOTA5MDl2dyAsIDI2Ljc1cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2ltYWdlLS1iaWcge1xuICAgICAgaGVpZ2h0OiBjYWxjKDEyLjEyNXJlbSArIDE0LjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mZWF0dXJlZF9faW1hZ2UtLWJpZyB7XG4gICAgaGVpZ2h0OiAxMi4xMjVyZW07XG4gIH1cbn1cbi5mZWF0dXJlZF9faXRlbS0tdG9wIHtcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgcGFkZGluZy10b3A6IDE2MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAuZmVhdHVyZWRfX2l0ZW0tLXRvcCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG59XG4uZmVhdHVyZWRfX2l0ZW0tLWJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IC0xNjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLmZlYXR1cmVkX19pdGVtLS1ib3R0b20ge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbn1cbi5mZWF0dXJlZF9fYnRuIHtcbiAgbGVmdDogMTMwcHg7XG4gIHRvcDogMjAwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UsIHZpc2liaWxpdHkgMC41cyBlYXNlLCB0cmFuc2Zvcm0gMC40cyBlYXNlLCBib3gtc2hhZG93IDAuNHMgZWFzZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5mZWF0dXJlZF9fYnRuIHtcbiAgICBsZWZ0OiAxMDBweDtcbiAgICB0b3A6IDEwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjkuOTk4NzVlbSkge1xuICAuZmVhdHVyZWRfX2J0biB7XG4gICAgbGVmdDogNjZweDtcbiAgICB0b3A6IDc3cHg7XG4gIH1cbn1cblxuLmludHJvZHVjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGZpcnN0IGJhc2VsaW5lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm9kdWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4wMzk3NzI3MjczcmVtICArICAyLjYxMzYzNjM2MzZ2dyAsIDNyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb24ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMDM5NzcyNzI3M3JlbSAgKyAgMi42MTM2MzYzNjM2dncgLCAzcmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjAzOTc3MjcyNzNyZW0gICsgIDIuNjEzNjM2MzYzNnZ3ICwgM3JlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuNTYyNXJlbSArIDEuNDM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyb2R1Y3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvZHVjdGlvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiA2LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuNTY4MTgxODE4MnJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA2LjI1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC41NjgxODE4MTgycmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjU2ODE4MTgxODJyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMS4yNXJlbSArIDUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm9kdWN0aW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyb2R1Y3Rpb24ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoMy4xMjVyZW0gKyAzLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyb2R1Y3Rpb24ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDMuMTI1cmVtO1xuICB9XG59XG4uaW50cm9kdWN0aW9uX190aXRsZSB7XG4gIG1hcmdpbi1yaWdodDogMzc1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgZm9udC1zaXplOiA2LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygzLjEyNXJlbSArIDMuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICB3aWR0aDogMjYuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMS42NDc3MjcyNzI3cmVtICArICAxOS44ODYzNjM2MzY0dncgLCAyNi41NjI1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDExLjY0NzcyNzI3MjdyZW0gICsgIDE5Ljg4NjM2MzYzNjR2dyAsIDI2LjU2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMS42NDc3MjcyNzI3cmVtICArICAxOS44ODYzNjM2MzY0dncgLCAyNi41NjI1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgICB3aWR0aDogY2FsYygxNS42MjVyZW0gKyAxMC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgIHdpZHRoOiAxNS42MjVyZW07XG4gIH1cbn1cbi5pbnRyb2R1Y3Rpb25fX3RpdGxlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xuICBsZWZ0OiA2ODBweDtcbiAgdG9wOiA4MHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgICB3aWR0aDogNC4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMi4xODc1cmVtICwgMS4zOTIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDQuMzc1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uX190aXRsZTo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IGNsYW1wKCAyLjE4NzVyZW0gLCAxLjM5MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNC4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAyLjE4NzVyZW0gLCAxLjM5MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNC4zNzVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlOjphZnRlciB7XG4gICAgICB3aWR0aDogY2FsYygyLjE4NzVyZW0gKyAyLjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZTo6YWZ0ZXIge1xuICAgIHdpZHRoOiAyLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIGFuZCAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4wMzk3NzI3MjczcmVtICArICAyLjYxMzYzNjM2MzZ2dyAsIDNyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjAzOTc3MjcyNzNyZW0gICsgIDIuNjEzNjM2MzYzNnZ3ICwgM3JlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4wMzk3NzI3MjczcmVtICArICAyLjYxMzYzNjM2MzZ2dyAsIDNyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS41NjI1cmVtICsgMS40Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZTo6YWZ0ZXIge1xuICAgIHRvcDogLTQwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIGFuZCAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlOjphZnRlciB7XG4gICAgbGVmdDogNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGVmdDogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlOjphZnRlciB7XG4gICAgICBsZWZ0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChsZWZ0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgICAgIGxlZnQ6IGNhbGMoMy4xMjVyZW0gKyAzLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlOjphZnRlciB7XG4gICAgbGVmdDogMy4xMjVyZW07XG4gIH1cbn1cblxuLnByb2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbiAgaGVpZ2h0OiA2NjRweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkge1xuICAucHJvY2VzcyB7XG4gICAgaGVpZ2h0OiA3NjRweDtcbiAgfVxufVxuLnByb2Nlc3NfX2NvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTMwMHB4O1xuICB6LWluZGV4OiAyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAucHJvY2Vzc19fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogOS4zMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDQuMDYyNXJlbSAsIDIuMTUzNDA5MDkwOXJlbSAgKyAgOS41NDU0NTQ1NDU1dncgLCA5LjMxMjVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19jb250YWluZXIge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCA0LjA2MjVyZW0gLCAyLjE1MzQwOTA5MDlyZW0gICsgIDkuNTQ1NDU0NTQ1NXZ3ICwgOS4zMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggNC4wNjI1cmVtICwgMi4xNTM0MDkwOTA5cmVtICArICA5LjU0NTQ1NDU0NTV2dyAsIDkuMzEyNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX2NvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYyg0LjA2MjVyZW0gKyA1LjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnByb2Nlc3NfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDQuMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnByb2Nlc3NfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwLjA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC4zNzVyZW0gLCAyLjMwNjgxODE4MThyZW0gICsgIDEwLjM0MDkwOTA5MDl2dyAsIDEwLjA2MjVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19jb250YWluZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCA0LjM3NXJlbSAsIDIuMzA2ODE4MTgxOHJlbSAgKyAgMTAuMzQwOTA5MDkwOXZ3ICwgMTAuMDYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMi4zMDY4MTgxODE4cmVtICArICAxMC4zNDA5MDkwOTA5dncgLCAxMC4wNjI1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDQuMzc1cmVtICsgNS42ODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnByb2Nlc3NfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDQuMzc1cmVtO1xuICB9XG59XG4ucHJvY2Vzc19fY29udGFpbmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0yMCU7XG4gIHRvcDogLTM1JTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnByb2Nlc3NfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIHdpZHRoOiA0MC4wNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEyLjVyZW0gKyAyNy41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnByb2Nlc3NfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAucHJvY2Vzc19fY29udGFpbmVyOjphZnRlciB7XG4gICAgaGVpZ2h0OiA0MC4wNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fY29udGFpbmVyOjphZnRlciB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIGhlaWdodDogY2FsYygxMi41cmVtICsgMjcuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5wcm9jZXNzX19jb250YWluZXI6OmFmdGVyIHtcbiAgICBoZWlnaHQ6IDEyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkge1xuICAucHJvY2Vzc19fY29udGFpbmVyOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnByb2Nlc3NfX3RpdGxlIHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5wcm9jZXNzX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuODc1cmVtICwgMC43Mzg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDVyZW0gKSkge1xuICAgIC5wcm9jZXNzX190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS44NzVyZW0gLCAwLjczODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS44NzVyZW0gLCAwLjczODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS44NzVyZW0gKyAzLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5wcm9jZXNzX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkgYW5kIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnByb2Nlc3NfX3RpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjU2ODE4MTgxODJyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX3RpdGxlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC41NjgxODE4MTgycmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjU2ODE4MTgxODJyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX3RpdGxlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygxLjI1cmVtICsgNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnByb2Nlc3NfX3RpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MTkuOThweCkge1xuICAucHJvY2Vzc19fdGl0bGUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxufVxuLnByb2Nlc3NfX2xpc3Qge1xuICBnYXA6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAucHJvY2Vzc19fbGlzdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIDAuMzQwOTA5MDkwOXJlbSAgKyAgNC41NDU0NTQ1NDU1dncgLCAzLjc1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fbGlzdCB7XG4gICAgICBtYXJnaW4tbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjM0MDkwOTA5MDlyZW0gICsgIDQuNTQ1NDU0NTQ1NXZ3ICwgMy43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjM0MDkwOTA5MDlyZW0gICsgIDQuNTQ1NDU0NTQ1NXZ3ICwgMy43NXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX2xpc3Qge1xuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMS4yNXJlbSArIDIuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5wcm9jZXNzX19saXN0IHtcbiAgICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnByb2Nlc3NfX2xpc3Qge1xuICAgIG1hcmdpbi1yaWdodDogOC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTMuMTgxODE4MDk2NnJlbSAgKyAgMTUuOTA5MDkwNzk1NXZ3ICwgOC43NXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX2xpc3Qge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTMuMTgxODE4MDk2NnJlbSAgKyAgMTUuOTA5MDkwNzk1NXZ3ICwgOC43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtMy4xODE4MTgwOTY2cmVtICArICAxNS45MDkwOTA3OTU1dncgLCA4Ljc1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fbGlzdCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMC4wMDAwMDAwNjI1cmVtICsgOC43NDk5OTk5Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnByb2Nlc3NfX2xpc3Qge1xuICAgIG1hcmdpbi1yaWdodDogMC4wMDAwMDAwNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpIHtcbiAgLnByb2Nlc3NfX2xpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cbn1cbi5wcm9jZXNzX19pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2Nlc3NfX2l0ZW06aG92ZXIgLnByb2Nlc3NfX3RleHQge1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xufVxuLnByb2Nlc3NfX2l0ZW06aG92ZXIgLnByb2Nlc3NfX3RleHQ6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyOCUpO1xufVxuLnByb2Nlc3NfX2l0ZW06aG92ZXIgLnByb2Nlc3NfX251bWJlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4ucHJvY2Vzc19fdGV4dCB7XG4gIGNvbG9yOiAjNkY2RjZGO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNHMgZWFzZSwgdHJhbnNmb3JtIDAuNHMgZWFzZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuLnByb2Nlc3NfX3RleHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtOTBweDtcbiAgdG9wOiAxN3B4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLCBvcGFjaXR5IDAuNHMgZWFzZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkge1xuICAucHJvY2Vzc19fdGV4dDo6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ucHJvY2Vzc19fbnVtYmVyIHtcbiAgb3BhY2l0eTogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZTtcbn1cblxuLnByb2Nlc3Mtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpIHtcbiAgLnByb2Nlc3Mtd3JhcHBlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYmxvY2staW5mbyB7XG4gICAgd2lkdGg6IDI0LjY4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTIuMzI5NTQ1NDU0NXJlbSAgKyAgMTYuNDc3MjcyNzI3M3Z3ICwgMjQuNjg3NXJlbSApKSB7XG4gICAgLmJsb2NrLWluZm8ge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMi4zMjk1NDU0NTQ1cmVtICArICAxNi40NzcyNzI3MjczdncgLCAyNC42ODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTIuMzI5NTQ1NDU0NXJlbSAgKyAgMTYuNDc3MjcyNzI3M3Z3ICwgMjQuNjg3NXJlbSApKSB7XG4gICAgLmJsb2NrLWluZm8ge1xuICAgICAgd2lkdGg6IGNhbGMoMTUuNjI1cmVtICsgOS4wNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJsb2NrLWluZm8ge1xuICAgIHdpZHRoOiAxNS42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkgYW5kIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJsb2NrLWluZm8ge1xuICAgIHBhZGRpbmctbGVmdDogNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuNTY4MTgxODE4MnJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA2LjI1cmVtICkpIHtcbiAgICAuYmxvY2staW5mbyB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuNTY4MTgxODE4MnJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC41NjgxODE4MTgycmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5ibG9jay1pbmZvIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygxLjI1cmVtICsgNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJsb2NrLWluZm8ge1xuICAgIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbiAgfVxufVxuLmJsb2NrLWluZm9fX3RleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJsb2NrLWluZm9fX3RleHQge1xuICAgIG1hcmdpbi1ib3R0b206IDMuMzEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDAuOTI2MTM2MzYzNnJlbSAgKyAgMy4xODE4MTgxODE4dncgLCAzLjMxMjVyZW0gKSkge1xuICAgIC5ibG9jay1pbmZvX190ZXh0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjkyNjEzNjM2MzZyZW0gICsgIDMuMTgxODE4MTgxOHZ3ICwgMy4zMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjkyNjEzNjM2MzZyZW0gICsgIDMuMTgxODE4MTgxOHZ3ICwgMy4zMTI1cmVtICkpIHtcbiAgICAuYmxvY2staW5mb19fdGV4dCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuNTYyNXJlbSArIDEuNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYmxvY2staW5mb19fdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jcmVhdGUge1xuICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCA1cmVtICwgMy4xODE4MTgxODE4cmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDEwcmVtICkpIHtcbiAgICAuY3JlYXRlIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggNXJlbSAsIDMuMTgxODE4MTgxOHJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCAxMHJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDVyZW0gLCAzLjE4MTgxODE4MThyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgMTByZW0gKSkge1xuICAgIC5jcmVhdGUge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoNXJlbSArIDUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlIHtcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNyZWF0ZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDguNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC4zNzVyZW0gLCAyLjc4NDA5MDkwOTFyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgOC43NXJlbSApKSB7XG4gICAgLmNyZWF0ZSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMi43ODQwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDguNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCA0LjM3NXJlbSAsIDIuNzg0MDkwOTA5MXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA4Ljc1cmVtICkpIHtcbiAgICAuY3JlYXRlIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDQuMzc1cmVtICsgNC4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNC4zNzVyZW07XG4gIH1cbn1cbi5jcmVhdGVfX3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzcuOThweCkge1xuICAuY3JlYXRlX193cmFwcGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDM3Ljk4cHgpIHtcbiAgLmltZy1ibG9jayB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbi5pbWctYmxvY2tfX2l0ZW0ge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuNHMgZWFzZTtcbn1cbi5pbWctYmxvY2tfX2l0ZW06aG92ZXIge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcbn1cbi5pbWctYmxvY2tfX2l0ZW0tLWJpZyB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1iaWcge1xuICAgIHdpZHRoOiAyOS4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTQuNjg3NXJlbSAsIDkuMzQ2NTkwOTA5MXJlbSAgKyAgMjYuNzA0NTQ1NDU0NXZ3ICwgMjkuMzc1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1iaWcge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxNC42ODc1cmVtICwgOS4zNDY1OTA5MDkxcmVtICArICAyNi43MDQ1NDU0NTQ1dncgLCAyOS4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNC42ODc1cmVtICwgOS4zNDY1OTA5MDkxcmVtICArICAyNi43MDQ1NDU0NTQ1dncgLCAyOS4zNzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLWJpZyB7XG4gICAgICB3aWR0aDogY2FsYygxNC42ODc1cmVtICsgMTQuNjg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLWJpZyB7XG4gICAgd2lkdGg6IDE0LjY4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLWJpZyB7XG4gICAgaGVpZ2h0OiAxOC4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGhlaWdodDogY2xhbXAoIDkuMDYyNXJlbSAsIDUuNzY3MDQ1NDU0NXJlbSAgKyAgMTYuNDc3MjcyNzI3M3Z3ICwgMTguMTI1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1iaWcge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggOS4wNjI1cmVtICwgNS43NjcwNDU0NTQ1cmVtICArICAxNi40NzcyNzI3MjczdncgLCAxOC4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggOS4wNjI1cmVtICwgNS43NjcwNDU0NTQ1cmVtICArICAxNi40NzcyNzI3MjczdncgLCAxOC4xMjVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLWJpZyB7XG4gICAgICBoZWlnaHQ6IGNhbGMoOS4wNjI1cmVtICsgOS4wNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmltZy1ibG9ja19faXRlbS0tYmlnIHtcbiAgICBoZWlnaHQ6IDkuMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmltZy1ibG9ja19fYm90dG9tIHtcbiAgICB3aWR0aDogMzUuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxOC43NXJlbSAsIDEyLjVyZW0gICsgIDMxLjI1dncgLCAzNS45Mzc1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19ib3R0b20ge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxOC43NXJlbSAsIDEyLjVyZW0gICsgIDMxLjI1dncgLCAzNS45Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTguNzVyZW0gLCAxMi41cmVtICArICAzMS4yNXZ3ICwgMzUuOTM3NXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19fYm90dG9tIHtcbiAgICAgIHdpZHRoOiBjYWxjKDE4Ljc1cmVtICsgMTcuMTg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbWctYmxvY2tfX2JvdHRvbSB7XG4gICAgd2lkdGg6IDE4Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgcGFkZGluZy1sZWZ0OiA4LjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS44NzVyZW0gLCAtMC4zOTc3MjcyNzI3cmVtICArICAxMS4zNjM2MzYzNjM2dncgLCA4LjEyNXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19faXRlbS0tc21hbGwge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMS44NzVyZW0gLCAtMC4zOTc3MjcyNzI3cmVtICArICAxMS4zNjM2MzYzNjM2dncgLCA4LjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjg3NXJlbSAsIC0wLjM5NzcyNzI3MjdyZW0gICsgIDExLjM2MzYzNjM2MzZ2dyAsIDguMTI1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMS44NzVyZW0gKyA2LjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmltZy1ibG9ja19faXRlbS0tc21hbGwge1xuICAgIHBhZGRpbmctbGVmdDogMS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjU5NjU5MDkwOTFyZW0gICsgIDEuNzA0NTQ1NDU0NXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICAgIG1hcmdpbi1yaWdodDogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNTk2NTkwOTA5MXJlbSAgKyAgMS43MDQ1NDU0NTQ1dncgLCAxLjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjU5NjU5MDkwOTFyZW0gICsgIDEuNzA0NTQ1NDU0NXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygwLjkzNzVyZW0gKyAwLjkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICB3aWR0aDogMTYuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDguNDM3NXJlbSAsIDUuMzY5MzE4MTgxOHJlbSAgKyAgMTUuMzQwOTA5MDkwOXZ3ICwgMTYuODc1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgICB3aWR0aDogY2xhbXAoIDguNDM3NXJlbSAsIDUuMzY5MzE4MTgxOHJlbSAgKyAgMTUuMzQwOTA5MDkwOXZ3ICwgMTYuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggOC40Mzc1cmVtICwgNS4zNjkzMTgxODE4cmVtICArICAxNS4zNDA5MDkwOTA5dncgLCAxNi44NzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICAgIHdpZHRoOiBjYWxjKDguNDM3NXJlbSArIDguNDM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICB3aWR0aDogOC40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgaGVpZ2h0OiA4Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCA1cmVtICwgMy42MzYzNjM2MzY0cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDguNzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDVyZW0gLCAzLjYzNjM2MzYzNjRyZW0gICsgIDYuODE4MTgxODE4MnZ3ICwgOC43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCA1cmVtICwgMy42MzYzNjM2MzY0cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDguNzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICAgIGhlaWdodDogY2FsYyg1cmVtICsgMy43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICBoZWlnaHQ6IDVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLW1pZGRsZSB7XG4gICAgd2lkdGg6IDE2Ljg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCA4LjQzNzVyZW0gLCA1LjM2OTMxODE4MThyZW0gICsgIDE1LjM0MDkwOTA5MDl2dyAsIDE2Ljg3NXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19faXRlbS0tbWlkZGxlIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggOC40Mzc1cmVtICwgNS4zNjkzMTgxODE4cmVtICArICAxNS4zNDA5MDkwOTA5dncgLCAxNi44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCA4LjQzNzVyZW0gLCA1LjM2OTMxODE4MThyZW0gICsgIDE1LjM0MDkwOTA5MDl2dyAsIDE2Ljg3NXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19faXRlbS0tbWlkZGxlIHtcbiAgICAgIHdpZHRoOiBjYWxjKDguNDM3NXJlbSArIDguNDM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLW1pZGRsZSB7XG4gICAgd2lkdGg6IDguNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmltZy1ibG9ja19faXRlbS0tbWlkZGxlIHtcbiAgICBoZWlnaHQ6IDE1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggNy44MTI1cmVtICwgNC45NzE1OTA5MDkxcmVtICArICAxNC4yMDQ1NDU0NTQ1dncgLCAxNS42MjVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLW1pZGRsZSB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCA3LjgxMjVyZW0gLCA0Ljk3MTU5MDkwOTFyZW0gICsgIDE0LjIwNDU0NTQ1NDV2dyAsIDE1LjYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCA3LjgxMjVyZW0gLCA0Ljk3MTU5MDkwOTFyZW0gICsgIDE0LjIwNDU0NTQ1NDV2dyAsIDE1LjYyNXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19faXRlbS0tbWlkZGxlIHtcbiAgICAgIGhlaWdodDogY2FsYyg3LjgxMjVyZW0gKyA3LjgxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1taWRkbGUge1xuICAgIGhlaWdodDogNy44MTI1cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jcmVhdGUtaW5mbyB7XG4gICAgcGFkZGluZy10b3A6IDUuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAxLjI5NTQ1NDU0NTVyZW0gICsgIDYuMDIyNzI3MjcyN3Z3ICwgNS44MTI1cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm8ge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAxLjI5NTQ1NDU0NTVyZW0gICsgIDYuMDIyNzI3MjcyN3Z3ICwgNS44MTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgMS4yOTU0NTQ1NDU1cmVtICArICA2LjAyMjcyNzI3Mjd2dyAsIDUuODEyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDIuNXJlbSArIDMuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jcmVhdGUtaW5mbyB7XG4gICAgcGFkZGluZy10b3A6IDIuNXJlbTtcbiAgfVxufVxuLmNyZWF0ZS1pbmZvX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgd2lkdGg6IDM1N3B4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi4zMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIDAuODYzNjM2MzYzNnJlbSAgKyAgMS45MzE4MTgxODE4dncgLCAyLjMxMjVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAwLjg2MzYzNjM2MzZyZW0gICsgIDEuOTMxODE4MTgxOHZ3ICwgMi4zMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgMC44NjM2MzYzNjM2cmVtICArICAxLjkzMTgxODE4MTh2dyAsIDIuMzEyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuMjVyZW0gKyAxLjA2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlLWluZm9fX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICB9XG59XG4uY3JlYXRlLWluZm9fX3RleHQge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgIHBhZGRpbmctbGVmdDogNS42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC4zNDA5MDkwOTA5cmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjM0MDkwOTA5MDlyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgNS42MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjM0MDkwOTA5MDlyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgNS42MjVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMS4yNXJlbSArIDQuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMy4zMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS42ODc1cmVtICwgMS4wOTY1OTA5MDkxcmVtICArICAyLjk1NDU0NTQ1NDV2dyAsIDMuMzEyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjY4NzVyZW0gLCAxLjA5NjU5MDkwOTFyZW0gICsgIDIuOTU0NTQ1NDU0NXZ3ICwgMy4zMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjY4NzVyZW0gLCAxLjA5NjU5MDkwOTFyZW0gICsgIDIuOTU0NTQ1NDU0NXZ3ICwgMy4zMTI1cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjY4NzVyZW0gKyAxLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS42ODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgIHdpZHRoOiAyNy4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDEzLjkwOTA5MDkwOTFyZW0gICsgIDE3Ljk1NDU0NTQ1NDV2dyAsIDI3LjM3NXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDEzLjkwOTA5MDkwOTFyZW0gICsgIDE3Ljk1NDU0NTQ1NDV2dyAsIDI3LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxMy45MDkwOTA5MDkxcmVtICArICAxNy45NTQ1NDU0NTQ1dncgLCAyNy4zNzVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgICB3aWR0aDogY2FsYygxNy41cmVtICsgOS44NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgIHdpZHRoOiAxNy41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAzNy45OHB4KSB7XG4gIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgzLjk4cHgpIHtcbiAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODMuOThweCkgYW5kIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4My45OHB4KSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgMC43OTU0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDIuNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjc5NTQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMi41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjc5NTQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMi41cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuMjVyZW0gKyAxLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4My45OHB4KSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX19idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiA1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuMzQwOTA5MDkwOXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA1LjYyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX19idG4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuMzQwOTA5MDkwOXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA1LjYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC4zNDA5MDkwOTA5cmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm9fX2J0biB7XG4gICAgICBtYXJnaW4tbGVmdDogY2FsYygxLjI1cmVtICsgNC4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlLWluZm9fX2J0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDM3Ljk4cHgpIHtcbiAgLmNyZWF0ZS1pbmZvX19idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgzLjk4cHgpIGFuZCAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jcmVhdGUtaW5mb19fYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgzLjk4cHgpIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIDAuNzk1NDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAyLjVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fYnRuIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIDAuNzk1NDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAyLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgMC43OTU0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDIuNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX19idG4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMS4yNXJlbSArIDEuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgzLjk4cHgpIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jcmVhdGUtaW5mb19fYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAudmFsdWVzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTMuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDYuNjg3NXJlbSAsIDQuMjU1NjgxODE4MnJlbSAgKyAgMTIuMTU5MDkwOTA5MXZ3ICwgMTMuMzc1cmVtICkpIHtcbiAgICAudmFsdWVzIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggNi42ODc1cmVtICwgNC4yNTU2ODE4MTgycmVtICArICAxMi4xNTkwOTA5MDkxdncgLCAxMy4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCA2LjY4NzVyZW0gLCA0LjI1NTY4MTgxODJyZW0gICsgIDEyLjE1OTA5MDkwOTF2dyAsIDEzLjM3NXJlbSApKSB7XG4gICAgLnZhbHVlcyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyg2LjY4NzVyZW0gKyA2LjY4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAudmFsdWVzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNi42ODc1cmVtO1xuICB9XG59XG4udmFsdWVzX190aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC52YWx1ZXNfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDMuNDM3NXJlbSAsIDIuNDE0NzcyNzI3M3JlbSAgKyAgNS4xMTM2MzYzNjM2dncgLCA2LjI1cmVtICkpIHtcbiAgICAudmFsdWVzX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAzLjQzNzVyZW0gLCAyLjQxNDc3MjcyNzNyZW0gICsgIDUuMTEzNjM2MzYzNnZ3ICwgNi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAzLjQzNzVyZW0gLCAyLjQxNDc3MjcyNzNyZW0gICsgIDUuMTEzNjM2MzYzNnZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLnZhbHVlc19fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDMuNDM3NXJlbSArIDIuODEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC52YWx1ZXNfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDMuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnZhbHVlc19fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDUuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMi41cmVtICwgMS40NTQ1NDU0NTQ1cmVtICArICA1LjIyNzI3MjcyNzN2dyAsIDUuMzc1cmVtICkpIHtcbiAgICAudmFsdWVzX190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMi41cmVtICwgMS40NTQ1NDU0NTQ1cmVtICArICA1LjIyNzI3MjcyNzN2dyAsIDUuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAxLjQ1NDU0NTQ1NDVyZW0gICsgIDUuMjI3MjcyNzI3M3Z3ICwgNS4zNzVyZW0gKSkge1xuICAgIC52YWx1ZXNfX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMi41cmVtICsgMi44NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAudmFsdWVzX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICB9XG59XG4udmFsdWVzX19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC52YWx1ZXNfX2xpc3Qge1xuICAgIGdhcDogNC42ODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChnYXA6IGNsYW1wKCAyLjVyZW0gLCAxLjcwNDU0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNC42ODc1cmVtICkpIHtcbiAgICAudmFsdWVzX19saXN0IHtcbiAgICAgIGdhcDogY2xhbXAoIDIuNXJlbSAsIDEuNzA0NTQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjY4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMi41cmVtICwgMS43MDQ1NDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDQuNjg3NXJlbSApKSB7XG4gICAgLnZhbHVlc19fbGlzdCB7XG4gICAgICBnYXA6IGNhbGMoMi41cmVtICsgMi4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnZhbHVlc19fbGlzdCB7XG4gICAgZ2FwOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NTEuOThweCkge1xuICAudmFsdWVzX19saXN0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbn1cbi52YWx1ZXNfX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAudmFsdWVzX19pdGVtIHtcbiAgICB3aWR0aDogMjEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTMuNTc5NTQ1NDU0NXJlbSAgKyAgMTAuMjI3MjcyNzI3M3Z3ICwgMjEuMjVyZW0gKSkge1xuICAgIC52YWx1ZXNfX2l0ZW0ge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMy41Nzk1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAyMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDEzLjU3OTU0NTQ1NDVyZW0gICsgIDEwLjIyNzI3MjcyNzN2dyAsIDIxLjI1cmVtICkpIHtcbiAgICAudmFsdWVzX19pdGVtIHtcbiAgICAgIHdpZHRoOiBjYWxjKDE1LjYyNXJlbSArIDUuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnZhbHVlc19faXRlbSB7XG4gICAgd2lkdGg6IDE1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnZhbHVlc19faXRlbSB7XG4gICAgcGFkZGluZy1sZWZ0OiA2LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICkpIHtcbiAgICAudmFsdWVzX19pdGVtIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLnZhbHVlc19faXRlbSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMy4xMjVyZW0gKyAzLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC52YWx1ZXNfX2l0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NTEuOThweCkge1xuICAudmFsdWVzX19pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLnZhbHVlc19faW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAudmFsdWVzX19pbWcge1xuICAgIHdpZHRoOiA0LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAyLjE4NzVyZW0gLCAxLjM5MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNC4zNzVyZW0gKSkge1xuICAgIC52YWx1ZXNfX2ltZyB7XG4gICAgICB3aWR0aDogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMzkyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMzkyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjM3NXJlbSApKSB7XG4gICAgLnZhbHVlc19faW1nIHtcbiAgICAgIHdpZHRoOiBjYWxjKDIuMTg3NXJlbSArIDIuMTg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC52YWx1ZXNfX2ltZyB7XG4gICAgd2lkdGg6IDIuMTg3NXJlbTtcbiAgfVxufVxuLnZhbHVlc19fbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBtYXJnaW4tYm90dG9tOiAxN3B4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnZhbHVlc19fbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxLjI1cmVtICwgMS4xNTkwOTA5MDkxcmVtICArICAwLjQ1NDU0NTQ1NDV2dyAsIDEuNXJlbSApKSB7XG4gICAgLnZhbHVlc19fbGFiZWwge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMS4yNXJlbSAsIDEuMTU5MDkwOTA5MXJlbSAgKyAgMC40NTQ1NDU0NTQ1dncgLCAxLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMS4yNXJlbSAsIDEuMTU5MDkwOTA5MXJlbSAgKyAgMC40NTQ1NDU0NTQ1dncgLCAxLjVyZW0gKSkge1xuICAgIC52YWx1ZXNfX2xhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjI1cmVtICsgMC4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC52YWx1ZXNfX2xhYmVsIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbn1cbi52YWx1ZXNfX3RleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1hcmdpbi1ib3R0b206IDE5cHg7XG59XG4udmFsdWVzX19tb3JlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnZhbHVlc19fbW9yZTpob3ZlciAudmFsdWVzX19pY29uIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpO1xufVxuLnZhbHVlc19faWNvbiB7XG4gIGZpbGw6IHZhcigtLWRhcmstY2wpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xufVxuXG4uc3dpcGVyLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDhyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggNC4zNzVyZW0gLCAzLjA1NjgxODE4MThyZW0gICsgIDYuNTkwOTA5MDkwOXZ3ICwgOHJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggNC4zNzVyZW0gLCAzLjA1NjgxODE4MThyZW0gICsgIDYuNTkwOTA5MDkwOXZ3ICwgOHJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDQuMzc1cmVtICwgMy4wNTY4MTgxODE4cmVtICArICA2LjU5MDkwOTA5MDl2dyAsIDhyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbiB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYyg0LjM3NXJlbSArIDMuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogNC4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbiB7XG4gICAgcGFkZGluZy1ib3R0b206IDEyLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMS41MTEzNjM2MzY0cmVtICArICAxNC4zMTgxODE4MTgydncgLCAxMi4yNXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC4zNzVyZW0gLCAxLjUxMTM2MzYzNjRyZW0gICsgIDE0LjMxODE4MTgxODJ2dyAsIDEyLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC4zNzVyZW0gLCAxLjUxMTM2MzYzNjRyZW0gICsgIDE0LjMxODE4MTgxODJ2dyAsIDEyLjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb24ge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoNC4zNzVyZW0gKyA3Ljg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbiB7XG4gICAgcGFkZGluZy1ib3R0b206IDQuMzc1cmVtO1xuICB9XG59XG4uc3dpcGVyLXNlY3Rpb25fX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zd2lwZXItc2VjdGlvbl9fY29udGFpbmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjMlO1xuICB0b3A6IDIzJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX19jb250YWluZXI6OmFmdGVyIHtcbiAgICB3aWR0aDogNDAuMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uX19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEyLjVyZW0gKyAyNy41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX19jb250YWluZXI6OmFmdGVyIHtcbiAgICB3aWR0aDogMTIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX19jb250YWluZXI6OmFmdGVyIHtcbiAgICBoZWlnaHQ6IDQwLjA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGhlaWdodDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTIuNXJlbSArIDI3LjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLXNlY3Rpb25fX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIGhlaWdodDogMTIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSB7XG4gIC5zd2lwZXItc2VjdGlvbl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnN3aXBlci1zZWN0aW9uX193cmFwcGVyIHtcbiAgei1pbmRleDogMjtcbn1cbi5zd2lwZXItc2VjdGlvbl9fc2xpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX19pbWctcXVvdGUge1xuICAgIHdpZHRoOiAyLjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxLjE4NzVyZW0gLCAwLjc1NTY4MTgxODJyZW0gICsgIDIuMTU5MDkwOTA5MXZ3ICwgMi4zNzVyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbl9faW1nLXF1b3RlIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMS4xODc1cmVtICwgMC43NTU2ODE4MTgycmVtICArICAyLjE1OTA5MDkwOTF2dyAsIDIuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMS4xODc1cmVtICwgMC43NTU2ODE4MTgycmVtICArICAyLjE1OTA5MDkwOTF2dyAsIDIuMzc1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX2ltZy1xdW90ZSB7XG4gICAgICB3aWR0aDogY2FsYygxLjE4NzVyZW0gKyAxLjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLXNlY3Rpb25fX2ltZy1xdW90ZSB7XG4gICAgd2lkdGg6IDEuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX19pbWctcXVvdGUge1xuICAgIG1hcmdpbi1ib3R0b206IDUuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgLTAuMzg2MzYzNjM2NHJlbSAgKyAgOC4xODE4MTgxODE4dncgLCA1Ljc1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX2ltZy1xdW90ZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIC0wLjM4NjM2MzYzNjRyZW0gICsgIDguMTgxODE4MTgxOHZ3ICwgNS43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIC0wLjM4NjM2MzYzNjRyZW0gICsgIDguMTgxODE4MTgxOHZ3ICwgNS43NXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uX19pbWctcXVvdGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjI1cmVtICsgNC41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX19pbWctcXVvdGUge1xuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gIH1cbn1cbi5zd2lwZXItc2VjdGlvbl9fdGV4dCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS40O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjczMjk1NDU0NTVyZW0gICsgIDEuMDIyNzI3MjcyN3Z3ICwgMS41cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC43MzI5NTQ1NDU1cmVtICArICAxLjAyMjcyNzI3Mjd2dyAsIDEuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjczMjk1NDU0NTVyZW0gICsgIDEuMDIyNzI3MjcyN3Z3ICwgMS41cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuOTM3NXJlbSArIDAuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9fdGV4dCB7XG4gICAgd2lkdGg6IDQyLjA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTguNzVyZW0gLCAxMC4yNzI3MjcyNzI3cmVtICArICA0Mi4zODYzNjM2MzY0dncgLCA0Mi4wNjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxOC43NXJlbSAsIDEwLjI3MjcyNzI3MjdyZW0gICsgIDQyLjM4NjM2MzYzNjR2dyAsIDQyLjA2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxOC43NXJlbSAsIDEwLjI3MjcyNzI3MjdyZW0gICsgIDQyLjM4NjM2MzYzNjR2dyAsIDQyLjA2MjVyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbl9fdGV4dCB7XG4gICAgICB3aWR0aDogY2FsYygxOC43NXJlbSArIDIzLjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICAgIHdpZHRoOiAxOC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX190ZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjUyODQwOTA5MDlyZW0gICsgIDIuMDQ1NDU0NTQ1NXZ3ICwgMi4wNjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNTI4NDA5MDkwOXJlbSAgKyAgMi4wNDU0NTQ1NDU1dncgLCAyLjA2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNTI4NDA5MDkwOXJlbSAgKyAgMi4wNDU0NTQ1NDU1dncgLCAyLjA2MjVyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbl9fdGV4dCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDAuOTM3NXJlbSArIDEuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX190ZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjkzNzVyZW07XG4gIH1cbn1cbi5zd2lwZXItc2VjdGlvbl9fYXV0aG9yIHtcbiAgY29sb3I6ICM5Njk2OTY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG5cbi5zZWNvbmQtY291bnRlciB7XG4gIHotaW5kZXg6IDI7XG4gIGxlZnQ6IDQ3JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnNlY29uZC1jb3VudGVyIHtcbiAgICBib3R0b206IC03LjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGJvdHRvbTogY2xhbXAoIC03LjVyZW0gLCAyLjcyNzI3MjgxMjVyZW0gICsgIC0xMy42MzYzNjM3NXZ3ICwgMC4wMDAwMDAwNjI1cmVtICkpIHtcbiAgICAuc2Vjb25kLWNvdW50ZXIge1xuICAgICAgYm90dG9tOiBjbGFtcCggLTcuNXJlbSAsIDIuNzI3MjcyODEyNXJlbSAgKyAgLTEzLjYzNjM2Mzc1dncgLCAwLjAwMDAwMDA2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoYm90dG9tOiBjbGFtcCggLTcuNXJlbSAsIDIuNzI3MjcyODEyNXJlbSAgKyAgLTEzLjYzNjM2Mzc1dncgLCAwLjAwMDAwMDA2MjVyZW0gKSkge1xuICAgIC5zZWNvbmQtY291bnRlciB7XG4gICAgICBib3R0b206IGNhbGMoMC4wMDAwMDAwNjI1cmVtICsgLTcuNTAwMDAwMDYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zZWNvbmQtY291bnRlciB7XG4gICAgYm90dG9tOiAwLjAwMDAwMDA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5zZWNvbmQtY291bnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnNlY29uZC1jb3VudGVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNDA1cHg7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnNlY29uZC1jb3VudGVyOjpiZWZvcmUge1xuICAgIGxlZnQ6IC0zNC4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGVmdDogY2xhbXAoIC0zNC4yNXJlbSAsIDAuOTQ4ODYzNjM2NHJlbSAgKyAgLTQ2LjkzMTgxODE4MTh2dyAsIC04LjQzNzVyZW0gKSkge1xuICAgIC5zZWNvbmQtY291bnRlcjo6YmVmb3JlIHtcbiAgICAgIGxlZnQ6IGNsYW1wKCAtMzQuMjVyZW0gLCAwLjk0ODg2MzYzNjRyZW0gICsgIC00Ni45MzE4MTgxODE4dncgLCAtOC40Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGxlZnQ6IGNsYW1wKCAtMzQuMjVyZW0gLCAwLjk0ODg2MzYzNjRyZW0gICsgIC00Ni45MzE4MTgxODE4dncgLCAtOC40Mzc1cmVtICkpIHtcbiAgICAuc2Vjb25kLWNvdW50ZXI6OmJlZm9yZSB7XG4gICAgICBsZWZ0OiBjYWxjKC04LjQzNzVyZW0gKyAtMjUuODEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zZWNvbmQtY291bnRlcjo6YmVmb3JlIHtcbiAgICBsZWZ0OiAtOC40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc2Vjb25kLWNvdW50ZXI6OmJlZm9yZSB7XG4gICAgd2lkdGg6IDEwLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggNXJlbSAsIDNyZW0gICsgIDEwdncgLCAxMC41cmVtICkpIHtcbiAgICAuc2Vjb25kLWNvdW50ZXI6OmJlZm9yZSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDVyZW0gLCAzcmVtICArICAxMHZ3ICwgMTAuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDVyZW0gLCAzcmVtICArICAxMHZ3ICwgMTAuNXJlbSApKSB7XG4gICAgLnNlY29uZC1jb3VudGVyOjpiZWZvcmUge1xuICAgICAgd2lkdGg6IGNhbGMoNXJlbSArIDUuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zZWNvbmQtY291bnRlcjo6YmVmb3JlIHtcbiAgICB3aWR0aDogNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLnNlY29uZC1jb3VudGVyOjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5zZWNvbmQtY291bnRlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTAwcHg7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc2Vjb25kLWNvdW50ZXI6OmFmdGVyIHtcbiAgICByaWdodDogLTM2cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChyaWdodDogY2xhbXAoIC0zNnJlbSAsIDIuODYzNjM2MzYzNnJlbSAgKyAgLTUxLjgxODE4MTgxODJ2dyAsIC03LjVyZW0gKSkge1xuICAgIC5zZWNvbmQtY291bnRlcjo6YWZ0ZXIge1xuICAgICAgcmlnaHQ6IGNsYW1wKCAtMzZyZW0gLCAyLjg2MzYzNjM2MzZyZW0gICsgIC01MS44MTgxODE4MTgydncgLCAtNy41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHJpZ2h0OiBjbGFtcCggLTM2cmVtICwgMi44NjM2MzYzNjM2cmVtICArICAtNTEuODE4MTgxODE4MnZ3ICwgLTcuNXJlbSApKSB7XG4gICAgLnNlY29uZC1jb3VudGVyOjphZnRlciB7XG4gICAgICByaWdodDogY2FsYygtNy41cmVtICsgLTI4LjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc2Vjb25kLWNvdW50ZXI6OmFmdGVyIHtcbiAgICByaWdodDogLTcuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnNlY29uZC1jb3VudGVyOjphZnRlciB7XG4gICAgd2lkdGg6IDQuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMzkyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjM3NXJlbSApKSB7XG4gICAgLnNlY29uZC1jb3VudGVyOjphZnRlciB7XG4gICAgICB3aWR0aDogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMzkyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMzkyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjM3NXJlbSApKSB7XG4gICAgLnNlY29uZC1jb3VudGVyOjphZnRlciB7XG4gICAgICB3aWR0aDogY2FsYygyLjE4NzVyZW0gKyAyLjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc2Vjb25kLWNvdW50ZXI6OmFmdGVyIHtcbiAgICB3aWR0aDogMi4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuc2Vjb25kLWNvdW50ZXI6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jbGllbnRzIHtcbiAgICBwYWRkaW5nLXRvcDogOS42ODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDQuNjg3NXJlbSAsIDIuODY5MzE4MTgxOHJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA5LjY4NzVyZW0gKSkge1xuICAgIC5jbGllbnRzIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggNC42ODc1cmVtICwgMi44NjkzMTgxODE4cmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDkuNjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDQuNjg3NXJlbSAsIDIuODY5MzE4MTgxOHJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA5LjY4NzVyZW0gKSkge1xuICAgIC5jbGllbnRzIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDQuNjg3NXJlbSArIDUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY2xpZW50cyB7XG4gICAgcGFkZGluZy10b3A6IDQuNjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNsaWVudHMge1xuICAgIHBhZGRpbmctYm90dG9tOiA5LjY4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC42ODc1cmVtICwgMi44NjkzMTgxODE4cmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDkuNjg3NXJlbSApKSB7XG4gICAgLmNsaWVudHMge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCA0LjY4NzVyZW0gLCAyLjg2OTMxODE4MThyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgOS42ODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC42ODc1cmVtICwgMi44NjkzMTgxODE4cmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDkuNjg3NXJlbSApKSB7XG4gICAgLmNsaWVudHMge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoNC42ODc1cmVtICsgNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jbGllbnRzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNC42ODc1cmVtO1xuICB9XG59XG4uY2xpZW50c19fY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5NzVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NzkuOThweCkge1xuICAuY2xpZW50c19fY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY2xpZW50c19fdGl0bGUtYmxvY2sge1xuICAgIG1hcmdpbi1yaWdodDogMTYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1yaWdodDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIC01LjkwOTA5MDgyMzlyZW0gICsgIDI5LjU0NTQ1NDQzMTh2dyAsIDE2LjI1cmVtICkpIHtcbiAgICAuY2xpZW50c19fdGl0bGUtYmxvY2sge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTUuOTA5MDkwODIzOXJlbSAgKyAgMjkuNTQ1NDU0NDMxOHZ3ICwgMTYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTUuOTA5MDkwODIzOXJlbSAgKyAgMjkuNTQ1NDU0NDMxOHZ3ICwgMTYuMjVyZW0gKSkge1xuICAgIC5jbGllbnRzX190aXRsZS1ibG9jayB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMC4wMDAwMDAwNjI1cmVtICsgMTYuMjQ5OTk5OTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jbGllbnRzX190aXRsZS1ibG9jayB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjAwMDAwMDA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NzkuOThweCkge1xuICAuY2xpZW50c19fdGl0bGUtYmxvY2sge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5jbGllbnRzX191cHBlcnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jbGllbnRzX191cHBlcnRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjY4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjY2NDc3MjcyNzNyZW0gICsgIDEuMzYzNjM2MzYzNnZ3ICwgMS42ODc1cmVtICkpIHtcbiAgICAuY2xpZW50c19fdXBwZXJ0aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC42NjQ3NzI3MjczcmVtICArICAxLjM2MzYzNjM2MzZ2dyAsIDEuNjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC42NjQ3NzI3MjczcmVtICArICAxLjM2MzYzNjM2MzZ2dyAsIDEuNjg3NXJlbSApKSB7XG4gICAgLmNsaWVudHNfX3VwcGVydGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygwLjkzNzVyZW0gKyAwLjc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNsaWVudHNfX3VwcGVydGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcbiAgfVxufVxuLmNsaWVudHNfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jbGllbnRzX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAyLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMS4yNzI3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTI1cmVtICkpIHtcbiAgICAuY2xpZW50c19fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMS4yNzI3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDEuNXJlbSAsIDEuMjcyNzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjEyNXJlbSApKSB7XG4gICAgLmNsaWVudHNfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jbGllbnRzX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jbGllbnRzX190aXRsZSB7XG4gICAgd2lkdGg6IDE2Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDcuODEyNXJlbSAsIDQuNTYyNXJlbSAgKyAgMTYuMjV2dyAsIDE2Ljc1cmVtICkpIHtcbiAgICAuY2xpZW50c19fdGl0bGUge1xuICAgICAgd2lkdGg6IGNsYW1wKCA3LjgxMjVyZW0gLCA0LjU2MjVyZW0gICsgIDE2LjI1dncgLCAxNi43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDcuODEyNXJlbSAsIDQuNTYyNXJlbSAgKyAgMTYuMjV2dyAsIDE2Ljc1cmVtICkpIHtcbiAgICAuY2xpZW50c19fdGl0bGUge1xuICAgICAgd2lkdGg6IGNhbGMoNy44MTI1cmVtICsgOC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNsaWVudHNfX3RpdGxlIHtcbiAgICB3aWR0aDogNy44MTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzc5Ljk4cHgpIHtcbiAgLmNsaWVudHNfX3RpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG4uY2xpZW50c19fbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNsaWVudHNfX2xpc3Qge1xuICAgIHJvdy1nYXA6IDMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChyb3ctZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAxLjQyMDQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMy4xMjVyZW0gKSkge1xuICAgIC5jbGllbnRzX19saXN0IHtcbiAgICAgIHJvdy1nYXA6IGNsYW1wKCAxLjg3NXJlbSAsIDEuNDIwNDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAzLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChyb3ctZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAxLjQyMDQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMy4xMjVyZW0gKSkge1xuICAgIC5jbGllbnRzX19saXN0IHtcbiAgICAgIHJvdy1nYXA6IGNhbGMoMS44NzVyZW0gKyAxLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNsaWVudHNfX2xpc3Qge1xuICAgIHJvdy1nYXA6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzc5Ljk4cHgpIHtcbiAgLmNsaWVudHNfX2xpc3Qge1xuICAgIHdpZHRoOiA3MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm5ldyB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMi4zMjk1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAxMHJlbSApKSB7XG4gICAgLm5ldyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMi4zMjk1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAxMHJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMi4zMjk1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAxMHJlbSApKSB7XG4gICAgLm5ldyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyg0LjM3NXJlbSArIDUuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm5ldyB7XG4gICAgcGFkZGluZy1ib3R0b206IDQuMzc1cmVtO1xuICB9XG59XG4ubmV3X19jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubmV3X19jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm5ld19fY29udGFpbmVyOjphZnRlciB7XG4gICAgYm90dG9tOiAtMTByZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGJvdHRvbTogY2xhbXAoIC0xMHJlbSAsIC0yLjMyOTU0NTQ1NDVyZW0gICsgIC0xMC4yMjcyNzI3MjczdncgLCAtNC4zNzVyZW0gKSkge1xuICAgIC5uZXdfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgYm90dG9tOiBjbGFtcCggLTEwcmVtICwgLTIuMzI5NTQ1NDU0NXJlbSAgKyAgLTEwLjIyNzI3MjcyNzN2dyAsIC00LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChib3R0b206IGNsYW1wKCAtMTByZW0gLCAtMi4zMjk1NDU0NTQ1cmVtICArICAtMTAuMjI3MjcyNzI3M3Z3ICwgLTQuMzc1cmVtICkpIHtcbiAgICAubmV3X19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIGJvdHRvbTogY2FsYygtNC4zNzVyZW0gKyAtNS42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubmV3X19jb250YWluZXI6OmFmdGVyIHtcbiAgICBib3R0b206IC00LjM3NXJlbTtcbiAgfVxufVxuLm5ld19fdGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubmV3X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxLjVyZW0gLCAwLjk1NDU0NTQ1NDVyZW0gICsgIDIuNzI3MjcyNzI3M3Z3ICwgM3JlbSApKSB7XG4gICAgLm5ld19fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMC45NTQ1NDU0NTQ1cmVtICArICAyLjcyNzI3MjcyNzN2dyAsIDNyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMC45NTQ1NDU0NTQ1cmVtICArICAyLjcyNzI3MjcyNzN2dyAsIDNyZW0gKSkge1xuICAgIC5uZXdfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjVyZW0gKyAxLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubmV3X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5uZXdfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuODc1cmVtICwgMC41MTEzNjM2MzY0cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAubmV3X190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS44NzVyZW0gLCAwLjUxMTM2MzYzNjRyZW0gICsgIDYuODE4MTgxODE4MnZ3ICwgNS42MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuODc1cmVtICwgMC41MTEzNjM2MzY0cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAubmV3X190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuODc1cmVtICsgMy43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5uZXdfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjg3NXJlbTtcbiAgfVxufVxuLm5ld19fbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubmV3X19saXN0IHtcbiAgICBnYXA6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChnYXA6IGNsYW1wKCAxLjg3NXJlbSAsIDIuNzI3MjcyNzI3M3JlbSAgKyAgLTEuMTM2MzYzNjM2NHZ3ICwgMi41cmVtICkpIHtcbiAgICAubmV3X19saXN0IHtcbiAgICAgIGdhcDogY2xhbXAoIDEuODc1cmVtICwgMi43MjcyNzI3MjczcmVtICArICAtMS4xMzYzNjM2MzY0dncgLCAyLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAyLjcyNzI3MjcyNzNyZW0gICsgIC0xLjEzNjM2MzYzNjR2dyAsIDIuNXJlbSApKSB7XG4gICAgLm5ld19fbGlzdCB7XG4gICAgICBnYXA6IGNhbGMoMi41cmVtICsgLTAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm5ld19fbGlzdCB7XG4gICAgZ2FwOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5uZXdfX2xpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjg3NXJlbSAsIDAuNzM4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA1cmVtICkpIHtcbiAgICAubmV3X19saXN0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjg3NXJlbSAsIDAuNzM4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjg3NXJlbSAsIDAuNzM4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA1cmVtICkpIHtcbiAgICAubmV3X19saXN0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS44NzVyZW0gKyAzLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5uZXdfX2xpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDEuODc1cmVtO1xuICB9XG59XG4ubmV3X19pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm5ld19faXRlbSB7XG4gICAgd2lkdGg6IDIzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTUuNDU0NTQ1NDU0NXJlbSAgKyAgMTAuMjI3MjcyNzI3M3Z3ICwgMjMuMTI1cmVtICkpIHtcbiAgICAubmV3X19pdGVtIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDE1LjQ1NDU0NTQ1NDVyZW0gICsgIDEwLjIyNzI3MjcyNzN2dyAsIDIzLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxNS40NTQ1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAyMy4xMjVyZW0gKSkge1xuICAgIC5uZXdfX2l0ZW0ge1xuICAgICAgd2lkdGg6IGNhbGMoMTcuNXJlbSArIDUuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm5ld19faXRlbSB7XG4gICAgd2lkdGg6IDE3LjVyZW07XG4gIH1cbn1cbi5uZXdfX2RhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDM1JTtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm5ld19fZGF0ZSB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC42MjVyZW0gLCAwLjUzNDA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMC44NzVyZW0gKSkge1xuICAgIC5uZXdfX2RhdGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC42MjVyZW0gLCAwLjUzNDA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMC44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC42MjVyZW0gLCAwLjUzNDA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMC44NzVyZW0gKSkge1xuICAgIC5uZXdfX2RhdGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuNjI1cmVtICsgMC4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5uZXdfX2RhdGUge1xuICAgIGZvbnQtc2l6ZTogMC42MjVyZW07XG4gIH1cbn1cbi5uZXdfX2ltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubmV3X19pbWFnZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS42ODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC42NjQ3NzI3MjczcmVtICArICAxLjM2MzYzNjM2MzZ2dyAsIDEuNjg3NXJlbSApKSB7XG4gICAgLm5ld19faW1hZ2Uge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNjY0NzcyNzI3M3JlbSAgKyAgMS4zNjM2MzYzNjM2dncgLCAxLjY4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNjY0NzcyNzI3M3JlbSAgKyAgMS4zNjM2MzYzNjM2dncgLCAxLjY4NzVyZW0gKSkge1xuICAgIC5uZXdfX2ltYWdlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMC45Mzc1cmVtICsgMC43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5uZXdfX2ltYWdlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjkzNzVyZW07XG4gIH1cbn1cbi5uZXdfX3RleHQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm5ld19fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxcmVtICwgMC45MDkwOTA5MDkxcmVtICArICAwLjQ1NDU0NTQ1NDV2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5uZXdfX3RleHQge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMXJlbSAsIDAuOTA5MDkwOTA5MXJlbSAgKyAgMC40NTQ1NDU0NTQ1dncgLCAxLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDFyZW0gLCAwLjkwOTA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLm5ld19fdGV4dCB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMXJlbSArIDAuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubmV3X190ZXh0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5uZXdfX3RleHQge1xuICAgIHdpZHRoOiAxOC4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTYuMjVyZW0gLCAxNS40NzcyNzI3MjczcmVtICArICAzLjg2MzYzNjM2MzZ2dyAsIDE4LjM3NXJlbSApKSB7XG4gICAgLm5ld19fdGV4dCB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE2LjI1cmVtICwgMTUuNDc3MjcyNzI3M3JlbSAgKyAgMy44NjM2MzYzNjM2dncgLCAxOC4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNi4yNXJlbSAsIDE1LjQ3NzI3MjcyNzNyZW0gICsgIDMuODYzNjM2MzYzNnZ3ICwgMTguMzc1cmVtICkpIHtcbiAgICAubmV3X190ZXh0IHtcbiAgICAgIHdpZHRoOiBjYWxjKDE2LjI1cmVtICsgMi4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubmV3X190ZXh0IHtcbiAgICB3aWR0aDogMTYuMjVyZW07XG4gIH1cbn1cbi5uZXdfX2J0biB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAud29yayB7XG4gICAgcGFkZGluZy10b3A6IDkuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIC0wLjE4MTgxODE4MThyZW0gICsgIDEzLjQwOTA5MDkwOTF2dyAsIDkuODc1cmVtICkpIHtcbiAgICAud29yayB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIC0wLjE4MTgxODE4MThyZW0gICsgIDEzLjQwOTA5MDkwOTF2dyAsIDkuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgLTAuMTgxODE4MTgxOHJlbSAgKyAgMTMuNDA5MDkwOTA5MXZ3ICwgOS44NzVyZW0gKSkge1xuICAgIC53b3JrIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDIuNXJlbSArIDcuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLndvcmsge1xuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC53b3JrIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogOS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMi41cmVtICwgLTAuMTgxODE4MTgxOHJlbSAgKyAgMTMuNDA5MDkwOTA5MXZ3ICwgOS44NzVyZW0gKSkge1xuICAgIC53b3JrIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMi41cmVtICwgLTAuMTgxODE4MTgxOHJlbSAgKyAgMTMuNDA5MDkwOTA5MXZ3ICwgOS44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAtMC4xODE4MTgxODE4cmVtICArICAxMy40MDkwOTA5MDkxdncgLCA5Ljg3NXJlbSApKSB7XG4gICAgLndvcmsge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMi41cmVtICsgNy4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAud29yayB7XG4gICAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcbiAgfVxufVxuLndvcmtfX2NvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi53b3JrX19ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDkuOThweCkge1xuICAud29ya19fYmxvY2sge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbi53b3JrX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAud29ya19fdGl0bGUge1xuICAgIHdpZHRoOiAzMC4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDEwLjMyOTU0NTQ1NDVyZW0gICsgIDI2LjQ3NzI3MjcyNzN2dyAsIDMwLjE4NzVyZW0gKSkge1xuICAgIC53b3JrX190aXRsZSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDEwLjMyOTU0NTQ1NDVyZW0gICsgIDI2LjQ3NzI3MjcyNzN2dyAsIDMwLjE4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMC4zMjk1NDU0NTQ1cmVtICArICAyNi40NzcyNzI3MjczdncgLCAzMC4xODc1cmVtICkpIHtcbiAgICAud29ya19fdGl0bGUge1xuICAgICAgd2lkdGg6IGNhbGMoMTUuNjI1cmVtICsgMTQuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC53b3JrX190aXRsZSB7XG4gICAgd2lkdGg6IDE1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLndvcmtfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC53b3JrX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC53b3JrX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMy4xMjVyZW0gKyAzLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC53b3JrX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAzLjEyNXJlbTtcbiAgfVxufVxuLndvcmtfX3RpdGxlIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG4ud29ya19fdGl0bGUgc3Bhbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbn1cbi53b3JrX19pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQ3JTtcbiAgYm90dG9tOiAzOHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLndvcmtfX2ltZyB7XG4gICAgd2lkdGg6IDE0LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCA3LjE4NzVyZW0gLCA0LjU3Mzg2MzYzNjRyZW0gICsgIDEzLjA2ODE4MTgxODJ2dyAsIDE0LjM3NXJlbSApKSB7XG4gICAgLndvcmtfX2ltZyB7XG4gICAgICB3aWR0aDogY2xhbXAoIDcuMTg3NXJlbSAsIDQuNTczODYzNjM2NHJlbSAgKyAgMTMuMDY4MTgxODE4MnZ3ICwgMTQuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggNy4xODc1cmVtICwgNC41NzM4NjM2MzY0cmVtICArICAxMy4wNjgxODE4MTgydncgLCAxNC4zNzVyZW0gKSkge1xuICAgIC53b3JrX19pbWcge1xuICAgICAgd2lkdGg6IGNhbGMoNy4xODc1cmVtICsgNy4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLndvcmtfX2ltZyB7XG4gICAgd2lkdGg6IDcuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY0OS45OHB4KSB7XG4gIC53b3JrX19pbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi53b3JrX19saW5rIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcbn1cbi53b3JrX19saW5rOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG59XG5cbjpyb290IHtcbiAgLS1kYXJrLWNsOiAjMEUwRTBFO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9udWxsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9ob21lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3V0aWxzL3ZhcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QURHRDs7QUNEQTs7O0VBR0Msc0JBQUE7QURJRDs7QUNNQTs7RUFFQyxZQUFBO0VBQ0EsZ0JBQUE7QURIRDs7QUNLQTtFQUNDLGNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JETlk7RUNPWixvQkROVTtFQ1FWLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QURIRDs7QUNLQTs7O0VBR0Msb0JEbEJZO0VDbUJaLGtCQUFBO0VBQ0Esb0JBQUE7QURGRDs7QUNJQTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QURERDs7QUNHQTtFQUNDLGNBQUE7RUFDQSxxQkFBQTtBREFEOztBQ0VBO0VBQ0MsZ0JBQUE7QURDRDs7QUNDQTtFQUNDLG1CQUFBO0FERUQ7O0FDQUE7Ozs7OztFQU1DLG9CQUFBO0VBQ0Esa0JBQUE7QURHRDs7QUFIQztFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQU1GO0FBQ0E7RUFDQyxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0Q7QUFBQztFQUxEO0lBTUUsY0FBQTtFQUdBO0FBQ0Y7QUFEQztFQUNDLGNBQUE7QUFHRjtBQUFDO0VBQ0MsWUFBQTtBQUVGOztBQUVBOzs7OztDQUFBO0FBUUM7RUFFRSxnQkFBQTtFQUNBLGNBQUE7RUFJQyxvQkFBQTtBQUxKOztBRTlEQTtFQUNDLGtCQUFBO0FGaUVEO0FFaEVDO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7QUZrRUY7O0FFOURDO0VBQ0MsbUJBQUE7QUZpRUY7O0FHcEhBO0VBQ0MsZ0NBQUE7RUFDQSxXQUFBO0FIdUhEO0FHdEhDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FId0hGO0FHdkhFO0VBSEQ7SUFJRSw4QkFBQTtJQUNBLFlBQUE7RUgwSEQ7QUFDRjs7QUd0SEE7RUFDQyxrQkFBQTtBSHlIRDtBSXpERTtFRGpFRjtJQ2tFRyxrQkFBQTtFSjRERDtBQUNGO0FJekRDO0VBRUM7SUR4RUY7TUN5RUcsNEVBaEJjO0lKMkViO0VBQ0Y7RUl6REE7SUQ1RUY7TUM2RUcsMERBQUE7SUo0REM7RUFDRjtBQUNGO0FJMURFO0VEakZGO0lDa0ZHLG9CQUFBO0VKNkREO0FBQ0Y7O0FHMUlDO0VBR0MsYUFBQTtFQUNBLFdBQUE7QUgySUY7QUlwRkU7RUQzREQ7SUM0REUsc0JBQUE7RUp1RkQ7QUFDRjtBSXBGQztFQUVDO0lEbEVEO01DbUVFLGdGQWhCYztJSnNHYjtFQUNGO0VJcEZBO0lEdEVEO01DdUVFLDJEQUFBO0lKdUZDO0VBQ0Y7QUFDRjtBSXJGRTtFRDNFRDtJQzRFRSxzQkFBQTtFSndGRDtBQUNGO0FJMUdFO0VEM0REO0lDNERFLHlCQUFBO0VKNkdEO0FBQ0Y7QUkxR0M7RUFFQztJRGxFRDtNQ21FRSxtRkFoQmM7SUo0SGI7RUFDRjtFSTFHQTtJRHRFRDtNQ3VFRSw4REFBQTtJSjZHQztFQUNGO0FBQ0Y7QUkzR0U7RUQzRUQ7SUM0RUUseUJBQUE7RUo4R0Q7QUFDRjtBR3RMRTtFQUxEO0lBTUUsc0JBQUE7SUFDQSxtQkFBQTtFSHlMRDtBQUNGO0FHdExDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FId0xGO0FJMUlFO0VEaEREO0lDaURFLHFCQUFBO0VKNklEO0FBQ0Y7QUkxSUM7RUFFQztJRHZERDtNQ3dERSw4RUFoQmM7SUo0SmI7RUFDRjtFSTFJQTtJRDNERDtNQzRERSwyREFBQTtJSjZJQztFQUNGO0FBQ0Y7QUkzSUU7RURoRUQ7SUNpRUUsc0JBQUE7RUo4SUQ7QUFDRjtBSWhLRTtFRGhERDtJQ2lERSxXQUFBO0VKbUtEO0FBQ0Y7QUloS0M7RUFFQztJRHZERDtNQ3dERSxvRUFoQmM7SUprTGI7RUFDRjtFSWhLQTtJRDNERDtNQzRERSxrREFBQTtJSm1LQztFQUNGO0FBQ0Y7QUlqS0U7RURoRUQ7SUNpRUUsYUFBQTtFSm9LRDtBQUNGO0FHaE9FO0VBTkQ7SUFPRSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtJQUNBLE9BQUE7RUhtT0Q7QUFDRjtBR2hPQztFQUdDLGVBQUE7RUFDQSxrQkFBQTtBSGdP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YUQ7QUFDRjtBSXJiRTtFRXBFRjtJRnFFRyxhQUFBO0VKd2JEO0FBQ0Y7QUlyYkM7RUFFQztJRTNFRjtNRjRFRyx5RUFoQmM7SUp1Y2I7RUFDRjtFSXJiQTtJRS9FRjtNRmdGRyxzREFBQTtJSndiQztFQUNGO0FBQ0Y7QUl0YkU7RUVwRkY7SUZxRkcsZUFBQTtFSnliRDtBQUNGO0FJM2NFO0VFcEVGO0lGcUVHLFdBQUE7RUo4Y0Q7QUFDRjtBSTNjQztFQUVDO0lFM0VGO01GNEVHLG9FQWhCYztJSjZkYjtFQUNGO0VJM2NBO0lFL0VGO01GZ0ZHLG9EQUFBO0lKOGNDO0VBQ0Y7QUFDRjtBSTVjRTtFRXBGRjtJRnFGRyxlQUFBO0VKK2NEO0FBQ0Y7QU01aEJRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBTjZoQlo7QUl4ZUU7RUUzRE07SUY0REwsY0FBQTtFSjJlRDtBQUNGO0FJeGVDO0VBRUM7SUVsRU07TUZtRUwsdUVBaEJjO0lKMGZiO0VBQ0Y7RUl4ZUE7SUV0RU07TUZ1RUwsb0RBQUE7SUoyZUM7RUFDRjtBQUNGO0FJemVFO0VFM0VNO0lGNEVMLGVBQUE7RUo0ZUQ7QUFDRjtBSTlmRTtFRTNETTtJRjRETCxjQUFBO0VKaWdCRDtBQUNGO0FJOWZDO0VBRUM7SUVsRU07TUZtRUwsMERBaEJjO0lKZ2hCYjtFQUNGO0VJOWZBO0lFdEVNO01GdUVMLHFEQUFBO0lKaWdCQztFQUNGO0FBQ0Y7QUkvZkU7RUUzRU07SUY0RUwsZUFBQTtFSmtnQkQ7QUFDRjtBSXBoQkU7RUVqREU7SUZrREQsbUJBQUE7RUp1aEJEO0FBQ0Y7QUlwaEJDO0VBRUM7SUV4REU7TUZ5REQsMkVBaEJjO0lKc2lCYjtFQUNGO0VJcGhCQTtJRTVERTtNRjZERCx1REFBQTtJSnVoQkM7RUFDRjtBQUNGO0FJcmhCRTtFRWpFRTtJRmtFRCxrQkFBQTtFSndoQkQ7QUFDRjs7QU1ybEJBO0VBQ1Esa0JBQUE7RUFJQSxzQkFBQTtBTnFsQlI7QUkvaUJFO0VFM0NGO0lGNENHLGVBQUE7RUprakJEO0FBQ0Y7QUkvaUJDO0VBRUM7SUVsREY7TUZtREcseUVBaEJjO0lKaWtCYjtFQUNGO0VJL2lCQTtJRXRERjtNRnVERyxtREFBQTtJSmtqQkM7RUFDRjtBQUNGO0FJaGpCRTtFRTNERjtJRjRERyxhQUFBO0VKbWpCRDtBQUNGO0FJcmtCRTtFRTNDRjtJRjRDRyxhQUFBO0VKd2tCRDtBQUNGO0FJcmtCQztFQUVDO0lFbERGO01GbURHLHdFQWhCYztJSnVsQmI7RUFDRjtFSXJrQkE7SUV0REY7TUZ1REcsb0RBQUE7SUp3a0JDO0VBQ0Y7QUFDRjtBSXRrQkU7RUUzREY7SUY0REcsY0FBQTtFSnlrQkQ7QUFDRjtBSTNsQkU7RUUzQ0Y7SUY0Q0csZUFBQTtFSjhsQkQ7QUFDRjtBSTNsQkM7RUFFQztJRWxERjtNRm1ERywwRUFoQmM7SUo2bUJiO0VBQ0Y7RUkzbEJBO0lFdERGO01GdURHLG1EQUFBO0lKOGxCQztFQUNGO0FBQ0Y7QUk1bEJFO0VFM0RGO0lGNERHLGVBQUE7RUorbEJEO0FBQ0Y7QU10cEJJO0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtBTnVwQlI7QUl2bkJFO0VFckNFO0lGc0NELG1CQUFBO0VKMG5CRDtBQUNGO0FJdm5CQztFQUVDO0lFNUNFO01GNkNELDJFQWhCYztJSnlvQmI7RUFDRjtFSXZuQkE7SUVoREU7TUZpREQsdURBQUE7SUowbkJDO0VBQ0Y7QUFDRjtBSXhuQkU7RUVyREU7SUZzREQsa0JBQUE7RUoybkJEO0FBQ0Y7QU01cUJRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FOOHFCWjtBTTNxQkk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QU42cUJSOztBTXpxQkE7RUFDSSxrQkFBQTtFQUtBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EscURBQUE7QU51cUJKO0FJcHFCRTtFRWRGO0lGZUcsY0FBQTtFSnVxQkQ7QUFDRjtBSXBxQkM7RUFFQztJRXJCRjtNRnNCRyxxRUFoQmM7SUpzckJiO0VBQ0Y7RUlwcUJBO0lFekJGO01GMEJHLGdEQUFBO0lKdXFCQztFQUNGO0FBQ0Y7QUlycUJFO0VFOUJGO0lGK0JHLFVBQUE7RUp3cUJEO0FBQ0Y7QUkxckJFO0VFZEY7SUZlRyxnQkFBQTtFSjZyQkQ7QUFDRjtBSTFyQkM7RUFFQztJRXJCRjtNRnNCRywwRUFoQmM7SUo0c0JiO0VBQ0Y7RUkxckJBO0lFekJGO01GMEJHLG1EQUFBO0lKNnJCQztFQUNGO0FBQ0Y7QUkzckJFO0VFOUJGO0lGK0JHLGNBQUE7RUo4ckJEO0FBQ0Y7QUlodEJFO0VFZEY7SUZlRyxlQUFBO0VKbXRCRDtBQUNGO0FJaHRCQztFQUVDO0lFckJGO01Gc0JHLHlFQWhCYztJSmt1QmI7RUFDRjtFSWh0QkE7SUV6QkY7TUYwQkcsc0RBQUE7SUptdEJDO0VBQ0Y7QUFDRjtBSWp0QkU7RUU5QkY7SUYrQkcsZ0JBQUE7RUpvdEJEO0FBQ0Y7QUl0dUJFO0VFZEY7SUZlRyxnQkFBQTtFSnl1QkQ7QUFDRjtBSXR1QkM7RUFFQztJRXJCRjtNRnNCRywwRUFoQmM7SUp3dkJiO0VBQ0Y7RUl0dUJBO0lFekJGO01GMEJHLHVEQUFBO0lKeXVCQztFQUNGO0FBQ0Y7QUl2dUJFO0VFOUJGO0lGK0JHLGlCQUFBO0VKMHVCRDtBQUNGO0FJNXZCRTtFRWRGO0lGZUcsb0JBQUE7RUordkJEO0FBQ0Y7QUk1dkJDO0VBRUM7SUVyQkY7TUZzQkcsNEVBaEJjO0lKOHdCYjtFQUNGO0VJNXZCQTtJRXpCRjtNRjBCRyx3REFBQTtJSit2QkM7RUFDRjtBQUNGO0FJN3ZCRTtFRTlCRjtJRitCRyxrQkFBQTtFSmd3QkQ7QUFDRjtBTW54Qkk7RUFDSSxxQkFBQTtFQUNBLGlDQUFBO0FOcXhCUjs7QUl0eEJFO0VFTUU7SUZMRCxnQkFBQTtFSjB4QkQ7QUFDRjtBSXZ4QkM7RUFFQztJRURFO01GRUQsMEVBaEJjO0lKeXlCYjtFQUNGO0VJdnhCQTtJRUxFO01GTUQsb0RBQUE7SUoweEJDO0VBQ0Y7QUFDRjtBSXh4QkU7RUVWRTtJRldELGdCQUFBO0VKMnhCRDtBQUNGOztBTWx5QkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QU5xeUJKO0FJbHpCRTtFRVdGO0lGVkcsZUFBQTtFSnF6QkQ7QUFDRjtBSWx6QkM7RUFFQztJRUlGO01GSEcsd0VBYmU7SUppMEJkO0VBQ0Y7RUlsekJBO0lFQUY7TUZDRyxrREFBQTtJSnF6QkM7RUFDRjtBQUNGO0FJbnpCRTtFRUxGO0lGTUcsV0FBQTtFSnN6QkQ7QUFDRjtBTXp6Qkk7RUFKSjtJQUtRLGFBQUE7RU40ekJOO0FBQ0Y7O0FNMXpCQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBTjZ6Qko7QUlsMUJFO0VFbUJGO0lGbEJHLGdCQUFBO0VKcTFCRDtBQUNGO0FJbDFCQztFQUVDO0lFWUY7TUZYRyx5RUFiZTtJSmkyQmQ7RUFDRjtFSWwxQkE7SUVRRjtNRlBHLG1EQUFBO0lKcTFCQztFQUNGO0FBQ0Y7QUluMUJFO0VFR0Y7SUZGRyxZQUFBO0VKczFCRDtBQUNGO0FNajFCSTtFQUpKO0lBS1EsYUFBQTtFTm8xQk47QUFDRjs7QUk3MkJFO0VFK0JGO0lGOUJHLGtCQUFBO0VKaTNCRDtBQUNGO0FJOTJCQztFQUVDO0lFd0JGO01GdkJHLDJFQWhCYztJSmc0QmI7RUFDRjtFSTkyQkE7SUVvQkY7TUZuQkcsdURBQUE7SUppM0JDO0VBQ0Y7QUFDRjtBSS8yQkU7RUVlRjtJRmRHLG1CQUFBO0VKazNCRDtBQUNGO0FNbDJCSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FObzJCUjs7QU1qMkJBO0VBR0ksY0FBQTtFQUNBLGtCQUFBO0FOazJCSjtBSTc0QkU7RUV1Q0Y7SUZ0Q0csaUJBQUE7RUpnNUJEO0FBQ0Y7QUk3NEJDO0VBRUM7SUVnQ0Y7TUYvQkcsNkVBaEJjO0lKKzVCYjtFQUNGO0VJNzRCQTtJRTRCRjtNRjNCRyx1REFBQTtJSmc1QkM7RUFDRjtBQUNGO0FJOTRCRTtFRXVCRjtJRnRCRyxnQkFBQTtFSmk1QkQ7QUFDRjtBSW42QkU7RUV1Q0Y7SUZ0Q0csd0JBQUE7RUpzNkJEO0FBQ0Y7QUluNkJDO0VBRUM7SUVnQ0Y7TUYvQkcsK0VBaEJjO0lKcTdCYjtFQUNGO0VJbjZCQTtJRTRCRjtNRjNCRywyREFBQTtJSnM2QkM7RUFDRjtBQUNGO0FJcDZCRTtFRXVCRjtJRnRCRyxxQkFBQTtFSnU2QkQ7QUFDRjtBTTc0Qkk7RUFFSSxnQkFBQTtBTjg0QlI7QUk1N0JFO0VFNENFO0lGM0NELHdCQUFBO0VKKzdCRDtBQUNGO0FJNTdCQztFQUVDO0lFcUNFO01GcENELGtGQWhCYztJSjg4QmI7RUFDRjtFSTU3QkE7SUVpQ0U7TUZoQ0QsNkRBQUE7SUorN0JDO0VBQ0Y7QUFDRjtBSTc3QkU7RUU0QkU7SUYzQkQsd0JBQUE7RUpnOEJEO0FBQ0Y7QU1qNkJJO0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtBTms2QlI7QUl0OUJFO0VFaURFO0lGaERELG1CQUFBO0VKeTlCRDtBQUNGO0FJdDlCQztFQUVDO0lFMENFO01GekNELDBFQWhCYztJSncrQmI7RUFDRjtFSXQ5QkE7SUVzQ0U7TUZyQ0Qsc0RBQUE7SUp5OUJDO0VBQ0Y7QUFDRjtBSXY5QkU7RUVpQ0U7SUZoQ0QsaUJBQUE7RUowOUJEO0FBQ0Y7O0FNcjdCQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBTnc3Qko7QUlqL0JFO0VFdURGO0lGdERHLG9CQUFBO0VKby9CRDtBQUNGO0FJai9CQztFQUVDO0lFZ0RGO01GL0NHLDZFQWhCYztJSm1nQ2I7RUFDRjtFSWovQkE7SUU0Q0Y7TUYzQ0csMERBQUE7SUpvL0JDO0VBQ0Y7QUFDRjtBSWwvQkU7RUV1Q0Y7SUZ0Q0csc0JBQUE7RUpxL0JEO0FBQ0Y7QUl2Z0NFO0VFdURGO0lGdERHLGFBQUE7RUowZ0NEO0FBQ0Y7QUl2Z0NDO0VBRUM7SUVnREY7TUYvQ0csb0VBaEJjO0lKeWhDYjtFQUNGO0VJdmdDQTtJRTRDRjtNRjNDRyxnREFBQTtJSjBnQ0M7RUFDRjtBQUNGO0FJeGdDRTtFRXVDRjtJRnRDRyxXQUFBO0VKMmdDRDtBQUNGO0FNaitCSTtFQUxKO0lBTVEsc0JBQUE7RU5vK0JOO0FBQ0Y7QUlsaUNFO0VFdURGO0lGdERHLG9CQUFBO0VKcWlDRDtBQUNGO0FJbGlDQztFQUVDO0lFZ0RGO01GL0NHLDRFQWhCYztJSm9qQ2I7RUFDRjtFSWxpQ0E7SUU0Q0Y7TUYzQ0cseURBQUE7SUpxaUNDO0VBQ0Y7QUFDRjtBSW5pQ0U7RUV1Q0Y7SUZ0Q0cscUJBQUE7RUpzaUNEO0FBQ0Y7QU12L0JJO0VBR0ksa0JBQUE7QU51L0JSO0FJM2pDRTtFRWlFRTtJRmhFRCxpQkFBQTtFSjhqQ0Q7QUFDRjtBSTNqQ0M7RUFFQztJRTBERTtNRnpERCwwRUFoQmM7SUo2a0NiO0VBQ0Y7RUkzakNBO0lFc0RFO01GckRELHFEQUFBO0lKOGpDQztFQUNGO0FBQ0Y7QUk1akNFO0VFaURFO0lGaERELGNBQUE7RUorakNEO0FBQ0Y7QUlqbENFO0VFaUVFO0lGaEVELHFCQUFBO0VKb2xDRDtBQUNGO0FJamxDQztFQUVDO0lFMERFO01GekRELDZFQWhCYztJSm1tQ2I7RUFDRjtFSWpsQ0E7SUVzREU7TUZyREQseURBQUE7SUpvbENDO0VBQ0Y7QUFDRjtBSWxsQ0U7RUVpREU7SUZoREQsb0JBQUE7RUpxbENEO0FBQ0Y7QU1oaUNJO0VBRUksZ0JBQUE7QU5paUNSO0FJMW1DRTtFRXVFRTtJRnRFRCxrQkFBQTtFSjZtQ0Q7QUFDRjtBSTFtQ0M7RUFFQztJRWdFRTtNRi9ERCwyRUFoQmM7SUo0bkNiO0VBQ0Y7RUkxbUNBO0lFNERFO01GM0RELHdEQUFBO0lKNm1DQztFQUNGO0FBQ0Y7QUkzbUNFO0VFdURFO0lGdERELG1CQUFBO0VKOG1DRDtBQUNGO0FNcmpDUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUVBLGdDQUFBO0FOc2pDWjtBSXhvQ0U7RUUyRU07SUYxRUwsWUFBQTtFSjJvQ0Q7QUFDRjtBSXhvQ0M7RUFFQztJRW9FTTtNRm5FTCx1RUFoQmM7SUowcENiO0VBQ0Y7RUl4b0NBO0lFZ0VNO01GL0RMLHNEQUFBO0lKMm9DQztFQUNGO0FBQ0Y7QUl6b0NFO0VFMkRNO0lGMURMLGdCQUFBO0VKNG9DRDtBQUNGO0FJOXBDRTtFRXNGRTtJRnJGRCxpQkFBQTtFSmlxQ0Q7QUFDRjtBSTlwQ0M7RUFFQztJRStFRTtNRjlFRCw2RUFoQmM7SUpnckNiO0VBQ0Y7RUk5cENBO0lFMkVFO01GMUVELHVEQUFBO0lKaXFDQztFQUNGO0FBQ0Y7QUkvcENFO0VFc0VFO0lGckVELGdCQUFBO0VKa3FDRDtBQUNGO0FNMWxDSTtFQUdJLGdCQUFBO0FOMGxDUjtBSXZyQ0U7RUUwRkU7SUZ6RkQsb0JBQUE7RUowckNEO0FBQ0Y7QUl2ckNDO0VBRUM7SUVtRkU7TUZsRkQsOEVBaEJjO0lKeXNDYjtFQUNGO0VJdnJDQTtJRStFRTtNRjlFRCx5REFBQTtJSjByQ0M7RUFDRjtBQUNGO0FJeHJDRTtFRTBFRTtJRnpFRCxvQkFBQTtFSjJyQ0Q7QUFDRjtBSTdzQ0U7RUUwRkU7SUZ6RkQsdUJBQUE7RUpndENEO0FBQ0Y7QUk3c0NDO0VBRUM7SUVtRkU7TUZsRkQsaUZBaEJjO0lKK3RDYjtFQUNGO0VJN3NDQTtJRStFRTtNRjlFRCw4REFBQTtJSmd0Q0M7RUFDRjtBQUNGO0FJOXNDRTtFRTBFRTtJRnpFRCx3QkFBQTtFSml0Q0Q7QUFDRjs7QU1qb0NBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FOb29DSjtBSTF1Q0U7RUVrR0Y7SUZqR0csdUJBQUE7RUo2dUNEO0FBQ0Y7QUkxdUNDO0VBRUM7SUUyRkY7TUYxRkcsZ0ZBaEJjO0lKNHZDYjtFQUNGO0VJMXVDQTtJRXVGRjtNRnRGRyw0REFBQTtJSjZ1Q0M7RUFDRjtBQUNGO0FJM3VDRTtFRWtGRjtJRmpGRyxzQkFBQTtFSjh1Q0Q7QUFDRjtBTXhwQ0k7RUFOSjtJQU9RLGVBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RU4ycENOO0FBQ0Y7QU0xcENJO0VBWEo7SUFZUSxlQUFBO0VONnBDTjtBQUNGOztBTTFwQ0E7RUFJSSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBTjBwQ0o7QUl2eENFO0VFa0hGO0lGakhHLHNCQUFBO0VKMHhDRDtBQUNGO0FJdnhDQztFQUVDO0lFMkdGO01GMUdHLCtFQWhCYztJSnl5Q2I7RUFDRjtFSXZ4Q0E7SUV1R0Y7TUZ0R0csMkRBQUE7SUoweENDO0VBQ0Y7QUFDRjtBSXh4Q0U7RUVrR0Y7SUZqR0cscUJBQUE7RUoyeENEO0FBQ0Y7QUk3eUNFO0VFa0hGO0lGakhHLHlCQUFBO0VKZ3pDRDtBQUNGO0FJN3lDQztFQUVDO0lFMkdGO01GMUdHLGtGQWhCYztJSit6Q2I7RUFDRjtFSTd5Q0E7SUV1R0Y7TUZ0R0csOERBQUE7SUpnekNDO0VBQ0Y7QUFDRjtBSTl5Q0U7RUVrR0Y7SUZqR0csd0JBQUE7RUppekNEO0FBQ0Y7QUluMENFO0VFa0hGO0lGakhHLGdCQUFBO0VKczBDRDtBQUNGO0FJbjBDQztFQUVDO0lFMkdGO01GMUdHLHNFQWhCYztJSnExQ2I7RUFDRjtFSW4wQ0E7SUV1R0Y7TUZ0R0csZ0RBQUE7SUpzMENDO0VBQ0Y7QUFDRjtBSXAwQ0U7RUVrR0Y7SUZqR0csV0FBQTtFSnUwQ0Q7QUFDRjtBTXh0Q1E7RUFDSSxxQkFBQTtBTjB0Q1o7QU14dENRO0VBQ0ksd0JBQUE7QU4wdENaO0FNeHRDUTtFQUNJLGdDQUFBO0FOMHRDWjtBTXR0Q0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFHQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QU5zdENSO0FJMTJDRTtFRTRJRTtJRjNJRCxjQUFBO0VKNjJDRDtBQUNGO0FJMTJDQztFQUVDO0lFcUlFO01GcElELHNFQWhCYztJSjQzQ2I7RUFDRjtFSTEyQ0E7SUVpSUU7TUZoSUQsa0RBQUE7SUo2MkNDO0VBQ0Y7QUFDRjtBSTMyQ0U7RUU0SEU7SUYzSEQsWUFBQTtFSjgyQ0Q7QUFDRjtBSWg0Q0U7RUU0SUU7SUYzSUQsZUFBQTtFSm00Q0Q7QUFDRjtBSWg0Q0M7RUFFQztJRXFJRTtNRnBJRCx5RUFoQmM7SUprNUNiO0VBQ0Y7RUloNENBO0lFaUlFO01GaElELHNE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clBHLHlCQUFBO0VKd21ERDtBQUNGO0FNbDNDSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QU5vM0NSO0FJL25ERTtFRXdRRTtJRnZRRCxZQUFBO0VKa29ERDtBQUNGO0FJL25EQztFQUVDO0lFaVFFO01GaFFELHFFQWhCYztJSmlwRGI7RUFDRjtFSS9uREE7SUU2UEU7TUY1UEQsa0RBQUE7SUprb0RDO0VBQ0Y7QUFDRjtBSWhvREU7RUV3UEU7SUZ2UEQsYUFBQTtFSm1vREQ7QUFDRjtBTXQ0Q0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FOdzRDUjtBTXA0Q1k7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QU5zNENoQjtBSTdwREU7RUUyUkU7SUYxUkQsZ0JBQUE7RUpncUREO0FBQ0Y7QUk3cERDO0VBRUM7SUVvUkU7TUZuUkQsNEVBaEJjO0lKK3FEYjtFQUNGO0VJN3BEQTtJRWdSRTtNRi9RRCx3REFBQTtJSmdxREM7RUFDRjtBQUNGO0FJOXBERTtFRTJRRTtJRjFRRCxpQkFBQTtFSmlxREQ7QUFDRjtBSW5yREU7RUUyUkU7SUYxUkQsZ0JBQUE7RUpzckREO0FBQ0Y7QUluckRDO0VBRUM7SUVvUkU7TUZuUkQsMkVBaEJjO0lKcXNEYjtFQUNGO0VJbnJEQTtJRWdSRTtNRi9RRCx1REFBQTtJSnNyREM7RUFDRjtBQUNGO0FJcHJERTtFRTJRRTtJRjFRRCxpQkFBQTtFSnVyREQ7QUFDRjtBTXo2Q0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBTjI2Q1I7QUk5c0RFO0VFZ1NFO0lGL1JELG9CQUFBO0VKaXRERDtBQUNGO0FJOXNEQztFQUVDO0lFeVJFO01GeFJELDhFQWhCYztJSmd1RGI7RUFDRjtFSTlzREE7SUVxUkU7TUZwUkQsMkRBQUE7SUppdERDO0VBQ0Y7QUFDRjtBSS9zREU7RUVnUkU7SUYvUUQscUJBQUE7RUprdEREO0FBQ0Y7QUlwdURFO0VFZ1NFO0lGL1JELHFCQUFBO0VKdXVERDtBQUNGO0FJcHVEQztFQUVDO0lFeVJFO01GeFJELDZFQWhCYztJSnN2RGI7RUFDRjtFSXB1REE7SUVxUkU7TUZwUkQsMERBQUE7SUp1dURDO0VBQ0Y7QUFDRjtBSXJ1REU7RUVnUkU7SUYvUUQsc0JBQUE7RUp3dUREO0FBQ0Y7QU1wOUNRO0VBTko7SUFPUSxlQUFBO0VOdTlDVjtBQUNGO0FNcDlDSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBTnM5Q1I7QUlud0RFO0VFZ1RFO0lGL1NELGNBQUE7RUpzd0REO0FBQ0Y7QUlud0RDO0VBRUM7SUV5U0U7TUZ4U0Qsd0VBaEJjO0lKcXhEYjtFQUNGO0VJbndEQTtJRXFTRTtNRnBTRCxnREFBQTtJSnN3REM7RUFDRjtBQUNGO0FJcHdERTtFRWdTRTtJRi9SRCxjQUFBO0VKdXdERDtBQUNGO0FJenhERTtFRWdURTtJRi9TRCxnQkFBQTtFSjR4REQ7QUFDRjtBSXp4REM7RUFFQztJRXlTRTtNRnhTRCwyRUFoQmM7SUoyeURiO0VBQ0Y7RUl6eERBO0lFcVNFO01GcFNELHVEQUFBO0lKNHhEQztFQUNGO0FBQ0Y7QUkxeERFO0VFZ1NFO0lGL1JELGlCQUFBO0VKNnhERDtBQUNGO0FNMS9DSTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QU40L0NSO0FNMS9DUTtFQUpKO0lBS1EsZUFBQTtJQUNBLGNBQUE7RU42L0NWO0FBQ0Y7QU0xL0NJO0VBQ0ksa0JBQUE7QU40L0NSO0FNMy9DUTtFQUZKO0lBR1EsYUFBQTtFTjgvQ1Y7QUFDRjtBTTMvQ0k7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDhGQUFBO0FONi9DUjtBTTMvQ1E7RUFQSjtJQVFRLFdBQUE7SUFDQSxVQUFBO0VOOC9DVjtBQUNGO0FNNy9DUTtFQVhKO0lBWVEsVUFBQTtJQUNBLFNBQUE7RU5nZ0RWO0FBQ0Y7O0FNNy9DQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBTmdnREo7QUkzMURFO0VFdVZGO0lGdFZHLG1CQUFBO0VKODFERDtBQUNGO0FJMzFEQztFQUVDO0lFZ1ZGO01GL1VHLDZFQWhCYztJSjYyRGI7RUFDRjtFSTMxREE7SUU0VUY7TUYzVUcsOERBQUE7SUo4MURDO0VBQ0Y7QUFDRjtBSTUxREU7RUV1VUY7SUZ0VUcsd0JBQUE7RUorMUREO0FBQ0Y7QUlqM0RFO0VFdVZGO0lGdFZHLHFCQUFBO0VKbzNERDtBQUNGO0FJajNEQztFQUVDO0lFZ1ZGO01GL1VHLDhFQWhCYztJSm00RGI7RUFDRjtFSWozREE7SUU0VUY7TUYzVUcsc0RBQUE7SUpvM0RDO0VBQ0Y7QUFDRjtBSWwzREU7RUV1VUY7SUZ0VUcscUJBQUE7RUpxM0REO0FBQ0Y7QUl2NERFO0VFdVZGO0lGdFZHLHNCQUFBO0VKMDRERDtBQUNGO0FJdjREQztFQUVDO0lFZ1ZGO01GL1VHLCtFQWhCYztJSnk1RGI7RUFDRjtFSXY0REE7SUU0VUY7TUYzVUcsNERBQUE7SUowNERDO0VBQ0Y7QUFDRjtBSXg0REU7RUV1VUY7SUZ0VUcsdUJBQUE7RUoyNEREO0FBQ0Y7QU05akRJO0VBQ0ksbUJBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0FOK2pEUjtBSWw2REU7RUUrVkU7SUY5VkQsa0JBQUE7RUpxNkREO0FBQ0Y7QUlsNkRDO0VBRUM7SUV3VkU7TUZ2VkQsMkVBaEJjO0lKbzdEYjtFQUNGO0VJbDZEQTtJRW9WRTtNRm5WRCx3REFBQTtJSnE2REM7RUFDRjtBQUNGO0FJbjZERTtFRStVRTtJRjlVRCxtQkFBQTtFSnM2REQ7QUFDRjtBSXg3REU7RUUrVkU7SUY5VkQsaUJBQUE7RUoyN0REO0FBQ0Y7QUl4N0RDO0VBRUM7SUV3VkU7TUZ2VkQsNkVBaEJjO0lKMDhEYjtFQUNGO0VJeDdEQTtJRW9WRTtNRm5WRCx1REFBQTtJSjI3REM7RUFDRjtBQUNGO0FJejdERTtFRStVRTtJRjlVRCxnQkFBQTtFSjQ3REQ7QUFDRjtBTXptRFE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBTjBtRFo7QUl0OURFO0VFcVdNO0lGcFdMLGVBQUE7RUp5OUREO0FBQ0Y7QUl0OURDO0VBRUM7SUU4Vk07TUY3VkwseUVBaEJjO0lKdytEYjtFQUNGO0VJdDlEQTtJRTBWTTtNRnpWTCxzREFBQTtJSnk5REM7RUFDRjtBQUNGO0FJdjlERTtFRXFWTTtJRnBWTCxnQkFBQTtFSjA5REQ7QUFDRjtBSTUrREU7RUUrVkU7SUY5VkQsbUJBQUE7RUorK0REO0FBQ0Y7QUk1K0RDO0VBRUM7SUV3VkU7TUZ2VkQsNkVBaEJjO0lKOC9EYjtFQUNGO0VJNStEQTtJRW9WRTtNRm5WRCw4REFBQTtJSisrREM7RUFDRjtBQUNGO0FJNytERTtFRStVRTtJRjlVRCx3QkFBQTtFSmcvREQ7QUFDRjtBTXBwRFE7RUFHSTtJQUVJLFVBQUE7RU5tcERkO0FBQ0Y7QUl2Z0VFO0VFaVhVO0lGaFhULGFBQUE7RUowZ0VEO0FBQ0Y7QUl2Z0VDO0VBRUM7SUUwV1U7TUZ6V1Qsc0VBaEJjO0lKeWhFYjtFQUNGO0VJdmdFQTtJRXNXVTtNRnJXVCxtREFBQTtJSjBnRUM7RUFDRjtBQUNGO0FJeGdFRTtFRWlXVTtJRmhXVCxjQUFBO0VKMmdFRDtBQUNGOztBTWxxREE7RUFDUSxnQ0FBQTtFQUNBLGFBQUE7QU5xcURSO0FNcHFEUTtFQUhSO0lBSVksYUFBQTtFTnVxRFY7QUFDRjtBTXRxREU7RUFDVSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FOd3FEWjtBSTdpRUU7RUVpWUE7SUZoWUMsc0JBQUE7RUpnakVEO0FBQ0Y7QUk3aUVDO0VBRUM7SUUwWEE7TUZ6WEMsZ0ZBaEJjO0lKK2pFYjtFQUNGO0VJN2lFQTtJRXNYQTtNRnJYQywwREFBQTtJSmdqRUM7RUFDRjtBQUNGO0FJOWlFRTtFRWlYQTtJRmhYQyxzQkFBQTtFSmlqRUQ7QUFDRjtBSW5rRUU7RUVpWUE7SUZoWUMsMEJBQUE7RUpza0VEO0FBQ0Y7QUlua0VDO0VBRUM7SUUwWEE7TUZ6WEMsb0ZBaEJjO0lKcWxFYjtFQUNGO0VJbmtFQTtJRXNYQTtNRnJYQyw4REFBQTtJSnNrRUM7RUFDRjtBQUNGO0FJcGtFRTtFRWlYQTtJRmhYQyx3QkFBQTtFSnVrRUQ7QUFDRjtBTWp0RFk7RUFDQSxXQUFBO0VBR0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QU5pdERaO0FJam1FRTtFRXdZVTtJRnZZVCxpQkFBQTtFSm9tRUQ7QUFDRjtBSWptRUM7RUFFQztJRWlZVTtNRmhZVCwwRUFoQmM7SUptbkViO0VBQ0Y7RUlqbUVBO0lFNlhVO01GNVhULHFEQUFBO0lKb21FQztFQUNGO0FBQ0Y7QUlsbUVFO0VFd1hVO0lGdlhULGNBQUE7RUpxbUVEO0FBQ0Y7QUl2bkVFO0VFd1lVO0lGdllULGtCQUFBO0VKMG5FRDtBQUNGO0FJdm5FQztFQUVDO0lFaVlVO01GaFlULDJFQWhCYztJSnlvRWI7RUFDRjtFSXZuRUE7SUU2WFU7TUY1WFQsc0RBQUE7SUowbkVDO0VBQ0Y7QUFDRjtBSXhuRUU7RUV3WFU7SUZ2WFQsZUFBQTtFSjJuRUQ7QUFDRjtBTTV2RFk7RUFUQTtJQVVJLGFBQUE7RU4rdkRkO0FBQ0Y7QU0zdkRFO0VBQ1UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FONnZEWjtBSXhwRUU7RUV1WkE7SUZ0WkMsbUJBQUE7RUoycEVEO0FBQ0Y7QUl4cEVDO0VBRUM7SUVnWkE7TUYvWUMsNEVBaEJjO0lKMHFFYjtFQUNGO0VJeHBFQTtJRTRZQTtNRjNZQyw0REFBQTtJSjJwRUM7RUFDRjtBQUNGO0FJenBFRTtFRXVZQTtJRnRZQyx1QkFBQTtFSjRwRUQ7QUFDRjtBSTlxRUU7RUV1WkE7SUZ0WkMscUJBQUE7RUppckVEO0FBQ0Y7QUk5cUVDO0VBRUM7SUVnWkE7TUYvWUMsOEVBaEJjO0lKZ3NFYjtFQUNGO0VJOXFFQTtJRTRZQTtNRjNZQyxzREFBQTtJSmlyRUM7RUFDRjtBQUNGO0FJL3FFRTtFRXVZQTtJRnRZQyxxQkFBQTtFSmtyRUQ7QUFDRjtBTWx5RFk7RUFYVjtJQVljLFlBQUE7RU5xeURkO0FBQ0Y7QU1seURFO0VBQ1UsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBTm95RFo7QUk5c0VFO0VFdWFBO0lGdGFDLG9CQUFBO0VKaXRFRDtBQUNGO0FJOXNFQztFQUVDO0lFZ2FBO01GL1pDLDRFQWhCYztJSmd1RWI7RUFDRjtFSTlzRUE7SUU0WkE7TUYzWkMsdURBQUE7SUppdEVDO0VBQ0Y7QUFDRjtBSS9zRUU7RUV1WkE7SUZ0WkMsb0JBQUE7RUprdEVEO0FBQ0Y7QUlwdUVFO0VFdWFBO0lGdGFDLHFCQUFBO0VKdXVFRDtBQUNGO0FJcHVFQztFQUVDO0lFZ2FBO01GL1pDLHVGQWhCYztJSnN2RWI7RUFDRjtFSXB1RUE7SUU0WkE7TUYzWkMseUVBQUE7SUp1dUVDO0VBQ0Y7QUFDRjtBSXJ1RUU7RUV1WkE7SUZ0WkMsNkJBQUE7RUp3dUVEO0FBQ0Y7QU03MERZO0VBTlY7SUFPYyxtQkFBQTtFTmcxRGQ7QUFDRjtBTTcwREU7RUFDVSxrQkFBQTtBTiswRFo7QU01MERnQjtFQUNJLFdBQUE7RUFDQSwyQkFBQTtBTjgwRHBCO0FNNzBEb0I7RUFDSSxVQUFBO0VBQ0EsMEJBQUE7QU4rMER4QjtBTTUwRGdCO0VBQ0ksVUFBQTtBTjgwRHBCO0FNejBERTtFQUNVLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdEQUFBO0VBaUJBLHdCQUFBO0FOMnpEWjtBTTMwRFk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxrREFBQTtBTjYwRGhCO0FNNTBEZ0I7RUFYSjtJQVlRLGFBQUE7RU4rMERsQjtBQUNGO0FNejBERTtFQUNVLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBTjIwRFo7O0FNdDBEQTtFQUNJLGFBQUE7QU55MERKO0FNeDBESTtFQUZKO0lBR1Esc0JBQUE7SUFDQSx1QkFBQTtFTjIwRE47QUFDRjs7QUl0ekVFO0VFOGVGO0lGN2VHLGlCQUFBO0VKMHpFRDtBQUNGO0FJdnpFQztFQUVDO0lFdWVGO01GdGVHLDZFQWhCYztJSnkwRWI7RUFDRjtFSXZ6RUE7SUVtZUY7TUZsZUcsc0RBQUE7SUowekVDO0VBQ0Y7QUFDRjtBSXh6RUU7RUU4ZEY7SUY3ZEcsZ0JBQUE7RUoyekVEO0FBQ0Y7QUk3MEVFO0VFOGVGO0lGN2VHLHFCQUFBO0VKZzFFRDtBQUNGO0FJNzBFQztFQUVDO0lFdWVGO01GdGVHLDhFQWhCYztJSisxRWI7RUFDRjtFSTcwRUE7SUVtZUY7TUZsZUcsc0RBQUE7SUpnMUVDO0VBQ0Y7QUFDRjtBSTkwRUU7RUU4ZEY7SUY3ZEcscUJBQUE7RUppMUVEO0FBQ0Y7QU0vMkRFO0VBQ1UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FOaTNEWjtBSXoyRUU7RUVvZkE7SUZuZkMsd0JBQUE7RUo0MkVEO0FBQ0Y7QUl6MkVDO0VBRUM7SUU2ZUE7TUY1ZUMsa0ZBaEJjO0lKMjNFYjtFQUNGO0VJejJFQTtJRXllQTtNRnhlQyw0REFBQTtJSjQyRUM7RUFDRjtBQUNGO0FJMTJFRTtFRW9lQTtJRm5lQyx3QkFBQTtFSjYyRUQ7QUFDRjs7QUkvM0VFO0VFa2dCRjtJRmpnQkcsa0JBQUE7RUptNEVEO0FBQ0Y7QUloNEVDO0VBRUM7SUUyZkY7TUYxZkcsdUVBaEJjO0lKazVFYjtFQUNGO0VJaDRFQTtJRXVmRjtNRnRmRyxrREFBQTtJSm00RUM7RUFDRjtBQUNGO0FJajRFRTtFRWtmRjtJRmpmRyxpQkFBQTtFSm80RUQ7QUFDRjtBSXQ1RUU7RUVrZ0JGO0lGamdCRyx1QkFBQTtFSnk1RUQ7QUFDRjtBSXQ1RUM7RUFFQztJRTJmRjtNRjFmRyxnRkFoQmM7SUp3NkViO0VBQ0Y7RUl0NUVBO0lFdWZGO01GdGZHLDZEQUFBO0lKeTVFQztFQUNGO0FBQ0Y7QUl2NUVFO0VFa2ZGO0lGamZHLHdCQUFBO0VKMDVFRDtBQUNGO0FNcDZESTtFQUNJLGFBQUE7QU5zNkRSO0FNcjZEUTtFQUZKO0lBR1Esc0JBQUE7RU53NkRWO0FBQ0Y7O0FNcDZESTtFQURKO0lBRVEsY0FBQTtFTnc2RE47QUFDRjtBTXY2REk7RUFDSSx1QkFBQTtFQUNBLDRCQUFBO0FOeTZEUjtBTXg2RFE7RUFDSSxvQkFBQTtBTjA2RFo7QU10NkRJO0VBQ0ksbUJBQUE7QU53NkRSO0FJcDhFRTtFRTJoQkU7SUYxaEJELGdCQUFBO0VKdThFRDtBQUNGO0FJcDhFQztFQUVDO0lFb2hCRTtNRm5oQkQsNEVBaEJjO0lKczlFYjtFQUNGO0VJcDhFQTtJRWdoQkU7TUYvZ0JELHdEQUFBO0lKdThFQztFQUNGO0FBQ0Y7QUlyOEVFO0VFMmdCRTtJRjFnQkQsaUJBQUE7RUp3OEVEO0FBQ0Y7QUkxOUVFO0VFMmhCRTtJRjFoQkQsaUJBQUE7RUo2OUVEO0FBQ0Y7QUkxOUVDO0VBRUM7SUVvaEJFO01GbmhCRCw0RUFoQmM7SUo0K0ViO0VBQ0Y7RUkxOUVBO0lFZ2hCRTtNRi9nQkQsdURBQUE7SUo2OUVDO0VBQ0Y7QUFDRjtBSTM5RUU7RUUyZ0JFO0lGMWdCRCxpQkFBQTtFSjg5RUQ7QUFDRjtBSWgvRUU7RUVpaUJFO0lGaGlCRCxpQkFBQTtFSm0vRUQ7QUFDRjtBSWgvRUM7RUFFQztJRTBoQkU7TUZ6aEJELDJEQWhCYztJSmtnRmI7RUFDRjtFSWgvRUE7SUVzaEJFO01GcmhCRCxzREFBQTtJSm0vRUM7RUFDRjtBQUNGO0FJai9FRTtFRWloQkU7SUZoaEJELGVBQUE7RUpvL0VEO0FBQ0Y7QUl0Z0ZFO0VFcWlCRTtJRnBpQkQsc0JBQUE7RUp5Z0ZEO0FBQ0Y7QUl0Z0ZDO0VBRUM7SUU4aEJFO01GN2hCRCxpRkFoQmM7SUp3aEZiO0VBQ0Y7RUl0Z0ZBO0lFMGhCRTtNRnpoQkQsMERBQUE7SUp5Z0ZDO0VBQ0Y7QUFDRjtBSXZnRkU7RUVxaEJFO0lGcGhCRCxzQkFBQTtFSjBnRkQ7QUFDRjtBSTVoRkU7RUVxaUJFO0lGcGlCRCxzQkFBQTtFSitoRkQ7QUFDRjtBSTVoRkM7RUFFQztJRThoQkU7TUY3aEJELGdGQWhCYztJSjhpRmI7RUFDRjtFSTVoRkE7SUUwaEJFO01GemhCRCw2REFBQTtJSitoRkM7RUFDRjtBQUNGO0FJN2hGRTtFRXFoQkU7SUZwaEJELHVCQUFBO0VKZ2lGRDtBQUNGO0FJbGpGRTtFRXFpQkU7SUZwaUJELGdCQUFBO0VKcWpGRDtBQUNGO0FJbGpGQztFQUVDO0lFOGhCRTtNRjdoQkQsMkVBaEJjO0lKb2tGYjtFQUNGO0VJbGpGQTtJRTBoQkU7TUZ6aEJELHNEQUFBO0lKcWpGQztFQUNGO0FBQ0Y7QUluakZFO0VFcWhCRTtJRnBoQkQsZ0JBQUE7RUpzakZEO0FBQ0Y7QUl4a0ZFO0VFcWlCRTtJRnBpQkQsZUFBQTtFSjJrRkQ7QUFDRjtBSXhrRkM7RUFFQztJRThoQkU7TUY3aEJELG9FQWhCYztJSjBsRmI7RUFDRjtFSXhrRkE7SUUwaEJFO01GemhCRCxnREFBQTtJSjJrRkM7RUFDRjtBQUNGO0FJemtGRTtFRXFoQkU7SUZwaEJELFlBQUE7RUo0a0ZEO0FBQ0Y7QUk5bEZFO0VFNGlCRTtJRjNpQkQsZ0JBQUE7RUppbUZEO0FBQ0Y7QUk5bEZDO0VBRUM7SUVxaUJFO01GcGlCRCwyRUFoQmM7SUpnbkZiO0VBQ0Y7RUk5bEZBO0lFaWlCRTtNRmhpQkQsc0RBQUE7SUppbUZDO0VBQ0Y7QUFDRjtBSS9sRkU7RUU0aEJFO0lGM2hCRCxnQkFBQTtFSmttRkQ7QUFDRjtBSXBuRkU7RUU0aUJFO0lGM2lCRCxpQkFBQTtFSnVuRkQ7QUFDRjtBSXBuRkM7RUFFQztJRXFpQkU7TUZwaUJELDRFQWhCYztJSnNvRmI7RUFDRjtFSXBuRkE7SUVpaUJFO01GaGlCRCx1REFBQTtJSnVuRkM7RUFDRjtBQUNGO0FJcm5GRTtFRTRoQkU7SUYzaEJELGlCQUFBO0VKd25GRDtBQUNGOztBSTFvRkU7RUVpakJGO0lGaGpCRyxzQkFBQTtFSjhvRkQ7QUFDRjtBSTNvRkM7RUFFQztJRTBpQkY7TUZ6aUJHLDZFQWhCYztJSjZwRmI7RUFDRjtFSTNvRkE7SUVzaUJGO01GcmlCRyx5REFBQTtJSjhvRkM7RUFDRjtBQUNGO0FJNW9GRTtFRWlpQkY7SUZoaUJHLG1CQUFBO0VKK29GRDtBQUNGO0FNOW1FSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBTmduRVI7QUl2cUZFO0VFbWpCRTtJRmxqQkQsd0JBQUE7RUowcUZEO0FBQ0Y7QUl2cUZDO0VBRUM7SUU0aUJFO01GM2lCRCxnRkFoQmM7SUp5ckZiO0VBQ0Y7RUl2cUZBO0lFd2lCRTtNRnZpQkQsNERBQUE7SUowcUZDO0VBQ0Y7QUFDRjtBSXhxRkU7RUVtaUJFO0lGbGlCRCxzQkFBQTtFSjJxRkQ7QUFDRjtBTWxvRUk7RUFJSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBTmlvRVI7QUlsc0ZFO0VFMmpCRTtJRjFqQkQsc0JBQUE7RUpxc0ZEO0FBQ0Y7QUlsc0ZDO0VBRUM7SUVvakJFO01GbmpCRCwrRUFoQmM7SUpvdEZiO0VBQ0Y7RUlsc0ZBO0lFZ2pCRTtNRi9pQkQsMERBQUE7SUpxc0ZDO0VBQ0Y7QUFDRjtBSW5zRkU7RUUyaUJFO0lGMWlCRCxxQkFBQTtFSnNzRkQ7QUFDRjtBSXh0RkU7RUUyakJFO0lGMWpCRCx3QkFBQTtFSjJ0RkQ7QUFDRjtBSXh0RkM7RUFFQztJRW9qQkU7TUZuakJELGtGQWhCYztJSjB1RmI7RUFDRjtFSXh0RkE7SUVnakJFO01GL2lCRCw2REFBQTtJSjJ0RkM7RUFDRjtBQUNGO0FJenRGRTtFRTJpQkU7SUYxaUJELHdCQUFBO0VKNHRGRDtBQUNGO0FJOXVGRTtFRTJqQkU7SUYxakJELGdCQUFBO0VKaXZGRDtBQUNGO0FJOXVGQztFQUVDO0lFb2pCRTtNRm5qQkQsMEVBaEJjO0lKZ3dGYjtFQUNGO0VJOXVGQTtJRWdqQkU7TUYvaUJELG1EQUFBO0lKaXZGQztFQUNGO0FBQ0Y7QUkvdUZFO0VFMmlCRTtJRjFpQkQsY0FBQTtFSmt2RkQ7QUFDRjtBTWpzRVE7RUFSSjtJQVNRLGlCQUFBO0lBQ0Esa0JBQUE7RU5vc0VWO0FBQ0Y7QU1sc0VRO0VBYko7SUFlUSxjQUFBO0lBQ0EsZUFBQTtFTm9zRVY7QUFDRjtBSWh4RkU7RUUyakJFO0lGMWpCRCxvQkFBQTtFSm14RkQ7QUFDRjtBSWh4RkM7RUFFQztJRW9qQkU7TUZuakJELDRFQWhCYztJSmt5RmI7RUFDRjtFSWh4RkE7SUVnakJFO01GL2lCRCx5REFBQTtJSm14RkM7RUFDRjtBQUNGO0FJanhGRTtFRTJpQkU7SUYxaUJELHFCQUFBO0VKb3hGRDtBQUNGO0FJdHlGRTtFRStrQkU7SUY5a0JELHFCQUFBO0VKeXlGRDtBQUNGO0FJdHlGQztFQUVDO0lFd2tCRTtNRnZrQkQsOEVBaEJjO0lKd3pGYjtFQUNGO0VJdHlGQTtJRW9rQkU7TUZua0JELHlEQUFBO0lKeXlGQztFQUNGO0FBQ0Y7QUl2eUZFO0VFK2pCRTtJRjlqQkQsb0JBQUE7RUoweUZEO0FBQ0Y7QU0xdUVRO0VBSEo7SUFJUSxpQkFBQTtFTjZ1RVY7QUFDRjtBSWowRkU7RUUra0JFO0lGOWtCRCxtQkFBQTtFSm8wRkQ7QUFDRjtBSWowRkM7RUFFQztJRXdrQkU7TUZ2a0JELDJFQWhCYztJSm0xRmI7RUFDRjtFSWowRkE7SUVva0JFO01GbmtCRCx3REFBQTtJSm8wRkM7RUFDRjtBQUNGO0FJbDBGRTtFRStqQkU7SUY5akJELG9CQUFBO0VKcTBGRDtBQUNGOztBSXYxRkU7RUU2bEJGO0lGNWxCRyx5QkFBQTtFSjIxRkQ7QUFDRjtBSXgxRkM7RUFFQztJRXNsQkY7TUZybEJHLG9GQWhCYztJSjAyRmI7RUFDRjtFSXgxRkE7SUVrbEJGO01GamxCRywrREFBQTtJSjIxRkM7RUFDRjtBQUNGO0FJejFGRTtFRTZrQkY7SUY1a0JHLHlCQUFBO0VKNDFGRDtBQUNGO0FNNXdFSTtFQUVJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBTjZ3RVI7QUluM0ZFO0VFa21CRTtJRmptQkQsa0JBQUE7RUpzM0ZEO0FBQ0Y7QUluM0ZDO0VBRUM7SUUybEJFO01GMWxCRCw0RUFoQmM7SUpxNEZiO0VBQ0Y7RUluM0ZBO0lFdWxCRTtNRnRsQkQsMERBQUE7SUpzM0ZDO0VBQ0Y7QUFDRjtBSXAzRkU7RUVrbEJFO0lGamxCRCxvQkFBQTtFSnUzRkQ7QUFDRjtBSXo0RkU7RUVrbUJFO0lGam1CRCx1QkFBQTtFSjQ0RkQ7QUFDRjtBSXo0RkM7RUFFQztJRTJsQkU7TUYxbEJELDhFQWhCYztJSjI1RmI7RUFDRjtFSXo0RkE7SUV1bEJFO01GdGxCRCwwREFBQTtJSjQ0RkM7RUFDRjtBQUNGO0FJMTRGRTtFRWtsQkU7SUZqbEJELHFCQUFBO0VKNjRGRDtBQUNGO0FNcnpFSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QU51ekVSO0FJcDZGRTtFRTBtQkU7SUZ6bUJELGNBQUE7RUp1NkZEO0FBQ0Y7QUlwNkZDO0VBRUM7SUVtbUJFO01GbG1CRCxxRUFoQmM7SUpzN0ZiO0VBQ0Y7RUlwNkZBO0lFK2xCRTtNRjlsQkQsaURBQUE7SUp1NkZDO0VBQ0Y7QUFDRjtBSXI2RkU7RUUwbEJFO0lGemxCRCxXQUFBO0VKdzZGRDtBQUNGO0FNMTBFUTtFQU5KO0lBT1EsMkJBQUE7RU42MEVWO0FBQ0Y7QU0xMEVJO0VBR0ksa0JBQUE7QU4wMEVSO0FJbDhGRTtFRXFuQkU7SUZwbkJELGVBQUE7RUpxOEZEO0FBQ0Y7QUlsOEZDO0VBRUM7SUU4bUJFO01GN21CRCwyRUFoQmM7SUpvOUZiO0VBQ0Y7RUlsOEZBO0lFMG1CRTtNRnptQkQscURBQUE7SUpxOEZDO0VBQ0Y7QUFDRjtBSW44RkU7RUVxbUJFO0lGcG1CRCxnQkFBQTtFSnM4RkQ7QUFDRjtBSXg5RkU7RUVxbkJFO0lGcG5CRCxxQkFBQTtFSjI5RkQ7QUFDRjtBSXg5RkM7RUFFQztJRThtQkU7TUY3bUJELDhFQWhCYztJSjArRmI7RUFDRjtFSXg5RkE7SUUwbUJFO01Gem1CRCwyREFBQTtJSjI5RkM7RUFDRjtBQUNGO0FJejlGRTtFRXFtQkU7SUZwbUJELHNCQUFBO0VKNDlGRDtBQUNGO0FNcDNFUTtFQUxKO0lBTVEsV0FBQTtFTnUzRVY7QUFDRjtBTXAzRUk7RUFFSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FOcTNFUjtBSXgvRkU7RUUrbkJFO0lGOW5CRCxlQUFBO0VKMi9GRDtBQUNGO0FJeC9GQztFQUVDO0lFd25CRTtNRnZuQkQseUVBaEJjO0lKMGdHYjtFQUNGO0VJeC9GQTtJRW9uQkU7TUZubkJELHNEQUFBO0lKMi9GQztFQUNGO0FBQ0Y7QUl6L0ZFO0VFK21CRTtJRjltQkQsZ0JBQUE7RUo0L0ZEO0FBQ0Y7QU14NEVJO0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FOeTRFUjtBSW5oR0U7RUVzb0JFO0lGcm9CRCxpQkFBQTtFSnNoR0Q7QUFDRjtBSW5oR0M7RUFFQztJRStuQkU7TUY5bkJELHlFQWhCYztJSnFpR2I7RUFDRjtFSW5oR0E7SUUybkJFO01GMW5CRCxzREFBQTtJSnNoR0M7RUFDRjtBQUNGO0FJcGhHRTtFRXNuQkU7SUZybkJELGtCQUFBO0VKdWhHRDtBQUNGO0FNNTVFSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QU44NUVSO0FNMzVFSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FONjVFUjtBTTM1RVk7RUFDSSwyQkFBQTtBTjY1RWhCO0FNeDVFSTtFQUNJLG9CQUFBO0VBQ0EsK0JBQUE7QU4wNUVSOztBTXA1RUE7RUFHSSxnQ0FBQTtFQUNBLGdCQUFBO0FOcTVFSjtBSWxrR0U7RUV5cUJGO0lGeHFCRyxpQkFBQTtFSnFrR0Q7QUFDRjtBSWxrR0M7RUFFQztJRWtxQkY7TUZqcUJHLDBFQWhCYztJSm9sR2I7RUFDRjtFSWxrR0E7SUU4cEJGO01GN3BCRywwREFBQTtJSnFrR0M7RUFDRjtBQUNGO0FJbmtHRTtFRXlwQkY7SUZ4cEJHLHFCQUFBO0VKc2tHRDtBQUNGO0FJeGxHRTtFRXlxQkY7SUZ4cUJHLHdCQUFBO0VKMmxHRDtBQUNGO0FJeGxHQztFQUVDO0lFa3FCRjtNRmpxQkcsa0ZBaEJjO0lKMG1HYjtFQUNGO0VJeGxHQTtJRThwQkY7TUY3cEJHLDZEQUFBO0lKMmxHQztFQUNGO0FBQ0Y7QUl6bEdFO0VFeXBCRjtJRnhwQkcsd0JBQUE7RUo0bEdEO0FBQ0Y7QU1oOEVJO0VBQ0ksa0JBQUE7QU5rOEVSO0FNajhFUTtFQUNJLFdBQUE7RUFHQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBTmk4RVo7QUl6bkdFO0VFZ3JCTTtJRi9xQkwsaUJBQUE7RUo0bkdEO0FBQ0Y7QUl6bkdDO0VBRUM7SUV5cUJNO01GeHFCTCwwRUFoQmM7SUoyb0diO0VBQ0Y7RUl6bkdBO0lFcXFCTTtNRnBxQkwscURBQUE7SUo0bkdDO0VBQ0Y7QUFDRjtBSTFuR0U7RUVncUJNO0lGL3BCTCxjQUFBO0VKNm5HRDtBQUNGO0FJL29HRTtFRWdyQk07SUYvcUJMLGtCQUFBO0VKa3BHRDtBQUNGO0FJL29HQztFQUVDO0lFeXFCTTtNRnhxQkwsMkVBaEJjO0lKaXFHYjtFQUNGO0VJL29HQTtJRXFxQk07TUZwcUJMLHNEQUFBO0lKa3BHQztFQUNGO0FBQ0Y7QUlocEdFO0VFZ3FCTTtJRi9wQkwsZUFBQTtFSm1wR0Q7QUFDRjtBTTUrRVk7RUFUSjtJQVVRLGFBQUE7RU4rK0VkO0FBQ0Y7QU0zK0VJO0VBQ0ksVUFBQTtBTjYrRVI7QU0xK0VJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QU40K0VSO0FJbHJHRTtFRXlzQkU7SUZ4c0JELGVBQUE7RUpxckdEO0FBQ0Y7QUlsckdDO0VBRUM7SUVrc0JFO01GanNCRCx5RUFoQmM7SUpvc0diO0VBQ0Y7RUlsckdBO0lFOHJCRTtNRjdyQkQsc0RBQUE7SUpxckdDO0VBQ0Y7QUFDRjtBSW5yR0U7RUV5ckJFO0lGeHJCRCxnQkFBQTtFSnNyR0Q7QUFDRjtBSXhzR0U7RUV5c0JFO0lGeHNCRCxzQkFBQTtFSjJzR0Q7QUFDRjtBSXhzR0M7RUFFQztJRWtzQkU7TUZqc0JELCtFQWhCYztJSjB0R2I7RUFDRjtFSXhzR0E7SUU4ckJFO01GN3JCRCx5REFBQTtJSjJzR0M7RUFDRjtBQUNGO0FJenNHRTtFRXlyQkU7SUZ4ckJELHNCQUFBO0VKNHNHRDtBQUNGO0FNaGhGSTtFQUNJLFdBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QU5paEZSO0FJcHVHRTtFRThzQkU7SUY3c0JELGlCQUFBO0VKdXVHRDtBQUNGO0FJcHVHQztFQUVDO0lFdXNCRTtNRnRzQkQsMkVBaEJjO0lKc3ZHYjtFQUNGO0VJcHVHQTtJRW1zQkU7TUZsc0JELDBEQUFBO0lKdXVHQztFQUNGO0FBQ0Y7QUlydUdFO0VFOHJCRTtJRjdyQkQsb0JBQUE7RUp3dUdEO0FBQ0Y7QUkxdkdFO0VFOHNCRTtJRjdzQkQsaUJBQUE7RUo2dkdEO0FBQ0Y7QUkxdkdDO0VBRUM7SUV1c0JFO01GdHNCRCw0RUFoQmM7SUo0d0diO0VBQ0Y7RUkxdkdBO0lFbXNCRTtNRmxzQkQsc0RBQUE7SUo2dkdDO0VBQ0Y7QUFDRjtBSTN2R0U7RUU4ckJFO0lGN3JCRCxlQUFBO0VKOHZHRDtBQUNGO0FJaHhHRTtFRThzQkU7SUY3c0JELHdCQUFBO0VKbXhHRDtBQUNGO0FJaHhHQztFQUVDO0lFdXNCRTtNRnRzQkQsa0ZBaEJjO0lKa3lHYjtFQUNGO0VJaHhHQTtJRW1zQkU7TUZsc0JELDZEQUFBO0lKbXhHQztFQUNGO0FBQ0Y7QUlqeEdFO0VFOHJCRTtJRjdyQkQsd0JBQUE7RUpveEdEO0FBQ0Y7QU05a0ZJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QU5nbEZSOztBTTVrRkE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUVBLGtCQUFBO0FOOGtGSjtBSWp6R0U7RUUrdEJGO0lGOXRCRyxlQUFBO0VKb3pHRDtBQUNGO0FJanpHQztFQUVDO0lFd3RCRjtNRnZ0QkcsK0VBYmU7SUpnMEdkO0VBQ0Y7RUlqekdBO0lFb3RCRjtNRm50Qkcsb0VBQUE7SUpvekdDO0VBQ0Y7QUFDRjtBSWx6R0U7RUUrc0JGO0lGOXNCRyx1QkFBQTtFSnF6R0Q7QUFDRjtBTWxtRkk7RUFOSjtJQU9RLGFBQUE7RU5xbUZOO0FBQ0Y7QU1wbUZJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLFdBQUE7RUFFQSxzQkFBQTtBTm9tRlI7QUluMUdFO0VFd3VCRTtJRnZ1QkQsZUFBQTtFSnMxR0Q7QUFDRjtBSW4xR0M7RUFFQztJRWl1QkU7TUZodUJELDRFQWJlO0lKazJHZDtFQUNGO0VJbjFHQTtJRTZ0QkU7TUY1dEJELHdEQUFBO0lKczFHQztFQUNGO0FBQ0Y7QUlwMUdFO0VFd3RCRTtJRnZ0QkQsZ0JBQUE7RUp1MUdEO0FBQ0Y7QUl6MkdFO0VFd3VCRTtJRnZ1QkQsY0FBQTtFSjQyR0Q7QUFDRjtBSXoyR0M7RUFFQztJRWl1QkU7TUZodUJELDhDQWhCYztJSjIzR2I7RUFDRjtFSXoyR0E7SUU2dEJFO01GNXRCRCw4Q0FBQTtJSjQyR0M7RUFDRjtBQUNGO0FJMTJHRTtFRXd0QkU7SUZ2dEJELFdBQUE7RUo2MkdEO0FBQ0Y7QU05b0ZRO0VBVEo7SUFVUSxhQUFBO0VOaXBGVjtBQUNGO0FNL29GSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxXQUFBO0VBRUEsc0JBQUE7RUFDQSx3QkFBQTtBTitvRlI7QUk1NEdFO0VFcXZCRTtJRnB2QkQsYUFBQTtFSis0R0Q7QUFDRjtBSTU0R0M7RUFFQztJRTh1QkU7TUY3dUJELHVFQWJlO0lKMjVHZDtFQUNGO0VJNTRHQTtJRTB1QkU7TUZ6dUJELG1EQUFBO0lKKzRHQztFQUNGO0FBQ0Y7QUk3NEdFO0VFcXVCRTtJRnB1QkQsY0FBQTtFSmc1R0Q7QUFDRjtBSWw2R0U7RUVxdkJFO0lGcHZCRCxlQUFBO0VKcTZHRDtBQUNGO0FJbDZHQztFQUVDO0lFOHVCRTtNRjd1QkQseUVBaEJjO0lKbzdHYjtFQUNGO0VJbDZHQTtJRTB1QkU7TUZ6dUJELHNEQUFBO0lKcTZHQztFQUNGO0FBQ0Y7QUluNkdFO0VFcXVCRTtJRnB1QkQsZ0JBQUE7RUpzNkdEO0FBQ0Y7QU16ckZRO0VBVko7SUFXUSxhQUFBO0VONHJGVjtBQUNGOztBSTc3R0U7RUV3d0JGO0lGdndCRyxzQkFBQTtFSmk4R0Q7QUFDRjtBSTk3R0M7RUFFQztJRWl3QkY7TUZod0JHLGdGQWhCYztJSmc5R2I7RUFDRjtFSTk3R0E7SUU2dkJGO01GNXZCRyx1REFBQTtJSmk4R0M7RUFDRjtBQUNGO0FJLzdHRTtFRXd2QkY7SUZ2dkJHLHNCQUFBO0VKazhHRDtBQUNGO0FJcDlHRTtFRXd3QkY7SUZ2d0JHLHlCQUFBO0VKdTlHRDtBQUNGO0FJcDlHQztFQUVDO0lFaXdCRjtNRmh3QkcsbUZBaEJjO0lKcytHYjtFQUNGO0VJcDlHQTtJRTZ2QkY7TUY1dkJHLDBEQUFBO0lKdTlHQztFQUNGO0FBQ0Y7QUlyOUdFO0VFd3ZCRjtJRnZ2QkcseUJBQUE7RUp3OUdEO0FBQ0Y7QU0vdEZJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QU5pdUZSO0FNL3RGUTtFQUxKO0lBTVEsc0JBQUE7RU5rdUZWO0FBQ0Y7QUlwL0dFO0VFcXhCRTtJRnB4QkQsc0JBQUE7RUp1L0dEO0FBQ0Y7QUlwL0dDO0VBRUM7SUU4d0JFO01GN3dCRCx3RkFoQmM7SUpzZ0hiO0VBQ0Y7RUlwL0dBO0lFMHdCRTtNRnp3QkQsMEVBQUE7SUp1L0dDO0VBQ0Y7QUFDRjtBSXIvR0U7RUVxd0JFO0lGcHdCRCw2QkFBQTtFSncvR0Q7QUFDRjtBTWx2RlE7RUFISjtJQUlRLGVBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RU5xdkZWO0FBQ0Y7QU1sdkZJO0VBQ0ksZ0JBQUE7QU5vdkZSO0FJcGhIRTtFRSt4QkU7SUY5eEJELHdCQUFBO0VKdWhIRDtBQUNGO0FJcGhIQztFQUVDO0lFd3hCRTtNRnZ4QkQsa0ZBaEJjO0lKc2lIYjtFQUNGO0VJcGhIQTtJRW94QkU7TUZueEJELDREQUFBO0lKdWhIQztFQUNGO0FBQ0Y7QUlyaEhFO0VFK3dCRTtJRjl3QkQsd0JBQUE7RUp3aEhEO0FBQ0Y7QU10d0ZJO0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtBTnV3RlI7QUk5aUhFO0VFb3lCRTtJRm55QkQsbUJBQUE7RUppakhEO0FBQ0Y7QUk5aUhDO0VBRUM7SUU2eEJFO01GNXhCRCwwRUFoQmM7SUpna0hiO0VBQ0Y7RUk5aUhBO0lFeXhCRTtNRnh4QkQsc0RBQUE7SUppakhDO0VBQ0Y7QUFDRjtBSS9pSEU7RUVveEJFO0lGbnhCRCxpQkFBQTtFSmtqSEQ7QUFDRjtBSXBrSEU7RUVveUJFO0lGbnlCRCxlQUFBO0VKdWtIRDtBQUNGO0FJcGtIQztFQUVDO0lFNnhCRTtNRjV4QkQsNERBaEJjO0lKc2xIYjtFQUNGO0VJcGtIQTtJRXl4QkU7TUZ4eEJELHNEQUFBO0lKdWtIQztFQUNGO0FBQ0Y7QUlya0hFO0VFb3hCRTtJRm54QkQsZ0JBQUE7RUp3a0hEO0FBQ0Y7QU1oekZRO0VBTko7SUFPUSxXQUFBO0lBQ0EsbUJBQUE7RU5tekZWO0FBQ0Y7QU1oekZJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBTmt6RlI7QUlybUhFO0VFZ3pCRTtJRi95QkQsaUJBQUE7RUp3bUhEO0FBQ0Y7QUlybUhDO0VBRUM7SUV5eUJFO01GeHlCRCwwRUFoQmM7SUp1bkhiO0VBQ0Y7RUlybUhBO0lFcXlCRTtNRnB5QkQscURBQUE7SUp3bUhDO0VBQ0Y7QUFDRjtBSXRtSEU7RUVneUJFO0lGL3hCRCxpQkFBQTtFSnltSEQ7QUFDRjtBTXIwRlE7RUFOSjtJQU9RLFVBQUE7SUFDQSx1QkFBQTtFTncwRlY7QUFDRjs7QUlqb0hFO0VFZzBCRjtJRi96QkcscUJBQUE7RUpxb0hEO0FBQ0Y7QUlsb0hDO0VBRUM7SUV5ekJGO01GeHpCRywrRUFoQmM7SUpvcEhiO0VBQ0Y7RUlsb0hBO0lFcXpCRjtNRnB6QkcsNkRBQUE7SUpxb0hDO0VBQ0Y7QUFDRjtBSW5vSEU7RUVnekJGO0lGL3lCRyx3QkFBQTtFSnNvSEQ7QUFDRjtBTXQxRkk7RUFDSSxrQkFBQTtBTncxRlI7QU10MUZRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QU51MUZaO0FJbnFIRTtFRXEwQk07SUZwMEJMLGNBQUE7RUpzcUhEO0FBQ0Y7QUlucUhDO0VBRUM7SUU4ekJNO01GN3pCTCwyRUFiZTtJSmtySGQ7RUFDRjtFSW5xSEE7SUUwekJNO01GenpCTCx1REFBQTtJSnNxSEM7RUFDRjtBQUNGO0FJcHFIRTtFRXF6Qk07SUZwekJMLGlCQUFBO0VKdXFIRDtBQUNGO0FNejJGSTtFQUdJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBTnkyRlI7QUk5ckhFO0VFZzFCRTtJRi8wQkQsZUFBQTtFSmlzSEQ7QUFDRjtBSTlySEM7RUFFQztJRXkwQkU7TUZ4MEJELHNFQWhCYztJSmd0SGI7RUFDRjtFSTlySEE7SUVxMEJFO01GcDBCRCxvREFBQTtJSmlzSEM7RUFDRjtBQUNGO0FJL3JIRTtFRWcwQkU7SUYvekJELGlCQUFBO0VKa3NIRDtBQUNGO0FJcHRIRTtFRWcxQkU7SUYvMEJELHVCQUFBO0VKdXRIRDtBQUNGO0FJcHRIQztFQUVDO0lFeTBCRTtNRngwQkQsZ0ZBaEJjO0lKc3VIYjtFQUNGO0VJcHRIQTtJRXEwQkU7TUZwMEJELDJEQUFBO0lKdXRIQztFQUNGO0FBQ0Y7QUlydEhFO0VFZzBCRTtJRi96QkQsdUJBQUE7RUp3dEhEO0FBQ0Y7QU1sNUZJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBTm81RlI7QUkvdUhFO0VFdzFCRTtJRnYxQkQsYUFBQTtFSmt2SEQ7QUFDRjtBSS91SEM7RUFFQztJRWkxQkU7TUZoMUJELHFFQWJlO0lKOHZIZDtFQUNGO0VJL3VIQTtJRTYwQkU7TUY1MEJELGlEQUFBO0lKa3ZIQztFQUNGO0FBQ0Y7QUlodkhFO0VFdzBCRTtJRnYwQkQsV0FBQTtFSm12SEQ7QUFDRjtBSXJ3SEU7RUV3MUJFO0lGdjFCRCxtQkFBQTtFSnd3SEQ7QUFDRjtBSXJ3SEM7RUFFQztJRWkxQkU7TUZoMUJELDRFQWhCYztJSnV4SGI7RUFDRjtFSXJ3SEE7SUU2MEJFO01GNTBCRCw0REFBQTtJSnd3SEM7RUFDRjtBQUNGO0FJdHdIRTtFRXcwQkU7SUZ2MEJELHVCQUFBO0VKeXdIRDtBQUNGO0FNMzdGSTtFQUVJLGtCQUFBO0FONDdGUjtBSTl4SEU7RUVnMkJFO0lGLzFCRCxnQkFBQTtFSml5SEQ7QUFDRjtBSTl4SEM7RUFFQztJRXkxQkU7TUZ4MUJELDBFQWhCYztJSmd6SGI7RUFDRjtFSTl4SEE7SUVxMUJFO01GcDFCRCxtREFBQTtJSml5SEM7RUFDRjtBQUNGO0FJL3hIRTtFRWcxQkU7SUYvMEJELGNBQUE7RUpreUhEO0FBQ0Y7QU0vOEZJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtBTmc5RlI7QUk5ekhFO0VFcTJCRTtJRnAyQkQsbUJBQUE7RUppMEhEO0FBQ0Y7QUk5ekhDO0VBRUM7SUU4MUJFO01GNzFCRCw0RUFoQmM7SUpnMUhiO0VBQ0Y7RUk5ekhBO0lFMDFCRTtNRnoxQkQsdURBQUE7SUppMEhDO0VBQ0Y7QUFDRjtBSS96SEU7RUVxMUJFO0lGcDFCRCxtQkFBQTtFSmswSEQ7QUFDRjtBTW4rRkk7RUFFSSxXQUFBO0FObytGUjtBSXYxSEU7RUVpM0JFO0lGaDNCRCx3QkFBQTtFSjAxSEQ7QUFDRjtBSXYxSEM7RUFFQztJRTAyQkU7TUZ6MkJELGtGQWhCYztJSnkySGI7RUFDRjtFSXYxSEE7SUVzMkJFO01GcjJCRCw0REFBQTtJSjAxSEM7RUFDRjtBQUNGO0FJeDFIRTtFRWkyQkU7SUZoMkJELHdCQUFBO0VKMjFIRDtBQUNGO0FNdi9GSTtFQUdJLGdCQUFBO0VBQ0EsZ0JBQUE7QU51L0ZSO0FJajNIRTtFRXMzQkU7SUZyM0JELGtCQUFBO0VKbzNIRDtBQUNGO0FJajNIQztFQUVDO0lFKzJCRTtNRjkyQkQsdUVBaEJjO0lKbTRIYjtFQUNGO0VJajNIQTtJRTIyQkU7TUYxMkJELG1EQUFBO0lKbzNIQztFQUNGO0FBQ0Y7QUlsM0hFO0VFczJCRTtJRnIyQkQsZUFBQTtFSnEzSEQ7QUFDRjtBSXY0SEU7RUVzM0JFO0lGcjNCRCxnQkFBQTtFSjA0SEQ7QUFDRjtBSXY0SEM7RUFFQztJRSsyQkU7TUY5MkJELDBFQWhCYztJSnk1SGI7RUFDRjtFSXY0SEE7SUUyMkJFO01GMTJCRCxvREFBQTtJSjA0SEM7RUFDRjtBQUNGO0FJeDRIRTtFRXMyQkU7SUZyMkJELGVBQUE7RUoyNEhEO0FBQ0Y7QU1oaUdJO0VBQ0ksY0FBQTtBTmtpR1I7O0FJaDZIRTtFRW80QkY7SUZuNEJHLHFCQUFBO0VKbzZIRDtBQUNGO0FJajZIQztFQUVDO0lFNjNCRjtNRjUzQkcsOEVBaEJjO0lKbTdIYjtFQUNGO0VJajZIQTtJRXkzQkY7TUZ4M0JHLHdEQUFBO0lKbzZIQztFQUNGO0FBQ0Y7QUlsNkhFO0VFbzNCRjtJRm4zQkcsbUJBQUE7RUpxNkhEO0FBQ0Y7QUl2N0hFO0VFbzRCRjtJRm40Qkcsd0JBQUE7RUowN0hEO0FBQ0Y7QUl2N0hDO0VBRUM7SUU2M0JGO01GNTNCRyxpRkFoQmM7SUp5OEhiO0VBQ0Y7RUl2N0hBO0lFeTNCRjtNRngzQkcsMkRBQUE7SUowN0hDO0VBQ0Y7QUFDRjtBSXg3SEU7RUVvM0JGO0lGbjNCRyxzQkFBQTtFSjI3SEQ7QUFDRjtBTXRrR0k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FOd2tHUjtBTXJrR0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBTnVrR1I7QU1ya0dRO0VBTEo7SUFNUSxzQkFBQTtJQUNBLHVCQUFBO0VOd2tHVjtBQUNGO0FNcmtHSTtFQUdJLGdCQUFBO0VBQ0EsZ0JBQUE7QU5xa0dSO0FJaCtIRTtFRXU1QkU7SUZ0NUJELGlCQUFBO0VKbStIRDtBQUNGO0FJaCtIQztFQUVDO0lFZzVCRTtNRi80QkQsNkVBaEJjO0lKay9IYjtFQUNGO0VJaCtIQTtJRTQ0QkU7TUYzNEJELHVEQUFBO0lKbStIQztFQUNGO0FBQ0Y7QUlqK0hFO0VFdTRCRTtJRnQ0QkQsZ0JBQUE7RUpvK0hEO0FBQ0Y7QUl0L0hFO0VFdTVCRTtJRnQ1QkQsa0JBQUE7RUp5L0hEO0FBQ0Y7QUl0L0hDO0VBRUM7SUVnNUJFO01GLzRCRCwyRUFoQmM7SUp3Z0liO0VBQ0Y7RUl0L0hBO0lFNDRCRTtNRjM0QkQsd0RBQUE7SUp5L0hDO0VBQ0Y7QUFDRjtBSXYvSEU7RUV1NEJFO0lGdDRCRCxtQkFBQTtFSjAvSEQ7QUFDRjtBTWhuR1E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QU5rbkdaO0FNam5HWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBTm1uR2hCO0FNOW1HSTtFQUVJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QU4rbUdSO0FJOWhJRTtFRTI2QkU7SUYxNkJELGdCQUFBO0VKaWlJRDtBQUNGO0FJOWhJQztFQUVDO0lFbzZCRTtNRm42QkQsMkVBaEJjO0lKZ2pJYjtFQUNGO0VJOWhJQTtJRWc2QkU7TUYvNUJELHNEQUFBO0lKaWlJQztFQUNGO0FBQ0Y7QUkvaElFO0VFMjVCRTtJRjE1QkQsZ0JBQUE7RUpraUlEO0FBQ0Y7QU1ub0dRO0VBTko7SUFPUSxhQUFBO0VOc29HVjtBQUNGO0FNbm9HSTtFQUNJLCtCQUFBO0FOcW9HUjtBTXBvR1E7RUFDSSwwQkFBQTtBTnNvR1o7O0FPL29JQTtFQUNJLGtCQUFBO0FQa3BJSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCJzYXNzOm1hdGhcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0LzRltC60YHQuNC90ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5AaW1wb3J0IFxcXCJiYXNlL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRiNGA0LjRhNGC0ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyZkaXNwbGF5PXN3YXAgLSDQtNC+0LTQsNGC0Lgg0L/RgNC4INC/0ZbQtNC60LvRjtGH0LXQvdC90ZYg0YfQtdGA0LXQtyDQv9C70LDQs9GW0L1cXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C40YLQuCwg0Y/QutGJ0L4g0ZQg0LvQvtC60LDQu9GM0L3RliDRhNCw0LnQu9C4INGI0YDQuNGE0YLRltCyXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0ZbQutC+0L3QutC+0LLQuNGFINGI0YDQuNGE0YLRltCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LjRgtC4LCDRj9C60YnQviDRlCDRhNCw0LnQuyDRltC60L7QvdC60L7QstC+0LPQviDRiNGA0LjRhNGC0YNcXHJcXG4vL0BpbXBvcnQgXFxcImZvbnRzL2ljb25zXFxcIjtcXHJcXG5cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vINCd0LDQu9Cw0YjRgtGD0LLQsNC90L3RjyDRiNCw0LHQu9C+0L3RgyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy8g0JfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvCDRiNGA0LjRhNGCID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiRmb250RmFtaWx5OiBcXFwiSW50ZXJcXFwiO1xcclxcbiRmb250U2l6ZTogdG9SZW0oMTUpOyAvLyDQtNC1IDE0KHB4KSAtINGA0L7Qt9C80ZbRgCDRiNGA0LjRhNGC0YMg0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvCDQtyDQvNCw0LrQtdGC0YNcXHJcXG5cXHJcXG4vLyDQntGB0L3QvtCy0L3RliDQutC+0LvRjNC+0YDQuFxcclxcbiRtYWluQ29sb3I6ICMwRTBFMEU7IC8vINCa0L7Qu9GW0YAg0YjRgNC40YTRgtGDINC30LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0LxcXHJcXG5cXHJcXG4vLyDQn9Cw0LvRltGC0YDQsCDQutC+0LvRjNC+0YDRltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9jb2xvcnMtcGFsZXR0ZVxcXCI7XFxyXFxuXFxyXFxuLy8g0J3QsNC70LDRiNGC0YPQstCw0L3QvdGPINCw0LTQsNC/0YLQuNCy0L3QvtGXINGB0ZbRgtC60LggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyDQnNGW0L3RltC80LDQu9GM0L3QsCDRiNC40YDQuNC90LAg0YHRgtC+0YDRltC90LrQuFxcclxcbiRtaW5XaWR0aDogMzIwO1xcclxcbi8vINCo0LjRgNC40L3QsCDQv9C+0LvQvtGC0L3QsCAo0LzQsNC60LXRgtGDKVxcclxcbiRtYXhXaWR0aDogMTM2NjtcXHJcXG4vLyDQqNC40YDQuNC90LAg0L7QsdC80LXQttGD0Y7Rh9C+0LPQviDQutC+0L3RgtC10LnQvdC10YDQsCAoMCA9INC90LXQvNCw0ZQg0L7QsdC80LXQttC10L3QvdGPKVxcclxcbiRtYXhXaWR0aENvbnRhaW5lcjogMTE3MDtcXHJcXG4vLyDQl9Cw0LPQsNC70YzQvdC40Lkg0LLRltC00YHRgtGD0L8g0YMg0LrQvtC90YLQtdC50L3QtdGA0LBcXHJcXG4vLyAoMzAgPSDQv9C+IDE1cHgg0LvRltCy0L7RgNGD0Ycg0ZYg0L/RgNCw0LLQvtGA0YPRhywgMCA9INC90LXQvNCw0ZQg0LLRltC00YHRgtGD0L/RgylcXHJcXG4kY29udGFpbmVyUGFkZGluZzogMzA7XFxyXFxuXFxyXFxuLy8g0KjQuNGA0LjQvdCwINGB0L/RgNCw0YbRjNC+0LLRg9Cy0LDQvdC90Y8g0L/QtdGA0YjQvtCz0L4g0LHRgNC10LnQutC/0L7RltC90YLRg1xcclxcbiRjb250YWluZXJXaWR0aDogJG1heFdpZHRoQ29udGFpbmVyICsgJGNvbnRhaW5lclBhZGRpbmc7XFxyXFxuXFxyXFxuLy8g0JHRgNC10LnQui3Qv9C+0ZfQvdGC0LhcXHJcXG4kcGM6IGVtKCRjb250YWluZXJXaWR0aCk7IC8vINCf0JosINC90L7Rg9GC0LHRg9C60LgsINC00LXRj9C60ZYg0L/Qu9Cw0L3RiNC10YLQuCDRgyDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3QvtC80YMg0L/QvtC70L7QttC10L3QvdGWXFxyXFxuJHRhYmxldDogZW0oOTkxLjk4KTsgLy8g0J/Qu9Cw0L3RiNC10YLQuCwg0LTQtdGP0LrRliDRgtC10LvQtdGE0L7QvdC4INCyINCz0L7RgNC40LfQvtC90YLQsNC70YzQvdC+0LzRgyDQv9C+0LvQvtC20LXQvdC90ZZcXHJcXG4kbW9iaWxlOiBlbSg3NjcuOTgpOyAvLyDQotC10LvQtdGE0L7QvdC4IExcXHJcXG4kbW9iaWxlU21hbGw6IGVtKDQ3OS45OCk7IC8vINCi0LXQu9C10YTQvtC90LggU1xcclxcblxcclxcbi8vINCi0LjQvyDQsNC00LDQv9GC0LjQstCwOlxcclxcbi8vIDEgPSDRh9GD0LnQvdGW0YHRgtGMICjRgyDQutC+0L3RgtC10LnQvdC10YDQsCDQvdC10LzQsNGUINCx0YDQtdC50LrQv9C+0ZbQvdGC0ZbQsiksXFxyXFxuLy8gMiA9INC/0L4g0LHRgNC10LnQui3Qv9C+0ZfQvdGCICjQutC+0L3RgtC10LnQvdC10YAg0LfQvNGW0L3RjtGUINGB0LLQvtGOINGI0LjRgNC40L3RgyDQv9C+INCx0YDQtdC50Lot0L/QvtGX0L3RgilcXHJcXG4kcmVzcG9uc2l2ZVR5cGU6IDE7XFxyXFxuXFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vINCe0LHQvdGD0LvQtdC90L3RjyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuQGltcG9ydCBcXFwiYmFzZS9udWxsXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINGC0LXQs9CwIEJPRFkgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5ib2R5IHtcXHJcXG5cXHQvLyDQodC60YDQvtC70Lsg0LfQsNCx0LvQvtC60L7QstCw0L3QvlxcclxcblxcdC5sb2NrICYge1xcclxcblxcdFxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0XFx0dG91Y2gtYWN0aW9uOiBub25lO1xcclxcblxcdFxcdG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7XFxyXFxuXFx0fVxcclxcblxcdC8vINCh0LDQudGCINC30LDQstCw0L3RgtCw0LbQtdC90LjQuVxcclxcblxcdC5sb2FkZWQgJiB7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQntCx0L7Qu9C+0L3QutCwIHdyYXBwZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4ud3JhcHBlciB7XFxyXFxuXFx0bWluLWhlaWdodDogMTAwJTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRAc3VwcG9ydHMgKG92ZXJmbG93OiBjbGlwKSB7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGNsaXA7XFxyXFxuXFx0fVxcclxcblxcdC8vINCf0YDQuNGC0LjRgdC60LDRlNC80L4gZm9vdGVyXFxyXFxuXFx0PiBtYWluIHtcXHJcXG5cXHRcXHRmbGV4OiAxIDEgYXV0bztcXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0KTRltC60YEg0LTQu9GPINGB0LvQsNC50LTQtdGA0ZbQslxcclxcblxcdD4gKiB7XFxyXFxuXFx0XFx0bWluLXdpZHRoOiAwO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0J7QsdC80LXQttGD0Y7Rh9C40Lkg0LrQvtC90YLQtdC50L3QtdGAID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vKlxcclxcbihpKSDQodGC0LjQu9GWINCx0YPQtNGD0YLRjCDQt9Cw0YHRgtC+0YHQvtCy0YPQstCw0YLQuNGB0Ywg0LTQvlxcclxcbtCy0YHRltGFINC60LvQsNGB0ZbQsiwg0YnQviDQvNGW0YHRgtGP0YLRjCAqX19jb250YWluZXJcXHJcXG7QndCw0L/RgNC40LrQu9Cw0LQgaGVhZGVyX19jb250YWluZXIsIG1haW5fX2NvbnRhaW5lciDRliDRgi7Qvy5cXHJcXG7QodC90ZbQv9C/0LXRgiAoSFRNTCk6IGNudFxcclxcbiovXFxyXFxuQGlmICgkcmVzcG9uc2l2ZVR5cGU9PTEpIHtcXHJcXG5cXHQvLyDQp9GD0LnQvdCwXFxyXFxuXFx0W2NsYXNzKj1cXFwiX19jb250YWluZXJcXFwiXSB7XFxyXFxuXFx0XFx0QGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogdG9SZW0oJGNvbnRhaW5lcldpZHRoKTtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QGlmICgkY29udGFpbmVyUGFkZGluZz4wKSB7XFxyXFxuXFx0XFx0XFx0QGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDAgdG9SZW0obWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpKTtcXHJcXG5cXHRcXHRcXHR9IEBlbHNlIHtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCBtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMiksIDE1KTtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXJpZ2h0XFxcIiwgbWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpLCAxNSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufSBAZWxzZSB7XFxyXFxuXFx0Ly8g0JHRgNC10LnQui3Qv9C+0ZfQvdGC0LDQvNC4XFxyXFxuXFx0W2NsYXNzKj1cXFwiX19jb250YWluZXJcXFwiXSB7XFxyXFxuXFx0XFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0XFx0QGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogdG9SZW0oJGNvbnRhaW5lcldpZHRoKTtcXHJcXG5cXHRcXHR9IEBlbHNlIHtcXHJcXG5cXHRcXHRcXHRAaWYgKCRjb250YWluZXJQYWRkaW5nPjApIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwIHRvUmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJHBjKSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiB0b1JlbSg5NzApO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldCkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogdG9SZW0oNzUwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IG5vbmU7XFxyXFxuXFx0XFx0XFx0QGlmICgkY29udGFpbmVyUGFkZGluZz4wIGFuZCAkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDAgdG9SZW0obWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDQsdCw0LfQvtCy0LjRhSDRgdGC0LjQu9GW0LIsINGI0LDQsdC70L7QvdGW0LIgKNC30LDQs9C+0YLRltCy0LXQu9GMKSDRgtCwINC00L7Qv9C+0LzRltC20L3QuNGFINC60LvQsNGB0ZbQslxcclxcbi8vINCU0LvRjyDQv9GW0LTQutC70Y7Rh9C10L3QvdGPL9Cy0LjQvNC60L3QtdC90L3RjyDQutC+0L3QutGA0LXRgtC90LjRhSDRgdGC0LjQu9GW0LIg0LTQuNCy0LjRgdGMIGJhc2Uuc2Nzc1xcclxcbkBpbXBvcnQgXFxcImJhc2VcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC30LDQs9Cw0LvRjNC90LjRhSDQtdC70LXQvNC10L3RgtGW0LIg0L/RgNC+0LXQutGC0YNcXHJcXG5AaW1wb3J0IFxcXCJjb21tb25cXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC+0LrRgNC10LzQuNGFINCx0LvQvtC60ZbQslxcclxcbkBpbXBvcnQgXFxcImhlYWRlclxcXCI7XFxyXFxuQGltcG9ydCBcXFwiZm9vdGVyXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQvtC60YDQtdC80LjRhSDRgdGC0L7RgNGW0L3QvtC6XFxyXFxuQGltcG9ydCBcXFwiaG9tZVxcXCI7XFxyXFxuXFxyXFxuLy8g0JfQvNGW0L3QvdGWXFxyXFxuXFxyXFxuQGltcG9ydCBcXFwidXRpbHMvdmFyc1xcXCI7XFxyXFxuXCIsXCIqIHtcXHJcXG5cXHRwYWRkaW5nOiAwcHg7XFxyXFxuXFx0bWFyZ2luOiAwcHg7XFxyXFxuXFx0Ym9yZGVyOiAwcHg7XFxyXFxufVxcclxcbiosXFxyXFxuKjpiZWZvcmUsXFxyXFxuKjphZnRlciB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuOmZvY3VzLFxcclxcbjphY3RpdmUge1xcclxcblxcdC8vIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbmE6Zm9jdXMsXFxyXFxuYTphY3RpdmUge1xcclxcblxcdC8vIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdG1pbi13aWR0aDogJG1pbldpZHRoICsgcHg7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGNvbG9yOiAkbWFpbkNvbG9yO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcblxcdGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcXHJcXG5cXHRmb250LXNpemU6ICRmb250U2l6ZTtcXHJcXG5cXHQvL3RleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxyXFxuXFx0LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LW1vei10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG5cXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbn1cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEge1xcclxcblxcdGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxyXFxufVxcclxcbmJ1dHRvbiB7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGNvbG9yOiBpbmhlcml0O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5hIHtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbnVsIGxpIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5pbWcge1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxufVxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG5cXHRmb250LXdlaWdodDogaW5oZXJpdDtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxufVxcclxcblwiLFwiLy8g0JfQsNCz0LDQu9GM0L3QuNC5INGE0LDQudC7INC10LvQtdC80LXQvdGC0ZbQsiDRhNC+0YDQvFxcclxcbi8vINCU0LvRjyDQv9GW0LTQutC70Y7Rh9C10L3QvdGPL9Cy0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LXQu9C10LzQtdC90YLQsCDRhNC+0YDQvNC4INC00LjQstC40YHRjCBiYXNlL2Zvcm1zL2Zvcm1zLnNjc3NcXHJcXG5AaW1wb3J0IFxcXCJiYXNlL2Zvcm1zL2Zvcm1zXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC/0L7Qv9Cw0L/RltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9wb3B1cFxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDRgdC/0L7QudC70LXRgNGW0LJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3Nwb2xsZXJzXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINGC0LDQsdGW0LJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3RhYnNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LzQsNC/XFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9tYXBzXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINCx0LvQvtC60YMgXFxcItC/0L7QutCw0LfQsNGC0Lgg0YnQtVxcXCJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3Nob3dtb3JlXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQu9C40L/QutC+0LPQviDQsdC70L7QutGDXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zdGlja3lcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC/0L7QstC90L7QtdC60YDQsNC90L3QvtCz0L4g0LHQu9C+0LrRg1xcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvZnVsbHNjcmVlblxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0L/QvtC10LrRgNCw0L3QvtGXINC/0YDQvtC60YDRg9GC0LrQuFxcclxcbi8vIFN0eWxlcyBmb3IgZnVsbHBhZ2Ugc2Nyb2xsXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9mdWxscGFnZVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8gcmlwcGxlINC10YTQtdC60YLRg1xcclxcbi8vIFN0eWxlcyBmb3IgcmlwcGxlIGVmZmVjdFxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvcmlwcGxlXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQutCw0YHRgtC+0LzQvdC+0LPQviDQutGD0YDRgdC+0YDRg1xcclxcbi8vIFN0eWxlcyBmb3IgY3VzdG9tIGN1cnNvclxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvY3Vyc29yXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDRh9GD0LnQvdC40YUg0LrQsNGA0YLQuNC90L7QuiAoSUJHKVxcclxcbi8vINCh0L3RltC/0L/QtdGCIChIVE1MKTogaWJnIChkaXYg0Lcg0LrQsNGA0YLQuNC90LrQvtGOINGC0LAg0LrQu9Cw0YHQsNC80LgpXFxyXFxuLy8g0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBpYmdhIChhINC3INC60LDRgNGC0LjQvdC60L7RjiDRgtCwINC60LvQsNGB0LDQvNC4KVxcclxcbltjbGFzcyo9XFxcIi1pYmdcXFwiXSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGltZyB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG5cXHR9XFxyXFxufVxcclxcbltjbGFzcyo9XFxcIi1pYmctLWNvbnRhaW5cXFwiXSB7XFxyXFxuXFx0aW1nIHtcXHJcXG5cXHRcXHRvYmplY3QtZml0OiBjb250YWluO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0KjQsNCx0LvQvtC90LggKNC30LDQs9C+0YLRltCy0LvRlilcXHJcXG4vLyBAZXh0ZW5kICXRltC8J9GPINGI0LDQsdC70L7QvdGDO1xcclxcbi8vINCh0L3RltC/0L/QtdGCIChTQ1NTKTogZXhcXHJcXG5cXHJcXG4vLyDQm9GW0YfQuNC70YzQvdC40Log0LTQu9GPINGB0L/QuNGB0LrRg1xcclxcbiVsaXN0Q291bnRlciB7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcblxcdGNvdW50ZXItcmVzZXQ6IGl0ZW07XFxyXFxuXFx0bGkge1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHQmOmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0Y291bnRlci1pbmNyZW1lbnQ6IGl0ZW07XFxyXFxuXFx0XFx0XFx0Y29udGVudDogY291bnRlcihpdGVtKTtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0JDQtNCw0L/RgtC40LLQvdC1INCy0ZbQtNC10L5cXHJcXG4lcmVzcG9uc2l2ZVZpZGVvIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRoZWlnaHQ6IDA7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDU2LjI1JTtcXHJcXG5cXHR2aWRlbyxcXHJcXG5cXHRpZnJhbWUsXFxyXFxuXFx0b2JqZWN0LFxcclxcblxcdGVtYmVkIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0JLRltC00LXQviDRj9C6INGE0L7QvVxcclxcbiV2aWRlb0JhY2tncm91bmQge1xcclxcblxcdHZpZGVvLFxcclxcblxcdGlmcmFtZSxcXHJcXG5cXHRvYmplY3QsXFxyXFxuXFx0ZW1iZWQge1xcclxcblxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRcXHR0b3A6IDUwJTtcXHJcXG5cXHRcXHRsZWZ0OiA1MCU7XFxyXFxuXFx0XFx0bWluLXdpZHRoOiAxMDAlO1xcclxcblxcdFxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0d2lkdGg6IGF1dG87XFxyXFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdFxcdHotaW5kZXg6IC0xMDA7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCh0ZbRgNC40Lkg0YTRltC70YzRgtGAXFxyXFxuJWdyYXlmaWx0ZXIge1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuXFx0ZmlsdGVyOiBncmF5c2NhbGUoMSk7XFxyXFxuXFx0QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuXFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0ZmlsdGVyOiBncmF5c2NhbGUoMCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0KHQutCw0YHRg9Cy0LDRgtC4INCy0LjQtNGW0LvQtdC90L3Rj1xcclxcbiVub3NlbGVjdCB7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi8vINCU0LfQtdGA0LrQsNC70YzQvdC1INCy0ZbQtNC+0LHRgNCw0LbQtdC90L3Rj1xcclxcbiVtaXJyb3Ige1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcclxcbn1cXHJcXG4vLyDQn9C70LDQstC90LjQuSDRgdC60YDQvtC70LtcXHJcXG4lc21vb3Roc2Nyb2xsIHtcXHJcXG5cXHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxufVxcclxcbi8vINCh0YXQvtCy0LDRgtC4INGB0LrRgNC+0LvQu1xcclxcbiVoaWRlc2Nyb2xsIHtcXHJcXG5cXHQmOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuXFx0Y29sb3I6ICNmZmY7XFxyXFxuXFx0Jl9fbWVudSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOjU4MHB4KXtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiA1MnB4O1xcclxcblxcdFxcdCAgfVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG5cXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyMCwgMTUpO1xcclxcbn1cXHJcXG4ubWVudSB7XFxyXFxuXFxyXFxuXFx0Jl9fYm9keSB7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAzNSwgMjUpO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMzUsIDI1KTtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdHotaW5kZXg6IDEwO1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOjU4MHB4KXtcXHJcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0ICB9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2xpc3Qge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tcmlnaHRcXFwiLCA2MCwgNTApO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdhcFxcXCIsIDQwLCAzMCk7XFxyXFxuXFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6NTgwcHgpe1xcclxcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDA7XFxyXFxuXFx0XFx0XFx0ZmxleDogMjtcXHJcXG5cXHRcXHQgIH1cXHJcXG5cXHQgIH1cXHJcXG5cXHJcXG5cXHQmX19saW5rIHtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDM1LCAyNSk7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAzNSwgMjUpO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMTZweDtcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6NTgwcHgpe1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMjhweDtcXHJcXG5cXHRcXHQgIH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQmOjpiZWZvcmUge1xcclxcblxcdFxcdFxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRcXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdFxcdHRvcDogNDVweDtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDFweDtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcblxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxuXFx0XFx0XFx0b3BhY2l0eTogMDtcXHJcXG5cXHRcXHRcXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHQmOjpiZWZvcmUge1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG5cXHRcXHRcXHRcXHRvcGFjaXR5OiAxO1xcclxcblxcdFxcdFxcdFxcdHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fbGluay5jdXJyZW50IHtcXHJcXG5cXHRcXHQmOjpiZWZvcmUge1xcclxcblxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG5cXHRcXHRcXHRvcGFjaXR5OiAxO1xcclxcblxcdFxcdFxcdHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLnNvY2lhbHMtbGlzdCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdhcFxcXCIsIDE1LCAxMCk7XFxyXFxuXFxyXFxuXFx0QG1lZGlhIChtYXgtd2lkdGg6NTgwcHgpe1xcclxcblxcdFxcdGdhcDogMzBweDtcXHJcXG5cXHRcXHRmbGV4OiAxO1xcclxcbiAgXFx0fVxcclxcblxcclxcblxcdCZfX2ljb24ge1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOjU4MHB4KXtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMjVweDtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDI1cHg7XFxyXFxuICBcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vL0J1cmdlclxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xcclxcblxcdC5tZW51X19ib2R5IHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0XFx0dG9wOiA1MnB4O1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGF1dG87XFxyXFxuXFx0XFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5pY29uLW1lbnUge1xcclxcblxcdEBtZWRpYSAobWluLXdpZHRoOjU4MHB4KXtcXHJcXG5cXHRcXHRkaXNwbGF5OiBub25lOyAgXFxyXFxuXFx0fVxcclxcblxcdEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xcclxcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHR3aWR0aDogdG9SZW0oMjUpO1xcclxcblxcdFxcdGhlaWdodDogdG9SZW0oMTQpO1xcclxcblxcdFxcdHotaW5kZXg6IDU7XFxyXFxuXFx0XFx0QG1lZGlhIChhbnktaG92ZXI6IG5vbmUpIHtcXHJcXG5cXHRcXHRcXHRjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdHNwYW4sXFxyXFxuXFx0XFx0Jjo6YmVmb3JlLFxcclxcblxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcblxcdFxcdFxcdHJpZ2h0OiAwO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IHRvUmVtKDIpO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdCY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0Ym90dG9tOiAwO1xcclxcblxcdFxcdFxcdHdpZHRoOiA1MCU7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdHNwYW4ge1xcclxcblxcdFxcdFxcdHRvcDogY2FsYyg1MCUgLSB0b1JlbSgxKSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdC5tZW51LW9wZW4gJiB7XFxyXFxuXFx0XFx0XFx0Ky5tZW51X19ib2R5IHtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdHNwYW4ge1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAwO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHQmOjpiZWZvcmUsXFxyXFxuXFx0XFx0XFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHQmOjpiZWZvcmUge1xcclxcblxcdFxcdFxcdFxcdHRvcDogY2FsYyg1MCUgLSB0b1JlbSgxKSk7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdFxcdFxcdGJvdHRvbTogY2FsYyg1MCUgLSB0b1JlbSgxKSk7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0fVxcdFxcclxcblxcdH1cXHJcXG5cXHRcXHJcXG5cXHRcXHJcXG5cXHJcXG5cIixcIi8v0J/RltC00LrQu9GO0YfQtdC90L3RjyDRiNGA0LjRhNGC0YNcXHJcXG5AbWl4aW4gZm9udCgkZm9udF9uYW1lLCAkZmlsZV9uYW1lLCAkd2VpZ2h0LCAkc3R5bGUpIHtcXHJcXG5cXHRAZm9udC1mYWNlIHtcXHJcXG5cXHRcXHRmb250LWZhbWlseTogJGZvbnRfbmFtZTtcXHJcXG5cXHRcXHRmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuXFx0XFx0c3JjOlxcclxcblxcdFxcdFxcdHVybChcXFwiLi4vZm9udHMvI3skZmlsZV9uYW1lfS53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXHJcXG5cXHRcXHRcXHR1cmwoXFxcIi4uL2ZvbnRzLyN7JGZpbGVfbmFtZX0ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiAjeyR3ZWlnaHR9O1xcclxcblxcdFxcdGZvbnQtc3R5bGU6ICN7JHN0eWxlfTtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vUGVyY2VudFxcclxcbkBmdW5jdGlvbiBwZXJjZW50KCRweCwgJGZyb206IDEwMCkge1xcclxcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgJGZyb20pICogMTAwJTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcbi8vUkVNXFxyXFxuQGZ1bmN0aW9uIHRvUmVtKCRweCwgJGN1cnJlbnQ6IDE2KSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAkY3VycmVudCkgKyByZW07XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG4vL0VNXFxyXFxuQGZ1bmN0aW9uIGVtKCRweCwgJGN1cnJlbnQ6IDE2KSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAkY3VycmVudCkgKyBlbTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcblxcclxcbi8vQ3VycmVuY3lcXHJcXG5AbWl4aW4gY3VycmVuY3koJHN5bSkge1xcclxcblxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRjb250ZW50OiBcXFwiI3skc3ltfVxcXCI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyBHcmlkc1xcclxcbkBtaXhpbiBncmlkQ2FyZHMoJHR5cGU6IGZpdCwgJG1pbjogMjgwcHgsICRtYXg6IDFmciwgJGdhcDogMzBweCkge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z2FwOiAkZ2FwO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tI3skdHlwZX0sIG1pbm1heCgkbWluLCAkbWF4KSk7XFxyXFxufVxcclxcblxcclxcbi8vINCQ0LTQsNC/0YLQuNCy0L3QsCDQstC70LDRgdGC0LjQstGW0YHRgtGMIChjbGFtcClcXHJcXG5AbWl4aW4gYWRhcHRpdmVWYWx1ZSgkcHJvcGVydHksICRzdGFydFNpemUsICRtaW5TaXplLCAka2VlcFNpemU6IDAsICR3aWR0aEZyb206ICRjb250YWluZXJXaWR0aCwgJHdpZHRoVG86ICRtaW5XaWR0aCkge1xcclxcblxcdEBpZiAoJHN0YXJ0U2l6ZT09MCkge1xcclxcblxcdFxcdCRzdGFydFNpemU6IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHRAaWYgKCRtaW5TaXplPT0wKSB7XFxyXFxuXFx0XFx0JG1pblNpemU6IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQlNC70Y8gY2FsYygpO1xcclxcblxcdCRhZGRTaXplOiBtYXRoLmRpdigkc3RhcnRTaXplIC0gJG1pblNpemUsIDE2KTtcXHJcXG5cXHJcXG5cXHRAaWYgKCR3aWR0aEZyb20gPT0gJGNvbnRhaW5lcldpZHRoIGFuZCAkbWF4V2lkdGhDb250YWluZXIgPT0gMCkge1xcclxcblxcdFxcdCR3aWR0aEZyb206ICRtYXhXaWR0aDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JHRgNC10LnQui3Qv9C+0ZfQvdGC0Lgg0LIgRU1cXHJcXG5cXHQkd2lkdGhGcm9tTWVkaWE6IGVtKCR3aWR0aEZyb20pO1xcclxcblxcdCR3aWR0aFRvTWVkaWE6IGVtKCR3aWR0aFRvKTtcXHJcXG5cXHJcXG5cXHQvLyDQpNC+0YDQvNGD0LvQsCDQv9C70LDQstCw0Y7Rh9C+0LPQviDQt9C90LDRh9C10L3QvdGPXFxyXFxuXFx0Ly8g0JjRgdGC0L7Rh9C90LjQujogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9saW5lYXJseS1zY2FsZS1mb250LXNpemUtd2l0aC1jc3MtY2xhbXAtYmFzZWQtb24tdGhlLXZpZXdwb3J0L1xcclxcblxcdCRzbG9wZTogbWF0aC5kaXYoKCRzdGFydFNpemUgLSAkbWluU2l6ZSksICgkd2lkdGhGcm9tIC0gJHdpZHRoVG8pKTtcXHJcXG5cXHQkeUludGVyc2VjdGlvbjogLSR3aWR0aFRvICogJHNsb3BlICsgJG1pblNpemU7XFxyXFxuXFx0QGlmICgkeUludGVyc2VjdGlvbj09MCkge1xcclxcblxcdFxcdCR5SW50ZXJzZWN0aW9uOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFx0JGZseVZhbHVlOiAje3RvUmVtKCR5SW50ZXJzZWN0aW9uKX1cXFwiICsgXFxcIiAjeyRzbG9wZSAqIDEwMH12dztcXHJcXG5cXHJcXG5cXHQvLyDQntGC0YDQuNC80LDQvdC90Y8g0LfQvdCw0YfQtdC90L3RjyDQstC70LDRgdGC0LjQstC+0YHRgtGWXFxyXFxuXFx0JHByb3BlcnR5VmFsdWU6ICN7XFxcImNsYW1wKFxcXCIgdG9SZW0oJG1pblNpemUpIFxcXCIsXFxcIiAkZmx5VmFsdWUgXFxcIixcXFwiIHRvUmVtKCRzdGFydFNpemUpIFxcXCIpXFxcIn07XFxyXFxuXFx0Ly8g0K/QutGJ0L4g0L3QtdCz0LDRgtC40LLQvdGWINC30L3QsNGH0LXQvdC90Y9cXHJcXG5cXHRAaWYgKCRtaW5TaXplID4gJHN0YXJ0U2l6ZSkge1xcclxcblxcdFxcdCRwcm9wZXJ0eVZhbHVlOiAje1xcXCJjbGFtcChcXFwiIHRvUmVtKCRzdGFydFNpemUpIFxcXCIsXFxcIiAkZmx5VmFsdWUgXFxcIixcXFwiIHRvUmVtKCRtaW5TaXplKSBcXFwiKVxcXCJ9O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0LfQvdCw0YfQtdC90L3RjyDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XFxyXFxuXFx0QGlmICRrZWVwU2l6ZSAhPSAxIGFuZCAka2VlcFNpemUgIT0gMyB7XFxyXFxuXFx0XFx0QG1lZGlhIChtaW4td2lkdGg6ICR3aWR0aEZyb21NZWRpYSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogdG9SZW0oJHN0YXJ0U2l6ZSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHQvLyDQkNC00LDQv9GC0YPRlNC80L4g0YDQvtC30LzRltGAINGDINC/0YDQvtC80ZbQttC60YMg0LzRltC2INC30LDQt9C90LDRh9C10L3QuNC80Lgg0YjQuNGA0LjQvdCw0LzQuCDQsifRjtC/0L7RgNGC0YNcXHJcXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogJHdpZHRoVG9NZWRpYSkgYW5kIChtYXgtd2lkdGg6ICR3aWR0aEZyb21NZWRpYSkge1xcclxcblxcdFxcdC8vINCv0LrRidC+INC/0ZbQtNGC0YDQuNC80YPRlNGC0YzRgdGPIGNsYW1wKCk7XFxyXFxuXFx0XFx0QHN1cHBvcnRzICgjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Ly8g0K/QutGJ0L4g0L3QtSDQv9GW0LTRgtGA0LjQvNGD0ZTRgtGM0YHRjyBjbGFtcCgpO1xcclxcblxcdFxcdEBzdXBwb3J0cyBub3QgKCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWUpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IGNhbGMoI3t0b1JlbSgkbWluU2l6ZSl9ICsgI3skYWRkU2l6ZX0gKiAoMTAwdncgLSAje3RvUmVtKCR3aWR0aFRvKX0pIC8gI3ttYXRoLmRpdigkd2lkdGhGcm9tLCAxNikgLSBtYXRoLmRpdigkd2lkdGhUbywgMTYpfSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHRAaWYgJGtlZXBTaXplICE9IDEgYW5kICRrZWVwU2l6ZSAhPSAyIHtcXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJHdpZHRoVG9NZWRpYSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogdG9SZW0oJG1pblNpemUpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigpO1xcclxcbiAgICAmX19jb250YWluZXIge1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5ibG9jay13cmFwcGVyIHtcXHJcXG59XFxyXFxuLmxlZnQtYmxvY2sge1xcclxcblxcclxcbiAgICAmX190ZXh0IHtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19jb250YWN0cyB7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fc29jaWFscyB7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmZvb3Rlci1sb2dvIHtcXHJcXG59XFxyXFxuLmxvZ28ge1xcclxcbn1cXHJcXG4uY29udGFjdHMge1xcclxcblxcclxcbiAgICAmX19pdGVtIHtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19saW5rIHtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uc29jaWFscyB7XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0ge1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2ljb24ge1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5yaWdodC1ibG9jayB7XFxyXFxufVxcclxcbi5zdWJzY3JpYmUge1xcclxcbn1cXHJcXG4uZm9vdGVyLWZvcm0ge1xcclxcblxcclxcbiAgICAmX19jdXN0b20tcGxhY2Vob2xkZXIge1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2lucHV0IHtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19idXR0b24ge1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5saW5rcy1ibG9jayB7XFxyXFxufVxcclxcbi5mb290ZXItbmF2IHtcXHJcXG5cXHJcXG4gICAgJl9faXRlbSB7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fbGluayB7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmZvb3Rlci1jcmVkaXRzIHtcXHJcXG59XFxyXFxuXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXCIsXCIvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyBIZXJvIHNlY3Rpb25cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uaGVybyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDQ4MCwgMjcwKTtcXHJcXG4gICAgJl9fY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLWNvdW50ZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImJvdHRvbVxcXCIsIDcwLCAzMCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImxlZnRcXFwiLCAyMDAsIDE1KTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA4MCwgNTApO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAmX19pdGVtIHtcXHJcXG4gICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDIwLCAxMCk7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgdG9wOiA3cHg7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibGVmdFxcXCIsIDMwLCAxOSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJnNwYW4ge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTQsIDEyKTsgIFxcclxcbiAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJsb2NrLXRpdGxlIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInRvcFxcXCIsIDE3NSwgNTApO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibGVmdFxcXCIsIDIwMCwgMzApO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA1MTYsIDMwMCk7XFxyXFxuICAgICAgICBwYWRkaW5nOiA0MHB4IDAgNDBweCAwO1xcclxcbiAgICAmX190aXRsZSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCA3MCwgMzYpO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XFxyXFxuICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIHRleHQtc2hhZG93OiA0cHggNHB4IDJweCByZ2JhKDAsMCwwLDAuNik7XFxyXFxuICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi12aWV3IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ0b3BcXFwiLCAzOTAsIDE2MCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInJpZ2h0XFxcIiwgMTc4LCAyMCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgOTAsIDU1KTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgOTAsIDU1KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDE1LCAxMik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UsIGJveC1zaGFkb3cgMC40cyBlYXNlO1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTVweCA4cHggI2ZmZjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLXNsaWRlIHtcXHJcXG4gICAgJl9faW1nIHtcXHJcXG4gICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJoZWlnaHRcXFwiLCA1ODAsIDIyMCk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlci1idXR0b24tcHJldiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyMjVweDtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibGVmdFxcXCIsIC01MCwgNDAwKTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6OTU4cHgpe1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICB9XFxyXFxufVxcclxcbi5zd2lwZXItYnV0dG9uLW5leHQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjI1cHg7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInJpZ2h0XFxcIiwgLTUwLCA0MDApO1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDo5NThweCl7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gQWJvdXQtdXMgc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5hYm91dC11cyB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgMjU2LCA0MCk7XFxyXFxuXFxyXFxuICAgICZfX2NvbnRhaW5lci0tYmlnIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMzA2cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uaW50cm8tYmxvY2sge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDYxNSwgMjkwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDkzLCA0MCk7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICZfX2xhYmVsIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAyNSwgMTUpO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190aXRsZSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAzNCwgMjQpO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmluZm8tYmxvY2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDE2MCwgNjApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJnYXBcXFwiLCAxMTAsIDQwKTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6NTgwcHgpe1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDQwLCAyMCk7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtLS10b3AtbGluZSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDM5MSwgMjAwKTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgMzQsIDIwKTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RleHQtLWJpZyB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyMCwgMTgpO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG5cXHJcXG4gICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNDAwLCAyMTApO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpXFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faXRlbS0tYWN0aW9uIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNDYzLCAyNTApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RleHQtLXNtYWxsIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDE3LCAxNSk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgNTAsIDI1KTtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ0biBzcGFuIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiA1MDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDM5LCAxOCk7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTkuOThweCkge1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ2OS45OHB4KSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEzcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgMTksIDEwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAxOSwgMTApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDE3MCwgODApO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgXFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ0b3BcXFwiLCAyNSwgMTIpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicmlnaHRcXFwiLCAzOCwgMTkpO1xcclxcbiAgICAgICAgd2lkdGg6IDZweDtcXHJcXG4gICAgICAgIGhlaWdodDogNnB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTkuOThweCkge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjUlKTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2U7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tcmV2ZXJzZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkICNmZmY7XFxyXFxuXFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gRGlyZWN0aW9ucyBzZWN0aW9uXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmRpcmVjdGlvbnMge1xcclxcbiAgICBtYXgtd2lkdGg6IDEzMzZweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE0MCwgNzApO1xcclxcbn1cXHJcXG5cXHJcXG4ud29ya3MtbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gICAgJl9faXRlbSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDMwNCwgMjAwKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwgMCwgMCwgMC4xMykgMCUsIHJnYmEoMCwgMCwgMCwgMC42NSkgMTAwJSk7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJoZWlnaHRcXFwiLCA0MDAsIDI4MCk7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgICAgICAgICAgLndvcmtzLWxpc3RfX2luZm8ge1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE2cHgpO1xcclxcbiAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgLndvcmtzLWxpc3RfX2NhcmQge1xcclxcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cig3cHgpO1xcclxcbiAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2NhcmQge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBmaWx0ZXI6IGJsdXIoMCk7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC41cyBlYXNlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFx0Jl9faW5mbyB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1yaWdodFxcXCIsIDkzLCAyNSk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCA1MCwgMjUpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE2cHgpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fdGV4dCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIG1hcmdpbjogMjRweCAwIDI0cHggMDtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OTkuOThweCkge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDsgXFxyXFxuICAgICAgICB9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX21vcmUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDk5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7IFxcclxcbiAgICAgICAgfVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gRGlyZWN0aW9ucyBzZWN0aW9uXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmZlYXR1cmVkIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAxNTcsIDc1KTtcXHJcXG4gICAgJl9fbGlzdCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJnYXBcXFwiLCAxMDAsIDMwKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgICAgICAmOmhvdmVyLFxcclxcbiAgICAgICAgJjpmb2N1cyB7XFxyXFxuICAgICAgICAgICAgLmZlYXR1cmVkX19idG4ge1xcclxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmX19pbWFnZSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDM3MCwgMTg1KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDQyOCwgMjE0KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19sYWJlbCB7ICAgXFxyXFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDsgXFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tdG9wXFxcIiwgMzQsIDE1KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA4LCA0KTtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OTkuOThweCkge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190eXBlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faW1hZ2UtLWJpZyB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDYwMCwgMjgwKTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDQyOCwgMTk0KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtLS10b3Age1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNjBweDtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faXRlbS0tYm90dG9tIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IC0xNjBweDtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2J0biB7XFxyXFxuICAgICAgICBsZWZ0OiAxMzBweDtcXHJcXG4gICAgICAgIHRvcDogMjAwcHg7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UsIHZpc2liaWxpdHkgMC41cyBlYXNlLCB0cmFuc2Zvcm0gMC40cyBlYXNlLCBib3gtc2hhZG93IDAuNHMgZWFzZTtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgICAgICAgbGVmdDogMTAwcHg7XFxyXFxuICAgICAgICAgICAgdG9wOiAxMDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlU21hbGwpIHtcXHJcXG4gICAgICAgICAgICBsZWZ0OiA2NnB4O1xcclxcbiAgICAgICAgICAgIHRvcDogNzdweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uaW50cm9kdWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmlyc3QgYmFzZWxpbmU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDQ4LCAyNSk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDEwMCwgMjApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXJpZ2h0XFxcIiwgMTAwLCA1MCk7XFxyXFxuICAgICZfX3RpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzc1cHg7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxMDAsIDUwKTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA0MjUsIDI1MCk7XFxyXFxuICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNzAsIDM1KTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgICAgICAgICBsZWZ0OiA2ODBweDtcXHJcXG4gICAgICAgICAgICB0b3A6IDgwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDQ4LCAyNSk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsZWZ0XFxcIiwgMTAwLCA1MCk7XFxyXFxuICAgICAgICAgICAgICAgIHRvcDogLTQwcHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vIFByb2Nlc3Mgc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5wcm9jZXNzIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICAgICAgaGVpZ2h0OiA2NjRweDtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCl7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA3NjRweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHRcXHQmX19jb250YWluZXIge1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMTMwMHB4O1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XFxyXFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAxNDksIDY1KTtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE2MSwgNzApO1xcclxcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDY0MSwgMjAwKTtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJoZWlnaHRcXFwiLCA2NDEsIDIwMCk7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAtMjAlO1xcclxcbiAgICAgICAgICAgIHRvcDogLTM1JTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXHJcXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpe1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jl9fdGl0bGUge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDgwLCAzMCk7IFxcclxcblxcclxcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCl7XFxyXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDEwMCwgMjApO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDE5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jl9fbGlzdCB7XFxyXFxuICAgICAgICAgICAgZ2FwOiAyNHB4O1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tbGVmdFxcXCIsIDYwLCAyMCk7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLXJpZ2h0XFxcIiwgMTQwLCAwKTtcXHJcXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpe1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jl9faXRlbSB7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAucHJvY2Vzc19fdGV4dCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjglKVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIC5wcm9jZXNzX19udW1iZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jl9fdGV4dCB7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICM2RjZGNkY7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjRzIGVhc2UsIHRyYW5zZm9ybSAwLjRzIGVhc2U7XFxyXFxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgICBsZWZ0OiAtOTBweDtcXHJcXG4gICAgICAgICAgICAgICAgdG9wOiAxN3B4O1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLCBvcGFjaXR5IDAuNHMgZWFzZTtcXHJcXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KXtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX19udW1iZXIge1xcclxcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2U7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvY2Vzcy13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KXtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYmxvY2staW5mbyB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMzk1LCAyNTApO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpe1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgMTAwLCAyMCk7XFxyXFxuICAgIH1cXHJcXG5cXHRcXHQmX190ZXh0IHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA1MywgMjUpOyBcXHJcXG4gICAgICAgICAgICBcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFxyXFxufVxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vQ3JlYXRlIHNlY3Rpb25cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uY3JlYXRlIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAxNjAsIDgwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAxNDAsIDcwKTtcXHJcXG4gICAgJl9fY29udGFpbmVyIHtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX193cmFwcGVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAzNy45OHB4KSB7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uaW1nLWJsb2NrIHtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMzcuOThweCkge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgJl9faXRlbSB7XFxyXFxuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjRzIGVhc2U7XFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtLS1iaWcge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNDcwLCAyMzUpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgMjkwLCAxNDUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2JvdHRvbSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDU3NSwgMzAwKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtLS1zbWFsbCB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCAxMzAsIDMwKTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1yaWdodFxcXCIsIDMwLCAxNSk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDI3MCwgMTM1KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDE0MCwgODApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0tLW1pZGRsZSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDI3MCwgMTM1KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDI1MCwgMTI1KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uY3JlYXRlLWluZm8ge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDkzLCA0MCk7XFxyXFxuICAgICZfX3RpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xcclxcbiAgICAgICAgd2lkdGg6IDM1N3B4O1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDM3LCAyMCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGV4dCB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCA5MCwgMjApO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDUzLCAyNyk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDQzOCwgMjgwKTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS42OyBcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDM3Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgzLjk4cHgpIHtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCA0MCwgMjApO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19idG4ge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWxlZnRcXFwiLCA5MCwgMjApO1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMzcuOThweCkge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4My45OHB4KSB7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWxlZnRcXFwiLCA0MCwgMjApO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vVmFsdWVzIHNlY3Rpb25cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4udmFsdWVzIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAyMTQsIDEwNyk7XFxyXFxuICAgICZfX2NvbnRhaW5lciB7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGl0bGUge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTAwLCA1NSk7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA4NiwgNDApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2xpc3Qge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZ2FwXFxcIiwgNzUsIDQwKTtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NTEuOThweCkge1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMzQwLCAyNTApO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgMTAwLCA1MCk7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjUxLjk4cHgpIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pbWcge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA3MCwgMzUpO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19sYWJlbCB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyNCwgMjApO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7IFxcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTdweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190ZXh0IHsgIFxcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxOXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX21vcmUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAudmFsdWVzX19pY29uIHtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pY29uIHtcXHJcXG4gICAgICAgIGZpbGw6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vL1N3aXBlciBzZWN0aW9uXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLnN3aXBlci1zZWN0aW9uIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAxMjgsIDcwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAxOTYsIDcwKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICZfX2NvbnRhaW5lciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA2NDEsIDIwMCk7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgNjQxLCAyMDApO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAyMyU7XFxyXFxuICAgICAgICAgICAgdG9wOiAyMyU7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxyXFxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KXtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICB9IFxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3dyYXBwZXIge1xcclxcbiAgICAgICAgei1pbmRleDogMjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19zbGlkZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faW1nLXF1b3RlIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMzgsIDE5KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA5MiwgMjApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RleHQge1xcclxcbiAgICAgICAgY29sb3I6ICNGRkY7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyNCwgMTUpO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA2NzMsIDMwMCk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMzMsIDE1KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19hdXRob3Ige1xcclxcbiAgICAgICAgY29sb3I6ICM5Njk2OTY7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kLWNvdW50ZXIge1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBsZWZ0OiA0NyU7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImJvdHRvbVxcXCIsIC0xMjAsIDApO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImxlZnRcXFwiLCAtNTQ4LCAtMTM1KTtcXHJcXG4gICAgICAgIGJvdHRvbTogNDA1cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMTY4LCA4MCk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicmlnaHRcXFwiLCAtNTc2LCAtMTIwKTtcXHJcXG4gICAgICAgIGJvdHRvbTogMTAwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNzAsIDM1KTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxuXFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy9DbGllbnRzIHNlY3Rpb25cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uY2xpZW50cyB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgMTU1LCA3NSk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMTU1LCA3NSk7XFxyXFxuICAgICZfX2NvbnRhaW5lciB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDk3NXB4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzc5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RpdGxlLWJsb2NrIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1yaWdodFxcXCIsIDI2MCwgMCk7XFxyXFxuXFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzc5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3VwcGVydGl0bGUge1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAyNywgMTUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RpdGxlIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDM0LCAyNCk7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMjY4LCAxMjUpOyBcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NzkuOThweCkge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fbGlzdCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicm93LWdhcFxcXCIsIDUwLCAzMCk7XFxyXFxuXFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzc5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vTmV3IHNlY3Rpb25cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4ubmV3IHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAxNjAsIDcwKTtcXHJcXG4gICAgJl9fY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJib3R0b21cXFwiLCAtMTYwLCAtNzApO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RpdGxlIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDQ4LCAyNCk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgOTAsIDMwKTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4yOyBcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19saXN0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdhcFxcXCIsIDMwLCA0MCk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgODAsIDMwKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMzcwLCAyODApO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fZGF0ZSB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDM1JTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxNCwgMTApO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faW1hZ2Uge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDI3LCAxNSk7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190ZXh0IHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDIwLCAxNik7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDI5NCwgMjYwKTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS41OyBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19idG4ge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy9Xb3JrIHNlY3Rpb25cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4ud29yayB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgMTU4LCA0MCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMTU4LCA0MCk7XFxyXFxuICAgICZfX2NvbnRhaW5lciB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDk2MHB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2Jsb2NrIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0OS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190aXRsZSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDQ4MywgMjUwKTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDEwMCwgNTApO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxuICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMjtcXHJcXG4gICAgICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faW1nIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMjMwLCAxMTUpO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgbGVmdDogNDclO1xcclxcbiAgICAgICAgYm90dG9tOiAzOHB4O1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0OS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19saW5rIHtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2U7XFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCIsXCI6cm9vdCB7XFxyXFxuICAgIC0tZGFyay1jbDogIzBFMEUwRTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJiMDAxZWIyYWM5ZTU4OGNmNTc1XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9