var express = require('express');
var router = express.Router();
var reto = require('../model/reto');

    consultar=function(req, res) {
      reto.get(res);
    };
    consultar2=function(req, res) {
      console.log("router");
      reto.get2(req.params.id_escritorio, res);
    };
    consultarportrivia=function(req,res){
       console.log(req.params);
       reto.consultarportrivia(req.params,res);
    }
    crear=function(req, res) {
      reto.create(req.body, res);
    };
 
    actualizar=function(req, res) {
      reto.update(req.body, res);
    };
 
    eliminar=function(req, res) {
      reto.delete(req.params.id, res);
    };

    router.get('/',consultar);
    router.get('/:id_escritorio',consultar2);
    router.get('/:id_trivia/:id_tema/:id_escritorio',consultarportrivia);
    router.post('/',crear);
    router.put('/',actualizar);
    router.delete('/:id',eliminar)
  
    module.exports = router;