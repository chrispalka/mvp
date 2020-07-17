"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _List = _interopRequireDefault(require("./List.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Main = /*#__PURE__*/function (_React$Component) {
  _inherits(Main, _React$Component);

  var _super = _createSuper(Main);

  function Main(props) {
    var _this;

    _classCallCheck(this, Main);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      var store = _this.state;
      store[e.target.name] = e.target.value;

      _this.setState(store);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function (e) {
      var results;
      e.preventDefault();
      var data = new FormData();
      data.append('search', _this.state.search);
      fetch('/search', {
        method: 'POST',
        body: data
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        var result = [];
        var dataObj = {};
        console.log(data.productList);
        data = data.productList;
        data.forEach(function (x) {
          result.push(function (_ref) {
            var name = _ref.name,
                highest_bid = _ref.highest_bid,
                last_sale = _ref.last_sale,
                media = _ref.media;
            return {
              name: name,
              highest_bid: highest_bid,
              last_sale: last_sale,
              media: media
            };
          }(x));
        });

        _this.setState({
          results: result
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFavorite", function (key) {
      console.log('key! ', key);
      console.log('Hi from favorites!');

      _this.setState(function (state) {
        return {
          favoriteClicked: !state.favoriteClicked
        };
      });
    });

    _this.state = {
      search: '',
      results: [],
      favoriteClicked: {}
    };
    return _this;
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      var h1;

      if (this.props.username.length < 1) {
        h1 = /*#__PURE__*/_react["default"].createElement("h1", null, "Welcome back!");
      } else {
        h1 = /*#__PURE__*/_react["default"].createElement("h1", null, "Welcome back ", this.props.username, "!");
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "container"
      }, h1, /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: this.handleSearch
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        className: "form-control",
        name: "search",
        value: this.state.search,
        onChange: this.onChange,
        placeholder: "Lets find some sneakers!"
      }))), /*#__PURE__*/_react["default"].createElement("table", {
        className: "table table-striped table-dark"
      }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", {
        scope: "col"
      }), /*#__PURE__*/_react["default"].createElement("th", {
        scope: "col"
      }), /*#__PURE__*/_react["default"].createElement("th", {
        scope: "col"
      }, "Name"), /*#__PURE__*/_react["default"].createElement("th", {
        scope: "col"
      }, "Highest Bid"), /*#__PURE__*/_react["default"].createElement("th", {
        scope: "col"
      }, "Last Sale"))), /*#__PURE__*/_react["default"].createElement(_List["default"], {
        results: this.state.results,
        favoriteClicked: this.state.favoriteClicked,
        favorites: this.handleFavorite
      })));
    }
  }]);

  return Main;
}(_react["default"].Component);

