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
  background-color: var(--dark-cl);
  overflow: hidden;
}
@media (min-width: 75em) {
  .footer {
    padding-top: 7.5625rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-top: clamp( 3.75rem , 2.3636363636rem  +  6.9318181818vw , 7.5625rem )) {
    .footer {
      padding-top: clamp( 3.75rem , 2.3636363636rem  +  6.9318181818vw , 7.5625rem );
    }
  }
  @supports not (padding-top: clamp( 3.75rem , 2.3636363636rem  +  6.9318181818vw , 7.5625rem )) {
    .footer {
      padding-top: calc(3.75rem + 3.8125 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .footer {
    padding-top: 3.75rem;
  }
}
@media (min-width: 75em) {
  .footer {
    padding-bottom: 8.125rem;
  }
}
@media (min-width: 20em) and (max-width: 75em) {
  @supports (padding-bottom: clamp( 4.0625rem , 2.5852272727rem  +  7.3863636364vw , 8.125rem )) {
    .footer {
      padding-bottom: clamp( 4.0625rem , 2.5852272727rem  +  7.3863636364vw , 8.125rem );
    }
  }
  @supports not (padding-bottom: clamp( 4.0625rem , 2.5852272727rem  +  7.3863636364vw , 8.125rem )) {
    .footer {
      padding-bottom: calc(4.0625rem + 4.0625 * (100vw - 20rem) / 55);
    }
  }
}
@media (max-width: 20em) {
  .footer {
    padding-bottom: 4.0625rem;
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
.footer-nav__link {
  font-size: 17px;
  font-weight: 500;
  line-height: 1.7;
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
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base.scss","webpack://./src/scss/header.scss","webpack://./src/scss/base/mixins.scss","webpack://./src/scss/footer.scss","webpack://./src/scss/home.scss","webpack://./src/scss/utils/vars.scss"],"names":[],"mappings":"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/kBE;ECvBF;IDwBG,mBAAA;EJklBD;AACF;AI/kBC;EAEC;IC9BF;MD+BG,2EAhBc;IJimBb;EACF;EI/kBA;IClCF;MDmCG,uDAAA;IJklBC;EACF;AACF;AIhlBE;ECvCF;IDwCG,kBAAA;EJmlBD;AACF;;AIrmBE;ECjBF;IDkBG,wBAAA;EJymBD;AACF;AItmBC;EAEC;ICxBF;MDyBG,+EAhBc;IJwnBb;EACF;EItmBA;IC5BF;MD6BG,2DAAA;IJymBC;EACF;AACF;AIvmBE;ECjCF;IDkCG,qBAAA;EJ0mBD;AACF;AKxoBI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;AL0oBR;;AKvoBA;EACI,aAAA;EACA,SAAA;AL0oBJ;;AKxoBA;EACI,aAAA;EACA,sBAAA;AL2oBJ;AI3oBE;ECFF;IDGG,oBAAA;EJ8oBD;AACF;AI3oBC;EAEC;ICTF;MDUG,oFAhBc;IJ6pBb;EACF;EI3oBA;ICbF;MDcG,wEAAA;IJ8oBC;EACF;AACF;AI5oBE;EClBF;IDmBG,4BAAA;EJ+oBD;AACF;AK/pBI;EAJJ;IAKQ,cAAA;ELkqBN;AACF;;AKhqBA;EAEI,cAAA;EACA,eAAA;EACA,gBAAA;ALkqBJ;AI5qBE;ECMF;IDLG,qBAAA;EJ+qBD;AACF;AI5qBC;EAEC;ICDF;MDEG,6EAhBc;IJ8rBb;EACF;EI5qBA;ICLF;MDMG,0DAAA;IJ+qBC;EACF;AACF;AI7qBE;ECVF;IDWG,sBAAA;EJgrBD;AACF;;AKtrBA;EAEI,kBAAA;ALwrBJ;AItsBE;ECYF;IDXG,gBAAA;EJysBD;AACF;AItsBC;EAEC;ICKF;MDJG,0EAhBc;IJwtBb;EACF;EItsBA;ICCF;MDAG,oDAAA;IJysBC;EACF;AACF;AIvsBE;ECJF;IDKG,cAAA;EJ0sBD;AACF;AI5tBE;ECYF;IDXG,wBAAA;EJ+tBD;AACF;AI5tBC;EAEC;ICKF;MDJG,gFAhBc;IJ8uBb;EACF;EI5tBA;ICCF;MDAG,4DAAA;IJ+tBC;EACF;AACF;AI7tBE;ECJF;IDKG,sBAAA;EJguBD;AACF;AKluBI;EAEI,6BAAA;EACA,WAAA;EACA,aAAA;EACA,YAAA;EACA,6BAAA;EACA,WAAA;ALmuBR;AI1vBE;ECgBE;IDfD,gBAAA;EJ6vBD;AACF;AI1vBC;EAEC;ICSE;MDRD,0EAhBc;IJ4wBb;EACF;EI1vBA;ICKE;MDJD,oDAAA;IJ6vBC;EACF;AACF;AI3vBE;ECAE;IDCD,cAAA;EJ8vBD;AACF;AKvvBQ;EACI,WAAA;EACA,kBAAA;EACA,OAAA;EACA,YAAA;EACA,UAAA;EACA,+CAAA;ALyvBZ;AKrvBY;EACI,UAAA;EACA,YAAA;ALuvBhB;AKlvBI;EACI,kBAAA;EACA,QAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,gBAAA;EACA,aAAA;EACA,2BAAA;ALovBR;AKnvBQ;EACI,WAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;ALqvBZ;;AKjvBA;EACI,aAAA;EACA,UAAA;ALovBJ;AKlvBI;EAJJ;IAKQ,sBAAA;ELqvBN;AACF;;AI1zBE;ECwEE;IDvED,qBAAA;EJ8zBD;AACF;AI3zBC;EAEC;ICiEE;MDhED,6EAhBc;IJ60Bb;EACF;EI3zBA;IC6DE;MD5DD,sDAAA;IJ8zBC;EACF;AACF;AI5zBE;ECwDE;IDvDD,qBAAA;EJ+zBD;AACF;AKtwBQ;EAHJ;IAIQ,eAAA;ELywBV;AACF;AKvwBI;EACI,eAAA;ALywBR;AIz1BE;ECuEF;IDtEG,oBAAA;EJ41BD;AACF;AIz1BC;EAEC;ICgEF;MD/DG,2EAhBc;IJ22Bb;EACF;EIz1BA;IC4DF;MD3DG,qDAAA;IJ41BC;EACF;AACF;AI11BE;ECuDF;IDtDG,oBAAA;EJ61BD;AACF;AKzxBI;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;AL2xBJ;;AKxxBA;EACI,kBAAA;EACA,SAAA;EACA,WAAA;EACA,UAAA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;AL2xBJ;AKzxBI;EAZJ;IAaQ,aAAA;EL4xBN;AACF;;AMn9BA;EACI,gCAAA;EACA,kBAAA;ANs9BJ;AI34BE;EE7EF;IF8EG,aAAA;EJ84BD;AACF;AI34BC;EAEC;IEpFF;MFqFG,yEAhBc;IJ65Bb;EACF;EI34BA;IExFF;MFyFG,uDAAA;IJ84BC;EACF;AACF;AI54BE;EE7FF;IF8FG,iBAAA;EJ+4BD;AACF;AM1+BI;EACI,kBAAA;AN4+BR;;AMx+BA;EACI,kBAAA;EAIA,aAAA;EACA,8BAAA;EACA,WAAA;ANw+BJ;AI36BE;EEpEF;IFqEG,gBAAA;EJ86BD;AACF;AI36BC;EAEC;IE3EF;MF4EG,yEAhBc;IJ67Bb;EACF;EI36BA;IE/EF;MFgFG,mDAAA;IJ86BC;EACF;AACF;AI56BE;EEpFF;IFqFG,gBAAA;EJ+6BD;AACF;AIj8BE;EEpEF;IFqEG,aAAA;EJo8BD;AACF;AIj8BC;EAEC;IE3EF;MF4EG,yEAhBc;IJm9Bb;EACF;EIj8BA;IE/EF;MFgFG,sDAAA;IJo8BC;EACF;AACF;AIl8BE;EEpFF;IFqFG,eAAA;EJq8BD;AACF;AIv9BE;EEpEF;IFqEG,WAAA;EJ09BD;AACF;AIv9BC;EAEC;IE3EF;MF4EG,oEAhBc;IJy+Bb;EACF;EIv9BA;IE/EF;MFgFG,oDAAA;IJ09BC;EACF;AACF;AIx9BE;EEpFF;IFqFG,eAAA;EJ29BD;AACF;AMxiCQ;EACI,WAAA;EACA,WAAA;EAEA,sBAAA;EACA,kBAAA;EACA,QAAA;ANyiCZ;AIp/BE;EE3DM;IF4DL,cAAA;EJu/BD;AACF;AIp/BC;EAEC;IElEM;MFmEL,uEAhBc;IJsgCb;EACF;EIp/BA;IEtEM;MFuEL,oDAAA;IJu/BC;EACF;AACF;AIr/BE;EE3EM;IF4EL,eAAA;EJw/BD;AACF;AI1gCE;EE3DM;IF4DL,cAAA;EJ6gCD;AACF;AI1gCC;EAEC;IElEM;MFmEL,0DAhBc;IJ4hCb;EACF;EI1gCA;IEtEM;MFuEL,qDAAA;IJ6gCC;EACF;AACF;AI3gCE;EE3EM;IF4EL,eAAA;EJ8gCD;AACF;AIhiCE;EEjDE;IFkDD,mBAAA;EJmiCD;AACF;AIhiCC;EAEC;IExDE;MFyDD,2EAhBc;IJkjCb;EACF;EIhiCA;IE5DE;MF6DD,uDAAA;IJmiCC;EACF;AACF;AIjiCE;EEjEE;IFkED,kBAAA;EJoiCD;AACF;;AMjmCA;EACQ,kBAAA;EAIA,sBAAA;ANimCR;AI3jCE;EE3CF;IF4CG,eAAA;EJ8jCD;AACF;AI3jCC;EAEC;IElDF;MFmDG,yEAhBc;IJ6kCb;EACF;EI3jCA;IEtDF;MFuDG,mDAAA;IJ8jCC;EACF;AACF;AI5jCE;EE3DF;IF4DG,aAAA;EJ+jCD;AACF;AIjlCE;EE3CF;IF4CG,aAAA;EJolCD;AACF;AIjlCC;EAEC;IElDF;MFmDG,wEAhBc;IJmmCb;EACF;EIjlCA;IEtDF;MFuDG,oDAAA;IJolCC;EACF;AACF;AIllCE;EE3DF;IF4DG,cAAA;EJqlCD;AACF;AIvmCE;EE3CF;IF4CG,eAAA;EJ0mCD;AACF;AIvmCC;EAEC;IElDF;MFmDG,0EAhBc;IJynCb;EACF;EIvmCA;IEtDF;MFuDG,mDAAA;IJ0mCC;EACF;AACF;AIxmCE;EE3DF;IF4DG,eAAA;EJ2mCD;AACF;AMlqCI;EAEI,gBAAA;EACA,gBAAA;EACA,WAAA;EACA,2CAAA;ANmqCR;AInoCE;EErCE;IFsCD,mBAAA;EJsoCD;AACF;AInoCC;EAEC;IE5CE;MF6CD,2EAhBc;IJqpCb;EACF;EInoCA;IEhDE;MFiDD,uDAAA;IJsoCC;EACF;AACF;AIpoCE;EErDE;IFsDD,kBAAA;EJuoCD;AACF;AMxrCQ;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,sBAAA;AN0rCZ;AMvrCI;EACI,WAAA;EACA,WAAA;EACA,WAAA;ANyrCR;;AMrrCA;EACI,kBAAA;EAKA,sBAAA;EACA,qBAAA;EACA,kBAAA;EAEA,gBAAA;EACA,qDAAA;ANmrCJ;AIhrCE;EEdF;IFeG,cAAA;EJmrCD;AACF;AIhrCC;EAEC;IErBF;MFsBG,qEAhBc;IJksCb;EACF;EIhrCA;IEzBF;MF0BG,gDAAA;IJmrCC;EACF;AACF;AIjrCE;EE9BF;IF+BG,UAAA;EJorCD;AACF;AItsCE;EEdF;IFeG,gBAAA;EJysCD;AACF;AItsCC;EAEC;IErBF;MFsBG,0EAhBc;IJwtCb;EACF;EItsCA;IEzBF;MF0BG,mDAAA;IJysCC;EACF;AACF;AIvsCE;EE9BF;IF+BG,cAAA;EJ0sCD;AACF;AI5tCE;EEdF;IFeG,eAAA;EJ+tCD;AACF;AI5tCC;EAEC;IErBF;MFsBG,yEAhBc;IJ8uCb;EACF;EI5tCA;IEzBF;MF0BG,sDAAA;IJ+tCC;EACF;AACF;AI7tCE;EE9BF;IF+BG,gBAAA;EJguCD;AACF;AIlvCE;EEdF;IFeG,gBAAA;EJqvCD;AACF;AIlvCC;EAEC;IErBF;MFsBG,0EAhBc;IJowCb;EACF;EIlvCA;IEzBF;MF0BG,uDAAA;IJqvCC;EACF;AACF;AInvCE;EE9BF;IF+BG,iBAAA;EJsvCD;AACF;AIxwCE;EEdF;IFeG,oBAAA;EJ2wCD;AACF;AIxwCC;EAEC;IErBF;MFsBG,4EAhBc;IJ0xCb;EACF;EIxwCA;IEzBF;MF0BG,wDAAA;IJ2wCC;EACF;AACF;AIzwCE;EE9BF;IF+BG,kBAAA;EJ4wCD;AACF;AM/xCI;EACI,qBAAA;EACA,iCAAA;ANiyCR;;AIlyCE;EEME;IFLD,gBAAA;EJsyCD;AACF;AInyCC;EAEC;IEDE;MFED,0EAhBc;IJqzCb;EACF;EInyCA;IELE;MFMD,oDAAA;IJsyCC;EACF;AACF;AIpyCE;EEVE;IFWD,gBAAA;EJuyCD;AACF;;AM9yCA;EACI,kBAAA;EACA,UAAA;ANizCJ;AI9zCE;EEWF;IFVG,eAAA;EJi0CD;AACF;AI9zCC;EAEC;IEIF;MFHG,wEAbe;IJ60Cd;EACF;EI9zCA;IEAF;MFCG,kDAAA;IJi0CC;EACF;AACF;AI/zCE;EELF;IFMG,WAAA;EJk0CD;AACF;AMr0CI;EAJJ;IAKQ,aAAA;ENw0CN;AACF;;AMt0CA;EACI,kBAAA;EACA,UAAA;ANy0CJ;AI91CE;EEmBF;IFlBG,gBAAA;EJi2CD;AACF;AI91CC;EAEC;IEYF;MFXG,yEAbe;IJ62Cd;EACF;EI91CA;IEQF;MFPG,mDAAA;IJi2CC;EACF;AACF;AI/1CE;EEGF;IFFG,YAAA;EJk2CD;AACF;AM71CI;EAJJ;IAKQ,aAAA;ENg2CN;AACF;;AIz3CE;EE+BF;IF9BG,kBAAA;EJ63CD;AACF;AI13CC;EAEC;IEwBF;MFvBG,2EAhBc;IJ44Cb;EACF;EI13CA;IEoBF;MFnBG,uDAAA;IJ63CC;EACF;AACF;AI33CE;EEeF;IFdG,mBAAA;EJ83CD;AACF;AM92CI;EACI,aAAA;EACA,cAAA;ANg3CR;;AM72CA;EAGI,cAAA;EACA,kBAAA;AN82CJ;AIz5CE;EEuCF;IFtCG,iBAAA;EJ45CD;AACF;AIz5CC;EAEC;IEgCF;MF/BG,6EAhBc;IJ26Cb;EACF;EIz5CA;IE4BF;MF3BG,uDAAA;IJ45CC;EACF;AACF;AI15CE;EEuBF;IFtBG,gBAAA;EJ65CD;AACF;AI/6CE;EEuCF;IFtCG,wBAAA;EJk7CD;AACF;AI/6CC;EAEC;IEgCF;MF/BG,+EAhBc;IJi8Cb;EACF;EI/6CA;IE4BF;MF3BG,2DAAA;IJk7CC;EACF;AACF;AIh7CE;EEuBF;IFtBG,qBAAA;EJm7CD;AACF;AMz5CI;EAEI,gBAAA;AN05CR;AIx8CE;EE4CE;IF3CD,wBAAA;EJ28CD;AACF;AIx8CC;EAEC;IEqCE;MFpCD,kFAhBc;IJ09Cb;EACF;EIx8CA;IEiCE;MFhCD,6DAAA;IJ28CC;EACF;AACF;AIz8CE;EE4BE;IF3BD,wBAAA;EJ48CD;AACF;AM76CI;EAEI,gBAAA;EACA,gBAAA;AN86CR;AIl+CE;EEiDE;IFhDD,mBAAA;EJq+CD;AACF;AIl+CC;EAEC;IE0CE;MFzCD,0EAhBc;IJo/Cb;EACF;EIl+CA;IEsCE;MFrCD,sDAAA;IJq+CC;EACF;AACF;AIn+CE;EEiCE;IFhCD,iBAAA;EJs+CD;AACF;;AMj8CA;EACI,aAAA;EACA,uBAAA;ANo8CJ;AI7/CE;EEuDF;IFtDG,oBAAA;EJggDD;AACF;AI7/CC;EAEC;IEgDF;MF/CG,6EAhBc;IJ+gDb;EACF;EI7/CA;IE4CF;MF3CG,0DAAA;IJggDC;EACF;AACF;AI9/CE;EEuCF;IFtCG,sBAAA;EJigDD;AACF;AInhDE;EEuDF;IFtDG,aAAA;EJshDD;AACF;AInhDC;EAEC;IEgDF;MF/CG,oEAhBc;IJqiDb;EACF;EInhDA;IE4CF;MF3CG,gDAAA;IJshDC;EACF;AACF;AIphDE;EEuCF;IFtCG,WAAA;EJuhDD;AACF;AM7+CI;EALJ;IAMQ,sBAAA;ENg/CN;AACF;AI9iDE;EEuDF;IFtDG,oBAAA;EJijDD;AACF;AI9iDC;EAEC;IEgDF;MF/CG,4EAhBc;IJgkDb;EACF;EI9iDA;IE4CF;MF3CG,yDAAA;IJijDC;EACF;AACF;AI/iDE;EEuCF;IFtCG,qBAAA;EJkjDD;AACF;AMngDI;EAGI,kBAAA;ANmgDR;AIvkDE;EEiEE;IFhED,iBAAA;EJ0kDD;AACF;AIvkDC;EAEC;IE0DE;MFzDD,0EAhBc;IJylDb;EACF;EIvkDA;IEsDE;MFrDD,qDAAA;IJ0kDC;EACF;AACF;AIxkDE;EEiDE;IFhDD,cAAA;EJ2kDD;AACF;AI7lDE;EEiEE;IFhED,qBAAA;EJgmDD;AACF;AI7lDC;EAEC;IE0DE;MFzDD,6EAhBc;IJ+mDb;EACF;EI7lDA;IEsDE;MFrDD,yDAAA;IJgmDC;EACF;AACF;AI9lDE;EEiDE;IFhDD,oBAAA;EJimDD;AACF;AM5iDI;EAEI,gBAAA;AN6iDR;AItnDE;EEuEE;IFtED,kBAAA;EJynDD;AACF;AItnDC;EAEC;IEgEE;MF/DD,2EAhBc;IJwoDb;EACF;EItnDA;IE4DE;MF3DD,wDAAA;IJynDC;EACF;AACF;AIvnDE;EEuDE;IFtDD,mBAAA;EJ0nDD;AACF;AMjkDQ;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EAEA,gCAAA;ANkkDZ;AIppDE;EE2EM;IF1EL,YAAA;EJupDD;AACF;AIppDC;EAEC;IEoEM;MFnEL,uEAhBc;IJsqDb;EACF;EIppDA;IEgEM;MF/DL,sDAAA;IJupDC;EACF;AACF;AIrpDE;EE2DM;IF1DL,gBAAA;EJwpDD;AACF;AI1qDE;EEsFE;IFrFD,iBAAA;EJ6qDD;AACF;AI1qDC;EAEC;IE+EE;MF9ED,6EAhBc;IJ4rDb;EACF;EI1qDA;IE2EE;MF1ED,uDAAA;IJ6qDC;EACF;AACF;AI3qDE;EEsEE;IFrED,gBAAA;EJ8qDD;AACF;AMtmDI;EAGI,gBAAA;ANsmDR;AInsDE;EE0FE;IFzFD,oBAAA;EJssDD;AACF;AInsDC;EAEC;IEmFE;MFlFD,8EAhBc;IJqtDb;EACF;EInsDA;IE+EE;MF9ED,yDAAA;IJssDC;EACF;AACF;AIpsDE;EE0EE;IFzED,oBAAA;EJusDD;AACF;AIztDE;EE0FE;IFzFD,uBAAA;EJ4tDD;AACF;AIztDC;EAEC;IEmFE;MFlFD,iFAhBc;IJ2uDb;EACF;EIztDA;IE+EE;MF9ED,8DAAA;IJ4tDC;EACF;AACF;AI1tDE;EE0EE;IFzED,wBAAA;EJ6tDD;AACF;;AM7oDA;EACI,kBAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;ANgpDJ;AItvDE;EEkGF;IFjGG,uBAAA;EJyvDD;AACF;AItvDC;EAEC;IE2FF;MF1FG,gFAhBc;IJwwDb;EACF;EItvDA;IEuFF;MFtFG,4DAAA;IJyvDC;EACF;AACF;AIvvDE;EEkFF;IFjFG,sBAAA;EJ0vDD;AACF;AMpqDI;EANJ;IAOQ,eAAA;IACA,WAAA;IACA,kBAAA;ENuqDN;AACF;AMtqDI;EAXJ;IAYQ,eAAA;ENyqDN;AACF;;AMtqDA;EAII,gCAAA;EACA,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,gBAAA;EACA,UAAA;EACA,iCAAA;EACA,kBAAA;ANsqDJ;AInyDE;EEkHF;IFjHG,sBAAA;EJsyDD;AACF;AInyDC;EAEC;IE2GF;MF1GG,+EAhBc;IJqzDb;EACF;EInyDA;IEuGF;MFtGG,2DAAA;IJsyDC;EACF;AACF;AIpyDE;EEkGF;IFjGG,qBAAA;EJuyDD;AACF;AIzzDE;EEkHF;IFjHG,yBAAA;EJ4zDD;AACF;AIzzDC;EAEC;IE2GF;MF1GG,kFAhBc;IJ20Db;EACF;EIzzDA;IEuGF;MFtGG,8DAAA;IJ4zDC;EACF;AACF;AI1zDE;EEkGF;IFjGG,wBAAA;EJ6zDD;AACF;AI/0DE;EEkHF;IFjHG,gBAAA;EJk1DD;AACF;AI/0DC;EAEC;IE2GF;MF1GG,sEAhBc;IJi2Db;EACF;EI/0DA;IEuGF;MFtGG,gDAAA;IJk1DC;EACF;AACF;AIh1DE;EEkGF;IFjGG,WAAA;EJm1DD;AACF;AMpuDQ;EACI,qBAAA;ANsuDZ;AMpuDQ;EACI,wBAAA;ANsuDZ;AMpuDQ;EACI,gCAAA;ANsuDZ;AMluDI;EACI,WAAA;EACA,kBAAA;EAGA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;ANkuDR;AIt3DE;EE4IE;IF3ID,cAAA;EJy3DD;AACF;AIt3DC;EAEC;IEqIE;MFpID,sEAhBc;IJw4Db;EACF;EIt3DA;IEiIE;MFhID,kDAAA;IJy3DC;EACF;AACF;AIv3DE;EE4HE;IF3HD,YAAA;EJ03DD;AACF;AI54DE;EE4IE;IF3ID,eAAA;EJ+4DD;AACF;AI54DC;EAEC;IEqIE;MFpID,yEAhBc;IJ85Db;EACF;EI54DA;IEiIE;MFhID,sDAAA;IJ+4DC;EACF;AACF;AI74DE;EE4HE;IF3HD,gBAAA;EJg5DD;AACF;AM7wDQ;EATJ;IAUQ,aAAA;ENgxDV;AACF;AM7wDI;EACI,WAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,sBAAA;EACA,4BAAA;EACA,+BAAA;AN+wDR;AM5wDI;EACI,sBAAA;EACA,uBAAA;AN8wDR;AM3wDY;EACI,sBAAA;AN6wDhB;AM1wDY;EACI,WAAA;AN4wDhB;AMzwDQ;EACI,qBAAA;EACA,gBAAA;AN2wDZ;AMxwDQ;EACI,gCAAA;AN0wDZ;AMvwDQ;EACI,gCAAA;ANywDZ;;AMlwDA;EACI,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;ANqwDJ;AI58DE;EEkMF;IFjMG,uBAAA;EJ+8DD;AACF;AI58DC;EAEC;IE2LF;MF1LG,gFAhBc;IJ89Db;EACF;EI58DA;IEuLF;MFtLG,6DAAA;IJ+8DC;EACF;AACF;AI78DE;EEkLF;IFjLG,wBAAA;EJg9DD;AACF;;AMvxDA;EACI,aAAA;EACA,eAAA;EACA,uBAAA;EACA,SAAA;AN0xDJ;AMzxDI;EAEI,qFAAA;EACA,kBAAA;EAEA,gBAAA;ANyxDR;AI9+DE;EEgNE;IF/MD,YAAA;EJi/DD;AACF;AI9+DC;EAEC;IEyME;MFxMD,sEAhBc;IJggEb;EACF;EI9+DA;IEqME;MFpMD,iDAAA;IJi/DC;EACF;AACF;AI/+DE;EEgME;IF/LD,cAAA;EJk/DD;AACF;AIpgEE;EEgNE;IF/MD,aAAA;EJugED;AACF;AIpgEC;EAEC;IEyME;MFxMD,uEAhBc;IJshEb;EACF;EIpgEA;IEqME;MFpMD,kDAAA;IJugEC;EACF;AACF;AIrgEE;EEgME;IF/LD,eAAA;EJwgED;AACF;AMp0DQ;EACI,2BAAA;ANs0DZ;AMr0DW;EACK,4BAAA;ANu0DhB;AMr0DW;EACC,iBAAA;ANu0DZ;AMl0DI;EACI,WAAA;EACA,YAAA;EACA,eAAA;EACA,4BAAA;ANo0DR;AMj0DC;EACO,kBAAA;EACA,OAAA;EACA,SAAA;EAGA,2BAAA;EACA,+BAAA;ANi0DR;AIhjEE;EEwOD;IFvOE,wBAAA;EJmjED;AACF;AIhjEC;EAEC;IEiOD;MFhOE,kFAhBc;IJkkEb;EACF;EIhjEA;IE6ND;MF5NE,4DAAA;IJmjEC;EACF;AACF;AIjjEE;EEwND;IFvNE,wBAAA;EJojED;AACF;AItkEE;EEwOD;IFvOE,sBAAA;EJykED;AACF;AItkEC;EAEC;IEiOD;MFhOE,gFAhBc;IJwlEb;EACF;EItkEA;IE6ND;MF5NE,6DAAA;IJykEC;EACF;AACF;AIvkEE;EEwND;IFvNE,uBAAA;EJ0kED;AACF;AM12DC;EACO,eAAA;EACA,WAAA;EACA,qBAAA;AN42DR;AM32DQ;EAJP;IAKW,eAAA;EN82DV;AACF;AM32DC;EACO,eAAA;EACA,WAAA;AN62DR;AM52DQ;EAHP;IAIW,eAAA;EN+2DV;AACF;;AI/mEE;EEsQF;IFrQG,yBAAA;EJmnED;AACF;AIhnEC;EAEC;IE+PF;MF9PG,mFAhBc;IJkoEb;EACF;EIhnEA;IE2PF;MF1PG,8DAAA;IJmnEC;EACF;AACF;AIjnEE;EEsPF;IFrPG,yBAAA;EJonED;AACF;AM93DI;EACI,aAAA;EACA,eAAA;EACA,uBAAA;ANg4DR;AI3oEE;EEwQE;IFvQD,YAAA;EJ8oED;AACF;AI3oEC;EAEC;IEiQE;MFhQD,qEAhBc;IJ6pEb;EACF;EI3oEA;IE6PE;MF5PD,kDAAA;IJ8oEC;EACF;AACF;AI5oEE;EEwPE;IFvPD,aAAA;EJ+oED;AACF;AMl5DI;EACI,kBAAA;EACA,gBAAA;ANo5DR;AMh5DY;EACI,UAAA;EACA,mBAAA;ANk5DhB;AIzqEE;EE2RE;IF1RD,gBAAA;EJ4qED;AACF;AIzqEC;EAEC;IEoRE;MFnRD,4EAhBc;IJ2rEb;EACF;EIzqEA;IEgRE;MF/QD,wDAAA;IJ4qEC;EACF;AACF;AI1qEE;EE2QE;IF1QD,iBAAA;EJ6qED;AACF;AI/rEE;EE2RE;IF1RD,gBAAA;EJksED;AACF;AI/rEC;EAEC;IEoRE;MFnRD,2EAhBc;IJitEb;EACF;EI/rEA;IEgRE;MF/QD,uDAAA;IJksEC;EACF;AACF;AIhsEE;EE2QE;IF1QD,iBAAA;EJmsED;AACF;AMr7DI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;ANu7DR;AI1tEE;EEgSE;IF/RD,oBAAA;EJ6tED;AACF;AI1tEC;EAEC;IEyRE;MFxRD,8EAhBc;IJ4uEb;EACF;EI1tEA;IEqRE;MFpRD,2DAAA;IJ6tEC;EACF;AACF;AI3tEE;EEgRE;IF/QD,qBAAA;EJ8tED;AACF;AIhvEE;EEgSE;IF/RD,qBAAA;EJmvED;AACF;AIhvEC;EAEC;IEyRE;MFxRD,6EAhBc;IJkwEb;EACF;EIhvEA;IEqRE;MFpRD,0DAAA;IJmvEC;EACF;AACF;AIjvEE;EEgRE;IF/QD,sBAAA;EJovED;AACF;AMh+DQ;EANJ;IAOQ,eAAA;ENm+DV;AACF;AMh+DI;EACI,eAAA;EACA,gBAAA;ANk+DR;AI/wEE;EEgTE;IF/SD,cAAA;EJkxED;AACF;AI/wEC;EAEC;IEySE;MFxSD,wEAhBc;IJiyEb;EACF;EI/wEA;IEqSE;MFpSD,gDAAA;IJkxEC;EACF;AACF;AIhxEE;EEgSE;IF/RD,cAAA;EJmxED;AACF;AIryEE;EEgTE;IF/SD,gBAAA;EJwyED;AACF;AIryEC;EAEC;IEySE;MFxSD,2EAhBc;IJuzEb;EACF;EIryEA;IEqSE;MFpSD,uDAAA;IJwyEC;EACF;AACF;AItyEE;EEgSE;IF/RD,iBAAA;EJyyED;AACF;AMtgEI;EACI,mBAAA;EACA,kBAAA;ANwgER;AMtgEQ;EAJJ;IAKQ,eAAA;IACA,cAAA;ENygEV;AACF;AMtgEI;EACI,kBAAA;ANwgER;AMvgEQ;EAFJ;IAGQ,aAAA;EN0gEV;AACF;AMvgEI;EACI,WAAA;EACA,UAAA;EACA,UAAA;EACA,kBAAA;EACA,8FAAA;ANygER;AMvgEQ;EAPJ;IAQQ,WAAA;IACA,UAAA;EN0gEV;AACF;AMzgEQ;EAXJ;IAYQ,UAAA;IACA,SAAA;EN4gEV;AACF;;AMzgEA;EACI,aAAA;EACA,eAAA;EACA,2BAAA;EACA,kBAAA;AN4gEJ;AIv2EE;EEuVF;IFtVG,mBAAA;EJ02ED;AACF;AIv2EC;EAEC;IEgVF;MF/UG,6EAhBc;IJy3Eb;EACF;EIv2EA;IE4UF;MF3UG,8DAAA;IJ02EC;EACF;AACF;AIx2EE;EEuUF;IFtUG,wBAAA;EJ22ED;AACF;AI73EE;EEuVF;IFtVG,qBAAA;EJg4ED;AACF;AI73EC;EAEC;IEgVF;MF/UG,8EAhBc;IJ+4Eb;EACF;EI73EA;IE4UF;MF3UG,sDAAA;IJg4EC;EACF;AACF;AI93EE;EEuUF;IFtUG,qBAAA;EJi4ED;AACF;AIn5EE;EEuVF;IFtVG,sBAAA;EJs5ED;AACF;AIn5EC;EAEC;IEgVF;MF/UG,+EAhBc;IJq6Eb;EACF;EIn5EA;IE4UF;MF3UG,4DAAA;IJs5EC;EACF;AACF;AIp5EE;EEuUF;IFtUG,uBAAA;EJu5ED;AACF;AM1kEI;EACI,mBAAA;EAEA,gBAAA;EACA,gBAAA;AN2kER;AI96EE;EE+VE;IF9VD,kBAAA;EJi7ED;AACF;AI96EC;EAEC;IEwVE;MFvVD,2EAhBc;IJg8Eb;EACF;EI96EA;IEoVE;MFnVD,wDAAA;IJi7EC;EACF;AACF;AI/6EE;EE+UE;IF9UD,mBAAA;EJk7ED;AACF;AIp8EE;EE+VE;IF9VD,iBAAA;EJu8ED;AACF;AIp8EC;EAEC;IEwVE;MFvVD,6EAhBc;IJs9Eb;EACF;EIp8EA;IEoVE;MFnVD,uDAAA;IJu8EC;EACF;AACF;AIr8EE;EE+UE;IF9UD,gBAAA;EJw8ED;AACF;AMrnEQ;EACI,WAAA;EACA,kBAAA;EAEA,WAAA;EACA,gCAAA;EACA,WAAA;EACA,SAAA;ANsnEZ;AIl+EE;EEqWM;IFpWL,eAAA;EJq+ED;AACF;AIl+EC;EAEC;IE8VM;MF7VL,yEAhBc;IJo/Eb;EACF;EIl+EA;IE0VM;MFzVL,sDAAA;IJq+EC;EACF;AACF;AIn+EE;EEqVM;IFpVL,gBAAA;EJs+ED;AACF;AIx/EE;EE+VE;IF9VD,mBAAA;EJ2/ED;AACF;AIx/EC;EAEC;IEwVE;MFvVD,6EAhBc;IJ0gFb;EACF;EIx/EA;IEoVE;MFnVD,8DAAA;IJ2/EC;EACF;AACF;AIz/EE;EE+UE;IF9UD,wBAAA;EJ4/ED;AACF;AMhqEQ;EAGI;IAEI,UAAA;EN+pEd;AACF;AInhFE;EEiXU;IFhXT,aAAA;EJshFD;AACF;AInhFC;EAEC;IE0WU;MFzWT,sEAhBc;IJqiFb;EACF;EInhFA;IEsWU;MFrWT,mDAAA;IJshFC;EACF;AACF;AIphFE;EEiWU;IFhWT,cAAA;EJuhFD;AACF;;AM9qEA;EACQ,gCAAA;EACA,aAAA;ANirER;AMhrEQ;EAHR;IAIY,aAAA;ENmrEV;AACF;AMlrEE;EACU,iBAAA;EACA,UAAA;EACA,gBAAA;EACA,kBAAA;ANorEZ;AIzjFE;EEiYA;IFhYC,sBAAA;EJ4jFD;AACF;AIzjFC;EAEC;IE0XA;MFzXC,gFAhBc;IJ2kFb;EACF;EIzjFA;IEsXA;MFrXC,0DAAA;IJ4jFC;EACF;AACF;AI1jFE;EEiXA;IFhXC,sBAAA;EJ6jFD;AACF;AI/kFE;EEiYA;IFhYC,0BAAA;EJklFD;AACF;AI/kFC;EAEC;IE0XA;MFzXC,oFAhBc;IJimFb;EACF;EI/kFA;IEsXA;MFrXC,8DAAA;IJklFC;EACF;AACF;AIhlFE;EEiXA;IFhXC,wBAAA;EJmlFD;AACF;AM7tEY;EACA,WAAA;EAGA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,kBAAA;EACA,yBAAA;AN6tEZ;AI7mFE;EEwYU;IFvYT,iBAAA;EJgnFD;AACF;AI7mFC;EAEC;IEiYU;MFhYT,0EAhBc;IJ+nFb;EACF;EI7mFA;IE6XU;MF5XT,qDAAA;IJgnFC;EACF;AACF;AI9mFE;EEwXU;IFvXT,cAAA;EJinFD;AACF;AInoFE;EEwYU;IFvYT,kBAAA;EJsoFD;AACF;AInoFC;EAEC;IEiYU;MFhYT,2EAhBc;IJqpFb;EACF;EInoFA;IE6XU;MF5XT,sDAAA;IJsoFC;EACF;AACF;AIpoFE;EEwXU;IFvXT,eAAA;EJuoFD;AACF;AMxwEY;EATA;IAUI,aAAA;EN2wEd;AACF;AMvwEE;EACU,WAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;ANywEZ;AIpqFE;EEuZA;IFtZC,mBAAA;EJuqFD;AACF;AIpqFC;EAEC;IEgZA;MF/YC,4EAhBc;IJsrFb;EACF;EIpqFA;IE4YA;MF3YC,4DAAA;IJuqFC;EACF;AACF;AIrqFE;EEuYA;IFtYC,uBAAA;EJwqFD;AACF;AI1rFE;EEuZA;IFtZC,qBAAA;EJ6rFD;AACF;AI1rFC;EAEC;IEgZA;MF/YC,8EAhBc;IJ4sFb;EACF;EI1rFA;IE4YA;MF3YC,sDAAA;IJ6rFC;EACF;AACF;AI3rFE;EEuYA;IFtYC,qBAAA;EJ8rFD;AACF;AM9yEY;EAXV;IAYc,YAAA;ENizEd;AACF;AM9yEE;EACU,SAAA;EACA,aAAA;EACA,sBAAA;ANgzEZ;AI1tFE;EEuaA;IFtaC,oBAAA;EJ6tFD;AACF;AI1tFC;EAEC;IEgaA;MF/ZC,4EAhBc;IJ4uFb;EACF;EI1tFA;IE4ZA;MF3ZC,uDAAA;IJ6tFC;EACF;AACF;AI3tFE;EEuZA;IFtZC,oBAAA;EJ8tFD;AACF;AIhvFE;EEuaA;IFtaC,qBAAA;EJmvFD;AACF;AIhvFC;EAEC;IEgaA;MF/ZC,uFAhBc;IJkwFb;EACF;EIhvFA;IE4ZA;MF3ZC,yEAAA;IJmvFC;EACF;AACF;AIjvFE;EEuZA;IFtZC,6BAAA;EJovFD;AACF;AMz1EY;EANV;IAOc,mBAAA;EN41Ed;AACF;AMz1EE;EACU,kBAAA;AN21EZ;AMx1EgB;EACI,WAAA;EACA,2BAAA;AN01EpB;AMz1EoB;EACI,UAAA;EACA,0BAAA;AN21ExB;AMx1EgB;EACI,UAAA;AN01EpB;AMr1EE;EACU,cAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,gDAAA;EAiBA,wBAAA;ANu0EZ;AMv1EY;EACI,WAAA;EACA,WAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,4BAAA;EACA,UAAA;EACA,kDAAA;ANy1EhB;AMx1EgB;EAXJ;IAYQ,aAAA;EN21ElB;AACF;AMr1EE;EACU,UAAA;EACA,eAAA;EACA,gBAAA;EACA,6BAAA;ANu1EZ;;AMl1EA;EACI,aAAA;ANq1EJ;AMp1EI;EAFJ;IAGQ,sBAAA;IACA,uBAAA;ENu1EN;AACF;;AIl0FE;EE8eF;IF7eG,iBAAA;EJs0FD;AACF;AIn0FC;EAEC;IEueF;MFteG,6EAhBc;IJq1Fb;EACF;EIn0FA;IEmeF;MFleG,sDAAA;IJs0FC;EACF;AACF;AIp0FE;EE8dF;IF7dG,gBAAA;EJu0FD;AACF;AIz1FE;EE8eF;IF7eG,qBAAA;EJ41FD;AACF;AIz1FC;EAEC;IEueF;MFteG,8EAhBc;IJ22Fb;EACF;EIz1FA;IEmeF;MFleG,sDAAA;IJ41FC;EACF;AACF;AI11FE;EE8dF;IF7dG,qBAAA;EJ61FD;AACF;AM33EE;EACU,WAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;AN63EZ;AIr3FE;EEofA;IFnfC,wBAAA;EJw3FD;AACF;AIr3FC;EAEC;IE6eA;MF5eC,kFAhBc;IJu4Fb;EACF;EIr3FA;IEyeA;MFxeC,4DAAA;IJw3FC;EACF;AACF;AIt3FE;EEoeA;IFneC,wBAAA;EJy3FD;AACF;;AI34FE;EEkgBF;IFjgBG,kBAAA;EJ+4FD;AACF;AI54FC;EAEC;IE2fF;MF1fG,uEAhBc;IJ85Fb;EACF;EI54FA;IEufF;MFtfG,kDAAA;IJ+4FC;EACF;AACF;AI74FE;EEkfF;IFjfG,iBAAA;EJg5FD;AACF;AIl6FE;EEkgBF;IFjgBG,uBAAA;EJq6FD;AACF;AIl6FC;EAEC;IE2fF;MF1fG,gFAhBc;IJo7Fb;EACF;EIl6FA;IEufF;MFtfG,6DAAA;IJq6FC;EACF;AACF;AIn6FE;EEkfF;IFjfG,wBAAA;EJs6FD;AACF;AMh7EI;EACI,aAAA;ANk7ER;AMj7EQ;EAFJ;IAGQ,sBAAA;ENo7EV;AACF;;AMh7EI;EADJ;IAEQ,cAAA;ENo7EN;AACF;AMn7EI;EACI,uBAAA;EACA,4BAAA;ANq7ER;AMp7EQ;EACI,oBAAA;ANs7EZ;AMl7EI;EACI,mBAAA;ANo7ER;AIh9FE;EE2hBE;IF1hBD,gBAAA;EJm9FD;AACF;AIh9FC;EAEC;IEohBE;MFnhBD,4EAhBc;IJk+Fb;EACF;EIh9FA;IEghBE;MF/gBD,wDAAA;IJm9FC;EACF;AACF;AIj9FE;EE2gBE;IF1gBD,iBAAA;EJo9FD;AACF;AIt+FE;EE2hBE;IF1hBD,iBAAA;EJy+FD;AACF;AIt+FC;EAEC;IEohBE;MFnhBD,4EAhBc;IJw/Fb;EACF;EIt+FA;IEghBE;MF/gBD,uDAAA;IJy+FC;EACF;AACF;AIv+FE;EE2gBE;IF1gBD,iBAAA;EJ0+FD;AACF;AI5/FE;EEiiBE;IFhiBD,iBAAA;EJ+/FD;AACF;AI5/FC;EAEC;IE0hBE;MFzhBD,2DAhBc;IJ8gGb;EACF;EI5/FA;IEshBE;MFrhBD,sDAAA;IJ+/FC;EACF;AACF;AI7/FE;EEihBE;IFhhBD,eAAA;EJggGD;AACF;AIlhGE;EEqiBE;IFpiBD,sBAAA;EJqhGD;AACF;AIlhGC;EAEC;IE8hBE;MF7hBD,iFAhBc;IJoiGb;EACF;EIlhGA;IE0hBE;MFzhBD,0DAAA;IJqhGC;EACF;AACF;AInhGE;EEqhBE;IFphBD,sBAAA;EJshGD;AACF;AIxiGE;EEqiBE;IFpiBD,sBAAA;EJ2iGD;AACF;AIxiGC;EAEC;IE8hBE;MF7hBD,gFAhBc;IJ0jGb;EACF;EIxiGA;IE0hBE;MFzhBD,6DAAA;IJ2iGC;EACF;AACF;AIziGE;EEqhBE;IFphBD,uBAAA;EJ4iGD;AACF;AI9jGE;EEqiBE;IFpiBD,gBAAA;EJikGD;AACF;AI9jGC;EAEC;IE8hBE;MF7hBD,2EAhBc;IJglGb;EACF;EI9jGA;IE0hBE;MFzhBD,sDAAA;IJikGC;EACF;AACF;AI/jGE;EEqhBE;IFphBD,gBAAA;EJkkGD;AACF;AIplGE;EEqiBE;IFpiBD,eAAA;EJulGD;AACF;AIplGC;EAEC;IE8hBE;MF7hBD,oEAhBc;IJsmGb;EACF;EIplGA;IE0hBE;MFzhBD,gDAAA;IJulGC;EACF;AACF;AIrlGE;EEqhBE;IFphBD,YAAA;EJwlGD;AACF;AI1mGE;EE4iBE;IF3iBD,gBAAA;EJ6mGD;AACF;AI1mGC;EAEC;IEqiBE;MFpiBD,2EAhBc;IJ4nGb;EACF;EI1mGA;IEiiBE;MFhiBD,sDAAA;IJ6mGC;EACF;AACF;AI3mGE;EE4hBE;IF3hBD,gBAAA;EJ8mGD;AACF;AIhoGE;EE4iBE;IF3iBD,iBAAA;EJmoGD;AACF;AIhoGC;EAEC;IEqiBE;MFpiBD,4EAhBc;IJkpGb;EACF;EIhoGA;IEiiBE;MFhiBD,uDAAA;IJmoGC;EACF;AACF;AIjoGE;EE4hBE;IF3hBD,iBAAA;EJooGD;AACF;;AItpGE;EEijBF;IFhjBG,sBAAA;EJ0pGD;AACF;AIvpGC;EAEC;IE0iBF;MFziBG,6EAhBc;IJyqGb;EACF;EIvpGA;IEsiBF;MFriBG,yDAAA;IJ0pGC;EACF;AACF;AIxpGE;EEiiBF;IFhiBG,mBAAA;EJ2pGD;AACF;AM1nFI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,YAAA;AN4nFR;AInrGE;EEmjBE;IFljBD,wBAAA;EJsrGD;AACF;AInrGC;EAEC;IE4iBE;MF3iBD,gFAhBc;IJqsGb;EACF;EInrGA;IEwiBE;MFviBD,4DAAA;IJsrGC;EACF;AACF;AIprGE;EEmiBE;IFliBD,sBAAA;EJurGD;AACF;AM9oFI;EAII,eAAA;EACA,gBAAA;EACA,gBAAA;AN6oFR;AI9sGE;EE2jBE;IF1jBD,sBAAA;EJitGD;AACF;AI9sGC;EAEC;IEojBE;MFnjBD,+EAhBc;IJguGb;EACF;EI9sGA;IEgjBE;MF/iBD,0DAAA;IJitGC;EACF;AACF;AI/sGE;EE2iBE;IF1iBD,qBAAA;EJktGD;AACF;AIpuGE;EE2jBE;IF1jBD,wBAAA;EJuuGD;AACF;AIpuGC;EAEC;IEojBE;MFnjBD,kFAhBc;IJsvGb;EACF;EIpuGA;IEgjBE;MF/iBD,6DAAA;IJuuGC;EACF;AACF;AIruGE;EE2iBE;IF1iBD,wBAAA;EJwuGD;AACF;AI1vGE;EE2jBE;IF1jBD,gBAAA;EJ6vGD;AACF;AI1vGC;EAEC;IEojBE;MFnjBD,0EAhBc;IJ4wGb;EACF;EI1vGA;IEgjBE;MF/iBD,mDAAA;IJ6vGC;EACF;AACF;AI3vGE;EE2iBE;IF1iBD,cAAA;EJ8vGD;AACF;AM7sFQ;EARJ;IASQ,iBAAA;IACA,kBAAA;ENgtFV;AACF;AM9sFQ;EAbJ;IAeQ,cAAA;IACA,eAAA;ENgtFV;AACF;AI5xGE;EE2jBE;IF1jBD,oBAAA;EJ+xGD;AACF;AI5xGC;EAEC;IEojBE;MFnjBD,4EAhBc;IJ8yGb;EACF;EI5xGA;IEgjBE;MF/iBD,yDAAA;IJ+xGC;EACF;AACF;AI7xGE;EE2iBE;IF1iBD,qBAAA;EJgyGD;AACF;AIlzGE;EE+kBE;IF9kBD,qBAAA;EJqzGD;AACF;AIlzGC;EAEC;IEwkBE;MFvkBD,8EAhBc;IJo0Gb;EACF;EIlzGA;IEokBE;MFnkBD,yDAAA;IJqzGC;EACF;AACF;AInzGE;EE+jBE;IF9jBD,oBAAA;EJszGD;AACF;AMtvFQ;EAHJ;IAIQ,iBAAA;ENyvFV;AACF;AI70GE;EE+kBE;IF9kBD,mBAAA;EJg1GD;AACF;AI70GC;EAEC;IEwkBE;MFvkBD,2EAhBc;IJ+1Gb;EACF;EI70GA;IEokBE;MFnkBD,wDAAA;IJg1GC;EACF;AACF;AI90GE;EE+jBE;IF9jBD,oBAAA;EJi1GD;AACF;;AIn2GE;EE6lBF;IF5lBG,yBAAA;EJu2GD;AACF;AIp2GC;EAEC;IEslBF;MFrlBG,oFAhBc;IJs3Gb;EACF;EIp2GA;IEklBF;MFjlBG,+DAAA;IJu2GC;EACF;AACF;AIr2GE;EE6kBF;IF5kBG,yBAAA;EJw2GD;AACF;AMxxFI;EAEI,kBAAA;EACA,gBAAA;EACA,gBAAA;ANyxFR;AI/3GE;EEkmBE;IFjmBD,kBAAA;EJk4GD;AACF;AI/3GC;EAEC;IE2lBE;MF1lBD,4EAhBc;IJi5Gb;EACF;EI/3GA;IEulBE;MFtlBD,0DAAA;IJk4GC;EACF;AACF;AIh4GE;EEklBE;IFjlBD,oBAAA;EJm4GD;AACF;AIr5GE;EEkmBE;IFjmBD,uBAAA;EJw5GD;AACF;AIr5GC;EAEC;IE2lBE;MF1lBD,8EAhBc;IJu6Gb;EACF;EIr5GA;IEulBE;MFtlBD,0DAAA;IJw5GC;EACF;AACF;AIt5GE;EEklBE;IFjlBD,qBAAA;EJy5GD;AACF;AMj0FI;EACI,aAAA;EACA,eAAA;EACA,uBAAA;ANm0FR;AIh7GE;EE0mBE;IFzmBD,cAAA;EJm7GD;AACF;AIh7GC;EAEC;IEmmBE;MFlmBD,qEAhBc;IJk8Gb;EACF;EIh7GA;IE+lBE;MF9lBD,iDAAA;IJm7GC;EACF;AACF;AIj7GE;EE0lBE;IFzlBD,WAAA;EJo7GD;AACF;AMt1FQ;EANJ;IAOQ,2BAAA;ENy1FV;AACF;AMt1FI;EAGI,kBAAA;ANs1FR;AI98GE;EEqnBE;IFpnBD,eAAA;EJi9GD;AACF;AI98GC;EAEC;IE8mBE;MF7mBD,2EAhBc;IJg+Gb;EACF;EI98GA;IE0mBE;MFzmBD,qDAAA;IJi9GC;EACF;AACF;AI/8GE;EEqmBE;IFpmBD,gBAAA;EJk9GD;AACF;AIp+GE;EEqnBE;IFpnBD,qBAAA;EJu+GD;AACF;AIp+GC;EAEC;IE8mBE;MF7mBD,8EAhBc;IJs/Gb;EACF;EIp+GA;IE0mBE;MFzmBD,2DAAA;IJu+GC;EACF;AACF;AIr+GE;EEqmBE;IFpmBD,sBAAA;EJw+GD;AACF;AMh4FQ;EALJ;IAMQ,WAAA;ENm4FV;AACF;AMh4FI;EAEI,kBAAA;EACA,MAAA;EACA,OAAA;ANi4FR;AIpgHE;EE+nBE;IF9nBD,eAAA;EJugHD;AACF;AIpgHC;EAEC;IEwnBE;MFvnBD,yEAhBc;IJshHb;EACF;EIpgHA;IEonBE;MFnnBD,sDAAA;IJugHC;EACF;AACF;AIrgHE;EE+mBE;IF9mBD,gBAAA;EJwgHD;AACF;AMp5FI;EAEI,gBAAA;EACA,gBAAA;EACA,mBAAA;ANq5FR;AI/hHE;EEsoBE;IFroBD,iBAAA;EJkiHD;AACF;AI/hHC;EAEC;IE+nBE;MF9nBD,yEAhBc;IJijHb;EACF;EI/hHA;IE2nBE;MF1nBD,sDAAA;IJkiHC;EACF;AACF;AIhiHE;EEsnBE;IFrnBD,kBAAA;EJmiHD;AACF;AMx6FI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;AN06FR;AMv6FI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;ANy6FR;AMv6FY;EACI,2BAAA;ANy6FhB;AMp6FI;EACI,oBAAA;EACA,+BAAA;ANs6FR;;AMh6FA;EAGI,gCAAA;EACA,gBAAA;ANi6FJ;AI9kHE;EEyqBF;IFxqBG,iBAAA;EJilHD;AACF;AI9kHC;EAEC;IEkqBF;MFjqBG,0EAhBc;IJgmHb;EACF;EI9kHA;IE8pBF;MF7pBG,0DAAA;IJilHC;EACF;AACF;AI/kHE;EEypBF;IFxpBG,qBAAA;EJklHD;AACF;AIpmHE;EEyqBF;IFxqBG,wBAAA;EJumHD;AACF;AIpmHC;EAEC;IEkqBF;MFjqBG,kFAhBc;IJsnHb;EACF;EIpmHA;IE8pBF;MF7pBG,6DAAA;IJumHC;EACF;AACF;AIrmHE;EEypBF;IFxpBG,wBAAA;EJwmHD;AACF;AM58FI;EACI,kBAAA;AN88FR;AM78FQ;EACI,WAAA;EAGA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,kBAAA;EACA,yBAAA;AN68FZ;AIroHE;EEgrBM;IF/qBL,iBAAA;EJwoHD;AACF;AIroHC;EAEC;IEyqBM;MFxqBL,0EAhBc;IJupHb;EACF;EIroHA;IEqqBM;MFpqBL,qDAAA;IJwoHC;EACF;AACF;AItoHE;EEgqBM;IF/pBL,cAAA;EJyoHD;AACF;AI3pHE;EEgrBM;IF/qBL,kBAAA;EJ8pHD;AACF;AI3pHC;EAEC;IEyqBM;MFxqBL,2EAhBc;IJ6qHb;EACF;EI3pHA;IEqqBM;MFpqBL,sDAAA;IJ8pHC;EACF;AACF;AI5pHE;EEgqBM;IF/pBL,eAAA;EJ+pHD;AACF;AMx/FY;EATJ;IAUQ,aAAA;EN2/Fd;AACF;AMv/FI;EACI,UAAA;ANy/FR;AMt/FI;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;ANw/FR;AI9rHE;EEysBE;IFxsBD,eAAA;EJisHD;AACF;AI9rHC;EAEC;IEksBE;MFjsBD,yEAhBc;IJgtHb;EACF;EI9rHA;IE8rBE;MF7rBD,sDAAA;IJisHC;EACF;AACF;AI/rHE;EEyrBE;IFxrBD,gBAAA;EJksHD;AACF;AIptHE;EEysBE;IFxsBD,sBAAA;EJutHD;AACF;AIptHC;EAEC;IEksBE;MFjsBD,+EAhBc;IJsuHb;EACF;EIptHA;IE8rBE;MF7rBD,yDAAA;IJutHC;EACF;AACF;AIrtHE;EEyrBE;IFxrBD,sBAAA;EJwtHD;AACF;AM5hGI;EACI,WAAA;EAEA,gBAAA;EACA,gBAAA;EACA,kBAAA;AN6hGR;AIhvHE;EE8sBE;IF7sBD,iBAAA;EJmvHD;AACF;AIhvHC;EAEC;IEusBE;MFtsBD,2EAhBc;IJkwHb;EACF;EIhvHA;IEmsBE;MFlsBD,0DAAA;IJmvHC;EACF;AACF;AIjvHE;EE8rBE;IF7rBD,oBAAA;EJovHD;AACF;AItwHE;EE8sBE;IF7sBD,iBAAA;EJywHD;AACF;AItwHC;EAEC;IEusBE;MFtsBD,4EAhBc;IJwxHb;EACF;EItwHA;IEmsBE;MFlsBD,sDAAA;IJywHC;EACF;AACF;AIvwHE;EE8rBE;IF7rBD,eAAA;EJ0wHD;AACF;AI5xHE;EE8sBE;IF7sBD,wBAAA;EJ+xHD;AACF;AI5xHC;EAEC;IEusBE;MFtsBD,kFAhBc;IJ8yHb;EACF;EI5xHA;IEmsBE;MFlsBD,6DAAA;IJ+xHC;EACF;AACF;AI7xHE;EE8rBE;IF7rBD,wBAAA;EJgyHD;AACF;AM1lGI;EACI,cAAA;EACA,gBAAA;EACA,gBAAA;AN4lGR;;AMxlGA;EACI,UAAA;EACA,SAAA;EAEA,kBAAA;AN0lGJ;AI7zHE;EE+tBF;IF9tBG,eAAA;EJg0HD;AACF;AI7zHC;EAEC;IEwtBF;MFvtBG,+EAbe;IJ40Hd;EACF;EI7zHA;IEotBF;MFntBG,oEAAA;IJg0HC;EACF;AACF;AI9zHE;EE+sBF;IF9sBG,uBAAA;EJi0HD;AACF;AM9mGI;EANJ;IAOQ,aAAA;ENinGN;AACF;AMhnGI;EACI,WAAA;EACA,kBAAA;EAEA,aAAA;EACA,WAAA;EAEA,sBAAA;ANgnGR;AI/1HE;EEwuBE;IFvuBD,eAAA;EJk2HD;AACF;AI/1HC;EAEC;IEiuBE;MFhuBD,4EAbe;IJ82Hd;EACF;EI/1HA;IE6tBE;MF5tBD,wDAAA;IJk2HC;EACF;AACF;AIh2HE;EEwtBE;IFvtBD,gBAAA;EJm2HD;AACF;AIr3HE;EEwuBE;IFvuBD,cAAA;EJw3HD;AACF;AIr3HC;EAEC;IEiuBE;MFhuBD,8CAhBc;IJu4Hb;EACF;EIr3HA;IE6tBE;MF5tBD,8CAAA;IJw3HC;EACF;AACF;AIt3HE;EEwtBE;IFvtBD,WAAA;EJy3HD;AACF;AM1pGQ;EATJ;IAUQ,aAAA;EN6pGV;AACF;AM3pGI;EACI,WAAA;EACA,kBAAA;EAEA,aAAA;EACA,WAAA;EAEA,sBAAA;EACA,wBAAA;AN2pGR;AIx5HE;EEqvBE;IFpvBD,aAAA;EJ25HD;AACF;AIx5HC;EAEC;IE8uBE;MF7uBD,uEAbe;IJu6Hd;EACF;EIx5HA;IE0uBE;MFzuBD,mDAAA;IJ25HC;EACF;AACF;AIz5HE;EEquBE;IFpuBD,cAAA;EJ45HD;AACF;AI96HE;EEqvBE;IFpvBD,eAAA;EJi7HD;AACF;AI96HC;EAEC;IE8uBE;MF7uBD,yEAhBc;IJg8Hb;EACF;EI96HA;IE0uBE;MFzuBD,sDAAA;IJi7HC;EACF;AACF;AI/6HE;EEquBE;IFpuBD,gBAAA;EJk7HD;AACF;AMrsGQ;EAVJ;IAWQ,aAAA;ENwsGV;AACF;;AIz8HE;EEwwBF;IFvwBG,sBAAA;EJ68HD;AACF;AI18HC;EAEC;IEiwBF;MFhwBG,gFAhBc;IJ49Hb;EACF;EI18HA;IE6vBF;MF5vBG,uDAAA;IJ68HC;EACF;AACF;AI38HE;EEwvBF;IFvvBG,sBAAA;EJ88HD;AACF;AIh+HE;EEwwBF;IFvwBG,yBAAA;EJm+HD;AACF;AIh+HC;EAEC;IEiwBF;MFhwBG,mFAhBc;IJk/Hb;EACF;EIh+HA;IE6vBF;MF5vBG,0DAAA;IJm+HC;EACF;AACF;AIj+HE;EEwvBF;IFvvBG,yBAAA;EJo+HD;AACF;AM3uGI;EACI,gBAAA;EACA,aAAA;EACA,mBAAA;AN6uGR;AM3uGQ;EALJ;IAMQ,sBAAA;EN8uGV;AACF;AIhgIE;EEqxBE;IFpxBD,sBAAA;EJmgID;AACF;AIhgIC;EAEC;IE8wBE;MF7wBD,wFAhBc;IJkhIb;EACF;EIhgIA;IE0wBE;MFzwBD,0EAAA;IJmgIC;EACF;AACF;AIjgIE;EEqwBE;IFpwBD,6BAAA;EJogID;AACF;AM9vGQ;EAHJ;IAIQ,eAAA;IACA,WAAA;IACA,kBAAA;ENiwGV;AACF;AM9vGI;EACI,gBAAA;ANgwGR;AIhiIE;EE+xBE;IF9xBD,wBAAA;EJmiID;AACF;AIhiIC;EAEC;IEwxBE;MFvxBD,kFAhBc;IJkjIb;EACF;EIhiIA;IEoxBE;MFnxBD,4DAAA;IJmiIC;EACF;AACF;AIjiIE;EE+wBE;IF9wBD,wBAAA;EJoiID;AACF;AMlxGI;EAEI,gBAAA;EACA,gBAAA;ANmxGR;AI1jIE;EEoyBE;IFnyBD,mBAAA;EJ6jID;AACF;AI1jIC;EAEC;IE6xBE;MF5xBD,0EAhBc;IJ4kIb;EACF;EI1jIA;IEyxBE;MFxxBD,sDAAA;IJ6jIC;EACF;AACF;AI3jIE;EEoxBE;IFnxBD,iBAAA;EJ8jID;AACF;AIhlIE;EEoyBE;IFnyBD,eAAA;EJmlID;AACF;AIhlIC;EAEC;IE6xBE;MF5xBD,4DAhBc;IJkmIb;EACF;EIhlIA;IEyxBE;MFxxBD,sDAAA;IJmlIC;EACF;AACF;AIjlIE;EEoxBE;IFnxBD,gBAAA;EJolID;AACF;AM5zGQ;EANJ;IAOQ,WAAA;IACA,mBAAA;EN+zGV;AACF;AM5zGI;EACI,aAAA;EACA,eAAA;EACA,8BAAA;AN8zGR;AIjnIE;EEgzBE;IF/yBD,iBAAA;EJonID;AACF;AIjnIC;EAEC;IEyyBE;MFxyBD,0EAhBc;IJmoIb;EACF;EIjnIA;IEqyBE;MFpyBD,qDAAA;IJonIC;EACF;AACF;AIlnIE;EEgyBE;IF/xBD,iBAAA;EJqnID;AACF;AMj1GQ;EANJ;IAOQ,UAAA;IACA,uBAAA;ENo1GV;AACF;;AI7oIE;EEg0BF;IF/zBG,qBAAA;EJipID;AACF;AI9oIC;EAEC;IEyzBF;MFxzBG,+EAhBc;IJgqIb;EACF;EI9oIA;IEqzBF;MFpzBG,6DAAA;IJipIC;EACF;AACF;AI/oIE;EEgzBF;IF/yBG,wBAAA;EJkpID;AACF;AMl2GI;EACI,kBAAA;ANo2GR;AMl2GQ;EACI,WAAA;EACA,kBAAA;EACA,OAAA;EAEA,WAAA;EACA,WAAA;EACA,gCAAA;ANm2GZ;AI/qIE;EEq0BM;IFp0BL,cAAA;EJkrID;AACF;AI/qIC;EAEC;IE8zBM;MF7zBL,2EAbe;IJ8rId;EACF;EI/qIA;IE0zBM;MFzzBL,uDAAA;IJkrIC;EACF;AACF;AIhrIE;EEqzBM;IFpzBL,iBAAA;EJmrID;AACF;AMr3GI;EAGI,gBAAA;EACA,gBAAA;EACA,kBAAA;ANq3GR;AI1sIE;EEg1BE;IF/0BD,eAAA;EJ6sID;AACF;AI1sIC;EAEC;IEy0BE;MFx0BD,sEAhBc;IJ4tIb;EACF;EI1sIA;IEq0BE;MFp0BD,oDAAA;IJ6sIC;EACF;AACF;AI3sIE;EEg0BE;IF/zBD,iBAAA;EJ8sID;AACF;AIhuIE;EEg1BE;IF/0BD,uBAAA;EJmuID;AACF;AIhuIC;EAEC;IEy0BE;MFx0BD,gFAhBc;IJkvIb;EACF;EIhuIA;IEq0BE;MFp0BD,2DAAA;IJmuIC;EACF;AACF;AIjuIE;EEg0BE;IF/zBD,uBAAA;EJouID;AACF;AM95GI;EACI,aAAA;EACA,eAAA;EACA,uBAAA;ANg6GR;AI3vIE;EEw1BE;IFv1BD,aAAA;EJ8vID;AACF;AI3vIC;EAEC;IEi1BE;MFh1BD,qEAbe;IJ0wId;EACF;EI3vIA;IE60BE;MF50BD,iDAAA;IJ8vIC;EACF;AACF;AI5vIE;EEw0BE;IFv0BD,WAAA;EJ+vID;AACF;AIjxIE;EEw1BE;IFv1BD,mBAAA;EJoxID;AACF;AIjxIC;EAEC;IEi1BE;MFh1BD,4EAhBc;IJmyIb;EACF;EIjxIA;IE60BE;MF50BD,4DAAA;IJoxIC;EACF;AACF;AIlxIE;EEw0BE;IFv0BD,uBAAA;EJqxID;AACF;AMv8GI;EAEI,kBAAA;ANw8GR;AI1yIE;EEg2BE;IF/1BD,gBAAA;EJ6yID;AACF;AI1yIC;EAEC;IEy1BE;MFx1BD,0EAhBc;IJ4zIb;EACF;EI1yIA;IEq1BE;MFp1BD,mDAAA;IJ6yIC;EACF;AACF;AI3yIE;EEg1BE;IF/0BD,cAAA;EJ8yID;AACF;AM39GI;EACI,kBAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,kBAAA;EACA,sBAAA;EAEA,gBAAA;EACA,gBAAA;AN49GR;AI10IE;EEq2BE;IFp2BD,mBAAA;EJ60ID;AACF;AI10IC;EAEC;IE81BE;MF71BD,4EAhBc;IJ41Ib;EACF;EI10IA;IE01BE;MFz1BD,uDAAA;IJ60IC;EACF;AACF;AI30IE;EEq1BE;IFp1BD,mBAAA;EJ80ID;AACF;AM/+GI;EAEI,WAAA;ANg/GR;AIn2IE;EEi3BE;IFh3BD,wBAAA;EJs2ID;AACF;AIn2IC;EAEC;IE02BE;MFz2BD,kFAhBc;IJq3Ib;EACF;EIn2IA;IEs2BE;MFr2BD,4DAAA;IJs2IC;EACF;AACF;AIp2IE;EEi2BE;IFh2BD,wBAAA;EJu2ID;AACF;AMngHI;EAGI,gBAAA;EACA,gBAAA;ANmgHR;AI73IE;EEs3BE;IFr3BD,kBAAA;EJg4ID;AACF;AI73IC;EAEC;IE+2BE;MF92BD,uEAhBc;IJ+4Ib;EACF;EI73IA;IE22BE;MF12BD,mDAAA;IJg4IC;EACF;AACF;AI93IE;EEs2BE;IFr2BD,eAAA;EJi4ID;AACF;AIn5IE;EEs3BE;IFr3BD,gBAAA;EJs5ID;AACF;AIn5IC;EAEC;IE+2BE;MF92BD,0EAhBc;IJq6Ib;EACF;EIn5IA;IE22BE;MF12BD,oDAAA;IJs5IC;EACF;AACF;AIp5IE;EEs2BE;IFr2BD,eAAA;EJu5ID;AACF;AM5iHI;EACI,cAAA;AN8iHR;;AI56IE;EEo4BF;IFn4BG,qBAAA;EJg7ID;AACF;AI76IC;EAEC;IE63BF;MF53BG,8EAhBc;IJ+7Ib;EACF;EI76IA;IEy3BF;MFx3BG,wDAAA;IJg7IC;EACF;AACF;AI96IE;EEo3BF;IFn3BG,mBAAA;EJi7ID;AACF;AIn8IE;EEo4BF;IFn4BG,wBAAA;EJs8ID;AACF;AIn8IC;EAEC;IE63BF;MF53BG,iFAhBc;IJq9Ib;EACF;EIn8IA;IEy3BF;MFx3BG,2DAAA;IJs8IC;EACF;AACF;AIp8IE;EEo3BF;IFn3BG,sBAAA;EJu8ID;AACF;AMllHI;EACI,gBAAA;EACA,kBAAA;ANolHR;AMjlHI;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;ANmlHR;AMjlHQ;EALJ;IAMQ,sBAAA;IACA,uBAAA;ENolHV;AACF;AMjlHI;EAGI,gBAAA;EACA,gBAAA;ANilHR;AI5+IE;EEu5BE;IFt5BD,iBAAA;EJ++ID;AACF;AI5+IC;EAEC;IEg5BE;MF/4BD,6EAhBc;IJ8/Ib;EACF;EI5+IA;IE44BE;MF34BD,uDAAA;IJ++IC;EACF;AACF;AI7+IE;EEu4BE;IFt4BD,gBAAA;EJg/ID;AACF;AIlgJE;EEu5BE;IFt5BD,kBAAA;EJqgJD;AACF;AIlgJC;EAEC;IEg5BE;MF/4BD,2EAhBc;IJohJb;EACF;EIlgJA;IE44BE;MF34BD,wDAAA;IJqgJC;EACF;AACF;AIngJE;EEu4BE;IFt4BD,mBAAA;EJsgJD;AACF;AM5nHQ;EACI,kBAAA;EACA,UAAA;AN8nHZ;AM7nHY;EACI,WAAA;EACA,kBAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;EACA,gCAAA;AN+nHhB;AM1nHI;EAEI,kBAAA;EACA,SAAA;EACA,YAAA;AN2nHR;AI1iJE;EE26BE;IF16BD,gBAAA;EJ6iJD;AACF;AI1iJC;EAEC;IEo6BE;MFn6BD,2EAhBc;IJ4jJb;EACF;EI1iJA;IEg6BE;MF/5BD,sDAAA;IJ6iJC;EACF;AACF;AI3iJE;EE25BE;IF15BD,gBAAA;EJ8iJD;AACF;AM/oHQ;EANJ;IAOQ,aAAA;ENkpHV;AACF;AM/oHI;EACI,+BAAA;ANipHR;AMhpHQ;EACI,0BAAA;ANkpHZ;;AO3pJA;EACI,kBAAA;AP8pJJ","sourcesContent":["@use \"sass:math\";\r\n\r\n// Підключення міксинів ===========================================================================================================================================================================================================================================================================\r\n@import \"base/mixins\";\r\n\r\n// Підключення шрифтів ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - додати при підключенні через плагін\r\n\r\n// Підключити, якщо є локальні файли шрифтів\r\n@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');\r\n\r\n// Підключення іконкових шрифтів ==============================================================================================================================================================================================================================================================================\r\n// Підключити, якщо є файл іконкового шрифту\r\n//@import \"fonts/icons\";\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// Налаштування шаблону ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// За замовчуванням шрифт ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: \"Inter\";\r\n$fontSize: toRem(15); // де 14(px) - розмір шрифту за замовчуванням з макету\r\n\r\n// Основні кольори\r\n$mainColor: #0E0E0E; // Колір шрифту за замовчуванням\r\n\r\n// Палітра кольорів\r\n// @import \"base/colors-palette\";\r\n\r\n// Налаштування адаптивної сітки ===============================================================================================================================================================================================================================================================================================\r\n\r\n// Мінімальна ширина сторінки\r\n$minWidth: 320;\r\n// Ширина полотна (макету)\r\n$maxWidth: 1366;\r\n// Ширина обмежуючого контейнера (0 = немає обмеження)\r\n$maxWidthContainer: 1170;\r\n// Загальний відступ у контейнера\r\n// (30 = по 15px ліворуч і праворуч, 0 = немає відступу)\r\n$containerPadding: 30;\r\n\r\n// Ширина спрацьовування першого брейкпоінту\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поїнти\r\n$pc: em($containerWidth); // ПК, ноутбуки, деякі планшети у горизонтальному положенні\r\n$tablet: em(991.98); // Планшети, деякі телефони в горизонтальному положенні\r\n$mobile: em(767.98); // Телефони L\r\n$mobileSmall: em(479.98); // Телефони S\r\n\r\n// Тип адаптива:\r\n// 1 = чуйність (у контейнера немає брейкпоінтів),\r\n// 2 = по брейк-поїнт (контейнер змінює свою ширину по брейк-поїнт)\r\n$responsiveType: 1;\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// Обнулення ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import \"base/null\";\r\n\r\n// Стилі тега BODY ============================================================================================================================================================================================================================================================================================================================================================================================\r\nbody {\r\n\t// Скролл заблоковано\r\n\t.lock & {\r\n\t\toverflow: hidden;\r\n\t\ttouch-action: none;\r\n\t\toverscroll-behavior: none;\r\n\t}\r\n\t// Сайт завантажений\r\n\t.loaded & {\r\n\t}\r\n}\r\n// Оболонка wrapper ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n\tmin-height: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\toverflow: hidden;\r\n\t@supports (overflow: clip) {\r\n\t\toverflow: clip;\r\n\t}\r\n\t// Притискаємо footer\r\n\t> main {\r\n\t\tflex: 1 1 auto;\r\n\t}\r\n\t// Фікс для слайдерів\r\n\t> * {\r\n\t\tmin-width: 0;\r\n\t}\r\n}\r\n// Обмежуючий контейнер ======================================================================================================================================================================================================================\r\n/*\r\n(i) Стилі будуть застосовуватись до\r\nвсіх класів, що містять *__container\r\nНаприклад header__container, main__container і т.п.\r\nСніппет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n\t// Чуйна\r\n\t[class*=\"__container\"] {\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: toRem($containerWidth);\r\n\t\t\tmargin: 0 auto;\r\n\t\t}\r\n\t\t@if ($containerPadding>0) {\r\n\t\t\t@if ($maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\r\n\t\t\t} @else {\r\n\t\t\t\t@include adaptiveValue(\"padding-left\", math.div($containerPadding, 2), 15);\r\n\t\t\t\t@include adaptiveValue(\"padding-right\", math.div($containerPadding, 2), 15);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n} @else {\r\n\t// Брейк-поїнтами\r\n\t[class*=\"__container\"] {\r\n\t\tmargin: 0 auto;\r\n\t\t@if ($maxWidthContainer>0) {\r\n\t\t\tmax-width: toRem($containerWidth);\r\n\t\t} @else {\r\n\t\t\t@if ($containerPadding>0) {\r\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t\t@media (max-width: $pc) {\r\n\t\t\tmax-width: toRem(970);\r\n\t\t}\r\n\t\t@media (max-width: $tablet) {\r\n\t\t\tmax-width: toRem(750);\r\n\t\t}\r\n\t\t@media (max-width: $mobile) {\r\n\t\t\tmax-width: none;\r\n\t\t\t@if ($containerPadding>0 and $maxWidthContainer>0) {\r\n\t\t\t\tpadding: 0 toRem(math.div($containerPadding, 2));\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// Підключення базових стилів, шаблонів (заготівель) та допоміжних класів\r\n// Для підключення/вимкнення конкретних стилів дивись base.scss\r\n@import \"base\";\r\n\r\n// Підключення стилів загальних елементів проекту\r\n@import \"common\";\r\n\r\n// Підключення стилів окремих блоків\r\n@import \"header\";\r\n@import \"footer\";\r\n\r\n// Підключення стилів окремих сторінок\r\n@import \"home\";\r\n\r\n// Змінні\r\n\r\n@import \"utils/vars\";\r\n","* {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: 0px;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n\t// outline: none;\r\n}\r\na:focus,\r\na:active {\r\n\t// outline: none;\r\n}\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tmin-width: $minWidth + px;\r\n}\r\nbody {\r\n\tcolor: $mainColor;\r\n\tline-height: 1;\r\n\tfont-family: $fontFamily;\r\n\tfont-size: $fontSize;\r\n\t//text-rendering: optimizeLegibility;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n\tfont-family: $fontFamily;\r\n\tfont-size: inherit;\r\n\tline-height: inherit;\r\n}\r\nbutton {\r\n\tcursor: pointer;\r\n\tcolor: inherit;\r\n\tbackground-color: transparent;\r\n}\r\na {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\nul li {\r\n\tlist-style: none;\r\n}\r\nimg {\r\n\tvertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n","// Загальний файл елементів форм\r\n// Для підключення/відключення стилів конкретного елемента форми дивись base/forms/forms.scss\r\n@import \"base/forms/forms\";\r\n\r\n// Стилі попапів\r\n// @import \"base/popup\";\r\n\r\n// Стилі спойлерів\r\n// @import \"base/spollers\";\r\n\r\n// Стилі табів\r\n// @import \"base/tabs\";\r\n\r\n// Стилі мап\r\n// @import \"base/maps\";\r\n\r\n// Стилі блоку \"показати ще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стилі для липкого блоку\r\n// @import \"base/sticky\";\r\n\r\n// Стилі для повноекранного блоку\r\n// @import \"base/fullscreen\";\r\n\r\n// Стилі для поекраної прокрутки\r\n// Styles for fullpage scroll\r\n// @import \"base/fullpage\";\r\n\r\n// Стилі для ripple ефекту\r\n// Styles for ripple effect\r\n// @import \"base/ripple\";\r\n\r\n// Стилі для кастомного курсору\r\n// Styles for custom cursor\r\n// @import \"base/cursor\";\r\n\r\n// Стилі для чуйних картинок (IBG)\r\n// Сніппет (HTML): ibg (div з картинкою та класами)\r\n// Сніппет (HTML): ibga (a з картинкою та класами)\r\n[class*=\"-ibg\"] {\r\n\tposition: relative;\r\n\timg {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tobject-fit: cover;\r\n\t}\r\n}\r\n[class*=\"-ibg--contain\"] {\r\n\timg {\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n// Шаблони (заготівлі)\r\n// @extend %ім'я шаблону;\r\n// Сніппет (SCSS): ex\r\n\r\n// Лічильник для списку\r\n%listCounter {\r\n\tlist-style-type: none;\r\n\tcounter-reset: item;\r\n\tli {\r\n\t\tposition: relative;\r\n\t\t&:before {\r\n\t\t\tcounter-increment: item;\r\n\t\t\tcontent: counter(item);\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t}\r\n}\r\n// Адаптивне відео\r\n%responsiveVideo {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 0;\r\n\tpadding-bottom: 56.25%;\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n// Відео як фон\r\n%videoBackground {\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: fixed;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t\tz-index: -100;\r\n\t\ttransform: translateX(-50%) translateY(-50%);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}\r\n// Сірий фільтр\r\n%grayfilter {\r\n\ttransition: all 0.3s ease 0s;\r\n\tfilter: grayscale(1);\r\n\t@media (any-hover: hover) {\r\n\t\t&:hover {\r\n\t\t\tfilter: grayscale(0);\r\n\t\t}\r\n\t}\r\n}\r\n// Скасувати виділення\r\n%noselect {\r\n\tuser-select: none;\r\n}\r\n// Дзеркальне відображення\r\n%mirror {\r\n\ttransform: scale(-1, 1);\r\n}\r\n// Плавний скролл\r\n%smoothscroll {\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n// Сховати скролл\r\n%hidescroll {\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n","//====================================================================================================\r\n\r\n.header {\r\n\tbackground-color: var(--dark-cl);\r\n\tcolor: #fff;\r\n\t&__menu {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\t@media (max-width:580px){\r\n\t\t\tjustify-content: space-between;\r\n\t\t\theight: 52px;\r\n\t\t  }\r\n\t}\r\n}\r\n\r\n.logo {\r\n\tmargin-right: auto;\r\n\t@include adaptiveValue(\"font-size\", 20, 15);\r\n}\r\n.menu {\r\n\r\n\t&__body {\r\n\t\t@include adaptiveValue(\"padding-top\", 35, 25);\r\n\t\t@include adaptiveValue(\"padding-bottom\", 35, 25);\r\n\t\tdisplay: flex;\r\n\t\tz-index: 10;\r\n\t\t@media (max-width:580px){\r\n\t\t\tflex-direction: column;\r\n\t\t\talign-items: center;\r\n\t\t  }\r\n\t}\r\n\r\n\t&__list {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\t@include adaptiveValue(\"margin-right\", 60, 50);\r\n\t\t@include adaptiveValue(\"gap\", 40, 30);\r\n\r\n\t\t@media (max-width:580px){\r\n\t\t\tflex-direction: column;\r\n\t\t\talign-items: center;\r\n\t\t\tmargin: 0;\r\n\t\t\tflex: 2;\r\n\t\t  }\r\n\t  }\r\n\r\n\t&__link {\r\n\t\t@include adaptiveValue(\"padding-top\", 35, 25);\r\n\t\t@include adaptiveValue(\"padding-bottom\", 35, 25);\r\n\t\tfont-size: 16px;\r\n\t\tposition: relative;\r\n\r\n\t\t@media (max-width:580px){\r\n\t\t\tfont-size: 28px;\r\n\t\t  }\r\n\t\t\r\n\t\t&::before {\r\n\t\t\tcontent: '';\r\n\t\t\tposition: absolute;\r\n\t\t\tdisplay: block;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 45px;\r\n\t\t\theight: 1px;\r\n\t\t\twidth: 100%;\r\n\t\t\tbackground-color: #fff;\r\n\t\t\ttransform: translateX(-100%);\r\n\t\t\topacity: 0;\r\n\t\t\tvisibility: hidden;\r\n\t\t\ttransition: visibility 0.5s ease, opacity 0.3s ease, transform 0.3s ease;\r\n\t\t}\r\n\r\n\t\t&:hover {\r\n\t\t\t&::before {\r\n\t\t\t\ttransform: translateX(0);\r\n\t\t\t\topacity: 1;\r\n\t\t\t\tvisibility: visible;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t&__link.current {\r\n\t\t&::before {\r\n\t\t\ttransform: translateX(0);\r\n\t\t\topacity: 1;\r\n\t\t\tvisibility: visible;\r\n\t\t}\r\n\t}\r\n}\r\n.socials-list {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\t@include adaptiveValue(\"gap\", 15, 10);\r\n\r\n\t@media (max-width:580px){\r\n\t\tgap: 30px;\r\n\t\tflex: 1;\r\n  \t}\r\n\r\n\t&__icon {\r\n\t\t@media (max-width:580px){\r\n\t\t\twidth: 25px;\r\n\t\t\theight: 25px;\r\n  \t}\r\n\t}\r\n}\r\n\r\n//====================================================================================================\r\n\r\n//Burger\r\n@media (max-width: 580px) {\r\n\t.menu__body {\r\n\t\tposition: fixed;\r\n\t\ttop: 52px;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttransform: translateX(-100%);\r\n\t\tbackground-color: var(--dark-cl);\r\n\t\toverflow: auto;\r\n\t\ttransition: transform 0.3s ease;\r\n\t}\r\n}\r\n\r\n.icon-menu {\r\n\t@media (min-width:580px){\r\n\t\tdisplay: none;  \r\n\t}\r\n\t@media (max-width: 580px) {\r\n\t\tdisplay: block;\r\n\t\tposition: relative;\r\n\t\twidth: toRem(25);\r\n\t\theight: toRem(14);\r\n\t\tz-index: 5;\r\n\t\t@media (any-hover: none) {\r\n\t\t\tcursor: default;\r\n\t\t}\r\n\t\tspan,\r\n\t\t&::before,\r\n\t\t&::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\ttransition: all 0.3s ease 0s;\r\n\t\t\tright: 0;\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: toRem(2);\r\n\t\t\tbackground-color: #fff;\r\n\t\t}\r\n\t\t&::before {\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t\t&::after {\r\n\t\t\tbottom: 0;\r\n\t\t\twidth: 50%;\r\n\t\t}\r\n\t\tspan {\r\n\t\t\ttop: calc(50% - toRem(1));\r\n\t\t}\r\n\t\t.menu-open & {\r\n\t\t\t+.menu__body {\r\n\t\t\t\ttransform: translateX(0);\r\n\t\t\t}\r\n\t\t\tspan {\r\n\t\t\t\twidth: 0;\r\n\t\t\t}\r\n\t\t\t&::before,\r\n\t\t\t&::after {\r\n\t\t\t}\r\n\t\t\t&::before {\r\n\t\t\t\ttop: calc(50% - toRem(1));\r\n\t\t\t\ttransform: rotate(-45deg);\r\n\t\t\t}\r\n\t\t\t&::after {\r\n\t\t\t\tbottom: calc(50% - toRem(1));\r\n\t\t\t\ttransform: rotate(45deg);\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t}\r\n\t\t\t\r\n\t\t}\t\r\n\t}\r\n\t\r\n\t\r\n\r\n","//Підключення шрифту\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc:\r\n\t\t\turl(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"),\r\n\t\t\turl(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from: 100) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function toRem($px, $current: 16) {\r\n\t$result: math.div($px, $current) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивна властивість (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $keepSize: 0, $widthFrom: $containerWidth, $widthTo: $minWidth) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поїнти в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плаваючого значення\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{toRem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Отримання значення властивості\r\n\t$propertyValue: #{\"clamp(\" toRem($minSize) \",\" $flyValue \",\" toRem($startSize) \")\"};\r\n\t// Якщо негативні значення\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" toRem($startSize) \",\" $flyValue \",\" toRem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Встановлюємо значення за замовчуванням\r\n\t@if $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: toRem($startSize);\r\n\t\t}\r\n\t}\r\n\t// Адаптуємо розмір у проміжку між зазначеними ширинами в'юпорту\r\n\t@media (min-width: $widthToMedia) and (max-width: $widthFromMedia) {\r\n\t\t// Якщо підтримується clamp();\r\n\t\t@supports (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: $propertyValue;\r\n\t\t}\r\n\t\t// Якщо не підтримується clamp();\r\n\t\t@supports not (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: calc(#{toRem($minSize)} + #{$addSize} * (100vw - #{toRem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t\t}\r\n\t}\r\n\t@if $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: toRem($minSize);\r\n\t\t}\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.footer {\r\n    @include adaptiveValue(\"padding-top\", 121, 60);\r\n    @include adaptiveValue(\"padding-bottom\", 130, 65);\r\n    background-color: var(--dark-cl);\r\n    overflow: hidden;\r\n    &__container {\r\n        position: relative;\r\n        &::after {\r\n            content: '';\r\n            @include adaptiveValue(\"width\", 641, 200);\r\n            @include adaptiveValue(\"height\", 641, 200);\r\n            position: absolute;\r\n            right: -25%;\r\n            top: 23%;\r\n            border-radius: 50%;\r\n            background-color: #202020;\r\n            @media (max-width: 667.98px){\r\n                display: none;\r\n            } \r\n        }\r\n    }\r\n}\r\n.block-wrapper {\r\n    color: #fff;\r\n    display: flex;\r\n\r\n    @media (max-width: $mobile) {\r\n        flex-direction: column;\r\n        gap: 80px;\r\n    }\r\n}\r\n.left-block {\r\n    @include adaptiveValue(\"width\", 400, 280);\r\n    position: relative;\r\n    &::after {\r\n        content: '';\r\n        position: absolute;\r\n        top: -40%;\r\n        right: 0;\r\n        background-color: #202020;\r\n        width: 1px;\r\n        height: 200%;\r\n        @media (max-width: $mobile) {\r\n            height: 150%;\r\n        }\r\n    }\r\n    &__text {\r\n        @include adaptiveValue(\"margin-top\", 30, 15);\r\n        @include adaptiveValue(\"margin-bottom\", 76, 35);\r\n        width: 240px;\r\n        font-size: 16px;\r\n        font-weight: 400;\r\n        line-height: 1.6; \r\n    }\r\n\r\n}\r\n.footer-logo {\r\n    @include adaptiveValue(\"font-size\", 34, 20);\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 1.3; \r\n}\r\n.contacts {\r\n    @include adaptiveValue(\"margin-bottom\", 81, 40);\r\n    &__item {\r\n    }\r\n\r\n    &__link {\r\n        font-size: 17px;\r\n        font-weight: 500;\r\n        line-height: 1.7; \r\n    }\r\n}\r\n.socials {\r\n    display: flex;\r\n    gap: 20px;\r\n}\r\n.right-block {\r\n    display: flex;\r\n    flex-direction: column;\r\n    @include adaptiveValue(\"margin-left\", 100, 0);\r\n    @media (max-width: $mobile) {\r\n        margin-left: 0;\r\n    }\r\n}\r\n.subscribe {\r\n    @include adaptiveValue(\"margin-bottom\", 40, 20);\r\n    color: #969696;\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n}\r\n.footer-form {\r\n    @include adaptiveValue(\"width\", 570, 280);\r\n    position: relative;\r\n    @include adaptiveValue(\"margin-bottom\", 131, 60);\r\n    &__input {\r\n        @include adaptiveValue(\"width\", 570, 280);\r\n        background-color: transparent;\r\n        width: 100%;\r\n        outline: none;\r\n        height: 36px;\r\n        border-bottom: 1px solid #fff;\r\n        color: #fff;\r\n\r\n        &::placeholder {\r\n            color: #fff;\r\n            position: absolute;\r\n            left: 0;\r\n            bottom: 17px;\r\n            opacity: 1;\r\n            transition: opacity 0.4s ease, bottom 0.4s ease;\r\n        }\r\n\r\n        &:focus {\r\n            &::placeholder {\r\n                opacity: 0;\r\n                bottom: 34px;\r\n            }\r\n        }\r\n    }\r\n\r\n    &__button {\r\n        position: absolute;\r\n        right: 0;\r\n        bottom: 17px;\r\n        width: 64px;  \r\n        font-size: 16px;\r\n        font-weight: 500;\r\n        display: flex;\r\n        justify-content: flex-start;\r\n        &::after {\r\n            content: '';\r\n            position: absolute;\r\n            right: 0;\r\n            bottom: 5px;\r\n            width: 6px;\r\n            height: 6px;\r\n            border-radius: 50%;\r\n            background-color: #fff;\r\n        }\r\n    }\r\n}\r\n.links-block {\r\n    display: flex;\r\n    z-index: 2;\r\n\r\n    @media (max-width: 461.98px) {\r\n        flex-direction: column;\r\n    }\r\n}\r\n.footer-nav {\r\n    &:first-child {\r\n        @include adaptiveValue(\"margin-right\", 124, 60);\r\n\r\n        @media (max-width: 461.98px) {\r\n            margin-right: 0;\r\n        }\r\n    }\r\n    &:last-child {\r\n        margin-right: 0;\r\n    }\r\n    @include adaptiveValue(\"margin-right\", 88, 40);\r\n    &__item {\r\n    }\r\n\r\n    &__link {\r\n    font-size: 17px;\r\n    font-weight: 500;\r\n    line-height: 1.7; \r\n    }\r\n}\r\n.footer-credits {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 15px;\r\n    z-index: 2;\r\n    color: #969696;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 1.3; \r\n    width: 149px;\r\n    text-wrap: nowrap;\r\n\r\n    @media (max-width: 631.98px) {\r\n        bottom: -50px;\r\n    }\r\n}\r\n\r\n//====================================================================================================\r\n","//====================================================================================================\r\n// Hero section\r\n//====================================================================================================\r\n.hero {\r\n    background-color: var(--dark-cl);\r\n    position: relative;\r\n    @include adaptiveValue(\"height\", 480, 270);\r\n    &__container {\r\n        position: relative;\r\n    }\r\n}\r\n\r\n.swiper-counter {\r\n    position: relative;\r\n    @include adaptiveValue(\"bottom\", 70, 30);\r\n    @include adaptiveValue(\"left\", 200, 15);\r\n    @include adaptiveValue(\"width\", 80, 50);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    color: #fff;\r\n    &__item {\r\n        &::after {\r\n            content: '';\r\n            height: 1px;\r\n            @include adaptiveValue(\"width\", 20, 10);\r\n            background-color: #fff;\r\n            position: absolute;\r\n            top: 7px;\r\n            @include adaptiveValue(\"left\", 30, 19);\r\n    }\r\n\r\n    &span {\r\n        @include adaptiveValue(\"font-size\", 14, 12);  \r\n    }\r\n    }\r\n}\r\n\r\n.block-title {\r\n        position: absolute;\r\n        @include adaptiveValue(\"top\", 175, 50);\r\n        @include adaptiveValue(\"left\", 200, 30);\r\n        @include adaptiveValue(\"width\", 516, 300);\r\n        padding: 40px 0 40px 0;\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 70, 36);\r\n        font-weight: 500;\r\n        line-height: 1.1;\r\n        color: #fff;\r\n        text-shadow: 4px 4px 2px rgba(0,0,0,0.6);\r\n        &::before {\r\n            content: '';\r\n            position: absolute;\r\n            top: 0;\r\n            left: 0;\r\n            height: 1px;\r\n            width: 70px;\r\n            background-color: #fff;\r\n        }\r\n    }\r\n    &::before {\r\n        content: '';\r\n        height: 1px;\r\n        width: 70px;\r\n    }\r\n}\r\n\r\n.btn-view {\r\n    position: absolute;\r\n    @include adaptiveValue(\"top\", 390, 160);\r\n    @include adaptiveValue(\"right\", 178, 20);\r\n    @include adaptiveValue(\"width\", 90, 55);\r\n    @include adaptiveValue(\"height\", 90, 55);\r\n    background-color: #fff;\r\n    color: var(--dark-cl);\r\n    border-radius: 50%;\r\n    @include adaptiveValue(\"font-size\", 15, 12);\r\n    font-weight: 500;\r\n    transition: transform 0.4s ease, box-shadow 0.4s ease;\r\n\r\n    &:hover {\r\n        transform: scale(1.1);\r\n        box-shadow: 2px 2px 15px 8px #fff;\r\n    }\r\n}\r\n\r\n.swiper-slide {\r\n    &__img {\r\n         @include adaptiveValue(\"height\", 580, 220);\r\n    }\r\n}\r\n\r\n.swiper-button-prev {\r\n    position: absolute;\r\n    top: 225px;\r\n    @include adaptiveValue(\"left\", -50, 400);\r\n    @media (max-width:958px){\r\n        display: none;\r\n      }\r\n}\r\n.swiper-button-next {\r\n    position: absolute;\r\n    top: 225px;\r\n    @include adaptiveValue(\"right\", -50, 400);\r\n    @media (max-width:958px){\r\n        display: none;\r\n      }\r\n}\r\n\r\n//====================================================================================================\r\n// About-us section\r\n//====================================================================================================\r\n.about-us {\r\n    @include adaptiveValue(\"padding-top\", 256, 40);\r\n\r\n    &__container--big {\r\n        width: 1306px;\r\n        margin: 0 auto;\r\n    }\r\n}\r\n.intro-block {\r\n    @include adaptiveValue(\"width\", 615, 290);\r\n    @include adaptiveValue(\"margin-bottom\", 93, 40);\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    &__label {\r\n        @include adaptiveValue(\"margin-bottom\", 25, 15);\r\n        font-weight: 500;\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 34, 24);\r\n        line-height: 1.3;\r\n        font-weight: 500;\r\n    }\r\n}\r\n.info-block {\r\n    display: flex;\r\n    justify-content: center;\r\n    @include adaptiveValue(\"margin-bottom\", 160, 60);\r\n    @include adaptiveValue(\"gap\", 110, 40);\r\n    @media (max-width:580px){\r\n        flex-direction: column;\r\n        @include adaptiveValue(\"padding-left\", 40, 20);\r\n      }\r\n\r\n    &__item--top-line {\r\n        @include adaptiveValue(\"width\", 391, 200);\r\n        @include adaptiveValue(\"padding-top\", 34, 20);\r\n        position: relative\r\n    }\r\n\r\n    &__text--big {\r\n        @include adaptiveValue(\"font-size\", 20, 18);\r\n        line-height: 1.5;\r\n\r\n        &::before {\r\n            content: '';\r\n            position: absolute;\r\n            top: 0;\r\n            left: 0;\r\n            height: 1px;\r\n            @include adaptiveValue(\"width\", 400, 210);\r\n            background-color: var(--dark-cl)\r\n        }\r\n    }\r\n\r\n    &__item--action {\r\n        @include adaptiveValue(\"width\", 463, 250);\r\n    }\r\n\r\n    &__text--small {\r\n        @include adaptiveValue(\"font-size\", 17, 15);\r\n        @include adaptiveValue(\"margin-bottom\", 50, 25);\r\n        line-height: 1.6;\r\n    }\r\n}\r\n\r\n\r\n.btn span {\r\n    position: relative;\r\n    z-index: 50;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    @include adaptiveValue(\"padding-left\", 39, 18);\r\n    @media (max-width: 959.98px) {\r\n        padding-left: 0;\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n    @media (max-width: 469.98px) {\r\n        font-size: 13px;\r\n    }\r\n}\r\n\r\n.btn {\r\n    @include adaptiveValue(\"padding-top\", 19, 10);\r\n    @include adaptiveValue(\"padding-bottom\", 19, 10);\r\n    @include adaptiveValue(\"width\", 170, 80);\r\n    background-color: var(--dark-cl);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    overflow: hidden;\r\n    z-index: 2;\r\n    outline: 1px solid var(--dark-cl);\r\n    position: relative;\r\n    \r\n\r\n    &:hover {\r\n        span {\r\n            color: var(--dark-cl);\r\n        }\r\n        &::before {\r\n            transform: translateX(0);\r\n        }\r\n        &::after {\r\n            background-color: var(--dark-cl);\r\n        }\r\n    }\r\n\r\n    &::after {\r\n        content: '';\r\n        position: absolute;\r\n        @include adaptiveValue(\"top\", 25, 12);\r\n        @include adaptiveValue(\"right\", 38, 19);\r\n        width: 6px;\r\n        height: 6px;\r\n        border-radius: 50%;\r\n        background-color: #fff;\r\n        @media (max-width: 959.98px) {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    &::before {\r\n        content: '';\r\n        position: absolute;\r\n        height: 100%;\r\n        width: 100%;\r\n        background-color: #fff;\r\n        transform: translateX(-125%);\r\n        transition: transform 0.4s ease;\r\n    }\r\n\r\n    &--reverse {\r\n        background-color: #fff;\r\n        outline: 1px solid #fff;\r\n\r\n        &:hover {\r\n            &::after {\r\n                background-color: #fff;\r\n            }\r\n\r\n            span {\r\n                color: #fff;\r\n            }\r\n        }\r\n        span {\r\n            color: var(--dark-cl);\r\n            font-weight: 500;\r\n        }\r\n\r\n        &::after {\r\n            background-color: var(--dark-cl);\r\n        }\r\n\r\n        &::before {\r\n            background-color: var(--dark-cl);\r\n        }\r\n    }\r\n}\r\n//====================================================================================================\r\n// Directions section\r\n//====================================================================================================\r\n.directions {\r\n    max-width: 1336px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    @include adaptiveValue(\"padding-bottom\", 140, 70);\r\n}\r\n\r\n.works-list {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 30px;\r\n    &__item {\r\n        @include adaptiveValue(\"width\", 304, 200);\r\n        background: linear-gradient(180deg, rgba(0, 0, 0, 0.13) 0%, rgba(0, 0, 0, 0.65) 100%);\r\n        position: relative;\r\n        @include adaptiveValue(\"height\", 400, 280);\r\n        overflow: hidden;\r\n        &:hover {\r\n            backdrop-filter: blur(10px);\r\n           .works-list__info {\r\n                transform: translateY(-16px);\r\n           }\r\n           .works-list__card {\r\n            filter: blur(7px);\r\n           }\r\n        }\r\n    }\r\n\r\n    &__card {\r\n        width: 100%;\r\n        height: 100%;\r\n        filter: blur(0);\r\n        transition: filter 0.5s ease;\r\n    }\r\n\r\n\t&__info {\r\n        position: absolute;\r\n        left: 0;\r\n        bottom: 0;\r\n        @include adaptiveValue(\"padding-right\", 93, 25);\r\n        @include adaptiveValue(\"padding-left\", 50, 25);\r\n        transform: translateY(16px);\r\n        transition: transform 0.5s ease;\r\n\t}\r\n\r\n\t&__text {\r\n        font-size: 20px;\r\n        color: #fff;\r\n        margin: 24px 0 24px 0;\r\n        @media (max-width: 499.98px) {\r\n            font-size: 18px; \r\n        }\r\n\t}\r\n\r\n\t&__more {\r\n        font-size: 16px;\r\n        color: #fff;\r\n        @media (max-width: 499.98px) {\r\n            font-size: 14px; \r\n        }\r\n\t}\r\n}\r\n//====================================================================================================\r\n// Directions section\r\n//====================================================================================================\r\n.featured {\r\n    @include adaptiveValue(\"padding-bottom\", 157, 75);\r\n    &__list {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        @include adaptiveValue(\"gap\", 100, 30);\r\n    }\r\n\r\n    &__item {\r\n        position: relative;\r\n        overflow: hidden;\r\n\r\n        &:hover,\r\n        &:focus {\r\n            .featured__btn {\r\n                opacity: 1;\r\n                visibility: visible;\r\n            }\r\n        }\r\n    }\r\n    &__image {\r\n        @include adaptiveValue(\"width\", 370, 185);\r\n        @include adaptiveValue(\"height\", 428, 214);\r\n    }\r\n\r\n    &__label {   \r\n        font-size: 24px;\r\n        font-weight: 500;\r\n        line-height: 1.4; \r\n        @include adaptiveValue(\"margin-top\", 34, 15);\r\n        @include adaptiveValue(\"margin-bottom\", 8, 4);\r\n        @media (max-width: 599.98px) {\r\n            font-size: 20px;\r\n        }\r\n    }\r\n\r\n    &__type {\r\n        font-size: 15px;\r\n        font-weight: 500;\r\n    }\r\n\r\n    &__image--big {\r\n        @include adaptiveValue(\"width\", 600, 280);\r\n        @include adaptiveValue(\"height\", 428, 194);\r\n    }\r\n\r\n    &__item--top {\r\n        padding-left: 100px;\r\n        padding-top: 160px;\r\n\r\n        @media (max-width: 1199.98px) {\r\n            padding-left: 0;\r\n            padding-top: 0;\r\n        }\r\n    }\r\n\r\n    &__item--bottom {\r\n        margin-top: -160px;\r\n        @media (max-width: 1199.98px) {\r\n            margin-top: 0;\r\n        }\r\n    }\r\n\r\n    &__btn {\r\n        left: 130px;\r\n        top: 200px;\r\n        opacity: 0;\r\n        visibility: hidden;\r\n        transition: opacity 0.5s ease, visibility 0.5s ease, transform 0.4s ease, box-shadow 0.4s ease;\r\n\r\n        @media (max-width: $mobile) {\r\n            left: 100px;\r\n            top: 100px;\r\n        }\r\n        @media (max-width: $mobileSmall) {\r\n            left: 66px;\r\n            top: 77px;\r\n        }\r\n    }\r\n}\r\n.introduction {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: first baseline;\r\n    position: relative;\r\n    @include adaptiveValue(\"margin-bottom\", 48, 25);\r\n    @include adaptiveValue(\"padding-left\", 100, 20);\r\n    @include adaptiveValue(\"padding-right\", 100, 50);\r\n    &__title {\r\n        margin-right: 375px;\r\n        @include adaptiveValue(\"font-size\", 100, 50);\r\n        font-weight: 500;\r\n        line-height: 1.1;\r\n        @include adaptiveValue(\"width\", 425, 250);\r\n        &::after {\r\n            content: '';\r\n            position: absolute;\r\n            @include adaptiveValue(\"width\", 70, 35);\r\n            height: 1px;\r\n            background-color: var(--dark-cl);\r\n            left: 680px;\r\n            top: 80px;\r\n        }\r\n        @media (max-width: 1199.98px) {\r\n            @include adaptiveValue(\"margin-bottom\", 48, 25);\r\n\r\n            &::after {\r\n                @include adaptiveValue(\"left\", 100, 50);\r\n                top: -40px;\r\n            }\r\n        }\r\n    }\r\n}\r\n//====================================================================================================\r\n// Process section\r\n//====================================================================================================\r\n.process {\r\n        background-color: var(--dark-cl);\r\n        height: 664px;\r\n        @media (max-width: 667.98px){\r\n            height: 764px;\r\n        }\r\n\t\t&__container {\r\n            max-width: 1300px;\r\n            z-index: 2;\r\n            overflow: hidden;\r\n            position: relative;\r\n            @include adaptiveValue(\"padding-top\", 149, 65);\r\n            @include adaptiveValue(\"padding-bottom\", 161, 70);\r\n            &::after {\r\n            content: '';\r\n            @include adaptiveValue(\"width\", 641, 200);\r\n            @include adaptiveValue(\"height\", 641, 200);\r\n            position: absolute;\r\n            right: -20%;\r\n            top: -35%;\r\n            border-radius: 50%;\r\n            background-color: #202020;\r\n            @media (max-width: 667.98px){\r\n                display: none;\r\n            }\r\n        }\r\n\t\t}\r\n\r\n\t\t&__title {\r\n            color: #FFF;\r\n            font-size: 48px;\r\n            font-weight: 500;\r\n            line-height: 1.2;\r\n            @include adaptiveValue(\"margin-bottom\", 80, 30); \r\n\r\n            @media (max-width: 667.98px){\r\n                @include adaptiveValue(\"padding-left\", 100, 20);\r\n            }\r\n\r\n            @media (max-width: 419.98px) {\r\n                width: 200px;\r\n            }\r\n\t\t}\r\n\r\n\t\t&__list {\r\n            gap: 24px;\r\n            display: flex;\r\n            flex-direction: column;\r\n            @include adaptiveValue(\"margin-left\", 60, 20);\r\n            @include adaptiveValue(\"margin-right\", 140, 0);\r\n            @media (max-width: 667.98px){\r\n                margin-bottom: 40px;\r\n            }\r\n\t\t}\r\n\r\n\t\t&__item {\r\n            position: relative;\r\n\r\n            &:hover {\r\n                .process__text {\r\n                    color: #fff;\r\n                    transform: translateX(20px);\r\n                    &::before {\r\n                        opacity: 1;\r\n                        transform: translateX(28%)\r\n                    }\r\n                }\r\n                .process__number {\r\n                    opacity: 1;\r\n                }\r\n            }\r\n\t\t}\r\n\r\n\t\t&__text {\r\n            color: #6F6F6F;\r\n            font-size: 24px;\r\n            font-weight: 500;\r\n            line-height: 1.4;\r\n            transition: color 0.4s ease, transform 0.4s ease;\r\n            &::before {\r\n                content: '';\r\n                width: 40px;\r\n                height: 1px;\r\n                background-color: #fff;\r\n                position: absolute;\r\n                left: -90px;\r\n                top: 17px;\r\n                transform: translateX(-100%);\r\n                opacity: 0;\r\n                transition: transform 0.4s ease, opacity 0.4s ease;\r\n                @media (max-width: 667.98px){\r\n                    display: none;\r\n                }\r\n            }\r\n\r\n            transform: translateX(0);\r\n\t\t}\r\n\r\n\t\t&__number {\r\n            opacity: 0;\r\n            font-size: 12px;\r\n            font-weight: 500;\r\n            transition: opacity 0.4s ease;\r\n\t\t}\r\n\r\n}\r\n\r\n.process-wrapper {\r\n    display: flex;\r\n    @media (max-width: 667.98px){\r\n        flex-direction: column;\r\n        justify-content: center;\r\n    }\r\n}\r\n\r\n.block-info {\r\n    @include adaptiveValue(\"width\", 395, 250);\r\n\r\n    @media (max-width: 667.98px){\r\n        @include adaptiveValue(\"padding-left\", 100, 20);\r\n    }\r\n\t\t&__text {\r\n            color: #FFF;\r\n            font-size: 17px;\r\n            font-weight: 400;\r\n            line-height: 1.5;\r\n            @include adaptiveValue(\"margin-bottom\", 53, 25); \r\n            \r\n\t\t}\r\n\r\n\t\t\r\n}\r\n//====================================================================================================\r\n//Create section\r\n//====================================================================================================\r\n.create {\r\n    @include adaptiveValue(\"padding-top\", 160, 80);\r\n    @include adaptiveValue(\"padding-bottom\", 140, 70);\r\n    &__container {\r\n    }\r\n\r\n    &__wrapper {\r\n        display: flex;\r\n        @media (max-width: 1037.98px) {\r\n            flex-direction: column;\r\n        }\r\n    }\r\n}\r\n.img-block {\r\n    @media (max-width: 1037.98px) {\r\n        margin: 0 auto;\r\n    }\r\n    &__item {\r\n        filter: grayscale(100%);\r\n        transition: filter 0.4s ease;\r\n        &:hover {\r\n            filter: grayscale(0);\r\n        }\r\n    }\r\n\r\n    &__item--big {\r\n        margin-bottom: 30px;\r\n        @include adaptiveValue(\"width\", 470, 235);\r\n        @include adaptiveValue(\"height\", 290, 145);\r\n    }\r\n\r\n    &__bottom {\r\n        @include adaptiveValue(\"width\", 575, 300);\r\n    }\r\n\r\n    &__item--small {\r\n        @include adaptiveValue(\"padding-left\", 130, 30);\r\n        @include adaptiveValue(\"margin-right\", 30, 15);\r\n        @include adaptiveValue(\"width\", 270, 135);\r\n        @include adaptiveValue(\"height\", 140, 80);\r\n    }\r\n\r\n    &__item--middle {\r\n        @include adaptiveValue(\"width\", 270, 135);\r\n        @include adaptiveValue(\"height\", 250, 125);\r\n    }\r\n}\r\n.create-info {\r\n    @include adaptiveValue(\"padding-top\", 93, 40);\r\n    &__title {\r\n        font-size: 28px;\r\n        font-weight: 500;\r\n        line-height: 1.3;\r\n        width: 357px;\r\n        @include adaptiveValue(\"margin-bottom\", 37, 20);\r\n    }\r\n\r\n    &__text {\r\n        @include adaptiveValue(\"padding-left\", 90, 20);\r\n        @include adaptiveValue(\"margin-bottom\", 53, 27);\r\n        @include adaptiveValue(\"width\", 438, 280);\r\n        font-size: 17px;\r\n        font-weight: 400;\r\n        line-height: 1.6; \r\n\r\n        @media (max-width: 1037.98px) {\r\n            margin-left: auto;\r\n            margin-right: auto;\r\n        }\r\n\r\n        @media (max-width: 483.98px) {\r\n            @include adaptiveValue(\"padding-left\", 40, 20);\r\n            margin-left: 0;\r\n            margin-right: 0;\r\n        }\r\n    }\r\n\r\n    &__btn {\r\n        @include adaptiveValue(\"margin-left\", 90, 20);\r\n\r\n        @media (max-width: 1037.98px) {\r\n            margin-left: auto;\r\n        }\r\n        @media (max-width: 483.98px) {\r\n            @include adaptiveValue(\"margin-left\", 40, 20);\r\n        }\r\n    }\r\n}\r\n//====================================================================================================\r\n//Values section\r\n//====================================================================================================\r\n.values {\r\n    @include adaptiveValue(\"padding-bottom\", 214, 107);\r\n    &__container {\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 100, 55);\r\n        text-align: center;\r\n        font-weight: 500;\r\n        line-height: 1.2;\r\n        @include adaptiveValue(\"margin-bottom\", 86, 40);\r\n    }\r\n\r\n    &__list {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        @include adaptiveValue(\"gap\", 75, 40);\r\n\r\n        @media (max-width: 651.98px) {\r\n            justify-content: flex-start;\r\n        }\r\n    }\r\n\r\n    &__item {\r\n        @include adaptiveValue(\"width\", 340, 250);\r\n        @include adaptiveValue(\"padding-left\", 100, 50);\r\n        position: relative;\r\n\r\n        @media (max-width: 651.98px) {\r\n            width: 100%;\r\n        }\r\n    }\r\n\r\n    &__img {\r\n        @include adaptiveValue(\"width\", 70, 35);\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n\r\n    &__label {\r\n        @include adaptiveValue(\"font-size\", 24, 20);\r\n        font-weight: 500;\r\n        line-height: 1.4; \r\n        margin-bottom: 17px;\r\n    }\r\n\r\n    &__text {  \r\n        font-size: 16px;\r\n        font-weight: 400;\r\n        line-height: 1.6;\r\n        margin-bottom: 19px;\r\n    }\r\n\r\n    &__more {\r\n        font-size: 16px;\r\n        font-weight: 500;\r\n        line-height: 1.6;\r\n        display: flex;\r\n        align-items: center; \r\n        &:hover {\r\n            .values__icon {\r\n                transform: translateX(15px);\r\n            }\r\n        }\r\n    }\r\n\r\n    &__icon {\r\n        fill: var(--dark-cl);\r\n        transition: transform 0.4s ease;\r\n    }\r\n}\r\n//====================================================================================================\r\n//Swiper section\r\n//====================================================================================================\r\n.swiper-section {\r\n    @include adaptiveValue(\"padding-top\", 128, 70);\r\n    @include adaptiveValue(\"padding-bottom\", 196, 70);\r\n    background-color: var(--dark-cl);\r\n    overflow: hidden;\r\n    &__container {\r\n        position: relative;\r\n        &::after {\r\n            content: '';\r\n            @include adaptiveValue(\"width\", 641, 200);\r\n            @include adaptiveValue(\"height\", 641, 200);\r\n            position: absolute;\r\n            left: 23%;\r\n            top: 23%;\r\n            border-radius: 50%;\r\n            background-color: #202020;\r\n            @media (max-width: 667.98px){\r\n                display: none;\r\n            } \r\n        }\r\n    }\r\n\r\n    &__wrapper {\r\n        z-index: 2;\r\n    }\r\n\r\n    &__slide {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n\r\n    &__img-quote {\r\n        @include adaptiveValue(\"width\", 38, 19);\r\n        @include adaptiveValue(\"margin-bottom\", 92, 20);\r\n    }\r\n\r\n    &__text {\r\n        color: #FFF;\r\n        @include adaptiveValue(\"font-size\", 24, 15);\r\n        font-weight: 500;\r\n        line-height: 1.4;\r\n        text-align: center; \r\n        @include adaptiveValue(\"width\", 673, 300);\r\n        @include adaptiveValue(\"margin-bottom\", 33, 15);\r\n    }\r\n\r\n    &__author {\r\n        color: #969696;\r\n        font-weight: 400;\r\n        line-height: 1.3;\r\n    }\r\n}\r\n\r\n.second-counter {\r\n    z-index: 2;\r\n    left: 47%;\r\n    @include adaptiveValue(\"bottom\", -120, 0);\r\n    position: relative;\r\n\r\n    @media (max-width: $mobile) {\r\n        display: none;\r\n    }\r\n    &::before {\r\n        content: '';\r\n        position: absolute;\r\n        @include adaptiveValue(\"left\", -548, -135);\r\n        bottom: 405px;\r\n        height: 1px;\r\n        @include adaptiveValue(\"width\", 168, 80);\r\n        background-color: #fff;\r\n\r\n        @media (max-width: $mobile) {\r\n            display: none;\r\n        }\r\n    }\r\n    &::after {\r\n        content: '';\r\n        position: absolute;\r\n        @include adaptiveValue(\"right\", -576, -120);\r\n        bottom: 100px;\r\n        height: 1px;\r\n        @include adaptiveValue(\"width\", 70, 35);\r\n        background-color: #fff;\r\n        transform: rotate(90deg);\r\n\r\n        @media (max-width: $mobile) {\r\n            display: none;\r\n        }\r\n    }\r\n}\r\n\r\n//====================================================================================================\r\n//Clients section\r\n//====================================================================================================\r\n.clients {\r\n    @include adaptiveValue(\"padding-top\", 155, 75);\r\n    @include adaptiveValue(\"padding-bottom\", 155, 75);\r\n    &__container {\r\n        max-width: 975px;\r\n        display: flex;\r\n        align-items: center;\r\n\r\n        @media (max-width: 779.98px) {\r\n            flex-direction: column;\r\n        }\r\n    }\r\n\r\n    &__title-block {\r\n        @include adaptiveValue(\"margin-right\", 260, 0);\r\n\r\n        @media (max-width: 779.98px) {\r\n            margin-right: 0;\r\n            width: 100%;\r\n            text-align: center;\r\n        }\r\n    }\r\n\r\n    &__uppertitle {\r\n        font-weight: 500;\r\n        @include adaptiveValue(\"margin-bottom\", 27, 15);\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 34, 24);\r\n        font-weight: 500;\r\n        line-height: 1.3;\r\n        @include adaptiveValue(\"width\", 268, 125); \r\n\r\n        @media (max-width: 779.98px) {\r\n            width: 100%;\r\n            margin-bottom: 20px;\r\n        }\r\n    }\r\n\r\n    &__list {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: space-between;\r\n        @include adaptiveValue(\"row-gap\", 50, 30);\r\n\r\n        @media (max-width: 779.98px) {\r\n            width: 70%;\r\n            justify-content: center;\r\n        }\r\n    }\r\n\r\n}\r\n//====================================================================================================\r\n//New section\r\n//====================================================================================================\r\n.new {\r\n    @include adaptiveValue(\"padding-bottom\", 160, 70);\r\n    &__container {\r\n        position: relative;\r\n\r\n        &::after {\r\n            content: '';\r\n            position: absolute;\r\n            left: 0;\r\n            @include adaptiveValue(\"bottom\", -160, -70);\r\n            height: 1px;\r\n            width: 100%;\r\n            background-color: var(--dark-cl);\r\n        }\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"font-size\", 48, 24);\r\n        @include adaptiveValue(\"margin-bottom\", 90, 30);\r\n        font-weight: 500;\r\n        line-height: 1.2; \r\n        text-align: center;\r\n    }\r\n\r\n    &__list {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: center;\r\n        @include adaptiveValue(\"gap\", 30, 40);\r\n        @include adaptiveValue(\"margin-bottom\", 80, 30);\r\n    }\r\n\r\n    &__item {\r\n        @include adaptiveValue(\"width\", 370, 280);\r\n        position: relative\r\n    }\r\n\r\n    &__date {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        width: 35%;\r\n        padding: 10px 15px;\r\n        background-color: #fff;\r\n        @include adaptiveValue(\"font-size\", 14, 10);\r\n        font-weight: 400;\r\n        line-height: 1.3;\r\n    }\r\n\r\n    &__image {\r\n        @include adaptiveValue(\"margin-bottom\", 27, 15);\r\n        width: 100%;\r\n    }\r\n\r\n    &__text {\r\n        @include adaptiveValue(\"font-size\", 20, 16);\r\n        @include adaptiveValue(\"width\", 294, 260);\r\n        font-weight: 500;\r\n        line-height: 1.5; \r\n    }\r\n\r\n    &__btn {\r\n        margin: 0 auto;\r\n    }\r\n}\r\n//====================================================================================================\r\n//Work section\r\n//====================================================================================================\r\n.work {\r\n    @include adaptiveValue(\"padding-top\", 158, 40);\r\n    @include adaptiveValue(\"padding-bottom\", 158, 40);\r\n    &__container {\r\n        max-width: 960px;\r\n        position: relative;\r\n    }\r\n\r\n    &__block {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n\r\n        @media (max-width: 649.98px) {\r\n            flex-direction: column;\r\n            justify-content: center;\r\n        }\r\n    }\r\n\r\n    &__title {\r\n        @include adaptiveValue(\"width\", 483, 250);\r\n        @include adaptiveValue(\"font-size\", 100, 50);\r\n        font-weight: 500;\r\n        line-height: 1.2;\r\n        span {\r\n            position: relative;\r\n            z-index: 2;\r\n            &::after {\r\n                content: '';\r\n                position: absolute;\r\n                left: 0;\r\n                bottom: 0;\r\n                width: 100%;\r\n                height: 1px;\r\n                background-color: var(--dark-cl);\r\n            }\r\n        }\r\n    }\r\n\r\n    &__img {\r\n        @include adaptiveValue(\"width\", 230, 115);\r\n        position: absolute;\r\n        left: 47%;\r\n        bottom: 38px;\r\n\r\n        @media (max-width: 649.98px) {\r\n            display: none;\r\n        }\r\n    }\r\n\r\n    &__link {\r\n        transition: transform 0.4s ease;\r\n        &:hover {\r\n            transform: translateX(50%);\r\n        }\r\n    }\r\n\r\n    \r\n}\r\n\r\n\r\n\r\n",":root {\r\n    --dark-cl: #0E0E0E;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0def449ae0e974f8dfc0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43NmMwNDNjODlkZTBiYzMwZGZiOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw4R0FBOEcsa0JBQWtCO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sMFZBQTBWLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFlBQVksWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLFNBQVMsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLFVBQVUsT0FBTyxNQUFNLE9BQU8sV0FBVyxPQUFPLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsVUFBVSxRQUFRLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sT0FBTyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLE1BQU0sT0FBTyxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxRQUFRLE9BQU8sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLE9BQU8sTUFBTSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxRQUFRLE9BQU8sV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsUUFBUSxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sTUFBTSxPQUFPLFdBQVcsVUFBVSxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxRQUFRLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxRQUFRLE9BQU8sVUFBVSxRQUFRLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLE9BQU8sVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxXQUFXLFFBQVEsT0FBTyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsUUFBUSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsT0FBTyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sT0FBTyxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sUUFBUSxVQUFVLFdBQVcsUUFBUSxRQUFRLFVBQVUsV0FBVyxRQUFRLFFBQVEsVUFBVSxRQUFRLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsUUFBUSxRQUFRLEtBQUssVUFBVSxRQUFRLEtBQUssT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLE9BQU8sT0FBTyxLQUFLLFdBQVcsV0FBVyxPQUFPLE1BQU0sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLE9BQU8sTUFBTSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sTUFBTSxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sTUFBTSxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxVQUFVLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsV0FBVyxPQUFPLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLFVBQVUsV0FBVyxPQUFPLE1BQU0sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsT0FBTyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sWUFBWSxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sS0FBSyxPQUFPLGNBQWMsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsUUFBUSxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FBYyxPQUFPLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLE9BQU8sS0FBSyxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFdBQVcsV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLE9BQU8sYUFBYSxPQUFPLEtBQUssT0FBTyxLQUFLLE9BQU8sY0FB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QixFQUFDOzs7Ozs7Ozs7VUN0cUp2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbioge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDMyMHB4O1xufVxuXG5ib2R5IHtcbiAgY29sb3I6ICMwRTBFMEU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LWZhbWlseTogXCJJbnRlclwiO1xuICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxudWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5pbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4ubG9jayBib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xufVxuLndyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQHN1cHBvcnRzIChvdmVyZmxvdzogY2xpcCkge1xuICAud3JhcHBlciB7XG4gICAgb3ZlcmZsb3c6IGNsaXA7XG4gIH1cbn1cbi53cmFwcGVyID4gbWFpbiB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLndyYXBwZXIgPiAqIHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4vKlxuKGkpINCh0YLQuNC70ZYg0LHRg9C00YPRgtGMINC30LDRgdGC0L7RgdC+0LLRg9Cy0LDRgtC40YHRjCDQtNC+XG7QstGB0ZbRhSDQutC70LDRgdGW0LIsINGJ0L4g0LzRltGB0YLRj9GC0YwgKl9fY29udGFpbmVyXG7QndCw0L/RgNC40LrQu9Cw0LQgaGVhZGVyX19jb250YWluZXIsIG1haW5fX2NvbnRhaW5lciDRliDRgi7Qvy5cbtCh0L3RltC/0L/QtdGCIChIVE1MKTogY250XG4qL1xuW2NsYXNzKj1fX2NvbnRhaW5lcl0ge1xuICBtYXgtd2lkdGg6IDc1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAwLjkzNzVyZW07XG59XG5cbltjbGFzcyo9LWliZ10ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5bY2xhc3MqPS1pYmddIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuW2NsYXNzKj0taWJnLS1jb250YWluXSBpbWcge1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmhlYWRlcl9fbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLmhlYWRlcl9fbWVudSB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogNTJweDtcbiAgfVxufVxuXG4ubG9nbyB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5sb2dvIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuODIzODYzNjM2NHJlbSAgKyAgMC41NjgxODE4MTgydncgLCAxLjI1cmVtICkpIHtcbiAgICAubG9nbyB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjgyMzg2MzYzNjRyZW0gICsgIDAuNTY4MTgxODE4MnZ3ICwgMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjgyMzg2MzYzNjRyZW0gICsgIDAuNTY4MTgxODE4MnZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLmxvZ28ge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuOTM3NXJlbSArIDAuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5sb2dvIHtcbiAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgfVxufVxuXG4ubWVudV9fYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDEwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm1lbnVfX2JvZHkge1xuICAgIHBhZGRpbmctdG9wOiAyLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApKSB7XG4gICAgLm1lbnVfX2JvZHkge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApKSB7XG4gICAgLm1lbnVfX2JvZHkge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMS41NjI1cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9fYm9keSB7XG4gICAgcGFkZGluZy10b3A6IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm1lbnVfX2JvZHkge1xuICAgIHBhZGRpbmctYm90dG9tOiAyLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApKSB7XG4gICAgLm1lbnVfX2JvZHkge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApKSB7XG4gICAgLm1lbnVfX2JvZHkge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMS41NjI1cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9fYm9keSB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5tZW51X19ib2R5IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbi5tZW51X19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5tZW51X19saXN0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1yaWdodDogY2xhbXAoIDMuMTI1cmVtICwgMi44OTc3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5tZW51X19saXN0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogY2xhbXAoIDMuMTI1cmVtICwgMi44OTc3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDMuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMy4xMjVyZW0gLCAyLjg5NzcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMy43NXJlbSApKSB7XG4gICAgLm1lbnVfX2xpc3Qge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDMuMTI1cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9fbGlzdCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm1lbnVfX2xpc3Qge1xuICAgIGdhcDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChnYXA6IGNsYW1wKCAxLjg3NXJlbSAsIDEuNjQ3NzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjVyZW0gKSkge1xuICAgIC5tZW51X19saXN0IHtcbiAgICAgIGdhcDogY2xhbXAoIDEuODc1cmVtICwgMS42NDc3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChnYXA6IGNsYW1wKCAxLjg3NXJlbSAsIDEuNjQ3NzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjVyZW0gKSkge1xuICAgIC5tZW51X19saXN0IHtcbiAgICAgIGdhcDogY2FsYygxLjg3NXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm1lbnVfX2xpc3Qge1xuICAgIGdhcDogMS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAubWVudV9fbGlzdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBmbGV4OiAyO1xuICB9XG59XG4ubWVudV9fbGluayB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm1lbnVfX2xpbmsge1xuICAgIHBhZGRpbmctdG9wOiAyLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApKSB7XG4gICAgLm1lbnVfX2xpbmsge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApKSB7XG4gICAgLm1lbnVfX2xpbmsge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMS41NjI1cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9fbGluayB7XG4gICAgcGFkZGluZy10b3A6IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm1lbnVfX2xpbmsge1xuICAgIHBhZGRpbmctYm90dG9tOiAyLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApKSB7XG4gICAgLm1lbnVfX2xpbmsge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjMzNTIyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4zMzUyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTg3NXJlbSApKSB7XG4gICAgLm1lbnVfX2xpbmsge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMS41NjI1cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubWVudV9fbGluayB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5tZW51X19saW5rIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbn1cbi5tZW51X19saW5rOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAwO1xuICB0b3A6IDQ1cHg7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuNXMgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjNzIGVhc2U7XG59XG4ubWVudV9fbGluazpob3Zlcjo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLm1lbnVfX2xpbmsuY3VycmVudDo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uc29jaWFscy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zb2NpYWxzLWxpc3Qge1xuICAgIGdhcDogMC45Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChnYXA6IGNsYW1wKCAwLjYyNXJlbSAsIDAuNTExMzYzNjM2NHJlbSAgKyAgMC41NjgxODE4MTgydncgLCAwLjkzNzVyZW0gKSkge1xuICAgIC5zb2NpYWxzLWxpc3Qge1xuICAgICAgZ2FwOiBjbGFtcCggMC42MjVyZW0gLCAwLjUxMTM2MzYzNjRyZW0gICsgIDAuNTY4MTgxODE4MnZ3ICwgMC45Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGdhcDogY2xhbXAoIDAuNjI1cmVtICwgMC41MTEzNjM2MzY0cmVtICArICAwLjU2ODE4MTgxODJ2dyAsIDAuOTM3NXJlbSApKSB7XG4gICAgLnNvY2lhbHMtbGlzdCB7XG4gICAgICBnYXA6IGNhbGMoMC42MjVyZW0gKyAwLjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc29jaWFscy1saXN0IHtcbiAgICBnYXA6IDAuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLnNvY2lhbHMtbGlzdCB7XG4gICAgZ2FwOiAzMHB4O1xuICAgIGZsZXg6IDE7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAuc29jaWFscy1saXN0X19pY29uIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC5tZW51X19ib2R5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MnB4O1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU4MHB4KSB7XG4gIC5pY29uLW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAuaWNvbi1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEuNTYyNXJlbTtcbiAgICBoZWlnaHQ6IDAuODc1cmVtO1xuICAgIHotaW5kZXg6IDU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkgYW5kIChhbnktaG92ZXI6IG5vbmUpIHtcbiAgLmljb24tbWVudSB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLmljb24tbWVudSBzcGFuLCAuaWNvbi1tZW51OjpiZWZvcmUsIC5pY29uLW1lbnU6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gICAgcmlnaHQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMC4xMjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICAuaWNvbi1tZW51OjpiZWZvcmUge1xuICAgIHRvcDogMDtcbiAgfVxuICAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmljb24tbWVudSBzcGFuIHtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMC4wNjI1cmVtKTtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnUgKyAubWVudV9fYm9keSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIC5tZW51LW9wZW4gLmljb24tbWVudSBzcGFuIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnU6OmJlZm9yZSB7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDAuMDYyNXJlbSk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnU6OmFmdGVyIHtcbiAgICBib3R0b206IGNhbGMoNTAlIC0gMC4wNjI1cmVtKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZvb3RlciB7XG4gICAgcGFkZGluZy10b3A6IDcuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAzLjc1cmVtICwgMi4zNjM2MzYzNjM2cmVtICArICA2LjkzMTgxODE4MTh2dyAsIDcuNTYyNXJlbSApKSB7XG4gICAgLmZvb3RlciB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDMuNzVyZW0gLCAyLjM2MzYzNjM2MzZyZW0gICsgIDYuOTMxODE4MTgxOHZ3ICwgNy41NjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMy43NXJlbSAsIDIuMzYzNjM2MzYzNnJlbSAgKyAgNi45MzE4MTgxODE4dncgLCA3LjU2MjVyZW0gKSkge1xuICAgIC5mb290ZXIge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMy43NXJlbSArIDMuODEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb290ZXIge1xuICAgIHBhZGRpbmctdG9wOiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZm9vdGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogOC4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC4wNjI1cmVtICwgMi41ODUyMjcyNzI3cmVtICArICA3LjM4NjM2MzYzNjR2dyAsIDguMTI1cmVtICkpIHtcbiAgICAuZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC4wNjI1cmVtICwgMi41ODUyMjcyNzI3cmVtICArICA3LjM4NjM2MzYzNjR2dyAsIDguMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC4wNjI1cmVtICwgMi41ODUyMjcyNzI3cmVtICArICA3LjM4NjM2MzYzNjR2dyAsIDguMTI1cmVtICkpIHtcbiAgICAuZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDQuMDYyNXJlbSArIDQuMDYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiA0LjA2MjVyZW07XG4gIH1cbn1cbi5mb290ZXJfX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb290ZXJfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMjUlO1xuICB0b3A6IDIzJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZvb3Rlcl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgd2lkdGg6IDQwLjA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApKSB7XG4gICAgLmZvb3Rlcl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgICB3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICkpIHtcbiAgICAuZm9vdGVyX19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEyLjVyZW0gKyAyNy41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvb3Rlcl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgd2lkdGg6IDEyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mb290ZXJfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIGhlaWdodDogNDAuMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApKSB7XG4gICAgLmZvb3Rlcl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKSkge1xuICAgIC5mb290ZXJfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgaGVpZ2h0OiBjYWxjKDEyLjVyZW0gKyAyNy41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvb3Rlcl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgaGVpZ2h0OiAxMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpIHtcbiAgLmZvb3Rlcl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uYmxvY2std3JhcHBlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmJsb2NrLXdyYXBwZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA4MHB4O1xuICB9XG59XG5cbi5sZWZ0LWJsb2NrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmxlZnQtYmxvY2sge1xuICAgIHdpZHRoOiAyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTQuNzcyNzI3MjcyN3JlbSAgKyAgMTMuNjM2MzYzNjM2NHZ3ICwgMjVyZW0gKSkge1xuICAgIC5sZWZ0LWJsb2NrIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDE0Ljc3MjcyNzI3MjdyZW0gICsgIDEzLjYzNjM2MzYzNjR2dyAsIDI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDE0Ljc3MjcyNzI3MjdyZW0gICsgIDEzLjYzNjM2MzYzNjR2dyAsIDI1cmVtICkpIHtcbiAgICAubGVmdC1ibG9jayB7XG4gICAgICB3aWR0aDogY2FsYygxNy41cmVtICsgNy41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmxlZnQtYmxvY2sge1xuICAgIHdpZHRoOiAxNy41cmVtO1xuICB9XG59XG4ubGVmdC1ibG9jazo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTQwJTtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIwMjA7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMjAwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5sZWZ0LWJsb2NrOjphZnRlciB7XG4gICAgaGVpZ2h0OiAxNTAlO1xuICB9XG59XG4ubGVmdC1ibG9ja19fdGV4dCB7XG4gIHdpZHRoOiAyNDBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmxlZnQtYmxvY2tfX3RleHQge1xuICAgIG1hcmdpbi10b3A6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tdG9wOiBjbGFtcCggMC45Mzc1cmVtICwgMC41OTY1OTA5MDkxcmVtICArICAxLjcwNDU0NTQ1NDV2dyAsIDEuODc1cmVtICkpIHtcbiAgICAubGVmdC1ibG9ja19fdGV4dCB7XG4gICAgICBtYXJnaW4tdG9wOiBjbGFtcCggMC45Mzc1cmVtICwgMC41OTY1OTA5MDkxcmVtICArICAxLjcwNDU0NTQ1NDV2dyAsIDEuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi10b3A6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjU5NjU5MDkwOTFyZW0gICsgIDEuNzA0NTQ1NDU0NXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5sZWZ0LWJsb2NrX190ZXh0IHtcbiAgICAgIG1hcmdpbi10b3A6IGNhbGMoMC45Mzc1cmVtICsgMC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmxlZnQtYmxvY2tfX3RleHQge1xuICAgIG1hcmdpbi10b3A6IDAuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmxlZnQtYmxvY2tfX3RleHQge1xuICAgIG1hcmdpbi1ib3R0b206IDQuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAyLjE4NzVyZW0gLCAxLjI1NTY4MTgxODJyZW0gICsgIDQuNjU5MDkwOTA5MXZ3ICwgNC43NXJlbSApKSB7XG4gICAgLmxlZnQtYmxvY2tfX3RleHQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMjU1NjgxODE4MnJlbSAgKyAgNC42NTkwOTA5MDkxdncgLCA0Ljc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAyLjE4NzVyZW0gLCAxLjI1NTY4MTgxODJyZW0gICsgIDQuNjU5MDkwOTA5MXZ3ICwgNC43NXJlbSApKSB7XG4gICAgLmxlZnQtYmxvY2tfX3RleHQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygyLjE4NzVyZW0gKyAyLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubGVmdC1ibG9ja19fdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi4xODc1cmVtO1xuICB9XG59XG5cbi5mb290ZXItbG9nbyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mb290ZXItbG9nbyB7XG4gICAgZm9udC1zaXplOiAyLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMS4yNXJlbSAsIDAuOTMxODE4MTgxOHJlbSAgKyAgMS41OTA5MDkwOTA5dncgLCAyLjEyNXJlbSApKSB7XG4gICAgLmZvb3Rlci1sb2dvIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDEuMjVyZW0gLCAwLjkzMTgxODE4MThyZW0gICsgIDEuNTkwOTA5MDkwOXZ3ICwgMi4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMS4yNXJlbSAsIDAuOTMxODE4MTgxOHJlbSAgKyAgMS41OTA5MDkwOTA5dncgLCAyLjEyNXJlbSApKSB7XG4gICAgLmZvb3Rlci1sb2dvIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjI1cmVtICsgMC44NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9vdGVyLWxvZ28ge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY29udGFjdHMge1xuICAgIG1hcmdpbi1ib3R0b206IDUuMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIDEuNTY4MTgxODE4MnJlbSAgKyAgNC42NTkwOTA5MDkxdncgLCA1LjA2MjVyZW0gKSkge1xuICAgIC5jb250YWN0cyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMi41cmVtICwgMS41NjgxODE4MTgycmVtICArICA0LjY1OTA5MDkwOTF2dyAsIDUuMDYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMi41cmVtICwgMS41NjgxODE4MTgycmVtICArICA0LjY1OTA5MDkwOTF2dyAsIDUuMDYyNXJlbSApKSB7XG4gICAgLmNvbnRhY3RzIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMi41cmVtICsgMi41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNvbnRhY3RzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gIH1cbn1cbi5jb250YWN0c19fbGluayB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbn1cblxuLnNvY2lhbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG59XG5cbi5yaWdodC1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAucmlnaHQtYmxvY2sge1xuICAgIG1hcmdpbi1sZWZ0OiA2LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tbGVmdDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIC0yLjI3MjcyNzE4NzVyZW0gICsgIDExLjM2MzYzNjI1dncgLCA2LjI1cmVtICkpIHtcbiAgICAucmlnaHQtYmxvY2sge1xuICAgICAgbWFyZ2luLWxlZnQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtMi4yNzI3MjcxODc1cmVtICArICAxMS4zNjM2MzYyNXZ3ICwgNi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tbGVmdDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIC0yLjI3MjcyNzE4NzVyZW0gICsgIDExLjM2MzYzNjI1dncgLCA2LjI1cmVtICkpIHtcbiAgICAucmlnaHQtYmxvY2sge1xuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMC4wMDAwMDAwNjI1cmVtICsgNi4yNDk5OTk5Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnJpZ2h0LWJsb2NrIHtcbiAgICBtYXJnaW4tbGVmdDogMC4wMDAwMDAwNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAucmlnaHQtYmxvY2sge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5cbi5zdWJzY3JpYmUge1xuICBjb2xvcjogIzk2OTY5NjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN1YnNjcmliZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIDAuNzk1NDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAyLjVyZW0gKSkge1xuICAgIC5zdWJzY3JpYmUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAwLjc5NTQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMi41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgMC43OTU0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDIuNXJlbSApKSB7XG4gICAgLnN1YnNjcmliZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuMjVyZW0gKyAxLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN1YnNjcmliZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgfVxufVxuXG4uZm9vdGVyLWZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZm9vdGVyLWZvcm0ge1xuICAgIHdpZHRoOiAzNS42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDEwLjkwOTA5MDkwOTFyZW0gICsgIDMyLjk1NDU0NTQ1NDV2dyAsIDM1LjYyNXJlbSApKSB7XG4gICAgLmZvb3Rlci1mb3JtIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDEwLjkwOTA5MDkwOTFyZW0gICsgIDMyLjk1NDU0NTQ1NDV2dyAsIDM1LjYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxMC45MDkwOTA5MDkxcmVtICArICAzMi45NTQ1NDU0NTQ1dncgLCAzNS42MjVyZW0gKSkge1xuICAgIC5mb290ZXItZm9ybSB7XG4gICAgICB3aWR0aDogY2FsYygxNy41cmVtICsgMTguMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvb3Rlci1mb3JtIHtcbiAgICB3aWR0aDogMTcuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZvb3Rlci1mb3JtIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4LjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAzLjc1cmVtICwgMi4xMzYzNjM2MzY0cmVtICArICA4LjA2ODE4MTgxODJ2dyAsIDguMTg3NXJlbSApKSB7XG4gICAgLmZvb3Rlci1mb3JtIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAzLjc1cmVtICwgMi4xMzYzNjM2MzY0cmVtICArICA4LjA2ODE4MTgxODJ2dyAsIDguMTg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMy43NXJlbSAsIDIuMTM2MzYzNjM2NHJlbSAgKyAgOC4wNjgxODE4MTgydncgLCA4LjE4NzVyZW0gKSkge1xuICAgIC5mb290ZXItZm9ybSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDMuNzVyZW0gKyA0LjQzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9vdGVyLWZvcm0ge1xuICAgIG1hcmdpbi1ib3R0b206IDMuNzVyZW07XG4gIH1cbn1cbi5mb290ZXItZm9ybV9faW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gIGNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZvb3Rlci1mb3JtX19pbnB1dCB7XG4gICAgd2lkdGg6IDM1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTAuOTA5MDkwOTA5MXJlbSAgKyAgMzIuOTU0NTQ1NDU0NXZ3ICwgMzUuNjI1cmVtICkpIHtcbiAgICAuZm9vdGVyLWZvcm1fX2lucHV0IHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDEwLjkwOTA5MDkwOTFyZW0gICsgIDMyLjk1NDU0NTQ1NDV2dyAsIDM1LjYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxMC45MDkwOTA5MDkxcmVtICArICAzMi45NTQ1NDU0NTQ1dncgLCAzNS42MjVyZW0gKSkge1xuICAgIC5mb290ZXItZm9ybV9faW5wdXQge1xuICAgICAgd2lkdGg6IGNhbGMoMTcuNXJlbSArIDE4LjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb290ZXItZm9ybV9faW5wdXQge1xuICAgIHdpZHRoOiAxNy41cmVtO1xuICB9XG59XG4uZm9vdGVyLWZvcm1fX2lucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMTdweDtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UsIGJvdHRvbSAwLjRzIGVhc2U7XG59XG4uZm9vdGVyLWZvcm1fX2lucHV0OmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG4gIGJvdHRvbTogMzRweDtcbn1cbi5mb290ZXItZm9ybV9fYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAxN3B4O1xuICB3aWR0aDogNjRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uZm9vdGVyLWZvcm1fX2J1dHRvbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDVweDtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmxpbmtzLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogMjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NjEuOThweCkge1xuICAubGlua3MtYmxvY2sge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZvb3Rlci1uYXY6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogNy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMy43NXJlbSAsIDIuMjk1NDU0NTQ1NXJlbSAgKyAgNy4yNzI3MjcyNzI3dncgLCA3Ljc1cmVtICkpIHtcbiAgICAuZm9vdGVyLW5hdjpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNsYW1wKCAzLjc1cmVtICwgMi4yOTU0NTQ1NDU1cmVtICArICA3LjI3MjcyNzI3Mjd2dyAsIDcuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMy43NXJlbSAsIDIuMjk1NDU0NTQ1NXJlbSAgKyAgNy4yNzI3MjcyNzI3dncgLCA3Ljc1cmVtICkpIHtcbiAgICAuZm9vdGVyLW5hdjpmaXJzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMy43NXJlbSArIDQgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9vdGVyLW5hdjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDYxLjk4cHgpIHtcbiAgLmZvb3Rlci1uYXY6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufVxuLmZvb3Rlci1uYXY6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mb290ZXItbmF2IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDUuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMi41cmVtICwgMS40MDkwOTA5MDkxcmVtICArICA1LjQ1NDU0NTQ1NDV2dyAsIDUuNXJlbSApKSB7XG4gICAgLmZvb3Rlci1uYXYge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjbGFtcCggMi41cmVtICwgMS40MDkwOTA5MDkxcmVtICArICA1LjQ1NDU0NTQ1NDV2dyAsIDUuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAyLjVyZW0gLCAxLjQwOTA5MDkwOTFyZW0gICsgIDUuNDU0NTQ1NDU0NXZ3ICwgNS41cmVtICkpIHtcbiAgICAuZm9vdGVyLW5hdiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMi41cmVtICsgMyAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb290ZXItbmF2IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIuNXJlbTtcbiAgfVxufVxuLmZvb3Rlci1uYXZfX2xpbmsge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG59XG5cbi5mb290ZXItY3JlZGl0cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMTVweDtcbiAgei1pbmRleDogMjtcbiAgY29sb3I6ICM5Njk2OTY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgd2lkdGg6IDE0OXB4O1xuICB0ZXh0LXdyYXA6IG5vd3JhcDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MzEuOThweCkge1xuICAuZm9vdGVyLWNyZWRpdHMge1xuICAgIGJvdHRvbTogLTUwcHg7XG4gIH1cbn1cblxuLmhlcm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmhlcm8ge1xuICAgIGhlaWdodDogMzByZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGhlaWdodDogY2xhbXAoIDE2Ljg3NXJlbSAsIDEyLjEwMjI3MjcyNzNyZW0gICsgIDIzLjg2MzYzNjM2MzZ2dyAsIDMwcmVtICkpIHtcbiAgICAuaGVybyB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCAxNi44NzVyZW0gLCAxMi4xMDIyNzI3MjczcmVtICArICAyMy44NjM2MzYzNjM2dncgLCAzMHJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCAxNi44NzVyZW0gLCAxMi4xMDIyNzI3MjczcmVtICArICAyMy44NjM2MzYzNjM2dncgLCAzMHJlbSApKSB7XG4gICAgLmhlcm8ge1xuICAgICAgaGVpZ2h0OiBjYWxjKDE2Ljg3NXJlbSArIDEzLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5oZXJvIHtcbiAgICBoZWlnaHQ6IDE2Ljg3NXJlbTtcbiAgfVxufVxuLmhlcm9fX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnN3aXBlci1jb3VudGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyIHtcbiAgICBib3R0b206IDQuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChib3R0b206IGNsYW1wKCAxLjg3NXJlbSAsIDAuOTY1OTA5MDkwOXJlbSAgKyAgNC41NDU0NTQ1NDU1dncgLCA0LjM3NXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyIHtcbiAgICAgIGJvdHRvbTogY2xhbXAoIDEuODc1cmVtICwgMC45NjU5MDkwOTA5cmVtICArICA0LjU0NTQ1NDU0NTV2dyAsIDQuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGJvdHRvbTogY2xhbXAoIDEuODc1cmVtICwgMC45NjU5MDkwOTA5cmVtICArICA0LjU0NTQ1NDU0NTV2dyAsIDQuMzc1cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXIge1xuICAgICAgYm90dG9tOiBjYWxjKDEuODc1cmVtICsgMi41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyIHtcbiAgICBib3R0b206IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLWNvdW50ZXIge1xuICAgIGxlZnQ6IDEyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGxlZnQ6IGNsYW1wKCAwLjkzNzVyZW0gLCAtMy4yNjcwNDU0NTQ1cmVtICArICAyMS4wMjI3MjcyNzI3dncgLCAxMi41cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXIge1xuICAgICAgbGVmdDogY2xhbXAoIDAuOTM3NXJlbSAsIC0zLjI2NzA0NTQ1NDVyZW0gICsgIDIxLjAyMjcyNzI3Mjd2dyAsIDEyLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGVmdDogY2xhbXAoIDAuOTM3NXJlbSAsIC0zLjI2NzA0NTQ1NDVyZW0gICsgIDIxLjAyMjcyNzI3Mjd2dyAsIDEyLjVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlciB7XG4gICAgICBsZWZ0OiBjYWxjKDAuOTM3NXJlbSArIDExLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLWNvdW50ZXIge1xuICAgIGxlZnQ6IDAuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyIHtcbiAgICB3aWR0aDogNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAzLjEyNXJlbSAsIDIuNDQzMTgxODE4MnJlbSAgKyAgMy40MDkwOTA5MDkxdncgLCA1cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXIge1xuICAgICAgd2lkdGg6IGNsYW1wKCAzLjEyNXJlbSAsIDIuNDQzMTgxODE4MnJlbSAgKyAgMy40MDkwOTA5MDkxdncgLCA1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMy4xMjVyZW0gLCAyLjQ0MzE4MTgxODJyZW0gICsgIDMuNDA5MDkwOTA5MXZ3ICwgNXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDMuMTI1cmVtICsgMS44NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLWNvdW50ZXIge1xuICAgIHdpZHRoOiAzLjEyNXJlbTtcbiAgfVxufVxuLnN3aXBlci1jb3VudGVyX19pdGVtOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogN3B4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyX19pdGVtOjphZnRlciB7XG4gICAgd2lkdGg6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMC42MjVyZW0gLCAwLjM5NzcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyX19pdGVtOjphZnRlciB7XG4gICAgICB3aWR0aDogY2xhbXAoIDAuNjI1cmVtICwgMC4zOTc3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDEuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAwLjYyNXJlbSAsIDAuMzk3NzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAxLjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW06OmFmdGVyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDAuNjI1cmVtICsgMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLWNvdW50ZXJfX2l0ZW06OmFmdGVyIHtcbiAgICB3aWR0aDogMC42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItY291bnRlcl9faXRlbTo6YWZ0ZXIge1xuICAgIGxlZnQ6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChsZWZ0OiBjbGFtcCggMS4xODc1cmVtICwgMC45Mzc1cmVtICArICAxLjI1dncgLCAxLjg3NXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyX19pdGVtOjphZnRlciB7XG4gICAgICBsZWZ0OiBjbGFtcCggMS4xODc1cmVtICwgMC45Mzc1cmVtICArICAxLjI1dncgLCAxLjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChsZWZ0OiBjbGFtcCggMS4xODc1cmVtICwgMC45Mzc1cmVtICArICAxLjI1dncgLCAxLjg3NXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyX19pdGVtOjphZnRlciB7XG4gICAgICBsZWZ0OiBjYWxjKDEuMTg3NXJlbSArIDAuNjg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItY291bnRlcl9faXRlbTo6YWZ0ZXIge1xuICAgIGxlZnQ6IDEuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1jb3VudGVyX19pdGVtc3BhbiB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNzA0NTQ1NDU0NXJlbSAgKyAgMC4yMjcyNzI3MjczdncgLCAwLjg3NXJlbSApKSB7XG4gICAgLnN3aXBlci1jb3VudGVyX19pdGVtc3BhbiB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjc1cmVtICwgMC43MDQ1NDU0NTQ1cmVtICArICAwLjIyNzI3MjcyNzN2dyAsIDAuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjcwNDU0NTQ1NDVyZW0gICsgIDAuMjI3MjcyNzI3M3Z3ICwgMC44NzVyZW0gKSkge1xuICAgIC5zd2lwZXItY291bnRlcl9faXRlbXNwYW4ge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuNzVyZW0gKyAwLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItY291bnRlcl9faXRlbXNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgfVxufVxuXG4uYmxvY2stdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDQwcHggMCA0MHB4IDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYmxvY2stdGl0bGUge1xuICAgIHRvcDogMTAuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAodG9wOiBjbGFtcCggMy4xMjVyZW0gLCAwLjI4NDA5MDkwOTFyZW0gICsgIDE0LjIwNDU0NTQ1NDV2dyAsIDEwLjkzNzVyZW0gKSkge1xuICAgIC5ibG9jay10aXRsZSB7XG4gICAgICB0b3A6IGNsYW1wKCAzLjEyNXJlbSAsIDAuMjg0MDkwOTA5MXJlbSAgKyAgMTQuMjA0NTQ1NDU0NXZ3ICwgMTAuOTM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh0b3A6IGNsYW1wKCAzLjEyNXJlbSAsIDAuMjg0MDkwOTA5MXJlbSAgKyAgMTQuMjA0NTQ1NDU0NXZ3ICwgMTAuOTM3NXJlbSApKSB7XG4gICAgLmJsb2NrLXRpdGxlIHtcbiAgICAgIHRvcDogY2FsYygzLjEyNXJlbSArIDcuODEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5ibG9jay10aXRsZSB7XG4gICAgdG9wOiAzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJsb2NrLXRpdGxlIHtcbiAgICBsZWZ0OiAxMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChsZWZ0OiBjbGFtcCggMS44NzVyZW0gLCAtMS45ODg2MzYzNjM2cmVtICArICAxOS4zMTgxODE4MTgydncgLCAxMi41cmVtICkpIHtcbiAgICAuYmxvY2stdGl0bGUge1xuICAgICAgbGVmdDogY2xhbXAoIDEuODc1cmVtICwgLTEuOTg4NjM2MzYzNnJlbSAgKyAgMTkuMzE4MTgxODE4MnZ3ICwgMTIuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChsZWZ0OiBjbGFtcCggMS44NzVyZW0gLCAtMS45ODg2MzYzNjM2cmVtICArICAxOS4zMTgxODE4MTgydncgLCAxMi41cmVtICkpIHtcbiAgICAuYmxvY2stdGl0bGUge1xuICAgICAgbGVmdDogY2FsYygxLjg3NXJlbSArIDEwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5ibG9jay10aXRsZSB7XG4gICAgbGVmdDogMS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5ibG9jay10aXRsZSB7XG4gICAgd2lkdGg6IDMyLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE4Ljc1cmVtICwgMTMuODQwOTA5MDkwOXJlbSAgKyAgMjQuNTQ1NDU0NTQ1NXZ3ICwgMzIuMjVyZW0gKSkge1xuICAgIC5ibG9jay10aXRsZSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE4Ljc1cmVtICwgMTMuODQwOTA5MDkwOXJlbSAgKyAgMjQuNTQ1NDU0NTQ1NXZ3ICwgMzIuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxOC43NXJlbSAsIDEzLjg0MDkwOTA5MDlyZW0gICsgIDI0LjU0NTQ1NDU0NTV2dyAsIDMyLjI1cmVtICkpIHtcbiAgICAuYmxvY2stdGl0bGUge1xuICAgICAgd2lkdGg6IGNhbGMoMTguNzVyZW0gKyAxMy41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJsb2NrLXRpdGxlIHtcbiAgICB3aWR0aDogMTguNzVyZW07XG4gIH1cbn1cbi5ibG9jay10aXRsZV9fdGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDRweCA0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5ibG9jay10aXRsZV9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNC4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDIuMjVyZW0gLCAxLjQ3NzI3MjcyNzNyZW0gICsgIDMuODYzNjM2MzYzNnZ3ICwgNC4zNzVyZW0gKSkge1xuICAgIC5ibG9jay10aXRsZV9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMi4yNXJlbSAsIDEuNDc3MjcyNzI3M3JlbSAgKyAgMy44NjM2MzYzNjM2dncgLCA0LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAyLjI1cmVtICwgMS40NzcyNzI3MjczcmVtICArICAzLjg2MzYzNjM2MzZ2dyAsIDQuMzc1cmVtICkpIHtcbiAgICAuYmxvY2stdGl0bGVfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygyLjI1cmVtICsgMi4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYmxvY2stdGl0bGVfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDIuMjVyZW07XG4gIH1cbn1cbi5ibG9jay10aXRsZV9fdGl0bGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDcwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uYmxvY2stdGl0bGU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogNzBweDtcbn1cblxuLmJ0bi12aWV3IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogdmFyKC0tZGFyay1jbCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZSwgYm94LXNoYWRvdyAwLjRzIGVhc2U7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIHRvcDogMjQuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh0b3A6IGNsYW1wKCAxMHJlbSAsIDQuNzcyNzI3MjcyN3JlbSAgKyAgMjYuMTM2MzYzNjM2NHZ3ICwgMjQuMzc1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgdG9wOiBjbGFtcCggMTByZW0gLCA0Ljc3MjcyNzI3MjdyZW0gICsgIDI2LjEzNjM2MzYzNjR2dyAsIDI0LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh0b3A6IGNsYW1wKCAxMHJlbSAsIDQuNzcyNzI3MjcyN3JlbSAgKyAgMjYuMTM2MzYzNjM2NHZ3ICwgMjQuMzc1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgdG9wOiBjYWxjKDEwcmVtICsgMTQuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICB0b3A6IDEwcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIHJpZ2h0OiAxMS4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHJpZ2h0OiBjbGFtcCggMS4yNXJlbSAsIC0yLjM0MDkwOTA5MDlyZW0gICsgIDE3Ljk1NDU0NTQ1NDV2dyAsIDExLjEyNXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIHJpZ2h0OiBjbGFtcCggMS4yNXJlbSAsIC0yLjM0MDkwOTA5MDlyZW0gICsgIDE3Ljk1NDU0NTQ1NDV2dyAsIDExLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChyaWdodDogY2xhbXAoIDEuMjVyZW0gLCAtMi4zNDA5MDkwOTA5cmVtICArICAxNy45NTQ1NDU0NTQ1dncgLCAxMS4xMjVyZW0gKSkge1xuICAgIC5idG4tdmlldyB7XG4gICAgICByaWdodDogY2FsYygxLjI1cmVtICsgOS44NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIHJpZ2h0OiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYnRuLXZpZXcge1xuICAgIHdpZHRoOiA1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAzLjQzNzVyZW0gLCAyLjY0MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNS42MjVyZW0gKSkge1xuICAgIC5idG4tdmlldyB7XG4gICAgICB3aWR0aDogY2xhbXAoIDMuNDM3NXJlbSAsIDIuNjQyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA1LjYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDMuNDM3NXJlbSAsIDIuNjQyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA1LjYyNXJlbSApKSB7XG4gICAgLmJ0bi12aWV3IHtcbiAgICAgIHdpZHRoOiBjYWxjKDMuNDM3NXJlbSArIDIuMTg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG4tdmlldyB7XG4gICAgd2lkdGg6IDMuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0bi12aWV3IHtcbiAgICBoZWlnaHQ6IDUuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAzLjQzNzVyZW0gLCAyLjY0MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNS42MjVyZW0gKSkge1xuICAgIC5idG4tdmlldyB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCAzLjQzNzVyZW0gLCAyLjY0MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNS42MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggMy40Mzc1cmVtICwgMi42NDIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgaGVpZ2h0OiBjYWxjKDMuNDM3NXJlbSArIDIuMTg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG4tdmlldyB7XG4gICAgaGVpZ2h0OiAzLjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG4tdmlldyB7XG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuNzVyZW0gLCAwLjY4MTgxODE4MThyZW0gICsgIDAuMzQwOTA5MDkwOXZ3ICwgMC45Mzc1cmVtICkpIHtcbiAgICAuYnRuLXZpZXcge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjgxODE4MTgxOHJlbSAgKyAgMC4zNDA5MDkwOTA5dncgLCAwLjkzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC43NXJlbSAsIDAuNjgxODE4MTgxOHJlbSAgKyAgMC4zNDA5MDkwOTA5dncgLCAwLjkzNzVyZW0gKSkge1xuICAgIC5idG4tdmlldyB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC43NXJlbSArIDAuMTg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5idG4tdmlldyB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB9XG59XG4uYnRuLXZpZXc6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTVweCA4cHggI2ZmZjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1zbGlkZV9faW1nIHtcbiAgICBoZWlnaHQ6IDM2LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAxMy43NXJlbSAsIDUuNTY4MTgxODE4MnJlbSAgKyAgNDAuOTA5MDkwOTA5MXZ3ICwgMzYuMjVyZW0gKSkge1xuICAgIC5zd2lwZXItc2xpZGVfX2ltZyB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCAxMy43NXJlbSAsIDUuNTY4MTgxODE4MnJlbSAgKyAgNDAuOTA5MDkwOTA5MXZ3ICwgMzYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggMTMuNzVyZW0gLCA1LjU2ODE4MTgxODJyZW0gICsgIDQwLjkwOTA5MDkwOTF2dyAsIDM2LjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNsaWRlX19pbWcge1xuICAgICAgaGVpZ2h0OiBjYWxjKDEzLjc1cmVtICsgMjIuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItc2xpZGVfX2ltZyB7XG4gICAgaGVpZ2h0OiAxMy43NXJlbTtcbiAgfVxufVxuXG4uc3dpcGVyLWJ1dHRvbi1wcmV2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIyNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1idXR0b24tcHJldiB7XG4gICAgbGVmdDogLTMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChsZWZ0OiBjbGFtcCggLTMuMTI1cmVtICwgMzUuMjI3MjcyNzI3M3JlbSAgKyAgLTUxLjEzNjM2MzYzNjR2dyAsIDI1cmVtICkpIHtcbiAgICAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcbiAgICAgIGxlZnQ6IGNsYW1wKCAtMy4xMjVyZW0gLCAzNS4yMjcyNzI3MjczcmVtICArICAtNTEuMTM2MzYzNjM2NHZ3ICwgMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobGVmdDogY2xhbXAoIC0zLjEyNXJlbSAsIDM1LjIyNzI3MjcyNzNyZW0gICsgIC01MS4xMzYzNjM2MzY0dncgLCAyNXJlbSApKSB7XG4gICAgLnN3aXBlci1idXR0b24tcHJldiB7XG4gICAgICBsZWZ0OiBjYWxjKDI1cmVtICsgLTI4LjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICAgIGxlZnQ6IDI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTU4cHgpIHtcbiAgLnN3aXBlci1idXR0b24tcHJldiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIyNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgcmlnaHQ6IC0zLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocmlnaHQ6IGNsYW1wKCAtMy4xMjVyZW0gLCAzNS4yMjcyNzI3MjczcmVtICArICAtNTEuMTM2MzYzNjM2NHZ3ICwgMjVyZW0gKSkge1xuICAgIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgICAgcmlnaHQ6IGNsYW1wKCAtMy4xMjVyZW0gLCAzNS4yMjcyNzI3MjczcmVtICArICAtNTEuMTM2MzYzNjM2NHZ3ICwgMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocmlnaHQ6IGNsYW1wKCAtMy4xMjVyZW0gLCAzNS4yMjcyNzI3MjczcmVtICArICAtNTEuMTM2MzYzNjM2NHZ3ICwgMjVyZW0gKSkge1xuICAgIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgICAgcmlnaHQ6IGNhbGMoMjVyZW0gKyAtMjguMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgcmlnaHQ6IDI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTU4cHgpIHtcbiAgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYWJvdXQtdXMge1xuICAgIHBhZGRpbmctdG9wOiAxNnJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAtMi40MDkwOTA5MDkxcmVtICArICAyNC41NDU0NTQ1NDU1dncgLCAxNnJlbSApKSB7XG4gICAgLmFib3V0LXVzIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgLTIuNDA5MDkwOTA5MXJlbSAgKyAgMjQuNTQ1NDU0NTQ1NXZ3ICwgMTZyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAtMi40MDkwOTA5MDkxcmVtICArICAyNC41NDU0NTQ1NDU1dncgLCAxNnJlbSApKSB7XG4gICAgLmFib3V0LXVzIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDIuNXJlbSArIDEzLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYWJvdXQtdXMge1xuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XG4gIH1cbn1cbi5hYm91dC11c19fY29udGFpbmVyLS1iaWcge1xuICB3aWR0aDogMTMwNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmludHJvLWJsb2NrIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyby1ibG9jayB7XG4gICAgd2lkdGg6IDM4LjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTguMTI1cmVtICwgMTAuNzM4NjM2MzYzNnJlbSAgKyAgMzYuOTMxODE4MTgxOHZ3ICwgMzguNDM3NXJlbSApKSB7XG4gICAgLmludHJvLWJsb2NrIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTguMTI1cmVtICwgMTAuNzM4NjM2MzYzNnJlbSAgKyAgMzYuOTMxODE4MTgxOHZ3ICwgMzguNDM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE4LjEyNXJlbSAsIDEwLjczODYzNjM2MzZyZW0gICsgIDM2LjkzMTgxODE4MTh2dyAsIDM4LjQzNzVyZW0gKSkge1xuICAgIC5pbnRyby1ibG9jayB7XG4gICAgICB3aWR0aDogY2FsYygxOC4xMjVyZW0gKyAyMC4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvLWJsb2NrIHtcbiAgICB3aWR0aDogMTguMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm8tYmxvY2sge1xuICAgIG1hcmdpbi1ib3R0b206IDUuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIDEuMjk1NDU0NTQ1NXJlbSAgKyAgNi4wMjI3MjcyNzI3dncgLCA1LjgxMjVyZW0gKSkge1xuICAgIC5pbnRyby1ibG9jayB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMi41cmVtICwgMS4yOTU0NTQ1NDU1cmVtICArICA2LjAyMjcyNzI3Mjd2dyAsIDUuODEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMi41cmVtICwgMS4yOTU0NTQ1NDU1cmVtICArICA2LjAyMjcyNzI3Mjd2dyAsIDUuODEyNXJlbSApKSB7XG4gICAgLmludHJvLWJsb2NrIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMi41cmVtICsgMy4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvLWJsb2NrIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gIH1cbn1cbi5pbnRyby1ibG9ja19fbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvLWJsb2NrX19sYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC43MTAyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDEuNTYyNXJlbSApKSB7XG4gICAgLmludHJvLWJsb2NrX19sYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC43MTAyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDEuNTYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC43MTAyMjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDEuNTYyNXJlbSApKSB7XG4gICAgLmludHJvLWJsb2NrX19sYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDAuOTM3NXJlbSArIDAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvLWJsb2NrX19sYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xuICB9XG59XG4uaW50cm8tYmxvY2tfX3RpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyby1ibG9ja19fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDEuNXJlbSAsIDEuMjcyNzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjEyNXJlbSApKSB7XG4gICAgLmludHJvLWJsb2NrX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAxLjVyZW0gLCAxLjI3MjcyNzI3MjdyZW0gICsgIDEuMTM2MzYzNjM2NHZ3ICwgMi4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMS4yNzI3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTI1cmVtICkpIHtcbiAgICAuaW50cm8tYmxvY2tfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyby1ibG9ja19fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5cbi5pbmZvLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9jayB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTByZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAzLjc1cmVtICwgMS40NzcyNzI3MjczcmVtICArICAxMS4zNjM2MzYzNjM2dncgLCAxMHJlbSApKSB7XG4gICAgLmluZm8tYmxvY2sge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDMuNzVyZW0gLCAxLjQ3NzI3MjcyNzNyZW0gICsgIDExLjM2MzYzNjM2MzZ2dyAsIDEwcmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAzLjc1cmVtICwgMS40NzcyNzI3MjczcmVtICArICAxMS4zNjM2MzYzNjM2dncgLCAxMHJlbSApKSB7XG4gICAgLmluZm8tYmxvY2sge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygzLjc1cmVtICsgNi4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9jayB7XG4gICAgZ2FwOiA2Ljg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZ2FwOiBjbGFtcCggMi41cmVtICwgMC45MDkwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDYuODc1cmVtICkpIHtcbiAgICAuaW5mby1ibG9jayB7XG4gICAgICBnYXA6IGNsYW1wKCAyLjVyZW0gLCAwLjkwOTA5MDkwOTFyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgNi44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMi41cmVtICwgMC45MDkwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDYuODc1cmVtICkpIHtcbiAgICAuaW5mby1ibG9jayB7XG4gICAgICBnYXA6IGNhbGMoMi41cmVtICsgNC4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW5mby1ibG9jayB7XG4gICAgZ2FwOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkge1xuICAuaW5mby1ibG9jayB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSBhbmQgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9jayB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODBweCkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIDAuNzk1NDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAyLjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjc5NTQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMi41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjc5NTQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMi41cmVtICkpIHtcbiAgICAuaW5mby1ibG9jayB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMS4yNXJlbSArIDEuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gIH1cbn1cbi5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gICAgd2lkdGg6IDI0LjQzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDguMTU5MDkwOTA5MXJlbSAgKyAgMjEuNzA0NTQ1NDU0NXZ3ICwgMjQuNDM3NXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX2l0ZW0tLXRvcC1saW5lIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDguMTU5MDkwOTA5MXJlbSAgKyAgMjEuNzA0NTQ1NDU0NXZ3ICwgMjQuNDM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCA4LjE1OTA5MDkwOTFyZW0gICsgIDIxLjcwNDU0NTQ1NDV2dyAsIDI0LjQzNzVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gICAgICB3aWR0aDogY2FsYygxMi41cmVtICsgMTEuOTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gICAgd2lkdGg6IDEyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gICAgcGFkZGluZy10b3A6IDIuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDEuMjVyZW0gLCAwLjkzMTgxODE4MThyZW0gICsgIDEuNTkwOTA5MDkwOXZ3ICwgMi4xMjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX19pdGVtLS10b3AtbGluZSB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDEuMjVyZW0gLCAwLjkzMTgxODE4MThyZW0gICsgIDEuNTkwOTA5MDkwOXZ3ICwgMi4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAxLjI1cmVtICwgMC45MzE4MTgxODE4cmVtICArICAxLjU5MDkwOTA5MDl2dyAsIDIuMTI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19faXRlbS0tdG9wLWxpbmUge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMS4yNXJlbSArIDAuODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmluZm8tYmxvY2tfX2l0ZW0tLXRvcC1saW5lIHtcbiAgICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgfVxufVxuLmluZm8tYmxvY2tfX3RleHQtLWJpZyB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9ja19fdGV4dC0tYmlnIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDEuMTI1cmVtICwgMS4wNzk1NDU0NTQ1cmVtICArICAwLjIyNzI3MjcyNzN2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX190ZXh0LS1iaWcge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMS4xMjVyZW0gLCAxLjA3OTU0NTQ1NDVyZW0gICsgIDAuMjI3MjcyNzI3M3Z3ICwgMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAxLjEyNXJlbSAsIDEuMDc5NTQ1NDU0NXJlbSAgKyAgMC4yMjcyNzI3MjczdncgLCAxLjI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19fdGV4dC0tYmlnIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjEyNXJlbSArIDAuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmluZm8tYmxvY2tfX3RleHQtLWJpZyB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgfVxufVxuLmluZm8tYmxvY2tfX3RleHQtLWJpZzo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbmZvLWJsb2NrX190ZXh0LS1iaWc6OmJlZm9yZSB7XG4gICAgd2lkdGg6IDI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDEzLjEyNXJlbSAsIDguODA2ODE4MTgxOHJlbSAgKyAgMjEuNTkwOTA5MDkwOXZ3ICwgMjVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX190ZXh0LS1iaWc6OmJlZm9yZSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDEzLjEyNXJlbSAsIDguODA2ODE4MTgxOHJlbSAgKyAgMjEuNTkwOTA5MDkwOXZ3ICwgMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxMy4xMjVyZW0gLCA4LjgwNjgxODE4MThyZW0gICsgIDIxLjU5MDkwOTA5MDl2dyAsIDI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19fdGV4dC0tYmlnOjpiZWZvcmUge1xuICAgICAgd2lkdGg6IGNhbGMoMTMuMTI1cmVtICsgMTEuODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmluZm8tYmxvY2tfX3RleHQtLWJpZzo6YmVmb3JlIHtcbiAgICB3aWR0aDogMTMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9ja19faXRlbS0tYWN0aW9uIHtcbiAgICB3aWR0aDogMjguOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMC43ODQwOTA5MDkxcmVtICArICAyNC4yMDQ1NDU0NTQ1dncgLCAyOC45Mzc1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19faXRlbS0tYWN0aW9uIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTAuNzg0MDkwOTA5MXJlbSAgKyAgMjQuMjA0NTQ1NDU0NXZ3ICwgMjguOTM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDEwLjc4NDA5MDkwOTFyZW0gICsgIDI0LjIwNDU0NTQ1NDV2dyAsIDI4LjkzNzVyZW0gKSkge1xuICAgIC5pbmZvLWJsb2NrX19pdGVtLS1hY3Rpb24ge1xuICAgICAgd2lkdGg6IGNhbGMoMTUuNjI1cmVtICsgMTMuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbmZvLWJsb2NrX19pdGVtLS1hY3Rpb24ge1xuICAgIHdpZHRoOiAxNS42MjVyZW07XG4gIH1cbn1cbi5pbmZvLWJsb2NrX190ZXh0LS1zbWFsbCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW5mby1ibG9ja19fdGV4dC0tc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMS4wNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjg5MjA0NTQ1NDVyZW0gICsgIDAuMjI3MjcyNzI3M3Z3ICwgMS4wNjI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19fdGV4dC0tc21hbGwge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC44OTIwNDU0NTQ1cmVtICArICAwLjIyNzI3MjcyNzN2dyAsIDEuMDYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjg5MjA0NTQ1NDVyZW0gICsgIDAuMjI3MjcyNzI3M3Z3ICwgMS4wNjI1cmVtICkpIHtcbiAgICAuaW5mby1ibG9ja19fdGV4dC0tc21hbGwge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuOTM3NXJlbSArIDAuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDAuOTk0MzE4MTgxOHJlbSAgKyAgMi44NDA5MDkwOTA5dncgLCAzLjEyNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjk5NDMxODE4MThyZW0gICsgIDIuODQwOTA5MDkwOXZ3ICwgMy4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDAuOTk0MzE4MTgxOHJlbSAgKyAgMi44NDA5MDkwOTA5dncgLCAzLjEyNXJlbSApKSB7XG4gICAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS41NjI1cmVtICsgMS41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmluZm8tYmxvY2tfX3RleHQtLXNtYWxsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjU2MjVyZW07XG4gIH1cbn1cblxuLmJ0biBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA1MDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYnRuIHNwYW4ge1xuICAgIHBhZGRpbmctbGVmdDogMi40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjEyNXJlbSAsIDAuNjQ3NzI3MjcyN3JlbSAgKyAgMi4zODYzNjM2MzY0dncgLCAyLjQzNzVyZW0gKSkge1xuICAgIC5idG4gc3BhbiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjEyNXJlbSAsIDAuNjQ3NzI3MjcyN3JlbSAgKyAgMi4zODYzNjM2MzY0dncgLCAyLjQzNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4xMjVyZW0gLCAwLjY0NzcyNzI3MjdyZW0gICsgIDIuMzg2MzYzNjM2NHZ3ICwgMi40Mzc1cmVtICkpIHtcbiAgICAuYnRuIHNwYW4ge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuMTI1cmVtICsgMS4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0biBzcGFuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTU5Ljk4cHgpIHtcbiAgLmJ0biBzcGFuIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDY5Ljk4cHgpIHtcbiAgLmJ0biBzcGFuIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDI7XG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWNsKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0biB7XG4gICAgcGFkZGluZy10b3A6IDEuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAwLjYyNXJlbSAsIDAuNDIwNDU0NTQ1NXJlbSAgKyAgMS4wMjI3MjcyNzI3dncgLCAxLjE4NzVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAwLjYyNXJlbSAsIDAuNDIwNDU0NTQ1NXJlbSAgKyAgMS4wMjI3MjcyNzI3dncgLCAxLjE4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAwLjYyNXJlbSAsIDAuNDIwNDU0NTQ1NXJlbSAgKyAgMS4wMjI3MjcyNzI3dncgLCAxLjE4NzVyZW0gKSkge1xuICAgIC5idG4ge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMC42MjVyZW0gKyAwLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuIHtcbiAgICBwYWRkaW5nLXRvcDogMC42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5idG4ge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMC42MjVyZW0gLCAwLjQyMDQ1NDU0NTVyZW0gICsgIDEuMDIyNzI3MjcyN3Z3ICwgMS4xODc1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMC42MjVyZW0gLCAwLjQyMDQ1NDU0NTVyZW0gICsgIDEuMDIyNzI3MjcyN3Z3ICwgMS4xODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMC42MjVyZW0gLCAwLjQyMDQ1NDU0NTVyZW0gICsgIDEuMDIyNzI3MjcyN3Z3ICwgMS4xODc1cmVtICkpIHtcbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDAuNjI1cmVtICsgMC41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0biB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYnRuIHtcbiAgICB3aWR0aDogMTAuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDVyZW0gLCAyLjk1NDU0NTQ1NDVyZW0gICsgIDEwLjIyNzI3MjcyNzN2dyAsIDEwLjYyNXJlbSApKSB7XG4gICAgLmJ0biB7XG4gICAgICB3aWR0aDogY2xhbXAoIDVyZW0gLCAyLjk1NDU0NTQ1NDVyZW0gICsgIDEwLjIyNzI3MjcyNzN2dyAsIDEwLjYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDVyZW0gLCAyLjk1NDU0NTQ1NDVyZW0gICsgIDEwLjIyNzI3MjcyNzN2dyAsIDEwLjYyNXJlbSApKSB7XG4gICAgLmJ0biB7XG4gICAgICB3aWR0aDogY2FsYyg1cmVtICsgNS42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuIHtcbiAgICB3aWR0aDogNXJlbTtcbiAgfVxufVxuLmJ0bjpob3ZlciBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWRhcmstY2wpO1xufVxuLmJ0bjpob3Zlcjo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuLmJ0bjpob3Zlcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbn1cbi5idG46OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0bjo6YWZ0ZXIge1xuICAgIHRvcDogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh0b3A6IGNsYW1wKCAwLjc1cmVtICwgMC40NTQ1NDU0NTQ1cmVtICArICAxLjQ3NzI3MjcyNzN2dyAsIDEuNTYyNXJlbSApKSB7XG4gICAgLmJ0bjo6YWZ0ZXIge1xuICAgICAgdG9wOiBjbGFtcCggMC43NXJlbSAsIDAuNDU0NTQ1NDU0NXJlbSAgKyAgMS40NzcyNzI3MjczdncgLCAxLjU2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAodG9wOiBjbGFtcCggMC43NXJlbSAsIDAuNDU0NTQ1NDU0NXJlbSAgKyAgMS40NzcyNzI3MjczdncgLCAxLjU2MjVyZW0gKSkge1xuICAgIC5idG46OmFmdGVyIHtcbiAgICAgIHRvcDogY2FsYygwLjc1cmVtICsgMC44MTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJ0bjo6YWZ0ZXIge1xuICAgIHRvcDogMC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJ0bjo6YWZ0ZXIge1xuICAgIHJpZ2h0OiAyLjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocmlnaHQ6IGNsYW1wKCAxLjE4NzVyZW0gLCAwLjc1NTY4MTgxODJyZW0gICsgIDIuMTU5MDkwOTA5MXZ3ICwgMi4zNzVyZW0gKSkge1xuICAgIC5idG46OmFmdGVyIHtcbiAgICAgIHJpZ2h0OiBjbGFtcCggMS4xODc1cmVtICwgMC43NTU2ODE4MTgycmVtICArICAyLjE1OTA5MDkwOTF2dyAsIDIuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHJpZ2h0OiBjbGFtcCggMS4xODc1cmVtICwgMC43NTU2ODE4MTgycmVtICArICAyLjE1OTA5MDkwOTF2dyAsIDIuMzc1cmVtICkpIHtcbiAgICAuYnRuOjphZnRlciB7XG4gICAgICByaWdodDogY2FsYygxLjE4NzVyZW0gKyAxLjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYnRuOjphZnRlciB7XG4gICAgcmlnaHQ6IDEuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk1OS45OHB4KSB7XG4gIC5idG46OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uYnRuOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTI1JSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2U7XG59XG4uYnRuLS1yZXZlcnNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3V0bGluZTogMXB4IHNvbGlkICNmZmY7XG59XG4uYnRuLS1yZXZlcnNlOmhvdmVyOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uYnRuLS1yZXZlcnNlOmhvdmVyIHNwYW4ge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5idG4tLXJldmVyc2Ugc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5idG4tLXJldmVyc2U6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XG59XG4uYnRuLS1yZXZlcnNlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbn1cblxuLmRpcmVjdGlvbnMge1xuICBtYXgtd2lkdGg6IDEzMzZweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmRpcmVjdGlvbnMge1xuICAgIHBhZGRpbmctYm90dG9tOiA4Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMi43ODQwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDguNzVyZW0gKSkge1xuICAgIC5kaXJlY3Rpb25zIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC4zNzVyZW0gLCAyLjc4NDA5MDkwOTFyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgOC43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMi43ODQwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDguNzVyZW0gKSkge1xuICAgIC5kaXJlY3Rpb25zIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDQuMzc1cmVtICsgNC4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZGlyZWN0aW9ucyB7XG4gICAgcGFkZGluZy1ib3R0b206IDQuMzc1cmVtO1xuICB9XG59XG5cbi53b3Jrcy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAzMHB4O1xufVxuLndvcmtzLWxpc3RfX2l0ZW0ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuMTMpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNjUpIDEwMCUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAud29ya3MtbGlzdF9faXRlbSB7XG4gICAgd2lkdGg6IDE5cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCAxMC4xMzYzNjM2MzY0cmVtICArICAxMS44MTgxODE4MTgydncgLCAxOXJlbSApKSB7XG4gICAgLndvcmtzLWxpc3RfX2l0ZW0ge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxMi41cmVtICwgMTAuMTM2MzYzNjM2NHJlbSAgKyAgMTEuODE4MTgxODE4MnZ3ICwgMTlyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxMi41cmVtICwgMTAuMTM2MzYzNjM2NHJlbSAgKyAgMTEuODE4MTgxODE4MnZ3ICwgMTlyZW0gKSkge1xuICAgIC53b3Jrcy1saXN0X19pdGVtIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEyLjVyZW0gKyA2LjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAud29ya3MtbGlzdF9faXRlbSB7XG4gICAgd2lkdGg6IDEyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC53b3Jrcy1saXN0X19pdGVtIHtcbiAgICBoZWlnaHQ6IDI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAxNy41cmVtICwgMTQuNzcyNzI3MjcyN3JlbSAgKyAgMTMuNjM2MzYzNjM2NHZ3ICwgMjVyZW0gKSkge1xuICAgIC53b3Jrcy1saXN0X19pdGVtIHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDE3LjVyZW0gLCAxNC43NzI3MjcyNzI3cmVtICArICAxMy42MzYzNjM2MzY0dncgLCAyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCAxNy41cmVtICwgMTQuNzcyNzI3MjcyN3JlbSAgKyAgMTMuNjM2MzYzNjM2NHZ3ICwgMjVyZW0gKSkge1xuICAgIC53b3Jrcy1saXN0X19pdGVtIHtcbiAgICAgIGhlaWdodDogY2FsYygxNy41cmVtICsgNy41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLndvcmtzLWxpc3RfX2l0ZW0ge1xuICAgIGhlaWdodDogMTcuNXJlbTtcbiAgfVxufVxuLndvcmtzLWxpc3RfX2l0ZW06aG92ZXIge1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG59XG4ud29ya3MtbGlzdF9faXRlbTpob3ZlciAud29ya3MtbGlzdF9faW5mbyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTZweCk7XG59XG4ud29ya3MtbGlzdF9faXRlbTpob3ZlciAud29ya3MtbGlzdF9fY2FyZCB7XG4gIGZpbHRlcjogYmx1cig3cHgpO1xufVxuLndvcmtzLWxpc3RfX2NhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmaWx0ZXI6IGJsdXIoMCk7XG4gIHRyYW5zaXRpb246IGZpbHRlciAwLjVzIGVhc2U7XG59XG4ud29ya3MtbGlzdF9faW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTZweCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAud29ya3MtbGlzdF9faW5mbyB7XG4gICAgcGFkZGluZy1yaWdodDogNS44MTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMS41NjI1cmVtICwgMC4wMTcwNDU0NTQ1cmVtICArICA3LjcyNzI3MjcyNzN2dyAsIDUuODEyNXJlbSApKSB7XG4gICAgLndvcmtzLWxpc3RfX2luZm8ge1xuICAgICAgcGFkZGluZy1yaWdodDogY2xhbXAoIDEuNTYyNXJlbSAsIDAuMDE3MDQ1NDU0NXJlbSAgKyAgNy43MjcyNzI3MjczdncgLCA1LjgxMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1yaWdodDogY2xhbXAoIDEuNTYyNXJlbSAsIDAuMDE3MDQ1NDU0NXJlbSAgKyAgNy43MjcyNzI3MjczdncgLCA1LjgxMjVyZW0gKSkge1xuICAgIC53b3Jrcy1saXN0X19pbmZvIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoMS41NjI1cmVtICsgNC4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC53b3Jrcy1saXN0X19pbmZvIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC53b3Jrcy1saXN0X19pbmZvIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjk5NDMxODE4MThyZW0gICsgIDIuODQwOTA5MDkwOXZ3ICwgMy4xMjVyZW0gKSkge1xuICAgIC53b3Jrcy1saXN0X19pbmZvIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuNTYyNXJlbSAsIDAuOTk0MzE4MTgxOHJlbSAgKyAgMi44NDA5MDkwOTA5dncgLCAzLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjk5NDMxODE4MThyZW0gICsgIDIuODQwOTA5MDkwOXZ3ICwgMy4xMjVyZW0gKSkge1xuICAgIC53b3Jrcy1saXN0X19pbmZvIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygxLjU2MjVyZW0gKyAxLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAud29ya3MtbGlzdF9faW5mbyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjU2MjVyZW07XG4gIH1cbn1cbi53b3Jrcy1saXN0X190ZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAyNHB4IDAgMjRweCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ5OS45OHB4KSB7XG4gIC53b3Jrcy1saXN0X190ZXh0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbi53b3Jrcy1saXN0X19tb3JlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0OTkuOThweCkge1xuICAud29ya3MtbGlzdF9fbW9yZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5mZWF0dXJlZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDkuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCA0LjY4NzVyZW0gLCAyLjgyMzg2MzYzNjRyZW0gICsgIDkuMzE4MTgxODE4MnZ3ICwgOS44MTI1cmVtICkpIHtcbiAgICAuZmVhdHVyZWQge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCA0LjY4NzVyZW0gLCAyLjgyMzg2MzYzNjRyZW0gICsgIDkuMzE4MTgxODE4MnZ3ICwgOS44MTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC42ODc1cmVtICwgMi44MjM4NjM2MzY0cmVtICArICA5LjMxODE4MTgxODJ2dyAsIDkuODEyNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDQuNjg3NXJlbSArIDUuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZlYXR1cmVkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNC42ODc1cmVtO1xuICB9XG59XG4uZmVhdHVyZWRfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZlYXR1cmVkX19saXN0IHtcbiAgICBnYXA6IDYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGdhcDogY2xhbXAoIDEuODc1cmVtICwgMC4yODQwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9fbGlzdCB7XG4gICAgICBnYXA6IGNsYW1wKCAxLjg3NXJlbSAsIDAuMjg0MDkwOTA5MXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGdhcDogY2xhbXAoIDEuODc1cmVtICwgMC4yODQwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9fbGlzdCB7XG4gICAgICBnYXA6IGNhbGMoMS44NzVyZW0gKyA0LjM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mZWF0dXJlZF9fbGlzdCB7XG4gICAgZ2FwOiAxLjg3NXJlbTtcbiAgfVxufVxuLmZlYXR1cmVkX19pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZlYXR1cmVkX19pdGVtOmhvdmVyIC5mZWF0dXJlZF9fYnRuLCAuZmVhdHVyZWRfX2l0ZW06Zm9jdXMgLmZlYXR1cmVkX19idG4ge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZlYXR1cmVkX19pbWFnZSB7XG4gICAgd2lkdGg6IDIzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxMS41NjI1cmVtICwgNy4zNTc5NTQ1NDU1cmVtICArICAyMS4wMjI3MjcyNzI3dncgLCAyMy4xMjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9faW1hZ2Uge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxMS41NjI1cmVtICwgNy4zNTc5NTQ1NDU1cmVtICArICAyMS4wMjI3MjcyNzI3dncgLCAyMy4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxMS41NjI1cmVtICwgNy4zNTc5NTQ1NDU1cmVtICArICAyMS4wMjI3MjcyNzI3dncgLCAyMy4xMjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9faW1hZ2Uge1xuICAgICAgd2lkdGg6IGNhbGMoMTEuNTYyNXJlbSArIDExLjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZmVhdHVyZWRfX2ltYWdlIHtcbiAgICB3aWR0aDogMTEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZlYXR1cmVkX19pbWFnZSB7XG4gICAgaGVpZ2h0OiAyNi43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggMTMuMzc1cmVtICwgOC41MTEzNjM2MzY0cmVtICArICAyNC4zMTgxODE4MTgydncgLCAyNi43NXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19pbWFnZSB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCAxMy4zNzVyZW0gLCA4LjUxMTM2MzYzNjRyZW0gICsgIDI0LjMxODE4MTgxODJ2dyAsIDI2Ljc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDEzLjM3NXJlbSAsIDguNTExMzYzNjM2NHJlbSAgKyAgMjQuMzE4MTgxODE4MnZ3ICwgMjYuNzVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9faW1hZ2Uge1xuICAgICAgaGVpZ2h0OiBjYWxjKDEzLjM3NXJlbSArIDEzLjM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mZWF0dXJlZF9faW1hZ2Uge1xuICAgIGhlaWdodDogMTMuMzc1cmVtO1xuICB9XG59XG4uZmVhdHVyZWRfX2xhYmVsIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZlYXR1cmVkX19sYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogMi4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi10b3A6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjUwNTY4MTgxODJyZW0gICsgIDIuMTU5MDkwOTA5MXZ3ICwgMi4xMjVyZW0gKSkge1xuICAgIC5mZWF0dXJlZF9fbGFiZWwge1xuICAgICAgbWFyZ2luLXRvcDogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNTA1NjgxODE4MnJlbSAgKyAgMi4xNTkwOTA5MDkxdncgLCAyLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tdG9wOiBjbGFtcCggMC45Mzc1cmVtICwgMC41MDU2ODE4MTgycmVtICArICAyLjE1OTA5MDkwOTF2dyAsIDIuMTI1cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2xhYmVsIHtcbiAgICAgIG1hcmdpbi10b3A6IGNhbGMoMC45Mzc1cmVtICsgMS4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZlYXR1cmVkX19sYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogMC45Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZmVhdHVyZWRfX2xhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjI1cmVtICwgMC4xNTkwOTA5MDkxcmVtICArICAwLjQ1NDU0NTQ1NDV2dyAsIDAuNXJlbSApKSB7XG4gICAgLmZlYXR1cmVkX19sYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMC4yNXJlbSAsIDAuMTU5MDkwOTA5MXJlbSAgKyAgMC40NTQ1NDU0NTQ1dncgLCAwLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuMjVyZW0gLCAwLjE1OTA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMC41cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2xhYmVsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMC4yNXJlbSArIDAuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZmVhdHVyZWRfX2xhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTk5Ljk4cHgpIHtcbiAgLmZlYXR1cmVkX19sYWJlbCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG4uZmVhdHVyZWRfX3R5cGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuZmVhdHVyZWRfX2ltYWdlLS1iaWcge1xuICAgIHdpZHRoOiAzNy41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxMC4yMjcyNzI3MjczcmVtICArICAzNi4zNjM2MzYzNjM2dncgLCAzNy41cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2ltYWdlLS1iaWcge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTAuMjI3MjcyNzI3M3JlbSAgKyAgMzYuMzYzNjM2MzYzNnZ3ICwgMzcuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxMC4yMjcyNzI3MjczcmVtICArICAzNi4zNjM2MzYzNjM2dncgLCAzNy41cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2ltYWdlLS1iaWcge1xuICAgICAgd2lkdGg6IGNhbGMoMTcuNXJlbSArIDIwICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZlYXR1cmVkX19pbWFnZS0tYmlnIHtcbiAgICB3aWR0aDogMTcuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmZlYXR1cmVkX19pbWFnZS0tYmlnIHtcbiAgICBoZWlnaHQ6IDI2Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAxMi4xMjVyZW0gLCA2LjgwNjgxODE4MThyZW0gICsgIDI2LjU5MDkwOTA5MDl2dyAsIDI2Ljc1cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2ltYWdlLS1iaWcge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggMTIuMTI1cmVtICwgNi44MDY4MTgxODE4cmVtICArICAyNi41OTA5MDkwOTA5dncgLCAyNi43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCAxMi4xMjVyZW0gLCA2LjgwNjgxODE4MThyZW0gICsgIDI2LjU5MDkwOTA5MDl2dyAsIDI2Ljc1cmVtICkpIHtcbiAgICAuZmVhdHVyZWRfX2ltYWdlLS1iaWcge1xuICAgICAgaGVpZ2h0OiBjYWxjKDEyLjEyNXJlbSArIDE0LjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mZWF0dXJlZF9faW1hZ2UtLWJpZyB7XG4gICAgaGVpZ2h0OiAxMi4xMjVyZW07XG4gIH1cbn1cbi5mZWF0dXJlZF9faXRlbS0tdG9wIHtcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgcGFkZGluZy10b3A6IDE2MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAuZmVhdHVyZWRfX2l0ZW0tLXRvcCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG59XG4uZmVhdHVyZWRfX2l0ZW0tLWJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IC0xNjBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLmZlYXR1cmVkX19pdGVtLS1ib3R0b20ge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbn1cbi5mZWF0dXJlZF9fYnRuIHtcbiAgbGVmdDogMTMwcHg7XG4gIHRvcDogMjAwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UsIHZpc2liaWxpdHkgMC41cyBlYXNlLCB0cmFuc2Zvcm0gMC40cyBlYXNlLCBib3gtc2hhZG93IDAuNHMgZWFzZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5mZWF0dXJlZF9fYnRuIHtcbiAgICBsZWZ0OiAxMDBweDtcbiAgICB0b3A6IDEwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjkuOTk4NzVlbSkge1xuICAuZmVhdHVyZWRfX2J0biB7XG4gICAgbGVmdDogNjZweDtcbiAgICB0b3A6IDc3cHg7XG4gIH1cbn1cblxuLmludHJvZHVjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGZpcnN0IGJhc2VsaW5lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm9kdWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4wMzk3NzI3MjczcmVtICArICAyLjYxMzYzNjM2MzZ2dyAsIDNyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb24ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDEuMDM5NzcyNzI3M3JlbSAgKyAgMi42MTM2MzYzNjM2dncgLCAzcmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjAzOTc3MjcyNzNyZW0gICsgIDIuNjEzNjM2MzYzNnZ3ICwgM3JlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuNTYyNXJlbSArIDEuNDM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyb2R1Y3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvZHVjdGlvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiA2LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuNTY4MTgxODE4MnJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA2LjI1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC41NjgxODE4MTgycmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjU2ODE4MTgxODJyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMS4yNXJlbSArIDUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm9kdWN0aW9uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyb2R1Y3Rpb24ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoMy4xMjVyZW0gKyAzLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyb2R1Y3Rpb24ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDMuMTI1cmVtO1xuICB9XG59XG4uaW50cm9kdWN0aW9uX190aXRsZSB7XG4gIG1hcmdpbi1yaWdodDogMzc1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgZm9udC1zaXplOiA2LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygzLjEyNXJlbSArIDMuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICB3aWR0aDogMjYuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMS42NDc3MjcyNzI3cmVtICArICAxOS44ODYzNjM2MzY0dncgLCAyNi41NjI1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDExLjY0NzcyNzI3MjdyZW0gICsgIDE5Ljg4NjM2MzYzNjR2dyAsIDI2LjU2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMS42NDc3MjcyNzI3cmVtICArICAxOS44ODYzNjM2MzY0dncgLCAyNi41NjI1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uX190aXRsZSB7XG4gICAgICB3aWR0aDogY2FsYygxNS42MjVyZW0gKyAxMC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgIHdpZHRoOiAxNS42MjVyZW07XG4gIH1cbn1cbi5pbnRyb2R1Y3Rpb25fX3RpdGxlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xuICBsZWZ0OiA2ODBweDtcbiAgdG9wOiA4MHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgICB3aWR0aDogNC4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMi4xODc1cmVtICwgMS4zOTIwNDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDQuMzc1cmVtICkpIHtcbiAgICAuaW50cm9kdWN0aW9uX190aXRsZTo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IGNsYW1wKCAyLjE4NzVyZW0gLCAxLjM5MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNC4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAyLjE4NzVyZW0gLCAxLjM5MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNC4zNzVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlOjphZnRlciB7XG4gICAgICB3aWR0aDogY2FsYygyLjE4NzVyZW0gKyAyLjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZTo6YWZ0ZXIge1xuICAgIHdpZHRoOiAyLjE4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIGFuZCAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4wMzk3NzI3MjczcmVtICArICAyLjYxMzYzNjM2MzZ2dyAsIDNyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAxLjAzOTc3MjcyNzNyZW0gICsgIDIuNjEzNjM2MzYzNnZ3ICwgM3JlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41NjI1cmVtICwgMS4wMzk3NzI3MjczcmVtICArICAyLjYxMzYzNjM2MzZ2dyAsIDNyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS41NjI1cmVtICsgMS40Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmludHJvZHVjdGlvbl9fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAuaW50cm9kdWN0aW9uX190aXRsZTo6YWZ0ZXIge1xuICAgIHRvcDogLTQwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIGFuZCAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlOjphZnRlciB7XG4gICAgbGVmdDogNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGVmdDogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5pbnRyb2R1Y3Rpb25fX3RpdGxlOjphZnRlciB7XG4gICAgICBsZWZ0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChsZWZ0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLmludHJvZHVjdGlvbl9fdGl0bGU6OmFmdGVyIHtcbiAgICAgIGxlZnQ6IGNhbGMoMy4xMjVyZW0gKyAzLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbnRyb2R1Y3Rpb25fX3RpdGxlOjphZnRlciB7XG4gICAgbGVmdDogMy4xMjVyZW07XG4gIH1cbn1cblxuLnByb2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbiAgaGVpZ2h0OiA2NjRweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkge1xuICAucHJvY2VzcyB7XG4gICAgaGVpZ2h0OiA3NjRweDtcbiAgfVxufVxuLnByb2Nlc3NfX2NvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTMwMHB4O1xuICB6LWluZGV4OiAyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAucHJvY2Vzc19fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogOS4zMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDQuMDYyNXJlbSAsIDIuMTUzNDA5MDkwOXJlbSAgKyAgOS41NDU0NTQ1NDU1dncgLCA5LjMxMjVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19jb250YWluZXIge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCA0LjA2MjVyZW0gLCAyLjE1MzQwOTA5MDlyZW0gICsgIDkuNTQ1NDU0NTQ1NXZ3ICwgOS4zMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggNC4wNjI1cmVtICwgMi4xNTM0MDkwOTA5cmVtICArICA5LjU0NTQ1NDU0NTV2dyAsIDkuMzEyNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX2NvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYyg0LjA2MjVyZW0gKyA1LjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnByb2Nlc3NfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDQuMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnByb2Nlc3NfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwLjA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC4zNzVyZW0gLCAyLjMwNjgxODE4MThyZW0gICsgIDEwLjM0MDkwOTA5MDl2dyAsIDEwLjA2MjVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19jb250YWluZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCA0LjM3NXJlbSAsIDIuMzA2ODE4MTgxOHJlbSAgKyAgMTAuMzQwOTA5MDkwOXZ3ICwgMTAuMDYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMi4zMDY4MTgxODE4cmVtICArICAxMC4zNDA5MDkwOTA5dncgLCAxMC4wNjI1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDQuMzc1cmVtICsgNS42ODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnByb2Nlc3NfX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDQuMzc1cmVtO1xuICB9XG59XG4ucHJvY2Vzc19fY29udGFpbmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0yMCU7XG4gIHRvcDogLTM1JTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnByb2Nlc3NfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIHdpZHRoOiA0MC4wNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEyLjVyZW0gKyAyNy41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnByb2Nlc3NfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAucHJvY2Vzc19fY29udGFpbmVyOjphZnRlciB7XG4gICAgaGVpZ2h0OiA0MC4wNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fY29udGFpbmVyOjphZnRlciB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKSkge1xuICAgIC5wcm9jZXNzX19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIGhlaWdodDogY2FsYygxMi41cmVtICsgMjcuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5wcm9jZXNzX19jb250YWluZXI6OmFmdGVyIHtcbiAgICBoZWlnaHQ6IDEyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkge1xuICAucHJvY2Vzc19fY29udGFpbmVyOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnByb2Nlc3NfX3RpdGxlIHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5wcm9jZXNzX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuODc1cmVtICwgMC43Mzg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDVyZW0gKSkge1xuICAgIC5wcm9jZXNzX190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS44NzVyZW0gLCAwLjczODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS44NzVyZW0gLCAwLjczODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS44NzVyZW0gKyAzLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5wcm9jZXNzX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkgYW5kIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnByb2Nlc3NfX3RpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjU2ODE4MTgxODJyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX3RpdGxlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC41NjgxODE4MTgycmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjU2ODE4MTgxODJyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX3RpdGxlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygxLjI1cmVtICsgNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnByb2Nlc3NfX3RpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MTkuOThweCkge1xuICAucHJvY2Vzc19fdGl0bGUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxufVxuLnByb2Nlc3NfX2xpc3Qge1xuICBnYXA6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAucHJvY2Vzc19fbGlzdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIDAuMzQwOTA5MDkwOXJlbSAgKyAgNC41NDU0NTQ1NDU1dncgLCAzLjc1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fbGlzdCB7XG4gICAgICBtYXJnaW4tbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjM0MDkwOTA5MDlyZW0gICsgIDQuNTQ1NDU0NTQ1NXZ3ICwgMy43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjM0MDkwOTA5MDlyZW0gICsgIDQuNTQ1NDU0NTQ1NXZ3ICwgMy43NXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX2xpc3Qge1xuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMS4yNXJlbSArIDIuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5wcm9jZXNzX19saXN0IHtcbiAgICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnByb2Nlc3NfX2xpc3Qge1xuICAgIG1hcmdpbi1yaWdodDogOC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTMuMTgxODE4MDk2NnJlbSAgKyAgMTUuOTA5MDkwNzk1NXZ3ICwgOC43NXJlbSApKSB7XG4gICAgLnByb2Nlc3NfX2xpc3Qge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTMuMTgxODE4MDk2NnJlbSAgKyAgMTUuOTA5MDkwNzk1NXZ3ICwgOC43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtMy4xODE4MTgwOTY2cmVtICArICAxNS45MDkwOTA3OTU1dncgLCA4Ljc1cmVtICkpIHtcbiAgICAucHJvY2Vzc19fbGlzdCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMC4wMDAwMDAwNjI1cmVtICsgOC43NDk5OTk5Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnByb2Nlc3NfX2xpc3Qge1xuICAgIG1hcmdpbi1yaWdodDogMC4wMDAwMDAwNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpIHtcbiAgLnByb2Nlc3NfX2xpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cbn1cbi5wcm9jZXNzX19pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2Nlc3NfX2l0ZW06aG92ZXIgLnByb2Nlc3NfX3RleHQge1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xufVxuLnByb2Nlc3NfX2l0ZW06aG92ZXIgLnByb2Nlc3NfX3RleHQ6OmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyOCUpO1xufVxuLnByb2Nlc3NfX2l0ZW06aG92ZXIgLnByb2Nlc3NfX251bWJlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4ucHJvY2Vzc19fdGV4dCB7XG4gIGNvbG9yOiAjNkY2RjZGO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNHMgZWFzZSwgdHJhbnNmb3JtIDAuNHMgZWFzZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuLnByb2Nlc3NfX3RleHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtOTBweDtcbiAgdG9wOiAxN3B4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLCBvcGFjaXR5IDAuNHMgZWFzZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkge1xuICAucHJvY2Vzc19fdGV4dDo6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ucHJvY2Vzc19fbnVtYmVyIHtcbiAgb3BhY2l0eTogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZTtcbn1cblxuLnByb2Nlc3Mtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpIHtcbiAgLnByb2Nlc3Mtd3JhcHBlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuYmxvY2staW5mbyB7XG4gICAgd2lkdGg6IDI0LjY4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTIuMzI5NTQ1NDU0NXJlbSAgKyAgMTYuNDc3MjcyNzI3M3Z3ICwgMjQuNjg3NXJlbSApKSB7XG4gICAgLmJsb2NrLWluZm8ge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMi4zMjk1NDU0NTQ1cmVtICArICAxNi40NzcyNzI3MjczdncgLCAyNC42ODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTIuMzI5NTQ1NDU0NXJlbSAgKyAgMTYuNDc3MjcyNzI3M3Z3ICwgMjQuNjg3NXJlbSApKSB7XG4gICAgLmJsb2NrLWluZm8ge1xuICAgICAgd2lkdGg6IGNhbGMoMTUuNjI1cmVtICsgOS4wNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJsb2NrLWluZm8ge1xuICAgIHdpZHRoOiAxNS42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkgYW5kIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJsb2NrLWluZm8ge1xuICAgIHBhZGRpbmctbGVmdDogNi4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuNTY4MTgxODE4MnJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA2LjI1cmVtICkpIHtcbiAgICAuYmxvY2staW5mbyB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuNTY4MTgxODE4MnJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC41NjgxODE4MTgycmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDYuMjVyZW0gKSkge1xuICAgIC5ibG9jay1pbmZvIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygxLjI1cmVtICsgNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJsb2NrLWluZm8ge1xuICAgIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbiAgfVxufVxuLmJsb2NrLWluZm9fX3RleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmJsb2NrLWluZm9fX3RleHQge1xuICAgIG1hcmdpbi1ib3R0b206IDMuMzEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNTYyNXJlbSAsIDAuOTI2MTM2MzYzNnJlbSAgKyAgMy4xODE4MTgxODE4dncgLCAzLjMxMjVyZW0gKSkge1xuICAgIC5ibG9jay1pbmZvX190ZXh0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjkyNjEzNjM2MzZyZW0gICsgIDMuMTgxODE4MTgxOHZ3ICwgMy4zMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjU2MjVyZW0gLCAwLjkyNjEzNjM2MzZyZW0gICsgIDMuMTgxODE4MTgxOHZ3ICwgMy4zMTI1cmVtICkpIHtcbiAgICAuYmxvY2staW5mb19fdGV4dCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuNTYyNXJlbSArIDEuNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYmxvY2staW5mb19fdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41NjI1cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jcmVhdGUge1xuICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCA1cmVtICwgMy4xODE4MTgxODE4cmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDEwcmVtICkpIHtcbiAgICAuY3JlYXRlIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggNXJlbSAsIDMuMTgxODE4MTgxOHJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCAxMHJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDVyZW0gLCAzLjE4MTgxODE4MThyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgMTByZW0gKSkge1xuICAgIC5jcmVhdGUge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoNXJlbSArIDUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlIHtcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNyZWF0ZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDguNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC4zNzVyZW0gLCAyLjc4NDA5MDkwOTFyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgOC43NXJlbSApKSB7XG4gICAgLmNyZWF0ZSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMi43ODQwOTA5MDkxcmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDguNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCA0LjM3NXJlbSAsIDIuNzg0MDkwOTA5MXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA4Ljc1cmVtICkpIHtcbiAgICAuY3JlYXRlIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDQuMzc1cmVtICsgNC4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNC4zNzVyZW07XG4gIH1cbn1cbi5jcmVhdGVfX3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzcuOThweCkge1xuICAuY3JlYXRlX193cmFwcGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDM3Ljk4cHgpIHtcbiAgLmltZy1ibG9jayB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn1cbi5pbWctYmxvY2tfX2l0ZW0ge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuNHMgZWFzZTtcbn1cbi5pbWctYmxvY2tfX2l0ZW06aG92ZXIge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcbn1cbi5pbWctYmxvY2tfX2l0ZW0tLWJpZyB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1iaWcge1xuICAgIHdpZHRoOiAyOS4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTQuNjg3NXJlbSAsIDkuMzQ2NTkwOTA5MXJlbSAgKyAgMjYuNzA0NTQ1NDU0NXZ3ICwgMjkuMzc1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1iaWcge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxNC42ODc1cmVtICwgOS4zNDY1OTA5MDkxcmVtICArICAyNi43MDQ1NDU0NTQ1dncgLCAyOS4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNC42ODc1cmVtICwgOS4zNDY1OTA5MDkxcmVtICArICAyNi43MDQ1NDU0NTQ1dncgLCAyOS4zNzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLWJpZyB7XG4gICAgICB3aWR0aDogY2FsYygxNC42ODc1cmVtICsgMTQuNjg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLWJpZyB7XG4gICAgd2lkdGg6IDE0LjY4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLWJpZyB7XG4gICAgaGVpZ2h0OiAxOC4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGhlaWdodDogY2xhbXAoIDkuMDYyNXJlbSAsIDUuNzY3MDQ1NDU0NXJlbSAgKyAgMTYuNDc3MjcyNzI3M3Z3ICwgMTguMTI1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1iaWcge1xuICAgICAgaGVpZ2h0OiBjbGFtcCggOS4wNjI1cmVtICwgNS43NjcwNDU0NTQ1cmVtICArICAxNi40NzcyNzI3MjczdncgLCAxOC4xMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoaGVpZ2h0OiBjbGFtcCggOS4wNjI1cmVtICwgNS43NjcwNDU0NTQ1cmVtICArICAxNi40NzcyNzI3MjczdncgLCAxOC4xMjVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLWJpZyB7XG4gICAgICBoZWlnaHQ6IGNhbGMoOS4wNjI1cmVtICsgOS4wNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmltZy1ibG9ja19faXRlbS0tYmlnIHtcbiAgICBoZWlnaHQ6IDkuMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmltZy1ibG9ja19fYm90dG9tIHtcbiAgICB3aWR0aDogMzUuOTM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxOC43NXJlbSAsIDEyLjVyZW0gICsgIDMxLjI1dncgLCAzNS45Mzc1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19ib3R0b20ge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxOC43NXJlbSAsIDEyLjVyZW0gICsgIDMxLjI1dncgLCAzNS45Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTguNzVyZW0gLCAxMi41cmVtICArICAzMS4yNXZ3ICwgMzUuOTM3NXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19fYm90dG9tIHtcbiAgICAgIHdpZHRoOiBjYWxjKDE4Ljc1cmVtICsgMTcuMTg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbWctYmxvY2tfX2JvdHRvbSB7XG4gICAgd2lkdGg6IDE4Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgcGFkZGluZy1sZWZ0OiA4LjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS44NzVyZW0gLCAtMC4zOTc3MjcyNzI3cmVtICArICAxMS4zNjM2MzYzNjM2dncgLCA4LjEyNXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19faXRlbS0tc21hbGwge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMS44NzVyZW0gLCAtMC4zOTc3MjcyNzI3cmVtICArICAxMS4zNjM2MzYzNjM2dncgLCA4LjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjg3NXJlbSAsIC0wLjM5NzcyNzI3MjdyZW0gICsgIDExLjM2MzYzNjM2MzZ2dyAsIDguMTI1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMS44NzVyZW0gKyA2LjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmltZy1ibG9ja19faXRlbS0tc21hbGwge1xuICAgIHBhZGRpbmctbGVmdDogMS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjU5NjU5MDkwOTFyZW0gICsgIDEuNzA0NTQ1NDU0NXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICAgIG1hcmdpbi1yaWdodDogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNTk2NTkwOTA5MXJlbSAgKyAgMS43MDQ1NDU0NTQ1dncgLCAxLjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjU5NjU5MDkwOTFyZW0gICsgIDEuNzA0NTQ1NDU0NXZ3ICwgMS44NzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygwLjkzNzVyZW0gKyAwLjkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICB3aWR0aDogMTYuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDguNDM3NXJlbSAsIDUuMzY5MzE4MTgxOHJlbSAgKyAgMTUuMzQwOTA5MDkwOXZ3ICwgMTYuODc1cmVtICkpIHtcbiAgICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgICB3aWR0aDogY2xhbXAoIDguNDM3NXJlbSAsIDUuMzY5MzE4MTgxOHJlbSAgKyAgMTUuMzQwOTA5MDkwOXZ3ICwgMTYuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggOC40Mzc1cmVtICwgNS4zNjkzMTgxODE4cmVtICArICAxNS4zNDA5MDkwOTA5dncgLCAxNi44NzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICAgIHdpZHRoOiBjYWxjKDguNDM3NXJlbSArIDguNDM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICB3aWR0aDogOC40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1zbWFsbCB7XG4gICAgaGVpZ2h0OiA4Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChoZWlnaHQ6IGNsYW1wKCA1cmVtICwgMy42MzYzNjM2MzY0cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDguNzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICAgIGhlaWdodDogY2xhbXAoIDVyZW0gLCAzLjYzNjM2MzYzNjRyZW0gICsgIDYuODE4MTgxODE4MnZ3ICwgOC43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCA1cmVtICwgMy42MzYzNjM2MzY0cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDguNzVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICAgIGhlaWdodDogY2FsYyg1cmVtICsgMy43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLXNtYWxsIHtcbiAgICBoZWlnaHQ6IDVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLW1pZGRsZSB7XG4gICAgd2lkdGg6IDE2Ljg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCA4LjQzNzVyZW0gLCA1LjM2OTMxODE4MThyZW0gICsgIDE1LjM0MDkwOTA5MDl2dyAsIDE2Ljg3NXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19faXRlbS0tbWlkZGxlIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggOC40Mzc1cmVtICwgNS4zNjkzMTgxODE4cmVtICArICAxNS4zNDA5MDkwOTA5dncgLCAxNi44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCA4LjQzNzVyZW0gLCA1LjM2OTMxODE4MThyZW0gICsgIDE1LjM0MDkwOTA5MDl2dyAsIDE2Ljg3NXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19faXRlbS0tbWlkZGxlIHtcbiAgICAgIHdpZHRoOiBjYWxjKDguNDM3NXJlbSArIDguNDM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pbWctYmxvY2tfX2l0ZW0tLW1pZGRsZSB7XG4gICAgd2lkdGg6IDguNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmltZy1ibG9ja19faXRlbS0tbWlkZGxlIHtcbiAgICBoZWlnaHQ6IDE1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoaGVpZ2h0OiBjbGFtcCggNy44MTI1cmVtICwgNC45NzE1OTA5MDkxcmVtICArICAxNC4yMDQ1NDU0NTQ1dncgLCAxNS42MjVyZW0gKSkge1xuICAgIC5pbWctYmxvY2tfX2l0ZW0tLW1pZGRsZSB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCA3LjgxMjVyZW0gLCA0Ljk3MTU5MDkwOTFyZW0gICsgIDE0LjIwNDU0NTQ1NDV2dyAsIDE1LjYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChoZWlnaHQ6IGNsYW1wKCA3LjgxMjVyZW0gLCA0Ljk3MTU5MDkwOTFyZW0gICsgIDE0LjIwNDU0NTQ1NDV2dyAsIDE1LjYyNXJlbSApKSB7XG4gICAgLmltZy1ibG9ja19faXRlbS0tbWlkZGxlIHtcbiAgICAgIGhlaWdodDogY2FsYyg3LjgxMjVyZW0gKyA3LjgxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaW1nLWJsb2NrX19pdGVtLS1taWRkbGUge1xuICAgIGhlaWdodDogNy44MTI1cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jcmVhdGUtaW5mbyB7XG4gICAgcGFkZGluZy10b3A6IDUuODEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAxLjI5NTQ1NDU0NTVyZW0gICsgIDYuMDIyNzI3MjcyN3Z3ICwgNS44MTI1cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm8ge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAyLjVyZW0gLCAxLjI5NTQ1NDU0NTVyZW0gICsgIDYuMDIyNzI3MjcyN3Z3ICwgNS44MTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgMS4yOTU0NTQ1NDU1cmVtICArICA2LjAyMjcyNzI3Mjd2dyAsIDUuODEyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDIuNXJlbSArIDMuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jcmVhdGUtaW5mbyB7XG4gICAgcGFkZGluZy10b3A6IDIuNXJlbTtcbiAgfVxufVxuLmNyZWF0ZS1pbmZvX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgd2lkdGg6IDM1N3B4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi4zMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIDAuODYzNjM2MzYzNnJlbSAgKyAgMS45MzE4MTgxODE4dncgLCAyLjMxMjVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAwLjg2MzYzNjM2MzZyZW0gICsgIDEuOTMxODE4MTgxOHZ3ICwgMi4zMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgMC44NjM2MzYzNjM2cmVtICArICAxLjkzMTgxODE4MTh2dyAsIDIuMzEyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuMjVyZW0gKyAxLjA2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlLWluZm9fX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICB9XG59XG4uY3JlYXRlLWluZm9fX3RleHQge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgIHBhZGRpbmctbGVmdDogNS42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC4zNDA5MDkwOTA5cmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjM0MDkwOTA5MDlyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgNS42MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIC0wLjM0MDkwOTA5MDlyZW0gICsgIDcuOTU0NTQ1NDU0NXZ3ICwgNS42MjVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMS4yNXJlbSArIDQuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMy4zMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS42ODc1cmVtICwgMS4wOTY1OTA5MDkxcmVtICArICAyLjk1NDU0NTQ1NDV2dyAsIDMuMzEyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjY4NzVyZW0gLCAxLjA5NjU5MDkwOTFyZW0gICsgIDIuOTU0NTQ1NDU0NXZ3ICwgMy4zMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjY4NzVyZW0gLCAxLjA5NjU5MDkwOTFyZW0gICsgIDIuOTU0NTQ1NDU0NXZ3ICwgMy4zMTI1cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjY4NzVyZW0gKyAxLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS42ODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgIHdpZHRoOiAyNy4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDEzLjkwOTA5MDkwOTFyZW0gICsgIDE3Ljk1NDU0NTQ1NDV2dyAsIDI3LjM3NXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDEzLjkwOTA5MDkwOTFyZW0gICsgIDE3Ljk1NDU0NTQ1NDV2dyAsIDI3LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxMy45MDkwOTA5MDkxcmVtICArICAxNy45NTQ1NDU0NTQ1dncgLCAyNy4zNzVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgICB3aWR0aDogY2FsYygxNy41cmVtICsgOS44NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgIHdpZHRoOiAxNy41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAzNy45OHB4KSB7XG4gIC5jcmVhdGUtaW5mb19fdGV4dCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgzLjk4cHgpIHtcbiAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODMuOThweCkgYW5kIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4My45OHB4KSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgMC43OTU0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDIuNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX190ZXh0IHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjc5NTQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMi41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAwLjc5NTQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMi41cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDEuMjVyZW0gKyAxLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4My45OHB4KSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlLWluZm9fX3RleHQge1xuICAgIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNyZWF0ZS1pbmZvX19idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiA1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuMzQwOTA5MDkwOXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA1LjYyNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX19idG4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgLTAuMzQwOTA5MDkwOXJlbSAgKyAgNy45NTQ1NDU0NTQ1dncgLCA1LjYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tbGVmdDogY2xhbXAoIDEuMjVyZW0gLCAtMC4zNDA5MDkwOTA5cmVtICArICA3Ljk1NDU0NTQ1NDV2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAuY3JlYXRlLWluZm9fX2J0biB7XG4gICAgICBtYXJnaW4tbGVmdDogY2FsYygxLjI1cmVtICsgNC4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY3JlYXRlLWluZm9fX2J0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDM3Ljk4cHgpIHtcbiAgLmNyZWF0ZS1pbmZvX19idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgzLjk4cHgpIGFuZCAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jcmVhdGUtaW5mb19fYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgzLjk4cHgpIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIDAuNzk1NDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAyLjVyZW0gKSkge1xuICAgIC5jcmVhdGUtaW5mb19fYnRuIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBjbGFtcCggMS4yNXJlbSAsIDAuNzk1NDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAyLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWxlZnQ6IGNsYW1wKCAxLjI1cmVtICwgMC43OTU0NTQ1NDU1cmVtICArICAyLjI3MjcyNzI3Mjd2dyAsIDIuNXJlbSApKSB7XG4gICAgLmNyZWF0ZS1pbmZvX19idG4ge1xuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMS4yNXJlbSArIDEuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgzLjk4cHgpIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jcmVhdGUtaW5mb19fYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAudmFsdWVzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTMuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDYuNjg3NXJlbSAsIDQuMjU1NjgxODE4MnJlbSAgKyAgMTIuMTU5MDkwOTA5MXZ3ICwgMTMuMzc1cmVtICkpIHtcbiAgICAudmFsdWVzIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggNi42ODc1cmVtICwgNC4yNTU2ODE4MTgycmVtICArICAxMi4xNTkwOTA5MDkxdncgLCAxMy4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCA2LjY4NzVyZW0gLCA0LjI1NTY4MTgxODJyZW0gICsgIDEyLjE1OTA5MDkwOTF2dyAsIDEzLjM3NXJlbSApKSB7XG4gICAgLnZhbHVlcyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyg2LjY4NzVyZW0gKyA2LjY4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAudmFsdWVzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNi42ODc1cmVtO1xuICB9XG59XG4udmFsdWVzX190aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC52YWx1ZXNfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDMuNDM3NXJlbSAsIDIuNDE0NzcyNzI3M3JlbSAgKyAgNS4xMTM2MzYzNjM2dncgLCA2LjI1cmVtICkpIHtcbiAgICAudmFsdWVzX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAzLjQzNzVyZW0gLCAyLjQxNDc3MjcyNzNyZW0gICsgIDUuMTEzNjM2MzYzNnZ3ICwgNi4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAzLjQzNzVyZW0gLCAyLjQxNDc3MjcyNzNyZW0gICsgIDUuMTEzNjM2MzYzNnZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLnZhbHVlc19fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDMuNDM3NXJlbSArIDIuODEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC52YWx1ZXNfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDMuNDM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnZhbHVlc19fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDUuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMi41cmVtICwgMS40NTQ1NDU0NTQ1cmVtICArICA1LjIyNzI3MjcyNzN2dyAsIDUuMzc1cmVtICkpIHtcbiAgICAudmFsdWVzX190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMi41cmVtICwgMS40NTQ1NDU0NTQ1cmVtICArICA1LjIyNzI3MjcyNzN2dyAsIDUuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAxLjQ1NDU0NTQ1NDVyZW0gICsgIDUuMjI3MjcyNzI3M3Z3ICwgNS4zNzVyZW0gKSkge1xuICAgIC52YWx1ZXNfX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMi41cmVtICsgMi44NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAudmFsdWVzX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICB9XG59XG4udmFsdWVzX19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC52YWx1ZXNfX2xpc3Qge1xuICAgIGdhcDogNC42ODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChnYXA6IGNsYW1wKCAyLjVyZW0gLCAxLjcwNDU0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNC42ODc1cmVtICkpIHtcbiAgICAudmFsdWVzX19saXN0IHtcbiAgICAgIGdhcDogY2xhbXAoIDIuNXJlbSAsIDEuNzA0NTQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjY4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMi41cmVtICwgMS43MDQ1NDU0NTQ1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDQuNjg3NXJlbSApKSB7XG4gICAgLnZhbHVlc19fbGlzdCB7XG4gICAgICBnYXA6IGNhbGMoMi41cmVtICsgMi4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnZhbHVlc19fbGlzdCB7XG4gICAgZ2FwOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NTEuOThweCkge1xuICAudmFsdWVzX19saXN0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbn1cbi52YWx1ZXNfX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAudmFsdWVzX19pdGVtIHtcbiAgICB3aWR0aDogMjEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTUuNjI1cmVtICwgMTMuNTc5NTQ1NDU0NXJlbSAgKyAgMTAuMjI3MjcyNzI3M3Z3ICwgMjEuMjVyZW0gKSkge1xuICAgIC52YWx1ZXNfX2l0ZW0ge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMy41Nzk1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAyMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDEzLjU3OTU0NTQ1NDVyZW0gICsgIDEwLjIyNzI3MjcyNzN2dyAsIDIxLjI1cmVtICkpIHtcbiAgICAudmFsdWVzX19pdGVtIHtcbiAgICAgIHdpZHRoOiBjYWxjKDE1LjYyNXJlbSArIDUuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnZhbHVlc19faXRlbSB7XG4gICAgd2lkdGg6IDE1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnZhbHVlc19faXRlbSB7XG4gICAgcGFkZGluZy1sZWZ0OiA2LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICkpIHtcbiAgICAudmFsdWVzX19pdGVtIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMy4xMjVyZW0gLCAxLjk4ODYzNjM2MzZyZW0gICsgIDUuNjgxODE4MTgxOHZ3ICwgNi4yNXJlbSApKSB7XG4gICAgLnZhbHVlc19faXRlbSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMy4xMjVyZW0gKyAzLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC52YWx1ZXNfX2l0ZW0ge1xuICAgIHBhZGRpbmctbGVmdDogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NTEuOThweCkge1xuICAudmFsdWVzX19pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLnZhbHVlc19faW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAudmFsdWVzX19pbWcge1xuICAgIHdpZHRoOiA0LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAyLjE4NzVyZW0gLCAxLjM5MjA0NTQ1NDVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgNC4zNzVyZW0gKSkge1xuICAgIC52YWx1ZXNfX2ltZyB7XG4gICAgICB3aWR0aDogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMzkyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMzkyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjM3NXJlbSApKSB7XG4gICAgLnZhbHVlc19faW1nIHtcbiAgICAgIHdpZHRoOiBjYWxjKDIuMTg3NXJlbSArIDIuMTg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC52YWx1ZXNfX2ltZyB7XG4gICAgd2lkdGg6IDIuMTg3NXJlbTtcbiAgfVxufVxuLnZhbHVlc19fbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBtYXJnaW4tYm90dG9tOiAxN3B4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnZhbHVlc19fbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxLjI1cmVtICwgMS4xNTkwOTA5MDkxcmVtICArICAwLjQ1NDU0NTQ1NDV2dyAsIDEuNXJlbSApKSB7XG4gICAgLnZhbHVlc19fbGFiZWwge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMS4yNXJlbSAsIDEuMTU5MDkwOTA5MXJlbSAgKyAgMC40NTQ1NDU0NTQ1dncgLCAxLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMS4yNXJlbSAsIDEuMTU5MDkwOTA5MXJlbSAgKyAgMC40NTQ1NDU0NTQ1dncgLCAxLjVyZW0gKSkge1xuICAgIC52YWx1ZXNfX2xhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjI1cmVtICsgMC4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC52YWx1ZXNfX2xhYmVsIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbn1cbi52YWx1ZXNfX3RleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1hcmdpbi1ib3R0b206IDE5cHg7XG59XG4udmFsdWVzX19tb3JlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnZhbHVlc19fbW9yZTpob3ZlciAudmFsdWVzX19pY29uIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpO1xufVxuLnZhbHVlc19faWNvbiB7XG4gIGZpbGw6IHZhcigtLWRhcmstY2wpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xufVxuXG4uc3dpcGVyLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDhyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggNC4zNzVyZW0gLCAzLjA1NjgxODE4MThyZW0gICsgIDYuNTkwOTA5MDkwOXZ3ICwgOHJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggNC4zNzVyZW0gLCAzLjA1NjgxODE4MThyZW0gICsgIDYuNTkwOTA5MDkwOXZ3ICwgOHJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDQuMzc1cmVtICwgMy4wNTY4MTgxODE4cmVtICArICA2LjU5MDkwOTA5MDl2dyAsIDhyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbiB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYyg0LjM3NXJlbSArIDMuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogNC4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbiB7XG4gICAgcGFkZGluZy1ib3R0b206IDEyLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMS41MTEzNjM2MzY0cmVtICArICAxNC4zMTgxODE4MTgydncgLCAxMi4yNXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC4zNzVyZW0gLCAxLjUxMTM2MzYzNjRyZW0gICsgIDE0LjMxODE4MTgxODJ2dyAsIDEyLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC4zNzVyZW0gLCAxLjUxMTM2MzYzNjRyZW0gICsgIDE0LjMxODE4MTgxODJ2dyAsIDEyLjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb24ge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoNC4zNzVyZW0gKyA3Ljg3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbiB7XG4gICAgcGFkZGluZy1ib3R0b206IDQuMzc1cmVtO1xuICB9XG59XG4uc3dpcGVyLXNlY3Rpb25fX2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zd2lwZXItc2VjdGlvbl9fY29udGFpbmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjMlO1xuICB0b3A6IDIzJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX19jb250YWluZXI6OmFmdGVyIHtcbiAgICB3aWR0aDogNDAuMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMTIuNXJlbSAsIDIuNDc3MjcyNzI3M3JlbSAgKyAgNTAuMTEzNjM2MzYzNnZ3ICwgNDAuMDYyNXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uX19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEyLjVyZW0gKyAyNy41NjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX19jb250YWluZXI6OmFmdGVyIHtcbiAgICB3aWR0aDogMTIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX19jb250YWluZXI6OmFmdGVyIHtcbiAgICBoZWlnaHQ6IDQwLjA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGhlaWdodDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgICBoZWlnaHQ6IGNsYW1wKCAxMi41cmVtICwgMi40NzcyNzI3MjczcmVtICArICA1MC4xMTM2MzYzNjM2dncgLCA0MC4wNjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGhlaWdodDogY2xhbXAoIDEyLjVyZW0gLCAyLjQ3NzI3MjcyNzNyZW0gICsgIDUwLjExMzYzNjM2MzZ2dyAsIDQwLjA2MjVyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTIuNXJlbSArIDI3LjU2MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLXNlY3Rpb25fX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIGhlaWdodDogMTIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KSB7XG4gIC5zd2lwZXItc2VjdGlvbl9fY29udGFpbmVyOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnN3aXBlci1zZWN0aW9uX193cmFwcGVyIHtcbiAgei1pbmRleDogMjtcbn1cbi5zd2lwZXItc2VjdGlvbl9fc2xpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX19pbWctcXVvdGUge1xuICAgIHdpZHRoOiAyLjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxLjE4NzVyZW0gLCAwLjc1NTY4MTgxODJyZW0gICsgIDIuMTU5MDkwOTA5MXZ3ICwgMi4zNzVyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbl9faW1nLXF1b3RlIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMS4xODc1cmVtICwgMC43NTU2ODE4MTgycmVtICArICAyLjE1OTA5MDkwOTF2dyAsIDIuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggMS4xODc1cmVtICwgMC43NTU2ODE4MTgycmVtICArICAyLjE1OTA5MDkwOTF2dyAsIDIuMzc1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX2ltZy1xdW90ZSB7XG4gICAgICB3aWR0aDogY2FsYygxLjE4NzVyZW0gKyAxLjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLXNlY3Rpb25fX2ltZy1xdW90ZSB7XG4gICAgd2lkdGg6IDEuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX19pbWctcXVvdGUge1xuICAgIG1hcmdpbi1ib3R0b206IDUuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgLTAuMzg2MzYzNjM2NHJlbSAgKyAgOC4xODE4MTgxODE4dncgLCA1Ljc1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX2ltZy1xdW90ZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIC0wLjM4NjM2MzYzNjRyZW0gICsgIDguMTgxODE4MTgxOHZ3ICwgNS43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIC0wLjM4NjM2MzYzNjRyZW0gICsgIDguMTgxODE4MTgxOHZ3ICwgNS43NXJlbSApKSB7XG4gICAgLnN3aXBlci1zZWN0aW9uX19pbWctcXVvdGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjI1cmVtICsgNC41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX19pbWctcXVvdGUge1xuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gIH1cbn1cbi5zd2lwZXItc2VjdGlvbl9fdGV4dCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS40O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjczMjk1NDU0NTVyZW0gICsgIDEuMDIyNzI3MjcyN3Z3ICwgMS41cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC45Mzc1cmVtICwgMC43MzI5NTQ1NDU1cmVtICArICAxLjAyMjcyNzI3Mjd2dyAsIDEuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjczMjk1NDU0NTVyZW0gICsgIDEuMDIyNzI3MjcyN3Z3ICwgMS41cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuOTM3NXJlbSArIDAuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5zd2lwZXItc2VjdGlvbl9fdGV4dCB7XG4gICAgd2lkdGg6IDQyLjA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTguNzVyZW0gLCAxMC4yNzI3MjcyNzI3cmVtICArICA0Mi4zODYzNjM2MzY0dncgLCA0Mi4wNjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICAgICAgd2lkdGg6IGNsYW1wKCAxOC43NXJlbSAsIDEwLjI3MjcyNzI3MjdyZW0gICsgIDQyLjM4NjM2MzYzNjR2dyAsIDQyLjA2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxOC43NXJlbSAsIDEwLjI3MjcyNzI3MjdyZW0gICsgIDQyLjM4NjM2MzYzNjR2dyAsIDQyLjA2MjVyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbl9fdGV4dCB7XG4gICAgICB3aWR0aDogY2FsYygxOC43NXJlbSArIDIzLjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICAgIHdpZHRoOiAxOC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX190ZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjUyODQwOTA5MDlyZW0gICsgIDIuMDQ1NDU0NTQ1NXZ3ICwgMi4wNjI1cmVtICkpIHtcbiAgICAuc3dpcGVyLXNlY3Rpb25fX3RleHQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNTI4NDA5MDkwOXJlbSAgKyAgMi4wNDU0NTQ1NDU1dncgLCAyLjA2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNTI4NDA5MDkwOXJlbSAgKyAgMi4wNDU0NTQ1NDU1dncgLCAyLjA2MjVyZW0gKSkge1xuICAgIC5zd2lwZXItc2VjdGlvbl9fdGV4dCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDAuOTM3NXJlbSArIDEuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnN3aXBlci1zZWN0aW9uX190ZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjkzNzVyZW07XG4gIH1cbn1cbi5zd2lwZXItc2VjdGlvbl9fYXV0aG9yIHtcbiAgY29sb3I6ICM5Njk2OTY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG59XG5cbi5zZWNvbmQtY291bnRlciB7XG4gIHotaW5kZXg6IDI7XG4gIGxlZnQ6IDQ3JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnNlY29uZC1jb3VudGVyIHtcbiAgICBib3R0b206IC03LjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGJvdHRvbTogY2xhbXAoIC03LjVyZW0gLCAyLjcyNzI3MjgxMjVyZW0gICsgIC0xMy42MzYzNjM3NXZ3ICwgMC4wMDAwMDAwNjI1cmVtICkpIHtcbiAgICAuc2Vjb25kLWNvdW50ZXIge1xuICAgICAgYm90dG9tOiBjbGFtcCggLTcuNXJlbSAsIDIuNzI3MjcyODEyNXJlbSAgKyAgLTEzLjYzNjM2Mzc1dncgLCAwLjAwMDAwMDA2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoYm90dG9tOiBjbGFtcCggLTcuNXJlbSAsIDIuNzI3MjcyODEyNXJlbSAgKyAgLTEzLjYzNjM2Mzc1dncgLCAwLjAwMDAwMDA2MjVyZW0gKSkge1xuICAgIC5zZWNvbmQtY291bnRlciB7XG4gICAgICBib3R0b206IGNhbGMoMC4wMDAwMDAwNjI1cmVtICsgLTcuNTAwMDAwMDYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zZWNvbmQtY291bnRlciB7XG4gICAgYm90dG9tOiAwLjAwMDAwMDA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5zZWNvbmQtY291bnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnNlY29uZC1jb3VudGVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNDA1cHg7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnNlY29uZC1jb3VudGVyOjpiZWZvcmUge1xuICAgIGxlZnQ6IC0zNC4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobGVmdDogY2xhbXAoIC0zNC4yNXJlbSAsIDAuOTQ4ODYzNjM2NHJlbSAgKyAgLTQ2LjkzMTgxODE4MTh2dyAsIC04LjQzNzVyZW0gKSkge1xuICAgIC5zZWNvbmQtY291bnRlcjo6YmVmb3JlIHtcbiAgICAgIGxlZnQ6IGNsYW1wKCAtMzQuMjVyZW0gLCAwLjk0ODg2MzYzNjRyZW0gICsgIC00Ni45MzE4MTgxODE4dncgLCAtOC40Mzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGxlZnQ6IGNsYW1wKCAtMzQuMjVyZW0gLCAwLjk0ODg2MzYzNjRyZW0gICsgIC00Ni45MzE4MTgxODE4dncgLCAtOC40Mzc1cmVtICkpIHtcbiAgICAuc2Vjb25kLWNvdW50ZXI6OmJlZm9yZSB7XG4gICAgICBsZWZ0OiBjYWxjKC04LjQzNzVyZW0gKyAtMjUuODEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zZWNvbmQtY291bnRlcjo6YmVmb3JlIHtcbiAgICBsZWZ0OiAtOC40Mzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc2Vjb25kLWNvdW50ZXI6OmJlZm9yZSB7XG4gICAgd2lkdGg6IDEwLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggNXJlbSAsIDNyZW0gICsgIDEwdncgLCAxMC41cmVtICkpIHtcbiAgICAuc2Vjb25kLWNvdW50ZXI6OmJlZm9yZSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDVyZW0gLCAzcmVtICArICAxMHZ3ICwgMTAuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDVyZW0gLCAzcmVtICArICAxMHZ3ICwgMTAuNXJlbSApKSB7XG4gICAgLnNlY29uZC1jb3VudGVyOjpiZWZvcmUge1xuICAgICAgd2lkdGg6IGNhbGMoNXJlbSArIDUuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5zZWNvbmQtY291bnRlcjo6YmVmb3JlIHtcbiAgICB3aWR0aDogNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLnNlY29uZC1jb3VudGVyOjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5zZWNvbmQtY291bnRlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTAwcHg7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuc2Vjb25kLWNvdW50ZXI6OmFmdGVyIHtcbiAgICByaWdodDogLTM2cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChyaWdodDogY2xhbXAoIC0zNnJlbSAsIDIuODYzNjM2MzYzNnJlbSAgKyAgLTUxLjgxODE4MTgxODJ2dyAsIC03LjVyZW0gKSkge1xuICAgIC5zZWNvbmQtY291bnRlcjo6YWZ0ZXIge1xuICAgICAgcmlnaHQ6IGNsYW1wKCAtMzZyZW0gLCAyLjg2MzYzNjM2MzZyZW0gICsgIC01MS44MTgxODE4MTgydncgLCAtNy41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHJpZ2h0OiBjbGFtcCggLTM2cmVtICwgMi44NjM2MzYzNjM2cmVtICArICAtNTEuODE4MTgxODE4MnZ3ICwgLTcuNXJlbSApKSB7XG4gICAgLnNlY29uZC1jb3VudGVyOjphZnRlciB7XG4gICAgICByaWdodDogY2FsYygtNy41cmVtICsgLTI4LjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc2Vjb25kLWNvdW50ZXI6OmFmdGVyIHtcbiAgICByaWdodDogLTcuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLnNlY29uZC1jb3VudGVyOjphZnRlciB7XG4gICAgd2lkdGg6IDQuMzc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMzkyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjM3NXJlbSApKSB7XG4gICAgLnNlY29uZC1jb3VudGVyOjphZnRlciB7XG4gICAgICB3aWR0aDogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMzkyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDIuMTg3NXJlbSAsIDEuMzkyMDQ1NDU0NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCA0LjM3NXJlbSApKSB7XG4gICAgLnNlY29uZC1jb3VudGVyOjphZnRlciB7XG4gICAgICB3aWR0aDogY2FsYygyLjE4NzVyZW0gKyAyLjE4NzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuc2Vjb25kLWNvdW50ZXI6OmFmdGVyIHtcbiAgICB3aWR0aDogMi4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuc2Vjb25kLWNvdW50ZXI6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jbGllbnRzIHtcbiAgICBwYWRkaW5nLXRvcDogOS42ODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDQuNjg3NXJlbSAsIDIuODY5MzE4MTgxOHJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA5LjY4NzVyZW0gKSkge1xuICAgIC5jbGllbnRzIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggNC42ODc1cmVtICwgMi44NjkzMTgxODE4cmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDkuNjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDQuNjg3NXJlbSAsIDIuODY5MzE4MTgxOHJlbSAgKyAgOS4wOTA5MDkwOTA5dncgLCA5LjY4NzVyZW0gKSkge1xuICAgIC5jbGllbnRzIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDQuNjg3NXJlbSArIDUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY2xpZW50cyB7XG4gICAgcGFkZGluZy10b3A6IDQuNjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNsaWVudHMge1xuICAgIHBhZGRpbmctYm90dG9tOiA5LjY4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC42ODc1cmVtICwgMi44NjkzMTgxODE4cmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDkuNjg3NXJlbSApKSB7XG4gICAgLmNsaWVudHMge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCA0LjY4NzVyZW0gLCAyLjg2OTMxODE4MThyZW0gICsgIDkuMDkwOTA5MDkwOXZ3ICwgOS42ODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggNC42ODc1cmVtICwgMi44NjkzMTgxODE4cmVtICArICA5LjA5MDkwOTA5MDl2dyAsIDkuNjg3NXJlbSApKSB7XG4gICAgLmNsaWVudHMge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoNC42ODc1cmVtICsgNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jbGllbnRzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNC42ODc1cmVtO1xuICB9XG59XG4uY2xpZW50c19fY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA5NzVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NzkuOThweCkge1xuICAuY2xpZW50c19fY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY2xpZW50c19fdGl0bGUtYmxvY2sge1xuICAgIG1hcmdpbi1yaWdodDogMTYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1yaWdodDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIC01LjkwOTA5MDgyMzlyZW0gICsgIDI5LjU0NTQ1NDQzMTh2dyAsIDE2LjI1cmVtICkpIHtcbiAgICAuY2xpZW50c19fdGl0bGUtYmxvY2sge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTUuOTA5MDkwODIzOXJlbSAgKyAgMjkuNTQ1NDU0NDMxOHZ3ICwgMTYuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTUuOTA5MDkwODIzOXJlbSAgKyAgMjkuNTQ1NDU0NDMxOHZ3ICwgMTYuMjVyZW0gKSkge1xuICAgIC5jbGllbnRzX190aXRsZS1ibG9jayB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMC4wMDAwMDAwNjI1cmVtICsgMTYuMjQ5OTk5OTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jbGllbnRzX190aXRsZS1ibG9jayB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjAwMDAwMDA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NzkuOThweCkge1xuICAuY2xpZW50c19fdGl0bGUtYmxvY2sge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5jbGllbnRzX191cHBlcnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jbGllbnRzX191cHBlcnRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjY4NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjkzNzVyZW0gLCAwLjY2NDc3MjcyNzNyZW0gICsgIDEuMzYzNjM2MzYzNnZ3ICwgMS42ODc1cmVtICkpIHtcbiAgICAuY2xpZW50c19fdXBwZXJ0aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC42NjQ3NzI3MjczcmVtICArICAxLjM2MzYzNjM2MzZ2dyAsIDEuNjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC42NjQ3NzI3MjczcmVtICArICAxLjM2MzYzNjM2MzZ2dyAsIDEuNjg3NXJlbSApKSB7XG4gICAgLmNsaWVudHNfX3VwcGVydGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygwLjkzNzVyZW0gKyAwLjc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNsaWVudHNfX3VwcGVydGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDAuOTM3NXJlbTtcbiAgfVxufVxuLmNsaWVudHNfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jbGllbnRzX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAyLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMS4yNzI3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTI1cmVtICkpIHtcbiAgICAuY2xpZW50c19fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMS4yNzI3MjcyNzI3cmVtICArICAxLjEzNjM2MzYzNjR2dyAsIDIuMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDEuNXJlbSAsIDEuMjcyNzI3MjcyN3JlbSAgKyAgMS4xMzYzNjM2MzY0dncgLCAyLjEyNXJlbSApKSB7XG4gICAgLmNsaWVudHNfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjVyZW0gKyAwLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jbGllbnRzX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5jbGllbnRzX190aXRsZSB7XG4gICAgd2lkdGg6IDE2Ljc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDcuODEyNXJlbSAsIDQuNTYyNXJlbSAgKyAgMTYuMjV2dyAsIDE2Ljc1cmVtICkpIHtcbiAgICAuY2xpZW50c19fdGl0bGUge1xuICAgICAgd2lkdGg6IGNsYW1wKCA3LjgxMjVyZW0gLCA0LjU2MjVyZW0gICsgIDE2LjI1dncgLCAxNi43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDcuODEyNXJlbSAsIDQuNTYyNXJlbSAgKyAgMTYuMjV2dyAsIDE2Ljc1cmVtICkpIHtcbiAgICAuY2xpZW50c19fdGl0bGUge1xuICAgICAgd2lkdGg6IGNhbGMoNy44MTI1cmVtICsgOC45Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNsaWVudHNfX3RpdGxlIHtcbiAgICB3aWR0aDogNy44MTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzc5Ljk4cHgpIHtcbiAgLmNsaWVudHNfX3RpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG4uY2xpZW50c19fbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNsaWVudHNfX2xpc3Qge1xuICAgIHJvdy1nYXA6IDMuMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChyb3ctZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAxLjQyMDQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMy4xMjVyZW0gKSkge1xuICAgIC5jbGllbnRzX19saXN0IHtcbiAgICAgIHJvdy1nYXA6IGNsYW1wKCAxLjg3NXJlbSAsIDEuNDIwNDU0NTQ1NXJlbSAgKyAgMi4yNzI3MjcyNzI3dncgLCAzLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChyb3ctZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAxLjQyMDQ1NDU0NTVyZW0gICsgIDIuMjcyNzI3MjcyN3Z3ICwgMy4xMjVyZW0gKSkge1xuICAgIC5jbGllbnRzX19saXN0IHtcbiAgICAgIHJvdy1nYXA6IGNhbGMoMS44NzVyZW0gKyAxLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNsaWVudHNfX2xpc3Qge1xuICAgIHJvdy1nYXA6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzc5Ljk4cHgpIHtcbiAgLmNsaWVudHNfX2xpc3Qge1xuICAgIHdpZHRoOiA3MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm5ldyB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMi4zMjk1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAxMHJlbSApKSB7XG4gICAgLm5ldyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMi4zMjk1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAxMHJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDQuMzc1cmVtICwgMi4zMjk1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAxMHJlbSApKSB7XG4gICAgLm5ldyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyg0LjM3NXJlbSArIDUuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm5ldyB7XG4gICAgcGFkZGluZy1ib3R0b206IDQuMzc1cmVtO1xuICB9XG59XG4ubmV3X19jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubmV3X19jb250YWluZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm5ld19fY29udGFpbmVyOjphZnRlciB7XG4gICAgYm90dG9tOiAtMTByZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGJvdHRvbTogY2xhbXAoIC0xMHJlbSAsIC0yLjMyOTU0NTQ1NDVyZW0gICsgIC0xMC4yMjcyNzI3MjczdncgLCAtNC4zNzVyZW0gKSkge1xuICAgIC5uZXdfX2NvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgYm90dG9tOiBjbGFtcCggLTEwcmVtICwgLTIuMzI5NTQ1NDU0NXJlbSAgKyAgLTEwLjIyNzI3MjcyNzN2dyAsIC00LjM3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChib3R0b206IGNsYW1wKCAtMTByZW0gLCAtMi4zMjk1NDU0NTQ1cmVtICArICAtMTAuMjI3MjcyNzI3M3Z3ICwgLTQuMzc1cmVtICkpIHtcbiAgICAubmV3X19jb250YWluZXI6OmFmdGVyIHtcbiAgICAgIGJvdHRvbTogY2FsYygtNC4zNzVyZW0gKyAtNS42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubmV3X19jb250YWluZXI6OmFmdGVyIHtcbiAgICBib3R0b206IC00LjM3NXJlbTtcbiAgfVxufVxuLm5ld19fdGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubmV3X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxLjVyZW0gLCAwLjk1NDU0NTQ1NDVyZW0gICsgIDIuNzI3MjcyNzI3M3Z3ICwgM3JlbSApKSB7XG4gICAgLm5ld19fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMC45NTQ1NDU0NTQ1cmVtICArICAyLjcyNzI3MjcyNzN2dyAsIDNyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMC45NTQ1NDU0NTQ1cmVtICArICAyLjcyNzI3MjcyNzN2dyAsIDNyZW0gKSkge1xuICAgIC5uZXdfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjVyZW0gKyAxLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubmV3X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5uZXdfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuODc1cmVtICwgMC41MTEzNjM2MzY0cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAubmV3X190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS44NzVyZW0gLCAwLjUxMTM2MzYzNjRyZW0gICsgIDYuODE4MTgxODE4MnZ3ICwgNS42MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuODc1cmVtICwgMC41MTEzNjM2MzY0cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDUuNjI1cmVtICkpIHtcbiAgICAubmV3X190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuODc1cmVtICsgMy43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5uZXdfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjg3NXJlbTtcbiAgfVxufVxuLm5ld19fbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubmV3X19saXN0IHtcbiAgICBnYXA6IDEuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChnYXA6IGNsYW1wKCAxLjg3NXJlbSAsIDIuNzI3MjcyNzI3M3JlbSAgKyAgLTEuMTM2MzYzNjM2NHZ3ICwgMi41cmVtICkpIHtcbiAgICAubmV3X19saXN0IHtcbiAgICAgIGdhcDogY2xhbXAoIDEuODc1cmVtICwgMi43MjcyNzI3MjczcmVtICArICAtMS4xMzYzNjM2MzY0dncgLCAyLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMS44NzVyZW0gLCAyLjcyNzI3MjcyNzNyZW0gICsgIC0xLjEzNjM2MzYzNjR2dyAsIDIuNXJlbSApKSB7XG4gICAgLm5ld19fbGlzdCB7XG4gICAgICBnYXA6IGNhbGMoMi41cmVtICsgLTAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm5ld19fbGlzdCB7XG4gICAgZ2FwOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5uZXdfX2xpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjg3NXJlbSAsIDAuNzM4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA1cmVtICkpIHtcbiAgICAubmV3X19saXN0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjg3NXJlbSAsIDAuNzM4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjg3NXJlbSAsIDAuNzM4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA1cmVtICkpIHtcbiAgICAubmV3X19saXN0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS44NzVyZW0gKyAzLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5uZXdfX2xpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDEuODc1cmVtO1xuICB9XG59XG4ubmV3X19pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm5ld19faXRlbSB7XG4gICAgd2lkdGg6IDIzLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCAxNy41cmVtICwgMTUuNDU0NTQ1NDU0NXJlbSAgKyAgMTAuMjI3MjcyNzI3M3Z3ICwgMjMuMTI1cmVtICkpIHtcbiAgICAubmV3X19pdGVtIHtcbiAgICAgIHdpZHRoOiBjbGFtcCggMTcuNXJlbSAsIDE1LjQ1NDU0NTQ1NDVyZW0gICsgIDEwLjIyNzI3MjcyNzN2dyAsIDIzLjEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90ICh3aWR0aDogY2xhbXAoIDE3LjVyZW0gLCAxNS40NTQ1NDU0NTQ1cmVtICArICAxMC4yMjcyNzI3MjczdncgLCAyMy4xMjVyZW0gKSkge1xuICAgIC5uZXdfX2l0ZW0ge1xuICAgICAgd2lkdGg6IGNhbGMoMTcuNXJlbSArIDUuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLm5ld19faXRlbSB7XG4gICAgd2lkdGg6IDE3LjVyZW07XG4gIH1cbn1cbi5uZXdfX2RhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDM1JTtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm5ld19fZGF0ZSB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC42MjVyZW0gLCAwLjUzNDA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMC44NzVyZW0gKSkge1xuICAgIC5uZXdfX2RhdGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC42MjVyZW0gLCAwLjUzNDA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMC44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC42MjVyZW0gLCAwLjUzNDA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMC44NzVyZW0gKSkge1xuICAgIC5uZXdfX2RhdGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuNjI1cmVtICsgMC4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5uZXdfX2RhdGUge1xuICAgIGZvbnQtc2l6ZTogMC42MjVyZW07XG4gIH1cbn1cbi5uZXdfX2ltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubmV3X19pbWFnZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS42ODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC45Mzc1cmVtICwgMC42NjQ3NzI3MjczcmVtICArICAxLjM2MzYzNjM2MzZ2dyAsIDEuNjg3NXJlbSApKSB7XG4gICAgLm5ld19faW1hZ2Uge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNjY0NzcyNzI3M3JlbSAgKyAgMS4zNjM2MzYzNjM2dncgLCAxLjY4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuOTM3NXJlbSAsIDAuNjY0NzcyNzI3M3JlbSAgKyAgMS4zNjM2MzYzNjM2dncgLCAxLjY4NzVyZW0gKSkge1xuICAgIC5uZXdfX2ltYWdlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMC45Mzc1cmVtICsgMC43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5uZXdfX2ltYWdlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjkzNzVyZW07XG4gIH1cbn1cbi5uZXdfX3RleHQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm5ld19fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxcmVtICwgMC45MDkwOTA5MDkxcmVtICArICAwLjQ1NDU0NTQ1NDV2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5uZXdfX3RleHQge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMXJlbSAsIDAuOTA5MDkwOTA5MXJlbSAgKyAgMC40NTQ1NDU0NTQ1dncgLCAxLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDFyZW0gLCAwLjkwOTA5MDkwOTFyZW0gICsgIDAuNDU0NTQ1NDU0NXZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLm5ld19fdGV4dCB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMXJlbSArIDAuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubmV3X190ZXh0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5uZXdfX3RleHQge1xuICAgIHdpZHRoOiAxOC4zNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHdpZHRoOiBjbGFtcCggMTYuMjVyZW0gLCAxNS40NzcyNzI3MjczcmVtICArICAzLjg2MzYzNjM2MzZ2dyAsIDE4LjM3NXJlbSApKSB7XG4gICAgLm5ld19fdGV4dCB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE2LjI1cmVtICwgMTUuNDc3MjcyNzI3M3JlbSAgKyAgMy44NjM2MzYzNjM2dncgLCAxOC4zNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNi4yNXJlbSAsIDE1LjQ3NzI3MjcyNzNyZW0gICsgIDMuODYzNjM2MzYzNnZ3ICwgMTguMzc1cmVtICkpIHtcbiAgICAubmV3X190ZXh0IHtcbiAgICAgIHdpZHRoOiBjYWxjKDE2LjI1cmVtICsgMi4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubmV3X190ZXh0IHtcbiAgICB3aWR0aDogMTYuMjVyZW07XG4gIH1cbn1cbi5uZXdfX2J0biB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAud29yayB7XG4gICAgcGFkZGluZy10b3A6IDkuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIC0wLjE4MTgxODE4MThyZW0gICsgIDEzLjQwOTA5MDkwOTF2dyAsIDkuODc1cmVtICkpIHtcbiAgICAud29yayB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDIuNXJlbSAsIC0wLjE4MTgxODE4MThyZW0gICsgIDEzLjQwOTA5MDkwOTF2dyAsIDkuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMi41cmVtICwgLTAuMTgxODE4MTgxOHJlbSAgKyAgMTMuNDA5MDkwOTA5MXZ3ICwgOS44NzVyZW0gKSkge1xuICAgIC53b3JrIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDIuNXJlbSArIDcuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLndvcmsge1xuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC53b3JrIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogOS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMi41cmVtICwgLTAuMTgxODE4MTgxOHJlbSAgKyAgMTMuNDA5MDkwOTA5MXZ3ICwgOS44NzVyZW0gKSkge1xuICAgIC53b3JrIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMi41cmVtICwgLTAuMTgxODE4MTgxOHJlbSAgKyAgMTMuNDA5MDkwOTA5MXZ3ICwgOS44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAtMC4xODE4MTgxODE4cmVtICArICAxMy40MDkwOTA5MDkxdncgLCA5Ljg3NXJlbSApKSB7XG4gICAgLndvcmsge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMi41cmVtICsgNy4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAud29yayB7XG4gICAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcbiAgfVxufVxuLndvcmtfX2NvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi53b3JrX19ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NDkuOThweCkge1xuICAud29ya19fYmxvY2sge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbi53b3JrX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAud29ya19fdGl0bGUge1xuICAgIHdpZHRoOiAzMC4xODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzICh3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDEwLjMyOTU0NTQ1NDVyZW0gICsgIDI2LjQ3NzI3MjcyNzN2dyAsIDMwLjE4NzVyZW0gKSkge1xuICAgIC53b3JrX190aXRsZSB7XG4gICAgICB3aWR0aDogY2xhbXAoIDE1LjYyNXJlbSAsIDEwLjMyOTU0NTQ1NDVyZW0gICsgIDI2LjQ3NzI3MjcyNzN2dyAsIDMwLjE4NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAod2lkdGg6IGNsYW1wKCAxNS42MjVyZW0gLCAxMC4zMjk1NDU0NTQ1cmVtICArICAyNi40NzcyNzI3MjczdncgLCAzMC4xODc1cmVtICkpIHtcbiAgICAud29ya19fdGl0bGUge1xuICAgICAgd2lkdGg6IGNhbGMoMTUuNjI1cmVtICsgMTQuNTYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC53b3JrX190aXRsZSB7XG4gICAgd2lkdGg6IDE1LjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLndvcmtfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDYuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC53b3JrX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAzLjEyNXJlbSAsIDEuOTg4NjM2MzYzNnJlbSAgKyAgNS42ODE4MTgxODE4dncgLCA2LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDMuMTI1cmVtICwgMS45ODg2MzYzNjM2cmVtICArICA1LjY4MTgxODE4MTh2dyAsIDYuMjVyZW0gKSkge1xuICAgIC53b3JrX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMy4xMjVyZW0gKyAzLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC53b3JrX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAzLjEyNXJlbTtcbiAgfVxufVxuLndvcmtfX3RpdGxlIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG4ud29ya19fdGl0bGUgc3Bhbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcbn1cbi53b3JrX19pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQ3JTtcbiAgYm90dG9tOiAzOHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLndvcmtfX2ltZyB7XG4gICAgd2lkdGg6IDE0LjM3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAod2lkdGg6IGNsYW1wKCA3LjE4NzVyZW0gLCA0LjU3Mzg2MzYzNjRyZW0gICsgIDEzLjA2ODE4MTgxODJ2dyAsIDE0LjM3NXJlbSApKSB7XG4gICAgLndvcmtfX2ltZyB7XG4gICAgICB3aWR0aDogY2xhbXAoIDcuMTg3NXJlbSAsIDQuNTczODYzNjM2NHJlbSAgKyAgMTMuMDY4MTgxODE4MnZ3ICwgMTQuMzc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHdpZHRoOiBjbGFtcCggNy4xODc1cmVtICwgNC41NzM4NjM2MzY0cmVtICArICAxMy4wNjgxODE4MTgydncgLCAxNC4zNzVyZW0gKSkge1xuICAgIC53b3JrX19pbWcge1xuICAgICAgd2lkdGg6IGNhbGMoNy4xODc1cmVtICsgNy4xODc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLndvcmtfX2ltZyB7XG4gICAgd2lkdGg6IDcuMTg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY0OS45OHB4KSB7XG4gIC53b3JrX19pbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi53b3JrX19saW5rIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcbn1cbi53b3JrX19saW5rOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG59XG5cbjpyb290IHtcbiAgLS1kYXJrLWNsOiAjMEUwRTBFO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9udWxsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9ob21lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3V0aWxzL3ZhcnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QURHRDs7QUNEQTs7O0VBR0Msc0JBQUE7QURJRDs7QUNNQTs7RUFFQyxZQUFBO0VBQ0EsZ0JBQUE7QURIRDs7QUNLQTtFQUNDLGNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JETlk7RUNPWixvQkROVTtFQ1FWLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QURIRDs7QUNLQTs7O0VBR0Msb0JEbEJZO0VDbUJaLGtCQUFBO0VBQ0Esb0JBQUE7QURGRDs7QUNJQTtFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QURERDs7QUNHQTtFQUNDLGNBQUE7RUFDQSxxQkFBQTtBREFEOztBQ0VBO0VBQ0MsZ0JBQUE7QURDRDs7QUNDQTtFQUNDLG1CQUFBO0FERUQ7O0FDQUE7Ozs7OztFQU1DLG9CQUFBO0VBQ0Esa0JBQUE7QURHRDs7QUFIQztFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQU1GO0FBQ0E7RUFDQyxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0Q7QUFBQztFQUxEO0lBTUUsY0FBQTtFQUdBO0FBQ0Y7QUFEQztFQUNDLGNBQUE7QUFHRjtBQUFDO0VBQ0MsWUFBQTtBQUVGOztBQUVBOzs7OztDQUFBO0FBUUM7RUFFRSxnQkFBQTtFQUNBLGNBQUE7RUFJQyxvQkFBQTtBQUxKOztBRTlEQTtFQUNDLGtCQUFBO0FGaUVEO0FFaEVDO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7QUZrRUY7O0FFOURDO0VBQ0MsbUJBQUE7QUZpRUY7O0FHcEhBO0VBQ0MsZ0NBQUE7RUFDQSxXQUFBO0FIdUhEO0FHdEhDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FId0hGO0FHdkhFO0VBSEQ7SUFJRSw4QkFBQTtJQUNBLFlBQUE7RUgwSEQ7QUFDRjs7QUd0SEE7RUFDQyxrQkFBQTtBSHlIRDtBSXpERTtFRGpFRjtJQ2tFRyxrQkFBQTtFSjRERDtBQUNGO0FJekRDO0VBRUM7SUR4RUY7TUN5RUcsNEVBaEJjO0lKMkViO0VBQ0Y7RUl6REE7SUQ1RUY7TUM2RUcsMERBQUE7SUo0REM7RUFDRjtBQUNGO0FJMURFO0VEakZGO0lDa0ZHLG9CQUFBO0VKNkREO0FBQ0Y7O0FHMUlDO0VBR0MsYUFBQTtFQUNBLFdBQUE7QUgySUY7QUlwRkU7RUQzREQ7SUM0REUsc0JBQUE7RUp1RkQ7QUFDRjtBSXBGQztFQUVDO0lEbEVEO01DbUVFLGdGQWhCYztJSnNHYjtFQUNGO0VJcEZBO0lEdEVEO01DdUVFLDJEQUFBO0lKdUZDO0VBQ0Y7QUFDRjtBSXJGRTtFRDNFRDtJQzRFRSxzQkFBQTtFSndGRDtBQUNGO0FJMUdFO0VEM0REO0lDNERFLHlCQUFBO0VKNkdEO0FBQ0Y7QUkxR0M7RUFFQztJRGxFRDtNQ21FRSxtRkFoQmM7SUo0SGI7RUFDRjtFSTFHQTtJRHRFRDtNQ3VFRSw4REFBQTtJSjZHQztFQUNGO0FBQ0Y7QUkzR0U7RUQzRUQ7SUM0RUUseUJBQUE7RUo4R0Q7QUFDRjtBR3RMRTtFQUxEO0lBTUUsc0JBQUE7SUFDQSxtQkFBQTtFSHlMRDtBQUNGO0FHdExDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0FId0xGO0FJMUlFO0VEaEREO0lDaURFLHFCQUFBO0VKNklEO0FBQ0Y7QUkxSUM7RUFFQztJRHZERDtNQ3dERSw4RUFoQmM7SUo0SmI7RUFDRjtFSTFJQTtJRDNERDtNQzRERSwyREFBQTtJSjZJQztFQUNGO0FBQ0Y7QUkzSUU7RURoRUQ7SUNpRUUsc0JBQUE7RUo4SUQ7QUFDRjtBSWhLRTtFRGhERDtJQ2lERSxXQUFBO0VKbUtEO0FBQ0Y7QUloS0M7RUFFQztJRHZERDtNQ3dERSxvRUFoQmM7SUprTGI7RUFDRjtFSWhLQTtJRDNERDtNQzRERSxrREFBQTtJSm1LQztFQUNGO0FBQ0Y7QUlqS0U7RURoRUQ7SUNpRUUsYUFBQTtFSm9LRDtBQUNGO0FHaE9FO0VBTkQ7SUFPRSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsU0FBQTtJQUNBLE9BQUE7RUht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NUNFO01ENkNELDJEQUFBO0lKZ2lCQztFQUNGO0FBQ0Y7QUk5aEJFO0VDakRFO0lEa0RELHFCQUFBO0VKaWlCRDtBQUNGO0FJbmpCRTtFQ2pDRTtJRGtDRCxzQkFBQTtFSnNqQkQ7QUFDRjtBSW5qQkM7RUFFQztJQ3hDRTtNRHlDRCxnRkFoQmM7SUpxa0JiO0VBQ0Y7RUluakJBO0lDNUNFO01ENkNELDhEQUFBO0lKc2pCQztFQUNGO0FBQ0Y7QUlwakJFO0VDakRFO0lEa0RELHdCQUFBO0VKdWpCRDtBQUNGOztBS2htQkE7RUFFSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUxrbUJKO0FJL2tCRTtFQ3ZCRjtJRHdCRyxtQkFBQTtFSmtsQkQ7QUFDRjtBSS9rQkM7RUFFQztJQzlCRjtNRCtCRywyRUFoQmM7SUppbUJiO0VBQ0Y7RUkva0JBO0lDbENGO01EbUNHLHVEQUFBO0lKa2xCQztFQUNGO0FBQ0Y7QUlobEJFO0VDdkNGO0lEd0NHLGtCQUFBO0VKbWxCRDtBQUNGOztBSXJtQkU7RUNqQkY7SURrQkcsd0JBQUE7RUp5bUJEO0FBQ0Y7QUl0bUJDO0VBRUM7SUN4QkY7TUR5QkcsK0VBaEJjO0lKd25CYjtFQUNGO0VJdG1CQTtJQzVCRjtNRDZCRywyREFBQTtJSnltQkM7RUFDRjtBQUNGO0FJdm1CRTtFQ2pDRjtJRGtDRyxxQkFBQTtFSjBtQkQ7QUFDRjtBS3hvQkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBTDBvQlI7O0FLdm9CQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0FMMG9CSjs7QUt4b0JBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FMMm9CSjtBSTNvQkU7RUNGRjtJREdHLG9CQUFBO0VKOG9CRDtBQUNGO0FJM29CQztFQUVDO0lDVEY7TURVRyxvRkFoQmM7SUo2cEJiO0VBQ0Y7RUkzb0JBO0lDYkY7TURjRyx3RUFBQTtJSjhvQkM7RUFDRjtBQUNGO0FJNW9CRTtFQ2xCRjtJRG1CRyw0QkFBQTtFSitvQkQ7QUFDRjtBSy9wQkk7RUFKSjtJQUtRLGNBQUE7RUxrcUJOO0FBQ0Y7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RUFoQmM7SUo2NUJiO0VBQ0Y7RUkzNEJBO0lFeEZGO01GeUZHLHVEQUFBO0lKODRCQztFQUNGO0FBQ0Y7QUk1NEJFO0VFN0ZGO0lGOEZHLGlCQUFBO0VKKzRCRDtBQUNGO0FNMStCSTtFQUNJLGtCQUFBO0FONCtCUjs7QU14K0JBO0VBQ0ksa0JBQUE7RUFJQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FOdytCSjtBSTM2QkU7RUVwRUY7SUZxRUcsZ0JBQUE7RUo4NkJEO0FBQ0Y7QUkzNkJDO0VBRUM7SUUzRUY7TUY0RUcseUVBaEJjO0lKNjdCYjtFQUNGO0VJMzZCQTtJRS9FRjtNRmdGRyxtREFBQTtJSjg2QkM7RUFDRjtBQUNGO0FJNTZCRTtFRXBGRjtJRnFGRyxnQkFBQTtFSis2QkQ7QUFDRjtBSWo4QkU7RUVwRUY7SUZxRUcsYUFBQTtFSm84QkQ7QUFDRjtBSWo4QkM7RUFFQztJRTNFRjtNRjRFRyx5RUFoQmM7SUptOUJiO0VBQ0Y7RUlqOEJBO0lFL0VGO01GZ0ZHLHNEQUFBO0lKbzhCQztFQUNGO0FBQ0Y7QUlsOEJFO0VFcEZGO0lGcUZHLGVBQUE7RUpxOEJEO0FBQ0Y7QUl2OUJFO0VFcEVGO0lGcUVHLFdBQUE7RUowOUJEO0FBQ0Y7QUl2OUJDO0VBRUM7SUUzRUY7TUY0RUcsb0VBaEJjO0lKeStCYjtFQUNGO0VJdjlCQTtJRS9FRjtNRmdGRyxvREFBQTtJSjA5QkM7RUFDRjtBQUNGO0FJeDlCRTtFRXBGRjtJRnFGRyxlQUFBO0VKMjlCRDtBQUNGO0FNeGlDUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBRUEsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QU55aUNaO0FJcC9CRTtFRTNETTtJRjRETCxjQUFBO0VKdS9CRDtBQUNGO0FJcC9CQztFQUVDO0lFbEVNO01GbUVMLHVFQWhCYztJSnNnQ2I7RUFDRjtFSXAvQkE7SUV0RU07TUZ1RUwsb0RBQUE7SUp1L0JDO0VBQ0Y7QUFDRjtBSXIvQkU7RUUzRU07SUY0RUwsZUFBQTtFSncvQkQ7QUFDRjtBSTFnQ0U7RUUzRE07SUY0REwsY0FBQTtFSjZnQ0Q7QUFDRjtBSTFnQ0M7RUFFQztJRWxFTTtNRm1FTCwwREFoQmM7SUo0aENiO0VBQ0Y7RUkxZ0NBO0lFdEVNO01GdUVMLHFEQUFBO0lKNmdDQztFQUNGO0FBQ0Y7QUkzZ0NFO0VFM0VNO0lGNEVMLGVBQUE7RUo4Z0NEO0FBQ0Y7QUloaUNFO0VFakRFO0lGa0RELG1CQUFBO0VKbWlDRDtBQUNGO0FJaGlDQztFQUVDO0lFeERFO01GeURELDJFQWhCYztJSmtqQ2I7RUFDRjtFSWhpQ0E7SUU1REU7TUY2REQsdURBQUE7SUptaUNDO0VBQ0Y7QUFDRjtBSWppQ0U7RUVqRUU7SUZrRUQsa0JBQUE7RUpvaUNEO0FBQ0Y7O0FNam1DQTtFQUNRLGtCQUFBO0VBSUEsc0JBQUE7QU5pbUNSO0FJM2pDRTtFRTNDRjtJRjRDRyxlQUFBO0VKOGpDRDtBQUNGO0FJM2pDQztFQUVDO0lFbERGO01GbURHLHlFQWhCYztJSjZrQ2I7RUFDRjtFSTNqQ0E7SUV0REY7TUZ1REcsbURBQUE7SUo4akNDO0VBQ0Y7QUFDRjtBSTVqQ0U7RUUzREY7SUY0REcsYUFBQTtFSitqQ0Q7QUFDRjtBSWpsQ0U7RUUzQ0Y7SUY0Q0csYUFBQTtFSm9sQ0Q7QUFDRjtBSWpsQ0M7RUFFQztJRWxERjtNRm1ERyx3RUFoQmM7SUptbUNiO0VBQ0Y7RUlqbENBO0lFdERGO01GdURHLG9EQUFBO0lKb2xDQztFQUNGO0FBQ0Y7QUlsbENFO0VFM0RGO0lGNERHLGNBQUE7RUpxbENEO0FBQ0Y7QUl2bUNFO0VFM0NGO0lGNENHLGVBQUE7RUowbUNEO0FBQ0Y7QUl2bUNDO0VBRUM7SUVsREY7TUZtREcsMEVBaEJjO0lKeW5DYjtFQUNGO0VJdm1DQTtJRXRERjtNRnVERyxtREFBQTtJSjBtQ0M7RUFDRjtBQUNGO0FJeG1DRTtFRTNERjtJRjRERyxlQUFBO0VKMm1DRDtBQUNGO0FNbHFDSTtFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7QU5tcUNSO0FJbm9DRTtFRXJDRTtJRnNDRCxtQkFBQTtFSnNvQ0Q7QUFDRjtBSW5vQ0M7RUFFQztJRTVDRTtNRjZDRCwyRUFoQmM7SUpxcENiO0VBQ0Y7RUlub0NBO0lFaERFO01GaURELHVEQUFBO0lKc29DQztFQUNGO0FBQ0Y7QUlwb0NFO0VFckRFO0lGc0RELGtCQUFBO0VKdW9DRDtBQUNGO0FNeHJDUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBTjByQ1o7QU12ckNJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FOeXJDUjs7QU1yckNBO0VBQ0ksa0JBQUE7RUFLQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFFQSxnQkFBQTtFQUNBLHFEQUFBO0FObXJDSjtBSWhyQ0U7RUVkRjtJRmVHLGNBQUE7RUptckNEO0FBQ0Y7QUlockNDO0VBRUM7SUVyQkY7TUZzQkcscUVBaEJjO0lKa3NDYjtFQUNGO0VJaHJDQTtJRXpCRjtNRjBCRyxnREFBQTtJSm1yQ0M7RUFDRjtBQUNGO0FJanJDRTtFRTlCRjtJRitCRyxVQUFBO0VKb3JDRDtBQUNGO0FJdHNDRTtFRWRGO0lGZUcsZ0JBQUE7RUp5c0NEO0FBQ0Y7QUl0c0NDO0VBRUM7SUVyQkY7TUZzQkcsMEVBaEJjO0lKd3RDYjtFQUNGO0VJdHNDQTtJRXpCRjtNRjBCRyxtREFBQTtJSnlzQ0M7RUFDRjtBQUNGO0FJdnNDRTtFRTlCRjtJRitCRyxjQUFBO0VKMHNDRDtBQUNGO0FJNXRDRTtFRWRGO0lGZUcsZUFBQTtFSit0Q0Q7QUFDRjtBSTV0Q0M7RUFFQztJRXJCRjtNRnNCRyx5RUFoQmM7SUo4dUNiO0VBQ0Y7RUk1dENBO0lFekJGO01GMEJHLHNEQUFBO0lKK3RDQztFQUNGO0FBQ0Y7QUk3dENFO0VFOUJGO0lGK0JHLGdCQUFBO0VKZ3VDRDtBQUNGO0FJbHZDRTtFRWRGO0lGZUcsZ0JBQUE7RUpxdkNEO0FBQ0Y7QUlsdkNDO0VBRUM7SUVyQkY7TUZzQkcsMEVBaEJjO0lKb3dDYjtFQUNGO0VJbHZDQTtJRXpCRjtNRjBCRyx1REFBQTtJSnF2Q0M7RUFDRjtBQUNGO0FJbnZDRTtFRTlCRjtJRitCRyxpQkFBQTtFSnN2Q0Q7QUFDRjtBSXh3Q0U7RUVkRjtJRmVHLG9CQUFBO0VKMndDRDtBQUNGO0FJeHdDQztFQUVDO0lFckJGO01Gc0JHLDRFQWhCYztJSjB4Q2I7RUFDRjtFSXh3Q0E7SUV6QkY7TUYwQkcsd0RBQUE7SUoyd0NDO0VBQ0Y7QUFDRjtBSXp3Q0U7RUU5QkY7SUYrQkcsa0JBQUE7RUo0d0NEO0FBQ0Y7QU0veENJO0VBQ0kscUJBQUE7RUFDQSxpQ0FBQTtBTml5Q1I7O0FJbHlDRTtFRU1FO0lGTEQsZ0JBQUE7RUpzeUNEO0FBQ0Y7QUlueUNDO0VBRUM7SUVERTtNRkVELDBFQWhCYztJSnF6Q2I7RUFDRjtFSW55Q0E7SUVMRTtNRk1ELG9EQUFBO0lKc3lDQztFQUNGO0FBQ0Y7QUlweUNFO0VFVkU7SUZXRCxnQkFBQTtFSnV5Q0Q7QUFDRjs7QU05eUNBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FOaXpDSjtBSTl6Q0U7RUVXRjtJRlZHLGVBQUE7RUppMENEO0FBQ0Y7QUk5ekNDO0VBRUM7SUVJRjtNRkhHLHdFQWJlO0lKNjBDZDtFQUNGO0VJOXpDQTtJRUFGO01GQ0csa0RBQUE7SUppMENDO0VBQ0Y7QUFDRjtBSS96Q0U7RUVMRjtJRk1HLFdBQUE7RUprMENEO0FBQ0Y7QU1yMENJO0VBSko7SUFLUSxhQUFBO0VOdzBDTjtBQUNGOztBTXQwQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QU55MENKO0FJOTFDRTtFRW1CRjtJRmxCRyxnQkFBQTtFSmkyQ0Q7QUFDRjtBSTkxQ0M7RUFFQztJRVlGO01GWEcseUVBYmU7SUo2MkNkO0VBQ0Y7RUk5MUNBO0lFUUY7TUZQRyxtREFBQTtJSmkyQ0M7RUFDRjtBQUNGO0FJLzFDRTtFRUdGO0lGRkcsWUFBQTtFSmsyQ0Q7QUFDRjtBTTcxQ0k7RUFKSjtJQUtRLGFBQUE7RU5nMkNOO0FBQ0Y7O0FJejNDRTtFRStCRjtJRjlCRyxrQkFBQTtFSjYzQ0Q7QUFDRjtBSTEzQ0M7RUFFQztJRXdCRjtNRnZCRywyRUFoQmM7SUo0NENiO0VBQ0Y7RUkxM0NBO0lFb0JGO01GbkJHLHVEQUFBO0lKNjNDQztFQUNGO0FBQ0Y7QUkzM0NFO0VFZUY7SUZkRyxtQkFBQTtFSjgzQ0Q7QUFDRjtBTTkyQ0k7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBTmczQ1I7O0FNNzJDQTtFQUdJLGNBQUE7RUFDQSxrQkFBQTtBTjgyQ0o7QUl6NUNFO0VFdUNGO0lGdENHLGlCQUFBO0VKNDVDRDtBQUNGO0FJejVDQztFQUVDO0lFZ0NGO01GL0JHLDZFQWhCYztJSjI2Q2I7RUFDRjtFSXo1Q0E7SUU0QkY7TUYzQkcsdURBQUE7SUo0NUNDO0VBQ0Y7QUFDRjtBSTE1Q0U7RUV1QkY7SUZ0QkcsZ0JBQUE7RUo2NUNEO0FBQ0Y7QUkvNkNFO0VFdUNGO0lGdENHLHdCQUFBO0VKazdDRDtBQUNGO0FJLzZDQztFQUVDO0lFZ0NGO01GL0JHLCtFQWhCYztJSmk4Q2I7RUFDRjtFSS82Q0E7SUU0QkY7TUYzQkcsMkRBQUE7SUprN0NDO0VBQ0Y7QUFDRjtBSWg3Q0U7RUV1QkY7SUZ0QkcscUJBQUE7RUptN0NEO0FBQ0Y7QU16NUNJO0VBRUksZ0JBQUE7QU4wNUNSO0FJeDhDRTtFRTRDRTtJRjNDRCx3QkFBQTtFSjI4Q0Q7QUFDRjtBSXg4Q0M7RUFFQztJRXFDRTtNRnBDRCxrRkFoQmM7SUowOUNiO0VBQ0Y7RUl4OENBO0lFaUNFO01GaENELDZEQUFBO0lKMjhDQztFQUNGO0FBQ0Y7QUl6OENFO0VFNEJFO0lGM0JELHdCQUFBO0VKNDhDRDtBQUNGO0FNNzZDSTtFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7QU44NkNSO0FJbCtDRTtFRWlERTtJRmhERCxtQkFBQTtFSnErQ0Q7QUFDRjtBSWwrQ0M7RUFFQztJRTBDRTtNRnpDRCwwRUFoQmM7SUpvL0NiO0VBQ0Y7RUlsK0NBO0lFc0NFO01GckNELHNEQUFBO0lKcStDQztFQUNGO0FBQ0Y7QUluK0NFO0VFaUNFO0lGaENELGlCQUFBO0VKcytDRDtBQUNGOztBTWo4Q0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QU5vOENKO0FJNy9DRTtFRXVERjtJRnRERyxvQkFBQTtFSmdnREQ7QUFDRjtBSTcvQ0M7RUFFQztJRWdERjtNRi9DRyw2RUFoQmM7SUorZ0RiO0VBQ0Y7RUk3L0NBO0lFNENGO01GM0NHLDBEQUFBO0lKZ2dEQztFQUNGO0FBQ0Y7QUk5L0NFO0VFdUNGO0lGdENHLHNCQUFBO0VKaWdERDtBQUNGO0FJbmhERTtFRXVERjtJRnRERyxhQUFBO0VKc2hERDtBQUNGO0FJbmhEQztFQUVDO0lFZ0RGO01GL0NHLG9FQWhCYztJSnFpRGI7RUFDRjtFSW5oREE7SUU0Q0Y7TUYzQ0csZ0RBQUE7SUpzaERDO0VBQ0Y7QUFDRjtBSXBoREU7RUV1Q0Y7SUZ0Q0csV0FBQTtFSnVoREQ7QUFDRjtBTTcrQ0k7RUFMSjtJQU1RLHNCQUFBO0VOZy9DTjtBQUNGO0FJOWlERTtFRXVERjtJRnRERyxvQkFBQTtFSmlqREQ7QUFDRjtBSTlpREM7RUFFQztJRWdERjtNRi9DRyw0RUFoQmM7SUpna0RiO0VBQ0Y7RUk5aURBO0lFNENGO01GM0NHLHlEQUFBO0lKaWpEQztFQUNGO0FBQ0Y7QUkvaURFO0VFdUNGO0lGdENHLHFCQUFBO0VKa2pERDtBQUNGO0FNbmdESTtFQUdJLGtCQUFBO0FObWdEUjtBSXZrREU7RUVpRUU7SUZoRUQsaUJBQUE7RUowa0REO0FBQ0Y7QUl2a0RDO0VBRUM7SUUwREU7TUZ6REQsMEVBaEJjO0lKeWxEYjtFQUNGO0VJdmtEQTtJRXNERTtNRnJERCxxREFBQTtJSjBrREM7RUFDRjtBQUNGO0FJeGtERTtFRWlERTtJRmhERCxjQUFBO0VKMmtERDtBQUNGO0FJN2xERTtFRWlFRTtJRmhFRCxxQkFBQTtFSmdtREQ7QUFDRjtBSTdsREM7RUFFQztJRTBERTtNRnpERCw2RUFoQmM7SUorbURiO0VBQ0Y7RUk3bERBO0lFc0RFO01GckRELHlEQUFBO0lKZ21EQztFQUNGO0FBQ0Y7QUk5bERFO0VFaURFO0lGaERELG9CQUFBO0VKaW1ERDtBQUNGO0FNNWlESTtFQUVJLGdCQUFBO0FONmlEUjtBSXRuREU7RUV1RUU7SUZ0RUQsa0JBQUE7RUp5bkREO0FBQ0Y7QUl0bkRDO0VBRUM7SUVnRUU7TUYvREQsMkVBaEJjO0lKd29EYjtFQUNGO0VJdG5EQTtJRTRERTtNRjNERCx3REFBQTtJSnluREM7RUFDRjtBQUNGO0FJdm5ERTtFRXVERTtJRnRERCxtQkFBQTtFSjBuREQ7QUFDRjtBTWprRFE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFFQSxnQ0FBQTtBTmtrRFo7QUlwcERFO0VFMkVNO0lGMUVMLFlBQUE7RUp1cEREO0FBQ0Y7QUlwcERDO0VBRUM7SUVvRU07TUZuRUwsdUVBaEJjO0lKc3FEYjtFQUNGO0VJcHBEQTtJRWdFTTtNRi9ETCxzREFBQTtJSnVwREM7RUFDRjtBQUNGO0FJcnBERTtFRTJETTtJRjFETCxnQkFBQTtFSndwREQ7QUFDRjtBSTFxREU7RUVzRkU7SUZyRkQsaUJBQUE7RUo2cUREO0FBQ0Y7QUkxcURDO0VBRUM7SUUrRUU7TUY5RUQsNkVBaEJjO0lKNHJEYjtFQUNGO0VJMXFEQTtJRTJFRTtNRjFFRCx1REFBQTtJSjZxREM7RUFDRjtBQUNGO0FJM3FERTtFRXNFRTtJRnJFRCxnQkFBQTtFSjhxREQ7QUFDRjtBTXRtREk7RUFHSSxnQkFBQTtBTnNtRFI7QUluc0RFO0VFMEZFO0lGekZELG9CQUFBO0VKc3NERDtBQUNGO0FJbnNEQztFQUVDO0lFbUZFO01GbEZELDhFQWhCYztJSnF0RGI7RUFDRjtFSW5zREE7SUUrRUU7TUY5RUQseURBQUE7SUpzc0RDO0VBQ0Y7QUFDRjtBSXBzREU7RUUwRUU7SUZ6RUQsb0JBQUE7RUp1c0REO0FBQ0Y7QUl6dERFO0VFMEZFO0lGekZELHVCQUFBO0VKNHRERDtBQUNGO0FJenREQztFQUVDO0lFbUZFO01GbEZELGlGQWhCYztJSjJ1RGI7RUFDRjtFSXp0REE7SUUrRUU7TUY5RUQsOERBQUE7SUo0dERDO0VBQ0Y7QUFDRjtBSTF0REU7RUUwRUU7SUZ6RUQsd0JBQUE7RUo2dEREO0FBQ0Y7O0FNN29EQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBTmdwREo7QUl0dkRFO0VFa0dGO0lGakdHLHVCQUFBO0VKeXZERDtBQUNGO0FJdHZEQztFQUVDO0lFMkZGO01GMUZHLGdGQWhCYztJSnd3RGI7RUFDRjtFSXR2REE7SUV1RkY7TUZ0RkcsNERBQUE7SUp5dkRDO0VBQ0Y7QUFDRjtBSXZ2REU7RUVrRkY7SUZqRkcsc0JBQUE7RUowdkREO0FBQ0Y7QU1wcURJO0VBTko7SUFPUSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VOdXFETjtBQUNGO0FNdHFESTtFQVhKO0lBWVEsZUFBQTtFTnlxRE47QUFDRjs7QU10cURBO0VBSUksZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7QU5zcURKO0FJbnlERTtFRWtIRjtJRmpIRyxzQkFBQTtFSnN5REQ7QUFDRjtBSW55REM7RUFFQztJRTJHRjtNRjFHRywrRUFoQmM7SUpxekRiO0VBQ0Y7RUlueURBO0lFdUdGO01GdEdHLDJEQUFBO0lKc3lEQztFQUNGO0FBQ0Y7QUlweURFO0VFa0dGO0lGakdHLHFCQUFBO0VKdXlERDtBQUNGO0FJenpERTtFRWtIRjtJRmpIRyx5QkFBQTtFSjR6REQ7QUFDRjtBSXp6REM7RUFFQztJRTJHRjtNRjFHRyxrRkFoQmM7SUoyMERiO0VBQ0Y7RUl6ekRBO0lFdUdGO01GdEdHLDhEQUFBO0lKNHpEQztFQUNGO0FBQ0Y7QUkxekRFO0VFa0dGO0lGakdHLHdCQUFBO0VKNnpERDtBQUNGO0FJLzBERTtFRWtIRjtJRmpIRyxnQkFBQTtFSmsxREQ7QUFDRjtBSS8wREM7RUFFQztJRTJHRjtNRjFHRyxzRUFoQmM7SUppMkRiO0VBQ0Y7RUkvMERBO0lFdUdGO01GdEdHLGdEQUFBO0lKazFEQztFQUNGO0FBQ0Y7QUloMURFO0VFa0dGO0lGakdHLFdBQUE7RUptMUREO0FBQ0Y7QU1wdURRO0VBQ0kscUJBQUE7QU5zdURaO0FNcHVEUTtFQUNJLHdCQUFBO0FOc3VEWjtBTXB1RFE7RUFDSSxnQ0FBQTtBTnN1RFo7QU1sdURJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBR0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FOa3VEUjtBSXQzREU7RUU0SUU7SUYzSUQsY0FBQTtFSnkzREQ7QUFDRjtBSXQzREM7RUFFQztJRXFJRTtNRnBJRCxzRUFoQmM7SUp3NERiO0VBQ0Y7RUl0M0RBO0lFaUlFO01GaElELGtEQUFBO0lKeTNEQztFQUNGO0FBQ0Y7QUl2M0RFO0VFNEhFO0lGM0hELFlBQUE7RUowM0REO0FBQ0Y7QUk1NERFO0VFNElFO0lGM0lELGVBQUE7RUorNEREO0FBQ0Y7QUk1NERDO0VBRUM7SUVxSUU7TUZwSUQseUVBaEJjO0lKODVEYjtFQUNGO0VJNTREQTtJRWlJRTtNRmhJRCxzREFBQTtJSis0REM7RUFDRjtBQUNGO0FJNzRERTtFRTRIRTtJRjNIRCxnQkFBQTtFSmc1REQ7QUFDRjtBTTd3RFE7RUFUSjtJQVVRLGFBQUE7RU5neERWO0FBQ0Y7QU03d0RJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QU4rd0RSO0FNNXdESTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7QU44d0RSO0FNM3dEWTtFQUNJLHNCQUFBO0FONndEaEI7QU0xd0RZO0VBQ0ksV0FBQTtBTjR3RGhCO0FNendEUTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QU4yd0RaO0FNeHdEUTtFQUNJLGdDQUFBO0FOMHdEWjtBTXZ3RFE7RUFDSSxnQ0FBQTtBTnl3RFo7O0FNbHdEQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QU5xd0RKO0FJNThERTtFRWtNRjtJRmpNRyx1QkFBQTtFSis4REQ7QUFDRjtBSTU4REM7RUFFQztJRTJMRjtNRjFMRyxnRkFoQmM7SUo4OURiO0VBQ0Y7RUk1OERBO0lFdUxGO01GdExHLDZEQUFBO0lKKzhEQztFQUNGO0FBQ0Y7QUk3OERFO0VFa0xGO0lGakxHLHdCQUFBO0VKZzlERDtBQUNGOztBTXZ4REE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBTjB4REo7QU16eERJO0VBRUkscUZBQUE7RUFDQSxrQkFBQTtFQUVBLGdCQUFBO0FOeXhEUjtBSTkrREU7RUVnTkU7SUYvTUQsWUFBQTtFSmkvREQ7QUFDRjtBSTkrREM7RUFFQztJRXlNRTtNRnhNRCxzRUFoQmM7SUpnZ0ViO0VBQ0Y7RUk5K0RBO0lFcU1FO01GcE1ELGlEQUFBO0lKaS9EQztFQUNGO0FBQ0Y7QUkvK0RFO0VFZ01FO0lGL0xELGNBQUE7RUprL0REO0FBQ0Y7QUlwZ0VFO0VFZ05FO0lGL01ELGFBQUE7RUp1Z0VEO0FBQ0Y7QUlwZ0VDO0VBRUM7SUV5TUU7TUZ4TUQsdUVBaEJjO0lKc2hFYjtFQUNGO0VJcGdFQTtJRXFNRTtNRnBNRCxrREFBQTtJSnVnRUM7RUFDRjtBQUNGO0FJcmdFRTtFRWdNRTtJRi9MRCxlQUFBO0VKd2dFRDtBQUNGO0FNcDBEUTtFQUNJLDJCQUFBO0FOczBEWjtBTXIwRFc7RUFDSyw0QkFBQTtBTnUwRGhCO0FNcjBEVztFQUNDLGlCQUFBO0FOdTBEWjtBTWwwREk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBTm8wRFI7QU1qMERDO0VBQ08sa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUdBLDJCQUFBO0VBQ0EsK0JBQUE7QU5pMERSO0FJaGpFRTtFRXdPRDtJRnZPRSx3QkFBQTtFSm1qRUQ7QUFDRjtBSWhqRUM7RUFFQztJRWlPRDtNRmhPRSxrRkFoQmM7SUpra0ViO0VBQ0Y7RUloakVBO0lFNk5EO01GNU5FLDREQUFBO0lKbWpFQztFQUNGO0FBQ0Y7QUlqakVFO0VFd05EO0lGdk5FLHdCQUFBO0VKb2pFRDtBQUNGO0FJdGtFRTtFRXdPRDtJRnZPRSxzQkFBQTtFSnlrRUQ7QUFDRjtBSXRrRUM7RUFFQztJRWlPRDtNRmhPRSxnRkFoQmM7SUp3bEViO0VBQ0Y7RUl0a0VBO0lFNk5EO01GNU5FLDZEQUFBO0lKeWtFQztFQUNGO0FBQ0Y7QUl2a0VFO0VFd05EO0lGdk5FLHVCQUFBO0VKMGtFRDtBQUNGO0FNMTJEQztFQUNPLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QU40MkRSO0FNMzJEUTtFQUpQO0lBS1csZUFBQTtFTjgyRFY7QUFDRjtBTTMyREM7RUFDTyxlQUFBO0VBQ0EsV0FBQTtBTjYyRFI7QU01MkRRO0VBSFA7SUFJVyxlQUFBO0VOKzJEVjtBQUNGOztBSS9tRUU7RUVzUUY7SUZyUUcseUJBQUE7RUptbkVEO0FBQ0Y7QUlobkVDO0VBRUM7SUUrUEY7TUY5UEcsbUZBaEJjO0lKa29FYjtFQUNGO0VJaG5FQTtJRTJQRjtNRjFQRyw4REFBQTtJSm1uRUM7RUFDRjtBQUNGO0FJam5FRTtFRXNQRjtJRnJQRyx5QkFBQTtFSm9uRUQ7QUFDRjtBTTkzREk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FOZzREUjtBSTNvRUU7RUV3UUU7SUZ2UUQsWUFBQTtFSjhvRUQ7QUFDRjtBSTNvRUM7RUFFQztJRWlRRTtNRmhRRCxxRUFoQmM7SUo2cEViO0VBQ0Y7RUkzb0VBO0lFNlBFO01GNVBELGtEQUFBO0lKOG9FQztFQUNGO0FBQ0Y7QUk1b0VFO0VFd1BFO0lGdlBELGFBQUE7RUorb0VEO0FBQ0Y7QU1sNURJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBTm81RFI7QU1oNURZO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FOazVEaEI7QUl6cUVFO0VFMlJFO0lGMVJELGdCQUFBO0VKNHFFRDtBQUNGO0FJenFFQztFQUVDO0lFb1JFO01GblJELDRFQWhCYztJSjJyRWI7RUFDRjtFSXpxRUE7SUVnUkU7TUYvUUQsd0RBQUE7SUo0cUVDO0VBQ0Y7QUFDRjtBSTFxRUU7RUUyUUU7SUYxUUQsaUJBQUE7RUo2cUVEO0FBQ0Y7QUkvckVFO0VFMlJFO0lGMVJELGdCQUFBO0VKa3NFRDtBQUNGO0FJL3JFQztFQUVDO0lFb1JFO01GblJELDJFQWhCYztJSml0RWI7RUFDRjtFSS9yRUE7SUVnUkU7TUYvUUQsdURBQUE7SUprc0VDO0VBQ0Y7QUFDRjtBSWhzRUU7RUUyUUU7SUYxUUQsaUJBQUE7RUptc0VEO0FBQ0Y7QU1yN0RJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QU51N0RSO0FJMXRFRTtFRWdTRTtJRi9SRCxvQkFBQTtFSjZ0RUQ7QUFDRjtBSTF0RUM7RUFFQztJRXlSRTtNRnhSRCw4RUFoQmM7SUo0dUViO0VBQ0Y7RUkxdEVBO0lFcVJFO01GcFJELDJEQUFBO0lKNnRFQztFQUNGO0FBQ0Y7QUkzdEVFO0VFZ1JFO0lGL1FELHFCQUFBO0VKOHRFRDtBQUNGO0FJaHZFRTtFRWdTRTtJRi9SRCxxQkFBQTtFSm12RUQ7QUFDRjtBSWh2RUM7RUFFQztJRXlSRTtNRnhSRCw2RUFoQmM7SUprd0ViO0VBQ0Y7RUlodkVBO0lFcVJFO01GcFJELDBEQUFBO0lKbXZFQztFQUNGO0FBQ0Y7QUlqdkVFO0VFZ1JFO0lGL1FELHNCQUFBO0VKb3ZFRDtBQUNGO0FNaCtEUTtFQU5KO0lBT1EsZUFBQTtFTm0rRFY7QUFDRjtBTWgrREk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QU5rK0RSO0FJL3dFRTtFRWdURTtJRi9TRCxjQUFBO0VKa3hFRDtBQUNGO0FJL3dFQztFQUVDO0lFeVNFO01GeFNELHdFQWhCYztJSml5RWI7RUFDRjtFSS93RUE7SUVxU0U7TUZwU0QsZ0RBQUE7SUpreEVDO0VBQ0Y7QUFDRjtBSWh4RUU7RUVnU0U7SUYvUkQsY0FBQTtFSm14RUQ7QUFDRjtBSXJ5RUU7RUVnVEU7SUYvU0QsZ0JBQUE7RUp3eUVEO0FBQ0Y7QUlyeUVDO0VBRUM7SUV5U0U7TUZ4U0QsMkVBaEJjO0lKdXpFYjtFQUNGO0VJcnlFQTtJRXFTRTtNRnBTRCx1REFBQTtJSnd5RUM7RUFDRjtBQUNGO0FJdHlFRTtFRWdTRTtJRi9SRCxpQkFBQTtFSnl5RUQ7QUFDRjtBTXRnRUk7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FOd2dFUjtBTXRnRVE7RUFKSjtJQUtRLGVBQUE7SUFDQSxjQUFBO0VOeWdFVjtBQUNGO0FNdGdFSTtFQUNJLGtCQUFBO0FOd2dFUjtBTXZnRVE7RUFGSjtJQUdRLGFBQUE7RU4wZ0VWO0FBQ0Y7QU12Z0VJO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSw4RkFBQTtBTnlnRVI7QU12Z0VRO0VBUEo7SUFRUSxXQUFBO0lBQ0EsVUFBQTtFTjBnRVY7QUFDRjtBTXpnRVE7RUFYSjtJQVlRLFVBQUE7SUFDQSxTQUFBO0VONGdFVjtBQUNGOztBTXpnRUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QU40Z0VKO0FJdjJFRTtFRXVWRjtJRnRWRyxtQkFBQTtFSjAyRUQ7QUFDRjtBSXYyRUM7RUFFQztJRWdWRjtNRi9VRyw2RUFoQmM7SUp5M0ViO0VBQ0Y7RUl2MkVBO0lFNFVGO01GM1VHLDhEQUFBO0lKMDJFQztFQUNGO0FBQ0Y7QUl4MkVFO0VFdVVGO0lGdFVHLHdCQUFBO0VKMjJFRDtBQUNGO0FJNzNFRTtFRXVWRjtJRnRWRyxxQkFBQTtFSmc0RUQ7QUFDRjtBSTczRUM7RUFFQztJRWdWRjtNRi9VRyw4RUFoQmM7SUorNEViO0VBQ0Y7RUk3M0VBO0lFNFVGO01GM1VHLHNEQUFBO0lKZzRFQztFQUNGO0FBQ0Y7QUk5M0VFO0VFdVVGO0lGdFVHLHFCQUFBO0VKaTRFRDtBQUNGO0FJbjVFRTtFRXVWRjtJRnRWRyxzQkFBQTtFSnM1RUQ7QUFDRjtBSW41RUM7RUFFQztJRWdWRjtNRi9VRywrRUFoQmM7SUpxNkViO0VBQ0Y7RUluNUVBO0lFNFVGO01GM1VHLDREQUFBO0lKczVFQztFQUNGO0FBQ0Y7QUlwNUVFO0VFdVVGO0lGdFVHLHVCQUFBO0VKdTVFRDtBQUNGO0FNMWtFSTtFQUNJLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtBTjJrRVI7QUk5NkVFO0VFK1ZFO0lGOVZELGtCQUFBO0VKaTdFRDtBQUNGO0FJOTZFQztFQUVDO0lFd1ZFO01GdlZELDJFQWhCYztJSmc4RWI7RUFDRjtFSTk2RUE7SUVvVkU7TUZuVkQsd0RBQUE7SUppN0VDO0VBQ0Y7QUFDRjtBSS82RUU7RUUrVUU7SUY5VUQsbUJBQUE7RUprN0VEO0FBQ0Y7QUlwOEVFO0VFK1ZFO0lGOVZELGlCQUFBO0VKdThFRDtBQUNGO0FJcDhFQztFQUVDO0lFd1ZFO01GdlZELDZFQWhCYztJSnM5RWI7RUFDRjtFSXA4RUE7SUVvVkU7TUZuVkQsdURBQUE7SUp1OEVDO0VBQ0Y7QUFDRjtBSXI4RUU7RUUrVUU7SUY5VUQsZ0JBQUE7RUp3OEVEO0FBQ0Y7QU1ybkVRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QU5zbkVaO0FJbCtFRTtFRXFXTTtJRnBXTCxlQUFBO0VKcStFRDtBQUNGO0FJbCtFQztFQUVDO0lFOFZNO01GN1ZMLHlFQWhCYztJSm8vRWI7RUFDRjtFSWwrRUE7SUUwVk07TUZ6Vkwsc0RBQUE7SUpxK0VDO0VBQ0Y7QUFDRjtBSW4rRUU7RUVxVk07SUZwVkwsZ0JBQUE7RUpzK0VEO0FBQ0Y7QUl4L0VFO0VFK1ZFO0lGOVZELG1CQUFBO0VKMi9FRDtBQUNGO0FJeC9FQztFQUVDO0lFd1ZFO01GdlZELDZFQWhCYztJSjBnRmI7RUFDRjtFSXgvRUE7SUVvVkU7TUZuVkQsOERBQUE7SUoyL0VDO0VBQ0Y7QUFDRjtBSXovRUU7RUUrVUU7SUY5VUQsd0JBQUE7RUo0L0VEO0FBQ0Y7QU1ocUVRO0VBR0k7SUFFSSxVQUFBO0VOK3BFZDtBQUNGO0FJbmhGRTtFRWlYVTtJRmhYVCxhQUFBO0VKc2hGRDtBQUNGO0FJbmhGQztFQUVDO0lFMFdVO01GeldULHNFQWhCYztJSnFpRmI7RUFDRjtFSW5oRkE7SUVzV1U7TUZyV1QsbURBQUE7SUpzaEZDO0VBQ0Y7QUFDRjtBSXBoRkU7RUVpV1U7SUZoV1QsY0FBQTtFSnVoRkQ7QUFDRjs7QU05cUVBO0VBQ1EsZ0NBQUE7RUFDQSxhQUFBO0FOaXJFUjtBTWhyRVE7RUFIUjtJQUlZLGFBQUE7RU5tckVWO0FBQ0Y7QU1sckVFO0VBQ1UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBTm9yRVo7QUl6akZFO0VFaVlBO0lGaFlDLHNCQUFBO0VKNGpGRDtBQUNGO0FJempGQztFQUVDO0lFMFhBO01GelhDLGdGQWhCYztJSjJrRmI7RUFDRjtFSXpqRkE7SUVzWEE7TUZyWEMsMERBQUE7SUo0akZDO0VBQ0Y7QUFDRjtBSTFqRkU7RUVpWEE7SUZoWEMsc0JBQUE7RUo2akZEO0FBQ0Y7QUkva0ZFO0VFaVlBO0lGaFlDLDBCQUFBO0VKa2xGRDtBQUNGO0FJL2tGQztFQUVDO0lFMFhBO01GelhDLG9GQWhCYztJSmltRmI7RUFDRjtFSS9rRkE7SUVzWEE7TUZyWEMsOERBQUE7SUprbEZDO0VBQ0Y7QUFDRjtBSWhsRkU7RUVpWEE7SUZoWEMsd0JBQUE7RUptbEZEO0FBQ0Y7QU03dEVZO0VBQ0EsV0FBQTtFQUdBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FONnRFWjtBSTdtRkU7RUV3WVU7SUZ2WVQsaUJBQUE7RUpnbkZEO0FBQ0Y7QUk3bUZDO0VBRUM7SUVpWVU7TUZoWVQsMEVBaEJjO0lKK25GYjtFQUNGO0VJN21GQTtJRTZYVTtNRjVYVCxxREFBQTtJSmduRkM7RUFDRjtBQUNGO0FJOW1GRTtFRXdYVTtJRnZYVCxjQUFBO0VKaW5GRDtBQUNGO0FJbm9GRTtFRXdZVTtJRnZZVCxrQkFBQTtFSnNvRkQ7QUFDRjtBSW5vRkM7RUFFQztJRWlZVTtNRmhZVCwyRUFoQmM7SUpxcEZiO0VBQ0Y7RUlub0ZBO0lFNlhVO01GNVhULHNEQUFBO0lKc29GQztFQUNGO0FBQ0Y7QUlwb0ZFO0VFd1hVO0lGdlhULGVBQUE7RUp1b0ZEO0FBQ0Y7QU14d0VZO0VBVEE7SUFVSSxhQUFBO0VOMndFZDtBQUNGO0FNdndFRTtFQUNVLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBTnl3RVo7QUlwcUZFO0VFdVpBO0lGdFpDLG1CQUFBO0VKdXFGRDtBQUNGO0FJcHFGQztFQUVDO0lFZ1pBO01GL1lDLDRFQWhCYztJSnNyRmI7RUFDRjtFSXBxRkE7SUU0WUE7TUYzWUMsNERBQUE7SUp1cUZDO0VBQ0Y7QUFDRjtBSXJxRkU7RUV1WUE7SUZ0WUMsdUJBQUE7RUp3cUZEO0FBQ0Y7QUkxckZFO0VFdVpBO0lGdFpDLHFCQUFBO0VKNnJGRDtBQUNGO0FJMXJGQztFQUVDO0lFZ1pBO01GL1lDLDhFQWhCYztJSjRzRmI7RUFDRjtFSTFyRkE7SUU0WUE7TUYzWUMsc0RBQUE7SUo2ckZDO0VBQ0Y7QUFDRjtBSTNyRkU7RUV1WUE7SUZ0WUMscUJBQUE7RUo4ckZEO0FBQ0Y7QU05eUVZO0VBWFY7SUFZYyxZQUFBO0VOaXpFZDtBQUNGO0FNOXlFRTtFQUNVLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QU5nekVaO0FJMXRGRTtFRXVhQTtJRnRhQyxvQkFBQTtFSjZ0RkQ7QUFDRjtBSTF0RkM7RUFFQztJRWdhQTtNRi9aQyw0RUFoQmM7SUo0dUZiO0VBQ0Y7RUkxdEZBO0lFNFpBO01GM1pDLHVEQUFBO0lKNnRGQztFQUNGO0FBQ0Y7QUkzdEZFO0VFdVpBO0lGdFpDLG9CQUFBO0VKOHRGRDtBQUNGO0FJaHZGRTtFRXVhQTtJRnRhQyxxQkFBQTtFSm12RkQ7QUFDRjtBSWh2RkM7RUFFQztJRWdhQTtNRi9aQyx1RkFoQmM7SUprd0ZiO0VBQ0Y7RUlodkZBO0lFNFpBO01GM1pDLHlFQUFBO0lKbXZGQztFQUNGO0FBQ0Y7QUlqdkZFO0VFdVpBO0lGdFpDLDZCQUFBO0VKb3ZGRDtBQUNGO0FNejFFWTtFQU5WO0lBT2MsbUJBQUE7RU40MUVkO0FBQ0Y7QU16MUVFO0VBQ1Usa0JBQUE7QU4yMUVaO0FNeDFFZ0I7RUFDSSxXQUFBO0VBQ0EsMkJBQUE7QU4wMUVwQjtBTXoxRW9CO0VBQ0ksVUFBQTtFQUNBLDBCQUFBO0FOMjFFeEI7QU14MUVnQjtFQUNJLFVBQUE7QU4wMUVwQjtBTXIxRUU7RUFDVSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnREFBQTtFQWlCQSx3QkFBQTtBTnUwRVo7QU12MUVZO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0RBQUE7QU55MUVoQjtBTXgxRWdCO0VBWEo7SUFZUSxhQUFBO0VOMjFFbEI7QUFDRjtBTXIxRUU7RUFDVSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QU51MUVaOztBTWwxRUE7RUFDSSxhQUFBO0FOcTFFSjtBTXAxRUk7RUFGSjtJQUdRLHNCQUFBO0lBQ0EsdUJBQUE7RU51MUVOO0FBQ0Y7O0FJbDBGRTtFRThlRjtJRjdlRyxpQkFBQTtFSnMwRkQ7QUFDRjtBSW4wRkM7RUFFQztJRXVlRjtNRnRlRyw2RUFoQmM7SUpxMUZiO0VBQ0Y7RUluMEZBO0lFbWVGO01GbGVHLHNEQUFBO0lKczBGQztFQUNGO0FBQ0Y7QUlwMEZFO0VFOGRGO0lGN2RHLGdCQUFBO0VKdTBGRDtBQUNGO0FJejFGRTtFRThlRjtJRjdlRyxxQkFBQTtFSjQxRkQ7QUFDRjtBSXoxRkM7RUFFQztJRXVlRjtNRnRlRyw4RUFoQmM7SUoyMkZiO0VBQ0Y7RUl6MUZBO0lFbWVGO01GbGVHLHNEQUFBO0lKNDFGQztFQUNGO0FBQ0Y7QUkxMUZFO0VFOGRGO0lGN2RHLHFCQUFBO0VKNjFGRDtBQUNGO0FNMzNFRTtFQUNVLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBTjYzRVo7QUlyM0ZFO0VFb2ZBO0lGbmZDLHdCQUFBO0VKdzNGRDtBQUNGO0FJcjNGQztFQUVDO0lFNmVBO01GNWVDLGtGQWhCYztJSnU0RmI7RUFDRjtFSXIzRkE7SUV5ZUE7TUZ4ZUMsNERBQUE7SUp3M0ZDO0VBQ0Y7QUFDRjtBSXQzRkU7RUVvZUE7SUZuZUMsd0JBQUE7RUp5M0ZEO0FBQ0Y7O0FJMzRGRTtFRWtnQkY7SUZqZ0JHLGtCQUFBO0VKKzRGRDtBQUNGO0FJNTRGQztFQUVDO0lFMmZGO01GMWZHLHVFQWhCYztJSjg1RmI7RUFDRjtFSTU0RkE7SUV1ZkY7TUZ0Zkcsa0RBQUE7SUorNEZDO0VBQ0Y7QUFDRjtBSTc0RkU7RUVrZkY7SUZqZkcsaUJBQUE7RUpnNUZEO0FBQ0Y7QUlsNkZFO0VFa2dCRjtJRmpnQkcsdUJBQUE7RUpxNkZEO0FBQ0Y7QUlsNkZDO0VBRUM7SUUyZkY7TUYxZkcsZ0ZBaEJjO0lKbzdGYjtFQUNGO0VJbDZGQTtJRXVmRjtNRnRmRyw2REFBQTtJSnE2RkM7RUFDRjtBQUNGO0FJbjZGRTtFRWtmRjtJRmpmRyx3QkFBQTtFSnM2RkQ7QUFDRjtBTWg3RUk7RUFDSSxhQUFBO0FOazdFUjtBTWo3RVE7RUFGSjtJQUdRLHNCQUFBO0VObzdFVjtBQUNGOztBTWg3RUk7RUFESjtJQUVRLGNBQUE7RU5vN0VOO0FBQ0Y7QU1uN0VJO0VBQ0ksdUJBQUE7RUFDQSw0QkFBQTtBTnE3RVI7QU1wN0VRO0VBQ0ksb0JBQUE7QU5zN0VaO0FNbDdFSTtFQUNJLG1CQUFBO0FObzdFUjtBSWg5RkU7RUUyaEJFO0lGMWhCRCxnQkFBQTtFSm05RkQ7QUFDRjtBSWg5RkM7RUFFQztJRW9oQkU7TUZuaEJELDRFQWhCYztJSmsrRmI7RUFDRjtFSWg5RkE7SUVnaEJFO01GL2dCRCx3REFBQTtJSm05RkM7RUFDRjtBQUNGO0FJajlGRTtFRTJnQkU7SUYxZ0JELGlCQUFBO0VKbzlGRDtBQUNGO0FJdCtGRTtFRTJoQkU7SUYxaEJELGlCQUFBO0VKeStGRDtBQUNGO0FJdCtGQztFQUVDO0lFb2hCRTtNRm5oQkQsNEVBaEJjO0lKdy9GYjtFQUNGO0VJdCtGQTtJRWdoQkU7TUYvZ0JELHVEQUFBO0lKeStGQztFQUNGO0FBQ0Y7QUl2K0ZFO0VFMmdCRTtJRjFnQkQsaUJBQUE7RUowK0ZEO0FBQ0Y7QUk1L0ZFO0VFaWlCRTtJRmhpQkQsaUJBQUE7RUorL0ZEO0FBQ0Y7QUk1L0ZDO0VBRUM7SUUwaEJFO01GemhCRCwyREFoQmM7SUo4Z0diO0VBQ0Y7RUk1L0ZBO0lFc2hCRTtNRnJoQkQsc0RBQUE7SUorL0ZDO0VBQ0Y7QUFDRjtBSTcvRkU7RUVpaEJFO0lGaGhCRCxlQUFBO0VKZ2dHRDtBQUNGO0FJbGhHRTtFRXFpQkU7SUZwaUJELHNCQUFBO0VKcWhHRDtBQUNGO0FJbGhHQztFQUVDO0lFOGhCRTtNRjdoQkQsaUZBaEJjO0lKb2lHYjtFQUNGO0VJbGhHQTtJRTBoQkU7TUZ6aEJELDBEQUFBO0lKcWhHQztFQUNGO0FBQ0Y7QUluaEdFO0VFcWhCRTtJRnBoQkQsc0JBQUE7RUpzaEdEO0FBQ0Y7QUl4aUdFO0VFcWlCRTtJRnBpQkQsc0JBQUE7RUoyaUdEO0FBQ0Y7QUl4aUdDO0VBRUM7SUU4aEJFO01GN2hCRCxnRkFoQmM7SUowakdiO0VBQ0Y7RUl4aUdBO0lFMGhCRTtNRnpoQkQsNkRBQUE7SUoyaUdDO0VBQ0Y7QUFDRjtBSXppR0U7RUVxaEJFO0lGcGhCRCx1QkFBQTtFSjRpR0Q7QUFDRjtBSTlqR0U7RUVxaUJFO0lGcGlCRCxnQkFBQTtFSmlrR0Q7QUFDRjtBSTlqR0M7RUFFQztJRThoQkU7TUY3aEJELDJFQWhCYztJSmdsR2I7RUFDRjtFSTlqR0E7SUUwaEJFO01GemhCRCxzREFBQTtJSmlrR0M7RUFDRjtBQUNGO0FJL2pHRTtFRXFoQkU7SUZwaEJELGdCQUFBO0VKa2tHRDtBQUNGO0FJcGxHRTtFRXFpQkU7SUZwaUJELGVBQUE7RUp1bEdEO0FBQ0Y7QUlwbEdDO0VBRUM7SUU4aEJFO01GN2hCRCxvRUFoQmM7SUpzbUdiO0VBQ0Y7RUlwbEdBO0lFMGhCRTtNRnpoQkQsZ0RBQUE7SUp1bEdDO0VBQ0Y7QUFDRjtBSXJsR0U7RUVxaEJFO0lGcGhCRCxZQUFBO0VKd2xHRDtBQUNGO0FJMW1HRTtFRTRpQkU7SUYzaUJELGdCQUFBO0VKNm1HRDtBQUNGO0FJMW1HQztFQUVDO0lFcWlCRTtNRnBpQkQsMkVBaEJjO0lKNG5HYjtFQUNGO0VJMW1HQTtJRWlpQkU7TUZoaUJELHNEQUFBO0lKNm1HQztFQUNGO0FBQ0Y7QUkzbUdFO0VFNGhCRTtJRjNoQkQsZ0JBQUE7RUo4bUdEO0FBQ0Y7QUlob0dFO0VFNGlCRTtJRjNpQkQsaUJBQUE7RUptb0dEO0FBQ0Y7QUlob0dDO0VBRUM7SUVxaUJFO01GcGlCRCw0RUFoQmM7SUprcEdiO0VBQ0Y7RUlob0dBO0lFaWlCRTtNRmhpQkQsdURBQUE7SUptb0dDO0VBQ0Y7QUFDRjtBSWpvR0U7RUU0aEJFO0lGM2hCRCxpQkFBQTtFSm9vR0Q7QUFDRjs7QUl0cEdFO0VFaWpCRjtJRmhqQkcsc0JBQUE7RUowcEdEO0FBQ0Y7QUl2cEdDO0VBRUM7SUUwaUJGO01GemlCRyw2RUFoQmM7SUp5cUdiO0VBQ0Y7RUl2cEdBO0lFc2lCRjtNRnJpQkcseURBQUE7SUowcEdDO0VBQ0Y7QUFDRjtBSXhwR0U7RUVpaUJGO0lGaGlCRyxtQkFBQTtFSjJwR0Q7QUFDRjtBTTFuRkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QU40bkZSO0FJbnJHRTtFRW1qQkU7SUZsakJELHdCQUFBO0VKc3JHRDtBQUNGO0FJbnJHQztFQUVDO0lFNGlCRTtNRjNpQkQsZ0ZBaEJjO0lKcXNHYjtFQUNGO0VJbnJHQTtJRXdpQkU7TUZ2aUJELDREQUFBO0lKc3JHQztFQUNGO0FBQ0Y7QUlwckdFO0VFbWlCRTtJRmxpQkQsc0JBQUE7RUp1ckdEO0FBQ0Y7QU05b0ZJO0VBSUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QU42b0ZSO0FJOXNHRTtFRTJqQkU7SUYxakJELHNCQUFBO0VKaXRHRDtBQUNGO0FJOXNHQztFQUVDO0lFb2pCRTtNRm5qQkQsK0VBaEJjO0lKZ3VHYjtFQUNGO0VJOXNHQTtJRWdqQkU7TUYvaUJELDBEQUFBO0lKaXRHQztFQUNGO0FBQ0Y7QUkvc0dFO0VFMmlCRTtJRjFpQkQscUJBQUE7RUprdEdEO0FBQ0Y7QUlwdUdFO0VFMmpCRTtJRjFqQkQsd0JBQUE7RUp1dUdEO0FBQ0Y7QUlwdUdDO0VBRUM7SUVvakJFO01GbmpCRCxrRkFoQmM7SUpzdkdiO0VBQ0Y7RUlwdUdBO0lFZ2pCRTtNRi9pQkQsNkRBQUE7SUp1dUdDO0VBQ0Y7QUFDRjtBSXJ1R0U7RUUyaUJFO0lGMWlCRCx3QkFBQTtFSnd1R0Q7QUFDRjtBSTF2R0U7RUUyakJFO0lGMWpCRCxnQkFBQTtFSjZ2R0Q7QUFDRjtBSTF2R0M7RUFFQztJRW9qQkU7TUZuakJELDBFQWhCYztJSjR3R2I7RUFDRjtFSTF2R0E7SUVnakJFO01GL2lCRCxtREFBQTtJSjZ2R0M7RUFDRjtBQUNGO0FJM3ZHRTtFRTJpQkU7SUYxaUJELGNBQUE7RUo4dkdEO0FBQ0Y7QU03c0ZRO0VBUko7SUFTUSxpQkFBQTtJQUNBLGtCQUFBO0VOZ3RGVjtBQUNGO0FNOXNGUTtFQWJKO0lBZVEsY0FBQTtJQUNBLGVBQUE7RU5ndEZWO0FBQ0Y7QUk1eEdFO0VFMmpCRTtJRjFqQkQsb0JBQUE7RUoreEdEO0FBQ0Y7QUk1eEdDO0VBRUM7SUVvakJFO01GbmpCRCw0RUFoQmM7SUo4eUdiO0VBQ0Y7RUk1eEdBO0lFZ2pCRTtNRi9pQkQseURBQUE7SUoreEdDO0VBQ0Y7QUFDRjtBSTd4R0U7RUUyaUJFO0lGMWlCRCxxQkFBQTtFSmd5R0Q7QUFDRjtBSWx6R0U7RUUra0JFO0lGOWtCRCxxQkFBQTtFSnF6R0Q7QUFDRjtBSWx6R0M7RUFFQztJRXdrQkU7TUZ2a0JELDhFQWhCYztJSm8wR2I7RUFDRjtFSWx6R0E7SUVva0JFO01GbmtCRCx5REFBQTtJSnF6R0M7RUFDRjtBQUNGO0FJbnpHRTtFRStqQkU7SUY5akJELG9CQUFBO0VKc3pHRDtBQUNGO0FNdHZGUTtFQUhKO0lBSVEsaUJBQUE7RU55dkZWO0FBQ0Y7QUk3MEdFO0VFK2tCRTtJRjlrQkQsbUJBQUE7RUpnMUdEO0FBQ0Y7QUk3MEdDO0VBRUM7SUV3a0JFO01GdmtCRCwyRUFoQmM7SUorMUdiO0VBQ0Y7RUk3MEdBO0lFb2tCRTtNRm5rQkQsd0RBQUE7SUpnMUdDO0VBQ0Y7QUFDRjtBSTkwR0U7RUUrakJFO0lGOWpCRCxvQkFBQTtFSmkxR0Q7QUFDRjs7QUluMkdFO0VFNmxCRjtJRjVsQkcseUJBQUE7RUp1MkdEO0FBQ0Y7QUlwMkdDO0VBRUM7SUVzbEJGO01GcmxCRyxvRkFoQmM7SUpzM0diO0VBQ0Y7RUlwMkdBO0lFa2xCRjtNRmpsQkcsK0RBQUE7SUp1MkdDO0VBQ0Y7QUFDRjtBSXIyR0U7RUU2a0JGO0lGNWtCRyx5QkFBQTtFSncyR0Q7QUFDRjtBTXh4Rkk7RUFFSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QU55eEZSO0FJLzNHRTtFRWttQkU7SUZqbUJELGtCQUFBO0VKazRHRDtBQUNGO0FJLzNHQztFQUVDO0lFMmxCRTtNRjFsQkQsNEVBaEJjO0lKaTVHYjtFQUNGO0VJLzNHQTtJRXVsQkU7TUZ0bEJELDBEQUFBO0lKazRHQztFQUNGO0FBQ0Y7QUloNEdFO0VFa2xCRTtJRmpsQkQsb0JBQUE7RUptNEdEO0FBQ0Y7QUlyNUdFO0VFa21CRTtJRmptQkQsdUJBQUE7RUp3NUdEO0FBQ0Y7QUlyNUdDO0VBRUM7SUUybEJFO01GMWxCRCw4RUFoQmM7SUp1NkdiO0VBQ0Y7RUlyNUdBO0lFdWxCRTtNRnRsQkQsMERBQUE7SUp3NUdDO0VBQ0Y7QUFDRjtBSXQ1R0U7RUVrbEJFO0lGamxCRCxxQkFBQTtFSnk1R0Q7QUFDRjtBTWowRkk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FObTBGUjtBSWg3R0U7RUUwbUJFO0lGem1CRCxjQUFBO0VKbTdHRDtBQUNGO0FJaDdHQztFQUVDO0lFbW1CRTtNRmxtQkQscUVBaEJjO0lKazhHYjtFQUNGO0VJaDdHQTtJRStsQkU7TUY5bEJELGlEQUFBO0lKbTdHQztFQUNGO0FBQ0Y7QUlqN0dFO0VFMGxCRTtJRnpsQkQsV0FBQTtFSm83R0Q7QUFDRjtBTXQxRlE7RUFOSjtJQU9RLDJCQUFBO0VOeTFGVjtBQUNGO0FNdDFGSTtFQUdJLGtCQUFBO0FOczFGUjtBSTk4R0U7RUVxbkJFO0lGcG5CRCxlQUFBO0VKaTlHRDtBQUNGO0FJOThHQztFQUVDO0lFOG1CRTtNRjdtQkQsMkVBaEJjO0lKZytHYjtFQUNGO0VJOThHQTtJRTBtQkU7TUZ6bUJELHFEQUFBO0lKaTlHQztFQUNGO0FBQ0Y7QUkvOEdFO0VFcW1CRTtJRnBtQkQsZ0JBQUE7RUprOUdEO0FBQ0Y7QUlwK0dFO0VFcW5CRTtJRnBuQkQscUJBQUE7RUp1K0dEO0FBQ0Y7QUlwK0dDO0VBRUM7SUU4bUJFO01GN21CRCw4RUFoQmM7SUpzL0diO0VBQ0Y7RUlwK0dBO0lFMG1CRTtNRnptQkQsMkRBQUE7SUp1K0dDO0VBQ0Y7QUFDRjtBSXIrR0U7RUVxbUJFO0lGcG1CRCxzQkFBQTtFSncrR0Q7QUFDRjtBTWg0RlE7RUFMSjtJQU1RLFdBQUE7RU5tNEZWO0FBQ0Y7QU1oNEZJO0VBRUksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBTmk0RlI7QUlwZ0hFO0VFK25CRTtJRjluQkQsZUFBQTtFSnVnSEQ7QUFDRjtBSXBnSEM7RUFFQztJRXduQkU7TUZ2bkJELHlFQWhCYztJSnNoSGI7RUFDRjtFSXBnSEE7SUVvbkJFO01Gbm5CRCxzREFBQTtJSnVnSEM7RUFDRjtBQUNGO0FJcmdIRTtFRSttQkU7SUY5bUJELGdCQUFBO0VKd2dIRDtBQUNGO0FNcDVGSTtFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBTnE1RlI7QUkvaEhFO0VFc29CRTtJRnJvQkQsaUJBQUE7RUpraUhEO0FBQ0Y7QUkvaEhDO0VBRUM7SUUrbkJFO01GOW5CRCx5RUFoQmM7SUppakhiO0VBQ0Y7RUkvaEhBO0lFMm5CRTtNRjFuQkQsc0RBQUE7SUpraUhDO0VBQ0Y7QUFDRjtBSWhpSEU7RUVzbkJFO0lGcm5CRCxrQkFBQTtFSm1pSEQ7QUFDRjtBTXg2Rkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FOMDZGUjtBTXY2Rkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBTnk2RlI7QU12NkZZO0VBQ0ksMkJBQUE7QU55NkZoQjtBTXA2Rkk7RUFDSSxvQkFBQTtFQUNBLCtCQUFBO0FOczZGUjs7QU1oNkZBO0VBR0ksZ0NBQUE7RUFDQSxnQkFBQTtBTmk2Rko7QUk5a0hFO0VFeXFCRjtJRnhxQkcsaUJBQUE7RUppbEhEO0FBQ0Y7QUk5a0hDO0VBRUM7SUVrcUJGO01GanFCRywwRUFoQmM7SUpnbUhiO0VBQ0Y7RUk5a0hBO0lFOHBCRjtNRjdwQkcsMERBQUE7SUppbEhDO0VBQ0Y7QUFDRjtBSS9rSEU7RUV5cEJGO0lGeHBCRyxxQkFBQTtFSmtsSEQ7QUFDRjtBSXBtSEU7RUV5cUJGO0lGeHFCRyx3QkFBQTtFSnVtSEQ7QUFDRjtBSXBtSEM7RUFFQztJRWtxQkY7TUZqcUJHLGtGQWhCYztJSnNuSGI7RUFDRjtFSXBtSEE7SUU4cEJGO01GN3BCRyw2REFBQTtJSnVtSEM7RUFDRjtBQUNGO0FJcm1IRTtFRXlwQkY7SUZ4cEJHLHdCQUFBO0VKd21IRDtBQUNGO0FNNThGSTtFQUNJLGtCQUFBO0FOODhGUjtBTTc4RlE7RUFDSSxXQUFBO0VBR0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QU42OEZaO0FJcm9IRTtFRWdyQk07SUYvcUJMLGlCQUFBO0VKd29IRDtBQUNGO0FJcm9IQztFQUVDO0lFeXFCTTtNRnhxQkwsMEVBaEJjO0lKdXBIYjtFQUNGO0VJcm9IQTtJRXFxQk07TUZwcUJMLHFEQUFBO0lKd29IQztFQUNGO0FBQ0Y7QUl0b0hFO0VFZ3FCTTtJRi9wQkwsY0FBQTtFSnlvSEQ7QUFDRjtBSTNwSEU7RUVnckJNO0lGL3FCTCxrQkFBQTtFSjhwSEQ7QUFDRjtBSTNwSEM7RUFFQztJRXlxQk07TUZ4cUJMLDJFQWhCYztJSjZxSGI7RUFDRjtFSTNwSEE7SUVxcUJNO01GcHFCTCxzREFBQTtJSjhwSEM7RUFDRjtBQUNGO0FJNXBIRTtFRWdxQk07SUYvcEJMLGVBQUE7RUorcEhEO0FBQ0Y7QU14L0ZZO0VBVEo7SUFVUSxhQUFBO0VOMi9GZDtBQUNGO0FNdi9GSTtFQUNJLFVBQUE7QU55L0ZSO0FNdC9GSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FOdy9GUjtBSTlySEU7RUV5c0JFO0lGeHNCRCxlQUFBO0VKaXNIRDtBQUNGO0FJOXJIQztFQUVDO0lFa3NCRTtNRmpzQkQseUVBaEJjO0lKZ3RIYjtFQUNGO0VJOXJIQTtJRThyQkU7TUY3ckJELHNEQUFBO0lKaXNIQztFQUNGO0FBQ0Y7QUkvckhFO0VFeXJCRTtJRnhyQkQsZ0JBQUE7RUprc0hEO0FBQ0Y7QUlwdEhFO0VFeXNCRTtJRnhzQkQsc0JBQUE7RUp1dEhEO0FBQ0Y7QUlwdEhDO0VBRUM7SUVrc0JFO01GanNCRCwrRUFoQmM7SUpzdUhiO0VBQ0Y7RUlwdEhBO0lFOHJCRTtNRjdyQkQseURBQUE7SUp1dEhDO0VBQ0Y7QUFDRjtBSXJ0SEU7RUV5ckJFO0lGeHJCRCxzQkFBQTtFSnd0SEQ7QUFDRjtBTTVoR0k7RUFDSSxXQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FONmhHUjtBSWh2SEU7RUU4c0JFO0lGN3NCRCxpQkFBQTtFSm12SEQ7QUFDRjtBSWh2SEM7RUFFQztJRXVzQkU7TUZ0c0JELDJFQWhCYztJSmt3SGI7RUFDRjtFSWh2SEE7SUVtc0JFO01GbHNCRCwwREFBQTtJSm12SEM7RUFDRjtBQUNGO0FJanZIRTtFRThyQkU7SUY3ckJELG9CQUFBO0VKb3ZIRDtBQUNGO0FJdHdIRTtFRThzQkU7SUY3c0JELGlCQUFBO0VKeXdIRDtBQUNGO0FJdHdIQztFQUVDO0lFdXNCRTtNRnRzQkQsNEVBaEJjO0lKd3hIYjtFQUNGO0VJdHdIQTtJRW1zQkU7TUZsc0JELHNEQUFBO0lKeXdIQztFQUNGO0FBQ0Y7QUl2d0hFO0VFOHJCRTtJRjdyQkQsZUFBQTtFSjB3SEQ7QUFDRjtBSTV4SEU7RUU4c0JFO0lGN3NCRCx3QkFBQTtFSit4SEQ7QUFDRjtBSTV4SEM7RUFFQztJRXVzQkU7TUZ0c0JELGtGQWhCYztJSjh5SGI7RUFDRjtFSTV4SEE7SUVtc0JFO01GbHNCRCw2REFBQTtJSit4SEM7RUFDRjtBQUNGO0FJN3hIRTtFRThyQkU7SUY3ckJELHdCQUFBO0VKZ3lIRDtBQUNGO0FNMWxHSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FONGxHUjs7QU14bEdBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFFQSxrQkFBQTtBTjBsR0o7QUk3ekhFO0VFK3RCRjtJRjl0QkcsZUFBQTtFSmcwSEQ7QUFDRjtBSTd6SEM7RUFFQztJRXd0QkY7TUZ2dEJHLCtFQWJlO0lKNDBIZDtFQUNGO0VJN3pIQTtJRW90QkY7TUZudEJHLG9FQUFBO0lKZzBIQztFQUNGO0FBQ0Y7QUk5ekhFO0VFK3NCRjtJRjlzQkcsdUJBQUE7RUppMEhEO0FBQ0Y7QU05bUdJO0VBTko7SUFPUSxhQUFBO0VOaW5HTjtBQUNGO0FNaG5HSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxXQUFBO0VBRUEsc0JBQUE7QU5nbkdSO0FJLzFIRTtFRXd1QkU7SUZ2dUJELGVBQUE7RUprMkhEO0FBQ0Y7QUkvMUhDO0VBRUM7SUVpdUJFO01GaHVCRCw0RUFiZTtJSjgySGQ7RUFDRjtFSS8xSEE7SUU2dEJFO01GNXRCRCx3REFBQTtJSmsySEM7RUFDRjtBQUNGO0FJaDJIRTtFRXd0QkU7SUZ2dEJELGdCQUFBO0VKbTJIRDtBQUNGO0FJcjNIRTtFRXd1QkU7SUZ2dUJELGNBQUE7RUp3M0hEO0FBQ0Y7QUlyM0hDO0VBRUM7SUVpdUJFO01GaHVCRCw4Q0FoQmM7SUp1NEhiO0VBQ0Y7RUlyM0hBO0lFNnRCRTtNRjV0QkQsOENBQUE7SUp3M0hDO0VBQ0Y7QUFDRjtBSXQzSEU7RUV3dEJFO0lGdnRCRCxXQUFBO0VKeTNIRDtBQUNGO0FNMXBHUTtFQVRKO0lBVVEsYUFBQTtFTjZwR1Y7QUFDRjtBTTNwR0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsV0FBQTtFQUVBLHNCQUFBO0VBQ0Esd0JBQUE7QU4ycEdSO0FJeDVIRTtFRXF2QkU7SUZwdkJELGFBQUE7RUoyNUhEO0FBQ0Y7QUl4NUhDO0VBRUM7SUU4dUJFO01GN3VCRCx1RUFiZTtJSnU2SGQ7RUFDRjtFSXg1SEE7SUUwdUJFO01GenVCRCxtREFBQTtJSjI1SEM7RUFDRjtBQUNGO0FJejVIRTtFRXF1QkU7SUZwdUJELGNBQUE7RUo0NUhEO0FBQ0Y7QUk5NkhFO0VFcXZCRTtJRnB2QkQsZUFBQTtFSmk3SEQ7QUFDRjtBSTk2SEM7RUFFQztJRTh1QkU7TUY3dUJELHlFQWhCYztJSmc4SGI7RUFDRjtFSTk2SEE7SUUwdUJFO01GenVCRCxzREFBQTtJSmk3SEM7RUFDRjtBQUNGO0FJLzZIRTtFRXF1QkU7SUZwdUJELGdCQUFBO0VKazdIRDtBQUNGO0FNcnNHUTtFQVZKO0lBV1EsYUFBQTtFTndzR1Y7QUFDRjs7QUl6OEhFO0VFd3dCRjtJRnZ3Qkcsc0JBQUE7RUo2OEhEO0FBQ0Y7QUkxOEhDO0VBRUM7SUVpd0JGO01GaHdCRyxnRkFoQmM7SUo0OUhiO0VBQ0Y7RUkxOEhBO0lFNnZCRjtNRjV2QkcsdURBQUE7SUo2OEhDO0VBQ0Y7QUFDRjtBSTM4SEU7RUV3dkJGO0lGdnZCRyxzQkFBQTtFSjg4SEQ7QUFDRjtBSWgrSEU7RUV3d0JGO0lGdndCRyx5QkFBQTtFSm0rSEQ7QUFDRjtBSWgrSEM7RUFFQztJRWl3QkY7TUZod0JHLG1GQWhCYztJSmsvSGI7RUFDRjtFSWgrSEE7SUU2dkJGO01GNXZCRywwREFBQTtJSm0rSEM7RUFDRjtBQUNGO0FJaitIRTtFRXd2QkY7SUZ2dkJHLHlCQUFBO0VKbytIRDtBQUNGO0FNM3VHSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FONnVHUjtBTTN1R1E7RUFMSjtJQU1RLHNCQUFBO0VOOHVHVjtBQUNGO0FJaGdJRTtFRXF4QkU7SUZweEJELHNCQUFBO0VKbWdJRDtBQUNGO0FJaGdJQztFQUVDO0lFOHdCRTtNRjd3QkQsd0ZBaEJjO0lKa2hJYjtFQUNGO0VJaGdJQTtJRTB3QkU7TUZ6d0JELDBFQUFBO0lKbWdJQztFQUNGO0FBQ0Y7QUlqZ0lFO0VFcXdCRTtJRnB3QkQsNkJBQUE7RUpvZ0lEO0FBQ0Y7QU05dkdRO0VBSEo7SUFJUSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VOaXdHVjtBQUNGO0FNOXZHSTtFQUNJLGdCQUFBO0FOZ3dHUjtBSWhpSUU7RUUreEJFO0lGOXhCRCx3QkFBQTtFSm1pSUQ7QUFDRjtBSWhpSUM7RUFFQztJRXd4QkU7TUZ2eEJELGtGQWhCYztJSmtqSWI7RUFDRjtFSWhpSUE7SUVveEJFO01GbnhCRCw0REFBQTtJSm1pSUM7RUFDRjtBQUNGO0FJamlJRTtFRSt3QkU7SUY5d0JELHdCQUFBO0VKb2lJRDtBQUNGO0FNbHhHSTtFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7QU5teEdSO0FJMWpJRTtFRW95QkU7SUZueUJELG1CQUFBO0VKNmpJRDtBQUNGO0FJMWpJQztFQUVDO0lFNnhCRTtNRjV4QkQsMEVBaEJjO0lKNGtJYjtFQUNGO0VJMWpJQTtJRXl4QkU7TUZ4eEJELHNEQUFBO0lKNmpJQztFQUNGO0FBQ0Y7QUkzaklFO0VFb3hCRTtJRm54QkQsaUJBQUE7RUo4aklEO0FBQ0Y7QUlobElFO0VFb3lCRTtJRm55QkQsZUFBQTtFSm1sSUQ7QUFDRjtBSWhsSUM7RUFFQztJRTZ4QkU7TUY1eEJELDREQWhCYztJSmttSWI7RUFDRjtFSWhsSUE7SUV5eEJFO01GeHhCRCxzREFBQTtJSm1sSUM7RUFDRjtBQUNGO0FJamxJRTtFRW94QkU7SUZueEJELGdCQUFBO0VKb2xJRDtBQUNGO0FNNXpHUTtFQU5KO0lBT1EsV0FBQTtJQUNBLG1CQUFBO0VOK3pHVjtBQUNGO0FNNXpHSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QU44ekdSO0FJam5JRTtFRWd6QkU7SUYveUJELGlCQUFBO0VKb25JRDtBQUNGO0FJam5JQztFQUVDO0lFeXlCRTtNRnh5QkQsMEVBaEJjO0lKbW9JYjtFQUNGO0VJam5JQTtJRXF5QkU7TUZweUJELHFEQUFBO0lKb25JQztFQUNGO0FBQ0Y7QUlsbklFO0VFZ3lCRTtJRi94QkQsaUJBQUE7RUpxbklEO0FBQ0Y7QU1qMUdRO0VBTko7SUFPUSxVQUFBO0lBQ0EsdUJBQUE7RU5vMUdWO0FBQ0Y7O0FJN29JRTtFRWcwQkY7SUYvekJHLHFCQUFBO0VKaXBJRDtBQUNGO0FJOW9JQztFQUVDO0lFeXpCRjtNRnh6QkcsK0VBaEJjO0lKZ3FJYjtFQUNGO0VJOW9JQTtJRXF6QkY7TUZwekJHLDZEQUFBO0lKaXBJQztFQUNGO0FBQ0Y7QUkvb0lFO0VFZ3pCRjtJRi95Qkcsd0JBQUE7RUprcElEO0FBQ0Y7QU1sMkdJO0VBQ0ksa0JBQUE7QU5vMkdSO0FNbDJHUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FObTJHWjtBSS9xSUU7RUVxMEJNO0lGcDBCTCxjQUFBO0VKa3JJRDtBQUNGO0FJL3FJQztFQUVDO0lFOHpCTTtNRjd6QkwsMkVBYmU7SUo4cklkO0VBQ0Y7RUkvcUlBO0lFMHpCTTtNRnp6QkwsdURBQUE7SUprcklDO0VBQ0Y7QUFDRjtBSWhySUU7RUVxekJNO0lGcHpCTCxpQkFBQTtFSm1ySUQ7QUFDRjtBTXIzR0k7RUFHSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QU5xM0dSO0FJMXNJRTtFRWcxQkU7SUYvMEJELGVBQUE7RUo2c0lEO0FBQ0Y7QUkxc0lDO0VBRUM7SUV5MEJFO01GeDBCRCxzRUFoQmM7SUo0dEliO0VBQ0Y7RUkxc0lBO0lFcTBCRTtNRnAwQkQsb0RBQUE7SUo2c0lDO0VBQ0Y7QUFDRjtBSTNzSUU7RUVnMEJFO0lGL3pCRCxpQkFBQTtFSjhzSUQ7QUFDRjtBSWh1SUU7RUVnMUJFO0lGLzBCRCx1QkFBQTtFSm11SUQ7QUFDRjtBSWh1SUM7RUFFQztJRXkwQkU7TUZ4MEJELGdGQWhCYztJSmt2SWI7RUFDRjtFSWh1SUE7SUVxMEJFO01GcDBCRCwyREFBQTtJSm11SUM7RUFDRjtBQUNGO0FJanVJRTtFRWcwQkU7SUYvekJELHVCQUFBO0VKb3VJRDtBQUNGO0FNOTVHSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QU5nNkdSO0FJM3ZJRTtFRXcxQkU7SUZ2MUJELGFBQUE7RUo4dklEO0FBQ0Y7QUkzdklDO0VBRUM7SUVpMUJFO01GaDFCRCxxRUFiZTtJSjB3SWQ7RUFDRjtFSTN2SUE7SUU2MEJFO01GNTBCRCxpREFBQTtJSjh2SUM7RUFDRjtBQUNGO0FJNXZJRTtFRXcwQkU7SUZ2MEJELFdBQUE7RUordklEO0FBQ0Y7QUlqeElFO0VFdzFCRTtJRnYxQkQsbUJBQUE7RUpveElEO0FBQ0Y7QUlqeElDO0VBRUM7SUVpMUJFO01GaDFCRCw0RUFoQmM7SUpteUliO0VBQ0Y7RUlqeElBO0lFNjBCRTtNRjUwQkQsNERBQUE7SUpveElDO0VBQ0Y7QUFDRjtBSWx4SUU7RUV3MEJFO0lGdjBCRCx1QkFBQTtFSnF4SUQ7QUFDRjtBTXY4R0k7RUFFSSxrQkFBQTtBTnc4R1I7QUkxeUlFO0VFZzJCRTtJRi8xQkQsZ0JBQUE7RUo2eUlEO0FBQ0Y7QUkxeUlDO0VBRUM7SUV5MUJFO01GeDFCRCwwRUFoQmM7SUo0ekliO0VBQ0Y7RUkxeUlBO0lFcTFCRTtNRnAxQkQsbURBQUE7SUo2eUlDO0VBQ0Y7QUFDRjtBSTN5SUU7RUVnMUJFO0lGLzBCRCxjQUFBO0VKOHlJRDtBQUNGO0FNMzlHSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUVBLGdCQUFBO0VBQ0EsZ0JBQUE7QU40OUdSO0FJMTBJRTtFRXEyQkU7SUZwMkJELG1CQUFBO0VKNjBJRDtBQUNGO0FJMTBJQztFQUVDO0lFODFCRTtNRjcxQkQsNEVBaEJjO0lKNDFJYjtFQUNGO0VJMTBJQTtJRTAxQkU7TUZ6MUJELHVEQUFBO0lKNjBJQztFQUNGO0FBQ0Y7QUkzMElFO0VFcTFCRTtJRnAxQkQsbUJBQUE7RUo4MElEO0FBQ0Y7QU0vK0dJO0VBRUksV0FBQTtBTmcvR1I7QUluMklFO0VFaTNCRTtJRmgzQkQsd0JBQUE7RUpzMklEO0FBQ0Y7QUluMklDO0VBRUM7SUUwMkJFO01GejJCRCxrRkFoQmM7SUpxM0liO0VBQ0Y7RUluMklBO0lFczJCRTtNRnIyQkQsNERBQUE7SUpzMklDO0VBQ0Y7QUFDRjtBSXAySUU7RUVpMkJFO0lGaDJCRCx3QkFBQTtFSnUySUQ7QUFDRjtBTW5nSEk7RUFHSSxnQkFBQTtFQUNBLGdCQUFBO0FObWdIUjtBSTczSUU7RUVzM0JFO0lGcjNCRCxrQkFBQTtFSmc0SUQ7QUFDRjtBSTczSUM7RUFFQztJRSsyQkU7TUY5MkJELHVFQWhCYztJSis0SWI7RUFDRjtFSTczSUE7SUUyMkJFO01GMTJCRCxtREFBQTtJSmc0SUM7RUFDRjtBQUNGO0FJOTNJRTtFRXMyQkU7SUZyMkJELGVBQUE7RUppNElEO0FBQ0Y7QUluNUlFO0VFczNCRTtJRnIzQkQsZ0JBQUE7RUpzNUlEO0FBQ0Y7QUluNUlDO0VBRUM7SUUrMkJFO01GOTJCRCwwRUFoQmM7SUpxNkliO0VBQ0Y7RUluNUlBO0lFMjJCRTtNRjEyQkQsb0RBQUE7SUpzNUlDO0VBQ0Y7QUFDRjtBSXA1SUU7RUVzMkJFO0lGcjJCRCxlQUFBO0VKdTVJRDtBQUNGO0FNNWlISTtFQUNJLGNBQUE7QU44aUhSOztBSTU2SUU7RUVvNEJGO0lGbjRCRyxxQkFBQTtFSmc3SUQ7QUFDRjtBSTc2SUM7RUFFQztJRTYzQkY7TUY1M0JHLDhFQWhCYztJSis3SWI7RUFDRjtFSTc2SUE7SUV5M0JGO01GeDNCRyx3REFBQTtJSmc3SUM7RUFDRjtBQUNGO0FJOTZJRTtFRW8zQkY7SUZuM0JHLG1CQUFBO0VKaTdJRDtBQUNGO0FJbjhJRTtFRW80QkY7SUZuNEJHLHdCQUFBO0VKczhJRDtBQUNGO0FJbjhJQztFQUVDO0lFNjNCRjtNRjUzQkcsaUZBaEJjO0lKcTlJYjtFQUNGO0VJbjhJQTtJRXkzQkY7TUZ4M0JHLDJEQUFBO0lKczhJQztFQUNGO0FBQ0Y7QUlwOElFO0VFbzNCRjtJRm4zQkcsc0JBQUE7RUp1OElEO0FBQ0Y7QU1sbEhJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBTm9sSFI7QU1qbEhJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QU5tbEhSO0FNamxIUTtFQUxKO0lBTVEsc0JBQUE7SUFDQSx1QkFBQTtFTm9sSFY7QUFDRjtBTWpsSEk7RUFHSSxnQkFBQTtFQUNBLGdCQUFBO0FOaWxIUjtBSTUrSUU7RUV1NUJFO0lGdDVCRCxpQkFBQTtFSisrSUQ7QUFDRjtBSTUrSUM7RUFFQztJRWc1QkU7TUYvNEJELDZFQWhCYztJSjgvSWI7RUFDRjtFSTUrSUE7SUU0NEJFO01GMzRCRCx1REFBQTtJSisrSUM7RUFDRjtBQUNGO0FJNytJRTtFRXU0QkU7SUZ0NEJELGdCQUFBO0VKZy9JRDtBQUNGO0FJbGdKRTtFRXU1QkU7SUZ0NUJELGtCQUFBO0VKcWdKRDtBQUNGO0FJbGdKQztFQUVDO0lFZzVCRTtNRi80QkQsMkVBaEJjO0lKb2hKYjtFQUNGO0VJbGdKQTtJRTQ0QkU7TUYzNEJELHdEQUFBO0lKcWdKQztFQUNGO0FBQ0Y7QUluZ0pFO0VFdTRCRTtJRnQ0QkQsbUJBQUE7RUpzZ0pEO0FBQ0Y7QU01bkhRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FOOG5IWjtBTTduSFk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QU4rbkhoQjtBTTFuSEk7RUFFSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FOMm5IUjtBSTFpSkU7RUUyNkJFO0lGMTZCRCxnQkFBQTtFSjZpSkQ7QUFDRjtBSTFpSkM7RUFFQztJRW82QkU7TUZuNkJELDJFQWhCYztJSjRqSmI7RUFDRjtFSTFpSkE7SUVnNkJFO01GLzVCRCxzREFBQTtJSjZpSkM7RUFDRjtBQUNGO0FJM2lKRTtFRTI1QkU7SUYxNUJELGdCQUFBO0VKOGlKRDtBQUNGO0FNL29IUTtFQU5KO0lBT1EsYUFBQTtFTmtwSFY7QUFDRjtBTS9vSEk7RUFDSSwrQkFBQTtBTmlwSFI7QU1ocEhRO0VBQ0ksMEJBQUE7QU5rcEhaOztBTzNwSkE7RUFDSSxrQkFBQTtBUDhwSkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwic2FzczptYXRoXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINC80ZbQutGB0LjQvdGW0LIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuQGltcG9ydCBcXFwiYmFzZS9taXhpbnNcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YjRgNC40YTRgtGW0LIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8mZGlzcGxheT1zd2FwIC0g0LTQvtC00LDRgtC4INC/0YDQuCDQv9GW0LTQutC70Y7Rh9C10L3QvdGWINGH0LXRgNC10Lcg0L/Qu9Cw0LPRltC9XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQuNGC0LgsINGP0LrRidC+INGUINC70L7QutCw0LvRjNC90ZYg0YTQsNC50LvQuCDRiNGA0LjRhNGC0ZbQslxcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGW0LrQvtC90LrQvtCy0LjRhSDRiNGA0LjRhNGC0ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C40YLQuCwg0Y/QutGJ0L4g0ZQg0YTQsNC50Lsg0ZbQutC+0L3QutC+0LLQvtCz0L4g0YjRgNC40YTRgtGDXFxyXFxuLy9AaW1wb3J0IFxcXCJmb250cy9pY29uc1xcXCI7XFxyXFxuXFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyDQndCw0LvQsNGI0YLRg9Cy0LDQvdC90Y8g0YjQsNCx0LvQvtC90YMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vINCX0LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0Lwg0YjRgNC40YTRgiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4kZm9udEZhbWlseTogXFxcIkludGVyXFxcIjtcXHJcXG4kZm9udFNpemU6IHRvUmVtKDE1KTsgLy8g0LTQtSAxNChweCkgLSDRgNC+0LfQvNGW0YAg0YjRgNC40YTRgtGDINC30LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0Lwg0Lcg0LzQsNC60LXRgtGDXFxyXFxuXFxyXFxuLy8g0J7RgdC90L7QstC90ZYg0LrQvtC70YzQvtGA0LhcXHJcXG4kbWFpbkNvbG9yOiAjMEUwRTBFOyAvLyDQmtC+0LvRltGAINGI0YDQuNGE0YLRgyDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XFxyXFxuXFxyXFxuLy8g0J/QsNC70ZbRgtGA0LAg0LrQvtC70YzQvtGA0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvY29sb3JzLXBhbGV0dGVcXFwiO1xcclxcblxcclxcbi8vINCd0LDQu9Cw0YjRgtGD0LLQsNC90L3RjyDQsNC00LDQv9GC0LjQstC90L7RlyDRgdGW0YLQutC4ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy8g0JzRltC90ZbQvNCw0LvRjNC90LAg0YjQuNGA0LjQvdCwINGB0YLQvtGA0ZbQvdC60LhcXHJcXG4kbWluV2lkdGg6IDMyMDtcXHJcXG4vLyDQqNC40YDQuNC90LAg0L/QvtC70L7RgtC90LAgKNC80LDQutC10YLRgylcXHJcXG4kbWF4V2lkdGg6IDEzNjY7XFxyXFxuLy8g0KjQuNGA0LjQvdCwINC+0LHQvNC10LbRg9GO0YfQvtCz0L4g0LrQvtC90YLQtdC50L3QtdGA0LAgKDAgPSDQvdC10LzQsNGUINC+0LHQvNC10LbQtdC90L3RjylcXHJcXG4kbWF4V2lkdGhDb250YWluZXI6IDExNzA7XFxyXFxuLy8g0JfQsNCz0LDQu9GM0L3QuNC5INCy0ZbQtNGB0YLRg9C/INGDINC60L7QvdGC0LXQudC90LXRgNCwXFxyXFxuLy8gKDMwID0g0L/QviAxNXB4INC70ZbQstC+0YDRg9GHINGWINC/0YDQsNCy0L7RgNGD0YcsIDAgPSDQvdC10LzQsNGUINCy0ZbQtNGB0YLRg9C/0YMpXFxyXFxuJGNvbnRhaW5lclBhZGRpbmc6IDMwO1xcclxcblxcclxcbi8vINCo0LjRgNC40L3QsCDRgdC/0YDQsNGG0YzQvtCy0YPQstCw0L3QvdGPINC/0LXRgNGI0L7Qs9C+INCx0YDQtdC50LrQv9C+0ZbQvdGC0YNcXHJcXG4kY29udGFpbmVyV2lkdGg6ICRtYXhXaWR0aENvbnRhaW5lciArICRjb250YWluZXJQYWRkaW5nO1xcclxcblxcclxcbi8vINCR0YDQtdC50Lot0L/QvtGX0L3RgtC4XFxyXFxuJHBjOiBlbSgkY29udGFpbmVyV2lkdGgpOyAvLyDQn9CaLCDQvdC+0YPRgtCx0YPQutC4LCDQtNC10Y/QutGWINC/0LvQsNC90YjQtdGC0Lgg0YMg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7QvNGDINC/0L7Qu9C+0LbQtdC90L3RllxcclxcbiR0YWJsZXQ6IGVtKDk5MS45OCk7IC8vINCf0LvQsNC90YjQtdGC0LgsINC00LXRj9C60ZYg0YLQtdC70LXRhNC+0L3QuCDQsiDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3QvtC80YMg0L/QvtC70L7QttC10L3QvdGWXFxyXFxuJG1vYmlsZTogZW0oNzY3Ljk4KTsgLy8g0KLQtdC70LXRhNC+0L3QuCBMXFxyXFxuJG1vYmlsZVNtYWxsOiBlbSg0NzkuOTgpOyAvLyDQotC10LvQtdGE0L7QvdC4IFNcXHJcXG5cXHJcXG4vLyDQotC40L8g0LDQtNCw0L/RgtC40LLQsDpcXHJcXG4vLyAxID0g0YfRg9C50L3RltGB0YLRjCAo0YMg0LrQvtC90YLQtdC50L3QtdGA0LAg0L3QtdC80LDRlCDQsdGA0LXQudC60L/QvtGW0L3RgtGW0LIpLFxcclxcbi8vIDIgPSDQv9C+INCx0YDQtdC50Lot0L/QvtGX0L3RgiAo0LrQvtC90YLQtdC50L3QtdGAINC30LzRltC90Y7RlCDRgdCy0L7RjiDRiNC40YDQuNC90YMg0L/QviDQsdGA0LXQudC6LdC/0L7Rl9C90YIpXFxyXFxuJHJlc3BvbnNpdmVUeXBlOiAxO1xcclxcblxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyDQntCx0L3Rg9C70LXQvdC90Y8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbkBpbXBvcnQgXFxcImJhc2UvbnVsbFxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDRgtC10LPQsCBCT0RZID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuYm9keSB7XFxyXFxuXFx0Ly8g0KHQutGA0L7Qu9C7INC30LDQsdC70L7QutC+0LLQsNC90L5cXHJcXG5cXHQubG9jayAmIHtcXHJcXG5cXHRcXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdFxcdHRvdWNoLWFjdGlvbjogbm9uZTtcXHJcXG5cXHRcXHRvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xcclxcblxcdH1cXHJcXG5cXHQvLyDQodCw0LnRgiDQt9Cw0LLQsNC90YLQsNC20LXQvdC40LlcXHJcXG5cXHQubG9hZGVkICYge1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0J7QsdC+0LvQvtC90LrQsCB3cmFwcGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLndyYXBwZXIge1xcclxcblxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0QHN1cHBvcnRzIChvdmVyZmxvdzogY2xpcCkge1xcclxcblxcdFxcdG92ZXJmbG93OiBjbGlwO1xcclxcblxcdH1cXHJcXG5cXHQvLyDQn9GA0LjRgtC40YHQutCw0ZTQvNC+IGZvb3RlclxcclxcblxcdD4gbWFpbiB7XFxyXFxuXFx0XFx0ZmxleDogMSAxIGF1dG87XFxyXFxuXFx0fVxcclxcblxcdC8vINCk0ZbQutGBINC00LvRjyDRgdC70LDQudC00LXRgNGW0LJcXHJcXG5cXHQ+ICoge1xcclxcblxcdFxcdG1pbi13aWR0aDogMDtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCe0LHQvNC10LbRg9GO0YfQuNC5INC60L7QvdGC0LXQudC90LXRgCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLypcXHJcXG4oaSkg0KHRgtC40LvRliDQsdGD0LTRg9GC0Ywg0LfQsNGB0YLQvtGB0L7QstGD0LLQsNGC0LjRgdGMINC00L5cXHJcXG7QstGB0ZbRhSDQutC70LDRgdGW0LIsINGJ0L4g0LzRltGB0YLRj9GC0YwgKl9fY29udGFpbmVyXFxyXFxu0J3QsNC/0YDQuNC60LvQsNC0IGhlYWRlcl9fY29udGFpbmVyLCBtYWluX19jb250YWluZXIg0ZYg0YIu0L8uXFxyXFxu0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBjbnRcXHJcXG4qL1xcclxcbkBpZiAoJHJlc3BvbnNpdmVUeXBlPT0xKSB7XFxyXFxuXFx0Ly8g0KfRg9C50L3QsFxcclxcblxcdFtjbGFzcyo9XFxcIl9fY29udGFpbmVyXFxcIl0ge1xcclxcblxcdFxcdEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHRvUmVtKCRjb250YWluZXJXaWR0aCk7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCkge1xcclxcblxcdFxcdFxcdEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwIHRvUmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxyXFxuXFx0XFx0XFx0fSBAZWxzZSB7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgbWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpLCAxNSk7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1yaWdodFxcXCIsIG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSwgMTUpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn0gQGVsc2Uge1xcclxcblxcdC8vINCR0YDQtdC50Lot0L/QvtGX0L3RgtCw0LzQuFxcclxcblxcdFtjbGFzcyo9XFxcIl9fY29udGFpbmVyXFxcIl0ge1xcclxcblxcdFxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdFxcdEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHRvUmVtKCRjb250YWluZXJXaWR0aCk7XFxyXFxuXFx0XFx0fSBAZWxzZSB7XFxyXFxuXFx0XFx0XFx0QGlmICgkY29udGFpbmVyUGFkZGluZz4wKSB7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMCB0b1JlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICRwYykge1xcclxcblxcdFxcdFxcdG1heC13aWR0aDogdG9SZW0oOTcwKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcXHJcXG5cXHRcXHRcXHRtYXgtd2lkdGg6IHRvUmVtKDc1MCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuXFx0XFx0XFx0bWF4LXdpZHRoOiBub25lO1xcclxcblxcdFxcdFxcdEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCBhbmQgJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwIHRvUmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0LHQsNC30L7QstC40YUg0YHRgtC40LvRltCyLCDRiNCw0LHQu9C+0L3RltCyICjQt9Cw0LPQvtGC0ZbQstC10LvRjCkg0YLQsCDQtNC+0L/QvtC80ZbQttC90LjRhSDQutC70LDRgdGW0LJcXHJcXG4vLyDQlNC70Y8g0L/RltC00LrQu9GO0YfQtdC90L3Rjy/QstC40LzQutC90LXQvdC90Y8g0LrQvtC90LrRgNC10YLQvdC40YUg0YHRgtC40LvRltCyINC00LjQstC40YHRjCBiYXNlLnNjc3NcXHJcXG5AaW1wb3J0IFxcXCJiYXNlXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQt9Cw0LPQsNC70YzQvdC40YUg0LXQu9C10LzQtdC90YLRltCyINC/0YDQvtC10LrRgtGDXFxyXFxuQGltcG9ydCBcXFwiY29tbW9uXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQvtC60YDQtdC80LjRhSDQsdC70L7QutGW0LJcXHJcXG5AaW1wb3J0IFxcXCJoZWFkZXJcXFwiO1xcclxcbkBpbXBvcnQgXFxcImZvb3RlclxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0L7QutGA0LXQvNC40YUg0YHRgtC+0YDRltC90L7QulxcclxcbkBpbXBvcnQgXFxcImhvbWVcXFwiO1xcclxcblxcclxcbi8vINCX0LzRltC90L3RllxcclxcblxcclxcbkBpbXBvcnQgXFxcInV0aWxzL3ZhcnNcXFwiO1xcclxcblwiLFwiKiB7XFxyXFxuXFx0cGFkZGluZzogMHB4O1xcclxcblxcdG1hcmdpbjogMHB4O1xcclxcblxcdGJvcmRlcjogMHB4O1xcclxcbn1cXHJcXG4qLFxcclxcbio6YmVmb3JlLFxcclxcbio6YWZ0ZXIge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpmb2N1cyxcXHJcXG46YWN0aXZlIHtcXHJcXG5cXHQvLyBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5hOmZvY3VzLFxcclxcbmE6YWN0aXZlIHtcXHJcXG5cXHQvLyBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRtaW4td2lkdGg6ICRtaW5XaWR0aCArIHB4O1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRjb2xvcjogJG1haW5Db2xvcjtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFx0Zm9udC1zaXplOiAkZm9udFNpemU7XFxyXFxuXFx0Ly90ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcclxcblxcdC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuXFx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG59XFxyXFxuaW5wdXQsXFxyXFxuYnV0dG9uLFxcclxcbnRleHRhcmVhIHtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcblxcdGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcclxcbn1cXHJcXG5idXR0b24ge1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuYSB7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG51bCBsaSB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuaW1nIHtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbn1cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNiB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cIixcIi8vINCX0LDQs9Cw0LvRjNC90LjQuSDRhNCw0LnQuyDQtdC70LXQvNC10L3RgtGW0LIg0YTQvtGA0LxcXHJcXG4vLyDQlNC70Y8g0L/RltC00LrQu9GO0YfQtdC90L3Rjy/QstGW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQutC+0L3QutGA0LXRgtC90L7Qs9C+INC10LvQtdC80LXQvdGC0LAg0YTQvtGA0LzQuCDQtNC40LLQuNGB0YwgYmFzZS9mb3Jtcy9mb3Jtcy5zY3NzXFxyXFxuQGltcG9ydCBcXFwiYmFzZS9mb3Jtcy9mb3Jtc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQv9C+0L/QsNC/0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvcG9wdXBcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0YHQv9C+0LnQu9C10YDRltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zcG9sbGVyc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDRgtCw0LHRltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS90YWJzXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC80LDQv1xcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvbWFwc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQsdC70L7QutGDIFxcXCLQv9C+0LrQsNC30LDRgtC4INGJ0LVcXFwiXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zaG93bW9yZVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0LvQuNC/0LrQvtCz0L4g0LHQu9C+0LrRg1xcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc3RpY2t5XFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQv9C+0LLQvdC+0LXQutGA0LDQvdC90L7Qs9C+INCx0LvQvtC60YNcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2Z1bGxzY3JlZW5cXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC/0L7QtdC60YDQsNC90L7RlyDQv9GA0L7QutGA0YPRgtC60LhcXHJcXG4vLyBTdHlsZXMgZm9yIGZ1bGxwYWdlIHNjcm9sbFxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvZnVsbHBhZ2VcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPIHJpcHBsZSDQtdGE0LXQutGC0YNcXHJcXG4vLyBTdHlsZXMgZm9yIHJpcHBsZSBlZmZlY3RcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3JpcHBsZVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0LrQsNGB0YLQvtC80L3QvtCz0L4g0LrRg9GA0YHQvtGA0YNcXHJcXG4vLyBTdHlsZXMgZm9yIGN1c3RvbSBjdXJzb3JcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2N1cnNvclxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0YfRg9C50L3QuNGFINC60LDRgNGC0LjQvdC+0LogKElCRylcXHJcXG4vLyDQodC90ZbQv9C/0LXRgiAoSFRNTCk6IGliZyAoZGl2INC3INC60LDRgNGC0LjQvdC60L7RjiDRgtCwINC60LvQsNGB0LDQvNC4KVxcclxcbi8vINCh0L3RltC/0L/QtdGCIChIVE1MKTogaWJnYSAoYSDQtyDQutCw0YDRgtC40L3QutC+0Y4g0YLQsCDQutC70LDRgdCw0LzQuClcXHJcXG5bY2xhc3MqPVxcXCItaWJnXFxcIl0ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRpbWcge1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0b2JqZWN0LWZpdDogY292ZXI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5bY2xhc3MqPVxcXCItaWJnLS1jb250YWluXFxcIl0ge1xcclxcblxcdGltZyB7XFxyXFxuXFx0XFx0b2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vINCo0LDQsdC70L7QvdC4ICjQt9Cw0LPQvtGC0ZbQstC70ZYpXFxyXFxuLy8gQGV4dGVuZCAl0ZbQvCfRjyDRiNCw0LHQu9C+0L3RgztcXHJcXG4vLyDQodC90ZbQv9C/0LXRgiAoU0NTUyk6IGV4XFxyXFxuXFxyXFxuLy8g0JvRltGH0LjQu9GM0L3QuNC6INC00LvRjyDRgdC/0LjRgdC60YNcXHJcXG4lbGlzdENvdW50ZXIge1xcclxcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG5cXHRjb3VudGVyLXJlc2V0OiBpdGVtO1xcclxcblxcdGxpIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0JjpiZWZvcmUge1xcclxcblxcdFxcdFxcdGNvdW50ZXItaW5jcmVtZW50OiBpdGVtO1xcclxcblxcdFxcdFxcdGNvbnRlbnQ6IGNvdW50ZXIoaXRlbSk7XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCQ0LTQsNC/0YLQuNCy0L3QtSDQstGW0LTQtdC+XFxyXFxuJXJlc3BvbnNpdmVWaWRlbyB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0aGVpZ2h0OiAwO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XFxyXFxuXFx0dmlkZW8sXFxyXFxuXFx0aWZyYW1lLFxcclxcblxcdG9iamVjdCxcXHJcXG5cXHRlbWJlZCB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCS0ZbQtNC10L4g0Y/QuiDRhNC+0L1cXHJcXG4ldmlkZW9CYWNrZ3JvdW5kIHtcXHJcXG5cXHR2aWRlbyxcXHJcXG5cXHRpZnJhbWUsXFxyXFxuXFx0b2JqZWN0LFxcclxcblxcdGVtYmVkIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0XFx0dG9wOiA1MCU7XFxyXFxuXFx0XFx0bGVmdDogNTAlO1xcclxcblxcdFxcdG1pbi13aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRtaW4taGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdHdpZHRoOiBhdXRvO1xcclxcblxcdFxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRcXHR6LWluZGV4OiAtMTAwO1xcclxcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcclxcblxcdFxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQodGW0YDQuNC5INGE0ZbQu9GM0YLRgFxcclxcbiVncmF5ZmlsdGVyIHtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcblxcdGZpbHRlcjogZ3JheXNjYWxlKDEpO1xcclxcblxcdEBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xcclxcblxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdGZpbHRlcjogZ3JheXNjYWxlKDApO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCh0LrQsNGB0YPQstCw0YLQuCDQstC40LTRltC70LXQvdC90Y9cXHJcXG4lbm9zZWxlY3Qge1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG4vLyDQlNC30LXRgNC60LDQu9GM0L3QtSDQstGW0LTQvtCx0YDQsNC20LXQvdC90Y9cXHJcXG4lbWlycm9yIHtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXHJcXG59XFxyXFxuLy8g0J/Qu9Cw0LLQvdC40Lkg0YHQutGA0L7Qu9C7XFxyXFxuJXNtb290aHNjcm9sbCB7XFxyXFxuXFx0LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcclxcbn1cXHJcXG4vLyDQodGF0L7QstCw0YLQuCDRgdC60YDQvtC70LtcXHJcXG4laGlkZXNjcm9sbCB7XFxyXFxuXFx0Jjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcblxcdGNvbG9yOiAjZmZmO1xcclxcblxcdCZfX21lbnUge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDo1ODBweCl7XFxyXFxuXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdFxcdGhlaWdodDogNTJweDtcXHJcXG5cXHRcXHQgIH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuXFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjAsIDE1KTtcXHJcXG59XFxyXFxuLm1lbnUge1xcclxcblxcclxcblxcdCZfX2JvZHkge1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgMzUsIDI1KTtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDM1LCAyNSk7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHR6LWluZGV4OiAxMDtcXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDo1ODBweCl7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdCAgfVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX19saXN0IHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLXJpZ2h0XFxcIiwgNjAsIDUwKTtcXHJcXG5cXHRcXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJnYXBcXFwiLCA0MCwgMzApO1xcclxcblxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOjU4MHB4KXtcXHJcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwO1xcclxcblxcdFxcdFxcdGZsZXg6IDI7XFxyXFxuXFx0XFx0ICB9XFxyXFxuXFx0ICB9XFxyXFxuXFxyXFxuXFx0Jl9fbGluayB7XFxyXFxuXFx0XFx0QGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAzNSwgMjUpO1xcclxcblxcdFxcdEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMzUsIDI1KTtcXHJcXG5cXHRcXHRmb250LXNpemU6IDE2cHg7XFxyXFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOjU4MHB4KXtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDI4cHg7XFxyXFxuXFx0XFx0ICB9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Jjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRjb250ZW50OiAnJztcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHR0b3A6IDQ1cHg7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiAxcHg7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcblxcdFxcdFxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0XFx0XFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcdFxcdFxcdHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC41cyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuM3MgZWFzZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0Jjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuXFx0XFx0XFx0XFx0b3BhY2l0eTogMTtcXHJcXG5cXHRcXHRcXHRcXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdCZfX2xpbmsuY3VycmVudCB7XFxyXFxuXFx0XFx0Jjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuXFx0XFx0XFx0b3BhY2l0eTogMTtcXHJcXG5cXHRcXHRcXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcbi5zb2NpYWxzLWxpc3Qge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJnYXBcXFwiLCAxNSwgMTApO1xcclxcblxcclxcblxcdEBtZWRpYSAobWF4LXdpZHRoOjU4MHB4KXtcXHJcXG5cXHRcXHRnYXA6IDMwcHg7XFxyXFxuXFx0XFx0ZmxleDogMTtcXHJcXG4gIFxcdH1cXHJcXG5cXHJcXG5cXHQmX19pY29uIHtcXHJcXG5cXHRcXHRAbWVkaWEgKG1heC13aWR0aDo1ODBweCl7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDI1cHg7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiAyNXB4O1xcclxcbiAgXFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy9CdXJnZXJcXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcXHJcXG5cXHQubWVudV9fYm9keSB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdFxcdHRvcDogNTJweDtcXHJcXG5cXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcblxcdFxcdG92ZXJmbG93OiBhdXRvO1xcclxcblxcdFxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uaWNvbi1tZW51IHtcXHJcXG5cXHRAbWVkaWEgKG1pbi13aWR0aDo1ODBweCl7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTsgIFxcclxcblxcdH1cXHJcXG5cXHRAbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0d2lkdGg6IHRvUmVtKDI1KTtcXHJcXG5cXHRcXHRoZWlnaHQ6IHRvUmVtKDE0KTtcXHJcXG5cXHRcXHR6LWluZGV4OiA1O1xcclxcblxcdFxcdEBtZWRpYSAoYW55LWhvdmVyOiBub25lKSB7XFxyXFxuXFx0XFx0XFx0Y3Vyc29yOiBkZWZhdWx0O1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRzcGFuLFxcclxcblxcdFxcdCY6OmJlZm9yZSxcXHJcXG5cXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxuXFx0XFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG5cXHRcXHRcXHRyaWdodDogMDtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiB0b1JlbSgyKTtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQmOjpiZWZvcmUge1xcclxcblxcdFxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdFxcdGJvdHRvbTogMDtcXHJcXG5cXHRcXHRcXHR3aWR0aDogNTAlO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRzcGFuIHtcXHJcXG5cXHRcXHRcXHR0b3A6IGNhbGMoNTAlIC0gdG9SZW0oMSkpO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQubWVudS1vcGVuICYge1xcclxcblxcdFxcdFxcdCsubWVudV9fYm9keSB7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRzcGFuIHtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0Jjo6YmVmb3JlLFxcclxcblxcdFxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0Jjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRcXHR0b3A6IGNhbGMoNTAlIC0gdG9SZW0oMSkpO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRcXHRcXHRib3R0b206IGNhbGMoNTAlIC0gdG9SZW0oMSkpO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcdFxcdFxcdFxcclxcblxcdFxcdH1cXHRcXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0XFxyXFxuXFxyXFxuXCIsXCIvL9Cf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YjRgNC40YTRgtGDXFxyXFxuQG1peGluIGZvbnQoJGZvbnRfbmFtZSwgJGZpbGVfbmFtZSwgJHdlaWdodCwgJHN0eWxlKSB7XFxyXFxuXFx0QGZvbnQtZmFjZSB7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6ICRmb250X25hbWU7XFxyXFxuXFx0XFx0Zm9udC1kaXNwbGF5OiBzd2FwO1xcclxcblxcdFxcdHNyYzpcXHJcXG5cXHRcXHRcXHR1cmwoXFxcIi4uL2ZvbnRzLyN7JGZpbGVfbmFtZX0ud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksXFxyXFxuXFx0XFx0XFx0dXJsKFxcXCIuLi9mb250cy8jeyRmaWxlX25hbWV9LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogI3skd2VpZ2h0fTtcXHJcXG5cXHRcXHRmb250LXN0eWxlOiAjeyRzdHlsZX07XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vL1BlcmNlbnRcXHJcXG5AZnVuY3Rpb24gcGVyY2VudCgkcHgsICRmcm9tOiAxMDApIHtcXHJcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsICRmcm9tKSAqIDEwMCU7XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG4vL1JFTVxcclxcbkBmdW5jdGlvbiB0b1JlbSgkcHgsICRjdXJyZW50OiAxNikge1xcclxcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgJGN1cnJlbnQpICsgcmVtO1xcclxcblxcdEByZXR1cm4gJHJlc3VsdDtcXHJcXG59XFxyXFxuLy9FTVxcclxcbkBmdW5jdGlvbiBlbSgkcHgsICRjdXJyZW50OiAxNikge1xcclxcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgJGN1cnJlbnQpICsgZW07XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4vL0N1cnJlbmN5XFxyXFxuQG1peGluIGN1cnJlbmN5KCRzeW0pIHtcXHJcXG5cXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0Y29udGVudDogXFxcIiN7JHN5bX1cXFwiO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gR3JpZHNcXHJcXG5AbWl4aW4gZ3JpZENhcmRzKCR0eXBlOiBmaXQsICRtaW46IDI4MHB4LCAkbWF4OiAxZnIsICRnYXA6IDMwcHgpIHtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdhcDogJGdhcDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLSN7JHR5cGV9LCBtaW5tYXgoJG1pbiwgJG1heCkpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyDQkNC00LDQv9GC0LjQstC90LAg0LLQu9Cw0YHRgtC40LLRltGB0YLRjCAoY2xhbXApXFxyXFxuQG1peGluIGFkYXB0aXZlVmFsdWUoJHByb3BlcnR5LCAkc3RhcnRTaXplLCAkbWluU2l6ZSwgJGtlZXBTaXplOiAwLCAkd2lkdGhGcm9tOiAkY29udGFpbmVyV2lkdGgsICR3aWR0aFRvOiAkbWluV2lkdGgpIHtcXHJcXG5cXHRAaWYgKCRzdGFydFNpemU9PTApIHtcXHJcXG5cXHRcXHQkc3RhcnRTaXplOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFx0QGlmICgkbWluU2l6ZT09MCkge1xcclxcblxcdFxcdCRtaW5TaXplOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JTQu9GPIGNhbGMoKTtcXHJcXG5cXHQkYWRkU2l6ZTogbWF0aC5kaXYoJHN0YXJ0U2l6ZSAtICRtaW5TaXplLCAxNik7XFxyXFxuXFxyXFxuXFx0QGlmICgkd2lkdGhGcm9tID09ICRjb250YWluZXJXaWR0aCBhbmQgJG1heFdpZHRoQ29udGFpbmVyID09IDApIHtcXHJcXG5cXHRcXHQkd2lkdGhGcm9tOiAkbWF4V2lkdGg7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCR0YDQtdC50Lot0L/QvtGX0L3RgtC4INCyIEVNXFxyXFxuXFx0JHdpZHRoRnJvbU1lZGlhOiBlbSgkd2lkdGhGcm9tKTtcXHJcXG5cXHQkd2lkdGhUb01lZGlhOiBlbSgkd2lkdGhUbyk7XFxyXFxuXFxyXFxuXFx0Ly8g0KTQvtGA0LzRg9C70LAg0L/Qu9Cw0LLQsNGO0YfQvtCz0L4g0LfQvdCw0YfQtdC90L3Rj1xcclxcblxcdC8vINCY0YHRgtC+0YfQvdC40Lo6IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vbGluZWFybHktc2NhbGUtZm9udC1zaXplLXdpdGgtY3NzLWNsYW1wLWJhc2VkLW9uLXRoZS12aWV3cG9ydC9cXHJcXG5cXHQkc2xvcGU6IG1hdGguZGl2KCgkc3RhcnRTaXplIC0gJG1pblNpemUpLCAoJHdpZHRoRnJvbSAtICR3aWR0aFRvKSk7XFxyXFxuXFx0JHlJbnRlcnNlY3Rpb246IC0kd2lkdGhUbyAqICRzbG9wZSArICRtaW5TaXplO1xcclxcblxcdEBpZiAoJHlJbnRlcnNlY3Rpb249PTApIHtcXHJcXG5cXHRcXHQkeUludGVyc2VjdGlvbjogMC4wMDAwMDE7XFxyXFxuXFx0fVxcclxcblxcdCRmbHlWYWx1ZTogI3t0b1JlbSgkeUludGVyc2VjdGlvbil9XFxcIiArIFxcXCIgI3skc2xvcGUgKiAxMDB9dnc7XFxyXFxuXFxyXFxuXFx0Ly8g0J7RgtGA0LjQvNCw0L3QvdGPINC30L3QsNGH0LXQvdC90Y8g0LLQu9Cw0YHRgtC40LLQvtGB0YLRllxcclxcblxcdCRwcm9wZXJ0eVZhbHVlOiAje1xcXCJjbGFtcChcXFwiIHRvUmVtKCRtaW5TaXplKSBcXFwiLFxcXCIgJGZseVZhbHVlIFxcXCIsXFxcIiB0b1JlbSgkc3RhcnRTaXplKSBcXFwiKVxcXCJ9O1xcclxcblxcdC8vINCv0LrRidC+INC90LXQs9Cw0YLQuNCy0L3RliDQt9C90LDRh9C10L3QvdGPXFxyXFxuXFx0QGlmICgkbWluU2l6ZSA+ICRzdGFydFNpemUpIHtcXHJcXG5cXHRcXHQkcHJvcGVydHlWYWx1ZTogI3tcXFwiY2xhbXAoXFxcIiB0b1JlbSgkc3RhcnRTaXplKSBcXFwiLFxcXCIgJGZseVZhbHVlIFxcXCIsXFxcIiB0b1JlbSgkbWluU2l6ZSkgXFxcIilcXFwifTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INC30L3QsNGH0LXQvdC90Y8g0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFxcclxcblxcdEBpZiAka2VlcFNpemUgIT0gMSBhbmQgJGtlZXBTaXplICE9IDMge1xcclxcblxcdFxcdEBtZWRpYSAobWluLXdpZHRoOiAkd2lkdGhGcm9tTWVkaWEpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IHRvUmVtKCRzdGFydFNpemUpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFx0Ly8g0JDQtNCw0L/RgtGD0ZTQvNC+INGA0L7Qt9C80ZbRgCDRgyDQv9GA0L7QvNGW0LbQutGDINC80ZbQtiDQt9Cw0LfQvdCw0YfQtdC90LjQvNC4INGI0LjRgNC40L3QsNC80Lgg0LIn0Y7Qv9C+0YDRgtGDXFxyXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6ICR3aWR0aFRvTWVkaWEpIGFuZCAobWF4LXdpZHRoOiAkd2lkdGhGcm9tTWVkaWEpIHtcXHJcXG5cXHRcXHQvLyDQr9C60YnQviDQv9GW0LTRgtGA0LjQvNGD0ZTRgtGM0YHRjyBjbGFtcCgpO1xcclxcblxcdFxcdEBzdXBwb3J0cyAoI3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWU7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdC8vINCv0LrRidC+INC90LUg0L/RltC00YLRgNC40LzRg9GU0YLRjNGB0Y8gY2xhbXAoKTtcXHJcXG5cXHRcXHRAc3VwcG9ydHMgbm90ICgjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiBjYWxjKCN7dG9SZW0oJG1pblNpemUpfSArICN7JGFkZFNpemV9ICogKDEwMHZ3IC0gI3t0b1JlbSgkd2lkdGhUbyl9KSAvICN7bWF0aC5kaXYoJHdpZHRoRnJvbSwgMTYpIC0gbWF0aC5kaXYoJHdpZHRoVG8sIDE2KX0pO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFx0QGlmICRrZWVwU2l6ZSAhPSAxIGFuZCAka2VlcFNpemUgIT0gMiB7XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICR3aWR0aFRvTWVkaWEpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IHRvUmVtKCRtaW5TaXplKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5mb290ZXIge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDEyMSwgNjApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDEzMCwgNjUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgJl9fY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDY0MSwgMjAwKTtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJoZWlnaHRcXFwiLCA2NDEsIDIwMCk7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAtMjUlO1xcclxcbiAgICAgICAgICAgIHRvcDogMjMlO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcclxcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCl7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgfSBcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uYmxvY2std3JhcHBlciB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGdhcDogODBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4ubGVmdC1ibG9jayB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNDAwLCAyODApO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiAtNDAlO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcclxcbiAgICAgICAgd2lkdGg6IDFweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjAwJTtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxNTAlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICZfX3RleHQge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLXRvcFxcXCIsIDMwLCAxNSk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgNzYsIDM1KTtcXHJcXG4gICAgICAgIHdpZHRoOiAyNDBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS42OyBcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG4uZm9vdGVyLWxvZ28ge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAzNCwgMjApO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7IFxcclxcbn1cXHJcXG4uY29udGFjdHMge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgODEsIDQwKTtcXHJcXG4gICAgJl9faXRlbSB7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fbGluayB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzsgXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLnNvY2lhbHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcbi5yaWdodC1ibG9jayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1sZWZ0XFxcIiwgMTAwLCAwKTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5zdWJzY3JpYmUge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgNDAsIDIwKTtcXHJcXG4gICAgY29sb3I6ICM5Njk2OTY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuLmZvb3Rlci1mb3JtIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA1NzAsIDI4MCk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDEzMSwgNjApO1xcclxcbiAgICAmX19pbnB1dCB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDU3MCwgMjgwKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xcclxcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XFxyXFxuICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG5cXHJcXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICBib3R0b206IDE3cHg7XFxyXFxuICAgICAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZSwgYm90dG9tIDAuNHMgZWFzZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICY6Zm9jdXMge1xcclxcbiAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgICAgICAgICAgYm90dG9tOiAzNHB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19idXR0b24ge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICBib3R0b206IDE3cHg7XFxyXFxuICAgICAgICB3aWR0aDogNjRweDsgIFxcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgICAgIGJvdHRvbTogNXB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA2cHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA2cHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLmxpbmtzLWJsb2NrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ2MS45OHB4KSB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5mb290ZXItbmF2IHtcXHJcXG4gICAgJjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tcmlnaHRcXFwiLCAxMjQsIDYwKTtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NjEuOThweCkge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmOmxhc3QtY2hpbGQge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1yaWdodFxcXCIsIDg4LCA0MCk7XFxyXFxuICAgICZfX2l0ZW0ge1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2xpbmsge1xcclxcbiAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjc7IFxcclxcbiAgICB9XFxyXFxufVxcclxcbi5mb290ZXItY3JlZGl0cyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMTVweDtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgY29sb3I6ICM5Njk2OTY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMzsgXFxyXFxuICAgIHdpZHRoOiAxNDlweDtcXHJcXG4gICAgdGV4dC13cmFwOiBub3dyYXA7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MzEuOThweCkge1xcclxcbiAgICAgICAgYm90dG9tOiAtNTBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cIixcIi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vIEhlcm8gc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5oZXJvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgNDgwLCAyNzApO1xcclxcbiAgICAmX19jb250YWluZXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItY291bnRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiYm90dG9tXFxcIiwgNzAsIDMwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibGVmdFxcXCIsIDIwMCwgMTUpO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDgwLCA1MCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICZfX2l0ZW0ge1xcclxcbiAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMjAsIDEwKTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICB0b3A6IDdweDtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsZWZ0XFxcIiwgMzAsIDE5KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmc3BhbiB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxNCwgMTIpOyAgXFxyXFxuICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYmxvY2stdGl0bGUge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwidG9wXFxcIiwgMTc1LCA1MCk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsZWZ0XFxcIiwgMjAwLCAzMCk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDUxNiwgMzAwKTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMCA0MHB4IDA7XFxyXFxuICAgICZfX3RpdGxlIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDcwLCAzNik7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgdGV4dC1zaGFkb3c6IDRweCA0cHggMnB4IHJnYmEoMCwwLDAsMC42KTtcXHJcXG4gICAgICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgICB3aWR0aDogNzBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXZpZXcge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInRvcFxcXCIsIDM5MCwgMTYwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicmlnaHRcXFwiLCAxNzgsIDIwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA5MCwgNTUpO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJoZWlnaHRcXFwiLCA5MCwgNTUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTUsIDEyKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZSwgYm94LXNoYWRvdyAwLjRzIGVhc2U7XFxyXFxuXFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxNXB4IDhweCAjZmZmO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zd2lwZXItc2xpZGUge1xcclxcbiAgICAmX19pbWcge1xcclxcbiAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDU4MCwgMjIwKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3dpcGVyLWJ1dHRvbi1wcmV2IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDIyNXB4O1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJsZWZ0XFxcIiwgLTUwLCA0MDApO1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDo5NThweCl7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgIH1cXHJcXG59XFxyXFxuLnN3aXBlci1idXR0b24tbmV4dCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyMjVweDtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicmlnaHRcXFwiLCAtNTAsIDQwMCk7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjk1OHB4KXtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyBBYm91dC11cyBzZWN0aW9uXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmFib3V0LXVzIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAyNTYsIDQwKTtcXHJcXG5cXHJcXG4gICAgJl9fY29udGFpbmVyLS1iaWcge1xcclxcbiAgICAgICAgd2lkdGg6IDEzMDZweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5pbnRyby1ibG9jayB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNjE1LCAyOTApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgOTMsIDQwKTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgJl9fbGFiZWwge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDI1LCAxNSk7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RpdGxlIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDM0LCAyNCk7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uaW5mby1ibG9jayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMTYwLCA2MCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdhcFxcXCIsIDExMCwgNDApO1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDo1ODBweCl7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgNDAsIDIwKTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0tLXRvcC1saW5lIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMzkxLCAyMDApO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAzNCwgMjApO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGV4dC0tYmlnIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDIwLCAxOCk7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xcclxcblxcclxcbiAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA0MDAsIDIxMCk7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbClcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtLS1hY3Rpb24ge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA0NjMsIDI1MCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGV4dC0tc21hbGwge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTcsIDE1KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA1MCwgMjUpO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYnRuIHNwYW4ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDUwO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgMzksIDE4KTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1OS45OHB4KSB7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDY5Ljk4cHgpIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAxOSwgMTApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE5LCAxMCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMTcwLCA4MCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBzcGFuIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInRvcFxcXCIsIDI1LCAxMik7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJyaWdodFxcXCIsIDM4LCAxOSk7XFxyXFxuICAgICAgICB3aWR0aDogNnB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA2cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDk1OS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEyNSUpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLS1yZXZlcnNlIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgI2ZmZjtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyBEaXJlY3Rpb25zIHNlY3Rpb25cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uZGlyZWN0aW9ucyB7XFxyXFxuICAgIG1heC13aWR0aDogMTMzNnB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMTQwLCA3MCk7XFxyXFxufVxcclxcblxcclxcbi53b3Jrcy1saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbiAgICAmX19pdGVtIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMzA0LCAyMDApO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLCAwLCAwLCAwLjEzKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjY1KSAxMDAlKTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDQwMCwgMjgwKTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICAgICAgICAgICAud29ya3MtbGlzdF9faW5mbyB7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTZweCk7XFxyXFxuICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAud29ya3MtbGlzdF9fY2FyZCB7XFxyXFxuICAgICAgICAgICAgZmlsdGVyOiBibHVyKDdweCk7XFxyXFxuICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fY2FyZCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIGZpbHRlcjogYmx1cigwKTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjVzIGVhc2U7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHQmX19pbmZvIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXJpZ2h0XFxcIiwgOTMsIDI1KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDUwLCAyNSk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTZweCk7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQmX190ZXh0IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgbWFyZ2luOiAyNHB4IDAgMjRweCAwO1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ5OS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4OyBcXHJcXG4gICAgICAgIH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Jl9fbW9yZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0OTkuOThweCkge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDsgXFxyXFxuICAgICAgICB9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyBEaXJlY3Rpb25zIHNlY3Rpb25cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uZmVhdHVyZWQge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE1NywgNzUpO1xcclxcbiAgICAmX19saXN0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdhcFxcXCIsIDEwMCwgMzApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0ge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgICAgICY6aG92ZXIsXFxyXFxuICAgICAgICAmOmZvY3VzIHtcXHJcXG4gICAgICAgICAgICAuZmVhdHVyZWRfX2J0biB7XFxyXFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICZfX2ltYWdlIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMzcwLCAxODUpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgNDI4LCAyMTQpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2xhYmVsIHsgICBcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS40OyBcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi10b3BcXFwiLCAzNCwgMTUpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDgsIDQpO1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU5OS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3R5cGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pbWFnZS0tYmlnIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNjAwLCAyODApO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgNDI4LCAxOTQpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0tLXRvcCB7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDE2MHB4O1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtLS1ib3R0b20ge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogLTE2MHB4O1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fYnRuIHtcXHJcXG4gICAgICAgIGxlZnQ6IDEzMHB4O1xcclxcbiAgICAgICAgdG9wOiAyMDBweDtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZSwgdmlzaWJpbGl0eSAwLjVzIGVhc2UsIHRyYW5zZm9ybSAwLjRzIGVhc2UsIGJveC1zaGFkb3cgMC40cyBlYXNlO1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAxMDBweDtcXHJcXG4gICAgICAgICAgICB0b3A6IDEwMHB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGVTbWFsbCkge1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDY2cHg7XFxyXFxuICAgICAgICAgICAgdG9wOiA3N3B4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbi5pbnRyb2R1Y3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmaXJzdCBiYXNlbGluZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgNDgsIDI1KTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgMTAwLCAyMCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctcmlnaHRcXFwiLCAxMDAsIDUwKTtcXHJcXG4gICAgJl9fdGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNzVweDtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDEwMCwgNTApO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDQyNSwgMjUwKTtcXHJcXG4gICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA3MCwgMzUpO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDY4MHB4O1xcclxcbiAgICAgICAgICAgIHRvcDogODBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgNDgsIDI1KTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAmOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImxlZnRcXFwiLCAxMDAsIDUwKTtcXHJcXG4gICAgICAgICAgICAgICAgdG9wOiAtNDBweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gUHJvY2VzcyBzZWN0aW9uXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLnByb2Nlc3Mge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgICAgICBoZWlnaHQ6IDY2NHB4O1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KXtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDc2NHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcdFxcdCZfX2NvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMzAwcHg7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMjtcXHJcXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDE0OSwgNjUpO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMTYxLCA3MCk7XFxyXFxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNjQxLCAyMDApO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImhlaWdodFxcXCIsIDY0MSwgMjAwKTtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IC0yMCU7XFxyXFxuICAgICAgICAgICAgdG9wOiAtMzUlO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xcclxcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCl7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX190aXRsZSB7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNGRkY7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgODAsIDMwKTsgXFxyXFxuXFxyXFxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2Ny45OHB4KXtcXHJcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1sZWZ0XFxcIiwgMTAwLCAyMCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MTkuOThweCkge1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX19saXN0IHtcXHJcXG4gICAgICAgICAgICBnYXA6IDI0cHg7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1sZWZ0XFxcIiwgNjAsIDIwKTtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tcmlnaHRcXFwiLCAxNDAsIDApO1xcclxcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCl7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX19pdGVtIHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgICAgIC5wcm9jZXNzX190ZXh0IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyOCUpXFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgLnByb2Nlc3NfX251bWJlciB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQmX190ZXh0IHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogIzZGNkY2RjtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNHMgZWFzZSwgdHJhbnNmb3JtIDAuNHMgZWFzZTtcXHJcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICAgIGxlZnQ6IC05MHB4O1xcclxcbiAgICAgICAgICAgICAgICB0b3A6IDE3cHg7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2UsIG9wYWNpdHkgMC40cyBlYXNlO1xcclxcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpe1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdCZfX251bWJlciB7XFxyXFxuICAgICAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5wcm9jZXNzLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpe1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5ibG9jay1pbmZvIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAzOTUsIDI1MCk7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjcuOThweCl7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCAxMDAsIDIwKTtcXHJcXG4gICAgfVxcclxcblxcdFxcdCZfX3RleHQge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDUzLCAyNSk7IFxcclxcbiAgICAgICAgICAgIFxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy9DcmVhdGUgc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5jcmVhdGUge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDE2MCwgODApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE0MCwgNzApO1xcclxcbiAgICAmX19jb250YWluZXIge1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3dyYXBwZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDM3Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcbi5pbWctYmxvY2sge1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAzNy45OHB4KSB7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgfVxcclxcbiAgICAmX19pdGVtIHtcXHJcXG4gICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuNHMgZWFzZTtcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDApO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0tLWJpZyB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA0NzAsIDIzNSk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJoZWlnaHRcXFwiLCAyOTAsIDE0NSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fYm90dG9tIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNTc1LCAzMDApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0tLXNtYWxsIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDEzMCwgMzApO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLXJpZ2h0XFxcIiwgMzAsIDE1KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMjcwLCAxMzUpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgMTQwLCA4MCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9faXRlbS0tbWlkZGxlIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMjcwLCAxMzUpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiaGVpZ2h0XFxcIiwgMjUwLCAxMjUpO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi5jcmVhdGUtaW5mbyB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgOTMsIDQwKTtcXHJcXG4gICAgJl9fdGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxuICAgICAgICB3aWR0aDogMzU3cHg7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMzcsIDIwKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190ZXh0IHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDkwLCAyMCk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgNTMsIDI3KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNDM4LCAyODApO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7IFxcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMzcuOThweCkge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODMuOThweCkge1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDQwLCAyMCk7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2J0biB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tbGVmdFxcXCIsIDkwLCAyMCk7XFxyXFxuXFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTAzNy45OHB4KSB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgzLjk4cHgpIHtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tbGVmdFxcXCIsIDQwLCAyMCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy9WYWx1ZXMgc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi52YWx1ZXMge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDIxNCwgMTA3KTtcXHJcXG4gICAgJl9fY29udGFpbmVyIHtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190aXRsZSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxMDAsIDU1KTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDg2LCA0MCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fbGlzdCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJnYXBcXFwiLCA3NSwgNDApO1xcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY1MS45OHB4KSB7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0ge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAzNDAsIDI1MCk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCAxMDAsIDUwKTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NTEuOThweCkge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2ltZyB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDcwLCAzNSk7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2xhYmVsIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDI0LCAyMCk7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDsgXFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RleHQgeyAgXFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fbW9yZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIC52YWx1ZXNfX2ljb24ge1xcclxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2ljb24ge1xcclxcbiAgICAgICAgZmlsbDogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xcclxcbiAgICB9XFxyXFxufVxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vU3dpcGVyIHNlY3Rpb25cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uc3dpcGVyLXNlY3Rpb24ge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDEyOCwgNzApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE5NiwgNzApO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsKTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgJl9fY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDY0MSwgMjAwKTtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJoZWlnaHRcXFwiLCA2NDEsIDIwMCk7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDIzJTtcXHJcXG4gICAgICAgICAgICB0b3A6IDIzJTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcXHJcXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3Ljk4cHgpe1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgIH0gXFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fd3JhcHBlciB7XFxyXFxuICAgICAgICB6LWluZGV4OiAyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3NsaWRlIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pbWctcXVvdGUge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAzOCwgMTkpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDkyLCAyMCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGV4dCB7XFxyXFxuICAgICAgICBjb2xvcjogI0ZGRjtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDI0LCAxNSk7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJ3aWR0aFxcXCIsIDY3MywgMzAwKTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAzMywgMTUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2F1dGhvciB7XFxyXFxuICAgICAgICBjb2xvcjogIzk2OTY5NjtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmQtY291bnRlciB7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGxlZnQ6IDQ3JTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiYm90dG9tXFxcIiwgLTEyMCwgMCk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibGVmdFxcXCIsIC01NDgsIC0xMzUpO1xcclxcbiAgICAgICAgYm90dG9tOiA0MDVweDtcXHJcXG4gICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAxNjgsIDgwKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJyaWdodFxcXCIsIC01NzYsIC0xMjApO1xcclxcbiAgICAgICAgYm90dG9tOiAxMDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCA3MCwgMzUpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vL0NsaWVudHMgc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5jbGllbnRzIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAxNTUsIDc1KTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAxNTUsIDc1KTtcXHJcXG4gICAgJl9fY29udGFpbmVyIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogOTc1cHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NzkuOThweCkge1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGl0bGUtYmxvY2sge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLXJpZ2h0XFxcIiwgMjYwLCAwKTtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NzkuOThweCkge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdXBwZXJ0aXRsZSB7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDI3LCAxNSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGl0bGUge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMzQsIDI0KTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAyNjgsIDEyNSk7IFxcclxcblxcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc3OS45OHB4KSB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19saXN0IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJyb3ctZ2FwXFxcIiwgNTAsIDMwKTtcXHJcXG5cXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NzkuOThweCkge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy9OZXcgc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5uZXcge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDE2MCwgNzApO1xcclxcbiAgICAmX19jb250YWluZXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImJvdHRvbVxcXCIsIC0xNjAsIC03MCk7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fdGl0bGUge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgNDgsIDI0KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA5MCwgMzApO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7IFxcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2xpc3Qge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZ2FwXFxcIiwgMzAsIDQwKTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA4MCwgMzApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0ge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAzNzAsIDI4MCk7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19kYXRlIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICB3aWR0aDogMzUlO1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDE0LCAxMCk7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pbWFnZSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMjcsIDE1KTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RleHQge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjAsIDE2KTtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgMjk0LCAyNjApO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7IFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2J0biB7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vL1dvcmsgc2VjdGlvblxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi53b3JrIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAxNTgsIDQwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAxNTgsIDQwKTtcXHJcXG4gICAgJl9fY29udGFpbmVyIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogOTYwcHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fYmxvY2sge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQ5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RpdGxlIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIndpZHRoXFxcIiwgNDgzLCAyNTApO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTAwLCA1MCk7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcXHJcXG4gICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xcclxcbiAgICAgICAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2wpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pbWcge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwid2lkdGhcXFwiLCAyMzAsIDExNSk7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBsZWZ0OiA0NyU7XFxyXFxuICAgICAgICBib3R0b206IDM4cHg7XFxyXFxuXFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQ5Ljk4cHgpIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2xpbmsge1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIixcIjpyb290IHtcXHJcXG4gICAgLS1kYXJrLWNsOiAjMEUwRTBFO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGRlZjQ0OWFlMGU5NzRmOGRmYzBcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=