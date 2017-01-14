var connection = require('../connection');
 
function escritorio_perfil() {
	this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from escritorio_perfil', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.get2 = function(id_tema,res) {
    connection.acquire(function(err, con) {
      con.query('select *from escritorio_perfil where id_tema ='+id_tema, function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.create = function(escritorio_perfil, res) {
      connection.acquire(function(err, con) {
        con.query("insert into escritorio_perfil values("+escritorio_perfil.id+","+escritorio_perfil.id_escritorio+","+escritorio_perfil.id_tema
          +","+escritorio_perfil.id_tarea+","+escritorio_perfil.calificacion+",'"+escritorio_perfil.fecha_entrega+"');", function(err, result) {
          con.release();
          if (err) {
            res.send({status: 1, message: 'escritorio_perfil creation failed'});
      
          } else {
            console.log(escritorio_perfil);
            res.send({status: 0, message: 'escritorio_perfil created successfully'});
    
          }
        });
      });
    };


  this.getTareasRealizadas = function (id_escritorio, res) {
      connection.acquire(function (err, con) {
          con.query("select * from escritorio_perfil where id_escritorio = '" + id_escritorio + "';", function (err, result) {
              con.release();
              res.send(result);
          });
      });
  };

    //MODIFICAR UPDATE
    this.update = function(escritorio_perfil, res) {
        connection.acquire(function(err, con) {
          con.query("update escritorio_perfil set name='"+escritorio_perfil.name+"' where id="+escritorio_perfil.id+";", function(err, result) {
            con.release();
            if (err) {
              res.send({status: 1, message: 'escritorio_perfil update failed'});
            } else {
              res.send({status: 0, message: 'escritorio_perfil updated successfully'});
            }
          });
        });
      };

      this.delete = function(id, res) {
          connection.acquire(function(err, con) {
            con.query('delete from escritorio_perfil where id = ?', id, function(err, result) {
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
module.exports = new escritorio_perfil();