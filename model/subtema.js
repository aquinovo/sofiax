var connection = require('../connection');
 
function subtema() {
	this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from subtema', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.create = function(subtema, res) {
      connection.acquire(function(err, con) {
        con.query("insert into subtema values("+subtema.id+",'"+subtema.nombre+"',"+subtema.num_subtema+","+
          subtema.id_tema+");", function(err, result) {
          con.release();
          if (err) {
            res.send({status: 1, message: 'subtema creation failed'});
      
          } else {
            console.log(subtema);
            res.send({status: 0, message: 'subtema created successfully'});
    
          }
        });
      });
    };

    this.update = function(subtema, res) {
        connection.acquire(function(err, con) {
          con.query("update subtema set name='"+subtema.name+"' where id="+subtema.id+";", function(err, result) {
            con.release();
            if (err) {
              res.send({status: 1, message: 'subtema update failed'});
            } else {
              res.send({status: 0, message: 'subtema updated successfully'});
            }
          });
        });
      };

      this.delete = function(id, res) {
          connection.acquire(function(err, con) {
            con.query('delete from subtema where id = ?', id, function(err, result) {
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
module.exports = new subtema();