/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var React = __webpack_require__(2),
	    ShareThisEmail = __webpack_require__(3);

	var rootInstance = React.render(React.createElement(ShareThisEmail, null), document.querySelectorAll('.the-form')[0]);

	if (false) {
	    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
	        getRootInstances: function getRootInstances() {
	            // Help React Hot Loader figure out the root component instances on the page:
	            return [rootInstance];
	        }
	    });
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "main.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var React = __webpack_require__(2);

	var Store = __webpack_require__(4),
	    Subject = __webpack_require__(12),
	    Body = __webpack_require__(14),
	    Link = __webpack_require__(15);

	var ShareThisEmail = React.createClass({
	    displayName: 'ShareThisEmail',

	    getInitialState: function getInitialState() {
	        return Store.getState();
	    },

	    componentDidMount: function componentDidMount() {
	        Store.addChangeListener(this._onChange);
	    },

	    componentWillUnmount: function componentWillUnmount() {
	        Store.removeChangeListener(this._onChange);
	    },

	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            React.createElement(
	                'form',
	                { className: 'col-md-8' },
	                React.createElement(Subject, { value: this.state.subject }),
	                React.createElement(Body, { value: this.state.body }),
	                React.createElement(Link, { subject: this.state.subject,
	                    body: this.state.body })
	            )
	        );
	    },

	    _onChange: function _onChange() {
	        this.setState(Store.getState());
	    }
	});

	module.exports = ShareThisEmail;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ShareThisEmail.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var EventEmitter = __webpack_require__(5).EventEmitter;

	var Dispatcher = __webpack_require__(6),
	    Constants = __webpack_require__(11);

	var CHANGE_EVENT = 'change';

	var subject = "",
	    body = "";

	var Store = Object.assign(EventEmitter.prototype, {
	    getSubject: function getSubject() {
	        return subject;
	    },

	    getBody: function getBody() {
	        return body;
	    },

	    getState: function getState() {
	        return {
	            subject: subject,
	            body: body
	        };
	    },

	    addChangeListener: function addChangeListener(callback) {
	        this.on(CHANGE_EVENT, callback);
	    },

	    removeChangeListener: function removeChangeListener(callback) {
	        this.on(CHANGE_EVENT, callback);
	    },

	    emitChange: function emitChange() {
	        this.emit(CHANGE_EVENT);
	    }
	});

	Dispatcher.register(function (action) {

	    switch (action.actionType) {

	        case Constants.UPDATE_SUBJECT:
	            subject = action.subject;
	            Store.emitChange();
	            break;

	        case Constants.UPDATE_BODY:
	            body = action.body;
	            Store.emitChange();
	            break;

	        default:
	        // no op
	    };
	});

	module.exports = Store;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Store.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 5 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var Dispatcher = __webpack_require__(7).Dispatcher;

	module.exports = new Dispatcher();

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Dispatcher.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports.Dispatcher = __webpack_require__(8);


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * 
	 * @preventMunge
	 */

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var invariant = __webpack_require__(10);

	var _prefix = 'ID_';

	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *         case 'city-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */

	var Dispatcher = (function () {
	  function Dispatcher() {
	    _classCallCheck(this, Dispatcher);

	    this._callbacks = {};
	    this._isDispatching = false;
	    this._isHandled = {};
	    this._isPending = {};
	    this._lastID = 1;
	  }

	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   */

	  Dispatcher.prototype.register = function register(callback) {
	    var id = _prefix + this._lastID++;
	    this._callbacks[id] = callback;
	    return id;
	  };

	  /**
	   * Removes a callback based on its token.
	   */

	  Dispatcher.prototype.unregister = function unregister(id) {
	    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	    delete this._callbacks[id];
	  };

	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   */

	  Dispatcher.prototype.waitFor = function waitFor(ids) {
	    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this._isPending[id]) {
	        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
	        continue;
	      }
	      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	      this._invokeCallback(id);
	    }
	  };

	  /**
	   * Dispatches a payload to all registered callbacks.
	   */

	  Dispatcher.prototype.dispatch = function dispatch(payload) {
	    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
	    this._startDispatching(payload);
	    try {
	      for (var id in this._callbacks) {
	        if (this._isPending[id]) {
	          continue;
	        }
	        this._invokeCallback(id);
	      }
	    } finally {
	      this._stopDispatching();
	    }
	  };

	  /**
	   * Is this Dispatcher currently dispatching.
	   */

	  Dispatcher.prototype.isDispatching = function isDispatching() {
	    return this._isDispatching;
	  };

	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
	    this._isPending[id] = true;
	    this._callbacks[id](this._pendingPayload);
	    this._isHandled[id] = true;
	  };

	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
	    for (var id in this._callbacks) {
	      this._isPending[id] = false;
	      this._isHandled[id] = false;
	    }
	    this._pendingPayload = payload;
	    this._isDispatching = true;
	  };

	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
	    delete this._pendingPayload;
	    this._isDispatching = false;
	  };

	  return Dispatcher;
	})();

	module.exports = Dispatcher;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function (condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	module.exports = {
	    UPDATE_SUBJECT: "update_subject",
	    UPDATE_BODY: "update_body"
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Constants.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var React = __webpack_require__(2),
	    Actions = __webpack_require__(13);

	var Subject = React.createClass({
	    displayName: 'Subject',

	    update: function update(event) {
	        Actions.update_subject(event.target.value);
	    },

	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'form-group' },
	            React.createElement(
	                'label',
	                { htmlFor: 'subject' },
	                'Subject:'
	            ),
	            React.createElement('input', { type: 'text',
	                className: 'form-control',
	                id: 'subject',
	                placeholder: 'Paste your subject line',
	                value: this.props.value,
	                onChange: this.update }),
	            React.createElement(
	                'p',
	                { className: 'help-block' },
	                'This will become the prefilled subject line.'
	            )
	        );
	    }
	});

	module.exports = Subject;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Subject.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var Dispatcher = __webpack_require__(6),
	    Constants = __webpack_require__(11);

	var Actions = {
	    update_subject: function update_subject(subject) {
	        Dispatcher.dispatch({
	            actionType: Constants.UPDATE_SUBJECT,
	            subject: subject
	        });
	    },

	    update_body: function update_body(body) {
	        Dispatcher.dispatch({
	            actionType: Constants.UPDATE_BODY,
	            body: body
	        });
	    }
	};

	module.exports = Actions;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Actions.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var React = __webpack_require__(2),
	    Actions = __webpack_require__(13);

	var Body = React.createClass({
	    displayName: 'Body',

	    update: function update(event) {
	        Actions.update_body(event.target.value);
	    },

	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'form-group' },
	            React.createElement(
	                'label',
	                { htmlFor: 'body' },
	                'Email Body:'
	            ),
	            React.createElement('textarea', { id: 'body',
	                style: { height: "300px" },
	                className: 'form-control',
	                placeholder: 'Paste your email body here. HTML is fine, we\'ll convert it to a text-only format.',
	                value: this.props.value,
	                onChange: this.update }),
	            React.createElement(
	                'p',
	                { className: 'help-block' },
	                'This will become the prefilled body.'
	            )
	        );
	    }
	});

	module.exports = Body;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Body.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var React = __webpack_require__(2),
	    toMarkdown = __webpack_require__(16);

	var Link = React.createClass({
	    displayName: 'Link',

	    build_link: function build_link() {
	        var subject = encodeURIComponent(this.props.subject),
	            body = encodeURIComponent(toMarkdown(this.props.body.replace(/(?:\r\n|\r|\n)/g, '<br />')));

	        return "mailto:?subject=" + subject + "&body=" + body;
	    },

	    render: function render() {
	        return React.createElement(
	            'p',
	            null,
	            'You\'re done! Copy this into your email: ',
	            React.createElement(
	                'a',
	                { href: this.build_link(), target: '_blank' },
	                'Email this to a friend'
	            )
	        );
	    }
	});

	module.exports = Link;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/Swizec/Documents/random-coding/sharethisemail/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Link.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * to-markdown - an HTML to Markdown converter
	 *
	 * Copyright 2011-15, Dom Christie
	 * Licenced under the MIT licence
	 *
	 */

	'use strict';

	var toMarkdown;
	var converters;
	var mdConverters = __webpack_require__(17);
	var gfmConverters = __webpack_require__(18);
	var collapse = __webpack_require__(19);

	/*
	 * Set up window and document for Node.js
	 */

	var _window = (typeof window !== 'undefined' ? window : this), _document;
	if (typeof document === 'undefined') {
	  _document = __webpack_require__(22).jsdom();
	}
	else {
	  _document = document;
	}

	/*
	 * Utilities
	 */

	function trim(string) {
	  return string.replace(/^[ \r\n\t]+|[ \r\n\t]+$/g, '');
	}

	var blocks = ['address', 'article', 'aside', 'audio', 'blockquote', 'body',
	  'canvas', 'center', 'dd', 'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption',
	  'figure', 'footer', 'form', 'frameset', 'h1', 'h2', 'h3', 'h4','h5', 'h6',
	  'header', 'hgroup', 'hr', 'html', 'isindex', 'li', 'main', 'menu', 'nav',
	  'noframes', 'noscript', 'ol', 'output', 'p', 'pre', 'section', 'table',
	  'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'ul'
	];

	function isBlock(node) {
	  return blocks.indexOf(node.nodeName.toLowerCase()) !== -1;
	}

	var voids = [
	  'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input',
	  'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'
	];

	function isVoid(node) {
	  return voids.indexOf(node.nodeName.toLowerCase()) !== -1;
	}

	/*
	 * Parsing HTML strings
	 */

	function canParseHtml() {
	  var Parser = _window.DOMParser, canParse = false;

	  // Adapted from https://gist.github.com/1129031
	  // Firefox/Opera/IE throw errors on unsupported types
	  try {
	    // WebKit returns null on unsupported types
	    if (new Parser().parseFromString('', 'text/html')) {
	      canParse = true;
	    }
	  } catch (e) {}
	  return canParse;
	}

	function createHtmlParser() {
	  var Parser = function () {};

	  Parser.prototype.parseFromString = function (string) {
	    var newDoc = _document.implementation.createHTMLDocument('');

	    if (string.toLowerCase().indexOf('<!doctype') > -1) {
	      newDoc.documentElement.innerHTML = string;
	    }
	    else {
	      newDoc.body.innerHTML = string;
	    }
	    return newDoc;
	  };
	  return Parser;
	}

	var HtmlParser = canParseHtml() ? _window.DOMParser : createHtmlParser();

	function htmlToDom(string) {
	  var tree = new HtmlParser().parseFromString(string, 'text/html');
	  collapse(tree, isBlock);
	  return tree;
	}

	/*
	 * Flattens DOM tree into single array
	 */

	function bfsOrder(node) {
	  var inqueue = [node],
	      outqueue = [],
	      elem, children, i;

	  while (inqueue.length > 0) {
	    elem = inqueue.shift();
	    outqueue.push(elem);
	    children = elem.childNodes;
	    for (i = 0 ; i < children.length; i++) {
	      if (children[i].nodeType === 1) { inqueue.push(children[i]); }
	    }
	  }
	  outqueue.shift();
	  return outqueue;
	}

	/*
	 * Contructs a Markdown string of replacement text for a given node
	 */

	function getContent(node) {
	  var text = '';
	  for (var i = 0; i < node.childNodes.length; i++) {
	    if (node.childNodes[i].nodeType === 1) {
	      text += node.childNodes[i]._replacement;
	    }
	    else if (node.childNodes[i].nodeType === 3) {
	      text += node.childNodes[i].data;
	    }
	    else { continue; }
	  }
	  return text;
	}

	/*
	 * Returns the HTML string of an element with its contents converted
	 */

	function outer(node, content) {
	  return node.cloneNode(false).outerHTML.replace('><', '>'+ content +'<');
	}

	function canConvert(node, filter) {
	  if (typeof filter === 'string') {
	    return filter === node.nodeName.toLowerCase();
	  }
	  if (Array.isArray(filter)) {
	    return filter.indexOf(node.nodeName.toLowerCase()) !== -1;
	  }
	  else if (typeof filter === 'function') {
	    return filter.call(toMarkdown, node);
	  }
	  else {
	    throw new TypeError('`filter` needs to be a string, array, or function');
	  }
	}

	function isFlankedByWhitespace(side, node) {
	  var sibling, regExp, isFlanked;

	  if (side === 'left') {
	    sibling = node.previousSibling;
	    regExp = / $/;
	  }
	  else {
	    sibling = node.nextSibling;
	    regExp = /^ /;
	  }

	  if (sibling) {
	    if (sibling.nodeType === 3) {
	      isFlanked = regExp.test(sibling.nodeValue);
	    }
	    else if(sibling.nodeType === 1 && !isBlock(sibling)) {
	      isFlanked = regExp.test(sibling.textContent);
	    }
	  }
	  return isFlanked;
	}

	function flankingWhitespace(node) {
	  var leading = '', trailing = '';

	  if (!isBlock(node)) {
	    var hasLeading = /^[ \r\n\t]/.test(node.innerHTML),
	        hasTrailing = /[ \r\n\t]$/.test(node.innerHTML);

	    if (hasLeading && !isFlankedByWhitespace('left', node)) {
	      leading = ' ';
	    }
	    if (hasTrailing && !isFlankedByWhitespace('right', node)) {
	      trailing = ' ';
	    }
	  }

	  return { leading: leading, trailing: trailing };
	}

	/*
	 * Finds a Markdown converter, gets the replacement, and sets it on
	 * `_replacement`
	 */

	function process(node) {
	  var replacement, content = getContent(node);

	  // Remove blank nodes
	  if (!isVoid(node) && !/A/.test(node.nodeName) && /^\s*$/i.test(content)) {
	    node._replacement = '';
	    return;
	  }

	  for (var i = 0; i < converters.length; i++) {
	    var converter = converters[i];

	    if (canConvert(node, converter.filter)) {
	      if (typeof converter.replacement !== 'function') {
	        throw new TypeError(
	          '`replacement` needs to be a function that returns a string'
	        );
	      }

	      var whitespace = flankingWhitespace(node);

	      if (whitespace.leading || whitespace.trailing) {
	        content = trim(content);
	      }
	      replacement = whitespace.leading +
	                    converter.replacement.call(toMarkdown, content, node) +
	                    whitespace.trailing;
	      break;
	    }
	  }

	  node._replacement = replacement;
	}

	toMarkdown = function (input, options) {
	  options = options || {};

	  if (typeof input !== 'string') {
	    throw new TypeError(input + ' is not a string');
	  }

	  // Escape potential ol triggers
	  input = input.replace(/(\d+)\. /g, '$1\\. ');

	  var clone = htmlToDom(input).body,
	      nodes = bfsOrder(clone),
	      output;

	  converters = mdConverters.slice(0);
	  if (options.gfm) {
	    converters = gfmConverters.concat(converters);
	  }

	  if (options.converters) {
	    converters = options.converters.concat(converters);
	  }

	  // Process through nodes in reverse (so deepest child elements are first).
	  for (var i = nodes.length - 1; i >= 0; i--) {
	    process(nodes[i]);
	  }
	  output = getContent(clone);

	  return output.replace(/^[\t\r\n]+|[\t\r\n\s]+$/g, '')
	               .replace(/\n\s+\n/g, '\n\n')
	               .replace(/\n{3,}/g, '\n\n');
	};

	toMarkdown.isBlock = isBlock;
	toMarkdown.isVoid = isVoid;
	toMarkdown.trim = trim;
	toMarkdown.outer = outer;

	module.exports = toMarkdown;


