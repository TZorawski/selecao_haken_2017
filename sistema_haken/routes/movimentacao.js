var express = require('express');
var router = express.Router();

//Obtem controllers
var controller_movimentacao = require('../controllers/controller_movimentacao');
var controller_equipamento = require('../controllers/controller_equipamento');
var controller_sala = require('../controllers/controller_sala');

router.get('/', function(req, res, next) {
  if(req.session.usuario == null) {
    res.redirect("/usuario/login");
    return;
  } 

  controller_equipamento.listar(function(err, resultsEquip) {
    controller_sala.listar(function(err, resultsSala) {
      res.render('movimentacao', {
        usuario: req.session.nome,
        dataEquipamento: resultsEquip,
        dataSala: resultsSala,
        dataEscolhidos: '',
        message_status: '',
        message: '',
        scriptMov: ''
      });
    });
  });
});

router.get('/:id', controller_equipamento.listar_modal_movimento);

router.post('/', controller_movimentacao.mover);

module.exports = router;
