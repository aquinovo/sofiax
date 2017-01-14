var connection = require('../connection');
 
function respuesta() {
	this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from respuesta', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.consultarporid = function(entrada, res) {
          console.log("entrada: "+entrada.id_trivia);
          connection.acquire(function(err, con) {
            con.query('select * from respuesta where id_trivia = '+entrada.id_trivia+' and solucion= '+entrada.solucion+' ORDER BY RAND() LIMIT 2;', function(err, result) {
             con.release();
             res.send(result);
            });
          });
  };

  this.create = function(respuesta, res) {
      connection.acquire(function(err, con) {
        con.query("insert into respuesta values("+respuesta.id+",'"+respuesta.opcion+"',"+respuesta.solucion
          +","+respuesta.id_trivia+");", function(err, result) {
          con.release();
          if (err) {
            res.send({status: 1, message: 'respuesta creation failed'});
      
          } else {
            console.log(respuesta);
            res.send({status: 0, message: 'respuesta created successfully'});
    
          }
        });
      });
    };

    //MODIFICAR UPDATE
    this.update = function(respuesta, res) {
        connection.acquire(function(err, con) {
          con.query("update respuesta set name='"+respuesta.name+"' where id="+respuesta.id+";", function(err, result) {
            con.release();
            if (err) {
              res.send({status: 1, message: 'respuesta update failed'});
            } else {
              res.send({status: 0, message: 'respuesta updated successfully'});
            }
          });
        });
      };

      this.delete = function(id, res) {
          connection.acquire(function(err, con) {
            con.query('delete from respuesta where id = ?', id, function(err, result) {
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
module.exports = new respuesta();