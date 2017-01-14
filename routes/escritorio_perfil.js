var express = require('express');
var router = express.Router();
var escritorio_perfil = require('../model/escritorio_perfil');

    consultar=function(req, res) {
      escritorio_perfil.get(res);
    };
    consultar2=function(req, res) {
      escritorio_perfil.get2(req.params.id_tema, res);
    };
    consultarTareasRealizadas = function (req, res) {
        escritorio_perfil.getTareasRealizadas(req.params.id_escritorio, res);
    };
 
    crear=function(req, res) {
      escritorio_perfil.create(req.body, res);
    };
 
    actualizar=function(req, res) {
      escritorio_perfil.update(req.body, res);
    };
 
    eliminar=function(req, res) {
      escritorio_perfil.delete(req.params.id, res);
    };

    router.get('/', consultar);
    router.get('/:id_tema/:uno',consultar2);
    router.get('/:id_escritorio', consultarTareasRealizadas);
    router.post('/',crear);
    router.put('/',actualizar);
    router.delete('/:id',eliminar)
  
    module.exports = router;