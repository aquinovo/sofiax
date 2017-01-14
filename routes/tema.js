var express = require('express');
var router = express.Router();
var tema = require('../model/tema');

    consultar=function(req, res) {
      tema.get(res);
    };
    
    consultarporid=function(req,res){
       tema.consultarporid(req.params.id_tema,res);
    }
    crear=function(req, res) {
      tema.create(req.body, res);
    };
 
    actualizar=function(req, res) {
      tema.update(req.body, res);
    };
 
    eliminar=function(req, res) {
      tema.delete(req.params.id, res);
    };

    router.get('/',consultar);
    router.get('/:id_tema',consultarporid);
    router.post('/',crear);
    router.put('/',actualizar);
    router.delete('/:id',eliminar)
  
    module.exports = router;