var express = require('express');
var router = express.Router();
var bloque = require('../model/bloque');

    consultar=function(req, res) {
      bloque.get(res);
    };
 
    crear=function(req, res) {
      bloque.create(req.body, res);
    };
 
    actualizar=function(req, res) {
      bloque.update(req.body, res);
    };
 
    eliminar=function(req, res) {
      bloque.delete(req.params.id, res);
    };

    router.get('/',consultar);
    router.post('/',crear);
    router.put('/',actualizar);
    router.delete('/:id',eliminar)
  
    module.exports = router;