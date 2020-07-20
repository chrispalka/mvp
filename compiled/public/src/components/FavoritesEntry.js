"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _freeRegularSvgIcons = require("@fortawesome/free-regular-svg-icons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.fas);

var FavoritesEntry = function FavoritesEntry(props) {
  return /*#__PURE__*/_react["default"].createElement("tr", {
    className: "hover"
  }, /*#__PURE__*/_react["default"].createElement("td", {
    className: "star"
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: props.savedFavorites[props.name] === true ? ['fas', 'star'] : _freeRegularSvgIcons.faStar,
    onClick: function onClick() {
      return props.handleFavorite([props.name, props.highestBid, props.lastSale, props.url, props.media]);
    }
  })), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("img", {
    height: "50",
    src: props.media
  })), /*#__PURE__*/_react["default"].createElement("td", null, props.name), /*#__PURE__*/_react["default"].createElement("td", null, props.highestBid), /*#__PURE__*/_react["default"].createElement("td", null, props.lastSale));
};

var _default = FavoritesEntry;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9GYXZvcml0ZXNFbnRyeS5qc3giXSwibmFtZXMiOlsibGlicmFyeSIsImFkZCIsImZhcyIsIkZhdm9yaXRlc0VudHJ5IiwicHJvcHMiLCJzYXZlZEZhdm9yaXRlcyIsIm5hbWUiLCJmYVN0YXIiLCJoYW5kbGVGYXZvcml0ZSIsImhpZ2hlc3RCaWQiLCJsYXN0U2FsZSIsInVybCIsIm1lZGlhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBQ0FBLDRCQUFRQyxHQUFSLENBQVlDLHNCQUFaOztBQUVBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRDtBQUFBLHNCQUNyQjtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsa0JBQ0U7QUFBSSxJQUFBLFNBQVMsRUFBQztBQUFkLGtCQUNBLGdDQUFDLGlDQUFEO0FBQWlCLElBQUEsSUFBSSxFQUFHQSxLQUFLLENBQUNDLGNBQU4sQ0FBcUJELEtBQUssQ0FBQ0UsSUFBM0IsTUFBcUMsSUFBckMsR0FBNEMsQ0FBQyxLQUFELEVBQVEsTUFBUixDQUE1QyxHQUE4REMsMkJBQXRGO0FBQStGLElBQUEsT0FBTyxFQUFFO0FBQUEsYUFBTUgsS0FBSyxDQUFDSSxjQUFOLENBQXFCLENBQUNKLEtBQUssQ0FBQ0UsSUFBUCxFQUFhRixLQUFLLENBQUNLLFVBQW5CLEVBQStCTCxLQUFLLENBQUNNLFFBQXJDLEVBQStDTixLQUFLLENBQUNPLEdBQXJELEVBQTBEUCxLQUFLLENBQUNRLEtBQWhFLENBQXJCLENBQU47QUFBQTtBQUF4RyxJQURBLENBREYsZUFJRSx5REFBSTtBQUFLLElBQUEsTUFBTSxFQUFDLElBQVo7QUFBaUIsSUFBQSxHQUFHLEVBQUVSLEtBQUssQ0FBQ1E7QUFBNUIsSUFBSixDQUpGLGVBS0UsNENBQUtSLEtBQUssQ0FBQ0UsSUFBWCxDQUxGLGVBTUUsNENBQUtGLEtBQUssQ0FBQ0ssVUFBWCxDQU5GLGVBT0UsNENBQUtMLEtBQUssQ0FBQ00sUUFBWCxDQVBGLENBRHFCO0FBQUEsQ0FBdkI7O2VBWWVQLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJ1xuaW1wb3J0IHsgZmFzIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgZmFTdGFyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXJlZ3VsYXItc3ZnLWljb25zXCI7XG5saWJyYXJ5LmFkZChmYXMpXG5cbmNvbnN0IEZhdm9yaXRlc0VudHJ5ID0gKHByb3BzKSA9PiAoXG4gIDx0ciBjbGFzc05hbWU9XCJob3ZlclwiPlxuICAgIDx0ZCBjbGFzc05hbWU9XCJzdGFyXCI+XG4gICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXsgcHJvcHMuc2F2ZWRGYXZvcml0ZXNbcHJvcHMubmFtZV0gPT09IHRydWUgPyBbJ2ZhcycsICdzdGFyJ10gOiBmYVN0YXIgfSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5oYW5kbGVGYXZvcml0ZShbcHJvcHMubmFtZSwgcHJvcHMuaGlnaGVzdEJpZCwgcHJvcHMubGFzdFNhbGUsIHByb3BzLnVybCwgcHJvcHMubWVkaWFdKX0gLz5cbiAgICAgIDwvdGQ+XG4gICAgPHRkPjxpbWcgaGVpZ2h0PSc1MCcgc3JjPXtwcm9wcy5tZWRpYX0+PC9pbWc+PC90ZD5cbiAgICA8dGQ+e3Byb3BzLm5hbWV9PC90ZD5cbiAgICA8dGQ+e3Byb3BzLmhpZ2hlc3RCaWR9PC90ZD5cbiAgICA8dGQ+e3Byb3BzLmxhc3RTYWxlfTwvdGQ+XG4gIDwvdHI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlc0VudHJ5OyJdfQ==