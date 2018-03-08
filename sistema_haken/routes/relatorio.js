var express = require('express');
var router = express.Router();

// Abre página de relatório.
router.get('/', function(req, res, next) {
  /* if(req.session.usuario == null) {
    res.redirect("/usuario/login");
    return;
  } */

  res.render('relatorio', {
    usuario: 'Vitor'//req.session.nome
  });
});

module.exports = router;
