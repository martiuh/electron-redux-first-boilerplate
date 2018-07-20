exports.id = "bundle";
exports.modules = {

/***/ "./src sync recursive":
/*!******************!*\
  !*** ./src sync ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error('Cannot find module \"' + req + '\".');\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src sync recursive\";\n\n//# sourceURL=webpack:///./src_sync?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module, __dirname) {\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _createBrowserHistory = __webpack_require__(/*! history/createBrowserHistory */ \"./node_modules/history/createBrowserHistory.js\");\n\nvar _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);\n\nvar _App = __webpack_require__(/*! ./containers/App */ \"./src/containers/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\");\n\nvar _configureStore = __webpack_require__(/*! ./configureStore */ \"./src/configureStore.js\");\n\nvar _configureStore2 = _interopRequireDefault(_configureStore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar history = (0, _createBrowserHistory2.default)();\n\nvar store = (0, _configureStore2.default)(history);\n\nvar render = function render(App) {\n  var appRoot = document.getElementById('app');\n\n  _reactDom2.default.render(_react2.default.createElement(\n    _reactHotLoader.AppContainer,\n    null,\n    _react2.default.createElement(\n      _reactRedux.Provider,\n      { store: store },\n      _react2.default.createElement(App, null)\n    )\n  ), appRoot);\n};\n\nrender(_App2.default);\n\nif (true) {\n  var AppFile = __dirname + '/containers/App';\n  module.hot.accept(AppFile, function () {\n    var App = __webpack_require__(\"./src sync recursive\")(AppFile).default;\n    console.log('Empezando a darle');\n    render(App);\n  });\n}\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(history, 'history', '/home/martiuh/Apps/electron-martiuh-boilerplate/src/index.js');\n  reactHotLoader.register(store, 'store', '/home/martiuh/Apps/electron-martiuh-boilerplate/src/index.js');\n  reactHotLoader.register(render, 'render', '/home/martiuh/Apps/electron-martiuh-boilerplate/src/index.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module), \"/\"))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

};