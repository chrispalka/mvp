"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./components/App.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import 'bootstrap';
// import '../../assets/stylesheet.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_App["default"], null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBS0FBLHFCQUFTQyxNQUFULGVBQ0UsZ0NBQUMsZUFBRCxPQURGLEVBRUVDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUZGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcC5qc3gnXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcCc7XG4vLyBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zdHlsZXNoZWV0LmNzcydcbi8vIGltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcblxuXG5cblxuUmVhY3RET00ucmVuZGVyKFxuICA8QXBwIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbik7Il19