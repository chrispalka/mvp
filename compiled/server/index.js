"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var express = require('express');

var port = process.env.PORT || 3000;
var host = process.env.HOST || 'http://localhost';

var path = require('path');

var fs = require('fs');

var multer = require('multer');

var upload = multer({});

var headers = require('../cors.json');

var _require = require('../db/index.js'),
    insertRow = _require.insertRow;

var stockxAPI = require('stockx-api');

var stockX = new stockxAPI();
var app = express();
app.use(express["static"](path.join(__dirname, '../public/dist')));
app.post('/submit', upload.none(), function (req, res) {
  if (req.body.username) {
    insertRow("INSERT INTO users (username) VALUES ('".concat(req.body.username, "')"));
  }

  res.set(headers);
  res.sendStatus(200);
});
app.post('/search', upload.none(), function (req, res) {
  var search = req.body.search;

  _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var productList;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return stockX.newSearchProducts(search, {
              limit: 5
            });

          case 3:
            productList = _context.sent;
            res.set(headers);
            res.status(200).json({
              productList: productList
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log('Error: ' + _context.t0.message);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }))();
});
app.listen(port, function () {
  console.log("Express server listening on ".concat(host, ":").concat(port));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImhvc3QiLCJIT1NUIiwicGF0aCIsImZzIiwibXVsdGVyIiwidXBsb2FkIiwiaGVhZGVycyIsImluc2VydFJvdyIsInN0b2NreEFQSSIsInN0b2NrWCIsImFwcCIsInVzZSIsImpvaW4iLCJfX2Rpcm5hbWUiLCJwb3N0Iiwibm9uZSIsInJlcSIsInJlcyIsImJvZHkiLCJ1c2VybmFtZSIsInNldCIsInNlbmRTdGF0dXMiLCJzZWFyY2giLCJuZXdTZWFyY2hQcm9kdWN0cyIsImxpbWl0IiwicHJvZHVjdExpc3QiLCJzdGF0dXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFFLFNBQUYsQ0FBdkI7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBWixJQUFvQixJQUFqQztBQUNBLElBQU1DLElBQUksR0FBR0gsT0FBTyxDQUFDQyxHQUFSLENBQVlHLElBQVosSUFBb0Isa0JBQWpDOztBQUNBLElBQU1DLElBQUksR0FBR1AsT0FBTyxDQUFFLE1BQUYsQ0FBcEI7O0FBQ0EsSUFBTVEsRUFBRSxHQUFHUixPQUFPLENBQUUsSUFBRixDQUFsQjs7QUFDQSxJQUFNUyxNQUFNLEdBQUdULE9BQU8sQ0FBQyxRQUFELENBQXRCOztBQUNBLElBQU1VLE1BQU0sR0FBR0QsTUFBTSxDQUFDLEVBQUQsQ0FBckI7O0FBQ0EsSUFBTUUsT0FBTyxHQUFHWCxPQUFPLENBQUMsY0FBRCxDQUF2Qjs7ZUFDc0JBLE9BQU8sQ0FBQyxnQkFBRCxDO0lBQXJCWSxTLFlBQUFBLFM7O0FBQ1IsSUFBTUMsU0FBUyxHQUFHYixPQUFPLENBQUMsWUFBRCxDQUF6Qjs7QUFDQSxJQUFNYyxNQUFNLEdBQUcsSUFBSUQsU0FBSixFQUFmO0FBR0EsSUFBTUUsR0FBRyxHQUFHaEIsT0FBTyxFQUFuQjtBQUdBZ0IsR0FBRyxDQUFDQyxHQUFKLENBQVFqQixPQUFPLFVBQVAsQ0FBZVEsSUFBSSxDQUFDVSxJQUFMLENBQVVDLFNBQVYsRUFBcUIsZ0JBQXJCLENBQWYsQ0FBUjtBQUVBSCxHQUFHLENBQUNJLElBQUosQ0FBUyxTQUFULEVBQW9CVCxNQUFNLENBQUNVLElBQVAsRUFBcEIsRUFBbUMsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDL0MsTUFBSUQsR0FBRyxDQUFDRSxJQUFKLENBQVNDLFFBQWIsRUFBdUI7QUFDckJaLElBQUFBLFNBQVMsaURBQTBDUyxHQUFHLENBQUNFLElBQUosQ0FBU0MsUUFBbkQsUUFBVDtBQUNEOztBQUNERixFQUFBQSxHQUFHLENBQUNHLEdBQUosQ0FBUWQsT0FBUjtBQUNBVyxFQUFBQSxHQUFHLENBQUNJLFVBQUosQ0FBZSxHQUFmO0FBQ0QsQ0FORDtBQVFBWCxHQUFHLENBQUNJLElBQUosQ0FBUyxTQUFULEVBQW9CVCxNQUFNLENBQUNVLElBQVAsRUFBcEIsRUFBbUMsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDL0MsTUFBSUssTUFBTSxHQUFHTixHQUFHLENBQUNFLElBQUosQ0FBU0ksTUFBdEI7O0FBRUEsMERBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUUrQmIsTUFBTSxDQUFDYyxpQkFBUCxDQUF5QkQsTUFBekIsRUFBaUM7QUFDekRFLGNBQUFBLEtBQUssRUFBRTtBQURrRCxhQUFqQyxDQUYvQjs7QUFBQTtBQUVXQyxZQUFBQSxXQUZYO0FBTUdSLFlBQUFBLEdBQUcsQ0FBQ0csR0FBSixDQUFRZCxPQUFSO0FBQ0FXLFlBQUFBLEdBQUcsQ0FBQ1MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVGLGNBQUFBLFdBQVcsRUFBWEE7QUFBRixhQUFyQjtBQVBIO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBVUtHLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVksWUFBRUMsT0FBMUI7O0FBVkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRDtBQWFELENBaEJEO0FBMEJBcEIsR0FBRyxDQUFDcUIsTUFBSixDQUFXbkMsSUFBWCxFQUFpQixZQUFNO0FBQ3JCZ0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLHVDQUEyQzdCLElBQTNDLGNBQW1ESixJQUFuRDtBQUNELENBRkQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHByZXNzID0gcmVxdWlyZSAoJ2V4cHJlc3MnKTtcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5jb25zdCBob3N0ID0gcHJvY2Vzcy5lbnYuSE9TVCB8fCAnaHR0cDovL2xvY2FsaG9zdCdcbmNvbnN0IHBhdGggPSByZXF1aXJlICgncGF0aCcpO1xuY29uc3QgZnMgPSByZXF1aXJlICgnZnMnKTtcbmNvbnN0IG11bHRlciA9IHJlcXVpcmUoJ211bHRlcicpXG5jb25zdCB1cGxvYWQgPSBtdWx0ZXIoe30pXG5jb25zdCBoZWFkZXJzID0gcmVxdWlyZSgnLi4vY29ycy5qc29uJylcbmNvbnN0IHsgaW5zZXJ0Um93IH0gPSByZXF1aXJlKCcuLi9kYi9pbmRleC5qcycpXG5jb25zdCBzdG9ja3hBUEkgPSByZXF1aXJlKCdzdG9ja3gtYXBpJyk7XG5jb25zdCBzdG9ja1ggPSBuZXcgc3RvY2t4QVBJKCk7XG5cblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5cbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3B1YmxpYy9kaXN0JykpKTtcblxuYXBwLnBvc3QoJy9zdWJtaXQnLCB1cGxvYWQubm9uZSgpLCAocmVxLCByZXMpID0+IHtcbiAgaWYgKHJlcS5ib2R5LnVzZXJuYW1lKSB7XG4gICAgaW5zZXJ0Um93KGBJTlNFUlQgSU5UTyB1c2VycyAodXNlcm5hbWUpIFZBTFVFUyAoJyR7cmVxLmJvZHkudXNlcm5hbWV9JylgKTtcbiAgfVxuICByZXMuc2V0KGhlYWRlcnMpO1xuICByZXMuc2VuZFN0YXR1cygyMDApO1xufSk7XG5cbmFwcC5wb3N0KCcvc2VhcmNoJywgdXBsb2FkLm5vbmUoKSwgKHJlcSwgcmVzKSA9PiB7XG4gIGxldCBzZWFyY2ggPSByZXEuYm9keS5zZWFyY2g7XG5cbiAgKGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwcm9kdWN0TGlzdCA9IGF3YWl0IHN0b2NrWC5uZXdTZWFyY2hQcm9kdWN0cyhzZWFyY2gsIHtcbiAgICAgICAgICBsaW1pdDogNVxuICAgICAgICB9KTtcblxuICAgICAgcmVzLnNldChoZWFkZXJzKTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcHJvZHVjdExpc3QgfSlcbiAgICB9XG4gICAgY2F0Y2goZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogJyArIGUubWVzc2FnZSk7XG4gICAgfVxufSkoKTtcbn0pO1xuXG5cblxuXG5cblxuXG5cblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gJHtob3N0fToke3BvcnR9YClcbn0pOyJdfQ==