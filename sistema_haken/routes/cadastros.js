var express = require('express');
var router = express.Router();

//Obtem controllers
var controller_equipamento = require('../controllers/controller_equipamento');
var controller_sala = require('../controllers/controller_sala');

/*############ EQUIPAMENTOS ############*/

//Abre cadastro de equipamentos.
router.get('/equipamento', function(req, res, next) {
  if(req.session.usuario == null) {
    res.redirect("/usuario/login");
    return;
  }

  controller_sala.listar(function(err, resultsSala) {
    res.render('cadastros', {
      title: 'Equipamentos',
      usuario: req.session.nome,
      scriptButton: '#cad-equipamento',
      scriptTab: '#equipamento-tab',
      dataSala: resultsSala,
      message_status: '',
      message: ''
    });
  });
});

//Cadastra Equipamento.
router.post('/cadastrarEquipamento', controller_equipamento.criar_post);

/*############ SALAS ############*/

//Abre cadastro de salas.
router.get('/sala', function(req, res, next) {
  if(req.session.usuario == null) {
    res.redirect("/usuario/login");
    return;
  }

  controller_sala.listar(function(err, resultsSala) {
    res.render('cadastros', {
      title: 'Salas/Laboratórios',
      usuario: req.session.nome,
      scriptButton: '#cad-sala',
      scriptTab: '#sala-tab',
      dataSala: resultsSala,
      message_status: '',
      message: ''
    });
  });
});

router.post('/cadastrarSala', controller_sala.criar_post);

module.exports = router;
