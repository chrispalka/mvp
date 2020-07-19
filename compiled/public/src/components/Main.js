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
          searchResults: result
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFavorite", function (favorite) {
      var sneakerName = favorite[0];
      var highestBid = favorite[1];
      var lastSale = favorite[2];
      var url = favorite[3];
      var image = favorite[4];
      console.log('url from handleFavorite: ', url);
      console.log('image from handleFavorite: ', image);
      var data = new FormData();
      var favoriteStore = _this.state.favoriteResults;
      var savedFavorites = _this.state.savedFavorites;

      if (favoriteStore[sneakerName] === undefined || favoriteStore[sneakerName].status === false) {
        console.log('Shoe does not exist in favoriteStore.. Settings status true');
        favoriteStore[sneakerName] = {
          status: true,
          highestBid: highestBid,
          lastSale: lastSale,
          url: url,
          media: image,
          username: _this.props.username
        };
        savedFavorites[sneakerName] = true;

        _this.setState(favoriteStore);

        _this.setState(savedFavorites);
      } else {
        console.log('Shoe exists in favoriteStore.. Settings status false');
        favoriteStore[sneakerName].status = false;
        favoriteStore[sneakerName].username = _this.props.username;
        savedFavorites[sneakerName] = false;

        _this.setState(favoriteStore);

        _this.setState(savedFavorites);
      }

      data.append('name', sneakerName);

      for (var k in favoriteStore[sneakerName]) {
        data.append(k, favoriteStore[sneakerName][k]);
      }

      fetch('/favorite', {
        method: 'POST',
        body: data
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderFavorites", function () {
      var favoriteStore = _this.state.favoriteResults;
      var savedFavorites = _this.state.savedFavorites;
      var data = new FormData();
      var results = [];
      var dataObj = {};
      data.append('name', _this.props.username);
      fetch('/renderfavorite', {
        method: 'POST',
        body: data
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        for (var i = 0; i < data.result.length; i++) {
          var currentItem = data.result[i];
          favoriteStore[currentItem.name] = {
            status: true,
            highestBid: currentItem.highestbid,
            lastSale: currentItem.lastsale,
            url: currentItem.url,
            media: currentItem.media
          };
          savedFavorites[currentItem.name] = true;
        }

        _this.setState(savedFavorites);

        _this.setState(favoriteStore);
      }); // possibly add condition to render state if results < 1 ?? ** FOR IF NO FAVORITES SHOW "ADD FAVORITES??""

      _this.setState(function (state) {
        return {
          favoriteView: !_this.state.favoriteView
        };
      });
    });

    _this.state = {
      search: '',
      searchResults: [],
      favoriteResults: {},
      savedFavorites: {},
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
          searchResults: this.state.searchResults,
          favoriteResults: this.state.favoriteResults,
          handleFavorite: this.handleFavorite
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
        }, "Last Sale"))), /*#__PURE__*/_react["default"].createElement(_Favorites["default"], {
          favoriteResults: this.state.favoriteResults,
          savedFavorites: this.state.savedFavorites,
          handleFavorite: this.handleFavorite
        })));
      }
    }
  }]);

  return Main;
}(_react["default"].Component);

