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

popup__close .popup-swiper__slide {
  width: 770px;
}
popup__close .popup-swiper__img {
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
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base/popup.scss","webpack://./src/scss/base.scss","webpack://./src/scss/header.scss","webpack://./src/scss/base/mixins.scss","webpack://./src/scss/footer.scss","webpack://./src/scss/home.scss","webpack://./src/scss/utils/vars.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;EACC,YAAA;EACA,WAAA;EACA,WAAA;ADGD;;ACDA;;;EAGC,sBAAA;ADID;;ACMA;;EAEC,YAAA;EACA,gBAAA;ADHD;;ACKA;EACC,cAAA;EACA,cAAA;EACA,oBDNY;ECOZ,oBDNU;ECQV,0BAAA;EACA,2BAAA;EACA,8BAAA;EACA,mCAAA;EACA,kCAAA;ADHD;;ACKA;;;EAGC,oBDlBY;ECmBZ,kBAAA;EACA,oBAAA;ADFD;;ACIA;EACC,eAAA;EACA,cAAA;EACA,6BAAA;ADDD;;ACGA;EACC,cAAA;EACA,qBAAA;ADAD;;ACEA;EACC,gBAAA;ADCD;;ACCA;EACC,mBAAA;ADED;;ACAA;;;;;;EAMC,oBAAA;EACA,kBAAA;ADGD;;AAHC;EACC,gBAAA;EACA,kBAAA;EACA,yBAAA;AAMF;AACA;EACC,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;AACD;AAAC;EALD;IAME,cAAA;EAGA;AACF;AADC;EACC,cAAA;AAGF;AAAC;EACC,YAAA;AAEF;;AAEA;;;;;CAAA;AAQC;EAEE,gBAAA;EACA,cAAA;EAIC,oBAAA;AALJ;;AEtGA;EACC,WAAA;EACA,oCAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,gCAAA;EACA,oBAAA;EACA,YAAA;AFyGD;;AEvGA;EACC,UAAA;AF0GD;;AExGA;EACC,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,QAAA;EACA,kBAAA;EACA,mCAAA;EACA,kBAAA;EACA,oBAAA;AF2GD;;AEzGA;EACC,YAAA;EACA,mBAAA;EACA,cAAA;EACA,oBAAA;AF4GD;;AE1GA;EACC,mBAAA;EACA,mBAAA;AF6GD;;AE3GA;EACC,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;EACA,cAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AF8GD;;AE5GA;EACC,kBAAA;EACA,mBAAA;EACA,kCAAA;EACA,sBAAA;EACA,aAAA;EACA,WAAA;EACA,gBAAA;EACA,mBAAA;AF+GD;AE9GC;EACC,mBAAA;AFgHF;;AEpGC;EACC,YAAA;AFuGF;AEpGC;EACC,WAAA;AFsGF;AGzIA;EACC,kBAAA;AH2ID;AG1IC;EACC,kBAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,iBAAA;AH4IF;;AGxIC;EACC,mBAAA;AH2IF;;AI9LA;EACC,gCAAA;EACA,WAAA;AJiMD;AIhMC;EACC,aAAA;EACA,mBAAA;AJkMF;AIjME;EAHD;IAIE,8BAAA;IACA,YAAA;EJoMD;AACF;;AIhMA;EACC,kBAAA;AJmMD;AKnIE;EDjEF;ICkEG,kBAAA;ELsID;AACF;AKnIC;EAEC;IDxEF;MCyEG,4EAhBc;ILqJb;EACF;EKnIA;ID5EF;MC6EG,0DAAA;ILsIC;EACF;AACF;AKpIE;EDjFF;ICkFG,oBAAA;ELuID;AACF;;AIpNC;EAGC,aAAA;EACA,WAAA;AJqNF;AK9JE;ED3DD;IC4DE,sBAAA;ELiKD;AACF;AK9JC;EAEC;IDlED;MCmEE,gFAhBc;ILgLb;EACF;EK9JA;IDtED;MCuEE,2DAAA;ILiKC;EACF;AACF;AK/JE;ED3ED;IC4EE,sBAAA;ELkKD;AACF;AKpLE;ED3DD;IC4DE,yBAAA;ELuLD;AACF;AKpLC;EAEC;IDlED;MCmEE,mFAhBc;ILsMb;EACF;EKpLA;IDtED;MCuEE,8DAAA;ILuLC;EACF;AACF;AKrLE;ED3ED;IC4EE,yBAAA;ELwLD;AACF;AIhQE;EALD;IAME,sBAAA;IACA,mBAAA;EJmQD;AACF;AIhQC;EACC,aAAA;EACA,mBAAA;AJkQF;AKpNE;EDhDD;ICiDE,qBAAA;ELuND;AACF;AKpNC;EAEC;IDvDD;MCwDE,8EAhBc;ILsOb;EACF;EKpNA;ID3DD;MC4DE,2DAAA;ILuNC;EACF;AACF;AKrNE;EDhED;ICiEE,sBAAA;ELwND;AACF;AK1OE;EDhDD;ICiDE,WAAA;EL6OD;AACF;AK1OC;EAEC;IDvDD;MCwDE,oEAhBc;IL4Pb;EACF;EK1OA;ID3DD;MC4DE,kDAAA;IL6OC;EACF;AACF;AK3OE;EDhED;ICiEE,aAAA;EL8OD;AACF;AI1SE;EAND;IAOE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wDG,sEAhBc;IL+kBb;EACF;EK7jBA;IC3DF;MD4DG,iDAAA;ILgkBC;EACF;AACF;AK9jBE;EChEF;IDiEG,cAAA;ELikBD;AACF;AMhoBI;EACI,WAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,yBAAA;EACA,UAAA;EACA,YAAA;ANkoBR;AMjoBQ;EARJ;IASQ,YAAA;ENooBV;AACF;AMloBI;EAGI,YAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;ANkoBR;AKvmBE;ECjCE;IDkCD,oBAAA;EL0mBD;AACF;AKvmBC;EAEC;ICxCE;MDyCD,8EAhBc;ILynBb;EACF;EKvmBA;IC5CE;MD6CD,2DAAA;IL0mBC;EACF;AACF;AKxmBE;ECjDE;IDkDD,qBAAA;EL2mBD;AACF;AK7nBE;ECjCE;IDkCD,sBAAA;ELgoBD;AACF;AK7nBC;EAEC;ICxCE;MDyCD,gFAhBc;IL+oBb;EACF;EK7nBA;IC5CE;MD6CD,8DAAA;ILgoBC;EACF;AACF;AK9nBE;ECjDE;IDkDD,wBAAA;ELioBD;AACF;;AM1qBA;EAEI,kBAAA;EACA,gBAAA;EACA,gBAAA;AN4qBJ;AKzpBE;ECvBF;IDwBG,mBAAA;EL4pBD;AACF;AKzpBC;EAEC;IC9BF;MD+BG,2EAhBc;IL2qBb;EACF;EKzpBA;IClCF;MDmCG,uDAAA;IL4pBC;EACF;AACF;AK1pBE;ECvCF;IDwCG,kBAAA;EL6pBD;AACF;;AK/qBE;ECjBF;IDkBG,wBAAA;ELmrBD;AACF;AKhrBC;EAEC;ICxBF;MDyBG,+EAhBc;ILksBb;EACF;EKhrBA;IC5BF;MD6BG,2DAAA;ILmrBC;EACF;AACF;AKjrBE;ECjCF;IDkCG,qBAAA;ELorBD;AACF;AMltBI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;ANotBR;;AMjtBA;EACI,aAAA;EACA,SAAA;ANotBJ;;AMltBA;EACI,aAAA;EACA,sBAAA;ANqtBJ;AKrtBE;ECFF;IDGG,oBAAA;ELwtBD;AACF;AKrtBC;EAEC;ICTF;MDUG,oFAhBc;ILuuBb;EACF;EKrtBA;ICbF;MDcG,wEAAA;ILwtBC;EACF;AACF;AKttB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AAA;EACA,8BAAA;EACA,WAAA;APimCJ;AKpiCE;EEpEF;IFqEG,gBAAA;ELuiCD;AACF;AKpiCC;EAEC;IE3EF;MF4EG,yEAhBc;ILsjCb;EACF;EKpiCA;IE/EF;MFgFG,mDAAA;ILuiCC;EACF;AACF;AKriCE;EEpFF;IFqFG,gBAAA;ELwiCD;AACF;AK1jCE;EEpEF;IFqEG,aAAA;EL6jCD;AACF;AK1jCC;EAEC;IE3EF;MF4EG,yEAhBc;IL4kCb;EACF;EK1jCA;IE/EF;MFgFG,sDAAA;IL6jCC;EACF;AACF;AK3jCE;EEpFF;IFqFG,eAAA;EL8jCD;AACF;AKhlCE;EEpEF;IFqEG,WAAA;ELmlCD;AACF;AKhlCC;EAEC;IE3EF;MF4EG,oEAhBc;ILkmCb;EACF;EKhlCA;IE/EF;MFgFG,oDAAA;ILmlCC;EACF;AACF;AKjlCE;EEpFF;IFqFG,eAAA;ELolCD;AACF;AOjqCQ;EACI,WAAA;EACA,WAAA;EAEA,sBAAA;EACA,kBAAA;EACA,QAAA;APkqCZ;AK7mCE;EE3DM;IF4DL,cAAA;ELgnCD;AACF;AK7mCC;EAEC;IElEM;MFmEL,uEAhBc;IL+nCb;EACF;EK7mCA;IEtEM;MFuEL,oDAAA;ILgnCC;EACF;AACF;AK9mCE;EE3EM;IF4EL,eAAA;ELinCD;AACF;AKnoCE;EE3DM;IF4DL,cAAA;ELsoCD;AACF;AKnoCC;EAEC;IElEM;MFmEL,0DAhBc;ILqpCb;EACF;EKnoCA;IEtEM;MFuEL,qDAAA;ILsoCC;EACF;AACF;AKpoCE;EE3EM;IF4EL,eAAA;ELuoCD;AACF;AKzpCE;EEjDE;IFkDD,mBAAA;EL4pCD;AACF;AKzpCC;EAEC;IExDE;MFyDD,2EAhBc;IL2qCb;EACF;EKzpCA;IE5DE;MF6DD,uDAAA;IL4pCC;EACF;AACF;AK1pCE;EEjEE;IFkED,kBAAA;EL6pCD;AACF;;AO1tCA;EACQ,kBAAA;EAIA,sBAAA;AP0tCR;AKprCE;EE3CF;IF4CG,eAAA;ELurCD;AACF;AKprCC;EAEC;IElDF;MFmDG,yEAhBc;ILssCb;EACF;EKprCA;IEtDF;MFuDG,mDAAA;ILurCC;EACF;AACF;AKrrCE;EE3DF;IF4DG,aAAA;ELwrCD;AACF;AK1sCE;EE3CF;IF4CG,aAAA;EL6sCD;AACF;AK1sCC;EAEC;IElDF;MFmDG,wEAhBc;IL4tCb;EACF;EK1sCA;IEtDF;MFuDG,oDAAA;IL6sCC;EACF;AACF;AK3sCE;EE3DF;IF4DG,cAAA;EL8sCD;AACF;AKhuCE;EE3CF;IF4CG,eAAA;ELmuCD;AACF;AKhuCC;EAEC;IElDF;MFmDG,0EAhBc;ILkvCb;EACF;EKhuCA;IEtDF;MFuDG,mDAAA;ILmuCC;EACF;AACF;AKjuCE;EE3DF;IF4DG,eAAA;ELouCD;AACF;AO3xCI;EAEI,gBAAA;EACA,gBAAA;EACA,WAAA;EACA,2CAAA;AP4xCR;AK5vCE;EErCE;IFsCD,mBAAA;EL+vCD;AACF;AK5vCC;EAEC;IE5CE;MF6CD,2EAhBc;IL8wCb;EACF;EK5vCA;IEhDE;MFiDD,uDAAA;IL+vCC;EACF;AACF;AK7vCE;EErDE;IFsDD,kBAAA;ELgwCD;AACF;AOjzCQ;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,sBAAA;APmzCZ;AOhzCI;EACI,WAAA;EACA,WAAA;EACA,WAAA;APkzCR;;AO9yCA;EACI,kBAAA;EAKA,sBAAA;EACA,qBAAA;EACA,kBAAA;EAEA,gBAAA;EACA,qDAAA;AP4yCJ;AKzyCE;EEdF;IFeG,cAAA;EL4yCD;AACF;AKzyCC;EAEC;IErBF;MFsBG,qEAhBc;IL2zCb;EACF;EKzyCA;IEzBF;MF0BG,gDAAA;IL4yCC;EACF;AACF;AK1yCE;EE9BF;IF+BG,UAAA;EL6yCD;AACF;AK/zCE;EEdF;IFeG,gBAAA;ELk0CD;AACF;AK/zCC;EAEC;IErBF;MFsBG,0EAhBc;ILi1Cb;EACF;EK/zCA;IEzBF;MF0BG,mDAAA;ILk0CC;EACF;AACF;AKh0CE;EE9BF;IF+BG,cAAA;ELm0CD;AACF;AKr1CE;EEdF;IFeG,eAAA;ELw1CD;AACF;AKr1CC;EAEC;IErBF;MFsBG,yEAhBc;ILu2Cb;EACF;EKr1CA;IEzBF;MF0BG,sDAAA;ILw1CC;EACF;AACF;AKt1CE;EE9BF;IF+BG,gBAAA;ELy1CD;AACF;AK32CE;EEdF;IFeG,gBAAA;EL82CD;AACF;AK32CC;EAEC;IErBF;MFsBG,0EAhBc;IL63Cb;EACF;EK32CA;IEzBF;MF0BG,uDAAA;IL82CC;EACF;AACF;AK52CE;EE9BF;IF+BG,iBAAA;EL+2CD;AACF;AKj4CE;EEdF;IFeG,oBAAA;ELo4CD;AACF;AKj4CC;EAEC;IErBF;MFsBG,4EAhBc;ILm5Cb;EACF;EKj4CA;IEzBF;MF0BG,wDAAA;ILo4CC;EACF;AACF;AKl4CE;EE9BF;IF+BG,kBAAA;ELq4CD;AACF;AOx5CI;EACI,qBAAA;EACA,iCAAA;AP05CR;;AOr5CI;EAEK,WAAA;APu5CT;AK/5CE;EEME;IFLD,gBAAA;ELk6CD;AACF;AK/5CC;EAEC;IEDE;MFED,0EAhBc;ILi7Cb;EACF;EK/5CA;IELE;MFMD,oDAAA;ILk6CC;EACF;AACF;AKh6CE;EEVE;IFWD,gBAAA;ELm6CD;AACF;;AOz6CA;EACI,kBAAA;EACA,UAAA;AP46CJ;AK17CE;EEYF;IFXG,eAAA;EL67CD;AACF;AK17CC;EAEC;IEKF;MFJG,wEAbe;ILy8Cd;EACF;EK17CA;IECF;MFAG,kDAAA;IL67CC;EACF;AACF;AK37CE;EEJF;IFKG,WAAA;EL87CD;AACF;AOh8CI;EAJJ;IAKQ,aAAA;EPm8CN;AACF;;AOj8CA;EACI,kBAAA;EACA,UAAA;APo8CJ;AK19CE;EEoBF;IFnBG,gBAAA;EL69CD;AACF;AK19CC;EAEC;IEaF;MFZG,yEAbe;ILy+Cd;EACF;EK19CA;IESF;MFRG,mDAAA;IL69CC;EACF;AACF;AK39CE;EEIF;IFHG,YAAA;EL89CD;AACF;AOx9CI;EAJJ;IAKQ,aAAA;EP29CN;AACF;;AKr/CE;EEgCF;IF/BG,kBAAA;ELy/CD;AACF;AKt/CC;EAEC;IEyBF;MFxBG,2EAhBc;ILwgDb;EACF;EKt/CA;IEqBF;MFpBG,uDAAA;ILy/CC;EACF;AACF;AKv/CE;EEgBF;IFfG,mBAAA;EL0/CD;AACF;AOz+CI;EACI,aAAA;EACA,cAAA;AP2+CR;;AOx+CA;EAGI,cAAA;EACA,kBAAA;APy+CJ;AKrhDE;EEwCF;IFvCG,iBAAA;ELwhDD;AACF;AKrhDC;EAEC;IEiCF;MFhCG,6EAhBc;ILuiDb;EACF;EKrhDA;IE6BF;MF5BG,uDAAA;ILwhDC;EACF;AACF;AKthDE;EEwBF;IFvBG,gBAAA;ELyhDD;AACF;AK3iDE;EEwCF;IFvCG,wBAAA;EL8iDD;AACF;AK3iDC;EAEC;IEiCF;MFhCG,+EAhBc;IL6jDb;EACF;EK3iDA;IE6BF;MF5BG,2DAAA;IL8iDC;EACF;AACF;AK5iDE;EEwBF;IFvBG,qBAAA;EL+iDD;AACF;AOphDI;EAEI,gBAAA;APqhDR;AKpkDE;EE6CE;IF5CD,wBAAA;ELukDD;AACF;AKpkDC;EAEC;IEsCE;MFrCD,kFAhBc;ILslDb;EACF;EKpkDA;IEkCE;MFjCD,6DAAA;ILukDC;EACF;AACF;AKrkDE;EE6BE;IF5BD,wBAAA;ELwkDD;AACF;AOxiDI;EAEI,gBAAA;EACA,gBAAA;APyiDR;AK9lDE;EEkDE;IFjDD,mBAAA;ELimDD;AACF;AK9lDC;EAEC;IE2CE;MF1CD,0EAhBc;ILgnDb;EACF;EK9lDA;IEuCE;MFtCD,sDAAA;ILimDC;EACF;AACF;AK/lDE;EEkCE;IFjCD,iBAAA;ELkmDD;AACF;;AO5jDA;EACI,aAAA;EACA,uBAAA;AP+jDJ;AKznDE;EEwDF;IFvDG,oBAAA;EL4nDD;AACF;AKznDC;EAEC;IEiDF;MFhDG,6EAhBc;IL2oDb;EACF;EKznDA;IE6CF;MF5CG,0DAAA;IL4nDC;EACF;AACF;AK1nDE;EEwCF;IFvCG,sBAAA;EL6nDD;AACF;AK/oDE;EEwDF;IFvDG,aAAA;ELkpDD;AACF;AK/oDC;EAEC;IEiDF;MFhDG,oEAhBc;ILiqDb;EACF;EK/oDA;IE6CF;MF5CG,gDAAA;ILkpDC;EACF;AACF;AKhpDE;EEwCF;IFvCG,WAAA;ELmpDD;AACF;AOxmDI;EALJ;IAMQ,sBAAA;EP2mDN;AACF;AK1qDE;EEwDF;IFvDG,oBAAA;EL6qDD;AACF;AK1qDC;EAEC;IEiDF;MFhDG,4EAhBc;IL4rDb;EACF;EK1qDA;IE6CF;MF5CG,yDAAA;IL6qDC;EACF;AACF;AK3qDE;EEwCF;IFvCG,qBAAA;EL8qDD;AACF;AO9nDI;EAGI,kBAAA;AP8nDR;AKnsDE;EEkEE;IFjED,iBAAA;ELssDD;AACF;AKnsDC;EAEC;IE2DE;MF1DD,0EAhBc;ILqtDb;EACF;EKnsDA;IEuDE;MFtDD,qDAAA;ILssDC;EACF;AACF;AKpsDE;EEkDE;IFjDD,cAAA;ELusDD;AACF;AKztDE;EEkEE;IFjED,qBAAA;EL4tDD;AACF;AKztDC;EAEC;IE2DE;MF1DD,6EAhBc;IL2uDb;EACF;EKztDA;IEuDE;MFtDD,yDAAA;IL4tDC;EACF;AACF;AK1tDE;EEkDE;IFjDD,oBAAA;EL6tDD;AACF;AOvqDI;EAEI,gBAAA;APwqDR;AKlvDE;EEwEE;IFvED,kBAAA;ELqvDD;AACF;AKlvDC;EAEC;IEiEE;MFhED,2EAhBc;ILowDb;EACF;EKlvDA;IE6DE;MF5DD,wDAAA;ILqvDC;EACF;AACF;AKnvDE;EEwDE;IFvDD,mBAAA;ELsvDD;AACF;AO5rDQ;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EAEA,gCAAA;AP6rDZ;AKhxDE;EE4EM;IF3EL,YAAA;ELmxDD;AACF;AKhxDC;EAEC;IEqEM;MFpEL,uEAhBc;ILkyDb;EACF;EKhxDA;IEiEM;MFhEL,sDAAA;ILmxDC;EACF;AACF;AKjxDE;EE4DM;IF3DL,gBAAA;ELoxDD;AACF;AKtyDE;EEuFE;IFtFD,iBAAA;ELyyDD;AACF;AKtyDC;EAEC;IEgFE;MF/ED,6EAhBc;ILwzDb;EACF;EKtyDA;IE4EE;MF3ED,uDAAA;ILyyDC;EACF;AACF;AKvyDE;EEuEE;IFtED,gBAAA;EL0yDD;AACF;AOjuDI;EAGI,gBAAA;APiuDR;AK/zDE;EE2FE;IF1FD,oBAAA;ELk0DD;AACF;AK/zDC;EAEC;IEoFE;MFnFD,8EAhBc;ILi1Db;EACF;EK/zDA;IEgFE;MF/ED,yDAAA;ILk0DC;EACF;AACF;AKh0DE;EE2EE;IF1ED,oBAAA;ELm0DD;AACF;AKr1DE;EE2FE;I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ILuzEb;EACF;EKryEA;IEiRE;MFhRD,wDAAA;ILwyEC;EACF;AACF;AKtyEE;EE4QE;IF3QD,iBAAA;ELyyED;AACF;AK3zEE;EE4RE;IF3RD,gBAAA;EL8zED;AACF;AK3zEC;EAEC;IEqRE;MFpRD,2EAhBc;IL60Eb;EACF;EK3zEA;IEiRE;MFhRD,uDAAA;IL8zEC;EACF;AACF;AK5zEE;EE4QE;IF3QD,iBAAA;EL+zED;AACF;AOhjEI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;APkjER;AKt1EE;EEiSE;IFhSD,oBAAA;ELy1ED;AACF;AKt1EC;EAEC;IE0RE;MFzRD,8EAhBc;ILw2Eb;EACF;EKt1EA;IEsRE;MFrRD,2DAAA;ILy1EC;EACF;AACF;AKv1EE;EEiRE;IFhRD,qBAAA;EL01ED;AACF;AK52EE;EEiSE;IFhSD,qBAAA;EL+2ED;AACF;AK52EC;EAEC;IE0RE;MFzRD,6EAhBc;IL83Eb;EACF;EK52EA;IEsRE;MFrRD,0DAAA;IL+2EC;EACF;AACF;AK72EE;EEiRE;IFhRD,sBAAA;ELg3ED;AACF;AO3lEQ;EANJ;IAOQ,eAAA;EP8lEV;AACF;AO3lEI;EACI,eAAA;EACA,gBAAA;AP6lER;AK34EE;EEiTE;IFhTD,cAAA;EL84ED;AACF;AK34EC;EAEC;IE0SE;MFzSD,wEAhBc;IL65Eb;EACF;EK34EA;IEsSE;MFrSD,gDAAA;IL84EC;EACF;AACF;AK54EE;EEiSE;IFhSD,cAAA;EL+4ED;AACF;AKj6EE;EEiTE;IFhTD,gBAAA;ELo6ED;AACF;AKj6EC;EAEC;IE0SE;MFzSD,2EAhBc;ILm7Eb;EACF;EKj6EA;IEsSE;MFrSD,uDAAA;ILo6EC;EACF;AACF;AKl6EE;EEiSE;IFhSD,iBAAA;ELq6ED;AACF;AOjoEI;EACI,mBAAA;EACA,kBAAA;APmoER;AOjoEQ;EAJJ;IAKQ,eAAA;IACA,cAAA;EPooEV;AACF;AOjoEI;EACI,kBAAA;APmoER;AOloEQ;EAFJ;IAGQ,aAAA;EPqoEV;AACF;AOloEI;EACI,WAAA;EACA,UAAA;EACA,UAAA;EACA,kBAAA;EACA,8FAAA;APooER;AOloEQ;EAPJ;IAQQ,WAAA;IACA,UAAA;EPqoEV;AACF;AOpoEQ;EAXJ;IAYQ,UAAA;IACA,SAAA;EPuoEV;AACF;;AOpoEA;EACI,aAAA;EACA,eAAA;EACA,2BAAA;EACA,kBAAA;APuoEJ;AKn+EE;EEwVF;IFvVG,mBAAA;ELs+ED;AACF;AKn+EC;EAEC;IEiVF;MFhVG,6EAhBc;ILq/Eb;EACF;EKn+EA;IE6UF;MF5UG,8DAAA;ILs+EC;EACF;AACF;AKp+EE;EEwUF;IFvUG,wBAAA;ELu+ED;AACF;AKz/EE;EEwVF;IFvVG,qBAAA;EL4/ED;AACF;AKz/EC;EAEC;IEiVF;MFhVG,8EAhBc;IL2gFb;EACF;EKz/EA;IE6UF;MF5UG,sDAAA;IL4/EC;EACF;AACF;AK1/EE;EEwUF;IFvUG,qBAAA;EL6/ED;AACF;AK/gFE;EEwVF;IFvVG,sBAAA;ELkhFD;AACF;AK/gFC;EAEC;IEiVF;MFhVG,+EAhBc;ILiiFb;EACF;EK/gFA;IE6UF;MF5UG,4DAAA;ILkhFC;EACF;AACF;AKhhFE;EEwUF;IFvUG,uBAAA;ELmhFD;AACF;AOrsEI;EACI,mBAAA;EAEA,gBAAA;EACA,gBAAA;APssER;AK1iFE;EEgWE;IF/VD,kBAAA;EL6iFD;AACF;AK1iFC;EAEC;IEyVE;MFxVD,2EAhBc;IL4jFb;EACF;EK1iFA;IEqVE;MFpVD,wDAAA;IL6iFC;EACF;AACF;AK3iFE;EEgVE;IF/UD,mBAAA;EL8iFD;AACF;AKhkFE;EEgWE;IF/VD,iBAAA;ELmkFD;AACF;AKhkFC;EAEC;IEyVE;MFxVD,6EAhBc;ILklFb;EACF;EKhkFA;IEqVE;MFpVD,uDAAA;ILmkFC;EACF;AACF;AKjkFE;EEgVE;IF/UD,gBAAA;ELokFD;AACF;AOhvEQ;EACI,WAAA;EACA,kBAAA;EAEA,WAAA;EACA,gCAAA;EACA,WAAA;EACA,SAAA;APivEZ;AK9lFE;EEsWM;IFrWL,eAAA;ELimFD;AACF;AK9lFC;EAEC;IE+VM;MF9VL,yEAhBc;ILgnFb;EACF;EK9lFA;IE2VM;MF1VL,sDAAA;ILimFC;EACF;AACF;AK/lFE;EEsVM;IFrVL,gBAAA;ELkmFD;AACF;AKpnFE;EEgWE;IF/VD,mBAAA;ELunFD;AACF;AKpnFC;EAEC;IEyVE;MFxVD,6EAhBc;ILsoFb;EACF;EKpnFA;IEqVE;MFpVD,8DAAA;ILunFC;EACF;AACF;AKrnFE;EEgVE;IF/UD,wBAAA;ELwnFD;AACF;AO3xEQ;EAGI;IAEI,UAAA;EP0xEd;AACF;AK/oFE;EEkXU;IFjXT,aAAA;ELkpFD;AACF;AK/oFC;EAEC;IE2WU;MF1WT,sEAhBc;ILiqFb;EACF;EK/oFA;IEuWU;MFtWT,mDAAA;ILkpFC;EACF;AACF;AKhpFE;EEkWU;IFjWT,cAAA;ELmpFD;AACF;;AOzyEA;EACQ,gCAAA;EACA,aAAA;AP4yER;AO3yEQ;EAHR;IAIY,aAAA;EP8yEV;AACF;AO7yEE;EACU,iBAAA;EACA,UAAA;EACA,gBAAA;EACA,kBAAA;AP+yEZ;AKrrFE;EEkYA;IFjYC,sBAAA;ELwrFD;AACF;AKrrFC;EAEC;IE2XA;MF1XC,8EAhBc;ILusFb;EACF;EKrrFA;IEuXA;MFtXC,yDAAA;ILwrFC;EACF;AACF;AKtrFE;EEkXA;IFjXC,mBAAA;ELyrFD;AACF;AK3sFE;EEkYA;IFjYC,0BAAA;EL8sFD;AACF;AK3sFC;EAEC;IE2XA;MF1XC,mEAhBc;IL6tFb;EACF;EK3sFA;IEuXA;MFtXC,4DAAA;IL8sFC;EACF;AACF;AK5sFE;EEkXA;IFjXC,sBAAA;EL+sFD;AACF;AOx1EY;EACA,WAAA;EAGA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,kBAAA;EACA,yBAAA;APw1EZ;AKzuFE;EEyYU;IFxYT,iBAAA;EL4uFD;AACF;AKzuFC;EAEC;IEkYU;MFjYT,0EAhBc;IL2vFb;EACF;EKzuFA;IE8XU;MF7XT,qDAAA;IL4uFC;EACF;AACF;AK1uFE;EEyXU;IFxXT,cAAA;EL6uFD;AACF;AK/vFE;EEyYU;IFxYT,kBAAA;ELkwFD;AACF;AK/vFC;EAEC;IEkYU;MFjYT,2EAhBc;ILixFb;EACF;EK/vFA;IE8XU;MF7XT,sDAAA;ILkwFC;EACF;AACF;AKhwFE;EEyXU;IFxXT,eAAA;ELmwFD;AACF;AOn4EY;EATA;IAUI,aAAA;EPs4Ed;AACF;AOl4EE;EACU,WAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;APo4EZ;AKhyFE;EEwZA;IFvZC,mBAAA;ELmyFD;AACF;AKhyFC;EAEC;IEiZA;MFhZC,4EAhBc;ILkzFb;EACF;EKhyFA;IE6YA;MF5YC,4DAAA;ILmyFC;EACF;AACF;AKjyFE;EEwYA;IFvYC,uBAAA;ELoyFD;AACF;AKtzFE;EEwZA;IFvZC,qBAAA;ELyzFD;AACF;AKtzFC;EAEC;IEiZA;MFhZC,8EAhBc;ILw0Fb;EACF;EKtzFA;IE6YA;MF5YC,sDAAA;ILyzFC;EACF;AACF;AKvzFE;EEwYA;IFvYC,qBAAA;EL0zFD;AACF;AOz6EY;EAXV;IAYc,YAAA;EP46Ed;AACF;AOz6EE;EACU,SAAA;EACA,aAAA;EACA,sBAAA;AP26EZ;AKt1FE;EEwaA;IFvaC,oBAAA;ELy1FD;AACF;AKt1FC;EAEC;IEiaA;MFhaC,4EAhBc;ILw2Fb;EACF;EKt1FA;IE6ZA;MF5ZC,uDAAA;ILy1FC;EACF;AACF;AKv1FE;EEwZA;IFvZC,oBAAA;EL01FD;AACF;AK52FE;EEwaA;IFvaC,qBAAA;EL+2FD;AACF;AK52FC;EAEC;IEiaA;MFhaC,uFAhBc;IL83Fb;EACF;EK52FA;IE6ZA;MF5ZC,yEAAA;IL+2FC;EACF;AACF;AK72FE;EEwZA;IFvZC,6BAAA;ELg3FD;AACF;AOp9EY;EANV;IAOc,mBAAA;EPu9Ed;AACF;AOp9EE;EACU,kBAAA;APs9EZ;AOn9EgB;EACI,WAAA;EACA,2BAAA;APq9EpB;AOp9EoB;EACI,UAAA;EACA,0BAAA;APs9ExB;AOn9EgB;EACI,UAAA;APq9EpB;AOh9EE;EACU,cAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,gDAAA;EAiBA,wBAAA;APk8EZ;AOl9EY;EACI,WAAA;EACA,WAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,4BAAA;EACA,UAAA;EACA,kDAAA;APo9EhB;AOn9EgB;EAXJ;IAYQ,aAAA;EPs9ElB;AACF;AOh9EE;EACU,UAAA;EACA,eAAA;EACA,gBAAA;EACA,6BAAA;APk9EZ;;AO78EA;EACI,aAAA;APg9EJ;AO/8EI;EAFJ;IAGQ,sBAAA;IACA,uBAAA;EPk9EN;AACF;;AK97FE;EE+eF;IF9eG,iBAAA;ELk8FD;AACF;AK/7FC;EAEC;IEweF;MFveG,6EAhBc;ILi9Fb;EACF;EK/7FA;IEoeF;MFneG,sDAAA;ILk8FC;EACF;AACF;AKh8FE;EE+dF;IF9dG,gBAAA;ELm8FD;AACF;AKr9FE;EE+eF;IF9eG,qBAAA;ELw9FD;AACF;AKr9FC;EAEC;IEweF;MFveG,8EAhBc;ILu+Fb;EACF;EKr9FA;IEoeF;MFneG,sDAAA;ILw9FC;EACF;AACF;AKt9FE;EE+dF;IF9dG,qBAAA;ELy9FD;AACF;AOt/EE;EACU,WAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;APw/EZ;AKj/FE;EEqfA;IFpfC,wBAAA;ELo/FD;AACF;AKj/FC;EAEC;IE8eA;MF7eC,kFAhBc;ILmgGb;EACF;EKj/FA;IE0eA;MFzeC,4DAAA;ILo/FC;EACF;AACF;AKl/FE;EEqeA;IFpeC,wBAAA;ELq/FD;AACF;;AKvgGE;EEmgBF;IFlgBG,kBAAA;EL2gGD;AACF;AKxgGC;EAEC;IE4fF;MF3fG,2EAhBc;IL0hGb;EACF;EKxgGA;IEwfF;MFvfG,sDAAA;IL2gGC;EACF;AACF;AKzgGE;EEmfF;IFlfG,mBAAA;EL4gGD;AACF;AK9hGE;EEmgBF;IFlgBG,uBAAA;ELiiGD;AACF;AK9hGC;EAEC;IE4fF;MF3fG,+EAhBc;ILgjGb;EACF;EK9hGA;IEwfF;MFvfG,0DAAA;ILiiGC;EACF;AACF;AK/hGE;EEmfF;IFlfG,sBAAA;ELkiGD;AACF;AO3iFI;EACI,aAAA;AP6iFR;AO5iFQ;EAFJ;IAGQ,sBAAA;EP+iFV;AACF;;AO3iFI;EADJ;IAEQ,cAAA;EP+iFN;AACF;AO9iFI;EACI,uBAAA;EACA,4BAAA;APgjFR;AO/iFQ;EACI,oBAAA;APijFZ;AO7iFI;EACI,mBAAA;AP+iFR;AK5kGE;EE4hBE;IF3hBD,gBAAA;EL+kGD;AACF;AK5kGC;EAEC;IEqhBE;MFphBD,4EAhBc;IL8lGb;EACF;EK5kGA;IEihBE;MFhhBD,wDAAA;IL+kGC;EACF;AACF;AK7kGE;EE4gBE;IF3gBD,iBAAA;ELglGD;AACF;AKlmGE;EE4hBE;IF3hBD,iBAAA;ELqmGD;AACF;AKlmGC;EAEC;IEqhBE;MFphBD,4EAhBc;ILonGb;EACF;EKlmGA;IEihBE;MFhhBD,uDAAA;ILqmGC;EACF;AACF;AKnmGE;EE4gBE;IF3gBD,iBAAA;ELsmGD;AACF;AKxnGE;EEkiBE;IFjiBD,iBAAA;EL2nGD;AACF;AKxnGC;EAEC;IE2hBE;MF1hBD,2DAhBc;IL0oGb;EACF;EKxnGA;IEuhBE;MFthBD,sDAAA;IL2nGC;EACF;AACF;AKznGE;EEkhBE;IFjhBD,eAAA;EL4nGD;AACF;AK9oGE;EEsiBE;IFriBD,sBAAA;ELipGD;AACF;AK9oGC;EAEC;IE+hBE;MF9hBD,iFAhBc;ILgqGb;EACF;EK9oGA;IE2hBE;MF1hBD,0DAAA;ILipGC;EACF;AACF;AK/oGE;EEshBE;IFrhBD,sBAAA;ELkpGD;AACF;AKpqGE;EEsiBE;IFriBD,sBAAA;ELuqGD;AACF;AKpqGC;EAEC;IE+hBE;MF9hBD,gFAhBc;ILsrGb;EACF;EKpqGA;IE2hBE;MF1hBD,6DAAA;ILuqGC;EACF;AACF;AKrqGE;EEshBE;IFrhBD,uBAAA;ELwqGD;AACF;AK1rGE;EEsiBE;IFriBD,gBAAA;EL6rGD;AACF;AK1rGC;EAEC;IE+hBE;MF9hBD,2EAhBc;IL4sGb;EACF;EK1rGA;IE2hBE;MF1hBD,sDAAA;IL6rGC;EACF;AACF;AK3rGE;EEshBE;IFrhBD,gBAAA;EL8rGD;AACF;AKhtGE;EEsiBE;IFriBD,eAAA;ELmtGD;AACF;AKhtGC;EAEC;IE+hBE;MF9hBD,oEAhBc;ILkuGb;EACF;EKhtGA;IE2hBE;MF1hBD,gDAAA;ILmtGC;EACF;AACF;AKjtGE;EEshBE;IFrhBD,YAAA;ELotGD;AACF;AKtuGE;EE6iBE;IF5iBD,gBAAA;ELyuGD;AACF;AKtuGC;EAEC;IEsiBE;MFriBD,2EAhBc;ILwvGb;EACF;EKtuGA;IEkiBE;MFjiBD,sDAAA;ILyuGC;EACF;AACF;AKvuGE;EE6hBE;IF5hBD,gBAAA;EL0uGD;AACF;AK5vGE;EE6iBE;IF5iBD,iBAAA;EL+vGD;AACF;AK5vGC;EAEC;IEsiBE;MFriBD,4EAhBc;IL8wGb;EACF;EK5vGA;IEkiBE;MFjiBD,uDAAA;IL+vGC;EACF;AACF;AK7vGE;EE6hBE;IF5hBD,iBAAA;ELgwGD;AACF;;AKlxGE;EEkjBF;IFjjBG,sBAAA;ELsxGD;AACF;AKnxGC;EAEC;IE2iBF;MF1iBG,6EAhBc;ILqyGb;EACF;EKnxGA;IEuiBF;MFtiBG,yDAAA;ILsxGC;EACF;AACF;AKpxGE;EEkiBF;IFjiBG,mBAAA;ELuxGD;AACF;AOrvFI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,YAAA;APuvFR;AK/yGE;EEojBE;IFnjBD,wBAAA;ELkzGD;AACF;AK/yGC;EAEC;IE6iBE;MF5iBD,gFAhBc;ILi0Gb;EACF;EK/yGA;IEyiBE;MFxiBD,4DAAA;ILkzGC;EACF;AACF;AKhzGE;EEoiBE;IFniBD,sBAAA;ELmzGD;AACF;AOzwFI;EAII,eAAA;EACA,gBAAA;EACA,gBAAA;APwwFR;AK10GE;EE4jBE;IF3jBD,sBAAA;EL60GD;AACF;AK10GC;EAEC;IEqjBE;MFpjBD,+EAhBc;IL41Gb;EACF;EK10GA;IEijBE;MFhjBD,0DAAA;IL60GC;EACF;AACF;AK30GE;EE4iBE;IF3iBD,qBAAA;EL80GD;AACF;AKh2GE;EE4jBE;IF3jBD,wBAAA;ELm2GD;AACF;AKh2GC;EAEC;IEqjBE;MFpjBD,kFAhBc;ILk3Gb;EACF;EKh2GA;IEijBE;MFhjBD,6DAAA;ILm2GC;EACF;AACF;AKj2GE;EE4iBE;IF3iBD,wBAAA;ELo2GD;AACF;AKt3GE;EE4jBE;IF3jBD,gBAAA;ELy3GD;AACF;AKt3GC;EAEC;IEqjBE;MFpjBD,0EAhBc;ILw4Gb;EACF;EKt3GA;IEijBE;MFhjBD,mDAAA;ILy3GC;EACF;AACF;AKv3GE;EE4iBE;IF3iBD,cAAA;EL03GD;AACF;AOx0FQ;EARJ;IASQ,iBAAA;IACA,kBAAA;EP20FV;AACF;AOz0FQ;EAbJ;IAeQ,cAAA;IACA,eAAA;EP20FV;AACF;AKx5GE;EE4jBE;IF3jBD,oBAAA;EL25GD;AACF;AKx5GC;EAEC;IEqjBE;MFpjBD,4EAhBc;IL06Gb;EACF;EKx5GA;IEijBE;MFhjBD,yDAAA;IL25GC;EACF;AACF;AKz5GE;EE4iBE;IF3iBD,qBAAA;EL45GD;AACF;AK96GE;EEglBE;IF/kBD,qBAAA;ELi7GD;AACF;AK96GC;EAEC;IEykBE;MFxkBD,8EAhBc;ILg8Gb;EACF;EK96GA;IEqkBE;MFpkBD,yDAAA;ILi7GC;EACF;AACF;AK/6GE;EEgkBE;IF/jBD,oBAAA;ELk7GD;AACF;AOj3FQ;EAHJ;IAIQ,iBAAA;EPo3FV;AACF;AKz8GE;EEglBE;IF/kBD,mBAAA;EL48GD;AACF;AKz8GC;EAEC;IEykBE;MFxkBD,2EAhBc;IL29Gb;EACF;EKz8GA;IEqkBE;MFpkBD,wDAAA;IL48GC;EACF;AACF;AK18GE;EEgkBE;IF/jBD,oBAAA;EL68GD;AACF;;AK/9GE;EE8lBF;IF7lBG,yBAAA;ELm+GD;AACF;AKh+GC;EAEC;IEulBF;MFtlBG,kFAhBc;ILk/Gb;EACF;EKh+GA;IEmlBF;MFllBG,4DAAA;ILm+GC;EACF;AACF;AKj+GE;EE8kBF;IF7kBG,sBAAA;ELo+GD;AACF;AOn5FI;EAEI,kBAAA;EACA,gBAAA;EACA,gBAAA;APo5FR;AK3/GE;EEmmBE;IFlmBD,kBAAA;EL8/GD;AACF;AK3/GC;EAEC;IE4lBE;MF3lBD,4EAhBc;IL6gHb;EACF;EK3/GA;IEwlBE;MFvlBD,0DAAA;IL8/GC;EACF;AACF;AK5/GE;EEmlBE;IFllBD,oBAAA;EL+/GD;AACF;AKjhHE;EEmmBE;IFlmBD,uBAAA;ELohHD;AACF;AKjhHC;EAEC;IE4lBE;MF3lBD,8EAhBc;ILmiHb;EACF;EKjhHA;IEwlBE;MFvlBD,0DAAA;ILohHC;EACF;AACF;AKlhHE;EEmlBE;IFllBD,qBAAA;ELqhHD;AACF;AO57FI;EACI,aAAA;EACA,eAAA;EACA,uBAAA;AP87FR;AK5iHE;EE2mBE;IF1mBD,cAAA;EL+iHD;AACF;AK5iHC;EAEC;IEomBE;MFnmBD,qEAhBc;IL8jHb;EACF;EK5iHA;IEgmBE;MF/lBD,iDAAA;IL+iHC;EACF;AACF;AK7iHE;EE2lBE;IF1lBD,WAAA;ELgjHD;AACF;AOj9FQ;EANJ;IAOQ,2BAAA;EPo9FV;AACF;AOj9FI;EAGI,kBAAA;APi9FR;AK1kHE;EEsnBE;IFrnBD,eAAA;EL6kHD;AACF;AK1kHC;EAEC;IE+mBE;MF9mBD,2EAhBc;IL4lHb;EACF;EK1kHA;IE2mBE;MF1mBD,qDAAA;IL6kHC;EACF;AACF;AK3kHE;EEsmBE;IFrmBD,gBAAA;EL8kHD;AACF;AKhmHE;EEsnBE;IFrnBD,qBAAA;ELmmHD;AACF;AKhmHC;EAEC;IE+mBE;MF9mBD,8EAhBc;ILknHb;EACF;EKhmHA;IE2mBE;MF1mBD,2DAAA;ILmmHC;EACF;AACF;AKjmHE;EEsmBE;IFrmBD,sBAAA;ELomHD;AACF;AO3/FQ;EALJ;IAMQ,WAAA;EP8/FV;AACF;AO3/FI;EAEI,kBAAA;EACA,MAAA;EACA,OAAA;AP4/FR;AKhoHE;EEgoBE;IF/nBD,eAAA;ELmoHD;AACF;AKhoHC;EAEC;IEynBE;MFxnBD,yEAhBc;ILkpHb;EACF;EKhoHA;IEqnBE;MFpnBD,sDAAA;ILmoHC;EACF;AACF;AKjoHE;EEgnBE;IF/mBD,gBAAA;ELooHD;AACF;AO/gGI;EAEI,gBAAA;EACA,gBAAA;EACA,mBAAA;APghGR;AK3pHE;EEuoBE;IFtoBD,iBAAA;EL8pHD;AACF;AK3pHC;EAEC;IEgoBE;MF/nBD,yEAhBc;IL6qHb;EACF;EK3pHA;IE4nBE;MF3nBD,sDAAA;IL8pHC;EACF;AACF;AK5pHE;EEunBE;IFtnBD,kBAAA;EL+pHD;AACF;AOniGI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;APqiGR;AOliGI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;APoiGR;AOliGY;EACI,2BAAA;APoiGhB;AO/hGI;EACI,oBAAA;EACA,+BAAA;APiiGR;;AO3hGA;EAGI,gCAAA;EACA,gBAAA;AP4hGJ;AK1sHE;EE0qBF;IFzqBG,iBAAA;EL6sHD;AACF;AK1sHC;EAEC;IEmqBF;MFlqBG,qDAhBc;IL4tHb;EACF;EK1sHA;IE+pBF;MF9pBG,sDAAA;IL6sHC;EACF;AACF;AK3sHE;EE0pBF;IFzpBG,mBAAA;EL8sHD;AACF;AKhuHE;EE0qBF;IFzqBG,wBAAA;ELmuHD;AACF;AKhuHC;EAEC;IEmqBF;MFlqBG,iFAhBc;ILkvHb;EACF;EKhuHA;IE+pBF;MF9pBG,0DAAA;ILmuHC;EACF;AACF;AKjuHE;EE0pBF;IFzpBG,sBAAA;ELouHD;AACF;AOvkGI;EACI,kBAAA;APykGR;AOxkGQ;EACI,WAAA;EAGA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,kBAAA;EACA,yBAAA;APwkGZ;AKjwHE;EEirBM;IFhrBL,iBAAA;ELowHD;AACF;AKjwHC;EAEC;IE0qBM;MFzqBL,0EAhBc;ILmxHb;EACF;EKjwHA;IEsqBM;MFrqBL,qDAAA;ILowHC;EACF;AACF;AKlwHE;EEiqBM;IFhqBL,cAAA;ELqwHD;AACF;AKvxHE;EEirBM;IFhrBL,kBAAA;EL0xHD;AACF;AKvxHC;EAEC;IE0qBM;MFzqBL,2EAhBc;ILyyHb;EACF;EKvxHA;IEsqBM;MFrqBL,sDAAA;IL0xHC;EACF;AACF;AKxxHE;EEiqBM;IFhqBL,eAAA;EL2xHD;AACF;AOnnGY;EATJ;IAUQ,aAAA;EPsnGd;AACF;AOlnGI;EACI,UAAA;APonGR;AOjnGI;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;APmnGR;AK1zHE;EE0sBE;IFzsBD,eAAA;EL6zHD;AACF;AK1zHC;EAEC;IEmsBE;MFlsBD,yEAhBc;IL40Hb;EACF;EK1zHA;IE+rBE;MF9rBD,sDAAA;IL6zHC;EACF;AACF;AK3zHE;EE0rBE;IFzrBD,gBAAA;EL8zHD;AACF;AKh1HE;EE0sBE;IFzsBD,sBAAA;ELm1HD;AACF;AKh1HC;EAEC;IEmsBE;MFlsBD,+EAhBc;ILk2Hb;EACF;EKh1HA;IE+rBE;MF9rBD,yDAAA;ILm1HC;EACF;AACF;AKj1HE;EE0rBE;IFzrBD,sBAAA;ELo1HD;AACF;AOvpGI;EACI,WAAA;EAEA,gBAAA;EACA,gBAAA;EACA,kBAAA;APwpGR;AK52HE;EE+sBE;IF9sBD,iBAAA;EL+2HD;AACF;AK52HC;EAEC;IEwsBE;MFvsBD,2EAhBc;IL83Hb;EACF;EK52HA;IEosBE;MFnsBD,0DAAA;IL+2HC;EACF;AACF;AK72HE;EE+rBE;IF9rBD,oBAAA;ELg3HD;AACF;AKl4HE;EE+sBE;IF9sBD,iBAAA;ELq4HD;AACF;AKl4HC;EAEC;IEwsBE;MFvsBD,4EAhBc;ILo5Hb;EACF;EKl4HA;IEosBE;MFnsBD,sDAAA;ILq4HC;EACF;AACF;AKn4HE;EE+rBE;IF9rBD,eAAA;ELs4HD;AACF;AKx5HE;EE+sBE;IF9sBD,wBAAA;EL25HD;AACF;AKx5HC;EAEC;IEwsBE;MFvsBD,kFAhBc;IL06Hb;EACF;EKx5HA;IEosBE;MFnsBD,6DAAA;IL25HC;EACF;AACF;AKz5HE;EE+rBE;IF9rBD,wBAAA;EL45HD;AACF;AOrtGI;EACI,cAAA;EACA,gBAAA;EACA,gBAAA;APutGR;;AOntGA;EACI,UAAA;EACA,SAAA;EAEA,kBAAA;APqtGJ;AKz7HE;EEguBF;IF/tBG,eAAA;EL47HD;AACF;AKz7HC;EAEC;IEytBF;MFxtBG,+EAbe;ILw8Hd;EACF;EKz7HA;IEqtBF;MFptBG,oEAAA;IL47HC;EACF;AACF;AK17HE;EEgtBF;IF/sBG,uBAAA;EL67HD;AACF;AOzuGI;EANJ;IAOQ,aAAA;EP4uGN;AACF;AO3uGI;EACI,WAAA;EACA,kBAAA;EAEA,aAAA;EACA,WAAA;EAEA,sBAAA;AP2uGR;AK39HE;EEyuBE;IFxuBD,eAAA;EL89HD;AACF;AK39HC;EAEC;IEkuBE;MFjuBD,4EAbe;IL0+Hd;EACF;EK39HA;IE8tBE;MF7tBD,wDAAA;IL89HC;EACF;AACF;AK59HE;EEytBE;IFxtBD,gBAAA;EL+9HD;AACF;AKj/HE;EEyuBE;IFxuBD,cAAA;ELo/HD;AACF;AKj/HC;EAEC;IEkuBE;MFjuBD,8CAhBc;ILmgIb;EACF;EKj/HA;IE8tBE;MF7tBD,8CAAA;ILo/HC;EACF;AACF;AKl/HE;EEytBE;IFxtBD,WAAA;ELq/HD;AACF;AOrxGQ;EATJ;IAUQ,aAAA;EPwxGV;AACF;AOtxGI;EACI,WAAA;EACA,kBAAA;EAEA,aAAA;EACA,WAAA;EAEA,sBAAA;EACA,wBAAA;APsxGR;AKphIE;EEsvBE;IFrvBD,aAAA;ELuhID;AACF;AKphIC;EAEC;IE+uBE;MF9uBD,uEAbe;ILmiId;EACF;EKphIA;IE2uBE;MF1uBD,mDAAA;ILuhIC;EACF;AACF;AKrhIE;EEsuBE;IFruBD,cAAA;ELwhID;AACF;AK1iIE;EEsvBE;IFrvBD,eAAA;EL6iID;AACF;AK1iIC;EAEC;IE+uBE;MF9uBD,yEAhBc;IL4jIb;EACF;EK1iIA;IE2uBE;MF1uBD,sDAAA;IL6iIC;EACF;AACF;AK3iIE;EEsuBE;IFruBD,gBAAA;EL8iID;AACF;AOh0GQ;EAVJ;IAWQ,aAAA;EPm0GV;AACF;;AKrkIE;EEywBF;IFxwBG,sBAAA;ELykID;AACF;AKtkIC;EAEC;IEkwBF;MFjwBG,+EAhBc;ILwlIb;EACF;EKtkIA;IE8vBF;MF7vBG,yDAAA;ILykIC;EACF;AACF;AKvkIE;EEyvBF;IFxvBG,mBAAA;EL0kID;AACF;AK5lIE;EEywBF;IFxwBG,yBAAA;EL+lID;AACF;AK5lIC;EAEC;IEkwBF;MFjwBG,kFAhBc;IL8mIb;EACF;EK5lIA;IE8vBF;MF7vBG,4DAAA;IL+lIC;EACF;AACF;AK7lIE;EEyvBF;IFxvBG,sBAAA;ELgmID;AACF;AOt2GI;EACI,gBAAA;EACA,aAAA;EACA,mBAAA;APw2GR;AOt2GQ;EALJ;IAMQ,sBAAA;EPy2GV;AACF;AK5nIE;EEsxBE;IFrxBD,sBAAA;EL+nID;AACF;AK5nIC;EAEC;IE+wBE;MF9wBD,wFAhBc;IL8oIb;EACF;EK5nIA;IE2wBE;MF1wBD,0EAAA;IL+nIC;EACF;AACF;AK7nIE;EEswBE;IFrwBD,6BAAA;ELgoID;AACF;AOz3GQ;EAHJ;IAIQ,eAAA;IACA,WAAA;IACA,kBAAA;EP43GV;AACF;AOz3GI;EACI,gBAAA;AP23GR;AK5pIE;EEgyBE;IF/xBD,wBAAA;EL+pID;AACF;AK5pIC;EAEC;IEyxBE;MFxxBD,kFAhBc;IL8qIb;EACF;EK5pIA;IEqxBE;MFpxBD,4DAAA;IL+pIC;EACF;AACF;AK7pIE;EEgxBE;IF/wBD,wBAAA;ELgqID;AACF;AO74GI;EAEI,gBAAA;EACA,gBAAA;AP84GR;AKtrIE;EEqyBE;IFpyBD,mBAAA;ELyrID;AACF;AKtrIC;EAEC;IE8xBE;MF7xBD,0EAhBc;ILwsIb;EACF;EKtrIA;IE0xBE;MFzxBD,sDAAA;ILyrIC;EACF;AACF;AKvrIE;EEqxBE;IFpxBD,iBAAA;EL0rID;AACF;AK5sIE;EEqyBE;IFpyBD,eAAA;EL+sID;AACF;AK5sIC;EAEC;IE8xBE;MF7xBD,4DAhBc;IL8tIb;EACF;EK5sIA;IE0xBE;MFzxBD,sDAAA;IL+sIC;EACF;AACF;AK7sIE;EEqxBE;IFpxBD,gBAAA;ELgtID;AACF;AOv7GQ;EANJ;IAOQ,WAAA;IACA,mBAAA;EP07GV;AACF;AOv7GI;EACI,aAAA;EACA,eAAA;EACA,8BAAA;APy7GR;AK7uIE;EEizBE;IFhzBD,iBAAA;ELgvID;AACF;AK7uIC;EAEC;IE0yBE;MFzyBD,0EAhBc;IL+vIb;EACF;EK7uIA;IEsyBE;MFryBD,qDAAA;ILgvIC;EACF;AACF;AK9uIE;EEiyBE;IFhyBD,iBAAA;ELivID;AACF;AO58GQ;EANJ;IAOQ,UAAA;IACA,uBAAA;EP+8GV;AACF;;AKzwIE;EEi0BF;IFh0BG,qBAAA;EL6wID;AACF;AK1wIC;EAEC;IE0zBF;MFzzBG,8EAhBc;IL4xIb;EACF;EK1wIA;IEszBF;MFrzBG,yDAAA;IL6wIC;EACF;AACF;AK3wIE;EEizBF;IFhzBG,sBAAA;EL8wID;AACF;AO79GI;EACI,kBAAA;AP+9GR;AO79GQ;EACI,WAAA;EACA,kBAAA;EACA,OAAA;EAEA,WAAA;EACA,WAAA;EACA,gCAAA;AP89GZ;AK3yIE;EEs0BM;IFr0BL,cAAA;EL8yID;AACF;AK3yIC;EAEC;IE+zBM;MF9zBL,2EAbe;IL0zId;EACF;EK3yIA;IE2zBM;MF1zBL,uDAAA;IL8yIC;EACF;AACF;AK5yIE;EEszBM;IFrzBL,iBAAA;EL+yID;AACF;AOh/GI;EAGI,gBAAA;EACA,gBAAA;EACA,kBAAA;APg/GR;AKt0IE;EEi1BE;IFh1BD,eAAA;ELy0ID;AACF;AKt0IC;EAEC;IE00BE;MFz0BD,sEAhBc;ILw1Ib;EACF;EKt0IA;IEs0BE;MFr0BD,oDAAA;ILy0IC;EACF;AACF;AKv0IE;EEi0BE;IFh0BD,iBAAA;EL00ID;AACF;AK51IE;EEi1BE;IFh1BD,uBAAA;EL+1ID;AACF;AK51IC;EAEC;IE00BE;MFz0BD,gFAhBc;IL82Ib;EACF;EK51IA;IEs0BE;MFr0BD,2DAAA;IL+1IC;EACF;AACF;AK71IE;EEi0BE;IFh0BD,uBAAA;ELg2ID;AACF;AOzhHI;EACI,aAAA;EACA,eAAA;EACA,uBAAA;AP2hHR;AKv3IE;EEy1BE;IFx1BD,aAAA;EL03ID;AACF;AKv3IC;EAEC;IEk1BE;MFj1BD,qEAbe;ILs4Id;EACF;EKv3IA;IE80BE;MF70BD,iDAAA;IL03IC;EACF;AACF;AKx3IE;EEy0BE;IFx0BD,WAAA;EL23ID;AACF;AK74IE;EEy1BE;IFx1BD,mBAAA;ELg5ID;AACF;AK74IC;EAEC;IEk1BE;MFj1BD,4EAhBc;IL+5Ib;EACF;EK74IA;IE80BE;MF70BD,4DAAA;ILg5IC;EACF;AACF;AK94IE;EEy0BE;IFx0BD,uBAAA;ELi5ID;AACF;AOlkHI;EAEI,kBAAA;APmkHR;AKt6IE;EEi2BE;IFh2BD,gBAAA;ELy6ID;AACF;AKt6IC;EAEC;IE01BE;MFz1BD,0EAhBc;ILw7Ib;EACF;EKt6IA;IEs1BE;MFr1BD,mDAAA;ILy6IC;EACF;AACF;AKv6IE;EEi1BE;IFh1BD,cAAA;EL06ID;AACF;AOtlHI;EACI,kBAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,kBAAA;EACA,sBAAA;EAEA,gBAAA;EACA,gBAAA;APulHR;AKt8IE;EEs2BE;IFr2BD,mBAAA;ELy8ID;AACF;AKt8IC;EAEC;IE+1BE;MF91BD,4EAhBc;ILw9Ib;EACF;EKt8IA;IE21BE;MF11BD,uDAAA;ILy8IC;EACF;AACF;AKv8IE;EEs1BE;IFr1BD,mBAAA;EL08ID;AACF;AO1mHI;EAEI,WAAA;AP2mHR;AK/9IE;EEk3BE;IFj3BD,wBAAA;ELk+ID;AACF;AK/9IC;EAEC;IE22BE;MF12BD,kFAhBc;ILi/Ib;EACF;EK/9IA;IEu2BE;MFt2BD,4DAAA;ILk+IC;EACF;AACF;AKh+IE;EEk2BE;IFj2BD,wBAAA;ELm+ID;AACF;AO9nHI;EAGI,gBAAA;EACA,gBAAA;AP8nHR;AKz/IE;EEu3BE;IFt3BD,kBAAA;EL4/ID;AACF;AKz/IC;EAEC;IEg3BE;MF/2BD,uEAhBc;IL2gJb;EACF;EKz/IA;IE42BE;MF32BD,mDAAA;IL4/IC;EACF;AACF;AK1/IE;EEu2BE;IFt2BD,eAAA;EL6/ID;AACF;AK/gJE;EEu3BE;IFt3BD,gBAAA;ELkhJD;AACF;AK/gJC;EAEC;IEg3BE;MF/2BD,0EAhBc;ILiiJb;EACF;EK/gJA;IE42BE;MF32BD,oDAAA;ILkhJC;EACF;AACF;AKhhJE;EEu2BE;IFt2BD,eAAA;ELmhJD;AACF;AOvqHI;EACI,cAAA;APyqHR;;AKxiJE;EEq4BF;IFp4BG,qBAAA;EL4iJD;AACF;AKziJC;EAEC;IE83BF;MF73BG,8EAhBc;IL2jJb;EACF;EKziJA;IE03BF;MFz3BG,wDAAA;IL4iJC;EACF;AACF;AK1iJE;EEq3BF;IFp3BG,mBAAA;EL6iJD;AACF;AK/jJE;EEq4BF;IFp4BG,wBAAA;ELkkJD;AACF;AK/jJC;EAEC;IE83BF;MF73BG,iFAhBc;ILilJb;EACF;EK/jJA;IE03BF;MFz3BG,2DAAA;ILkkJC;EACF;AACF;AKhkJE;EEq3BF;IFp3BG,sBAAA;ELmkJD;AACF;AO7sHI;EACI,gBAAA;EACA,kBAAA;AP+sHR;AO5sHI;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;AP8sHR;AO5sHQ;EALJ;IAMQ,sBAAA;IACA,uBAAA;EP+sHV;AACF;AO5sHI;EAGI,gBAAA;EACA,gBAAA;AP4sHR;AKxmJE;EEw5BE;IFv5BD,iBAAA;EL2mJD;AACF;AKxmJC;EAEC;IEi5BE;MFh5BD,6EAhBc;IL0nJb;EACF;EKxmJA;IE64BE;MF54BD,uDAAA;IL2mJC;EACF;AACF;AKzmJE;EEw4BE;IFv4BD,gBAAA;EL4mJD;AACF;AK9nJE;EEw5BE;IFv5BD,kBAAA;ELioJD;AACF;AK9nJC;EAEC;IEi5BE;MFh5BD,2EAhBc;ILgpJb;EACF;EK9nJA;IE64BE;MF54BD,wDAAA;ILioJC;EACF;AACF;AK/nJE;EEw4BE;IFv4BD,mBAAA;ELkoJD;AACF;AOvvHQ;EACI,kBAAA;EACA,UAAA;APyvHZ;AOxvHY;EACI,WAAA;EACA,kBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;EACA,gCAAA;AP0vHhB;AOrvHI;EAEI,kBAAA;EACA,SAAA;EACA,YAAA;APsvHR;AKtqJE;EE46BE;IF36BD,gBAAA;ELyqJD;AACF;AKtqJC;EAEC;IEq6BE;MFp6BD,2EAhBc;ILwrJb;EACF;EKtqJA;IEi6BE;MFh6BD,sDAAA;ILyqJC;EACF;AACF;AKvqJE;EE45BE;IF35BD,gBAAA;EL0qJD;AACF;AO1wHQ;EANJ;IAOQ,aAAA;EP6wHV;AACF;AO1wHI;EACI,+BAAA;AP4wHR;AO3wHQ;EACI,0BAAA;AP6wHZ;;AQvxJA;EACI,kBAAA;AR0xJJ","sourcesContent":["@use \"sass:math\";\r\n\r\n// Підключення міксинів ===========================================================================================================================================================================================================================================================================\r\n@import \"base/mixins\";\r\n\r\n// Підключення шрифтів ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - додати при підключенні через плагін\r\n\r\n// Підключити, якщо є локальні файли шрифтів\r\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');\r\n\r\n// Підключення іконкових шрифтів ==============================================================================================================================================================================================================================================================================\r\n// Підключити, якщо є файл іконкового шрифту\r\n//@import \"fonts/icons\";\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// Налаштування шаблону ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// За замовчуванням шрифт ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: \"Inter\";\r\n$fontSize: toRem(15); // де 14(px) - розмір шрифту за замовчуванням з макету\r\n\r\n// Основні кольори\r\n$mainColor: #0E0E0E; // Колір шрифту за замовчуванням\r\n\r\n// Палітра кольорів\r\n// @import \"base/colors-palette\";\r\n\r\n// Налаштування адаптивної сітки ===============================================================================================================================================================================================================================================================================================\r\n\r\n// Мінімальна ширина сторінки\r\n$minWidth: 320;\r\n// Ширина полотна (макету)\r\n$maxWidth: 1366;\r\n// Ширина обмежуючого контейнера (0 = немає обмеження)\r\n$maxWidthContainer: 1170;\r\n// Загальний відступ у контейнера\r\n// (30 = по 15px ліворуч і праворуч, 0 = немає відступу)\r\n$containerPadding: 30;\r\n\r\n// Ширина спрацьовування першого брейкпоінту\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поїнти\r\n$pc: em($containerWidth); // ПК, ноутбуки, деякі планшети у горизонтальному положенні\r\n$tablet: em(991.98); // Планшети, деякі телефони в горизонтальному положенні\r\n$mobile: em(767.98); // Телефони L\r\n$mobileSmall: em(479.98); // Телефони S\r\n\r\n// Тип адаптива:\r\n// 1 = чуйність (у контейнера немає брейкпоінтів),\r\n// 2 = по брейк-поїнт (контейнер змінює свою ширину по брейк-поїнт)\r\n$responsiveType: 1;\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// Обнулення ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import \"base/null\";\r\n\r\n// Стилі тега BODY ============================================================================================================================================================================================================================================================================================================================================================================================\r\nbody {\r\n\t// Скролл заблоковано\r\n\t.lock & {\r\n\t\toverflow: hidden;\r\n\t\ttouch-action: none;\r\n\t\toverscroll-behavior: none;\r\n\t}\r\n\t// Сайт завантажений\r\n\t.loaded & {\r\n\t}\r\n}\r\n// Оболонка wrapper ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n\tmin-height: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\toverflow: hidden;\r\n\t@supports (overflow: clip) {\r\n\t\toverflow: clip;\r\n\t}\r\n\t// Притискаємо footer\r\n\t> main {\r\n\t\tflex: 1 1 auto;\r\n\t}\r\n\t// Фікс для слайдерів\r\n\t> * {\r\n\t\tmin-width: 0;\r\n\t}\r\n}\r\n// Обмежуючий контейнер ======================================================================================================================================================================================================================\r\n/*\r\n(i) Стилі будуть застосовуватись до\r\nвсіх класів, що містять *__container\r\nНаприклад header__container, main__container і т.п.\r\nСніппет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n\t// Чуйна\r\n\t[class*=\"__container\"] {\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: toRem($containerWidth);\r\n\t\t\tmargin: 0 auto;\r\n\t\t}\r\n\t\t@if ($containerPadding>0) {\r\n\t\t\t@if ($maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\r\n\t\t\t} @else {\r\n\t\t\t\t@include adaptiveValue(\"padding-left\", math.div($containerPadding, 2), 15);\r\n\t\t\t\t@include adaptiveValue(\"padding-right\", math.div($containerPadding, 2), 15);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n} @else {\r\n\t// Брейк-поїнтами\r\n\t[class*=\"__container\"] {\r\n\t\tmargin: 0 auto;\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: toRem($containerWidth);\r\n\t\t} @else {\r\n\t\t\t@if ($containerPadding>0) {\r\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $pc) {\r\n\t\t\tmax-width: toRem(970);\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmax-width: toRem(750);\r\n\t\t}\r\n\t\t@media (max-width: $mobile) {\r\n\t\t\tmax-width: none;\r\n\t\t\t@if ($containerPadding>0 and $maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// Підключення базових стилів, шаблонів (заготівель) та допоміжних класів\r\n// Для підключення/вимкнення конкретних стилів дивись base.scss\r\n@import \"base\";\r\n\r\n// Підключення стилів загальних елементів проекту\r\n@import \"common\";\r\n\r\n// Підключення стилів окремих блоків\r\n@import \"header\";\r\n@import \"footer\";\r\n\r\n// Підключення стилів окремих сторінок\r\n@import \"home\";\r\n\r\n// Змінні\r\n\r\n@import \"utils/vars\";\r\n","* {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: 0px;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n\t// outline: none;\r\n}\r\na:focus,\r\na:active {\r\n\t// outline: none;\r\n}\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tmin-width: $minWidth + px;\r\n}\r\nbody {\r\n\tcolor: $mainColor;\r\n\tline-height: 1;\r\n\tfont-family: $fontFamily;\r\n\tfont-size: $fontSize;\r\n\t//text-rendering: optimizeLegibility;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n\tfont-family: $fontFamily;\r\n\tfont-size: inherit;\r\n\tline-height: inherit;\r\n}\r\nbutton {\r\n\tcursor: pointer;\r\n\tcolor: inherit;\r\n\tbackground-color: transparent;\r\n}\r\na {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\nul li {\r\n\tlist-style: none;\r\n}\r\nimg {\r\n\tvertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n","body::after {\r\n\tcontent: \"\";\r\n\tbackground-color: rgba(0, 0, 0, 0.5);\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\topacity: 0;\r\n\ttransition: opacity 0.8s ease 0s;\r\n\tpointer-events: none;\r\n\tz-index: 149;\r\n}\r\n.popup-show body::after {\r\n\topacity: 1;\r\n}\r\n.popup {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tbottom: 0;\r\n\tright: 0;\r\n\tpadding: 30px 10px;\r\n\ttransition: visibility 0.8s ease 0s;\r\n\tvisibility: hidden;\r\n\tpointer-events: none;\r\n}\r\n.popup_show {\r\n\tz-index: 150;\r\n\tvisibility: visible;\r\n\toverflow: auto;\r\n\tpointer-events: auto;\r\n}\r\n.popup_show .popup__content {\r\n\tvisibility: visible;\r\n\ttransform: scale(1);\r\n}\r\n.popup__wrapper {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\tmin-height: 100%;\r\n\tflex: 1 1 auto;\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n.popup__content {\r\n\tvisibility: hidden;\r\n\ttransform: scale(0);\r\n\ttransition: transform 0.3s ease 0s;\r\n\tbackground-color: #eee;\r\n\tpadding: 20px;\r\n\twidth: 100%;\r\n\tmax-width: 900px;\r\n\tborder-radius: 20px;\r\n\t.lock & {\r\n\t\tvisibility: visible;\r\n\t}\r\n}\r\n//====================================================================================================\r\n// Popup-swiper\r\n//====================================================================================================\r\npopup__close\r\n.popup-swiper {\r\n\r\n\t&__wrapper {\r\n\t}\r\n\r\n\t&__slide {\r\n\t\twidth: 770px;\r\n\t}\r\n\r\n\t&__img {\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n\t&__title-block {\r\n\t}\r\n\r\n\t&__title {\r\n\t}\r\n\r\n\t&__subtitle {\r\n\t}\r\n\r\n\t&__counter {\r\n\t}\r\n\r\n\t&__item {\r\n\t}\r\n}\r\n.swiper {\r\n}\r\n.swiper-wrapper {\r\n}\r\n.swiper-slide {\r\n}\r\n.swiper-counter {\r\n\r\n\t&__item {\r\n\t}\r\n}\r\n","// Загальний файл елементів форм\r\n// Для підключення/відключення стилів конкретного елемента форми дивись base/forms/forms.scss\r\n@import \"base/forms/forms\";\r\n\r\n// Стилі попапів\r\n@import \"base/popup\";\r\n\r\n// Стилі спойлерів\r\n// @import \"base/spollers\";\r\n\r\n// Стилі табів\r\n// @import \"base/tabs\";\r\n\r\n// Стилі мап\r\n// @import \"base/maps\";\r\n\r\n// Стилі блоку \"показати ще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стилі для липкого блоку\r\n// @import \"base/sticky\";\r\n\r\n// Стилі для повноекранного блоку\r\n// @import \"base/fullscreen\";\r\n\r\n// Стилі для поекраної прокрутки\r\n// Styles for fullpage scroll\r\n// @import \"base/fullpage\";\r\n\r\n// Стилі для ripple ефекту\r\n// Styles for ripple effect\r\n// @import \"base/ripple\";\r\n\r\n// Стилі для кастомного курсору\r\n// Styles for custom cursor\r\n// @import \"base/cursor\";\r\n\r\n// Стилі для чуйних картинок (IBG)\r\n// Сніппет (HTML): ibg (div з картинкою та класами)\r\n// Сніппет (HTML): ibga (a з картинкою та класами)\r\n[class*=\"-ibg\"] {\r\n\tposition: relative;\r\n\timg {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tobject-fit: cover;\r\n\t}\r\n}\r\n[class*=\"-ibg--contain\"] {\r\n\timg {\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n// Шаблони (заготівлі)\r\n// @extend %ім'я шаблону;\r\n// Сніппет (SCSS): ex\r\n\r\n// Лічильник для списку\r\n%listCounter {\r\n\tlist-style-type: none;\r\n\tcounter-reset: item;\r\n\tli {\r\n\t\tposition: relative;\r\n\t\t&:before {\r\n\t\t\tcounter-increment: item;\r\n\t\t\tcontent: counter(item);\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t}\r\n}\r\n// Адаптивне відео\r\n%responsiveVideo {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 0;\r\n\tpadding-bottom: 56.25%;\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n// Відео як фон\r\n%videoBackground {\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: fixed;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t\tz-index: -100;\r\n\t\ttransform: translateX(-50%) translateY(-50%);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}\r\n// Сірий фільтр\r\n%grayfilter {\r\n\ttransition: all 0.3s ease 0s;\r\n\tfilter: grayscale(1);\r\n\t@media (any-hover: hover) {\r\n\t\t&:hover {\r\n\t\t\tfilter: grayscale(0);\r\n\t\t}\r\n\t}\r\n}\r\n// Скасувати виділення\r\n%noselect {\r\n\tuser-select: none;\r\n}\r\n// Дзеркальне відображення\r\n%mirror {\r\n\ttransform: scale(-1, 1);\r\n}\r\n// Плавний скролл\r\n%smoothscroll {\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n// Сховати скролл\r\n%hidescroll {\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n","//====================================================================================================\r\n\r\n.header {\r\n\tbackground-color: var(--dark-cl);\r\n\tcolor: #fff;\r\n\t&__menu {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\t@media (max-width:580px){\r\n\t\t\tjustify-content: space-between;\r\n\t\t\theight: 52px;\r\n\t\t  }\r\n\t}\r\n}\r\n\r\n.logo {\r\n\tmargin-right: auto;\r\n\t@include adaptiveValue(\"font-size\", 20, 15);\r\n}\r\n.menu {\r\n\r\n\t&__body {\r\n\t\t@include adaptiveValue(\"padding-top\", 35, 25);\r\n\t\t@include adaptiveValue(\"padding-bottom\", 35, 25);\r\n\t\tdisplay: flex;\r\n\t\tz-index: 10;\r\n\t\t@media (max-width:580px){\r\n\t\t\tflex-direction: column;\r\n\t\t\talign-items: center;\r\n\t\t  }\r\n\t}\r\n\r\n\t&__list {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\t@include adaptiveValue(\"margin-right\", 60, 50);\r\n\t\t@include adaptiveValue(\"gap\", 40, 30);\r\n\r\n\t\t@media (max-width:580px){\r\n\t\t\tflex-direction: column;\r\n\t\t\talign-items: center;\r\n\t\t\tmargin: 0;\r\n\t\t\tflex: 2;\r\n\t\t  }\r\n\t  }\r\n\r\n\t&__link {\r\n\t\t@include adaptiveValue(\"padding-top\", 35, 25);\r\n\t\t@include adaptiveValue(\"padding-bottom\", 35, 25);\r\n\t\tfont-size: 16px;\r\n\t\tposition: relative;\r\n\r\n\t\t@media (max-width:580px){\r\n\t\t\tfont-size: 28px;\r\n\t\t  }\r\n\t\t\r\n\t\t&::before {\r\n\t\t\tcontent: '';\r\n\t\t\tposition: absolute;\r\n\t\t\tdisplay: block;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 45px;\r\n\t\t\theight: 1px;\r\n\t\t\twidth: 100%;\r\n\t\t\tbackground-color: #fff;\r\n\t\t\ttransform: translateX(-100%);\r\n\t\t\topacity: 0;\r\n\t\t\tvisibility: hidden;\r\n\t\t\ttransition: visibility 0.5s ease, opacity 0.3s ease, transform 0.3s ease;\r\n\t\t}\r\n\r\n\t\t&:hover {\r\n\t\t\t&::before {\r\n\t\t\t\ttransform: translateX(0);\r\n\t\t\t\topacity: 1;\r\n\t\t\t\tvisibility: visible;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t&__link.current {\r\n\t\t&::before {\r\n\t\t\ttransform: translateX(0);\r\n\t\t\topacity: 1;\r\n\t\t\tvisibility: visible;\r\n\t\t}\r\n\t}\r\n}\r\n.socials-list {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\t@include adaptiveValue(\"gap\", 15, 10);\r\n\r\n\t@media (max-width:580px){\r\n\t\tgap: 30px;\r\n\t\tflex: 1;\r\n  \t}\r\n\r\n\t&__icon {\r\n\t\t@media (max-width:580px){\r\n\t\t\twidth: 25px;\r\n\t\t\theight: 25px;\r\n  \t}\r\n\t}\r\n}\r\n\r\n//====================================================================================================\r\n\r\n//Burger\r\n@media (max-width: 580px) {\r\n\t.menu__body {\r\n\t\tposition: fixed;\r\n\t\ttop: 52px;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttransform: translateX(-100%);\r\n\t\tbackground-color: var(--dark-cl);\r\n\t\toverflow: auto;\r\n\t\ttransition: transform 0.3s ease;\r\n\t}\r\n}\r\n\r\n.icon-menu {\r\n\t@media (min-width:580px){\r\n\t\tdisplay: none;  \r\n\t}\r\n\t@media (max-width: 580px) {\r\n\t\tdisplay: block;\r\n\t\tposition: relative;\r\n\t\twidth: toRem(25);\r\n\t\theight: toRem(14);\r\n\t\tz-index: 5;\r\n\t\t@media (any-hover: none) {\r\n\t\t\tcursor: default;\r\n\t\t}\r\n\t\tspan,\r\n\t\t&::before,\r\n\t\t&::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\tright: 0;\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: toRem(2);\r\n\t\t\tbackground-color: #fff;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t\t&::after {\r\n\t\t\tbottom: 0;\r\n\t\t\twidth: 50%;\r\n\t\t}\r\n\t\tspan {\r\n\t\t\ttop: calc(50% - toRem(1));\r\n\t\t}\r\n\t\t.menu-open & {\r\n\t\t\t+.menu__body {\r\n\t\t\t\ttransform: translateX(0);\r\n\t\t\t}\r\n\t\t\tspan {\r\n\t\t\t\twidth: 0;\r\n\t\t\t}\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t}\r\n\t\t\t&::before {\r\n\t\t\t\ttop: calc(50% - toRem(1));\r\n\t\t\t\ttransform: rotate(-45deg);\r\n\t\t\t}\r\n\t\t\t&::after {\r\n\t\t\t\tbottom: calc(50% - toRem(1));\r\n\t\t\t\ttransform: rotate(45deg);\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t}\r\n\t\t\t\r\n\t\t}\t\r\n\t}\r\n\t\r\n\t\r\n\r\n","//Підключення шрифту\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc:\r\n\t\t\turl(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"),\r\n\t\t\turl(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from: 100) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function toRem($px, $current: 16) {\r\n\t$result: math.div($px, $current) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивна властивість (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $keepSize: 0, $widthFrom: $containerWidth, $widthTo: $minWidth) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поїнти в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плаваючого значення\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{toRem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Отримання значення властивості\r\n\t$propertyValue: #{\"clamp(\" toRem($minSize) \",\" $flyValue \",\" toRem($startSize) \")\"};\r\n\t// Якщо негативні значення\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" toRem($startSize) \",\" $flyValue \",\" toRem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Встановлюємо значення за замовчуванням\r\n\t@if $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: toRem($startSize);\r\n\t\t}\r\n\t}\r\n\t// Адаптуємо розмір у проміжку між зазначеними ширинами в'юпорту\r\n\t@media (min-width: $widthToMedia) and (max-width: $widthFromMedia) {\r\n\t\t// Якщо підтримується clamp();\r\n\t\t@supports (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: $propertyValue;\r\n\t\t}\r\n\t\t// Якщо не підтримується clamp();\r\n\t\t@supports not (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: calc(#{toRem($minSize)} + #{$addSize} * (100vw - #{toRem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t\t}\r\n\t}\r\n\t@if $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: toRem($minSize);\r\n\t\t}\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.footer {\r\n    @include adaptiveValue(\"padding-top\", 121, 40);\r\n    @include adaptiveValue(\"padding-bottom\", 130, 70);\r\n    background-color: var(--dark-cl);\r\n    overflow: hidden;\r\n    &__container {\r\n        position: relative;\r\n        &::after {\r\n            content: '';\r\n            @include adaptiveValue(\"width\", 641, 200);\r\n            @include adaptiveValue(\"height\", 641, 200);\r\n            position: absolute;\r\n            right: -25%;\r\n            top: 23%;\r\n            border-radius: 50%;\r\n            background-color: #202020;\r\n            @media (max-width: 667.98px){\r\n                display: none;\r\n            } \r\n        }\r\n    }\r\n}\r\n.block-wrapper {\r\n    color: #fff;\r\n    display: flex;\r\n\r\n    @media (max-width: $mobile) {\r\n        flex-direction: column;\r\n        gap: 80px;\r\n    }\r\n}\r\n.left-block {\r\n    @include adaptiveValue(\"width\", 400, 280);\r\n    position: relative;\r\n    &::after {\r\n        content: '';\r\n        position: absolute;\r\n        top: -40%;\r\n        right: 0;\r\n        background-color: #202020;\r\n        width: 1px;\r\n        height: 200%;\r\n        @media (max-width: $mobile) {\r\n            height: 150%;\r\n        }\r\n    }\r\n    &__text {\r\n        @include adaptiveValue(\"margin-top\", 30, 15);\r\n        @include adaptiveValue(\"margin-bottom\", 76, 35);\r\n        width: 240px;\r\n        font-size: 16px;\r\n        font-weight: 400;\r\n        line-height: 1.6; \r\n    }\r\n\r\n}\r\n.footer-logo {\r\n    @include adaptiveValue(\"font-size\", 34, 20);\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 1.3; \r\n}\r\n.contacts {\r\n    @include adaptiveValue(\"margin-bottom\", 81, 40);\r\n    &__item {\r\n    }\r\n\r\n    &__link {\r\n        font-size: 17px;\r\n        font-weight: 500;\r\n        line-height: 1.7; \r\n    }\r\n}\r\n.socials {\r\n    display: flex;\r\n    gap: 20px;\r\n}\r\n.right-block {\r\n    display: flex;\r\n    flex-direction: column;\r\n    @include adaptiveValue(\"margin-left\", 100, 0);\r\n    @media (max-width: $mobile) {\r\n        margin-left: 0;\r\n    }\r\n}\r\n.subscribe {\r\n    @include adaptiveValue(\"margin-bottom\", 40, 20);\r\n    color: #969696;\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n}\r\n.footer-form {\r\n    @include adaptiveValue(\"width\", 570, 280);\r\n    position: relative;\r\n    @include adaptiveValue(\"margin-bottom\", 131, 60);\r\n    &__input {\r\n        @include adaptiveValue(\"width\", 570, 280);\r\n        background-color: transparent;\r\n        width: 100%;\r\n        outline: none;\r\n        height: 36px;\r\n        border-bottom: 1px solid #fff;\r\n        color: #fff;\r\n\r\n        &::placeholder {\r\n            color: #fff;\r\n            position: absolute;\r\n            left: 0;\r\n            bottom: 17px;\r\n            opacity: 1;\r\n            transition: opacity 0.4s ease, bottom 0.4s ease;\r\n        }\r\n\r\n        &:focus {\r\n            &::placeholder {\r\n                opacity: 0;\r\n                bottom: 34px;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__button {\r\n        position: absolute;\r\n        right: 0;\r\n        bottom: 17px;\r\n        width: 64px;  \r\n        font-size: 16px;\r\n        font-weight: 500;\r\n        display: flex;\r\n        justify-content: flex-start;\r\n        &::after {\r\n            content: '';\r\n            position: absolute;\r\n            right: 0;\r\n            bottom: 5px;\r\n            width: 6px;\r\n            height: 6px;\r\n            border-radius: 50%;\r\n            background-color: #fff;\r\n        }\r\n    }\r\n}\r\n.links-block {\r\n    display: flex;\r\n    z-index: 2;\r\n\r\n    @media (max-width: 461.98px) {\r\n        flex-direction: column;\r\n        @include adaptiveValue(\"gap\", 60, 40);\r\n    }\r\n}\r\n.footer-nav {\r\n    &:first-child {\r\n        @include adaptiveValue(\"margin-right\", 124, 60);\r\n\r\n        @media (max-width: 461.98px) {\r\n            margin-right: 0;\r\n        }\r\n    }\r\n    &:last-child {\r\n        margin-right: 0;\r\n    }\r\n    @include adaptiveValue(\"margin-right\", 88, 40);\r\n    @media (max-width: 461.98px) {\r\n        margin-right: 0;\r\n    }\r\n    &__item {\r\n    }\r\n\r\n    &__link {\r\n    font-size: 17px;\r\n    font-weight: 500;\r\n    line-height: 1.7; \r\n    position: relative;\r\n\r\n    &::before {\r\n        content: '';\r\n        position: absolute;\r\n        display: block;\r\n        left: 0;\r\n        top: 10px;\r\n        height: 1px;\r\n        width: 100%;\r\n        background-color: #fff;\r\n        transform: translateX(-100%);\r\n        opacity: 0;\r\n        visibility: hidden;\r\n        transition: visibility 0.5s ease, opacity 0.3s ease, transform 0.3s ease;\r\n    }\r\n\r\n    &:hover {\r\n        &::before {\r\n            transform: translateX(0);\r\n            opacity: 1;\r\n            visibility: visible;\r\n        }\r\n    }\r\n    }\r\n}\r\n.footer-credits {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 15px;\r\n    z-index: 2;\r\n    color: #969696;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 1.3; \r\n    width: 149px;\r\n    text-wrap: nowrap;\r\n\r\n    @media (max-width: 631.98px) {\r\n        bottom: -50px;\r\n    }\r\n}\r\n\r\n//====================================================================================================\r\n","//====================================================================================================\r\n// Hero section\r\n//====================================================================================================\r\n.hero {\r\n    background-color: var(--dark-cl);\r\n    position: relative;\r\n    @include adaptiveValue(\"height\", 480, 270);\r\n    &__container {\r\n        position: relative;\r\n    }\r\n}\r\n\r\n.swiper-counter {\r\n    position: relative;\r\n    @include adaptiveValue(\"bottom\", 70, 30);\r\n    @include adaptiveValue(\"left\", 200, 15);\r\n    @include adaptiveValue(\"width\", 80, 50);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    color: #fff;\r\n    &__item {\r\n        &::after {\r\n            content: '';\r\n            height: 1px;\r\n            @include adaptiveValue(\"width\", 20, 10);\r\n            background-color: #fff;\r\n            position: absolute;\r\n            top: 7px;\r\n            @include adaptiveValue(\"left\", 30, 19);\r\n    }\r\n\r\n    &span {\r\n        @include adaptiveValue(\"font-size\", 14, 12);  \r\n    }\r\n    }\r\n}\r\n\r\n.block-title {\r\n        position: absolute;\r\n        @include adaptiveValue(\"top\", 175, 50);\r\n        @include adaptiveValue(\"left\", 200, 30);\r\n        @include adaptiveValue(\"width\", 516, 300);\r\n        padding: 40px 0 40px 0;\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 70, 36);\r\n        font-weight: 500;\r\n        line-height: 1.1;\r\n        color: #fff;\r\n        text-shadow: 4px 4px 2px rgba(0,0,0,0.6);\r\n        &::before {\r\n            content: '';\r\n            position: absolute;\r\n            top: 0;\r\n            left: 0;\r\n            height: 1px;\r\n            width: 70px;\r\n            background-color: #fff;\r\n        }\r\n    }\r\n    &::before {\r\n        content: '';\r\n        height: 1px;\r\n        width: 70px;\r\n    }\r\n}\r\n\r\n.btn-view {\r\n    position: absolute;\r\n    @include adaptiveValue(\"top\", 390, 160);\r\n    @include adaptiveValue(\"right\", 178, 20);\r\n    @include adaptiveValue(\"width\", 90, 55);\r\n    @include adaptiveValue(\"height\", 90, 55);\r\n    background-color: #fff;\r\n    color: var(--dark-cl);\r\n    border-radius: 50%;\r\n    @include adaptiveValue(\"font-size\", 15, 12);\r\n    font-weight: 500;\r\n    transition: transform 0.4s ease, box-shadow 0.4s ease;\r\n\r\n    &:hover {\r\n        transform: scale(1.1);\r\n        box-shadow: 2px 2px 15px 8px #fff;\r\n    }\r\n}\r\n\r\n.swiper-slide {\r\n    &__img {\r\n         @include adaptiveValue(\"height\", 580, 220);\r\n         width: 100%;\r\n    }\r\n}\r\n\r\n.swiper-button-prev {\r\n    position: absolute;\r\n    top: 225px;\r\n    @include adaptiveValue(\"left\", -50, 400);\r\n    @media (max-width:958px){\r\n        display: none;\r\n      }\r\n}\r\n.swiper-button-next {\r\n    position: absolute;\r\n    top: 225px;\r\n    @include adaptiveValue(\"right\", -50, 400);\r\n    @media (max-width:958px){\r\n        display: none;\r\n      }\r\n}\r\n\r\n//====================================================================================================\r\n// About-us section\r\n//====================================================================================================\r\n.about-us {\r\n    @include adaptiveValue(\"padding-top\", 256, 40);\r\n\r\n    &__container--big {\r\n        width: 1306px;\r\n        margin: 0 auto;\r\n    }\r\n}\r\n.intro-block {\r\n    @include adaptiveValue(\"width\", 615, 290);\r\n    @include adaptiveValue(\"margin-bottom\", 93, 40);\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    &__label {\r\n        @include adaptiveValue(\"margin-bottom\", 25, 15);\r\n        font-weight: 500;\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 34, 24);\r\n        line-height: 1.3;\r\n        font-weight: 500;\r\n    }\r\n}\r\n.info-block {\r\n    display: flex;\r\n    justify-content: center;\r\n    @include adaptiveValue(\"margin-bottom\", 160, 60);\r\n    @include adaptiveValue(\"gap\", 110, 40);\r\n    @media (max-width:580px){\r\n        flex-direction: column;\r\n        @include adaptiveValue(\"padding-left\", 40, 20);\r\n      }\r\n\r\n    &__item--top-line {\r\n        @include adaptiveValue(\"width\", 391, 200);\r\n        @include adaptiveValue(\"padding-top\", 34, 20);\r\n        position: relative\r\n    }\r\n\r\n    &__text--big {\r\n        @include adaptiveValue(\"font-size\", 20, 18);\r\n        line-height: 1.5;\r\n\r\n        &::before {\r\n            content: '';\r\n            position: absolute;\r\n            top: 0;\r\n            left: 0;\r\n            height: 1px;\r\n            @include adaptiveValue(\"width\", 400, 210);\r\n            background-color: var(--dark-cl)\r\n        }\r\n    }\r\n\r\n    &__item--action {\r\n        @include adaptiveValue(\"width\", 463, 250);\r\n    }\r\n\r\n    &__text--small {\r\n        @include adaptiveValue(\"font-size\", 17, 15);\r\n        @include adaptiveValue(\"margin-bottom\", 50, 25);\r\n        line-height: 1.6;\r\n    }\r\n}\r\n\r\n\r\n.btn span {\r\n    position: relative;\r\n    z-index: 50;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    @include adaptiveValue(\"padding-left\", 39, 18);\r\n    @media (max-width: 959.98px) {\r\n        padding-left: 0;\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n    @media (max-width: 469.98px) {\r\n        font-size: 13px;\r\n    }\r\n}\r\n\r\n.btn {\r\n    @include adaptiveValue(\"padding-top\", 19, 10);\r\n    @include adaptiveValue(\"padding-bottom\", 19, 10);\r\n    @include adaptiveValue(\"width\", 170, 80);\r\n    background-color: var(--dark-cl);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    overflow: hidden;\r\n    z-index: 2;\r\n    outline: 1px solid var(--dark-cl);\r\n    position: relative;\r\n    \r\n\r\n    &:hover {\r\n        span {\r\n            color: var(--dark-cl);\r\n        }\r\n        &::before {\r\n            transform: translateX(0);\r\n        }\r\n        &::after {\r\n            background-color: var(--dark-cl);\r\n        }\r\n    }\r\n\r\n    &::after {\r\n        content: '';\r\n        position: absolute;\r\n        @include adaptiveValue(\"top\", 25, 12);\r\n        @include adaptiveValue(\"right\", 38, 19);\r\n        width: 6px;\r\n        height: 6px;\r\n        border-radius: 50%;\r\n        background-color: #fff;\r\n        @media (max-width: 959.98px) {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    &::before {\r\n        content: '';\r\n        position: absolute;\r\n        height: 100%;\r\n        width: 100%;\r\n        background-color: #fff;\r\n        transform: translateX(-125%);\r\n        transition: transform 0.4s ease;\r\n    }\r\n\r\n    &--reverse {\r\n        background-color: #fff;\r\n        outline: 1px solid #fff;\r\n\r\n        &:hover {\r\n            &::after {\r\n                background-color: #fff;\r\n            }\r\n\r\n            span {\r\n                color: #fff;\r\n            }\r\n        }\r\n        span {\r\n            color: var(--dark-cl);\r\n            font-weight: 500;\r\n        }\r\n\r\n        &::after {\r\n            background-color: var(--dark-cl);\r\n        }\r\n\r\n        &::before {\r\n            background-color: var(--dark-cl);\r\n        }\r\n    }\r\n}\r\n//====================================================================================================\r\n// Directions section\r\n//====================================================================================================\r\n.directions {\r\n    max-width: 1336px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    @include adaptiveValue(\"padding-bottom\", 140, 60);\r\n}\r\n\r\n.works-list {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 30px;\r\n    &__item {\r\n        @include adaptiveValue(\"width\", 304, 200);\r\n        background: linear-gradient(180deg, rgba(0, 0, 0, 0.13) 0%, rgba(0, 0, 0, 0.65) 100%);\r\n        position: relative;\r\n        @include adaptiveValue(\"height\", 400, 280);\r\n        overflow: hidden;\r\n        &:hover {\r\n            backdrop-filter: blur(10px);\r\n           .works-list__info {\r\n                transform: translateY(-16px);\r\n           }\r\n           .works-list__card {\r\n            filter: blur(7px);\r\n           }\r\n        }\r\n    }\r\n\r\n    &__card {\r\n        width: 100%;\r\n        height: 100%;\r\n        filter: blur(0);\r\n        transition: filter 0.5s ease;\r\n    }\r\n\r\n\t&__info {\r\n        position: absolute;\r\n        left: 0;\r\n        bottom: 0;\r\n        @include adaptiveValue(\"padding-right\", 93, 25);\r\n        @include adaptiveValue(\"padding-left\", 50, 25);\r\n        transform: translateY(16px);\r\n        transition: transform 0.5s ease;\r\n\t}\r\n\r\n\t&__text {\r\n        font-size: 20px;\r\n        color: #fff;\r\n        margin: 24px 0 24px 0;\r\n        @media (max-width: 499.98px) {\r\n            font-size: 18px; \r\n        }\r\n\t}\r\n\r\n\t&__more {\r\n        font-size: 16px;\r\n        color: #fff;\r\n        @media (max-width: 499.98px) {\r\n            font-size: 14px; \r\n        }\r\n\t}\r\n}\r\n//====================================================================================================\r\n// Directions section\r\n//====================================================================================================\r\n.featured {\r\n    @include adaptiveValue(\"padding-bottom\", 157, 40);\r\n    &__list {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        @include adaptiveValue(\"gap\", 100, 30);\r\n    }\r\n\r\n    &__item {\r\n        position: relative;\r\n        overflow: hidden;\r\n\r\n        &:hover,\r\n        &:focus {\r\n            .featured__btn {\r\n                opacity: 1;\r\n                visibility: visible;\r\n            }\r\n        }\r\n    }\r\n    &__image {\r\n        @include adaptiveValue(\"width\", 370, 185);\r\n        @include adaptiveValue(\"height\", 428, 214);\r\n    }\r\n\r\n    &__label {   \r\n        font-size: 24px;\r\n        font-weight: 500;\r\n        line-height: 1.4; \r\n        @include adaptiveValue(\"margin-top\", 34, 15);\r\n        @include adaptiveValue(\"margin-bottom\", 8, 4);\r\n        @media (max-width: 599.98px) {\r\n            font-size: 20px;\r\n        }\r\n    }\r\n\r\n    &__type {\r\n        font-size: 15px;\r\n        font-weight: 500;\r\n    }\r\n\r\n    &__image--big {\r\n        @include adaptiveValue(\"width\", 600, 280);\r\n        @include adaptiveValue(\"height\", 428, 194);\r\n    }\r\n\r\n    &__item--top {\r\n        padding-left: 100px;\r\n        padding-top: 160px;\r\n\r\n        @media (max-width: 1199.98px) {\r\n            padding-left: 0;\r\n            padding-top: 0;\r\n        }\r\n    }\r\n\r\n    &__item--bottom {\r\n        margin-top: -160px;\r\n        @media (max-width: 1199.98px) {\r\n            margin-top: 0;\r\n        }\r\n    }\r\n\r\n    &__btn {\r\n        left: 130px;\r\n        top: 200px;\r\n        opacity: 0;\r\n        visibility: hidden;\r\n        transition: opacity 0.5s ease, visibility 0.5s ease, transform 0.4s ease, box-shadow 0.4s ease;\r\n\r\n        @media (max-width: $mobile) {\r\n            left: 100px;\r\n            top: 100px;\r\n        }\r\n        @media (max-width: $mobileSmall) {\r\n            left: 66px;\r\n            top: 77px;\r\n        }\r\n    }\r\n}\r\n.introduction {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: first baseline;\r\n    position: relative;\r\n    @include adaptiveValue(\"margin-bottom\", 48, 25);\r\n    @include adaptiveValue(\"padding-left\", 100, 20);\r\n    @include adaptiveValue(\"padding-right\", 100, 50);\r\n    &__title {\r\n        margin-right: 375px;\r\n        @include adaptiveValue(\"font-size\", 100, 50);\r\n        font-weight: 500;\r\n        line-height: 1.1;\r\n        @include adaptiveValue(\"width\", 425, 250);\r\n        &::after {\r\n            content: '';\r\n            position: absolute;\r\n            @include adaptiveValue(\"width\", 70, 35);\r\n            height: 1px;\r\n            background-color: var(--dark-cl);\r\n            left: 680px;\r\n            top: 80px;\r\n        }\r\n        @media (max-width: 1199.98px) {\r\n            @include adaptiveValue(\"margin-bottom\", 48, 25);\r\n\r\n            &::after {\r\n                @include adaptiveValue(\"left\", 100, 50);\r\n                top: -40px;\r\n            }\r\n        }\r\n    }\r\n}\r\n//====================================================================================================\r\n// Process section\r\n//====================================================================================================\r\n.process {\r\n        background-color: var(--dark-cl);\r\n        height: 664px;\r\n        @media (max-width: 667.98px){\r\n            height: 710px;\r\n        }\r\n\t\t&__container {\r\n            max-width: 1300px;\r\n            z-index: 2;\r\n            overflow: hidden;\r\n            position: relative;\r\n            @include adaptiveValue(\"padding-top\", 149, 40);\r\n            @include adaptiveValue(\"padding-bottom\", 161, 40);\r\n            &::after {\r\n            content: '';\r\n            @include adaptiveValue(\"width\", 641, 200);\r\n            @include adaptiveValue(\"height\", 641, 200);\r\n            position: absolute;\r\n            right: -20%;\r\n            top: -35%;\r\n            border-radius: 50%;\r\n            background-color: #202020;\r\n            @media (max-width: 667.98px){\r\n                display: none;\r\n            }\r\n        }\r\n\t\t}\r\n\r\n\t\t&__title {\r\n            color: #FFF;\r\n            font-size: 48px;\r\n            font-weight: 500;\r\n            line-height: 1.2;\r\n            @include adaptiveValue(\"margin-bottom\", 80, 30); \r\n\r\n            @media (max-width: 667.98px){\r\n                @include adaptiveValue(\"padding-left\", 100, 20);\r\n            }\r\n\r\n            @media (max-width: 419.98px) {\r\n                width: 200px;\r\n            }\r\n\t\t}\r\n\r\n\t\t&__list {\r\n            gap: 24px;\r\n            display: flex;\r\n            flex-direction: column;\r\n            @include adaptiveValue(\"margin-left\", 60, 20);\r\n            @include adaptiveValue(\"margin-right\", 140, 0);\r\n            @media (max-width: 667.98px){\r\n                margin-bottom: 40px;\r\n            }\r\n\t\t}\r\n\r\n\t\t&__item {\r\n            position: relative;\r\n\r\n            &:hover {\r\n                .process__text {\r\n                    color: #fff;\r\n                    transform: translateX(20px);\r\n                    &::before {\r\n                        opacity: 1;\r\n                        transform: translateX(28%)\r\n                    }\r\n                }\r\n                .process__number {\r\n                    opacity: 1;\r\n                }\r\n            }\r\n\t\t}\r\n\r\n\t\t&__text {\r\n            color: #6F6F6F;\r\n            font-size: 24px;\r\n            font-weight: 500;\r\n            line-height: 1.4;\r\n            transition: color 0.4s ease, transform 0.4s ease;\r\n            &::before {\r\n                content: '';\r\n                width: 40px;\r\n                height: 1px;\r\n                background-color: #fff;\r\n                position: absolute;\r\n                left: -90px;\r\n                top: 17px;\r\n                transform: translateX(-100%);\r\n                opacity: 0;\r\n                transition: transform 0.4s ease, opacity 0.4s ease;\r\n                @media (max-width: 667.98px){\r\n                    display: none;\r\n                }\r\n            }\r\n\r\n            transform: translateX(0);\r\n\t\t}\r\n\r\n\t\t&__number {\r\n            opacity: 0;\r\n            font-size: 12px;\r\n            font-weight: 500;\r\n            transition: opacity 0.4s ease;\r\n\t\t}\r\n\r\n}\r\n\r\n.process-wrapper {\r\n    display: flex;\r\n    @media (max-width: 667.98px){\r\n        flex-direction: column;\r\n        justify-content: center;\r\n    }\r\n}\r\n\r\n.block-info {\r\n    @include adaptiveValue(\"width\", 395, 250);\r\n\r\n    @media (max-width: 667.98px){\r\n        @include adaptiveValue(\"padding-left\", 100, 20);\r\n    }\r\n\t\t&__text {\r\n            color: #FFF;\r\n            font-size: 17px;\r\n            font-weight: 400;\r\n            line-height: 1.5;\r\n            @include adaptiveValue(\"margin-bottom\", 53, 25); \r\n            \r\n\t\t}\r\n\r\n\t\t\r\n}\r\n//====================================================================================================\r\n//Create section\r\n//====================================================================================================\r\n.create {\r\n    @include adaptiveValue(\"padding-top\", 160, 40);\r\n    @include adaptiveValue(\"padding-bottom\", 140, 40);\r\n    &__container {\r\n    }\r\n\r\n    &__wrapper {\r\n        display: flex;\r\n        @media (max-width: 1037.98px) {\r\n            flex-direction: column;\r\n        }\r\n    }\r\n}\r\n.img-block {\r\n    @media (max-width: 1037.98px) {\r\n        margin: 0 auto;\r\n    }\r\n    &__item {\r\n        filter: grayscale(100%);\r\n        transition: filter 0.4s ease;\r\n        &:hover {\r\n            filter: grayscale(0);\r\n        }\r\n    }\r\n\r\n    &__item--big {\r\n        margin-bottom: 30px;\r\n        @include adaptiveValue(\"width\", 470, 235);\r\n        @include adaptiveValue(\"height\", 290, 145);\r\n    }\r\n\r\n    &__bottom {\r\n        @include adaptiveValue(\"width\", 575, 300);\r\n    }\r\n\r\n    &__item--small {\r\n        @include adaptiveValue(\"padding-left\", 130, 30);\r\n        @include adaptiveValue(\"margin-right\", 30, 15);\r\n        @include adaptiveValue(\"width\", 270, 135);\r\n        @include adaptiveValue(\"height\", 140, 80);\r\n    }\r\n\r\n    &__item--middle {\r\n        @include adaptiveValue(\"width\", 270, 135);\r\n        @include adaptiveValue(\"height\", 250, 125);\r\n    }\r\n}\r\n.create-info {\r\n    @include adaptiveValue(\"padding-top\", 93, 40);\r\n    &__title {\r\n        font-size: 28px;\r\n        font-weight: 500;\r\n        line-height: 1.3;\r\n        width: 357px;\r\n        @include adaptiveValue(\"margin-bottom\", 37, 20);\r\n    }\r\n\r\n    &__text {\r\n        @include adaptiveValue(\"padding-left\", 90, 20);\r\n        @include adaptiveValue(\"margin-bottom\", 53, 27);\r\n        @include adaptiveValue(\"width\", 438, 280);\r\n        font-size: 17px;\r\n        font-weight: 400;\r\n        line-height: 1.6; \r\n\r\n        @media (max-width: 1037.98px) {\r\n            margin-left: auto;\r\n            margin-right: auto;\r\n        }\r\n\r\n        @media (max-width: 483.98px) {\r\n            @include adaptiveValue(\"padding-left\", 40, 20);\r\n            margin-left: 0;\r\n            margin-right: 0;\r\n        }\r\n    }\r\n\r\n    &__btn {\r\n        @include adaptiveValue(\"margin-left\", 90, 20);\r\n\r\n        @media (max-width: 1037.98px) {\r\n            margin-left: auto;\r\n        }\r\n        @media (max-width: 483.98px) {\r\n            @include adaptiveValue(\"margin-left\", 40, 20);\r\n        }\r\n    }\r\n}\r\n//====================================================================================================\r\n//Values section\r\n//====================================================================================================\r\n.values {\r\n    @include adaptiveValue(\"padding-bottom\", 214, 40);\r\n    &__container {\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 100, 55);\r\n        text-align: center;\r\n        font-weight: 500;\r\n        line-height: 1.2;\r\n        @include adaptiveValue(\"margin-bottom\", 86, 40);\r\n    }\r\n\r\n    &__list {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        @include adaptiveValue(\"gap\", 75, 40);\r\n\r\n        @media (max-width: 651.98px) {\r\n            justify-content: flex-start;\r\n        }\r\n    }\r\n\r\n    &__item {\r\n        @include adaptiveValue(\"width\", 340, 250);\r\n        @include adaptiveValue(\"padding-left\", 100, 50);\r\n        position: relative;\r\n\r\n        @media (max-width: 651.98px) {\r\n            width: 100%;\r\n        }\r\n    }\r\n\r\n    &__img {\r\n        @include adaptiveValue(\"width\", 70, 35);\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n\r\n    &__label {\r\n        @include adaptiveValue(\"font-size\", 24, 20);\r\n        font-weight: 500;\r\n        line-height: 1.4; \r\n        margin-bottom: 17px;\r\n    }\r\n\r\n    &__text {  \r\n        font-size: 16px;\r\n        font-weight: 400;\r\n        line-height: 1.6;\r\n        margin-bottom: 19px;\r\n    }\r\n\r\n    &__more {\r\n        font-size: 16px;\r\n        font-weight: 500;\r\n        line-height: 1.6;\r\n        display: flex;\r\n        align-items: center; \r\n        &:hover {\r\n            .values__icon {\r\n                transform: translateX(15px);\r\n            }\r\n        }\r\n    }\r\n\r\n    &__icon {\r\n        fill: var(--dark-cl);\r\n        transition: transform 0.4s ease;\r\n    }\r\n}\r\n//====================================================================================================\r\n//Swiper section\r\n//====================================================================================================\r\n.swiper-section {\r\n    @include adaptiveValue(\"padding-top\", 128, 40);\r\n    @include adaptiveValue(\"padding-bottom\", 196, 40);\r\n    background-color: var(--dark-cl);\r\n    overflow: hidden;\r\n    &__container {\r\n        position: relative;\r\n        &::after {\r\n            content: '';\r\n            @include adaptiveValue(\"width\", 641, 200);\r\n            @include adaptiveValue(\"height\", 641, 200);\r\n            position: absolute;\r\n            left: 23%;\r\n            top: 23%;\r\n            border-radius: 50%;\r\n            background-color: #202020;\r\n            @media (max-width: 667.98px){\r\n                display: none;\r\n            } \r\n        }\r\n    }\r\n\r\n    &__wrapper {\r\n        z-index: 2;\r\n    }\r\n\r\n    &__slide {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    &__img-quote {\r\n        @include adaptiveValue(\"width\", 38, 19);\r\n        @include adaptiveValue(\"margin-bottom\", 92, 20);\r\n    }\r\n\r\n    &__text {\r\n        color: #FFF;\r\n        @include adaptiveValue(\"font-size\", 24, 15);\r\n        font-weight: 500;\r\n        line-height: 1.4;\r\n        text-align: center; \r\n        @include adaptiveValue(\"width\", 673, 300);\r\n        @include adaptiveValue(\"margin-bottom\", 33, 15);\r\n    }\r\n\r\n    &__author {\r\n        color: #969696;\r\n        font-weight: 400;\r\n        line-height: 1.3;\r\n    }\r\n}\r\n\r\n.second-counter {\r\n    z-index: 2;\r\n    left: 47%;\r\n    @include adaptiveValue(\"bottom\", -120, 0);\r\n    position: relative;\r\n\r\n    @media (max-width: $mobile) {\r\n        display: none;\r\n    }\r\n    &::before {\r\n        content: '';\r\n        position: absolute;\r\n        @include adaptiveValue(\"left\", -548, -135);\r\n        bottom: 405px;\r\n        height: 1px;\r\n        @include adaptiveValue(\"width\", 168, 80);\r\n        background-color: #fff;\r\n\r\n        @media (max-width: $mobile) {\r\n            display: none;\r\n        }\r\n    }\r\n    &::after {\r\n        content: '';\r\n        position: absolute;\r\n        @include adaptiveValue(\"right\", -576, -120);\r\n        bottom: 100px;\r\n        height: 1px;\r\n        @include adaptiveValue(\"width\", 70, 35);\r\n        background-color: #fff;\r\n        transform: rotate(90deg);\r\n\r\n        @media (max-width: $mobile) {\r\n            display: none;\r\n        }\r\n    }\r\n}\r\n\r\n//====================================================================================================\r\n//Clients section\r\n//====================================================================================================\r\n.clients {\r\n    @include adaptiveValue(\"padding-top\", 155, 40);\r\n    @include adaptiveValue(\"padding-bottom\", 155, 40);\r\n    &__container {\r\n        max-width: 975px;\r\n        display: flex;\r\n        align-items: center;\r\n\r\n        @media (max-width: 779.98px) {\r\n            flex-direction: column;\r\n        }\r\n    }\r\n\r\n    &__title-block {\r\n        @include adaptiveValue(\"margin-right\", 260, 0);\r\n\r\n        @media (max-width: 779.98px) {\r\n            margin-right: 0;\r\n            width: 100%;\r\n            text-align: center;\r\n        }\r\n    }\r\n\r\n    &__uppertitle {\r\n        font-weight: 500;\r\n        @include adaptiveValue(\"margin-bottom\", 27, 15);\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 34, 24);\r\n        font-weight: 500;\r\n        line-height: 1.3;\r\n        @include adaptiveValue(\"width\", 268, 125); \r\n\r\n        @media (max-width: 779.98px) {\r\n            width: 100%;\r\n            margin-bottom: 20px;\r\n        }\r\n    }\r\n\r\n    &__list {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: space-between;\r\n        @include adaptiveValue(\"row-gap\", 50, 30);\r\n\r\n        @media (max-width: 779.98px) {\r\n            width: 70%;\r\n            justify-content: center;\r\n        }\r\n    }\r\n\r\n}\r\n//====================================================================================================\r\n//New section\r\n//====================================================================================================\r\n.new {\r\n    @include adaptiveValue(\"padding-bottom\", 160, 40);\r\n    &__container {\r\n        position: relative;\r\n\r\n        &::after {\r\n            content: '';\r\n            position: absolute;\r\n            left: 0;\r\n            @include adaptiveValue(\"bottom\", -160, -70);\r\n            height: 1px;\r\n            width: 100%;\r\n            background-color: var(--dark-cl);\r\n        }\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 48, 24);\r\n        @include adaptiveValue(\"margin-bottom\", 90, 30);\r\n        font-weight: 500;\r\n        line-height: 1.2; \r\n        text-align: center;\r\n    }\r\n\r\n    &__list {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        @include adaptiveValue(\"gap\", 30, 40);\r\n        @include adaptiveValue(\"margin-bottom\", 80, 30);\r\n    }\r\n\r\n    &__item {\r\n        @include adaptiveValue(\"width\", 370, 280);\r\n        position: relative\r\n    }\r\n\r\n    &__date {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        width: 35%;\r\n        padding: 10px 15px;\r\n        background-color: #fff;\r\n        @include adaptiveValue(\"font-size\", 14, 10);\r\n        font-weight: 400;\r\n        line-height: 1.3;\r\n    }\r\n\r\n    &__image {\r\n        @include adaptiveValue(\"margin-bottom\", 27, 15);\r\n        width: 100%;\r\n    }\r\n\r\n    &__text {\r\n        @include adaptiveValue(\"font-size\", 20, 16);\r\n        @include adaptiveValue(\"width\", 294, 260);\r\n        font-weight: 500;\r\n        line-height: 1.5; \r\n    }\r\n\r\n    &__btn {\r\n        margin: 0 auto;\r\n    }\r\n}\r\n//====================================================================================================\r\n//Work section\r\n//====================================================================================================\r\n.work {\r\n    @include adaptiveValue(\"padding-top\", 158, 40);\r\n    @include adaptiveValue(\"padding-bottom\", 158, 40);\r\n    &__container {\r\n        max-width: 960px;\r\n        position: relative;\r\n    }\r\n\r\n    &__block {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n\r\n        @media (max-width: 649.98px) {\r\n            flex-direction: column;\r\n            justify-content: center;\r\n        }\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"width\", 483, 250);\r\n        @include adaptiveValue(\"font-size\", 100, 50);\r\n        font-weight: 500;\r\n        line-height: 1.2;\r\n        span {\r\n            position: relative;\r\n            z-index: 2;\r\n            &::after {\r\n                content: '';\r\n                position: absolute;\r\n                left: 0;\r\n                bottom: 0;\r\n                width: 100%;\r\n                height: 1px;\r\n                background-color: var(--dark-cl);\r\n            }\r\n        }\r\n    }\r\n\r\n    &__img {\r\n        @include adaptiveValue(\"width\", 230, 115);\r\n        position: absolute;\r\n        left: 47%;\r\n        bottom: 38px;\r\n\r\n        @media (max-width: 649.98px) {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    &__link {\r\n        transition: transform 0.4s ease;\r\n        &:hover {\r\n            transform: translateX(50%);\r\n        }\r\n    }\r\n\r\n    \r\n}\r\n\r\n\r\n\r\n",":root {\r\n    --dark-cl: #0E0E0E;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e28c00cf73e87014ca6c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jNGYwMzJhMjE0MmZjYmVjZDcxZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw4R0FBOEcsa0JBQWtCO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlZQUFpWSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sT0FBTyxZQUFZLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxTQUFTLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxPQUFPLFdBQVcsV0FBVyxPQUFPLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE1BQU0sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLFVBQVUsT0FBTyxNQUFNLE9BQU8sV0FBVyxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsVUFBVSxRQUFRLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sT0FBTyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLE1BQU0sT0FBTyxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxRQUFRLE9BQU8sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFFBQVEsT0FBTyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLE1BQU0sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsUUFBUSxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFFBQVEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE1BQU0sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLFFBQVEsVUFBVSxXQUFXLFFBQVEsUUFBUSxVQUFVLFdBQVcsUUFBUSxRQUFRLFVBQVUsUUFBUSxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFFBQVEsUUFBUSxLQUFLLFVBQVUsUUFBUSxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLFdBQVcsT0FBTyxNQUFNLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLEtBQUssV0FBVyxPQUFPLE1BQU0sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLE1BQU0sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLE1BQU0sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLFdBQVcsT0FBTyxNQUFNLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxVQUFVLFFBQVEsT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxL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QixzQkFBc0IseUJBQXlCLDhDQUE4Qyw4QkFBOEIsYUFBYSxTQUFTLHFCQUFxQiw0Q0FBNEMscUJBQXFCLDJDQUEyQyxhQUFhLFNBQVMsaUJBQWlCLDBCQUEwQiwyQkFBMkIsS0FBSyxtQkFBbUI7QUFDdnc0RjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUNseUp2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbioge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDMyMHB4O1xufVxuXG5ib2R5IHtcbiAgY29sb3I6ICMwRTBFMEU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LWZhbWlseTogXCJJbnRlclwiO1xuICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxudWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5pbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4ubG9jayBib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xufVxuLndyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQHN1cHBvcnRzIChvdmVyZmxvdzogY2xpcCkge1xuICAud3JhcHBlciB7XG4gICAgb3ZlcmZsb3c6IGNsaXA7XG4gIH1cbn1cbi53cmFwcGVyID4gbWFpbiB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLndyYXBwZXIgPiAqIHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4vKlxuKGkpINCh0YLQuNC70ZYg0LHRg9C00YPRgtGMINC30LDRgdGC0L7RgdC+0LLRg9Cy0LDRgtC40YHRjCDQtNC+XG7QstGB0ZbRhSDQutC70LDRgdGW0LIsINGJ0L4g0LzRltGB0YLRj9GC0YwgKl9fY29udGFpbmVyXG7QndCw0L/RgNC40LrQu9Cw0LQgaGVhZGVyX19jb250YWluZXIsIG1haW5fX2NvbnRhaW5lciDRliDRgi7Qvy5cbtCh0L3RltC/0L/QtdGCIChIVE1MKTogY250XG4qL1xuW2NsYXNzKj1fX2NvbnRhaW5lcl0ge1xuICBtYXgtd2lkdGg6IDc1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAwLjkzNzVyZW07XG59XG5cbmJvZHk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjhzIGVhc2UgMHM7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAxNDk7XG59XG5cbi5wb3B1cC1zaG93IGJvZHk6OmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnBvcHVwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDMwcHggMTBweDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjhzIGVhc2UgMHM7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5wb3B1cF9zaG93IHtcbiAgei1pbmRleDogMTUwO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5cbi5wb3B1cF9zaG93IC5wb3B1cF9fY29udGVudCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wb3B1cF9fd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wb3B1cF9fY29udGVudCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSAwcztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4ubG9jayAucG9wdXBfX2NvbnRlbnQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG5wb3B1cF9fY2xvc2UgLnBvcHVwLXN3aXBlcl9fc2xpZGUge1xuICB3aWR0aDogNzcwcHg7XG59XG5wb3B1cF9fY2xvc2UgLnBvcHVwLXN3aXBlcl9faW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5bY2xhc3MqPS1pYmddIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuW2NsYXNzKj0taWJnXSBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbltjbGFzcyo9LWliZy0tY29udGFpbl0gaW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkZXJfX21lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5oZWFkZXJfX21lbnUge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IDUycHg7XG4gIH1cbn1cblxuLmxvZ28ge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubG9nbyB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjgyMzg2MzYzNjRyZW0gICsgIDAuNTY4MTgxODE4MnZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLmxvZ28ge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC44MjM4NjM2MzY0cmVtICArICAwLjU2ODE4MTgxODJ2dyAsIDEuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC44MjM4NjM2MzY0cmVtICArICAwLjU2ODE4MTgxODJ2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5sb2dvIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjkzNzVyZW0gKyAwLjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubG9nbyB7XG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gIH1cbn1cblxuLm1lbnVfX2JvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiAxMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5tZW51X19ib2R5IHtcbiAgICBwYWRkaW5nLXRvcDogMi4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKSkge1xuICAgIC5tZW51X19ib2R5IHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKSkge1xuICAgIC5tZW51X19ib2R5IHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDEuNTYyNXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1lbnVfX2JvZHkge1xuICAgIHBhZGRpbmctdG9wOiAxLjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5tZW51X19ib2R5IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMi4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKSkge1xuICAgIC5tZW51X19ib2R5IHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKSkge1xuICAgIC5tZW51X19ib2R5IHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDEuNTYyNXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1lbnVfX2JvZHkge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAubWVudV9fYm9keSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG4ubWVudV9fbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubWVudV9fbGlzdCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAzLjEyNXJlbSAsIDIuODk3NzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAzLjc1cmVtICkpIHtcbiAgICAubWVudV9fbGlzdCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNsYW1wKCAzLjEyNXJlbSAsIDIuODk3NzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAzLjc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1yaWdodDogY2xhbXAoIDMuMTI1cmVtICwgMi44OTc3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5tZW51X19saXN0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygzLjEyNXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1lbnVfX2xpc3Qge1xuICAgIG1hcmdpbi1yaWdodDogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5tZW51X19saXN0IHtcbiAgICBnYXA6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAxLjY0NzcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi41cmVtICkpIHtcbiAgICAubWVudV9fbGlzdCB7XG4gICAgICBnYXA6IGNsYW1wKCAxLjg3NXJlbSAsIDEuNjQ3NzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAxLjY0NzcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi41cmVtICkpIHtcbiAgICAubWVudV9fbGlzdCB7XG4gICAgICBnYXA6IGNhbGMoMS44NzVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5tZW51X19saXN0IHtcbiAgICBnYXA6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLm1lbnVfX2xpc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgZmxleDogMjtcbiAgfVxufVxuLm1lbnVfX2xpbmsge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5tZW51X19saW5rIHtcbiAgICBwYWRkaW5nLXRvcDogMi4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKSkge1xuICAgIC5tZW51X19saW5rIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKSkge1xuICAgIC5tZW51X19saW5rIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDEuNTYyNXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1lbnVfX2xpbmsge1xuICAgIHBhZGRpbmctdG9wOiAxLjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5tZW51X19saW5rIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMi4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKSkge1xuICAgIC5tZW51X19saW5rIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMzM1MjI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjE4NzVyZW0gKSkge1xuICAgIC5tZW51X19saW5rIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDEuNTYyNXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1lbnVfX2xpbmsge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAubWVudV9fbGluayB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG59XG4ubWVudV9fbGluazo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMDtcbiAgdG9wOiA0NXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjVzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuLm1lbnVfX2xpbms6aG92ZXI6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5tZW51X19saW5rLmN1cnJlbnQ6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnNvY2lhbHMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc29jaWFscy1saXN0IHtcbiAgICBnYXA6IDAuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZ2FwOiBjbGFtcCggMC42MjVyZW0gLCAwLjUxMTM2MzYzNjRyZW0gICsgIDAuNTY4MTgxODE4MnZ3ICwgMC45Mzc1cmVtICkpIHtcbiAgICAuc29jaWFscy1saXN0IHtcbiAgICAgIGdhcDogY2xhbXAoIDAuNjI1cmVtICwgMC41MTEzNjM2MzY0cmVtICArICAwLjU2ODE4MTgxODJ2dyAsIDAuOTM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChnYXA6IGNsYW1wKCAwLjYyNXJlbSAsIDAuNTExMzYzNjM2NHJlbSAgKyAgMC41NjgxODE4MTgydncgLCAwLjkzNzVyZW0gKSkge1xuICAgIC5zb2NpYWxzLWxpc3Qge1xuICAgICAgZ2FwOiBjYWxjKDAuNjI1cmVtICsgMC4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnNvY2lhbHMtbGlzdCB7XG4gICAgZ2FwOiAwLjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5zb2NpYWxzLWxpc3Qge1xuICAgIGdhcDogMzBweDtcbiAgICBmbGV4OiAxO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLnNvY2lhbHMtbGlzdF9faWNvbiB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAubWVudV9fYm9keSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTJweDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1ODBweCkge1xuICAuaWNvbi1tZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLmljb24tbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxLjU2MjVyZW07XG4gICAgaGVpZ2h0OiAwLjg3NXJlbTtcbiAgICB6LWluZGV4OiA1O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIGFuZCAoYW55LWhvdmVyOiBub25lKSB7XG4gIC5pY29uLW1lbnUge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5pY29uLW1lbnUgc3BhbiwgLmljb24tbWVudTo6YmVmb3JlLCAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDAuMTI1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbiAgLmljb24tbWVudTo6YmVmb3JlIHtcbiAgICB0b3A6IDA7XG4gIH1cbiAgLmljb24tbWVudTo6YWZ0ZXIge1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5pY29uLW1lbnUgc3BhbiB7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDAuMDYyNXJlbSk7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51ICsgLm1lbnVfX2JvZHkge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnUgc3BhbiB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51OjpiZWZvcmUge1xuICAgIHRvcDogY2FsYyg1MCUgLSAwLjA2MjVyZW0pO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgYm90dG9tOiBjYWxjKDUwJSAtIDAuMDYyNXJlbSk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mb290ZXIge1xuICAgIHBhZGRpbmctdG9wOiA3LjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgMC42NTkwOTA5MDkxcmVtICArICA5LjIwNDU0NTQ1NDV2dyAsIDcuNTYyNXJlbSApKSB7XG4gICAgLmZvb3RlciB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIDAuNjU5MDkwOTA5MXJlbSAgKyAgOS4yMDQ1NDU0NTQ1dncgLCA3LjU2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAwLjY1OTA5MDkwOTFyZW0gICsgIDkuMjA0NTQ1NDU0NXZ3ICwgNy41NjI1cmVtICkpIHtcbiAgICAuZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDIuNXJlbSArIDUuMDYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb290ZXIge1xuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiA4LjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCA0LjM3NXJlbSAsIDMuMDExMzYzNjM2NHJlbSAgKyAgNi44MTgxODE4MTgydncgLCA4LjEyNXJlbSApKSB7XG4gICAgLmZvb3RlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMy4wMTEzNjM2MzY0cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDguMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC4zNzVyZW0gLCAzLjAxMTM2MzYzNjRyZW0gICsgIDYuODE4MTgxODE4MnZ3ICwgOC4xMjVyZW0gKSkge1xuICAgIC5mb290ZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoNC4zNzVyZW0gKyAzLjc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvb3RlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDQuMzc1cmVtO1xuICB9XG59XG4uZm9vdGVyX19jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZm9vdGVyX19jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTI1JTtcbiAgdG9wOiAyMyU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mb290ZXJfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIHdpZHRoOiA0MC4wNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKSkge1xuICAgIC5mb290ZXJfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApKSB7XG4gICAgLmZvb3Rlcl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgICB3aWR0aDogY2FsYygxMi41cmVtICsgMjcuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb290ZXJfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZm9vdGVyX19jb250YWluZXI6OmFmdGVyIHtcbiAgICBoZWlnaHQ6IDQwLjA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGhlaWdodDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKSkge1xuICAgIC5mb290ZXJfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICkpIHtcbiAgICAuZm9vdGVyX19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIGhlaWdodDogY2FsYygxMi41cmVtICsgMjcuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb290ZXJfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIGhlaWdodDogMTIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSB7XG4gIC5mb290ZXJfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmJsb2NrLXdyYXBwZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5ibG9jay13cmFwcGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogODBweDtcbiAgfVxufVxuXG4ubGVmdC1ibG9jayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5sZWZ0LWJsb2NrIHtcbiAgICB3aWR0aDogMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDE0Ljc3MjcyNzI3MjdyZW0gICsgIDEzLjYzNjM2MzYzNjR2dyAsIDI1cmVtICkpIHtcbiAgICAubGVmdC1ibG9jayB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxNC43NzI3MjcyNzI3cmVtICArICAxMy42MzYzNjM2MzY0dncgLCAyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxNC43NzI3MjcyNzI3cmVtICArICAxMy42MzYzNjM2MzY0dncgLCAyNXJlbSApKSB7XG4gICAgLmxlZnQtYmxvY2sge1xuICAgICAgd2lkdGg6IGNhbGMoMTcuNXJlbSArIDcuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5sZWZ0LWJsb2NrIHtcbiAgICB3aWR0aDogMTcuNXJlbTtcbiAgfVxufVxuLmxlZnQtYmxvY2s6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00MCU7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDIwMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubGVmdC1ibG9jazo6YWZ0ZXIge1xuICAgIGhlaWdodDogMTUwJTtcbiAgfVxufVxuLmxlZnQtYmxvY2tfX3RleHQge1xuICB3aWR0aDogMjQwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5sZWZ0LWJsb2NrX190ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAxLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLXRvcDogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNTk2NTkwOTA5MXJlbSAgKyAgMS43MDQ1NDU0NTQ1dncgLCAxLjg3NXJlbSApKSB7XG4gICAgLmxlZnQtYmxvY2tfX3RleHQge1xuICAgICAgbWFyZ2luLXRvcDogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNTk2NTkwOTA5MXJlbSAgKyAgMS43MDQ1NDU0NTQ1dncgLCAxLjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tdG9wOiBjbGFtcCggMC45Mzc1cmVtICwgMC41OTY1OTA5MDkxcmVtICArICAxLjcwNDU0NTQ1NDV2dyAsIDEuODc1cmVtICkpIHtcbiAgICAubGVmdC1ibG9ja19fdGV4dCB7XG4gICAgICBtYXJnaW4tdG9wOiBjYWxjKDAuOTM3NXJlbSArIDAuOTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5sZWZ0LWJsb2NrX190ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5sZWZ0LWJsb2NrX190ZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOiA0Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMi4xODc1cmVtICwgMS4yNTU2ODE4MTgycmVtICArICA0LjY1OTA5MDkwOTF2dyAsIDQuNzVyZW0gKSkge1xuICAgIC5sZWZ0LWJsb2NrX190ZXh0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAyLjE4NzVyZW0gLCAxLjI1NTY4MTgxODJyZW0gICsgIDQuNjU5MDkwOTA5MXZ3ICwgNC43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMi4xODc1cmVtICwgMS4yNTU2ODE4MTgycmVtICArICA0LjY1OTA5MDkwOTF2dyAsIDQuNzVyZW0gKSkge1xuICAgIC5sZWZ0LWJsb2NrX190ZXh0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMi4xODc1cmVtICsgMi41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmxlZnQtYmxvY2tfX3RleHQge1xuICAgIG1hcmdpbi1ib3R0b206IDIuMTg3NXJlbTtcbiAgfVxufVxuXG4uZm9vdGVyLWxvZ28ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZm9vdGVyLWxvZ28ge1xuICAgIGZvbnQtc2l6ZTogMi4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDEuMjVyZW0gLCAwLjkzMTgxODE4MThyZW0gICsgIDEuNTkwOTA5MDkwOXZ3ICwgMi4xMjVyZW0gKSkge1xuICAgIC5mb290ZXItbG9nbyB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAxLjI1cmVtICwgMC45MzE4MTgxODE4cmVtICArICAxLjU5MDkwOTA5MDl2dyAsIDIuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDEuMjVyZW0gLCAwLjkzMTgxODE4MThyZW0gICsgIDEuNTkwOTA5MDkwOXZ3ICwgMi4xMjVyZW0gKSkge1xuICAgIC5mb290ZXItbG9nbyB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMS4yNXJlbSArIDAuODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvb3Rlci1sb2dvIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNvbnRhY3RzIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1LjA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAxLjU2ODE4MTgxODJyZW0gICsgIDQuNjU5MDkwOTA5MXZ3ICwgNS4wNjI1cmVtICkpIHtcbiAgICAuY29udGFjdHMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIDEuNTY4MTgxODE4MnJlbSAgKyAgNC42NTkwOTA5MDkxdncgLCA1LjA2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIDEuNTY4MTgxODE4MnJlbSAgKyAgNC42NTkwOTA5MDkxdncgLCA1LjA2MjVyZW0gKSkge1xuICAgIC5jb250YWN0cyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDIuNXJlbSArIDIuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jb250YWN0cyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICB9XG59XG4uY29udGFjdHNfX2xpbmsge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG59XG5cbi5zb2NpYWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4ucmlnaHQtYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnJpZ2h0LWJsb2NrIHtcbiAgICBtYXJnaW4tbGVmdDogNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWxlZnQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtMi4yNzI3MjcxODc1cmVtICArICAxMS4zNjM2MzYyNXZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLnJpZ2h0LWJsb2NrIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTIuMjcyNzI3MTg3NXJlbSAgKyAgMTEuMzYzNjM2MjV2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWxlZnQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtMi4yNzI3MjcxODc1cmVtICArICAxMS4zNjM2MzYyNXZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLnJpZ2h0LWJsb2NrIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDAuMDAwMDAwMDYyNXJlbSArIDYuMjQ5OTk5OTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5yaWdodC1ibG9jayB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMDAwMDAwMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLnJpZ2h0LWJsb2NrIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuXG4uc3Vic2NyaWJlIHtcbiAgY29sb3I6ICM5Njk2OTY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zdWJzY3JpYmUge1xuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAwLjc5NTQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMi41cmVtICkpIHtcbiAgICAuc3Vic2NyaWJlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgMC43OTU0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDIuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIDAuNzk1NDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAyLjVyZW0gKSkge1xuICAgIC5zdWJzY3JpYmUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjI1cmVtICsgMS4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zdWJzY3JpYmUge1xuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gIH1cbn1cblxuLmZvb3Rlci1mb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZvb3Rlci1mb3JtIHtcbiAgICB3aWR0aDogMzUuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxMC45MDkwOTA5MDkxcmVtICArICAzMi45NTQ1NDU0NTQ1dncgLCAzNS42MjVyZW0gKSkge1xuICAgIC5mb290ZXItZm9ybSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxMC45MDkwOTA5MDkxcmVtICArICAzMi45NTQ1NDU0NTQ1dncgLCAzNS42MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTAuOTA5MDkwOTA5MXJlbSAgKyAgMzIuOTU0NTQ1NDU0NXZ3ICwgMzUuNjI1cmVtICkpIHtcbiAgICAuZm9vdGVyLWZvcm0ge1xuICAgICAgd2lkdGg6IGNhbGMoMTcuNXJlbSArIDE4LjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb290ZXItZm9ybSB7XG4gICAgd2lkdGg6IDE3LjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mb290ZXItZm9ybSB7XG4gICAgbWFyZ2luLWJvdHRvbTogOC4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMy43NXJlbSAsIDIuMTM2MzYzNjM2NHJlbSAgKyAgOC4wNjgxODE4MTgydncgLCA4LjE4NzVyZW0gKSkge1xuICAgIC5mb290ZXItZm9ybSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMy43NXJlbSAsIDIuMTM2MzYzNjM2NHJlbSAgKyAgOC4wNjgxODE4MTgydncgLCA4LjE4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDMuNzVyZW0gLCAyLjEzNjM2MzYzNjRyZW0gICsgIDguMDY4MTgxODE4MnZ3ICwgOC4xODc1cmVtICkpIHtcbiAgICAuZm9vdGVyLWZvcm0ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygzLjc1cmVtICsgNC40Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvb3Rlci1mb3JtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjc1cmVtO1xuICB9XG59XG4uZm9vdGVyLWZvcm1fX2lucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICBjb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mb290ZXItZm9ybV9faW5wdXQge1xuICAgIHdpZHRoOiAzNS42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDEwLjkwOTA5MDkwOTFyZW0gICsgIDMyLjk1NDU0NTQ1NDV2dyAsIDM1LjYyNXJlbSApKSB7XG4gICAgLmZvb3Rlci1mb3JtX19pbnB1dCB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxMC45MDkwOTA5MDkxcmVtICArICAzMi45NTQ1NDU0NTQ1dncgLCAzNS42MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTAuOTA5MDkwOTA5MXJlbSAgKyAgMzIuOTU0NTQ1NDU0NXZ3ICwgMzUuNjI1cmVtICkpIHtcbiAgICAuZm9vdGVyLWZvcm1fX2lucHV0IHtcbiAgICAgIHdpZHRoOiBjYWxjKDE3LjVyZW0gKyAxOC4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9vdGVyLWZvcm1fX2lucHV0IHtcbiAgICB3aWR0aDogMTcuNXJlbTtcbiAgfVxufVxuLmZvb3Rlci1mb3JtX19pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDE3cHg7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLCBib3R0b20gMC40cyBlYXNlO1xufVxuLmZvb3Rlci1mb3JtX19pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xuICBib3R0b206IDM0cHg7XG59XG4uZm9vdGVyLWZvcm1fX2J1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMTdweDtcbiAgd2lkdGg6IDY0cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLmZvb3Rlci1mb3JtX19idXR0b246OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiA1cHg7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5saW5rcy1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDYxLjk4cHgpIHtcbiAgLmxpbmtzLWJsb2NrIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDYxLjk4cHgpIGFuZCAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5saW5rcy1ibG9jayB7XG4gICAgZ2FwOiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDYxLjk4cHgpIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGdhcDogY2xhbXAoIDIuNXJlbSAsIDIuMDQ1NDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAzLjc1cmVtICkpIHtcbiAgICAubGlua3MtYmxvY2sge1xuICAgICAgZ2FwOiBjbGFtcCggMi41cmVtICwgMi4wNDU0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDMuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMi41cmVtICwgMi4wNDU0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5saW5rcy1ibG9jayB7XG4gICAgICBnYXA6IGNhbGMoMi41cmVtICsgMS4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NjEuOThweCkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmxpbmtzLWJsb2NrIHtcbiAgICBnYXA6IDIuNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZm9vdGVyLW5hdjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA3Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAzLjc1cmVtICwgMi4yOTU0NTQ1NDU1cmVtICArICA3LjI3MjcyNzI3Mjd2dyAsIDcuNzVyZW0gKSkge1xuICAgIC5mb290ZXItbmF2OmZpcnN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogY2xhbXAoIDMuNzVyZW0gLCAyLjI5NTQ1NDU0NTVyZW0gICsgIDcuMjcyNzI3MjcyN3Z3ICwgNy43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAzLjc1cmVtICwgMi4yOTU0NTQ1NDU1cmVtICArICA3LjI3MjcyNzI3Mjd2dyAsIDcuNzVyZW0gKSkge1xuICAgIC5mb290ZXItbmF2OmZpcnN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygzLjc1cmVtICsgNCAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb290ZXItbmF2OmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NjEuOThweCkge1xuICAuZm9vdGVyLW5hdjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG4uZm9vdGVyLW5hdjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZvb3Rlci1uYXYge1xuICAgIG1hcmdpbi1yaWdodDogNS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAyLjVyZW0gLCAxLjQwOTA5MDkwOTFyZW0gICsgIDUuNDU0NTQ1NDU0NXZ3ICwgNS41cmVtICkpIHtcbiAgICAuZm9vdGVyLW5hdiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNsYW1wKCAyLjVyZW0gLCAxLjQwOTA5MDkwOTFyZW0gICsgIDUuNDU0NTQ1NDU0NXZ3ICwgNS41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1yaWdodDogY2xhbXAoIDIuNXJlbSAsIDEuNDA5MDkwOTA5MXJlbSAgKyAgNS40NTQ1NDU0NTQ1dncgLCA1LjVyZW0gKSkge1xuICAgIC5mb290ZXItbmF2IHtcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygyLjVyZW0gKyAzICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvb3Rlci1uYXYge1xuICAgIG1hcmdpbi1yaWdodDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDYxLjk4cHgpIHtcbiAgLmZvb3Rlci1uYXYge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufVxuLmZvb3Rlci1uYXZfX2xpbmsge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb290ZXItbmF2X19saW5rOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAwO1xuICB0b3A6IDEwcHg7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuNXMgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG4uZm9vdGVyLW5hdl9fbGluazpob3Zlcjo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uZm9vdGVyLWNyZWRpdHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDE1cHg7XG4gIHotaW5kZXg6IDI7XG4gIGNvbG9yOiAjOTY5Njk2O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIHdpZHRoOiAxNDlweDtcbiAgdGV4dC13cmFwOiBub3dyYXA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjMxLjk4cHgpIHtcbiAgLmZvb3Rlci1jcmVkaXRzIHtcbiAgICBib3R0b206IC01MHB4O1xuICB9XG59XG5cbi5oZXJvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5oZXJvIHtcbiAgICBoZWlnaHQ6IDMwcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAxNi44NzVyZW0gLCAxMi4xMDIyNzI3MjczcmVtICArICAyMy44NjM2MzYzNjM2dncgLCAzMHJlbSApKSB7XG4gICAgLmhlcm8ge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggMTYuODc1cmVtICwgMTIuMTAyMjcyNzI3M3JlbSAgKyAgMjMuODYzNjM2MzYzNnZ3ICwgMzByZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggMTYuODc1cmVtICwgMTIuMTAyMjcyNzI3M3JlbSAgKyAgMjMuODYzNjM2MzYzNnZ3ICwgMzByZW0gKSkge1xuICAgIC5oZXJvIHtcbiAgICAgIGhlaWdodDogY2FsYygxNi44NzVyZW0gKyAxMy4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaGVybyB7XG4gICAgaGVpZ2h0OiAxNi44NzVyZW07XG4gIH1cbn1cbi5oZXJvX19jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zd2lwZXItY291bnRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItY291bnRlciB7XG4gICAgYm90dG9tOiA0LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoYm90dG9tOiBjbGFtcCggMS44NzVyZW0gLCAwLjk2NTkwOTA5MDlyZW0gICsgIDQuNTQ1NDU0NTQ1NXZ3ICwgNC4zNzVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlciB7XG4gICAgICBib3R0b206IGNsYW1wKCAxLjg3NXJlbSAsIDAuOTY1OTA5MDkwOXJlbSAgKyAgNC41NDU0NTQ1NDU1dncgLCA0LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChib3R0b206IGNsYW1wKCAxLjg3NXJlbSAsIDAuOTY1OTA5MDkwOXJlbSAgKyAgNC41NDU0NTQ1NDU1dncgLCA0LjM3NXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyIHtcbiAgICAgIGJvdHRvbTogY2FsYygxLjg3NXJlbSArIDIuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItY291bnRlciB7XG4gICAgYm90dG9tOiAxLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyIHtcbiAgICBsZWZ0OiAxMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChsZWZ0OiBjbGFtcCggMC45Mzc1cmVtICwgLTMuMjY3MDQ1NDU0NXJlbSAgKyAgMjEuMDIyNzI3MjcyN3Z3ICwgMTIuNXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyIHtcbiAgICAgIGxlZnQ6IGNsYW1wKCAwLjkzNzVyZW0gLCAtMy4yNjcwNDU0NTQ1cmVtICArICAyMS4wMjI3MjcyNzI3dncgLCAxMi41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGxlZnQ6IGNsYW1wKCAwLjkzNzVyZW0gLCAtMy4yNjcwNDU0NTQ1cmVtICArICAyMS4wMjI3MjcyNzI3dncgLCAxMi41cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXIge1xuICAgICAgbGVmdDogY2FsYygwLjkzNzVyZW0gKyAxMS41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyIHtcbiAgICBsZWZ0OiAwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItY291bnRlciB7XG4gICAgd2lkdGg6IDVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMy4xMjVyZW0gLCAyLjQ0MzE4MTgxODJyZW0gICsgIDMuNDA5MDkwOTA5MXZ3ICwgNXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMy4xMjVyZW0gLCAyLjQ0MzE4MTgxODJyZW0gICsgIDMuNDA5MDkwOTA5MXZ3ICwgNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDMuMTI1cmVtICwgMi40NDMxODE4MTgycmVtICArICAzLjQwOTA5MDkwOTF2dyAsIDVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlciB7XG4gICAgICB3aWR0aDogY2FsYygzLjEyNXJlbSArIDEuODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyIHtcbiAgICB3aWR0aDogMy4xMjVyZW07XG4gIH1cbn1cbi5zd2lwZXItY291bnRlcl9faXRlbTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDdweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItY291bnRlcl9faXRlbTo6YWZ0ZXIge1xuICAgIHdpZHRoOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDAuNjI1cmVtICwgMC4zOTc3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlcl9faXRlbTo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IGNsYW1wKCAwLjYyNXJlbSAsIDAuMzk3NzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAxLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMC42MjVyZW0gLCAwLjM5NzcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyX19pdGVtOjphZnRlciB7XG4gICAgICB3aWR0aDogY2FsYygwLjYyNXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyX19pdGVtOjphZnRlciB7XG4gICAgd2lkdGg6IDAuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW06OmFmdGVyIHtcbiAgICBsZWZ0OiAxLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGVmdDogY2xhbXAoIDEuMTg3NXJlbSAsIDAuOTM3NXJlbSAgKyAgMS4yNXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlcl9faXRlbTo6YWZ0ZXIge1xuICAgICAgbGVmdDogY2xhbXAoIDEuMTg3NXJlbSAsIDAuOTM3NXJlbSAgKyAgMS4yNXZ3ICwgMS44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGVmdDogY2xhbXAoIDEuMTg3NXJlbSAsIDAuOTM3NXJlbSAgKyAgMS4yNXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlcl9faXRlbTo6YWZ0ZXIge1xuICAgICAgbGVmdDogY2FsYygxLjE4NzVyZW0gKyAwLjY4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW06OmFmdGVyIHtcbiAgICBsZWZ0OiAxLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItY291bnRlcl9faXRlbXNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjcwNDU0NTQ1NDVyZW0gICsgIDAuMjI3MjcyNzI3M3Z3ICwgMC44NzVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlcl9faXRlbXNwYW4ge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNzA0NTQ1NDU0NXJlbSAgKyAgMC4yMjcyNzI3MjczdncgLCAwLjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC43MDQ1NDU0NTQ1cmVtICArICAwLjIyNzI3MjcyNzN2dyAsIDAuODc1cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW1zcGFuIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjc1cmVtICsgMC4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW1zcGFuIHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cbn1cblxuLmJsb2NrLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiA0MHB4IDAgNDBweCAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJsb2NrLXRpdGxlIHtcbiAgICB0b3A6IDEwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHRvcDogY2xhbXAoIDMuMTI1cmVtICwgMC4yODQwOTA5MDkxcmVtICArICAxNC4yMDQ1NDU0NTQ1dncgLCAxMC45Mzc1cmVtICkpIHtcbiAgICAuYmxvY2stdGl0bGUge1xuICAgICAgdG9wOiBjbGFtcCggMy4xMjVyZW0gLCAwLjI4NDA5MDkwOTFyZW0gICsgIDE0LjIwNDU0NTQ1NDV2dyAsIDEwLjkzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAodG9wOiBjbGFtcCggMy4xMjVyZW0gLCAwLjI4NDA5MDkwOTFyZW0gICsgIDE0LjIwNDU0NTQ1NDV2dyAsIDEwLjkzNzVyZW0gKSkge1xuICAgIC5ibG9jay10aXRsZSB7XG4gICAgICB0b3A6IGNhbGMoMy4xMjVyZW0gKyA3LjgxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYmxvY2stdGl0bGUge1xuICAgIHRvcDogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5ibG9jay10aXRsZSB7XG4gICAgbGVmdDogMTIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGVmdDogY2xhbXAoIDEuODc1cmVtICwgLTEuOTg4NjM2MzYzNnJlbSAgKyAgMTkuMzE4MTgxODE4MnZ3ICwgMTIuNXJlbSApKSB7XG4gICAgLmJsb2NrLXRpdGxlIHtcbiAgICAgIGxlZnQ6IGNsYW1wKCAxLjg3NXJlbSAsIC0xLjk4ODYzNjM2MzZyZW0gICsgIDE5LjMxODE4MTgxODJ2dyAsIDEyLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGVmdDogY2xhbXAoIDEuODc1cmVtICwgLTEuOTg4NjM2MzYzNnJlbSAgKyAgMTkuMzE4MTgxODE4MnZ3ICwgMTIuNXJlbSApKSB7XG4gICAgLmJsb2NrLXRpdGxlIHtcbiAgICAgIGxlZnQ6IGNhbGMoMS44NzVyZW0gKyAxMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYmxvY2stdGl0bGUge1xuICAgIGxlZnQ6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYmxvY2stdGl0bGUge1xuICAgIHdpZHRoOiAzMi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxOC43NXJlbSAsIDEzLjg0MDkwOTA5MDlyZW0gICsgIDI0LjU0NTQ1NDU0NTV2dyAsIDMyLjI1cmVtICkpIHtcbiAgICAuYmxvY2stdGl0bGUge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxOC43NXJlbSAsIDEzLjg0MDkwOTA5MDlyZW0gICsgIDI0LjU0NTQ1NDU0NTV2dyAsIDMyLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTguNzVyZW0gLCAxMy44NDA5MDkwOTA5cmVtICArICAyNC41NDU0NTQ1NDU1dncgLCAzMi4yNXJlbSApKSB7XG4gICAgLmJsb2NrLXRpdGxlIHtcbiAgICAgIHdpZHRoOiBjYWxjKDE4Ljc1cmVtICsgMTMuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5ibG9jay10aXRsZSB7XG4gICAgd2lkdGg6IDE4Ljc1cmVtO1xuICB9XG59XG4uYmxvY2stdGl0bGVfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiA0cHggNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYmxvY2stdGl0bGVfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDQuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAyLjI1cmVtICwgMS40NzcyNzI3MjczcmVtICArICAzLjg2MzYzNjM2MzZ2dyAsIDQuMzc1cmVtICkpIHtcbiAgICAuYmxvY2stdGl0bGVfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDIuMjVyZW0gLCAxLjQ3NzI3MjcyNzNyZW0gICsgIDMuODYzNjM2MzYzNnZ3ICwgNC4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMi4yNXJlbSAsIDEuNDc3MjcyNzI3M3JlbSAgKyAgMy44NjM2MzYzNjM2dncgLCA0LjM3NXJlbSApKSB7XG4gICAgLmJsb2NrLXRpdGxlX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMi4yNXJlbSArIDIuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJsb2NrLXRpdGxlX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xuICB9XG59XG4uYmxvY2stdGl0bGVfX3RpdGxlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmJsb2NrLXRpdGxlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDcwcHg7XG59XG5cbi5idG4tdmlldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6IHZhcigtLWRhcmstY2wpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UsIGJveC1zaGFkb3cgMC40cyBlYXNlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICB0b3A6IDI0LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAodG9wOiBjbGFtcCggMTByZW0gLCA0Ljc3MjcyNzI3MjdyZW0gICsgIDI2LjEzNjM2MzYzNjR2dyAsIDI0LjM3NXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIHRvcDogY2xhbXAoIDEwcmVtICwgNC43NzI3MjcyNzI3cmVtICArICAyNi4xMzYzNjM2MzY0dncgLCAyNC4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAodG9wOiBjbGFtcCggMTByZW0gLCA0Ljc3MjcyNzI3MjdyZW0gICsgIDI2LjEzNjM2MzYzNjR2dyAsIDI0LjM3NXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIHRvcDogY2FsYygxMHJlbSArIDE0LjM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG4tdmlldyB7XG4gICAgdG9wOiAxMHJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICByaWdodDogMTEuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChyaWdodDogY2xhbXAoIDEuMjVyZW0gLCAtMi4zNDA5MDkwOTA5cmVtICArICAxNy45NTQ1NDU0NTQ1dncgLCAxMS4xMjVyZW0gKSkge1xuICAgIC5idG4tdmlldyB7XG4gICAgICByaWdodDogY2xhbXAoIDEuMjVyZW0gLCAtMi4zNDA5MDkwOTA5cmVtICArICAxNy45NTQ1NDU0NTQ1dncgLCAxMS4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocmlnaHQ6IGNsYW1wKCAxLjI1cmVtICwgLTIuMzQwOTA5MDkwOXJlbSAgKyAgMTcuOTU0NTQ1NDU0NXZ3ICwgMTEuMTI1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgcmlnaHQ6IGNhbGMoMS4yNXJlbSArIDkuODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICByaWdodDogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICB3aWR0aDogNS42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMy40Mzc1cmVtICwgMi42NDIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgd2lkdGg6IGNsYW1wKCAzLjQzNzVyZW0gLCAyLjY0MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNS42MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAzLjQzNzVyZW0gLCAyLjY0MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNS42MjVyZW0gKSkge1xuICAgIC5idG4tdmlldyB7XG4gICAgICB3aWR0aDogY2FsYygzLjQzNzVyZW0gKyAyLjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIHdpZHRoOiAzLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG4tdmlldyB7XG4gICAgaGVpZ2h0OiA1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggMy40Mzc1cmVtICwgMi42NDIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggMy40Mzc1cmVtICwgMi42NDIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDUuNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDMuNDM3NXJlbSAsIDIuNjQyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA1LjYyNXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIGhlaWdodDogY2FsYygzLjQzNzVyZW0gKyAyLjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIGhlaWdodDogMy40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC42ODE4MTgxODE4cmVtICArICAwLjM0MDkwOTA5MDl2dyAsIDAuOTM3NXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjY4MTgxODE4MThyZW0gICsgIDAuMzQwOTA5MDkwOXZ3ICwgMC45Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjY4MTgxODE4MThyZW0gICsgIDAuMzQwOTA5MDkwOXZ3ICwgMC45Mzc1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuNzVyZW0gKyAwLjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgfVxufVxuLmJ0bi12aWV3OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBib3gtc2hhZG93OiAycHggMnB4IDE1cHggOHB4ICNmZmY7XG59XG5cbi5zd2lwZXItc2xpZGVfX2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1zbGlkZV9faW1nIHtcbiAgICBoZWlnaHQ6IDM2LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAxMy43NXJlbSAsIDUuNTY4MTgxODE4MnJlbSAgKyAgNDAuOTA5MDkwOTA5MXZ3ICwgMzYuMjVyZW0gKSkge1xuICAgIC5zd2lwZXItc2xpZGVfX2ltZyB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCAxMy43NXJlbSAsIDUuNTY4MTgxODE4MnJlbSAgKyAgNDAuOTA5MDkwOTA5MXZ3ICwgMzYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggMTMuNzVyZW0gLCA1LjU2ODE4MTgxODJyZW0gICsgIDQwLjkwOTA5MDkwOTF2dyAsIDM2LjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNsaWRlX19pbWcge1xuICAgICAgaGVpZ2h0OiBjYWxjKDEzLjc1cmVtICsgMjIuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItc2xpZGVfX2ltZyB7XG4gICAgaGVpZ2h0OiAxMy43NXJlbTtcbiAgfVxufVxuXG4uc3dpcGVyLWJ1dHRvbi1wcmV2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIyNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1idXR0b24tcHJldiB7XG4gICAgbGVmdDogLTMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChsZWZ0OiBjbGFtcCggLTMuMTI1cmVtICwgMzUuMjI3MjcyNzI3M3JlbSAgKyAgLTUxLjEzNjM2MzYzNjR2dyAsIDI1cmVtICkpIHtcbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcbiAgICAgIGxlZnQ6IGNsYW1wKCAtMy4xMjVyZW0gLCAzNS4yMjcyNzI3MjczcmVtICArICAtNTEuMTM2MzYzNjM2NHZ3ICwgMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGVmdDogY2xhbXAoIC0zLjEyNXJlbSAsIDM1LjIyNzI3MjcyNzNyZW0gICsgIC01MS4xMzYzNjM2MzY0dncgLCAyNXJlbSApKSB7XG4gICAgLnN3aXBlci1idXR0b24tcHJldiB7XG4gICAgICBsZWZ0OiBjYWxjKDI1cmVtICsgLTI4LjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICAgIGxlZnQ6IDI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTU4cHgpIHtcbiAgLnN3aXBlci1idXR0b24tcHJldiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIyNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgcmlnaHQ6IC0zLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocmlnaHQ6IGNsYW1wKCAtMy4xMjVyZW0gLCAzNS4yMjcyNzI3MjczcmVtICArICAtNTEuMTM2MzYzNjM2NHZ3ICwgMjVyZW0gKSkge1xuICAgIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgICAgcmlnaHQ6IGNsYW1wKCAtMy4xMjVyZW0gLCAzNS4yMjcyNzI3MjczcmVtICArICAtNTEuMTM2MzYzNjM2NHZ3ICwgMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocmlnaHQ6IGNsYW1wKCAtMy4xMjVyZW0gLCAzNS4yMjcyNzI3MjczcmVtICArICAtNTEuMTM2MzYzNjM2NHZ3ICwgMjVyZW0gKSkge1xuICAgIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgICAgcmlnaHQ6IGNhbGMoMjVyZW0gKyAtMjguMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgcmlnaHQ6IDI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTU4cHgpIHtcbiAgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYWJvdXQtdXMge1xuICAgIHBhZGRpbmctdG9wOiAxNnJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAtMi40MDkwOTA5MDkxcmVtICArICAyNC41NDU0NTQ1NDU1dncgLCAxNnJlbSApKSB7XG4gICAgLmFib3V0LXVzIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgLTIuNDA5MDkwOTA5MXJlbSAgKyAgMjQuNTQ1NDU0NTQ1NXZ3ICwgMTZyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAtMi40MDkwOTA5MDkxcmVtICArICAyNC41NDU0NTQ1NDU1dncgLCAxNnJlbSApKSB7XG4gICAgLmFib3V0LXVzIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDIuNXJlbSArIDEzLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYWJvdXQtdXMge1xuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XG4gIH1cbn1cbi5hYm91dC11c19fY29udGFpbmVyLS1iaWcge1xuICB3aWR0aDogMTMwNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmludHJvLWJsb2NrIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyby1ibG9jayB7XG4gICAgd2lkdGg6IDM4LjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTguMTI1cmVtICwgMTAuNzM4NjM2MzYzNnJlbSAgKyAgMzYuOTMxODE4MTgxOHZ3ICwgMzguNDM3NXJlbSApKSB7XG4gICAgLmludHJvLWJsb2NrIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTguMTI1cmVtICwgMTAuNzM4NjM2MzYzNnJlbSAgKyAgMzYuOTMxODE4MTgxOHZ3ICwgMzguNDM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE4LjEyNXJlbSAsIDEwLjczODYzNjM2MzZyZW0gICsgIDM2LjkzMTgxODE4MTh2dyAsIDM4LjQzNzVyZW0gKSkge1xuICAgIC5pbnRyby1ibG9jayB7XG4gICAgICB3aWR0aDogY2FsYygxOC4xMjVyZW0gKyAyMC4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvLWJsb2NrIHtcbiAgICB3aWR0aDogMTguMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm8tYmxvY2sge1xuICAgIG1hcmdpbi1ib3R0b206IDUuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIDEuMjk1NDU0NTQ1NXJlbSAgKyAgNi4wMjI3MjcyNzI3dncgLCA1LjgxMjVyZW0gKSkge1xuICAgIC5pbnRyby1ibG9jayB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMi41cmVtICwgMS4yOTU0NTQ1NDU1cmVtICArICA2LjAyMjcyNzI3Mjd2dyAsIDUuODEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMi41cmVtICwgMS4yOTU0NTQ1NDU1cmVtICArICA2LjAyMjcyNzI3Mjd2dyAsIDUuODEyNXJlbSApKSB7XG4gICAgLmludHJvLWJsb2NrIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMi41cmVtICsgMy4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvLWJsb2NrIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gIH1cbn1cbi5pbnRyby1ibG9ja19fbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvLWJsb2NrX19sYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC43MTAyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDEuNTYyNXJlbSApKSB7XG4gICAgLmludHJvLWJsb2NrX19sYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC43MTAyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDEuNTYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC43MTAyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDEuNTYyNXJlbSApKSB7XG4gICAgLmludHJvLWJsb2NrX19sYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDAuOTM3NXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvLWJsb2NrX19sYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xuICB9XG59XG4uaW50cm8tYmxvY2tfX3RpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyby1ibG9ja19fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDEuNXJlbSAsIDEuMjcyNzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjEyNXJlbSApKSB7XG4gICAgLmludHJvLWJsb2NrX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAxLjVyZW0gLCAxLjI3MjcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMS4yNzI3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTI1cmVtICkpIHtcbiAgICAuaW50cm8tYmxvY2tfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyby1ibG9ja19fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5cbi5pbmZvLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9jayB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTByZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAzLjc1cmVtICwgMS40NzcyNzI3MjczcmVtICArICAxMS4zNjM2MzYzNjM2dncgLCAxMHJlbSApKSB7XG4gICAgLmluZm8tYmxvY2sge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDMuNzVyZW0gLCAxLjQ3NzI3MjcyNzNyZW0gICsgIDExLjM2MzYzNjM2MzZ2dyAsIDEwcmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAzLjc1cmVtICwgMS40NzcyNzI3MjczcmVtICArICAxMS4zNjM2MzYzNjM2dncgLCAxMHJlbSApKSB7XG4gICAgLmluZm8tYmxvY2sge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygzLjc1cmVtICsgNi4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9jayB7XG4gICAgZ2FwOiA2Ljg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZ2FwOiBjbGFtcCggMi41cmVtICwgMC45MDkwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDYuODc1cmVtICkpIHtcbiAgICAuaW5mby1ibG9jayB7XG4gICAgICBnYXA6IGNsYW1wKCAyLjVyZW0gLCAwLjkwOTA5MDkwOTFyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgNi44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMi41cmVtICwgMC45MDkwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDYuODc1cmVtICkpIHtcbiAgICAuaW5mby1ibG9jayB7XG4gICAgICBnYXA6IGNhbGMoMi41cmVtICsgNC4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW5mby1ibG9jayB7XG4gICAgZ2FwOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAuaW5mby1ibG9jayB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSBhbmQgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9jayB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIDAuNzk1NDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAyLjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjc5NTQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMi41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjc5NTQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMi41cmVtICkpIHtcbiAgICAuaW5mby1ibG9jayB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMS4yNXJlbSArIDEuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gIH1cbn1cbi5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gICAgd2lkdGg6IDI0LjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDguMTU5MDkwOTA5MXJlbSAgKyAgMjEuNzA0NTQ1NDU0NXZ3ICwgMjQuNDM3NXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX2l0ZW0tLXRvcC1saW5lIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDguMTU5MDkwOTA5MXJlbSAgKyAgMjEuNzA0NTQ1NDU0NXZ3ICwgMjQuNDM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCA4LjE1OTA5MDkwOTFyZW0gICsgIDIxLjcwNDU0NTQ1NDV2dyAsIDI0LjQzNzVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gICAgICB3aWR0aDogY2FsYygxMi41cmVtICsgMTEuOTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gICAgd2lkdGg6IDEyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gICAgcGFkZGluZy10b3A6IDIuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDEuMjVyZW0gLCAwLjkzMTgxODE4MThyZW0gICsgIDEuNTkwOTA5MDkwOXZ3ICwgMi4xMjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDEuMjVyZW0gLCAwLjkzMTgxODE4MThyZW0gICsgIDEuNTkwOTA5MDkwOXZ3ICwgMi4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAxLjI1cmVtICwgMC45MzE4MTgxODE4cmVtICArICAxLjU5MDkwOTA5MDl2dyAsIDIuMTI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19faXRlbS0tdG9wLWxpbmUge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMS4yNXJlbSArIDAuODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmluZm8tYmxvY2tfX2l0ZW0tLXRvcC1saW5lIHtcbiAgICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgfVxufVxuLmluZm8tYmxvY2tfX3RleHQtLWJpZyB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9ja19fdGV4dC0tYmlnIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDEuMTI1cmVtICwgMS4wNzk1NDU0NTQ1cmVtICArICAwLjIyNzI3MjcyNzN2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX190ZXh0LS1iaWcge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMS4xMjVyZW0gLCAxLjA3OTU0NTQ1NDVyZW0gICsgIDAuMjI3MjcyNzI3M3Z3ICwgMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAxLjEyNXJlbSAsIDEuMDc5NTQ1NDU0NXJlbSAgKyAgMC4yMjcyNzI3MjczdncgLCAxLjI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19fdGV4dC0tYmlnIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjEyNXJlbSArIDAuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmluZm8tYmxvY2tfX3RleHQtLWJpZyB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgfVxufVxuLmluZm8tYmxvY2tfX3RleHQtLWJpZzo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbmZvLWJsb2NrX190ZXh0LS1iaWc6OmJlZm9yZSB7XG4gICAgd2lkdGg6IDI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDEzLjEyNXJlbSAsIDguODA2ODE4MTgxOHJlbSAgKyAgMjEuNTkwOTA5MDkwOXZ3ICwgMjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX190ZXh0LS1iaWc6OmJlZm9yZSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDEzLjEyNXJlbSAsIDguODA2ODE4MTgxOHJlbSAgKyAgMjEuNTkwOTA5MDkwOXZ3ICwgMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxMy4xMjVyZW0gLCA4LjgwNjgxODE4MThyZW0gICsgIDIxLjU5MDkwOTA5MDl2dyAsIDI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19fdGV4dC0tYmlnOjpiZWZvcmUge1xuICAgICAgd2lkdGg6IGNhbGMoMTMuMTI1cmVtICsgMTEuODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmluZm8tYmxvY2tfX3RleHQtLWJpZzo6YmVmb3JlIHtcbiAgICB3aWR0aDogMTMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9ja19faXRlbS0tYWN0aW9uIHtcbiAgICB3aWR0aDogMjguOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMC43ODQwOTA5MDkxcmVtICArICAyNC4yMDQ1NDU0NTQ1dncgLCAyOC45Mzc1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19faXRlbS0tYWN0aW9uIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTAuNzg0MDkwOTA5MXJlbSAgKyAgMjQuMjA0NTQ1NDU0NXZ3ICwgMjguOTM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDEwLjc4NDA5MDkwOTFyZW0gICsgIDI0LjIwNDU0NTQ1NDV2dyAsIDI4LjkzNzVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX19pdGVtLS1hY3Rpb24ge1xuICAgICAgd2lkdGg6IGNhbGMoMTUuNjI1cmVtICsgMTMuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrX19pdGVtLS1hY3Rpb24ge1xuICAgIHdpZHRoOiAxNS42MjVyZW07XG4gIH1cbn1cbi5pbmZvLWJsb2NrX190ZXh0LS1zbWFsbCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9ja19fdGV4dC0tc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMS4wNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjg5MjA0NTQ1NDVyZW0gICsgIDAuMjI3MjcyNzI3M3Z3ICwgMS4wNjI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19fdGV4dC0tc21hbGwge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC44OTIwNDU0NTQ1cmVtICArICAwLjIyNzI3MjcyNzN2dyAsIDEuMDYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjg5MjA0NTQ1NDVyZW0gICsgIDAuMjI3MjcyNzI3M3Z3ICwgMS4wNjI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19fdGV4dC0tc21hbGwge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuOTM3NXJlbSArIDAuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDAuOTk0MzE4MTgxOHJlbSAgKyAgMi44NDA5MDkwOTA5dncgLCAzLjEyNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjk5NDMxODE4MThyZW0gICsgIDIuODQwOTA5MDkwOXZ3ICwgMy4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDAuOTk0MzE4MTgxOHJlbSAgKyAgMi44NDA5MDkwOTA5dncgLCAzLjEyNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS41NjI1cmVtICsgMS41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjU2MjVyZW07XG4gIH1cbn1cblxuLmJ0biBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA1MDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYnRuIHNwYW4ge1xuICAgIHBhZGRpbmctbGVmdDogMi40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjEyNXJlbSAsIDAuNjQ3NzI3MjcyN3JlbSAgKyAgMi4zODYzNjM2MzY0dncgLCAyLjQzNzVyZW0gKSkge1xuICAgIC5idG4gc3BhbiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjEyNXJlbSAsIDAuNjQ3NzI3MjcyN3JlbSAgKyAgMi4zODYzNjM2MzY0dncgLCAyLjQzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4xMjVyZW0gLCAwLjY0NzcyNzI3MjdyZW0gICsgIDIuMzg2MzYzNjM2NHZ3ICwgMi40Mzc1cmVtICkpIHtcbiAgICAuYnRuIHNwYW4ge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuMTI1cmVtICsgMS4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0biBzcGFuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTU5Ljk4cHgpIHtcbiAgLmJ0biBzcGFuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDY5Ljk4cHgpIHtcbiAgLmJ0biBzcGFuIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDI7XG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWNsKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0biB7XG4gICAgcGFkZGluZy10b3A6IDEuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAwLjYyNXJlbSAsIDAuNDIwNDU0NTQ1NXJlbSAgKyAgMS4wMjI3MjcyNzI3dncgLCAxLjE4NzVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAwLjYyNXJlbSAsIDAuNDIwNDU0NTQ1NXJlbSAgKyAgMS4wMjI3MjcyNzI3dncgLCAxLjE4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAwLjYyNXJlbSAsIDAuNDIwNDU0NTQ1NXJlbSAgKyAgMS4wMjI3MjcyNzI3dncgLCAxLjE4NzVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMC42MjVyZW0gKyAwLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuIHtcbiAgICBwYWRkaW5nLXRvcDogMC42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG4ge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMC42MjVyZW0gLCAwLjQyMDQ1NDU0NTVyZW0gICsgIDEuMDIyNzI3MjcyN3Z3ICwgMS4xODc1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMC42MjVyZW0gLCAwLjQyMDQ1NDU0NTVyZW0gICsgIDEuMDIyNzI3MjcyN3Z3ICwgMS4xODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMC42MjVyZW0gLCAwLjQyMDQ1NDU0NTVyZW0gICsgIDEuMDIyNzI3MjcyN3Z3ICwgMS4xODc1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDAuNjI1cmVtICsgMC41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0biB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYnRuIHtcbiAgICB3aWR0aDogMTAuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDVyZW0gLCAyLjk1NDU0NTQ1NDVyZW0gICsgIDEwLjIyNzI3MjcyNzN2dyAsIDEwLjYyNXJlbSApKSB7XG4gICAgLmJ0biB7XG4gICAgICB3aWR0aDogY2xhbXAoIDVyZW0gLCAyLjk1NDU0NTQ1NDVyZW0gICsgIDEwLjIyNzI3MjcyNzN2dyAsIDEwLjYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDVyZW0gLCAyLjk1NDU0NTQ1NDVyZW0gICsgIDEwLjIyNzI3MjcyNzN2dyAsIDEwLjYyNXJlbSApKSB7XG4gICAgLmJ0biB7XG4gICAgICB3aWR0aDogY2FsYyg1cmVtICsgNS42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuIHtcbiAgICB3aWR0aDogNXJlbTtcbiAgfVxufVxuLmJ0bjpob3ZlciBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWRhcmstY2wpO1xufVxuLmJ0bjpob3Zlcjo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuLmJ0bjpob3Zlcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbn1cbi5idG46OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0bjo6YWZ0ZXIge1xuICAgIHRvcDogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh0b3A6IGNsYW1wKCAwLjc1cmVtICwgMC40NTQ1NDU0NTQ1cmVtICArICAxLjQ3NzI3MjcyNzN2dyAsIDEuNTYyNXJlbSApKSB7XG4gICAgLmJ0bjo6YWZ0ZXIge1xuICAgICAgdG9wOiBjbGFtcCggMC43NXJlbSAsIDAuNDU0NTQ1NDU0NXJlbSAgKyAgMS40NzcyNzI3MjczdncgLCAxLjU2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAodG9wOiBjbGFtcCggMC43NXJlbSAsIDAuNDU0NTQ1NDU0NXJlbSAgKyAgMS40NzcyNzI3MjczdncgLCAxLjU2MjVyZW0gKSkge1xuICAgIC5idG46OmFmdGVyIHtcbiAgICAgIHRvcDogY2FsYygwLjc1cmVtICsgMC44MTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0bjo6YWZ0ZXIge1xuICAgIHRvcDogMC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0bjo6YWZ0ZXIge1xuICAgIHJpZ2h0OiAyLjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocmlnaHQ6IGNsYW1wKCAxLjE4NzVyZW0gLCAwLjc1NTY4MTgxODJyZW0gICsgIDIuMTU5MDkwOTA5MXZ3ICwgMi4zNzVyZW0gKSkge1xuICAgIC5idG46OmFmdGVyIHtcbiAgICAgIHJpZ2h0OiBjbGFtcCggMS4xODc1cmVtICwgMC43NTU2ODE4MTgycmVtICArICAyLjE1OTA5MDkwOTF2dyAsIDIuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHJpZ2h0OiBjbGFtcCggMS4xODc1cmVtICwgMC43NTU2ODE4MTgycmVtICArICAyLjE1OTA5MDkwOTF2dyAsIDIuMzc1cmVtICkpIHtcbiAgICAuYnRuOjphZnRlciB7XG4gICAgICByaWdodDogY2FsYygxLjE4NzVyZW0gKyAxLjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuOjphZnRlciB7XG4gICAgcmlnaHQ6IDEuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk1OS45OHB4KSB7XG4gIC5idG46OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uYnRuOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTI1JSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2U7XG59XG4uYnRuLS1yZXZlcnNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3V0bGluZTogMXB4IHNvbGlkICNmZmY7XG59XG4uYnRuLS1yZXZlcnNlOmhvdmVyOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uYnRuLS1yZXZlcnNlOmhvdmVyIHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5idG4tLXJldmVyc2Ugc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5idG4tLXJldmVyc2U6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG59XG4uYnRuLS1yZXZlcnNlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbn1cblxuLmRpcmVjdGlvbnMge1xuICBtYXgtd2lkdGg6IDEzMzZweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmRpcmVjdGlvbnMge1xuICAgIHBhZGRpbmctYm90dG9tOiA4Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDMuNzVyZW0gLCAxLjkzMTgxODE4MThyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgOC43NXJlbSApKSB7XG4gICAgLmRpcmVjdGlvbnMge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAzLjc1cmVtICwgMS45MzE4MTgxODE4cmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDguNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAzLjc1cmVtICwgMS45MzE4MTgxODE4cmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDguNzVyZW0gKSkge1xuICAgIC5kaXJlY3Rpb25zIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDMuNzVyZW0gKyA1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmRpcmVjdGlvbnMge1xuICAgIHBhZGRpbmctYm90dG9tOiAzLjc1cmVtO1xuICB9XG59XG5cbi53b3Jrcy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAzMHB4O1xufVxuLndvcmtzLWxpc3RfX2l0ZW0ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuMTMpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNjUpIDEwMCUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAud29ya3MtbGlzdF9faXRlbSB7XG4gICAgd2lkdGg6IDE5cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCAxMC4xMzYzNjM2MzY0cmVtICArICAxMS44MTgxODE4MTgydncgLCAxOXJlbSApKSB7XG4gICAgLndvcmtzLWxpc3RfX2l0ZW0ge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxMi41cmVtICwgMTAuMTM2MzYzNjM2NHJlbSAgKyAgMTEuODE4MTgxODE4MnZ3ICwgMTlyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxMi41cmVtICwgMTAuMTM2MzYzNjM2NHJlbSAgKyAgMTEuODE4MTgxODE4MnZ3ICwgMTlyZW0gKSkge1xuICAgIC53b3Jrcy1saXN0X19pdGVtIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEyLjVyZW0gKyA2LjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAud29ya3MtbGlzdF9faXRlbSB7XG4gICAgd2lkdGg6IDEyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC53b3Jrcy1saXN0X19pdGVtIHtcbiAgICBoZWlnaHQ6IDI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAxNy41cmVtICwgMTQuNzcyNzI3MjcyN3JlbSAgKyAgMTMuNjM2MzYzNjM2NHZ3ICwgMjVyZW0gKSkge1xuICAgIC53b3Jrcy1saXN0X19pdGVtIHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDE3LjVyZW0gLCAxNC43NzI3MjcyNzI3cmVtICArICAxMy42MzYzNjM2MzY0dncgLCAyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCAxNy41cmVtICwgMTQuNzcyNzI3MjcyN3JlbSAgKyAgMTMuNjM2MzYzNjM2NHZ3ICwgMjVyZW0gKSkge1xuICAgIC53b3Jrcy1saXN0X19pdGVtIHtcbiAgICAgIGhlaWdodDogY2FsYygxNy41cmVtICsgNy41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLndvcmtzLWxpc3RfX2l0ZW0ge1xuICAgIGhlaWdodDogMTcuNXJlbTtcbiAgfVxufVxuLndvcmtzLWxpc3RfX2l0ZW06aG92ZXIge1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG59XG4ud29ya3MtbGlzdF9faXRlbTpob3ZlciAud29ya3MtbGlzdF9faW5mbyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTZweCk7XG59XG4ud29ya3MtbGlzdF9faXRlbTpob3ZlciAud29ya3MtbGlzdF9fY2FyZCB7XG4gIGZpbHRlcjogYmx1cig3cHgpO1xufVxuLndvcmtzLWxpc3RfX2NhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmaWx0ZXI6IGJsdXIoMCk7XG4gIHRyYW5zaXRpb246IGZpbHRlciAwLjVzIGVhc2U7XG59XG4ud29ya3MtbGlzdF9faW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTZweCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAud29ya3MtbGlzdF9faW5mbyB7XG4gICAgcGFkZGluZy1yaWdodDogNS44MTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMS41NjI1cmVtICwgMC4wMTcwNDU0NTQ1cmVtICArICA3LjcyNzI3MjcyNzN2dyAsIDUuODEyNXJlbSApKSB7XG4gICAgLndvcmtzLWxpc3RfX2luZm8ge1xuICAgICAgcGFkZGluZy1yaWdodDogY2xhbXAoIDEuNTYyNXJlbSAsIDAuMDE3MDQ1NDU0NXJlbSAgKyAgNy43MjcyNzI3MjczdncgLCA1LjgxMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1yaWdodDogY2xhbXAoIDEuNTYyNXJlbSAsIDAuMDE3MDQ1NDU0NXJlbSAgKyAgNy43MjcyNzI3MjczdncgLCA1LjgxMjVyZW0gKSkge1xuICAgIC53b3Jrcy1saXN0X19pbmZvIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoMS41NjI1cmVtICsgNC4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC53b3Jrcy1saXN0X19pbmZvIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC53b3Jrcy1saXN0X19pbmZvIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjk5NDMxODE4MThyZW0gICsgIDIuODQwOTA5MDkwOXZ3ICwgMy4xMjVyZW0gKSkge1xuICAgIC53b3Jrcy1saXN0X19pbmZvIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuNTYyNXJlbSAsIDAuOTk0MzE4MTgxOHJlbSAgKyAgMi44NDA5MDkwOTA5dncgLCAzLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjk5NDMxODE4MThyZW0gICsgIDIuODQwOTA5MDkwOXZ3ICwgMy4xMjVyZW0gKSkge1xuICAgIC53b3Jrcy1saXN0X19pbmZvIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygxLjU2MjVyZW0gKyAxLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAud29ya3MtbGlzdF9faW5mbyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjU2MjVyZW07XG4gIH1cbn1cbi53b3Jrcy1saXN0X190ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAyNHB4IDAgMjRweCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ5OS45OHB4KSB7XG4gIC53b3Jrcy1saXN0X190ZXh0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbi53b3Jrcy1saXN0X19tb3JlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0OTkuOThweCkge1xuICAud29ya3MtbGlzdF9fbW9yZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mZWF0dXJlZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDkuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAtMC4xNTkwOTA5MDkxcmVtICArICAxMy4yOTU0NTQ1NDU1dncgLCA5LjgxMjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIC0wLjE1OTA5MDkwOTFyZW0gICsgIDEzLjI5NTQ1NDU0NTV2dyAsIDkuODEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIC0wLjE1OTA5MDkwOTFyZW0gICsgIDEzLjI5NTQ1NDU0NTV2dyAsIDkuODEyNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDIuNXJlbSArIDcuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mZWF0dXJlZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcbiAgfVxufVxuLmZlYXR1cmVkX19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mZWF0dXJlZF9fbGlzdCB7XG4gICAgZ2FwOiA2LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChnYXA6IGNsYW1wKCAxLjg3NXJlbSAsIDAuMjg0MDkwOTA5MXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA2LjI1cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2xpc3Qge1xuICAgICAgZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAwLjI4NDA5MDkwOTFyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgNi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChnYXA6IGNsYW1wKCAxLjg3NXJlbSAsIDAuMjg0MDkwOTA5MXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA2LjI1cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2xpc3Qge1xuICAgICAgZ2FwOiBjYWxjKDEuODc1cmVtICsgNC4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZmVhdHVyZWRfX2xpc3Qge1xuICAgIGdhcDogMS44NzVyZW07XG4gIH1cbn1cbi5mZWF0dXJlZF9faXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5mZWF0dXJlZF9faXRlbTpob3ZlciAuZmVhdHVyZWRfX2J0biwgLmZlYXR1cmVkX19pdGVtOmZvY3VzIC5mZWF0dXJlZF9fYnRuIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mZWF0dXJlZF9faW1hZ2Uge1xuICAgIHdpZHRoOiAyMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTEuNTYyNXJlbSAsIDcuMzU3OTU0NTQ1NXJlbSAgKyAgMjEuMDIyNzI3MjcyN3Z3ICwgMjMuMTI1cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2ltYWdlIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTEuNTYyNXJlbSAsIDcuMzU3OTU0NTQ1NXJlbSAgKyAgMjEuMDIyNzI3MjcyN3Z3ICwgMjMuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTEuNTYyNXJlbSAsIDcuMzU3OTU0NTQ1NXJlbSAgKyAgMjEuMDIyNzI3MjcyN3Z3ICwgMjMuMTI1cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2ltYWdlIHtcbiAgICAgIHdpZHRoOiBjYWxjKDExLjU2MjVyZW0gKyAxMS41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZlYXR1cmVkX19pbWFnZSB7XG4gICAgd2lkdGg6IDExLjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mZWF0dXJlZF9faW1hZ2Uge1xuICAgIGhlaWdodDogMjYuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGhlaWdodDogY2xhbXAoIDEzLjM3NXJlbSAsIDguNTExMzYzNjM2NHJlbSAgKyAgMjQuMzE4MTgxODE4MnZ3ICwgMjYuNzVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9faW1hZ2Uge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggMTMuMzc1cmVtICwgOC41MTEzNjM2MzY0cmVtICArICAyNC4zMTgxODE4MTgydncgLCAyNi43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCAxMy4zNzVyZW0gLCA4LjUxMTM2MzYzNjRyZW0gICsgIDI0LjMxODE4MTgxODJ2dyAsIDI2Ljc1cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2ltYWdlIHtcbiAgICAgIGhlaWdodDogY2FsYygxMy4zNzVyZW0gKyAxMy4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZmVhdHVyZWRfX2ltYWdlIHtcbiAgICBoZWlnaHQ6IDEzLjM3NXJlbTtcbiAgfVxufVxuLmZlYXR1cmVkX19sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mZWF0dXJlZF9fbGFiZWwge1xuICAgIG1hcmdpbi10b3A6IDIuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tdG9wOiBjbGFtcCggMC45Mzc1cmVtICwgMC41MDU2ODE4MTgycmVtICArICAyLjE1OTA5MDkwOTF2dyAsIDIuMTI1cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2xhYmVsIHtcbiAgICAgIG1hcmdpbi10b3A6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjUwNTY4MTgxODJyZW0gICsgIDIuMTU5MDkwOTA5MXZ3ICwgMi4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLXRvcDogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNTA1NjgxODE4MnJlbSAgKyAgMi4xNTkwOTA5MDkxdncgLCAyLjEyNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19sYWJlbCB7XG4gICAgICBtYXJnaW4tdG9wOiBjYWxjKDAuOTM3NXJlbSArIDEuMTg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mZWF0dXJlZF9fbGFiZWwge1xuICAgIG1hcmdpbi10b3A6IDAuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZlYXR1cmVkX19sYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC4yNXJlbSAsIDAuMTU5MDkwOTA5MXJlbSAgKyAgMC40NTQ1NDU0NTQ1dncgLCAwLjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9fbGFiZWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuMjVyZW0gLCAwLjE1OTA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMC41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjI1cmVtICwgMC4xNTkwOTA5MDkxcmVtICArICAwLjQ1NDU0NTQ1NDV2dyAsIDAuNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19sYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDAuMjVyZW0gKyAwLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZlYXR1cmVkX19sYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OS45OHB4KSB7XG4gIC5mZWF0dXJlZF9fbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuLmZlYXR1cmVkX190eXBlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZlYXR1cmVkX19pbWFnZS0tYmlnIHtcbiAgICB3aWR0aDogMzcuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTAuMjI3MjcyNzI3M3JlbSAgKyAgMzYuMzYzNjM2MzYzNnZ3ICwgMzcuNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19pbWFnZS0tYmlnIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDEwLjIyNzI3MjcyNzNyZW0gICsgIDM2LjM2MzYzNjM2MzZ2dyAsIDM3LjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTAuMjI3MjcyNzI3M3JlbSAgKyAgMzYuMzYzNjM2MzYzNnZ3ICwgMzcuNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19pbWFnZS0tYmlnIHtcbiAgICAgIHdpZHRoOiBjYWxjKDE3LjVyZW0gKyAyMCAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mZWF0dXJlZF9faW1hZ2UtLWJpZyB7XG4gICAgd2lkdGg6IDE3LjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mZWF0dXJlZF9faW1hZ2UtLWJpZyB7XG4gICAgaGVpZ2h0OiAyNi43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggMTIuMTI1cmVtICwgNi44MDY4MTgxODE4cmVtICArICAyNi41OTA5MDkwOTA5dncgLCAyNi43NXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19pbWFnZS0tYmlnIHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDEyLjEyNXJlbSAsIDYuODA2ODE4MTgxOHJlbSAgKyAgMjYuNTkwOTA5MDkwOXZ3ICwgMjYuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggMTIuMTI1cmVtICwgNi44MDY4MTgxODE4cmVtICArICAyNi41OTA5MDkwOTA5dncgLCAyNi43NXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19pbWFnZS0tYmlnIHtcbiAgICAgIGhlaWdodDogY2FsYygxMi4xMjVyZW0gKyAxNC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZmVhdHVyZWRfX2ltYWdlLS1iaWcge1xuICAgIGhlaWdodDogMTIuMTI1cmVtO1xuICB9XG59XG4uZmVhdHVyZWRfX2l0ZW0tLXRvcCB7XG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gIHBhZGRpbmctdG9wOiAxNjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLmZlYXR1cmVkX19pdGVtLS10b3Age1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxufVxuLmZlYXR1cmVkX19pdGVtLS1ib3R0b20ge1xuICBtYXJnaW4tdG9wOiAtMTYwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5mZWF0dXJlZF9faXRlbS0tYm90dG9tIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59XG4uZmVhdHVyZWRfX2J0biB7XG4gIGxlZnQ6IDEzMHB4O1xuICB0b3A6IDIwMHB4O1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLCB2aXNpYmlsaXR5IDAuNXMgZWFzZSwgdHJhbnNmb3JtIDAuNHMgZWFzZSwgYm94LXNoYWRvdyAwLjRzIGVhc2U7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuZmVhdHVyZWRfX2J0biB7XG4gICAgbGVmdDogMTAwcHg7XG4gICAgdG9wOiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDI5Ljk5ODc1ZW0pIHtcbiAgLmZlYXR1cmVkX19idG4ge1xuICAgIGxlZnQ6IDY2cHg7XG4gICAgdG9wOiA3N3B4O1xuICB9XG59XG5cbi5pbnRyb2R1Y3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBmaXJzdCBiYXNlbGluZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvZHVjdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMDM5NzcyNzI3M3JlbSAgKyAgMi42MTM2MzYzNjM2dncgLCAzcmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjAzOTc3MjcyNzNyZW0gICsgIDIuNjEzNjM2MzYzNnZ3ICwgM3JlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4wMzk3NzI3MjczcmVtICArICAyLjYxMzYzNjM2MzZ2dyAsIDNyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb24ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjU2MjVyZW0gKyAxLjQzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm9kdWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyb2R1Y3Rpb24ge1xuICAgIHBhZGRpbmctbGVmdDogNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjU2ODE4MTgxODJyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuNTY4MTgxODE4MnJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC41NjgxODE4MTgycmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb24ge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuMjVyZW0gKyA1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvZHVjdGlvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm9kdWN0aW9uIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbiB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbiB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDMuMTI1cmVtICsgMy4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm9kdWN0aW9uIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzLjEyNXJlbTtcbiAgfVxufVxuLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICBtYXJnaW4tcmlnaHQ6IDM3NXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMy4xMjVyZW0gKyAzLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgd2lkdGg6IDI2LjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTEuNjQ3NzI3MjcyN3JlbSAgKyAgMTkuODg2MzYzNjM2NHZ3ICwgMjYuNTYyNXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMS42NDc3MjcyNzI3cmVtICArICAxOS44ODYzNjM2MzY0dncgLCAyNi41NjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTEuNjQ3NzI3MjcyN3JlbSAgKyAgMTkuODg2MzYzNjM2NHZ3ICwgMjYuNTYyNXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgICAgd2lkdGg6IGNhbGMoMTUuNjI1cmVtICsgMTAuOTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICB3aWR0aDogMTUuNjI1cmVtO1xuICB9XG59XG4uaW50cm9kdWN0aW9uX190aXRsZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbiAgbGVmdDogNjgwcHg7XG4gIHRvcDogODBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlOjphZnRlciB7XG4gICAgd2lkdGg6IDQuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMzkyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjM3NXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMi4xODc1cmVtICwgMS4zOTIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDQuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMi4xODc1cmVtICwgMS4zOTIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDQuMzc1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uX190aXRsZTo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IGNhbGMoMi4xODc1cmVtICsgMi4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgICB3aWR0aDogMi4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSBhbmQgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMDM5NzcyNzI3M3JlbSAgKyAgMi42MTM2MzYzNjM2dncgLCAzcmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4wMzk3NzI3MjczcmVtICArICAyLjYxMzYzNjM2MzZ2dyAsIDNyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMDM5NzcyNzI3M3JlbSAgKyAgMi42MTM2MzYzNjM2dncgLCAzcmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuNTYyNXJlbSArIDEuNDM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgICB0b3A6IC00MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSBhbmQgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZTo6YWZ0ZXIge1xuICAgIGxlZnQ6IDYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGxlZnQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uX190aXRsZTo6YWZ0ZXIge1xuICAgICAgbGVmdDogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGVmdDogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlOjphZnRlciB7XG4gICAgICBsZWZ0OiBjYWxjKDMuMTI1cmVtICsgMy4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZTo6YWZ0ZXIge1xuICAgIGxlZnQ6IDMuMTI1cmVtO1xuICB9XG59XG5cbi5wcm9jZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG4gIGhlaWdodDogNjY0cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpIHtcbiAgLnByb2Nlc3Mge1xuICAgIGhlaWdodDogNzEwcHg7XG4gIH1cbn1cbi5wcm9jZXNzX19jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEzMDBweDtcbiAgei1pbmRleDogMjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnByb2Nlc3NfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDkuMzEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAwLjAyMjcyNzI3MjdyZW0gICsgIDEyLjM4NjM2MzYzNjR2dyAsIDkuMzEyNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX2NvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIDAuMDIyNzI3MjcyN3JlbSAgKyAgMTIuMzg2MzYzNjM2NHZ3ICwgOS4zMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgMC4wMjI3MjcyNzI3cmVtICArICAxMi4zODYzNjM2MzY0dncgLCA5LjMxMjVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19jb250YWluZXIge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMi41cmVtICsgNi44MTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnByb2Nlc3NfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnByb2Nlc3NfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwLjA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMi41cmVtICwgLTAuMjVyZW0gICsgIDEzLjc1dncgLCAxMC4wNjI1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMi41cmVtICwgLTAuMjVyZW0gICsgIDEzLjc1dncgLCAxMC4wNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMi41cmVtICwgLTAuMjVyZW0gICsgIDEzLjc1dncgLCAxMC4wNjI1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDIuNXJlbSArIDcuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5wcm9jZXNzX19jb250YWluZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XG4gIH1cbn1cbi5wcm9jZXNzX19jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTIwJTtcbiAgdG9wOiAtMzUlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAucHJvY2Vzc19fY29udGFpbmVyOjphZnRlciB7XG4gICAgd2lkdGg6IDQwLjA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IGNhbGMoMTIuNXJlbSArIDI3LjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAucHJvY2Vzc19fY29udGFpbmVyOjphZnRlciB7XG4gICAgd2lkdGg6IDEyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5wcm9jZXNzX19jb250YWluZXI6OmFmdGVyIHtcbiAgICBoZWlnaHQ6IDQwLjA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGhlaWdodDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgaGVpZ2h0OiBjYWxjKDEyLjVyZW0gKyAyNy41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnByb2Nlc3NfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIGhlaWdodDogMTIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSB7XG4gIC5wcm9jZXNzX19jb250YWluZXI6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ucHJvY2Vzc19fdGl0bGUge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnByb2Nlc3NfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS44NzVyZW0gLCAwLjczODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjg3NXJlbSAsIDAuNzM4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjg3NXJlbSAsIDAuNzM4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjg3NXJlbSArIDMuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnByb2Nlc3NfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSBhbmQgKG1pbi13aWR0aDogNzVlbSkge1xuICAucHJvY2Vzc19fdGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuNTY4MTgxODE4MnJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA2LjI1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fdGl0bGUge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjU2ODE4MTgxODJyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgNi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuNTY4MTgxODE4MnJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA2LjI1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fdGl0bGUge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuMjVyZW0gKyA1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAucHJvY2Vzc19fdGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQxOS45OHB4KSB7XG4gIC5wcm9jZXNzX190aXRsZSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG59XG4ucHJvY2Vzc19fbGlzdCB7XG4gIGdhcDogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5wcm9jZXNzX19saXN0IHtcbiAgICBtYXJnaW4tbGVmdDogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgMC4zNDA5MDkwOTA5cmVtICArICA0LjU0NTQ1NDU0NTV2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19saXN0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIDAuMzQwOTA5MDkwOXJlbSAgKyAgNC41NDU0NTQ1NDU1dncgLCAzLjc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIDAuMzQwOTA5MDkwOXJlbSAgKyAgNC41NDU0NTQ1NDU1dncgLCAzLjc1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fbGlzdCB7XG4gICAgICBtYXJnaW4tbGVmdDogY2FsYygxLjI1cmVtICsgMi41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnByb2Nlc3NfX2xpc3Qge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAucHJvY2Vzc19fbGlzdCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtMy4xODE4MTgwOTY2cmVtICArICAxNS45MDkwOTA3OTU1dncgLCA4Ljc1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fbGlzdCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtMy4xODE4MTgwOTY2cmVtICArICAxNS45MDkwOTA3OTU1dncgLCA4Ljc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1yaWdodDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIC0zLjE4MTgxODA5NjZyZW0gICsgIDE1LjkwOTA5MDc5NTV2dyAsIDguNzVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19saXN0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygwLjAwMDAwMDA2MjVyZW0gKyA4Ljc0OTk5OTkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAucHJvY2Vzc19fbGlzdCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjAwMDAwMDA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkge1xuICAucHJvY2Vzc19fbGlzdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxufVxuLnByb2Nlc3NfX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvY2Vzc19faXRlbTpob3ZlciAucHJvY2Vzc19fdGV4dCB7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG59XG4ucHJvY2Vzc19faXRlbTpob3ZlciAucHJvY2Vzc19fdGV4dDo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI4JSk7XG59XG4ucHJvY2Vzc19faXRlbTpob3ZlciAucHJvY2Vzc19fbnVtYmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5wcm9jZXNzX190ZXh0IHtcbiAgY29sb3I6ICM2RjZGNkY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC40cyBlYXNlLCB0cmFuc2Zvcm0gMC40cyBlYXNlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG4ucHJvY2Vzc19fdGV4dDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC05MHB4O1xuICB0b3A6IDE3cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UsIG9wYWNpdHkgMC40cyBlYXNlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSB7XG4gIC5wcm9jZXNzX190ZXh0OjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5wcm9jZXNzX19udW1iZXIge1xuICBvcGFjaXR5OiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlO1xufVxuXG4ucHJvY2Vzcy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkge1xuICAucHJvY2Vzcy13cmFwcGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5ibG9jay1pbmZvIHtcbiAgICB3aWR0aDogMjQuNjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMi4zMjk1NDU0NTQ1cmVtICArICAxNi40NzcyNzI3MjczdncgLCAyNC42ODc1cmVtICkpIHtcbiAgICAuYmxvY2staW5mbyB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDEyLjMyOTU0NTQ1NDVyZW0gICsgIDE2LjQ3NzI3MjcyNzN2dyAsIDI0LjY4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMi4zMjk1NDU0NTQ1cmVtICArICAxNi40NzcyNzI3MjczdncgLCAyNC42ODc1cmVtICkpIHtcbiAgICAuYmxvY2staW5mbyB7XG4gICAgICB3aWR0aDogY2FsYygxNS42MjVyZW0gKyA5LjA2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYmxvY2staW5mbyB7XG4gICAgd2lkdGg6IDE1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSBhbmQgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYmxvY2staW5mbyB7XG4gICAgcGFkZGluZy1sZWZ0OiA2LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC41NjgxODE4MTgycmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5ibG9jay1pbmZvIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC41NjgxODE4MTgycmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjU2ODE4MTgxODJyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmJsb2NrLWluZm8ge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuMjVyZW0gKyA1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAuYmxvY2staW5mbyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICB9XG59XG4uYmxvY2staW5mb19fdGV4dCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYmxvY2staW5mb19fdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMy4zMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMC45MjYxMzYzNjM2cmVtICArICAzLjE4MTgxODE4MTh2dyAsIDMuMzEyNXJlbSApKSB7XG4gICAgLmJsb2NrLWluZm9fX3RleHQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDAuOTI2MTM2MzYzNnJlbSAgKyAgMy4xODE4MTgxODE4dncgLCAzLjMxMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDAuOTI2MTM2MzYzNnJlbSAgKyAgMy4xODE4MTgxODE4dncgLCAzLjMxMjVyZW0gKSkge1xuICAgIC5ibG9jay1pbmZvX190ZXh0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS41NjI1cmVtICsgMS43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5ibG9jay1pbmZvX190ZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjU2MjVyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNyZWF0ZSB7XG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIC0wLjIyNzI3MjcyNzNyZW0gICsgIDEzLjYzNjM2MzYzNjR2dyAsIDEwcmVtICkpIHtcbiAgICAuY3JlYXRlIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgLTAuMjI3MjcyNzI3M3JlbSAgKyAgMTMuNjM2MzYzNjM2NHZ3ICwgMTByZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAtMC4yMjcyNzI3MjczcmVtICArICAxMy42MzYzNjM2MzY0dncgLCAxMHJlbSApKSB7XG4gICAgLmNyZWF0ZSB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygyLjVyZW0gKyA3LjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlIHtcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY3JlYXRlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogOC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAwLjIyNzI3MjcyNzNyZW0gICsgIDExLjM2MzYzNjM2MzZ2dyAsIDguNzVyZW0gKSkge1xuICAgIC5jcmVhdGUge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAwLjIyNzI3MjcyNzNyZW0gICsgIDExLjM2MzYzNjM2MzZ2dyAsIDguNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAwLjIyNzI3MjcyNzNyZW0gICsgIDExLjM2MzYzNjM2MzZ2dyAsIDguNzVyZW0gKSkge1xuICAgIC5jcmVhdGUge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMi41cmVtICsgNi4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jcmVhdGUge1xuICAgIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XG4gIH1cbn1cbi5jcmVhdGVfX3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzcuOThweCkge1xuICAuY3JlYXRlX193cmFwcGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDM3Ljk4cHgpIHtcbiAgLmltZy1ibG9jayB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbi5pbWctYmxvY2tfX2l0ZW0ge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuNHMgZWFzZTtcbn1cbi5pbWctYmxvY2tfX2l0ZW06aG92ZXIge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcbn1cbi5pbWctYmxvY2tfX2l0ZW0tLWJpZyB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1iaWcge1xuICAgIHdpZHRoOiAyOS4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTQuNjg3NXJlbSAsIDkuMzQ2NTkwOTA5MXJlbSAgKyAgMjYuNzA0NTQ1NDU0NXZ3ICwgMjkuMzc1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1iaWcge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxNC42ODc1cmVtICwgOS4zNDY1OTA5MDkxcmVtICArICAyNi43MDQ1NDU0NTQ1dncgLCAyOS4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNC42ODc1cmVtICwgOS4zNDY1OTA5MDkxcmVtICArICAyNi43MDQ1NDU0NTQ1dncgLCAyOS4zNzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLWJpZyB7XG4gICAgICB3aWR0aDogY2FsYygxNC42ODc1cmVtICsgMTQuNjg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLWJpZyB7XG4gICAgd2lkdGg6IDE0LjY4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLWJpZyB7XG4gICAgaGVpZ2h0OiAxOC4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGhlaWdodDogY2xhbXAoIDkuMDYyNXJlbSAsIDUuNzY3MDQ1NDU0NXJlbSAgKyAgMTYuNDc3MjcyNzI3M3Z3ICwgMTguMTI1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1iaWcge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggOS4wNjI1cmVtICwgNS43NjcwNDU0NTQ1cmVtICArICAxNi40NzcyNzI3MjczdncgLCAxOC4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggOS4wNjI1cmVtICwgNS43NjcwNDU0NTQ1cmVtICArICAxNi40NzcyNzI3MjczdncgLCAxOC4xMjVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLWJpZyB7XG4gICAgICBoZWlnaHQ6IGNhbGMoOS4wNjI1cmVtICsgOS4wNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmltZy1ibG9ja19faXRlbS0tYmlnIHtcbiAgICBoZWlnaHQ6IDkuMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmltZy1ibG9ja19fYm90dG9tIHtcbiAgICB3aWR0aDogMzUuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxOC43NXJlbSAsIDEyLjVyZW0gICsgIDMxLjI1dncgLCAzNS45Mzc1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19ib3R0b20ge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxOC43NXJlbSAsIDEyLjVyZW0gICsgIDMxLjI1dncgLCAzNS45Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTguNzVyZW0gLCAxMi41cmVtICArICAzMS4yNXZ3ICwgMzUuOTM3NXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19fYm90dG9tIHtcbiAgICAgIHdpZHRoOiBjYWxjKDE4Ljc1cmVtICsgMTcuMTg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbWctYmxvY2tfX2JvdHRvbSB7XG4gICAgd2lkdGg6IDE4Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgcGFkZGluZy1sZWZ0OiA4LjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS44NzVyZW0gLCAtMC4zOTc3MjcyNzI3cmVtICArICAxMS4zNjM2MzYzNjM2dncgLCA4LjEyNXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19faXRlbS0tc21hbGwge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMS44NzVyZW0gLCAtMC4zOTc3MjcyNzI3cmVtICArICAxMS4zNjM2MzYzNjM2dncgLCA4LjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjg3NXJlbSAsIC0wLjM5NzcyNzI3MjdyZW0gICsgIDExLjM2MzYzNjM2MzZ2dyAsIDguMTI1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMS44NzVyZW0gKyA2LjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmltZy1ibG9ja19faXRlbS0tc21hbGwge1xuICAgIHBhZGRpbmctbGVmdDogMS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjU5NjU5MDkwOTFyZW0gICsgIDEuNzA0NTQ1NDU0NXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICAgIG1hcmdpbi1yaWdodDogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNTk2NTkwOTA5MXJlbSAgKyAgMS43MDQ1NDU0NTQ1dncgLCAxLjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjU5NjU5MDkwOTFyZW0gICsgIDEuNzA0NTQ1NDU0NXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygwLjkzNzVyZW0gKyAwLjkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICB3aWR0aDogMTYuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDguNDM3NXJlbSAsIDUuMzY5MzE4MTgxOHJlbSAgKyAgMTUuMzQwOTA5MDkwOXZ3ICwgMTYuODc1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgICB3aWR0aDogY2xhbXAoIDguNDM3NXJlbSAsIDUuMzY5MzE4MTgxOHJlbSAgKyAgMTUuMzQwOTA5MDkwOXZ3ICwgMTYuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggOC40Mzc1cmVtICwgNS4zNjkzMTgxODE4cmVtICArICAxNS4zNDA5MDkwOTA5dncgLCAxNi44NzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICAgIHdpZHRoOiBjYWxjKDguNDM3NXJlbSArIDguNDM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICB3aWR0aDogOC40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgaGVpZ2h0OiA4Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCA1cmVtICwgMy42MzYzNjM2MzY0cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDguNzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDVyZW0gLCAzLjYzNjM2MzYzNjRyZW0gICsgIDYuODE4MTgxODE4MnZ3ICwgOC43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCA1cmVtICwgMy42MzYzNjM2MzY0cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDguNzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICAgIGhlaWdodDogY2FsYyg1cmVtICsgMy43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICBoZWlnaHQ6IDVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLW1pZGRsZSB7XG4gICAgd2lkdGg6IDE2Ljg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCA4LjQzNzVyZW0gLCA1LjM2OTMxODE4MThyZW0gICsgIDE1LjM0MDkwOTA5MDl2dyAsIDE2Ljg3NXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19faXRlbS0tbWlkZGxlIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggOC40Mzc1cmVtICwgNS4zNjkzMTgxODE4cmVtICArICAxNS4zNDA5MDkwOTA5dncgLCAxNi44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCA4LjQzNzVyZW0gLCA1LjM2OTMxODE4MThyZW0gICsgIDE1LjM0MDkwOTA5MDl2dyAsIDE2Ljg3NXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19faXRlbS0tbWlkZGxlIHtcbiAgICAgIHdpZHRoOiBjYWxjKDguNDM3NXJlbSArIDguNDM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLW1pZGRsZSB7XG4gICAgd2lkdGg6IDguNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmltZy1ibG9ja19faXRlbS0tbWlkZGxlIHtcbiAgICBoZWlnaHQ6IDE1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggNy44MTI1cmVtICwgNC45NzE1OTA5MDkxcmVtICArICAxNC4yMDQ1NDU0NTQ1dncgLCAxNS42MjVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLW1pZGRsZSB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCA3LjgxMjVyZW0gLCA0Ljk3MTU5MDkwOTFyZW0gICsgIDE0LjIwNDU0NTQ1NDV2dyAsIDE1LjYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCA3LjgxMjVyZW0gLCA0Ljk3MTU5MDkwOTFyZW0gICsgIDE0LjIwNDU0NTQ1NDV2dyAsIDE1LjYyNXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19faXRlbS0tbWlkZGxlIHtcbiAgICAgIGhlaWdodDogY2FsYyg3LjgxMjVyZW0gKyA3LjgxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1taWRkbGUge1xuICAgIGhlaWdodDogNy44MTI1cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jcmVhdGUtaW5mbyB7XG4gICAgcGFkZGluZy10b3A6IDUuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAxLjI5NTQ1NDU0NTVyZW0gICsgIDYuMDIyNzI3MjcyN3Z3ICwgNS44MTI1cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm8ge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAxLjI5NTQ1NDU0NTVyZW0gICsgIDYuMDIyNzI3MjcyN3Z3ICwgNS44MTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgMS4yOTU0NTQ1NDU1cmVtICArICA2LjAyMjcyNzI3Mjd2dyAsIDUuODEyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDIuNXJlbSArIDMuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jcmVhdGUtaW5mbyB7XG4gICAgcGFkZGluZy10b3A6IDIuNXJlbTtcbiAgfVxufVxuLmNyZWF0ZS1pbmZvX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgd2lkdGg6IDM1N3B4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi4zMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIDAuODYzNjM2MzYzNnJlbSAgKyAgMS45MzE4MTgxODE4dncgLCAyLjMxMjVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAwLjg2MzYzNjM2MzZyZW0gICsgIDEuOTMxODE4MTgxOHZ3ICwgMi4zMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgMC44NjM2MzYzNjM2cmVtICArICAxLjkzMTgxODE4MTh2dyAsIDIuMzEyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuMjVyZW0gKyAxLjA2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlLWluZm9fX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICB9XG59XG4uY3JlYXRlLWluZm9fX3RleHQge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgIHBhZGRpbmctbGVmdDogNS42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC4zNDA5MDkwOTA5cmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjM0MDkwOTA5MDlyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgNS42MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjM0MDkwOTA5MDlyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgNS42MjVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMS4yNXJlbSArIDQuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMy4zMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS42ODc1cmVtICwgMS4wOTY1OTA5MDkxcmVtICArICAyLjk1NDU0NTQ1NDV2dyAsIDMuMzEyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjY4NzVyZW0gLCAxLjA5NjU5MDkwOTFyZW0gICsgIDIuOTU0NTQ1NDU0NXZ3ICwgMy4zMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjY4NzVyZW0gLCAxLjA5NjU5MDkwOTFyZW0gICsgIDIuOTU0NTQ1NDU0NXZ3ICwgMy4zMTI1cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjY4NzVyZW0gKyAxLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS42ODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgIHdpZHRoOiAyNy4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDEzLjkwOTA5MDkwOTFyZW0gICsgIDE3Ljk1NDU0NTQ1NDV2dyAsIDI3LjM3NXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDEzLjkwOTA5MDkwOTFyZW0gICsgIDE3Ljk1NDU0NTQ1NDV2dyAsIDI3LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxMy45MDkwOTA5MDkxcmVtICArICAxNy45NTQ1NDU0NTQ1dncgLCAyNy4zNzVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgICB3aWR0aDogY2FsYygxNy41cmVtICsgOS44NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgIHdpZHRoOiAxNy41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAzNy45OHB4KSB7XG4gIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgzLjk4cHgpIHtcbiAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODMuOThweCkgYW5kIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4My45OHB4KSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgMC43OTU0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDIuNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjc5NTQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMi41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjc5NTQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMi41cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuMjVyZW0gKyAxLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4My45OHB4KSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX19idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiA1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuMzQwOTA5MDkwOXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA1LjYyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX19idG4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuMzQwOTA5MDkwOXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA1LjYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC4zNDA5MDkwOTA5cmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm9fX2J0biB7XG4gICAgICBtYXJnaW4tbGVmdDogY2FsYygxLjI1cmVtICsgNC4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlLWluZm9fX2J0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDM3Ljk4cHgpIHtcbiAgLmNyZWF0ZS1pbmZvX19idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgzLjk4cHgpIGFuZCAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jcmVhdGUtaW5mb19fYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgzLjk4cHgpIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIDAuNzk1NDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAyLjVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fYnRuIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIDAuNzk1NDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAyLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgMC43OTU0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDIuNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX19idG4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMS4yNXJlbSArIDEuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgzLjk4cHgpIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jcmVhdGUtaW5mb19fYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAudmFsdWVzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTMuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIC0xLjQ1NDU0NTQ1NDVyZW0gICsgIDE5Ljc3MjcyNzI3Mjd2dyAsIDEzLjM3NXJlbSApKSB7XG4gICAgLnZhbHVlcyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIC0xLjQ1NDU0NTQ1NDVyZW0gICsgIDE5Ljc3MjcyNzI3Mjd2dyAsIDEzLjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIC0xLjQ1NDU0NTQ1NDVyZW0gICsgIDE5Ljc3MjcyNzI3Mjd2dyAsIDEzLjM3NXJlbSApKSB7XG4gICAgLnZhbHVlcyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygyLjVyZW0gKyAxMC44NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAudmFsdWVzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xuICB9XG59XG4udmFsdWVzX190aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC52YWx1ZXNfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDMuNDM3NXJlbSAsIDIuNDE0NzcyNzI3M3JlbSAgKyAgNS4xMTM2MzYzNjM2dncgLCA2LjI1cmVtICkpIHtcbiAgICAudmFsdWVzX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAzLjQzNzVyZW0gLCAyLjQxNDc3MjcyNzNyZW0gICsgIDUuMTEzNjM2MzYzNnZ3ICwgNi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAzLjQzNzVyZW0gLCAyLjQxNDc3MjcyNzNyZW0gICsgIDUuMTEzNjM2MzYzNnZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLnZhbHVlc19fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDMuNDM3NXJlbSArIDIuODEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC52YWx1ZXNfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDMuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnZhbHVlc19fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDUuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMi41cmVtICwgMS40NTQ1NDU0NTQ1cmVtICArICA1LjIyNzI3MjcyNzN2dyAsIDUuMzc1cmVtICkpIHtcbiAgICAudmFsdWVzX190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMi41cmVtICwgMS40NTQ1NDU0NTQ1cmVtICArICA1LjIyNzI3MjcyNzN2dyAsIDUuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAxLjQ1NDU0NTQ1NDVyZW0gICsgIDUuMjI3MjcyNzI3M3Z3ICwgNS4zNzVyZW0gKSkge1xuICAgIC52YWx1ZXNfX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMi41cmVtICsgMi44NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAudmFsdWVzX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICB9XG59XG4udmFsdWVzX19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC52YWx1ZXNfX2xpc3Qge1xuICAgIGdhcDogNC42ODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChnYXA6IGNsYW1wKCAyLjVyZW0gLCAxLjcwNDU0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNC42ODc1cmVtICkpIHtcbiAgICAudmFsdWVzX19saXN0IHtcbiAgICAgIGdhcDogY2xhbXAoIDIuNXJlbSAsIDEuNzA0NTQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjY4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMi41cmVtICwgMS43MDQ1NDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDQuNjg3NXJlbSApKSB7XG4gICAgLnZhbHVlc19fbGlzdCB7XG4gICAgICBnYXA6IGNhbGMoMi41cmVtICsgMi4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnZhbHVlc19fbGlzdCB7XG4gICAgZ2FwOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NTEuOThweCkge1xuICAudmFsdWVzX19saXN0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbn1cbi52YWx1ZXNfX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAudmFsdWVzX19pdGVtIHtcbiAgICB3aWR0aDogMjEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTMuNTc5NTQ1NDU0NXJlbSAgKyAgMTAuMjI3MjcyNzI3M3Z3ICwgMjEuMjVyZW0gKSkge1xuICAgIC52YWx1ZXNfX2l0ZW0ge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMy41Nzk1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAyMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDEzLjU3OTU0NTQ1NDVyZW0gICsgIDEwLjIyNzI3MjcyNzN2dyAsIDIxLjI1cmVtICkpIHtcbiAgICAudmFsdWVzX19pdGVtIHtcbiAgICAgIHdpZHRoOiBjYWxjKDE1LjYyNXJlbSArIDUuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnZhbHVlc19faXRlbSB7XG4gICAgd2lkdGg6IDE1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnZhbHVlc19faXRlbSB7XG4gICAgcGFkZGluZy1sZWZ0OiA2LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICkpIHtcbiAgICAudmFsdWVzX19pdGVtIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLnZhbHVlc19faXRlbSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMy4xMjVyZW0gKyAzLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC52YWx1ZXNfX2l0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NTEuOThweCkge1xuICAudmFsdWVzX19pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLnZhbHVlc19faW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAudmFsdWVzX19pbWcge1xuICAgIHdpZHRoOiA0LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAyLjE4NzVyZW0gLCAxLjM5MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNC4zNzVyZW0gKSkge1xuICAgIC52YWx1ZXNfX2ltZyB7XG4gICAgICB3aWR0aDogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMzkyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMzkyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjM3NXJlbSApKSB7XG4gICAgLnZhbHVlc19faW1nIHtcbiAgICAgIHdpZHRoOiBjYWxjKDIuMTg3NXJlbSArIDIuMTg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC52YWx1ZXNfX2ltZyB7XG4gICAgd2lkdGg6IDIuMTg3NXJlbTtcbiAgfVxufVxuLnZhbHVlc19fbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBtYXJnaW4tYm90dG9tOiAxN3B4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnZhbHVlc19fbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxLjI1cmVtICwgMS4xNTkwOTA5MDkxcmVtICArICAwLjQ1NDU0NTQ1NDV2dyAsIDEuNXJlbSApKSB7XG4gICAgLnZhbHVlc19fbGFiZWwge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMS4yNXJlbSAsIDEuMTU5MDkwOTA5MXJlbSAgKyAgMC40NTQ1NDU0NTQ1dncgLCAxLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMS4yNXJlbSAsIDEuMTU5MDkwOTA5MXJlbSAgKyAgMC40NTQ1NDU0NTQ1dncgLCAxLjVyZW0gKSkge1xuICAgIC52YWx1ZXNfX2xhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjI1cmVtICsgMC4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC52YWx1ZXNfX2xhYmVsIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbn1cbi52YWx1ZXNfX3RleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1hcmdpbi1ib3R0b206IDE5cHg7XG59XG4udmFsdWVzX19tb3JlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnZhbHVlc19fbW9yZTpob3ZlciAudmFsdWVzX19pY29uIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpO1xufVxuLnZhbHVlc19faWNvbiB7XG4gIGZpbGw6IHZhcigtLWRhcmstY2wpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xufVxuXG4uc3dpcGVyLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDhyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgMC41cmVtICArICAxMHZ3ICwgOHJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgMC41cmVtICArICAxMHZ3ICwgOHJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIDAuNXJlbSAgKyAgMTB2dyAsIDhyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbiB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygyLjVyZW0gKyA1LjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLXNlY3Rpb24ge1xuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbiB7XG4gICAgcGFkZGluZy1ib3R0b206IDEyLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIC0xLjA0NTQ1NDU0NTVyZW0gICsgIDE3LjcyNzI3MjcyNzN2dyAsIDEyLjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb24ge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAtMS4wNDU0NTQ1NDU1cmVtICArICAxNy43MjcyNzI3MjczdncgLCAxMi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIC0xLjA0NTQ1NDU0NTVyZW0gICsgIDE3LjcyNzI3MjcyNzN2dyAsIDEyLjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb24ge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMi41cmVtICsgOS43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbiB7XG4gICAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcbiAgfVxufVxuLnN3aXBlci1zZWN0aW9uX19jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc3dpcGVyLXNlY3Rpb25fX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIzJTtcbiAgdG9wOiAyMyU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgd2lkdGg6IDQwLjA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uX19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgICB3aWR0aDogY2FsYygxMi41cmVtICsgMjcuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgd2lkdGg6IDEyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgaGVpZ2h0OiA0MC4wNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgaGVpZ2h0OiBjYWxjKDEyLjVyZW0gKyAyNy41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX19jb250YWluZXI6OmFmdGVyIHtcbiAgICBoZWlnaHQ6IDEyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkge1xuICAuc3dpcGVyLXNlY3Rpb25fX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5zd2lwZXItc2VjdGlvbl9fd3JhcHBlciB7XG4gIHotaW5kZXg6IDI7XG59XG4uc3dpcGVyLXNlY3Rpb25fX3NsaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9faW1nLXF1b3RlIHtcbiAgICB3aWR0aDogMi4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMS4xODc1cmVtICwgMC43NTU2ODE4MTgycmVtICArICAyLjE1OTA5MDkwOTF2dyAsIDIuMzc1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX2ltZy1xdW90ZSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDEuMTg3NXJlbSAsIDAuNzU1NjgxODE4MnJlbSAgKyAgMi4xNTkwOTA5MDkxdncgLCAyLjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDEuMTg3NXJlbSAsIDAuNzU1NjgxODE4MnJlbSAgKyAgMi4xNTkwOTA5MDkxdncgLCAyLjM3NXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uX19pbWctcXVvdGUge1xuICAgICAgd2lkdGg6IGNhbGMoMS4xODc1cmVtICsgMS4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX19pbWctcXVvdGUge1xuICAgIHdpZHRoOiAxLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9faW1nLXF1b3RlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIC0wLjM4NjM2MzYzNjRyZW0gICsgIDguMTgxODE4MTgxOHZ3ICwgNS43NXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uX19pbWctcXVvdGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAtMC4zODYzNjM2MzY0cmVtICArICA4LjE4MTgxODE4MTh2dyAsIDUuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAtMC4zODYzNjM2MzY0cmVtICArICA4LjE4MTgxODE4MTh2dyAsIDUuNzVyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbl9faW1nLXF1b3RlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS4yNXJlbSArIDQuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9faW1nLXF1b3RlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICB9XG59XG4uc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX190ZXh0IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC43MzI5NTQ1NDU1cmVtICArICAxLjAyMjcyNzI3Mjd2dyAsIDEuNXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uX190ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNzMyOTU0NTQ1NXJlbSAgKyAgMS4wMjI3MjcyNzI3dncgLCAxLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC43MzI5NTQ1NDU1cmVtICArICAxLjAyMjcyNzI3Mjd2dyAsIDEuNXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uX190ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjkzNzVyZW0gKyAwLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICAgIHdpZHRoOiA0Mi4wNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE4Ljc1cmVtICwgMTAuMjcyNzI3MjcyN3JlbSAgKyAgNDIuMzg2MzYzNjM2NHZ3ICwgNDIuMDYyNXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uX190ZXh0IHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTguNzVyZW0gLCAxMC4yNzI3MjcyNzI3cmVtICArICA0Mi4zODYzNjM2MzY0dncgLCA0Mi4wNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTguNzVyZW0gLCAxMC4yNzI3MjcyNzI3cmVtICArICA0Mi4zODYzNjM2MzY0dncgLCA0Mi4wNjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICAgICAgd2lkdGg6IGNhbGMoMTguNzVyZW0gKyAyMy4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX190ZXh0IHtcbiAgICB3aWR0aDogMTguNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9fdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi4wNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC41Mjg0MDkwOTA5cmVtICArICAyLjA0NTQ1NDU0NTV2dyAsIDIuMDYyNXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uX190ZXh0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjUyODQwOTA5MDlyZW0gICsgIDIuMDQ1NDU0NTQ1NXZ3ICwgMi4wNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjUyODQwOTA5MDlyZW0gICsgIDIuMDQ1NDU0NTQ1NXZ3ICwgMi4wNjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygwLjkzNzVyZW0gKyAxLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9fdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xuICB9XG59XG4uc3dpcGVyLXNlY3Rpb25fX2F1dGhvciB7XG4gIGNvbG9yOiAjOTY5Njk2O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuXG4uc2Vjb25kLWNvdW50ZXIge1xuICB6LWluZGV4OiAyO1xuICBsZWZ0OiA0NyU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zZWNvbmQtY291bnRlciB7XG4gICAgYm90dG9tOiAtNy41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChib3R0b206IGNsYW1wKCAtNy41cmVtICwgMi43MjcyNzI4MTI1cmVtICArICAtMTMuNjM2MzYzNzV2dyAsIDAuMDAwMDAwMDYyNXJlbSApKSB7XG4gICAgLnNlY29uZC1jb3VudGVyIHtcbiAgICAgIGJvdHRvbTogY2xhbXAoIC03LjVyZW0gLCAyLjcyNzI3MjgxMjVyZW0gICsgIC0xMy42MzYzNjM3NXZ3ICwgMC4wMDAwMDAwNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGJvdHRvbTogY2xhbXAoIC03LjVyZW0gLCAyLjcyNzI3MjgxMjVyZW0gICsgIC0xMy42MzYzNjM3NXZ3ICwgMC4wMDAwMDAwNjI1cmVtICkpIHtcbiAgICAuc2Vjb25kLWNvdW50ZXIge1xuICAgICAgYm90dG9tOiBjYWxjKDAuMDAwMDAwMDYyNXJlbSArIC03LjUwMDAwMDA2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc2Vjb25kLWNvdW50ZXIge1xuICAgIGJvdHRvbTogMC4wMDAwMDAwNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuc2Vjb25kLWNvdW50ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5zZWNvbmQtY291bnRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDQwNXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zZWNvbmQtY291bnRlcjo6YmVmb3JlIHtcbiAgICBsZWZ0OiAtMzQuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGxlZnQ6IGNsYW1wKCAtMzQuMjVyZW0gLCAwLjk0ODg2MzYzNjRyZW0gICsgIC00Ni45MzE4MTgxODE4dncgLCAtOC40Mzc1cmVtICkpIHtcbiAgICAuc2Vjb25kLWNvdW50ZXI6OmJlZm9yZSB7XG4gICAgICBsZWZ0OiBjbGFtcCggLTM0LjI1cmVtICwgMC45NDg4NjM2MzY0cmVtICArICAtNDYuOTMxODE4MTgxOHZ3ICwgLTguNDM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChsZWZ0OiBjbGFtcCggLTM0LjI1cmVtICwgMC45NDg4NjM2MzY0cmVtICArICAtNDYuOTMxODE4MTgxOHZ3ICwgLTguNDM3NXJlbSApKSB7XG4gICAgLnNlY29uZC1jb3VudGVyOjpiZWZvcmUge1xuICAgICAgbGVmdDogY2FsYygtOC40Mzc1cmVtICsgLTI1LjgxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc2Vjb25kLWNvdW50ZXI6OmJlZm9yZSB7XG4gICAgbGVmdDogLTguNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnNlY29uZC1jb3VudGVyOjpiZWZvcmUge1xuICAgIHdpZHRoOiAxMC41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDVyZW0gLCAzcmVtICArICAxMHZ3ICwgMTAuNXJlbSApKSB7XG4gICAgLnNlY29uZC1jb3VudGVyOjpiZWZvcmUge1xuICAgICAgd2lkdGg6IGNsYW1wKCA1cmVtICwgM3JlbSAgKyAgMTB2dyAsIDEwLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCA1cmVtICwgM3JlbSAgKyAgMTB2dyAsIDEwLjVyZW0gKSkge1xuICAgIC5zZWNvbmQtY291bnRlcjo6YmVmb3JlIHtcbiAgICAgIHdpZHRoOiBjYWxjKDVyZW0gKyA1LjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc2Vjb25kLWNvdW50ZXI6OmJlZm9yZSB7XG4gICAgd2lkdGg6IDVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5zZWNvbmQtY291bnRlcjo6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uc2Vjb25kLWNvdW50ZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwMHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnNlY29uZC1jb3VudGVyOjphZnRlciB7XG4gICAgcmlnaHQ6IC0zNnJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocmlnaHQ6IGNsYW1wKCAtMzZyZW0gLCAyLjg2MzYzNjM2MzZyZW0gICsgIC01MS44MTgxODE4MTgydncgLCAtNy41cmVtICkpIHtcbiAgICAuc2Vjb25kLWNvdW50ZXI6OmFmdGVyIHtcbiAgICAgIHJpZ2h0OiBjbGFtcCggLTM2cmVtICwgMi44NjM2MzYzNjM2cmVtICArICAtNTEuODE4MTgxODE4MnZ3ICwgLTcuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChyaWdodDogY2xhbXAoIC0zNnJlbSAsIDIuODYzNjM2MzYzNnJlbSAgKyAgLTUxLjgxODE4MTgxODJ2dyAsIC03LjVyZW0gKSkge1xuICAgIC5zZWNvbmQtY291bnRlcjo6YWZ0ZXIge1xuICAgICAgcmlnaHQ6IGNhbGMoLTcuNXJlbSArIC0yOC41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnNlY29uZC1jb3VudGVyOjphZnRlciB7XG4gICAgcmlnaHQ6IC03LjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zZWNvbmQtY291bnRlcjo6YWZ0ZXIge1xuICAgIHdpZHRoOiA0LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAyLjE4NzVyZW0gLCAxLjM5MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNC4zNzVyZW0gKSkge1xuICAgIC5zZWNvbmQtY291bnRlcjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IGNsYW1wKCAyLjE4NzVyZW0gLCAxLjM5MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNC4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAyLjE4NzVyZW0gLCAxLjM5MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNC4zNzVyZW0gKSkge1xuICAgIC5zZWNvbmQtY291bnRlcjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IGNhbGMoMi4xODc1cmVtICsgMi4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnNlY29uZC1jb3VudGVyOjphZnRlciB7XG4gICAgd2lkdGg6IDIuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLnNlY29uZC1jb3VudGVyOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY2xpZW50cyB7XG4gICAgcGFkZGluZy10b3A6IDkuNjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAtMC4xMTM2MzYzNjM2cmVtICArICAxMy4wNjgxODE4MTgydncgLCA5LjY4NzVyZW0gKSkge1xuICAgIC5jbGllbnRzIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgLTAuMTEzNjM2MzYzNnJlbSAgKyAgMTMuMDY4MTgxODE4MnZ3ICwgOS42ODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgLTAuMTEzNjM2MzYzNnJlbSAgKyAgMTMuMDY4MTgxODE4MnZ3ICwgOS42ODc1cmVtICkpIHtcbiAgICAuY2xpZW50cyB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygyLjVyZW0gKyA3LjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY2xpZW50cyB7XG4gICAgcGFkZGluZy10b3A6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNsaWVudHMge1xuICAgIHBhZGRpbmctYm90dG9tOiA5LjY4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMi41cmVtICwgLTAuMTEzNjM2MzYzNnJlbSAgKyAgMTMuMDY4MTgxODE4MnZ3ICwgOS42ODc1cmVtICkpIHtcbiAgICAuY2xpZW50cyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIC0wLjExMzYzNjM2MzZyZW0gICsgIDEzLjA2ODE4MTgxODJ2dyAsIDkuNjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIC0wLjExMzYzNjM2MzZyZW0gICsgIDEzLjA2ODE4MTgxODJ2dyAsIDkuNjg3NXJlbSApKSB7XG4gICAgLmNsaWVudHMge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMi41cmVtICsgNy4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNsaWVudHMge1xuICAgIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XG4gIH1cbn1cbi5jbGllbnRzX19jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDk3NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc3OS45OHB4KSB7XG4gIC5jbGllbnRzX19jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jbGllbnRzX190aXRsZS1ibG9jayB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTUuOTA5MDkwODIzOXJlbSAgKyAgMjkuNTQ1NDU0NDMxOHZ3ICwgMTYuMjVyZW0gKSkge1xuICAgIC5jbGllbnRzX190aXRsZS1ibG9jayB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtNS45MDkwOTA4MjM5cmVtICArICAyOS41NDU0NTQ0MzE4dncgLCAxNi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtNS45MDkwOTA4MjM5cmVtICArICAyOS41NDU0NTQ0MzE4dncgLCAxNi4yNXJlbSApKSB7XG4gICAgLmNsaWVudHNfX3RpdGxlLWJsb2NrIHtcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygwLjAwMDAwMDA2MjVyZW0gKyAxNi4yNDk5OTk5Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNsaWVudHNfX3RpdGxlLWJsb2NrIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMDAwMDAwMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc3OS45OHB4KSB7XG4gIC5jbGllbnRzX190aXRsZS1ibG9jayB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLmNsaWVudHNfX3VwcGVydGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNsaWVudHNfX3VwcGVydGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNjY0NzcyNzI3M3JlbSAgKyAgMS4zNjM2MzYzNjM2dncgLCAxLjY4NzVyZW0gKSkge1xuICAgIC5jbGllbnRzX191cHBlcnRpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjY2NDc3MjcyNzNyZW0gICsgIDEuMzYzNjM2MzYzNnZ3ICwgMS42ODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjY2NDc3MjcyNzNyZW0gICsgIDEuMzYzNjM2MzYzNnZ3ICwgMS42ODc1cmVtICkpIHtcbiAgICAuY2xpZW50c19fdXBwZXJ0aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDAuOTM3NXJlbSArIDAuNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY2xpZW50c19fdXBwZXJ0aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xuICB9XG59XG4uY2xpZW50c19fdGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNsaWVudHNfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDIuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxLjVyZW0gLCAxLjI3MjcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xMjVyZW0gKSkge1xuICAgIC5jbGllbnRzX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAxLjVyZW0gLCAxLjI3MjcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMS4yNzI3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTI1cmVtICkpIHtcbiAgICAuY2xpZW50c19fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDEuNXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNsaWVudHNfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNsaWVudHNfX3RpdGxlIHtcbiAgICB3aWR0aDogMTYuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggNy44MTI1cmVtICwgNC41NjI1cmVtICArICAxNi4yNXZ3ICwgMTYuNzVyZW0gKSkge1xuICAgIC5jbGllbnRzX190aXRsZSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDcuODEyNXJlbSAsIDQuNTYyNXJlbSAgKyAgMTYuMjV2dyAsIDE2Ljc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggNy44MTI1cmVtICwgNC41NjI1cmVtICArICAxNi4yNXZ3ICwgMTYuNzVyZW0gKSkge1xuICAgIC5jbGllbnRzX190aXRsZSB7XG4gICAgICB3aWR0aDogY2FsYyg3LjgxMjVyZW0gKyA4LjkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY2xpZW50c19fdGl0bGUge1xuICAgIHdpZHRoOiA3LjgxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NzkuOThweCkge1xuICAuY2xpZW50c19fdGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cbi5jbGllbnRzX19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY2xpZW50c19fbGlzdCB7XG4gICAgcm93LWdhcDogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHJvdy1nYXA6IGNsYW1wKCAxLjg3NXJlbSAsIDEuNDIwNDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAzLjEyNXJlbSApKSB7XG4gICAgLmNsaWVudHNfX2xpc3Qge1xuICAgICAgcm93LWdhcDogY2xhbXAoIDEuODc1cmVtICwgMS40MjA0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDMuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHJvdy1nYXA6IGNsYW1wKCAxLjg3NXJlbSAsIDEuNDIwNDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAzLjEyNXJlbSApKSB7XG4gICAgLmNsaWVudHNfX2xpc3Qge1xuICAgICAgcm93LWdhcDogY2FsYygxLjg3NXJlbSArIDEuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY2xpZW50c19fbGlzdCB7XG4gICAgcm93LWdhcDogMS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NzkuOThweCkge1xuICAuY2xpZW50c19fbGlzdCB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubmV3IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTByZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMi41cmVtICwgLTAuMjI3MjcyNzI3M3JlbSAgKyAgMTMuNjM2MzYzNjM2NHZ3ICwgMTByZW0gKSkge1xuICAgIC5uZXcge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAtMC4yMjcyNzI3MjczcmVtICArICAxMy42MzYzNjM2MzY0dncgLCAxMHJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIC0wLjIyNzI3MjcyNzNyZW0gICsgIDEzLjYzNjM2MzYzNjR2dyAsIDEwcmVtICkpIHtcbiAgICAubmV3IHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDIuNXJlbSArIDcuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5uZXcge1xuICAgIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XG4gIH1cbn1cbi5uZXdfX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5uZXdfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubmV3X19jb250YWluZXI6OmFmdGVyIHtcbiAgICBib3R0b206IC0xMHJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoYm90dG9tOiBjbGFtcCggLTEwcmVtICwgLTIuMzI5NTQ1NDU0NXJlbSAgKyAgLTEwLjIyNzI3MjcyNzN2dyAsIC00LjM3NXJlbSApKSB7XG4gICAgLm5ld19fY29udGFpbmVyOjphZnRlciB7XG4gICAgICBib3R0b206IGNsYW1wKCAtMTByZW0gLCAtMi4zMjk1NDU0NTQ1cmVtICArICAtMTAuMjI3MjcyNzI3M3Z3ICwgLTQuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGJvdHRvbTogY2xhbXAoIC0xMHJlbSAsIC0yLjMyOTU0NTQ1NDVyZW0gICsgIC0xMC4yMjcyNzI3MjczdncgLCAtNC4zNzVyZW0gKSkge1xuICAgIC5uZXdfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgYm90dG9tOiBjYWxjKC00LjM3NXJlbSArIC01LjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5uZXdfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIGJvdHRvbTogLTQuMzc1cmVtO1xuICB9XG59XG4ubmV3X190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5uZXdfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDEuNXJlbSAsIDAuOTU0NTQ1NDU0NXJlbSAgKyAgMi43MjcyNzI3MjczdncgLCAzcmVtICkpIHtcbiAgICAubmV3X190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAxLjVyZW0gLCAwLjk1NDU0NTQ1NDVyZW0gICsgIDIuNzI3MjcyNzI3M3Z3ICwgM3JlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAxLjVyZW0gLCAwLjk1NDU0NTQ1NDVyZW0gICsgIDIuNzI3MjcyNzI3M3Z3ICwgM3JlbSApKSB7XG4gICAgLm5ld19fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDEuNXJlbSArIDEuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5uZXdfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm5ld19fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDUuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS44NzVyZW0gLCAwLjUxMTM2MzYzNjRyZW0gICsgIDYuODE4MTgxODE4MnZ3ICwgNS42MjVyZW0gKSkge1xuICAgIC5uZXdfX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjg3NXJlbSAsIDAuNTExMzYzNjM2NHJlbSAgKyAgNi44MTgxODE4MTgydncgLCA1LjYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS44NzVyZW0gLCAwLjUxMTM2MzYzNjRyZW0gICsgIDYuODE4MTgxODE4MnZ3ICwgNS42MjVyZW0gKSkge1xuICAgIC5uZXdfX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS44NzVyZW0gKyAzLjc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm5ld19fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDEuODc1cmVtO1xuICB9XG59XG4ubmV3X19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5uZXdfX2xpc3Qge1xuICAgIGdhcDogMS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGdhcDogY2xhbXAoIDEuODc1cmVtICwgMi43MjcyNzI3MjczcmVtICArICAtMS4xMzYzNjM2MzY0dncgLCAyLjVyZW0gKSkge1xuICAgIC5uZXdfX2xpc3Qge1xuICAgICAgZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAyLjcyNzI3MjcyNzNyZW0gICsgIC0xLjEzNjM2MzYzNjR2dyAsIDIuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChnYXA6IGNsYW1wKCAxLjg3NXJlbSAsIDIuNzI3MjcyNzI3M3JlbSAgKyAgLTEuMTM2MzYzNjM2NHZ3ICwgMi41cmVtICkpIHtcbiAgICAubmV3X19saXN0IHtcbiAgICAgIGdhcDogY2FsYygyLjVyZW0gKyAtMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubmV3X19saXN0IHtcbiAgICBnYXA6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm5ld19fbGlzdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuODc1cmVtICwgMC43Mzg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDVyZW0gKSkge1xuICAgIC5uZXdfX2xpc3Qge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuODc1cmVtICwgMC43Mzg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuODc1cmVtICwgMC43Mzg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDVyZW0gKSkge1xuICAgIC5uZXdfX2xpc3Qge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjg3NXJlbSArIDMuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm5ld19fbGlzdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS44NzVyZW07XG4gIH1cbn1cbi5uZXdfX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubmV3X19pdGVtIHtcbiAgICB3aWR0aDogMjMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxNS40NTQ1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAyMy4xMjVyZW0gKSkge1xuICAgIC5uZXdfX2l0ZW0ge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTUuNDU0NTQ1NDU0NXJlbSAgKyAgMTAuMjI3MjcyNzI3M3Z3ICwgMjMuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDE1LjQ1NDU0NTQ1NDVyZW0gICsgIDEwLjIyNzI3MjcyNzN2dyAsIDIzLjEyNXJlbSApKSB7XG4gICAgLm5ld19faXRlbSB7XG4gICAgICB3aWR0aDogY2FsYygxNy41cmVtICsgNS42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubmV3X19pdGVtIHtcbiAgICB3aWR0aDogMTcuNXJlbTtcbiAgfVxufVxuLm5ld19fZGF0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMzUlO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubmV3X19kYXRlIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjYyNXJlbSAsIDAuNTM0MDkwOTA5MXJlbSAgKyAgMC40NTQ1NDU0NTQ1dncgLCAwLjg3NXJlbSApKSB7XG4gICAgLm5ld19fZGF0ZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjYyNXJlbSAsIDAuNTM0MDkwOTA5MXJlbSAgKyAgMC40NTQ1NDU0NTQ1dncgLCAwLjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjYyNXJlbSAsIDAuNTM0MDkwOTA5MXJlbSAgKyAgMC40NTQ1NDU0NTQ1dncgLCAwLjg3NXJlbSApKSB7XG4gICAgLm5ld19fZGF0ZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC42MjVyZW0gKyAwLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm5ld19fZGF0ZSB7XG4gICAgZm9udC1zaXplOiAwLjYyNXJlbTtcbiAgfVxufVxuLm5ld19faW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5uZXdfX2ltYWdlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjY4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjY2NDc3MjcyNzNyZW0gICsgIDEuMzYzNjM2MzYzNnZ3ICwgMS42ODc1cmVtICkpIHtcbiAgICAubmV3X19pbWFnZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC42NjQ3NzI3MjczcmVtICArICAxLjM2MzYzNjM2MzZ2dyAsIDEuNjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC42NjQ3NzI3MjczcmVtICArICAxLjM2MzYzNjM2MzZ2dyAsIDEuNjg3NXJlbSApKSB7XG4gICAgLm5ld19faW1hZ2Uge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygwLjkzNzVyZW0gKyAwLjc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm5ld19faW1hZ2Uge1xuICAgIG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcbiAgfVxufVxuLm5ld19fdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubmV3X190ZXh0IHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDFyZW0gLCAwLjkwOTA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLm5ld19fdGV4dCB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAxcmVtICwgMC45MDkwOTA5MDkxcmVtICArICAwLjQ1NDU0NTQ1NDV2dyAsIDEuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMXJlbSAsIDAuOTA5MDkwOTA5MXJlbSAgKyAgMC40NTQ1NDU0NTQ1dncgLCAxLjI1cmVtICkpIHtcbiAgICAubmV3X190ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMC4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5uZXdfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm5ld19fdGV4dCB7XG4gICAgd2lkdGg6IDE4LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxNi4yNXJlbSAsIDE1LjQ3NzI3MjcyNzNyZW0gICsgIDMuODYzNjM2MzYzNnZ3ICwgMTguMzc1cmVtICkpIHtcbiAgICAubmV3X190ZXh0IHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTYuMjVyZW0gLCAxNS40NzcyNzI3MjczcmVtICArICAzLjg2MzYzNjM2MzZ2dyAsIDE4LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE2LjI1cmVtICwgMTUuNDc3MjcyNzI3M3JlbSAgKyAgMy44NjM2MzYzNjM2dncgLCAxOC4zNzVyZW0gKSkge1xuICAgIC5uZXdfX3RleHQge1xuICAgICAgd2lkdGg6IGNhbGMoMTYuMjVyZW0gKyAyLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5uZXdfX3RleHQge1xuICAgIHdpZHRoOiAxNi4yNXJlbTtcbiAgfVxufVxuLm5ld19fYnRuIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC53b3JrIHtcbiAgICBwYWRkaW5nLXRvcDogOS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgLTAuMTgxODE4MTgxOHJlbSAgKyAgMTMuNDA5MDkwOTA5MXZ3ICwgOS44NzVyZW0gKSkge1xuICAgIC53b3JrIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgLTAuMTgxODE4MTgxOHJlbSAgKyAgMTMuNDA5MDkwOTA5MXZ3ICwgOS44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAtMC4xODE4MTgxODE4cmVtICArICAxMy40MDkwOTA5MDkxdncgLCA5Ljg3NXJlbSApKSB7XG4gICAgLndvcmsge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMi41cmVtICsgNy4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAud29yayB7XG4gICAgcGFkZGluZy10b3A6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLndvcmsge1xuICAgIHBhZGRpbmctYm90dG9tOiA5Ljg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAtMC4xODE4MTgxODE4cmVtICArICAxMy40MDkwOTA5MDkxdncgLCA5Ljg3NXJlbSApKSB7XG4gICAgLndvcmsge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAtMC4xODE4MTgxODE4cmVtICArICAxMy40MDkwOTA5MDkxdncgLCA5Ljg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIC0wLjE4MTgxODE4MThyZW0gICsgIDEzLjQwOTA5MDkwOTF2dyAsIDkuODc1cmVtICkpIHtcbiAgICAud29yayB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygyLjVyZW0gKyA3LjM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC53b3JrIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xuICB9XG59XG4ud29ya19fY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLndvcmtfX2Jsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY0OS45OHB4KSB7XG4gIC53b3JrX19ibG9jayB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuLndvcmtfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC53b3JrX190aXRsZSB7XG4gICAgd2lkdGg6IDMwLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTAuMzI5NTQ1NDU0NXJlbSAgKyAgMjYuNDc3MjcyNzI3M3Z3ICwgMzAuMTg3NXJlbSApKSB7XG4gICAgLndvcmtfX3RpdGxlIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTAuMzI5NTQ1NDU0NXJlbSAgKyAgMjYuNDc3MjcyNzI3M3Z3ICwgMzAuMTg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDEwLjMyOTU0NTQ1NDVyZW0gICsgIDI2LjQ3NzI3MjcyNzN2dyAsIDMwLjE4NzVyZW0gKSkge1xuICAgIC53b3JrX190aXRsZSB7XG4gICAgICB3aWR0aDogY2FsYygxNS42MjVyZW0gKyAxNC41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLndvcmtfX3RpdGxlIHtcbiAgICB3aWR0aDogMTUuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAud29ya19fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLndvcmtfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLndvcmtfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygzLjEyNXJlbSArIDMuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLndvcmtfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDMuMTI1cmVtO1xuICB9XG59XG4ud29ya19fdGl0bGUgc3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbn1cbi53b3JrX190aXRsZSBzcGFuOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xufVxuLndvcmtfX2ltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDclO1xuICBib3R0b206IDM4cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAud29ya19faW1nIHtcbiAgICB3aWR0aDogMTQuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDcuMTg3NXJlbSAsIDQuNTczODYzNjM2NHJlbSAgKyAgMTMuMDY4MTgxODE4MnZ3ICwgMTQuMzc1cmVtICkpIHtcbiAgICAud29ya19faW1nIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggNy4xODc1cmVtICwgNC41NzM4NjM2MzY0cmVtICArICAxMy4wNjgxODE4MTgydncgLCAxNC4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCA3LjE4NzVyZW0gLCA0LjU3Mzg2MzYzNjRyZW0gICsgIDEzLjA2ODE4MTgxODJ2dyAsIDE0LjM3NXJlbSApKSB7XG4gICAgLndvcmtfX2ltZyB7XG4gICAgICB3aWR0aDogY2FsYyg3LjE4NzVyZW0gKyA3LjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAud29ya19faW1nIHtcbiAgICB3aWR0aDogNy4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjQ5Ljk4cHgpIHtcbiAgLndvcmtfX2ltZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLndvcmtfX2xpbmsge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xufVxuLndvcmtfX2xpbms6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbn1cblxuOnJvb3Qge1xuICAtLWRhcmstY2w6ICMwRTBFMEU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL251bGwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9wb3B1cC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9mb290ZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvaG9tZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy91dGlscy92YXJzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FER0Q7O0FDREE7OztFQUdDLHNCQUFBO0FESUQ7O0FDTUE7O0VBRUMsWUFBQTtFQUNBLGdCQUFBO0FESEQ7O0FDS0E7RUFDQyxjQUFBO0VBQ0EsY0FBQTtFQUNBLG9CRE5ZO0VDT1osb0JETlU7RUNRViwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FESEQ7O0FDS0E7OztFQUdDLG9CRGxCWTtFQ21CWixrQkFBQTtFQUNBLG9CQUFBO0FERkQ7O0FDSUE7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FEREQ7O0FDR0E7RUFDQyxjQUFBO0VBQ0EscUJBQUE7QURBRDs7QUNFQTtFQUNDLGdCQUFBO0FEQ0Q7O0FDQ0E7RUFDQyxtQkFBQTtBREVEOztBQ0FBOzs7Ozs7RUFNQyxvQkFBQTtFQUNBLGtCQUFBO0FER0Q7O0FBSEM7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFNRjtBQUNBO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNEO0FBQUM7RUFMRDtJQU1FLGNBQUE7RUFHQTtBQUNGO0FBREM7RUFDQyxjQUFBO0FBR0Y7QUFBQztFQUNDLFlBQUE7QUFFRjs7QUFFQTs7Ozs7Q0FBQTtBQVFDO0VBRUUsZ0JBQUE7RUFDQSxjQUFBO0VBSUMsb0JBQUE7QUFMSjs7QUV0R0E7RUFDQyxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBRnlHRDs7QUV2R0E7RUFDQyxVQUFBO0FGMEdEOztBRXhHQTtFQUNDLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUYyR0Q7O0FFekdBO0VBQ0MsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FGNEdEOztBRTFHQTtFQUNDLG1CQUFBO0VBQ0EsbUJBQUE7QUY2R0Q7O0FFM0dBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUY4R0Q7O0FFNUdBO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUYrR0Q7QUU5R0M7RUFDQyxtQkFBQTtBRmdIRjs7QUVwR0M7RUFDQyxZQUFBO0FGdUdGO0FFcEdDO0VBQ0MsV0FBQTtBRnNHRjtBR3pJQTtFQUNDLGtCQUFBO0FIMklEO0FHMUlDO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7QUg0SUY7O0FHeElDO0VBQ0MsbUJBQUE7QUgySUY7O0FJOUxBO0VBQ0MsZ0NBQUE7RUFDQSxXQUFBO0FKaU1EO0FJaE1DO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FKa01GO0FJak1FO0VBSEQ7SUFJRSw4QkFBQTtJQUNBLFlBQUE7RUpvTUQ7QUFDRjs7QUloTUE7RUFDQyxrQkFBQTtBSm1NRDtBS25JRTtFRGpFRjtJQ2tFRyxrQkFBQTtFTHNJRDtBQUNGO0FLbklDO0VBRUM7SUR4RUY7TUN5RUcsNEVBaEJjO0lMcUpiO0VBQ0Y7RUtuSUE7SUQ1RUY7TUM2RUcsMERBQUE7SUxzSUM7RUFDRjtBQUNGO0FLcElFO0VEakZGO0lDa0ZHLG9CQUFBO0VMdUlEO0FBQ0Y7O0FJcE5DO0VBR0MsYUFBQTtFQUNBLFdBQUE7QUpxTkY7QUs5SkU7RUQzREQ7SUM0REUsc0JBQUE7RUxpS0Q7QUFDRjtBSzlKQztFQUVDO0lEbEVEO01DbUVFLGdGQWhCYztJTGdMYjtFQUNGO0VLOUpBO0lEdEVEO01DdUVFLDJEQUFBO0lMaUtDO0VBQ0Y7QUFDRjtBSy9KRTtFRDNFRDtJQzRFRSxzQkFBQTtFTGtLRDtBQUNGO0FLcExFO0VEM0REO0lDNERFLHlCQUFBO0VMdUxEO0FBQ0Y7QUtwTEM7RUFFQztJRGxFRDtNQ21FRSxtRkFoQmM7SUxzTWI7RUFDRjtFS3BMQTtJRHRFRDtNQ3VFRSw4REFBQTtJTHVMQztFQUNGO0FBQ0Y7QUtyTEU7RUQzRUQ7SUM0RUUseUJBQUE7RUx3TEQ7QUFDRjtBSWhRRTtFQUxEO0lBTUUsc0JBQUE7SUFDQSxtQkFBQTtFSm1RRDtBQUNGO0FJaFFDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FKa1FGO0FLcE5FO0VEaEREO0lDaURFLHFCQUFBO0VMdU5EO0FBQ0Y7QUtwTkM7RUFFQztJRHZERDtNQ3dERSw4RUFoQmM7SUxzT2I7RUFDRjtFS3BOQTtJRDNERDtNQzRERSwyREFBQTtJTHVOQztFQUNGO0FBQ0Y7QUtyTkU7RURoRUQ7SUNpRUUsc0JBQUE7RUx3TkQ7QUFDRjtBSzFPRTtFRGhERDtJQ2lERSxXQUFBO0VMNk9EO0FBQ0Y7QUsxT0M7RUFFQztJRHZERDtNQ3dERSxvRUFoQmM7SUw0UGI7RUFDRjtFSzFPQTtJRDNERDtNQzRERSxrREFBQTtJTDZPQztFQUNGO0FBQ0Y7QUszT0U7RURoRUQ7SUNpRUUsYUFBQTtFTDhPRDtBQUNGO0FJMVNFO0VBTkQ7SUFPRSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtJQUNBLE9BQUE7RUo2U0Q7QUFDRjtBSTFTQztFQUdDLGVBQUE7RUFDQSxrQkFBQTtBSjBTRjtBSzVRRTtFRGxDRDtJQ21DRSxzQkFBQTtFTCtRRDtBQUNGO0FLNVFDO0VBRUM7SUR6Q0Q7TUMwQ0UsZ0ZBaEJjO0lMOFJiO0VBQ0Y7RUs1UUE7SUQ3Q0Q7TUM4Q0UsMkRBQUE7SUwrUUM7RUFDRjtBQUNGO0FLN1FFO0VEbEREO0lDbURFLHNCQUFBO0VMZ1JEO0FBQ0Y7QUtsU0U7RURsQ0Q7SUNtQ0UseUJBQUE7RUxxU0Q7QUFDRjtBS2xTQztFQUVDO0lEekNEO01DMENFLG1GQWhCYztJTG9UYjtFQUNGO0VLbFNBO0lEN0NEO01DOENFLDhEQUFBO0lMcVNDO0VBQ0Y7QUFDRjtBS25TRTtFRGxERDtJQ21ERSx5QkFBQTtFTHNTRDtBQUNGO0FJcFZFO0VBTkQ7SUFPRSxlQUFBO0VKdVZEO0FBQ0Y7QUlyVkU7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx3RUFBQTtBSnVWSDtBSW5WRztFQUNDLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FKcVZKO0FJL1VFO0VBQ0Msd0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUppVkg7O0FJN1VBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FKZ1ZEO0FLMVZFO0VEUUY7SUNQRyxjQUFBO0VMNlZEO0FBQ0Y7QUsxVkM7RUFFQztJRENGO01DQUcsdUVBaEJjO0lMNFdiO0VBQ0Y7RUsxVkE7SURIRjtNQ0lHLG1EQUFBO0lMNlZDO0VBQ0Y7QUFDRjtBSzNWRTtFRFJGO0lDU0csYUFBQTtFTDhWRDtBQUNGO0FJbldDO0VBTEQ7SUFNRSxTQUFBO0lBQ0EsT0FBQTtFSnNXQTtBQUNGO0FJbldFO0VBREQ7SUFFRSxXQUFBO0lBQ0EsWUFBQTtFSnNXRDtBQUNGOztBSS9WQTtFQUNDO0lBQ0MsZUFBQTtJQUNBLFNBQUE7SUFDQSxPQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSw0QkFBQTtJQUNBLGdDQUFBO0lBQ0EsY0FBQTtJQUNBLCtCQUFBO0VKa1dBO0FBQ0Y7QUk5VkM7RUFERDtJQUVFLGFBQUE7RUppV0E7QUFDRjtBSWhXQztFQUpEO0lBS0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLFVBQUE7RUptV0E7QUFDRjtBSW5XRTtFQVZGO0lBV0csZUFBQTtFSnNXRDtBQUNGO0FJOVdDO0VBU0M7SUFHQyxXQUFBO0lBQ0EsNEJBQUE7SUFDQSxRQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxzQkFBQTtFSnNXRDtFSXBXQTtJQUNDLE1BQUE7RUpzV0Q7RUlwV0E7SUFDQyxTQUFBO0lBQ0EsVUFBQTtFSnNXRDtFSXBXQTtJQUNDLDBCQUFBO0VKc1dEO0VJbldDO0lBQ0Msd0JBQUE7RUpxV0Y7RUluV0M7SUFDQyxRQUFBO0VKcVdGO0VJaFdDO0lBQ0MsMEJBQUE7SUFDQSx5QkFBQTtFSmtXRjtFSWhXQztJQUNDLDZCQUFBO0lBQ0Esd0JBQUE7SUFDQSxXQUFBO0VKa1dGO0FBQ0Y7O0FNaGhCQTtFQUdJLGdDQUFBO0VBQ0EsZ0JBQUE7QU5paEJKO0FLdGNFO0VDL0VGO0lEZ0ZHLHNCQUFBO0VMeWNEO0FBQ0Y7QUt0Y0M7RUFFQztJQ3RGRjtNRHVGRyw2RUFoQmM7SUx3ZGI7RUFDRjtFS3RjQTtJQzFGRjtNRDJGRyx5REFBQTtJTHljQztFQUNGO0FBQ0Y7QUt2Y0U7RUMvRkY7SURnR0csbUJBQUE7RUwwY0Q7QUFDRjtBSzVkRTtFQy9FRjtJRGdGRyx3QkFBQTtFTCtkRDtBQUNGO0FLNWRDO0VBRUM7SUN0RkY7TUR1RkcsaUZBaEJjO0lMOGViO0VBQ0Y7RUs1ZEE7SUMxRkY7TUQyRkcsNERBQUE7SUwrZEM7RUFDRjtBQUNGO0FLN2RFO0VDL0ZGO0lEZ0dHLHdCQUFBO0VMZ2VEO0FBQ0Y7QU01akJJO0VBQ0ksa0JBQUE7QU44akJSO0FNN2pCUTtFQUNJLFdBQUE7RUFHQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBTjZqQlo7QUs3ZkU7RUN4RU07SUR5RUwsaUJBQUE7RUxnZ0JEO0FBQ0Y7QUs3ZkM7RUFFQztJQy9FTTtNRGdGTCwwRUFoQmM7SUwrZ0JiO0VBQ0Y7RUs3ZkE7SUNuRk07TURvRkwscURBQUE7SUxnZ0JDO0VBQ0Y7QUFDRjtBSzlmRTtFQ3hGTTtJRHlGTCxjQUFBO0VMaWdCRDtBQUNGO0FLbmhCRTtFQ3hFTTtJRHlFTCxrQkFBQTtFTHNoQkQ7QUFDRjtBS25oQkM7RUFFQztJQy9FTTtNRGdGTCwyRUFoQmM7SUxxaUJiO0VBQ0Y7RUtuaEJBO0lDbkZNO01Eb0ZMLHNEQUFBO0lMc2hCQztFQUNGO0FBQ0Y7QUtwaEJFO0VDeEZNO0lEeUZMLGVBQUE7RUx1aEJEO0FBQ0Y7QU14bUJZO0VBVEo7SUFVUSxhQUFBO0VOMm1CZDtBQUNGOztBTXZtQkE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBTjBtQko7QU14bUJJO0VBSko7SUFLUSxzQkFBQTtJQUNBLFNBQUE7RU4ybUJOO0FBQ0Y7O0FNem1CQTtFQUVJLGtCQUFBO0FOMm1CSjtBSzdqQkU7RUNoREY7SURpREcsWUFBQTtFTGdrQkQ7QUFDRjtBSzdqQkM7RUFFQztJQ3ZERjtNRHdERyxzRUFoQmM7SUwra0JiO0VBQ0Y7RUs3akJBO0lDM0RGO01ENERHLGlEQUFBO0lMZ2tCQztFQUNGO0FBQ0Y7QUs5akJFO0VDaEVGO0lEaUVHLGNBQUE7RUxpa0JEO0FBQ0Y7QU1ob0JJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FOa29CUjtBTWpvQlE7RUFSSjtJQVNRLFlBQUE7RU5vb0JWO0FBQ0Y7QU1sb0JJO0VBR0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FOa29CUjtBS3ZtQkU7RUNqQ0U7SURrQ0Qsb0JBQUE7RUwwbUJEO0FBQ0Y7QUt2bUJDO0VBRUM7SUN4Q0U7TUR5Q0QsOEVBaEJjO0lMeW5CYjtFQUNGO0VLdm1CQTtJQzVDRTtNRDZDRCwyREFBQTtJTDBtQkM7RUFDRjtBQUNGO0FLeG1CRTtFQ2pERTtJRGtERCxxQkFBQTtFTDJtQkQ7QUFDRjtBSzduQkU7RUNqQ0U7SURrQ0Qsc0JBQUE7RUxnb0JEO0FBQ0Y7QUs3bkJDO0VBRUM7SUN4Q0U7TUR5Q0QsZ0ZBaEJjO0lMK29CYjtFQUNGO0VLN25CQTtJQzVDRTtNRDZDRCw4REFBQTtJTGdvQkM7RUFDRjtBQUNGO0FLOW5CRTtFQ2pERTtJRGtERCx3QkFBQTtFTGlvQkQ7QUFDRjs7QU0xcUJBO0VBRUksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FONHFCSjtBS3pwQkU7RUN2QkY7SUR3QkcsbUJBQUE7RUw0cEJEO0FBQ0Y7QUt6cEJDO0VBRUM7SUM5QkY7TUQrQkcsMkVBaEJjO0lMMnFCYjtFQUNGO0VLenBCQTtJQ2xDRjtNRG1DRyx1REFBQTtJTDRwQkM7RUFDRjtBQUNGO0FLMXBCRTtFQ3ZDRjtJRHdDRyxrQkFBQTtFTDZwQkQ7QUFDRjs7QUsvcUJFO0VDakJGO0lEa0JHLHdCQUFBO0VMbXJCRDtBQUNGO0FLaHJCQztFQUVDO0lDeEJGO01EeUJHLCtFQWhCYztJTGtzQmI7RUFDRjtFS2hyQkE7SUM1QkY7TUQ2QkcsMkRBQUE7SUxtckJDO0VBQ0Y7QUFDRjtBS2pyQkU7RUNqQ0Y7SURrQ0cscUJBQUE7RUxvckJEO0FBQ0Y7QU1sdEJJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QU5vdEJSOztBTWp0QkE7RUFDSSxhQUFBO0VBQ0EsU0FBQTtBTm90Qko7O0FNbHRCQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBTnF0Qko7QUtydEJFO0VDRkY7SURHRyxvQkFBQTtFTHd0QkQ7QUFDRjtBS3J0QkM7RUFFQztJQ1RGO01EVUcsb0ZBaEJjO0lMdXVCYjtFQUNGO0VLcnRCQTtJQ2JGO01EY0csd0VBQUE7SUx3dEJDO0VBQ0Y7QUFDRjtBS3R0QkU7RUNsQkY7SURtQkcsNEJBQUE7RUx5dEJEO0FBQ0Y7QU16dUJJO0VBSko7SUFLUSxjQUFBO0VONHVCTjtBQUNGOztBTTF1QkE7RUFFSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FONHVCSjtBS3R2QkU7RUNNRjtJRExHLHFCQUFBO0VMeXZCRDtBQUNGO0FLdHZCQztFQUVDO0lDREY7TURFRyw2RUFoQmM7SUx3d0JiO0VBQ0Y7RUt0dkJBO0lDTEY7TURNRywwREFBQTtJTHl2QkM7RUFDRjtBQUNGO0FLdnZCRTtFQ1ZGO0lEV0csc0JBQUE7RUwwdkJEO0FBQ0Y7O0FNaHdCQTtFQUVJLGtCQUFBO0FOa3dCSjtBS2h4QkU7RUNZRjtJRFhHLGdCQUFBO0VMbXhCRDtBQUNGO0FLaHhCQztFQUVDO0lDS0Y7TURKRywwRUFoQmM7SUxreUJiO0VBQ0Y7RUtoeEJBO0lDQ0Y7TURBRyxvREFBQTtJTG14QkM7RUFDRjtBQUNGO0FLanhCRTtFQ0pGO0lES0csY0FBQTtFTG94QkQ7QUFDRjtBS3R5QkU7RUNZRjtJRFhHLHdCQUFBO0VMeXlCRDtBQUNGO0FLdHlCQztFQUVDO0lDS0Y7TURKRyxnRkFoQmM7SUx3ekJiO0VBQ0Y7RUt0eUJBO0lDQ0Y7TURBRyw0REFB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QTtFTHdnQ0Q7QUFDRjtBT25tQ0k7RUFDSSxrQkFBQTtBUHFtQ1I7O0FPam1DQTtFQUNJLGtCQUFBO0VBSUEsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBUGltQ0o7QUtwaUNFO0VFcEVGO0lGcUVHLGdCQUFBO0VMdWlDRDtBQUNGO0FLcGlDQztFQUVDO0lFM0VGO01GNEVHLHlFQWhCYztJTHNqQ2I7RUFDRjtFS3BpQ0E7SUUvRUY7TUZnRkcsbURBQUE7SUx1aUNDO0VBQ0Y7QUFDRjtBS3JpQ0U7RUVwRkY7SUZxRkcsZ0JBQUE7RUx3aUNEO0FBQ0Y7QUsxakNFO0VFcEVGO0lGcUVHLGFBQUE7RUw2akNEO0FBQ0Y7QUsxakNDO0VBRUM7SUUzRUY7TUY0RUcseUVBaEJjO0lMNGtDYjtFQUNGO0VLMWpDQTtJRS9FRjtNRmdGRyxzREFBQTtJTDZqQ0M7RUFDRjtBQUNGO0FLM2pDRTtFRXBGRjtJRnFGRyxlQUFBO0VMOGpDRDtBQUNGO0FLaGxDRTtFRXBFRjtJRnFFRyxXQUFBO0VMbWxDRDtBQUNGO0FLaGxDQztFQUVDO0lFM0VGO01GNEVHLG9FQWhCYztJTGttQ2I7RUFDRjtFS2hsQ0E7SUUvRUY7TUZnRkcsb0RBQUE7SUxtbENDO0VBQ0Y7QUFDRjtBS2psQ0U7RUVwRkY7SUZxRkcsZUFBQTtFTG9sQ0Q7QUFDRjtBT2pxQ1E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FQa3FDWjtBSzdtQ0U7RUUzRE07SUY0REwsY0FBQTtFTGduQ0Q7QUFDRjtBSzdtQ0M7RUFFQztJRWxFTTtNRm1FTCx1RUFoQmM7SUwrbkNiO0VBQ0Y7RUs3bUNBO0lFdEVNO01GdUVMLG9EQUFBO0lMZ25DQztFQUNGO0FBQ0Y7QUs5bUNFO0VFM0VNO0lGNEVMLGVBQUE7RUxpbkNEO0FBQ0Y7QUtub0NFO0VFM0RNO0lGNERMLGNBQUE7RUxzb0NEO0FBQ0Y7QUtub0NDO0VBRUM7SUVsRU07TUZtRUwsMERBaEJjO0lMcXBDYjtFQUNGO0VLbm9DQTtJRXRFTTtNRnVFTCxxREFBQTtJTHNvQ0M7RUFDRjtBQUNGO0FLcG9DRTtFRTNFTTtJRjRFTCxlQUFBO0VMdW9DRDtBQUNGO0FLenBDRTtFRWpERTtJRmtERCxtQkFBQTtFTDRwQ0Q7QUFDRjtBS3pwQ0M7RUFFQztJRXhERTtNRnlERCwyRUFoQmM7SUwycUNiO0VBQ0Y7RUt6cENBO0lFNURFO01GNkRELHVEQUFBO0lMNHBDQztFQUNGO0FBQ0Y7QUsxcENFO0VFakVFO0lGa0VELGtCQUFBO0VMNnBDRDtBQUNGOztBTzF0Q0E7RUFDUSxrQkFBQTtFQUlBLHNCQUFBO0FQMHRDUjtBS3ByQ0U7RUUzQ0Y7SUY0Q0csZUFBQTtFTHVyQ0Q7QUFDRjtBS3ByQ0M7RUFFQztJRWxERjtNRm1ERyx5RUFoQmM7SUxzc0NiO0VBQ0Y7RUtwckNBO0lFdERGO01GdURHLG1EQUFBO0lMdXJDQztFQUNGO0FBQ0Y7QUtyckNFO0VFM0RGO0lGNERHLGFBQUE7RUx3ckNEO0FBQ0Y7QUsxc0NFO0VFM0NGO0lGNENHLGFBQUE7RUw2c0NEO0FBQ0Y7QUsxc0NDO0VBRUM7SUVsREY7TUZtREcsd0VBaEJjO0lMNHRDYjtFQUNGO0VLMXNDQTtJRXRERjtNRnVERyxvREFBQTtJTDZzQ0M7RUFDRjtBQUNGO0FLM3NDRTtFRTNERjtJRjRERyxjQUFBO0VMOHNDRDtBQUNGO0FLaHVDRTtFRTNDRjtJRjRDRyxlQUFBO0VMbXVDRDtBQUNGO0FLaHVDQztFQUVDO0lFbERGO01GbURHLDBFQWhCYztJTGt2Q2I7RUFDRjtFS2h1Q0E7SUV0REY7TUZ1REcsbURBQUE7SUxtdUNDO0VBQ0Y7QUFDRjtBS2p1Q0U7RUUzREY7SUY0REcsZUFBQTtFTG91Q0Q7QUFDRjtBTzN4Q0k7RUFFSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0FQNHhDUjtBSzV2Q0U7RUVyQ0U7SUZzQ0QsbUJBQUE7RUwrdkNEO0FBQ0Y7QUs1dkNDO0VBRUM7SUU1Q0U7TUY2Q0QsMkVBaEJjO0lMOHdDYjtFQUNGO0VLNXZDQTtJRWhERTtNRmlERCx1REFBQTtJTCt2Q0M7RUFDRjtBQUNGO0FLN3ZDRTtFRXJERTtJRnNERCxrQkFBQTtFTGd3Q0Q7QUFDRjtBT2p6Q1E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QVBtekNaO0FPaHpDSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBUGt6Q1I7O0FPOXlDQTtFQUNJLGtCQUFBO0VBS0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7RUFDQSxxREFBQTtBUDR5Q0o7QUt6eUNFO0VFZEY7SUZlRyxjQUFBO0VMNHlDRDtBQUNGO0FLenlDQztFQUVDO0lFckJGO01Gc0JHLHFFQWhCYztJTDJ6Q2I7RUFDRjtFS3p5Q0E7SUV6QkY7TUYwQkcsZ0RBQUE7SUw0eUNDO0VBQ0Y7QUFDRjtBSzF5Q0U7RUU5QkY7SUYrQkcsVUFBQTtFTDZ5Q0Q7QUFDRjtBSy96Q0U7RUVkRjtJRmVHLGdCQUFBO0VMazBDRDtBQUNGO0FLL3pDQztFQUVDO0lFckJGO01Gc0JHLDBFQWhCYztJTGkxQ2I7RUFDRjtFSy96Q0E7SUV6QkY7TUYwQkcsbURBQUE7SUxrMENDO0VBQ0Y7QUFDRjtBS2gwQ0U7RUU5QkY7SUYrQkcsY0FBQTtFTG0wQ0Q7QUFDRjtBS3IxQ0U7RUVkRjtJRmVHLGVBQUE7RUx3MUNEO0FBQ0Y7QUtyMUNDO0VBRUM7SUVyQkY7TUZzQkcseUVBaEJjO0lMdTJDYjtFQUNGO0VLcjFDQTtJRXpCRjtNRjBCRyxzREFBQTtJTHcxQ0M7RUFDRjtBQUNGO0FLdDFDRTtFRTlCRjtJRitCRyxnQkFBQTtFTHkxQ0Q7QUFDRjtBSzMyQ0U7RUVkRjtJRmVHLGdCQUFBO0VMODJDRDtBQUNGO0FLMzJDQztFQUVDO0lFckJGO01Gc0JHLDBFQWhCYztJTDYzQ2I7RUFDRjtFSzMyQ0E7SUV6QkY7TUYwQkcsdURBQUE7SUw4MkNDO0VBQ0Y7QUFDRjtBSzUyQ0U7RUU5QkY7SUYrQkcsaUJBQUE7RUwrMkNEO0FBQ0Y7QUtqNENFO0VFZEY7SUZlRyxvQkFBQTtFTG80Q0Q7QUFDRjtBS2o0Q0M7RUFFQztJRXJCRjtNRnNCRyw0RUFoQmM7SUxtNUNiO0VBQ0Y7RUtqNENBO0lFekJGO01GMEJHLHdEQUFBO0lMbzRDQztFQUNGO0FBQ0Y7QUtsNENFO0VFOUJGO0lGK0JHLGtCQUFBO0VMcTRDRDtBQUNGO0FPeDVDSTtFQUNJLHFCQUFBO0VBQ0EsaUNBQUE7QVAwNUNSOztBT3I1Q0k7RUFFSyxXQUFBO0FQdTVDVDtBSy81Q0U7RUVNRTtJRkxELGdCQUFBO0VMazZDRDtBQUNGO0FLLzVDQztFQUVDO0lFREU7TUZFRCwwRUFoQmM7SUxpN0NiO0VBQ0Y7RUsvNUNBO0lFTEU7TUZNRCxvREFBQTtJTGs2Q0M7RUFDRjtBQUNGO0FLaDZDRTtFRVZFO0lGV0QsZ0JBQUE7RUxtNkNEO0FBQ0Y7O0FPejZDQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBUDQ2Q0o7QUsxN0NFO0VFWUY7SUZYRyxlQUFBO0VMNjdDRDtBQUNGO0FLMTdDQztFQUVDO0lFS0Y7TUZKRyx3RUFiZTtJTHk4Q2Q7RUFDRjtFSzE3Q0E7SUVDRjtNRkFHLGtEQUFBO0lMNjdDQztFQUNGO0FBQ0Y7QUszN0NFO0VFSkY7SUZLRyxXQUFBO0VMODdDRDtBQUNGO0FPaDhDSTtFQUpKO0lBS1EsYUFBQTtFUG04Q047QUFDRjs7QU9qOENBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FQbzhDSjtBSzE5Q0U7RUVvQkY7SUZuQkcsZ0JBQUE7RUw2OUNEO0FBQ0Y7QUsxOUNDO0VBRUM7SUVhRjtNRlpHLHlFQWJlO0lMeStDZDtFQUNGO0VLMTlDQTtJRVNGO01GUkcsbURBQUE7SUw2OUNDO0VBQ0Y7QUFDRjtBSzM5Q0U7RUVJRjtJRkhHLFlBQUE7RUw4OUNEO0FBQ0Y7QU94OUNJO0VBSko7SUFLUSxhQUFBO0VQMjlDTjtBQUNGOztBS3IvQ0U7RUVnQ0Y7SUYvQkcsa0JBQUE7RUx5L0NEO0FBQ0Y7QUt0L0NDO0VBRUM7SUV5QkY7TUZ4QkcsMkVBaEJjO0lMd2dEYjtFQUNGO0VLdC9DQTtJRXFCRjtNRnBCRyx1REFBQTtJTHkvQ0M7RUFDRjtBQUNGO0FLdi9DRTtFRWdCRjtJRmZHLG1CQUFBO0VMMC9DRDtBQUNGO0FPeitDSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FQMitDUjs7QU94K0NBO0VBR0ksY0FBQTtFQUNBLGtCQUFBO0FQeStDSjtBS3JoREU7RUV3Q0Y7SUZ2Q0csaUJBQUE7RUx3aEREO0FBQ0Y7QUtyaERDO0VBRUM7SUVpQ0Y7TUZoQ0csNkVBaEJjO0lMdWlEYjtFQUNGO0VLcmhEQTtJRTZCRjtNRjVCRyx1REFBQTtJTHdoREM7RUFDRjtBQUNGO0FLdGhERTtFRXdCRjtJRnZCRyxnQkFBQTtFTHloREQ7QUFDRjtBSzNpREU7RUV3Q0Y7SUZ2Q0csd0JBQUE7RUw4aUREO0FBQ0Y7QUszaURDO0VBRUM7SUVpQ0Y7TUZoQ0csK0VBaEJjO0lMNmpEYjtFQUNGO0VLM2lEQTtJRTZCRjtNRjVCRywyREFBQTtJTDhpREM7RUFDRjtBQUNGO0FLNWlERTtFRXdCRjtJRnZCRyxxQkFBQTtFTCtpREQ7QUFDRjtBT3BoREk7RUFFSSxnQkFBQTtBUHFoRFI7QUtwa0RFO0VFNkNFO0lGNUNELHdCQUFBO0VMdWtERDtBQUNGO0FLcGtEQztFQUVDO0lFc0NFO01GckNELGtGQWhCYztJTHNsRGI7RUFDRjtFS3BrREE7SUVrQ0U7TUZqQ0QsNkRBQUE7SUx1a0RDO0VBQ0Y7QUFDRjtBS3JrREU7RUU2QkU7SUY1QkQsd0JBQUE7RUx3a0REO0FBQ0Y7QU94aURJO0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtBUHlpRFI7QUs5bERFO0VFa0RFO0lGakRELG1CQUFBO0VMaW1ERDtBQUNGO0FLOWxEQztFQUVDO0lFMkNFO01GMUNELDBFQWhCYztJTGduRGI7RUFDRjtFSzlsREE7SUV1Q0U7TUZ0Q0Qsc0RBQUE7SUxpbURDO0VBQ0Y7QUFDRjtBSy9sREU7RUVrQ0U7SUZqQ0QsaUJBQUE7RUxrbUREO0FBQ0Y7O0FPNWpEQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBUCtqREo7QUt6bkRFO0VFd0RGO0lGdkRHLG9CQUFBO0VMNG5ERDtBQUNGO0FLem5EQztFQUVDO0lFaURGO01GaERHLDZFQWhCYztJTDJvRGI7RUFDRjtFS3puREE7SUU2Q0Y7TUY1Q0csMERBQUE7SUw0bkRDO0VBQ0Y7QUFDRjtBSzFuREU7RUV3Q0Y7SUZ2Q0csc0JBQUE7RUw2bkREO0FBQ0Y7QUsvb0RFO0VFd0RGO0lGdkRHLGFBQUE7RUxrcEREO0FBQ0Y7QUsvb0RDO0VBRUM7SUVpREY7TUZoREcsb0VBaEJjO0lMaXFEYjtFQUNGO0VLL29EQTtJRTZDRjtNRjVDRyxnREFBQTtJTGtwREM7RUFDRjtBQUNGO0FLaHBERTtFRXdDRjtJRnZDRyxXQUFBO0VMbXBERDtBQUNGO0FPeG1ESTtFQUxKO0lBTVEsc0JBQUE7RVAybUROO0FBQ0Y7QUsxcURFO0VFd0RGO0lGdkRHLG9CQUFBO0VMNnFERDtBQUNGO0FLMXFEQztFQUVDO0lFaURGO01GaERHLDRFQWhCYztJTDRyRGI7RUFDRjtFSzFxREE7SUU2Q0Y7TUY1Q0cseURBQUE7SUw2cURDO0VBQ0Y7QUFDRjtBSzNxREU7RUV3Q0Y7SUZ2Q0cscUJBQUE7RUw4cUREO0FBQ0Y7QU85bkRJO0VBR0ksa0JBQUE7QVA4bkRSO0FLbnNERTtFRWtFRTtJRmpFRCxpQkFBQTtFTHNzREQ7QUFDRjtBS25zREM7RUFFQztJRTJERTtNRjFERCwwRUFoQmM7SUxxdERiO0VBQ0Y7RUtuc0RBO0lFdURFO01GdERELHFEQUFBO0lMc3NEQztFQUNGO0FBQ0Y7QUtwc0RFO0VFa0RFO0lGakRELGNBQUE7RUx1c0REO0FBQ0Y7QUt6dERFO0VFa0VFO0lGakVELHFCQUFBO0VMNHRERDtBQUNGO0FLenREQztFQUVDO0lFMkRFO01GMURELDZFQWhCYztJTDJ1RGI7RUFDRjtFS3p0REE7SUV1REU7TUZ0REQseURBQUE7SUw0dERDO0VBQ0Y7QUFDRjtBSzF0REU7RUVrREU7SUZqREQsb0JBQUE7RUw2dEREO0FBQ0Y7QU92cURJO0VBRUksZ0JBQUE7QVB3cURSO0FLbHZERTtFRXdFRTtJRnZFRCxrQkFBQTtFTHF2REQ7QUFDRjtBS2x2REM7RUFFQztJRWlFRTtNRmhFRCwyRUFoQmM7SUxvd0RiO0VBQ0Y7RUtsdkRBO0lFNkRFO01GNURELHdEQUFBO0lMcXZEQztFQUNGO0FBQ0Y7QUtudkRFO0VFd0RFO0lGdkRELG1CQUFBO0VMc3ZERDtBQUNGO0FPNXJEUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUVBLGdDQUFBO0FQNnJEWjtBS2h4REU7RUU0RU07SUYzRUwsWUFBQTtFTG14REQ7QUFDRjtBS2h4REM7RUFFQztJRXFFTTtNRnBFTCx1RUFoQmM7SUxreURiO0VBQ0Y7RUtoeERBO0lFaUVNO01GaEVMLHNEQUFBO0lMbXhEQztFQUNGO0FBQ0Y7QUtqeERFO0VFNERNO0lGM0RMLGdCQUFBO0VMb3hERDtBQUNGO0FLdHlERTtFRXVGRTtJRnRGRCxpQkFBQTtFTHl5REQ7QUFDRjtBS3R5REM7RUFFQztJRWdGRTtNRi9FRCw2RUFoQmM7SUx3ekRiO0VBQ0Y7RUt0eURBO0lFNEVFO01GM0VELHVEQUFBO0lMeXlEQztFQUNGO0FBQ0Y7QUt2eURFO0VFdUVFO0lGdEVELGdCQUFBO0VMMHlERDtBQUNGO0FPanVESTtFQUdJLGdCQUFBO0FQaXVEUjtBSy96REU7RUUyRkU7SUYxRkQsb0JBQUE7RUxrMEREO0FBQ0Y7QUsvekRDO0VBRUM7SUVvRkU7TUZuRkQsOEVBaEJjO0lMaTFEYjtFQUNGO0VLL3pEQTtJRWdGRTtNRi9FRCx5REFBQTtJTGswREM7RUFDRjtBQUNGO0FLaDBERTtFRTJFRTtJRjFFRCxvQkFBQTtFTG0wREQ7QUFDRjtBS3IxREU7RUUyRkU7SUYxRkQsdUJBQUE7RUx3MUREO0FBQ0Y7QUtyMURDO0VBRUM7SUVvRkU7TUZuRkQsaUZBaEJjO0lMdTJEYjtFQUNGO0VLcjFEQTtJRWdGRTtNRi9FRCw4REFBQTtJTHcxREM7RUFDRjtBQUNGO0FLdDFERTtFRTJFRTtJRjFFRCx3QkFBQTtFTHkxREQ7QUFDRjs7QU94d0RBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FQMndESjtBS2wzREU7RUVtR0Y7SUZsR0csdUJBQUE7RUxxM0REO0FB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RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FQcTVESjtBT3A1REk7RUFFSSxxRkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0JBQUE7QVBvNURSO0FLMW1FRTtFRWlORTtJRmhORCxZQUFBO0VMNm1FRDtBQUNGO0FLMW1FQztFQUVDO0lFME1FO01Gek1ELHNFQWhCYztJTDRuRWI7RUFDRjtFSzFtRUE7SUVzTUU7TUZyTUQsaURBQUE7SUw2bUVDO0VBQ0Y7QUFDRjtBSzNtRUU7RUVpTUU7SUZoTUQsY0FBQTtFTDhtRUQ7QUFDRjtBS2hvRUU7RUVpTkU7SUZoTkQsYUFBQTtFTG1vRUQ7QUFDRjtBS2hvRUM7RUFFQztJRTBNRTtNRnpNRCx1RUFoQmM7SUxrcEViO0VBQ0Y7RUtob0VBO0lFc01FO01Gck1ELGtEQUFBO0lMbW9FQztFQUNGO0FBQ0Y7QUtqb0VFO0VFaU1FO0lGaE1ELGVBQUE7RUxvb0VEO0FBQ0Y7QU8vN0RRO0VBQ0ksMkJBQUE7QVBpOERaO0FPaDhEVztFQUNLLDRCQUFBO0FQazhEaEI7QU9oOERXO0VBQ0MsaUJBQUE7QVBrOERaO0FPNzdESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FQKzdEUjtBTzU3REM7RUFDTyxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBR0EsMkJBQUE7RUFDQSwrQkFBQTtBUDQ3RFI7QUs1cUVFO0VFeU9EO0lGeE9FLHdCQUFBO0VMK3FFRDtBQUNGO0FLNXFFQztFQUVDO0lFa09EO01Gak9FLGtGQWhCYztJTDhyRWI7RUFDRjtFSzVxRUE7SUU4TkQ7TUY3TkUsNERBQUE7SUwrcUVDO0VBQ0Y7QUFDRjtBSzdxRUU7RUV5TkQ7SUZ4TkUsd0JBQUE7RUxnckVEO0FBQ0Y7QUtsc0VFO0VFeU9EO0lGeE9FLHNCQUFBO0VMcXNFRDtBQUNGO0FLbHNFQztFQUVDO0lFa09EO01Gak9FLGdGQWhCYztJTG90RWI7RUFDRjtFS2xzRUE7SUU4TkQ7TUY3TkUsNkRBQUE7SUxxc0VDO0VBQ0Y7QUFDRjtBS25zRUU7RUV5TkQ7SUZ4TkUsdUJBQUE7RUxzc0VEO0FBQ0Y7QU9yK0RDO0VBQ08sZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBUHUrRFI7QU90K0RRO0VBSlA7SUFLVyxlQUFBO0VQeStEVjtBQUNGO0FPdCtEQztFQUNPLGVBQUE7RUFDQSxXQUFBO0FQdytEUjtBT3YrRFE7RUFIUDtJQUlXLGVBQUE7RVAwK0RWO0FBQ0Y7O0FLM3VFRTtFRXVRRjtJRnRRRyx5QkFBQTtFTCt1RUQ7QUFDRjtBSzV1RUM7RUFFQztJRWdRRjtNRi9QRyxrRkFoQmM7SUw4dkViO0VBQ0Y7RUs1dUVBO0lFNFBGO01GM1BHLDREQUFBO0lMK3VFQztFQUNGO0FBQ0Y7QUs3dUVFO0VFdVBGO0lGdFBHLHNCQUFBO0VMZ3ZFRDtBQUNGO0FPei9ESTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QVAyL0RSO0FLdndFRTtFRXlRRTtJRnhRRCxZQUFBO0VMMHdFRDtBQUNGO0FLdndFQztFQUVDO0lFa1FFO01GalFELHFFQWhCYztJTHl4RWI7RUFDRjtFS3Z3RUE7SUU4UEU7TUY3UEQsa0RBQUE7SUwwd0VDO0VBQ0Y7QUFDRjtBS3h3RUU7RUV5UEU7SUZ4UEQsYUFBQTtFTDJ3RUQ7QUFDRjtBTzdnRUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FQK2dFUjtBTzNnRVk7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QVA2Z0VoQjtBS3J5RUU7RUU0UkU7SUYzUkQsZ0JBQUE7RUx3eUVEO0FBQ0Y7QUtyeUVDO0VBRUM7SUVxUkU7TUZwUkQsNEVBaEJjO0lMdXpFYjtFQUNGO0VLcnlFQTtJRWlSRTtNRmhSRCx3REFBQTtJTHd5RUM7RUFDRjtBQUNGO0FLdHlFRTtFRTRRRTtJRjNRRCxpQkFBQTtFTHl5RUQ7QUFDRjtBSzN6RUU7RUU0UkU7SUYzUkQsZ0JBQUE7RUw4ekVEO0FBQ0Y7QUszekVDO0VBRUM7SUVxUkU7TUZwUkQsMkVBaEJjO0lMNjBFYjtFQUNGO0VLM3pFQTtJRWlSRTtNRmhSRCx1REFBQTtJTDh6RUM7RUFDRjtBQUNGO0FLNXpFRTtFRTRRRTtJRjNRRCxpQkFBQTtFTCt6RUQ7QUFDRjtBT2hqRUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBUGtqRVI7QUt0MUVFO0VFaVNFO0lGaFNELG9CQUFBO0VMeTFFRDtBQUNGO0FLdDFFQztFQUVDO0lFMFJFO01GelJELDhFQWhCYztJTHcyRWI7RUFDRjtFS3QxRUE7SUVzUkU7TUZyUkQsMkRBQUE7SUx5MUVDO0VBQ0Y7QUFDRjtBS3YxRUU7RUVpUkU7SUZoUkQscUJBQUE7RUwwMUVEO0FBQ0Y7QUs1MkVFO0VFaVNFO0lGaFNELHFCQUFBO0VMKzJFRDtBQUNGO0FLNTJFQztFQUVDO0lFMFJFO01GelJELDZFQWhCYztJTDgzRWI7RUFDRjtFSzUyRUE7SUVzUkU7TUZyUkQsMERBQUE7SUwrMkVDO0VBQ0Y7QUFDRjtBSzcyRUU7RUVpUkU7SUZoUkQsc0JBQUE7RUxnM0VEO0FBQ0Y7QU8zbEVRO0VBTko7SUFPUSxlQUFBO0VQOGxFVjtBQUNGO0FPM2xFSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBUDZsRVI7QUszNEVFO0VFaVRFO0lGaFRELGNBQUE7RUw4NEVEO0FBQ0Y7QUszNEVDO0VBRUM7SUUwU0U7TUZ6U0Qsd0VBaEJjO0lMNjVFYjtFQUNGO0VLMzRFQTtJRXNTRTtNRnJTRCxnREFBQTtJTDg0RUM7RUFDRjtBQUNGO0FLNTRFRTtFRWlTRTtJRmhTRCxjQUFBO0VMKzRFRDtBQUNGO0FLajZFRTtFRWlURTtJRmhURCxnQkFBQTtFTG82RUQ7QUFDRjtBS2o2RUM7RUFFQztJRTBTRTtNRnpTRCwyRUFoQmM7SUxtN0ViO0VBQ0Y7RUtqNkVBO0lFc1NFO01GclNELHVEQUFBO0lMbzZFQztFQUNGO0FBQ0Y7QUtsNkVFO0VFaVNFO0lGaFNELGlCQUFBO0VMcTZFRDtBQUNGO0FPam9FSTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QVBtb0VSO0FPam9FUTtFQUpKO0lBS1EsZUFBQTtJQUNBLGNBQUE7RVBvb0VWO0FBQ0Y7QU9qb0VJO0VBQ0ksa0JBQUE7QVBtb0VSO0FPbG9FUTtFQUZKO0lBR1EsYUFBQTtFUHFvRVY7QUFDRjtBT2xvRUk7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDhGQUFBO0FQb29FUjtBT2xvRVE7RUFQSjtJQVFRLFdBQUE7SUFDQSxVQUFBO0VQcW9FVjtBQUNGO0FPcG9FUTtFQVhKO0lBWVEsVUFBQTtJQUNBLFNBQUE7RVB1b0VWO0FBQ0Y7O0FPcG9FQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBUHVvRUo7QUtuK0VFO0VFd1ZGO0lGdlZHLG1CQUFBO0VMcytFRDtBQUNGO0FLbitFQztFQUVDO0lFaVZGO01GaFZHLDZFQWhCYztJTHEvRWI7RUFDRjtFS24rRUE7SUU2VUY7TUY1VUcsOERBQUE7SUxzK0VDO0VBQ0Y7QUFDRjtBS3ArRUU7RUV3VUY7SUZ2VUcsd0JBQUE7RUx1K0VEO0FBQ0Y7QUt6L0VFO0VFd1ZGO0lGdlZHLHFCQUFBO0VMNC9FRDtBQUNGO0FLei9FQztFQUVDO0lFaVZGO01GaFZHLDhFQWhCYztJTDJnRmI7RUFDRjtFS3ovRUE7SUU2VUY7TUY1VUcsc0RBQUE7SUw0L0VDO0VBQ0Y7QUFDRjtBSzEvRUU7RUV3VUY7SUZ2VUcscUJBQUE7RUw2L0VEO0FBQ0Y7QUsvZ0ZFO0VFd1ZGO0lGdlZHLHNCQUFBO0VMa2hGRDtBQUNGO0FLL2dGQztFQUVDO0lFaVZGO01GaFZHLCtFQWhCYztJTGlpRmI7RUFDRjtFSy9nRkE7SUU2VUY7TUY1VUcsNERBQUE7SUxraEZDO0VBQ0Y7QUFDRjtBS2hoRkU7RUV3VUY7SUZ2VUcsdUJBQUE7RUxtaEZEO0FBQ0Y7QU9yc0VJO0VBQ0ksbUJBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0FQc3NFUjtBSzFpRkU7RUVnV0U7SUYvVkQsa0JBQUE7RUw2aUZEO0FBQ0Y7QUsxaUZDO0VBRUM7SUV5VkU7TUZ4VkQsMkVBaEJjO0lMNGpGYjtFQUNGO0VLMWlGQTtJRXFWRTtNRnBWRCx3REFBQTtJTDZpRkM7RUFDRjtBQUNGO0FLM2lGRTtFRWdWRTtJRi9VRCxtQkFBQTtFTDhpRkQ7QUFDRjtBS2hrRkU7RUVnV0U7SUYvVkQsaUJBQUE7RUxta0ZEO0FBQ0Y7QUtoa0ZDO0VBRUM7SUV5VkU7TUZ4VkQsNkVBaEJjO0lMa2xGYjtFQUNGO0VLaGtGQTtJRXFWRTtNRnBWRCx1REFBQTtJTG1rRkM7RUFDRjtBQUNGO0FLamtGRTtFRWdWRTtJRi9VRCxnQkFBQTtFTG9rRkQ7QUFDRjtBT2h2RVE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBUGl2RVo7QUs5bEZFO0VFc1dNO0lGcldMLGVBQUE7RUxpbUZEO0FBQ0Y7QUs5bEZDO0VBRUM7SUUrVk07TUY5VkwseUVBaEJjO0lMZ25GYjtFQUNGO0VLOWxGQTtJRTJWTTtNRjFWTCxzREFBQTtJTGltRkM7RUFDRjtBQUNGO0FLL2xGRTtFRXNWTTtJRnJWTCxnQkFBQTtFTGttRkQ7QUFDRjtBS3BuRkU7RUVnV0U7SUYvVkQsbUJBQUE7RUx1bkZEO0FBQ0Y7QUtwbkZDO0VBRUM7SUV5VkU7TUZ4VkQsNkVBaEJjO0lMc29GYjtFQUNGO0VLcG5GQTtJRXFWRTtNRnBWRCw4REFBQTtJTHVuRkM7RUFDRjtBQUNGO0FLcm5GRTtFRWdWRTtJRi9VRCx3QkFBQTtFTHduRkQ7QUFDRjtBTzN4RVE7RUFHSTtJQUVJLFVBQUE7RVAweEVkO0FBQ0Y7QUsvb0ZFO0VFa1hVO0lGalhULGFBQUE7RUxrcEZEO0FBQ0Y7QUsvb0ZDO0VBRUM7SUUyV1U7TUYxV1Qsc0VBaEJjO0lMaXFGYjtFQUNGO0VLL29GQTtJRXVXVTtNRnRXVCxtREFBQTtJTGtwRkM7RUFDRjtBQUNGO0FLaHBGRTtFRWtXVTtJRmpXVCxjQUFBO0VMbXBGRDtBQUNGOztBT3p5RUE7RUFDUSxnQ0FBQTtFQUNBLGFBQUE7QVA0eUVSO0FPM3lFUTtFQUhSO0lBSVksYUFBQTtFUDh5RVY7QUFDRjtBTzd5RUU7RUFDVSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FQK3lFWjtBS3JyRkU7RUVrWUE7SUZqWUMsc0JBQUE7RUx3ckZEO0FBQ0Y7QUtyckZDO0VBRUM7SUUyWEE7TUYxWEMsOEVBaEJjO0lMdXNGYjtFQUNGO0VLcnJGQTtJRXVYQTtNRnRYQyx5REFBQTtJTHdyRkM7RUFDRjtBQUNGO0FLdHJGRTtFRWtYQTtJRmpYQyxtQkFBQTtFTHlyRkQ7QUFDRjtBSzNzRkU7RUVrWUE7SUZqWUMsMEJBQUE7RUw4c0ZEO0FBQ0Y7QUszc0ZDO0VBRUM7SUUyWEE7TUYxWEMsbUVBaEJjO0lMNnRGYjtFQUNGO0VLM3NGQTtJRXVYQTtNRnRYQyw0REFBQTtJTDhzRkM7RUFDRjtBQUNGO0FLNXNGRTtFRWtYQTtJRmpYQyxzQkFBQTtFTCtzRkQ7QUFDRjtBT3gxRVk7RUFDQSxXQUFBO0VBR0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QVB3MUVaO0FLenVGRTtFRXlZVTtJRnhZVCxpQkFBQTtFTDR1RkQ7QUFDRjtBS3p1RkM7RUFFQztJRWtZVTtNRmpZVCwwRUFoQmM7SUwydkZiO0VBQ0Y7RUt6dUZBO0lFOFhVO01GN1hULHFEQUFBO0lMNHVGQztFQUNGO0FBQ0Y7QUsxdUZFO0VFeVhVO0lGeFhULGNBQUE7RUw2dUZEO0FBQ0Y7QUsvdkZFO0VFeVlVO0lGeFlULGtCQUFBO0VMa3dGRDtBQUNGO0FLL3ZGQztFQUVDO0lFa1lVO01GallULDJFQWhCYztJTGl4RmI7RUFDRjtFSy92RkE7SUU4WFU7TUY3WFQsc0RBQUE7SUxrd0ZDO0VBQ0Y7QUFDRjtBS2h3RkU7RUV5WFU7SUZ4WFQsZUFBQTtFTG13RkQ7QUFDRjtBT240RVk7RUFUQTtJQVVJLGFBQUE7RVBzNEVkO0FBQ0Y7QU9sNEVFO0VBQ1UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FQbzRFWjtBS2h5RkU7RUV3WkE7SUZ2WkMsbUJBQUE7RUxteUZEO0FBQ0Y7QUtoeUZDO0VBRUM7SUVpWkE7TUZoWkMsNEVBaEJjO0lMa3pGYjtFQUNGO0VLaHlGQTtJRTZZQTtNRjVZQyw0REFBQTtJTG15RkM7RUFDRjtBQUNGO0FLanlGRTtFRXdZQTtJRnZZQyx1QkFBQTtFTG95RkQ7QUFDRjtBS3R6RkU7RUV3WkE7SUZ2WkMscUJBQUE7RUx5ekZEO0FBQ0Y7QUt0ekZDO0VBRUM7SUVpWkE7TUZoWkMsOEVBaEJjO0lMdzBGYjtFQUNGO0VLdHpGQTtJRTZZQTtNRjVZQyxzREFBQTtJTHl6RkM7RUFDRjtBQUNGO0FLdnpGRTtFRXdZQTtJRnZZQyxxQkFBQTtFTDB6RkQ7QUFDRjtBT3o2RVk7RUFYVjtJQVljLFlBQUE7RVA0NkVkO0FBQ0Y7QU96NkVFO0VBQ1UsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBUDI2RVo7QUt0MUZFO0VFd2FBO0lGdmFDLG9CQUFBO0VMeTFGRDtBQUNGO0FLdDFGQztFQUVDO0lFaWFBO01GaGFDLDRFQWhCYztJTHcyRmI7RUFDRjtFS3QxRkE7SUU2WkE7TUY1WkMsdURBQUE7SUx5MUZDO0VBQ0Y7QUFDRjtBS3YxRkU7RUV3WkE7SUZ2WkMsb0JBQUE7RUwwMUZEO0FBQ0Y7QUs1MkZFO0VFd2FBO0lGdmFDLHFCQUFBO0VMKzJGRDtBQUNGO0FLNTJGQztFQUVDO0lFaWFBO01GaGFDLHVGQWhCYztJTDgzRmI7RUFDRjtFSzUyRkE7SUU2WkE7TUY1WkMseUVBQUE7SUwrMkZDO0VBQ0Y7QUFDRjtBSzcyRkU7RUV3WkE7SUZ2WkMsNkJBQUE7RUxnM0ZEO0FBQ0Y7QU9wOUVZO0VBTlY7SUFPYyxtQkFBQTtFUHU5RWQ7QUFDRjtBT3A5RUU7RUFDVSxrQkFBQTtBUHM5RVo7QU9uOUVnQjtFQUNJLFdBQUE7RUFDQSwyQkFBQTtBUHE5RXBCO0FPcDlFb0I7RUFDSSxVQUFBO0VBQ0EsMEJBQUE7QVBzOUV4QjtBT245RWdCO0VBQ0ksVUFBQTtBUHE5RXBCO0FPaDlFRTtFQUNVLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdEQUFBO0VBaUJBLHdCQUFBO0FQazhFWjtBT2w5RVk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxrREFBQTtBUG85RWhCO0FPbjlFZ0I7RUFYSjtJQVlRLGFBQUE7RVBzOUVsQjtBQUNGO0FPaDlFRTtFQUNVLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBUGs5RVo7O0FPNzhFQTtFQUNJLGFBQUE7QVBnOUVKO0FPLzhFSTtFQUZKO0lBR1Esc0JBQUE7SUFDQSx1QkFBQTtFUGs5RU47QUFDRjs7QUs5N0ZFO0VFK2VGO0lGOWVHLGlCQUFBO0VMazhGRDtBQUNGO0FLLzdGQztFQUVDO0lFd2VGO01GdmVHLDZFQWhCYztJTGk5RmI7RUFDRjtFSy83RkE7SUVvZUY7TUZuZUcsc0RBQUE7SUxrOEZDO0VBQ0Y7QUFDRjtBS2g4RkU7RUUrZEY7SUY5ZEcsZ0JBQUE7RUxtOEZEO0FBQ0Y7QUtyOUZFO0VFK2VGO0lGOWVHLHFCQUFBO0VMdzlGRDtBQUNGO0FLcjlGQztFQUVDO0lFd2VGO01GdmVHLDhFQWhCYztJTHUrRmI7RUFDRjtFS3I5RkE7SUVvZUY7TUZuZUcsc0RBQUE7SUx3OUZDO0VBQ0Y7QUFDRjtBS3Q5RkU7RUUrZEY7SUY5ZEcscUJBQUE7RUx5OUZEO0FBQ0Y7QU90L0VFO0VBQ1UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FQdy9FWjtBS2ovRkU7RUVxZkE7SUZwZkMsd0JBQUE7RUxvL0ZEO0FBQ0Y7QUtqL0ZDO0VBRUM7SUU4ZUE7TUY3ZUMsa0ZBaEJjO0lMbWdHYjtFQUNGO0VLai9GQTtJRTBlQTtNRnplQyw0REFBQTtJTG8vRkM7RUFDRjtBQUNGO0FLbC9GRTtFRXFlQTtJRnBlQyx3QkFBQTtFTHEvRkQ7QUFDRjs7QUt2Z0dFO0VFbWdCRjtJRmxnQkcsa0JBQUE7RUwyZ0dEO0FBQ0Y7QUt4Z0dDO0VBRUM7SUU0ZkY7TUYzZkcsMkVBaEJjO0lMMGhHYjtFQUNGO0VLeGdHQTtJRXdmRjtNRnZmRyxzREFBQTtJTDJnR0M7RUFDRjtBQUNGO0FLemdHRTtFRW1mRjtJRmxmRyxtQkFBQTtFTDRnR0Q7QUFDRjtBSzloR0U7RUVtZ0JGO0lGbGdCRyx1QkFBQTtFTGlpR0Q7QUFDRjtBSzloR0M7RUFFQztJRTRmRjtNRjNmRywrRUFoQmM7SUxnakdiO0VBQ0Y7RUs5aEdBO0lFd2ZGO01GdmZHLDBEQUFBO0lMaWlHQztFQUNGO0FBQ0Y7QUsvaEdFO0VFbWZGO0lGbGZHLHNCQUFBO0VMa2lHRDtBQUNGO0FPM2lGSTtFQUNJLGFBQUE7QVA2aUZSO0FPNWlGUTtFQUZKO0lBR1Esc0JBQUE7RVAraUZWO0FBQ0Y7O0FPM2lGSTtFQURKO0lBRVEsY0FBQTtFUCtpRk47QUFDRjtBTzlpRkk7RUFDSSx1QkFBQTtFQUNBLDRCQUFBO0FQZ2pGUjtBTy9pRlE7RUFDSSxvQkFBQTtBUGlqRlo7QU83aUZJO0VBQ0ksbUJBQUE7QVAraUZSO0FLNWtHRTtFRTRoQkU7SUYzaEJELGdCQUFBO0VMK2tHRDtBQUNGO0FLNWtHQztFQUVDO0lFcWhCRTtNRnBoQkQsNEVBaEJjO0lMOGxHYjtFQUNGO0VLNWtHQTtJRWloQkU7TUZoaEJELHdEQUFBO0lMK2tHQztFQUNGO0FBQ0Y7QUs3a0dFO0VFNGdCRTtJRjNnQkQsaUJBQUE7RUxnbEdEO0FBQ0Y7QUtsbUdFO0VFNGhCRTtJRjNoQkQsaUJBQUE7RUxxbUdEO0FBQ0Y7QUtsbUdDO0VBRUM7SUVxaEJFO01GcGhCRCw0RUFoQmM7SUxvbkdiO0VBQ0Y7RUtsbUdBO0lFaWhCRTtNRmhoQkQsdURBQUE7SUxxbUdDO0VBQ0Y7QUFDRjtBS25tR0U7RUU0Z0JFO0lGM2dCRCxpQkFBQTtFTHNtR0Q7QUFDRjtBS3huR0U7RUVraUJFO0lGamlCRCxpQkFBQTtFTDJuR0Q7QUFDRjtBS3huR0M7RUFFQztJRTJoQkU7TUYxaEJELDJEQWhCYztJTDBvR2I7RUFDRjtFS3huR0E7SUV1aEJFO01GdGhCRCxzREFBQTtJTDJuR0M7RUFDRjtBQUNGO0FLem5HRTtFRWtoQkU7SUZqaEJELGVBQUE7RUw0bkdEO0FBQ0Y7QUs5b0dFO0VFc2lCRTtJRnJpQkQsc0JBQUE7RUxpcEdEO0FBQ0Y7QUs5b0dDO0VBRUM7SUUraEJFO01GOWhCRCxpRkFoQmM7SUxncUdiO0VBQ0Y7RUs5b0dBO0lFMmhCRTtNRjFoQkQsMERBQUE7SUxpcEdDO0VBQ0Y7QUFDRjtBSy9vR0U7RUVzaEJFO0lGcmhCRCxzQkFBQTtFTGtwR0Q7QUFDRjtBS3BxR0U7RUVzaUJFO0lGcmlCRCxzQkFBQTtFTHVxR0Q7QUFDRjtBS3BxR0M7RUFFQztJRStoQkU7TUY5aEJELGdGQWhCYztJTHNyR2I7RUFDRjtFS3BxR0E7SUUyaEJFO01GMWhCRCw2REFBQTtJTHVxR0M7RUFDRjtBQUNGO0FLcnFHRTtFRXNoQkU7SUZyaEJELHVCQUFBO0VMd3FHRDtBQUNGO0FLMXJHRTtFRXNpQkU7SUZyaUJELGdCQUFBO0VMNnJHRDtBQUNGO0FLMXJHQztFQUVDO0lFK2hCRTtNRjloQkQsMkVBaEJjO0lMNHNHYjtFQUNGO0VLMXJHQTtJRTJoQkU7TUYxaEJELHNEQUFBO0lMNnJHQztFQUNGO0FBQ0Y7QUszckdFO0VFc2hCRTtJRnJoQkQsZ0JBQUE7RUw4ckdEO0FBQ0Y7QUtodEdFO0VFc2lCRTtJRnJpQkQsZUFBQTtFTG10R0Q7QUFDRjtBS2h0R0M7RUFFQztJRStoQkU7TUY5aEJELG9FQWhCYztJTGt1R2I7RUFDRjtFS2h0R0E7SUUyaEJFO01GMWhCRCxnREFBQTtJTG10R0M7RUFDRjtBQUNGO0FLanRHRTtFRXNoQkU7SUZyaEJELFlBQUE7RUxvdEdEO0FBQ0Y7QUt0dUdFO0VFNmlCRTtJRjVpQkQsZ0JBQUE7RUx5dUdEO0FBQ0Y7QUt0dUdDO0VBRUM7SUVzaUJFO01GcmlCRCwyRUFoQmM7SUx3dkdiO0VBQ0Y7RUt0dUdBO0lFa2lCRTtNRmppQkQsc0RBQUE7SUx5dUdDO0VBQ0Y7QUFDRjtBS3Z1R0U7RUU2aEJFO0lGNWhCRCxnQkFBQTtFTDB1R0Q7QUFDRjtBSzV2R0U7RUU2aUJFO0lGNWlCRCxpQkFBQTtFTCt2R0Q7QUFDRjtBSzV2R0M7RUFFQztJRXNpQkU7TUZyaUJELDRFQWhCYztJTDh3R2I7RUFDRjtFSzV2R0E7SUVraUJFO01GamlCRCx1REFBQTtJTCt2R0M7RUFDRjtBQUNGO0FLN3ZHRTtFRTZoQkU7SUY1aEJELGlCQUFBO0VMZ3dHRDtBQUNGOztBS2x4R0U7RUVrakJGO0lGampCRyxzQkFBQTtFTHN4R0Q7QUFDRjtBS254R0M7RUFFQztJRTJpQkY7TUYxaUJHLDZFQWhCYztJTHF5R2I7RUFDRjtFS254R0E7SUV1aUJGO01GdGlCRyx5REFBQTtJTHN4R0M7RUFDRjtBQUNGO0FLcHhHRTtFRWtpQkY7SUZqaUJHLG1CQUFBO0VMdXhHRDtBQUNGO0FPcnZGSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBUHV2RlI7QUsveUdFO0VFb2pCRTtJRm5qQkQsd0JBQUE7RUxrekdEO0FBQ0Y7QUsveUdDO0VBRUM7SUU2aUJFO01GNWlCRCxnRkFoQmM7SUxpMEdiO0VBQ0Y7RUsveUdBO0lFeWlCRTtNRnhpQkQsNERBQUE7SUxrekdDO0VBQ0Y7QUFDRjtBS2h6R0U7RUVvaUJFO0lGbmlCRCxzQkFBQTtFTG16R0Q7QUFDRjtBT3p3Rkk7RUFJSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBUHd3RlI7QUsxMEdFO0VFNGpCRTtJRjNqQkQsc0JBQUE7RUw2MEdEO0FBQ0Y7QUsxMEdDO0VBRUM7SUVxakJFO01GcGpCRCwrRUFoQmM7SUw0MUdiO0VBQ0Y7RUsxMEdBO0lFaWpCRTtNRmhqQkQsMERBQUE7SUw2MEdDO0VBQ0Y7QUFDRjtBSzMwR0U7RUU0aUJFO0lGM2lCRCxxQkFBQTtFTDgwR0Q7QUFDRjtBS2gyR0U7RUU0akJFO0lGM2pCRCx3QkFBQTtFTG0yR0Q7QUFDRjtBS2gyR0M7RUFFQztJRXFqQkU7TUZwakJELGtGQWhCYztJTGszR2I7RUFDRjtFS2gyR0E7SUVpakJFO01GaGpCRCw2REFBQTtJTG0yR0M7RUFDRjtBQUNGO0FLajJHRTtFRTRpQkU7SUYzaUJELHdCQUFBO0VMbzJHRDtBQUNGO0FLdDNHRTtFRTRqQkU7SUYzakJELGdCQUFBO0VMeTNHRDtBQUNGO0FLdDNHQztFQUVDO0lFcWpCRTtNRnBqQkQsMEVBaEJjO0lMdzRHYjtFQUNGO0VLdDNHQTtJRWlqQkU7TUZoakJELG1EQUFBO0lMeTNHQztFQUNGO0FBQ0Y7QUt2M0dFO0VFNGlCRTtJRjNpQkQsY0FBQTtFTDAzR0Q7QUFDRjtBT3gwRlE7RUFSSjtJQVNRLGlCQUFBO0lBQ0Esa0JBQUE7RVAyMEZWO0FBQ0Y7QU96MEZRO0VBYko7SUFlUSxjQUFBO0lBQ0EsZUFBQTtFUDIwRlY7QUFDRjtBS3g1R0U7RUU0akJFO0lGM2pCRCxvQkFBQTtFTDI1R0Q7QUFDRjtBS3g1R0M7RUFFQztJRXFqQkU7TUZwakJELDRFQWhCYztJTDA2R2I7RUFDRjtFS3g1R0E7SUVpakJFO01GaGpCRCx5REFBQTtJTDI1R0M7RUFDRjtBQUNGO0FLejVHRTtFRTRpQkU7SUYzaUJELHFCQUFBO0VMNDVHRDtBQUNGO0FLOTZHRTtFRWdsQkU7SUYva0JELHFCQUFBO0VMaTdHRDtBQUNGO0FLOTZHQztFQUVDO0lFeWtCRTtNRnhrQkQsOEVBaEJjO0lMZzhHYjtFQUNGO0VLOTZHQTtJRXFrQkU7TUZwa0JELHlEQUFBO0lMaTdHQztFQUNGO0FBQ0Y7QUsvNkdFO0VFZ2tCRTtJRi9qQkQsb0JBQUE7RUxrN0dEO0FBQ0Y7QU9qM0ZRO0VBSEo7SUFJUSxpQkFBQTtFUG8zRlY7QUFDRjtBS3o4R0U7RUVnbEJFO0lGL2tCRCxtQkFBQTtFTDQ4R0Q7QUFDRjtBS3o4R0M7RUFFQztJRXlrQkU7TUZ4a0JELDJFQWhCYztJTDI5R2I7RUFDRjtFS3o4R0E7SUVxa0JFO01GcGtCRCx3REFBQTtJTDQ4R0M7RUFDRjtBQUNGO0FLMThHRTtFRWdrQkU7SUYvakJELG9CQUFBO0VMNjhHRDtBQUNGOztBSy85R0U7RUU4bEJGO0lGN2xCRyx5QkFBQTtFTG0rR0Q7QUFDRjtBS2grR0M7RUFFQztJRXVsQkY7TUZ0bEJHLGtGQWhCYztJTGsvR2I7RUFDRjtFS2grR0E7SUVtbEJGO01GbGxCRyw0REFBQTtJTG0rR0M7RUFDRjtBQUNGO0FLaitHRTtFRThrQkY7SUY3a0JHLHNCQUFBO0VMbytHRDtBQUNGO0FPbjVGSTtFQUVJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBUG81RlI7QUszL0dFO0VFbW1CRTtJRmxtQkQsa0JBQUE7RUw4L0dEO0FBQ0Y7QUszL0dDO0VBRUM7SUU0bEJFO01GM2xCRCw0RUFoQmM7SUw2Z0hiO0VBQ0Y7RUszL0dBO0lFd2xCRTtNRnZsQkQsMERBQUE7SUw4L0dDO0VBQ0Y7QUFDRjtBSzUvR0U7RUVtbEJFO0lGbGxCRCxvQkFBQTtFTCsvR0Q7QUFDRjtBS2poSEU7RUVtbUJFO0lGbG1CRCx1QkFBQTtFTG9oSEQ7QUFDRjtBS2poSEM7RUFFQztJRTRsQkU7TUYzbEJELDhFQWhCYztJTG1pSGI7RUFDRjtFS2poSEE7SUV3bEJFO01GdmxCRCwwREFBQTtJTG9oSEM7RUFDRjtBQUNGO0FLbGhIRTtFRW1sQkU7SUZsbEJELHFCQUFBO0VMcWhIRDtBQUNGO0FPNTdGSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QVA4N0ZSO0FLNWlIRTtFRTJtQkU7SUYxbUJELGNBQUE7RUwraUhEO0FBQ0Y7QUs1aUhDO0VBRUM7SUVvbUJFO01Gbm1CRCxxRUFoQmM7SUw4akhiO0VBQ0Y7RUs1aUhBO0lFZ21CRTtNRi9sQkQsaURBQUE7SUwraUhDO0VBQ0Y7QUFDRjtBSzdpSEU7RUUybEJFO0lGMWxCRCxXQUFBO0VMZ2pIRDtBQUNGO0FPajlGUTtFQU5KO0lBT1EsMkJBQUE7RVBvOUZWO0FBQ0Y7QU9qOUZJO0VBR0ksa0JBQUE7QVBpOUZSO0FLMWtIRTtFRXNuQkU7SUZybkJELGVBQUE7RUw2a0hEO0FBQ0Y7QUsxa0hDO0VBRUM7SUUrbUJFO01GOW1CRCwyRUFoQmM7SUw0bEhiO0VBQ0Y7RUsxa0hBO0lFMm1CRTtNRjFtQkQscURBQUE7SUw2a0hDO0VBQ0Y7QUFDRjtBSzNrSEU7RUVzbUJFO0lGcm1CRCxnQkFBQTtFTDhrSEQ7QUFDRjtBS2htSEU7RUVzbkJFO0lGcm5CRCxxQkFBQTtFTG1tSEQ7QUFDRjtBS2htSEM7RUFFQztJRSttQkU7TUY5bUJELDhFQWhCYztJTGtuSGI7RUFDRjtFS2htSEE7SUUybUJFO01GMW1CRCwyREFBQTtJTG1tSEM7RUFDRjtBQUNGO0FLam1IRTtFRXNtQkU7SUZybUJELHNCQUFBO0VMb21IRDtBQUNGO0FPMy9GUTtFQUxKO0lBTVEsV0FBQTtFUDgvRlY7QUFDRjtBTzMvRkk7RUFFSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FQNC9GUjtBS2hvSEU7RUVnb0JFO0lGL25CRCxlQUFBO0VMbW9IRDtBQUNGO0FLaG9IQztFQUVDO0lFeW5CRTtNRnhuQkQseUVBaEJjO0lMa3BIYjtFQUNGO0VLaG9IQTtJRXFuQkU7TUZwbkJELHNEQUFBO0lMbW9IQztFQUNGO0FBQ0Y7QUtqb0hFO0VFZ25CRTtJRi9tQkQsZ0JBQUE7RUxvb0hEO0FBQ0Y7QU8vZ0dJO0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FQZ2hHUjtBSzNwSEU7RUV1b0JFO0lGdG9CRCxpQkFBQTtFTDhwSEQ7QUFDRjtBSzNwSEM7RUFFQztJRWdvQkU7TUYvbkJELHlFQWhCYztJTDZxSGI7RUFDRjtFSzNwSEE7SUU0bkJFO01GM25CRCxzREFBQTtJTDhwSEM7RUFDRjtBQUNGO0FLNXBIRTtFRXVuQkU7SUZ0bkJELGtCQUFBO0VMK3BIRDtBQUNGO0FPbmlHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QVBxaUdSO0FPbGlHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FQb2lHUjtBT2xpR1k7RUFDSSwyQkFBQTtBUG9pR2hCO0FPL2hHSTtFQUNJLG9CQUFBO0VBQ0EsK0JBQUE7QVBpaUdSOztBTzNoR0E7RUFHSSxnQ0FBQTtFQUNBLGdCQUFBO0FQNGhHSjtBSzFzSEU7RUUwcUJGO0lGenFCRyxpQkFBQTtFTDZzSEQ7QUFDRjtBSzFzSEM7RUFFQztJRW1xQkY7TUZscUJHLHFEQWhCYztJTDR0SGI7RUFDRjtFSzFzSEE7SUUrcEJGO01GOXBCRyxzREFBQTtJTDZzSEM7RUFDRjtBQUNGO0FLM3NIRTtFRTBwQkY7SUZ6cEJHLG1CQUFBO0VMOHNIRDtBQUNGO0FLaHVIRTtFRTBxQkY7SUZ6cUJHLHdCQUFBO0VMbXVIRDtBQUNGO0FLaHVIQztFQUVDO0lFbXFCRjtNRmxxQkcsaUZBaEJjO0lMa3ZIYjtFQUNGO0VLaHVIQTtJRStwQkY7TUY5cEJHLDBEQUFBO0lMbXVIQztFQUNGO0FBQ0Y7QUtqdUhFO0VFMHBCRjtJRnpwQkcsc0JBQUE7RUxvdUhEO0FBQ0Y7QU92a0dJO0VBQ0ksa0JBQUE7QVB5a0dSO0FPeGtHUTtFQUNJLFdBQUE7RUFHQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBUHdrR1o7QUtqd0hFO0VFaXJCTTtJRmhyQkwsaUJBQUE7RUxvd0hEO0FBQ0Y7QUtqd0hDO0VBRUM7SUUwcUJNO01GenFCTCwwRUFoQmM7SUxteEhiO0VBQ0Y7RUtqd0hBO0lFc3FCTTtNRnJxQkwscURBQUE7SUxvd0hDO0VBQ0Y7QUFDRjtBS2x3SEU7RUVpcUJNO0lGaHFCTCxjQUFBO0VMcXdIRDtBQUNGO0FLdnhIRTtFRWlyQk07SUZockJMLGtCQUFBO0VMMHhIRDtBQUNGO0FLdnhIQztFQUVDO0lFMHFCTTtNRnpxQkwsMkVBaEJjO0lMeXlIYjtFQUNGO0VLdnhIQTtJRXNxQk07TUZycUJMLHNEQUFBO0lMMHhIQztFQUNGO0FBQ0Y7QUt4eEhFO0VFaXFCTTtJRmhxQkwsZUFBQTtFTDJ4SEQ7QUFDRjtBT25uR1k7RUFUSjtJQVVRLGFBQUE7RVBzbkdkO0FBQ0Y7QU9sbkdJO0VBQ0ksVUFBQTtBUG9uR1I7QU9qbkdJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QVBtbkdSO0FLMXpIRTtFRTBzQkU7SUZ6c0JELGVBQUE7RUw2ekhEO0FBQ0Y7QUsxekhDO0VBRUM7SUVtc0JFO01GbHNCRCx5RUFoQmM7SUw0MEhiO0VBQ0Y7RUsxekhBO0lFK3JCRTtNRjlyQkQsc0RBQUE7SUw2ekhDO0VBQ0Y7QUFDRjtBSzN6SEU7RUUwckJFO0lGenJCRCxnQkFBQTtFTDh6SEQ7QUFDRjtBS2gxSEU7RUUwc0JFO0lGenNCRCxzQkFBQTtFTG0xSEQ7QUFDRjtBS2gxSEM7RUFFQztJRW1zQkU7TUZsc0JELCtFQWhCYztJTGsySGI7RUFDRjtFS2gxSEE7SUUrckJFO01GOXJCRCx5REFBQTtJTG0xSEM7RUFDRjtBQUNGO0FLajFIRTtFRTByQkU7SUZ6ckJELHNCQUFBO0VMbzFIRDtBQUNGO0FPdnBHSTtFQUNJLFdBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QVB3cEdSO0FLNTJIRTtFRStzQkU7SUY5c0JELGlCQUFBO0VMKzJIRDtBQUNGO0FLNTJIQztFQUVDO0lFd3NCRTtNRnZzQkQsMkVBaEJjO0lMODNIYjtFQUNGO0VLNTJIQTtJRW9zQkU7TUZuc0JELDBEQUFBO0lMKzJIQztFQUNGO0FBQ0Y7QUs3MkhFO0VFK3JCRTtJRjlyQkQsb0JBQUE7RUxnM0hEO0FBQ0Y7QUtsNEhFO0VFK3NCRTtJRjlzQkQsaUJBQUE7RUxxNEhEO0FBQ0Y7QUtsNEhDO0VBRUM7SUV3c0JFO01GdnNCRCw0RUFoQmM7SUxvNUhiO0VBQ0Y7RUtsNEhBO0lFb3NCRTtNRm5zQkQsc0RBQUE7SUxxNEhDO0VBQ0Y7QUFDRjtBS240SEU7RUUrckJFO0lGOXJCRCxlQUFBO0VMczRIRDtBQUNGO0FLeDVIRTtFRStzQkU7SUY5c0JELHdCQUFBO0VMMjVIRDtBQUNGO0FLeDVIQztFQUVDO0lFd3NCRTtNRnZzQkQsa0ZBaEJjO0lMMDZIYjtFQUNGO0VLeDVIQTtJRW9zQkU7TUZuc0JELDZEQUFBO0lMMjVIQztFQUNGO0FBQ0Y7QUt6NUhFO0VFK3JCRTtJRjlyQkQsd0JBQUE7RUw0NUhEO0FBQ0Y7QU9ydEdJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QVB1dEdSOztBT250R0E7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUVBLGtCQUFBO0FQcXRHSjtBS3o3SEU7RUVndUJGO0lGL3RCRyxlQUFBO0VMNDdIRDtBQUNGO0FLejdIQztFQUVDO0lFeXRCRjtNRnh0QkcsK0VBYmU7SUx3OEhkO0VBQ0Y7RUt6N0hBO0lFcXRCRjtNRnB0Qkcsb0VBQUE7SUw0N0hDO0VBQ0Y7QUFDRjtBSzE3SEU7RUVndEJGO0lGL3NCRyx1QkFBQTtFTDY3SEQ7QUFDRjtBT3p1R0k7RUFOSjtJQU9RLGFBQUE7RVA0dUdOO0FBQ0Y7QU8zdUdJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLFdBQUE7RUFFQSxzQkFBQTtBUDJ1R1I7QUszOUhFO0VFeXVCRTtJRnh1QkQsZUFBQTtFTDg5SEQ7QUFDRjtBSzM5SEM7RUFFQztJRWt1QkU7TUZqdUJELDRFQWJlO0lMMCtIZDtFQUNGO0VLMzlIQTtJRTh0QkU7TUY3dEJELHdEQUFBO0lMODlIQztFQUNGO0FBQ0Y7QUs1OUhFO0VFeXRCRTtJRnh0QkQsZ0JBQUE7RUwrOUhEO0FBQ0Y7QUtqL0hFO0VFeXVCRTtJRnh1QkQsY0FBQTtFTG8vSEQ7QUFDRjtBS2ovSEM7RUFFQztJRWt1QkU7TUZqdUJELDhDQWhCYztJTG1nSWI7RUFDRjtFS2ovSEE7SUU4dEJFO01GN3RCRCw4Q0FBQTtJTG8vSEM7RUFDRjtBQUNGO0FLbC9IRTtFRXl0QkU7SUZ4dEJELFdBQUE7RUxxL0hEO0FBQ0Y7QU9yeEdRO0VBVEo7SUFVUSxhQUFBO0VQd3hHVjtBQUNGO0FPdHhHSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxXQUFBO0VBRUEsc0JBQUE7RUFDQSx3QkFBQTtBUHN4R1I7QUtwaElFO0VFc3ZCRTtJRnJ2QkQsYUFBQTtFTHVoSUQ7QUFDRjtBS3BoSUM7RUFFQztJRSt1QkU7TUY5dUJELHVFQWJlO0lMbWlJZDtFQUNGO0VLcGhJQTtJRTJ1QkU7TUYxdUJELG1EQUFBO0lMdWhJQztFQUNGO0FBQ0Y7QUtyaElFO0VFc3VCRTtJRnJ1QkQsY0FBQTtFTHdoSUQ7QUFDRjtBSzFpSUU7RUVzdkJFO0lGcnZCRCxlQUFBO0VMNmlJRDtBQUNGO0FLMWlJQztFQUVDO0lFK3VCRTtNRjl1QkQseUVBaEJjO0lMNGpJYjtFQUNGO0VLMWlJQTtJRTJ1QkU7TUYxdUJELHNEQUFBO0lMNmlJQztFQUNGO0FBQ0Y7QUszaUlFO0VFc3VCRTtJRnJ1QkQsZ0JBQUE7RUw4aUlEO0FBQ0Y7QU9oMEdRO0VBVko7SUFXUSxhQUFBO0VQbTBHVjtBQUNGOztBS3JrSUU7RUV5d0JGO0lGeHdCRyxzQkFBQTtFTHlrSUQ7QUFDRjtBS3RrSUM7RUFFQztJRWt3QkY7TUZqd0JHLCtFQWhCYztJTHdsSWI7RUFDRjtFS3RrSUE7SUU4dkJGO01GN3ZCRyx5REFBQTtJTHlrSUM7RUFDRjtBQUNGO0FLdmtJRTtFRXl2QkY7SUZ4dkJHLG1CQUFBO0VMMGtJRDtBQUNGO0FLNWxJRTtFRXl3QkY7SUZ4d0JHLHlCQUFBO0VMK2xJRDtBQUNGO0FLNWxJQztFQUVDO0lFa3dCRjtNRmp3Qkcsa0ZBaEJjO0lMOG1JYjtFQUNGO0VLNWxJQTtJRTh2QkY7TUY3dkJHLDREQUFBO0lMK2xJQztFQUNGO0FBQ0Y7QUs3bElFO0VFeXZCRjtJRnh2Qkcsc0JBQUE7RUxnbUlEO0FBQ0Y7QU90MkdJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QVB3MkdSO0FPdDJHUTtFQUxKO0lBTVEsc0JBQUE7RVB5MkdWO0FBQ0Y7QUs1bklFO0VFc3hCRTtJRnJ4QkQsc0JBQUE7RUwrbklEO0FBQ0Y7QUs1bklDO0VBRUM7SUUrd0JFO01GOXdCRCx3RkFoQmM7SUw4b0liO0VBQ0Y7RUs1bklBO0lFMndCRTtNRjF3QkQsMEVBQUE7SUwrbklDO0VBQ0Y7QUFDRjtBSzduSUU7RUVzd0JFO0lGcndCRCw2QkFBQTtFTGdvSUQ7QUFDRjtBT3ozR1E7RUFISjtJQUlRLGVBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RVA0M0dWO0FBQ0Y7QU96M0dJO0VBQ0ksZ0JBQUE7QVAyM0dSO0FLNXBJRTtFRWd5QkU7SUYveEJELHdCQUFBO0VMK3BJRDtBQUNGO0FLNXBJQztFQUVDO0lFeXhCRTtNRnh4QkQsa0ZBaEJjO0lMOHFJYjtFQUNGO0VLNXBJQTtJRXF4QkU7TUZweEJELDREQUFBO0lMK3BJQztFQUNGO0FBQ0Y7QUs3cElFO0VFZ3hCRTtJRi93QkQsd0JBQUE7RUxncUlEO0FBQ0Y7QU83NEdJO0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtBUDg0R1I7QUt0cklFO0VFcXlCRTtJRnB5QkQsbUJBQUE7RUx5cklEO0FBQ0Y7QUt0cklDO0VBRUM7SUU4eEJFO01GN3hCRCwwRUFoQmM7SUx3c0liO0VBQ0Y7RUt0cklBO0lFMHhCRTtNRnp4QkQsc0RBQUE7SUx5cklDO0VBQ0Y7QUFDRjtBS3ZySUU7RUVxeEJFO0lGcHhCRCxpQkFBQTtFTDBySUQ7QUFDRjtBSzVzSUU7RUVxeUJFO0lGcHlCRCxlQUFBO0VMK3NJRDtBQUNGO0FLNXNJQztFQUVDO0lFOHhCRTtNRjd4QkQsNERBaEJjO0lMOHRJYjtFQUNGO0VLNXNJQTtJRTB4QkU7TUZ6eEJELHNEQUFBO0lMK3NJQztFQUNGO0FBQ0Y7QUs3c0lFO0VFcXhCRTtJRnB4QkQsZ0JBQUE7RUxndElEO0FBQ0Y7QU92N0dRO0VBTko7SUFPUSxXQUFBO0lBQ0EsbUJBQUE7RVAwN0dWO0FBQ0Y7QU92N0dJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBUHk3R1I7QUs3dUlFO0VFaXpCRTtJRmh6QkQsaUJBQUE7RUxndklEO0FBQ0Y7QUs3dUlDO0VBRUM7SUUweUJFO01GenlCRCwwRUFoQmM7SUwrdkliO0VBQ0Y7RUs3dUlBO0lFc3lCRTtNRnJ5QkQscURBQUE7SUxndklDO0VBQ0Y7QUFDRjtBSzl1SUU7RUVpeUJFO0lGaHlCRCxpQkFBQTtFTGl2SUQ7QUFDRjtBTzU4R1E7RUFOSjtJQU9RLFVBQUE7SUFDQSx1QkFBQTtFUCs4R1Y7QUFDRjs7QUt6d0lFO0VFaTBCRjtJRmgwQkcscUJBQUE7RUw2d0lEO0FBQ0Y7QUsxd0lDO0VBRUM7SUUwekJGO01GenpCRyw4RUFoQmM7SUw0eEliO0VBQ0Y7RUsxd0lBO0lFc3pCRjtNRnJ6QkcseURBQUE7SUw2d0lDO0VBQ0Y7QUFDRjtBSzN3SUU7RUVpekJGO0lGaHpCRyxzQkFBQTtFTDh3SUQ7QUFDRjtBTzc5R0k7RUFDSSxrQkFBQTtBUCs5R1I7QU83OUdRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QVA4OUdaO0FLM3lJRTtFRXMwQk07SUZyMEJMLGNBQUE7RUw4eUlEO0FBQ0Y7QUszeUlDO0VBRUM7SUUrekJNO01GOXpCTCwyRUFiZTtJTDB6SWQ7RUFDRjtFSzN5SUE7SUUyekJNO01GMXpCTCx1REFBQTtJTDh5SUM7RUFDRjtBQUNGO0FLNXlJRTtFRXN6Qk07SUZyekJMLGlCQUFBO0VMK3lJRDtBQUNGO0FPaC9HSTtFQUdJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBUGcvR1I7QUt0MElFO0VFaTFCRTtJRmgxQkQsZUFBQTtFTHkwSUQ7QUFDRjtBS3QwSUM7RUFFQztJRTAwQkU7TUZ6MEJELHNFQWhCYztJTHcxSWI7RUFDRjtFS3QwSUE7SUVzMEJFO01GcjBCRCxvREFBQTtJTHkwSUM7RUFDRjtBQUNGO0FLdjBJRTtFRWkwQkU7SUZoMEJELGlCQUFBO0VMMDBJRDtBQUNGO0FLNTFJRTtFRWkxQkU7SUZoMUJELHVCQUFBO0VMKzFJRDtBQUNGO0FLNTFJQztFQUVDO0lFMDBCRTtNRnowQkQsZ0ZBaEJjO0lMODJJYjtFQUNGO0VLNTFJQTtJRXMwQkU7TUZyMEJELDJEQUFBO0lMKzFJQztFQUNGO0FBQ0Y7QUs3MUlFO0VFaTBCRTtJRmgwQkQsdUJBQUE7RUxnMklEO0FBQ0Y7QU96aEhJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBUDJoSFI7QUt2M0lFO0VFeTFCRTtJRngxQkQsYUFBQTtFTDAzSUQ7QUFDRjtBS3YzSUM7RUFFQztJRWsxQkU7TUZqMUJELHFFQWJlO0lMczRJZDtFQUNGO0VLdjNJQTtJRTgwQkU7TUY3MEJELGlEQUFBO0lMMDNJQztFQUNGO0FBQ0Y7QUt4M0lFO0VFeTBCRTtJRngwQkQsV0FBQTtFTDIzSUQ7QUFDRjtBSzc0SUU7RUV5MUJFO0lGeDFCRCxtQkFBQTtFTGc1SUQ7QUFDRjtBSzc0SUM7RUFFQztJRWsxQkU7TUZqMUJELDRFQWhCYztJTCs1SWI7RUFDRjtFSzc0SUE7SUU4MEJFO01GNzBCRCw0REFBQTtJTGc1SUM7RUFDRjtBQUNGO0FLOTRJRTtFRXkwQkU7SUZ4MEJELHVCQUFBO0VMaTVJRDtBQUNGO0FPbGtISTtFQUVJLGtCQUFBO0FQbWtIUjtBS3Q2SUU7RUVpMkJFO0lGaDJCRCxnQkFBQTtFTHk2SUQ7QUFDRjtBS3Q2SUM7RUFFQztJRTAxQkU7TUZ6MUJELDBFQWhCYztJTHc3SWI7RUFDRjtFS3Q2SUE7SUVzMUJFO01GcjFCRCxtREFBQTtJTHk2SUM7RUFDRjtBQUNGO0FLdjZJRTtFRWkxQkU7SUZoMUJELGNBQUE7RUwwNklEO0FBQ0Y7QU90bEhJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtBUHVsSFI7QUt0OElFO0VFczJCRTtJRnIyQkQsbUJBQUE7RUx5OElEO0FBQ0Y7QUt0OElDO0VBRUM7SUUrMUJFO01GOTFCRCw0RUFoQmM7SUx3OUliO0VBQ0Y7RUt0OElBO0lFMjFCRTtNRjExQkQsdURBQUE7SUx5OElDO0VBQ0Y7QUFDRjtBS3Y4SUU7RUVzMUJFO0lGcjFCRCxtQkFBQTtFTDA4SUQ7QUFDRjtBTzFtSEk7RUFFSSxXQUFBO0FQMm1IUjtBSy85SUU7RUVrM0JFO0lGajNCRCx3QkFBQTtFTGsrSUQ7QUFDRjtBSy85SUM7RUFFQztJRTIyQkU7TUYxMkJELGtGQWhCYztJTGkvSWI7RUFDRjtFSy85SUE7SUV1MkJFO01GdDJCRCw0REFBQTtJTGsrSUM7RUFDRjtBQUNGO0FLaCtJRTtFRWsyQkU7SUZqMkJELHdCQUFBO0VMbStJRDtBQUNGO0FPOW5ISTtFQUdJLGdCQUFBO0VBQ0EsZ0JBQUE7QVA4bkhSO0FLei9JRTtFRXUzQkU7SUZ0M0JELGtCQUFBO0VMNC9JRDtBQUNGO0FLei9JQztFQUVDO0lFZzNCRTtNRi8yQkQsdUVBaEJjO0lMMmdKYjtFQUNGO0VLei9JQTtJRTQyQkU7TUYzMkJELG1EQUFBO0lMNC9JQztFQUNGO0FBQ0Y7QUsxL0lFO0VFdTJCRTtJRnQyQkQsZUFBQTtFTDYvSUQ7QUFDRjtBSy9nSkU7RUV1M0JFO0lGdDNCRCxnQkFBQTtFTGtoSkQ7QUFDRjtBSy9nSkM7RUFFQztJRWczQkU7TUYvMkJELDBFQWhCYztJTGlpSmI7RUFDRjtFSy9nSkE7SUU0MkJFO01GMzJCRCxvREFBQTtJTGtoSkM7RUFDRjtBQUNGO0FLaGhKRTtFRXUyQkU7SUZ0MkJELGVBQUE7RUxtaEpEO0FBQ0Y7QU92cUhJO0VBQ0ksY0FBQTtBUHlxSFI7O0FLeGlKRTtFRXE0QkY7SUZwNEJHLHFCQUFBO0VMNGlKRDtBQUNGO0FLemlKQztFQUVDO0lFODNCRjtNRjczQkcsOEVBaEJjO0lMMmpKYjtFQUNGO0VLemlKQTtJRTAzQkY7TUZ6M0JHLHdEQUFBO0lMNGlKQztFQUNGO0FBQ0Y7QUsxaUpFO0VFcTNCRjtJRnAzQkcsbUJBQUE7RUw2aUpEO0FBQ0Y7QUsvakpFO0VFcTRCRjtJRnA0Qkcsd0JBQUE7RUxra0pEO0FBQ0Y7QUsvakpDO0VBRUM7SUU4M0JGO01GNzNCRyxpRkFoQmM7SUxpbEpiO0VBQ0Y7RUsvakpBO0lFMDNCRjtNRnozQkcsMkRBQUE7SUxra0pDO0VBQ0Y7QUFDRjtBS2hrSkU7RUVxM0JGO0lGcDNCRyxzQkFBQTtFTG1rSkQ7QUFDRjtBTzdzSEk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FQK3NIUjtBTzVzSEk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBUDhzSFI7QU81c0hRO0VBTEo7SUFNUSxzQkFBQTtJQUNBLHVCQUFBO0VQK3NIVjtBQUNGO0FPNXNISTtFQUdJLGdCQUFBO0VBQ0EsZ0JBQUE7QVA0c0hSO0FLeG1KRTtFRXc1QkU7SUZ2NUJELGlCQUFBO0VMMm1KRDtBQUNGO0FLeG1KQztFQUVDO0lFaTVCRTtNRmg1QkQsNkVBaEJjO0lMMG5KYjtFQUNGO0VLeG1KQTtJRTY0QkU7TUY1NEJELHVEQUFBO0lMMm1KQztFQUNGO0FBQ0Y7QUt6bUpFO0VFdzRCRTtJRnY0QkQsZ0JBQUE7RUw0bUpEO0FBQ0Y7QUs5bkpFO0VFdzVCRTtJRnY1QkQsa0JBQUE7RUxpb0pEO0FBQ0Y7QUs5bkpDO0VBRUM7SUVpNUJFO01GaDVCRCwyRUFoQmM7SUxncEpiO0VBQ0Y7RUs5bkpBO0lFNjRCRTtNRjU0QkQsd0RBQUE7SUxpb0pDO0VBQ0Y7QUFDRjtBSy9uSkU7RUV3NEJFO0lGdjRCRCxtQkFBQTtFTGtvSkQ7QUFDRjtBT3Z2SFE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QVB5dkhaO0FPeHZIWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBUDB2SGhCO0FPcnZISTtFQUVJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QVBzdkhSO0FLdHFKRTtFRTQ2QkU7SUYzNkJELGdCQUFBO0VMeXFKRDtBQUNGO0FLdHFKQztFQUVDO0lFcTZCRTtNRnA2QkQsMkVBaEJjO0lMd3JKYjtFQUNGO0VLdHFKQTtJRWk2QkU7TUZoNkJELHNEQUFBO0lMeXFKQztFQUNGO0FBQ0Y7QUt2cUpFO0VFNDVCRTtJRjM1QkQsZ0JBQUE7RUwwcUpEO0FBQ0Y7QU8xd0hRO0VBTko7SUFPUSxhQUFBO0VQNndIVjtBQUNGO0FPMXdISTtFQUNJLCtCQUFBO0FQNHdIUjtBTzN3SFE7RUFDSSwwQkFBQTtBUDZ3SFo7O0FRdnhKQTtFQUNJLGtCQUFBO0FSMHhKSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCJzYXNzOm1hdGhcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0LzRltC60YHQuNC90ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5AaW1wb3J0IFxcXCJiYXNlL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRiNGA0LjRhNGC0ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyZkaXNwbGF5PXN3YXAgLSDQtNC+0LTQsNGC0Lgg0L/RgNC4INC/0ZbQtNC60LvRjtGH0LXQvdC90ZYg0YfQtdGA0LXQtyDQv9C70LDQs9GW0L1cXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C40YLQuCwg0Y/QutGJ0L4g0ZQg0LvQvtC60LDQu9GM0L3RliDRhNCw0LnQu9C4INGI0YDQuNGE0YLRltCyXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0ZbQutC+0L3QutC+0LLQuNGFINGI0YDQuNGE0YLRltCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LjRgtC4LCDRj9C60YnQviDRlCDRhNCw0LnQuyDRltC60L7QvdC60L7QstC+0LPQviDRiNGA0LjRhNGC0YNcXHJcXG4vL0BpbXBvcnQgXFxcImZvbnRzL2ljb25zXFxcIjtcXHJcXG5cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vINCd0LDQu9Cw0YjRgtGD0LLQsNC90L3RjyDRiNCw0LHQu9C+0L3RgyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy8g0JfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvCDRiNGA0LjRhNGCID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiRmb250RmFtaWx5OiBcXFwiSW50ZXJcXFwiO1xcclxcbiRmb250U2l6ZTogdG9SZW0oMTUpOyAvLyDQtNC1IDE0KHB4KSAtINGA0L7Qt9C80ZbRgCDRiNGA0LjRhNGC0YMg0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvCDQtyDQvNCw0LrQtdGC0YNcXHJcXG5cXHJcXG4vLyDQntGB0L3QvtCy0L3RliDQutC+0LvRjNC+0YDQuFxcclxcbiRtYWluQ29sb3I6ICMwRTBFMEU7IC8vINCa0L7Qu9GW0YAg0YjRgNC40YTRgtGDINC30LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0LxcXHJcXG5cXHJcXG4vLyDQn9Cw0LvRltGC0YDQsCDQutC+0LvRjNC+0YDRltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9jb2xvcnMtcGFsZXR0ZVxcXCI7XFxyXFxuXFxyXFxuLy8g0J3QsNC70LDRiNGC0YPQstCw0L3QvdGPINCw0LTQsNC/0YLQuNCy0L3QvtGXINGB0ZbRgtC60LggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyDQnNGW0L3RltC80LDQu9GM0L3QsCDRiNC40YDQuNC90LAg0YHRgtC+0YDRltC90LrQuFxcclxcbiRtaW5XaWR0aDogMzIwO1xcclxcbi8vINCo0LjRgNC40L3QsCDQv9C+0LvQvtGC0L3QsCAo0LzQsNC60LXRgtGDKVxcclxcbiRtYXhXaWR0aDogMTM2NjtcXHJcXG4vLyDQqNC40YDQuNC90LAg0L7QsdC80LXQttGD0Y7Rh9C+0LPQviDQutC+0L3RgtC10LnQvdC10YDQsCAoMCA9INC90LXQvNCw0ZQg0L7QsdC80LXQttC10L3QvdGPKVxcclxcbiRtYXhXaWR0aENvbnRhaW5lcjogMTE3MDtcXHJcXG4vLyDQl9Cw0LPQsNC70YzQvdC40Lkg0LLRltC00YHRgtGD0L8g0YMg0LrQvtC90YLQtdC50L3QtdGA0LBcXHJcXG4vLyAoMzAgPSDQv9C+IDE1cHgg0LvRltCy0L7RgNGD0Ycg0ZYg0L/RgNCw0LLQvtGA0YPRhywgMCA9INC90LXQvNCw0ZQg0LLRltC00YHRgtGD0L/RgylcXHJcXG4kY29udGFpbmVyUGFkZGluZzogMzA7XFxyXFxuXFxyXFxuLy8g0KjQuNGA0LjQvdCwINGB0L/RgNCw0YbRjNC+0LLRg9Cy0LDQvdC90Y8g0L/QtdGA0YjQvtCz0L4g0LHRgNC10LnQutC/0L7RltC90YLRg1xcclxcbiRjb250YWluZXJXaWR0aDogJG1heFdpZHRoQ29udGFpbmVyICsgJGNvbnRhaW5lclBhZGRpbmc7XFxyXFxuXFxyXFxuLy8g0JHRgNC10LnQui3Qv9C+0ZfQvdGC0LhcXHJcXG4kcGM6IGVtKCRjb250YWluZXJXaWR0aCk7IC8vINCf0JosINC90L7Rg9GC0LHRg9C60LgsINC00LXRj9C60ZYg0L/Qu9Cw0L3RiNC10YLQuCDRgyDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3QvtC80YMg0L/QvtC70L7QttC10L3QvdGWXFxyXFxuJHRhYmxldDogZW0oOTkxLjk4KTsgLy8g0J/Qu9Cw0L3RiNC10YLQuCwg0LTQtdGP0LrRliDRgtC10LvQtdGE0L7QvdC4INCyINCz0L7RgNC40LfQvtC90YLQsNC70YzQvdC+0LzRgyDQv9C+0LvQvtC20LXQvdC90ZZcXHJcXG4kbW9iaWxlOiBlbSg3NjcuOTgpOyAvLyDQotC10LvQtdGE0L7QvdC4IExcXHJcXG4kbW9iaWxlU21hbGw6IGVtKDQ3OS45OCk7IC8vINCi0LXQu9C10YTQvtC90LggU1xcclxcblxcclxcbi8vINCi0LjQvyDQsNC00LDQv9GC0LjQstCwOlxcclxcbi8vIDEgPSDRh9GD0LnQvdGW0YHRgtGMICjRgyDQutC+0L3RgtC10LnQvdC10YDQsCDQvdC10LzQsNGUINCx0YDQtdC50LrQv9C+0ZbQvdGC0ZbQsiksXFxyXFxuLy8gMiA9INC/0L4g0LHRgNC10LnQui3Qv9C+0ZfQvdGCICjQutC+0L3RgtC10LnQvdC10YAg0LfQvNGW0L3RjtGUINGB0LLQvtGOINGI0LjRgNC40L3RgyDQv9C+INCx0YDQtdC50Lot0L/QvtGX0L3RgilcXHJcXG4kcmVzcG9uc2l2ZVR5cGU6IDE7XFxyXFxuXFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vINCe0LHQvdGD0LvQtdC90L3RjyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuQGltcG9ydCBcXFwiYmFzZS9udWxsXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINGC0LXQs9CwIEJPRFkgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5ib2R5IHtcXHJcXG5cXHQvLyDQodC60YDQvtC70Lsg0LfQsNCx0LvQvtC60L7QstCw0L3QvlxcclxcblxcdC5sb2NrICYge1xcclxcblxcdFxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0XFx0dG91Y2gtYWN0aW9uOiBub25lO1xcclxcblxcdFxcdG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7XFxyXFxuXFx0fVxcclxcblxcdC8vINCh0LDQudGCINC30LDQstCw0L3RgtCw0LbQtdC90LjQuVxcclxcblxcdC5sb2FkZWQgJiB7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQntCx0L7Qu9C+0L3QutCwIHdyYXBwZXIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4ud3JhcHBlciB7XFxyXFxuXFx0bWluLWhlaWdodDogMTAwJTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRAc3VwcG9ydHMgKG92ZXJmbG93OiBjbGlwKSB7XFxyXFxuXFx0XFx0b3ZlcmZsb3c6IGNsaXA7XFxyXFxuXFx0fVxcclxcblxcdC8vINCf0YDQuNGC0LjRgdC60LDRlNC80L4gZm9vdGVyXFxyXFxuXFx0PiBtYWluIHtcXHJcXG5cXHRcXHRmbGV4OiAxIDEgYXV0bztcXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0KTRltC60YEg0LTQu9GPINGB0LvQsNC50LTQtdGA0ZbQslxcclxcblxcdD4gKiB7XFxyXFxuXFx0XFx0bWluLXdpZHRoOiAwO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0J7QsdC80LXQttGD0Y7Rh9C40Lkg0LrQvtC90YLQtdC50L3QtdGAID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vKlxcclxcbihpKSDQodGC0LjQu9GWINCx0YPQtNGD0YLRjCDQt9Cw0YHRgtC+0YHQvtCy0YPQstCw0YLQuNGB0Ywg0LTQvlxcclxcbtCy0YHRltGFINC60LvQsNGB0ZbQsiwg0YnQviDQvNGW0YHRgtGP0YLRjCAqX19jb250YWluZXJcXHJcXG7QndCw0L/RgNC40LrQu9Cw0LQgaGVhZGVyX19jb250YWluZXIsIG1haW5fX2NvbnRhaW5lciDRliDRgi7Qvy5cXHJcXG7QodC90ZbQv9C/0LXRgiAoSFRNTCk6IGNudFxcclxcbiovXFxyXFxuQGlmICgkcmVzcG9uc2l2ZVR5cGU9PTEpIHtcXHJcXG5cXHQvLyDQp9GD0LnQvdCwXFxyXFxuXFx0W2NsYXNzKj1cXFwiX19jb250YWluZXJcXFwiXSB7XFxyXFxuXFx0XFx0QGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogdG9SZW0oJGNvbnRhaW5lcldpZHRoKTtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QGlmICgkY29udGFpbmVyUGFkZGluZz4wKSB7XFxyXFxuXFx0XFx0XFx0QGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDAgdG9SZW0obWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpKTtcXHJcXG5cXHRcXHRcXHR9IEBlbHNlIHtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCBtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMiksIDE1KTtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXJpZ2h0XFxcIiwgbWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpLCAxNSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufSBAZWxzZSB7XFxyXFxuXFx0Ly8g0JHRgNC10LnQui3Qv9C+0ZfQvdGC0LDQvNC4XFxyXFxuXFx0W2NsYXNzKj1cXFwiX19jb250YWluZXJcXFwiXSB7XFxyXFxuXFx0XFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0XFx0QGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogdG9SZW0oJGNvbnRhaW5lcldpZHRoKTtcXHJcXG5cXHRcXHR9IEBlbHNlIHtcXHJcXG5cXHRcXHRcXHRAaWYgKCRjb250YWluZXJQYWRkaW5nPjApIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwIHRvUmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJHBjKSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiB0b1JlbSg5NzApO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldCkge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogdG9SZW0oNzUwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IG5vbmU7XFxyXFxuXFx0XFx0XFx0QGlmICgkY29udGFpbmVyUGFkZGluZz4wIGFuZCAkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDAgdG9SZW0obWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDQsdCw0LfQvtCy0LjRhSDRgdGC0LjQu9GW0LIsINGI0LDQsdC70L7QvdGW0LIgKNC30LDQs9C+0YLRltCy0LXQu9GMKSDRgtCwINC00L7Qv9C+0LzRltC20L3QuNGFINC60LvQsNGB0ZbQslxcclxcbi8vINCU0LvRjyDQv9GW0LTQutC70Y7Rh9C10L3QvdGPL9Cy0LjQvNC60L3QtdC90L3RjyDQutC+0L3QutGA0LXRgtC90LjRhSDRgdGC0LjQu9GW0LIg0LTQuNCy0LjRgdGMIGJhc2Uuc2Nzc1xcclxcbkBpbXBvcnQgXFxcImJhc2VcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC30LDQs9Cw0LvRjNC90LjRhSDQtdC70LXQvNC10L3RgtGW0LIg0L/RgNC+0LXQutGC0YNcXHJcXG5AaW1wb3J0IFxcXCJjb21tb25cXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC+0LrRgNC10LzQuNGFINCx0LvQvtC60ZbQslxcclxcbkBpbXBvcnQgXFxcImhlYWRlclxcXCI7XFxyXFxuQGltcG9ydCBcXFwiZm9vdGVyXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQvtC60YDQtdC80LjRhSDRgdGC0L7RgNGW0L3QvtC6XFxyXFxuQGltcG9ydCBcXFwiaG9tZVxcXCI7XFxyXFxuXFxyXFxuLy8g0JfQvNGW0L3QvdGWXFxyXFxuXFxyXFxuQGltcG9ydCBcXFwidXRpbHMvdmFyc1xcXCI7XFxyXFxuXCIsXCIqIHtcXHJcXG5cXHRwYWRkaW5nOiAwcHg7XFxyXFxuXFx0bWFyZ2luOiAwcHg7XFxyXFxuXFx0Ym9yZGVyOiAwcHg7XFxyXFxufVxcclxcbiosXFxyXFxuKjpiZWZvcmUsXFxyXFxuKjphZnRlciB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuOmZvY3VzLFxcclxcbjphY3RpdmUge1xcclxcblxcdC8vIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbmE6Zm9jdXMsXFxyXFxuYTphY3RpdmUge1xcclxcblxcdC8vIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdG1pbi13aWR0aDogJG1pbldpZHRoICsgcHg7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGNvbG9yOiAkbWFpbkNvbG9yO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcblxcdGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcXHJcXG5cXHRmb250LXNpemU6ICRmb250U2l6ZTtcXHJcXG5cXHQvL3RleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxyXFxuXFx0LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LW1vei10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG5cXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbn1cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEge1xcclxcblxcdGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxyXFxufVxcclxcbmJ1dHRvbiB7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGNvbG9yOiBpbmhlcml0O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5hIHtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbnVsIGxpIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5pbWcge1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxufVxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG5cXHRmb250LXdlaWdodDogaW5oZXJpdDtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxufVxcclxcblwiLFwiYm9keTo6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjhzIGVhc2UgMHM7XFxyXFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuXFx0ei1pbmRleDogMTQ5O1xcclxcbn1cXHJcXG4ucG9wdXAtc2hvdyBib2R5OjphZnRlciB7XFxyXFxuXFx0b3BhY2l0eTogMTtcXHJcXG59XFxyXFxuLnBvcHVwIHtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0Ym90dG9tOiAwO1xcclxcblxcdHJpZ2h0OiAwO1xcclxcblxcdHBhZGRpbmc6IDMwcHggMTBweDtcXHJcXG5cXHR0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuOHMgZWFzZSAwcztcXHJcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcbi5wb3B1cF9zaG93IHtcXHJcXG5cXHR6LWluZGV4OiAxNTA7XFxyXFxuXFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG5cXHRvdmVyZmxvdzogYXV0bztcXHJcXG5cXHRwb2ludGVyLWV2ZW50czogYXV0bztcXHJcXG59XFxyXFxuLnBvcHVwX3Nob3cgLnBvcHVwX19jb250ZW50IHtcXHJcXG5cXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxufVxcclxcbi5wb3B1cF9fd3JhcHBlciB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0bWluLWhlaWdodDogMTAwJTtcXHJcXG5cXHRmbGV4OiAxIDEgYXV0bztcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5wb3B1cF9fY29udGVudCB7XFxyXFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuXFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSAwcztcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcblxcdHBhZGRpbmc6IDIwcHg7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0bWF4LXdpZHRoOiA5MDBweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcblxcdC5sb2NrICYge1xcclxcblxcdFxcdHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyBQb3B1cC1zd2lwZXJcXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5wb3B1cF9fY2xvc2VcXHJcXG4ucG9wdXAtc3dpcGVyIHtcXHJcXG5cXHJcXG5cXHQmX193cmFwcGVyIHtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fc2xpZGUge1xcclxcblxcdFxcdHdpZHRoOiA3NzBweDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9faW1nIHtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fdGl0bGUtYmxvY2sge1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX190aXRsZSB7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX3N1YnRpdGxlIHtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fY291bnRlciB7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2l0ZW0ge1xcclxcblxcdH1cXHJcXG59XFxyXFxuLnN3aXBlciB7XFxyXFxufVxcclxcbi5zd2lwZXItd3JhcHBlciB7XFxyXFxufVxcclxcbi5zd2lwZXItc2xpZGUge1xcclxcbn1cXHJcXG4uc3dpcGVyLWNvdW50ZXIge1xcclxcblxcclxcblxcdCZfX2l0ZW0ge1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCIvLyDQl9Cw0LPQsNC70YzQvdC40Lkg0YTQsNC50Lsg0LXQu9C10LzQtdC90YLRltCyINGE0L7RgNC8XFxyXFxuLy8g0JTQu9GPINC/0ZbQtNC60LvRjtGH0LXQvdC90Y8v0LLRltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0LrQvtC90LrRgNC10YLQvdC+0LPQviDQtdC70LXQvNC10L3RgtCwINGE0L7RgNC80Lgg0LTQuNCy0LjRgdGMIGJhc2UvZm9ybXMvZm9ybXMuc2Nzc1xcclxcbkBpbXBvcnQgXFxcImJhc2UvZm9ybXMvZm9ybXNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0L/QvtC/0LDQv9GW0LJcXHJcXG5AaW1wb3J0IFxcXCJiYXNlL3BvcHVwXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINGB0L/QvtC50LvQtdGA0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc3BvbGxlcnNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0YLQsNCx0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvdGFic1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQvNCw0L9cXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL21hcHNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LHQu9C+0LrRgyBcXFwi0L/QvtC60LDQt9Cw0YLQuCDRidC1XFxcIlxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc2hvd21vcmVcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC70LjQv9C60L7Qs9C+INCx0LvQvtC60YNcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3N0aWNreVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0L/QvtCy0L3QvtC10LrRgNCw0L3QvdC+0LPQviDQsdC70L7QutGDXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9mdWxsc2NyZWVuXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQv9C+0LXQutGA0LDQvdC+0Zcg0L/RgNC+0LrRgNGD0YLQutC4XFxyXFxuLy8gU3R5bGVzIGZvciBmdWxscGFnZSBzY3JvbGxcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2Z1bGxwYWdlXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyByaXBwbGUg0LXRhNC10LrRgtGDXFxyXFxuLy8gU3R5bGVzIGZvciByaXBwbGUgZWZmZWN0XFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9yaXBwbGVcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC60LDRgdGC0L7QvNC90L7Qs9C+INC60YPRgNGB0L7RgNGDXFxyXFxuLy8gU3R5bGVzIGZvciBjdXN0b20gY3Vyc29yXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9jdXJzb3JcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINGH0YPQudC90LjRhSDQutCw0YDRgtC40L3QvtC6IChJQkcpXFxyXFxuLy8g0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBpYmcgKGRpdiDQtyDQutCw0YDRgtC40L3QutC+0Y4g0YLQsCDQutC70LDRgdCw0LzQuClcXHJcXG4vLyDQodC90ZbQv9C/0LXRgiAoSFRNTCk6IGliZ2EgKGEg0Lcg0LrQsNGA0YLQuNC90LrQvtGOINGC0LAg0LrQu9Cw0YHQsNC80LgpXFxyXFxuW2NsYXNzKj1cXFwiLWliZ1xcXCJdIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0aW1nIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdG9iamVjdC1maXQ6IGNvdmVyO1xcclxcblxcdH1cXHJcXG59XFxyXFxuW2NsYXNzKj1cXFwiLWliZy0tY29udGFpblxcXCJdIHtcXHJcXG5cXHRpbWcge1xcclxcblxcdFxcdG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyDQqNCw0LHQu9C+0L3QuCAo0LfQsNCz0L7RgtGW0LLQu9GWKVxcclxcbi8vIEBleHRlbmQgJdGW0Lwn0Y8g0YjQsNCx0LvQvtC90YM7XFxyXFxuLy8g0KHQvdGW0L/Qv9C10YIgKFNDU1MpOiBleFxcclxcblxcclxcbi8vINCb0ZbRh9C40LvRjNC90LjQuiDQtNC70Y8g0YHQv9C40YHQutGDXFxyXFxuJWxpc3RDb3VudGVyIHtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuXFx0Y291bnRlci1yZXNldDogaXRlbTtcXHJcXG5cXHRsaSB7XFxyXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdCY6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRjb3VudGVyLWluY3JlbWVudDogaXRlbTtcXHJcXG5cXHRcXHRcXHRjb250ZW50OiBjb3VudGVyKGl0ZW0pO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQkNC00LDQv9GC0LjQstC90LUg0LLRltC00LXQvlxcclxcbiVyZXNwb25zaXZlVmlkZW8ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdGhlaWdodDogMDtcXHJcXG5cXHRwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xcclxcblxcdHZpZGVvLFxcclxcblxcdGlmcmFtZSxcXHJcXG5cXHRvYmplY3QsXFxyXFxuXFx0ZW1iZWQge1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQktGW0LTQtdC+INGP0Log0YTQvtC9XFxyXFxuJXZpZGVvQmFja2dyb3VuZCB7XFxyXFxuXFx0dmlkZW8sXFxyXFxuXFx0aWZyYW1lLFxcclxcblxcdG9iamVjdCxcXHJcXG5cXHRlbWJlZCB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdFxcdHRvcDogNTAlO1xcclxcblxcdFxcdGxlZnQ6IDUwJTtcXHJcXG5cXHRcXHRtaW4td2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0bWluLWhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHR3aWR0aDogYXV0bztcXHJcXG5cXHRcXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0XFx0ei1pbmRleDogLTEwMDtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0KHRltGA0LjQuSDRhNGW0LvRjNGC0YBcXHJcXG4lZ3JheWZpbHRlciB7XFxyXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG5cXHRmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcXHJcXG5cXHRAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXHJcXG5cXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQodC60LDRgdGD0LLQsNGC0Lgg0LLQuNC00ZbQu9C10L3QvdGPXFxyXFxuJW5vc2VsZWN0IHtcXHJcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuLy8g0JTQt9C10YDQutCw0LvRjNC90LUg0LLRltC00L7QsdGA0LDQttC10L3QvdGPXFxyXFxuJW1pcnJvciB7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxyXFxufVxcclxcbi8vINCf0LvQsNCy0L3QuNC5INGB0LrRgNC+0LvQu1xcclxcbiVzbW9vdGhzY3JvbGwge1xcclxcblxcdC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcXHJcXG59XFxyXFxuLy8g0KHRhdC+0LLQsNGC0Lgg0YHQutGA0L7Qu9C7XFxyXFxuJWhpZGVzY3JvbGwge1xcclxcblxcdCY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCIvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG5cXHRjb2xvcjogI2ZmZjtcXHJcXG5cXHQmX19tZW51IHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6NTgwcHgpe1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDUycHg7XFxyXFxuXFx0XFx0ICB9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcblxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDIwLCAxNSk7XFxyXFxufVxcclxcbi5tZW51IHtcXHJcXG5cXHJcXG5cXHQmX19ib2R5IHtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDM1LCAyNSk7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAzNSwgMjUpO1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0ei1pbmRleDogMTA7XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6NTgwcHgpe1xcclxcblxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHQgIH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fbGlzdCB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1yaWdodFxcXCIsIDYwLCA1MCk7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZ2FwXFxcIiwgNDAsIDMwKTtcXHJcXG5cXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDo1ODBweCl7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdG1hcmdpbjogMDtcXHJcXG5cXHRcXHRcXHRmbGV4OiAyO1xcclxcblxcdFxcdCAgfVxcclxcblxcdCAgfVxcclxcblxcclxcblxcdCZfX2xpbmsge1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgMzUsIDI1KTtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDM1LCAyNSk7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxNnB4O1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDo1ODBweCl7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAyOHB4O1xcclxcblxcdFxcdCAgfVxcclxcblxcdFxcdFxcclxcblxcdFxcdCY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0Y29udGVudDogJyc7XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0XFx0dG9wOiA0NXB4O1xcclxcblxcdFxcdFxcdGhlaWdodDogMXB4O1xcclxcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG5cXHRcXHRcXHRvcGFjaXR5OiAwO1xcclxcblxcdFxcdFxcdHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuNXMgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdCY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcblxcdFxcdFxcdFxcdG9wYWNpdHk6IDE7XFxyXFxuXFx0XFx0XFx0XFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19saW5rLmN1cnJlbnQge1xcclxcblxcdFxcdCY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcblxcdFxcdFxcdG9wYWNpdHk6IDE7XFxyXFxuXFx0XFx0XFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4uc29jaWFscy1saXN0IHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZ2FwXFxcIiwgMTUsIDEwKTtcXHJcXG5cXHJcXG5cXHRAbWVkaWEgKG1heC13aWR0aDo1ODBweCl7XFxyXFxuXFx0XFx0Z2FwOiAzMHB4O1xcclxcblxcdFxcdGZsZXg6IDE7XFxyXFxuICBcXHR9XFxyXFxuXFxyXFxuXFx0Jl9faWNvbiB7XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6NTgwcHgpe1xcclxcblxcdFxcdFxcdHdpZHRoOiAyNXB4O1xcclxcblxcdFxcdFxcdGhlaWdodDogMjVweDtcXHJcXG4gIFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vQnVyZ2VyXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XFxyXFxuXFx0Lm1lbnVfX2JvZHkge1xcclxcblxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRcXHR0b3A6IDUycHg7XFxyXFxuXFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG5cXHRcXHRvdmVyZmxvdzogYXV0bztcXHJcXG5cXHRcXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLmljb24tbWVudSB7XFxyXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6NTgwcHgpe1xcclxcblxcdFxcdGRpc3BsYXk6IG5vbmU7ICBcXHJcXG5cXHR9XFxyXFxuXFx0QG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdHdpZHRoOiB0b1JlbSgyNSk7XFxyXFxuXFx0XFx0aGVpZ2h0OiB0b1JlbSgxNCk7XFxyXFxuXFx0XFx0ei1pbmRleDogNTtcXHJcXG5cXHRcXHRAbWVkaWEgKGFueS1ob3Zlcjogbm9uZSkge1xcclxcblxcdFxcdFxcdGN1cnNvcjogZGVmYXVsdDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0c3BhbixcXHJcXG5cXHRcXHQmOjpiZWZvcmUsXFxyXFxuXFx0XFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdFxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcblxcdFxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuXFx0XFx0XFx0cmlnaHQ6IDA7XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdGhlaWdodDogdG9SZW0oMik7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Jjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRib3R0b206IDA7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDUwJTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0c3BhbiB7XFxyXFxuXFx0XFx0XFx0dG9wOiBjYWxjKDUwJSAtIHRvUmVtKDEpKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Lm1lbnUtb3BlbiAmIHtcXHJcXG5cXHRcXHRcXHQrLm1lbnVfX2JvZHkge1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0c3BhbiB7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdCY6OmJlZm9yZSxcXHJcXG5cXHRcXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdCY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0XFx0dG9wOiBjYWxjKDUwJSAtIHRvUmVtKDEpKTtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0XFx0Ym90dG9tOiBjYWxjKDUwJSAtIHRvUmVtKDEpKTtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHR9XFx0XFxyXFxuXFx0fVxcclxcblxcdFxcclxcblxcdFxcclxcblxcclxcblwiLFwiLy/Qn9GW0LTQutC70Y7Rh9C10L3QvdGPINGI0YDQuNGE0YLRg1xcclxcbkBtaXhpbiBmb250KCRmb250X25hbWUsICRmaWxlX25hbWUsICR3ZWlnaHQsICRzdHlsZSkge1xcclxcblxcdEBmb250LWZhY2Uge1xcclxcblxcdFxcdGZvbnQtZmFtaWx5OiAkZm9udF9uYW1lO1xcclxcblxcdFxcdGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG5cXHRcXHRzcmM6XFxyXFxuXFx0XFx0XFx0dXJsKFxcXCIuLi9mb250cy8jeyRmaWxlX25hbWV9LndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLFxcclxcblxcdFxcdFxcdHVybChcXFwiLi4vZm9udHMvI3skZmlsZV9uYW1lfS53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6ICN7JHdlaWdodH07XFxyXFxuXFx0XFx0Zm9udC1zdHlsZTogI3skc3R5bGV9O1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy9QZXJjZW50XFxyXFxuQGZ1bmN0aW9uIHBlcmNlbnQoJHB4LCAkZnJvbTogMTAwKSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAkZnJvbSkgKiAxMDAlO1xcclxcblxcdEByZXR1cm4gJHJlc3VsdDtcXHJcXG59XFxyXFxuLy9SRU1cXHJcXG5AZnVuY3Rpb24gdG9SZW0oJHB4LCAkY3VycmVudDogMTYpIHtcXHJcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsICRjdXJyZW50KSArIHJlbTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcbi8vRU1cXHJcXG5AZnVuY3Rpb24gZW0oJHB4LCAkY3VycmVudDogMTYpIHtcXHJcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsICRjdXJyZW50KSArIGVtO1xcclxcblxcdEByZXR1cm4gJHJlc3VsdDtcXHJcXG59XFxyXFxuXFxyXFxuLy9DdXJyZW5jeVxcclxcbkBtaXhpbiBjdXJyZW5jeSgkc3ltKSB7XFxyXFxuXFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdGNvbnRlbnQ6IFxcXCIjeyRzeW19XFxcIjtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vIEdyaWRzXFxyXFxuQG1peGluIGdyaWRDYXJkcygkdHlwZTogZml0LCAkbWluOiAyODBweCwgJG1heDogMWZyLCAkZ2FwOiAzMHB4KSB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRnYXA6ICRnYXA7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by0jeyR0eXBlfSwgbWlubWF4KCRtaW4sICRtYXgpKTtcXHJcXG59XFxyXFxuXFxyXFxuLy8g0JDQtNCw0L/RgtC40LLQvdCwINCy0LvQsNGB0YLQuNCy0ZbRgdGC0YwgKGNsYW1wKVxcclxcbkBtaXhpbiBhZGFwdGl2ZVZhbHVlKCRwcm9wZXJ0eSwgJHN0YXJ0U2l6ZSwgJG1pblNpemUsICRrZWVwU2l6ZTogMCwgJHdpZHRoRnJvbTogJGNvbnRhaW5lcldpZHRoLCAkd2lkdGhUbzogJG1pbldpZHRoKSB7XFxyXFxuXFx0QGlmICgkc3RhcnRTaXplPT0wKSB7XFxyXFxuXFx0XFx0JHN0YXJ0U2l6ZTogMC4wMDAwMDE7XFxyXFxuXFx0fVxcclxcblxcdEBpZiAoJG1pblNpemU9PTApIHtcXHJcXG5cXHRcXHQkbWluU2l6ZTogMC4wMDAwMDE7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCU0LvRjyBjYWxjKCk7XFxyXFxuXFx0JGFkZFNpemU6IG1hdGguZGl2KCRzdGFydFNpemUgLSAkbWluU2l6ZSwgMTYpO1xcclxcblxcclxcblxcdEBpZiAoJHdpZHRoRnJvbSA9PSAkY29udGFpbmVyV2lkdGggYW5kICRtYXhXaWR0aENvbnRhaW5lciA9PSAwKSB7XFxyXFxuXFx0XFx0JHdpZHRoRnJvbTogJG1heFdpZHRoO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQkdGA0LXQudC6LdC/0L7Rl9C90YLQuCDQsiBFTVxcclxcblxcdCR3aWR0aEZyb21NZWRpYTogZW0oJHdpZHRoRnJvbSk7XFxyXFxuXFx0JHdpZHRoVG9NZWRpYTogZW0oJHdpZHRoVG8pO1xcclxcblxcclxcblxcdC8vINCk0L7RgNC80YPQu9CwINC/0LvQsNCy0LDRjtGH0L7Qs9C+INC30L3QsNGH0LXQvdC90Y9cXHJcXG5cXHQvLyDQmNGB0YLQvtGH0L3QuNC6OiBodHRwczovL2Nzcy10cmlja3MuY29tL2xpbmVhcmx5LXNjYWxlLWZvbnQtc2l6ZS13aXRoLWNzcy1jbGFtcC1iYXNlZC1vbi10aGUtdmlld3BvcnQvXFxyXFxuXFx0JHNsb3BlOiBtYXRoLmRpdigoJHN0YXJ0U2l6ZSAtICRtaW5TaXplKSwgKCR3aWR0aEZyb20gLSAkd2lkdGhUbykpO1xcclxcblxcdCR5SW50ZXJzZWN0aW9uOiAtJHdpZHRoVG8gKiAkc2xvcGUgKyAkbWluU2l6ZTtcXHJcXG5cXHRAaWYgKCR5SW50ZXJzZWN0aW9uPT0wKSB7XFxyXFxuXFx0XFx0JHlJbnRlcnNlY3Rpb246IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHQkZmx5VmFsdWU6ICN7dG9SZW0oJHlJbnRlcnNlY3Rpb24pfVxcXCIgKyBcXFwiICN7JHNsb3BlICogMTAwfXZ3O1xcclxcblxcclxcblxcdC8vINCe0YLRgNC40LzQsNC90L3RjyDQt9C90LDRh9C10L3QvdGPINCy0LvQsNGB0YLQuNCy0L7RgdGC0ZZcXHJcXG5cXHQkcHJvcGVydHlWYWx1ZTogI3tcXFwiY2xhbXAoXFxcIiB0b1JlbSgkbWluU2l6ZSkgXFxcIixcXFwiICRmbHlWYWx1ZSBcXFwiLFxcXCIgdG9SZW0oJHN0YXJ0U2l6ZSkgXFxcIilcXFwifTtcXHJcXG5cXHQvLyDQr9C60YnQviDQvdC10LPQsNGC0LjQstC90ZYg0LfQvdCw0YfQtdC90L3Rj1xcclxcblxcdEBpZiAoJG1pblNpemUgPiAkc3RhcnRTaXplKSB7XFxyXFxuXFx0XFx0JHByb3BlcnR5VmFsdWU6ICN7XFxcImNsYW1wKFxcXCIgdG9SZW0oJHN0YXJ0U2l6ZSkgXFxcIixcXFwiICRmbHlWYWx1ZSBcXFwiLFxcXCIgdG9SZW0oJG1pblNpemUpIFxcXCIpXFxcIn07XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDQt9C90LDRh9C10L3QvdGPINC30LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0LxcXHJcXG5cXHRAaWYgJGtlZXBTaXplICE9IDEgYW5kICRrZWVwU2l6ZSAhPSAzIHtcXHJcXG5cXHRcXHRAbWVkaWEgKG1pbi13aWR0aDogJHdpZHRoRnJvbU1lZGlhKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiB0b1JlbSgkc3RhcnRTaXplKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcdC8vINCQ0LTQsNC/0YLRg9GU0LzQviDRgNC+0LfQvNGW0YAg0YMg0L/RgNC+0LzRltC20LrRgyDQvNGW0LYg0LfQsNC30L3QsNGH0LXQvdC40LzQuCDRiNC40YDQuNC90LDQvNC4INCyJ9GO0L/QvtGA0YLRg1xcclxcblxcdEBtZWRpYSAobWluLXdpZHRoOiAkd2lkdGhUb01lZGlhKSBhbmQgKG1heC13aWR0aDogJHdpZHRoRnJvbU1lZGlhKSB7XFxyXFxuXFx0XFx0Ly8g0K/QutGJ0L4g0L/RltC00YLRgNC40LzRg9GU0YLRjNGB0Y8gY2xhbXAoKTtcXHJcXG5cXHRcXHRAc3VwcG9ydHMgKCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWUpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQvLyDQr9C60YnQviDQvdC1INC/0ZbQtNGC0YDQuNC80YPRlNGC0YzRgdGPIGNsYW1wKCk7XFxyXFxuXFx0XFx0QHN1cHBvcnRzIG5vdCAoI3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogY2FsYygje3RvUmVtKCRtaW5TaXplKX0gKyAjeyRhZGRTaXplfSAqICgxMDB2dyAtICN7dG9SZW0oJHdpZHRoVG8pfSkgLyAje21hdGguZGl2KCR3aWR0aEZyb20sIDE2KSAtIG1hdGguZGl2KCR3aWR0aFRvLCAxNil9KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcdEBpZiAka2VlcFNpemUgIT0gMSBhbmQgJGtlZXBTaXplICE9IDIge1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkd2lkdGhUb01lZGlhKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiB0b1JlbSgkbWluU2l6ZSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCIvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAxMjEsIDQwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAxMzAsIDcwKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICZfX2NvbnRhaW5lciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA2NDEsIDIwMCk7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgNjQxLCAyMDApO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICByaWdodDogLTI1JTtcXHJcXG4gICAgICAgICAgICB0b3A6IDIzJTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXHJcXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpe1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgIH0gXFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmJsb2NrLXdyYXBwZXIge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBnYXA6IDgwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmxlZnQtYmxvY2sge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDQwMCwgMjgwKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogLTQwJTtcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXHJcXG4gICAgICAgIHdpZHRoOiAxcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwMCU7XFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTUwJTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmX190ZXh0IHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi10b3BcXFwiLCAzMCwgMTUpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDc2LCAzNSk7XFxyXFxuICAgICAgICB3aWR0aDogMjQwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjsgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuLmZvb3Rlci1sb2dvIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMzQsIDIwKTtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4zOyBcXHJcXG59XFxyXFxuLmNvbnRhY3RzIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDgxLCA0MCk7XFxyXFxuICAgICZfX2l0ZW0ge1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2xpbmsge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7IFxcclxcbiAgICB9XFxyXFxufVxcclxcbi5zb2NpYWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG4ucmlnaHQtYmxvY2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tbGVmdFxcXCIsIDEwMCwgMCk7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uc3Vic2NyaWJlIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDQwLCAyMCk7XFxyXFxuICAgIGNvbG9yOiAjOTY5Njk2O1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcbi5mb290ZXItZm9ybSB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNTcwLCAyODApO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAxMzEsIDYwKTtcXHJcXG4gICAgJl9faW5wdXQge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA1NzAsIDI4MCk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgIGhlaWdodDogMzZweDtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xcclxcbiAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuXFxyXFxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgYm90dG9tOiAxN3B4O1xcclxcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UsIGJvdHRvbSAwLjRzIGVhc2U7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmOmZvY3VzIHtcXHJcXG4gICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMzRweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fYnV0dG9uIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgYm90dG9tOiAxN3B4O1xcclxcbiAgICAgICAgd2lkdGg6IDY0cHg7ICBcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICByaWdodDogMDtcXHJcXG4gICAgICAgICAgICBib3R0b206IDVweDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNnB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNnB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbi5saW5rcy1ibG9jayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NjEuOThweCkge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdhcFxcXCIsIDYwLCA0MCk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmZvb3Rlci1uYXYge1xcclxcbiAgICAmOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1yaWdodFxcXCIsIDEyNCwgNjApO1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ2MS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICY6bGFzdC1jaGlsZCB7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLXJpZ2h0XFxcIiwgODgsIDQwKTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ2MS45OHB4KSB7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgJl9faXRlbSB7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fbGluayB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNzsgXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgdG9wOiAxMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbi5mb290ZXItY3JlZGl0cyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMTVweDtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgY29sb3I6ICM5Njk2OTY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMzsgXFxyXFxuICAgIHdpZHRoOiAxNDlweDtcXHJcXG4gICAgdGV4dC13cmFwOiBub3dyYXA7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MzEuOThweCkge1xcclxcbiAgICAgICAgYm90dG9tOiAtNTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cIixcIi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vIEhlcm8gc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5oZXJvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgNDgwLCAyNzApO1xcclxcbiAgICAmX19jb250YWluZXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItY291bnRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiYm90dG9tXFxcIiwgNzAsIDMwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibGVmdFxcXCIsIDIwMCwgMTUpO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDgwLCA1MCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICZfX2l0ZW0ge1xcclxcbiAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMjAsIDEwKTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICB0b3A6IDdweDtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsZWZ0XFxcIiwgMzAsIDE5KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmc3BhbiB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxNCwgMTIpOyAgXFxyXFxuICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYmxvY2stdGl0bGUge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwidG9wXFxcIiwgMTc1LCA1MCk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsZWZ0XFxcIiwgMjAwLCAzMCk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDUxNiwgMzAwKTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMCA0MHB4IDA7XFxyXFxuICAgICZfX3RpdGxlIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDcwLCAzNik7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgdGV4dC1zaGFkb3c6IDRweCA0cHggMnB4IHJnYmEoMCwwLDAsMC42KTtcXHJcXG4gICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXZpZXcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInRvcFxcXCIsIDM5MCwgMTYwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicmlnaHRcXFwiLCAxNzgsIDIwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA5MCwgNTUpO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJoZWlnaHRcXFwiLCA5MCwgNTUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTUsIDEyKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZSwgYm94LXNoYWRvdyAwLjRzIGVhc2U7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxNXB4IDhweCAjZmZmO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItc2xpZGUge1xcclxcbiAgICAmX19pbWcge1xcclxcbiAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDU4MCwgMjIwKTtcXHJcXG4gICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDIyNXB4O1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsZWZ0XFxcIiwgLTUwLCA0MDApO1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDo5NThweCl7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgIH1cXHJcXG59XFxyXFxuLnN3aXBlci1idXR0b24tbmV4dCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyMjVweDtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicmlnaHRcXFwiLCAtNTAsIDQwMCk7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjk1OHB4KXtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyBBYm91dC11cyBzZWN0aW9uXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmFib3V0LXVzIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAyNTYsIDQwKTtcXHJcXG5cXHJcXG4gICAgJl9fY29udGFpbmVyLS1iaWcge1xcclxcbiAgICAgICAgd2lkdGg6IDEzMDZweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5pbnRyby1ibG9jayB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNjE1LCAyOTApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgOTMsIDQwKTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgJl9fbGFiZWwge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDI1LCAxNSk7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RpdGxlIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDM0LCAyNCk7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uaW5mby1ibG9jayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMTYwLCA2MCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdhcFxcXCIsIDExMCwgNDApO1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDo1ODBweCl7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgNDAsIDIwKTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0tLXRvcC1saW5lIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMzkxLCAyMDApO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAzNCwgMjApO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGV4dC0tYmlnIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDIwLCAxOCk7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xcclxcblxcclxcbiAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA0MDAsIDIxMCk7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbClcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtLS1hY3Rpb24ge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA0NjMsIDI1MCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGV4dC0tc21hbGwge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTcsIDE1KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA1MCwgMjUpO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnRuIHNwYW4ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDUwO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgMzksIDE4KTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1OS45OHB4KSB7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDY5Ljk4cHgpIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAxOSwgMTApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE5LCAxMCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMTcwLCA4MCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInRvcFxcXCIsIDI1LCAxMik7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJyaWdodFxcXCIsIDM4LCAxOSk7XFxyXFxuICAgICAgICB3aWR0aDogNnB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA2cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1OS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyNSUpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS1yZXZlcnNlIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgI2ZmZjtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyBEaXJlY3Rpb25zIHNlY3Rpb25cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uZGlyZWN0aW9ucyB7XFxyXFxuICAgIG1heC13aWR0aDogMTMzNnB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMTQwLCA2MCk7XFxyXFxufVxcclxcblxcclxcbi53b3Jrcy1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICAmX19pdGVtIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMzA0LCAyMDApO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLCAwLCAwLCAwLjEzKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjY1KSAxMDAlKTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDQwMCwgMjgwKTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICAgICAgICAgICAud29ya3MtbGlzdF9faW5mbyB7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTZweCk7XFxyXFxuICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAud29ya3MtbGlzdF9fY2FyZCB7XFxyXFxuICAgICAgICAgICAgZmlsdGVyOiBibHVyKDdweCk7XFxyXFxuICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fY2FyZCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGZpbHRlcjogYmx1cigwKTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjVzIGVhc2U7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHQmX19pbmZvIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXJpZ2h0XFxcIiwgOTMsIDI1KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDUwLCAyNSk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTZweCk7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX190ZXh0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgbWFyZ2luOiAyNHB4IDAgMjRweCAwO1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ5OS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4OyBcXHJcXG4gICAgICAgIH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fbW9yZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OTkuOThweCkge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsgXFxyXFxuICAgICAgICB9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyBEaXJlY3Rpb25zIHNlY3Rpb25cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uZmVhdHVyZWQge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE1NywgNDApO1xcclxcbiAgICAmX19saXN0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdhcFxcXCIsIDEwMCwgMzApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0ge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIsXFxyXFxuICAgICAgICAmOmZvY3VzIHtcXHJcXG4gICAgICAgICAgICAuZmVhdHVyZWRfX2J0biB7XFxyXFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICZfX2ltYWdlIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMzcwLCAxODUpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgNDI4LCAyMTQpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2xhYmVsIHsgICBcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS40OyBcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi10b3BcXFwiLCAzNCwgMTUpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDgsIDQpO1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5OS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3R5cGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pbWFnZS0tYmlnIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNjAwLCAyODApO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgNDI4LCAxOTQpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0tLXRvcCB7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDE2MHB4O1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtLS1ib3R0b20ge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogLTE2MHB4O1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fYnRuIHtcXHJcXG4gICAgICAgIGxlZnQ6IDEzMHB4O1xcclxcbiAgICAgICAgdG9wOiAyMDBweDtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZSwgdmlzaWJpbGl0eSAwLjVzIGVhc2UsIHRyYW5zZm9ybSAwLjRzIGVhc2UsIGJveC1zaGFkb3cgMC40cyBlYXNlO1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAxMDBweDtcXHJcXG4gICAgICAgICAgICB0b3A6IDEwMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGVTbWFsbCkge1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDY2cHg7XFxyXFxuICAgICAgICAgICAgdG9wOiA3N3B4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbi5pbnRyb2R1Y3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmaXJzdCBiYXNlbGluZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgNDgsIDI1KTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgMTAwLCAyMCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctcmlnaHRcXFwiLCAxMDAsIDUwKTtcXHJcXG4gICAgJl9fdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNzVweDtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDEwMCwgNTApO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDQyNSwgMjUwKTtcXHJcXG4gICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA3MCwgMzUpO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDY4MHB4O1xcclxcbiAgICAgICAgICAgIHRvcDogODBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgNDgsIDI1KTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImxlZnRcXFwiLCAxMDAsIDUwKTtcXHJcXG4gICAgICAgICAgICAgICAgdG9wOiAtNDBweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gUHJvY2VzcyBzZWN0aW9uXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLnByb2Nlc3Mge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgICAgICBoZWlnaHQ6IDY2NHB4O1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KXtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDcxMHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcdFxcdCZfX2NvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMzAwcHg7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMjtcXHJcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDE0OSwgNDApO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMTYxLCA0MCk7XFxyXFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNjQxLCAyMDApO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDY0MSwgMjAwKTtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IC0yMCU7XFxyXFxuICAgICAgICAgICAgdG9wOiAtMzUlO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcclxcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCl7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX190aXRsZSB7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNGRkY7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgODAsIDMwKTsgXFxyXFxuXFxyXFxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KXtcXHJcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgMTAwLCAyMCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MTkuOThweCkge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX19saXN0IHtcXHJcXG4gICAgICAgICAgICBnYXA6IDI0cHg7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1sZWZ0XFxcIiwgNjAsIDIwKTtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tcmlnaHRcXFwiLCAxNDAsIDApO1xcclxcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCl7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX19pdGVtIHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgIC5wcm9jZXNzX190ZXh0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyOCUpXFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgLnByb2Nlc3NfX251bWJlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX190ZXh0IHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogIzZGNkY2RjtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNHMgZWFzZSwgdHJhbnNmb3JtIDAuNHMgZWFzZTtcXHJcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICAgIGxlZnQ6IC05MHB4O1xcclxcbiAgICAgICAgICAgICAgICB0b3A6IDE3cHg7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UsIG9wYWNpdHkgMC40cyBlYXNlO1xcclxcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpe1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCZfX251bWJlciB7XFxyXFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcm9jZXNzLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpe1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5ibG9jay1pbmZvIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAzOTUsIDI1MCk7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCl7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCAxMDAsIDIwKTtcXHJcXG4gICAgfVxcclxcblxcdFxcdCZfX3RleHQge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDUzLCAyNSk7IFxcclxcbiAgICAgICAgICAgIFxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy9DcmVhdGUgc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5jcmVhdGUge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDE2MCwgNDApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE0MCwgNDApO1xcclxcbiAgICAmX19jb250YWluZXIge1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3dyYXBwZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDM3Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbi5pbWctYmxvY2sge1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAzNy45OHB4KSB7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgfVxcclxcbiAgICAmX19pdGVtIHtcXHJcXG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuNHMgZWFzZTtcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDApO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0tLWJpZyB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA0NzAsIDIzNSk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJoZWlnaHRcXFwiLCAyOTAsIDE0NSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fYm90dG9tIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNTc1LCAzMDApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0tLXNtYWxsIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDEzMCwgMzApO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLXJpZ2h0XFxcIiwgMzAsIDE1KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMjcwLCAxMzUpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgMTQwLCA4MCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faXRlbS0tbWlkZGxlIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMjcwLCAxMzUpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgMjUwLCAxMjUpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5jcmVhdGUtaW5mbyB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgOTMsIDQwKTtcXHJcXG4gICAgJl9fdGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxuICAgICAgICB3aWR0aDogMzU3cHg7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMzcsIDIwKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190ZXh0IHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDkwLCAyMCk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgNTMsIDI3KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNDM4LCAyODApO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7IFxcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMzcuOThweCkge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODMuOThweCkge1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDQwLCAyMCk7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2J0biB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tbGVmdFxcXCIsIDkwLCAyMCk7XFxyXFxuXFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAzNy45OHB4KSB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgzLjk4cHgpIHtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tbGVmdFxcXCIsIDQwLCAyMCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy9WYWx1ZXMgc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi52YWx1ZXMge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDIxNCwgNDApO1xcclxcbiAgICAmX19jb250YWluZXIge1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RpdGxlIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDEwMCwgNTUpO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgODYsIDQwKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19saXN0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdhcFxcXCIsIDc1LCA0MCk7XFxyXFxuXFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjUxLjk4cHgpIHtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faXRlbSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDM0MCwgMjUwKTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDEwMCwgNTApO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faW1nIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNzAsIDM1KTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fbGFiZWwge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjQsIDIwKTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS40OyBcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGV4dCB7ICBcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTlweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19tb3JlIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgLnZhbHVlc19faWNvbiB7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faWNvbiB7XFxyXFxuICAgICAgICBmaWxsOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2U7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy9Td2lwZXIgc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5zd2lwZXItc2VjdGlvbiB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgMTI4LCA0MCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMTk2LCA0MCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAmX19jb250YWluZXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNjQxLCAyMDApO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDY0MSwgMjAwKTtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgbGVmdDogMjMlO1xcclxcbiAgICAgICAgICAgIHRvcDogMjMlO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcclxcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCl7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgfSBcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX193cmFwcGVyIHtcXHJcXG4gICAgICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fc2xpZGUge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2ltZy1xdW90ZSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDM4LCAxOSk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgOTIsIDIwKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190ZXh0IHtcXHJcXG4gICAgICAgIGNvbG9yOiAjRkZGO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjQsIDE1KTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNjczLCAzMDApO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDMzLCAxNSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fYXV0aG9yIHtcXHJcXG4gICAgICAgIGNvbG9yOiAjOTY5Njk2O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZC1jb3VudGVyIHtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgbGVmdDogNDclO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJib3R0b21cXFwiLCAtMTIwLCAwKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsZWZ0XFxcIiwgLTU0OCwgLTEzNSk7XFxyXFxuICAgICAgICBib3R0b206IDQwNXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDE2OCwgODApO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInJpZ2h0XFxcIiwgLTU3NiwgLTEyMCk7XFxyXFxuICAgICAgICBib3R0b206IDEwMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDcwLCAzNSk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vQ2xpZW50cyBzZWN0aW9uXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmNsaWVudHMge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDE1NSwgNDApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE1NSwgNDApO1xcclxcbiAgICAmX19jb250YWluZXIge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA5NzVweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc3OS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190aXRsZS1ibG9jayB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tcmlnaHRcXFwiLCAyNjAsIDApO1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc3OS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX191cHBlcnRpdGxlIHtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMjcsIDE1KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190aXRsZSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAzNCwgMjQpO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDI2OCwgMTI1KTsgXFxyXFxuXFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzc5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2xpc3Qge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInJvdy1nYXBcXFwiLCA1MCwgMzApO1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc3OS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vL05ldyBzZWN0aW9uXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLm5ldyB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMTYwLCA0MCk7XFxyXFxuICAgICZfX2NvbnRhaW5lciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiYm90dG9tXFxcIiwgLTE2MCwgLTcwKTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190aXRsZSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCA0OCwgMjQpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDkwLCAzMCk7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjsgXFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fbGlzdCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJnYXBcXFwiLCAzMCwgNDApO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDgwLCAzMCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faXRlbSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDM3MCwgMjgwKTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2RhdGUge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIHdpZHRoOiAzNSU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTQsIDEwKTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2ltYWdlIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAyNywgMTUpO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGV4dCB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyMCwgMTYpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAyOTQsIDI2MCk7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTsgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fYnRuIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vV29yayBzZWN0aW9uXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLndvcmsge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDE1OCwgNDApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE1OCwgNDApO1xcclxcbiAgICAmX19jb250YWluZXIge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA5NjBweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19ibG9jayB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDkuOThweCkge1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGl0bGUge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA0ODMsIDI1MCk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxMDAsIDUwKTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XFxyXFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2ltZyB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDIzMCwgMTE1KTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGxlZnQ6IDQ3JTtcXHJcXG4gICAgICAgIGJvdHRvbTogMzhweDtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDkuOThweCkge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fbGluayB7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblwiLFwiOnJvb3Qge1xcclxcbiAgICAtLWRhcmstY2w6ICMwRTBFMEU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMjhjMDBjZjczZTg3MDE0Y2E2Y1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==