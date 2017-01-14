var connection = require('../connection');
 
function tema() {
	this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from tema', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.consultarporid = function(id_tema, res) {
          console.log("id: "+id_tema);
          connection.acquire(function(err, con) {
            con.query("select * from tema where id = '"+id_tema+"';", function(err, result) {
             con.release();
             res.send(result);
            });
          });
  };

  this.create = function(tema, res) {
      connection.acquire(function(err, con) {
        con.query("insert into tema values("+tema.id+",'"+tema.nombre+"',"+tema.id_bloque+","
          +tema.num_tema+","+tema.num_pregunta+");", function(err, result) {
          con.release();
          if (err) {
            res.send({status: 1, message: 'tema creation failed'});
      
          } else {
            console.log(tema);
            res.send({status: 0, message: 'tema created successfully'});
    
          }
        });
      });
    };

    //MODIFICAR UPDATE
    this.update = function(tema, res) {
        connection.acquire(function(err, con) {
          con.query("update tema set name='"+tema.name+"' where id="+tema.id+";", function(err, result) {
            con.release();
            if (err) {
              res.send({status: 1, message: 'tema update failed'});
            } else {
              res.send({status: 0, message: 'tema updated successfully'});
            }
          });
        });
      };

      this.delete = function(id, res) {
          connection.acquire(function(err, con) {
            con.query('delete from tema where id = ?', id, function(err, result) {
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
module.exports = new tema();