var _default = Main;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9NYWluLmpzeCJdLCJuYW1lcyI6WyJNYWluIiwicHJvcHMiLCJlIiwic3RvcmUiLCJzdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNldFN0YXRlIiwicmVzdWx0cyIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwic2VhcmNoIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJkYXRhT2JqIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RMaXN0IiwiZm9yRWFjaCIsIngiLCJwdXNoIiwiaGlnaGVzdF9iaWQiLCJsYXN0X3NhbGUiLCJtZWRpYSIsImtleSIsImZhdm9yaXRlQ2xpY2tlZCIsImgxIiwidXNlcm5hbWUiLCJsZW5ndGgiLCJoYW5kbGVTZWFyY2giLCJvbkNoYW5nZSIsImhhbmRsZUZhdm9yaXRlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHTUEsSTs7Ozs7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsK0RBV1IsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2hCLFVBQU1DLEtBQUssR0FBRyxNQUFLQyxLQUFuQjtBQUNBRCxNQUFBQSxLQUFLLENBQUNELENBQUMsQ0FBQ0csTUFBRixDQUFTQyxJQUFWLENBQUwsR0FBdUJKLENBQUMsQ0FBQ0csTUFBRixDQUFTRSxLQUFoQzs7QUFDQSxZQUFLQyxRQUFMLENBQWNMLEtBQWQ7QUFDRCxLQWZrQjs7QUFBQSxtRUFtQkosVUFBQ0QsQ0FBRCxFQUFPO0FBQ3BCLFVBQUlPLE9BQUo7QUFDQVAsTUFBQUEsQ0FBQyxDQUFDUSxjQUFGO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLElBQUlDLFFB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Q0UseURBQ0U7QUFBSSxRQUFBLEtBQUssRUFBQztBQUFWLFFBREYsZUFFRTtBQUFJLFFBQUEsS0FBSyxFQUFDO0FBQVYsUUFGRixlQUdFO0FBQUksUUFBQSxLQUFLLEVBQUM7QUFBVixnQkFIRixlQUlFO0FBQUksUUFBQSxLQUFLLEVBQUM7QUFBVix1QkFKRixlQUtFO0FBQUksUUFBQSxLQUFLLEVBQUM7QUFBVixxQkFMRixDQURGLENBREYsZUFVSSxnQ0FBQyxnQkFBRDtBQUFNLFFBQUEsT0FBTyxFQUFFLEtBQUtsQyxLQUFMLENBQVdLLE9BQTFCO0FBQW1DLFFBQUEsZUFBZSxFQUFFLEtBQUtMLEtBQUwsQ0FBVzZCLGVBQS9EO0FBQWdGLFFBQUEsU0FBUyxFQUFFLEtBQUtNO0FBQWhHLFFBVkosQ0FQRixDQURGO0FBc0JEOzs7O0VBaEZnQkMsa0JBQU1DLFM7O2VBbUZWekMsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgTGlzdCBmcm9tICcuL0xpc3QuanN4JztcblxuXG5jbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoOiAnJyxcbiAgICAgIHJlc3VsdHM6IFtdLFxuICAgICAgZmF2b3JpdGVDbGlja2VkOiB7XG4gICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBzdG9yZSA9IHRoaXMuc3RhdGU7XG4gICAgc3RvcmVbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHN0b3JlKTtcbiAgfVxuXG5cblxuICBoYW5kbGVTZWFyY2ggPSAoZSkgPT4ge1xuICAgIGxldCByZXN1bHRzO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICBkYXRhLmFwcGVuZCgnc2VhcmNoJywgdGhpcy5zdGF0ZS5zZWFyY2gpO1xuICAgIGZldGNoKCcvc2VhcmNoJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBkYXRhXG4gICAgfSlcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBjb25zdCBkYXRhT2JqID0ge307XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEucHJvZHVjdExpc3QpXG4gICAgICAgIGRhdGEgPSBkYXRhLnByb2R1Y3RMaXN0XG4gICAgICAgIGRhdGEuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKCgoeyBuYW1lLCBoaWdoZXN0X2JpZCwgbGFzdF9zYWxlLCBtZWRpYSB9KSA9PiAoeyBuYW1lLCBoaWdoZXN0X2JpZCwgbGFzdF9zYWxlLCBtZWRpYSB9KSkoeCkpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXN1bHRzOiByZXN1bHQgfSlcbiAgICAgIH0pXG4gIH1cblxuICBoYW5kbGVGYXZvcml0ZSA9IChrZXkpID0+IHtcbiAgICBjb25zb2xlLmxvZygna2V5ISAnLCBrZXkpXG4gICAgY29uc29sZS5sb2coJ0hpIGZyb20gZmF2b3JpdGVzIScpXG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoIHtcbiAgICAgIGZhdm9yaXRlQ2xpY2tlZDogIXN0YXRlLmZhdm9yaXRlQ2xpY2tlZFxuICAgIH0pKVxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGgxO1xuICAgIGlmICh0aGlzLnByb3BzLnVzZXJuYW1lLmxlbmd0aCA8IDEpIHtcbiAgICAgIGgxID0gPGgxPldlbGNvbWUgYmFjayE8L2gxPlxuICAgIH0gZWxzZSB7XG4gICAgICBoMSA9IDxoMT5XZWxjb21lIGJhY2sge3RoaXMucHJvcHMudXNlcm5hbWV9ITwvaDE+XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICB7aDF9XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVNlYXJjaH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwic2VhcmNoXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gcGxhY2Vob2xkZXI9XCJMZXRzIGZpbmQgc29tZSBzbmVha2VycyFcIj48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWRhcmtcIj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPjwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPjwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPk5hbWU8L3RoPlxuICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5IaWdoZXN0IEJpZDwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkxhc3QgU2FsZTwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8TGlzdCByZXN1bHRzPXt0aGlzLnN0YXRlLnJlc3VsdHN9IGZhdm9yaXRlQ2xpY2tlZD17dGhpcy5zdGF0ZS5mYXZvcml0ZUNsaWNrZWR9IGZhdm9yaXRlcz17dGhpcy5oYW5kbGVGYXZvcml0ZX0gLz5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluOyJdfQ==