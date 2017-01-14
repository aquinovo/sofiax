var connection = require('../connection');
 
function bloque() {
	this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from bloque', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.create = function(bloque, res) {
      connection.acquire(function(err, con) {
        con.query("insert into bloque values("+bloque.id+",'"+bloque.nombre+"',"+bloque.num_bloque+");", function(err, result) {
          con.release();
          if (err) {
            res.send({status: 1, message: 'bloque creation failed'});
      
          } else {
            console.log(bloque);
            res.send({status: 0, message: 'bloque created successfully'});
    
          }
        });
      });
    };

    //MODIFICAR UPDATE
    this.update = function(bloque, res) {
        connection.acquire(function(err, con) {
          con.query("update bloque set nombre='"+bloque.nombre+"' where id="+bloque.id+";", function(err, result) {
            con.release();
            if (err) {
              res.send({status: 1, message: 'bloque update failed'});
            } else {
              res.send({status: 0, message: 'bloque updated successfully'});
            }
          });
        });
      };

      this.delete = function(id, res) {
          connection.acquire(function(err, con) {
            con.query('delete from bloque where id = ?', id, function(err, result) {
              con.release();
              if (err) {
                res.send({status: 1, message: 'Failed to delete'});
              } else {
                console.log(id);
                res.send({status: 0, message: 'Deleted successfully'});
              }
            });
          });
        };
 
}
module.exports = new bloque();