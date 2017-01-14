var express = require('express');
var router = express.Router();
var subtema = require('../model/subtema');

    consultar=function(req, res) {
      subtema.get(res);
    };
 
    crear=function(req, res) {
      subtema.create(req.body, res);
    };
 
    actualizar=function(req, res) {
      subtema.update(req.body, res);
    };
 
    eliminar=function(req, res) {
      subtema.delete(req.params.id, res);
    };

    router.get('/',consultar);
    router.post('/',crear);
    router.put('/',actualizar);
    router.delete('/:id',eliminar)
  
    module.exports = router;