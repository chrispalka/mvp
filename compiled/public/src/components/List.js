"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var List = function List(props) {
  return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", {
    scope: "col"
  }), /*#__PURE__*/_react["default"].createElement("th", {
    scope: "col"
  }, "Name"), /*#__PURE__*/_react["default"].createElement("th", {
    scope: "col"
  }, "Size"), /*#__PURE__*/_react["default"].createElement("th", {
    scope: "col"
  }, "Highest Bid"));
};

var _default = List;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9MaXN0LmpzeCJdLCJuYW1lcyI6WyJMaXN0IiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFEO0FBQUEsc0JBQ1gseURBQ0U7QUFBSSxJQUFBLEtBQUssRUFBQztBQUFWLElBREYsZUFFRTtBQUFJLElBQUEsS0FBSyxFQUFDO0FBQVYsWUFGRixlQUdFO0FBQUksSUFBQSxLQUFLLEVBQUM7QUFBVixZQUhGLGVBSUU7QUFBSSxJQUFBLEtBQUssRUFBQztBQUFWLG1CQUpGLENBRFc7QUFBQSxDQUFiOztlQVNlRCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBMaXN0ID0gKHByb3BzKSA9PiAoXG4gIDx0cj5cbiAgICA8dGggc2NvcGU9XCJjb2xcIj48L3RoPlxuICAgIDx0aCBzY29wZT1cImNvbFwiPk5hbWU8L3RoPlxuICAgIDx0aCBzY29wZT1cImNvbFwiPlNpemU8L3RoPlxuICAgIDx0aCBzY29wZT1cImNvbFwiPkhpZ2hlc3QgQmlkPC90aD5cbiAgPC90cj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGlzdDsiXX0=