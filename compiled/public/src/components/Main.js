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

    _defineProperty(_assertThisInitialized(_this), "handleFavorite", function (favorite) {
      console.log('key! ', favorite);
      console.log('Hi from favorites!');
      var store = _this.state.favorites;

      if (store[favorite] === undefined || store[favorite] === false) {
        store[favorite] = true;

        _this.setState(store);
      } else {
        store[favorite] = false;

        _this.setState(store);
      } // this.setState(state => ( {
      //   favorites: {favorite: true}
      // }))

    });

    _this.state = {
      search: '',
      results: [],
      favorites: {}
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
        favoriteClicked: this.state.favorites,
        favorites: this.handleFavorite
      })));
    }
  }]);

  return Main;
}(_react["default"].Component);

var _default = Main;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9NYWluLmpzeCJdLCJuYW1lcyI6WyJNYWluIiwicHJvcHMiLCJlIiwic3RvcmUiLCJzdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNldFN0YXRlIiwicmVzdWx0cyIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwic2VhcmNoIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJkYXRhT2JqIiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RMaXN0IiwiZm9yRWFjaCIsIngiLCJwdXNoIiwiaGlnaGVzdF9iaWQiLCJsYXN0X3NhbGUiLCJtZWRpYSIsImZhdm9yaXRlIiwiZmF2b3JpdGVzIiwidW5kZWZpbmVkIiwiaDEiLCJ1c2VybmFtZSIsImxlbmd0aCIsImhhbmRsZVNlYXJjaCIsIm9uQ2hhbmdlIiwiaGFuZGxlRmF2b3JpdGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdNQSxJOzs7OztBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQiwrREFXUixVQUFDQyxDQUFELEVBQU87QUFDaEIsVUFBTUMsS0FBSyxHQUFHLE1BQUtDLEtBQW5CO0FBQ0FELE1BQUFBLEtBQUssQ0FBQ0QsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLElBQVYsQ0FBTCxHQUF1QkosQ0FBQyxDQUFDRyxNQUFGLENBQVNFLEtBQWhDOztBQUNBLFlBQUtDLFFBQUwsQ0FBY0wsS0FBZDtBQUNELEtBZmtCOztBQUFBLG1FQW1CSixVQUFDRCxDQUFELEVBQU87QUFDcEIsVUFBSU8sT0FBSjtBQUNBUCxNQUFBQSxDQUFDLENBQUNRLGNBQUY7QUFDQSxVQUFNQyxJQUFJLEdB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QUFPLFFBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsUUFBQSxTQUFTLEVBQUMsY0FBN0I7QUFBNEMsUUFBQSxJQUFJLEVBQUMsUUFBakQ7QUFBMEQsUUFBQSxLQUFLLEVBQUUsS0FBS2xDLEtBQUwsQ0FBV1UsTUFBNUU7QUFBb0YsUUFBQSxRQUFRLEVBQUUsS0FBS3lCLFFBQW5HO0FBQTZHLFFBQUEsV0FBVyxFQUFDO0FBQXpILFFBREYsQ0FERixDQUZGLGVBT0U7QUFBTyxRQUFBLFNBQVMsRUFBQztBQUFqQixzQkFDRSw0REFDRSx5REFDRTtBQUFJLFFBQUEsS0FBSyxFQUFDO0FBQVYsUUFERixlQUVFO0FBQUksUUFBQSxLQUFLLEVBQUM7QUFBVixRQUZGLGVBR0U7QUFBSSxRQUFBLEtBQUssRUFBQztBQUFWLGdCQUhGLGVBSUU7QUFBSSxRQUFBLEtBQUssRUFBQztBQUFWLHVCQUpGLGVBS0U7QUFBSSxRQUFBLEtBQUssRUFBQztBQUFWLHFCQUxGLENBREYsQ0FERixlQVVJLGdDQUFDLGdCQUFEO0FBQU0sUUFBQSxPQUFPLEVBQUUsS0FBS25DLEtBQUwsQ0FBV0ssT0FBMUI7QUFBbUMsUUFBQSxlQUFlLEVBQUUsS0FBS0wsS0FBTCxDQUFXNkIsU0FBL0Q7QUFBMEUsUUFBQSxTQUFTLEVBQUUsS0FBS087QUFBMUYsUUFWSixDQVBGLENBREY7QUFzQkQ7Ozs7RUF4RmdCQyxrQkFBTUMsUzs7ZUEyRlYxQyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdC5qc3gnO1xuXG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2g6ICcnLFxuICAgICAgcmVzdWx0czogW10sXG4gICAgICBmYXZvcml0ZXM6IHtcblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBzdG9yZSA9IHRoaXMuc3RhdGU7XG4gICAgc3RvcmVbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHN0b3JlKTtcbiAgfVxuXG5cblxuICBoYW5kbGVTZWFyY2ggPSAoZSkgPT4ge1xuICAgIGxldCByZXN1bHRzO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICBkYXRhLmFwcGVuZCgnc2VhcmNoJywgdGhpcy5zdGF0ZS5zZWFyY2gpO1xuICAgIGZldGNoKCcvc2VhcmNoJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBkYXRhXG4gICAgfSlcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBjb25zdCBkYXRhT2JqID0ge307XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEucHJvZHVjdExpc3QpXG4gICAgICAgIGRhdGEgPSBkYXRhLnByb2R1Y3RMaXN0XG4gICAgICAgIGRhdGEuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKCgoeyBuYW1lLCBoaWdoZXN0X2JpZCwgbGFzdF9zYWxlLCBtZWRpYSB9KSA9PiAoeyBuYW1lLCBoaWdoZXN0X2JpZCwgbGFzdF9zYWxlLCBtZWRpYSB9KSkoeCkpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXN1bHRzOiByZXN1bHQgfSlcbiAgICAgIH0pXG4gIH1cblxuICBoYW5kbGVGYXZvcml0ZSA9IChmYXZvcml0ZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdrZXkhICcsIGZhdm9yaXRlKVxuICAgIGNvbnNvbGUubG9nKCdIaSBmcm9tIGZhdm9yaXRlcyEnKVxuICAgIGNvbnN0IHN0b3JlID0gdGhpcy5zdGF0ZS5mYXZvcml0ZXM7XG4gICAgaWYgKHN0b3JlW2Zhdm9yaXRlXSA9PT0gdW5kZWZpbmVkIHx8IHN0b3JlW2Zhdm9yaXRlXSA9PT0gZmFsc2UpIHtcbiAgICAgIHN0b3JlW2Zhdm9yaXRlXSA9IHRydWU7XG4gICAgICB0aGlzLnNldFN0YXRlKHN0b3JlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RvcmVbZmF2b3JpdGVdID0gZmFsc2U7XG4gICAgICB0aGlzLnNldFN0YXRlKHN0b3JlKVxuICAgIH1cbiAgICAvLyB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICgge1xuICAgIC8vICAgZmF2b3JpdGVzOiB7ZmF2b3JpdGU6IHRydWV9XG4gICAgLy8gfSkpXG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgaDE7XG4gICAgaWYgKHRoaXMucHJvcHMudXNlcm5hbWUubGVuZ3RoIDwgMSkge1xuICAgICAgaDEgPSA8aDE+V2VsY29tZSBiYWNrITwvaDE+XG4gICAgfSBlbHNlIHtcbiAgICAgIGgxID0gPGgxPldlbGNvbWUgYmFjayB7dGhpcy5wcm9wcy51c2VybmFtZX0hPC9oMT5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIHtoMX1cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU2VhcmNofT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJzZWFyY2hcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIkxldHMgZmluZCBzb21lIHNuZWFrZXJzIVwiPjwvaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtZGFya1wiPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+PC90aD5cbiAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+PC90aD5cbiAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TmFtZTwvdGg+XG4gICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkhpZ2hlc3QgQmlkPC90aD5cbiAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TGFzdCBTYWxlPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDxMaXN0IHJlc3VsdHM9e3RoaXMuc3RhdGUucmVzdWx0c30gZmF2b3JpdGVDbGlja2VkPXt0aGlzLnN0YXRlLmZhdm9yaXRlc30gZmF2b3JpdGVzPXt0aGlzLmhhbmRsZUZhdm9yaXRlfSAvPlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47Il19