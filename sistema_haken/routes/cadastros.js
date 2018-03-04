var express = require('express');
var router = express.Router();

//Obtem controllers
var controller_equipamento = require('../controllers/controller_equipamento');
var controller_sala = require('../controllers/controller_sala');

/*############ EQUIPAMENTOS ############*/

//Abre cadastro de equipamentos.
router.get('/equipamento', function(req, res, next) {
    res.render('cadastros', {
        title: 'Equipamentos',
        scriptButton: '#cad-equipamento',
        scriptTab: '#equipamento-tab',
        dataSalas: controller_sala.listar(),
        message_status: '',
        message: ''
    });
});

//Cadastra Equipamentos.
router.post('/cadastrarEquipamento', controller_equipamento.criar_post);




/*############ SALAS ############*/

//Abre cadastro de salas.
router.get('/sala', function(req, res, next) {
  res.render('cadastros', {
      title: 'Salas/Laboratórios',
      scriptButton: '#cad-sala',
      scriptTab: '#sala-tab',
      message_status: '',
      message: ''
    });
});

module.exports = router;