var _default = Main;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9NYWluLmpzeCJdLCJuYW1lcyI6WyJNYWluIiwicHJvcHMiLCJlIiwic3RvcmUiLCJzdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNldFN0YXRlIiwicmVzdWx0cyIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwic2VhcmNoIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJwcm9kdWN0TGlzdCIsImZvckVhY2giLCJ4IiwicHVzaCIsInVybCIsImhpZ2hlc3RfYmlkIiwibGFzdF9zYWxlIiwibWVkaWEiLCJzZWFyY2hSZXN1bHRzIiwiZmF2b3JpdGUiLCJzbmVha2VyTmFtZSIsImhpZ2hlc3RCaWQiLCJsYXN0U2FsZSIsImltYWdlIiwiY29uc29sZSIsImxvZyIsImZhdm9yaXRlU3RvcmUiLCJmYXZvcml0ZVJlc3VsdHMiLCJzYXZlZEZhdm9yaXRlcyIsInVuZGVmaW5lZCIsInN0YXR1cyIsInVzZXJuYW1lIiwiayIsImRhdGFPYmoiLCJpIiwibGVuZ3RoIiwiY3VycmVudEl0ZW0iLCJoaWdoZXN0YmlkIiwibGFzdHNhbGUiLCJmYXZvcml0ZVZpZXciLCJoMSIsImZhU3RhciIsInJlbmRlckZhdm9yaXRlcyIsImhhbmRsZVNlYXJjaCIsIm9uQ2hhbmdlIiwiaGFuZGxlRmF2b3JpdGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdNQSxJOzs7OztBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQiwrREFXUixVQUFDQyxDQUFELEVBQU87QUFDaEIsVUFBTUMsS0FBSyxHQUFHLE1BQUtDLEtBQW5C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LGNBQTdCO0FBQTRDLFVBQUEsSUFBSSxFQUFDLFFBQWpEO0FBQTBELFVBQUEsS0FBSyxFQUFFLEtBQUtuRCxLQUFMLENBQVdVLE1BQTVFO0FBQW9GLFVBQUEsUUFBUSxFQUFFLEtBQUswQyxRQUFuRztBQUE2RyxVQUFBLFdBQVcsRUFBQztBQUF6SCxVQURGLENBREYsQ0FIRixlQVFFO0FBQU8sVUFBQSxTQUFTLEVBQUM7QUFBakIsd0JBQ0UsNERBQ0UseURBQ0U7QUFBSSxVQUFBLEtBQUssRUFBQztBQUFWLFVBREYsZUFFRTtBQUFJLFVBQUEsS0FBSyxFQUFDO0FBQVYsVUFGRixlQUdFO0FBQUksVUFBQSxLQUFLLEVBQUM7QUFBVixrQkFIRixlQUlFO0FBQUksVUFBQSxLQUFLLEVBQUM7QUFBVix5QkFKRixlQUtFO0FBQUksVUFBQSxLQUFLLEVBQUM7QUFBVix1QkFMRixDQURGLENBREYsZUFVSSxnQ0FBQyxxQkFBRDtBQUFXLFVBQUEsZUFBZSxFQUFFLEtBQUtwRCxLQUFMLENBQVdtQyxlQUF2QztBQUF3RCxVQUFBLGNBQWMsRUFBRSxLQUFLbkMsS0FBTCxDQUFXb0MsY0FBbkY7QUFBbUcsVUFBQSxjQUFjLEVBQUUsS0FBS2lCO0FBQXhILFVBVkosQ0FSRixDQURGO0FBdUJEO0FBQ0Y7Ozs7RUEzS2dCQyxrQkFBTUMsUzs7ZUE4S1YzRCxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBMaXN0IGZyb20gJy4vTGlzdC5qc3gnO1xuaW1wb3J0IEZhdm9yaXRlcyBmcm9tICcuL0Zhdm9yaXRlcy5qc3gnXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYVN0YXIgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cblxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaDogJycsXG4gICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICAgIGZhdm9yaXRlUmVzdWx0czoge30sXG4gICAgICBzYXZlZEZhdm9yaXRlczoge30sXG4gICAgICBmYXZvcml0ZVZpZXc6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gdGhpcy5zdGF0ZTtcbiAgICBzdG9yZVtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoc3RvcmUpO1xuICB9XG5cblxuICBoYW5kbGVTZWFyY2ggPSAoZSkgPT4ge1xuICAgIGxldCByZXN1bHRzO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICBkYXRhLmFwcGVuZCgnc2VhcmNoJywgdGhpcy5zdGF0ZS5zZWFyY2gpO1xuICAgIGZldGNoKCcvc2VhcmNoJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBkYXRhXG4gICAgfSlcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBkYXRhID0gZGF0YS5wcm9kdWN0TGlzdFxuICAgICAgICBkYXRhLmZvckVhY2goKHgpID0+IHtcbiAgICAgICAgICByZXN1bHQucHVzaCgoKHsgbmFtZSwgdXJsLCBoaWdoZXN0X2JpZCwgbGFzdF9zYWxlLCBtZWRpYSB9KSA9PiAoeyBuYW1lLCB1cmwsIGhpZ2hlc3RfYmlkLCBsYXN0X3NhbGUsIG1lZGlhIH0pKSh4KSlcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFJlc3VsdHM6IHJlc3VsdCB9KVxuICAgICAgfSlcbiAgfVxuXG4gIGhhbmRsZUZhdm9yaXRlID0gKGZhdm9yaXRlKSA9PiB7XG4gICAgY29uc3Qgc25lYWtlck5hbWUgPSBmYXZvcml0ZVswXTtcbiAgICBjb25zdCBoaWdoZXN0QmlkID0gZmF2b3JpdGVbMV07XG4gICAgY29uc3QgbGFzdFNhbGUgPSBmYXZvcml0ZVsyXTtcbiAgICBjb25zdCB1cmwgPSBmYXZvcml0ZVszXTtcbiAgICBjb25zdCBpbWFnZSA9IGZhdm9yaXRlWzRdO1xuICAgIGNvbnNvbGUubG9nKCd1cmwgZnJvbSBoYW5kbGVGYXZvcml0ZTogJywgdXJsKVxuICAgIGNvbnNvbGUubG9nKCdpbWFnZSBmcm9tIGhhbmRsZUZhdm9yaXRlOiAnLCBpbWFnZSlcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgY29uc3QgZmF2b3JpdGVTdG9yZSA9IHRoaXMuc3RhdGUuZmF2b3JpdGVSZXN1bHRzO1xuICAgIGNvbnN0IHNhdmVkRmF2b3JpdGVzID0gdGhpcy5zdGF0ZS5zYXZlZEZhdm9yaXRlc1xuICAgIGlmIChmYXZvcml0ZVN0b3JlW3NuZWFrZXJOYW1lXSA9PT0gdW5kZWZpbmVkIHx8IGZhdm9yaXRlU3RvcmVbc25lYWtlck5hbWVdLnN0YXR1cyA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTaG9lIGRvZXMgbm90IGV4aXN0IGluIGZhdm9yaXRlU3RvcmUuLiBTZXR0aW5ncyBzdGF0dXMgdHJ1ZScpXG4gICAgICBmYXZvcml0ZVN0b3JlW3NuZWFrZXJOYW1lXSA9IHtcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICBoaWdoZXN0QmlkOiBoaWdoZXN0QmlkLFxuICAgICAgICBsYXN0U2FsZTogbGFzdFNhbGUsXG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBtZWRpYTogaW1hZ2UsXG4gICAgICAgIHVzZXJuYW1lOiB0aGlzLnByb3BzLnVzZXJuYW1lXG4gICAgICB9O1xuICAgICAgc2F2ZWRGYXZvcml0ZXNbc25lYWtlck5hbWVdID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoZmF2b3JpdGVTdG9yZSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHNhdmVkRmF2b3JpdGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ1Nob2UgZXhpc3RzIGluIGZhdm9yaXRlU3RvcmUuLiBTZXR0aW5ncyBzdGF0dXMgZmFsc2UnKVxuICAgICAgZmF2b3JpdGVTdG9yZVtzbmVha2VyTmFtZV0uc3RhdHVzID0gZmFsc2U7XG4gICAgICBmYXZvcml0ZVN0b3JlW3NuZWFrZXJOYW1lXS51c2VybmFtZSA9IHRoaXMucHJvcHMudXNlcm5hbWU7XG4gICAgICBzYXZlZEZhdm9yaXRlc1tzbmVha2VyTmFtZV0gPSBmYWxzZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoZmF2b3JpdGVTdG9yZSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHNhdmVkRmF2b3JpdGVzKTtcbiAgICB9XG4gICAgZGF0YS5hcHBlbmQoJ25hbWUnLCBzbmVha2VyTmFtZSlcbiAgICBmb3IgKHZhciBrIGluIGZhdm9yaXRlU3RvcmVbc25lYWtlck5hbWVdKSB7XG4gICAgICBkYXRhLmFwcGVuZChrLCBmYXZvcml0ZVN0b3JlW3NuZWFrZXJOYW1lXVtrXSlcbiAgICB9XG4gICAgZmV0Y2goJy9mYXZvcml0ZScsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogZGF0YVxuICAgIH0pXG4gIH1cblxuICByZW5kZXJGYXZvcml0ZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgZmF2b3JpdGVTdG9yZSA9IHRoaXMuc3RhdGUuZmF2b3JpdGVSZXN1bHRzO1xuICAgIGNvbnN0IHNhdmVkRmF2b3JpdGVzID0gdGhpcy5zdGF0ZS5zYXZlZEZhdm9yaXRlcztcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIGNvbnN0IGRhdGFPYmogPSB7fVxuICAgIGRhdGEuYXBwZW5kKCduYW1lJywgdGhpcy5wcm9wcy51c2VybmFtZSk7XG4gICAgZmV0Y2goJy9yZW5kZXJmYXZvcml0ZScsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogZGF0YVxuICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEucmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGN1cnJlbnRJdGVtID0gZGF0YS5yZXN1bHRbaV1cbiAgICAgICAgICBmYXZvcml0ZVN0b3JlW2N1cnJlbnRJdGVtLm5hbWVdID0ge1xuICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICAgICAgaGlnaGVzdEJpZDogY3VycmVudEl0ZW0uaGlnaGVzdGJpZCxcbiAgICAgICAgICAgIGxhc3RTYWxlOiBjdXJyZW50SXRlbS5sYXN0c2FsZSxcbiAgICAgICAgICAgIHVybDogY3VycmVudEl0ZW0udXJsLFxuICAgICAgICAgICAgbWVkaWE6IGN1cnJlbnRJdGVtLm1lZGlhLFxuICAgICAgICAgIH1cbiAgICAgICAgICAgIHNhdmVkRmF2b3JpdGVzW2N1cnJlbnRJdGVtLm5hbWVdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHNhdmVkRmF2b3JpdGVzKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShmYXZvcml0ZVN0b3JlKTtcbiAgICAgIH0pXG5cbiAgICAgICAgIC8vIHBvc3NpYmx5IGFkZCBjb25kaXRpb24gdG8gcmVuZGVyIHN0YXRlIGlmIHJlc3VsdHMgPCAxID8/ICoqIEZPUiBJRiBOTyBGQVZPUklURVMgU0hPVyBcIkFERCBGQVZPUklURVM/P1wiXCJcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICBmYXZvcml0ZVZpZXc6ICF0aGlzLnN0YXRlLmZhdm9yaXRlVmlld1xuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgaDE7XG4gICAgaWYgKHRoaXMucHJvcHMudXNlcm5hbWUubGVuZ3RoIDwgMSkge1xuICAgICAgaDEgPSA8aDE+V2VsY29tZSBiYWNrITwvaDE+XG4gICAgfSBlbHNlIHtcbiAgICAgIGgxID0gPGgxPldlbGNvbWUgYmFjayB7dGhpcy5wcm9wcy51c2VybmFtZX0hPC9oMT5cbiAgICB9XG4gICAgaWYgKCF0aGlzLnN0YXRlLmZhdm9yaXRlVmlldykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICB7aDF9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmF2b3JpdGVcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3Rhcn0gb25DbGljaz17dGhpcy5yZW5kZXJGYXZvcml0ZXN9IC8+PC9zcGFuPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVNlYXJjaH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInNlYXJjaFwiIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IHBsYWNlaG9sZGVyPVwiTGV0cyBmaW5kIHNvbWUgc25lYWtlcnMhXCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1kYXJrXCI+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+SGlnaGVzdCBCaWQ8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkxhc3QgU2FsZTwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8TGlzdCBzZWFyY2hSZXN1bHRzPXt0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHN9IGZhdm9yaXRlUmVzdWx0cz17dGhpcy5zdGF0ZS5mYXZvcml0ZVJlc3VsdHN9IGhhbmRsZUZhdm9yaXRlPXt0aGlzLmhhbmRsZUZhdm9yaXRlfSAvPlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIHtoMX1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYXZvcml0ZVwiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFTdGFyfSBvbkNsaWNrPXt0aGlzLnJlbmRlckZhdm9yaXRlc30gLz48L3NwYW4+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU2VhcmNofT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwic2VhcmNoXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gcGxhY2Vob2xkZXI9XCJMZXRzIGZpbmQgc29tZSBzbmVha2VycyFcIj48L2lucHV0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWRhcmtcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5IaWdoZXN0IEJpZDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TGFzdCBTYWxlPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDxGYXZvcml0ZXMgZmF2b3JpdGVSZXN1bHRzPXt0aGlzLnN0YXRlLmZhdm9yaXRlUmVzdWx0c30gc2F2ZWRGYXZvcml0ZXM9e3RoaXMuc3RhdGUuc2F2ZWRGYXZvcml0ZXN9IGhhbmRsZUZhdm9yaXRlPXt0aGlzLmhhbmRsZUZhdm9yaXRlfSAvPlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluOyJdfQ==