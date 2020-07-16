"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _freeRegularSvgIcons = require("@fortawesome/free-regular-svg-icons");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import { faStar } from "@fortawesome/free-solid-svg-icons";
var ListEntry = function ListEntry(props) {
  return /*#__PURE__*/_react["default"].createElement("tr", {
    className: "hover"
  }, /*#__PURE__*/_react["default"].createElement("td", {
    className: "star"
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeRegularSvgIcons.faStar,
    onClick: props.favorites
  })), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("img", {
    height: "50",
    src: props.media.thumbUrl
  })), /*#__PURE__*/_react["default"].createElement("td", null, props.name), /*#__PURE__*/_react["default"].createElement("td", null, props.highestbid), /*#__PURE__*/_react["default"].createElement("td", null, props.lastsale));
};

var _default = ListEntry;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9MaXN0RW50cnkuanN4Il0sIm5hbWVzIjpbIkxpc3RFbnRyeSIsInByb3BzIiwiZmFTdGFyIiwiZmF2b3JpdGVzIiwibWVkaWEiLCJ0aHVtYlVybCIsIm5hbWUiLCJoaWdoZXN0YmlkIiwibGFzdHNhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOzs7Ozs7QUFGQTtBQUlBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQ7QUFBQSxzQkFDaEI7QUFBSSxJQUFBLFNBQVMsRUFBQztBQUFkLGtCQUNFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxrQkFDQSxnQ0FBQyxpQ0FBRDtBQUFpQixJQUFBLElBQUksRUFBRUMsMkJBQXZCO0FBQStCLElBQUEsT0FBTyxFQUFFRCxLQUFLLENBQUNFO0FBQTlDLElBREEsQ0FERixlQUlFLHlEQUFJO0FBQUssSUFBQSxNQUFNLEVBQUMsSUFBWjtBQUFpQixJQUFBLEdBQUcsRUFBRUYsS0FBSyxDQUFDRyxLQUFOLENBQVlDO0FBQWxDLElBQUosQ0FKRixlQUtFLDRDQUFLSixLQUFLLENBQUNLLElBQVgsQ0FMRixlQU1FLDRDQUFLTCxLQUFLLENBQUNNLFVBQVgsQ0FORixlQU9FLDRDQUFLTixLQUFLLENBQUNPLFFBQVgsQ0FQRixDQURnQjtBQUFBLENBQWxCOztlQWFlUixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgZmFTdGFyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgZmFTdGFyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5cbmNvbnN0IExpc3RFbnRyeSA9IChwcm9wcykgPT4gKFxuICA8dHIgY2xhc3NOYW1lPVwiaG92ZXJcIj5cbiAgICA8dGQgY2xhc3NOYW1lPVwic3RhclwiPlxuICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTdGFyfSBvbkNsaWNrPXtwcm9wcy5mYXZvcml0ZXN9IC8+XG4gICAgICA8L3RkPlxuICAgIDx0ZD48aW1nIGhlaWdodD0nNTAnIHNyYz17cHJvcHMubWVkaWEudGh1bWJVcmx9PjwvaW1nPjwvdGQ+XG4gICAgPHRkPntwcm9wcy5uYW1lfTwvdGQ+XG4gICAgPHRkPntwcm9wcy5oaWdoZXN0YmlkfTwvdGQ+XG4gICAgPHRkPntwcm9wcy5sYXN0c2FsZX08L3RkPlxuICA8L3RyPlxuXG4pXG5cbmV4cG9ydCBkZWZhdWx0IExpc3RFbnRyeTsiXX0=