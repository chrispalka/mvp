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

    _this.state = {
      search: '',
      results: []
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
      }, "Name"), /*#__PURE__*/_react["default"].createElement("th", {
        scope: "col"
      }, "Highest Bid"), /*#__PURE__*/_react["default"].createElement("th", {
        scope: "col"
      }, "Last Sale"))), /*#__PURE__*/_react["default"].createElement(_List["default"], {
        results: this.state.results
      })));
    }
  }]);

  return Main;
}(_react["default"].Component);

var _default = Main;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9NYWluLmpzeCJdLCJuYW1lcyI6WyJNYWluIiwicHJvcHMiLCJlIiwic3RvcmUiLCJzdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNldFN0YXRlIiwicmVzdWx0cyIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwic2VhcmNoIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJkYXRhT2JqIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RMaXN0IiwiZm9yRWFjaCIsIngiLCJwdXNoIiwiaGlnaGVzdF9iaWQiLCJsYXN0X3NhbGUiLCJtZWRpYSIsImgxIiwidXNlcm5hbWUiLCJsZW5ndGgiLCJoYW5kbGVTZWFyY2giLCJvbkNoYW5nZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR01BLEk7Ozs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLCtEQVFSLFVBQUNDLENBQUQsRUFBTztBQUNoQixVQUFNQyxLQUFLLEdBQUcsTUFBS0MsS0FBbkI7QUFDQUQsTUFBQUEsS0FBSyxDQUFDRCxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsSUFBVixDQUFMLEdBQXVCSixDQUFDLENBQUNHLE1BQUYsQ0FBU0UsS0FBaEM7O0FBQ0EsWUFBS0MsUUFBTCxDQUFjTCxLQUFkO0FBQ0QsS0Faa0I7O0FBQUEsbUVBZ0JKLFVBQUNELENBQUQsRUFBTztBQUNwQixVQUFJTyxPQUFKO0FBQ0FQLE1BQUFBLENBQUMsQ0FBQ1EsY0FBRjtBQUNBLFVBQU1DLElBQUksR0FBRyxJQUFJQyxRQUFKLEVBQWI7QUFDQUQsTUFBQUEsSUFBSSxDQUFDRSxNQUFMLENBQVks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b21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgTGlzdCBmcm9tICcuL0xpc3QuanN4JztcblxuXG5jbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoOiAnJyxcbiAgICAgIHJlc3VsdHM6IFtdXG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gdGhpcy5zdGF0ZTtcbiAgICBzdG9yZVtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoc3RvcmUpO1xuICB9XG5cblxuXG4gIGhhbmRsZVNlYXJjaCA9IChlKSA9PiB7XG4gICAgbGV0IHJlc3VsdHM7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgIGRhdGEuYXBwZW5kKCdzZWFyY2gnLCB0aGlzLnN0YXRlLnNlYXJjaCk7XG4gICAgZmV0Y2goJy9zZWFyY2gnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IGRhdGFcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGNvbnN0IGRhdGFPYmogPSB7fTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5wcm9kdWN0TGlzdClcbiAgICAgICAgZGF0YSA9IGRhdGEucHJvZHVjdExpc3RcbiAgICAgICAgZGF0YS5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goKCh7IG5hbWUsIGhpZ2hlc3RfYmlkLCBsYXN0X3NhbGUsIG1lZGlhIH0pID0+ICh7IG5hbWUsIGhpZ2hlc3RfYmlkLCBsYXN0X3NhbGUsIG1lZGlhIH0pKSh4KSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlc3VsdHM6IHJlc3VsdCB9KVxuICAgICAgfSlcbiAgfVxuXG5cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGgxO1xuICAgIGlmICh0aGlzLnByb3BzLnVzZXJuYW1lLmxlbmd0aCA8IDEpIHtcbiAgICAgIGgxID0gPGgxPldlbGNvbWUgYmFjayE8L2gxPlxuICAgIH0gZWxzZSB7XG4gICAgICBoMSA9IDxoMT5XZWxjb21lIGJhY2sge3RoaXMucHJvcHMudXNlcm5hbWV9ITwvaDE+XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICB7aDF9XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVNlYXJjaH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwic2VhcmNoXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gcGxhY2Vob2xkZXI9XCJMZXRzIGZpbmQgc29tZSBzbmVha2VycyFcIj48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWRhcmtcIj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPjwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPk5hbWU8L3RoPlxuICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5IaWdoZXN0IEJpZDwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkxhc3QgU2FsZTwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8TGlzdCByZXN1bHRzPXt0aGlzLnN0YXRlLnJlc3VsdHN9IC8+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjsiXX0=