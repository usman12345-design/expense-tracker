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

/***/ "./resources/js/transactions.js"
/*!**************************************!*\
  !*** ./resources/js/transactions.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ajax */ "./resources/js/ajax.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
var _excluded = ["id"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }






















window.addEventListener('DOMContentLoaded', function () {
  var newTransactionModal = new bootstrap__WEBPACK_IMPORTED_MODULE_19__.Modal(document.getElementById('newTransactionModal'));
  var editTransactionModal = new bootstrap__WEBPACK_IMPORTED_MODULE_19__.Modal(document.getElementById('editTransactionModal'));
  var uploadReceiptModalEl = document.getElementById('uploadReceiptModal');
  var uploadReceiptModal = new bootstrap__WEBPACK_IMPORTED_MODULE_19__.Modal(uploadReceiptModalEl);
  var table = new datatables_net__WEBPACK_IMPORTED_MODULE_21__["default"]('#transactionsTable', {
    serverSide: true,
    ajax: '/transactions/load',
    orderMulti: false,
    columns: [{
      data: "description"
    }, {
      data: function data(row) {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          currencySign: 'accounting'
        }).format(row.amount);
      }
    }, {
      data: "category"
    }, {
      data: "date"
    }, {
      sortable: false,
      data: function data(row) {
        return "\n                    <div class=\"d-flex flex-\">\n                        <button type=\"submit\" class=\"btn btn-outline-primary delete-transaction-btn\" data-id=\"".concat(row.id, "\">\n                            <i class=\"bi bi-trash3-fill\"></i>\n                        </button>\n                        <button class=\"ms-2 btn btn-outline-primary edit-transaction-btn\" data-id=\"").concat(row.id, "\">\n                            <i class=\"bi bi-pencil-fill\"></i>\n                        </button>\n                        <button class=\"ms-2 btn btn-outline-primary open-receipt-upload-btn\" data-id=\"").concat(row.id, "\">\n                            <i class=\"bi bi-upload\"></i>\n                        </button>\n                    </div>\n                ");
      }
    }]
  });
  document.querySelector('#transactionsTable').addEventListener('click', function (event) {
    var editBtn = event.target.closest('.edit-transaction-btn');
    var deleteBtn = event.target.closest('.delete-transaction-btn');
    var uploadReceiptBtn = event.target.closest('.open-receipt-upload-btn');
    if (editBtn) {
      var transactionId = editBtn.getAttribute('data-id');
      (0,_ajax__WEBPACK_IMPORTED_MODULE_20__.get)("/transactions/".concat(transactionId)).then(function (response) {
        return response.json();
      }).then(function (response) {
        return openEditTransactionModal(editTransactionModal, response);
      });
    } else if (deleteBtn) {
      var _transactionId = deleteBtn.getAttribute('data-id');
      if (confirm('Are you sure you want to delete this transaction?')) {
        (0,_ajax__WEBPACK_IMPORTED_MODULE_20__.del)("/transactions/".concat(_transactionId)).then(function (response) {
          if (!response.ok) {
            throw new Error('Delete failed');
          }
          return response.json();
        }).then(function (data) {
          if (data.success) {
            table.draw();
          }
        })["catch"](function (error) {
          console.error('Delete error:', error);
        });
      }
    } else if (uploadReceiptBtn) {
      var _transactionId2 = uploadReceiptBtn.getAttribute('data-id');
      uploadReceiptModal._element.querySelector('.upload-receipt-btn').setAttribute('data-id', _transactionId2);
      uploadReceiptModal.show();
    }
  });
  document.querySelector('.create-transaction-btn').addEventListener('click', function (event) {
    (0,_ajax__WEBPACK_IMPORTED_MODULE_20__.post)("/transactions", getTransactionFormData(newTransactionModal), newTransactionModal._element).then(function (response) {
      if (response.ok) {
        table.draw();
        newTransactionModal.hide();
        // More thorough cleanup
        document.querySelectorAll('.modal-backdrop').forEach(function (el) {
          return el.remove();
        });
        document.body.classList.remove('modal-open');

        // Remove ALL overflow styles
        document.body.style.overflow = '';
        document.body.style.overflowY = '';
        document.body.style.overflowX = '';
        document.body.style.paddingRight = '';

        // Some modal libraries add these
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';

        // Force a small delay to ensure modal library finishes its cleanup
        setTimeout(function () {
          document.body.style.overflow = '';
          document.body.style.overflowY = '';
          document.body.style.paddingRight = '';
        }, 100);
      }
    });
  });
  document.querySelector('.save-transaction-btn').addEventListener('click', function (event) {
    var transactionId = event.currentTarget.getAttribute('data-id');
    (0,_ajax__WEBPACK_IMPORTED_MODULE_20__.post)("/transactions/".concat(transactionId), getTransactionFormData(editTransactionModal), editTransactionModal._element).then(function (response) {
      if (response.ok) {
        table.draw();
        editTransactionModal.hide();
      }
    });
  });
  // ADD THIS - event delegation on the modal
  uploadReceiptModal._element.addEventListener('click', function (event) {
    var uploadBtn = event.target.closest('.upload-receipt-btn');
    if (uploadBtn) {
      event.preventDefault();
      var transactionId = uploadBtn.getAttribute('data-id');
      var formData = new FormData();
      var fileInput = uploadReceiptModal._element.querySelector('input[type="file"]');
      var files = fileInput.files;
      if (files.length === 0) {
        alert('Please select a file first');
        return;
      }
      for (var i = 0; i < files.length; i++) {
        formData.append('receipt', files[i]);
      }
      console.log('Uploading receipt for transaction:', transactionId); // Debug

      // Debug: Check FormData contents before sending
      console.log('FormData entries before sending:');
      var _iterator = _createForOfIteratorHelper(formData.entries()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var pair = _step.value;
          console.log(pair[0], pair[1]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      (0,_ajax__WEBPACK_IMPORTED_MODULE_20__.post)("/transactions/".concat(transactionId, "/receipts"), formData, uploadReceiptModal._element).then(function (response) {
        console.log('Response status:', response.status); // Debug
        if (response.ok) {
          table.draw();
          uploadReceiptModal.hide();
          // Clean up backdrop
          document.querySelectorAll('.modal-backdrop').forEach(function (el) {
            return el.remove();
          });
          document.body.classList.remove('modal-open');
          document.body.style.overflow = '';
        }
      })["catch"](function (error) {
        console.error('Upload error:', error); // Debug
      });
    }
  });
  /*
      document.querySelector('.upload-receipt-btn').addEventListener('click', function (event) {
          const transactionId = event.currentTarget.getAttribute('data-id')
          const formData      = new FormData();
          const files         = uploadReceiptModal._element.querySelector('input[type="file"]').files;
  
          for (let i = 0; i < files.length; i++) {
              formData.append('receipt', files[i]);
          }
  
          post(`/transactions/${ transactionId }/receipts`, formData, uploadReceiptModal._element)
              .then(response => {
                  if (response.ok) {
                      table.draw()
                      uploadReceiptModal.hide()
                  }
              })
      })*/
});
function getTransactionFormData(modal) {
  var data = {};
  var fields = [].concat(_toConsumableArray(modal._element.getElementsByTagName('input')), _toConsumableArray(modal._element.getElementsByTagName('select')));
  fields.forEach(function (select) {
    data[select.name] = select.value;
  });
  return data;
}
function openEditTransactionModal(modal, _ref) {
  var id = _ref.id,
    data = _objectWithoutProperties(_ref, _excluded);
  for (var name in data) {
    var nameInput = modal._element.querySelector("[name=\"".concat(name, "\"]"));
    nameInput.value = data[name];
  }
  modal._element.querySelector('.save-transaction-btn').setAttribute('data-id', id);
  modal.show();
}

