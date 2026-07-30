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

/***/ "./resources/js/categories.js"
/*!************************************!*\
  !*** ./resources/js/categories.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ajax */ "./resources/js/ajax.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");





window.addEventListener('DOMContentLoaded', function () {
  // 1. Check if the table actually exists in the DOM first to stop the crash
  var tableElement = document.getElementById('categoriesTable');
  if (!tableElement) {
    console.error("Fatal: #categoriesTable element not found in the DOM.");
    return; // Halts execution gracefully instead of crashing
  }
  var editCategoryModal = new bootstrap__WEBPACK_IMPORTED_MODULE_2__.Modal(document.getElementById('editCategoryModal'));

  // 2. Initialize DataTable safely
  var table = new datatables_net__WEBPACK_IMPORTED_MODULE_4__["default"]('#categoriesTable', {
    serverSide: true,
    ajax: '/categories/load',
    orderMulti: false,
    columns: [{
      data: "name"
    }, {
      data: "createdAt"
    }, {
      data: "updatedAt"
    }, {
      sortable: false,
      data: function data(row) {
        return "\n                    <div class=\"d-flex\">\n                        <button type=\"button\" class=\"btn btn-outline-danger delete-category-btn\" data-id=\"".concat(row.id, "\">\n                            <i class=\"bi bi-trash3-fill\"></i>\n                        </button>\n                        <button type=\"button\" class=\"ms-2 btn btn-outline-primary edit-category-btn\" data-id=\"").concat(row.id, "\">\n                            <i class=\"bi bi-pencil-fill\"></i>\n                        </button>\n                    </div>\n                ");
      }
    }]
  });

  // 3. Attach the event listener to the safe DOM element reference
  tableElement.addEventListener('click', function (event) {
    var editBtn = event.target.closest('.edit-category-btn');
    var deleteBtn = event.target.closest('.delete-category-btn');
    if (editBtn) {
      var categoryId = editBtn.getAttribute('data-id');
      (0,_ajax__WEBPACK_IMPORTED_MODULE_3__.get)("/categories/".concat(categoryId)).then(function (response) {
        return response.json();
      }).then(function (response) {
        return openEditCategoryModal(editCategoryModal, response);
      });
    } else if (deleteBtn) {
      // 👈 FIXED: Changed from 'else' to 'else if' to prevent null pointer exceptions
      var _categoryId = deleteBtn.getAttribute('data-id');
      if (confirm('Are you sure you want to delete this category?')) {
        (0,_ajax__WEBPACK_IMPORTED_MODULE_3__.del)("/categories/".concat(_categoryId)).then(function (response) {
          if (response.ok) {
            table.ajax.reload(); // 👈 BETTER FOR CLIENT-SIDE: Reloads data array seamlessly
          }
        });
      }
    }
  });

  // 4. Save Button Logic scoped inside DOMContentLoaded safely
  var modalElement = document.getElementById('editCategoryModal');
  if (modalElement) {
    var saveBtn = modalElement.querySelector('.save-category-btn');
    if (saveBtn) {
      saveBtn.addEventListener('click', function (event) {
        var categoryId = event.currentTarget.getAttribute('data-id');
        (0,_ajax__WEBPACK_IMPORTED_MODULE_3__.post)("/categories/".concat(categoryId), {
          name: editCategoryModal._element.querySelector('input[name="name"]').value
        }, editCategoryModal._element).then(function (response) {
          if (response.ok) {
            table.ajax.reload();
            editCategoryModal.hide();
          }
        });
      });
    } else {
      console.error("Could not find .save-category-btn inside #editCategoryModal");
    }
  } else {
    console.error("Could not find #editCategoryModal element in the DOM");
  }
});
function openEditCategoryModal(modal, _ref) {
  var id = _ref.id,
    name = _ref.name;
  var nameInput = modal._element.querySelector('input[name="name"]');
  nameInput.value = name;
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
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-510176","vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_datatables_net_js_jquery-0b9330"], () => (__webpack_require__("./resources/js/categories.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBlbm5pZXMvLi9yZXNvdXJjZXMvanMvYWpheC5qcyIsIndlYnBhY2s6Ly9leHBlbm5pZXMvLi9yZXNvdXJjZXMvanMvY2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly9leHBlbm5pZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhamF4ID0gKHVybCwgbWV0aG9kID0gJ2dldCcsIGRhdGEgPSB7fSwgZG9tRWxlbWVudCA9IG51bGwpID0+IHtcclxuICAgIG1ldGhvZCA9IG1ldGhvZC50b0xvd2VyQ2FzZSgpXHJcblxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNzcmZNZXRob2RzID0gbmV3IFNldChbJ3Bvc3QnLCAncHV0JywgJ2RlbGV0ZScsICdwYXRjaCddKVxyXG5cclxuICAgIGlmIChjc3JmTWV0aG9kcy5oYXMobWV0aG9kKSkge1xyXG4gICAgICAgIGxldCBhZGRpdGlvbmFsRmllbGRzPXsuLi5nZXRDc3JmRmllbGRzKCl9XHJcbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3Bvc3QnKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMubWV0aG9kID0gJ3Bvc3QnXHJcblxyXG4gICAgICAgICAgICAvL2RhdGEgPSB7Li4uZGF0YSwgX01FVEhPRDogbWV0aG9kLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgIGFkZGl0aW9uYWxGaWVsZHMuX01FVEhPRCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBhZGRpdGlvbmFsRmllbGQgaW4gYWRkaXRpb25hbEZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5hcHBlbmQoYWRkaXRpb25hbEZpZWxkLCBhZGRpdGlvbmFsRmllbGRzW2FkZGl0aW9uYWxGaWVsZF0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddO1xyXG5cclxuICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gZGF0YVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHsuLi5kYXRhLCAuLi5hZGRpdGlvbmFsRmllbGRzfSlcclxuICAgICAgICAgICAvLyBvcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeSh7Li4uZGF0YSwgLi4uZ2V0Q3NyZkZpZWxkcygpfSlcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gJ2dldCcpIHtcclxuICAgICAgICB1cmwgKz0gJz8nICsgKG5ldyBVUkxTZWFyY2hQYXJhbXMoZGF0YSkpLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucykudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgaWYgKGRvbUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY2xlYXJWYWxpZGF0aW9uRXJyb3JzKGRvbUVsZW1lbnQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoISByZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKGVycm9ycyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlVmFsaWRhdGlvbkVycm9ycyhlcnJvcnMsIGRvbUVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgIH0pXHJcbn1cclxuY29uc3QgZ2V0ICA9ICh1cmwsIGRhdGEpID0+IGFqYXgodXJsLCAnZ2V0JywgZGF0YSlcclxuY29uc3QgcG9zdCA9ICh1cmwsIGRhdGEsIGRvbUVsZW1lbnQpID0+IGFqYXgodXJsLCAncG9zdCcsIGRhdGEsIGRvbUVsZW1lbnQpXHJcbmNvbnN0IGRlbCA9ICh1cmwsIGRhdGEpID0+IGFqYXgodXJsLCAnZGVsZXRlJywgZGF0YSlcclxuXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVWYWxpZGF0aW9uRXJyb3JzKGVycm9ycywgZG9tRWxlbWVudCkge1xyXG4gICAgZm9yIChjb25zdCBuYW1lIGluIGVycm9ycykge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPVwiJHsgbmFtZSB9XCJdYClcclxuXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1pbnZhbGlkJylcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBlcnJvciBvZiBlcnJvcnNbbmFtZV0pIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICAgICAgICAgICAgZXJyb3JEaXYuY2xhc3NMaXN0LmFkZCgnaW52YWxpZC1mZWVkYmFjaycpXHJcbiAgICAgICAgICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gZXJyb3JzW25hbWVdWzBdXHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kKGVycm9yRGl2KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJWYWxpZGF0aW9uRXJyb3JzKGRvbUVsZW1lbnQpIHtcclxuICAgIGRvbUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlzLWludmFsaWQnKS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWludmFsaWQnKVxyXG5cclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbCgnLmludmFsaWQtZmVlZGJhY2snKS5mb3JFYWNoKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5yZW1vdmUoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDc3JmRmllbGRzKCkge1xyXG4gICAgY29uc3QgY3NyZk5hbWVGaWVsZCAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3NyZk5hbWUnKVxyXG4gICAgY29uc3QgY3NyZlZhbHVlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3NyZlZhbHVlJylcclxuICAgIGNvbnN0IGNzcmZOYW1lS2V5ICAgID0gY3NyZk5hbWVGaWVsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKVxyXG4gICAgY29uc3QgY3NyZk5hbWUgICAgICAgPSBjc3JmTmFtZUZpZWxkLmNvbnRlbnRcclxuICAgIGNvbnN0IGNzcmZWYWx1ZUtleSAgID0gY3NyZlZhbHVlRmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJylcclxuICAgIGNvbnN0IGNzcmZWYWx1ZSAgICAgID0gY3NyZlZhbHVlRmllbGQuY29udGVudFxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgW2NzcmZOYW1lS2V5XTogY3NyZk5hbWUsXHJcbiAgICAgICAgW2NzcmZWYWx1ZUtleV06IGNzcmZWYWx1ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgYWpheCxcclxuICAgIGdldCxcclxuICAgIHBvc3QsXHJcbiAgICBkZWxcclxufSIsImltcG9ydCB7IE1vZGFsIH0gZnJvbSBcImJvb3RzdHJhcFwiXHJcbmltcG9ydCB7IGdldCwgcG9zdCwgZGVsIH0gZnJvbSBcIi4vYWpheFwiXHJcbmltcG9ydCBEYXRhVGFibGUgICAgICAgICAgZnJvbSBcImRhdGF0YWJsZXMubmV0XCJcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gMS4gQ2hlY2sgaWYgdGhlIHRhYmxlIGFjdHVhbGx5IGV4aXN0cyBpbiB0aGUgRE9NIGZpcnN0IHRvIHN0b3AgdGhlIGNyYXNoXHJcbiAgICBjb25zdCB0YWJsZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcmllc1RhYmxlJyk7XHJcbiAgICBpZiAoIXRhYmxlRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYXRhbDogI2NhdGVnb3JpZXNUYWJsZSBlbGVtZW50IG5vdCBmb3VuZCBpbiB0aGUgRE9NLlwiKTtcclxuICAgICAgICByZXR1cm47IC8vIEhhbHRzIGV4ZWN1dGlvbiBncmFjZWZ1bGx5IGluc3RlYWQgb2YgY3Jhc2hpbmdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlZGl0Q2F0ZWdvcnlNb2RhbCA9IG5ldyBNb2RhbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdENhdGVnb3J5TW9kYWwnKSlcclxuXHJcbiAgICAvLyAyLiBJbml0aWFsaXplIERhdGFUYWJsZSBzYWZlbHlcclxuICAgIGNvbnN0IHRhYmxlID0gbmV3IERhdGFUYWJsZSgnI2NhdGVnb3JpZXNUYWJsZScsIHtcclxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxyXG4gICAgICAgIGFqYXg6ICcvY2F0ZWdvcmllcy9sb2FkJyxcclxuICAgICAgICBvcmRlck11bHRpOiBmYWxzZSxcclxuICAgICAgICBjb2x1bW5zOiBbXHJcbiAgICAgICAgICAgIHtkYXRhOiBcIm5hbWVcIn0sXHJcbiAgICAgICAgICAgIHtkYXRhOiBcImNyZWF0ZWRBdFwifSxcclxuICAgICAgICAgICAge2RhdGE6IFwidXBkYXRlZEF0XCJ9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiByb3cgPT4gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIGRlbGV0ZS1jYXRlZ29yeS1idG5cIiBkYXRhLWlkPVwiJHtyb3cuaWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLXRyYXNoMy1maWxsXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtcy0yIGJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGVkaXQtY2F0ZWdvcnktYnRuXCIgZGF0YS1pZD1cIiR7cm93LmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1wZW5jaWwtZmlsbFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAzLiBBdHRhY2ggdGhlIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBzYWZlIERPTSBlbGVtZW50IHJlZmVyZW5jZVxyXG4gICAgdGFibGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgZWRpdEJ0biA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZWRpdC1jYXRlZ29yeS1idG4nKVxyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZGVsZXRlLWNhdGVnb3J5LWJ0bicpXHJcblxyXG4gICAgICAgIGlmIChlZGl0QnRuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5SWQgPSBlZGl0QnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXHJcblxyXG4gICAgICAgICAgICBnZXQoYC9jYXRlZ29yaWVzLyR7Y2F0ZWdvcnlJZH1gKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gb3BlbkVkaXRDYXRlZ29yeU1vZGFsKGVkaXRDYXRlZ29yeU1vZGFsLCByZXNwb25zZSkpXHJcbiAgICAgICAgfSBlbHNlIGlmIChkZWxldGVCdG4pIHsgLy8g8J+RiCBGSVhFRDogQ2hhbmdlZCBmcm9tICdlbHNlJyB0byAnZWxzZSBpZicgdG8gcHJldmVudCBudWxsIHBvaW50ZXIgZXhjZXB0aW9uc1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeUlkID0gZGVsZXRlQnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXHJcblxyXG4gICAgICAgICAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNhdGVnb3J5PycpKSB7XHJcbiAgICAgICAgICAgICAgICBkZWwoYC9jYXRlZ29yaWVzLyR7Y2F0ZWdvcnlJZH1gKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTsgLy8g8J+RiCBCRVRURVIgRk9SIENMSUVOVC1TSURFOiBSZWxvYWRzIGRhdGEgYXJyYXkgc2VhbWxlc3NseVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIDQuIFNhdmUgQnV0dG9uIExvZ2ljIHNjb3BlZCBpbnNpZGUgRE9NQ29udGVudExvYWRlZCBzYWZlbHlcclxuICAgIGNvbnN0IG1vZGFsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0Q2F0ZWdvcnlNb2RhbCcpO1xyXG4gICAgaWYgKG1vZGFsRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IHNhdmVCdG4gPSBtb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmUtY2F0ZWdvcnktYnRuJyk7XHJcblxyXG4gICAgICAgIGlmIChzYXZlQnRuKSB7XHJcbiAgICAgICAgICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5SWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvc3QoYC9jYXRlZ29yaWVzLyR7Y2F0ZWdvcnlJZH1gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZWRpdENhdGVnb3J5TW9kYWwuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hbWVcIl0nKS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSwgZWRpdENhdGVnb3J5TW9kYWwuX2VsZW1lbnQpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0Q2F0ZWdvcnlNb2RhbC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgZmluZCAuc2F2ZS1jYXRlZ29yeS1idG4gaW5zaWRlICNlZGl0Q2F0ZWdvcnlNb2RhbFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgZmluZCAjZWRpdENhdGVnb3J5TW9kYWwgZWxlbWVudCBpbiB0aGUgRE9NXCIpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIG9wZW5FZGl0Q2F0ZWdvcnlNb2RhbChtb2RhbCwge2lkLCBuYW1lfSkge1xyXG4gICAgY29uc3QgbmFtZUlucHV0ID0gbW9kYWwuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hbWVcIl0nKVxyXG4gICAgbmFtZUlucHV0LnZhbHVlID0gbmFtZVxyXG4gICAgbW9kYWwuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmUtY2F0ZWdvcnktYnRuJykuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpXHJcbiAgICBtb2RhbC5zaG93KClcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbmNvbnN0IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0Y29uc3QgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdGNvbnN0IG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRjb25zdCBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsImNvbnN0IGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGxldCBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHRsZXQgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0Y29uc3QgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHRjb25zdCBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlci92YWx1ZSBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0aWYoQXJyYXkuaXNBcnJheShkZWZpbml0aW9uKSkge1xuXHRcdHZhciBpID0gMDtcblx0XHR3aGlsZShpIDwgZGVmaW5pdGlvbi5sZW5ndGgpIHtcblx0XHRcdHZhciBrZXkgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHR2YXIgYmluZGluZyA9IGRlZmluaXRpb25baSsrXTtcblx0XHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRpZihiaW5kaW5nID09PSAwKSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogZGVmaW5pdGlvbltpKytdIH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBiaW5kaW5nIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYoYmluZGluZyA9PT0gMCkgeyBpKys7IH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG5jb25zdCBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiY2F0ZWdvcmllc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG5jb25zdCB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHRsZXQgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG5jb25zdCBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rZXhwZW5uaWVzXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2V4cGVubmllc1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbmxldCBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfY29yZS1qc19tb2R1bGVzX2VzX2FycmF5X2ZpbHRlcl9qcy1ub2RlX21vZHVsZXNfY29yZS1qc19tb2R1bGVzX2VzX2FycmF5LTUxMDE3NlwiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfYm9vdHN0cmFwX2Rpc3RfanNfYm9vdHN0cmFwX2VzbV9qc1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfY29yZS1qc19tb2R1bGVzX2VzX2FycmF5X2NvbmNhdF9qcy1ub2RlX21vZHVsZXNfZGF0YXRhYmxlc19uZXRfanNfanF1ZXJ5LTBiOTMzMFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3Jlc291cmNlcy9qcy9jYXRlZ29yaWVzLmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiYWpheCIsInVybCIsIm1ldGhvZCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImRhdGEiLCJkb21FbGVtZW50IiwidG9Mb3dlckNhc2UiLCJvcHRpb25zIiwiaGVhZGVycyIsImNzcmZNZXRob2RzIiwiU2V0IiwiaGFzIiwiYWRkaXRpb25hbEZpZWxkcyIsIl9vYmplY3RTcHJlYWQiLCJnZXRDc3JmRmllbGRzIiwiX01FVEhPRCIsInRvVXBwZXJDYXNlIiwiRm9ybURhdGEiLCJhZGRpdGlvbmFsRmllbGQiLCJhcHBlbmQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJjbGVhclZhbGlkYXRpb25FcnJvcnMiLCJvayIsInN0YXR1cyIsImpzb24iLCJlcnJvcnMiLCJoYW5kbGVWYWxpZGF0aW9uRXJyb3JzIiwiZ2V0IiwicG9zdCIsImRlbCIsIm5hbWUiLCJlbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbmNhdCIsImNsYXNzTGlzdCIsImFkZCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJlcnJvciIsInZhbHVlIiwiZXJyb3JEaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInBhcmVudE5vZGUiLCJlcnIiLCJlIiwiZiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicmVtb3ZlIiwiY3NyZk5hbWVGaWVsZCIsImNzcmZWYWx1ZUZpZWxkIiwiY3NyZk5hbWVLZXkiLCJnZXRBdHRyaWJ1dGUiLCJjc3JmTmFtZSIsImNvbnRlbnQiLCJjc3JmVmFsdWVLZXkiLCJjc3JmVmFsdWUiLCJfZGVmaW5lUHJvcGVydHkiLCJNb2RhbCIsIkRhdGFUYWJsZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YWJsZUVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJlZGl0Q2F0ZWdvcnlNb2RhbCIsInRhYmxlIiwic2VydmVyU2lkZSIsIm9yZGVyTXVsdGkiLCJjb2x1bW5zIiwic29ydGFibGUiLCJyb3ciLCJpZCIsImV2ZW50IiwiZWRpdEJ0biIsInRhcmdldCIsImNsb3Nlc3QiLCJkZWxldGVCdG4iLCJjYXRlZ29yeUlkIiwib3BlbkVkaXRDYXRlZ29yeU1vZGFsIiwiY29uZmlybSIsInJlbG9hZCIsIm1vZGFsRWxlbWVudCIsInNhdmVCdG4iLCJjdXJyZW50VGFyZ2V0IiwiX2VsZW1lbnQiLCJoaWRlIiwibW9kYWwiLCJfcmVmIiwibmFtZUlucHV0Iiwic2V0QXR0cmlidXRlIiwic2hvdyJdLCJzb3VyY2VSb290IjoiIn0=