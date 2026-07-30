/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/ajax.js"
/*!******************************!*\
  !*** ./resources/js/ajax.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ajax: () => (/* binding */ ajax),
/* harmony export */   del: () => (/* binding */ del),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   post: () => (/* binding */ post)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_28__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





























var ajax = function ajax(url) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var domElement = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  method = method.toLowerCase();
  var options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  };
  var csrfMethods = new Set(['post', 'put', 'delete', 'patch']);
  if (csrfMethods.has(method)) {
    var additionalFields = _objectSpread({}, getCsrfFields());
    if (method !== 'post') {
      options.method = 'post';

      //data = {...data, _METHOD: method.toUpperCase()}
      additionalFields._METHOD = method.toUpperCase();
    }
    if (data instanceof FormData) {
      for (var additionalField in additionalFields) {
        data.append(additionalField, additionalFields[additionalField]);
      }
      delete options.headers['Content-Type'];
      options.body = data;
    } else {
      options.body = JSON.stringify(_objectSpread(_objectSpread({}, data), additionalFields));
      // options.body = JSON.stringify({...data, ...getCsrfFields()})
    }
  } else if (method === 'get') {
    url += '?' + new URLSearchParams(data).toString();
  }
  return fetch(url, options).then(function (response) {
    if (domElement) {
      clearValidationErrors(domElement);
    }
    if (!response.ok) {
      if (response.status === 422) {
        response.json().then(function (errors) {
          handleValidationErrors(errors, domElement);
        });
      }
    }
    return response;
  });
};
var get = function get(url, data) {
  return ajax(url, 'get', data);
};
var post = function post(url, data, domElement) {
  return ajax(url, 'post', data, domElement);
};
var del = function del(url, data) {
  return ajax(url, 'delete', data);
};
function handleValidationErrors(errors, domElement) {
  for (var name in errors) {
    var element = domElement.querySelector("[name=\"".concat(name, "\"]"));
    element.classList.add('is-invalid');
    var _iterator = _createForOfIteratorHelper(errors[name]),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var error = _step.value;
        var errorDiv = document.createElement('div');
        errorDiv.classList.add('invalid-feedback');
        errorDiv.textContent = errors[name][0];
        element.parentNode.append(errorDiv);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}
function clearValidationErrors(domElement) {
  domElement.querySelectorAll('.is-invalid').forEach(function (element) {
    element.classList.remove('is-invalid');
    element.parentNode.querySelectorAll('.invalid-feedback').forEach(function (e) {
      e.remove();
    });
  });
}
function getCsrfFields() {
  var csrfNameField = document.querySelector('#csrfName');
  var csrfValueField = document.querySelector('#csrfValue');
  var csrfNameKey = csrfNameField.getAttribute('name');
  var csrfName = csrfNameField.content;
  var csrfValueKey = csrfValueField.getAttribute('name');
  var csrfValue = csrfValueField.content;
  return _defineProperty(_defineProperty({}, csrfNameKey, csrfName), csrfValueKey, csrfValue);
}


/***/ },

