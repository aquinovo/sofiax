var connection = require('../connection');
 
function escritorio() {
	this.get = function(id_usuario,res) {
    console.log(id_usuario);
    connection.acquire(function(err, con) {
      con.query('select * from escritorio where id_usuario = '+id_usuario+';', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.getMayorP = function(res) {
    connection.acquire(function(err, con) {
      con.query('SELECT SUM(puntaje) as puntaje FROM reto GROUP BY id_escritorio order by puntaje desc limit 1;', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.create = function(escritorio, res) {
      connection.acquire(function(err, con) {
        con.query("insert into escritorio values("+escritorio.id+","+escritorio.id_usuario+","+escritorio.id_avatar+","
          +escritorio.puntos+","+escritorio.calificacion_final+");", function(err, result) {
          con.release();
          if (err) {
            res.send({status: 1, message: 'escritorio creation failed'});
      
          } else {
            console.log(escritorio);
            res.send({status: 0, message: 'escritorio created successfully'});
    
          }
        });
      });
    };

    //MODIFICAR UPDATE
    this.update = function(escritorio, res) {
        connection.acquire(function(err, con) {
          var text= 'update escritorio set id_avatar='+escritorio.id_avatar+' where id_usuario= '+escritorio.id_alumno+';';
          if(undefined==escritorio.id_avatar){
            text= 'update escritorio set puntos='+escritorio.puntaje+' where id_usuario= '+escritorio.id_usuario+';';
          }


          con.query(text, function(err, result) {
            con.release();
            if (err) {
              res.send({status: 1, message: 'escritorio update failed'});
            } else {
              res.send({status: 0, message: 'escritorio updated successfully'});
            }
          });
        });
      };


      this.delete = function(id, res) {
          connection.acquire(function(err, con) {
            con.query('delete from escritorio where id = ?', id, function(err, result) {
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
module.exports = new escritorio();