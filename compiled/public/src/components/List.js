"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ListEntry = _interopRequireDefault(require("./ListEntry.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var List = function List(props) {
  return /*#__PURE__*/_react["default"].createElement("tbody", null, props.searchResults.map(function (x, key) {
    return /*#__PURE__*/_react["default"].createElement(_ListEntry["default"], {
      name: x.name,
      highestBid: x.highest_bid,
      lastSale: x.last_sale,
      media: x.media,
      key: key,
      url: x.url,
      handleFavorite: props.handleFavorite,
      favoriteResults: props.favoriteResults
    });
  }));
};

var _default = List;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9MaXN0LmpzeCJdLCJuYW1lcyI6WyJMaXN0IiwicHJvcHMiLCJzZWFyY2hSZXN1bHRzIiwibWFwIiwieCIsImtleSIsIm5hbWUiLCJoaWdoZXN0X2JpZCIsImxhc3Rfc2FsZSIsIm1lZGlhIiwidXJsIiwiaGFuZGxlRmF2b3JpdGUiLCJmYXZvcml0ZVJlc3VsdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQ7QUFBQSxzQkFDWCwrQ0FDR0EsS0FBSyxDQUFDQyxhQUFOLENBQW9CQyxHQUFwQixDQUF3QixVQUFDQyxDQUFELEVBQUlDLEdBQUo7QUFBQSx3QkFDdkIsZ0NBQUMscUJBQUQ7QUFBVyxNQUFBLElBQUksRUFBRUQsQ0FBQyxDQUFDRSxJQUFuQjtBQUF5QixNQUFBLFVBQVUsRUFBRUYsQ0FBQyxDQUFDRyxXQUF2QztBQUFvRCxNQUFBLFFBQVEsRUFBRUgsQ0FBQyxDQUFDSSxTQUFoRTtBQUEyRSxNQUFBLEtBQUssRUFBRUosQ0FBQyxDQUFDSyxLQUFwRjtBQUEyRixNQUFBLEdBQUcsRUFBRUosR0FBaEc7QUFBcUcsTUFBQSxHQUFHLEVBQUVELENBQUMsQ0FBQ00sR0FBNUc7QUFBaUgsTUFBQSxjQUFjLEVBQUVULEtBQUssQ0FBQ1UsY0FBdkk7QUFBdUosTUFBQSxlQUFlLEVBQUVWLEtBQUssQ0FBQ1c7QUFBOUssTUFEdUI7QUFBQSxHQUF4QixDQURILENBRFc7QUFBQSxDQUFiOztlQVFlWixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpc3RFbnRyeSBmcm9tICcuL0xpc3RFbnRyeS5qc3gnXG5cbmNvbnN0IExpc3QgPSAocHJvcHMpID0+IChcbiAgPHRib2R5PlxuICAgIHtwcm9wcy5zZWFyY2hSZXN1bHRzLm1hcCgoeCwga2V5KSA9PlxuICAgICAgPExpc3RFbnRyeSBuYW1lPXt4Lm5hbWV9IGhpZ2hlc3RCaWQ9e3guaGlnaGVzdF9iaWR9IGxhc3RTYWxlPXt4Lmxhc3Rfc2FsZX0gbWVkaWE9e3gubWVkaWF9IGtleT17a2V5fSB1cmw9e3gudXJsfSBoYW5kbGVGYXZvcml0ZT17cHJvcHMuaGFuZGxlRmF2b3JpdGV9IGZhdm9yaXRlUmVzdWx0cz17cHJvcHMuZmF2b3JpdGVSZXN1bHRzfSAvPlxuICAgICl9XG4gIDwvdGJvZHk+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG5cblxuIl19