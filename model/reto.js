var connection = require('../connection');
 
function reto() {
	this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from reto', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };
  this.get2 = function(id_escritorio,res) {
    connection.acquire(function(err, con) {
      con.query('select * from reto where id_escritorio ='+id_escritorio, function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };
  this.consultarportrivia = function(entrada, res) {
          console.log("entrada: "+entrada.id_trivia);
          connection.acquire(function(err, con) {
            con.query('select * from reto where id_trivia = '+entrada.id_trivia+' and id_tema= '+entrada.id_tema+' and id_escritorio= '+entrada.id_escritorio+';', function(err, result) {
             con.release();
             res.send(result);
            });
          });
  };
  this.create = function(reto, res) {
      connection.acquire(function(err, con) {
        con.query("insert into reto values("+reto.id+","+reto.id_escritorio+","+reto.id_trivia+","+reto.puntaje
          +","+reto.intento+","+reto.medallin+","+reto.id_tema+");", function(err, result) {
          con.release();
          if (err) {
            res.send({status: 1, message: 'reto creation failed'});
      
          } else {
            console.log(reto);
            res.send({status: 0, message: 'reto created successfully'});
    
          }
        });
      });
    };

    //MODIFICAR UPDATE
    this.update = function(reto, res) {
        console.log("reto: ");
        console.log(reto);
        connection.acquire(function(err, con) {
          con.query('update reto set puntaje='+reto.puntaje+', intento='+reto.intento+' where id='+reto.id+';', function(err, result) {
            con.release();
            if (err) {
              res.send({status: 1, message: 'reto update failed'});
            } else {
              res.send({status: 0, message: 'reto updated successfully'});
            }
          });
        });
      };

      this.delete = function(id, res) {
          connection.acquire(function(err, con) {
            con.query('delete from reto where id = ?', id, function(err, result) {
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
module.exports = new reto();