/***/ },

/***/ "./node_modules/core-js/internals/schedulers-fix.js"
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/schedulers-fix.js ***!
  \**********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {


var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var ENVIRONMENT = __webpack_require__(/*! ../internals/environment */ "./node_modules/core-js/internals/environment.js");
var USER_AGENT = __webpack_require__(/*! ../internals/environment-user-agent */ "./node_modules/core-js/internals/environment-user-agent.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");
var validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ "./node_modules/core-js/internals/validate-arguments-length.js");

var Function = globalThis.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENVIRONMENT === 'BUN' && (function () {
  var version = globalThis.Bun.version.split('.');
  return version.length < 3 || version[0] === '0' && (version[1] < 3 || version[1] === '3' && version[2] === '0');
})();

// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function (scheduler, hasTimeArg) {
  var firstParamIndex = hasTimeArg ? 2 : 1;
  return WRAP ? function (handler, timeout /* , ...arguments */) {
    var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
    var fn = isCallable(handler) ? handler : Function(handler);
    var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
    var callback = boundArgs ? function () {
      apply(fn, this, params);
    } : fn;
    return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
  } : scheduler;
};


/***/ },

/***/ "./node_modules/core-js/modules/es.array.index-of.js"
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this-clause */ "./node_modules/core-js/internals/function-uncurry-this-clause.js");
var $indexOf = (__webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeIndexOf = uncurryThis([].indexOf);

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: FORCED }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf(this, searchElement, fromIndex) || 0
      : $indexOf(this, searchElement, fromIndex);
  }
});


/***/ },

/***/ "./node_modules/core-js/modules/web.set-interval.js"
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.set-interval.js ***!
  \**********************************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var schedulersFix = __webpack_require__(/*! ../internals/schedulers-fix */ "./node_modules/core-js/internals/schedulers-fix.js");

var setInterval = schedulersFix(globalThis.setInterval, true);

