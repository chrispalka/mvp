"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

var _freeRegularSvgIcons = require("@fortawesome/free-regular-svg-icons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.fas);

var ListEntry = function ListEntry(props) {
  return /*#__PURE__*/_react["default"].createElement("tr", {
    className: "hover"
  }, /*#__PURE__*/_react["default"].createElement("td", {
    className: "star"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    checked: true
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: checked ? ['fas', 'star'] : _freeRegularSvgIcons.faStar,
    onClick: function onClick() {
      return props.favorites(props.name);
    }
  }))), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("img", {
    height: "50",
    src: props.media.thumbUrl
  })), /*#__PURE__*/_react["default"].createElement("td", null, props.name), /*#__PURE__*/_react["default"].createElement("td", null, props.highestbid), /*#__PURE__*/_react["default"].createElement("td", null, props.lastsale));
};

var _default = ListEntry;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9MaXN0RW50cnkuanN4Il0sIm5hbWVzIjpbImxpYnJhcnkiLCJhZGQiLCJmYXMiLCJMaXN0RW50cnkiLCJwcm9wcyIsImNoZWNrZWQiLCJmYVN0YXIiLCJmYXZvcml0ZXMiLCJuYW1lIiwibWVkaWEiLCJ0aHVtYlVybCIsImhpZ2hlc3RiaWQiLCJsYXN0c2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUNBQSw0QkFBUUMsR0FBUixDQUFZQyxzQkFBWjs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFEO0FBQUEsc0JBQ2hCO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxrQkFDRTtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsa0JBQ0U7QUFBTyxJQUFBLE9BQU8sRUFBRTtBQUFoQixrQkFDRixnQ0FBQyxpQ0FBRDtBQUFpQixJQUFBLElBQUksRUFBR0MsT0FBTyxHQUFHLENBQUMsS0FBRCxFQUFRLE1BQVIsQ0FBSCxHQUFxQkMsMkJBQXBEO0FBQTZELElBQUEsT0FBTyxFQUFFO0FBQUEsYUFBTUYsS0FBSyxDQUFDRyxTQUFOLENBQWdCSCxLQUFLLENBQUNJLElBQXRCLENBQU47QUFBQTtBQUF0RSxJQURFLENBREYsQ0FERixlQU1FLHlEQUFJO0FBQUssSUFBQSxNQUFNLEVBQUMsSUFBWjtBQUFpQixJQUFBLEdBQUcsRUFBRUosS0FBSyxDQUFDSyxLQUFOLENBQVlDO0FBQWxDLElBQUosQ0FORixlQU9FLDRDQUFLTixLQUFLLENBQUNJLElBQVgsQ0FQRixlQVFFLDRDQUFLSixLQUFLLENBQUNPLFVBQVgsQ0FSRixlQVNFLDRDQUFLUCxLQUFLLENBQUNRLFFBQVgsQ0FURixDQURnQjtBQUFBLENBQWxCOztlQWVlVCxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZmFzIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSdcbmltcG9ydCB7IGZhU3RhciB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29uc1wiO1xubGlicmFyeS5hZGQoZmFzKVxuXG5jb25zdCBMaXN0RW50cnkgPSAocHJvcHMpID0+IChcbiAgPHRyIGNsYXNzTmFtZT1cImhvdmVyXCI+XG4gICAgPHRkIGNsYXNzTmFtZT1cInN0YXJcIj5cbiAgICAgIDxpbnB1dCBjaGVja2VkPXt0cnVlfT5cbiAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249eyBjaGVja2VkID8gWydmYXMnLCAnc3RhciddIDogZmFTdGFyIH0gb25DbGljaz17KCkgPT4gcHJvcHMuZmF2b3JpdGVzKHByb3BzLm5hbWUpfSAvPlxuICAgICAgPC9pbnB1dD5cbiAgICAgIDwvdGQ+XG4gICAgPHRkPjxpbWcgaGVpZ2h0PSc1MCcgc3JjPXtwcm9wcy5tZWRpYS50aHVtYlVybH0+PC9pbWc+PC90ZD5cbiAgICA8dGQ+e3Byb3BzLm5hbWV9PC90ZD5cbiAgICA8dGQ+e3Byb3BzLmhpZ2hlc3RiaWR9PC90ZD5cbiAgICA8dGQ+e3Byb3BzLmxhc3RzYWxlfTwvdGQ+XG4gIDwvdHI+XG5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGlzdEVudHJ5OyJdfQ==