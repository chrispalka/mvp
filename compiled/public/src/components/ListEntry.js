"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ListEntry = function ListEntry(props) {
  return /*#__PURE__*/_react["default"].createElement("tr", {
    className: "hover"
  }, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("img", {
    height: "50",
    src: props.media.thumbUrl
  })), /*#__PURE__*/_react["default"].createElement("td", null, props.name), /*#__PURE__*/_react["default"].createElement("td", null, props.highestbid), /*#__PURE__*/_react["default"].createElement("td", null, props.lastsale));
};

var _default = ListEntry;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9MaXN0RW50cnkuanN4Il0sIm5hbWVzIjpbIkxpc3RFbnRyeSIsInByb3BzIiwibWVkaWEiLCJ0aHVtYlVybCIsIm5hbWUiLCJoaWdoZXN0YmlkIiwibGFzdHNhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFHQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFEO0FBQUEsc0JBQ2hCO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxrQkFDRSx5REFBSTtBQUFLLElBQUEsTUFBTSxFQUFDLElBQVo7QUFBaUIsSUFBQSxHQUFHLEVBQUVBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQztBQUFsQyxJQUFKLENBREYsZUFFRSw0Q0FBS0YsS0FBSyxDQUFDRyxJQUFYLENBRkYsZUFHRSw0Q0FBS0gsS0FBSyxDQUFDSSxVQUFYLENBSEYsZUFJRSw0Q0FBS0osS0FBSyxDQUFDSyxRQUFYLENBSkYsQ0FEZ0I7QUFBQSxDQUFsQjs7ZUFVZU4sUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5jb25zdCBMaXN0RW50cnkgPSAocHJvcHMpID0+IChcbiAgPHRyIGNsYXNzTmFtZT1cImhvdmVyXCI+XG4gICAgPHRkPjxpbWcgaGVpZ2h0PSc1MCcgc3JjPXtwcm9wcy5tZWRpYS50aHVtYlVybH0+PC9pbWc+PC90ZD5cbiAgICA8dGQ+e3Byb3BzLm5hbWV9PC90ZD5cbiAgICA8dGQ+e3Byb3BzLmhpZ2hlc3RiaWR9PC90ZD5cbiAgICA8dGQ+e3Byb3BzLmxhc3RzYWxlfTwvdGQ+XG4gIDwvdHI+XG5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGlzdEVudHJ5OyJdfQ==