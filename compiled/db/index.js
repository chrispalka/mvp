"use strict";

var database = 'sneakers';

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: database
});
connection.connect();

var insertRow = function insertRow(query, callback) {
  connection.query(query, function (err, result) {
    if (err) {
      console.log('Error querying database: ', err);
    } else {
      console.log('Query fulfilled!');
      return callback(result);
    }
  });
};

module.exports = {
  insertRow: insertRow
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2RiL2luZGV4LmpzIl0sIm5hbWVzIjpbImRhdGFiYXNlIiwibXlzcWwiLCJyZXF1aXJlIiwiY29ubmVjdGlvbiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwiY29ubmVjdCIsImluc2VydFJvdyIsInF1ZXJ5IiwiY2FsbGJhY2siLCJlcnIiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxRQUFRLEdBQUcsVUFBakI7O0FBQ0EsSUFBTUMsS0FBSyxHQUFRQyxPQUFPLENBQUMsT0FBRCxDQUExQjs7QUFDQSxJQUFNQyxVQUFVLEdBQUdGLEtBQUssQ0FBQ0csZ0JBQU4sQ0FBdUI7QUFDeENDLEVBQUFBLElBQUksRUFBTSxXQUQ4QjtBQUV4Q0MsRUFBQUEsSUFBSSxFQUFNLE1BRjhCO0FBR3hDQyxFQUFBQSxRQUFRLEVBQUUsRUFIOEI7QUFJeENQLEVBQUFBLFFBQVEsRUFBRUE7QUFKOEIsQ0FBdkIsQ0FBbkI7QUFPQUcsVUFBVSxDQUFDSyxPQUFYOztBQUdBLElBQUlDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQVNDLEtBQVQsRUFBZ0JDLFFBQWhCLEVBQTBCO0FBQ3hDUixFQUFBQSxVQUFVLENBQUNPLEtBQVgsQ0FBaUJBLEtBQWpCLEVBQXdCLFVBQUNFLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUN2QyxRQUFJRCxHQUFKLEVBQVM7QUFDUEUsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksMkJBQVosRUFBeUNILEdBQXpDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xFLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0EsYUFBT0osUUFBUSxDQUFDRSxNQUFELENBQWY7QUFDRDtBQUNGLEdBUEQ7QUFRRCxDQVREOztBQVlBRyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZlIsRUFBQUEsU0FBUyxFQUFFQTtBQURJLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGF0YWJhc2UgPSAnc25lYWtlcnMnO1xuY29uc3QgbXlzcWwgICAgICA9IHJlcXVpcmUoJ215c3FsJyk7XG5jb25zdCBjb25uZWN0aW9uID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XG4gIGhvc3QgICAgOiAnbG9jYWxob3N0JyxcbiAgdXNlciAgICA6ICdyb290JyxcbiAgcGFzc3dvcmQ6ICcnLFxuICBkYXRhYmFzZTogZGF0YWJhc2UsXG59KTtcblxuY29ubmVjdGlvbi5jb25uZWN0KCk7XG5cblxudmFyIGluc2VydFJvdyA9IGZ1bmN0aW9uKHF1ZXJ5LCBjYWxsYmFjaykge1xuICBjb25uZWN0aW9uLnF1ZXJ5KHF1ZXJ5LCAoZXJyLCByZXN1bHQpID0+IHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgcXVlcnlpbmcgZGF0YWJhc2U6ICcsIGVycilcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ1F1ZXJ5IGZ1bGZpbGxlZCEnKTtcbiAgICAgIHJldHVybiBjYWxsYmFjayhyZXN1bHQpXG4gICAgfVxuICB9KTtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaW5zZXJ0Um93OiBpbnNlcnRSb3dcbn0iXX0=