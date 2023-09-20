/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Alegreya_Sans_SC/AlegreyaSansSC-Regular.ttf */ \"./src/Alegreya_Sans_SC/AlegreyaSansSC-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./steak-image.jpg */ \"./src/steak-image.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: 'MyFont';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    font-weight: 400;\n    font-style: normal;\n\n}\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    font-family: 'MyFont';\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n    background-attachment: fixed;\n    background-size: calc(100vw);\n    display: flex;\n    flex-direction: column;\n    /* justify-content: center; */\n    align-items: center;\n    gap: 4rem;\n}\n\n.header {\n    background-color: #563232b4;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    align-self: flex-start;\n}\n\n.name {\n    font-weight: 600;\n    color: white;\n    font-size: 5rem;\n    padding-bottom: 1rem;\n}\n\n.tab-container {\n    color: white;\n    font-size: 1.7rem;\n    margin-bottom: 0.5rem;\n    display: flex;\n    gap: 5rem;\n}\n\n.tab:hover {\n    cursor: pointer;\n}\n\n#content {\n    background-color: #563232b4;\n    width: 45rem;\n    height: auto;\n    color: white;\n    padding: 2.5rem 1rem 2.5rem 1rem;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    border-radius: 10px;\n}\n\n#home-image {\n    width: 28rem;\n    height: auto;\n    border-radius: 10px;\n}\n\n.tag-line {\n    font-size: 2rem;\n    font-weight: 700;\n    padding-bottom: 2rem;\n    padding-top: 2rem;\n}\n\n#about-restaurant {\n    list-style-type: none;\n    font-size: 1.2rem;\n    font-weight: 500;\n}\n\n#about-restaurant li {\n    padding-bottom: 0.5rem;\n}\n\n.menu-container {\n    display: flex;\n    flex-direction: column;\n    width: 45rem;\n    height: inherit;\n}\n\n.menu-category {\n    font-size: 2rem;\n    font-weight: 800;\n    padding-bottom: 2rem;\n}\n\n.menu-section {\n   display: grid;\n   grid-template-columns: repeat(2, 0.5fr);\n   grid-template-rows: auto;\n   column-gap: 2rem;\n   row-gap: 1rem;\n   margin-bottom: 2rem;\n   \n}\n\n.food-container {\n    display: flex;\n    flex-direction: column;\n    justify-items: baseline;\n    align-items: center;\n}\n\n.food-img {\n    max-width: 296px;\n    height: 198px;\n    border-radius: 8px;\n    margin-bottom: 0.5rem;\n    justify-self: flex-start;\n}\n\n.food-des {\n    max-width: 296px;\n    font-size: 1.2rem;\n    font-weight: 550;\n    justify-self: flex-end;\n}\n\n.contacts-info {\n    text-align: left;\n    padding-left: 2rem;\n    margin-bottom: 1.5rem;\n}\n\n.contact-container :last-child {\n    margin-bottom: 0 !important;\n}\n\n.contact-head {\n    font-size: 2rem;\n    font-weight: 500;\n    margin-bottom: 0.5rem;\n}\n\n.contacts-info {\n    font-size: 1.3rem;\n}\n\n.footer {\n    background-color: #563232b4;\n    width: 100vw;\n    color: white;\n    ;\n    text-align: center;\n    font-size: 1rem;\n    padding: 0.75rem;\n    justify-self: flex-end;\n}\n\na {\n    color: white;\n    text-decoration: none;\n}\n\na:hover {\n    font-weight: bold;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contactContainer = document.createElement('div');\ncontactContainer.classList.add('contact-container');\n\n// const contactHead = document.createElement('h2');\n// contactHead.classList.add('-contact-head');\n// contactHead.textContent = 'Contact Us';\n// contactContainer.appendChild(contactHead);\n\nconst addressDiv = document.createElement('div');\naddressDiv.classList.add('contacts-info');\ncontactContainer.appendChild(addressDiv);\n\nconst addHead = document.createElement('p');\naddHead.classList.add('contact-head');\naddHead.textContent = 'Address';\nconst addLine_1 = document.createElement('p');\naddLine_1.textContent = '123 Main Street';\nconst addLine_2 = document.createElement('p');\naddLine_2.textContent = 'Anytown, CA 12345';\n\naddressDiv.appendChild(addHead);\naddressDiv.appendChild(addLine_1);\naddressDiv.appendChild(addLine_2);\n\nconst operationsDiv = document.createElement('div');\noperationsDiv.classList.add('contacts-info');\ncontactContainer.appendChild(operationsDiv);\n\nconst operationsHead = document.createElement('p');\noperationsHead.classList.add('contact-head');\noperationsHead.textContent = 'Hours of Operation';\nconst operationsLine_1 = document.createElement('p');\noperationsLine_1.textContent = 'Sunday - Thursday: 11am - 10pm';\nconst operationsLine_2 = document.createElement('p');\noperationsLine_2.textContent = 'Friday - Saturday: 11am - 11pm';\n\noperationsDiv.appendChild(operationsHead);\noperationsDiv.appendChild(operationsLine_1);\noperationsDiv.appendChild(operationsLine_2);\n\nconst reservationDiv = document.createElement('div');\nreservationDiv.classList.add('contacts-info');\ncontactContainer.appendChild(reservationDiv);\n\nconst reservationHead = document.createElement('p');\nreservationHead.classList.add('contact-head');\nreservationHead.textContent = 'Reservstions';\nconst reservationPara = document.createElement('p');\nreservationPara.textContent = 'We accept reservations for parties of 6 or more. Please call us at (555) 555-5555 to make a reservation.';\n\nreservationDiv.appendChild(reservationHead);\nreservationDiv.appendChild(reservationPara);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactContainer);\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home_image_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-image.jpg */ \"./src/home-image.jpg\");\n\n\nfunction loadHome() {\n    const homeContainer = document.createElement('div');\n    homeContainer.setAttribute('class', 'home-container');\n\n    if (homeContainer) {\n        console.log('homeContainer is ok');\n    }\n\n    const homeImg = document.createElement('img');\n    homeImg.setAttribute('id', 'home-image');\n    homeImg.setAttribute('src', _home_image_jpg__WEBPACK_IMPORTED_MODULE_0__);\n    homeImg.setAttribute('alt', 'smoking steak meal');\n    homeContainer.appendChild(homeImg);\n\n    const headLine = document.createElement('p');\n    headLine.textContent = \"Steak: Done Right, Every Time\";\n    headLine.classList.add('tag-line');\n    homeContainer.appendChild(headLine);\n\n    const list = document.createElement('ul');\n    list.setAttribute('id', 'about-restaurant');\n    homeContainer.appendChild(list);\n\n    const li_1 = document.createElement('li');\n    li_1.textContent = 'Our restaurant serves classic American fare, with a focus on fresh, locally-sourced ingredients.';\n    list.appendChild(li_1);\n\n    const li_2 = document.createElement('li');\n    li_2.textContent = 'The menu features a wide variety of dishes, including steaks, seafood, pasta, and pizzas.';\n    list.appendChild(li_2);\n\n    const li_3 = document.createElement('li');\n    li_3.textContent = 'The interior of our restaurant is warm and inviting, with dark wood accents and soft lighting.';\n    list.appendChild(li_3);\n\n    const content = document.querySelector('#content');\n    content.appendChild(homeContainer);\n\n    const homeBtn = document.getElementById('home');\n    homeBtn.style.borderBottom = '2px solid white';\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_image_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-image.jpg */ \"./src/home-image.jpg\");\n\n\n\n\n\n\nconsole.log('test');\nconst home = document.querySelector('.home-container');\nif (home === null) {\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\nconst menuBtn = document.querySelector('#menu');\nmenuBtn.addEventListener('click', () => {\n\n    const home = document.querySelector('.home-container');\n    const contact = document.querySelector('.contact-container');\n    console.log(home);\n    if (home !== null) {\n        console.log('home removed');\n        const homeBtn = document.getElementById('home');\n        homeBtn.style.borderBottom = 'none';\n        home.remove();\n    } else if (contact !== null) {\n        console.log('contact removed');\n        const contactBtn = document.getElementById('contact');\n        contactBtn.style.borderBottom = 'none';\n        contact.remove();\n    }\n\n    const menuBtn = document.getElementById('menu');\n    menuBtn.style.borderBottom = '2px solid white';\n\n    const content = document.getElementById('content');\n    content.appendChild(_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n});\n\nconst contactBtn = document.querySelector('#contact');\ncontactBtn.addEventListener('click', () => {\n    const home = document.querySelector('.home-container');\n    const menu = document.querySelector('.menu-container');\n    if (home !== null) {\n        console.log('home removed');\n        const homeBtn = document.getElementById('home');\n        homeBtn.style.borderBottom = 'none';\n        home.remove();\n    } else if (menu !== null) {\n        console.log('menu removed');\n        const menuBtn = document.getElementById('menu');\n        menuBtn.style.borderBottom = 'none';\n        menu.remove();\n    }\n\n    const contactBtn = document.getElementById('contact');\n    contactBtn.style.borderBottom = '2px solid white';\n\n    const content = document.getElementById('content');\n    content.appendChild(_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n});\n\nconst homeBtn = document.querySelector('#home');\nhomeBtn.addEventListener('click', () => {\n    const home = document.querySelector('.home-container');\n    if (home !== null) {\n        console.log('home removed');\n        home.remove();\n    }\n\n    const menu = document.querySelector('.menu-container');\n    const contact = document.querySelector('.contact-container');\n\n    if (menu !== null) {\n        console.log('menu removed');\n        const menuBtn = document.getElementById('menu');\n        menuBtn.style.borderBottom = 'none';\n        menu.remove();\n    }\n    else if (contact !== null) {\n        console.log('contact removed');\n        const contactBtn = document.getElementById('contact');\n        contactBtn.style.borderBottom = 'none';\n        contact.remove();\n    }\n\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-1.jpg */ \"./src/app-1.jpg\");\n/* harmony import */ var _app_2_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-2.jpeg */ \"./src/app-2.jpeg\");\n/* harmony import */ var _app_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-3.jpg */ \"./src/app-3.jpg\");\n/* harmony import */ var _app_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-4.jpg */ \"./src/app-4.jpg\");\n/* harmony import */ var _main_1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-1.jpg */ \"./src/main-1.jpg\");\n/* harmony import */ var _main_2_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-2.jpeg */ \"./src/main-2.jpeg\");\n/* harmony import */ var _main_3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-3.jpg */ \"./src/main-3.jpg\");\n/* harmony import */ var _main_4_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-4.jpg */ \"./src/main-4.jpg\");\n/* harmony import */ var _side_1_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./side-1.jpg */ \"./src/side-1.jpg\");\n/* harmony import */ var _side_2_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./side-2.jpg */ \"./src/side-2.jpg\");\n/* harmony import */ var _side_3_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./side-3.jpg */ \"./src/side-3.jpg\");\n/* harmony import */ var _side_4_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./side-4.jpg */ \"./src/side-4.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst menuSection = (idName) => {\n    const divEle = document.createElement('div');\n    divEle.setAttribute('id', idName);\n    divEle.classList.add('menu-section');\n    return divEle;\n};\n\nconst createCategoryHeading = (category) => {\n    const categoryHead = document.createElement('p');\n    categoryHead.classList.add('menu-category');\n    categoryHead.textContent = category;\n    return categoryHead;\n};\n\nconst foodItem = (pic, altName, foodDes) => {\n    const foodContainer = document.createElement('div');\n    foodContainer.setAttribute('class', 'food-container');\n\n    const foodPic = document.createElement('img');\n    foodPic.classList.add('food-img');\n    foodPic.setAttribute('src', pic);\n    foodPic.setAttribute('alt', altName);\n\n    const foodDesEle = document.createElement('p');\n    foodDesEle.setAttribute('class', 'food-des');\n    foodDesEle.textContent = foodDes;\n\n    foodContainer.appendChild(foodPic);\n    foodContainer.appendChild(foodDesEle);\n\n    return foodContainer;\n};\n\n\nconst menuContainer = document.createElement('div');\nmenuContainer.setAttribute('class', 'menu-container');\n\nconst appetizerHead = createCategoryHeading('Appetizers');\nmenuContainer.appendChild(appetizerHead);\n\nconst appetizers = menuSection('appetizers');\nmenuContainer.appendChild(appetizers);\n\nconst appetizer_1 = foodItem(_app_1_jpg__WEBPACK_IMPORTED_MODULE_0__, 'Fried calamari with marinara sauce', 'Fried calamari with marinara sauce ($12)');\nconst appetizer_2 = foodItem(_app_2_jpeg__WEBPACK_IMPORTED_MODULE_1__, 'Quesadilla with grilled chicken or steak, cheese, and guacamole', 'Quesadilla with grilled chicken or steak, cheese, and guacamole ($10)');\nconst appetizer_3 = foodItem(_app_3_jpg__WEBPACK_IMPORTED_MODULE_2__, 'French onion soup with grilled cheese croutons', 'French onion soup with grilled cheese croutons ($11)');\nconst appetizer_4 = foodItem(_app_4_jpg__WEBPACK_IMPORTED_MODULE_3__, 'Classic Caesar salad', 'Classic Caesar salad with romaine lettuce, croutons, Parmesan cheese, and Caesar dressing ($12)');\n\nappetizers.appendChild(appetizer_1);\nappetizers.appendChild(appetizer_2);\nappetizers.appendChild(appetizer_3);\nappetizers.appendChild(appetizer_4);\n\nconst mainCourseHead = createCategoryHeading('Main Courses');\nmenuContainer.appendChild(mainCourseHead);\n\nconst mains = menuSection('main-course');\nmenuContainer.appendChild(mains);\n\nconst mainCourse_1 = foodItem(_main_1_jpg__WEBPACK_IMPORTED_MODULE_4__, 'New York strip steak', 'New York strip steak with mashed potatoes and grilled vegetables ($28)');\nconst mainCourse_2 = foodItem(_main_2_jpeg__WEBPACK_IMPORTED_MODULE_5__, 'Grilled salmon', 'Grilled salmon with roasted asparagus and risotto ($26)');\nconst mainCourse_3 = foodItem(_main_3_jpg__WEBPACK_IMPORTED_MODULE_6__, 'Chicken parmesan', 'Chicken parmesan with spaghetti and marinara sauce ($22)');\nconst mainCourse_4 = foodItem(_main_4_jpg__WEBPACK_IMPORTED_MODULE_7__, 'Meatloaf with mashed potatoes', 'Meatloaf with mashed potatoes and green beans ($18)');\n\nmains.appendChild(mainCourse_1);\nmains.appendChild(mainCourse_2);\nmains.appendChild(mainCourse_3);\nmains.appendChild(mainCourse_4);\n\nconst sideDishHead = createCategoryHeading('Side Dishes');\nmenuContainer.appendChild(sideDishHead);\n\nconst sides = menuSection('side-dishes');\nmenuContainer.appendChild(sides);\n\nconst sideDish_1 = foodItem(_side_1_jpg__WEBPACK_IMPORTED_MODULE_8__, 'Mashed potatoes ', 'Mashed potatoes ($5)');\nconst sideDish_2 = foodItem(_side_2_jpg__WEBPACK_IMPORTED_MODULE_9__, 'French fries', 'French fries ($4)');\nconst sideDish_3 = foodItem(_side_3_jpg__WEBPACK_IMPORTED_MODULE_10__, 'Coleslaw', 'Coleslaw ($3)');\nconst sideDish_4 = foodItem(_side_4_jpg__WEBPACK_IMPORTED_MODULE_11__, 'Steamed vegetables', 'Steamed vegetables ($4)');\n\nsides.appendChild(sideDish_1);\nsides.appendChild(sideDish_2);\nsides.appendChild(sideDish_3);\nsides.appendChild(sideDish_4);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuContainer);\n\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/Alegreya_Sans_SC/AlegreyaSansSC-Regular.ttf":
/*!*********************************************************!*\
  !*** ./src/Alegreya_Sans_SC/AlegreyaSansSC-Regular.ttf ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d215c944a70a1f2ba744.ttf\";\n\n//# sourceURL=webpack:///./src/Alegreya_Sans_SC/AlegreyaSansSC-Regular.ttf?");

/***/ }),

