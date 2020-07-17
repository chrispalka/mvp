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
    icon: props.favoriteClicked[props.name] ? ['fas', 'star'] : _freeRegularSvgIcons.faStar,
    onClick: function onClick() {
      return props.favorites(props.name);
    }
  })), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("img", {
    height: "50",
    src: props.media.thumbUrl
  })), /*#__PURE__*/_react["default"].createElement("td", null, props.name), /*#__PURE__*/_react["default"].createElement("td", null, props.highestbid), /*#__PURE__*/_react["default"].createElement("td", null, props.lastsale));
};

var _default = ListEntry;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9MaXN0RW50cnkuanN4Il0sIm5hbWVzIjpbImxpYnJhcnkiLCJhZGQiLCJmYXMiLCJMaXN0RW50cnkiLCJwcm9wcyIsImZhdm9yaXRlQ2xpY2tlZCIsIm5hbWUiLCJmYVN0YXIiLCJmYXZvcml0ZXMiLCJtZWRpYSIsInRodW1iVXJsIiwiaGlnaGVzdGJpZCIsImxhc3RzYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBQ0FBLDRCQUFRQyxHQUFSLENBQVlDLHNCQUFaOztBQUVBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQ7QUFBQSxzQkFDaEI7QUFBSSxJQUFBLFNBQVMsRUFBQztBQUFkLGtCQUNFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxrQkFDQSxnQ0FBQyxpQ0FBRDtBQUFpQixJQUFBLElBQUksRUFBR0EsS0FBSyxDQUFDQyxlQUFOLENBQXNCRCxLQUFLLENBQUNFLElBQTVCLElBQW9DLENBQUMsS0FBRCxFQUFRLE1BQVIsQ0FBcEMsR0FBc0RDLDJCQUE5RTtBQUF1RixJQUFBLE9BQU8sRUFBRTtBQUFBLGFBQU1ILEtBQUssQ0FBQ0ksU0FBTixDQUFnQkosS0FBSyxDQUFDRSxJQUF0QixDQUFOO0FBQUE7QUFBaEcsSUFEQSxDQURGLGVBSUUseURBQUk7QUFBSyxJQUFBLE1BQU0sRUFBQyxJQUFaO0FBQWlCLElBQUEsR0FBRyxFQUFFRixLQUFLLENBQUNLLEtBQU4sQ0FBWUM7QUFBbEMsSUFBSixDQUpGLGVBS0UsNENBQUtOLEtBQUssQ0FBQ0UsSUFBWCxDQUxGLGVBTUUsNENBQUtGLEtBQUssQ0FBQ08sVUFBWCxDQU5GLGVBT0UsNENBQUtQLEtBQUssQ0FBQ1EsUUFBWCxDQVBGLENBRGdCO0FBQUEsQ0FBbEI7O2VBYWVULFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBmYXMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJ1xuaW1wb3J0IHsgZmFTdGFyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zXCI7XG5saWJyYXJ5LmFkZChmYXMpXG5cbmNvbnN0IExpc3RFbnRyeSA9IChwcm9wcykgPT4gKFxuICA8dHIgY2xhc3NOYW1lPVwiaG92ZXJcIj5cbiAgICA8dGQgY2xhc3NOYW1lPVwic3RhclwiPlxuICAgIDxGb250QXdlc29tZUljb24gaWNvbj17IHByb3BzLmZhdm9yaXRlQ2xpY2tlZFtwcm9wcy5uYW1lXSA/IFsnZmFzJywgJ3N0YXInXSA6IGZhU3RhciB9IG9uQ2xpY2s9eygpID0+IHByb3BzLmZhdm9yaXRlcyhwcm9wcy5uYW1lKX0gLz5cbiAgICAgIDwvdGQ+XG4gICAgPHRkPjxpbWcgaGVpZ2h0PSc1MCcgc3JjPXtwcm9wcy5tZWRpYS50aHVtYlVybH0+PC9pbWc+PC90ZD5cbiAgICA8dGQ+e3Byb3BzLm5hbWV9PC90ZD5cbiAgICA8dGQ+e3Byb3BzLmhpZ2hlc3RiaWR9PC90ZD5cbiAgICA8dGQ+e3Byb3BzLmxhc3RzYWxlfTwvdGQ+XG4gIDwvdHI+XG5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGlzdEVudHJ5OyJdfQ==