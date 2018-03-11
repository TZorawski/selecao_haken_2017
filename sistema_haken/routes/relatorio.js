var express = require('express');
var router = express.Router();

//Obtem controllers
var controller_sala = require('../controllers/controller_sala');
var controller_equipamento = require('../controllers/controller_equipamento');

// Abre página de relatório.
router.get('/', function(req, res, next) {
  if(req.session.usuario == null) {
    res.redirect("/usuario/login");
    return;
  }

  controller_sala.listar(function(err, resultsSala) {
    controller_equipamento.listar(function(err, resultsEquip) {
      res.render('relatorio', {
        usuario: req.session.nome,
        pesquisaTexto: '',
        scriptRelatorio: '',
        dataSala: resultsSala,
        dataEquip: resultsEquip,
        dataEquipamento: ''
      });
    });
  });
});

router.post('/pesquisar', controller_sala.pesquisar_post);

router.get('/relatar/:sala', controller_equipamento.listarPorSalas);

module.exports = router;
