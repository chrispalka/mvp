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
    icon: props.favoriteClicked[props.name] && props.favoriteClicked[props.name].status ? ['fas', 'star'] : _freeRegularSvgIcons.faStar,
    onClick: function onClick() {
      return props.favorites([props.name, props.highestBid, props.lastSale, props.url, props.media.thumbUrl]);
    }
  })), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("img", {
    height: "50",
    src: props.media.thumbUrl
  })), /*#__PURE__*/_react["default"].createElement("td", null, props.name), /*#__PURE__*/_react["default"].createElement("td", null, props.highestBid), /*#__PURE__*/_react["default"].createElement("td", null, props.lastSale));
};

var _default = ListEntry;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9MaXN0RW50cnkuanN4Il0sIm5hbWVzIjpbImxpYnJhcnkiLCJhZGQiLCJmYXMiLCJMaXN0RW50cnkiLCJwcm9wcyIsImZhdm9yaXRlQ2xpY2tlZCIsIm5hbWUiLCJzdGF0dXMiLCJmYVN0YXIiLCJmYXZvcml0ZXMiLCJoaWdoZXN0QmlkIiwibGFzdFNhbGUiLCJ1cmwiLCJtZWRpYSIsInRodW1iVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0FBQ0FBLDRCQUFRQyxHQUFSLENBQVlDLHNCQUFaOztBQUVBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQ7QUFBQSxzQkFDaEI7QUFBSSxJQUFBLFNBQVMsRUFBQztBQUFkLGtCQUNFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxrQkFDQSxnQ0FBQyxpQ0FBRDtBQUFpQixJQUFBLElBQUksRUFBR0EsS0FBSyxDQUFDQyxlQUFOLENBQXNCRCxLQUFLLENBQUNFLElBQTVCLEtBQXFDRixLQUFLLENBQUNDLGVBQU4sQ0FBc0JELEtBQUssQ0FBQ0UsSUFBNUIsRUFBa0NDLE1BQXZFLEdBQWdGLENBQUMsS0FBRCxFQUFRLE1BQVIsQ0FBaEYsR0FBa0dDLDJCQUExSDtBQUFtSSxJQUFBLE9BQU8sRUFBRTtBQUFBLGFBQU1KLEtBQUssQ0FBQ0ssU0FBTixDQUFnQixDQUFDTCxLQUFLLENBQUNFLElBQVAsRUFBYUYsS0FBSyxDQUFDTSxVQUFuQixFQUErQk4sS0FBSyxDQUFDTyxRQUFyQyxFQUErQ1AsS0FBSyxDQUFDUSxHQUFyRCxFQUEwRFIsS0FBSyxDQUFDUyxLQUFOLENBQVlDLFFBQXRFLENBQWhCLENBQU47QUFBQTtBQUE1SSxJQURBLENBREYsZUFJRSx5REFBSTtBQUFLLElBQUEsTUFBTSxFQUFDLElBQVo7QUFBaUIsSUFBQSxHQUFHLEVBQUVWLEtBQUssQ0FBQ1MsS0FBTixDQUFZQztBQUFsQyxJQUFKLENBSkYsZUFLRSw0Q0FBS1YsS0FBSyxDQUFDRSxJQUFYLENBTEYsZUFNRSw0Q0FBS0YsS0FBSyxDQUFDTSxVQUFYLENBTkYsZUFPRSw0Q0FBS04sS0FBSyxDQUFDTyxRQUFYLENBUEYsQ0FEZ0I7QUFBQSxDQUFsQjs7ZUFhZVIsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGZhcyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnXG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnNcIjtcbmxpYnJhcnkuYWRkKGZhcylcblxuY29uc3QgTGlzdEVudHJ5ID0gKHByb3BzKSA9PiAoXG4gIDx0ciBjbGFzc05hbWU9XCJob3ZlclwiPlxuICAgIDx0ZCBjbGFzc05hbWU9XCJzdGFyXCI+XG4gICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXsgcHJvcHMuZmF2b3JpdGVDbGlja2VkW3Byb3BzLm5hbWVdICYmIHByb3BzLmZhdm9yaXRlQ2xpY2tlZFtwcm9wcy5uYW1lXS5zdGF0dXMgPyBbJ2ZhcycsICdzdGFyJ10gOiBmYVN0YXIgfSBvbkNsaWNrPXsoKSA9PiBwcm9wcy5mYXZvcml0ZXMoW3Byb3BzLm5hbWUsIHByb3BzLmhpZ2hlc3RCaWQsIHByb3BzLmxhc3RTYWxlLCBwcm9wcy51cmwsIHByb3BzLm1lZGlhLnRodW1iVXJsXSl9IC8+XG4gICAgICA8L3RkPlxuICAgIDx0ZD48aW1nIGhlaWdodD0nNTAnIHNyYz17cHJvcHMubWVkaWEudGh1bWJVcmx9PjwvaW1nPjwvdGQ+XG4gICAgPHRkPntwcm9wcy5uYW1lfTwvdGQ+XG4gICAgPHRkPntwcm9wcy5oaWdoZXN0QmlkfTwvdGQ+XG4gICAgPHRkPntwcm9wcy5sYXN0U2FsZX08L3RkPlxuICA8L3RyPlxuXG4pXG5cbmV4cG9ydCBkZWZhdWx0IExpc3RFbnRyeTsiXX0=