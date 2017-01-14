var mysql = require('mysql');
 
function Connection() {
  this.pool = null;
 
/*
  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host: 'us-cdbr-iron-east-04.cleardb.net',
      user: 'bb5e8f2bc80029',
      password: '0ce2ae3a',
      database: 'heroku_b0df99b7d6348df'
    });
  };
*/

  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host: 'localhost',
      user: 'root',
      password: 'velasco',
      database: 'sofiax',
    });
  };
 
  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      callback(err, connection);
      if (err)
       {
           console.log("Error de conexión" + err);
           return;
       }else
        {
            console.log("Conexión exitosa :)");
        }
    });
  };
}
 
module.exports = new Connection();