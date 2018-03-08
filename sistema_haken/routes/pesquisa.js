var controller_equipamento = require('../controllers/controller_equipamento');
var controller_sala = require('../controllers/controller_sala');

var express = require('express');
var router = express.Router();

// Abre página de pesquisa.
router.get('/', function(req, res, next) {
  controller_equipamento.listar(function(err, resultsEquip) {
    controller_sala.listar(function(err, resultsSala) {
console.log('alo', resultsSala);
      res.render('pesquisa', {
        usuario: 'Vitor',
        scriptEdit: '',
        dataEquipamento: resultsEquip,
        dataSala: resultsSala,
        message_status: '',
        message: '',
        dataEquipEdit: '',
        dataSalaEdit: ''
      });
    });
  });
});

// Remove Equipamento.
router.get('/removerEquipamento/:id', controller_equipamento.remover_get);

// Remove Sala.
router.get('/removerSala/:id', controller_sala.remover_get);

// Editar Equipamento.
router.get('/edicaoEquipamento/:id', controller_equipamento.edicao_get);
router.post('/editarEquipamento', controller_equipamento.editar_post);

// Editar Sala.
router.get('/edicaoSala/:id', controller_sala.edicao_get);
router.post('/editarSala', controller_sala.editar_post);

module.exports = router;
