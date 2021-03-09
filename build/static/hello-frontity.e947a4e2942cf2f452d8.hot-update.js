webpackHotUpdate("hello-frontity",{

/***/ "./node_modules/@frontity/components/switch.tsx":
/*!******************************************************!*\
  !*** ./node_modules/@frontity/components/switch.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}const Switch=({children})=>{const components=react__WEBPACK_IMPORTED_MODULE_1__[\"Children\"].toArray(children);// Check if components[] has a non-ReactNode type Element\nconst hasInvalidComponent=components.findIndex(component=>!/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"isValidElement\"])(component))!==-1;// last element in components[]\nconst lastComponent=components[components.length-1];// Check if last component is default component - No when props\nconst lastComponentIsDefault=/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"isValidElement\"])(lastComponent)&&!(\"when\"in lastComponent.props);if(hasInvalidComponent){Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"warn\"])(\"Children of <Switch /> component should be a type of ReactNode\");}// Filter components by the value of the 'when' props or path\nconst filteredComponent=components.find(component=>/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"isValidElement\"])(component)&&component.props.when);// Render filteredComponents\nif(filteredComponent){const _filteredComponent$pr=filteredComponent.props,{when}=_filteredComponent$pr,props=_objectWithoutProperties(_filteredComponent$pr,[\"when\"]);return/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(filteredComponent.type,_objectSpread({},props));}// render last component if it's diffult component (without when props);\nif(lastComponentIsDefault)return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"],{children:lastComponent});// Return `null` if none of the children have matched.\nreturn null;};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(Switch));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZyb250aXR5L2NvbXBvbmVudHMvc3dpdGNoLnRzeD8zNTVjIl0sIm5hbWVzIjpbIlN3aXRjaCIsImNoaWxkcmVuIiwiY29tcG9uZW50cyIsIlJlYWN0IiwidG9BcnJheSIsImhhc0ludmFsaWRDb21wb25lbnQiLCJmaW5kSW5kZXgiLCJjb21wb25lbnQiLCJpc1ZhbGlkRWxlbWVudCIsImxhc3RDb21wb25lbnQiLCJsZW5ndGgiLCJsYXN0Q29tcG9uZW50SXNEZWZhdWx0IiwicHJvcHMiLCJ3YXJuIiwiZmlsdGVyZWRDb21wb25lbnQiLCJmaW5kIiwid2hlbiIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OzBwREFjQSxLQUFNQSxPQUFnQyxDQUFHLENBQUMsQ0FBRUMsUUFBRixDQUFELEdBQWtCLENBQ3pELEtBQU1DLFdBQTBCLENBQUdDLDhDQUFBLENBQWVDLE9BQWYsQ0FBdUJILFFBQXZCLENBQW5DLENBRUE7QUFDQSxLQUFNSSxvQkFBNEIsQ0FDaENILFVBQVUsQ0FBQ0ksU0FBWCxDQUFzQkMsU0FBRCxFQUFlLGNBQUNDLDREQUFjLENBQUNELFNBQUQsQ0FBbkQsSUFBb0UsQ0FBQyxDQUR2RSxDQUdBO0FBQ0EsS0FBTUUsY0FBYSxDQUFHUCxVQUFVLENBQUNBLFVBQVUsQ0FBQ1EsTUFBWCxDQUFvQixDQUFyQixDQUFoQyxDQUVBO0FBQ0EsS0FBTUMsdUJBQXNCLENBQzFCLGFBQUFILDREQUFjLENBQUNDLGFBQUQsQ0FBZCxFQUFpQyxFQUFFLFFBQVVBLGNBQWEsQ0FBQ0csS0FBMUIsQ0FEbkMsQ0FHQSxHQUFJUCxtQkFBSixDQUF5QixDQUN2QlEscURBQUksQ0FBQyxnRUFBRCxDQUFKLENBQ0QsQ0FFRDtBQUNBLEtBQU1DLGtCQUFpQixDQUFHWixVQUFVLENBQUNhLElBQVgsQ0FDdkJSLFNBQUQsRUFDRSxhQUFBQyw0REFBYyxDQUFjRCxTQUFkLENBQWQsRUFBMENBLFNBQVMsQ0FBQ0ssS0FBVixDQUFnQkksSUFGcEMsQ0FBMUIsQ0FLQTtBQUNBLEdBQUlGLGlCQUFKLENBQXVCLENBQ3JCLDRCQUEyQkEsaUJBQWlCLENBQUNGLEtBQTdDLENBQU0sQ0FBRUksSUFBRixDQUFOLHVCQUFpQkosS0FBakIsMERBQ0EsbUJBQU9LLDJEQUFhLENBQUNILGlCQUFpQixDQUFDSSxJQUFuQixrQkFBOEJOLEtBQTlCLEVBQXBCLENBQ0QsQ0FFRDtBQUNBLEdBQUlELHNCQUFKLENBQTRCLE1BQU8sc0pBQUdGLGFBQUgsRUFBUCxDQUU1QjtBQUNBLE1BQU8sS0FBUCxDQUNELENBbkNELENBcUNlVSx1SEFBTyxDQUFDbkIsTUFBRCxDQUF0QiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9AZnJvbnRpdHkvY29tcG9uZW50cy9zd2l0Y2gudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCwgd2FybiB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IHsgUGFja2FnZSB9IGZyb20gXCJmcm9udGl0eS90eXBlc1wiO1xuaW1wb3J0IHtcbiAgaXNWYWxpZEVsZW1lbnQsXG4gIFJlYWN0Tm9kZUFycmF5LFxuICBSZWFjdEVsZW1lbnQsXG4gIGNyZWF0ZUVsZW1lbnQsXG59IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBTd2l0Y2hDaGlsZCB7XG4gIHdoZW4/OiBib29sZWFuO1xufVxuXG5jb25zdCBTd2l0Y2g6IFJlYWN0LkZDPFBhY2thZ2U+IHwgbnVsbCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgY29tcG9uZW50czogUmVhY3ROb2RlQXJyYXkgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcblxuICAvLyBDaGVjayBpZiBjb21wb25lbnRzW10gaGFzIGEgbm9uLVJlYWN0Tm9kZSB0eXBlIEVsZW1lbnRcbiAgY29uc3QgaGFzSW52YWxpZENvbXBvbmVudDogYm9vbGVhbiA9XG4gICAgY29tcG9uZW50cy5maW5kSW5kZXgoKGNvbXBvbmVudCkgPT4gIWlzVmFsaWRFbGVtZW50KGNvbXBvbmVudCkpICE9PSAtMTtcblxuICAvLyBsYXN0IGVsZW1lbnQgaW4gY29tcG9uZW50c1tdXG4gIGNvbnN0IGxhc3RDb21wb25lbnQgPSBjb21wb25lbnRzW2NvbXBvbmVudHMubGVuZ3RoIC0gMV07XG5cbiAgLy8gQ2hlY2sgaWYgbGFzdCBjb21wb25lbnQgaXMgZGVmYXVsdCBjb21wb25lbnQgLSBObyB3aGVuIHByb3BzXG4gIGNvbnN0IGxhc3RDb21wb25lbnRJc0RlZmF1bHQgPVxuICAgIGlzVmFsaWRFbGVtZW50KGxhc3RDb21wb25lbnQpICYmICEoXCJ3aGVuXCIgaW4gbGFzdENvbXBvbmVudC5wcm9wcyk7XG5cbiAgaWYgKGhhc0ludmFsaWRDb21wb25lbnQpIHtcbiAgICB3YXJuKFwiQ2hpbGRyZW4gb2YgPFN3aXRjaCAvPiBjb21wb25lbnQgc2hvdWxkIGJlIGEgdHlwZSBvZiBSZWFjdE5vZGVcIik7XG4gIH1cblxuICAvLyBGaWx0ZXIgY29tcG9uZW50cyBieSB0aGUgdmFsdWUgb2YgdGhlICd3aGVuJyBwcm9wcyBvciBwYXRoXG4gIGNvbnN0IGZpbHRlcmVkQ29tcG9uZW50ID0gY29tcG9uZW50cy5maW5kKFxuICAgIChjb21wb25lbnQpID0+XG4gICAgICBpc1ZhbGlkRWxlbWVudDxTd2l0Y2hDaGlsZD4oY29tcG9uZW50KSAmJiBjb21wb25lbnQucHJvcHMud2hlblxuICApIGFzIFJlYWN0RWxlbWVudDxTd2l0Y2hDaGlsZD47XG5cbiAgLy8gUmVuZGVyIGZpbHRlcmVkQ29tcG9uZW50c1xuICBpZiAoZmlsdGVyZWRDb21wb25lbnQpIHtcbiAgICBjb25zdCB7IHdoZW4sIC4uLnByb3BzIH0gPSBmaWx0ZXJlZENvbXBvbmVudC5wcm9wcztcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChmaWx0ZXJlZENvbXBvbmVudC50eXBlLCB7IC4uLnByb3BzIH0pO1xuICB9XG5cbiAgLy8gcmVuZGVyIGxhc3QgY29tcG9uZW50IGlmIGl0J3MgZGlmZnVsdCBjb21wb25lbnQgKHdpdGhvdXQgd2hlbiBwcm9wcyk7XG4gIGlmIChsYXN0Q29tcG9uZW50SXNEZWZhdWx0KSByZXR1cm4gPD57bGFzdENvbXBvbmVudH08Lz47XG5cbiAgLy8gUmV0dXJuIGBudWxsYCBpZiBub25lIG9mIHRoZSBjaGlsZHJlbiBoYXZlIG1hdGNoZWQuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChTd2l0Y2gpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@frontity/components/switch.tsx\n");

/***/ }),

