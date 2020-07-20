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

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

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

        data.append('name', sneakerName);

        for (var k in favoriteStore[sneakerName]) {
          data.append(k, favoriteStore[sneakerName][k]);
        }

        fetch('/favorite', {
          method: 'POST',
          body: data
        });
      } else {
        console.log('Shoe exists in favoriteStore.. Settings status false');
        favoriteStore[sneakerName].status = false;
        favoriteStore[sneakerName].username = _this.props.username;
        savedFavorites[sneakerName] = false;

        _this.setState(savedFavorites);

        data.append('name', sneakerName);

        for (var k in favoriteStore[sneakerName]) {
          data.append(k, favoriteStore[sneakerName][k]);
        }

        fetch('/favorite', {
          method: 'POST',
          body: data
        });
        delete favoriteStore[sneakerName];
      }
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
      });

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
      } else if (!Object.entries(this.state.favoriteResults).length < 1) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "container"
        }, h1, /*#__PURE__*/_react["default"].createElement("span", {
          className: "favorite"
        }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: ['fas', 'home'],
          onClick: this.renderFavorites
        })), /*#__PURE__*/_react["default"].createElement("table", {
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
      } else {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "container"
        }, h1, /*#__PURE__*/_react["default"].createElement("span", {
          className: "favorite"
        }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: ['fas', 'home'],
          onClick: this.renderFavorites
        })), /*#__PURE__*/_react["default"].createElement("h3", null, "Come back when you have added some favorites!"));
      }
    }
  }]);

  return Main;
}(_react["default"].Component);

