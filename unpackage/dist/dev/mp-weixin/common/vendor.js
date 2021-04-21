(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  redirectTo: redirectTo,
  navigateTo: navigateTo,
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"QINGHELI-Employee","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          // eslint-disable-next-line no-sparse-arrays
          ret.push(handler.apply(handlerCtx, (Array.isArray(params) ? params : []).concat([,,,,,,,,,, event])));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 11:
/*!************************************************************************!*\
  !*** C:/Users/dell/Desktop/QINGHELI-Employee/static/style/common.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"mainColor":"#00C777","titleColor":"#333333","subColor":"#1E1E1E","greyColor":"#909090"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"QINGHELI-Employee","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"QINGHELI-Employee","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"QINGHELI-Employee","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"QINGHELI-Employee","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 4:
/*!**********************************************************!*\
  !*** C:/Users/dell/Desktop/QINGHELI-Employee/pages.json ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 60:
/*!*****************************************************************************!*\
  !*** C:/Users/dell/Desktop/QINGHELI-Employee/pages/jobWanted/city/citys.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var Citys = [
{
  title: "热门城市",
  type: 'hot',
  item: [

  {
    "name": "北京",
    "key": "热门",
    "test": "testValue" },

  {
    "name": "上海",
    "key": "热门" },

  {
    "name": "广州",
    "key": "热门" },

  {
    "name": "深圳",
    "key": "热门" },

  {
    "name": "成都",
    "key": "热门" },


  {
    "name": "重庆",
    "key": "热门" },

  {
    "name": "天津",
    "key": "热门" },

  {
    "name": "杭州",
    "key": "热门" },

  {
    "name": "南京",
    "key": "热门" },

  {
    "name": "苏州",
    "key": "热门" },

  {
    "name": "武汉",
    "key": "热门" },


  {
    "name": "西安",
    "key": "热门" }] },




{
  title: "A",
  item: [
  {
    "name": "阿坝",
    "key": "A" },

  {
    "name": "阿拉善",
    "key": "A" },

  {
    "name": "阿里",
    "key": "A" },

  {
    "name": "安康",
    "key": "A" },

  {
    "name": "安庆",
    "key": "A" },


  {
    "name": "鞍山",
    "key": "A" },


  {
    "name": "安顺",
    "key": "A" },


  {
    "name": "安阳",
    "key": "A" },


  {
    "name": "澳门",
    "key": "A" }] },


{
  title: "B",
  item: [
  {
    "name": "北京",
    "key": "B" },

  {
    "name": "白银",
    "key": "B" },

  {
    "name": "保定",
    "key": "B" },

  {
    "name": "宝鸡",
    "key": "B" },

  {
    "name": "保山",
    "key": "B" },

  {
    "name": "包头",
    "key": "B" },

  {
    "name": "巴中",
    "key": "B" },


  {
    "name": "北海",
    "key": "B" },


  {
    "name": "蚌埠",
    "key": "B" },


  {
    "name": "本溪",
    "key": "B" },


  {
    "name": "毕节",
    "key": "B" },


  {
    "name": "滨州",
    "key": "B" },


  {
    "name": "百色",
    "key": "B" },


  {
    "name": "亳州",
    "key": "B" }] },


{
  title: "C",
  item: [
  {
    "name": "重庆",
    "key": "C" },

  {
    "name": "成都",
    "key": "C" },

  {
    "name": "长沙",
    "key": "C" },

  {
    "name": "长春",
    "key": "C" },

  {
    "name": "沧州",
    "key": "C" },

  {
    "name": "常德",
    "key": "C" },

  {
    "name": "昌都",
    "key": "C" },


  {
    "name": "长治",
    "key": "C" },


  {
    "name": "常州",
    "key": "C" },


  {
    "name": "巢湖",
    "key": "C" },


  {
    "name": "潮州",
    "key": "C" },


  {
    "name": "承德",
    "key": "C" },


  {
    "name": "郴州",
    "key": "C" },


  {
    "name": "赤峰",
    "key": "C" },


  {
    "name": "池州",
    "key": "C" },


  {
    "name": "崇左",
    "key": "C" },


  {
    "name": "楚雄",
    "key": "C" },


  {
    "name": "滁州",
    "key": "C" },


  {
    "name": "朝阳",
    "key": "C" }] },


{
  title: "D",
  item: [
  {
    "name": "大连",
    "key": "D" },

  {
    "name": "东莞",
    "key": "D" },

  {
    "name": "大理",
    "key": "D" },

  {
    "name": "丹东",
    "key": "D" },

  {
    "name": "大庆",
    "key": "D" },

  {
    "name": "大同",
    "key": "D" },

  {
    "name": "大兴安岭",
    "key": "D" },


  {
    "name": "德宏",
    "key": "D" },


  {
    "name": "德阳",
    "key": "D" },


  {
    "name": "德州",
    "key": "D" },


  {
    "name": "定西",
    "key": "D" },


  {
    "name": "迪庆",
    "key": "D" },


  {
    "name": "东营",
    "key": "D" }] },



{
  title: "E",
  item: [
  {
    "name": "鄂尔多斯",
    "key": "E" },


  {
    "name": "恩施",
    "key": "E" },


  {
    "name": "鄂州",
    "key": "E" }] },


{
  title: "F",
  item: [
  {
    "name": "福州",
    "key": "F" },


  {
    "name": "防城港",
    "key": "F" },


  {
    "name": "佛山",
    "key": "F" },


  {
    "name": "抚顺",
    "key": "F" },


  {
    "name": "抚州",
    "key": "F" },


  {
    "name": "阜新",
    "key": "F" },


  {
    "name": "阜阳",
    "key": "F" }] },


{
  title: "G",
  item: [
  {
    "name": "广州",
    "key": "G" },

  {
    "name": "赣州",
    "key": "G" },

  {
    "name": "桂林",
    "key": "G" },

  {
    "name": "贵阳",
    "key": "G" },

  {
    "name": "甘南",
    "key": "G" },


  {
    "name": "甘孜",
    "key": "G" },

  {
    "name": "广安",
    "key": "G" },


  {
    "name": "广元",
    "key": "G" },


  {
    "name": "果洛",
    "key": "G" },


  {
    "name": "贵港",
    "key": "G" }] },



{

  title: "H",
  item: [
  {
    "name": "杭州",
    "key": "H" },

  {
    "name": "哈尔滨",
    "key": "H" },

  {
    "name": "合肥",
    "key": "H" },

  {
    "name": "海口",
    "key": "H" },

  {
    "name": "海东",
    "key": "H" },

  {
    "name": "海北",
    "key": "H" },

  {
    "name": "海南",
    "key": "H" },


  {
    "name": "海西",
    "key": "H" },


  {
    "name": "邯郸",
    "key": "H" },



  {
    "name": "汉中",
    "key": "H" },


  {
    "name": "鹤壁",
    "key": "H" },


  {
    "name": "河池",
    "key": "H" },


  {
    "name": "鹤岗",
    "key": "H" },


  {
    "name": "黑河",
    "key": "H" },


  {
    "name": "衡水",
    "key": "H" },


  {
    "name": "衡阳",
    "key": "H" },



  {
    "name": "河源",
    "key": "H" },


  {
    "name": "贺州",
    "key": "H" },


  {
    "name": "红河",
    "key": "H" },


  {
    "name": "淮安",
    "key": "H" },


  {
    "name": "淮北",
    "key": "H" },


  {
    "name": "怀化",
    "key": "H" },


  {
    "name": "淮南",
    "key": "H" },



  {
    "name": "黄冈",
    "key": "H" },


  {
    "name": "黄南",
    "key": "H" },


  {
    "name": "黄山",
    "key": "H" },

  {
    "name": "黄石",
    "key": "H" },

  {
    "name": "惠州",
    "key": "H" },

  {
    "name": "葫芦岛",
    "key": "H" },

  {
    "name": "呼伦贝尔",
    "key": "H" },

  {
    "name": "湖州",
    "key": "H" },


  {
    "name": "菏泽",
    "key": "H" }] },



{
  title: "J",
  item: [

  {
    "name": "济南",
    "key": "J" },

  {
    "name": "佳木斯",
    "key": "J" },

  {
    "name": "吉安",
    "key": "J" },

  {
    "name": "江门",
    "key": "J" },

  {
    "name": "焦作",
    "key": "J" },

  {
    "name": "嘉兴",
    "key": "J" },

  {
    "name": "嘉峪关",
    "key": "J" },


  {
    "name": "揭阳",
    "key": "J" },



  {
    "name": "吉林",
    "key": "J" },


  {
    "name": "金昌",
    "key": "J" },


  {
    "name": "晋城",
    "key": "J" },


  {
    "name": "景德镇",
    "key": "J" },


  {
    "name": "荆门",
    "key": "J" },


  {
    "name": "荆州",
    "key": "J" },


  {
    "name": "金华",
    "key": "J" },



  {
    "name": "济宁",
    "key": "J" },


  {
    "name": "晋中",
    "key": "J" },


  {
    "name": "锦州",
    "key": "J" },


  {
    "name": "九江",
    "key": "J" },


  {
    "name": "酒泉",
    "key": "J" }] },


{
  title: "K",
  item: [
  {
    "name": "昆明",
    "key": "K" },



  {

    "name": "开封",
    "key": "K" }] },


{

  title: "L",
  item: [
  {
    "name": "兰州",
    "key": "L" },

  {
    "name": "拉萨",
    "key": "L" },

  {
    "name": "来宾",
    "key": "L" },

  {
    "name": "莱芜",
    "key": "L" },

  {
    "name": "廊坊",
    "key": "L" },

  {
    "name": "乐山",
    "key": "L" },

  {
    "name": "凉山",
    "key": "L" },


  {
    "name": "连云港",
    "key": "L" },



  {
    "name": "聊城",
    "key": "L" },



  {
    "name": "辽阳",
    "key": "L" },


  {
    "name": "辽源",
    "key": "L" },


  {
    "name": "丽江",
    "key": "L" },


  {
    "name": "临沧",
    "key": "L" },


  {
    "name": "临汾",
    "key": "L" },


  {
    "name": "临夏",
    "key": "L" },



  {
    "name": "临沂",
    "key": "L" },



  {
    "name": "林芝",
    "key": "L" },


  {
    "name": "丽水",
    "key": "L" },


  {
    "name": "六安",
    "key": "L" },


  {
    "name": "六盘水",
    "key": "L" },


  {
    "name": "柳州",
    "key": "L" },


  {
    "name": "陇南",
    "key": "L" },



  {
    "name": "龙岩",
    "key": "L" },



  {
    "name": "娄底",
    "key": "L" },


  {
    "name": "漯河",
    "key": "L" },


  {
    "name": "洛阳",
    "key": "L" },

  {
    "name": "泸州",
    "key": "L" },

  {
    "name": "吕梁",
    "key": "L" }] },



{

  title: "M",
  item: [
  {
    "name": "马鞍山",
    "key": "M" },


  {
    "name": "茂名",
    "key": "M" },


  {
    "name": "眉山",
    "key": "M" },


  {
    "name": "梅州",
    "key": "M" },


  {
    "name": "绵阳",
    "key": "M" },


  {
    "name": "牡丹江",
    "key": "M" }] },



{
  title: "N",
  item: [

  {
    "name": "南京",
    "key": "N" },

  {
    "name": "南昌",
    "key": "N" },

  {
    "name": "南宁",
    "key": "N" },

  {
    "name": "南充",
    "key": "N" },

  {
    "name": "南平",
    "key": "N" },

  {
    "name": "南通",
    "key": "N" },

  {
    "name": "南阳",
    "key": "N" },


  {
    "name": "那曲",
    "key": "N" },



  {
    "name": "内江",
    "key": "N" },


  {
    "name": "宁德",
    "key": "N" },


  {
    "name": "怒江",
    "key": "N" }] },




{
  title: "P",
  item: [

  {
    "name": "盘锦",
    "key": "P" },


  {
    "name": "攀枝花",
    "key": "P" },


  {
    "name": "平顶山",
    "key": "P" },


  {
    "name": "平凉",
    "key": "P" },


  {
    "name": "萍乡",
    "key": "P" },


  {
    "name": "莆田",
    "key": "P" },


  {
    "name": "濮阳",
    "key": "P" }] },



{
  title: "Q",
  item: [

  {
    "name": "青岛",
    "key": "Q" },

  {
    "name": "黔东南",
    "key": "Q" },

  {
    "name": "黔南",
    "key": "Q" },

  {
    "name": "黔西南",
    "key": "Q" },

  {
    "name": "庆阳",
    "key": "Q" },

  {
    "name": "清远",
    "key": "Q" },

  {
    "name": "秦皇岛",
    "key": "Q" },


  {
    "name": "钦州",
    "key": "Q" },


  {
    "name": "齐齐哈尔",
    "key": "Q" },


  {
    "name": "泉州",
    "key": "Q" },


  {
    "name": "曲靖",
    "key": "Q" },


  {
    "name": "衢州",
    "key": "Q" }] },




{

  title: "R",
  item: [
  {
    "name": "日喀则",
    "key": "R" },

  {
    "name": "日照",
    "key": "R" }] },


{

  title: "S",
  item: [
  {
    "name": "上海",
    "key": "S" },

  {
    "name": "深圳",
    "key": "S" },

  {
    "name": "苏州",
    "key": "S" },

  {
    "name": "沈阳",
    "key": "S" },

  {
    "name": "石家庄",
    "key": "S" },

  {
    "name": "三门峡",
    "key": "S" },

  {
    "name": "三明",
    "key": "S" },


  {
    "name": "三亚",
    "key": "S" },



  {
    "name": "商洛",
    "key": "S" },



  {
    "name": "商丘",
    "key": "S" },


  {
    "name": "上饶",
    "key": "S" },


  {
    "name": "山南",
    "key": "S" },


  {
    "name": "汕头",
    "key": "S" },


  {
    "name": "汕尾",
    "key": "S" },


  {
    "name": "韶关",
    "key": "S" },



  {
    "name": "绍兴",
    "key": "S" },



  {
    "name": "邵阳",
    "key": "S" },


  {
    "name": "十堰",
    "key": "S" },


  {
    "name": "朔州",
    "key": "S" },


  {
    "name": "四平",
    "key": "S" },


  {
    "name": "绥化",
    "key": "S" },


  {
    "name": "遂宁",
    "key": "S" },



  {
    "name": "随州",
    "key": "S" },



  {
    "name": "娄底",
    "key": "S" },


  {
    "name": "宿迁",
    "key": "S" },


  {
    "name": "宿州",
    "key": "S" }] },



{
  title: "T",
  item: [

  {
    "name": "天津",
    "key": "T" },

  {
    "name": "太原",
    "key": "T" },

  {
    "name": "泰安",
    "key": "T" },

  {
    "name": "泰州",
    "key": "T" },

  {
    "name": "唐山",
    "key": "T" },

  {
    "name": "天水",
    "key": "T" },

  {
    "name": "铁岭",
    "key": "T" },


  {
    "name": "铜川",
    "key": "T" },



  {
    "name": "通化",
    "key": "T" },


  {
    "name": "通辽",
    "key": "T" },


  {
    "name": "铜陵",
    "key": "T" },


  {
    "name": "铜仁",
    "key": "T" },


  {
    "name": "台湾",
    "key": "T" }] },




{
  title: "W",
  item: [

  {
    "name": "武汉",
    "key": "W" },

  {
    "name": "乌鲁木齐",
    "key": "W" },

  {
    "name": "无锡",
    "key": "W" },

  {
    "name": "威海",
    "key": "W" },

  {
    "name": "潍坊",
    "key": "W" },

  {
    "name": "文山",
    "key": "W" },

  {
    "name": "温州",
    "key": "W" },


  {
    "name": "乌海",
    "key": "W" },



  {
    "name": "芜湖",
    "key": "W" },


  {
    "name": "乌兰察布",
    "key": "W" },


  {
    "name": "武威",
    "key": "W" },


  {
    "name": "梧州",
    "key": "W" }] },



{
  title: "X",
  item: [

  {
    "name": "厦门",
    "key": "X" },

  {
    "name": "西安",
    "key": "X" },

  {
    "name": "西宁",
    "key": "X" },

  {
    "name": "襄樊",
    "key": "X" },

  {
    "name": "湘潭",
    "key": "X" },

  {
    "name": "湘西",
    "key": "X" },

  {
    "name": "咸宁",
    "key": "X" },


  {
    "name": "咸阳",
    "key": "X" },



  {
    "name": "孝感",
    "key": "X" },


  {
    "name": "邢台",
    "key": "X" },


  {
    "name": "新乡",
    "key": "X" },


  {
    "name": "信阳",
    "key": "X" },


  {
    "name": "新余",
    "key": "X" },


  {
    "name": "忻州",
    "key": "X" },


  {
    "name": "西双版纳",
    "key": "X" },



  {
    "name": "宣城",
    "key": "X" },



  {
    "name": "许昌",
    "key": "X" },


  {
    "name": "徐州",
    "key": "X" },


  {
    "name": "香港",
    "key": "X" },


  {
    "name": "锡林郭勒",
    "key": "X" },


  {
    "name": "兴安",
    "key": "X" }] },


{
  title: "Y",
  item: [

  {
    "name": "银川",
    "key": "Y" },

  {
    "name": "雅安",
    "key": "Y" },

  {
    "name": "延安",
    "key": "Y" },

  {
    "name": "延边",
    "key": "Y" },

  {
    "name": "盐城",
    "key": "Y" },

  {
    "name": "阳江",
    "key": "Y" },


  {
    "name": "阳泉",
    "key": "Y" },


  {
    "name": "扬州",
    "key": "Y" },



  {
    "name": "烟台",
    "key": "Y" },


  {
    "name": "宜宾",
    "key": "Y" },


  {
    "name": "宜昌",
    "key": "Y" },


  {
    "name": "宜春",
    "key": "Y" },


  {
    "name": "营口",
    "key": "Y" },



  {
    "name": "益阳",
    "key": "Y" },


  {
    "name": "永州",
    "key": "Y" },



  {
    "name": "岳阳",
    "key": "Y" },



  {
    "name": "榆林",
    "key": "Y" },


  {
    "name": "运城",
    "key": "Y" },


  {
    "name": "云浮",
    "key": "Y" },


  {
    "name": "玉树",
    "key": "Y" },


  {
    "name": "玉溪",
    "key": "Y" },


  {
    "name": "玉林",
    "key": "Y" }] },



{

  title: "Z",
  item: [
  {
    "name": "杂多县",
    "key": "Z" },

  {
    "name": "赞皇县",
    "key": "Z" },

  {
    "name": "枣强县",
    "key": "Z" },

  {
    "name": "枣阳市",
    "key": "Z" },

  {
    "name": "枣庄",
    "key": "Z" },

  {
    "name": "泽库县",
    "key": "Z" },

  {
    "name": "增城市",
    "key": "Z" },



  {
    "name": "曾都区",
    "key": "Z" },


  {
    "name": "泽普县",
    "key": "Z" },



  {
    "name": "泽州县",
    "key": "Z" },


  {
    "name": "札达县",
    "key": "Z" },


  {
    "name": "扎赉特旗",
    "key": "Z" },


  {
    "name": "扎兰屯市",
    "key": "Z" },


  {
    "name": "扎鲁特旗",
    "key": "Z" },



  {
    "name": "扎囊县",
    "key": "Z" },


  {
    "name": "张北县",
    "key": "Z" },



  {
    "name": "张店区",
    "key": "Z" },


  {
    "name": "章贡区",
    "key": "Z" },


  {
    "name": "张家港",
    "key": "Z" },


  {
    "name": "张家界",
    "key": "Z" },


  {
    "name": "张家口",
    "key": "Z" },


  {
    "name": "漳平市",
    "key": "Z" },



  {
    "name": "漳浦县",
    "key": "Z" },



  {
    "name": "章丘市",
    "key": "Z" },


  {
    "name": "樟树市",
    "key": "Z" },


  {
    "name": "张湾区",
    "key": "Z" },

  {
    "name": "彰武县",
    "key": "Z" },

  {
    "name": "漳县",
    "key": "Z" },

  {
    "name": "张掖",
    "key": "Z" },

  {
    "name": "漳州",
    "key": "Z" },

  {
    "name": "长子县",
    "key": "Z" },



  {
    "name": "湛河区",
    "key": "Z" },


  {
    "name": "湛江",
    "key": "Z" },



  {
    "name": "站前区",
    "key": "Z" },


  {
    "name": "沾益县",
    "key": "Z" },


  {
    "name": "诏安县",
    "key": "Z" },

  {
    "name": "召陵区",
    "key": "Z" },

  {
    "name": "昭平县",
    "key": "Z" },

  {
    "name": "肇庆",
    "key": "Z" },

  {
    "name": "昭通",
    "key": "Z" },

  {
    "name": "赵县",
    "key": "Z" }] }];var _default =





Citys;exports.default = _default;

/***/ }),

