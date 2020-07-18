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
      fetch('/login', {
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
      if (!this.state.loginComplete) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsImUiLCJzdG9yZSIsInN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2V0U3RhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInVzZXJuYW1lIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwibG9naW5Db21wbGV0ZSIsImhhbmRsZVN1Ym1pdCIsIm9uQ2hhbmdlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsRzs7Ozs7QUFDSixpQkFBYztBQUFBOztBQUFBOztBQUNaOztBQURZLCtEQVFILFVBQUNDLENBQUQsRUFBTztBQUNoQixVQUFNQyxLQUFLLEdBQUcsTUFBS0MsS0FBbkI7QUFDQUQsTUFBQUEsS0FBSyxDQUFDRCxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsSUFBVixDQUFMLEdBQXVCSixDQUFDLENBQUNHLE1BQUYsQ0FBU0UsS0FBaEM7O0FBQ0EsWUFBS0MsUUFBTCxDQUFjTCxLQUFkO0FBQ0QsS0FaYTs7QUFBQSxtRUFjQyxVQUFDRCxDQUFELEVBQU87QUFDcEJBLE1BQUFBLENBQUMsQ0FBQ08sY0FBRjtBQUNBLFVBQU1DLElBQUksR0FBRyxJQUFJQyxRQUFKLEVBQWI7QUFDQUQsTUFBQUEsSUFBSSxDQUFDRSxNQUFMLENBQVksVUFBWixFQUF3QixNQUFLUixLQUFMLENBQVdTLFFBQW5DO0FBQ0FDLE1BQUFBLEtBQUssQ0FBQyxRQUFELEVBQVc7QUFDZEMsUUFBQUEsTUFBTSxFQUFFLE1BRE07QUFFZEMsUUFBQUEsSUFBSSxFQUFFTjtBQUZRLE9BQVgsQ0FBTDs7QUFJQSxZQUFLRixRQUFMLENBQWMsVUFBQUosS0FBSztBQUFBLGVBQUs7QUFDdEJhLFVBQUFBLGFBQWEsRUFBRSxDQUFDLE1BQUtiLEtBQUwsQ0FBV2E7QUFETCxTQUFMO0FBQUEsT0FBbkI7QUFHRCxLQXpCYTs7QUFFWixVQUFLYixLQUFMLEdBQWE7QUFDWFMsTUFBQUEsUUFBUSxFQUFFLEVBREM7QUFFWEksTUFBQUEsYUFBYSxFQUFFO0FBRkosS0FBYjtBQUZZO0FBTWI7Ozs7NkJBcUJRO0FBQ1AsVUFBRyxDQUFDLEtBQUtiLEtBQUwsQ0FBV2EsYUFBZixFQUE4QjtBQUM1Qiw0QkFDRTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsd0JBQ0U7QUFBTSxVQUFBLFNBQVMsRUFBQyxPQUFoQjtBQUF3QixVQUFBLFFBQVEsRUFBRSxLQUFLQztBQUF2Qyx3QkFDRTtBQUFPLFVBQUEsT0FBTyxFQUFDO0FBQWYsb0JBREYsZUFFRTtBQUFPLFVBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsVUFBQSxJQUFJLEVBQUMsVUFBeEI7QUFBbUMsVUFBQSxLQUFLLEVBQUUsS0FBS2QsS0FBTCxDQUFXUyxRQUFyRDtBQUErRCxVQUFBLFFBQVEsRUFBRSxLQUFLTSxRQUE5RTtBQUF3RixVQUFBLFdBQVcsRUFBQztBQUFwRyxVQUZGLGVBR0U7QUFBUSxVQUFBLElBQUksRUFBQyxRQUFiO0FBQXNCLFVBQUEsU0FBUyxFQUFDO0FBQWhDLGdCQUhGLENBREYsQ0FERjtBQVNELE9BVkQsTUFVTztBQUNMLDRCQUNFLGdDQUFDLGdCQUFEO0FBQU0sVUFBQSxRQUFRLEVBQUUsS0FBS2YsS0FBTCxDQUFXUztBQUEzQixVQURGO0FBR0Q7QUFDRjs7OztFQTVDZU8sa0JBQU1DLFM7O2VBK0NUcEIsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgTWFpbiBmcm9tICcuL01haW4uanN4J1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgIGxvZ2luQ29tcGxldGU6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gdGhpcy5zdGF0ZTtcbiAgICBzdG9yZVtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoc3RvcmUpO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZGF0YS5hcHBlbmQoJ3VzZXJuYW1lJywgdGhpcy5zdGF0ZS51c2VybmFtZSlcbiAgICBmZXRjaCgnL2xvZ2luJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBkYXRhXG4gICAgfSlcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICBsb2dpbkNvbXBsZXRlOiAhdGhpcy5zdGF0ZS5sb2dpbkNvbXBsZXRlXG4gICAgfSkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmKCF0aGlzLnN0YXRlLmxvZ2luQ29tcGxldGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibG9naW5cIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPkxvZ2luOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiB2YWx1ZT17dGhpcy5zdGF0ZS51c2VybmFtZX0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZVwiPjwvaW5wdXQ+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5HTzwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxNYWluIHVzZXJuYW1lPXt0aGlzLnN0YXRlLnVzZXJuYW1lfSAvPlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19