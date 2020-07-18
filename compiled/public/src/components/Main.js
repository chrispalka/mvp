"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _List = _interopRequireDefault(require("./List.jsx"));

var _Favorites = _interopRequireDefault(require("./Favorites.jsx"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

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
        data = data.productList;
        data.forEach(function (x) {
          result.push(function (_ref) {
            var name = _ref.name,
                url = _ref.url,
                highest_bid = _ref.highest_bid,
                last_sale = _ref.last_sale,
                media = _ref.media;
            return {
              name: name,
              url: url,
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
      var data = new FormData();
      var store = _this.state.favorites;

      if (store[favorite[0]] === undefined || store[favorite[0]].status === false) {
        store[favorite[0]] = {
          status: true,
          highestBid: favorite[1],
          lastSale: favorite[2],
          url: favorite[3],
          media: favorite[4],
          username: _this.props.username
        };

        _this.setState(store);
      } else {
        store[favorite[0]].status = false;

        _this.setState(store);
      }

      data.append('name', favorite[0]);

      for (var k in store[favorite[0]]) {
        data.append(k, store[favorite[0]][k]);
      }

      fetch('/favorite', {
        method: 'POST',
        body: data
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderFavorites", function () {
      // place a get request for favorite data
      // in server conditional in favorite endpoint if GET
      // to query DB based on current user, send back data via JSON/promise
      // pass data as props down to Favorites
      // iterate over props and render into FavoritesEntry
      _this.setState(function (state) {
        return {
          favoriteView: !_this.state.favoriteView
        };
      });
    });

    _this.state = {
      search: '',
      results: [],
      favorites: {},
      favoriteView: false
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

      if (!this.state.favoriteView) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "container"
        }, h1, /*#__PURE__*/_react["default"].createElement("span", {
          className: "favorite"
        }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faStar,
          onClick: this.renderFavorites
        })), /*#__PURE__*/_react["default"].createElement("form", {
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
      } else {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "container"
        }, h1, /*#__PURE__*/_react["default"].createElement("span", {
          className: "favorite"
        }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faStar,
          onClick: this.renderFavorites
        })), /*#__PURE__*/_react["default"].createElement("form", {
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
        }, "Last Sale"))), /*#__PURE__*/_react["default"].createElement(_Favorites["default"], null)));
      }
    }
  }]);

  return Main;
}(_react["default"].Component);

