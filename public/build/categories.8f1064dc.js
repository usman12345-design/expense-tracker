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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSwyQ0FBMkMsMENBQTBDO1dBQ3JGLE1BQU07V0FDTiwyQ0FBMkMsZ0NBQWdDO1dBQzNFO1dBQ0EsS0FBSyx5QkFBeUI7V0FDOUI7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLDBDQUEwQyx3Q0FBd0M7V0FDbEY7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBlbm5pZXMvLi9yZXNvdXJjZXMvanMvYWpheC5qcyIsIndlYnBhY2s6Ly9leHBlbm5pZXMvLi9yZXNvdXJjZXMvanMvY2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly9leHBlbm5pZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2V4cGVubmllcy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZXhwZW5uaWVzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhamF4ID0gKHVybCwgbWV0aG9kID0gJ2dldCcsIGRhdGEgPSB7fSwgZG9tRWxlbWVudCA9IG51bGwpID0+IHtcclxuICAgIG1ldGhvZCA9IG1ldGhvZC50b0xvd2VyQ2FzZSgpXHJcblxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgbWV0aG9kLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNzcmZNZXRob2RzID0gbmV3IFNldChbJ3Bvc3QnLCAncHV0JywgJ2RlbGV0ZScsICdwYXRjaCddKVxyXG5cclxuICAgIGlmIChjc3JmTWV0aG9kcy5oYXMobWV0aG9kKSkge1xyXG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwb3N0Jykge1xyXG4gICAgICAgICAgICBvcHRpb25zLm1ldGhvZCA9ICdwb3N0J1xyXG5cclxuICAgICAgICAgICAgZGF0YSA9IHsuLi5kYXRhLCBfTUVUSE9EOiBtZXRob2QudG9VcHBlckNhc2UoKX1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHsuLi5kYXRhLCAuLi5nZXRDc3JmRmllbGRzKCl9KVxyXG4gICAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdnZXQnKSB7XHJcbiAgICAgICAgdXJsICs9ICc/JyArIChuZXcgVVJMU2VhcmNoUGFyYW1zKGRhdGEpKS50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmZXRjaCh1cmwsIG9wdGlvbnMpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmIChkb21FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVmFsaWRhdGlvbkVycm9ycyhkb21FbGVtZW50KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCEgcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDIyKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihlcnJvcnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVZhbGlkYXRpb25FcnJvcnMoZXJyb3JzLCBkb21FbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9KVxyXG59XHJcbmNvbnN0IGdldCAgPSAodXJsLCBkYXRhKSA9PiBhamF4KHVybCwgJ2dldCcsIGRhdGEpXHJcbmNvbnN0IHBvc3QgPSAodXJsLCBkYXRhLCBkb21FbGVtZW50KSA9PiBhamF4KHVybCwgJ3Bvc3QnLCBkYXRhLCBkb21FbGVtZW50KVxyXG5jb25zdCBkZWwgPSAodXJsLCBkYXRhKSA9PiBhamF4KHVybCwgJ2RlbGV0ZScsIGRhdGEpXHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlVmFsaWRhdGlvbkVycm9ycyhlcnJvcnMsIGRvbUVsZW1lbnQpIHtcclxuICAgIGZvciAoY29uc3QgbmFtZSBpbiBlcnJvcnMpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZT1cIiR7IG5hbWUgfVwiXWApXHJcblxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtaW52YWxpZCcpXHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgZXJyb3Igb2YgZXJyb3JzW25hbWVdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgICAgICAgICAgIGVycm9yRGl2LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtZmVlZGJhY2snKVxyXG4gICAgICAgICAgICBlcnJvckRpdi50ZXh0Q29udGVudCA9IGVycm9yc1tuYW1lXVswXVxyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZChlcnJvckRpdilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyVmFsaWRhdGlvbkVycm9ycyhkb21FbGVtZW50KSB7XHJcbiAgICBkb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pcy1pbnZhbGlkJykuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1pbnZhbGlkJylcclxuXHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnZhbGlkLWZlZWRiYWNrJykuZm9yRWFjaChmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucmVtb3ZlKClcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3NyZkZpZWxkcygpIHtcclxuICAgIGNvbnN0IGNzcmZOYW1lRmllbGQgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NzcmZOYW1lJylcclxuICAgIGNvbnN0IGNzcmZWYWx1ZUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NzcmZWYWx1ZScpXHJcbiAgICBjb25zdCBjc3JmTmFtZUtleSAgICA9IGNzcmZOYW1lRmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJylcclxuICAgIGNvbnN0IGNzcmZOYW1lICAgICAgID0gY3NyZk5hbWVGaWVsZC5jb250ZW50XHJcbiAgICBjb25zdCBjc3JmVmFsdWVLZXkgICA9IGNzcmZWYWx1ZUZpZWxkLmdldEF0dHJpYnV0ZSgnbmFtZScpXHJcbiAgICBjb25zdCBjc3JmVmFsdWUgICAgICA9IGNzcmZWYWx1ZUZpZWxkLmNvbnRlbnRcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIFtjc3JmTmFtZUtleV06IGNzcmZOYW1lLFxyXG4gICAgICAgIFtjc3JmVmFsdWVLZXldOiBjc3JmVmFsdWVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGFqYXgsXHJcbiAgICBnZXQsXHJcbiAgICBwb3N0LFxyXG4gICAgZGVsXHJcbn0iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJib290c3RyYXBcIlxyXG5pbXBvcnQgeyBnZXQsIHBvc3QsIGRlbCB9IGZyb20gXCIuL2FqYXhcIlxyXG5pbXBvcnQgRGF0YVRhYmxlICAgICAgICAgIGZyb20gXCJkYXRhdGFibGVzLm5ldFwiXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIDEuIENoZWNrIGlmIHRoZSB0YWJsZSBhY3R1YWxseSBleGlzdHMgaW4gdGhlIERPTSBmaXJzdCB0byBzdG9wIHRoZSBjcmFzaFxyXG4gICAgY29uc3QgdGFibGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3JpZXNUYWJsZScpO1xyXG4gICAgaWYgKCF0YWJsZUVsZW1lbnQpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmF0YWw6ICNjYXRlZ29yaWVzVGFibGUgZWxlbWVudCBub3QgZm91bmQgaW4gdGhlIERPTS5cIik7XHJcbiAgICAgICAgcmV0dXJuOyAvLyBIYWx0cyBleGVjdXRpb24gZ3JhY2VmdWxseSBpbnN0ZWFkIG9mIGNyYXNoaW5nXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWRpdENhdGVnb3J5TW9kYWwgPSBuZXcgTW9kYWwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRDYXRlZ29yeU1vZGFsJykpXHJcblxyXG4gICAgLy8gMi4gSW5pdGlhbGl6ZSBEYXRhVGFibGUgc2FmZWx5XHJcbiAgICBjb25zdCB0YWJsZSA9IG5ldyBEYXRhVGFibGUoJyNjYXRlZ29yaWVzVGFibGUnLCB7XHJcbiAgICAgICAgc2VydmVyU2lkZTogdHJ1ZSxcclxuICAgICAgICBhamF4OiAnL2NhdGVnb3JpZXMvbG9hZCcsXHJcbiAgICAgICAgb3JkZXJNdWx0aTogZmFsc2UsXHJcbiAgICAgICAgY29sdW1uczogW1xyXG4gICAgICAgICAgICB7ZGF0YTogXCJuYW1lXCJ9LFxyXG4gICAgICAgICAgICB7ZGF0YTogXCJjcmVhdGVkQXRcIn0sXHJcbiAgICAgICAgICAgIHtkYXRhOiBcInVwZGF0ZWRBdFwifSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcm93ID0+IGBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBkZWxldGUtY2F0ZWdvcnktYnRuXCIgZGF0YS1pZD1cIiR7cm93LmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS10cmFzaDMtZmlsbFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibXMtMiBidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBlZGl0LWNhdGVnb3J5LWJ0blwiIGRhdGEtaWQ9XCIke3Jvdy5pZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktcGVuY2lsLWZpbGxcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gMy4gQXR0YWNoIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgc2FmZSBET00gZWxlbWVudCByZWZlcmVuY2VcclxuICAgIHRhYmxlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmVkaXQtY2F0ZWdvcnktYnRuJylcclxuICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmRlbGV0ZS1jYXRlZ29yeS1idG4nKVxyXG5cclxuICAgICAgICBpZiAoZWRpdEJ0bikge1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeUlkID0gZWRpdEJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxyXG5cclxuICAgICAgICAgICAgZ2V0KGAvY2F0ZWdvcmllcy8ke2NhdGVnb3J5SWR9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IG9wZW5FZGl0Q2F0ZWdvcnlNb2RhbChlZGl0Q2F0ZWdvcnlNb2RhbCwgcmVzcG9uc2UpKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZGVsZXRlQnRuKSB7IC8vIPCfkYggRklYRUQ6IENoYW5nZWQgZnJvbSAnZWxzZScgdG8gJ2Vsc2UgaWYnIHRvIHByZXZlbnQgbnVsbCBwb2ludGVyIGV4Y2VwdGlvbnNcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IGRlbGV0ZUJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjYXRlZ29yeT8nKSkge1xyXG4gICAgICAgICAgICAgICAgZGVsKGAvY2F0ZWdvcmllcy8ke2NhdGVnb3J5SWR9YCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmFqYXgucmVsb2FkKCk7IC8vIPCfkYggQkVUVEVSIEZPUiBDTElFTlQtU0lERTogUmVsb2FkcyBkYXRhIGFycmF5IHNlYW1sZXNzbHlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyA0LiBTYXZlIEJ1dHRvbiBMb2dpYyBzY29wZWQgaW5zaWRlIERPTUNvbnRlbnRMb2FkZWQgc2FmZWx5XHJcbiAgICBjb25zdCBtb2RhbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdENhdGVnb3J5TW9kYWwnKTtcclxuICAgIGlmIChtb2RhbEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBzYXZlQnRuID0gbW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlLWNhdGVnb3J5LWJ0bicpO1xyXG5cclxuICAgICAgICBpZiAoc2F2ZUJ0bikge1xyXG4gICAgICAgICAgICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeUlkID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3N0KGAvY2F0ZWdvcmllcy8ke2NhdGVnb3J5SWR9YCwge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGVkaXRDYXRlZ29yeU1vZGFsLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJuYW1lXCJdJykudmFsdWVcclxuICAgICAgICAgICAgICAgIH0sIGVkaXRDYXRlZ29yeU1vZGFsLl9lbGVtZW50KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuYWpheC5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdENhdGVnb3J5TW9kYWwuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGZpbmQgLnNhdmUtY2F0ZWdvcnktYnRuIGluc2lkZSAjZWRpdENhdGVnb3J5TW9kYWxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGZpbmQgI2VkaXRDYXRlZ29yeU1vZGFsIGVsZW1lbnQgaW4gdGhlIERPTVwiKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBvcGVuRWRpdENhdGVnb3J5TW9kYWwobW9kYWwsIHtpZCwgbmFtZX0pIHtcclxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IG1vZGFsLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJuYW1lXCJdJylcclxuICAgIG5hbWVJbnB1dC52YWx1ZSA9IG5hbWVcclxuICAgIG1vZGFsLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlLWNhdGVnb3J5LWJ0bicpLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKVxyXG4gICAgbW9kYWwuc2hvdygpXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG5jb25zdCBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGNvbnN0IGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHRjb25zdCBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0Y29uc3QgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJjb25zdCBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHRsZXQgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0bGV0IGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdGNvbnN0IHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0Y29uc3QgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIvdmFsdWUgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGlmKEFycmF5LmlzQXJyYXkoZGVmaW5pdGlvbikpIHtcblx0XHR2YXIgaSA9IDA7XG5cdFx0d2hpbGUoaSA8IGRlZmluaXRpb24ubGVuZ3RoKSB7XG5cdFx0XHR2YXIga2V5ID0gZGVmaW5pdGlvbltpKytdO1xuXHRcdFx0dmFyIGJpbmRpbmcgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdFx0aWYoYmluZGluZyA9PT0gMCkge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IGRlZmluaXRpb25baSsrXSB9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogYmluZGluZyB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmKGJpbmRpbmcgPT09IDApIHsgaSsrOyB9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZihTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuY29uc3QgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImNhdGVnb3JpZXNcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuY29uc3Qgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0bGV0IFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxuY29uc3QgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2V4cGVubmllc1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtleHBlbm5pZXNcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5sZXQgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2Jvb3RzdHJhcF9kaXN0X2pzX2Jvb3RzdHJhcF9lc21fanNcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2NvcmUtanNfbW9kdWxlc19lc19hcnJheV9jb25jYXRfanMtbm9kZV9tb2R1bGVzX2NvcmUtanNfbW9kdWxlc19lc19hcnJheS1hYjVlYmFcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9yZXNvdXJjZXMvanMvY2F0ZWdvcmllcy5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJkYXRhIiwiZG9tRWxlbWVudCIsInRvTG93ZXJDYXNlIiwib3B0aW9ucyIsImhlYWRlcnMiLCJjc3JmTWV0aG9kcyIsIlNldCIsImhhcyIsIl9vYmplY3RTcHJlYWQiLCJfTUVUSE9EIiwidG9VcHBlckNhc2UiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldENzcmZGaWVsZHMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ0b1N0cmluZyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwiY2xlYXJWYWxpZGF0aW9uRXJyb3JzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZXJyb3JzIiwiaGFuZGxlVmFsaWRhdGlvbkVycm9ycyIsImdldCIsInBvc3QiLCJkZWwiLCJuYW1lIiwiZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25jYXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiZXJyb3IiLCJ2YWx1ZSIsImVycm9yRGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJwYXJlbnROb2RlIiwiYXBwZW5kIiwiZXJyIiwiZSIsImYiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInJlbW92ZSIsImNzcmZOYW1lRmllbGQiLCJjc3JmVmFsdWVGaWVsZCIsImNzcmZOYW1lS2V5IiwiZ2V0QXR0cmlidXRlIiwiY3NyZk5hbWUiLCJjb250ZW50IiwiY3NyZlZhbHVlS2V5IiwiY3NyZlZhbHVlIiwiX2RlZmluZVByb3BlcnR5IiwiTW9kYWwiLCJEYXRhVGFibGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwidGFibGVFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwiZWRpdENhdGVnb3J5TW9kYWwiLCJ0YWJsZSIsInNlcnZlclNpZGUiLCJvcmRlck11bHRpIiwiY29sdW1ucyIsInNvcnRhYmxlIiwicm93IiwiaWQiLCJldmVudCIsImVkaXRCdG4iLCJ0YXJnZXQiLCJjbG9zZXN0IiwiZGVsZXRlQnRuIiwiY2F0ZWdvcnlJZCIsIm9wZW5FZGl0Q2F0ZWdvcnlNb2RhbCIsImNvbmZpcm0iLCJyZWxvYWQiLCJtb2RhbEVsZW1lbnQiLCJzYXZlQnRuIiwiY3VycmVudFRhcmdldCIsIl9lbGVtZW50IiwiaGlkZSIsIm1vZGFsIiwiX3JlZiIsIm5hbWVJbnB1dCIsInNldEF0dHJpYnV0ZSIsInNob3ciXSwic291cmNlUm9vdCI6IiJ9