"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Main = _interopRequireDefault(require("./Main.jsx"));

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

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      var store = _this.state;
      store[e.target.name] = e.target.value;

      _this.setState(store);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();
      var data = new FormData();
      data.append('username', _this.state.username);
      fetch('/submit', {
        method: 'POST',
        body: data
      });

      _this.setState(function (state) {
        return {
          loginComplete: !_this.state.loginComplete
        };
      });
    });

    _this.state = {
      username: '',
      loginComplete: false
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      if (this.state.loginComplete) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "container"
        }, /*#__PURE__*/_react["default"].createElement("form", {
          className: "login",
          onSubmit: this.handleSubmit
        }, /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: "username"
        }, "Login:"), /*#__PURE__*/_react["default"].createElement("input", {
          type: "text",
          name: "username",
          value: this.state.username,
          onChange: this.onChange,
          placeholder: "Enter name"
        }), /*#__PURE__*/_react["default"].createElement("button", {
          type: "submit",
          className: "btn btn-primary"
        }, "GO")));
      } else {
        return /*#__PURE__*/_react["default"].createElement(_Main["default"], {
          username: this.state.username
        });
      }
    }
  }]);

  return App;
}(_react["default"].Component);

var _default = App;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsImUiLCJzdG9yZSIsInN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2V0U3RhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInVzZXJuYW1lIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwibG9naW5Db21wbGV0ZSIsImhhbmRsZVN1Ym1pdCIsIm9uQ2hhbmdlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsRzs7Ozs7QUFDSixpQkFBYztBQUFBOztBQUFBOztBQUNaOztBQURZLCtEQVFILFVBQUNDLENBQUQsRUFBTztBQUNoQixVQUFNQyxLQUFLLEdBQUcsTUFBS0MsS0FBbkI7QUFDQUQsTUFBQUEsS0FBSyxDQUFDRCxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsSUFBVixDQUFMLEdBQXVCSixDQUFDLENBQUNHLE1BQUYsQ0FBU0UsS0FBaEM7O0FBQ0EsWUFBS0MsUUFBTCxDQUFjTCxLQUFkO0FBQ0QsS0FaYTs7QUFBQSxtRUFjQyxVQUFDRCxDQUFELEVBQU87QUFDcEJBLE1BQUFBLENBQUMsQ0FBQ08sY0FBRjtBQUNBLFVBQU1DLElBQUksR0FBRyxJQUFJQyxRQUFKLEVBQWI7QUFDQUQsTUFBQUEsSUFBSSxDQUFDRSxNQUFMLENBQVksVUFBWixFQUF3QixNQUFLUixLQUFMLENBQVdTLFFBQW5DO0FBQ0FDLE1BQUFBLEtBQUssQ0FBQyxTQUFELEVBQVk7QUFDZkMsUUFBQUEsTUFBTSxFQUFFLE1BRE87QUFFZkMsUUFBQUEsSUFBSSxFQUFFTjtBQUZTLE9BQVosQ0FBTDs7QUFJQSxZQUFLRixRQUFMLENBQWMsVUFBQUosS0FBSztBQUFBLGVBQUs7QUFDdEJhLFVBQUFBLGFBQWEsRUFBRSxDQUFDLE1BQUtiLEtBQUwsQ0FBV2E7QUFETCxTQUFMO0FBQUEsT0FBbkI7QUFHRCxLQXpCYTs7QUFFWixVQUFLYixLQUFMLEdBQWE7QUFDWFMsTUFBQUEsUUFBUSxFQUFFLEVBREM7QUFFWEksTUFBQUEsYUFBYSxFQUFFO0FBRkosS0FBYjtBQUZZO0FBTWI7Ozs7NkJBcUJRO0FBQ1AsVUFBRyxLQUFLYixLQUFMLENBQVdhLGFBQWQsRUFBNkI7QUFDM0IsNEJBQ0U7QUFBSyxVQUFBLFNBQVMsRUFBQztBQUFmLHdCQUNFO0FBQU0sVUFBQSxTQUFTLEVBQUMsT0FBaEI7QUFBd0IsVUFBQSxRQUFRLEVBQUUsS0FBS0M7QUFBdkMsd0JBQ0U7QUFBTyxVQUFBLE9BQU8sRUFBQztBQUFmLG9CQURGLGVBRUU7QUFBTyxVQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLFVBQUEsSUFBSSxFQUFDLFVBQXhCO0FBQW1DLFVBQUEsS0FBSyxFQUFFLEtBQUtkLEtBQUwsQ0FBV1MsUUFBckQ7QUFBK0QsVUFBQSxRQUFRLEVBQUUsS0FBS00sUUFBOUU7QUFBd0YsVUFBQSxXQUFXLEVBQUM7QUFBcEcsVUFGRixlQUdFO0FBQVEsVUFBQSxJQUFJLEVBQUMsUUFBYjtBQUFzQixVQUFBLFNBQVMsRUFBQztBQUFoQyxnQkFIRixDQURGLENBREY7QUFTRCxPQVZELE1BVU87QUFDTCw0QkFDRSxnQ0FBQyxnQkFBRDtBQUFNLFVBQUEsUUFBUSxFQUFFLEtBQUtmLEtBQUwsQ0FBV1M7QUFBM0IsVUFERjtBQUdEO0FBQ0Y7Ozs7RUE1Q2VPLGtCQUFNQyxTOztlQStDVHBCLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9NYWluLmpzeCdcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VybmFtZTogJycsXG4gICAgICBsb2dpbkNvbXBsZXRlOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBzdG9yZSA9IHRoaXMuc3RhdGU7XG4gICAgc3RvcmVbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHN0b3JlKTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGRhdGEuYXBwZW5kKCd1c2VybmFtZScsIHRoaXMuc3RhdGUudXNlcm5hbWUpXG4gICAgZmV0Y2goJy9zdWJtaXQnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IGRhdGFcbiAgICB9KVxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgIGxvZ2luQ29tcGxldGU6ICF0aGlzLnN0YXRlLmxvZ2luQ29tcGxldGVcbiAgICB9KSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYodGhpcy5zdGF0ZS5sb2dpbkNvbXBsZXRlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImxvZ2luXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Mb2dpbjo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIkVudGVyIG5hbWVcIj48L2lucHV0PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+R088L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TWFpbiB1c2VybmFtZT17dGhpcy5zdGF0ZS51c2VybmFtZX0gLz5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ==