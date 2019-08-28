"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapBuilder = void 0;

var _react = _interopRequireDefault(require("react"));

var _formik = require("formik");

require("./css/tailwind.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapBuilder = function MapBuilder(props) {
  // Make a copy of passed view so that we don't mutate it:
  var view = JSON.parse(JSON.stringify(props.view));

  if (!view.resources) {
    return _react.default.createElement("div", null, "MapBuilder requires resource to be compiled into view.");
  } else if (!view.resources[0] || !view.resources[0].schema) {
    return _react.default.createElement("div", null, "MapBuilder requires resource schema.");
  } // TODO: make it work with multiple resources


  var fields = view.resources[0].schema ? view.resources[0].schema.fields : [];

  function handleSubmit(values) {
    // Prep an updated view:
    view.specType = 'tabularmap';
    view.spec = {
      infobox: values.infobox
    };

    if (values.geomField) {
      view.spec.geomField = values.geomField;
    } else {
      view.spec.lonField = values.lonField;
      view.spec.latField = values.latField;
    } // Call Redux action with updated `view`:


    props.dataViewBuilderAction(view);
  }

  return _react.default.createElement(_formik.Formik, {
    initialValues: {
      lonField: fields[0].name,
      latField: fields[0].name,
      geomField: null,
      infobox: ''
    },
    onSubmit: function onSubmit(values) {
      return handleSubmit(values);
    },
    render: function render(_ref) {
      var values = _ref.values,
          setFieldValue = _ref.setFieldValue;
      return _react.default.createElement(_formik.Form, {
        className: "bg-white text-xsm p-3 text-left "
      }, _react.default.createElement("div", {
        className: "flex flex-wrap "
      }, _react.default.createElement("div", {
        className: "w-full mb-3"
      }, _react.default.createElement("label", {
        htmlFor: "lonField",
        className: "text-xsm font-bold uppercase text-gray-700"
      }, "Longitude field"), _react.default.createElement("div", {
        className: "relative"
      }, _react.default.createElement(_formik.Field, {
        name: "lonField",
        component: "select",
        placeholder: "Longitude field",
        className: "block appearance-none w-full mt-1 bg-gray-200 border border-gray-200 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      }, fields.map(function (field, index) {
        return _react.default.createElement("option", {
          value: field.name,
          key: "lonField".concat(index)
        }, field.name);
      })), _react.default.createElement("div", {
        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      }, _react.default.createElement("svg", {
        className: "fill-current h-4 w-4",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20"
      }, _react.default.createElement("path", {
        d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
      }))))), _react.default.createElement("div", {
        className: "w-full mb-3"
      }, _react.default.createElement("label", {
        htmlFor: "latField",
        className: "text-xsm  font-bold uppercase text-gray-700"
      }, "Latitude field"), _react.default.createElement("div", {
        className: "relative"
      }, _react.default.createElement(_formik.Field, {
        name: "latField",
        component: "select",
        placeholder: "Latitude field",
        className: "block appearance-none w-full mt-1 bg-gray-200 border border-gray-200 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      }, fields.map(function (field, index) {
        return _react.default.createElement("option", {
          value: field.name,
          key: "latField".concat(index)
        }, field.name);
      })), _react.default.createElement("div", {
        className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      }, _react.default.createElement("svg", {
        className: "fill-current h-4 w-4",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20"
      }, _react.default.createElement("path", {
        d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
      }))))), _react.default.createElement("div", {
        className: "w-full mb-3"
      }, _react.default.createElement("label", {
        htmlFor: "infobox",
        className: "text-xsm  font-bold uppercase text-gray-700"
      }, "Infobox"), _react.default.createElement("div", {
        className: "relative"
      }, _react.default.createElement(_formik.Field, {
        name: "infobox",
        type: "text",
        placeholder: "My popup: ${data.fieldName}",
        className: "block appearance-none w-full mt-1 bg-gray-200 border border-gray-200 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      }))), _react.default.createElement("div", {
        className: "w-full mb-3"
      }, _react.default.createElement("div", {
        className: "flex justify-center"
      }, _react.default.createElement("button", {
        type: "submit",
        className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
      }, "Add map")))));
    }
  });
};

exports.MapBuilder = MapBuilder;