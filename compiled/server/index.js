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
app.post('/login', upload.none(), function (req, res) {
  var username = req.body.username;
  insertRow("SELECT id FROM users WHERE username = '".concat(username, "'"), function (result) {
    if (result.length === 0) {
      insertRow("INSERT INTO users (username) VALUES ('".concat(username, "')"), function (result) {
        return result;
      });
    } else {
      console.log('Name exists!');
    }
  });
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
              limit: 20
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
app.post('/renderfavorite', upload.none(), function (req, res) {
  var currentuser = req.body.name;
  console.log('currentuser: ', currentuser);
  insertRow("SELECT * FROM FAVORITES WHERE user_id = (SELECT id FROM users WHERE username = '".concat(currentuser, "' )"), function (result) {
    result = JSON.parse(JSON.stringify(result));
    res.set(headers);
    res.status(200).json({
      result: result
    });
  });
});
app.post('/favorite', upload.none(), function (req, res) {
  var favorite = JSON.parse(JSON.stringify(req.body));
  var username = favorite.username;

  if (favorite.status === 'true') {
    console.log('****Entry!!****');
    insertRow("INSERT INTO favorites (name, url, media, highestbid, lastsale, user_id) VALUES ('".concat(favorite.name, "', '").concat(favorite.url, "', '").concat(favorite.media, "', '").concat(favorite.highestBid, "', '").concat(favorite.lastSale, "', (SELECT id FROM users WHERE username = '").concat(username, "'))"), function (result) {
      return result;
    });
  } else if (favorite.status === 'false') {
    console.log('****Deletion!!****');
    insertRow("DELETE FROM favorites WHERE user_id = (SELECT id FROM users WHERE username = '".concat(username, "') AND name = '").concat(favorite.name, "'"), function (result) {
      return result;
    });
  }

  res.set(headers);
  res.sendStatus(200);
});
app.listen(port, function () {
  console.log("Express server listening on ".concat(host, ":").concat(port));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImhvc3QiLCJIT1NUIiwicGF0aCIsImZzIiwibXVsdGVyIiwidXBsb2FkIiwiaGVhZGVycyIsImluc2VydFJvdyIsInN0b2NreEFQSSIsInN0b2NrWCIsImFwcCIsInVzZSIsImpvaW4iLCJfX2Rpcm5hbWUiLCJwb3N0Iiwibm9uZSIsInJlcSIsInJlcyIsInVzZXJuYW1lIiwiYm9keSIsInJlc3VsdCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJzZXQiLCJzZW5kU3RhdHVzIiwic2VhcmNoIiwibmV3U2VhcmNoUHJvZHVjdHMiLCJsaW1pdCIsInByb2R1Y3RMaXN0Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJjdXJyZW50dXNlciIsIm5hbWUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJmYXZvcml0ZSIsInVybCIsIm1lZGlhIiwiaGlnaGVzdEJpZCIsImxhc3RTYWxlIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBRSxTQUFGLENBQXZCOztBQUNBLElBQU1DLElBQUksR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQVosSUFBb0IsSUFBakM7QUFDQSxJQUFNQyxJQUFJLEdBQUdILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxJQUFaLElBQW9CLGtCQUFqQzs7QUFDQSxJQUFNQyxJQUFJLEdBQUdQLE9BQU8sQ0FBRSxNQUFGLENBQXBCOztBQUNBLElBQU1RLEVBQUUsR0FBR1IsT0FBTyxDQUFFLElBQUYsQ0FBbEI7O0FBQ0EsSUFBTVMsTUFBTSxHQUFHVCxPQUFPLENBQUMsUUFBRCxDQUF0Qjs7QUFDQSxJQUFNVSxNQUFNLEdBQUdELE1BQU0sQ0FBQyxFQUFELENBQXJCOztBQUNBLElBQU1FLE9BQU8sR0FBR1gsT0FBTyxDQUFD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O0FBQ3JCMEIsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLHVDQUEyQ3ZCLElBQTNDLGNBQW1ESixJQUFuRDtBQUNELENBRkQiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHByZXNzID0gcmVxdWlyZSAoJ2V4cHJlc3MnKTtcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5jb25zdCBob3N0ID0gcHJvY2Vzcy5lbnYuSE9TVCB8fCAnaHR0cDovL2xvY2FsaG9zdCdcbmNvbnN0IHBhdGggPSByZXF1aXJlICgncGF0aCcpO1xuY29uc3QgZnMgPSByZXF1aXJlICgnZnMnKTtcbmNvbnN0IG11bHRlciA9IHJlcXVpcmUoJ211bHRlcicpO1xuY29uc3QgdXBsb2FkID0gbXVsdGVyKHt9KTtcbmNvbnN0IGhlYWRlcnMgPSByZXF1aXJlKCcuLi9jb3JzLmpzb24nKTtcbmNvbnN0IHsgaW5zZXJ0Um93IH0gPSByZXF1aXJlKCcuLi9kYi9pbmRleC5qcycpO1xuY29uc3Qgc3RvY2t4QVBJID0gcmVxdWlyZSgnc3RvY2t4LWFwaScpO1xuY29uc3Qgc3RvY2tYID0gbmV3IHN0b2NreEFQSSgpO1xuXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vcHVibGljL2Rpc3QnKSkpO1xuXG5cbmFwcC5wb3N0KCcvbG9naW4nLCB1cGxvYWQubm9uZSgpLCAocmVxLCByZXMpID0+IHtcbiAgbGV0IHVzZXJuYW1lID0gcmVxLmJvZHkudXNlcm5hbWU7XG5cbiAgaW5zZXJ0Um93KGBTRUxFQ1QgaWQgRlJPTSB1c2VycyBXSEVSRSB1c2VybmFtZSA9ICcke3VzZXJuYW1lfSdgLCAocmVzdWx0KSA9PiB7XG4gICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDApIHtcbiAgICAgIGluc2VydFJvdyhgSU5TRVJUIElOVE8gdXNlcnMgKHVzZXJuYW1lKSBWQUxVRVMgKCcke3VzZXJuYW1lfScpYCwgKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdOYW1lIGV4aXN0cyEnKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJlcy5zZXQoaGVhZGVycyk7XG4gIHJlcy5zZW5kU3RhdHVzKDIwMCk7XG59KTtcblxuYXBwLnBvc3QoJy9zZWFyY2gnLCB1cGxvYWQubm9uZSgpLCAocmVxLCByZXMpID0+IHtcbiAgbGV0IHNlYXJjaCA9IHJlcS5ib2R5LnNlYXJjaDtcblxuICAoYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwcm9kdWN0TGlzdCA9IGF3YWl0IHN0b2NrWC5uZXdTZWFyY2hQcm9kdWN0cyhzZWFyY2gsIHtcbiAgICAgICAgbGltaXQ6IDIwXG4gICAgICB9KTtcbiAgICAgIHJlcy5zZXQoaGVhZGVycyk7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHByb2R1Y3RMaXN0IH0pXG4gICAgfVxuICAgIGNhdGNoKGUpe1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnICsgZS5tZXNzYWdlKTtcbiAgICB9XG4gIH0pKCk7XG59KTtcblxuYXBwLnBvc3QoJy9yZW5kZXJmYXZvcml0ZScsIHVwbG9hZC5ub25lKCksIChyZXEsIHJlcykgPT4ge1xuICBsZXQgY3VycmVudHVzZXIgPSByZXEuYm9keS5uYW1lXG4gIGNvbnNvbGUubG9nKCdjdXJyZW50dXNlcjogJywgY3VycmVudHVzZXIpXG4gIGluc2VydFJvdyhgU0VMRUNUICogRlJPTSBGQVZPUklURVMgV0hFUkUgdXNlcl9pZCA9IChTRUxFQ1QgaWQgRlJPTSB1c2VycyBXSEVSRSB1c2VybmFtZSA9ICcke2N1cnJlbnR1c2VyfScgKWAsIChyZXN1bHQpID0+IHtcbiAgICByZXN1bHQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgIHJlcy5zZXQoaGVhZGVycyk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXN1bHQgfSlcbiAgfSlcbn0pO1xuXG5hcHAucG9zdCgnL2Zhdm9yaXRlJywgdXBsb2FkLm5vbmUoKSwgKHJlcSwgcmVzKSA9PiB7XG4gIGxldCBmYXZvcml0ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVxLmJvZHkpKTtcbiAgbGV0IHVzZXJuYW1lID0gZmF2b3JpdGUudXNlcm5hbWVcbiAgaWYgKGZhdm9yaXRlLnN0YXR1cyA9PT0gJ3RydWUnKSB7XG4gICAgY29uc29sZS5sb2coJyoqKipFbnRyeSEhKioqKicpXG4gICAgaW5zZXJ0Um93KGBJTlNFUlQgSU5UTyBmYXZvcml0ZXMgKG5hbWUsIHVybCwgbWVkaWEsIGhpZ2hlc3RiaWQsIGxhc3RzYWxlLCB1c2VyX2lkKSBWQUxVRVMgKCcke2Zhdm9yaXRlLm5hbWV9JywgJyR7ZmF2b3JpdGUudXJsfScsICcke2Zhdm9yaXRlLm1lZGlhfScsICcke2Zhdm9yaXRlLmhpZ2hlc3RCaWR9JywgJyR7ZmF2b3JpdGUubGFzdFNhbGV9JywgKFNFTEVDVCBpZCBGUk9NIHVzZXJzIFdIRVJFIHVzZXJuYW1lID0gJyR7dXNlcm5hbWV9JykpYCwgKHJlc3VsdCkgPT4ge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChmYXZvcml0ZS5zdGF0dXMgPT09ICdmYWxzZScgKSB7XG4gICAgY29uc29sZS5sb2coJyoqKipEZWxldGlvbiEhKioqKicpXG4gICAgaW5zZXJ0Um93KGBERUxFVEUgRlJPTSBmYXZvcml0ZXMgV0hFUkUgdXNlcl9pZCA9IChTRUxFQ1QgaWQgRlJPTSB1c2VycyBXSEVSRSB1c2VybmFtZSA9ICcke3VzZXJuYW1lfScpIEFORCBuYW1lID0gJyR7ZmF2b3JpdGUubmFtZX0nYCwgKHJlc3VsdCkgPT4ge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KVxuICB9XG5cbiAgcmVzLnNldChoZWFkZXJzKTtcbiAgcmVzLnNlbmRTdGF0dXMoMjAwKTtcbn0pO1xuXG5cblxuXG5cblxuXG5cblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBFeHByZXNzIHNlcnZlciBsaXN0ZW5pbmcgb24gJHtob3N0fToke3BvcnR9YClcbn0pOyJdfQ==