// Bun / IE9- setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
$({ global: true, bind: true, forced: globalThis.setInterval !== setInterval }, {
  setInterval: setInterval
});


/***/ },

/***/ "./node_modules/core-js/modules/web.set-timeout.js"
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/web.set-timeout.js ***!
  \*********************************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var schedulersFix = __webpack_require__(/*! ../internals/schedulers-fix */ "./node_modules/core-js/internals/schedulers-fix.js");

var setTimeout = schedulersFix(globalThis.setTimeout, true);

// Bun / IE9- setTimeout additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
$({ global: true, bind: true, forced: globalThis.setTimeout !== setTimeout }, {
  setTimeout: setTimeout
});


/***/ },

/***/ "./node_modules/core-js/modules/web.timers.js"
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(/*! ../modules/web.set-interval */ "./node_modules/core-js/modules/web.set-interval.js");
__webpack_require__(/*! ../modules/web.set-timeout */ "./node_modules/core-js/modules/web.set-timeout.js");


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
/******/ 			"transactions": 0
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
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-ab5eba"], () => (__webpack_require__("./resources/js/transactions.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLDJDQUEyQywwQ0FBMEM7V0FDckYsTUFBTTtXQUNOLDJDQUEyQyxnQ0FBZ0M7V0FDM0U7V0FDQSxLQUFLLHlCQUF5QjtXQUM5QjtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsMENBQTBDLHdDQUF3QztXQUNsRjtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSw0Rzs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cGVubmllcy8uL3Jlc291cmNlcy9qcy9hamF4LmpzIiwid2VicGFjazovL2V4cGVubmllcy8uL3Jlc291cmNlcy9qcy90cmFuc2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4LmpzIiwid2VicGFjazovL2V4cGVubmllcy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5kZXgtb2YuanMiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuc2V0LWludGVydmFsLmpzIiwid2VicGFjazovL2V4cGVubmllcy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnNldC10aW1lb3V0LmpzIiwid2VicGFjazovL2V4cGVubmllcy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyIsIndlYnBhY2s6Ly9leHBlbm5pZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhamF4ID0gKHVybCwgbWV0aG9kID0gJ2dldCcsIGRhdGEgPSB7fSwgZG9tRWxlbWVudCA9IG51bGwpID0+IHtcclxuICAgIG1ldGhvZCA9IG1ldGhvZC50b0xvd2VyQ2FzZSgpXHJcblxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNzcmZNZXRob2RzID0gbmV3IFNldChbJ3Bvc3QnLCAncHV0JywgJ2RlbGV0ZScsICdwYXRjaCddKVxyXG5cclxuICAgIGlmIChjc3JmTWV0aG9kcy5oYXMobWV0aG9kKSkge1xyXG4gICAgICAgIGxldCBhZGRpdGlvbmFsRmllbGRzPXsuLi5nZXRDc3JmRmllbGRzKCl9XHJcbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3Bvc3QnKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMubWV0aG9kID0gJ3Bvc3QnXHJcblxyXG4gICAgICAgICAgICAvL2RhdGEgPSB7Li4uZGF0YSwgX01FVEhPRDogbWV0aG9kLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgIGFkZGl0aW9uYWxGaWVsZHMuX01FVEhPRCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBhZGRpdGlvbmFsRmllbGQgaW4gYWRkaXRpb25hbEZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoYWRkaXRpb25hbEZpZWxkLCBhZGRpdGlvbmFsRmllbGRzW2FkZGl0aW9uYWxGaWVsZF0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddO1xyXG5cclxuICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gZGF0YVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHsuLi5kYXRhLCAuLi5hZGRpdGlvbmFsRmllbGRzfSlcclxuICAgICAgICAgICAvLyBvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeSh7Li4uZGF0YSwgLi4uZ2V0Q3NyZkZpZWxkcygpfSlcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ2dldCcpIHtcclxuICAgICAgICB1cmwgKz0gJz8nICsgKG5ldyBVUkxTZWFyY2hQYXJhbXMoZGF0YSkpLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucykudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKGRvbUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY2xlYXJWYWxpZGF0aW9uRXJyb3JzKGRvbUVsZW1lbnQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISByZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKGVycm9ycyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlVmFsaWRhdGlvbkVycm9ycyhlcnJvcnMsIGRvbUVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgIH0pXHJcbn1cclxuY29uc3QgZ2V0ICA9ICh1cmwsIGRhdGEpID0+IGFqYXgodXJsLCAnZ2V0JywgZGF0YSlcclxuY29uc3QgcG9zdCA9ICh1cmwsIGRhdGEsIGRvbUVsZW1lbnQpID0+IGFqYXgodXJsLCAncG9zdCcsIGRhdGEsIGRvbUVsZW1lbnQpXHJcbmNvbnN0IGRlbCA9ICh1cmwsIGRhdGEpID0+IGFqYXgodXJsLCAnZGVsZXRlJywgZGF0YSlcclxuXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVWYWxpZGF0aW9uRXJyb3JzKGVycm9ycywgZG9tRWxlbWVudCkge1xyXG4gICAgZm9yIChjb25zdCBuYW1lIGluIGVycm9ycykge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPVwiJHsgbmFtZSB9XCJdYClcclxuXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1pbnZhbGlkJylcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBlcnJvciBvZiBlcnJvcnNbbmFtZV0pIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICAgICAgICAgICAgZXJyb3JEaXYuY2xhc3NMaXN0LmFkZCgnaW52YWxpZC1mZWVkYmFjaycpXHJcbiAgICAgICAgICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gZXJyb3JzW25hbWVdWzBdXHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kKGVycm9yRGl2KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJWYWxpZGF0aW9uRXJyb3JzKGRvbUVsZW1lbnQpIHtcclxuICAgIGRvbUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlzLWludmFsaWQnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWludmFsaWQnKVxyXG5cclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbCgnLmludmFsaWQtZmVlZGJhY2snKS5mb3JFYWNoKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5yZW1vdmUoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDc3JmRmllbGRzKCkge1xyXG4gICAgY29uc3QgY3NyZk5hbWVGaWVsZCAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3NyZk5hbWUnKVxyXG4gICAgY29uc3QgY3NyZlZhbHVlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3NyZlZhbHVlJylcclxuICAgIGNvbnN0IGNzcmZOYW1lS2V5ICAgID0gY3NyZk5hbWVGaWVsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKVxyXG4gICAgY29uc3QgY3NyZk5hbWUgICAgICAgPSBjc3JmTmFtZUZpZWxkLmNvbnRlbnRcclxuICAgIGNvbnN0IGNzcmZWYWx1ZUtleSAgID0gY3NyZlZhbHVlRmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJylcclxuICAgIGNvbnN0IGNzcmZWYWx1ZSAgICAgID0gY3NyZlZhbHVlRmllbGQuY29udGVudFxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgW2NzcmZOYW1lS2V5XTogY3NyZk5hbWUsXHJcbiAgICAgICAgW2NzcmZWYWx1ZUtleV06IGNzcmZWYWx1ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgYWpheCxcclxuICAgIGdldCxcclxuICAgIHBvc3QsXHJcbiAgICBkZWxcclxufSIsImltcG9ydCB7IE1vZGFsIH0gICAgICAgICAgZnJvbSBcImJvb3RzdHJhcFwiXHJcbmltcG9ydCB7IGdldCwgcG9zdCwgZGVsIH0gZnJvbSBcIi4vYWpheFwiXHJcbmltcG9ydCBEYXRhVGFibGUgICAgICAgICAgZnJvbSBcImRhdGF0YWJsZXMubmV0XCJcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgbmV3VHJhbnNhY3Rpb25Nb2RhbCAgPSBuZXcgTW9kYWwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1RyYW5zYWN0aW9uTW9kYWwnKSlcclxuICAgIGNvbnN0IGVkaXRUcmFuc2FjdGlvbk1vZGFsID0gbmV3IE1vZGFsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0VHJhbnNhY3Rpb25Nb2RhbCcpKVxyXG4gICAgY29uc3QgdXBsb2FkUmVjZWlwdE1vZGFsRWwgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwbG9hZFJlY2VpcHRNb2RhbCcpXHJcbiAgICBjb25zdCB1cGxvYWRSZWNlaXB0TW9kYWwgICAgPSBuZXcgTW9kYWwodXBsb2FkUmVjZWlwdE1vZGFsRWwpXHJcblxyXG4gICAgY29uc3QgdGFibGUgPSBuZXcgRGF0YVRhYmxlKCcjdHJhbnNhY3Rpb25zVGFibGUnLCB7XHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBhamF4OiAnL3RyYW5zYWN0aW9ucy9sb2FkJyxcclxuICAgICAgICBvcmRlck11bHRpOiBmYWxzZSxcclxuICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICAgIHtkYXRhOiBcImRlc2NyaXB0aW9uXCJ9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiByb3cgPT4gbmV3IEludGwuTnVtYmVyRm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgICAgICdlbi1VUycsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k6ICdVU0QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVNpZ246ICdhY2NvdW50aW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICkuZm9ybWF0KHJvdy5hbW91bnQpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtkYXRhOiBcImNhdGVnb3J5XCJ9LFxyXG4gICAgICAgICAgICB7ZGF0YTogXCJkYXRlXCJ9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiByb3cgPT4gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBkZWxldGUtdHJhbnNhY3Rpb24tYnRuXCIgZGF0YS1pZD1cIiR7IHJvdy5pZCB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLXRyYXNoMy1maWxsXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1zLTIgYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgZWRpdC10cmFuc2FjdGlvbi1idG5cIiBkYXRhLWlkPVwiJHsgcm93LmlkIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktcGVuY2lsLWZpbGxcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibXMtMiBidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBvcGVuLXJlY2VpcHQtdXBsb2FkLWJ0blwiIGRhdGEtaWQ9XCIkeyByb3cuaWQgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS11cGxvYWRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyYW5zYWN0aW9uc1RhYmxlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBlZGl0QnRuICAgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmVkaXQtdHJhbnNhY3Rpb24tYnRuJylcclxuICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmRlbGV0ZS10cmFuc2FjdGlvbi1idG4nKVxyXG4gICAgICAgIGNvbnN0IHVwbG9hZFJlY2VpcHRCdG4gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLm9wZW4tcmVjZWlwdC11cGxvYWQtYnRuJylcclxuICAgICAgICBpZiAoZWRpdEJ0bikge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbklkID0gZWRpdEJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxyXG5cclxuICAgICAgICAgICAgZ2V0KGAvdHJhbnNhY3Rpb25zLyR7IHRyYW5zYWN0aW9uSWQgfWApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBvcGVuRWRpdFRyYW5zYWN0aW9uTW9kYWwoZWRpdFRyYW5zYWN0aW9uTW9kYWwsIHJlc3BvbnNlKSlcclxuICAgICAgICB9ICBlbHNlIGlmIChkZWxldGVCdG4pIHtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25JZCA9IGRlbGV0ZUJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0cmFuc2FjdGlvbj8nKSkge1xyXG4gICAgICAgICAgICAgICAgZGVsKGAvdHJhbnNhY3Rpb25zLyR7IHRyYW5zYWN0aW9uSWQgfWApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RlbGV0ZSBmYWlsZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRGVsZXRlIGVycm9yOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZiAodXBsb2FkUmVjZWlwdEJ0bikge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbklkID0gdXBsb2FkUmVjZWlwdEJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxyXG5cclxuICAgICAgICAgICAgdXBsb2FkUmVjZWlwdE1vZGFsLl9lbGVtZW50XHJcbiAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLnVwbG9hZC1yZWNlaXB0LWJ0bicpXHJcbiAgICAgICAgICAgICAgICAuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgdHJhbnNhY3Rpb25JZClcclxuXHJcbiAgICAgICAgICAgIHVwbG9hZFJlY2VpcHRNb2RhbC5zaG93KClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtdHJhbnNhY3Rpb24tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBwb3N0KGAvdHJhbnNhY3Rpb25zYCwgZ2V0VHJhbnNhY3Rpb25Gb3JtRGF0YShuZXdUcmFuc2FjdGlvbk1vZGFsKSwgbmV3VHJhbnNhY3Rpb25Nb2RhbC5fZWxlbWVudClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuZHJhdygpXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VHJhbnNhY3Rpb25Nb2RhbC5oaWRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW9yZSB0aG9yb3VnaCBjbGVhbnVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1iYWNrZHJvcCcpLmZvckVhY2goZWwgPT4gZWwucmVtb3ZlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBBTEwgb3ZlcmZsb3cgc3R5bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1ggPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNvbWUgbW9kYWwgbGlicmFyaWVzIGFkZCB0aGVzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUud2lkdGggPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvcmNlIGEgc21hbGwgZGVsYXkgdG8gZW5zdXJlIG1vZGFsIGxpYnJhcnkgZmluaXNoZXMgaXRzIGNsZWFudXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmUtdHJhbnNhY3Rpb24tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbklkID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxyXG5cclxuICAgICAgICBwb3N0KGAvdHJhbnNhY3Rpb25zLyR7IHRyYW5zYWN0aW9uSWQgfWAsIGdldFRyYW5zYWN0aW9uRm9ybURhdGEoZWRpdFRyYW5zYWN0aW9uTW9kYWwpLCBlZGl0VHJhbnNhY3Rpb25Nb2RhbC5fZWxlbWVudClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuZHJhdygpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFRyYW5zYWN0aW9uTW9kYWwuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgLy8gQUREIFRISVMgLSBldmVudCBkZWxlZ2F0aW9uIG9uIHRoZSBtb2RhbFxyXG4gICAgdXBsb2FkUmVjZWlwdE1vZGFsLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgdXBsb2FkQnRuID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy51cGxvYWQtcmVjZWlwdC1idG4nKTtcclxuXHJcbiAgICAgICAgaWYgKHVwbG9hZEJ0bikge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbklkID0gdXBsb2FkQnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlSW5wdXQgPSB1cGxvYWRSZWNlaXB0TW9kYWwuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImZpbGVcIl0nKTtcclxuICAgICAgICAgICAgY29uc3QgZmlsZXMgPSBmaWxlSW5wdXQuZmlsZXM7XHJcblxyXG4gICAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnUGxlYXNlIHNlbGVjdCBhIGZpbGUgZmlyc3QnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdyZWNlaXB0JywgZmlsZXNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVXBsb2FkaW5nIHJlY2VpcHQgZm9yIHRyYW5zYWN0aW9uOicsIHRyYW5zYWN0aW9uSWQpOyAvLyBEZWJ1Z1xyXG5cclxuICAgICAgICAgICAgLy8gRGVidWc6IENoZWNrIEZvcm1EYXRhIGNvbnRlbnRzIGJlZm9yZSBzZW5kaW5nXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGb3JtRGF0YSBlbnRyaWVzIGJlZm9yZSBzZW5kaW5nOicpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwYWlyIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFpclswXSwgcGFpclsxXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBvc3QoYC90cmFuc2FjdGlvbnMvJHt0cmFuc2FjdGlvbklkfS9yZWNlaXB0c2AsIGZvcm1EYXRhLCB1cGxvYWRSZWNlaXB0TW9kYWwuX2VsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIHN0YXR1czonLCByZXNwb25zZS5zdGF0dXMpOyAvLyBEZWJ1Z1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwbG9hZFJlY2VpcHRNb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIGJhY2tkcm9wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1iYWNrZHJvcCcpLmZvckVhY2goZWwgPT4gZWwucmVtb3ZlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VwbG9hZCBlcnJvcjonLCBlcnJvcik7IC8vIERlYnVnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuLypcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGxvYWQtcmVjZWlwdC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uSWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXHJcbiAgICAgICAgY29uc3QgZm9ybURhdGEgICAgICA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGNvbnN0IGZpbGVzICAgICAgICAgPSB1cGxvYWRSZWNlaXB0TW9kYWwuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5maWxlcztcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3JlY2VpcHQnLCBmaWxlc1tpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwb3N0KGAvdHJhbnNhY3Rpb25zLyR7IHRyYW5zYWN0aW9uSWQgfS9yZWNlaXB0c2AsIGZvcm1EYXRhLCB1cGxvYWRSZWNlaXB0TW9kYWwuX2VsZW1lbnQpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLmRyYXcoKVxyXG4gICAgICAgICAgICAgICAgICAgIHVwbG9hZFJlY2VpcHRNb2RhbC5oaWRlKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH0pKi9cclxufSlcclxuXHJcbmZ1bmN0aW9uIGdldFRyYW5zYWN0aW9uRm9ybURhdGEobW9kYWwpIHtcclxuICAgIGxldCBkYXRhICAgICA9IHt9XHJcbiAgICBjb25zdCBmaWVsZHMgPSBbXHJcbiAgICAgICAgLi4ubW9kYWwuX2VsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JyksXHJcbiAgICAgICAgLi4ubW9kYWwuX2VsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NlbGVjdCcpXHJcbiAgICBdXHJcblxyXG4gICAgZmllbGRzLmZvckVhY2goc2VsZWN0ID0+IHtcclxuICAgICAgICBkYXRhW3NlbGVjdC5uYW1lXSA9IHNlbGVjdC52YWx1ZVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuRWRpdFRyYW5zYWN0aW9uTW9kYWwobW9kYWwsIHtpZCwgLi4uZGF0YX0pIHtcclxuICAgIGZvciAobGV0IG5hbWUgaW4gZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IG1vZGFsLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPVwiJHsgbmFtZSB9XCJdYClcclxuXHJcbiAgICAgICAgbmFtZUlucHV0LnZhbHVlID0gZGF0YVtuYW1lXVxyXG4gICAgfVxyXG5cclxuICAgIG1vZGFsLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlLXRyYW5zYWN0aW9uLWJ0bicpLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKVxyXG5cclxuICAgIG1vZGFsLnNob3coKVxyXG59IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBFTlZJUk9OTUVOVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudCcpO1xudmFyIFVTRVJfQUdFTlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdXNlci1hZ2VudCcpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcbnZhciB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92YWxpZGF0ZS1hcmd1bWVudHMtbGVuZ3RoJyk7XG5cbnZhciBGdW5jdGlvbiA9IGdsb2JhbFRoaXMuRnVuY3Rpb247XG4vLyBkaXJ0eSBJRTktIGFuZCBCdW4gMC4zLjAtIGNoZWNrc1xudmFyIFdSQVAgPSAvTVNJRSAuXFwuLy50ZXN0KFVTRVJfQUdFTlQpIHx8IEVOVklST05NRU5UID09PSAnQlVOJyAmJiAoZnVuY3Rpb24gKCkge1xuICB2YXIgdmVyc2lvbiA9IGdsb2JhbFRoaXMuQnVuLnZlcnNpb24uc3BsaXQoJy4nKTtcbiAgcmV0dXJuIHZlcnNpb24ubGVuZ3RoIDwgMyB8fCB2ZXJzaW9uWzBdID09PSAnMCcgJiYgKHZlcnNpb25bMV0gPCAzIHx8IHZlcnNpb25bMV0gPT09ICczJyAmJiB2ZXJzaW9uWzJdID09PSAnMCcpO1xufSkoKTtcblxuLy8gSUU5LSAvIEJ1biAwLjMuMC0gc2V0VGltZW91dCAvIHNldEludGVydmFsIC8gc2V0SW1tZWRpYXRlIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vb3Zlbi1zaC9idW4vaXNzdWVzLzE2MzNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgaGFzVGltZUFyZykge1xuICB2YXIgZmlyc3RQYXJhbUluZGV4ID0gaGFzVGltZUFyZyA/IDIgOiAxO1xuICByZXR1cm4gV1JBUCA/IGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoKGFyZ3VtZW50cy5sZW5ndGgsIDEpID4gZmlyc3RQYXJhbUluZGV4O1xuICAgIHZhciBmbiA9IGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcik7XG4gICAgdmFyIHBhcmFtcyA9IGJvdW5kQXJncyA/IGFycmF5U2xpY2UoYXJndW1lbnRzLCBmaXJzdFBhcmFtSW5kZXgpIDogW107XG4gICAgdmFyIGNhbGxiYWNrID0gYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgYXBwbHkoZm4sIHRoaXMsIHBhcmFtcyk7XG4gICAgfSA6IGZuO1xuICAgIHJldHVybiBoYXNUaW1lQXJnID8gc2NoZWR1bGVyKGNhbGxiYWNrLCB0aW1lb3V0KSA6IHNjaGVkdWxlcihjYWxsYmFjayk7XG4gIH0gOiBzY2hlZHVsZXI7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWluZGV4b2YgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UnKTtcbnZhciAkaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBuYXRpdmVJbmRleE9mID0gdW5jdXJyeVRoaXMoW10uaW5kZXhPZik7XG5cbnZhciBORUdBVElWRV9aRVJPID0gISFuYXRpdmVJbmRleE9mICYmIDEgLyBuYXRpdmVJbmRleE9mKFsxXSwgMSwgLTApIDwgMDtcbnZhciBGT1JDRUQgPSBORUdBVElWRV9aRVJPIHx8ICFhcnJheU1ldGhvZElzU3RyaWN0KCdpbmRleE9mJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICBpbmRleE9mOiBmdW5jdGlvbiBpbmRleE9mKHNlYXJjaEVsZW1lbnQgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgdmFyIGZyb21JbmRleCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBORUdBVElWRV9aRVJPXG4gICAgICAvLyBjb252ZXJ0IC0wIHRvICswXG4gICAgICA/IG5hdGl2ZUluZGV4T2YodGhpcywgc2VhcmNoRWxlbWVudCwgZnJvbUluZGV4KSB8fCAwXG4gICAgICA6ICRpbmRleE9mKHRoaXMsIHNlYXJjaEVsZW1lbnQsIGZyb21JbmRleCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHNjaGVkdWxlcnNGaXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2NoZWR1bGVycy1maXgnKTtcblxudmFyIHNldEludGVydmFsID0gc2NoZWR1bGVyc0ZpeChnbG9iYWxUaGlzLnNldEludGVydmFsLCB0cnVlKTtcblxuLy8gQnVuIC8gSUU5LSBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBnbG9iYWxUaGlzLnNldEludGVydmFsICE9PSBzZXRJbnRlcnZhbCB9LCB7XG4gIHNldEludGVydmFsOiBzZXRJbnRlcnZhbFxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgc2NoZWR1bGVyc0ZpeCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zY2hlZHVsZXJzLWZpeCcpO1xuXG52YXIgc2V0VGltZW91dCA9IHNjaGVkdWxlcnNGaXgoZ2xvYmFsVGhpcy5zZXRUaW1lb3V0LCB0cnVlKTtcblxuLy8gQnVuIC8gSUU5LSBzZXRUaW1lb3V0IGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldHRpbWVvdXRcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogZ2xvYmFsVGhpcy5zZXRUaW1lb3V0ICE9PSBzZXRUaW1lb3V0IH0sIHtcbiAgc2V0VGltZW91dDogc2V0VGltZW91dFxufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgdGhpcyBtb2R1bGUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIHNwbGl0IHRvIG1vZHVsZXMgbGlzdGVkIGJlbG93XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5zZXQtaW50ZXJ2YWwnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLnNldC10aW1lb3V0Jyk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG5jb25zdCBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGNvbnN0IGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHRjb25zdCBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0Y29uc3QgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJjb25zdCBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHRsZXQgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0bGV0IGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdGNvbnN0IHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0Y29uc3QgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIvdmFsdWUgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGlmKEFycmF5LmlzQXJyYXkoZGVmaW5pdGlvbikpIHtcblx0XHR2YXIgaSA9IDA7XG5cdFx0d2hpbGUoaSA8IGRlZmluaXRpb24ubGVuZ3RoKSB7XG5cdFx0XHR2YXIga2V5ID0gZGVmaW5pdGlvbltpKytdO1xuXHRcdFx0dmFyIGJpbmRpbmcgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdFx0aWYoYmluZGluZyA9PT0gMCkge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IGRlZmluaXRpb25baSsrXSB9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogYmluZGluZyB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmKGJpbmRpbmcgPT09IDApIHsgaSsrOyB9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZihTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuY29uc3QgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInRyYW5zYWN0aW9uc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG5jb25zdCB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHRsZXQgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG5jb25zdCBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rZXhwZW5uaWVzXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2V4cGVubmllc1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbmxldCBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfYm9vdHN0cmFwX2Rpc3RfanNfYm9vdHN0cmFwX2VzbV9qc1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfY29yZS1qc19tb2R1bGVzX2VzX2FycmF5X2NvbmNhdF9qcy1ub2RlX21vZHVsZXNfY29yZS1qc19tb2R1bGVzX2VzX2FycmF5LWFiNWViYVwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3Jlc291cmNlcy9qcy90cmFuc2FjdGlvbnMuanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJhamF4IiwidXJsIiwibWV0aG9kIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZGF0YSIsImRvbUVsZW1lbnQiLCJ0b0xvd2VyQ2FzZSIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiY3NyZk1ldGhvZHMiLCJTZXQiLCJoYXMiLCJhZGRpdGlvbmFsRmllbGRzIiwiX29iamVjdFNwcmVhZCIsImdldENzcmZGaWVsZHMiLCJfTUVUSE9EIiwidG9VcHBlckNhc2UiLCJGb3JtRGF0YSIsImFkZGl0aW9uYWxGaWVsZCIsImFwcGVuZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiVVJMU2VhcmNoUGFyYW1zIiwidG9TdHJpbmciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImNsZWFyVmFsaWRhdGlvbkVycm9ycyIsIm9rIiwic3RhdHVzIiwianNvbiIsImVycm9ycyIsImhhbmRsZVZhbGlkYXRpb25FcnJvcnMiLCJnZXQiLCJwb3N0IiwiZGVsIiwibmFtZSIsImVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29uY2F0IiwiY2xhc3NMaXN0IiwiYWRkIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImVycm9yIiwidmFsdWUiLCJlcnJvckRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwicGFyZW50Tm9kZSIsImVyciIsImUiLCJmIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJyZW1vdmUiLCJjc3JmTmFtZUZpZWxkIiwiY3NyZlZhbHVlRmllbGQiLCJjc3JmTmFtZUtleSIsImdldEF0dHJpYnV0ZSIsImNzcmZOYW1lIiwiY29udGVudCIsImNzcmZWYWx1ZUtleSIsImNzcmZWYWx1ZSIsIl9kZWZpbmVQcm9wZXJ0eSIsIk1vZGFsIiwiRGF0YVRhYmxlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5ld1RyYW5zYWN0aW9uTW9kYWwiLCJnZXRFbGVtZW50QnlJZCIsImVkaXRUcmFuc2FjdGlvbk1vZGFsIiwidXBsb2FkUmVjZWlwdE1vZGFsRWwiLCJ1cGxvYWRSZWNlaXB0TW9kYWwiLCJ0YWJsZSIsInNlcnZlclNpZGUiLCJvcmRlck11bHRpIiwiY29sdW1ucyIsInJvdyIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiY3VycmVuY3lTaWduIiwiZm9ybWF0IiwiYW1vdW50Iiwic29ydGFibGUiLCJpZCIsImV2ZW50IiwiZWRpdEJ0biIsInRhcmdldCIsImNsb3Nlc3QiLCJkZWxldGVCdG4iLCJ1cGxvYWRSZWNlaXB0QnRuIiwidHJhbnNhY3Rpb25JZCIsIm9wZW5FZGl0VHJhbnNhY3Rpb25Nb2RhbCIsImNvbmZpcm0iLCJFcnJvciIsInN1Y2Nlc3MiLCJkcmF3IiwiY29uc29sZSIsIl9lbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic2hvdyIsImdldFRyYW5zYWN0aW9uRm9ybURhdGEiLCJoaWRlIiwiZWwiLCJvdmVyZmxvdyIsIm92ZXJmbG93WSIsIm92ZXJmbG93WCIsInBhZGRpbmdSaWdodCIsInBvc2l0aW9uIiwidG9wIiwid2lkdGgiLCJzZXRUaW1lb3V0IiwiY3VycmVudFRhcmdldCIsInVwbG9hZEJ0biIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJmaWxlSW5wdXQiLCJmaWxlcyIsImFsZXJ0IiwiaSIsImxvZyIsImVudHJpZXMiLCJwYWlyIiwibW9kYWwiLCJmaWVsZHMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNlbGVjdCIsIl9yZWYiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJuYW1lSW5wdXQiXSwic291cmNlUm9vdCI6IiJ9