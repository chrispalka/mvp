const database = 'sneakers';
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host    : 'localhost',
  user    : 'root',
  password: '',
  database: database,
});

connection.connect();


var insertRow = function(query, callback) {
  connection.query(query, (err, result) => {
    if (err) {
      console.log('Error querying database: ', err)
    } else {
      console.log('Query fulfilled!');
      return callback(result)
    }
  });
}


module.exports = {
  insertRow: insertRow
}