/***/ "./src/app-1.jpg":
/*!***********************!*\
  !*** ./src/app-1.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b60d1cd021779947ff1a.jpg\";\n\n//# sourceURL=webpack:///./src/app-1.jpg?");

/***/ }),

/***/ "./src/app-2.jpeg":
/*!************************!*\
  !*** ./src/app-2.jpeg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4d3078f57cbf25953539.jpeg\";\n\n//# sourceURL=webpack:///./src/app-2.jpeg?");

/***/ }),

/***/ "./src/app-3.jpg":
/*!***********************!*\
  !*** ./src/app-3.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a4f62419dd9c73862a9c.jpg\";\n\n//# sourceURL=webpack:///./src/app-3.jpg?");

/***/ }),

/***/ "./src/app-4.jpg":
/*!***********************!*\
  !*** ./src/app-4.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4606b4294926c30f7296.jpg\";\n\n//# sourceURL=webpack:///./src/app-4.jpg?");

/***/ }),

/***/ "./src/home-image.jpg":
/*!****************************!*\
  !*** ./src/home-image.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a401de045aa0c512c308.jpg\";\n\n//# sourceURL=webpack:///./src/home-image.jpg?");

/***/ }),

/***/ "./src/main-1.jpg":
/*!************************!*\
  !*** ./src/main-1.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"59af0bd30d675c93e939.jpg\";\n\n//# sourceURL=webpack:///./src/main-1.jpg?");

/***/ }),

