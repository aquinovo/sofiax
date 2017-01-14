var connection = require('../connection');
 
function avatar() {
	this.get = function(id_avatar,res) {
    console.log(id_avatar);
    connection.acquire(function(err, con) {
      con.query('select * from avatar where id = '+id_avatar+';', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };
  this.gettodo = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from avatar', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };
  this.create = function(avatar, res) {
      connection.acquire(function(err, con) {
        con.query("insert into avatar values("+avatar.id+",'"+avatar.nombre+"');", function(err, result) {
          con.release();
          if (err) {
            res.send({status: 1, message: 'avatar creation failed'});
      
          } else {
            console.log(avatar);
            res.send({status: 0, message: 'avatar created successfully'});
    
          }
        });
      });
    };

    //MODIFICAR UPDATE
    this.update = function(avatar, res) {
        connection.acquire(function(err, con) {
          con.query("update avatar set nombre='"+avatar.name+"' where id="+avatar.id+";", function(err, result) {
            con.release();
            if (err) {
              res.send({status: 1, message: 'avatar update failed'});
            } else {
              res.send({status: 0, message: 'avatar updated successfully'});
            }
          });
        });
      };

      this.delete = function(id, res) {
          connection.acquire(function(err, con) {
            con.query('delete from avatar where id = ?', id, function(err, result) {
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
module.exports = new avatar();