/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/components/IdeologyPage.js":
/*!**********************************************!*\
  !*** ./src/forum/components/IdeologyPage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IdeologyPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/DiscussionPage */ "flarum/forum/components/DiscussionPage");
/* harmony import */ var flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1__);


var IdeologyPage = /*#__PURE__*/function (_DiscussionPage) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(IdeologyPage, _DiscussionPage);
  function IdeologyPage() {
    return _DiscussionPage.apply(this, arguments) || this;
  }
  var _proto = IdeologyPage.prototype;
  _proto.view = function view() {
    return m("div", null, m("header", {
      className: "Hero DiscussionHero DiscussionHero--colored",
      style: "--hero-bg:#ff7a7a;"
    }, m("div", {
      className: "container"
    }, m("ul", {
      className: "DiscussionHero-items"
    }, m("li", {
      className: "item-tags"
    }, m("span", {
      className: "TagsLabel"
    }, m("h1", {
      className: "DiscussionHero-title"
    }, "ProgUnity")))))), m("div", {
      className: "container"
    }, m("div", {
      className: "Post-body"
    }, m("br", null), m("h3", null, "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 ProgUnity?"), m("p", null, "ProgUnity.ru \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E\u043C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u043E\u0432 \u0438 \u043E\u043D\u043B\u0430\u0439\u043D-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u043E\u0439 \u0434\u043B\u044F \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E. \u041C\u044B \u0445\u043E\u0442\u0438\u043C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 IT \u0438 \u0434\u0430\u0442\u044C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u0430\u043C \u0443\u043B\u0443\u0447\u0448\u0430\u0442\u044C \u043D\u0430\u0432\u044B\u043A\u0438 \u0434\u0435\u043B\u044F\u0441\u044C \u0441\u0432\u043E\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C."), m("h3", null, "\u041D\u0430\u0448\u0430 \u043C\u0438\u0441\u0441\u0438\u044F"), m("p", null, "\u041C\u0438\u0441\u0441\u0438\u044F ProgUnity \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0432 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u0432\u0441\u0435\u0445 \u0436\u0435\u043B\u0430\u044E\u0449\u0438\u0445 \u043E\u0431\u0443\u0447\u0438\u0442\u044C\u0441\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u0447\u0435\u0440\u0435\u0437 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u043E\u0432, \u0433\u043E\u0442\u043E\u0432\u043E\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430, \u043E\u0431\u043C\u0435\u043D\u0438\u0432\u0430\u044F\u0441\u044C \u0437\u043D\u0430\u043D\u0438\u044F\u043C\u0438 \u0438 \u043E\u043F\u044B\u0442\u043E\u043C. \u041F\u043B\u0430\u0442\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C\u0441\u044F \u043A\u0430\u043A \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u0432 \u0432\u0438\u0434\u0435 \u043C\u0435\u043D\u0442\u043E\u0440\u0441\u0442\u0432\u0430, \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0443\u0447\u0435\u0431\u043D\u044B\u0445 \u043F\u043B\u0430\u043D\u043E\u0432 \u0438 \u0443\u0434\u043E\u0432\u043B\u0435\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u044F \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 \u0443\u0447\u0430\u0449\u0438\u0445\u0441\u044F. \u0412\u0441\u0435 \u0443\u0447\u0435\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0432 \u043E\u0431\u0449\u0435\u043C \u0434\u043E\u0441\u0442\u0443\u043F\u0435 \u0434\u043B\u044F \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0433\u043E \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F."), m("blockquote", {
      className: "uncited"
    }, m("div", null, m("p", null, m("em", null, "\u041C\u044B \u0440\u0430\u0441\u0446\u0435\u043D\u0438\u0432\u0430\u0435\u043C \u043D\u0430\u0448\u0443 \u043C\u0438\u0441\u0441\u0438\u044E \u043A\u0430\u043A \u0432\u0430\u0436\u043D\u0443\u044E \u0438 \u0446\u0435\u043D\u043D\u0443\u044E \u0432 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u043C \u043C\u0438\u0440\u0435, \u0433\u0434\u0435 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0432\u0441\u0435 \u0431\u043E\u043B\u0435\u0435 \u0432\u043E\u0441\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u043D\u044B\u043C\u0438. \u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u043E\u0432 \u043F\u043E\u043C\u043E\u0433\u0430\u044E\u0442 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C \u0434\u043B\u044F \u0448\u0438\u0440\u043E\u043A\u043E\u0439 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438, \u0432\u043A\u043B\u044E\u0447\u0430\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u043D\u0435 \u0438\u043C\u0435\u0442\u044C \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u044B\u0445 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0435\u0439 \u0434\u043B\u044F \u043E\u043F\u043B\u0430\u0442\u044B \u043F\u043B\u0430\u0442\u043D\u044B\u0445 \u043A\u0443\u0440\u0441\u043E\u0432. \u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u0442\u0430\u043A\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E \u043C\u043E\u0436\u0435\u0442 \u0441\u0442\u0430\u0442\u044C \u0446\u0435\u043D\u043D\u044B\u043C \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u043C \u0437\u043D\u0430\u043D\u0438\u0439 \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 \u0434\u043B\u044F \u0432\u0441\u0435\u0445, \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C \u0435\u0434\u0438\u043D\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0438\u043A\u043E\u0432."), m("em", null, m("strong", null, "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u0421\u0435\u0440\u0431\u0438\u043D"), ". \u041E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C Progunity.")))), m("h3", null, "\u041D\u0430\u0448\u0438 \u0446\u0435\u043B\u0438"), m("ol", {
      style: "list-style-type:decimal"
    }, m("li", null, "\u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0436\u0435\u043B\u0430\u044E\u0449\u0438\u0445."), m("li", null, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u043E\u0432, \u043E\u0431\u043C\u0435\u043D\u0438\u0432\u0430\u044E\u0449\u0435\u0433\u043E\u0441\u044F \u043E\u043F\u044B\u0442\u043E\u043C \u0438 \u0437\u043D\u0430\u043D\u0438\u044F\u043C\u0438."), m("li", null, "\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0438 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0434\u043B\u044F \u043B\u044E\u0434\u0435\u0439 \u0438\u0437 \u043C\u0430\u043B\u043E\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u043D\u044B\u0445 \u0441\u0435\u043C\u0435\u0439 \u0438 \u0440\u0430\u0437\u043D\u044B\u0445 \u0440\u0435\u0433\u0438\u043E\u043D\u043E\u0432."), m("li", null, "\u0421\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0432 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0438 \u0434\u0435\u0442\u0435\u0439 \u0438 \u043F\u043E\u0434\u0440\u043E\u0441\u0442\u043A\u043E\u0432."), m("li", null, "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u0432\u044B\u0441\u043E\u043A\u0438\u0445 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043E\u0432 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u0438\u0437\u043C\u0430 \u0438 \u044D\u0442\u0438\u043A\u0438 \u0432 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438."), m("li", null, "\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u043C\u0435\u0442\u043E\u0434\u043E\u0432 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F."), m("li", null, "\u0420\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0438 \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u0434\u043B\u044F \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u0438 \u043E\u0431\u0449\u0435\u043D\u0438\u044F."), m("li", null, "\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0438\u0435 \u0441\u0444\u0435\u0440\u044B \u0432\u043B\u0438\u044F\u043D\u0438\u044F \u0438 \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0435 \u043D\u043E\u0432\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0438 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432."), m("li", null, "\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430 \u0438 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F \u043B\u0443\u0447\u0448\u0435\u0433\u043E \u043E\u043F\u044B\u0442\u0430 \u0434\u043B\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439."), m("li", null, "\u0420\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0430 \u043A \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044E \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u0447\u0435\u043D\u0438\u043A\u0430 \u0432 \u0438\u0445 \u043B\u0438\u0447\u043D\u043E\u043C \u0438 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u043C \u0440\u043E\u0441\u0442\u0435")), m("h3", null, "\u041D\u0430\u0448\u0438 \u0446\u0435\u043D\u043D\u043E\u0441\u0442\u0438"), m("ol", {
      style: "list-style-type:decimal"
    }, m("li", null, m("strong", null, "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435."), " \u041C\u044B \u0446\u0435\u043D\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0447\u043B\u0435\u043D\u043E\u0432 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430, \u0441\u0442\u0440\u0435\u043C\u044F\u0441\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u0432\u044B\u0441\u043E\u043A\u043E\u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0434\u043B\u044F \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u043D\u0430\u0432\u044B\u043A\u043E\u0432."), m("li", null, m("strong", null, "\u0421\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430."), " \u041C\u044B \u043D\u0430\u0446\u0435\u043B\u0435\u043D\u044B \u043D\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0438 \u043E\u0431\u0443\u0447\u0430\u0435\u0442, \u043E\u0431\u043C\u0435\u043D\u0438\u0432\u0430\u044F\u0441\u044C \u0437\u043D\u0430\u043D\u0438\u044F\u043C\u0438 \u0438 \u043E\u043F\u044B\u0442\u043E\u043C."), m("li", null, m("strong", null, "\u0412\u0437\u0430\u0438\u043C\u043D\u043E\u0435 \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435 \u0438 \u044D\u0442\u0438\u043A\u0430."), " \u041C\u044B \u0446\u0435\u043D\u0438\u043C \u0443\u0432\u0430\u0436\u0435\u043D\u0438\u0435 \u0438 \u044D\u0442\u0438\u043A\u0443 \u0432 \u0441\u0432\u043E\u0435\u0439 \u0440\u0430\u0431\u043E\u0442\u0435, \u0441\u0442\u0440\u0435\u043C\u044F\u0441\u044C \u043A \u0432\u044B\u0441\u043E\u043A\u0438\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430\u043C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0441\u043D\u043E\u0431\u0438\u0437\u043C\u0430 \u0438 \u0446\u0438\u043D\u0438\u0437\u043C\u0430."), m("li", null, m("strong", null, "\u0420\u0430\u0432\u0435\u043D\u0441\u0442\u0432\u043E \u0438 \u0440\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u0438\u0435."), " \u041C\u044B \u0446\u0435\u043D\u0438\u043C \u0440\u0430\u0432\u0435\u043D\u0441\u0442\u0432\u043E \u0438 \u0440\u0430\u0437\u043D\u043E\u043E\u0431\u0440\u0430\u0437\u0438\u0435, \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u044F \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u0443\u044E \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0449\u0443\u044E \u0441\u0440\u0435\u0434\u0443 \u0434\u043B\u044F \u0443\u0447\u0435\u043D\u0438\u043A\u043E\u0432 \u0440\u0430\u0437\u043D\u044B\u0445 \u043A\u0443\u043B\u044C\u0442\u0443\u0440, \u043F\u043E\u043B\u043E\u0432 \u0438 \u0440\u0430\u0441."), m("li", null, m("strong", null, "\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C."), " \u041C\u044B \u0441\u0442\u0440\u0435\u043C\u0438\u043C\u0441\u044F \u0432\u043D\u0435\u0441\u0442\u0438 \u0441\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434 \u0432 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 IT-\u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438 \u0438 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0432 \u0446\u0435\u043B\u043E\u043C, \u043F\u043E\u043C\u043E\u0433\u0430\u044F \u043B\u044E\u0434\u044F\u043C \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u0432 \u0441\u0444\u0435\u0440\u0435 IT"), m("li", null, m("strong", null, "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u044C \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F."), " \u041C\u044B \u0441\u0442\u0440\u0435\u043C\u0438\u043C\u0441\u044F \u043A \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0438 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E, \u043F\u0443\u0431\u043B\u0438\u043A\u0443\u044F \u0432\u0441\u0435 \u043D\u0430\u0448\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0438 \u0441\u0442\u0430\u0442\u044C\u0438 \u0432 \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u043C \u0434\u043E\u0441\u0442\u0443\u043F\u0435."), m("li", null, m("strong", null, "\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0435 \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435."), " \u041C\u044B \u0441\u0442\u0440\u0435\u043C\u0438\u043C\u0441\u044F \u043A \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u043C\u0443 \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044E \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044E \u043A\u0430\u043A \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B, \u0442\u0430\u043A \u0438 \u043C\u0435\u0442\u043E\u0434\u043E\u0432 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F. \u0421\u043B\u0435\u0434\u0438\u043C \u0437\u0430 \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u044F\u043C\u0438 \u0432 IT-\u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438 \u0438 \u0438\u043D\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u043C \u043D\u043E\u0432\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438."), m("li", null, m("strong", null, "\u041E\u0442\u043A\u0440\u044B\u0442\u043E\u0441\u0442\u044C."), " \u041C\u044B \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0438 \u0434\u043E\u0432\u0435\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0430\u043B\u043E\u0433 \u0441 \u0447\u043B\u0435\u043D\u0430\u043C\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u0438 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u043C\u0438, \u0433\u043E\u0442\u043E\u0432\u044B \u0432\u044B\u0441\u043B\u0443\u0448\u0430\u0442\u044C \u0438 \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u044C \u0438\u0445 \u043C\u043D\u0435\u043D\u0438\u044F \u0438 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F."), m("li", null, m("strong", null, "\u0421\u0442\u0440\u0435\u043C\u043B\u0435\u043D\u0438\u0435 \u043A \u043B\u0438\u0434\u0435\u0440\u0441\u0442\u0432\u0443."), " \u041C\u044B \u0441\u0442\u0440\u0435\u043C\u0438\u043C\u0441\u044F \u0441\u0442\u0430\u0442\u044C \u043B\u0438\u0434\u0435\u0440\u043E\u043C \u0432 \u0441\u0444\u0435\u0440\u0435 \u043E\u043D\u043B\u0430\u0439\u043D-\u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E, \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u044F \u0447\u043B\u0435\u043D\u0430\u043C \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u043B\u0443\u0447\u0448\u0438\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0434\u043B\u044F \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F.")), m("h3", null, "\u0424\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u044F \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430"), m("ol", {
      style: "list-style-type:decimal"
    }, m("li", null, "\u0412 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435 \u043C\u044B \u0446\u0435\u043D\u0438\u043C \u0443\u0432\u0430\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0434\u0440\u0443\u0433 \u043A \u0434\u0440\u0443\u0433\u0443, \u0438 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C \u043D\u0435\u0433\u0430\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u0440\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F, \u0442\u0430\u043A\u0438\u0435 \u043A\u0430\u043A \u0441\u043D\u043E\u0431\u0438\u0437\u043C \u0438 \u0446\u0438\u043D\u0438\u0437\u043C. \u041C\u044B \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u043E\u0449\u0440\u044F\u0435\u043C \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0435 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435 \u0438 \u043D\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C \u043B\u0435\u043D\u044C."), m("li", null, "\u0415\u0441\u043B\u0438 \u043A\u0442\u043E-\u0442\u043E \u0437\u0430\u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432\u0430\u043D \u0432 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0438, \u043C\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0433\u043E\u0442\u043E\u0432\u044B \u043F\u043E\u043C\u043E\u0447\u044C \u0438 \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B."), m("li", null, "\u0412 \u043D\u0430\u0448\u0435 \u0432\u0440\u0435\u043C\u044F \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u0438 \u043F\u043E\u0434\u0445\u043E\u0434\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0433\u0443\u0442 \u0437\u0430\u043F\u0443\u0442\u0430\u0442\u044C. \u041C\u044B \u0441\u043E\u0437\u0434\u0430\u043B\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043C\u043E\u0447\u044C \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0443 \u043E\u0432\u043B\u0430\u0434\u0435\u0442\u044C \u043D\u0443\u0436\u043D\u044B\u043C\u0438 \u0437\u043D\u0430\u043D\u0438\u044F\u043C\u0438."), m("li", null, "\u041D\u0430\u0448\u0430 \u0446\u0435\u043B\u044C \u043D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430 \u043A \u0447\u0442\u0435\u043D\u0438\u044E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438, \u043F\u043E\u0442\u043E\u043C\u0443 \u0447\u0442\u043E \u043C\u044B \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u043C, \u043A \u044D\u0442\u043E\u043C\u0443 \u043D\u0443\u0436\u043D\u043E \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C."), m("li", null, "\u0423 \u043D\u0430\u0441 \u043D\u0435\u0442 \u043C\u0430\u043D\u0438\u0438 \u0432\u0435\u043B\u0438\u0447\u0438\u044F \u0438 \u043C\u044B \u043D\u0435 \u0441\u0430\u043C\u043E\u0437\u0432\u0430\u043D\u0446\u044B, \u043C\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0433\u043E\u0442\u043E\u0432\u044B \u0443\u0447\u0438\u0442\u044C\u0441\u044F \u0438 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C\u0441\u044F."), m("li", null, "\u041C\u044B \u043D\u0435 \u043E\u0442\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C\u0441\u044F \u043E\u0442 \u0441\u0432\u043E\u0438\u0445 \u0446\u0435\u043B\u0435\u0439."), m("li", null, "\u0412 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435 \u043C\u044B \u0441\u0447\u0438\u0442\u0430\u0435\u043C, \u0447\u0442\u043E \u043E\u0448\u0438\u0431\u043A\u0438 - \u044D\u0442\u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0434\u043B\u044F \u0440\u043E\u0441\u0442\u0430 \u0438 \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F.")))));
  };
  return IdeologyPage;
}((flarum_forum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_1___default()));


/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/forum/components/HeaderPrimary */ "flarum/forum/components/HeaderPrimary");
/* harmony import */ var flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_IdeologyPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/IdeologyPage */ "./src/forum/components/IdeologyPage.js");




flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().initializers.add('ideology-page', function () {
  //add link to header
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_0__.extend)((flarum_forum_components_HeaderPrimary__WEBPACK_IMPORTED_MODULE_1___default().prototype), 'items', function (items) {
    items.add('ideology', m("a", {
      href: "/ideology"
    }, m("strong", null, "\u041E \u043D\u0430\u0441")));
  });

  //add route
  (flarum_forum_app__WEBPACK_IMPORTED_MODULE_2___default().routes.philosophy) = {
    path: '/ideology',
    component: _components_IdeologyPage__WEBPACK_IMPORTED_MODULE_3__["default"]
  };
});

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/DiscussionPage":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionPage']" ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/DiscussionPage'];

/***/ }),

/***/ "flarum/forum/components/HeaderPrimary":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/HeaderPrimary']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['forum/components/HeaderPrimary'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
// forum.js

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map