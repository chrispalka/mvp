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
  return /*#__PURE__*/_react["default"].createElement("tbody", null, props.results.map(function (x, key) {
    return (
      /*#__PURE__*/
      // console.log(x.name)
      _react["default"].createElement(_ListEntry["default"], {
        name: x.name,
        highestbid: x.highest_bid,
        lastsale: x.last_sale,
        media: x.media,
        key: key
      })
    );
  }));
};

var _default = List;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9MaXN0LmpzeCJdLCJuYW1lcyI6WyJMaXN0IiwicHJvcHMiLCJyZXN1bHRzIiwibWFwIiwieCIsImtleSIsIm5hbWUiLCJoaWdoZXN0X2JpZCIsImxhc3Rfc2FsZSIsIm1lZGlhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFEO0FBQUEsc0JBQ1gsK0NBQ0dBLEtBQUssQ0FBQ0MsT0FBTixDQUFjQyxHQUFkLENBQWtCLFVBQUNDLENBQUQsRUFBSUMsR0FBSjtBQUFBO0FBQUE7QUFDakI7QUFDQSxzQ0FBQyxxQkFBRDtBQUFXLFFBQUEsSUFBSSxFQUFFRCxDQUFDLENBQUNFLElBQW5CO0FBQXlCLFFBQUEsVUFBVSxFQUFFRixDQUFDLENBQUNHLFdBQXZDO0FBQW9ELFFBQUEsUUFBUSxFQUFFSCxDQUFDLENBQUNJLFNBQWhFO0FBQTJFLFFBQUEsS0FBSyxFQUFFSixDQUFDLENBQUNLLEtBQXBGO0FBQTJGLFFBQUEsR0FBRyxFQUFFSjtBQUFoRztBQUZpQjtBQUFBLEdBQWxCLENBREgsQ0FEVztBQUFBLENBQWI7O2VBU2VMLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGlzdEVudHJ5IGZyb20gJy4vTGlzdEVudHJ5LmpzeCdcblxuY29uc3QgTGlzdCA9IChwcm9wcykgPT4gKFxuICA8dGJvZHk+XG4gICAge3Byb3BzLnJlc3VsdHMubWFwKCh4LCBrZXkpID0+XG4gICAgICAvLyBjb25zb2xlLmxvZyh4Lm5hbWUpXG4gICAgICA8TGlzdEVudHJ5IG5hbWU9e3gubmFtZX0gaGlnaGVzdGJpZD17eC5oaWdoZXN0X2JpZH0gbGFzdHNhbGU9e3gubGFzdF9zYWxlfSBtZWRpYT17eC5tZWRpYX0ga2V5PXtrZXl9IC8+XG4gICAgKX1cbiAgPC90Ym9keT5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcblxuXG4iXX0=