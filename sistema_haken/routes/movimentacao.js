var express = require('express');
var router = express.Router();

//Obtem controllers
var controller_movimentacao = require('../controllers/controller_movimentacao');
var controller_equipamento = require('../controllers/controller_equipamento');

router.get('/', function(req, res, next) {
  /* if(req.session.usuario == null) {
    res.redirect("/usuario/login");
    return;
  } */

  controller_equipamento.listar(function(err, resultsEquip) {
    res.render('movimentacao', {
      usuario: 'Vitor',  //req.session.nome
      dataEquipamento: resultsEquip
    });
  });
});

module.exports = router;