/***/ "./packages/books/src/components/index.js":
/*!************************************************!*\
  !*** ./packages/books/src/components/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _frontity_components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/components/link */ \"./node_modules/@frontity/components/link/index.tsx\");\n/* harmony import */ var _frontity_components_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontity/components/switch */ \"./node_modules/@frontity/components/switch.tsx\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nconst Root=({state})=>{return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"Fragment\"],{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"h1\",{children:\"Hello Frontity\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(\"p\",{children:[\"Current URL: \",state.router.link]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxs\"])(\"nav\",{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{link:\"/\",children:\"Home\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"br\",{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{link:\"/author-bio\",children:\"About\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"br\",{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{link:\"/book\",children:\"Books\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"br\",{}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_frontity_components_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"],{link:\"/contact\",children:\"Contact Us\"})]})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Root));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9ib29rcy9zcmMvY29tcG9uZW50cy9pbmRleC5qcz9kNTYxIl0sIm5hbWVzIjpbIlJvb3QiLCJzdGF0ZSIsInJvdXRlciIsImxpbmsiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0EsS0FBTUEsS0FBSSxDQUFHLENBQUMsQ0FBRUMsS0FBRixDQUFELEdBQWUsQ0FDeEIsTUFDSSx3SkFDSSx3R0FESixDQUVJLHVHQUFpQkEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLElBQTlCLEdBRkosQ0FHSSx5RkFDSSx1RUFBQyxpRUFBRCxFQUFNLElBQUksQ0FBQyxHQUFYLGtCQURKLENBRUksK0VBRkosQ0FHSSx1RUFBQyxpRUFBRCxFQUFNLElBQUksQ0FBQyxhQUFYLG1CQUhKLENBSUksK0VBSkosQ0FLSSx1RUFBQyxpRUFBRCxFQUFNLElBQUksQ0FBQyxPQUFYLG1CQUxKLENBTUksK0VBTkosQ0FPSSx1RUFBQyxpRUFBRCxFQUFNLElBQUksQ0FBQyxVQUFYLHdCQVBKLEdBSEosR0FESixDQWVILENBaEJELENBa0JlQyx1SEFBTyxDQUFDSixJQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMvYm9va3Mvc3JjL2NvbXBvbmVudHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJmcm9udGl0eVwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9saW5rXCJcclxuaW1wb3J0IFN3aXRjaCBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvc3dpdGNoXCJcclxuXHJcbmNvbnN0IFJvb3QgPSAoeyBzdGF0ZSB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMT5IZWxsbyBGcm9udGl0eTwvaDE+XHJcbiAgICAgICAgICAgIDxwPkN1cnJlbnQgVVJMOiB7c3RhdGUucm91dGVyLmxpbmt9PC9wPlxyXG4gICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgbGluaz1cIi9cIj5Ib21lPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8TGluayBsaW5rPVwiL2F1dGhvci1iaW9cIj5BYm91dDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgbGluaz1cIi9ib29rXCI+Qm9va3M8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGxpbms9XCIvY29udGFjdFwiPkNvbnRhY3QgVXM8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFJvb3QpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/books/src/components/index.js\n");

/***/ })

})