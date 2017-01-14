var connection = require('../connection');
 
function tarea() {
	this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from tarea', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.get2 = function(id_tema,res) {
    connection.acquire(function(err, con) {
      con.query('select * from tarea where id_tema ='+id_tema, function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.create = function(tarea, res) {
      connection.acquire(function(err, con) {
        con.query("insert into tarea values("+tarea.id+","+tarea.id_tema+",'"+tarea.instrucciones+"','"
          +tarea.criterios+"',"+tarea.porcentaje+",'"+tarea.fecha_limite+"');", function(err, result) {
          con.release();
          if (err) {
            res.send({status: 1, message: 'tarea creation failed'});
      
          } else {
            console.log(tarea);
            res.send({status: 0, message: 'tarea created successfully'});
    
          }
        });
      });
  };

    //MODIFICAR UPDATE
    this.update = function(tarea, res) {
        connection.acquire(function(err, con) {
          con.query("update tarea set name='"+tarea.name+"' where id="+tarea.id+";", function(err, result) {
            con.release();
            if (err) {
              res.send({status: 1, message: 'tarea update failed'});
            } else {
              res.send({status: 0, message: 'tarea updated successfully'});
            }
          });
        });
      };

      this.delete = function(id, res) {
          connection.acquire(function(err, con) {
            con.query('delete from tarea where id = ?', id, function(err, result) {
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
module.exports = new tarea();