/***/ 83:
/*!*********************************************************************************!*\
  !*** C:/Users/dell/Desktop/QINGHELI-Employee/pages/jobWanted/prefer/regions.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var regions = [{
  "provinceCode": "110000",
  "provinceName": "北京市",
  "mallCityList": [{
    "cityCode": "110100",
    "cityName": "北京市",
    "mallAreaList": [{
      "areaCode": "110101",
      "areaName": "东城区" },
    {
      "areaCode": "110102",
      "areaName": "西城区" },
    {
      "areaCode": "110105",
      "areaName": "朝阳区" },
    {
      "areaCode": "110106",
      "areaName": "丰台区" },
    {
      "areaCode": "110107",
      "areaName": "石景山区" },
    {
      "areaCode": "110108",
      "areaName": "海淀区" },
    {
      "areaCode": "110109",
      "areaName": "门头沟区" },
    {
      "areaCode": "110111",
      "areaName": "房山区" },
    {
      "areaCode": "110112",
      "areaName": "通州区" },
    {
      "areaCode": "110113",
      "areaName": "顺义区" },
    {
      "areaCode": "110114",
      "areaName": "昌平区" },
    {
      "areaCode": "110115",
      "areaName": "大兴区" },
    {
      "areaCode": "110116",
      "areaName": "怀柔区" },
    {
      "areaCode": "110117",
      "areaName": "平谷区" }] },

  {
    "cityCode": "110200",
    "cityName": "北京市辖县",
    "mallAreaList": [{
      "areaCode": "110228",
      "areaName": "密云县" },
    {
      "areaCode": "110229",
      "areaName": "延庆县" }] }] },


{
  "provinceCode": "120000",
  "provinceName": "天津市",
  "mallCityList": [{
    "cityCode": "120100",
    "cityName": "天津市",
    "mallAreaList": [{
      "areaCode": "120101",
      "areaName": "和平区" },
    {
      "areaCode": "120102",
      "areaName": "河东区" },
    {
      "areaCode": "120103",
      "areaName": "河西区" },
    {
      "areaCode": "120104",
      "areaName": "南开区" },
    {
      "areaCode": "120105",
      "areaName": "河北区" },
    {
      "areaCode": "120106",
      "areaName": "红桥区" },
    {
      "areaCode": "120110",
      "areaName": "东丽区" },
    {
      "areaCode": "120111",
      "areaName": "西青区" },
    {
      "areaCode": "120112",
      "areaName": "津南区" },
    {
      "areaCode": "120113",
      "areaName": "北辰区" },
    {
      "areaCode": "120114",
      "areaName": "武清区" },
    {
      "areaCode": "120115",
      "areaName": "宝坻区" },
    {
      "areaCode": "120116",
      "areaName": "滨海新区" }] },

  {
    "cityCode": "120200",
    "cityName": "天津市辖县",
    "mallAreaList": [{
      "areaCode": "120221",
      "areaName": "宁河县" },
    {
      "areaCode": "120223",
      "areaName": "静海县" },
    {
      "areaCode": "120225",
      "areaName": "蓟县" }] }] },


{
  "provinceCode": "130000",
  "provinceName": "河北省",
  "mallCityList": [{
    "cityCode": "130100",
    "cityName": "石家庄市",
    "mallAreaList": [{
      "areaCode": "130102",
      "areaName": "长安区" },
    {
      "areaCode": "130104",
      "areaName": "桥西区" },
    {
      "areaCode": "130105",
      "areaName": "新华区" },
    {
      "areaCode": "130107",
      "areaName": "井陉矿区" },
    {
      "areaCode": "130108",
      "areaName": "裕华区" },
    {
      "areaCode": "130109",
      "areaName": "藁城区" },
    {
      "areaCode": "130110",
      "areaName": "鹿泉区" },
    {
      "areaCode": "130111",
      "areaName": "栾城区" },
    {
      "areaCode": "130121",
      "areaName": "井陉县" },
    {
      "areaCode": "130123",
      "areaName": "正定县" },
    {
      "areaCode": "130125",
      "areaName": "行唐县" },
    {
      "areaCode": "130126",
      "areaName": "灵寿县" },
    {
      "areaCode": "130127",
      "areaName": "高邑县" },
    {
      "areaCode": "130128",
      "areaName": "深泽县" },
    {
      "areaCode": "130129",
      "areaName": "赞皇县" },
    {
      "areaCode": "130130",
      "areaName": "无极县" },
    {
      "areaCode": "130131",
      "areaName": "平山县" },
    {
      "areaCode": "130132",
      "areaName": "元氏县" },
    {
      "areaCode": "130133",
      "areaName": "赵县" },
    {
      "areaCode": "130181",
      "areaName": "辛集市" },
    {
      "areaCode": "130183",
      "areaName": "晋州市" },
    {
      "areaCode": "130184",
      "areaName": "新乐市" }] },

  {
    "cityCode": "130200",
    "cityName": "唐山市",
    "mallAreaList": [{
      "areaCode": "130202",
      "areaName": "路南区" },
    {
      "areaCode": "130203",
      "areaName": "路北区" },
    {
      "areaCode": "130204",
      "areaName": "古冶区" },
    {
      "areaCode": "130205",
      "areaName": "开平区" },
    {
      "areaCode": "130207",
      "areaName": "丰南区" },
    {
      "areaCode": "130208",
      "areaName": "丰润区" },
    {
      "areaCode": "130209",
      "areaName": "曹妃甸区" },
    {
      "areaCode": "130223",
      "areaName": "滦县" },
    {
      "areaCode": "130224",
      "areaName": "滦南县" },
    {
      "areaCode": "130225",
      "areaName": "乐亭县" },
    {
      "areaCode": "130227",
      "areaName": "迁西县" },
    {
      "areaCode": "130229",
      "areaName": "玉田县" },
    {
      "areaCode": "130281",
      "areaName": "遵化市" },
    {
      "areaCode": "130283",
      "areaName": "迁安市" }] },

  {
    "cityCode": "130300",
    "cityName": "秦皇岛市",
    "mallAreaList": [{
      "areaCode": "130302",
      "areaName": "海港区" },
    {
      "areaCode": "130303",
      "areaName": "山海关区" },
    {
      "areaCode": "130304",
      "areaName": "北戴河区" },
    {
      "areaCode": "130321",
      "areaName": "青龙满族自治县" },
    {
      "areaCode": "130322",
      "areaName": "昌黎县" },
    {
      "areaCode": "130323",
      "areaName": "抚宁县" },
    {
      "areaCode": "130324",
      "areaName": "卢龙县" }] },

  {
    "cityCode": "130400",
    "cityName": "邯郸市",
    "mallAreaList": [{
      "areaCode": "130402",
      "areaName": "邯山区" },
    {
      "areaCode": "130403",
      "areaName": "丛台区" },
    {
      "areaCode": "130404",
      "areaName": "复兴区" },
    {
      "areaCode": "130406",
      "areaName": "峰峰矿区" },
    {
      "areaCode": "130421",
      "areaName": "邯郸县" },
    {
      "areaCode": "130423",
      "areaName": "临漳县" },
    {
      "areaCode": "130424",
      "areaName": "成安县" },
    {
      "areaCode": "130425",
      "areaName": "大名县" },
    {
      "areaCode": "130426",
      "areaName": "涉县" },
    {
      "areaCode": "130427",
      "areaName": "磁县" },
    {
      "areaCode": "130428",
      "areaName": "肥乡县" },
    {
      "areaCode": "130429",
      "areaName": "永年县" },
    {
      "areaCode": "130430",
      "areaName": "邱县" },
    {
      "areaCode": "130431",
      "areaName": "鸡泽县" },
    {
      "areaCode": "130432",
      "areaName": "广平县" },
    {
      "areaCode": "130433",
      "areaName": "馆陶县" },
    {
      "areaCode": "130434",
      "areaName": "魏县" },
    {
      "areaCode": "130435",
      "areaName": "曲周县" },
    {
      "areaCode": "130481",
      "areaName": "武安市" }] },

  {
    "cityCode": "130500",
    "cityName": "邢台市",
    "mallAreaList": [{
      "areaCode": "130502",
      "areaName": "桥东区" },
    {
      "areaCode": "130503",
      "areaName": "桥西区" },
    {
      "areaCode": "130521",
      "areaName": "邢台县" },
    {
      "areaCode": "130522",
      "areaName": "临城县" },
    {
      "areaCode": "130523",
      "areaName": "内丘县" },
    {
      "areaCode": "130524",
      "areaName": "柏乡县" },
    {
      "areaCode": "130525",
      "areaName": "隆尧县" },
    {
      "areaCode": "130526",
      "areaName": "任县" },
    {
      "areaCode": "130527",
      "areaName": "南和县" },
    {
      "areaCode": "130528",
      "areaName": "宁晋县" },
    {
      "areaCode": "130529",
      "areaName": "巨鹿县" },
    {
      "areaCode": "130530",
      "areaName": "新河县" },
    {
      "areaCode": "130531",
      "areaName": "广宗县" },
    {
      "areaCode": "130532",
      "areaName": "平乡县" },
    {
      "areaCode": "130533",
      "areaName": "威县" },
    {
      "areaCode": "130534",
      "areaName": "清河县" },
    {
      "areaCode": "130535",
      "areaName": "临西县" },
    {
      "areaCode": "130581",
      "areaName": "南宫市" },
    {
      "areaCode": "130582",
      "areaName": "沙河市" }] },

  {
    "cityCode": "130600",
    "cityName": "保定市",
    "mallAreaList": [{
      "areaCode": "130602",
      "areaName": "新市区" },
    {
      "areaCode": "130603",
      "areaName": "北市区" },
    {
      "areaCode": "130604",
      "areaName": "南市区" },
    {
      "areaCode": "130621",
      "areaName": "满城县" },
    {
      "areaCode": "130622",
      "areaName": "清苑县" },
    {
      "areaCode": "130623",
      "areaName": "涞水县" },
    {
      "areaCode": "130624",
      "areaName": "阜平县" },
    {
      "areaCode": "130625",
      "areaName": "徐水县" },
    {
      "areaCode": "130626",
      "areaName": "定兴县" },
    {
      "areaCode": "130627",
      "areaName": "唐县" },
    {
      "areaCode": "130628",
      "areaName": "高阳县" },
    {
      "areaCode": "130629",
      "areaName": "容城县" },
    {
      "areaCode": "130630",
      "areaName": "涞源县" },
    {
      "areaCode": "130631",
      "areaName": "望都县" },
    {
      "areaCode": "130632",
      "areaName": "安新县" },
    {
      "areaCode": "130633",
      "areaName": "易县" },
    {
      "areaCode": "130634",
      "areaName": "曲阳县" },
    {
      "areaCode": "130635",
      "areaName": "蠡县" },
    {
      "areaCode": "130636",
      "areaName": "顺平县" },
    {
      "areaCode": "130637",
      "areaName": "博野县" },
    {
      "areaCode": "130638",
      "areaName": "雄县" },
    {
      "areaCode": "130681",
      "areaName": "涿州市" },
    {
      "areaCode": "130682",
      "areaName": "定州市" },
    {
      "areaCode": "130683",
      "areaName": "安国市" },
    {
      "areaCode": "130684",
      "areaName": "高碑店市" }] },

  {
    "cityCode": "130700",
    "cityName": "张家口市",
    "mallAreaList": [{
      "areaCode": "130702",
      "areaName": "桥东区" },
    {
      "areaCode": "130703",
      "areaName": "桥西区" },
    {
      "areaCode": "130705",
      "areaName": "宣化区" },
    {
      "areaCode": "130706",
      "areaName": "下花园区" },
    {
      "areaCode": "130721",
      "areaName": "宣化县" },
    {
      "areaCode": "130722",
      "areaName": "张北县" },
    {
      "areaCode": "130723",
      "areaName": "康保县" },
    {
      "areaCode": "130724",
      "areaName": "沽源县" },
    {
      "areaCode": "130725",
      "areaName": "尚义县" },
    {
      "areaCode": "130726",
      "areaName": "蔚县" },
    {
      "areaCode": "130727",
      "areaName": "阳原县" },
    {
      "areaCode": "130728",
      "areaName": "怀安县" },
    {
      "areaCode": "130729",
      "areaName": "万全县" },
    {
      "areaCode": "130730",
      "areaName": "怀来县" },
    {
      "areaCode": "130731",
      "areaName": "涿鹿县" },
    {
      "areaCode": "130732",
      "areaName": "赤城县" },
    {
      "areaCode": "130733",
      "areaName": "崇礼县" }] },

  {
    "cityCode": "130800",
    "cityName": "承德市",
    "mallAreaList": [{
      "areaCode": "130802",
      "areaName": "双桥区" },
    {
      "areaCode": "130803",
      "areaName": "双滦区" },
    {
      "areaCode": "130804",
      "areaName": "鹰手营子矿区" },
    {
      "areaCode": "130821",
      "areaName": "承德县" },
    {
      "areaCode": "130822",
      "areaName": "兴隆县" },
    {
      "areaCode": "130823",
      "areaName": "平泉县" },
    {
      "areaCode": "130824",
      "areaName": "滦平县" },
    {
      "areaCode": "130825",
      "areaName": "隆化县" },
    {
      "areaCode": "130826",
      "areaName": "丰宁满族自治县" },
    {
      "areaCode": "130827",
      "areaName": "宽城满族自治县" },
    {
      "areaCode": "130828",
      "areaName": "围场满族蒙古族自治县" }] },

  {
    "cityCode": "130900",
    "cityName": "沧州市",
    "mallAreaList": [{
      "areaCode": "130902",
      "areaName": "新华区" },
    {
      "areaCode": "130903",
      "areaName": "运河区" },
    {
      "areaCode": "130921",
      "areaName": "沧县" },
    {
      "areaCode": "130922",
      "areaName": "青县" },
    {
      "areaCode": "130923",
      "areaName": "东光县" },
    {
      "areaCode": "130924",
      "areaName": "海兴县" },
    {
      "areaCode": "130925",
      "areaName": "盐山县" },
    {
      "areaCode": "130926",
      "areaName": "肃宁县" },
    {
      "areaCode": "130927",
      "areaName": "南皮县" },
    {
      "areaCode": "130928",
      "areaName": "吴桥县" },
    {
      "areaCode": "130929",
      "areaName": "献县" },
    {
      "areaCode": "130930",
      "areaName": "孟村回族自治县" },
    {
      "areaCode": "130981",
      "areaName": "泊头市" },
    {
      "areaCode": "130982",
      "areaName": "任丘市" },
    {
      "areaCode": "130983",
      "areaName": "黄骅市" },
    {
      "areaCode": "130984",
      "areaName": "河间市" }] },

  {
    "cityCode": "131000",
    "cityName": "廊坊市",
    "mallAreaList": [{
      "areaCode": "131002",
      "areaName": "安次区" },
    {
      "areaCode": "131003",
      "areaName": "广阳区" },
    {
      "areaCode": "131022",
      "areaName": "固安县" },
    {
      "areaCode": "131023",
      "areaName": "永清县" },
    {
      "areaCode": "131024",
      "areaName": "香河县" },
    {
      "areaCode": "131025",
      "areaName": "大城县" },
    {
      "areaCode": "131026",
      "areaName": "文安县" },
    {
      "areaCode": "131028",
      "areaName": "大厂回族自治县" },
    {
      "areaCode": "131081",
      "areaName": "霸州市" },
    {
      "areaCode": "131082",
      "areaName": "三河市" }] },

  {
    "cityCode": "131100",
    "cityName": "衡水市",
    "mallAreaList": [{
      "areaCode": "131102",
      "areaName": "桃城区" },
    {
      "areaCode": "131121",
      "areaName": "枣强县" },
    {
      "areaCode": "131122",
      "areaName": "武邑县" },
    {
      "areaCode": "131123",
      "areaName": "武强县" },
    {
      "areaCode": "131124",
      "areaName": "饶阳县" },
    {
      "areaCode": "131125",
      "areaName": "安平县" },
    {
      "areaCode": "131126",
      "areaName": "故城县" },
    {
      "areaCode": "131127",
      "areaName": "景县" },
    {
      "areaCode": "131128",
      "areaName": "阜城县" },
    {
      "areaCode": "131181",
      "areaName": "冀州市" },
    {
      "areaCode": "131182",
      "areaName": "深州市" }] }] },


{
  "provinceCode": "140000",
  "provinceName": "山西省",
  "mallCityList": [{
    "cityCode": "140100",
    "cityName": "太原市",
    "mallAreaList": [{
      "areaCode": "140105",
      "areaName": "小店区" },
    {
      "areaCode": "140106",
      "areaName": "迎泽区" },
    {
      "areaCode": "140107",
      "areaName": "杏花岭区" },
    {
      "areaCode": "140108",
      "areaName": "尖草坪区" },
    {
      "areaCode": "140109",
      "areaName": "万柏林区" },
    {
      "areaCode": "140110",
      "areaName": "晋源区" },
    {
      "areaCode": "140121",
      "areaName": "清徐县" },
    {
      "areaCode": "140122",
      "areaName": "阳曲县" },
    {
      "areaCode": "140123",
      "areaName": "娄烦县" },
    {
      "areaCode": "140181",
      "areaName": "古交市" }] },

  {
    "cityCode": "140200",
    "cityName": "大同市",
    "mallAreaList": [{
      "areaCode": "140202",
      "areaName": "城区" },
    {
      "areaCode": "140203",
      "areaName": "矿区" },
    {
      "areaCode": "140211",
      "areaName": "南郊区" },
    {
      "areaCode": "140212",
      "areaName": "新荣区" },
    {
      "areaCode": "140221",
      "areaName": "阳高县" },
    {
      "areaCode": "140222",
      "areaName": "天镇县" },
    {
      "areaCode": "140223",
      "areaName": "广灵县" },
    {
      "areaCode": "140224",
      "areaName": "灵丘县" },
    {
      "areaCode": "140225",
      "areaName": "浑源县" },
    {
      "areaCode": "140226",
      "areaName": "左云县" },
    {
      "areaCode": "140227",
      "areaName": "大同县" }] },

  {
    "cityCode": "140300",
    "cityName": "阳泉市",
    "mallAreaList": [{
      "areaCode": "140302",
      "areaName": "城区" },
    {
      "areaCode": "140303",
      "areaName": "矿区" },
    {
      "areaCode": "140311",
      "areaName": "郊区" },
    {
      "areaCode": "140321",
      "areaName": "平定县" },
    {
      "areaCode": "140322",
      "areaName": "盂县" }] },

  {
    "cityCode": "140400",
    "cityName": "长治市",
    "mallAreaList": [{
      "areaCode": "140402",
      "areaName": "城区" },
    {
      "areaCode": "140411",
      "areaName": "郊区" },
    {
      "areaCode": "140421",
      "areaName": "长治县" },
    {
      "areaCode": "140423",
      "areaName": "襄垣县" },
    {
      "areaCode": "140424",
      "areaName": "屯留县" },
    {
      "areaCode": "140425",
      "areaName": "平顺县" },
    {
      "areaCode": "140426",
      "areaName": "黎城县" },
    {
      "areaCode": "140427",
      "areaName": "壶关县" },
    {
      "areaCode": "140428",
      "areaName": "长子县" },
    {
      "areaCode": "140429",
      "areaName": "武乡县" },
    {
      "areaCode": "140430",
      "areaName": "沁县" },
    {
      "areaCode": "140431",
      "areaName": "沁源县" },
    {
      "areaCode": "140481",
      "areaName": "潞城市" }] },

  {
    "cityCode": "140500",
    "cityName": "晋城市",
    "mallAreaList": [{
      "areaCode": "140502",
      "areaName": "城区" },
    {
      "areaCode": "140521",
      "areaName": "沁水县" },
    {
      "areaCode": "140522",
      "areaName": "阳城县" },
    {
      "areaCode": "140524",
      "areaName": "陵川县" },
    {
      "areaCode": "140525",
      "areaName": "泽州县" },
    {
      "areaCode": "140581",
      "areaName": "高平市" }] },

  {
    "cityCode": "140600",
    "cityName": "朔州市",
    "mallAreaList": [{
      "areaCode": "140602",
      "areaName": "朔城区" },
    {
      "areaCode": "140603",
      "areaName": "平鲁区" },
    {
      "areaCode": "140621",
      "areaName": "山阴县" },
    {
      "areaCode": "140622",
      "areaName": "应县" },
    {
      "areaCode": "140623",
      "areaName": "右玉县" },
    {
      "areaCode": "140624",
      "areaName": "怀仁县" }] },

  {
    "cityCode": "140700",
    "cityName": "晋中市",
    "mallAreaList": [{
      "areaCode": "140702",
      "areaName": "榆次区" },
    {
      "areaCode": "140721",
      "areaName": "榆社县" },
    {
      "areaCode": "140722",
      "areaName": "左权县" },
    {
      "areaCode": "140723",
      "areaName": "和顺县" },
    {
      "areaCode": "140724",
      "areaName": "昔阳县" },
    {
      "areaCode": "140725",
      "areaName": "寿阳县" },
    {
      "areaCode": "140726",
      "areaName": "太谷县" },
    {
      "areaCode": "140727",
      "areaName": "祁县" },
    {
      "areaCode": "140728",
      "areaName": "平遥县" },
    {
      "areaCode": "140729",
      "areaName": "灵石县" },
    {
      "areaCode": "140781",
      "areaName": "介休市" }] },

  {
    "cityCode": "140800",
    "cityName": "运城市",
    "mallAreaList": [{
      "areaCode": "140802",
      "areaName": "盐湖区" },
    {
      "areaCode": "140821",
      "areaName": "临猗县" },
    {
      "areaCode": "140822",
      "areaName": "万荣县" },
    {
      "areaCode": "140823",
      "areaName": "闻喜县" },
    {
      "areaCode": "140824",
      "areaName": "稷山县" },
    {
      "areaCode": "140825",
      "areaName": "新绛县" },
    {
      "areaCode": "140826",
      "areaName": "绛县" },
    {
      "areaCode": "140827",
      "areaName": "垣曲县" },
    {
      "areaCode": "140828",
      "areaName": "夏县" },
    {
      "areaCode": "140829",
      "areaName": "平陆县" },
    {
      "areaCode": "140830",
      "areaName": "芮城县" },
    {
      "areaCode": "140881",
      "areaName": "永济市" },
    {
      "areaCode": "140882",
      "areaName": "河津市" }] },

  {
    "cityCode": "140900",
    "cityName": "忻州市",
    "mallAreaList": [{
      "areaCode": "140902",
      "areaName": "忻府区" },
    {
      "areaCode": "140921",
      "areaName": "定襄县" },
    {
      "areaCode": "140922",
      "areaName": "五台县" },
    {
      "areaCode": "140923",
      "areaName": "代县" },
    {
      "areaCode": "140924",
      "areaName": "繁峙县" },
    {
      "areaCode": "140925",
      "areaName": "宁武县" },
    {
      "areaCode": "140926",
      "areaName": "静乐县" },
    {
      "areaCode": "140927",
      "areaName": "神池县" },
    {
      "areaCode": "140928",
      "areaName": "五寨县" },
    {
      "areaCode": "140929",
      "areaName": "岢岚县" },
    {
      "areaCode": "140930",
      "areaName": "河曲县" },
    {
      "areaCode": "140931",
      "areaName": "保德县" },
    {
      "areaCode": "140932",
      "areaName": "偏关县" },
    {
      "areaCode": "140981",
      "areaName": "原平市" }] },

  {
    "cityCode": "141000",
    "cityName": "临汾市",
    "mallAreaList": [{
      "areaCode": "141002",
      "areaName": "尧都区" },
    {
      "areaCode": "141021",
      "areaName": "曲沃县" },
    {
      "areaCode": "141022",
      "areaName": "翼城县" },
    {
      "areaCode": "141023",
      "areaName": "襄汾县" },
    {
      "areaCode": "141024",
      "areaName": "洪洞县" },
    {
      "areaCode": "141025",
      "areaName": "古县" },
    {
      "areaCode": "141026",
      "areaName": "安泽县" },
    {
      "areaCode": "141027",
      "areaName": "浮山县" },
    {
      "areaCode": "141028",
      "areaName": "吉县" },
    {
      "areaCode": "141029",
      "areaName": "乡宁县" },
    {
      "areaCode": "141030",
      "areaName": "大宁县" },
    {
      "areaCode": "141031",
      "areaName": "隰县" },
    {
      "areaCode": "141032",
      "areaName": "永和县" },
    {
      "areaCode": "141033",
      "areaName": "蒲县" },
    {
      "areaCode": "141034",
      "areaName": "汾西县" },
    {
      "areaCode": "141081",
      "areaName": "侯马市" },
    {
      "areaCode": "141082",
      "areaName": "霍州市" }] },

  {
    "cityCode": "141100",
    "cityName": "吕梁市",
    "mallAreaList": [{
      "areaCode": "141102",
      "areaName": "离石区" },
    {
      "areaCode": "141121",
      "areaName": "文水县" },
    {
      "areaCode": "141122",
      "areaName": "交城县" },
    {
      "areaCode": "141123",
      "areaName": "兴县" },
    {
      "areaCode": "141124",
      "areaName": "临县" },
    {
      "areaCode": "141125",
      "areaName": "柳林县" },
    {
      "areaCode": "141126",
      "areaName": "石楼县" },
    {
      "areaCode": "141127",
      "areaName": "岚县" },
    {
      "areaCode": "141128",
      "areaName": "方山县" },
    {
      "areaCode": "141129",
      "areaName": "中阳县" },
    {
      "areaCode": "141130",
      "areaName": "交口县" },
    {
      "areaCode": "141181",
      "areaName": "孝义市" },
    {
      "areaCode": "141182",
      "areaName": "汾阳市" }] }] },


{
  "provinceCode": "150000",
  "provinceName": "内蒙古自治区",
  "mallCityList": [{
    "cityCode": "150100",
    "cityName": "呼和浩特市",
    "mallAreaList": [{
      "areaCode": "150102",
      "areaName": "新城区" },
    {
      "areaCode": "150103",
      "areaName": "回民区" },
    {
      "areaCode": "150104",
      "areaName": "玉泉区" },
    {
      "areaCode": "150105",
      "areaName": "赛罕区" },
    {
      "areaCode": "150121",
      "areaName": "土默特左旗" },
    {
      "areaCode": "150122",
      "areaName": "托克托县" },
    {
      "areaCode": "150123",
      "areaName": "和林格尔县" },
    {
      "areaCode": "150124",
      "areaName": "清水河县" },
    {
      "areaCode": "150125",
      "areaName": "武川县" }] },

  {
    "cityCode": "150200",
    "cityName": "包头市",
    "mallAreaList": [{
      "areaCode": "150202",
      "areaName": "东河区" },
    {
      "areaCode": "150203",
      "areaName": "昆都仑区" },
    {
      "areaCode": "150204",
      "areaName": "青山区" },
    {
      "areaCode": "150205",
      "areaName": "石拐区" },
    {
      "areaCode": "150206",
      "areaName": "白云鄂博矿区" },
    {
      "areaCode": "150207",
      "areaName": "九原区" },
    {
      "areaCode": "150221",
      "areaName": "土默特右旗" },
    {
      "areaCode": "150222",
      "areaName": "固阳县" },
    {
      "areaCode": "150223",
      "areaName": "达尔罕茂明安联合旗" }] },

  {
    "cityCode": "150300",
    "cityName": "乌海市",
    "mallAreaList": [{
      "areaCode": "150302",
      "areaName": "海勃湾区" },
    {
      "areaCode": "150303",
      "areaName": "海南区" },
    {
      "areaCode": "150304",
      "areaName": "乌达区" }] },

  {
    "cityCode": "150400",
    "cityName": "赤峰市",
    "mallAreaList": [{
      "areaCode": "150402",
      "areaName": "红山区" },
    {
      "areaCode": "150403",
      "areaName": "元宝山区" },
    {
      "areaCode": "150404",
      "areaName": "松山区" },
    {
      "areaCode": "150421",
      "areaName": "阿鲁科尔沁旗" },
    {
      "areaCode": "150422",
      "areaName": "巴林左旗" },
    {
      "areaCode": "150423",
      "areaName": "巴林右旗" },
    {
      "areaCode": "150424",
      "areaName": "林西县" },
    {
      "areaCode": "150425",
      "areaName": "克什克腾旗" },
    {
      "areaCode": "150426",
      "areaName": "翁牛特旗" },
    {
      "areaCode": "150428",
      "areaName": "喀喇沁旗" },
    {
      "areaCode": "150429",
      "areaName": "宁城县" },
    {
      "areaCode": "150430",
      "areaName": "敖汉旗" }] },

  {
    "cityCode": "150500",
    "cityName": "通辽市",
    "mallAreaList": [{
      "areaCode": "150502",
      "areaName": "科尔沁区" },
    {
      "areaCode": "150521",
      "areaName": "科尔沁左翼中旗" },
    {
      "areaCode": "150522",
      "areaName": "科尔沁左翼后旗" },
    {
      "areaCode": "150523",
      "areaName": "开鲁县" },
    {
      "areaCode": "150524",
      "areaName": "库伦旗" },
    {
      "areaCode": "150525",
      "areaName": "奈曼旗" },
    {
      "areaCode": "150526",
      "areaName": "扎鲁特旗" },
    {
      "areaCode": "150581",
      "areaName": "霍林郭勒市" }] },

  {
    "cityCode": "150600",
    "cityName": "鄂尔多斯市",
    "mallAreaList": [{
      "areaCode": "150602",
      "areaName": "东胜区" },
    {
      "areaCode": "150621",
      "areaName": "达拉特旗" },
    {
      "areaCode": "150622",
      "areaName": "准格尔旗" },
    {
      "areaCode": "150623",
      "areaName": "鄂托克前旗" },
    {
      "areaCode": "150624",
      "areaName": "鄂托克旗" },
    {
      "areaCode": "150625",
      "areaName": "杭锦旗" },
    {
      "areaCode": "150626",
      "areaName": "乌审旗" },
    {
      "areaCode": "150627",
      "areaName": "伊金霍洛旗" }] },

  {
    "cityCode": "150700",
    "cityName": "呼伦贝尔市",
    "mallAreaList": [{
      "areaCode": "150702",
      "areaName": "海拉尔区" },
    {
      "areaCode": "150703",
      "areaName": "扎赉诺尔区" },
    {
      "areaCode": "150721",
      "areaName": "阿荣旗" },
    {
      "areaCode": "150722",
      "areaName": "莫力达瓦达斡尔族自治旗" },
    {
      "areaCode": "150723",
      "areaName": "鄂伦春自治旗" },
    {
      "areaCode": "150724",
      "areaName": "鄂温克族自治旗" },
    {
      "areaCode": "150725",
      "areaName": "陈巴尔虎旗" },
    {
      "areaCode": "150726",
      "areaName": "新巴尔虎左旗" },
    {
      "areaCode": "150727",
      "areaName": "新巴尔虎右旗" },
    {
      "areaCode": "150781",
      "areaName": "满洲里市" },
    {
      "areaCode": "150782",
      "areaName": "牙克石市" },
    {
      "areaCode": "150783",
      "areaName": "扎兰屯市" },
    {
      "areaCode": "150784",
      "areaName": "额尔古纳市" },
    {
      "areaCode": "150785",
      "areaName": "根河市" }] },

  {
    "cityCode": "150800",
    "cityName": "巴彦淖尔市",
    "mallAreaList": [{
      "areaCode": "150802",
      "areaName": "临河区" },
    {
      "areaCode": "150821",
      "areaName": "五原县" },
    {
      "areaCode": "150822",
      "areaName": "磴口县" },
    {
      "areaCode": "150823",
      "areaName": "乌拉特前旗" },
    {
      "areaCode": "150824",
      "areaName": "乌拉特中旗" },
    {
      "areaCode": "150825",
      "areaName": "乌拉特后旗" },
    {
      "areaCode": "150826",
      "areaName": "杭锦后旗" }] },

  {
    "cityCode": "150900",
    "cityName": "乌兰察布市",
    "mallAreaList": [{
      "areaCode": "150902",
      "areaName": "集宁区" },
    {
      "areaCode": "150921",
      "areaName": "卓资县" },
    {
      "areaCode": "150922",
      "areaName": "化德县" },
    {
      "areaCode": "150923",
      "areaName": "商都县" },
    {
      "areaCode": "150924",
      "areaName": "兴和县" },
    {
      "areaCode": "150925",
      "areaName": "凉城县" },
    {
      "areaCode": "150926",
      "areaName": "察哈尔右翼前旗" },
    {
      "areaCode": "150927",
      "areaName": "察哈尔右翼中旗" },
    {
      "areaCode": "150928",
      "areaName": "察哈尔右翼后旗" },
    {
      "areaCode": "150929",
      "areaName": "四子王旗" },
    {
      "areaCode": "150981",
      "areaName": "丰镇市" }] },

  {
    "cityCode": "152200",
    "cityName": "兴安盟",
    "mallAreaList": [{
      "areaCode": "152201",
      "areaName": "乌兰浩特市" },
    {
      "areaCode": "152202",
      "areaName": "阿尔山市" },
    {
      "areaCode": "152221",
      "areaName": "科尔沁右翼前旗" },
    {
      "areaCode": "152222",
      "areaName": "科尔沁右翼中旗" },
    {
      "areaCode": "152223",
      "areaName": "扎赉特旗" },
    {
      "areaCode": "152224",
      "areaName": "突泉县" }] },

  {
    "cityCode": "152500",
    "cityName": "锡林郭勒盟",
    "mallAreaList": [{
      "areaCode": "152501",
      "areaName": "二连浩特市" },
    {
      "areaCode": "152502",
      "areaName": "锡林浩特市" },
    {
      "areaCode": "152522",
      "areaName": "阿巴嘎旗" },
    {
      "areaCode": "152523",
      "areaName": "苏尼特左旗" },
    {
      "areaCode": "152524",
      "areaName": "苏尼特右旗" },
    {
      "areaCode": "152525",
      "areaName": "东乌珠穆沁旗" },
    {
      "areaCode": "152526",
      "areaName": "西乌珠穆沁旗" },
    {
      "areaCode": "152527",
      "areaName": "太仆寺旗" },
    {
      "areaCode": "152528",
      "areaName": "镶黄旗" },
    {
      "areaCode": "152529",
      "areaName": "正镶白旗" },
    {
      "areaCode": "152530",
      "areaName": "正蓝旗" },
    {
      "areaCode": "152531",
      "areaName": "多伦县" }] },

  {
    "cityCode": "152900",
    "cityName": "阿拉善盟",
    "mallAreaList": [{
      "areaCode": "152921",
      "areaName": "阿拉善左旗" },
    {
      "areaCode": "152922",
      "areaName": "阿拉善右旗" },
    {
      "areaCode": "152923",
      "areaName": "额济纳旗" }] }] },


{
  "provinceCode": "210000",
  "provinceName": "辽宁省",
  "mallCityList": [{
    "cityCode": "210100",
    "cityName": "沈阳市",
    "mallAreaList": [{
      "areaCode": "210102",
      "areaName": "和平区" },
    {
      "areaCode": "210103",
      "areaName": "沈河区" },
    {
      "areaCode": "210104",
      "areaName": "大东区" },
    {
      "areaCode": "210105",
      "areaName": "皇姑区" },
    {
      "areaCode": "210106",
      "areaName": "铁西区" },
    {
      "areaCode": "210111",
      "areaName": "苏家屯区" },
    {
      "areaCode": "210112",
      "areaName": "浑南区" },
    {
      "areaCode": "210113",
      "areaName": "沈北新区" },
    {
      "areaCode": "210114",
      "areaName": "于洪区" },
    {
      "areaCode": "210122",
      "areaName": "辽中县" },
    {
      "areaCode": "210123",
      "areaName": "康平县" },
    {
      "areaCode": "210124",
      "areaName": "法库县" },
    {
      "areaCode": "210181",
      "areaName": "新民市" }] },

  {
    "cityCode": "210200",
    "cityName": "大连市",
    "mallAreaList": [{
      "areaCode": "210202",
      "areaName": "中山区" },
    {
      "areaCode": "210203",
      "areaName": "西岗区" },
    {
      "areaCode": "210204",
      "areaName": "沙河口区" },
    {
      "areaCode": "210211",
      "areaName": "甘井子区" },
    {
      "areaCode": "210212",
      "areaName": "旅顺口区" },
    {
      "areaCode": "210213",
      "areaName": "金州区" },
    {
      "areaCode": "210224",
      "areaName": "长海县" },
    {
      "areaCode": "210281",
      "areaName": "瓦房店市" },
    {
      "areaCode": "210282",
      "areaName": "普兰店市" },
    {
      "areaCode": "210283",
      "areaName": "庄河市" }] },

  {
    "cityCode": "210300",
    "cityName": "鞍山市",
    "mallAreaList": [{
      "areaCode": "210302",
      "areaName": "铁东区" },
    {
      "areaCode": "210303",
      "areaName": "铁西区" },
    {
      "areaCode": "210304",
      "areaName": "立山区" },
    {
      "areaCode": "210311",
      "areaName": "千山区" },
    {
      "areaCode": "210321",
      "areaName": "台安县" },
    {
      "areaCode": "210323",
      "areaName": "岫岩满族自治县" },
    {
      "areaCode": "210381",
      "areaName": "海城市" }] },

  {
    "cityCode": "210400",
    "cityName": "抚顺市",
    "mallAreaList": [{
      "areaCode": "210402",
      "areaName": "新抚区" },
    {
      "areaCode": "210403",
      "areaName": "东洲区" },
    {
      "areaCode": "210404",
      "areaName": "望花区" },
    {
      "areaCode": "210411",
      "areaName": "顺城区" },
    {
      "areaCode": "210421",
      "areaName": "抚顺县" },
    {
      "areaCode": "210422",
      "areaName": "新宾满族自治县" },
    {
      "areaCode": "210423",
      "areaName": "清原满族自治县" }] },

  {
    "cityCode": "210500",
    "cityName": "本溪市",
    "mallAreaList": [{
      "areaCode": "210502",
      "areaName": "平山区" },
    {
      "areaCode": "210503",
      "areaName": "溪湖区" },
    {
      "areaCode": "210504",
      "areaName": "明山区" },
    {
      "areaCode": "210505",
      "areaName": "南芬区" },
    {
      "areaCode": "210521",
      "areaName": "本溪满族自治县" },
    {
      "areaCode": "210522",
      "areaName": "桓仁满族自治县" }] },

  {
    "cityCode": "210600",
    "cityName": "丹东市",
    "mallAreaList": [{
      "areaCode": "210602",
      "areaName": "元宝区" },
    {
      "areaCode": "210603",
      "areaName": "振兴区" },
    {
      "areaCode": "210604",
      "areaName": "振安区" },
    {
      "areaCode": "210624",
      "areaName": "宽甸满族自治县" },
    {
      "areaCode": "210681",
      "areaName": "东港市" },
    {
      "areaCode": "210682",
      "areaName": "凤城市" }] },

  {
    "cityCode": "210700",
    "cityName": "锦州市",
    "mallAreaList": [{
      "areaCode": "210702",
      "areaName": "古塔区" },
    {
      "areaCode": "210703",
      "areaName": "凌河区" },
    {
      "areaCode": "210711",
      "areaName": "太和区" },
    {
      "areaCode": "210726",
      "areaName": "黑山县" },
    {
      "areaCode": "210727",
      "areaName": "义县" },
    {
      "areaCode": "210781",
      "areaName": "凌海市" },
    {
      "areaCode": "210782",
      "areaName": "北镇市" }] },

  {
    "cityCode": "210800",
    "cityName": "营口市",
    "mallAreaList": [{
      "areaCode": "210802",
      "areaName": "站前区" },
    {
      "areaCode": "210803",
      "areaName": "西市区" },
    {
      "areaCode": "210804",
      "areaName": "鲅鱼圈区" },
    {
      "areaCode": "210811",
      "areaName": "老边区" },
    {
      "areaCode": "210881",
      "areaName": "盖州市" },
    {
      "areaCode": "210882",
      "areaName": "大石桥市" }] },

  {
    "cityCode": "210900",
    "cityName": "阜新市",
    "mallAreaList": [{
      "areaCode": "210902",
      "areaName": "海州区" },
    {
      "areaCode": "210903",
      "areaName": "新邱区" },
    {
      "areaCode": "210904",
      "areaName": "太平区" },
    {
      "areaCode": "210905",
      "areaName": "清河门区" },
    {
      "areaCode": "210911",
      "areaName": "细河区" },
    {
      "areaCode": "210921",
      "areaName": "阜新蒙古族自治县" },
    {
      "areaCode": "210922",
      "areaName": "彰武县" }] },

  {
    "cityCode": "211000",
    "cityName": "辽阳市",
    "mallAreaList": [{
      "areaCode": "211002",
      "areaName": "白塔区" },
    {
      "areaCode": "211003",
      "areaName": "文圣区" },
    {
      "areaCode": "211004",
      "areaName": "宏伟区" },
    {
      "areaCode": "211005",
      "areaName": "弓长岭区" },
    {
      "areaCode": "211011",
      "areaName": "太子河区" },
    {
      "areaCode": "211021",
      "areaName": "辽阳县" },
    {
      "areaCode": "211081",
      "areaName": "灯塔市" }] },

  {
    "cityCode": "211100",
    "cityName": "盘锦市",
    "mallAreaList": [{
      "areaCode": "211102",
      "areaName": "双台子区" },
    {
      "areaCode": "211103",
      "areaName": "兴隆台区" },
    {
      "areaCode": "211121",
      "areaName": "大洼县" },
    {
      "areaCode": "211122",
      "areaName": "盘山县" }] },

  {
    "cityCode": "211200",
    "cityName": "铁岭市",
    "mallAreaList": [{
      "areaCode": "211202",
      "areaName": "银州区" },
    {
      "areaCode": "211204",
      "areaName": "清河区" },
    {
      "areaCode": "211221",
      "areaName": "铁岭县" },
    {
      "areaCode": "211223",
      "areaName": "西丰县" },
    {
      "areaCode": "211224",
      "areaName": "昌图县" },
    {
      "areaCode": "211281",
      "areaName": "调兵山市" },
    {
      "areaCode": "211282",
      "areaName": "开原市" }] },

  {
    "cityCode": "211300",
    "cityName": "朝阳市",
    "mallAreaList": [{
      "areaCode": "211302",
      "areaName": "双塔区" },
    {
      "areaCode": "211303",
      "areaName": "龙城区" },
    {
      "areaCode": "211321",
      "areaName": "朝阳县" },
    {
      "areaCode": "211322",
      "areaName": "建平县" },
    {
      "areaCode": "211324",
      "areaName": "喀喇沁左翼蒙古族自治县" },
    {
      "areaCode": "211381",
      "areaName": "北票市" },
    {
      "areaCode": "211382",
      "areaName": "凌源市" }] },

  {
    "cityCode": "211400",
    "cityName": "葫芦岛市",
    "mallAreaList": [{
      "areaCode": "211402",
      "areaName": "连山区" },
    {
      "areaCode": "211403",
      "areaName": "龙港区" },
    {
      "areaCode": "211404",
      "areaName": "南票区" },
    {
      "areaCode": "211421",
      "areaName": "绥中县" },
    {
      "areaCode": "211422",
      "areaName": "建昌县" },
    {
      "areaCode": "211481",
      "areaName": "兴城市" }] }] },


{
  "provinceCode": "220000",
  "provinceName": "吉林省",
  "mallCityList": [{
    "cityCode": "220100",
    "cityName": "长春市",
    "mallAreaList": [{
      "areaCode": "220102",
      "areaName": "南关区" },
    {
      "areaCode": "220103",
      "areaName": "宽城区" },
    {
      "areaCode": "220104",
      "areaName": "朝阳区" },
    {
      "areaCode": "220105",
      "areaName": "二道区" },
    {
      "areaCode": "220106",
      "areaName": "绿园区" },
    {
      "areaCode": "220112",
      "areaName": "双阳区" },
    {
      "areaCode": "220113",
      "areaName": "九台区" },
    {
      "areaCode": "220122",
      "areaName": "农安县" },
    {
      "areaCode": "220182",
      "areaName": "榆树市" },
    {
      "areaCode": "220183",
      "areaName": "德惠市" }] },

  {
    "cityCode": "220200",
    "cityName": "吉林市",
    "mallAreaList": [{
      "areaCode": "220202",
      "areaName": "昌邑区" },
    {
      "areaCode": "220203",
      "areaName": "龙潭区" },
    {
      "areaCode": "220204",
      "areaName": "船营区" },
    {
      "areaCode": "220211",
      "areaName": "丰满区" },
    {
      "areaCode": "220221",
      "areaName": "永吉县" },
    {
      "areaCode": "220281",
      "areaName": "蛟河市" },
    {
      "areaCode": "220282",
      "areaName": "桦甸市" },
    {
      "areaCode": "220283",
      "areaName": "舒兰市" },
    {
      "areaCode": "220284",
      "areaName": "磐石市" }] },

  {
    "cityCode": "220300",
    "cityName": "四平市",
    "mallAreaList": [{
      "areaCode": "220302",
      "areaName": "铁西区" },
    {
      "areaCode": "220303",
      "areaName": "铁东区" },
    {
      "areaCode": "220322",
      "areaName": "梨树县" },
    {
      "areaCode": "220323",
      "areaName": "伊通满族自治县" },
    {
      "areaCode": "220381",
      "areaName": "公主岭市" },
    {
      "areaCode": "220382",
      "areaName": "双辽市" }] },

  {
    "cityCode": "220400",
    "cityName": "辽源市",
    "mallAreaList": [{
      "areaCode": "220402",
      "areaName": "龙山区" },
    {
      "areaCode": "220403",
      "areaName": "西安区" },
    {
      "areaCode": "220421",
      "areaName": "东丰县" },
    {
      "areaCode": "220422",
      "areaName": "东辽县" }] },

  {
    "cityCode": "220500",
    "cityName": "通化市",
    "mallAreaList": [{
      "areaCode": "220502",
      "areaName": "东昌区" },
    {
      "areaCode": "220503",
      "areaName": "二道江区" },
    {
      "areaCode": "220521",
      "areaName": "通化县" },
    {
      "areaCode": "220523",
      "areaName": "辉南县" },
    {
      "areaCode": "220524",
      "areaName": "柳河县" },
    {
      "areaCode": "220581",
      "areaName": "梅河口市" },
    {
      "areaCode": "220582",
      "areaName": "集安市" }] },

  {
    "cityCode": "220600",
    "cityName": "白山市",
    "mallAreaList": [{
      "areaCode": "220602",
      "areaName": "浑江区" },
    {
      "areaCode": "220605",
      "areaName": "江源区" },
    {
      "areaCode": "220621",
      "areaName": "抚松县" },
    {
      "areaCode": "220622",
      "areaName": "靖宇县" },
    {
      "areaCode": "220623",
      "areaName": "长白朝鲜族自治县" },
    {
      "areaCode": "220681",
      "areaName": "临江市" }] },

  {
    "cityCode": "220700",
    "cityName": "松原市",
    "mallAreaList": [{
      "areaCode": "220702",
      "areaName": "宁江区" },
    {
      "areaCode": "220721",
      "areaName": "前郭尔罗斯蒙古族自治县" },
    {
      "areaCode": "220722",
      "areaName": "长岭县" },
    {
      "areaCode": "220723",
      "areaName": "乾安县" },
    {
      "areaCode": "220781",
      "areaName": "扶余市" }] },

  {
    "cityCode": "220800",
    "cityName": "白城市",
    "mallAreaList": [{
      "areaCode": "220802",
      "areaName": "洮北区" },
    {
      "areaCode": "220821",
      "areaName": "镇赉县" },
    {
      "areaCode": "220822",
      "areaName": "通榆县" },
    {
      "areaCode": "220881",
      "areaName": "洮南市" },
    {
      "areaCode": "220882",
      "areaName": "大安市" }] },

  {
    "cityCode": "222400",
    "cityName": "延边朝鲜族自治州",
    "mallAreaList": [{
      "areaCode": "222401",
      "areaName": "延吉市" },
    {
      "areaCode": "222402",
      "areaName": "图们市" },
    {
      "areaCode": "222403",
      "areaName": "敦化市" },
    {
      "areaCode": "222404",
      "areaName": "珲春市" },
    {
      "areaCode": "222405",
      "areaName": "龙井市" },
    {
      "areaCode": "222406",
      "areaName": "和龙市" },
    {
      "areaCode": "222424",
      "areaName": "汪清县" },
    {
      "areaCode": "222426",
      "areaName": "安图县" }] }] },


{
  "provinceCode": "230000",
  "provinceName": "黑龙江省",
  "mallCityList": [{
    "cityCode": "230100",
    "cityName": "哈尔滨市",
    "mallAreaList": [{
      "areaCode": "230102",
      "areaName": "道里区" },
    {
      "areaCode": "230103",
      "areaName": "南岗区" },
    {
      "areaCode": "230104",
      "areaName": "道外区" },
    {
      "areaCode": "230108",
      "areaName": "平房区" },
    {
      "areaCode": "230109",
      "areaName": "松北区" },
    {
      "areaCode": "230110",
      "areaName": "香坊区" },
    {
      "areaCode": "230111",
      "areaName": "呼兰区" },
    {
      "areaCode": "230112",
      "areaName": "阿城区" },
    {
      "areaCode": "230123",
      "areaName": "依兰县" },
    {
      "areaCode": "230124",
      "areaName": "方正县" },
    {
      "areaCode": "230125",
      "areaName": "宾县" },
    {
      "areaCode": "230126",
      "areaName": "巴彦县" },
    {
      "areaCode": "230127",
      "areaName": "木兰县" },
    {
      "areaCode": "230128",
      "areaName": "通河县" },
    {
      "areaCode": "230129",
      "areaName": "延寿县" },
    {
      "areaCode": "230182",
      "areaName": "双城市" },
    {
      "areaCode": "230183",
      "areaName": "尚志市" },
    {
      "areaCode": "230184",
      "areaName": "五常市" }] },

  {
    "cityCode": "230200",
    "cityName": "齐齐哈尔市",
    "mallAreaList": [{
      "areaCode": "230202",
      "areaName": "龙沙区" },
    {
      "areaCode": "230203",
      "areaName": "建华区" },
    {
      "areaCode": "230204",
      "areaName": "铁锋区" },
    {
      "areaCode": "230205",
      "areaName": "昂昂溪区" },
    {
      "areaCode": "230206",
      "areaName": "富拉尔基区" },
    {
      "areaCode": "230207",
      "areaName": "碾子山区" },
    {
      "areaCode": "230208",
      "areaName": "梅里斯达斡尔族区" },
    {
      "areaCode": "230221",
      "areaName": "龙江县" },
    {
      "areaCode": "230223",
      "areaName": "依安县" },
    {
      "areaCode": "230224",
      "areaName": "泰来县" },
    {
      "areaCode": "230225",
      "areaName": "甘南县" },
    {
      "areaCode": "230227",
      "areaName": "富裕县" },
    {
      "areaCode": "230229",
      "areaName": "克山县" },
    {
      "areaCode": "230230",
      "areaName": "克东县" },
    {
      "areaCode": "230231",
      "areaName": "拜泉县" },
    {
      "areaCode": "230281",
      "areaName": "讷河市" }] },

  {
    "cityCode": "230300",
    "cityName": "鸡西市",
    "mallAreaList": [{
      "areaCode": "230302",
      "areaName": "鸡冠区" },
    {
      "areaCode": "230303",
      "areaName": "恒山区" },
    {
      "areaCode": "230304",
      "areaName": "滴道区" },
    {
      "areaCode": "230305",
      "areaName": "梨树区" },
    {
      "areaCode": "230306",
      "areaName": "城子河区" },
    {
      "areaCode": "230307",
      "areaName": "麻山区" },
    {
      "areaCode": "230321",
      "areaName": "鸡东县" },
    {
      "areaCode": "230381",
      "areaName": "虎林市" },
    {
      "areaCode": "230382",
      "areaName": "密山市" }] },

  {
    "cityCode": "230400",
    "cityName": "鹤岗市",
    "mallAreaList": [{
      "areaCode": "230402",
      "areaName": "向阳区" },
    {
      "areaCode": "230403",
      "areaName": "工农区" },
    {
      "areaCode": "230404",
      "areaName": "南山区" },
    {
      "areaCode": "230405",
      "areaName": "兴安区" },
    {
      "areaCode": "230406",
      "areaName": "东山区" },
    {
      "areaCode": "230407",
      "areaName": "兴山区" },
    {
      "areaCode": "230421",
      "areaName": "萝北县" },
    {
      "areaCode": "230422",
      "areaName": "绥滨县" }] },

  {
    "cityCode": "230500",
    "cityName": "双鸭山市",
    "mallAreaList": [{
      "areaCode": "230502",
      "areaName": "尖山区" },
    {
      "areaCode": "230503",
      "areaName": "岭东区" },
    {
      "areaCode": "230505",
      "areaName": "四方台区" },
    {
      "areaCode": "230506",
      "areaName": "宝山区" },
    {
      "areaCode": "230521",
      "areaName": "集贤县" },
    {
      "areaCode": "230522",
      "areaName": "友谊县" },
    {
      "areaCode": "230523",
      "areaName": "宝清县" },
    {
      "areaCode": "230524",
      "areaName": "饶河县" }] },

  {
    "cityCode": "230600",
    "cityName": "大庆市",
    "mallAreaList": [{
      "areaCode": "230602",
      "areaName": "萨尔图区" },
    {
      "areaCode": "230603",
      "areaName": "龙凤区" },
    {
      "areaCode": "230604",
      "areaName": "让胡路区" },
    {
      "areaCode": "230605",
      "areaName": "红岗区" },
    {
      "areaCode": "230606",
      "areaName": "大同区" },
    {
      "areaCode": "230621",
      "areaName": "肇州县" },
    {
      "areaCode": "230622",
      "areaName": "肇源县" },
    {
      "areaCode": "230623",
      "areaName": "林甸县" },
    {
      "areaCode": "230624",
      "areaName": "杜尔伯特蒙古族自治县" }] },

  {
    "cityCode": "230700",
    "cityName": "伊春市",
    "mallAreaList": [{
      "areaCode": "230702",
      "areaName": "伊春区" },
    {
      "areaCode": "230703",
      "areaName": "南岔区" },
    {
      "areaCode": "230704",
      "areaName": "友好区" },
    {
      "areaCode": "230705",
      "areaName": "西林区" },
    {
      "areaCode": "230706",
      "areaName": "翠峦区" },
    {
      "areaCode": "230707",
      "areaName": "新青区" },
    {
      "areaCode": "230708",
      "areaName": "美溪区" },
    {
      "areaCode": "230709",
      "areaName": "金山屯区" },
    {
      "areaCode": "230710",
      "areaName": "五营区" },
    {
      "areaCode": "230711",
      "areaName": "乌马河区" },
    {
      "areaCode": "230712",
      "areaName": "汤旺河区" },
    {
      "areaCode": "230713",
      "areaName": "带岭区" },
    {
      "areaCode": "230714",
      "areaName": "乌伊岭区" },
    {
      "areaCode": "230715",
      "areaName": "红星区" },
    {
      "areaCode": "230716",
      "areaName": "上甘岭区" },
    {
      "areaCode": "230722",
      "areaName": "嘉荫县" },
    {
      "areaCode": "230781",
      "areaName": "铁力市" }] },

  {
    "cityCode": "230800",
    "cityName": "佳木斯市",
    "mallAreaList": [{
      "areaCode": "230803",
      "areaName": "向阳区" },
    {
      "areaCode": "230804",
      "areaName": "前进区" },
    {
      "areaCode": "230805",
      "areaName": "东风区" },
    {
      "areaCode": "230811",
      "areaName": "郊区" },
    {
      "areaCode": "230822",
      "areaName": "桦南县" },
    {
      "areaCode": "230826",
      "areaName": "桦川县" },
    {
      "areaCode": "230828",
      "areaName": "汤原县" },
    {
      "areaCode": "230833",
      "areaName": "抚远县" },
    {
      "areaCode": "230881",
      "areaName": "同江市" },
    {
      "areaCode": "230882",
      "areaName": "富锦市" }] },

  {
    "cityCode": "230900",
    "cityName": "七台河市",
    "mallAreaList": [{
      "areaCode": "230902",
      "areaName": "新兴区" },
    {
      "areaCode": "230903",
      "areaName": "桃山区" },
    {
      "areaCode": "230904",
      "areaName": "茄子河区" },
    {
      "areaCode": "230921",
      "areaName": "勃利县" }] },

  {
    "cityCode": "231000",
    "cityName": "牡丹江市",
    "mallAreaList": [{
      "areaCode": "231002",
      "areaName": "东安区" },
    {
      "areaCode": "231003",
      "areaName": "阳明区" },
    {
      "areaCode": "231004",
      "areaName": "爱民区" },
    {
      "areaCode": "231005",
      "areaName": "西安区" },
    {
      "areaCode": "231024",
      "areaName": "东宁县" },
    {
      "areaCode": "231025",
      "areaName": "林口县" },
    {
      "areaCode": "231081",
      "areaName": "绥芬河市" },
    {
      "areaCode": "231083",
      "areaName": "海林市" },
    {
      "areaCode": "231084",
      "areaName": "宁安市" },
    {
      "areaCode": "231085",
      "areaName": "穆棱市" }] },

  {
    "cityCode": "231100",
    "cityName": "黑河市",
    "mallAreaList": [{
      "areaCode": "231102",
      "areaName": "爱辉区" },
    {
      "areaCode": "231121",
      "areaName": "嫩江县" },
    {
      "areaCode": "231123",
      "areaName": "逊克县" },
    {
      "areaCode": "231124",
      "areaName": "孙吴县" },
    {
      "areaCode": "231181",
      "areaName": "北安市" },
    {
      "areaCode": "231182",
      "areaName": "五大连池市" }] },

  {
    "cityCode": "231200",
    "cityName": "绥化市",
    "mallAreaList": [{
      "areaCode": "231202",
      "areaName": "北林区" },
    {
      "areaCode": "231221",
      "areaName": "望奎县" },
    {
      "areaCode": "231222",
      "areaName": "兰西县" },
    {
      "areaCode": "231223",
      "areaName": "青冈县" },
    {
      "areaCode": "231224",
      "areaName": "庆安县" },
    {
      "areaCode": "231225",
      "areaName": "明水县" },
    {
      "areaCode": "231226",
      "areaName": "绥棱县" },
    {
      "areaCode": "231281",
      "areaName": "安达市" },
    {
      "areaCode": "231282",
      "areaName": "肇东市" },
    {
      "areaCode": "231283",
      "areaName": "海伦市" }] },

  {
    "cityCode": "232700",
    "cityName": "大兴安岭地区",
    "mallAreaList": [{
      "areaCode": "232721",
      "areaName": "呼玛县" },
    {
      "areaCode": "232722",
      "areaName": "塔河县" },
    {
      "areaCode": "232723",
      "areaName": "漠河县" }] }] },


{
  "provinceCode": "310000",
  "provinceName": "上海市",
  "mallCityList": [{
    "cityCode": "310100",
    "cityName": "上海市",
    "mallAreaList": [{
      "areaCode": "310101",
      "areaName": "黄浦区" },
    {
      "areaCode": "310104",
      "areaName": "徐汇区" },
    {
      "areaCode": "310105",
      "areaName": "长宁区" },
    {
      "areaCode": "310106",
      "areaName": "静安区" },
    {
      "areaCode": "310107",
      "areaName": "普陀区" },
    {
      "areaCode": "310108",
      "areaName": "闸北区" },
    {
      "areaCode": "310109",
      "areaName": "虹口区" },
    {
      "areaCode": "310110",
      "areaName": "杨浦区" },
    {
      "areaCode": "310112",
      "areaName": "闵行区" },
    {
      "areaCode": "310113",
      "areaName": "宝山区" },
    {
      "areaCode": "310114",
      "areaName": "嘉定区" },
    {
      "areaCode": "310115",
      "areaName": "浦东新区" },
    {
      "areaCode": "310116",
      "areaName": "金山区" },
    {
      "areaCode": "310117",
      "areaName": "松江区" },
    {
      "areaCode": "310118",
      "areaName": "青浦区" },
    {
      "areaCode": "310120",
      "areaName": "奉贤区" }] },

  {
    "cityCode": "310200",
    "cityName": "上海市辖县",
    "mallAreaList": [{
      "areaCode": "310230",
      "areaName": "崇明县" }] }] },


{
  "provinceCode": "320000",
  "provinceName": "江苏省",
  "mallCityList": [{
    "cityCode": "320100",
    "cityName": "南京市",
    "mallAreaList": [{
      "areaCode": "320102",
      "areaName": "玄武区" },
    {
      "areaCode": "320104",
      "areaName": "秦淮区" },
    {
      "areaCode": "320105",
      "areaName": "建邺区" },
    {
      "areaCode": "320106",
      "areaName": "鼓楼区" },
    {
      "areaCode": "320111",
      "areaName": "浦口区" },
    {
      "areaCode": "320113",
      "areaName": "栖霞区" },
    {
      "areaCode": "320114",
      "areaName": "雨花台区" },
    {
      "areaCode": "320115",
      "areaName": "江宁区" },
    {
      "areaCode": "320116",
      "areaName": "六合区" },
    {
      "areaCode": "320117",
      "areaName": "溧水区" },
    {
      "areaCode": "320118",
      "areaName": "高淳区" }] },

  {
    "cityCode": "320200",
    "cityName": "无锡市",
    "mallAreaList": [{
      "areaCode": "320202",
      "areaName": "崇安区" },
    {
      "areaCode": "320203",
      "areaName": "南长区" },
    {
      "areaCode": "320204",
      "areaName": "北塘区" },
    {
      "areaCode": "320205",
      "areaName": "锡山区" },
    {
      "areaCode": "320206",
      "areaName": "惠山区" },
    {
      "areaCode": "320211",
      "areaName": "滨湖区" },
    {
      "areaCode": "320281",
      "areaName": "江阴市" },
    {
      "areaCode": "320282",
      "areaName": "宜兴市" }] },

  {
    "cityCode": "320300",
    "cityName": "徐州市",
    "mallAreaList": [{
      "areaCode": "320302",
      "areaName": "鼓楼区" },
    {
      "areaCode": "320303",
      "areaName": "云龙区" },
    {
      "areaCode": "320305",
      "areaName": "贾汪区" },
    {
      "areaCode": "320311",
      "areaName": "泉山区" },
    {
      "areaCode": "320312",
      "areaName": "铜山区" },
    {
      "areaCode": "320321",
      "areaName": "丰县" },
    {
      "areaCode": "320322",
      "areaName": "沛县" },
    {
      "areaCode": "320324",
      "areaName": "睢宁县" },
    {
      "areaCode": "320381",
      "areaName": "新沂市" },
    {
      "areaCode": "320382",
      "areaName": "邳州市" }] },

  {
    "cityCode": "320400",
    "cityName": "常州市",
    "mallAreaList": [{
      "areaCode": "320402",
      "areaName": "天宁区" },
    {
      "areaCode": "320404",
      "areaName": "钟楼区" },
    {
      "areaCode": "320405",
      "areaName": "戚墅堰区" },
    {
      "areaCode": "320411",
      "areaName": "新北区" },
    {
      "areaCode": "320412",
      "areaName": "武进区" },
    {
      "areaCode": "320481",
      "areaName": "溧阳市" },
    {
      "areaCode": "320482",
      "areaName": "金坛市" }] },

  {
    "cityCode": "320500",
    "cityName": "苏州市",
    "mallAreaList": [{
      "areaCode": "320505",
      "areaName": "虎丘区" },
    {
      "areaCode": "320506",
      "areaName": "吴中区" },
    {
      "areaCode": "320507",
      "areaName": "相城区" },
    {
      "areaCode": "320508",
      "areaName": "姑苏区" },
    {
      "areaCode": "320509",
      "areaName": "吴江区" },
    {
      "areaCode": "320581",
      "areaName": "常熟市" },
    {
      "areaCode": "320582",
      "areaName": "张家港市" },
    {
      "areaCode": "320583",
      "areaName": "昆山市" },
    {
      "areaCode": "320585",
      "areaName": "太仓市" }] },

  {
    "cityCode": "320600",
    "cityName": "南通市",
    "mallAreaList": [{
      "areaCode": "320602",
      "areaName": "崇川区" },
    {
      "areaCode": "320611",
      "areaName": "港闸区" },
    {
      "areaCode": "320612",
      "areaName": "通州区" },
    {
      "areaCode": "320621",
      "areaName": "海安县" },
    {
      "areaCode": "320623",
      "areaName": "如东县" },
    {
      "areaCode": "320681",
      "areaName": "启东市" },
    {
      "areaCode": "320682",
      "areaName": "如皋市" },
    {
      "areaCode": "320684",
      "areaName": "海门市" }] },

  {
    "cityCode": "320700",
    "cityName": "连云港市",
    "mallAreaList": [{
      "areaCode": "320703",
      "areaName": "连云区" },
    {
      "areaCode": "320705",
      "areaName": "新浦" },
    {
      "areaCode": "320706",
      "areaName": "海州区" },
    {
      "areaCode": "320707",
      "areaName": "赣榆区" },
    {
      "areaCode": "320722",
      "areaName": "东海县" },
    {
      "areaCode": "320723",
      "areaName": "灌云县" },
    {
      "areaCode": "320724",
      "areaName": "灌南县" }] },

  {
    "cityCode": "320800",
    "cityName": "淮安市",
    "mallAreaList": [{
      "areaCode": "320802",
      "areaName": "清河区" },
    {
      "areaCode": "320803",
      "areaName": "淮安区" },
    {
      "areaCode": "320804",
      "areaName": "淮阴区" },
    {
      "areaCode": "320811",
      "areaName": "清浦区" },
    {
      "areaCode": "320826",
      "areaName": "涟水县" },
    {
      "areaCode": "320829",
      "areaName": "洪泽县" },
    {
      "areaCode": "320830",
      "areaName": "盱眙县" },
    {
      "areaCode": "320831",
      "areaName": "金湖县" }] },

  {
    "cityCode": "320900",
    "cityName": "盐城市",
    "mallAreaList": [{
      "areaCode": "320902",
      "areaName": "亭湖区" },
    {
      "areaCode": "320903",
      "areaName": "盐都区" },
    {
      "areaCode": "320921",
      "areaName": "响水县" },
    {
      "areaCode": "320922",
      "areaName": "滨海县" },
    {
      "areaCode": "320923",
      "areaName": "阜宁县" },
    {
      "areaCode": "320924",
      "areaName": "射阳县" },
    {
      "areaCode": "320925",
      "areaName": "建湖县" },
    {
      "areaCode": "320981",
      "areaName": "东台市" },
    {
      "areaCode": "320982",
      "areaName": "大丰市" }] },

  {
    "cityCode": "321000",
    "cityName": "扬州市",
    "mallAreaList": [{
      "areaCode": "321002",
      "areaName": "广陵区" },
    {
      "areaCode": "321003",
      "areaName": "邗江区" },
    {
      "areaCode": "321012",
      "areaName": "江都区" },
    {
      "areaCode": "321023",
      "areaName": "宝应县" },
    {
      "areaCode": "321081",
      "areaName": "仪征市" },
    {
      "areaCode": "321084",
      "areaName": "高邮市" }] },

  {
    "cityCode": "321100",
    "cityName": "镇江市",
    "mallAreaList": [{
      "areaCode": "321102",
      "areaName": "京口区" },
    {
      "areaCode": "321111",
      "areaName": "润州区" },
    {
      "areaCode": "321112",
      "areaName": "丹徒区" },
    {
      "areaCode": "321181",
      "areaName": "丹阳市" },
    {
      "areaCode": "321182",
      "areaName": "扬中市" },
    {
      "areaCode": "321183",
      "areaName": "句容市" }] },

  {
    "cityCode": "321200",
    "cityName": "泰州市",
    "mallAreaList": [{
      "areaCode": "321202",
      "areaName": "海陵区" },
    {
      "areaCode": "321203",
      "areaName": "高港区" },
    {
      "areaCode": "321204",
      "areaName": "姜堰区" },
    {
      "areaCode": "321281",
      "areaName": "兴化市" },
    {
      "areaCode": "321282",
      "areaName": "靖江市" },
    {
      "areaCode": "321283",
      "areaName": "泰兴市" }] },

  {
    "cityCode": "321300",
    "cityName": "宿迁市",
    "mallAreaList": [{
      "areaCode": "321302",
      "areaName": "宿城区" },
    {
      "areaCode": "321311",
      "areaName": "宿豫区" },
    {
      "areaCode": "321322",
      "areaName": "沭阳县" },
    {
      "areaCode": "321323",
      "areaName": "泗阳县" },
    {
      "areaCode": "321324",
      "areaName": "泗洪县" }] }] },


{
  "provinceCode": "330000",
  "provinceName": "浙江省",
  "mallCityList": [{
    "cityCode": "330100",
    "cityName": "杭州市",
    "mallAreaList": [{
      "areaCode": "330102",
      "areaName": "上城区" },
    {
      "areaCode": "330103",
      "areaName": "下城区" },
    {
      "areaCode": "330104",
      "areaName": "江干区" },
    {
      "areaCode": "330105",
      "areaName": "拱墅区" },
    {
      "areaCode": "330106",
      "areaName": "西湖区" },
    {
      "areaCode": "330108",
      "areaName": "滨江区" },
    {
      "areaCode": "330109",
      "areaName": "萧山区" },
    {
      "areaCode": "330110",
      "areaName": "余杭区" },
    {
      "areaCode": "330122",
      "areaName": "桐庐县" },
    {
      "areaCode": "330127",
      "areaName": "淳安县" },
    {
      "areaCode": "330182",
      "areaName": "建德市" },
    {
      "areaCode": "330183",
      "areaName": "富阳市" },
    {
      "areaCode": "330185",
      "areaName": "临安市" }] },

  {
    "cityCode": "330200",
    "cityName": "宁波市",
    "mallAreaList": [{
      "areaCode": "330203",
      "areaName": "海曙区" },
    {
      "areaCode": "330204",
      "areaName": "江东区" },
    {
      "areaCode": "330205",
      "areaName": "江北区" },
    {
      "areaCode": "330206",
      "areaName": "北仑区" },
    {
      "areaCode": "330211",
      "areaName": "镇海区" },
    {
      "areaCode": "330212",
      "areaName": "鄞州区" },
    {
      "areaCode": "330225",
      "areaName": "象山县" },
    {
      "areaCode": "330226",
      "areaName": "宁海县" },
    {
      "areaCode": "330281",
      "areaName": "余姚市" },
    {
      "areaCode": "330282",
      "areaName": "慈溪市" },
    {
      "areaCode": "330283",
      "areaName": "奉化市" }] },

  {
    "cityCode": "330300",
    "cityName": "温州市",
    "mallAreaList": [{
      "areaCode": "330302",
      "areaName": "鹿城区" },
    {
      "areaCode": "330303",
      "areaName": "龙湾区" },
    {
      "areaCode": "330304",
      "areaName": "瓯海区" },
    {
      "areaCode": "330322",
      "areaName": "洞头县" },
    {
      "areaCode": "330324",
      "areaName": "永嘉县" },
    {
      "areaCode": "330326",
      "areaName": "平阳县" },
    {
      "areaCode": "330327",
      "areaName": "苍南县" },
    {
      "areaCode": "330328",
      "areaName": "文成县" },
    {
      "areaCode": "330329",
      "areaName": "泰顺县" },
    {
      "areaCode": "330381",
      "areaName": "瑞安市" },
    {
      "areaCode": "330382",
      "areaName": "乐清市" }] },

  {
    "cityCode": "330400",
    "cityName": "嘉兴市",
    "mallAreaList": [{
      "areaCode": "330402",
      "areaName": "南湖区" },
    {
      "areaCode": "330411",
      "areaName": "秀洲区" },
    {
      "areaCode": "330421",
      "areaName": "嘉善县" },
    {
      "areaCode": "330424",
      "areaName": "海盐县" },
    {
      "areaCode": "330481",
      "areaName": "海宁市" },
    {
      "areaCode": "330482",
      "areaName": "平湖市" },
    {
      "areaCode": "330483",
      "areaName": "桐乡市" }] },

  {
    "cityCode": "330500",
    "cityName": "湖州市",
    "mallAreaList": [{
      "areaCode": "330502",
      "areaName": "吴兴区" },
    {
      "areaCode": "330503",
      "areaName": "南浔区" },
    {
      "areaCode": "330521",
      "areaName": "德清县" },
    {
      "areaCode": "330522",
      "areaName": "长兴县" },
    {
      "areaCode": "330523",
      "areaName": "安吉县" }] },

  {
    "cityCode": "330600",
    "cityName": "绍兴市",
    "mallAreaList": [{
      "areaCode": "330602",
      "areaName": "越城区" },
    {
      "areaCode": "330603",
      "areaName": "柯桥区" },
    {
      "areaCode": "330604",
      "areaName": "上虞区" },
    {
      "areaCode": "330624",
      "areaName": "新昌县" },
    {
      "areaCode": "330681",
      "areaName": "诸暨市" },
    {
      "areaCode": "330683",
      "areaName": "嵊州市" }] },

  {
    "cityCode": "330700",
    "cityName": "金华市",
    "mallAreaList": [{
      "areaCode": "330702",
      "areaName": "婺城区" },
    {
      "areaCode": "330703",
      "areaName": "金东区" },
    {
      "areaCode": "330723",
      "areaName": "武义县" },
    {
      "areaCode": "330726",
      "areaName": "浦江县" },
    {
      "areaCode": "330727",
      "areaName": "磐安县" },
    {
      "areaCode": "330781",
      "areaName": "兰溪市" },
    {
      "areaCode": "330782",
      "areaName": "义乌市" },
    {
      "areaCode": "330783",
      "areaName": "东阳市" },
    {
      "areaCode": "330784",
      "areaName": "永康市" }] },

  {
    "cityCode": "330800",
    "cityName": "衢州市",
    "mallAreaList": [{
      "areaCode": "330802",
      "areaName": "柯城区" },
    {
      "areaCode": "330803",
      "areaName": "衢江区" },
    {
      "areaCode": "330822",
      "areaName": "常山县" },
    {
      "areaCode": "330824",
      "areaName": "开化县" },
    {
      "areaCode": "330825",
      "areaName": "龙游县" },
    {
      "areaCode": "330881",
      "areaName": "江山市" }] },

  {
    "cityCode": "330900",
    "cityName": "舟山市",
    "mallAreaList": [{
      "areaCode": "330902",
      "areaName": "定海区" },
    {
      "areaCode": "330903",
      "areaName": "普陀区" },
    {
      "areaCode": "330921",
      "areaName": "岱山县" },
    {
      "areaCode": "330922",
      "areaName": "嵊泗县" }] },

  {
    "cityCode": "331000",
    "cityName": "台州市",
    "mallAreaList": [{
      "areaCode": "331002",
      "areaName": "椒江区" },
    {
      "areaCode": "331003",
      "areaName": "黄岩区" },
    {
      "areaCode": "331004",
      "areaName": "路桥区" },
    {
      "areaCode": "331021",
      "areaName": "玉环县" },
    {
      "areaCode": "331022",
      "areaName": "三门县" },
    {
      "areaCode": "331023",
      "areaName": "天台县" },
    {
      "areaCode": "331024",
      "areaName": "仙居县" },
    {
      "areaCode": "331081",
      "areaName": "温岭市" },
    {
      "areaCode": "331082",
      "areaName": "临海市" }] },

  {
    "cityCode": "331100",
    "cityName": "丽水市",
    "mallAreaList": [{
      "areaCode": "331102",
      "areaName": "莲都区" },
    {
      "areaCode": "331121",
      "areaName": "青田县" },
    {
      "areaCode": "331122",
      "areaName": "缙云县" },
    {
      "areaCode": "331123",
      "areaName": "遂昌县" },
    {
      "areaCode": "331124",
      "areaName": "松阳县" },
    {
      "areaCode": "331125",
      "areaName": "云和县" },
    {
      "areaCode": "331126",
      "areaName": "庆元县" },
    {
      "areaCode": "331127",
      "areaName": "景宁畲族自治县" },
    {
      "areaCode": "331181",
      "areaName": "龙泉市" }] }] },


{
  "provinceCode": "340000",
  "provinceName": "安徽省",
  "mallCityList": [{
    "cityCode": "340100",
    "cityName": "合肥市",
    "mallAreaList": [{
      "areaCode": "340102",
      "areaName": "瑶海区" },
    {
      "areaCode": "340103",
      "areaName": "庐阳区" },
    {
      "areaCode": "340104",
      "areaName": "蜀山区" },
    {
      "areaCode": "340111",
      "areaName": "包河区" },
    {
      "areaCode": "340121",
      "areaName": "长丰县" },
    {
      "areaCode": "340122",
      "areaName": "肥东县" },
    {
      "areaCode": "340123",
      "areaName": "肥西县" },
    {
      "areaCode": "340124",
      "areaName": "庐江县" },
    {
      "areaCode": "340181",
      "areaName": "巢湖市" }] },

  {
    "cityCode": "340200",
    "cityName": "芜湖市",
    "mallAreaList": [{
      "areaCode": "340202",
      "areaName": "镜湖区" },
    {
      "areaCode": "340203",
      "areaName": "弋江区" },
    {
      "areaCode": "340207",
      "areaName": "鸠江区" },
    {
      "areaCode": "340208",
      "areaName": "三山区" },
    {
      "areaCode": "340221",
      "areaName": "芜湖县" },
    {
      "areaCode": "340222",
      "areaName": "繁昌县" },
    {
      "areaCode": "340223",
      "areaName": "南陵县" },
    {
      "areaCode": "340225",
      "areaName": "无为县" }] },

  {
    "cityCode": "340300",
    "cityName": "蚌埠市",
    "mallAreaList": [{
      "areaCode": "340302",
      "areaName": "龙子湖区" },
    {
      "areaCode": "340303",
      "areaName": "蚌山区" },
    {
      "areaCode": "340304",
      "areaName": "禹会区" },
    {
      "areaCode": "340311",
      "areaName": "淮上区" },
    {
      "areaCode": "340321",
      "areaName": "怀远县" },
    {
      "areaCode": "340322",
      "areaName": "五河县" },
    {
      "areaCode": "340323",
      "areaName": "固镇县" }] },

  {
    "cityCode": "340400",
    "cityName": "淮南市",
    "mallAreaList": [{
      "areaCode": "340402",
      "areaName": "大通区" },
    {
      "areaCode": "340403",
      "areaName": "田家庵区" },
    {
      "areaCode": "340404",
      "areaName": "谢家集区" },
    {
      "areaCode": "340405",
      "areaName": "八公山区" },
    {
      "areaCode": "340406",
      "areaName": "潘集区" },
    {
      "areaCode": "340421",
      "areaName": "凤台县" }] },

  {
    "cityCode": "340500",
    "cityName": "马鞍山市",
    "mallAreaList": [{
      "areaCode": "340503",
      "areaName": "花山区" },
    {
      "areaCode": "340504",
      "areaName": "雨山区" },
    {
      "areaCode": "340506",
      "areaName": "博望区" },
    {
      "areaCode": "340521",
      "areaName": "当涂县" },
    {
      "areaCode": "340522",
      "areaName": "含山县" },
    {
      "areaCode": "340523",
      "areaName": "和县" }] },

  {
    "cityCode": "340600",
    "cityName": "淮北市",
    "mallAreaList": [{
      "areaCode": "340602",
      "areaName": "杜集区" },
    {
      "areaCode": "340603",
      "areaName": "相山区" },
    {
      "areaCode": "340604",
      "areaName": "烈山区" },
    {
      "areaCode": "340621",
      "areaName": "濉溪县" }] },

  {
    "cityCode": "340700",
    "cityName": "铜陵市",
    "mallAreaList": [{
      "areaCode": "340702",
      "areaName": "铜官山区" },
    {
      "areaCode": "340703",
      "areaName": "狮子山区" },
    {
      "areaCode": "340711",
      "areaName": "郊区" },
    {
      "areaCode": "340721",
      "areaName": "铜陵县" }] },

  {
    "cityCode": "340800",
    "cityName": "安庆市",
    "mallAreaList": [{
      "areaCode": "340802",
      "areaName": "迎江区" },
    {
      "areaCode": "340803",
      "areaName": "大观区" },
    {
      "areaCode": "340811",
      "areaName": "宜秀区" },
    {
      "areaCode": "340822",
      "areaName": "怀宁县" },
    {
      "areaCode": "340823",
      "areaName": "枞阳县" },
    {
      "areaCode": "340824",
      "areaName": "潜山县" },
    {
      "areaCode": "340825",
      "areaName": "太湖县" },
    {
      "areaCode": "340826",
      "areaName": "宿松县" },
    {
      "areaCode": "340827",
      "areaName": "望江县" },
    {
      "areaCode": "340828",
      "areaName": "岳西县" },
    {
      "areaCode": "340881",
      "areaName": "桐城市" }] },

  {
    "cityCode": "341000",
    "cityName": "黄山市",
    "mallAreaList": [{
      "areaCode": "341002",
      "areaName": "屯溪区" },
    {
      "areaCode": "341003",
      "areaName": "黄山区" },
    {
      "areaCode": "341004",
      "areaName": "徽州区" },
    {
      "areaCode": "341021",
      "areaName": "歙县" },
    {
      "areaCode": "341022",
      "areaName": "休宁县" },
    {
      "areaCode": "341023",
      "areaName": "黟县" },
    {
      "areaCode": "341024",
      "areaName": "祁门县" }] },

  {
    "cityCode": "341100",
    "cityName": "滁州市",
    "mallAreaList": [{
      "areaCode": "341102",
      "areaName": "琅琊区" },
    {
      "areaCode": "341103",
      "areaName": "南谯区" },
    {
      "areaCode": "341122",
      "areaName": "来安县" },
    {
      "areaCode": "341124",
      "areaName": "全椒县" },
    {
      "areaCode": "341125",
      "areaName": "定远县" },
    {
      "areaCode": "341126",
      "areaName": "凤阳县" },
    {
      "areaCode": "341181",
      "areaName": "天长市" },
    {
      "areaCode": "341182",
      "areaName": "明光市" }] },

  {
    "cityCode": "341200",
    "cityName": "阜阳市",
    "mallAreaList": [{
      "areaCode": "341202",
      "areaName": "颍州区" },
    {
      "areaCode": "341203",
      "areaName": "颍东区" },
    {
      "areaCode": "341204",
      "areaName": "颍泉区" },
    {
      "areaCode": "341221",
      "areaName": "临泉县" },
    {
      "areaCode": "341222",
      "areaName": "太和县" },
    {
      "areaCode": "341225",
      "areaName": "阜南县" },
    {
      "areaCode": "341226",
      "areaName": "颍上县" },
    {
      "areaCode": "341282",
      "areaName": "界首市" }] },

  {
    "cityCode": "341300",
    "cityName": "宿州市",
    "mallAreaList": [{
      "areaCode": "341302",
      "areaName": "埇桥区" },
    {
      "areaCode": "341321",
      "areaName": "砀山县" },
    {
      "areaCode": "341322",
      "areaName": "萧县" },
    {
      "areaCode": "341323",
      "areaName": "灵璧县" },
    {
      "areaCode": "341324",
      "areaName": "泗县" }] },

  {
    "cityCode": "341400",
    "cityName": "巢湖市",
    "mallAreaList": [{
      "areaCode": "341400",
      "areaName": "巢湖市区" }] },

  {
    "cityCode": "341500",
    "cityName": "六安市",
    "mallAreaList": [{
      "areaCode": "341502",
      "areaName": "金安区" },
    {
      "areaCode": "341503",
      "areaName": "裕安区" },
    {
      "areaCode": "341521",
      "areaName": "寿县" },
    {
      "areaCode": "341522",
      "areaName": "霍邱县" },
    {
      "areaCode": "341523",
      "areaName": "舒城县" },
    {
      "areaCode": "341524",
      "areaName": "金寨县" },
    {
      "areaCode": "341525",
      "areaName": "霍山县" }] },

  {
    "cityCode": "341600",
    "cityName": "亳州市",
    "mallAreaList": [{
      "areaCode": "341602",
      "areaName": "谯城区" },
    {
      "areaCode": "341621",
      "areaName": "涡阳县" },
    {
      "areaCode": "341622",
      "areaName": "蒙城县" },
    {
      "areaCode": "341623",
      "areaName": "利辛县" }] },

  {
    "cityCode": "341700",
    "cityName": "池州市",
    "mallAreaList": [{
      "areaCode": "341702",
      "areaName": "贵池区" },
    {
      "areaCode": "341721",
      "areaName": "东至县" },
    {
      "areaCode": "341722",
      "areaName": "石台县" },
    {
      "areaCode": "341723",
      "areaName": "青阳县" }] },

  {
    "cityCode": "341800",
    "cityName": "宣城市",
    "mallAreaList": [{
      "areaCode": "341802",
      "areaName": "宣州区" },
    {
      "areaCode": "341821",
      "areaName": "郎溪县" },
    {
      "areaCode": "341822",
      "areaName": "广德县" },
    {
      "areaCode": "341823",
      "areaName": "泾县" },
    {
      "areaCode": "341824",
      "areaName": "绩溪县" },
    {
      "areaCode": "341825",
      "areaName": "旌德县" },
    {
      "areaCode": "341881",
      "areaName": "宁国市" }] }] },


{
  "provinceCode": "350000",
  "provinceName": "福建省",
  "mallCityList": [{
    "cityCode": "350100",
    "cityName": "福州市",
    "mallAreaList": [{
      "areaCode": "350102",
      "areaName": "鼓楼区" },
    {
      "areaCode": "350103",
      "areaName": "台江区" },
    {
      "areaCode": "350104",
      "areaName": "仓山区" },
    {
      "areaCode": "350105",
      "areaName": "马尾区" },
    {
      "areaCode": "350111",
      "areaName": "晋安区" },
    {
      "areaCode": "350121",
      "areaName": "闽侯县" },
    {
      "areaCode": "350122",
      "areaName": "连江县" },
    {
      "areaCode": "350123",
      "areaName": "罗源县" },
    {
      "areaCode": "350124",
      "areaName": "闽清县" },
    {
      "areaCode": "350125",
      "areaName": "永泰县" },
    {
      "areaCode": "350128",
      "areaName": "平潭县" },
    {
      "areaCode": "350181",
      "areaName": "福清市" },
    {
      "areaCode": "350182",
      "areaName": "长乐市" }] },

  {
    "cityCode": "350200",
    "cityName": "厦门市",
    "mallAreaList": [{
      "areaCode": "350203",
      "areaName": "思明区" },
    {
      "areaCode": "350205",
      "areaName": "海沧区" },
    {
      "areaCode": "350206",
      "areaName": "湖里区" },
    {
      "areaCode": "350211",
      "areaName": "集美区" },
    {
      "areaCode": "350212",
      "areaName": "同安区" },
    {
      "areaCode": "350213",
      "areaName": "翔安区" }] },

  {
    "cityCode": "350300",
    "cityName": "莆田市",
    "mallAreaList": [{
      "areaCode": "350302",
      "areaName": "城厢区" },
    {
      "areaCode": "350303",
      "areaName": "涵江区" },
    {
      "areaCode": "350304",
      "areaName": "荔城区" },
    {
      "areaCode": "350305",
      "areaName": "秀屿区" },
    {
      "areaCode": "350322",
      "areaName": "仙游县" }] },

  {
    "cityCode": "350400",
    "cityName": "三明市",
    "mallAreaList": [{
      "areaCode": "350402",
      "areaName": "梅列区" },
    {
      "areaCode": "350403",
      "areaName": "三元区" },
    {
      "areaCode": "350421",
      "areaName": "明溪县" },
    {
      "areaCode": "350423",
      "areaName": "清流县" },
    {
      "areaCode": "350424",
      "areaName": "宁化县" },
    {
      "areaCode": "350425",
      "areaName": "大田县" },
    {
      "areaCode": "350426",
      "areaName": "尤溪县" },
    {
      "areaCode": "350427",
      "areaName": "沙县" },
    {
      "areaCode": "350428",
      "areaName": "将乐县" },
    {
      "areaCode": "350429",
      "areaName": "泰宁县" },
    {
      "areaCode": "350430",
      "areaName": "建宁县" },
    {
      "areaCode": "350481",
      "areaName": "永安市" }] },

  {
    "cityCode": "350500",
    "cityName": "泉州市",
    "mallAreaList": [{
      "areaCode": "350502",
      "areaName": "鲤城区" },
    {
      "areaCode": "350503",
      "areaName": "丰泽区" },
    {
      "areaCode": "350504",
      "areaName": "洛江区" },
    {
      "areaCode": "350505",
      "areaName": "泉港区" },
    {
      "areaCode": "350521",
      "areaName": "惠安县" },
    {
      "areaCode": "350524",
      "areaName": "安溪县" },
    {
      "areaCode": "350525",
      "areaName": "永春县" },
    {
      "areaCode": "350526",
      "areaName": "德化县" },
    {
      "areaCode": "350527",
      "areaName": "金门县" },
    {
      "areaCode": "350581",
      "areaName": "石狮市" },
    {
      "areaCode": "350582",
      "areaName": "晋江市" },
    {
      "areaCode": "350583",
      "areaName": "南安市" }] },

  {
    "cityCode": "350600",
    "cityName": "漳州市",
    "mallAreaList": [{
      "areaCode": "350602",
      "areaName": "芗城区" },
    {
      "areaCode": "350603",
      "areaName": "龙文区" },
    {
      "areaCode": "350622",
      "areaName": "云霄县" },
    {
      "areaCode": "350623",
      "areaName": "漳浦县" },
    {
      "areaCode": "350624",
      "areaName": "诏安县" },
    {
      "areaCode": "350625",
      "areaName": "长泰县" },
    {
      "areaCode": "350626",
      "areaName": "东山县" },
    {
      "areaCode": "350627",
      "areaName": "南靖县" },
    {
      "areaCode": "350628",
      "areaName": "平和县" },
    {
      "areaCode": "350629",
      "areaName": "华安县" },
    {
      "areaCode": "350681",
      "areaName": "龙海市" }] },

  {
    "cityCode": "350700",
    "cityName": "南平市",
    "mallAreaList": [{
      "areaCode": "350702",
      "areaName": "延平区" },
    {
      "areaCode": "350721",
      "areaName": "顺昌县" },
    {
      "areaCode": "350722",
      "areaName": "浦城县" },
    {
      "areaCode": "350723",
      "areaName": "光泽县" },
    {
      "areaCode": "350724",
      "areaName": "松溪县" },
    {
      "areaCode": "350725",
      "areaName": "政和县" },
    {
      "areaCode": "350781",
      "areaName": "邵武市" },
    {
      "areaCode": "350782",
      "areaName": "武夷山市" },
    {
      "areaCode": "350783",
      "areaName": "建瓯市" },
    {
      "areaCode": "350784",
      "areaName": "建阳市" }] },

  {
    "cityCode": "350800",
    "cityName": "龙岩市",
    "mallAreaList": [{
      "areaCode": "350802",
      "areaName": "新罗区" },
    {
      "areaCode": "350821",
      "areaName": "长汀县" },
    {
      "areaCode": "350822",
      "areaName": "永定县" },
    {
      "areaCode": "350823",
      "areaName": "上杭县" },
    {
      "areaCode": "350824",
      "areaName": "武平县" },
    {
      "areaCode": "350825",
      "areaName": "连城县" },
    {
      "areaCode": "350881",
      "areaName": "漳平市" }] },

  {
    "cityCode": "350900",
    "cityName": "宁德市",
    "mallAreaList": [{
      "areaCode": "350902",
      "areaName": "蕉城区" },
    {
      "areaCode": "350921",
      "areaName": "霞浦县" },
    {
      "areaCode": "350922",
      "areaName": "古田县" },
    {
      "areaCode": "350923",
      "areaName": "屏南县" },
    {
      "areaCode": "350924",
      "areaName": "寿宁县" },
    {
      "areaCode": "350925",
      "areaName": "周宁县" },
    {
      "areaCode": "350926",
      "areaName": "柘荣县" },
    {
      "areaCode": "350981",
      "areaName": "福安市" },
    {
      "areaCode": "350982",
      "areaName": "福鼎市" }] }] },


{
  "provinceCode": "360000",
  "provinceName": "江西省",
  "mallCityList": [{
    "cityCode": "360100",
    "cityName": "南昌市",
    "mallAreaList": [{
      "areaCode": "360102",
      "areaName": "东湖区" },
    {
      "areaCode": "360103",
      "areaName": "西湖区" },
    {
      "areaCode": "360104",
      "areaName": "青云谱区" },
    {
      "areaCode": "360105",
      "areaName": "湾里区" },
    {
      "areaCode": "360111",
      "areaName": "青山湖区" },
    {
      "areaCode": "360121",
      "areaName": "南昌县" },
    {
      "areaCode": "360122",
      "areaName": "新建县" },
    {
      "areaCode": "360123",
      "areaName": "安义县" },
    {
      "areaCode": "360124",
      "areaName": "进贤县" }] },

  {
    "cityCode": "360200",
    "cityName": "景德镇市",
    "mallAreaList": [{
      "areaCode": "360202",
      "areaName": "昌江区" },
    {
      "areaCode": "360203",
      "areaName": "珠山区" },
    {
      "areaCode": "360222",
      "areaName": "浮梁县" },
    {
      "areaCode": "360281",
      "areaName": "乐平市" }] },

  {
    "cityCode": "360300",
    "cityName": "萍乡市",
    "mallAreaList": [{
      "areaCode": "360302",
      "areaName": "安源区" },
    {
      "areaCode": "360313",
      "areaName": "湘东区" },
    {
      "areaCode": "360321",
      "areaName": "莲花县" },
    {
      "areaCode": "360322",
      "areaName": "上栗县" },
    {
      "areaCode": "360323",
      "areaName": "芦溪县" }] },

  {
    "cityCode": "360400",
    "cityName": "九江市",
    "mallAreaList": [{
      "areaCode": "360402",
      "areaName": "庐山区" },
    {
      "areaCode": "360403",
      "areaName": "浔阳区" },
    {
      "areaCode": "360421",
      "areaName": "九江县" },
    {
      "areaCode": "360423",
      "areaName": "武宁县" },
    {
      "areaCode": "360424",
      "areaName": "修水县" },
    {
      "areaCode": "360425",
      "areaName": "永修县" },
    {
      "areaCode": "360426",
      "areaName": "德安县" },
    {
      "areaCode": "360427",
      "areaName": "星子县" },
    {
      "areaCode": "360428",
      "areaName": "都昌县" },
    {
      "areaCode": "360429",
      "areaName": "湖口县" },
    {
      "areaCode": "360430",
      "areaName": "彭泽县" },
    {
      "areaCode": "360481",
      "areaName": "瑞昌市" },
    {
      "areaCode": "360482",
      "areaName": "共青城市" }] },

  {
    "cityCode": "360500",
    "cityName": "新余市",
    "mallAreaList": [{
      "areaCode": "360502",
      "areaName": "渝水区" },
    {
      "areaCode": "360521",
      "areaName": "分宜县" }] },

  {
    "cityCode": "360600",
    "cityName": "鹰潭市",
    "mallAreaList": [{
      "areaCode": "360602",
      "areaName": "月湖区" },
    {
      "areaCode": "360622",
      "areaName": "余江县" },
    {
      "areaCode": "360681",
      "areaName": "贵溪市" }] },

  {
    "cityCode": "360700",
    "cityName": "赣州市",
    "mallAreaList": [{
      "areaCode": "360702",
      "areaName": "章贡区" },
    {
      "areaCode": "360703",
      "areaName": "南康区" },
    {
      "areaCode": "360721",
      "areaName": "赣县" },
    {
      "areaCode": "360722",
      "areaName": "信丰县" },
    {
      "areaCode": "360723",
      "areaName": "大余县" },
    {
      "areaCode": "360724",
      "areaName": "上犹县" },
    {
      "areaCode": "360725",
      "areaName": "崇义县" },
    {
      "areaCode": "360726",
      "areaName": "安远县" },
    {
      "areaCode": "360727",
      "areaName": "龙南县" },
    {
      "areaCode": "360728",
      "areaName": "定南县" },
    {
      "areaCode": "360729",
      "areaName": "全南县" },
    {
      "areaCode": "360730",
      "areaName": "宁都县" },
    {
      "areaCode": "360731",
      "areaName": "于都县" },
    {
      "areaCode": "360732",
      "areaName": "兴国县" },
    {
      "areaCode": "360733",
      "areaName": "会昌县" },
    {
      "areaCode": "360734",
      "areaName": "寻乌县" },
    {
      "areaCode": "360735",
      "areaName": "石城县" },
    {
      "areaCode": "360781",
      "areaName": "瑞金市" }] },

  {
    "cityCode": "360800",
    "cityName": "吉安市",
    "mallAreaList": [{
      "areaCode": "360802",
      "areaName": "吉州区" },
    {
      "areaCode": "360803",
      "areaName": "青原区" },
    {
      "areaCode": "360821",
      "areaName": "吉安县" },
    {
      "areaCode": "360822",
      "areaName": "吉水县" },
    {
      "areaCode": "360823",
      "areaName": "峡江县" },
    {
      "areaCode": "360824",
      "areaName": "新干县" },
    {
      "areaCode": "360825",
      "areaName": "永丰县" },
    {
      "areaCode": "360826",
      "areaName": "泰和县" },
    {
      "areaCode": "360827",
      "areaName": "遂川县" },
    {
      "areaCode": "360828",
      "areaName": "万安县" },
    {
      "areaCode": "360829",
      "areaName": "安福县" },
    {
      "areaCode": "360830",
      "areaName": "永新县" },
    {
      "areaCode": "360881",
      "areaName": "井冈山市" }] },

  {
    "cityCode": "360900",
    "cityName": "宜春市",
    "mallAreaList": [{
      "areaCode": "360902",
      "areaName": "袁州区" },
    {
      "areaCode": "360921",
      "areaName": "奉新县" },
    {
      "areaCode": "360922",
      "areaName": "万载县" },
    {
      "areaCode": "360923",
      "areaName": "上高县" },
    {
      "areaCode": "360924",
      "areaName": "宜丰县" },
    {
      "areaCode": "360925",
      "areaName": "靖安县" },
    {
      "areaCode": "360926",
      "areaName": "铜鼓县" },
    {
      "areaCode": "360981",
      "areaName": "丰城市" },
    {
      "areaCode": "360982",
      "areaName": "樟树市" },
    {
      "areaCode": "360983",
      "areaName": "高安市" }] },

  {
    "cityCode": "361000",
    "cityName": "抚州市",
    "mallAreaList": [{
      "areaCode": "361002",
      "areaName": "临川区" },
    {
      "areaCode": "361021",
      "areaName": "南城县" },
    {
      "areaCode": "361022",
      "areaName": "黎川县" },
    {
      "areaCode": "361023",
      "areaName": "南丰县" },
    {
      "areaCode": "361024",
      "areaName": "崇仁县" },
    {
      "areaCode": "361025",
      "areaName": "乐安县" },
    {
      "areaCode": "361026",
      "areaName": "宜黄县" },
    {
      "areaCode": "361027",
      "areaName": "金溪县" },
    {
      "areaCode": "361028",
      "areaName": "资溪县" },
    {
      "areaCode": "361029",
      "areaName": "东乡县" },
    {
      "areaCode": "361030",
      "areaName": "广昌县" }] },

  {
    "cityCode": "361100",
    "cityName": "上饶市",
    "mallAreaList": [{
      "areaCode": "361102",
      "areaName": "信州区" },
    {
      "areaCode": "361121",
      "areaName": "上饶县" },
    {
      "areaCode": "361122",
      "areaName": "广丰县" },
    {
      "areaCode": "361123",
      "areaName": "玉山县" },
    {
      "areaCode": "361124",
      "areaName": "铅山县" },
    {
      "areaCode": "361125",
      "areaName": "横峰县" },
    {
      "areaCode": "361126",
      "areaName": "弋阳县" },
    {
      "areaCode": "361127",
      "areaName": "余干县" },
    {
      "areaCode": "361128",
      "areaName": "鄱阳县" },
    {
      "areaCode": "361129",
      "areaName": "万年县" },
    {
      "areaCode": "361130",
      "areaName": "婺源县" },
    {
      "areaCode": "361181",
      "areaName": "德兴市" }] }] },


{
  "provinceCode": "370000",
  "provinceName": "山东省",
  "mallCityList": [{
    "cityCode": "370100",
    "cityName": "济南市",
    "mallAreaList": [{
      "areaCode": "370102",
      "areaName": "历下区" },
    {
      "areaCode": "370103",
      "areaName": "市中区" },
    {
      "areaCode": "370104",
      "areaName": "槐荫区" },
    {
      "areaCode": "370105",
      "areaName": "天桥区" },
    {
      "areaCode": "370112",
      "areaName": "历城区" },
    {
      "areaCode": "370113",
      "areaName": "长清区" },
    {
      "areaCode": "370124",
      "areaName": "平阴县" },
    {
      "areaCode": "370125",
      "areaName": "济阳县" },
    {
      "areaCode": "370126",
      "areaName": "商河县" },
    {
      "areaCode": "370181",
      "areaName": "章丘市" }] },

  {
    "cityCode": "370200",
    "cityName": "青岛市",
    "mallAreaList": [{
      "areaCode": "370202",
      "areaName": "市南区" },
    {
      "areaCode": "370203",
      "areaName": "市北区" },
    {
      "areaCode": "370211",
      "areaName": "黄岛区" },
    {
      "areaCode": "370212",
      "areaName": "崂山区" },
    {
      "areaCode": "370213",
      "areaName": "李沧区" },
    {
      "areaCode": "370214",
      "areaName": "城阳区" },
    {
      "areaCode": "370281",
      "areaName": "胶州市" },
    {
      "areaCode": "370282",
      "areaName": "即墨市" },
    {
      "areaCode": "370283",
      "areaName": "平度市" },
    {
      "areaCode": "370285",
      "areaName": "莱西市" }] },

  {
    "cityCode": "370300",
    "cityName": "淄博市",
    "mallAreaList": [{
      "areaCode": "370302",
      "areaName": "淄川区" },
    {
      "areaCode": "370303",
      "areaName": "张店区" },
    {
      "areaCode": "370304",
      "areaName": "博山区" },
    {
      "areaCode": "370305",
      "areaName": "临淄区" },
    {
      "areaCode": "370306",
      "areaName": "周村区" },
    {
      "areaCode": "370321",
      "areaName": "桓台县" },
    {
      "areaCode": "370322",
      "areaName": "高青县" },
    {
      "areaCode": "370323",
      "areaName": "沂源县" }] },

  {
    "cityCode": "370400",
    "cityName": "枣庄市",
    "mallAreaList": [{
      "areaCode": "370402",
      "areaName": "市中区" },
    {
      "areaCode": "370403",
      "areaName": "薛城区" },
    {
      "areaCode": "370404",
      "areaName": "峄城区" },
    {
      "areaCode": "370405",
      "areaName": "台儿庄区" },
    {
      "areaCode": "370406",
      "areaName": "山亭区" },
    {
      "areaCode": "370481",
      "areaName": "滕州市" }] },

  {
    "cityCode": "370500",
    "cityName": "东营市",
    "mallAreaList": [{
      "areaCode": "370502",
      "areaName": "东营区" },
    {
      "areaCode": "370503",
      "areaName": "河口区" },
    {
      "areaCode": "370521",
      "areaName": "垦利县" },
    {
      "areaCode": "370522",
      "areaName": "利津县" },
    {
      "areaCode": "370523",
      "areaName": "广饶县" }] },

  {
    "cityCode": "370600",
    "cityName": "烟台市",
    "mallAreaList": [{
      "areaCode": "370602",
      "areaName": "芝罘区" },
    {
      "areaCode": "370611",
      "areaName": "福山区" },
    {
      "areaCode": "370612",
      "areaName": "牟平区" },
    {
      "areaCode": "370613",
      "areaName": "莱山区" },
    {
      "areaCode": "370634",
      "areaName": "长岛县" },
    {
      "areaCode": "370681",
      "areaName": "龙口市" },
    {
      "areaCode": "370682",
      "areaName": "莱阳市" },
    {
      "areaCode": "370683",
      "areaName": "莱州市" },
    {
      "areaCode": "370684",
      "areaName": "蓬莱市" },
    {
      "areaCode": "370685",
      "areaName": "招远市" },
    {
      "areaCode": "370686",
      "areaName": "栖霞市" },
    {
      "areaCode": "370687",
      "areaName": "海阳市" }] },

  {
    "cityCode": "370700",
    "cityName": "潍坊市",
    "mallAreaList": [{
      "areaCode": "370702",
      "areaName": "潍城区" },
    {
      "areaCode": "370703",
      "areaName": "寒亭区" },
    {
      "areaCode": "370704",
      "areaName": "坊子区" },
    {
      "areaCode": "370705",
      "areaName": "奎文区" },
    {
      "areaCode": "370724",
      "areaName": "临朐县" },
    {
      "areaCode": "370725",
      "areaName": "昌乐县" },
    {
      "areaCode": "370781",
      "areaName": "青州市" },
    {
      "areaCode": "370782",
      "areaName": "诸城市" },
    {
      "areaCode": "370783",
      "areaName": "寿光市" },
    {
      "areaCode": "370784",
      "areaName": "安丘市" },
    {
      "areaCode": "370785",
      "areaName": "高密市" },
    {
      "areaCode": "370786",
      "areaName": "昌邑市" }] },

  {
    "cityCode": "370800",
    "cityName": "济宁市",
    "mallAreaList": [{
      "areaCode": "370802",
      "areaName": "市中区" },
    {
      "areaCode": "370811",
      "areaName": "任城区" },
    {
      "areaCode": "370812",
      "areaName": "兖州区" },
    {
      "areaCode": "370826",
      "areaName": "微山县" },
    {
      "areaCode": "370827",
      "areaName": "鱼台县" },
    {
      "areaCode": "370828",
      "areaName": "金乡县" },
    {
      "areaCode": "370829",
      "areaName": "嘉祥县" },
    {
      "areaCode": "370830",
      "areaName": "汶上县" },
    {
      "areaCode": "370831",
      "areaName": "泗水县" },
    {
      "areaCode": "370832",
      "areaName": "梁山县" },
    {
      "areaCode": "370881",
      "areaName": "曲阜市" },
    {
      "areaCode": "370883",
      "areaName": "邹城市" }] },

  {
    "cityCode": "370900",
    "cityName": "泰安市",
    "mallAreaList": [{
      "areaCode": "370902",
      "areaName": "泰山区" },
    {
      "areaCode": "370911",
      "areaName": "岱岳区" },
    {
      "areaCode": "370921",
      "areaName": "宁阳县" },
    {
      "areaCode": "370923",
      "areaName": "东平县" },
    {
      "areaCode": "370982",
      "areaName": "新泰市" },
    {
      "areaCode": "370983",
      "areaName": "肥城市" }] },

  {
    "cityCode": "371000",
    "cityName": "威海市",
    "mallAreaList": [{
      "areaCode": "371002",
      "areaName": "环翠区" },
    {
      "areaCode": "371003",
      "areaName": "文登区" },
    {
      "areaCode": "371082",
      "areaName": "荣成市" },
    {
      "areaCode": "371083",
      "areaName": "乳山市" }] },

  {
    "cityCode": "371100",
    "cityName": "日照市",
    "mallAreaList": [{
      "areaCode": "371102",
      "areaName": "东港区" },
    {
      "areaCode": "371103",
      "areaName": "岚山区" },
    {
      "areaCode": "371121",
      "areaName": "五莲县" },
    {
      "areaCode": "371122",
      "areaName": "莒县" }] },

  {
    "cityCode": "371200",
    "cityName": "莱芜市",
    "mallAreaList": [{
      "areaCode": "371202",
      "areaName": "莱城区" },
    {
      "areaCode": "371203",
      "areaName": "钢城区" }] },

  {
    "cityCode": "371300",
    "cityName": "临沂市",
    "mallAreaList": [{
      "areaCode": "371302",
      "areaName": "兰山区" },
    {
      "areaCode": "371311",
      "areaName": "罗庄区" },
    {
      "areaCode": "371312",
      "areaName": "河东区" },
    {
      "areaCode": "371321",
      "areaName": "沂南县" },
    {
      "areaCode": "371322",
      "areaName": "郯城县" },
    {
      "areaCode": "371323",
      "areaName": "沂水县" },
    {
      "areaCode": "371324",
      "areaName": "兰陵县" },
    {
      "areaCode": "371325",
      "areaName": "费县" },
    {
      "areaCode": "371326",
      "areaName": "平邑县" },
    {
      "areaCode": "371327",
      "areaName": "莒南县" },
    {
      "areaCode": "371328",
      "areaName": "蒙阴县" },
    {
      "areaCode": "371329",
      "areaName": "临沭县" }] },

  {
    "cityCode": "371400",
    "cityName": "德州市",
    "mallAreaList": [{
      "areaCode": "371402",
      "areaName": "德城区" },
    {
      "areaCode": "371403",
      "areaName": "陵城区" },
    {
      "areaCode": "371422",
      "areaName": "宁津县" },
    {
      "areaCode": "371423",
      "areaName": "庆云县" },
    {
      "areaCode": "371424",
      "areaName": "临邑县" },
    {
      "areaCode": "371425",
      "areaName": "齐河县" },
    {
      "areaCode": "371426",
      "areaName": "平原县" },
    {
      "areaCode": "371427",
      "areaName": "夏津县" },
    {
      "areaCode": "371428",
      "areaName": "武城县" },
    {
      "areaCode": "371481",
      "areaName": "乐陵市" },
    {
      "areaCode": "371482",
      "areaName": "禹城市" }] },

  {
    "cityCode": "371500",
    "cityName": "聊城市",
    "mallAreaList": [{
      "areaCode": "371502",
      "areaName": "东昌府区" },
    {
      "areaCode": "371521",
      "areaName": "阳谷县" },
    {
      "areaCode": "371522",
      "areaName": "莘县" },
    {
      "areaCode": "371523",
      "areaName": "茌平县" },
    {
      "areaCode": "371524",
      "areaName": "东阿县" },
    {
      "areaCode": "371525",
      "areaName": "冠县" },
    {
      "areaCode": "371526",
      "areaName": "高唐县" },
    {
      "areaCode": "371581",
      "areaName": "临清市" }] },

  {
    "cityCode": "371600",
    "cityName": "滨州市",
    "mallAreaList": [{
      "areaCode": "371602",
      "areaName": "滨城区" },
    {
      "areaCode": "371603",
      "areaName": "沾化区" },
    {
      "areaCode": "371621",
      "areaName": "惠民县" },
    {
      "areaCode": "371622",
      "areaName": "阳信县" },
    {
      "areaCode": "371623",
      "areaName": "无棣县" },
    {
      "areaCode": "371625",
      "areaName": "博兴县" },
    {
      "areaCode": "371626",
      "areaName": "邹平县" }] },

  {
    "cityCode": "371700",
    "cityName": "菏泽市",
    "mallAreaList": [{
      "areaCode": "371702",
      "areaName": "牡丹区" },
    {
      "areaCode": "371721",
      "areaName": "曹县" },
    {
      "areaCode": "371722",
      "areaName": "单县" },
    {
      "areaCode": "371723",
      "areaName": "成武县" },
    {
      "areaCode": "371724",
      "areaName": "巨野县" },
    {
      "areaCode": "371725",
      "areaName": "郓城县" },
    {
      "areaCode": "371726",
      "areaName": "鄄城县" },
    {
      "areaCode": "371727",
      "areaName": "定陶县" },
    {
      "areaCode": "371728",
      "areaName": "东明县" }] }] },


{
  "provinceCode": "410000",
  "provinceName": "河南省",
  "mallCityList": [{
    "cityCode": "410100",
    "cityName": "郑州市",
    "mallAreaList": [{
      "areaCode": "410102",
      "areaName": "中原区" },
    {
      "areaCode": "410103",
      "areaName": "二七区" },
    {
      "areaCode": "410104",
      "areaName": "管城回族区" },
    {
      "areaCode": "410105",
      "areaName": "金水区" },
    {
      "areaCode": "410106",
      "areaName": "上街区" },
    {
      "areaCode": "410108",
      "areaName": "惠济区" },
    {
      "areaCode": "410122",
      "areaName": "中牟县" },
    {
      "areaCode": "410181",
      "areaName": "巩义市" },
    {
      "areaCode": "410182",
      "areaName": "荥阳市" },
    {
      "areaCode": "410183",
      "areaName": "新密市" },
    {
      "areaCode": "410184",
      "areaName": "新郑市" },
    {
      "areaCode": "410185",
      "areaName": "登封市" }] },

  {
    "cityCode": "410200",
    "cityName": "开封市",
    "mallAreaList": [{
      "areaCode": "410202",
      "areaName": "龙亭区" },
    {
      "areaCode": "410203",
      "areaName": "顺河回族区" },
    {
      "areaCode": "410204",
      "areaName": "鼓楼区" },
    {
      "areaCode": "410205",
      "areaName": "禹王台区" },
    {
      "areaCode": "410211",
      "areaName": "金明区" },
    {
      "areaCode": "410221",
      "areaName": "杞县" },
    {
      "areaCode": "410222",
      "areaName": "通许县" },
    {
      "areaCode": "410223",
      "areaName": "尉氏县" },
    {
      "areaCode": "410224",
      "areaName": "开封县" },
    {
      "areaCode": "410225",
      "areaName": "兰考县" }] },

  {
    "cityCode": "410300",
    "cityName": "洛阳市",
    "mallAreaList": [{
      "areaCode": "410302",
      "areaName": "老城区" },
    {
      "areaCode": "410303",
      "areaName": "西工区" },
    {
      "areaCode": "410304",
      "areaName": "瀍河回族区" },
    {
      "areaCode": "410305",
      "areaName": "涧西区" },
    {
      "areaCode": "410306",
      "areaName": "吉利区" },
    {
      "areaCode": "410311",
      "areaName": "洛龙区" },
    {
      "areaCode": "410322",
      "areaName": "孟津县" },
    {
      "areaCode": "410323",
      "areaName": "新安县" },
    {
      "areaCode": "410324",
      "areaName": "栾川县" },
    {
      "areaCode": "410325",
      "areaName": "嵩县" },
    {
      "areaCode": "410326",
      "areaName": "汝阳县" },
    {
      "areaCode": "410327",
      "areaName": "宜阳县" },
    {
      "areaCode": "410328",
      "areaName": "洛宁县" },
    {
      "areaCode": "410329",
      "areaName": "伊川县" },
    {
      "areaCode": "410381",
      "areaName": "偃师市" }] },

  {
    "cityCode": "410400",
    "cityName": "平顶山市",
    "mallAreaList": [{
      "areaCode": "410402",
      "areaName": "新华区" },
    {
      "areaCode": "410403",
      "areaName": "卫东区" },
    {
      "areaCode": "410404",
      "areaName": "石龙区" },
    {
      "areaCode": "410411",
      "areaName": "湛河区" },
    {
      "areaCode": "410421",
      "areaName": "宝丰县" },
    {
      "areaCode": "410422",
      "areaName": "叶县" },
    {
      "areaCode": "410423",
      "areaName": "鲁山县" },
    {
      "areaCode": "410425",
      "areaName": "郏县" },
    {
      "areaCode": "410481",
      "areaName": "舞钢市" },
    {
      "areaCode": "410482",
      "areaName": "汝州市" }] },

  {
    "cityCode": "410500",
    "cityName": "安阳市",
    "mallAreaList": [{
      "areaCode": "410502",
      "areaName": "文峰区" },
    {
      "areaCode": "410503",
      "areaName": "北关区" },
    {
      "areaCode": "410505",
      "areaName": "殷都区" },
    {
      "areaCode": "410506",
      "areaName": "龙安区" },
    {
      "areaCode": "410522",
      "areaName": "安阳县" },
    {
      "areaCode": "410523",
      "areaName": "汤阴县" },
    {
      "areaCode": "410526",
      "areaName": "滑县" },
    {
      "areaCode": "410527",
      "areaName": "内黄县" },
    {
      "areaCode": "410581",
      "areaName": "林州市" }] },

  {
    "cityCode": "410600",
    "cityName": "鹤壁市",
    "mallAreaList": [{
      "areaCode": "410602",
      "areaName": "鹤山区" },
    {
      "areaCode": "410603",
      "areaName": "山城区" },
    {
      "areaCode": "410611",
      "areaName": "淇滨区" },
    {
      "areaCode": "410621",
      "areaName": "浚县" },
    {
      "areaCode": "410622",
      "areaName": "淇县" }] },

  {
    "cityCode": "410700",
    "cityName": "新乡市",
    "mallAreaList": [{
      "areaCode": "410702",
      "areaName": "红旗区" },
    {
      "areaCode": "410703",
      "areaName": "卫滨区" },
    {
      "areaCode": "410704",
      "areaName": "凤泉区" },
    {
      "areaCode": "410711",
      "areaName": "牧野区" },
    {
      "areaCode": "410721",
      "areaName": "新乡县" },
    {
      "areaCode": "410724",
      "areaName": "获嘉县" },
    {
      "areaCode": "410725",
      "areaName": "原阳县" },
    {
      "areaCode": "410726",
      "areaName": "延津县" },
    {
      "areaCode": "410727",
      "areaName": "封丘县" },
    {
      "areaCode": "410728",
      "areaName": "长垣县" },
    {
      "areaCode": "410781",
      "areaName": "卫辉市" },
    {
      "areaCode": "410782",
      "areaName": "辉县市" }] },

  {
    "cityCode": "410800",
    "cityName": "焦作市",
    "mallAreaList": [{
      "areaCode": "410802",
      "areaName": "解放区" },
    {
      "areaCode": "410803",
      "areaName": "中站区" },
    {
      "areaCode": "410804",
      "areaName": "马村区" },
    {
      "areaCode": "410811",
      "areaName": "山阳区" },
    {
      "areaCode": "410821",
      "areaName": "修武县" },
    {
      "areaCode": "410822",
      "areaName": "博爱县" },
    {
      "areaCode": "410823",
      "areaName": "武陟县" },
    {
      "areaCode": "410825",
      "areaName": "温县" },
    {
      "areaCode": "410882",
      "areaName": "沁阳市" },
    {
      "areaCode": "410883",
      "areaName": "孟州市" }] },

  {
    "cityCode": "410900",
    "cityName": "濮阳市",
    "mallAreaList": [{
      "areaCode": "410902",
      "areaName": "华龙区" },
    {
      "areaCode": "410922",
      "areaName": "清丰县" },
    {
      "areaCode": "410923",
      "areaName": "南乐县" },
    {
      "areaCode": "410926",
      "areaName": "范县" },
    {
      "areaCode": "410927",
      "areaName": "台前县" },
    {
      "areaCode": "410928",
      "areaName": "濮阳县" }] },

  {
    "cityCode": "411000",
    "cityName": "许昌市",
    "mallAreaList": [{
      "areaCode": "411002",
      "areaName": "魏都区" },
    {
      "areaCode": "411023",
      "areaName": "许昌县" },
    {
      "areaCode": "411024",
      "areaName": "鄢陵县" },
    {
      "areaCode": "411025",
      "areaName": "襄城县" },
    {
      "areaCode": "411081",
      "areaName": "禹州市" },
    {
      "areaCode": "411082",
      "areaName": "长葛市" }] },

  {
    "cityCode": "411100",
    "cityName": "漯河市",
    "mallAreaList": [{
      "areaCode": "411102",
      "areaName": "源汇区" },
    {
      "areaCode": "411103",
      "areaName": "郾城区" },
    {
      "areaCode": "411104",
      "areaName": "召陵区" },
    {
      "areaCode": "411121",
      "areaName": "舞阳县" },
    {
      "areaCode": "411122",
      "areaName": "临颍县" }] },

  {
    "cityCode": "411200",
    "cityName": "三门峡市",
    "mallAreaList": [{
      "areaCode": "411202",
      "areaName": "湖滨区" },
    {
      "areaCode": "411221",
      "areaName": "渑池县" },
    {
      "areaCode": "411222",
      "areaName": "陕县" },
    {
      "areaCode": "411224",
      "areaName": "卢氏县" },
    {
      "areaCode": "411281",
      "areaName": "义马市" },
    {
      "areaCode": "411282",
      "areaName": "灵宝市" }] },

  {
    "cityCode": "411300",
    "cityName": "南阳市",
    "mallAreaList": [{
      "areaCode": "411302",
      "areaName": "宛城区" },
    {
      "areaCode": "411303",
      "areaName": "卧龙区" },
    {
      "areaCode": "411321",
      "areaName": "南召县" },
    {
      "areaCode": "411322",
      "areaName": "方城县" },
    {
      "areaCode": "411323",
      "areaName": "西峡县" },
    {
      "areaCode": "411324",
      "areaName": "镇平县" },
    {
      "areaCode": "411325",
      "areaName": "内乡县" },
    {
      "areaCode": "411326",
      "areaName": "淅川县" },
    {
      "areaCode": "411327",
      "areaName": "社旗县" },
    {
      "areaCode": "411328",
      "areaName": "唐河县" },
    {
      "areaCode": "411329",
      "areaName": "新野县" },
    {
      "areaCode": "411330",
      "areaName": "桐柏县" },
    {
      "areaCode": "411381",
      "areaName": "邓州市" }] },

  {
    "cityCode": "411400",
    "cityName": "商丘市",
    "mallAreaList": [{
      "areaCode": "411402",
      "areaName": "梁园区" },
    {
      "areaCode": "411403",
      "areaName": "睢阳区" },
    {
      "areaCode": "411421",
      "areaName": "民权县" },
    {
      "areaCode": "411422",
      "areaName": "睢县" },
    {
      "areaCode": "411423",
      "areaName": "宁陵县" },
    {
      "areaCode": "411424",
      "areaName": "柘城县" },
    {
      "areaCode": "411425",
      "areaName": "虞城县" },
    {
      "areaCode": "411426",
      "areaName": "夏邑县" },
    {
      "areaCode": "411481",
      "areaName": "永城市" }] },

  {
    "cityCode": "411500",
    "cityName": "信阳市",
    "mallAreaList": [{
      "areaCode": "411502",
      "areaName": "浉河区" },
    {
      "areaCode": "411503",
      "areaName": "平桥区" },
    {
      "areaCode": "411521",
      "areaName": "罗山县" },
    {
      "areaCode": "411522",
      "areaName": "光山县" },
    {
      "areaCode": "411523",
      "areaName": "新县" },
    {
      "areaCode": "411524",
      "areaName": "商城县" },
    {
      "areaCode": "411525",
      "areaName": "固始县" },
    {
      "areaCode": "411526",
      "areaName": "潢川县" },
    {
      "areaCode": "411527",
      "areaName": "淮滨县" },
    {
      "areaCode": "411528",
      "areaName": "息县" }] },

  {
    "cityCode": "411600",
    "cityName": "周口市",
    "mallAreaList": [{
      "areaCode": "411602",
      "areaName": "川汇区" },
    {
      "areaCode": "411621",
      "areaName": "扶沟县" },
    {
      "areaCode": "411622",
      "areaName": "西华县" },
    {
      "areaCode": "411623",
      "areaName": "商水县" },
    {
      "areaCode": "411624",
      "areaName": "沈丘县" },
    {
      "areaCode": "411625",
      "areaName": "郸城县" },
    {
      "areaCode": "411626",
      "areaName": "淮阳县" },
    {
      "areaCode": "411627",
      "areaName": "太康县" },
    {
      "areaCode": "411628",
      "areaName": "鹿邑县" },
    {
      "areaCode": "411681",
      "areaName": "项城市" }] },

  {
    "cityCode": "411700",
    "cityName": "驻马店市",
    "mallAreaList": [{
      "areaCode": "411702",
      "areaName": "驿城区" },
    {
      "areaCode": "411721",
      "areaName": "西平县" },
    {
      "areaCode": "411722",
      "areaName": "上蔡县" },
    {
      "areaCode": "411723",
      "areaName": "平舆县" },
    {
      "areaCode": "411724",
      "areaName": "正阳县" },
    {
      "areaCode": "411725",
      "areaName": "确山县" },
    {
      "areaCode": "411726",
      "areaName": "泌阳县" },
    {
      "areaCode": "411727",
      "areaName": "汝南县" },
    {
      "areaCode": "411728",
      "areaName": "遂平县" },
    {
      "areaCode": "411729",
      "areaName": "新蔡县" }] },

  {
    "cityCode": "419000",
    "cityName": "河南省直辖县级行政区划",
    "mallAreaList": [{
      "areaCode": "419001",
      "areaName": "济源市" }] }] },


{
  "provinceCode": "420000",
  "provinceName": "湖北省",
  "mallCityList": [{
    "cityCode": "420100",
    "cityName": "武汉市",
    "mallAreaList": [{
      "areaCode": "420102",
      "areaName": "江岸区" },
    {
      "areaCode": "420103",
      "areaName": "江汉区" },
    {
      "areaCode": "420104",
      "areaName": "硚口区" },
    {
      "areaCode": "420105",
      "areaName": "汉阳区" },
    {
      "areaCode": "420106",
      "areaName": "武昌区" },
    {
      "areaCode": "420107",
      "areaName": "青山区" },
    {
      "areaCode": "420111",
      "areaName": "洪山区" },
    {
      "areaCode": "420112",
      "areaName": "东西湖区" },
    {
      "areaCode": "420113",
      "areaName": "汉南区" },
    {
      "areaCode": "420114",
      "areaName": "蔡甸区" },
    {
      "areaCode": "420115",
      "areaName": "江夏区" },
    {
      "areaCode": "420116",
      "areaName": "黄陂区" },
    {
      "areaCode": "420117",
      "areaName": "新洲区" }] },

  {
    "cityCode": "420200",
    "cityName": "黄石市",
    "mallAreaList": [{
      "areaCode": "420202",
      "areaName": "黄石港区" },
    {
      "areaCode": "420203",
      "areaName": "西塞山区" },
    {
      "areaCode": "420204",
      "areaName": "下陆区" },
    {
      "areaCode": "420205",
      "areaName": "铁山区" },
    {
      "areaCode": "420222",
      "areaName": "阳新县" },
    {
      "areaCode": "420281",
      "areaName": "大冶市" }] },

  {
    "cityCode": "420300",
    "cityName": "十堰市",
    "mallAreaList": [{
      "areaCode": "420302",
      "areaName": "茅箭区" },
    {
      "areaCode": "420303",
      "areaName": "张湾区" },
    {
      "areaCode": "420304",
      "areaName": "郧阳区" },
    {
      "areaCode": "420322",
      "areaName": "郧西县" },
    {
      "areaCode": "420323",
      "areaName": "竹山县" },
    {
      "areaCode": "420324",
      "areaName": "竹溪县" },
    {
      "areaCode": "420325",
      "areaName": "房县" },
    {
      "areaCode": "420381",
      "areaName": "丹江口市" }] },

  {
    "cityCode": "420500",
    "cityName": "宜昌市",
    "mallAreaList": [{
      "areaCode": "420502",
      "areaName": "西陵区" },
    {
      "areaCode": "420503",
      "areaName": "伍家岗区" },
    {
      "areaCode": "420504",
      "areaName": "点军区" },
    {
      "areaCode": "420505",
      "areaName": "猇亭区" },
    {
      "areaCode": "420506",
      "areaName": "夷陵区" },
    {
      "areaCode": "420525",
      "areaName": "远安县" },
    {
      "areaCode": "420526",
      "areaName": "兴山县" },
    {
      "areaCode": "420527",
      "areaName": "秭归县" },
    {
      "areaCode": "420528",
      "areaName": "长阳土家族自治县" },
    {
      "areaCode": "420529",
      "areaName": "五峰土家族自治县" },
    {
      "areaCode": "420581",
      "areaName": "宜都市" },
    {
      "areaCode": "420582",
      "areaName": "当阳市" },
    {
      "areaCode": "420583",
      "areaName": "枝江市" }] },

  {
    "cityCode": "420600",
    "cityName": "襄樊市",
    "mallAreaList": [{
      "areaCode": "420602",
      "areaName": "襄城区" },
    {
      "areaCode": "420606",
      "areaName": "樊城区" },
    {
      "areaCode": "420607",
      "areaName": "襄州区" },
    {
      "areaCode": "420624",
      "areaName": "南漳县" },
    {
      "areaCode": "420625",
      "areaName": "谷城县" },
    {
      "areaCode": "420626",
      "areaName": "保康县" },
    {
      "areaCode": "420682",
      "areaName": "老河口市" },
    {
      "areaCode": "420683",
      "areaName": "枣阳市" },
    {
      "areaCode": "420684",
      "areaName": "宜城市" }] },

  {
    "cityCode": "420700",
    "cityName": "鄂州市",
    "mallAreaList": [{
      "areaCode": "420702",
      "areaName": "梁子湖区" },
    {
      "areaCode": "420703",
      "areaName": "华容区" },
    {
      "areaCode": "420704",
      "areaName": "鄂城区" }] },

  {
    "cityCode": "420800",
    "cityName": "荆门市",
    "mallAreaList": [{
      "areaCode": "420802",
      "areaName": "东宝区" },
    {
      "areaCode": "420804",
      "areaName": "掇刀区" },
    {
      "areaCode": "420821",
      "areaName": "京山县" },
    {
      "areaCode": "420822",
      "areaName": "沙洋县" },
    {
      "areaCode": "420881",
      "areaName": "钟祥市" }] },

  {
    "cityCode": "420900",
    "cityName": "孝感市",
    "mallAreaList": [{
      "areaCode": "420902",
      "areaName": "孝南区" },
    {
      "areaCode": "420921",
      "areaName": "孝昌县" },
    {
      "areaCode": "420922",
      "areaName": "大悟县" },
    {
      "areaCode": "420923",
      "areaName": "云梦县" },
    {
      "areaCode": "420981",
      "areaName": "应城市" },
    {
      "areaCode": "420982",
      "areaName": "安陆市" },
    {
      "areaCode": "420984",
      "areaName": "汉川市" }] },

  {
    "cityCode": "421000",
    "cityName": "荆州市",
    "mallAreaList": [{
      "areaCode": "421002",
      "areaName": "沙市区" },
    {
      "areaCode": "421003",
      "areaName": "荆州区" },
    {
      "areaCode": "421022",
      "areaName": "公安县" },
    {
      "areaCode": "421023",
      "areaName": "监利县" },
    {
      "areaCode": "421024",
      "areaName": "江陵县" },
    {
      "areaCode": "421081",
      "areaName": "石首市" },
    {
      "areaCode": "421083",
      "areaName": "洪湖市" },
    {
      "areaCode": "421087",
      "areaName": "松滋市" }] },

  {
    "cityCode": "421100",
    "cityName": "黄冈市",
    "mallAreaList": [{
      "areaCode": "421102",
      "areaName": "黄州区" },
    {
      "areaCode": "421121",
      "areaName": "团风县" },
    {
      "areaCode": "421122",
      "areaName": "红安县" },
    {
      "areaCode": "421123",
      "areaName": "罗田县" },
    {
      "areaCode": "421124",
      "areaName": "英山县" },
    {
      "areaCode": "421125",
      "areaName": "浠水县" },
    {
      "areaCode": "421126",
      "areaName": "蕲春县" },
    {
      "areaCode": "421127",
      "areaName": "黄梅县" },
    {
      "areaCode": "421181",
      "areaName": "麻城市" },
    {
      "areaCode": "421182",
      "areaName": "武穴市" }] },

  {
    "cityCode": "421200",
    "cityName": "咸宁市",
    "mallAreaList": [{
      "areaCode": "421202",
      "areaName": "咸安区" },
    {
      "areaCode": "421221",
      "areaName": "嘉鱼县" },
    {
      "areaCode": "421222",
      "areaName": "通城县" },
    {
      "areaCode": "421223",
      "areaName": "崇阳县" },
    {
      "areaCode": "421224",
      "areaName": "通山县" },
    {
      "areaCode": "421281",
      "areaName": "赤壁市" }] },

  {
    "cityCode": "421300",
    "cityName": "随州市",
    "mallAreaList": [{
      "areaCode": "421303",
      "areaName": "曾都区" },
    {
      "areaCode": "421321",
      "areaName": "随县" },
    {
      "areaCode": "421381",
      "areaName": "广水市" }] },

  {
    "cityCode": "422800",
    "cityName": "恩施土家族苗族自治州",
    "mallAreaList": [{
      "areaCode": "422801",
      "areaName": "恩施市" },
    {
      "areaCode": "422802",
      "areaName": "利川市" },
    {
      "areaCode": "422822",
      "areaName": "建始县" },
    {
      "areaCode": "422823",
      "areaName": "巴东县" },
    {
      "areaCode": "422825",
      "areaName": "宣恩县" },
    {
      "areaCode": "422826",
      "areaName": "咸丰县" },
    {
      "areaCode": "422827",
      "areaName": "来凤县" },
    {
      "areaCode": "422828",
      "areaName": "鹤峰县" }] },

  {
    "cityCode": "429000",
    "cityName": "省直辖行政单位",
    "mallAreaList": [{
      "areaCode": "429004",
      "areaName": "仙桃市" },
    {
      "areaCode": "429005",
      "areaName": "潜江市" },
    {
      "areaCode": "429006",
      "areaName": "天门市" },
    {
      "areaCode": "429021",
      "areaName": "神农架林区" }] }] },


{
  "provinceCode": "430000",
  "provinceName": "湖南省",
  "mallCityList": [{
    "cityCode": "430100",
    "cityName": "长沙市",
    "mallAreaList": [{
      "areaCode": "430102",
      "areaName": "芙蓉区" },
    {
      "areaCode": "430103",
      "areaName": "天心区" },
    {
      "areaCode": "430104",
      "areaName": "岳麓区" },
    {
      "areaCode": "430105",
      "areaName": "开福区" },
    {
      "areaCode": "430111",
      "areaName": "雨花区" },
    {
      "areaCode": "430112",
      "areaName": "望城区" },
    {
      "areaCode": "430121",
      "areaName": "长沙县" },
    {
      "areaCode": "430124",
      "areaName": "宁乡县" },
    {
      "areaCode": "430181",
      "areaName": "浏阳市" }] },

  {
    "cityCode": "430200",
    "cityName": "株洲市",
    "mallAreaList": [{
      "areaCode": "430202",
      "areaName": "荷塘区" },
    {
      "areaCode": "430203",
      "areaName": "芦淞区" },
    {
      "areaCode": "430204",
      "areaName": "石峰区" },
    {
      "areaCode": "430211",
      "areaName": "天元区" },
    {
      "areaCode": "430221",
      "areaName": "株洲县" },
    {
      "areaCode": "430223",
      "areaName": "攸县" },
    {
      "areaCode": "430224",
      "areaName": "茶陵县" },
    {
      "areaCode": "430225",
      "areaName": "炎陵县" },
    {
      "areaCode": "430281",
      "areaName": "醴陵市" }] },

  {
    "cityCode": "430300",
    "cityName": "湘潭市",
    "mallAreaList": [{
      "areaCode": "430302",
      "areaName": "雨湖区" },
    {
      "areaCode": "430304",
      "areaName": "岳塘区" },
    {
      "areaCode": "430321",
      "areaName": "湘潭县" },
    {
      "areaCode": "430381",
      "areaName": "湘乡市" },
    {
      "areaCode": "430382",
      "areaName": "韶山市" }] },

  {
    "cityCode": "430400",
    "cityName": "衡阳市",
    "mallAreaList": [{
      "areaCode": "430405",
      "areaName": "珠晖区" },
    {
      "areaCode": "430406",
      "areaName": "雁峰区" },
    {
      "areaCode": "430407",
      "areaName": "石鼓区" },
    {
      "areaCode": "430408",
      "areaName": "蒸湘区" },
    {
      "areaCode": "430412",
      "areaName": "南岳区" },
    {
      "areaCode": "430421",
      "areaName": "衡阳县" },
    {
      "areaCode": "430422",
      "areaName": "衡南县" },
    {
      "areaCode": "430423",
      "areaName": "衡山县" },
    {
      "areaCode": "430424",
      "areaName": "衡东县" },
    {
      "areaCode": "430426",
      "areaName": "祁东县" },
    {
      "areaCode": "430481",
      "areaName": "耒阳市" },
    {
      "areaCode": "430482",
      "areaName": "常宁市" }] },

  {
    "cityCode": "430500",
    "cityName": "邵阳市",
    "mallAreaList": [{
      "areaCode": "430502",
      "areaName": "双清区" },
    {
      "areaCode": "430503",
      "areaName": "大祥区" },
    {
      "areaCode": "430511",
      "areaName": "北塔区" },
    {
      "areaCode": "430521",
      "areaName": "邵东县" },
    {
      "areaCode": "430522",
      "areaName": "新邵县" },
    {
      "areaCode": "430523",
      "areaName": "邵阳县" },
    {
      "areaCode": "430524",
      "areaName": "隆回县" },
    {
      "areaCode": "430525",
      "areaName": "洞口县" },
    {
      "areaCode": "430527",
      "areaName": "绥宁县" },
    {
      "areaCode": "430528",
      "areaName": "新宁县" },
    {
      "areaCode": "430529",
      "areaName": "城步苗族自治县" },
    {
      "areaCode": "430581",
      "areaName": "武冈市" }] },

  {
    "cityCode": "430600",
    "cityName": "岳阳市",
    "mallAreaList": [{
      "areaCode": "430602",
      "areaName": "岳阳楼区" },
    {
      "areaCode": "430603",
      "areaName": "云溪区" },
    {
      "areaCode": "430611",
      "areaName": "君山区" },
    {
      "areaCode": "430621",
      "areaName": "岳阳县" },
    {
      "areaCode": "430623",
      "areaName": "华容县" },
    {
      "areaCode": "430624",
      "areaName": "湘阴县" },
    {
      "areaCode": "430626",
      "areaName": "平江县" },
    {
      "areaCode": "430681",
      "areaName": "汨罗市" },
    {
      "areaCode": "430682",
      "areaName": "临湘市" }] },

  {
    "cityCode": "430700",
    "cityName": "常德市",
    "mallAreaList": [{
      "areaCode": "430702",
      "areaName": "武陵区" },
    {
      "areaCode": "430703",
      "areaName": "鼎城区" },
    {
      "areaCode": "430721",
      "areaName": "安乡县" },
    {
      "areaCode": "430722",
      "areaName": "汉寿县" },
    {
      "areaCode": "430723",
      "areaName": "澧县" },
    {
      "areaCode": "430724",
      "areaName": "临澧县" },
    {
      "areaCode": "430725",
      "areaName": "桃源县" },
    {
      "areaCode": "430726",
      "areaName": "石门县" },
    {
      "areaCode": "430781",
      "areaName": "津市市" }] },

  {
    "cityCode": "430800",
    "cityName": "张家界市",
    "mallAreaList": [{
      "areaCode": "430802",
      "areaName": "永定区" },
    {
      "areaCode": "430811",
      "areaName": "武陵源区" },
    {
      "areaCode": "430821",
      "areaName": "慈利县" },
    {
      "areaCode": "430822",
      "areaName": "桑植县" }] },

  {
    "cityCode": "430900",
    "cityName": "益阳市",
    "mallAreaList": [{
      "areaCode": "430902",
      "areaName": "资阳区" },
    {
      "areaCode": "430903",
      "areaName": "赫山区" },
    {
      "areaCode": "430921",
      "areaName": "南县" },
    {
      "areaCode": "430922",
      "areaName": "桃江县" },
    {
      "areaCode": "430923",
      "areaName": "安化县" },
    {
      "areaCode": "430981",
      "areaName": "沅江市" }] },

  {
    "cityCode": "431000",
    "cityName": "郴州市",
    "mallAreaList": [{
      "areaCode": "431002",
      "areaName": "北湖区" },
    {
      "areaCode": "431003",
      "areaName": "苏仙区" },
    {
      "areaCode": "431021",
      "areaName": "桂阳县" },
    {
      "areaCode": "431022",
      "areaName": "宜章县" },
    {
      "areaCode": "431023",
      "areaName": "永兴县" },
    {
      "areaCode": "431024",
      "areaName": "嘉禾县" },
    {
      "areaCode": "431025",
      "areaName": "临武县" },
    {
      "areaCode": "431026",
      "areaName": "汝城县" },
    {
      "areaCode": "431027",
      "areaName": "桂东县" },
    {
      "areaCode": "431028",
      "areaName": "安仁县" },
    {
      "areaCode": "431081",
      "areaName": "资兴市" }] },

  {
    "cityCode": "431100",
    "cityName": "永州市",
    "mallAreaList": [{
      "areaCode": "431102",
      "areaName": "零陵区" },
    {
      "areaCode": "431103",
      "areaName": "冷水滩区" },
    {
      "areaCode": "431121",
      "areaName": "祁阳县" },
    {
      "areaCode": "431122",
      "areaName": "东安县" },
    {
      "areaCode": "431123",
      "areaName": "双牌县" },
    {
      "areaCode": "431124",
      "areaName": "道县" },
    {
      "areaCode": "431125",
      "areaName": "江永县" },
    {
      "areaCode": "431126",
      "areaName": "宁远县" },
    {
      "areaCode": "431127",
      "areaName": "蓝山县" },
    {
      "areaCode": "431128",
      "areaName": "新田县" },
    {
      "areaCode": "431129",
      "areaName": "江华瑶族自治县" }] },

  {
    "cityCode": "431200",
    "cityName": "怀化市",
    "mallAreaList": [{
      "areaCode": "431202",
      "areaName": "鹤城区" },
    {
      "areaCode": "431221",
      "areaName": "中方县" },
    {
      "areaCode": "431222",
      "areaName": "沅陵县" },
    {
      "areaCode": "431223",
      "areaName": "辰溪县" },
    {
      "areaCode": "431224",
      "areaName": "溆浦县" },
    {
      "areaCode": "431225",
      "areaName": "会同县" },
    {
      "areaCode": "431226",
      "areaName": "麻阳苗族自治县" },
    {
      "areaCode": "431227",
      "areaName": "新晃侗族自治县" },
    {
      "areaCode": "431228",
      "areaName": "芷江侗族自治县" },
    {
      "areaCode": "431229",
      "areaName": "靖州苗族侗族自治县" },
    {
      "areaCode": "431230",
      "areaName": "通道侗族自治县" },
    {
      "areaCode": "431281",
      "areaName": "洪江市" }] },

  {
    "cityCode": "431300",
    "cityName": "娄底市",
    "mallAreaList": [{
      "areaCode": "431302",
      "areaName": "娄星区" },
    {
      "areaCode": "431321",
      "areaName": "双峰县" },
    {
      "areaCode": "431322",
      "areaName": "新化县" },
    {
      "areaCode": "431381",
      "areaName": "冷水江市" },
    {
      "areaCode": "431382",
      "areaName": "涟源市" }] },

  {
    "cityCode": "433100",
    "cityName": "湘西土家族苗族自治州",
    "mallAreaList": [{
      "areaCode": "433101",
      "areaName": "吉首市" },
    {
      "areaCode": "433122",
      "areaName": "泸溪县" },
    {
      "areaCode": "433123",
      "areaName": "凤凰县" },
    {
      "areaCode": "433124",
      "areaName": "花垣县" },
    {
      "areaCode": "433125",
      "areaName": "保靖县" },
    {
      "areaCode": "433126",
      "areaName": "古丈县" },
    {
      "areaCode": "433127",
      "areaName": "永顺县" },
    {
      "areaCode": "433130",
      "areaName": "龙山县" }] }] },


{
  "provinceCode": "440000",
  "provinceName": "广东省",
  "mallCityList": [{
    "cityCode": "440100",
    "cityName": "广州市",
    "mallAreaList": [{
      "areaCode": "440103",
      "areaName": "荔湾区" },
    {
      "areaCode": "440104",
      "areaName": "越秀区" },
    {
      "areaCode": "440105",
      "areaName": "海珠区" },
    {
      "areaCode": "440106",
      "areaName": "天河区" },
    {
      "areaCode": "440111",
      "areaName": "白云区" },
    {
      "areaCode": "440112",
      "areaName": "黄埔区" },
    {
      "areaCode": "440113",
      "areaName": "番禺区" },
    {
      "areaCode": "440114",
      "areaName": "花都区" },
    {
      "areaCode": "440115",
      "areaName": "南沙区" },
    {
      "areaCode": "440116",
      "areaName": "萝岗区" },
    {
      "areaCode": "440117",
      "areaName": "从化区" },
    {
      "areaCode": "440118",
      "areaName": "增城区" }] },

  {
    "cityCode": "440200",
    "cityName": "韶关市",
    "mallAreaList": [{
      "areaCode": "440203",
      "areaName": "武江区" },
    {
      "areaCode": "440204",
      "areaName": "浈江区" },
    {
      "areaCode": "440205",
      "areaName": "曲江区" },
    {
      "areaCode": "440222",
      "areaName": "始兴县" },
    {
      "areaCode": "440224",
      "areaName": "仁化县" },
    {
      "areaCode": "440229",
      "areaName": "翁源县" },
    {
      "areaCode": "440232",
      "areaName": "乳源瑶族自治县" },
    {
      "areaCode": "440233",
      "areaName": "新丰县" },
    {
      "areaCode": "440281",
      "areaName": "乐昌市" },
    {
      "areaCode": "440282",
      "areaName": "南雄市" }] },

  {
    "cityCode": "440300",
    "cityName": "深圳市",
    "mallAreaList": [{
      "areaCode": "440303",
      "areaName": "罗湖区" },
    {
      "areaCode": "440304",
      "areaName": "福田区" },
    {
      "areaCode": "440305",
      "areaName": "南山区" },
    {
      "areaCode": "440306",
      "areaName": "宝安区" },
    {
      "areaCode": "440307",
      "areaName": "龙岗区" },
    {
      "areaCode": "440308",
      "areaName": "盐田区" }] },

  {
    "cityCode": "440400",
    "cityName": "珠海市",
    "mallAreaList": [{
      "areaCode": "440402",
      "areaName": "香洲区" },
    {
      "areaCode": "440403",
      "areaName": "斗门区" },
    {
      "areaCode": "440404",
      "areaName": "金湾区" }] },

  {
    "cityCode": "440500",
    "cityName": "汕头市",
    "mallAreaList": [{
      "areaCode": "440507",
      "areaName": "龙湖区" },
    {
      "areaCode": "440511",
      "areaName": "金平区" },
    {
      "areaCode": "440512",
      "areaName": "濠江区" },
    {
      "areaCode": "440513",
      "areaName": "潮阳区" },
    {
      "areaCode": "440514",
      "areaName": "潮南区" },
    {
      "areaCode": "440515",
      "areaName": "澄海区" },
    {
      "areaCode": "440523",
      "areaName": "南澳县" }] },

  {
    "cityCode": "440600",
    "cityName": "佛山市",
    "mallAreaList": [{
      "areaCode": "440604",
      "areaName": "禅城区" },
    {
      "areaCode": "440605",
      "areaName": "南海区" },
    {
      "areaCode": "440606",
      "areaName": "顺德区" },
    {
      "areaCode": "440607",
      "areaName": "三水区" },
    {
      "areaCode": "440608",
      "areaName": "高明区" }] },

  {
    "cityCode": "440700",
    "cityName": "江门市",
    "mallAreaList": [{
      "areaCode": "440703",
      "areaName": "蓬江区" },
    {
      "areaCode": "440704",
      "areaName": "江海区" },
    {
      "areaCode": "440705",
      "areaName": "新会区" },
    {
      "areaCode": "440781",
      "areaName": "台山市" },
    {
      "areaCode": "440783",
      "areaName": "开平市" },
    {
      "areaCode": "440784",
      "areaName": "鹤山市" },
    {
      "areaCode": "440785",
      "areaName": "恩平市" }] },

  {
    "cityCode": "440800",
    "cityName": "湛江市",
    "mallAreaList": [{
      "areaCode": "440802",
      "areaName": "赤坎区" },
    {
      "areaCode": "440803",
      "areaName": "霞山区" },
    {
      "areaCode": "440804",
      "areaName": "坡头区" },
    {
      "areaCode": "440811",
      "areaName": "麻章区" },
    {
      "areaCode": "440823",
      "areaName": "遂溪县" },
    {
      "areaCode": "440825",
      "areaName": "徐闻县" },
    {
      "areaCode": "440881",
      "areaName": "廉江市" },
    {
      "areaCode": "440882",
      "areaName": "雷州市" },
    {
      "areaCode": "440883",
      "areaName": "吴川市" }] },

  {
    "cityCode": "440900",
    "cityName": "茂名市",
    "mallAreaList": [{
      "areaCode": "440902",
      "areaName": "茂南区" },
    {
      "areaCode": "440904",
      "areaName": "电白区" },
    {
      "areaCode": "440981",
      "areaName": "高州市" },
    {
      "areaCode": "440982",
      "areaName": "化州市" },
    {
      "areaCode": "440983",
      "areaName": "信宜市" }] },

  {
    "cityCode": "441200",
    "cityName": "肇庆市",
    "mallAreaList": [{
      "areaCode": "441202",
      "areaName": "端州区" },
    {
      "areaCode": "441203",
      "areaName": "鼎湖区" },
    {
      "areaCode": "441223",
      "areaName": "广宁县" },
    {
      "areaCode": "441224",
      "areaName": "怀集县" },
    {
      "areaCode": "441225",
      "areaName": "封开县" },
    {
      "areaCode": "441226",
      "areaName": "德庆县" },
    {
      "areaCode": "441283",
      "areaName": "高要市" },
    {
      "areaCode": "441284",
      "areaName": "四会市" }] },

  {
    "cityCode": "441300",
    "cityName": "惠州市",
    "mallAreaList": [{
      "areaCode": "441302",
      "areaName": "惠城区" },
    {
      "areaCode": "441303",
      "areaName": "惠阳区" },
    {
      "areaCode": "441322",
      "areaName": "博罗县" },
    {
      "areaCode": "441323",
      "areaName": "惠东县" },
    {
      "areaCode": "441324",
      "areaName": "龙门县" }] },

  {
    "cityCode": "441400",
    "cityName": "梅州市",
    "mallAreaList": [{
      "areaCode": "441402",
      "areaName": "梅江区" },
    {
      "areaCode": "441403",
      "areaName": "梅县区" },
    {
      "areaCode": "441422",
      "areaName": "大埔县" },
    {
      "areaCode": "441423",
      "areaName": "丰顺县" },
    {
      "areaCode": "441424",
      "areaName": "五华县" },
    {
      "areaCode": "441426",
      "areaName": "平远县" },
    {
      "areaCode": "441427",
      "areaName": "蕉岭县" },
    {
      "areaCode": "441481",
      "areaName": "兴宁市" }] },

  {
    "cityCode": "441500",
    "cityName": "汕尾市",
    "mallAreaList": [{
      "areaCode": "441502",
      "areaName": "城区" },
    {
      "areaCode": "441521",
      "areaName": "海丰县" },
    {
      "areaCode": "441523",
      "areaName": "陆河县" },
    {
      "areaCode": "441581",
      "areaName": "陆丰市" }] },

  {
    "cityCode": "441600",
    "cityName": "河源市",
    "mallAreaList": [{
      "areaCode": "441602",
      "areaName": "源城区" },
    {
      "areaCode": "441621",
      "areaName": "紫金县" },
    {
      "areaCode": "441622",
      "areaName": "龙川县" },
    {
      "areaCode": "441623",
      "areaName": "连平县" },
    {
      "areaCode": "441624",
      "areaName": "和平县" },
    {
      "areaCode": "441625",
      "areaName": "东源县" }] },

  {
    "cityCode": "441700",
    "cityName": "阳江市",
    "mallAreaList": [{
      "areaCode": "441702",
      "areaName": "江城区" },
    {
      "areaCode": "441721",
      "areaName": "阳西县" },
    {
      "areaCode": "441723",
      "areaName": "阳东县" },
    {
      "areaCode": "441781",
      "areaName": "阳春市" }] },

  {
    "cityCode": "441800",
    "cityName": "清远市",
    "mallAreaList": [{
      "areaCode": "441802",
      "areaName": "清城区" },
    {
      "areaCode": "441803",
      "areaName": "清新区" },
    {
      "areaCode": "441821",
      "areaName": "佛冈县" },
    {
      "areaCode": "441823",
      "areaName": "阳山县" },
    {
      "areaCode": "441825",
      "areaName": "连山壮族瑶族自治县" },
    {
      "areaCode": "441826",
      "areaName": "连南瑶族自治县" },
    {
      "areaCode": "441881",
      "areaName": "英德市" },
    {
      "areaCode": "441882",
      "areaName": "连州市" }] },

  {
    "cityCode": "441900",
    "cityName": "东莞市",
    "mallAreaList": [{
      "areaCode": "441900",
      "areaName": "东莞市" }] },

  {
    "cityCode": "442000",
    "cityName": "中山市",
    "mallAreaList": [{
      "areaCode": "442000",
      "areaName": "中山市" }] },

  {
    "cityCode": "445100",
    "cityName": "潮州市",
    "mallAreaList": [{
      "areaCode": "445102",
      "areaName": "湘桥区" },
    {
      "areaCode": "445103",
      "areaName": "潮安区" },
    {
      "areaCode": "445122",
      "areaName": "饶平县" }] },

  {
    "cityCode": "445200",
    "cityName": "揭阳市",
    "mallAreaList": [{
      "areaCode": "445202",
      "areaName": "榕城区" },
    {
      "areaCode": "445203",
      "areaName": "揭东区" },
    {
      "areaCode": "445222",
      "areaName": "揭西县" },
    {
      "areaCode": "445224",
      "areaName": "惠来县" },
    {
      "areaCode": "445281",
      "areaName": "普宁市" }] },

  {
    "cityCode": "445300",
    "cityName": "云浮市",
    "mallAreaList": [{
      "areaCode": "445302",
      "areaName": "云城区" },
    {
      "areaCode": "445303",
      "areaName": "云安区" },
    {
      "areaCode": "445321",
      "areaName": "新兴县" },
    {
      "areaCode": "445322",
      "areaName": "郁南县" },
    {
      "areaCode": "445381",
      "areaName": "罗定市" }] }] },


{
  "provinceCode": "450000",
  "provinceName": "广西壮族自治区",
  "mallCityList": [{
    "cityCode": "450100",
    "cityName": "南宁市",
    "mallAreaList": [{
      "areaCode": "450102",
      "areaName": "兴宁区" },
    {
      "areaCode": "450103",
      "areaName": "青秀区" },
    {
      "areaCode": "450105",
      "areaName": "江南区" },
    {
      "areaCode": "450107",
      "areaName": "西乡塘区" },
    {
      "areaCode": "450108",
      "areaName": "良庆区" },
    {
      "areaCode": "450109",
      "areaName": "邕宁区" },
    {
      "areaCode": "450122",
      "areaName": "武鸣县" },
    {
      "areaCode": "450123",
      "areaName": "隆安县" },
    {
      "areaCode": "450124",
      "areaName": "马山县" },
    {
      "areaCode": "450125",
      "areaName": "上林县" },
    {
      "areaCode": "450126",
      "areaName": "宾阳县" },
    {
      "areaCode": "450127",
      "areaName": "横县" }] },

  {
    "cityCode": "450200",
    "cityName": "柳州市",
    "mallAreaList": [{
      "areaCode": "450202",
      "areaName": "城中区" },
    {
      "areaCode": "450203",
      "areaName": "鱼峰区" },
    {
      "areaCode": "450204",
      "areaName": "柳南区" },
    {
      "areaCode": "450205",
      "areaName": "柳北区" },
    {
      "areaCode": "450221",
      "areaName": "柳江县" },
    {
      "areaCode": "450222",
      "areaName": "柳城县" },
    {
      "areaCode": "450223",
      "areaName": "鹿寨县" },
    {
      "areaCode": "450224",
      "areaName": "融安县" },
    {
      "areaCode": "450225",
      "areaName": "融水苗族自治县" },
    {
      "areaCode": "450226",
      "areaName": "三江侗族自治县" }] },

  {
    "cityCode": "450300",
    "cityName": "桂林市",
    "mallAreaList": [{
      "areaCode": "450302",
      "areaName": "秀峰区" },
    {
      "areaCode": "450303",
      "areaName": "叠彩区" },
    {
      "areaCode": "450304",
      "areaName": "象山区" },
    {
      "areaCode": "450305",
      "areaName": "七星区" },
    {
      "areaCode": "450311",
      "areaName": "雁山区" },
    {
      "areaCode": "450312",
      "areaName": "临桂区" },
    {
      "areaCode": "450321",
      "areaName": "阳朔县" },
    {
      "areaCode": "450323",
      "areaName": "灵川县" },
    {
      "areaCode": "450324",
      "areaName": "全州县" },
    {
      "areaCode": "450325",
      "areaName": "兴安县" },
    {
      "areaCode": "450326",
      "areaName": "永福县" },
    {
      "areaCode": "450327",
      "areaName": "灌阳县" },
    {
      "areaCode": "450328",
      "areaName": "龙胜各族自治县" },
    {
      "areaCode": "450329",
      "areaName": "资源县" },
    {
      "areaCode": "450330",
      "areaName": "平乐县" },
    {
      "areaCode": "450331",
      "areaName": "荔浦县" },
    {
      "areaCode": "450332",
      "areaName": "恭城瑶族自治县" }] },

  {
    "cityCode": "450400",
    "cityName": "梧州市",
    "mallAreaList": [{
      "areaCode": "450403",
      "areaName": "万秀区" },
    {
      "areaCode": "450405",
      "areaName": "长洲区" },
    {
      "areaCode": "450406",
      "areaName": "龙圩区" },
    {
      "areaCode": "450421",
      "areaName": "苍梧县" },
    {
      "areaCode": "450422",
      "areaName": "藤县" },
    {
      "areaCode": "450423",
      "areaName": "蒙山县" },
    {
      "areaCode": "450481",
      "areaName": "岑溪市" }] },

  {
    "cityCode": "450500",
    "cityName": "北海市",
    "mallAreaList": [{
      "areaCode": "450502",
      "areaName": "海城区" },
    {
      "areaCode": "450503",
      "areaName": "银海区" },
    {
      "areaCode": "450512",
      "areaName": "铁山港区" },
    {
      "areaCode": "450521",
      "areaName": "合浦县" }] },

  {
    "cityCode": "450600",
    "cityName": "防城港市",
    "mallAreaList": [{
      "areaCode": "450602",
      "areaName": "港口区" },
    {
      "areaCode": "450603",
      "areaName": "防城区" },
    {
      "areaCode": "450621",
      "areaName": "上思县" },
    {
      "areaCode": "450681",
      "areaName": "东兴市" }] },

  {
    "cityCode": "450700",
    "cityName": "钦州市",
    "mallAreaList": [{
      "areaCode": "450702",
      "areaName": "钦南区" },
    {
      "areaCode": "450703",
      "areaName": "钦北区" },
    {
      "areaCode": "450721",
      "areaName": "灵山县" },
    {
      "areaCode": "450722",
      "areaName": "浦北县" }] },

  {
    "cityCode": "450800",
    "cityName": "贵港市",
    "mallAreaList": [{
      "areaCode": "450802",
      "areaName": "港北区" },
    {
      "areaCode": "450803",
      "areaName": "港南区" },
    {
      "areaCode": "450804",
      "areaName": "覃塘区" },
    {
      "areaCode": "450821",
      "areaName": "平南县" },
    {
      "areaCode": "450881",
      "areaName": "桂平市" }] },

  {
    "cityCode": "450900",
    "cityName": "玉林市",
    "mallAreaList": [{
      "areaCode": "450902",
      "areaName": "玉州区" },
    {
      "areaCode": "450903",
      "areaName": "福绵区" },
    {
      "areaCode": "450921",
      "areaName": "容县" },
    {
      "areaCode": "450922",
      "areaName": "陆川县" },
    {
      "areaCode": "450923",
      "areaName": "博白县" },
    {
      "areaCode": "450924",
      "areaName": "兴业县" },
    {
      "areaCode": "450981",
      "areaName": "北流市" }] },

  {
    "cityCode": "451000",
    "cityName": "百色市",
    "mallAreaList": [{
      "areaCode": "451002",
      "areaName": "右江区" },
    {
      "areaCode": "451021",
      "areaName": "田阳县" },
    {
      "areaCode": "451022",
      "areaName": "田东县" },
    {
      "areaCode": "451023",
      "areaName": "平果县" },
    {
      "areaCode": "451024",
      "areaName": "德保县" },
    {
      "areaCode": "451025",
      "areaName": "靖西县" },
    {
      "areaCode": "451026",
      "areaName": "那坡县" },
    {
      "areaCode": "451027",
      "areaName": "凌云县" },
    {
      "areaCode": "451028",
      "areaName": "乐业县" },
    {
      "areaCode": "451029",
      "areaName": "田林县" },
    {
      "areaCode": "451030",
      "areaName": "西林县" },
    {
      "areaCode": "451031",
      "areaName": "隆林各族自治县" }] },

  {
    "cityCode": "451100",
    "cityName": "贺州市",
    "mallAreaList": [{
      "areaCode": "451102",
      "areaName": "八步区" },
    {
      "areaCode": "451121",
      "areaName": "昭平县" },
    {
      "areaCode": "451122",
      "areaName": "钟山县" },
    {
      "areaCode": "451123",
      "areaName": "富川瑶族自治县" }] },

  {
    "cityCode": "451200",
    "cityName": "河池市",
    "mallAreaList": [{
      "areaCode": "451202",
      "areaName": "金城江区" },
    {
      "areaCode": "451221",
      "areaName": "南丹县" },
    {
      "areaCode": "451222",
      "areaName": "天峨县" },
    {
      "areaCode": "451223",
      "areaName": "凤山县" },
    {
      "areaCode": "451224",
      "areaName": "东兰县" },
    {
      "areaCode": "451225",
      "areaName": "罗城仫佬族自治县" },
    {
      "areaCode": "451226",
      "areaName": "环江毛南族自治县" },
    {
      "areaCode": "451227",
      "areaName": "巴马瑶族自治县" },
    {
      "areaCode": "451228",
      "areaName": "都安瑶族自治县" },
    {
      "areaCode": "451229",
      "areaName": "大化瑶族自治县" },
    {
      "areaCode": "451281",
      "areaName": "宜州市" }] },

  {
    "cityCode": "451300",
    "cityName": "来宾市",
    "mallAreaList": [{
      "areaCode": "451302",
      "areaName": "兴宾区" },
    {
      "areaCode": "451321",
      "areaName": "忻城县" },
    {
      "areaCode": "451322",
      "areaName": "象州县" },
    {
      "areaCode": "451323",
      "areaName": "武宣县" },
    {
      "areaCode": "451324",
      "areaName": "金秀瑶族自治县" },
    {
      "areaCode": "451381",
      "areaName": "合山市" }] },

  {
    "cityCode": "451400",
    "cityName": "崇左市",
    "mallAreaList": [{
      "areaCode": "451402",
      "areaName": "江州区" },
    {
      "areaCode": "451421",
      "areaName": "扶绥县" },
    {
      "areaCode": "451422",
      "areaName": "宁明县" },
    {
      "areaCode": "451423",
      "areaName": "龙州县" },
    {
      "areaCode": "451424",
      "areaName": "大新县" },
    {
      "areaCode": "451425",
      "areaName": "天等县" },
    {
      "areaCode": "451481",
      "areaName": "凭祥市" }] }] },


{
  "provinceCode": "460000",
  "provinceName": "海南省",
  "mallCityList": [{
    "cityCode": "460100",
    "cityName": "海口市",
    "mallAreaList": [{
      "areaCode": "460105",
      "areaName": "秀英区" },
    {
      "areaCode": "460106",
      "areaName": "龙华区" },
    {
      "areaCode": "460107",
      "areaName": "琼山区" },
    {
      "areaCode": "460108",
      "areaName": "美兰区" }] },

  {
    "cityCode": "460200",
    "cityName": "三亚市",
    "mallAreaList": [{
      "areaCode": "460202",
      "areaName": "海棠区" },
    {
      "areaCode": "460203",
      "areaName": "吉阳区" },
    {
      "areaCode": "460204",
      "areaName": "天涯区" },
    {
      "areaCode": "460205",
      "areaName": "崖州区" }] },

  {
    "cityCode": "469000",
    "cityName": "省直辖县级行政单位",
    "mallAreaList": [{
      "areaCode": "469001",
      "areaName": "五指山市" },
    {
      "areaCode": "469002",
      "areaName": "琼海市" },
    {
      "areaCode": "469003",
      "areaName": "儋州市" },
    {
      "areaCode": "469005",
      "areaName": "文昌市" },
    {
      "areaCode": "469006",
      "areaName": "万宁市" },
    {
      "areaCode": "469007",
      "areaName": "东方市" },
    {
      "areaCode": "469021",
      "areaName": "定安县" },
    {
      "areaCode": "469022",
      "areaName": "屯昌县" },
    {
      "areaCode": "469023",
      "areaName": "澄迈县" },
    {
      "areaCode": "469024",
      "areaName": "临高县" },
    {
      "areaCode": "469025",
      "areaName": "白沙黎族自治县" },
    {
      "areaCode": "469026",
      "areaName": "昌江黎族自治县" },
    {
      "areaCode": "469027",
      "areaName": "乐东黎族自治县" },
    {
      "areaCode": "469028",
      "areaName": "陵水黎族自治县" },
    {
      "areaCode": "469029",
      "areaName": "保亭黎族苗族自治县" },
    {
      "areaCode": "469030",
      "areaName": "琼中黎族苗族自治县" }] }] },


{
  "provinceCode": "500000",
  "provinceName": "重庆市",
  "mallCityList": [{
    "cityCode": "500100",
    "cityName": "重庆市",
    "mallAreaList": [{
      "areaCode": "500101",
      "areaName": "万州区" },
    {
      "areaCode": "500102",
      "areaName": "涪陵区" },
    {
      "areaCode": "500103",
      "areaName": "渝中区" },
    {
      "areaCode": "500104",
      "areaName": "大渡口区" },
    {
      "areaCode": "500105",
      "areaName": "江北区" },
    {
      "areaCode": "500106",
      "areaName": "沙坪坝区" },
    {
      "areaCode": "500107",
      "areaName": "九龙坡区" },
    {
      "areaCode": "500108",
      "areaName": "南岸区" },
    {
      "areaCode": "500109",
      "areaName": "北碚区" },
    {
      "areaCode": "500110",
      "areaName": "綦江区" },
    {
      "areaCode": "500111",
      "areaName": "大足区" },
    {
      "areaCode": "500112",
      "areaName": "渝北区" },
    {
      "areaCode": "500113",
      "areaName": "巴南区" },
    {
      "areaCode": "500114",
      "areaName": "黔江区" },
    {
      "areaCode": "500115",
      "areaName": "长寿区" },
    {
      "areaCode": "500116",
      "areaName": "江津区" },
    {
      "areaCode": "500117",
      "areaName": "合川区" },
    {
      "areaCode": "500118",
      "areaName": "永川区" },
    {
      "areaCode": "500119",
      "areaName": "南川区" },
    {
      "areaCode": "500120",
      "areaName": "璧山区" },
    {
      "areaCode": "500151",
      "areaName": "铜梁区" }] },

  {
    "cityCode": "500200",
    "cityName": "重庆市辖县",
    "mallAreaList": [{
      "areaCode": "500223",
      "areaName": "潼南县" },
    {
      "areaCode": "500226",
      "areaName": "荣昌县" },
    {
      "areaCode": "500228",
      "areaName": "梁平县" },
    {
      "areaCode": "500229",
      "areaName": "城口县" },
    {
      "areaCode": "500230",
      "areaName": "丰都县" },
    {
      "areaCode": "500231",
      "areaName": "垫江县" },
    {
      "areaCode": "500232",
      "areaName": "武隆县" },
    {
      "areaCode": "500233",
      "areaName": "忠县" },
    {
      "areaCode": "500234",
      "areaName": "开县" },
    {
      "areaCode": "500235",
      "areaName": "云阳县" },
    {
      "areaCode": "500236",
      "areaName": "奉节县" },
    {
      "areaCode": "500237",
      "areaName": "巫山县" },
    {
      "areaCode": "500238",
      "areaName": "巫溪县" },
    {
      "areaCode": "500240",
      "areaName": "石柱土家族自治县" },
    {
      "areaCode": "500241",
      "areaName": "秀山土家族苗族自治县" },
    {
      "areaCode": "500242",
      "areaName": "酉阳土家族苗族自治县" },
    {
      "areaCode": "500243",
      "areaName": "彭水苗族土家族自治县" }] }] },


{
  "provinceCode": "510000",
  "provinceName": "四川省",
  "mallCityList": [{
    "cityCode": "510100",
    "cityName": "成都市",
    "mallAreaList": [{
      "areaCode": "510104",
      "areaName": "锦江区" },
    {
      "areaCode": "510105",
      "areaName": "青羊区" },
    {
      "areaCode": "510106",
      "areaName": "金牛区" },
    {
      "areaCode": "510107",
      "areaName": "武侯区" },
    {
      "areaCode": "510108",
      "areaName": "成华区" },
    {
      "areaCode": "510112",
      "areaName": "龙泉驿区" },
    {
      "areaCode": "510113",
      "areaName": "青白江区" },
    {
      "areaCode": "510114",
      "areaName": "新都区" },
    {
      "areaCode": "510115",
      "areaName": "温江区" },
    {
      "areaCode": "510121",
      "areaName": "金堂县" },
    {
      "areaCode": "510122",
      "areaName": "双流县" },
    {
      "areaCode": "510124",
      "areaName": "郫县" },
    {
      "areaCode": "510129",
      "areaName": "大邑县" },
    {
      "areaCode": "510131",
      "areaName": "蒲江县" },
    {
      "areaCode": "510132",
      "areaName": "新津县" },
    {
      "areaCode": "510181",
      "areaName": "都江堰市" },
    {
      "areaCode": "510182",
      "areaName": "彭州市" },
    {
      "areaCode": "510183",
      "areaName": "邛崃市" },
    {
      "areaCode": "510184",
      "areaName": "崇州市" }] },

  {
    "cityCode": "510300",
    "cityName": "自贡市",
    "mallAreaList": [{
      "areaCode": "510302",
      "areaName": "自流井区" },
    {
      "areaCode": "510303",
      "areaName": "贡井区" },
    {
      "areaCode": "510304",
      "areaName": "大安区" },
    {
      "areaCode": "510311",
      "areaName": "沿滩区" },
    {
      "areaCode": "510321",
      "areaName": "荣县" },
    {
      "areaCode": "510322",
      "areaName": "富顺县" }] },

  {
    "cityCode": "510400",
    "cityName": "攀枝花市",
    "mallAreaList": [{
      "areaCode": "510402",
      "areaName": "东区" },
    {
      "areaCode": "510403",
      "areaName": "西区" },
    {
      "areaCode": "510411",
      "areaName": "仁和区" },
    {
      "areaCode": "510421",
      "areaName": "米易县" },
    {
      "areaCode": "510422",
      "areaName": "盐边县" }] },

  {
    "cityCode": "510500",
    "cityName": "泸州市",
    "mallAreaList": [{
      "areaCode": "510502",
      "areaName": "江阳区" },
    {
      "areaCode": "510503",
      "areaName": "纳溪区" },
    {
      "areaCode": "510504",
      "areaName": "龙马潭区" },
    {
      "areaCode": "510521",
      "areaName": "泸县" },
    {
      "areaCode": "510522",
      "areaName": "合江县" },
    {
      "areaCode": "510524",
      "areaName": "叙永县" },
    {
      "areaCode": "510525",
      "areaName": "古蔺县" }] },

  {
    "cityCode": "510600",
    "cityName": "德阳市",
    "mallAreaList": [{
      "areaCode": "510603",
      "areaName": "旌阳区" },
    {
      "areaCode": "510623",
      "areaName": "中江县" },
    {
      "areaCode": "510626",
      "areaName": "罗江县" },
    {
      "areaCode": "510681",
      "areaName": "广汉市" },
    {
      "areaCode": "510682",
      "areaName": "什邡市" },
    {
      "areaCode": "510683",
      "areaName": "绵竹市" }] },

  {
    "cityCode": "510700",
    "cityName": "绵阳市",
    "mallAreaList": [{
      "areaCode": "510703",
      "areaName": "涪城区" },
    {
      "areaCode": "510704",
      "areaName": "游仙区" },
    {
      "areaCode": "510722",
      "areaName": "三台县" },
    {
      "areaCode": "510723",
      "areaName": "盐亭县" },
    {
      "areaCode": "510724",
      "areaName": "安县" },
    {
      "areaCode": "510725",
      "areaName": "梓潼县" },
    {
      "areaCode": "510726",
      "areaName": "北川羌族自治县" },
    {
      "areaCode": "510727",
      "areaName": "平武县" },
    {
      "areaCode": "510781",
      "areaName": "江油市" }] },

  {
    "cityCode": "510800",
    "cityName": "广元市",
    "mallAreaList": [{
      "areaCode": "510802",
      "areaName": "利州区" },
    {
      "areaCode": "510811",
      "areaName": "昭化区" },
    {
      "areaCode": "510812",
      "areaName": "朝天区" },
    {
      "areaCode": "510821",
      "areaName": "旺苍县" },
    {
      "areaCode": "510822",
      "areaName": "青川县" },
    {
      "areaCode": "510823",
      "areaName": "剑阁县" },
    {
      "areaCode": "510824",
      "areaName": "苍溪县" }] },

  {
    "cityCode": "510900",
    "cityName": "遂宁市",
    "mallAreaList": [{
      "areaCode": "510903",
      "areaName": "船山区" },
    {
      "areaCode": "510904",
      "areaName": "安居区" },
    {
      "areaCode": "510921",
      "areaName": "蓬溪县" },
    {
      "areaCode": "510922",
      "areaName": "射洪县" },
    {
      "areaCode": "510923",
      "areaName": "大英县" }] },

  {
    "cityCode": "511000",
    "cityName": "内江市",
    "mallAreaList": [{
      "areaCode": "511002",
      "areaName": "市中区" },
    {
      "areaCode": "511011",
      "areaName": "东兴区" },
    {
      "areaCode": "511024",
      "areaName": "威远县" },
    {
      "areaCode": "511025",
      "areaName": "资中县" },
    {
      "areaCode": "511028",
      "areaName": "隆昌县" }] },

  {
    "cityCode": "511100",
    "cityName": "乐山市",
    "mallAreaList": [{
      "areaCode": "511102",
      "areaName": "市中区" },
    {
      "areaCode": "511111",
      "areaName": "沙湾区" },
    {
      "areaCode": "511112",
      "areaName": "五通桥区" },
    {
      "areaCode": "511113",
      "areaName": "金口河区" },
    {
      "areaCode": "511123",
      "areaName": "犍为县" },
    {
      "areaCode": "511124",
      "areaName": "井研县" },
    {
      "areaCode": "511126",
      "areaName": "夹江县" },
    {
      "areaCode": "511129",
      "areaName": "沐川县" },
    {
      "areaCode": "511132",
      "areaName": "峨边彝族自治县" },
    {
      "areaCode": "511133",
      "areaName": "马边彝族自治县" },
    {
      "areaCode": "511181",
      "areaName": "峨眉山市" }] },

  {
    "cityCode": "511300",
    "cityName": "南充市",
    "mallAreaList": [{
      "areaCode": "511302",
      "areaName": "顺庆区" },
    {
      "areaCode": "511303",
      "areaName": "高坪区" },
    {
      "areaCode": "511304",
      "areaName": "嘉陵区" },
    {
      "areaCode": "511321",
      "areaName": "南部县" },
    {
      "areaCode": "511322",
      "areaName": "营山县" },
    {
      "areaCode": "511323",
      "areaName": "蓬安县" },
    {
      "areaCode": "511324",
      "areaName": "仪陇县" },
    {
      "areaCode": "511325",
      "areaName": "西充县" },
    {
      "areaCode": "511381",
      "areaName": "阆中市" }] },

  {
    "cityCode": "511400",
    "cityName": "眉山市",
    "mallAreaList": [{
      "areaCode": "511402",
      "areaName": "东坡区" },
    {
      "areaCode": "511421",
      "areaName": "仁寿县" },
    {
      "areaCode": "511422",
      "areaName": "彭山县" },
    {
      "areaCode": "511423",
      "areaName": "洪雅县" },
    {
      "areaCode": "511424",
      "areaName": "丹棱县" },
    {
      "areaCode": "511425",
      "areaName": "青神县" }] },

  {
    "cityCode": "511500",
    "cityName": "宜宾市",
    "mallAreaList": [{
      "areaCode": "511502",
      "areaName": "翠屏区" },
    {
      "areaCode": "511503",
      "areaName": "南溪区" },
    {
      "areaCode": "511521",
      "areaName": "宜宾县" },
    {
      "areaCode": "511523",
      "areaName": "江安县" },
    {
      "areaCode": "511524",
      "areaName": "长宁县" },
    {
      "areaCode": "511525",
      "areaName": "高县" },
    {
      "areaCode": "511526",
      "areaName": "珙县" },
    {
      "areaCode": "511527",
      "areaName": "筠连县" },
    {
      "areaCode": "511528",
      "areaName": "兴文县" },
    {
      "areaCode": "511529",
      "areaName": "屏山县" }] },

  {
    "cityCode": "511600",
    "cityName": "广安市",
    "mallAreaList": [{
      "areaCode": "511602",
      "areaName": "广安区" },
    {
      "areaCode": "511603",
      "areaName": "前锋区" },
    {
      "areaCode": "511621",
      "areaName": "岳池县" },
    {
      "areaCode": "511622",
      "areaName": "武胜县" },
    {
      "areaCode": "511623",
      "areaName": "邻水县" },
    {
      "areaCode": "511681",
      "areaName": "华蓥市" }] },

  {
    "cityCode": "511700",
    "cityName": "达州市",
    "mallAreaList": [{
      "areaCode": "511702",
      "areaName": "通川区" },
    {
      "areaCode": "511703",
      "areaName": "达川区" },
    {
      "areaCode": "511722",
      "areaName": "宣汉县" },
    {
      "areaCode": "511723",
      "areaName": "开江县" },
    {
      "areaCode": "511724",
      "areaName": "大竹县" },
    {
      "areaCode": "511725",
      "areaName": "渠县" },
    {
      "areaCode": "511781",
      "areaName": "万源市" }] },

  {
    "cityCode": "511800",
    "cityName": "雅安市",
    "mallAreaList": [{
      "areaCode": "511802",
      "areaName": "雨城区" },
    {
      "areaCode": "511803",
      "areaName": "名山区" },
    {
      "areaCode": "511822",
      "areaName": "荥经县" },
    {
      "areaCode": "511823",
      "areaName": "汉源县" },
    {
      "areaCode": "511824",
      "areaName": "石棉县" },
    {
      "areaCode": "511825",
      "areaName": "天全县" },
    {
      "areaCode": "511826",
      "areaName": "芦山县" },
    {
      "areaCode": "511827",
      "areaName": "宝兴县" }] },

  {
    "cityCode": "511900",
    "cityName": "巴中市",
    "mallAreaList": [{
      "areaCode": "511902",
      "areaName": "巴州区" },
    {
      "areaCode": "511903",
      "areaName": "恩阳区" },
    {
      "areaCode": "511921",
      "areaName": "通江县" },
    {
      "areaCode": "511922",
      "areaName": "南江县" },
    {
      "areaCode": "511923",
      "areaName": "平昌县" }] },

  {
    "cityCode": "512000",
    "cityName": "资阳市",
    "mallAreaList": [{
      "areaCode": "512002",
      "areaName": "雁江区" },
    {
      "areaCode": "512021",
      "areaName": "安岳县" },
    {
      "areaCode": "512022",
      "areaName": "乐至县" },
    {
      "areaCode": "512081",
      "areaName": "简阳市" }] },

  {
    "cityCode": "513200",
    "cityName": "阿坝藏族羌族自治州",
    "mallAreaList": [{
      "areaCode": "513221",
      "areaName": "汶川县" },
    {
      "areaCode": "513222",
      "areaName": "理县" },
    {
      "areaCode": "513223",
      "areaName": "茂县" },
    {
      "areaCode": "513224",
      "areaName": "松潘县" },
    {
      "areaCode": "513225",
      "areaName": "九寨沟县" },
    {
      "areaCode": "513226",
      "areaName": "金川县" },
    {
      "areaCode": "513227",
      "areaName": "小金县" },
    {
      "areaCode": "513228",
      "areaName": "黑水县" },
    {
      "areaCode": "513229",
      "areaName": "马尔康县" },
    {
      "areaCode": "513230",
      "areaName": "壤塘县" },
    {
      "areaCode": "513231",
      "areaName": "阿坝县" },
    {
      "areaCode": "513232",
      "areaName": "若尔盖县" },
    {
      "areaCode": "513233",
      "areaName": "红原县" }] },

  {
    "cityCode": "513300",
    "cityName": "甘孜藏族自治州",
    "mallAreaList": [{
      "areaCode": "513321",
      "areaName": "康定县" },
    {
      "areaCode": "513322",
      "areaName": "泸定县" },
    {
      "areaCode": "513323",
      "areaName": "丹巴县" },
    {
      "areaCode": "513324",
      "areaName": "九龙县" },
    {
      "areaCode": "513325",
      "areaName": "雅江县" },
    {
      "areaCode": "513326",
      "areaName": "道孚县" },
    {
      "areaCode": "513327",
      "areaName": "炉霍县" },
    {
      "areaCode": "513328",
      "areaName": "甘孜县" },
    {
      "areaCode": "513329",
      "areaName": "新龙县" },
    {
      "areaCode": "513330",
      "areaName": "德格县" },
    {
      "areaCode": "513331",
      "areaName": "白玉县" },
    {
      "areaCode": "513332",
      "areaName": "石渠县" },
    {
      "areaCode": "513333",
      "areaName": "色达县" },
    {
      "areaCode": "513334",
      "areaName": "理塘县" },
    {
      "areaCode": "513335",
      "areaName": "巴塘县" },
    {
      "areaCode": "513336",
      "areaName": "乡城县" },
    {
      "areaCode": "513337",
      "areaName": "稻城县" },
    {
      "areaCode": "513338",
      "areaName": "得荣县" }] },

  {
    "cityCode": "513400",
    "cityName": "凉山彝族自治州",
    "mallAreaList": [{
      "areaCode": "513401",
      "areaName": "西昌市" },
    {
      "areaCode": "513422",
      "areaName": "木里藏族自治县" },
    {
      "areaCode": "513423",
      "areaName": "盐源县" },
    {
      "areaCode": "513424",
      "areaName": "德昌县" },
    {
      "areaCode": "513425",
      "areaName": "会理县" },
    {
      "areaCode": "513426",
      "areaName": "会东县" },
    {
      "areaCode": "513427",
      "areaName": "宁南县" },
    {
      "areaCode": "513428",
      "areaName": "普格县" },
    {
      "areaCode": "513429",
      "areaName": "布拖县" },
    {
      "areaCode": "513430",
      "areaName": "金阳县" },
    {
      "areaCode": "513431",
      "areaName": "昭觉县" },
    {
      "areaCode": "513432",
      "areaName": "喜德县" },
    {
      "areaCode": "513433",
      "areaName": "冕宁县" },
    {
      "areaCode": "513434",
      "areaName": "越西县" },
    {
      "areaCode": "513435",
      "areaName": "甘洛县" },
    {
      "areaCode": "513436",
      "areaName": "美姑县" },
    {
      "areaCode": "513437",
      "areaName": "雷波县" }] }] },


{
  "provinceCode": "520000",
  "provinceName": "贵州省",
  "mallCityList": [{
    "cityCode": "520100",
    "cityName": "贵阳市",
    "mallAreaList": [{
      "areaCode": "520102",
      "areaName": "南明区" },
    {
      "areaCode": "520103",
      "areaName": "云岩区" },
    {
      "areaCode": "520111",
      "areaName": "花溪区" },
    {
      "areaCode": "520112",
      "areaName": "乌当区" },
    {
      "areaCode": "520113",
      "areaName": "白云区" },
    {
      "areaCode": "520115",
      "areaName": "观山湖区" },
    {
      "areaCode": "520121",
      "areaName": "开阳县" },
    {
      "areaCode": "520122",
      "areaName": "息烽县" },
    {
      "areaCode": "520123",
      "areaName": "修文县" },
    {
      "areaCode": "520181",
      "areaName": "清镇市" }] },

  {
    "cityCode": "520200",
    "cityName": "六盘水市",
    "mallAreaList": [{
      "areaCode": "520201",
      "areaName": "钟山区" },
    {
      "areaCode": "520203",
      "areaName": "六枝特区" },
    {
      "areaCode": "520221",
      "areaName": "水城县" },
    {
      "areaCode": "520222",
      "areaName": "盘县" }] },

  {
    "cityCode": "520300",
    "cityName": "遵义市",
    "mallAreaList": [{
      "areaCode": "520302",
      "areaName": "红花岗区" },
    {
      "areaCode": "520303",
      "areaName": "汇川区" },
    {
      "areaCode": "520321",
      "areaName": "遵义县" },
    {
      "areaCode": "520322",
      "areaName": "桐梓县" },
    {
      "areaCode": "520323",
      "areaName": "绥阳县" },
    {
      "areaCode": "520324",
      "areaName": "正安县" },
    {
      "areaCode": "520325",
      "areaName": "道真仡佬族苗族自治县" },
    {
      "areaCode": "520326",
      "areaName": "务川仡佬族苗族自治县" },
    {
      "areaCode": "520327",
      "areaName": "凤冈县" },
    {
      "areaCode": "520328",
      "areaName": "湄潭县" },
    {
      "areaCode": "520329",
      "areaName": "余庆县" },
    {
      "areaCode": "520330",
      "areaName": "习水县" },
    {
      "areaCode": "520381",
      "areaName": "赤水市" },
    {
      "areaCode": "520382",
      "areaName": "仁怀市" }] },

  {
    "cityCode": "520400",
    "cityName": "安顺市",
    "mallAreaList": [{
      "areaCode": "520402",
      "areaName": "西秀区" },
    {
      "areaCode": "520421",
      "areaName": "平坝县" },
    {
      "areaCode": "520422",
      "areaName": "普定县" },
    {
      "areaCode": "520423",
      "areaName": "镇宁布依族苗族自治县" },
    {
      "areaCode": "520424",
      "areaName": "关岭布依族苗族自治县" },
    {
      "areaCode": "520425",
      "areaName": "紫云苗族布依族自治县" }] },

  {
    "cityCode": "522200",
    "cityName": "铜仁地区",
    "mallAreaList": [{
      "areaCode": "520602",
      "areaName": "碧江区" },
    {
      "areaCode": "520603",
      "areaName": "万山区" },
    {
      "areaCode": "520621",
      "areaName": "江口县" },
    {
      "areaCode": "520622",
      "areaName": "玉屏侗族自治县" },
    {
      "areaCode": "520623",
      "areaName": "石阡县" },
    {
      "areaCode": "520624",
      "areaName": "思南县" },
    {
      "areaCode": "520625",
      "areaName": "印江土家族苗族自治县" },
    {
      "areaCode": "520626",
      "areaName": "德江县" },
    {
      "areaCode": "520627",
      "areaName": "沿河土家族自治县" },
    {
      "areaCode": "520628",
      "areaName": "松桃苗族自治县" },
    {
      "areaCode": "522200",
      "areaName": "铜仁地区" }] },

  {
    "cityCode": "522300",
    "cityName": "黔西南布依族苗族自治州",
    "mallAreaList": [{
      "areaCode": "522301",
      "areaName": "兴义市" },
    {
      "areaCode": "522322",
      "areaName": "兴仁县" },
    {
      "areaCode": "522323",
      "areaName": "普安县" },
    {
      "areaCode": "522324",
      "areaName": "晴隆县" },
    {
      "areaCode": "522325",
      "areaName": "贞丰县" },
    {
      "areaCode": "522326",
      "areaName": "望谟县" },
    {
      "areaCode": "522327",
      "areaName": "册亨县" },
    {
      "areaCode": "522328",
      "areaName": "安龙县" }] },

  {
    "cityCode": "522400",
    "cityName": "毕节地区",
    "mallAreaList": [{
      "areaCode": "520502",
      "areaName": "七星关区" },
    {
      "areaCode": "520521",
      "areaName": "大方县" },
    {
      "areaCode": "520522",
      "areaName": "黔西县" },
    {
      "areaCode": "520523",
      "areaName": "金沙县" },
    {
      "areaCode": "520524",
      "areaName": "织金县" },
    {
      "areaCode": "520525",
      "areaName": "纳雍县" },
    {
      "areaCode": "520526",
      "areaName": "威宁彝族回族苗族自治县" },
    {
      "areaCode": "520527",
      "areaName": "赫章县" },
    {
      "areaCode": "522400",
      "areaName": "毕节地区" }] },

  {
    "cityCode": "522600",
    "cityName": "黔东南苗族侗族自治州",
    "mallAreaList": [{
      "areaCode": "522601",
      "areaName": "凯里市" },
    {
      "areaCode": "522622",
      "areaName": "黄平县" },
    {
      "areaCode": "522623",
      "areaName": "施秉县" },
    {
      "areaCode": "522624",
      "areaName": "三穗县" },
    {
      "areaCode": "522625",
      "areaName": "镇远县" },
    {
      "areaCode": "522626",
      "areaName": "岑巩县" },
    {
      "areaCode": "522627",
      "areaName": "天柱县" },
    {
      "areaCode": "522628",
      "areaName": "锦屏县" },
    {
      "areaCode": "522629",
      "areaName": "剑河县" },
    {
      "areaCode": "522630",
      "areaName": "台江县" },
    {
      "areaCode": "522631",
      "areaName": "黎平县" },
    {
      "areaCode": "522632",
      "areaName": "榕江县" },
    {
      "areaCode": "522633",
      "areaName": "从江县" },
    {
      "areaCode": "522634",
      "areaName": "雷山县" },
    {
      "areaCode": "522635",
      "areaName": "麻江县" },
    {
      "areaCode": "522636",
      "areaName": "丹寨县" }] },

  {
    "cityCode": "522700",
    "cityName": "黔南布依族苗族自治州",
    "mallAreaList": [{
      "areaCode": "522701",
      "areaName": "都匀市" },
    {
      "areaCode": "522702",
      "areaName": "福泉市" },
    {
      "areaCode": "522722",
      "areaName": "荔波县" },
    {
      "areaCode": "522723",
      "areaName": "贵定县" },
    {
      "areaCode": "522725",
      "areaName": "瓮安县" },
    {
      "areaCode": "522726",
      "areaName": "独山县" },
    {
      "areaCode": "522727",
      "areaName": "平塘县" },
    {
      "areaCode": "522728",
      "areaName": "罗甸县" },
    {
      "areaCode": "522729",
      "areaName": "长顺县" },
    {
      "areaCode": "522730",
      "areaName": "龙里县" },
    {
      "areaCode": "522731",
      "areaName": "惠水县" },
    {
      "areaCode": "522732",
      "areaName": "三都水族自治县" }] }] },


{
  "provinceCode": "530000",
  "provinceName": "云南省",
  "mallCityList": [{
    "cityCode": "530100",
    "cityName": "昆明市",
    "mallAreaList": [{
      "areaCode": "530102",
      "areaName": "五华区" },
    {
      "areaCode": "530103",
      "areaName": "盘龙区" },
    {
      "areaCode": "530111",
      "areaName": "官渡区" },
    {
      "areaCode": "530112",
      "areaName": "西山区" },
    {
      "areaCode": "530113",
      "areaName": "东川区" },
    {
      "areaCode": "530114",
      "areaName": "呈贡区" },
    {
      "areaCode": "530122",
      "areaName": "晋宁县" },
    {
      "areaCode": "530124",
      "areaName": "富民县" },
    {
      "areaCode": "530125",
      "areaName": "宜良县" },
    {
      "areaCode": "530126",
      "areaName": "石林彝族自治县" },
    {
      "areaCode": "530127",
      "areaName": "嵩明县" },
    {
      "areaCode": "530128",
      "areaName": "禄劝彝族苗族自治县" },
    {
      "areaCode": "530129",
      "areaName": "寻甸回族彝族自治县" },
    {
      "areaCode": "530181",
      "areaName": "安宁市" }] },

  {
    "cityCode": "530300",
    "cityName": "曲靖市",
    "mallAreaList": [{
      "areaCode": "530302",
      "areaName": "麒麟区" },
    {
      "areaCode": "530321",
      "areaName": "马龙县" },
    {
      "areaCode": "530322",
      "areaName": "陆良县" },
    {
      "areaCode": "530323",
      "areaName": "师宗县" },
    {
      "areaCode": "530324",
      "areaName": "罗平县" },
    {
      "areaCode": "530325",
      "areaName": "富源县" },
    {
      "areaCode": "530326",
      "areaName": "会泽县" },
    {
      "areaCode": "530328",
      "areaName": "沾益县" },
    {
      "areaCode": "530381",
      "areaName": "宣威市" }] },

  {
    "cityCode": "530400",
    "cityName": "玉溪市",
    "mallAreaList": [{
      "areaCode": "530402",
      "areaName": "红塔区" },
    {
      "areaCode": "530421",
      "areaName": "江川县" },
    {
      "areaCode": "530422",
      "areaName": "澄江县" },
    {
      "areaCode": "530423",
      "areaName": "通海县" },
    {
      "areaCode": "530424",
      "areaName": "华宁县" },
    {
      "areaCode": "530425",
      "areaName": "易门县" },
    {
      "areaCode": "530426",
      "areaName": "峨山彝族自治县" },
    {
      "areaCode": "530427",
      "areaName": "新平彝族傣族自治县" },
    {
      "areaCode": "530428",
      "areaName": "元江哈尼族彝族傣族自治县" }] },

  {
    "cityCode": "530500",
    "cityName": "保山市",
    "mallAreaList": [{
      "areaCode": "530502",
      "areaName": "隆阳区" },
    {
      "areaCode": "530521",
      "areaName": "施甸县" },
    {
      "areaCode": "530522",
      "areaName": "腾冲县" },
    {
      "areaCode": "530523",
      "areaName": "龙陵县" },
    {
      "areaCode": "530524",
      "areaName": "昌宁县" }] },

  {
    "cityCode": "530600",
    "cityName": "昭通市",
    "mallAreaList": [{
      "areaCode": "530602",
      "areaName": "昭阳区" },
    {
      "areaCode": "530621",
      "areaName": "鲁甸县" },
    {
      "areaCode": "530622",
      "areaName": "巧家县" },
    {
      "areaCode": "530623",
      "areaName": "盐津县" },
    {
      "areaCode": "530624",
      "areaName": "大关县" },
    {
      "areaCode": "530625",
      "areaName": "永善县" },
    {
      "areaCode": "530626",
      "areaName": "绥江县" },
    {
      "areaCode": "530627",
      "areaName": "镇雄县" },
    {
      "areaCode": "530628",
      "areaName": "彝良县" },
    {
      "areaCode": "530629",
      "areaName": "威信县" },
    {
      "areaCode": "530630",
      "areaName": "水富县" }] },

  {
    "cityCode": "530700",
    "cityName": "丽江市",
    "mallAreaList": [{
      "areaCode": "530702",
      "areaName": "古城区" },
    {
      "areaCode": "530721",
      "areaName": "玉龙纳西族自治县" },
    {
      "areaCode": "530722",
      "areaName": "永胜县" },
    {
      "areaCode": "530723",
      "areaName": "华坪县" },
    {
      "areaCode": "530724",
      "areaName": "宁蒗彝族自治县" }] },

  {
    "cityCode": "530800",
    "cityName": "思茅市",
    "mallAreaList": [{
      "areaCode": "530802",
      "areaName": "思茅区" },
    {
      "areaCode": "530821",
      "areaName": "宁洱哈尼族彝族自治县" },
    {
      "areaCode": "530822",
      "areaName": "墨江哈尼族自治县" },
    {
      "areaCode": "530823",
      "areaName": "景东彝族自治县" },
    {
      "areaCode": "530824",
      "areaName": "景谷傣族彝族自治县" },
    {
      "areaCode": "530825",
      "areaName": "镇沅彝族哈尼族拉祜族自治县" },
    {
      "areaCode": "530826",
      "areaName": "江城哈尼族彝族自治县" },
    {
      "areaCode": "530827",
      "areaName": "孟连傣族拉祜族佤族自治县" },
    {
      "areaCode": "530828",
      "areaName": "澜沧拉祜族自治县" },
    {
      "areaCode": "530829",
      "areaName": "西盟佤族自治县" }] },

  {
    "cityCode": "530900",
    "cityName": "临沧市",
    "mallAreaList": [{
      "areaCode": "530902",
      "areaName": "临翔区" },
    {
      "areaCode": "530921",
      "areaName": "凤庆县" },
    {
      "areaCode": "530922",
      "areaName": "云县" },
    {
      "areaCode": "530923",
      "areaName": "永德县" },
    {
      "areaCode": "530924",
      "areaName": "镇康县" },
    {
      "areaCode": "530925",
      "areaName": "双江拉祜族佤族布朗族傣族自治县" },
    {
      "areaCode": "530926",
      "areaName": "耿马傣族佤族自治县" },
    {
      "areaCode": "530927",
      "areaName": "沧源佤族自治县" }] },

  {
    "cityCode": "532300",
    "cityName": "楚雄彝族自治州",
    "mallAreaList": [{
      "areaCode": "532301",
      "areaName": "楚雄市" },
    {
      "areaCode": "532322",
      "areaName": "双柏县" },
    {
      "areaCode": "532323",
      "areaName": "牟定县" },
    {
      "areaCode": "532324",
      "areaName": "南华县" },
    {
      "areaCode": "532325",
      "areaName": "姚安县" },
    {
      "areaCode": "532326",
      "areaName": "大姚县" },
    {
      "areaCode": "532327",
      "areaName": "永仁县" },
    {
      "areaCode": "532328",
      "areaName": "元谋县" },
    {
      "areaCode": "532329",
      "areaName": "武定县" },
    {
      "areaCode": "532331",
      "areaName": "禄丰县" }] },

  {
    "cityCode": "532500",
    "cityName": "红河哈尼族彝族自治州",
    "mallAreaList": [{
      "areaCode": "532501",
      "areaName": "个旧市" },
    {
      "areaCode": "532502",
      "areaName": "开远市" },
    {
      "areaCode": "532503",
      "areaName": "蒙自市" },
    {
      "areaCode": "532504",
      "areaName": "弥勒市" },
    {
      "areaCode": "532523",
      "areaName": "屏边苗族自治县" },
    {
      "areaCode": "532524",
      "areaName": "建水县" },
    {
      "areaCode": "532525",
      "areaName": "石屏县" },
    {
      "areaCode": "532527",
      "areaName": "泸西县" },
    {
      "areaCode": "532528",
      "areaName": "元阳县" },
    {
      "areaCode": "532529",
      "areaName": "红河县" },
    {
      "areaCode": "532530",
      "areaName": "金平苗族瑶族傣族自治县" },
    {
      "areaCode": "532531",
      "areaName": "绿春县" },
    {
      "areaCode": "532532",
      "areaName": "河口瑶族自治县" }] },

  {
    "cityCode": "532600",
    "cityName": "文山壮族苗族自治州",
    "mallAreaList": [{
      "areaCode": "532601",
      "areaName": "文山市" },
    {
      "areaCode": "532622",
      "areaName": "砚山县" },
    {
      "areaCode": "532623",
      "areaName": "西畴县" },
    {
      "areaCode": "532624",
      "areaName": "麻栗坡县" },
    {
      "areaCode": "532625",
      "areaName": "马关县" },
    {
      "areaCode": "532626",
      "areaName": "丘北县" },
    {
      "areaCode": "532627",
      "areaName": "广南县" },
    {
      "areaCode": "532628",
      "areaName": "富宁县" }] },

  {
    "cityCode": "532800",
    "cityName": "西双版纳傣族自治州",
    "mallAreaList": [{
      "areaCode": "532801",
      "areaName": "景洪市" },
    {
      "areaCode": "532822",
      "areaName": "勐海县" },
    {
      "areaCode": "532823",
      "areaName": "勐腊县" }] },

  {
    "cityCode": "532900",
    "cityName": "大理白族自治州",
    "mallAreaList": [{
      "areaCode": "532901",
      "areaName": "大理市" },
    {
      "areaCode": "532922",
      "areaName": "漾濞彝族自治县" },
    {
      "areaCode": "532923",
      "areaName": "祥云县" },
    {
      "areaCode": "532924",
      "areaName": "宾川县" },
    {
      "areaCode": "532925",
      "areaName": "弥渡县" },
    {
      "areaCode": "532926",
      "areaName": "南涧彝族自治县" },
    {
      "areaCode": "532927",
      "areaName": "巍山彝族回族自治县" },
    {
      "areaCode": "532928",
      "areaName": "永平县" },
    {
      "areaCode": "532929",
      "areaName": "云龙县" },
    {
      "areaCode": "532930",
      "areaName": "洱源县" },
    {
      "areaCode": "532931",
      "areaName": "剑川县" },
    {
      "areaCode": "532932",
      "areaName": "鹤庆县" }] },

  {
    "cityCode": "533100",
    "cityName": "德宏傣族景颇族自治州",
    "mallAreaList": [{
      "areaCode": "533102",
      "areaName": "瑞丽市" },
    {
      "areaCode": "533103",
      "areaName": "芒市" },
    {
      "areaCode": "533122",
      "areaName": "梁河县" },
    {
      "areaCode": "533123",
      "areaName": "盈江县" },
    {
      "areaCode": "533124",
      "areaName": "陇川县" }] },

  {
    "cityCode": "533300",
    "cityName": "怒江傈僳族自治州",
    "mallAreaList": [{
      "areaCode": "533321",
      "areaName": "泸水县" },
    {
      "areaCode": "533323",
      "areaName": "福贡县" },
    {
      "areaCode": "533324",
      "areaName": "贡山独龙族怒族自治县" },
    {
      "areaCode": "533325",
      "areaName": "兰坪白族普米族自治县" }] },

  {
    "cityCode": "533400",
    "cityName": "迪庆藏族自治州",
    "mallAreaList": [{
      "areaCode": "533421",
      "areaName": "香格里拉县" },
    {
      "areaCode": "533422",
      "areaName": "德钦县" },
    {
      "areaCode": "533423",
      "areaName": "维西傈僳族自治县" }] }] },


{
  "provinceCode": "540000",
  "provinceName": "西藏自治区",
  "mallCityList": [{
    "cityCode": "540100",
    "cityName": "拉萨市",
    "mallAreaList": [{
      "areaCode": "540102",
      "areaName": "城关区" },
    {
      "areaCode": "540121",
      "areaName": "林周县" },
    {
      "areaCode": "540122",
      "areaName": "当雄县" },
    {
      "areaCode": "540123",
      "areaName": "尼木县" },
    {
      "areaCode": "540124",
      "areaName": "曲水县" },
    {
      "areaCode": "540125",
      "areaName": "堆龙德庆县" },
    {
      "areaCode": "540126",
      "areaName": "达孜县" },
    {
      "areaCode": "540127",
      "areaName": "墨竹工卡县" }] },

  {
    "cityCode": "542100",
    "cityName": "昌都地区",
    "mallAreaList": [{
      "areaCode": "542121",
      "areaName": "昌都县" },
    {
      "areaCode": "542122",
      "areaName": "江达县" },
    {
      "areaCode": "542123",
      "areaName": "贡觉县" },
    {
      "areaCode": "542124",
      "areaName": "类乌齐县" },
    {
      "areaCode": "542125",
      "areaName": "丁青县" },
    {
      "areaCode": "542126",
      "areaName": "察雅县" },
    {
      "areaCode": "542127",
      "areaName": "八宿县" },
    {
      "areaCode": "542128",
      "areaName": "左贡县" },
    {
      "areaCode": "542129",
      "areaName": "芒康县" },
    {
      "areaCode": "542132",
      "areaName": "洛隆县" },
    {
      "areaCode": "542133",
      "areaName": "边坝县" }] },

  {
    "cityCode": "542200",
    "cityName": "山南地区",
    "mallAreaList": [{
      "areaCode": "542221",
      "areaName": "乃东县" },
    {
      "areaCode": "542222",
      "areaName": "扎囊县" },
    {
      "areaCode": "542223",
      "areaName": "贡嘎县" },
    {
      "areaCode": "542224",
      "areaName": "桑日县" },
    {
      "areaCode": "542225",
      "areaName": "琼结县" },
    {
      "areaCode": "542226",
      "areaName": "曲松县" },
    {
      "areaCode": "542227",
      "areaName": "措美县" },
    {
      "areaCode": "542228",
      "areaName": "洛扎县" },
    {
      "areaCode": "542229",
      "areaName": "加查县" },
    {
      "areaCode": "542231",
      "areaName": "隆子县" },
    {
      "areaCode": "542232",
      "areaName": "错那县" },
    {
      "areaCode": "542233",
      "areaName": "浪卡子县" }] },

  {
    "cityCode": "542300",
    "cityName": "日喀则地区",
    "mallAreaList": [{
      "areaCode": "540202",
      "areaName": "桑珠孜区" },
    {
      "areaCode": "540221",
      "areaName": "南木林县" },
    {
      "areaCode": "540222",
      "areaName": "江孜县" },
    {
      "areaCode": "540223",
      "areaName": "定日县" },
    {
      "areaCode": "540224",
      "areaName": "萨迦县" },
    {
      "areaCode": "540225",
      "areaName": "拉孜县" },
    {
      "areaCode": "540226",
      "areaName": "昂仁县" },
    {
      "areaCode": "540227",
      "areaName": "谢通门县" },
    {
      "areaCode": "540228",
      "areaName": "白朗县" },
    {
      "areaCode": "540229",
      "areaName": "仁布县" },
    {
      "areaCode": "540230",
      "areaName": "康马县" },
    {
      "areaCode": "540231",
      "areaName": "定结县" },
    {
      "areaCode": "540232",
      "areaName": "仲巴县" },
    {
      "areaCode": "540233",
      "areaName": "亚东县" },
    {
      "areaCode": "540234",
      "areaName": "吉隆县" },
    {
      "areaCode": "540235",
      "areaName": "聂拉木县" },
    {
      "areaCode": "540236",
      "areaName": "萨嘎县" },
    {
      "areaCode": "540237",
      "areaName": "岗巴县" },
    {
      "areaCode": "542300",
      "areaName": "日喀则地区" }] },

  {
    "cityCode": "542400",
    "cityName": "那曲地区",
    "mallAreaList": [{
      "areaCode": "542421",
      "areaName": "那曲县" },
    {
      "areaCode": "542422",
      "areaName": "嘉黎县" },
    {
      "areaCode": "542423",
      "areaName": "比如县" },
    {
      "areaCode": "542424",
      "areaName": "聂荣县" },
    {
      "areaCode": "542425",
      "areaName": "安多县" },
    {
      "areaCode": "542426",
      "areaName": "申扎县" },
    {
      "areaCode": "542427",
      "areaName": "索县" },
    {
      "areaCode": "542428",
      "areaName": "班戈县" },
    {
      "areaCode": "542429",
      "areaName": "巴青县" },
    {
      "areaCode": "542430",
      "areaName": "尼玛县" },
    {
      "areaCode": "542431",
      "areaName": "双湖县" }] },

  {
    "cityCode": "542500",
    "cityName": "阿里地区",
    "mallAreaList": [{
      "areaCode": "542521",
      "areaName": "普兰县" },
    {
      "areaCode": "542522",
      "areaName": "札达县" },
    {
      "areaCode": "542523",
      "areaName": "噶尔县" },
    {
      "areaCode": "542524",
      "areaName": "日土县" },
    {
      "areaCode": "542525",
      "areaName": "革吉县" },
    {
      "areaCode": "542526",
      "areaName": "改则县" },
    {
      "areaCode": "542527",
      "areaName": "措勤县" }] },

  {
    "cityCode": "542600",
    "cityName": "林芝地区",
    "mallAreaList": [{
      "areaCode": "542621",
      "areaName": "林芝县" },
    {
      "areaCode": "542622",
      "areaName": "工布江达县" },
    {
      "areaCode": "542623",
      "areaName": "米林县" },
    {
      "areaCode": "542624",
      "areaName": "墨脱县" },
    {
      "areaCode": "542625",
      "areaName": "波密县" },
    {
      "areaCode": "542626",
      "areaName": "察隅县" },
    {
      "areaCode": "542627",
      "areaName": "朗县" }] }] },


{
  "provinceCode": "610000",
  "provinceName": "陕西省",
  "mallCityList": [{
    "cityCode": "610100",
    "cityName": "西安市",
    "mallAreaList": [{
      "areaCode": "610102",
      "areaName": "新城区" },
    {
      "areaCode": "610103",
      "areaName": "碑林区" },
    {
      "areaCode": "610104",
      "areaName": "莲湖区" },
    {
      "areaCode": "610111",
      "areaName": "灞桥区" },
    {
      "areaCode": "610112",
      "areaName": "未央区" },
    {
      "areaCode": "610113",
      "areaName": "雁塔区" },
    {
      "areaCode": "610114",
      "areaName": "阎良区" },
    {
      "areaCode": "610115",
      "areaName": "临潼区" },
    {
      "areaCode": "610116",
      "areaName": "长安区" },
    {
      "areaCode": "610122",
      "areaName": "蓝田县" },
    {
      "areaCode": "610124",
      "areaName": "周至县" },
    {
      "areaCode": "610125",
      "areaName": "户县" },
    {
      "areaCode": "610126",
      "areaName": "高陵县" }] },

  {
    "cityCode": "610200",
    "cityName": "铜川市",
    "mallAreaList": [{
      "areaCode": "610202",
      "areaName": "王益区" },
    {
      "areaCode": "610203",
      "areaName": "印台区" },
    {
      "areaCode": "610204",
      "areaName": "耀州区" },
    {
      "areaCode": "610222",
      "areaName": "宜君县" }] },

  {
    "cityCode": "610300",
    "cityName": "宝鸡市",
    "mallAreaList": [{
      "areaCode": "610302",
      "areaName": "渭滨区" },
    {
      "areaCode": "610303",
      "areaName": "金台区" },
    {
      "areaCode": "610304",
      "areaName": "陈仓区" },
    {
      "areaCode": "610322",
      "areaName": "凤翔县" },
    {
      "areaCode": "610323",
      "areaName": "岐山县" },
    {
      "areaCode": "610324",
      "areaName": "扶风县" },
    {
      "areaCode": "610326",
      "areaName": "眉县" },
    {
      "areaCode": "610327",
      "areaName": "陇县" },
    {
      "areaCode": "610328",
      "areaName": "千阳县" },
    {
      "areaCode": "610329",
      "areaName": "麟游县" },
    {
      "areaCode": "610330",
      "areaName": "凤县" },
    {
      "areaCode": "610331",
      "areaName": "太白县" }] },

  {
    "cityCode": "610400",
    "cityName": "咸阳市",
    "mallAreaList": [{
      "areaCode": "610402",
      "areaName": "秦都区" },
    {
      "areaCode": "610403",
      "areaName": "杨陵区" },
    {
      "areaCode": "610404",
      "areaName": "渭城区" },
    {
      "areaCode": "610422",
      "areaName": "三原县" },
    {
      "areaCode": "610423",
      "areaName": "泾阳县" },
    {
      "areaCode": "610424",
      "areaName": "乾县" },
    {
      "areaCode": "610425",
      "areaName": "礼泉县" },
    {
      "areaCode": "610426",
      "areaName": "永寿县" },
    {
      "areaCode": "610427",
      "areaName": "彬县" },
    {
      "areaCode": "610428",
      "areaName": "长武县" },
    {
      "areaCode": "610429",
      "areaName": "旬邑县" },
    {
      "areaCode": "610430",
      "areaName": "淳化县" },
    {
      "areaCode": "610431",
      "areaName": "武功县" },
    {
      "areaCode": "610481",
      "areaName": "兴平市" }] },

  {
    "cityCode": "610500",
    "cityName": "渭南市",
    "mallAreaList": [{
      "areaCode": "610502",
      "areaName": "临渭区" },
    {
      "areaCode": "610521",
      "areaName": "华县" },
    {
      "areaCode": "610522",
      "areaName": "潼关县" },
    {
      "areaCode": "610523",
      "areaName": "大荔县" },
    {
      "areaCode": "610524",
      "areaName": "合阳县" },
    {
      "areaCode": "610525",
      "areaName": "澄城县" },
    {
      "areaCode": "610526",
      "areaName": "蒲城县" },
    {
      "areaCode": "610527",
      "areaName": "白水县" },
    {
      "areaCode": "610528",
      "areaName": "富平县" },
    {
      "areaCode": "610581",
      "areaName": "韩城市" },
    {
      "areaCode": "610582",
      "areaName": "华阴市" }] },

  {
    "cityCode": "610600",
    "cityName": "延安市",
    "mallAreaList": [{
      "areaCode": "610602",
      "areaName": "宝塔区" },
    {
      "areaCode": "610621",
      "areaName": "延长县" },
    {
      "areaCode": "610622",
      "areaName": "延川县" },
    {
      "areaCode": "610623",
      "areaName": "子长县" },
    {
      "areaCode": "610624",
      "areaName": "安塞县" },
    {
      "areaCode": "610625",
      "areaName": "志丹县" },
    {
      "areaCode": "610626",
      "areaName": "吴起县" },
    {
      "areaCode": "610627",
      "areaName": "甘泉县" },
    {
      "areaCode": "610628",
      "areaName": "富县" },
    {
      "areaCode": "610629",
      "areaName": "洛川县" },
    {
      "areaCode": "610630",
      "areaName": "宜川县" },
    {
      "areaCode": "610631",
      "areaName": "黄龙县" },
    {
      "areaCode": "610632",
      "areaName": "黄陵县" }] },

  {
    "cityCode": "610700",
    "cityName": "汉中市",
    "mallAreaList": [{
      "areaCode": "610702",
      "areaName": "汉台区" },
    {
      "areaCode": "610721",
      "areaName": "南郑县" },
    {
      "areaCode": "610722",
      "areaName": "城固县" },
    {
      "areaCode": "610723",
      "areaName": "洋县" },
    {
      "areaCode": "610724",
      "areaName": "西乡县" },
    {
      "areaCode": "610725",
      "areaName": "勉县" },
    {
      "areaCode": "610726",
      "areaName": "宁强县" },
    {
      "areaCode": "610727",
      "areaName": "略阳县" },
    {
      "areaCode": "610728",
      "areaName": "镇巴县" },
    {
      "areaCode": "610729",
      "areaName": "留坝县" },
    {
      "areaCode": "610730",
      "areaName": "佛坪县" }] },

  {
    "cityCode": "610800",
    "cityName": "榆林市",
    "mallAreaList": [{
      "areaCode": "610802",
      "areaName": "榆阳区" },
    {
      "areaCode": "610821",
      "areaName": "神木县" },
    {
      "areaCode": "610822",
      "areaName": "府谷县" },
    {
      "areaCode": "610823",
      "areaName": "横山县" },
    {
      "areaCode": "610824",
      "areaName": "靖边县" },
    {
      "areaCode": "610825",
      "areaName": "定边县" },
    {
      "areaCode": "610826",
      "areaName": "绥德县" },
    {
      "areaCode": "610827",
      "areaName": "米脂县" },
    {
      "areaCode": "610828",
      "areaName": "佳县" },
    {
      "areaCode": "610829",
      "areaName": "吴堡县" },
    {
      "areaCode": "610830",
      "areaName": "清涧县" },
    {
      "areaCode": "610831",
      "areaName": "子洲县" }] },

  {
    "cityCode": "610900",
    "cityName": "安康市",
    "mallAreaList": [{
      "areaCode": "610902",
      "areaName": "汉滨区" },
    {
      "areaCode": "610921",
      "areaName": "汉阴县" },
    {
      "areaCode": "610922",
      "areaName": "石泉县" },
    {
      "areaCode": "610923",
      "areaName": "宁陕县" },
    {
      "areaCode": "610924",
      "areaName": "紫阳县" },
    {
      "areaCode": "610925",
      "areaName": "岚皋县" },
    {
      "areaCode": "610926",
      "areaName": "平利县" },
    {
      "areaCode": "610927",
      "areaName": "镇坪县" },
    {
      "areaCode": "610928",
      "areaName": "旬阳县" },
    {
      "areaCode": "610929",
      "areaName": "白河县" }] },

  {
    "cityCode": "611000",
    "cityName": "商洛市",
    "mallAreaList": [{
      "areaCode": "611002",
      "areaName": "商州区" },
    {
      "areaCode": "611021",
      "areaName": "洛南县" },
    {
      "areaCode": "611022",
      "areaName": "丹凤县" },
    {
      "areaCode": "611023",
      "areaName": "商南县" },
    {
      "areaCode": "611024",
      "areaName": "山阳县" },
    {
      "areaCode": "611025",
      "areaName": "镇安县" },
    {
      "areaCode": "611026",
      "areaName": "柞水县" }] }] },


{
  "provinceCode": "620000",
  "provinceName": "甘肃省",
  "mallCityList": [{
    "cityCode": "620100",
    "cityName": "兰州市",
    "mallAreaList": [{
      "areaCode": "620102",
      "areaName": "城关区" },
    {
      "areaCode": "620103",
      "areaName": "七里河区" },
    {
      "areaCode": "620104",
      "areaName": "西固区" },
    {
      "areaCode": "620105",
      "areaName": "安宁区" },
    {
      "areaCode": "620111",
      "areaName": "红古区" },
    {
      "areaCode": "620121",
      "areaName": "永登县" },
    {
      "areaCode": "620122",
      "areaName": "皋兰县" },
    {
      "areaCode": "620123",
      "areaName": "榆中县" }] },

  {
    "cityCode": "620200",
    "cityName": "嘉峪关市",
    "mallAreaList": [{
      "areaCode": "620201",
      "areaName": "嘉峪关市辖区" }] },

  {
    "cityCode": "620300",
    "cityName": "金昌市",
    "mallAreaList": [{
      "areaCode": "620302",
      "areaName": "金川区" },
    {
      "areaCode": "620321",
      "areaName": "永昌县" }] },

  {
    "cityCode": "620400",
    "cityName": "白银市",
    "mallAreaList": [{
      "areaCode": "620402",
      "areaName": "白银区" },
    {
      "areaCode": "620403",
      "areaName": "平川区" },
    {
      "areaCode": "620421",
      "areaName": "靖远县" },
    {
      "areaCode": "620422",
      "areaName": "会宁县" },
    {
      "areaCode": "620423",
      "areaName": "景泰县" }] },

  {
    "cityCode": "620500",
    "cityName": "天水市",
    "mallAreaList": [{
      "areaCode": "620502",
      "areaName": "秦州区" },
    {
      "areaCode": "620503",
      "areaName": "麦积区" },
    {
      "areaCode": "620521",
      "areaName": "清水县" },
    {
      "areaCode": "620522",
      "areaName": "秦安县" },
    {
      "areaCode": "620523",
      "areaName": "甘谷县" },
    {
      "areaCode": "620524",
      "areaName": "武山县" },
    {
      "areaCode": "620525",
      "areaName": "张家川回族自治县" }] },

  {
    "cityCode": "620600",
    "cityName": "武威市",
    "mallAreaList": [{
      "areaCode": "620602",
      "areaName": "凉州区" },
    {
      "areaCode": "620621",
      "areaName": "民勤县" },
    {
      "areaCode": "620622",
      "areaName": "古浪县" },
    {
      "areaCode": "620623",
      "areaName": "天祝藏族自治县" }] },

  {
    "cityCode": "620700",
    "cityName": "张掖市",
    "mallAreaList": [{
      "areaCode": "620702",
      "areaName": "甘州区" },
    {
      "areaCode": "620721",
      "areaName": "肃南裕固族自治县" },
    {
      "areaCode": "620722",
      "areaName": "民乐县" },
    {
      "areaCode": "620723",
      "areaName": "临泽县" },
    {
      "areaCode": "620724",
      "areaName": "高台县" },
    {
      "areaCode": "620725",
      "areaName": "山丹县" }] },

  {
    "cityCode": "620800",
    "cityName": "平凉市",
    "mallAreaList": [{
      "areaCode": "620802",
      "areaName": "崆峒区" },
    {
      "areaCode": "620821",
      "areaName": "泾川县" },
    {
      "areaCode": "620822",
      "areaName": "灵台县" },
    {
      "areaCode": "620823",
      "areaName": "崇信县" },
    {
      "areaCode": "620824",
      "areaName": "华亭县" },
    {
      "areaCode": "620825",
      "areaName": "庄浪县" },
    {
      "areaCode": "620826",
      "areaName": "静宁县" }] },

  {
    "cityCode": "620900",
    "cityName": "酒泉市",
    "mallAreaList": [{
      "areaCode": "620902",
      "areaName": "肃州区" },
    {
      "areaCode": "620921",
      "areaName": "金塔县" },
    {
      "areaCode": "620922",
      "areaName": "瓜州县" },
    {
      "areaCode": "620923",
      "areaName": "肃北蒙古族自治县" },
    {
      "areaCode": "620924",
      "areaName": "阿克塞哈萨克族自治县" },
    {
      "areaCode": "620981",
      "areaName": "玉门市" },
    {
      "areaCode": "620982",
      "areaName": "敦煌市" }] },

  {
    "cityCode": "621000",
    "cityName": "庆阳市",
    "mallAreaList": [{
      "areaCode": "621002",
      "areaName": "西峰区" },
    {
      "areaCode": "621021",
      "areaName": "庆城县" },
    {
      "areaCode": "621022",
      "areaName": "环县" },
    {
      "areaCode": "621023",
      "areaName": "华池县" },
    {
      "areaCode": "621024",
      "areaName": "合水县" },
    {
      "areaCode": "621025",
      "areaName": "正宁县" },
    {
      "areaCode": "621026",
      "areaName": "宁县" },
    {
      "areaCode": "621027",
      "areaName": "镇原县" }] },

  {
    "cityCode": "621100",
    "cityName": "定西市",
    "mallAreaList": [{
      "areaCode": "621102",
      "areaName": "安定区" },
    {
      "areaCode": "621121",
      "areaName": "通渭县" },
    {
      "areaCode": "621122",
      "areaName": "陇西县" },
    {
      "areaCode": "621123",
      "areaName": "渭源县" },
    {
      "areaCode": "621124",
      "areaName": "临洮县" },
    {
      "areaCode": "621125",
      "areaName": "漳县" },
    {
      "areaCode": "621126",
      "areaName": "岷县" }] },

  {
    "cityCode": "621200",
    "cityName": "陇南市",
    "mallAreaList": [{
      "areaCode": "621202",
      "areaName": "武都区" },
    {
      "areaCode": "621221",
      "areaName": "成县" },
    {
      "areaCode": "621222",
      "areaName": "文县" },
    {
      "areaCode": "621223",
      "areaName": "宕昌县" },
    {
      "areaCode": "621224",
      "areaName": "康县" },
    {
      "areaCode": "621225",
      "areaName": "西和县" },
    {
      "areaCode": "621226",
      "areaName": "礼县" },
    {
      "areaCode": "621227",
      "areaName": "徽县" },
    {
      "areaCode": "621228",
      "areaName": "两当县" }] },

  {
    "cityCode": "622900",
    "cityName": "临夏回族自治州",
    "mallAreaList": [{
      "areaCode": "622901",
      "areaName": "临夏市" },
    {
      "areaCode": "622921",
      "areaName": "临夏县" },
    {
      "areaCode": "622922",
      "areaName": "康乐县" },
    {
      "areaCode": "622923",
      "areaName": "永靖县" },
    {
      "areaCode": "622924",
      "areaName": "广河县" },
    {
      "areaCode": "622925",
      "areaName": "和政县" },
    {
      "areaCode": "622926",
      "areaName": "东乡族自治县" },
    {
      "areaCode": "622927",
      "areaName": "积石山保安族东乡族撒拉族自治县" }] },

  {
    "cityCode": "623000",
    "cityName": "甘南藏族自治州",
    "mallAreaList": [{
      "areaCode": "623001",
      "areaName": "合作市" },
    {
      "areaCode": "623021",
      "areaName": "临潭县" },
    {
      "areaCode": "623022",
      "areaName": "卓尼县" },
    {
      "areaCode": "623023",
      "areaName": "舟曲县" },
    {
      "areaCode": "623024",
      "areaName": "迭部县" },
    {
      "areaCode": "623025",
      "areaName": "玛曲县" },
    {
      "areaCode": "623026",
      "areaName": "碌曲县" },
    {
      "areaCode": "623027",
      "areaName": "夏河县" }] }] },


{
  "provinceCode": "630000",
  "provinceName": "青海省",
  "mallCityList": [{
    "cityCode": "630100",
    "cityName": "西宁市",
    "mallAreaList": [{
      "areaCode": "630102",
      "areaName": "城东区" },
    {
      "areaCode": "630103",
      "areaName": "城中区" },
    {
      "areaCode": "630104",
      "areaName": "城西区" },
    {
      "areaCode": "630105",
      "areaName": "城北区" },
    {
      "areaCode": "630121",
      "areaName": "大通回族土族自治县" },
    {
      "areaCode": "630122",
      "areaName": "湟中县" },
    {
      "areaCode": "630123",
      "areaName": "湟源县" }] },

  {
    "cityCode": "632100",
    "cityName": "海东地区",
    "mallAreaList": [{
      "areaCode": "632100",
      "areaName": "海东地区" },
    {
      "areaCode": "632121",
      "areaName": "平安县" },
    {
      "areaCode": "632122",
      "areaName": "民和回族土族自治县" },
    {
      "areaCode": "632123",
      "areaName": "乐都县" },
    {
      "areaCode": "632126",
      "areaName": "互助土族自治县" },
    {
      "areaCode": "632127",
      "areaName": "化隆回族自治县" },
    {
      "areaCode": "632128",
      "areaName": "循化撒拉族自治县" }] },

  {
    "cityCode": "632200",
    "cityName": "海北藏族自治州",
    "mallAreaList": [{
      "areaCode": "632221",
      "areaName": "门源回族自治县" },
    {
      "areaCode": "632222",
      "areaName": "祁连县" },
    {
      "areaCode": "632223",
      "areaName": "海晏县" },
    {
      "areaCode": "632224",
      "areaName": "刚察县" }] },

  {
    "cityCode": "632300",
    "cityName": "黄南藏族自治州",
    "mallAreaList": [{
      "areaCode": "632321",
      "areaName": "同仁县" },
    {
      "areaCode": "632322",
      "areaName": "尖扎县" },
    {
      "areaCode": "632323",
      "areaName": "泽库县" },
    {
      "areaCode": "632324",
      "areaName": "河南蒙古族自治县" }] },

  {
    "cityCode": "632500",
    "cityName": "海南藏族自治州",
    "mallAreaList": [{
      "areaCode": "632521",
      "areaName": "共和县" },
    {
      "areaCode": "632522",
      "areaName": "同德县" },
    {
      "areaCode": "632523",
      "areaName": "贵德县" },
    {
      "areaCode": "632524",
      "areaName": "兴海县" },
    {
      "areaCode": "632525",
      "areaName": "贵南县" }] },

  {
    "cityCode": "632600",
    "cityName": "果洛藏族自治州",
    "mallAreaList": [{
      "areaCode": "632621",
      "areaName": "玛沁县" },
    {
      "areaCode": "632622",
      "areaName": "班玛县" },
    {
      "areaCode": "632623",
      "areaName": "甘德县" },
    {
      "areaCode": "632624",
      "areaName": "达日县" },
    {
      "areaCode": "632625",
      "areaName": "久治县" },
    {
      "areaCode": "632626",
      "areaName": "玛多县" }] },

  {
    "cityCode": "632700",
    "cityName": "玉树藏族自治州",
    "mallAreaList": [{
      "areaCode": "632701",
      "areaName": "玉树市" },
    {
      "areaCode": "632722",
      "areaName": "杂多县" },
    {
      "areaCode": "632723",
      "areaName": "称多县" },
    {
      "areaCode": "632724",
      "areaName": "治多县" },
    {
      "areaCode": "632725",
      "areaName": "囊谦县" },
    {
      "areaCode": "632726",
      "areaName": "曲麻莱县" }] },

  {
    "cityCode": "632800",
    "cityName": "海西蒙古族藏族自治州",
    "mallAreaList": [{
      "areaCode": "632801",
      "areaName": "格尔木市" },
    {
      "areaCode": "632802",
      "areaName": "德令哈市" },
    {
      "areaCode": "632821",
      "areaName": "乌兰县" },
    {
      "areaCode": "632822",
      "areaName": "都兰县" },
    {
      "areaCode": "632823",
      "areaName": "天峻县" }] }] },


{
  "provinceCode": "640000",
  "provinceName": "宁夏回族自治区",
  "mallCityList": [{
    "cityCode": "640100",
    "cityName": "银川市",
    "mallAreaList": [{
      "areaCode": "640104",
      "areaName": "兴庆区" },
    {
      "areaCode": "640105",
      "areaName": "西夏区" },
    {
      "areaCode": "640106",
      "areaName": "金凤区" },
    {
      "areaCode": "640121",
      "areaName": "永宁县" },
    {
      "areaCode": "640122",
      "areaName": "贺兰县" },
    {
      "areaCode": "640181",
      "areaName": "灵武市" }] },

  {
    "cityCode": "640200",
    "cityName": "石嘴山市",
    "mallAreaList": [{
      "areaCode": "640202",
      "areaName": "大武口区" },
    {
      "areaCode": "640205",
      "areaName": "惠农区" },
    {
      "areaCode": "640221",
      "areaName": "平罗县" }] },

  {
    "cityCode": "640300",
    "cityName": "吴忠市",
    "mallAreaList": [{
      "areaCode": "640302",
      "areaName": "利通区" },
    {
      "areaCode": "640303",
      "areaName": "红寺堡区" },
    {
      "areaCode": "640323",
      "areaName": "盐池县" },
    {
      "areaCode": "640324",
      "areaName": "同心县" },
    {
      "areaCode": "640381",
      "areaName": "青铜峡市" }] },

  {
    "cityCode": "640400",
    "cityName": "固原市",
    "mallAreaList": [{
      "areaCode": "640402",
      "areaName": "原州区" },
    {
      "areaCode": "640422",
      "areaName": "西吉县" },
    {
      "areaCode": "640423",
      "areaName": "隆德县" },
    {
      "areaCode": "640424",
      "areaName": "泾源县" },
    {
      "areaCode": "640425",
      "areaName": "彭阳县" }] },

  {
    "cityCode": "640500",
    "cityName": "中卫市",
    "mallAreaList": [{
      "areaCode": "640502",
      "areaName": "沙坡头区" },
    {
      "areaCode": "640521",
      "areaName": "中宁县" },
    {
      "areaCode": "640522",
      "areaName": "海原县" }] }] },


{
  "provinceCode": "650000",
  "provinceName": "新疆维吾尔自治区",
  "mallCityList": [{
    "cityCode": "650100",
    "cityName": "乌鲁木齐市",
    "mallAreaList": [{
      "areaCode": "650102",
      "areaName": "天山区" },
    {
      "areaCode": "650103",
      "areaName": "沙依巴克区" },
    {
      "areaCode": "650104",
      "areaName": "新市区" },
    {
      "areaCode": "650105",
      "areaName": "水磨沟区" },
    {
      "areaCode": "650106",
      "areaName": "头屯河区" },
    {
      "areaCode": "650107",
      "areaName": "达坂城区" },
    {
      "areaCode": "650109",
      "areaName": "米东区" },
    {
      "areaCode": "650121",
      "areaName": "乌鲁木齐县" }] },

  {
    "cityCode": "650200",
    "cityName": "克拉玛依市",
    "mallAreaList": [{
      "areaCode": "650202",
      "areaName": "独山子区" },
    {
      "areaCode": "650203",
      "areaName": "克拉玛依区" },
    {
      "areaCode": "650204",
      "areaName": "白碱滩区" },
    {
      "areaCode": "650205",
      "areaName": "乌尔禾区" }] },

  {
    "cityCode": "652100",
    "cityName": "吐鲁番地区",
    "mallAreaList": [{
      "areaCode": "652101",
      "areaName": "吐鲁番市" },
    {
      "areaCode": "652122",
      "areaName": "鄯善县" },
    {
      "areaCode": "652123",
      "areaName": "托克逊县" }] },

  {
    "cityCode": "652200",
    "cityName": "哈密地区",
    "mallAreaList": [{
      "areaCode": "652201",
      "areaName": "哈密市" },
    {
      "areaCode": "652222",
      "areaName": "巴里坤哈萨克自治县" },
    {
      "areaCode": "652223",
      "areaName": "伊吾县" }] },

  {
    "cityCode": "652300",
    "cityName": "昌吉回族自治州",
    "mallAreaList": [{
      "areaCode": "652301",
      "areaName": "昌吉市" },
    {
      "areaCode": "652302",
      "areaName": "阜康市" },
    {
      "areaCode": "652323",
      "areaName": "呼图壁县" },
    {
      "areaCode": "652324",
      "areaName": "玛纳斯县" },
    {
      "areaCode": "652325",
      "areaName": "奇台县" },
    {
      "areaCode": "652327",
      "areaName": "吉木萨尔县" },
    {
      "areaCode": "652328",
      "areaName": "木垒哈萨克自治县" }] },

  {
    "cityCode": "652700",
    "cityName": "博尔塔拉蒙古自治州",
    "mallAreaList": [{
      "areaCode": "652701",
      "areaName": "博乐市" },
    {
      "areaCode": "652702",
      "areaName": "阿拉山口市" },
    {
      "areaCode": "652722",
      "areaName": "精河县" },
    {
      "areaCode": "652723",
      "areaName": "温泉县" }] },

  {
    "cityCode": "652800",
    "cityName": "巴音郭楞蒙古自治州",
    "mallAreaList": [{
      "areaCode": "652801",
      "areaName": "库尔勒市" },
    {
      "areaCode": "652822",
      "areaName": "轮台县" },
    {
      "areaCode": "652823",
      "areaName": "尉犁县" },
    {
      "areaCode": "652824",
      "areaName": "若羌县" },
    {
      "areaCode": "652825",
      "areaName": "且末县" },
    {
      "areaCode": "652826",
      "areaName": "焉耆回族自治县" },
    {
      "areaCode": "652827",
      "areaName": "和静县" },
    {
      "areaCode": "652828",
      "areaName": "和硕县" },
    {
      "areaCode": "652829",
      "areaName": "博湖县" }] },

  {
    "cityCode": "652900",
    "cityName": "阿克苏地区",
    "mallAreaList": [{
      "areaCode": "652901",
      "areaName": "阿克苏市" },
    {
      "areaCode": "652922",
      "areaName": "温宿县" },
    {
      "areaCode": "652923",
      "areaName": "库车县" },
    {
      "areaCode": "652924",
      "areaName": "沙雅县" },
    {
      "areaCode": "652925",
      "areaName": "新和县" },
    {
      "areaCode": "652926",
      "areaName": "拜城县" },
    {
      "areaCode": "652927",
      "areaName": "乌什县" },
    {
      "areaCode": "652928",
      "areaName": "阿瓦提县" },
    {
      "areaCode": "652929",
      "areaName": "柯坪县" }] },

  {
    "cityCode": "653000",
    "cityName": "克孜勒苏柯尔克孜自治州",
    "mallAreaList": [{
      "areaCode": "653001",
      "areaName": "阿图什市" },
    {
      "areaCode": "653022",
      "areaName": "阿克陶县" },
    {
      "areaCode": "653023",
      "areaName": "阿合奇县" },
    {
      "areaCode": "653024",
      "areaName": "乌恰县" }] },

  {
    "cityCode": "653100",
    "cityName": "喀什地区",
    "mallAreaList": [{
      "areaCode": "653101",
      "areaName": "喀什市" },
    {
      "areaCode": "653121",
      "areaName": "疏附县" },
    {
      "areaCode": "653122",
      "areaName": "疏勒县" },
    {
      "areaCode": "653123",
      "areaName": "英吉沙县" },
    {
      "areaCode": "653124",
      "areaName": "泽普县" },
    {
      "areaCode": "653125",
      "areaName": "莎车县" },
    {
      "areaCode": "653126",
      "areaName": "叶城县" },
    {
      "areaCode": "653127",
      "areaName": "麦盖提县" },
    {
      "areaCode": "653128",
      "areaName": "岳普湖县" },
    {
      "areaCode": "653129",
      "areaName": "伽师县" },
    {
      "areaCode": "653130",
      "areaName": "巴楚县" },
    {
      "areaCode": "653131",
      "areaName": "塔什库尔干塔吉克自治县" }] },

  {
    "cityCode": "653200",
    "cityName": "和田地区",
    "mallAreaList": [{
      "areaCode": "653201",
      "areaName": "和田市" },
    {
      "areaCode": "653221",
      "areaName": "和田县" },
    {
      "areaCode": "653222",
      "areaName": "墨玉县" },
    {
      "areaCode": "653223",
      "areaName": "皮山县" },
    {
      "areaCode": "653224",
      "areaName": "洛浦县" },
    {
      "areaCode": "653225",
      "areaName": "策勒县" },
    {
      "areaCode": "653226",
      "areaName": "于田县" },
    {
      "areaCode": "653227",
      "areaName": "民丰县" }] },

  {
    "cityCode": "654000",
    "cityName": "伊犁哈萨克自治州",
    "mallAreaList": [{
      "areaCode": "654002",
      "areaName": "伊宁市" },
    {
      "areaCode": "654003",
      "areaName": "奎屯市" },
    {
      "areaCode": "654021",
      "areaName": "伊宁县" },
    {
      "areaCode": "654022",
      "areaName": "察布查尔锡伯自治县" },
    {
      "areaCode": "654023",
      "areaName": "霍城县" },
    {
      "areaCode": "654024",
      "areaName": "巩留县" },
    {
      "areaCode": "654025",
      "areaName": "新源县" },
    {
      "areaCode": "654026",
      "areaName": "昭苏县" },
    {
      "areaCode": "654027",
      "areaName": "特克斯县" },
    {
      "areaCode": "654028",
      "areaName": "尼勒克县" }] },

  {
    "cityCode": "654200",
    "cityName": "塔城地区",
    "mallAreaList": [{
      "areaCode": "654201",
      "areaName": "塔城市" },
    {
      "areaCode": "654202",
      "areaName": "乌苏市" },
    {
      "areaCode": "654221",
      "areaName": "额敏县" },
    {
      "areaCode": "654223",
      "areaName": "沙湾县" },
    {
      "areaCode": "654224",
      "areaName": "托里县" },
    {
      "areaCode": "654225",
      "areaName": "裕民县" },
    {
      "areaCode": "654226",
      "areaName": "和布克赛尔蒙古自治县" }] },

  {
    "cityCode": "654300",
    "cityName": "阿勒泰地区",
    "mallAreaList": [{
      "areaCode": "654301",
      "areaName": "阿勒泰市" },
    {
      "areaCode": "654321",
      "areaName": "布尔津县" },
    {
      "areaCode": "654322",
      "areaName": "富蕴县" },
    {
      "areaCode": "654323",
      "areaName": "福海县" },
    {
      "areaCode": "654324",
      "areaName": "哈巴河县" },
    {
      "areaCode": "654325",
      "areaName": "青河县" },
    {
      "areaCode": "654326",
      "areaName": "吉木乃县" }] },

  {
    "cityCode": "659000",
    "cityName": "省直辖行政单位",
    "mallAreaList": [{
      "areaCode": "659001",
      "areaName": "石河子市" },
    {
      "areaCode": "659002",
      "areaName": "阿拉尔市" },
    {
      "areaCode": "659003",
      "areaName": "图木舒克市" }] }] },


{
  "provinceCode": "710000",
  "provinceName": "台湾省",
  "mallCityList": [] },
{
  "provinceCode": "810000",
  "provinceName": "香港特别行政区",
  "mallCityList": [] },
{
  "provinceCode": "820000",
  "provinceName": "澳门特别行政区",
  "mallCityList": [] }];var _default =


regions;exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map