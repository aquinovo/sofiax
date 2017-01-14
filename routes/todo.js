var express = require('express');
var router = express.Router();
var todo = require('../model/todo'); //nombre tabla

    consultar=function(req, res) {
      todo.get(res);
    };
 
    crear=function(req, res) {
      todo.create(req.body, res);
    };
 
    actualizar=function(req, res) {
      todo.update(req.body, res);
    };
 
    eliminar=function(req, res) {
      todo.delete(req.params.id, res);
    };

    router.get('/',consultar);
    router.post('/',crear);
    router.put('/',actualizar);
    router.delete('/:id',eliminar)
  
    module.exports = router;