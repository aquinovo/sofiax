var express = require('express');
var router = express.Router();
var herramienta = require('../model/herramienta');

    consultar=function(req, res) {
      herramienta.get(req.params.id_tema, res);
    };
 
    crear=function(req, res) {
      herramienta.create(req.body, res);
    };
 
    actualizar=function(req, res) {
      herramienta.update(req.body, res);
    };
 
    eliminar=function(req, res) {
      herramienta.delete(req.params.id, res);
    };

    router.get('/:id_tema',consultar);
    router.post('/',crear);
    router.put('/',actualizar);
    router.delete('/:id',eliminar)
  
    module.exports = router;