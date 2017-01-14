var express = require('express');
var router = express.Router();
var escritorio = require('../model/escritorio');

    consultar=function(req, res) {
      escritorio.get(req.params.id_usuario, res);
    };

    consultarMayorP=function(req, res) {
      escritorio.getMayorP(res);
    };
 
    crear=function(req, res) {
      escritorio.create(req.body, res);
    };
 
    actualizar=function(req, res) {
      escritorio.update(req.body, res);
    };
 
    eliminar=function(req, res) {
      escritorio.delete(req.params.id, res);
    };

    router.get('/:id_usuario',consultar);
    router.get('/',consultarMayorP);
    router.post('/',crear);
    router.put('/',actualizar);
    router.delete('/:id',eliminar)
  
    module.exports = router;