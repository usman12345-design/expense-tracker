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
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }






















window.addEventListener('DOMContentLoaded', function () {
  var newTransactionModal = new bootstrap__WEBPACK_IMPORTED_MODULE_19__.Modal(document.getElementById('newTransactionModal'));
  var editTransactionModal = new bootstrap__WEBPACK_IMPORTED_MODULE_19__.Modal(document.getElementById('editTransactionModal'));
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
        return "\n                    <div class=\"d-flex flex-\">\n                        <button type=\"submit\" class=\"btn btn-outline-primary delete-transaction-btn\" data-id=\"".concat(row.id, "\">\n                            <i class=\"bi bi-trash3-fill\"></i>\n                        </button>\n                        <button class=\"ms-2 btn btn-outline-primary edit-transaction-btn\" data-id=\"").concat(row.id, "\">\n                            <i class=\"bi bi-pencil-fill\"></i>\n                        </button>\n                    </div>\n                ");
      }
    }]
  });
  document.querySelector('#transactionsTable').addEventListener('click', function (event) {
    var editBtn = event.target.closest('.edit-transaction-btn');
    var deleteBtn = event.target.closest('.delete-transaction-btn');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSwyQ0FBMkMsMENBQTBDO1dBQ3JGLE1BQU07V0FDTiwyQ0FBMkMsZ0NBQWdDO1dBQzNFO1dBQ0EsS0FBSyx5QkFBeUI7V0FDOUI7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLDBDQUEwQyx3Q0FBd0M7V0FDbEY7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBlbm5pZXMvLi9yZXNvdXJjZXMvanMvYWpheC5qcyIsIndlYnBhY2s6Ly9leHBlbm5pZXMvLi9yZXNvdXJjZXMvanMvdHJhbnNhY3Rpb25zLmpzIiwid2VicGFjazovL2V4cGVubmllcy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zY2hlZHVsZXJzLWZpeC5qcyIsIndlYnBhY2s6Ly9leHBlbm5pZXMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmluZGV4LW9mLmpzIiwid2VicGFjazovL2V4cGVubmllcy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnNldC1pbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly9leHBlbm5pZXMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5zZXQtdGltZW91dC5qcyIsIndlYnBhY2s6Ly9leHBlbm5pZXMvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leHBlbm5pZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9leHBlbm5pZXMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9leHBlbm5pZXMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWpheCA9ICh1cmwsIG1ldGhvZCA9ICdnZXQnLCBkYXRhID0ge30sIGRvbUVsZW1lbnQgPSBudWxsKSA9PiB7XHJcbiAgICBtZXRob2QgPSBtZXRob2QudG9Mb3dlckNhc2UoKVxyXG5cclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIG1ldGhvZCxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjc3JmTWV0aG9kcyA9IG5ldyBTZXQoWydwb3N0JywgJ3B1dCcsICdkZWxldGUnLCAncGF0Y2gnXSlcclxuXHJcbiAgICBpZiAoY3NyZk1ldGhvZHMuaGFzKG1ldGhvZCkpIHtcclxuICAgICAgICBpZiAobWV0aG9kICE9PSAncG9zdCcpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5tZXRob2QgPSAncG9zdCdcclxuXHJcbiAgICAgICAgICAgIGRhdGEgPSB7Li4uZGF0YSwgX01FVEhPRDogbWV0aG9kLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeSh7Li4uZGF0YSwgLi4uZ2V0Q3NyZkZpZWxkcygpfSlcclxuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAnZ2V0Jykge1xyXG4gICAgICAgIHVybCArPSAnPycgKyAobmV3IFVSTFNlYXJjaFBhcmFtcyhkYXRhKSkudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCBvcHRpb25zKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZiAoZG9tRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjbGVhclZhbGlkYXRpb25FcnJvcnMoZG9tRWxlbWVudClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghIHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQyMikge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oZXJyb3JzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVWYWxpZGF0aW9uRXJyb3JzKGVycm9ycywgZG9tRWxlbWVudClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSlcclxufVxyXG5jb25zdCBnZXQgID0gKHVybCwgZGF0YSkgPT4gYWpheCh1cmwsICdnZXQnLCBkYXRhKVxyXG5jb25zdCBwb3N0ID0gKHVybCwgZGF0YSwgZG9tRWxlbWVudCkgPT4gYWpheCh1cmwsICdwb3N0JywgZGF0YSwgZG9tRWxlbWVudClcclxuY29uc3QgZGVsID0gKHVybCwgZGF0YSkgPT4gYWpheCh1cmwsICdkZWxldGUnLCBkYXRhKVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVZhbGlkYXRpb25FcnJvcnMoZXJyb3JzLCBkb21FbGVtZW50KSB7XHJcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gZXJyb3JzKSB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvbUVsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9XCIkeyBuYW1lIH1cIl1gKVxyXG5cclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWludmFsaWQnKVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGVycm9yIG9mIGVycm9yc1tuYW1lXSkge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gICAgICAgICAgICBlcnJvckRpdi5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLWZlZWRiYWNrJylcclxuICAgICAgICAgICAgZXJyb3JEaXYudGV4dENvbnRlbnQgPSBlcnJvcnNbbmFtZV1bMF1cclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmQoZXJyb3JEaXYpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclZhbGlkYXRpb25FcnJvcnMoZG9tRWxlbWVudCkge1xyXG4gICAgZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXMtaW52YWxpZCcpLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaW52YWxpZCcpXHJcblxyXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuaW52YWxpZC1mZWVkYmFjaycpLmZvckVhY2goZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnJlbW92ZSgpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENzcmZGaWVsZHMoKSB7XHJcbiAgICBjb25zdCBjc3JmTmFtZUZpZWxkICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjc3JmTmFtZScpXHJcbiAgICBjb25zdCBjc3JmVmFsdWVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjc3JmVmFsdWUnKVxyXG4gICAgY29uc3QgY3NyZk5hbWVLZXkgICAgPSBjc3JmTmFtZUZpZWxkLmdldEF0dHJpYnV0ZSgnbmFtZScpXHJcbiAgICBjb25zdCBjc3JmTmFtZSAgICAgICA9IGNzcmZOYW1lRmllbGQuY29udGVudFxyXG4gICAgY29uc3QgY3NyZlZhbHVlS2V5ICAgPSBjc3JmVmFsdWVGaWVsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKVxyXG4gICAgY29uc3QgY3NyZlZhbHVlICAgICAgPSBjc3JmVmFsdWVGaWVsZC5jb250ZW50XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBbY3NyZk5hbWVLZXldOiBjc3JmTmFtZSxcclxuICAgICAgICBbY3NyZlZhbHVlS2V5XTogY3NyZlZhbHVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBhamF4LFxyXG4gICAgZ2V0LFxyXG4gICAgcG9zdCxcclxuICAgIGRlbFxyXG59IiwiaW1wb3J0IHsgTW9kYWwgfSAgICAgICAgICBmcm9tIFwiYm9vdHN0cmFwXCJcclxuaW1wb3J0IHsgZ2V0LCBwb3N0LCBkZWwgfSBmcm9tIFwiLi9hamF4XCJcclxuaW1wb3J0IERhdGFUYWJsZSAgICAgICAgICBmcm9tIFwiZGF0YXRhYmxlcy5uZXRcIlxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBuZXdUcmFuc2FjdGlvbk1vZGFsICA9IG5ldyBNb2RhbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VHJhbnNhY3Rpb25Nb2RhbCcpKVxyXG4gICAgY29uc3QgZWRpdFRyYW5zYWN0aW9uTW9kYWwgPSBuZXcgTW9kYWwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUcmFuc2FjdGlvbk1vZGFsJykpXHJcblxyXG4gICAgY29uc3QgdGFibGUgPSBuZXcgRGF0YVRhYmxlKCcjdHJhbnNhY3Rpb25zVGFibGUnLCB7XHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBhamF4OiAnL3RyYW5zYWN0aW9ucy9sb2FkJyxcclxuICAgICAgICBvcmRlck11bHRpOiBmYWxzZSxcclxuICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICAgIHtkYXRhOiBcImRlc2NyaXB0aW9uXCJ9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiByb3cgPT4gbmV3IEludGwuTnVtYmVyRm9ybWF0KFxyXG4gICAgICAgICAgICAgICAgICAgICdlbi1VUycsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k6ICdVU0QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeVNpZ246ICdhY2NvdW50aW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICkuZm9ybWF0KHJvdy5hbW91bnQpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtkYXRhOiBcImNhdGVnb3J5XCJ9LFxyXG4gICAgICAgICAgICB7ZGF0YTogXCJkYXRlXCJ9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiByb3cgPT4gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBkZWxldGUtdHJhbnNhY3Rpb24tYnRuXCIgZGF0YS1pZD1cIiR7IHJvdy5pZCB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLXRyYXNoMy1maWxsXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1zLTIgYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgZWRpdC10cmFuc2FjdGlvbi1idG5cIiBkYXRhLWlkPVwiJHsgcm93LmlkIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktcGVuY2lsLWZpbGxcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyYW5zYWN0aW9uc1RhYmxlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBlZGl0QnRuICAgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmVkaXQtdHJhbnNhY3Rpb24tYnRuJylcclxuICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmRlbGV0ZS10cmFuc2FjdGlvbi1idG4nKVxyXG5cclxuICAgICAgICBpZiAoZWRpdEJ0bikge1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbklkID0gZWRpdEJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxyXG5cclxuICAgICAgICAgICAgZ2V0KGAvdHJhbnNhY3Rpb25zLyR7IHRyYW5zYWN0aW9uSWQgfWApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBvcGVuRWRpdFRyYW5zYWN0aW9uTW9kYWwoZWRpdFRyYW5zYWN0aW9uTW9kYWwsIHJlc3BvbnNlKSlcclxuICAgICAgICB9ICBlbHNlIGlmIChkZWxldGVCdG4pIHtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25JZCA9IGRlbGV0ZUJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0cmFuc2FjdGlvbj8nKSkge1xyXG4gICAgICAgICAgICAgICAgZGVsKGAvdHJhbnNhY3Rpb25zLyR7IHRyYW5zYWN0aW9uSWQgfWApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RlbGV0ZSBmYWlsZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRGVsZXRlIGVycm9yOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtdHJhbnNhY3Rpb24tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBwb3N0KGAvdHJhbnNhY3Rpb25zYCwgZ2V0VHJhbnNhY3Rpb25Gb3JtRGF0YShuZXdUcmFuc2FjdGlvbk1vZGFsKSwgbmV3VHJhbnNhY3Rpb25Nb2RhbC5fZWxlbWVudClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuZHJhdygpXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VHJhbnNhY3Rpb25Nb2RhbC5oaWRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW9yZSB0aG9yb3VnaCBjbGVhbnVwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1iYWNrZHJvcCcpLmZvckVhY2goZWwgPT4gZWwucmVtb3ZlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBBTEwgb3ZlcmZsb3cgc3R5bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1ggPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNvbWUgbW9kYWwgbGlicmFyaWVzIGFkZCB0aGVzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUud2lkdGggPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvcmNlIGEgc21hbGwgZGVsYXkgdG8gZW5zdXJlIG1vZGFsIGxpYnJhcnkgZmluaXNoZXMgaXRzIGNsZWFudXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmUtdHJhbnNhY3Rpb24tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbklkID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxyXG5cclxuICAgICAgICBwb3N0KGAvdHJhbnNhY3Rpb25zLyR7IHRyYW5zYWN0aW9uSWQgfWAsIGdldFRyYW5zYWN0aW9uRm9ybURhdGEoZWRpdFRyYW5zYWN0aW9uTW9kYWwpLCBlZGl0VHJhbnNhY3Rpb25Nb2RhbC5fZWxlbWVudClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuZHJhdygpXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdFRyYW5zYWN0aW9uTW9kYWwuaGlkZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9KVxyXG59KVxyXG5cclxuZnVuY3Rpb24gZ2V0VHJhbnNhY3Rpb25Gb3JtRGF0YShtb2RhbCkge1xyXG4gICAgbGV0IGRhdGEgICAgID0ge31cclxuICAgIGNvbnN0IGZpZWxkcyA9IFtcclxuICAgICAgICAuLi5tb2RhbC5fZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKSxcclxuICAgICAgICAuLi5tb2RhbC5fZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2VsZWN0JylcclxuICAgIF1cclxuXHJcbiAgICBmaWVsZHMuZm9yRWFjaChzZWxlY3QgPT4ge1xyXG4gICAgICAgIGRhdGFbc2VsZWN0Lm5hbWVdID0gc2VsZWN0LnZhbHVlXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5FZGl0VHJhbnNhY3Rpb25Nb2RhbChtb2RhbCwge2lkLCAuLi5kYXRhfSkge1xyXG4gICAgZm9yIChsZXQgbmFtZSBpbiBkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gbW9kYWwuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9XCIkeyBuYW1lIH1cIl1gKVxyXG5cclxuICAgICAgICBuYW1lSW5wdXQudmFsdWUgPSBkYXRhW25hbWVdXHJcbiAgICB9XHJcblxyXG4gICAgbW9kYWwuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmUtdHJhbnNhY3Rpb24tYnRuJykuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpXHJcblxyXG4gICAgbW9kYWwuc2hvdygpXHJcbn0iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIEVOVklST05NRU5UID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50Jyk7XG52YXIgVVNFUl9BR0VOVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50Jyk7XG52YXIgYXJyYXlTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zbGljZScpO1xudmFyIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGgnKTtcblxudmFyIEZ1bmN0aW9uID0gZ2xvYmFsVGhpcy5GdW5jdGlvbjtcbi8vIGRpcnR5IElFOS0gYW5kIEJ1biAwLjMuMC0gY2hlY2tzXG52YXIgV1JBUCA9IC9NU0lFIC5cXC4vLnRlc3QoVVNFUl9BR0VOVCkgfHwgRU5WSVJPTk1FTlQgPT09ICdCVU4nICYmIChmdW5jdGlvbiAoKSB7XG4gIHZhciB2ZXJzaW9uID0gZ2xvYmFsVGhpcy5CdW4udmVyc2lvbi5zcGxpdCgnLicpO1xuICByZXR1cm4gdmVyc2lvbi5sZW5ndGggPCAzIHx8IHZlcnNpb25bMF0gPT09ICcwJyAmJiAodmVyc2lvblsxXSA8IDMgfHwgdmVyc2lvblsxXSA9PT0gJzMnICYmIHZlcnNpb25bMl0gPT09ICcwJyk7XG59KSgpO1xuXG4vLyBJRTktIC8gQnVuIDAuMy4wLSBzZXRUaW1lb3V0IC8gc2V0SW50ZXJ2YWwgLyBzZXRJbW1lZGlhdGUgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9vdmVuLXNoL2J1bi9pc3N1ZXMvMTYzM1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBoYXNUaW1lQXJnKSB7XG4gIHZhciBmaXJzdFBhcmFtSW5kZXggPSBoYXNUaW1lQXJnID8gMiA6IDE7XG4gIHJldHVybiBXUkFQID8gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gdmFsaWRhdGVBcmd1bWVudHNMZW5ndGgoYXJndW1lbnRzLmxlbmd0aCwgMSkgPiBmaXJzdFBhcmFtSW5kZXg7XG4gICAgdmFyIGZuID0gaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKTtcbiAgICB2YXIgcGFyYW1zID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIGZpcnN0UGFyYW1JbmRleCkgOiBbXTtcbiAgICB2YXIgY2FsbGJhY2sgPSBib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBseShmbiwgdGhpcywgcGFyYW1zKTtcbiAgICB9IDogZm47XG4gICAgcmV0dXJuIGhhc1RpbWVBcmcgPyBzY2hlZHVsZXIoY2FsbGJhY2ssIHRpbWVvdXQpIDogc2NoZWR1bGVyKGNhbGxiYWNrKTtcbiAgfSA6IHNjaGVkdWxlcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1hcnJheS1wcm90b3R5cGUtaW5kZXhvZiAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLWNsYXVzZScpO1xudmFyICRpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIG5hdGl2ZUluZGV4T2YgPSB1bmN1cnJ5VGhpcyhbXS5pbmRleE9mKTtcblxudmFyIE5FR0FUSVZFX1pFUk8gPSAhIW5hdGl2ZUluZGV4T2YgJiYgMSAvIG5hdGl2ZUluZGV4T2YoWzFdLCAxLCAtMCkgPCAwO1xudmFyIEZPUkNFRCA9IE5FR0FUSVZFX1pFUk8gfHwgIWFycmF5TWV0aG9kSXNTdHJpY3QoJ2luZGV4T2YnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICB2YXIgZnJvbUluZGV4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIE5FR0FUSVZFX1pFUk9cbiAgICAgIC8vIGNvbnZlcnQgLTAgdG8gKzBcbiAgICAgID8gbmF0aXZlSW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBmcm9tSW5kZXgpIHx8IDBcbiAgICAgIDogJGluZGV4T2YodGhpcywgc2VhcmNoRWxlbWVudCwgZnJvbUluZGV4KTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgc2NoZWR1bGVyc0ZpeCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zY2hlZHVsZXJzLWZpeCcpO1xuXG52YXIgc2V0SW50ZXJ2YWwgPSBzY2hlZHVsZXJzRml4KGdsb2JhbFRoaXMuc2V0SW50ZXJ2YWwsIHRydWUpO1xuXG4vLyBCdW4gLyBJRTktIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjZG9tLXNldGludGVydmFsXG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IGdsb2JhbFRoaXMuc2V0SW50ZXJ2YWwgIT09IHNldEludGVydmFsIH0sIHtcbiAgc2V0SW50ZXJ2YWw6IHNldEludGVydmFsXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBzY2hlZHVsZXJzRml4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4Jyk7XG5cbnZhciBzZXRUaW1lb3V0ID0gc2NoZWR1bGVyc0ZpeChnbG9iYWxUaGlzLnNldFRpbWVvdXQsIHRydWUpO1xuXG4vLyBCdW4gLyBJRTktIHNldFRpbWVvdXQgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBnbG9iYWxUaGlzLnNldFRpbWVvdXQgIT09IHNldFRpbWVvdXQgfSwge1xuICBzZXRUaW1lb3V0OiBzZXRUaW1lb3V0XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSB0aGlzIG1vZHVsZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3Mgc3BsaXQgdG8gbW9kdWxlcyBsaXN0ZWQgYmVsb3dcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLnNldC1pbnRlcnZhbCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuc2V0LXRpbWVvdXQnKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbmNvbnN0IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0Y29uc3QgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdGNvbnN0IG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRjb25zdCBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsImNvbnN0IGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGxldCBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHRsZXQgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0Y29uc3QgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHRjb25zdCBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlci92YWx1ZSBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0aWYoQXJyYXkuaXNBcnJheShkZWZpbml0aW9uKSkge1xuXHRcdHZhciBpID0gMDtcblx0XHR3aGlsZShpIDwgZGVmaW5pdGlvbi5sZW5ndGgpIHtcblx0XHRcdHZhciBrZXkgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHR2YXIgYmluZGluZyA9IGRlZmluaXRpb25baSsrXTtcblx0XHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRpZihiaW5kaW5nID09PSAwKSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogZGVmaW5pdGlvbltpKytdIH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBiaW5kaW5nIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYoYmluZGluZyA9PT0gMCkgeyBpKys7IH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG5jb25zdCBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwidHJhbnNhY3Rpb25zXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbmNvbnN0IHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdGxldCBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbmNvbnN0IGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtleHBlbm5pZXNcIl0gPSBzZWxmW1wid2VicGFja0NodW5rZXhwZW5uaWVzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxubGV0IF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19ib290c3RyYXBfZGlzdF9qc19ib290c3RyYXBfZXNtX2pzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jb3JlLWpzX21vZHVsZXNfZXNfYXJyYXlfY29uY2F0X2pzLW5vZGVfbW9kdWxlc19jb3JlLWpzX21vZHVsZXNfZXNfYXJyYXktYWI1ZWJhXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vcmVzb3VyY2VzL2pzL3RyYW5zYWN0aW9ucy5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJkYXRhIiwiZG9tRWxlbWVudCIsInRvTG93ZXJDYXNlIiwib3B0aW9ucyIsImhlYWRlcnMiLCJjc3JmTWV0aG9kcyIsIlNldCIsImhhcyIsIl9vYmplY3RTcHJlYWQiLCJfTUVUSE9EIiwidG9VcHBlckNhc2UiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldENzcmZGaWVsZHMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ0b1N0cmluZyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwiY2xlYXJWYWxpZGF0aW9uRXJyb3JzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZXJyb3JzIiwiaGFuZGxlVmFsaWRhdGlvbkVycm9ycyIsImdldCIsInBvc3QiLCJkZWwiLCJuYW1lIiwiZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25jYXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiZXJyb3IiLCJ2YWx1ZSIsImVycm9yRGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJwYXJlbnROb2RlIiwiYXBwZW5kIiwiZXJyIiwiZSIsImYiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInJlbW92ZSIsImNzcmZOYW1lRmllbGQiLCJjc3JmVmFsdWVGaWVsZCIsImNzcmZOYW1lS2V5IiwiZ2V0QXR0cmlidXRlIiwiY3NyZk5hbWUiLCJjb250ZW50IiwiY3NyZlZhbHVlS2V5IiwiY3NyZlZhbHVlIiwiX2RlZmluZVByb3BlcnR5IiwiTW9kYWwiLCJEYXRhVGFibGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibmV3VHJhbnNhY3Rpb25Nb2RhbCIsImdldEVsZW1lbnRCeUlkIiwiZWRpdFRyYW5zYWN0aW9uTW9kYWwiLCJ0YWJsZSIsInNlcnZlclNpZGUiLCJvcmRlck11bHRpIiwiY29sdW1ucyIsInJvdyIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiY3VycmVuY3lTaWduIiwiZm9ybWF0IiwiYW1vdW50Iiwic29ydGFibGUiLCJpZCIsImV2ZW50IiwiZWRpdEJ0biIsInRhcmdldCIsImNsb3Nlc3QiLCJkZWxldGVCdG4iLCJ0cmFuc2FjdGlvbklkIiwib3BlbkVkaXRUcmFuc2FjdGlvbk1vZGFsIiwiY29uZmlybSIsIkVycm9yIiwic3VjY2VzcyIsImRyYXciLCJjb25zb2xlIiwiZ2V0VHJhbnNhY3Rpb25Gb3JtRGF0YSIsIl9lbGVtZW50IiwiaGlkZSIsImVsIiwib3ZlcmZsb3ciLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1giLCJwYWRkaW5nUmlnaHQiLCJwb3NpdGlvbiIsInRvcCIsIndpZHRoIiwic2V0VGltZW91dCIsImN1cnJlbnRUYXJnZXQiLCJtb2RhbCIsImZpZWxkcyIsIl90b0NvbnN1bWFibGVBcnJheSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2VsZWN0IiwiX3JlZiIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsIm5hbWVJbnB1dCIsInNldEF0dHJpYnV0ZSIsInNob3ciXSwic291cmNlUm9vdCI6IiJ9