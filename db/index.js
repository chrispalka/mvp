const database = 'sneakers';
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host    : 'localhost',
  user    : 'root',
  password: '',
  database: database,
});

connection.connect();


var insertRow = function(callback) {
  connection.query(query, (err) => {
    if (err) {
      console.log('Error querying database: ', err)
    } else {
      console.log('Query fulfilled!');
    }
  });
}

module.exports = {
  insertRow: insertRow
}