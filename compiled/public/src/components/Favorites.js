"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _FavoritesEntry = _interopRequireDefault(require("./FavoritesEntry.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Favorites = function Favorites(props) {
  return /*#__PURE__*/_react["default"].createElement("tbody", null, Object.keys(props.favoriteResults).map(function (shoe, i) {
    return /*#__PURE__*/_react["default"].createElement(_FavoritesEntry["default"], {
      name: shoe,
      highestBid: props.favoriteResults[shoe].highestBid,
      lastSale: props.favoriteResults[shoe].lastSale,
      media: props.favoriteResults[shoe].media,
      url: props.favoriteResults[shoe].url,
      handleFavorite: props.handleFavorite,
      savedFavorites: props.savedFavorites,
      key: i
    });
  }));
};

var _default = Favorites; // console.log(props.favoriteResults[shoes].highestBid)

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9GYXZvcml0ZXMuanN4Il0sIm5hbWVzIjpbIkZhdm9yaXRlcyIsInByb3BzIiwiT2JqZWN0Iiwia2V5cyIsImZhdm9yaXRlUmVzdWx0cyIsIm1hcCIsInNob2UiLCJpIiwiaGlnaGVzdEJpZCIsImxhc3RTYWxlIiwibWVkaWEiLCJ1cmwiLCJoYW5kbGVGYXZvcml0ZSIsInNhdmVkRmF2b3JpdGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFEO0FBQUEsc0JBQ2hCLCtDQUNLQyxNQUFNLENBQUNDLElBQVAsQ0FBWUYsS0FBSyxDQUFDRyxlQUFsQixFQUFtQ0MsR0FBbkMsQ0FBdUMsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsd0JBQ3RDLGdDQUFDLDBCQUFEO0FBQWdCLE1BQUEsSUFBSSxFQUFFRCxJQUF0QjtBQUE0QixNQUFBLFVBQVUsRUFBRUwsS0FBSyxDQUFDRyxlQUFOLENBQXNCRSxJQUF0QixFQUE0QkUsVUFBcEU7QUFBZ0YsTUFBQSxRQUFRLEVBQUVQLEtBQUssQ0FBQ0csZUFBTixDQUFzQkUsSUFBdEIsRUFBNEJHLFFBQXRIO0FBQWdJLE1BQUEsS0FBSyxFQUFFUixLQUFLLENBQUNHLGVBQU4sQ0FBc0JFLElBQXRCLEVBQTRCSSxLQUFuSztBQUEwSyxNQUFBLEdBQUcsRUFBRVQsS0FBSyxDQUFDRyxlQUFOLENBQXNCRSxJQUF0QixFQUE0QkssR0FBM007QUFBZ04sTUFBQSxjQUFjLEVBQUVWLEtBQUssQ0FBQ1csY0FBdE87QUFBc1AsTUFBQSxjQUFjLEVBQUVYLEtBQUssQ0FBQ1ksY0FBNVE7QUFBNFIsTUFBQSxHQUFHLEVBQUVOO0FBQWpTLE1BRHNDO0FBQUEsR0FBdkMsQ0FETCxDQURnQjtBQUFBLENBQWxCOztlQVNlUCxTLEVBRWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmF2b3JpdGVzRW50cnkgZnJvbSAnLi9GYXZvcml0ZXNFbnRyeS5qc3gnXG5cbmNvbnN0IEZhdm9yaXRlcyA9IChwcm9wcykgPT4gKFxuICA8dGJvZHk+XG4gICAgICB7T2JqZWN0LmtleXMocHJvcHMuZmF2b3JpdGVSZXN1bHRzKS5tYXAoKHNob2UsIGkpID0+XG4gICAgICAgIDxGYXZvcml0ZXNFbnRyeSBuYW1lPXtzaG9lfSBoaWdoZXN0QmlkPXtwcm9wcy5mYXZvcml0ZVJlc3VsdHNbc2hvZV0uaGlnaGVzdEJpZH0gbGFzdFNhbGU9e3Byb3BzLmZhdm9yaXRlUmVzdWx0c1tzaG9lXS5sYXN0U2FsZX0gbWVkaWE9e3Byb3BzLmZhdm9yaXRlUmVzdWx0c1tzaG9lXS5tZWRpYX0gdXJsPXtwcm9wcy5mYXZvcml0ZVJlc3VsdHNbc2hvZV0udXJsfSBoYW5kbGVGYXZvcml0ZT17cHJvcHMuaGFuZGxlRmF2b3JpdGV9IHNhdmVkRmF2b3JpdGVzPXtwcm9wcy5zYXZlZEZhdm9yaXRlc30ga2V5PXtpfSAvPlxuICAgICAgKX1cbiAgICA8L3Rib2R5PlxuKVxuXG5cbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlcztcblxuLy8gY29uc29sZS5sb2cocHJvcHMuZmF2b3JpdGVSZXN1bHRzW3Nob2VzXS5oaWdoZXN0QmlkKSJdfQ==