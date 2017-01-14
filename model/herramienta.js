var connection = require('../connection');
 
function herramienta() {
	this.get = function(id_tema, res) {
    connection.acquire(function(err, con) {
      con.query('select * from herramienta where id_tema='+id_tema+';', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.create = function(herramienta, res) {
      connection.acquire(function(err, con) {
        con.query("insert into herramienta values("+herramienta.id+",'"+herramienta.diapositiva+"','"+herramienta.video
          +"',"+herramienta.id_tema+","+herramienta.id_subtema+");", function(err, result) {
          con.release();
          if (err) {
            res.send({status: 1, message: 'herramienta creation failed'});
      
          } else {
            console.log(herramienta);
            res.send({status: 0, message: 'herramienta created successfully'});
    
          }
        });
      });
    };

    //MODIFICAR UPDATE
    this.update = function(herramienta, res) {
        connection.acquire(function(err, con) {
          con.query("update herramienta set name='"+herramienta.name+"' where id="+herramienta.id+";", function(err, result) {
            con.release();
            if (err) {
              res.send({status: 1, message: 'herramienta update failed'});
            } else {
              res.send({status: 0, message: 'herramienta updated successfully'});
            }
          });
        });
      };

      this.delete = function(id, res) {
          connection.acquire(function(err, con) {
            con.query('delete from herramienta where id = ?', id, function(err, result) {
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
module.exports = new herramienta();