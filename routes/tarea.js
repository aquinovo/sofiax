var express = require('express');
var router = express.Router();
var tarea = require('../model/tarea');
var multipart = require('connect-multiparty');
router.use(multipart());

    consultar=function(req, res) {
      tarea.get(res);
    };

    consultar2=function(req, res) {
      console.log("router");
      tarea.get2(req.params.id_tema, res);
    };

    consultarTarea = function (req, res) {
        tarea.get2(req.params.id_tema, res);
    };
 
    crear=function(req, res) {
      tarea.create(req.body, res);
    };
 
    actualizar=function(req, res) {
      tarea.update(req.body, res);
    };
 
    eliminar=function(req, res) {
      tarea.delete(req.params.id, res);
    };

    router.get('/', consultar);
    router.get('/:id_tema', consultar2);
    router.get('/:id_tema/:id',consultar2);
    router.post('/upload/:num:tem:tarea', function(req, res) {
      var fs = require('fs');
      var path = req.files.archivo.path;
      var newPath = './views/resourses/Trabajos/Tema'+req.params.tem+'/'+req.files.archivo.name;
      var is = fs.createReadStream(path);
      var os = fs.createWriteStream(newPath);
      is.pipe(os);
      is.on('end', function() {
        //eliminamos el archivo temporal
        fs.unlinkSync(path);
      });
       res.redirect("/dir/feedTareas.html?id="+req.params.num+"&id_tema="+req.params.tem+"&id_tarea="+req.params.tarea);

    });
    router.post('/',crear);
    router.put('/',actualizar);
    router.delete('/:id',eliminar)
  
    module.exports = router;