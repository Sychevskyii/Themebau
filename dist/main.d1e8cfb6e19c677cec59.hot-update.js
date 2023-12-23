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

body::after {
  content: "";
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.8s ease 0s;
  pointer-events: none;
  z-index: 149;
}

.popup-show body::after {
  opacity: 1;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 30px 10px;
  transition: visibility 0.8s ease 0s;
  visibility: hidden;
  pointer-events: none;
}

.popup_show {
  z-index: 150;
  visibility: visible;
  overflow: auto;
  pointer-events: auto;
}

.popup_show .popup__content {
  visibility: visible;
  transform: scale(1);
}

.popup__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  flex: 1 1 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup__content {
  visibility: hidden;
  transform: scale(0);
  transition: transform 0.3s ease 0s;
  background-color: #eee;
  padding: 20px;
  width: 100%;
  max-width: 900px;
  border-radius: 20px;
}
.lock .popup__content {
  visibility: visible;
}

.popup-swiper__slide {
  width: 770px;
}
.popup-swiper__img {
  width: 100%;
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
  background-color: var(--dark-cl);
  overflow: hidden;
}
@media (min-width: 75em) {
  .footer {
    padding-top: 7.5625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-top: clamp( 2.5rem , 0.6590909091rem  +  9.2045454545vw , 7.5625rem )) {
    .footer {
      padding-top: clamp( 2.5rem , 0.6590909091rem  +  9.2045454545vw , 7.5625rem );
    }
  }
  @supports not (padding-top: clamp( 2.5rem , 0.6590909091rem  +  9.2045454545vw , 7.5625rem )) {
    .footer {
      padding-top: calc(2.5rem + 5.0625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .footer {
    padding-top: 2.5rem;
  }
}
@media (min-width: 75em) {
  .footer {
    padding-bottom: 8.125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-bottom: clamp( 4.375rem , 3.0113636364rem  +  6.8181818182vw , 8.125rem )) {
    .footer {
      padding-bottom: clamp( 4.375rem , 3.0113636364rem  +  6.8181818182vw , 8.125rem );
    }
  }
  @supports not (padding-bottom: clamp( 4.375rem , 3.0113636364rem  +  6.8181818182vw , 8.125rem )) {
    .footer {
      padding-bottom: calc(4.375rem + 3.75 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .footer {
    padding-bottom: 4.375rem;
  }
}
.footer__container {
  position: relative;
}
.footer__container::after {
  content: "";
  position: absolute;
  right: -25%;
  top: 23%;
  border-radius: 50%;
  background-color: #202020;
}
@media (min-width: 75em) {
  .footer__container::after {
    width: 40.0625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 12.5rem , 2.4772727273rem  +  50.1136363636vw , 40.0625rem )) {
    .footer__container::after {
      width: clamp( 12.5rem , 2.4772727273rem  +  50.1136363636vw , 40.0625rem );
    }
  }
  @supports not (width: clamp( 12.5rem , 2.4772727273rem  +  50.1136363636vw , 40.0625rem )) {
    .footer__container::after {
      width: calc(12.5rem + 27.5625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .footer__container::after {
    width: 12.5rem;
  }
}
@media (min-width: 75em) {
  .footer__container::after {
    height: 40.0625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (height: clamp( 12.5rem , 2.4772727273rem  +  50.1136363636vw , 40.0625rem )) {
    .footer__container::after {
      height: clamp( 12.5rem , 2.4772727273rem  +  50.1136363636vw , 40.0625rem );
    }
  }
  @supports not (height: clamp( 12.5rem , 2.4772727273rem  +  50.1136363636vw , 40.0625rem )) {
    .footer__container::after {
      height: calc(12.5rem + 27.5625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .footer__container::after {
    height: 12.5rem;
  }
}
@media (max-width: 667.98px) {
  .footer__container::after {
    display: none;
  }
}

.block-wrapper {
  color: #fff;
  display: flex;
}
@media (max-width: 47.99875em) {
  .block-wrapper {
    flex-direction: column;
    gap: 80px;
  }
}

.left-block {
  position: relative;
}
@media (min-width: 75em) {
  .left-block {
    width: 25rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 17.5rem , 14.7727272727rem  +  13.6363636364vw , 25rem )) {
    .left-block {
      width: clamp( 17.5rem , 14.7727272727rem  +  13.6363636364vw , 25rem );
    }
  }
  @supports not (width: clamp( 17.5rem , 14.7727272727rem  +  13.6363636364vw , 25rem )) {
    .left-block {
      width: calc(17.5rem + 7.5 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .left-block {
    width: 17.5rem;
  }
}
.left-block::after {
  content: "";
  position: absolute;
  top: -40%;
  right: 0;
  background-color: #202020;
  width: 1px;
  height: 200%;
}
@media (max-width: 47.99875em) {
  .left-block::after {
    height: 150%;
  }
}
.left-block__text {
  width: 240px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
}
@media (min-width: 75em) {
  .left-block__text {
    margin-top: 1.875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-top: clamp( 0.9375rem , 0.5965909091rem  +  1.7045454545vw , 1.875rem )) {
    .left-block__text {
      margin-top: clamp( 0.9375rem , 0.5965909091rem  +  1.7045454545vw , 1.875rem );
    }
  }
  @supports not (margin-top: clamp( 0.9375rem , 0.5965909091rem  +  1.7045454545vw , 1.875rem )) {
    .left-block__text {
      margin-top: calc(0.9375rem + 0.9375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .left-block__text {
    margin-top: 0.9375rem;
  }
}
@media (min-width: 75em) {
  .left-block__text {
    margin-bottom: 4.75rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-bottom: clamp( 2.1875rem , 1.2556818182rem  +  4.6590909091vw , 4.75rem )) {
    .left-block__text {
      margin-bottom: clamp( 2.1875rem , 1.2556818182rem  +  4.6590909091vw , 4.75rem );
    }
  }
  @supports not (margin-bottom: clamp( 2.1875rem , 1.2556818182rem  +  4.6590909091vw , 4.75rem )) {
    .left-block__text {
      margin-bottom: calc(2.1875rem + 2.5625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .left-block__text {
    margin-bottom: 2.1875rem;
  }
}

.footer-logo {
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
}
@media (min-width: 75em) {
  .footer-logo {
    font-size: 2.125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (font-size: clamp( 1.25rem , 0.9318181818rem  +  1.5909090909vw , 2.125rem )) {
    .footer-logo {
      font-size: clamp( 1.25rem , 0.9318181818rem  +  1.5909090909vw , 2.125rem );
    }
  }
  @supports not (font-size: clamp( 1.25rem , 0.9318181818rem  +  1.5909090909vw , 2.125rem )) {
    .footer-logo {
      font-size: calc(1.25rem + 0.875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .footer-logo {
    font-size: 1.25rem;
  }
}

@media (min-width: 75em) {
  .contacts {
    margin-bottom: 5.0625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-bottom: clamp( 2.5rem , 1.5681818182rem  +  4.6590909091vw , 5.0625rem )) {
    .contacts {
      margin-bottom: clamp( 2.5rem , 1.5681818182rem  +  4.6590909091vw , 5.0625rem );
    }
  }
  @supports not (margin-bottom: clamp( 2.5rem , 1.5681818182rem  +  4.6590909091vw , 5.0625rem )) {
    .contacts {
      margin-bottom: calc(2.5rem + 2.5625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .contacts {
    margin-bottom: 2.5rem;
  }
}
.contacts__link {
  font-size: 17px;
  font-weight: 500;
  line-height: 1.7;
}

.socials {
  display: flex;
  gap: 20px;
}

.right-block {
  display: flex;
  flex-direction: column;
}
@media (min-width: 75em) {
  .right-block {
    margin-left: 6.25rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-left: clamp( 0.0000000625rem , -2.2727271875rem  +  11.36363625vw , 6.25rem )) {
    .right-block {
      margin-left: clamp( 0.0000000625rem , -2.2727271875rem  +  11.36363625vw , 6.25rem );
    }
  }
  @supports not (margin-left: clamp( 0.0000000625rem , -2.2727271875rem  +  11.36363625vw , 6.25rem )) {
    .right-block {
      margin-left: calc(0.0000000625rem + 6.2499999375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .right-block {
    margin-left: 0.0000000625rem;
  }
}
@media (max-width: 47.99875em) {
  .right-block {
    margin-left: 0;
  }
}

.subscribe {
  color: #969696;
  font-size: 15px;
  font-weight: 500;
}
@media (min-width: 75em) {
  .subscribe {
    margin-bottom: 2.5rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-bottom: clamp( 1.25rem , 0.7954545455rem  +  2.2727272727vw , 2.5rem )) {
    .subscribe {
      margin-bottom: clamp( 1.25rem , 0.7954545455rem  +  2.2727272727vw , 2.5rem );
    }
  }
  @supports not (margin-bottom: clamp( 1.25rem , 0.7954545455rem  +  2.2727272727vw , 2.5rem )) {
    .subscribe {
      margin-bottom: calc(1.25rem + 1.25 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .subscribe {
    margin-bottom: 1.25rem;
  }
}

.footer-form {
  position: relative;
}
@media (min-width: 75em) {
  .footer-form {
    width: 35.625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 17.5rem , 10.9090909091rem  +  32.9545454545vw , 35.625rem )) {
    .footer-form {
      width: clamp( 17.5rem , 10.9090909091rem  +  32.9545454545vw , 35.625rem );
    }
  }
  @supports not (width: clamp( 17.5rem , 10.9090909091rem  +  32.9545454545vw , 35.625rem )) {
    .footer-form {
      width: calc(17.5rem + 18.125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .footer-form {
    width: 17.5rem;
  }
}
@media (min-width: 75em) {
  .footer-form {
    margin-bottom: 8.1875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-bottom: clamp( 3.75rem , 2.1363636364rem  +  8.0681818182vw , 8.1875rem )) {
    .footer-form {
      margin-bottom: clamp( 3.75rem , 2.1363636364rem  +  8.0681818182vw , 8.1875rem );
    }
  }
  @supports not (margin-bottom: clamp( 3.75rem , 2.1363636364rem  +  8.0681818182vw , 8.1875rem )) {
    .footer-form {
      margin-bottom: calc(3.75rem + 4.4375 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .footer-form {
    margin-bottom: 3.75rem;
  }
}
.footer-form__input {
  background-color: transparent;
  width: 100%;
  outline: none;
  height: 36px;
  border-bottom: 1px solid #fff;
  color: #fff;
}
@media (min-width: 75em) {
  .footer-form__input {
    width: 35.625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (width: clamp( 17.5rem , 10.9090909091rem  +  32.9545454545vw , 35.625rem )) {
    .footer-form__input {
      width: clamp( 17.5rem , 10.9090909091rem  +  32.9545454545vw , 35.625rem );
    }
  }
  @supports not (width: clamp( 17.5rem , 10.9090909091rem  +  32.9545454545vw , 35.625rem )) {
    .footer-form__input {
      width: calc(17.5rem + 18.125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .footer-form__input {
    width: 17.5rem;
  }
}
.footer-form__input::placeholder {
  color: #fff;
  position: absolute;
  left: 0;
  bottom: 17px;
  opacity: 1;
  transition: opacity 0.4s ease, bottom 0.4s ease;
}
.footer-form__input:focus::placeholder {
  opacity: 0;
  bottom: 34px;
}
.footer-form__button {
  position: absolute;
  right: 0;
  bottom: 17px;
  width: 64px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: flex-start;
}
.footer-form__button::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: 5px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #fff;
}

.links-block {
  display: flex;
  z-index: 2;
}
@media (max-width: 461.98px) {
  .links-block {
    flex-direction: column;
  }
}
@media (max-width: 461.98px) and (min-width: 75em) {
  .links-block {
    gap: 3.75rem;
  }
}
@media (max-width: 461.98px) and (min-width: 20em) and (max-width: 75em) {
  @supports (gap: clamp( 2.5rem , 2.0454545455rem  +  2.2727272727vw , 3.75rem )) {
    .links-block {
      gap: clamp( 2.5rem , 2.0454545455rem  +  2.2727272727vw , 3.75rem );
    }
  }
  @supports not (gap: clamp( 2.5rem , 2.0454545455rem  +  2.2727272727vw , 3.75rem )) {
    .links-block {
      gap: calc(2.5rem + 1.25 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 461.98px) and (max-width: 20em) {
  .links-block {
    gap: 2.5rem;
  }
}

@media (min-width: 75em) {
  .footer-nav:first-child {
    margin-right: 7.75rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-right: clamp( 3.75rem , 2.2954545455rem  +  7.2727272727vw , 7.75rem )) {
    .footer-nav:first-child {
      margin-right: clamp( 3.75rem , 2.2954545455rem  +  7.2727272727vw , 7.75rem );
    }
  }
  @supports not (margin-right: clamp( 3.75rem , 2.2954545455rem  +  7.2727272727vw , 7.75rem )) {
    .footer-nav:first-child {
      margin-right: calc(3.75rem + 4 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .footer-nav:first-child {
    margin-right: 3.75rem;
  }
}
@media (max-width: 461.98px) {
  .footer-nav:first-child {
    margin-right: 0;
  }
}
.footer-nav:last-child {
  margin-right: 0;
}
@media (min-width: 75em) {
  .footer-nav {
    margin-right: 5.5rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (margin-right: clamp( 2.5rem , 1.4090909091rem  +  5.4545454545vw , 5.5rem )) {
    .footer-nav {
      margin-right: clamp( 2.5rem , 1.4090909091rem  +  5.4545454545vw , 5.5rem );
    }
  }
  @supports not (margin-right: clamp( 2.5rem , 1.4090909091rem  +  5.4545454545vw , 5.5rem )) {
    .footer-nav {
      margin-right: calc(2.5rem + 3 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .footer-nav {
    margin-right: 2.5rem;
  }
}
@media (max-width: 461.98px) {
  .footer-nav {
    margin-right: 0;
  }
}
.footer-nav__link {
  font-size: 17px;
  font-weight: 500;
  line-height: 1.7;
  position: relative;
}
.footer-nav__link::before {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 10px;
  height: 1px;
  width: 100%;
  background-color: #fff;
  transform: translateX(-100%);
  opacity: 0;
  visibility: hidden;
  transition: visibility 0.5s ease, opacity 0.3s ease, transform 0.3s ease;
}
.footer-nav__link:hover::before {
  transform: translateX(0);
  opacity: 1;
  visibility: visible;
}

.footer-credits {
  position: absolute;
  bottom: 0;
  right: 15px;
  z-index: 2;
  color: #969696;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  width: 149px;
  text-wrap: nowrap;
}
@media (max-width: 631.98px) {
  .footer-credits {
    bottom: -50px;
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

.swiper-slide__img {
  width: 100%;
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
  @supports (padding-bottom: clamp( 3.75rem , 1.9318181818rem  +  9.0909090909vw , 8.75rem )) {
    .directions {
      padding-bottom: clamp( 3.75rem , 1.9318181818rem  +  9.0909090909vw , 8.75rem );
    }
  }
  @supports not (padding-bottom: clamp( 3.75rem , 1.9318181818rem  +  9.0909090909vw , 8.75rem )) {
    .directions {
      padding-bottom: calc(3.75rem + 5 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .directions {
    padding-bottom: 3.75rem;
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
  @supports (padding-bottom: clamp( 2.5rem , -0.1590909091rem  +  13.2954545455vw , 9.8125rem )) {
    .featured {
      padding-bottom: clamp( 2.5rem , -0.1590909091rem  +  13.2954545455vw , 9.8125rem );
    }
  }
  @supports not (padding-bottom: clamp( 2.5rem , -0.1590909091rem  +  13.2954545455vw , 9.8125rem )) {
    .featured {
      padding-bottom: calc(2.5rem + 7.3125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .featured {
    padding-bottom: 2.5rem;
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
    height: 710px;
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
  @supports (padding-top: clamp( 2.5rem , 0.0227272727rem  +  12.3863636364vw , 9.3125rem )) {
    .process__container {
      padding-top: clamp( 2.5rem , 0.0227272727rem  +  12.3863636364vw , 9.3125rem );
    }
  }
  @supports not (padding-top: clamp( 2.5rem , 0.0227272727rem  +  12.3863636364vw , 9.3125rem )) {
    .process__container {
      padding-top: calc(2.5rem + 6.8125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .process__container {
    padding-top: 2.5rem;
  }
}
@media (min-width: 75em) {
  .process__container {
    padding-bottom: 10.0625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-bottom: clamp( 2.5rem , -0.25rem  +  13.75vw , 10.0625rem )) {
    .process__container {
      padding-bottom: clamp( 2.5rem , -0.25rem  +  13.75vw , 10.0625rem );
    }
  }
  @supports not (padding-bottom: clamp( 2.5rem , -0.25rem  +  13.75vw , 10.0625rem )) {
    .process__container {
      padding-bottom: calc(2.5rem + 7.5625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .process__container {
    padding-bottom: 2.5rem;
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
  @supports (padding-top: clamp( 2.5rem , -0.2272727273rem  +  13.6363636364vw , 10rem )) {
    .create {
      padding-top: clamp( 2.5rem , -0.2272727273rem  +  13.6363636364vw , 10rem );
    }
  }
  @supports not (padding-top: clamp( 2.5rem , -0.2272727273rem  +  13.6363636364vw , 10rem )) {
    .create {
      padding-top: calc(2.5rem + 7.5 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .create {
    padding-top: 2.5rem;
  }
}
@media (min-width: 75em) {
  .create {
    padding-bottom: 8.75rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-bottom: clamp( 2.5rem , 0.2272727273rem  +  11.3636363636vw , 8.75rem )) {
    .create {
      padding-bottom: clamp( 2.5rem , 0.2272727273rem  +  11.3636363636vw , 8.75rem );
    }
  }
  @supports not (padding-bottom: clamp( 2.5rem , 0.2272727273rem  +  11.3636363636vw , 8.75rem )) {
    .create {
      padding-bottom: calc(2.5rem + 6.25 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .create {
    padding-bottom: 2.5rem;
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
  @supports (padding-bottom: clamp( 2.5rem , -1.4545454545rem  +  19.7727272727vw , 13.375rem )) {
    .values {
      padding-bottom: clamp( 2.5rem , -1.4545454545rem  +  19.7727272727vw , 13.375rem );
    }
  }
  @supports not (padding-bottom: clamp( 2.5rem , -1.4545454545rem  +  19.7727272727vw , 13.375rem )) {
    .values {
      padding-bottom: calc(2.5rem + 10.875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .values {
    padding-bottom: 2.5rem;
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
  @supports (padding-top: clamp( 2.5rem , 0.5rem  +  10vw , 8rem )) {
    .swiper-section {
      padding-top: clamp( 2.5rem , 0.5rem  +  10vw , 8rem );
    }
  }
  @supports not (padding-top: clamp( 2.5rem , 0.5rem  +  10vw , 8rem )) {
    .swiper-section {
      padding-top: calc(2.5rem + 5.5 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .swiper-section {
    padding-top: 2.5rem;
  }
}
@media (min-width: 75em) {
  .swiper-section {
    padding-bottom: 12.25rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-bottom: clamp( 2.5rem , -1.0454545455rem  +  17.7272727273vw , 12.25rem )) {
    .swiper-section {
      padding-bottom: clamp( 2.5rem , -1.0454545455rem  +  17.7272727273vw , 12.25rem );
    }
  }
  @supports not (padding-bottom: clamp( 2.5rem , -1.0454545455rem  +  17.7272727273vw , 12.25rem )) {
    .swiper-section {
      padding-bottom: calc(2.5rem + 9.75 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .swiper-section {
    padding-bottom: 2.5rem;
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
  @supports (padding-top: clamp( 2.5rem , -0.1136363636rem  +  13.0681818182vw , 9.6875rem )) {
    .clients {
      padding-top: clamp( 2.5rem , -0.1136363636rem  +  13.0681818182vw , 9.6875rem );
    }
  }
  @supports not (padding-top: clamp( 2.5rem , -0.1136363636rem  +  13.0681818182vw , 9.6875rem )) {
    .clients {
      padding-top: calc(2.5rem + 7.1875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .clients {
    padding-top: 2.5rem;
  }
}
@media (min-width: 75em) {
  .clients {
    padding-bottom: 9.6875rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-bottom: clamp( 2.5rem , -0.1136363636rem  +  13.0681818182vw , 9.6875rem )) {
    .clients {
      padding-bottom: clamp( 2.5rem , -0.1136363636rem  +  13.0681818182vw , 9.6875rem );
    }
  }
  @supports not (padding-bottom: clamp( 2.5rem , -0.1136363636rem  +  13.0681818182vw , 9.6875rem )) {
    .clients {
      padding-bottom: calc(2.5rem + 7.1875 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .clients {
    padding-bottom: 2.5rem;
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
  @supports (padding-bottom: clamp( 2.5rem , -0.2272727273rem  +  13.6363636364vw , 10rem )) {
    .new {
      padding-bottom: clamp( 2.5rem , -0.2272727273rem  +  13.6363636364vw , 10rem );
    }
  }
  @supports not (padding-bottom: clamp( 2.5rem , -0.2272727273rem  +  13.6363636364vw , 10rem )) {
    .new {
      padding-bottom: calc(2.5rem + 7.5 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .new {
    padding-bottom: 2.5rem;
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
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base/popup.scss","webpack://./src/scss/base.scss","webpack://./src/scss/header.scss","webpack://./src/scss/base/mixins.scss","webpack://./src/scss/footer.scss","webpack://./src/scss/home.scss","webpack://./src/scss/utils/vars.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;EACC,YAAA;EACA,WAAA;EACA,WAAA;ADGD;;ACDA;;;EAGC,sBAAA;ADID;;ACMA;;EAEC,YAAA;EACA,gBAAA;ADHD;;ACKA;EACC,cAAA;EACA,cAAA;EACA,oBDNY;ECOZ,oBDNU;ECQV,0BAAA;EACA,2BAAA;EACA,8BAAA;EACA,mCAAA;EACA,kCAAA;ADHD;;ACKA;;;EAGC,oBDlBY;ECmBZ,kBAAA;EACA,oBAAA;ADFD;;ACIA;EACC,eAAA;EACA,cAAA;EACA,6BAAA;ADDD;;ACGA;EACC,cAAA;EACA,qBAAA;ADAD;;ACEA;EACC,gBAAA;ADCD;;ACCA;EACC,mBAAA;ADED;;ACAA;;;;;;EAMC,oBAAA;EACA,kBAAA;ADGD;;AAHC;EACC,gBAAA;EACA,kBAAA;EACA,yBAAA;AAMF;AACA;EACC,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;AACD;AAAC;EALD;IAME,cAAA;EAGA;AACF;AADC;EACC,cAAA;AAGF;AAAC;EACC,YAAA;AAEF;;AAEA;;;;;CAAA;AAQC;EAEE,gBAAA;EACA,cAAA;EAIC,oBAAA;AALJ;;AEtGA;EACC,WAAA;EACA,oCAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,gCAAA;EACA,oBAAA;EACA,YAAA;AFyGD;;AEvGA;EACC,UAAA;AF0GD;;AExGA;EACC,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,QAAA;EACA,kBAAA;EACA,mCAAA;EACA,kBAAA;EACA,oBAAA;AF2GD;;AEzGA;EACC,YAAA;EACA,mBAAA;EACA,cAAA;EACA,oBAAA;AF4GD;;AE1GA;EACC,mBAAA;EACA,mBAAA;AF6GD;;AE3GA;EACC,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;EACA,cAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AF8GD;;AE5GA;EACC,kBAAA;EACA,mBAAA;EACA,kCAAA;EACA,sBAAA;EACA,aAAA;EACA,WAAA;EACA,gBAAA;EACA,mBAAA;AF+GD;AE9GC;EACC,mBAAA;AFgHF;;AErGC;EACC,YAAA;AFwGF;AErGC;EACC,WAAA;AFuGF;AGzIA;EACC,kBAAA;AH2ID;AG1IC;EACC,kBAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,iBAAA;AH4IF;;AGxIC;EACC,mBAAA;AH2IF;;AI9LA;EACC,gCAAA;EACA,WAAA;AJiMD;AIhMC;EACC,aAAA;EACA,mBAAA;AJkMF;AIjME;EAHD;IAIE,8BAAA;IACA,YAAA;EJoMD;AACF;;AIhMA;EACC,kBAAA;AJmMD;AKnIE;EDjEF;ICkEG,kBAAA;ELsID;AACF;AKnIC;EAEC;IDxEF;MCyEG,4EAhBc;ILqJb;EACF;EKnIA;ID5EF;MC6EG,0DAAA;ILsIC;EACF;AACF;AKpIE;EDjFF;ICkFG,oBAAA;ELuID;AACF;;AIpNC;EAGC,aAAA;EACA,WAAA;AJqNF;AK9JE;ED3DD;IC4DE,sBAAA;ELiKD;AACF;AK9JC;EAEC;IDlED;MCmEE,gFAhBc;ILgLb;EACF;EK9JA;IDtED;MCuEE,2DAAA;ILiKC;EACF;AACF;AK/JE;ED3ED;IC4EE,sBAAA;ELkKD;AACF;AKpLE;ED3DD;IC4DE,yBAAA;ELuLD;AACF;AKpLC;EAEC;IDlED;MCmEE,mFAhBc;ILsMb;EACF;EKpLA;IDtED;MCuEE,8DAAA;ILuLC;EACF;AACF;AKrLE;ED3ED;IC4EE,yBAAA;ELwLD;AACF;AIhQE;EALD;IAME,sBAAA;IACA,mBAAA;EJmQD;AACF;AIhQC;EACC,aAAA;EACA,mBAAA;AJkQF;AKpNE;EDhDD;ICiDE,qBAAA;ELuND;AACF;AKpNC;EAEC;IDvDD;MCwDE,8EAhBc;ILsOb;EACF;EKpNA;ID3DD;MC4DE,2DAAA;ILuNC;EACF;AACF;AKrNE;EDhED;ICiEE,sBAAA;ELwND;AACF;AK1OE;EDhDD;ICiDE,WAAA;EL6OD;AACF;AK1OC;EAEC;IDvDD;MCwDE,oEAhBc;IL4Pb;EACF;EK1OA;ID3DD;MC4DE,kDAAA;IL6OC;EACF;AACF;AK3OE;EDhED;ICiEE,aAAA;EL8OD;AACF;AI1SE;EAND;IAOE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wDG,sEAhBc;IL+kBb;EACF;EK7jBA;IC3DF;MD4DG,iDAAA;ILgkBC;EACF;AACF;AK9jBE;EChEF;IDiEG,cAAA;ELikBD;AACF;AMhoBI;EACI,WAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,yBAAA;EACA,UAAA;EACA,YAAA;ANkoBR;AMjoBQ;EARJ;IASQ,YAAA;ENooBV;AACF;AMloBI;EAGI,YAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;ANkoBR;AKvmBE;ECjCE;IDkCD,oBAAA;EL0mBD;AACF;AKvmBC;EAEC;ICxCE;MDyCD,8EAhBc;ILynBb;EACF;EKvmBA;IC5CE;MD6CD,2DAAA;IL0mBC;EACF;AACF;AKxmBE;ECjDE;IDkDD,qBAAA;EL2mBD;AACF;AK7nBE;ECjCE;IDkCD,sBAAA;ELgoBD;AACF;AK7nBC;EAEC;ICxCE;MDyCD,gFAhBc;IL+oBb;EACF;EK7nBA;IC5CE;MD6CD,8DAAA;ILgoBC;EACF;AACF;AK9nBE;ECjDE;IDkDD,wBAAA;ELioBD;AACF;;AM1qBA;EAEI,kBAAA;EACA,gBAAA;EACA,gBAAA;AN4qBJ;AKzpBE;ECvBF;IDwBG,mBAAA;EL4pBD;AACF;AKzpBC;EAEC;IC9BF;MD+BG,2EAhBc;IL2qBb;EACF;EKzpBA;IClCF;MDmCG,uDAAA;IL4pBC;EACF;AACF;AK1pBE;ECvCF;IDwCG,kBAAA;EL6pBD;AACF;;AK/qBE;ECjBF;IDkBG,wBAAA;ELmrBD;AACF;AKhrBC;EAEC;ICxBF;MDyBG,+EAhBc;ILksBb;EACF;EKhrBA;IC5BF;MD6BG,2DAAA;ILmrBC;EACF;AACF;AKjrBE;ECjCF;IDkCG,qBAAA;ELorBD;AACF;AMltBI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;ANotBR;;AMjtBA;EACI,aAAA;EACA,SAAA;ANotBJ;;AMltBA;EACI,aAAA;EACA,sBAAA;ANqtBJ;AKrtBE;ECFF;IDGG,oBAAA;ELwtBD;AACF;AKrtBC;EAEC;ICTF;MDUG,oFAhBc;ILuuBb;EACF;EKrtBA;ICbF;MDcG,wEAAA;ILwtBC;EACF;AACF;AKttB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AAA;EACA,8BAAA;EACA,WAAA;APimCJ;AKpiCE;EEpEF;IFqEG,gBAAA;ELuiCD;AACF;AKpiCC;EAEC;IE3EF;MF4EG,yEAhBc;ILsjCb;EACF;EKpiCA;IE/EF;MFgFG,mDAAA;ILuiCC;EACF;AACF;AKriCE;EEpFF;IFqFG,gBAAA;ELwiCD;AACF;AK1jCE;EEpEF;IFqEG,aAAA;EL6jCD;AACF;AK1jCC;EAEC;IE3EF;MF4EG,yEAhBc;IL4kCb;EACF;EK1jCA;IE/EF;MFgFG,sDAAA;IL6jCC;EACF;AACF;AK3jCE;EEpFF;IFqFG,eAAA;EL8jCD;AACF;AKhlCE;EEpEF;IFqEG,WAAA;ELmlCD;AACF;AKhlCC;EAEC;IE3EF;MF4EG,oEAhBc;ILkmCb;EACF;EKhlCA;IE/EF;MFgFG,oDAAA;ILmlCC;EACF;AACF;AKjlCE;EEpFF;IFqFG,eAAA;ELolCD;AACF;AOjqCQ;EACI,WAAA;EACA,WAAA;EAEA,sBAAA;EACA,kBAAA;EACA,QAAA;APkqCZ;AK7mCE;EE3DM;IF4DL,cAAA;ELgnCD;AACF;AK7mCC;EAEC;IElEM;MFmEL,uEAhBc;IL+nCb;EACF;EK7mCA;IEtEM;MFuEL,oDAAA;ILgnCC;EACF;AACF;AK9mCE;EE3EM;IF4EL,eAAA;ELinCD;AACF;AKnoCE;EE3DM;IF4DL,cAAA;ELsoCD;AACF;AKnoCC;EAEC;IElEM;MFmEL,0DAhBc;ILqpCb;EACF;EKnoCA;IEtEM;MFuEL,qDAAA;ILsoCC;EACF;AACF;AKpoCE;EE3EM;IF4EL,eAAA;ELuoCD;AACF;AKzpCE;EEjDE;IFkDD,mBAAA;EL4pCD;AACF;AKzpCC;EAEC;IExDE;MFyDD,2EAhBc;IL2qCb;EACF;EKzpCA;IE5DE;MF6DD,uDAAA;IL4pCC;EACF;AACF;AK1pCE;EEjEE;IFkED,kBAAA;EL6pCD;AACF;;AO1tCA;EACQ,kBAAA;EAIA,sBAAA;AP0tCR;AKprCE;EE3CF;IF4CG,eAAA;ELurCD;AACF;AKprCC;EAEC;IElDF;MFmDG,yEAhBc;ILssCb;EACF;EKprCA;IEtDF;MFuDG,mDAAA;ILurCC;EACF;AACF;AKrrCE;EE3DF;IF4DG,aAAA;ELwrCD;AACF;AK1sCE;EE3CF;IF4CG,aAAA;EL6sCD;AACF;AK1sCC;EAEC;IElDF;MFmDG,wEAhBc;IL4tCb;EACF;EK1sCA;IEtDF;MFuDG,oDAAA;IL6sCC;EACF;AACF;AK3sCE;EE3DF;IF4DG,cAAA;EL8sCD;AACF;AKhuCE;EE3CF;IF4CG,eAAA;ELmuCD;AACF;AKhuCC;EAEC;IElDF;MFmDG,0EAhBc;ILkvCb;EACF;EKhuCA;IEtDF;MFuDG,mDAAA;ILmuCC;EACF;AACF;AKjuCE;EE3DF;IF4DG,eAAA;ELouCD;AACF;AO3xCI;EAEI,gBAAA;EACA,gBAAA;EACA,WAAA;EACA,2CAAA;AP4xCR;AK5vCE;EErCE;IFsCD,mBAAA;EL+vCD;AACF;AK5vCC;EAEC;IE5CE;MF6CD,2EAhBc;IL8wCb;EACF;EK5vCA;IEhDE;MFiDD,uDAAA;IL+vCC;EACF;AACF;AK7vCE;EErDE;IFsDD,kBAAA;ELgwCD;AACF;AOjzCQ;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,sBAAA;APmzCZ;AOhzCI;EACI,WAAA;EACA,WAAA;EACA,WAAA;APkzCR;;AO9yCA;EACI,kBAAA;EAKA,sBAAA;EACA,qBAAA;EACA,kBAAA;EAEA,gBAAA;EACA,qDAAA;AP4yCJ;AKzyCE;EEdF;IFeG,cAAA;EL4yCD;AACF;AKzyCC;EAEC;IErBF;MFsBG,qEAhBc;IL2zCb;EACF;EKzyCA;IEzBF;MF0BG,gDAAA;IL4yCC;EACF;AACF;AK1yCE;EE9BF;IF+BG,UAAA;EL6yCD;AACF;AK/zCE;EEdF;IFeG,gBAAA;ELk0CD;AACF;AK/zCC;EAEC;IErBF;MFsBG,0EAhBc;ILi1Cb;EACF;EK/zCA;IEzBF;MF0BG,mDAAA;ILk0CC;EACF;AACF;AKh0CE;EE9BF;IF+BG,cAAA;ELm0CD;AACF;AKr1CE;EEdF;IFeG,eAAA;ELw1CD;AACF;AKr1CC;EAEC;IErBF;MFsBG,yEAhBc;ILu2Cb;EACF;EKr1CA;IEzBF;MF0BG,sDAAA;ILw1CC;EACF;AACF;AKt1CE;EE9BF;IF+BG,gBAAA;ELy1CD;AACF;AK32CE;EEdF;IFeG,gBAAA;EL82CD;AACF;AK32CC;EAEC;IErBF;MFsBG,0EAhBc;IL63Cb;EACF;EK32CA;IEzBF;MF0BG,uDAAA;IL82CC;EACF;AACF;AK52CE;EE9BF;IF+BG,iBAAA;EL+2CD;AACF;AKj4CE;EEdF;IFeG,oBAAA;ELo4CD;AACF;AKj4CC;EAEC;IErBF;MFsBG,4EAhBc;ILm5Cb;EACF;EKj4CA;IEzBF;MF0BG,wDAAA;ILo4CC;EACF;AACF;AKl4CE;EE9BF;IF+BG,kBAAA;ELq4CD;AACF;AOx5CI;EACI,qBAAA;EACA,iCAAA;AP05CR;;AOr5CI;EAEK,WAAA;APu5CT;AK/5CE;EEME;IFLD,gBAAA;ELk6CD;AACF;AK/5CC;EAEC;IEDE;MFED,0EAhBc;ILi7Cb;EACF;EK/5CA;IELE;MFMD,oDAAA;ILk6CC;EACF;AACF;AKh6CE;EEVE;IFWD,gBAAA;ELm6CD;AACF;;AOz6CA;EACI,kBAAA;EACA,UAAA;AP46CJ;AK17CE;EEYF;IFXG,eAAA;EL67CD;AACF;AK17CC;EAEC;IEKF;MFJG,wEAbe;ILy8Cd;EACF;EK17CA;IECF;MFAG,kDAAA;IL67CC;EACF;AACF;AK37CE;EEJF;IFKG,WAAA;EL87CD;AACF;AOh8CI;EAJJ;IAKQ,aAAA;EPm8CN;AACF;;AOj8CA;EACI,kBAAA;EACA,UAAA;APo8CJ;AK19CE;EEoBF;IFnBG,gBAAA;EL69CD;AACF;AK19CC;EAEC;IEaF;MFZG,yEAbe;ILy+Cd;EACF;EK19CA;IESF;MFRG,mDAAA;IL69CC;EACF;AACF;AK39CE;EEIF;IFHG,YAAA;EL89CD;AACF;AOx9CI;EAJJ;IAKQ,aAAA;EP29CN;AACF;;AKr/CE;EEgCF;IF/BG,kBAAA;ELy/CD;AACF;AKt/CC;EAEC;IEyBF;MFxBG,2EAhBc;ILwgDb;EACF;EKt/CA;IEqBF;MFpBG,uDAAA;ILy/CC;EACF;AACF;AKv/CE;EEgBF;IFfG,mBAAA;EL0/CD;AACF;AOz+CI;EACI,aAAA;EACA,cAAA;AP2+CR;;AOx+CA;EAGI,cAAA;EACA,kBAAA;APy+CJ;AKrhDE;EEwCF;IFvCG,iBAAA;ELwhDD;AACF;AKrhDC;EAEC;IEiCF;MFhCG,6EAhBc;ILuiDb;EACF;EKrhDA;IE6BF;MF5BG,uDAAA;ILwhDC;EACF;AACF;AKthDE;EEwBF;IFvBG,gBAAA;ELyhDD;AACF;AK3iDE;EEwCF;IFvCG,wBAAA;EL8iDD;AACF;AK3iDC;EAEC;IEiCF;MFhCG,+EAhBc;IL6jDb;EACF;EK3iDA;IE6BF;MF5BG,2DAAA;IL8iDC;EACF;AACF;AK5iDE;EEwBF;IFvBG,qBAAA;EL+iDD;AACF;AOphDI;EAEI,gBAAA;APqhDR;AKpkDE;EE6CE;IF5CD,wBAAA;ELukDD;AACF;AKpkDC;EAEC;IEsCE;MFrCD,kFAhBc;ILslDb;EACF;EKpkDA;IEkCE;MFjCD,6DAAA;ILukDC;EACF;AACF;AKrkDE;EE6BE;IF5BD,wBAAA;ELwkDD;AACF;AOxiDI;EAEI,gBAAA;EACA,gBAAA;APyiDR;AK9lDE;EEkDE;IFjDD,mBAAA;ELimDD;AACF;AK9lDC;EAEC;IE2CE;MF1CD,0EAhBc;ILgnDb;EACF;EK9lDA;IEuCE;MFtCD,sDAAA;ILimDC;EACF;AACF;AK/lDE;EEkCE;IFjCD,iBAAA;ELkmDD;AACF;;AO5jDA;EACI,aAAA;EACA,uBAAA;AP+jDJ;AKznDE;EEwDF;IFvDG,oBAAA;EL4nDD;AACF;AKznDC;EAEC;IEiDF;MFhDG,6EAhBc;IL2oDb;EACF;EKznDA;IE6CF;MF5CG,0DAAA;IL4nDC;EACF;AACF;AK1nDE;EEwCF;IFvCG,sBAAA;EL6nDD;AACF;AK/oDE;EEwDF;IFvDG,aAAA;ELkpDD;AACF;AK/oDC;EAEC;IEiDF;MFhDG,oEAhBc;ILiqDb;EACF;EK/oDA;IE6CF;MF5CG,gDAAA;ILkpDC;EACF;AACF;AKhpDE;EEwCF;IFvCG,WAAA;ELmpDD;AACF;AOxmDI;EALJ;IAMQ,sBAAA;EP2mDN;AACF;AK1qDE;EEwDF;IFvDG,oBAAA;EL6qDD;AACF;AK1qDC;EAEC;IEiDF;MFhDG,4EAhBc;IL4rDb;EACF;EK1qDA;IE6CF;MF5CG,yDAAA;IL6qDC;EACF;AACF;AK3qDE;EEwCF;IFvCG,qBAAA;EL8qDD;AACF;AO9nDI;EAGI,kBAAA;AP8nDR;AKnsDE;EEkEE;IFjED,iBAAA;ELssDD;AACF;AKnsDC;EAEC;IE2DE;MF1DD,0EAhBc;ILqtDb;EACF;EKnsDA;IEuDE;MFtDD,qDAAA;ILssDC;EACF;AACF;AKpsDE;EEkDE;IFjDD,cAAA;ELusDD;AACF;AKztDE;EEkEE;IFjED,qBAAA;EL4tDD;AACF;AKztDC;EAEC;IE2DE;MF1DD,6EAhBc;IL2uDb;EACF;EKztDA;IEuDE;MFtDD,yDAAA;IL4tDC;EACF;AACF;AK1tDE;EEkDE;IFjDD,oBAAA;EL6tDD;AACF;AOvqDI;EAEI,gBAAA;APwqDR;AKlvDE;EEwEE;IFvED,kBAAA;ELqvDD;AACF;AKlvDC;EAEC;IEiEE;MFhED,2EAhBc;ILowDb;EACF;EKlvDA;IE6DE;MF5DD,wDAAA;ILqvDC;EACF;AACF;AKnvDE;EEwDE;IFvDD,mBAAA;ELsvDD;AACF;AO5rDQ;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EAEA,gCAAA;AP6rDZ;AKhxDE;EE4EM;IF3EL,YAAA;ELmxDD;AACF;AKhxDC;EAEC;IEqEM;MFpEL,uEAhBc;ILkyDb;EACF;EKhxDA;IEiEM;MFhEL,sDAAA;ILmxDC;EACF;AACF;AKjxDE;EE4DM;IF3DL,gBAAA;ELoxDD;AACF;AKtyDE;EEuFE;IFtFD,iBAAA;ELyyDD;AACF;AKtyDC;EAEC;IEgFE;MF/ED,6EAhBc;ILwzDb;EACF;EKtyDA;IE4EE;MF3ED,uDAAA;ILyyDC;EACF;AACF;AKvyDE;EEuEE;IFtED,gBAAA;EL0yDD;AACF;AOjuDI;EAGI,gBAAA;APiuDR;AK/zDE;EE2FE;IF1FD,oBAAA;ELk0DD;AACF;AK/zDC;EAEC;IEoFE;MFnFD,8EAhBc;ILi1Db;EACF;EK/zDA;IEgFE;MF/ED,yDAAA;ILk0DC;EACF;AACF;AKh0DE;EE2EE;IF1ED,oBAAA;ELm0DD;AACF;AKr1DE;EE2FE;I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ILuzEb;EACF;EKryEA;IEiRE;MFhRD,wDAAA;ILwyEC;EACF;AACF;AKtyEE;EE4QE;IF3QD,iBAAA;ELyyED;AACF;AK3zEE;EE4RE;IF3RD,gBAAA;EL8zED;AACF;AK3zEC;EAEC;IEqRE;MFpRD,2EAhBc;IL60Eb;EACF;EK3zEA;IEiRE;MFhRD,uDAAA;IL8zEC;EACF;AACF;AK5zEE;EE4QE;IF3QD,iBAAA;EL+zED;AACF;AOhjEI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;APkjER;AKt1EE;EEiSE;IFhSD,oBAAA;ELy1ED;AACF;AKt1EC;EAEC;IE0RE;MFzRD,8EAhBc;ILw2Eb;EACF;EKt1EA;IEsRE;MFrRD,2DAAA;ILy1EC;EACF;AACF;AKv1EE;EEiRE;IFhRD,qBAAA;EL01ED;AACF;AK52EE;EEiSE;IFhSD,qBAAA;EL+2ED;AACF;AK52EC;EAEC;IE0RE;MFzRD,6EAhBc;IL83Eb;EACF;EK52EA;IEsRE;MFrRD,0DAAA;IL+2EC;EACF;AACF;AK72EE;EEiRE;IFhRD,sBAAA;ELg3ED;AACF;AO3lEQ;EANJ;IAOQ,eAAA;EP8lEV;AACF;AO3lEI;EACI,eAAA;EACA,gBAAA;AP6lER;AK34EE;EEiTE;IFhTD,cAAA;EL84ED;AACF;AK34EC;EAEC;IE0SE;MFzSD,wEAhBc;IL65Eb;EACF;EK34EA;IEsSE;MFrSD,gDAAA;IL84EC;EACF;AACF;AK54EE;EEiSE;IFhSD,cAAA;EL+4ED;AACF;AKj6EE;EEiTE;IFhTD,gBAAA;ELo6ED;AACF;AKj6EC;EAEC;IE0SE;MFzSD,2EAhBc;ILm7Eb;EACF;EKj6EA;IEsSE;MFrSD,uDAAA;ILo6EC;EACF;AACF;AKl6EE;EEiSE;IFhSD,iBAAA;ELq6ED;AACF;AOjoEI;EACI,mBAAA;EACA,kBAAA;APmoER;AOjoEQ;EAJJ;IAKQ,eAAA;IACA,cAAA;EPooEV;AACF;AOjoEI;EACI,kBAAA;APmoER;AOloEQ;EAFJ;IAGQ,aAAA;EPqoEV;AACF;AOloEI;EACI,WAAA;EACA,UAAA;EACA,UAAA;EACA,kBAAA;EACA,8FAAA;APooER;AOloEQ;EAPJ;IAQQ,WAAA;IACA,UAAA;EPqoEV;AACF;AOpoEQ;EAXJ;IAYQ,UAAA;IACA,SAAA;EPuoEV;AACF;;AOpoEA;EACI,aAAA;EACA,eAAA;EACA,2BAAA;EACA,kBAAA;APuoEJ;AKn+EE;EEwVF;IFvVG,mBAAA;ELs+ED;AACF;AKn+EC;EAEC;IEiVF;MFhVG,6EAhBc;ILq/Eb;EACF;EKn+EA;IE6UF;MF5UG,8DAAA;ILs+EC;EACF;AACF;AKp+EE;EEwUF;IFvUG,wBAAA;ELu+ED;AACF;AKz/EE;EEwVF;IFvVG,qBAAA;EL4/ED;AACF;AKz/EC;EAEC;IEiVF;MFhVG,8EAhBc;IL2gFb;EACF;EKz/EA;IE6UF;MF5UG,sDAAA;IL4/EC;EACF;AACF;AK1/EE;EEwUF;IFvUG,qBAAA;EL6/ED;AACF;AK/gFE;EEwVF;IFvVG,sBAAA;ELkhFD;AACF;AK/gFC;EAEC;IEiVF;MFhVG,+EAhBc;ILiiFb;EACF;EK/gFA;IE6UF;MF5UG,4DAAA;ILkhFC;EACF;AACF;AKhhFE;EEwUF;IFvUG,uBAAA;ELmhFD;AACF;AOrsEI;EACI,mBAAA;EAEA,gBAAA;EACA,gBAAA;APssER;AK1iFE;EEgWE;IF/VD,kBAAA;EL6iFD;AACF;AK1iFC;EAEC;IEyVE;MFxVD,2EAhBc;IL4jFb;EACF;EK1iFA;IEqVE;MFpVD,wDAAA;IL6iFC;EACF;AACF;AK3iFE;EEgVE;IF/UD,mBAAA;EL8iFD;AACF;AKhkFE;EEgWE;IF/VD,iBAAA;ELmkFD;AACF;AKhkFC;EAEC;IEyVE;MFxVD,6EAhBc;ILklFb;EACF;EKhkFA;IEqVE;MFpVD,uDAAA;ILmkFC;EACF;AACF;AKjkFE;EEgVE;IF/UD,gBAAA;ELokFD;AACF;AOhvEQ;EACI,WAAA;EACA,kBAAA;EAEA,WAAA;EACA,gCAAA;EACA,WAAA;EACA,SAAA;APivEZ;AK9lFE;EEsWM;IFrWL,eAAA;ELimFD;AACF;AK9lFC;EAEC;IE+VM;MF9VL,yEAhBc;ILgnFb;EACF;EK9lFA;IE2VM;MF1VL,sDAAA;ILimFC;EACF;AACF;AK/lFE;EEsVM;IFrVL,gBAAA;ELkmFD;AACF;AKpnFE;EEgWE;IF/VD,mBAAA;ELunFD;AACF;AKpnFC;EAEC;IEyVE;MFxVD,6EAhBc;ILsoFb;EACF;EKpnFA;IEqVE;MFpVD,8DAAA;ILunFC;EACF;AACF;AKrnFE;EEgVE;IF/UD,wBAAA;ELwnFD;AACF;AO3xEQ;EAGI;IAEI,UAAA;EP0xEd;AACF;AK/oFE;EEkXU;IFjXT,aAAA;ELkpFD;AACF;AK/oFC;EAEC;IE2WU;MF1WT,sEAhBc;ILiqFb;EACF;EK/oFA;IEuWU;MFtWT,mDAAA;ILkpFC;EACF;AACF;AKhpFE;EEkWU;IFjWT,cAAA;ELmpFD;AACF;;AOzyEA;EACQ,gCAAA;EACA,aAAA;AP4yER;AO3yEQ;EAHR;IAIY,aAAA;EP8yEV;AACF;AO7yEE;EACU,iBAAA;EACA,UAAA;EACA,gBAAA;EACA,kBAAA;AP+yEZ;AKrrFE;EEkYA;IFjYC,sBAAA;ELwrFD;AACF;AKrrFC;EAEC;IE2XA;MF1XC,8EAhBc;ILusFb;EACF;EKrrFA;IEuXA;MFtXC,yDAAA;ILwrFC;EACF;AACF;AKtrFE;EEkXA;IFjXC,mBAAA;ELyrFD;AACF;AK3sFE;EEkYA;IFjYC,0BAAA;EL8sFD;AACF;AK3sFC;EAEC;IE2XA;MF1XC,mEAhBc;IL6tFb;EACF;EK3sFA;IEuXA;MFtXC,4DAAA;IL8sFC;EACF;AACF;AK5sFE;EEkXA;IFjXC,sBAAA;EL+sFD;AACF;AOx1EY;EACA,WAAA;EAGA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,kBAAA;EACA,yBAAA;APw1EZ;AKzuFE;EEyYU;IFxYT,iBAAA;EL4uFD;AACF;AKzuFC;EAEC;IEkYU;MFjYT,0EAhBc;IL2vFb;EACF;EKzuFA;IE8XU;MF7XT,qDAAA;IL4uFC;EACF;AACF;AK1uFE;EEyXU;IFxXT,cAAA;EL6uFD;AACF;AK/vFE;EEyYU;IFxYT,kBAAA;ELkwFD;AACF;AK/vFC;EAEC;IEkYU;MFjYT,2EAhBc;ILixFb;EACF;EK/vFA;IE8XU;MF7XT,sDAAA;ILkwFC;EACF;AACF;AKhwFE;EEyXU;IFxXT,eAAA;ELmwFD;AACF;AOn4EY;EATA;IAUI,aAAA;EPs4Ed;AACF;AOl4EE;EACU,WAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;APo4EZ;AKhyFE;EEwZA;IFvZC,mBAAA;ELmyFD;AACF;AKhyFC;EAEC;IEiZA;MFhZC,4EAhBc;ILkzFb;EACF;EKhyFA;IE6YA;MF5YC,4DAAA;ILmyFC;EACF;AACF;AKjyFE;EEwYA;IFvYC,uBAAA;ELoyFD;AACF;AKtzFE;EEwZA;IFvZC,qBAAA;ELyzFD;AACF;AKtzFC;EAEC;IEiZA;MFhZC,8EAhBc;ILw0Fb;EACF;EKtzFA;IE6YA;MF5YC,sDAAA;ILyzFC;EACF;AACF;AKvzFE;EEwYA;IFvYC,qBAAA;EL0zFD;AACF;AOz6EY;EAXV;IAYc,YAAA;EP46Ed;AACF;AOz6EE;EACU,SAAA;EACA,aAAA;EACA,sBAAA;AP26EZ;AKt1FE;EEwaA;IFvaC,oBAAA;ELy1FD;AACF;AKt1FC;EAEC;IEiaA;MFhaC,4EAhBc;ILw2Fb;EACF;EKt1FA;IE6ZA;MF5ZC,uDAAA;ILy1FC;EACF;AACF;AKv1FE;EEwZA;IFvZC,oBAAA;EL01FD;AACF;AK52FE;EEwaA;IFvaC,qBAAA;EL+2FD;AACF;AK52FC;EAEC;IEiaA;MFhaC,uFAhBc;IL83Fb;EACF;EK52FA;IE6ZA;MF5ZC,yEAAA;IL+2FC;EACF;AACF;AK72FE;EEwZA;IFvZC,6BAAA;ELg3FD;AACF;AOp9EY;EANV;IAOc,mBAAA;EPu9Ed;AACF;AOp9EE;EACU,kBAAA;APs9EZ;AOn9EgB;EACI,WAAA;EACA,2BAAA;APq9EpB;AOp9EoB;EACI,UAAA;EACA,0BAAA;APs9ExB;AOn9EgB;EACI,UAAA;APq9EpB;AOh9EE;EACU,cAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,gDAAA;EAiBA,wBAAA;APk8EZ;AOl9EY;EACI,WAAA;EACA,WAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,4BAAA;EACA,UAAA;EACA,kDAAA;APo9EhB;AOn9EgB;EAXJ;IAYQ,aAAA;EPs9ElB;AACF;AOh9EE;EACU,UAAA;EACA,eAAA;EACA,gBAAA;EACA,6BAAA;APk9EZ;;AO78EA;EACI,aAAA;APg9EJ;AO/8EI;EAFJ;IAGQ,sBAAA;IACA,uBAAA;EPk9EN;AACF;;AK97FE;EE+eF;IF9eG,iBAAA;ELk8FD;AACF;AK/7FC;EAEC;IEweF;MFveG,6EAhBc;ILi9Fb;EACF;EK/7FA;IEoeF;MFneG,sDAAA;ILk8FC;EACF;AACF;AKh8FE;EE+dF;IF9dG,gBAAA;ELm8FD;AACF;AKr9FE;EE+eF;IF9eG,qBAAA;ELw9FD;AACF;AKr9FC;EAEC;IEweF;MFveG,8EAhBc;ILu+Fb;EACF;EKr9FA;IEoeF;MFneG,sDAAA;ILw9FC;EACF;AACF;AKt9FE;EE+dF;IF9dG,qBAAA;ELy9FD;AACF;AOt/EE;EACU,WAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;APw/EZ;AKj/FE;EEqfA;IFpfC,wBAAA;ELo/FD;AACF;AKj/FC;EAEC;IE8eA;MF7eC,kFAhBc;ILmgGb;EACF;EKj/FA;IE0eA;MFzeC,4DAAA;ILo/FC;EACF;AACF;AKl/FE;EEqeA;IFpeC,wBAAA;ELq/FD;AACF;;AKvgGE;EEmgBF;IFlgBG,kBAAA;EL2gGD;AACF;AKxgGC;EAEC;IE4fF;MF3fG,2EAhBc;IL0hGb;EACF;EKxgGA;IEwfF;MFvfG,sDAAA;IL2gGC;EACF;AACF;AKzgGE;EEmfF;IFlfG,mBAAA;EL4gGD;AACF;AK9hGE;EEmgBF;IFlgBG,uBAAA;ELiiGD;AACF;AK9hGC;EAEC;IE4fF;MF3fG,+EAhBc;ILgjGb;EACF;EK9hGA;IEwfF;MFvfG,0DAAA;ILiiGC;EACF;AACF;AK/hGE;EEmfF;IFlfG,sBAAA;ELkiGD;AACF;AO3iFI;EACI,aAAA;AP6iFR;AO5iFQ;EAFJ;IAGQ,sBAAA;EP+iFV;AACF;;AO3iFI;EADJ;IAEQ,cAAA;EP+iFN;AACF;AO9iFI;EACI,uBAAA;EACA,4BAAA;APgjFR;AO/iFQ;EACI,oBAAA;APijFZ;AO7iFI;EACI,mBAAA;AP+iFR;AK5kGE;EE4hBE;IF3hBD,gBAAA;EL+kGD;AACF;AK5kGC;EAEC;IEqhBE;MFphBD,4EAhBc;IL8lGb;EACF;EK5kGA;IEihBE;MFhhBD,wDAAA;IL+kGC;EACF;AACF;AK7kGE;EE4gBE;IF3gBD,iBAAA;ELglGD;AACF;AKlmGE;EE4hBE;IF3hBD,iBAAA;ELqmGD;AACF;AKlmGC;EAEC;IEqhBE;MFphBD,4EAhBc;ILonGb;EACF;EKlmGA;IEihBE;MFhhBD,uDAAA;ILqmGC;EACF;AACF;AKnmGE;EE4gBE;IF3gBD,iBAAA;ELsmGD;AACF;AKxnGE;EEkiBE;IFjiBD,iBAAA;EL2nGD;AACF;AKxnGC;EAEC;IE2hBE;MF1hBD,2DAhBc;IL0oGb;EACF;EKxnGA;IEuhBE;MFthBD,sDAAA;IL2nGC;EACF;AACF;AKznGE;EEkhBE;IFjhBD,eAAA;EL4nGD;AACF;AK9oGE;EEsiBE;IFriBD,sBAAA;ELipGD;AACF;AK9oGC;EAEC;IE+hBE;MF9hBD,iFAhBc;ILgqGb;EACF;EK9oGA;IE2hBE;MF1hBD,0DAAA;ILipGC;EACF;AACF;AK/oGE;EEshBE;IFrhBD,sBAAA;ELkpGD;AACF;AKpqGE;EEsiBE;IFriBD,sBAAA;ELuqGD;AACF;AKpqGC;EAEC;IE+hBE;MF9hBD,gFAhBc;ILsrGb;EACF;EKpqGA;IE2hBE;MF1hBD,6DAAA;ILuqGC;EACF;AACF;AKrqGE;EEshBE;IFrhBD,uBAAA;ELwqGD;AACF;AK1rGE;EEsiBE;IFriBD,gBAAA;EL6rGD;AACF;AK1rGC;EAEC;IE+hBE;MF9hBD,2EAhBc;IL4sGb;EACF;EK1rGA;IE2hBE;MF1hBD,sDAAA;IL6rGC;EACF;AACF;AK3rGE;EEshBE;IFrhBD,gBAAA;EL8rGD;AACF;AKhtGE;EEsiBE;IFriBD,eAAA;ELmtGD;AACF;AKhtGC;EAEC;IE+hBE;MF9hBD,oEAhBc;ILkuGb;EACF;EKhtGA;IE2hBE;MF1hBD,gDAAA;ILmtGC;EACF;AACF;AKjtGE;EEshBE;IFrhBD,YAAA;ELotGD;AACF;AKtuGE;EE6iBE;IF5iBD,gBAAA;ELyuGD;AACF;AKtuGC;EAEC;IEsiBE;MFriBD,2EAhBc;ILwvGb;EACF;EKtuGA;IEkiBE;MFjiBD,sDAAA;ILyuGC;EACF;AACF;AKvuGE;EE6hBE;IF5hBD,gBAAA;EL0uGD;AACF;AK5vGE;EE6iBE;IF5iBD,iBAAA;EL+vGD;AACF;AK5vGC;EAEC;IEsiBE;MFriBD,4EAhBc;IL8wGb;EACF;EK5vGA;IEkiBE;MFjiBD,uDAAA;IL+vGC;EACF;AACF;AK7vGE;EE6hBE;IF5hBD,iBAAA;ELgwGD;AACF;;AKlxGE;EEkjBF;IFjjBG,sBAAA;ELsxGD;AACF;AKnxGC;EAEC;IE2iBF;MF1iBG,6EAhBc;ILqyGb;EACF;EKnxGA;IEuiBF;MFtiBG,yDAAA;ILsxGC;EACF;AACF;AKpxGE;EEkiBF;IFjiBG,mBAAA;ELuxGD;AACF;AOrvFI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,YAAA;APuvFR;AK/yGE;EEojBE;IFnjBD,wBAAA;ELkzGD;AACF;AK/yGC;EAEC;IE6iBE;MF5iBD,gFAhBc;ILi0Gb;EACF;EK/yGA;IEyiBE;MFxiBD,4DAAA;ILkzGC;EACF;AACF;AKhzGE;EEoiBE;IFniBD,sBAAA;ELmzGD;AACF;AOzwFI;EAII,eAAA;EACA,gBAAA;EACA,gBAAA;APwwFR;AK10GE;EE4jBE;IF3jBD,sBAAA;EL60GD;AACF;AK10GC;EAEC;IEqjBE;MFpjBD,+EAhBc;IL41Gb;EACF;EK10GA;IEijBE;MFhjBD,0DAAA;IL60GC;EACF;AACF;AK30GE;EE4iBE;IF3iBD,qBAAA;EL80GD;AACF;AKh2GE;EE4jBE;IF3jBD,wBAAA;ELm2GD;AACF;AKh2GC;EAEC;IEqjBE;MFpjBD,kFAhBc;ILk3Gb;EACF;EKh2GA;IEijBE;MFhjBD,6DAAA;ILm2GC;EACF;AACF;AKj2GE;EE4iBE;IF3iBD,wBAAA;ELo2GD;AACF;AKt3GE;EE4jBE;IF3jBD,gBAAA;ELy3GD;AACF;AKt3GC;EAEC;IEqjBE;MFpjBD,0EAhBc;ILw4Gb;EACF;EKt3GA;IEijBE;MFhjBD,mDAAA;ILy3GC;EACF;AACF;AKv3GE;EE4iBE;IF3iBD,cAAA;EL03GD;AACF;AOx0FQ;EARJ;IASQ,iBAAA;IACA,kBAAA;EP20FV;AACF;AOz0FQ;EAbJ;IAeQ,cAAA;IACA,eAAA;EP20FV;AACF;AKx5GE;EE4jBE;IF3jBD,oBAAA;EL25GD;AACF;AKx5GC;EAEC;IEqjBE;MFpjBD,4EAhBc;IL06Gb;EACF;EKx5GA;IEijBE;MFhjBD,yDAAA;IL25GC;EACF;AACF;AKz5GE;EE4iBE;IF3iBD,qBAAA;EL45GD;AACF;AK96GE;EEglBE;IF/kBD,qBAAA;ELi7GD;AACF;AK96GC;EAEC;IEykBE;MFxkBD,8EAhBc;ILg8Gb;EACF;EK96GA;IEqkBE;MFpkBD,yDAAA;ILi7GC;EACF;AACF;AK/6GE;EEgkBE;IF/jBD,oBAAA;ELk7GD;AACF;AOj3FQ;EAHJ;IAIQ,iBAAA;EPo3FV;AACF;AKz8GE;EEglBE;IF/kBD,mBAAA;EL48GD;AACF;AKz8GC;EAEC;IEykBE;MFxkBD,2EAhBc;IL29Gb;EACF;EKz8GA;IEqkBE;MFpkBD,wDAAA;IL48GC;EACF;AACF;AK18GE;EEgkBE;IF/jBD,oBAAA;EL68GD;AACF;;AK/9GE;EE8lBF;IF7lBG,yBAAA;ELm+GD;AACF;AKh+GC;EAEC;IEulBF;MFtlBG,kFAhBc;ILk/Gb;EACF;EKh+GA;IEmlBF;MFllBG,4DAAA;ILm+GC;EACF;AACF;AKj+GE;EE8kBF;IF7kBG,sBAAA;ELo+GD;AACF;AOn5FI;EAEI,kBAAA;EACA,gBAAA;EACA,gBAAA;APo5FR;AK3/GE;EEmmBE;IFlmBD,kBAAA;EL8/GD;AACF;AK3/GC;EAEC;IE4lBE;MF3lBD,4EAhBc;IL6gHb;EACF;EK3/GA;IEwlBE;MFvlBD,0DAAA;IL8/GC;EACF;AACF;AK5/GE;EEmlBE;IFllBD,oBAAA;EL+/GD;AACF;AKjhHE;EEmmBE;IFlmBD,uBAAA;ELohHD;AACF;AKjhHC;EAEC;IE4lBE;MF3lBD,8EAhBc;ILmiHb;EACF;EKjhHA;IEwlBE;MFvlBD,0DAAA;ILohHC;EACF;AACF;AKlhHE;EEmlBE;IFllBD,qBAAA;ELqhHD;AACF;AO57FI;EACI,aAAA;EACA,eAAA;EACA,uBAAA;AP87FR;AK5iHE;EE2mBE;IF1mBD,cAAA;EL+iHD;AACF;AK5iHC;EAEC;IEomBE;MFnmBD,qEAhBc;IL8jHb;EACF;EK5iHA;IEgmBE;MF/lBD,iDAAA;IL+iHC;EACF;AACF;AK7iHE;EE2lBE;IF1lBD,WAAA;ELgjHD;AACF;AOj9FQ;EANJ;IAOQ,2BAAA;EPo9FV;AACF;AOj9FI;EAGI,kBAAA;APi9FR;AK1kHE;EEsnBE;IFrnBD,eAAA;EL6kHD;AACF;AK1kHC;EAEC;IE+mBE;MF9mBD,2EAhBc;IL4lHb;EACF;EK1kHA;IE2mBE;MF1mBD,qDAAA;IL6kHC;EACF;AACF;AK3kHE;EEsmBE;IFrmBD,gBAAA;EL8kHD;AACF;AKhmHE;EEsnBE;IFrnBD,qBAAA;ELmmHD;AACF;AKhmHC;EAEC;IE+mBE;MF9mBD,8EAhBc;ILknHb;EACF;EKhmHA;IE2mBE;MF1mBD,2DAAA;ILmmHC;EACF;AACF;AKjmHE;EEsmBE;IFrmBD,sBAAA;ELomHD;AACF;AO3/FQ;EALJ;IAMQ,WAAA;EP8/FV;AACF;AO3/FI;EAEI,kBAAA;EACA,MAAA;EACA,OAAA;AP4/FR;AKhoHE;EEgoBE;IF/nBD,eAAA;ELmoHD;AACF;AKhoHC;EAEC;IEynBE;MFxnBD,yEAhBc;ILkpHb;EACF;EKhoHA;IEqnBE;MFpnBD,sDAAA;ILmoHC;EACF;AACF;AKjoHE;EEgnBE;IF/mBD,gBAAA;ELooHD;AACF;AO/gGI;EAEI,gBAAA;EACA,gBAAA;EACA,mBAAA;APghGR;AK3pHE;EEuoBE;IFtoBD,iBAAA;EL8pHD;AACF;AK3pHC;EAEC;IEgoBE;MF/nBD,yEAhBc;IL6qHb;EACF;EK3pHA;IE4nBE;MF3nBD,sDAAA;IL8pHC;EACF;AACF;AK5pHE;EEunBE;IFtnBD,kBAAA;EL+pHD;AACF;AOniGI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;APqiGR;AOliGI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;APoiGR;AOliGY;EACI,2BAAA;APoiGhB;AO/hGI;EACI,oBAAA;EACA,+BAAA;APiiGR;;AO3hGA;EAGI,gCAAA;EACA,gBAAA;AP4hGJ;AK1sHE;EE0qBF;IFzqBG,iBAAA;EL6sHD;AACF;AK1sHC;EAEC;IEmqBF;MFlqBG,qDAhBc;IL4tHb;EACF;EK1sHA;IE+pBF;MF9pBG,sDAAA;IL6sHC;EACF;AACF;AK3sHE;EE0pBF;IFzpBG,mBAAA;EL8sHD;AACF;AKhuHE;EE0qBF;IFzqBG,wBAAA;ELmuHD;AACF;AKhuHC;EAEC;IEmqBF;MFlqBG,iFAhBc;ILkvHb;EACF;EKhuHA;IE+pBF;MF9pBG,0DAAA;ILmuHC;EACF;AACF;AKjuHE;EE0pBF;IFzpBG,sBAAA;ELouHD;AACF;AOvkGI;EACI,kBAAA;APykGR;AOxkGQ;EACI,WAAA;EAGA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,kBAAA;EACA,yBAAA;APwkGZ;AKjwHE;EEirBM;IFhrBL,iBAAA;ELowHD;AACF;AKjwHC;EAEC;IE0qBM;MFzqBL,0EAhBc;ILmxHb;EACF;EKjwHA;IEsqBM;MFrqBL,qDAAA;ILowHC;EACF;AACF;AKlwHE;EEiqBM;IFhqBL,cAAA;ELqwHD;AACF;AKvxHE;EEirBM;IFhrBL,kBAAA;EL0xHD;AACF;AKvxHC;EAEC;IE0qBM;MFzqBL,2EAhBc;ILyyHb;EACF;EKvxHA;IEsqBM;MFrqBL,sDAAA;IL0xHC;EACF;AACF;AKxxHE;EEiqBM;IFhqBL,eAAA;EL2xHD;AACF;AOnnGY;EATJ;IAUQ,aAAA;EPsnGd;AACF;AOlnGI;EACI,UAAA;APonGR;AOjnGI;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;APmnGR;AK1zHE;EE0sBE;IFzsBD,eAAA;EL6zHD;AACF;AK1zHC;EAEC;IEmsBE;MFlsBD,yEAhBc;IL40Hb;EACF;EK1zHA;IE+rBE;MF9rBD,sDAAA;IL6zHC;EACF;AACF;AK3zHE;EE0rBE;IFzrBD,gBAAA;EL8zHD;AACF;AKh1HE;EE0sBE;IFzsBD,sBAAA;ELm1HD;AACF;AKh1HC;EAEC;IEmsBE;MFlsBD,+EAhBc;ILk2Hb;EACF;EKh1HA;IE+rBE;MF9rBD,yDAAA;ILm1HC;EACF;AACF;AKj1HE;EE0rBE;IFzrBD,sBAAA;ELo1HD;AACF;AOvpGI;EACI,WAAA;EAEA,gBAAA;EACA,gBAAA;EACA,kBAAA;APwpGR;AK52HE;EE+sBE;IF9sBD,iBAAA;EL+2HD;AACF;AK52HC;EAEC;IEwsBE;MFvsBD,2EAhBc;IL83Hb;EACF;EK52HA;IEosBE;MFnsBD,0DAAA;IL+2HC;EACF;AACF;AK72HE;EE+rBE;IF9rBD,oBAAA;ELg3HD;AACF;AKl4HE;EE+sBE;IF9sBD,iBAAA;ELq4HD;AACF;AKl4HC;EAEC;IEwsBE;MFvsBD,4EAhBc;ILo5Hb;EACF;EKl4HA;IEosBE;MFnsBD,sDAAA;ILq4HC;EACF;AACF;AKn4HE;EE+rBE;IF9rBD,eAAA;ELs4HD;AACF;AKx5HE;EE+sBE;IF9sBD,wBAAA;EL25HD;AACF;AKx5HC;EAEC;IEwsBE;MFvsBD,kFAhBc;IL06Hb;EACF;EKx5HA;IEosBE;MFnsBD,6DAAA;IL25HC;EACF;AACF;AKz5HE;EE+rBE;IF9rBD,wBAAA;EL45HD;AACF;AOrtGI;EACI,cAAA;EACA,gBAAA;EACA,gBAAA;APutGR;;AOntGA;EACI,UAAA;EACA,SAAA;EAEA,kBAAA;APqtGJ;AKz7HE;EEguBF;IF/tBG,eAAA;EL47HD;AACF;AKz7HC;EAEC;IEytBF;MFxtBG,+EAbe;ILw8Hd;EACF;EKz7HA;IEqtBF;MFptBG,oEAAA;IL47HC;EACF;AACF;AK17HE;EEgtBF;IF/sBG,uBAAA;EL67HD;AACF;AOzuGI;EANJ;IAOQ,aAAA;EP4uGN;AACF;AO3uGI;EACI,WAAA;EACA,kBAAA;EAEA,aAAA;EACA,WAAA;EAEA,sBAAA;AP2uGR;AK39HE;EEyuBE;IFxuBD,eAAA;EL89HD;AACF;AK39HC;EAEC;IEkuBE;MFjuBD,4EAbe;IL0+Hd;EACF;EK39HA;IE8tBE;MF7tBD,wDAAA;IL89HC;EACF;AACF;AK59HE;EEytBE;IFxtBD,gBAAA;EL+9HD;AACF;AKj/HE;EEyuBE;IFxuBD,cAAA;ELo/HD;AACF;AKj/HC;EAEC;IEkuBE;MFjuBD,8CAhBc;ILmgIb;EACF;EKj/HA;IE8tBE;MF7tBD,8CAAA;ILo/HC;EACF;AACF;AKl/HE;EEytBE;IFxtBD,WAAA;ELq/HD;AACF;AOrxGQ;EATJ;IAUQ,aAAA;EPwxGV;AACF;AOtxGI;EACI,WAAA;EACA,kBAAA;EAEA,aAAA;EACA,WAAA;EAEA,sBAAA;EACA,wBAAA;APsxGR;AKphIE;EEsvBE;IFrvBD,aAAA;ELuhID;AACF;AKphIC;EAEC;IE+uBE;MF9uBD,uEAbe;ILmiId;EACF;EKphIA;IE2uBE;MF1uBD,mDAAA;ILuhIC;EACF;AACF;AKrhIE;EEsuBE;IFruBD,cAAA;ELwhID;AACF;AK1iIE;EEsvBE;IFrvBD,eAAA;EL6iID;AACF;AK1iIC;EAEC;IE+uBE;MF9uBD,yEAhBc;IL4jIb;EACF;EK1iIA;IE2uBE;MF1uBD,sDAAA;IL6iIC;EACF;AACF;AK3iIE;EEsuBE;IFruBD,gBAAA;EL8iID;AACF;AOh0GQ;EAVJ;IAWQ,aAAA;EPm0GV;AACF;;AKrkIE;EEywBF;IFxwBG,sBAAA;ELykID;AACF;AKtkIC;EAEC;IEkwBF;MFjwBG,+EAhBc;ILwlIb;EACF;EKtkIA;IE8vBF;MF7vBG,yDAAA;ILykIC;EACF;AACF;AKvkIE;EEyvBF;IFxvBG,mBAAA;EL0kID;AACF;AK5lIE;EEywBF;IFxwBG,yBAAA;EL+lID;AACF;AK5lIC;EAEC;IEkwBF;MFjwBG,kFAhBc;IL8mIb;EACF;EK5lIA;IE8vBF;MF7vBG,4DAAA;IL+lIC;EACF;AACF;AK7lIE;EEyvBF;IFxvBG,sBAAA;ELgmID;AACF;AOt2GI;EACI,gBAAA;EACA,aAAA;EACA,mBAAA;APw2GR;AOt2GQ;EALJ;IAMQ,sBAAA;EPy2GV;AACF;AK5nIE;EEsxBE;IFrxBD,sBAAA;EL+nID;AACF;AK5nIC;EAEC;IE+wBE;MF9wBD,wFAhBc;IL8oIb;EACF;EK5nIA;IE2wBE;MF1wBD,0EAAA;IL+nIC;EACF;AACF;AK7nIE;EEswBE;IFrwBD,6BAAA;ELgoID;AACF;AOz3GQ;EAHJ;IAIQ,eAAA;IACA,WAAA;IACA,kBAAA;EP43GV;AACF;AOz3GI;EACI,gBAAA;AP23GR;AK5pIE;EEgyBE;IF/xBD,wBAAA;EL+pID;AACF;AK5pIC;EAEC;IEyxBE;MFxxBD,kFAhBc;IL8qIb;EACF;EK5pIA;IEqxBE;MFpxBD,4DAAA;IL+pIC;EACF;AACF;AK7pIE;EEgxBE;IF/wBD,wBAAA;ELgqID;AACF;AO74GI;EAEI,gBAAA;EACA,gBAAA;AP84GR;AKtrIE;EEqyBE;IFpyBD,mBAAA;ELyrID;AACF;AKtrIC;EAEC;IE8xBE;MF7xBD,0EAhBc;ILwsIb;EACF;EKtrIA;IE0xBE;MFzxBD,sDAAA;ILyrIC;EACF;AACF;AKvrIE;EEqxBE;IFpxBD,iBAAA;EL0rID;AACF;AK5sIE;EEqyBE;IFpyBD,eAAA;EL+sID;AACF;AK5sIC;EAEC;IE8xBE;MF7xBD,4DAhBc;IL8tIb;EACF;EK5sIA;IE0xBE;MFzxBD,sDAAA;IL+sIC;EACF;AACF;AK7sIE;EEqxBE;IFpxBD,gBAAA;ELgtID;AACF;AOv7GQ;EANJ;IAOQ,WAAA;IACA,mBAAA;EP07GV;AACF;AOv7GI;EACI,aAAA;EACA,eAAA;EACA,8BAAA;APy7GR;AK7uIE;EEizBE;IFhzBD,iBAAA;ELgvID;AACF;AK7uIC;EAEC;IE0yBE;MFzyBD,0EAhBc;IL+vIb;EACF;EK7uIA;IEsyBE;MFryBD,qDAAA;ILgvIC;EACF;AACF;AK9uIE;EEiyBE;IFhyBD,iBAAA;ELivID;AACF;AO58GQ;EANJ;IAOQ,UAAA;IACA,uBAAA;EP+8GV;AACF;;AKzwIE;EEi0BF;IFh0BG,qBAAA;EL6wID;AACF;AK1wIC;EAEC;IE0zBF;MFzzBG,8EAhBc;IL4xIb;EACF;EK1wIA;IEszBF;MFrzBG,yDAAA;IL6wIC;EACF;AACF;AK3wIE;EEizBF;IFhzBG,sBAAA;EL8wID;AACF;AO79GI;EACI,kBAAA;AP+9GR;AO79GQ;EACI,WAAA;EACA,kBAAA;EACA,OAAA;EAEA,WAAA;EACA,WAAA;EACA,gCAAA;AP89GZ;AK3yIE;EEs0BM;IFr0BL,cAAA;EL8yID;AACF;AK3yIC;EAEC;IE+zBM;MF9zBL,2EAbe;IL0zId;EACF;EK3yIA;IE2zBM;MF1zBL,uDAAA;IL8yIC;EACF;AACF;AK5yIE;EEszBM;IFrzBL,iBAAA;EL+yID;AACF;AOh/GI;EAGI,gBAAA;EACA,gBAAA;EACA,kBAAA;APg/GR;AKt0IE;EEi1BE;IFh1BD,eAAA;ELy0ID;AACF;AKt0IC;EAEC;IE00BE;MFz0BD,sEAhBc;ILw1Ib;EACF;EKt0IA;IEs0BE;MFr0BD,oDAAA;ILy0IC;EACF;AACF;AKv0IE;EEi0BE;IFh0BD,iBAAA;EL00ID;AACF;AK51IE;EEi1BE;IFh1BD,uBAAA;EL+1ID;AACF;AK51IC;EAEC;IE00BE;MFz0BD,gFAhBc;IL82Ib;EACF;EK51IA;IEs0BE;MFr0BD,2DAAA;IL+1IC;EACF;AACF;AK71IE;EEi0BE;IFh0BD,uBAAA;ELg2ID;AACF;AOzhHI;EACI,aAAA;EACA,eAAA;EACA,uBAAA;AP2hHR;AKv3IE;EEy1BE;IFx1BD,aAAA;EL03ID;AACF;AKv3IC;EAEC;IEk1BE;MFj1BD,qEAbe;ILs4Id;EACF;EKv3IA;IE80BE;MF70BD,iDAAA;IL03IC;EACF;AACF;AKx3IE;EEy0BE;IFx0BD,WAAA;EL23ID;AACF;AK74IE;EEy1BE;IFx1BD,mBAAA;ELg5ID;AACF;AK74IC;EAEC;IEk1BE;MFj1BD,4EAhBc;IL+5Ib;EACF;EK74IA;IE80BE;MF70BD,4DAAA;ILg5IC;EACF;AACF;AK94IE;EEy0BE;IFx0BD,uBAAA;ELi5ID;AACF;AOlkHI;EAEI,kBAAA;APmkHR;AKt6IE;EEi2BE;IFh2BD,gBAAA;ELy6ID;AACF;AKt6IC;EAEC;IE01BE;MFz1BD,0EAhBc;ILw7Ib;EACF;EKt6IA;IEs1BE;MFr1BD,mDAAA;ILy6IC;EACF;AACF;AKv6IE;EEi1BE;IFh1BD,cAAA;EL06ID;AACF;AOtlHI;EACI,kBAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,kBAAA;EACA,sBAAA;EAEA,gBAAA;EACA,gBAAA;APulHR;AKt8IE;EEs2BE;IFr2BD,mBAAA;ELy8ID;AACF;AKt8IC;EAEC;IE+1BE;MF91BD,4EAhBc;ILw9Ib;EACF;EKt8IA;IE21BE;MF11BD,uDAAA;ILy8IC;EACF;AACF;AKv8IE;EEs1BE;IFr1BD,mBAAA;EL08ID;AACF;AO1mHI;EAEI,WAAA;AP2mHR;AK/9IE;EEk3BE;IFj3BD,wBAAA;ELk+ID;AACF;AK/9IC;EAEC;IE22BE;MF12BD,kFAhBc;ILi/Ib;EACF;EK/9IA;IEu2BE;MFt2BD,4DAAA;ILk+IC;EACF;AACF;AKh+IE;EEk2BE;IFj2BD,wBAAA;ELm+ID;AACF;AO9nHI;EAGI,gBAAA;EACA,gBAAA;AP8nHR;AKz/IE;EEu3BE;IFt3BD,kBAAA;EL4/ID;AACF;AKz/IC;EAEC;IEg3BE;MF/2BD,uEAhBc;IL2gJb;EACF;EKz/IA;IE42BE;MF32BD,mDAAA;IL4/IC;EACF;AACF;AK1/IE;EEu2BE;IFt2BD,eAAA;EL6/ID;AACF;AK/gJE;EEu3BE;IFt3BD,gBAAA;ELkhJD;AACF;AK/gJC;EAEC;IEg3BE;MF/2BD,0EAhBc;ILiiJb;EACF;EK/gJA;IE42BE;MF32BD,oDAAA;ILkhJC;EACF;AACF;AKhhJE;EEu2BE;IFt2BD,eAAA;ELmhJD;AACF;AOvqHI;EACI,cAAA;APyqHR;;AKxiJE;EEq4BF;IFp4BG,qBAAA;EL4iJD;AACF;AKziJC;EAEC;IE83BF;MF73BG,8EAhBc;IL2jJb;EACF;EKziJA;IE03BF;MFz3BG,wDAAA;IL4iJC;EACF;AACF;AK1iJE;EEq3BF;IFp3BG,mBAAA;EL6iJD;AACF;AK/jJE;EEq4BF;IFp4BG,wBAAA;ELkkJD;AACF;AK/jJC;EAEC;IE83BF;MF73BG,iFAhBc;ILilJb;EACF;EK/jJA;IE03BF;MFz3BG,2DAAA;ILkkJC;EACF;AACF;AKhkJE;EEq3BF;IFp3BG,sBAAA;ELmkJD;AACF;AO7sHI;EACI,gBAAA;EACA,kBAAA;AP+sHR;AO5sHI;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;AP8sHR;AO5sHQ;EALJ;IAMQ,sBAAA;IACA,uBAAA;EP+sHV;AACF;AO5sHI;EAGI,gBAAA;EACA,gBAAA;AP4sHR;AKxmJE;EEw5BE;IFv5BD,iBAAA;EL2mJD;AACF;AKxmJC;EAEC;IEi5BE;MFh5BD,6EAhBc;IL0nJb;EACF;EKxmJA;IE64BE;MF54BD,uDAAA;IL2mJC;EACF;AACF;AKzmJE;EEw4BE;IFv4BD,gBAAA;EL4mJD;AACF;AK9nJE;EEw5BE;IFv5BD,kBAAA;ELioJD;AACF;AK9nJC;EAEC;IEi5BE;MFh5BD,2EAhBc;ILgpJb;EACF;EK9nJA;IE64BE;MF54BD,wDAAA;ILioJC;EACF;AACF;AK/nJE;EEw4BE;IFv4BD,mBAAA;ELkoJD;AACF;AOvvHQ;EACI,kBAAA;EACA,UAAA;APyvHZ;AOxvHY;EACI,WAAA;EACA,kBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;EACA,gCAAA;AP0vHhB;AOrvHI;EAEI,kBAAA;EACA,SAAA;EACA,YAAA;APsvHR;AKtqJE;EE46BE;IF36BD,gBAAA;ELyqJD;AACF;AKtqJC;EAEC;IEq6BE;MFp6BD,2EAhBc;ILwrJb;EACF;EKtqJA;IEi6BE;MFh6BD,sDAAA;ILyqJC;EACF;AACF;AKvqJE;EE45BE;IF35BD,gBAAA;EL0qJD;AACF;AO1wHQ;EANJ;IAOQ,aAAA;EP6wHV;AACF;AO1wHI;EACI,+BAAA;AP4wHR;AO3wHQ;EACI,0BAAA;AP6wHZ;;AQvxJA;EACI,kBAAA;AR0xJJ","sourcesContent":["@use \"sass:math\";\r\n\r\n// Підключення міксинів ===========================================================================================================================================================================================================================================================================\r\n@import \"base/mixins\";\r\n\r\n// Підключення шрифтів ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - додати при підключенні через плагін\r\n\r\n// Підключити, якщо є локальні файли шрифтів\r\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');\r\n\r\n// Підключення іконкових шрифтів ==============================================================================================================================================================================================================================================================================\r\n// Підключити, якщо є файл іконкового шрифту\r\n//@import \"fonts/icons\";\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// Налаштування шаблону ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// За замовчуванням шрифт ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: \"Inter\";\r\n$fontSize: toRem(15); // де 14(px) - розмір шрифту за замовчуванням з макету\r\n\r\n// Основні кольори\r\n$mainColor: #0E0E0E; // Колір шрифту за замовчуванням\r\n\r\n// Палітра кольорів\r\n// @import \"base/colors-palette\";\r\n\r\n// Налаштування адаптивної сітки ===============================================================================================================================================================================================================================================================================================\r\n\r\n// Мінімальна ширина сторінки\r\n$minWidth: 320;\r\n// Ширина полотна (макету)\r\n$maxWidth: 1366;\r\n// Ширина обмежуючого контейнера (0 = немає обмеження)\r\n$maxWidthContainer: 1170;\r\n// Загальний відступ у контейнера\r\n// (30 = по 15px ліворуч і праворуч, 0 = немає відступу)\r\n$containerPadding: 30;\r\n\r\n// Ширина спрацьовування першого брейкпоінту\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поїнти\r\n$pc: em($containerWidth); // ПК, ноутбуки, деякі планшети у горизонтальному положенні\r\n$tablet: em(991.98); // Планшети, деякі телефони в горизонтальному положенні\r\n$mobile: em(767.98); // Телефони L\r\n$mobileSmall: em(479.98); // Телефони S\r\n\r\n// Тип адаптива:\r\n// 1 = чуйність (у контейнера немає брейкпоінтів),\r\n// 2 = по брейк-поїнт (контейнер змінює свою ширину по брейк-поїнт)\r\n$responsiveType: 1;\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// Обнулення ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import \"base/null\";\r\n\r\n// Стилі тега BODY ============================================================================================================================================================================================================================================================================================================================================================================================\r\nbody {\r\n\t// Скролл заблоковано\r\n\t.lock & {\r\n\t\toverflow: hidden;\r\n\t\ttouch-action: none;\r\n\t\toverscroll-behavior: none;\r\n\t}\r\n\t// Сайт завантажений\r\n\t.loaded & {\r\n\t}\r\n}\r\n// Оболонка wrapper ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n\tmin-height: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\toverflow: hidden;\r\n\t@supports (overflow: clip) {\r\n\t\toverflow: clip;\r\n\t}\r\n\t// Притискаємо footer\r\n\t> main {\r\n\t\tflex: 1 1 auto;\r\n\t}\r\n\t// Фікс для слайдерів\r\n\t> * {\r\n\t\tmin-width: 0;\r\n\t}\r\n}\r\n// Обмежуючий контейнер ======================================================================================================================================================================================================================\r\n/*\r\n(i) Стилі будуть застосовуватись до\r\nвсіх класів, що містять *__container\r\nНаприклад header__container, main__container і т.п.\r\nСніппет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n\t// Чуйна\r\n\t[class*=\"__container\"] {\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: toRem($containerWidth);\r\n\t\t\tmargin: 0 auto;\r\n\t\t}\r\n\t\t@if ($containerPadding>0) {\r\n\t\t\t@if ($maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\r\n\t\t\t} @else {\r\n\t\t\t\t@include adaptiveValue(\"padding-left\", math.div($containerPadding, 2), 15);\r\n\t\t\t\t@include adaptiveValue(\"padding-right\", math.div($containerPadding, 2), 15);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n} @else {\r\n\t// Брейк-поїнтами\r\n\t[class*=\"__container\"] {\r\n\t\tmargin: 0 auto;\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: toRem($containerWidth);\r\n\t\t} @else {\r\n\t\t\t@if ($containerPadding>0) {\r\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $pc) {\r\n\t\t\tmax-width: toRem(970);\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmax-width: toRem(750);\r\n\t\t}\r\n\t\t@media (max-width: $mobile) {\r\n\t\t\tmax-width: none;\r\n\t\t\t@if ($containerPadding>0 and $maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// Підключення базових стилів, шаблонів (заготівель) та допоміжних класів\r\n// Для підключення/вимкнення конкретних стилів дивись base.scss\r\n@import \"base\";\r\n\r\n// Підключення стилів загальних елементів проекту\r\n@import \"common\";\r\n\r\n// Підключення стилів окремих блоків\r\n@import \"header\";\r\n@import \"footer\";\r\n\r\n// Підключення стилів окремих сторінок\r\n@import \"home\";\r\n\r\n// Змінні\r\n\r\n@import \"utils/vars\";\r\n","* {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: 0px;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n\t// outline: none;\r\n}\r\na:focus,\r\na:active {\r\n\t// outline: none;\r\n}\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tmin-width: $minWidth + px;\r\n}\r\nbody {\r\n\tcolor: $mainColor;\r\n\tline-height: 1;\r\n\tfont-family: $fontFamily;\r\n\tfont-size: $fontSize;\r\n\t//text-rendering: optimizeLegibility;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n\tfont-family: $fontFamily;\r\n\tfont-size: inherit;\r\n\tline-height: inherit;\r\n}\r\nbutton {\r\n\tcursor: pointer;\r\n\tcolor: inherit;\r\n\tbackground-color: transparent;\r\n}\r\na {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\nul li {\r\n\tlist-style: none;\r\n}\r\nimg {\r\n\tvertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n","body::after {\r\n\tcontent: \"\";\r\n\tbackground-color: rgba(0, 0, 0, 0.5);\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\topacity: 0;\r\n\ttransition: opacity 0.8s ease 0s;\r\n\tpointer-events: none;\r\n\tz-index: 149;\r\n}\r\n.popup-show body::after {\r\n\topacity: 1;\r\n}\r\n.popup {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tbottom: 0;\r\n\tright: 0;\r\n\tpadding: 30px 10px;\r\n\ttransition: visibility 0.8s ease 0s;\r\n\tvisibility: hidden;\r\n\tpointer-events: none;\r\n}\r\n.popup_show {\r\n\tz-index: 150;\r\n\tvisibility: visible;\r\n\toverflow: auto;\r\n\tpointer-events: auto;\r\n}\r\n.popup_show .popup__content {\r\n\tvisibility: visible;\r\n\ttransform: scale(1);\r\n}\r\n.popup__wrapper {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tmin-height: 100%;\r\n\tflex: 1 1 auto;\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n.popup__content {\r\n\tvisibility: hidden;\r\n\ttransform: scale(0);\r\n\ttransition: transform 0.3s ease 0s;\r\n\tbackground-color: #eee;\r\n\tpadding: 20px;\r\n\twidth: 100%;\r\n\tmax-width: 900px;\r\n\tborder-radius: 20px;\r\n\t.lock & {\r\n\t\tvisibility: visible;\r\n\t}\r\n}\r\n//====================================================================================================\r\n// Popup-swiper\r\n//====================================================================================================\r\n.popup-swiper {\r\n\r\n\t&__wrapper {\r\n\t}\r\n\r\n\t&__slide {\r\n\t\twidth: 770px;\r\n\t}\r\n\r\n\t&__img {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t&__title-block {\r\n\t}\r\n\r\n\t&__title {\r\n\t}\r\n\r\n\t&__subtitle {\r\n\t}\r\n\r\n\t&__counter {\r\n\t}\r\n\r\n\t&__item {\r\n\t}\r\n}\r\n.swiper {\r\n}\r\n.swiper-wrapper {\r\n}\r\n.swiper-slide {\r\n}\r\n.swiper-counter {\r\n\r\n\t&__item {\r\n\t}\r\n}\r\n","// Загальний файл елементів форм\r\n// Для підключення/відключення стилів конкретного елемента форми дивись base/forms/forms.scss\r\n@import \"base/forms/forms\";\r\n\r\n// Стилі попапів\r\n@import \"base/popup\";\r\n\r\n// Стилі спойлерів\r\n// @import \"base/spollers\";\r\n\r\n// Стилі табів\r\n// @import \"base/tabs\";\r\n\r\n// Стилі мап\r\n// @import \"base/maps\";\r\n\r\n// Стилі блоку \"показати ще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стилі для липкого блоку\r\n// @import \"base/sticky\";\r\n\r\n// Стилі для повноекранного блоку\r\n// @import \"base/fullscreen\";\r\n\r\n// Стилі для поекраної прокрутки\r\n// Styles for fullpage scroll\r\n// @import \"base/fullpage\";\r\n\r\n// Стилі для ripple ефекту\r\n// Styles for ripple effect\r\n// @import \"base/ripple\";\r\n\r\n// Стилі для кастомного курсору\r\n// Styles for custom cursor\r\n// @import \"base/cursor\";\r\n\r\n// Стилі для чуйних картинок (IBG)\r\n// Сніппет (HTML): ibg (div з картинкою та класами)\r\n// Сніппет (HTML): ibga (a з картинкою та класами)\r\n[class*=\"-ibg\"] {\r\n\tposition: relative;\r\n\timg {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tobject-fit: cover;\r\n\t}\r\n}\r\n[class*=\"-ibg--contain\"] {\r\n\timg {\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n// Шаблони (заготівлі)\r\n// @extend %ім'я шаблону;\r\n// Сніппет (SCSS): ex\r\n\r\n// Лічильник для списку\r\n%listCounter {\r\n\tlist-style-type: none;\r\n\tcounter-reset: item;\r\n\tli {\r\n\t\tposition: relative;\r\n\t\t&:before {\r\n\t\t\tcounter-increment: item;\r\n\t\t\tcontent: counter(item);\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t}\r\n}\r\n// Адаптивне відео\r\n%responsiveVideo {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 0;\r\n\tpadding-bottom: 56.25%;\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n// Відео як фон\r\n%videoBackground {\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: fixed;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t\tz-index: -100;\r\n\t\ttransform: translateX(-50%) translateY(-50%);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}\r\n// Сірий фільтр\r\n%grayfilter {\r\n\ttransition: all 0.3s ease 0s;\r\n\tfilter: grayscale(1);\r\n\t@media (any-hover: hover) {\r\n\t\t&:hover {\r\n\t\t\tfilter: grayscale(0);\r\n\t\t}\r\n\t}\r\n}\r\n// Скасувати виділення\r\n%noselect {\r\n\tuser-select: none;\r\n}\r\n// Дзеркальне відображення\r\n%mirror {\r\n\ttransform: scale(-1, 1);\r\n}\r\n// Плавний скролл\r\n%smoothscroll {\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n// Сховати скролл\r\n%hidescroll {\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n","//====================================================================================================\r\n\r\n.header {\r\n\tbackground-color: var(--dark-cl);\r\n\tcolor: #fff;\r\n\t&__menu {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\t@media (max-width:580px){\r\n\t\t\tjustify-content: space-between;\r\n\t\t\theight: 52px;\r\n\t\t  }\r\n\t}\r\n}\r\n\r\n.logo {\r\n\tmargin-right: auto;\r\n\t@include adaptiveValue(\"font-size\", 20, 15);\r\n}\r\n.menu {\r\n\r\n\t&__body {\r\n\t\t@include adaptiveValue(\"padding-top\", 35, 25);\r\n\t\t@include adaptiveValue(\"padding-bottom\", 35, 25);\r\n\t\tdisplay: flex;\r\n\t\tz-index: 10;\r\n\t\t@media (max-width:580px){\r\n\t\t\tflex-direction: column;\r\n\t\t\talign-items: center;\r\n\t\t  }\r\n\t}\r\n\r\n\t&__list {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\t@include adaptiveValue(\"margin-right\", 60, 50);\r\n\t\t@include adaptiveValue(\"gap\", 40, 30);\r\n\r\n\t\t@media (max-width:580px){\r\n\t\t\tflex-direction: column;\r\n\t\t\talign-items: center;\r\n\t\t\tmargin: 0;\r\n\t\t\tflex: 2;\r\n\t\t  }\r\n\t  }\r\n\r\n\t&__link {\r\n\t\t@include adaptiveValue(\"padding-top\", 35, 25);\r\n\t\t@include adaptiveValue(\"padding-bottom\", 35, 25);\r\n\t\tfont-size: 16px;\r\n\t\tposition: relative;\r\n\r\n\t\t@media (max-width:580px){\r\n\t\t\tfont-size: 28px;\r\n\t\t  }\r\n\t\t\r\n\t\t&::before {\r\n\t\t\tcontent: '';\r\n\t\t\tposition: absolute;\r\n\t\t\tdisplay: block;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 45px;\r\n\t\t\theight: 1px;\r\n\t\t\twidth: 100%;\r\n\t\t\tbackground-color: #fff;\r\n\t\t\ttransform: translateX(-100%);\r\n\t\t\topacity: 0;\r\n\t\t\tvisibility: hidden;\r\n\t\t\ttransition: visibility 0.5s ease, opacity 0.3s ease, transform 0.3s ease;\r\n\t\t}\r\n\r\n\t\t&:hover {\r\n\t\t\t&::before {\r\n\t\t\t\ttransform: translateX(0);\r\n\t\t\t\topacity: 1;\r\n\t\t\t\tvisibility: visible;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t&__link.current {\r\n\t\t&::before {\r\n\t\t\ttransform: translateX(0);\r\n\t\t\topacity: 1;\r\n\t\t\tvisibility: visible;\r\n\t\t}\r\n\t}\r\n}\r\n.socials-list {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\t@include adaptiveValue(\"gap\", 15, 10);\r\n\r\n\t@media (max-width:580px){\r\n\t\tgap: 30px;\r\n\t\tflex: 1;\r\n  \t}\r\n\r\n\t&__icon {\r\n\t\t@media (max-width:580px){\r\n\t\t\twidth: 25px;\r\n\t\t\theight: 25px;\r\n  \t}\r\n\t}\r\n}\r\n\r\n//====================================================================================================\r\n\r\n//Burger\r\n@media (max-width: 580px) {\r\n\t.menu__body {\r\n\t\tposition: fixed;\r\n\t\ttop: 52px;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttransform: translateX(-100%);\r\n\t\tbackground-color: var(--dark-cl);\r\n\t\toverflow: auto;\r\n\t\ttransition: transform 0.3s ease;\r\n\t}\r\n}\r\n\r\n.icon-menu {\r\n\t@media (min-width:580px){\r\n\t\tdisplay: none;  \r\n\t}\r\n\t@media (max-width: 580px) {\r\n\t\tdisplay: block;\r\n\t\tposition: relative;\r\n\t\twidth: toRem(25);\r\n\t\theight: toRem(14);\r\n\t\tz-index: 5;\r\n\t\t@media (any-hover: none) {\r\n\t\t\tcursor: default;\r\n\t\t}\r\n\t\tspan,\r\n\t\t&::before,\r\n\t\t&::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\tright: 0;\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: toRem(2);\r\n\t\t\tbackground-color: #fff;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t\t&::after {\r\n\t\t\tbottom: 0;\r\n\t\t\twidth: 50%;\r\n\t\t}\r\n\t\tspan {\r\n\t\t\ttop: calc(50% - toRem(1));\r\n\t\t}\r\n\t\t.menu-open & {\r\n\t\t\t+.menu__body {\r\n\t\t\t\ttransform: translateX(0);\r\n\t\t\t}\r\n\t\t\tspan {\r\n\t\t\t\twidth: 0;\r\n\t\t\t}\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t}\r\n\t\t\t&::before {\r\n\t\t\t\ttop: calc(50% - toRem(1));\r\n\t\t\t\ttransform: rotate(-45deg);\r\n\t\t\t}\r\n\t\t\t&::after {\r\n\t\t\t\tbottom: calc(50% - toRem(1));\r\n\t\t\t\ttransform: rotate(45deg);\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t}\r\n\t\t\t\r\n\t\t}\t\r\n\t}\r\n\t\r\n\t\r\n\r\n","//Підключення шрифту\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc:\r\n\t\t\turl(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"),\r\n\t\t\turl(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from: 100) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function toRem($px, $current: 16) {\r\n\t$result: math.div($px, $current) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивна властивість (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $keepSize: 0, $widthFrom: $containerWidth, $widthTo: $minWidth) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поїнти в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плаваючого значення\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{toRem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Отримання значення властивості\r\n\t$propertyValue: #{\"clamp(\" toRem($minSize) \",\" $flyValue \",\" toRem($startSize) \")\"};\r\n\t// Якщо негативні значення\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" toRem($startSize) \",\" $flyValue \",\" toRem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Встановлюємо значення за замовчуванням\r\n\t@if $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: toRem($startSize);\r\n\t\t}\r\n\t}\r\n\t// Адаптуємо розмір у проміжку між зазначеними ширинами в'юпорту\r\n\t@media (min-width: $widthToMedia) and (max-width: $widthFromMedia) {\r\n\t\t// Якщо підтримується clamp();\r\n\t\t@supports (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: $propertyValue;\r\n\t\t}\r\n\t\t// Якщо не підтримується clamp();\r\n\t\t@supports not (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: calc(#{toRem($minSize)} + #{$addSize} * (100vw - #{toRem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t\t}\r\n\t}\r\n\t@if $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: toRem($minSize);\r\n\t\t}\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.footer {\r\n    @include adaptiveValue(\"padding-top\", 121, 40);\r\n    @include adaptiveValue(\"padding-bottom\", 130, 70);\r\n    background-color: var(--dark-cl);\r\n    overflow: hidden;\r\n    &__container {\r\n        position: relative;\r\n        &::after {\r\n            content: '';\r\n            @include adaptiveValue(\"width\", 641, 200);\r\n            @include adaptiveValue(\"height\", 641, 200);\r\n            position: absolute;\r\n            right: -25%;\r\n            top: 23%;\r\n            border-radius: 50%;\r\n            background-color: #202020;\r\n            @media (max-width: 667.98px){\r\n                display: none;\r\n            } \r\n        }\r\n    }\r\n}\r\n.block-wrapper {\r\n    color: #fff;\r\n    display: flex;\r\n\r\n    @media (max-width: $mobile) {\r\n        flex-direction: column;\r\n        gap: 80px;\r\n    }\r\n}\r\n.left-block {\r\n    @include adaptiveValue(\"width\", 400, 280);\r\n    position: relative;\r\n    &::after {\r\n        content: '';\r\n        position: absolute;\r\n        top: -40%;\r\n        right: 0;\r\n        background-color: #202020;\r\n        width: 1px;\r\n        height: 200%;\r\n        @media (max-width: $mobile) {\r\n            height: 150%;\r\n        }\r\n    }\r\n    &__text {\r\n        @include adaptiveValue(\"margin-top\", 30, 15);\r\n        @include adaptiveValue(\"margin-bottom\", 76, 35);\r\n        width: 240px;\r\n        font-size: 16px;\r\n        font-weight: 400;\r\n        line-height: 1.6; \r\n    }\r\n\r\n}\r\n.footer-logo {\r\n    @include adaptiveValue(\"font-size\", 34, 20);\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 1.3; \r\n}\r\n.contacts {\r\n    @include adaptiveValue(\"margin-bottom\", 81, 40);\r\n    &__item {\r\n    }\r\n\r\n    &__link {\r\n        font-size: 17px;\r\n        font-weight: 500;\r\n        line-height: 1.7; \r\n    }\r\n}\r\n.socials {\r\n    display: flex;\r\n    gap: 20px;\r\n}\r\n.right-block {\r\n    display: flex;\r\n    flex-direction: column;\r\n    @include adaptiveValue(\"margin-left\", 100, 0);\r\n    @media (max-width: $mobile) {\r\n        margin-left: 0;\r\n    }\r\n}\r\n.subscribe {\r\n    @include adaptiveValue(\"margin-bottom\", 40, 20);\r\n    color: #969696;\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n}\r\n.footer-form {\r\n    @include adaptiveValue(\"width\", 570, 280);\r\n    position: relative;\r\n    @include adaptiveValue(\"margin-bottom\", 131, 60);\r\n    &__input {\r\n        @include adaptiveValue(\"width\", 570, 280);\r\n        background-color: transparent;\r\n        width: 100%;\r\n        outline: none;\r\n        height: 36px;\r\n        border-bottom: 1px solid #fff;\r\n        color: #fff;\r\n\r\n        &::placeholder {\r\n            color: #fff;\r\n            position: absolute;\r\n            left: 0;\r\n            bottom: 17px;\r\n            opacity: 1;\r\n            transition: opacity 0.4s ease, bottom 0.4s ease;\r\n        }\r\n\r\n        &:focus {\r\n            &::placeholder {\r\n                opacity: 0;\r\n                bottom: 34px;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__button {\r\n        position: absolute;\r\n        right: 0;\r\n        bottom: 17px;\r\n        width: 64px;  \r\n        font-size: 16px;\r\n        font-weight: 500;\r\n        display: flex;\r\n        justify-content: flex-start;\r\n        &::after {\r\n            content: '';\r\n            position: absolute;\r\n            right: 0;\r\n            bottom: 5px;\r\n            width: 6px;\r\n            height: 6px;\r\n            border-radius: 50%;\r\n            background-color: #fff;\r\n        }\r\n    }\r\n}\r\n.links-block {\r\n    display: flex;\r\n    z-index: 2;\r\n\r\n    @media (max-width: 461.98px) {\r\n        flex-direction: column;\r\n        @include adaptiveValue(\"gap\", 60, 40);\r\n    }\r\n}\r\n.footer-nav {\r\n    &:first-child {\r\n        @include adaptiveValue(\"margin-right\", 124, 60);\r\n\r\n        @media (max-width: 461.98px) {\r\n            margin-right: 0;\r\n        }\r\n    }\r\n    &:last-child {\r\n        margin-right: 0;\r\n    }\r\n    @include adaptiveValue(\"margin-right\", 88, 40);\r\n    @media (max-width: 461.98px) {\r\n        margin-right: 0;\r\n    }\r\n    &__item {\r\n    }\r\n\r\n    &__link {\r\n    font-size: 17px;\r\n    font-weight: 500;\r\n    line-height: 1.7; \r\n    position: relative;\r\n\r\n    &::before {\r\n        content: '';\r\n        position: absolute;\r\n        display: block;\r\n        left: 0;\r\n        top: 10px;\r\n        height: 1px;\r\n        width: 100%;\r\n        background-color: #fff;\r\n        transform: translateX(-100%);\r\n        opacity: 0;\r\n        visibility: hidden;\r\n        transition: visibility 0.5s ease, opacity 0.3s ease, transform 0.3s ease;\r\n    }\r\n\r\n    &:hover {\r\n        &::before {\r\n            transform: translateX(0);\r\n            opacity: 1;\r\n            visibility: visible;\r\n        }\r\n    }\r\n    }\r\n}\r\n.footer-credits {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 15px;\r\n    z-index: 2;\r\n    color: #969696;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 1.3; \r\n    width: 149px;\r\n    text-wrap: nowrap;\r\n\r\n    @media (max-width: 631.98px) {\r\n        bottom: -50px;\r\n    }\r\n}\r\n\r\n//====================================================================================================\r\n","//====================================================================================================\r\n// Hero section\r\n//====================================================================================================\r\n.hero {\r\n    background-color: var(--dark-cl);\r\n    position: relative;\r\n    @include adaptiveValue(\"height\", 480, 270);\r\n    &__container {\r\n        position: relative;\r\n    }\r\n}\r\n\r\n.swiper-counter {\r\n    position: relative;\r\n    @include adaptiveValue(\"bottom\", 70, 30);\r\n    @include adaptiveValue(\"left\", 200, 15);\r\n    @include adaptiveValue(\"width\", 80, 50);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    color: #fff;\r\n    &__item {\r\n        &::after {\r\n            content: '';\r\n            height: 1px;\r\n            @include adaptiveValue(\"width\", 20, 10);\r\n            background-color: #fff;\r\n            position: absolute;\r\n            top: 7px;\r\n            @include adaptiveValue(\"left\", 30, 19);\r\n    }\r\n\r\n    &span {\r\n        @include adaptiveValue(\"font-size\", 14, 12);  \r\n    }\r\n    }\r\n}\r\n\r\n.block-title {\r\n        position: absolute;\r\n        @include adaptiveValue(\"top\", 175, 50);\r\n        @include adaptiveValue(\"left\", 200, 30);\r\n        @include adaptiveValue(\"width\", 516, 300);\r\n        padding: 40px 0 40px 0;\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 70, 36);\r\n        font-weight: 500;\r\n        line-height: 1.1;\r\n        color: #fff;\r\n        text-shadow: 4px 4px 2px rgba(0,0,0,0.6);\r\n        &::before {\r\n            content: '';\r\n            position: absolute;\r\n            top: 0;\r\n            left: 0;\r\n            height: 1px;\r\n            width: 70px;\r\n            background-color: #fff;\r\n        }\r\n    }\r\n    &::before {\r\n        content: '';\r\n        height: 1px;\r\n        width: 70px;\r\n    }\r\n}\r\n\r\n.btn-view {\r\n    position: absolute;\r\n    @include adaptiveValue(\"top\", 390, 160);\r\n    @include adaptiveValue(\"right\", 178, 20);\r\n    @include adaptiveValue(\"width\", 90, 55);\r\n    @include adaptiveValue(\"height\", 90, 55);\r\n    background-color: #fff;\r\n    color: var(--dark-cl);\r\n    border-radius: 50%;\r\n    @include adaptiveValue(\"font-size\", 15, 12);\r\n    font-weight: 500;\r\n    transition: transform 0.4s ease, box-shadow 0.4s ease;\r\n\r\n    &:hover {\r\n        transform: scale(1.1);\r\n        box-shadow: 2px 2px 15px 8px #fff;\r\n    }\r\n}\r\n\r\n.swiper-slide {\r\n    &__img {\r\n         @include adaptiveValue(\"height\", 580, 220);\r\n         width: 100%;\r\n    }\r\n}\r\n\r\n.swiper-button-prev {\r\n    position: absolute;\r\n    top: 225px;\r\n    @include adaptiveValue(\"left\", -50, 400);\r\n    @media (max-width:958px){\r\n        display: none;\r\n      }\r\n}\r\n.swiper-button-next {\r\n    position: absolute;\r\n    top: 225px;\r\n    @include adaptiveValue(\"right\", -50, 400);\r\n    @media (max-width:958px){\r\n        display: none;\r\n      }\r\n}\r\n\r\n//====================================================================================================\r\n// About-us section\r\n//====================================================================================================\r\n.about-us {\r\n    @include adaptiveValue(\"padding-top\", 256, 40);\r\n\r\n    &__container--big {\r\n        width: 1306px;\r\n        margin: 0 auto;\r\n    }\r\n}\r\n.intro-block {\r\n    @include adaptiveValue(\"width\", 615, 290);\r\n    @include adaptiveValue(\"margin-bottom\", 93, 40);\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    &__label {\r\n        @include adaptiveValue(\"margin-bottom\", 25, 15);\r\n        font-weight: 500;\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 34, 24);\r\n        line-height: 1.3;\r\n        font-weight: 500;\r\n    }\r\n}\r\n.info-block {\r\n    display: flex;\r\n    justify-content: center;\r\n    @include adaptiveValue(\"margin-bottom\", 160, 60);\r\n    @include adaptiveValue(\"gap\", 110, 40);\r\n    @media (max-width:580px){\r\n        flex-direction: column;\r\n        @include adaptiveValue(\"padding-left\", 40, 20);\r\n      }\r\n\r\n    &__item--top-line {\r\n        @include adaptiveValue(\"width\", 391, 200);\r\n        @include adaptiveValue(\"padding-top\", 34, 20);\r\n        position: relative\r\n    }\r\n\r\n    &__text--big {\r\n        @include adaptiveValue(\"font-size\", 20, 18);\r\n        line-height: 1.5;\r\n\r\n        &::before {\r\n            content: '';\r\n            position: absolute;\r\n            top: 0;\r\n            left: 0;\r\n            height: 1px;\r\n            @include adaptiveValue(\"width\", 400, 210);\r\n            background-color: var(--dark-cl)\r\n        }\r\n    }\r\n\r\n    &__item--action {\r\n        @include adaptiveValue(\"width\", 463, 250);\r\n    }\r\n\r\n    &__text--small {\r\n        @include adaptiveValue(\"font-size\", 17, 15);\r\n        @include adaptiveValue(\"margin-bottom\", 50, 25);\r\n        line-height: 1.6;\r\n    }\r\n}\r\n\r\n\r\n.btn span {\r\n    position: relative;\r\n    z-index: 50;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    @include adaptiveValue(\"padding-left\", 39, 18);\r\n    @media (max-width: 959.98px) {\r\n        padding-left: 0;\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n    @media (max-width: 469.98px) {\r\n        font-size: 13px;\r\n    }\r\n}\r\n\r\n.btn {\r\n    @include adaptiveValue(\"padding-top\", 19, 10);\r\n    @include adaptiveValue(\"padding-bottom\", 19, 10);\r\n    @include adaptiveValue(\"width\", 170, 80);\r\n    background-color: var(--dark-cl);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    overflow: hidden;\r\n    z-index: 2;\r\n    outline: 1px solid var(--dark-cl);\r\n    position: relative;\r\n    \r\n\r\n    &:hover {\r\n        span {\r\n            color: var(--dark-cl);\r\n        }\r\n        &::before {\r\n            transform: translateX(0);\r\n        }\r\n        &::after {\r\n            background-color: var(--dark-cl);\r\n        }\r\n    }\r\n\r\n    &::after {\r\n        content: '';\r\n        position: absolute;\r\n        @include adaptiveValue(\"top\", 25, 12);\r\n        @include adaptiveValue(\"right\", 38, 19);\r\n        width: 6px;\r\n        height: 6px;\r\n        border-radius: 50%;\r\n        background-color: #fff;\r\n        @media (max-width: 959.98px) {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    &::before {\r\n        content: '';\r\n        position: absolute;\r\n        height: 100%;\r\n        width: 100%;\r\n        background-color: #fff;\r\n        transform: translateX(-125%);\r\n        transition: transform 0.4s ease;\r\n    }\r\n\r\n    &--reverse {\r\n        background-color: #fff;\r\n        outline: 1px solid #fff;\r\n\r\n        &:hover {\r\n            &::after {\r\n                background-color: #fff;\r\n            }\r\n\r\n            span {\r\n                color: #fff;\r\n            }\r\n        }\r\n        span {\r\n            color: var(--dark-cl);\r\n            font-weight: 500;\r\n        }\r\n\r\n        &::after {\r\n            background-color: var(--dark-cl);\r\n        }\r\n\r\n        &::before {\r\n            background-color: var(--dark-cl);\r\n        }\r\n    }\r\n}\r\n//====================================================================================================\r\n// Directions section\r\n//====================================================================================================\r\n.directions {\r\n    max-width: 1336px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    @include adaptiveValue(\"padding-bottom\", 140, 60);\r\n}\r\n\r\n.works-list {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 30px;\r\n    &__item {\r\n        @include adaptiveValue(\"width\", 304, 200);\r\n        background: linear-gradient(180deg, rgba(0, 0, 0, 0.13) 0%, rgba(0, 0, 0, 0.65) 100%);\r\n        position: relative;\r\n        @include adaptiveValue(\"height\", 400, 280);\r\n        overflow: hidden;\r\n        &:hover {\r\n            backdrop-filter: blur(10px);\r\n           .works-list__info {\r\n                transform: translateY(-16px);\r\n           }\r\n           .works-list__card {\r\n            filter: blur(7px);\r\n           }\r\n        }\r\n    }\r\n\r\n    &__card {\r\n        width: 100%;\r\n        height: 100%;\r\n        filter: blur(0);\r\n        transition: filter 0.5s ease;\r\n    }\r\n\r\n\t&__info {\r\n        position: absolute;\r\n        left: 0;\r\n        bottom: 0;\r\n        @include adaptiveValue(\"padding-right\", 93, 25);\r\n        @include adaptiveValue(\"padding-left\", 50, 25);\r\n        transform: translateY(16px);\r\n        transition: transform 0.5s ease;\r\n\t}\r\n\r\n\t&__text {\r\n        font-size: 20px;\r\n        color: #fff;\r\n        margin: 24px 0 24px 0;\r\n        @media (max-width: 499.98px) {\r\n            font-size: 18px; \r\n        }\r\n\t}\r\n\r\n\t&__more {\r\n        font-size: 16px;\r\n        color: #fff;\r\n        @media (max-width: 499.98px) {\r\n            font-size: 14px; \r\n        }\r\n\t}\r\n}\r\n//====================================================================================================\r\n// Directions section\r\n//====================================================================================================\r\n.featured {\r\n    @include adaptiveValue(\"padding-bottom\", 157, 40);\r\n    &__list {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        @include adaptiveValue(\"gap\", 100, 30);\r\n    }\r\n\r\n    &__item {\r\n        position: relative;\r\n        overflow: hidden;\r\n\r\n        &:hover,\r\n        &:focus {\r\n            .featured__btn {\r\n                opacity: 1;\r\n                visibility: visible;\r\n            }\r\n        }\r\n    }\r\n    &__image {\r\n        @include adaptiveValue(\"width\", 370, 185);\r\n        @include adaptiveValue(\"height\", 428, 214);\r\n    }\r\n\r\n    &__label {   \r\n        font-size: 24px;\r\n        font-weight: 500;\r\n        line-height: 1.4; \r\n        @include adaptiveValue(\"margin-top\", 34, 15);\r\n        @include adaptiveValue(\"margin-bottom\", 8, 4);\r\n        @media (max-width: 599.98px) {\r\n            font-size: 20px;\r\n        }\r\n    }\r\n\r\n    &__type {\r\n        font-size: 15px;\r\n        font-weight: 500;\r\n    }\r\n\r\n    &__image--big {\r\n        @include adaptiveValue(\"width\", 600, 280);\r\n        @include adaptiveValue(\"height\", 428, 194);\r\n    }\r\n\r\n    &__item--top {\r\n        padding-left: 100px;\r\n        padding-top: 160px;\r\n\r\n        @media (max-width: 1199.98px) {\r\n            padding-left: 0;\r\n            padding-top: 0;\r\n        }\r\n    }\r\n\r\n    &__item--bottom {\r\n        margin-top: -160px;\r\n        @media (max-width: 1199.98px) {\r\n            margin-top: 0;\r\n        }\r\n    }\r\n\r\n    &__btn {\r\n        left: 130px;\r\n        top: 200px;\r\n        opacity: 0;\r\n        visibility: hidden;\r\n        transition: opacity 0.5s ease, visibility 0.5s ease, transform 0.4s ease, box-shadow 0.4s ease;\r\n\r\n        @media (max-width: $mobile) {\r\n            left: 100px;\r\n            top: 100px;\r\n        }\r\n        @media (max-width: $mobileSmall) {\r\n            left: 66px;\r\n            top: 77px;\r\n        }\r\n    }\r\n}\r\n.introduction {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: first baseline;\r\n    position: relative;\r\n    @include adaptiveValue(\"margin-bottom\", 48, 25);\r\n    @include adaptiveValue(\"padding-left\", 100, 20);\r\n    @include adaptiveValue(\"padding-right\", 100, 50);\r\n    &__title {\r\n        margin-right: 375px;\r\n        @include adaptiveValue(\"font-size\", 100, 50);\r\n        font-weight: 500;\r\n        line-height: 1.1;\r\n        @include adaptiveValue(\"width\", 425, 250);\r\n        &::after {\r\n            content: '';\r\n            position: absolute;\r\n            @include adaptiveValue(\"width\", 70, 35);\r\n            height: 1px;\r\n            background-color: var(--dark-cl);\r\n            left: 680px;\r\n            top: 80px;\r\n        }\r\n        @media (max-width: 1199.98px) {\r\n            @include adaptiveValue(\"margin-bottom\", 48, 25);\r\n\r\n            &::after {\r\n                @include adaptiveValue(\"left\", 100, 50);\r\n                top: -40px;\r\n            }\r\n        }\r\n    }\r\n}\r\n//====================================================================================================\r\n// Process section\r\n//====================================================================================================\r\n.process {\r\n        background-color: var(--dark-cl);\r\n        height: 664px;\r\n        @media (max-width: 667.98px){\r\n            height: 710px;\r\n        }\r\n\t\t&__container {\r\n            max-width: 1300px;\r\n            z-index: 2;\r\n            overflow: hidden;\r\n            position: relative;\r\n            @include adaptiveValue(\"padding-top\", 149, 40);\r\n            @include adaptiveValue(\"padding-bottom\", 161, 40);\r\n            &::after {\r\n            content: '';\r\n            @include adaptiveValue(\"width\", 641, 200);\r\n            @include adaptiveValue(\"height\", 641, 200);\r\n            position: absolute;\r\n            right: -20%;\r\n            top: -35%;\r\n            border-radius: 50%;\r\n            background-color: #202020;\r\n            @media (max-width: 667.98px){\r\n                display: none;\r\n            }\r\n        }\r\n\t\t}\r\n\r\n\t\t&__title {\r\n            color: #FFF;\r\n            font-size: 48px;\r\n            font-weight: 500;\r\n            line-height: 1.2;\r\n            @include adaptiveValue(\"margin-bottom\", 80, 30); \r\n\r\n            @media (max-width: 667.98px){\r\n                @include adaptiveValue(\"padding-left\", 100, 20);\r\n            }\r\n\r\n            @media (max-width: 419.98px) {\r\n                width: 200px;\r\n            }\r\n\t\t}\r\n\r\n\t\t&__list {\r\n            gap: 24px;\r\n            display: flex;\r\n            flex-direction: column;\r\n            @include adaptiveValue(\"margin-left\", 60, 20);\r\n            @include adaptiveValue(\"margin-right\", 140, 0);\r\n            @media (max-width: 667.98px){\r\n                margin-bottom: 40px;\r\n            }\r\n\t\t}\r\n\r\n\t\t&__item {\r\n            position: relative;\r\n\r\n            &:hover {\r\n                .process__text {\r\n                    color: #fff;\r\n                    transform: translateX(20px);\r\n                    &::before {\r\n                        opacity: 1;\r\n                        transform: translateX(28%)\r\n                    }\r\n                }\r\n                .process__number {\r\n                    opacity: 1;\r\n                }\r\n            }\r\n\t\t}\r\n\r\n\t\t&__text {\r\n            color: #6F6F6F;\r\n            font-size: 24px;\r\n            font-weight: 500;\r\n            line-height: 1.4;\r\n            transition: color 0.4s ease, transform 0.4s ease;\r\n            &::before {\r\n                content: '';\r\n                width: 40px;\r\n                height: 1px;\r\n                background-color: #fff;\r\n                position: absolute;\r\n                left: -90px;\r\n                top: 17px;\r\n                transform: translateX(-100%);\r\n                opacity: 0;\r\n                transition: transform 0.4s ease, opacity 0.4s ease;\r\n                @media (max-width: 667.98px){\r\n                    display: none;\r\n                }\r\n            }\r\n\r\n            transform: translateX(0);\r\n\t\t}\r\n\r\n\t\t&__number {\r\n            opacity: 0;\r\n            font-size: 12px;\r\n            font-weight: 500;\r\n            transition: opacity 0.4s ease;\r\n\t\t}\r\n\r\n}\r\n\r\n.process-wrapper {\r\n    display: flex;\r\n    @media (max-width: 667.98px){\r\n        flex-direction: column;\r\n        justify-content: center;\r\n    }\r\n}\r\n\r\n.block-info {\r\n    @include adaptiveValue(\"width\", 395, 250);\r\n\r\n    @media (max-width: 667.98px){\r\n        @include adaptiveValue(\"padding-left\", 100, 20);\r\n    }\r\n\t\t&__text {\r\n            color: #FFF;\r\n            font-size: 17px;\r\n            font-weight: 400;\r\n            line-height: 1.5;\r\n            @include adaptiveValue(\"margin-bottom\", 53, 25); \r\n            \r\n\t\t}\r\n\r\n\t\t\r\n}\r\n//====================================================================================================\r\n//Create section\r\n//====================================================================================================\r\n.create {\r\n    @include adaptiveValue(\"padding-top\", 160, 40);\r\n    @include adaptiveValue(\"padding-bottom\", 140, 40);\r\n    &__container {\r\n    }\r\n\r\n    &__wrapper {\r\n        display: flex;\r\n        @media (max-width: 1037.98px) {\r\n            flex-direction: column;\r\n        }\r\n    }\r\n}\r\n.img-block {\r\n    @media (max-width: 1037.98px) {\r\n        margin: 0 auto;\r\n    }\r\n    &__item {\r\n        filter: grayscale(100%);\r\n        transition: filter 0.4s ease;\r\n        &:hover {\r\n            filter: grayscale(0);\r\n        }\r\n    }\r\n\r\n    &__item--big {\r\n        margin-bottom: 30px;\r\n        @include adaptiveValue(\"width\", 470, 235);\r\n        @include adaptiveValue(\"height\", 290, 145);\r\n    }\r\n\r\n    &__bottom {\r\n        @include adaptiveValue(\"width\", 575, 300);\r\n    }\r\n\r\n    &__item--small {\r\n        @include adaptiveValue(\"padding-left\", 130, 30);\r\n        @include adaptiveValue(\"margin-right\", 30, 15);\r\n        @include adaptiveValue(\"width\", 270, 135);\r\n        @include adaptiveValue(\"height\", 140, 80);\r\n    }\r\n\r\n    &__item--middle {\r\n        @include adaptiveValue(\"width\", 270, 135);\r\n        @include adaptiveValue(\"height\", 250, 125);\r\n    }\r\n}\r\n.create-info {\r\n    @include adaptiveValue(\"padding-top\", 93, 40);\r\n    &__title {\r\n        font-size: 28px;\r\n        font-weight: 500;\r\n        line-height: 1.3;\r\n        width: 357px;\r\n        @include adaptiveValue(\"margin-bottom\", 37, 20);\r\n    }\r\n\r\n    &__text {\r\n        @include adaptiveValue(\"padding-left\", 90, 20);\r\n        @include adaptiveValue(\"margin-bottom\", 53, 27);\r\n        @include adaptiveValue(\"width\", 438, 280);\r\n        font-size: 17px;\r\n        font-weight: 400;\r\n        line-height: 1.6; \r\n\r\n        @media (max-width: 1037.98px) {\r\n            margin-left: auto;\r\n            margin-right: auto;\r\n        }\r\n\r\n        @media (max-width: 483.98px) {\r\n            @include adaptiveValue(\"padding-left\", 40, 20);\r\n            margin-left: 0;\r\n            margin-right: 0;\r\n        }\r\n    }\r\n\r\n    &__btn {\r\n        @include adaptiveValue(\"margin-left\", 90, 20);\r\n\r\n        @media (max-width: 1037.98px) {\r\n            margin-left: auto;\r\n        }\r\n        @media (max-width: 483.98px) {\r\n            @include adaptiveValue(\"margin-left\", 40, 20);\r\n        }\r\n    }\r\n}\r\n//====================================================================================================\r\n//Values section\r\n//====================================================================================================\r\n.values {\r\n    @include adaptiveValue(\"padding-bottom\", 214, 40);\r\n    &__container {\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 100, 55);\r\n        text-align: center;\r\n        font-weight: 500;\r\n        line-height: 1.2;\r\n        @include adaptiveValue(\"margin-bottom\", 86, 40);\r\n    }\r\n\r\n    &__list {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        @include adaptiveValue(\"gap\", 75, 40);\r\n\r\n        @media (max-width: 651.98px) {\r\n            justify-content: flex-start;\r\n        }\r\n    }\r\n\r\n    &__item {\r\n        @include adaptiveValue(\"width\", 340, 250);\r\n        @include adaptiveValue(\"padding-left\", 100, 50);\r\n        position: relative;\r\n\r\n        @media (max-width: 651.98px) {\r\n            width: 100%;\r\n        }\r\n    }\r\n\r\n    &__img {\r\n        @include adaptiveValue(\"width\", 70, 35);\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n\r\n    &__label {\r\n        @include adaptiveValue(\"font-size\", 24, 20);\r\n        font-weight: 500;\r\n        line-height: 1.4; \r\n        margin-bottom: 17px;\r\n    }\r\n\r\n    &__text {  \r\n        font-size: 16px;\r\n        font-weight: 400;\r\n        line-height: 1.6;\r\n        margin-bottom: 19px;\r\n    }\r\n\r\n    &__more {\r\n        font-size: 16px;\r\n        font-weight: 500;\r\n        line-height: 1.6;\r\n        display: flex;\r\n        align-items: center; \r\n        &:hover {\r\n            .values__icon {\r\n                transform: translateX(15px);\r\n            }\r\n        }\r\n    }\r\n\r\n    &__icon {\r\n        fill: var(--dark-cl);\r\n        transition: transform 0.4s ease;\r\n    }\r\n}\r\n//====================================================================================================\r\n//Swiper section\r\n//====================================================================================================\r\n.swiper-section {\r\n    @include adaptiveValue(\"padding-top\", 128, 40);\r\n    @include adaptiveValue(\"padding-bottom\", 196, 40);\r\n    background-color: var(--dark-cl);\r\n    overflow: hidden;\r\n    &__container {\r\n        position: relative;\r\n        &::after {\r\n            content: '';\r\n            @include adaptiveValue(\"width\", 641, 200);\r\n            @include adaptiveValue(\"height\", 641, 200);\r\n            position: absolute;\r\n            left: 23%;\r\n            top: 23%;\r\n            border-radius: 50%;\r\n            background-color: #202020;\r\n            @media (max-width: 667.98px){\r\n                display: none;\r\n            } \r\n        }\r\n    }\r\n\r\n    &__wrapper {\r\n        z-index: 2;\r\n    }\r\n\r\n    &__slide {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    &__img-quote {\r\n        @include adaptiveValue(\"width\", 38, 19);\r\n        @include adaptiveValue(\"margin-bottom\", 92, 20);\r\n    }\r\n\r\n    &__text {\r\n        color: #FFF;\r\n        @include adaptiveValue(\"font-size\", 24, 15);\r\n        font-weight: 500;\r\n        line-height: 1.4;\r\n        text-align: center; \r\n        @include adaptiveValue(\"width\", 673, 300);\r\n        @include adaptiveValue(\"margin-bottom\", 33, 15);\r\n    }\r\n\r\n    &__author {\r\n        color: #969696;\r\n        font-weight: 400;\r\n        line-height: 1.3;\r\n    }\r\n}\r\n\r\n.second-counter {\r\n    z-index: 2;\r\n    left: 47%;\r\n    @include adaptiveValue(\"bottom\", -120, 0);\r\n    position: relative;\r\n\r\n    @media (max-width: $mobile) {\r\n        display: none;\r\n    }\r\n    &::before {\r\n        content: '';\r\n        position: absolute;\r\n        @include adaptiveValue(\"left\", -548, -135);\r\n        bottom: 405px;\r\n        height: 1px;\r\n        @include adaptiveValue(\"width\", 168, 80);\r\n        background-color: #fff;\r\n\r\n        @media (max-width: $mobile) {\r\n            display: none;\r\n        }\r\n    }\r\n    &::after {\r\n        content: '';\r\n        position: absolute;\r\n        @include adaptiveValue(\"right\", -576, -120);\r\n        bottom: 100px;\r\n        height: 1px;\r\n        @include adaptiveValue(\"width\", 70, 35);\r\n        background-color: #fff;\r\n        transform: rotate(90deg);\r\n\r\n        @media (max-width: $mobile) {\r\n            display: none;\r\n        }\r\n    }\r\n}\r\n\r\n//====================================================================================================\r\n//Clients section\r\n//====================================================================================================\r\n.clients {\r\n    @include adaptiveValue(\"padding-top\", 155, 40);\r\n    @include adaptiveValue(\"padding-bottom\", 155, 40);\r\n    &__container {\r\n        max-width: 975px;\r\n        display: flex;\r\n        align-items: center;\r\n\r\n        @media (max-width: 779.98px) {\r\n            flex-direction: column;\r\n        }\r\n    }\r\n\r\n    &__title-block {\r\n        @include adaptiveValue(\"margin-right\", 260, 0);\r\n\r\n        @media (max-width: 779.98px) {\r\n            margin-right: 0;\r\n            width: 100%;\r\n            text-align: center;\r\n        }\r\n    }\r\n\r\n    &__uppertitle {\r\n        font-weight: 500;\r\n        @include adaptiveValue(\"margin-bottom\", 27, 15);\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 34, 24);\r\n        font-weight: 500;\r\n        line-height: 1.3;\r\n        @include adaptiveValue(\"width\", 268, 125); \r\n\r\n        @media (max-width: 779.98px) {\r\n            width: 100%;\r\n            margin-bottom: 20px;\r\n        }\r\n    }\r\n\r\n    &__list {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: space-between;\r\n        @include adaptiveValue(\"row-gap\", 50, 30);\r\n\r\n        @media (max-width: 779.98px) {\r\n            width: 70%;\r\n            justify-content: center;\r\n        }\r\n    }\r\n\r\n}\r\n//====================================================================================================\r\n//New section\r\n//====================================================================================================\r\n.new {\r\n    @include adaptiveValue(\"padding-bottom\", 160, 40);\r\n    &__container {\r\n        position: relative;\r\n\r\n        &::after {\r\n            content: '';\r\n            position: absolute;\r\n            left: 0;\r\n            @include adaptiveValue(\"bottom\", -160, -70);\r\n            height: 1px;\r\n            width: 100%;\r\n            background-color: var(--dark-cl);\r\n        }\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 48, 24);\r\n        @include adaptiveValue(\"margin-bottom\", 90, 30);\r\n        font-weight: 500;\r\n        line-height: 1.2; \r\n        text-align: center;\r\n    }\r\n\r\n    &__list {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        @include adaptiveValue(\"gap\", 30, 40);\r\n        @include adaptiveValue(\"margin-bottom\", 80, 30);\r\n    }\r\n\r\n    &__item {\r\n        @include adaptiveValue(\"width\", 370, 280);\r\n        position: relative\r\n    }\r\n\r\n    &__date {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        width: 35%;\r\n        padding: 10px 15px;\r\n        background-color: #fff;\r\n        @include adaptiveValue(\"font-size\", 14, 10);\r\n        font-weight: 400;\r\n        line-height: 1.3;\r\n    }\r\n\r\n    &__image {\r\n        @include adaptiveValue(\"margin-bottom\", 27, 15);\r\n        width: 100%;\r\n    }\r\n\r\n    &__text {\r\n        @include adaptiveValue(\"font-size\", 20, 16);\r\n        @include adaptiveValue(\"width\", 294, 260);\r\n        font-weight: 500;\r\n        line-height: 1.5; \r\n    }\r\n\r\n    &__btn {\r\n        margin: 0 auto;\r\n    }\r\n}\r\n//====================================================================================================\r\n//Work section\r\n//====================================================================================================\r\n.work {\r\n    @include adaptiveValue(\"padding-top\", 158, 40);\r\n    @include adaptiveValue(\"padding-bottom\", 158, 40);\r\n    &__container {\r\n        max-width: 960px;\r\n        position: relative;\r\n    }\r\n\r\n    &__block {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n\r\n        @media (max-width: 649.98px) {\r\n            flex-direction: column;\r\n            justify-content: center;\r\n        }\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"width\", 483, 250);\r\n        @include adaptiveValue(\"font-size\", 100, 50);\r\n        font-weight: 500;\r\n        line-height: 1.2;\r\n        span {\r\n            position: relative;\r\n            z-index: 2;\r\n            &::after {\r\n                content: '';\r\n                position: absolute;\r\n                left: 0;\r\n                bottom: 0;\r\n                width: 100%;\r\n                height: 1px;\r\n                background-color: var(--dark-cl);\r\n            }\r\n        }\r\n    }\r\n\r\n    &__img {\r\n        @include adaptiveValue(\"width\", 230, 115);\r\n        position: absolute;\r\n        left: 47%;\r\n        bottom: 38px;\r\n\r\n        @media (max-width: 649.98px) {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    &__link {\r\n        transition: transform 0.4s ease;\r\n        &:hover {\r\n            transform: translateX(50%);\r\n        }\r\n    }\r\n\r\n    \r\n}\r\n\r\n\r\n\r\n",":root {\r\n    --dark-cl: #0E0E0E;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("97a944a80fe3917ca3e3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kMWU4Y2ZiNmUxOWM2NzdjZWM1OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw4R0FBOEcsa0JBQWtCO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlZQUFpWSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxZQUFZLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxTQUFTLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxPQUFPLFdBQVcsV0FBVyxPQUFPLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE1BQU0sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLFVBQVUsT0FBTyxNQUFNLE9BQU8sV0FBVyxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsVUFBVSxRQUFRLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sT0FBTyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLE1BQU0sT0FBTyxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxRQUFRLE9BQU8sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFFBQVEsT0FBTyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLE1BQU0sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsUUFBUSxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFFBQVEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLFFBQVEsVUFBVSxXQUFXLFFBQVEsUUFBUSxVQUFVLFdBQVcsUUFBUSxRQUFRLFVBQVUsUUFBUSxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFFBQVEsUUFBUSxLQUFLLFVBQVUsUUFBUSxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLFdBQVcsT0FBTyxNQUFNLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLEtBQUssV0FBVyxPQUFPLE1BQU0sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLE1BQU0sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLE1BQU0sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLFdBQVcsT0FBTyxNQUFNLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxVQUFVLFFBQVEsT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxL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QixzQkFBc0IseUJBQXlCLDhDQUE4Qyw4QkFBOEIsYUFBYSxTQUFTLHFCQUFxQiw0Q0FBNEMscUJBQXFCLDJDQUEyQyxhQUFhLFNBQVMsaUJBQWlCLDBCQUEwQiwyQkFBMkIsS0FBSyxtQkFBbUI7QUFDdnY0RjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUNseUp2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbioge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDMyMHB4O1xufVxuXG5ib2R5IHtcbiAgY29sb3I6ICMwRTBFMEU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LWZhbWlseTogXCJJbnRlclwiO1xuICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxudWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5pbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4ubG9jayBib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xufVxuLndyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQHN1cHBvcnRzIChvdmVyZmxvdzogY2xpcCkge1xuICAud3JhcHBlciB7XG4gICAgb3ZlcmZsb3c6IGNsaXA7XG4gIH1cbn1cbi53cmFwcGVyID4gbWFpbiB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLndyYXBwZXIgPiAqIHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4vKlxuKGkpINCh0YLQuNC70ZYg0LHRg9C00YPRgtGMINC30LDRgdGC0L7RgdC+0LLRg9Cy0LDRgtC40YHRjCDQtNC+XG7QstGB0ZbRhSDQutC70LDRgdGW0LIsINGJ0L4g0LzRltGB0YLRj9GC0YwgKl9fY29udGFpbmVyXG7QndCw0L/RgNC40LrQu9Cw0LQgaGVhZGVyX19jb250YWluZXIsIG1haW5fX2NvbnRhaW5lciDRliDRgi7Qvy5cbtCh0L3RltC/0L/QtdGCIChIVE1MKTogY250XG4qL1xuW2NsYXNzKj1fX2NvbnRhaW5lcl0ge1xuICBtYXgtd2lkdGg6IDc1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAwLjkzNzVyZW07XG59XG5cbmJvZHk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjhzIGVhc2UgMHM7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAxNDk7XG59XG5cbi5wb3B1cC1zaG93IGJvZHk6OmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnBvcHVwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDMwcHggMTBweDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjhzIGVhc2UgMHM7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5wb3B1cF9zaG93IHtcbiAgei1pbmRleDogMTUwO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5wb3B1cF9zaG93IC5wb3B1cF9fY29udGVudCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cF9fd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wb3B1cF9fY29udGVudCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSAwcztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4ubG9jayAucG9wdXBfX2NvbnRlbnQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ucG9wdXAtc3dpcGVyX19zbGlkZSB7XG4gIHdpZHRoOiA3NzBweDtcbn1cbi5wb3B1cC1zd2lwZXJfX2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuW2NsYXNzKj0taWJnXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbltjbGFzcyo9LWliZ10gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5bY2xhc3MqPS1pYmctLWNvbnRhaW5dIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbiAgY29sb3I6ICNmZmY7XG59XG4uaGVhZGVyX19tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAuaGVhZGVyX19tZW51IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiA1MnB4O1xuICB9XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmxvZ28ge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC44MjM4NjM2MzY0cmVtICArICAwLjU2ODE4MTgxODJ2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5sb2dvIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuODIzODYzNjM2NHJlbSAgKyAgMC41NjgxODE4MTgydncgLCAxLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuODIzODYzNjM2NHJlbSAgKyAgMC41NjgxODE4MTgydncgLCAxLjI1cmVtICkpIHtcbiAgICAubG9nbyB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC45Mzc1cmVtICsgMC4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmxvZ28ge1xuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICB9XG59XG5cbi5tZW51X19ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogMTA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubWVudV9fYm9keSB7XG4gICAgcGFkZGluZy10b3A6IDIuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fYm9keSB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fYm9keSB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygxLjU2MjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19ib2R5IHtcbiAgICBwYWRkaW5nLXRvcDogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubWVudV9fYm9keSB7XG4gICAgcGFkZGluZy1ib3R0b206IDIuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fYm9keSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fYm9keSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygxLjU2MjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19ib2R5IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLm1lbnVfX2JvZHkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuLm1lbnVfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm1lbnVfX2xpc3Qge1xuICAgIG1hcmdpbi1yaWdodDogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMy4xMjVyZW0gLCAyLjg5NzcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMy43NXJlbSApKSB7XG4gICAgLm1lbnVfX2xpc3Qge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjbGFtcCggMy4xMjVyZW0gLCAyLjg5NzcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMy43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAzLjEyNXJlbSAsIDIuODk3NzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAzLjc1cmVtICkpIHtcbiAgICAubWVudV9fbGlzdCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMy4xMjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19saXN0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubWVudV9fbGlzdCB7XG4gICAgZ2FwOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGdhcDogY2xhbXAoIDEuODc1cmVtICwgMS42NDc3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuNXJlbSApKSB7XG4gICAgLm1lbnVfX2xpc3Qge1xuICAgICAgZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAxLjY0NzcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGdhcDogY2xhbXAoIDEuODc1cmVtICwgMS42NDc3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuNXJlbSApKSB7XG4gICAgLm1lbnVfX2xpc3Qge1xuICAgICAgZ2FwOiBjYWxjKDEuODc1cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9fbGlzdCB7XG4gICAgZ2FwOiAxLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5tZW51X19saXN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZsZXg6IDI7XG4gIH1cbn1cbi5tZW51X19saW5rIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubWVudV9fbGluayB7XG4gICAgcGFkZGluZy10b3A6IDIuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fbGluayB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fbGluayB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygxLjU2MjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19saW5rIHtcbiAgICBwYWRkaW5nLXRvcDogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubWVudV9fbGluayB7XG4gICAgcGFkZGluZy1ib3R0b206IDIuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fbGluayB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICkpIHtcbiAgICAubWVudV9fbGluayB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygxLjU2MjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19saW5rIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLm1lbnVfX2xpbmsge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxufVxuLm1lbnVfX2xpbms6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IDA7XG4gIHRvcDogNDVweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cbi5tZW51X19saW5rOmhvdmVyOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4ubWVudV9fbGluay5jdXJyZW50OjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5zb2NpYWxzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnNvY2lhbHMtbGlzdCB7XG4gICAgZ2FwOiAwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGdhcDogY2xhbXAoIDAuNjI1cmVtICwgMC41MTEzNjM2MzY0cmVtICArICAwLjU2ODE4MTgxODJ2dyAsIDAuOTM3NXJlbSApKSB7XG4gICAgLnNvY2lhbHMtbGlzdCB7XG4gICAgICBnYXA6IGNsYW1wKCAwLjYyNXJlbSAsIDAuNTExMzYzNjM2NHJlbSAgKyAgMC41NjgxODE4MTgydncgLCAwLjkzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMC42MjVyZW0gLCAwLjUxMTM2MzYzNjRyZW0gICsgIDAuNTY4MTgxODE4MnZ3ICwgMC45Mzc1cmVtICkpIHtcbiAgICAuc29jaWFscy1saXN0IHtcbiAgICAgIGdhcDogY2FsYygwLjYyNXJlbSArIDAuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zb2NpYWxzLWxpc3Qge1xuICAgIGdhcDogMC42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAuc29jaWFscy1saXN0IHtcbiAgICBnYXA6IDMwcHg7XG4gICAgZmxleDogMTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5zb2NpYWxzLWxpc3RfX2ljb24ge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLm1lbnVfX2JvZHkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUycHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTgwcHgpIHtcbiAgLmljb24tbWVudSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5pY29uLW1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMS41NjI1cmVtO1xuICAgIGhlaWdodDogMC44NzVyZW07XG4gICAgei1pbmRleDogNTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSBhbmQgKGFueS1ob3Zlcjogbm9uZSkge1xuICAuaWNvbi1tZW51IHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAuaWNvbi1tZW51IHNwYW4sIC5pY29uLW1lbnU6OmJlZm9yZSwgLmljb24tbWVudTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgICByaWdodDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAwLjEyNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gIC5pY29uLW1lbnU6OmJlZm9yZSB7XG4gICAgdG9wOiAwO1xuICB9XG4gIC5pY29uLW1lbnU6OmFmdGVyIHtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuaWNvbi1tZW51IHNwYW4ge1xuICAgIHRvcDogY2FsYyg1MCUgLSAwLjA2MjVyZW0pO1xuICB9XG4gIC5tZW51LW9wZW4gLmljb24tbWVudSArIC5tZW51X19ib2R5IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51IHNwYW4ge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIC5tZW51LW9wZW4gLmljb24tbWVudTo6YmVmb3JlIHtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMC4wNjI1cmVtKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIC5tZW51LW9wZW4gLmljb24tbWVudTo6YWZ0ZXIge1xuICAgIGJvdHRvbTogY2FsYyg1MCUgLSAwLjA2MjVyZW0pO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZm9vdGVyIHtcbiAgICBwYWRkaW5nLXRvcDogNy41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIDAuNjU5MDkwOTA5MXJlbSAgKyAgOS4yMDQ1NDU0NTQ1dncgLCA3LjU2MjVyZW0gKSkge1xuICAgIC5mb290ZXIge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAwLjY1OTA5MDkwOTFyZW0gICsgIDkuMjA0NTQ1NDU0NXZ3ICwgNy41NjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgMC42NTkwOTA5MDkxcmVtICArICA5LjIwNDU0NTQ1NDV2dyAsIDcuNTYyNXJlbSApKSB7XG4gICAgLmZvb3RlciB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygyLjVyZW0gKyA1LjA2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9vdGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZm9vdGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogOC4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC4zNzVyZW0gLCAzLjAxMTM2MzYzNjRyZW0gICsgIDYuODE4MTgxODE4MnZ3ICwgOC4xMjVyZW0gKSkge1xuICAgIC5mb290ZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCA0LjM3NXJlbSAsIDMuMDExMzYzNjM2NHJlbSAgKyAgNi44MTgxODE4MTgydncgLCA4LjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMy4wMTEzNjM2MzY0cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDguMTI1cmVtICkpIHtcbiAgICAuZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDQuMzc1cmVtICsgMy43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiA0LjM3NXJlbTtcbiAgfVxufVxuLmZvb3Rlcl9fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZvb3Rlcl9fY29udGFpbmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0yNSU7XG4gIHRvcDogMjMlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZm9vdGVyX19jb250YWluZXI6OmFmdGVyIHtcbiAgICB3aWR0aDogNDAuMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICkpIHtcbiAgICAuZm9vdGVyX19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKSkge1xuICAgIC5mb290ZXJfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IGNhbGMoMTIuNXJlbSArIDI3LjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9vdGVyX19jb250YWluZXI6OmFmdGVyIHtcbiAgICB3aWR0aDogMTIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZvb3Rlcl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgaGVpZ2h0OiA0MC4wNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICkpIHtcbiAgICAuZm9vdGVyX19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApKSB7XG4gICAgLmZvb3Rlcl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTIuNXJlbSArIDI3LjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9vdGVyX19jb250YWluZXI6OmFmdGVyIHtcbiAgICBoZWlnaHQ6IDEyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkge1xuICAuZm9vdGVyX19jb250YWluZXI6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5ibG9jay13cmFwcGVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuYmxvY2std3JhcHBlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDgwcHg7XG4gIH1cbn1cblxuLmxlZnQtYmxvY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubGVmdC1ibG9jayB7XG4gICAgd2lkdGg6IDI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxNC43NzI3MjcyNzI3cmVtICArICAxMy42MzYzNjM2MzY0dncgLCAyNXJlbSApKSB7XG4gICAgLmxlZnQtYmxvY2sge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTQuNzcyNzI3MjcyN3JlbSAgKyAgMTMuNjM2MzYzNjM2NHZ3ICwgMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTQuNzcyNzI3MjcyN3JlbSAgKyAgMTMuNjM2MzYzNjM2NHZ3ICwgMjVyZW0gKSkge1xuICAgIC5sZWZ0LWJsb2NrIHtcbiAgICAgIHdpZHRoOiBjYWxjKDE3LjVyZW0gKyA3LjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubGVmdC1ibG9jayB7XG4gICAgd2lkdGg6IDE3LjVyZW07XG4gIH1cbn1cbi5sZWZ0LWJsb2NrOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNDAlO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAyMDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmxlZnQtYmxvY2s6OmFmdGVyIHtcbiAgICBoZWlnaHQ6IDE1MCU7XG4gIH1cbn1cbi5sZWZ0LWJsb2NrX190ZXh0IHtcbiAgd2lkdGg6IDI0MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubGVmdC1ibG9ja19fdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi10b3A6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjU5NjU5MDkwOTFyZW0gICsgIDEuNzA0NTQ1NDU0NXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5sZWZ0LWJsb2NrX190ZXh0IHtcbiAgICAgIG1hcmdpbi10b3A6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjU5NjU5MDkwOTFyZW0gICsgIDEuNzA0NTQ1NDU0NXZ3ICwgMS44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLXRvcDogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNTk2NTkwOTA5MXJlbSAgKyAgMS43MDQ1NDU0NTQ1dncgLCAxLjg3NXJlbSApKSB7XG4gICAgLmxlZnQtYmxvY2tfX3RleHQge1xuICAgICAgbWFyZ2luLXRvcDogY2FsYygwLjkzNzVyZW0gKyAwLjkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubGVmdC1ibG9ja19fdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMC45Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubGVmdC1ibG9ja19fdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMjU1NjgxODE4MnJlbSAgKyAgNC42NTkwOTA5MDkxdncgLCA0Ljc1cmVtICkpIHtcbiAgICAubGVmdC1ibG9ja19fdGV4dCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMi4xODc1cmVtICwgMS4yNTU2ODE4MTgycmVtICArICA0LjY1OTA5MDkwOTF2dyAsIDQuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMjU1NjgxODE4MnJlbSAgKyAgNC42NTkwOTA5MDkxdncgLCA0Ljc1cmVtICkpIHtcbiAgICAubGVmdC1ibG9ja19fdGV4dCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDIuMTg3NXJlbSArIDIuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5sZWZ0LWJsb2NrX190ZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjE4NzVyZW07XG4gIH1cbn1cblxuLmZvb3Rlci1sb2dvIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZvb3Rlci1sb2dvIHtcbiAgICBmb250LXNpemU6IDIuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxLjI1cmVtICwgMC45MzE4MTgxODE4cmVtICArICAxLjU5MDkwOTA5MDl2dyAsIDIuMTI1cmVtICkpIHtcbiAgICAuZm9vdGVyLWxvZ28ge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMS4yNXJlbSAsIDAuOTMxODE4MTgxOHJlbSAgKyAgMS41OTA5MDkwOTA5dncgLCAyLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAxLjI1cmVtICwgMC45MzE4MTgxODE4cmVtICArICAxLjU5MDkwOTA5MDl2dyAsIDIuMTI1cmVtICkpIHtcbiAgICAuZm9vdGVyLWxvZ28ge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDEuMjVyZW0gKyAwLjg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb290ZXItbG9nbyB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jb250YWN0cyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNS4wNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMi41cmVtICwgMS41NjgxODE4MTgycmVtICArICA0LjY1OTA5MDkwOTF2dyAsIDUuMDYyNXJlbSApKSB7XG4gICAgLmNvbnRhY3RzIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAxLjU2ODE4MTgxODJyZW0gICsgIDQuNjU5MDkwOTA5MXZ3ICwgNS4wNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAxLjU2ODE4MTgxODJyZW0gICsgIDQuNjU5MDkwOTA5MXZ3ICwgNS4wNjI1cmVtICkpIHtcbiAgICAuY29udGFjdHMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygyLjVyZW0gKyAyLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY29udGFjdHMge1xuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgfVxufVxuLmNvbnRhY3RzX19saW5rIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS43O1xufVxuXG4uc29jaWFscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjBweDtcbn1cblxuLnJpZ2h0LWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5yaWdodC1ibG9jayB7XG4gICAgbWFyZ2luLWxlZnQ6IDYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1sZWZ0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTIuMjcyNzI3MTg3NXJlbSAgKyAgMTEuMzYzNjM2MjV2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5yaWdodC1ibG9jayB7XG4gICAgICBtYXJnaW4tbGVmdDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIC0yLjI3MjcyNzE4NzVyZW0gICsgIDExLjM2MzYzNjI1dncgLCA2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1sZWZ0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTIuMjcyNzI3MTg3NXJlbSAgKyAgMTEuMzYzNjM2MjV2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5yaWdodC1ibG9jayB7XG4gICAgICBtYXJnaW4tbGVmdDogY2FsYygwLjAwMDAwMDA2MjVyZW0gKyA2LjI0OTk5OTkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAucmlnaHQtYmxvY2sge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjAwMDAwMDA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5yaWdodC1ibG9jayB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cblxuLnN1YnNjcmliZSB7XG4gIGNvbG9yOiAjOTY5Njk2O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3Vic2NyaWJlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgMC43OTU0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDIuNXJlbSApKSB7XG4gICAgLnN1YnNjcmliZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIDAuNzk1NDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAyLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAwLjc5NTQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMi41cmVtICkpIHtcbiAgICAuc3Vic2NyaWJlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS4yNXJlbSArIDEuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3Vic2NyaWJlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICB9XG59XG5cbi5mb290ZXItZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mb290ZXItZm9ybSB7XG4gICAgd2lkdGg6IDM1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTAuOTA5MDkwOTA5MXJlbSAgKyAgMzIuOTU0NTQ1NDU0NXZ3ICwgMzUuNjI1cmVtICkpIHtcbiAgICAuZm9vdGVyLWZvcm0ge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTAuOTA5MDkwOTA5MXJlbSAgKyAgMzIuOTU0NTQ1NDU0NXZ3ICwgMzUuNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDEwLjkwOTA5MDkwOTFyZW0gICsgIDMyLjk1NDU0NTQ1NDV2dyAsIDM1LjYyNXJlbSApKSB7XG4gICAgLmZvb3Rlci1mb3JtIHtcbiAgICAgIHdpZHRoOiBjYWxjKDE3LjVyZW0gKyAxOC4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9vdGVyLWZvcm0ge1xuICAgIHdpZHRoOiAxNy41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZm9vdGVyLWZvcm0ge1xuICAgIG1hcmdpbi1ib3R0b206IDguMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDMuNzVyZW0gLCAyLjEzNjM2MzYzNjRyZW0gICsgIDguMDY4MTgxODE4MnZ3ICwgOC4xODc1cmVtICkpIHtcbiAgICAuZm9vdGVyLWZvcm0ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDMuNzVyZW0gLCAyLjEzNjM2MzYzNjRyZW0gICsgIDguMDY4MTgxODE4MnZ3ICwgOC4xODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAzLjc1cmVtICwgMi4xMzYzNjM2MzY0cmVtICArICA4LjA2ODE4MTgxODJ2dyAsIDguMTg3NXJlbSApKSB7XG4gICAgLmZvb3Rlci1mb3JtIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMy43NXJlbSArIDQuNDM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb290ZXItZm9ybSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMy43NXJlbTtcbiAgfVxufVxuLmZvb3Rlci1mb3JtX19pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZm9vdGVyLWZvcm1fX2lucHV0IHtcbiAgICB3aWR0aDogMzUuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxMC45MDkwOTA5MDkxcmVtICArICAzMi45NTQ1NDU0NTQ1dncgLCAzNS42MjVyZW0gKSkge1xuICAgIC5mb290ZXItZm9ybV9faW5wdXQge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTAuOTA5MDkwOTA5MXJlbSAgKyAgMzIuOTU0NTQ1NDU0NXZ3ICwgMzUuNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDEwLjkwOTA5MDkwOTFyZW0gICsgIDMyLjk1NDU0NTQ1NDV2dyAsIDM1LjYyNXJlbSApKSB7XG4gICAgLmZvb3Rlci1mb3JtX19pbnB1dCB7XG4gICAgICB3aWR0aDogY2FsYygxNy41cmVtICsgMTguMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvb3Rlci1mb3JtX19pbnB1dCB7XG4gICAgd2lkdGg6IDE3LjVyZW07XG4gIH1cbn1cbi5mb290ZXItZm9ybV9faW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAxN3B4O1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZSwgYm90dG9tIDAuNHMgZWFzZTtcbn1cbi5mb290ZXItZm9ybV9faW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbiAgYm90dG9tOiAzNHB4O1xufVxuLmZvb3Rlci1mb3JtX19idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDE3cHg7XG4gIHdpZHRoOiA2NHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5mb290ZXItZm9ybV9fYnV0dG9uOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogNXB4O1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4ubGlua3MtYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiAyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ2MS45OHB4KSB7XG4gIC5saW5rcy1ibG9jayB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ2MS45OHB4KSBhbmQgKG1pbi13aWR0aDogNzVlbSkge1xuICAubGlua3MtYmxvY2sge1xuICAgIGdhcDogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ2MS45OHB4KSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChnYXA6IGNsYW1wKCAyLjVyZW0gLCAyLjA0NTQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMy43NXJlbSApKSB7XG4gICAgLmxpbmtzLWJsb2NrIHtcbiAgICAgIGdhcDogY2xhbXAoIDIuNXJlbSAsIDIuMDQ1NDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAzLjc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGdhcDogY2xhbXAoIDIuNXJlbSAsIDIuMDQ1NDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAzLjc1cmVtICkpIHtcbiAgICAubGlua3MtYmxvY2sge1xuICAgICAgZ2FwOiBjYWxjKDIuNXJlbSArIDEuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDYxLjk4cHgpIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5saW5rcy1ibG9jayB7XG4gICAgZ2FwOiAyLjVyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZvb3Rlci1uYXY6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogNy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMy43NXJlbSAsIDIuMjk1NDU0NTQ1NXJlbSAgKyAgNy4yNzI3MjcyNzI3dncgLCA3Ljc1cmVtICkpIHtcbiAgICAuZm9vdGVyLW5hdjpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNsYW1wKCAzLjc1cmVtICwgMi4yOTU0NTQ1NDU1cmVtICArICA3LjI3MjcyNzI3Mjd2dyAsIDcuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMy43NXJlbSAsIDIuMjk1NDU0NTQ1NXJlbSAgKyAgNy4yNzI3MjcyNzI3dncgLCA3Ljc1cmVtICkpIHtcbiAgICAuZm9vdGVyLW5hdjpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMy43NXJlbSArIDQgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9vdGVyLW5hdjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDYxLjk4cHgpIHtcbiAgLmZvb3Rlci1uYXY6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufVxuLmZvb3Rlci1uYXY6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mb290ZXItbmF2IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDUuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMi41cmVtICwgMS40MDkwOTA5MDkxcmVtICArICA1LjQ1NDU0NTQ1NDV2dyAsIDUuNXJlbSApKSB7XG4gICAgLmZvb3Rlci1uYXYge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjbGFtcCggMi41cmVtICwgMS40MDkwOTA5MDkxcmVtICArICA1LjQ1NDU0NTQ1NDV2dyAsIDUuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAyLjVyZW0gLCAxLjQwOTA5MDkwOTFyZW0gICsgIDUuNDU0NTQ1NDU0NXZ3ICwgNS41cmVtICkpIHtcbiAgICAuZm9vdGVyLW5hdiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMi41cmVtICsgMyAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb290ZXItbmF2IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ2MS45OHB4KSB7XG4gIC5mb290ZXItbmF2IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn1cbi5mb290ZXItbmF2X19saW5rIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS43O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZm9vdGVyLW5hdl9fbGluazo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMDtcbiAgdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuLmZvb3Rlci1uYXZfX2xpbms6aG92ZXI6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmZvb3Rlci1jcmVkaXRzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAxNXB4O1xuICB6LWluZGV4OiAyO1xuICBjb2xvcjogIzk2OTY5NjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS4zO1xuICB3aWR0aDogMTQ5cHg7XG4gIHRleHQtd3JhcDogbm93cmFwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYzMS45OHB4KSB7XG4gIC5mb290ZXItY3JlZGl0cyB7XG4gICAgYm90dG9tOiAtNTBweDtcbiAgfVxufVxuXG4uaGVybyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaGVybyB7XG4gICAgaGVpZ2h0OiAzMHJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggMTYuODc1cmVtICwgMTIuMTAyMjcyNzI3M3JlbSAgKyAgMjMuODYzNjM2MzYzNnZ3ICwgMzByZW0gKSkge1xuICAgIC5oZXJvIHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDE2Ljg3NXJlbSAsIDEyLjEwMjI3MjcyNzNyZW0gICsgIDIzLjg2MzYzNjM2MzZ2dyAsIDMwcmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDE2Ljg3NXJlbSAsIDEyLjEwMjI3MjcyNzNyZW0gICsgIDIzLjg2MzYzNjM2MzZ2dyAsIDMwcmVtICkpIHtcbiAgICAuaGVybyB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTYuODc1cmVtICsgMTMuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmhlcm8ge1xuICAgIGhlaWdodDogMTYuODc1cmVtO1xuICB9XG59XG4uaGVyb19fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3dpcGVyLWNvdW50ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLWNvdW50ZXIge1xuICAgIGJvdHRvbTogNC4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGJvdHRvbTogY2xhbXAoIDEuODc1cmVtICwgMC45NjU5MDkwOTA5cmVtICArICA0LjU0NTQ1NDU0NTV2dyAsIDQuMzc1cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXIge1xuICAgICAgYm90dG9tOiBjbGFtcCggMS44NzVyZW0gLCAwLjk2NTkwOTA5MDlyZW0gICsgIDQuNTQ1NDU0NTQ1NXZ3ICwgNC4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoYm90dG9tOiBjbGFtcCggMS44NzVyZW0gLCAwLjk2NTkwOTA5MDlyZW0gICsgIDQuNTQ1NDU0NTQ1NXZ3ICwgNC4zNzVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlciB7XG4gICAgICBib3R0b206IGNhbGMoMS44NzVyZW0gKyAyLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLWNvdW50ZXIge1xuICAgIGJvdHRvbTogMS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItY291bnRlciB7XG4gICAgbGVmdDogMTIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGVmdDogY2xhbXAoIDAuOTM3NXJlbSAsIC0zLjI2NzA0NTQ1NDVyZW0gICsgIDIxLjAyMjcyNzI3Mjd2dyAsIDEyLjVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlciB7XG4gICAgICBsZWZ0OiBjbGFtcCggMC45Mzc1cmVtICwgLTMuMjY3MDQ1NDU0NXJlbSAgKyAgMjEuMDIyNzI3MjcyN3Z3ICwgMTIuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChsZWZ0OiBjbGFtcCggMC45Mzc1cmVtICwgLTMuMjY3MDQ1NDU0NXJlbSAgKyAgMjEuMDIyNzI3MjcyN3Z3ICwgMTIuNXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyIHtcbiAgICAgIGxlZnQ6IGNhbGMoMC45Mzc1cmVtICsgMTEuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItY291bnRlciB7XG4gICAgbGVmdDogMC45Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLWNvdW50ZXIge1xuICAgIHdpZHRoOiA1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDMuMTI1cmVtICwgMi40NDMxODE4MTgycmVtICArICAzLjQwOTA5MDkwOTF2dyAsIDVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlciB7XG4gICAgICB3aWR0aDogY2xhbXAoIDMuMTI1cmVtICwgMi40NDMxODE4MTgycmVtICArICAzLjQwOTA5MDkwOTF2dyAsIDVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAzLjEyNXJlbSAsIDIuNDQzMTgxODE4MnJlbSAgKyAgMy40MDkwOTA5MDkxdncgLCA1cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXIge1xuICAgICAgd2lkdGg6IGNhbGMoMy4xMjVyZW0gKyAxLjg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItY291bnRlciB7XG4gICAgd2lkdGg6IDMuMTI1cmVtO1xuICB9XG59XG4uc3dpcGVyLWNvdW50ZXJfX2l0ZW06OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW06OmFmdGVyIHtcbiAgICB3aWR0aDogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAwLjYyNXJlbSAsIDAuMzk3NzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAxLjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW06OmFmdGVyIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMC42MjVyZW0gLCAwLjM5NzcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDAuNjI1cmVtICwgMC4zOTc3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlcl9faXRlbTo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IGNhbGMoMC42MjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItY291bnRlcl9faXRlbTo6YWZ0ZXIge1xuICAgIHdpZHRoOiAwLjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyX19pdGVtOjphZnRlciB7XG4gICAgbGVmdDogMS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGxlZnQ6IGNsYW1wKCAxLjE4NzVyZW0gLCAwLjkzNzVyZW0gICsgIDEuMjV2dyAsIDEuODc1cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW06OmFmdGVyIHtcbiAgICAgIGxlZnQ6IGNsYW1wKCAxLjE4NzVyZW0gLCAwLjkzNzVyZW0gICsgIDEuMjV2dyAsIDEuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGxlZnQ6IGNsYW1wKCAxLjE4NzVyZW0gLCAwLjkzNzVyZW0gICsgIDEuMjV2dyAsIDEuODc1cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW06OmFmdGVyIHtcbiAgICAgIGxlZnQ6IGNhbGMoMS4xODc1cmVtICsgMC42ODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyX19pdGVtOjphZnRlciB7XG4gICAgbGVmdDogMS4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW1zcGFuIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC43MDQ1NDU0NTQ1cmVtICArICAwLjIyNzI3MjcyNzN2dyAsIDAuODc1cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW1zcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjcwNDU0NTQ1NDVyZW0gICsgIDAuMjI3MjcyNzI3M3Z3ICwgMC44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNzA0NTQ1NDU0NXJlbSAgKyAgMC4yMjcyNzI3MjczdncgLCAwLjg3NXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyX19pdGVtc3BhbiB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC43NXJlbSArIDAuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyX19pdGVtc3BhbiB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB9XG59XG5cbi5ibG9jay10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogNDBweCAwIDQwcHggMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5ibG9jay10aXRsZSB7XG4gICAgdG9wOiAxMC45Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh0b3A6IGNsYW1wKCAzLjEyNXJlbSAsIDAuMjg0MDkwOTA5MXJlbSAgKyAgMTQuMjA0NTQ1NDU0NXZ3ICwgMTAuOTM3NXJlbSApKSB7XG4gICAgLmJsb2NrLXRpdGxlIHtcbiAgICAgIHRvcDogY2xhbXAoIDMuMTI1cmVtICwgMC4yODQwOTA5MDkxcmVtICArICAxNC4yMDQ1NDU0NTQ1dncgLCAxMC45Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHRvcDogY2xhbXAoIDMuMTI1cmVtICwgMC4yODQwOTA5MDkxcmVtICArICAxNC4yMDQ1NDU0NTQ1dncgLCAxMC45Mzc1cmVtICkpIHtcbiAgICAuYmxvY2stdGl0bGUge1xuICAgICAgdG9wOiBjYWxjKDMuMTI1cmVtICsgNy44MTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJsb2NrLXRpdGxlIHtcbiAgICB0b3A6IDMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYmxvY2stdGl0bGUge1xuICAgIGxlZnQ6IDEyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGxlZnQ6IGNsYW1wKCAxLjg3NXJlbSAsIC0xLjk4ODYzNjM2MzZyZW0gICsgIDE5LjMxODE4MTgxODJ2dyAsIDEyLjVyZW0gKSkge1xuICAgIC5ibG9jay10aXRsZSB7XG4gICAgICBsZWZ0OiBjbGFtcCggMS44NzVyZW0gLCAtMS45ODg2MzYzNjM2cmVtICArICAxOS4zMTgxODE4MTgydncgLCAxMi41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGxlZnQ6IGNsYW1wKCAxLjg3NXJlbSAsIC0xLjk4ODYzNjM2MzZyZW0gICsgIDE5LjMxODE4MTgxODJ2dyAsIDEyLjVyZW0gKSkge1xuICAgIC5ibG9jay10aXRsZSB7XG4gICAgICBsZWZ0OiBjYWxjKDEuODc1cmVtICsgMTAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJsb2NrLXRpdGxlIHtcbiAgICBsZWZ0OiAxLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJsb2NrLXRpdGxlIHtcbiAgICB3aWR0aDogMzIuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTguNzVyZW0gLCAxMy44NDA5MDkwOTA5cmVtICArICAyNC41NDU0NTQ1NDU1dncgLCAzMi4yNXJlbSApKSB7XG4gICAgLmJsb2NrLXRpdGxlIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTguNzVyZW0gLCAxMy44NDA5MDkwOTA5cmVtICArICAyNC41NDU0NTQ1NDU1dncgLCAzMi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE4Ljc1cmVtICwgMTMuODQwOTA5MDkwOXJlbSAgKyAgMjQuNTQ1NDU0NTQ1NXZ3ICwgMzIuMjVyZW0gKSkge1xuICAgIC5ibG9jay10aXRsZSB7XG4gICAgICB3aWR0aDogY2FsYygxOC43NXJlbSArIDEzLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYmxvY2stdGl0bGUge1xuICAgIHdpZHRoOiAxOC43NXJlbTtcbiAgfVxufVxuLmJsb2NrLXRpdGxlX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXNoYWRvdzogNHB4IDRweCAycHggcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJsb2NrLXRpdGxlX190aXRsZSB7XG4gICAgZm9udC1zaXplOiA0LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMi4yNXJlbSAsIDEuNDc3MjcyNzI3M3JlbSAgKyAgMy44NjM2MzYzNjM2dncgLCA0LjM3NXJlbSApKSB7XG4gICAgLmJsb2NrLXRpdGxlX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAyLjI1cmVtICwgMS40NzcyNzI3MjczcmVtICArICAzLjg2MzYzNjM2MzZ2dyAsIDQuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDIuMjVyZW0gLCAxLjQ3NzI3MjcyNzNyZW0gICsgIDMuODYzNjM2MzYzNnZ3ICwgNC4zNzVyZW0gKSkge1xuICAgIC5ibG9jay10aXRsZV9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDIuMjVyZW0gKyAyLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5ibG9jay10aXRsZV9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgfVxufVxuLmJsb2NrLXRpdGxlX190aXRsZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogNzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5ibG9jay10aXRsZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiA3MHB4O1xufVxuXG4uYnRuLXZpZXcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLCBib3gtc2hhZG93IDAuNHMgZWFzZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG4tdmlldyB7XG4gICAgdG9wOiAyNC4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHRvcDogY2xhbXAoIDEwcmVtICwgNC43NzI3MjcyNzI3cmVtICArICAyNi4xMzYzNjM2MzY0dncgLCAyNC4zNzVyZW0gKSkge1xuICAgIC5idG4tdmlldyB7XG4gICAgICB0b3A6IGNsYW1wKCAxMHJlbSAsIDQuNzcyNzI3MjcyN3JlbSAgKyAgMjYuMTM2MzYzNjM2NHZ3ICwgMjQuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHRvcDogY2xhbXAoIDEwcmVtICwgNC43NzI3MjcyNzI3cmVtICArICAyNi4xMzYzNjM2MzY0dncgLCAyNC4zNzVyZW0gKSkge1xuICAgIC5idG4tdmlldyB7XG4gICAgICB0b3A6IGNhbGMoMTByZW0gKyAxNC4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIHRvcDogMTByZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG4tdmlldyB7XG4gICAgcmlnaHQ6IDExLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocmlnaHQ6IGNsYW1wKCAxLjI1cmVtICwgLTIuMzQwOTA5MDkwOXJlbSAgKyAgMTcuOTU0NTQ1NDU0NXZ3ICwgMTEuMTI1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgcmlnaHQ6IGNsYW1wKCAxLjI1cmVtICwgLTIuMzQwOTA5MDkwOXJlbSAgKyAgMTcuOTU0NTQ1NDU0NXZ3ICwgMTEuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHJpZ2h0OiBjbGFtcCggMS4yNXJlbSAsIC0yLjM0MDkwOTA5MDlyZW0gICsgIDE3Ljk1NDU0NTQ1NDV2dyAsIDExLjEyNXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIHJpZ2h0OiBjYWxjKDEuMjVyZW0gKyA5Ljg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG4tdmlldyB7XG4gICAgcmlnaHQ6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG4tdmlldyB7XG4gICAgd2lkdGg6IDUuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDMuNDM3NXJlbSAsIDIuNjQyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA1LjYyNXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMy40Mzc1cmVtICwgMi42NDIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDUuNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMy40Mzc1cmVtICwgMi42NDIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgd2lkdGg6IGNhbGMoMy40Mzc1cmVtICsgMi4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICB3aWR0aDogMy40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIGhlaWdodDogNS42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGhlaWdodDogY2xhbXAoIDMuNDM3NXJlbSAsIDIuNjQyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA1LjYyNXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDMuNDM3NXJlbSAsIDIuNjQyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA1LjYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCAzLjQzNzVyZW0gLCAyLjY0MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNS42MjVyZW0gKSkge1xuICAgIC5idG4tdmlldyB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMy40Mzc1cmVtICsgMi4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICBoZWlnaHQ6IDMuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjgxODE4MTgxOHJlbSAgKyAgMC4zNDA5MDkwOTA5dncgLCAwLjkzNzVyZW0gKSkge1xuICAgIC5idG4tdmlldyB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42ODE4MTgxODE4cmVtICArICAwLjM0MDkwOTA5MDl2dyAsIDAuOTM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42ODE4MTgxODE4cmVtICArICAwLjM0MDkwOTA5MDl2dyAsIDAuOTM3NXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjc1cmVtICsgMC4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cbn1cbi5idG4tdmlldzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxNXB4IDhweCAjZmZmO1xufVxuXG4uc3dpcGVyLXNsaWRlX19pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItc2xpZGVfX2ltZyB7XG4gICAgaGVpZ2h0OiAzNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggMTMuNzVyZW0gLCA1LjU2ODE4MTgxODJyZW0gICsgIDQwLjkwOTA5MDkwOTF2dyAsIDM2LjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNsaWRlX19pbWcge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggMTMuNzVyZW0gLCA1LjU2ODE4MTgxODJyZW0gICsgIDQwLjkwOTA5MDkwOTF2dyAsIDM2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDEzLjc1cmVtICwgNS41NjgxODE4MTgycmVtICArICA0MC45MDkwOTA5MDkxdncgLCAzNi4yNXJlbSApKSB7XG4gICAgLnN3aXBlci1zbGlkZV9faW1nIHtcbiAgICAgIGhlaWdodDogY2FsYygxMy43NXJlbSArIDIyLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLXNsaWRlX19pbWcge1xuICAgIGhlaWdodDogMTMuNzVyZW07XG4gIH1cbn1cblxuLnN3aXBlci1idXR0b24tcHJldiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMjVweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICAgIGxlZnQ6IC0zLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGVmdDogY2xhbXAoIC0zLjEyNXJlbSAsIDM1LjIyNzI3MjcyNzNyZW0gICsgIC01MS4xMzYzNjM2MzY0dncgLCAyNXJlbSApKSB7XG4gICAgLnN3aXBlci1idXR0b24tcHJldiB7XG4gICAgICBsZWZ0OiBjbGFtcCggLTMuMTI1cmVtICwgMzUuMjI3MjcyNzI3M3JlbSAgKyAgLTUxLjEzNjM2MzYzNjR2dyAsIDI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGxlZnQ6IGNsYW1wKCAtMy4xMjVyZW0gLCAzNS4yMjcyNzI3MjczcmVtICArICAtNTEuMTM2MzYzNjM2NHZ3ICwgMjVyZW0gKSkge1xuICAgIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICAgICAgbGVmdDogY2FsYygyNXJlbSArIC0yOC4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcbiAgICBsZWZ0OiAyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk1OHB4KSB7XG4gIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnN3aXBlci1idXR0b24tbmV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMjVweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgIHJpZ2h0OiAtMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHJpZ2h0OiBjbGFtcCggLTMuMTI1cmVtICwgMzUuMjI3MjcyNzI3M3JlbSAgKyAgLTUxLjEzNjM2MzYzNjR2dyAsIDI1cmVtICkpIHtcbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgICAgIHJpZ2h0OiBjbGFtcCggLTMuMTI1cmVtICwgMzUuMjI3MjcyNzI3M3JlbSAgKyAgLTUxLjEzNjM2MzYzNjR2dyAsIDI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHJpZ2h0OiBjbGFtcCggLTMuMTI1cmVtICwgMzUuMjI3MjcyNzI3M3JlbSAgKyAgLTUxLjEzNjM2MzYzNjR2dyAsIDI1cmVtICkpIHtcbiAgICAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgICAgIHJpZ2h0OiBjYWxjKDI1cmVtICsgLTI4LjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgIHJpZ2h0OiAyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk1OHB4KSB7XG4gIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmFib3V0LXVzIHtcbiAgICBwYWRkaW5nLXRvcDogMTZyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgLTIuNDA5MDkwOTA5MXJlbSAgKyAgMjQuNTQ1NDU0NTQ1NXZ3ICwgMTZyZW0gKSkge1xuICAgIC5hYm91dC11cyB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIC0yLjQwOTA5MDkwOTFyZW0gICsgIDI0LjU0NTQ1NDU0NTV2dyAsIDE2cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgLTIuNDA5MDkwOTA5MXJlbSAgKyAgMjQuNTQ1NDU0NTQ1NXZ3ICwgMTZyZW0gKSkge1xuICAgIC5hYm91dC11cyB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygyLjVyZW0gKyAxMy41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmFib3V0LXVzIHtcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xuICB9XG59XG4uYWJvdXQtdXNfX2NvbnRhaW5lci0tYmlnIHtcbiAgd2lkdGg6IDEzMDZweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5pbnRyby1ibG9jayB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm8tYmxvY2sge1xuICAgIHdpZHRoOiAzOC40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE4LjEyNXJlbSAsIDEwLjczODYzNjM2MzZyZW0gICsgIDM2LjkzMTgxODE4MTh2dyAsIDM4LjQzNzVyZW0gKSkge1xuICAgIC5pbnRyby1ibG9jayB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE4LjEyNXJlbSAsIDEwLjczODYzNjM2MzZyZW0gICsgIDM2LjkzMTgxODE4MTh2dyAsIDM4LjQzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxOC4xMjVyZW0gLCAxMC43Mzg2MzYzNjM2cmVtICArICAzNi45MzE4MTgxODE4dncgLCAzOC40Mzc1cmVtICkpIHtcbiAgICAuaW50cm8tYmxvY2sge1xuICAgICAgd2lkdGg6IGNhbGMoMTguMTI1cmVtICsgMjAuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyby1ibG9jayB7XG4gICAgd2lkdGg6IDE4LjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvLWJsb2NrIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1LjgxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAxLjI5NTQ1NDU0NTVyZW0gICsgIDYuMDIyNzI3MjcyN3Z3ICwgNS44MTI1cmVtICkpIHtcbiAgICAuaW50cm8tYmxvY2sge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIDEuMjk1NDU0NTQ1NXJlbSAgKyAgNi4wMjI3MjcyNzI3dncgLCA1LjgxMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIDEuMjk1NDU0NTQ1NXJlbSAgKyAgNi4wMjI3MjcyNzI3dncgLCA1LjgxMjVyZW0gKSkge1xuICAgIC5pbnRyby1ibG9jayB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDIuNXJlbSArIDMuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyby1ibG9jayB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICB9XG59XG4uaW50cm8tYmxvY2tfX2xhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyby1ibG9ja19fbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzEwMjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAxLjU2MjVyZW0gKSkge1xuICAgIC5pbnRyby1ibG9ja19fbGFiZWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzEwMjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAxLjU2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzEwMjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAxLjU2MjVyZW0gKSkge1xuICAgIC5pbnRyby1ibG9ja19fbGFiZWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygwLjkzNzVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyby1ibG9ja19fbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcbiAgfVxufVxuLmludHJvLWJsb2NrX190aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm8tYmxvY2tfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDIuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxLjVyZW0gLCAxLjI3MjcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xMjVyZW0gKSkge1xuICAgIC5pbnRyby1ibG9ja19fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMS4yNzI3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDEuNXJlbSAsIDEuMjcyNzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjEyNXJlbSApKSB7XG4gICAgLmludHJvLWJsb2NrX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMS41cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm8tYmxvY2tfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuXG4uaW5mby1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2sge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMy43NXJlbSAsIDEuNDc3MjcyNzI3M3JlbSAgKyAgMTEuMzYzNjM2MzYzNnZ3ICwgMTByZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAzLjc1cmVtICwgMS40NzcyNzI3MjczcmVtICArICAxMS4zNjM2MzYzNjM2dncgLCAxMHJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMy43NXJlbSAsIDEuNDc3MjcyNzI3M3JlbSAgKyAgMTEuMzYzNjM2MzYzNnZ3ICwgMTByZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMy43NXJlbSArIDYuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW5mby1ibG9jayB7XG4gICAgbWFyZ2luLWJvdHRvbTogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2sge1xuICAgIGdhcDogNi44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGdhcDogY2xhbXAoIDIuNXJlbSAsIDAuOTA5MDkwOTA5MXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA2Ljg3NXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2sge1xuICAgICAgZ2FwOiBjbGFtcCggMi41cmVtICwgMC45MDkwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDYuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGdhcDogY2xhbXAoIDIuNXJlbSAsIDAuOTA5MDkwOTA5MXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA2Ljg3NXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2sge1xuICAgICAgZ2FwOiBjYWxjKDIuNXJlbSArIDQuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmluZm8tYmxvY2sge1xuICAgIGdhcDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLmluZm8tYmxvY2sge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkgYW5kIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2sge1xuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjc5NTQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMi41cmVtICkpIHtcbiAgICAuaW5mby1ibG9jayB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgMC43OTU0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDIuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgMC43OTU0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDIuNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2sge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuMjVyZW0gKyAxLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW5mby1ibG9jayB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICB9XG59XG4uaW5mby1ibG9ja19faXRlbS0tdG9wLWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9ja19faXRlbS0tdG9wLWxpbmUge1xuICAgIHdpZHRoOiAyNC40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCA4LjE1OTA5MDkwOTFyZW0gICsgIDIxLjcwNDU0NTQ1NDV2dyAsIDI0LjQzNzVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCA4LjE1OTA5MDkwOTFyZW0gICsgIDIxLjcwNDU0NTQ1NDV2dyAsIDI0LjQzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxMi41cmVtICwgOC4xNTkwOTA5MDkxcmVtICArICAyMS43MDQ1NDU0NTQ1dncgLCAyNC40Mzc1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19faXRlbS0tdG9wLWxpbmUge1xuICAgICAgd2lkdGg6IGNhbGMoMTIuNXJlbSArIDExLjkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW5mby1ibG9ja19faXRlbS0tdG9wLWxpbmUge1xuICAgIHdpZHRoOiAxMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9ja19faXRlbS0tdG9wLWxpbmUge1xuICAgIHBhZGRpbmctdG9wOiAyLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAxLjI1cmVtICwgMC45MzE4MTgxODE4cmVtICArICAxLjU5MDkwOTA5MDl2dyAsIDIuMTI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19faXRlbS0tdG9wLWxpbmUge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAxLjI1cmVtICwgMC45MzE4MTgxODE4cmVtICArICAxLjU5MDkwOTA5MDl2dyAsIDIuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMS4yNXJlbSAsIDAuOTMxODE4MTgxOHJlbSAgKyAgMS41OTA5MDkwOTA5dncgLCAyLjEyNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX2l0ZW0tLXRvcC1saW5lIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDEuMjVyZW0gKyAwLjg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gICAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gIH1cbn1cbi5pbmZvLWJsb2NrX190ZXh0LS1iaWcge1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2tfX3RleHQtLWJpZyB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxLjEyNXJlbSAsIDEuMDc5NTQ1NDU0NXJlbSAgKyAgMC4yMjcyNzI3MjczdncgLCAxLjI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19fdGV4dC0tYmlnIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDEuMTI1cmVtICwgMS4wNzk1NDU0NTQ1cmVtICArICAwLjIyNzI3MjcyNzN2dyAsIDEuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMS4xMjVyZW0gLCAxLjA3OTU0NTQ1NDVyZW0gICsgIDAuMjI3MjcyNzI3M3Z3ICwgMS4yNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX3RleHQtLWJpZyB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMS4xMjVyZW0gKyAwLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrX190ZXh0LS1iaWcge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIH1cbn1cbi5pbmZvLWJsb2NrX190ZXh0LS1iaWc6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9ja19fdGV4dC0tYmlnOjpiZWZvcmUge1xuICAgIHdpZHRoOiAyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxMy4xMjVyZW0gLCA4LjgwNjgxODE4MThyZW0gICsgIDIxLjU5MDkwOTA5MDl2dyAsIDI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19fdGV4dC0tYmlnOjpiZWZvcmUge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxMy4xMjVyZW0gLCA4LjgwNjgxODE4MThyZW0gICsgIDIxLjU5MDkwOTA5MDl2dyAsIDI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTMuMTI1cmVtICwgOC44MDY4MTgxODE4cmVtICArICAyMS41OTA5MDkwOTA5dncgLCAyNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX3RleHQtLWJpZzo6YmVmb3JlIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEzLjEyNXJlbSArIDExLjg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrX190ZXh0LS1iaWc6OmJlZm9yZSB7XG4gICAgd2lkdGg6IDEzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2tfX2l0ZW0tLWFjdGlvbiB7XG4gICAgd2lkdGg6IDI4LjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTAuNzg0MDkwOTA5MXJlbSAgKyAgMjQuMjA0NTQ1NDU0NXZ3ICwgMjguOTM3NXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX2l0ZW0tLWFjdGlvbiB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDEwLjc4NDA5MDkwOTFyZW0gICsgIDI0LjIwNDU0NTQ1NDV2dyAsIDI4LjkzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMC43ODQwOTA5MDkxcmVtICArICAyNC4yMDQ1NDU0NTQ1dncgLCAyOC45Mzc1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19faXRlbS0tYWN0aW9uIHtcbiAgICAgIHdpZHRoOiBjYWxjKDE1LjYyNXJlbSArIDEzLjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW5mby1ibG9ja19faXRlbS0tYWN0aW9uIHtcbiAgICB3aWR0aDogMTUuNjI1cmVtO1xuICB9XG59XG4uaW5mby1ibG9ja19fdGV4dC0tc21hbGwge1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICBmb250LXNpemU6IDEuMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC44OTIwNDU0NTQ1cmVtICArICAwLjIyNzI3MjcyNzN2dyAsIDEuMDYyNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuODkyMDQ1NDU0NXJlbSAgKyAgMC4yMjcyNzI3MjczdncgLCAxLjA2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC44OTIwNDU0NTQ1cmVtICArICAwLjIyNzI3MjcyNzN2dyAsIDEuMDYyNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjkzNzVyZW0gKyAwLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrX190ZXh0LS1zbWFsbCB7XG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbmZvLWJsb2NrX190ZXh0LS1zbWFsbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjk5NDMxODE4MThyZW0gICsgIDIuODQwOTA5MDkwOXZ3ICwgMy4xMjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX190ZXh0LS1zbWFsbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMC45OTQzMTgxODE4cmVtICArICAyLjg0MDkwOTA5MDl2dyAsIDMuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjk5NDMxODE4MThyZW0gICsgIDIuODQwOTA5MDkwOXZ3ICwgMy4xMjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX190ZXh0LS1zbWFsbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuNTYyNXJlbSArIDEuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrX190ZXh0LS1zbWFsbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5cbi5idG4gc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNTA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0biBzcGFuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4xMjVyZW0gLCAwLjY0NzcyNzI3MjdyZW0gICsgIDIuMzg2MzYzNjM2NHZ3ICwgMi40Mzc1cmVtICkpIHtcbiAgICAuYnRuIHNwYW4ge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMS4xMjVyZW0gLCAwLjY0NzcyNzI3MjdyZW0gICsgIDIuMzg2MzYzNjM2NHZ3ICwgMi40Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMTI1cmVtICwgMC42NDc3MjcyNzI3cmVtICArICAyLjM4NjM2MzYzNjR2dyAsIDIuNDM3NXJlbSApKSB7XG4gICAgLmJ0biBzcGFuIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygxLjEyNXJlbSArIDEuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG4gc3BhbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk1OS45OHB4KSB7XG4gIC5idG4gc3BhbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ2OS45OHB4KSB7XG4gIC5idG4gc3BhbiB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAyO1xuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tZGFyay1jbCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG4ge1xuICAgIHBhZGRpbmctdG9wOiAxLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMC42MjVyZW0gLCAwLjQyMDQ1NDU0NTVyZW0gICsgIDEuMDIyNzI3MjcyN3Z3ICwgMS4xODc1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMC42MjVyZW0gLCAwLjQyMDQ1NDU0NTVyZW0gICsgIDEuMDIyNzI3MjcyN3Z3ICwgMS4xODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMC42MjVyZW0gLCAwLjQyMDQ1NDU0NTVyZW0gICsgIDEuMDIyNzI3MjcyN3Z3ICwgMS4xODc1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDAuNjI1cmVtICsgMC41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0biB7XG4gICAgcGFkZGluZy10b3A6IDAuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYnRuIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDAuNjI1cmVtICwgMC40MjA0NTQ1NDU1cmVtICArICAxLjAyMjcyNzI3Mjd2dyAsIDEuMTg3NXJlbSApKSB7XG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDAuNjI1cmVtICwgMC40MjA0NTQ1NDU1cmVtICArICAxLjAyMjcyNzI3Mjd2dyAsIDEuMTg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDAuNjI1cmVtICwgMC40MjA0NTQ1NDU1cmVtICArICAxLjAyMjcyNzI3Mjd2dyAsIDEuMTg3NXJlbSApKSB7XG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygwLjYyNXJlbSArIDAuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG4ge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0biB7XG4gICAgd2lkdGg6IDEwLjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCA1cmVtICwgMi45NTQ1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAxMC42MjVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgd2lkdGg6IGNsYW1wKCA1cmVtICwgMi45NTQ1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAxMC42MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCA1cmVtICwgMi45NTQ1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAxMC42MjVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgd2lkdGg6IGNhbGMoNXJlbSArIDUuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0biB7XG4gICAgd2lkdGg6IDVyZW07XG4gIH1cbn1cbi5idG46aG92ZXIgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbn1cbi5idG46aG92ZXI6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cbi5idG46aG92ZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG59XG4uYnRuOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG46OmFmdGVyIHtcbiAgICB0b3A6IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAodG9wOiBjbGFtcCggMC43NXJlbSAsIDAuNDU0NTQ1NDU0NXJlbSAgKyAgMS40NzcyNzI3MjczdncgLCAxLjU2MjVyZW0gKSkge1xuICAgIC5idG46OmFmdGVyIHtcbiAgICAgIHRvcDogY2xhbXAoIDAuNzVyZW0gLCAwLjQ1NDU0NTQ1NDVyZW0gICsgIDEuNDc3MjcyNzI3M3Z3ICwgMS41NjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHRvcDogY2xhbXAoIDAuNzVyZW0gLCAwLjQ1NDU0NTQ1NDVyZW0gICsgIDEuNDc3MjcyNzI3M3Z3ICwgMS41NjI1cmVtICkpIHtcbiAgICAuYnRuOjphZnRlciB7XG4gICAgICB0b3A6IGNhbGMoMC43NXJlbSArIDAuODEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG46OmFmdGVyIHtcbiAgICB0b3A6IDAuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG46OmFmdGVyIHtcbiAgICByaWdodDogMi4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHJpZ2h0OiBjbGFtcCggMS4xODc1cmVtICwgMC43NTU2ODE4MTgycmVtICArICAyLjE1OTA5MDkwOTF2dyAsIDIuMzc1cmVtICkpIHtcbiAgICAuYnRuOjphZnRlciB7XG4gICAgICByaWdodDogY2xhbXAoIDEuMTg3NXJlbSAsIDAuNzU1NjgxODE4MnJlbSAgKyAgMi4xNTkwOTA5MDkxdncgLCAyLjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChyaWdodDogY2xhbXAoIDEuMTg3NXJlbSAsIDAuNzU1NjgxODE4MnJlbSAgKyAgMi4xNTkwOTA5MDkxdncgLCAyLjM3NXJlbSApKSB7XG4gICAgLmJ0bjo6YWZ0ZXIge1xuICAgICAgcmlnaHQ6IGNhbGMoMS4xODc1cmVtICsgMS4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0bjo6YWZ0ZXIge1xuICAgIHJpZ2h0OiAxLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NTkuOThweCkge1xuICAuYnRuOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmJ0bjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyNSUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xufVxuLmJ0bi0tcmV2ZXJzZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG91dGxpbmU6IDFweCBzb2xpZCAjZmZmO1xufVxuLmJ0bi0tcmV2ZXJzZTpob3Zlcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmJ0bi0tcmV2ZXJzZTpob3ZlciBzcGFuIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uYnRuLS1yZXZlcnNlIHNwYW4ge1xuICBjb2xvcjogdmFyKC0tZGFyay1jbCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYnRuLS1yZXZlcnNlOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xufVxuLmJ0bi0tcmV2ZXJzZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG59XG5cbi5kaXJlY3Rpb25zIHtcbiAgbWF4LXdpZHRoOiAxMzM2cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5kaXJlY3Rpb25zIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogOC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCAzLjc1cmVtICwgMS45MzE4MTgxODE4cmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDguNzVyZW0gKSkge1xuICAgIC5kaXJlY3Rpb25zIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMy43NXJlbSAsIDEuOTMxODE4MTgxOHJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA4Ljc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMy43NXJlbSAsIDEuOTMxODE4MTgxOHJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA4Ljc1cmVtICkpIHtcbiAgICAuZGlyZWN0aW9ucyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygzLjc1cmVtICsgNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5kaXJlY3Rpb25zIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMy43NXJlbTtcbiAgfVxufVxuXG4ud29ya3MtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMzBweDtcbn1cbi53b3Jrcy1saXN0X19pdGVtIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLCAwLCAwLCAwLjEzKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjY1KSAxMDAlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLndvcmtzLWxpc3RfX2l0ZW0ge1xuICAgIHdpZHRoOiAxOXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxMi41cmVtICwgMTAuMTM2MzYzNjM2NHJlbSAgKyAgMTEuODE4MTgxODE4MnZ3ICwgMTlyZW0gKSkge1xuICAgIC53b3Jrcy1saXN0X19pdGVtIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDEwLjEzNjM2MzYzNjRyZW0gICsgIDExLjgxODE4MTgxODJ2dyAsIDE5cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDEwLjEzNjM2MzYzNjRyZW0gICsgIDExLjgxODE4MTgxODJ2dyAsIDE5cmVtICkpIHtcbiAgICAud29ya3MtbGlzdF9faXRlbSB7XG4gICAgICB3aWR0aDogY2FsYygxMi41cmVtICsgNi41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLndvcmtzLWxpc3RfX2l0ZW0ge1xuICAgIHdpZHRoOiAxMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAud29ya3MtbGlzdF9faXRlbSB7XG4gICAgaGVpZ2h0OiAyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggMTcuNXJlbSAsIDE0Ljc3MjcyNzI3MjdyZW0gICsgIDEzLjYzNjM2MzYzNjR2dyAsIDI1cmVtICkpIHtcbiAgICAud29ya3MtbGlzdF9faXRlbSB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCAxNy41cmVtICwgMTQuNzcyNzI3MjcyN3JlbSAgKyAgMTMuNjM2MzYzNjM2NHZ3ICwgMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggMTcuNXJlbSAsIDE0Ljc3MjcyNzI3MjdyZW0gICsgIDEzLjYzNjM2MzYzNjR2dyAsIDI1cmVtICkpIHtcbiAgICAud29ya3MtbGlzdF9faXRlbSB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTcuNXJlbSArIDcuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC53b3Jrcy1saXN0X19pdGVtIHtcbiAgICBoZWlnaHQ6IDE3LjVyZW07XG4gIH1cbn1cbi53b3Jrcy1saXN0X19pdGVtOmhvdmVyIHtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xufVxuLndvcmtzLWxpc3RfX2l0ZW06aG92ZXIgLndvcmtzLWxpc3RfX2luZm8ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE2cHgpO1xufVxuLndvcmtzLWxpc3RfX2l0ZW06aG92ZXIgLndvcmtzLWxpc3RfX2NhcmQge1xuICBmaWx0ZXI6IGJsdXIoN3B4KTtcbn1cbi53b3Jrcy1saXN0X19jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmlsdGVyOiBibHVyKDApO1xuICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC41cyBlYXNlO1xufVxuLndvcmtzLWxpc3RfX2luZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE2cHgpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLndvcmtzLWxpc3RfX2luZm8ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDUuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1yaWdodDogY2xhbXAoIDEuNTYyNXJlbSAsIDAuMDE3MDQ1NDU0NXJlbSAgKyAgNy43MjcyNzI3MjczdncgLCA1LjgxMjVyZW0gKSkge1xuICAgIC53b3Jrcy1saXN0X19pbmZvIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjAxNzA0NTQ1NDVyZW0gICsgIDcuNzI3MjcyNzI3M3Z3ICwgNS44MTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjAxNzA0NTQ1NDVyZW0gICsgIDcuNzI3MjcyNzI3M3Z3ICwgNS44MTI1cmVtICkpIHtcbiAgICAud29ya3MtbGlzdF9faW5mbyB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDEuNTYyNXJlbSArIDQuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAud29ya3MtbGlzdF9faW5mbyB7XG4gICAgcGFkZGluZy1yaWdodDogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAud29ya3MtbGlzdF9faW5mbyB7XG4gICAgcGFkZGluZy1sZWZ0OiAzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS41NjI1cmVtICwgMC45OTQzMTgxODE4cmVtICArICAyLjg0MDkwOTA5MDl2dyAsIDMuMTI1cmVtICkpIHtcbiAgICAud29ya3MtbGlzdF9faW5mbyB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjk5NDMxODE4MThyZW0gICsgIDIuODQwOTA5MDkwOXZ3ICwgMy4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS41NjI1cmVtICwgMC45OTQzMTgxODE4cmVtICArICAyLjg0MDkwOTA5MDl2dyAsIDMuMTI1cmVtICkpIHtcbiAgICAud29ya3MtbGlzdF9faW5mbyB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMS41NjI1cmVtICsgMS41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLndvcmtzLWxpc3RfX2luZm8ge1xuICAgIHBhZGRpbmctbGVmdDogMS41NjI1cmVtO1xuICB9XG59XG4ud29ya3MtbGlzdF9fdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMjRweCAwIDI0cHggMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0OTkuOThweCkge1xuICAud29ya3MtbGlzdF9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG4ud29ya3MtbGlzdF9fbW9yZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDk5Ljk4cHgpIHtcbiAgLndvcmtzLWxpc3RfX21vcmUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZmVhdHVyZWQge1xuICAgIHBhZGRpbmctYm90dG9tOiA5LjgxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMi41cmVtICwgLTAuMTU5MDkwOTA5MXJlbSAgKyAgMTMuMjk1NDU0NTQ1NXZ3ICwgOS44MTI1cmVtICkpIHtcbiAgICAuZmVhdHVyZWQge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAtMC4xNTkwOTA5MDkxcmVtICArICAxMy4yOTU0NTQ1NDU1dncgLCA5LjgxMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAtMC4xNTkwOTA5MDkxcmVtICArICAxMy4yOTU0NTQ1NDU1dncgLCA5LjgxMjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygyLjVyZW0gKyA3LjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZmVhdHVyZWQge1xuICAgIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XG4gIH1cbn1cbi5mZWF0dXJlZF9fbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZmVhdHVyZWRfX2xpc3Qge1xuICAgIGdhcDogNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAwLjI4NDA5MDkwOTFyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19saXN0IHtcbiAgICAgIGdhcDogY2xhbXAoIDEuODc1cmVtICwgMC4yODQwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAwLjI4NDA5MDkwOTFyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19saXN0IHtcbiAgICAgIGdhcDogY2FsYygxLjg3NXJlbSArIDQuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZlYXR1cmVkX19saXN0IHtcbiAgICBnYXA6IDEuODc1cmVtO1xuICB9XG59XG4uZmVhdHVyZWRfX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZmVhdHVyZWRfX2l0ZW06aG92ZXIgLmZlYXR1cmVkX19idG4sIC5mZWF0dXJlZF9faXRlbTpmb2N1cyAuZmVhdHVyZWRfX2J0biB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZmVhdHVyZWRfX2ltYWdlIHtcbiAgICB3aWR0aDogMjMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDExLjU2MjVyZW0gLCA3LjM1Nzk1NDU0NTVyZW0gICsgIDIxLjAyMjcyNzI3Mjd2dyAsIDIzLjEyNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19pbWFnZSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDExLjU2MjVyZW0gLCA3LjM1Nzk1NDU0NTVyZW0gICsgIDIxLjAyMjcyNzI3Mjd2dyAsIDIzLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDExLjU2MjVyZW0gLCA3LjM1Nzk1NDU0NTVyZW0gICsgIDIxLjAyMjcyNzI3Mjd2dyAsIDIzLjEyNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19pbWFnZSB7XG4gICAgICB3aWR0aDogY2FsYygxMS41NjI1cmVtICsgMTEuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mZWF0dXJlZF9faW1hZ2Uge1xuICAgIHdpZHRoOiAxMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZmVhdHVyZWRfX2ltYWdlIHtcbiAgICBoZWlnaHQ6IDI2Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAxMy4zNzVyZW0gLCA4LjUxMTM2MzYzNjRyZW0gICsgIDI0LjMxODE4MTgxODJ2dyAsIDI2Ljc1cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2ltYWdlIHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDEzLjM3NXJlbSAsIDguNTExMzYzNjM2NHJlbSAgKyAgMjQuMzE4MTgxODE4MnZ3ICwgMjYuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggMTMuMzc1cmVtICwgOC41MTEzNjM2MzY0cmVtICArICAyNC4zMTgxODE4MTgydncgLCAyNi43NXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19pbWFnZSB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTMuMzc1cmVtICsgMTMuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZlYXR1cmVkX19pbWFnZSB7XG4gICAgaGVpZ2h0OiAxMy4zNzVyZW07XG4gIH1cbn1cbi5mZWF0dXJlZF9fbGFiZWwge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZmVhdHVyZWRfX2xhYmVsIHtcbiAgICBtYXJnaW4tdG9wOiAyLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLXRvcDogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNTA1NjgxODE4MnJlbSAgKyAgMi4xNTkwOTA5MDkxdncgLCAyLjEyNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19sYWJlbCB7XG4gICAgICBtYXJnaW4tdG9wOiBjbGFtcCggMC45Mzc1cmVtICwgMC41MDU2ODE4MTgycmVtICArICAyLjE1OTA5MDkwOTF2dyAsIDIuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi10b3A6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjUwNTY4MTgxODJyZW0gICsgIDIuMTU5MDkwOTA5MXZ3ICwgMi4xMjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9fbGFiZWwge1xuICAgICAgbWFyZ2luLXRvcDogY2FsYygwLjkzNzVyZW0gKyAxLjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZmVhdHVyZWRfX2xhYmVsIHtcbiAgICBtYXJnaW4tdG9wOiAwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mZWF0dXJlZF9fbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuMjVyZW0gLCAwLjE1OTA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMC41cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2xhYmVsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjI1cmVtICwgMC4xNTkwOTA5MDkxcmVtICArICAwLjQ1NDU0NTQ1NDV2dyAsIDAuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC4yNXJlbSAsIDAuMTU5MDkwOTA5MXJlbSAgKyAgMC40NTQ1NDU0NTQ1dncgLCAwLjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9fbGFiZWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygwLjI1cmVtICsgMC4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mZWF0dXJlZF9fbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1OTkuOThweCkge1xuICAuZmVhdHVyZWRfX2xhYmVsIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbi5mZWF0dXJlZF9fdHlwZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mZWF0dXJlZF9faW1hZ2UtLWJpZyB7XG4gICAgd2lkdGg6IDM3LjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDEwLjIyNzI3MjcyNzNyZW0gICsgIDM2LjM2MzYzNjM2MzZ2dyAsIDM3LjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9faW1hZ2UtLWJpZyB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxMC4yMjcyNzI3MjczcmVtICArICAzNi4zNjM2MzYzNjM2dncgLCAzNy41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDEwLjIyNzI3MjcyNzNyZW0gICsgIDM2LjM2MzYzNjM2MzZ2dyAsIDM3LjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9faW1hZ2UtLWJpZyB7XG4gICAgICB3aWR0aDogY2FsYygxNy41cmVtICsgMjAgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZmVhdHVyZWRfX2ltYWdlLS1iaWcge1xuICAgIHdpZHRoOiAxNy41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZmVhdHVyZWRfX2ltYWdlLS1iaWcge1xuICAgIGhlaWdodDogMjYuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGhlaWdodDogY2xhbXAoIDEyLjEyNXJlbSAsIDYuODA2ODE4MTgxOHJlbSAgKyAgMjYuNTkwOTA5MDkwOXZ3ICwgMjYuNzVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9faW1hZ2UtLWJpZyB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCAxMi4xMjVyZW0gLCA2LjgwNjgxODE4MThyZW0gICsgIDI2LjU5MDkwOTA5MDl2dyAsIDI2Ljc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDEyLjEyNXJlbSAsIDYuODA2ODE4MTgxOHJlbSAgKyAgMjYuNTkwOTA5MDkwOXZ3ICwgMjYuNzVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9faW1hZ2UtLWJpZyB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTIuMTI1cmVtICsgMTQuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZlYXR1cmVkX19pbWFnZS0tYmlnIHtcbiAgICBoZWlnaHQ6IDEyLjEyNXJlbTtcbiAgfVxufVxuLmZlYXR1cmVkX19pdGVtLS10b3Age1xuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICBwYWRkaW5nLXRvcDogMTYwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5mZWF0dXJlZF9faXRlbS0tdG9wIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cbn1cbi5mZWF0dXJlZF9faXRlbS0tYm90dG9tIHtcbiAgbWFyZ2luLXRvcDogLTE2MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAuZmVhdHVyZWRfX2l0ZW0tLWJvdHRvbSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxufVxuLmZlYXR1cmVkX19idG4ge1xuICBsZWZ0OiAxMzBweDtcbiAgdG9wOiAyMDBweDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZSwgdmlzaWJpbGl0eSAwLjVzIGVhc2UsIHRyYW5zZm9ybSAwLjRzIGVhc2UsIGJveC1zaGFkb3cgMC40cyBlYXNlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmZlYXR1cmVkX19idG4ge1xuICAgIGxlZnQ6IDEwMHB4O1xuICAgIHRvcDogMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyOS45OTg3NWVtKSB7XG4gIC5mZWF0dXJlZF9fYnRuIHtcbiAgICBsZWZ0OiA2NnB4O1xuICAgIHRvcDogNzdweDtcbiAgfVxufVxuXG4uaW50cm9kdWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogZmlyc3QgYmFzZWxpbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyb2R1Y3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjAzOTc3MjcyNzNyZW0gICsgIDIuNjEzNjM2MzYzNnZ3ICwgM3JlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4wMzk3NzI3MjczcmVtICArICAyLjYxMzYzNjM2MzZ2dyAsIDNyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMDM5NzcyNzI3M3JlbSAgKyAgMi42MTM2MzYzNjM2dncgLCAzcmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS41NjI1cmVtICsgMS40Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvZHVjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm9kdWN0aW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC41NjgxODE4MTgycmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb24ge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjU2ODE4MTgxODJyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgNi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuNTY4MTgxODE4MnJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA2LjI1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygxLjI1cmVtICsgNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyb2R1Y3Rpb24ge1xuICAgIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvZHVjdGlvbiB7XG4gICAgcGFkZGluZy1yaWdodDogNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1yaWdodDogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb24ge1xuICAgICAgcGFkZGluZy1yaWdodDogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1yaWdodDogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb24ge1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYygzLjEyNXJlbSArIDMuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvZHVjdGlvbiB7XG4gICAgcGFkZGluZy1yaWdodDogMy4xMjVyZW07XG4gIH1cbn1cbi5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgbWFyZ2luLXJpZ2h0OiAzNzVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDMuMTI1cmVtICsgMy4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgIHdpZHRoOiAyNi41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDExLjY0NzcyNzI3MjdyZW0gICsgIDE5Ljg4NjM2MzYzNjR2dyAsIDI2LjU2MjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTEuNjQ3NzI3MjcyN3JlbSAgKyAgMTkuODg2MzYzNjM2NHZ3ICwgMjYuNTYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDExLjY0NzcyNzI3MjdyZW0gICsgIDE5Ljg4NjM2MzYzNjR2dyAsIDI2LjU2MjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICAgIHdpZHRoOiBjYWxjKDE1LjYyNXJlbSArIDEwLjkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgd2lkdGg6IDE1LjYyNXJlbTtcbiAgfVxufVxuLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG4gIGxlZnQ6IDY4MHB4O1xuICB0b3A6IDgwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZTo6YWZ0ZXIge1xuICAgIHdpZHRoOiA0LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAyLjE4NzVyZW0gLCAxLjM5MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNC4zNzVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlOjphZnRlciB7XG4gICAgICB3aWR0aDogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMzkyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMzkyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjM3NXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDIuMTg3NXJlbSArIDIuMTg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlOjphZnRlciB7XG4gICAgd2lkdGg6IDIuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkgYW5kIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjAzOTc3MjcyNzNyZW0gICsgIDIuNjEzNjM2MzYzNnZ3ICwgM3JlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMDM5NzcyNzI3M3JlbSAgKyAgMi42MTM2MzYzNjM2dncgLCAzcmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjAzOTc3MjcyNzNyZW0gICsgIDIuNjEzNjM2MzYzNnZ3ICwgM3JlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjU2MjVyZW0gKyAxLjQzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlOjphZnRlciB7XG4gICAgdG9wOiAtNDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkgYW5kIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgICBsZWZ0OiA2LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChsZWZ0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgICAgIGxlZnQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGxlZnQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uX190aXRsZTo6YWZ0ZXIge1xuICAgICAgbGVmdDogY2FsYygzLjEyNXJlbSArIDMuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgICBsZWZ0OiAzLjEyNXJlbTtcbiAgfVxufVxuXG4ucHJvY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xuICBoZWlnaHQ6IDY2NHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSB7XG4gIC5wcm9jZXNzIHtcbiAgICBoZWlnaHQ6IDcxMHB4O1xuICB9XG59XG4ucHJvY2Vzc19fY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMzAwcHg7XG4gIHotaW5kZXg6IDI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5wcm9jZXNzX19jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiA5LjMxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgMC4wMjI3MjcyNzI3cmVtICArICAxMi4zODYzNjM2MzY0dncgLCA5LjMxMjVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19jb250YWluZXIge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAwLjAyMjcyNzI3MjdyZW0gICsgIDEyLjM4NjM2MzYzNjR2dyAsIDkuMzEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIDAuMDIyNzI3MjcyN3JlbSAgKyAgMTIuMzg2MzYzNjM2NHZ3ICwgOS4zMTI1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDIuNXJlbSArIDYuODEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5wcm9jZXNzX19jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5wcm9jZXNzX19jb250YWluZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMC4wNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIC0wLjI1cmVtICArICAxMy43NXZ3ICwgMTAuMDYyNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX2NvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIC0wLjI1cmVtICArICAxMy43NXZ3ICwgMTAuMDYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIC0wLjI1cmVtICArICAxMy43NXZ3ICwgMTAuMDYyNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX2NvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygyLjVyZW0gKyA3LjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAucHJvY2Vzc19fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xuICB9XG59XG4ucHJvY2Vzc19fY29udGFpbmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0yMCU7XG4gIHRvcDogLTM1JTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnByb2Nlc3NfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIHdpZHRoOiA0MC4wNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEyLjVyZW0gKyAyNy41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnByb2Nlc3NfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAucHJvY2Vzc19fY29udGFpbmVyOjphZnRlciB7XG4gICAgaGVpZ2h0OiA0MC4wNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fY29udGFpbmVyOjphZnRlciB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIGhlaWdodDogY2FsYygxMi41cmVtICsgMjcuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5wcm9jZXNzX19jb250YWluZXI6OmFmdGVyIHtcbiAgICBoZWlnaHQ6IDEyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkge1xuICAucHJvY2Vzc19fY29udGFpbmVyOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnByb2Nlc3NfX3RpdGxlIHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5wcm9jZXNzX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuODc1cmVtICwgMC43Mzg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDVyZW0gKSkge1xuICAgIC5wcm9jZXNzX190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS44NzVyZW0gLCAwLjczODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS44NzVyZW0gLCAwLjczODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS44NzVyZW0gKyAzLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5wcm9jZXNzX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkgYW5kIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnByb2Nlc3NfX3RpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjU2ODE4MTgxODJyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX3RpdGxlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC41NjgxODE4MTgycmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjU2ODE4MTgxODJyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX3RpdGxlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygxLjI1cmVtICsgNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnByb2Nlc3NfX3RpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MTkuOThweCkge1xuICAucHJvY2Vzc19fdGl0bGUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxufVxuLnByb2Nlc3NfX2xpc3Qge1xuICBnYXA6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAucHJvY2Vzc19fbGlzdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIDAuMzQwOTA5MDkwOXJlbSAgKyAgNC41NDU0NTQ1NDU1dncgLCAzLjc1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fbGlzdCB7XG4gICAgICBtYXJnaW4tbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjM0MDkwOTA5MDlyZW0gICsgIDQuNTQ1NDU0NTQ1NXZ3ICwgMy43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjM0MDkwOTA5MDlyZW0gICsgIDQuNTQ1NDU0NTQ1NXZ3ICwgMy43NXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX2xpc3Qge1xuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMS4yNXJlbSArIDIuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5wcm9jZXNzX19saXN0IHtcbiAgICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnByb2Nlc3NfX2xpc3Qge1xuICAgIG1hcmdpbi1yaWdodDogOC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTMuMTgxODE4MDk2NnJlbSAgKyAgMTUuOTA5MDkwNzk1NXZ3ICwgOC43NXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX2xpc3Qge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTMuMTgxODE4MDk2NnJlbSAgKyAgMTUuOTA5MDkwNzk1NXZ3ICwgOC43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtMy4xODE4MTgwOTY2cmVtICArICAxNS45MDkwOTA3OTU1dncgLCA4Ljc1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fbGlzdCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMC4wMDAwMDAwNjI1cmVtICsgOC43NDk5OTk5Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnByb2Nlc3NfX2xpc3Qge1xuICAgIG1hcmdpbi1yaWdodDogMC4wMDAwMDAwNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpIHtcbiAgLnByb2Nlc3NfX2xpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cbn1cbi5wcm9jZXNzX19pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2Nlc3NfX2l0ZW06aG92ZXIgLnByb2Nlc3NfX3RleHQge1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xufVxuLnByb2Nlc3NfX2l0ZW06aG92ZXIgLnByb2Nlc3NfX3RleHQ6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyOCUpO1xufVxuLnByb2Nlc3NfX2l0ZW06aG92ZXIgLnByb2Nlc3NfX251bWJlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4ucHJvY2Vzc19fdGV4dCB7XG4gIGNvbG9yOiAjNkY2RjZGO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNHMgZWFzZSwgdHJhbnNmb3JtIDAuNHMgZWFzZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuLnByb2Nlc3NfX3RleHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtOTBweDtcbiAgdG9wOiAxN3B4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLCBvcGFjaXR5IDAuNHMgZWFzZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkge1xuICAucHJvY2Vzc19fdGV4dDo6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ucHJvY2Vzc19fbnVtYmVyIHtcbiAgb3BhY2l0eTogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZTtcbn1cblxuLnByb2Nlc3Mtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpIHtcbiAgLnByb2Nlc3Mtd3JhcHBlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYmxvY2staW5mbyB7XG4gICAgd2lkdGg6IDI0LjY4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTIuMzI5NTQ1NDU0NXJlbSAgKyAgMTYuNDc3MjcyNzI3M3Z3ICwgMjQuNjg3NXJlbSApKSB7XG4gICAgLmJsb2NrLWluZm8ge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMi4zMjk1NDU0NTQ1cmVtICArICAxNi40NzcyNzI3MjczdncgLCAyNC42ODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTIuMzI5NTQ1NDU0NXJlbSAgKyAgMTYuNDc3MjcyNzI3M3Z3ICwgMjQuNjg3NXJlbSApKSB7XG4gICAgLmJsb2NrLWluZm8ge1xuICAgICAgd2lkdGg6IGNhbGMoMTUuNjI1cmVtICsgOS4wNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJsb2NrLWluZm8ge1xuICAgIHdpZHRoOiAxNS42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkgYW5kIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJsb2NrLWluZm8ge1xuICAgIHBhZGRpbmctbGVmdDogNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuNTY4MTgxODE4MnJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA2LjI1cmVtICkpIHtcbiAgICAuYmxvY2staW5mbyB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuNTY4MTgxODE4MnJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC41NjgxODE4MTgycmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5ibG9jay1pbmZvIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygxLjI1cmVtICsgNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJsb2NrLWluZm8ge1xuICAgIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbiAgfVxufVxuLmJsb2NrLWluZm9fX3RleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJsb2NrLWluZm9fX3RleHQge1xuICAgIG1hcmdpbi1ib3R0b206IDMuMzEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDAuOTI2MTM2MzYzNnJlbSAgKyAgMy4xODE4MTgxODE4dncgLCAzLjMxMjVyZW0gKSkge1xuICAgIC5ibG9jay1pbmZvX190ZXh0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjkyNjEzNjM2MzZyZW0gICsgIDMuMTgxODE4MTgxOHZ3ICwgMy4zMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjkyNjEzNjM2MzZyZW0gICsgIDMuMTgxODE4MTgxOHZ3ICwgMy4zMTI1cmVtICkpIHtcbiAgICAuYmxvY2staW5mb19fdGV4dCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuNTYyNXJlbSArIDEuNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYmxvY2staW5mb19fdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jcmVhdGUge1xuICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAtMC4yMjcyNzI3MjczcmVtICArICAxMy42MzYzNjM2MzY0dncgLCAxMHJlbSApKSB7XG4gICAgLmNyZWF0ZSB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIC0wLjIyNzI3MjcyNzNyZW0gICsgIDEzLjYzNjM2MzYzNjR2dyAsIDEwcmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgLTAuMjI3MjcyNzI3M3JlbSAgKyAgMTMuNjM2MzYzNjM2NHZ3ICwgMTByZW0gKSkge1xuICAgIC5jcmVhdGUge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMi41cmVtICsgNy41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNyZWF0ZSB7XG4gICAgcGFkZGluZy10b3A6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNyZWF0ZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDguNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMi41cmVtICwgMC4yMjcyNzI3MjczcmVtICArICAxMS4zNjM2MzYzNjM2dncgLCA4Ljc1cmVtICkpIHtcbiAgICAuY3JlYXRlIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMi41cmVtICwgMC4yMjcyNzI3MjczcmVtICArICAxMS4zNjM2MzYzNjM2dncgLCA4Ljc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMi41cmVtICwgMC4yMjcyNzI3MjczcmVtICArICAxMS4zNjM2MzYzNjM2dncgLCA4Ljc1cmVtICkpIHtcbiAgICAuY3JlYXRlIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDIuNXJlbSArIDYuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xuICB9XG59XG4uY3JlYXRlX193cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDM3Ljk4cHgpIHtcbiAgLmNyZWF0ZV9fd3JhcHBlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAzNy45OHB4KSB7XG4gIC5pbWctYmxvY2sge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG59XG4uaW1nLWJsb2NrX19pdGVtIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gIHRyYW5zaXRpb246IGZpbHRlciAwLjRzIGVhc2U7XG59XG4uaW1nLWJsb2NrX19pdGVtOmhvdmVyIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XG59XG4uaW1nLWJsb2NrX19pdGVtLS1iaWcge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmltZy1ibG9ja19faXRlbS0tYmlnIHtcbiAgICB3aWR0aDogMjkuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE0LjY4NzVyZW0gLCA5LjM0NjU5MDkwOTFyZW0gICsgIDI2LjcwNDU0NTQ1NDV2dyAsIDI5LjM3NXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19faXRlbS0tYmlnIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTQuNjg3NXJlbSAsIDkuMzQ2NTkwOTA5MXJlbSAgKyAgMjYuNzA0NTQ1NDU0NXZ3ICwgMjkuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTQuNjg3NXJlbSAsIDkuMzQ2NTkwOTA5MXJlbSAgKyAgMjYuNzA0NTQ1NDU0NXZ3ICwgMjkuMzc1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1iaWcge1xuICAgICAgd2lkdGg6IGNhbGMoMTQuNjg3NXJlbSArIDE0LjY4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1iaWcge1xuICAgIHdpZHRoOiAxNC42ODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1iaWcge1xuICAgIGhlaWdodDogMTguMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCA5LjA2MjVyZW0gLCA1Ljc2NzA0NTQ1NDVyZW0gICsgIDE2LjQ3NzI3MjcyNzN2dyAsIDE4LjEyNXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19faXRlbS0tYmlnIHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDkuMDYyNXJlbSAsIDUuNzY3MDQ1NDU0NXJlbSAgKyAgMTYuNDc3MjcyNzI3M3Z3ICwgMTguMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDkuMDYyNXJlbSAsIDUuNzY3MDQ1NDU0NXJlbSAgKyAgMTYuNDc3MjcyNzI3M3Z3ICwgMTguMTI1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1iaWcge1xuICAgICAgaGVpZ2h0OiBjYWxjKDkuMDYyNXJlbSArIDkuMDYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLWJpZyB7XG4gICAgaGVpZ2h0OiA5LjA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbWctYmxvY2tfX2JvdHRvbSB7XG4gICAgd2lkdGg6IDM1LjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTguNzVyZW0gLCAxMi41cmVtICArICAzMS4yNXZ3ICwgMzUuOTM3NXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19fYm90dG9tIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTguNzVyZW0gLCAxMi41cmVtICArICAzMS4yNXZ3ICwgMzUuOTM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE4Ljc1cmVtICwgMTIuNXJlbSAgKyAgMzEuMjV2dyAsIDM1LjkzNzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2JvdHRvbSB7XG4gICAgICB3aWR0aDogY2FsYygxOC43NXJlbSArIDE3LjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW1nLWJsb2NrX19ib3R0b20ge1xuICAgIHdpZHRoOiAxOC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmltZy1ibG9ja19faXRlbS0tc21hbGwge1xuICAgIHBhZGRpbmctbGVmdDogOC4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuODc1cmVtICwgLTAuMzk3NzI3MjcyN3JlbSAgKyAgMTEuMzYzNjM2MzYzNnZ3ICwgOC4xMjVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuODc1cmVtICwgLTAuMzk3NzI3MjcyN3JlbSAgKyAgMTEuMzYzNjM2MzYzNnZ3ICwgOC4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS44NzVyZW0gLCAtMC4zOTc3MjcyNzI3cmVtICArICAxMS4zNjM2MzYzNjM2dncgLCA4LjEyNXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19faXRlbS0tc21hbGwge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuODc1cmVtICsgNi4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMC45Mzc1cmVtICwgMC41OTY1OTA5MDkxcmVtICArICAxLjcwNDU0NTQ1NDV2dyAsIDEuODc1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjU5NjU5MDkwOTFyZW0gICsgIDEuNzA0NTQ1NDU0NXZ3ICwgMS44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMC45Mzc1cmVtICwgMC41OTY1OTA5MDkxcmVtICArICAxLjcwNDU0NTQ1NDV2dyAsIDEuODc1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMC45Mzc1cmVtICsgMC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmltZy1ibG9ja19faXRlbS0tc21hbGwge1xuICAgIG1hcmdpbi1yaWdodDogMC45Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgd2lkdGg6IDE2Ljg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCA4LjQzNzVyZW0gLCA1LjM2OTMxODE4MThyZW0gICsgIDE1LjM0MDkwOTA5MDl2dyAsIDE2Ljg3NXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19faXRlbS0tc21hbGwge1xuICAgICAgd2lkdGg6IGNsYW1wKCA4LjQzNzVyZW0gLCA1LjM2OTMxODE4MThyZW0gICsgIDE1LjM0MDkwOTA5MDl2dyAsIDE2Ljg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDguNDM3NXJlbSAsIDUuMzY5MzE4MTgxOHJlbSAgKyAgMTUuMzQwOTA5MDkwOXZ3ICwgMTYuODc1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgICB3aWR0aDogY2FsYyg4LjQzNzVyZW0gKyA4LjQzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgd2lkdGg6IDguNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmltZy1ibG9ja19faXRlbS0tc21hbGwge1xuICAgIGhlaWdodDogOC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggNXJlbSAsIDMuNjM2MzYzNjM2NHJlbSAgKyAgNi44MTgxODE4MTgydncgLCA4Ljc1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCA1cmVtICwgMy42MzYzNjM2MzY0cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDguNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggNXJlbSAsIDMuNjM2MzYzNjM2NHJlbSAgKyAgNi44MTgxODE4MTgydncgLCA4Ljc1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgICBoZWlnaHQ6IGNhbGMoNXJlbSArIDMuNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgaGVpZ2h0OiA1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1taWRkbGUge1xuICAgIHdpZHRoOiAxNi44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggOC40Mzc1cmVtICwgNS4zNjkzMTgxODE4cmVtICArICAxNS4zNDA5MDkwOTA5dncgLCAxNi44NzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLW1pZGRsZSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDguNDM3NXJlbSAsIDUuMzY5MzE4MTgxOHJlbSAgKyAgMTUuMzQwOTA5MDkwOXZ3ICwgMTYuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggOC40Mzc1cmVtICwgNS4zNjkzMTgxODE4cmVtICArICAxNS4zNDA5MDkwOTA5dncgLCAxNi44NzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLW1pZGRsZSB7XG4gICAgICB3aWR0aDogY2FsYyg4LjQzNzVyZW0gKyA4LjQzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1taWRkbGUge1xuICAgIHdpZHRoOiA4LjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLW1pZGRsZSB7XG4gICAgaGVpZ2h0OiAxNS42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGhlaWdodDogY2xhbXAoIDcuODEyNXJlbSAsIDQuOTcxNTkwOTA5MXJlbSAgKyAgMTQuMjA0NTQ1NDU0NXZ3ICwgMTUuNjI1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1taWRkbGUge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggNy44MTI1cmVtICwgNC45NzE1OTA5MDkxcmVtICArICAxNC4yMDQ1NDU0NTQ1dncgLCAxNS42MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggNy44MTI1cmVtICwgNC45NzE1OTA5MDkxcmVtICArICAxNC4yMDQ1NDU0NTQ1dncgLCAxNS42MjVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLW1pZGRsZSB7XG4gICAgICBoZWlnaHQ6IGNhbGMoNy44MTI1cmVtICsgNy44MTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmltZy1ibG9ja19faXRlbS0tbWlkZGxlIHtcbiAgICBoZWlnaHQ6IDcuODEyNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY3JlYXRlLWluZm8ge1xuICAgIHBhZGRpbmctdG9wOiA1LjgxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgMS4yOTU0NTQ1NDU1cmVtICArICA2LjAyMjcyNzI3Mjd2dyAsIDUuODEyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgMS4yOTU0NTQ1NDU1cmVtICArICA2LjAyMjcyNzI3Mjd2dyAsIDUuODEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIDEuMjk1NDU0NTQ1NXJlbSAgKyAgNi4wMjI3MjcyNzI3dncgLCA1LjgxMjVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mbyB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygyLjVyZW0gKyAzLjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlLWluZm8ge1xuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XG4gIH1cbn1cbi5jcmVhdGUtaW5mb19fdGl0bGUge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIHdpZHRoOiAzNTdweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jcmVhdGUtaW5mb19fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDIuMzEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAwLjg2MzYzNjM2MzZyZW0gICsgIDEuOTMxODE4MTgxOHZ3ICwgMi4zMTI1cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm9fX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgMC44NjM2MzYzNjM2cmVtICArICAxLjkzMTgxODE4MTh2dyAsIDIuMzEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIDAuODYzNjM2MzYzNnJlbSAgKyAgMS45MzE4MTgxODE4dncgLCAyLjMxMjVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjI1cmVtICsgMS4wNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgfVxufVxuLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuMzQwOTA5MDkwOXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA1LjYyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC4zNDA5MDkwOTA5cmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDUuNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC4zNDA5MDkwOTA5cmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuMjVyZW0gKyA0LjM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgIG1hcmdpbi1ib3R0b206IDMuMzEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNjg3NXJlbSAsIDEuMDk2NTkwOTA5MXJlbSAgKyAgMi45NTQ1NDU0NTQ1dncgLCAzLjMxMjVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS42ODc1cmVtICwgMS4wOTY1OTA5MDkxcmVtICArICAyLjk1NDU0NTQ1NDV2dyAsIDMuMzEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS42ODc1cmVtICwgMS4wOTY1OTA5MDkxcmVtICArICAyLjk1NDU0NTQ1NDV2dyAsIDMuMzEyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS42ODc1cmVtICsgMS42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICB3aWR0aDogMjcuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxMy45MDkwOTA5MDkxcmVtICArICAxNy45NTQ1NDU0NTQ1dncgLCAyNy4zNzVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxMy45MDkwOTA5MDkxcmVtICArICAxNy45NTQ1NDU0NTQ1dncgLCAyNy4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTMuOTA5MDkwOTA5MXJlbSAgKyAgMTcuOTU0NTQ1NDU0NXZ3ICwgMjcuMzc1cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgICAgd2lkdGg6IGNhbGMoMTcuNXJlbSArIDkuODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICB3aWR0aDogMTcuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzcuOThweCkge1xuICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4My45OHB4KSB7XG4gIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgzLjk4cHgpIGFuZCAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODMuOThweCkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIDAuNzk1NDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAyLjVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgMC43OTU0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDIuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgMC43OTU0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDIuNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygxLjI1cmVtICsgMS4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODMuOThweCkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jcmVhdGUtaW5mb19fYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogNS42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjM0MDkwOTA5MDlyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgNS42MjVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fYnRuIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjM0MDkwOTA5MDlyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgNS42MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuMzQwOTA5MDkwOXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA1LjYyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX19idG4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMS4yNXJlbSArIDQuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX19idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAzNy45OHB4KSB7XG4gIC5jcmVhdGUtaW5mb19fYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4My45OHB4KSBhbmQgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY3JlYXRlLWluZm9fX2J0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4My45OHB4KSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjc5NTQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMi41cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm9fX2J0biB7XG4gICAgICBtYXJnaW4tbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjc5NTQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMi41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIDAuNzk1NDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAyLjVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fYnRuIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEuMjVyZW0gKyAxLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4My45OHB4KSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlLWluZm9fX2J0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnZhbHVlcyB7XG4gICAgcGFkZGluZy1ib3R0b206IDEzLjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAtMS40NTQ1NDU0NTQ1cmVtICArICAxOS43NzI3MjcyNzI3dncgLCAxMy4zNzVyZW0gKSkge1xuICAgIC52YWx1ZXMge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAtMS40NTQ1NDU0NTQ1cmVtICArICAxOS43NzI3MjcyNzI3dncgLCAxMy4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAtMS40NTQ1NDU0NTQ1cmVtICArICAxOS43NzI3MjcyNzI3dncgLCAxMy4zNzVyZW0gKSkge1xuICAgIC52YWx1ZXMge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMi41cmVtICsgMTAuODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnZhbHVlcyB7XG4gICAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcbiAgfVxufVxuLnZhbHVlc19fdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAudmFsdWVzX190aXRsZSB7XG4gICAgZm9udC1zaXplOiA2LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAzLjQzNzVyZW0gLCAyLjQxNDc3MjcyNzNyZW0gICsgIDUuMTEzNjM2MzYzNnZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLnZhbHVlc19fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMy40Mzc1cmVtICwgMi40MTQ3NzI3MjczcmVtICArICA1LjExMzYzNjM2MzZ2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMy40Mzc1cmVtICwgMi40MTQ3NzI3MjczcmVtICArICA1LjExMzYzNjM2MzZ2dyAsIDYuMjVyZW0gKSkge1xuICAgIC52YWx1ZXNfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygzLjQzNzVyZW0gKyAyLjgxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAudmFsdWVzX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAzLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC52YWx1ZXNfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIDEuNDU0NTQ1NDU0NXJlbSAgKyAgNS4yMjcyNzI3MjczdncgLCA1LjM3NXJlbSApKSB7XG4gICAgLnZhbHVlc19fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIDEuNDU0NTQ1NDU0NXJlbSAgKyAgNS4yMjcyNzI3MjczdncgLCA1LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMi41cmVtICwgMS40NTQ1NDU0NTQ1cmVtICArICA1LjIyNzI3MjcyNzN2dyAsIDUuMzc1cmVtICkpIHtcbiAgICAudmFsdWVzX190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDIuNXJlbSArIDIuODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnZhbHVlc19fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgfVxufVxuLnZhbHVlc19fbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAudmFsdWVzX19saXN0IHtcbiAgICBnYXA6IDQuNjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZ2FwOiBjbGFtcCggMi41cmVtICwgMS43MDQ1NDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDQuNjg3NXJlbSApKSB7XG4gICAgLnZhbHVlc19fbGlzdCB7XG4gICAgICBnYXA6IGNsYW1wKCAyLjVyZW0gLCAxLjcwNDU0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNC42ODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGdhcDogY2xhbXAoIDIuNXJlbSAsIDEuNzA0NTQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjY4NzVyZW0gKSkge1xuICAgIC52YWx1ZXNfX2xpc3Qge1xuICAgICAgZ2FwOiBjYWxjKDIuNXJlbSArIDIuMTg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC52YWx1ZXNfX2xpc3Qge1xuICAgIGdhcDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjUxLjk4cHgpIHtcbiAgLnZhbHVlc19fbGlzdCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG59XG4udmFsdWVzX19pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnZhbHVlc19faXRlbSB7XG4gICAgd2lkdGg6IDIxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDEzLjU3OTU0NTQ1NDVyZW0gICsgIDEwLjIyNzI3MjcyNzN2dyAsIDIxLjI1cmVtICkpIHtcbiAgICAudmFsdWVzX19pdGVtIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTMuNTc5NTQ1NDU0NXJlbSAgKyAgMTAuMjI3MjcyNzI3M3Z3ICwgMjEuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMy41Nzk1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAyMS4yNXJlbSApKSB7XG4gICAgLnZhbHVlc19faXRlbSB7XG4gICAgICB3aWR0aDogY2FsYygxNS42MjVyZW0gKyA1LjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC52YWx1ZXNfX2l0ZW0ge1xuICAgIHdpZHRoOiAxNS42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC52YWx1ZXNfX2l0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLnZhbHVlc19faXRlbSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC52YWx1ZXNfX2l0ZW0ge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDMuMTI1cmVtICsgMy4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAudmFsdWVzX19pdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjUxLjk4cHgpIHtcbiAgLnZhbHVlc19faXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi52YWx1ZXNfX2ltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnZhbHVlc19faW1nIHtcbiAgICB3aWR0aDogNC4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMi4xODc1cmVtICwgMS4zOTIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDQuMzc1cmVtICkpIHtcbiAgICAudmFsdWVzX19pbWcge1xuICAgICAgd2lkdGg6IGNsYW1wKCAyLjE4NzVyZW0gLCAxLjM5MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNC4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAyLjE4NzVyZW0gLCAxLjM5MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNC4zNzVyZW0gKSkge1xuICAgIC52YWx1ZXNfX2ltZyB7XG4gICAgICB3aWR0aDogY2FsYygyLjE4NzVyZW0gKyAyLjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAudmFsdWVzX19pbWcge1xuICAgIHdpZHRoOiAyLjE4NzVyZW07XG4gIH1cbn1cbi52YWx1ZXNfX2xhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgbWFyZ2luLWJvdHRvbTogMTdweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC52YWx1ZXNfX2xhYmVsIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMS4yNXJlbSAsIDEuMTU5MDkwOTA5MXJlbSAgKyAgMC40NTQ1NDU0NTQ1dncgLCAxLjVyZW0gKSkge1xuICAgIC52YWx1ZXNfX2xhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDEuMjVyZW0gLCAxLjE1OTA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMS41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDEuMjVyZW0gLCAxLjE1OTA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMS41cmVtICkpIHtcbiAgICAudmFsdWVzX19sYWJlbCB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMS4yNXJlbSArIDAuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAudmFsdWVzX19sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG4udmFsdWVzX190ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBtYXJnaW4tYm90dG9tOiAxOXB4O1xufVxuLnZhbHVlc19fbW9yZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi52YWx1ZXNfX21vcmU6aG92ZXIgLnZhbHVlc19faWNvbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcbn1cbi52YWx1ZXNfX2ljb24ge1xuICBmaWxsOiB2YXIoLS1kYXJrLWNsKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcbn1cblxuLnN3aXBlci1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLXNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiA4cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIDAuNXJlbSAgKyAgMTB2dyAsIDhyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbiB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIDAuNXJlbSAgKyAgMTB2dyAsIDhyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAwLjVyZW0gICsgIDEwdncgLCA4cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb24ge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMi41cmVtICsgNS41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLXNlY3Rpb24ge1xuICAgIHBhZGRpbmctYm90dG9tOiAxMi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAtMS4wNDU0NTQ1NDU1cmVtICArICAxNy43MjcyNzI3MjczdncgLCAxMi4yNXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMi41cmVtICwgLTEuMDQ1NDU0NTQ1NXJlbSAgKyAgMTcuNzI3MjcyNzI3M3Z3ICwgMTIuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAtMS4wNDU0NTQ1NDU1cmVtICArICAxNy43MjcyNzI3MjczdncgLCAxMi4yNXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDIuNXJlbSArIDkuNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLXNlY3Rpb24ge1xuICAgIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XG4gIH1cbn1cbi5zd2lwZXItc2VjdGlvbl9fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnN3aXBlci1zZWN0aW9uX19jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMyU7XG4gIHRvcDogMjMlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLXNlY3Rpb25fX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIHdpZHRoOiA0MC4wNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgICB3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IGNhbGMoMTIuNXJlbSArIDI3LjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLXNlY3Rpb25fX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLXNlY3Rpb25fX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIGhlaWdodDogNDAuMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uX19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uX19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIGhlaWdodDogY2FsYygxMi41cmVtICsgMjcuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgaGVpZ2h0OiAxMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpIHtcbiAgLnN3aXBlci1zZWN0aW9uX19jb250YWluZXI6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uc3dpcGVyLXNlY3Rpb25fX3dyYXBwZXIge1xuICB6LWluZGV4OiAyO1xufVxuLnN3aXBlci1zZWN0aW9uX19zbGlkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLXNlY3Rpb25fX2ltZy1xdW90ZSB7XG4gICAgd2lkdGg6IDIuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDEuMTg3NXJlbSAsIDAuNzU1NjgxODE4MnJlbSAgKyAgMi4xNTkwOTA5MDkxdncgLCAyLjM3NXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uX19pbWctcXVvdGUge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxLjE4NzVyZW0gLCAwLjc1NTY4MTgxODJyZW0gICsgIDIuMTU5MDkwOTA5MXZ3ICwgMi4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxLjE4NzVyZW0gLCAwLjc1NTY4MTgxODJyZW0gICsgIDIuMTU5MDkwOTA5MXZ3ICwgMi4zNzVyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbl9faW1nLXF1b3RlIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEuMTg3NXJlbSArIDEuMTg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9faW1nLXF1b3RlIHtcbiAgICB3aWR0aDogMS4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLXNlY3Rpb25fX2ltZy1xdW90ZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNS43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAtMC4zODYzNjM2MzY0cmVtICArICA4LjE4MTgxODE4MTh2dyAsIDUuNzVyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbl9faW1nLXF1b3RlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgLTAuMzg2MzYzNjM2NHJlbSAgKyAgOC4xODE4MTgxODE4dncgLCA1Ljc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgLTAuMzg2MzYzNjM2NHJlbSAgKyAgOC4xODE4MTgxODE4dncgLCA1Ljc1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX2ltZy1xdW90ZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuMjVyZW0gKyA0LjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLXNlY3Rpb25fX2ltZy1xdW90ZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgfVxufVxuLnN3aXBlci1zZWN0aW9uX190ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzMyOTU0NTQ1NXJlbSAgKyAgMS4wMjI3MjcyNzI3dncgLCAxLjVyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbl9fdGV4dCB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjczMjk1NDU0NTVyZW0gICsgIDEuMDIyNzI3MjcyN3Z3ICwgMS41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzMyOTU0NTQ1NXJlbSAgKyAgMS4wMjI3MjcyNzI3dncgLCAxLjVyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbl9fdGV4dCB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC45Mzc1cmVtICsgMC41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX190ZXh0IHtcbiAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX190ZXh0IHtcbiAgICB3aWR0aDogNDIuMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxOC43NXJlbSAsIDEwLjI3MjcyNzI3MjdyZW0gICsgIDQyLjM4NjM2MzYzNjR2dyAsIDQyLjA2MjVyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbl9fdGV4dCB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE4Ljc1cmVtICwgMTAuMjcyNzI3MjcyN3JlbSAgKyAgNDIuMzg2MzYzNjM2NHZ3ICwgNDIuMDYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE4Ljc1cmVtICwgMTAuMjcyNzI3MjcyN3JlbSAgKyAgNDIuMzg2MzYzNjM2NHZ3ICwgNDIuMDYyNXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uX190ZXh0IHtcbiAgICAgIHdpZHRoOiBjYWxjKDE4Ljc1cmVtICsgMjMuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9fdGV4dCB7XG4gICAgd2lkdGg6IDE4Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICAgIG1hcmdpbi1ib3R0b206IDIuMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNTI4NDA5MDkwOXJlbSAgKyAgMi4wNDU0NTQ1NDU1dncgLCAyLjA2MjVyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbl9fdGV4dCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC41Mjg0MDkwOTA5cmVtICArICAyLjA0NTQ1NDU0NTV2dyAsIDIuMDYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC41Mjg0MDkwOTA5cmVtICArICAyLjA0NTQ1NDU0NTV2dyAsIDIuMDYyNXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uX190ZXh0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMC45Mzc1cmVtICsgMS4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICAgIG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcbiAgfVxufVxuLnN3aXBlci1zZWN0aW9uX19hdXRob3Ige1xuICBjb2xvcjogIzk2OTY5NjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cblxuLnNlY29uZC1jb3VudGVyIHtcbiAgei1pbmRleDogMjtcbiAgbGVmdDogNDclO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc2Vjb25kLWNvdW50ZXIge1xuICAgIGJvdHRvbTogLTcuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoYm90dG9tOiBjbGFtcCggLTcuNXJlbSAsIDIuNzI3MjcyODEyNXJlbSAgKyAgLTEzLjYzNjM2Mzc1dncgLCAwLjAwMDAwMDA2MjVyZW0gKSkge1xuICAgIC5zZWNvbmQtY291bnRlciB7XG4gICAgICBib3R0b206IGNsYW1wKCAtNy41cmVtICwgMi43MjcyNzI4MTI1cmVtICArICAtMTMuNjM2MzYzNzV2dyAsIDAuMDAwMDAwMDYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChib3R0b206IGNsYW1wKCAtNy41cmVtICwgMi43MjcyNzI4MTI1cmVtICArICAtMTMuNjM2MzYzNzV2dyAsIDAuMDAwMDAwMDYyNXJlbSApKSB7XG4gICAgLnNlY29uZC1jb3VudGVyIHtcbiAgICAgIGJvdHRvbTogY2FsYygwLjAwMDAwMDA2MjVyZW0gKyAtNy41MDAwMDAwNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnNlY29uZC1jb3VudGVyIHtcbiAgICBib3R0b206IDAuMDAwMDAwMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLnNlY29uZC1jb3VudGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uc2Vjb25kLWNvdW50ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA0MDVweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc2Vjb25kLWNvdW50ZXI6OmJlZm9yZSB7XG4gICAgbGVmdDogLTM0LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChsZWZ0OiBjbGFtcCggLTM0LjI1cmVtICwgMC45NDg4NjM2MzY0cmVtICArICAtNDYuOTMxODE4MTgxOHZ3ICwgLTguNDM3NXJlbSApKSB7XG4gICAgLnNlY29uZC1jb3VudGVyOjpiZWZvcmUge1xuICAgICAgbGVmdDogY2xhbXAoIC0zNC4yNXJlbSAsIDAuOTQ4ODYzNjM2NHJlbSAgKyAgLTQ2LjkzMTgxODE4MTh2dyAsIC04LjQzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGVmdDogY2xhbXAoIC0zNC4yNXJlbSAsIDAuOTQ4ODYzNjM2NHJlbSAgKyAgLTQ2LjkzMTgxODE4MTh2dyAsIC04LjQzNzVyZW0gKSkge1xuICAgIC5zZWNvbmQtY291bnRlcjo6YmVmb3JlIHtcbiAgICAgIGxlZnQ6IGNhbGMoLTguNDM3NXJlbSArIC0yNS44MTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnNlY29uZC1jb3VudGVyOjpiZWZvcmUge1xuICAgIGxlZnQ6IC04LjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zZWNvbmQtY291bnRlcjo6YmVmb3JlIHtcbiAgICB3aWR0aDogMTAuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCA1cmVtICwgM3JlbSAgKyAgMTB2dyAsIDEwLjVyZW0gKSkge1xuICAgIC5zZWNvbmQtY291bnRlcjo6YmVmb3JlIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggNXJlbSAsIDNyZW0gICsgIDEwdncgLCAxMC41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggNXJlbSAsIDNyZW0gICsgIDEwdncgLCAxMC41cmVtICkpIHtcbiAgICAuc2Vjb25kLWNvdW50ZXI6OmJlZm9yZSB7XG4gICAgICB3aWR0aDogY2FsYyg1cmVtICsgNS41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnNlY29uZC1jb3VudGVyOjpiZWZvcmUge1xuICAgIHdpZHRoOiA1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuc2Vjb25kLWNvdW50ZXI6OmJlZm9yZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnNlY29uZC1jb3VudGVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMDBweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zZWNvbmQtY291bnRlcjo6YWZ0ZXIge1xuICAgIHJpZ2h0OiAtMzZyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHJpZ2h0OiBjbGFtcCggLTM2cmVtICwgMi44NjM2MzYzNjM2cmVtICArICAtNTEuODE4MTgxODE4MnZ3ICwgLTcuNXJlbSApKSB7XG4gICAgLnNlY29uZC1jb3VudGVyOjphZnRlciB7XG4gICAgICByaWdodDogY2xhbXAoIC0zNnJlbSAsIDIuODYzNjM2MzYzNnJlbSAgKyAgLTUxLjgxODE4MTgxODJ2dyAsIC03LjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocmlnaHQ6IGNsYW1wKCAtMzZyZW0gLCAyLjg2MzYzNjM2MzZyZW0gICsgIC01MS44MTgxODE4MTgydncgLCAtNy41cmVtICkpIHtcbiAgICAuc2Vjb25kLWNvdW50ZXI6OmFmdGVyIHtcbiAgICAgIHJpZ2h0OiBjYWxjKC03LjVyZW0gKyAtMjguNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zZWNvbmQtY291bnRlcjo6YWZ0ZXIge1xuICAgIHJpZ2h0OiAtNy41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc2Vjb25kLWNvdW50ZXI6OmFmdGVyIHtcbiAgICB3aWR0aDogNC4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMi4xODc1cmVtICwgMS4zOTIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDQuMzc1cmVtICkpIHtcbiAgICAuc2Vjb25kLWNvdW50ZXI6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMi4xODc1cmVtICwgMS4zOTIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDQuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMi4xODc1cmVtICwgMS4zOTIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDQuMzc1cmVtICkpIHtcbiAgICAuc2Vjb25kLWNvdW50ZXI6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDIuMTg3NXJlbSArIDIuMTg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zZWNvbmQtY291bnRlcjo6YWZ0ZXIge1xuICAgIHdpZHRoOiAyLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5zZWNvbmQtY291bnRlcjo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNsaWVudHMge1xuICAgIHBhZGRpbmctdG9wOiA5LjY4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgLTAuMTEzNjM2MzYzNnJlbSAgKyAgMTMuMDY4MTgxODE4MnZ3ICwgOS42ODc1cmVtICkpIHtcbiAgICAuY2xpZW50cyB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIC0wLjExMzYzNjM2MzZyZW0gICsgIDEzLjA2ODE4MTgxODJ2dyAsIDkuNjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIC0wLjExMzYzNjM2MzZyZW0gICsgIDEzLjA2ODE4MTgxODJ2dyAsIDkuNjg3NXJlbSApKSB7XG4gICAgLmNsaWVudHMge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMi41cmVtICsgNy4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNsaWVudHMge1xuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jbGllbnRzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogOS42ODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIC0wLjExMzYzNjM2MzZyZW0gICsgIDEzLjA2ODE4MTgxODJ2dyAsIDkuNjg3NXJlbSApKSB7XG4gICAgLmNsaWVudHMge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAtMC4xMTM2MzYzNjM2cmVtICArICAxMy4wNjgxODE4MTgydncgLCA5LjY4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAtMC4xMTM2MzYzNjM2cmVtICArICAxMy4wNjgxODE4MTgydncgLCA5LjY4NzVyZW0gKSkge1xuICAgIC5jbGllbnRzIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDIuNXJlbSArIDcuMTg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jbGllbnRzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xuICB9XG59XG4uY2xpZW50c19fY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5NzVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NzkuOThweCkge1xuICAuY2xpZW50c19fY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY2xpZW50c19fdGl0bGUtYmxvY2sge1xuICAgIG1hcmdpbi1yaWdodDogMTYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1yaWdodDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIC01LjkwOTA5MDgyMzlyZW0gICsgIDI5LjU0NTQ1NDQzMTh2dyAsIDE2LjI1cmVtICkpIHtcbiAgICAuY2xpZW50c19fdGl0bGUtYmxvY2sge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTUuOTA5MDkwODIzOXJlbSAgKyAgMjkuNTQ1NDU0NDMxOHZ3ICwgMTYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTUuOTA5MDkwODIzOXJlbSAgKyAgMjkuNTQ1NDU0NDMxOHZ3ICwgMTYuMjVyZW0gKSkge1xuICAgIC5jbGllbnRzX190aXRsZS1ibG9jayB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMC4wMDAwMDAwNjI1cmVtICsgMTYuMjQ5OTk5OTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jbGllbnRzX190aXRsZS1ibG9jayB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjAwMDAwMDA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NzkuOThweCkge1xuICAuY2xpZW50c19fdGl0bGUtYmxvY2sge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5jbGllbnRzX191cHBlcnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jbGllbnRzX191cHBlcnRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjY4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjY2NDc3MjcyNzNyZW0gICsgIDEuMzYzNjM2MzYzNnZ3ICwgMS42ODc1cmVtICkpIHtcbiAgICAuY2xpZW50c19fdXBwZXJ0aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC42NjQ3NzI3MjczcmVtICArICAxLjM2MzYzNjM2MzZ2dyAsIDEuNjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC42NjQ3NzI3MjczcmVtICArICAxLjM2MzYzNjM2MzZ2dyAsIDEuNjg3NXJlbSApKSB7XG4gICAgLmNsaWVudHNfX3VwcGVydGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygwLjkzNzVyZW0gKyAwLjc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNsaWVudHNfX3VwcGVydGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcbiAgfVxufVxuLmNsaWVudHNfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jbGllbnRzX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAyLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMS4yNzI3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTI1cmVtICkpIHtcbiAgICAuY2xpZW50c19fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMS4yNzI3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDEuNXJlbSAsIDEuMjcyNzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjEyNXJlbSApKSB7XG4gICAgLmNsaWVudHNfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jbGllbnRzX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jbGllbnRzX190aXRsZSB7XG4gICAgd2lkdGg6IDE2Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDcuODEyNXJlbSAsIDQuNTYyNXJlbSAgKyAgMTYuMjV2dyAsIDE2Ljc1cmVtICkpIHtcbiAgICAuY2xpZW50c19fdGl0bGUge1xuICAgICAgd2lkdGg6IGNsYW1wKCA3LjgxMjVyZW0gLCA0LjU2MjVyZW0gICsgIDE2LjI1dncgLCAxNi43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDcuODEyNXJlbSAsIDQuNTYyNXJlbSAgKyAgMTYuMjV2dyAsIDE2Ljc1cmVtICkpIHtcbiAgICAuY2xpZW50c19fdGl0bGUge1xuICAgICAgd2lkdGg6IGNhbGMoNy44MTI1cmVtICsgOC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNsaWVudHNfX3RpdGxlIHtcbiAgICB3aWR0aDogNy44MTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzc5Ljk4cHgpIHtcbiAgLmNsaWVudHNfX3RpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG4uY2xpZW50c19fbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNsaWVudHNfX2xpc3Qge1xuICAgIHJvdy1nYXA6IDMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChyb3ctZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAxLjQyMDQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMy4xMjVyZW0gKSkge1xuICAgIC5jbGllbnRzX19saXN0IHtcbiAgICAgIHJvdy1nYXA6IGNsYW1wKCAxLjg3NXJlbSAsIDEuNDIwNDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAzLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChyb3ctZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAxLjQyMDQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMy4xMjVyZW0gKSkge1xuICAgIC5jbGllbnRzX19saXN0IHtcbiAgICAgIHJvdy1nYXA6IGNhbGMoMS44NzVyZW0gKyAxLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNsaWVudHNfX2xpc3Qge1xuICAgIHJvdy1nYXA6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzc5Ljk4cHgpIHtcbiAgLmNsaWVudHNfX2xpc3Qge1xuICAgIHdpZHRoOiA3MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm5ldyB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIC0wLjIyNzI3MjcyNzNyZW0gICsgIDEzLjYzNjM2MzYzNjR2dyAsIDEwcmVtICkpIHtcbiAgICAubmV3IHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMi41cmVtICwgLTAuMjI3MjcyNzI3M3JlbSAgKyAgMTMuNjM2MzYzNjM2NHZ3ICwgMTByZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAtMC4yMjcyNzI3MjczcmVtICArICAxMy42MzYzNjM2MzY0dncgLCAxMHJlbSApKSB7XG4gICAgLm5ldyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygyLjVyZW0gKyA3LjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubmV3IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xuICB9XG59XG4ubmV3X19jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubmV3X19jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm5ld19fY29udGFpbmVyOjphZnRlciB7XG4gICAgYm90dG9tOiAtMTByZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGJvdHRvbTogY2xhbXAoIC0xMHJlbSAsIC0yLjMyOTU0NTQ1NDVyZW0gICsgIC0xMC4yMjcyNzI3MjczdncgLCAtNC4zNzVyZW0gKSkge1xuICAgIC5uZXdfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgYm90dG9tOiBjbGFtcCggLTEwcmVtICwgLTIuMzI5NTQ1NDU0NXJlbSAgKyAgLTEwLjIyNzI3MjcyNzN2dyAsIC00LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChib3R0b206IGNsYW1wKCAtMTByZW0gLCAtMi4zMjk1NDU0NTQ1cmVtICArICAtMTAuMjI3MjcyNzI3M3Z3ICwgLTQuMzc1cmVtICkpIHtcbiAgICAubmV3X19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIGJvdHRvbTogY2FsYygtNC4zNzVyZW0gKyAtNS42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubmV3X19jb250YWluZXI6OmFmdGVyIHtcbiAgICBib3R0b206IC00LjM3NXJlbTtcbiAgfVxufVxuLm5ld19fdGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubmV3X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxLjVyZW0gLCAwLjk1NDU0NTQ1NDVyZW0gICsgIDIuNzI3MjcyNzI3M3Z3ICwgM3JlbSApKSB7XG4gICAgLm5ld19fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMC45NTQ1NDU0NTQ1cmVtICArICAyLjcyNzI3MjcyNzN2dyAsIDNyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMC45NTQ1NDU0NTQ1cmVtICArICAyLjcyNzI3MjcyNzN2dyAsIDNyZW0gKSkge1xuICAgIC5uZXdfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjVyZW0gKyAxLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubmV3X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5uZXdfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuODc1cmVtICwgMC41MTEzNjM2MzY0cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAubmV3X190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS44NzVyZW0gLCAwLjUxMTM2MzYzNjRyZW0gICsgIDYuODE4MTgxODE4MnZ3ICwgNS42MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuODc1cmVtICwgMC41MTEzNjM2MzY0cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAubmV3X190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuODc1cmVtICsgMy43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5uZXdfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjg3NXJlbTtcbiAgfVxufVxuLm5ld19fbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubmV3X19saXN0IHtcbiAgICBnYXA6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChnYXA6IGNsYW1wKCAxLjg3NXJlbSAsIDIuNzI3MjcyNzI3M3JlbSAgKyAgLTEuMTM2MzYzNjM2NHZ3ICwgMi41cmVtICkpIHtcbiAgICAubmV3X19saXN0IHtcbiAgICAgIGdhcDogY2xhbXAoIDEuODc1cmVtICwgMi43MjcyNzI3MjczcmVtICArICAtMS4xMzYzNjM2MzY0dncgLCAyLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAyLjcyNzI3MjcyNzNyZW0gICsgIC0xLjEzNjM2MzYzNjR2dyAsIDIuNXJlbSApKSB7XG4gICAgLm5ld19fbGlzdCB7XG4gICAgICBnYXA6IGNhbGMoMi41cmVtICsgLTAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm5ld19fbGlzdCB7XG4gICAgZ2FwOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5uZXdfX2xpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjg3NXJlbSAsIDAuNzM4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA1cmVtICkpIHtcbiAgICAubmV3X19saXN0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjg3NXJlbSAsIDAuNzM4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjg3NXJlbSAsIDAuNzM4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA1cmVtICkpIHtcbiAgICAubmV3X19saXN0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS44NzVyZW0gKyAzLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5uZXdfX2xpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDEuODc1cmVtO1xuICB9XG59XG4ubmV3X19pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm5ld19faXRlbSB7XG4gICAgd2lkdGg6IDIzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTUuNDU0NTQ1NDU0NXJlbSAgKyAgMTAuMjI3MjcyNzI3M3Z3ICwgMjMuMTI1cmVtICkpIHtcbiAgICAubmV3X19pdGVtIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDE1LjQ1NDU0NTQ1NDVyZW0gICsgIDEwLjIyNzI3MjcyNzN2dyAsIDIzLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxNS40NTQ1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAyMy4xMjVyZW0gKSkge1xuICAgIC5uZXdfX2l0ZW0ge1xuICAgICAgd2lkdGg6IGNhbGMoMTcuNXJlbSArIDUuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm5ld19faXRlbSB7XG4gICAgd2lkdGg6IDE3LjVyZW07XG4gIH1cbn1cbi5uZXdfX2RhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDM1JTtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm5ld19fZGF0ZSB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC42MjVyZW0gLCAwLjUzNDA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMC44NzVyZW0gKSkge1xuICAgIC5uZXdfX2RhdGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC42MjVyZW0gLCAwLjUzNDA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMC44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC42MjVyZW0gLCAwLjUzNDA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMC44NzVyZW0gKSkge1xuICAgIC5uZXdfX2RhdGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuNjI1cmVtICsgMC4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5uZXdfX2RhdGUge1xuICAgIGZvbnQtc2l6ZTogMC42MjVyZW07XG4gIH1cbn1cbi5uZXdfX2ltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubmV3X19pbWFnZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS42ODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC42NjQ3NzI3MjczcmVtICArICAxLjM2MzYzNjM2MzZ2dyAsIDEuNjg3NXJlbSApKSB7XG4gICAgLm5ld19faW1hZ2Uge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNjY0NzcyNzI3M3JlbSAgKyAgMS4zNjM2MzYzNjM2dncgLCAxLjY4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNjY0NzcyNzI3M3JlbSAgKyAgMS4zNjM2MzYzNjM2dncgLCAxLjY4NzVyZW0gKSkge1xuICAgIC5uZXdfX2ltYWdlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMC45Mzc1cmVtICsgMC43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5uZXdfX2ltYWdlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjkzNzVyZW07XG4gIH1cbn1cbi5uZXdfX3RleHQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm5ld19fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxcmVtICwgMC45MDkwOTA5MDkxcmVtICArICAwLjQ1NDU0NTQ1NDV2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5uZXdfX3RleHQge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMXJlbSAsIDAuOTA5MDkwOTA5MXJlbSAgKyAgMC40NTQ1NDU0NTQ1dncgLCAxLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDFyZW0gLCAwLjkwOTA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLm5ld19fdGV4dCB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMXJlbSArIDAuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubmV3X190ZXh0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5uZXdfX3RleHQge1xuICAgIHdpZHRoOiAxOC4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTYuMjVyZW0gLCAxNS40NzcyNzI3MjczcmVtICArICAzLjg2MzYzNjM2MzZ2dyAsIDE4LjM3NXJlbSApKSB7XG4gICAgLm5ld19fdGV4dCB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE2LjI1cmVtICwgMTUuNDc3MjcyNzI3M3JlbSAgKyAgMy44NjM2MzYzNjM2dncgLCAxOC4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNi4yNXJlbSAsIDE1LjQ3NzI3MjcyNzNyZW0gICsgIDMuODYzNjM2MzYzNnZ3ICwgMTguMzc1cmVtICkpIHtcbiAgICAubmV3X190ZXh0IHtcbiAgICAgIHdpZHRoOiBjYWxjKDE2LjI1cmVtICsgMi4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubmV3X190ZXh0IHtcbiAgICB3aWR0aDogMTYuMjVyZW07XG4gIH1cbn1cbi5uZXdfX2J0biB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAud29yayB7XG4gICAgcGFkZGluZy10b3A6IDkuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIC0wLjE4MTgxODE4MThyZW0gICsgIDEzLjQwOTA5MDkwOTF2dyAsIDkuODc1cmVtICkpIHtcbiAgICAud29yayB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIC0wLjE4MTgxODE4MThyZW0gICsgIDEzLjQwOTA5MDkwOTF2dyAsIDkuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgLTAuMTgxODE4MTgxOHJlbSAgKyAgMTMuNDA5MDkwOTA5MXZ3ICwgOS44NzVyZW0gKSkge1xuICAgIC53b3JrIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDIuNXJlbSArIDcuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLndvcmsge1xuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC53b3JrIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogOS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMi41cmVtICwgLTAuMTgxODE4MTgxOHJlbSAgKyAgMTMuNDA5MDkwOTA5MXZ3ICwgOS44NzVyZW0gKSkge1xuICAgIC53b3JrIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMi41cmVtICwgLTAuMTgxODE4MTgxOHJlbSAgKyAgMTMuNDA5MDkwOTA5MXZ3ICwgOS44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAtMC4xODE4MTgxODE4cmVtICArICAxMy40MDkwOTA5MDkxdncgLCA5Ljg3NXJlbSApKSB7XG4gICAgLndvcmsge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMi41cmVtICsgNy4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAud29yayB7XG4gICAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcbiAgfVxufVxuLndvcmtfX2NvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi53b3JrX19ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDkuOThweCkge1xuICAud29ya19fYmxvY2sge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbi53b3JrX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAud29ya19fdGl0bGUge1xuICAgIHdpZHRoOiAzMC4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDEwLjMyOTU0NTQ1NDVyZW0gICsgIDI2LjQ3NzI3MjcyNzN2dyAsIDMwLjE4NzVyZW0gKSkge1xuICAgIC53b3JrX190aXRsZSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDEwLjMyOTU0NTQ1NDVyZW0gICsgIDI2LjQ3NzI3MjcyNzN2dyAsIDMwLjE4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMC4zMjk1NDU0NTQ1cmVtICArICAyNi40NzcyNzI3MjczdncgLCAzMC4xODc1cmVtICkpIHtcbiAgICAud29ya19fdGl0bGUge1xuICAgICAgd2lkdGg6IGNhbGMoMTUuNjI1cmVtICsgMTQuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC53b3JrX190aXRsZSB7XG4gICAgd2lkdGg6IDE1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLndvcmtfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC53b3JrX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC53b3JrX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMy4xMjVyZW0gKyAzLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC53b3JrX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAzLjEyNXJlbTtcbiAgfVxufVxuLndvcmtfX3RpdGxlIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG4ud29ya19fdGl0bGUgc3Bhbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbn1cbi53b3JrX19pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQ3JTtcbiAgYm90dG9tOiAzOHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLndvcmtfX2ltZyB7XG4gICAgd2lkdGg6IDE0LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCA3LjE4NzVyZW0gLCA0LjU3Mzg2MzYzNjRyZW0gICsgIDEzLjA2ODE4MTgxODJ2dyAsIDE0LjM3NXJlbSApKSB7XG4gICAgLndvcmtfX2ltZyB7XG4gICAgICB3aWR0aDogY2xhbXAoIDcuMTg3NXJlbSAsIDQuNTczODYzNjM2NHJlbSAgKyAgMTMuMDY4MTgxODE4MnZ3ICwgMTQuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggNy4xODc1cmVtICwgNC41NzM4NjM2MzY0cmVtICArICAxMy4wNjgxODE4MTgydncgLCAxNC4zNzVyZW0gKSkge1xuICAgIC53b3JrX19pbWcge1xuICAgICAgd2lkdGg6IGNhbGMoNy4xODc1cmVtICsgNy4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLndvcmtfX2ltZyB7XG4gICAgd2lkdGg6IDcuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY0OS45OHB4KSB7XG4gIC53b3JrX19pbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi53b3JrX19saW5rIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcbn1cbi53b3JrX19saW5rOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG59XG5cbjpyb290IHtcbiAgLS1kYXJrLWNsOiAjMEUwRTBFO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9udWxsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvcG9wdXAuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2hvbWUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvdXRpbHMvdmFycy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBREdEOztBQ0RBOzs7RUFHQyxzQkFBQTtBRElEOztBQ01BOztFQUVDLFlBQUE7RUFDQSxnQkFBQTtBREhEOztBQ0tBO0VBQ0MsY0FBQTtFQUNBLGNBQUE7RUFDQSxvQkROWTtFQ09aLG9CRE5VO0VDUVYsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBREhEOztBQ0tBOzs7RUFHQyxvQkRsQlk7RUNtQlosa0JBQUE7RUFDQSxvQkFBQTtB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SSxnQ0FBQTtFQUNBLGdCQUFBO0FOaWhCSjtBS3RjRTtFQy9FRjtJRGdGRyxzQkFBQTtFTHljRDtBQUNGO0FLdGNDO0VBRUM7SUN0RkY7TUR1RkcsNkVBaEJjO0lMd2RiO0VBQ0Y7RUt0Y0E7SUMxRkY7TUQyRkcseURBQUE7SUx5Y0M7RUFDRjtBQUNGO0FLdmNFO0VDL0ZGO0lEZ0dHLG1CQUFBO0VMMGNEO0FBQ0Y7QUs1ZEU7RUMvRUY7SURnRkcsd0JBQUE7RUwrZEQ7QUFDRjtBSzVkQztFQUVDO0lDdEZGO01EdUZHLGlGQWhCYztJTDhlYjtFQUNGO0VLNWRBO0lDMUZGO01EMkZHLDREQUFBO0lMK2RDO0VBQ0Y7QUFDRjtBSzdkRTtFQy9GRjtJRGdHRyx3QkFBQTtFTGdlRDtBQUNGO0FNNWpCSTtFQUNJLGtCQUFBO0FOOGpCUjtBTTdqQlE7RUFDSSxXQUFBO0VBR0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QU42akJaO0FLN2ZFO0VDeEVNO0lEeUVMLGlCQUFBO0VMZ2dCRDtBQUNGO0FLN2ZDO0VBRUM7SUMvRU07TURnRkwsMEVBaEJjO0lMK2dCYjtFQUNGO0VLN2ZBO0lDbkZNO01Eb0ZMLHFEQUFBO0lMZ2dCQztFQUNGO0FBQ0Y7QUs5ZkU7RUN4Rk07SUR5RkwsY0FBQTtFTGlnQkQ7QUFDRjtBS25oQkU7RUN4RU07SUR5RUwsa0JBQUE7RUxzaEJEO0FBQ0Y7QUtuaEJDO0VBRUM7SUMvRU07TURnRkwsMkVBaEJjO0lMcWlCYjtFQUNGO0VLbmhCQTtJQ25GTTtNRG9GTCxzREFBQTtJTHNoQkM7RUFDRjtBQUNGO0FLcGhCRTtFQ3hGTTtJRHlGTCxlQUFBO0VMdWhCRDtBQUNGO0FNeG1CWTtFQVRKO0lBVVEsYUFBQTtFTjJtQmQ7QUFDRjs7QU12bUJBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QU4wbUJKO0FNeG1CSTtFQUpKO0lBS1Esc0JBQUE7SUFDQSxTQUFBO0VOMm1CTjtBQUNGOztBTXptQkE7RUFFSSxrQkFBQTtBTjJtQko7QUs3akJFO0VDaERGO0lEaURHLFlBQUE7RUxna0JEO0FBQ0Y7QUs3akJDO0VBRUM7SUN2REY7TUR3REcsc0VBaEJjO0lMK2tCYjtFQUNGO0VLN2pCQTtJQzNERjtNRDRERyxpREFBQTtJTGdrQkM7RUFDRjtBQUNGO0FLOWpCRTtFQ2hFRjtJRGlFRyxjQUFBO0VMaWtCRDtBQUNGO0FNaG9CSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBTmtvQlI7QU1qb0JRO0VBUko7SUFTUSxZQUFBO0VOb29CVjtBQUNGO0FNbG9CSTtFQUdJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBTmtvQlI7QUt2bUJFO0VDakNFO0lEa0NELG9CQUFBO0VMMG1CRDtBQUNGO0FLdm1CQztFQUVDO0lDeENFO01EeUNELDhFQWhCYztJTHluQmI7RUFDRjtFS3ZtQkE7SUM1Q0U7TUQ2Q0QsMkRBQUE7SUwwbUJDO0VBQ0Y7QUFDRjtBS3htQkU7RUNqREU7SURrREQscUJBQUE7RUwybUJEO0FBQ0Y7QUs3bkJFO0VDakNFO0lEa0NELHNCQUFBO0VMZ29CRDtBQUNGO0FLN25CQztFQUVDO0lDeENFO01EeUNELGdGQWhCYztJTCtvQmI7RUFDRjtFSzduQkE7SUM1Q0U7TUQ2Q0QsOERBQUE7SUxnb0JDO0VBQ0Y7QUFDRjtBSzluQkU7RUNqREU7SURrREQsd0JBQUE7RUxpb0JEO0FBQ0Y7O0FNMXFCQTtFQUVJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBTjRxQko7QUt6cEJFO0VDdkJGO0lEd0JHLG1CQUFBO0VMNHBCRDtBQUNGO0FLenBCQztFQUVDO0lDOUJGO01EK0JHLDJFQWhCYztJTDJxQmI7RUFDRjtFS3pwQkE7SUNsQ0Y7TURtQ0csdURBQUE7SUw0cEJDO0VBQ0Y7QUFDRjtBSzFwQkU7RUN2Q0Y7SUR3Q0csa0JBQUE7RUw2cEJEO0FBQ0Y7O0FLL3FCRTtFQ2pCRjtJRGtCRyx3QkFBQTtFTG1yQkQ7QUFDRjtBS2hyQkM7RUFFQztJQ3hCRjtNRHlCRywrRUFoQmM7SUxrc0JiO0VBQ0Y7RUtockJBO0lDNUJGO01ENkJHLDJEQUFBO0lMbXJCQztFQUNGO0FBQ0Y7QUtqckJFO0VDakNGO0lEa0NHLHFCQUFBO0VMb3JCRDtBQUNGO0FNbHRCSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FOb3RCUjs7QU1qdEJBO0VBQ0ksYUFBQTtFQUNBLFNBQUE7QU5vdEJKOztBTWx0QkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QU5xdEJKO0FLcnRCRTtFQ0ZGO0lER0csb0JBQUE7RUx3dEJEO0FBQ0Y7QUtydEJDO0VBRUM7SUNURjtNRFVHLG9GQWhCYztJTHV1QmI7RUFDRjtFS3J0QkE7SUNiRjtNRGNHLHdFQUFBO0lMd3RCQztFQUNGO0FBQ0Y7QUt0dEJFO0VDbEJGO0lEbUJHLDRCQUFBO0VMeXRCRDtBQUNGO0FNenVCSTtFQUpKO0lBS1EsY0FBQTtFTjR1Qk47QUFDRjs7QU0xdUJBO0VBRUksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBTjR1Qko7QUt0dkJFO0VDTUY7SURMRyxxQkFBQTtFTHl2QkQ7QUFDRjtBS3R2QkM7RUFFQztJQ0RGO01ERUcsNkVBaEJjO0lMd3dCYjtFQUNGO0VLdHZCQTtJQ0xGO01ETUcsMERBQUE7SUx5dkJDO0VBQ0Y7QUFDRjtBS3Z2QkU7RUNWRjtJRFdHLHNCQUFBO0VMMHZCRDtBQUNGOztBTWh3QkE7RUFFSSxrQkFBQTtBTmt3Qko7QUtoeEJFO0VDWUY7SURYRyxnQkFBQTtFTG14QkQ7QUFDRjtBS2h4QkM7RUFFQztJQ0tGO01ESkcsMEVBaEJjO0lMa3lCYjtFQUNGO0VLaHhCQTtJQ0NGO01EQUcsb0RBQUE7SUxteEJDO0VBQ0Y7QUFDRjtBS2p4QkU7RUNKRjtJREtHLGNBQUE7RUxveEJEO0FBQ0Y7QUt0eUJFO0VDWUY7SURYRyx3QkFBQTtFTHl5QkQ7QUFDRjtBS3R5QkM7RUFFQztJQ0tGO01ESkcsZ0ZBaEJjO0lMd3pCYjtFQUNGO0VLdHlCQTtJQ0NGO01EQUcsNERBQUE7SUx5eUJDO0VBQ0Y7QUFDRjtBS3Z5QkU7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a0JBQUE7QVBxbUNSOztBT2ptQ0E7RUFDSSxrQkFBQTtFQUlBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QVBpbUNKO0FLcGlDRTtFRXBFRjtJRnFFRyxnQkFBQTtFTHVpQ0Q7QUFDRjtBS3BpQ0M7RUFFQztJRTNFRjtNRjRFRyx5RUFoQmM7SUxzakNiO0VBQ0Y7RUtwaUNBO0lFL0VGO01GZ0ZHLG1EQUFBO0lMdWlDQztFQUNGO0FBQ0Y7QUtyaUNFO0VFcEZGO0lGcUZHLGdCQUFBO0VMd2lDRDtBQUNGO0FLMWpDRTtFRXBFRjtJRnFFRyxhQUFBO0VMNmpDRDtBQUNGO0FLMWpDQztFQUVDO0lFM0VGO01GNEVHLHlFQWhCYztJTDRrQ2I7RUFDRjtFSzFqQ0E7SUUvRUY7TUZnRkcsc0RBQUE7SUw2akNDO0VBQ0Y7QUFDRjtBSzNqQ0U7RUVwRkY7SUZxRkcsZUFBQTtFTDhqQ0Q7QUFDRjtBS2hsQ0U7RUVwRUY7SUZxRUcsV0FBQTtFTG1sQ0Q7QUFDRjtBS2hsQ0M7RUFFQztJRTNFRjtNRjRFRyxvRUFoQmM7SUxrbUNiO0VBQ0Y7RUtobENBO0lFL0VGO01GZ0ZHLG9EQUFBO0lMbWxDQztFQUNGO0FBQ0Y7QUtqbENFO0VFcEZGO0lGcUZHLGVBQUE7RUxvbENEO0FBQ0Y7QU9qcUNRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBUGtxQ1o7QUs3bUNFO0VFM0RNO0lGNERMLGNBQUE7RUxnbkNEO0FBQ0Y7QUs3bUNDO0VBRUM7SUVsRU07TUZtRUwsdUVBaEJjO0lMK25DYjtFQUNGO0VLN21DQTtJRXRFTTtNRnVFTCxvREFBQTtJTGduQ0M7RUFDRjtBQUNGO0FLOW1DRTtFRTNFTTtJRjRFTCxlQUFBO0VMaW5DRDtBQUNGO0FLbm9DRTtFRTNETTtJRjRETCxjQUFBO0VMc29DRDtBQUNGO0FLbm9DQztFQUVDO0lFbEVNO01GbUVMLDBEQWhCYztJTHFwQ2I7RUFDRjtFS25vQ0E7SUV0RU07TUZ1RUwscURBQUE7SUxzb0NDO0VBQ0Y7QUFDRjtBS3BvQ0U7RUUzRU07SUY0RUwsZUFBQTtFTHVvQ0Q7QUFDRjtBS3pwQ0U7RUVqREU7SUZrREQsbUJBQUE7RUw0cENEO0FBQ0Y7QUt6cENDO0VBRUM7SUV4REU7TUZ5REQsMkVBaEJjO0lMMnFDYjtFQUNGO0VLenBDQTtJRTVERTtNRjZERCx1REFBQTtJTDRwQ0M7RUFDRjtBQUNGO0FLMXBDRTtFRWpFRTtJRmtFRCxrQkFBQTtFTDZwQ0Q7QUFDRjs7QU8xdENBO0VBQ1Esa0JBQUE7RUFJQSxzQkFBQTtBUDB0Q1I7QUtwckNFO0VFM0NGO0lGNENHLGVBQUE7RUx1ckNEO0FBQ0Y7QUtwckNDO0VBRUM7SUVsREY7TUZtREcseUVBaEJjO0lMc3NDYjtFQUNGO0VLcHJDQTtJRXRERjtNRnVERyxtREFBQTtJTHVyQ0M7RUFDRjtBQUNGO0FLcnJDRTtFRTNERjtJRjRERyxhQUFBO0VMd3JDRDtBQUNGO0FLMXNDRTtFRTNDRjtJRjRDRyxhQUFBO0VMNnNDRDtBQUNGO0FLMXNDQztFQUVDO0lFbERGO01GbURHLHdFQWhCYztJTDR0Q2I7RUFDRjtFSzFzQ0E7SUV0REY7TUZ1REcsb0RBQUE7SUw2c0NDO0VBQ0Y7QUFDRjtBSzNzQ0U7RUUzREY7SUY0REcsY0FBQTtFTDhzQ0Q7QUFDRjtBS2h1Q0U7RUUzQ0Y7SUY0Q0csZUFBQTtFTG11Q0Q7QUFDRjtBS2h1Q0M7RUFFQztJRWxERjtNRm1ERywwRUFoQmM7SUxrdkNiO0VBQ0Y7RUtodUNBO0lFdERGO01GdURHLG1EQUFBO0lMbXVDQztFQUNGO0FBQ0Y7QUtqdUNFO0VFM0RGO0lGNERHLGVBQUE7RUxvdUNEO0FBQ0Y7QU8zeENJO0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtBUDR4Q1I7QUs1dkNFO0VFckNFO0lGc0NELG1CQUFBO0VMK3ZDRDtBQUNGO0FLNXZDQztFQUVDO0lFNUNFO01GNkNELDJFQWhCYztJTDh3Q2I7RUFDRjtFSzV2Q0E7SUVoREU7TUZpREQsdURBQUE7SUwrdkNDO0VBQ0Y7QUFDRjtBSzd2Q0U7RUVyREU7SUZzREQsa0JBQUE7RUxnd0NEO0FBQ0Y7QU9qekNRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FQbXpDWjtBT2h6Q0k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QVBrekNSOztBTzl5Q0E7RUFDSSxrQkFBQTtFQUtBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EscURBQUE7QVA0eUNKO0FLenlDRTtFRWRGO0lGZUcsY0FBQTtFTDR5Q0Q7QUFDRjtBS3p5Q0M7RUFFQztJRXJCRjtNRnNCRyxxRUFoQmM7SUwyekNiO0VBQ0Y7RUt6eUNBO0lFekJGO01GMEJHLGdEQUFBO0lMNHlDQztFQUNGO0FBQ0Y7QUsxeUNFO0VFOUJGO0lGK0JHLFVBQUE7RUw2eUNEO0FBQ0Y7QUsvekNFO0VFZEY7SUZlRyxnQkFBQTtFTGswQ0Q7QUFDRjtBSy96Q0M7RUFFQztJRXJCRjtNRnNCRywwRUFoQmM7SUxpMUNiO0VBQ0Y7RUsvekNBO0lFekJGO01GMEJHLG1EQUFBO0lMazBDQztFQUNGO0FBQ0Y7QUtoMENFO0VFOUJGO0lGK0JHLGNBQUE7RUxtMENEO0FBQ0Y7QUtyMUNFO0VFZEY7SUZlRyxlQUFBO0VMdzFDRDtBQUNGO0FLcjFDQztFQUVDO0lFckJGO01Gc0JHLHlFQWhCYztJTHUyQ2I7RUFDRjtFS3IxQ0E7SUV6QkY7TUYwQkcsc0RBQUE7SUx3MUNDO0VBQ0Y7QUFDRjtBS3QxQ0U7RUU5QkY7SUYrQkcsZ0JBQUE7RUx5MUNEO0FBQ0Y7QUszMkNFO0VFZEY7SUZlRyxnQkFBQTtFTDgyQ0Q7QUFDRjtBSzMyQ0M7RUFFQztJRXJCRjtNRnNCRywwRUFoQmM7SUw2M0NiO0VBQ0Y7RUszMkNBO0lFekJGO01GMEJHLHVEQUFBO0lMODJDQztFQUNGO0FBQ0Y7QUs1MkNFO0VFOUJGO0lGK0JHLGlCQUFBO0VMKzJDRDtBQUNGO0FLajRDRTtFRWRGO0lGZUcsb0JBQUE7RUxvNENEO0FBQ0Y7QUtqNENDO0VBRUM7SUVyQkY7TUZzQkcsNEVBaEJjO0lMbTVDYjtFQUNGO0VLajRDQTtJRXpCRjtNRjBCRyx3REFBQTtJTG80Q0M7RUFDRjtBQUNGO0FLbDRDRTtFRTlCRjtJRitCRyxrQkFBQTtFTHE0Q0Q7QUFDRjtBT3g1Q0k7RUFDSSxxQkFBQTtFQUNBLGlDQUFBO0FQMDVDUjs7QU9yNUNJO0VBRUssV0FBQTtBUHU1Q1Q7QUsvNUNFO0VFTUU7SUZMRCxnQkFBQTtFTGs2Q0Q7QUFDRjtBSy81Q0M7RUFFQztJRURFO01GRUQsMEVBaEJjO0lMaTdDYjtFQUNGO0VLLzVDQTtJRUxFO01GTUQsb0RBQUE7SUxrNkNDO0VBQ0Y7QUFDRjtBS2g2Q0U7RUVWRTtJRldELGdCQUFBO0VMbTZDRDtBQUNGOztBT3o2Q0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QVA0NkNKO0FLMTdDRTtFRVlGO0lGWEcsZUFBQTtFTDY3Q0Q7QUFDRjtBSzE3Q0M7RUFFQztJRUtGO01GSkcsd0VBYmU7SUx5OENkO0VBQ0Y7RUsxN0NBO0lFQ0Y7TUZBRyxrREFBQTtJTDY3Q0M7RUFDRjtBQUNGO0FLMzdDRTtFRUpGO0lGS0csV0FBQTtFTDg3Q0Q7QUFDRjtBT2g4Q0k7RUFKSjtJQUtRLGFBQUE7RVBtOENOO0FBQ0Y7O0FPajhDQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBUG84Q0o7QUsxOUNFO0VFb0JGO0lGbkJHLGdCQUFBO0VMNjlDRDtBQUNGO0FLMTlDQztFQUVDO0lFYUY7TUZaRyx5RUFiZTtJTHkrQ2Q7RUFDRjtFSzE5Q0E7SUVTRjtNRlJHLG1EQUFBO0lMNjlDQztFQUNGO0FBQ0Y7QUszOUNFO0VFSUY7SUZIRyxZQUFBO0VMODlDRDtBQUNGO0FPeDlDSTtFQUpKO0lBS1EsYUFBQTtFUDI5Q047QUFDRjs7QUtyL0NFO0VFZ0NGO0lGL0JHLGtCQUFBO0VMeS9DRDtBQUNGO0FLdC9DQztFQUVDO0lFeUJGO01GeEJHLDJFQWhCYztJTHdnRGI7RUFDRjtFS3QvQ0E7SUVxQkY7TUZwQkcsdURBQUE7SUx5L0NDO0VBQ0Y7QUFDRjtBS3YvQ0U7RUVnQkY7SUZmRyxtQkFBQTtFTDAvQ0Q7QUFDRjtBT3orQ0k7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBUDIrQ1I7O0FPeCtDQTtFQUdJLGNBQUE7RUFDQSxrQkFBQTtBUHkrQ0o7QUtyaERFO0VFd0NGO0lGdkNHLGlCQUFBO0VMd2hERDtBQUNGO0FLcmhEQztFQUVDO0lFaUNGO01GaENHLDZFQWhCYztJTHVpRGI7RUFDRjtFS3JoREE7SUU2QkY7TUY1QkcsdURBQUE7SUx3aERDO0VBQ0Y7QUFDRjtBS3RoREU7RUV3QkY7SUZ2QkcsZ0JBQUE7RUx5aEREO0FBQ0Y7QUszaURFO0VFd0NGO0lGdkNHLHdCQUFBO0VMOGlERDtBQUNGO0FLM2lEQztFQUVDO0lFaUNGO01GaENHLCtFQWhCYztJTDZqRGI7RUFDRjtFSzNpREE7SUU2QkY7TUY1QkcsMkRBQUE7SUw4aURDO0VBQ0Y7QUFDRjtBSzVpREU7RUV3QkY7SUZ2QkcscUJBQUE7RUwraUREO0FBQ0Y7QU9waERJO0VBRUksZ0JBQUE7QVBxaERSO0FLcGtERTtFRTZDRTtJRjVDRCx3QkFBQTtFTHVrREQ7QUFDRjtBS3BrREM7RUFFQztJRXNDRTtNRnJDRCxrRkFoQmM7SUxzbERiO0VBQ0Y7RUtwa0RBO0lFa0NFO01GakNELDZEQUFBO0lMdWtEQztFQUNGO0FBQ0Y7QUtya0RFO0VFNkJFO0lGNUJELHdCQUFBO0VMd2tERDtBQUNGO0FPeGlESTtFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7QVB5aURSO0FLOWxERTtFRWtERTtJRmpERCxtQkFBQTtFTGltREQ7QUFDRjtBSzlsREM7RUFFQztJRTJDRTtNRjFDRCwwRUFoQmM7SUxnbkRiO0VBQ0Y7RUs5bERBO0lFdUNFO01GdENELHNEQUFBO0lMaW1EQztFQUNGO0FBQ0Y7QUsvbERFO0VFa0NFO0lGakNELGlCQUFBO0VMa21ERDtBQUNGOztBTzVqREE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QVArakRKO0FLem5ERTtFRXdERjtJRnZERyxvQkFBQTtFTDRuREQ7QUFDRjtBS3puREM7RUFFQztJRWlERjtNRmhERyw2RUFoQmM7SUwyb0RiO0VBQ0Y7RUt6bkRBO0lFNkNGO01GNUNHLDBEQUFBO0lMNG5EQztFQUNGO0FBQ0Y7QUsxbkRFO0VFd0NGO0lGdkNHLHNCQUFBO0VMNm5ERDtBQUNGO0FLL29ERTtFRXdERjtJRnZERyxhQUFBO0VMa3BERDtBQUNGO0FLL29EQztFQUVDO0lFaURGO01GaERHLG9FQWhCYztJTGlxRGI7RUFDRjtFSy9vREE7SUU2Q0Y7TUY1Q0csZ0RBQUE7SUxrcERDO0VBQ0Y7QUFDRjtBS2hwREU7RUV3Q0Y7SUZ2Q0csV0FBQTtFTG1wREQ7QUFDRjtBT3htREk7RUFMSjtJQU1RLHNCQUFBO0VQMm1ETjtBQUNGO0FLMXFERTtFRXdERjtJRnZERyxvQkFBQTtFTDZxREQ7QUFDRjtBSzFxREM7RUFFQztJRWlERjtNRmhERyw0RUFoQmM7SUw0ckRiO0VBQ0Y7RUsxcURBO0lFNkNGO01GNUNHLHlEQUFBO0lMNnFEQztFQUNGO0FBQ0Y7QUszcURFO0VFd0NGO0lGdkNHLHFCQUFBO0VMOHFERDtBQUNGO0FPOW5ESTtFQUdJLGtCQUFBO0FQOG5EUjtBS25zREU7RUVrRUU7SUZqRUQsaUJBQUE7RUxzc0REO0FBQ0Y7QUtuc0RDO0VBRUM7SUUyREU7TUYxREQsMEVBaEJjO0lMcXREYjtFQUNGO0VLbnNEQTtJRXVERTtNRnRERCxxREFBQTtJTHNzREM7RUFDRjtBQUNGO0FLcHNERTtFRWtERTtJRmpERCxjQUFBO0VMdXNERDtBQUNGO0FLenRERTtFRWtFRTtJRmpFRCxxQkFBQTtFTDR0REQ7QUFDRjtBS3p0REM7RUFFQztJRTJERTtNRjFERCw2RUFoQmM7SUwydURiO0VBQ0Y7RUt6dERBO0lFdURFO01GdERELHlEQUFBO0lMNHREQztFQUNGO0FBQ0Y7QUsxdERFO0VFa0RFO0lGakRELG9CQUFBO0VMNnRERDtBQUNGO0FPdnFESTtFQUVJLGdCQUFBO0FQd3FEUjtBS2x2REU7RUV3RUU7SUZ2RUQsa0JBQUE7RUxxdkREO0FBQ0Y7QUtsdkRDO0VBRUM7SUVpRUU7TUZoRUQsMkVBaEJjO0lMb3dEYjtFQUNGO0VLbHZEQTtJRTZERTtNRjVERCx3REFBQTtJTHF2REM7RUFDRjtBQUNGO0FLbnZERTtFRXdERTtJRnZERCxtQkFBQTtFTHN2REQ7QUFDRjtBTzVyRFE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFFQSxnQ0FBQTtBUDZyRFo7QUtoeERFO0VFNEVNO0lGM0VMLFlBQUE7RUxteEREO0FBQ0Y7QUtoeERDO0VBRUM7SUVxRU07TUZwRUwsdUVBaEJjO0lMa3lEYjtFQUNGO0VLaHhEQTtJRWlFTTtNRmhFTCxzREFBQTtJTG14REM7RUFDRjtBQUNGO0FLanhERTtFRTRETTtJRjNETCxnQkFBQTtFTG94REQ7QUFDRjtBS3R5REU7RUV1RkU7SUZ0RkQsaUJBQUE7RUx5eUREO0FBQ0Y7QUt0eURDO0VBRUM7SUVnRkU7TUYvRUQsNkVBaEJjO0lMd3pEYjtFQUNGO0VLdHlEQTtJRTRFRTtNRjNFRCx1REFBQTtJTHl5REM7RUFDRjtBQUNGO0FLdnlERTtFRXVFRTtJRnRFRCxnQkFBQTtFTDB5REQ7QUFDRjtBT2p1REk7RUFHSSxnQkFBQTtBUGl1RFI7QUsvekRFO0VFMkZFO0lGMUZELG9CQUFBO0VMazBERDtBQUNGO0FLL3pEQztFQUVDO0lFb0ZFO01GbkZELDhFQWhCYztJTGkxRGI7RUFDRjtFSy96REE7SUVnRkU7TUYvRUQseURBQUE7SUxrMERDO0VBQ0Y7QUFDRjtBS2gwREU7RUUyRUU7SUYxRUQsb0JBQUE7RUxtMEREO0FBQ0Y7QUtyMURFO0VFMkZFO0lGMUZELHVCQUFBO0VMdzFERDtBQUNGO0FLcjFEQztFQUVDO0lFb0ZFO01GbkZELGlGQWhCYztJTHUyRGI7RUFDRjtFS3IxREE7SUVnRkU7TUYvRUQsOERBQUE7SUx3MURDO0VBQ0Y7QUFDRjtBS3QxREU7RUUyRUU7SUYxRUQsd0JBQUE7RUx5MUREO0FBQ0Y7O0FPeHdEQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBUDJ3REo7QUtsM0RFO0VFbUdGO0lGbEdHLHVCQUFBO0VMcTNERDtBQUNGO0FLbDNEQztFQUVDO0lFNEZGO01GM0ZH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U0FBQTtBUHE1REo7QU9wNURJO0VBRUkscUZBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0FQbzVEUjtBSzFtRUU7RUVpTkU7SUZoTkQsWUFBQTtFTDZtRUQ7QUFDRjtBSzFtRUM7RUFFQztJRTBNRTtNRnpNRCxzRUFoQmM7SUw0bkViO0VBQ0Y7RUsxbUVBO0lFc01FO01Gck1ELGlEQUFBO0lMNm1FQztFQUNGO0FBQ0Y7QUszbUVFO0VFaU1FO0lGaE1ELGNBQUE7RUw4bUVEO0FBQ0Y7QUtob0VFO0VFaU5FO0lGaE5ELGFBQUE7RUxtb0VEO0FBQ0Y7QUtob0VDO0VBRUM7SUUwTUU7TUZ6TUQsdUVBaEJjO0lMa3BFYjtFQUNGO0VLaG9FQTtJRXNNRTtNRnJNRCxrREFBQTtJTG1vRUM7RUFDRjtBQUNGO0FLam9FRTtFRWlNRTtJRmhNRCxlQUFBO0VMb29FRDtBQUNGO0FPLzdEUTtFQUNJLDJCQUFBO0FQaThEWjtBT2g4RFc7RUFDSyw0QkFBQTtBUGs4RGhCO0FPaDhEVztFQUNDLGlCQUFBO0FQazhEWjtBTzc3REk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBUCs3RFI7QU81N0RDO0VBQ08sa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUdBLDJCQUFBO0VBQ0EsK0JBQUE7QVA0N0RSO0FLNXFFRTtFRXlPRDtJRnhPRSx3QkFBQTtFTCtxRUQ7QUFDRjtBSzVxRUM7RUFFQztJRWtPRDtNRmpPRSxrRkFoQmM7SUw4ckViO0VBQ0Y7RUs1cUVBO0lFOE5EO01GN05FLDREQUFBO0lMK3FFQztFQUNGO0FBQ0Y7QUs3cUVFO0VFeU5EO0lGeE5FLHdCQUFBO0VMZ3JFRDtBQUNGO0FLbHNFRTtFRXlPRDtJRnhPRSxzQkFBQTtFTHFzRUQ7QUFDRjtBS2xzRUM7RUFFQztJRWtPRDtNRmpPRSxnRkFoQmM7SUxvdEViO0VBQ0Y7RUtsc0VBO0lFOE5EO01GN05FLDZEQUFBO0lMcXNFQztFQUNGO0FBQ0Y7QUtuc0VFO0VFeU5EO0lGeE5FLHVCQUFBO0VMc3NFRDtBQUNGO0FPcitEQztFQUNPLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QVB1K0RSO0FPdCtEUTtFQUpQO0lBS1csZUFBQTtFUHkrRFY7QUFDRjtBT3QrREM7RUFDTyxlQUFBO0VBQ0EsV0FBQTtBUHcrRFI7QU92K0RRO0VBSFA7SUFJVyxlQUFBO0VQMCtEVjtBQUNGOztBSzN1RUU7RUV1UUY7SUZ0UUcseUJBQUE7RUwrdUVEO0FBQ0Y7QUs1dUVDO0VBRUM7SUVnUUY7TUYvUEcsa0ZBaEJjO0lMOHZFYjtFQUNGO0VLNXVFQTtJRTRQRjtNRjNQRyw0REFBQTtJTCt1RUM7RUFDRjtBQUNGO0FLN3VFRTtFRXVQRjtJRnRQRyxzQkFBQTtFTGd2RUQ7QUFDRjtBT3ovREk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FQMi9EUjtBS3Z3RUU7RUV5UUU7SUZ4UUQsWUFBQTtFTDB3RUQ7QUFDRjtBS3Z3RUM7RUFFQztJRWtRRTtNRmpRRCxxRUFoQmM7SUx5eEViO0VBQ0Y7RUt2d0VBO0lFOFBFO01GN1BELGtEQUFBO0lMMHdFQztFQUNGO0FBQ0Y7QUt4d0VFO0VFeVBFO0lGeFBELGFBQUE7RUwyd0VEO0FBQ0Y7QU83Z0VJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBUCtnRVI7QU8zZ0VZO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FQNmdFaEI7QUtyeUVFO0VFNFJFO0lGM1JELGdCQUFBO0VMd3lFRDtBQUNGO0FLcnlFQztFQUVDO0lFcVJFO01GcFJELDRFQWhCYztJTHV6RWI7RUFDRjtFS3J5RUE7SUVpUkU7TUZoUkQsd0RBQUE7SUx3eUVDO0VBQ0Y7QUFDRjtBS3R5RUU7RUU0UUU7SUYzUUQsaUJBQUE7RUx5eUVEO0FBQ0Y7QUszekVFO0VFNFJFO0lGM1JELGdCQUFBO0VMOHpFRDtBQUNGO0FLM3pFQztFQUVDO0lFcVJFO01GcFJELDJFQWhCYztJTDYwRWI7RUFDRjtFSzN6RUE7SUVpUkU7TUZoUkQsdURBQUE7SUw4ekVDO0VBQ0Y7QUFDRjtBSzV6RUU7RUU0UUU7SUYzUUQsaUJBQUE7RUwrekVEO0FBQ0Y7QU9oakVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QVBrakVSO0FLdDFFRTtFRWlTRTtJRmhTRCxvQkFBQTtFTHkxRUQ7QUFDRjtBS3QxRUM7RUFFQztJRTBSRTtNRnpSRCw4RUFoQmM7SUx3MkViO0VBQ0Y7RUt0MUVBO0lFc1JFO01GclJELDJEQUFBO0lMeTFFQztFQUNGO0FBQ0Y7QUt2MUVFO0VFaVJFO0lGaFJELHFCQUFBO0VMMDFFRDtBQUNGO0FLNTJFRTtFRWlTRTtJRmhTRCxxQkFBQTtFTCsyRUQ7QUFDRjtBSzUyRUM7RUFFQztJRTBSRTtNRnpSRCw2RUFoQmM7SUw4M0ViO0VBQ0Y7RUs1MkVBO0lFc1JFO01GclJELDBEQUFBO0lMKzJFQztFQUNGO0FBQ0Y7QUs3MkVFO0VFaVJFO0lGaFJELHNCQUFBO0VMZzNFRDtBQUNGO0FPM2xFUTtFQU5KO0lBT1EsZUFBQTtFUDhsRVY7QUFDRjtBTzNsRUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QVA2bEVSO0FLMzRFRTtFRWlURTtJRmhURCxjQUFBO0VMODRFRDtBQUNGO0FLMzRFQztFQUVDO0lFMFNFO01GelNELHdFQWhCYztJTDY1RWI7RUFDRjtFSzM0RUE7SUVzU0U7TUZyU0QsZ0RBQUE7SUw4NEVDO0VBQ0Y7QUFDRjtBSzU0RUU7RUVpU0U7SUZoU0QsY0FBQTtFTCs0RUQ7QUFDRjtBS2o2RUU7RUVpVEU7SUZoVEQsZ0JBQUE7RUxvNkVEO0FBQ0Y7QUtqNkVDO0VBRUM7SUUwU0U7TUZ6U0QsMkVBaEJjO0lMbTdFYjtFQUNGO0VLajZFQTtJRXNTRTtNRnJTRCx1REFBQTtJTG82RUM7RUFDRjtBQUNGO0FLbDZFRTtFRWlTRTtJRmhTRCxpQkFBQTtFTHE2RUQ7QUFDRjtBT2pvRUk7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FQbW9FUjtBT2pvRVE7RUFKSjtJQUtRLGVBQUE7SUFDQSxjQUFBO0VQb29FVjtBQUNGO0FPam9FSTtFQUNJLGtCQUFBO0FQbW9FUjtBT2xvRVE7RUFGSjtJQUdRLGFBQUE7RVBxb0VWO0FBQ0Y7QU9sb0VJO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSw4RkFBQTtBUG9vRVI7QU9sb0VRO0VBUEo7SUFRUSxXQUFBO0lBQ0EsVUFBQTtFUHFvRVY7QUFDRjtBT3BvRVE7RUFYSjtJQVlRLFVBQUE7SUFDQSxTQUFBO0VQdW9FVjtBQUNGOztBT3BvRUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QVB1b0VKO0FLbitFRTtFRXdWRjtJRnZWRyxtQkFBQTtFTHMrRUQ7QUFDRjtBS24rRUM7RUFFQztJRWlWRjtNRmhWRyw2RUFoQmM7SUxxL0ViO0VBQ0Y7RUtuK0VBO0lFNlVGO01GNVVHLDhEQUFBO0lMcytFQztFQUNGO0FBQ0Y7QUtwK0VFO0VFd1VGO0lGdlVHLHdCQUFBO0VMdStFRDtBQUNGO0FLei9FRTtFRXdWRjtJRnZWRyxxQkFBQTtFTDQvRUQ7QUFDRjtBS3ovRUM7RUFFQztJRWlWRjtNRmhWRyw4RUFoQmM7SUwyZ0ZiO0VBQ0Y7RUt6L0VBO0lFNlVGO01GNVVHLHNEQUFBO0lMNC9FQztFQUNGO0FBQ0Y7QUsxL0VFO0VFd1VGO0lGdlVHLHFCQUFBO0VMNi9FRDtBQUNGO0FLL2dGRTtFRXdWRjtJRnZWRyxzQkFBQTtFTGtoRkQ7QUFDRjtBSy9nRkM7RUFFQztJRWlWRjtNRmhWRywrRUFoQmM7SUxpaUZiO0VBQ0Y7RUsvZ0ZBO0lFNlVGO01GNVVHLDREQUFBO0lMa2hGQztFQUNGO0FBQ0Y7QUtoaEZFO0VFd1VGO0lGdlVHLHVCQUFBO0VMbWhGRDtBQUNGO0FPcnNFSTtFQUNJLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtBUHNzRVI7QUsxaUZFO0VFZ1dFO0lGL1ZELGtCQUFBO0VMNmlGRDtBQUNGO0FLMWlGQztFQUVDO0lFeVZFO01GeFZELDJFQWhCYztJTDRqRmI7RUFDRjtFSzFpRkE7SUVxVkU7TUZwVkQsd0RBQUE7SUw2aUZDO0VBQ0Y7QUFDRjtBSzNpRkU7RUVnVkU7SUYvVUQsbUJBQUE7RUw4aUZEO0FBQ0Y7QUtoa0ZFO0VFZ1dFO0lGL1ZELGlCQUFBO0VMbWtGRDtBQUNGO0FLaGtGQztFQUVDO0lFeVZFO01GeFZELDZFQWhCYztJTGtsRmI7RUFDRjtFS2hrRkE7SUVxVkU7TUZwVkQsdURBQUE7SUxta0ZDO0VBQ0Y7QUFDRjtBS2prRkU7RUVnVkU7SUYvVUQsZ0JBQUE7RUxva0ZEO0FBQ0Y7QU9odkVRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QVBpdkVaO0FLOWxGRTtFRXNXTTtJRnJXTCxlQUFBO0VMaW1GRDtBQUNGO0FLOWxGQztFQUVDO0lFK1ZNO01GOVZMLHlFQWhCYztJTGduRmI7RUFDRjtFSzlsRkE7SUUyVk07TUYxVkwsc0RBQUE7SUxpbUZDO0VBQ0Y7QUFDRjtBSy9sRkU7RUVzVk07SUZyVkwsZ0JBQUE7RUxrbUZEO0FBQ0Y7QUtwbkZFO0VFZ1dFO0lGL1ZELG1CQUFBO0VMdW5GRDtBQUNGO0FLcG5GQztFQUVDO0lFeVZFO01GeFZELDZFQWhCYztJTHNvRmI7RUFDRjtFS3BuRkE7SUVxVkU7TUZwVkQsOERBQUE7SUx1bkZDO0VBQ0Y7QUFDRjtBS3JuRkU7RUVnVkU7SUYvVUQsd0JBQUE7RUx3bkZEO0FBQ0Y7QU8zeEVRO0VBR0k7SUFFSSxVQUFBO0VQMHhFZDtBQUNGO0FLL29GRTtFRWtYVTtJRmpYVCxhQUFBO0VMa3BGRDtBQUNGO0FLL29GQztFQUVDO0lFMldVO01GMVdULHNFQWhCYztJTGlxRmI7RUFDRjtFSy9vRkE7SUV1V1U7TUZ0V1QsbURBQUE7SUxrcEZDO0VBQ0Y7QUFDRjtBS2hwRkU7RUVrV1U7SUZqV1QsY0FBQTtFTG1wRkQ7QUFDRjs7QU96eUVBO0VBQ1EsZ0NBQUE7RUFDQSxhQUFBO0FQNHlFUjtBTzN5RVE7RUFIUjtJQUlZLGFBQUE7RVA4eUVWO0FBQ0Y7QU83eUVFO0VBQ1UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBUCt5RVo7QUtyckZFO0VFa1lBO0lGallDLHNCQUFBO0VMd3JGRDtBQUNGO0FLcnJGQztFQUVDO0lFMlhBO01GMVhDLDhFQWhCYztJTHVzRmI7RUFDRjtFS3JyRkE7SUV1WEE7TUZ0WEMseURBQUE7SUx3ckZDO0VBQ0Y7QUFDRjtBS3RyRkU7RUVrWEE7SUZqWEMsbUJBQUE7RUx5ckZEO0FBQ0Y7QUszc0ZFO0VFa1lBO0lGallDLDBCQUFBO0VMOHNGRDtBQUNGO0FLM3NGQztFQUVDO0lFMlhBO01GMVhDLG1FQWhCYztJTDZ0RmI7RUFDRjtFSzNzRkE7SUV1WEE7TUZ0WEMsNERBQUE7SUw4c0ZDO0VBQ0Y7QUFDRjtBSzVzRkU7RUVrWEE7SUZqWEMsc0JBQUE7RUwrc0ZEO0FBQ0Y7QU94MUVZO0VBQ0EsV0FBQTtFQUdBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FQdzFFWjtBS3p1RkU7RUV5WVU7SUZ4WVQsaUJBQUE7RUw0dUZEO0FBQ0Y7QUt6dUZDO0VBRUM7SUVrWVU7TUZqWVQsMEVBaEJjO0lMMnZGYjtFQUNGO0VLenVGQTtJRThYVTtNRjdYVCxxREFBQTtJTDR1RkM7RUFDRjtBQUNGO0FLMXVGRTtFRXlYVTtJRnhYVCxjQUFBO0VMNnVGRDtBQUNGO0FLL3ZGRTtFRXlZVTtJRnhZVCxrQkFBQTtFTGt3RkQ7QUFDRjtBSy92RkM7RUFFQztJRWtZVTtNRmpZVCwyRUFoQmM7SUxpeEZiO0VBQ0Y7RUsvdkZBO0lFOFhVO01GN1hULHNEQUFBO0lMa3dGQztFQUNGO0FBQ0Y7QUtod0ZFO0VFeVhVO0lGeFhULGVBQUE7RUxtd0ZEO0FBQ0Y7QU9uNEVZO0VBVEE7SUFVSSxhQUFBO0VQczRFZDtBQUNGO0FPbDRFRTtFQUNVLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBUG80RVo7QUtoeUZFO0VFd1pBO0lGdlpDLG1CQUFBO0VMbXlGRDtBQUNGO0FLaHlGQztFQUVDO0lFaVpBO01GaFpDLDRFQWhCYztJTGt6RmI7RUFDRjtFS2h5RkE7SUU2WUE7TUY1WUMsNERBQUE7SUxteUZDO0VBQ0Y7QUFDRjtBS2p5RkU7RUV3WUE7SUZ2WUMsdUJBQUE7RUxveUZEO0FBQ0Y7QUt0ekZFO0VFd1pBO0lGdlpDLHFCQUFBO0VMeXpGRDtBQUNGO0FLdHpGQztFQUVDO0lFaVpBO01GaFpDLDhFQWhCYztJTHcwRmI7RUFDRjtFS3R6RkE7SUU2WUE7TUY1WUMsc0RBQUE7SUx5ekZDO0VBQ0Y7QUFDRjtBS3Z6RkU7RUV3WUE7SUZ2WUMscUJBQUE7RUwwekZEO0FBQ0Y7QU96NkVZO0VBWFY7SUFZYyxZQUFBO0VQNDZFZDtBQUNGO0FPejZFRTtFQUNVLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QVAyNkVaO0FLdDFGRTtFRXdhQTtJRnZhQyxvQkFBQTtFTHkxRkQ7QUFDRjtBS3QxRkM7RUFFQztJRWlhQTtNRmhhQyw0RUFoQmM7SUx3MkZiO0VBQ0Y7RUt0MUZBO0lFNlpBO01GNVpDLHVEQUFBO0lMeTFGQztFQUNGO0FBQ0Y7QUt2MUZFO0VFd1pBO0lGdlpDLG9CQUFBO0VMMDFGRDtBQUNGO0FLNTJGRTtFRXdhQTtJRnZhQyxxQkFBQTtFTCsyRkQ7QUFDRjtBSzUyRkM7RUFFQztJRWlhQTtNRmhhQyx1RkFoQmM7SUw4M0ZiO0VBQ0Y7RUs1MkZBO0lFNlpBO01GNVpDLHlFQUFBO0lMKzJGQztFQUNGO0FBQ0Y7QUs3MkZFO0VFd1pBO0lGdlpDLDZCQUFBO0VMZzNGRDtBQUNGO0FPcDlFWTtFQU5WO0lBT2MsbUJBQUE7RVB1OUVkO0FBQ0Y7QU9wOUVFO0VBQ1Usa0JBQUE7QVBzOUVaO0FPbjlFZ0I7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7QVBxOUVwQjtBT3A5RW9CO0VBQ0ksVUFBQTtFQUNBLDBCQUFBO0FQczlFeEI7QU9uOUVnQjtFQUNJLFVBQUE7QVBxOUVwQjtBT2g5RUU7RUFDVSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnREFBQTtFQWlCQSx3QkFBQTtBUGs4RVo7QU9sOUVZO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0RBQUE7QVBvOUVoQjtBT245RWdCO0VBWEo7SUFZUSxhQUFBO0VQczlFbEI7QUFDRjtBT2g5RUU7RUFDVSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QVBrOUVaOztBTzc4RUE7RUFDSSxhQUFBO0FQZzlFSjtBTy84RUk7RUFGSjtJQUdRLHNCQUFBO0lBQ0EsdUJBQUE7RVBrOUVOO0FBQ0Y7O0FLOTdGRTtFRStlRjtJRjllRyxpQkFBQTtFTGs4RkQ7QUFDRjtBSy83RkM7RUFFQztJRXdlRjtNRnZlRyw2RUFoQmM7SUxpOUZiO0VBQ0Y7RUsvN0ZBO0lFb2VGO01GbmVHLHNEQUFBO0lMazhGQztFQUNGO0FBQ0Y7QUtoOEZFO0VFK2RGO0lGOWRHLGdCQUFBO0VMbThGRDtBQUNGO0FLcjlGRTtFRStlRjtJRjllRyxxQkFBQTtFTHc5RkQ7QUFDRjtBS3I5RkM7RUFFQztJRXdlRjtNRnZlRyw4RUFoQmM7SUx1K0ZiO0VBQ0Y7RUtyOUZBO0lFb2VGO01GbmVHLHNEQUFBO0lMdzlGQztFQUNGO0FBQ0Y7QUt0OUZFO0VFK2RGO0lGOWRHLHFCQUFBO0VMeTlGRDtBQUNGO0FPdC9FRTtFQUNVLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBUHcvRVo7QUtqL0ZFO0VFcWZBO0lGcGZDLHdCQUFBO0VMby9GRDtBQUNGO0FLai9GQztFQUVDO0lFOGVBO01GN2VDLGtGQWhCYztJTG1nR2I7RUFDRjtFS2ovRkE7SUUwZUE7TUZ6ZUMsNERBQUE7SUxvL0ZDO0VBQ0Y7QUFDRjtBS2wvRkU7RUVxZUE7SUZwZUMsd0JBQUE7RUxxL0ZEO0FBQ0Y7O0FLdmdHRTtFRW1nQkY7SUZsZ0JHLGtCQUFBO0VMMmdHRDtBQUNGO0FLeGdHQztFQUVDO0lFNGZGO01GM2ZHLDJFQWhCYztJTDBoR2I7RUFDRjtFS3hnR0E7SUV3ZkY7TUZ2Zkcsc0RBQUE7SUwyZ0dDO0VBQ0Y7QUFDRjtBS3pnR0U7RUVtZkY7SUZsZkcsbUJBQUE7RUw0Z0dEO0FBQ0Y7QUs5aEdFO0VFbWdCRjtJRmxnQkcsdUJBQUE7RUxpaUdEO0FBQ0Y7QUs5aEdDO0VBRUM7SUU0ZkY7TUYzZkcsK0VBaEJjO0lMZ2pHYjtFQUNGO0VLOWhHQTtJRXdmRjtNRnZmRywwREFBQTtJTGlpR0M7RUFDRjtBQUNGO0FLL2hHRTtFRW1mRjtJRmxmRyxzQkFBQTtFTGtpR0Q7QUFDRjtBTzNpRkk7RUFDSSxhQUFBO0FQNmlGUjtBTzVpRlE7RUFGSjtJQUdRLHNCQUFBO0VQK2lGVjtBQUNGOztBTzNpRkk7RUFESjtJQUVRLGNBQUE7RVAraUZOO0FBQ0Y7QU85aUZJO0VBQ0ksdUJBQUE7RUFDQSw0QkFBQTtBUGdqRlI7QU8vaUZRO0VBQ0ksb0JBQUE7QVBpakZaO0FPN2lGSTtFQUNJLG1CQUFBO0FQK2lGUjtBSzVrR0U7RUU0aEJFO0lGM2hCRCxnQkFBQTtFTCtrR0Q7QUFDRjtBSzVrR0M7RUFFQztJRXFoQkU7TUZwaEJELDRFQWhCYztJTDhsR2I7RUFDRjtFSzVrR0E7SUVpaEJFO01GaGhCRCx3REFBQTtJTCtrR0M7RUFDRjtBQUNGO0FLN2tHRTtFRTRnQkU7SUYzZ0JELGlCQUFBO0VMZ2xHRDtBQUNGO0FLbG1HRTtFRTRoQkU7SUYzaEJELGlCQUFBO0VMcW1HRDtBQUNGO0FLbG1HQztFQUVDO0lFcWhCRTtNRnBoQkQsNEVBaEJjO0lMb25HYjtFQUNGO0VLbG1HQTtJRWloQkU7TUZoaEJELHVEQUFBO0lMcW1HQztFQUNGO0FBQ0Y7QUtubUdFO0VFNGdCRTtJRjNnQkQsaUJBQUE7RUxzbUdEO0FBQ0Y7QUt4bkdFO0VFa2lCRTtJRmppQkQsaUJBQUE7RUwybkdEO0FBQ0Y7QUt4bkdDO0VBRUM7SUUyaEJFO01GMWhCRCwyREFoQmM7SUwwb0diO0VBQ0Y7RUt4bkdBO0lFdWhCRTtNRnRoQkQsc0RBQUE7SUwybkdDO0VBQ0Y7QUFDRjtBS3puR0U7RUVraEJFO0lGamhCRCxlQUFBO0VMNG5HRDtBQUNGO0FLOW9HRTtFRXNpQkU7SUZyaUJELHNCQUFBO0VMaXBHRDtBQUNGO0FLOW9HQztFQUVDO0lFK2hCRTtNRjloQkQsaUZBaEJjO0lMZ3FHYjtFQUNGO0VLOW9HQTtJRTJoQkU7TUYxaEJELDBEQUFBO0lMaXBHQztFQUNGO0FBQ0Y7QUsvb0dFO0VFc2hCRTtJRnJoQkQsc0JBQUE7RUxrcEdEO0FBQ0Y7QUtwcUdFO0VFc2lCRTtJRnJpQkQsc0JBQUE7RUx1cUdEO0FBQ0Y7QUtwcUdDO0VBRUM7SUUraEJFO01GOWhCRCxnRkFoQmM7SUxzckdiO0VBQ0Y7RUtwcUdBO0lFMmhCRTtNRjFoQkQsNkRBQUE7SUx1cUdDO0VBQ0Y7QUFDRjtBS3JxR0U7RUVzaEJFO0lGcmhCRCx1QkFBQTtFTHdxR0Q7QUFDRjtBSzFyR0U7RUVzaUJFO0lGcmlCRCxnQkFBQTtFTDZyR0Q7QUFDRjtBSzFyR0M7RUFFQztJRStoQkU7TUY5aEJELDJFQWhCYztJTDRzR2I7RUFDRjtFSzFyR0E7SUUyaEJFO01GMWhCRCxzREFBQTtJTDZyR0M7RUFDRjtBQUNGO0FLM3JHRTtFRXNoQkU7SUZyaEJELGdCQUFBO0VMOHJHRDtBQUNGO0FLaHRHRTtFRXNpQkU7SUZyaUJELGVBQUE7RUxtdEdEO0FBQ0Y7QUtodEdDO0VBRUM7SUUraEJFO01GOWhCRCxvRUFoQmM7SUxrdUdiO0VBQ0Y7RUtodEdBO0lFMmhCRTtNRjFoQkQsZ0RBQUE7SUxtdEdDO0VBQ0Y7QUFDRjtBS2p0R0U7RUVzaEJFO0lGcmhCRCxZQUFBO0VMb3RHRDtBQUNGO0FLdHVHRTtFRTZpQkU7SUY1aUJELGdCQUFBO0VMeXVHRDtBQUNGO0FLdHVHQztFQUVDO0lFc2lCRTtNRnJpQkQsMkVBaEJjO0lMd3ZHYjtFQUNGO0VLdHVHQTtJRWtpQkU7TUZqaUJELHNEQUFBO0lMeXVHQztFQUNGO0FBQ0Y7QUt2dUdFO0VFNmhCRTtJRjVoQkQsZ0JBQUE7RUwwdUdEO0FBQ0Y7QUs1dkdFO0VFNmlCRTtJRjVpQkQsaUJBQUE7RUwrdkdEO0FBQ0Y7QUs1dkdDO0VBRUM7SUVzaUJFO01GcmlCRCw0RUFoQmM7SUw4d0diO0VBQ0Y7RUs1dkdBO0lFa2lCRTtNRmppQkQsdURBQUE7SUwrdkdDO0VBQ0Y7QUFDRjtBSzd2R0U7RUU2aEJFO0lGNWhCRCxpQkFBQTtFTGd3R0Q7QUFDRjs7QUtseEdFO0VFa2pCRjtJRmpqQkcsc0JBQUE7RUxzeEdEO0FBQ0Y7QUtueEdDO0VBRUM7SUUyaUJGO01GMWlCRyw2RUFoQmM7SUxxeUdiO0VBQ0Y7RUtueEdBO0lFdWlCRjtNRnRpQkcseURBQUE7SUxzeEdDO0VBQ0Y7QUFDRjtBS3B4R0U7RUVraUJGO0lGamlCRyxtQkFBQTtFTHV4R0Q7QUFDRjtBT3J2Rkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QVB1dkZSO0FLL3lHRTtFRW9qQkU7SUZuakJELHdCQUFBO0VMa3pHRDtBQUNGO0FLL3lHQztFQUVDO0lFNmlCRTtNRjVpQkQsZ0ZBaEJjO0lMaTBHYjtFQUNGO0VLL3lHQTtJRXlpQkU7TUZ4aUJELDREQUFBO0lMa3pHQztFQUNGO0FBQ0Y7QUtoekdFO0VFb2lCRTtJRm5pQkQsc0JBQUE7RUxtekdEO0FBQ0Y7QU96d0ZJO0VBSUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QVB3d0ZSO0FLMTBHRTtFRTRqQkU7SUYzakJELHNCQUFBO0VMNjBHRDtBQUNGO0FLMTBHQztFQUVDO0lFcWpCRTtNRnBqQkQsK0VBaEJjO0lMNDFHYjtFQUNGO0VLMTBHQTtJRWlqQkU7TUZoakJELDBEQUFBO0lMNjBHQztFQUNGO0FBQ0Y7QUszMEdFO0VFNGlCRTtJRjNpQkQscUJBQUE7RUw4MEdEO0FBQ0Y7QUtoMkdFO0VFNGpCRTtJRjNqQkQsd0JBQUE7RUxtMkdEO0FBQ0Y7QUtoMkdDO0VBRUM7SUVxakJFO01GcGpCRCxrRkFoQmM7SUxrM0diO0VBQ0Y7RUtoMkdBO0lFaWpCRTtNRmhqQkQsNkRBQUE7SUxtMkdDO0VBQ0Y7QUFDRjtBS2oyR0U7RUU0aUJFO0lGM2lCRCx3QkFBQTtFTG8yR0Q7QUFDRjtBS3QzR0U7RUU0akJFO0lGM2pCRCxnQkFBQTtFTHkzR0Q7QUFDRjtBS3QzR0M7RUFFQztJRXFqQkU7TUZwakJELDBFQWhCYztJTHc0R2I7RUFDRjtFS3QzR0E7SUVpakJFO01GaGpCRCxtREFBQTtJTHkzR0M7RUFDRjtBQUNGO0FLdjNHRTtFRTRpQkU7SUYzaUJELGNBQUE7RUwwM0dEO0FBQ0Y7QU94MEZRO0VBUko7SUFTUSxpQkFBQTtJQUNBLGtCQUFBO0VQMjBGVjtBQUNGO0FPejBGUTtFQWJKO0lBZVEsY0FBQTtJQUNBLGVBQUE7RVAyMEZWO0FBQ0Y7QUt4NUdFO0VFNGpCRTtJRjNqQkQsb0JBQUE7RUwyNUdEO0FBQ0Y7QUt4NUdDO0VBRUM7SUVxakJFO01GcGpCRCw0RUFoQmM7SUwwNkdiO0VBQ0Y7RUt4NUdBO0lFaWpCRTtNRmhqQkQseURBQUE7SUwyNUdDO0VBQ0Y7QUFDRjtBS3o1R0U7RUU0aUJFO0lGM2lCRCxxQkFBQTtFTDQ1R0Q7QUFDRjtBSzk2R0U7RUVnbEJFO0lGL2tCRCxxQkFBQTtFTGk3R0Q7QUFDRjtBSzk2R0M7RUFFQztJRXlrQkU7TUZ4a0JELDhFQWhCYztJTGc4R2I7RUFDRjtFSzk2R0E7SUVxa0JFO01GcGtCRCx5REFBQTtJTGk3R0M7RUFDRjtBQUNGO0FLLzZHRTtFRWdrQkU7SUYvakJELG9CQUFBO0VMazdHRDtBQUNGO0FPajNGUTtFQUhKO0lBSVEsaUJBQUE7RVBvM0ZWO0FBQ0Y7QUt6OEdFO0VFZ2xCRTtJRi9rQkQsbUJBQUE7RUw0OEdEO0FBQ0Y7QUt6OEdDO0VBRUM7SUV5a0JFO01GeGtCRCwyRUFoQmM7SUwyOUdiO0VBQ0Y7RUt6OEdBO0lFcWtCRTtNRnBrQkQsd0RBQUE7SUw0OEdDO0VBQ0Y7QUFDRjtBSzE4R0U7RUVna0JFO0lGL2pCRCxvQkFBQTtFTDY4R0Q7QUFDRjs7QUsvOUdFO0VFOGxCRjtJRjdsQkcseUJBQUE7RUxtK0dEO0FBQ0Y7QUtoK0dDO0VBRUM7SUV1bEJGO01GdGxCRyxrRkFoQmM7SUxrL0diO0VBQ0Y7RUtoK0dBO0lFbWxCRjtNRmxsQkcsNERBQUE7SUxtK0dDO0VBQ0Y7QUFDRjtBS2orR0U7RUU4a0JGO0lGN2tCRyxzQkFBQTtFTG8rR0Q7QUFDRjtBT241Rkk7RUFFSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QVBvNUZSO0FLMy9HRTtFRW1tQkU7SUZsbUJELGtCQUFBO0VMOC9HRDtBQUNGO0FLMy9HQztFQUVDO0lFNGxCRTtNRjNsQkQsNEVBaEJjO0lMNmdIYjtFQUNGO0VLMy9HQTtJRXdsQkU7TUZ2bEJELDBEQUFBO0lMOC9HQztFQUNGO0FBQ0Y7QUs1L0dFO0VFbWxCRTtJRmxsQkQsb0JBQUE7RUwrL0dEO0FBQ0Y7QUtqaEhFO0VFbW1CRTtJRmxtQkQsdUJBQUE7RUxvaEhEO0FBQ0Y7QUtqaEhDO0VBRUM7SUU0bEJFO01GM2xCRCw4RUFoQmM7SUxtaUhiO0VBQ0Y7RUtqaEhBO0lFd2xCRTtNRnZsQkQsMERBQUE7SUxvaEhDO0VBQ0Y7QUFDRjtBS2xoSEU7RUVtbEJFO0lGbGxCRCxxQkFBQTtFTHFoSEQ7QUFDRjtBTzU3Rkk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FQODdGUjtBSzVpSEU7RUUybUJFO0lGMW1CRCxjQUFBO0VMK2lIRDtBQUNGO0FLNWlIQztFQUVDO0lFb21CRTtNRm5tQkQscUVBaEJjO0lMOGpIYjtFQUNGO0VLNWlIQTtJRWdtQkU7TUYvbEJELGlEQUFBO0lMK2lIQztFQUNGO0FBQ0Y7QUs3aUhFO0VFMmxCRTtJRjFsQkQsV0FBQTtFTGdqSEQ7QUFDRjtBT2o5RlE7RUFOSjtJQU9RLDJCQUFBO0VQbzlGVjtBQUNGO0FPajlGSTtFQUdJLGtCQUFBO0FQaTlGUjtBSzFrSEU7RUVzbkJFO0lGcm5CRCxlQUFBO0VMNmtIRDtBQUNGO0FLMWtIQztFQUVDO0lFK21CRTtNRjltQkQsMkVBaEJjO0lMNGxIYjtFQUNGO0VLMWtIQTtJRTJtQkU7TUYxbUJELHFEQUFBO0lMNmtIQztFQUNGO0FBQ0Y7QUsza0hFO0VFc21CRTtJRnJtQkQsZ0JBQUE7RUw4a0hEO0FBQ0Y7QUtobUhFO0VFc25CRTtJRnJuQkQscUJBQUE7RUxtbUhEO0FBQ0Y7QUtobUhDO0VBRUM7SUUrbUJFO01GOW1CRCw4RUFoQmM7SUxrbkhiO0VBQ0Y7RUtobUhBO0lFMm1CRTtNRjFtQkQsMkRBQUE7SUxtbUhDO0VBQ0Y7QUFDRjtBS2ptSEU7RUVzbUJFO0lGcm1CRCxzQkFBQTtFTG9tSEQ7QUFDRjtBTzMvRlE7RUFMSjtJQU1RLFdBQUE7RVA4L0ZWO0FBQ0Y7QU8zL0ZJO0VBRUksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBUDQvRlI7QUtob0hFO0VFZ29CRTtJRi9uQkQsZUFBQTtFTG1vSEQ7QUFDRjtBS2hvSEM7RUFFQztJRXluQkU7TUZ4bkJELHlFQWhCYztJTGtwSGI7RUFDRjtFS2hvSEE7SUVxbkJFO01GcG5CRCxzREFBQTtJTG1vSEM7RUFDRjtBQUNGO0FLam9IRTtFRWduQkU7SUYvbUJELGdCQUFBO0VMb29IRDtBQUNGO0FPL2dHSTtFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBUGdoR1I7QUszcEhFO0VFdW9CRTtJRnRvQkQsaUJBQUE7RUw4cEhEO0FBQ0Y7QUszcEhDO0VBRUM7SUVnb0JFO01GL25CRCx5RUFoQmM7SUw2cUhiO0VBQ0Y7RUszcEhBO0lFNG5CRTtNRjNuQkQsc0RBQUE7SUw4cEhDO0VBQ0Y7QUFDRjtBSzVwSEU7RUV1bkJFO0lGdG5CRCxrQkFBQTtFTCtwSEQ7QUFDRjtBT25pR0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FQcWlHUjtBT2xpR0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBUG9pR1I7QU9saUdZO0VBQ0ksMkJBQUE7QVBvaUdoQjtBTy9oR0k7RUFDSSxvQkFBQTtFQUNBLCtCQUFBO0FQaWlHUjs7QU8zaEdBO0VBR0ksZ0NBQUE7RUFDQSxnQkFBQTtBUDRoR0o7QUsxc0hFO0VFMHFCRjtJRnpxQkcsaUJBQUE7RUw2c0hEO0FBQ0Y7QUsxc0hDO0VBRUM7SUVtcUJGO01GbHFCRyxxREFoQmM7SUw0dEhiO0VBQ0Y7RUsxc0hBO0lFK3BCRjtNRjlwQkcsc0RBQUE7SUw2c0hDO0VBQ0Y7QUFDRjtBSzNzSEU7RUUwcEJGO0lGenBCRyxtQkFBQTtFTDhzSEQ7QUFDRjtBS2h1SEU7RUUwcUJGO0lGenFCRyx3QkFBQTtFTG11SEQ7QUFDRjtBS2h1SEM7RUFFQztJRW1xQkY7TUZscUJHLGlGQWhCYztJTGt2SGI7RUFDRjtFS2h1SEE7SUUrcEJGO01GOXBCRywwREFBQTtJTG11SEM7RUFDRjtBQUNGO0FLanVIRTtFRTBwQkY7SUZ6cEJHLHNCQUFBO0VMb3VIRDtBQUNGO0FPdmtHSTtFQUNJLGtCQUFBO0FQeWtHUjtBT3hrR1E7RUFDSSxXQUFBO0VBR0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QVB3a0daO0FLandIRTtFRWlyQk07SUZockJMLGlCQUFBO0VMb3dIRDtBQUNGO0FLandIQztFQUVDO0lFMHFCTTtNRnpxQkwsMEVBaEJjO0lMbXhIYjtFQUNGO0VLandIQTtJRXNxQk07TUZycUJMLHFEQUFBO0lMb3dIQztFQUNGO0FBQ0Y7QUtsd0hFO0VFaXFCTTtJRmhxQkwsY0FBQTtFTHF3SEQ7QUFDRjtBS3Z4SEU7RUVpckJNO0lGaHJCTCxrQkFBQTtFTDB4SEQ7QUFDRjtBS3Z4SEM7RUFFQztJRTBxQk07TUZ6cUJMLDJFQWhCYztJTHl5SGI7RUFDRjtFS3Z4SEE7SUVzcUJNO01GcnFCTCxzREFBQTtJTDB4SEM7RUFDRjtBQUNGO0FLeHhIRTtFRWlxQk07SUZocUJMLGVBQUE7RUwyeEhEO0FBQ0Y7QU9ubkdZO0VBVEo7SUFVUSxhQUFBO0VQc25HZDtBQUNGO0FPbG5HSTtFQUNJLFVBQUE7QVBvbkdSO0FPam5HSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FQbW5HUjtBSzF6SEU7RUUwc0JFO0lGenNCRCxlQUFBO0VMNnpIRDtBQUNGO0FLMXpIQztFQUVDO0lFbXNCRTtNRmxzQkQseUVBaEJjO0lMNDBIYjtFQUNGO0VLMXpIQTtJRStyQkU7TUY5ckJELHNEQUFBO0lMNnpIQztFQUNGO0FBQ0Y7QUszekhFO0VFMHJCRTtJRnpyQkQsZ0JBQUE7RUw4ekhEO0FBQ0Y7QUtoMUhFO0VFMHNCRTtJRnpzQkQsc0JBQUE7RUxtMUhEO0FBQ0Y7QUtoMUhDO0VBRUM7SUVtc0JFO01GbHNCRCwrRUFoQmM7SUxrMkhiO0VBQ0Y7RUtoMUhBO0lFK3JCRTtNRjlyQkQseURBQUE7SUxtMUhDO0VBQ0Y7QUFDRjtBS2oxSEU7RUUwckJFO0lGenJCRCxzQkFBQTtFTG8xSEQ7QUFDRjtBT3ZwR0k7RUFDSSxXQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FQd3BHUjtBSzUySEU7RUUrc0JFO0lGOXNCRCxpQkFBQTtFTCsySEQ7QUFDRjtBSzUySEM7RUFFQztJRXdzQkU7TUZ2c0JELDJFQWhCYztJTDgzSGI7RUFDRjtFSzUySEE7SUVvc0JFO01GbnNCRCwwREFBQTtJTCsySEM7RUFDRjtBQUNGO0FLNzJIRTtFRStyQkU7SUY5ckJELG9CQUFBO0VMZzNIRDtBQUNGO0FLbDRIRTtFRStzQkU7SUY5c0JELGlCQUFBO0VMcTRIRDtBQUNGO0FLbDRIQztFQUVDO0lFd3NCRTtNRnZzQkQsNEVBaEJjO0lMbzVIYjtFQUNGO0VLbDRIQTtJRW9zQkU7TUZuc0JELHNEQUFBO0lMcTRIQztFQUNGO0FBQ0Y7QUtuNEhFO0VFK3JCRTtJRjlyQkQsZUFBQTtFTHM0SEQ7QUFDRjtBS3g1SEU7RUUrc0JFO0lGOXNCRCx3QkFBQTtFTDI1SEQ7QUFDRjtBS3g1SEM7RUFFQztJRXdzQkU7TUZ2c0JELGtGQWhCYztJTDA2SGI7RUFDRjtFS3g1SEE7SUVvc0JFO01GbnNCRCw2REFBQTtJTDI1SEM7RUFDRjtBQUNGO0FLejVIRTtFRStyQkU7SUY5ckJELHdCQUFBO0VMNDVIRDtBQUNGO0FPcnRHSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FQdXRHUjs7QU9udEdBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFFQSxrQkFBQTtBUHF0R0o7QUt6N0hFO0VFZ3VCRjtJRi90QkcsZUFBQTtFTDQ3SEQ7QUFDRjtBS3o3SEM7RUFFQztJRXl0QkY7TUZ4dEJHLCtFQWJlO0lMdzhIZDtFQUNGO0VLejdIQTtJRXF0QkY7TUZwdEJHLG9FQUFBO0lMNDdIQztFQUNGO0FBQ0Y7QUsxN0hFO0VFZ3RCRjtJRi9zQkcsdUJBQUE7RUw2N0hEO0FBQ0Y7QU96dUdJO0VBTko7SUFPUSxhQUFBO0VQNHVHTjtBQUNGO0FPM3VHSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxXQUFBO0VBRUEsc0JBQUE7QVAydUdSO0FLMzlIRTtFRXl1QkU7SUZ4dUJELGVBQUE7RUw4OUhEO0FBQ0Y7QUszOUhDO0VBRUM7SUVrdUJFO01GanVCRCw0RUFiZTtJTDArSGQ7RUFDRjtFSzM5SEE7SUU4dEJFO01GN3RCRCx3REFBQTtJTDg5SEM7RUFDRjtBQUNGO0FLNTlIRTtFRXl0QkU7SUZ4dEJELGdCQUFBO0VMKzlIRDtBQUNGO0FLai9IRTtFRXl1QkU7SUZ4dUJELGNBQUE7RUxvL0hEO0FBQ0Y7QUtqL0hDO0VBRUM7SUVrdUJFO01GanVCRCw4Q0FoQmM7SUxtZ0liO0VBQ0Y7RUtqL0hBO0lFOHRCRTtNRjd0QkQsOENBQUE7SUxvL0hDO0VBQ0Y7QUFDRjtBS2wvSEU7RUV5dEJFO0lGeHRCRCxXQUFBO0VMcS9IRDtBQUNGO0FPcnhHUTtFQVRKO0lBVVEsYUFBQTtFUHd4R1Y7QUFDRjtBT3R4R0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsV0FBQTtFQUVBLHNCQUFBO0VBQ0Esd0JBQUE7QVBzeEdSO0FLcGhJRTtFRXN2QkU7SUZydkJELGFBQUE7RUx1aElEO0FBQ0Y7QUtwaElDO0VBRUM7SUUrdUJFO01GOXVCRCx1RUFiZTtJTG1pSWQ7RUFDRjtFS3BoSUE7SUUydUJFO01GMXVCRCxtREFBQTtJTHVoSUM7RUFDRjtBQUNGO0FLcmhJRTtFRXN1QkU7SUZydUJELGNBQUE7RUx3aElEO0FBQ0Y7QUsxaUlFO0VFc3ZCRTtJRnJ2QkQsZUFBQTtFTDZpSUQ7QUFDRjtBSzFpSUM7RUFFQztJRSt1QkU7TUY5dUJELHlFQWhCYztJTDRqSWI7RUFDRjtFSzFpSUE7SUUydUJFO01GMXVCRCxzREFBQTtJTDZpSUM7RUFDRjtBQUNGO0FLM2lJRTtFRXN1QkU7SUZydUJELGdCQUFBO0VMOGlJRDtBQUNGO0FPaDBHUTtFQVZKO0lBV1EsYUFBQTtFUG0wR1Y7QUFDRjs7QUtya0lFO0VFeXdCRjtJRnh3Qkcsc0JBQUE7RUx5a0lEO0FBQ0Y7QUt0a0lDO0VBRUM7SUVrd0JGO01GandCRywrRUFoQmM7SUx3bEliO0VBQ0Y7RUt0a0lBO0lFOHZCRjtNRjd2QkcseURBQUE7SUx5a0lDO0VBQ0Y7QUFDRjtBS3ZrSUU7RUV5dkJGO0lGeHZCRyxtQkFBQTtFTDBrSUQ7QUFDRjtBSzVsSUU7RUV5d0JGO0lGeHdCRyx5QkFBQTtFTCtsSUQ7QUFDRjtBSzVsSUM7RUFFQztJRWt3QkY7TUZqd0JHLGtGQWhCYztJTDhtSWI7RUFDRjtFSzVsSUE7SUU4dkJGO01GN3ZCRyw0REFBQTtJTCtsSUM7RUFDRjtBQUNGO0FLN2xJRTtFRXl2QkY7SUZ4dkJHLHNCQUFBO0VMZ21JRDtBQUNGO0FPdDJHSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FQdzJHUjtBT3QyR1E7RUFMSjtJQU1RLHNCQUFBO0VQeTJHVjtBQUNGO0FLNW5JRTtFRXN4QkU7SUZyeEJELHNCQUFBO0VMK25JRDtBQUNGO0FLNW5JQztFQUVDO0lFK3dCRTtNRjl3QkQsd0ZBaEJjO0lMOG9JYjtFQUNGO0VLNW5JQTtJRTJ3QkU7TUYxd0JELDBFQUFBO0lMK25JQztFQUNGO0FBQ0Y7QUs3bklFO0VFc3dCRTtJRnJ3QkQsNkJBQUE7RUxnb0lEO0FBQ0Y7QU96M0dRO0VBSEo7SUFJUSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VQNDNHVjtBQUNGO0FPejNHSTtFQUNJLGdCQUFBO0FQMjNHUjtBSzVwSUU7RUVneUJFO0lGL3hCRCx3QkFBQTtFTCtwSUQ7QUFDRjtBSzVwSUM7RUFFQztJRXl4QkU7TUZ4eEJELGtGQWhCYztJTDhxSWI7RUFDRjtFSzVwSUE7SUVxeEJFO01GcHhCRCw0REFBQTtJTCtwSUM7RUFDRjtBQUNGO0FLN3BJRTtFRWd4QkU7SUYvd0JELHdCQUFBO0VMZ3FJRDtBQUNGO0FPNzRHSTtFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7QVA4NEdSO0FLdHJJRTtFRXF5QkU7SUZweUJELG1CQUFBO0VMeXJJRDtBQUNGO0FLdHJJQztFQUVDO0lFOHhCRTtNRjd4QkQsMEVBaEJjO0lMd3NJYjtFQUNGO0VLdHJJQTtJRTB4QkU7TUZ6eEJELHNEQUFBO0lMeXJJQztFQUNGO0FBQ0Y7QUt2cklFO0VFcXhCRTtJRnB4QkQsaUJBQUE7RUwwcklEO0FBQ0Y7QUs1c0lFO0VFcXlCRTtJRnB5QkQsZUFBQTtFTCtzSUQ7QUFDRjtBSzVzSUM7RUFFQztJRTh4QkU7TUY3eEJELDREQWhCYztJTDh0SWI7RUFDRjtFSzVzSUE7SUUweEJFO01GenhCRCxzREFBQTtJTCtzSUM7RUFDRjtBQUNGO0FLN3NJRTtFRXF4QkU7SUZweEJELGdCQUFBO0VMZ3RJRDtBQUNGO0FPdjdHUTtFQU5KO0lBT1EsV0FBQTtJQUNBLG1CQUFBO0VQMDdHVjtBQUNGO0FPdjdHSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QVB5N0dSO0FLN3VJRTtFRWl6QkU7SUZoekJELGlCQUFBO0VMZ3ZJRDtBQUNGO0FLN3VJQztFQUVDO0lFMHlCRTtNRnp5QkQsMEVBaEJjO0lMK3ZJYjtFQUNGO0VLN3VJQTtJRXN5QkU7TUZyeUJELHFEQUFBO0lMZ3ZJQztFQUNGO0FBQ0Y7QUs5dUlFO0VFaXlCRTtJRmh5QkQsaUJBQUE7RUxpdklEO0FBQ0Y7QU81OEdRO0VBTko7SUFPUSxVQUFBO0lBQ0EsdUJBQUE7RVArOEdWO0FBQ0Y7O0FLendJRTtFRWkwQkY7SUZoMEJHLHFCQUFBO0VMNndJRDtBQUNGO0FLMXdJQztFQUVDO0lFMHpCRjtNRnp6QkcsOEVBaEJjO0lMNHhJYjtFQUNGO0VLMXdJQTtJRXN6QkY7TUZyekJHLHlEQUFBO0lMNndJQztFQUNGO0FBQ0Y7QUszd0lFO0VFaXpCRjtJRmh6Qkcsc0JBQUE7RUw4d0lEO0FBQ0Y7QU83OUdJO0VBQ0ksa0JBQUE7QVArOUdSO0FPNzlHUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FQODlHWjtBSzN5SUU7RUVzMEJNO0lGcjBCTCxjQUFBO0VMOHlJRDtBQUNGO0FLM3lJQztFQUVDO0lFK3pCTTtNRjl6QkwsMkVBYmU7SUwweklkO0VBQ0Y7RUszeUlBO0lFMnpCTTtNRjF6QkwsdURBQUE7SUw4eUlDO0VBQ0Y7QUFDRjtBSzV5SUU7RUVzekJNO0lGcnpCTCxpQkFBQTtFTCt5SUQ7QUFDRjtBT2gvR0k7RUFHSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QVBnL0dSO0FLdDBJRTtFRWkxQkU7SUZoMUJELGVBQUE7RUx5MElEO0FBQ0Y7QUt0MElDO0VBRUM7SUUwMEJFO01GejBCRCxzRUFoQmM7SUx3MUliO0VBQ0Y7RUt0MElBO0lFczBCRTtNRnIwQkQsb0RBQUE7SUx5MElDO0VBQ0Y7QUFDRjtBS3YwSUU7RUVpMEJFO0lGaDBCRCxpQkFBQTtFTDAwSUQ7QUFDRjtBSzUxSUU7RUVpMUJFO0lGaDFCRCx1QkFBQTtFTCsxSUQ7QUFDRjtBSzUxSUM7RUFFQztJRTAwQkU7TUZ6MEJELGdGQWhCYztJTDgySWI7RUFDRjtFSzUxSUE7SUVzMEJFO01GcjBCRCwyREFBQTtJTCsxSUM7RUFDRjtBQUNGO0FLNzFJRTtFRWkwQkU7SUZoMEJELHVCQUFBO0VMZzJJRDtBQUNGO0FPemhISTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QVAyaEhSO0FLdjNJRTtFRXkxQkU7SUZ4MUJELGFBQUE7RUwwM0lEO0FBQ0Y7QUt2M0lDO0VBRUM7SUVrMUJFO01GajFCRCxxRUFiZTtJTHM0SWQ7RUFDRjtFS3YzSUE7SUU4MEJFO01GNzBCRCxpREFBQTtJTDAzSUM7RUFDRjtBQUNGO0FLeDNJRTtFRXkwQkU7SUZ4MEJELFdBQUE7RUwyM0lEO0FBQ0Y7QUs3NElFO0VFeTFCRTtJRngxQkQsbUJBQUE7RUxnNUlEO0FBQ0Y7QUs3NElDO0VBRUM7SUVrMUJFO01GajFCRCw0RUFoQmM7SUwrNUliO0VBQ0Y7RUs3NElBO0lFODBCRTtNRjcwQkQsNERBQUE7SUxnNUlDO0VBQ0Y7QUFDRjtBSzk0SUU7RUV5MEJFO0lGeDBCRCx1QkFBQTtFTGk1SUQ7QUFDRjtBT2xrSEk7RUFFSSxrQkFBQTtBUG1rSFI7QUt0NklFO0VFaTJCRTtJRmgyQkQsZ0JBQUE7RUx5NklEO0FBQ0Y7QUt0NklDO0VBRUM7SUUwMUJFO01GejFCRCwwRUFoQmM7SUx3N0liO0VBQ0Y7RUt0NklBO0lFczFCRTtNRnIxQkQsbURBQUE7SUx5NklDO0VBQ0Y7QUFDRjtBS3Y2SUU7RUVpMUJFO0lGaDFCRCxjQUFBO0VMMDZJRDtBQUNGO0FPdGxISTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUVBLGdCQUFBO0VBQ0EsZ0JBQUE7QVB1bEhSO0FLdDhJRTtFRXMyQkU7SUZyMkJELG1CQUFBO0VMeThJRDtBQUNGO0FLdDhJQztFQUVDO0lFKzFCRTtNRjkxQkQsNEVBaEJjO0lMdzlJYjtFQUNGO0VLdDhJQTtJRTIxQkU7TUYxMUJELHVEQUFBO0lMeThJQztFQUNGO0FBQ0Y7QUt2OElFO0VFczFCRTtJRnIxQkQsbUJBQUE7RUwwOElEO0FBQ0Y7QU8xbUhJO0VBRUksV0FBQTtBUDJtSFI7QUsvOUlFO0VFazNCRTtJRmozQkQsd0JBQUE7RUxrK0lEO0FBQ0Y7QUsvOUlDO0VBRUM7SUUyMkJFO01GMTJCRCxrRkFoQmM7SUxpL0liO0VBQ0Y7RUsvOUlBO0lFdTJCRTtNRnQyQkQsNERBQUE7SUxrK0lDO0VBQ0Y7QUFDRjtBS2grSUU7RUVrMkJFO0lGajJCRCx3QkFBQTtFTG0rSUQ7QUFDRjtBTzluSEk7RUFHSSxnQkFBQTtFQUNBLGdCQUFBO0FQOG5IUjtBS3ovSUU7RUV1M0JFO0lGdDNCRCxrQkFBQTtFTDQvSUQ7QUFDRjtBS3ovSUM7RUFFQztJRWczQkU7TUYvMkJELHVFQWhCYztJTDJnSmI7RUFDRjtFS3ovSUE7SUU0MkJFO01GMzJCRCxtREFBQTtJTDQvSUM7RUFDRjtBQUNGO0FLMS9JRTtFRXUyQkU7SUZ0MkJELGVBQUE7RUw2L0lEO0FBQ0Y7QUsvZ0pFO0VFdTNCRTtJRnQzQkQsZ0JBQUE7RUxraEpEO0FBQ0Y7QUsvZ0pDO0VBRUM7SUVnM0JFO01GLzJCRCwwRUFoQmM7SUxpaUpiO0VBQ0Y7RUsvZ0pBO0lFNDJCRTtNRjMyQkQsb0RBQUE7SUxraEpDO0VBQ0Y7QUFDRjtBS2hoSkU7RUV1MkJFO0lGdDJCRCxlQUFBO0VMbWhKRDtBQUNGO0FPdnFISTtFQUNJLGNBQUE7QVB5cUhSOztBS3hpSkU7RUVxNEJGO0lGcDRCRyxxQkFBQTtFTDRpSkQ7QUFDRjtBS3ppSkM7RUFFQztJRTgzQkY7TUY3M0JHLDhFQWhCYztJTDJqSmI7RUFDRjtFS3ppSkE7SUUwM0JGO01GejNCRyx3REFBQTtJTDRpSkM7RUFDRjtBQUNGO0FLMWlKRTtFRXEzQkY7SUZwM0JHLG1CQUFBO0VMNmlKRDtBQUNGO0FLL2pKRTtFRXE0QkY7SUZwNEJHLHdCQUFBO0VMa2tKRDtBQUNGO0FLL2pKQztFQUVDO0lFODNCRjtNRjczQkcsaUZBaEJjO0lMaWxKYjtFQUNGO0VLL2pKQTtJRTAzQkY7TUZ6M0JHLDJEQUFBO0lMa2tKQztFQUNGO0FBQ0Y7QUtoa0pFO0VFcTNCRjtJRnAzQkcsc0JBQUE7RUxta0pEO0FBQ0Y7QU83c0hJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBUCtzSFI7QU81c0hJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QVA4c0hSO0FPNXNIUTtFQUxKO0lBTVEsc0JBQUE7SUFDQSx1QkFBQTtFUCtzSFY7QUFDRjtBTzVzSEk7RUFHSSxnQkFBQTtFQUNBLGdCQUFBO0FQNHNIUjtBS3htSkU7RUV3NUJFO0lGdjVCRCxpQkFBQTtFTDJtSkQ7QUFDRjtBS3htSkM7RUFFQztJRWk1QkU7TUZoNUJELDZFQWhCYztJTDBuSmI7RUFDRjtFS3htSkE7SUU2NEJFO01GNTRCRCx1REFBQTtJTDJtSkM7RUFDRjtBQUNGO0FLem1KRTtFRXc0QkU7SUZ2NEJELGdCQUFBO0VMNG1KRDtBQUNGO0FLOW5KRTtFRXc1QkU7SUZ2NUJELGtCQUFBO0VMaW9KRDtBQUNGO0FLOW5KQztFQUVDO0lFaTVCRTtNRmg1QkQsMkVBaEJjO0lMZ3BKYjtFQUNGO0VLOW5KQTtJRTY0QkU7TUY1NEJELHdEQUFBO0lMaW9KQztFQUNGO0FBQ0Y7QUsvbkpFO0VFdzRCRTtJRnY0QkQsbUJBQUE7RUxrb0pEO0FBQ0Y7QU92dkhRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FQeXZIWjtBT3h2SFk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QVAwdkhoQjtBT3J2SEk7RUFFSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FQc3ZIUjtBS3RxSkU7RUU0NkJFO0lGMzZCRCxnQkFBQTtFTHlxSkQ7QUFDRjtBS3RxSkM7RUFFQztJRXE2QkU7TUZwNkJELDJFQWhCYztJTHdySmI7RUFDRjtFS3RxSkE7SUVpNkJFO01GaDZCRCxzREFBQTtJTHlxSkM7RUFDRjtBQUNGO0FLdnFKRTtFRTQ1QkU7SUYzNUJELGdCQUFBO0VMMHFKRDtBQUNGO0FPMXdIUTtFQU5KO0lBT1EsYUFBQTtFUDZ3SFY7QUFDRjtBTzF3SEk7RUFDSSwrQkFBQTtBUDR3SFI7QU8zd0hRO0VBQ0ksMEJBQUE7QVA2d0haOztBUXZ4SkE7RUFDSSxrQkFBQTtBUjB4SkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwic2FzczptYXRoXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINC80ZbQutGB0LjQvdGW0LIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuQGltcG9ydCBcXFwiYmFzZS9taXhpbnNcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YjRgNC40YTRgtGW0LIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8mZGlzcGxheT1zd2FwIC0g0LTQvtC00LDRgtC4INC/0YDQuCDQv9GW0LTQutC70Y7Rh9C10L3QvdGWINGH0LXRgNC10Lcg0L/Qu9Cw0LPRltC9XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQuNGC0LgsINGP0LrRidC+INGUINC70L7QutCw0LvRjNC90ZYg0YTQsNC50LvQuCDRiNGA0LjRhNGC0ZbQslxcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGW0LrQvtC90LrQvtCy0LjRhSDRiNGA0LjRhNGC0ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C40YLQuCwg0Y/QutGJ0L4g0ZQg0YTQsNC50Lsg0ZbQutC+0L3QutC+0LLQvtCz0L4g0YjRgNC40YTRgtGDXFxyXFxuLy9AaW1wb3J0IFxcXCJmb250cy9pY29uc1xcXCI7XFxyXFxuXFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyDQndCw0LvQsNGI0YLRg9Cy0LDQvdC90Y8g0YjQsNCx0LvQvtC90YMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vINCX0LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0Lwg0YjRgNC40YTRgiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4kZm9udEZhbWlseTogXFxcIkludGVyXFxcIjtcXHJcXG4kZm9udFNpemU6IHRvUmVtKDE1KTsgLy8g0LTQtSAxNChweCkgLSDRgNC+0LfQvNGW0YAg0YjRgNC40YTRgtGDINC30LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0Lwg0Lcg0LzQsNC60LXRgtGDXFxyXFxuXFxyXFxuLy8g0J7RgdC90L7QstC90ZYg0LrQvtC70YzQvtGA0LhcXHJcXG4kbWFpbkNvbG9yOiAjMEUwRTBFOyAvLyDQmtC+0LvRltGAINGI0YDQuNGE0YLRgyDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XFxyXFxuXFxyXFxuLy8g0J/QsNC70ZbRgtGA0LAg0LrQvtC70YzQvtGA0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvY29sb3JzLXBhbGV0dGVcXFwiO1xcclxcblxcclxcbi8vINCd0LDQu9Cw0YjRgtGD0LLQsNC90L3RjyDQsNC00LDQv9GC0LjQstC90L7RlyDRgdGW0YLQutC4ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy8g0JzRltC90ZbQvNCw0LvRjNC90LAg0YjQuNGA0LjQvdCwINGB0YLQvtGA0ZbQvdC60LhcXHJcXG4kbWluV2lkdGg6IDMyMDtcXHJcXG4vLyDQqNC40YDQuNC90LAg0L/QvtC70L7RgtC90LAgKNC80LDQutC10YLRgylcXHJcXG4kbWF4V2lkdGg6IDEzNjY7XFxyXFxuLy8g0KjQuNGA0LjQvdCwINC+0LHQvNC10LbRg9GO0YfQvtCz0L4g0LrQvtC90YLQtdC50L3QtdGA0LAgKDAgPSDQvdC10LzQsNGUINC+0LHQvNC10LbQtdC90L3RjylcXHJcXG4kbWF4V2lkdGhDb250YWluZXI6IDExNzA7XFxyXFxuLy8g0JfQsNCz0LDQu9GM0L3QuNC5INCy0ZbQtNGB0YLRg9C/INGDINC60L7QvdGC0LXQudC90LXRgNCwXFxyXFxuLy8gKDMwID0g0L/QviAxNXB4INC70ZbQstC+0YDRg9GHINGWINC/0YDQsNCy0L7RgNGD0YcsIDAgPSDQvdC10LzQsNGUINCy0ZbQtNGB0YLRg9C/0YMpXFxyXFxuJGNvbnRhaW5lclBhZGRpbmc6IDMwO1xcclxcblxcclxcbi8vINCo0LjRgNC40L3QsCDRgdC/0YDQsNGG0YzQvtCy0YPQstCw0L3QvdGPINC/0LXRgNGI0L7Qs9C+INCx0YDQtdC50LrQv9C+0ZbQvdGC0YNcXHJcXG4kY29udGFpbmVyV2lkdGg6ICRtYXhXaWR0aENvbnRhaW5lciArICRjb250YWluZXJQYWRkaW5nO1xcclxcblxcclxcbi8vINCR0YDQtdC50Lot0L/QvtGX0L3RgtC4XFxyXFxuJHBjOiBlbSgkY29udGFpbmVyV2lkdGgpOyAvLyDQn9CaLCDQvdC+0YPRgtCx0YPQutC4LCDQtNC10Y/QutGWINC/0LvQsNC90YjQtdGC0Lgg0YMg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7QvNGDINC/0L7Qu9C+0LbQtdC90L3RllxcclxcbiR0YWJsZXQ6IGVtKDk5MS45OCk7IC8vINCf0LvQsNC90YjQtdGC0LgsINC00LXRj9C60ZYg0YLQtdC70LXRhNC+0L3QuCDQsiDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3QvtC80YMg0L/QvtC70L7QttC10L3QvdGWXFxyXFxuJG1vYmlsZTogZW0oNzY3Ljk4KTsgLy8g0KLQtdC70LXRhNC+0L3QuCBMXFxyXFxuJG1vYmlsZVNtYWxsOiBlbSg0NzkuOTgpOyAvLyDQotC10LvQtdGE0L7QvdC4IFNcXHJcXG5cXHJcXG4vLyDQotC40L8g0LDQtNCw0L/RgtC40LLQsDpcXHJcXG4vLyAxID0g0YfRg9C50L3RltGB0YLRjCAo0YMg0LrQvtC90YLQtdC50L3QtdGA0LAg0L3QtdC80LDRlCDQsdGA0LXQudC60L/QvtGW0L3RgtGW0LIpLFxcclxcbi8vIDIgPSDQv9C+INCx0YDQtdC50Lot0L/QvtGX0L3RgiAo0LrQvtC90YLQtdC50L3QtdGAINC30LzRltC90Y7RlCDRgdCy0L7RjiDRiNC40YDQuNC90YMg0L/QviDQsdGA0LXQudC6LdC/0L7Rl9C90YIpXFxyXFxuJHJlc3BvbnNpdmVUeXBlOiAxO1xcclxcblxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyDQntCx0L3Rg9C70LXQvdC90Y8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbkBpbXBvcnQgXFxcImJhc2UvbnVsbFxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDRgtC10LPQsCBCT0RZID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuYm9keSB7XFxyXFxuXFx0Ly8g0KHQutGA0L7Qu9C7INC30LDQsdC70L7QutC+0LLQsNC90L5cXHJcXG5cXHQubG9jayAmIHtcXHJcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdFxcdHRvdWNoLWFjdGlvbjogbm9uZTtcXHJcXG5cXHRcXHRvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xcclxcblxcdH1cXHJcXG5cXHQvLyDQodCw0LnRgiDQt9Cw0LLQsNC90YLQsNC20LXQvdC40LlcXHJcXG5cXHQubG9hZGVkICYge1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0J7QsdC+0LvQvtC90LrQsCB3cmFwcGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLndyYXBwZXIge1xcclxcblxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0QHN1cHBvcnRzIChvdmVyZmxvdzogY2xpcCkge1xcclxcblxcdFxcdG92ZXJmbG93OiBjbGlwO1xcclxcblxcdH1cXHJcXG5cXHQvLyDQn9GA0LjRgtC40YHQutCw0ZTQvNC+IGZvb3RlclxcclxcblxcdD4gbWFpbiB7XFxyXFxuXFx0XFx0ZmxleDogMSAxIGF1dG87XFxyXFxuXFx0fVxcclxcblxcdC8vINCk0ZbQutGBINC00LvRjyDRgdC70LDQudC00LXRgNGW0LJcXHJcXG5cXHQ+ICoge1xcclxcblxcdFxcdG1pbi13aWR0aDogMDtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCe0LHQvNC10LbRg9GO0YfQuNC5INC60L7QvdGC0LXQudC90LXRgCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLypcXHJcXG4oaSkg0KHRgtC40LvRliDQsdGD0LTRg9GC0Ywg0LfQsNGB0YLQvtGB0L7QstGD0LLQsNGC0LjRgdGMINC00L5cXHJcXG7QstGB0ZbRhSDQutC70LDRgdGW0LIsINGJ0L4g0LzRltGB0YLRj9GC0YwgKl9fY29udGFpbmVyXFxyXFxu0J3QsNC/0YDQuNC60LvQsNC0IGhlYWRlcl9fY29udGFpbmVyLCBtYWluX19jb250YWluZXIg0ZYg0YIu0L8uXFxyXFxu0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBjbnRcXHJcXG4qL1xcclxcbkBpZiAoJHJlc3BvbnNpdmVUeXBlPT0xKSB7XFxyXFxuXFx0Ly8g0KfRg9C50L3QsFxcclxcblxcdFtjbGFzcyo9XFxcIl9fY29udGFpbmVyXFxcIl0ge1xcclxcblxcdFxcdEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHRvUmVtKCRjb250YWluZXJXaWR0aCk7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCkge1xcclxcblxcdFxcdFxcdEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwIHRvUmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxyXFxuXFx0XFx0XFx0fSBAZWxzZSB7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgbWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpLCAxNSk7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1yaWdodFxcXCIsIG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSwgMTUpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn0gQGVsc2Uge1xcclxcblxcdC8vINCR0YDQtdC50Lot0L/QvtGX0L3RgtCw0LzQuFxcclxcblxcdFtjbGFzcyo9XFxcIl9fY29udGFpbmVyXFxcIl0ge1xcclxcblxcdFxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdFxcdEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHRvUmVtKCRjb250YWluZXJXaWR0aCk7XFxyXFxuXFx0XFx0fSBAZWxzZSB7XFxyXFxuXFx0XFx0XFx0QGlmICgkY29udGFpbmVyUGFkZGluZz4wKSB7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMCB0b1JlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICRwYykge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogdG9SZW0oOTcwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHRvUmVtKDc1MCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiBub25lO1xcclxcblxcdFxcdFxcdEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCBhbmQgJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwIHRvUmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0LHQsNC30L7QstC40YUg0YHRgtC40LvRltCyLCDRiNCw0LHQu9C+0L3RltCyICjQt9Cw0LPQvtGC0ZbQstC10LvRjCkg0YLQsCDQtNC+0L/QvtC80ZbQttC90LjRhSDQutC70LDRgdGW0LJcXHJcXG4vLyDQlNC70Y8g0L/RltC00LrQu9GO0YfQtdC90L3Rjy/QstC40LzQutC90LXQvdC90Y8g0LrQvtC90LrRgNC10YLQvdC40YUg0YHRgtC40LvRltCyINC00LjQstC40YHRjCBiYXNlLnNjc3NcXHJcXG5AaW1wb3J0IFxcXCJiYXNlXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQt9Cw0LPQsNC70YzQvdC40YUg0LXQu9C10LzQtdC90YLRltCyINC/0YDQvtC10LrRgtGDXFxyXFxuQGltcG9ydCBcXFwiY29tbW9uXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQvtC60YDQtdC80LjRhSDQsdC70L7QutGW0LJcXHJcXG5AaW1wb3J0IFxcXCJoZWFkZXJcXFwiO1xcclxcbkBpbXBvcnQgXFxcImZvb3RlclxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0L7QutGA0LXQvNC40YUg0YHRgtC+0YDRltC90L7QulxcclxcbkBpbXBvcnQgXFxcImhvbWVcXFwiO1xcclxcblxcclxcbi8vINCX0LzRltC90L3RllxcclxcblxcclxcbkBpbXBvcnQgXFxcInV0aWxzL3ZhcnNcXFwiO1xcclxcblwiLFwiKiB7XFxyXFxuXFx0cGFkZGluZzogMHB4O1xcclxcblxcdG1hcmdpbjogMHB4O1xcclxcblxcdGJvcmRlcjogMHB4O1xcclxcbn1cXHJcXG4qLFxcclxcbio6YmVmb3JlLFxcclxcbio6YWZ0ZXIge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpmb2N1cyxcXHJcXG46YWN0aXZlIHtcXHJcXG5cXHQvLyBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5hOmZvY3VzLFxcclxcbmE6YWN0aXZlIHtcXHJcXG5cXHQvLyBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRtaW4td2lkdGg6ICRtaW5XaWR0aCArIHB4O1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRjb2xvcjogJG1haW5Db2xvcjtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFx0Zm9udC1zaXplOiAkZm9udFNpemU7XFxyXFxuXFx0Ly90ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcclxcblxcdC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuXFx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG59XFxyXFxuaW5wdXQsXFxyXFxuYnV0dG9uLFxcclxcbnRleHRhcmVhIHtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcblxcdGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcclxcbn1cXHJcXG5idXR0b24ge1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuYSB7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG51bCBsaSB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuaW1nIHtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbn1cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNiB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cIixcImJvZHk6OmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHRvcGFjaXR5OiAwO1xcclxcblxcdHRyYW5zaXRpb246IG9wYWNpdHkgMC44cyBlYXNlIDBzO1xcclxcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcblxcdHotaW5kZXg6IDE0OTtcXHJcXG59XFxyXFxuLnBvcHVwLXNob3cgYm9keTo6YWZ0ZXIge1xcclxcblxcdG9wYWNpdHk6IDE7XFxyXFxufVxcclxcbi5wb3B1cCB7XFxyXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdGJvdHRvbTogMDtcXHJcXG5cXHRyaWdodDogMDtcXHJcXG5cXHRwYWRkaW5nOiAzMHB4IDEwcHg7XFxyXFxuXFx0dHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjhzIGVhc2UgMHM7XFxyXFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG4ucG9wdXBfc2hvdyB7XFxyXFxuXFx0ei1pbmRleDogMTUwO1xcclxcblxcdHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxyXFxuXFx0cG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxufVxcclxcbi5wb3B1cF9zaG93IC5wb3B1cF9fY29udGVudCB7XFxyXFxuXFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbn1cXHJcXG4ucG9wdXBfX3dyYXBwZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFx0ZmxleDogMSAxIGF1dG87XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ucG9wdXBfX2NvbnRlbnQge1xcclxcblxcdHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcblxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UgMHM7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG5cXHRwYWRkaW5nOiAyMHB4O1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdG1heC13aWR0aDogOTAwcHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMjBweDtcXHJcXG5cXHQubG9jayAmIHtcXHJcXG5cXHRcXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gUG9wdXAtc3dpcGVyXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLnBvcHVwLXN3aXBlciB7XFxyXFxuXFxyXFxuXFx0Jl9fd3JhcHBlciB7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX3NsaWRlIHtcXHJcXG5cXHRcXHR3aWR0aDogNzcwcHg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2ltZyB7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX3RpdGxlLWJsb2NrIHtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fdGl0bGUge1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19zdWJ0aXRsZSB7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2NvdW50ZXIge1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19pdGVtIHtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi5zd2lwZXIge1xcclxcbn1cXHJcXG4uc3dpcGVyLXdyYXBwZXIge1xcclxcbn1cXHJcXG4uc3dpcGVyLXNsaWRlIHtcXHJcXG59XFxyXFxuLnN3aXBlci1jb3VudGVyIHtcXHJcXG5cXHJcXG5cXHQmX19pdGVtIHtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy8g0JfQsNCz0LDQu9GM0L3QuNC5INGE0LDQudC7INC10LvQtdC80LXQvdGC0ZbQsiDRhNC+0YDQvFxcclxcbi8vINCU0LvRjyDQv9GW0LTQutC70Y7Rh9C10L3QvdGPL9Cy0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC60L7QvdC60YDQtdGC0L3QvtCz0L4g0LXQu9C10LzQtdC90YLQsCDRhNC+0YDQvNC4INC00LjQstC40YHRjCBiYXNlL2Zvcm1zL2Zvcm1zLnNjc3NcXHJcXG5AaW1wb3J0IFxcXCJiYXNlL2Zvcm1zL2Zvcm1zXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC/0L7Qv9Cw0L/RltCyXFxyXFxuQGltcG9ydCBcXFwiYmFzZS9wb3B1cFxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDRgdC/0L7QudC70LXRgNGW0LJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3Nwb2xsZXJzXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINGC0LDQsdGW0LJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3RhYnNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LzQsNC/XFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9tYXBzXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINCx0LvQvtC60YMgXFxcItC/0L7QutCw0LfQsNGC0Lgg0YnQtVxcXCJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3Nob3dtb3JlXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQu9C40L/QutC+0LPQviDQsdC70L7QutGDXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zdGlja3lcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC/0L7QstC90L7QtdC60YDQsNC90L3QvtCz0L4g0LHQu9C+0LrRg1xcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvZnVsbHNjcmVlblxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0L/QvtC10LrRgNCw0L3QvtGXINC/0YDQvtC60YDRg9GC0LrQuFxcclxcbi8vIFN0eWxlcyBmb3IgZnVsbHBhZ2Ugc2Nyb2xsXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9mdWxscGFnZVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8gcmlwcGxlINC10YTQtdC60YLRg1xcclxcbi8vIFN0eWxlcyBmb3IgcmlwcGxlIGVmZmVjdFxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvcmlwcGxlXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQutCw0YHRgtC+0LzQvdC+0LPQviDQutGD0YDRgdC+0YDRg1xcclxcbi8vIFN0eWxlcyBmb3IgY3VzdG9tIGN1cnNvclxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvY3Vyc29yXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDRh9GD0LnQvdC40YUg0LrQsNGA0YLQuNC90L7QuiAoSUJHKVxcclxcbi8vINCh0L3RltC/0L/QtdGCIChIVE1MKTogaWJnIChkaXYg0Lcg0LrQsNGA0YLQuNC90LrQvtGOINGC0LAg0LrQu9Cw0YHQsNC80LgpXFxyXFxuLy8g0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBpYmdhIChhINC3INC60LDRgNGC0LjQvdC60L7RjiDRgtCwINC60LvQsNGB0LDQvNC4KVxcclxcbltjbGFzcyo9XFxcIi1pYmdcXFwiXSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGltZyB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG5cXHR9XFxyXFxufVxcclxcbltjbGFzcyo9XFxcIi1pYmctLWNvbnRhaW5cXFwiXSB7XFxyXFxuXFx0aW1nIHtcXHJcXG5cXHRcXHRvYmplY3QtZml0OiBjb250YWluO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0KjQsNCx0LvQvtC90LggKNC30LDQs9C+0YLRltCy0LvRlilcXHJcXG4vLyBAZXh0ZW5kICXRltC8J9GPINGI0LDQsdC70L7QvdGDO1xcclxcbi8vINCh0L3RltC/0L/QtdGCIChTQ1NTKTogZXhcXHJcXG5cXHJcXG4vLyDQm9GW0YfQuNC70YzQvdC40Log0LTQu9GPINGB0L/QuNGB0LrRg1xcclxcbiVsaXN0Q291bnRlciB7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcblxcdGNvdW50ZXItcmVzZXQ6IGl0ZW07XFxyXFxuXFx0bGkge1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHQmOmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0Y291bnRlci1pbmNyZW1lbnQ6IGl0ZW07XFxyXFxuXFx0XFx0XFx0Y29udGVudDogY291bnRlcihpdGVtKTtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0JDQtNCw0L/RgtC40LLQvdC1INCy0ZbQtNC10L5cXHJcXG4lcmVzcG9uc2l2ZVZpZGVvIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRoZWlnaHQ6IDA7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDU2LjI1JTtcXHJcXG5cXHR2aWRlbyxcXHJcXG5cXHRpZnJhbWUsXFxyXFxuXFx0b2JqZWN0LFxcclxcblxcdGVtYmVkIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0JLRltC00LXQviDRj9C6INGE0L7QvVxcclxcbiV2aWRlb0JhY2tncm91bmQge1xcclxcblxcdHZpZGVvLFxcclxcblxcdGlmcmFtZSxcXHJcXG5cXHRvYmplY3QsXFxyXFxuXFx0ZW1iZWQge1xcclxcblxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRcXHR0b3A6IDUwJTtcXHJcXG5cXHRcXHRsZWZ0OiA1MCU7XFxyXFxuXFx0XFx0bWluLXdpZHRoOiAxMDAlO1xcclxcblxcdFxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0d2lkdGg6IGF1dG87XFxyXFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdFxcdHotaW5kZXg6IC0xMDA7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCh0ZbRgNC40Lkg0YTRltC70YzRgtGAXFxyXFxuJWdyYXlmaWx0ZXIge1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuXFx0ZmlsdGVyOiBncmF5c2NhbGUoMSk7XFxyXFxuXFx0QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuXFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0ZmlsdGVyOiBncmF5c2NhbGUoMCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0KHQutCw0YHRg9Cy0LDRgtC4INCy0LjQtNGW0LvQtdC90L3Rj1xcclxcbiVub3NlbGVjdCB7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi8vINCU0LfQtdGA0LrQsNC70YzQvdC1INCy0ZbQtNC+0LHRgNCw0LbQtdC90L3Rj1xcclxcbiVtaXJyb3Ige1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcclxcbn1cXHJcXG4vLyDQn9C70LDQstC90LjQuSDRgdC60YDQvtC70LtcXHJcXG4lc21vb3Roc2Nyb2xsIHtcXHJcXG5cXHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxufVxcclxcbi8vINCh0YXQvtCy0LDRgtC4INGB0LrRgNC+0LvQu1xcclxcbiVoaWRlc2Nyb2xsIHtcXHJcXG5cXHQmOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuXFx0Y29sb3I6ICNmZmY7XFxyXFxuXFx0Jl9fbWVudSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOjU4MHB4KXtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiA1MnB4O1xcclxcblxcdFxcdCAgfVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG5cXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyMCwgMTUpO1xcclxcbn1cXHJcXG4ubWVudSB7XFxyXFxuXFxyXFxuXFx0Jl9fYm9keSB7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAzNSwgMjUpO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMzUsIDI1KTtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdHotaW5kZXg6IDEwO1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOjU4MHB4KXtcXHJcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0ICB9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2xpc3Qge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tcmlnaHRcXFwiLCA2MCwgNTApO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdhcFxcXCIsIDQwLCAzMCk7XFxyXFxuXFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6NTgwcHgpe1xcclxcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDA7XFxyXFxuXFx0XFx0XFx0ZmxleDogMjtcXHJcXG5cXHRcXHQgIH1cXHJcXG5cXHQgIH1cXHJcXG5cXHJcXG5cXHQmX19saW5rIHtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDM1LCAyNSk7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAzNSwgMjUpO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMTZweDtcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6NTgwcHgpe1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMjhweDtcXHJcXG5cXHRcXHQgIH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQmOjpiZWZvcmUge1xcclxcblxcdFxcdFxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRcXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdFxcdHRvcDogNDVweDtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDFweDtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcblxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxuXFx0XFx0XFx0b3BhY2l0eTogMDtcXHJcXG5cXHRcXHRcXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHQmOjpiZWZvcmUge1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG5cXHRcXHRcXHRcXHRvcGFjaXR5OiAxO1xcclxcblxcdFxcdFxcdFxcdHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fbGluay5jdXJyZW50IHtcXHJcXG5cXHRcXHQmOjpiZWZvcmUge1xcclxcblxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG5cXHRcXHRcXHRvcGFjaXR5OiAxO1xcclxcblxcdFxcdFxcdHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLnNvY2lhbHMtbGlzdCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdhcFxcXCIsIDE1LCAxMCk7XFxyXFxuXFxyXFxuXFx0QG1lZGlhIChtYXgtd2lkdGg6NTgwcHgpe1xcclxcblxcdFxcdGdhcDogMzBweDtcXHJcXG5cXHRcXHRmbGV4OiAxO1xcclxcbiAgXFx0fVxcclxcblxcclxcblxcdCZfX2ljb24ge1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOjU4MHB4KXtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMjVweDtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDI1cHg7XFxyXFxuICBcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vL0J1cmdlclxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xcclxcblxcdC5tZW51X19ib2R5IHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0XFx0dG9wOiA1MnB4O1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGF1dG87XFxyXFxuXFx0XFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5pY29uLW1lbnUge1xcclxcblxcdEBtZWRpYSAobWluLXdpZHRoOjU4MHB4KXtcXHJcXG5cXHRcXHRkaXNwbGF5OiBub25lOyAgXFxyXFxuXFx0fVxcclxcblxcdEBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xcclxcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHR3aWR0aDogdG9SZW0oMjUpO1xcclxcblxcdFxcdGhlaWdodDogdG9SZW0oMTQpO1xcclxcblxcdFxcdHotaW5kZXg6IDU7XFxyXFxuXFx0XFx0QG1lZGlhIChhbnktaG92ZXI6IG5vbmUpIHtcXHJcXG5cXHRcXHRcXHRjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdHNwYW4sXFxyXFxuXFx0XFx0Jjo6YmVmb3JlLFxcclxcblxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcblxcdFxcdFxcdHJpZ2h0OiAwO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IHRvUmVtKDIpO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdCY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0Ym90dG9tOiAwO1xcclxcblxcdFxcdFxcdHdpZHRoOiA1MCU7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdHNwYW4ge1xcclxcblxcdFxcdFxcdHRvcDogY2FsYyg1MCUgLSB0b1JlbSgxKSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdC5tZW51LW9wZW4gJiB7XFxyXFxuXFx0XFx0XFx0Ky5tZW51X19ib2R5IHtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdHNwYW4ge1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAwO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHQmOjpiZWZvcmUsXFxyXFxuXFx0XFx0XFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHQmOjpiZWZvcmUge1xcclxcblxcdFxcdFxcdFxcdHRvcDogY2FsYyg1MCUgLSB0b1JlbSgxKSk7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdFxcdFxcdGJvdHRvbTogY2FsYyg1MCUgLSB0b1JlbSgxKSk7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0fVxcdFxcclxcblxcdH1cXHJcXG5cXHRcXHJcXG5cXHRcXHJcXG5cXHJcXG5cIixcIi8v0J/RltC00LrQu9GO0YfQtdC90L3RjyDRiNGA0LjRhNGC0YNcXHJcXG5AbWl4aW4gZm9udCgkZm9udF9uYW1lLCAkZmlsZV9uYW1lLCAkd2VpZ2h0LCAkc3R5bGUpIHtcXHJcXG5cXHRAZm9udC1mYWNlIHtcXHJcXG5cXHRcXHRmb250LWZhbWlseTogJGZvbnRfbmFtZTtcXHJcXG5cXHRcXHRmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuXFx0XFx0c3JjOlxcclxcblxcdFxcdFxcdHVybChcXFwiLi4vZm9udHMvI3skZmlsZV9uYW1lfS53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKSxcXHJcXG5cXHRcXHRcXHR1cmwoXFxcIi4uL2ZvbnRzLyN7JGZpbGVfbmFtZX0ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiAjeyR3ZWlnaHR9O1xcclxcblxcdFxcdGZvbnQtc3R5bGU6ICN7JHN0eWxlfTtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vUGVyY2VudFxcclxcbkBmdW5jdGlvbiBwZXJjZW50KCRweCwgJGZyb206IDEwMCkge1xcclxcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgJGZyb20pICogMTAwJTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcbi8vUkVNXFxyXFxuQGZ1bmN0aW9uIHRvUmVtKCRweCwgJGN1cnJlbnQ6IDE2KSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAkY3VycmVudCkgKyByZW07XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG4vL0VNXFxyXFxuQGZ1bmN0aW9uIGVtKCRweCwgJGN1cnJlbnQ6IDE2KSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAkY3VycmVudCkgKyBlbTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcblxcclxcbi8vQ3VycmVuY3lcXHJcXG5AbWl4aW4gY3VycmVuY3koJHN5bSkge1xcclxcblxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRjb250ZW50OiBcXFwiI3skc3ltfVxcXCI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyBHcmlkc1xcclxcbkBtaXhpbiBncmlkQ2FyZHMoJHR5cGU6IGZpdCwgJG1pbjogMjgwcHgsICRtYXg6IDFmciwgJGdhcDogMzBweCkge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z2FwOiAkZ2FwO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tI3skdHlwZX0sIG1pbm1heCgkbWluLCAkbWF4KSk7XFxyXFxufVxcclxcblxcclxcbi8vINCQ0LTQsNC/0YLQuNCy0L3QsCDQstC70LDRgdGC0LjQstGW0YHRgtGMIChjbGFtcClcXHJcXG5AbWl4aW4gYWRhcHRpdmVWYWx1ZSgkcHJvcGVydHksICRzdGFydFNpemUsICRtaW5TaXplLCAka2VlcFNpemU6IDAsICR3aWR0aEZyb206ICRjb250YWluZXJXaWR0aCwgJHdpZHRoVG86ICRtaW5XaWR0aCkge1xcclxcblxcdEBpZiAoJHN0YXJ0U2l6ZT09MCkge1xcclxcblxcdFxcdCRzdGFydFNpemU6IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHRAaWYgKCRtaW5TaXplPT0wKSB7XFxyXFxuXFx0XFx0JG1pblNpemU6IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQlNC70Y8gY2FsYygpO1xcclxcblxcdCRhZGRTaXplOiBtYXRoLmRpdigkc3RhcnRTaXplIC0gJG1pblNpemUsIDE2KTtcXHJcXG5cXHJcXG5cXHRAaWYgKCR3aWR0aEZyb20gPT0gJGNvbnRhaW5lcldpZHRoIGFuZCAkbWF4V2lkdGhDb250YWluZXIgPT0gMCkge1xcclxcblxcdFxcdCR3aWR0aEZyb206ICRtYXhXaWR0aDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JHRgNC10LnQui3Qv9C+0ZfQvdGC0Lgg0LIgRU1cXHJcXG5cXHQkd2lkdGhGcm9tTWVkaWE6IGVtKCR3aWR0aEZyb20pO1xcclxcblxcdCR3aWR0aFRvTWVkaWE6IGVtKCR3aWR0aFRvKTtcXHJcXG5cXHJcXG5cXHQvLyDQpNC+0YDQvNGD0LvQsCDQv9C70LDQstCw0Y7Rh9C+0LPQviDQt9C90LDRh9C10L3QvdGPXFxyXFxuXFx0Ly8g0JjRgdGC0L7Rh9C90LjQujogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9saW5lYXJseS1zY2FsZS1mb250LXNpemUtd2l0aC1jc3MtY2xhbXAtYmFzZWQtb24tdGhlLXZpZXdwb3J0L1xcclxcblxcdCRzbG9wZTogbWF0aC5kaXYoKCRzdGFydFNpemUgLSAkbWluU2l6ZSksICgkd2lkdGhGcm9tIC0gJHdpZHRoVG8pKTtcXHJcXG5cXHQkeUludGVyc2VjdGlvbjogLSR3aWR0aFRvICogJHNsb3BlICsgJG1pblNpemU7XFxyXFxuXFx0QGlmICgkeUludGVyc2VjdGlvbj09MCkge1xcclxcblxcdFxcdCR5SW50ZXJzZWN0aW9uOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFx0JGZseVZhbHVlOiAje3RvUmVtKCR5SW50ZXJzZWN0aW9uKX1cXFwiICsgXFxcIiAjeyRzbG9wZSAqIDEwMH12dztcXHJcXG5cXHJcXG5cXHQvLyDQntGC0YDQuNC80LDQvdC90Y8g0LfQvdCw0YfQtdC90L3RjyDQstC70LDRgdGC0LjQstC+0YHRgtGWXFxyXFxuXFx0JHByb3BlcnR5VmFsdWU6ICN7XFxcImNsYW1wKFxcXCIgdG9SZW0oJG1pblNpemUpIFxcXCIsXFxcIiAkZmx5VmFsdWUgXFxcIixcXFwiIHRvUmVtKCRzdGFydFNpemUpIFxcXCIpXFxcIn07XFxyXFxuXFx0Ly8g0K/QutGJ0L4g0L3QtdCz0LDRgtC40LLQvdGWINC30L3QsNGH0LXQvdC90Y9cXHJcXG5cXHRAaWYgKCRtaW5TaXplID4gJHN0YXJ0U2l6ZSkge1xcclxcblxcdFxcdCRwcm9wZXJ0eVZhbHVlOiAje1xcXCJjbGFtcChcXFwiIHRvUmVtKCRzdGFydFNpemUpIFxcXCIsXFxcIiAkZmx5VmFsdWUgXFxcIixcXFwiIHRvUmVtKCRtaW5TaXplKSBcXFwiKVxcXCJ9O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQktGB0YLQsNC90L7QstC70Y7RlNC80L4g0LfQvdCw0YfQtdC90L3RjyDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XFxyXFxuXFx0QGlmICRrZWVwU2l6ZSAhPSAxIGFuZCAka2VlcFNpemUgIT0gMyB7XFxyXFxuXFx0XFx0QG1lZGlhIChtaW4td2lkdGg6ICR3aWR0aEZyb21NZWRpYSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogdG9SZW0oJHN0YXJ0U2l6ZSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHQvLyDQkNC00LDQv9GC0YPRlNC80L4g0YDQvtC30LzRltGAINGDINC/0YDQvtC80ZbQttC60YMg0LzRltC2INC30LDQt9C90LDRh9C10L3QuNC80Lgg0YjQuNGA0LjQvdCw0LzQuCDQsifRjtC/0L7RgNGC0YNcXHJcXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogJHdpZHRoVG9NZWRpYSkgYW5kIChtYXgtd2lkdGg6ICR3aWR0aEZyb21NZWRpYSkge1xcclxcblxcdFxcdC8vINCv0LrRidC+INC/0ZbQtNGC0YDQuNC80YPRlNGC0YzRgdGPIGNsYW1wKCk7XFxyXFxuXFx0XFx0QHN1cHBvcnRzICgjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Ly8g0K/QutGJ0L4g0L3QtSDQv9GW0LTRgtGA0LjQvNGD0ZTRgtGM0YHRjyBjbGFtcCgpO1xcclxcblxcdFxcdEBzdXBwb3J0cyBub3QgKCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWUpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IGNhbGMoI3t0b1JlbSgkbWluU2l6ZSl9ICsgI3skYWRkU2l6ZX0gKiAoMTAwdncgLSAje3RvUmVtKCR3aWR0aFRvKX0pIC8gI3ttYXRoLmRpdigkd2lkdGhGcm9tLCAxNikgLSBtYXRoLmRpdigkd2lkdGhUbywgMTYpfSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHRAaWYgJGtlZXBTaXplICE9IDEgYW5kICRrZWVwU2l6ZSAhPSAyIHtcXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJHdpZHRoVG9NZWRpYSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogdG9SZW0oJG1pblNpemUpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgMTIxLCA0MCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMTMwLCA3MCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAmX19jb250YWluZXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNjQxLCAyMDApO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDY0MSwgMjAwKTtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IC0yNSU7XFxyXFxuICAgICAgICAgICAgdG9wOiAyMyU7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxyXFxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KXtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICB9IFxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbi5ibG9jay13cmFwcGVyIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgZ2FwOiA4MHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5sZWZ0LWJsb2NrIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA0MDAsIDI4MCk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IC00MCU7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XFxyXFxuICAgICAgICB3aWR0aDogMXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMDAlO1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MCU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJl9fdGV4dCB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tdG9wXFxcIiwgMzAsIDE1KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA3NiwgMzUpO1xcclxcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7IFxcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcbi5mb290ZXItbG9nbyB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDM0LCAyMCk7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMzsgXFxyXFxufVxcclxcbi5jb250YWN0cyB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA4MSwgNDApO1xcclxcbiAgICAmX19pdGVtIHtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19saW5rIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS43OyBcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uc29jaWFscyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuLnJpZ2h0LWJsb2NrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWxlZnRcXFwiLCAxMDAsIDApO1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLnN1YnNjcmliZSB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA0MCwgMjApO1xcclxcbiAgICBjb2xvcjogIzk2OTY5NjtcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG4uZm9vdGVyLWZvcm0ge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDU3MCwgMjgwKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMTMxLCA2MCk7XFxyXFxuICAgICZfX2lucHV0IHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNTcwLCAyODApO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDM2cHg7XFxyXFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcclxcblxcclxcbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgIGJvdHRvbTogMTdweDtcXHJcXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLCBib3R0b20gMC40cyBlYXNlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjpmb2N1cyB7XFxyXFxuICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgICAgICAgICBib3R0b206IDM0cHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2J1dHRvbiB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgIGJvdHRvbTogMTdweDtcXHJcXG4gICAgICAgIHdpZHRoOiA2NHB4OyAgXFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICAgICAgYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDZweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDZweDtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ubGlua3MtYmxvY2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDYxLjk4cHgpIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJnYXBcXFwiLCA2MCwgNDApO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5mb290ZXItbmF2IHtcXHJcXG4gICAgJjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tcmlnaHRcXFwiLCAxMjQsIDYwKTtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NjEuOThweCkge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmOmxhc3QtY2hpbGQge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1yaWdodFxcXCIsIDg4LCA0MCk7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NjEuOThweCkge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICB9XFxyXFxuICAgICZfX2l0ZW0ge1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2xpbmsge1xcclxcbiAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjc7IFxcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIHRvcDogMTBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuNXMgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uZm9vdGVyLWNyZWRpdHMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDE1cHg7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGNvbG9yOiAjOTY5Njk2O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7IFxcclxcbiAgICB3aWR0aDogMTQ5cHg7XFxyXFxuICAgIHRleHQtd3JhcDogbm93cmFwO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjMxLjk4cHgpIHtcXHJcXG4gICAgICAgIGJvdHRvbTogLTUwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXCIsXCIvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyBIZXJvIHNlY3Rpb25cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uaGVybyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDQ4MCwgMjcwKTtcXHJcXG4gICAgJl9fY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLWNvdW50ZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImJvdHRvbVxcXCIsIDcwLCAzMCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImxlZnRcXFwiLCAyMDAsIDE1KTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA4MCwgNTApO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAmX19pdGVtIHtcXHJcXG4gICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDIwLCAxMCk7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgdG9wOiA3cHg7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibGVmdFxcXCIsIDMwLCAxOSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJnNwYW4ge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTQsIDEyKTsgIFxcclxcbiAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJsb2NrLXRpdGxlIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInRvcFxcXCIsIDE3NSwgNTApO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibGVmdFxcXCIsIDIwMCwgMzApO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA1MTYsIDMwMCk7XFxyXFxuICAgICAgICBwYWRkaW5nOiA0MHB4IDAgNDBweCAwO1xcclxcbiAgICAmX190aXRsZSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCA3MCwgMzYpO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XFxyXFxuICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIHRleHQtc2hhZG93OiA0cHggNHB4IDJweCByZ2JhKDAsMCwwLDAuNik7XFxyXFxuICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgd2lkdGg6IDcwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi12aWV3IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ0b3BcXFwiLCAzOTAsIDE2MCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInJpZ2h0XFxcIiwgMTc4LCAyMCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgOTAsIDU1KTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgOTAsIDU1KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDE1LCAxMik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UsIGJveC1zaGFkb3cgMC40cyBlYXNlO1xcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTVweCA4cHggI2ZmZjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLXNsaWRlIHtcXHJcXG4gICAgJl9faW1nIHtcXHJcXG4gICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJoZWlnaHRcXFwiLCA1ODAsIDIyMCk7XFxyXFxuICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnN3aXBlci1idXR0b24tcHJldiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyMjVweDtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibGVmdFxcXCIsIC01MCwgNDAwKTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6OTU4cHgpe1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICB9XFxyXFxufVxcclxcbi5zd2lwZXItYnV0dG9uLW5leHQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjI1cHg7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInJpZ2h0XFxcIiwgLTUwLCA0MDApO1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDo5NThweCl7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gQWJvdXQtdXMgc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5hYm91dC11cyB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgMjU2LCA0MCk7XFxyXFxuXFxyXFxuICAgICZfX2NvbnRhaW5lci0tYmlnIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMzA2cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uaW50cm8tYmxvY2sge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDYxNSwgMjkwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDkzLCA0MCk7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICZfX2xhYmVsIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAyNSwgMTUpO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190aXRsZSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAzNCwgMjQpO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmluZm8tYmxvY2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDE2MCwgNjApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJnYXBcXFwiLCAxMTAsIDQwKTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6NTgwcHgpe1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDQwLCAyMCk7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtLS10b3AtbGluZSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDM5MSwgMjAwKTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgMzQsIDIwKTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RleHQtLWJpZyB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyMCwgMTgpO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG5cXHJcXG4gICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNDAwLCAyMTApO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpXFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faXRlbS0tYWN0aW9uIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNDYzLCAyNTApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RleHQtLXNtYWxsIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDE3LCAxNSk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgNTAsIDI1KTtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ0biBzcGFuIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiA1MDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDM5LCAxOCk7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTkuOThweCkge1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ2OS45OHB4KSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEzcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgMTksIDEwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAxOSwgMTApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDE3MCwgODApO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgXFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ0b3BcXFwiLCAyNSwgMTIpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicmlnaHRcXFwiLCAzOCwgMTkpO1xcclxcbiAgICAgICAgd2lkdGg6IDZweDtcXHJcXG4gICAgICAgIGhlaWdodDogNnB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5NTkuOThweCkge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMjUlKTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2U7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi0tcmV2ZXJzZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkICNmZmY7XFxyXFxuXFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gRGlyZWN0aW9ucyBzZWN0aW9uXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmRpcmVjdGlvbnMge1xcclxcbiAgICBtYXgtd2lkdGg6IDEzMzZweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE0MCwgNjApO1xcclxcbn1cXHJcXG5cXHJcXG4ud29ya3MtbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG4gICAgJl9faXRlbSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDMwNCwgMjAwKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwgMCwgMCwgMC4xMykgMCUsIHJnYmEoMCwgMCwgMCwgMC42NSkgMTAwJSk7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJoZWlnaHRcXFwiLCA0MDAsIDI4MCk7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgICAgICAgICAgLndvcmtzLWxpc3RfX2luZm8ge1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE2cHgpO1xcclxcbiAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgLndvcmtzLWxpc3RfX2NhcmQge1xcclxcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cig3cHgpO1xcclxcbiAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2NhcmQge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBmaWx0ZXI6IGJsdXIoMCk7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC41cyBlYXNlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFx0Jl9faW5mbyB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1yaWdodFxcXCIsIDkzLCAyNSk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCA1MCwgMjUpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE2cHgpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fdGV4dCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIG1hcmdpbjogMjRweCAwIDI0cHggMDtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OTkuOThweCkge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDsgXFxyXFxuICAgICAgICB9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX21vcmUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDk5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7IFxcclxcbiAgICAgICAgfVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gRGlyZWN0aW9ucyBzZWN0aW9uXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmZlYXR1cmVkIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAxNTcsIDQwKTtcXHJcXG4gICAgJl9fbGlzdCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJnYXBcXFwiLCAxMDAsIDMwKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgICAgICAmOmhvdmVyLFxcclxcbiAgICAgICAgJjpmb2N1cyB7XFxyXFxuICAgICAgICAgICAgLmZlYXR1cmVkX19idG4ge1xcclxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmX19pbWFnZSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDM3MCwgMTg1KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDQyOCwgMjE0KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19sYWJlbCB7ICAgXFxyXFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDsgXFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tdG9wXFxcIiwgMzQsIDE1KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA4LCA0KTtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1OTkuOThweCkge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190eXBlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faW1hZ2UtLWJpZyB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDYwMCwgMjgwKTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDQyOCwgMTk0KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtLS10b3Age1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNjBweDtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faXRlbS0tYm90dG9tIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IC0xNjBweDtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2J0biB7XFxyXFxuICAgICAgICBsZWZ0OiAxMzBweDtcXHJcXG4gICAgICAgIHRvcDogMjAwcHg7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UsIHZpc2liaWxpdHkgMC41cyBlYXNlLCB0cmFuc2Zvcm0gMC40cyBlYXNlLCBib3gtc2hhZG93IDAuNHMgZWFzZTtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgICAgICAgbGVmdDogMTAwcHg7XFxyXFxuICAgICAgICAgICAgdG9wOiAxMDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlU21hbGwpIHtcXHJcXG4gICAgICAgICAgICBsZWZ0OiA2NnB4O1xcclxcbiAgICAgICAgICAgIHRvcDogNzdweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uaW50cm9kdWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmlyc3QgYmFzZWxpbmU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDQ4LCAyNSk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDEwMCwgMjApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXJpZ2h0XFxcIiwgMTAwLCA1MCk7XFxyXFxuICAgICZfX3RpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzc1cHg7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxMDAsIDUwKTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA0MjUsIDI1MCk7XFxyXFxuICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNzAsIDM1KTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgICAgICAgICBsZWZ0OiA2ODBweDtcXHJcXG4gICAgICAgICAgICB0b3A6IDgwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDQ4LCAyNSk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsZWZ0XFxcIiwgMTAwLCA1MCk7XFxyXFxuICAgICAgICAgICAgICAgIHRvcDogLTQwcHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vIFByb2Nlc3Mgc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5wcm9jZXNzIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICAgICAgaGVpZ2h0OiA2NjRweDtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCl7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA3MTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHRcXHQmX19jb250YWluZXIge1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMTMwMHB4O1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XFxyXFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAxNDksIDQwKTtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE2MSwgNDApO1xcclxcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDY0MSwgMjAwKTtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJoZWlnaHRcXFwiLCA2NDEsIDIwMCk7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAtMjAlO1xcclxcbiAgICAgICAgICAgIHRvcDogLTM1JTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXHJcXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpe1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jl9fdGl0bGUge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDgwLCAzMCk7IFxcclxcblxcclxcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCl7XFxyXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDEwMCwgMjApO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDE5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jl9fbGlzdCB7XFxyXFxuICAgICAgICAgICAgZ2FwOiAyNHB4O1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tbGVmdFxcXCIsIDYwLCAyMCk7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLXJpZ2h0XFxcIiwgMTQwLCAwKTtcXHJcXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpe1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jl9faXRlbSB7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAucHJvY2Vzc19fdGV4dCB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjglKVxcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIC5wcm9jZXNzX19udW1iZXIge1xcclxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jl9fdGV4dCB7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICM2RjZGNkY7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjRzIGVhc2UsIHRyYW5zZm9ybSAwLjRzIGVhc2U7XFxyXFxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgICBsZWZ0OiAtOTBweDtcXHJcXG4gICAgICAgICAgICAgICAgdG9wOiAxN3B4O1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLCBvcGFjaXR5IDAuNHMgZWFzZTtcXHJcXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KXtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX19udW1iZXIge1xcclxcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2U7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ucHJvY2Vzcy13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KXtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYmxvY2staW5mbyB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMzk1LCAyNTApO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpe1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgMTAwLCAyMCk7XFxyXFxuICAgIH1cXHJcXG5cXHRcXHQmX190ZXh0IHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA1MywgMjUpOyBcXHJcXG4gICAgICAgICAgICBcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFxyXFxufVxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vQ3JlYXRlIHNlY3Rpb25cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uY3JlYXRlIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAxNjAsIDQwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAxNDAsIDQwKTtcXHJcXG4gICAgJl9fY29udGFpbmVyIHtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX193cmFwcGVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAzNy45OHB4KSB7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uaW1nLWJsb2NrIHtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMzcuOThweCkge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgJl9faXRlbSB7XFxyXFxuICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjRzIGVhc2U7XFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtLS1iaWcge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNDcwLCAyMzUpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgMjkwLCAxNDUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2JvdHRvbSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDU3NSwgMzAwKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtLS1zbWFsbCB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCAxMzAsIDMwKTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1yaWdodFxcXCIsIDMwLCAxNSk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDI3MCwgMTM1KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDE0MCwgODApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0tLW1pZGRsZSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDI3MCwgMTM1KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDI1MCwgMTI1KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uY3JlYXRlLWluZm8ge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDkzLCA0MCk7XFxyXFxuICAgICZfX3RpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xcclxcbiAgICAgICAgd2lkdGg6IDM1N3B4O1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDM3LCAyMCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGV4dCB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCA5MCwgMjApO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDUzLCAyNyk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDQzOCwgMjgwKTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS42OyBcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDM3Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgzLjk4cHgpIHtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCA0MCwgMjApO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19idG4ge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWxlZnRcXFwiLCA5MCwgMjApO1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMzcuOThweCkge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4My45OHB4KSB7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWxlZnRcXFwiLCA0MCwgMjApO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vVmFsdWVzIHNlY3Rpb25cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4udmFsdWVzIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAyMTQsIDQwKTtcXHJcXG4gICAgJl9fY29udGFpbmVyIHtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190aXRsZSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxMDAsIDU1KTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDg2LCA0MCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fbGlzdCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJnYXBcXFwiLCA3NSwgNDApO1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MS45OHB4KSB7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0ge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAzNDAsIDI1MCk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCAxMDAsIDUwKTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NTEuOThweCkge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2ltZyB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDcwLCAzNSk7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2xhYmVsIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDI0LCAyMCk7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDsgXFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RleHQgeyAgXFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fbW9yZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIC52YWx1ZXNfX2ljb24ge1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2ljb24ge1xcclxcbiAgICAgICAgZmlsbDogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vU3dpcGVyIHNlY3Rpb25cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uc3dpcGVyLXNlY3Rpb24ge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDEyOCwgNDApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE5NiwgNDApO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgJl9fY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDY0MSwgMjAwKTtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJoZWlnaHRcXFwiLCA2NDEsIDIwMCk7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDIzJTtcXHJcXG4gICAgICAgICAgICB0b3A6IDIzJTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXHJcXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpe1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgIH0gXFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fd3JhcHBlciB7XFxyXFxuICAgICAgICB6LWluZGV4OiAyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3NsaWRlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pbWctcXVvdGUge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAzOCwgMTkpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDkyLCAyMCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGV4dCB7XFxyXFxuICAgICAgICBjb2xvcjogI0ZGRjtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDI0LCAxNSk7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDY3MywgMzAwKTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAzMywgMTUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2F1dGhvciB7XFxyXFxuICAgICAgICBjb2xvcjogIzk2OTY5NjtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmQtY291bnRlciB7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGxlZnQ6IDQ3JTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiYm90dG9tXFxcIiwgLTEyMCwgMCk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibGVmdFxcXCIsIC01NDgsIC0xMzUpO1xcclxcbiAgICAgICAgYm90dG9tOiA0MDVweDtcXHJcXG4gICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAxNjgsIDgwKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJyaWdodFxcXCIsIC01NzYsIC0xMjApO1xcclxcbiAgICAgICAgYm90dG9tOiAxMDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA3MCwgMzUpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vL0NsaWVudHMgc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5jbGllbnRzIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAxNTUsIDQwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAxNTUsIDQwKTtcXHJcXG4gICAgJl9fY29udGFpbmVyIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogOTc1cHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NzkuOThweCkge1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGl0bGUtYmxvY2sge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLXJpZ2h0XFxcIiwgMjYwLCAwKTtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NzkuOThweCkge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdXBwZXJ0aXRsZSB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDI3LCAxNSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGl0bGUge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMzQsIDI0KTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAyNjgsIDEyNSk7IFxcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc3OS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19saXN0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJyb3ctZ2FwXFxcIiwgNTAsIDMwKTtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NzkuOThweCkge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy9OZXcgc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5uZXcge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE2MCwgNDApO1xcclxcbiAgICAmX19jb250YWluZXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImJvdHRvbVxcXCIsIC0xNjAsIC03MCk7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGl0bGUge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgNDgsIDI0KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA5MCwgMzApO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7IFxcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2xpc3Qge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZ2FwXFxcIiwgMzAsIDQwKTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA4MCwgMzApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0ge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAzNzAsIDI4MCk7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19kYXRlIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICB3aWR0aDogMzUlO1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDE0LCAxMCk7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pbWFnZSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMjcsIDE1KTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RleHQge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjAsIDE2KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMjk0LCAyNjApO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7IFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2J0biB7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vL1dvcmsgc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi53b3JrIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAxNTgsIDQwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAxNTgsIDQwKTtcXHJcXG4gICAgJl9fY29udGFpbmVyIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogOTYwcHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fYmxvY2sge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQ5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RpdGxlIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNDgzLCAyNTApO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTAwLCA1MCk7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcXHJcXG4gICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xcclxcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pbWcge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAyMzAsIDExNSk7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBsZWZ0OiA0NyU7XFxyXFxuICAgICAgICBib3R0b206IDM4cHg7XFxyXFxuXFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQ5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2xpbmsge1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIixcIjpyb290IHtcXHJcXG4gICAgLS1kYXJrLWNsOiAjMEUwRTBFO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTdhOTQ0YTgwZmUzOTE3Y2EzZTNcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=