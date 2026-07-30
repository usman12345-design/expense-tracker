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
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ajax */ "./resources/js/ajax.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");
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
  var newTransactionModal = new bootstrap__WEBPACK_IMPORTED_MODULE_20__.Modal(document.getElementById('newTransactionModal'));
  var editTransactionModal = new bootstrap__WEBPACK_IMPORTED_MODULE_20__.Modal(document.getElementById('editTransactionModal'));
  var uploadReceiptModalEl = document.getElementById('uploadReceiptModal');
  var uploadReceiptModal = new bootstrap__WEBPACK_IMPORTED_MODULE_20__.Modal(uploadReceiptModalEl);
  var table = new datatables_net__WEBPACK_IMPORTED_MODULE_22__["default"]('#transactionsTable', {
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
      data: function data(row) {
        var _row$receipts;
        var icons = [];
        var receipts = (_row$receipts = row.receipts) !== null && _row$receipts !== void 0 ? _row$receipts : [];
        for (var i = 0; i < receipts.length; i++) {
          var receipt = receipts[i];
          var span = document.createElement('span');
          var anchor = document.createElement('a');
          var icon = document.createElement('i');
          var deleteIcon = document.createElement('i');
          deleteIcon.role = 'button';
          span.classList.add('position-relative');
          icon.classList.add('bi', 'bi-file-earmark-text', 'download-receipt', 'text-primary', 'fs-4');
          deleteIcon.classList.add('bi', 'bi-x-circle-fill', 'delete-receipt', 'text-danger', 'position-absolute');
          anchor.href = "/transactions/".concat(row.id, "/receipts/").concat(receipt.id);
          anchor.target = 'blank';
          anchor.title = receipt.name;
          deleteIcon.setAttribute('data-id', receipt.id);
          deleteIcon.setAttribute('data-transactionId', row.id);
          anchor.append(icon);
          span.append(anchor);
          span.append(deleteIcon);
          icons.push(span.outerHTML);
        }
        return icons.join('');
      }
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
    var deleteReceiptBtn = event.target.closest('.delete-receipt');
    if (editBtn) {
      var transactionId = editBtn.getAttribute('data-id');
      (0,_ajax__WEBPACK_IMPORTED_MODULE_21__.get)("/transactions/".concat(transactionId)).then(function (response) {
        return response.json();
      }).then(function (response) {
        return openEditTransactionModal(editTransactionModal, response);
      });
    } else if (deleteBtn) {
      var _transactionId = deleteBtn.getAttribute('data-id');
      if (confirm('Are you sure you want to delete this transaction?')) {
        (0,_ajax__WEBPACK_IMPORTED_MODULE_21__.del)("/transactions/".concat(_transactionId)).then(function (response) {
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
    } else if (deleteReceiptBtn) {
      var receiptId = deleteReceiptBtn.getAttribute('data-id');
      var _transactionId3 = deleteReceiptBtn.getAttribute('data-transactionid');
      if (confirm('Are you sure you want to delete this receipt?')) {
        (0,_ajax__WEBPACK_IMPORTED_MODULE_21__.del)("/transactions/".concat(_transactionId3, "/receipts/").concat(receiptId)).then(function (response) {
          if (response.ok) {
            table.draw();
          }
        }); // close .then()
      } // close if(confirm)
    }
  });
  document.querySelector('.create-transaction-btn').addEventListener('click', function (event) {
    (0,_ajax__WEBPACK_IMPORTED_MODULE_21__.post)("/transactions", getTransactionFormData(newTransactionModal), newTransactionModal._element).then(function (response) {
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
    (0,_ajax__WEBPACK_IMPORTED_MODULE_21__.post)("/transactions/".concat(transactionId), getTransactionFormData(editTransactionModal), editTransactionModal._element).then(function (response) {
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
      (0,_ajax__WEBPACK_IMPORTED_MODULE_21__.post)("/transactions/".concat(transactionId, "/receipts"), formData, uploadReceiptModal._element).then(function (response) {
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

/***/ "./node_modules/core-js/modules/es.array.join.js"
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var nativeJoin = uncurryThis([].join);

var ES3_STRINGS = IndexedObject !== Object;
var FORCED = ES3_STRINGS || !arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: FORCED }, {
  join: function join(separator) {
    return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator);
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
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-510176","vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_datatables_net_js_jquery-0b9330"], () => (__webpack_require__("./resources/js/transactions.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cGVubmllcy8uL3Jlc291cmNlcy9qcy9hamF4LmpzIiwid2VicGFjazovL2V4cGVubmllcy8uL3Jlc291cmNlcy9qcy90cmFuc2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4LmpzIiwid2VicGFjazovL2V4cGVubmllcy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaW5kZXgtb2YuanMiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5qb2luLmpzIiwid2VicGFjazovL2V4cGVubmllcy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnNldC1pbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly9leHBlbm5pZXMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5zZXQtdGltZW91dC5qcyIsIndlYnBhY2s6Ly9leHBlbm5pZXMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leHBlbm5pZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9leHBlbm5pZXMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9leHBlbm5pZXMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWpheCA9ICh1cmwsIG1ldGhvZCA9ICdnZXQnLCBkYXRhID0ge30sIGRvbUVsZW1lbnQgPSBudWxsKSA9PiB7XHJcbiAgICBtZXRob2QgPSBtZXRob2QudG9Mb3dlckNhc2UoKVxyXG5cclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIG1ldGhvZCxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjc3JmTWV0aG9kcyA9IG5ldyBTZXQoWydwb3N0JywgJ3B1dCcsICdkZWxldGUnLCAncGF0Y2gnXSlcclxuXHJcbiAgICBpZiAoY3NyZk1ldGhvZHMuaGFzKG1ldGhvZCkpIHtcclxuICAgICAgICBsZXQgYWRkaXRpb25hbEZpZWxkcz17Li4uZ2V0Q3NyZkZpZWxkcygpfVxyXG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwb3N0Jykge1xyXG4gICAgICAgICAgICBvcHRpb25zLm1ldGhvZCA9ICdwb3N0J1xyXG5cclxuICAgICAgICAgICAgLy9kYXRhID0gey4uLmRhdGEsIF9NRVRIT0Q6IG1ldGhvZC50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICBhZGRpdGlvbmFsRmllbGRzLl9NRVRIT0QgPSBtZXRob2QudG9VcHBlckNhc2UoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYWRkaXRpb25hbEZpZWxkIGluIGFkZGl0aW9uYWxGaWVsZHMpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuYXBwZW5kKGFkZGl0aW9uYWxGaWVsZCwgYWRkaXRpb25hbEZpZWxkc1thZGRpdGlvbmFsRmllbGRdKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkZWxldGUgb3B0aW9ucy5oZWFkZXJzWydDb250ZW50LVR5cGUnXTtcclxuXHJcbiAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IGRhdGFcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeSh7Li4uZGF0YSwgLi4uYWRkaXRpb25hbEZpZWxkc30pXHJcbiAgICAgICAgICAgLy8gb3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoey4uLmRhdGEsIC4uLmdldENzcmZGaWVsZHMoKX0pXHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdnZXQnKSB7XHJcbiAgICAgICAgdXJsICs9ICc/JyArIChuZXcgVVJMU2VhcmNoUGFyYW1zKGRhdGEpKS50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmZXRjaCh1cmwsIG9wdGlvbnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChkb21FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVmFsaWRhdGlvbkVycm9ycyhkb21FbGVtZW50KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEgcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDIyKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihlcnJvcnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVZhbGlkYXRpb25FcnJvcnMoZXJyb3JzLCBkb21FbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9KVxyXG59XHJcbmNvbnN0IGdldCAgPSAodXJsLCBkYXRhKSA9PiBhamF4KHVybCwgJ2dldCcsIGRhdGEpXHJcbmNvbnN0IHBvc3QgPSAodXJsLCBkYXRhLCBkb21FbGVtZW50KSA9PiBhamF4KHVybCwgJ3Bvc3QnLCBkYXRhLCBkb21FbGVtZW50KVxyXG5jb25zdCBkZWwgPSAodXJsLCBkYXRhKSA9PiBhamF4KHVybCwgJ2RlbGV0ZScsIGRhdGEpXHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlVmFsaWRhdGlvbkVycm9ycyhlcnJvcnMsIGRvbUVsZW1lbnQpIHtcclxuICAgIGZvciAoY29uc3QgbmFtZSBpbiBlcnJvcnMpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZT1cIiR7IG5hbWUgfVwiXWApXHJcblxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtaW52YWxpZCcpXHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZXJyb3Igb2YgZXJyb3JzW25hbWVdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgICAgICAgICAgIGVycm9yRGl2LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtZmVlZGJhY2snKVxyXG4gICAgICAgICAgICBlcnJvckRpdi50ZXh0Q29udGVudCA9IGVycm9yc1tuYW1lXVswXVxyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZChlcnJvckRpdilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyVmFsaWRhdGlvbkVycm9ycyhkb21FbGVtZW50KSB7XHJcbiAgICBkb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pcy1pbnZhbGlkJykuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1pbnZhbGlkJylcclxuXHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnZhbGlkLWZlZWRiYWNrJykuZm9yRWFjaChmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucmVtb3ZlKClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3NyZkZpZWxkcygpIHtcclxuICAgIGNvbnN0IGNzcmZOYW1lRmllbGQgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NzcmZOYW1lJylcclxuICAgIGNvbnN0IGNzcmZWYWx1ZUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NzcmZWYWx1ZScpXHJcbiAgICBjb25zdCBjc3JmTmFtZUtleSAgICA9IGNzcmZOYW1lRmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJylcclxuICAgIGNvbnN0IGNzcmZOYW1lICAgICAgID0gY3NyZk5hbWVGaWVsZC5jb250ZW50XHJcbiAgICBjb25zdCBjc3JmVmFsdWVLZXkgICA9IGNzcmZWYWx1ZUZpZWxkLmdldEF0dHJpYnV0ZSgnbmFtZScpXHJcbiAgICBjb25zdCBjc3JmVmFsdWUgICAgICA9IGNzcmZWYWx1ZUZpZWxkLmNvbnRlbnRcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIFtjc3JmTmFtZUtleV06IGNzcmZOYW1lLFxyXG4gICAgICAgIFtjc3JmVmFsdWVLZXldOiBjc3JmVmFsdWVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGFqYXgsXHJcbiAgICBnZXQsXHJcbiAgICBwb3N0LFxyXG4gICAgZGVsXHJcbn0iLCJpbXBvcnQgeyBNb2RhbCB9ICAgICAgICAgIGZyb20gXCJib290c3RyYXBcIlxyXG5pbXBvcnQgeyBnZXQsIHBvc3QsIGRlbCB9IGZyb20gXCIuL2FqYXhcIlxyXG5pbXBvcnQgRGF0YVRhYmxlICAgICAgICAgIGZyb20gXCJkYXRhdGFibGVzLm5ldFwiXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG5ld1RyYW5zYWN0aW9uTW9kYWwgID0gbmV3IE1vZGFsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUcmFuc2FjdGlvbk1vZGFsJykpXHJcbiAgICBjb25zdCBlZGl0VHJhbnNhY3Rpb25Nb2RhbCA9IG5ldyBNb2RhbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFRyYW5zYWN0aW9uTW9kYWwnKSlcclxuICAgIGNvbnN0IHVwbG9hZFJlY2VpcHRNb2RhbEVsICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGxvYWRSZWNlaXB0TW9kYWwnKVxyXG4gICAgY29uc3QgdXBsb2FkUmVjZWlwdE1vZGFsICAgID0gbmV3IE1vZGFsKHVwbG9hZFJlY2VpcHRNb2RhbEVsKVxyXG5cclxuICAgIGNvbnN0IHRhYmxlID0gbmV3IERhdGFUYWJsZSgnI3RyYW5zYWN0aW9uc1RhYmxlJywge1xyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgYWpheDogJy90cmFuc2FjdGlvbnMvbG9hZCcsXHJcbiAgICAgICAgb3JkZXJNdWx0aTogZmFsc2UsXHJcbiAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAgICB7ZGF0YTogXCJkZXNjcmlwdGlvblwifSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogcm93ID0+IG5ldyBJbnRsLk51bWJlckZvcm1hdChcclxuICAgICAgICAgICAgICAgICAgICAnZW4tVVMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5OiAnVVNEJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTaWduOiAnYWNjb3VudGluZydcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApLmZvcm1hdChyb3cuYW1vdW50KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7ZGF0YTogXCJjYXRlZ29yeVwifSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogcm93ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaWNvbnMgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY2VpcHRzID0gcm93LnJlY2VpcHRzID8/IFtdXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVjZWlwdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjZWlwdCA9IHJlY2VpcHRzW2ldXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGFuICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuY2hvciAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWNvbiAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVJY29uLnJvbGUgPSAnYnV0dG9uJ1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdwb3NpdGlvbi1yZWxhdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnYmknLCAnYmktZmlsZS1lYXJtYXJrLXRleHQnLCAnZG93bmxvYWQtcmVjZWlwdCcsICd0ZXh0LXByaW1hcnknLCAnZnMtNCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnYmknLCAnYmkteC1jaXJjbGUtZmlsbCcsICdkZWxldGUtcmVjZWlwdCcsICd0ZXh0LWRhbmdlcicsICdwb3NpdGlvbi1hYnNvbHV0ZScpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3IuaHJlZiAgID0gYC90cmFuc2FjdGlvbnMvJHsgcm93LmlkIH0vcmVjZWlwdHMvJHsgcmVjZWlwdC5pZCB9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3IudGFyZ2V0ID0gJ2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3IudGl0bGUgID0gcmVjZWlwdC5uYW1lXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVJY29uLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHJlY2VpcHQuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUljb24uc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zYWN0aW9uSWQnLCByb3cuaWQpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3IuYXBwZW5kKGljb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4uYXBwZW5kKGFuY2hvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbi5hcHBlbmQoZGVsZXRlSWNvbilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25zLnB1c2goc3Bhbi5vdXRlckhUTUwpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWNvbnMuam9pbignJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge2RhdGE6IFwiZGF0ZVwifSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcm93ID0+IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgZGVsZXRlLXRyYW5zYWN0aW9uLWJ0blwiIGRhdGEtaWQ9XCIkeyByb3cuaWQgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS10cmFzaDMtZmlsbFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtcy0yIGJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGVkaXQtdHJhbnNhY3Rpb24tYnRuXCIgZGF0YS1pZD1cIiR7IHJvdy5pZCB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLXBlbmNpbC1maWxsXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1zLTIgYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgb3Blbi1yZWNlaXB0LXVwbG9hZC1idG5cIiBkYXRhLWlkPVwiJHsgcm93LmlkIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktdXBsb2FkXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmFuc2FjdGlvbnNUYWJsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgZWRpdEJ0biAgID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5lZGl0LXRyYW5zYWN0aW9uLWJ0bicpXHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kZWxldGUtdHJhbnNhY3Rpb24tYnRuJylcclxuICAgICAgICBjb25zdCB1cGxvYWRSZWNlaXB0QnRuID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5vcGVuLXJlY2VpcHQtdXBsb2FkLWJ0bicpXHJcbiAgICAgICAgY29uc3QgZGVsZXRlUmVjZWlwdEJ0biA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZGVsZXRlLXJlY2VpcHQnKVxyXG4gICAgICAgIGlmIChlZGl0QnRuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uSWQgPSBlZGl0QnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXHJcblxyXG4gICAgICAgICAgICBnZXQoYC90cmFuc2FjdGlvbnMvJHsgdHJhbnNhY3Rpb25JZCB9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IG9wZW5FZGl0VHJhbnNhY3Rpb25Nb2RhbChlZGl0VHJhbnNhY3Rpb25Nb2RhbCwgcmVzcG9uc2UpKVxyXG4gICAgICAgIH0gIGVsc2UgaWYgKGRlbGV0ZUJ0bikge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbklkID0gZGVsZXRlQnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXHJcblxyXG4gICAgICAgICAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRyYW5zYWN0aW9uPycpKSB7XHJcbiAgICAgICAgICAgICAgICBkZWwoYC90cmFuc2FjdGlvbnMvJHsgdHJhbnNhY3Rpb25JZCB9YClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGVsZXRlIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdEZWxldGUgZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmICh1cGxvYWRSZWNlaXB0QnRuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uSWQgPSB1cGxvYWRSZWNlaXB0QnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXHJcblxyXG4gICAgICAgICAgICB1cGxvYWRSZWNlaXB0TW9kYWwuX2VsZW1lbnRcclxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcudXBsb2FkLXJlY2VpcHQtYnRuJylcclxuICAgICAgICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCB0cmFuc2FjdGlvbklkKVxyXG5cclxuICAgICAgICAgICAgdXBsb2FkUmVjZWlwdE1vZGFsLnNob3coKVxyXG4gICAgICAgIH1lbHNlIGlmIChkZWxldGVSZWNlaXB0QnRuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlY2VpcHRJZCAgICAgPSBkZWxldGVSZWNlaXB0QnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uSWQgPSBkZWxldGVSZWNlaXB0QnRuLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2FjdGlvbmlkJylcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcmVjZWlwdD8nKSkge1xyXG4gICAgICAgICAgICAgICAgZGVsKGAvdHJhbnNhY3Rpb25zLyR7IHRyYW5zYWN0aW9uSWQgfS9yZWNlaXB0cy8keyByZWNlaXB0SWQgfWApLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5kcmF3KClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSAgIC8vIGNsb3NlIC50aGVuKClcclxuICAgICAgICAgICAgfSAgICAgICAgLy8gY2xvc2UgaWYoY29uZmlybSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtdHJhbnNhY3Rpb24tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBwb3N0KGAvdHJhbnNhY3Rpb25zYCwgZ2V0VHJhbnNhY3Rpb25Gb3JtRGF0YShuZXdUcmFuc2FjdGlvbk1vZGFsKSwgbmV3VHJhbnNhY3Rpb25Nb2RhbC5fZWxlbWVudClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuZHJhdygpXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VHJhbnNhY3Rpb25Nb2RhbC5oaWRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW9yZSB0aG9yb3VnaCBjbGVhbnVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1iYWNrZHJvcCcpLmZvckVhY2goZWwgPT4gZWwucmVtb3ZlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBBTEwgb3ZlcmZsb3cgc3R5bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1ggPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNvbWUgbW9kYWwgbGlicmFyaWVzIGFkZCB0aGVzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUud2lkdGggPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvcmNlIGEgc21hbGwgZGVsYXkgdG8gZW5zdXJlIG1vZGFsIGxpYnJhcnkgZmluaXNoZXMgaXRzIGNsZWFudXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmUtdHJhbnNhY3Rpb24tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbklkID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxyXG5cclxuICAgICAgICBwb3N0KGAvdHJhbnNhY3Rpb25zLyR7IHRyYW5zYWN0aW9uSWQgfWAsIGdldFRyYW5zYWN0aW9uRm9ybURhdGEoZWRpdFRyYW5zYWN0aW9uTW9kYWwpLCBlZGl0VHJhbnNhY3Rpb25Nb2RhbC5fZWxlbWVudClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuZHJhdygpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFRyYW5zYWN0aW9uTW9kYWwuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgLy8gQUREIFRISVMgLSBldmVudCBkZWxlZ2F0aW9uIG9uIHRoZSBtb2RhbFxyXG4gICAgdXBsb2FkUmVjZWlwdE1vZGFsLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgdXBsb2FkQnRuID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy51cGxvYWQtcmVjZWlwdC1idG4nKTtcclxuXHJcbiAgICAgICAgaWYgKHVwbG9hZEJ0bikge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbklkID0gdXBsb2FkQnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlSW5wdXQgPSB1cGxvYWRSZWNlaXB0TW9kYWwuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImZpbGVcIl0nKTtcclxuICAgICAgICAgICAgY29uc3QgZmlsZXMgPSBmaWxlSW5wdXQuZmlsZXM7XHJcblxyXG4gICAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnUGxlYXNlIHNlbGVjdCBhIGZpbGUgZmlyc3QnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdyZWNlaXB0JywgZmlsZXNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVXBsb2FkaW5nIHJlY2VpcHQgZm9yIHRyYW5zYWN0aW9uOicsIHRyYW5zYWN0aW9uSWQpOyAvLyBEZWJ1Z1xyXG5cclxuICAgICAgICAgICAgLy8gRGVidWc6IENoZWNrIEZvcm1EYXRhIGNvbnRlbnRzIGJlZm9yZSBzZW5kaW5nXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGb3JtRGF0YSBlbnRyaWVzIGJlZm9yZSBzZW5kaW5nOicpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwYWlyIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFpclswXSwgcGFpclsxXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHBvc3QoYC90cmFuc2FjdGlvbnMvJHt0cmFuc2FjdGlvbklkfS9yZWNlaXB0c2AsIGZvcm1EYXRhLCB1cGxvYWRSZWNlaXB0TW9kYWwuX2VsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIHN0YXR1czonLCByZXNwb25zZS5zdGF0dXMpOyAvLyBEZWJ1Z1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwbG9hZFJlY2VpcHRNb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIGJhY2tkcm9wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1iYWNrZHJvcCcpLmZvckVhY2goZWwgPT4gZWwucmVtb3ZlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VwbG9hZCBlcnJvcjonLCBlcnJvcik7IC8vIERlYnVnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSlcclxuXHJcbmZ1bmN0aW9uIGdldFRyYW5zYWN0aW9uRm9ybURhdGEobW9kYWwpIHtcclxuICAgIGxldCBkYXRhICAgICA9IHt9XHJcbiAgICBjb25zdCBmaWVsZHMgPSBbXHJcbiAgICAgICAgLi4ubW9kYWwuX2VsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0JyksXHJcbiAgICAgICAgLi4ubW9kYWwuX2VsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NlbGVjdCcpXHJcbiAgICBdXHJcblxyXG4gICAgZmllbGRzLmZvckVhY2goc2VsZWN0ID0+IHtcclxuICAgICAgICBkYXRhW3NlbGVjdC5uYW1lXSA9IHNlbGVjdC52YWx1ZVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuRWRpdFRyYW5zYWN0aW9uTW9kYWwobW9kYWwsIHtpZCwgLi4uZGF0YX0pIHtcclxuICAgIGZvciAobGV0IG5hbWUgaW4gZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IG1vZGFsLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPVwiJHsgbmFtZSB9XCJdYClcclxuXHJcbiAgICAgICAgbmFtZUlucHV0LnZhbHVlID0gZGF0YVtuYW1lXVxyXG4gICAgfVxyXG5cclxuICAgIG1vZGFsLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlLXRyYW5zYWN0aW9uLWJ0bicpLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKVxyXG5cclxuICAgIG1vZGFsLnNob3coKVxyXG59IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBhcHBseSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1hcHBseScpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBFTlZJUk9OTUVOVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudCcpO1xudmFyIFVTRVJfQUdFTlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdXNlci1hZ2VudCcpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcbnZhciB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92YWxpZGF0ZS1hcmd1bWVudHMtbGVuZ3RoJyk7XG5cbnZhciBGdW5jdGlvbiA9IGdsb2JhbFRoaXMuRnVuY3Rpb247XG4vLyBkaXJ0eSBJRTktIGFuZCBCdW4gMC4zLjAtIGNoZWNrc1xudmFyIFdSQVAgPSAvTVNJRSAuXFwuLy50ZXN0KFVTRVJfQUdFTlQpIHx8IEVOVklST05NRU5UID09PSAnQlVOJyAmJiAoZnVuY3Rpb24gKCkge1xuICB2YXIgdmVyc2lvbiA9IGdsb2JhbFRoaXMuQnVuLnZlcnNpb24uc3BsaXQoJy4nKTtcbiAgcmV0dXJuIHZlcnNpb24ubGVuZ3RoIDwgMyB8fCB2ZXJzaW9uWzBdID09PSAnMCcgJiYgKHZlcnNpb25bMV0gPCAzIHx8IHZlcnNpb25bMV0gPT09ICczJyAmJiB2ZXJzaW9uWzJdID09PSAnMCcpO1xufSkoKTtcblxuLy8gSUU5LSAvIEJ1biAwLjMuMC0gc2V0VGltZW91dCAvIHNldEludGVydmFsIC8gc2V0SW1tZWRpYXRlIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vb3Zlbi1zaC9idW4vaXNzdWVzLzE2MzNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgaGFzVGltZUFyZykge1xuICB2YXIgZmlyc3RQYXJhbUluZGV4ID0gaGFzVGltZUFyZyA/IDIgOiAxO1xuICByZXR1cm4gV1JBUCA/IGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoKGFyZ3VtZW50cy5sZW5ndGgsIDEpID4gZmlyc3RQYXJhbUluZGV4O1xuICAgIHZhciBmbiA9IGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcik7XG4gICAgdmFyIHBhcmFtcyA9IGJvdW5kQXJncyA/IGFycmF5U2xpY2UoYXJndW1lbnRzLCBmaXJzdFBhcmFtSW5kZXgpIDogW107XG4gICAgdmFyIGNhbGxiYWNrID0gYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgYXBwbHkoZm4sIHRoaXMsIHBhcmFtcyk7XG4gICAgfSA6IGZuO1xuICAgIHJldHVybiBoYXNUaW1lQXJnID8gc2NoZWR1bGVyKGNhbGxiYWNrLCB0aW1lb3V0KSA6IHNjaGVkdWxlcihjYWxsYmFjayk7XG4gIH0gOiBzY2hlZHVsZXI7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWluZGV4b2YgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy1jbGF1c2UnKTtcbnZhciAkaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBuYXRpdmVJbmRleE9mID0gdW5jdXJyeVRoaXMoW10uaW5kZXhPZik7XG5cbnZhciBORUdBVElWRV9aRVJPID0gISFuYXRpdmVJbmRleE9mICYmIDEgLyBuYXRpdmVJbmRleE9mKFsxXSwgMSwgLTApIDwgMDtcbnZhciBGT1JDRUQgPSBORUdBVElWRV9aRVJPIHx8ICFhcnJheU1ldGhvZElzU3RyaWN0KCdpbmRleE9mJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICBpbmRleE9mOiBmdW5jdGlvbiBpbmRleE9mKHNlYXJjaEVsZW1lbnQgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgdmFyIGZyb21JbmRleCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBORUdBVElWRV9aRVJPXG4gICAgICAvLyBjb252ZXJ0IC0wIHRvICswXG4gICAgICA/IG5hdGl2ZUluZGV4T2YodGhpcywgc2VhcmNoRWxlbWVudCwgZnJvbUluZGV4KSB8fCAwXG4gICAgICA6ICRpbmRleE9mKHRoaXMsIHNlYXJjaEVsZW1lbnQsIGZyb21JbmRleCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgbmF0aXZlSm9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xuXG52YXIgRVMzX1NUUklOR1MgPSBJbmRleGVkT2JqZWN0ICE9PSBPYmplY3Q7XG52YXIgRk9SQ0VEID0gRVMzX1NUUklOR1MgfHwgIWFycmF5TWV0aG9kSXNTdHJpY3QoJ2pvaW4nLCAnLCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmpvaW5gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuam9pblxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmF0aXZlSm9pbih0b0luZGV4ZWRPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgc2NoZWR1bGVyc0ZpeCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zY2hlZHVsZXJzLWZpeCcpO1xuXG52YXIgc2V0SW50ZXJ2YWwgPSBzY2hlZHVsZXJzRml4KGdsb2JhbFRoaXMuc2V0SW50ZXJ2YWwsIHRydWUpO1xuXG4vLyBCdW4gLyBJRTktIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IGdsb2JhbFRoaXMuc2V0SW50ZXJ2YWwgIT09IHNldEludGVydmFsIH0sIHtcbiAgc2V0SW50ZXJ2YWw6IHNldEludGVydmFsXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBzY2hlZHVsZXJzRml4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4Jyk7XG5cbnZhciBzZXRUaW1lb3V0ID0gc2NoZWR1bGVyc0ZpeChnbG9iYWxUaGlzLnNldFRpbWVvdXQsIHRydWUpO1xuXG4vLyBCdW4gLyBJRTktIHNldFRpbWVvdXQgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBnbG9iYWxUaGlzLnNldFRpbWVvdXQgIT09IHNldFRpbWVvdXQgfSwge1xuICBzZXRUaW1lb3V0OiBzZXRUaW1lb3V0XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSB0aGlzIG1vZHVsZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3Mgc3BsaXQgdG8gbW9kdWxlcyBsaXN0ZWQgYmVsb3dcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLnNldC1pbnRlcnZhbCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuc2V0LXRpbWVvdXQnKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbmNvbnN0IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0Y29uc3QgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdGNvbnN0IG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRjb25zdCBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsImNvbnN0IGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGxldCBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHRsZXQgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0Y29uc3QgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHRjb25zdCBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlci92YWx1ZSBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0aWYoQXJyYXkuaXNBcnJheShkZWZpbml0aW9uKSkge1xuXHRcdHZhciBpID0gMDtcblx0XHR3aGlsZShpIDwgZGVmaW5pdGlvbi5sZW5ndGgpIHtcblx0XHRcdHZhciBrZXkgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHR2YXIgYmluZGluZyA9IGRlZmluaXRpb25baSsrXTtcblx0XHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRpZihiaW5kaW5nID09PSAwKSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogZGVmaW5pdGlvbltpKytdIH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBiaW5kaW5nIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYoYmluZGluZyA9PT0gMCkgeyBpKys7IH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG5jb25zdCBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwidHJhbnNhY3Rpb25zXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbmNvbnN0IHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdGxldCBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbmNvbnN0IGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtleHBlbm5pZXNcIl0gPSBzZWxmW1wid2VicGFja0NodW5rZXhwZW5uaWVzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxubGV0IF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jb3JlLWpzX21vZHVsZXNfZXNfYXJyYXlfZmlsdGVyX2pzLW5vZGVfbW9kdWxlc19jb3JlLWpzX21vZHVsZXNfZXNfYXJyYXktNTEwMTc2XCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19ib290c3RyYXBfZGlzdF9qc19ib290c3RyYXBfZXNtX2pzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jb3JlLWpzX21vZHVsZXNfZXNfYXJyYXlfY29uY2F0X2pzLW5vZGVfbW9kdWxlc19kYXRhdGFibGVzX25ldF9qc19qcXVlcnktMGI5MzMwXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vcmVzb3VyY2VzL2pzL3RyYW5zYWN0aW9ucy5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJkYXRhIiwiZG9tRWxlbWVudCIsInRvTG93ZXJDYXNlIiwib3B0aW9ucyIsImhlYWRlcnMiLCJjc3JmTWV0aG9kcyIsIlNldCIsImhhcyIsImFkZGl0aW9uYWxGaWVsZHMiLCJfb2JqZWN0U3ByZWFkIiwiZ2V0Q3NyZkZpZWxkcyIsIl9NRVRIT0QiLCJ0b1VwcGVyQ2FzZSIsIkZvcm1EYXRhIiwiYWRkaXRpb25hbEZpZWxkIiwiYXBwZW5kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJ0b1N0cmluZyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwiY2xlYXJWYWxpZGF0aW9uRXJyb3JzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZXJyb3JzIiwiaGFuZGxlVmFsaWRhdGlvbkVycm9ycyIsImdldCIsInBvc3QiLCJkZWwiLCJuYW1lIiwiZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25jYXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiZXJyb3IiLCJ2YWx1ZSIsImVycm9yRGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJwYXJlbnROb2RlIiwiZXJyIiwiZSIsImYiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInJlbW92ZSIsImNzcmZOYW1lRmllbGQiLCJjc3JmVmFsdWVGaWVsZCIsImNzcmZOYW1lS2V5IiwiZ2V0QXR0cmlidXRlIiwiY3NyZk5hbWUiLCJjb250ZW50IiwiY3NyZlZhbHVlS2V5IiwiY3NyZlZhbHVlIiwiX2RlZmluZVByb3BlcnR5IiwiTW9kYWwiLCJEYXRhVGFibGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibmV3VHJhbnNhY3Rpb25Nb2RhbCIsImdldEVsZW1lbnRCeUlkIiwiZWRpdFRyYW5zYWN0aW9uTW9kYWwiLCJ1cGxvYWRSZWNlaXB0TW9kYWxFbCIsInVwbG9hZFJlY2VpcHRNb2RhbCIsInRhYmxlIiwic2VydmVyU2lkZSIsIm9yZGVyTXVsdGkiLCJjb2x1bW5zIiwicm93IiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJjdXJyZW5jeVNpZ24iLCJmb3JtYXQiLCJhbW91bnQiLCJfcm93JHJlY2VpcHRzIiwiaWNvbnMiLCJyZWNlaXB0cyIsImkiLCJyZWNlaXB0Iiwic3BhbiIsImFuY2hvciIsImljb24iLCJkZWxldGVJY29uIiwicm9sZSIsImhyZWYiLCJpZCIsInRhcmdldCIsInRpdGxlIiwic2V0QXR0cmlidXRlIiwicHVzaCIsIm91dGVySFRNTCIsImpvaW4iLCJzb3J0YWJsZSIsImV2ZW50IiwiZWRpdEJ0biIsImNsb3Nlc3QiLCJkZWxldGVCdG4iLCJ1cGxvYWRSZWNlaXB0QnRuIiwiZGVsZXRlUmVjZWlwdEJ0biIsInRyYW5zYWN0aW9uSWQiLCJvcGVuRWRpdFRyYW5zYWN0aW9uTW9kYWwiLCJjb25maXJtIiwiRXJyb3IiLCJzdWNjZXNzIiwiZHJhdyIsImNvbnNvbGUiLCJfZWxlbWVudCIsInNob3ciLCJyZWNlaXB0SWQiLCJnZXRUcmFuc2FjdGlvbkZvcm1EYXRhIiwiaGlkZSIsImVsIiwib3ZlcmZsb3ciLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1giLCJwYWRkaW5nUmlnaHQiLCJwb3NpdGlvbiIsInRvcCIsIndpZHRoIiwic2V0VGltZW91dCIsImN1cnJlbnRUYXJnZXQiLCJ1cGxvYWRCdG4iLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiZmlsZUlucHV0IiwiZmlsZXMiLCJhbGVydCIsImxvZyIsImVudHJpZXMiLCJwYWlyIiwibW9kYWwiLCJmaWVsZHMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNlbGVjdCIsIl9yZWYiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJuYW1lSW5wdXQiXSwic291cmNlUm9vdCI6IiJ9