var _default = Main;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9NYWluLmpzeCJdLCJuYW1lcyI6WyJNYWluIiwicHJvcHMiLCJlIiwic3RvcmUiLCJzdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNldFN0YXRlIiwicmVzdWx0cyIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwic2VhcmNoIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJwcm9kdWN0TGlzdCIsImZvckVhY2giLCJ4IiwicHVzaCIsInVybCIsImhpZ2hlc3RfYmlkIiwibGFzdF9zYWxlIiwibWVkaWEiLCJzZWFyY2hSZXN1bHRzIiwiZmF2b3JpdGUiLCJzbmVha2VyTmFtZSIsImhpZ2hlc3RCaWQiLCJsYXN0U2FsZSIsImltYWdlIiwiY29uc29sZSIsImxvZyIsImZhdm9yaXRlU3RvcmUiLCJmYXZvcml0ZVJlc3VsdHMiLCJzYXZlZEZhdm9yaXRlcyIsInVuZGVmaW5lZCIsInN0YXR1cyIsInVzZXJuYW1lIiwiayIsImRhdGFPYmoiLCJpIiwibGVuZ3RoIiwiY3VycmVudEl0ZW0iLCJoaWdoZXN0YmlkIiwibGFzdHNhbGUiLCJmYXZvcml0ZVZpZXciLCJoMSIsImZhU3RhciIsInJlbmRlckZhdm9yaXRlcyIsImhhbmRsZVNlYXJjaCIsIm9uQ2hhbmdlIiwiaGFuZGxlRmF2b3JpdGUiLCJPYmplY3QiLCJlbnRyaWVzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNTUEsSTs7Ozs7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsK0RBV1IsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2hCLFVB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Q0FGRixlQUdFLDRGQUhGLENBREY7QUFPRDtBQUNGOzs7O0VBcExnQk0sa0JBQU1DLFM7O2VBdUxWN0QsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgTGlzdCBmcm9tICcuL0xpc3QuanN4JztcbmltcG9ydCBGYXZvcml0ZXMgZnJvbSAnLi9GYXZvcml0ZXMuanN4J1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSdcbmltcG9ydCB7IGZhU3RhciB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IGZhSG9tZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IGZhcyB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcblxuXG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2g6ICcnLFxuICAgICAgc2VhcmNoUmVzdWx0czogW10sXG4gICAgICBmYXZvcml0ZVJlc3VsdHM6IHt9LFxuICAgICAgc2F2ZWRGYXZvcml0ZXM6IHt9LFxuICAgICAgZmF2b3JpdGVWaWV3OiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBzdG9yZSA9IHRoaXMuc3RhdGU7XG4gICAgc3RvcmVbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHN0b3JlKTtcbiAgfVxuXG5cbiAgaGFuZGxlU2VhcmNoID0gKGUpID0+IHtcbiAgICBsZXQgcmVzdWx0cztcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgZGF0YS5hcHBlbmQoJ3NlYXJjaCcsIHRoaXMuc3RhdGUuc2VhcmNoKTtcbiAgICBmZXRjaCgnL3NlYXJjaCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogZGF0YVxuICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgZGF0YSA9IGRhdGEucHJvZHVjdExpc3RcbiAgICAgICAgZGF0YS5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goKCh7IG5hbWUsIHVybCwgaGlnaGVzdF9iaWQsIGxhc3Rfc2FsZSwgbWVkaWEgfSkgPT4gKHsgbmFtZSwgdXJsLCBoaWdoZXN0X2JpZCwgbGFzdF9zYWxlLCBtZWRpYSB9KSkoeCkpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hSZXN1bHRzOiByZXN1bHQgfSlcbiAgICAgIH0pXG4gIH1cblxuICBoYW5kbGVGYXZvcml0ZSA9IChmYXZvcml0ZSkgPT4ge1xuICAgIGNvbnN0IHNuZWFrZXJOYW1lID0gZmF2b3JpdGVbMF07XG4gICAgY29uc3QgaGlnaGVzdEJpZCA9IGZhdm9yaXRlWzFdO1xuICAgIGNvbnN0IGxhc3RTYWxlID0gZmF2b3JpdGVbMl07XG4gICAgY29uc3QgdXJsID0gZmF2b3JpdGVbM107XG4gICAgY29uc3QgaW1hZ2UgPSBmYXZvcml0ZVs0XTtcbiAgICBjb25zb2xlLmxvZygndXJsIGZyb20gaGFuZGxlRmF2b3JpdGU6ICcsIHVybClcbiAgICBjb25zb2xlLmxvZygnaW1hZ2UgZnJvbSBoYW5kbGVGYXZvcml0ZTogJywgaW1hZ2UpXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGNvbnN0IGZhdm9yaXRlU3RvcmUgPSB0aGlzLnN0YXRlLmZhdm9yaXRlUmVzdWx0cztcbiAgICBjb25zdCBzYXZlZEZhdm9yaXRlcyA9IHRoaXMuc3RhdGUuc2F2ZWRGYXZvcml0ZXNcbiAgICBpZiAoZmF2b3JpdGVTdG9yZVtzbmVha2VyTmFtZV0gPT09IHVuZGVmaW5lZCB8fCBmYXZvcml0ZVN0b3JlW3NuZWFrZXJOYW1lXS5zdGF0dXMgPT09IGZhbHNlKSB7XG4gICAgICBjb25zb2xlLmxvZygnU2hvZSBkb2VzIG5vdCBleGlzdCBpbiBmYXZvcml0ZVN0b3JlLi4gU2V0dGluZ3Mgc3RhdHVzIHRydWUnKVxuICAgICAgZmF2b3JpdGVTdG9yZVtzbmVha2VyTmFtZV0gPSB7XG4gICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgaGlnaGVzdEJpZDogaGlnaGVzdEJpZCxcbiAgICAgICAgbGFzdFNhbGU6IGxhc3RTYWxlLFxuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgbWVkaWE6IGltYWdlLFxuICAgICAgICB1c2VybmFtZTogdGhpcy5wcm9wcy51c2VybmFtZVxuICAgICAgfTtcbiAgICAgIHNhdmVkRmF2b3JpdGVzW3NuZWFrZXJOYW1lXSA9IHRydWU7XG4gICAgICB0aGlzLnNldFN0YXRlKGZhdm9yaXRlU3RvcmUpO1xuICAgICAgdGhpcy5zZXRTdGF0ZShzYXZlZEZhdm9yaXRlcyk7XG4gICAgICBkYXRhLmFwcGVuZCgnbmFtZScsIHNuZWFrZXJOYW1lKVxuICAgICAgZm9yICh2YXIgayBpbiBmYXZvcml0ZVN0b3JlW3NuZWFrZXJOYW1lXSkge1xuICAgICAgICBkYXRhLmFwcGVuZChrLCBmYXZvcml0ZVN0b3JlW3NuZWFrZXJOYW1lXVtrXSlcbiAgICAgIH1cbiAgICAgIGZldGNoKCcvZmF2b3JpdGUnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBkYXRhXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnU2hvZSBleGlzdHMgaW4gZmF2b3JpdGVTdG9yZS4uIFNldHRpbmdzIHN0YXR1cyBmYWxzZScpXG4gICAgICBmYXZvcml0ZVN0b3JlW3NuZWFrZXJOYW1lXS5zdGF0dXMgPSBmYWxzZTtcbiAgICAgIGZhdm9yaXRlU3RvcmVbc25lYWtlck5hbWVdLnVzZXJuYW1lID0gdGhpcy5wcm9wcy51c2VybmFtZTtcbiAgICAgIHNhdmVkRmF2b3JpdGVzW3NuZWFrZXJOYW1lXSA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRTdGF0ZShzYXZlZEZhdm9yaXRlcyk7XG4gICAgICBkYXRhLmFwcGVuZCgnbmFtZScsIHNuZWFrZXJOYW1lKVxuICAgICAgZm9yICh2YXIgayBpbiBmYXZvcml0ZVN0b3JlW3NuZWFrZXJOYW1lXSkge1xuICAgICAgICBkYXRhLmFwcGVuZChrLCBmYXZvcml0ZVN0b3JlW3NuZWFrZXJOYW1lXVtrXSlcbiAgICAgIH1cbiAgICAgIGZldGNoKCcvZmF2b3JpdGUnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBkYXRhXG4gICAgICB9KVxuICAgICAgZGVsZXRlIGZhdm9yaXRlU3RvcmVbc25lYWtlck5hbWVdXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyRmF2b3JpdGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IGZhdm9yaXRlU3RvcmUgPSB0aGlzLnN0YXRlLmZhdm9yaXRlUmVzdWx0cztcbiAgICBjb25zdCBzYXZlZEZhdm9yaXRlcyA9IHRoaXMuc3RhdGUuc2F2ZWRGYXZvcml0ZXM7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICBjb25zdCBkYXRhT2JqID0ge31cbiAgICBkYXRhLmFwcGVuZCgnbmFtZScsIHRoaXMucHJvcHMudXNlcm5hbWUpO1xuICAgIGZldGNoKCcvcmVuZGVyZmF2b3JpdGUnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IGRhdGFcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLnJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBjdXJyZW50SXRlbSA9IGRhdGEucmVzdWx0W2ldXG4gICAgICAgICAgZmF2b3JpdGVTdG9yZVtjdXJyZW50SXRlbS5uYW1lXSA9IHtcbiAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgICAgIGhpZ2hlc3RCaWQ6IGN1cnJlbnRJdGVtLmhpZ2hlc3RiaWQsXG4gICAgICAgICAgICBsYXN0U2FsZTogY3VycmVudEl0ZW0ubGFzdHNhbGUsXG4gICAgICAgICAgICB1cmw6IGN1cnJlbnRJdGVtLnVybCxcbiAgICAgICAgICAgIG1lZGlhOiBjdXJyZW50SXRlbS5tZWRpYSxcbiAgICAgICAgICB9XG4gICAgICAgICAgc2F2ZWRGYXZvcml0ZXNbY3VycmVudEl0ZW0ubmFtZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc2F2ZWRGYXZvcml0ZXMpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKGZhdm9yaXRlU3RvcmUpO1xuICAgICAgfSlcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICBmYXZvcml0ZVZpZXc6ICF0aGlzLnN0YXRlLmZhdm9yaXRlVmlld1xuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgaDE7XG4gICAgaWYgKHRoaXMucHJvcHMudXNlcm5hbWUubGVuZ3RoIDwgMSkge1xuICAgICAgaDEgPSA8aDE+V2VsY29tZSBiYWNrITwvaDE+XG4gICAgfSBlbHNlIHtcbiAgICAgIGgxID0gPGgxPldlbGNvbWUgYmFjayB7dGhpcy5wcm9wcy51c2VybmFtZX0hPC9oMT5cbiAgICB9XG4gICAgaWYgKCF0aGlzLnN0YXRlLmZhdm9yaXRlVmlldykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICB7aDF9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmF2b3JpdGVcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU3Rhcn0gb25DbGljaz17dGhpcy5yZW5kZXJGYXZvcml0ZXN9IC8+PC9zcGFuPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVNlYXJjaH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInNlYXJjaFwiIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IHBsYWNlaG9sZGVyPVwiTGV0cyBmaW5kIHNvbWUgc25lYWtlcnMhXCI+PC9pbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1kYXJrXCI+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+SGlnaGVzdCBCaWQ8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkxhc3QgU2FsZTwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPExpc3Qgc2VhcmNoUmVzdWx0cz17dGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzfSBmYXZvcml0ZVJlc3VsdHM9e3RoaXMuc3RhdGUuZmF2b3JpdGVSZXN1bHRzfSBoYW5kbGVGYXZvcml0ZT17dGhpcy5oYW5kbGVGYXZvcml0ZX0gLz5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKCFPYmplY3QuZW50cmllcyh0aGlzLnN0YXRlLmZhdm9yaXRlUmVzdWx0cykubGVuZ3RoIDwgMSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICB7aDF9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmF2b3JpdGVcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFzJywgJ2hvbWUnXX0gb25DbGljaz17dGhpcy5yZW5kZXJGYXZvcml0ZXN9IC8+PC9zcGFuPlxuICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWRhcmtcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5IaWdoZXN0IEJpZDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TGFzdCBTYWxlPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8RmF2b3JpdGVzIGZhdm9yaXRlUmVzdWx0cz17dGhpcy5zdGF0ZS5mYXZvcml0ZVJlc3VsdHN9IHNhdmVkRmF2b3JpdGVzPXt0aGlzLnN0YXRlLnNhdmVkRmF2b3JpdGVzfSBoYW5kbGVGYXZvcml0ZT17dGhpcy5oYW5kbGVGYXZvcml0ZX0gLz5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICB7aDF9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmF2b3JpdGVcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFzJywgJ2hvbWUnXX0gb25DbGljaz17dGhpcy5yZW5kZXJGYXZvcml0ZXN9IC8+PC9zcGFuPlxuICAgICAgICAgIDxoMz5Db21lIGJhY2sgd2hlbiB5b3UgaGF2ZSBhZGRlZCBzb21lIGZhdm9yaXRlcyE8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbjsiXX0=