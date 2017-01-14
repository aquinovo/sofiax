var express = require('express');
var router = express.Router();
var respuesta = require('../model/respuesta');

    consultar=function(req, res) {
      respuesta.get(res);
    };
    consultarporid=function(req,res){
      console.log(req.params);
       respuesta.consultarporid(req.params,res);
    }
    crear=function(req, res) {
      respuesta.create(req.body, res);
    };
 
    actualizar=function(req, res) {
      respuesta.update(req.body, res);
    };
 
    eliminar=function(req, res) {
      respuesta.delete(req.params.id, res);
    };

    router.get('/',consultar);
    router.get('/:id_trivia/:solucion',consultarporid);
    router.post('/',crear);
    router.put('/',actualizar);
    router.delete('/:id',eliminar)
  
    module.exports = router;