var express = require('express');
var router = express.Router();

//Obtem controllers
var controller_movimentacao = require('../controllers/controller_movimentacao');
var controller_equipamento = require('../controllers/controller_equipamento');

// Abre página de empréstimos.
router.get('/', function(req, res, next) {
  if(req.session.usuario == null) {
    res.redirect("/usuario/login");
    return;
  } 

  controller_equipamento.listar(function(err, resultsEquip) {
    res.render('emprestimos', {
      usuario: req.session.nome,
      dataEquipamento: resultsEquip,
      dataEscolhidos: '',
      message_status: '',
      message: '',
      scriptEmp: ''
    });
  });
});

router.get('/:id', controller_equipamento.listar_modal_emprestimo);

router.post('/', controller_movimentacao.emprestar);

module.exports = router;
