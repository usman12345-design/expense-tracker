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
    var element = domElement.querySelector("input[name=\"".concat(name, "\"]"));
    element.classList.add('is-invalid');
    var _iterator = _createForOfIteratorHelper(errors[name]),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var error = _step.value;
        var errorDiv = document.createElement('div');
        errorDiv.classList.add('invalid-feedback');
        errorDiv.textContent = error;
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
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-ab5eba"], () => (__webpack_require__("./resources/js/categories.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSwyQ0FBMkMsMENBQTBDO1dBQ3JGLE1BQU07V0FDTiwyQ0FBMkMsZ0NBQWdDO1dBQzNFO1dBQ0EsS0FBSyx5QkFBeUI7V0FDOUI7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLDBDQUEwQyx3Q0FBd0M7V0FDbEY7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBlbm5pZXMvLi9yZXNvdXJjZXMvanMvYWpheC5qcyIsIndlYnBhY2s6Ly9leHBlbm5pZXMvLi9yZXNvdXJjZXMvanMvY2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly9leHBlbm5pZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhamF4ID0gKHVybCwgbWV0aG9kID0gJ2dldCcsIGRhdGEgPSB7fSwgZG9tRWxlbWVudCA9IG51bGwpID0+IHtcclxuICAgIG1ldGhvZCA9IG1ldGhvZC50b0xvd2VyQ2FzZSgpXHJcblxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNzcmZNZXRob2RzID0gbmV3IFNldChbJ3Bvc3QnLCAncHV0JywgJ2RlbGV0ZScsICdwYXRjaCddKVxyXG5cclxuICAgIGlmIChjc3JmTWV0aG9kcy5oYXMobWV0aG9kKSkge1xyXG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwb3N0Jykge1xyXG4gICAgICAgICAgICBvcHRpb25zLm1ldGhvZCA9ICdwb3N0J1xyXG5cclxuICAgICAgICAgICAgZGF0YSA9IHsuLi5kYXRhLCBfTUVUSE9EOiBtZXRob2QudG9VcHBlckNhc2UoKX1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHsuLi5kYXRhLCAuLi5nZXRDc3JmRmllbGRzKCl9KVxyXG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdnZXQnKSB7XHJcbiAgICAgICAgdXJsICs9ICc/JyArIChuZXcgVVJMU2VhcmNoUGFyYW1zKGRhdGEpKS50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmZXRjaCh1cmwsIG9wdGlvbnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChkb21FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVmFsaWRhdGlvbkVycm9ycyhkb21FbGVtZW50KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEgcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDIyKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihlcnJvcnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVZhbGlkYXRpb25FcnJvcnMoZXJyb3JzLCBkb21FbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9KVxyXG59XHJcbmNvbnN0IGdldCAgPSAodXJsLCBkYXRhKSA9PiBhamF4KHVybCwgJ2dldCcsIGRhdGEpXHJcbmNvbnN0IHBvc3QgPSAodXJsLCBkYXRhLCBkb21FbGVtZW50KSA9PiBhamF4KHVybCwgJ3Bvc3QnLCBkYXRhLCBkb21FbGVtZW50KVxyXG5jb25zdCBkZWwgPSAodXJsLCBkYXRhKSA9PiBhamF4KHVybCwgJ2RlbGV0ZScsIGRhdGEpXHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlVmFsaWRhdGlvbkVycm9ycyhlcnJvcnMsIGRvbUVsZW1lbnQpIHtcclxuICAgIGZvciAoY29uc3QgbmFtZSBpbiBlcnJvcnMpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwiJHsgbmFtZSB9XCJdYClcclxuXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1pbnZhbGlkJylcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBlcnJvciBvZiBlcnJvcnNbbmFtZV0pIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICAgICAgICAgICAgZXJyb3JEaXYuY2xhc3NMaXN0LmFkZCgnaW52YWxpZC1mZWVkYmFjaycpXHJcbiAgICAgICAgICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gZXJyb3JcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmQoZXJyb3JEaXYpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclZhbGlkYXRpb25FcnJvcnMoZG9tRWxlbWVudCkge1xyXG4gICAgZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXMtaW52YWxpZCcpLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaW52YWxpZCcpXHJcblxyXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuaW52YWxpZC1mZWVkYmFjaycpLmZvckVhY2goZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnJlbW92ZSgpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENzcmZGaWVsZHMoKSB7XHJcbiAgICBjb25zdCBjc3JmTmFtZUZpZWxkICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjc3JmTmFtZScpXHJcbiAgICBjb25zdCBjc3JmVmFsdWVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjc3JmVmFsdWUnKVxyXG4gICAgY29uc3QgY3NyZk5hbWVLZXkgICAgPSBjc3JmTmFtZUZpZWxkLmdldEF0dHJpYnV0ZSgnbmFtZScpXHJcbiAgICBjb25zdCBjc3JmTmFtZSAgICAgICA9IGNzcmZOYW1lRmllbGQuY29udGVudFxyXG4gICAgY29uc3QgY3NyZlZhbHVlS2V5ICAgPSBjc3JmVmFsdWVGaWVsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKVxyXG4gICAgY29uc3QgY3NyZlZhbHVlICAgICAgPSBjc3JmVmFsdWVGaWVsZC5jb250ZW50XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBbY3NyZk5hbWVLZXldOiBjc3JmTmFtZSxcclxuICAgICAgICBbY3NyZlZhbHVlS2V5XTogY3NyZlZhbHVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBhamF4LFxyXG4gICAgZ2V0LFxyXG4gICAgcG9zdCxcclxuICAgIGRlbFxyXG59IiwiaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiYm9vdHN0cmFwXCJcclxuaW1wb3J0IHsgZ2V0LCBwb3N0LCBkZWwgfSBmcm9tIFwiLi9hamF4XCJcclxuaW1wb3J0IERhdGFUYWJsZSAgICAgICAgICBmcm9tIFwiZGF0YXRhYmxlcy5uZXRcIlxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAxLiBDaGVjayBpZiB0aGUgdGFibGUgYWN0dWFsbHkgZXhpc3RzIGluIHRoZSBET00gZmlyc3QgdG8gc3RvcCB0aGUgY3Jhc2hcclxuICAgIGNvbnN0IHRhYmxlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yaWVzVGFibGUnKTtcclxuICAgIGlmICghdGFibGVFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhdGFsOiAjY2F0ZWdvcmllc1RhYmxlIGVsZW1lbnQgbm90IGZvdW5kIGluIHRoZSBET00uXCIpO1xyXG4gICAgICAgIHJldHVybjsgLy8gSGFsdHMgZXhlY3V0aW9uIGdyYWNlZnVsbHkgaW5zdGVhZCBvZiBjcmFzaGluZ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVkaXRDYXRlZ29yeU1vZGFsID0gbmV3IE1vZGFsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0Q2F0ZWdvcnlNb2RhbCcpKVxyXG5cclxuICAgIC8vIDIuIEluaXRpYWxpemUgRGF0YVRhYmxlIHNhZmVseVxyXG4gICAgY29uc3QgdGFibGUgPSBuZXcgRGF0YVRhYmxlKCcjY2F0ZWdvcmllc1RhYmxlJywge1xyXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXHJcbiAgICAgICAgYWpheDogJy9jYXRlZ29yaWVzL2xvYWQnLFxyXG4gICAgICAgIG9yZGVyTXVsdGk6IGZhbHNlLFxyXG4gICAgICAgIGNvbHVtbnM6IFtcclxuICAgICAgICAgICAge2RhdGE6IFwibmFtZVwifSxcclxuICAgICAgICAgICAge2RhdGE6IFwiY3JlYXRlZEF0XCJ9LFxyXG4gICAgICAgICAgICB7ZGF0YTogXCJ1cGRhdGVkQXRcIn0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHJvdyA9PiBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgZGVsZXRlLWNhdGVnb3J5LWJ0blwiIGRhdGEtaWQ9XCIke3Jvdy5pZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktdHJhc2gzLWZpbGxcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1zLTIgYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgZWRpdC1jYXRlZ29yeS1idG5cIiBkYXRhLWlkPVwiJHtyb3cuaWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLXBlbmNpbC1maWxsXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIDMuIEF0dGFjaCB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHNhZmUgRE9NIGVsZW1lbnQgcmVmZXJlbmNlXHJcbiAgICB0YWJsZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBlZGl0QnRuID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5lZGl0LWNhdGVnb3J5LWJ0bicpXHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kZWxldGUtY2F0ZWdvcnktYnRuJylcclxuXHJcbiAgICAgICAgaWYgKGVkaXRCdG4pIHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IGVkaXRCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJylcclxuXHJcbiAgICAgICAgICAgIGdldChgL2NhdGVnb3JpZXMvJHtjYXRlZ29yeUlkfWApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBvcGVuRWRpdENhdGVnb3J5TW9kYWwoZWRpdENhdGVnb3J5TW9kYWwsIHJlc3BvbnNlKSlcclxuICAgICAgICB9IGVsc2UgaWYgKGRlbGV0ZUJ0bikgeyAvLyDwn5GIIEZJWEVEOiBDaGFuZ2VkIGZyb20gJ2Vsc2UnIHRvICdlbHNlIGlmJyB0byBwcmV2ZW50IG51bGwgcG9pbnRlciBleGNlcHRpb25zXHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5SWQgPSBkZWxldGVCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJylcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY2F0ZWdvcnk/JykpIHtcclxuICAgICAgICAgICAgICAgIGRlbChgL2NhdGVnb3JpZXMvJHtjYXRlZ29yeUlkfWApLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5hamF4LnJlbG9hZCgpOyAvLyDwn5GIIEJFVFRFUiBGT1IgQ0xJRU5ULVNJREU6IFJlbG9hZHMgZGF0YSBhcnJheSBzZWFtbGVzc2x5XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLy8gNC4gU2F2ZSBCdXR0b24gTG9naWMgc2NvcGVkIGluc2lkZSBET01Db250ZW50TG9hZGVkIHNhZmVseVxyXG4gICAgY29uc3QgbW9kYWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRDYXRlZ29yeU1vZGFsJyk7XHJcbiAgICBpZiAobW9kYWxFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3Qgc2F2ZUJ0biA9IG1vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZS1jYXRlZ29yeS1idG4nKTtcclxuXHJcbiAgICAgICAgaWYgKHNhdmVCdG4pIHtcclxuICAgICAgICAgICAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zdChgL2NhdGVnb3JpZXMvJHtjYXRlZ29yeUlkfWAsIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBlZGl0Q2F0ZWdvcnlNb2RhbC5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibmFtZVwiXScpLnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9LCBlZGl0Q2F0ZWdvcnlNb2RhbC5fZWxlbWVudCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRDYXRlZ29yeU1vZGFsLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNvdWxkIG5vdCBmaW5kIC5zYXZlLWNhdGVnb3J5LWJ0biBpbnNpZGUgI2VkaXRDYXRlZ29yeU1vZGFsXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkNvdWxkIG5vdCBmaW5kICNlZGl0Q2F0ZWdvcnlNb2RhbCBlbGVtZW50IGluIHRoZSBET01cIik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gb3BlbkVkaXRDYXRlZ29yeU1vZGFsKG1vZGFsLCB7aWQsIG5hbWV9KSB7XHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBtb2RhbC5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibmFtZVwiXScpXHJcbiAgICBuYW1lSW5wdXQudmFsdWUgPSBuYW1lXHJcbiAgICBtb2RhbC5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZS1jYXRlZ29yeS1idG4nKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZClcclxuICAgIG1vZGFsLnNob3coKVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxuY29uc3QgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRjb25zdCBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0Y29uc3QgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdGNvbnN0IGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiY29uc3QgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0bGV0IG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdGxldCBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHRjb25zdCByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdGNvbnN0IGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyL3ZhbHVlIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRpZihBcnJheS5pc0FycmF5KGRlZmluaXRpb24pKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHdoaWxlKGkgPCBkZWZpbml0aW9uLmxlbmd0aCkge1xuXHRcdFx0dmFyIGtleSA9IGRlZmluaXRpb25baSsrXTtcblx0XHRcdHZhciBiaW5kaW5nID0gZGVmaW5pdGlvbltpKytdO1xuXHRcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRcdGlmKGJpbmRpbmcgPT09IDApIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiBkZWZpbml0aW9uW2krK10gfSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGJpbmRpbmcgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZihiaW5kaW5nID09PSAwKSB7IGkrKzsgfVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYoU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbmNvbnN0IGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJjYXRlZ29yaWVzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbmNvbnN0IHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdGxldCBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbmNvbnN0IGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtleHBlbm5pZXNcIl0gPSBzZWxmW1wid2VicGFja0NodW5rZXhwZW5uaWVzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxubGV0IF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19ib290c3RyYXBfZGlzdF9qc19ib290c3RyYXBfZXNtX2pzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jb3JlLWpzX21vZHVsZXNfZXNfYXJyYXlfY29uY2F0X2pzLW5vZGVfbW9kdWxlc19jb3JlLWpzX21vZHVsZXNfZXNfYXJyYXktYWI1ZWJhXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vcmVzb3VyY2VzL2pzL2NhdGVnb3JpZXMuanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJhamF4IiwidXJsIiwibWV0aG9kIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZGF0YSIsImRvbUVsZW1lbnQiLCJ0b0xvd2VyQ2FzZSIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiY3NyZk1ldGhvZHMiLCJTZXQiLCJoYXMiLCJfb2JqZWN0U3ByZWFkIiwiX01FVEhPRCIsInRvVXBwZXJDYXNlIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRDc3JmRmllbGRzIiwiVVJMU2VhcmNoUGFyYW1zIiwidG9TdHJpbmciLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImNsZWFyVmFsaWRhdGlvbkVycm9ycyIsIm9rIiwic3RhdHVzIiwianNvbiIsImVycm9ycyIsImhhbmRsZVZhbGlkYXRpb25FcnJvcnMiLCJnZXQiLCJwb3N0IiwiZGVsIiwibmFtZSIsImVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29uY2F0IiwiY2xhc3NMaXN0IiwiYWRkIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsImVycm9yIiwidmFsdWUiLCJlcnJvckRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwicGFyZW50Tm9kZSIsImFwcGVuZCIsImVyciIsImUiLCJmIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJyZW1vdmUiLCJjc3JmTmFtZUZpZWxkIiwiY3NyZlZhbHVlRmllbGQiLCJjc3JmTmFtZUtleSIsImdldEF0dHJpYnV0ZSIsImNzcmZOYW1lIiwiY29udGVudCIsImNzcmZWYWx1ZUtleSIsImNzcmZWYWx1ZSIsIl9kZWZpbmVQcm9wZXJ0eSIsIk1vZGFsIiwiRGF0YVRhYmxlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhYmxlRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImVkaXRDYXRlZ29yeU1vZGFsIiwidGFibGUiLCJzZXJ2ZXJTaWRlIiwib3JkZXJNdWx0aSIsImNvbHVtbnMiLCJzb3J0YWJsZSIsInJvdyIsImlkIiwiZXZlbnQiLCJlZGl0QnRuIiwidGFyZ2V0IiwiY2xvc2VzdCIsImRlbGV0ZUJ0biIsImNhdGVnb3J5SWQiLCJvcGVuRWRpdENhdGVnb3J5TW9kYWwiLCJjb25maXJtIiwicmVsb2FkIiwibW9kYWxFbGVtZW50Iiwic2F2ZUJ0biIsImN1cnJlbnRUYXJnZXQiLCJfZWxlbWVudCIsImhpZGUiLCJtb2RhbCIsIl9yZWYiLCJuYW1lSW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJzaG93Il0sInNvdXJjZVJvb3QiOiIifQ==