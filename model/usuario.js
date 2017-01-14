var connection = require('../connection');
 
function usuario() {
	this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from usuario', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.getusuario = function(nombre_usuario, res) {
          console.log("nombre_usuario: "+nombre_usuario);
          connection.acquire(function(err, con) {
            con.query("select * from usuario where nombre_usuario = '"+nombre_usuario+"';", function(err, result) {
             con.release();
             res.send(result);
            });
          });
        };
  this.getusuarioporid = function(id, res) {
          console.log("id: "+id);
          connection.acquire(function(err, con) {
            con.query("select * from usuario where id = '"+id+"';", function(err, result) {
             con.release();
             res.send(result);
            });
          });
        };

  this.create = function(usuario, res) {
      connection.acquire(function(err, con) {
        console.log(usuario);
        con.query("insert into usuario values("+usuario.id+",'"+usuario.nombre+"','"+usuario.apellidos+"','"+usuario.nombre_usuario+
          "','"+usuario.contrasena+"','"+usuario.sexo+"');", function(err, result) {
          con.release();
          if (err) {
            res.send({status: 1, message: 'usuario creation failed'});
      
          } else {
            console.log(usuario);
            res.send({status: 0, message: 'usuario created successfully'});
    
          }
        });
      });
    };

    //MODIFICAR UPDATE
    this.update = function(usuario, res) {
        connection.acquire(function(err, con) {
          con.query("update usuario set name='"+usuario.name+"' where id="+usuario.id+";", function(err, result) {
            con.release();
            if (err) {
              res.send({status: 1, message: 'usuario update failed'});
            } else {
              res.send({status: 0, message: 'usuario updated successfully'});
            }
          });
        });
      };

      this.delete = function(id, res) {
          connection.acquire(function(err, con) {
            con.query('delete from usuario where id = ?', id, function(err, result) {
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
module.exports = new usuario();