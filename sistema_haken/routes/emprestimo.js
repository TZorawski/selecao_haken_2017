var express = require('express');
var router = express.Router();

var controller_movimentacao = require('../controllers/controller_movimentacao');
var controller_equipamento = require('../controllers/controller_equipamento');

// Abre página de empréstimos.
router.get('/', function(req, res, next) {
    var equipamentos = controller_equipamento.listar();
    res.render('emprestimos');
});

module.exports = router;
