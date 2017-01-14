var express = require('express');
var router = express.Router();
var trivia = require('../model/trivia');

    consultar=function(req, res) {
      trivia.get(res);
    };
    consultarporid=function(req,res){
       trivia.consultarporid(req.params.id_tema,res);
    }
 
    crear=function(req, res) {
      trivia.create(req.body, res);
    };
 
    actualizar=function(req, res) {
      trivia.update(req.body, res);
    };
 
    eliminar=function(req, res) {
      trivia.delete(req.params.id, res);
    };

    router.get('/',consultar);
    router.get('/:id_tema',consultarporid);
    router.post('/',crear);
    router.put('/',actualizar);
    router.delete('/:id',eliminar)
  
    module.exports = router;