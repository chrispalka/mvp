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
            //Fetch variants and product details of the first product
            // const product = await stockX.fetchProductDetails(productList[0]);
            console.log(productList);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log('Error: ' + _context.t0.message);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }))();

  res.set(headers);
  res.sendStatus(200);
});
app.listen(port, function () {
  console.log("Express server listening on ".concat(host, ":").concat(port));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImhvc3QiLCJIT1NUIiwicGF0aCIsImZzIiwibXVsdGVyIiwidXBsb2FkIiwiaGVhZGVycyIsImluc2VydFJvdyIsInN0b2NreEFQSSIsInN0b2NrWCIsImFwcCIsInVzZSIsImpvaW4iLCJfX2Rpcm5hbWUiLCJwb3N0Iiwibm9uZSIsInJlcSIsInJlcyIsImJvZHkiLCJ1c2VybmFtZSIsInNldCIsInNlbmRTdGF0dXMiLCJzZWFyY2giLCJuZXdTZWFyY2hQcm9kdWN0cyIsImxpbWl0IiwicHJvZHVjdExpc3QiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImxpc3RlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUUsU0FBRixDQUF2Qjs7QUFDQSxJQUFNQyxJQUFJLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFaLElBQW9CLElBQWpDO0FBQ0EsSUFBTUMsSUFBSSxHQUFHSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsSUFBWixJQUFvQixrQkFBakM7O0FBQ0EsSUFBTUMsSUFBSSxHQUFHUCxPQUFPLENBQUUsTUFBRixDQUFwQjs7QUFDQSxJQUFNUSxFQUFFLEdBQUdSLE9BQU8sQ0FBRSxJQUFGLENBQWxCOztBQUNBLElBQU1TLE1BQU0sR0FBR1QsT0FBTyxDQUFDLFFBQUQsQ0FBdEI7O0FBQ0EsSUFBTVUsTUFBTSxHQUFHRCxNQUFNLENBQUMsRUFBRCxDQUFyQjs7QUFDQSxJQUFNRSxPQUFPLEdBQUdYLE9BQU8sQ0FBQyxjQUFELENBQXZCOztlQUNzQkEsT0FBTyxDQUFDLGdCQUFELEM7SUFBckJZLFMsWUFBQUEsUzs7QUFDUixJQUFNQyxTQUFTLEdBQUdiLE9BQU8sQ0FBQyxZQUFELENBQXpCOztBQUNBLElBQU1jLE1BQU0sR0FBRyxJQUFJRCxTQUFKLEVBQWY7QUFHQSxJQUFNRSxHQUFHLEdBQUdoQixPQUFPLEVBQW5CO0FBR0FnQixHQUFHLENBQUNDLEdBQUosQ0FBUWpCLE9BQU8sVUFBUCxDQUFlUSxJQUFJLENBQUNVLElBQUwsQ0FBVUMsU0FBVixFQUFxQixnQkFBckIsQ0FBZixDQUFSO0FBRUFILEdBQUcsQ0FBQ0ksSUFBSixDQUFTLFNBQVQsRUFBb0JULE1BQU0sQ0FBQ1UsSUFBUCxFQUFwQixFQUFtQyxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUMvQyxNQUFJRCxHQUFHLENBQUNFLElBQUosQ0FBU0MsUUFBYixFQUF1QjtBQUNyQlosSUFBQUEsU0FBUyxpREFBMENTLEdBQUcsQ0FBQ0UsSUFBSixDQUFTQyxRQUFuRCxRQUFUO0FBQ0Q7O0FBQ0RGLEVBQUFBLEdBQUcsQ0FBQ0csR0FBSixDQUFRZCxPQUFSO0FBQ0FXLEVBQUFBLEdBQUcsQ0FBQ0ksVUFBSixDQUFlLEdBQWY7QUFDRCxDQU5EO0FBUUFYLEdBQUcsQ0FBQ0ksSUFBSixDQUFTLFNBQVQsRUFBb0JULE1BQU0sQ0FBQ1UsSUFBUCxFQUFwQixFQUFtQyxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUMvQyxNQUFJSyxNQUFNLEdBQUdOLEdBQUcsQ0FBQ0UsSUFBSixDQUFTSSxNQUF0Qjs7QUFDQSwwREFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRStCYixNQUFNLENBQUNjLGlCQUFQLENBQXlCRCxNQUF6QixFQUFpQztBQUN6REUsY0FBQUEsS0FBSyxFQUFFO0FBRGtELGFBQWpDLENBRi9COztBQUFBO0FBRVdDLFlBQUFBLFdBRlg7QUFLSztBQUNBO0FBQ0FDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFaO0FBUEw7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFVS0MsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWSxZQUFFQyxPQUExQjs7QUFWTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFEOztBQWdCQVgsRUFBQUEsR0FBRyxDQUFDRyxHQUFKLENBQVFkLE9BQVI7QUFDQVcsRUFBQUEsR0FBRyxDQUFDSSxVQUFKLENBQWUsR0FBZjtBQUNELENBcEJEO0FBOEJBWCxHQUFHLENBQUNtQixNQUFKLENBQVdqQyxJQUFYLEVBQWlCLFlBQU07QUFDckI4QixFQUFBQSxPQUFPLENBQUNDLEdBQVIsdUNBQTJDM0IsSUFBM0MsY0FBbURKLElBQW5EO0FBQ0QsQ0FGRCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlICgnZXhwcmVzcycpO1xuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcbmNvbnN0IGhvc3QgPSBwcm9jZXNzLmVudi5IT1NUIHx8ICdodHRwOi8vbG9jYWxob3N0J1xuY29uc3QgcGF0aCA9IHJlcXVpcmUgKCdwYXRoJyk7XG5jb25zdCBmcyA9IHJlcXVpcmUgKCdmcycpO1xuY29uc3QgbXVsdGVyID0gcmVxdWlyZSgnbXVsdGVyJylcbmNvbnN0IHVwbG9hZCA9IG11bHRlcih7fSlcbmNvbnN0IGhlYWRlcnMgPSByZXF1aXJlKCcuLi9jb3JzLmpzb24nKVxuY29uc3QgeyBpbnNlcnRSb3cgfSA9IHJlcXVpcmUoJy4uL2RiL2luZGV4LmpzJylcbmNvbnN0IHN0b2NreEFQSSA9IHJlcXVpcmUoJ3N0b2NreC1hcGknKTtcbmNvbnN0IHN0b2NrWCA9IG5ldyBzdG9ja3hBUEkoKTtcblxuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5cblxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vcHVibGljL2Rpc3QnKSkpO1xuXG5hcHAucG9zdCgnL3N1Ym1pdCcsIHVwbG9hZC5ub25lKCksIChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLmJvZHkudXNlcm5hbWUpIHtcbiAgICBpbnNlcnRSb3coYElOU0VSVCBJTlRPIHVzZXJzICh1c2VybmFtZSkgVkFMVUVTICgnJHtyZXEuYm9keS51c2VybmFtZX0nKWApO1xuICB9XG4gIHJlcy5zZXQoaGVhZGVycyk7XG4gIHJlcy5zZW5kU3RhdHVzKDIwMCk7XG59KTtcblxuYXBwLnBvc3QoJy9zZWFyY2gnLCB1cGxvYWQubm9uZSgpLCAocmVxLCByZXMpID0+IHtcbiAgbGV0IHNlYXJjaCA9IHJlcS5ib2R5LnNlYXJjaDtcbiAgKGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwcm9kdWN0TGlzdCA9IGF3YWl0IHN0b2NrWC5uZXdTZWFyY2hQcm9kdWN0cyhzZWFyY2gsIHtcbiAgICAgICAgICBsaW1pdDogNVxuICAgICAgICB9KTtcbiAgICAgICAgLy9GZXRjaCB2YXJpYW50cyBhbmQgcHJvZHVjdCBkZXRhaWxzIG9mIHRoZSBmaXJzdCBwcm9kdWN0XG4gICAgICAgIC8vIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBzdG9ja1guZmV0Y2hQcm9kdWN0RGV0YWlscyhwcm9kdWN0TGlzdFswXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3RMaXN0KVxuICAgIH1cbiAgICBjYXRjaChlKXtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnICsgZS5tZXNzYWdlKTtcbiAgICB9XG59KSgpO1xuXG5cblxuICByZXMuc2V0KGhlYWRlcnMpO1xuICByZXMuc2VuZFN0YXR1cygyMDApO1xufSk7XG5cblxuXG5cblxuXG5cblxuXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcbiAgY29uc29sZS5sb2coYEV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiAke2hvc3R9OiR7cG9ydH1gKVxufSk7Il19