var connection = require('../connection');
 
function trivia() {
	this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from trivia', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.consultarporid = function(id_tema, res) {
          console.log("id_tema trivia: "+id_tema);
          connection.acquire(function(err, con) {
            con.query("select * from trivia where id_tema = '"+id_tema+"';", function(err, result) {
             con.release();
             res.send(result);
            });
          });
  };

  this.create = function(trivia, res) {
      connection.acquire(function(err, con) {
        con.query("insert into trivia values("+trivia.id+",'"+trivia.pregunta+"',"
          +trivia.id_tema+","+trivia.id_subtema+");", function(err, result) {
          con.release();
          if (err) {
            res.send({status: 1, message: 'trivia creation failed'});
      
          } else {
            console.log(trivia);
            res.send({status: 0, message: 'trivia created successfully'});
    
          }
        });
      });
    };

    //MODIFICAR UPDATE
    this.update = function(trivia, res) {
        connection.acquire(function(err, con) {
          con.query("update trivia set name='"+trivia.name+"' where id="+trivia.id+";", function(err, result) {
            con.release();
            if (err) {
              res.send({status: 1, message: 'trivia update failed'});
            } else {
              res.send({status: 0, message: 'trivia updated successfully'});
            }
          });
        });
      };

      this.delete = function(id, res) {
          connection.acquire(function(err, con) {
            con.query('delete from trivia where id = ?', id, function(err, result) {
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
module.exports = new trivia();