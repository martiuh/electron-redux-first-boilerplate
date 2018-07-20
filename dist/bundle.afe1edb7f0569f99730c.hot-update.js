exports.id = "bundle";
exports.modules = {

/***/ "./src/configureStore.js":
/*!*******************************!*\
  !*** ./src/configureStore.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n// import persistState from 'redux-localstorage'\n\nvar _redux = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n\nvar _reduxFirstRouter = __webpack_require__(/*! redux-first-router */ \"./node_modules/redux-first-router/dist/index.js\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _routes = __webpack_require__(/*! ./routes */ \"./src/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _options = __webpack_require__(/*! ./options */ \"./src/options.js\");\n\nvar _options2 = _interopRequireDefault(_options);\n\nvar _reducers = __webpack_require__(/*! ./reducers */ \"./src/reducers/index.js\");\n\nvar reducers = _interopRequireWildcard(_reducers);\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./src/actions/index.js\");\n\nvar actionCreators = _interopRequireWildcard(_actions);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar _default = function _default(history) {\n  var _connectRoutes = (0, _reduxFirstRouter.connectRoutes)(history, _routes2.default, _options2.default),\n      reducer = _connectRoutes.reducer,\n      middleware = _connectRoutes.middleware,\n      enhancer = _connectRoutes.enhancer;\n\n  var rootReducer = (0, _redux.combineReducers)(_extends({}, reducers, { location: reducer }));\n  var middlewares = (0, _redux.applyMiddleware)(middleware);\n  var REDUX_THUNK = (0, _redux.applyMiddleware)(_reduxThunk2.default);\n\n  var enhancers = (0, _redux.compose)(enhancer, middlewares, REDUX_THUNK);\n\n  var initialClientState = {};\n  var preLoadedState = _extends({}, initialClientState);\n\n  var store = (0, _redux.createStore)(rootReducer, preLoadedState, enhancers);\n\n  if (true) {\n    module.hot.accept(/*! ./reducers/index */ \"./src/reducers/index.js\", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function () {\n      var reducers = __webpack_require__(/*! ./reducers/index */ \"./src/reducers/index.js\");\n      console.log({ reducers: reducers });\n      var rootReducer = (0, _redux.combineReducers)(_extends({}, reducers, { location: reducer }));\n      store.replaceReducer(rootReducer);\n    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });\n  }\n\n  return store;\n};\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, 'default', '/home/martiuh/Apps/electron-martiuh-boilerplate/src/configureStore.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/configureStore.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _createBrowserHistory = __webpack_require__(/*! history/createBrowserHistory */ \"./node_modules/history/createBrowserHistory.js\");\n\nvar _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);\n\nvar _App = __webpack_require__(/*! ./containers/App */ \"./src/containers/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\");\n\nvar _configureStore = __webpack_require__(/*! ./configureStore */ \"./src/configureStore.js\");\n\nvar _configureStore2 = _interopRequireDefault(_configureStore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar history = (0, _createBrowserHistory2.default)();\n\nvar store = (0, _configureStore2.default)(history);\n\nvar render = function render(App) {\n  var appRoot = document.getElementById('app');\n\n  _reactDom2.default.render(_react2.default.createElement(\n    _reactHotLoader.AppContainer,\n    null,\n    _react2.default.createElement(\n      _reactRedux.Provider,\n      { store: store },\n      _react2.default.createElement(App, null)\n    )\n  ), appRoot);\n};\n\nrender(_App2.default);\n\nif (true) {\n  module.hot.accept(/*! ./containers/App */ \"./src/containers/App.js\", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function () {\n    var App = __webpack_require__(/*! ./containers/App */ \"./src/containers/App.js\").default;\n\n    render(App);\n  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });\n}\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(history, 'history', '/home/martiuh/Apps/electron-martiuh-boilerplate/src/index.js');\n  reactHotLoader.register(store, 'store', '/home/martiuh/Apps/electron-martiuh-boilerplate/src/index.js');\n  reactHotLoader.register(render, 'render', '/home/martiuh/Apps/electron-martiuh-boilerplate/src/index.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

};