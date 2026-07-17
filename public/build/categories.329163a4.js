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
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_23__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
    if (method !== 'post') {
      options.method = 'post';
      data = _objectSpread(_objectSpread({}, data), {}, {
        _METHOD: method.toUpperCase()
      });
    }
    options.body = JSON.stringify(_objectSpread(_objectSpread({}, data), getCsrfFields()));
  } else if (method === 'get') {
    url += '?' + new URLSearchParams(data).toString();
  }
  return fetch(url, options).then(function (response) {
    if (domElement) {
      // clearValidationErrors(domElement)
    }
    if (!response.ok) {
      if (response.status === 422) {
        response.json().then(function (errors) {
          // handleValidationErrors(errors, domElement)
          console.log(errors);
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

/***/ "./resources/js/categories.js"
/*!************************************!*\
  !*** ./resources/js/categories.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ajax */ "./resources/js/ajax.js");






window.addEventListener('DOMContentLoaded', function () {
  var editCategoryModal = new bootstrap__WEBPACK_IMPORTED_MODULE_4__.Modal(document.getElementById('editCategoryModal'));
  document.querySelectorAll('.edit-category-btn').forEach(function (button) {
    button.addEventListener('click', function (event) {
      var categoryId = event.currentTarget.getAttribute('data-id');
      (0,_ajax__WEBPACK_IMPORTED_MODULE_5__.get)("/categories/".concat(categoryId)).then(function (response) {
        return response.json();
      })
      // 2. Now 'data' is the actual JSON containing your {id, name}
      .then(function (data) {
        console.log("Actual Category Data:", data); // You should see {id: 6, name: "..."} here!

        // 3. Pass the clean data object to your modal function
        openEditCategoryModal(editCategoryModal, data);
      })["catch"](function (error) {
        return console.error("Error fetching category:", error);
      });
    });
  });
  document.querySelector('.save-category-btn').addEventListener('click', function (event) {
    var categoryId = event.currentTarget.getAttribute('data-id');
    (0,_ajax__WEBPACK_IMPORTED_MODULE_5__.post)("/categories/".concat(categoryId), {
      name: editCategoryModal._element.querySelector('input[name="name"]').value
    }, editCategoryModal._element).then(function (response) {
      if (response.ok) {
        editCategoryModal.hide();
      }
    });
  });
});
function openEditCategoryModal(modal, _ref) {
  var id = _ref.id,
    name = _ref.name;
  var nameInput = modal._element.querySelector('input[name="name"]');
  console.log(name);
  nameInput.value = name;
  console.log("Found HTML Input Element:", nameInput);
  modal._element.querySelector('.save-category-btn').setAttribute('data-id', id);
  modal.show();
}

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
/******/ 			"categories": 0
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
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-6aa6a1"], () => (__webpack_require__("./resources/js/categories.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQSwwQ0FBMEMsd0NBQXdDO1dBQ2xGO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLDRHOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhwZW5uaWVzLy4vcmVzb3VyY2VzL2pzL2FqYXguanMiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzLy4vcmVzb3VyY2VzL2pzL2NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leHBlbm5pZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9leHBlbm5pZXMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9leHBlbm5pZXMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWpheCA9ICh1cmwsIG1ldGhvZCA9ICdnZXQnLCBkYXRhID0ge30sIGRvbUVsZW1lbnQgPSBudWxsKSA9PiB7XHJcbiAgICBtZXRob2QgPSBtZXRob2QudG9Mb3dlckNhc2UoKVxyXG5cclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIG1ldGhvZCxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjc3JmTWV0aG9kcyA9IG5ldyBTZXQoWydwb3N0JywgJ3B1dCcsICdkZWxldGUnLCAncGF0Y2gnXSlcclxuXHJcbiAgICBpZiAoY3NyZk1ldGhvZHMuaGFzKG1ldGhvZCkpIHtcclxuICAgICAgICBpZiAobWV0aG9kICE9PSAncG9zdCcpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5tZXRob2QgPSAncG9zdCdcclxuXHJcbiAgICAgICAgICAgIGRhdGEgPSB7Li4uZGF0YSwgX01FVEhPRDogbWV0aG9kLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeSh7Li4uZGF0YSwgLi4uZ2V0Q3NyZkZpZWxkcygpfSlcclxuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAnZ2V0Jykge1xyXG4gICAgICAgIHVybCArPSAnPycgKyAobmV3IFVSTFNlYXJjaFBhcmFtcyhkYXRhKSkudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCBvcHRpb25zKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAoZG9tRWxlbWVudCkge1xyXG4gICAgICAgICAgIC8vIGNsZWFyVmFsaWRhdGlvbkVycm9ycyhkb21FbGVtZW50KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEgcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDIyKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihlcnJvcnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgLy8gaGFuZGxlVmFsaWRhdGlvbkVycm9ycyhlcnJvcnMsIGRvbUVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JzKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9KVxyXG59XHJcbmNvbnN0IGdldCAgPSAodXJsLCBkYXRhKSA9PiBhamF4KHVybCwgJ2dldCcsIGRhdGEpXHJcbmNvbnN0IHBvc3QgPSAodXJsLCBkYXRhLCBkb21FbGVtZW50KSA9PiBhamF4KHVybCwgJ3Bvc3QnLCBkYXRhLCBkb21FbGVtZW50KVxyXG5jb25zdCBkZWwgPSAodXJsLCBkYXRhKSA9PiBhamF4KHVybCwgJ2RlbGV0ZScsIGRhdGEpXHJcblxyXG5mdW5jdGlvbiBnZXRDc3JmRmllbGRzKCkge1xyXG4gICAgY29uc3QgY3NyZk5hbWVGaWVsZCAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3NyZk5hbWUnKVxyXG4gICAgY29uc3QgY3NyZlZhbHVlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3NyZlZhbHVlJylcclxuICAgIGNvbnN0IGNzcmZOYW1lS2V5ICAgID0gY3NyZk5hbWVGaWVsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKVxyXG4gICAgY29uc3QgY3NyZk5hbWUgICAgICAgPSBjc3JmTmFtZUZpZWxkLmNvbnRlbnRcclxuICAgIGNvbnN0IGNzcmZWYWx1ZUtleSAgID0gY3NyZlZhbHVlRmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJylcclxuICAgIGNvbnN0IGNzcmZWYWx1ZSAgICAgID0gY3NyZlZhbHVlRmllbGQuY29udGVudFxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgW2NzcmZOYW1lS2V5XTogY3NyZk5hbWUsXHJcbiAgICAgICAgW2NzcmZWYWx1ZUtleV06IGNzcmZWYWx1ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgYWpheCxcclxuICAgIGdldCxcclxuICAgIHBvc3QsXHJcbiAgICBkZWxcclxufSIsImltcG9ydCB7IE1vZGFsIH0gZnJvbSBcImJvb3RzdHJhcFwiXHJcbmltcG9ydCB7IGdldCwgcG9zdCwgZGVsIH0gZnJvbSBcIi4vYWpheFwiXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGVkaXRDYXRlZ29yeU1vZGFsID0gbmV3IE1vZGFsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0Q2F0ZWdvcnlNb2RhbCcpKVxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LWNhdGVnb3J5LWJ0bicpLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJylcclxuXHJcbiAgICAgICAgICAgIGdldChgL2NhdGVnb3JpZXMvJHsgY2F0ZWdvcnlJZCB9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC8vIDIuIE5vdyAnZGF0YScgaXMgdGhlIGFjdHVhbCBKU09OIGNvbnRhaW5pbmcgeW91ciB7aWQsIG5hbWV9XHJcbiAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFjdHVhbCBDYXRlZ29yeSBEYXRhOlwiLCBkYXRhKTsgLy8gWW91IHNob3VsZCBzZWUge2lkOiA2LCBuYW1lOiBcIi4uLlwifSBoZXJlIVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAzLiBQYXNzIHRoZSBjbGVhbiBkYXRhIG9iamVjdCB0byB5b3VyIG1vZGFsIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbkVkaXRDYXRlZ29yeU1vZGFsKGVkaXRDYXRlZ29yeU1vZGFsLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNhdGVnb3J5OlwiLCBlcnJvcikpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlLWNhdGVnb3J5LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJylcclxuXHJcblxyXG4gICAgICAgIHBvc3QoYC9jYXRlZ29yaWVzLyR7IGNhdGVnb3J5SWQgfWAsIHtcclxuICAgICAgICAgICAgbmFtZTogZWRpdENhdGVnb3J5TW9kYWwuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hbWVcIl0nKS52YWx1ZVxyXG4gICAgICAgIH0sIGVkaXRDYXRlZ29yeU1vZGFsLl9lbGVtZW50KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBlZGl0Q2F0ZWdvcnlNb2RhbC5oaWRlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxuXHJcblxyXG59KTtcclxuZnVuY3Rpb24gb3BlbkVkaXRDYXRlZ29yeU1vZGFsKG1vZGFsLCB7aWQsIG5hbWV9KSB7XHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBtb2RhbC5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibmFtZVwiXScpXHJcbiAgICBjb25zb2xlLmxvZyhuYW1lKTtcclxuICAgIG5hbWVJbnB1dC52YWx1ZSA9IG5hbWVcclxuICAgIGNvbnNvbGUubG9nKFwiRm91bmQgSFRNTCBJbnB1dCBFbGVtZW50OlwiLCBuYW1lSW5wdXQpO1xyXG5cclxuICAgIG1vZGFsLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlLWNhdGVnb3J5LWJ0bicpLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKVxyXG5cclxuICAgIG1vZGFsLnNob3coKVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxuY29uc3QgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRjb25zdCBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0Y29uc3QgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdGNvbnN0IGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiY29uc3QgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0bGV0IG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdGxldCBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHRjb25zdCByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdGNvbnN0IGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyL3ZhbHVlIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRpZihBcnJheS5pc0FycmF5KGRlZmluaXRpb24pKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHdoaWxlKGkgPCBkZWZpbml0aW9uLmxlbmd0aCkge1xuXHRcdFx0dmFyIGtleSA9IGRlZmluaXRpb25baSsrXTtcblx0XHRcdHZhciBiaW5kaW5nID0gZGVmaW5pdGlvbltpKytdO1xuXHRcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRcdGlmKGJpbmRpbmcgPT09IDApIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiBkZWZpbml0aW9uW2krK10gfSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGJpbmRpbmcgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZihiaW5kaW5nID09PSAwKSB7IGkrKzsgfVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYoU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbmNvbnN0IGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJjYXRlZ29yaWVzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbmNvbnN0IHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdGxldCBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbmNvbnN0IGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtleHBlbm5pZXNcIl0gPSBzZWxmW1wid2VicGFja0NodW5rZXhwZW5uaWVzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxubGV0IF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19ib290c3RyYXBfZGlzdF9qc19ib290c3RyYXBfZXNtX2pzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jb3JlLWpzX21vZHVsZXNfZXNfYXJyYXlfZmlsdGVyX2pzLW5vZGVfbW9kdWxlc19jb3JlLWpzX21vZHVsZXNfZXNfYXJyYXktNmFhNmExXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vcmVzb3VyY2VzL2pzL2NhdGVnb3JpZXMuanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJhamF4IiwidXJsIiwibWV0aG9kIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZGF0YSIsImRvbUVsZW1lbnQiLCJ0b0xvd2VyQ2FzZSIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiY3NyZk1ldGhvZHMiLCJTZXQiLCJoYXMiLCJfb2JqZWN0U3ByZWFkIiwiX01FVEhPRCIsInRvVXBwZXJDYXNlIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRDc3JmRmllbGRzIiwiVVJMU2VhcmNoUGFyYW1zIiwidG9TdHJpbmciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwic3RhdHVzIiwianNvbiIsImVycm9ycyIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJwb3N0IiwiZGVsIiwiY3NyZk5hbWVGaWVsZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNzcmZWYWx1ZUZpZWxkIiwiY3NyZk5hbWVLZXkiLCJnZXRBdHRyaWJ1dGUiLCJjc3JmTmFtZSIsImNvbnRlbnQiLCJjc3JmVmFsdWVLZXkiLCJjc3JmVmFsdWUiLCJfZGVmaW5lUHJvcGVydHkiLCJNb2RhbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlZGl0Q2F0ZWdvcnlNb2RhbCIsImdldEVsZW1lbnRCeUlkIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidXR0b24iLCJldmVudCIsImNhdGVnb3J5SWQiLCJjdXJyZW50VGFyZ2V0IiwiY29uY2F0Iiwib3BlbkVkaXRDYXRlZ29yeU1vZGFsIiwiZXJyb3IiLCJuYW1lIiwiX2VsZW1lbnQiLCJ2YWx1ZSIsImhpZGUiLCJtb2RhbCIsIl9yZWYiLCJpZCIsIm5hbWVJbnB1dCIsInNldEF0dHJpYnV0ZSIsInNob3ciXSwic291cmNlUm9vdCI6IiJ9