/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	module.exports = [
	  {
	    filter: 'p',
	    replacement: function (content) {
	      return '\n\n' + content + '\n\n';
	    }
	  },

	  {
	    filter: 'br',
	    replacement: function () {
	      return '  \n';
	    }
	  },

	  {
	    filter: ['h1', 'h2', 'h3', 'h4','h5', 'h6'],
	    replacement: function(content, node) {
	      var hLevel = node.nodeName.charAt(1);
	      var hPrefix = '';
	      for(var i = 0; i < hLevel; i++) {
	        hPrefix += '#';
	      }
	      return '\n\n' + hPrefix + ' ' + content + '\n\n';
	    }
	  },

	  {
	    filter: 'hr',
	    replacement: function () {
	      return '\n\n* * *\n\n';
	    }
	  },

	  {
	    filter: ['em', 'i'],
	    replacement: function (content) {
	      return '_' + content + '_';
	    }
	  },

	  {
	    filter: ['strong', 'b'],
	    replacement: function (content) {
	      return '**' + content + '**';
	    }
	  },

	  // Inline code
	  {
	    filter: function (node) {
	      var hasSiblings = node.previousSibling || node.nextSibling;
	      var isCodeBlock = node.parentNode.nodeName === 'PRE' && !hasSiblings;

	      return node.nodeName === 'CODE' && !isCodeBlock;
	    },
	    replacement: function(content) {
	      return '`' + content + '`';
	    }
	  },

	  {
	    filter: function (node) {
	      return node.nodeName === 'A' && node.getAttribute('href');
	    },
	    replacement: function(content, node) {
	      var titlePart = node.title ? ' "'+ node.title +'"' : '';
	      return '[' + content + '](' + node.getAttribute('href') + titlePart + ')';
	    }
	  },

	  {
	    filter: 'img',
	    replacement: function(content, node) {
	      var alt = node.alt || '';
	      var src = node.getAttribute('src') || '';
	      var title = node.title || '';
	      var titlePart = title ? ' "'+ title +'"' : '';
	      return src ? '![' + alt + ']' + '(' + src + titlePart + ')' : '';
	    }
	  },

	  // Code blocks
	  {
	    filter: function (node) {
	      return node.nodeName === 'PRE' && node.firstChild.nodeName === 'CODE';
	    },
	    replacement: function(content, node) {
	      return '\n\n    ' + node.firstChild.textContent.replace(/\n/g, '\n    ') + '\n\n';
	    }
	  },

	  {
	    filter: 'blockquote',
	    replacement: function (content) {
	      content = this.trim(content);
	      content = content.replace(/\n{3,}/g, '\n\n');
	      content = content.replace(/^/gm, '> ');
	      return '\n\n' + content + '\n\n';
	    }
	  },

	  {
	    filter: 'li',
	    replacement: function (content, node) {
	      content = content.replace(/^\s+/, '').replace(/\n/gm, '\n    ');
	      var prefix = '*   ';
	      var parent = node.parentNode;
	      var index = Array.prototype.indexOf.call(parent.children, node) + 1;

	      prefix = /ol/i.test(parent.nodeName) ? index + '.  ' : '*   ';
	      return prefix + content;
	    }
	  },

	  {
	    filter: ['ul', 'ol'],
	    replacement: function (content, node) {
	      var strings = [];
	      for (var i = 0; i < node.childNodes.length; i++) {
	        strings.push(node.childNodes[i]._replacement);
	      }

	      if (/li/i.test(node.parentNode.nodeName)) {
	        return '\n' + strings.join('\n');
	      }
	      return '\n\n' + strings.join('\n') + '\n\n';
	    }
	  },

	  {
	    filter: function (node) {
	      return this.isBlock(node);
	    },
	    replacement: function (content, node) {
	      return '\n\n' + this.outer(node, content) + '\n\n';
	    }
	  },

	  // Anything else!
	  {
	    filter: function () {
	      return true;
	    },
	    replacement: function (content, node) {
	      return this.outer(node, content);
	    }
	  }
	];

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	function cell(content, node) {
	  var index = Array.prototype.indexOf.call(node.parentNode.childNodes, node);
	  var prefix = ' ';
	  if (index === 0) { prefix = '| '; }
	  return prefix + content + ' |';
	}

	var highlightRegEx = /highlight highlight-(\S+)/;

	module.exports = [
	  {
	    filter: 'br',
	    replacement: function () {
	      return '\n';
	    }
	  },
	  {
	    filter: ['del', 's', 'strike'],
	    replacement: function (content) {
	      return '~~' + content + '~~';
	    }
	  },

	  {
	    filter: function (node) {
	      return node.type === 'checkbox' && node.parentNode.nodeName === 'LI';
	    },
	    replacement: function (content, node) {
	      return (node.checked ? '[x]' : '[ ]') + ' ';
	    }
	  },

	  {
	    filter: ['th', 'td'],
	    replacement: function (content, node) {
	      return cell(content, node);
	    }
	  },

	  {
	    filter: 'tr',
	    replacement: function (content, node) {
	      var borderCells = '';
	      var alignMap = { left: ':--', right: '--:', center: ':-:' };

	      if (node.parentNode.nodeName === 'THEAD') {
	        for (var i = 0; i < node.childNodes.length; i++) {
	          var align = node.childNodes[i].attributes.align;
	          var border = '---';

	          if (align) { border = alignMap[align.value] || border; }

	          borderCells += cell(border, node.childNodes[i]);
	        }
	      }
	      return '\n' + content + (borderCells ? '\n' + borderCells : '');
	    }
	  },

	  {
	    filter: 'table',
	    replacement: function (content) {
	      return '\n\n' + content + '\n\n';
	    }
	  },

	  {
	    filter: ['thead', 'tbody', 'tfoot'],
	    replacement: function (content) {
	      return content;
	    }
	  },

	  // Fenced code blocks
	  {
	    filter: function (node) {
	      return node.nodeName === 'PRE' &&
	             node.firstChild &&
	             node.firstChild.nodeName === 'CODE';
	    },
	    replacement: function(content, node) {
	      return '\n\n```\n' + node.firstChild.textContent + '\n```\n\n';
	    }
	  },

	  // Syntax-highlighted code blocks
	  {
	    filter: function (node) {
	      return node.nodeName === 'PRE' &&
	             node.parentNode.nodeName === 'DIV' &&
	             highlightRegEx.test(node.parentNode.className);
	    },
	    replacement: function (content, node) {
	      var language = node.parentNode.className.match(highlightRegEx)[1];
	      return '\n\n```' + language + '\n' + node.textContent + '\n```\n\n';
	    }
	  },

	  {
	    filter: function (node) {
	      return node.nodeName === 'DIV' &&
	             highlightRegEx.test(node.className);
	    },
	    replacement: function (content) {
	      return '\n\n' + content + '\n\n';
	    }
	  }
	];


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var voidElements = __webpack_require__(20);
	Object.keys(voidElements).forEach(function (name) {
	  voidElements[name.toUpperCase()] = 1;
	});

	var blockElements = {};
	__webpack_require__(21).forEach(function (name) {
	  blockElements[name.toUpperCase()] = 1;
	});

	/**
	 * isBlockElem(node) determines if the given node is a block element.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	function isBlockElem(node) {
	  return !!(node && blockElements[node.nodeName]);
	}

	/**
	 * isVoid(node) determines if the given node is a void element.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	function isVoid(node) {
	  return !!(node && voidElements[node.nodeName]);
	}

	/**
	 * whitespace(elem [, isBlock]) removes extraneous whitespace from an
	 * the given element. The function isBlock may optionally be passed in
	 * to determine whether or not an element is a block element; if none
	 * is provided, defaults to using the list of block elements provided
	 * by the `block-elements` module.
	 *
	 * @param {Node} elem
	 * @param {Function} blockTest
	 */
	function collapseWhitespace(elem, isBlock) {
	  if (!elem.firstChild || elem.nodeName === 'PRE') return;

	  if (typeof isBlock !== 'function') {
	    isBlock = isBlockElem;
	  }

	  var prevText = null;
	  var prevVoid = false;

	  var prev = null;
	  var node = next(prev, elem);

	  while (node !== elem) {
	    if (node.nodeType === 3) {
	      // Node.TEXT_NODE
	      var text = node.data.replace(/[ \r\n\t]+/g, ' ');

	      if ((!prevText || / $/.test(prevText.data)) && !prevVoid && text[0] === ' ') {
	        text = text.substr(1);
	      }

	      // `text` might be empty at this point.
	      if (!text) {
	        node = remove(node);
	        continue;
	      }

	      node.data = text;
	      prevText = node;
	    } else if (node.nodeType === 1) {
	      // Node.ELEMENT_NODE
	      if (isBlock(node) || node.nodeName === 'BR') {
	        if (prevText) {
	          prevText.data = prevText.data.replace(/ $/, '');
	        }

	        prevText = null;
	        prevVoid = false;
	      } else if (isVoid(node)) {
	        // Avoid trimming space around non-block, non-BR void elements.
	        prevText = null;
	        prevVoid = true;
	      }
	    } else {
	      node = remove(node);
	      continue;
	    }

	    var nextNode = next(prev, node);
	    prev = node;
	    node = nextNode;
	  }

	  if (prevText) {
	    prevText.data = prevText.data.replace(/ $/, '');
	    if (!prevText.data) {
	      remove(prevText);
	    }
	  }
	}

	/**
	 * remove(node) removes the given node from the DOM and returns the
	 * next node in the sequence.
	 *
	 * @param {Node} node
	 * @return {Node} node
	 */
	function remove(node) {
	  var next = node.nextSibling || node.parentNode;

	  node.parentNode.removeChild(node);

	  return next;
	}

	/**
	 * next(prev, current) returns the next node in the sequence, given the
	 * current and previous nodes.
	 *
	 * @param {Node} prev
	 * @param {Node} current
	 * @return {Node}
	 */
	function next(prev, current) {
	  if (prev && prev.parentNode === current || current.nodeName === 'PRE') {
	    return current.nextSibling || current.parentNode;
	  }

	  return current.firstChild || current.nextSibling || current.parentNode;
	}

	module.exports = collapseWhitespace;


/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * This file automatically generated from `pre-publish.js`.
	 * Do not manually edit.
	 */

	module.exports = {
	  "area": true,
	  "base": true,
	  "br": true,
	  "col": true,
	  "embed": true,
	  "hr": true,
	  "img": true,
	  "input": true,
	  "keygen": true,
	  "link": true,
	  "menuitem": true,
	  "meta": true,
	  "param": true,
	  "source": true,
	  "track": true,
	  "wbr": true
	};


/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * This file automatically generated from `build.js`.
	 * Do not manually edit.
	 */

	module.exports = [
	  "address",
	  "article",
	  "aside",
	  "audio",
	  "blockquote",
	  "canvas",
	  "dd",
	  "div",
	  "dl",
	  "fieldset",
	  "figcaption",
	  "figure",
	  "footer",
	  "form",
	  "h1",
	  "h2",
	  "h3",
	  "h4",
	  "h5",
	  "h6",
	  "header",
	  "hgroup",
	  "hr",
	  "main",
	  "nav",
	  "noscript",
	  "ol",
	  "output",
	  "p",
	  "pre",
	  "section",
	  "table",
	  "tfoot",
	  "ul",
	  "video"
	];


/***/ },
/* 22 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ }
/******/ ]);