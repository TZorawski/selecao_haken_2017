var express = require('express');
var router = express.Router();

var controller_movimentacao = require('../controllers/controller_movimentacao');
var controller_equipamento = require('../controllers/controller_equipamento');

// Abre página de empréstimos.
router.get('/', function(req, res, next) {
  controller_equipamento.listar(function(err, resultsEquip) {
    res.render('emprestimos', {
      usuario: 'Vitor',
      dataEquipamento: resultsEquip
    });
  });
});

module.exports = router;
