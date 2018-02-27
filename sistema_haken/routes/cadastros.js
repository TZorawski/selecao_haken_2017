var express = require('express');
var router = express.Router();

//Abre cadastro de equipamentos.
router.get('/equipamento', function(req, res, next) {
  res.render('cadastros', {
      title: 'Equipamentos',
      scriptButton: '#cad-equipamento',
      scriptTab: '#equipamento-tab'
    });
});

//Abre cadastro de salas.
router.get('/sala', function(req, res, next) {
  res.render('cadastros', {
      title: 'Salas/Laboratórios',
      scriptButton: '#cad-sala',
      scriptTab: '#sala-tab'
    });
});

module.exports = router;
