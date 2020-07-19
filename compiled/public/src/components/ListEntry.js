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
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: props.favoriteResults[props.name] && props.favoriteResults[props.name].status ? ['fas', 'star'] : _freeRegularSvgIcons.faStar,
    onClick: function onClick() {
      return props.handleFavorite([props.name, props.highestBid, props.lastSale, props.url, props.media.thumbUrl]);
    }
  })), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("img", {
    height: "50",
    src: props.media.thumbUrl
  })), /*#__PURE__*/_react["default"].createElement("td", null, props.name), /*#__PURE__*/_react["default"].createElement("td", null, props.highestBid), /*#__PURE__*/_react["default"].createElement("td", null, props.lastSale));
};

var _default = ListEntry;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9MaXN0RW50cnkuanN4Il0sIm5hbWVzIjpbImxpYnJhcnkiLCJhZGQiLCJmYXMiLCJMaXN0RW50cnkiLCJwcm9wcyIsImZhdm9yaXRlUmVzdWx0cyIsIm5hbWUiLCJzdGF0dXMiLCJmYVN0YXIiLCJoYW5kbGVGYXZvcml0ZSIsImhpZ2hlc3RCaWQiLCJsYXN0U2FsZSIsInVybCIsIm1lZGlhIiwidGh1bWJVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFDQUEsNEJBQVFDLEdBQVIsQ0FBWUMsc0JBQVo7O0FBRUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLHNCQUNoQjtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsa0JBQ0U7QUFBSSxJQUFBLFNBQVMsRUFBQztBQUFkLGtCQUNBLGdDQUFDLGlDQUFEO0FBQWlCLElBQUEsSUFBSSxFQUFHQSxLQUFLLENBQUNDLGVBQU4sQ0FBc0JELEtBQUssQ0FBQ0UsSUFBNUIsS0FBcUNGLEtBQUssQ0FBQ0MsZUFBTixDQUFzQkQsS0FBSyxDQUFDRSxJQUE1QixFQUFrQ0MsTUFBdkUsR0FBZ0YsQ0FBQyxLQUFELEVBQVEsTUFBUixDQUFoRixHQUFrR0MsMkJBQTFIO0FBQW1JLElBQUEsT0FBTyxFQUFFO0FBQUEsYUFBTUosS0FBSyxDQUFDSyxjQUFOLENBQXFCLENBQUNMLEtBQUssQ0FBQ0UsSUFBUCxFQUFhRixLQUFLLENBQUNNLFVBQW5CLEVBQStCTixLQUFLLENBQUNPLFFBQXJDLEVBQStDUCxLQUFLLENBQUNRLEdBQXJELEVBQTBEUixLQUFLLENBQUNTLEtBQU4sQ0FBWUMsUUFBdEUsQ0FBckIsQ0FBTjtBQUFBO0FBQTVJLElBREEsQ0FERixlQUlFLHlEQUFJO0FBQUssSUFBQSxNQUFNLEVBQUMsSUFBWjtBQUFpQixJQUFBLEdBQUcsRUFBRVYsS0FBSyxDQUFDUyxLQUFOLENBQVlDO0FBQWxDLElBQUosQ0FKRixlQUtFLDRDQUFLVixLQUFLLENBQUNFLElBQVgsQ0FMRixlQU1FLDRDQUFLRixLQUFLLENBQUNNLFVBQVgsQ0FORixlQU9FLDRDQUFLTixLQUFLLENBQUNPLFFBQVgsQ0FQRixDQURnQjtBQUFBLENBQWxCOztlQWFlUixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZmFzIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSdcbmltcG9ydCB7IGZhU3RhciB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29uc1wiO1xubGlicmFyeS5hZGQoZmFzKVxuXG5jb25zdCBMaXN0RW50cnkgPSAocHJvcHMpID0+IChcbiAgPHRyIGNsYXNzTmFtZT1cImhvdmVyXCI+XG4gICAgPHRkIGNsYXNzTmFtZT1cInN0YXJcIj5cbiAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249eyBwcm9wcy5mYXZvcml0ZVJlc3VsdHNbcHJvcHMubmFtZV0gJiYgcHJvcHMuZmF2b3JpdGVSZXN1bHRzW3Byb3BzLm5hbWVdLnN0YXR1cyA/IFsnZmFzJywgJ3N0YXInXSA6IGZhU3RhciB9IG9uQ2xpY2s9eygpID0+IHByb3BzLmhhbmRsZUZhdm9yaXRlKFtwcm9wcy5uYW1lLCBwcm9wcy5oaWdoZXN0QmlkLCBwcm9wcy5sYXN0U2FsZSwgcHJvcHMudXJsLCBwcm9wcy5tZWRpYS50aHVtYlVybF0pfSAvPlxuICAgICAgPC90ZD5cbiAgICA8dGQ+PGltZyBoZWlnaHQ9JzUwJyBzcmM9e3Byb3BzLm1lZGlhLnRodW1iVXJsfT48L2ltZz48L3RkPlxuICAgIDx0ZD57cHJvcHMubmFtZX08L3RkPlxuICAgIDx0ZD57cHJvcHMuaGlnaGVzdEJpZH08L3RkPlxuICAgIDx0ZD57cHJvcHMubGFzdFNhbGV9PC90ZD5cbiAgPC90cj5cblxuKVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0RW50cnk7Il19