/***/ "./src/main-2.jpeg":
/*!*************************!*\
  !*** ./src/main-2.jpeg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0ac5289768893a922f63.jpeg\";\n\n//# sourceURL=webpack:///./src/main-2.jpeg?");

/***/ }),

/***/ "./src/main-3.jpg":
/*!************************!*\
  !*** ./src/main-3.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ebb449aa719e5e841585.jpg\";\n\n//# sourceURL=webpack:///./src/main-3.jpg?");

/***/ }),

/***/ "./src/main-4.jpg":
/*!************************!*\
  !*** ./src/main-4.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c659b8393ac8f335a88b.jpg\";\n\n//# sourceURL=webpack:///./src/main-4.jpg?");

/***/ }),

/***/ "./src/side-1.jpg":
/*!************************!*\
  !*** ./src/side-1.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"08e64b68a7a0d9dd00b5.jpg\";\n\n//# sourceURL=webpack:///./src/side-1.jpg?");

/***/ }),

/***/ "./src/side-2.jpg":
/*!************************!*\
  !*** ./src/side-2.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3c8ca60e9dc108aed5df.jpg\";\n\n//# sourceURL=webpack:///./src/side-2.jpg?");

/***/ }),

/***/ "./src/side-3.jpg":
/*!************************!*\
  !*** ./src/side-3.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7d496006a9c899a1994d.jpg\";\n\n//# sourceURL=webpack:///./src/side-3.jpg?");

/***/ }),

/***/ "./src/side-4.jpg":
/*!************************!*\
  !*** ./src/side-4.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1bb68cea1d84eb55c5a7.jpg\";\n\n//# sourceURL=webpack:///./src/side-4.jpg?");

/***/ }),

/***/ "./src/steak-image.jpg":
/*!*****************************!*\
  !*** ./src/steak-image.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"03a2557f6687b2e26cca.jpg\";\n\n//# sourceURL=webpack:///./src/steak-image.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;