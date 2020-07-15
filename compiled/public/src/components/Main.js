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
      e.preventDefault();
      var data = new FormData();
      data.append('search', _this.state.search);
      fetch('/search', {
        method: 'POST',
        body: data
      });
    });

    _this.state = {
      search: ''
    };
    return _this;
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      // console.log('props! ', this.props)
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
      }, "Size"), /*#__PURE__*/_react["default"].createElement("th", {
        scope: "col"
      }, "Highest Bid"))), /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement(_List["default"], null))));
    }
  }]);

  return Main;
}(_react["default"].Component);

var _default = Main;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9NYWluLmpzeCJdLCJuYW1lcyI6WyJNYWluIiwicHJvcHMiLCJlIiwic3RvcmUiLCJzdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNldFN0YXRlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJzZWFyY2giLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJoMSIsInVzZXJuYW1lIiwibGVuZ3RoIiwiaGFuZGxlU2VhcmNoIiwib25DaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdNQSxJOzs7OztBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQiwrREFPUixVQUFDQyxDQUFELEVBQU87QUFDaEIsVUFBTUMsS0FBSyxHQUFHLE1BQUtDLEtBQW5CO0FBQ0FELE1BQUFBLEtBQUssQ0FBQ0QsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLElBQVYsQ0FBTCxHQUF1QkosQ0FBQyxDQUFDRyxNQUFGLENBQVNFLEtBQWhDOztBQUNBLFlBQUtDLFFBQUwsQ0FBY0wsS0FBZDtBQUNELEtBWGtCOztBQUFBLG1FQWFKLFVBQUNELENBQUQsRUFBTztBQUNwQkEsTUFBQUEsQ0FBQyxDQUFDTyxjQUFGO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLElBQUlDLFFBQUosRUFBYjtBQUNBRCxNQUFBQSxJQUFJLENBQUNFLE1BQUwsQ0FBWSxRQUFaLEVBQXNCLE1BQUtSLEtBQUwsQ0FBV1MsTUFBakM7QUFDQUMsTUFBQUEsS0FBSyxDQUFDLFNBQUQsRUFBWTtBQUNmQyxRQUFBQSxNQUFNLEVBQUUsTUFETztBQUVmQyxRQUFBQSxJQUFJLEVBQUVOO0FBRlMsT0FBWixDQUFMO0FBSUQsS0FyQmtCOztBQUVqQixVQUFLTixLQUFMLEdBQWE7QUFDWFMsTUFBQUEsTUFBTSxFQUFFO0FBREcsS0FBYjtBQUZpQjtBQUtsQjs7Ozs2QkFvQlE7QUFDUDtBQUNBLFVBQUlJLEVBQUo7O0FBQ0EsVUFBSSxLQUFLaEIsS0FBTCxDQUFXaUIsUUFBWCxDQUFvQkMsTUFBcEIsR0FBNkIsQ0FBakMsRUFBb0M7QUFDbENGLFFBQUFBLEVBQUUsZ0JBQUcsNERBQUw7QUFDRCxPQUZELE1BRU87QUFDTEEsUUFBQUEsRUFBRSxnQkFBRyw2REFBa0IsS0FBS2hCLEtBQUwsQ0FBV2lCLFFBQTdCLE1BQUw7QUFDRDs7QUFDRCwwQkFDRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDR0QsRUFESCxlQUVFO0FBQU0sUUFBQSxRQUFRLEVBQUUsS0FBS0c7QUFBckIsc0JBQ0U7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLHNCQUNFO0FBQU8sUUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFBLFNBQVMsRUFBQyxjQUE3QjtBQUE0QyxRQUFBLElBQUksRUFBQyxRQUFqRDtBQUEwRCxRQUFBLEtBQUssRUFBRSxLQUFLaEIsS0FBTCxDQUFXUyxNQUE1RTtBQUFvRixRQUFBLFFBQVEsRUFBRSxLQUFLUSxRQUFuRztBQUE0RyxRQUFBLFdBQVcsRUFBQztBQUF4SCxRQURGLENBREYsQ0FGRixlQU9JO0FBQU8sUUFBQSxTQUFTLEVBQUM7QUFBakIsc0JBQ0UsNERBQ0UseURBQ0U7QUFBSSxRQUFBLEtBQUssRUFBQztBQUFWLFFBREYsZUFFRTtBQUFJLFFBQUEsS0FBSyxFQUFDO0FBQVYsZ0JBRkYsZUFHRTtBQUFJLFFBQUEsS0FBSyxFQUFDO0FBQVYsZ0JBSEYsZUFJRTtBQUFJLFFBQUEsS0FBSyxFQUFDO0FBQVYsdUJBSkYsQ0FERixDQURGLGVBU0UsNERBQ0UsZ0NBQUMsZ0JBQUQsT0FERixDQVRGLENBUEosQ0FERjtBQXVCRDs7OztFQXpEZ0JDLGtCQUFNQyxTOztlQTREVnZCLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0LmpzeCc7XG5cblxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaDogJydcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSB0aGlzLnN0YXRlO1xuICAgIHN0b3JlW2UudGFyZ2V0Lm5hbWVdID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZShzdG9yZSk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2ggPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICBkYXRhLmFwcGVuZCgnc2VhcmNoJywgdGhpcy5zdGF0ZS5zZWFyY2gpO1xuICAgIGZldGNoKCcvc2VhcmNoJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBkYXRhXG4gICAgfSlcbiAgfVxuXG5cblxuICByZW5kZXIoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3Byb3BzISAnLCB0aGlzLnByb3BzKVxuICAgIGxldCBoMTtcbiAgICBpZiAodGhpcy5wcm9wcy51c2VybmFtZS5sZW5ndGggPCAxKSB7XG4gICAgICBoMSA9IDxoMT5XZWxjb21lIGJhY2shPC9oMT5cbiAgICB9IGVsc2Uge1xuICAgICAgaDEgPSA8aDE+V2VsY29tZSBiYWNrIHt0aGlzLnByb3BzLnVzZXJuYW1lfSE8L2gxPlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAge2gxfVxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTZWFyY2h9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInNlYXJjaFwiIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9cGxhY2Vob2xkZXI9XCJMZXRzIGZpbmQgc29tZSBzbmVha2VycyFcIj48L2lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtZGFya1wiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TaXplPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5IaWdoZXN0IEJpZDwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICA8TGlzdCAvPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47Il19