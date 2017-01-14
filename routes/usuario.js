var express = require('express');
var router = express.Router();
var usuario = require('../model/usuario');

    consultar=function(req, res) {
      usuario.get(res);
    };

    consultarusuario=function(req, res) {
      usuario.getusuario(req.params.nombre_usuario,res);
    };

    consultaporid=function(req, res) {
      usuario.getusuarioporid(req.params.id,res);
    };
 
    crear=function(req, res) {
      usuario.create(req.body, res);
    };
 
    actualizar=function(req, res) {
      usuario.update(req.body, res);
    };
 
    eliminar=function(req, res) {
      usuario.delete(req.params.id, res);
    };

    router.get('/',consultar);
    router.get('/:nombre_usuario',consultarusuario);
    router.get('/:id/:num',consultaporid);
    router.post('/',crear);
    router.put('/',actualizar);
    router.delete('/:id',eliminar)
  
    module.exports = router;