var _default = Main;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9NYWluLmpzeCJdLCJuYW1lcyI6WyJNYWluIiwicHJvcHMiLCJlIiwic3RvcmUiLCJzdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNldFN0YXRlIiwicmVzdWx0cyIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwic2VhcmNoIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJkYXRhT2JqIiwicHJvZHVjdExpc3QiLCJmb3JFYWNoIiwieCIsInB1c2giLCJ1cmwiLCJoaWdoZXN0X2JpZCIsImxhc3Rfc2FsZSIsIm1lZGlhIiwiZmF2b3JpdGUiLCJmYXZvcml0ZXMiLCJ1bmRlZmluZWQiLCJzdGF0dXMiLCJoaWdoZXN0QmlkIiwibGFzdFNhbGUiLCJ1c2VybmFtZSIsImsiLCJmYXZvcml0ZVZpZXciLCJoMSIsImxlbmd0aCIsImZhU3RhciIsInJlbmRlckZhdm9yaXRlcyIsImhhbmRsZVNlYXJjaCIsIm9uQ2hhbmdlIiwiaGFuZGxlRmF2b3JpdGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdNQSxJOzs7OztBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQiwrREFVUixVQUFDQyxDQUFELEVBQU87QUFDaEIsVUFBTUMsS0FBSyxHQUFHLE1BQUtDLEtBQW5CO0FBQ0FELE1BQUFBLEtBQUssQ0FBQ0QsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLElBQVYsQ0FBTCxHQUF1QkosQ0FBQyxDQUFDRyxNQUFGLENBQVNFLEtBQWhDOztBQUNBLFlBQUtDLFFBQUwsQ0FBY0wsS0FBZDtBQUNELEtBZGtCOztBQUFB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QStCLFVBQUEsT0FBTyxFQUFFLEtBQUtDO0FBQTdDLFVBQTNCLENBRkYsZUFHRTtBQUFNLFVBQUEsUUFBUSxFQUFFLEtBQUtDO0FBQXJCLHdCQUNFO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZix3QkFDRTtBQUFPLFVBQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsVUFBQSxTQUFTLEVBQUMsY0FBN0I7QUFBNEMsVUFBQSxJQUFJLEVBQUMsUUFBakQ7QUFBMEQsVUFBQSxLQUFLLEVBQUUsS0FBS3hDLEtBQUwsQ0FBV1UsTUFBNUU7QUFBb0YsVUFBQSxRQUFRLEVBQUUsS0FBSytCLFFBQW5HO0FBQTZHLFVBQUEsV0FBVyxFQUFDO0FBQXpILFVBREYsQ0FERixDQUhGLGVBUUU7QUFBTyxVQUFBLFNBQVMsRUFBQztBQUFqQix3QkFDRSw0REFDRSx5REFDRTtBQUFJLFVBQUEsS0FBSyxFQUFDO0FBQVYsVUFERixlQUVFO0FBQUksVUFBQSxLQUFLLEVBQUM7QUFBVixVQUZGLGVBR0U7QUFBSSxVQUFBLEtBQUssRUFBQztBQUFWLGtCQUhGLGVBSUU7QUFBSSxVQUFBLEtBQUssRUFBQztBQUFWLHlCQUpGLGVBS0U7QUFBSSxVQUFBLEtBQUssRUFBQztBQUFWLHVCQUxGLENBREYsQ0FERixlQVVJLGdDQUFDLHFCQUFELE9BVkosQ0FSRixDQURGO0FBdUJEO0FBQ0Y7Ozs7RUF2SWdCRSxrQkFBTUMsUzs7ZUEwSVZoRCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdC5qc3gnO1xuaW1wb3J0IEZhdm9yaXRlcyBmcm9tICcuL0Zhdm9yaXRlcy5qc3gnXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cblxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaDogJycsXG4gICAgICByZXN1bHRzOiBbXSxcbiAgICAgIGZhdm9yaXRlczoge30sXG4gICAgICBmYXZvcml0ZVZpZXc6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gdGhpcy5zdGF0ZTtcbiAgICBzdG9yZVtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoc3RvcmUpO1xuICB9XG5cblxuICBoYW5kbGVTZWFyY2ggPSAoZSkgPT4ge1xuICAgIGxldCByZXN1bHRzO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICBkYXRhLmFwcGVuZCgnc2VhcmNoJywgdGhpcy5zdGF0ZS5zZWFyY2gpO1xuICAgIGZldGNoKCcvc2VhcmNoJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBkYXRhXG4gICAgfSlcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBjb25zdCBkYXRhT2JqID0ge307XG4gICAgICAgIGRhdGEgPSBkYXRhLnByb2R1Y3RMaXN0XG4gICAgICAgIGRhdGEuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKCgoeyBuYW1lLCB1cmwsIGhpZ2hlc3RfYmlkLCBsYXN0X3NhbGUsIG1lZGlhIH0pID0+ICh7IG5hbWUsIHVybCwgaGlnaGVzdF9iaWQsIGxhc3Rfc2FsZSwgbWVkaWEgfSkpKHgpKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVzdWx0czogcmVzdWx0IH0pXG4gICAgICB9KVxuICB9XG5cbiAgaGFuZGxlRmF2b3JpdGUgPSAoZmF2b3JpdGUpID0+IHtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgY29uc3Qgc3RvcmUgPSB0aGlzLnN0YXRlLmZhdm9yaXRlcztcbiAgICBpZiAoc3RvcmVbZmF2b3JpdGVbMF1dID09PSB1bmRlZmluZWQgfHwgc3RvcmVbZmF2b3JpdGVbMF1dLnN0YXR1cyA9PT0gZmFsc2UpIHtcbiAgICAgIHN0b3JlW2Zhdm9yaXRlWzBdXSA9IHtcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICBoaWdoZXN0QmlkOiBmYXZvcml0ZVsxXSxcbiAgICAgICAgbGFzdFNhbGU6IGZhdm9yaXRlWzJdLFxuICAgICAgICB1cmw6IGZhdm9yaXRlWzNdLFxuICAgICAgICBtZWRpYTogZmF2b3JpdGVbNF0sXG4gICAgICAgIHVzZXJuYW1lOiB0aGlzLnByb3BzLnVzZXJuYW1lXG4gICAgICB9O1xuICAgICAgdGhpcy5zZXRTdGF0ZShzdG9yZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0b3JlW2Zhdm9yaXRlWzBdXS5zdGF0dXMgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoc3RvcmUpO1xuICAgIH1cbiAgICBkYXRhLmFwcGVuZCgnbmFtZScsIGZhdm9yaXRlWzBdKVxuICAgIGZvciAodmFyIGsgaW4gc3RvcmVbZmF2b3JpdGVbMF1dKSB7XG4gICAgICBkYXRhLmFwcGVuZChrLCBzdG9yZVtmYXZvcml0ZVswXV1ba10pXG4gICAgfVxuICAgIGZldGNoKCcvZmF2b3JpdGUnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IGRhdGFcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyRmF2b3JpdGVzID0gKCkgPT4ge1xuXG4gICAgLy8gcGxhY2UgYSBnZXQgcmVxdWVzdCBmb3IgZmF2b3JpdGUgZGF0YVxuICAgIC8vIGluIHNlcnZlciBjb25kaXRpb25hbCBpbiBmYXZvcml0ZSBlbmRwb2ludCBpZiBHRVRcbiAgICAgICAgLy8gdG8gcXVlcnkgREIgYmFzZWQgb24gY3VycmVudCB1c2VyLCBzZW5kIGJhY2sgZGF0YSB2aWEgSlNPTi9wcm9taXNlXG4gICAgICAgIC8vIHBhc3MgZGF0YSBhcyBwcm9wcyBkb3duIHRvIEZhdm9yaXRlc1xuICAgICAgICAgLy8gaXRlcmF0ZSBvdmVyIHByb3BzIGFuZCByZW5kZXIgaW50byBGYXZvcml0ZXNFbnRyeVxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgIGZhdm9yaXRlVmlldzogIXRoaXMuc3RhdGUuZmF2b3JpdGVWaWV3XG4gICAgfSkpO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGgxO1xuICAgIGlmICh0aGlzLnByb3BzLnVzZXJuYW1lLmxlbmd0aCA8IDEpIHtcbiAgICAgIGgxID0gPGgxPldlbGNvbWUgYmFjayE8L2gxPlxuICAgIH0gZWxzZSB7XG4gICAgICBoMSA9IDxoMT5XZWxjb21lIGJhY2sge3RoaXMucHJvcHMudXNlcm5hbWV9ITwvaDE+XG4gICAgfVxuICAgIGlmICghdGhpcy5zdGF0ZS5mYXZvcml0ZVZpZXcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAge2gxfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhdm9yaXRlXCI+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVN0YXJ9IG9uQ2xpY2s9e3RoaXMucmVuZGVyRmF2b3JpdGVzfSAvPjwvc3Bhbj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTZWFyY2h9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJzZWFyY2hcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIkxldHMgZmluZCBzb21lIHNuZWFrZXJzIVwiPjwvaW5wdXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtZGFya1wiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkhpZ2hlc3QgQmlkPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5MYXN0IFNhbGU8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgPExpc3QgcmVzdWx0cz17dGhpcy5zdGF0ZS5yZXN1bHRzfSBmYXZvcml0ZUNsaWNrZWQ9e3RoaXMuc3RhdGUuZmF2b3JpdGVzfSBmYXZvcml0ZXM9e3RoaXMuaGFuZGxlRmF2b3JpdGV9IC8+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAge2gxfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhdm9yaXRlXCI+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVN0YXJ9IG9uQ2xpY2s9e3RoaXMucmVuZGVyRmF2b3JpdGVzfSAvPjwvc3Bhbj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTZWFyY2h9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJzZWFyY2hcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIkxldHMgZmluZCBzb21lIHNuZWFrZXJzIVwiPjwvaW5wdXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtZGFya1wiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkhpZ2hlc3QgQmlkPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5MYXN0IFNhbGU8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgPEZhdm9yaXRlcyAvPlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluOyJdfQ==