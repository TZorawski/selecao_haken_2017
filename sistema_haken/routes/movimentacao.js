var express = require('express');
var router = express.Router();

//Obtem controllers
var controller_movimentacao = require('../controllers/controller_movimentacao');
var controller_equipamento = require('../controllers/controller_equipamento');

router.get('/', function(req, res, next) {
    var equipamentos = controller_equipamento.listar();
    res.render('movimentacao');
});

module.exports = router;
