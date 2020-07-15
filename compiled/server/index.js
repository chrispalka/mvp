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
              limit: 1
            });

          case 3:
            productList = _context.sent;
            //Fetch variants and product details of the first product
            // const product = await stockX.fetchProductDetails(productList[0]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImhvc3QiLCJIT1NUIiwicGF0aCIsImZzIiwibXVsdGVyIiwidXBsb2FkIiwiaGVhZGVycyIsImluc2VydFJvdyIsInN0b2NreEFQSSIsInN0b2NrWCIsImFwcCIsInVzZSIsImpvaW4iLCJfX2Rpcm5hbWUiLCJwb3N0Iiwibm9uZSIsInJlcSIsInJlcyIsImJvZHkiLCJ1c2VybmFtZSIsInNldCIsInNlbmRTdGF0dXMiLCJzZWFyY2giLCJuZXdTZWFyY2hQcm9kdWN0cyIsImxpbWl0IiwicHJvZHVjdExpc3QiLCJzdGF0dXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFFLFNBQUYsQ0FBdkI7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBWixJQUFvQixJQUFqQztBQUNBLElBQU1DLElBQUksR0FBR0gsT0FBTyxDQUFDQyxHQUFSLENBQVlHLElBQVosSUFBb0Isa0JBQWpDOztBQUNBLElBQU1DLElBQUksR0FBR1AsT0FBTyxDQUFFLE1BQUYsQ0FBcEI7O0FBQ0EsSUFBTVEsRUFBRSxHQUFHUixPQUFPLENBQUUsSUFBRixDQUFsQjs7QUFDQSxJQUFNUyxNQUFNLEdBQUdULE9BQU8sQ0FBQyxRQUFELENBQXRCOztBQUNBLElBQU1VLE1BQU0sR0FBR0QsTUFBTSxDQUFDLEVBQUQsQ0FBckI7O0FBQ0EsSUFBTUUsT0FBTyxHQUFHWCxPQUFPLENBQUMsY0FBRCxDQUF2Qjs7ZUFDc0JBLE9BQU8sQ0FBQyxnQkFBRCxDO0lBQXJCWSxTLFlBQUFBLFM7O0FBQ1IsSUFBTUMsU0FBUyxHQUFHYixPQUFPLENBQUMsWUFBRCxDQUF6Qjs7QUFDQSxJQUFNYyxNQUFNLEdBQUcsSUFBSUQsU0FBSixFQUFmO0FBR0EsSUFBTUUsR0FBRyxHQUFHaEIsT0FBTyxFQUFuQjtBQUdBZ0IsR0FBRyxDQUFDQyxHQUFKLENBQVFqQixPQUFPLFVBQVAsQ0FBZVEsSUFBSSxDQUFDVSxJQUFMLENBQVVDLFNBQVYsRUFBcUIsZ0JBQXJCLENBQWYsQ0FBUjtBQUVBSCxHQUFHLENBQUNJLElBQUosQ0FBUyxTQUFULEVBQW9CVCxNQUFNLENBQUNVLElBQVAsRUFBcEIsRUFBbUMsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDL0MsTUFBSUQsR0FBRyxDQUFDRSxJQUFKLENBQVNDLFFBQWIsRUFBdUI7QUFDckJaLElBQUFBLFNBQVMsaURBQTBDUyxHQUFHLENBQUNFLElBQUosQ0FBU0MsUUFBbkQsUUFBVDtBQUNEOztBQUNERixFQUFBQSxHQUFHLENBQUNHLEdBQUosQ0FBUWQsT0FBUjtBQUNBVyxFQUFBQSxHQUFHLENBQUNJLFVBQUosQ0FBZSxHQUFmO0FBQ0QsQ0FORDtBQVFBWCxHQUFHLENBQUNJLElBQUosQ0FBUyxTQUFULEVBQW9CVCxNQUFNLENBQUNVLElBQVAsRUFBcEIsRUFBbUMsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDL0MsTUFBSUssTUFBTSxHQUFHTixHQUFHLENBQUNFLElBQUosQ0FBU0ksTUFBdEI7O0FBRUEsMERBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUUrQmIsTUFBTSxDQUFDYyxpQkFBUCxDQUF5QkQsTUFBekIsRUFBaUM7QUFDekRFLGNBQUFBLEtBQUssRUFBRTtBQURrRCxhQUFqQyxDQUYvQjs7QUFBQTtBQUVXQyxZQUFBQSxXQUZYO0FBS0s7QUFDQTtBQUNGUixZQUFBQSxHQUFHLENBQUNHLEdBQUosQ0FBUWQsT0FBUjtBQUNBVyxZQUFBQSxHQUFHLENBQUNTLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFRixjQUFBQSxXQUFXLEVBQVhBO0FBQUYsYUFBckI7QUFSSDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVdLRyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFZLFlBQUVDLE9BQTFCOztBQVhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQ7QUFjRCxDQWpCRDtBQTJCQXBCLEdBQUcsQ0FBQ3FCLE1BQUosQ0FBV25DLElBQVgsRUFBaUIsWUFBTTtBQUNyQmdDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUix1Q0FBMkM3QixJQUEzQyxjQUFtREosSUFBbkQ7QUFDRCxDQUZEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUgKCdleHByZXNzJyk7XG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuY29uc3QgaG9zdCA9IHByb2Nlc3MuZW52LkhPU1QgfHwgJ2h0dHA6Ly9sb2NhbGhvc3QnXG5jb25zdCBwYXRoID0gcmVxdWlyZSAoJ3BhdGgnKTtcbmNvbnN0IGZzID0gcmVxdWlyZSAoJ2ZzJyk7XG5jb25zdCBtdWx0ZXIgPSByZXF1aXJlKCdtdWx0ZXInKVxuY29uc3QgdXBsb2FkID0gbXVsdGVyKHt9KVxuY29uc3QgaGVhZGVycyA9IHJlcXVpcmUoJy4uL2NvcnMuanNvbicpXG5jb25zdCB7IGluc2VydFJvdyB9ID0gcmVxdWlyZSgnLi4vZGIvaW5kZXguanMnKVxuY29uc3Qgc3RvY2t4QVBJID0gcmVxdWlyZSgnc3RvY2t4LWFwaScpO1xuY29uc3Qgc3RvY2tYID0gbmV3IHN0b2NreEFQSSgpO1xuXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9wdWJsaWMvZGlzdCcpKSk7XG5cbmFwcC5wb3N0KCcvc3VibWl0JywgdXBsb2FkLm5vbmUoKSwgKHJlcSwgcmVzKSA9PiB7XG4gIGlmIChyZXEuYm9keS51c2VybmFtZSkge1xuICAgIGluc2VydFJvdyhgSU5TRVJUIElOVE8gdXNlcnMgKHVzZXJuYW1lKSBWQUxVRVMgKCcke3JlcS5ib2R5LnVzZXJuYW1lfScpYCk7XG4gIH1cbiAgcmVzLnNldChoZWFkZXJzKTtcbiAgcmVzLnNlbmRTdGF0dXMoMjAwKTtcbn0pO1xuXG5hcHAucG9zdCgnL3NlYXJjaCcsIHVwbG9hZC5ub25lKCksIChyZXEsIHJlcykgPT4ge1xuICBsZXQgc2VhcmNoID0gcmVxLmJvZHkuc2VhcmNoO1xuXG4gIChhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdExpc3QgPSBhd2FpdCBzdG9ja1gubmV3U2VhcmNoUHJvZHVjdHMoc2VhcmNoLCB7XG4gICAgICAgICAgbGltaXQ6IDFcbiAgICAgICAgfSk7XG4gICAgICAgIC8vRmV0Y2ggdmFyaWFudHMgYW5kIHByb2R1Y3QgZGV0YWlscyBvZiB0aGUgZmlyc3QgcHJvZHVjdFxuICAgICAgICAvLyBjb25zdCBwcm9kdWN0ID0gYXdhaXQgc3RvY2tYLmZldGNoUHJvZHVjdERldGFpbHMocHJvZHVjdExpc3RbMF0pO1xuICAgICAgcmVzLnNldChoZWFkZXJzKTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcHJvZHVjdExpc3QgfSlcbiAgICB9XG4gICAgY2F0Y2goZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogJyArIGUubWVzc2FnZSk7XG4gICAgfVxufSkoKTtcbn0pO1xuXG5cblxuXG5cblxuXG5cblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gJHtob3N0fToke3BvcnR9YClcbn0pOyJdfQ==