/***/ "./resources/js/verify.js"
/*!********************************!*\
  !*** ./resources/js/verify.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax */ "./resources/js/ajax.js");

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.resend-verify').addEventListener('click', function (event) {
    (0,_ajax__WEBPACK_IMPORTED_MODULE_0__.post)("/verify").then(function (response) {
      if (response.ok) {
        alert('A new email verification has been sent');
      }
    });
  });
});

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		const deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			let notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				let [chunkIds, fn, priority] = deferred[i];
/******/ 				let fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					const r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
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
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"verify": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		const webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			let [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		const chunkLoadingGlobal = self["webpackChunkexpennies"] = self["webpackChunkexpennies"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-510176"], () => (__webpack_require__("./resources/js/verify.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5LmI2ZTViZTE4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUlDLEdBQUcsRUFBbUQ7RUFBQSxJQUFqREMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxLQUFLO0VBQUEsSUFBRUcsSUFBSSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7RUFBQSxJQUFFSSxVQUFVLEdBQUFKLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLElBQUk7RUFDM0RELE1BQU0sR0FBR0EsTUFBTSxDQUFDTSxXQUFXLENBQUMsQ0FBQztFQUU3QixJQUFJQyxPQUFPLEdBQUc7SUFDVlAsTUFBTSxFQUFOQSxNQUFNO0lBQ05RLE9BQU8sRUFBRTtNQUNMLGNBQWMsRUFBRSxrQkFBa0I7TUFDbEMsa0JBQWtCLEVBQUU7SUFDeEI7RUFDSixDQUFDO0VBRUQsSUFBTUMsV0FBVyxHQUFHLElBQUlDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0VBRS9ELElBQUlELFdBQVcsQ0FBQ0UsR0FBRyxDQUFDWCxNQUFNLENBQUMsRUFBRTtJQUN6QixJQUFJWSxnQkFBZ0IsR0FBQUMsYUFBQSxLQUFLQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLElBQUlkLE1BQU0sS0FBSyxNQUFNLEVBQUU7TUFDbkJPLE9BQU8sQ0FBQ1AsTUFBTSxHQUFHLE1BQU07O01BRXZCO01BQ0FZLGdCQUFnQixDQUFDRyxPQUFPLEdBQUdmLE1BQU0sQ0FBQ2dCLFdBQVcsQ0FBQyxDQUFDO0lBQ25EO0lBQ0EsSUFBSVosSUFBSSxZQUFZYSxRQUFRLEVBQUU7TUFDMUIsS0FBSyxJQUFNQyxlQUFlLElBQUlOLGdCQUFnQixFQUFFO1FBQzVDUixJQUFJLENBQUNlLE1BQU0sQ0FBQ0QsZUFBZSxFQUFFTixnQkFBZ0IsQ0FBQ00sZUFBZSxDQUFDLENBQUM7TUFDbkU7TUFFQSxPQUFPWCxPQUFPLENBQUNDLE9BQU8sQ0FBQyxjQUFjLENBQUM7TUFFdENELE9BQU8sQ0FBQ2EsSUFBSSxHQUFHaEIsSUFBSTtJQUN2QixDQUFDLE1BQU07TUFDSEcsT0FBTyxDQUFDYSxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBUyxDQUFBVCxhQUFBLENBQUFBLGFBQUEsS0FBS1QsSUFBSSxHQUFLUSxnQkFBZ0IsQ0FBQyxDQUFDO01BQzlEO0lBQ0g7RUFDSixDQUFDLE1BQU0sSUFBSVosTUFBTSxLQUFLLEtBQUssRUFBRTtJQUN6QkQsR0FBRyxJQUFJLEdBQUcsR0FBSSxJQUFJd0IsZUFBZSxDQUFDbkIsSUFBSSxDQUFDLENBQUVvQixRQUFRLENBQUMsQ0FBQztFQUN2RDtFQUVBLE9BQU9DLEtBQUssQ0FBQzFCLEdBQUcsRUFBRVEsT0FBTyxDQUFDLENBQUNtQixJQUFJLENBQUMsVUFBQUMsUUFBUSxFQUFJO0lBQ3hDLElBQUl0QixVQUFVLEVBQUU7TUFDWnVCLHFCQUFxQixDQUFDdkIsVUFBVSxDQUFDO0lBQ3JDO0lBRUEsSUFBSSxDQUFFc0IsUUFBUSxDQUFDRSxFQUFFLEVBQUU7TUFDZixJQUFJRixRQUFRLENBQUNHLE1BQU0sS0FBSyxHQUFHLEVBQUU7UUFDekJILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLENBQUMsQ0FBQ0wsSUFBSSxDQUFDLFVBQUFNLE1BQU0sRUFBSTtVQUMzQkMsc0JBQXNCLENBQUNELE1BQU0sRUFBRTNCLFVBQVUsQ0FBQztRQUM5QyxDQUFDLENBQUM7TUFDTjtJQUNKO0lBRUEsT0FBT3NCLFFBQVE7RUFDbkIsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUNELElBQU1PLEdBQUcsR0FBSSxTQUFQQSxHQUFHQSxDQUFLbkMsR0FBRyxFQUFFSyxJQUFJO0VBQUEsT0FBS04sSUFBSSxDQUFDQyxHQUFHLEVBQUUsS0FBSyxFQUFFSyxJQUFJLENBQUM7QUFBQTtBQUNsRCxJQUFNK0IsSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUlwQyxHQUFHLEVBQUVLLElBQUksRUFBRUMsVUFBVTtFQUFBLE9BQUtQLElBQUksQ0FBQ0MsR0FBRyxFQUFFLE1BQU0sRUFBRUssSUFBSSxFQUFFQyxVQUFVLENBQUM7QUFBQTtBQUMzRSxJQUFNK0IsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUlyQyxHQUFHLEVBQUVLLElBQUk7RUFBQSxPQUFLTixJQUFJLENBQUNDLEdBQUcsRUFBRSxRQUFRLEVBQUVLLElBQUksQ0FBQztBQUFBO0FBR3BELFNBQVM2QixzQkFBc0JBLENBQUNELE1BQU0sRUFBRTNCLFVBQVUsRUFBRTtFQUNoRCxLQUFLLElBQU1nQyxJQUFJLElBQUlMLE1BQU0sRUFBRTtJQUN2QixJQUFNTSxPQUFPLEdBQUdqQyxVQUFVLENBQUNrQyxhQUFhLFlBQUFDLE1BQUEsQ0FBWUgsSUFBSSxRQUFLLENBQUM7SUFFOURDLE9BQU8sQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO0lBQUEsSUFBQUMsU0FBQSxHQUFBQywwQkFBQSxDQUVmWixNQUFNLENBQUNLLElBQUksQ0FBQztNQUFBUSxLQUFBO0lBQUE7TUFBaEMsS0FBQUYsU0FBQSxDQUFBRyxDQUFBLE1BQUFELEtBQUEsR0FBQUYsU0FBQSxDQUFBSSxDQUFBLElBQUFDLElBQUEsR0FBa0M7UUFBQSxJQUF2QkMsS0FBSyxHQUFBSixLQUFBLENBQUFLLEtBQUE7UUFDWixJQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUU5Q0YsUUFBUSxDQUFDVixTQUFTLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztRQUMxQ1MsUUFBUSxDQUFDRyxXQUFXLEdBQUd0QixNQUFNLENBQUNLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV0Q0MsT0FBTyxDQUFDaUIsVUFBVSxDQUFDcEMsTUFBTSxDQUFDZ0MsUUFBUSxDQUFDO01BQ3ZDO0lBQUMsU0FBQUssR0FBQTtNQUFBYixTQUFBLENBQUFjLENBQUEsQ0FBQUQsR0FBQTtJQUFBO01BQUFiLFNBQUEsQ0FBQWUsQ0FBQTtJQUFBO0VBQ0w7QUFDSjtBQUVBLFNBQVM5QixxQkFBcUJBLENBQUN2QixVQUFVLEVBQUU7RUFDdkNBLFVBQVUsQ0FBQ3NELGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBU3RCLE9BQU8sRUFBRTtJQUNqRUEsT0FBTyxDQUFDRyxTQUFTLENBQUNvQixNQUFNLENBQUMsWUFBWSxDQUFDO0lBRXRDdkIsT0FBTyxDQUFDaUIsVUFBVSxDQUFDSSxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBU0gsQ0FBQyxFQUFFO01BQ3pFQSxDQUFDLENBQUNJLE1BQU0sQ0FBQyxDQUFDO0lBQ2QsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ047QUFFQSxTQUFTL0MsYUFBYUEsQ0FBQSxFQUFHO0VBQ3JCLElBQU1nRCxhQUFhLEdBQUlWLFFBQVEsQ0FBQ2IsYUFBYSxDQUFDLFdBQVcsQ0FBQztFQUMxRCxJQUFNd0IsY0FBYyxHQUFHWCxRQUFRLENBQUNiLGFBQWEsQ0FBQyxZQUFZLENBQUM7RUFDM0QsSUFBTXlCLFdBQVcsR0FBTUYsYUFBYSxDQUFDRyxZQUFZLENBQUMsTUFBTSxDQUFDO0VBQ3pELElBQU1DLFFBQVEsR0FBU0osYUFBYSxDQUFDSyxPQUFPO0VBQzVDLElBQU1DLFlBQVksR0FBS0wsY0FBYyxDQUFDRSxZQUFZLENBQUMsTUFBTSxDQUFDO0VBQzFELElBQU1JLFNBQVMsR0FBUU4sY0FBYyxDQUFDSSxPQUFPO0VBRTdDLE9BQUFHLGVBQUEsQ0FBQUEsZUFBQSxLQUNLTixXQUFXLEVBQUdFLFFBQVEsR0FDdEJFLFlBQVksRUFBR0MsU0FBUztBQUVqQzs7Ozs7Ozs7Ozs7OztBQ2pHOEI7QUFFOUJFLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUNwRHBCLFFBQVEsQ0FBQ2IsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUNpQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVUMsS0FBSyxFQUFFO0lBQ2hGdEMsMkNBQUksVUFBVSxDQUFDLENBQUNULElBQUksQ0FBQyxVQUFBQyxRQUFRLEVBQUk7TUFDN0IsSUFBSUEsUUFBUSxDQUFDRSxFQUFFLEVBQUU7UUFDYjZDLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQztNQUNuRDtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDOzs7Ozs7VUNWRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDL0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSwyQ0FBMkMsMENBQTBDO1dBQ3JGLE1BQU07V0FDTiwyQ0FBMkMsZ0NBQWdDO1dBQzNFO1dBQ0EsS0FBSyx5QkFBeUI7V0FDOUI7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLDBDQUEwQyx3Q0FBd0M7V0FDbEY7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBlbm5pZXMvLi9yZXNvdXJjZXMvanMvYWpheC5qcyIsIndlYnBhY2s6Ly9leHBlbm5pZXMvLi9yZXNvdXJjZXMvanMvdmVyaWZ5LmpzIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leHBlbm5pZXMvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9leHBlbm5pZXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leHBlbm5pZXMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9leHBlbm5pZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leHBlbm5pZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leHBlbm5pZXMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9leHBlbm5pZXMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFqYXggPSAodXJsLCBtZXRob2QgPSAnZ2V0JywgZGF0YSA9IHt9LCBkb21FbGVtZW50ID0gbnVsbCkgPT4ge1xyXG4gICAgbWV0aG9kID0gbWV0aG9kLnRvTG93ZXJDYXNlKClcclxuXHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICBtZXRob2QsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3NyZk1ldGhvZHMgPSBuZXcgU2V0KFsncG9zdCcsICdwdXQnLCAnZGVsZXRlJywgJ3BhdGNoJ10pXHJcblxyXG4gICAgaWYgKGNzcmZNZXRob2RzLmhhcyhtZXRob2QpKSB7XHJcbiAgICAgICAgbGV0IGFkZGl0aW9uYWxGaWVsZHM9ey4uLmdldENzcmZGaWVsZHMoKX1cclxuICAgICAgICBpZiAobWV0aG9kICE9PSAncG9zdCcpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5tZXRob2QgPSAncG9zdCdcclxuXHJcbiAgICAgICAgICAgIC8vZGF0YSA9IHsuLi5kYXRhLCBfTUVUSE9EOiBtZXRob2QudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgYWRkaXRpb25hbEZpZWxkcy5fTUVUSE9EID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFkZGl0aW9uYWxGaWVsZCBpbiBhZGRpdGlvbmFsRmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChhZGRpdGlvbmFsRmllbGQsIGFkZGl0aW9uYWxGaWVsZHNbYWRkaXRpb25hbEZpZWxkXSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGVsZXRlIG9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1UeXBlJ107XHJcblxyXG4gICAgICAgICAgICBvcHRpb25zLmJvZHkgPSBkYXRhXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoey4uLmRhdGEsIC4uLmFkZGl0aW9uYWxGaWVsZHN9KVxyXG4gICAgICAgICAgIC8vIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHsuLi5kYXRhLCAuLi5nZXRDc3JmRmllbGRzKCl9KVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAnZ2V0Jykge1xyXG4gICAgICAgIHVybCArPSAnPycgKyAobmV3IFVSTFNlYXJjaFBhcmFtcyhkYXRhKSkudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCBvcHRpb25zKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAoZG9tRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjbGVhclZhbGlkYXRpb25FcnJvcnMoZG9tRWxlbWVudClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghIHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oZXJyb3JzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVWYWxpZGF0aW9uRXJyb3JzKGVycm9ycywgZG9tRWxlbWVudClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSlcclxufVxyXG5jb25zdCBnZXQgID0gKHVybCwgZGF0YSkgPT4gYWpheCh1cmwsICdnZXQnLCBkYXRhKVxyXG5jb25zdCBwb3N0ID0gKHVybCwgZGF0YSwgZG9tRWxlbWVudCkgPT4gYWpheCh1cmwsICdwb3N0JywgZGF0YSwgZG9tRWxlbWVudClcclxuY29uc3QgZGVsID0gKHVybCwgZGF0YSkgPT4gYWpheCh1cmwsICdkZWxldGUnLCBkYXRhKVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVZhbGlkYXRpb25FcnJvcnMoZXJyb3JzLCBkb21FbGVtZW50KSB7XHJcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gZXJyb3JzKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvbUVsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9XCIkeyBuYW1lIH1cIl1gKVxyXG5cclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWludmFsaWQnKVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGVycm9yIG9mIGVycm9yc1tuYW1lXSkge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gICAgICAgICAgICBlcnJvckRpdi5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLWZlZWRiYWNrJylcclxuICAgICAgICAgICAgZXJyb3JEaXYudGV4dENvbnRlbnQgPSBlcnJvcnNbbmFtZV1bMF1cclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmQoZXJyb3JEaXYpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclZhbGlkYXRpb25FcnJvcnMoZG9tRWxlbWVudCkge1xyXG4gICAgZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXMtaW52YWxpZCcpLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaW52YWxpZCcpXHJcblxyXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuaW52YWxpZC1mZWVkYmFjaycpLmZvckVhY2goZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnJlbW92ZSgpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENzcmZGaWVsZHMoKSB7XHJcbiAgICBjb25zdCBjc3JmTmFtZUZpZWxkICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjc3JmTmFtZScpXHJcbiAgICBjb25zdCBjc3JmVmFsdWVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjc3JmVmFsdWUnKVxyXG4gICAgY29uc3QgY3NyZk5hbWVLZXkgICAgPSBjc3JmTmFtZUZpZWxkLmdldEF0dHJpYnV0ZSgnbmFtZScpXHJcbiAgICBjb25zdCBjc3JmTmFtZSAgICAgICA9IGNzcmZOYW1lRmllbGQuY29udGVudFxyXG4gICAgY29uc3QgY3NyZlZhbHVlS2V5ICAgPSBjc3JmVmFsdWVGaWVsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKVxyXG4gICAgY29uc3QgY3NyZlZhbHVlICAgICAgPSBjc3JmVmFsdWVGaWVsZC5jb250ZW50XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBbY3NyZk5hbWVLZXldOiBjc3JmTmFtZSxcclxuICAgICAgICBbY3NyZlZhbHVlS2V5XTogY3NyZlZhbHVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBhamF4LFxyXG4gICAgZ2V0LFxyXG4gICAgcG9zdCxcclxuICAgIGRlbFxyXG59IiwiaW1wb3J0IHsgcG9zdCB9IGZyb20gJy4vYWpheCc7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlbmQtdmVyaWZ5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBwb3N0KGAvdmVyaWZ5YCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0EgbmV3IGVtYWlsIHZlcmlmaWNhdGlvbiBoYXMgYmVlbiBzZW50JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59KSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbmNvbnN0IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0Y29uc3QgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdGNvbnN0IG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRjb25zdCBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsImNvbnN0IGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGxldCBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHRsZXQgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0Y29uc3QgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHRjb25zdCBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlci92YWx1ZSBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0aWYoQXJyYXkuaXNBcnJheShkZWZpbml0aW9uKSkge1xuXHRcdHZhciBpID0gMDtcblx0XHR3aGlsZShpIDwgZGVmaW5pdGlvbi5sZW5ndGgpIHtcblx0XHRcdHZhciBrZXkgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHR2YXIgYmluZGluZyA9IGRlZmluaXRpb25baSsrXTtcblx0XHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRpZihiaW5kaW5nID09PSAwKSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogZGVmaW5pdGlvbltpKytdIH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBiaW5kaW5nIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYoYmluZGluZyA9PT0gMCkgeyBpKys7IH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG5jb25zdCBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwidmVyaWZ5XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbmNvbnN0IHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdGxldCBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbmNvbnN0IGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtleHBlbm5pZXNcIl0gPSBzZWxmW1wid2VicGFja0NodW5rZXhwZW5uaWVzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxubGV0IF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jb3JlLWpzX21vZHVsZXNfZXNfYXJyYXlfZmlsdGVyX2pzLW5vZGVfbW9kdWxlc19jb3JlLWpzX21vZHVsZXNfZXNfYXJyYXktNTEwMTc2XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vcmVzb3VyY2VzL2pzL3ZlcmlmeS5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJkYXRhIiwiZG9tRWxlbWVudCIsInRvTG93ZXJDYXNlIiwib3B0aW9ucyIsImhlYWRlcnMiLCJjc3JmTWV0aG9kcyIsIlNldCIsImhhcyIsImFkZGl0aW9uYWxGaWVsZHMiLCJfb2JqZWN0U3ByZWFkIiwiZ2V0Q3NyZkZpZWxkcyIsIl9NRVRIT0QiLCJ0b1VwcGVyQ2FzZSIsIkZvcm1EYXRhIiwiYWRkaXRpb25hbEZpZWxkIiwiYXBwZW5kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJ0b1N0cmluZyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwiY2xlYXJWYWxpZGF0aW9uRXJyb3JzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZXJyb3JzIiwiaGFuZGxlVmFsaWRhdGlvbkVycm9ycyIsImdldCIsInBvc3QiLCJkZWwiLCJuYW1lIiwiZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25jYXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiZXJyb3IiLCJ2YWx1ZSIsImVycm9yRGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJwYXJlbnROb2RlIiwiZXJyIiwiZSIsImYiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInJlbW92ZSIsImNzcmZOYW1lRmllbGQiLCJjc3JmVmFsdWVGaWVsZCIsImNzcmZOYW1lS2V5IiwiZ2V0QXR0cmlidXRlIiwiY3NyZk5hbWUiLCJjb250ZW50IiwiY3NyZlZhbHVlS2V5IiwiY3NyZlZhbHVlIiwiX2RlZmluZVByb3BlcnR5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9