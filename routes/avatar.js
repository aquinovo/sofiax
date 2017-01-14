var express = require('express');
var router = express.Router();
var avatar = require('../model/avatar');

    consultar=function(req, res) {
      avatar.get(req.params.id_avatar,res);
    };
    consultatodo=function(req, res) {
      avatar.gettodo(res);
    };
    crear=function(req, res) {
      avatar.create(req.body, res);
    };
 
    actualizar=function(req, res) {
      avatar.update(req.body, res);
    };
 
    eliminar=function(req, res) {
      avatar.delete(req.params.id, res);
    };
    router.get('/',consultatodo);
    router.get('/:id_avatar',consultar);
    router.post('/',crear);
    router.put('/',actualizar);
    router.delete('/:id',eliminar)
  
    module.exports = router;